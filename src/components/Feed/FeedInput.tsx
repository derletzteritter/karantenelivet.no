import React from "react";

const FeedInput: React.FC = () => {
	return (
		<div className="mb-7">
			<div>
				<textarea placeholder="Hvordan har du det?" className="w-96 resize-none p-1 pb-7 rounded-sm outline-none"/>
			</div>
			<button className="bg-indigo-500 rounded-sm px-6 py-1 text-gray-100">Send</button>
		</div>
	)
}

export default FeedInput;