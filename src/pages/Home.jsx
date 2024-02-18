import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Categories,
	SortPopup,
	PizzaBlock,
	PizzaLoadingBlock,
} from '../components'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { getPizzas } from '../redux/actions/pizzas'

const categoryNames = [
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]
const sortItems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
]

function Home() {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)
	const isloaded = useSelector(({ pizzas }) => pizzas.isloaded)
	const { category, sortBy } = useSelector(({ filters }) => filters)

	useEffect(() => {
		dispatch(getPizzas(sortBy, category))
	}, [category, sortBy])

	const onSelectCategory = useCallback(
		index => {
			dispatch(setCategory({ category: index }))
		},
		[dispatch]
	)

	const onSelectSortType = useCallback(
		type => {
			dispatch(setSortBy({ type }))
		},
		[dispatch]
	)

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup
					activeSortType={sortBy.type}
					items={sortItems}
					onClickSortType={onSelectSortType}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isloaded
					? items.map(obj => (
							<PizzaBlock
								onClickAddPizza={obj => console.log(obj)}
								key={obj.id}
								isLoading={true}
								{...obj}
							/>
					  ))
					: Array(10)
							.fill(0)
							.map((_, index) => <PizzaLoadingBlock key={index} />)}
			</div>
		</div>
	)
}

export default Home
