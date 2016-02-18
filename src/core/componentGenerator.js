const $DomComponent = require("./DomComponent");

module.exports = (function () {

  let _componentGenerator = new Object();
  let _componentNameArray = [];
  let _componentContainer = {};

  function checkComponentIsExist(_componentName) {
    for (let i = 0; i < _componentNameArray.length; i++) {
      if(_componentNameArray[i] === _componentName){
          return true;
      }
    }
    return false;
  }

  function checkComponentIdIsExist(_componentId) {
    for (let key in _componentContainer) {
      if(key === _componentId){
            return true;
      }
    }
    return false;
  }

  //=========== export ===========
  function generateComponent(opt) {
    if (!(opt instanceof Object)){
      throw "this opt you pass in must be a object!";
    }
    if(!(typeof opt.name === "string")){
      throw "the component name must be a string!";
    }

    if(checkComponentIsExist(opt.name)){
      throw "the component has existed!";
    }

    let componentName = opt.name;
    let getDom = opt.getDom || "function(){return ''}";
    let bindDomEvent = opt.bindDomEvent || "function (){}";

    // let classStr = "function $" + componentName + "(positionDomId){$DomComponent.apply(this,arguments);};$" + componentName + ".prototype = new $DomComponent();$" + componentName +
    // ".prototype.constructor = $" + componentName + ";$" +  componentName + ".prototype.getDom=" + getDom + ";$" +  componentName + ".prototype.bindDomEvent=" + bindDomEvent + ";";
    // window.eval(classStr);

    function classContructor() {
      let classTpl = function(positionDomId) {
        $DomComponent.apply(this, arguments);
      };

      classTpl.prototype = new $DomComponent();
      classTpl.prototype.constructor = classTpl;
      classTpl.prototype.getDom = getDom || function(){return''};
      classTpl.prototype.bindDomEvent = bindDomEvent || function() {};

      return classTpl;
    }

    _componentGenerator["$" + componentName] = classContructor();
    _componentNameArray.push(componentName);
  }

  function instantiateComponent(componentName, componentId, positionDomId){
    if(!(typeof componentName === "string")){
      throw "the component name must be a string!";
    }
    if(typeof componentId === "undefined"){
      throw "the componentId is undefined!";
    }
    if(!checkComponentIsExist(componentName)){
      throw "the component is not existed!";
    }
    if(checkComponentIdIsExist(componentId)){
      throw "the componentId has existed!";
    }

    var taurid_componentName = "$" + componentName;

    let _component = new _componentGenerator[taurid_componentName](positionDomId);
    _component.setModel({});
    _componentContainer[componentId] = _component;
    return _component;
  }

  function getComponentById(componentId){
    if(!checkComponentIdIsExist(componentId)){
      throw "the componentId is not existed!";
    }
    return _componentContainer[componentId];
  }

  function distoryComponentById(componentId) {
    if(!checkComponentIdIsExist(componentId)){
      throw "the componentId is not existed!";
    }
    _componentContainer[componentId].destroyDom();
    delete _componentContainer[componentId];
  }

  return {
    "generateComponent": generateComponent,
    "instantiateComponent": instantiateComponent,
    "getComponentById": getComponentById,
    "distoryComponentById": distoryComponentById
  };
})();
