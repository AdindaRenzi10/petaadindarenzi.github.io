// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/OverviewMap/setting/BaseLayerConfig":function(){define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array dojo/Deferred dojo/text!./BaseLayerConfig.html ../utils jimu/utils jimu/dijit/LoadingShelter dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin".split(" "),function(t,m,u,k,n,w,z,v,l,x,A,B,y){return t([A,B,y],{templateString:z,nls:null,TYPE:v.TYPE,postCreate:function(){this.shelter=new x({hidden:!0});this.shelter.placeAt(this.domNode);
this.inherited(arguments)},startup:function(){this._toggleVELayerByKey();this._setBaseLayerStyle();this.own(u(this.baseLayerType,"change",m.hitch(this,function(d){this._setBaseLayerStyle(d)})));this.initVerification();this.inherited(arguments)},initVerification:function(){this.own(u(this.baseLayerType,"change",m.hitch(this,function(){this._showErrMsg(null)})));this.own(u(this.baseLayerType,"blur",m.hitch(this,function(){this._showErrMsg(null)})));n.forEach([this.tiledMapServiceUrlInput,this.dynamicMapServiceUrlInput,
this.imageServiceUrlInput],m.hitch(this,function(d){this.own(u(d,"change",m.hitch(this,function(){this.isValid()})));this.own(u(d,"blur",m.hitch(this,function(){this.isValid()})))}))},isValid:function(){this.shelter.show();var d=new w;k.addClass(this.domNode,"validating");v.valid.baseLayerVerification(this.getValues(),this.map).then(m.hitch(this,function(e){k.removeClass(this.domNode,"validating");this._showErrMsg(null);if(e&&!0===e.res)k.removeClass(this.domNode,"error"),this.shelter.hide(),d.resolve(!0);
else{k.addClass(this.domNode,"error");var b=this._getType();if(b===this.TYPE.ARCGIS_TILED_MAP||b===this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE||b===this.TYPE.ARCGIS_IMAGE_SERVICE)this._setArcGISLayerInputState("Error"),k.removeClass(this.errorNode,"hide"),(e=e.err)&&("wkid"===e?this._showErrMsg(this.nls.errWkid):"layerType"===e?this._showErrMsg(this.nls.errUrl):e.name&&-1!==e.name.indexOf("SyntaxError")?this._showErrMsg(this.nls.errUrl):e.name&&-1!==e.name.indexOf("RequestError")?this._showErrMsg(this.nls.errUrl):
!e.name||-1===e.message.indexOf("Invalid URL")&&-1===e.message.indexOf("Unexpected token \x3c")?e.name&&-1!==e.message.indexOf("Timeout exceeded")?this._showErrMsg(this.nls.errReqTimeout):this._showErrMsg(this.nls.errUrl):this._showErrMsg(this.nls.errUrl));this.shelter.hide();d.resolve(!1)}}),m.hitch(this,function(){k.removeClass(this.domNode,"validating");k.removeClass(this.domNode,"error");this.shelter.hide();d.resolve(!1)}));return d},isUrlEmpty:function(){k.addClass(this.domNode,"validating");
var d=this._getType();(d=this._getArcLayerInputsValue(d))&&""!==d?(k.removeClass(this.domNode,"validating"),this._showErrMsg(null)):this._showErrMsg(this.nls.errUrl)},getValues:function(){var d=this._getType();return{url:this._getArcLayerInputsValue(d),type:d,veLayerInfo:{isKeyInPortal:v.valid.isHaveBingKey()}}},setValues:function(d){if(d.overviewMap.baseLayer){var e=d.overviewMap.baseLayer.type;this._setArcLayerInputsValue(d.overviewMap.baseLayer.url,e);this.baseLayerType.set("value",e)}},_getType:function(){return this.baseLayerType.value},
_setArcLayerInputsValue:function(d,e){(e=this._getArcGISLayerInput(e))&&e.setValue&&e.setValue(l.stripHTML(d||""))},_getArcGISLayerInput:function(d){switch(d){case this.TYPE.ARCGIS_TILED_MAP:return this.tiledMapServiceUrlInput;case this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE:return this.dynamicMapServiceUrlInput;case this.TYPE.ARCGIS_IMAGE_SERVICE:return this.imageServiceUrlInput}},_setArcGISLayerInputState:function(d){var e=this._getType();(e=this._getArcGISLayerInput(e))&&e.set("state",d)},_getArcLayerInputsValue:function(d){if((d=
this._getArcGISLayerInput(d))&&d.value){var e=d.value;""!==e&&!1===/^\/\//.test(e)&&!1===/(^(.+):\/\/)/.test(e)&&(e="http://"+e)}return l.stripHTML(e||"")},_showErrMsg:function(d){d?(this._setArcGISLayerInputState("Error"),k.removeClass(this.errorNode,"hide")):(this._setArcGISLayerInputState(""),k.addClass(this.errorNode,"hide"),this.errorNode.innerHTML="");var e=this._getType();(e=this._getArcGISLayerInput(e))&&e.displayMessage&&e.displayMessage(d);this.errorNode.innerHTML=d},_toggleVELayerByKey:function(){v.valid.isHaveBingKey()||
(this.baseLayerType.removeOption(this.TYPE.BING_AERIAL),this.baseLayerType.removeOption(this.TYPE.BING_HYBRID),this.baseLayerType.removeOption(this.TYPE.BING_ROAD))},_setBaseLayerStyle:function(d){var e=d;!d&&this.config.overviewMap.baseLayer&&this.config.overviewMap.baseLayer.type&&(e=this.config.overviewMap.baseLayer.type);k.addClass(this.baseLayerContainer,"hide");k.addClass(this.tiledMapServiceUrlInput.domNode,"hide");k.addClass(this.dynamicMapServiceUrlInput.domNode,"hide");k.addClass(this.imageServiceUrlInput.domNode,
"hide");switch(e){case this.TYPE.ARCGIS_TILED_MAP:k.removeClass(this.baseLayerContainer,"hide");k.removeClass(this.tiledMapServiceUrlInput.domNode,"hide");break;case this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE:k.removeClass(this.baseLayerContainer,"hide");k.removeClass(this.dynamicMapServiceUrlInput.domNode,"hide");break;case this.TYPE.ARCGIS_IMAGE_SERVICE:k.removeClass(this.baseLayerContainer,"hide"),k.removeClass(this.imageServiceUrlInput.domNode,"hide")}},_onTileLayerUrlChange:function(d){-1<this.tileLayerUrl.value.toLowerCase().indexOf("{subdomain}")?
k.removeClass(this.subdomainContainer,"hide"):(k.addClass(this.subdomainContainer,"hide"),d&&(this.subdomain.value=""))},_getSubDomains:function(){this._onTileLayerUrlChange(!0);var d=null;this.subdomain.value&&0<this.subdomain.value.length&&(d=this.subdomain.value.split(","),d=n.map(d,function(e){return m.trim(e)}));return d},_getTileInfo:function(){var d=this.tileInfo.value;v.valid.tileInfoStr(d);return d}})})},"widgets/OverviewMap/utils":function(){define("dojo/_base/lang dojo/_base/array dojo/string dojo/Deferred esri/lang esri/request dojo/_base/url esri/layers/TileInfo jimu/portalUtils esri/layers/ArcGISTiledMapServiceLayer esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/virtualearth/VETiledLayer esri/layers/OpenStreetMapLayer esri/layers/ImageParameters".split(" "),
function(t,m,u,k,n,w,z,v,l,x,A,B,y,d,e){var b={TYPE:{BASE_MAP:"baseMap",ARCGIS_TILED_MAP:"tiledMapService",ARCGIS_DYNAMIC_MAP_SERVICE:"dynamicMapService",ARCGIS_IMAGE_SERVICE:"imageService",OSM:"openStreetMap",BING_ROAD:"bingMapsRoad",BING_AERIAL:"bingMapsAerial",BING_HYBRID:"bingMapsHybrid"},createBaseLayer:function(a,c,g){var f=new k,h=null,r=a.url,q=a.type;a=a.veLayerInfo;q===b.TYPE.BASE_MAP?f.resolve({layer:"BaseMap"}):q===b.TYPE.ARCGIS_TILED_MAP?b.valid.isArcGISLayersValid(r,c,q).then(function(p){p&&
!0===p.res?(h=new x(r),f.resolve({layer:h})):f.resolve({layer:null,err:p.err})},function(p){f.resolve({res:!1,err:p})}):q===b.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?b.valid.isArcGISLayersValid(r,c,q).then(function(p){if(p&&!0===p.res){p=p.info;var C={};p&&p.supportedImageFormatTypes&&-1!==p.supportedImageFormatTypes.indexOf("PNG24")&&(C.imageParameters=new e,C.imageParameters.format="png24");h=new A(r,C);f.resolve({layer:h})}else f.resolve({layer:null,err:p.err})},function(p){f.resolve({res:!1,err:p})}):
q===b.TYPE.ARCGIS_IMAGE_SERVICE?b.valid.isArcGISLayersValid(r,c,q).then(function(p){p&&!0===p.res?(h=new B(r,{}),f.resolve({layer:h})):f.resolve({layer:null,err:p.err})},function(p){f.resolve({res:!1,err:p})}):q===b.TYPE.OSM?(h=new d(r,{}),f.resolve({layer:h})):q!==b.TYPE.BING_ROAD&&q!==b.TYPE.BING_AERIAL&&q!==b.TYPE.BING_HYBRID||!a?f.resolve({layer:null}):(c=b.layers.getBingMapKey(g),c&&a.isKeyInPortal||(c="__invalidKey",console.error("OverviewMap Error: BingMapsKey must be provided")),h=new y({bingMapsKey:c,
mapStyle:b.layers._getVEStyle(q)}),f.resolve({layer:h}));return f},layers:{_getLayerInfoSR:function(a){return a.spatialReference||a.extent&&a.extent.spatialReference},_getTileServers:function(a){var c=[],g=new z(a.url);if(a.subDomains&&0<a.subDomains.length&&1<g.authority.split(".").length){var f;m.forEach(a.subDomains,function(h){-1<g.authority.indexOf("${subDomain}")?f=g.scheme+"://"+u.substitute(g.authority,{subDomain:h})+"/":-1<g.authority.indexOf("{subDomain}")&&(f=g.scheme+"://"+g.authority.replace(/\{subDomain\}/gi,
h)+"/");c.push(f)},this)}return c&&0<c.length?c:null},_getVEStyle:function(a){switch(a){case b.TYPE.BING_AERIAL:return y.MAP_STYLE_AERIAL;case b.TYPE.BING_HYBRID:return y.MAP_STYLE_AERIAL_WITH_LABELS;case b.TYPE.BING_ROAD:return y.MAP_STYLE_ROAD;default:return y.MAP_STYLE_AERIAL}},fetchLayerInfo:function(a){var c=new k;w({url:a,handleAs:"json",callbackParamName:"callback",timeout:15E3,content:{f:"json"}}).then(t.hitch(this,function(g){c.resolve(g)}),function(g){c.reject(g)});return c},getBingMapKey:function(a){return(a=
window.portalSelf||a&&l.getPortal(a.appConfig.portalUrl))&&a.bingKey?a.bingKey:""}},valid:{baseLayerVerification:function(a,c){var g=new k,f=c.spatialReference;b.createBaseLayer(a,c).then(function(h){if(h.layer){var r=b.layers._getLayerInfoSR(h.layer);b.valid.sameSpatialReference(f,r)||"BaseMap"===h.layer?g.resolve({res:!0}):g.resolve({res:!1})}else g.resolve({res:!1,err:h.err})},function(h){g.resolve({res:!1,err:h})});return g},ArcGISLayersTypeVerification:function(a,c,g){a=a.toLowerCase();if(0<
a.indexOf("/featureserver")||0<a.indexOf("/mapserver"))if(!c||"string"!==typeof c.type||"Feature Layer"!==c.type&&"Table"!==c.type){if(0<a.indexOf("/featureserver"))return!1;if(0<a.indexOf("/mapserver"))return c.tileInfo?g===b.TYPE.ARCGIS_TILED_MAP||g===b.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1:g===b.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE?!0:!1}else return!1;else if(0<a.indexOf("/imageserver"))return g===b.TYPE.ARCGIS_IMAGE_SERVICE?!0:!1},isArcGISLayersValid:function(a,c,g){var f=new k;b.layers.fetchLayerInfo(a).then(function(h){var r=
null,q=null;r=b.layers._getLayerInfoSR(h);q=c&&c.spatialReference;r&&q&&b.valid.sameSpatialReference(q,r)?!0===b.valid.ArcGISLayersTypeVerification(a,h,g)?f.resolve({res:!0,info:h}):f.resolve({res:!1,err:"layerType"}):r&&q&&!b.valid.sameSpatialReference(q,r)?f.resolve({res:!1,err:"wkid"}):f.resolve({res:!1})},function(h){f.resolve({res:!1,err:h})});return f},tileInfoStr:function(a){try{return new v(JSON.parse(a)),!0}catch(c){return c}},isHaveBingKey:function(){return b.layers.getBingMapKey()?!0:!1},
sameSpatialReference:function(a,c){var g=[102113,102100,3857,4326];return a&&c&&n.isDefined(a.wkid)&&n.isDefined(c.wkid)&&-1!==g.indexOf(a.wkid)&&-1!==g.indexOf(c.wkid)||a&&c&&(n.isDefined(a.wkid)&&n.isDefined(c.wkid)&&a.wkid===c.wkid||n.isDefined(a.latestWkid)&&n.isDefined(c.wkid)&&a.latestWkid===c.wkid||n.isDefined(a.wkid)&&n.isDefined(c.latestWkid)&&a.wkid===c.latestWkid||n.isDefined(a.latestWkid)&&n.isDefined(c.latestWkid)&&a.latestWkid===c.latestWkid)||a&&c&&n.isDefined(a.wkt)&&n.isDefined(c.wkt)&&
a.wkt===c.wkt?!0:!1}}};return b})},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),function(t,m,u,k,n,w,z,v,l,x,A,B,y,d,e){t=t(y,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(b){try{if(b=m.mixin({bingMapsKey:null,
culture:"en-US"},b||{}),this.url=x.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=x.urlToObject(this.url),this.spatialReference=new A({wkid:102100}),this.tileInfo=new B({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,
resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,
scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=
this.fullExtent=new d(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new A({wkid:102100})),m.mixin(this,b),this.hasAttributionData=this.showAttribution,this._initLayer=m.hitch(this,this._initLayer),this._errorHandler=m.hitch(this,this._errorHandler),this._getTileInfo=m.hitch(this,this._getTileInfo),this.bingMapsKey)this._getTileInfo();else throw Error("BingMapsKey must be provided.");}catch(a){throw this.onError(a),a;}},_unsetMap:function(b,a){this.inherited("_unsetMap",arguments)},
_getTileInfo:function(){if(this.mapStyle){var b=this._url.path+"/Imagery/Metadata/"+this.mapStyle,a=window.location.protocol;if(this.bingMapsKey){var c=this.resourceInfo;!this.loaded&&c?this._initLayer(c):e({url:b,content:m.mixin({},{uriScheme:"https:"===a?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,error:this._errorHandler})}}},_initLayer:function(b,a){if(200!==b.statusCode)a=Error(),
a.code=b.statusCode,a.message=b.statusDescription,a.details=b.errorDetails,a.authenticationResultCode=b.authenticationResultCode,this.onError(a);else try{this.resourceInfo=u.toJson(b);var c=b.resourceSets[0].resources[0],g=c.imageUrl.replace("{","${");this.tileServers=k.map(c.imageUrlSubdomains,function(h){var r=x.getProtocolForWebResource();return z.substitute(g,{subdomain:h}).replace("http:",r)});this._tsLength=this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=
this.copyright||"\x26copy; 2017 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var f=this.loadCallback;f&&(delete this.loadCallback,f(this))}}catch(h){this.onError(h)}},getAttributionData:function(){var b=new v,a=u.fromJson(this.resourceInfo),c;this.hasAttributionData&&a&&(c=m.getObject("resourceSets.0.resources.0.imageryProviders",!1,a));c?b.callback({contributors:c}):(a=Error("Layer does not have attribution data"),a.log=n.isDebug,b.errback(a));return b},getTileUrl:function(b,
a,c){return z.substitute(this.tileServers[a%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(b,a,c),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(b,a,c){var g="",f;for(f=b;0<f;f--){b="0";var h=1<<f-1;0!=(c&h)&&b++;0!=(a&h)&&(b++,b++);g+=b}return g},setMapStyle:function(b){this.mapStyle=b;this._getTileInfo()},setCulture:function(b){this.culture=b;this._getTileInfo()},setBingMapsKey:function(b){this.bingMapsKey=b},onMapStyleChange:function(){}});m.mixin(t,{MAP_STYLE_AERIAL:"aerial",
MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabelsOnDemand",MAP_STYLE_ROAD:"roadOnDemand"});w("extend-esri")&&m.setObject("virtualearth.VETiledLayer",t,l);return t})},"widgets/OverviewMap/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/OverviewMap/setting/BaseLayerConfig.html":'\x3cdiv class\x3d"baselayer-config"\x3e\r\n  \x3ctable class\x3d"baselayer-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"label-column" nowrap\x3d"nowrap"\x3e\r\n          \x3clabel for\x3d"baseLayerType"\x3e${nls.baseLayerType}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3cselect data-dojo-attach-point\x3d"baseLayerType" data-dojo-type\x3d"dijit/form/Select" id\x3d"baseLayerType"\x3e\r\n            \x3coption value\x3d"${TYPE.BASE_MAP}"\x3e${nls.BaseMap}\x3c/option\x3e\r\n\r\n            \x3coption value\x3d"${TYPE.ARCGIS_TILED_MAP}"\x3e${nls.tiledMapService}\x3c/option\x3e\r\n            \x3coption value\x3d"${TYPE.ARCGIS_DYNAMIC_MAP_SERVICE}"\x3e${nls.dynamicMapService}\x3c/option\x3e\r\n            \x3coption value\x3d"${TYPE.ARCGIS_IMAGE_SERVICE}"\x3e${nls.imageService}\x3c/option\x3e\r\n\r\n            \x3coption value\x3d"${TYPE.OSM}"\x3e${nls.OSM}\x3c/option\x3e\r\n            \x3c!--\x3coption id\x3d"WebTiled" value\x3d"WebTiled"\x3e${nls.WebTiled}\x3c/option\x3e--\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingAerialOption" value\x3d"${TYPE.BING_AERIAL}"\x3e${nls.bingAerial}\x3c/option\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingHybridOption" value\x3d"${TYPE.BING_HYBRID}"\x3e${nls.bingHybrid}\x3c/option\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingRoadOption" value\x3d"${TYPE.BING_ROAD}"\x3e${nls.bingRoad}\x3c/option\x3e\r\n          \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"input-column" width\x3d"100%"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"baseLayerContainer" class\x3d"hide"\x3e\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"tiledMapServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"dynamicMapServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"imageServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--\r\n      \x3ctr data-dojo-attach-point\x3d"tileLayerContainer" class\x3d"hide"\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3clabel for\x3d"tileLayerUrl"\x3e${nls.tileLayerUrl}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tileLayerUrl" id\x3d"tileLayerUrl" /\x3e\r\n          \x3clabel for\x3d"tile"\x3e${nls.tile}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tile" id\x3d"tile" /\x3e\r\n          \x3clabel for\x3d"credits"\x3e${nls.credits}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"credits" id\x3d"credits" /\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"subdomainContainer" class\x3d"hide"\x3e\r\n            \x3clabel for\x3d"subdomain"\x3e${nls.subdomain}\x3c/label\x3e\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"subdomain" id\x3d"subdomain" /\x3e\r\n          \x3c/div\x3e\r\n          \x3clabel for\x3d"extent"\x3e${nls.extent}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"extent" id\x3d"extent" /\x3e\r\n          \x3clabel for\x3d"tileInfo"\x3e${nls.tileInfo}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tileInfo" id\x3d"tileInfo" /\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      --\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"errorNode" class\x3d"error-node"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/OverviewMap/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"corner-section"\x3e\r\n    \x3cspan class\x3d"corner-text"\x3e${nls.attachText}\x3c/span\x3e\r\n    \x3cdiv class\x3d"overview-items"\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"topLeftNode"\x3e\r\n        \x3cdiv class\x3d"overview-top-left overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"tl" data-dojo-attach-point\x3d"top-left"/\x3e\r\n        \x3clabel for\x3d"tl"\x3e${nls.topLeft}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"topRightNode"\x3e\r\n        \x3cdiv class\x3d"overview-top-right overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"tr" data-dojo-attach-point\x3d"top-right"/\x3e\r\n        \x3clabel for\x3d"tr"\x3e${nls.topRight}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"bottomLeftNode"\x3e\r\n        \x3cdiv class\x3d"overview-bottom-left overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"bl" data-dojo-attach-point\x3d"bottom-left"/\x3e\r\n        \x3clabel for\x3d"bl"\x3e${nls.bottomLeft}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"bottomRightNode"\x3e\r\n        \x3cdiv class\x3d"overview-bottom-right overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" id\x3d"br" data-dojo-attach-point\x3d"bottom-right"/\x3e\r\n        \x3clabel for\x3d"br"\x3e${nls.bottomRight}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"check" data-dojo-attach-point\x3d"expandBox"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPickerNode"\x3e\x3c/div\x3e\r\n\r\n  \x3c!-- baseLayerConfig --\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"baseLayerConfigContainer"\x3e\r\n\x3c/div\x3e',
"url:widgets/OverviewMap/setting/css/style.css":".jimu-widget-overviewmap-setting{margin:0; padding:0; font-size:14px; color: #596679;}.jimu-widget-overviewmap-setting .hide{display: none !important;}.jimu-widget-overviewmap-setting .corner-section .overview-items{margin-top: 15px; margin-bottom: 30px; overflow: hidden; font-size: 10px;}.jimu-widget-overviewmap-setting .corner-section .overview-item {text-align: center; color: #596679;}.jimu-widget-overviewmap-setting .corner-section .overview-item label {font-size: 14px;}.jimu-widget-overviewmap-setting .corner-section .overview-item:first-child{margin-left: 0;}.jimu-rtl .overview-item:first-child {margin-left: 2em; margin-right: 0;}.jimu-widget-overviewmap-setting .corner-section .jimu-leading-margin2{margin-left: 1em;}.jimu-rtl .jimu-widget-overviewmap-setting .corner-section .jimu-leading-margin2{margin-left: 0; margin-right: 1em;}.jimu-widget-overviewmap-setting .corner-section .overview-item-image{position: relative; width: 226px; height: 150px; margin-bottom: 10px;}.jimu-widget-overviewmap-setting .jimu-radio {width: 14px; height: 14px; vertical-align: middle;}.jimu-widget-overviewmap-setting .jimu-radio-inner{width: 8px; height: 8px;}.jimu-widget-overviewmap-setting .overview-item .overview-top-left{background: url(images/topleft.png);}.jimu-widget-overviewmap-setting .overview-item .overview-top-right{background: url(images/topright.png);}.jimu-widget-overviewmap-setting .overview-item .overview-bottom-left{background: url(images/bottomleft.png);}.jimu-widget-overviewmap-setting .overview-item .overview-bottom-right{background: url(images/bottomright.png);}.jimu-widget-overviewmap-setting .baselayer-config{margin-top: 30px;}.jimu-widget-overviewmap-setting .validating{}.jimu-widget-overviewmap-setting .error{}.jimu-widget-overviewmap-setting .baselayer-table{}.jimu-widget-overviewmap-setting .baselayer-table #baseLayerType,.jimu-widget-overviewmap-setting .baselayer-table #VEStyle{min-width: 220px;}.jimu-widget-overviewmap-setting .baselayer-table #baseLayerUrl{min-width: 500px;}.jimu-widget-overviewmap-setting .baselayer-table .input-column{padding: 5px 10px;}.jimu-widget-overviewmap-setting .error-node{font-size: 12px; color: #F00;}",
"*now":function(t){t(['dojo/i18n!*preload*widgets/OverviewMap/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/Deferred dojo/_base/lang dojo/on ./BaseLayerConfig jimu/dijit/CheckBox jimu/dijit/RadioBtn".split(" "),function(t,m,u,k,n,w,z,v){return t([m,u],{baseClass:"jimu-widget-overviewmap-setting",_selectedAttachTo:"",postCreate:function(){this.expandBox=new v({label:this.nls.expandText,checked:!1},this.expandBox);this.expandBox.startup();this.own(w(this.topLeftNode,"click",n.hitch(this,function(){this._selectItem("top-left")})));
this.own(w(this.topRightNode,"click",n.hitch(this,function(){this._selectItem("top-right")})));this.own(w(this.bottomLeftNode,"click",n.hitch(this,function(){this._selectItem("bottom-left")})));this.own(w(this.bottomRightNode,"click",n.hitch(this,function(){this._selectItem("bottom-right")})));this.baseLayerConfig=new z({nls:this.nls,config:this.config,map:this.map},this.baseLayerConfigContainer);this.baseLayerConfig.startup()},startup:function(){this.inherited(arguments);this.config.overviewMap||
(this.config.overviewMap={});this.setConfig(this.config)},setConfig:function(l){this.config=l;this.expandBox.setValue(l.overviewMap.visible);this.config.overviewMap.attachTo?this._selectItem(this.config.overviewMap.attachTo):(l="",this.position?void 0!==this.position.top&&void 0!==this.position.left?l=window.isRTL?"top-right":"top-left":void 0!==this.position.top&&void 0!==this.position.right?l=window.isRTL?"top-left":"top-right":void 0!==this.position.bottom&&void 0!==this.position.left?l=window.isRTL?
"bottom-right":"bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(l=window.isRTL?"bottom-left":"bottom-right"):l=window.isRTL?"top-left":"top-right",this._selectItem(l));this.baseLayerConfig.setValues(this.config)},_selectItem:function(l){this[l]&&this[l].setChecked&&this[l].setChecked(!0);this._selectedAttachTo=l},_getSelectedAttachTo:function(){return this._selectedAttachTo},getConfig:function(){var l=new k;this.baseLayerConfig.isValid().then(n.hitch(this,function(x){!1===
x?l.resolve(!1):(this.config.overviewMap.visible=this.expandBox.checked,this.config.overviewMap.attachTo=this._getSelectedAttachTo(),this.config.overviewMap.maximizeButton="maximizeButton"in this.config.overviewMap?this.config.overviewMap.maximizeButton:!0,this.config.overviewMap.baseLayer=this.baseLayerConfig.getValues(this.config),l.resolve(this.config))}));return l}})});