import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { getDatabase, ref, onValue } from 'firebase/database';

const CrowdMeter = () => {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const db = getDatabase();
        const usersRef = ref(db, 'onlineUsers');

        const unsubscribe = onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            if (users) {
                setUserCount(Object.keys(users).length);
            } else {
                setUserCount(0);
            }
        });

        return () => unsubscribe();
    }, []);
    
    return (
        <Box
            sx = {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >

            <Typography variant="h5" sx = {{ mb: 2 }}>Crowd Meter</Typography>
            <Box
                sx = {{
                    border: '2px solid #000',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                <Typography variant="body1" sx = {{ textAlign: 'center' }}>
                    Current Occupancy: 
                </Typography>
                <Typography variant="h4" sx = {{ textAlign: 'center', mt: 1 }}>
                    {userCount}
                </Typography>
            </Box>
        </Box>
    );
};

export default CrowdMeter;