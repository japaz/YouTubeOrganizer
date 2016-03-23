import {LOAD_APP_STATE} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
	isLoading: true,
	tilesData: []
};

export default function YouTubeAppState(state = initialState, action) {
	switch (action.type) {
		case LOAD_APP_STATE:
		{
			let newState = objectAssign({}, state);
			newState.tilesData = [
				{
					img: 'http://www.publicdomainpictures.net/pictures/40000/t2/smooth-fox-terrier-dog.jpg',
					title: 'Image 1',
					author: 'Noknow'
				},
				{
					img: 'http://www.publicdomainpictures.net/pictures/40000/velka/butterfly-on-a-flower-1365009473Xea.jpg',
					title: 'Image 2',
					author: 'Noknowa'
				}
				];

			newState.isLoading = false;
			return newState;
		}

		default:
			return state;
	}
}

