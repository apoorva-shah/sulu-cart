define(["mvc/relationalmodel"],function(a){"use strict";function b(a,b,c){return a+"/"+b+"/addons"+(void 0!==c?"/"+c:"")}var c=new a({urlRoot:"/admin/api/products",saveToProduct:function(a,c){return c=_.defaults(c||{},{url:b(this.urlRoot,a)}),this.save.call(this,null,c)},defaults:function(){return{addon:0,prices:[]}}});return c});