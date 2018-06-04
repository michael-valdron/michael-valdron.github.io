// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__23303){
var map__23304 = p__23303;
var map__23304__$1 = ((((!((map__23304 == null)))?(((((map__23304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23304):map__23304);
var m = map__23304__$1;
var interceptors = cljs.core.get.call(null,map__23304__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__5455__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__5455__auto__)){
var en = temp__5455__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__22942__auto__ = ((function (en,temp__5455__auto__,map__23304,map__23304__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__5455__auto___23306__$1 = (el[hn]);
if(cljs.core.truth_(temp__5455__auto___23306__$1)){
var l_23307 = temp__5455__auto___23306__$1;
el.removeEventListener(en,l_23307);
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
});})(en,temp__5455__auto__,map__23304,map__23304__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__22942__auto__ = ((function (temp__5455__auto__,map__23304,map__23304__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__5455__auto__,map__23304,map__23304__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
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
var temp__5455__auto___23308 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__5455__auto___23308)){
var h_23309 = temp__5455__auto___23308;
el.appendChild(hipo.interpreter.create_child.call(null,h_23309,m));
} else {
}

var G__23310 = cljs.core.rest.call(null,v__$1);
v__$1 = G__23310;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__23311_23321 = cljs.core.seq.call(null,attrs);
var chunk__23312_23322 = null;
var count__23313_23323 = (0);
var i__23314_23324 = (0);
while(true){
if((i__23314_23324 < count__23313_23323)){
var vec__23315_23325 = cljs.core._nth.call(null,chunk__23312_23322,i__23314_23324);
var sok_23326 = cljs.core.nth.call(null,vec__23315_23325,(0),null);
var v_23327 = cljs.core.nth.call(null,vec__23315_23325,(1),null);
if(cljs.core.truth_(v_23327)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_23326,null,v_23327,m);
} else {
}


var G__23328 = seq__23311_23321;
var G__23329 = chunk__23312_23322;
var G__23330 = count__23313_23323;
var G__23331 = (i__23314_23324 + (1));
seq__23311_23321 = G__23328;
chunk__23312_23322 = G__23329;
count__23313_23323 = G__23330;
i__23314_23324 = G__23331;
continue;
} else {
var temp__5457__auto___23332 = cljs.core.seq.call(null,seq__23311_23321);
if(temp__5457__auto___23332){
var seq__23311_23333__$1 = temp__5457__auto___23332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23311_23333__$1)){
var c__4319__auto___23334 = cljs.core.chunk_first.call(null,seq__23311_23333__$1);
var G__23335 = cljs.core.chunk_rest.call(null,seq__23311_23333__$1);
var G__23336 = c__4319__auto___23334;
var G__23337 = cljs.core.count.call(null,c__4319__auto___23334);
var G__23338 = (0);
seq__23311_23321 = G__23335;
chunk__23312_23322 = G__23336;
count__23313_23323 = G__23337;
i__23314_23324 = G__23338;
continue;
} else {
var vec__23318_23339 = cljs.core.first.call(null,seq__23311_23333__$1);
var sok_23340 = cljs.core.nth.call(null,vec__23318_23339,(0),null);
var v_23341 = cljs.core.nth.call(null,vec__23318_23339,(1),null);
if(cljs.core.truth_(v_23341)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_23340,null,v_23341,m);
} else {
}


var G__23342 = cljs.core.next.call(null,seq__23311_23333__$1);
var G__23343 = null;
var G__23344 = (0);
var G__23345 = (0);
seq__23311_23321 = G__23342;
chunk__23312_23322 = G__23343;
count__23313_23323 = G__23344;
i__23314_23324 = G__23345;
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
var seq__23346_23362 = cljs.core.seq.call(null,nm);
var chunk__23348_23363 = null;
var count__23349_23364 = (0);
var i__23350_23365 = (0);
while(true){
if((i__23350_23365 < count__23349_23364)){
var vec__23352_23366 = cljs.core._nth.call(null,chunk__23348_23363,i__23350_23365);
var sok_23367 = cljs.core.nth.call(null,vec__23352_23366,(0),null);
var nv_23368 = cljs.core.nth.call(null,vec__23352_23366,(1),null);
var ov_23369 = cljs.core.get.call(null,om,sok_23367);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_23367,ov_23369,nv_23368,m);


var G__23370 = seq__23346_23362;
var G__23371 = chunk__23348_23363;
var G__23372 = count__23349_23364;
var G__23373 = (i__23350_23365 + (1));
seq__23346_23362 = G__23370;
chunk__23348_23363 = G__23371;
count__23349_23364 = G__23372;
i__23350_23365 = G__23373;
continue;
} else {
var temp__5457__auto___23374 = cljs.core.seq.call(null,seq__23346_23362);
if(temp__5457__auto___23374){
var seq__23346_23375__$1 = temp__5457__auto___23374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23346_23375__$1)){
var c__4319__auto___23376 = cljs.core.chunk_first.call(null,seq__23346_23375__$1);
var G__23377 = cljs.core.chunk_rest.call(null,seq__23346_23375__$1);
var G__23378 = c__4319__auto___23376;
var G__23379 = cljs.core.count.call(null,c__4319__auto___23376);
var G__23380 = (0);
seq__23346_23362 = G__23377;
chunk__23348_23363 = G__23378;
count__23349_23364 = G__23379;
i__23350_23365 = G__23380;
continue;
} else {
var vec__23355_23381 = cljs.core.first.call(null,seq__23346_23375__$1);
var sok_23382 = cljs.core.nth.call(null,vec__23355_23381,(0),null);
var nv_23383 = cljs.core.nth.call(null,vec__23355_23381,(1),null);
var ov_23384 = cljs.core.get.call(null,om,sok_23382);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_23382,ov_23384,nv_23383,m);


var G__23385 = cljs.core.next.call(null,seq__23346_23375__$1);
var G__23386 = null;
var G__23387 = (0);
var G__23388 = (0);
seq__23346_23362 = G__23385;
chunk__23348_23363 = G__23386;
count__23349_23364 = G__23387;
i__23350_23365 = G__23388;
continue;
}
} else {
}
}
break;
}

var seq__23358 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__23359 = null;
var count__23360 = (0);
var i__23361 = (0);
while(true){
if((i__23361 < count__23360)){
var sok = cljs.core._nth.call(null,chunk__23359,i__23361);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__23389 = seq__23358;
var G__23390 = chunk__23359;
var G__23391 = count__23360;
var G__23392 = (i__23361 + (1));
seq__23358 = G__23389;
chunk__23359 = G__23390;
count__23360 = G__23391;
i__23361 = G__23392;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23358);
if(temp__5457__auto__){
var seq__23358__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23358__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23358__$1);
var G__23393 = cljs.core.chunk_rest.call(null,seq__23358__$1);
var G__23394 = c__4319__auto__;
var G__23395 = cljs.core.count.call(null,c__4319__auto__);
var G__23396 = (0);
seq__23358 = G__23393;
chunk__23359 = G__23394;
count__23360 = G__23395;
i__23361 = G__23396;
continue;
} else {
var sok = cljs.core.first.call(null,seq__23358__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__23397 = cljs.core.next.call(null,seq__23358__$1);
var G__23398 = null;
var G__23399 = (0);
var G__23400 = (0);
seq__23358 = G__23397;
chunk__23359 = G__23398;
count__23360 = G__23399;
i__23361 = G__23400;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__23401(s__23402){
return (new cljs.core.LazySeq(null,(function (){
var s__23402__$1 = s__23402;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__23402__$1);
if(temp__5457__auto__){
var s__23402__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23402__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__23402__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__23404 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__23403 = (0);
while(true){
if((i__23403 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__23403);
cljs.core.chunk_append.call(null,b__23404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__23405 = (i__23403 + (1));
i__23403 = G__23405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23404),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__23401.call(null,cljs.core.chunk_rest.call(null,s__23402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23404),null);
}
} else {
var ih = cljs.core.first.call(null,s__23402__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__23401.call(null,cljs.core.rest.call(null,s__23402__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__23406){
var map__23407 = p__23406;
var map__23407__$1 = ((((!((map__23407 == null)))?(((((map__23407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23407):map__23407);
var m = map__23407__$1;
var interceptors = cljs.core.get.call(null,map__23407__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__23409_23431 = cljs.core.seq.call(null,nm);
var chunk__23410_23432 = null;
var count__23411_23433 = (0);
var i__23412_23434 = (0);
while(true){
if((i__23412_23434 < count__23411_23433)){
var vec__23413_23435 = cljs.core._nth.call(null,chunk__23410_23432,i__23412_23434);
var i_23436 = cljs.core.nth.call(null,vec__23413_23435,(0),null);
var vec__23416_23437 = cljs.core.nth.call(null,vec__23413_23435,(1),null);
var ii_23438 = cljs.core.nth.call(null,vec__23416_23437,(0),null);
var h_23439 = cljs.core.nth.call(null,vec__23416_23437,(1),null);
var temp__5455__auto___23440 = cljs.core.get.call(null,om,i_23436);
if(cljs.core.truth_(temp__5455__auto___23440)){
var vec__23419_23441 = temp__5455__auto___23440;
var iii_23442 = cljs.core.nth.call(null,vec__23419_23441,(0),null);
var oh_23443 = cljs.core.nth.call(null,vec__23419_23441,(1),null);
var cel_23444 = cljs.core.nth.call(null,cs,iii_23442);
if((ii_23438 === iii_23442)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_23444,oh_23443,h_23439,m);
} else {
var b__22942__auto___23445 = ((function (seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,cel_23444,vec__23419_23441,iii_23442,oh_23443,temp__5455__auto___23440,vec__23413_23435,i_23436,vec__23416_23437,ii_23438,h_23439,om,nm,cs,map__23407,map__23407__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_23444);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_23443,h_23439,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_23438,ncel);
});})(seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,cel_23444,vec__23419_23441,iii_23442,oh_23443,temp__5455__auto___23440,vec__23413_23435,i_23436,vec__23416_23437,ii_23438,h_23439,om,nm,cs,map__23407,map__23407__$1,m,interceptors))
;
var v__22943__auto___23446 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23446)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23446)))){
b__22942__auto___23445.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23445,v__22943__auto___23446,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_23439,new cljs.core.Keyword(null,"index","index",-1531685915),ii_23438], null));
}
}
} else {
var b__22942__auto___23447 = ((function (seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,temp__5455__auto___23440,vec__23413_23435,i_23436,vec__23416_23437,ii_23438,h_23439,om,nm,cs,map__23407,map__23407__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_23438,hipo.interpreter.create_child.call(null,h_23439,m));
});})(seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,temp__5455__auto___23440,vec__23413_23435,i_23436,vec__23416_23437,ii_23438,h_23439,om,nm,cs,map__23407,map__23407__$1,m,interceptors))
;
var v__22943__auto___23448 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23448)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23448)))){
b__22942__auto___23447.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23447,v__22943__auto___23448,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_23439,new cljs.core.Keyword(null,"index","index",-1531685915),ii_23438], null));
}
}


