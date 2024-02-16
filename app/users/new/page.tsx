"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  // import useRouter from next/navigation not from old next/router;
  const router = useRouter();

  return (
    <button
      className='btn btn-primary'
      onClick={() => router.push("/users")}
    >
      Create
    </button>
  );
};

export default NewUserPage;
