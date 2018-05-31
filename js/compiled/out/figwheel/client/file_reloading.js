// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29536_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29536_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29537 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29538 = null;
var count__29539 = (0);
var i__29540 = (0);
while(true){
if((i__29540 < count__29539)){
var n = cljs.core._nth.call(null,chunk__29538,i__29540);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29541 = seq__29537;
var G__29542 = chunk__29538;
var G__29543 = count__29539;
var G__29544 = (i__29540 + (1));
seq__29537 = G__29541;
chunk__29538 = G__29542;
count__29539 = G__29543;
i__29540 = G__29544;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29537);
if(temp__5457__auto__){
var seq__29537__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29537__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29537__$1);
var G__29545 = cljs.core.chunk_rest.call(null,seq__29537__$1);
var G__29546 = c__4319__auto__;
var G__29547 = cljs.core.count.call(null,c__4319__auto__);
var G__29548 = (0);
seq__29537 = G__29545;
chunk__29538 = G__29546;
count__29539 = G__29547;
i__29540 = G__29548;
continue;
} else {
var n = cljs.core.first.call(null,seq__29537__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29549 = cljs.core.next.call(null,seq__29537__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__29537 = G__29549;
chunk__29538 = G__29550;
count__29539 = G__29551;
i__29540 = G__29552;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29553){
var vec__29554 = p__29553;
var _ = cljs.core.nth.call(null,vec__29554,(0),null);
var v = cljs.core.nth.call(null,vec__29554,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29557){
var vec__29558 = p__29557;
var k = cljs.core.nth.call(null,vec__29558,(0),null);
var v = cljs.core.nth.call(null,vec__29558,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29570_29578 = cljs.core.seq.call(null,deps);
var chunk__29571_29579 = null;
var count__29572_29580 = (0);
var i__29573_29581 = (0);
while(true){
if((i__29573_29581 < count__29572_29580)){
var dep_29582 = cljs.core._nth.call(null,chunk__29571_29579,i__29573_29581);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29582;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29582));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29582,(depth + (1)),state);
} else {
}


var G__29583 = seq__29570_29578;
var G__29584 = chunk__29571_29579;
var G__29585 = count__29572_29580;
var G__29586 = (i__29573_29581 + (1));
seq__29570_29578 = G__29583;
chunk__29571_29579 = G__29584;
count__29572_29580 = G__29585;
i__29573_29581 = G__29586;
continue;
} else {
var temp__5457__auto___29587 = cljs.core.seq.call(null,seq__29570_29578);
if(temp__5457__auto___29587){
var seq__29570_29588__$1 = temp__5457__auto___29587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29570_29588__$1)){
var c__4319__auto___29589 = cljs.core.chunk_first.call(null,seq__29570_29588__$1);
var G__29590 = cljs.core.chunk_rest.call(null,seq__29570_29588__$1);
var G__29591 = c__4319__auto___29589;
var G__29592 = cljs.core.count.call(null,c__4319__auto___29589);
var G__29593 = (0);
seq__29570_29578 = G__29590;
chunk__29571_29579 = G__29591;
count__29572_29580 = G__29592;
i__29573_29581 = G__29593;
continue;
} else {
var dep_29594 = cljs.core.first.call(null,seq__29570_29588__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29594;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29594));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29594,(depth + (1)),state);
} else {
}


var G__29595 = cljs.core.next.call(null,seq__29570_29588__$1);
var G__29596 = null;
var G__29597 = (0);
var G__29598 = (0);
seq__29570_29578 = G__29595;
chunk__29571_29579 = G__29596;
count__29572_29580 = G__29597;
i__29573_29581 = G__29598;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29574){
var vec__29575 = p__29574;
var seq__29576 = cljs.core.seq.call(null,vec__29575);
var first__29577 = cljs.core.first.call(null,seq__29576);
var seq__29576__$1 = cljs.core.next.call(null,seq__29576);
var x = first__29577;
var xs = seq__29576__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29575,seq__29576,first__29577,seq__29576__$1,x,xs,get_deps__$1){
return (function (p1__29561_SHARP_){
return clojure.set.difference.call(null,p1__29561_SHARP_,x);
});})(vec__29575,seq__29576,first__29577,seq__29576__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29599 = cljs.core.seq.call(null,provides);
var chunk__29600 = null;
var count__29601 = (0);
var i__29602 = (0);
while(true){
if((i__29602 < count__29601)){
var prov = cljs.core._nth.call(null,chunk__29600,i__29602);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29603_29611 = cljs.core.seq.call(null,requires);
var chunk__29604_29612 = null;
var count__29605_29613 = (0);
var i__29606_29614 = (0);
while(true){
if((i__29606_29614 < count__29605_29613)){
var req_29615 = cljs.core._nth.call(null,chunk__29604_29612,i__29606_29614);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29615,prov);


var G__29616 = seq__29603_29611;
var G__29617 = chunk__29604_29612;
var G__29618 = count__29605_29613;
var G__29619 = (i__29606_29614 + (1));
seq__29603_29611 = G__29616;
chunk__29604_29612 = G__29617;
count__29605_29613 = G__29618;
i__29606_29614 = G__29619;
continue;
} else {
var temp__5457__auto___29620 = cljs.core.seq.call(null,seq__29603_29611);
if(temp__5457__auto___29620){
var seq__29603_29621__$1 = temp__5457__auto___29620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29603_29621__$1)){
var c__4319__auto___29622 = cljs.core.chunk_first.call(null,seq__29603_29621__$1);
var G__29623 = cljs.core.chunk_rest.call(null,seq__29603_29621__$1);
var G__29624 = c__4319__auto___29622;
var G__29625 = cljs.core.count.call(null,c__4319__auto___29622);
var G__29626 = (0);
seq__29603_29611 = G__29623;
chunk__29604_29612 = G__29624;
count__29605_29613 = G__29625;
i__29606_29614 = G__29626;
continue;
} else {
var req_29627 = cljs.core.first.call(null,seq__29603_29621__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29627,prov);


var G__29628 = cljs.core.next.call(null,seq__29603_29621__$1);
var G__29629 = null;
var G__29630 = (0);
var G__29631 = (0);
seq__29603_29611 = G__29628;
chunk__29604_29612 = G__29629;
count__29605_29613 = G__29630;
i__29606_29614 = G__29631;
continue;
}
} else {
}
}
break;
}


