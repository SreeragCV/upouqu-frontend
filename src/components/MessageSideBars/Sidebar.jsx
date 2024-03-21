import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'

function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
    <SearchInput/>
    <div className='divide-red-50'></div>
    <Conversations />
    {/* <LogoutButton /> */}
</div>
  )
}

export default Sidebar
