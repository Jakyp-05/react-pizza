import React from 'react'
import ContentLoader from 'react-content-loader'

function PizzaLoadingBlock() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={460}
			viewBox='0 0 280 460'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<circle cx='134' cy='149' r='111' />
			<rect x='-1' y='284' rx='3' ry='3' width='280' height='26' />
			<rect x='-1' y='320' rx='6' ry='6' width='280' height='84' />
			<rect x='3' y='430' rx='0' ry='0' width='80' height='27' />
			<rect x='136' y='416' rx='21' ry='21' width='141' height='40' />
		</ContentLoader>
	)
}

export default PizzaLoadingBlock
