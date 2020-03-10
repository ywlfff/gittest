// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.14/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators".split(" "),function(m,n,h,e,k,l,f,d){return function(g){function b(a){a=g.call(this,a)||this;a._viewpointHandle=null;a._handles=new l;a.group=null;return a}h(b,g);b.prototype.initialize=function(){var a=this;this._handles.add(f.on(this,"view.ui","expand",function(c){(c=c.target)&&c!==a&&c.expanded&&
c.group&&c.group===a.group&&a._collapse()}))};b.prototype.destroy=function(){this.view=this._viewpointHandle=null;this._handles.destroy();this._handles=null};Object.defineProperty(b.prototype,"autoCollapse",{set:function(a){this._set("autoCollapse",a);this._watchViewpoint()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"expanded",{set:function(a){a=!!a;this._set("expanded",a);var c=this.get("view.ui");c&&c.emit("expand",{target:this});this._viewpointHandleChange(a)},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{set:function(a){var c=this;this._get("view")!==a&&(this._set("view",a),a&&f.whenTrueOnce(a,"ready",function(){c.view===a&&c._watchViewpoint()}))},enumerable:!0,configurable:!0});b.prototype._viewpointHandleChange=function(a){var c=this;this._viewpointHandle&&(a?f.whenTrueOnce(this.view,"stationary",function(){return c._viewpointHandle.resume()}):
this._viewpointHandle.pause())};b.prototype._watchViewpoint=function(){var a=this;this._handles.remove("viewpoint");this._viewpointHandle=null;var c=this.autoCollapse,b=this.view;b&&c&&(c=f.pausable(b,"3d"===b.type?"camera":"viewpoint",function(){return a._collapse()}),this._handles.add(c,"viewpoint"),this._viewpointHandle=c)};b.prototype._collapse=function(){this.expanded=!1};e([d.property({value:!1})],b.prototype,"autoCollapse",null);e([d.property({value:!1})],b.prototype,"expanded",null);e([d.property()],
b.prototype,"group",void 0);e([d.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);e([d.property({value:null})],b.prototype,"view",null);return b=e([d.subclass("esri.widgets.Expand.ExpandViewModel")],b)}(d.declared(k))});