import React from "react";
import UserTable from "./userTable";

type Props = {
  searchParams: { sortOrder: string };
};

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
