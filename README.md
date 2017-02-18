# nodejs-promise-after

## Installation
To install this amazing module just run the following:
```
npm install --save vzwGrey/nodejs-promise-after
```

## Example
```js
const beforeafter = require('nodejs-promise-after');

const somePromise = new Promise((res) => {
	setTimeout(() => {
		res("Hello, world!");
	}, 5000);
});

beforeafter.after(somePromise, (message) => {
	console.log(message);
});

const anotherPromise = new Promise(() => {
	setTimeout(() => {
		console.log("Hello, world!");
	}, 5000);
});

beforeafter.before(anotherPromise, () => {
	console.log('This needs to happen before my promise! It is very important.');
});
```

## Credits
* [vzwGrey](https://www.github.com/vzwGrey)
* [gloss-water](https://www.github.com/gloss-water)
