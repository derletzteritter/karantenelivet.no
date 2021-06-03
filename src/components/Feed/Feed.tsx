import React, { useEffect } from 'react';
import { useFeed } from "./hooks/useFeed";
import FeedItem from "./FeedItem";
import FeedInput from "./FeedInput";

const Feed: React.FC = () => {
	const { feed, setFeed } = useFeed();

	// just boilerplate
	useEffect(() => {
		setFeed([
			{
				title: 'Ugh',
				content: 'Er så lei av dette!',
				user: 'chip',
				date: '09.30 AM'
			},
			{
				title: 'Haux',
				content: 'Er coroana egentlig ekte?',
				user: 'Illuminati',
				date: '11.54 AM'
			}
		])
	}, [setFeed])

	return (
		<div className="flex justify-center">
			<div className="flex flex-col">
				<div className="pb-3">
					<h2 className="text-gray-200 text-2xl">Nyeste Innlegg</h2>
				</div>
				<div>
					<FeedInput />
				</div>
				<div>
					{feed && feed.map((item) => (
						<FeedItem {...item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Feed;