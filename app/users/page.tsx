import React from 'react';

type User = {
  id: number;
  name: string;
};

// By default cache behavior is on.
// Two types of rendering. Client side and Server side
// client side rendering is same as in react
// Server side has 2 types of rendering: 1- static rendering and dynamic rendering
// static rendering: Next will cache all data in build time and serve when requested. In this way way don't get real time data
// dynamic rendering: Next will not cache data and while request time it will create page and serve with latest data. To implement this behavior pass {cache: 'no-store' }
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // Cache behavior will only work in fetch fn. If using axios it won't work
    // cache: 'no-store', // next by default cache data. To negate this behavior we pass 2nd arg to fetch as object
    // next: { revalidate: 10 }, // with next revalidate, next will update data after 10s if we have data which changes frequently.
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
