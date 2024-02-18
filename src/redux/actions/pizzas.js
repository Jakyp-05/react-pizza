import axios from 'axios'

export const setPizzas = items => ({
	type: 'SET_PIZZAS',
	payload: items,
})

export const setLoaded = payload => ({
	type: 'SET_LOADED',
	payload,
})

export const getPizzas = (sortBy, category) => {
	return async dispatch => {
		try {
			dispatch(setLoaded(false))
			const url = `http://localhost:3001/pizzas?&_sort=${sortBy.type}${
				category !== null ? `&category=${category}` : ''
			}`
			const res = await axios.get(url)
			if (res.status === 200) {
				dispatch(setPizzas(res.data))
			} else {
				console.error(res.statusText)
			}
		} catch (error) {
			console.log(error)
		} finally {
			dispatch(setLoaded(true))
		}
	}
}
