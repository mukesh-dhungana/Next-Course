import React from 'react'
import Form from '../components/Form'
import List from '../components/List'

const main = {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center'
}

export default function Home() {
  return (
    <div style={main}>
      <Form />
      <List />
    </div>
  )
}
