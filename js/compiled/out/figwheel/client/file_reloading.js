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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37027_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37027_SHARP_));
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
var seq__37028 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37029 = null;
var count__37030 = (0);
var i__37031 = (0);
while(true){
if((i__37031 < count__37030)){
var n = cljs.core._nth.call(null,chunk__37029,i__37031);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37032 = seq__37028;
var G__37033 = chunk__37029;
var G__37034 = count__37030;
var G__37035 = (i__37031 + (1));
seq__37028 = G__37032;
chunk__37029 = G__37033;
count__37030 = G__37034;
i__37031 = G__37035;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37028);
if(temp__5457__auto__){
var seq__37028__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37028__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37028__$1);
var G__37036 = cljs.core.chunk_rest.call(null,seq__37028__$1);
var G__37037 = c__4319__auto__;
var G__37038 = cljs.core.count.call(null,c__4319__auto__);
var G__37039 = (0);
seq__37028 = G__37036;
chunk__37029 = G__37037;
count__37030 = G__37038;
i__37031 = G__37039;
continue;
} else {
var n = cljs.core.first.call(null,seq__37028__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37040 = cljs.core.next.call(null,seq__37028__$1);
var G__37041 = null;
var G__37042 = (0);
var G__37043 = (0);
seq__37028 = G__37040;
chunk__37029 = G__37041;
count__37030 = G__37042;
i__37031 = G__37043;
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
return cljs.core.some.call(null,(function (p__37044){
var vec__37045 = p__37044;
var _ = cljs.core.nth.call(null,vec__37045,(0),null);
var v = cljs.core.nth.call(null,vec__37045,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__37048){
var vec__37049 = p__37048;
var k = cljs.core.nth.call(null,vec__37049,(0),null);
var v = cljs.core.nth.call(null,vec__37049,(1),null);
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

var seq__37061_37069 = cljs.core.seq.call(null,deps);
var chunk__37062_37070 = null;
var count__37063_37071 = (0);
var i__37064_37072 = (0);
while(true){
if((i__37064_37072 < count__37063_37071)){
var dep_37073 = cljs.core._nth.call(null,chunk__37062_37070,i__37064_37072);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_37073;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37073));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37073,(depth + (1)),state);
} else {
}


var G__37074 = seq__37061_37069;
var G__37075 = chunk__37062_37070;
var G__37076 = count__37063_37071;
var G__37077 = (i__37064_37072 + (1));
seq__37061_37069 = G__37074;
chunk__37062_37070 = G__37075;
count__37063_37071 = G__37076;
i__37064_37072 = G__37077;
continue;
} else {
var temp__5457__auto___37078 = cljs.core.seq.call(null,seq__37061_37069);
if(temp__5457__auto___37078){
var seq__37061_37079__$1 = temp__5457__auto___37078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37061_37079__$1)){
var c__4319__auto___37080 = cljs.core.chunk_first.call(null,seq__37061_37079__$1);
var G__37081 = cljs.core.chunk_rest.call(null,seq__37061_37079__$1);
var G__37082 = c__4319__auto___37080;
var G__37083 = cljs.core.count.call(null,c__4319__auto___37080);
var G__37084 = (0);
seq__37061_37069 = G__37081;
chunk__37062_37070 = G__37082;
count__37063_37071 = G__37083;
i__37064_37072 = G__37084;
continue;
} else {
var dep_37085 = cljs.core.first.call(null,seq__37061_37079__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_37085;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37085));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37085,(depth + (1)),state);
} else {
}


var G__37086 = cljs.core.next.call(null,seq__37061_37079__$1);
var G__37087 = null;
var G__37088 = (0);
var G__37089 = (0);
seq__37061_37069 = G__37086;
chunk__37062_37070 = G__37087;
count__37063_37071 = G__37088;
i__37064_37072 = G__37089;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37065){
var vec__37066 = p__37065;
var seq__37067 = cljs.core.seq.call(null,vec__37066);
var first__37068 = cljs.core.first.call(null,seq__37067);
var seq__37067__$1 = cljs.core.next.call(null,seq__37067);
var x = first__37068;
var xs = seq__37067__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37066,seq__37067,first__37068,seq__37067__$1,x,xs,get_deps__$1){
return (function (p1__37052_SHARP_){
return clojure.set.difference.call(null,p1__37052_SHARP_,x);
});})(vec__37066,seq__37067,first__37068,seq__37067__$1,x,xs,get_deps__$1))
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
var seq__37090 = cljs.core.seq.call(null,provides);
var chunk__37091 = null;
var count__37092 = (0);
var i__37093 = (0);
while(true){
if((i__37093 < count__37092)){
var prov = cljs.core._nth.call(null,chunk__37091,i__37093);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37094_37102 = cljs.core.seq.call(null,requires);
var chunk__37095_37103 = null;
var count__37096_37104 = (0);
var i__37097_37105 = (0);
while(true){
if((i__37097_37105 < count__37096_37104)){
var req_37106 = cljs.core._nth.call(null,chunk__37095_37103,i__37097_37105);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37106,prov);


var G__37107 = seq__37094_37102;
var G__37108 = chunk__37095_37103;
var G__37109 = count__37096_37104;
var G__37110 = (i__37097_37105 + (1));
seq__37094_37102 = G__37107;
chunk__37095_37103 = G__37108;
count__37096_37104 = G__37109;
i__37097_37105 = G__37110;
continue;
} else {
var temp__5457__auto___37111 = cljs.core.seq.call(null,seq__37094_37102);
if(temp__5457__auto___37111){
var seq__37094_37112__$1 = temp__5457__auto___37111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37094_37112__$1)){
var c__4319__auto___37113 = cljs.core.chunk_first.call(null,seq__37094_37112__$1);
var G__37114 = cljs.core.chunk_rest.call(null,seq__37094_37112__$1);
var G__37115 = c__4319__auto___37113;
var G__37116 = cljs.core.count.call(null,c__4319__auto___37113);
var G__37117 = (0);
seq__37094_37102 = G__37114;
chunk__37095_37103 = G__37115;
count__37096_37104 = G__37116;
i__37097_37105 = G__37117;
continue;
} else {
var req_37118 = cljs.core.first.call(null,seq__37094_37112__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37118,prov);


var G__37119 = cljs.core.next.call(null,seq__37094_37112__$1);
var G__37120 = null;
var G__37121 = (0);
var G__37122 = (0);
seq__37094_37102 = G__37119;
chunk__37095_37103 = G__37120;
count__37096_37104 = G__37121;
i__37097_37105 = G__37122;
continue;
}
} else {
}
}
break;
}


