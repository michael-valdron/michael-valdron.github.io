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
}catch (e31281){if((e31281 instanceof Error)){
var e = e31281;
return "Error: Unable to stringify";
} else {
throw e31281;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31284 = arguments.length;
switch (G__31284) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31282_SHARP_){
if(typeof p1__31282_SHARP_ === 'string'){
return p1__31282_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31282_SHARP_);
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
var len__4499__auto___31287 = arguments.length;
var i__4500__auto___31288 = (0);
while(true){
if((i__4500__auto___31288 < len__4499__auto___31287)){
args__4502__auto__.push((arguments[i__4500__auto___31288]));

var G__31289 = (i__4500__auto___31288 + (1));
i__4500__auto___31288 = G__31289;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31286){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31286));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31291 = arguments.length;
var i__4500__auto___31292 = (0);
while(true){
if((i__4500__auto___31292 < len__4499__auto___31291)){
args__4502__auto__.push((arguments[i__4500__auto___31292]));

var G__31293 = (i__4500__auto___31292 + (1));
i__4500__auto___31292 = G__31293;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31290){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31290));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31294){
var map__31295 = p__31294;
var map__31295__$1 = ((((!((map__31295 == null)))?(((((map__31295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);
var message = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27592__auto___31374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___31374,ch){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___31374,ch){
return (function (state_31346){
var state_val_31347 = (state_31346[(1)]);
if((state_val_31347 === (7))){
var inst_31342 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
var statearr_31348_31375 = state_31346__$1;
(statearr_31348_31375[(2)] = inst_31342);

(statearr_31348_31375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (1))){
var state_31346__$1 = state_31346;
var statearr_31349_31376 = state_31346__$1;
(statearr_31349_31376[(2)] = null);

(statearr_31349_31376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (4))){
var inst_31299 = (state_31346[(7)]);
var inst_31299__$1 = (state_31346[(2)]);
var state_31346__$1 = (function (){var statearr_31350 = state_31346;
(statearr_31350[(7)] = inst_31299__$1);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31299__$1)){
var statearr_31351_31377 = state_31346__$1;
(statearr_31351_31377[(1)] = (5));

} else {
var statearr_31352_31378 = state_31346__$1;
(statearr_31352_31378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (15))){
var inst_31306 = (state_31346[(8)]);
var inst_31321 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31306);
var inst_31322 = cljs.core.first.call(null,inst_31321);
var inst_31323 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31322);
var inst_31324 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31323)].join('');
var inst_31325 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31324);
var state_31346__$1 = state_31346;
var statearr_31353_31379 = state_31346__$1;
(statearr_31353_31379[(2)] = inst_31325);

(statearr_31353_31379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (13))){
var inst_31330 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
var statearr_31354_31380 = state_31346__$1;
(statearr_31354_31380[(2)] = inst_31330);

(statearr_31354_31380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (6))){
var state_31346__$1 = state_31346;
var statearr_31355_31381 = state_31346__$1;
(statearr_31355_31381[(2)] = null);

(statearr_31355_31381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (17))){
var inst_31328 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
var statearr_31356_31382 = state_31346__$1;
(statearr_31356_31382[(2)] = inst_31328);

(statearr_31356_31382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (3))){
var inst_31344 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31346__$1,inst_31344);
} else {
if((state_val_31347 === (12))){
var inst_31305 = (state_31346[(9)]);
var inst_31319 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31305,opts);
var state_31346__$1 = state_31346;
if(cljs.core.truth_(inst_31319)){
var statearr_31357_31383 = state_31346__$1;
(statearr_31357_31383[(1)] = (15));

} else {
var statearr_31358_31384 = state_31346__$1;
(statearr_31358_31384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (2))){
var state_31346__$1 = state_31346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31346__$1,(4),ch);
} else {
if((state_val_31347 === (11))){
var inst_31306 = (state_31346[(8)]);
var inst_31311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31312 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31306);
var inst_31313 = cljs.core.async.timeout.call(null,(1000));
var inst_31314 = [inst_31312,inst_31313];
var inst_31315 = (new cljs.core.PersistentVector(null,2,(5),inst_31311,inst_31314,null));
var state_31346__$1 = state_31346;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31346__$1,(14),inst_31315);
} else {
if((state_val_31347 === (9))){
var inst_31306 = (state_31346[(8)]);
var inst_31332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31333 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31306);
var inst_31334 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31333);
var inst_31335 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31334)].join('');
var inst_31336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31335);
var state_31346__$1 = (function (){var statearr_31359 = state_31346;
(statearr_31359[(10)] = inst_31332);

return statearr_31359;
})();
var statearr_31360_31385 = state_31346__$1;
(statearr_31360_31385[(2)] = inst_31336);

(statearr_31360_31385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (5))){
var inst_31299 = (state_31346[(7)]);
var inst_31301 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31302 = (new cljs.core.PersistentArrayMap(null,2,inst_31301,null));
var inst_31303 = (new cljs.core.PersistentHashSet(null,inst_31302,null));
var inst_31304 = figwheel.client.focus_msgs.call(null,inst_31303,inst_31299);
var inst_31305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31304);
var inst_31306 = cljs.core.first.call(null,inst_31304);
var inst_31307 = figwheel.client.autoload_QMARK_.call(null);
var state_31346__$1 = (function (){var statearr_31361 = state_31346;
(statearr_31361[(8)] = inst_31306);

(statearr_31361[(9)] = inst_31305);

return statearr_31361;
})();
if(cljs.core.truth_(inst_31307)){
var statearr_31362_31386 = state_31346__$1;
(statearr_31362_31386[(1)] = (8));

} else {
var statearr_31363_31387 = state_31346__$1;
(statearr_31363_31387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (14))){
var inst_31317 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
var statearr_31364_31388 = state_31346__$1;
(statearr_31364_31388[(2)] = inst_31317);

(statearr_31364_31388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (16))){
var state_31346__$1 = state_31346;
var statearr_31365_31389 = state_31346__$1;
(statearr_31365_31389[(2)] = null);

(statearr_31365_31389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (10))){
var inst_31338 = (state_31346[(2)]);
var state_31346__$1 = (function (){var statearr_31366 = state_31346;
(statearr_31366[(11)] = inst_31338);

return statearr_31366;
})();
var statearr_31367_31390 = state_31346__$1;
(statearr_31367_31390[(2)] = null);

(statearr_31367_31390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (8))){
var inst_31305 = (state_31346[(9)]);
var inst_31309 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31305,opts);
var state_31346__$1 = state_31346;
if(cljs.core.truth_(inst_31309)){
var statearr_31368_31391 = state_31346__$1;
(statearr_31368_31391[(1)] = (11));

} else {
var statearr_31369_31392 = state_31346__$1;
(statearr_31369_31392[(1)] = (12));

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
});})(c__27592__auto___31374,ch))
;
return ((function (switch__27502__auto__,c__27592__auto___31374,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27503__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27503__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27503__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27503__auto____1 = (function (state_31346){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_31346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e31371){if((e31371 instanceof Object)){
var ex__27506__auto__ = e31371;
var statearr_31372_31393 = state_31346;
(statearr_31372_31393[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31394 = state_31346;
state_31346 = G__31394;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27503__auto__ = function(state_31346){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27503__auto____1.call(this,state_31346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27503__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27503__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___31374,ch))
})();
var state__27594__auto__ = (function (){var statearr_31373 = f__27593__auto__.call(null);
(statearr_31373[(6)] = c__27592__auto___31374);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___31374,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31395_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31395_SHARP_));
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
var base_path_31399 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31399){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31398 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31397,_STAR_print_fn_STAR_31398,sb,base_path_31399){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31397,_STAR_print_fn_STAR_31398,sb,base_path_31399))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31398;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31397;
}}catch (e31396){if((e31396 instanceof Error)){
var e = e31396;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31399], null));
} else {
var e = e31396;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31399))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31400){
var map__31401 = p__31400;
var map__31401__$1 = ((((!((map__31401 == null)))?(((((map__31401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31401):map__31401);
var opts = map__31401__$1;
var build_id = cljs.core.get.call(null,map__31401__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31401,map__31401__$1,opts,build_id){
return (function (p__31403){
var vec__31404 = p__31403;
var seq__31405 = cljs.core.seq.call(null,vec__31404);
var first__31406 = cljs.core.first.call(null,seq__31405);
var seq__31405__$1 = cljs.core.next.call(null,seq__31405);
var map__31407 = first__31406;
var map__31407__$1 = ((((!((map__31407 == null)))?(((((map__31407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31407):map__31407);
var msg = map__31407__$1;
var msg_name = cljs.core.get.call(null,map__31407__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31405__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31404,seq__31405,first__31406,seq__31405__$1,map__31407,map__31407__$1,msg,msg_name,_,map__31401,map__31401__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31404,seq__31405,first__31406,seq__31405__$1,map__31407,map__31407__$1,msg,msg_name,_,map__31401,map__31401__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31401,map__31401__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31409){
var vec__31410 = p__31409;
var seq__31411 = cljs.core.seq.call(null,vec__31410);
var first__31412 = cljs.core.first.call(null,seq__31411);
var seq__31411__$1 = cljs.core.next.call(null,seq__31411);
var map__31413 = first__31412;
var map__31413__$1 = ((((!((map__31413 == null)))?(((((map__31413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31413):map__31413);
var msg = map__31413__$1;
var msg_name = cljs.core.get.call(null,map__31413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31411__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31415){
var map__31416 = p__31415;
var map__31416__$1 = ((((!((map__31416 == null)))?(((((map__31416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31416):map__31416);
var on_compile_warning = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31416,map__31416__$1,on_compile_warning,on_compile_fail){
return (function (p__31418){
var vec__31419 = p__31418;
var seq__31420 = cljs.core.seq.call(null,vec__31419);
var first__31421 = cljs.core.first.call(null,seq__31420);
var seq__31420__$1 = cljs.core.next.call(null,seq__31420);
var map__31422 = first__31421;
var map__31422__$1 = ((((!((map__31422 == null)))?(((((map__31422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var msg = map__31422__$1;
var msg_name = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31420__$1;
var pred__31424 = cljs.core._EQ_;
var expr__31425 = msg_name;
if(cljs.core.truth_(pred__31424.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31425))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31424.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31425))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31416,map__31416__$1,on_compile_warning,on_compile_fail))
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
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__,msg_hist,msg_names,msg){
return (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (7))){
var inst_31434 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31434)){
var statearr_31516_31563 = state_31514__$1;
(statearr_31516_31563[(1)] = (8));

} else {
var statearr_31517_31564 = state_31514__$1;
(statearr_31517_31564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (20))){
var inst_31508 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31518_31565 = state_31514__$1;
(statearr_31518_31565[(2)] = inst_31508);

(statearr_31518_31565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (27))){
var inst_31504 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31519_31566 = state_31514__$1;
(statearr_31519_31566[(2)] = inst_31504);

(statearr_31519_31566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (1))){
var inst_31427 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31427)){
var statearr_31520_31567 = state_31514__$1;
(statearr_31520_31567[(1)] = (2));

} else {
var statearr_31521_31568 = state_31514__$1;
(statearr_31521_31568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (24))){
var inst_31506 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31522_31569 = state_31514__$1;
(statearr_31522_31569[(2)] = inst_31506);

(statearr_31522_31569[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (4))){
var inst_31512 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31514__$1,inst_31512);
} else {
if((state_val_31515 === (15))){
var inst_31510 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31523_31570 = state_31514__$1;
(statearr_31523_31570[(2)] = inst_31510);

(statearr_31523_31570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (21))){
var inst_31463 = (state_31514[(2)]);
var inst_31464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31465 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31464);
var state_31514__$1 = (function (){var statearr_31524 = state_31514;
(statearr_31524[(7)] = inst_31463);

return statearr_31524;
})();
var statearr_31525_31571 = state_31514__$1;
(statearr_31525_31571[(2)] = inst_31465);

(statearr_31525_31571[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (31))){
var inst_31493 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31493)){
var statearr_31526_31572 = state_31514__$1;
(statearr_31526_31572[(1)] = (34));

} else {
var statearr_31527_31573 = state_31514__$1;
(statearr_31527_31573[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (32))){
var inst_31502 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31528_31574 = state_31514__$1;
(statearr_31528_31574[(2)] = inst_31502);

(statearr_31528_31574[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (33))){
var inst_31489 = (state_31514[(2)]);
var inst_31490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31491 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31490);
var state_31514__$1 = (function (){var statearr_31529 = state_31514;
(statearr_31529[(8)] = inst_31489);

return statearr_31529;
})();
var statearr_31530_31575 = state_31514__$1;
(statearr_31530_31575[(2)] = inst_31491);

(statearr_31530_31575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (13))){
var inst_31448 = figwheel.client.heads_up.clear.call(null);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(16),inst_31448);
} else {
if((state_val_31515 === (22))){
var inst_31469 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31470 = figwheel.client.heads_up.append_warning_message.call(null,inst_31469);
var state_31514__$1 = state_31514;
var statearr_31531_31576 = state_31514__$1;
(statearr_31531_31576[(2)] = inst_31470);

(statearr_31531_31576[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (36))){
var inst_31500 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31532_31577 = state_31514__$1;
(statearr_31532_31577[(2)] = inst_31500);

(statearr_31532_31577[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (29))){
var inst_31480 = (state_31514[(2)]);
var inst_31481 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31482 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31481);
var state_31514__$1 = (function (){var statearr_31533 = state_31514;
(statearr_31533[(9)] = inst_31480);

return statearr_31533;
})();
var statearr_31534_31578 = state_31514__$1;
(statearr_31534_31578[(2)] = inst_31482);

(statearr_31534_31578[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (6))){
var inst_31429 = (state_31514[(10)]);
var state_31514__$1 = state_31514;
var statearr_31535_31579 = state_31514__$1;
(statearr_31535_31579[(2)] = inst_31429);

(statearr_31535_31579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (28))){
var inst_31476 = (state_31514[(2)]);
var inst_31477 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31478 = figwheel.client.heads_up.display_warning.call(null,inst_31477);
var state_31514__$1 = (function (){var statearr_31536 = state_31514;
(statearr_31536[(11)] = inst_31476);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(29),inst_31478);
} else {
if((state_val_31515 === (25))){
var inst_31474 = figwheel.client.heads_up.clear.call(null);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(28),inst_31474);
} else {
if((state_val_31515 === (34))){
var inst_31495 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(37),inst_31495);
} else {
if((state_val_31515 === (17))){
var inst_31454 = (state_31514[(2)]);
var inst_31455 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31456 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31455);
var state_31514__$1 = (function (){var statearr_31537 = state_31514;
(statearr_31537[(12)] = inst_31454);

return statearr_31537;
})();
var statearr_31538_31580 = state_31514__$1;
(statearr_31538_31580[(2)] = inst_31456);

(statearr_31538_31580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (3))){
var inst_31446 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31446)){
var statearr_31539_31581 = state_31514__$1;
(statearr_31539_31581[(1)] = (13));

} else {
var statearr_31540_31582 = state_31514__$1;
(statearr_31540_31582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (12))){
var inst_31442 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31541_31583 = state_31514__$1;
(statearr_31541_31583[(2)] = inst_31442);

(statearr_31541_31583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (2))){
var inst_31429 = (state_31514[(10)]);
var inst_31429__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31514__$1 = (function (){var statearr_31542 = state_31514;
(statearr_31542[(10)] = inst_31429__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31429__$1)){
var statearr_31543_31584 = state_31514__$1;
(statearr_31543_31584[(1)] = (5));

} else {
var statearr_31544_31585 = state_31514__$1;
(statearr_31544_31585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (23))){
var inst_31472 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31472)){
var statearr_31545_31586 = state_31514__$1;
(statearr_31545_31586[(1)] = (25));

} else {
var statearr_31546_31587 = state_31514__$1;
(statearr_31546_31587[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (35))){
var state_31514__$1 = state_31514;
var statearr_31547_31588 = state_31514__$1;
(statearr_31547_31588[(2)] = null);

(statearr_31547_31588[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (19))){
var inst_31467 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31467)){
var statearr_31548_31589 = state_31514__$1;
(statearr_31548_31589[(1)] = (22));

} else {
var statearr_31549_31590 = state_31514__$1;
(statearr_31549_31590[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (11))){
var inst_31438 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31550_31591 = state_31514__$1;
(statearr_31550_31591[(2)] = inst_31438);

(statearr_31550_31591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (9))){
var inst_31440 = figwheel.client.heads_up.clear.call(null);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(12),inst_31440);
} else {
if((state_val_31515 === (5))){
var inst_31431 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31514__$1 = state_31514;
var statearr_31551_31592 = state_31514__$1;
(statearr_31551_31592[(2)] = inst_31431);

(statearr_31551_31592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (14))){
var inst_31458 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31458)){
var statearr_31552_31593 = state_31514__$1;
(statearr_31552_31593[(1)] = (18));

} else {
var statearr_31553_31594 = state_31514__$1;
(statearr_31553_31594[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (26))){
var inst_31484 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31484)){
var statearr_31554_31595 = state_31514__$1;
(statearr_31554_31595[(1)] = (30));

} else {
var statearr_31555_31596 = state_31514__$1;
(statearr_31555_31596[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (16))){
var inst_31450 = (state_31514[(2)]);
var inst_31451 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31452 = figwheel.client.heads_up.display_exception.call(null,inst_31451);
var state_31514__$1 = (function (){var statearr_31556 = state_31514;
(statearr_31556[(13)] = inst_31450);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(17),inst_31452);
} else {
if((state_val_31515 === (30))){
var inst_31486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31487 = figwheel.client.heads_up.display_warning.call(null,inst_31486);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(33),inst_31487);
} else {
if((state_val_31515 === (10))){
var inst_31444 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31557_31597 = state_31514__$1;
(statearr_31557_31597[(2)] = inst_31444);

(statearr_31557_31597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (18))){
var inst_31460 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31461 = figwheel.client.heads_up.display_exception.call(null,inst_31460);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(21),inst_31461);
} else {
if((state_val_31515 === (37))){
var inst_31497 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31558_31598 = state_31514__$1;
(statearr_31558_31598[(2)] = inst_31497);

(statearr_31558_31598[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (8))){
var inst_31436 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(11),inst_31436);
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
});})(c__27592__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27502__auto__,c__27592__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto____0 = (function (){
var statearr_31559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31559[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto__);

(statearr_31559[(1)] = (1));

return statearr_31559;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto____1 = (function (state_31514){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_31514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e31560){if((e31560 instanceof Object)){
var ex__27506__auto__ = e31560;
var statearr_31561_31599 = state_31514;
(statearr_31561_31599[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31600 = state_31514;
state_31514 = G__31600;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__,msg_hist,msg_names,msg))
})();
var state__27594__auto__ = (function (){var statearr_31562 = f__27593__auto__.call(null);
(statearr_31562[(6)] = c__27592__auto__);

return statearr_31562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__,msg_hist,msg_names,msg))
);

return c__27592__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27592__auto___31629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___31629,ch){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___31629,ch){
return (function (state_31615){
var state_val_31616 = (state_31615[(1)]);
if((state_val_31616 === (1))){
var state_31615__$1 = state_31615;
var statearr_31617_31630 = state_31615__$1;
(statearr_31617_31630[(2)] = null);

(statearr_31617_31630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (2))){
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31615__$1,(4),ch);
} else {
if((state_val_31616 === (3))){
var inst_31613 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31615__$1,inst_31613);
} else {
if((state_val_31616 === (4))){
var inst_31603 = (state_31615[(7)]);
var inst_31603__$1 = (state_31615[(2)]);
var state_31615__$1 = (function (){var statearr_31618 = state_31615;
(statearr_31618[(7)] = inst_31603__$1);

return statearr_31618;
})();
if(cljs.core.truth_(inst_31603__$1)){
var statearr_31619_31631 = state_31615__$1;
(statearr_31619_31631[(1)] = (5));

} else {
var statearr_31620_31632 = state_31615__$1;
(statearr_31620_31632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (5))){
var inst_31603 = (state_31615[(7)]);
var inst_31605 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31603);
var state_31615__$1 = state_31615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31615__$1,(8),inst_31605);
} else {
if((state_val_31616 === (6))){
var state_31615__$1 = state_31615;
var statearr_31621_31633 = state_31615__$1;
(statearr_31621_31633[(2)] = null);

(statearr_31621_31633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (7))){
var inst_31611 = (state_31615[(2)]);
var state_31615__$1 = state_31615;
var statearr_31622_31634 = state_31615__$1;
(statearr_31622_31634[(2)] = inst_31611);

(statearr_31622_31634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31616 === (8))){
var inst_31607 = (state_31615[(2)]);
var state_31615__$1 = (function (){var statearr_31623 = state_31615;
(statearr_31623[(8)] = inst_31607);

return statearr_31623;
})();
var statearr_31624_31635 = state_31615__$1;
(statearr_31624_31635[(2)] = null);

(statearr_31624_31635[(1)] = (2));


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
});})(c__27592__auto___31629,ch))
;
return ((function (switch__27502__auto__,c__27592__auto___31629,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27503__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27503__auto____0 = (function (){
var statearr_31625 = [null,null,null,null,null,null,null,null,null];
(statearr_31625[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27503__auto__);

(statearr_31625[(1)] = (1));

return statearr_31625;
});
var figwheel$client$heads_up_plugin_$_state_machine__27503__auto____1 = (function (state_31615){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_31615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e31626){if((e31626 instanceof Object)){
var ex__27506__auto__ = e31626;
var statearr_31627_31636 = state_31615;
(statearr_31627_31636[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31637 = state_31615;
state_31615 = G__31637;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27503__auto__ = function(state_31615){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27503__auto____1.call(this,state_31615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27503__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27503__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___31629,ch))
})();
var state__27594__auto__ = (function (){var statearr_31628 = f__27593__auto__.call(null);
(statearr_31628[(6)] = c__27592__auto___31629);

return statearr_31628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___31629,ch))
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
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__){
return (function (state_31643){
var state_val_31644 = (state_31643[(1)]);
if((state_val_31644 === (1))){
var inst_31638 = cljs.core.async.timeout.call(null,(3000));
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31643__$1,(2),inst_31638);
} else {
if((state_val_31644 === (2))){
var inst_31640 = (state_31643[(2)]);
var inst_31641 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31643__$1 = (function (){var statearr_31645 = state_31643;
(statearr_31645[(7)] = inst_31640);

return statearr_31645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31643__$1,inst_31641);
} else {
return null;
}
}
});})(c__27592__auto__))
;
return ((function (switch__27502__auto__,c__27592__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27503__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27503__auto____0 = (function (){
var statearr_31646 = [null,null,null,null,null,null,null,null];
(statearr_31646[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27503__auto__);

(statearr_31646[(1)] = (1));

return statearr_31646;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27503__auto____1 = (function (state_31643){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_31643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e31647){if((e31647 instanceof Object)){
var ex__27506__auto__ = e31647;
var statearr_31648_31650 = state_31643;
(statearr_31648_31650[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31651 = state_31643;
state_31643 = G__31651;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27503__auto__ = function(state_31643){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27503__auto____1.call(this,state_31643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27503__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27503__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__))
})();
var state__27594__auto__ = (function (){var statearr_31649 = f__27593__auto__.call(null);
(statearr_31649[(6)] = c__27592__auto__);

return statearr_31649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__))
);

return c__27592__auto__;
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
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (1))){
var inst_31652 = cljs.core.async.timeout.call(null,(2000));
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(2),inst_31652);
} else {
if((state_val_31659 === (2))){
var inst_31654 = (state_31658[(2)]);
var inst_31655 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31656 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31655);
var state_31658__$1 = (function (){var statearr_31660 = state_31658;
(statearr_31660[(7)] = inst_31654);

return statearr_31660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31658__$1,inst_31656);
} else {
return null;
}
}
});})(c__27592__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27502__auto__,c__27592__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto____0 = (function (){
var statearr_31661 = [null,null,null,null,null,null,null,null];
(statearr_31661[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto__);

(statearr_31661[(1)] = (1));

return statearr_31661;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto____1 = (function (state_31658){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_31658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e31662){if((e31662 instanceof Object)){
var ex__27506__auto__ = e31662;
var statearr_31663_31665 = state_31658;
(statearr_31663_31665[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31666 = state_31658;
state_31658 = G__31666;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27594__auto__ = (function (){var statearr_31664 = f__27593__auto__.call(null);
(statearr_31664[(6)] = c__27592__auto__);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__,figwheel_version,temp__5457__auto__))
);

return c__27592__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31667){
var map__31668 = p__31667;
var map__31668__$1 = ((((!((map__31668 == null)))?(((((map__31668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31668):map__31668);
var file = cljs.core.get.call(null,map__31668__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31668__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31668__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31670 = "";
var G__31670__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31670),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31670);
var G__31670__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31670__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31670__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31670__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31670__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31671){
var map__31672 = p__31671;
var map__31672__$1 = ((((!((map__31672 == null)))?(((((map__31672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31672):map__31672);
var ed = map__31672__$1;
var formatted_exception = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31674_31678 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31675_31679 = null;
var count__31676_31680 = (0);
var i__31677_31681 = (0);
while(true){
if((i__31677_31681 < count__31676_31680)){
var msg_31682 = cljs.core._nth.call(null,chunk__31675_31679,i__31677_31681);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31682);


var G__31683 = seq__31674_31678;
var G__31684 = chunk__31675_31679;
var G__31685 = count__31676_31680;
var G__31686 = (i__31677_31681 + (1));
seq__31674_31678 = G__31683;
chunk__31675_31679 = G__31684;
count__31676_31680 = G__31685;
i__31677_31681 = G__31686;
continue;
} else {
var temp__5457__auto___31687 = cljs.core.seq.call(null,seq__31674_31678);
if(temp__5457__auto___31687){
var seq__31674_31688__$1 = temp__5457__auto___31687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31674_31688__$1)){
var c__4319__auto___31689 = cljs.core.chunk_first.call(null,seq__31674_31688__$1);
var G__31690 = cljs.core.chunk_rest.call(null,seq__31674_31688__$1);
var G__31691 = c__4319__auto___31689;
var G__31692 = cljs.core.count.call(null,c__4319__auto___31689);
var G__31693 = (0);
seq__31674_31678 = G__31690;
chunk__31675_31679 = G__31691;
count__31676_31680 = G__31692;
i__31677_31681 = G__31693;
continue;
} else {
var msg_31694 = cljs.core.first.call(null,seq__31674_31688__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31694);


var G__31695 = cljs.core.next.call(null,seq__31674_31688__$1);
var G__31696 = null;
var G__31697 = (0);
var G__31698 = (0);
seq__31674_31678 = G__31695;
chunk__31675_31679 = G__31696;
count__31676_31680 = G__31697;
i__31677_31681 = G__31698;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31699){
var map__31700 = p__31699;
var map__31700__$1 = ((((!((map__31700 == null)))?(((((map__31700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31700):map__31700);
var w = map__31700__$1;
var message = cljs.core.get.call(null,map__31700__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31702 = cljs.core.seq.call(null,plugins);
var chunk__31703 = null;
var count__31704 = (0);
var i__31705 = (0);
while(true){
if((i__31705 < count__31704)){
var vec__31706 = cljs.core._nth.call(null,chunk__31703,i__31705);
var k = cljs.core.nth.call(null,vec__31706,(0),null);
var plugin = cljs.core.nth.call(null,vec__31706,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31712 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31702,chunk__31703,count__31704,i__31705,pl_31712,vec__31706,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31712.call(null,msg_hist);
});})(seq__31702,chunk__31703,count__31704,i__31705,pl_31712,vec__31706,k,plugin))
);
} else {
}


var G__31713 = seq__31702;
var G__31714 = chunk__31703;
var G__31715 = count__31704;
var G__31716 = (i__31705 + (1));
seq__31702 = G__31713;
chunk__31703 = G__31714;
count__31704 = G__31715;
i__31705 = G__31716;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31702);
if(temp__5457__auto__){
var seq__31702__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31702__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31702__$1);
var G__31717 = cljs.core.chunk_rest.call(null,seq__31702__$1);
var G__31718 = c__4319__auto__;
var G__31719 = cljs.core.count.call(null,c__4319__auto__);
var G__31720 = (0);
seq__31702 = G__31717;
chunk__31703 = G__31718;
count__31704 = G__31719;
i__31705 = G__31720;
continue;
} else {
var vec__31709 = cljs.core.first.call(null,seq__31702__$1);
var k = cljs.core.nth.call(null,vec__31709,(0),null);
var plugin = cljs.core.nth.call(null,vec__31709,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31702,chunk__31703,count__31704,i__31705,pl_31721,vec__31709,k,plugin,seq__31702__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31721.call(null,msg_hist);
});})(seq__31702,chunk__31703,count__31704,i__31705,pl_31721,vec__31709,k,plugin,seq__31702__$1,temp__5457__auto__))
);
} else {
}


var G__31722 = cljs.core.next.call(null,seq__31702__$1);
var G__31723 = null;
var G__31724 = (0);
var G__31725 = (0);
seq__31702 = G__31722;
chunk__31703 = G__31723;
count__31704 = G__31724;
i__31705 = G__31725;
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
var G__31727 = arguments.length;
switch (G__31727) {
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

var seq__31728_31733 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31729_31734 = null;
var count__31730_31735 = (0);
var i__31731_31736 = (0);
while(true){
if((i__31731_31736 < count__31730_31735)){
var msg_31737 = cljs.core._nth.call(null,chunk__31729_31734,i__31731_31736);
figwheel.client.socket.handle_incoming_message.call(null,msg_31737);


var G__31738 = seq__31728_31733;
var G__31739 = chunk__31729_31734;
var G__31740 = count__31730_31735;
var G__31741 = (i__31731_31736 + (1));
seq__31728_31733 = G__31738;
chunk__31729_31734 = G__31739;
count__31730_31735 = G__31740;
i__31731_31736 = G__31741;
continue;
} else {
var temp__5457__auto___31742 = cljs.core.seq.call(null,seq__31728_31733);
if(temp__5457__auto___31742){
var seq__31728_31743__$1 = temp__5457__auto___31742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31728_31743__$1)){
var c__4319__auto___31744 = cljs.core.chunk_first.call(null,seq__31728_31743__$1);
var G__31745 = cljs.core.chunk_rest.call(null,seq__31728_31743__$1);
var G__31746 = c__4319__auto___31744;
var G__31747 = cljs.core.count.call(null,c__4319__auto___31744);
var G__31748 = (0);
seq__31728_31733 = G__31745;
chunk__31729_31734 = G__31746;
count__31730_31735 = G__31747;
i__31731_31736 = G__31748;
continue;
} else {
var msg_31749 = cljs.core.first.call(null,seq__31728_31743__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31749);


var G__31750 = cljs.core.next.call(null,seq__31728_31743__$1);
var G__31751 = null;
var G__31752 = (0);
var G__31753 = (0);
seq__31728_31733 = G__31750;
chunk__31729_31734 = G__31751;
count__31730_31735 = G__31752;
i__31731_31736 = G__31753;
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
var len__4499__auto___31758 = arguments.length;
var i__4500__auto___31759 = (0);
while(true){
if((i__4500__auto___31759 < len__4499__auto___31758)){
args__4502__auto__.push((arguments[i__4500__auto___31759]));

var G__31760 = (i__4500__auto___31759 + (1));
i__4500__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31755){
var map__31756 = p__31755;
var map__31756__$1 = ((((!((map__31756 == null)))?(((((map__31756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756):map__31756);
var opts = map__31756__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31754){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31754));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31761){if((e31761 instanceof Error)){
var e = e31761;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31761;

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
return (function (p__31762){
var map__31763 = p__31762;
var map__31763__$1 = ((((!((map__31763 == null)))?(((((map__31763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31763):map__31763);
var msg_name = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1527748572051
