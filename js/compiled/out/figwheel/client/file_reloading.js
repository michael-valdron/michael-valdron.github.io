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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30054_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30054_SHARP_));
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
var seq__30055 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30056 = null;
var count__30057 = (0);
var i__30058 = (0);
while(true){
if((i__30058 < count__30057)){
var n = cljs.core._nth.call(null,chunk__30056,i__30058);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30059 = seq__30055;
var G__30060 = chunk__30056;
var G__30061 = count__30057;
var G__30062 = (i__30058 + (1));
seq__30055 = G__30059;
chunk__30056 = G__30060;
count__30057 = G__30061;
i__30058 = G__30062;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30055);
if(temp__5457__auto__){
var seq__30055__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30055__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30055__$1);
var G__30063 = cljs.core.chunk_rest.call(null,seq__30055__$1);
var G__30064 = c__4319__auto__;
var G__30065 = cljs.core.count.call(null,c__4319__auto__);
var G__30066 = (0);
seq__30055 = G__30063;
chunk__30056 = G__30064;
count__30057 = G__30065;
i__30058 = G__30066;
continue;
} else {
var n = cljs.core.first.call(null,seq__30055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30067 = cljs.core.next.call(null,seq__30055__$1);
var G__30068 = null;
var G__30069 = (0);
var G__30070 = (0);
seq__30055 = G__30067;
chunk__30056 = G__30068;
count__30057 = G__30069;
i__30058 = G__30070;
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
return cljs.core.some.call(null,(function (p__30071){
var vec__30072 = p__30071;
var _ = cljs.core.nth.call(null,vec__30072,(0),null);
var v = cljs.core.nth.call(null,vec__30072,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__30075){
var vec__30076 = p__30075;
var k = cljs.core.nth.call(null,vec__30076,(0),null);
var v = cljs.core.nth.call(null,vec__30076,(1),null);
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

var seq__30088_30096 = cljs.core.seq.call(null,deps);
var chunk__30089_30097 = null;
var count__30090_30098 = (0);
var i__30091_30099 = (0);
while(true){
if((i__30091_30099 < count__30090_30098)){
var dep_30100 = cljs.core._nth.call(null,chunk__30089_30097,i__30091_30099);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30100;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30100));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30100,(depth + (1)),state);
} else {
}


var G__30101 = seq__30088_30096;
var G__30102 = chunk__30089_30097;
var G__30103 = count__30090_30098;
var G__30104 = (i__30091_30099 + (1));
seq__30088_30096 = G__30101;
chunk__30089_30097 = G__30102;
count__30090_30098 = G__30103;
i__30091_30099 = G__30104;
continue;
} else {
var temp__5457__auto___30105 = cljs.core.seq.call(null,seq__30088_30096);
if(temp__5457__auto___30105){
var seq__30088_30106__$1 = temp__5457__auto___30105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30088_30106__$1)){
var c__4319__auto___30107 = cljs.core.chunk_first.call(null,seq__30088_30106__$1);
var G__30108 = cljs.core.chunk_rest.call(null,seq__30088_30106__$1);
var G__30109 = c__4319__auto___30107;
var G__30110 = cljs.core.count.call(null,c__4319__auto___30107);
var G__30111 = (0);
seq__30088_30096 = G__30108;
chunk__30089_30097 = G__30109;
count__30090_30098 = G__30110;
i__30091_30099 = G__30111;
continue;
} else {
var dep_30112 = cljs.core.first.call(null,seq__30088_30106__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30112;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30112));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30112,(depth + (1)),state);
} else {
}


var G__30113 = cljs.core.next.call(null,seq__30088_30106__$1);
var G__30114 = null;
var G__30115 = (0);
var G__30116 = (0);
seq__30088_30096 = G__30113;
chunk__30089_30097 = G__30114;
count__30090_30098 = G__30115;
i__30091_30099 = G__30116;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30092){
var vec__30093 = p__30092;
var seq__30094 = cljs.core.seq.call(null,vec__30093);
var first__30095 = cljs.core.first.call(null,seq__30094);
var seq__30094__$1 = cljs.core.next.call(null,seq__30094);
var x = first__30095;
var xs = seq__30094__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30093,seq__30094,first__30095,seq__30094__$1,x,xs,get_deps__$1){
return (function (p1__30079_SHARP_){
return clojure.set.difference.call(null,p1__30079_SHARP_,x);
});})(vec__30093,seq__30094,first__30095,seq__30094__$1,x,xs,get_deps__$1))
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
var seq__30117 = cljs.core.seq.call(null,provides);
var chunk__30118 = null;
var count__30119 = (0);
var i__30120 = (0);
while(true){
if((i__30120 < count__30119)){
var prov = cljs.core._nth.call(null,chunk__30118,i__30120);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30121_30129 = cljs.core.seq.call(null,requires);
var chunk__30122_30130 = null;
var count__30123_30131 = (0);
var i__30124_30132 = (0);
while(true){
if((i__30124_30132 < count__30123_30131)){
var req_30133 = cljs.core._nth.call(null,chunk__30122_30130,i__30124_30132);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30133,prov);


var G__30134 = seq__30121_30129;
var G__30135 = chunk__30122_30130;
var G__30136 = count__30123_30131;
var G__30137 = (i__30124_30132 + (1));
seq__30121_30129 = G__30134;
chunk__30122_30130 = G__30135;
count__30123_30131 = G__30136;
i__30124_30132 = G__30137;
continue;
} else {
var temp__5457__auto___30138 = cljs.core.seq.call(null,seq__30121_30129);
if(temp__5457__auto___30138){
var seq__30121_30139__$1 = temp__5457__auto___30138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30121_30139__$1)){
var c__4319__auto___30140 = cljs.core.chunk_first.call(null,seq__30121_30139__$1);
var G__30141 = cljs.core.chunk_rest.call(null,seq__30121_30139__$1);
var G__30142 = c__4319__auto___30140;
var G__30143 = cljs.core.count.call(null,c__4319__auto___30140);
var G__30144 = (0);
seq__30121_30129 = G__30141;
chunk__30122_30130 = G__30142;
count__30123_30131 = G__30143;
i__30124_30132 = G__30144;
continue;
} else {
var req_30145 = cljs.core.first.call(null,seq__30121_30139__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30145,prov);


var G__30146 = cljs.core.next.call(null,seq__30121_30139__$1);
var G__30147 = null;
var G__30148 = (0);
var G__30149 = (0);
seq__30121_30129 = G__30146;
chunk__30122_30130 = G__30147;
count__30123_30131 = G__30148;
i__30124_30132 = G__30149;
continue;
}
} else {
}
}
break;
}


