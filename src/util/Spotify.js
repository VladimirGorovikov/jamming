import clientId from "./ENV";
const redirectUri = 'http://localhost:3000/';
let accessToken;
let userId;

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            window.setTimeout(() => {
                accessToken = '';
                window.history.pushState('Access Token', null, '/');
            }, Number(expiresInMatch[1]) * 1000);
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    async getTracks(searchTerm) {
        const accessToken = this.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const jsonResponse = await response.json();

        // If no tracks found return empty list
        if (!jsonResponse.tracks) {
            return [];
        } else {
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    album: track.album.name,
                    artist: track.artists[0].name,
                    uri: track.uri,
                    name: track.name
                }
            });
        }
    },

    async getUserId() {
        if (userId) return userId;

        const accessToken = this.getAccessToken();
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const jsonResponse = await response.json();
        userId = jsonResponse.id;
        return userId;
    },

    async createPlaylistWithName(userId, playlistName) {
        const accessToken = this.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            method: 'POST',
            body: JSON.stringify({name: playlistName})
        });
        const jsonResponse = await response.json();

        return jsonResponse.id;
    },

    async createPlaylist(playlistName, uris) {
        if (!playlistName || !uris.length) return;
        const accessToken = this.getAccessToken();
        const userId = await this.getUserId();
        const playlistId = await this.createPlaylistWithName(userId, playlistName);

        const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            method: 'POST',
            body: JSON.stringify({uris: uris})
        });
    }
}

export default Spotify;