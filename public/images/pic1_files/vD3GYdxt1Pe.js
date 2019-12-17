if (self.CavalryLogger) { CavalryLogger.start_js(["KokHE"]); }

__d("LRUKeyedCache",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3,h=function(a,b,c){this.next=null,this.prev=null,this.key=a,this.cacheVersion=b,this.value=c};a=function(){__p&&__p();function a(a,b){b===void 0&&(b=g),this.cache=new Map(),this.cacheVersion=0,this.capacity=b,this.keyFunction=a,this.head=new h("head",this.cacheVersion,null),this.tail=new h("tail",this.cacheVersion,null),this.head.next=this.tail,this.tail.prev=this.head}var b=a.prototype;b.set=function(a,b){a=this.keyFunction(a);var c=this.$1(a);c==null?(c=new h(a,this.cacheVersion,b),this.cache.set(a,c)):c.value=b;this.$2(c);this.$3();return};b.get=function(a){a=this.keyFunction(a);a=this.$1(a);if(a==null)return a;this.$2(a);return a.value};b.clear=function(){this.cacheVersion++};b.$1=function(a){var b=this.cache.get(a);if(b==null)return b;if(b.cacheVersion!=this.cacheVersion){this.$4(a);return void 0}return b};b.$2=function(a){this.$5(a),this.$6(a)};b.$6=function(a){a.prev=this.head,a.next=this.head.next,this.head.next!=null&&(this.head.next.prev=a),this.head.next=a};b.$5=function(a){a.prev!=null&&(a.prev.next=a.next),a.next!=null&&(a.next.prev=a.prev)};b.$4=function(a){var b=this.cache.get(a);if(b===void 0)return;this.$5(b);this.cache["delete"](a)};b.$3=function(){this.cache.size>this.capacity&&this.tail.prev!==null&&this.$4(this.tail.prev.key)};b.getCacheSnapshot_DEBUG=function(){return new Map(this.cache)};return a}();e.exports=a}),null);