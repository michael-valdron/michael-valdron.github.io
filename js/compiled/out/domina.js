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
var opt_wrapper_21796 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_21797 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_21798 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21798,opt_wrapper_21796,table_section_wrapper_21797,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21797,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21797,cell_wrapper_21798,table_section_wrapper_21797,table_section_wrapper_21797]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__3911__auto__ = div.firstChild;
if(cljs.core.truth_(and__3911__auto__)){
return div.firstChild.childNodes;
} else {
return and__3911__auto__;
}
})():((((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__21799 = cljs.core.seq.call(null,tbody);
var chunk__21800 = null;
var count__21801 = (0);
var i__21802 = (0);
while(true){
if((i__21802 < count__21801)){
var child = cljs.core._nth.call(null,chunk__21800,i__21802);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__21803 = seq__21799;
var G__21804 = chunk__21800;
var G__21805 = count__21801;
var G__21806 = (i__21802 + (1));
seq__21799 = G__21803;
chunk__21800 = G__21804;
count__21801 = G__21805;
i__21802 = G__21806;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21799);
if(temp__5457__auto__){
var seq__21799__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21799__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21799__$1);
var G__21807 = cljs.core.chunk_rest.call(null,seq__21799__$1);
var G__21808 = c__4319__auto__;
var G__21809 = cljs.core.count.call(null,c__4319__auto__);
var G__21810 = (0);
seq__21799 = G__21807;
chunk__21800 = G__21808;
count__21801 = G__21809;
i__21802 = G__21810;
continue;
} else {
var child = cljs.core.first.call(null,seq__21799__$1);
if(((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__21811 = cljs.core.next.call(null,seq__21799__$1);
var G__21812 = null;
var G__21813 = (0);
var G__21814 = (0);
seq__21799 = G__21811;
chunk__21800 = G__21812;
count__21801 = G__21813;
i__21802 = G__21814;
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
var vec__21815 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__21815,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__21815,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__21815,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__21818 = wrapper.lastChild;
var G__21819 = (level - (1));
wrapper = G__21818;
level = G__21819;
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
var len__4499__auto___21821 = arguments.length;
var i__4500__auto___21822 = (0);
while(true){
if((i__4500__auto___21822 < len__4499__auto___21821)){
args__4502__auto__.push((arguments[i__4500__auto___21822]));

var G__21823 = (i__4500__auto___21822 + (1));
i__4500__auto___21822 = G__21823;
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
domina.log_debug.cljs$lang$applyTo = (function (seq21820){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21820));
});

domina.log = (function domina$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21825 = arguments.length;
var i__4500__auto___21826 = (0);
while(true){
if((i__4500__auto___21826 < len__4499__auto___21825)){
args__4502__auto__.push((arguments[i__4500__auto___21826]));

var G__21827 = (i__4500__auto___21826 + (1));
i__4500__auto___21826 = G__21827;
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
domina.log.cljs$lang$applyTo = (function (seq21824){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21824));
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
var len__4499__auto___21829 = arguments.length;
var i__4500__auto___21830 = (0);
while(true){
if((i__4500__auto___21830 < len__4499__auto___21829)){
args__4502__auto__.push((arguments[i__4500__auto___21830]));

var G__21831 = (i__4500__auto___21830 + (1));
i__4500__auto___21830 = G__21831;
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
domina.common_ancestor.cljs$lang$applyTo = (function (seq21828){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21828));
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
return cljs.core.map.call(null,(function (p1__21832_SHARP_){
return p1__21832_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__21833_SHARP_,p2__21834_SHARP_){
return goog.dom.insertChildAt(p1__21833_SHARP_,p2__21834_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__21836_SHARP_,p2__21835_SHARP_){
return goog.dom.insertSiblingBefore(p2__21835_SHARP_,p1__21836_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__21838_SHARP_,p2__21837_SHARP_){
return goog.dom.insertSiblingAfter(p2__21837_SHARP_,p1__21838_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__21840_SHARP_,p2__21839_SHARP_){
return goog.dom.replaceNode(p2__21839_SHARP_,p1__21840_SHARP_);
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
var len__4499__auto___21848 = arguments.length;
var i__4500__auto___21849 = (0);
while(true){
if((i__4500__auto___21849 < len__4499__auto___21848)){
args__4502__auto__.push((arguments[i__4500__auto___21849]));

var G__21850 = (i__4500__auto___21849 + (1));
i__4500__auto___21849 = G__21850;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__21844_21851 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21845_21852 = null;
var count__21846_21853 = (0);
var i__21847_21854 = (0);
while(true){
if((i__21847_21854 < count__21846_21853)){
var n_21855 = cljs.core._nth.call(null,chunk__21845_21852,i__21847_21854);
goog.style.setStyle(n_21855,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__21856 = seq__21844_21851;
var G__21857 = chunk__21845_21852;
var G__21858 = count__21846_21853;
var G__21859 = (i__21847_21854 + (1));
seq__21844_21851 = G__21856;
chunk__21845_21852 = G__21857;
count__21846_21853 = G__21858;
i__21847_21854 = G__21859;
continue;
} else {
var temp__5457__auto___21860 = cljs.core.seq.call(null,seq__21844_21851);
if(temp__5457__auto___21860){
var seq__21844_21861__$1 = temp__5457__auto___21860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21844_21861__$1)){
var c__4319__auto___21862 = cljs.core.chunk_first.call(null,seq__21844_21861__$1);
var G__21863 = cljs.core.chunk_rest.call(null,seq__21844_21861__$1);
var G__21864 = c__4319__auto___21862;
var G__21865 = cljs.core.count.call(null,c__4319__auto___21862);
var G__21866 = (0);
seq__21844_21851 = G__21863;
chunk__21845_21852 = G__21864;
count__21846_21853 = G__21865;
i__21847_21854 = G__21866;
continue;
} else {
var n_21867 = cljs.core.first.call(null,seq__21844_21861__$1);
goog.style.setStyle(n_21867,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__21868 = cljs.core.next.call(null,seq__21844_21861__$1);
var G__21869 = null;
var G__21870 = (0);
var G__21871 = (0);
seq__21844_21851 = G__21868;
chunk__21845_21852 = G__21869;
count__21846_21853 = G__21870;
i__21847_21854 = G__21871;
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
domina.set_style_BANG_.cljs$lang$applyTo = (function (seq21841){
var G__21842 = cljs.core.first.call(null,seq21841);
var seq21841__$1 = cljs.core.next.call(null,seq21841);
var G__21843 = cljs.core.first.call(null,seq21841__$1);
var seq21841__$2 = cljs.core.next.call(null,seq21841__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21842,G__21843,seq21841__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21879 = arguments.length;
var i__4500__auto___21880 = (0);
while(true){
if((i__4500__auto___21880 < len__4499__auto___21879)){
args__4502__auto__.push((arguments[i__4500__auto___21880]));

var G__21881 = (i__4500__auto___21880 + (1));
i__4500__auto___21880 = G__21881;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__21875_21882 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21876_21883 = null;
var count__21877_21884 = (0);
var i__21878_21885 = (0);
while(true){
if((i__21878_21885 < count__21877_21884)){
var n_21886 = cljs.core._nth.call(null,chunk__21876_21883,i__21878_21885);
n_21886.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__21887 = seq__21875_21882;
var G__21888 = chunk__21876_21883;
var G__21889 = count__21877_21884;
var G__21890 = (i__21878_21885 + (1));
seq__21875_21882 = G__21887;
chunk__21876_21883 = G__21888;
count__21877_21884 = G__21889;
i__21878_21885 = G__21890;
continue;
} else {
var temp__5457__auto___21891 = cljs.core.seq.call(null,seq__21875_21882);
if(temp__5457__auto___21891){
var seq__21875_21892__$1 = temp__5457__auto___21891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21875_21892__$1)){
var c__4319__auto___21893 = cljs.core.chunk_first.call(null,seq__21875_21892__$1);
var G__21894 = cljs.core.chunk_rest.call(null,seq__21875_21892__$1);
var G__21895 = c__4319__auto___21893;
var G__21896 = cljs.core.count.call(null,c__4319__auto___21893);
var G__21897 = (0);
seq__21875_21882 = G__21894;
chunk__21876_21883 = G__21895;
count__21877_21884 = G__21896;
i__21878_21885 = G__21897;
continue;
} else {
var n_21898 = cljs.core.first.call(null,seq__21875_21892__$1);
n_21898.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));


var G__21899 = cljs.core.next.call(null,seq__21875_21892__$1);
var G__21900 = null;
var G__21901 = (0);
var G__21902 = (0);
seq__21875_21882 = G__21899;
chunk__21876_21883 = G__21900;
count__21877_21884 = G__21901;
i__21878_21885 = G__21902;
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
domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq21872){
var G__21873 = cljs.core.first.call(null,seq21872);
var seq21872__$1 = cljs.core.next.call(null,seq21872);
var G__21874 = cljs.core.first.call(null,seq21872__$1);
var seq21872__$2 = cljs.core.next.call(null,seq21872__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21873,G__21874,seq21872__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__21903_21907 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21904_21908 = null;
var count__21905_21909 = (0);
var i__21906_21910 = (0);
while(true){
if((i__21906_21910 < count__21905_21909)){
var n_21911 = cljs.core._nth.call(null,chunk__21904_21908,i__21906_21910);
n_21911.removeAttribute(cljs.core.name.call(null,name));


var G__21912 = seq__21903_21907;
var G__21913 = chunk__21904_21908;
var G__21914 = count__21905_21909;
var G__21915 = (i__21906_21910 + (1));
seq__21903_21907 = G__21912;
chunk__21904_21908 = G__21913;
count__21905_21909 = G__21914;
i__21906_21910 = G__21915;
continue;
} else {
var temp__5457__auto___21916 = cljs.core.seq.call(null,seq__21903_21907);
if(temp__5457__auto___21916){
var seq__21903_21917__$1 = temp__5457__auto___21916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21903_21917__$1)){
var c__4319__auto___21918 = cljs.core.chunk_first.call(null,seq__21903_21917__$1);
var G__21919 = cljs.core.chunk_rest.call(null,seq__21903_21917__$1);
var G__21920 = c__4319__auto___21918;
var G__21921 = cljs.core.count.call(null,c__4319__auto___21918);
var G__21922 = (0);
seq__21903_21907 = G__21919;
chunk__21904_21908 = G__21920;
count__21905_21909 = G__21921;
i__21906_21910 = G__21922;
continue;
} else {
var n_21923 = cljs.core.first.call(null,seq__21903_21917__$1);
n_21923.removeAttribute(cljs.core.name.call(null,name));


var G__21924 = cljs.core.next.call(null,seq__21903_21917__$1);
var G__21925 = null;
var G__21926 = (0);
var G__21927 = (0);
seq__21903_21907 = G__21924;
chunk__21904_21908 = G__21925;
count__21905_21909 = G__21926;
i__21906_21910 = G__21927;
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
var vec__21928 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__21928,(0),null);
var v = cljs.core.nth.call(null,vec__21928,(1),null);
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
return (function (p1__21931_SHARP_){
var attr = attrs.item(p1__21931_SHARP_);
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
var seq__21932_21942 = cljs.core.seq.call(null,styles);
var chunk__21933_21943 = null;
var count__21934_21944 = (0);
var i__21935_21945 = (0);
while(true){
if((i__21935_21945 < count__21934_21944)){
var vec__21936_21946 = cljs.core._nth.call(null,chunk__21933_21943,i__21935_21945);
var name_21947 = cljs.core.nth.call(null,vec__21936_21946,(0),null);
var value_21948 = cljs.core.nth.call(null,vec__21936_21946,(1),null);
domina.set_style_BANG_.call(null,content,name_21947,value_21948);


var G__21949 = seq__21932_21942;
var G__21950 = chunk__21933_21943;
var G__21951 = count__21934_21944;
var G__21952 = (i__21935_21945 + (1));
seq__21932_21942 = G__21949;
chunk__21933_21943 = G__21950;
count__21934_21944 = G__21951;
i__21935_21945 = G__21952;
continue;
} else {
var temp__5457__auto___21953 = cljs.core.seq.call(null,seq__21932_21942);
if(temp__5457__auto___21953){
var seq__21932_21954__$1 = temp__5457__auto___21953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21932_21954__$1)){
var c__4319__auto___21955 = cljs.core.chunk_first.call(null,seq__21932_21954__$1);
var G__21956 = cljs.core.chunk_rest.call(null,seq__21932_21954__$1);
var G__21957 = c__4319__auto___21955;
var G__21958 = cljs.core.count.call(null,c__4319__auto___21955);
var G__21959 = (0);
seq__21932_21942 = G__21956;
chunk__21933_21943 = G__21957;
count__21934_21944 = G__21958;
i__21935_21945 = G__21959;
continue;
} else {
var vec__21939_21960 = cljs.core.first.call(null,seq__21932_21954__$1);
var name_21961 = cljs.core.nth.call(null,vec__21939_21960,(0),null);
var value_21962 = cljs.core.nth.call(null,vec__21939_21960,(1),null);
domina.set_style_BANG_.call(null,content,name_21961,value_21962);


var G__21963 = cljs.core.next.call(null,seq__21932_21954__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21932_21942 = G__21963;
chunk__21933_21943 = G__21964;
count__21934_21944 = G__21965;
i__21935_21945 = G__21966;
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
var seq__21967_21977 = cljs.core.seq.call(null,attrs);
var chunk__21968_21978 = null;
var count__21969_21979 = (0);
var i__21970_21980 = (0);
while(true){
if((i__21970_21980 < count__21969_21979)){
var vec__21971_21981 = cljs.core._nth.call(null,chunk__21968_21978,i__21970_21980);
var name_21982 = cljs.core.nth.call(null,vec__21971_21981,(0),null);
var value_21983 = cljs.core.nth.call(null,vec__21971_21981,(1),null);
domina.set_attr_BANG_.call(null,content,name_21982,value_21983);


var G__21984 = seq__21967_21977;
var G__21985 = chunk__21968_21978;
var G__21986 = count__21969_21979;
var G__21987 = (i__21970_21980 + (1));
seq__21967_21977 = G__21984;
chunk__21968_21978 = G__21985;
count__21969_21979 = G__21986;
i__21970_21980 = G__21987;
continue;
} else {
var temp__5457__auto___21988 = cljs.core.seq.call(null,seq__21967_21977);
if(temp__5457__auto___21988){
var seq__21967_21989__$1 = temp__5457__auto___21988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21967_21989__$1)){
var c__4319__auto___21990 = cljs.core.chunk_first.call(null,seq__21967_21989__$1);
var G__21991 = cljs.core.chunk_rest.call(null,seq__21967_21989__$1);
var G__21992 = c__4319__auto___21990;
var G__21993 = cljs.core.count.call(null,c__4319__auto___21990);
var G__21994 = (0);
seq__21967_21977 = G__21991;
chunk__21968_21978 = G__21992;
count__21969_21979 = G__21993;
i__21970_21980 = G__21994;
continue;
} else {
var vec__21974_21995 = cljs.core.first.call(null,seq__21967_21989__$1);
var name_21996 = cljs.core.nth.call(null,vec__21974_21995,(0),null);
var value_21997 = cljs.core.nth.call(null,vec__21974_21995,(1),null);
domina.set_attr_BANG_.call(null,content,name_21996,value_21997);


var G__21998 = cljs.core.next.call(null,seq__21967_21989__$1);
var G__21999 = null;
var G__22000 = (0);
var G__22001 = (0);
seq__21967_21977 = G__21998;
chunk__21968_21978 = G__21999;
count__21969_21979 = G__22000;
i__21970_21980 = G__22001;
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
var seq__22002_22006 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22003_22007 = null;
var count__22004_22008 = (0);
var i__22005_22009 = (0);
while(true){
if((i__22005_22009 < count__22004_22008)){
var node_22010 = cljs.core._nth.call(null,chunk__22003_22007,i__22005_22009);
goog.dom.classes.add(node_22010,class$);


var G__22011 = seq__22002_22006;
var G__22012 = chunk__22003_22007;
var G__22013 = count__22004_22008;
var G__22014 = (i__22005_22009 + (1));
seq__22002_22006 = G__22011;
chunk__22003_22007 = G__22012;
count__22004_22008 = G__22013;
i__22005_22009 = G__22014;
continue;
} else {
var temp__5457__auto___22015 = cljs.core.seq.call(null,seq__22002_22006);
if(temp__5457__auto___22015){
var seq__22002_22016__$1 = temp__5457__auto___22015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22002_22016__$1)){
var c__4319__auto___22017 = cljs.core.chunk_first.call(null,seq__22002_22016__$1);
var G__22018 = cljs.core.chunk_rest.call(null,seq__22002_22016__$1);
var G__22019 = c__4319__auto___22017;
var G__22020 = cljs.core.count.call(null,c__4319__auto___22017);
var G__22021 = (0);
seq__22002_22006 = G__22018;
chunk__22003_22007 = G__22019;
count__22004_22008 = G__22020;
i__22005_22009 = G__22021;
continue;
} else {
var node_22022 = cljs.core.first.call(null,seq__22002_22016__$1);
goog.dom.classes.add(node_22022,class$);


var G__22023 = cljs.core.next.call(null,seq__22002_22016__$1);
var G__22024 = null;
var G__22025 = (0);
var G__22026 = (0);
seq__22002_22006 = G__22023;
chunk__22003_22007 = G__22024;
count__22004_22008 = G__22025;
i__22005_22009 = G__22026;
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
var seq__22027_22031 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22028_22032 = null;
var count__22029_22033 = (0);
var i__22030_22034 = (0);
while(true){
if((i__22030_22034 < count__22029_22033)){
var node_22035 = cljs.core._nth.call(null,chunk__22028_22032,i__22030_22034);
goog.dom.classes.remove(node_22035,class$);


var G__22036 = seq__22027_22031;
var G__22037 = chunk__22028_22032;
var G__22038 = count__22029_22033;
var G__22039 = (i__22030_22034 + (1));
seq__22027_22031 = G__22036;
chunk__22028_22032 = G__22037;
count__22029_22033 = G__22038;
i__22030_22034 = G__22039;
continue;
} else {
var temp__5457__auto___22040 = cljs.core.seq.call(null,seq__22027_22031);
if(temp__5457__auto___22040){
var seq__22027_22041__$1 = temp__5457__auto___22040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22027_22041__$1)){
var c__4319__auto___22042 = cljs.core.chunk_first.call(null,seq__22027_22041__$1);
var G__22043 = cljs.core.chunk_rest.call(null,seq__22027_22041__$1);
var G__22044 = c__4319__auto___22042;
var G__22045 = cljs.core.count.call(null,c__4319__auto___22042);
var G__22046 = (0);
seq__22027_22031 = G__22043;
chunk__22028_22032 = G__22044;
count__22029_22033 = G__22045;
i__22030_22034 = G__22046;
continue;
} else {
var node_22047 = cljs.core.first.call(null,seq__22027_22041__$1);
goog.dom.classes.remove(node_22047,class$);


var G__22048 = cljs.core.next.call(null,seq__22027_22041__$1);
var G__22049 = null;
var G__22050 = (0);
var G__22051 = (0);
seq__22027_22031 = G__22048;
chunk__22028_22032 = G__22049;
count__22029_22033 = G__22050;
i__22030_22034 = G__22051;
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
var seq__22052_22056 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22053_22057 = null;
var count__22054_22058 = (0);
var i__22055_22059 = (0);
while(true){
if((i__22055_22059 < count__22054_22058)){
var node_22060 = cljs.core._nth.call(null,chunk__22053_22057,i__22055_22059);
goog.dom.classes.toggle(node_22060,class$);


var G__22061 = seq__22052_22056;
var G__22062 = chunk__22053_22057;
var G__22063 = count__22054_22058;
var G__22064 = (i__22055_22059 + (1));
seq__22052_22056 = G__22061;
chunk__22053_22057 = G__22062;
count__22054_22058 = G__22063;
i__22055_22059 = G__22064;
continue;
} else {
var temp__5457__auto___22065 = cljs.core.seq.call(null,seq__22052_22056);
if(temp__5457__auto___22065){
var seq__22052_22066__$1 = temp__5457__auto___22065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22052_22066__$1)){
var c__4319__auto___22067 = cljs.core.chunk_first.call(null,seq__22052_22066__$1);
var G__22068 = cljs.core.chunk_rest.call(null,seq__22052_22066__$1);
var G__22069 = c__4319__auto___22067;
var G__22070 = cljs.core.count.call(null,c__4319__auto___22067);
var G__22071 = (0);
seq__22052_22056 = G__22068;
chunk__22053_22057 = G__22069;
count__22054_22058 = G__22070;
i__22055_22059 = G__22071;
continue;
} else {
var node_22072 = cljs.core.first.call(null,seq__22052_22066__$1);
goog.dom.classes.toggle(node_22072,class$);


var G__22073 = cljs.core.next.call(null,seq__22052_22066__$1);
var G__22074 = null;
var G__22075 = (0);
var G__22076 = (0);
seq__22052_22056 = G__22073;
chunk__22053_22057 = G__22074;
count__22054_22058 = G__22075;
i__22055_22059 = G__22076;
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
var classes_22081__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__22077_22082 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22078_22083 = null;
var count__22079_22084 = (0);
var i__22080_22085 = (0);
while(true){
if((i__22080_22085 < count__22079_22084)){
var node_22086 = cljs.core._nth.call(null,chunk__22078_22083,i__22080_22085);
goog.dom.classes.set(node_22086,classes_22081__$1);


var G__22087 = seq__22077_22082;
var G__22088 = chunk__22078_22083;
var G__22089 = count__22079_22084;
var G__22090 = (i__22080_22085 + (1));
seq__22077_22082 = G__22087;
chunk__22078_22083 = G__22088;
count__22079_22084 = G__22089;
i__22080_22085 = G__22090;
continue;
} else {
var temp__5457__auto___22091 = cljs.core.seq.call(null,seq__22077_22082);
if(temp__5457__auto___22091){
var seq__22077_22092__$1 = temp__5457__auto___22091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22077_22092__$1)){
var c__4319__auto___22093 = cljs.core.chunk_first.call(null,seq__22077_22092__$1);
var G__22094 = cljs.core.chunk_rest.call(null,seq__22077_22092__$1);
var G__22095 = c__4319__auto___22093;
var G__22096 = cljs.core.count.call(null,c__4319__auto___22093);
var G__22097 = (0);
seq__22077_22082 = G__22094;
chunk__22078_22083 = G__22095;
count__22079_22084 = G__22096;
i__22080_22085 = G__22097;
continue;
} else {
var node_22098 = cljs.core.first.call(null,seq__22077_22092__$1);
goog.dom.classes.set(node_22098,classes_22081__$1);


var G__22099 = cljs.core.next.call(null,seq__22077_22092__$1);
var G__22100 = null;
var G__22101 = (0);
var G__22102 = (0);
seq__22077_22082 = G__22099;
chunk__22078_22083 = G__22100;
count__22079_22084 = G__22101;
i__22080_22085 = G__22102;
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
var seq__22103_22107 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22104_22108 = null;
var count__22105_22109 = (0);
var i__22106_22110 = (0);
while(true){
if((i__22106_22110 < count__22105_22109)){
var node_22111 = cljs.core._nth.call(null,chunk__22104_22108,i__22106_22110);
goog.dom.setTextContent(node_22111,value);


var G__22112 = seq__22103_22107;
var G__22113 = chunk__22104_22108;
var G__22114 = count__22105_22109;
var G__22115 = (i__22106_22110 + (1));
seq__22103_22107 = G__22112;
chunk__22104_22108 = G__22113;
count__22105_22109 = G__22114;
i__22106_22110 = G__22115;
continue;
} else {
var temp__5457__auto___22116 = cljs.core.seq.call(null,seq__22103_22107);
if(temp__5457__auto___22116){
var seq__22103_22117__$1 = temp__5457__auto___22116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22103_22117__$1)){
var c__4319__auto___22118 = cljs.core.chunk_first.call(null,seq__22103_22117__$1);
var G__22119 = cljs.core.chunk_rest.call(null,seq__22103_22117__$1);
var G__22120 = c__4319__auto___22118;
var G__22121 = cljs.core.count.call(null,c__4319__auto___22118);
var G__22122 = (0);
seq__22103_22107 = G__22119;
chunk__22104_22108 = G__22120;
count__22105_22109 = G__22121;
i__22106_22110 = G__22122;
continue;
} else {
var node_22123 = cljs.core.first.call(null,seq__22103_22117__$1);
goog.dom.setTextContent(node_22123,value);


var G__22124 = cljs.core.next.call(null,seq__22103_22117__$1);
var G__22125 = null;
var G__22126 = (0);
var G__22127 = (0);
seq__22103_22107 = G__22124;
chunk__22104_22108 = G__22125;
count__22105_22109 = G__22126;
i__22106_22110 = G__22127;
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
var seq__22128_22132 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22129_22133 = null;
var count__22130_22134 = (0);
var i__22131_22135 = (0);
while(true){
if((i__22131_22135 < count__22130_22134)){
var node_22136 = cljs.core._nth.call(null,chunk__22129_22133,i__22131_22135);
goog.dom.forms.setValue(node_22136,value);


var G__22137 = seq__22128_22132;
var G__22138 = chunk__22129_22133;
var G__22139 = count__22130_22134;
var G__22140 = (i__22131_22135 + (1));
seq__22128_22132 = G__22137;
chunk__22129_22133 = G__22138;
count__22130_22134 = G__22139;
i__22131_22135 = G__22140;
continue;
} else {
var temp__5457__auto___22141 = cljs.core.seq.call(null,seq__22128_22132);
if(temp__5457__auto___22141){
var seq__22128_22142__$1 = temp__5457__auto___22141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22128_22142__$1)){
var c__4319__auto___22143 = cljs.core.chunk_first.call(null,seq__22128_22142__$1);
var G__22144 = cljs.core.chunk_rest.call(null,seq__22128_22142__$1);
var G__22145 = c__4319__auto___22143;
var G__22146 = cljs.core.count.call(null,c__4319__auto___22143);
var G__22147 = (0);
seq__22128_22132 = G__22144;
chunk__22129_22133 = G__22145;
count__22130_22134 = G__22146;
i__22131_22135 = G__22147;
continue;
} else {
var node_22148 = cljs.core.first.call(null,seq__22128_22142__$1);
goog.dom.forms.setValue(node_22148,value);


var G__22149 = cljs.core.next.call(null,seq__22128_22142__$1);
var G__22150 = null;
var G__22151 = (0);
var G__22152 = (0);
seq__22128_22132 = G__22149;
chunk__22129_22133 = G__22150;
count__22130_22134 = G__22151;
i__22131_22135 = G__22152;
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
var value_22158 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__22154_22159 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22155_22160 = null;
var count__22156_22161 = (0);
var i__22157_22162 = (0);
while(true){
if((i__22157_22162 < count__22156_22161)){
var node_22163 = cljs.core._nth.call(null,chunk__22155_22160,i__22157_22162);
node_22163.innerHTML = value_22158;


var G__22164 = seq__22154_22159;
var G__22165 = chunk__22155_22160;
var G__22166 = count__22156_22161;
var G__22167 = (i__22157_22162 + (1));
seq__22154_22159 = G__22164;
chunk__22155_22160 = G__22165;
count__22156_22161 = G__22166;
i__22157_22162 = G__22167;
continue;
} else {
var temp__5457__auto___22168 = cljs.core.seq.call(null,seq__22154_22159);
if(temp__5457__auto___22168){
var seq__22154_22169__$1 = temp__5457__auto___22168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22154_22169__$1)){
var c__4319__auto___22170 = cljs.core.chunk_first.call(null,seq__22154_22169__$1);
var G__22171 = cljs.core.chunk_rest.call(null,seq__22154_22169__$1);
var G__22172 = c__4319__auto___22170;
var G__22173 = cljs.core.count.call(null,c__4319__auto___22170);
var G__22174 = (0);
seq__22154_22159 = G__22171;
chunk__22155_22160 = G__22172;
count__22156_22161 = G__22173;
i__22157_22162 = G__22174;
continue;
} else {
var node_22175 = cljs.core.first.call(null,seq__22154_22169__$1);
node_22175.innerHTML = value_22158;


var G__22176 = cljs.core.next.call(null,seq__22154_22169__$1);
var G__22177 = null;
var G__22178 = (0);
var G__22179 = (0);
seq__22154_22159 = G__22176;
chunk__22155_22160 = G__22177;
count__22156_22161 = G__22178;
i__22157_22162 = G__22179;
continue;
}
} else {
}
}
break;
}
}catch (e22153){if((e22153 instanceof Error)){
var e_22180 = e22153;
domina.replace_children_BANG_.call(null,content,value_22158);
} else {
throw e22153;

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
var G__22182 = arguments.length;
switch (G__22182) {
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
var seq__22186_22190 = cljs.core.seq.call(null,children);
var chunk__22187_22191 = null;
var count__22188_22192 = (0);
var i__22189_22193 = (0);
while(true){
if((i__22189_22193 < count__22188_22192)){
var child_22194 = cljs.core._nth.call(null,chunk__22187_22191,i__22189_22193);
frag.appendChild(child_22194);


var G__22195 = seq__22186_22190;
var G__22196 = chunk__22187_22191;
var G__22197 = count__22188_22192;
var G__22198 = (i__22189_22193 + (1));
seq__22186_22190 = G__22195;
chunk__22187_22191 = G__22196;
count__22188_22192 = G__22197;
i__22189_22193 = G__22198;
continue;
} else {
var temp__5457__auto___22199 = cljs.core.seq.call(null,seq__22186_22190);
if(temp__5457__auto___22199){
var seq__22186_22200__$1 = temp__5457__auto___22199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22186_22200__$1)){
var c__4319__auto___22201 = cljs.core.chunk_first.call(null,seq__22186_22200__$1);
var G__22202 = cljs.core.chunk_rest.call(null,seq__22186_22200__$1);
var G__22203 = c__4319__auto___22201;
var G__22204 = cljs.core.count.call(null,c__4319__auto___22201);
var G__22205 = (0);
seq__22186_22190 = G__22202;
chunk__22187_22191 = G__22203;
count__22188_22192 = G__22204;
i__22189_22193 = G__22205;
continue;
} else {
var child_22206 = cljs.core.first.call(null,seq__22186_22200__$1);
frag.appendChild(child_22206);


var G__22207 = cljs.core.next.call(null,seq__22186_22200__$1);
var G__22208 = null;
var G__22209 = (0);
var G__22210 = (0);
seq__22186_22190 = G__22207;
chunk__22187_22191 = G__22208;
count__22188_22192 = G__22209;
i__22189_22193 = G__22210;
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
return (function (p1__22184_SHARP_,p2__22185_SHARP_){
return f.call(null,p1__22184_SHARP_,p2__22185_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__22212 = arguments.length;
switch (G__22212) {
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
var G__22215 = arguments.length;
switch (G__22215) {
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

//# sourceMappingURL=domina.js.map?rel=1527748559264
