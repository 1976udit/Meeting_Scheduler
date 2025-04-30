"use client"
import { app } from '../../../config/firebase.Config'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getDoc ,getFirestore } from 'firebase/firestore'
import React, { useEffect } from 'react'

const Dashboard = () => {

  const db = getFirestore(app)
  const {user} = useKindeBrowserClient()
  // console.log(user)

  const isBussinessRegistered = async () => {
    try {
      const docRef = doc(db, "BUSINESS", user?.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error.message);
    }
  };

  useEffect(() => {
    user && isBussinessRegistered();
  }, [user]);

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