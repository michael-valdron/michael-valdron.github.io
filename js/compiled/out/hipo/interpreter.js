// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__22050){
var map__22051 = p__22050;
var map__22051__$1 = ((((!((map__22051 == null)))?(((((map__22051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22051):map__22051);
var m = map__22051__$1;
var interceptors = cljs.core.get.call(null,map__22051__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__5455__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__5455__auto__)){
var en = temp__5455__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__21937__auto__ = ((function (en,temp__5455__auto__,map__22051,map__22051__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__5455__auto___22053__$1 = (el[hn]);
if(cljs.core.truth_(temp__5455__auto___22053__$1)){
var l_22054 = temp__5455__auto___22053__$1;
el.removeEventListener(en,l_22054);
} else {
}

var temp__5457__auto__ = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var nv__$1 = temp__5457__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__5455__auto__,map__22051,map__22051__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__21937__auto__ = ((function (temp__5455__auto__,map__22051,map__22051__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__5455__auto__,map__22051,map__22051__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__5455__auto___22055 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__5455__auto___22055)){
var h_22056 = temp__5455__auto___22055;
el.appendChild(hipo.interpreter.create_child.call(null,h_22056,m));
} else {
}

var G__22057 = cljs.core.rest.call(null,v__$1);
v__$1 = G__22057;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__22058_22068 = cljs.core.seq.call(null,attrs);
var chunk__22059_22069 = null;
var count__22060_22070 = (0);
var i__22061_22071 = (0);
while(true){
if((i__22061_22071 < count__22060_22070)){
var vec__22062_22072 = cljs.core._nth.call(null,chunk__22059_22069,i__22061_22071);
var sok_22073 = cljs.core.nth.call(null,vec__22062_22072,(0),null);
var v_22074 = cljs.core.nth.call(null,vec__22062_22072,(1),null);
if(cljs.core.truth_(v_22074)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22073,null,v_22074,m);
} else {
}


var G__22075 = seq__22058_22068;
var G__22076 = chunk__22059_22069;
var G__22077 = count__22060_22070;
var G__22078 = (i__22061_22071 + (1));
seq__22058_22068 = G__22075;
chunk__22059_22069 = G__22076;
count__22060_22070 = G__22077;
i__22061_22071 = G__22078;
continue;
} else {
var temp__5457__auto___22079 = cljs.core.seq.call(null,seq__22058_22068);
if(temp__5457__auto___22079){
var seq__22058_22080__$1 = temp__5457__auto___22079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22058_22080__$1)){
var c__4319__auto___22081 = cljs.core.chunk_first.call(null,seq__22058_22080__$1);
var G__22082 = cljs.core.chunk_rest.call(null,seq__22058_22080__$1);
var G__22083 = c__4319__auto___22081;
var G__22084 = cljs.core.count.call(null,c__4319__auto___22081);
var G__22085 = (0);
seq__22058_22068 = G__22082;
chunk__22059_22069 = G__22083;
count__22060_22070 = G__22084;
i__22061_22071 = G__22085;
continue;
} else {
var vec__22065_22086 = cljs.core.first.call(null,seq__22058_22080__$1);
var sok_22087 = cljs.core.nth.call(null,vec__22065_22086,(0),null);
var v_22088 = cljs.core.nth.call(null,vec__22065_22086,(1),null);
if(cljs.core.truth_(v_22088)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22087,null,v_22088,m);
} else {
}


var G__22089 = cljs.core.next.call(null,seq__22058_22080__$1);
var G__22090 = null;
var G__22091 = (0);
var G__22092 = (0);
seq__22058_22068 = G__22089;
chunk__22059_22069 = G__22090;
count__22060_22070 = G__22091;
i__22061_22071 = G__22092;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__5455__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__22093_22109 = cljs.core.seq.call(null,nm);
var chunk__22095_22110 = null;
var count__22096_22111 = (0);
var i__22097_22112 = (0);
while(true){
if((i__22097_22112 < count__22096_22111)){
var vec__22099_22113 = cljs.core._nth.call(null,chunk__22095_22110,i__22097_22112);
var sok_22114 = cljs.core.nth.call(null,vec__22099_22113,(0),null);
var nv_22115 = cljs.core.nth.call(null,vec__22099_22113,(1),null);
var ov_22116 = cljs.core.get.call(null,om,sok_22114);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22114,ov_22116,nv_22115,m);


var G__22117 = seq__22093_22109;
var G__22118 = chunk__22095_22110;
var G__22119 = count__22096_22111;
var G__22120 = (i__22097_22112 + (1));
seq__22093_22109 = G__22117;
chunk__22095_22110 = G__22118;
count__22096_22111 = G__22119;
i__22097_22112 = G__22120;
continue;
} else {
var temp__5457__auto___22121 = cljs.core.seq.call(null,seq__22093_22109);
if(temp__5457__auto___22121){
var seq__22093_22122__$1 = temp__5457__auto___22121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22093_22122__$1)){
var c__4319__auto___22123 = cljs.core.chunk_first.call(null,seq__22093_22122__$1);
var G__22124 = cljs.core.chunk_rest.call(null,seq__22093_22122__$1);
var G__22125 = c__4319__auto___22123;
var G__22126 = cljs.core.count.call(null,c__4319__auto___22123);
var G__22127 = (0);
seq__22093_22109 = G__22124;
chunk__22095_22110 = G__22125;
count__22096_22111 = G__22126;
i__22097_22112 = G__22127;
continue;
} else {
var vec__22102_22128 = cljs.core.first.call(null,seq__22093_22122__$1);
var sok_22129 = cljs.core.nth.call(null,vec__22102_22128,(0),null);
var nv_22130 = cljs.core.nth.call(null,vec__22102_22128,(1),null);
var ov_22131 = cljs.core.get.call(null,om,sok_22129);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_22129,ov_22131,nv_22130,m);


var G__22132 = cljs.core.next.call(null,seq__22093_22122__$1);
var G__22133 = null;
var G__22134 = (0);
var G__22135 = (0);
seq__22093_22109 = G__22132;
chunk__22095_22110 = G__22133;
count__22096_22111 = G__22134;
i__22097_22112 = G__22135;
continue;
}
} else {
}
}
break;
}

var seq__22105 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__22106 = null;
var count__22107 = (0);
var i__22108 = (0);
while(true){
if((i__22108 < count__22107)){
var sok = cljs.core._nth.call(null,chunk__22106,i__22108);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__22136 = seq__22105;
var G__22137 = chunk__22106;
var G__22138 = count__22107;
var G__22139 = (i__22108 + (1));
seq__22105 = G__22136;
chunk__22106 = G__22137;
count__22107 = G__22138;
i__22108 = G__22139;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22105);
if(temp__5457__auto__){
var seq__22105__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22105__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22105__$1);
var G__22140 = cljs.core.chunk_rest.call(null,seq__22105__$1);
var G__22141 = c__4319__auto__;
var G__22142 = cljs.core.count.call(null,c__4319__auto__);
var G__22143 = (0);
seq__22105 = G__22140;
chunk__22106 = G__22141;
count__22107 = G__22142;
i__22108 = G__22143;
continue;
} else {
var sok = cljs.core.first.call(null,seq__22105__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__22144 = cljs.core.next.call(null,seq__22105__$1);
var G__22145 = null;
var G__22146 = (0);
var G__22147 = (0);
seq__22105 = G__22144;
chunk__22106 = G__22145;
count__22107 = G__22146;
i__22108 = G__22147;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__22148(s__22149){
return (new cljs.core.LazySeq(null,(function (){
var s__22149__$1 = s__22149;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22149__$1);
if(temp__5457__auto__){
var s__22149__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22149__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22149__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22151 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22150 = (0);
while(true){
if((i__22150 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__22150);
cljs.core.chunk_append.call(null,b__22151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__22152 = (i__22150 + (1));
i__22150 = G__22152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22151),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__22148.call(null,cljs.core.chunk_rest.call(null,s__22149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22151),null);
}
} else {
var ih = cljs.core.first.call(null,s__22149__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__22148.call(null,cljs.core.rest.call(null,s__22149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__4292__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__4292__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__22153){
var map__22154 = p__22153;
var map__22154__$1 = ((((!((map__22154 == null)))?(((((map__22154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22154):map__22154);
var m = map__22154__$1;
var interceptors = cljs.core.get.call(null,map__22154__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__22156_22178 = cljs.core.seq.call(null,nm);
var chunk__22157_22179 = null;
var count__22158_22180 = (0);
var i__22159_22181 = (0);
while(true){
if((i__22159_22181 < count__22158_22180)){
var vec__22160_22182 = cljs.core._nth.call(null,chunk__22157_22179,i__22159_22181);
var i_22183 = cljs.core.nth.call(null,vec__22160_22182,(0),null);
var vec__22163_22184 = cljs.core.nth.call(null,vec__22160_22182,(1),null);
var ii_22185 = cljs.core.nth.call(null,vec__22163_22184,(0),null);
var h_22186 = cljs.core.nth.call(null,vec__22163_22184,(1),null);
var temp__5455__auto___22187 = cljs.core.get.call(null,om,i_22183);
if(cljs.core.truth_(temp__5455__auto___22187)){
var vec__22166_22188 = temp__5455__auto___22187;
var iii_22189 = cljs.core.nth.call(null,vec__22166_22188,(0),null);
var oh_22190 = cljs.core.nth.call(null,vec__22166_22188,(1),null);
var cel_22191 = cljs.core.nth.call(null,cs,iii_22189);
if((ii_22185 === iii_22189)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_22191,oh_22190,h_22186,m);
} else {
var b__21937__auto___22192 = ((function (seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,cel_22191,vec__22166_22188,iii_22189,oh_22190,temp__5455__auto___22187,vec__22160_22182,i_22183,vec__22163_22184,ii_22185,h_22186,om,nm,cs,map__22154,map__22154__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_22191);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_22190,h_22186,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_22185,ncel);
});})(seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,cel_22191,vec__22166_22188,iii_22189,oh_22190,temp__5455__auto___22187,vec__22160_22182,i_22183,vec__22163_22184,ii_22185,h_22186,om,nm,cs,map__22154,map__22154__$1,m,interceptors))
;
var v__21938__auto___22193 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22193)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22193)))){
b__21937__auto___22192.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22192,v__21938__auto___22193,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22186,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22185], null));
}
}
} else {
var b__21937__auto___22194 = ((function (seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,temp__5455__auto___22187,vec__22160_22182,i_22183,vec__22163_22184,ii_22185,h_22186,om,nm,cs,map__22154,map__22154__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_22185,hipo.interpreter.create_child.call(null,h_22186,m));
});})(seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,temp__5455__auto___22187,vec__22160_22182,i_22183,vec__22163_22184,ii_22185,h_22186,om,nm,cs,map__22154,map__22154__$1,m,interceptors))
;
var v__21938__auto___22195 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22195)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22195)))){
b__21937__auto___22194.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22194,v__21938__auto___22195,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22186,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22185], null));
}
}


var G__22196 = seq__22156_22178;
var G__22197 = chunk__22157_22179;
var G__22198 = count__22158_22180;
var G__22199 = (i__22159_22181 + (1));
seq__22156_22178 = G__22196;
chunk__22157_22179 = G__22197;
count__22158_22180 = G__22198;
i__22159_22181 = G__22199;
continue;
} else {
var temp__5457__auto___22200 = cljs.core.seq.call(null,seq__22156_22178);
if(temp__5457__auto___22200){
var seq__22156_22201__$1 = temp__5457__auto___22200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22156_22201__$1)){
var c__4319__auto___22202 = cljs.core.chunk_first.call(null,seq__22156_22201__$1);
var G__22203 = cljs.core.chunk_rest.call(null,seq__22156_22201__$1);
var G__22204 = c__4319__auto___22202;
var G__22205 = cljs.core.count.call(null,c__4319__auto___22202);
var G__22206 = (0);
seq__22156_22178 = G__22203;
chunk__22157_22179 = G__22204;
count__22158_22180 = G__22205;
i__22159_22181 = G__22206;
continue;
} else {
var vec__22169_22207 = cljs.core.first.call(null,seq__22156_22201__$1);
var i_22208 = cljs.core.nth.call(null,vec__22169_22207,(0),null);
var vec__22172_22209 = cljs.core.nth.call(null,vec__22169_22207,(1),null);
var ii_22210 = cljs.core.nth.call(null,vec__22172_22209,(0),null);
var h_22211 = cljs.core.nth.call(null,vec__22172_22209,(1),null);
var temp__5455__auto___22212 = cljs.core.get.call(null,om,i_22208);
if(cljs.core.truth_(temp__5455__auto___22212)){
var vec__22175_22213 = temp__5455__auto___22212;
var iii_22214 = cljs.core.nth.call(null,vec__22175_22213,(0),null);
var oh_22215 = cljs.core.nth.call(null,vec__22175_22213,(1),null);
var cel_22216 = cljs.core.nth.call(null,cs,iii_22214);
if((ii_22210 === iii_22214)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_22216,oh_22215,h_22211,m);
} else {
var b__21937__auto___22217 = ((function (seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,cel_22216,vec__22175_22213,iii_22214,oh_22215,temp__5455__auto___22212,vec__22169_22207,i_22208,vec__22172_22209,ii_22210,h_22211,seq__22156_22201__$1,temp__5457__auto___22200,om,nm,cs,map__22154,map__22154__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_22216);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_22215,h_22211,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_22210,ncel);
});})(seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,cel_22216,vec__22175_22213,iii_22214,oh_22215,temp__5455__auto___22212,vec__22169_22207,i_22208,vec__22172_22209,ii_22210,h_22211,seq__22156_22201__$1,temp__5457__auto___22200,om,nm,cs,map__22154,map__22154__$1,m,interceptors))
;
var v__21938__auto___22218 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22218)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22218)))){
b__21937__auto___22217.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22217,v__21938__auto___22218,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22211,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22210], null));
}
}
} else {
var b__21937__auto___22219 = ((function (seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,temp__5455__auto___22212,vec__22169_22207,i_22208,vec__22172_22209,ii_22210,h_22211,seq__22156_22201__$1,temp__5457__auto___22200,om,nm,cs,map__22154,map__22154__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_22210,hipo.interpreter.create_child.call(null,h_22211,m));
});})(seq__22156_22178,chunk__22157_22179,count__22158_22180,i__22159_22181,temp__5455__auto___22212,vec__22169_22207,i_22208,vec__22172_22209,ii_22210,h_22211,seq__22156_22201__$1,temp__5457__auto___22200,om,nm,cs,map__22154,map__22154__$1,m,interceptors))
;
var v__21938__auto___22220 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22220)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22220)))){
b__21937__auto___22219.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22219,v__21938__auto___22220,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_22211,new cljs.core.Keyword(null,"index","index",-1531685915),ii_22210], null));
}
}


