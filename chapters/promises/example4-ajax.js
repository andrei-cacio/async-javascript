// Exercise: Promisify this

const http = require('http');

function showWeather(location) {
	const options = {
		headers: { 'User-Agent': 'curl' },
		host: 'wttr.in',
		path: `/${location}`
	};

	return new Promise((resolve, reject) => {
		http.get(options, res => {
			let txt = '';
			res.on('data', data => {
				txt += data;
			});

			res.on('end', () => {
				resolve(txt);
			});
		}).on('error', err => reject('crap', err));
	});
}

showWeather('poo')
	.then(result => {
		console.log(result);
	}).catch(err => console.log(err));