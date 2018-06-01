// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31517){
var map__31518 = p__31517;
var map__31518__$1 = ((((!((map__31518 == null)))?(((((map__31518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31518):map__31518);
var m = map__31518__$1;
var n = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31520_31542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31521_31543 = null;
var count__31522_31544 = (0);
var i__31523_31545 = (0);
while(true){
if((i__31523_31545 < count__31522_31544)){
var f_31546 = cljs.core._nth.call(null,chunk__31521_31543,i__31523_31545);
cljs.core.println.call(null,"  ",f_31546);


var G__31547 = seq__31520_31542;
var G__31548 = chunk__31521_31543;
var G__31549 = count__31522_31544;
var G__31550 = (i__31523_31545 + (1));
seq__31520_31542 = G__31547;
chunk__31521_31543 = G__31548;
count__31522_31544 = G__31549;
i__31523_31545 = G__31550;
continue;
} else {
var temp__5457__auto___31551 = cljs.core.seq.call(null,seq__31520_31542);
if(temp__5457__auto___31551){
var seq__31520_31552__$1 = temp__5457__auto___31551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31520_31552__$1)){
var c__4319__auto___31553 = cljs.core.chunk_first.call(null,seq__31520_31552__$1);
var G__31554 = cljs.core.chunk_rest.call(null,seq__31520_31552__$1);
var G__31555 = c__4319__auto___31553;
var G__31556 = cljs.core.count.call(null,c__4319__auto___31553);
var G__31557 = (0);
seq__31520_31542 = G__31554;
chunk__31521_31543 = G__31555;
count__31522_31544 = G__31556;
i__31523_31545 = G__31557;
continue;
} else {
var f_31558 = cljs.core.first.call(null,seq__31520_31552__$1);
cljs.core.println.call(null,"  ",f_31558);


var G__31559 = cljs.core.next.call(null,seq__31520_31552__$1);
var G__31560 = null;
var G__31561 = (0);
var G__31562 = (0);
seq__31520_31542 = G__31559;
chunk__31521_31543 = G__31560;
count__31522_31544 = G__31561;
i__31523_31545 = G__31562;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31563 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31563);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31563)))?cljs.core.second.call(null,arglists_31563):arglists_31563));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31524_31564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31525_31565 = null;
var count__31526_31566 = (0);
var i__31527_31567 = (0);
while(true){
if((i__31527_31567 < count__31526_31566)){
var vec__31528_31568 = cljs.core._nth.call(null,chunk__31525_31565,i__31527_31567);
var name_31569 = cljs.core.nth.call(null,vec__31528_31568,(0),null);
var map__31531_31570 = cljs.core.nth.call(null,vec__31528_31568,(1),null);
var map__31531_31571__$1 = ((((!((map__31531_31570 == null)))?(((((map__31531_31570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31531_31570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531_31570):map__31531_31570);
var doc_31572 = cljs.core.get.call(null,map__31531_31571__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31573 = cljs.core.get.call(null,map__31531_31571__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31569);

cljs.core.println.call(null," ",arglists_31573);

if(cljs.core.truth_(doc_31572)){
cljs.core.println.call(null," ",doc_31572);
} else {
}


var G__31574 = seq__31524_31564;
var G__31575 = chunk__31525_31565;
var G__31576 = count__31526_31566;
var G__31577 = (i__31527_31567 + (1));
seq__31524_31564 = G__31574;
chunk__31525_31565 = G__31575;
count__31526_31566 = G__31576;
i__31527_31567 = G__31577;
continue;
} else {
var temp__5457__auto___31578 = cljs.core.seq.call(null,seq__31524_31564);
if(temp__5457__auto___31578){
var seq__31524_31579__$1 = temp__5457__auto___31578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31524_31579__$1)){
var c__4319__auto___31580 = cljs.core.chunk_first.call(null,seq__31524_31579__$1);
var G__31581 = cljs.core.chunk_rest.call(null,seq__31524_31579__$1);
var G__31582 = c__4319__auto___31580;
var G__31583 = cljs.core.count.call(null,c__4319__auto___31580);
var G__31584 = (0);
seq__31524_31564 = G__31581;
chunk__31525_31565 = G__31582;
count__31526_31566 = G__31583;
i__31527_31567 = G__31584;
continue;
} else {
var vec__31533_31585 = cljs.core.first.call(null,seq__31524_31579__$1);
var name_31586 = cljs.core.nth.call(null,vec__31533_31585,(0),null);
var map__31536_31587 = cljs.core.nth.call(null,vec__31533_31585,(1),null);
var map__31536_31588__$1 = ((((!((map__31536_31587 == null)))?(((((map__31536_31587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31536_31587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31536_31587):map__31536_31587);
var doc_31589 = cljs.core.get.call(null,map__31536_31588__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31590 = cljs.core.get.call(null,map__31536_31588__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31586);

cljs.core.println.call(null," ",arglists_31590);

if(cljs.core.truth_(doc_31589)){
cljs.core.println.call(null," ",doc_31589);
} else {
}


var G__31591 = cljs.core.next.call(null,seq__31524_31579__$1);
var G__31592 = null;
var G__31593 = (0);
var G__31594 = (0);
seq__31524_31564 = G__31591;
chunk__31525_31565 = G__31592;
count__31526_31566 = G__31593;
i__31527_31567 = G__31594;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31538 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31539 = null;
var count__31540 = (0);
var i__31541 = (0);
while(true){
if((i__31541 < count__31540)){
var role = cljs.core._nth.call(null,chunk__31539,i__31541);
var temp__5457__auto___31595__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31595__$1)){
var spec_31596 = temp__5457__auto___31595__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31596));
} else {
}


var G__31597 = seq__31538;
var G__31598 = chunk__31539;
var G__31599 = count__31540;
var G__31600 = (i__31541 + (1));
seq__31538 = G__31597;
chunk__31539 = G__31598;
count__31540 = G__31599;
i__31541 = G__31600;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31538);
if(temp__5457__auto____$1){
var seq__31538__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31538__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31538__$1);
var G__31601 = cljs.core.chunk_rest.call(null,seq__31538__$1);
var G__31602 = c__4319__auto__;
var G__31603 = cljs.core.count.call(null,c__4319__auto__);
var G__31604 = (0);
seq__31538 = G__31601;
chunk__31539 = G__31602;
count__31540 = G__31603;
i__31541 = G__31604;
continue;
} else {
var role = cljs.core.first.call(null,seq__31538__$1);
var temp__5457__auto___31605__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31605__$2)){
var spec_31606 = temp__5457__auto___31605__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31606));
} else {
}


var G__31607 = cljs.core.next.call(null,seq__31538__$1);
var G__31608 = null;
var G__31609 = (0);
var G__31610 = (0);
seq__31538 = G__31607;
chunk__31539 = G__31608;
count__31540 = G__31609;
i__31541 = G__31610;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1527842022626
