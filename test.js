import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('converts font-size in html', t => {
    return run(t, 'html { font-size: 1.1px; }', 'html { font-size: 13.2px; }', { });
});

test('converts rem', t => {
    return run(t, 'div { font-size: 12rem; }', 'div { font-size: 1rem; }', { });
});

test('converts rem in all properties', t => {
    return run(t, 'div { height: 13.2rem; }', 'div { font-size: 1rem; }', { });
});

test('minSize option', t => {
    return run(t, 'html { font-size: 1px; }', 'html { font-size: 20px; }', { minSize: 20 });
});