var G__23449 = seq__23409_23431;
var G__23450 = chunk__23410_23432;
var G__23451 = count__23411_23433;
var G__23452 = (i__23412_23434 + (1));
seq__23409_23431 = G__23449;
chunk__23410_23432 = G__23450;
count__23411_23433 = G__23451;
i__23412_23434 = G__23452;
continue;
} else {
var temp__5457__auto___23453 = cljs.core.seq.call(null,seq__23409_23431);
if(temp__5457__auto___23453){
var seq__23409_23454__$1 = temp__5457__auto___23453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23409_23454__$1)){
var c__4319__auto___23455 = cljs.core.chunk_first.call(null,seq__23409_23454__$1);
var G__23456 = cljs.core.chunk_rest.call(null,seq__23409_23454__$1);
var G__23457 = c__4319__auto___23455;
var G__23458 = cljs.core.count.call(null,c__4319__auto___23455);
var G__23459 = (0);
seq__23409_23431 = G__23456;
chunk__23410_23432 = G__23457;
count__23411_23433 = G__23458;
i__23412_23434 = G__23459;
continue;
} else {
var vec__23422_23460 = cljs.core.first.call(null,seq__23409_23454__$1);
var i_23461 = cljs.core.nth.call(null,vec__23422_23460,(0),null);
var vec__23425_23462 = cljs.core.nth.call(null,vec__23422_23460,(1),null);
var ii_23463 = cljs.core.nth.call(null,vec__23425_23462,(0),null);
var h_23464 = cljs.core.nth.call(null,vec__23425_23462,(1),null);
var temp__5455__auto___23465 = cljs.core.get.call(null,om,i_23461);
if(cljs.core.truth_(temp__5455__auto___23465)){
var vec__23428_23466 = temp__5455__auto___23465;
var iii_23467 = cljs.core.nth.call(null,vec__23428_23466,(0),null);
var oh_23468 = cljs.core.nth.call(null,vec__23428_23466,(1),null);
var cel_23469 = cljs.core.nth.call(null,cs,iii_23467);
if((ii_23463 === iii_23467)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_23469,oh_23468,h_23464,m);
} else {
var b__22942__auto___23470 = ((function (seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,cel_23469,vec__23428_23466,iii_23467,oh_23468,temp__5455__auto___23465,vec__23422_23460,i_23461,vec__23425_23462,ii_23463,h_23464,seq__23409_23454__$1,temp__5457__auto___23453,om,nm,cs,map__23407,map__23407__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_23469);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_23468,h_23464,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_23463,ncel);
});})(seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,cel_23469,vec__23428_23466,iii_23467,oh_23468,temp__5455__auto___23465,vec__23422_23460,i_23461,vec__23425_23462,ii_23463,h_23464,seq__23409_23454__$1,temp__5457__auto___23453,om,nm,cs,map__23407,map__23407__$1,m,interceptors))
;
var v__22943__auto___23471 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23471)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23471)))){
b__22942__auto___23470.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23470,v__22943__auto___23471,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_23464,new cljs.core.Keyword(null,"index","index",-1531685915),ii_23463], null));
}
}
} else {
var b__22942__auto___23472 = ((function (seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,temp__5455__auto___23465,vec__23422_23460,i_23461,vec__23425_23462,ii_23463,h_23464,seq__23409_23454__$1,temp__5457__auto___23453,om,nm,cs,map__23407,map__23407__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_23463,hipo.interpreter.create_child.call(null,h_23464,m));
});})(seq__23409_23431,chunk__23410_23432,count__23411_23433,i__23412_23434,temp__5455__auto___23465,vec__23422_23460,i_23461,vec__23425_23462,ii_23463,h_23464,seq__23409_23454__$1,temp__5457__auto___23453,om,nm,cs,map__23407,map__23407__$1,m,interceptors))
;
var v__22943__auto___23473 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23473)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23473)))){
b__22942__auto___23472.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23472,v__22943__auto___23473,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_23464,new cljs.core.Keyword(null,"index","index",-1531685915),ii_23463], null));
}
}


