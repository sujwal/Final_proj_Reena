if (self.CavalryLogger) { CavalryLogger.start_js(["e+Wz6"]); }

__d("NotificationCounter",["Arbiter","CrossWindowEventEmitter","DocumentTitle","JSLogger","MessengerEnvironment"],(function(a,b,c,d,e,f){__p&&__p();var g=new(b("CrossWindowEventEmitter"))("JewelBase"),h={messages:0,notifications:0,requests:0};a={init:function(){var a=this;b("Arbiter").subscribe("update_title",this._handleUpdate.bind(this));b("Arbiter").subscribe("jewel/count-updated",this._handleCountUpdate.bind(this));g.addListener("count-updated",function(b){a._handleCountUpdate("",b)})},getCount:function(){__p&&__p();var a=0;for(var c in h){var d=Number(h[c]);if(typeof h[c]==="string"&&isNaN(d))return h[c];if(isNaN(d)||d<0){b("JSLogger").create("jewels").error("bad_count",{jewel:c,count:h[c]});continue}a+=d}return a},updateTitle:function(){if(b("MessengerEnvironment").messengerui)return;var a=this.getCount();b("DocumentTitle").badge(a)},_handleCountUpdate:function(a,b){h[b.jewel]=b.count,this.updateTitle()},_handleUpdate:function(a,b){this.updateTitle()}};e.exports=a}),null);
__d("XWorkHubController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/hub/{?tab}/{?alert_id}/",{ref:{type:"String"},tab:{type:"String"},selected_key:{type:"String",defaultValue:"app_401904056828201"},alert_id:{type:"String"},mini:{type:"Bool",defaultValue:!1}})}),null);
__d("NotificationJewelController",["Arbiter","Bootloader","Event","EventProfiler","FunnelLogger","IndeterminateNotificationCounter","NotificationConstants","NotificationCounter","NotificationJewelFunnelLoggingConstants","NotificationSeenState","NotificationStore","NotificationUpdates","XWorkHubController","clearTimeout","createObjectFrom","curry","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType,h=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,i=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,j=0,k=!1,l=null;function m(a){var c=b("NotificationSeenState").getUnseenCount();b("Arbiter").inform("jewel/count-updated",{jewel:a,count:c,animation:"none"},"state")}a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this,e=c.badgeAnimationData,f=c.classification,k=c.endPoint,n=c.isBizsite,o=c.list;c=c.unseenNotifs;k&&b("NotificationStore").registerEndpoint({endpointControllerName:k,classification:f});n?b("IndeterminateNotificationCounter").init(c.length):b("NotificationCounter").init();var p=b("Event").listen(a.getRoot(),"mouseover",function(){b("FunnelLogger").startFunnel(i),p&&p.remove(),p=null,b("FunnelLogger").appendAction(i,h.MOUSE_OVER_ON_JEWEL),d.eagerRender(o)}),q=null;b("Event").listen(a.getRoot(),"mouseover",function(){q=b("setTimeoutAcrossTransitions")(function(){b("Bootloader").loadModules(["QE2Logger"],function(a){a.logExposureForUser("www_jewel_tooltip_experiment")},"NotificationJewelController"),q=null},500)});b("Event").listen(a.getRoot(),"mouseout",function(){q&&b("clearTimeout")(q)});b("gkx")("678265")&&b("Event").listen(a.getButton(),"click",function(a){if(a.metaKey||a.ctrlKey){a=b("XWorkHubController").getURIBuilder().setString("ref","jewel").setString("tab","all").getURI();window.open(a,"notification_hub_tab_identifier")}});var r=!1,s=a.subscribe("opened",function(){r||(r=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstNotificationJewelOpen")),l&&l(),s&&s.unsubscribe(),s=null,o.open()}),t=o.pause.bind(o);a.subscribe("opened",function(){window.setTimeout(t,0),m(a.name),b("Bootloader").loadModules(["NotificationVPVs"],function(a){return a.clearImpressions()},"NotificationJewelController"),b("Arbiter").inform("notificationJewel/opened")});a.subscribe("closed",function(){o.unpause(),m(a.name),b("Arbiter").inform("notificationJewel/closed"),o.setFlyoutOpenState(!1)});a.subscribe("user-open",function(a,b){o.setFlyoutOpenState(!0)});a.isOpen()&&o.setFlyoutOpenState(!0);b("NotificationUpdates").subscribe("seen-state-updated",b("curry")(m,a.name));e&&(e.logWithQEUniverse&&b("Bootloader").loadModules(["QE2Logger"],function(a){return a.logExposureForUser(e.logWithQEUniverse)},"NotificationJewelController"),e.injectWithAnimation&&b("Bootloader").loadModules(["RelationshipDelightsBadge"],function(b){return b.inject(a,e.injectWithAnimation)},"NotificationJewelController"));b("NotificationUpdates").handleUpdate(g.INITIAL_LOAD,{seenState:b("createObjectFrom")(c,j)});m(a.name);b("Arbiter").inform("jewel_mounted")}var c=a.prototype;c.eagerRender=function(a){k||(k=!0,l=b("EventProfiler").notifyRunningEagerInteraction(["Notifications_Jewel_Button"],"click"),a.open())};return a}();e.exports=a}),null);
__d("NotificationBucketUtils",["JSResource"],(function(a,b,c,d,e,f){"use strict";a={getCustomModuleForType:function(a){switch(a){case"TICKER":return b("JSResource")("NotificationBucketTicker.react").__setRef("NotificationBucketUtils");default:return null}}};e.exports=a}),null);
__d("NotificationAsyncWrapper",["NotificationListConfig","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationListConfig").reactFiberAsyncNotifications?b("React").unstable_ConcurrentMode:b("React").Fragment}),null);
__d("NotificationJewelListBucketHeader.react",["cx","FDSText.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a.isNotifsBiz===!0?b("React").jsx("div",{className:"_7ghi",id:"notif_jewel_bucket_header",children:b("React").jsx(b("FDSText.react"),{size:"body3",weight:"bold",children:a.title})}):b("React").jsx("div",{className:"_fyy",children:a.title.toUpperCase()})}e.exports=a}),null);
__d("NotificationBucketGeneric.react",["cx","NotificationJewelListBucketHeader.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.ids,d=a.isNotifsBiz,e=a.isSingleBucketInList,f=a.listRenderer,g=a.startIndex;a=a.title;if(c.length===0)return null;f=f(c,g);return b("React").jsxs("div",{className:"_32hm",children:[a&&!e?b("React").jsx(b("NotificationJewelListBucketHeader.react"),{isNotifsBiz:d,title:a}):null,b("React").jsx("ul",{children:f})]})};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBucket.react",["cx","BootloadedComponent.react","NotificationBucketGeneric.react","NotificationBucketUtils","NotificationJewelListBucketHeader.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){var a=this.props.bucket,c=a.bucketType;a=a.title;return b("React").jsxs("div",{children:[b("React").jsx(b("NotificationJewelListBucketHeader.react"),{title:a,bucketType:c}),b("React").jsx(b("XUISpinner.react"),{className:"_1e00"})]})};d.render=function(){var a=this.props,c=a.bucket,d=a.listRenderer;a=a.startIndex;var e=c.bucketType;e=b("NotificationBucketUtils").getCustomModuleForType(e);return!e?b("React").jsx(b("NotificationBucketGeneric.react"),babelHelpers["extends"]({},c,{isNotifsBiz:this.props.isNotifsBiz,isSingleBucketInList:this.props.isSingleBucketInList,listRenderer:d,startIndex:a})):b("React").jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:e,bootloadPlaceholder:this.$1()},c))};return c}(b("React").Component);e.exports=a}),null);
__d("WebNotificationsBottomCollisionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={vc:!0};e.exports=a}),null);
__d("NotificationJewelList.react",["cx","fbt","Animation","ErrorBoundary.react","Event","FunnelLogger","JewelLogger","LogicalGrid.react","NotificationBucket.react","NotificationJewelFunnelLoggingConstants","NotificationListConfig","NotificationListItem.react","NotificationListPropTypes","NotificationListRetryFetchButton.react","NotificationVPVs","React","ReactDOM","ScrollableArea.react","SubscriptionsHandler","TimeSlice","TrackingNodes","Vector","WebNotificationsBottomCollisionsTypedLogger","XUISpinner.react","clearTimeout","debounce","getObjectValues","isEmpty","performanceNowNoFallback","setTimeoutAcrossTransitions","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,k=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME;a=b("NotificationListConfig").numStoriesFromEndBeforeAFetchIsTriggered;var l=160,m=530,n=61,o=Math.ceil(n*a),p=430,q;function r(a){q!=a&&(new(b("WebNotificationsBottomCollisionsTypedLogger"))().log(),q=a)}c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={lastMeasuredHeight:null},d.$2=[],d.$6=new(b("SubscriptionsHandler"))(),d.$7=!1,d.$10=function(){__p&&__p();if(!d.$3||!d.$5)return;var a=b("ReactDOM").findDOMNode(d.$3);if(!a)return;var c=b("ReactDOM").findDOMNode(d.$5);if(!c)return;var e=b("NotificationVPVs").getValidatedRectangle(c);if(d.props.afterScroll){var f=function(){d.props.afterScroll(d.$8(),a,e)};c=b("Vector").getElementDimensions(c).y;var g=d.$5&&d.$5.getArea();g&&g.getContentHeight()>0&&d.$7===!1&&b("performanceNowNoFallback")&&b("getObjectValues")(d.props.notifs).length>0&&(d.$7=!0,b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_population_initial",timestamp:b("performanceNowNoFallback")()}));g&&c>0&&g.getContentHeight()>=c?(b("performanceNowNoFallback")&&b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_populated",timestamp:b("performanceNowNoFallback")()}),b("TimeSlice").guard(f,"NotificationJewelList afterScrollCallback",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()):f()}},d.$16=function(a,b){b=b||0;return a.map(function(a,c){a=d.props.notifs[a];if(!a)return null;c=c+b;return d.$17(a,c,c)})},d.$18=function(){d.setState(function(a){return babelHelpers["extends"]({},a,{lastMeasuredHeight:d.$9()})})},d.$19=function(){var a=b("debounce")(d.$18);d.$6.addSubscriptions(a);return a}(),d.$22=function(){d.props.onResetRetryCount&&d.props.onResetRetryCount()},d.$23=function(){b("FunnelLogger").appendAction(k,j.SCROLL_TO_FETCH),d.$10()},d.$24=b("throttle").acrossTransitionsWithBlocking(d.$23),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$8=function(){__p&&__p();if(!this.$4||!this.$5)return!1;var a=b("ReactDOM").findDOMNode(this.$5);if(!a)return!1;var c=b("ReactDOM").findDOMNode(this.$4);if(!c)return!1;var d=b("Vector").getElementDimensions(a).y;if(d===0)return!1;a=b("Vector").getElementPosition(a).y+d;d=b("Vector").getElementPosition(c).y;c=this.$5&&this.$5.getArea();c&&c.getScrollTop()>0&&d<a&&r(b("getObjectValues")(this.props.notifs).length);return d-o<a};d.$9=function(){var a=b("Vector").getViewportDimensions().y;a=Math.min(this.props.maxHeight||m,a-l);return a};d.$11=function(a){return this.$2.slice(0,a).reduce(function(a,b){return a+b},0)};d.$12=function(a){var b=0;a.forEach(function(a){a.ids&&a.ids.length!==0&&b++});return b<=1};d.$13=function(a){this.$2=a?a.map(function(a){return a.ids.length}):[]};d.$14=function(){var a=this,b=this.props.buckets;if(!b)return null;var c=this.$12(b);return b.map(function(b,d){return a.$15(b,d,c)})};d.$15=function(a,c,d){var e=this.$11(c);if(a.ids&&a.ids.length){var f=this.props.notifs,g=a.ids.filter(function(a){return!!f[a]});if(g.length===0)return null}return b("React").jsx("li",{children:b("React").jsx(b("NotificationBucket.react"),{bucket:a,isNotifsBiz:this.props.isNotifsBiz,isSingleBucketInList:d,listRenderer:this.$16,startIndex:e})},c)};d.$17=function(a,c,d){var e=a.alert_id;return b("React").jsx(b("ErrorBoundary.react"),{children:b("React").jsx(b("NotificationListItem.react"),{isNotifsBiz:this.props.isNotifsBiz,isNotifsIntl:this.props.isNotifsIntl,isRead:this.props.readState[e],onChevronHide:this.props.onChevronHide,onChevronShow:this.props.onChevronShow,onClick:this.props.onClick,onRead:this.props.onRead,parent:this,paused:this.props.paused,row:c,rowIndex:d,shortenTimestamp:this.props.shortenTimestamp,sourceView:this.props.sourceView,target:this.props.target,visible:!this.props.hiddenState[e],notification:a})},e)};d.$20=function(a){this.props.onNumNotificationsViewableChange&&this.props.onNumNotificationsViewableChange(a/n)};d.UNSAFE_componentWillMount=function(){this.$13(this.props.buckets),this.$6.addSubscriptions(b("Event").listen(window,"resize",this.$19)),this.$18()};d.componentDidMount=function(){var a=this.state.lastMeasuredHeight;a!=null&&this.$20(a);b("performanceNowNoFallback")&&b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_did_mount",timestamp:b("performanceNowNoFallback")()})};d.UNSAFE_componentWillReceiveProps=function(a){if(a.buckets===this.props.buckets)return;this.$13(a.buckets)};d.componentDidUpdate=function(a,c){__p&&__p();if(this.props.paused&&!a.paused&&(this.props.shouldScroll&&this.$5)){a=this.$5.getArea();a&&a.scrollToTop(!1)}this.props.retryLimitReached&&b("JewelLogger").logJewelFail();a=this.state.lastMeasuredHeight;if(a!=null&&a!==c.lastMeasuredHeight){this.$20(a);this.$1&&(this.$1.stop(),delete this.$1);if(!(i||(i=b("isEmpty")))(this.props.notifs)){c=b("ReactDOM").findDOMNode(this.$5);c&&(this.$1=new(b("Animation"))(c).to("height",a+"px").duration(100).go())}}var d=b("setTimeoutAcrossTransitions")(this.$10,0);this.$6.addSubscriptions({remove:function(){b("clearTimeout")(d)}})};d.componentWillUnmount=function(){this.$6.release(),this.$1&&(this.$1.stop(),delete this.$1)};d.$21=function(a,b){return b.indexOf(a)};d.$25=function(){var a=this;if(this.props.buckets&&this.props.buckets.length)return this.$14();var c=b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(a){return a.alert_id});return b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(b,d){var e=b.alert_id;e=a.$21(e,c);return a.$17(b,e,d)})};d.render=function(){__p&&__p();var a=this,c=this.props.notifs,d=null,e=null,f=p,g=null,j=b("React").jsx("ul",{"data-ft":b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.NOTIFICATION_JEWEL),"data-gt":this.props.tracking,"data-testid":"react_notif_list"});if(!(i||(i=b("isEmpty")))(c))d=b("React").jsx(b("LogicalGrid.react"),{ref:function(b){return a.$3=b},component:j,children:this.$25()}),e=this.state.lastMeasuredHeight;else if(!this.props.canFetchMore){c=this.props.isNotifsBiz&&this.props.emptyState?this.props.emptyState:h._("No new notifications");d=b("React").jsx("div",{className:"_572e","data-testid":"react_notif_list",children:c})}this.props.canFetchMore&&(this.props.retryLimitReached&&this.props.onResetRetryCount!=null?g=b("React").jsx(b("NotificationListRetryFetchButton.react"),{handleRetryClick:this.$22}):g=b("React").jsx(b("XUISpinner.react"),{ref:function(b){return a.$4=b},paused:!this.props.currentlyFetching,className:"jewelLoading"}));j=null;if(this.props.upsell){c=this.props.upsell.module;j=b("React").jsx(c,babelHelpers["extends"]({},this.props.upsell.props))}c="_50-t"+(this.props.showingChevron?" _2iy1":"");f=b("React").jsxs(b("ScrollableArea.react"),{ref:function(b){return a.$5=b},width:f,fade:!0,persistent:!0,onScroll:this.$24,children:[d,g]});return b("React").jsxs("div",{style:e?{height:e+"px"}:{},className:c,children:[f,j]})};return c}(b("React").Component);c.defaultProps={retryLimitExceeded:!1};c.propTypes=b("NotificationListPropTypes");e.exports=c}),null);
__d("ChatGroupLeaveConversationDialogBootloader",["Bootloader","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={show:function(a,c){b("Bootloader").loadModules(["MessengerDialogs.bs","MessengerState.bs","ChatGroupLeaveConversationDialog.react","MercuryIgnoredBlockedParticipants.bs","MessengerAdminGroupUtils"],function(d,e,f,g,h){e.compute(a,function(i){i=i.blocked_ids;var j=e.getThreadMetaNow(a,c),k=g.isPresentInGroupThread(a,i,j),l=(j==null?void 0:j.admins)&&(j==null?void 0:j.admins[a])!==void 0;d.showDialog(function(){return b("React").jsx(f,{isAdmin:l,isShown:!0,isWorkSyncedChat:h.isWorkSyncedGroupChat(j),onHide:function(){return d.removeDialog()},threadID:c,viewer:a,showCanAddBack:k})})})},"ChatGroupLeaveConversationDialogBootloader")}};e.exports=a}),null);
__d("FantaDropdownMenuLeaveConversation",["ix","cx","fbt","Bootloader","ChatGroupLeaveConversationDialogBootloader","Dialog","FantaTabActions","Image.react","MercuryMessageObject","MercuryMessageActions","MessengerAdminGroupUtils","MessengerState.bs","React","asset","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("MercuryMessageObject").get(),k=b("MercuryMessageActions").get();function l(a){a=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=a?i._("Leave Chat and Group"):i._("Leave group");return b("React").jsxs("div",{className:"_6pdg","data-testid":"fanta_dropdown_menu_leave_conversation",children:[b("React").jsx(b("Image.react"),{className:"_6ng3",src:g("637999")}),b("React").jsx("span",{className:"_6ng4",children:a})]})}function m(a,c,d,e){return function(){b("qex")._("922586")===!0?b("ChatGroupLeaveConversationDialogBootloader").show(d,c):n(a,c,d),p(e)}}function n(a,c,d){var e=[];e.push({name:"unsubscribe",label:i._("Leave Conversation"),handler:function(){return o(c,d)}});e.push(b("Dialog").CANCEL);var f,g=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=(a==null?void 0:a.admins)&&(a==null?void 0:a.admins[d])!==void 0;g&&a?f=i._("Leaving this group will remove you as an owner and allow other members to manage the chat thread. You will no longer be able to send and receive messages. You will also be removed from the group."):g?f=i._("You will stop receiving messages from this conversation and people will see that you left. You will also be removed from the group."):a?f=i._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send and receive messages."):f=i._("You will stop receiving messages from this conversation and people will see that you left.");a=g?i._("Leave Group and Chat?"):i._("Leave Conversation?");new(b("Dialog"))().setTitle(a).setBody(f).setButtons(e).show()}function o(a,c){if(!b("MessengerState.bs").isEmptyLocalThread(c,a)){c=j.constructLogMessageObject("source:chat:web",a,"log:unsubscribe",{removed_participants:[c]});k.send(c)}b("FantaTabActions").closeTab(a);return!0}function p(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.LEAVE_CONVERSATION,a)},"FantaDropdownMenuLeaveConversation")}function a(a,c){var d=[];d.push({name:"unsubscribe",label:i._("Leave Conversation"),handler:function(){return o(a,c)}});d.push(b("Dialog").CANCEL);var e=i._("You will stop receiving messages from this conversation and people will see that you left."),f=i._("Leave Conversation?");new(b("Dialog"))().setTitle(f).setBody(e).setButtons(d).show()}function c(a,b,c,d,e){return a===!0?{type:"item",label:l(b),onClick:m(b,c,d,e)}:null}e.exports={getMenuItem:c,showLeaveDialog:a}}),null);
__d("WebMessengerConfirmBlockDialog",["fbt","React","SimpleXUIDialog","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){"use strict";a={show:function(a){a=a&&a.length>0?g._("You have blocked {name}",[g._param("name",a)]):g._("You have blocked the sender");var c=g._("You can access messages you've blocked by going to the Filtered Messages list."),d=b("React").jsx("div",{children:b("React").jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("OK"),use:"confirm"})});b("SimpleXUIDialog").showEx(c,a,d)}};e.exports=a}),null);
__d("WebMessengerDeclineMRDialog",["fbt","FantaDropdownMenuLeaveConversation","MessengerParticipants.bs","React","SimpleXUIDialog","MercuryThreadActions","XUIDialogButton.react","XUIDialogCancelButton.react","MercuryIDs","MessengerMessageRequestsTypedLogger","WebMessengerConfirmBlockDialog","FantaTabActions","MessagingTag","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MercuryThreadActions").get();a={show:function(a,c,d,e){__p&&__p();var f=function(a){b("WebMessengerConfirmBlockDialog").show(a);a=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,b("CurrentUser").getID());b("FantaTabActions").closeTab(c);h.changeFolder(c,b("MessagingTag").OTHER);new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_block_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(a).setEntryPoint(null).log()};a=e?b("React").jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("Leave Group"),use:"confirm",onClick:function(a){b("FantaDropdownMenuLeaveConversation").showLeaveDialog(c,b("CurrentUser").getID())}}):b("React").jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("Block"),use:"confirm",onClick:function(){h.blockMessages(c,"message_request_decline",f)}});var i=b("CurrentUser").isWorkUser(),j=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromFromThreadID(c));j=j==null?void 0:j.short_name;var k=!e&&!i&&j?g._("Don't want to hear from {name}?",[g._param("name",j)]):g._("Decline Conversation");e?e=g._("Would you like to leave the group? Group members will see that you've left."):j?e=i?g._("Message request will be declined. Would you like to block {name} on Workplace Chat or delete these messages?",[g._param("name",j)]):g._("You can permanently delete the conversation, block {name} from sending you messages or tell us if something's wrong. We won't tell {name} you've taken these actions.",[g._param("name",j)]):e=g._({"Workplace chat":"Message request will be declined. Would you like to block this person on Workplace chat or delete these messages?","Messenger":"Message request will be declined. Would you like to block this person on Messenger or delete these messages?"},[g._enum(i?"Workplace chat":"Messenger",{"Workplace chat":"Workplace chat",Messenger:"Messenger"})]);j=b("CurrentUser").getID();var l=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,j);i=function(a){a==="hide"&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(l).setEntryPoint(null).log()};j=b("React").jsxs("div",{children:[b("React").jsx(b("XUIDialogCancelButton.react"),{}),b("React").jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("Delete"),use:"confirm",onClick:function(){h["delete"](c),d&&d(),new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(l).setEntryPoint(null).log()}}),a]});b("SimpleXUIDialog").showEx(e,k,j,i,{})}};e.exports=a}),null);
__d("XUIButtonReact.bs",["Utils.bs","ReasonReact.bs","XUIButton.react","bs_js_null_undefined"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){if(a!==void 0)switch(a){case 0:return"default";case 1:return"special";case 2:return"confirm"}}function h(a){if(a!==void 0)switch(a){case 0:return"small";case 1:return"medium";case 2:return"large";case 3:return"xlarge";case 4:return"xxlarge"}}function i(a){if(a!==void 0)if(a)return"dark";else return"light"}function a(a,c,d,e,f,j,k,l,m,n,o,p){var q;return b("ReasonReact.bs").wrapJsForReason(b("XUIButton.react"),{className:(q=b("bs_js_null_undefined")).fromOption(a),onClick:q.fromOption(c),label:q.fromOption(d),use:q.fromOption(g(e)),size:q.fromOption(h(f)),borderShade:q.fromOption(i(j)),suppressed:q.fromOption(k),href:q.fromOption(l),target:q.fromOption(m),disabled:b("Utils.bs").optionBoolToBool(n),image:q.fromOption(o)},p)}f.stringOfUse=g;f.stringOfSize=h;f.stringOfBorderShade=i;f.make=a}),null);