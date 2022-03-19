import * as React from "react";
import { useState, useRef, useEffect } from "react";

const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 20 },
    { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    useEffect(() => {
        inputRef.current?.focus();
    });

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return (
        <div>
            User Search
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onClick}>Find User</button>
            <div>
                <p>{user?.name}</p>
                <p>{user?.age}</p>
            </div>
        </div>
    );
};

export default UserSearch;
