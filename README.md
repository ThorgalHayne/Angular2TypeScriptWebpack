Angular2TypeScriptWebpack
=========================

## 1. @Component, @Pipe, @Router
###1.1 Error
```
error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
```
###1.2 Solution
Add `experimentalDecorators` option in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## 2. core-js (npm + typings)
###2.1 Error
```
error TS2304: Cannot find name 'Map' / 'Promise' / 'Set'
```
in @angular/...
###2.2 Solution
```
> npm install core-js --save-dev
> typings install dt~core-js --save --global
```

## 3. node 6.x
###3.1 Error
```
error TS2304: Cannot find name 'require'.
```
###3.2 Solution
 ```
 > typings install dt~node --save --global
 ```