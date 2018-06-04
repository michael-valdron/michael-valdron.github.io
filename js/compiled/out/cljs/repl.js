// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39160){
var map__39161 = p__39160;
var map__39161__$1 = ((((!((map__39161 == null)))?(((((map__39161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39161):map__39161);
var m = map__39161__$1;
var n = cljs.core.get.call(null,map__39161__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39161__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39163_39185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39164_39186 = null;
var count__39165_39187 = (0);
var i__39166_39188 = (0);
while(true){
if((i__39166_39188 < count__39165_39187)){
var f_39189 = cljs.core._nth.call(null,chunk__39164_39186,i__39166_39188);
cljs.core.println.call(null,"  ",f_39189);


var G__39190 = seq__39163_39185;
var G__39191 = chunk__39164_39186;
var G__39192 = count__39165_39187;
var G__39193 = (i__39166_39188 + (1));
seq__39163_39185 = G__39190;
chunk__39164_39186 = G__39191;
count__39165_39187 = G__39192;
i__39166_39188 = G__39193;
continue;
} else {
var temp__5457__auto___39194 = cljs.core.seq.call(null,seq__39163_39185);
if(temp__5457__auto___39194){
var seq__39163_39195__$1 = temp__5457__auto___39194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39163_39195__$1)){
var c__4319__auto___39196 = cljs.core.chunk_first.call(null,seq__39163_39195__$1);
var G__39197 = cljs.core.chunk_rest.call(null,seq__39163_39195__$1);
var G__39198 = c__4319__auto___39196;
var G__39199 = cljs.core.count.call(null,c__4319__auto___39196);
var G__39200 = (0);
seq__39163_39185 = G__39197;
chunk__39164_39186 = G__39198;
count__39165_39187 = G__39199;
i__39166_39188 = G__39200;
continue;
} else {
var f_39201 = cljs.core.first.call(null,seq__39163_39195__$1);
cljs.core.println.call(null,"  ",f_39201);


var G__39202 = cljs.core.next.call(null,seq__39163_39195__$1);
var G__39203 = null;
var G__39204 = (0);
var G__39205 = (0);
seq__39163_39185 = G__39202;
chunk__39164_39186 = G__39203;
count__39165_39187 = G__39204;
i__39166_39188 = G__39205;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39206 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39206);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39206)))?cljs.core.second.call(null,arglists_39206):arglists_39206));
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
var seq__39167_39207 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39168_39208 = null;
var count__39169_39209 = (0);
var i__39170_39210 = (0);
while(true){
if((i__39170_39210 < count__39169_39209)){
var vec__39171_39211 = cljs.core._nth.call(null,chunk__39168_39208,i__39170_39210);
var name_39212 = cljs.core.nth.call(null,vec__39171_39211,(0),null);
var map__39174_39213 = cljs.core.nth.call(null,vec__39171_39211,(1),null);
var map__39174_39214__$1 = ((((!((map__39174_39213 == null)))?(((((map__39174_39213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39174_39213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39174_39213):map__39174_39213);
var doc_39215 = cljs.core.get.call(null,map__39174_39214__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39216 = cljs.core.get.call(null,map__39174_39214__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39212);

cljs.core.println.call(null," ",arglists_39216);

if(cljs.core.truth_(doc_39215)){
cljs.core.println.call(null," ",doc_39215);
} else {
}


var G__39217 = seq__39167_39207;
var G__39218 = chunk__39168_39208;
var G__39219 = count__39169_39209;
var G__39220 = (i__39170_39210 + (1));
seq__39167_39207 = G__39217;
chunk__39168_39208 = G__39218;
count__39169_39209 = G__39219;
i__39170_39210 = G__39220;
continue;
} else {
var temp__5457__auto___39221 = cljs.core.seq.call(null,seq__39167_39207);
if(temp__5457__auto___39221){
var seq__39167_39222__$1 = temp__5457__auto___39221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39167_39222__$1)){
var c__4319__auto___39223 = cljs.core.chunk_first.call(null,seq__39167_39222__$1);
var G__39224 = cljs.core.chunk_rest.call(null,seq__39167_39222__$1);
var G__39225 = c__4319__auto___39223;
var G__39226 = cljs.core.count.call(null,c__4319__auto___39223);
var G__39227 = (0);
seq__39167_39207 = G__39224;
chunk__39168_39208 = G__39225;
count__39169_39209 = G__39226;
i__39170_39210 = G__39227;
continue;
} else {
var vec__39176_39228 = cljs.core.first.call(null,seq__39167_39222__$1);
var name_39229 = cljs.core.nth.call(null,vec__39176_39228,(0),null);
var map__39179_39230 = cljs.core.nth.call(null,vec__39176_39228,(1),null);
var map__39179_39231__$1 = ((((!((map__39179_39230 == null)))?(((((map__39179_39230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39179_39230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39179_39230):map__39179_39230);
var doc_39232 = cljs.core.get.call(null,map__39179_39231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39233 = cljs.core.get.call(null,map__39179_39231__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39229);

cljs.core.println.call(null," ",arglists_39233);

if(cljs.core.truth_(doc_39232)){
cljs.core.println.call(null," ",doc_39232);
} else {
}


var G__39234 = cljs.core.next.call(null,seq__39167_39222__$1);
var G__39235 = null;
var G__39236 = (0);
var G__39237 = (0);
seq__39167_39207 = G__39234;
chunk__39168_39208 = G__39235;
count__39169_39209 = G__39236;
i__39170_39210 = G__39237;
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

var seq__39181 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39182 = null;
var count__39183 = (0);
var i__39184 = (0);
while(true){
if((i__39184 < count__39183)){
var role = cljs.core._nth.call(null,chunk__39182,i__39184);
var temp__5457__auto___39238__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39238__$1)){
var spec_39239 = temp__5457__auto___39238__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39239));
} else {
}


var G__39240 = seq__39181;
var G__39241 = chunk__39182;
var G__39242 = count__39183;
var G__39243 = (i__39184 + (1));
seq__39181 = G__39240;
chunk__39182 = G__39241;
count__39183 = G__39242;
i__39184 = G__39243;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39181);
if(temp__5457__auto____$1){
var seq__39181__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39181__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39181__$1);
var G__39244 = cljs.core.chunk_rest.call(null,seq__39181__$1);
var G__39245 = c__4319__auto__;
var G__39246 = cljs.core.count.call(null,c__4319__auto__);
var G__39247 = (0);
seq__39181 = G__39244;
chunk__39182 = G__39245;
count__39183 = G__39246;
i__39184 = G__39247;
continue;
} else {
var role = cljs.core.first.call(null,seq__39181__$1);
var temp__5457__auto___39248__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39248__$2)){
var spec_39249 = temp__5457__auto___39248__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39249));
} else {
}


var G__39250 = cljs.core.next.call(null,seq__39181__$1);
var G__39251 = null;
var G__39252 = (0);
var G__39253 = (0);
seq__39181 = G__39250;
chunk__39182 = G__39251;
count__39183 = G__39252;
i__39184 = G__39253;
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

//# sourceMappingURL=repl.js.map?rel=1528121937298