var G__29632 = seq__29599;
var G__29633 = chunk__29600;
var G__29634 = count__29601;
var G__29635 = (i__29602 + (1));
seq__29599 = G__29632;
chunk__29600 = G__29633;
count__29601 = G__29634;
i__29602 = G__29635;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29599);
if(temp__5457__auto__){
var seq__29599__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29599__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29599__$1);
var G__29636 = cljs.core.chunk_rest.call(null,seq__29599__$1);
var G__29637 = c__4319__auto__;
var G__29638 = cljs.core.count.call(null,c__4319__auto__);
var G__29639 = (0);
seq__29599 = G__29636;
chunk__29600 = G__29637;
count__29601 = G__29638;
i__29602 = G__29639;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29599__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29607_29640 = cljs.core.seq.call(null,requires);
var chunk__29608_29641 = null;
var count__29609_29642 = (0);
var i__29610_29643 = (0);
while(true){
if((i__29610_29643 < count__29609_29642)){
var req_29644 = cljs.core._nth.call(null,chunk__29608_29641,i__29610_29643);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29644,prov);


var G__29645 = seq__29607_29640;
var G__29646 = chunk__29608_29641;
var G__29647 = count__29609_29642;
var G__29648 = (i__29610_29643 + (1));
seq__29607_29640 = G__29645;
chunk__29608_29641 = G__29646;
count__29609_29642 = G__29647;
i__29610_29643 = G__29648;
continue;
} else {
var temp__5457__auto___29649__$1 = cljs.core.seq.call(null,seq__29607_29640);
if(temp__5457__auto___29649__$1){
var seq__29607_29650__$1 = temp__5457__auto___29649__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29607_29650__$1)){
var c__4319__auto___29651 = cljs.core.chunk_first.call(null,seq__29607_29650__$1);
var G__29652 = cljs.core.chunk_rest.call(null,seq__29607_29650__$1);
var G__29653 = c__4319__auto___29651;
var G__29654 = cljs.core.count.call(null,c__4319__auto___29651);
var G__29655 = (0);
seq__29607_29640 = G__29652;
chunk__29608_29641 = G__29653;
count__29609_29642 = G__29654;
i__29610_29643 = G__29655;
continue;
} else {
var req_29656 = cljs.core.first.call(null,seq__29607_29650__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29656,prov);


var G__29657 = cljs.core.next.call(null,seq__29607_29650__$1);
var G__29658 = null;
var G__29659 = (0);
var G__29660 = (0);
seq__29607_29640 = G__29657;
chunk__29608_29641 = G__29658;
count__29609_29642 = G__29659;
i__29610_29643 = G__29660;
continue;
}
} else {
}
}
break;
}


