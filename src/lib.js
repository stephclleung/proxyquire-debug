

const vettingFunction = (vetting) => {

    try {
        let x = vetting;
        /* External API call here */

        return x;
    } catch (error) {

        return { error };
    }
}

module.exports = {
    /*there's other functions here */
    vettingFunction
}
