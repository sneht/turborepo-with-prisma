"use server";
// Ensure you have added .env file before use of prisma
import prisma from "database";

export default async function Home() {
  const users = await prisma.users.findMany();
  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
