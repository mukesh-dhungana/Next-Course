import React from 'react'
import Block from '../components/Block'

const getId = (data) => data.reduce((a, c) => a.id > c.id ? a.id + 1 : c.id + 1, 0)

export default function Home() {
  const [blocks, setBlock] = React.useState([{ id: 1 }])

  return (
    <div style={{ margin: 5 }}>
      <button
        className="button"
        onClick={() => setBlock(bl => ([...bl, { id: getId(blocks) }]))}>
        New Note
        </button>
      <div className="blocks">
        {blocks.map(block => (
          <Block key={block.id} deleteBlock={()=>setBlock(blocks.filter(x=>x.id !==block.id))} />
        ))}
      </div>

    </div >
  )
}
