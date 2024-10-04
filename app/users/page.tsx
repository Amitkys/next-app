import { PrismaClient } from "@prisma/client/";
const client = new PrismaClient();

async function fetchData() {
    const all_users = await client.user.findMany();
    console.log(all_users);
}

export default function () {
    fetchData();
    return (
        <div>
            <h1>this is user page</h1>
        </div>
    )
}