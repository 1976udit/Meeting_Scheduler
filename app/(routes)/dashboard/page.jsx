"use client"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <LogoutLink>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </LogoutLink>
    </div>
  )
}

export default Dashboard