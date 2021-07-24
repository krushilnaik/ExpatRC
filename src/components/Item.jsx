import React from 'react';

import './scss/Item.scss';

function Item() {
	return (
		<div className='item'>
			<div className='cost'>
				<select name='currency' id='currency'>
					<option value='IDR'>IDR</option>
					<option value='USD'>USD</option>
					<option value='JPY'>JPY</option>
					<option value='PHP'>PHP</option>
				</select>
				<input type='number' name='amount' id='amount' className='amount' defaultValue={500} />
			</div>
			<input type='text' className='name' />
			<input type='text' className='frequency' />
			<div className='button-group'>
				<button className='edit'>
					<i className='fas fa-edit'></i>
				</button>
				<button className='delete'>
					<i className='fas fa-times'></i>
				</button>
			</div>
		</div>
	);
}

export default Item;
