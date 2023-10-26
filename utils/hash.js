const { createHash } = require('crypto');

module.exports = function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}
