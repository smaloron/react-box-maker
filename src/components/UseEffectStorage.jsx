import React, { useState, useEffect } from "react";
export default function UseEffectStorage () {
    const [user, setUser] = useState("Sébastien");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedUser = window.localStorage.getItem("user");
        if (storedUser) {
            setUser(() => {
                setLoading(false);
                return storedUser
            });
        }
    }, []);
    useEffect(() => {
        if (!loading) {
            window.localStorage.setItem("user", user);
        }
    }, [user]);
    return (
        <select value={user} onChange={e => setUser(e.target.value)}>
            <option>Severn</option>
            <option>Sébastien</option>
            <option>Alice</option>
            <option>Pierre</option>
        </select>);
};