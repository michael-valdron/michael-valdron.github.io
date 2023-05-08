# Web Portfolio

<div id="header">

[![GPLv3 License](https://img.shields.io/badge/license-GPLv3-blue)](LICENSE)

</div>

My personal portfolio website.

## Hugo

This version of the website is generated using the [Hugo](https://gohugo.io/) static generator. 

### Install Hugo

Hugo CLI can be installed by running the following:

```sh
git clone https://github.com/gohugoio/hugo.git
cd hugo
go install
```

## Development with odo v3

```sh
odo dev 
```

By default, the `baseURL` for Hugo is set to `localhost:20001`. If you are running more than one components at once this will need to be changed.
For example, if the address binding will be `localhost:20002 -> 1313` then run the following:

```sh
odo dev --var baseURL=localhost:20002
```

## Other Versions

- [Version 3 (Gatsby)](https://github.com/michael-valdron/michael-valdron.github.io/tree/v3)
- [Version 2 (Cryogen)](https://github.com/michael-valdron/michael-valdron.github.io/tree/v2)
- [Version 1](https://github.com/michael-valdron/michael-valdron.github.io/tree/v1)