var G__30150 = seq__30117;
var G__30151 = chunk__30118;
var G__30152 = count__30119;
var G__30153 = (i__30120 + (1));
seq__30117 = G__30150;
chunk__30118 = G__30151;
count__30119 = G__30152;
i__30120 = G__30153;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30117);
if(temp__5457__auto__){
var seq__30117__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30117__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30117__$1);
var G__30154 = cljs.core.chunk_rest.call(null,seq__30117__$1);
var G__30155 = c__4319__auto__;
var G__30156 = cljs.core.count.call(null,c__4319__auto__);
var G__30157 = (0);
seq__30117 = G__30154;
chunk__30118 = G__30155;
count__30119 = G__30156;
i__30120 = G__30157;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30117__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30125_30158 = cljs.core.seq.call(null,requires);
var chunk__30126_30159 = null;
var count__30127_30160 = (0);
var i__30128_30161 = (0);
while(true){
if((i__30128_30161 < count__30127_30160)){
var req_30162 = cljs.core._nth.call(null,chunk__30126_30159,i__30128_30161);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30162,prov);


var G__30163 = seq__30125_30158;
var G__30164 = chunk__30126_30159;
var G__30165 = count__30127_30160;
var G__30166 = (i__30128_30161 + (1));
seq__30125_30158 = G__30163;
chunk__30126_30159 = G__30164;
count__30127_30160 = G__30165;
i__30128_30161 = G__30166;
continue;
} else {
var temp__5457__auto___30167__$1 = cljs.core.seq.call(null,seq__30125_30158);
if(temp__5457__auto___30167__$1){
var seq__30125_30168__$1 = temp__5457__auto___30167__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30125_30168__$1)){
var c__4319__auto___30169 = cljs.core.chunk_first.call(null,seq__30125_30168__$1);
var G__30170 = cljs.core.chunk_rest.call(null,seq__30125_30168__$1);
var G__30171 = c__4319__auto___30169;
var G__30172 = cljs.core.count.call(null,c__4319__auto___30169);
var G__30173 = (0);
seq__30125_30158 = G__30170;
chunk__30126_30159 = G__30171;
count__30127_30160 = G__30172;
i__30128_30161 = G__30173;
continue;
} else {
var req_30174 = cljs.core.first.call(null,seq__30125_30168__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30174,prov);


var G__30175 = cljs.core.next.call(null,seq__30125_30168__$1);
var G__30176 = null;
var G__30177 = (0);
var G__30178 = (0);
seq__30125_30158 = G__30175;
chunk__30126_30159 = G__30176;
count__30127_30160 = G__30177;
i__30128_30161 = G__30178;
continue;
}
} else {
}
}
break;
}


