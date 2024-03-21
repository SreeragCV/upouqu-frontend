import React from 'react'

function Conversation() {
  return (
    <div>
      <>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer`}
				// onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar online`}>
					<div className='w-12 rounded-full'>
						<img src='https://robohash.org/random.png' alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-950'>full_name</p>
					</div>
				</div>
			</div>

			<div className='divider my-0 py-0 h-1' />
		</>
    </div>
  )
}

export default Conversation
