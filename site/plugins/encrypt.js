'use strict'

function encrypt(data){
	return btoa(JSON.stringify(data))
}

module.exports = encrypt