var G__22221 = cljs.core.next.call(null,seq__22156_22201__$1);
var G__22222 = null;
var G__22223 = (0);
var G__22224 = (0);
seq__22156_22178 = G__22221;
chunk__22157_22179 = G__22222;
count__22158_22180 = G__22223;
i__22159_22181 = G__22224;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__21937__auto__ = ((function (d,om,nm,cs,map__22154,map__22154__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__22154,map__22154__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__22225){
var map__22226 = p__22225;
var map__22226__$1 = ((((!((map__22226 == null)))?(((((map__22226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22226):map__22226);
var m = map__22226__$1;
var interceptors = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__21937__auto___22228 = ((function (oc,nc,d,map__22226,map__22226__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__22226,map__22226__$1,m,interceptors))
;
var v__21938__auto___22229 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22229)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22229)))){
b__21937__auto___22228.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22228,v__21938__auto___22229,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___22230 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_22231 = (0);
while(true){
if((i_22231 < n__4376__auto___22230)){
var ov_22232 = cljs.core.nth.call(null,och,i_22231);
var nv_22233 = cljs.core.nth.call(null,nch,i_22231);
if(!((((ov_22232 == null)) && ((nv_22233 == null))))){
if((ov_22232 == null)){
var b__21937__auto___22234 = ((function (i_22231,ov_22232,nv_22233,n__4376__auto___22230,oc,nc,d,map__22226,map__22226__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_22231,hipo.interpreter.create_child.call(null,nv_22233,m));
});})(i_22231,ov_22232,nv_22233,n__4376__auto___22230,oc,nc,d,map__22226,map__22226__$1,m,interceptors))
;
var v__21938__auto___22235 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22235)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22235)))){
b__21937__auto___22234.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22234,v__21938__auto___22235,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_22233,new cljs.core.Keyword(null,"index","index",-1531685915),i_22231], null));
}
} else {
if((nv_22233 == null)){
var b__21937__auto___22236 = ((function (i_22231,ov_22232,nv_22233,n__4376__auto___22230,oc,nc,d,map__22226,map__22226__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_22231);
});})(i_22231,ov_22232,nv_22233,n__4376__auto___22230,oc,nc,d,map__22226,map__22226__$1,m,interceptors))
;
var v__21938__auto___22237 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22237)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22237)))){
b__21937__auto___22236.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22236,v__21938__auto___22237,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_22231], null));
}
} else {
var temp__5455__auto___22238 = hipo.dom.child.call(null,el,i_22231);
if(cljs.core.truth_(temp__5455__auto___22238)){
var cel_22239 = temp__5455__auto___22238;
hipo.interpreter.reconciliate_BANG_.call(null,cel_22239,ov_22232,nv_22233,m);
} else {
}

}
}
} else {
}

