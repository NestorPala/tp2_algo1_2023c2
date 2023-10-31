const tokenError = res => res.status(401).json({ error: 'Invalid token' })

const notFoundError = (res, element) => res.status(404).json({ error: element + ' not found' })


module.exports = { tokenError, notFoundError }