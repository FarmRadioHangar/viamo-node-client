module.exports = function(config) {

  return {

    /*
     * viamo.surveys
     */
    surveys: require('./surveys')(config)

  };

};
