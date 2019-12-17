if (self.CavalryLogger) { CavalryLogger.start_js(["FN4II"]); }

__d("FeedTagSuggest",["ArbiterMixin","AsyncRequest","CSS","Event","SubscriptionsHandler","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g,h,i,j,k,l){__p&&__p();var m;m=a.call(this)||this;m.suggest=c;m.$FeedTagSuggest1=i;m.$FeedTagSuggest2=j;m.$FeedTagSuggest3=k;m.$FeedTagSuggest4=d;m.$FeedTagSuggest5=h;m.$FeedTagSuggest6=g;m.$FeedTagSuggest7=e;m.$FeedTagSuggest8=f;m.$FeedTagSuggest9=l;m.$FeedTagSuggest10=new(b("SubscriptionsHandler"))();m.$FeedTagSuggest10.addSubscriptions(b("Event").listen(m.$FeedTagSuggest5,"click",m.dismissSuggestion.bind(babelHelpers.assertThisInitialized(m),"no")),b("Event").listen(m.$FeedTagSuggest6,"click",m.acceptTagSuggestion.bind(babelHelpers.assertThisInitialized(m))));m.$FeedTagSuggest4&&m.$FeedTagSuggest10.addSubscriptions(b("Event").listen(m.$FeedTagSuggest4,"click",m.dismissSuggestion.bind(babelHelpers.assertThisInitialized(m),"close")));return m}var d=c.prototype;d.dismissSuggestion=function(a){var c=this.$FeedTagSuggest9.feed_type;new(b("AsyncRequest"))().setURI("/ajax/dismiss_tag_suggest.php").setMethod("POST").setData({facebox_logs:[{facebox:this.$FeedTagSuggest2,log_data:this.$FeedTagSuggest9}],closing_source:c,closing_action:a}).setAllowCrossPageTransition(!0).send();this.inform("remove")};d.tagSaveSuccess=function(a){this.inform("remove")};d.acceptTagSuggestion=function(){new(b("AsyncRequest"))().setURI("/ajax/photo_feed_tagging_ajax.php").setMethod("POST").setData({photo_id:this.$FeedTagSuggest1,facebox_id:this.$FeedTagSuggest2,subject_id:this.$FeedTagSuggest3,log_data:this.$FeedTagSuggest9}).setErrorHandler(this.dismissSuggestion.bind(this,"err")).setAllowCrossPageTransition(!0).setHandler(this.tagSaveSuccess.bind(this)).send(),this.$FeedTagSuggest8&&(b("CSS").hide(this.$FeedTagSuggest7),b("CSS").show(this.$FeedTagSuggest8))};d.cleanup=function(){this.$FeedTagSuggest10.release()};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("LitestandTagSuggestContainer",["csx","cx","invariant","Animation","CSS","DOM","DOMQuery","Event","JSXDOM","Rect","Style","SubscriptionsHandler"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=15;a=function(){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();this.$1=new(b("SubscriptionsHandler"))();this.$1.engage();this.$2=a;this.$3=d;this.$4=e;b("CSS").show(this.$2);e=new(b("Rect"))(d).w();d=b("DOMQuery").scry(a,"._5cne");var f=0;for(var g=0;g<d.length;g++){b("CSS").show(d[g]);var h=new(b("Rect"))(d[g].children[0]).w();g>0&&b("CSS").hide(d[g]);h>f&&(f=h)}if(f+j>e){b("CSS").hide(a);return}this.$5=[];this.$6=!1;c.forEach(this.registerSuggestion.bind(this));this.$1.addSubscriptions(b("Event").listen(this.$2,"mouseenter",this.$7.bind(this)),b("Event").listen(this.$2,"mouseleave",this.$8.bind(this)))}var c=a.prototype;c.registerSuggestion=function(a){this.$5.push(a);a=a.js_instance;this.$1.addSubscriptions(a.subscribe("remove",this.onRemove.bind(this,a)))};c.$9=function(a){if(!this.$10){var c=this.$3.children[0];this.$11={top:parseInt(b("Style").get(c,"top"),10)||0,left:parseInt(b("Style").get(c,"left"),10)||0,inner_h:parseInt(b("Style").get(c,"height"),10),inner_w:parseInt(b("Style").get(c,"width"),10),outer_h:parseInt(b("Style").get(this.$3,"height"),10),outer_w:parseInt(b("Style").get(this.$3,"width"),10)}}c=this.$11;var d=100*(a.top*c.inner_h/100+c.top)/c.outer_h,e=100*(a.left*c.inner_w/100+c.left)/c.outer_w,f=a.width*c.inner_w/c.outer_w;a=a.height*c.inner_h/c.outer_h;return b("JSXDOM").div({className:"_5cnc hidden_elem",style:{top:d+"%",left:e+"%",width:f+"%",height:a+"%"}})};c.onRemove=function(a){var c=this.$5.shift();this.$8();c.js_instance===a||i(0,1184);this.$5.length===0?(new(b("Animation"))(this.$2).ondone(function(){this.removeSingleSuggest(this.$2)}.bind(this)).from("opacity",1).to("opacity",0).ease(b("Animation").ease.end).duration(500).go(),this.cleanup()):new(b("Animation"))(a.suggest).ondone(function(){this.switchToNextSuggest(a.suggest,this.getNextFacebox().suggest)}.bind(this)).from("opacity",1).to("opacity",0).ease(b("Animation").ease.end).duration(500).go()};c.switchToNextSuggest=function(a,c){b("CSS").show(c),new(b("Animation"))(c).ondone(this.removeSingleSuggest.bind(this,a)).from("opacity",0).to("opacity",1).ease(b("Animation").ease.end).duration(500).go()};c.removeSingleSuggest=function(a){b("DOM").remove(a),a.cleanup()};c.getNextFacebox=function(){return this.$5[0].js_instance};c.$7=function(){this.$6||(this.$6=!0,this.$5.forEach(function(a,c,d){a=this.$9(a.position_data);b("DOM").appendContent(this.$3,a);d[c].dom_element=a}.bind(this))),this.$12=this.$5[0].dom_element,b("CSS").show(this.$12)};c.$8=function(){this.$12&&b("CSS").hide(this.$12),this.$12=null};c.cleanup=function(){this.$1.release()};return a}();e.exports=a}),null);