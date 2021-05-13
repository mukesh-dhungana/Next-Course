import React from 'react'
import dynamic from 'next/dynamic'

const Admin = dynamic(() => import('../../Components/Admin'))

const AdminPage = () => <Admin />

export default AdminPage