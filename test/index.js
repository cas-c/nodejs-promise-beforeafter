const after = require('..');

const somePromise = new Promise((res) => {
	setTimeout(() => {
		res("Hello, world!");
	}, 5000);
});

after(somePromise, (message) => {
	console.log(message);
});