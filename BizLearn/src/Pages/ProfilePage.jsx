import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export function ProfilePage () {
    const { user, isAuthenticated, isLoading, error } = useAuth0();
    const BRIDGE_URL = 'http://localhost:5000' || "http://127.0.0.1:5000";

    if (error) return <div>Auth error: {error.message}</div>;

    console.log(error)

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    const [userData, setUserData] = useState(null);
    useEffect(() => {
    fetch(`${BRIDGE_URL}/api/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserData(data));
    }, []);

    console.log(userData)

    return (
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{userData ? userData.points : ""}</p>
        </div>
        )
    );
}