if (self.CavalryLogger) { CavalryLogger.start_js(["Xe3sT"]); }

__d("BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",name:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments$normalization",metadata:{derivedFrom:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments"},selections:[{kind:"ScalarField",alias:null,name:"buyer_comments",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]};e.exports=a}),null);
__d("BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments",type:"MarketplaceCannedComments",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"buyer_comments",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]};e.exports=a}),null);
__d("MarketplaceBSGButton",["ix","cx","fbt","CurrentUser","FDSButton.react","Image.react","React","XUIButton.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=Object.freeze({REGULAR:"regular",EXPANDED:"expanded",COMMERCE_ATTACHMENT:"commerce-attachment",LOGGED_OUT:"logged-out"});a=b("React").forwardRef(function(a,c){switch(a.style){case j.LOGGED_OUT:return b("React").jsx(b("XUIButton.react"),{image:b("CurrentUser").isWorkUser()?b("React").jsx(b("Image.react"),{src:g("122283")}):b("React").jsx(b("Image.react"),{className:"_49he",src:"/images/groups/sell/chat-to-buy.png"}),label:i._("Message Seller"),ajaxify:a.uri,href:a.href,rel:a.rel,size:"medium"});case j.COMMERCE_ATTACHMENT:return b("React").jsx(b("FDSButton.react"),{label:i._("Message"),size:"medium",onClick:a.onClick});case j.EXPANDED:return b("React").jsx("div",{className:"_3ass",children:b("React").jsx(b("XUIButton.react"),{className:"_4xrw",ref:c,id:"chatToBuyExpand",use:"confirm",image:b("CurrentUser").isWorkUser()?b("React").jsx(b("Image.react"),{className:"_3qzp",src:g("114275")}):b("React").jsx(b("Image.react"),{className:"_44h-",src:"/images/groups/sell/message_seller_icon.png"}),label:b("React").jsx("span",{className:"_4xrx",children:i._("Message Seller")}),onClick:a.onClick})});case j.REGULAR:default:return b("React").jsx(b("XUIButton.react"),{ref:c,image:b("CurrentUser").isWorkUser()?b("React").jsx(b("Image.react"),{src:g("122283")}):b("React").jsx(b("Image.react"),{className:"_49he",src:"/images/groups/sell/chat-to-buy.png"}),label:i._("Message Seller"),onClick:a.onClick,size:"medium"})}});e.exports={ButtonStyle:j,MarketplaceBSGMessageSellerButton:a}}),null);
__d("LaunchMessageSellerDialogFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("launch_message_seller_dialog");e.exports=a}),null);
__d("MarketplaceBSGMessageSellerButtonServerCallableContainer.react",["LaunchMessageSellerDialogFalcoEvent","MarketplaceBSGButton","MarketplaceLoggingSurface","MarketplaceMessageButton","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MarketplaceBSGButton").ButtonStyle,h=b("MarketplaceBSGButton").MarketplaceBSGMessageSellerButton;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$2=function(){var a=d.props,c=a.onClick,e=a.tracking,f=a.surface,g=a.postID;if(g==null)return;b("LaunchMessageSellerDialogFalcoEvent").log(function(){var a;return{post_id:g,action:"contact_button_clicked",surface:f,tracking:(a=e)!=null?a:""}});c()};b("MarketplaceLoggingSurface").setCurrentSurface(d.$1(c.surface));return d}var d=c.prototype;d.$1=function(a){switch(a){case"product_detail":return"product_details";case"popover_permalink":return"permalink";case"feed_story":case"newsfeed":return"newsfeed";case"group_mall":default:return"buy_sell_group_mall"}};d.render=function(){return b("React").jsx(h,{style:this.props.style,onClick:this.$2,ref:"chat_to_buy"})};return c}(b("React").Component);var i=b("MarketplaceMessageButton")(a,{uiComponent:"contact_seller_button"});c=function(a){return a.loginURI!=null?b("React").jsx(h,{style:g.LOGGED_OUT,uri:a.loginURI,rel:"async-post",href:"#"}):b("React").jsx(i,{callToActions:a.callToActions,categoryName:a.categoryName,forSaleItemID:a.forSaleItemID,name:a.sellerName,surface:a.surface,style:a.style,loginURI:a.loginURI,groupID:a.groupID,tracking:a.tracking,postID:a.postID})};e.exports=c}),null);
__d("MarketplaceCommerceAttachment.react",["cx","DOMContainer.react","FlexLayout.react","React","TetraTextPairing.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c,d=a.header,e=a.title,f=a.body;a=a.ctaButton;return(c=b("React")).jsx("div",{className:"_8g_7 _8g_8",children:c.jsxs(b("FlexLayout.react"),{direction:"horizontal",justify:"all",align:"center",children:[c.jsx(b("FlexLayout.react"),{direction:"vertical",children:c.jsx(b("TetraTextPairing.react"),{level:3,headline:c.jsx(b("DOMContainer.react"),{children:e}),headlineLineLimit:2,meta:c.jsx(b("DOMContainer.react"),{children:d}),metaLineLimit:1,metaLocation:"above",body:c.jsx(b("DOMContainer.react"),{children:f}),bodyLineLimit:1})}),c.jsx(b("FlexLayout.react"),{direction:"vertical",children:a!=null?b("React").jsx(b("DOMContainer.react"),{children:a}):null})]})})}e.exports=a}),null);
__d("MarketplaceFeedStoryInterceptor",["csx","Arbiter","Bootloader","CSS","DOM","Event","FBLogger","Parent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();var d=b("DOM").scry(a,"._l52")[0],e=b("DOM").scry(a,"._2lc5")[0];if(d==null||e==null)return!1;d=d.dataset;var f=d.imp,g=d.fsii;(f||g)&&b("Bootloader").loadModules(["MarketplacePermalinkRender","MarketplaceSnowliftRoute"],function(d,f){b("Arbiter").inform("GroupCommerceProductDetail.OPEN",{for_sale_item_id:g,feedStoryRoot:a});var h=0;c.parentElement!=null&&c.parentElement.childNodes!=null&&(h=Array.prototype.indexOf.call(c.parentElement.childNodes,c));d.renderPermalinkModal(g,e,new f(),h)},"MarketplaceFeedStoryInterceptor");return!0}var i=new Map();b("Arbiter").subscribe("pre_page_transition",function(){i.forEach(function(a,b,c){a!=null&&typeof a.remove==="function"&&(b==null?void 0:b.isConnected)!==!0&&(a.remove(),c["delete"](b))})});e.exports={register:function(a){__p&&__p();var c=b("Parent").bySelector(a,"._5pat");if(c==null||i.has(c))return!1;var d=b("Event").listen(c,"click",function(a){__p&&__p();var d=null;if(a.button>=2)return;else a.target instanceof HTMLElement?d=a.target:a.srcElement instanceof HTMLElement&&(d=a.srcElement);if(d==null)return;d=b("Parent").byTag(d,"A");if(d instanceof HTMLAnchorElement){if(b("CSS").matchesSelector(d,"._2rn3"))return;if(b("CSS").matchesSelector(d,"._xcx")||b("CSS").matchesSelector(d,"._4-eo")||b("CSS").matchesSelector(d,"._308z")){d=h(c,d);d?(a.preventDefault(),a.stopPropagation()):b("FBLogger")("marketplace").warn("handleSalePost not handled!")}}});i.set(a,d)}}}),null);
__d("BsgCannedCommentsUFI2ComposerPlugin.react",["cx","ContentState","EditorState","React","RelayModern","ShimButton.react","BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React").useEffect,j=b("React").useState;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;function k(a,c){a.inputProps.onComposerStateChange(function(a){var d=a.inputState;switch(d.__type){case"editor-state-based":d=babelHelpers["extends"]({},d,{editorState:b("EditorState").createWithContent(b("ContentState").createFromText(c))});return babelHelpers["extends"]({},a,{inputState:d});case"plain-text":return babelHelpers["extends"]({},a,{inputState:{__type:"plain-text",selectionOffsets:null,text:c}})}})}function a(a){__p&&__p();var c=j(!1),d=c[0],e=c[1];c=j(!1);var f=c[0],g=c[1];c=j(!1);var h=c[0],l=c[1];i(function(){a.focused&&!h&&l(!0)},[a.focused,h]);i(function(){d&&a.inputProps.composerState.inputState.__type==="editor-state-based"&&(a.inputProps.onCommit(),e(!1),g(!0))},[a.inputProps.composerState.inputState,d,a.inputProps]);function m(b){k(a,b),e(!0)}function n(c){var d;d=((d=a.marketplaceCannedComments)==null?void 0:d.buyer_comments)||[];return b("React").jsx("div",{className:"_7s21"+(h?" _7v8m":""),children:d.map(function(a){return b("React").jsx(b("ShimButton.react"),{onClick:function(){return m(a.toString())},children:b("React").jsx("div",{className:"_7s22"+(c==="after"?" _7s23":"")+(c==="before"?" _7s24":""),children:a})},a)})})}return b("React").jsx(b("React").Fragment,{children:f?null:n("before")})}e.exports=c(a,{marketplaceCannedComments:h!==void 0?h:h=b("BsgCannedCommentsUFI2ComposerPlugin_marketplaceCannedComments.graphql")})}),null);