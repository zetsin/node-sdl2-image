var path = require('path')

function image(name) {
	return require(path.join(__dirname, 'lib', name))
}

module.exports = image