import { atom } from 'recoil';

export const feedState = {
	feed: atom({
		key: 'feed',
		default: null
	})
}