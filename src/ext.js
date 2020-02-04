const rp = require('request-promise');
const externalAPICall = async () => {

    try {
        /* await some stuff going on here */
        const results = await rp.get(' https://od-api-demo.oxforddictionaries.com:443/api/v1/languages');
        return results;
    } catch (error) {
        return { error }
    }

}

module.exports = {
    externalAPICall
}