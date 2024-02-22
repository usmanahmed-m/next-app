"use client"; // as this has click event for button
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

// Go to cloudinary.com and create free account
// Install cloudinary npm i next-cloudinary
// go to env file and add environment variable with your cloudinary environment name
// visit next-cloudinary documentation to add next components

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset='gclucarr'>
      {({ open }) => (
        <button
          className='btn btn-primary'
          onClick={() => open()}
        >
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
