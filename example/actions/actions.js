taurid.registerAction("init", function (render, eventHandler) {
  render.initHtml();
  eventHandler.bindClickForButton();
});

taurid.registerAction("userClick", function (render, str) {
  render.addDiv(str);
});
