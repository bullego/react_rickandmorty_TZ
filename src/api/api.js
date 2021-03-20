const baseUrl = 'https://rickandmortyapi.com/api';

//characters
export const fetchCharacters = async () => {
	const response = await fetch(`${baseUrl}/character`, {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});
	if (!response.ok) {
		throw new Error('Failed to get characters');
	} else {
		return await response.json();
	}	
}

export const fetchFilteredCharacters = async (filterQueryParams) => {
	const response = await fetch(`${baseUrl}/character/?${filterQueryParams}`, {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});
	if (!response.ok) {
		throw new Error('Failed to get filtered characters');
	} else {
		return await response.json();
	}	
}
	
export const fetchNextCharacters = async (nextPageUrl) => {
	const response = await fetch(`${nextPageUrl}`, {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});
	if (!response.ok) {
		throw new Error('Failed to get next characters');
	} else {
		return await response.json();
	}	
}


//episodes
export const fetchEpisodes = async () => {
	let episodsArr = []
	let i = 1;

	while(i<100) {
		episodsArr.push(i)
		i++
	}

	const response = await fetch(`${baseUrl}/episode/${episodsArr}`, {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});
	if (!response.ok) {
		throw new Error('Failed to get episodes');
	} else {
		return await response.json();
	}	
}


//locations
export const fetchLocations = async () => {
	let locationsArr = []
	let i = 1;

	while(i<200) {
		locationsArr.push(i)
		i++
	}

	const response = await fetch(`${baseUrl}/location/${locationsArr}`, {
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	});
	if (!response.ok) {
		throw new Error('Failed to get locations');
	} else {
		return await response.json();
	}	
}