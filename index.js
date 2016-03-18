var postcss = require('postcss');

const moduleName = 'postcss-fix-minimum-fontsize';

const pixelValueRegexp = new RegExp('(\\d*\\.?\\d+)px', 'gi');
const remValueRegexp = new RegExp('(\\d*\\.?\\d+)rem', 'gi');

module.exports = postcss.plugin(moduleName, function (options) {

    return function (css) {

        options = options || { };
        options.minSize = options.minSize || 12;

        css.walkRules(function (rule) {

            rule.walkDecls(function (decl) {

                if (decl.parent.selector.indexOf('html') === 0) {

                    if (decl.prop === 'font-size') {

                        decl.value = decl.value.replace(
                            pixelValueRegexp,
                            function (match, $1) {

                                var value = parseFloat($1) * options.minSize;
                                return +value.toFixed(10) + 'px';
                            });
                    }
                }

                if (decl.value.indexOf('rem') !== -1) {

                    decl.value = decl.value.replace(
                        remValueRegexp,
                        function (match, $1) {

                            var value = parseFloat($1) / options.minSize;
                            return +value.toFixed(10) + 'rem';
                        });
                }

            });

        });

    };

});
