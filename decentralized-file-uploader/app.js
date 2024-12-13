import express from 'express';
import multer from 'multer';
import { create } from 'ipfs-http-client';
import fs from 'fs';

const app = express();
const port = 3000;

// IPFS client setup
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// Multer setup foruoloa
const upload = multer({ dest: 'upload/' });

// Route to upload a file to IPFS
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded');
        }

        // Read file data
        const fileData = fs.readFileSync(file.path);

        // Upload to IPFS
        const result = await ipfs.add({ content: fileData });

        // Remove the file from local storage after upload
        fs.unlinkSync(file.path);

        res.status(200).json({ cid: result.cid.toString(), message: 'File uploaded to IPFS successfully' });
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        res.status(500).send('Error uploading file');
    }
});

// Basic health check route
app.get('/', (req, res) => {
    res.send('Welcome to the Decentralized File Uploader!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
