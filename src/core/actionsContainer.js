const $Action = require("./Action");

module.exports = (function (){

  let actions = [ ];

  function getActionByName(actionName) {
    for (let i=0; i < actions.length; i++) {
      if(actions[i].name === actionName){
        return actions[i];
      }
    }
    return false;
  }

  //the function below is to expose to other module
  function addAction (action){
    if (!(action instanceof $Action)){
      throw "the action you add is not the instanceof $Action";
    }
    if(getActionByName(action.name)){
      throw "the name of the action has existed in actions"
    }
    actions.push(action);
  }

  function getAction (actionName) {
    let act = getActionByName(actionName);
    if (act){
      return act;
    }else {
      throw "the action " + actionName + " did not register!";
    }
  }

  return {
    "addAction": addAction,
    "getAction": getAction
  }
})();
