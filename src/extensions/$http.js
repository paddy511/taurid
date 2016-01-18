const $q = require("q");


class $Http {

  constructor() {}

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
      if (xhr.status.toString().substr(0, 1) == '2' || xhr.status.toString()
        .substr(0, 1) == '3') {
        defer.resolve(xhr.response);
      } else if (xhr.status.toString().substr(0, 1) == '4' || xhr.status.toString()
        .substr(0, 1) == '5') {
        defer.reject(xhr.response);
      }
    };

    xhr.open(method, url, async);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
    for (let headerObj of headers) {
      xhr.setRequestHeader(headerObj.header, headerObj.value);
    }
    xhr.withCredentials = withCredentials;
    xhr.timeout = timeout;
    xhr.responseType = responseType;
    xhr.send(JSON.stringify(data));
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
