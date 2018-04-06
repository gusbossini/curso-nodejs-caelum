const assert = require('assert')
const http = require('http')
const charset = '; charset=utf-8'
const request = require('supertest');
const server = require('../../server');

const testServer = request(server)

describe('# Produtos', () => {
    
    it('url "/produtos" trazendo JSON', (done) => {
        testServer.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })

    it('url "/produtos" trazendo HTML', (done) => {
        request(server)
            .get('/produtos')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    })

    // it('url "/produtos" trazendo JSON', (done) => {
    //     const params = {
    //         hostname: 'localhost',
    //         port: 3000,
    //         path: '/',
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     }
    //     http.get(params, (res) => {
    //         assert.equal(res.headers['content-type'], 'application/json' + charset)
    //         done()
    //     })
    // })

    // it('url "/produtos" trazendo HTML', (done) => {
    //     const params = {
    //         hostname: 'localhost',
    //         port: 3000,
    //         path: '/',
    //         headers: {
    //             'Accept': 'text/html'
    //         }
    //     }
    //     http.get(params, (res) => {
    //         assert.equal(res.headers['content-type'], 'text/html' + charset)
    //         done()
    //     })
    // })

})