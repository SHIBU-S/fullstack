
// import React, { useState } from 'react';
// import axios from 'axios';

// function UploadImageForm(){
//   const [image, setImage] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState(null); 

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       alert('Please select an image first');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       const response = await axios.post('http://localhost:5432/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//         // Extract the image ID from the response
//         const imageId = response.data.imageId;
      
//         // Set the image URL to display it (MongoDB image fetch route)
//         setUploadedImageUrl(`http://localhost:5432/image/${imageId}`);
//       alert(response.data);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Error uploading image');
//     }
//   };

//   return (
//     <div>
//       <h1>Upload an Image</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           onChange={handleImageChange}
//         />
//         <button type="submit">Upload Image</button>
//       </form>

//       {uploadedImageUrl && (
//         <div>
//           <h2>Uploaded Image:</h2>
//           <img src={uploadedImageUrl} alt="Uploaded" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadImageForm;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UploadImageForm() {
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // To store the uploaded image URL
  const [allImages, setAllImages] = useState([]); // To store all uploaded images

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5432/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Get the imageId from the response
      const imageId = response.data.imageId;
      setUploadedImageUrl(`http://localhost:5432/image/${imageId}`); // Create the URL to display the image

      alert(response.data.message); // Alert the user about successful upload
      fetchAllImages(); // Fetch all images after upload
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    }
  };

  // Fetch all images from the server
  const fetchAllImages = async () => {
    try {
      const response = await axios.get('http://localhost:5432/images');
      setAllImages(response.data); // Set the fetched images to state
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchAllImages(); // Fetch images when the component mounts
  }, []);

  return (
    <div>
      <h1>Upload an Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Upload Image</button>
      </form>


      {/* Display all uploaded images */}
      <div>
        <h2>All Uploaded Images:</h2>
        {allImages.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          <div>
            {allImages.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={`Image ${image.id}`} style={{ width: '300px', margin: '10px' }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadImageForm;
