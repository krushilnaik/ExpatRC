import React, { useState } from 'react';
import Item from './Item';

import './scss/ExpatRC.scss';

function ExpatRC() {
	const [search, setSearch] = useState('');

	return (
		<section className='expatrc'>
			<div className='table'>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='Search:'
					defaultValue={search}
					onChange={({ currentTarget }) => setSearch(currentTarget.value)}
				/>
				<div className='grid'>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
			<div className='info'>info</div>
		</section>
	);
}

export default ExpatRC;
