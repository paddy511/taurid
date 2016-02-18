class $stringHandler {

  constructor() {

  }

  getLength(str) {
       ///<summary>获得字符串实际长度，中文2，英文1</summary>
       ///<param name="str">要获得长度的字符串</param>
       var realLength = 0, len = str.length, charCode = -1;
       for (var i = 0; i < len; i++) {
           charCode = str.charCodeAt(i);
           if (charCode >= 0 && charCode <= 128) realLength += 1;
           else realLength += 2;
       }
       return realLength;
   }

  cutstr(str, len) {
       let str_length = 0;
       let str_len = 0;
       let str_cut = new String();
       str_len = str.length;
       for (let i = 0; i < str_len; i++) {
           let a = str.charAt(i);
           str_length++;
           if (escape(a).length > 4) {
               //中文字符的长度经编码之后大于4
               str_length++;
           }
           str_cut = str_cut.concat(a);
           if (str_length >= len) {
               str_cut = str_cut.concat("...");
               return str_cut;
           }
       }
       //如果给定字符串小于指定长度，则返回源字符串；
       if (str_length < len) {
           return str;
       }
  }

}

module.exports = new $stringHandler();
