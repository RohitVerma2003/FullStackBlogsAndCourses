import React, { useState } from 'react'
import AdminNav from '../../Components/AdminNav'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <div>
            <AdminNav/>
            <Outlet/>
        </div>
    )
}

export default Admin
