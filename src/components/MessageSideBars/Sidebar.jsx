import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'

function Sidebar() {
  return (
    <div className="border-r bg-stone-100 border-slate-500 p-3 flex flex-col items-center">
    <SearchInput/>
    <div className='divide-red-50'></div>
    <Conversations />
</div>
  )
}

export default Sidebar
