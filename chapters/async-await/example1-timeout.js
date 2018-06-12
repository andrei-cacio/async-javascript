// Exercise: write an async function which will await 2 seconds before logging a message

function log() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(100);
		}, 1000);
	});
}

async function foo() {
	const val = await log();

	console.log(val);
}

foo();