const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.DGI_v9bwNm_kSrC-CQSb3dBFzxOlrtBDHcEGXvCFqgU"

const tokenError = res => res.status(401).json({ error: 'Invalid token' })

function authenticate(req, res, next) {
    if (!req.headers.authorization) {
        return tokenError(res)
    }
    const authHeader = req.headers.authorization.split(' ')
    const prefix = authHeader[0]
    const token = authHeader[1]
    if (prefix != "Bearer" || token != TOKEN) {
        return tokenError(res)
    }
    next()
}

module.exports = authenticate