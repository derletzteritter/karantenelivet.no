import { useRecoilState } from "recoil";
import { feedState } from "./state";
import { FeedItemProps } from "../../../types/feed";

interface FeedHookProps {
	feed: FeedItemProps[];
	setFeed: (feed: FeedItemProps[]) => void;
}

export const useFeed = (): FeedHookProps  => {
	const [feed, setFeed] = useRecoilState(feedState.feed);
	return { feed, setFeed  }
}