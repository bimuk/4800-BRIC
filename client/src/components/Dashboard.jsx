import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import BarcodeGenerator from './BarcodeGenerator';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Container } from '@mui/material';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Dashboard
        </Typography>
        {user ? (
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
