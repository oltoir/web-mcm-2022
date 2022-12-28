/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useState } from 'react';

const IMGUR_CLIENT_ID = '82a000d086b1f1e';

function ImgurUploader() {
    const [imageUrl, setImageUrl] = useState('');
    const [uploadError, setUploadError] = useState('');

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];

        // Create a FormData object to store the file
        const formData = new FormData();
        formData.append('image', file);

        // Send the file to Imgur using the Imgur API
        fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
            },
            body: formData,
        })
            .then(async (response) => await response.json())
            .then((data) => {
                if (data.success) {
                    // If the upload was successful, save the image URL
                    setImageUrl(data.data.link);
                } else {
                    // If there was an error, save the error message
                    setUploadError(data.data.error);
                }
            })
            .catch((error) => {
                // If there was a network error, save the error message
                setUploadError(error.message);
            });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {uploadError && <p>Error: {uploadError}</p>}
            {imageUrl && <p>Image URL: {imageUrl}</p>}
        </div>
    );
}

export default ImgurUploader;