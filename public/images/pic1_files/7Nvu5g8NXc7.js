if (self.CavalryLogger) { CavalryLogger.start_js(["PxMtW"]); }

__d("NotificationComponentsBootloader",["Promise","JSResource"],(function(a,b,c,d,e,f){"use strict";var g=[(c=b("JSResource"))("NotificationJewelList.react").__setRef("NotificationComponentsBootloader"),c("NotificationAsyncWrapper").__setRef("NotificationComponentsBootloader"),c("NotificationSeenState").__setRef("NotificationComponentsBootloader"),c("NotificationStore").__setRef("NotificationComponentsBootloader"),c("NotificationUpdates").__setRef("NotificationComponentsBootloader"),c("NotificationJewelController").__setRef("NotificationComponentsBootloader")];function a(a){var c=a===!0?[b("JSResource")("BizNotificationJewelBodyContainer.react").__setRef("NotificationComponentsBootloader")]:[b("JSResource")("NotificationList.react").__setRef("NotificationComponentsBootloader")];return new(b("Promise"))(function(a){b("JSResource").loadAll(c.concat(g),function(b,c,d){a([b,c,d])})})}e.exports={load:a}}),null);
__d("BanzaiLooper",["Banzai"],(function(a,b,c,d,e,f){var g={retry:!0};function h(a,c){b("Banzai").post("banzai_looper:"+a,c,g)}a={labelBinaryClassificationExample:function(a){h("binary_classification_example",babelHelpers["extends"]({operation:"label"},a))}};e.exports=a}),null);
__d("NotificationJewelPerformanceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBadgeCurrentCount=function(a){this.$1.badge_current_count=a;return this};c.setBadgeInitialCount=function(a){this.$1.badge_initial_count=a;return this};c.setClientSessionID=function(a){this.$1.client_session_id=a;return this};c.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};c.setEagerLoadTriggerAndDelay=function(a){this.$1.eager_load_trigger_and_delay=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setJewelName=function(a){this.$1.jewel_name=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={badge_current_count:!0,badge_initial_count:!0,client_session_id:!0,client_timestamp:!0,eager_load_trigger_and_delay:!0,event_name:!0,jewel_name:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("JewelLogger",["BanzaiLooper","NotificationJewelPerformanceTypedLogger","NotificationListConfig","QuickPerformanceLogger","gkx","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("BanzaiLooper").labelBinaryClassificationExample,i=b("NotificationListConfig").sessionID,j=b("gkx")("678513"),k=!1,l=function(b){__p&&__p();babelHelpers.inheritsLoose(a,b);function a(c){var d;d=b.call(this)||this;a.$JewelTypedLoggerWithSession1[c]||(a.$JewelTypedLoggerWithSession1[c]={});d.$JewelTypedLoggerWithSession2=c;return d}var c=a.prototype;c.setEventName=function(a){this.$JewelTypedLoggerWithSession3=a;return b.prototype.setEventName.call(this,a)};c.log=function(){a.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]||(a.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]=!0,this.setClientSessionID(i),this.setJewelName(this.$JewelTypedLoggerWithSession2),b.prototype.log.call(this))};return a}(b("NotificationJewelPerformanceTypedLogger"));l.$JewelTypedLoggerWithSession1={};function m(a){a.jewelName==="notifications"&&a.eventName==="list_populated"&&q(a.timestamp),new l(a.jewelName).setEventName(a.eventName).setClientTimestamp(a.timestamp).log()}function n(a){var b=a.trigger,c=a.eagerLoadDelayInMs,d=babelHelpers.objectWithoutPropertiesLoose(a,["trigger","eagerLoadDelayInMs"]);b=b+":"+c;new l(a.jewelName).setEventName(d.eventName).setClientTimestamp(d.timestamp).setEagerLoadTriggerAndDelay(b).log()}function o(a){j&&!k&&(b("QuickPerformanceLogger").markerStart(655584,0,a),k=!0)}function p(a){j&&k&&b("QuickPerformanceLogger").annotateMarkerIntArray(655584,"JEWEL_CLICK_COUNT",[a])}function q(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,2,0,a),k=!1)}function r(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,4,0,a),k=!1)}function s(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(655584,3,0,a),k=!1)}a={logDataEagerLoad:function(a){a.eventName==="data_eager_load_trigger"?n(a):m(a)},logJsBootload:function(a){a.eventName==="js_bootload_trigger"?n(a):m(a)},logJewelCancel:function(){r((g||(g=b("performanceNow")))())},logJewelFail:function(){s((g||(g=b("performanceNow")))())},logJewelClick:function(a){a.jewelName==="notifications"&&(o(a.timestamp),p(a.clickCount)),a.clickCount===1&&(new l(a.jewelName).setEventName("first_jewel_click").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).setBadgeCurrentCount(a.badgeCurrentCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"positive"}))},logJewelInitialize:function(a){new l(a.jewelName).setEventName("jewel_initialize").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"tentatively_negative"})},logJewelListComponentEvent:m};e.exports=a}),null);
__d("performanceNowNoFallback",["performance"],(function(a,b,c,d,e,f){var g;e.exports=(g||(g=b("performance"))).now?function(){return(g||(g=b("performance"))).now()}:null}),null);
__d("NotificationEagerLoader",["invariant","Promise","Arbiter","AsyncRequest","BigPipe","JewelLogger","NotificationComponentsBootloader","NotificationDataFetchConfig","NotificationEndpointState","NotificationListConfig","once","performanceAbsoluteNow","performanceNowNoFallback"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("JewelLogger").logDataEagerLoad,j=b("JewelLogger").logJsBootload,k=b("NotificationDataFetchConfig").dataEagerFetchTrigger,l=b("NotificationListConfig").jsBootloadTrigger,m=b("NotificationListConfig").numNotificationsPerPage;m=k!=="none"?m:0;var n={hasData:m>0,targetNumToLoad:m,endpointState:a(),payloadPromise:null};function a(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"};return b("NotificationEndpointState").getInstance(a)}function c(a){if(!b("performanceNowNoFallback"))return b("NotificationComponentsBootloader").load().then(function(){});else{j({jewelName:"notifications",eventName:"js_bootload_trigger",trigger:l,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0});j({jewelName:"notifications",eventName:"js_bootload_start",timestamp:b("performanceNowNoFallback")()});return b("NotificationComponentsBootloader").load().then(function(){j({jewelName:"notifications",eventName:"js_bootload_end",timestamp:b("performanceNowNoFallback")()})})}}function d(a){__p&&__p();b("performanceNowNoFallback")&&(i({jewelName:"notifications",eventName:"data_eager_load_trigger",trigger:k,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0}),i({jewelName:"notifications",eventName:"data_eager_load_start",timestamp:b("performanceNowNoFallback")()}));a=n.targetNumToLoad;var c=n.endpointState;a=c.getRequestParams(a);var d;switch(c.endpointControllerName){case"WebNotificationsPayloadPagelet":d="/ajax/notifications/client/get.php";break;case"AdsUnifiedNavNotificationsPayloadPagelet":d="/notifications/client/ads_unified_nav/";break;case"BusinessManagerNotificationsPayloadPagelet":d="/notifications/client/business_manager/";break}d!=null||g(0,5504,c.endpointControllerName);c=new(b("AsyncRequest"))(d).setAllowCrossPageTransition(!0).setData(a);a=c.exec().then(function(a){b("performanceNowNoFallback")&&i({jewelName:"notifications",eventName:"data_eager_load_end",timestamp:b("performanceNowNoFallback")()});return a.getPayload()});n.hasData||g(0,5505);return a}function f(a){__p&&__p();return new(b("Promise"))(function(c,d){__p&&__p();b("Arbiter").subscribeOnce(b("BigPipe").Events.init,b("once")(function(e,f){__p&&__p();e=f.arbiter;if(!e){d("No arbiter from BigPipe init event");return}e.subscribeOnce(b("BigPipe").Events.displayed,b("once")(function(e,f){e=f.ts;f=(h||(h=b("performanceAbsoluteNow")))()-e;a(f).then(function(a){return c(a)})["catch"](function(a){return d(a)})}))}))})}l==="bigpipe_display_done"&&f(c);k==="bigpipe_display_done"&&(n.payloadPromise=f(d));e.exports={eagerlyLoadedData:n}}),null);
__d("DeveloperCommunicationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DeveloperCommunicationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAggregatedAlertDataID=function(a){this.$1.aggregated_alert_data_id=a;return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setDevAlertGroupCustom=function(a){this.$1.dev_alert_group_custom=a;return this};c.setDevAlertID=function(a){this.$1.dev_alert_id=a;return this};c.setDevAlertSource=function(a){this.$1.dev_alert_source=a;return this};c.setDevNotifMedium=function(a){this.$1.dev_notif_medium=a;return this};c.setDevNotifType=function(a){this.$1.dev_notif_type=a;return this};c.setDocPageDescription=function(a){this.$1.doc_page_description=a;return this};c.setEmailCompletionStatus=function(a){this.$1.email_completion_status=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setJewelCompletionStatus=function(a){this.$1.jewel_completion_status=a;return this};c.setMarkdownPageIds=function(a){this.$1.markdown_page_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setNotifDeliveryID=function(a){this.$1.notif_delivery_id=a;return this};c.setNotifEnvironment=function(a){this.$1.notif_environment=a;return this};c.setNotifID=function(a){this.$1.notif_id=a;return this};c.setObjective=function(a){this.$1.objective=a;return this};c.setPocTeam=function(a){this.$1.poc_team=a;return this};c.setRecipientID=function(a){this.$1.recipient_id=a;return this};c.setRef=function(a){this.$1.ref=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={aggregated_alert_data_id:!0,app_id:!0,dev_alert_group_custom:!0,dev_alert_id:!0,dev_alert_source:!0,dev_notif_medium:!0,dev_notif_type:!0,doc_page_description:!0,email_completion_status:!0,event:!0,jewel_completion_status:!0,markdown_page_ids:!0,notif_delivery_id:!0,notif_environment:!0,notif_id:!0,objective:!0,poc_team:!0,recipient_id:!0,ref:!0,time:!0,type:!0,weight:!0};e.exports=a}),null);
__d("DeveloperCommunicationLogger",["CurrentUser","DeveloperCommunicationTypedLogger"],(function(a,b,c,d,e,f){"use strict";function a(a){a=a?"jewel_list_open":"jewel_list_close";new(b("DeveloperCommunicationTypedLogger"))().setEvent(a).setType("dev_alert").setRecipientID(b("CurrentUser").getID()).log()}e.exports={logJewelToggle:a}}),null);
__d("NotificationJewelListController",["DeveloperCommunicationLogger","FBAMetaMegaMenuLogger","NotificationComponentsBootloader","NotificationListConfig","React","ReactDOM","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationListConfig").numNotificationsPerPage,h=null,i=null,j=null;a=function(){"use strict";__p&&__p();function a(a,b){this.$1=!1,this.$2=!1,this.$3=!1,this.$4=a,this.$5=b}var c=a.prototype;c.open=function(){this.$1=!0,this.$6()};c.pause=function(){this.$2=!0,this.$5.pageType==="ANALYTICS"?b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2):this.$5.pageType==="APP_DASHBOARD"&&b("DeveloperCommunicationLogger").logJewelToggle(this.$2),this.$6()};c.unpause=function(){this.$2=!1,this.$5.pageType==="ANALYTICS"?b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2):this.$5.pageType==="APP_DASHBOARD"&&b("DeveloperCommunicationLogger").logJewelToggle(this.$2),this.$6()};c.setFlyoutOpenState=function(a){this.$3=a,this.$6()};c.$6=function(){var a=this;!h||!i?b("promiseDone")(b("NotificationComponentsBootloader").load(this.$5.isBizsite),function(b){var c=b[0],d=b[1];b=b[2];h=c;i=d;j=b;a.$7()}):this.$7()};c.$7=function(){var a=this;if(!h||!i||!j)return;b("ReactDOM").render(b("React").jsx(j,{children:b("React").jsx(h,{hasEverBeenOpened:this.$1,paused:this.$2,isBucketingDisabled:this.$5.isBucketingDisabled,isNotifsIntl:this.$5.isNotifsIntl,isFlyoutOpened:this.$3,tracking:this.$5.tracking,shortenTimestamp:this.$5.shortenTimestamp,businessID:this.$5.businessID,defaultTab:this.$5.defaultTab,maxHeight:this.$5.maxHeight,useChevron:this.$5.useChevron,chevronType:this.$5.chevronType,numPerPage:g,listRenderer:i,upsell:this.$5.upsell||null,endpoint:this.$5.endpoint,sourceView:this.$5.sourceView,settingsUri:this.$5.settingsUri,onClick:function(c,d){a.$5.pageType==="ANALYTICS"&&b("FBAMetaMegaMenuLogger").logMegaMenuNotificationClick(c,d)}})}),this.$4)};return a}();e.exports=a}),null);
__d("NotificationSubscriptions",["Arbiter","ChannelConstants","FacebookWebNotificationsSubscription","NotificationTokens","createNotificationSubscriptions","createObjectFrom"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){(!a.eligible_buckets||!a.eligible_buckets.includes("PRIORITY_INBOX"))&&(a.eligible_buckets=["PRIORITY_INBOX"].concat(a.eligible_buckets||[]));if(!a.sort_keys){var b=a.creation_time||Date.now()/1e3;a.sort_keys=[""+b,b+"000000"]}return a}e.exports=b("createNotificationSubscriptions")({subscribeToNotificationHides:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notification_hidden"),function(c,d){c=b("NotificationTokens").tokenizeIDs([d.obj.notif_id+""]);d=d.obj.state===1;a(b("createObjectFrom")(c,d))})},subscribeToNotificationReadnessUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_read"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToNotificationSeenStateUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_seen"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToRealtimeChannelNotifications:function(a){return b("FacebookWebNotificationsSubscription").subscribe({event:"NEW_NOTIFICATION",callback:function(b){a(b?[g(b)]:null)}})}})}),null);
__d("GlobalNotificationSubscriptionsSubscription",["NotificationSubscriptions"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationSubscriptions").setup()}),null);
__d("FacebookWebNotificationsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2211568468936487"};b.getQueryID=function(){return"240195660183444"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("NotificationSync",["invariant","Arbiter","ChannelConstants","CurrentUser","FacebookWebNotificationsQueryWebGraphQLQuery","NotificationConstants","NotificationUpdates","WebGraphQL","WebPixelRatio","ifRequired","objectValues","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;function i(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"},c;b("ifRequired")("NotificationStore",function(d){c=b("objectValues")(d.getAll(a))});if(c==null)return null;var d=c.map(function(a){return a.creation_time}).filter(Boolean);return d.length===0?null:Math.max.apply(Math,d)}function j(){__p&&__p();var a=i();if(a==null)return;b("promiseDone")(b("WebGraphQL").exec(new(b("FacebookWebNotificationsQueryWebGraphQLQuery"))({is_work_user:b("CurrentUser").isWorkUser(),newer_than:a,scale:b("WebPixelRatio").get(),should_fetch_buckets:!1,should_fetch_sort_keys:!1,should_include_server_time:!1})),function(a){__p&&__p();if(a){a=(a=a)!=null?(a=a.viewer)!=null?(a=a.notifications)!=null?a.edges:a:a:a;a=a&&a.map(function(a){a=a.node;return a}).filter(Boolean);if(a==null)return;a={nodes:a};b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.SYNC,a)}})}var k=null,l=0;a={setup:function(a){__p&&__p();l++;(h===null||a>h)&&(h=a);k==null&&(k=b("Arbiter").subscribe(b("ChannelConstants").ON_INVALID_HISTORY,j));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,51);c=!0;l--;l===0&&(k.unsubscribe(),k=null)}}}};e.exports=a}),null);
__d("GlobalNotificationSyncSubscription",["InitialServerTime","NotificationSync"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationSync").setup(b("InitialServerTime").serverTime)}),null);
__d("NotificationSeenState",["NotificationConstants","NotificationUpdates","createObjectFrom","ifRequired","objectValues"],(function(a,b,c,d,e,f){__p&&__p();var g=1,h=2,i=0,j=g,k=3,l=b("NotificationConstants").PayloadSourceType.INITIAL_LOAD,m={SEEN_AND_READ:k,SEEN_BUT_UNREAD:j,UNSEEN_AND_UNREAD:i},n={};b("ifRequired")("NotificationStore",function(a){a=a.getAllForAllEndpoints();a=b("objectValues")(a);var c=p(a);Object.keys(c).forEach(function(a){var b=c[a];n[a]=b})});function o(a){__p&&__p();var c=[],d=[];Object.keys(a).forEach(function(b){__p&&__p();var e=a[b],f=n[b];n[b]=e;if(f===void 0){c.push(b);d.push(b);return}f=f^e;f&g&&c.push(b);f&h&&d.push(b)});c.length&&b("NotificationUpdates").didUpdateSeenState(c);d.length&&b("NotificationUpdates").didUpdateReadState(d)}b("NotificationUpdates").subscribe("update-notifications",function(a,c){__p&&__p();a=c.nodes;if(!a||!a.length)return;c=c.payloadsource;var d=b("NotificationConstants").PayloadSourceType,e=c==d.ENDPOINT;c=a.filter(function(a){a=a.alert_id;return!e||n[a]===void 0});d=p(c);o(d)});function p(a){var b={};a.forEach(function(a){a.seen_state&&(b[a.alert_id]=m[a.seen_state])});return b}b("NotificationUpdates").subscribe("update-seen",function(a,c){__p&&__p();if(!c.seenState)return;var d=[],e={};Object.keys(c.seenState).forEach(function(a){if(!c.seenState||!c.seenState[a]){d.push(a);return}var b=n[a];b!==void 0&&(e[a]=b|g)});a=babelHelpers["extends"]({},b("createObjectFrom")(d,i),e);o(a)});b("NotificationUpdates").subscribe("update-read",function(a,c){__p&&__p();if(!c.readState)return;var d=[],e={};Object.keys(c.readState).forEach(function(a){if(!c.readState)return;var b=c.readState[a];if(b){d.push(a);return}b=n[a];b!==void 0?e[a]=b&~h:c.payloadsource==l&&(e[a]=j)});a=babelHelpers["extends"]({},b("createObjectFrom")(d,k),e);o(a)});function q(a){a=n[a];return a}var r={isRead:function(a){return q(a)===k},isSeen:function(a){return q(a)!==i},getUnseenCount:function(a,b){return r.getUnseenIDs(a,b).length},getUnseenIDs:function(a,b){var c=Object.keys(n).filter(function(a){return n[a]===i});a&&(c=c.filter(function(c){return b&&b[c]===a}));return c},getUnreadCount:function(){return r.getUnreadIDs().length},getUnreadIDs:function(){return Object.keys(n).filter(function(a){return n[a]!==k})},validateFilter:function(a,b){switch(b){case"seen_only":return r.isSeen(a);case"unseen_only":return!r.isSeen(a);case"read_only":return r.isRead(a);case"unread_only":return!r.isRead(a);case"seen_unread_only":return r.isSeen(a)&&!r.isRead(a);default:return!0}}};e.exports=r}),6);
__d("JewelBadgeCountRecorder",["invariant","Arbiter","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=Object.create(null);a={onCountUpdated:function(a,c){i[c.jewel]==null&&(i[c.jewel]=[]);a=i[c.jewel];a.push({timestamp:(h||(h=b("performanceNow")))(),count:c.count});a.length>1e3&&a.shift()},getCountAtTimestamp:function(a,b){var c=i[a];c!=null||g(0,2483,a,JSON.stringify(i));c.length>0||g(0,2484,a);a=c.find(function(a,d){var e=c[d+1];return d===0&&b<a.timestamp||b>a.timestamp&&(e==null||b<e.timestamp)});a||g(0,2485);return a.count}};b("Arbiter").subscribe("jewel/count-updated",a.onCountUpdated);e.exports=a}),null);
__d("FriendingSurfaceVisitationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppVersion=function(a){this.$1.app_version=a;return this};c.setBadgeCount=function(a){this.$1.badge_count=a;return this};c.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};c.setIsTab=function(a){this.$1.is_tab=a;return this};c.setRawRefTab=function(a){this.$1.raw_ref_tab=a;return this};c.setRawTab=function(a){this.$1.raw_tab=a;return this};c.setRefPage=function(a){this.$1.ref_page=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTargetProfileID=function(a){this.$1.target_profile_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={app_version:!0,badge_count:!0,client_timestamp:!0,is_tab:!0,raw_ref_tab:!0,raw_tab:!0,ref_page:!0,surface:!0,target_profile_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("normalizedEventTimestamp",["performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){if(a!=null)if((g||(g=b("performance")))&&(g||(g=b("performance"))).timing&&(g||(g=b("performance"))).timing.navigationStart&&a>(g||(g=b("performance"))).timing.navigationStart)return a-=(g||(g=b("performance"))).timing.navigationStart;else return a;else if((g||(g=b("performance"))).now)return(g||(g=b("performance"))).now();return null}e.exports=a}),null);
__d("reportData",["Banzai","SessionName","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g={retry:!0};function a(a,c){c===void 0&&(c={});c={ft:c.ft||{},gt:c.gt||{}};var d="-",e="r",f=b("ifRequired")("URI",function(a){return a.getRequestURI(!0,!0).getUnqualifiedURI().toString()},function(){return location.pathname+location.search+location.hash});a=[b("SessionName").getName(),Date.now(),"act",Date.now(),0,d,a,d,d,e,f,c,0,0,0,0];b("Banzai").post("eagle_eye_event",a,g)}e.exports=a}),null);
__d("JewelBase",["csx","invariant","Promise","Arbiter","ArbiterMixin","Bootloader","CrossWindowEventEmitter","CSS","DOM","Event","FriendingSurfaceVisitationTypedLogger","FunnelLogger","HTML","JewelBadgeCountRecorder","JewelCountSideLoader","JewelLogger","Keys","MercuryConfig","NotificationJewelFunnelLoggingConstants","Run","TabIsolation","TimeSlice","Toggler","TooltipData","firstClickTimestamp","killswitch","mixin","normalizedEventTimestamp","performance","performanceNow","promiseDone","reportData"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j,k=b("JewelLogger").logJewelCancel,l=b("JewelLogger").logJewelClick,m=b("JewelLogger").logJewelInitialize,n=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,o=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,p=new(b("CrossWindowEventEmitter"))("JewelBase"),q={};function r(){if((i||(i=b("performance")))==null?void 0:(i||(i=b("performance"))).getEntriesByName){var a=(i||(i=b("performance"))).getEntriesByName("first-paint","paint");if(a&&a[0])return b("normalizedEventTimestamp")(a[0].startTime)}return null}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this)||this;e.name=d.name;e.label=d.label;e.clickCount=0;e.root=c;e.badge=d.badge;e.countNew=0;e.initialCount=d.count||0;e.userCount=0;e.pageCount=0;e.escHandler=null;e.bootload_module=d.bootload_module;e.bootload_args=d.bootload_args;e.bootload_eager_modules=d.bootload_eager_modules;e.bootload_conf=d.bootload_conf;e.bootloading=null;e.togglerInstance=b("Toggler").getInstance(c).setSticky(!1);e.businessID=d.businessID;e.loggerRef=d.loggerRef;m({jewelName:e.name,badgeInitialCount:e.initialCount,timestamp:r()});b("JewelBadgeCountRecorder").onCountUpdated("jewel/initial-count",{jewel:e.name,count:e.initialCount});e.bootload_conf&&e.bootload_conf.eagerLoadingOnInteraction?e.$JewelBase3():b("Run").onAfterLoad(function(){return e.$JewelBase4()});e.bootload_conf&&e.bootload_conf.eagerLoadingOnInteraction&&e.$JewelBase5();d.keepOpenForSnowlift&&e.togglerInstance.setPrePageTransitionCallback(e.$JewelBase6.bind(babelHelpers.assertThisInitialized(e)));q[e.name]=babelHelpers.assertThisInitialized(e);e.$JewelBase7();c=e.getFlyout();c||h(0,5194);var f=new(b("TabIsolation"))(c);b("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES")?b("Toggler").createInstance(c).setSticky(!1):b("Toggler").createInstance(e.root).setSticky(!1);e.$JewelBase8();b("Toggler").listen("show",e.root,function(a){__p&&__p();var c=this;b("FunnelLogger").appendAction(o,n.OPEN_JEWEL);this.$JewelBase9();this.inform("user-open");this.hasNew()&&this.markSeen();this.reset();b("Arbiter").inform("layer_shown",{type:"Jewel",name:this.name});f.enable();this.setupEvents();this.$JewelBase10();this.bootload_conf&&this.bootload_conf.eagerLoadingOnInteraction?this.$JewelBase11():b("promiseDone")(this.$JewelBase4().then(function(){return c.inform("opened")}))}.bind(babelHelpers.assertThisInitialized(e)));b("Toggler").listen("hide",e.root,function(a,c){k(),b("FunnelLogger").appendAction(o,n.CLOSE_JEWEL),b("FunnelLogger").endFunnel(o),this.hasNew()&&this.markSeen(),this.reset(),this.inform("closed"),b("Arbiter").inform("layer_hidden",{type:"Jewel"}),f.disable(),this.removeEvents(),this.$JewelBase8()}.bind(babelHelpers.assertThisInitialized(e)));b("Arbiter").subscribe("jewel/count-updated",function(a,b){b.jewel==e.name&&e.update(b)});b("Arbiter").subscribe("jewel/hide",function(a,b){e.hide()});p.addListener("count-updated",function(a){a.jewel==e.name&&e.update(a)});return e}var d=c.prototype;d.getRoot=function(){return this.root};d.hide=function(){this.isOpen()&&b("Toggler").hide(this.root)};d.getFlyout=function(){this.$JewelBase1==null&&(this.$JewelBase1=b("DOM").find(this.root,".__tw"));return this.$JewelBase1};d.hasNew=function(){return b("CSS").hasClass(this.root,"hasNew")};d.isOpen=function(){return b("CSS").hasClass(this.root,"openToggler")};d.reset=function(){b("FunnelLogger").appendAction(o,n.CLEAR_BADGE_COUNT),b("CSS").removeClass(this.root,"hasNew")};d.setContent=function(a){var c=b("DOM").find(this.root,"ul.jewelItemList");b("DOM").setContent(c,b("HTML")(a))};d.update=function(a){__p&&__p();var c;a.animation&&this.badge.setAnimation&&this.badge.setAnimation(a.animation);this.countNew=a.count;this.userCount=(c=a.userCount)!=null?c:0;this.pageCount=(c=a.pageCount)!=null?c:0;typeof this.countNew==="number"&&this.countNew<0&&(this.countNew=0);this.badge.setLegacyContent(this.countNew);c=isNaN(this.countNew)||this.countNew>0;b("CSS").conditionClass(this.root,"hasNew",c);this.updatedOnce=!0;this.inform("updated",a,"state")};d.setupEvents=function(){var a=this;this.escHandler=b("Event").listen(document.documentElement,"keydown",function(c){c.keyCode===b("Keys").ESC&&a.hide()})};d.removeEvents=function(){this.escHandler&&(this.escHandler.remove(),this.escHandler=null)};d.markSeen=function(){var a=this,c=function(){b("Arbiter").inform("jewel/count-updated",{jewel:a.name,count:0},"state"),p.emitRemote("count-updated",{jewel:a.name,count:0}),a.inform("marked-seen")};b("TimeSlice").guard(c,"JewelOpen markSeen",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};d.getButton=function(){this.$JewelBase2==null&&(this.$JewelBase2=b("DOM").find(this.root,"a.jewelButton"));return this.$JewelBase2};d.$JewelBase8=function(){var a=this.getButton();b("TooltipData").set(a,this.label);a.setAttribute("data-tooltip-delay","500")};d.$JewelBase10=function(){b("TooltipData").remove(this.getButton())};d.$JewelBase6=function(a,b){!this.$JewelBase12(b.from)&&!this.$JewelBase12(b.to)&&(this.togglerInstance&&this.togglerInstance.hide())};d.$JewelBase12=function(a){return a&&Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")};d.$JewelBase9=function(){var a=this;this.clickCount++;var c=this.getButton(),d=(j||(j=b("performanceNow")))();this.clickCount===1&&(d=b("firstClickTimestamp").get(c));d&&(d=b("normalizedEventTimestamp")(d),d&&l({jewelName:this.name,timestamp:d,badgeCurrentCount:b("JewelBadgeCountRecorder").getCountAtTimestamp(this.name,d),badgeInitialCount:this.initialCount,clickCount:this.clickCount}));b("reportData")("jewel_click",{gt:babelHelpers["extends"]({count:this.countNew,initial:this.initialCount,jewel:this.name},this.businessID?{biz_id:this.businessID}:{},this.loggerRef?{ref:this.loggerRef}:{})});this.name==="requests"&&new(b("FriendingSurfaceVisitationTypedLogger"))().setSurface("jewel").setBadgeCount(this.countNew).log();this.name==="mercurymessages"&&b("MercuryConfig").PageThreadlistTabConfig&&b("Bootloader").loadModules(["CurrentUser","WebFunnelLogger","MessengerJewelNotificationWebFunnelAction"],function(c,d,e){new d("MessengerJewelNotificationWebFunnelDefinition").setAction(e.MESSENGER_JEWEL_CLICKED).setSessionKey(c.getAccountID()).addFunnelPayload("pageID",b("MercuryConfig").PageThreadlistTabConfig.pageID).addActionPayload("pageUnseenCount",a.pageCount).addActionPayload("userUnseenCount",a.userCount).markStart().log()},"JewelBase")};d.$JewelBase4=function(){var a=this;if(!this.bootload_module)return b("Promise").resolve();this.bootloading||(this.bootloading=new(b("Promise"))(function(b,c){a.bootload_module.load().then(function(c){new c(a,a.bootload_args),b()})["catch"](c)}));return this.bootloading};d.$JewelBase3=function(){var a=this;this.bootload_eager_modules?this.bootload_eager_modules.loadModules(this):b("Run").onAfterLoad(function(){return a.$JewelBase4()})};d.$JewelBase5=function(){this.bootload_eager_modules&&this.bootload_eager_modules.mount(this)};d.$JewelBase11=function(){var a=this;this.bootload_eager_modules?this.bootload_eager_modules.load(this):b("promiseDone")(this.$JewelBase4().then(function(){return a.inform("opened")}))};d.$JewelBase7=function(){if(this.bootloading)return;var a=b("JewelCountSideLoader").getOverwritesForJewel(this);if(!a)return;this.updateCountAndArgs(a.args,a.count)};d.updateCountAndArgs=function(a,c){for(var d in a)a[d]&&(this.bootload_args[d]=a[d]);c&&b("Arbiter").inform("jewel/count-updated",{jewel:this.name,count:c},"state")};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("BlueBarCreateMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEntrypointStyle=function(a){this.$1.entrypoint_style=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setHasUserCreatedPriorToStartDate=function(a){this.$1.has_user_created_prior_to_start_date=a;return this};c.setMenuElement=function(a){this.$1.menu_element=a;return this};c.setMenuStyle=function(a){this.$1.menu_style=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={entrypoint_style:!0,event:!0,has_user_created_prior_to_start_date:!0,menu_element:!0,menu_style:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("BlueBarCreateMenuLogger",["requireDeferred","BlueBarCreateMenuTypedLogger","CurrentUser"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("WebFunnelLogger");a={initModal:function(a,c,d,e){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log();for(var f=0;f<a.length;f++)a[f]&&(function(){var g=a[f],h=g.name;g=g.element;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("impression").log();g.addEventListener("click",function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent("click").log()})})()},initDropdown:function(a,c,d){__p&&__p();a.onShow=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){a=a._data.id;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(a).setMenuStyle(c).setEntrypointStyle(d).setEvent("impression").log();a==="creation_hub_create_group"&&h("[impression][top nav][create menu][group]")}})},a.forEachItem(function(a){if(a._data.ctor.name!=null&&!a._data.ctor.name.includes("MenuStaticItem")){var e=a._data.id;a._onclickHandler=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(e).setMenuStyle(c).setEntrypointStyle(d).setEvent("click").log(),e==="creation_hub_create_group"&&h("[click][top nav][create menu][group]")}}})},logEntrypointImpression:function(a,c){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement("creation_hub_entrypoint").setMenuStyle(a).setEntrypointStyle(c).setEvent("impression").log()}};function h(a){g.onReady(function(c){return new c("GroupsBlueFeedWebFunnelDefinition").setSessionKey(b("CurrentUser").getID()).setAction(a).log()})}e.exports=a}),null);