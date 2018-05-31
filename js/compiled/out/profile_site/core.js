// Compiled by ClojureScript 1.10.238 {}
goog.provide('profile_site.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('hipo.core');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
profile_site.core.site_title = "Michael Valdron";
profile_site.core.image_url = "";
profile_site.core.person_name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),profile_site.core.site_title], null)], null);
profile_site.core.header_name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),profile_site.core.site_title], null)], null);
profile_site.core.homepage = (function profile_site$core$homepage(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"test message"], null)], null);
});
profile_site.core.render_site = (function profile_site$core$render_site(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [profile_site.core.homepage], null),document.getElementById("app"));

domina.set_html_BANG_.call(null,domina.by_id.call(null,"person-name"),(function (){var v37893 = profile_site.core.person_name;
var el__37825__auto__ = hipo.interpreter.create.call(null,v37893,null);
hipo.core.set_hiccup_BANG_.call(null,el__37825__auto__,v37893);

return el__37825__auto__;
})());

domina.set_html_BANG_.call(null,domina.by_id.call(null,"header-name"),(function (){var v37894 = profile_site.core.header_name;
var el__37825__auto__ = hipo.interpreter.create.call(null,v37894,null);
hipo.core.set_hiccup_BANG_.call(null,el__37825__auto__,v37894);

return el__37825__auto__;
})());

return domina.set_attr_BANG_.call(null,domina.by_id.call(null,"main-img"),"src",profile_site.core.image_url);
});
profile_site.core.render_site.call(null);
cljs.core.println.call(null,"This text is printed from src/profile-site/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof profile_site.core.app_state !== 'undefined'){
} else {
profile_site.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
profile_site.core.on_js_reload = (function profile_site$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1527750532271
