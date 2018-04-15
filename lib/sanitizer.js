module.exports = {

  BinChar: function(input, name) {
    var sane = String(Number(input));
    if ('1' !== sane && '0' !== sane) {
      throw new Error(`Truthy value expected for parameter ${name}`);
    }
    return sane;
  },

  params: function(options, rules) {
    var params = options;
    Object.keys(rules).forEach(function(key) {
      var rule = rules[key],
          optKey = key;
      if ('string' === typeof(rule.alias) && options.hasOwnProperty(rule.alias)) {
        optKey = rule.alias;
      } else if (true == rule.required && !options.hasOwnProperty(key)) {
        throw new Error(`Parameter ${key} is required`);
      }
      if (options[optKey]) {
        var value = 'function' === typeof(rule.format) 
          ? rule.format(options[optKey]) : options[optKey];
        params[key] = value;
        if (optKey !== key) {
          delete params[optKey];
        }
      }
    });
    return params;
  }

};