var G__23474 = cljs.core.next.call(null,seq__23409_23454__$1);
var G__23475 = null;
var G__23476 = (0);
var G__23477 = (0);
seq__23409_23431 = G__23474;
chunk__23410_23432 = G__23475;
count__23411_23433 = G__23476;
i__23412_23434 = G__23477;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__22942__auto__ = ((function (d,om,nm,cs,map__23407,map__23407__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__23407,map__23407__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__23478){
var map__23479 = p__23478;
var map__23479__$1 = ((((!((map__23479 == null)))?(((((map__23479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23479):map__23479);
var m = map__23479__$1;
var interceptors = cljs.core.get.call(null,map__23479__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__22942__auto___23481 = ((function (oc,nc,d,map__23479,map__23479__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__23479,map__23479__$1,m,interceptors))
;
var v__22943__auto___23482 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23482)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23482)))){
b__22942__auto___23481.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23481,v__22943__auto___23482,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___23483 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_23484 = (0);
while(true){
if((i_23484 < n__4376__auto___23483)){
var ov_23485 = cljs.core.nth.call(null,och,i_23484);
var nv_23486 = cljs.core.nth.call(null,nch,i_23484);
if(!((((ov_23485 == null)) && ((nv_23486 == null))))){
if((ov_23485 == null)){
var b__22942__auto___23487 = ((function (i_23484,ov_23485,nv_23486,n__4376__auto___23483,oc,nc,d,map__23479,map__23479__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_23484,hipo.interpreter.create_child.call(null,nv_23486,m));
});})(i_23484,ov_23485,nv_23486,n__4376__auto___23483,oc,nc,d,map__23479,map__23479__$1,m,interceptors))
;
var v__22943__auto___23488 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23488)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23488)))){
b__22942__auto___23487.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23487,v__22943__auto___23488,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_23486,new cljs.core.Keyword(null,"index","index",-1531685915),i_23484], null));
}
} else {
if((nv_23486 == null)){
var b__22942__auto___23489 = ((function (i_23484,ov_23485,nv_23486,n__4376__auto___23483,oc,nc,d,map__23479,map__23479__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_23484);
});})(i_23484,ov_23485,nv_23486,n__4376__auto___23483,oc,nc,d,map__23479,map__23479__$1,m,interceptors))
;
var v__22943__auto___23490 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23490)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23490)))){
b__22942__auto___23489.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23489,v__22943__auto___23490,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_23484], null));
}
} else {
var temp__5455__auto___23491 = hipo.dom.child.call(null,el,i_23484);
if(cljs.core.truth_(temp__5455__auto___23491)){
var cel_23492 = temp__5455__auto___23491;
hipo.interpreter.reconciliate_BANG_.call(null,cel_23492,ov_23485,nv_23486,m);
} else {
}

}
}
} else {
}

