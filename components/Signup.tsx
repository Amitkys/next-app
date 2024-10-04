"use client"
import axios from "axios";
import { useRef } from "react"


export function Signup() {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    function submitHandler() {
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        // console.log(firstName, lastName, username, password);

        axios.post('http://localhost:3000/api/signup', {
            firstName,
            lastName,
            username,
            password
        });
        
    }
    console.log('testing re rendering');
    return (
        <div>
            <input ref={firstNameRef} type="text" placeholder="first name" /> <br />
            <input ref={lastNameRef} type="text" placeholder="last name" /> <br />
            <input ref={usernameRef} type="text" placeholder="username " /> <br />
            <input ref={passwordRef} type="text" placeholder="password" /> <br />
            <button onClick={submitHandler}>sumbit</button>
        </div>
    )
}