var G__29661 = cljs.core.next.call(null,seq__29599__$1);
var G__29662 = null;
var G__29663 = (0);
var G__29664 = (0);
seq__29599 = G__29661;
chunk__29600 = G__29662;
count__29601 = G__29663;
i__29602 = G__29664;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29665_29669 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29666_29670 = null;
var count__29667_29671 = (0);
var i__29668_29672 = (0);
while(true){
if((i__29668_29672 < count__29667_29671)){
var ns_29673 = cljs.core._nth.call(null,chunk__29666_29670,i__29668_29672);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29673);


var G__29674 = seq__29665_29669;
var G__29675 = chunk__29666_29670;
var G__29676 = count__29667_29671;
var G__29677 = (i__29668_29672 + (1));
seq__29665_29669 = G__29674;
chunk__29666_29670 = G__29675;
count__29667_29671 = G__29676;
i__29668_29672 = G__29677;
continue;
} else {
var temp__5457__auto___29678 = cljs.core.seq.call(null,seq__29665_29669);
if(temp__5457__auto___29678){
var seq__29665_29679__$1 = temp__5457__auto___29678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29665_29679__$1)){
var c__4319__auto___29680 = cljs.core.chunk_first.call(null,seq__29665_29679__$1);
var G__29681 = cljs.core.chunk_rest.call(null,seq__29665_29679__$1);
var G__29682 = c__4319__auto___29680;
var G__29683 = cljs.core.count.call(null,c__4319__auto___29680);
var G__29684 = (0);
seq__29665_29669 = G__29681;
chunk__29666_29670 = G__29682;
count__29667_29671 = G__29683;
i__29668_29672 = G__29684;
continue;
} else {
var ns_29685 = cljs.core.first.call(null,seq__29665_29679__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29685);


var G__29686 = cljs.core.next.call(null,seq__29665_29679__$1);
var G__29687 = null;
var G__29688 = (0);
var G__29689 = (0);
seq__29665_29669 = G__29686;
chunk__29666_29670 = G__29687;
count__29667_29671 = G__29688;
i__29668_29672 = G__29689;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29690__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29691__i = 0, G__29691__a = new Array(arguments.length -  0);
while (G__29691__i < G__29691__a.length) {G__29691__a[G__29691__i] = arguments[G__29691__i + 0]; ++G__29691__i;}
  args = new cljs.core.IndexedSeq(G__29691__a,0,null);
} 
return G__29690__delegate.call(this,args);};
G__29690.cljs$lang$maxFixedArity = 0;
G__29690.cljs$lang$applyTo = (function (arglist__29692){
var args = cljs.core.seq(arglist__29692);
return G__29690__delegate(args);
});
G__29690.cljs$core$IFn$_invoke$arity$variadic = G__29690__delegate;
return G__29690;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29693_SHARP_,p2__29694_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29693_SHARP_)].join('')),p2__29694_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29695_SHARP_,p2__29696_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29695_SHARP_)].join(''),p2__29696_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29697 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29697.addCallback(((function (G__29697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29697))
);

G__29697.addErrback(((function (G__29697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29697))
);

return G__29697;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29698){if((e29698 instanceof Error)){
var e = e29698;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29698;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29699){if((e29699 instanceof Error)){
var e = e29699;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29699;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29700 = cljs.core._EQ_;
var expr__29701 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29700.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29701))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29700.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29701))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29700.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29701))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29700,expr__29701){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29700,expr__29701))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29703,callback){
var map__29704 = p__29703;
var map__29704__$1 = ((((!((map__29704 == null)))?(((((map__29704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704):map__29704);
var file_msg = map__29704__$1;
var request_url = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29704,map__29704__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29704,map__29704__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__){
return (function (state_29742){
var state_val_29743 = (state_29742[(1)]);
if((state_val_29743 === (7))){
var inst_29738 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
var statearr_29744_29770 = state_29742__$1;
(statearr_29744_29770[(2)] = inst_29738);

(statearr_29744_29770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (1))){
var state_29742__$1 = state_29742;
var statearr_29745_29771 = state_29742__$1;
(statearr_29745_29771[(2)] = null);

(statearr_29745_29771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (4))){
var inst_29708 = (state_29742[(7)]);
var inst_29708__$1 = (state_29742[(2)]);
var state_29742__$1 = (function (){var statearr_29746 = state_29742;
(statearr_29746[(7)] = inst_29708__$1);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29708__$1)){
var statearr_29747_29772 = state_29742__$1;
(statearr_29747_29772[(1)] = (5));

} else {
var statearr_29748_29773 = state_29742__$1;
(statearr_29748_29773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (15))){
var inst_29723 = (state_29742[(8)]);
var inst_29721 = (state_29742[(9)]);
var inst_29725 = inst_29723.call(null,inst_29721);
var state_29742__$1 = state_29742;
var statearr_29749_29774 = state_29742__$1;
(statearr_29749_29774[(2)] = inst_29725);

(statearr_29749_29774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (13))){
var inst_29732 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
var statearr_29750_29775 = state_29742__$1;
(statearr_29750_29775[(2)] = inst_29732);

(statearr_29750_29775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (6))){
var state_29742__$1 = state_29742;
var statearr_29751_29776 = state_29742__$1;
(statearr_29751_29776[(2)] = null);

(statearr_29751_29776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (17))){
var inst_29729 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
var statearr_29752_29777 = state_29742__$1;
(statearr_29752_29777[(2)] = inst_29729);

(statearr_29752_29777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (3))){
var inst_29740 = (state_29742[(2)]);
var state_29742__$1 = state_29742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29742__$1,inst_29740);
} else {
if((state_val_29743 === (12))){
var state_29742__$1 = state_29742;
var statearr_29753_29778 = state_29742__$1;
(statearr_29753_29778[(2)] = null);

(statearr_29753_29778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (2))){
var state_29742__$1 = state_29742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29742__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29743 === (11))){
var inst_29713 = (state_29742[(10)]);
var inst_29719 = figwheel.client.file_reloading.blocking_load.call(null,inst_29713);
var state_29742__$1 = state_29742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29742__$1,(14),inst_29719);
} else {
if((state_val_29743 === (9))){
var inst_29713 = (state_29742[(10)]);
var state_29742__$1 = state_29742;
if(cljs.core.truth_(inst_29713)){
var statearr_29754_29779 = state_29742__$1;
(statearr_29754_29779[(1)] = (11));

} else {
var statearr_29755_29780 = state_29742__$1;
(statearr_29755_29780[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (5))){
var inst_29714 = (state_29742[(11)]);
var inst_29708 = (state_29742[(7)]);
var inst_29713 = cljs.core.nth.call(null,inst_29708,(0),null);
var inst_29714__$1 = cljs.core.nth.call(null,inst_29708,(1),null);
var state_29742__$1 = (function (){var statearr_29756 = state_29742;
(statearr_29756[(11)] = inst_29714__$1);

(statearr_29756[(10)] = inst_29713);

return statearr_29756;
})();
if(cljs.core.truth_(inst_29714__$1)){
var statearr_29757_29781 = state_29742__$1;
(statearr_29757_29781[(1)] = (8));

} else {
var statearr_29758_29782 = state_29742__$1;
(statearr_29758_29782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (14))){
var inst_29723 = (state_29742[(8)]);
var inst_29713 = (state_29742[(10)]);
var inst_29721 = (state_29742[(2)]);
var inst_29722 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29723__$1 = cljs.core.get.call(null,inst_29722,inst_29713);
var state_29742__$1 = (function (){var statearr_29759 = state_29742;
(statearr_29759[(8)] = inst_29723__$1);

(statearr_29759[(9)] = inst_29721);

return statearr_29759;
})();
if(cljs.core.truth_(inst_29723__$1)){
var statearr_29760_29783 = state_29742__$1;
(statearr_29760_29783[(1)] = (15));

} else {
var statearr_29761_29784 = state_29742__$1;
(statearr_29761_29784[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (16))){
var inst_29721 = (state_29742[(9)]);
var inst_29727 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29721);
var state_29742__$1 = state_29742;
var statearr_29762_29785 = state_29742__$1;
(statearr_29762_29785[(2)] = inst_29727);

(statearr_29762_29785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (10))){
var inst_29734 = (state_29742[(2)]);
var state_29742__$1 = (function (){var statearr_29763 = state_29742;
(statearr_29763[(12)] = inst_29734);

return statearr_29763;
})();
var statearr_29764_29786 = state_29742__$1;
(statearr_29764_29786[(2)] = null);

(statearr_29764_29786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29743 === (8))){
var inst_29714 = (state_29742[(11)]);
var inst_29716 = eval(inst_29714);
var state_29742__$1 = state_29742;
var statearr_29765_29787 = state_29742__$1;
(statearr_29765_29787[(2)] = inst_29716);

(statearr_29765_29787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27592__auto__))
;
return ((function (switch__27502__auto__,c__27592__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27503__auto__ = null;
var figwheel$client$file_reloading$state_machine__27503__auto____0 = (function (){
var statearr_29766 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29766[(0)] = figwheel$client$file_reloading$state_machine__27503__auto__);

(statearr_29766[(1)] = (1));

return statearr_29766;
});
var figwheel$client$file_reloading$state_machine__27503__auto____1 = (function (state_29742){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29767){if((e29767 instanceof Object)){
var ex__27506__auto__ = e29767;
var statearr_29768_29788 = state_29742;
(statearr_29768_29788[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29789 = state_29742;
state_29742 = G__29789;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27503__auto__ = function(state_29742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27503__auto____1.call(this,state_29742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27503__auto____0;
figwheel$client$file_reloading$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27503__auto____1;
return figwheel$client$file_reloading$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__))
})();
var state__27594__auto__ = (function (){var statearr_29769 = f__27593__auto__.call(null);
(statearr_29769[(6)] = c__27592__auto__);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__))
);

return c__27592__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29791 = arguments.length;
switch (G__29791) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29793,callback){
var map__29794 = p__29793;
var map__29794__$1 = ((((!((map__29794 == null)))?(((((map__29794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29794):map__29794);
var file_msg = map__29794__$1;
var namespace = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29794,map__29794__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29794,map__29794__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29796){
var map__29797 = p__29796;
var map__29797__$1 = ((((!((map__29797 == null)))?(((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var file_msg = map__29797__$1;
var namespace = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29799){
var map__29800 = p__29799;
var map__29800__$1 = ((((!((map__29800 == null)))?(((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29800):map__29800);
var file_msg = map__29800__$1;
var namespace = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29802,callback){
var map__29803 = p__29802;
var map__29803__$1 = ((((!((map__29803 == null)))?(((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29803):map__29803);
var file_msg = map__29803__$1;
var request_url = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27592__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29853,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29853,out){
return (function (state_29838){
var state_val_29839 = (state_29838[(1)]);
if((state_val_29839 === (1))){
var inst_29812 = cljs.core.seq.call(null,files);
var inst_29813 = cljs.core.first.call(null,inst_29812);
var inst_29814 = cljs.core.next.call(null,inst_29812);
var inst_29815 = files;
var state_29838__$1 = (function (){var statearr_29840 = state_29838;
(statearr_29840[(7)] = inst_29815);

(statearr_29840[(8)] = inst_29813);

(statearr_29840[(9)] = inst_29814);

return statearr_29840;
})();
var statearr_29841_29854 = state_29838__$1;
(statearr_29841_29854[(2)] = null);

(statearr_29841_29854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (2))){
var inst_29821 = (state_29838[(10)]);
var inst_29815 = (state_29838[(7)]);
var inst_29820 = cljs.core.seq.call(null,inst_29815);
var inst_29821__$1 = cljs.core.first.call(null,inst_29820);
var inst_29822 = cljs.core.next.call(null,inst_29820);
var inst_29823 = (inst_29821__$1 == null);
var inst_29824 = cljs.core.not.call(null,inst_29823);
var state_29838__$1 = (function (){var statearr_29842 = state_29838;
(statearr_29842[(10)] = inst_29821__$1);

(statearr_29842[(11)] = inst_29822);

return statearr_29842;
})();
if(inst_29824){
var statearr_29843_29855 = state_29838__$1;
(statearr_29843_29855[(1)] = (4));

} else {
var statearr_29844_29856 = state_29838__$1;
(statearr_29844_29856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (3))){
var inst_29836 = (state_29838[(2)]);
var state_29838__$1 = state_29838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29838__$1,inst_29836);
} else {
if((state_val_29839 === (4))){
var inst_29821 = (state_29838[(10)]);
var inst_29826 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29821);
var state_29838__$1 = state_29838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29838__$1,(7),inst_29826);
} else {
if((state_val_29839 === (5))){
var inst_29832 = cljs.core.async.close_BANG_.call(null,out);
var state_29838__$1 = state_29838;
var statearr_29845_29857 = state_29838__$1;
(statearr_29845_29857[(2)] = inst_29832);

(statearr_29845_29857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (6))){
var inst_29834 = (state_29838[(2)]);
var state_29838__$1 = state_29838;
var statearr_29846_29858 = state_29838__$1;
(statearr_29846_29858[(2)] = inst_29834);

(statearr_29846_29858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29839 === (7))){
var inst_29822 = (state_29838[(11)]);
var inst_29828 = (state_29838[(2)]);
var inst_29829 = cljs.core.async.put_BANG_.call(null,out,inst_29828);
var inst_29815 = inst_29822;
var state_29838__$1 = (function (){var statearr_29847 = state_29838;
(statearr_29847[(12)] = inst_29829);

(statearr_29847[(7)] = inst_29815);

return statearr_29847;
})();
var statearr_29848_29859 = state_29838__$1;
(statearr_29848_29859[(2)] = null);

(statearr_29848_29859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27592__auto___29853,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29853,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto____0 = (function (){
var statearr_29849 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29849[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto__);

(statearr_29849[(1)] = (1));

return statearr_29849;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto____1 = (function (state_29838){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29850){if((e29850 instanceof Object)){
var ex__27506__auto__ = e29850;
var statearr_29851_29860 = state_29838;
(statearr_29851_29860[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29861 = state_29838;
state_29838 = G__29861;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto__ = function(state_29838){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto____1.call(this,state_29838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29853,out))
})();
var state__27594__auto__ = (function (){var statearr_29852 = f__27593__auto__.call(null);
(statearr_29852[(6)] = c__27592__auto___29853);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29853,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29862,opts){
var map__29863 = p__29862;
var map__29863__$1 = ((((!((map__29863 == null)))?(((((map__29863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var eval_body = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29865){var e = e29865;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29866_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29866_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29867){
var vec__29868 = p__29867;
var k = cljs.core.nth.call(null,vec__29868,(0),null);
var v = cljs.core.nth.call(null,vec__29868,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29871){
var vec__29872 = p__29871;
var k = cljs.core.nth.call(null,vec__29872,(0),null);
var v = cljs.core.nth.call(null,vec__29872,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29878,p__29879){
var map__29880 = p__29878;
var map__29880__$1 = ((((!((map__29880 == null)))?(((((map__29880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29880):map__29880);
var opts = map__29880__$1;
var before_jsload = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29881 = p__29879;
var map__29881__$1 = ((((!((map__29881 == null)))?(((((map__29881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29881):map__29881);
var msg = map__29881__$1;
var files = cljs.core.get.call(null,map__29881__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29881__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29881__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30035){
var state_val_30036 = (state_30035[(1)]);
if((state_val_30036 === (7))){
var inst_29896 = (state_30035[(7)]);
var inst_29897 = (state_30035[(8)]);
var inst_29895 = (state_30035[(9)]);
var inst_29898 = (state_30035[(10)]);
var inst_29903 = cljs.core._nth.call(null,inst_29896,inst_29898);
var inst_29904 = figwheel.client.file_reloading.eval_body.call(null,inst_29903,opts);
var inst_29905 = (inst_29898 + (1));
var tmp30037 = inst_29896;
var tmp30038 = inst_29897;
var tmp30039 = inst_29895;
var inst_29895__$1 = tmp30039;
var inst_29896__$1 = tmp30037;
var inst_29897__$1 = tmp30038;
var inst_29898__$1 = inst_29905;
var state_30035__$1 = (function (){var statearr_30040 = state_30035;
(statearr_30040[(7)] = inst_29896__$1);

(statearr_30040[(11)] = inst_29904);

(statearr_30040[(8)] = inst_29897__$1);

(statearr_30040[(9)] = inst_29895__$1);

(statearr_30040[(10)] = inst_29898__$1);

return statearr_30040;
})();
var statearr_30041_30124 = state_30035__$1;
(statearr_30041_30124[(2)] = null);

(statearr_30041_30124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (20))){
var inst_29938 = (state_30035[(12)]);
var inst_29946 = figwheel.client.file_reloading.sort_files.call(null,inst_29938);
var state_30035__$1 = state_30035;
var statearr_30042_30125 = state_30035__$1;
(statearr_30042_30125[(2)] = inst_29946);

(statearr_30042_30125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (27))){
var state_30035__$1 = state_30035;
var statearr_30043_30126 = state_30035__$1;
(statearr_30043_30126[(2)] = null);

(statearr_30043_30126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (1))){
var inst_29887 = (state_30035[(13)]);
var inst_29884 = before_jsload.call(null,files);
var inst_29885 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29886 = (function (){return ((function (inst_29887,inst_29884,inst_29885,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29875_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29875_SHARP_);
});
;})(inst_29887,inst_29884,inst_29885,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29887__$1 = cljs.core.filter.call(null,inst_29886,files);
var inst_29888 = cljs.core.not_empty.call(null,inst_29887__$1);
var state_30035__$1 = (function (){var statearr_30044 = state_30035;
(statearr_30044[(13)] = inst_29887__$1);

(statearr_30044[(14)] = inst_29884);

(statearr_30044[(15)] = inst_29885);

return statearr_30044;
})();
if(cljs.core.truth_(inst_29888)){
var statearr_30045_30127 = state_30035__$1;
(statearr_30045_30127[(1)] = (2));

} else {
var statearr_30046_30128 = state_30035__$1;
(statearr_30046_30128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (24))){
var state_30035__$1 = state_30035;
var statearr_30047_30129 = state_30035__$1;
(statearr_30047_30129[(2)] = null);

(statearr_30047_30129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (39))){
var inst_29988 = (state_30035[(16)]);
var state_30035__$1 = state_30035;
var statearr_30048_30130 = state_30035__$1;
(statearr_30048_30130[(2)] = inst_29988);

(statearr_30048_30130[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (46))){
var inst_30030 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30049_30131 = state_30035__$1;
(statearr_30049_30131[(2)] = inst_30030);

(statearr_30049_30131[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (4))){
var inst_29932 = (state_30035[(2)]);
var inst_29933 = cljs.core.List.EMPTY;
var inst_29934 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29933);
var inst_29935 = (function (){return ((function (inst_29932,inst_29933,inst_29934,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29876_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29876_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29876_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29876_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29932,inst_29933,inst_29934,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29936 = cljs.core.filter.call(null,inst_29935,files);
var inst_29937 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29938 = cljs.core.concat.call(null,inst_29936,inst_29937);
var state_30035__$1 = (function (){var statearr_30050 = state_30035;
(statearr_30050[(12)] = inst_29938);

(statearr_30050[(17)] = inst_29934);

(statearr_30050[(18)] = inst_29932);

return statearr_30050;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30051_30132 = state_30035__$1;
(statearr_30051_30132[(1)] = (16));

} else {
var statearr_30052_30133 = state_30035__$1;
(statearr_30052_30133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (15))){
var inst_29922 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30053_30134 = state_30035__$1;
(statearr_30053_30134[(2)] = inst_29922);

(statearr_30053_30134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (21))){
var inst_29948 = (state_30035[(19)]);
var inst_29948__$1 = (state_30035[(2)]);
var inst_29949 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29948__$1);
var state_30035__$1 = (function (){var statearr_30054 = state_30035;
(statearr_30054[(19)] = inst_29948__$1);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30035__$1,(22),inst_29949);
} else {
if((state_val_30036 === (31))){
var inst_30033 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30035__$1,inst_30033);
} else {
if((state_val_30036 === (32))){
var inst_29988 = (state_30035[(16)]);
var inst_29993 = inst_29988.cljs$lang$protocol_mask$partition0$;
var inst_29994 = (inst_29993 & (64));
var inst_29995 = inst_29988.cljs$core$ISeq$;
var inst_29996 = (cljs.core.PROTOCOL_SENTINEL === inst_29995);
var inst_29997 = ((inst_29994) || (inst_29996));
var state_30035__$1 = state_30035;
if(cljs.core.truth_(inst_29997)){
var statearr_30055_30135 = state_30035__$1;
(statearr_30055_30135[(1)] = (35));

} else {
var statearr_30056_30136 = state_30035__$1;
(statearr_30056_30136[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (40))){
var inst_30010 = (state_30035[(20)]);
var inst_30009 = (state_30035[(2)]);
var inst_30010__$1 = cljs.core.get.call(null,inst_30009,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30011 = cljs.core.get.call(null,inst_30009,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30012 = cljs.core.not_empty.call(null,inst_30010__$1);
var state_30035__$1 = (function (){var statearr_30057 = state_30035;
(statearr_30057[(21)] = inst_30011);

(statearr_30057[(20)] = inst_30010__$1);

return statearr_30057;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30058_30137 = state_30035__$1;
(statearr_30058_30137[(1)] = (41));

} else {
var statearr_30059_30138 = state_30035__$1;
(statearr_30059_30138[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (33))){
var state_30035__$1 = state_30035;
var statearr_30060_30139 = state_30035__$1;
(statearr_30060_30139[(2)] = false);

(statearr_30060_30139[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (13))){
var inst_29908 = (state_30035[(22)]);
var inst_29912 = cljs.core.chunk_first.call(null,inst_29908);
var inst_29913 = cljs.core.chunk_rest.call(null,inst_29908);
var inst_29914 = cljs.core.count.call(null,inst_29912);
var inst_29895 = inst_29913;
var inst_29896 = inst_29912;
var inst_29897 = inst_29914;
var inst_29898 = (0);
var state_30035__$1 = (function (){var statearr_30061 = state_30035;
(statearr_30061[(7)] = inst_29896);

(statearr_30061[(8)] = inst_29897);

(statearr_30061[(9)] = inst_29895);

(statearr_30061[(10)] = inst_29898);

return statearr_30061;
})();
var statearr_30062_30140 = state_30035__$1;
(statearr_30062_30140[(2)] = null);

(statearr_30062_30140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (22))){
var inst_29956 = (state_30035[(23)]);
var inst_29948 = (state_30035[(19)]);
var inst_29951 = (state_30035[(24)]);
var inst_29952 = (state_30035[(25)]);
var inst_29951__$1 = (state_30035[(2)]);
var inst_29952__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29951__$1);
var inst_29953 = (function (){var all_files = inst_29948;
var res_SINGLEQUOTE_ = inst_29951__$1;
var res = inst_29952__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29956,inst_29948,inst_29951,inst_29952,inst_29951__$1,inst_29952__$1,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29877_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29877_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29956,inst_29948,inst_29951,inst_29952,inst_29951__$1,inst_29952__$1,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29954 = cljs.core.filter.call(null,inst_29953,inst_29951__$1);
var inst_29955 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29956__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29955);
var inst_29957 = cljs.core.not_empty.call(null,inst_29956__$1);
var state_30035__$1 = (function (){var statearr_30063 = state_30035;
(statearr_30063[(23)] = inst_29956__$1);

(statearr_30063[(26)] = inst_29954);

(statearr_30063[(24)] = inst_29951__$1);

(statearr_30063[(25)] = inst_29952__$1);

return statearr_30063;
})();
if(cljs.core.truth_(inst_29957)){
var statearr_30064_30141 = state_30035__$1;
(statearr_30064_30141[(1)] = (23));

} else {
var statearr_30065_30142 = state_30035__$1;
(statearr_30065_30142[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (36))){
var state_30035__$1 = state_30035;
var statearr_30066_30143 = state_30035__$1;
(statearr_30066_30143[(2)] = false);

(statearr_30066_30143[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (41))){
var inst_30010 = (state_30035[(20)]);
var inst_30014 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30015 = cljs.core.map.call(null,inst_30014,inst_30010);
var inst_30016 = cljs.core.pr_str.call(null,inst_30015);
var inst_30017 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30016)].join('');
var inst_30018 = figwheel.client.utils.log.call(null,inst_30017);
var state_30035__$1 = state_30035;
var statearr_30067_30144 = state_30035__$1;
(statearr_30067_30144[(2)] = inst_30018);

(statearr_30067_30144[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (43))){
var inst_30011 = (state_30035[(21)]);
var inst_30021 = (state_30035[(2)]);
var inst_30022 = cljs.core.not_empty.call(null,inst_30011);
var state_30035__$1 = (function (){var statearr_30068 = state_30035;
(statearr_30068[(27)] = inst_30021);

return statearr_30068;
})();
if(cljs.core.truth_(inst_30022)){
var statearr_30069_30145 = state_30035__$1;
(statearr_30069_30145[(1)] = (44));

} else {
var statearr_30070_30146 = state_30035__$1;
(statearr_30070_30146[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (29))){
var inst_29956 = (state_30035[(23)]);
var inst_29954 = (state_30035[(26)]);
var inst_29948 = (state_30035[(19)]);
var inst_29988 = (state_30035[(16)]);
var inst_29951 = (state_30035[(24)]);
var inst_29952 = (state_30035[(25)]);
var inst_29984 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29987 = (function (){var all_files = inst_29948;
var res_SINGLEQUOTE_ = inst_29951;
var res = inst_29952;
var files_not_loaded = inst_29954;
var dependencies_that_loaded = inst_29956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29988,inst_29951,inst_29952,inst_29984,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29986){
var map__30071 = p__29986;
var map__30071__$1 = ((((!((map__30071 == null)))?(((((map__30071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30071):map__30071);
var namespace = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29988,inst_29951,inst_29952,inst_29984,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29988__$1 = cljs.core.group_by.call(null,inst_29987,inst_29954);
var inst_29990 = (inst_29988__$1 == null);
var inst_29991 = cljs.core.not.call(null,inst_29990);
var state_30035__$1 = (function (){var statearr_30073 = state_30035;
(statearr_30073[(16)] = inst_29988__$1);

(statearr_30073[(28)] = inst_29984);

return statearr_30073;
})();
if(inst_29991){
var statearr_30074_30147 = state_30035__$1;
(statearr_30074_30147[(1)] = (32));

} else {
var statearr_30075_30148 = state_30035__$1;
(statearr_30075_30148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (44))){
var inst_30011 = (state_30035[(21)]);
var inst_30024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30011);
var inst_30025 = cljs.core.pr_str.call(null,inst_30024);
var inst_30026 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30025)].join('');
var inst_30027 = figwheel.client.utils.log.call(null,inst_30026);
var state_30035__$1 = state_30035;
var statearr_30076_30149 = state_30035__$1;
(statearr_30076_30149[(2)] = inst_30027);

(statearr_30076_30149[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (6))){
var inst_29929 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30077_30150 = state_30035__$1;
(statearr_30077_30150[(2)] = inst_29929);

(statearr_30077_30150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (28))){
var inst_29954 = (state_30035[(26)]);
var inst_29981 = (state_30035[(2)]);
var inst_29982 = cljs.core.not_empty.call(null,inst_29954);
var state_30035__$1 = (function (){var statearr_30078 = state_30035;
(statearr_30078[(29)] = inst_29981);

return statearr_30078;
})();
if(cljs.core.truth_(inst_29982)){
var statearr_30079_30151 = state_30035__$1;
(statearr_30079_30151[(1)] = (29));

} else {
var statearr_30080_30152 = state_30035__$1;
(statearr_30080_30152[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (25))){
var inst_29952 = (state_30035[(25)]);
var inst_29968 = (state_30035[(2)]);
var inst_29969 = cljs.core.not_empty.call(null,inst_29952);
var state_30035__$1 = (function (){var statearr_30081 = state_30035;
(statearr_30081[(30)] = inst_29968);

return statearr_30081;
})();
if(cljs.core.truth_(inst_29969)){
var statearr_30082_30153 = state_30035__$1;
(statearr_30082_30153[(1)] = (26));

} else {
var statearr_30083_30154 = state_30035__$1;
(statearr_30083_30154[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (34))){
var inst_30004 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
if(cljs.core.truth_(inst_30004)){
var statearr_30084_30155 = state_30035__$1;
(statearr_30084_30155[(1)] = (38));

} else {
var statearr_30085_30156 = state_30035__$1;
(statearr_30085_30156[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (17))){
var state_30035__$1 = state_30035;
var statearr_30086_30157 = state_30035__$1;
(statearr_30086_30157[(2)] = recompile_dependents);

(statearr_30086_30157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (3))){
var state_30035__$1 = state_30035;
var statearr_30087_30158 = state_30035__$1;
(statearr_30087_30158[(2)] = null);

(statearr_30087_30158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (12))){
var inst_29925 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30088_30159 = state_30035__$1;
(statearr_30088_30159[(2)] = inst_29925);

(statearr_30088_30159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (2))){
var inst_29887 = (state_30035[(13)]);
var inst_29894 = cljs.core.seq.call(null,inst_29887);
var inst_29895 = inst_29894;
var inst_29896 = null;
var inst_29897 = (0);
var inst_29898 = (0);
var state_30035__$1 = (function (){var statearr_30089 = state_30035;
(statearr_30089[(7)] = inst_29896);

(statearr_30089[(8)] = inst_29897);

(statearr_30089[(9)] = inst_29895);

(statearr_30089[(10)] = inst_29898);

return statearr_30089;
})();
var statearr_30090_30160 = state_30035__$1;
(statearr_30090_30160[(2)] = null);

(statearr_30090_30160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (23))){
var inst_29956 = (state_30035[(23)]);
var inst_29954 = (state_30035[(26)]);
var inst_29948 = (state_30035[(19)]);
var inst_29951 = (state_30035[(24)]);
var inst_29952 = (state_30035[(25)]);
var inst_29959 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29961 = (function (){var all_files = inst_29948;
var res_SINGLEQUOTE_ = inst_29951;
var res = inst_29952;
var files_not_loaded = inst_29954;
var dependencies_that_loaded = inst_29956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29951,inst_29952,inst_29959,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29960){
var map__30091 = p__29960;
var map__30091__$1 = ((((!((map__30091 == null)))?(((((map__30091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30091):map__30091);
var request_url = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29951,inst_29952,inst_29959,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29962 = cljs.core.reverse.call(null,inst_29956);
var inst_29963 = cljs.core.map.call(null,inst_29961,inst_29962);
var inst_29964 = cljs.core.pr_str.call(null,inst_29963);
var inst_29965 = figwheel.client.utils.log.call(null,inst_29964);
var state_30035__$1 = (function (){var statearr_30093 = state_30035;
(statearr_30093[(31)] = inst_29959);

return statearr_30093;
})();
var statearr_30094_30161 = state_30035__$1;
(statearr_30094_30161[(2)] = inst_29965);

(statearr_30094_30161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (35))){
var state_30035__$1 = state_30035;
var statearr_30095_30162 = state_30035__$1;
(statearr_30095_30162[(2)] = true);

(statearr_30095_30162[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (19))){
var inst_29938 = (state_30035[(12)]);
var inst_29944 = figwheel.client.file_reloading.expand_files.call(null,inst_29938);
var state_30035__$1 = state_30035;
var statearr_30096_30163 = state_30035__$1;
(statearr_30096_30163[(2)] = inst_29944);

(statearr_30096_30163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (11))){
var state_30035__$1 = state_30035;
var statearr_30097_30164 = state_30035__$1;
(statearr_30097_30164[(2)] = null);

(statearr_30097_30164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (9))){
var inst_29927 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30098_30165 = state_30035__$1;
(statearr_30098_30165[(2)] = inst_29927);

(statearr_30098_30165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (5))){
var inst_29897 = (state_30035[(8)]);
var inst_29898 = (state_30035[(10)]);
var inst_29900 = (inst_29898 < inst_29897);
var inst_29901 = inst_29900;
var state_30035__$1 = state_30035;
if(cljs.core.truth_(inst_29901)){
var statearr_30099_30166 = state_30035__$1;
(statearr_30099_30166[(1)] = (7));

} else {
var statearr_30100_30167 = state_30035__$1;
(statearr_30100_30167[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (14))){
var inst_29908 = (state_30035[(22)]);
var inst_29917 = cljs.core.first.call(null,inst_29908);
var inst_29918 = figwheel.client.file_reloading.eval_body.call(null,inst_29917,opts);
var inst_29919 = cljs.core.next.call(null,inst_29908);
var inst_29895 = inst_29919;
var inst_29896 = null;
var inst_29897 = (0);
var inst_29898 = (0);
var state_30035__$1 = (function (){var statearr_30101 = state_30035;
(statearr_30101[(7)] = inst_29896);

(statearr_30101[(8)] = inst_29897);

(statearr_30101[(32)] = inst_29918);

(statearr_30101[(9)] = inst_29895);

(statearr_30101[(10)] = inst_29898);

return statearr_30101;
})();
var statearr_30102_30168 = state_30035__$1;
(statearr_30102_30168[(2)] = null);

(statearr_30102_30168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (45))){
var state_30035__$1 = state_30035;
var statearr_30103_30169 = state_30035__$1;
(statearr_30103_30169[(2)] = null);

(statearr_30103_30169[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (26))){
var inst_29956 = (state_30035[(23)]);
var inst_29954 = (state_30035[(26)]);
var inst_29948 = (state_30035[(19)]);
var inst_29951 = (state_30035[(24)]);
var inst_29952 = (state_30035[(25)]);
var inst_29971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29973 = (function (){var all_files = inst_29948;
var res_SINGLEQUOTE_ = inst_29951;
var res = inst_29952;
var files_not_loaded = inst_29954;
var dependencies_that_loaded = inst_29956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29951,inst_29952,inst_29971,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29972){
var map__30104 = p__29972;
var map__30104__$1 = ((((!((map__30104 == null)))?(((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var namespace = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29951,inst_29952,inst_29971,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29974 = cljs.core.map.call(null,inst_29973,inst_29952);
var inst_29975 = cljs.core.pr_str.call(null,inst_29974);
var inst_29976 = figwheel.client.utils.log.call(null,inst_29975);
var inst_29977 = (function (){var all_files = inst_29948;
var res_SINGLEQUOTE_ = inst_29951;
var res = inst_29952;
var files_not_loaded = inst_29954;
var dependencies_that_loaded = inst_29956;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29951,inst_29952,inst_29971,inst_29973,inst_29974,inst_29975,inst_29976,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29956,inst_29954,inst_29948,inst_29951,inst_29952,inst_29971,inst_29973,inst_29974,inst_29975,inst_29976,state_val_30036,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29978 = setTimeout(inst_29977,(10));
var state_30035__$1 = (function (){var statearr_30106 = state_30035;
(statearr_30106[(33)] = inst_29976);

(statearr_30106[(34)] = inst_29971);

return statearr_30106;
})();
var statearr_30107_30170 = state_30035__$1;
(statearr_30107_30170[(2)] = inst_29978);

(statearr_30107_30170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (16))){
var state_30035__$1 = state_30035;
var statearr_30108_30171 = state_30035__$1;
(statearr_30108_30171[(2)] = reload_dependents);

(statearr_30108_30171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (38))){
var inst_29988 = (state_30035[(16)]);
var inst_30006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29988);
var state_30035__$1 = state_30035;
var statearr_30109_30172 = state_30035__$1;
(statearr_30109_30172[(2)] = inst_30006);

(statearr_30109_30172[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (30))){
var state_30035__$1 = state_30035;
var statearr_30110_30173 = state_30035__$1;
(statearr_30110_30173[(2)] = null);

(statearr_30110_30173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (10))){
var inst_29908 = (state_30035[(22)]);
var inst_29910 = cljs.core.chunked_seq_QMARK_.call(null,inst_29908);
var state_30035__$1 = state_30035;
if(inst_29910){
var statearr_30111_30174 = state_30035__$1;
(statearr_30111_30174[(1)] = (13));

} else {
var statearr_30112_30175 = state_30035__$1;
(statearr_30112_30175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (18))){
var inst_29942 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
if(cljs.core.truth_(inst_29942)){
var statearr_30113_30176 = state_30035__$1;
(statearr_30113_30176[(1)] = (19));

} else {
var statearr_30114_30177 = state_30035__$1;
(statearr_30114_30177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (42))){
var state_30035__$1 = state_30035;
var statearr_30115_30178 = state_30035__$1;
(statearr_30115_30178[(2)] = null);

(statearr_30115_30178[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (37))){
var inst_30001 = (state_30035[(2)]);
var state_30035__$1 = state_30035;
var statearr_30116_30179 = state_30035__$1;
(statearr_30116_30179[(2)] = inst_30001);

(statearr_30116_30179[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30036 === (8))){
var inst_29908 = (state_30035[(22)]);
var inst_29895 = (state_30035[(9)]);
var inst_29908__$1 = cljs.core.seq.call(null,inst_29895);
var state_30035__$1 = (function (){var statearr_30117 = state_30035;
(statearr_30117[(22)] = inst_29908__$1);

return statearr_30117;
})();
if(inst_29908__$1){
var statearr_30118_30180 = state_30035__$1;
(statearr_30118_30180[(1)] = (10));

} else {
var statearr_30119_30181 = state_30035__$1;
(statearr_30119_30181[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27502__auto__,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto____0 = (function (){
var statearr_30120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30120[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto__);

(statearr_30120[(1)] = (1));

return statearr_30120;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto____1 = (function (state_30035){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_30035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e30121){if((e30121 instanceof Object)){
var ex__27506__auto__ = e30121;
var statearr_30122_30182 = state_30035;
(statearr_30122_30182[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30183 = state_30035;
state_30035 = G__30183;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto__ = function(state_30035){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto____1.call(this,state_30035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27594__auto__ = (function (){var statearr_30123 = f__27593__auto__.call(null);
(statearr_30123[(6)] = c__27592__auto__);

return statearr_30123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__,map__29880,map__29880__$1,opts,before_jsload,on_jsload,reload_dependents,map__29881,map__29881__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27592__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30186,link){
var map__30187 = p__30186;
var map__30187__$1 = ((((!((map__30187 == null)))?(((((map__30187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30187):map__30187);
var file = cljs.core.get.call(null,map__30187__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30187,map__30187__$1,file){
return (function (p1__30184_SHARP_,p2__30185_SHARP_){
if(cljs.core._EQ_.call(null,p1__30184_SHARP_,p2__30185_SHARP_)){
return p1__30184_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30187,map__30187__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30190){
var map__30191 = p__30190;
var map__30191__$1 = ((((!((map__30191 == null)))?(((((map__30191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30191):map__30191);
var match_length = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30189_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30189_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30193_SHARP_,p2__30194_SHARP_){
return cljs.core.assoc.call(null,p1__30193_SHARP_,cljs.core.get.call(null,p2__30194_SHARP_,key),p2__30194_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30195 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30195);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30195);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30196,p__30197){
var map__30198 = p__30196;
var map__30198__$1 = ((((!((map__30198 == null)))?(((((map__30198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30198):map__30198);
var on_cssload = cljs.core.get.call(null,map__30198__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30199 = p__30197;
var map__30199__$1 = ((((!((map__30199 == null)))?(((((map__30199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30199):map__30199);
var files_msg = map__30199__$1;
var files = cljs.core.get.call(null,map__30199__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1527748569503
