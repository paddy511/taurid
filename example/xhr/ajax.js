function AjaxService() {

  this.getDataFromServer = function() {
    return taurid.$http.post(
      "http://www.ubankers.com/product/ajax/rd/product/common/list", {
        tags: [101],
        stateSqlIn: ["1", "4", "5", "7", "10", "11", "12"],
        userRole: "tourist",
        currentPage: 1,
        pageCount: 5
      });
  }

  this.getDataFromServer2 = function() {
    return taurid.$http.get(
      "http://www.ubankers.com/product/ajax/rd/errorCode");
  }
}