var G__37123 = seq__37090;
var G__37124 = chunk__37091;
var G__37125 = count__37092;
var G__37126 = (i__37093 + (1));
seq__37090 = G__37123;
chunk__37091 = G__37124;
count__37092 = G__37125;
i__37093 = G__37126;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37090);
if(temp__5457__auto__){
var seq__37090__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37090__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37090__$1);
var G__37127 = cljs.core.chunk_rest.call(null,seq__37090__$1);
var G__37128 = c__4319__auto__;
var G__37129 = cljs.core.count.call(null,c__4319__auto__);
var G__37130 = (0);
seq__37090 = G__37127;
chunk__37091 = G__37128;
count__37092 = G__37129;
i__37093 = G__37130;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37090__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37098_37131 = cljs.core.seq.call(null,requires);
var chunk__37099_37132 = null;
var count__37100_37133 = (0);
var i__37101_37134 = (0);
while(true){
if((i__37101_37134 < count__37100_37133)){
var req_37135 = cljs.core._nth.call(null,chunk__37099_37132,i__37101_37134);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37135,prov);


var G__37136 = seq__37098_37131;
var G__37137 = chunk__37099_37132;
var G__37138 = count__37100_37133;
var G__37139 = (i__37101_37134 + (1));
seq__37098_37131 = G__37136;
chunk__37099_37132 = G__37137;
count__37100_37133 = G__37138;
i__37101_37134 = G__37139;
continue;
} else {
var temp__5457__auto___37140__$1 = cljs.core.seq.call(null,seq__37098_37131);
if(temp__5457__auto___37140__$1){
var seq__37098_37141__$1 = temp__5457__auto___37140__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37098_37141__$1)){
var c__4319__auto___37142 = cljs.core.chunk_first.call(null,seq__37098_37141__$1);
var G__37143 = cljs.core.chunk_rest.call(null,seq__37098_37141__$1);
var G__37144 = c__4319__auto___37142;
var G__37145 = cljs.core.count.call(null,c__4319__auto___37142);
var G__37146 = (0);
seq__37098_37131 = G__37143;
chunk__37099_37132 = G__37144;
count__37100_37133 = G__37145;
i__37101_37134 = G__37146;
continue;
} else {
var req_37147 = cljs.core.first.call(null,seq__37098_37141__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37147,prov);


var G__37148 = cljs.core.next.call(null,seq__37098_37141__$1);
var G__37149 = null;
var G__37150 = (0);
var G__37151 = (0);
seq__37098_37131 = G__37148;
chunk__37099_37132 = G__37149;
count__37100_37133 = G__37150;
i__37101_37134 = G__37151;
continue;
}
} else {
}
}
break;
}


