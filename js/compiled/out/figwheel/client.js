// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31799){if((e31799 instanceof Error)){
var e = e31799;
return "Error: Unable to stringify";
} else {
throw e31799;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31802 = arguments.length;
switch (G__31802) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31800_SHARP_){
if(typeof p1__31800_SHARP_ === 'string'){
return p1__31800_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31800_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31805 = arguments.length;
var i__4500__auto___31806 = (0);
while(true){
if((i__4500__auto___31806 < len__4499__auto___31805)){
args__4502__auto__.push((arguments[i__4500__auto___31806]));

var G__31807 = (i__4500__auto___31806 + (1));
i__4500__auto___31806 = G__31807;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31804){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31804));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31809 = arguments.length;
var i__4500__auto___31810 = (0);
while(true){
if((i__4500__auto___31810 < len__4499__auto___31809)){
args__4502__auto__.push((arguments[i__4500__auto___31810]));

var G__31811 = (i__4500__auto___31810 + (1));
i__4500__auto___31810 = G__31811;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31808){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31808));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31812){
var map__31813 = p__31812;
var map__31813__$1 = ((((!((map__31813 == null)))?(((((map__31813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31813):map__31813);
var message = cljs.core.get.call(null,map__31813__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31813__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28110__auto___31892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___31892,ch){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___31892,ch){
return (function (state_31864){
var state_val_31865 = (state_31864[(1)]);
if((state_val_31865 === (7))){
var inst_31860 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31866_31893 = state_31864__$1;
(statearr_31866_31893[(2)] = inst_31860);

(statearr_31866_31893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (1))){
var state_31864__$1 = state_31864;
var statearr_31867_31894 = state_31864__$1;
(statearr_31867_31894[(2)] = null);

(statearr_31867_31894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (4))){
var inst_31817 = (state_31864[(7)]);
var inst_31817__$1 = (state_31864[(2)]);
var state_31864__$1 = (function (){var statearr_31868 = state_31864;
(statearr_31868[(7)] = inst_31817__$1);

return statearr_31868;
})();
if(cljs.core.truth_(inst_31817__$1)){
var statearr_31869_31895 = state_31864__$1;
(statearr_31869_31895[(1)] = (5));

} else {
var statearr_31870_31896 = state_31864__$1;
(statearr_31870_31896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (15))){
var inst_31824 = (state_31864[(8)]);
var inst_31839 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31824);
var inst_31840 = cljs.core.first.call(null,inst_31839);
var inst_31841 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31840);
var inst_31842 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31841)].join('');
var inst_31843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31842);
var state_31864__$1 = state_31864;
var statearr_31871_31897 = state_31864__$1;
(statearr_31871_31897[(2)] = inst_31843);

(statearr_31871_31897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (13))){
var inst_31848 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31872_31898 = state_31864__$1;
(statearr_31872_31898[(2)] = inst_31848);

(statearr_31872_31898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (6))){
var state_31864__$1 = state_31864;
var statearr_31873_31899 = state_31864__$1;
(statearr_31873_31899[(2)] = null);

(statearr_31873_31899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (17))){
var inst_31846 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31874_31900 = state_31864__$1;
(statearr_31874_31900[(2)] = inst_31846);

(statearr_31874_31900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (3))){
var inst_31862 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31864__$1,inst_31862);
} else {
if((state_val_31865 === (12))){
var inst_31823 = (state_31864[(9)]);
var inst_31837 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31823,opts);
var state_31864__$1 = state_31864;
if(cljs.core.truth_(inst_31837)){
var statearr_31875_31901 = state_31864__$1;
(statearr_31875_31901[(1)] = (15));

} else {
var statearr_31876_31902 = state_31864__$1;
(statearr_31876_31902[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (2))){
var state_31864__$1 = state_31864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31864__$1,(4),ch);
} else {
if((state_val_31865 === (11))){
var inst_31824 = (state_31864[(8)]);
var inst_31829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31830 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31824);
var inst_31831 = cljs.core.async.timeout.call(null,(1000));
var inst_31832 = [inst_31830,inst_31831];
var inst_31833 = (new cljs.core.PersistentVector(null,2,(5),inst_31829,inst_31832,null));
var state_31864__$1 = state_31864;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31864__$1,(14),inst_31833);
} else {
if((state_val_31865 === (9))){
var inst_31824 = (state_31864[(8)]);
var inst_31850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31851 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31824);
var inst_31852 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31851);
var inst_31853 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31852)].join('');
var inst_31854 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31853);
var state_31864__$1 = (function (){var statearr_31877 = state_31864;
(statearr_31877[(10)] = inst_31850);

return statearr_31877;
})();
var statearr_31878_31903 = state_31864__$1;
(statearr_31878_31903[(2)] = inst_31854);

(statearr_31878_31903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (5))){
var inst_31817 = (state_31864[(7)]);
var inst_31819 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31820 = (new cljs.core.PersistentArrayMap(null,2,inst_31819,null));
var inst_31821 = (new cljs.core.PersistentHashSet(null,inst_31820,null));
var inst_31822 = figwheel.client.focus_msgs.call(null,inst_31821,inst_31817);
var inst_31823 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31822);
var inst_31824 = cljs.core.first.call(null,inst_31822);
var inst_31825 = figwheel.client.autoload_QMARK_.call(null);
var state_31864__$1 = (function (){var statearr_31879 = state_31864;
(statearr_31879[(9)] = inst_31823);

(statearr_31879[(8)] = inst_31824);

return statearr_31879;
})();
if(cljs.core.truth_(inst_31825)){
var statearr_31880_31904 = state_31864__$1;
(statearr_31880_31904[(1)] = (8));

} else {
var statearr_31881_31905 = state_31864__$1;
(statearr_31881_31905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (14))){
var inst_31835 = (state_31864[(2)]);
var state_31864__$1 = state_31864;
var statearr_31882_31906 = state_31864__$1;
(statearr_31882_31906[(2)] = inst_31835);

(statearr_31882_31906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (16))){
var state_31864__$1 = state_31864;
var statearr_31883_31907 = state_31864__$1;
(statearr_31883_31907[(2)] = null);

(statearr_31883_31907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (10))){
var inst_31856 = (state_31864[(2)]);
var state_31864__$1 = (function (){var statearr_31884 = state_31864;
(statearr_31884[(11)] = inst_31856);

return statearr_31884;
})();
var statearr_31885_31908 = state_31864__$1;
(statearr_31885_31908[(2)] = null);

(statearr_31885_31908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31865 === (8))){
var inst_31823 = (state_31864[(9)]);
var inst_31827 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31823,opts);
var state_31864__$1 = state_31864;
if(cljs.core.truth_(inst_31827)){
var statearr_31886_31909 = state_31864__$1;
(statearr_31886_31909[(1)] = (11));

} else {
var statearr_31887_31910 = state_31864__$1;
(statearr_31887_31910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28110__auto___31892,ch))
;
return ((function (switch__28020__auto__,c__28110__auto___31892,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28021__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28021__auto____0 = (function (){
var statearr_31888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31888[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28021__auto__);

(statearr_31888[(1)] = (1));

return statearr_31888;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28021__auto____1 = (function (state_31864){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_31864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e31889){if((e31889 instanceof Object)){
var ex__28024__auto__ = e31889;
var statearr_31890_31911 = state_31864;
(statearr_31890_31911[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31912 = state_31864;
state_31864 = G__31912;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28021__auto__ = function(state_31864){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28021__auto____1.call(this,state_31864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28021__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28021__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___31892,ch))
})();
var state__28112__auto__ = (function (){var statearr_31891 = f__28111__auto__.call(null);
(statearr_31891[(6)] = c__28110__auto___31892);

return statearr_31891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___31892,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31913_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31913_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31917 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31917){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31915 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31916 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31915,_STAR_print_fn_STAR_31916,sb,base_path_31917){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31915,_STAR_print_fn_STAR_31916,sb,base_path_31917))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31916;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31915;
}}catch (e31914){if((e31914 instanceof Error)){
var e = e31914;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31917], null));
} else {
var e = e31914;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31917))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31918){
var map__31919 = p__31918;
var map__31919__$1 = ((((!((map__31919 == null)))?(((((map__31919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31919):map__31919);
var opts = map__31919__$1;
var build_id = cljs.core.get.call(null,map__31919__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31919,map__31919__$1,opts,build_id){
return (function (p__31921){
var vec__31922 = p__31921;
var seq__31923 = cljs.core.seq.call(null,vec__31922);
var first__31924 = cljs.core.first.call(null,seq__31923);
var seq__31923__$1 = cljs.core.next.call(null,seq__31923);
var map__31925 = first__31924;
var map__31925__$1 = ((((!((map__31925 == null)))?(((((map__31925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31925):map__31925);
var msg = map__31925__$1;
var msg_name = cljs.core.get.call(null,map__31925__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31923__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31922,seq__31923,first__31924,seq__31923__$1,map__31925,map__31925__$1,msg,msg_name,_,map__31919,map__31919__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31922,seq__31923,first__31924,seq__31923__$1,map__31925,map__31925__$1,msg,msg_name,_,map__31919,map__31919__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31919,map__31919__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31927){
var vec__31928 = p__31927;
var seq__31929 = cljs.core.seq.call(null,vec__31928);
var first__31930 = cljs.core.first.call(null,seq__31929);
var seq__31929__$1 = cljs.core.next.call(null,seq__31929);
var map__31931 = first__31930;
var map__31931__$1 = ((((!((map__31931 == null)))?(((((map__31931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31931):map__31931);
var msg = map__31931__$1;
var msg_name = cljs.core.get.call(null,map__31931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31929__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31933){
var map__31934 = p__31933;
var map__31934__$1 = ((((!((map__31934 == null)))?(((((map__31934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31934):map__31934);
var on_compile_warning = cljs.core.get.call(null,map__31934__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31934__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31934,map__31934__$1,on_compile_warning,on_compile_fail){
return (function (p__31936){
var vec__31937 = p__31936;
var seq__31938 = cljs.core.seq.call(null,vec__31937);
var first__31939 = cljs.core.first.call(null,seq__31938);
var seq__31938__$1 = cljs.core.next.call(null,seq__31938);
var map__31940 = first__31939;
var map__31940__$1 = ((((!((map__31940 == null)))?(((((map__31940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31940):map__31940);
var msg = map__31940__$1;
var msg_name = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31938__$1;
var pred__31942 = cljs.core._EQ_;
var expr__31943 = msg_name;
if(cljs.core.truth_(pred__31942.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31943))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31942.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31943))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31934,map__31934__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__,msg_hist,msg_names,msg){
return (function (state_32032){
var state_val_32033 = (state_32032[(1)]);
if((state_val_32033 === (7))){
var inst_31952 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31952)){
var statearr_32034_32081 = state_32032__$1;
(statearr_32034_32081[(1)] = (8));

} else {
var statearr_32035_32082 = state_32032__$1;
(statearr_32035_32082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (20))){
var inst_32026 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32036_32083 = state_32032__$1;
(statearr_32036_32083[(2)] = inst_32026);

(statearr_32036_32083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (27))){
var inst_32022 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32037_32084 = state_32032__$1;
(statearr_32037_32084[(2)] = inst_32022);

(statearr_32037_32084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (1))){
var inst_31945 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31945)){
var statearr_32038_32085 = state_32032__$1;
(statearr_32038_32085[(1)] = (2));

} else {
var statearr_32039_32086 = state_32032__$1;
(statearr_32039_32086[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (24))){
var inst_32024 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32040_32087 = state_32032__$1;
(statearr_32040_32087[(2)] = inst_32024);

(statearr_32040_32087[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (4))){
var inst_32030 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32032__$1,inst_32030);
} else {
if((state_val_32033 === (15))){
var inst_32028 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32041_32088 = state_32032__$1;
(statearr_32041_32088[(2)] = inst_32028);

(statearr_32041_32088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (21))){
var inst_31981 = (state_32032[(2)]);
var inst_31982 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31983 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31982);
var state_32032__$1 = (function (){var statearr_32042 = state_32032;
(statearr_32042[(7)] = inst_31981);

return statearr_32042;
})();
var statearr_32043_32089 = state_32032__$1;
(statearr_32043_32089[(2)] = inst_31983);

(statearr_32043_32089[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (31))){
var inst_32011 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_32011)){
var statearr_32044_32090 = state_32032__$1;
(statearr_32044_32090[(1)] = (34));

} else {
var statearr_32045_32091 = state_32032__$1;
(statearr_32045_32091[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (32))){
var inst_32020 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32046_32092 = state_32032__$1;
(statearr_32046_32092[(2)] = inst_32020);

(statearr_32046_32092[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (33))){
var inst_32007 = (state_32032[(2)]);
var inst_32008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32009 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32008);
var state_32032__$1 = (function (){var statearr_32047 = state_32032;
(statearr_32047[(8)] = inst_32007);

return statearr_32047;
})();
var statearr_32048_32093 = state_32032__$1;
(statearr_32048_32093[(2)] = inst_32009);

(statearr_32048_32093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (13))){
var inst_31966 = figwheel.client.heads_up.clear.call(null);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(16),inst_31966);
} else {
if((state_val_32033 === (22))){
var inst_31987 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31988 = figwheel.client.heads_up.append_warning_message.call(null,inst_31987);
var state_32032__$1 = state_32032;
var statearr_32049_32094 = state_32032__$1;
(statearr_32049_32094[(2)] = inst_31988);

(statearr_32049_32094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (36))){
var inst_32018 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32050_32095 = state_32032__$1;
(statearr_32050_32095[(2)] = inst_32018);

(statearr_32050_32095[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (29))){
var inst_31998 = (state_32032[(2)]);
var inst_31999 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32000 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31999);
var state_32032__$1 = (function (){var statearr_32051 = state_32032;
(statearr_32051[(9)] = inst_31998);

return statearr_32051;
})();
var statearr_32052_32096 = state_32032__$1;
(statearr_32052_32096[(2)] = inst_32000);

(statearr_32052_32096[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (6))){
var inst_31947 = (state_32032[(10)]);
var state_32032__$1 = state_32032;
var statearr_32053_32097 = state_32032__$1;
(statearr_32053_32097[(2)] = inst_31947);

(statearr_32053_32097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (28))){
var inst_31994 = (state_32032[(2)]);
var inst_31995 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31996 = figwheel.client.heads_up.display_warning.call(null,inst_31995);
var state_32032__$1 = (function (){var statearr_32054 = state_32032;
(statearr_32054[(11)] = inst_31994);

return statearr_32054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(29),inst_31996);
} else {
if((state_val_32033 === (25))){
var inst_31992 = figwheel.client.heads_up.clear.call(null);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(28),inst_31992);
} else {
if((state_val_32033 === (34))){
var inst_32013 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(37),inst_32013);
} else {
if((state_val_32033 === (17))){
var inst_31972 = (state_32032[(2)]);
var inst_31973 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31974 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31973);
var state_32032__$1 = (function (){var statearr_32055 = state_32032;
(statearr_32055[(12)] = inst_31972);

return statearr_32055;
})();
var statearr_32056_32098 = state_32032__$1;
(statearr_32056_32098[(2)] = inst_31974);

(statearr_32056_32098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (3))){
var inst_31964 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31964)){
var statearr_32057_32099 = state_32032__$1;
(statearr_32057_32099[(1)] = (13));

} else {
var statearr_32058_32100 = state_32032__$1;
(statearr_32058_32100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (12))){
var inst_31960 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32059_32101 = state_32032__$1;
(statearr_32059_32101[(2)] = inst_31960);

(statearr_32059_32101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (2))){
var inst_31947 = (state_32032[(10)]);
var inst_31947__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32032__$1 = (function (){var statearr_32060 = state_32032;
(statearr_32060[(10)] = inst_31947__$1);

return statearr_32060;
})();
if(cljs.core.truth_(inst_31947__$1)){
var statearr_32061_32102 = state_32032__$1;
(statearr_32061_32102[(1)] = (5));

} else {
var statearr_32062_32103 = state_32032__$1;
(statearr_32062_32103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (23))){
var inst_31990 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31990)){
var statearr_32063_32104 = state_32032__$1;
(statearr_32063_32104[(1)] = (25));

} else {
var statearr_32064_32105 = state_32032__$1;
(statearr_32064_32105[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (35))){
var state_32032__$1 = state_32032;
var statearr_32065_32106 = state_32032__$1;
(statearr_32065_32106[(2)] = null);

(statearr_32065_32106[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (19))){
var inst_31985 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31985)){
var statearr_32066_32107 = state_32032__$1;
(statearr_32066_32107[(1)] = (22));

} else {
var statearr_32067_32108 = state_32032__$1;
(statearr_32067_32108[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (11))){
var inst_31956 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32068_32109 = state_32032__$1;
(statearr_32068_32109[(2)] = inst_31956);

(statearr_32068_32109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (9))){
var inst_31958 = figwheel.client.heads_up.clear.call(null);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(12),inst_31958);
} else {
if((state_val_32033 === (5))){
var inst_31949 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32032__$1 = state_32032;
var statearr_32069_32110 = state_32032__$1;
(statearr_32069_32110[(2)] = inst_31949);

(statearr_32069_32110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (14))){
var inst_31976 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_31976)){
var statearr_32070_32111 = state_32032__$1;
(statearr_32070_32111[(1)] = (18));

} else {
var statearr_32071_32112 = state_32032__$1;
(statearr_32071_32112[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (26))){
var inst_32002 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32032__$1 = state_32032;
if(cljs.core.truth_(inst_32002)){
var statearr_32072_32113 = state_32032__$1;
(statearr_32072_32113[(1)] = (30));

} else {
var statearr_32073_32114 = state_32032__$1;
(statearr_32073_32114[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (16))){
var inst_31968 = (state_32032[(2)]);
var inst_31969 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31970 = figwheel.client.heads_up.display_exception.call(null,inst_31969);
var state_32032__$1 = (function (){var statearr_32074 = state_32032;
(statearr_32074[(13)] = inst_31968);

return statearr_32074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(17),inst_31970);
} else {
if((state_val_32033 === (30))){
var inst_32004 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32005 = figwheel.client.heads_up.display_warning.call(null,inst_32004);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(33),inst_32005);
} else {
if((state_val_32033 === (10))){
var inst_31962 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32075_32115 = state_32032__$1;
(statearr_32075_32115[(2)] = inst_31962);

(statearr_32075_32115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (18))){
var inst_31978 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31979 = figwheel.client.heads_up.display_exception.call(null,inst_31978);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(21),inst_31979);
} else {
if((state_val_32033 === (37))){
var inst_32015 = (state_32032[(2)]);
var state_32032__$1 = state_32032;
var statearr_32076_32116 = state_32032__$1;
(statearr_32076_32116[(2)] = inst_32015);

(statearr_32076_32116[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32033 === (8))){
var inst_31954 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32032__$1,(11),inst_31954);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28110__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28020__auto__,c__28110__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto____0 = (function (){
var statearr_32077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32077[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto__);

(statearr_32077[(1)] = (1));

return statearr_32077;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto____1 = (function (state_32032){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_32032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e32078){if((e32078 instanceof Object)){
var ex__28024__auto__ = e32078;
var statearr_32079_32117 = state_32032;
(statearr_32079_32117[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32118 = state_32032;
state_32032 = G__32118;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto__ = function(state_32032){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto____1.call(this,state_32032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__,msg_hist,msg_names,msg))
})();
var state__28112__auto__ = (function (){var statearr_32080 = f__28111__auto__.call(null);
(statearr_32080[(6)] = c__28110__auto__);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__,msg_hist,msg_names,msg))
);

return c__28110__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28110__auto___32147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___32147,ch){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___32147,ch){
return (function (state_32133){
var state_val_32134 = (state_32133[(1)]);
if((state_val_32134 === (1))){
var state_32133__$1 = state_32133;
var statearr_32135_32148 = state_32133__$1;
(statearr_32135_32148[(2)] = null);

(statearr_32135_32148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (2))){
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32133__$1,(4),ch);
} else {
if((state_val_32134 === (3))){
var inst_32131 = (state_32133[(2)]);
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32133__$1,inst_32131);
} else {
if((state_val_32134 === (4))){
var inst_32121 = (state_32133[(7)]);
var inst_32121__$1 = (state_32133[(2)]);
var state_32133__$1 = (function (){var statearr_32136 = state_32133;
(statearr_32136[(7)] = inst_32121__$1);

return statearr_32136;
})();
if(cljs.core.truth_(inst_32121__$1)){
var statearr_32137_32149 = state_32133__$1;
(statearr_32137_32149[(1)] = (5));

} else {
var statearr_32138_32150 = state_32133__$1;
(statearr_32138_32150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (5))){
var inst_32121 = (state_32133[(7)]);
var inst_32123 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32121);
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32133__$1,(8),inst_32123);
} else {
if((state_val_32134 === (6))){
var state_32133__$1 = state_32133;
var statearr_32139_32151 = state_32133__$1;
(statearr_32139_32151[(2)] = null);

(statearr_32139_32151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (7))){
var inst_32129 = (state_32133[(2)]);
var state_32133__$1 = state_32133;
var statearr_32140_32152 = state_32133__$1;
(statearr_32140_32152[(2)] = inst_32129);

(statearr_32140_32152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32134 === (8))){
var inst_32125 = (state_32133[(2)]);
var state_32133__$1 = (function (){var statearr_32141 = state_32133;
(statearr_32141[(8)] = inst_32125);

return statearr_32141;
})();
var statearr_32142_32153 = state_32133__$1;
(statearr_32142_32153[(2)] = null);

(statearr_32142_32153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28110__auto___32147,ch))
;
return ((function (switch__28020__auto__,c__28110__auto___32147,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28021__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28021__auto____0 = (function (){
var statearr_32143 = [null,null,null,null,null,null,null,null,null];
(statearr_32143[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28021__auto__);

(statearr_32143[(1)] = (1));

return statearr_32143;
});
var figwheel$client$heads_up_plugin_$_state_machine__28021__auto____1 = (function (state_32133){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_32133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e32144){if((e32144 instanceof Object)){
var ex__28024__auto__ = e32144;
var statearr_32145_32154 = state_32133;
(statearr_32145_32154[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32155 = state_32133;
state_32133 = G__32155;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28021__auto__ = function(state_32133){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28021__auto____1.call(this,state_32133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28021__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28021__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___32147,ch))
})();
var state__28112__auto__ = (function (){var statearr_32146 = f__28111__auto__.call(null);
(statearr_32146[(6)] = c__28110__auto___32147);

return statearr_32146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___32147,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__){
return (function (state_32161){
var state_val_32162 = (state_32161[(1)]);
if((state_val_32162 === (1))){
var inst_32156 = cljs.core.async.timeout.call(null,(3000));
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32161__$1,(2),inst_32156);
} else {
if((state_val_32162 === (2))){
var inst_32158 = (state_32161[(2)]);
var inst_32159 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32161__$1 = (function (){var statearr_32163 = state_32161;
(statearr_32163[(7)] = inst_32158);

return statearr_32163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32161__$1,inst_32159);
} else {
return null;
}
}
});})(c__28110__auto__))
;
return ((function (switch__28020__auto__,c__28110__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28021__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28021__auto____0 = (function (){
var statearr_32164 = [null,null,null,null,null,null,null,null];
(statearr_32164[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28021__auto__);

(statearr_32164[(1)] = (1));

return statearr_32164;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28021__auto____1 = (function (state_32161){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_32161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e32165){if((e32165 instanceof Object)){
var ex__28024__auto__ = e32165;
var statearr_32166_32168 = state_32161;
(statearr_32166_32168[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32169 = state_32161;
state_32161 = G__32169;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28021__auto__ = function(state_32161){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28021__auto____1.call(this,state_32161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28021__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28021__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__))
})();
var state__28112__auto__ = (function (){var statearr_32167 = f__28111__auto__.call(null);
(statearr_32167[(6)] = c__28110__auto__);

return statearr_32167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__))
);

return c__28110__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32176){
var state_val_32177 = (state_32176[(1)]);
if((state_val_32177 === (1))){
var inst_32170 = cljs.core.async.timeout.call(null,(2000));
var state_32176__$1 = state_32176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32176__$1,(2),inst_32170);
} else {
if((state_val_32177 === (2))){
var inst_32172 = (state_32176[(2)]);
var inst_32173 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32174 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32173);
var state_32176__$1 = (function (){var statearr_32178 = state_32176;
(statearr_32178[(7)] = inst_32172);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32176__$1,inst_32174);
} else {
return null;
}
}
});})(c__28110__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28020__auto__,c__28110__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto____0 = (function (){
var statearr_32179 = [null,null,null,null,null,null,null,null];
(statearr_32179[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto__);

(statearr_32179[(1)] = (1));

return statearr_32179;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto____1 = (function (state_32176){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_32176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e32180){if((e32180 instanceof Object)){
var ex__28024__auto__ = e32180;
var statearr_32181_32183 = state_32176;
(statearr_32181_32183[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32184 = state_32176;
state_32176 = G__32184;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto__ = function(state_32176){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto____1.call(this,state_32176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28112__auto__ = (function (){var statearr_32182 = f__28111__auto__.call(null);
(statearr_32182[(6)] = c__28110__auto__);

return statearr_32182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__,figwheel_version,temp__5457__auto__))
);

return c__28110__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32185){
var map__32186 = p__32185;
var map__32186__$1 = ((((!((map__32186 == null)))?(((((map__32186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32186):map__32186);
var file = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32188 = "";
var G__32188__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32188),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32188);
var G__32188__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32188__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32188__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32188__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32188__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32189){
var map__32190 = p__32189;
var map__32190__$1 = ((((!((map__32190 == null)))?(((((map__32190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32190):map__32190);
var ed = map__32190__$1;
var formatted_exception = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32192_32196 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32193_32197 = null;
var count__32194_32198 = (0);
var i__32195_32199 = (0);
while(true){
if((i__32195_32199 < count__32194_32198)){
var msg_32200 = cljs.core._nth.call(null,chunk__32193_32197,i__32195_32199);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32200);


var G__32201 = seq__32192_32196;
var G__32202 = chunk__32193_32197;
var G__32203 = count__32194_32198;
var G__32204 = (i__32195_32199 + (1));
seq__32192_32196 = G__32201;
chunk__32193_32197 = G__32202;
count__32194_32198 = G__32203;
i__32195_32199 = G__32204;
continue;
} else {
var temp__5457__auto___32205 = cljs.core.seq.call(null,seq__32192_32196);
if(temp__5457__auto___32205){
var seq__32192_32206__$1 = temp__5457__auto___32205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32192_32206__$1)){
var c__4319__auto___32207 = cljs.core.chunk_first.call(null,seq__32192_32206__$1);
var G__32208 = cljs.core.chunk_rest.call(null,seq__32192_32206__$1);
var G__32209 = c__4319__auto___32207;
var G__32210 = cljs.core.count.call(null,c__4319__auto___32207);
var G__32211 = (0);
seq__32192_32196 = G__32208;
chunk__32193_32197 = G__32209;
count__32194_32198 = G__32210;
i__32195_32199 = G__32211;
continue;
} else {
var msg_32212 = cljs.core.first.call(null,seq__32192_32206__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32212);


var G__32213 = cljs.core.next.call(null,seq__32192_32206__$1);
var G__32214 = null;
var G__32215 = (0);
var G__32216 = (0);
seq__32192_32196 = G__32213;
chunk__32193_32197 = G__32214;
count__32194_32198 = G__32215;
i__32195_32199 = G__32216;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32217){
var map__32218 = p__32217;
var map__32218__$1 = ((((!((map__32218 == null)))?(((((map__32218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32218):map__32218);
var w = map__32218__$1;
var message = cljs.core.get.call(null,map__32218__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32220 = cljs.core.seq.call(null,plugins);
var chunk__32221 = null;
var count__32222 = (0);
var i__32223 = (0);
while(true){
if((i__32223 < count__32222)){
var vec__32224 = cljs.core._nth.call(null,chunk__32221,i__32223);
var k = cljs.core.nth.call(null,vec__32224,(0),null);
var plugin = cljs.core.nth.call(null,vec__32224,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32230 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32220,chunk__32221,count__32222,i__32223,pl_32230,vec__32224,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32230.call(null,msg_hist);
});})(seq__32220,chunk__32221,count__32222,i__32223,pl_32230,vec__32224,k,plugin))
);
} else {
}


var G__32231 = seq__32220;
var G__32232 = chunk__32221;
var G__32233 = count__32222;
var G__32234 = (i__32223 + (1));
seq__32220 = G__32231;
chunk__32221 = G__32232;
count__32222 = G__32233;
i__32223 = G__32234;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32220);
if(temp__5457__auto__){
var seq__32220__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32220__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32220__$1);
var G__32235 = cljs.core.chunk_rest.call(null,seq__32220__$1);
var G__32236 = c__4319__auto__;
var G__32237 = cljs.core.count.call(null,c__4319__auto__);
var G__32238 = (0);
seq__32220 = G__32235;
chunk__32221 = G__32236;
count__32222 = G__32237;
i__32223 = G__32238;
continue;
} else {
var vec__32227 = cljs.core.first.call(null,seq__32220__$1);
var k = cljs.core.nth.call(null,vec__32227,(0),null);
var plugin = cljs.core.nth.call(null,vec__32227,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32220,chunk__32221,count__32222,i__32223,pl_32239,vec__32227,k,plugin,seq__32220__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32239.call(null,msg_hist);
});})(seq__32220,chunk__32221,count__32222,i__32223,pl_32239,vec__32227,k,plugin,seq__32220__$1,temp__5457__auto__))
);
} else {
}


var G__32240 = cljs.core.next.call(null,seq__32220__$1);
var G__32241 = null;
var G__32242 = (0);
var G__32243 = (0);
seq__32220 = G__32240;
chunk__32221 = G__32241;
count__32222 = G__32242;
i__32223 = G__32243;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32245 = arguments.length;
switch (G__32245) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32246_32251 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32247_32252 = null;
var count__32248_32253 = (0);
var i__32249_32254 = (0);
while(true){
if((i__32249_32254 < count__32248_32253)){
var msg_32255 = cljs.core._nth.call(null,chunk__32247_32252,i__32249_32254);
figwheel.client.socket.handle_incoming_message.call(null,msg_32255);


var G__32256 = seq__32246_32251;
var G__32257 = chunk__32247_32252;
var G__32258 = count__32248_32253;
var G__32259 = (i__32249_32254 + (1));
seq__32246_32251 = G__32256;
chunk__32247_32252 = G__32257;
count__32248_32253 = G__32258;
i__32249_32254 = G__32259;
continue;
} else {
var temp__5457__auto___32260 = cljs.core.seq.call(null,seq__32246_32251);
if(temp__5457__auto___32260){
var seq__32246_32261__$1 = temp__5457__auto___32260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32246_32261__$1)){
var c__4319__auto___32262 = cljs.core.chunk_first.call(null,seq__32246_32261__$1);
var G__32263 = cljs.core.chunk_rest.call(null,seq__32246_32261__$1);
var G__32264 = c__4319__auto___32262;
var G__32265 = cljs.core.count.call(null,c__4319__auto___32262);
var G__32266 = (0);
seq__32246_32251 = G__32263;
chunk__32247_32252 = G__32264;
count__32248_32253 = G__32265;
i__32249_32254 = G__32266;
continue;
} else {
var msg_32267 = cljs.core.first.call(null,seq__32246_32261__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32267);


var G__32268 = cljs.core.next.call(null,seq__32246_32261__$1);
var G__32269 = null;
var G__32270 = (0);
var G__32271 = (0);
seq__32246_32251 = G__32268;
chunk__32247_32252 = G__32269;
count__32248_32253 = G__32270;
i__32249_32254 = G__32271;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32276 = arguments.length;
var i__4500__auto___32277 = (0);
while(true){
if((i__4500__auto___32277 < len__4499__auto___32276)){
args__4502__auto__.push((arguments[i__4500__auto___32277]));

var G__32278 = (i__4500__auto___32277 + (1));
i__4500__auto___32277 = G__32278;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32273){
var map__32274 = p__32273;
var map__32274__$1 = ((((!((map__32274 == null)))?(((((map__32274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32274):map__32274);
var opts = map__32274__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32272){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32272));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32279){if((e32279 instanceof Error)){
var e = e32279;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32279;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32280){
var map__32281 = p__32280;
var map__32281__$1 = ((((!((map__32281 == null)))?(((((map__32281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32281):map__32281);
var msg_name = cljs.core.get.call(null,map__32281__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1527842023262
