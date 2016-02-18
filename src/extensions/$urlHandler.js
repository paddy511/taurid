class $UrlHandler {
  constructor() {

  }

  joinUrlAndQuery(url = "", query) {
    if (!(query instanceof Object)){
      throw "the paramater of query must be a Object!";
    }
    //whether the url have a question mark, default is false
    let _questionMark = false;
    //judge the url
    if(url.indexOf("?") !== -1){
      _questionMark = true;
    }

    // join the query to the url
    for (let key in query) {

      if (_questionMark) {
        url += "&" + key + "=" + encodeURI(query[key]);
      } else {
        url += "?" + key + "=" + encodeURI(query[key]);
        _questionMark = true;
      }
    }
    return url;
  }

  getQueryFromUrl(url = "") {
    let query = {};
    if (url.indexOf('?') == -1) {
      return query;
    }

    let queryStr = url.slice(url.indexOf("?") + 1);
    let queryArr = queryStr.split("&");
    // for (let _q of queryArr) {
    //   let _qArr = _q.split("=");
    //   query[_qArr[0]] = _qArr[1];
    // }
    for (var i = 0; i < queryArr.length; i++) {
      let _qArr = queryArr[i].split("=");
      query[_qArr[0]] = decodeURI(_qArr[1]);
    }
    return query;
  }

  //lastIndex start with 0;
  getSlashParmaByLastIndex(url = "", lastIndex = 0) {
    let _urlSlashArr = url.slice(0, url.indexOf("?")).split("/");
    let index = _urlSlashArr.length - 1 - lastIndex;
    return _urlSlashArr[index];
  }

  getCurrentQuery(){
    if(!window){
      throw "the object window is not existed!";
    }
    return this.getQueryFromUrl(window.location.href);
  }

  getCurrentSlashParmaByLastIndex(lastIndex = 0){
    if(!window){
      throw "the object window is not existed!";
    }
    return this.getSlashParmaByLastIndex(window.location.href, lastIndex);
  }
}

module.exports = new $UrlHandler();
