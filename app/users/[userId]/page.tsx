import client from "@/lib/Singleton_prisma";

async function fetchData(id: string) {

    const userId = parseInt(id);

    const user = await client.user.findUnique({
        where: { id: userId },
    });
    return user;
}
export default async function User({ params }: { params: { userId: string } }) {
    const data = await fetchData(params.userId);
    return (
        <div>
            {/* <h1>This is user ID page {params.userId} </h1> */}
            <p>username: {data?.username} </p>
            <p>username: {data?.firstName} </p>
            <p>username: {data?.lastName} </p>
        </div>
    );
}