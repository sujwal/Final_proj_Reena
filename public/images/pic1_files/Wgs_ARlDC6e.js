if (self.CavalryLogger) { CavalryLogger.start_js(["vY4K\/"]); }

__d("BDOperationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BDOperationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBdSessionID=function(a){this.$1.bd_session_id=a;return this};c.setComponent=function(a){this.$1.component=a;return this};c.setDurationUs=function(a){this.$1.duration_us=a;return this};c.setExceptionMessage=function(a){this.$1.exception_message=a;return this};c.setExceptionStackTrace=function(a){this.$1.exception_stack_trace=a;return this};c.setExceptionType=function(a){this.$1.exception_type=a;return this};c.setIntValue=function(a){this.$1.int_value=a;return this};c.setLevel=function(a){this.$1.level=a;return this};c.setOperation=function(a){this.$1.operation=a;return this};c.setOperationInfo=function(a){this.$1.operation_info=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setSessionlets=function(a){this.$1.sessionlets=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={bd_session_id:!0,component:!0,duration_us:!0,exception_message:!0,exception_stack_trace:!0,exception_type:!0,int_value:!0,level:!0,operation:!0,operation_info:!0,sessionlets:!0,time:!0,weight:!0};e.exports=a}),null);