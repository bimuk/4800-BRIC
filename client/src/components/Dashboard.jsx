import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import BarcodeGenerator from './BarcodeGenerator';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Container } from '@mui/material';
import * as firebase from 'firebase/app'; 


const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      await firebase.auth().signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out');
    }
  };

  return (
    <Container component="main" maxWidth="sm" className="container">
      <Box className="form-container">
        <Typography component="h1" variant="h5">
          Dashboard
        </Typography>
        {user ? (
          // having issue with the redirecting 
          <div>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Welcome, {user.email}
            </Typography>
            <BarcodeGenerator email={user.email} />
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Typography variant="body1">
            Please log in to see your dashboard.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
