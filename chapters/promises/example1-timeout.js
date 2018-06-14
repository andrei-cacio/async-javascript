// Exercise: Write a functon wich will return the number 100 after 2 seconds:

function promiseMe() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('done');
		}, 2000);
	});
}

promiseMe().then(data => {
	console.log(data);
});