var G__30179 = cljs.core.next.call(null,seq__30117__$1);
var G__30180 = null;
var G__30181 = (0);
var G__30182 = (0);
seq__30117 = G__30179;
chunk__30118 = G__30180;
count__30119 = G__30181;
i__30120 = G__30182;
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
var seq__30183_30187 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30184_30188 = null;
var count__30185_30189 = (0);
var i__30186_30190 = (0);
while(true){
if((i__30186_30190 < count__30185_30189)){
var ns_30191 = cljs.core._nth.call(null,chunk__30184_30188,i__30186_30190);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30191);


var G__30192 = seq__30183_30187;
var G__30193 = chunk__30184_30188;
var G__30194 = count__30185_30189;
var G__30195 = (i__30186_30190 + (1));
seq__30183_30187 = G__30192;
chunk__30184_30188 = G__30193;
count__30185_30189 = G__30194;
i__30186_30190 = G__30195;
continue;
} else {
var temp__5457__auto___30196 = cljs.core.seq.call(null,seq__30183_30187);
if(temp__5457__auto___30196){
var seq__30183_30197__$1 = temp__5457__auto___30196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30183_30197__$1)){
var c__4319__auto___30198 = cljs.core.chunk_first.call(null,seq__30183_30197__$1);
var G__30199 = cljs.core.chunk_rest.call(null,seq__30183_30197__$1);
var G__30200 = c__4319__auto___30198;
var G__30201 = cljs.core.count.call(null,c__4319__auto___30198);
var G__30202 = (0);
seq__30183_30187 = G__30199;
chunk__30184_30188 = G__30200;
count__30185_30189 = G__30201;
i__30186_30190 = G__30202;
continue;
} else {
var ns_30203 = cljs.core.first.call(null,seq__30183_30197__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30203);


var G__30204 = cljs.core.next.call(null,seq__30183_30197__$1);
var G__30205 = null;
var G__30206 = (0);
var G__30207 = (0);
seq__30183_30187 = G__30204;
chunk__30184_30188 = G__30205;
count__30185_30189 = G__30206;
i__30186_30190 = G__30207;
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
var G__30208__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30209__i = 0, G__30209__a = new Array(arguments.length -  0);
while (G__30209__i < G__30209__a.length) {G__30209__a[G__30209__i] = arguments[G__30209__i + 0]; ++G__30209__i;}
  args = new cljs.core.IndexedSeq(G__30209__a,0,null);
} 
return G__30208__delegate.call(this,args);};
G__30208.cljs$lang$maxFixedArity = 0;
G__30208.cljs$lang$applyTo = (function (arglist__30210){
var args = cljs.core.seq(arglist__30210);
return G__30208__delegate(args);
});
G__30208.cljs$core$IFn$_invoke$arity$variadic = G__30208__delegate;
return G__30208;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__30211_SHARP_,p2__30212_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30211_SHARP_)].join('')),p2__30212_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__30213_SHARP_,p2__30214_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30213_SHARP_)].join(''),p2__30214_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30215 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30215.addCallback(((function (G__30215){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30215))
);

G__30215.addErrback(((function (G__30215){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30215))
);

return G__30215;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30216){if((e30216 instanceof Error)){
var e = e30216;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30216;

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
}catch (e30217){if((e30217 instanceof Error)){
var e = e30217;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30217;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30218 = cljs.core._EQ_;
var expr__30219 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30218.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30219))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30218.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30219))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30218.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30219))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30218,expr__30219){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30218,expr__30219))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30221,callback){
var map__30222 = p__30221;
var map__30222__$1 = ((((!((map__30222 == null)))?(((((map__30222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30222):map__30222);
var file_msg = map__30222__$1;
var request_url = cljs.core.get.call(null,map__30222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30222,map__30222__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30222,map__30222__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__){
return (function (state_30260){
var state_val_30261 = (state_30260[(1)]);
if((state_val_30261 === (7))){
var inst_30256 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30262_30288 = state_30260__$1;
(statearr_30262_30288[(2)] = inst_30256);

(statearr_30262_30288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (1))){
var state_30260__$1 = state_30260;
var statearr_30263_30289 = state_30260__$1;
(statearr_30263_30289[(2)] = null);

(statearr_30263_30289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (4))){
var inst_30226 = (state_30260[(7)]);
var inst_30226__$1 = (state_30260[(2)]);
var state_30260__$1 = (function (){var statearr_30264 = state_30260;
(statearr_30264[(7)] = inst_30226__$1);

return statearr_30264;
})();
if(cljs.core.truth_(inst_30226__$1)){
var statearr_30265_30290 = state_30260__$1;
(statearr_30265_30290[(1)] = (5));

} else {
var statearr_30266_30291 = state_30260__$1;
(statearr_30266_30291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (15))){
var inst_30239 = (state_30260[(8)]);
var inst_30241 = (state_30260[(9)]);
var inst_30243 = inst_30241.call(null,inst_30239);
var state_30260__$1 = state_30260;
var statearr_30267_30292 = state_30260__$1;
(statearr_30267_30292[(2)] = inst_30243);

(statearr_30267_30292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (13))){
var inst_30250 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30268_30293 = state_30260__$1;
(statearr_30268_30293[(2)] = inst_30250);

(statearr_30268_30293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (6))){
var state_30260__$1 = state_30260;
var statearr_30269_30294 = state_30260__$1;
(statearr_30269_30294[(2)] = null);

(statearr_30269_30294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (17))){
var inst_30247 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
var statearr_30270_30295 = state_30260__$1;
(statearr_30270_30295[(2)] = inst_30247);

(statearr_30270_30295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (3))){
var inst_30258 = (state_30260[(2)]);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30260__$1,inst_30258);
} else {
if((state_val_30261 === (12))){
var state_30260__$1 = state_30260;
var statearr_30271_30296 = state_30260__$1;
(statearr_30271_30296[(2)] = null);

(statearr_30271_30296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (2))){
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30261 === (11))){
var inst_30231 = (state_30260[(10)]);
var inst_30237 = figwheel.client.file_reloading.blocking_load.call(null,inst_30231);
var state_30260__$1 = state_30260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30260__$1,(14),inst_30237);
} else {
if((state_val_30261 === (9))){
var inst_30231 = (state_30260[(10)]);
var state_30260__$1 = state_30260;
if(cljs.core.truth_(inst_30231)){
var statearr_30272_30297 = state_30260__$1;
(statearr_30272_30297[(1)] = (11));

} else {
var statearr_30273_30298 = state_30260__$1;
(statearr_30273_30298[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (5))){
var inst_30232 = (state_30260[(11)]);
var inst_30226 = (state_30260[(7)]);
var inst_30231 = cljs.core.nth.call(null,inst_30226,(0),null);
var inst_30232__$1 = cljs.core.nth.call(null,inst_30226,(1),null);
var state_30260__$1 = (function (){var statearr_30274 = state_30260;
(statearr_30274[(10)] = inst_30231);

(statearr_30274[(11)] = inst_30232__$1);

return statearr_30274;
})();
if(cljs.core.truth_(inst_30232__$1)){
var statearr_30275_30299 = state_30260__$1;
(statearr_30275_30299[(1)] = (8));

} else {
var statearr_30276_30300 = state_30260__$1;
(statearr_30276_30300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (14))){
var inst_30231 = (state_30260[(10)]);
var inst_30241 = (state_30260[(9)]);
var inst_30239 = (state_30260[(2)]);
var inst_30240 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30241__$1 = cljs.core.get.call(null,inst_30240,inst_30231);
var state_30260__$1 = (function (){var statearr_30277 = state_30260;
(statearr_30277[(8)] = inst_30239);

(statearr_30277[(9)] = inst_30241__$1);

return statearr_30277;
})();
if(cljs.core.truth_(inst_30241__$1)){
var statearr_30278_30301 = state_30260__$1;
(statearr_30278_30301[(1)] = (15));

} else {
var statearr_30279_30302 = state_30260__$1;
(statearr_30279_30302[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (16))){
var inst_30239 = (state_30260[(8)]);
var inst_30245 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30239);
var state_30260__$1 = state_30260;
var statearr_30280_30303 = state_30260__$1;
(statearr_30280_30303[(2)] = inst_30245);

(statearr_30280_30303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (10))){
var inst_30252 = (state_30260[(2)]);
var state_30260__$1 = (function (){var statearr_30281 = state_30260;
(statearr_30281[(12)] = inst_30252);

return statearr_30281;
})();
var statearr_30282_30304 = state_30260__$1;
(statearr_30282_30304[(2)] = null);

(statearr_30282_30304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30261 === (8))){
var inst_30232 = (state_30260[(11)]);
var inst_30234 = eval(inst_30232);
var state_30260__$1 = state_30260;
var statearr_30283_30305 = state_30260__$1;
(statearr_30283_30305[(2)] = inst_30234);

(statearr_30283_30305[(1)] = (10));


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
});})(c__28110__auto__))
;
return ((function (switch__28020__auto__,c__28110__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28021__auto__ = null;
var figwheel$client$file_reloading$state_machine__28021__auto____0 = (function (){
var statearr_30284 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30284[(0)] = figwheel$client$file_reloading$state_machine__28021__auto__);

(statearr_30284[(1)] = (1));

return statearr_30284;
});
var figwheel$client$file_reloading$state_machine__28021__auto____1 = (function (state_30260){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_30260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e30285){if((e30285 instanceof Object)){
var ex__28024__auto__ = e30285;
var statearr_30286_30306 = state_30260;
(statearr_30286_30306[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30307 = state_30260;
state_30260 = G__30307;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28021__auto__ = function(state_30260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28021__auto____1.call(this,state_30260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28021__auto____0;
figwheel$client$file_reloading$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28021__auto____1;
return figwheel$client$file_reloading$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__))
})();
var state__28112__auto__ = (function (){var statearr_30287 = f__28111__auto__.call(null);
(statearr_30287[(6)] = c__28110__auto__);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__))
);

return c__28110__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30309 = arguments.length;
switch (G__30309) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30311,callback){
var map__30312 = p__30311;
var map__30312__$1 = ((((!((map__30312 == null)))?(((((map__30312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30312):map__30312);
var file_msg = map__30312__$1;
var namespace = cljs.core.get.call(null,map__30312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30312,map__30312__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30312,map__30312__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30314){
var map__30315 = p__30314;
var map__30315__$1 = ((((!((map__30315 == null)))?(((((map__30315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var file_msg = map__30315__$1;
var namespace = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30317){
var map__30318 = p__30317;
var map__30318__$1 = ((((!((map__30318 == null)))?(((((map__30318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30318):map__30318);
var file_msg = map__30318__$1;
var namespace = cljs.core.get.call(null,map__30318__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30320,callback){
var map__30321 = p__30320;
var map__30321__$1 = ((((!((map__30321 == null)))?(((((map__30321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30321):map__30321);
var file_msg = map__30321__$1;
var request_url = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28110__auto___30371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___30371,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___30371,out){
return (function (state_30356){
var state_val_30357 = (state_30356[(1)]);
if((state_val_30357 === (1))){
var inst_30330 = cljs.core.seq.call(null,files);
var inst_30331 = cljs.core.first.call(null,inst_30330);
var inst_30332 = cljs.core.next.call(null,inst_30330);
var inst_30333 = files;
var state_30356__$1 = (function (){var statearr_30358 = state_30356;
(statearr_30358[(7)] = inst_30333);

(statearr_30358[(8)] = inst_30332);

(statearr_30358[(9)] = inst_30331);

return statearr_30358;
})();
var statearr_30359_30372 = state_30356__$1;
(statearr_30359_30372[(2)] = null);

(statearr_30359_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30357 === (2))){
var inst_30339 = (state_30356[(10)]);
var inst_30333 = (state_30356[(7)]);
var inst_30338 = cljs.core.seq.call(null,inst_30333);
var inst_30339__$1 = cljs.core.first.call(null,inst_30338);
var inst_30340 = cljs.core.next.call(null,inst_30338);
var inst_30341 = (inst_30339__$1 == null);
var inst_30342 = cljs.core.not.call(null,inst_30341);
var state_30356__$1 = (function (){var statearr_30360 = state_30356;
(statearr_30360[(10)] = inst_30339__$1);

(statearr_30360[(11)] = inst_30340);

return statearr_30360;
})();
if(inst_30342){
var statearr_30361_30373 = state_30356__$1;
(statearr_30361_30373[(1)] = (4));

} else {
var statearr_30362_30374 = state_30356__$1;
(statearr_30362_30374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30357 === (3))){
var inst_30354 = (state_30356[(2)]);
var state_30356__$1 = state_30356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30356__$1,inst_30354);
} else {
if((state_val_30357 === (4))){
var inst_30339 = (state_30356[(10)]);
var inst_30344 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30339);
var state_30356__$1 = state_30356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30356__$1,(7),inst_30344);
} else {
if((state_val_30357 === (5))){
var inst_30350 = cljs.core.async.close_BANG_.call(null,out);
var state_30356__$1 = state_30356;
var statearr_30363_30375 = state_30356__$1;
(statearr_30363_30375[(2)] = inst_30350);

(statearr_30363_30375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30357 === (6))){
var inst_30352 = (state_30356[(2)]);
var state_30356__$1 = state_30356;
var statearr_30364_30376 = state_30356__$1;
(statearr_30364_30376[(2)] = inst_30352);

(statearr_30364_30376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30357 === (7))){
var inst_30340 = (state_30356[(11)]);
var inst_30346 = (state_30356[(2)]);
var inst_30347 = cljs.core.async.put_BANG_.call(null,out,inst_30346);
var inst_30333 = inst_30340;
var state_30356__$1 = (function (){var statearr_30365 = state_30356;
(statearr_30365[(7)] = inst_30333);

(statearr_30365[(12)] = inst_30347);

return statearr_30365;
})();
var statearr_30366_30377 = state_30356__$1;
(statearr_30366_30377[(2)] = null);

(statearr_30366_30377[(1)] = (2));


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
});})(c__28110__auto___30371,out))
;
return ((function (switch__28020__auto__,c__28110__auto___30371,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto____0 = (function (){
var statearr_30367 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30367[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto__);

(statearr_30367[(1)] = (1));

return statearr_30367;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto____1 = (function (state_30356){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_30356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e30368){if((e30368 instanceof Object)){
var ex__28024__auto__ = e30368;
var statearr_30369_30378 = state_30356;
(statearr_30369_30378[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30379 = state_30356;
state_30356 = G__30379;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto__ = function(state_30356){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto____1.call(this,state_30356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___30371,out))
})();
var state__28112__auto__ = (function (){var statearr_30370 = f__28111__auto__.call(null);
(statearr_30370[(6)] = c__28110__auto___30371);

return statearr_30370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___30371,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30380,opts){
var map__30381 = p__30380;
var map__30381__$1 = ((((!((map__30381 == null)))?(((((map__30381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30381):map__30381);
var eval_body = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30383){var e = e30383;
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
return (function (p1__30384_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30384_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30385){
var vec__30386 = p__30385;
var k = cljs.core.nth.call(null,vec__30386,(0),null);
var v = cljs.core.nth.call(null,vec__30386,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30389){
var vec__30390 = p__30389;
var k = cljs.core.nth.call(null,vec__30390,(0),null);
var v = cljs.core.nth.call(null,vec__30390,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30396,p__30397){
var map__30398 = p__30396;
var map__30398__$1 = ((((!((map__30398 == null)))?(((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30398):map__30398);
var opts = map__30398__$1;
var before_jsload = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30399 = p__30397;
var map__30399__$1 = ((((!((map__30399 == null)))?(((((map__30399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30399):map__30399);
var msg = map__30399__$1;
var files = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30553){
var state_val_30554 = (state_30553[(1)]);
if((state_val_30554 === (7))){
var inst_30416 = (state_30553[(7)]);
var inst_30413 = (state_30553[(8)]);
var inst_30414 = (state_30553[(9)]);
var inst_30415 = (state_30553[(10)]);
var inst_30421 = cljs.core._nth.call(null,inst_30414,inst_30416);
var inst_30422 = figwheel.client.file_reloading.eval_body.call(null,inst_30421,opts);
var inst_30423 = (inst_30416 + (1));
var tmp30555 = inst_30413;
var tmp30556 = inst_30414;
var tmp30557 = inst_30415;
var inst_30413__$1 = tmp30555;
var inst_30414__$1 = tmp30556;
var inst_30415__$1 = tmp30557;
var inst_30416__$1 = inst_30423;
var state_30553__$1 = (function (){var statearr_30558 = state_30553;
(statearr_30558[(7)] = inst_30416__$1);

(statearr_30558[(8)] = inst_30413__$1);

(statearr_30558[(11)] = inst_30422);

(statearr_30558[(9)] = inst_30414__$1);

(statearr_30558[(10)] = inst_30415__$1);

return statearr_30558;
})();
var statearr_30559_30642 = state_30553__$1;
(statearr_30559_30642[(2)] = null);

(statearr_30559_30642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (20))){
var inst_30456 = (state_30553[(12)]);
var inst_30464 = figwheel.client.file_reloading.sort_files.call(null,inst_30456);
var state_30553__$1 = state_30553;
var statearr_30560_30643 = state_30553__$1;
(statearr_30560_30643[(2)] = inst_30464);

(statearr_30560_30643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (27))){
var state_30553__$1 = state_30553;
var statearr_30561_30644 = state_30553__$1;
(statearr_30561_30644[(2)] = null);

(statearr_30561_30644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (1))){
var inst_30405 = (state_30553[(13)]);
var inst_30402 = before_jsload.call(null,files);
var inst_30403 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30404 = (function (){return ((function (inst_30405,inst_30402,inst_30403,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30393_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30393_SHARP_);
});
;})(inst_30405,inst_30402,inst_30403,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30405__$1 = cljs.core.filter.call(null,inst_30404,files);
var inst_30406 = cljs.core.not_empty.call(null,inst_30405__$1);
var state_30553__$1 = (function (){var statearr_30562 = state_30553;
(statearr_30562[(14)] = inst_30403);

(statearr_30562[(13)] = inst_30405__$1);

(statearr_30562[(15)] = inst_30402);

return statearr_30562;
})();
if(cljs.core.truth_(inst_30406)){
var statearr_30563_30645 = state_30553__$1;
(statearr_30563_30645[(1)] = (2));

} else {
var statearr_30564_30646 = state_30553__$1;
(statearr_30564_30646[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (24))){
var state_30553__$1 = state_30553;
var statearr_30565_30647 = state_30553__$1;
(statearr_30565_30647[(2)] = null);

(statearr_30565_30647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (39))){
var inst_30506 = (state_30553[(16)]);
var state_30553__$1 = state_30553;
var statearr_30566_30648 = state_30553__$1;
(statearr_30566_30648[(2)] = inst_30506);

(statearr_30566_30648[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (46))){
var inst_30548 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
var statearr_30567_30649 = state_30553__$1;
(statearr_30567_30649[(2)] = inst_30548);

(statearr_30567_30649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (4))){
var inst_30450 = (state_30553[(2)]);
var inst_30451 = cljs.core.List.EMPTY;
var inst_30452 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30451);
var inst_30453 = (function (){return ((function (inst_30450,inst_30451,inst_30452,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30394_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30394_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30394_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30394_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30450,inst_30451,inst_30452,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30454 = cljs.core.filter.call(null,inst_30453,files);
var inst_30455 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30456 = cljs.core.concat.call(null,inst_30454,inst_30455);
var state_30553__$1 = (function (){var statearr_30568 = state_30553;
(statearr_30568[(17)] = inst_30452);

(statearr_30568[(18)] = inst_30450);

(statearr_30568[(12)] = inst_30456);

return statearr_30568;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30569_30650 = state_30553__$1;
(statearr_30569_30650[(1)] = (16));

} else {
var statearr_30570_30651 = state_30553__$1;
(statearr_30570_30651[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (15))){
var inst_30440 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
var statearr_30571_30652 = state_30553__$1;
(statearr_30571_30652[(2)] = inst_30440);

(statearr_30571_30652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (21))){
var inst_30466 = (state_30553[(19)]);
var inst_30466__$1 = (state_30553[(2)]);
var inst_30467 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30466__$1);
var state_30553__$1 = (function (){var statearr_30572 = state_30553;
(statearr_30572[(19)] = inst_30466__$1);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30553__$1,(22),inst_30467);
} else {
if((state_val_30554 === (31))){
var inst_30551 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30553__$1,inst_30551);
} else {
if((state_val_30554 === (32))){
var inst_30506 = (state_30553[(16)]);
var inst_30511 = inst_30506.cljs$lang$protocol_mask$partition0$;
var inst_30512 = (inst_30511 & (64));
var inst_30513 = inst_30506.cljs$core$ISeq$;
var inst_30514 = (cljs.core.PROTOCOL_SENTINEL === inst_30513);
var inst_30515 = ((inst_30512) || (inst_30514));
var state_30553__$1 = state_30553;
if(cljs.core.truth_(inst_30515)){
var statearr_30573_30653 = state_30553__$1;
(statearr_30573_30653[(1)] = (35));

} else {
var statearr_30574_30654 = state_30553__$1;
(statearr_30574_30654[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (40))){
var inst_30528 = (state_30553[(20)]);
var inst_30527 = (state_30553[(2)]);
var inst_30528__$1 = cljs.core.get.call(null,inst_30527,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30529 = cljs.core.get.call(null,inst_30527,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30530 = cljs.core.not_empty.call(null,inst_30528__$1);
var state_30553__$1 = (function (){var statearr_30575 = state_30553;
(statearr_30575[(20)] = inst_30528__$1);

(statearr_30575[(21)] = inst_30529);

return statearr_30575;
})();
if(cljs.core.truth_(inst_30530)){
var statearr_30576_30655 = state_30553__$1;
(statearr_30576_30655[(1)] = (41));

} else {
var statearr_30577_30656 = state_30553__$1;
(statearr_30577_30656[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (33))){
var state_30553__$1 = state_30553;
var statearr_30578_30657 = state_30553__$1;
(statearr_30578_30657[(2)] = false);

(statearr_30578_30657[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (13))){
var inst_30426 = (state_30553[(22)]);
var inst_30430 = cljs.core.chunk_first.call(null,inst_30426);
var inst_30431 = cljs.core.chunk_rest.call(null,inst_30426);
var inst_30432 = cljs.core.count.call(null,inst_30430);
var inst_30413 = inst_30431;
var inst_30414 = inst_30430;
var inst_30415 = inst_30432;
var inst_30416 = (0);
var state_30553__$1 = (function (){var statearr_30579 = state_30553;
(statearr_30579[(7)] = inst_30416);

(statearr_30579[(8)] = inst_30413);

(statearr_30579[(9)] = inst_30414);

(statearr_30579[(10)] = inst_30415);

return statearr_30579;
})();
var statearr_30580_30658 = state_30553__$1;
(statearr_30580_30658[(2)] = null);

(statearr_30580_30658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (22))){
var inst_30474 = (state_30553[(23)]);
var inst_30466 = (state_30553[(19)]);
var inst_30470 = (state_30553[(24)]);
var inst_30469 = (state_30553[(25)]);
var inst_30469__$1 = (state_30553[(2)]);
var inst_30470__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30469__$1);
var inst_30471 = (function (){var all_files = inst_30466;
var res_SINGLEQUOTE_ = inst_30469__$1;
var res = inst_30470__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30474,inst_30466,inst_30470,inst_30469,inst_30469__$1,inst_30470__$1,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30395_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30395_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30474,inst_30466,inst_30470,inst_30469,inst_30469__$1,inst_30470__$1,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30472 = cljs.core.filter.call(null,inst_30471,inst_30469__$1);
var inst_30473 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30474__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30473);
var inst_30475 = cljs.core.not_empty.call(null,inst_30474__$1);
var state_30553__$1 = (function (){var statearr_30581 = state_30553;
(statearr_30581[(23)] = inst_30474__$1);

(statearr_30581[(26)] = inst_30472);

(statearr_30581[(24)] = inst_30470__$1);

(statearr_30581[(25)] = inst_30469__$1);

return statearr_30581;
})();
if(cljs.core.truth_(inst_30475)){
var statearr_30582_30659 = state_30553__$1;
(statearr_30582_30659[(1)] = (23));

} else {
var statearr_30583_30660 = state_30553__$1;
(statearr_30583_30660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (36))){
var state_30553__$1 = state_30553;
var statearr_30584_30661 = state_30553__$1;
(statearr_30584_30661[(2)] = false);

(statearr_30584_30661[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (41))){
var inst_30528 = (state_30553[(20)]);
var inst_30532 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30533 = cljs.core.map.call(null,inst_30532,inst_30528);
var inst_30534 = cljs.core.pr_str.call(null,inst_30533);
var inst_30535 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30534)].join('');
var inst_30536 = figwheel.client.utils.log.call(null,inst_30535);
var state_30553__$1 = state_30553;
var statearr_30585_30662 = state_30553__$1;
(statearr_30585_30662[(2)] = inst_30536);

(statearr_30585_30662[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (43))){
var inst_30529 = (state_30553[(21)]);
var inst_30539 = (state_30553[(2)]);
var inst_30540 = cljs.core.not_empty.call(null,inst_30529);
var state_30553__$1 = (function (){var statearr_30586 = state_30553;
(statearr_30586[(27)] = inst_30539);

return statearr_30586;
})();
if(cljs.core.truth_(inst_30540)){
var statearr_30587_30663 = state_30553__$1;
(statearr_30587_30663[(1)] = (44));

} else {
var statearr_30588_30664 = state_30553__$1;
(statearr_30588_30664[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (29))){
var inst_30474 = (state_30553[(23)]);
var inst_30472 = (state_30553[(26)]);
var inst_30466 = (state_30553[(19)]);
var inst_30470 = (state_30553[(24)]);
var inst_30469 = (state_30553[(25)]);
var inst_30506 = (state_30553[(16)]);
var inst_30502 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30505 = (function (){var all_files = inst_30466;
var res_SINGLEQUOTE_ = inst_30469;
var res = inst_30470;
var files_not_loaded = inst_30472;
var dependencies_that_loaded = inst_30474;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30506,inst_30502,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30504){
var map__30589 = p__30504;
var map__30589__$1 = ((((!((map__30589 == null)))?(((((map__30589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30589):map__30589);
var namespace = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30506,inst_30502,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30506__$1 = cljs.core.group_by.call(null,inst_30505,inst_30472);
var inst_30508 = (inst_30506__$1 == null);
var inst_30509 = cljs.core.not.call(null,inst_30508);
var state_30553__$1 = (function (){var statearr_30591 = state_30553;
(statearr_30591[(28)] = inst_30502);

(statearr_30591[(16)] = inst_30506__$1);

return statearr_30591;
})();
if(inst_30509){
var statearr_30592_30665 = state_30553__$1;
(statearr_30592_30665[(1)] = (32));

} else {
var statearr_30593_30666 = state_30553__$1;
(statearr_30593_30666[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (44))){
var inst_30529 = (state_30553[(21)]);
var inst_30542 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30529);
var inst_30543 = cljs.core.pr_str.call(null,inst_30542);
var inst_30544 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30543)].join('');
var inst_30545 = figwheel.client.utils.log.call(null,inst_30544);
var state_30553__$1 = state_30553;
var statearr_30594_30667 = state_30553__$1;
(statearr_30594_30667[(2)] = inst_30545);

(statearr_30594_30667[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (6))){
var inst_30447 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
var statearr_30595_30668 = state_30553__$1;
(statearr_30595_30668[(2)] = inst_30447);

(statearr_30595_30668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (28))){
var inst_30472 = (state_30553[(26)]);
var inst_30499 = (state_30553[(2)]);
var inst_30500 = cljs.core.not_empty.call(null,inst_30472);
var state_30553__$1 = (function (){var statearr_30596 = state_30553;
(statearr_30596[(29)] = inst_30499);

return statearr_30596;
})();
if(cljs.core.truth_(inst_30500)){
var statearr_30597_30669 = state_30553__$1;
(statearr_30597_30669[(1)] = (29));

} else {
var statearr_30598_30670 = state_30553__$1;
(statearr_30598_30670[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (25))){
var inst_30470 = (state_30553[(24)]);
var inst_30486 = (state_30553[(2)]);
var inst_30487 = cljs.core.not_empty.call(null,inst_30470);
var state_30553__$1 = (function (){var statearr_30599 = state_30553;
(statearr_30599[(30)] = inst_30486);

return statearr_30599;
})();
if(cljs.core.truth_(inst_30487)){
var statearr_30600_30671 = state_30553__$1;
(statearr_30600_30671[(1)] = (26));

} else {
var statearr_30601_30672 = state_30553__$1;
(statearr_30601_30672[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (34))){
var inst_30522 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
if(cljs.core.truth_(inst_30522)){
var statearr_30602_30673 = state_30553__$1;
(statearr_30602_30673[(1)] = (38));

} else {
var statearr_30603_30674 = state_30553__$1;
(statearr_30603_30674[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (17))){
var state_30553__$1 = state_30553;
var statearr_30604_30675 = state_30553__$1;
(statearr_30604_30675[(2)] = recompile_dependents);

(statearr_30604_30675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (3))){
var state_30553__$1 = state_30553;
var statearr_30605_30676 = state_30553__$1;
(statearr_30605_30676[(2)] = null);

(statearr_30605_30676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (12))){
var inst_30443 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
var statearr_30606_30677 = state_30553__$1;
(statearr_30606_30677[(2)] = inst_30443);

(statearr_30606_30677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (2))){
var inst_30405 = (state_30553[(13)]);
var inst_30412 = cljs.core.seq.call(null,inst_30405);
var inst_30413 = inst_30412;
var inst_30414 = null;
var inst_30415 = (0);
var inst_30416 = (0);
var state_30553__$1 = (function (){var statearr_30607 = state_30553;
(statearr_30607[(7)] = inst_30416);

(statearr_30607[(8)] = inst_30413);

(statearr_30607[(9)] = inst_30414);

(statearr_30607[(10)] = inst_30415);

return statearr_30607;
})();
var statearr_30608_30678 = state_30553__$1;
(statearr_30608_30678[(2)] = null);

(statearr_30608_30678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (23))){
var inst_30474 = (state_30553[(23)]);
var inst_30472 = (state_30553[(26)]);
var inst_30466 = (state_30553[(19)]);
var inst_30470 = (state_30553[(24)]);
var inst_30469 = (state_30553[(25)]);
var inst_30477 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30479 = (function (){var all_files = inst_30466;
var res_SINGLEQUOTE_ = inst_30469;
var res = inst_30470;
var files_not_loaded = inst_30472;
var dependencies_that_loaded = inst_30474;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30477,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30478){
var map__30609 = p__30478;
var map__30609__$1 = ((((!((map__30609 == null)))?(((((map__30609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30609):map__30609);
var request_url = cljs.core.get.call(null,map__30609__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30477,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30480 = cljs.core.reverse.call(null,inst_30474);
var inst_30481 = cljs.core.map.call(null,inst_30479,inst_30480);
var inst_30482 = cljs.core.pr_str.call(null,inst_30481);
var inst_30483 = figwheel.client.utils.log.call(null,inst_30482);
var state_30553__$1 = (function (){var statearr_30611 = state_30553;
(statearr_30611[(31)] = inst_30477);

return statearr_30611;
})();
var statearr_30612_30679 = state_30553__$1;
(statearr_30612_30679[(2)] = inst_30483);

(statearr_30612_30679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (35))){
var state_30553__$1 = state_30553;
var statearr_30613_30680 = state_30553__$1;
(statearr_30613_30680[(2)] = true);

(statearr_30613_30680[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (19))){
var inst_30456 = (state_30553[(12)]);
var inst_30462 = figwheel.client.file_reloading.expand_files.call(null,inst_30456);
var state_30553__$1 = state_30553;
var statearr_30614_30681 = state_30553__$1;
(statearr_30614_30681[(2)] = inst_30462);

(statearr_30614_30681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (11))){
var state_30553__$1 = state_30553;
var statearr_30615_30682 = state_30553__$1;
(statearr_30615_30682[(2)] = null);

(statearr_30615_30682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (9))){
var inst_30445 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
var statearr_30616_30683 = state_30553__$1;
(statearr_30616_30683[(2)] = inst_30445);

(statearr_30616_30683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (5))){
var inst_30416 = (state_30553[(7)]);
var inst_30415 = (state_30553[(10)]);
var inst_30418 = (inst_30416 < inst_30415);
var inst_30419 = inst_30418;
var state_30553__$1 = state_30553;
if(cljs.core.truth_(inst_30419)){
var statearr_30617_30684 = state_30553__$1;
(statearr_30617_30684[(1)] = (7));

} else {
var statearr_30618_30685 = state_30553__$1;
(statearr_30618_30685[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (14))){
var inst_30426 = (state_30553[(22)]);
var inst_30435 = cljs.core.first.call(null,inst_30426);
var inst_30436 = figwheel.client.file_reloading.eval_body.call(null,inst_30435,opts);
var inst_30437 = cljs.core.next.call(null,inst_30426);
var inst_30413 = inst_30437;
var inst_30414 = null;
var inst_30415 = (0);
var inst_30416 = (0);
var state_30553__$1 = (function (){var statearr_30619 = state_30553;
(statearr_30619[(7)] = inst_30416);

(statearr_30619[(8)] = inst_30413);

(statearr_30619[(32)] = inst_30436);

(statearr_30619[(9)] = inst_30414);

(statearr_30619[(10)] = inst_30415);

return statearr_30619;
})();
var statearr_30620_30686 = state_30553__$1;
(statearr_30620_30686[(2)] = null);

(statearr_30620_30686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (45))){
var state_30553__$1 = state_30553;
var statearr_30621_30687 = state_30553__$1;
(statearr_30621_30687[(2)] = null);

(statearr_30621_30687[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (26))){
var inst_30474 = (state_30553[(23)]);
var inst_30472 = (state_30553[(26)]);
var inst_30466 = (state_30553[(19)]);
var inst_30470 = (state_30553[(24)]);
var inst_30469 = (state_30553[(25)]);
var inst_30489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30491 = (function (){var all_files = inst_30466;
var res_SINGLEQUOTE_ = inst_30469;
var res = inst_30470;
var files_not_loaded = inst_30472;
var dependencies_that_loaded = inst_30474;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30489,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30490){
var map__30622 = p__30490;
var map__30622__$1 = ((((!((map__30622 == null)))?(((((map__30622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30622):map__30622);
var namespace = cljs.core.get.call(null,map__30622__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30489,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30492 = cljs.core.map.call(null,inst_30491,inst_30470);
var inst_30493 = cljs.core.pr_str.call(null,inst_30492);
var inst_30494 = figwheel.client.utils.log.call(null,inst_30493);
var inst_30495 = (function (){var all_files = inst_30466;
var res_SINGLEQUOTE_ = inst_30469;
var res = inst_30470;
var files_not_loaded = inst_30472;
var dependencies_that_loaded = inst_30474;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30489,inst_30491,inst_30492,inst_30493,inst_30494,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30474,inst_30472,inst_30466,inst_30470,inst_30469,inst_30489,inst_30491,inst_30492,inst_30493,inst_30494,state_val_30554,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30496 = setTimeout(inst_30495,(10));
var state_30553__$1 = (function (){var statearr_30624 = state_30553;
(statearr_30624[(33)] = inst_30489);

(statearr_30624[(34)] = inst_30494);

return statearr_30624;
})();
var statearr_30625_30688 = state_30553__$1;
(statearr_30625_30688[(2)] = inst_30496);

(statearr_30625_30688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (16))){
var state_30553__$1 = state_30553;
var statearr_30626_30689 = state_30553__$1;
(statearr_30626_30689[(2)] = reload_dependents);

(statearr_30626_30689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (38))){
var inst_30506 = (state_30553[(16)]);
var inst_30524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30506);
var state_30553__$1 = state_30553;
var statearr_30627_30690 = state_30553__$1;
(statearr_30627_30690[(2)] = inst_30524);

(statearr_30627_30690[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (30))){
var state_30553__$1 = state_30553;
var statearr_30628_30691 = state_30553__$1;
(statearr_30628_30691[(2)] = null);

(statearr_30628_30691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (10))){
var inst_30426 = (state_30553[(22)]);
var inst_30428 = cljs.core.chunked_seq_QMARK_.call(null,inst_30426);
var state_30553__$1 = state_30553;
if(inst_30428){
var statearr_30629_30692 = state_30553__$1;
(statearr_30629_30692[(1)] = (13));

} else {
var statearr_30630_30693 = state_30553__$1;
(statearr_30630_30693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (18))){
var inst_30460 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
if(cljs.core.truth_(inst_30460)){
var statearr_30631_30694 = state_30553__$1;
(statearr_30631_30694[(1)] = (19));

} else {
var statearr_30632_30695 = state_30553__$1;
(statearr_30632_30695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (42))){
var state_30553__$1 = state_30553;
var statearr_30633_30696 = state_30553__$1;
(statearr_30633_30696[(2)] = null);

(statearr_30633_30696[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (37))){
var inst_30519 = (state_30553[(2)]);
var state_30553__$1 = state_30553;
var statearr_30634_30697 = state_30553__$1;
(statearr_30634_30697[(2)] = inst_30519);

(statearr_30634_30697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30554 === (8))){
var inst_30426 = (state_30553[(22)]);
var inst_30413 = (state_30553[(8)]);
var inst_30426__$1 = cljs.core.seq.call(null,inst_30413);
var state_30553__$1 = (function (){var statearr_30635 = state_30553;
(statearr_30635[(22)] = inst_30426__$1);

return statearr_30635;
})();
if(inst_30426__$1){
var statearr_30636_30698 = state_30553__$1;
(statearr_30636_30698[(1)] = (10));

} else {
var statearr_30637_30699 = state_30553__$1;
(statearr_30637_30699[(1)] = (11));

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
});})(c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28020__auto__,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto____0 = (function (){
var statearr_30638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30638[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto__);

(statearr_30638[(1)] = (1));

return statearr_30638;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto____1 = (function (state_30553){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_30553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e30639){if((e30639 instanceof Object)){
var ex__28024__auto__ = e30639;
var statearr_30640_30700 = state_30553;
(statearr_30640_30700[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30701 = state_30553;
state_30553 = G__30701;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto__ = function(state_30553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto____1.call(this,state_30553);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28112__auto__ = (function (){var statearr_30641 = f__28111__auto__.call(null);
(statearr_30641[(6)] = c__28110__auto__);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__,map__30398,map__30398__$1,opts,before_jsload,on_jsload,reload_dependents,map__30399,map__30399__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28110__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30704,link){
var map__30705 = p__30704;
var map__30705__$1 = ((((!((map__30705 == null)))?(((((map__30705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30705):map__30705);
var file = cljs.core.get.call(null,map__30705__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30705,map__30705__$1,file){
return (function (p1__30702_SHARP_,p2__30703_SHARP_){
if(cljs.core._EQ_.call(null,p1__30702_SHARP_,p2__30703_SHARP_)){
return p1__30702_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30705,map__30705__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30708){
var map__30709 = p__30708;
var map__30709__$1 = ((((!((map__30709 == null)))?(((((map__30709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30709):map__30709);
var match_length = cljs.core.get.call(null,map__30709__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30709__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30707_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30707_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30711_SHARP_,p2__30712_SHARP_){
return cljs.core.assoc.call(null,p1__30711_SHARP_,cljs.core.get.call(null,p2__30712_SHARP_,key),p2__30712_SHARP_);
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
var loaded_f_datas_30713 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30713);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30713);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30714,p__30715){
var map__30716 = p__30714;
var map__30716__$1 = ((((!((map__30716 == null)))?(((((map__30716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30716):map__30716);
var on_cssload = cljs.core.get.call(null,map__30716__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30717 = p__30715;
var map__30717__$1 = ((((!((map__30717 == null)))?(((((map__30717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30717):map__30717);
var files_msg = map__30717__$1;
var files = cljs.core.get.call(null,map__30717__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1527842020735
