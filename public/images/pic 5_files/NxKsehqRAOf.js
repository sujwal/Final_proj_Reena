if (self.CavalryLogger) { CavalryLogger.start_js(["tj9BH"]); }

__d("PageRecommendationComposerEntrypoint.react",["cx","FDSButton.react","React","XRecommendPageComposerDialogAsyncController","XUICardSection.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a;return(a=b("React")).jsx(b("XUICardSection.react"),{children:a.jsxs("div",{className:"_3hoc",children:[a.jsx("div",{className:"_3hoq",children:this.props.questionText}),a.jsxs("div",{className:"_3hos",children:[a.jsx("div",{className:"_3hot",children:a.jsx(b("FDSButton.react"),{use:"primary",size:"medium",width:"100%",rel:"dialog",href:b("XRecommendPageComposerDialogAsyncController").getURIBuilder().setFBID("page_id",this.props.pageID).setEnum("recommendation_type","positive").setEnum("surface",this.props.surface).setEnum("ref_type",this.props.refType).getURI(),label:this.props.positiveButtonText})}),a.jsx("div",{className:"_3hpb",children:a.jsx(b("FDSButton.react"),{use:"default",size:"medium",width:"100%",rel:"dialog",href:b("XRecommendPageComposerDialogAsyncController").getURIBuilder().setFBID("page_id",this.props.pageID).setEnum("recommendation_type","negative").setEnum("surface",this.props.surface).setEnum("ref_type",this.props.refType).getURI(),label:this.props.negativeButtonText})}),a.jsx("div",{className:"_3hpe"})]})]})})};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerTaggerToggleController.react",["React","ReactComponentWithPureRenderMixin","ReactComposerContextTypes","ReactComposerLoggingName","ReactComposerTaggerActions"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerTaggerToggleController",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{taggerID:a.string.isRequired,loggingName:a.oneOf(Object.values(b("ReactComposerLoggingName"))).isRequired,onSelect:a.func},render:function(){return b("React").jsx("span",{onClick:this.props.onSelect||this._onSelect,role:"presentation",children:this.props.children})},_onSelect:function(){b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.loggingName,this.props.taggerID,!1)}});e.exports=c}),null);
__d("ReactComposerTaggerSproutContainer.react",["FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutItem.react","ReactComposerTaggerStore","ReactComposerTaggerToggleController.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("ReactComposerTaggerStore")]};c.calculateState=function(a,c,d){return{highlighted:b("ReactComposerTaggerStore").hasData(d.composerID,c.taggerID),isDisabled:b("ReactComposerTaggerStore").isDisabled(d.composerID,c.taggerID),selectedTagger:b("ReactComposerTaggerStore").getSelectedTagger(d.composerID)}};var d=c.prototype;d.componentDidUpdate=function(a,b){b.selectedTagger===this.props.taggerID&&this.state.selectedTagger===null&&this.refs.sproutItem&&this.refs.sproutItem.focus()};d.render=function(){return this.state.isDisabled?b("React").jsx(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").jsx(b("ReactComposerTaggerToggleController.react"),babelHelpers["extends"]({},this.props,{loggingName:this.props.uiConfig.loggingName,children:b("React").jsx(b("ReactComposerSproutItem.react"),{highlighted:this.state.highlighted,ref:"sproutItem",uiConfig:this.props.uiConfig})}))};return c}(b("React").PureComponent);a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerActivitySproutContainer.react",["FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutsDefaultUIConfigTyped","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("ReactComposerTaggerStore")]};c.calculateState=function(a,c,d){a=d.composerID;return{isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").ACTIVITY)}};var d=c.prototype;d.render=function(){return this.state.isDisabled?b("React").jsx(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").jsx(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").ACTIVITY})};return c}(b("React").PureComponent);a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfigTyped").sproutsUIConfigMap.MINUTIAE};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("PageRecommendationsScoreWithProfile.react",["cx","Image.react","PageRecommendationsCircleScore.react","PageRecommendationsCircleScoreType","React","URI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.srcs;return b("React").jsxs("div",{className:"_3td8",children:[b("React").jsx(b("PageRecommendationsCircleScore.react"),{scoreType:this.props.scoreType,pageIDString:this.props.pageID}),a!=null&&a[0]!=null?b("React").jsx(b("Image.react"),{className:"_3td9 _3tdb",src:a[0].valueOf()}):null,a!=null&&a[1]!=null?b("React").jsx(b("Image.react"),{className:"_3td9 _3tdc",src:a[1].valueOf()}):null]})};return c}(b("React").Component);e.exports=a}),null);
__d("PageRecommendationsPageMetaBox.react",["cx","PageRatingConfig","PageRecommendationsCircleScoreType","PageRecommendationsScoreWithProfile.react","React","URI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("PageRecommendationsCircleScoreType").PAGE_METABOX;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.srcs;return b("React").jsxs("div",{className:"_2v_5",children:[b("React").jsx(b("PageRecommendationsScoreWithProfile.react"),{count:this.props.count,rating:this.props.rating,scoreType:h,srcs:a,pageID:this.props.pageID}),b("React").jsx("div",{className:"_2w09"+(a!=null&&a[0]!=null?" _67lb":"")+(a!=null&&a[1]!=null?" _67lc":""),children:this.$1()})]})};d.$1=function(){return b("PageRatingConfig").show_rating_circle?this.$2():this.$2()};d.$2=function(){if(this.props.rating===0)return b("React").jsx("div",{children:b("React").jsx("span",{className:"_2w0b",children:this.props.opinionCountText})});else return b("React").jsxs("div",{children:[b("React").jsx("span",{className:"_2w0a",children:this.props.ratingScaleText})," \xb7 ",b("React").jsx("span",{className:"_2w0b",children:this.props.opinionCountText})]})};return c}(b("React").Component);e.exports=a}),null);