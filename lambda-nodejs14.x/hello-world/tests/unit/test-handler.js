'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        event = {
            "firstName": "Ada",
            "lastName": "Lovelace"
        }

        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('string');
        expect(response).to.be.equal('Hello from Lambda, Ada Lovelace');
        // expect(response.location).to.be.an("string");
    });
});
