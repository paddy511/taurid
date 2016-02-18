const actionsContainer = require("./actionsContainer");
const $Action = require("./Action");
const $componentGenerator = require("./componentGenerator");
const $http = require("../extensions/$http");
const $urlHandler = require("../extensions/$UrlHandler");
const $unitConverter = require("../extensions/$unitConverter");
const $stringHandler = require("../extensions/$stringHandler");
const $q = require("q");

let taurid = new Object();

//lib API
taurid.$Action = $Action;
taurid.$q = $q;
taurid.$http = $http;
taurid.$urlHandler = $urlHandler;
taurid.$unitConverter = $unitConverter;
taurid.$stringHandler = $stringHandler;

//action
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

//DomComponent
/*
 * @param
 *
 * opt: Object
 *
 *    name: the component name;(neccessary);
 *    getDom: the html template you want render ;
 *    bindDomEvent: the event you want bind html after dom render;
 */
taurid.registerComponent = function(opt){
  $componentGenerator.generateComponent(opt);
}

/*
 * @param
 *
 * componentName: the component you want to instantiate;
 * componentId: the index to find component;
 * positionDomId: where you want place component in html;
 *
 */
taurid.instantiateComponent = function(componentName, componentId, positionDomId){
  return $componentGenerator.instantiateComponent(componentName, componentId, positionDomId);
}

/*
 * @param
 *
 * componentId: the index to find component;
 *
 */
taurid.getComponentById = function(componentId){
  return $componentGenerator.getComponentById(componentId);
}

/*
 * @param
 *
 * componentId: the index to find component;
 *
 */
taurid.distoryComponentById = function(componentId){
  $componentGenerator.distoryComponentById(componentId);
}

module.exports = taurid;
