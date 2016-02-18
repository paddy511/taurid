class $unitConverter {
  
  constructor() {

  }

  convertRemToPx(_rem) {
    let _fs = getComputedStyle(window.document.documentElement)['font-size'].split("px")[0];
    let _pxStr = (_fs * _rem) + "px";
    return _pxStr;
  }

}

module.exports = new $unitConverter();
