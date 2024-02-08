import React from 'react';

type User = {
  id: number;
  name: string;
};

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
