export const getLocalStore  = () => JSON.parse(localStorage.getItem('state')) || undefined;
export const setLocalStore = (state, props) => {
	let toSave = {};
	props.forEach(p => toSave[p] = state[p]);
	localStorage.setItem('state', JSON.stringify(toSave))
};