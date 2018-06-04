// Compiled by ClojureScript 1.10.238 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22512,handler){
var map__22513 = p__22512;
var map__22513__$1 = ((((!((map__22513 == null)))?(((((map__22513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22513):map__22513);
var uri = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22513,map__22513__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22511_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22511_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22513,map__22513__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___22525 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___22525)){
var response_type_22526 = temp__5457__auto___22525;
this$__$1.responseType = cljs.core.name.call(null,response_type_22526);
} else {
}

var seq__22515_22527 = cljs.core.seq.call(null,headers);
var chunk__22516_22528 = null;
var count__22517_22529 = (0);
var i__22518_22530 = (0);
while(true){
if((i__22518_22530 < count__22517_22529)){
var vec__22519_22531 = cljs.core._nth.call(null,chunk__22516_22528,i__22518_22530);
var k_22532 = cljs.core.nth.call(null,vec__22519_22531,(0),null);
var v_22533 = cljs.core.nth.call(null,vec__22519_22531,(1),null);
this$__$1.setRequestHeader(k_22532,v_22533);


var G__22534 = seq__22515_22527;
var G__22535 = chunk__22516_22528;
var G__22536 = count__22517_22529;
var G__22537 = (i__22518_22530 + (1));
seq__22515_22527 = G__22534;
chunk__22516_22528 = G__22535;
count__22517_22529 = G__22536;
i__22518_22530 = G__22537;
continue;
} else {
var temp__5457__auto___22538 = cljs.core.seq.call(null,seq__22515_22527);
if(temp__5457__auto___22538){
var seq__22515_22539__$1 = temp__5457__auto___22538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22515_22539__$1)){
var c__4319__auto___22540 = cljs.core.chunk_first.call(null,seq__22515_22539__$1);
var G__22541 = cljs.core.chunk_rest.call(null,seq__22515_22539__$1);
var G__22542 = c__4319__auto___22540;
var G__22543 = cljs.core.count.call(null,c__4319__auto___22540);
var G__22544 = (0);
seq__22515_22527 = G__22541;
chunk__22516_22528 = G__22542;
count__22517_22529 = G__22543;
i__22518_22530 = G__22544;
continue;
} else {
var vec__22522_22545 = cljs.core.first.call(null,seq__22515_22539__$1);
var k_22546 = cljs.core.nth.call(null,vec__22522_22545,(0),null);
var v_22547 = cljs.core.nth.call(null,vec__22522_22545,(1),null);
this$__$1.setRequestHeader(k_22546,v_22547);


var G__22548 = cljs.core.next.call(null,seq__22515_22539__$1);
var G__22549 = null;
var G__22550 = (0);
var G__22551 = (0);
seq__22515_22527 = G__22548;
chunk__22516_22528 = G__22549;
count__22517_22529 = G__22550;
i__22518_22530 = G__22551;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1528121911829
