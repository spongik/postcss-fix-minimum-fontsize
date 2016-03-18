# PostCSS Fix Minimum Fontsize [![Build Status][ci-img]][ci]

[PostCSS] plugin that deals with "minimum font size" browser option.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/spongik/postcss-fix-minimum-fontsize.svg
[ci]:      https://travis-ci.org/spongik/postcss-fix-minimum-fontsize

```css
html {
    font-size: 1px;
}
div {
    font-size: 24rem;
    line-height: 36rem;
}
```

```css
html {
    font-size: 12px;
}
div {
    font-size: 2rem;
    line-height: 3rem;
}
```

## Usage

```js
postcss([ require('postcss-fix-minimum-fontsize') ])
```

See [PostCSS] docs for examples for your environment.
