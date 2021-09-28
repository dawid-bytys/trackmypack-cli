# trackmypack-cli
A cli package with allows you to track your package from a terminal (made it specifically for myself)

supported carriers: Orlen, DPD, UPS, Poczta Polska, FedEx, GLS, InPost, press

![Terminal](https://i.imgur.com/b10YW1m.png)

### 1. Installation
npm
```zsh
$ npm install -g trackmypack-cli
```
yarn
```zsh
$ yarn global add trackmypack-cli
```
### 2. Usage
```zsh
$ trackmypack <tracking_id>
```
It will recognize the carrier by itself, you don't have to provide it.
