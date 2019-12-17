if (self.CavalryLogger) { CavalryLogger.start_js(["VRpzL"]); }

__d("FeedPlaceHolderStory.react",["cx","Locale","React","XUICard.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("XUICard.react"),{className:b("joinClasses")("_2iwp",this.props.className),children:b("React").jsx("div",{className:(b("Locale").isRTL()?"direction_rtl":"")+" _2iwo",children:b("React").jsxs("div",{className:"_2iwq",children:[b("React").jsx("div",{className:"_2iwr"}),b("React").jsx("div",{className:"_2iws"}),b("React").jsx("div",{className:"_2iwt"}),b("React").jsx("div",{className:"_2iwu"}),b("React").jsx("div",{className:"_2iwv"}),b("React").jsx("div",{className:"_2iww"}),b("React").jsx("div",{className:"_2iwx"}),b("React").jsx("div",{className:"_2iwy"}),b("React").jsx("div",{className:"_2iwz"}),b("React").jsx("div",{className:"_2iw-"}),b("React").jsx("div",{className:"_2iw_"}),b("React").jsx("div",{className:"_2ix0"})]})})})};return c}(b("React").Component);e.exports=a}),null);
__d("GroupSellNavigationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:GroupSellNavigationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:GroupSellNavigationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GroupSellNavigationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCategoryID=function(a){this.$1.category_id=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setGroupID=function(a){this.$1.group_id=a;return this};c.setGroupMessageID=function(a){this.$1.group_message_id=a;return this};c.setReferralStack=function(a){this.$1.referral_stack=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setReferralSurface=function(a){this.$1.referral_surface=a;return this};c.setSearchQuery=function(a){this.$1.search_query=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={category_id:!0,event:!0,group_id:!0,group_message_id:!0,referral_stack:!0,referral_surface:!0,search_query:!0,surface:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("GroupSellTheatreLink",["csx","CSS","Event","GroupSellNavigationTypedLogger","QE2Logger"],(function(a,b,c,d,e,f,g){__p&&__p();a={setClickListener:function(a,c,d,e,f){b("Event").listen(a,"click",function(){b("QE2Logger").logExposureForUser("marketplace_www_bsg"),new(b("GroupSellNavigationTypedLogger"))().setEvent("click").setGroupID(c).setSurface(e).setGroupMessageID(d).setReferralSurface(e).addToExtraData("hasPhoto",f.toString()).log()})},setPhotoAttachmentClickListenerOnStory:function(a,c,d,e){b("Event").listen(a,"click",function(a){if(a.target.rel!=="theater")return;if(!b("CSS").matchesSelector(a.target,"._2a2r")&&!b("CSS").matchesSelector(a.target,"._4-eo"))return;b("QE2Logger").logExposureForUser("marketplace_www_bsg");new(b("GroupSellNavigationTypedLogger"))().setEvent("click").setGroupID(c).setSurface(e).setGroupMessageID(d).setReferralSurface(e).log()})}};e.exports=a}),null);
__d("P2PAmountUtils",[],(function(a,b,c,d,e,f){var g=1e4;a={isAmountOverLegalLimit:function(a){return parseFloat(this.sanitizeAmount(a))>=g},isAmountZero:function(a){return parseFloat(this.sanitizeAmount(a))===0},isValidSendAmount:function(a){return!this.isAmountOverLegalLimit(a)&&!this.isAmountZero(a)},sanitizeAmount:function(a){return a.replace(/[^0-9\.]+/g,"")}};e.exports=a}),null);
__d("P2PButton.react",["MessengerDialogButton.react","MessengerEnvironment","React","XUIButton.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MessengerEnvironment").messengerui,c=a?b("MessengerDialogButton.react"):b("XUIButton.react"),d=this.props.type;d||(d=this.props.use==="confirm"?"primary":"secondary");a=a?"default":this.props.use;d=babelHelpers["extends"]({},this.props,{type:d,use:a});return b("React").jsx(c,babelHelpers["extends"]({},d,{children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("P2PDialog.react",["LayerFadeOnHide","MessengerDialog.react","MessengerEnvironment","React","XUIDialog.react","emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"P2PDialog",propTypes:{onToggle:a.func,shown:a.bool,width:a.number},getDefaultProps:function(){return{onToggle:b("emptyFunction"),repositionOnUpdate:!1,shown:!0,width:400}},componentDidUpdate:function(){this.props.repositionOnUpdate&&setTimeout(function(){this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer&&this.refs.dialog.layer.updatePosition()}.bind(this),0)},render:function(){var a=b("MessengerEnvironment").messengerui;a=a?b("MessengerDialog.react"):b("XUIDialog.react");return b("React").jsx(a,babelHelpers["extends"]({behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")}},this.props,{hideOnEscape:!0,layerHideOnBlur:!0,ref:"dialog",children:this.props.children}))}});e.exports=c}),null);
__d("P2PDialogBody.react",["MessengerDialogBody.react","MessengerEnvironment","React","XUIDialogBody.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MessengerEnvironment").messengerui;a=a?b("MessengerDialogBody.react"):b("XUIDialogBody.react");return b("React").jsx(a,babelHelpers["extends"]({},this.props,{children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("P2PDialogFooter.react",["cx","MessengerDialogFooter.react","MessengerEnvironment","React","XUIDialogFooter.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MessengerEnvironment").messengerui,c=a?b("MessengerDialogFooter.react"):b("XUIDialogFooter.react"),d,e=this.props.children;a&&(d=b("React").Children.count(this.props.children),e=b("React").Children.map(this.props.children,function(a,c){return!a?null:b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"_4ec0"),type:c===0&&d===2?"secondary":"primary"})}));return b("React").jsx(c,babelHelpers["extends"]({},this.props,{children:e}))};return c}(b("React").Component);e.exports=a}),null);
__d("P2PDialogTitle.react",["MessengerDialogHeaderReact.re","MessengerEnvironment","React","XUIDialogTitle.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MessengerDialogHeaderReact.re").make;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MessengerEnvironment").messengerui;a=a?g:b("XUIDialogTitle.react");return b("React").jsx(a,babelHelpers["extends"]({},this.props,{children:this.props.children}))};return c}(b("React").Component);e.exports=a}),null);
__d("P2PListRow.react",["cx","invariant","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;b("React").Children.count(a.children)===2||h(0,1825);var c=a.offset,d=a.offsetRight!==void 0&&a.offsetRight+"px",e=a.offsetBottom!==void 0&&a.offsetBottom+"px";return b("React").jsxs("div",{className:"_3q6c"+(c==="large"?" _3q6d":"")+(c==="small"?" _3q6o":""),children:[b("React").jsx("div",{className:"_3q6p",style:{paddingRight:d,paddingBottom:e},children:a.children[0]}),b("React").jsx("div",{className:"_3q6q",style:{paddingBottom:e},children:a.children[1]})]})};return c}(b("React").Component);c.propTypes={offset:a.oneOf(["large","small"]),offsetBottom:a.number,offsetRight:a.number};c.defaultProps={offset:"large"};e.exports=c}),null);
__d("P2PText.react",["React","XUIGrayText.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.type;a=babelHelpers["extends"]({},this.props,{display:this.props.display||"block",shade:a==="primary"?"dark":"light",size:this.props.size||"small"});delete a.type;return b("React").jsx(b("XUIGrayText.react"),babelHelpers["extends"]({},a,{children:this.props.children}))};return c}(b("React").Component);c.propTypes={type:a.oneOf(["primary","secondary"]).isRequired};e.exports=c}),null);
__d("P2PEncryptedText.react",["ix","cx","fbt","xuiglyph","Image.react","P2PText.react","React"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.getEncryptedMessage=function(){return c.props.showPasswordProtected?i._("Encrypted and password protected."):i._("Encrypted and private.")},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a;return(a=b("React")).jsxs(b("P2PText.react"),{type:"secondary",children:[a.jsx("div",{className:"__8t",children:a.jsx(b("Image.react"),{src:g("89465")})}),a.jsx("span",{className:"_2pir",children:this.getEncryptedMessage()})]})};return c}(b("React").Component);c.propTypes={showPasswordProtected:a.bool};c.defaultProps={showPasswordProtected:!1};e.exports=c}),null);
__d("P2PNUXNextButton.react",["fbt","P2PButton.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("P2PButton.react"),{label:g._("Next"),onClick:this.props.onNextClick,use:"confirm"})};return c}(b("React").Component);c.propTypes={onNextClick:a.func.isRequired};e.exports=c}),null);