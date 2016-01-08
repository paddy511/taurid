function Render(){

  this.initHtml = function (){
    $('#start').html("this is init!");
    $('#start').append("<button id='addDom'>add</button>");
  }

  this.addDiv = function (str){
    $('#addDom').after("<div>hi! I am div!" + str + "</div>");
  }

}
