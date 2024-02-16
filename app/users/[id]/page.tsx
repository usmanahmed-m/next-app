import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: number };
};

// we can use destructure props to get id or simply do as normal
// const UserDetailPage = (props: Props) => {
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
