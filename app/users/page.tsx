import { PrismaClient } from "@prisma/client";
import Link from "next/link";
const client = new PrismaClient();

async function fetchData() {
    const all_users = await client.user.findMany();
    return all_users;
}

export default async function () {
    const data = await fetchData();
    return (
        <div>
            {data.map((user) => (
                <div key={user.id}>
                    <p>{user.username} </p>
                    <p>{user.firstName} </p>
                    <p>{user.lastName} </p>
                    <Link href={`/user/${user.id}`}><button>edit</button></Link>
                    <hr />
                </div>
            ))}
        </div>
    )
}