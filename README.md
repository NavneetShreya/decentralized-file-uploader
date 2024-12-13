# Decentralized File Uploader using IPFS and Node.js

This project allows users to upload files to the **IPFS** (InterPlanetary File System) through a decentralized platform using **Node.js** and **Express**. The uploaded files are stored on IPFS, and a **CID (Content Identifier)** is returned as the reference for the file. This provides a decentralized way of storing files where they are not hosted on a central server.

## Features
- Upload files to **IPFS** using the **IPFS HTTP Client**.
- Use of **Multer** for handling file uploads.
- **Express** server for handling requests.
- Return of **CID** (Content Identifier) after successful file upload.

## Requirements

Before you begin, ensure you have met the following requirements:
- **Node.js** and **npm** (Node Package Manager) installed. You can download it from [Node.js official website](https://nodejs.org/).
- **IPFS Account**: This app uses IPFS via Infura, so you will need an Infura API key. You can obtain one from [Infura's website](https://infura.io/).

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/navneetshreya/decentralized-file-uploader.git
    cd decentralized-file-uploader
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

## Usage

1. **Configure IPFS Client**: 
   - This project uses Infura's IPFS API. By default, the code connects to `https://ipfs.infura.io:5001`. You can modify the IPFS client setup if you have your own IPFS node.

2. **Run the Server**:
    - Start the server by running the following command:

    ```bash
    node app.js
    ```

    The server will start on `http://localhost:3000`.

3. **Test the Upload**:
    - Open **Postman** (or any API testing tool) and send a **POST** request to:

    ```
    http://localhost:3000/upload
    ```

    - In the **Body** tab of Postman, select **form-data** and choose a file to upload using the key `file`.
    
    - You should receive a response like this upon successful upload:

    ```json
    {
      "cid": "QmXYZ12345...",
      "message": "File uploaded to IPFS successfully"
    }
    ```

4. **Basic Health Check**:
    - You can access a simple health check by visiting:

    ```
    http://localhost:3000/
    ```

    It will return the message: `Welcome to the Decentralized File Uploader!`

## Folder Structure

decentralized-file-uploader/ │ ├── app.js # Main server file ├── package.json # Node.js project metadata and dependencies ├── uploads/ # Folder where uploaded files are temporarily stored before uploading to IPFS └── README.md # This file


## Technologies Used

- **Node.js** - JavaScript runtime for building the server.
- **Express** - Web framework for Node.js to handle HTTP requests.
- **Multer** - Middleware for handling `multipart/form-data` (file uploads).
- **IPFS HTTP Client** - Client for interacting with the IPFS network via Infura.
- **fs (File System)** - Node.js module for reading and deleting files from the local storage.

## Troubleshooting

- **Error: Cannot find module 'ipfs-http-client'**: If you encounter this error, ensure you have installed the required dependencies by running `npm install`.
  
- **File Upload Not Working**: Ensure that your Postman request is a **POST** request to the `/upload` route, and that you're sending the file as **form-data** with the key `file`.

## Contributing

Feel free to fork the repository, create a branch, and submit pull requests for any improvements or bug fixes. If you encounter any issues, please raise them on the GitHub issue tracker.

