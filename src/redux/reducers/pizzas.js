const initialState = {
	items: [],
	isloaded: false,
}

const pizzas = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PIZZAS':
			return {
				...state,
				items: action.payload,
				isloaded: true,
			}
		case 'SET_LOADED':
			return {
				...state,
				isloaded: action.payload,
			}
		default:
			return state
	}
}
export default pizzas
