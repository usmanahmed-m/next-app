import React from "react";
import UserTable from "./userTable";

type Props = {
  searchParams: { sortOrder: string };
};

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      {/* If we want to show rel */}
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
