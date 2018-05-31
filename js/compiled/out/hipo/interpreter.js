// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__37394){
var map__37395 = p__37394;
var map__37395__$1 = ((((!((map__37395 == null)))?(((((map__37395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37395):map__37395);
var m = map__37395__$1;
var interceptors = cljs.core.get.call(null,map__37395__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__5455__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__5455__auto__)){
var en = temp__5455__auto__;
if(!(((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv)))))){
var b__37331__auto__ = ((function (en,temp__5455__auto__,map__37395,map__37395__$1,m,interceptors){
return (function (){
var hn = ["hipo_listener_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(en)].join('');
var temp__5455__auto___37397__$1 = (el[hn]);
if(cljs.core.truth_(temp__5455__auto___37397__$1)){
var l_37398 = temp__5455__auto___37397__$1;
el.removeEventListener(en,l_37398);
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
});})(en,temp__5455__auto__,map__37395,map__37395__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__37331__auto__ = ((function (temp__5455__auto__,map__37395,map__37395__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__5455__auto__,map__37395,map__37395__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
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
var temp__5455__auto___37399 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__5455__auto___37399)){
var h_37400 = temp__5455__auto___37399;
el.appendChild(hipo.interpreter.create_child.call(null,h_37400,m));
} else {
}

var G__37401 = cljs.core.rest.call(null,v__$1);
v__$1 = G__37401;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__37402_37412 = cljs.core.seq.call(null,attrs);
var chunk__37403_37413 = null;
var count__37404_37414 = (0);
var i__37405_37415 = (0);
while(true){
if((i__37405_37415 < count__37404_37414)){
var vec__37406_37416 = cljs.core._nth.call(null,chunk__37403_37413,i__37405_37415);
var sok_37417 = cljs.core.nth.call(null,vec__37406_37416,(0),null);
var v_37418 = cljs.core.nth.call(null,vec__37406_37416,(1),null);
if(cljs.core.truth_(v_37418)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_37417,null,v_37418,m);
} else {
}


var G__37419 = seq__37402_37412;
var G__37420 = chunk__37403_37413;
var G__37421 = count__37404_37414;
var G__37422 = (i__37405_37415 + (1));
seq__37402_37412 = G__37419;
chunk__37403_37413 = G__37420;
count__37404_37414 = G__37421;
i__37405_37415 = G__37422;
continue;
} else {
var temp__5457__auto___37423 = cljs.core.seq.call(null,seq__37402_37412);
if(temp__5457__auto___37423){
var seq__37402_37424__$1 = temp__5457__auto___37423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37402_37424__$1)){
var c__4319__auto___37425 = cljs.core.chunk_first.call(null,seq__37402_37424__$1);
var G__37426 = cljs.core.chunk_rest.call(null,seq__37402_37424__$1);
var G__37427 = c__4319__auto___37425;
var G__37428 = cljs.core.count.call(null,c__4319__auto___37425);
var G__37429 = (0);
seq__37402_37412 = G__37426;
chunk__37403_37413 = G__37427;
count__37404_37414 = G__37428;
i__37405_37415 = G__37429;
continue;
} else {
var vec__37409_37430 = cljs.core.first.call(null,seq__37402_37424__$1);
var sok_37431 = cljs.core.nth.call(null,vec__37409_37430,(0),null);
var v_37432 = cljs.core.nth.call(null,vec__37409_37430,(1),null);
if(cljs.core.truth_(v_37432)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_37431,null,v_37432,m);
} else {
}


var G__37433 = cljs.core.next.call(null,seq__37402_37424__$1);
var G__37434 = null;
var G__37435 = (0);
var G__37436 = (0);
seq__37402_37412 = G__37433;
chunk__37403_37413 = G__37434;
count__37404_37414 = G__37435;
i__37405_37415 = G__37436;
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
var seq__37437_37453 = cljs.core.seq.call(null,nm);
var chunk__37439_37454 = null;
var count__37440_37455 = (0);
var i__37441_37456 = (0);
while(true){
if((i__37441_37456 < count__37440_37455)){
var vec__37443_37457 = cljs.core._nth.call(null,chunk__37439_37454,i__37441_37456);
var sok_37458 = cljs.core.nth.call(null,vec__37443_37457,(0),null);
var nv_37459 = cljs.core.nth.call(null,vec__37443_37457,(1),null);
var ov_37460 = cljs.core.get.call(null,om,sok_37458);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_37458,ov_37460,nv_37459,m);


var G__37461 = seq__37437_37453;
var G__37462 = chunk__37439_37454;
var G__37463 = count__37440_37455;
var G__37464 = (i__37441_37456 + (1));
seq__37437_37453 = G__37461;
chunk__37439_37454 = G__37462;
count__37440_37455 = G__37463;
i__37441_37456 = G__37464;
continue;
} else {
var temp__5457__auto___37465 = cljs.core.seq.call(null,seq__37437_37453);
if(temp__5457__auto___37465){
var seq__37437_37466__$1 = temp__5457__auto___37465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37437_37466__$1)){
var c__4319__auto___37467 = cljs.core.chunk_first.call(null,seq__37437_37466__$1);
var G__37468 = cljs.core.chunk_rest.call(null,seq__37437_37466__$1);
var G__37469 = c__4319__auto___37467;
var G__37470 = cljs.core.count.call(null,c__4319__auto___37467);
var G__37471 = (0);
seq__37437_37453 = G__37468;
chunk__37439_37454 = G__37469;
count__37440_37455 = G__37470;
i__37441_37456 = G__37471;
continue;
} else {
var vec__37446_37472 = cljs.core.first.call(null,seq__37437_37466__$1);
var sok_37473 = cljs.core.nth.call(null,vec__37446_37472,(0),null);
var nv_37474 = cljs.core.nth.call(null,vec__37446_37472,(1),null);
var ov_37475 = cljs.core.get.call(null,om,sok_37473);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_37473,ov_37475,nv_37474,m);


var G__37476 = cljs.core.next.call(null,seq__37437_37466__$1);
var G__37477 = null;
var G__37478 = (0);
var G__37479 = (0);
seq__37437_37453 = G__37476;
chunk__37439_37454 = G__37477;
count__37440_37455 = G__37478;
i__37441_37456 = G__37479;
continue;
}
} else {
}
}
break;
}

var seq__37449 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__37450 = null;
var count__37451 = (0);
var i__37452 = (0);
while(true){
if((i__37452 < count__37451)){
var sok = cljs.core._nth.call(null,chunk__37450,i__37452);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__37480 = seq__37449;
var G__37481 = chunk__37450;
var G__37482 = count__37451;
var G__37483 = (i__37452 + (1));
seq__37449 = G__37480;
chunk__37450 = G__37481;
count__37451 = G__37482;
i__37452 = G__37483;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37449);
if(temp__5457__auto__){
var seq__37449__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37449__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37449__$1);
var G__37484 = cljs.core.chunk_rest.call(null,seq__37449__$1);
var G__37485 = c__4319__auto__;
var G__37486 = cljs.core.count.call(null,c__4319__auto__);
var G__37487 = (0);
seq__37449 = G__37484;
chunk__37450 = G__37485;
count__37451 = G__37486;
i__37452 = G__37487;
continue;
} else {
var sok = cljs.core.first.call(null,seq__37449__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);


var G__37488 = cljs.core.next.call(null,seq__37449__$1);
var G__37489 = null;
var G__37490 = (0);
var G__37491 = (0);
seq__37449 = G__37488;
chunk__37450 = G__37489;
count__37451 = G__37490;
i__37452 = G__37491;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__37492(s__37493){
return (new cljs.core.LazySeq(null,(function (){
var s__37493__$1 = s__37493;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37493__$1);
if(temp__5457__auto__){
var s__37493__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37493__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37493__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37495 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37494 = (0);
while(true){
if((i__37494 < size__4291__auto__)){
var ih = cljs.core._nth.call(null,c__4290__auto__,i__37494);
cljs.core.chunk_append.call(null,b__37495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__37496 = (i__37494 + (1));
i__37494 = G__37496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37495),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__37492.call(null,cljs.core.chunk_rest.call(null,s__37493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37495),null);
}
} else {
var ih = cljs.core.first.call(null,s__37493__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__37492.call(null,cljs.core.rest.call(null,s__37493__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__37497){
var map__37498 = p__37497;
var map__37498__$1 = ((((!((map__37498 == null)))?(((((map__37498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37498):map__37498);
var m = map__37498__$1;
var interceptors = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__37500_37522 = cljs.core.seq.call(null,nm);
var chunk__37501_37523 = null;
var count__37502_37524 = (0);
var i__37503_37525 = (0);
while(true){
if((i__37503_37525 < count__37502_37524)){
var vec__37504_37526 = cljs.core._nth.call(null,chunk__37501_37523,i__37503_37525);
var i_37527 = cljs.core.nth.call(null,vec__37504_37526,(0),null);
var vec__37507_37528 = cljs.core.nth.call(null,vec__37504_37526,(1),null);
var ii_37529 = cljs.core.nth.call(null,vec__37507_37528,(0),null);
var h_37530 = cljs.core.nth.call(null,vec__37507_37528,(1),null);
var temp__5455__auto___37531 = cljs.core.get.call(null,om,i_37527);
if(cljs.core.truth_(temp__5455__auto___37531)){
var vec__37510_37532 = temp__5455__auto___37531;
var iii_37533 = cljs.core.nth.call(null,vec__37510_37532,(0),null);
var oh_37534 = cljs.core.nth.call(null,vec__37510_37532,(1),null);
var cel_37535 = cljs.core.nth.call(null,cs,iii_37533);
if((ii_37529 === iii_37533)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_37535,oh_37534,h_37530,m);
} else {
var b__37331__auto___37536 = ((function (seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,cel_37535,vec__37510_37532,iii_37533,oh_37534,temp__5455__auto___37531,vec__37504_37526,i_37527,vec__37507_37528,ii_37529,h_37530,om,nm,cs,map__37498,map__37498__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_37535);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_37534,h_37530,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_37529,ncel);
});})(seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,cel_37535,vec__37510_37532,iii_37533,oh_37534,temp__5455__auto___37531,vec__37504_37526,i_37527,vec__37507_37528,ii_37529,h_37530,om,nm,cs,map__37498,map__37498__$1,m,interceptors))
;
var v__37332__auto___37537 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37537)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37537)))){
b__37331__auto___37536.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37536,v__37332__auto___37537,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_37530,new cljs.core.Keyword(null,"index","index",-1531685915),ii_37529], null));
}
}
} else {
var b__37331__auto___37538 = ((function (seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,temp__5455__auto___37531,vec__37504_37526,i_37527,vec__37507_37528,ii_37529,h_37530,om,nm,cs,map__37498,map__37498__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_37529,hipo.interpreter.create_child.call(null,h_37530,m));
});})(seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,temp__5455__auto___37531,vec__37504_37526,i_37527,vec__37507_37528,ii_37529,h_37530,om,nm,cs,map__37498,map__37498__$1,m,interceptors))
;
var v__37332__auto___37539 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37539)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37539)))){
b__37331__auto___37538.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37538,v__37332__auto___37539,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_37530,new cljs.core.Keyword(null,"index","index",-1531685915),ii_37529], null));
}
}


