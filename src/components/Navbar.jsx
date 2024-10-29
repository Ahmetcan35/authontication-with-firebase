import { useNavigate } from "react-router-dom";
import React from 'react'
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";


function Navbar() {

    const navigate = useNavigate();
    const logout = async () => {
        toast.success("Çıkış yapılıyor");
        setTimeout(() => {
            signOut(auth);
            navigate("/auth");
        }, 3000);

    }

    return (
        <div className='navbar'>
            <div className='navbar-left'>FİREBASE</div>
            <div onClick={logout} className='navbar-right'>Çıkış yap</div>
        </div>
    )
}

export default Navbar