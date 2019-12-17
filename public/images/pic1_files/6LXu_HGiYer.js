if (self.CavalryLogger) { CavalryLogger.start_js(["QJpJT"]); }

__d("StoriesTrayLogger",["DirectMessagingTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={_getLoggingData:function(a,b){__p&&__p();var c={eventStories:0,followeeStories:0,friendStories:0,groupStories:0,hasSelfStory:!1,liveStories:0,newNonSelfStories:0,pageStories:0,storyPromos:0,storyThreadIDs:new Map(),totalNoneSelfStories:0};c=a.reduce(function(a,c,d){__p&&__p();var e,f,g;d=c==null?void 0:c.node;if(d==null)return a;c=d.story_bucket_type;e=((e=d.story_bucket_owner)==null?void 0:e.is_viewer_friend)||!1;var h=d.is_bucket_seen_by_viewer||!1;f=((f=d.unified_stories)==null?void 0:f.count)||0;g=(g=d.story_bucket_owner)==null?void 0:g.id;d=(d=d.unified_stories)==null?void 0:d.nodes;d=d!=null?d.map(function(a){return a.id}):null;(c==="LIVE_STORY"||f>0)&&(b===g?a.hasSelfStory=!0:(a.totalNoneSelfStories++,h&&a.newNonSelfStories++),c==="LIVE_STORY"?a.liveStories++:c==="PAGE_STORY"?a.pageStories++:c==="EVENT_STORY"?a.eventStories++:c==="GROUP_STORY"?a.groupStories++:c==="PROMOTION_STORY"?a.storyPromos++:!e?a.followeeStories++:a.friendStories++);g!=null&&d!=null&&a.storyThreadIDs.set(g,d);return a},c);return c},logStoryTrayLoad:function(a){var c=a.actorID,d=a.buckets,e=a.feedUnitTrackingString,f=a.sessionID;a=a.source;if(d==null)return;d=g._getLoggingData(d,c);c=new(b("DirectMessagingTypedLogger"))();c.setHasMyStory(d.hasSelfStory).setNumberStories(d.totalNoneSelfStories).setNumberNewStories(d.newNonSelfStories).setNumberLiveStories(d.liveStories).setLiveStoriesInTray(d.liveStories).setPageStoriesInTray(d.pageStories).setEventStoriesInTray(d.eventStories).setGroupStoriesInTray(d.groupStories).setFolloweeStoriesInTray(d.followeeStories).setFriendStoriesInTray(d.friendStories).setPromotionStoriesInTray(d.storyPromos).setClientStoryThreadIds(d.storyThreadIDs).setName("story_tray_load").setSource(a).setTraySessionID(f).setStoriesTrayFeedUnitTrackingString(e).log()}};e.exports=g}),null);
__d("StoryProfileImpressionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("story_profile_impression");e.exports=a}),null);