var G__37540 = seq__37500_37522;
var G__37541 = chunk__37501_37523;
var G__37542 = count__37502_37524;
var G__37543 = (i__37503_37525 + (1));
seq__37500_37522 = G__37540;
chunk__37501_37523 = G__37541;
count__37502_37524 = G__37542;
i__37503_37525 = G__37543;
continue;
} else {
var temp__5457__auto___37544 = cljs.core.seq.call(null,seq__37500_37522);
if(temp__5457__auto___37544){
var seq__37500_37545__$1 = temp__5457__auto___37544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37500_37545__$1)){
var c__4319__auto___37546 = cljs.core.chunk_first.call(null,seq__37500_37545__$1);
var G__37547 = cljs.core.chunk_rest.call(null,seq__37500_37545__$1);
var G__37548 = c__4319__auto___37546;
var G__37549 = cljs.core.count.call(null,c__4319__auto___37546);
var G__37550 = (0);
seq__37500_37522 = G__37547;
chunk__37501_37523 = G__37548;
count__37502_37524 = G__37549;
i__37503_37525 = G__37550;
continue;
} else {
var vec__37513_37551 = cljs.core.first.call(null,seq__37500_37545__$1);
var i_37552 = cljs.core.nth.call(null,vec__37513_37551,(0),null);
var vec__37516_37553 = cljs.core.nth.call(null,vec__37513_37551,(1),null);
var ii_37554 = cljs.core.nth.call(null,vec__37516_37553,(0),null);
var h_37555 = cljs.core.nth.call(null,vec__37516_37553,(1),null);
var temp__5455__auto___37556 = cljs.core.get.call(null,om,i_37552);
if(cljs.core.truth_(temp__5455__auto___37556)){
var vec__37519_37557 = temp__5455__auto___37556;
var iii_37558 = cljs.core.nth.call(null,vec__37519_37557,(0),null);
var oh_37559 = cljs.core.nth.call(null,vec__37519_37557,(1),null);
var cel_37560 = cljs.core.nth.call(null,cs,iii_37558);
if((ii_37554 === iii_37558)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_37560,oh_37559,h_37555,m);
} else {
var b__37331__auto___37561 = ((function (seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,cel_37560,vec__37519_37557,iii_37558,oh_37559,temp__5455__auto___37556,vec__37513_37551,i_37552,vec__37516_37553,ii_37554,h_37555,seq__37500_37545__$1,temp__5457__auto___37544,om,nm,cs,map__37498,map__37498__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_37560);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_37559,h_37555,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_37554,ncel);
});})(seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,cel_37560,vec__37519_37557,iii_37558,oh_37559,temp__5455__auto___37556,vec__37513_37551,i_37552,vec__37516_37553,ii_37554,h_37555,seq__37500_37545__$1,temp__5457__auto___37544,om,nm,cs,map__37498,map__37498__$1,m,interceptors))
;
var v__37332__auto___37562 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37562)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37562)))){
b__37331__auto___37561.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37561,v__37332__auto___37562,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_37555,new cljs.core.Keyword(null,"index","index",-1531685915),ii_37554], null));
}
}
} else {
var b__37331__auto___37563 = ((function (seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,temp__5455__auto___37556,vec__37513_37551,i_37552,vec__37516_37553,ii_37554,h_37555,seq__37500_37545__$1,temp__5457__auto___37544,om,nm,cs,map__37498,map__37498__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_37554,hipo.interpreter.create_child.call(null,h_37555,m));
});})(seq__37500_37522,chunk__37501_37523,count__37502_37524,i__37503_37525,temp__5455__auto___37556,vec__37513_37551,i_37552,vec__37516_37553,ii_37554,h_37555,seq__37500_37545__$1,temp__5457__auto___37544,om,nm,cs,map__37498,map__37498__$1,m,interceptors))
;
var v__37332__auto___37564 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37564)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37564)))){
b__37331__auto___37563.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37563,v__37332__auto___37564,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_37555,new cljs.core.Keyword(null,"index","index",-1531685915),ii_37554], null));
}
}


