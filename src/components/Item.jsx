import React from 'react';

import './scss/Item.scss';

function Item() {
	return (
		<div className='item'>
			<div className='cost'>
				<span className='currency'>$</span>
				<span className='amount'>500</span>
			</div>
			<span className='name'>milk</span>
			<span className='frequency'>1</span>
			<button className='delete'>x</button>
		</div>
	);
}

export default Item;
