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
var opt_wrapper_22904 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_22905 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_22906 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_22906,opt_wrapper_22904,table_section_wrapper_22905,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_22904,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_22905,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_22905,cell_wrapper_22906,table_section_wrapper_22905,table_section_wrapper_22905]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__3911__auto__ = div.firstChild;
if(cljs.core.truth_(and__3911__auto__)){
return div.firstChild.childNodes;
} else {
return and__3911__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__22907 = cljs.core.seq.call(null,tbody);
var chunk__22908 = null;
var count__22909 = (0);
var i__22910 = (0);
while(true){
if((i__22910 < count__22909)){
var child = cljs.core._nth.call(null,chunk__22908,i__22910);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__22911 = seq__22907;
var G__22912 = chunk__22908;
var G__22913 = count__22909;
var G__22914 = (i__22910 + (1));
seq__22907 = G__22911;
chunk__22908 = G__22912;
count__22909 = G__22913;
i__22910 = G__22914;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22907);
if(temp__5457__auto__){
var seq__22907__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22907__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22907__$1);
var G__22915 = cljs.core.chunk_rest.call(null,seq__22907__$1);
var G__22916 = c__4319__auto__;
var G__22917 = cljs.core.count.call(null,c__4319__auto__);
var G__22918 = (0);
seq__22907 = G__22915;
chunk__22908 = G__22916;
count__22909 = G__22917;
i__22910 = G__22918;
continue;
} else {
var child = cljs.core.first.call(null,seq__22907__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__22919 = cljs.core.next.call(null,seq__22907__$1);
var G__22920 = null;
var G__22921 = (0);
var G__22922 = (0);
seq__22907 = G__22919;
chunk__22908 = G__22920;
count__22909 = G__22921;
i__22910 = G__22922;
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
var vec__22923 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__22923,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__22923,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__22923,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__22926 = wrapper.lastChild;
var G__22927 = (level - (1));
wrapper = G__22926;
level = G__22927;
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
var len__4499__auto___22929 = arguments.length;
var i__4500__auto___22930 = (0);
while(true){
if((i__4500__auto___22930 < len__4499__auto___22929)){
args__4502__auto__.push((arguments[i__4500__auto___22930]));

var G__22931 = (i__4500__auto___22930 + (1));
i__4500__auto___22930 = G__22931;
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
domina.log_debug.cljs$lang$applyTo = (function (seq22928){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22928));
});

domina.log = (function domina$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22933 = arguments.length;
var i__4500__auto___22934 = (0);
while(true){
if((i__4500__auto___22934 < len__4499__auto___22933)){
args__4502__auto__.push((arguments[i__4500__auto___22934]));

var G__22935 = (i__4500__auto___22934 + (1));
i__4500__auto___22934 = G__22935;
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
domina.log.cljs$lang$applyTo = (function (seq22932){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22932));
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
var len__4499__auto___22937 = arguments.length;
var i__4500__auto___22938 = (0);
while(true){
if((i__4500__auto___22938 < len__4499__auto___22937)){
args__4502__auto__.push((arguments[i__4500__auto___22938]));

var G__22939 = (i__4500__auto___22938 + (1));
i__4500__auto___22938 = G__22939;
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
domina.common_ancestor.cljs$lang$applyTo = (function (seq22936){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22936));
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
return cljs.core.map.call(null,(function (p1__22940_SHARP_){
return p1__22940_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__22941_SHARP_,p2__22942_SHARP_){
return goog.dom.insertChildAt(p1__22941_SHARP_,p2__22942_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__22944_SHARP_,p2__22943_SHARP_){
return goog.dom.insertSiblingBefore(p2__22943_SHARP_,p1__22944_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22946_SHARP_,p2__22945_SHARP_){
return goog.dom.insertSiblingAfter(p2__22945_SHARP_,p1__22946_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22948_SHARP_,p2__22947_SHARP_){
return goog.dom.replaceNode(p2__22947_SHARP_,p1__22948_SHARP_);
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
var len__4499__auto___22956 = arguments.length;
var i__4500__auto___22957 = (0);
while(true){
if((i__4500__auto___22957 < len__4499__auto___22956)){
args__4502__auto__.push((arguments[i__4500__auto___22957]));

var G__22958 = (i__4500__auto___22957 + (1));
i__4500__auto___22957 = G__22958;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22952_22959 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22953_22960 = null;
var count__22954_22961 = (0);
var i__22955_22962 = (0);
while(true){
if((i__22955_22962 < count__22954_22961)){
var n_22963 = cljs.core._nth.call(null,chunk__22953_22960,i__22955_22962);
goog.style.setStyle(n_22963,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22964 = seq__22952_22959;
var G__22965 = chunk__22953_22960;
var G__22966 = count__22954_22961;
var G__22967 = (i__22955_22962 + (1));
seq__22952_22959 = G__22964;
chunk__22953_22960 = G__22965;
count__22954_22961 = G__22966;
i__22955_22962 = G__22967;
continue;
} else {
var temp__5457__auto___22968 = cljs.core.seq.call(null,seq__22952_22959);
if(temp__5457__auto___22968){
var seq__22952_22969__$1 = temp__5457__auto___22968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22952_22969__$1)){
var c__4319__auto___22970 = cljs.core.chunk_first.call(null,seq__22952_22969__$1);
var G__22971 = cljs.core.chunk_rest.call(null,seq__22952_22969__$1);
var G__22972 = c__4319__auto___22970;
var G__22973 = cljs.core.count.call(null,c__4319__auto___22970);
var G__22974 = (0);
seq__22952_22959 = G__22971;
chunk__22953_22960 = G__22972;
count__22954_22961 = G__22973;
i__22955_22962 = G__22974;
continue;
} else {
var n_22975 = cljs.core.first.call(null,seq__22952_22969__$1);
goog.style.setStyle(n_22975,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22976 = cljs.core.next.call(null,seq__22952_22969__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22952_22959 = G__22976;
chunk__22953_22960 = G__22977;
count__22954_22961 = G__22978;
i__22955_22962 = G__22979;
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
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq22949){
var G__22950 = cljs.core.first.call(null,seq22949);
var seq22949__$1 = cljs.core.next.call(null,seq22949);
var G__22951 = cljs.core.first.call(null,seq22949__$1);
var seq22949__$2 = cljs.core.next.call(null,seq22949__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22950,G__22951,seq22949__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22987 = arguments.length;
var i__4500__auto___22988 = (0);
while(true){
if((i__4500__auto___22988 < len__4499__auto___22987)){
args__4502__auto__.push((arguments[i__4500__auto___22988]));

var G__22989 = (i__4500__auto___22988 + (1));
i__4500__auto___22988 = G__22989;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__22983_22990 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22984_22991 = null;
var count__22985_22992 = (0);
var i__22986_22993 = (0);
while(true){
if((i__22986_22993 < count__22985_22992)){
var n_22994 = cljs.core._nth.call(null,chunk__22984_22991,i__22986_22993);
n_22994.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__22995 = seq__22983_22990;
var G__22996 = chunk__22984_22991;
var G__22997 = count__22985_22992;
var G__22998 = (i__22986_22993 + (1));
seq__22983_22990 = G__22995;
chunk__22984_22991 = G__22996;
count__22985_22992 = G__22997;
i__22986_22993 = G__22998;
continue;
} else {
var temp__5457__auto___22999 = cljs.core.seq.call(null,seq__22983_22990);
if(temp__5457__auto___22999){
var seq__22983_23000__$1 = temp__5457__auto___22999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22983_23000__$1)){
var c__4319__auto___23001 = cljs.core.chunk_first.call(null,seq__22983_23000__$1);
var G__23002 = cljs.core.chunk_rest.call(null,seq__22983_23000__$1);
var G__23003 = c__4319__auto___23001;
var G__23004 = cljs.core.count.call(null,c__4319__auto___23001);
var G__23005 = (0);
seq__22983_22990 = G__23002;
chunk__22984_22991 = G__23003;
count__22985_22992 = G__23004;
i__22986_22993 = G__23005;
continue;
} else {
var n_23006 = cljs.core.first.call(null,seq__22983_23000__$1);
n_23006.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__23007 = cljs.core.next.call(null,seq__22983_23000__$1);
var G__23008 = null;
var G__23009 = (0);
var G__23010 = (0);
seq__22983_22990 = G__23007;
chunk__22984_22991 = G__23008;
count__22985_22992 = G__23009;
i__22986_22993 = G__23010;
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
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq22980){
var G__22981 = cljs.core.first.call(null,seq22980);
var seq22980__$1 = cljs.core.next.call(null,seq22980);
var G__22982 = cljs.core.first.call(null,seq22980__$1);
var seq22980__$2 = cljs.core.next.call(null,seq22980__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22981,G__22982,seq22980__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__23011_23015 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23012_23016 = null;
var count__23013_23017 = (0);
var i__23014_23018 = (0);
while(true){
if((i__23014_23018 < count__23013_23017)){
var n_23019 = cljs.core._nth.call(null,chunk__23012_23016,i__23014_23018);
n_23019.removeAttribute(cljs.core.name.call(null,name));


var G__23020 = seq__23011_23015;
var G__23021 = chunk__23012_23016;
var G__23022 = count__23013_23017;
var G__23023 = (i__23014_23018 + (1));
seq__23011_23015 = G__23020;
chunk__23012_23016 = G__23021;
count__23013_23017 = G__23022;
i__23014_23018 = G__23023;
continue;
} else {
var temp__5457__auto___23024 = cljs.core.seq.call(null,seq__23011_23015);
if(temp__5457__auto___23024){
var seq__23011_23025__$1 = temp__5457__auto___23024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23011_23025__$1)){
var c__4319__auto___23026 = cljs.core.chunk_first.call(null,seq__23011_23025__$1);
var G__23027 = cljs.core.chunk_rest.call(null,seq__23011_23025__$1);
var G__23028 = c__4319__auto___23026;
var G__23029 = cljs.core.count.call(null,c__4319__auto___23026);
var G__23030 = (0);
seq__23011_23015 = G__23027;
chunk__23012_23016 = G__23028;
count__23013_23017 = G__23029;
i__23014_23018 = G__23030;
continue;
} else {
var n_23031 = cljs.core.first.call(null,seq__23011_23025__$1);
n_23031.removeAttribute(cljs.core.name.call(null,name));


var G__23032 = cljs.core.next.call(null,seq__23011_23025__$1);
var G__23033 = null;
var G__23034 = (0);
var G__23035 = (0);
seq__23011_23015 = G__23032;
chunk__23012_23016 = G__23033;
count__23013_23017 = G__23034;
i__23014_23018 = G__23035;
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
var vec__23036 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__23036,(0),null);
var v = cljs.core.nth.call(null,vec__23036,(1),null);
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
return (function (p1__23039_SHARP_){
var attr = attrs.item(p1__23039_SHARP_);
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
var seq__23040_23050 = cljs.core.seq.call(null,styles);
var chunk__23041_23051 = null;
var count__23042_23052 = (0);
var i__23043_23053 = (0);
while(true){
if((i__23043_23053 < count__23042_23052)){
var vec__23044_23054 = cljs.core._nth.call(null,chunk__23041_23051,i__23043_23053);
var name_23055 = cljs.core.nth.call(null,vec__23044_23054,(0),null);
var value_23056 = cljs.core.nth.call(null,vec__23044_23054,(1),null);
domina.set_style_BANG_.call(null,content,name_23055,value_23056);


var G__23057 = seq__23040_23050;
var G__23058 = chunk__23041_23051;
var G__23059 = count__23042_23052;
var G__23060 = (i__23043_23053 + (1));
seq__23040_23050 = G__23057;
chunk__23041_23051 = G__23058;
count__23042_23052 = G__23059;
i__23043_23053 = G__23060;
continue;
} else {
var temp__5457__auto___23061 = cljs.core.seq.call(null,seq__23040_23050);
if(temp__5457__auto___23061){
var seq__23040_23062__$1 = temp__5457__auto___23061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23040_23062__$1)){
var c__4319__auto___23063 = cljs.core.chunk_first.call(null,seq__23040_23062__$1);
var G__23064 = cljs.core.chunk_rest.call(null,seq__23040_23062__$1);
var G__23065 = c__4319__auto___23063;
var G__23066 = cljs.core.count.call(null,c__4319__auto___23063);
var G__23067 = (0);
seq__23040_23050 = G__23064;
chunk__23041_23051 = G__23065;
count__23042_23052 = G__23066;
i__23043_23053 = G__23067;
continue;
} else {
var vec__23047_23068 = cljs.core.first.call(null,seq__23040_23062__$1);
var name_23069 = cljs.core.nth.call(null,vec__23047_23068,(0),null);
var value_23070 = cljs.core.nth.call(null,vec__23047_23068,(1),null);
domina.set_style_BANG_.call(null,content,name_23069,value_23070);


var G__23071 = cljs.core.next.call(null,seq__23040_23062__$1);
var G__23072 = null;
var G__23073 = (0);
var G__23074 = (0);
seq__23040_23050 = G__23071;
chunk__23041_23051 = G__23072;
count__23042_23052 = G__23073;
i__23043_23053 = G__23074;
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
var seq__23075_23085 = cljs.core.seq.call(null,attrs);
var chunk__23076_23086 = null;
var count__23077_23087 = (0);
var i__23078_23088 = (0);
while(true){
if((i__23078_23088 < count__23077_23087)){
var vec__23079_23089 = cljs.core._nth.call(null,chunk__23076_23086,i__23078_23088);
var name_23090 = cljs.core.nth.call(null,vec__23079_23089,(0),null);
var value_23091 = cljs.core.nth.call(null,vec__23079_23089,(1),null);
domina.set_attr_BANG_.call(null,content,name_23090,value_23091);


var G__23092 = seq__23075_23085;
var G__23093 = chunk__23076_23086;
var G__23094 = count__23077_23087;
var G__23095 = (i__23078_23088 + (1));
seq__23075_23085 = G__23092;
chunk__23076_23086 = G__23093;
count__23077_23087 = G__23094;
i__23078_23088 = G__23095;
continue;
} else {
var temp__5457__auto___23096 = cljs.core.seq.call(null,seq__23075_23085);
if(temp__5457__auto___23096){
var seq__23075_23097__$1 = temp__5457__auto___23096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23075_23097__$1)){
var c__4319__auto___23098 = cljs.core.chunk_first.call(null,seq__23075_23097__$1);
var G__23099 = cljs.core.chunk_rest.call(null,seq__23075_23097__$1);
var G__23100 = c__4319__auto___23098;
var G__23101 = cljs.core.count.call(null,c__4319__auto___23098);
var G__23102 = (0);
seq__23075_23085 = G__23099;
chunk__23076_23086 = G__23100;
count__23077_23087 = G__23101;
i__23078_23088 = G__23102;
continue;
} else {
var vec__23082_23103 = cljs.core.first.call(null,seq__23075_23097__$1);
var name_23104 = cljs.core.nth.call(null,vec__23082_23103,(0),null);
var value_23105 = cljs.core.nth.call(null,vec__23082_23103,(1),null);
domina.set_attr_BANG_.call(null,content,name_23104,value_23105);


var G__23106 = cljs.core.next.call(null,seq__23075_23097__$1);
var G__23107 = null;
var G__23108 = (0);
var G__23109 = (0);
seq__23075_23085 = G__23106;
chunk__23076_23086 = G__23107;
count__23077_23087 = G__23108;
i__23078_23088 = G__23109;
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
var seq__23110_23114 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23111_23115 = null;
var count__23112_23116 = (0);
var i__23113_23117 = (0);
while(true){
if((i__23113_23117 < count__23112_23116)){
var node_23118 = cljs.core._nth.call(null,chunk__23111_23115,i__23113_23117);
goog.dom.classes.add(node_23118,class$);


var G__23119 = seq__23110_23114;
var G__23120 = chunk__23111_23115;
var G__23121 = count__23112_23116;
var G__23122 = (i__23113_23117 + (1));
seq__23110_23114 = G__23119;
chunk__23111_23115 = G__23120;
count__23112_23116 = G__23121;
i__23113_23117 = G__23122;
continue;
} else {
var temp__5457__auto___23123 = cljs.core.seq.call(null,seq__23110_23114);
if(temp__5457__auto___23123){
var seq__23110_23124__$1 = temp__5457__auto___23123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23110_23124__$1)){
var c__4319__auto___23125 = cljs.core.chunk_first.call(null,seq__23110_23124__$1);
var G__23126 = cljs.core.chunk_rest.call(null,seq__23110_23124__$1);
var G__23127 = c__4319__auto___23125;
var G__23128 = cljs.core.count.call(null,c__4319__auto___23125);
var G__23129 = (0);
seq__23110_23114 = G__23126;
chunk__23111_23115 = G__23127;
count__23112_23116 = G__23128;
i__23113_23117 = G__23129;
continue;
} else {
var node_23130 = cljs.core.first.call(null,seq__23110_23124__$1);
goog.dom.classes.add(node_23130,class$);


var G__23131 = cljs.core.next.call(null,seq__23110_23124__$1);
var G__23132 = null;
var G__23133 = (0);
var G__23134 = (0);
seq__23110_23114 = G__23131;
chunk__23111_23115 = G__23132;
count__23112_23116 = G__23133;
i__23113_23117 = G__23134;
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
var seq__23135_23139 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23136_23140 = null;
var count__23137_23141 = (0);
var i__23138_23142 = (0);
while(true){
if((i__23138_23142 < count__23137_23141)){
var node_23143 = cljs.core._nth.call(null,chunk__23136_23140,i__23138_23142);
goog.dom.classes.remove(node_23143,class$);


var G__23144 = seq__23135_23139;
var G__23145 = chunk__23136_23140;
var G__23146 = count__23137_23141;
var G__23147 = (i__23138_23142 + (1));
seq__23135_23139 = G__23144;
chunk__23136_23140 = G__23145;
count__23137_23141 = G__23146;
i__23138_23142 = G__23147;
continue;
} else {
var temp__5457__auto___23148 = cljs.core.seq.call(null,seq__23135_23139);
if(temp__5457__auto___23148){
var seq__23135_23149__$1 = temp__5457__auto___23148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23135_23149__$1)){
var c__4319__auto___23150 = cljs.core.chunk_first.call(null,seq__23135_23149__$1);
var G__23151 = cljs.core.chunk_rest.call(null,seq__23135_23149__$1);
var G__23152 = c__4319__auto___23150;
var G__23153 = cljs.core.count.call(null,c__4319__auto___23150);
var G__23154 = (0);
seq__23135_23139 = G__23151;
chunk__23136_23140 = G__23152;
count__23137_23141 = G__23153;
i__23138_23142 = G__23154;
continue;
} else {
var node_23155 = cljs.core.first.call(null,seq__23135_23149__$1);
goog.dom.classes.remove(node_23155,class$);


var G__23156 = cljs.core.next.call(null,seq__23135_23149__$1);
var G__23157 = null;
var G__23158 = (0);
var G__23159 = (0);
seq__23135_23139 = G__23156;
chunk__23136_23140 = G__23157;
count__23137_23141 = G__23158;
i__23138_23142 = G__23159;
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
var seq__23160_23164 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23161_23165 = null;
var count__23162_23166 = (0);
var i__23163_23167 = (0);
while(true){
if((i__23163_23167 < count__23162_23166)){
var node_23168 = cljs.core._nth.call(null,chunk__23161_23165,i__23163_23167);
goog.dom.classes.toggle(node_23168,class$);


var G__23169 = seq__23160_23164;
var G__23170 = chunk__23161_23165;
var G__23171 = count__23162_23166;
var G__23172 = (i__23163_23167 + (1));
seq__23160_23164 = G__23169;
chunk__23161_23165 = G__23170;
count__23162_23166 = G__23171;
i__23163_23167 = G__23172;
continue;
} else {
var temp__5457__auto___23173 = cljs.core.seq.call(null,seq__23160_23164);
if(temp__5457__auto___23173){
var seq__23160_23174__$1 = temp__5457__auto___23173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23160_23174__$1)){
var c__4319__auto___23175 = cljs.core.chunk_first.call(null,seq__23160_23174__$1);
var G__23176 = cljs.core.chunk_rest.call(null,seq__23160_23174__$1);
var G__23177 = c__4319__auto___23175;
var G__23178 = cljs.core.count.call(null,c__4319__auto___23175);
var G__23179 = (0);
seq__23160_23164 = G__23176;
chunk__23161_23165 = G__23177;
count__23162_23166 = G__23178;
i__23163_23167 = G__23179;
continue;
} else {
var node_23180 = cljs.core.first.call(null,seq__23160_23174__$1);
goog.dom.classes.toggle(node_23180,class$);


var G__23181 = cljs.core.next.call(null,seq__23160_23174__$1);
var G__23182 = null;
var G__23183 = (0);
var G__23184 = (0);
seq__23160_23164 = G__23181;
chunk__23161_23165 = G__23182;
count__23162_23166 = G__23183;
i__23163_23167 = G__23184;
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
var classes_23189__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__23185_23190 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23186_23191 = null;
var count__23187_23192 = (0);
var i__23188_23193 = (0);
while(true){
if((i__23188_23193 < count__23187_23192)){
var node_23194 = cljs.core._nth.call(null,chunk__23186_23191,i__23188_23193);
goog.dom.classes.set(node_23194,classes_23189__$1);


var G__23195 = seq__23185_23190;
var G__23196 = chunk__23186_23191;
var G__23197 = count__23187_23192;
var G__23198 = (i__23188_23193 + (1));
seq__23185_23190 = G__23195;
chunk__23186_23191 = G__23196;
count__23187_23192 = G__23197;
i__23188_23193 = G__23198;
continue;
} else {
var temp__5457__auto___23199 = cljs.core.seq.call(null,seq__23185_23190);
if(temp__5457__auto___23199){
var seq__23185_23200__$1 = temp__5457__auto___23199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23185_23200__$1)){
var c__4319__auto___23201 = cljs.core.chunk_first.call(null,seq__23185_23200__$1);
var G__23202 = cljs.core.chunk_rest.call(null,seq__23185_23200__$1);
var G__23203 = c__4319__auto___23201;
var G__23204 = cljs.core.count.call(null,c__4319__auto___23201);
var G__23205 = (0);
seq__23185_23190 = G__23202;
chunk__23186_23191 = G__23203;
count__23187_23192 = G__23204;
i__23188_23193 = G__23205;
continue;
} else {
var node_23206 = cljs.core.first.call(null,seq__23185_23200__$1);
goog.dom.classes.set(node_23206,classes_23189__$1);


var G__23207 = cljs.core.next.call(null,seq__23185_23200__$1);
var G__23208 = null;
var G__23209 = (0);
var G__23210 = (0);
seq__23185_23190 = G__23207;
chunk__23186_23191 = G__23208;
count__23187_23192 = G__23209;
i__23188_23193 = G__23210;
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
var seq__23211_23215 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23212_23216 = null;
var count__23213_23217 = (0);
var i__23214_23218 = (0);
while(true){
if((i__23214_23218 < count__23213_23217)){
var node_23219 = cljs.core._nth.call(null,chunk__23212_23216,i__23214_23218);
goog.dom.setTextContent(node_23219,value);


var G__23220 = seq__23211_23215;
var G__23221 = chunk__23212_23216;
var G__23222 = count__23213_23217;
var G__23223 = (i__23214_23218 + (1));
seq__23211_23215 = G__23220;
chunk__23212_23216 = G__23221;
count__23213_23217 = G__23222;
i__23214_23218 = G__23223;
continue;
} else {
var temp__5457__auto___23224 = cljs.core.seq.call(null,seq__23211_23215);
if(temp__5457__auto___23224){
var seq__23211_23225__$1 = temp__5457__auto___23224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23211_23225__$1)){
var c__4319__auto___23226 = cljs.core.chunk_first.call(null,seq__23211_23225__$1);
var G__23227 = cljs.core.chunk_rest.call(null,seq__23211_23225__$1);
var G__23228 = c__4319__auto___23226;
var G__23229 = cljs.core.count.call(null,c__4319__auto___23226);
var G__23230 = (0);
seq__23211_23215 = G__23227;
chunk__23212_23216 = G__23228;
count__23213_23217 = G__23229;
i__23214_23218 = G__23230;
continue;
} else {
var node_23231 = cljs.core.first.call(null,seq__23211_23225__$1);
goog.dom.setTextContent(node_23231,value);


var G__23232 = cljs.core.next.call(null,seq__23211_23225__$1);
var G__23233 = null;
var G__23234 = (0);
var G__23235 = (0);
seq__23211_23215 = G__23232;
chunk__23212_23216 = G__23233;
count__23213_23217 = G__23234;
i__23214_23218 = G__23235;
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
var seq__23236_23240 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23237_23241 = null;
var count__23238_23242 = (0);
var i__23239_23243 = (0);
while(true){
if((i__23239_23243 < count__23238_23242)){
var node_23244 = cljs.core._nth.call(null,chunk__23237_23241,i__23239_23243);
goog.dom.forms.setValue(node_23244,value);


var G__23245 = seq__23236_23240;
var G__23246 = chunk__23237_23241;
var G__23247 = count__23238_23242;
var G__23248 = (i__23239_23243 + (1));
seq__23236_23240 = G__23245;
chunk__23237_23241 = G__23246;
count__23238_23242 = G__23247;
i__23239_23243 = G__23248;
continue;
} else {
var temp__5457__auto___23249 = cljs.core.seq.call(null,seq__23236_23240);
if(temp__5457__auto___23249){
var seq__23236_23250__$1 = temp__5457__auto___23249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23236_23250__$1)){
var c__4319__auto___23251 = cljs.core.chunk_first.call(null,seq__23236_23250__$1);
var G__23252 = cljs.core.chunk_rest.call(null,seq__23236_23250__$1);
var G__23253 = c__4319__auto___23251;
var G__23254 = cljs.core.count.call(null,c__4319__auto___23251);
var G__23255 = (0);
seq__23236_23240 = G__23252;
chunk__23237_23241 = G__23253;
count__23238_23242 = G__23254;
i__23239_23243 = G__23255;
continue;
} else {
var node_23256 = cljs.core.first.call(null,seq__23236_23250__$1);
goog.dom.forms.setValue(node_23256,value);


var G__23257 = cljs.core.next.call(null,seq__23236_23250__$1);
var G__23258 = null;
var G__23259 = (0);
var G__23260 = (0);
seq__23236_23240 = G__23257;
chunk__23237_23241 = G__23258;
count__23238_23242 = G__23259;
i__23239_23243 = G__23260;
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
var value_23266 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__23262_23267 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__23263_23268 = null;
var count__23264_23269 = (0);
var i__23265_23270 = (0);
while(true){
if((i__23265_23270 < count__23264_23269)){
var node_23271 = cljs.core._nth.call(null,chunk__23263_23268,i__23265_23270);
node_23271.innerHTML = value_23266;


var G__23272 = seq__23262_23267;
var G__23273 = chunk__23263_23268;
var G__23274 = count__23264_23269;
var G__23275 = (i__23265_23270 + (1));
seq__23262_23267 = G__23272;
chunk__23263_23268 = G__23273;
count__23264_23269 = G__23274;
i__23265_23270 = G__23275;
continue;
} else {
var temp__5457__auto___23276 = cljs.core.seq.call(null,seq__23262_23267);
if(temp__5457__auto___23276){
var seq__23262_23277__$1 = temp__5457__auto___23276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23262_23277__$1)){
var c__4319__auto___23278 = cljs.core.chunk_first.call(null,seq__23262_23277__$1);
var G__23279 = cljs.core.chunk_rest.call(null,seq__23262_23277__$1);
var G__23280 = c__4319__auto___23278;
var G__23281 = cljs.core.count.call(null,c__4319__auto___23278);
var G__23282 = (0);
seq__23262_23267 = G__23279;
chunk__23263_23268 = G__23280;
count__23264_23269 = G__23281;
i__23265_23270 = G__23282;
continue;
} else {
var node_23283 = cljs.core.first.call(null,seq__23262_23277__$1);
node_23283.innerHTML = value_23266;


var G__23284 = cljs.core.next.call(null,seq__23262_23277__$1);
var G__23285 = null;
var G__23286 = (0);
var G__23287 = (0);
seq__23262_23267 = G__23284;
chunk__23263_23268 = G__23285;
count__23264_23269 = G__23286;
i__23265_23270 = G__23287;
continue;
}
} else {
}
}
break;
}
}catch (e23261){if((e23261 instanceof Error)){
var e_23288 = e23261;
domina.replace_children_BANG_.call(null,content,value_23266);
} else {
throw e23261;

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
var G__23290 = arguments.length;
switch (G__23290) {
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
var seq__23294_23298 = cljs.core.seq.call(null,children);
var chunk__23295_23299 = null;
var count__23296_23300 = (0);
var i__23297_23301 = (0);
while(true){
if((i__23297_23301 < count__23296_23300)){
var child_23302 = cljs.core._nth.call(null,chunk__23295_23299,i__23297_23301);
frag.appendChild(child_23302);


var G__23303 = seq__23294_23298;
var G__23304 = chunk__23295_23299;
var G__23305 = count__23296_23300;
var G__23306 = (i__23297_23301 + (1));
seq__23294_23298 = G__23303;
chunk__23295_23299 = G__23304;
count__23296_23300 = G__23305;
i__23297_23301 = G__23306;
continue;
} else {
var temp__5457__auto___23307 = cljs.core.seq.call(null,seq__23294_23298);
if(temp__5457__auto___23307){
var seq__23294_23308__$1 = temp__5457__auto___23307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23294_23308__$1)){
var c__4319__auto___23309 = cljs.core.chunk_first.call(null,seq__23294_23308__$1);
var G__23310 = cljs.core.chunk_rest.call(null,seq__23294_23308__$1);
var G__23311 = c__4319__auto___23309;
var G__23312 = cljs.core.count.call(null,c__4319__auto___23309);
var G__23313 = (0);
seq__23294_23298 = G__23310;
chunk__23295_23299 = G__23311;
count__23296_23300 = G__23312;
i__23297_23301 = G__23313;
continue;
} else {
var child_23314 = cljs.core.first.call(null,seq__23294_23308__$1);
frag.appendChild(child_23314);


var G__23315 = cljs.core.next.call(null,seq__23294_23308__$1);
var G__23316 = null;
var G__23317 = (0);
var G__23318 = (0);
seq__23294_23298 = G__23315;
chunk__23295_23299 = G__23316;
count__23296_23300 = G__23317;
i__23297_23301 = G__23318;
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
return (function (p1__23292_SHARP_,p2__23293_SHARP_){
return f.call(null,p1__23292_SHARP_,p2__23293_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__23320 = arguments.length;
switch (G__23320) {
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
var G__23323 = arguments.length;
switch (G__23323) {
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

//# sourceMappingURL=domina.js.map?rel=1527842011848
