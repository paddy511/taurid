function EventHandler() {

  this.bindClickForButton = function () {
    var count = 1;
    $('#addDom').on("click", function (event) {
      taurid.execAction("userClick", count);
      count++ ;
    });
  }
}
