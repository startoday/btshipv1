import { localStorageKey, stateMode } from '../helpers/constants'

const localStorageOpen = (isOpen = false, action) => {
	switch (action.type) {
		case 'closeLocalHint':
            localStorage.removeItem(localStorageKey);
            console.log("local storage cleaned")
				return !isOpen;
		default:
			//localStorage.setItem(localStorageKey, JSON.stringify(game));
			return isOpen;
	}
};
export default  localStorageOpen;