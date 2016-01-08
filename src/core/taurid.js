const actionsContainer = require("./actionsContainer");
const $Action = require("./Action");
const $http = require("../extensions/$http");
const $q = require("q")

let taurid = new Object();

//lib API
taurid.$Action = $Action;
taurid.$q = $q;
taurid.$http = $http;

taurid.registerAction = function (actionName, callback) {
  let _action = new $Action(actionName, callback);
  actionsContainer.addAction(_action);
}

taurid.execAction = function (actionName, ...agruments) {
  let _action = actionsContainer.getAction(actionName);
  return _action.callback(...agruments);
}

taurid.getActFn = function (actionName) {
  return actionsContainer.getAction(actionName).callback;
}

module.exports = taurid;
