function registerActions (render, eventHandler, ajaxService){

  taurid.registerAction("init", function () {
    taurid.$http.setContentType("application/json");
    ajaxService.getDataFromServer2()
    .then(ajaxService.getDataFromServer)
    .then(function(data){
      console.log(data.result);
      render.initHtml();
      eventHandler.bindClickForButton();
    }, function(err){
      console.log("xxxxxx");
      console.log(err);
    });


  });

  taurid.registerAction("userClick", function (str) {
    render.addDiv(str);
  });
}
