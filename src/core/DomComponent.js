module.exports = class $DomComponent {

  constructor(positionDomId) {
    this.domStr = "";
    this.positionDomId = positionDomId;
    this.model = {};
  }

  setModel(_model) {
  	if(!(_model instanceof Object)){
  		throw "the model must be a object";
  	}
  	this.model = _model;
  	this.renderDom();
  }

  renderDom() {
  	this.domStr = this.getDom();
  	document.getElementById(this.positionDomId).innerHTML = this.domStr;
  	this.bindDomEvent();
  }

  destroyDom() {
    document.getElementById(this.positionDomId).innerHTML = "";
  }

  getRootElement(){
    return document.getElementById(this.positionDomId);
  }

  getElementByTid(tid){

    function recursiveDom(_domEle){
      if(_domEle.attributes){
        for (var i = 0; i < _domEle.attributes.length; i++) {
          if(_domEle.attributes[i].name === "tid"){
            if(_domEle.attributes[i].value === tid){
              return _domEle;
            }
          }
        }
      }
      for(let i = 0; i <_domEle.childNodes.length; i++){
        let chirdNode = _domEle.childNodes[i];
        var _dom = recursiveDom(chirdNode);
        if(_dom){
          return _dom
        }
      }
    }
    return recursiveDom(document.getElementById(this.positionDomId));
  }

  getDom() {
  	return "";
  }

  bindDomEvent(){

  }
}
