"use client"
import { app } from '../../../config/firebase.Config'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getDoc ,getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

  const db = getFirestore(app)
  const {user} = useKindeBrowserClient()
  const [loading, setLoading] = useState(true)
  // console.log(user)
  const router = useRouter()

  
  useEffect(() => {
    user && isBussinessRegistered();
  }, [user]);

  const isBussinessRegistered = async () => {
      const docRef = doc(db, "BUSINESS", user?.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setLoading(false)
      } else {
        console.log("No such document!");
        setLoading(false)
        router.replace('/create-business')
      }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    )
  }

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