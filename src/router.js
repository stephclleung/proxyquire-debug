
var express = require("express");
var router = express.Router();

const dotenv = require('dotenv');
dotenv.config();

const { vettingFunction } = require('./lib');
const { externalAPICall } = require('./ext');

router.post('/update', async (req, res) => {
    if (req.body.vetting) {

        const results = vettingFunction(req.body.vetting); //Would like to stub this.

        if (results.error) {
            return res.status(500).send({ "msg": "An error occured during vetting check" })
        }
        req.body = { ...req.body, ...results };
    }


    const response = await externalAPICall(req.body);
    if (response.error) {
        return res.status(400).send({ "msg": "Some other error" });
    }
    return res.status(200).send(response);

});


module.exports = router;