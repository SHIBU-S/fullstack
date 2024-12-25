// import { useState } from "react";



// function UploadImageForm(){

//     const [fileData,setfileData] = useState();

//     const filechangeHandler = (e) => {setfileData(e.target.files[0]);}

//     const data = new FormData();
//     data.append("imageupload",fileData);

//     function submitdatas(){
//         fetch("ttp://localhost:4444/single",{
//             method : "POST",
//             body : data,
//         }).then((result)=>{console.log("File Sended Successfully..!!");})
//           .catch((err)=>{console.log(err.message);});
//     }


//     return(
//         <>
//             <form onSubmit={submitdatas}>
//                 Upload File : <input type="file" name="imageupload" onChange={filechangeHandler} />
//                 <button type="button">Submit File</button>
//             </form>
//         </>
//     )
// }

// export default UploadImageForm;





import React, { useState } from 'react';
import axios from 'axios';

const UploadImageForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    axios.post('/upload', formData)
      .then((response) => {
        setUploadedImage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {uploadedImage && (
        <img src={`data:${uploadedImage.contentType};base64,${uploadedImage.data.toString('base64')}`} alt="Uploaded Image" />
      )}
    </div>
  );
};

export default UploadImageForm;