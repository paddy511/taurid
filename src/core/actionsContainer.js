const $Action = require("./Action");

module.exports = (function (){

  let actions = [ ];

  function getActionByName(actionName) {
    for (let act of actions) {
      if(act.name === actionName){
        return act;
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