var G__37152 = cljs.core.next.call(null,seq__37090__$1);
var G__37153 = null;
var G__37154 = (0);
var G__37155 = (0);
seq__37090 = G__37152;
chunk__37091 = G__37153;
count__37092 = G__37154;
i__37093 = G__37155;
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
var seq__37156_37160 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37157_37161 = null;
var count__37158_37162 = (0);
var i__37159_37163 = (0);
while(true){
if((i__37159_37163 < count__37158_37162)){
var ns_37164 = cljs.core._nth.call(null,chunk__37157_37161,i__37159_37163);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37164);


var G__37165 = seq__37156_37160;
var G__37166 = chunk__37157_37161;
var G__37167 = count__37158_37162;
var G__37168 = (i__37159_37163 + (1));
seq__37156_37160 = G__37165;
chunk__37157_37161 = G__37166;
count__37158_37162 = G__37167;
i__37159_37163 = G__37168;
continue;
} else {
var temp__5457__auto___37169 = cljs.core.seq.call(null,seq__37156_37160);
if(temp__5457__auto___37169){
var seq__37156_37170__$1 = temp__5457__auto___37169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37156_37170__$1)){
var c__4319__auto___37171 = cljs.core.chunk_first.call(null,seq__37156_37170__$1);
var G__37172 = cljs.core.chunk_rest.call(null,seq__37156_37170__$1);
var G__37173 = c__4319__auto___37171;
var G__37174 = cljs.core.count.call(null,c__4319__auto___37171);
var G__37175 = (0);
seq__37156_37160 = G__37172;
chunk__37157_37161 = G__37173;
count__37158_37162 = G__37174;
i__37159_37163 = G__37175;
continue;
} else {
var ns_37176 = cljs.core.first.call(null,seq__37156_37170__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37176);


var G__37177 = cljs.core.next.call(null,seq__37156_37170__$1);
var G__37178 = null;
var G__37179 = (0);
var G__37180 = (0);
seq__37156_37160 = G__37177;
chunk__37157_37161 = G__37178;
count__37158_37162 = G__37179;
i__37159_37163 = G__37180;
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
var G__37181__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37182__i = 0, G__37182__a = new Array(arguments.length -  0);
while (G__37182__i < G__37182__a.length) {G__37182__a[G__37182__i] = arguments[G__37182__i + 0]; ++G__37182__i;}
  args = new cljs.core.IndexedSeq(G__37182__a,0,null);
} 
return G__37181__delegate.call(this,args);};
G__37181.cljs$lang$maxFixedArity = 0;
G__37181.cljs$lang$applyTo = (function (arglist__37183){
var args = cljs.core.seq(arglist__37183);
return G__37181__delegate(args);
});
G__37181.cljs$core$IFn$_invoke$arity$variadic = G__37181__delegate;
return G__37181;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37184_SHARP_,p2__37185_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37184_SHARP_)].join('')),p2__37185_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37186_SHARP_,p2__37187_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37186_SHARP_)].join(''),p2__37187_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37188 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37188.addCallback(((function (G__37188){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37188))
);

G__37188.addErrback(((function (G__37188){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37188))
);

return G__37188;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37189){if((e37189 instanceof Error)){
var e = e37189;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37189;

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
}catch (e37190){if((e37190 instanceof Error)){
var e = e37190;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37190;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37191 = cljs.core._EQ_;
var expr__37192 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37191.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37192))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37191.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37192))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37191.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37192))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37191,expr__37192){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37191,expr__37192))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37194,callback){
var map__37195 = p__37194;
var map__37195__$1 = ((((!((map__37195 == null)))?(((((map__37195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37195):map__37195);
var file_msg = map__37195__$1;
var request_url = cljs.core.get.call(null,map__37195__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37195,map__37195__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37195,map__37195__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__){
return (function (state_37233){
var state_val_37234 = (state_37233[(1)]);
if((state_val_37234 === (7))){
var inst_37229 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
var statearr_37235_37261 = state_37233__$1;
(statearr_37235_37261[(2)] = inst_37229);

(statearr_37235_37261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (1))){
var state_37233__$1 = state_37233;
var statearr_37236_37262 = state_37233__$1;
(statearr_37236_37262[(2)] = null);

(statearr_37236_37262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (4))){
var inst_37199 = (state_37233[(7)]);
var inst_37199__$1 = (state_37233[(2)]);
var state_37233__$1 = (function (){var statearr_37237 = state_37233;
(statearr_37237[(7)] = inst_37199__$1);

return statearr_37237;
})();
if(cljs.core.truth_(inst_37199__$1)){
var statearr_37238_37263 = state_37233__$1;
(statearr_37238_37263[(1)] = (5));

} else {
var statearr_37239_37264 = state_37233__$1;
(statearr_37239_37264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (15))){
var inst_37214 = (state_37233[(8)]);
var inst_37212 = (state_37233[(9)]);
var inst_37216 = inst_37214.call(null,inst_37212);
var state_37233__$1 = state_37233;
var statearr_37240_37265 = state_37233__$1;
(statearr_37240_37265[(2)] = inst_37216);

(statearr_37240_37265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (13))){
var inst_37223 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
var statearr_37241_37266 = state_37233__$1;
(statearr_37241_37266[(2)] = inst_37223);

(statearr_37241_37266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (6))){
var state_37233__$1 = state_37233;
var statearr_37242_37267 = state_37233__$1;
(statearr_37242_37267[(2)] = null);

(statearr_37242_37267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (17))){
var inst_37220 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
var statearr_37243_37268 = state_37233__$1;
(statearr_37243_37268[(2)] = inst_37220);

(statearr_37243_37268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (3))){
var inst_37231 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37233__$1,inst_37231);
} else {
if((state_val_37234 === (12))){
var state_37233__$1 = state_37233;
var statearr_37244_37269 = state_37233__$1;
(statearr_37244_37269[(2)] = null);

(statearr_37244_37269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (2))){
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37233__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37234 === (11))){
var inst_37204 = (state_37233[(10)]);
var inst_37210 = figwheel.client.file_reloading.blocking_load.call(null,inst_37204);
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37233__$1,(14),inst_37210);
} else {
if((state_val_37234 === (9))){
var inst_37204 = (state_37233[(10)]);
var state_37233__$1 = state_37233;
if(cljs.core.truth_(inst_37204)){
var statearr_37245_37270 = state_37233__$1;
(statearr_37245_37270[(1)] = (11));

} else {
var statearr_37246_37271 = state_37233__$1;
(statearr_37246_37271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (5))){
var inst_37205 = (state_37233[(11)]);
var inst_37199 = (state_37233[(7)]);
var inst_37204 = cljs.core.nth.call(null,inst_37199,(0),null);
var inst_37205__$1 = cljs.core.nth.call(null,inst_37199,(1),null);
var state_37233__$1 = (function (){var statearr_37247 = state_37233;
(statearr_37247[(11)] = inst_37205__$1);

(statearr_37247[(10)] = inst_37204);

return statearr_37247;
})();
if(cljs.core.truth_(inst_37205__$1)){
var statearr_37248_37272 = state_37233__$1;
(statearr_37248_37272[(1)] = (8));

} else {
var statearr_37249_37273 = state_37233__$1;
(statearr_37249_37273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (14))){
var inst_37214 = (state_37233[(8)]);
var inst_37204 = (state_37233[(10)]);
var inst_37212 = (state_37233[(2)]);
var inst_37213 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37214__$1 = cljs.core.get.call(null,inst_37213,inst_37204);
var state_37233__$1 = (function (){var statearr_37250 = state_37233;
(statearr_37250[(8)] = inst_37214__$1);

(statearr_37250[(9)] = inst_37212);

return statearr_37250;
})();
if(cljs.core.truth_(inst_37214__$1)){
var statearr_37251_37274 = state_37233__$1;
(statearr_37251_37274[(1)] = (15));

} else {
var statearr_37252_37275 = state_37233__$1;
(statearr_37252_37275[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (16))){
var inst_37212 = (state_37233[(9)]);
var inst_37218 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37212);
var state_37233__$1 = state_37233;
var statearr_37253_37276 = state_37233__$1;
(statearr_37253_37276[(2)] = inst_37218);

(statearr_37253_37276[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (10))){
var inst_37225 = (state_37233[(2)]);
var state_37233__$1 = (function (){var statearr_37254 = state_37233;
(statearr_37254[(12)] = inst_37225);

return statearr_37254;
})();
var statearr_37255_37277 = state_37233__$1;
(statearr_37255_37277[(2)] = null);

(statearr_37255_37277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (8))){
var inst_37205 = (state_37233[(11)]);
var inst_37207 = eval(inst_37205);
var state_37233__$1 = state_37233;
var statearr_37256_37278 = state_37233__$1;
(statearr_37256_37278[(2)] = inst_37207);

(statearr_37256_37278[(1)] = (10));


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
});})(c__32549__auto__))
;
return ((function (switch__32392__auto__,c__32549__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32393__auto__ = null;
var figwheel$client$file_reloading$state_machine__32393__auto____0 = (function (){
var statearr_37257 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37257[(0)] = figwheel$client$file_reloading$state_machine__32393__auto__);

(statearr_37257[(1)] = (1));

return statearr_37257;
});
var figwheel$client$file_reloading$state_machine__32393__auto____1 = (function (state_37233){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_37233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e37258){if((e37258 instanceof Object)){
var ex__32396__auto__ = e37258;
var statearr_37259_37279 = state_37233;
(statearr_37259_37279[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37280 = state_37233;
state_37233 = G__37280;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32393__auto__ = function(state_37233){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32393__auto____1.call(this,state_37233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32393__auto____0;
figwheel$client$file_reloading$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32393__auto____1;
return figwheel$client$file_reloading$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__))
})();
var state__32551__auto__ = (function (){var statearr_37260 = f__32550__auto__.call(null);
(statearr_37260[(6)] = c__32549__auto__);

return statearr_37260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__))
);

return c__32549__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37282 = arguments.length;
switch (G__37282) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37284,callback){
var map__37285 = p__37284;
var map__37285__$1 = ((((!((map__37285 == null)))?(((((map__37285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37285):map__37285);
var file_msg = map__37285__$1;
var namespace = cljs.core.get.call(null,map__37285__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37285,map__37285__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37285,map__37285__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37287){
var map__37288 = p__37287;
var map__37288__$1 = ((((!((map__37288 == null)))?(((((map__37288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37288):map__37288);
var file_msg = map__37288__$1;
var namespace = cljs.core.get.call(null,map__37288__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37290){
var map__37291 = p__37290;
var map__37291__$1 = ((((!((map__37291 == null)))?(((((map__37291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37291):map__37291);
var file_msg = map__37291__$1;
var namespace = cljs.core.get.call(null,map__37291__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37293,callback){
var map__37294 = p__37293;
var map__37294__$1 = ((((!((map__37294 == null)))?(((((map__37294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37294):map__37294);
var file_msg = map__37294__$1;
var request_url = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32549__auto___37344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___37344,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___37344,out){
return (function (state_37329){
var state_val_37330 = (state_37329[(1)]);
if((state_val_37330 === (1))){
var inst_37303 = cljs.core.seq.call(null,files);
var inst_37304 = cljs.core.first.call(null,inst_37303);
var inst_37305 = cljs.core.next.call(null,inst_37303);
var inst_37306 = files;
var state_37329__$1 = (function (){var statearr_37331 = state_37329;
(statearr_37331[(7)] = inst_37305);

(statearr_37331[(8)] = inst_37304);

(statearr_37331[(9)] = inst_37306);

return statearr_37331;
})();
var statearr_37332_37345 = state_37329__$1;
(statearr_37332_37345[(2)] = null);

(statearr_37332_37345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37330 === (2))){
var inst_37306 = (state_37329[(9)]);
var inst_37312 = (state_37329[(10)]);
var inst_37311 = cljs.core.seq.call(null,inst_37306);
var inst_37312__$1 = cljs.core.first.call(null,inst_37311);
var inst_37313 = cljs.core.next.call(null,inst_37311);
var inst_37314 = (inst_37312__$1 == null);
var inst_37315 = cljs.core.not.call(null,inst_37314);
var state_37329__$1 = (function (){var statearr_37333 = state_37329;
(statearr_37333[(11)] = inst_37313);

(statearr_37333[(10)] = inst_37312__$1);

return statearr_37333;
})();
if(inst_37315){
var statearr_37334_37346 = state_37329__$1;
(statearr_37334_37346[(1)] = (4));

} else {
var statearr_37335_37347 = state_37329__$1;
(statearr_37335_37347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37330 === (3))){
var inst_37327 = (state_37329[(2)]);
var state_37329__$1 = state_37329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37329__$1,inst_37327);
} else {
if((state_val_37330 === (4))){
var inst_37312 = (state_37329[(10)]);
var inst_37317 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37312);
var state_37329__$1 = state_37329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37329__$1,(7),inst_37317);
} else {
if((state_val_37330 === (5))){
var inst_37323 = cljs.core.async.close_BANG_.call(null,out);
var state_37329__$1 = state_37329;
var statearr_37336_37348 = state_37329__$1;
(statearr_37336_37348[(2)] = inst_37323);

(statearr_37336_37348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37330 === (6))){
var inst_37325 = (state_37329[(2)]);
var state_37329__$1 = state_37329;
var statearr_37337_37349 = state_37329__$1;
(statearr_37337_37349[(2)] = inst_37325);

(statearr_37337_37349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37330 === (7))){
var inst_37313 = (state_37329[(11)]);
var inst_37319 = (state_37329[(2)]);
var inst_37320 = cljs.core.async.put_BANG_.call(null,out,inst_37319);
var inst_37306 = inst_37313;
var state_37329__$1 = (function (){var statearr_37338 = state_37329;
(statearr_37338[(12)] = inst_37320);

(statearr_37338[(9)] = inst_37306);

return statearr_37338;
})();
var statearr_37339_37350 = state_37329__$1;
(statearr_37339_37350[(2)] = null);

(statearr_37339_37350[(1)] = (2));


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
});})(c__32549__auto___37344,out))
;
return ((function (switch__32392__auto__,c__32549__auto___37344,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto____0 = (function (){
var statearr_37340 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37340[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto__);

(statearr_37340[(1)] = (1));

return statearr_37340;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto____1 = (function (state_37329){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_37329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e37341){if((e37341 instanceof Object)){
var ex__32396__auto__ = e37341;
var statearr_37342_37351 = state_37329;
(statearr_37342_37351[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37352 = state_37329;
state_37329 = G__37352;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto__ = function(state_37329){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto____1.call(this,state_37329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___37344,out))
})();
var state__32551__auto__ = (function (){var statearr_37343 = f__32550__auto__.call(null);
(statearr_37343[(6)] = c__32549__auto___37344);

return statearr_37343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___37344,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37353,opts){
var map__37354 = p__37353;
var map__37354__$1 = ((((!((map__37354 == null)))?(((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var eval_body = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37356){var e = e37356;
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
return (function (p1__37357_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37357_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37358){
var vec__37359 = p__37358;
var k = cljs.core.nth.call(null,vec__37359,(0),null);
var v = cljs.core.nth.call(null,vec__37359,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37362){
var vec__37363 = p__37362;
var k = cljs.core.nth.call(null,vec__37363,(0),null);
var v = cljs.core.nth.call(null,vec__37363,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37369,p__37370){
var map__37371 = p__37369;
var map__37371__$1 = ((((!((map__37371 == null)))?(((((map__37371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37371):map__37371);
var opts = map__37371__$1;
var before_jsload = cljs.core.get.call(null,map__37371__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37371__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37371__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37372 = p__37370;
var map__37372__$1 = ((((!((map__37372 == null)))?(((((map__37372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37372):map__37372);
var msg = map__37372__$1;
var files = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37526){
var state_val_37527 = (state_37526[(1)]);
if((state_val_37527 === (7))){
var inst_37386 = (state_37526[(7)]);
var inst_37387 = (state_37526[(8)]);
var inst_37388 = (state_37526[(9)]);
var inst_37389 = (state_37526[(10)]);
var inst_37394 = cljs.core._nth.call(null,inst_37387,inst_37389);
var inst_37395 = figwheel.client.file_reloading.eval_body.call(null,inst_37394,opts);
var inst_37396 = (inst_37389 + (1));
var tmp37528 = inst_37386;
var tmp37529 = inst_37387;
var tmp37530 = inst_37388;
var inst_37386__$1 = tmp37528;
var inst_37387__$1 = tmp37529;
var inst_37388__$1 = tmp37530;
var inst_37389__$1 = inst_37396;
var state_37526__$1 = (function (){var statearr_37531 = state_37526;
(statearr_37531[(7)] = inst_37386__$1);

(statearr_37531[(11)] = inst_37395);

(statearr_37531[(8)] = inst_37387__$1);

(statearr_37531[(9)] = inst_37388__$1);

(statearr_37531[(10)] = inst_37389__$1);

return statearr_37531;
})();
var statearr_37532_37615 = state_37526__$1;
(statearr_37532_37615[(2)] = null);

(statearr_37532_37615[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (20))){
var inst_37429 = (state_37526[(12)]);
var inst_37437 = figwheel.client.file_reloading.sort_files.call(null,inst_37429);
var state_37526__$1 = state_37526;
var statearr_37533_37616 = state_37526__$1;
(statearr_37533_37616[(2)] = inst_37437);

(statearr_37533_37616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (27))){
var state_37526__$1 = state_37526;
var statearr_37534_37617 = state_37526__$1;
(statearr_37534_37617[(2)] = null);

(statearr_37534_37617[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (1))){
var inst_37378 = (state_37526[(13)]);
var inst_37375 = before_jsload.call(null,files);
var inst_37376 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37377 = (function (){return ((function (inst_37378,inst_37375,inst_37376,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37366_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37366_SHARP_);
});
;})(inst_37378,inst_37375,inst_37376,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37378__$1 = cljs.core.filter.call(null,inst_37377,files);
var inst_37379 = cljs.core.not_empty.call(null,inst_37378__$1);
var state_37526__$1 = (function (){var statearr_37535 = state_37526;
(statearr_37535[(13)] = inst_37378__$1);

(statearr_37535[(14)] = inst_37376);

(statearr_37535[(15)] = inst_37375);

return statearr_37535;
})();
if(cljs.core.truth_(inst_37379)){
var statearr_37536_37618 = state_37526__$1;
(statearr_37536_37618[(1)] = (2));

} else {
var statearr_37537_37619 = state_37526__$1;
(statearr_37537_37619[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (24))){
var state_37526__$1 = state_37526;
var statearr_37538_37620 = state_37526__$1;
(statearr_37538_37620[(2)] = null);

(statearr_37538_37620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (39))){
var inst_37479 = (state_37526[(16)]);
var state_37526__$1 = state_37526;
var statearr_37539_37621 = state_37526__$1;
(statearr_37539_37621[(2)] = inst_37479);

(statearr_37539_37621[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (46))){
var inst_37521 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37540_37622 = state_37526__$1;
(statearr_37540_37622[(2)] = inst_37521);

(statearr_37540_37622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (4))){
var inst_37423 = (state_37526[(2)]);
var inst_37424 = cljs.core.List.EMPTY;
var inst_37425 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37424);
var inst_37426 = (function (){return ((function (inst_37423,inst_37424,inst_37425,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37367_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37367_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_37423,inst_37424,inst_37425,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37427 = cljs.core.filter.call(null,inst_37426,files);
var inst_37428 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37429 = cljs.core.concat.call(null,inst_37427,inst_37428);
var state_37526__$1 = (function (){var statearr_37541 = state_37526;
(statearr_37541[(17)] = inst_37423);

(statearr_37541[(12)] = inst_37429);

(statearr_37541[(18)] = inst_37425);

return statearr_37541;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37542_37623 = state_37526__$1;
(statearr_37542_37623[(1)] = (16));

} else {
var statearr_37543_37624 = state_37526__$1;
(statearr_37543_37624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (15))){
var inst_37413 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37544_37625 = state_37526__$1;
(statearr_37544_37625[(2)] = inst_37413);

(statearr_37544_37625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (21))){
var inst_37439 = (state_37526[(19)]);
var inst_37439__$1 = (state_37526[(2)]);
var inst_37440 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37439__$1);
var state_37526__$1 = (function (){var statearr_37545 = state_37526;
(statearr_37545[(19)] = inst_37439__$1);

return statearr_37545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37526__$1,(22),inst_37440);
} else {
if((state_val_37527 === (31))){
var inst_37524 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37526__$1,inst_37524);
} else {
if((state_val_37527 === (32))){
var inst_37479 = (state_37526[(16)]);
var inst_37484 = inst_37479.cljs$lang$protocol_mask$partition0$;
var inst_37485 = (inst_37484 & (64));
var inst_37486 = inst_37479.cljs$core$ISeq$;
var inst_37487 = (cljs.core.PROTOCOL_SENTINEL === inst_37486);
var inst_37488 = ((inst_37485) || (inst_37487));
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37488)){
var statearr_37546_37626 = state_37526__$1;
(statearr_37546_37626[(1)] = (35));

} else {
var statearr_37547_37627 = state_37526__$1;
(statearr_37547_37627[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (40))){
var inst_37501 = (state_37526[(20)]);
var inst_37500 = (state_37526[(2)]);
var inst_37501__$1 = cljs.core.get.call(null,inst_37500,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37502 = cljs.core.get.call(null,inst_37500,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37503 = cljs.core.not_empty.call(null,inst_37501__$1);
var state_37526__$1 = (function (){var statearr_37548 = state_37526;
(statearr_37548[(20)] = inst_37501__$1);

(statearr_37548[(21)] = inst_37502);

return statearr_37548;
})();
if(cljs.core.truth_(inst_37503)){
var statearr_37549_37628 = state_37526__$1;
(statearr_37549_37628[(1)] = (41));

} else {
var statearr_37550_37629 = state_37526__$1;
(statearr_37550_37629[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (33))){
var state_37526__$1 = state_37526;
var statearr_37551_37630 = state_37526__$1;
(statearr_37551_37630[(2)] = false);

(statearr_37551_37630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (13))){
var inst_37399 = (state_37526[(22)]);
var inst_37403 = cljs.core.chunk_first.call(null,inst_37399);
var inst_37404 = cljs.core.chunk_rest.call(null,inst_37399);
var inst_37405 = cljs.core.count.call(null,inst_37403);
var inst_37386 = inst_37404;
var inst_37387 = inst_37403;
var inst_37388 = inst_37405;
var inst_37389 = (0);
var state_37526__$1 = (function (){var statearr_37552 = state_37526;
(statearr_37552[(7)] = inst_37386);

(statearr_37552[(8)] = inst_37387);

(statearr_37552[(9)] = inst_37388);

(statearr_37552[(10)] = inst_37389);

return statearr_37552;
})();
var statearr_37553_37631 = state_37526__$1;
(statearr_37553_37631[(2)] = null);

(statearr_37553_37631[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (22))){
var inst_37442 = (state_37526[(23)]);
var inst_37447 = (state_37526[(24)]);
var inst_37439 = (state_37526[(19)]);
var inst_37443 = (state_37526[(25)]);
var inst_37442__$1 = (state_37526[(2)]);
var inst_37443__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37442__$1);
var inst_37444 = (function (){var all_files = inst_37439;
var res_SINGLEQUOTE_ = inst_37442__$1;
var res = inst_37443__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37442,inst_37447,inst_37439,inst_37443,inst_37442__$1,inst_37443__$1,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37368_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37368_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37442,inst_37447,inst_37439,inst_37443,inst_37442__$1,inst_37443__$1,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37445 = cljs.core.filter.call(null,inst_37444,inst_37442__$1);
var inst_37446 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37447__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37446);
var inst_37448 = cljs.core.not_empty.call(null,inst_37447__$1);
var state_37526__$1 = (function (){var statearr_37554 = state_37526;
(statearr_37554[(26)] = inst_37445);

(statearr_37554[(23)] = inst_37442__$1);

(statearr_37554[(24)] = inst_37447__$1);

(statearr_37554[(25)] = inst_37443__$1);

return statearr_37554;
})();
if(cljs.core.truth_(inst_37448)){
var statearr_37555_37632 = state_37526__$1;
(statearr_37555_37632[(1)] = (23));

} else {
var statearr_37556_37633 = state_37526__$1;
(statearr_37556_37633[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (36))){
var state_37526__$1 = state_37526;
var statearr_37557_37634 = state_37526__$1;
(statearr_37557_37634[(2)] = false);

(statearr_37557_37634[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (41))){
var inst_37501 = (state_37526[(20)]);
var inst_37505 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37506 = cljs.core.map.call(null,inst_37505,inst_37501);
var inst_37507 = cljs.core.pr_str.call(null,inst_37506);
var inst_37508 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37507)].join('');
var inst_37509 = figwheel.client.utils.log.call(null,inst_37508);
var state_37526__$1 = state_37526;
var statearr_37558_37635 = state_37526__$1;
(statearr_37558_37635[(2)] = inst_37509);

(statearr_37558_37635[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (43))){
var inst_37502 = (state_37526[(21)]);
var inst_37512 = (state_37526[(2)]);
var inst_37513 = cljs.core.not_empty.call(null,inst_37502);
var state_37526__$1 = (function (){var statearr_37559 = state_37526;
(statearr_37559[(27)] = inst_37512);

return statearr_37559;
})();
if(cljs.core.truth_(inst_37513)){
var statearr_37560_37636 = state_37526__$1;
(statearr_37560_37636[(1)] = (44));

} else {
var statearr_37561_37637 = state_37526__$1;
(statearr_37561_37637[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (29))){
var inst_37445 = (state_37526[(26)]);
var inst_37479 = (state_37526[(16)]);
var inst_37442 = (state_37526[(23)]);
var inst_37447 = (state_37526[(24)]);
var inst_37439 = (state_37526[(19)]);
var inst_37443 = (state_37526[(25)]);
var inst_37475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37478 = (function (){var all_files = inst_37439;
var res_SINGLEQUOTE_ = inst_37442;
var res = inst_37443;
var files_not_loaded = inst_37445;
var dependencies_that_loaded = inst_37447;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37479,inst_37442,inst_37447,inst_37439,inst_37443,inst_37475,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37477){
var map__37562 = p__37477;
var map__37562__$1 = ((((!((map__37562 == null)))?(((((map__37562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37562):map__37562);
var namespace = cljs.core.get.call(null,map__37562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37479,inst_37442,inst_37447,inst_37439,inst_37443,inst_37475,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37479__$1 = cljs.core.group_by.call(null,inst_37478,inst_37445);
var inst_37481 = (inst_37479__$1 == null);
var inst_37482 = cljs.core.not.call(null,inst_37481);
var state_37526__$1 = (function (){var statearr_37564 = state_37526;
(statearr_37564[(16)] = inst_37479__$1);

(statearr_37564[(28)] = inst_37475);

return statearr_37564;
})();
if(inst_37482){
var statearr_37565_37638 = state_37526__$1;
(statearr_37565_37638[(1)] = (32));

} else {
var statearr_37566_37639 = state_37526__$1;
(statearr_37566_37639[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (44))){
var inst_37502 = (state_37526[(21)]);
var inst_37515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37502);
var inst_37516 = cljs.core.pr_str.call(null,inst_37515);
var inst_37517 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37516)].join('');
var inst_37518 = figwheel.client.utils.log.call(null,inst_37517);
var state_37526__$1 = state_37526;
var statearr_37567_37640 = state_37526__$1;
(statearr_37567_37640[(2)] = inst_37518);

(statearr_37567_37640[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (6))){
var inst_37420 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37568_37641 = state_37526__$1;
(statearr_37568_37641[(2)] = inst_37420);

(statearr_37568_37641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (28))){
var inst_37445 = (state_37526[(26)]);
var inst_37472 = (state_37526[(2)]);
var inst_37473 = cljs.core.not_empty.call(null,inst_37445);
var state_37526__$1 = (function (){var statearr_37569 = state_37526;
(statearr_37569[(29)] = inst_37472);

return statearr_37569;
})();
if(cljs.core.truth_(inst_37473)){
var statearr_37570_37642 = state_37526__$1;
(statearr_37570_37642[(1)] = (29));

} else {
var statearr_37571_37643 = state_37526__$1;
(statearr_37571_37643[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (25))){
var inst_37443 = (state_37526[(25)]);
var inst_37459 = (state_37526[(2)]);
var inst_37460 = cljs.core.not_empty.call(null,inst_37443);
var state_37526__$1 = (function (){var statearr_37572 = state_37526;
(statearr_37572[(30)] = inst_37459);

return statearr_37572;
})();
if(cljs.core.truth_(inst_37460)){
var statearr_37573_37644 = state_37526__$1;
(statearr_37573_37644[(1)] = (26));

} else {
var statearr_37574_37645 = state_37526__$1;
(statearr_37574_37645[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (34))){
var inst_37495 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37495)){
var statearr_37575_37646 = state_37526__$1;
(statearr_37575_37646[(1)] = (38));

} else {
var statearr_37576_37647 = state_37526__$1;
(statearr_37576_37647[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (17))){
var state_37526__$1 = state_37526;
var statearr_37577_37648 = state_37526__$1;
(statearr_37577_37648[(2)] = recompile_dependents);

(statearr_37577_37648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (3))){
var state_37526__$1 = state_37526;
var statearr_37578_37649 = state_37526__$1;
(statearr_37578_37649[(2)] = null);

(statearr_37578_37649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (12))){
var inst_37416 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37579_37650 = state_37526__$1;
(statearr_37579_37650[(2)] = inst_37416);

(statearr_37579_37650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (2))){
var inst_37378 = (state_37526[(13)]);
var inst_37385 = cljs.core.seq.call(null,inst_37378);
var inst_37386 = inst_37385;
var inst_37387 = null;
var inst_37388 = (0);
var inst_37389 = (0);
var state_37526__$1 = (function (){var statearr_37580 = state_37526;
(statearr_37580[(7)] = inst_37386);

(statearr_37580[(8)] = inst_37387);

(statearr_37580[(9)] = inst_37388);

(statearr_37580[(10)] = inst_37389);

return statearr_37580;
})();
var statearr_37581_37651 = state_37526__$1;
(statearr_37581_37651[(2)] = null);

(statearr_37581_37651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (23))){
var inst_37445 = (state_37526[(26)]);
var inst_37442 = (state_37526[(23)]);
var inst_37447 = (state_37526[(24)]);
var inst_37439 = (state_37526[(19)]);
var inst_37443 = (state_37526[(25)]);
var inst_37450 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37452 = (function (){var all_files = inst_37439;
var res_SINGLEQUOTE_ = inst_37442;
var res = inst_37443;
var files_not_loaded = inst_37445;
var dependencies_that_loaded = inst_37447;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37442,inst_37447,inst_37439,inst_37443,inst_37450,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37451){
var map__37582 = p__37451;
var map__37582__$1 = ((((!((map__37582 == null)))?(((((map__37582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37582):map__37582);
var request_url = cljs.core.get.call(null,map__37582__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37442,inst_37447,inst_37439,inst_37443,inst_37450,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37453 = cljs.core.reverse.call(null,inst_37447);
var inst_37454 = cljs.core.map.call(null,inst_37452,inst_37453);
var inst_37455 = cljs.core.pr_str.call(null,inst_37454);
var inst_37456 = figwheel.client.utils.log.call(null,inst_37455);
var state_37526__$1 = (function (){var statearr_37584 = state_37526;
(statearr_37584[(31)] = inst_37450);

return statearr_37584;
})();
var statearr_37585_37652 = state_37526__$1;
(statearr_37585_37652[(2)] = inst_37456);

(statearr_37585_37652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (35))){
var state_37526__$1 = state_37526;
var statearr_37586_37653 = state_37526__$1;
(statearr_37586_37653[(2)] = true);

(statearr_37586_37653[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (19))){
var inst_37429 = (state_37526[(12)]);
var inst_37435 = figwheel.client.file_reloading.expand_files.call(null,inst_37429);
var state_37526__$1 = state_37526;
var statearr_37587_37654 = state_37526__$1;
(statearr_37587_37654[(2)] = inst_37435);

(statearr_37587_37654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (11))){
var state_37526__$1 = state_37526;
var statearr_37588_37655 = state_37526__$1;
(statearr_37588_37655[(2)] = null);

(statearr_37588_37655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (9))){
var inst_37418 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37589_37656 = state_37526__$1;
(statearr_37589_37656[(2)] = inst_37418);

(statearr_37589_37656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (5))){
var inst_37388 = (state_37526[(9)]);
var inst_37389 = (state_37526[(10)]);
var inst_37391 = (inst_37389 < inst_37388);
var inst_37392 = inst_37391;
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37392)){
var statearr_37590_37657 = state_37526__$1;
(statearr_37590_37657[(1)] = (7));

} else {
var statearr_37591_37658 = state_37526__$1;
(statearr_37591_37658[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (14))){
var inst_37399 = (state_37526[(22)]);
var inst_37408 = cljs.core.first.call(null,inst_37399);
var inst_37409 = figwheel.client.file_reloading.eval_body.call(null,inst_37408,opts);
var inst_37410 = cljs.core.next.call(null,inst_37399);
var inst_37386 = inst_37410;
var inst_37387 = null;
var inst_37388 = (0);
var inst_37389 = (0);
var state_37526__$1 = (function (){var statearr_37592 = state_37526;
(statearr_37592[(7)] = inst_37386);

(statearr_37592[(8)] = inst_37387);

(statearr_37592[(9)] = inst_37388);

(statearr_37592[(10)] = inst_37389);

(statearr_37592[(32)] = inst_37409);

return statearr_37592;
})();
var statearr_37593_37659 = state_37526__$1;
(statearr_37593_37659[(2)] = null);

(statearr_37593_37659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (45))){
var state_37526__$1 = state_37526;
var statearr_37594_37660 = state_37526__$1;
(statearr_37594_37660[(2)] = null);

(statearr_37594_37660[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (26))){
var inst_37445 = (state_37526[(26)]);
var inst_37442 = (state_37526[(23)]);
var inst_37447 = (state_37526[(24)]);
var inst_37439 = (state_37526[(19)]);
var inst_37443 = (state_37526[(25)]);
var inst_37462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37464 = (function (){var all_files = inst_37439;
var res_SINGLEQUOTE_ = inst_37442;
var res = inst_37443;
var files_not_loaded = inst_37445;
var dependencies_that_loaded = inst_37447;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37442,inst_37447,inst_37439,inst_37443,inst_37462,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37463){
var map__37595 = p__37463;
var map__37595__$1 = ((((!((map__37595 == null)))?(((((map__37595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37595):map__37595);
var namespace = cljs.core.get.call(null,map__37595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37442,inst_37447,inst_37439,inst_37443,inst_37462,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37465 = cljs.core.map.call(null,inst_37464,inst_37443);
var inst_37466 = cljs.core.pr_str.call(null,inst_37465);
var inst_37467 = figwheel.client.utils.log.call(null,inst_37466);
var inst_37468 = (function (){var all_files = inst_37439;
var res_SINGLEQUOTE_ = inst_37442;
var res = inst_37443;
var files_not_loaded = inst_37445;
var dependencies_that_loaded = inst_37447;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37442,inst_37447,inst_37439,inst_37443,inst_37462,inst_37464,inst_37465,inst_37466,inst_37467,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37445,inst_37442,inst_37447,inst_37439,inst_37443,inst_37462,inst_37464,inst_37465,inst_37466,inst_37467,state_val_37527,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37469 = setTimeout(inst_37468,(10));
var state_37526__$1 = (function (){var statearr_37597 = state_37526;
(statearr_37597[(33)] = inst_37462);

(statearr_37597[(34)] = inst_37467);

return statearr_37597;
})();
var statearr_37598_37661 = state_37526__$1;
(statearr_37598_37661[(2)] = inst_37469);

(statearr_37598_37661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (16))){
var state_37526__$1 = state_37526;
var statearr_37599_37662 = state_37526__$1;
(statearr_37599_37662[(2)] = reload_dependents);

(statearr_37599_37662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (38))){
var inst_37479 = (state_37526[(16)]);
var inst_37497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37479);
var state_37526__$1 = state_37526;
var statearr_37600_37663 = state_37526__$1;
(statearr_37600_37663[(2)] = inst_37497);

(statearr_37600_37663[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (30))){
var state_37526__$1 = state_37526;
var statearr_37601_37664 = state_37526__$1;
(statearr_37601_37664[(2)] = null);

(statearr_37601_37664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (10))){
var inst_37399 = (state_37526[(22)]);
var inst_37401 = cljs.core.chunked_seq_QMARK_.call(null,inst_37399);
var state_37526__$1 = state_37526;
if(inst_37401){
var statearr_37602_37665 = state_37526__$1;
(statearr_37602_37665[(1)] = (13));

} else {
var statearr_37603_37666 = state_37526__$1;
(statearr_37603_37666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (18))){
var inst_37433 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
if(cljs.core.truth_(inst_37433)){
var statearr_37604_37667 = state_37526__$1;
(statearr_37604_37667[(1)] = (19));

} else {
var statearr_37605_37668 = state_37526__$1;
(statearr_37605_37668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (42))){
var state_37526__$1 = state_37526;
var statearr_37606_37669 = state_37526__$1;
(statearr_37606_37669[(2)] = null);

(statearr_37606_37669[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (37))){
var inst_37492 = (state_37526[(2)]);
var state_37526__$1 = state_37526;
var statearr_37607_37670 = state_37526__$1;
(statearr_37607_37670[(2)] = inst_37492);

(statearr_37607_37670[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37527 === (8))){
var inst_37399 = (state_37526[(22)]);
var inst_37386 = (state_37526[(7)]);
var inst_37399__$1 = cljs.core.seq.call(null,inst_37386);
var state_37526__$1 = (function (){var statearr_37608 = state_37526;
(statearr_37608[(22)] = inst_37399__$1);

return statearr_37608;
})();
if(inst_37399__$1){
var statearr_37609_37671 = state_37526__$1;
(statearr_37609_37671[(1)] = (10));

} else {
var statearr_37610_37672 = state_37526__$1;
(statearr_37610_37672[(1)] = (11));

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
});})(c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32392__auto__,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto____0 = (function (){
var statearr_37611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37611[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto__);

(statearr_37611[(1)] = (1));

return statearr_37611;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto____1 = (function (state_37526){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_37526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e37612){if((e37612 instanceof Object)){
var ex__32396__auto__ = e37612;
var statearr_37613_37673 = state_37526;
(statearr_37613_37673[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37674 = state_37526;
state_37526 = G__37674;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto__ = function(state_37526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto____1.call(this,state_37526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32551__auto__ = (function (){var statearr_37614 = f__32550__auto__.call(null);
(statearr_37614[(6)] = c__32549__auto__);

return statearr_37614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__,map__37371,map__37371__$1,opts,before_jsload,on_jsload,reload_dependents,map__37372,map__37372__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32549__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37677,link){
var map__37678 = p__37677;
var map__37678__$1 = ((((!((map__37678 == null)))?(((((map__37678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37678):map__37678);
var file = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37678,map__37678__$1,file){
return (function (p1__37675_SHARP_,p2__37676_SHARP_){
if(cljs.core._EQ_.call(null,p1__37675_SHARP_,p2__37676_SHARP_)){
return p1__37675_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37678,map__37678__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37681){
var map__37682 = p__37681;
var map__37682__$1 = ((((!((map__37682 == null)))?(((((map__37682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37682):map__37682);
var match_length = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37682__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37680_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37680_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37684_SHARP_,p2__37685_SHARP_){
return cljs.core.assoc.call(null,p1__37684_SHARP_,cljs.core.get.call(null,p2__37685_SHARP_,key),p2__37685_SHARP_);
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
var loaded_f_datas_37686 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37686);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37686);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37687,p__37688){
var map__37689 = p__37687;
var map__37689__$1 = ((((!((map__37689 == null)))?(((((map__37689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37689):map__37689);
var on_cssload = cljs.core.get.call(null,map__37689__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37690 = p__37688;
var map__37690__$1 = ((((!((map__37690 == null)))?(((((map__37690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37690):map__37690);
var files_msg = map__37690__$1;
var files = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1528121933820
