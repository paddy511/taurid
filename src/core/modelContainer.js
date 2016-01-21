const $Model = require("./Model");

module.exports = (function () {

  let models = [ ];

  function getModelByName(modelName) {
    for (let model of models) {
      if(model.name === modelName){
        return act;
      }
    }
    return false;
  }

  //the function below is to expose to other module
  function addModel (model){
    if (!(model instanceof $Model)){
      throw "the model you add is not the instanceof $Model";
    }
    if(getModelByName(model.name)){
      throw "the name of the model has existed in models"
    }
    models.push(model);
  }

  function getModel (modelName) {
    let model = getModelByName(modelName);
    if (model){
      return model;
    }else {
      throw "the model " + modelName + " is not existed!";
    }
  }

  return {
    "addModel": addMode,
    "getModel": getModel
  };
})();
