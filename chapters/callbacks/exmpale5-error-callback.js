function hello(success, failure) {
	setTimeout(() => {
		const chance = Math.ceil(Math.random() * 2);

		if (chance == 2) {
			success()
		} else {
			failure();
		}
	});
}

const succ = () => console.log('yay!');
const failure = () => console.log('I should not play the Loto');

