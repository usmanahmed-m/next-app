import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  sortOrder: string;
};

// By default cache behavior is on.
// Two types of rendering. Client side and Server side
// client side rendering is same as in react
// Server side has 2 types of rendering: 1- static rendering and dynamic rendering
// static rendering: Next will cache all data in build time and serve when requested. In this way way don't get real time data
// dynamic rendering: Next will not cache data and while request time it will create page and serve with latest data. To implement this behavior pass {cache: 'no-store' }
//  //   const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
// Cache behavior will only work in fetch fn. If using axios it won't work
// cache: 'no-store', // next by default cache data. To negate this behavior we pass 2nd arg to fetch as object
// next: { revalidate: 10 }, // with next revalidate, next will update data after 10s if we have data which changes frequently.

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name,
  );

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          {/* anchor tag gives us full page reload which we don't want instead we use link component in next.js for server side navigation. with this approach we are doing everything on server instead of client side (creating state, onclick event to change state)  */}
          <th>
            <Link href='/users?sortOrder=name'>Name</Link>
          </th>
          <th>
            <Link href='/users?sortOrder=email'>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