var G__22240 = (i_22231 + (1));
i_22231 = G__22240;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__5455__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__5455__auto__)){
var h = temp__5455__auto__;
var b__21937__auto__ = ((function (h,temp__5455__auto__,oc,nc,d,map__22226,map__22226__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__5455__auto__,oc,nc,d,map__22226,map__22226__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__21937__auto___22241 = ((function (f,cs,oc,nc,d,map__22226,map__22226__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__22226,map__22226__$1,m,interceptors))
;
var v__21938__auto___22242 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22242)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22242)))){
b__21937__auto___22241.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22241,v__21938__auto___22242,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__22243){
var map__22244 = p__22243;
var map__22244__$1 = ((((!((map__22244 == null)))?(((((map__22244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22244):map__22244);
var m = map__22244__$1;
var interceptors = cljs.core.get.call(null,map__22244__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__21937__auto__ = ((function (map__22244,map__22244__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__22244,map__22244__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__22246){
var map__22247 = p__22246;
var map__22247__$1 = ((((!((map__22247 == null)))?(((((map__22247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22247):map__22247);
var m = map__22247__$1;
var interceptors = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__21937__auto__ = ((function (nel,map__22247,map__22247__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__22247,map__22247__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__21937__auto___22249 = ((function (om,nm,och,nch,map__22247,map__22247__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__22247,map__22247__$1,m,interceptors))
;
var v__21938__auto___22250 = interceptors;
if(((cljs.core.not.call(null,v__21938__auto___22250)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto___22250)))){
b__21937__auto___22249.call(null);
} else {
hipo.interceptor.call.call(null,b__21937__auto___22249,v__21938__auto___22250,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__22251){
var map__22252 = p__22251;
var map__22252__$1 = ((((!((map__22252 == null)))?(((((map__22252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22252):map__22252);
var m = map__22252__$1;
var interceptors = cljs.core.get.call(null,map__22252__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__21937__auto__ = ((function (map__22252,map__22252__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__21937__auto__ = ((function (map__22252,map__22252__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__22252,map__22252__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__22252,map__22252__$1,m,interceptors))
;
var v__21938__auto__ = interceptors;
if(((cljs.core.not.call(null,v__21938__auto__)) || (cljs.core.empty_QMARK_.call(null,v__21938__auto__)))){
return b__21937__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__21937__auto__,v__21938__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1527842010374
