# Web Portfolio

[![Go 1.26](https://img.shields.io/badge/1.26-blue?logo=go&labelColor=gray)](https://go.dev/doc/go1.26)
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

### Compose

Choose your container engine:

**Podman**
```sh
export CONTAINER_ENGINE='podman'
```

**Docker**
```sh
export CONTAINER_ENGINE='docker'
```

Run the following to Start Service in Background:

```sh
${CONTAINER_ENGINE} compose up -d
```

Run the following to Start Service in Foreground:

```sh
${CONTAINER_ENGINE} compose up
```

Run the following to Stop and Tidy up Service:

```sh
${CONTAINER_ENGINE} compose down
```

Quick one time run command with auto-removal after closing:

```sh
${CONTAINER_ENGINE} compose run --rm website
```

## Publishing

Run `hugo --minify --baseURL=<base-url-of-web-server>`, then copy all content generated under `public` to any target web directory of a web server.

To test out that this content is viewable from a web server, one can use `hugo --minify --baseURL=http://localhost:8000` followed by `python -m http.server --directory ./public`.

### Compose

```sh
${CONTAINER_ENGINE} compose run --rm website hugo --minify --baseURL=http://localhost:8000
```

## Cleanup

```sh
rm -rf public/
```

## Other Versions

- [Version 3 (Gatsby)](https://github.com/michael-valdron/michael-valdron.github.io/tree/v3)
- [Version 2 (Cryogen)](https://github.com/michael-valdron/michael-valdron.github.io/tree/v2)
- [Version 1](https://github.com/michael-valdron/michael-valdron.github.io/tree/v1)
