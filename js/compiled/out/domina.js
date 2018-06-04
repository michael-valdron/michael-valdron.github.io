// Compiled by ClojureScript 1.10.238 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_24913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_24914 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_24915 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_24915,opt_wrapper_24913,table_section_wrapper_24914,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_24913,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_24914,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_24914,cell_wrapper_24915,table_section_wrapper_24914,table_section_wrapper_24914]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__3911__auto__ = div.firstChild;
if(cljs.core.truth_(and__3911__auto__)){
return div.firstChild.childNodes;
} else {
return and__3911__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__24916 = cljs.core.seq.call(null,tbody);
var chunk__24917 = null;
var count__24918 = (0);
var i__24919 = (0);
while(true){
if((i__24919 < count__24918)){
var child = cljs.core._nth.call(null,chunk__24917,i__24919);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__24920 = seq__24916;
var G__24921 = chunk__24917;
var G__24922 = count__24918;
var G__24923 = (i__24919 + (1));
seq__24916 = G__24920;
chunk__24917 = G__24921;
count__24918 = G__24922;
i__24919 = G__24923;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24916);
if(temp__5457__auto__){
var seq__24916__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24916__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24916__$1);
var G__24924 = cljs.core.chunk_rest.call(null,seq__24916__$1);
var G__24925 = c__4319__auto__;
var G__24926 = cljs.core.count.call(null,c__4319__auto__);
var G__24927 = (0);
seq__24916 = G__24924;
chunk__24917 = G__24925;
count__24918 = G__24926;
i__24919 = G__24927;
continue;
} else {
var child = cljs.core.first.call(null,seq__24916__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__24928 = cljs.core.next.call(null,seq__24916__$1);
var G__24929 = null;
var G__24930 = (0);
var G__24931 = (0);
seq__24916 = G__24928;
chunk__24917 = G__24929;
count__24918 = G__24930;
i__24919 = G__24931;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__24932 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__24932,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__24932,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__24932,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__24935 = wrapper.lastChild;
var G__24936 = (level - (1));
wrapper = G__24935;
level = G__24936;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__3911__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3911__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if(((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null))))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4211__auto__ = (((content == null))?null:content);
var m__4212__auto__ = (domina.nodes[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,content);
} else {
var m__4212__auto____$1 = (domina.nodes["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if(((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null))))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4211__auto__ = (((nodeseq == null))?null:nodeseq);
var m__4212__auto__ = (domina.single_node[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,nodeseq);
} else {
var m__4212__auto____$1 = (domina.single_node["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24938 = arguments.length;
var i__4500__auto___24939 = (0);
while(true){
if((i__4500__auto___24939 < len__4499__auto___24938)){
args__4502__auto__.push((arguments[i__4500__auto___24939]));

var G__24940 = (i__4500__auto___24939 + (1));
i__4500__auto___24939 = G__24940;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined))))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.log_debug.cljs$lang$applyTo = (function (seq24937){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24937));
});

domina.log = (function domina$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24942 = arguments.length;
var i__4500__auto___24943 = (0);
while(true){
if((i__4500__auto___24943 < len__4499__auto___24942)){
args__4502__auto__.push((arguments[i__4500__auto___24943]));

var G__24944 = (i__4500__auto___24943 + (1));
i__4500__auto___24943 = G__24944;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.log.cljs$lang$applyTo = (function (seq24941){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24941));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24946 = arguments.length;
var i__4500__auto___24947 = (0);
while(true){
if((i__4500__auto___24947 < len__4499__auto___24946)){
args__4502__auto__.push((arguments[i__4500__auto___24947]));

var G__24948 = (i__4500__auto___24947 + (1));
i__4500__auto___24947 = G__24948;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
domina.common_ancestor.cljs$lang$applyTo = (function (seq24945){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24945));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__24949_SHARP_){
return p1__24949_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__24950_SHARP_,p2__24951_SHARP_){
return goog.dom.insertChildAt(p1__24950_SHARP_,p2__24951_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24953_SHARP_,p2__24952_SHARP_){
return goog.dom.insertSiblingBefore(p2__24952_SHARP_,p1__24953_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24955_SHARP_,p2__24954_SHARP_){
return goog.dom.insertSiblingAfter(p2__24954_SHARP_,p1__24955_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__24957_SHARP_,p2__24956_SHARP_){
return goog.dom.replaceNode(p2__24956_SHARP_,p1__24957_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24965 = arguments.length;
var i__4500__auto___24966 = (0);
while(true){
if((i__4500__auto___24966 < len__4499__auto___24965)){
args__4502__auto__.push((arguments[i__4500__auto___24966]));

var G__24967 = (i__4500__auto___24966 + (1));
i__4500__auto___24966 = G__24967;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__24961_24968 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24962_24969 = null;
var count__24963_24970 = (0);
var i__24964_24971 = (0);
while(true){
if((i__24964_24971 < count__24963_24970)){
var n_24972 = cljs.core._nth.call(null,chunk__24962_24969,i__24964_24971);
goog.style.setStyle(n_24972,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__24973 = seq__24961_24968;
var G__24974 = chunk__24962_24969;
var G__24975 = count__24963_24970;
var G__24976 = (i__24964_24971 + (1));
seq__24961_24968 = G__24973;
chunk__24962_24969 = G__24974;
count__24963_24970 = G__24975;
i__24964_24971 = G__24976;
continue;
} else {
var temp__5457__auto___24977 = cljs.core.seq.call(null,seq__24961_24968);
if(temp__5457__auto___24977){
var seq__24961_24978__$1 = temp__5457__auto___24977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24961_24978__$1)){
var c__4319__auto___24979 = cljs.core.chunk_first.call(null,seq__24961_24978__$1);
var G__24980 = cljs.core.chunk_rest.call(null,seq__24961_24978__$1);
var G__24981 = c__4319__auto___24979;
var G__24982 = cljs.core.count.call(null,c__4319__auto___24979);
var G__24983 = (0);
seq__24961_24968 = G__24980;
chunk__24962_24969 = G__24981;
count__24963_24970 = G__24982;
i__24964_24971 = G__24983;
continue;
} else {
var n_24984 = cljs.core.first.call(null,seq__24961_24978__$1);
goog.style.setStyle(n_24984,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__24985 = cljs.core.next.call(null,seq__24961_24978__$1);
var G__24986 = null;
var G__24987 = (0);
var G__24988 = (0);
seq__24961_24968 = G__24985;
chunk__24962_24969 = G__24986;
count__24963_24970 = G__24987;
i__24964_24971 = G__24988;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq24958){
var G__24959 = cljs.core.first.call(null,seq24958);
var seq24958__$1 = cljs.core.next.call(null,seq24958);
var G__24960 = cljs.core.first.call(null,seq24958__$1);
var seq24958__$2 = cljs.core.next.call(null,seq24958__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24959,G__24960,seq24958__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24996 = arguments.length;
var i__4500__auto___24997 = (0);
while(true){
if((i__4500__auto___24997 < len__4499__auto___24996)){
args__4502__auto__.push((arguments[i__4500__auto___24997]));

var G__24998 = (i__4500__auto___24997 + (1));
i__4500__auto___24997 = G__24998;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__24992_24999 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__24993_25000 = null;
var count__24994_25001 = (0);
var i__24995_25002 = (0);
while(true){
if((i__24995_25002 < count__24994_25001)){
var n_25003 = cljs.core._nth.call(null,chunk__24993_25000,i__24995_25002);
n_25003.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__25004 = seq__24992_24999;
var G__25005 = chunk__24993_25000;
var G__25006 = count__24994_25001;
var G__25007 = (i__24995_25002 + (1));
seq__24992_24999 = G__25004;
chunk__24993_25000 = G__25005;
count__24994_25001 = G__25006;
i__24995_25002 = G__25007;
continue;
} else {
var temp__5457__auto___25008 = cljs.core.seq.call(null,seq__24992_24999);
if(temp__5457__auto___25008){
var seq__24992_25009__$1 = temp__5457__auto___25008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24992_25009__$1)){
var c__4319__auto___25010 = cljs.core.chunk_first.call(null,seq__24992_25009__$1);
var G__25011 = cljs.core.chunk_rest.call(null,seq__24992_25009__$1);
var G__25012 = c__4319__auto___25010;
var G__25013 = cljs.core.count.call(null,c__4319__auto___25010);
var G__25014 = (0);
seq__24992_24999 = G__25011;
chunk__24993_25000 = G__25012;
count__24994_25001 = G__25013;
i__24995_25002 = G__25014;
continue;
} else {
var n_25015 = cljs.core.first.call(null,seq__24992_25009__$1);
n_25015.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__25016 = cljs.core.next.call(null,seq__24992_25009__$1);
var G__25017 = null;
var G__25018 = (0);
var G__25019 = (0);
seq__24992_24999 = G__25016;
chunk__24993_25000 = G__25017;
count__24994_25001 = G__25018;
i__24995_25002 = G__25019;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq24989){
var G__24990 = cljs.core.first.call(null,seq24989);
var seq24989__$1 = cljs.core.next.call(null,seq24989);
var G__24991 = cljs.core.first.call(null,seq24989__$1);
var seq24989__$2 = cljs.core.next.call(null,seq24989__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24990,G__24991,seq24989__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__25020_25024 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25021_25025 = null;
var count__25022_25026 = (0);
var i__25023_25027 = (0);
while(true){
if((i__25023_25027 < count__25022_25026)){
var n_25028 = cljs.core._nth.call(null,chunk__25021_25025,i__25023_25027);
n_25028.removeAttribute(cljs.core.name.call(null,name));


var G__25029 = seq__25020_25024;
var G__25030 = chunk__25021_25025;
var G__25031 = count__25022_25026;
var G__25032 = (i__25023_25027 + (1));
seq__25020_25024 = G__25029;
chunk__25021_25025 = G__25030;
count__25022_25026 = G__25031;
i__25023_25027 = G__25032;
continue;
} else {
var temp__5457__auto___25033 = cljs.core.seq.call(null,seq__25020_25024);
if(temp__5457__auto___25033){
var seq__25020_25034__$1 = temp__5457__auto___25033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25020_25034__$1)){
var c__4319__auto___25035 = cljs.core.chunk_first.call(null,seq__25020_25034__$1);
var G__25036 = cljs.core.chunk_rest.call(null,seq__25020_25034__$1);
var G__25037 = c__4319__auto___25035;
var G__25038 = cljs.core.count.call(null,c__4319__auto___25035);
var G__25039 = (0);
seq__25020_25024 = G__25036;
chunk__25021_25025 = G__25037;
count__25022_25026 = G__25038;
i__25023_25027 = G__25039;
continue;
} else {
var n_25040 = cljs.core.first.call(null,seq__25020_25034__$1);
n_25040.removeAttribute(cljs.core.name.call(null,name));


var G__25041 = cljs.core.next.call(null,seq__25020_25034__$1);
var G__25042 = null;
var G__25043 = (0);
var G__25044 = (0);
seq__25020_25024 = G__25041;
chunk__25021_25025 = G__25042;
count__25022_25026 = G__25043;
i__25023_25027 = G__25044;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__25045 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__25045,(0),null);
var v = cljs.core.nth.call(null,vec__25045,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = k;
if(cljs.core.truth_(and__3911__auto__)){
return v;
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__25048_SHARP_){
var attr = attrs.item(p1__25048_SHARP_);
var value = attr.nodeValue;
if(((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__25049_25059 = cljs.core.seq.call(null,styles);
var chunk__25050_25060 = null;
var count__25051_25061 = (0);
var i__25052_25062 = (0);
while(true){
if((i__25052_25062 < count__25051_25061)){
var vec__25053_25063 = cljs.core._nth.call(null,chunk__25050_25060,i__25052_25062);
var name_25064 = cljs.core.nth.call(null,vec__25053_25063,(0),null);
var value_25065 = cljs.core.nth.call(null,vec__25053_25063,(1),null);
domina.set_style_BANG_.call(null,content,name_25064,value_25065);


var G__25066 = seq__25049_25059;
var G__25067 = chunk__25050_25060;
var G__25068 = count__25051_25061;
var G__25069 = (i__25052_25062 + (1));
seq__25049_25059 = G__25066;
chunk__25050_25060 = G__25067;
count__25051_25061 = G__25068;
i__25052_25062 = G__25069;
continue;
} else {
var temp__5457__auto___25070 = cljs.core.seq.call(null,seq__25049_25059);
if(temp__5457__auto___25070){
var seq__25049_25071__$1 = temp__5457__auto___25070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25049_25071__$1)){
var c__4319__auto___25072 = cljs.core.chunk_first.call(null,seq__25049_25071__$1);
var G__25073 = cljs.core.chunk_rest.call(null,seq__25049_25071__$1);
var G__25074 = c__4319__auto___25072;
var G__25075 = cljs.core.count.call(null,c__4319__auto___25072);
var G__25076 = (0);
seq__25049_25059 = G__25073;
chunk__25050_25060 = G__25074;
count__25051_25061 = G__25075;
i__25052_25062 = G__25076;
continue;
} else {
var vec__25056_25077 = cljs.core.first.call(null,seq__25049_25071__$1);
var name_25078 = cljs.core.nth.call(null,vec__25056_25077,(0),null);
var value_25079 = cljs.core.nth.call(null,vec__25056_25077,(1),null);
domina.set_style_BANG_.call(null,content,name_25078,value_25079);


var G__25080 = cljs.core.next.call(null,seq__25049_25071__$1);
var G__25081 = null;
var G__25082 = (0);
var G__25083 = (0);
seq__25049_25059 = G__25080;
chunk__25050_25060 = G__25081;
count__25051_25061 = G__25082;
i__25052_25062 = G__25083;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__25084_25094 = cljs.core.seq.call(null,attrs);
var chunk__25085_25095 = null;
var count__25086_25096 = (0);
var i__25087_25097 = (0);
while(true){
if((i__25087_25097 < count__25086_25096)){
var vec__25088_25098 = cljs.core._nth.call(null,chunk__25085_25095,i__25087_25097);
var name_25099 = cljs.core.nth.call(null,vec__25088_25098,(0),null);
var value_25100 = cljs.core.nth.call(null,vec__25088_25098,(1),null);
domina.set_attr_BANG_.call(null,content,name_25099,value_25100);


var G__25101 = seq__25084_25094;
var G__25102 = chunk__25085_25095;
var G__25103 = count__25086_25096;
var G__25104 = (i__25087_25097 + (1));
seq__25084_25094 = G__25101;
chunk__25085_25095 = G__25102;
count__25086_25096 = G__25103;
i__25087_25097 = G__25104;
continue;
} else {
var temp__5457__auto___25105 = cljs.core.seq.call(null,seq__25084_25094);
if(temp__5457__auto___25105){
var seq__25084_25106__$1 = temp__5457__auto___25105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25084_25106__$1)){
var c__4319__auto___25107 = cljs.core.chunk_first.call(null,seq__25084_25106__$1);
var G__25108 = cljs.core.chunk_rest.call(null,seq__25084_25106__$1);
var G__25109 = c__4319__auto___25107;
var G__25110 = cljs.core.count.call(null,c__4319__auto___25107);
var G__25111 = (0);
seq__25084_25094 = G__25108;
chunk__25085_25095 = G__25109;
count__25086_25096 = G__25110;
i__25087_25097 = G__25111;
continue;
} else {
var vec__25091_25112 = cljs.core.first.call(null,seq__25084_25106__$1);
var name_25113 = cljs.core.nth.call(null,vec__25091_25112,(0),null);
var value_25114 = cljs.core.nth.call(null,vec__25091_25112,(1),null);
domina.set_attr_BANG_.call(null,content,name_25113,value_25114);


var G__25115 = cljs.core.next.call(null,seq__25084_25106__$1);
var G__25116 = null;
var G__25117 = (0);
var G__25118 = (0);
seq__25084_25094 = G__25115;
chunk__25085_25095 = G__25116;
count__25086_25096 = G__25117;
i__25087_25097 = G__25118;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__25119_25123 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25120_25124 = null;
var count__25121_25125 = (0);
var i__25122_25126 = (0);
while(true){
if((i__25122_25126 < count__25121_25125)){
var node_25127 = cljs.core._nth.call(null,chunk__25120_25124,i__25122_25126);
goog.dom.classes.add(node_25127,class$);


var G__25128 = seq__25119_25123;
var G__25129 = chunk__25120_25124;
var G__25130 = count__25121_25125;
var G__25131 = (i__25122_25126 + (1));
seq__25119_25123 = G__25128;
chunk__25120_25124 = G__25129;
count__25121_25125 = G__25130;
i__25122_25126 = G__25131;
continue;
} else {
var temp__5457__auto___25132 = cljs.core.seq.call(null,seq__25119_25123);
if(temp__5457__auto___25132){
var seq__25119_25133__$1 = temp__5457__auto___25132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25119_25133__$1)){
var c__4319__auto___25134 = cljs.core.chunk_first.call(null,seq__25119_25133__$1);
var G__25135 = cljs.core.chunk_rest.call(null,seq__25119_25133__$1);
var G__25136 = c__4319__auto___25134;
var G__25137 = cljs.core.count.call(null,c__4319__auto___25134);
var G__25138 = (0);
seq__25119_25123 = G__25135;
chunk__25120_25124 = G__25136;
count__25121_25125 = G__25137;
i__25122_25126 = G__25138;
continue;
} else {
var node_25139 = cljs.core.first.call(null,seq__25119_25133__$1);
goog.dom.classes.add(node_25139,class$);


var G__25140 = cljs.core.next.call(null,seq__25119_25133__$1);
var G__25141 = null;
var G__25142 = (0);
var G__25143 = (0);
seq__25119_25123 = G__25140;
chunk__25120_25124 = G__25141;
count__25121_25125 = G__25142;
i__25122_25126 = G__25143;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__25144_25148 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25145_25149 = null;
var count__25146_25150 = (0);
var i__25147_25151 = (0);
while(true){
if((i__25147_25151 < count__25146_25150)){
var node_25152 = cljs.core._nth.call(null,chunk__25145_25149,i__25147_25151);
goog.dom.classes.remove(node_25152,class$);


var G__25153 = seq__25144_25148;
var G__25154 = chunk__25145_25149;
var G__25155 = count__25146_25150;
var G__25156 = (i__25147_25151 + (1));
seq__25144_25148 = G__25153;
chunk__25145_25149 = G__25154;
count__25146_25150 = G__25155;
i__25147_25151 = G__25156;
continue;
} else {
var temp__5457__auto___25157 = cljs.core.seq.call(null,seq__25144_25148);
if(temp__5457__auto___25157){
var seq__25144_25158__$1 = temp__5457__auto___25157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25144_25158__$1)){
var c__4319__auto___25159 = cljs.core.chunk_first.call(null,seq__25144_25158__$1);
var G__25160 = cljs.core.chunk_rest.call(null,seq__25144_25158__$1);
var G__25161 = c__4319__auto___25159;
var G__25162 = cljs.core.count.call(null,c__4319__auto___25159);
var G__25163 = (0);
seq__25144_25148 = G__25160;
chunk__25145_25149 = G__25161;
count__25146_25150 = G__25162;
i__25147_25151 = G__25163;
continue;
} else {
var node_25164 = cljs.core.first.call(null,seq__25144_25158__$1);
goog.dom.classes.remove(node_25164,class$);


var G__25165 = cljs.core.next.call(null,seq__25144_25158__$1);
var G__25166 = null;
var G__25167 = (0);
var G__25168 = (0);
seq__25144_25148 = G__25165;
chunk__25145_25149 = G__25166;
count__25146_25150 = G__25167;
i__25147_25151 = G__25168;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__25169_25173 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25170_25174 = null;
var count__25171_25175 = (0);
var i__25172_25176 = (0);
while(true){
if((i__25172_25176 < count__25171_25175)){
var node_25177 = cljs.core._nth.call(null,chunk__25170_25174,i__25172_25176);
goog.dom.classes.toggle(node_25177,class$);


var G__25178 = seq__25169_25173;
var G__25179 = chunk__25170_25174;
var G__25180 = count__25171_25175;
var G__25181 = (i__25172_25176 + (1));
seq__25169_25173 = G__25178;
chunk__25170_25174 = G__25179;
count__25171_25175 = G__25180;
i__25172_25176 = G__25181;
continue;
} else {
var temp__5457__auto___25182 = cljs.core.seq.call(null,seq__25169_25173);
if(temp__5457__auto___25182){
var seq__25169_25183__$1 = temp__5457__auto___25182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25169_25183__$1)){
var c__4319__auto___25184 = cljs.core.chunk_first.call(null,seq__25169_25183__$1);
var G__25185 = cljs.core.chunk_rest.call(null,seq__25169_25183__$1);
var G__25186 = c__4319__auto___25184;
var G__25187 = cljs.core.count.call(null,c__4319__auto___25184);
var G__25188 = (0);
seq__25169_25173 = G__25185;
chunk__25170_25174 = G__25186;
count__25171_25175 = G__25187;
i__25172_25176 = G__25188;
continue;
} else {
var node_25189 = cljs.core.first.call(null,seq__25169_25183__$1);
goog.dom.classes.toggle(node_25189,class$);


var G__25190 = cljs.core.next.call(null,seq__25169_25183__$1);
var G__25191 = null;
var G__25192 = (0);
var G__25193 = (0);
seq__25169_25173 = G__25190;
chunk__25170_25174 = G__25191;
count__25171_25175 = G__25192;
i__25172_25176 = G__25193;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_25198__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__25194_25199 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25195_25200 = null;
var count__25196_25201 = (0);
var i__25197_25202 = (0);
while(true){
if((i__25197_25202 < count__25196_25201)){
var node_25203 = cljs.core._nth.call(null,chunk__25195_25200,i__25197_25202);
goog.dom.classes.set(node_25203,classes_25198__$1);


var G__25204 = seq__25194_25199;
var G__25205 = chunk__25195_25200;
var G__25206 = count__25196_25201;
var G__25207 = (i__25197_25202 + (1));
seq__25194_25199 = G__25204;
chunk__25195_25200 = G__25205;
count__25196_25201 = G__25206;
i__25197_25202 = G__25207;
continue;
} else {
var temp__5457__auto___25208 = cljs.core.seq.call(null,seq__25194_25199);
if(temp__5457__auto___25208){
var seq__25194_25209__$1 = temp__5457__auto___25208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25194_25209__$1)){
var c__4319__auto___25210 = cljs.core.chunk_first.call(null,seq__25194_25209__$1);
var G__25211 = cljs.core.chunk_rest.call(null,seq__25194_25209__$1);
var G__25212 = c__4319__auto___25210;
var G__25213 = cljs.core.count.call(null,c__4319__auto___25210);
var G__25214 = (0);
seq__25194_25199 = G__25211;
chunk__25195_25200 = G__25212;
count__25196_25201 = G__25213;
i__25197_25202 = G__25214;
continue;
} else {
var node_25215 = cljs.core.first.call(null,seq__25194_25209__$1);
goog.dom.classes.set(node_25215,classes_25198__$1);


var G__25216 = cljs.core.next.call(null,seq__25194_25209__$1);
var G__25217 = null;
var G__25218 = (0);
var G__25219 = (0);
seq__25194_25199 = G__25216;
chunk__25195_25200 = G__25217;
count__25196_25201 = G__25218;
i__25197_25202 = G__25219;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__25220_25224 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25221_25225 = null;
var count__25222_25226 = (0);
var i__25223_25227 = (0);
while(true){
if((i__25223_25227 < count__25222_25226)){
var node_25228 = cljs.core._nth.call(null,chunk__25221_25225,i__25223_25227);
goog.dom.setTextContent(node_25228,value);


var G__25229 = seq__25220_25224;
var G__25230 = chunk__25221_25225;
var G__25231 = count__25222_25226;
var G__25232 = (i__25223_25227 + (1));
seq__25220_25224 = G__25229;
chunk__25221_25225 = G__25230;
count__25222_25226 = G__25231;
i__25223_25227 = G__25232;
continue;
} else {
var temp__5457__auto___25233 = cljs.core.seq.call(null,seq__25220_25224);
if(temp__5457__auto___25233){
var seq__25220_25234__$1 = temp__5457__auto___25233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25220_25234__$1)){
var c__4319__auto___25235 = cljs.core.chunk_first.call(null,seq__25220_25234__$1);
var G__25236 = cljs.core.chunk_rest.call(null,seq__25220_25234__$1);
var G__25237 = c__4319__auto___25235;
var G__25238 = cljs.core.count.call(null,c__4319__auto___25235);
var G__25239 = (0);
seq__25220_25224 = G__25236;
chunk__25221_25225 = G__25237;
count__25222_25226 = G__25238;
i__25223_25227 = G__25239;
continue;
} else {
var node_25240 = cljs.core.first.call(null,seq__25220_25234__$1);
goog.dom.setTextContent(node_25240,value);


var G__25241 = cljs.core.next.call(null,seq__25220_25234__$1);
var G__25242 = null;
var G__25243 = (0);
var G__25244 = (0);
seq__25220_25224 = G__25241;
chunk__25221_25225 = G__25242;
count__25222_25226 = G__25243;
i__25223_25227 = G__25244;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__25245_25249 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25246_25250 = null;
var count__25247_25251 = (0);
var i__25248_25252 = (0);
while(true){
if((i__25248_25252 < count__25247_25251)){
var node_25253 = cljs.core._nth.call(null,chunk__25246_25250,i__25248_25252);
goog.dom.forms.setValue(node_25253,value);


var G__25254 = seq__25245_25249;
var G__25255 = chunk__25246_25250;
var G__25256 = count__25247_25251;
var G__25257 = (i__25248_25252 + (1));
seq__25245_25249 = G__25254;
chunk__25246_25250 = G__25255;
count__25247_25251 = G__25256;
i__25248_25252 = G__25257;
continue;
} else {
var temp__5457__auto___25258 = cljs.core.seq.call(null,seq__25245_25249);
if(temp__5457__auto___25258){
var seq__25245_25259__$1 = temp__5457__auto___25258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25245_25259__$1)){
var c__4319__auto___25260 = cljs.core.chunk_first.call(null,seq__25245_25259__$1);
var G__25261 = cljs.core.chunk_rest.call(null,seq__25245_25259__$1);
var G__25262 = c__4319__auto___25260;
var G__25263 = cljs.core.count.call(null,c__4319__auto___25260);
var G__25264 = (0);
seq__25245_25249 = G__25261;
chunk__25246_25250 = G__25262;
count__25247_25251 = G__25263;
i__25248_25252 = G__25264;
continue;
} else {
var node_25265 = cljs.core.first.call(null,seq__25245_25259__$1);
goog.dom.forms.setValue(node_25265,value);


var G__25266 = cljs.core.next.call(null,seq__25245_25259__$1);
var G__25267 = null;
var G__25268 = (0);
var G__25269 = (0);
seq__25245_25249 = G__25266;
chunk__25246_25250 = G__25267;
count__25247_25251 = G__25268;
i__25248_25252 = G__25269;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(((allows_inner_html_QMARK_) && (((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_)))) && (!(special_tag_QMARK_)))){
var value_25275 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__25271_25276 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__25272_25277 = null;
var count__25273_25278 = (0);
var i__25274_25279 = (0);
while(true){
if((i__25274_25279 < count__25273_25278)){
var node_25280 = cljs.core._nth.call(null,chunk__25272_25277,i__25274_25279);
node_25280.innerHTML = value_25275;


var G__25281 = seq__25271_25276;
var G__25282 = chunk__25272_25277;
var G__25283 = count__25273_25278;
var G__25284 = (i__25274_25279 + (1));
seq__25271_25276 = G__25281;
chunk__25272_25277 = G__25282;
count__25273_25278 = G__25283;
i__25274_25279 = G__25284;
continue;
} else {
var temp__5457__auto___25285 = cljs.core.seq.call(null,seq__25271_25276);
if(temp__5457__auto___25285){
var seq__25271_25286__$1 = temp__5457__auto___25285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25271_25286__$1)){
var c__4319__auto___25287 = cljs.core.chunk_first.call(null,seq__25271_25286__$1);
var G__25288 = cljs.core.chunk_rest.call(null,seq__25271_25286__$1);
var G__25289 = c__4319__auto___25287;
var G__25290 = cljs.core.count.call(null,c__4319__auto___25287);
var G__25291 = (0);
seq__25271_25276 = G__25288;
chunk__25272_25277 = G__25289;
count__25273_25278 = G__25290;
i__25274_25279 = G__25291;
continue;
} else {
var node_25292 = cljs.core.first.call(null,seq__25271_25286__$1);
node_25292.innerHTML = value_25275;


var G__25293 = cljs.core.next.call(null,seq__25271_25286__$1);
var G__25294 = null;
var G__25295 = (0);
var G__25296 = (0);
seq__25271_25276 = G__25293;
chunk__25272_25277 = G__25294;
count__25273_25278 = G__25295;
i__25274_25279 = G__25296;
continue;
}
} else {
}
}
break;
}
}catch (e25270){if((e25270 instanceof Error)){
var e_25297 = e25270;
domina.replace_children_BANG_.call(null,content,value_25275);
} else {
throw e25270;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__25299 = arguments.length;
switch (G__25299) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3911__auto__ = bubble;
if(cljs.core.truth_(and__3911__auto__)){
return (value == null);
} else {
return and__3911__auto__;
}
})())){
var temp__5457__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__3922__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__25303_25307 = cljs.core.seq.call(null,children);
var chunk__25304_25308 = null;
var count__25305_25309 = (0);
var i__25306_25310 = (0);
while(true){
if((i__25306_25310 < count__25305_25309)){
var child_25311 = cljs.core._nth.call(null,chunk__25304_25308,i__25306_25310);
frag.appendChild(child_25311);


var G__25312 = seq__25303_25307;
var G__25313 = chunk__25304_25308;
var G__25314 = count__25305_25309;
var G__25315 = (i__25306_25310 + (1));
seq__25303_25307 = G__25312;
chunk__25304_25308 = G__25313;
count__25305_25309 = G__25314;
i__25306_25310 = G__25315;
continue;
} else {
var temp__5457__auto___25316 = cljs.core.seq.call(null,seq__25303_25307);
if(temp__5457__auto___25316){
var seq__25303_25317__$1 = temp__5457__auto___25316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25303_25317__$1)){
var c__4319__auto___25318 = cljs.core.chunk_first.call(null,seq__25303_25317__$1);
var G__25319 = cljs.core.chunk_rest.call(null,seq__25303_25317__$1);
var G__25320 = c__4319__auto___25318;
var G__25321 = cljs.core.count.call(null,c__4319__auto___25318);
var G__25322 = (0);
seq__25303_25307 = G__25319;
chunk__25304_25308 = G__25320;
count__25305_25309 = G__25321;
i__25306_25310 = G__25322;
continue;
} else {
var child_25323 = cljs.core.first.call(null,seq__25303_25317__$1);
frag.appendChild(child_25323);


var G__25324 = cljs.core.next.call(null,seq__25303_25317__$1);
var G__25325 = null;
var G__25326 = (0);
var G__25327 = (0);
seq__25303_25307 = G__25324;
chunk__25304_25308 = G__25325;
count__25305_25309 = G__25326;
i__25306_25310 = G__25327;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__25301_SHARP_,p2__25302_SHARP_){
return f.call(null,p1__25301_SHARP_,p2__25302_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__25329 = arguments.length;
switch (G__25329) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__25332 = arguments.length;
switch (G__25332) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__3911__auto__ = obj;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3911__auto____$1){
return obj.length;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?(((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$))))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.DomContent,"string",true);

goog.object.set(domina.nodes,"string",(function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

goog.object.set(domina.single_node,"string",(function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

goog.object.set(domina.DomContent,"_",true);

goog.object.set(domina.nodes,"_",(function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

goog.object.set(domina.single_node,"_",(function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1528121916235
