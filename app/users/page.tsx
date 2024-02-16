import React, { Suspense } from "react";
import UserTable from "./userTable";
import Link from "next/link";

type Props = {
  searchParams: { sortOrder: string };
};

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link
        href='/users/new'
        className='btn'
      >
        New User
      </Link>
      {/* suspense component is use for showing loading UIs */}
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
