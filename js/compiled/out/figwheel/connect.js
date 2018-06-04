// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40632__delegate = function (x__40611__auto__){
if(cljs.core.truth_(profile_site.core.on_js_reload)){
return cljs.core.apply.call(null,profile_site.core.on_js_reload,x__40611__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("profile-site.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__40632 = function (var_args){
var x__40611__auto__ = null;
if (arguments.length > 0) {
var G__40633__i = 0, G__40633__a = new Array(arguments.length -  0);
while (G__40633__i < G__40633__a.length) {G__40633__a[G__40633__i] = arguments[G__40633__i + 0]; ++G__40633__i;}
  x__40611__auto__ = new cljs.core.IndexedSeq(G__40633__a,0,null);
} 
return G__40632__delegate.call(this,x__40611__auto__);};
G__40632.cljs$lang$maxFixedArity = 0;
G__40632.cljs$lang$applyTo = (function (arglist__40634){
var x__40611__auto__ = cljs.core.seq(arglist__40634);
return G__40632__delegate(x__40611__auto__);
});
G__40632.cljs$core$IFn$_invoke$arity$variadic = G__40632__delegate;
return G__40632;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1528121938805
