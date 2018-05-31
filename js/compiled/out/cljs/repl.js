// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30999){
var map__31000 = p__30999;
var map__31000__$1 = ((((!((map__31000 == null)))?(((((map__31000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31000):map__31000);
var m = map__31000__$1;
var n = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31002_31024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31003_31025 = null;
var count__31004_31026 = (0);
var i__31005_31027 = (0);
while(true){
if((i__31005_31027 < count__31004_31026)){
var f_31028 = cljs.core._nth.call(null,chunk__31003_31025,i__31005_31027);
cljs.core.println.call(null,"  ",f_31028);


var G__31029 = seq__31002_31024;
var G__31030 = chunk__31003_31025;
var G__31031 = count__31004_31026;
var G__31032 = (i__31005_31027 + (1));
seq__31002_31024 = G__31029;
chunk__31003_31025 = G__31030;
count__31004_31026 = G__31031;
i__31005_31027 = G__31032;
continue;
} else {
var temp__5457__auto___31033 = cljs.core.seq.call(null,seq__31002_31024);
if(temp__5457__auto___31033){
var seq__31002_31034__$1 = temp__5457__auto___31033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31002_31034__$1)){
var c__4319__auto___31035 = cljs.core.chunk_first.call(null,seq__31002_31034__$1);
var G__31036 = cljs.core.chunk_rest.call(null,seq__31002_31034__$1);
var G__31037 = c__4319__auto___31035;
var G__31038 = cljs.core.count.call(null,c__4319__auto___31035);
var G__31039 = (0);
seq__31002_31024 = G__31036;
chunk__31003_31025 = G__31037;
count__31004_31026 = G__31038;
i__31005_31027 = G__31039;
continue;
} else {
var f_31040 = cljs.core.first.call(null,seq__31002_31034__$1);
cljs.core.println.call(null,"  ",f_31040);


var G__31041 = cljs.core.next.call(null,seq__31002_31034__$1);
var G__31042 = null;
var G__31043 = (0);
var G__31044 = (0);
seq__31002_31024 = G__31041;
chunk__31003_31025 = G__31042;
count__31004_31026 = G__31043;
i__31005_31027 = G__31044;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31045 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31045);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31045)))?cljs.core.second.call(null,arglists_31045):arglists_31045));
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
var seq__31006_31046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31007_31047 = null;
var count__31008_31048 = (0);
var i__31009_31049 = (0);
while(true){
if((i__31009_31049 < count__31008_31048)){
var vec__31010_31050 = cljs.core._nth.call(null,chunk__31007_31047,i__31009_31049);
var name_31051 = cljs.core.nth.call(null,vec__31010_31050,(0),null);
var map__31013_31052 = cljs.core.nth.call(null,vec__31010_31050,(1),null);
var map__31013_31053__$1 = ((((!((map__31013_31052 == null)))?(((((map__31013_31052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31013_31052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31013_31052):map__31013_31052);
var doc_31054 = cljs.core.get.call(null,map__31013_31053__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31055 = cljs.core.get.call(null,map__31013_31053__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31051);

cljs.core.println.call(null," ",arglists_31055);

if(cljs.core.truth_(doc_31054)){
cljs.core.println.call(null," ",doc_31054);
} else {
}


var G__31056 = seq__31006_31046;
var G__31057 = chunk__31007_31047;
var G__31058 = count__31008_31048;
var G__31059 = (i__31009_31049 + (1));
seq__31006_31046 = G__31056;
chunk__31007_31047 = G__31057;
count__31008_31048 = G__31058;
i__31009_31049 = G__31059;
continue;
} else {
var temp__5457__auto___31060 = cljs.core.seq.call(null,seq__31006_31046);
if(temp__5457__auto___31060){
var seq__31006_31061__$1 = temp__5457__auto___31060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31006_31061__$1)){
var c__4319__auto___31062 = cljs.core.chunk_first.call(null,seq__31006_31061__$1);
var G__31063 = cljs.core.chunk_rest.call(null,seq__31006_31061__$1);
var G__31064 = c__4319__auto___31062;
var G__31065 = cljs.core.count.call(null,c__4319__auto___31062);
var G__31066 = (0);
seq__31006_31046 = G__31063;
chunk__31007_31047 = G__31064;
count__31008_31048 = G__31065;
i__31009_31049 = G__31066;
continue;
} else {
var vec__31015_31067 = cljs.core.first.call(null,seq__31006_31061__$1);
var name_31068 = cljs.core.nth.call(null,vec__31015_31067,(0),null);
var map__31018_31069 = cljs.core.nth.call(null,vec__31015_31067,(1),null);
var map__31018_31070__$1 = ((((!((map__31018_31069 == null)))?(((((map__31018_31069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31018_31069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018_31069):map__31018_31069);
var doc_31071 = cljs.core.get.call(null,map__31018_31070__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31072 = cljs.core.get.call(null,map__31018_31070__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31068);

cljs.core.println.call(null," ",arglists_31072);

if(cljs.core.truth_(doc_31071)){
cljs.core.println.call(null," ",doc_31071);
} else {
}


var G__31073 = cljs.core.next.call(null,seq__31006_31061__$1);
var G__31074 = null;
var G__31075 = (0);
var G__31076 = (0);
seq__31006_31046 = G__31073;
chunk__31007_31047 = G__31074;
count__31008_31048 = G__31075;
i__31009_31049 = G__31076;
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

var seq__31020 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31021 = null;
var count__31022 = (0);
var i__31023 = (0);
while(true){
if((i__31023 < count__31022)){
var role = cljs.core._nth.call(null,chunk__31021,i__31023);
var temp__5457__auto___31077__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31077__$1)){
var spec_31078 = temp__5457__auto___31077__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31078));
} else {
}


var G__31079 = seq__31020;
var G__31080 = chunk__31021;
var G__31081 = count__31022;
var G__31082 = (i__31023 + (1));
seq__31020 = G__31079;
chunk__31021 = G__31080;
count__31022 = G__31081;
i__31023 = G__31082;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31020);
if(temp__5457__auto____$1){
var seq__31020__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31020__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31020__$1);
var G__31083 = cljs.core.chunk_rest.call(null,seq__31020__$1);
var G__31084 = c__4319__auto__;
var G__31085 = cljs.core.count.call(null,c__4319__auto__);
var G__31086 = (0);
seq__31020 = G__31083;
chunk__31021 = G__31084;
count__31022 = G__31085;
i__31023 = G__31086;
continue;
} else {
var role = cljs.core.first.call(null,seq__31020__$1);
var temp__5457__auto___31087__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31087__$2)){
var spec_31088 = temp__5457__auto___31087__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31088));
} else {
}


var G__31089 = cljs.core.next.call(null,seq__31020__$1);
var G__31090 = null;
var G__31091 = (0);
var G__31092 = (0);
seq__31020 = G__31089;
chunk__31021 = G__31090;
count__31022 = G__31091;
i__31023 = G__31092;
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

//# sourceMappingURL=repl.js.map?rel=1527748571399
