const $q = require("q");


class $Http {

  constructor(config = {}) {
    this.contentType = config.contentType || "application/x-www-form-urlencoded";
  }

  setContentType(_contentType = "application/x-www-form-urlencoded"){
    this.contentType = _contentType;
  }

  openXMLHttpRequest({
      url = "",
      method = "GET",
      async = true,
      data = null,
      withCredentials = false,
      responseType = "json",
      timeout = 0,
      headers = []
  }) {
    let defer = $q.defer();
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
      if (xhr.status.toString().substr(0, 1) == '2' || xhr.status.toString().substr(0, 1) == '3') {
          if((typeof xhr.response) === "string" ){
          	defer.resolve(JSON.parse(xhr.response));
          }else {
          	defer.resolve(xhr.response);
          }
        } else if (xhr.status.toString().substr(0, 1) == '4' || xhr.status.toString().substr(0, 1) == '5') {
          if((typeof xhr.response) === "string" ){
          	defer.reject(JSON.parse(xhr.response));
          }else {
          	defer.reject(xhr.response);
          }
        }
    };

    xhr.open(method, url, async);
    xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
    var _contentType = this.contentType

    for (let i = 0; i < headers.length; i++) {
      if(headers[i].header ===  "Content-Type"){
        if(headers[i].value.indexOf("application/x-www-form-urlencoded") !== -1){
          _contentType = "application/x-www-form-urlencoded";
        }else if (headers[i].value.indexOf("application/json") !== -1) {
          _contentType = "application/json";
        }
      }else {
        xhr.setRequestHeader(headers[i].header, headers[i].value);
      }  
    }
    xhr.withCredentials = withCredentials;
    xhr.timeout = timeout;
    xhr.responseType = responseType;

    switch (_contentType) {
      case "application/x-www-form-urlencoded":
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        var formData = [];
        for (var obj_key in data) {
          formData.push(obj_key + "=" + encodeURI(data[[obj_key]]));
        }
        var form = formData.join("&");
        xhr.send(form);
        break;
      case "application/json":
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.send(JSON.stringify(data));
        break;
    }

    return defer.promise;
  }

  send(options) {
    return this.openXMLHttpRequest(options);
  }

  get(url, options = {}) {
    options.method = "GET";
    options.url = url;
    return this.openXMLHttpRequest(options);
  }

  delete(url, options = {}) {
    options.method = "DELETE";
    options.url = url;
    return this.openXMLHttpRequest(options);
  }

  post(url, data, options = {}) {
    options.method = "POST";
    options.url = url;
    options.data = data;
    return this.openXMLHttpRequest(options);
  }

  patch(url, data, options = {}) {
    options.method = "PATCH";
    options.url = url;
    options.data = data;
    return this.openXMLHttpRequest(options);
  }


}
module.exports = new $Http();
