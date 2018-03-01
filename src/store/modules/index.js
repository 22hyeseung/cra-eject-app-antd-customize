import { combineReducers } from 'redux';

// webpackContext
// 현 디렉터리 내부에서 ./folder/index.js 형태의 파일 또는 ./file.js 형태의 파일 모두 require
const req = require.context('.', true, /^(?!.\/index).*.js$/);
const modules = {};

// req.keys = (Array) ["./counter.js"]
req.keys().forEach(key => {
  const regex = /.\/(.*?).js$/;
  const moduleName = regex.test(key) && key.match(regex)[1];
  // modules = { moduleName : reducer (Function) }
  // req(key).default = modules/*.js 내부의 export default handleActions(...)
  modules[moduleName] = req(key).default;
});

// combine reducers
export default combineReducers(modules);
