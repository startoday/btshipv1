import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CustNav() {
    const navigate = useNavigate();
    return (
        <>
        <div>
        <button onClick={() => navigate('/')}>homeNavbar</button>
        </div>
        </>
    )
}
