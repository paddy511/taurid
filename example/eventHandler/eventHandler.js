function EventHandler(render) {

  this.render = render;

  this.bindClickForButton = function () {
    var count = 1;
    $('#addDom').on("click", function (event) {
      taurid.execAction("userClick", this.render, count);
      count++ ;
    }.bind(this));
  }
}
