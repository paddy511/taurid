var render = new Render();
var eventHandler = new EventHandler();
var ajaxService = new AjaxService();

registerActions(render, eventHandler, ajaxService);
taurid.execAction("init");

taurid.registerComponent({
  name : "DDD",
  getDom : function(){
    var str = "<div tid='qwe'><span tid='ppp'>refsdfsdfdsf</span>" +　(this.model.content || "")　+ "</div>";
    return str;
  },
  bindDomEvent : function(){
    console.log("dddddddddddddd");
    console.log(this.getElementByTid("ppp"));
    $(this.getElementByTid("ppp")).on("click", function(){
      console.log("this is test!");
    });
  }
});

taurid.registerComponent({
  name : "DEA",
  getDom : function(){
    var str = "<div id='ASDASDSADASD'>" +　(this.model.content || "")　+ "</div><span></span>";
    return str;
  },
  bindDomEvent : function(){
    console.log("dddddddddddddd");
    $("#qwe").on("click", function(){
      console.log("this is test!");
    });
  }
});

var _c = taurid.instantiateComponent("DDD", "index1", "xx");
var _d = taurid.instantiateComponent("DEA", "index211", "xx2");
// var _c = taurid.instantiateComponent("DQQ", "index3", "xx");
_c.setModel({content: "啦啦啦啦"});
_d.setModel({content: "eeeeeeee"});

console.log(taurid.$urlHandler.getCurrentQuery());
console.log(taurid.$urlHandler.joinUrlAndQuery("www.baidu.com", {"c": 423423, "fg_alag": "五莲路"}));
// location.href = taurid.$urlHandler.joinUrlAndQuery("http://www.baidu.com", {"c": 423423, "fg_alag": "五莲路"});
