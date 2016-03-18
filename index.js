var postcss = require('postcss');

module.exports = postcss.plugin('postcss-fix-minimum-fontsize', function (options) {

    return function (css) {

        options = options || {
            minSize: 12
        };

        css.walkRules(function (rule) {

            rule.walkDecls(function (decl, i) {

                if (decl.parent.selector.indexOf('html') === 0) {

                    if (decl.prop === 'font-size') {

                        var regexp = new RegExp('(\\d*\\.?\\d+)px', 'gi');

                        decl.value = decl.value.replace(regexp, function (match, $1) {

                            return (parseFloat($1) * options.minSize) + 'px';
                        });
                    }
                }

                if (decl.value.indexOf('rem') !== -1) {

                    var regexp = new RegExp('(\\d*\\.?\\d+)rem', 'gi');

                    decl.value = decl.value.replace(regexp, function (match, $1) {

                        return (parseFloat($1) / options.minSize) + 'rem';
                    });
                }

            });

        });

    }

});