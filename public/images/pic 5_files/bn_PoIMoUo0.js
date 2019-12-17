if (self.CavalryLogger) { CavalryLogger.start_js(["ChEoH"]); }

__d("PlatformVersioning",["invariant","PlatformVersions","StrSet","getObjectValues"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),i=location.pathname;i=i.substring(1,i.indexOf("/",1));var j=h.contains(i)?i:b("PlatformVersions").versions.UNVERSIONED;function k(a,c){if(c==b("PlatformVersions").versions.UNVERSIONED)return a;h.contains(c)||g(0,3769);a=a.indexOf("/")!==0?"/"+a:a;return"/"+c+a}function a(){return b("PlatformVersions").LATEST}function c(a){return a.setPath(k(a.getPath(),j))}function d(a){return k(a,j)}function f(a){return h.contains(a.substring(1,a.indexOf("/",1)))?a.substring(a.indexOf("/",1)):a}i={addVersionToPath:k,getLatestVersion:a,versionAwareURI:c,versionAwarePath:d,getUnversionedPath:f};e.exports=i}),null);
__d("PlatformDialogClient",["Arbiter","AsyncDialog","AsyncRequest","DOMEventListener","PlatformDialog","PlatformVersioning","PopupWindow","QueryString","URI","UserAgent_DEPRECATED","guid"],(function(a,b,c,d,e,f){__p&&__p();var g,h=575,i="FB_DIALOG_RESPONSE";b("AsyncDialog").getLoadingDialog().setWidth(h);b("DOMEventListener").add(window,"message",function(a){/\.facebook\.com$/.test(a.origin)&&new RegExp("^"+i+":").test(a.data)&&b("Arbiter").inform(b("PlatformDialog").RESPONSE,JSON.parse(a.data.substr(i.length+1)))});var j={};b("Arbiter").subscribe(b("PlatformDialog").RESPONSE,function(a,b){a=b.state;j[a]&&(j[a].callback(b),b.state=j[a].state,delete j[a])},"new");function k(a){return function(){b("Arbiter").inform(b("PlatformDialog").RESPONSE,babelHelpers["extends"]({state:a},l.REQUEST_ABORTED_ERROR))}}var l={REQUEST_ABORTED_ERROR:{error_code:-200,error_message:"Request aborted."},async:function(a,c,d){var e=b("guid")(),f=c.state;c.state=e;c.redirect_uri=new(g||(g=b("URI")))("/dialog/return/arbiter").setSubdomain("www").setFragment(b("QueryString").encode({origin:c.redirect_uri})).getQualifiedURI().toString();c.display="async";j[e]={callback:d||function(){},state:f};b("AsyncDialog").send(new(b("AsyncRequest"))(this.getURI(a,c)).setMethod("GET").setReadOnly(!0).setAbortHandler(k(e)))},popup:function(a,c,d,e,f){__p&&__p();var i=b("guid")(),k=d.state;d.state=i;d.client_id=d.app_id=c;d.redirect_uri=new(g||(g=b("URI")))("/dialog/return/arbiter").setSecure(g.getRequestURI().isSecure()).setSubdomain("www").setFragment(b("QueryString").encode({origin:d.redirect_uri})).addQueryData(e||{}).addQueryData({relation:"opener",close:!0}).toString();d.display=b("UserAgent_DEPRECATED").mobile()?"touch":"popup";j[i]={callback:f||function(){},state:k};c=g.getRequestURI();e=c.getDomain();i=e.replace("developers","www");b("PopupWindow").open(new g(this.getURI(a,d)).setDomain(i).setProtocol("https").toString(),210,h)},getURI:function(a,c){if(c.version){var d=new(g||(g=b("URI")))("/"+c.version+"/dialog/"+a);delete c.version;return d.addQueryData(c)}return b("PlatformVersioning").versionAwareURI(new(g||(g=b("URI")))("/dialog/"+a).addQueryData(c))}};e.exports=l}),null);
__d("CanvasNavigationFullScreen",["cx","AppInstallLogger","Arbiter","CSS","Event","FullScreen"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i=null;a={initLink:function(a,c){if(h)return;else h=!0;i=a;b("CSS").conditionClass(c,"_4-os",b("FullScreen").isSupported());b("Event").listen(c,"click",this.setFullScreen.bind(null,!0));b("FullScreen").subscribe("changed",function(){b("FullScreen").isFullScreen()?b("Arbiter").inform("canvas.enter_fullscreen"):b("Arbiter").inform("canvas.exit_fullscreen")})},isSupported:function(){var a=h&&b("FullScreen").isSupported();return!!a},getFullScreen:function(){return!!b("FullScreen").isFullScreen()},setFullScreen:function(a){a?(b("AppInstallLogger").log("rhc_settings_unit_app_fullscreened",i),a=b("FullScreen").enableFullScreen(document.getElementById("iframe_canvas"))):a=b("FullScreen").disableFullScreen();return a}};e.exports=a}),null);
__d("XAppFriendsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/platform/games/appfriends/",{app_id:{type:"Int",required:!0}})}),null);
__d("CanvasPresenceController",["Arbiter","AsyncRequest","AvailableList","AvailableListConstants","PresenceStatus","XAppFriendsController"],(function(a,b,c,d,e,f){__p&&__p();var g=60*1e3,h=!1,i=[],j=0,k,l,m,n;function o(){var a=0;i.forEach(function(c){b("PresenceStatus").get(c)==b("AvailableListConstants").ACTIVE&&a++});(m===void 0||m!==a>1)&&(m=a>1,b("Arbiter").inform("canvas.friendsOnlineUpdated",m))}function p(a){var c=b("XAppFriendsController").getURIBuilder().setInt("app_id",j).getURI();new(b("AsyncRequest"))().setURI(c).setHandler(function(b){i=b.payload.ids,a&&a(),o()}).send()}function q(){if(j===0){n=q;return}h=!0;p(function(){k=setInterval(p,g),l=b("AvailableList").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED,o)})}function r(){h=!1,clearInterval(k),b("AvailableList").unsubscribe(l)}a={setAppID:function(a){j=a,n&&n()},setAppFriends:function(a){i=a},useFriendsOnline:function(a){if(a==h)return;a?q():r()}};e.exports=a}),null);
__d("JSONRPC",["Log"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){var b=this;this.$1=0;this.$2={};this.remote=function(a){b.$3=a;return b.remote};this.local={};this.$4=a}var c=a.prototype;c.stub=function(a){var b=this;this.remote[a]=function(){var c={jsonrpc:"2.0",method:a};for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];typeof e[e.length-1]==="function"&&(c.id=++b.$1,b.$2[c.id]=e.pop());c.params=e;b.$4(JSON.stringify(c),b.$3||{method:a})}};c.read=function(a,c){__p&&__p();a=JSON.parse(a);var d=a.id;if(!a.method){if(!this.$2[d]){b("Log").warn("Could not find callback %s",d);return}var e=this.$2[d];delete this.$2[d];delete a.id;delete a.jsonrpc;e(a);return}var f=this;e=this.local[a.method];var g;d?g=function(a,b){var e={jsonrpc:"2.0",id:d};e[a]=b;window.setTimeout(function(){f.$4(JSON.stringify(e),c)},0)}:g=function(){};if(!e){b("Log").error('Method "%s" has not been defined',a.method);g("error",{code:-32601,message:"Method not found",data:a.method});return}a.params.push(g.bind(null,"result"));a.params.push(g.bind(null,"error"));try{e=e.apply(c||null,a.params);typeof e!=="undefined"&&g("result",e)}catch(c){b("Log").error("Invokation of RPC method %s resulted in the error: %s",a.method,c.message),g("error",{code:-32603,message:"Internal error",data:c.message})}};return a}();e.exports=a}),null);
__d("XdArbiter",["Arbiter","Log","QueryString","Queue"],(function(a,b,c,d,e,f){__p&&__p();var g=/^apps\./.test(location.hostname)?"canvas":"tab",h={},i={},j=[],k=new(b("Queue"))(),l={setRpcHandler:function(a){k.start(a)},handleMessage:function(a,c,d){__p&&__p();b("Log").debug("XdArbiter at "+(window.name!=null&&window.name!==""?window.name:window==top?"top":"[no name]")+" handleMessage "+JSON.stringify(a));if(typeof a==="string"&&/^FB_RPC:/.test(a)){k.enqueue([a.substring(7),{origin:c,source:d||h[g]}]);return}try{c=typeof a==="string"?JSON.parse(a):a;if(typeof c.method!=="string"||c.method==="")return;typeof c.params==="string"&&(c.params=JSON.parse(c.params));b("Arbiter").inform("Connect.Unsafe."+c.method,c.params,"persistent")}catch(a){}},register:function(a,c,d,e){c=c!=null&&c!==""?c:g;b("Arbiter").inform("XdArbiter/register",{origin:d});h[c]=a;h[d]=a;d===e&&(i[d]=!0);b("Arbiter").inform("XdArbiter.register",c,"persistent");l.scheduleDispatch();return c},scheduleDispatch:function(){var a=42;function b(){var c=j.shift();c&&l.send.apply(this,c);j.length&&window.setTimeout(b,a)}window.setTimeout(b,a)},hasProxy:function(a){a=a!=null&&a!==""?a:g;return!!h[a]},useDirectDispatch:function(a){return!!i[a]},send:function(a,c,d){var e=d in h?d:g;a=typeof a==="string"?a:b("QueryString").encode(a);var f=c;i[d]||(f=c.parent);try{f.postMessage(a,d)}catch(a){b("Log").error("XdArbiter: Proxy for %s not available, page might have been navigated: %s",e,a.message),delete h[e]}return!0}};c=a.XdArbiter;a.XdArbiter=l;if(c){if(c._p.length)while(c._p.length)l.register.apply(l,c._p.shift());if(c._m.length)while(c._m.length)l.handleMessage.apply(l,c._m.shift())}window.addEventListener("message",function(a){b("Log").debug("XdArbiter at "+(window.name||"unnamed window")+" received message "+JSON.stringify(a.data));if(a.data.xdArbiterSyn)a.source.postMessage({xdArbiterAck:!0},"*");else if(a.data.xdArbiterRegister){var c=l.register(a.source,a.data.xdProxyName,a.data.origin,a.origin);a.source.postMessage({xdArbiterRegisterAck:c},"*")}else a.data.xdArbiterHandleMessage&&l.handleMessage(a.data.message,a.data.origin,a.source)},!1);e.exports=l}),null);
__d("PlatformAppController",["errorCode","Arbiter","AsyncRequest","Bootloader","CanvasNavigationFullScreen","CanvasPresenceController","CSS","CurrentUser","Dialog","JSONRPC","PlatformDialogClient","PlatformDialogWhitelistedParams","Style","URI","Vector","XdArbiter","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i,j={oauth:!0,test_flow:!0,app_requests:!0,game_group_create:!0,game_group_join:!0,gift:!0,feed:!0,share:!0,share_open_graph:!0,payer_promotion:!0,payerpromotion:!0,payment_module:!0,payment_module_iap:!0,payment_subscription:!0,"stream.publish":!1},k,l,m=!0,n=0,o=!1,p,q=!1,r=window._cstart,s=0,t,u,v={},w=new(b("JSONRPC"))(function(a,c){var d=c.origin||l;c=c.source;if(c==null){var e=b("ge")(k);b("XdArbiter").useDirectDispatch(d)?c=e.contentWindow:c=e.contentWindow.frames.fb_xdm_frame_https}b("XdArbiter").send("FB_RPC:"+a,c,d)});(i=b("Arbiter")).subscribe("XdArbiter/register",function(a,c){t&&c.origin!=l&&new(b("AsyncRequest"))().setURI("/platform/app_owned_url_check/").setData({appid:t,url:c.origin}).setHandler(function(a){a=a.getPayload();a.allowed&&(l=c.origin)}).send()});function a(a){var b=parseInt(a.x,10);a=parseInt(a.y,10);b>=0&&a>=0&&window.scrollTo(b,a)}function c(a){var c=b("ge")(a.frame.replace(/_fb_https$/,""));c&&(b("CSS").addClass(c,"noresize"),c.style.height=a.height+"px")}function d(){var a=b("ge")(k),c=0,d=0;while(a)c+=parseInt(a.offsetLeft,10),d+=parseInt(a.offsetTop,10),a=a.offsetParent;a=b("Vector").getViewportDimensions();var e=b("Vector").getScrollPosition();return{clientWidth:a.x,clientHeight:a.y,scrollLeft:e.x,scrollTop:e.y,offsetLeft:c,offsetTop:d}}function x(a,c){if(!b("PlatformDialogWhitelistedParams")[c])return a;var d={};b("PlatformDialogWhitelistedParams").common.forEach(function(b){d[b]=a[b]});b("PlatformDialogWhitelistedParams")[c].forEach(function(b){d[b]=a[b]});return d}function f(a,c,d){__p&&__p();var e=a.method;delete a.method;delete a.access_token;delete a.next;delete a.context;delete a.locale;a.display="async";if(e==null||typeof e!=="string"||!/^[\w\-_.]+$/.test(e))throw new Error("Malformed method name");Object.keys(a).forEach(function(b){if(/[\s\x80-\x9f]/.test(b))delete a[b];else if(/\./.test(b)){var c=b.replace(/\./g,"_");Object.prototype.hasOwnProperty.call(a,c)&&delete a[b]}});var f=this.origin;typeof a.redirect_uri==="string"&&new(h||(h=b("URI")))(a.redirect_uri).getOrigin()===new(h||(h=b("URI")))(this.origin).getOrigin()&&(f=a.redirect_uri);a.redirect_uri=f;e=="apprequests"&&(e="app_requests",a.context="canvas_app_requests");if(e=="pay"){var g=a.action;(g==="purchaseitem"||g==="purchase_item")&&u&&u.usePaymentModules&&(e="payment_module",a.action="payment_module");g==="purchaseiap"&&u&&u.iapUsePaymentModule&&(e="payment_module_iap",a.action="payment_module_iap");g==="purchaseitem"||g==="purchase_item"||g==="purchaseiap"?j[e]=!0:u&&u.useNewPayDialog&&(g==="create_subscription"||g==="createsubscription"||g==="changesubscription"||g==="modifysubscription"||g==="cancelsubscription"||g==="reactivatesubscription"||g==="settlesubscription")?(e="payment_subscription",g==="create_subscription"&&(a.action="createsubscription")):j[e]=!1}e=="fbpromotion"&&(e="payer_promotion",a.action="payer_promotion");e==="stream_publish"&&(e="stream.publish");(e=="permissions.oauth"||e=="permissions.request"||e=="oauth")&&(e="oauth");e==="stream.publish"&&(j[e]=!0);a=x(a,e);if(j[e]){b("PlatformDialogClient").async(e,a,function(d){d.error_code==1340004?b("CurrentUser").getID()&&b("CurrentUser").getID()!="0"?c(d):new(h||(h=b("URI")))("/login.php").addQueryData("next",h.getRequestURI().toString()).go():e==="app_requests"&&d.error_code==1349146?y(e,a,c,d,f):c(d)});return}g=new(h||(h=b("URI")))("/fbml/ajax/dialog/"+e.replace(/\./g,"_")).setQueryData(a);g=new(b("AsyncRequest"))().setMethod("GET").setReadOnly(!0).setURI(g).setAbortHandler(function(){d(b("PlatformDialogClient").REQUEST_ABORTED_ERROR)});new(b("Dialog"))().setAsync(g).setModal(!0).setWideDialog(!0).show().setCloseHandler(c)}function y(a,c,d,e,f){c.redirect_uri=f,b("PlatformDialogClient").async("oauth",c,function(g){g.error?d(e):(c.redirect_uri=f,b("PlatformDialogClient").async(a,c,function(a){d(a)}))})}function g(a){o=a}function z(a,b){q=a,p=b}w.stub("navigate");function A(a){if(o){w.remote.navigate(a);return!0}return!1}w.stub("enterFullScreen");i.subscribe("canvas.enter_fullscreen",w.remote.enterFullScreen);w.stub("exitFullScreen");i.subscribe("canvas.exit_fullscreen",w.remote.exitFullScreen);w.stub("fireEvent");i.subscribe("canvas.friendsOnlineUpdated",w.remote.fireEvent.bind(w.remote));function B(a){var c=a.time-r+s;switch(a.name){case"StopIframeAppTtiTimer":s=c;return{time_delta_ms:c,type:"tti"};case"StartIframeAppTtiTimer":r=a.time;break;case"RecordIframeAppTti":q&&b("Bootloader").loadModules(["CanvasIFrameLogger"],function(b){b.log(c,a.appId,p)},"PlatformAppController");return{time_delta_ms:c,type:"tti"}}}w.local.setSize=c;w.local.getPageInfo=d;w.local.scrollTo=a;w.local.showDialog=f;w.local.setNavigationEnabled=g;w.local.isFullScreenSupported=b("CanvasNavigationFullScreen").isSupported;w.local.getFullScreen=b("CanvasNavigationFullScreen").getFullScreen;w.local.logTtiMessage=B;w.local.useFriendsOnline=b("CanvasPresenceController").useFriendsOnline.bind(b("CanvasPresenceController"));b("XdArbiter").setRpcHandler(function(a){w.read.apply(w,a)});w.stub("hidePluginObjects");i.subscribe("layer_shown",function(){++n===1&&(m?w.remote.hidePluginObjects():b("Style").set(b("ge")("pagelet_canvas_content"),"visibility","hidden"))});w.stub("showPluginObjects");i.subscribe("layer_hidden",function(){--n===0?m?w.remote.showPluginObjects():b("Style").set(b("ge")("pagelet_canvas_content"),"visibility",""):n<0&&(n=0)});function C(a){v[a.name]=a;a=b("ge")(a.name);a&&(k=a);window.addEventListener("message",function(a){a.data.platformAppControllerGetFrameParams&&/^https:/.test(a.origin)&&/\.facebook\.com$/.test(a.origin)&&a.source.postMessage({platformAppControllerGetFrameParamsResponse:!0,name:a.data.name,params:v[a.data.name]},a.origin)},!1)}c={setActiveIframeAndAppID:function(a,c,d){k=a,l=c,t=d,b("CanvasPresenceController").setAppID(t)},setInformAppOnLayerChange:function(a){m=a},setNavigationEnabled:g,setTtiEnabled:z,handleNavigation:A,init:C,getFrameParams:function(a){return v[a]},setConfig:function(a){u=a}};e.exports=c}),null);
__d("PluginMessage",["DOMEventListener"],(function(a,b,c,d,e,f){a={listen:function(){b("DOMEventListener").add(window,"message",function(a){if(/\.facebook\.com$/.test(a.origin)&&/^FB_POPUP:/.test(a.data)){a=JSON.parse(a.data.substring(9));"reload"in a&&/^https?:/.test(a.reload)&&document.location.replace(a.reload)}})}};e.exports=a}),null);
__d("PluginConfirm",["DOMEvent","DOMEventListener","PlatformVersioning","PluginMessage","PopupWindow","URI"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(a){Object.assign(this,{plugin:a,confirm_params:{},return_params:(g||(g=b("URI"))).getRequestURI().getQueryData()}),this.addReturnParams({ret:"sentry"}),delete this.return_params.hash}Object.assign(h.prototype,{addConfirmParams:function(a){Object.assign(this.confirm_params,a)},addReturnParams:function(a){Object.assign(this.return_params,a);return this},start:function(){var a=b("PlatformVersioning").versionAwareURI(new(g||(g=b("URI")))("/plugins/error/confirm/"+this.plugin)).addQueryData(this.confirm_params).addQueryData({secure:g.getRequestURI().isSecure(),plugin:this.plugin,return_params:JSON.stringify(this.return_params)});this.popup=b("PopupWindow").open(a.toString(),320,486);b("PluginMessage").listen();return this}});h.starter=function(a,b,c){a=new h(a);a.addConfirmParams(b||{});a.addReturnParams(c||{});return a.start.bind(a)};h.listen=function(a,c,d,e){b("DOMEventListener").add(a,"click",function(a){new(b("DOMEvent"))(a).kill(),h.starter(c,d,e)()})};e.exports=h}),null);