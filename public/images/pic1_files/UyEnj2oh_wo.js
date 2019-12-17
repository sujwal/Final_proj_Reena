if (self.CavalryLogger) { CavalryLogger.start_js(["4bq9T"]); }

__d("AdsInteractions",["performanceNow","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=function(){__p&&__p();function a(){this.$1=new Map()}var c=a.prototype;c.start=function(a){if(this.$1.has(a))return null;var c=(g||(g=b("performanceNow")))();c={name:a,startTime:c};this.$1.set(a,c);return c};c.end=function(a){this.$1.has(a)&&this.$1["delete"](a)};c.singleFrameInteraction=function(a){var c=this,d=this.start(a);d&&b("requestAnimationFrameAcrossTransitions")(function(){b("requestAnimationFrameAcrossTransitions")(function(){c.$1.get(a)===d&&c.end(a)})})};c.getActiveInteractions=function(){return this.$1};return a}();e.exports=new a()}),null);
__d("InstreamVideoAdBreak",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.instreamPlacement,this.$2=a.index,this.$3=a.timeOffsetInMs,this.$4=a.adBreakDurationInMs,this.$5=a.isAdBreakAutoInserted,this.$6=a.naturalnessScore,this.$7=a.midSpeechScore}var b=a.prototype;b.getInstreamPlacement=function(){return this.$1};b.getIndex=function(){return this.$2};b.getTimeOffsetInMs=function(){return this.$3};b.getAdBreakDurationInMs=function(){return this.$4};b.getIsAdBreakAutoInserted=function(){return this.$5};b.getNaturalnessScore=function(){return this.$6};b.getMidSpeechScore=function(){return this.$7};return a}();e.exports=a}),null);
__d("StickerInterfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSAGES:"messages",NEO:"neo",COMMENTS:"comments",STICKERED:"stickered",COMPOSER:"composer",POSTS:"posts",FRAMES:"frames",SMS:"sms",MONTAGE:"montage"})}),null);
__d("UFIStickerButton.react",["cx","fbt","Arbiter","Bootloader","FocusRelocator.react","Link.react","React","StickerInterfaces","getObjectValues","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"UFIStickerButton",_clickGuard:!1,_updateListener:null,_openFlyoutListener:null,_linkRef:null,propTypes:{customStickerOwnerID:a.string,onStickerFlyoutShow:a.func,onStickerSelected:a.func.isRequired,showTooltip:a.bool,stickerInterface:a.oneOf(b("getObjectValues")(b("StickerInterfaces"))),tabIndex:a.number},getDefaultProps:function(){return{customStickerOwnerID:"",showTooltip:!0,stickerInterface:"comments"}},getInitialState:function(){return{renderFlyout:null,flyoutShown:!1}},componentDidMount:function(){var a=this;this._updateListener=b("Arbiter").subscribe("page_transition",function(){return a._hideFlyout()});this._openFlyoutListener=b("Arbiter").subscribe("GamingStickers/openFlyout",function(b,c){return a._showFlyout(c)})},componentWillUnmount:function(){this._updateListener&&this._updateListener.unsubscribe(),this._openFlyoutListener&&this._openFlyoutListener.unsubscribe()},render:function(){var a=h._("Post a sticker");return b("React").jsx(b("FocusRelocator.react"),{from:this._linkRef,to:this.refs.icon,children:b("React").jsxs(b("Link.react"),{"aria-label":a,className:"_r1a UFICommentStickerButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.showTooltip?a:null,linkRef:this._setRef,onClick:this._onLinkClicked,onMouseDown:this._prepareForClick,role:"button",tabIndex:this.props.tabIndex,children:[b("React").jsx("div",{ref:"icon",className:"UFICommentStickerIcon"+(this.state.flyoutShown?" UFICommentStickerIconActive":"")}),this.props.children,this.state.renderFlyout?this.state.renderFlyout():null]})})},_hideFlyout:function(){this.setState({flyoutShown:!1})},_showFlyout:function(a){var c=this;b("Bootloader").loadModules(["ContextualLayerAutoFlip","LayerTabIsolation","StickersFlyout.react","XUIContextualDialog.react","StickersActions"],function(d,e,f,g,h){c.setState({flyoutShown:!0,renderFlyout:function(){return b("React").jsx(g,{alignment:"right",behaviors:{ContextualLayerAutoFlip:d,LayerTabIsolation:e},className:"_5e-r",contextRef:function(){return c._linkRef},onBlur:c._hideFlyout,onToggle:function(a){!a&&c.state.flyoutShown&&c._hideFlyout()},position:"above",shown:c.state.flyoutShown,hasActionableContext:!0,width:278,children:b("React").jsx("div",{children:b("React").jsx(f,{customStickerOwnerID:c.props.customStickerOwnerID,onEscKeyDown:c._hideFlyout,onStickerSelect:c._onStickerSelected,stickerInterface:c.props.stickerInterface,shown:c.state.flyoutShown})})})}}),c.props.onStickerFlyoutShow&&c.props.onStickerFlyoutShow(),a&&b("setImmediate")(function(){return h.selectTrayPack(a)})},"UFIStickerButton.react")},_prepareForClick:function(){this._clickGuard=this.state.flyoutShown},_onLinkClicked:function(a){a.preventDefault();if(this.state.renderFlyout!==null){this._clickGuard||(this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow(),this.setState({flyoutShown:!0}));return}this._showFlyout(null)},_onStickerSelected:function(a,b,c){this.props.onStickerSelected(a,b,c),this._hideFlyout()},_setRef:function(a){this._linkRef=a}});e.exports=c}),null);
__d("FBCheckbox.react",["cx","Keys","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){if(d.props.disabled)return;d.props.onToggle&&d.props.onToggle(!d.props.checked)},d.$2=function(a){switch(a.keyCode){case b("Keys").SPACE:a.preventDefault();d.$1();break;default:break}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a="_kx6"+(this.props.checked?" _kx7":"")+(this.props.disabled?" _kx8":"")+(this.props.hovered?" _kx9":"")+(this.props.checked?"":" _kxa");return b("React").jsx("div",{"aria-checked":this.props.checked?"true":"false","aria-disabled":this.props.disabled?"true":"false",className:b("joinClasses")(a,this.props.className),onClick:this.$1,onKeyDown:this.$2,role:"checkbox",tabIndex:"0"})};return c}(b("React").Component);c.propTypes={checked:a.bool.isRequired,className:a.string,disabled:a.bool,hovered:a.bool,onToggle:a.func};e.exports=c}),null);
__d("FDSBaseSwitch.react",["cx","FDSPrivateBaseBinaryInputLayout.react","FDSPrivateInputHooks","FDSPrivateThemeContext.react","React","makeFDSStandardComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FDSPrivateInputHooks").useFocusManagement,i=b("FDSPrivateInputHooks").useHoverManagement,j=b("React").useCallback,k=b("React").useContext;function a(a){__p&&__p();var c=a["data-testid"],d=a.describedBy,e=a.display,f=a.htmlForTargetId,g=a.isDisabled,k=g===void 0?!1:g;g=a.labelledBy;var l=a.onChange,o=a.size;o=o===void 0?"medium":o;var p=a.value;a=a.fdsOverride_disableAnimation;var q=h(),r=q.isFocused,s=q.onBlur;q=q.onFocus;var t=i(),u=t.isHovering,v=t.onMouseEnter;t=t.onMouseLeave;var w=o==="large",x=j(function(a){k!==!0&&l(a.target.checked,a)},[l,k]);r={isFocused:r,isHovering:u,isDisabled:k,isChecked:p,isLarge:w};w=n(r);r=m(r);return b("React").jsx(b("FDSPrivateBaseBinaryInputLayout.react"),{display:e,input:b("React").jsx("input",{"aria-checked":p,"aria-describedby":d,"aria-labelledby":g,checked:p,className:k?"_7q1g":"","data-testid":c,disabled:k,id:f?f:void 0,onBlur:s,onChange:x,onFocus:q,onMouseEnter:v,onMouseLeave:t,role:"switch",type:"checkbox"}),isDisabled:k,children:b("React").jsxs("div",{className:"_7q1e"+(a===!0?" _79d3":""),children:[b("React").jsx("div",{className:"_79d2"+(p?" _7q1f":"")+(k?" _7q1g":"")+(u?" _7qr0":"")+(o==="large"?" _79d4":""),style:w}),b("React").jsx("span",{className:"_7q1t",style:r})]})})}function l(){var a=k(b("FDSPrivateThemeContext.react"));return{checked:{"default":{backgroundColor:a.binaryControls.checked.normal.backgroundColor,opacity:a.binaryControls.checked.normal.opacity},disabled:{backgroundColor:a.binaryControls.checked.disabled.backgroundColor,opacity:a.binaryControls.checked.disabled.opacity},focused:{backgroundColor:a.binaryControls.checked.active.backgroundColor,opacity:a.binaryControls.checked.active.opacity},hovered:{backgroundColor:a.binaryControls.checked.hover.backgroundColor,opacity:a.binaryControls.checked.hover.opacity}},unchecked:{"default":{border:a.binaryControls.unchecked.normal.border,boxShadow:a.binaryControls.unchecked.normal.boxShadow,backgroundColor:a.binaryControls.unchecked.normal.backgroundColor},disabled:{backgroundColor:a.binaryControls.unchecked.disabled.backgroundColor,border:a.binaryControls.unchecked.disabled.border,boxShadow:a.binaryControls.unchecked.disabled.boxShadow},focused:{backgroundColor:a.binaryControls.unchecked.active.backgroundColor,border:a.binaryControls.unchecked.active.border,boxShadow:a.binaryControls.unchecked.active.boxShadow},hovered:{backgroundColor:a.binaryControls.unchecked.hover.backgroundColor,border:a.binaryControls.unchecked.hover.border,boxShadow:a.binaryControls.unchecked.hover.boxShadow}},borderRadius:a.binaryControls.borderRadius,height:{medium:a.binaryControls.height.medium,large:a.binaryControls.height.large},width:{medium:a.binaryControls.width.medium,large:a.binaryControls.width.large}}}function m(a){__p&&__p();a.isFocused;a.isHovering;var c=a.isDisabled,d=a.isChecked;a=a.isLarge;var e=k(b("FDSPrivateThemeContext.react"));c=c?e.binaryControls.slider.disabled.backgroundColor:void 0;if(d){d=a?e.binaryControls.slider.checked.size.large:e.binaryControls.slider.checked.size.medium;return{backgroundColor:c,height:d,marginLeft:e.binaryControls.slider.checked.marginLeft,width:d}}d=a?e.binaryControls.slider.size.large:e.binaryControls.slider.size.medium;return{backgroundColor:c,height:d,marginLeft:e.binaryControls.slider.margin!=null?e.binaryControls.slider.margin:void 0,width:d}}function n(a){var b=a.isFocused,c=a.isHovering,d=a.isDisabled,e=a.isChecked;a=a.isLarge;var f=l(),g=f.unchecked["default"].backgroundColor,h=f.unchecked["default"].border,i=f.unchecked["default"].boxShadow,j,k=a?f.width.large:f.width.medium;a=a?f.height.large:f.height.medium;e?(g=f.checked["default"].backgroundColor,j=f.checked["default"].opacity,c&&(g=f.checked.hovered.backgroundColor,j=f.checked.hovered.opacity),b&&(i=f.unchecked.focused.boxShadow,h=f.unchecked.focused.border,g=f.checked.focused.backgroundColor,j=f.checked.focused.opacity),d&&(i=f.unchecked.disabled.boxShadow,h=f.unchecked.disabled.border,g=f.checked.disabled.backgroundColor,j=f.checked.disabled.opacity)):(c&&(g=f.unchecked.hovered.backgroundColor,i=f.unchecked.hovered.boxShadow,h=f.unchecked.hovered.border),b&&(g=f.unchecked.focused.backgroundColor,i=f.unchecked.focused.boxShadow,h=f.unchecked.focused.border),d&&(g=f.unchecked.disabled.backgroundColor,i=f.unchecked.disabled.boxShadow,h=f.unchecked.disabled.border));return{borderRadius:f.borderRadius,backgroundColor:g,border:h,boxShadow:i,height:a,opacity:j,width:k,maxWidth:k}}e.exports=b("makeFDSStandardComponent")("FDSBaseSwitch",a)}),null);
__d("FDSSwitch.react",["cx","FDSBaseSwitch.react","FDSPrivateDisabledMessageWrapper.react","FDSText.react","FlexLayout.react","React","cxMargin","makeFDSStandardComponent","stylex","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("uniqueID")(),d.$2=b("uniqueID")(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.description,d=a.disabledMessage,e=a.isDisabled,f=a.label,g=a.labelIsHidden,h=a.labelPosition,i=a.onChange,k=a.size;a=a.value;c=b("React").jsx(j,{description:c,descriptionId:this.$2,id:this.$1,isDisabled:e,isPrefix:h==="prefix",label:f,labelIsHidden:g});f="center";g||(f=h==="prefix"?"right":"left");return b("React").jsxs(b("FlexLayout.react"),{align:"center",children:[h==="prefix"?c:null,b("React").jsx(b("FDSPrivateDisabledMessageWrapper.react"),{alignment:f,disabledMessage:d,fdsPrivate_loggerSuffix:"InFDSSwitch",isDisabled:e,children:b("React").jsx(b("FDSBaseSwitch.react"),{"data-testid":this.props["data-testid"],describedBy:this.props.description!=null?this.$2:void 0,display:"block",htmlForTargetId:this.$1,isDisabled:e,onChange:i,size:k,value:a})}),h==="suffix"?c:null]})};return c}(b("React").PureComponent);a.defaultProps={isDisabled:!1,labelIsHidden:!1,labelPosition:"prefix",size:"medium"};function i(a){return b("React").jsx("div",{className:(h||(h=b("stylex"))).dedupe(a.isPrefix?{"font-weight-1":"db2ihn4m","padding-end-1":"rnur6hgu","user-select-1":"nngj4jli"}:{},a.isPrefix?null:{"font-weight-1":"db2ihn4m","padding-start-1":"t8j81tsk","user-select-1":"nngj4jli"}),children:b("React").jsx(b("FDSText.react"),{color:"secondary",id:a.id,margin:"_3-8w",size:"body3",children:a.description})})}function j(a){var c=b("React").jsx("label",{className:(a.isPrefix?"_7a90":"")+(a.isPrefix?"":" _7a91")+(a.labelIsHidden?" accessible_elem":""),htmlFor:a.id,children:b("React").jsx(b("FDSText.react"),{color:a.isDisabled?"disabled":"primary",size:"body1",children:a.label})});return a.description!=null?b("React").jsxs(b("FlexLayout.react"),{direction:"vertical",children:[c,b("React").jsx(i,{description:a.description,id:a.descriptionId,isPrefix:a.isPrefix})]}):c}e.exports=b("makeFDSStandardComponent")("FDSSwitch",a)}),null);
__d("FeedObjectCapstone",["csx","DOM","Parent","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={getCapstone:function(a){var c=b("DOM").scry(a,"._x1g");c.length||(c=b("DOM").scry(a.parentNode,"._x1g"));return c?c[0]:null},addCapstoneByStoryID:function(a,c){a=b("Parent").bySelector(b("ge")(a),"._5jmm");this.addCapstone(a,c)},addCapstone:function(a,c){var d=b("DOM").find(a,"._5v3q");d&&(a=d);this.removeCapstone(a);c&&b("DOM").prependContent(a,c);return c},removeCapstone:function(a){a=h.getCapstone(a);a&&b("DOM").remove(a)}};e.exports=h}),null);
__d("EntstreamFeedObjectFollowup",["csx","cx","Arbiter","CSS","DOM","EntstreamFeedObject","Event","FeedObjectCapstone","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="EntstreamFeedObjectFollowup/removed",j={getFollowup:function(a){var c=b("DOM").scry(a,"._5lum");c.length||(c=b("DOM").scry(a.parentNode,"._5lum"));return c?c[0]:null},initCloseButton:function(a){var c=b("DOM").scry(a,"._5xsl");if(c.length==0)return;var d=b("Event").listen(c[0],"click",function(){d.remove(),b("DOM").remove(a),b("Arbiter").inform(i,a)});a.listener=d},stopListenCloseButton:function(a){a.listener&&a.listener.remove()},addFollowup:function(a,c,d){__p&&__p();var e=b("CSS").matchesSelector(a,"._5pat"),f=b("DOM").create("div",{className:"_5lum"});e?b("CSS").addClass(f,"_5pau"):b("CSS").addClass(f,"_1f84");if(d)if(typeof d==="string")b("CSS").addClass(f,d);else if(d instanceof Array)for(var e=0;e<d.length;e++)b("CSS").addClass(f,d[e]);d=b("DOM").scry(a,"._5v3q")[0];d&&(a=d);e=j.getFollowup(a);e&&this.removeFollowup(e);b("FeedObjectCapstone").removeCapstone(a);c?(b("DOM").appendContent(f,c),this.initCloseButton(f),b("CSS").matchesSelector(f,"._4-u3")?b("DOM").prependContent(a,f):b("DOM").insertBefore(a,f)):b("DOM").prependContent(a,f);return f},removeFollowup:function(a){a=j.getFollowup(a);this.stopListenCloseButton(a);b("DOM").remove(a);b("Arbiter").inform(i,a)},appendToFollowup:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=j.getFollowup(a);b("DOM").appendContent(a,c)},addInstreamAdsFollowup:function(a){a=b("DOM").scry(a,"._211q");var c=b("DOM").create("div",{className:"_5lum"});b("DOM").prependContent(a[0],c);return c}};e.exports=j}),null);
__d("WoodhengePromotionStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={SUPPORT_NOW_CTA_TITLE:g._("Become a Supporter"),SUPPORT_NOW_CTA_DESCRIPTION:function(a){return g._("Support {Page Name} and enjoy special benefits.",[g._param("Page Name",a)])},SUPPORT_NOW_CTA_BUTTON_TEXT:g._("Support Now"),START_FREE_TRIAL_CTA_TITLE:g._("Join the Community"),START_FREE_TRIAL_CTA_DESCRIPTION:function(a){return g._("Start a subscription to support {Page Name} .",[g._param("Page Name",a)])},START_FREE_TRIAL_CTA_BUTTON_TEXT:g._("Get 1 Month Free"),COMPOSER_NUX_TEXT:g._("Add a call-to-action button to spread awareness of your fan subscriptions."),SUPPORTER_GOAL_MODAL_HEADER:g._("Set a Goal"),SUPPORTER_GOAL_MODAL_DESCRIPTION_PART_1:g._("Set a goal and offer your community an incentive to help you reach it."),SUPPORTER_GOAL_MODAL_DESCRIPTION_PART_2:g._("This goal will be displayed when you add a subscription button to a post. The goal doesn't have a time limit, it can be edited anytime, and it will automatically disappear when it's met."),SUPPORTER_GOAL_HEADER:g._("Goal"),SUPPORTER_GOAL_SHOW_CURRENT_TOTAL_NUMBER_CHECKBOX_TEXT:g._("Show the current total number"),SUPPORTER_GOAL_SHOW_CURRENT_TOTAL_NUMBER_CHECKBOX_TOOLTIP:g._("The total number of whatever you're trying to increase will be displayed. For example, if you're trying to get new supporters, the total number of supporters you currently have will be displayed."),SUPPORTER_GOAL_TITLE_HEADER:g._("Goal Title"),SUPPORTER_GOAL_TITLE_GHOST_TEXT:function(a){return a?g._("Write a title for your goal..."):g._("Let's Grow the Supporter Community!")},SUPPORTER_GOAL_INCENTIVE_HEADER:g._("Incentive Description"),SUPPORTER_GOAL_INCENTIVE_GHOST_TEXT:function(a){return a?g._("Write a message to thank your followers once the goal is met..."):g._("If we reach this goal, I'll give supporters a behind-the-scenes look at how I create my content!")},SUPPORTER_GOAL_INCENTIVE_TOOLTIP:g._("Offering a reward will encourage your community to help you achieve your goal. Be sure to offer something that you can reliably deliver."),SUPPORTER_GOAL_DROPDOWN_MENU_WITHOUT_TOTAL_NUMBER:function(a){return g._("{Number of supporters selected} New Supporters",[g._param("Number of supporters selected",a)])},SUPPORTER_GOAL_DROPDOWN_MENU_WITH_TOTAL_NUMBER:function(a){return g._("{Number of supporters selected} Supporters",[g._param("Number of supporters selected",a)])},SUPPORTER_GOAL_DROPDOWN_MENU_PLACEHOLDER_TEXT:g._("No goal selected"),ADD_SUPPORTER_GOAL_BUTTON_TEXT:g._("Add a Goal"),ADD_SUPPORTER_GOAL_BUTTON_TOOLTIP:g._("Create a goal to get new supporters. This goal will be shown on your post next to the subscription button."),PROGRESS_BAR_DESCRIPTION_WITH_TOTAL_NUMBER:function(a,b){return g._("{current progress number} of {target progress number} Supporters",[g._param("current progress number",a),g._param("target progress number",b)])},PROGRESS_BAR_DESCRIPTION_WITHOUT_TOTAL_NUMBER:function(a,b){return g._("{current progress number} of {target progress number} New Supporters",[g._param("current progress number",a),g._param("target progress number",b)])},SUPPORTER_GOAL_NULLSTATE_TEXT:g._("Your goal will appear here."),SUPPORTER_GOAL_PROMPT_MESSAGE:g._("Post about your goal")};e.exports=a}),null);
__d("XLivingRoomUFIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/async/watchparty/{living_room_id}/",{living_room_id:{type:"FBID",required:!0}})}),null);