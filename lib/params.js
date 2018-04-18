module.exports = {

  BinChar: function(input, name) {
    var sane = String(Number(input));
    if ('1' !== sane && '0' !== sane) {
      throw new Error(`Truthy value expected for parameter ${name}`);
    }
    return sane;
  },

  normalize: function(opts, rules) {
    opts = opts || {};
    var params = opts;
    Object.keys(rules).forEach(function(key) {
      var rule = rules[key],
          optKey = key;
      if ('string' === typeof(rule.alias) && opts.hasOwnProperty(rule.alias)) {
        optKey = rule.alias;
      } else if (true == rule.required && !opts.hasOwnProperty(key)) {
        throw new Error(`Parameter ${key} is required`);
      }
      if (opts.hasOwnProperty(optKey)) {
        var value = 'function' === typeof(rule.format) 
          ? rule.format(opts[optKey], optKey) : opts[optKey];
        params[key] = value;
        if (optKey !== key) {
          delete params[optKey];
        }
      }
    });
    return params;
  }

};
