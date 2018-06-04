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
}catch (e40114){if((e40114 instanceof Error)){
var e = e40114;
return "Error: Unable to stringify";
} else {
throw e40114;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40117 = arguments.length;
switch (G__40117) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40115_SHARP_){
if(typeof p1__40115_SHARP_ === 'string'){
return p1__40115_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40115_SHARP_);
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
var len__4499__auto___40120 = arguments.length;
var i__4500__auto___40121 = (0);
while(true){
if((i__4500__auto___40121 < len__4499__auto___40120)){
args__4502__auto__.push((arguments[i__4500__auto___40121]));

var G__40122 = (i__4500__auto___40121 + (1));
i__4500__auto___40121 = G__40122;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40119){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40119));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40124 = arguments.length;
var i__4500__auto___40125 = (0);
while(true){
if((i__4500__auto___40125 < len__4499__auto___40124)){
args__4502__auto__.push((arguments[i__4500__auto___40125]));

var G__40126 = (i__4500__auto___40125 + (1));
i__4500__auto___40125 = G__40126;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40123){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40123));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40127){
var map__40128 = p__40127;
var map__40128__$1 = ((((!((map__40128 == null)))?(((((map__40128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40128):map__40128);
var message = cljs.core.get.call(null,map__40128__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40128__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32549__auto___40207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___40207,ch){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___40207,ch){
return (function (state_40179){
var state_val_40180 = (state_40179[(1)]);
if((state_val_40180 === (7))){
var inst_40175 = (state_40179[(2)]);
var state_40179__$1 = state_40179;
var statearr_40181_40208 = state_40179__$1;
(statearr_40181_40208[(2)] = inst_40175);

(statearr_40181_40208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (1))){
var state_40179__$1 = state_40179;
var statearr_40182_40209 = state_40179__$1;
(statearr_40182_40209[(2)] = null);

(statearr_40182_40209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (4))){
var inst_40132 = (state_40179[(7)]);
var inst_40132__$1 = (state_40179[(2)]);
var state_40179__$1 = (function (){var statearr_40183 = state_40179;
(statearr_40183[(7)] = inst_40132__$1);

return statearr_40183;
})();
if(cljs.core.truth_(inst_40132__$1)){
var statearr_40184_40210 = state_40179__$1;
(statearr_40184_40210[(1)] = (5));

} else {
var statearr_40185_40211 = state_40179__$1;
(statearr_40185_40211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (15))){
var inst_40139 = (state_40179[(8)]);
var inst_40154 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40139);
var inst_40155 = cljs.core.first.call(null,inst_40154);
var inst_40156 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40155);
var inst_40157 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40156)].join('');
var inst_40158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40157);
var state_40179__$1 = state_40179;
var statearr_40186_40212 = state_40179__$1;
(statearr_40186_40212[(2)] = inst_40158);

(statearr_40186_40212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (13))){
var inst_40163 = (state_40179[(2)]);
var state_40179__$1 = state_40179;
var statearr_40187_40213 = state_40179__$1;
(statearr_40187_40213[(2)] = inst_40163);

(statearr_40187_40213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (6))){
var state_40179__$1 = state_40179;
var statearr_40188_40214 = state_40179__$1;
(statearr_40188_40214[(2)] = null);

(statearr_40188_40214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (17))){
var inst_40161 = (state_40179[(2)]);
var state_40179__$1 = state_40179;
var statearr_40189_40215 = state_40179__$1;
(statearr_40189_40215[(2)] = inst_40161);

(statearr_40189_40215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (3))){
var inst_40177 = (state_40179[(2)]);
var state_40179__$1 = state_40179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40179__$1,inst_40177);
} else {
if((state_val_40180 === (12))){
var inst_40138 = (state_40179[(9)]);
var inst_40152 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40138,opts);
var state_40179__$1 = state_40179;
if(cljs.core.truth_(inst_40152)){
var statearr_40190_40216 = state_40179__$1;
(statearr_40190_40216[(1)] = (15));

} else {
var statearr_40191_40217 = state_40179__$1;
(statearr_40191_40217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (2))){
var state_40179__$1 = state_40179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40179__$1,(4),ch);
} else {
if((state_val_40180 === (11))){
var inst_40139 = (state_40179[(8)]);
var inst_40144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40145 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40139);
var inst_40146 = cljs.core.async.timeout.call(null,(1000));
var inst_40147 = [inst_40145,inst_40146];
var inst_40148 = (new cljs.core.PersistentVector(null,2,(5),inst_40144,inst_40147,null));
var state_40179__$1 = state_40179;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40179__$1,(14),inst_40148);
} else {
if((state_val_40180 === (9))){
var inst_40139 = (state_40179[(8)]);
var inst_40165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40166 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40139);
var inst_40167 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40166);
var inst_40168 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40167)].join('');
var inst_40169 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40168);
var state_40179__$1 = (function (){var statearr_40192 = state_40179;
(statearr_40192[(10)] = inst_40165);

return statearr_40192;
})();
var statearr_40193_40218 = state_40179__$1;
(statearr_40193_40218[(2)] = inst_40169);

(statearr_40193_40218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (5))){
var inst_40132 = (state_40179[(7)]);
var inst_40134 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40135 = (new cljs.core.PersistentArrayMap(null,2,inst_40134,null));
var inst_40136 = (new cljs.core.PersistentHashSet(null,inst_40135,null));
var inst_40137 = figwheel.client.focus_msgs.call(null,inst_40136,inst_40132);
var inst_40138 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40137);
var inst_40139 = cljs.core.first.call(null,inst_40137);
var inst_40140 = figwheel.client.autoload_QMARK_.call(null);
var state_40179__$1 = (function (){var statearr_40194 = state_40179;
(statearr_40194[(8)] = inst_40139);

(statearr_40194[(9)] = inst_40138);

return statearr_40194;
})();
if(cljs.core.truth_(inst_40140)){
var statearr_40195_40219 = state_40179__$1;
(statearr_40195_40219[(1)] = (8));

} else {
var statearr_40196_40220 = state_40179__$1;
(statearr_40196_40220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (14))){
var inst_40150 = (state_40179[(2)]);
var state_40179__$1 = state_40179;
var statearr_40197_40221 = state_40179__$1;
(statearr_40197_40221[(2)] = inst_40150);

(statearr_40197_40221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (16))){
var state_40179__$1 = state_40179;
var statearr_40198_40222 = state_40179__$1;
(statearr_40198_40222[(2)] = null);

(statearr_40198_40222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (10))){
var inst_40171 = (state_40179[(2)]);
var state_40179__$1 = (function (){var statearr_40199 = state_40179;
(statearr_40199[(11)] = inst_40171);

return statearr_40199;
})();
var statearr_40200_40223 = state_40179__$1;
(statearr_40200_40223[(2)] = null);

(statearr_40200_40223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40180 === (8))){
var inst_40138 = (state_40179[(9)]);
var inst_40142 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40138,opts);
var state_40179__$1 = state_40179;
if(cljs.core.truth_(inst_40142)){
var statearr_40201_40224 = state_40179__$1;
(statearr_40201_40224[(1)] = (11));

} else {
var statearr_40202_40225 = state_40179__$1;
(statearr_40202_40225[(1)] = (12));

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
});})(c__32549__auto___40207,ch))
;
return ((function (switch__32392__auto__,c__32549__auto___40207,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32393__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32393__auto____0 = (function (){
var statearr_40203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40203[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32393__auto__);

(statearr_40203[(1)] = (1));

return statearr_40203;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32393__auto____1 = (function (state_40179){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_40179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e40204){if((e40204 instanceof Object)){
var ex__32396__auto__ = e40204;
var statearr_40205_40226 = state_40179;
(statearr_40205_40226[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40227 = state_40179;
state_40179 = G__40227;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32393__auto__ = function(state_40179){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32393__auto____1.call(this,state_40179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32393__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32393__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___40207,ch))
})();
var state__32551__auto__ = (function (){var statearr_40206 = f__32550__auto__.call(null);
(statearr_40206[(6)] = c__32549__auto___40207);

return statearr_40206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___40207,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40228_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40228_SHARP_));
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
var base_path_40232 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40232){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40231 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40230,_STAR_print_fn_STAR_40231,sb,base_path_40232){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_40230,_STAR_print_fn_STAR_40231,sb,base_path_40232))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40231;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40230;
}}catch (e40229){if((e40229 instanceof Error)){
var e = e40229;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40232], null));
} else {
var e = e40229;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40232))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40233){
var map__40234 = p__40233;
var map__40234__$1 = ((((!((map__40234 == null)))?(((((map__40234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40234):map__40234);
var opts = map__40234__$1;
var build_id = cljs.core.get.call(null,map__40234__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40234,map__40234__$1,opts,build_id){
return (function (p__40236){
var vec__40237 = p__40236;
var seq__40238 = cljs.core.seq.call(null,vec__40237);
var first__40239 = cljs.core.first.call(null,seq__40238);
var seq__40238__$1 = cljs.core.next.call(null,seq__40238);
var map__40240 = first__40239;
var map__40240__$1 = ((((!((map__40240 == null)))?(((((map__40240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40240):map__40240);
var msg = map__40240__$1;
var msg_name = cljs.core.get.call(null,map__40240__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40238__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40237,seq__40238,first__40239,seq__40238__$1,map__40240,map__40240__$1,msg,msg_name,_,map__40234,map__40234__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40237,seq__40238,first__40239,seq__40238__$1,map__40240,map__40240__$1,msg,msg_name,_,map__40234,map__40234__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40234,map__40234__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40242){
var vec__40243 = p__40242;
var seq__40244 = cljs.core.seq.call(null,vec__40243);
var first__40245 = cljs.core.first.call(null,seq__40244);
var seq__40244__$1 = cljs.core.next.call(null,seq__40244);
var map__40246 = first__40245;
var map__40246__$1 = ((((!((map__40246 == null)))?(((((map__40246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40246):map__40246);
var msg = map__40246__$1;
var msg_name = cljs.core.get.call(null,map__40246__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40244__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40248){
var map__40249 = p__40248;
var map__40249__$1 = ((((!((map__40249 == null)))?(((((map__40249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40249):map__40249);
var on_compile_warning = cljs.core.get.call(null,map__40249__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40249__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40249,map__40249__$1,on_compile_warning,on_compile_fail){
return (function (p__40251){
var vec__40252 = p__40251;
var seq__40253 = cljs.core.seq.call(null,vec__40252);
var first__40254 = cljs.core.first.call(null,seq__40253);
var seq__40253__$1 = cljs.core.next.call(null,seq__40253);
var map__40255 = first__40254;
var map__40255__$1 = ((((!((map__40255 == null)))?(((((map__40255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40255):map__40255);
var msg = map__40255__$1;
var msg_name = cljs.core.get.call(null,map__40255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40253__$1;
var pred__40257 = cljs.core._EQ_;
var expr__40258 = msg_name;
if(cljs.core.truth_(pred__40257.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40258))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40257.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40258))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40249,map__40249__$1,on_compile_warning,on_compile_fail))
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
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__,msg_hist,msg_names,msg){
return (function (state_40347){
var state_val_40348 = (state_40347[(1)]);
if((state_val_40348 === (7))){
var inst_40267 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40267)){
var statearr_40349_40396 = state_40347__$1;
(statearr_40349_40396[(1)] = (8));

} else {
var statearr_40350_40397 = state_40347__$1;
(statearr_40350_40397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (20))){
var inst_40341 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40351_40398 = state_40347__$1;
(statearr_40351_40398[(2)] = inst_40341);

(statearr_40351_40398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (27))){
var inst_40337 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40352_40399 = state_40347__$1;
(statearr_40352_40399[(2)] = inst_40337);

(statearr_40352_40399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (1))){
var inst_40260 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40260)){
var statearr_40353_40400 = state_40347__$1;
(statearr_40353_40400[(1)] = (2));

} else {
var statearr_40354_40401 = state_40347__$1;
(statearr_40354_40401[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (24))){
var inst_40339 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40355_40402 = state_40347__$1;
(statearr_40355_40402[(2)] = inst_40339);

(statearr_40355_40402[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (4))){
var inst_40345 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40347__$1,inst_40345);
} else {
if((state_val_40348 === (15))){
var inst_40343 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40356_40403 = state_40347__$1;
(statearr_40356_40403[(2)] = inst_40343);

(statearr_40356_40403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (21))){
var inst_40296 = (state_40347[(2)]);
var inst_40297 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40298 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40297);
var state_40347__$1 = (function (){var statearr_40357 = state_40347;
(statearr_40357[(7)] = inst_40296);

return statearr_40357;
})();
var statearr_40358_40404 = state_40347__$1;
(statearr_40358_40404[(2)] = inst_40298);

(statearr_40358_40404[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (31))){
var inst_40326 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40326)){
var statearr_40359_40405 = state_40347__$1;
(statearr_40359_40405[(1)] = (34));

} else {
var statearr_40360_40406 = state_40347__$1;
(statearr_40360_40406[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (32))){
var inst_40335 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40361_40407 = state_40347__$1;
(statearr_40361_40407[(2)] = inst_40335);

(statearr_40361_40407[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (33))){
var inst_40322 = (state_40347[(2)]);
var inst_40323 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40324 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40323);
var state_40347__$1 = (function (){var statearr_40362 = state_40347;
(statearr_40362[(8)] = inst_40322);

return statearr_40362;
})();
var statearr_40363_40408 = state_40347__$1;
(statearr_40363_40408[(2)] = inst_40324);

(statearr_40363_40408[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (13))){
var inst_40281 = figwheel.client.heads_up.clear.call(null);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(16),inst_40281);
} else {
if((state_val_40348 === (22))){
var inst_40302 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40303 = figwheel.client.heads_up.append_warning_message.call(null,inst_40302);
var state_40347__$1 = state_40347;
var statearr_40364_40409 = state_40347__$1;
(statearr_40364_40409[(2)] = inst_40303);

(statearr_40364_40409[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (36))){
var inst_40333 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40365_40410 = state_40347__$1;
(statearr_40365_40410[(2)] = inst_40333);

(statearr_40365_40410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (29))){
var inst_40313 = (state_40347[(2)]);
var inst_40314 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40314);
var state_40347__$1 = (function (){var statearr_40366 = state_40347;
(statearr_40366[(9)] = inst_40313);

return statearr_40366;
})();
var statearr_40367_40411 = state_40347__$1;
(statearr_40367_40411[(2)] = inst_40315);

(statearr_40367_40411[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (6))){
var inst_40262 = (state_40347[(10)]);
var state_40347__$1 = state_40347;
var statearr_40368_40412 = state_40347__$1;
(statearr_40368_40412[(2)] = inst_40262);

(statearr_40368_40412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (28))){
var inst_40309 = (state_40347[(2)]);
var inst_40310 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40311 = figwheel.client.heads_up.display_warning.call(null,inst_40310);
var state_40347__$1 = (function (){var statearr_40369 = state_40347;
(statearr_40369[(11)] = inst_40309);

return statearr_40369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(29),inst_40311);
} else {
if((state_val_40348 === (25))){
var inst_40307 = figwheel.client.heads_up.clear.call(null);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(28),inst_40307);
} else {
if((state_val_40348 === (34))){
var inst_40328 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(37),inst_40328);
} else {
if((state_val_40348 === (17))){
var inst_40287 = (state_40347[(2)]);
var inst_40288 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40289 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40288);
var state_40347__$1 = (function (){var statearr_40370 = state_40347;
(statearr_40370[(12)] = inst_40287);

return statearr_40370;
})();
var statearr_40371_40413 = state_40347__$1;
(statearr_40371_40413[(2)] = inst_40289);

(statearr_40371_40413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (3))){
var inst_40279 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40279)){
var statearr_40372_40414 = state_40347__$1;
(statearr_40372_40414[(1)] = (13));

} else {
var statearr_40373_40415 = state_40347__$1;
(statearr_40373_40415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (12))){
var inst_40275 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40374_40416 = state_40347__$1;
(statearr_40374_40416[(2)] = inst_40275);

(statearr_40374_40416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (2))){
var inst_40262 = (state_40347[(10)]);
var inst_40262__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40347__$1 = (function (){var statearr_40375 = state_40347;
(statearr_40375[(10)] = inst_40262__$1);

return statearr_40375;
})();
if(cljs.core.truth_(inst_40262__$1)){
var statearr_40376_40417 = state_40347__$1;
(statearr_40376_40417[(1)] = (5));

} else {
var statearr_40377_40418 = state_40347__$1;
(statearr_40377_40418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (23))){
var inst_40305 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40305)){
var statearr_40378_40419 = state_40347__$1;
(statearr_40378_40419[(1)] = (25));

} else {
var statearr_40379_40420 = state_40347__$1;
(statearr_40379_40420[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (35))){
var state_40347__$1 = state_40347;
var statearr_40380_40421 = state_40347__$1;
(statearr_40380_40421[(2)] = null);

(statearr_40380_40421[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (19))){
var inst_40300 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40300)){
var statearr_40381_40422 = state_40347__$1;
(statearr_40381_40422[(1)] = (22));

} else {
var statearr_40382_40423 = state_40347__$1;
(statearr_40382_40423[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (11))){
var inst_40271 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40383_40424 = state_40347__$1;
(statearr_40383_40424[(2)] = inst_40271);

(statearr_40383_40424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (9))){
var inst_40273 = figwheel.client.heads_up.clear.call(null);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(12),inst_40273);
} else {
if((state_val_40348 === (5))){
var inst_40264 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40347__$1 = state_40347;
var statearr_40384_40425 = state_40347__$1;
(statearr_40384_40425[(2)] = inst_40264);

(statearr_40384_40425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (14))){
var inst_40291 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40291)){
var statearr_40385_40426 = state_40347__$1;
(statearr_40385_40426[(1)] = (18));

} else {
var statearr_40386_40427 = state_40347__$1;
(statearr_40386_40427[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (26))){
var inst_40317 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40317)){
var statearr_40387_40428 = state_40347__$1;
(statearr_40387_40428[(1)] = (30));

} else {
var statearr_40388_40429 = state_40347__$1;
(statearr_40388_40429[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (16))){
var inst_40283 = (state_40347[(2)]);
var inst_40284 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40285 = figwheel.client.heads_up.display_exception.call(null,inst_40284);
var state_40347__$1 = (function (){var statearr_40389 = state_40347;
(statearr_40389[(13)] = inst_40283);

return statearr_40389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(17),inst_40285);
} else {
if((state_val_40348 === (30))){
var inst_40319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40320 = figwheel.client.heads_up.display_warning.call(null,inst_40319);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(33),inst_40320);
} else {
if((state_val_40348 === (10))){
var inst_40277 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40390_40430 = state_40347__$1;
(statearr_40390_40430[(2)] = inst_40277);

(statearr_40390_40430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (18))){
var inst_40293 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40294 = figwheel.client.heads_up.display_exception.call(null,inst_40293);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(21),inst_40294);
} else {
if((state_val_40348 === (37))){
var inst_40330 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40391_40431 = state_40347__$1;
(statearr_40391_40431[(2)] = inst_40330);

(statearr_40391_40431[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (8))){
var inst_40269 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(11),inst_40269);
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
});})(c__32549__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32392__auto__,c__32549__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto____0 = (function (){
var statearr_40392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40392[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto__);

(statearr_40392[(1)] = (1));

return statearr_40392;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto____1 = (function (state_40347){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_40347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e40393){if((e40393 instanceof Object)){
var ex__32396__auto__ = e40393;
var statearr_40394_40432 = state_40347;
(statearr_40394_40432[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40433 = state_40347;
state_40347 = G__40433;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto__ = function(state_40347){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto____1.call(this,state_40347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__,msg_hist,msg_names,msg))
})();
var state__32551__auto__ = (function (){var statearr_40395 = f__32550__auto__.call(null);
(statearr_40395[(6)] = c__32549__auto__);

return statearr_40395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__,msg_hist,msg_names,msg))
);

return c__32549__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32549__auto___40462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___40462,ch){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___40462,ch){
return (function (state_40448){
var state_val_40449 = (state_40448[(1)]);
if((state_val_40449 === (1))){
var state_40448__$1 = state_40448;
var statearr_40450_40463 = state_40448__$1;
(statearr_40450_40463[(2)] = null);

(statearr_40450_40463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40449 === (2))){
var state_40448__$1 = state_40448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40448__$1,(4),ch);
} else {
if((state_val_40449 === (3))){
var inst_40446 = (state_40448[(2)]);
var state_40448__$1 = state_40448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40448__$1,inst_40446);
} else {
if((state_val_40449 === (4))){
var inst_40436 = (state_40448[(7)]);
var inst_40436__$1 = (state_40448[(2)]);
var state_40448__$1 = (function (){var statearr_40451 = state_40448;
(statearr_40451[(7)] = inst_40436__$1);

return statearr_40451;
})();
if(cljs.core.truth_(inst_40436__$1)){
var statearr_40452_40464 = state_40448__$1;
(statearr_40452_40464[(1)] = (5));

} else {
var statearr_40453_40465 = state_40448__$1;
(statearr_40453_40465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40449 === (5))){
var inst_40436 = (state_40448[(7)]);
var inst_40438 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40436);
var state_40448__$1 = state_40448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40448__$1,(8),inst_40438);
} else {
if((state_val_40449 === (6))){
var state_40448__$1 = state_40448;
var statearr_40454_40466 = state_40448__$1;
(statearr_40454_40466[(2)] = null);

(statearr_40454_40466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40449 === (7))){
var inst_40444 = (state_40448[(2)]);
var state_40448__$1 = state_40448;
var statearr_40455_40467 = state_40448__$1;
(statearr_40455_40467[(2)] = inst_40444);

(statearr_40455_40467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40449 === (8))){
var inst_40440 = (state_40448[(2)]);
var state_40448__$1 = (function (){var statearr_40456 = state_40448;
(statearr_40456[(8)] = inst_40440);

return statearr_40456;
})();
var statearr_40457_40468 = state_40448__$1;
(statearr_40457_40468[(2)] = null);

(statearr_40457_40468[(1)] = (2));


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
});})(c__32549__auto___40462,ch))
;
return ((function (switch__32392__auto__,c__32549__auto___40462,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32393__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32393__auto____0 = (function (){
var statearr_40458 = [null,null,null,null,null,null,null,null,null];
(statearr_40458[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32393__auto__);

(statearr_40458[(1)] = (1));

return statearr_40458;
});
var figwheel$client$heads_up_plugin_$_state_machine__32393__auto____1 = (function (state_40448){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_40448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e40459){if((e40459 instanceof Object)){
var ex__32396__auto__ = e40459;
var statearr_40460_40469 = state_40448;
(statearr_40460_40469[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40470 = state_40448;
state_40448 = G__40470;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32393__auto__ = function(state_40448){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32393__auto____1.call(this,state_40448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32393__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32393__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___40462,ch))
})();
var state__32551__auto__ = (function (){var statearr_40461 = f__32550__auto__.call(null);
(statearr_40461[(6)] = c__32549__auto___40462);

return statearr_40461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___40462,ch))
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
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__){
return (function (state_40476){
var state_val_40477 = (state_40476[(1)]);
if((state_val_40477 === (1))){
var inst_40471 = cljs.core.async.timeout.call(null,(3000));
var state_40476__$1 = state_40476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40476__$1,(2),inst_40471);
} else {
if((state_val_40477 === (2))){
var inst_40473 = (state_40476[(2)]);
var inst_40474 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40476__$1 = (function (){var statearr_40478 = state_40476;
(statearr_40478[(7)] = inst_40473);

return statearr_40478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40476__$1,inst_40474);
} else {
return null;
}
}
});})(c__32549__auto__))
;
return ((function (switch__32392__auto__,c__32549__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32393__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32393__auto____0 = (function (){
var statearr_40479 = [null,null,null,null,null,null,null,null];
(statearr_40479[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32393__auto__);

(statearr_40479[(1)] = (1));

return statearr_40479;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32393__auto____1 = (function (state_40476){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_40476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e40480){if((e40480 instanceof Object)){
var ex__32396__auto__ = e40480;
var statearr_40481_40483 = state_40476;
(statearr_40481_40483[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40484 = state_40476;
state_40476 = G__40484;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32393__auto__ = function(state_40476){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32393__auto____1.call(this,state_40476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32393__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32393__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__))
})();
var state__32551__auto__ = (function (){var statearr_40482 = f__32550__auto__.call(null);
(statearr_40482[(6)] = c__32549__auto__);

return statearr_40482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__))
);

return c__32549__auto__;
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
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__,figwheel_version,temp__5457__auto__){
return (function (state_40491){
var state_val_40492 = (state_40491[(1)]);
if((state_val_40492 === (1))){
var inst_40485 = cljs.core.async.timeout.call(null,(2000));
var state_40491__$1 = state_40491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40491__$1,(2),inst_40485);
} else {
if((state_val_40492 === (2))){
var inst_40487 = (state_40491[(2)]);
var inst_40488 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40489 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40488);
var state_40491__$1 = (function (){var statearr_40493 = state_40491;
(statearr_40493[(7)] = inst_40487);

return statearr_40493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40491__$1,inst_40489);
} else {
return null;
}
}
});})(c__32549__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__32392__auto__,c__32549__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto____0 = (function (){
var statearr_40494 = [null,null,null,null,null,null,null,null];
(statearr_40494[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto__);

(statearr_40494[(1)] = (1));

return statearr_40494;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto____1 = (function (state_40491){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_40491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e40495){if((e40495 instanceof Object)){
var ex__32396__auto__ = e40495;
var statearr_40496_40498 = state_40491;
(statearr_40496_40498[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40499 = state_40491;
state_40491 = G__40499;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto__ = function(state_40491){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto____1.call(this,state_40491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__,figwheel_version,temp__5457__auto__))
})();
var state__32551__auto__ = (function (){var statearr_40497 = f__32550__auto__.call(null);
(statearr_40497[(6)] = c__32549__auto__);

return statearr_40497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__,figwheel_version,temp__5457__auto__))
);

return c__32549__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40500){
var map__40501 = p__40500;
var map__40501__$1 = ((((!((map__40501 == null)))?(((((map__40501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40501):map__40501);
var file = cljs.core.get.call(null,map__40501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40501__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40501__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40503 = "";
var G__40503__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40503),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40503);
var G__40503__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40503__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40503__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40503__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40503__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40504){
var map__40505 = p__40504;
var map__40505__$1 = ((((!((map__40505 == null)))?(((((map__40505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40505):map__40505);
var ed = map__40505__$1;
var formatted_exception = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40507_40511 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40508_40512 = null;
var count__40509_40513 = (0);
var i__40510_40514 = (0);
while(true){
if((i__40510_40514 < count__40509_40513)){
var msg_40515 = cljs.core._nth.call(null,chunk__40508_40512,i__40510_40514);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40515);


var G__40516 = seq__40507_40511;
var G__40517 = chunk__40508_40512;
var G__40518 = count__40509_40513;
var G__40519 = (i__40510_40514 + (1));
seq__40507_40511 = G__40516;
chunk__40508_40512 = G__40517;
count__40509_40513 = G__40518;
i__40510_40514 = G__40519;
continue;
} else {
var temp__5457__auto___40520 = cljs.core.seq.call(null,seq__40507_40511);
if(temp__5457__auto___40520){
var seq__40507_40521__$1 = temp__5457__auto___40520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40507_40521__$1)){
var c__4319__auto___40522 = cljs.core.chunk_first.call(null,seq__40507_40521__$1);
var G__40523 = cljs.core.chunk_rest.call(null,seq__40507_40521__$1);
var G__40524 = c__4319__auto___40522;
var G__40525 = cljs.core.count.call(null,c__4319__auto___40522);
var G__40526 = (0);
seq__40507_40511 = G__40523;
chunk__40508_40512 = G__40524;
count__40509_40513 = G__40525;
i__40510_40514 = G__40526;
continue;
} else {
var msg_40527 = cljs.core.first.call(null,seq__40507_40521__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40527);


var G__40528 = cljs.core.next.call(null,seq__40507_40521__$1);
var G__40529 = null;
var G__40530 = (0);
var G__40531 = (0);
seq__40507_40511 = G__40528;
chunk__40508_40512 = G__40529;
count__40509_40513 = G__40530;
i__40510_40514 = G__40531;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40532){
var map__40533 = p__40532;
var map__40533__$1 = ((((!((map__40533 == null)))?(((((map__40533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40533):map__40533);
var w = map__40533__$1;
var message = cljs.core.get.call(null,map__40533__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40535 = cljs.core.seq.call(null,plugins);
var chunk__40536 = null;
var count__40537 = (0);
var i__40538 = (0);
while(true){
if((i__40538 < count__40537)){
var vec__40539 = cljs.core._nth.call(null,chunk__40536,i__40538);
var k = cljs.core.nth.call(null,vec__40539,(0),null);
var plugin = cljs.core.nth.call(null,vec__40539,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40545 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40535,chunk__40536,count__40537,i__40538,pl_40545,vec__40539,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40545.call(null,msg_hist);
});})(seq__40535,chunk__40536,count__40537,i__40538,pl_40545,vec__40539,k,plugin))
);
} else {
}


var G__40546 = seq__40535;
var G__40547 = chunk__40536;
var G__40548 = count__40537;
var G__40549 = (i__40538 + (1));
seq__40535 = G__40546;
chunk__40536 = G__40547;
count__40537 = G__40548;
i__40538 = G__40549;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40535);
if(temp__5457__auto__){
var seq__40535__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40535__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__40535__$1);
var G__40550 = cljs.core.chunk_rest.call(null,seq__40535__$1);
var G__40551 = c__4319__auto__;
var G__40552 = cljs.core.count.call(null,c__4319__auto__);
var G__40553 = (0);
seq__40535 = G__40550;
chunk__40536 = G__40551;
count__40537 = G__40552;
i__40538 = G__40553;
continue;
} else {
var vec__40542 = cljs.core.first.call(null,seq__40535__$1);
var k = cljs.core.nth.call(null,vec__40542,(0),null);
var plugin = cljs.core.nth.call(null,vec__40542,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40554 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40535,chunk__40536,count__40537,i__40538,pl_40554,vec__40542,k,plugin,seq__40535__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40554.call(null,msg_hist);
});})(seq__40535,chunk__40536,count__40537,i__40538,pl_40554,vec__40542,k,plugin,seq__40535__$1,temp__5457__auto__))
);
} else {
}


var G__40555 = cljs.core.next.call(null,seq__40535__$1);
var G__40556 = null;
var G__40557 = (0);
var G__40558 = (0);
seq__40535 = G__40555;
chunk__40536 = G__40556;
count__40537 = G__40557;
i__40538 = G__40558;
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
var G__40560 = arguments.length;
switch (G__40560) {
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

var seq__40561_40566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40562_40567 = null;
var count__40563_40568 = (0);
var i__40564_40569 = (0);
while(true){
if((i__40564_40569 < count__40563_40568)){
var msg_40570 = cljs.core._nth.call(null,chunk__40562_40567,i__40564_40569);
figwheel.client.socket.handle_incoming_message.call(null,msg_40570);


var G__40571 = seq__40561_40566;
var G__40572 = chunk__40562_40567;
var G__40573 = count__40563_40568;
var G__40574 = (i__40564_40569 + (1));
seq__40561_40566 = G__40571;
chunk__40562_40567 = G__40572;
count__40563_40568 = G__40573;
i__40564_40569 = G__40574;
continue;
} else {
var temp__5457__auto___40575 = cljs.core.seq.call(null,seq__40561_40566);
if(temp__5457__auto___40575){
var seq__40561_40576__$1 = temp__5457__auto___40575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40561_40576__$1)){
var c__4319__auto___40577 = cljs.core.chunk_first.call(null,seq__40561_40576__$1);
var G__40578 = cljs.core.chunk_rest.call(null,seq__40561_40576__$1);
var G__40579 = c__4319__auto___40577;
var G__40580 = cljs.core.count.call(null,c__4319__auto___40577);
var G__40581 = (0);
seq__40561_40566 = G__40578;
chunk__40562_40567 = G__40579;
count__40563_40568 = G__40580;
i__40564_40569 = G__40581;
continue;
} else {
var msg_40582 = cljs.core.first.call(null,seq__40561_40576__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40582);


var G__40583 = cljs.core.next.call(null,seq__40561_40576__$1);
var G__40584 = null;
var G__40585 = (0);
var G__40586 = (0);
seq__40561_40566 = G__40583;
chunk__40562_40567 = G__40584;
count__40563_40568 = G__40585;
i__40564_40569 = G__40586;
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
var len__4499__auto___40591 = arguments.length;
var i__4500__auto___40592 = (0);
while(true){
if((i__4500__auto___40592 < len__4499__auto___40591)){
args__4502__auto__.push((arguments[i__4500__auto___40592]));

var G__40593 = (i__4500__auto___40592 + (1));
i__4500__auto___40592 = G__40593;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40588){
var map__40589 = p__40588;
var map__40589__$1 = ((((!((map__40589 == null)))?(((((map__40589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40589):map__40589);
var opts = map__40589__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40587){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40587));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40594){if((e40594 instanceof Error)){
var e = e40594;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40594;

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
return (function (p__40595){
var map__40596 = p__40595;
var map__40596__$1 = ((((!((map__40596 == null)))?(((((map__40596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40596):map__40596);
var msg_name = cljs.core.get.call(null,map__40596__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1528121938723
