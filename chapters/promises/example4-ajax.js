// Exercise: Promisify this

const http = require('http');

function showWeather(location) {
	const options = {
		headers: { 'User-Agent': 'curl' },
		host: 'wttr.in',
		path: `/${location}`
	};

	http.get(options, res => {
		let txt = '';
		res.on('data', data => {
			txt += data;
		});

		res.on('end', () => {
			console.log(txt);
		});
	}).on('error', err => console.log('crap', err));
}

showWeather('cluj');