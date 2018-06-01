// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21870__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21871__i = 0, G__21871__a = new Array(arguments.length -  0);
while (G__21871__i < G__21871__a.length) {G__21871__a[G__21871__i] = arguments[G__21871__i + 0]; ++G__21871__i;}
  args = new cljs.core.IndexedSeq(G__21871__a,0,null);
} 
return G__21870__delegate.call(this,args);};
G__21870.cljs$lang$maxFixedArity = 0;
G__21870.cljs$lang$applyTo = (function (arglist__21872){
var args = cljs.core.seq(arglist__21872);
return G__21870__delegate(args);
});
G__21870.cljs$core$IFn$_invoke$arity$variadic = G__21870__delegate;
return G__21870;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21873__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21874__i = 0, G__21874__a = new Array(arguments.length -  0);
while (G__21874__i < G__21874__a.length) {G__21874__a[G__21874__i] = arguments[G__21874__i + 0]; ++G__21874__i;}
  args = new cljs.core.IndexedSeq(G__21874__a,0,null);
} 
return G__21873__delegate.call(this,args);};
G__21873.cljs$lang$maxFixedArity = 0;
G__21873.cljs$lang$applyTo = (function (arglist__21875){
var args = cljs.core.seq(arglist__21875);
return G__21873__delegate(args);
});
G__21873.cljs$core$IFn$_invoke$arity$variadic = G__21873__delegate;
return G__21873;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1527842009575