var G__37565 = cljs.core.next.call(null,seq__37500_37545__$1);
var G__37566 = null;
var G__37567 = (0);
var G__37568 = (0);
seq__37500_37522 = G__37565;
chunk__37501_37523 = G__37566;
count__37502_37524 = G__37567;
i__37503_37525 = G__37568;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__37331__auto__ = ((function (d,om,nm,cs,map__37498,map__37498__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__37498,map__37498__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__37569){
var map__37570 = p__37569;
var map__37570__$1 = ((((!((map__37570 == null)))?(((((map__37570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37570):map__37570);
var m = map__37570__$1;
var interceptors = cljs.core.get.call(null,map__37570__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__37331__auto___37572 = ((function (oc,nc,d,map__37570,map__37570__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__37570,map__37570__$1,m,interceptors))
;
var v__37332__auto___37573 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37573)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37573)))){
b__37331__auto___37572.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37572,v__37332__auto___37573,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__4376__auto___37574 = (function (){var x__4009__auto__ = oc;
var y__4010__auto__ = nc;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var i_37575 = (0);
while(true){
if((i_37575 < n__4376__auto___37574)){
var ov_37576 = cljs.core.nth.call(null,och,i_37575);
var nv_37577 = cljs.core.nth.call(null,nch,i_37575);
if(!((((ov_37576 == null)) && ((nv_37577 == null))))){
if((ov_37576 == null)){
var b__37331__auto___37578 = ((function (i_37575,ov_37576,nv_37577,n__4376__auto___37574,oc,nc,d,map__37570,map__37570__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_37575,hipo.interpreter.create_child.call(null,nv_37577,m));
});})(i_37575,ov_37576,nv_37577,n__4376__auto___37574,oc,nc,d,map__37570,map__37570__$1,m,interceptors))
;
var v__37332__auto___37579 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37579)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37579)))){
b__37331__auto___37578.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37578,v__37332__auto___37579,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_37577,new cljs.core.Keyword(null,"index","index",-1531685915),i_37575], null));
}
} else {
if((nv_37577 == null)){
var b__37331__auto___37580 = ((function (i_37575,ov_37576,nv_37577,n__4376__auto___37574,oc,nc,d,map__37570,map__37570__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_37575);
});})(i_37575,ov_37576,nv_37577,n__4376__auto___37574,oc,nc,d,map__37570,map__37570__$1,m,interceptors))
;
var v__37332__auto___37581 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37581)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37581)))){
b__37331__auto___37580.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37580,v__37332__auto___37581,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_37575], null));
}
} else {
var temp__5455__auto___37582 = hipo.dom.child.call(null,el,i_37575);
if(cljs.core.truth_(temp__5455__auto___37582)){
var cel_37583 = temp__5455__auto___37582;
hipo.interpreter.reconciliate_BANG_.call(null,cel_37583,ov_37576,nv_37577,m);
} else {
}

}
}
} else {
}

