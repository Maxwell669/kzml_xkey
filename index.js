const genId1 = require('opwf_xid');
const genId2 = require('pcbc_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|Df9EklyHN0|' + genId2()).digest('base64');
}


module.exports = generateKey;
