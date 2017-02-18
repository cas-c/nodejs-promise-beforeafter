# nodejs-promise-before

## Installation
To install this amazing module just run the following:
```
npm install --save gloss-water/nodejs-promise-before
```

## Example
```js
const before = require('..');

const somePromise = new Promise(() => {
	setTimeout(() => {
		console.log("Hello, world!");
	}, 5000);
});

before(somePromise, () => {
	console.log('This needs to happen before my promise! It is very important.');
});
```

## Output of above
```sh
This needs to happen before my promise! It is very important.
Hello, world!
```

## Credits
* [vzwGrey](https://www.github.com/vzwGrey)
* [gloss-water](https://www.github.com/gloss-water)