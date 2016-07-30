# pretty-my-json
Just an app return a prettified version of your json.

## Install
1. Compile for your platform
  ```
  electron-packager . --platform=#{win32|darwin|linux} --arch=<all|ia32|x64> --out=out
  ```

2. Copy binary to wherever you want it
  ```
  cp out/pretty-my-json-<platform>-<arch>/pretty-my-json.<os extension> <where you want it>
  ```


## How to Run
```npm install && npm start```

## Packaging
```npm package```
will generate all the binaries to `out` folder

## License

MIT
