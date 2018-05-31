// Compiled by ClojureScript 1.10.238 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_21746 = document.createElement("div");
var test_html_21747 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_21746.innerHTML = test_html_21747;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_21746.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_21746.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_21746.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map?rel=1527748558734
