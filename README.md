# shopify-hscode

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> hscode collection in a library

## Install

```bash
# npm
npm install shopify-hscode
# yarn
yarn add shopify-hscode
```

## Usage

```ts
import { getAllHSCode } from 'shopify-hscode';

getAllHSCode();
//=> [{
      section: 'I',
      hscode: '01',
      description: 'Animals; live',
      parent: 'TOTAL',
      level: '2',
      },...]
```

## API

### getHSCodeChild(parent?:string)

get; the list of hscode childs. If not proide by default will return top level hs codes.

#### parent

Type: `string`
parent hs code number

### searchHSCodeByName(hsCodeName?:string)

filter out the hscode matching given string in description of hscode.

#### hsCodeName

Type: `string`
search param

### searchHSCodeById(hsCode?:string)

filter out the hscode having given string in hscode numebr.

#### hsCode

Type: `string`
valid hscode

### getHSCode(id:string)

get hscode by hscode number

#### id

Type: `string`
valid hscode

### getAllHSCode()

get complete list of hscode available in library

[build-img]: https://github.com/iamsr/shopify-hscode/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/iamsr/shopify-hscode/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/shopify-hscode
[downloads-url]: https://www.npmtrends.com/shopify-hscode
[npm-img]: https://img.shields.io/npm/v/shopify-hscode
[npm-url]: https://www.npmjs.com/package/shopify-hscode
[issues-img]: https://img.shields.io/github/issues/iamsr/shopify-hscode
[issues-url]: https://github.com/iamsr/shopify-hscode/issues
[codecov-img]: https://codecov.io/gh/iamsr/shopify-hscode/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/iamsr/shopify-hscode
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
