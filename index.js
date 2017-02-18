module.exports = (promise, callback) => {
	if (!(promise instanceof Promise)) throw new TypeError('\'promise\' has to be a Promise.');
	if (typeof callback !== 'function') throw new TypeError('\'callback\' has to be a function.');

	return promise.then(callback);
}