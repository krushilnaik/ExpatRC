import { useState, useCallback } from 'react';

/**
 * @returns {[object, function]}
 */
function useDatabase() {
	const [database, setDatabase] = useState(JSON.parse(localStorage.getItem('expatrc')));

	/**
	 * @param {string} action
	 * @param {object} payload
	 */
	const updateDatabase = useCallback((action, payload) => {
		switch (action) {
			case 'add item':
				setDatabase(prev => {
					prev[payload.country].push(payload.item);
					return prev;
				});

				break;
			case 'delete item':
				setDatabase(prev => {
					prev[payload.country].splice(payload.item);
					return prev;
				});

				break;
			case 'edit item':
				setDatabase(prev => {
					prev[payload.country][payload.index] = payload.item;
					return prev;
				});
				break;
			case 'add country':
				setDatabase(prev => {
					prev[payload.country] = [];
					return prev;
				});
				break;
			case 'get country':
				return database[payload.country];
			default:
				break;
		}
	}, []);

	return [database, updateDatabase];
}

export default useDatabase;
