import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Pool } from 'pg';
import admin from 'firebase-admin';
import bwipjs from 'bwip-js';

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL setup
const pool = new Pool({
  user: 'USER_ID',
  host: 'HOST_NAME',
  database: 'DATABASE_NAME',
  password: 'DATABASE_PASSWORDq',
  port: 5432,
});

// Firebase setup
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cs4800-bae3c-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();

// Example route to fetch data from PostgreSQL
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Example route to add document to Firestore
app.post('/addDocument', async (req, res) => {
  try {
    const docRef = db.collection('yourCollection').doc();
    await docRef.set(req.body);
    res.send('Document added');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to generate barcode
app.get('/barcode/:text', (req, res) => {
  bwipjs.toBuffer({
    bcid: 'code128',
    text: req.params.text,
    scale: 3,
    height: 10,
    includetext: true,
    textxalign: 'center',
  }, (err, png) => {
    if (err) {
      res.status(500).send('Error generating barcode');
    } else {
      res.type('png');
      res.send(png);
    }
  });
});

// Route to generate QR code
app.get('/qrcode/:text', (req, res) => {
  const qrCodeUrl = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(req.params.text)}`;
  res.redirect(qrCodeUrl);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
