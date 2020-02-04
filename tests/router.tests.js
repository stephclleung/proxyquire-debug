const chai = require("chai");
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require("chai-http");

// response mocking libraries
const sinon = require("sinon");
const nock = require("nock");
// const proxyquire = require("proxyquire");

chai.use(chaiHttp);

const proxyquire = require('proxyquire')

// server and dummy data
const server = require("../src/app.js");


describe.only("Vetting", function () {
    it("Should stub function in lib.js", function (done) {
        const vettingStub = sinon.stub().returns(100)
        const evalProxy = proxyquire('../src/router.js', {
            './lib': {
                'vettingFunction': vettingStub
            }
        })

        const dummyData = {
            x: 2,
            vetting: {
                stuff: 5
            }
        }

        chai.request(server)
            .post("/update")
            .send(dummyData)
            .end(function (err, res) {
                expect(vettingStub.returnValues)
                expect(vettingStub.callCount).to.equal(1);


                done();
            })
    })
})