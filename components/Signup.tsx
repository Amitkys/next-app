import axios from "axios";
import Link from "next/link";

async function getData() {
    const res = await axios.get('https://backend-ddtz.onrender.com/todos');
    return res.data;
}
export async function Signup() {
    const data = await getData();
    return (
        <div>
            <h1>this is home page</h1>
            {data.all_todo.map((todo: any) => (
                <div key={todo._id}>
                    <h2>Title: {todo.title}</h2>
                    <p>Description: {todo.description} </p>
                </div>
            ))}
            <Link href={'/testing'}>go to testing</Link>
        </div>
    )
}