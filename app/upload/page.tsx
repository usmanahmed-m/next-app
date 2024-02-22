"use client"; // as this has click event for button
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

// Go to cloudinary.com and create free account
// Install cloudinary npm i next-cloudinary
// go to env file and add environment variable with your cloudinary environment name
// visit next-cloudinary documentation to add next components
// To customize upload widget visit to demo.cloudinary.com/uw/#/  . styles copied from given link

type CloudinaryResult = {
  public_id: string;
};

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt='A coffee image'
        ></CldImage>
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset='gclucarr'
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#69778A",
              menuIcons: "#0094C7",
              link: "#53ad9d",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#c43737",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Poppins",
                active: true,
              },
            },
          },
        }}
      >
        {({ open }) => (
          <button
            className='btn btn-primary'
            onClick={() => open()}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
