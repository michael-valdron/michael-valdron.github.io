// Compiled by ClojureScript 1.10.238 {}
goog.provide('hipo.attribute');
goog.require('cljs.core');
goog.require('hipo.hiccup');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),"style"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__21951_SHARP_,p2__21952_SHARP_,p3__21953_SHARP_,p4__21950_SHARP_){
var seq__21954 = cljs.core.seq.call(null,p4__21950_SHARP_);
var chunk__21955 = null;
var count__21956 = (0);
var i__21957 = (0);
while(true){
if((i__21957 < count__21956)){
var vec__21958 = cljs.core._nth.call(null,chunk__21955,i__21957);
var k = cljs.core.nth.call(null,vec__21958,(0),null);
var v = cljs.core.nth.call(null,vec__21958,(1),null);
(p1__21951_SHARP_["style"][cljs.core.name.call(null,k)] = v);


var G__21964 = seq__21954;
var G__21965 = chunk__21955;
var G__21966 = count__21956;
var G__21967 = (i__21957 + (1));
seq__21954 = G__21964;
chunk__21955 = G__21965;
count__21956 = G__21966;
i__21957 = G__21967;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21954);
if(temp__5457__auto__){
var seq__21954__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21954__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21954__$1);
var G__21968 = cljs.core.chunk_rest.call(null,seq__21954__$1);
var G__21969 = c__4319__auto__;
var G__21970 = cljs.core.count.call(null,c__4319__auto__);
var G__21971 = (0);
seq__21954 = G__21968;
chunk__21955 = G__21969;
count__21956 = G__21970;
i__21957 = G__21971;
continue;
} else {
var vec__21961 = cljs.core.first.call(null,seq__21954__$1);
var k = cljs.core.nth.call(null,vec__21961,(0),null);
var v = cljs.core.nth.call(null,vec__21961,(1),null);
(p1__21951_SHARP_["style"][cljs.core.name.call(null,k)] = v);


var G__21972 = cljs.core.next.call(null,seq__21954__$1);
var G__21973 = null;
var G__21974 = (0);
var G__21975 = (0);
seq__21954 = G__21972;
chunk__21955 = G__21973;
count__21956 = G__21974;
i__21957 = G__21975;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
hipo.attribute.property_name__GT_js_property_name = (function hipo$attribute$property_name__GT_js_property_name(n){
return n.replace("-","_");
});
hipo.attribute.set_property_value = (function hipo$attribute$set_property_value(el,k,v){
return (el[hipo.attribute.property_name__GT_js_property_name.call(null,cljs.core.name.call(null,k))] = v);
});
hipo.attribute.set_attribute_BANG_ = (function hipo$attribute$set_attribute_BANG_(el,k,v,m){
var temp__5455__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace.call(null,cljs.core.namespace.call(null,k),m):null);
if(cljs.core.truth_(temp__5455__auto__)){
var nns = temp__5455__auto__;
return el.setAttributeNS(nns,cljs.core.name.call(null,k),v);
} else {
return el.setAttribute(cljs.core.name.call(null,k),v);
}
});
hipo.attribute.remove_attribute_BANG_ = (function hipo$attribute$remove_attribute_BANG_(el,k,m){
var temp__5455__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace.call(null,cljs.core.namespace.call(null,k),m):null);
if(cljs.core.truth_(temp__5455__auto__)){
var nns = temp__5455__auto__;
return el.removeAttributeNS(nns,cljs.core.name.call(null,k));
} else {
return el.removeAttribute(cljs.core.name.call(null,k));
}
});
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__21976_SHARP_,p2__21977_SHARP_,p3__21979_SHARP_,p4__21978_SHARP_){
return hipo.attribute.set_property_value.call(null,p1__21976_SHARP_,p2__21977_SHARP_,p4__21978_SHARP_);
})], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__21981_SHARP_,p2__21982_SHARP_,p3__21984_SHARP_,p4__21980_SHARP_,p5__21983_SHARP_){
if(cljs.core.truth_(p4__21980_SHARP_)){
return hipo.attribute.set_attribute_BANG_.call(null,p1__21981_SHARP_,p2__21982_SHARP_,p4__21980_SHARP_,p5__21983_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_.call(null,p1__21981_SHARP_,p2__21982_SHARP_,p5__21983_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),"svg",new cljs.core.Keyword(null,"attr","attr",-604132353),"class"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"input",new cljs.core.Keyword(null,"attr","attr",-604132353),"autofocus"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__21986_SHARP_,p2__21987_SHARP_,p3__21988_SHARP_,p4__21985_SHARP_){
if(cljs.core.truth_(p4__21985_SHARP_)){
p1__21986_SHARP_.focus();

return p1__21986_SHARP_.setAttribute(p2__21987_SHARP_,p4__21985_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"option",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"select",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"selectIndex",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"textarea",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["value",null], null), null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332)], null)], null);
hipo.attribute.matches_QMARK_ = (function hipo$attribute$matches_QMARK_(expr,s){
if(cljs.core.truth_(expr)){
if(cljs.core.set_QMARK_.call(null,expr)){
return cljs.core.contains_QMARK_.call(null,expr,s);
} else {
return cljs.core._EQ_.call(null,s,expr);

}
} else {
return true;
}
});
hipo.attribute.target_matches_QMARK_ = (function hipo$attribute$target_matches_QMARK_(m,ns,tag,attr){
var and__3911__auto__ = hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m),ns);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m),tag);
if(cljs.core.truth_(and__3911__auto____$1)){
return hipo.attribute.matches_QMARK_.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(m),attr);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
hipo.attribute.handler = (function hipo$attribute$handler(m,ns,tag,attr){
var v = cljs.core.concat.call(null,new cljs.core.Keyword(null,"attribute-handlers","attribute-handlers",855454691).cljs$core$IFn$_invoke$arity$1(m),hipo.attribute.default_handlers);
var h = cljs.core.some.call(null,((function (v){
return (function (p1__21989_SHARP_){
var t = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__21989_SHARP_);
if(cljs.core.truth_(hipo.attribute.target_matches_QMARK_.call(null,t,ns,tag,cljs.core.name.call(null,attr)))){
return p1__21989_SHARP_;
} else {
return null;
}
});})(v))
,v);
if(cljs.core.contains_QMARK_.call(null,h,new cljs.core.Keyword(null,"type","type",1174270348))){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(h).call(null,hipo.attribute.default_handler_fns);
} else {
return h;
}
});
hipo.attribute.default_set_value_BANG_ = (function hipo$attribute$default_set_value_BANG_(el,attr,ov,nv,m){
if(cljs.core.truth_((function (){var or__3922__auto__ = hipo.hiccup.literal_QMARK_.call(null,ov);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nv);
}
})())){
if(cljs.core.truth_(nv)){
return hipo.attribute.set_attribute_BANG_.call(null,el,attr,nv,m);
} else {
return hipo.attribute.remove_attribute_BANG_.call(null,el,attr,m);
}
} else {
return (el[attr] = hipo.attribute.set_property_value.call(null,el,attr,nv));
}
});
hipo.attribute.set_value_BANG_ = (function hipo$attribute$set_value_BANG_(el,m,ns,tag,attr,ov,nv){
var h = hipo.attribute.handler.call(null,m,ns,tag,attr);
var f = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return hipo.attribute.default_set_value_BANG_;
}
})();
return f.call(null,el,attr,ov,nv,m);
});

//# sourceMappingURL=attribute.js.map?rel=1527842010075
