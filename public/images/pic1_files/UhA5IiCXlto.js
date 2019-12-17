if (self.CavalryLogger) { CavalryLogger.start_js(["OSAuQ"]); }

__d("ContextualDialogNoArrow",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(){}var b=a.prototype;b.enable=function(){};b.disable=function(){};return a}();e.exports=a}),null);
__d("NFXContextFactory",["FBLogger","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=function(a,b){if(b!==null)return b};return JSON.stringify({reportable_ent_token:a.reportable_ent_token,story_location:a.story_location,entry_point:a.entry_point,type:a.type,session_id:b("uuid")(),initial_action_name:a.initial_action_name,reportable_id:a.reportable_id,page_id:a.page_id,responsible_id:a.responsible_id},c)}function a(a){var b=a.reportable_ent_token,c=a.story_location,d=a.entry_point;d=d===void 0?"unknown":d;a=a.responsible_id;return g({type:1,story_location:c,entry_point:d,reportable_ent_token:b,responsible_id:a})}function c(a){var b=a.reportable_id,c=a.page_id;a=a.storyLocation;return g({type:6,story_location:a,entry_point:"unknown",initial_action_name:"POLITICAL_ARCHIVE_REPORT_AD",reportable_id:b,page_id:c})}function d(a){var b=a.reportable_ent_token,c=a.story_location,d=a.entry_point;d=d===void 0?"unknown":d;var e=a.initial_action_name;a=a.page_id;return g({type:11,story_location:c,entry_point:d,reportable_ent_token:b,initial_action_name:e,page_id:a})}function f(a){var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;a=a.initial_action_name;c===null&&b("FBLogger")("frx").warn("null or undefined reportable_ent_token in forEntReportable, location=%s entry_point=%s",d,e);return g({type:2,story_location:d,entry_point:e,reportable_ent_token:c,initial_action_name:a})}e.exports={withEntReportable:f,withEntReportableOnPage:d,withEntMessageThread:a,withPoliticalArchiveAds:c}}),null);
__d("NFXURI",["ActorURI","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a,c){c===void 0&&(c=null);a=new(g||(g=b("URI")))("/ajax/nfx/start_dialog").setQueryData({context:a});c!=null&&(a=b("ActorURI").create(a,c));return a}function c(a){var c=a.reportable_ent_token,d=a.story_location,e=a.tracking;a=a.actor_id;d=new(g||(g=b("URI")))("/ajax/nfx/start_dialog").setQueryData({story_location:d,reportable_ent_token:c});e!==null&&d.addQueryData({tracking:e});a!=null&&(d=b("ActorURI").create(d,a));return d}d={withContextString:a,withEntReportable:c};e.exports=d}),null);
__d("XRapidReportingDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/rapid_report/",{context:{type:"String",required:!0},preselectedtagid:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("FRXURI",["ActorURI","CurrentUser","NFXContextFactory","NFXURI","XRapidReportingDialogController","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;var f=a.responsible_id;a=a.actor_id;c=b("NFXContextFactory").withEntMessageThread({reportable_ent_token:c,story_location:d,entry_point:e,responsible_id:f});if(b("CurrentUser").isWorkUser()&&!b("gkx")("967282"))return b("NFXURI").withContextString(c,a);d=b("XRapidReportingDialogController").getURIBuilder().setString("context",c).getURI();a!=null&&(d=b("ActorURI").create(d,a));return d}function c(a){__p&&__p();var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;var f=a.initial_action_name,g=a.actor_id;a=a.page_id;if(b("CurrentUser").isWorkUser()&&!b("gkx")("967282"))return b("NFXURI").withEntReportable({reportable_ent_token:c,story_location:d,tracking:{},actor_id:g});c=b("NFXContextFactory").withEntReportableOnPage({reportable_ent_token:c,story_location:d,entry_point:e,initial_action_name:f,page_id:a});d=b("XRapidReportingDialogController").getURIBuilder().setString("context",c).getURI();g!=null&&(d=b("ActorURI").create(d,g));return d}function d(a){__p&&__p();var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;var f=a.initial_action_name;a=a.actor_id;if(b("CurrentUser").isWorkUser()&&!b("gkx")("967282"))return b("NFXURI").withEntReportable({reportable_ent_token:c,story_location:d,tracking:{},actor_id:a});c=b("NFXContextFactory").withEntReportable({reportable_ent_token:c,story_location:d,entry_point:e,initial_action_name:f});d=b("XRapidReportingDialogController").getURIBuilder().setString("context",c).getURI();a!=null&&(d=b("ActorURI").create(d,a));return d}function f(a,b){return btoa(a+":"+b)}e.exports={withEntMessageThread:a,withEntReportable:d,withEntReportableOnPage:c,getReportableToken:f}}),null);
__d("isEventSupported",["fbjs/lib/ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("fbjs/lib/ExecutionEnvironment").canUseDOM&&(g=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function a(a,c){__p&&__p();if(!b("fbjs/lib/ExecutionEnvironment").canUseDOM||c&&!("addEventListener"in document))return!1;c="on"+a;var d=c in document;if(!d){var e=document.createElement("div");e.setAttribute(c,"return;");d=typeof e[c]==="function"}!d&&g&&a==="wheel"&&(d=document.implementation.hasFeature("Events.wheel","3.0"));return d}e.exports=a}),null);
__d("ImageStyles",["LayoutStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("LayoutStyles"),{backgroundColor:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderColor:!0,borderRadius:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderWidth:!0,height:!0,opacity:!0,overflow:!0,width:!0});e.exports=a}),null);
__d("Image",["cx","CssBackgroundImage.react","Image.react","ImageStyles","React","getValidatedStyle","joinClasses","pluckClassNames"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h={cover:"cover",contain:"contain",stretch:"fill",center:"none"},i={cover:"cover",contain:"contain",stretch:"100% 100%",center:"auto"},j=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.source,d=a.style,e=a.resizeMode;a=babelHelpers.objectWithoutPropertiesLoose(a,["source","style","resizeMode"]);d=b("pluckClassNames")(d);var f=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ImageStyles"));var g=e&&i[e]||"cover";e=e&&h[e]||"cover";var j=c.scale!=null?Math.max(c.scale,1):1;return b("React").jsxs("div",babelHelpers["extends"]({className:b("joinClasses").apply(void 0,["_b5a"].concat(f)),src:c,style:d},a,{children:[b("React").jsx(b("CssBackgroundImage.react"),{className:b("joinClasses")("_b5a _6jm9"),imageURI:c.uri,backgroundPosition:"center center",style:{backgroundSize:g,transform:"scale("+j+", "+j+")"}}),b("React").jsx(b("Image.react"),{className:b("joinClasses")("_b5a _6jma"),src:c,style:{transform:"scale("+j+", "+j+")",objectFit:e}})]}))};return a}(b("React").PureComponent);j.defaultProps={resizeMode:"cover"};function a(a){var c=a.source,d=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["source","style"]);if(typeof c==="object"&&c.uri&&c.sprited===void 0)return b("React").jsx(j,babelHelpers["extends"]({source:c,style:d},a));d=b("pluckClassNames")(d);var e=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ImageStyles"));return b("React").jsx(b("Image.react"),babelHelpers["extends"]({className:b("joinClasses").apply(void 0,["_b5a"].concat(e)),src:c,style:d},a))}e.exports=a}),null);
__d("RelayFBEnvironmentActorID",["invariant","relay-experimental/useRelayEnvironment"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){a=a.options;a!=null&&a.actorID!=null||g(0,20185);typeof a.actorID==="string"||g(0,void 0);return a.actorID}function a(){var a=b("relay-experimental/useRelayEnvironment")();return h(a)}e.exports={getActorID:h,useActorID:a}}),null);
__d("RelayHooks",["RelayFBEnvironmentActorID","relay-experimental/EntryPointContainer.react","relay-experimental/fetchQuery","relay-experimental/loadQuery","relay-experimental/prepareEntryPoint","relay-experimental/RelayEnvironmentProvider","relay-experimental/useFragment","relay-experimental/useLazyLoadQuery","relay-experimental/useLegacyPaginationFragment","relay-experimental/usePreloadedQuery","relay-experimental/useRefetchableFragment","relay-experimental/useRelayEnvironment","relay-runtime","configureRelayForWWW"],(function(a,b,c,d,e,f){"use strict";a=b("RelayFBEnvironmentActorID").useActorID;c=b("relay-experimental/loadQuery").loadQuery;d=b("relay-runtime").graphql;b("configureRelayForWWW")();e.exports={EntryPointContainer:b("relay-experimental/EntryPointContainer.react"),RelayEnvironmentProvider:b("relay-experimental/RelayEnvironmentProvider"),fetchQuery:b("relay-experimental/fetchQuery"),graphql:d,preloadQuery:c,prepareEntryPoint:b("relay-experimental/prepareEntryPoint"),useActorID:a,useFragment:b("relay-experimental/useFragment"),useLazyLoadQuery:b("relay-experimental/useLazyLoadQuery"),useLegacyPaginationFragment:b("relay-experimental/useLegacyPaginationFragment"),usePreloadedQuery:b("relay-experimental/usePreloadedQuery"),useRefetchableFragment:b("relay-experimental/useRefetchableFragment"),useRelayEnvironment:b("relay-experimental/useRelayEnvironment")}}),null);