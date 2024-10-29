import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

function Home() {
    const [user, setUser] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user.email);
                const uid = user.uid;

            } else {

            }
        });
    }, [])
    return (
        <div style={{ margin: '10px', fontSize: '25px' }}>Merhaba {user}</div>
    )
}

export default Home