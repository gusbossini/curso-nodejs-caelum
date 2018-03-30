const assert = require('assert')
const http = require('http')

describe('# Produtos', () => {
    it('url "/produtos" trazendo JSON', () => {
        http.get('http://localhost:3000', (res) => {
            assert.equal(res.headers['content-type'], 'application/json')
        })
    })
})