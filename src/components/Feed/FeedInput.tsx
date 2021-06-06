import React, { useState } from "react";

const FeedInput: React.FC = () => {
	const [message, setMessage] = useState('')

	const handleSendMessage = () => {
		console.log(message)
	}

	return (
		<div className="mb-7">
			<div>
				<textarea placeholder="Hvordan har du det?" className="w-96 resize-none p-1 pb-7 rounded-sm outline-none"/>
			</div>
			<button
				onChange={(e) => setMessage(e.currentTarget.value)}
				className="bg-indigo-500 rounded-sm px-6 py-1 text-gray-100"
				onClick={handleSendMessage}
			>
				Send
			</button>
		</div>
	)
}

export default FeedInput;