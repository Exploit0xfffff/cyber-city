import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Text, VStack, Input } from '@chakra-ui/react';

const SpotifyDashboard = () => {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setUserData(response.data);
      }).catch(error => {
        console.error('Error fetching user data', error);
      });

      axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setPlaylists(response.data.items);
      }).catch(error => {
        console.error('Error fetching playlists', error);
      });
    }
  }, [token]);

  const handleLogout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl">Spotify Dashboard</Text>
        {!token ? (
          <Button as="a" href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=user-read-private user-read-email playlist-read-private`}>
            Login to Spotify
          </Button>
        ) : (
          <>
            <Button onClick={handleLogout}>Logout</Button>
            {userData && (
              <Box>
                <Text>Welcome, {userData.display_name}</Text>
                <Text>Email: {userData.email}</Text>
              </Box>
            )}
            <Box>
              <Text fontSize="xl">Your Playlists</Text>
              {playlists.map(playlist => (
                <Box key={playlist.id} p={2} borderWidth={1} borderRadius="md">
                  <Text>{playlist.name}</Text>
                </Box>
              ))}
            </Box>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default SpotifyDashboard;
