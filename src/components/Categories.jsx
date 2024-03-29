import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Categories = memo(({ items, onClickCategory, activeCategory }) => {
	return (
		<div className='categories'>
			<ul>
				<li
					className={activeCategory === null ? 'active' : ''}
					onClick={() => onClickCategory(null)}
				>
					Все
				</li>
				{Array.isArray(items) &&
					items.map((name, index) => (
						<li
							className={activeCategory === index ? 'active' : ''}
							onClick={() => onClickCategory(index)}
							key={`${name}_${index}`}
						>
							{name}
						</li>
					))}
			</ul>
		</div>
	)
})

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null])
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func,
}

Categories.defaultProps = { items: [], activeCategory: null }

export default Categories
