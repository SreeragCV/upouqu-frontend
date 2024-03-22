import React from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'

function MessageContainer() {
  return (
    <div className='md:min-w-[450px] flex flex-col bg-stone-100 p-3'>
			{/* {!selectedConversation ? (
				<NoChatSelected />
			) : ( */}
				<>
					{/* Header */}
					<div className=' px-4 py-2 mb-2'>
						<span className='label-text'>To: </span>
						<span className='text-gray-900 font-bold'>full_name</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			{/* )} */}
		</div>
  )
}

export default MessageContainer
