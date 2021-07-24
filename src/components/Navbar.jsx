import React from 'react';

import './scss/Navbar.scss';
import ThemeToggle from './ThemeToggle';

function Navbar() {
	return (
		<nav>
			<span className='logo'>.expatrc</span>
			<div className='group'>
				<select name='profile' id='profile'>
					<option value='Indonesia'>Indonesia</option>
					<option value='Philippines'>Philippines</option>
				</select>
				<ThemeToggle />
			</div>
		</nav>
	);
}

export default Navbar;