var G__23493 = (i_23484 + (1));
i_23484 = G__23493;
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
var b__22942__auto__ = ((function (h,temp__5455__auto__,oc,nc,d,map__23479,map__23479__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__5455__auto__,oc,nc,d,map__23479,map__23479__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__22942__auto___23494 = ((function (f,cs,oc,nc,d,map__23479,map__23479__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__23479,map__23479__$1,m,interceptors))
;
var v__22943__auto___23495 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23495)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23495)))){
b__22942__auto___23494.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23494,v__22943__auto___23495,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__23496){
var map__23497 = p__23496;
var map__23497__$1 = ((((!((map__23497 == null)))?(((((map__23497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23497):map__23497);
var m = map__23497__$1;
var interceptors = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__22942__auto__ = ((function (map__23497,map__23497__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__23497,map__23497__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__23499){
var map__23500 = p__23499;
var map__23500__$1 = ((((!((map__23500 == null)))?(((((map__23500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23500):map__23500);
var m = map__23500__$1;
var interceptors = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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
var b__22942__auto__ = ((function (nel,map__23500,map__23500__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__23500,map__23500__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__22942__auto___23502 = ((function (om,nm,och,nch,map__23500,map__23500__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__23500,map__23500__$1,m,interceptors))
;
var v__22943__auto___23503 = interceptors;
if(((cljs.core.not.call(null,v__22943__auto___23503)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto___23503)))){
b__22942__auto___23502.call(null);
} else {
hipo.interceptor.call.call(null,b__22942__auto___23502,v__22943__auto___23503,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__23504){
var map__23505 = p__23504;
var map__23505__$1 = ((((!((map__23505 == null)))?(((((map__23505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23505):map__23505);
var m = map__23505__$1;
var interceptors = cljs.core.get.call(null,map__23505__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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

var b__22942__auto__ = ((function (map__23505,map__23505__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__22942__auto__ = ((function (map__23505,map__23505__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__23505,map__23505__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__23505,map__23505__$1,m,interceptors))
;
var v__22943__auto__ = interceptors;
if(((cljs.core.not.call(null,v__22943__auto__)) || (cljs.core.empty_QMARK_.call(null,v__22943__auto__)))){
return b__22942__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__22942__auto__,v__22943__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1528121913340
