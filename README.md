# Web Portfolio

[![Go 1.24](https://img.shields.io/badge/1.24-blue?logo=go&labelColor=gray)](https://go.dev/doc/go1.24)
[![Hugo Latest](https://img.shields.io/badge/latest-cb4879?logo=hugo&labelColor=gray)](https://github.com/gohugoio/hugo/releases/latest)
[![GPLv3 License](https://img.shields.io/badge/license-GPLv3-green)](LICENSE)
[![Build and Deploy](https://github.com/michael-valdron/michael-valdron.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/michael-valdron/michael-valdron.github.io/actions/workflows/deploy.yml)

My personal portfolio website.

## Hugo

This version of the website is generated using the [Hugo](https://gohugo.io/) static generator. 

### Install Hugo CLI

Hugo CLI can be installed by running the following:

```sh
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install
```

## Development

### Hugo CLI

```sh
hugo server -D
```

### odo v3

```sh
odo dev 
```

By default, the `baseURL` for Hugo is set to `localhost:20001`. If you are running more than one components at once this will need to be changed.
For example, if the address binding will be `localhost:20002 -> 1313` then run the following:

```sh
odo dev --var baseURL=localhost:20002
```

## Publishing

Run `hugo --minify --baseURL=<base-url-of-web-server>`, then copy all content generated under `public` to any target web directory of a web server.

To test out that this content is viewable from a web server, one can use `hugo --minify --baseURL=http://localhost:8000` followed by `python -m http.server --directory ./public`.

## Other Versions

- [Version 3 (Gatsby)](https://github.com/michael-valdron/michael-valdron.github.io/tree/v3)
- [Version 2 (Cryogen)](https://github.com/michael-valdron/michael-valdron.github.io/tree/v2)
- [Version 1](https://github.com/michael-valdron/michael-valdron.github.io/tree/v1)
