// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/fx dojo/_base/lang dojo/_base/html dojo/_base/array dijit/_WidgetBase".split(" "),function(k,f,g,d,h,l){return k(l,{baseClass:"jimu-viewstack",declaredClass:"jimu.dijit.ViewStack",_currentView:null,postCreate:function(){this.inherited(arguments);this.views||(this.views=[]);h.forEach(this.views,g.hitch(this,function(a){1===a.nodeType?(d.place(a,this.domNode),d.addClass(a,"view"),d.setStyle(a,"display","none")):a.domNode&&(d.place(a.domNode,this.domNode),d.addClass(a.domNode,
"view"),d.setStyle(a.domNode,"display","none"))}))},startup:function(){this.inherited(arguments);0<this.views.length&&this.switchView(0)},getSelectedView:function(){return this._currentView},getSelectedLabel:function(){var a="",b=this.getSelectedView();b&&(a=b.label);return a},getViewByLabel:function(a){for(var b=0;b<this.views.length;b++)if(a===this.views[b].label)return this.views[b];return null},addView:function(a){this.views.push(a);1===a.nodeType?(d.place(a,this.domNode),d.addClass(a,"view")):
a.domNode&&(d.place(a.domNode,this.domNode),d.addClass(a.domNode,"view"))},removeView:function(a){var b=this.views.length;this.views=h.filter(this.views,function(e){return a!==e});b!==this.views.length&&(1===a.nodeType?d.destroy(a):a.domNode&&a.destroyRecursive())},switchView:function(a){var b;var e="number"===typeof a?this.views[a]:"string"===typeof a?this.getViewByLabel(a):a;this.views.forEach(g.hitch(this,function(c){if(c)if(1===c.nodeType?b=c:c.domNode&&(b=c.domNode),c===e){if(d.setStyle(b,"display",
"block"),f.fadeIn({node:b}).play(),c.domNode)if(!c._started)c.startup(),c._started=!0;else if("function"===typeof c.onShown)c.onShown()}else if(d.setStyle(b,"display","none"),f.fadeOut({node:b}).play(),c.domNode&&"function"===typeof c.onHidden)c.onHidden()}));this._currentView=e;this.onViewSwitch(e)},onViewSwitch:function(){}})});