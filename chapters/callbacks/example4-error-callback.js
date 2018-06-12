// Will this work?
function hello() {
	setTimeout(() => {
		throw 'shit!';
	});
}

try {
	hello();
} catch (e) {
	console.log('crap', e);
}