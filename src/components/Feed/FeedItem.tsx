import React from 'react';
import { FeedItemProps } from "../../types/feed";

const FeedItem: React.FC<FeedItemProps> = (item) => {
	return (
		<div className="bg-white w-96 rounded-sm mb-3 pl-2">
			<div className="flex justify-between">
				<h2 className="font-medium text-gray-500 pt-2">{item.title}</h2>
				<h3 className="font-medium text-gray-500 pt-2 pr-2">{item.date}</h3>
			</div>
			<div className="pt-3">
				<p className="text-gray-600">{item.content}</p>
			</div>
			<div className="pt-3 pb-2">
				<h2 className="font-medium text-gray-500">{item.user}</h2>
			</div>
		</div>
	)
}

export default FeedItem;