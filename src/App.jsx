import React from 'react';

import './App.scss';
import ExpatRC from './components/ExpatRC';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<ExpatRC />
			<footer>Hosted on GitHub Pages</footer>
		</>
	);
}

export default App;
