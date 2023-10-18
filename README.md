# vite-plugin-preprocess-debug-info

![NPM](https://img.shields.io/npm/l/vite-plugin-preprocess-debug-info)

![npm](https://img.shields.io/npm/v/vite-plugin-preprocess-debug-info)

Vite plugin preprocessing source files for C-like `__FILE__` and `__LINE__`

## Setup
nuxt.config.ts
```js
import preprocess from 'vite-plugin-preprocess-debug-info';
...
vite: {
    plugins: [
        {
            ...preprocess({dir: __dirname + '/', files: /\.(vue)|(ts)$/}),
            enforce: 'pre'
        }
    ],
...
}
```

## Usage
Any specified file types will be processed. By default .vue and .ts assumed.
`__FILE__` will be replaced with the file name, `__LINE__` with the line number EXACTLY like in the original file.

## Motivation
If you'd like to collect logs from the client's browser, it's highly useful to find out the exact place in your code, where the log function has been called.
