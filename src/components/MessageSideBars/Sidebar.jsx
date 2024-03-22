import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'

function Sidebar() {
  return (
    <div className="border-r bg-stone-100  border-slate-500 p-3 flex flex-col">
    <SearchInput/>
    <div className='divide-red-50'></div>
    <Conversations />
    {/* <LogoutButton /> */}
</div>
  )
}

export default Sidebar