if (self.CavalryLogger) { CavalryLogger.start_js(["eHhWW"]); }

__d("NotificationURI",["BusinessURI.brands","URI","VideoPermalinkURI","isDevelopersURI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g;a={localize:function(a){__p&&__p();try{a=b("BusinessURI.brands")(a)}catch(b){return a.toString()}var c=a.getSubdomain();c=a.getUnqualifiedURI().getQualifiedURI().setSubdomain(c);if(b("isDevelopersURI")(a)){a=c.getDomain().split(".");a.length>=2&&(a.splice(-2,1,"facebook")[0]==="workplace"&&c.setDomain(a.join(".")))}return c.toString()},snowliftable:function(a){if(!a)return!1;a=new(g||(g=b("URI")))(a);var c=a.getQueryData();return b("isFacebookURI")(a)&&(b("VideoPermalinkURI").isValid(a)||"fbid"in c)},isVaultSetURI:function(a){return this._areEquals(a,"/ajax/vault/sharer_preview.php")},isAlbumDraftRecoveryDialogURI:function(a){return this._areEquals(a,"/ajax/photos/upload/overlay/")},isQuicksilverURI:function(a){return this._areEquals(a,"/games/quicksilver/spotlight/")},isDirectURI:function(a){return this._startsWith(a,"/direct/")},isIGAccountCreationURI:function(a){return this._areEquals(a,"/ads/growth/aymt/instagram/account-creation-dialog/")},_areEquals:function(a,c){if(!a)return!1;a=new(g||(g=b("URI")))(a);return b("isFacebookURI")(a)&&a.getPath()===c},_startsWith:function(a,c){if(!a)return!1;a=new(g||(g=b("URI")))(a);return b("isFacebookURI")(a)&&a.getPath().startsWith(c)}};e.exports=a}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").jsx(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").jsx(b("TextWithEmoticons.react"),{text:a}));return b("React").jsxs("span",{className:b("joinClasses")("fwb","_6btd"),children:[a,d]})}e.exports=a}),null);
__d("notificationListRendererIsStoryOnlyLiveVideoNotification",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.renderer_data;return a==null?!1:a.__typename==="LiveVideoNotificationRendererData"&&!!a.bucket_data}e.exports=a}),null);
__d("VideoChainingCaller",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_NOTIFICATION:"www_notification",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",LIVE_INDEXER_FROM_NEWSFEED:"live_indexer_from_newsfeed",NN_INDEXER_FROM_NEWSFEED:"nn_indexer_from_newsfeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_PAGE_HOME_HERO:"channel_view_from_page_home_hero",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT:"channel_view_from_video_page_spotlight",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST:"channel_view_from_video_page_video_list",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB:"channel_view_from_video_page_video_tab",CHANNEL_VIEW_FROM_CHANNEL_TAB:"channel_view_from_channel_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",SOCIAL_PLAYER_UP_NEXT:"social_player_up_next",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_HERO:"video_home_hero",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",IS_LIVE_VIDEO_CHAINING_OTHERS:"is_live_video_chaining_others",VIDEO_CREATOR_CHAINING:"video_creator_chaining",TAHOE:"tahoe",LIVING_ROOM:"living_room",SHOWS_COVER_TRAILER:"shows_cover_trailer",SHOWS_EPISODES_TAB:"shows_episodes_tab",SHOWS_PLAYLISTS_TAB:"shows_playlists_tab",SHOWS_HOME_TAB:"shows_home_tab",SHOWS_MORE_VIDEOS_TAB:"shows_more_videos_tab",SHOW_EPISODE_FEED_RECOMMENDATIONS:"show_episode_feed_recommendations",PARENT_PAGE_TIMELINE:"parent_page_timeline",WATCH_WATCHLIST_TAB:"watch_watchlist_tab",WATCH_FEED_TAB:"watch_feed_tab",WATCH_INJECTION:"watch_injection",WATCH_TOPIC_FEED:"watch_topic_feed",WATCH_TOPIC_CHANNEL_FEED:"watch_topic_channel_feed",WATCH_SUBTOPIC_CHANNEL_FEED:"watch_subtopic_channel_feed",WATCH_SECTION_SEE_ALL:"watch_section_see_all",SOCIAL_PLAYER_FROM_VIDEO_HOME:"social_player_from_video_home",WATCH_CUSTOM_ADS:"watch_custom_ads",WATCH_EMBEDDED_ENDSCREEN:"watch_embedded_endscreen",WNS:"wns",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",VOYAGER:"voyager",GAMES_VIDEO_CHANNEL:"games_video_channel",LOL_VIDEO_FEED:"lol_video_feed",AVD_VIDEO:"avd",LIVE_CHAINING:"live_chaining",LIVING_ROOM_CHAINING:"living_room_chaining",FBLITE_TRENDING_VIDEO:"fblite_trending_video",PORTAL:"portal",LASSO:"lasso",WATCH_SOCIAL:"watch_social",MESSENGER:"messenger",PREMIUM_MUSIC_VIDEO:"premium_music_video",CHANNEL_VIEW_FROM_NEWSFEED_RELATED:"channel_view_from_newsfeed_related",CHANNEL_VIEW_FROM_VIDEO_HOME_RELATED:"channel_view_from_video_home_related",FEED_SHORT_VIDEO:"feed_short_video",PHOTO_CHAINING:"photo_chaining",YOUTUBE_SHARE:"youtube_share",TEST:"test",UNKNOWN:"unknown"})}),null);
__d("XLiveVideoLoadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/video/load/",{video_id:{type:"FBID",required:!0}})}),null);
__d("notificationListRendererOpenNotification",["AsyncRequest","Bootloader","NotificationURI","PageTransitions","URI","VideoChainingCaller","XLiveVideoLoadController","notificationListRendererIsStoryOnlyLiveVideoNotification"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a,c){__p&&__p();var d=c.renderer_data;if(d==null)return;if(!b("notificationListRendererIsStoryOnlyLiveVideoNotification")(c)&&(a.metaKey||a.ctrlKey||a.button===1))return;if(d.__typename==="LiveVideoNotificationRendererData"){a.preventDefault();d=b("XLiveVideoLoadController").getURIBuilder().setFBID("video_id",d.video_id).getURI();d=new(b("AsyncRequest"))(d).setHandler(function(d){d.payload?h(a,c):b("PageTransitions").go(c.url)});d.send()}}function h(a,b){var c=b.renderer_data;if(c==null)return;c.bucket_data?i(a,c):c.can_render_in_tahoe&&j(a,c,b)}function i(a,c){b("Bootloader").loadModules(["FBStoriesLiveNotificationHandler"],function(a){a.renderLiveStory(c)},"notificationListRendererOpenNotification")}function j(a,c,d){b("Bootloader").loadModules(["TahoeController"],function(a){var e=b("NotificationURI").localize(new(g||(g=b("URI")))(d.url)),f=c.video_channel_caller;a.openFromVideoLink(new g(e),{channelID:c.video_channel_id,caller:f?(a=b("VideoChainingCaller"))!=null?a[f]:a:null})},"notificationListRendererOpenNotification")}e.exports=a}),null);
__d("XPymkFunnelLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pymk/funnel_logging/",{event_ts:{type:"Int",required:!0},query_id:{type:"Int"},candidate_id:{type:"Int"},signature:{type:"Int"},loc:{type:"String",required:!0},ref:{type:"String"},action:{type:"Enum",required:!0,enumType:1}})}),null);
__d("PymkFunnelLogger",["AsyncRequest","DOMQuery","XPymkFunnelLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupListeners:function(a,b,c,d,e){this._setupForSingleElement(a,b,c,"add"),this._setupForSingleElement(a,b,d,"click"),this._setupForSingleElement(a,b,e,"click")},logImpression:function(a,b,c){this._logEvent(a,"impression",b,c)},logXOut:function(a,b,c){this._logEvent(a,"hide",b,c)},_logEvent:function(a,c,d,e){a=b("XPymkFunnelLoggingController").getURIBuilder().setInt("candidate_id",a).setInt("signature",d).setInt("event_ts",Math.floor(Date.now()/1e3)).setEnum("action",c).setString("loc",e).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForSingleElement:function(a,c,d,e){Event.listen(d,"click",function(d){d=a.getAttribute("data-signature");var f=b("DOMQuery").find(a,"input.friendBrowserID");f=parseInt(f.value,10);this._logEvent(f,e,d,c)}.bind(this))}};e.exports=a}),null);
__d("XFriendRequestIHEventLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/requests/interaction_history_logging/",{target_id:{type:"FBID",required:!0},log_event:{type:"String",required:!0}})}),null);
__d("FriendRequestIHEventLogger",["AsyncRequest","Event","XFriendRequestIHEventLoggingController"],(function(a,b,c,d,e,f){__p&&__p();a={setupJewelListeners:function(a,b,c){this._setupForJewelSingleElement(a,b,"click"),c&&this._setupForJewelSingleElement(a,c,"click")},logImpression:function(a){this._logEvent(a,"impression")},_logEvent:function(a,c){if(isNaN(a))return;a=b("XFriendRequestIHEventLoggingController").getURIBuilder().setFBID("target_id",a).setString("log_event",c).getURI();new(b("AsyncRequest"))(a).setMethod("POST").send()},_setupForJewelSingleElement:function(a,c,d){b("Event").listen(c,"click",function(b){b=a.getAttribute("id");if(b==null)return;b=b.substring(0,b.length-6);this._logEvent(b,d)}.bind(this))}};e.exports=a}),null);
__d("WebFriendingRequests",["Arbiter","DOM","Event","FriendRequestIHEventLogger","MarauderLogger","PymkFunnelLogger","Vector","debounceCore"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c){__p&&__p();this._pymkBox=a;this._lastPymkSeen=-1;this._recordPYMKImpression();b("Event").listen(window,"scroll",b("debounceCore")(this._recordPYMKImpression.bind(this),100));b("Event").listen(window,"resize",b("debounceCore")(this._recordPYMKImpression.bind(this),100));b("Arbiter").subscribe("pymk-x-out",this._handleXout.bind(this));this._requestsBox=c;if(!this._requestsBox)return;this._lastRequestSeen=-1;this._recordFriendRequestImpression();b("Event").listen(window,"scroll",b("debounceCore")(this._recordFriendRequestImpression.bind(this),100));b("Event").listen(window,"resize",b("debounceCore")(this._recordFriendRequestImpression.bind(this),100))},_recordPYMKImpression:function(){__p&&__p();var a=b("DOM").scry(this._pymkBox,"li.friendBrowserListUnit"),c=b("Vector").getViewportDimensions().y,d=a.length-1;while(d>this._lastPymkSeen){var e=b("Vector").getElementPosition(a[d],"viewport").y;if(e>0&&e+b("Vector").getElementDimensions(a[d]).y<=c)break;d-=1}e=d;while(d>this._lastPymkSeen)this.logPYMKImpression(a[d],"friends_center"),d-=1;this._lastPymkSeen=Math.max(this._lastPymkSeen,e)},_recordFriendRequestImpression:function(){__p&&__p();var a=b("DOM").scry(this._requestsBox,"div.friendRequestItem"),c=b("Vector").getViewportDimensions().y,d=a.length-1;while(d>this._lastRequestSeen){var e=b("Vector").getElementPosition(a[d],"viewport").y;if(e>0&&e+b("Vector").getElementDimensions(a[d]).y<=c)break;d-=1}e=d;while(d>this._lastRequestSeen){c=a[d].getAttribute("data-id");var f={request_id:c,request_location:"friend_center_requests",request_position:d+1};b("MarauderLogger").log("request_seen","friend_request_waterfall",f);b("FriendRequestIHEventLogger").logImpression(c);d-=1}this._lastRequestSeen=Math.max(this._lastRequestSeen,e)},_handleXout:function(){this._lastPymkSeen=Math.max(this._lastPymkSeen-1,-1),this._recordPYMKImpression()},logPYMKImpression:function(a,c){var d=b("DOM").find(a,"input.friendBrowserID");d=parseInt(d.value,10);a=parseInt(a.getAttribute("data-signature"),10);b("PymkFunnelLogger").logImpression(d,a,c)}};e.exports=a}),null);
__d("JewelQPLogging",["QPRenderer"],(function(a,b,c,d,e,f){var g=!1,h=null,i=!1;function j(){if(i)return;g&&h&&(i=!0,b("QPRenderer").logEvent(String(h.promotion_id),"view",h.instance_log_data?h.instance_log_data:{}))}a={onJewelOpened:function(){g=!0,j()},updateQPLogData:function(a){h=a,j()}};e.exports=a}),null);
__d("RequestsJewelStore",["Arbiter","ArbiterMixin","ChannelConstants"],(function(a,b,c,d,e,f){__p&&__p();a=babelHelpers["extends"]({},b("ArbiterMixin"),{_initialized:!1,_count:0,_requestList:{},addFriendRequests:function(a){Object.assign(this._requestList,a)},getRequestListKeys:function(){return Object.keys(this._requestList)},removeRequest:function(a){delete this._requestList[a]},getRequestCount:function(a){return this.getRequestListKeys().length},decrementCount:function(){this.setCount(Math.max(0,this._count-1))},setCount:function(a){b("Arbiter").inform("jewel/count-updated",{jewel:"requests",count:a},"state")},setupListeners:function(){__p&&__p();var a=this;if(this._initialized)return;this._initialized=!0;b("Arbiter").subscribe("jewel/count-updated",function(b,c){c.jewel==="requests"&&a._updateCount(c.count)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_add"),function(b,c){return a._addRequest(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_friending_notifs"),function(b,c){return a._addNotification(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("mobile_requests_count"),function(b,c){return a._updateBadgeCountFromObject(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("jewel_requests_remove_old"),function(b,c){return a._removeOldRequest(c)});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("friend_requests_seen"),function(b,c){return a.setCount(0)})},_updateCount:function(a){var b=this._count!==a;this._count=a;b&&this.inform("countUpdated",a)},_addRequest:function(a){__p&&__p();if(!a)return;a=a.obj;var b=a.from;a=a.suggester;b=this._requestList[b];b||this.setCount(this._count+1);b=b?b.type:null;a=b===19&&!a;this.inform("addRequest",{shouldReplace:a,previousType:b})},_updateBadgeCountFromObject:function(a){if(!a)return;a=a.obj;a=a.num_unseen+a.num_friend_confirmed_unseen;this._refreshJewel();this.setCount(a)},_addNotification:function(a){if(!a||a.obj.notif_type!=="friend_confirmed")return;this.inform("addNotification")},_removeOldRequest:function(a){if(!a)return;a=this._requestList[a.obj.from];if(!a)return;this.inform("removeOldRequest",a)},_refreshJewel:function(a){a===void 0&&(a=!1),this.inform("refreshJewel",a)}});e.exports=a}),null);
__d("XGigaboxxUpdateSeenTimeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/gigaboxx/endpoint/writesafe/update_last_seen_time/",{})}),null);
__d("RequestsJewelController",["invariant","Promise","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","Event","EventProfiler","Focus","FriendRequestIHEventLogger","JewelQPLogging","MarauderLogger","Parent","RequestsJewelStore","ScrollableArea","TimeSlice","WebFriendingRequests","XGigaboxxUpdateSeenTimeAsyncController","ge","getElementPosition","getViewportDimensions","promiseDone","requireWeak","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null;b("requireWeak")("FriendBrowserCheckboxController",function(a){return h=a});var i=31,j=600,k=30,l=160;a=function(){"use strict";__p&&__p();a.getInstance=function(){return this.$11};a.updateFromDOM=function(){var a=this.getInstance();a&&a.fromDom()};a.setupScroll=function(){var a=this.getInstance();a&&a.setupScroll()};a.setInitialHeight=function(){var a=this.getInstance();a&&a.updateHeight()};a.maybeLoadJewel=function(){var a=this.getInstance();a&&a.maybeLoadJewel()};a.isOpen=function(){var a=this.getInstance();return a?a.$2():!1};a.create=function(b,c){this.$11&&g(0,5550);return this.$11=new a(b,c)};a.setupJewelRefresh=function(){b("Arbiter").subscribe(["FriendRequest/confirmFromProfile","FriendRequest/deleteFromProfile"],function(a,c){a={};a.reloadcontent=!0;new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(a).setAllowCrossPageTransition(!0).send()})};function a(a,c){__p&&__p();var d=this;this.$2=c;this.$1=a;this.$4=-1;this.$5=-1;this.$10=b("Promise").resolve(!0);this.$8=function(a){var c=this;b("throttle").acrossTransitionsWithBlocking(function(){return c.$12(a)},5e3)()};(c=b("RequestsJewelStore")).subscribe("addRequest",this.$13.bind(this));c.subscribe("addNotification",function(){return d.$14()});c.subscribe("removeOldRequest",this.$15.bind(this));c.subscribe("refreshJewel",this.$16.bind(this));c.setupListeners();this.setupScroll();this.$17();this.$18();this.$19()}var c=a.prototype;c.fromDom=function(){var a=this,c={};b("DOMQuery").scry(this.$1,"li.objectListItem").forEach(function(b){b=b.getAttribute("id");if(b){b=a.$20(b);b&&b.requester&&(c[b.requester]=b)}});b("RequestsJewelStore").addFriendRequests(c);this.$21()};c.maybeLoadJewel=function(){var a=this;this.$9&&(this.$9(function(){a.openHandler()}),this.$9=null)};c.updateHeight=function(){var a=this.$22();a&&(a.style.height=this.$23()+"px")};c.markSeen=function(){b("promiseDone")(this.$10,function(){new(b("AsyncRequest"))(b("XGigaboxxUpdateSeenTimeAsyncController").getURIBuilder().getURI()).setMethod("POST").send()})};c.openHandler=function(){__p&&__p();!this.$6&&this.$2()&&(this.$6=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstRequestsJewelOpen"));b("Arbiter").inform("requestsJewel/opened");var a=b("ge")("fbRequestsJewelLoading"),c=this.$22();if(!a&&!c)this.$9=b("TimeSlice").getGuardedContinuation("RequestsJewelController clickBeforeE2E continuation");else if(a)this.$8({log_impressions:!0});else{a=b("RequestsJewelStore").getRequestListKeys();a.length>0&&new(b("AsyncRequest"))().setAllowCrossPageTransition(!0).setURI("/friends/requests/log_impressions").setData({ids:a.join(","),ref:"jewel"}).send()}b("DOMQuery").scry(this.$1,"a.findFriendsLink").forEach(function(a){b("Focus").set(a)});c&&b("ScrollableArea").poke(c);b("JewelQPLogging").onJewelOpened()};c.closeHandler=function(){b("Arbiter").inform("requestsJewel/closed"),b("DOMQuery").scry(this.$1,"li.jewelItemNew").forEach(function(a){b("CSS").removeClass(a,"jewelItemNew")})};c.setupScroll=function(){var a=this.$22();a&&(this.$7=this.$24(),this.$3=0,b("ScrollableArea").getInstance(a).subscribe("scroll",this.$25.bind(this)),this.$26(),this.$27())};c.$17=function(){b("Event").listen(this.$1,"submit",function(a){a=b("Parent").byClass(a.getTarget(),"objectListItem");a&&(b("CSS").removeClass(a,"jewelItemNew"),b("CSS").addClass(a,"jewelItemResponded"))})};c.$18=function(){var a=this;b("Event").listen(window,"resize",b("throttle").acrossTransitions(function(){a.updateHeight()}))};c.$19=function(){var a=this;b("Arbiter").subscribe("pymk-x-out",function(b,c){b=c.location;(b==="pymk_jewel_first_page"||b==="pymk_jewel")&&a.$26()})};c.$28=function(a){a=parseInt(a,10);return isNaN(a)?null:a};c.$20=function(a){a=a.match(/^(\d+)_(\d+)/);return!a?null:{requester:this.$28(a[1]),type:this.$28(a[2])}};c.$29=function(a,b){return a==null||b==null?null:a+"_"+b};c.$30=function(a,b){return a==null||b==null?null:a+"_"+b+"_req"};a.$31=function(a){a=a.getAttribute("id");return a.substring(0,a.length-6)};c.$22=function(){return b("DOMQuery").scry(this.$1,".uiScrollableArea")[0]};c.$24=function(){return b("DOMQuery").scry(this.$1,".uiScrollableAreaWrap")[0]};c.$25=function(){__p&&__p();var a=b("DOMQuery").scry(this.$7,".uiMorePager").pop();if(a){var c=b("getElementPosition")(a).y,d=this.$22();c>0&&d&&b("CSS").addClass(d,"contentAfter");c=b("DOMQuery").find(a,"a");if(!c)return;d=b("getElementPosition")(c).y;if(d===this.$3)return;a=b("getElementPosition")(this.$7);a=a.y+a.height;if(d-300<a&&d>0){this.$3=d;a=c.getAttribute("ajaxify");a?new(b("AsyncRequest"))(a).setRelativeTo(c).setStatusElement(b("Parent").byClass(c,"stat_elem")).send():h&&h.getInstance("jewel").showMore()}}this.$26();this.$27()};c.$26=function(){__p&&__p();if(!this.$7)return;var a=b("getElementPosition")(this.$7);a=a.y+a.height;var c=b("DOMQuery").scry(this.$1,"li.friendBrowserListUnit"),d=c.length-1;while(d>this.$4){var e=b("getElementPosition")(c[d]),f=e.y;e=f+e.height;if(f>0&&e<=a)break;d-=1}f=d;while(d>this.$4)b("WebFriendingRequests").logPYMKImpression(c[d],"pymk_jewel"),d--;this.$4=Math.max(this.$4,f)};c.$27=function(){__p&&__p();if(!this.$7)return;var c=b("getElementPosition")(this.$7);c=c.y+c.height;var d=b("DOMQuery").scry(this.$1,"li.objectListItem"),e=d.length-1;while(e>this.$5){var f=b("getElementPosition")(d[e]),g=f.y;f=g+f.height;if(g>0&&f<=c)break;e-=1}g=e;while(e>this.$5){f=a.$31(d[e]);b("MarauderLogger").log("request_seen","friend_request_waterfall",{request_id:f,request_location:"requests_jewel"});b("FriendRequestIHEventLogger").logImpression(f);e-=1}this.$5=Math.max(this.$5,g)};c.$12=function(a){a===void 0&&(a={}),this.$10=new(b("Promise"))(function(c,d){var e=!b("ge")("fbRequestsJewelLoading");new(b("AsyncRequest"))().setURI("/ajax/requests/loader/").setData(babelHelpers["extends"]({},a,{reloadcontent:e})).setFinallyHandler(function(a){!a.getError()?c(!0):d()}).send()})};c.$14=function(){if(this.$2())return;this.$8()};c.$13=function(a,b){a=b.shouldReplace;b=b.previousType;if(!a&&(b||this.$2()))return;this.$8()};c.$15=function(a,c){a=c.requester;c=c.type;if(this.$2()||b("ge")("fbRequestsJewelLoading")!=null)return;var d=this.$29(a,c),e=d&&b("ge")(d);e||(d=this.$30(a,c),e=b("ge")(d));e&&(b("CSS").hasClass(e,"jewelItemNew")&&b("RequestsJewelStore").decrementCount(),b("CSS").hasClass(e,"jewelItemResponded")||(b("DOM").remove(e),b("RequestsJewelStore").removeRequest(a),this.$21()))};c.$16=function(a,b){if(b!==!0&&this.$2())return;this.$8()};c.$21=function(){b("DOMQuery").scry(this.$1,"li.empty").forEach(function(a){b("CSS").conditionShow(a,b("RequestsJewelStore").getRequestCount()<=0)})};c.$23=function(){return Math.min(Math.max(b("getViewportDimensions")().height-l,k),j)+i};return a}();a.$11=null;e.exports=a}),null);
__d("NotificationJewelReminderLoader",["gkx","promiseDone"],(function(a,b,c,d,e,f){e.exports={init:function(a,c){b("promiseDone")(a.load(),function(a){if(b("gkx")("1152566"))return;a.init(c)})}}}),null);