import React from 'react'
import Loader from './Loader'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const CollaborativeRoom = () => {
  return (
	<RoomProvider id="my-room">
		<ClientSideSuspense fallback={<Loader/>}>
			<div className='collaborative-room'>
				<Header>
				<div className='flex w-fit items-center justify-center gap-2'>
					<p className='document-title'>Title</p>
				</div>
				<SignedOut>
					<SignInButton/>
				</SignedOut>
				<SignedIn>
					<UserButton/>
				</SignedIn>
				</Header>
				<Editor/>
			</div>
		</ClientSideSuspense>
	</RoomProvider>
  )
}

export default CollaborativeRoom