var G__37584 = (i_37575 + (1));
i_37575 = G__37584;
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
var b__37331__auto__ = ((function (h,temp__5455__auto__,oc,nc,d,map__37570,map__37570__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__5455__auto__,oc,nc,d,map__37570,map__37570__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__37331__auto___37585 = ((function (f,cs,oc,nc,d,map__37570,map__37570__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__37570,map__37570__$1,m,interceptors))
;
var v__37332__auto___37586 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37586)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37586)))){
b__37331__auto___37585.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37585,v__37332__auto___37586,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__37587){
var map__37588 = p__37587;
var map__37588__$1 = ((((!((map__37588 == null)))?(((((map__37588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37588):map__37588);
var m = map__37588__$1;
var interceptors = cljs.core.get.call(null,map__37588__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__37331__auto__ = ((function (map__37588,map__37588__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__37588,map__37588__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__37590){
var map__37591 = p__37590;
var map__37591__$1 = ((((!((map__37591 == null)))?(((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var m = map__37591__$1;
var interceptors = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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
var b__37331__auto__ = ((function (nel,map__37591,map__37591__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__37591,map__37591__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__37331__auto___37593 = ((function (om,nm,och,nch,map__37591,map__37591__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__37591,map__37591__$1,m,interceptors))
;
var v__37332__auto___37594 = interceptors;
if(((cljs.core.not.call(null,v__37332__auto___37594)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto___37594)))){
b__37331__auto___37593.call(null);
} else {
hipo.interceptor.call.call(null,b__37331__auto___37593,v__37332__auto___37594,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__37595){
var map__37596 = p__37595;
var map__37596__$1 = ((((!((map__37596 == null)))?(((((map__37596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37596):map__37596);
var m = map__37596__$1;
var interceptors = cljs.core.get.call(null,map__37596__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
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

var b__37331__auto__ = ((function (map__37596,map__37596__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__37331__auto__ = ((function (map__37596,map__37596__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error(["Assert failed: ","Can't replace root element. If you want to change root element's type it must be encapsulated in a static element.","\n","(.-parentElement el)"].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nh)].join(''));
});})(map__37596,map__37596__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__37596,map__37596__$1,m,interceptors))
;
var v__37332__auto__ = interceptors;
if(((cljs.core.not.call(null,v__37332__auto__)) || (cljs.core.empty_QMARK_.call(null,v__37332__auto__)))){
return b__37331__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__37331__auto__,v__37332__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1527748705721
