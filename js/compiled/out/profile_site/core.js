// Compiled by ClojureScript 1.10.238 {}
goog.provide('profile_site.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('hipo.core');
goog.require('domina');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof profile_site.core.app_state !== 'undefined'){
} else {
profile_site.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
}
profile_site.core.site_title = "Michael Valdron";
profile_site.core.page_title = "Home";
profile_site.core.main_image_url = "img/michael.jpg";
profile_site.core.person_name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),profile_site.core.site_title], null)], null);
profile_site.core.header_name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),profile_site.core.site_title], null)], null);
profile_site.core.portfolio_content = (function profile_site$core$portfolio_content(d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w3-row-padding"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w3-third w3-container w3-margin-bottom"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get.call(null,d,new cljs.core.Keyword(null,"img","img",1442687358)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get.call(null,d,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w3-hover-opacity"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w3-container w3-white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.get.call(null,d,new cljs.core.Keyword(null,"title","title",636505583))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,d,new cljs.core.Keyword(null,"desc","desc",2093485764))], null)], null)], null)], null);
});
profile_site.core.homepage_content = (function profile_site$core$homepage_content(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"content",new cljs.core.Keyword(null,"class","class",-2030961996),"w3-container"], null)], null);
});
profile_site.core.render_site = (function profile_site$core$render_site(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile_site.core.homepage_content], null),document.getElementById("app"));

domina.set_html_BANG_.call(null,domina.by_id.call(null,"person-name"),(function (){var v38679 = profile_site.core.person_name;
var el__22481__auto__ = hipo.interpreter.create.call(null,v38679,null);
hipo.core.set_hiccup_BANG_.call(null,el__22481__auto__,v38679);

return el__22481__auto__;
})());

domina.set_html_BANG_.call(null,domina.by_id.call(null,"header-name"),(function (){var v38680 = profile_site.core.header_name;
var el__22481__auto__ = hipo.interpreter.create.call(null,v38680,null);
hipo.core.set_hiccup_BANG_.call(null,el__22481__auto__,v38680);

return el__22481__auto__;
})());

return domina.set_attr_BANG_.call(null,domina.by_class.call(null,"main-img"),"src",profile_site.core.main_image_url);
});
profile_site.core.on_js_reload = (function profile_site$core$on_js_reload(){
return null;
});
profile_site.core.render_site.call(null);

//# sourceMappingURL=core.js.map?rel=1527844609784
