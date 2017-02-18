const before = require('..');

const somePromise = new Promise(() => {
	setTimeout(() => {
		console.log("Hello, world!");
	}, 5000);
});

before(somePromise, () => {
	console.log('This needs to happen before my promise! It is very important.');
});
