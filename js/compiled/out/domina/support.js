// Compiled by ClojureScript 1.10.238 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_24468 = document.createElement("div");
var test_html_24469 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_24468.innerHTML = test_html_24469;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_24468.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_24468.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_24468.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map?rel=1528121915502
