# nodejs-promise-after

## Installation
To install this amazing module just run the following:
```
npm install --save vzwGrey/nodejs-promise-after
```

## Example
```js
const after = require('nodejs-promise-after');

const somePromise = new Promise((res) => {
	setTimeout(() => {
		res("Hello, world!");
	}, 5000);
});

after(somePromise, (message) => {
	console.log(message);
});
```

## Credits
* [vzwGrey](https://www.github.com/vzwGrey)