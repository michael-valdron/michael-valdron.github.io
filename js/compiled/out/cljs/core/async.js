// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28170 = arguments.length;
switch (G__28170) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28171 = (function (f,blockable,meta28172){
this.f = f;
this.blockable = blockable;
this.meta28172 = meta28172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28173,meta28172__$1){
var self__ = this;
var _28173__$1 = this;
return (new cljs.core.async.t_cljs$core$async28171(self__.f,self__.blockable,meta28172__$1));
});

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28173){
var self__ = this;
var _28173__$1 = this;
return self__.meta28172;
});

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28172","meta28172",1309181987,null)], null);
});

cljs.core.async.t_cljs$core$async28171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28171";

cljs.core.async.t_cljs$core$async28171.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28171");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28171.
 */
cljs.core.async.__GT_t_cljs$core$async28171 = (function cljs$core$async$__GT_t_cljs$core$async28171(f__$1,blockable__$1,meta28172){
return (new cljs.core.async.t_cljs$core$async28171(f__$1,blockable__$1,meta28172));
});

}

return (new cljs.core.async.t_cljs$core$async28171(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28177 = arguments.length;
switch (G__28177) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28180 = arguments.length;
switch (G__28180) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28183 = arguments.length;
switch (G__28183) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28185 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28185);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28185,ret){
return (function (){
return fn1.call(null,val_28185);
});})(val_28185,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28187 = arguments.length;
switch (G__28187) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___28189 = n;
var x_28190 = (0);
while(true){
if((x_28190 < n__4376__auto___28189)){
(a[x_28190] = (0));

var G__28191 = (x_28190 + (1));
x_28190 = G__28191;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28192 = (i + (1));
i = G__28192;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28193 = (function (flag,meta28194){
this.flag = flag;
this.meta28194 = meta28194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28195,meta28194__$1){
var self__ = this;
var _28195__$1 = this;
return (new cljs.core.async.t_cljs$core$async28193(self__.flag,meta28194__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28195){
var self__ = this;
var _28195__$1 = this;
return self__.meta28194;
});})(flag))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28193.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28194","meta28194",-1121778350,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28193";

cljs.core.async.t_cljs$core$async28193.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28193");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28193.
 */
cljs.core.async.__GT_t_cljs$core$async28193 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28193(flag__$1,meta28194){
return (new cljs.core.async.t_cljs$core$async28193(flag__$1,meta28194));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28193(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28196 = (function (flag,cb,meta28197){
this.flag = flag;
this.cb = cb;
this.meta28197 = meta28197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28198,meta28197__$1){
var self__ = this;
var _28198__$1 = this;
return (new cljs.core.async.t_cljs$core$async28196(self__.flag,self__.cb,meta28197__$1));
});

cljs.core.async.t_cljs$core$async28196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28198){
var self__ = this;
var _28198__$1 = this;
return self__.meta28197;
});

cljs.core.async.t_cljs$core$async28196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28197","meta28197",-716104802,null)], null);
});

cljs.core.async.t_cljs$core$async28196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28196";

cljs.core.async.t_cljs$core$async28196.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28196");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28196.
 */
cljs.core.async.__GT_t_cljs$core$async28196 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28196(flag__$1,cb__$1,meta28197){
return (new cljs.core.async.t_cljs$core$async28196(flag__$1,cb__$1,meta28197));
});

}

return (new cljs.core.async.t_cljs$core$async28196(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28199_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28199_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28200_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28200_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28201 = (i + (1));
i = G__28201;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28207 = arguments.length;
var i__4500__auto___28208 = (0);
while(true){
if((i__4500__auto___28208 < len__4499__auto___28207)){
args__4502__auto__.push((arguments[i__4500__auto___28208]));

var G__28209 = (i__4500__auto___28208 + (1));
i__4500__auto___28208 = G__28209;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28204){
var map__28205 = p__28204;
var map__28205__$1 = ((((!((map__28205 == null)))?(((((map__28205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28205):map__28205);
var opts = map__28205__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28202){
var G__28203 = cljs.core.first.call(null,seq28202);
var seq28202__$1 = cljs.core.next.call(null,seq28202);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28203,seq28202__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28211 = arguments.length;
switch (G__28211) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28110__auto___28257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___28257){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___28257){
return (function (state_28235){
var state_val_28236 = (state_28235[(1)]);
if((state_val_28236 === (7))){
var inst_28231 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28237_28258 = state_28235__$1;
(statearr_28237_28258[(2)] = inst_28231);

(statearr_28237_28258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (1))){
var state_28235__$1 = state_28235;
var statearr_28238_28259 = state_28235__$1;
(statearr_28238_28259[(2)] = null);

(statearr_28238_28259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (4))){
var inst_28214 = (state_28235[(7)]);
var inst_28214__$1 = (state_28235[(2)]);
var inst_28215 = (inst_28214__$1 == null);
var state_28235__$1 = (function (){var statearr_28239 = state_28235;
(statearr_28239[(7)] = inst_28214__$1);

return statearr_28239;
})();
if(cljs.core.truth_(inst_28215)){
var statearr_28240_28260 = state_28235__$1;
(statearr_28240_28260[(1)] = (5));

} else {
var statearr_28241_28261 = state_28235__$1;
(statearr_28241_28261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (13))){
var state_28235__$1 = state_28235;
var statearr_28242_28262 = state_28235__$1;
(statearr_28242_28262[(2)] = null);

(statearr_28242_28262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (6))){
var inst_28214 = (state_28235[(7)]);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28235__$1,(11),to,inst_28214);
} else {
if((state_val_28236 === (3))){
var inst_28233 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28235__$1,inst_28233);
} else {
if((state_val_28236 === (12))){
var state_28235__$1 = state_28235;
var statearr_28243_28263 = state_28235__$1;
(statearr_28243_28263[(2)] = null);

(statearr_28243_28263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (2))){
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28235__$1,(4),from);
} else {
if((state_val_28236 === (11))){
var inst_28224 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
if(cljs.core.truth_(inst_28224)){
var statearr_28244_28264 = state_28235__$1;
(statearr_28244_28264[(1)] = (12));

} else {
var statearr_28245_28265 = state_28235__$1;
(statearr_28245_28265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (9))){
var state_28235__$1 = state_28235;
var statearr_28246_28266 = state_28235__$1;
(statearr_28246_28266[(2)] = null);

(statearr_28246_28266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (5))){
var state_28235__$1 = state_28235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28247_28267 = state_28235__$1;
(statearr_28247_28267[(1)] = (8));

} else {
var statearr_28248_28268 = state_28235__$1;
(statearr_28248_28268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (14))){
var inst_28229 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28249_28269 = state_28235__$1;
(statearr_28249_28269[(2)] = inst_28229);

(statearr_28249_28269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (10))){
var inst_28221 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28250_28270 = state_28235__$1;
(statearr_28250_28270[(2)] = inst_28221);

(statearr_28250_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (8))){
var inst_28218 = cljs.core.async.close_BANG_.call(null,to);
var state_28235__$1 = state_28235;
var statearr_28251_28271 = state_28235__$1;
(statearr_28251_28271[(2)] = inst_28218);

(statearr_28251_28271[(1)] = (10));


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
});})(c__28110__auto___28257))
;
return ((function (switch__28020__auto__,c__28110__auto___28257){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_28252 = [null,null,null,null,null,null,null,null];
(statearr_28252[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_28252[(1)] = (1));

return statearr_28252;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_28235){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28253){if((e28253 instanceof Object)){
var ex__28024__auto__ = e28253;
var statearr_28254_28272 = state_28235;
(statearr_28254_28272[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28273 = state_28235;
state_28235 = G__28273;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_28235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_28235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___28257))
})();
var state__28112__auto__ = (function (){var statearr_28255 = f__28111__auto__.call(null);
(statearr_28255[(6)] = c__28110__auto___28257);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___28257))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28274){
var vec__28275 = p__28274;
var v = cljs.core.nth.call(null,vec__28275,(0),null);
var p = cljs.core.nth.call(null,vec__28275,(1),null);
var job = vec__28275;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28110__auto___28446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___28446,res,vec__28275,v,p,job,jobs,results){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___28446,res,vec__28275,v,p,job,jobs,results){
return (function (state_28282){
var state_val_28283 = (state_28282[(1)]);
if((state_val_28283 === (1))){
var state_28282__$1 = state_28282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28282__$1,(2),res,v);
} else {
if((state_val_28283 === (2))){
var inst_28279 = (state_28282[(2)]);
var inst_28280 = cljs.core.async.close_BANG_.call(null,res);
var state_28282__$1 = (function (){var statearr_28284 = state_28282;
(statearr_28284[(7)] = inst_28279);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28282__$1,inst_28280);
} else {
return null;
}
}
});})(c__28110__auto___28446,res,vec__28275,v,p,job,jobs,results))
;
return ((function (switch__28020__auto__,c__28110__auto___28446,res,vec__28275,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0 = (function (){
var statearr_28285 = [null,null,null,null,null,null,null,null];
(statearr_28285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__);

(statearr_28285[(1)] = (1));

return statearr_28285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1 = (function (state_28282){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28286){if((e28286 instanceof Object)){
var ex__28024__auto__ = e28286;
var statearr_28287_28447 = state_28282;
(statearr_28287_28447[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28448 = state_28282;
state_28282 = G__28448;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = function(state_28282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1.call(this,state_28282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___28446,res,vec__28275,v,p,job,jobs,results))
})();
var state__28112__auto__ = (function (){var statearr_28288 = f__28111__auto__.call(null);
(statearr_28288[(6)] = c__28110__auto___28446);

return statearr_28288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___28446,res,vec__28275,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28289){
var vec__28290 = p__28289;
var v = cljs.core.nth.call(null,vec__28290,(0),null);
var p = cljs.core.nth.call(null,vec__28290,(1),null);
var job = vec__28290;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___28449 = n;
var __28450 = (0);
while(true){
if((__28450 < n__4376__auto___28449)){
var G__28293_28451 = type;
var G__28293_28452__$1 = (((G__28293_28451 instanceof cljs.core.Keyword))?G__28293_28451.fqn:null);
switch (G__28293_28452__$1) {
case "compute":
var c__28110__auto___28454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28450,c__28110__auto___28454,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (__28450,c__28110__auto___28454,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async){
return (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (1))){
var state_28306__$1 = state_28306;
var statearr_28308_28455 = state_28306__$1;
(statearr_28308_28455[(2)] = null);

(statearr_28308_28455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (2))){
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(4),jobs);
} else {
if((state_val_28307 === (3))){
var inst_28304 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
if((state_val_28307 === (4))){
var inst_28296 = (state_28306[(2)]);
var inst_28297 = process.call(null,inst_28296);
var state_28306__$1 = state_28306;
if(cljs.core.truth_(inst_28297)){
var statearr_28309_28456 = state_28306__$1;
(statearr_28309_28456[(1)] = (5));

} else {
var statearr_28310_28457 = state_28306__$1;
(statearr_28310_28457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (5))){
var state_28306__$1 = state_28306;
var statearr_28311_28458 = state_28306__$1;
(statearr_28311_28458[(2)] = null);

(statearr_28311_28458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (6))){
var state_28306__$1 = state_28306;
var statearr_28312_28459 = state_28306__$1;
(statearr_28312_28459[(2)] = null);

(statearr_28312_28459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (7))){
var inst_28302 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28313_28460 = state_28306__$1;
(statearr_28313_28460[(2)] = inst_28302);

(statearr_28313_28460[(1)] = (3));


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
});})(__28450,c__28110__auto___28454,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async))
;
return ((function (__28450,switch__28020__auto__,c__28110__auto___28454,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0 = (function (){
var statearr_28314 = [null,null,null,null,null,null,null];
(statearr_28314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__);

(statearr_28314[(1)] = (1));

return statearr_28314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1 = (function (state_28306){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28315){if((e28315 instanceof Object)){
var ex__28024__auto__ = e28315;
var statearr_28316_28461 = state_28306;
(statearr_28316_28461[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28462 = state_28306;
state_28306 = G__28462;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__;
})()
;})(__28450,switch__28020__auto__,c__28110__auto___28454,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async))
})();
var state__28112__auto__ = (function (){var statearr_28317 = f__28111__auto__.call(null);
(statearr_28317[(6)] = c__28110__auto___28454);

return statearr_28317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(__28450,c__28110__auto___28454,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async))
);


break;
case "async":
var c__28110__auto___28463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28450,c__28110__auto___28463,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (__28450,c__28110__auto___28463,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async){
return (function (state_28330){
var state_val_28331 = (state_28330[(1)]);
if((state_val_28331 === (1))){
var state_28330__$1 = state_28330;
var statearr_28332_28464 = state_28330__$1;
(statearr_28332_28464[(2)] = null);

(statearr_28332_28464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (2))){
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(4),jobs);
} else {
if((state_val_28331 === (3))){
var inst_28328 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28330__$1,inst_28328);
} else {
if((state_val_28331 === (4))){
var inst_28320 = (state_28330[(2)]);
var inst_28321 = async.call(null,inst_28320);
var state_28330__$1 = state_28330;
if(cljs.core.truth_(inst_28321)){
var statearr_28333_28465 = state_28330__$1;
(statearr_28333_28465[(1)] = (5));

} else {
var statearr_28334_28466 = state_28330__$1;
(statearr_28334_28466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (5))){
var state_28330__$1 = state_28330;
var statearr_28335_28467 = state_28330__$1;
(statearr_28335_28467[(2)] = null);

(statearr_28335_28467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (6))){
var state_28330__$1 = state_28330;
var statearr_28336_28468 = state_28330__$1;
(statearr_28336_28468[(2)] = null);

(statearr_28336_28468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (7))){
var inst_28326 = (state_28330[(2)]);
var state_28330__$1 = state_28330;
var statearr_28337_28469 = state_28330__$1;
(statearr_28337_28469[(2)] = inst_28326);

(statearr_28337_28469[(1)] = (3));


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
});})(__28450,c__28110__auto___28463,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async))
;
return ((function (__28450,switch__28020__auto__,c__28110__auto___28463,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0 = (function (){
var statearr_28338 = [null,null,null,null,null,null,null];
(statearr_28338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__);

(statearr_28338[(1)] = (1));

return statearr_28338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1 = (function (state_28330){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28339){if((e28339 instanceof Object)){
var ex__28024__auto__ = e28339;
var statearr_28340_28470 = state_28330;
(statearr_28340_28470[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28471 = state_28330;
state_28330 = G__28471;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = function(state_28330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1.call(this,state_28330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__;
})()
;})(__28450,switch__28020__auto__,c__28110__auto___28463,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async))
})();
var state__28112__auto__ = (function (){var statearr_28341 = f__28111__auto__.call(null);
(statearr_28341[(6)] = c__28110__auto___28463);

return statearr_28341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(__28450,c__28110__auto___28463,G__28293_28451,G__28293_28452__$1,n__4376__auto___28449,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28293_28452__$1)].join('')));

}

var G__28472 = (__28450 + (1));
__28450 = G__28472;
continue;
} else {
}
break;
}

var c__28110__auto___28473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___28473,jobs,results,process,async){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___28473,jobs,results,process,async){
return (function (state_28363){
var state_val_28364 = (state_28363[(1)]);
if((state_val_28364 === (1))){
var state_28363__$1 = state_28363;
var statearr_28365_28474 = state_28363__$1;
(statearr_28365_28474[(2)] = null);

(statearr_28365_28474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (2))){
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28363__$1,(4),from);
} else {
if((state_val_28364 === (3))){
var inst_28361 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28363__$1,inst_28361);
} else {
if((state_val_28364 === (4))){
var inst_28344 = (state_28363[(7)]);
var inst_28344__$1 = (state_28363[(2)]);
var inst_28345 = (inst_28344__$1 == null);
var state_28363__$1 = (function (){var statearr_28366 = state_28363;
(statearr_28366[(7)] = inst_28344__$1);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28345)){
var statearr_28367_28475 = state_28363__$1;
(statearr_28367_28475[(1)] = (5));

} else {
var statearr_28368_28476 = state_28363__$1;
(statearr_28368_28476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (5))){
var inst_28347 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28363__$1 = state_28363;
var statearr_28369_28477 = state_28363__$1;
(statearr_28369_28477[(2)] = inst_28347);

(statearr_28369_28477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (6))){
var inst_28344 = (state_28363[(7)]);
var inst_28349 = (state_28363[(8)]);
var inst_28349__$1 = cljs.core.async.chan.call(null,(1));
var inst_28350 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28351 = [inst_28344,inst_28349__$1];
var inst_28352 = (new cljs.core.PersistentVector(null,2,(5),inst_28350,inst_28351,null));
var state_28363__$1 = (function (){var statearr_28370 = state_28363;
(statearr_28370[(8)] = inst_28349__$1);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28363__$1,(8),jobs,inst_28352);
} else {
if((state_val_28364 === (7))){
var inst_28359 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
var statearr_28371_28478 = state_28363__$1;
(statearr_28371_28478[(2)] = inst_28359);

(statearr_28371_28478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (8))){
var inst_28349 = (state_28363[(8)]);
var inst_28354 = (state_28363[(2)]);
var state_28363__$1 = (function (){var statearr_28372 = state_28363;
(statearr_28372[(9)] = inst_28354);

return statearr_28372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28363__$1,(9),results,inst_28349);
} else {
if((state_val_28364 === (9))){
var inst_28356 = (state_28363[(2)]);
var state_28363__$1 = (function (){var statearr_28373 = state_28363;
(statearr_28373[(10)] = inst_28356);

return statearr_28373;
})();
var statearr_28374_28479 = state_28363__$1;
(statearr_28374_28479[(2)] = null);

(statearr_28374_28479[(1)] = (2));


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
});})(c__28110__auto___28473,jobs,results,process,async))
;
return ((function (switch__28020__auto__,c__28110__auto___28473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0 = (function (){
var statearr_28375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__);

(statearr_28375[(1)] = (1));

return statearr_28375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1 = (function (state_28363){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28376){if((e28376 instanceof Object)){
var ex__28024__auto__ = e28376;
var statearr_28377_28480 = state_28363;
(statearr_28377_28480[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28481 = state_28363;
state_28363 = G__28481;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = function(state_28363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1.call(this,state_28363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___28473,jobs,results,process,async))
})();
var state__28112__auto__ = (function (){var statearr_28378 = f__28111__auto__.call(null);
(statearr_28378[(6)] = c__28110__auto___28473);

return statearr_28378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___28473,jobs,results,process,async))
);


var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__,jobs,results,process,async){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__,jobs,results,process,async){
return (function (state_28416){
var state_val_28417 = (state_28416[(1)]);
if((state_val_28417 === (7))){
var inst_28412 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28418_28482 = state_28416__$1;
(statearr_28418_28482[(2)] = inst_28412);

(statearr_28418_28482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (20))){
var state_28416__$1 = state_28416;
var statearr_28419_28483 = state_28416__$1;
(statearr_28419_28483[(2)] = null);

(statearr_28419_28483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (1))){
var state_28416__$1 = state_28416;
var statearr_28420_28484 = state_28416__$1;
(statearr_28420_28484[(2)] = null);

(statearr_28420_28484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (4))){
var inst_28381 = (state_28416[(7)]);
var inst_28381__$1 = (state_28416[(2)]);
var inst_28382 = (inst_28381__$1 == null);
var state_28416__$1 = (function (){var statearr_28421 = state_28416;
(statearr_28421[(7)] = inst_28381__$1);

return statearr_28421;
})();
if(cljs.core.truth_(inst_28382)){
var statearr_28422_28485 = state_28416__$1;
(statearr_28422_28485[(1)] = (5));

} else {
var statearr_28423_28486 = state_28416__$1;
(statearr_28423_28486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (15))){
var inst_28394 = (state_28416[(8)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28416__$1,(18),to,inst_28394);
} else {
if((state_val_28417 === (21))){
var inst_28407 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28424_28487 = state_28416__$1;
(statearr_28424_28487[(2)] = inst_28407);

(statearr_28424_28487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (13))){
var inst_28409 = (state_28416[(2)]);
var state_28416__$1 = (function (){var statearr_28425 = state_28416;
(statearr_28425[(9)] = inst_28409);

return statearr_28425;
})();
var statearr_28426_28488 = state_28416__$1;
(statearr_28426_28488[(2)] = null);

(statearr_28426_28488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (6))){
var inst_28381 = (state_28416[(7)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28416__$1,(11),inst_28381);
} else {
if((state_val_28417 === (17))){
var inst_28402 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
if(cljs.core.truth_(inst_28402)){
var statearr_28427_28489 = state_28416__$1;
(statearr_28427_28489[(1)] = (19));

} else {
var statearr_28428_28490 = state_28416__$1;
(statearr_28428_28490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (3))){
var inst_28414 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28416__$1,inst_28414);
} else {
if((state_val_28417 === (12))){
var inst_28391 = (state_28416[(10)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28416__$1,(14),inst_28391);
} else {
if((state_val_28417 === (2))){
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28416__$1,(4),results);
} else {
if((state_val_28417 === (19))){
var state_28416__$1 = state_28416;
var statearr_28429_28491 = state_28416__$1;
(statearr_28429_28491[(2)] = null);

(statearr_28429_28491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (11))){
var inst_28391 = (state_28416[(2)]);
var state_28416__$1 = (function (){var statearr_28430 = state_28416;
(statearr_28430[(10)] = inst_28391);

return statearr_28430;
})();
var statearr_28431_28492 = state_28416__$1;
(statearr_28431_28492[(2)] = null);

(statearr_28431_28492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (9))){
var state_28416__$1 = state_28416;
var statearr_28432_28493 = state_28416__$1;
(statearr_28432_28493[(2)] = null);

(statearr_28432_28493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (5))){
var state_28416__$1 = state_28416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28433_28494 = state_28416__$1;
(statearr_28433_28494[(1)] = (8));

} else {
var statearr_28434_28495 = state_28416__$1;
(statearr_28434_28495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (14))){
var inst_28396 = (state_28416[(11)]);
var inst_28394 = (state_28416[(8)]);
var inst_28394__$1 = (state_28416[(2)]);
var inst_28395 = (inst_28394__$1 == null);
var inst_28396__$1 = cljs.core.not.call(null,inst_28395);
var state_28416__$1 = (function (){var statearr_28435 = state_28416;
(statearr_28435[(11)] = inst_28396__$1);

(statearr_28435[(8)] = inst_28394__$1);

return statearr_28435;
})();
if(inst_28396__$1){
var statearr_28436_28496 = state_28416__$1;
(statearr_28436_28496[(1)] = (15));

} else {
var statearr_28437_28497 = state_28416__$1;
(statearr_28437_28497[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (16))){
var inst_28396 = (state_28416[(11)]);
var state_28416__$1 = state_28416;
var statearr_28438_28498 = state_28416__$1;
(statearr_28438_28498[(2)] = inst_28396);

(statearr_28438_28498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (10))){
var inst_28388 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28439_28499 = state_28416__$1;
(statearr_28439_28499[(2)] = inst_28388);

(statearr_28439_28499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (18))){
var inst_28399 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28440_28500 = state_28416__$1;
(statearr_28440_28500[(2)] = inst_28399);

(statearr_28440_28500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (8))){
var inst_28385 = cljs.core.async.close_BANG_.call(null,to);
var state_28416__$1 = state_28416;
var statearr_28441_28501 = state_28416__$1;
(statearr_28441_28501[(2)] = inst_28385);

(statearr_28441_28501[(1)] = (10));


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
}
}
}
}
});})(c__28110__auto__,jobs,results,process,async))
;
return ((function (switch__28020__auto__,c__28110__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0 = (function (){
var statearr_28442 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__);

(statearr_28442[(1)] = (1));

return statearr_28442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1 = (function (state_28416){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28443){if((e28443 instanceof Object)){
var ex__28024__auto__ = e28443;
var statearr_28444_28502 = state_28416;
(statearr_28444_28502[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28503 = state_28416;
state_28416 = G__28503;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__ = function(state_28416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1.call(this,state_28416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28021__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__,jobs,results,process,async))
})();
var state__28112__auto__ = (function (){var statearr_28445 = f__28111__auto__.call(null);
(statearr_28445[(6)] = c__28110__auto__);

return statearr_28445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__,jobs,results,process,async))
);

return c__28110__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28505 = arguments.length;
switch (G__28505) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28508 = arguments.length;
switch (G__28508) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28511 = arguments.length;
switch (G__28511) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28110__auto___28560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___28560,tc,fc){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___28560,tc,fc){
return (function (state_28537){
var state_val_28538 = (state_28537[(1)]);
if((state_val_28538 === (7))){
var inst_28533 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28539_28561 = state_28537__$1;
(statearr_28539_28561[(2)] = inst_28533);

(statearr_28539_28561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (1))){
var state_28537__$1 = state_28537;
var statearr_28540_28562 = state_28537__$1;
(statearr_28540_28562[(2)] = null);

(statearr_28540_28562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (4))){
var inst_28514 = (state_28537[(7)]);
var inst_28514__$1 = (state_28537[(2)]);
var inst_28515 = (inst_28514__$1 == null);
var state_28537__$1 = (function (){var statearr_28541 = state_28537;
(statearr_28541[(7)] = inst_28514__$1);

return statearr_28541;
})();
if(cljs.core.truth_(inst_28515)){
var statearr_28542_28563 = state_28537__$1;
(statearr_28542_28563[(1)] = (5));

} else {
var statearr_28543_28564 = state_28537__$1;
(statearr_28543_28564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (13))){
var state_28537__$1 = state_28537;
var statearr_28544_28565 = state_28537__$1;
(statearr_28544_28565[(2)] = null);

(statearr_28544_28565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (6))){
var inst_28514 = (state_28537[(7)]);
var inst_28520 = p.call(null,inst_28514);
var state_28537__$1 = state_28537;
if(cljs.core.truth_(inst_28520)){
var statearr_28545_28566 = state_28537__$1;
(statearr_28545_28566[(1)] = (9));

} else {
var statearr_28546_28567 = state_28537__$1;
(statearr_28546_28567[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (3))){
var inst_28535 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28537__$1,inst_28535);
} else {
if((state_val_28538 === (12))){
var state_28537__$1 = state_28537;
var statearr_28547_28568 = state_28537__$1;
(statearr_28547_28568[(2)] = null);

(statearr_28547_28568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (2))){
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(4),ch);
} else {
if((state_val_28538 === (11))){
var inst_28514 = (state_28537[(7)]);
var inst_28524 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28537__$1,(8),inst_28524,inst_28514);
} else {
if((state_val_28538 === (9))){
var state_28537__$1 = state_28537;
var statearr_28548_28569 = state_28537__$1;
(statearr_28548_28569[(2)] = tc);

(statearr_28548_28569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (5))){
var inst_28517 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28518 = cljs.core.async.close_BANG_.call(null,fc);
var state_28537__$1 = (function (){var statearr_28549 = state_28537;
(statearr_28549[(8)] = inst_28517);

return statearr_28549;
})();
var statearr_28550_28570 = state_28537__$1;
(statearr_28550_28570[(2)] = inst_28518);

(statearr_28550_28570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (14))){
var inst_28531 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28551_28571 = state_28537__$1;
(statearr_28551_28571[(2)] = inst_28531);

(statearr_28551_28571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (10))){
var state_28537__$1 = state_28537;
var statearr_28552_28572 = state_28537__$1;
(statearr_28552_28572[(2)] = fc);

(statearr_28552_28572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (8))){
var inst_28526 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
if(cljs.core.truth_(inst_28526)){
var statearr_28553_28573 = state_28537__$1;
(statearr_28553_28573[(1)] = (12));

} else {
var statearr_28554_28574 = state_28537__$1;
(statearr_28554_28574[(1)] = (13));

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
});})(c__28110__auto___28560,tc,fc))
;
return ((function (switch__28020__auto__,c__28110__auto___28560,tc,fc){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_28555 = [null,null,null,null,null,null,null,null,null];
(statearr_28555[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_28555[(1)] = (1));

return statearr_28555;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_28537){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28556){if((e28556 instanceof Object)){
var ex__28024__auto__ = e28556;
var statearr_28557_28575 = state_28537;
(statearr_28557_28575[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28576 = state_28537;
state_28537 = G__28576;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_28537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_28537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___28560,tc,fc))
})();
var state__28112__auto__ = (function (){var statearr_28558 = f__28111__auto__.call(null);
(statearr_28558[(6)] = c__28110__auto___28560);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___28560,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__){
return (function (state_28597){
var state_val_28598 = (state_28597[(1)]);
if((state_val_28598 === (7))){
var inst_28593 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
var statearr_28599_28617 = state_28597__$1;
(statearr_28599_28617[(2)] = inst_28593);

(statearr_28599_28617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (1))){
var inst_28577 = init;
var state_28597__$1 = (function (){var statearr_28600 = state_28597;
(statearr_28600[(7)] = inst_28577);

return statearr_28600;
})();
var statearr_28601_28618 = state_28597__$1;
(statearr_28601_28618[(2)] = null);

(statearr_28601_28618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (4))){
var inst_28580 = (state_28597[(8)]);
var inst_28580__$1 = (state_28597[(2)]);
var inst_28581 = (inst_28580__$1 == null);
var state_28597__$1 = (function (){var statearr_28602 = state_28597;
(statearr_28602[(8)] = inst_28580__$1);

return statearr_28602;
})();
if(cljs.core.truth_(inst_28581)){
var statearr_28603_28619 = state_28597__$1;
(statearr_28603_28619[(1)] = (5));

} else {
var statearr_28604_28620 = state_28597__$1;
(statearr_28604_28620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (6))){
var inst_28577 = (state_28597[(7)]);
var inst_28584 = (state_28597[(9)]);
var inst_28580 = (state_28597[(8)]);
var inst_28584__$1 = f.call(null,inst_28577,inst_28580);
var inst_28585 = cljs.core.reduced_QMARK_.call(null,inst_28584__$1);
var state_28597__$1 = (function (){var statearr_28605 = state_28597;
(statearr_28605[(9)] = inst_28584__$1);

return statearr_28605;
})();
if(inst_28585){
var statearr_28606_28621 = state_28597__$1;
(statearr_28606_28621[(1)] = (8));

} else {
var statearr_28607_28622 = state_28597__$1;
(statearr_28607_28622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (3))){
var inst_28595 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28597__$1,inst_28595);
} else {
if((state_val_28598 === (2))){
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28597__$1,(4),ch);
} else {
if((state_val_28598 === (9))){
var inst_28584 = (state_28597[(9)]);
var inst_28577 = inst_28584;
var state_28597__$1 = (function (){var statearr_28608 = state_28597;
(statearr_28608[(7)] = inst_28577);

return statearr_28608;
})();
var statearr_28609_28623 = state_28597__$1;
(statearr_28609_28623[(2)] = null);

(statearr_28609_28623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (5))){
var inst_28577 = (state_28597[(7)]);
var state_28597__$1 = state_28597;
var statearr_28610_28624 = state_28597__$1;
(statearr_28610_28624[(2)] = inst_28577);

(statearr_28610_28624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (10))){
var inst_28591 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
var statearr_28611_28625 = state_28597__$1;
(statearr_28611_28625[(2)] = inst_28591);

(statearr_28611_28625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (8))){
var inst_28584 = (state_28597[(9)]);
var inst_28587 = cljs.core.deref.call(null,inst_28584);
var state_28597__$1 = state_28597;
var statearr_28612_28626 = state_28597__$1;
(statearr_28612_28626[(2)] = inst_28587);

(statearr_28612_28626[(1)] = (10));


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
});})(c__28110__auto__))
;
return ((function (switch__28020__auto__,c__28110__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28021__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28021__auto____0 = (function (){
var statearr_28613 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28613[(0)] = cljs$core$async$reduce_$_state_machine__28021__auto__);

(statearr_28613[(1)] = (1));

return statearr_28613;
});
var cljs$core$async$reduce_$_state_machine__28021__auto____1 = (function (state_28597){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28614){if((e28614 instanceof Object)){
var ex__28024__auto__ = e28614;
var statearr_28615_28627 = state_28597;
(statearr_28615_28627[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28628 = state_28597;
state_28597 = G__28628;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28021__auto__ = function(state_28597){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28021__auto____1.call(this,state_28597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28021__auto____0;
cljs$core$async$reduce_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28021__auto____1;
return cljs$core$async$reduce_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__))
})();
var state__28112__auto__ = (function (){var statearr_28616 = f__28111__auto__.call(null);
(statearr_28616[(6)] = c__28110__auto__);

return statearr_28616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__))
);

return c__28110__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__,f__$1){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__,f__$1){
return (function (state_28634){
var state_val_28635 = (state_28634[(1)]);
if((state_val_28635 === (1))){
var inst_28629 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28634__$1,(2),inst_28629);
} else {
if((state_val_28635 === (2))){
var inst_28631 = (state_28634[(2)]);
var inst_28632 = f__$1.call(null,inst_28631);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28634__$1,inst_28632);
} else {
return null;
}
}
});})(c__28110__auto__,f__$1))
;
return ((function (switch__28020__auto__,c__28110__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28021__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28021__auto____0 = (function (){
var statearr_28636 = [null,null,null,null,null,null,null];
(statearr_28636[(0)] = cljs$core$async$transduce_$_state_machine__28021__auto__);

(statearr_28636[(1)] = (1));

return statearr_28636;
});
var cljs$core$async$transduce_$_state_machine__28021__auto____1 = (function (state_28634){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28637){if((e28637 instanceof Object)){
var ex__28024__auto__ = e28637;
var statearr_28638_28640 = state_28634;
(statearr_28638_28640[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28641 = state_28634;
state_28634 = G__28641;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28021__auto__ = function(state_28634){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28021__auto____1.call(this,state_28634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28021__auto____0;
cljs$core$async$transduce_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28021__auto____1;
return cljs$core$async$transduce_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__,f__$1))
})();
var state__28112__auto__ = (function (){var statearr_28639 = f__28111__auto__.call(null);
(statearr_28639[(6)] = c__28110__auto__);

return statearr_28639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__,f__$1))
);

return c__28110__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28643 = arguments.length;
switch (G__28643) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__){
return (function (state_28668){
var state_val_28669 = (state_28668[(1)]);
if((state_val_28669 === (7))){
var inst_28650 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
var statearr_28670_28691 = state_28668__$1;
(statearr_28670_28691[(2)] = inst_28650);

(statearr_28670_28691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (1))){
var inst_28644 = cljs.core.seq.call(null,coll);
var inst_28645 = inst_28644;
var state_28668__$1 = (function (){var statearr_28671 = state_28668;
(statearr_28671[(7)] = inst_28645);

return statearr_28671;
})();
var statearr_28672_28692 = state_28668__$1;
(statearr_28672_28692[(2)] = null);

(statearr_28672_28692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (4))){
var inst_28645 = (state_28668[(7)]);
var inst_28648 = cljs.core.first.call(null,inst_28645);
var state_28668__$1 = state_28668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28668__$1,(7),ch,inst_28648);
} else {
if((state_val_28669 === (13))){
var inst_28662 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
var statearr_28673_28693 = state_28668__$1;
(statearr_28673_28693[(2)] = inst_28662);

(statearr_28673_28693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (6))){
var inst_28653 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
if(cljs.core.truth_(inst_28653)){
var statearr_28674_28694 = state_28668__$1;
(statearr_28674_28694[(1)] = (8));

} else {
var statearr_28675_28695 = state_28668__$1;
(statearr_28675_28695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (3))){
var inst_28666 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28668__$1,inst_28666);
} else {
if((state_val_28669 === (12))){
var state_28668__$1 = state_28668;
var statearr_28676_28696 = state_28668__$1;
(statearr_28676_28696[(2)] = null);

(statearr_28676_28696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (2))){
var inst_28645 = (state_28668[(7)]);
var state_28668__$1 = state_28668;
if(cljs.core.truth_(inst_28645)){
var statearr_28677_28697 = state_28668__$1;
(statearr_28677_28697[(1)] = (4));

} else {
var statearr_28678_28698 = state_28668__$1;
(statearr_28678_28698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (11))){
var inst_28659 = cljs.core.async.close_BANG_.call(null,ch);
var state_28668__$1 = state_28668;
var statearr_28679_28699 = state_28668__$1;
(statearr_28679_28699[(2)] = inst_28659);

(statearr_28679_28699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (9))){
var state_28668__$1 = state_28668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28680_28700 = state_28668__$1;
(statearr_28680_28700[(1)] = (11));

} else {
var statearr_28681_28701 = state_28668__$1;
(statearr_28681_28701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (5))){
var inst_28645 = (state_28668[(7)]);
var state_28668__$1 = state_28668;
var statearr_28682_28702 = state_28668__$1;
(statearr_28682_28702[(2)] = inst_28645);

(statearr_28682_28702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (10))){
var inst_28664 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
var statearr_28683_28703 = state_28668__$1;
(statearr_28683_28703[(2)] = inst_28664);

(statearr_28683_28703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (8))){
var inst_28645 = (state_28668[(7)]);
var inst_28655 = cljs.core.next.call(null,inst_28645);
var inst_28645__$1 = inst_28655;
var state_28668__$1 = (function (){var statearr_28684 = state_28668;
(statearr_28684[(7)] = inst_28645__$1);

return statearr_28684;
})();
var statearr_28685_28704 = state_28668__$1;
(statearr_28685_28704[(2)] = null);

(statearr_28685_28704[(1)] = (2));


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
});})(c__28110__auto__))
;
return ((function (switch__28020__auto__,c__28110__auto__){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_28686 = [null,null,null,null,null,null,null,null];
(statearr_28686[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_28686[(1)] = (1));

return statearr_28686;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_28668){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28687){if((e28687 instanceof Object)){
var ex__28024__auto__ = e28687;
var statearr_28688_28705 = state_28668;
(statearr_28688_28705[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28706 = state_28668;
state_28668 = G__28706;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_28668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_28668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__))
})();
var state__28112__auto__ = (function (){var statearr_28689 = f__28111__auto__.call(null);
(statearr_28689[(6)] = c__28110__auto__);

return statearr_28689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__))
);

return c__28110__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28707 = (function (ch,cs,meta28708){
this.ch = ch;
this.cs = cs;
this.meta28708 = meta28708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28709,meta28708__$1){
var self__ = this;
var _28709__$1 = this;
return (new cljs.core.async.t_cljs$core$async28707(self__.ch,self__.cs,meta28708__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28709){
var self__ = this;
var _28709__$1 = this;
return self__.meta28708;
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28708","meta28708",784164229,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28707";

cljs.core.async.t_cljs$core$async28707.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28707");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28707.
 */
cljs.core.async.__GT_t_cljs$core$async28707 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28707(ch__$1,cs__$1,meta28708){
return (new cljs.core.async.t_cljs$core$async28707(ch__$1,cs__$1,meta28708));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28707(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28110__auto___28929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___28929,cs,m,dchan,dctr,done){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___28929,cs,m,dchan,dctr,done){
return (function (state_28844){
var state_val_28845 = (state_28844[(1)]);
if((state_val_28845 === (7))){
var inst_28840 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28846_28930 = state_28844__$1;
(statearr_28846_28930[(2)] = inst_28840);

(statearr_28846_28930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (20))){
var inst_28743 = (state_28844[(7)]);
var inst_28755 = cljs.core.first.call(null,inst_28743);
var inst_28756 = cljs.core.nth.call(null,inst_28755,(0),null);
var inst_28757 = cljs.core.nth.call(null,inst_28755,(1),null);
var state_28844__$1 = (function (){var statearr_28847 = state_28844;
(statearr_28847[(8)] = inst_28756);

return statearr_28847;
})();
if(cljs.core.truth_(inst_28757)){
var statearr_28848_28931 = state_28844__$1;
(statearr_28848_28931[(1)] = (22));

} else {
var statearr_28849_28932 = state_28844__$1;
(statearr_28849_28932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (27))){
var inst_28787 = (state_28844[(9)]);
var inst_28785 = (state_28844[(10)]);
var inst_28792 = (state_28844[(11)]);
var inst_28712 = (state_28844[(12)]);
var inst_28792__$1 = cljs.core._nth.call(null,inst_28785,inst_28787);
var inst_28793 = cljs.core.async.put_BANG_.call(null,inst_28792__$1,inst_28712,done);
var state_28844__$1 = (function (){var statearr_28850 = state_28844;
(statearr_28850[(11)] = inst_28792__$1);

return statearr_28850;
})();
if(cljs.core.truth_(inst_28793)){
var statearr_28851_28933 = state_28844__$1;
(statearr_28851_28933[(1)] = (30));

} else {
var statearr_28852_28934 = state_28844__$1;
(statearr_28852_28934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (1))){
var state_28844__$1 = state_28844;
var statearr_28853_28935 = state_28844__$1;
(statearr_28853_28935[(2)] = null);

(statearr_28853_28935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (24))){
var inst_28743 = (state_28844[(7)]);
var inst_28762 = (state_28844[(2)]);
var inst_28763 = cljs.core.next.call(null,inst_28743);
var inst_28721 = inst_28763;
var inst_28722 = null;
var inst_28723 = (0);
var inst_28724 = (0);
var state_28844__$1 = (function (){var statearr_28854 = state_28844;
(statearr_28854[(13)] = inst_28723);

(statearr_28854[(14)] = inst_28721);

(statearr_28854[(15)] = inst_28762);

(statearr_28854[(16)] = inst_28724);

(statearr_28854[(17)] = inst_28722);

return statearr_28854;
})();
var statearr_28855_28936 = state_28844__$1;
(statearr_28855_28936[(2)] = null);

(statearr_28855_28936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (39))){
var state_28844__$1 = state_28844;
var statearr_28859_28937 = state_28844__$1;
(statearr_28859_28937[(2)] = null);

(statearr_28859_28937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (4))){
var inst_28712 = (state_28844[(12)]);
var inst_28712__$1 = (state_28844[(2)]);
var inst_28713 = (inst_28712__$1 == null);
var state_28844__$1 = (function (){var statearr_28860 = state_28844;
(statearr_28860[(12)] = inst_28712__$1);

return statearr_28860;
})();
if(cljs.core.truth_(inst_28713)){
var statearr_28861_28938 = state_28844__$1;
(statearr_28861_28938[(1)] = (5));

} else {
var statearr_28862_28939 = state_28844__$1;
(statearr_28862_28939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (15))){
var inst_28723 = (state_28844[(13)]);
var inst_28721 = (state_28844[(14)]);
var inst_28724 = (state_28844[(16)]);
var inst_28722 = (state_28844[(17)]);
var inst_28739 = (state_28844[(2)]);
var inst_28740 = (inst_28724 + (1));
var tmp28856 = inst_28723;
var tmp28857 = inst_28721;
var tmp28858 = inst_28722;
var inst_28721__$1 = tmp28857;
var inst_28722__$1 = tmp28858;
var inst_28723__$1 = tmp28856;
var inst_28724__$1 = inst_28740;
var state_28844__$1 = (function (){var statearr_28863 = state_28844;
(statearr_28863[(18)] = inst_28739);

(statearr_28863[(13)] = inst_28723__$1);

(statearr_28863[(14)] = inst_28721__$1);

(statearr_28863[(16)] = inst_28724__$1);

(statearr_28863[(17)] = inst_28722__$1);

return statearr_28863;
})();
var statearr_28864_28940 = state_28844__$1;
(statearr_28864_28940[(2)] = null);

(statearr_28864_28940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (21))){
var inst_28766 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28868_28941 = state_28844__$1;
(statearr_28868_28941[(2)] = inst_28766);

(statearr_28868_28941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (31))){
var inst_28792 = (state_28844[(11)]);
var inst_28796 = done.call(null,null);
var inst_28797 = cljs.core.async.untap_STAR_.call(null,m,inst_28792);
var state_28844__$1 = (function (){var statearr_28869 = state_28844;
(statearr_28869[(19)] = inst_28796);

return statearr_28869;
})();
var statearr_28870_28942 = state_28844__$1;
(statearr_28870_28942[(2)] = inst_28797);

(statearr_28870_28942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (32))){
var inst_28787 = (state_28844[(9)]);
var inst_28784 = (state_28844[(20)]);
var inst_28786 = (state_28844[(21)]);
var inst_28785 = (state_28844[(10)]);
var inst_28799 = (state_28844[(2)]);
var inst_28800 = (inst_28787 + (1));
var tmp28865 = inst_28784;
var tmp28866 = inst_28786;
var tmp28867 = inst_28785;
var inst_28784__$1 = tmp28865;
var inst_28785__$1 = tmp28867;
var inst_28786__$1 = tmp28866;
var inst_28787__$1 = inst_28800;
var state_28844__$1 = (function (){var statearr_28871 = state_28844;
(statearr_28871[(22)] = inst_28799);

(statearr_28871[(9)] = inst_28787__$1);

(statearr_28871[(20)] = inst_28784__$1);

(statearr_28871[(21)] = inst_28786__$1);

(statearr_28871[(10)] = inst_28785__$1);

return statearr_28871;
})();
var statearr_28872_28943 = state_28844__$1;
(statearr_28872_28943[(2)] = null);

(statearr_28872_28943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (40))){
var inst_28812 = (state_28844[(23)]);
var inst_28816 = done.call(null,null);
var inst_28817 = cljs.core.async.untap_STAR_.call(null,m,inst_28812);
var state_28844__$1 = (function (){var statearr_28873 = state_28844;
(statearr_28873[(24)] = inst_28816);

return statearr_28873;
})();
var statearr_28874_28944 = state_28844__$1;
(statearr_28874_28944[(2)] = inst_28817);

(statearr_28874_28944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (33))){
var inst_28803 = (state_28844[(25)]);
var inst_28805 = cljs.core.chunked_seq_QMARK_.call(null,inst_28803);
var state_28844__$1 = state_28844;
if(inst_28805){
var statearr_28875_28945 = state_28844__$1;
(statearr_28875_28945[(1)] = (36));

} else {
var statearr_28876_28946 = state_28844__$1;
(statearr_28876_28946[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (13))){
var inst_28733 = (state_28844[(26)]);
var inst_28736 = cljs.core.async.close_BANG_.call(null,inst_28733);
var state_28844__$1 = state_28844;
var statearr_28877_28947 = state_28844__$1;
(statearr_28877_28947[(2)] = inst_28736);

(statearr_28877_28947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (22))){
var inst_28756 = (state_28844[(8)]);
var inst_28759 = cljs.core.async.close_BANG_.call(null,inst_28756);
var state_28844__$1 = state_28844;
var statearr_28878_28948 = state_28844__$1;
(statearr_28878_28948[(2)] = inst_28759);

(statearr_28878_28948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (36))){
var inst_28803 = (state_28844[(25)]);
var inst_28807 = cljs.core.chunk_first.call(null,inst_28803);
var inst_28808 = cljs.core.chunk_rest.call(null,inst_28803);
var inst_28809 = cljs.core.count.call(null,inst_28807);
var inst_28784 = inst_28808;
var inst_28785 = inst_28807;
var inst_28786 = inst_28809;
var inst_28787 = (0);
var state_28844__$1 = (function (){var statearr_28879 = state_28844;
(statearr_28879[(9)] = inst_28787);

(statearr_28879[(20)] = inst_28784);

(statearr_28879[(21)] = inst_28786);

(statearr_28879[(10)] = inst_28785);

return statearr_28879;
})();
var statearr_28880_28949 = state_28844__$1;
(statearr_28880_28949[(2)] = null);

(statearr_28880_28949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (41))){
var inst_28803 = (state_28844[(25)]);
var inst_28819 = (state_28844[(2)]);
var inst_28820 = cljs.core.next.call(null,inst_28803);
var inst_28784 = inst_28820;
var inst_28785 = null;
var inst_28786 = (0);
var inst_28787 = (0);
var state_28844__$1 = (function (){var statearr_28881 = state_28844;
(statearr_28881[(9)] = inst_28787);

(statearr_28881[(20)] = inst_28784);

(statearr_28881[(21)] = inst_28786);

(statearr_28881[(10)] = inst_28785);

(statearr_28881[(27)] = inst_28819);

return statearr_28881;
})();
var statearr_28882_28950 = state_28844__$1;
(statearr_28882_28950[(2)] = null);

(statearr_28882_28950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (43))){
var state_28844__$1 = state_28844;
var statearr_28883_28951 = state_28844__$1;
(statearr_28883_28951[(2)] = null);

(statearr_28883_28951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (29))){
var inst_28828 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28884_28952 = state_28844__$1;
(statearr_28884_28952[(2)] = inst_28828);

(statearr_28884_28952[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (44))){
var inst_28837 = (state_28844[(2)]);
var state_28844__$1 = (function (){var statearr_28885 = state_28844;
(statearr_28885[(28)] = inst_28837);

return statearr_28885;
})();
var statearr_28886_28953 = state_28844__$1;
(statearr_28886_28953[(2)] = null);

(statearr_28886_28953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (6))){
var inst_28776 = (state_28844[(29)]);
var inst_28775 = cljs.core.deref.call(null,cs);
var inst_28776__$1 = cljs.core.keys.call(null,inst_28775);
var inst_28777 = cljs.core.count.call(null,inst_28776__$1);
var inst_28778 = cljs.core.reset_BANG_.call(null,dctr,inst_28777);
var inst_28783 = cljs.core.seq.call(null,inst_28776__$1);
var inst_28784 = inst_28783;
var inst_28785 = null;
var inst_28786 = (0);
var inst_28787 = (0);
var state_28844__$1 = (function (){var statearr_28887 = state_28844;
(statearr_28887[(9)] = inst_28787);

(statearr_28887[(20)] = inst_28784);

(statearr_28887[(21)] = inst_28786);

(statearr_28887[(29)] = inst_28776__$1);

(statearr_28887[(10)] = inst_28785);

(statearr_28887[(30)] = inst_28778);

return statearr_28887;
})();
var statearr_28888_28954 = state_28844__$1;
(statearr_28888_28954[(2)] = null);

(statearr_28888_28954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (28))){
var inst_28784 = (state_28844[(20)]);
var inst_28803 = (state_28844[(25)]);
var inst_28803__$1 = cljs.core.seq.call(null,inst_28784);
var state_28844__$1 = (function (){var statearr_28889 = state_28844;
(statearr_28889[(25)] = inst_28803__$1);

return statearr_28889;
})();
if(inst_28803__$1){
var statearr_28890_28955 = state_28844__$1;
(statearr_28890_28955[(1)] = (33));

} else {
var statearr_28891_28956 = state_28844__$1;
(statearr_28891_28956[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (25))){
var inst_28787 = (state_28844[(9)]);
var inst_28786 = (state_28844[(21)]);
var inst_28789 = (inst_28787 < inst_28786);
var inst_28790 = inst_28789;
var state_28844__$1 = state_28844;
if(cljs.core.truth_(inst_28790)){
var statearr_28892_28957 = state_28844__$1;
(statearr_28892_28957[(1)] = (27));

} else {
var statearr_28893_28958 = state_28844__$1;
(statearr_28893_28958[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (34))){
var state_28844__$1 = state_28844;
var statearr_28894_28959 = state_28844__$1;
(statearr_28894_28959[(2)] = null);

(statearr_28894_28959[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (17))){
var state_28844__$1 = state_28844;
var statearr_28895_28960 = state_28844__$1;
(statearr_28895_28960[(2)] = null);

(statearr_28895_28960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (3))){
var inst_28842 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28844__$1,inst_28842);
} else {
if((state_val_28845 === (12))){
var inst_28771 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28896_28961 = state_28844__$1;
(statearr_28896_28961[(2)] = inst_28771);

(statearr_28896_28961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (2))){
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28844__$1,(4),ch);
} else {
if((state_val_28845 === (23))){
var state_28844__$1 = state_28844;
var statearr_28897_28962 = state_28844__$1;
(statearr_28897_28962[(2)] = null);

(statearr_28897_28962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (35))){
var inst_28826 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28898_28963 = state_28844__$1;
(statearr_28898_28963[(2)] = inst_28826);

(statearr_28898_28963[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (19))){
var inst_28743 = (state_28844[(7)]);
var inst_28747 = cljs.core.chunk_first.call(null,inst_28743);
var inst_28748 = cljs.core.chunk_rest.call(null,inst_28743);
var inst_28749 = cljs.core.count.call(null,inst_28747);
var inst_28721 = inst_28748;
var inst_28722 = inst_28747;
var inst_28723 = inst_28749;
var inst_28724 = (0);
var state_28844__$1 = (function (){var statearr_28899 = state_28844;
(statearr_28899[(13)] = inst_28723);

(statearr_28899[(14)] = inst_28721);

(statearr_28899[(16)] = inst_28724);

(statearr_28899[(17)] = inst_28722);

return statearr_28899;
})();
var statearr_28900_28964 = state_28844__$1;
(statearr_28900_28964[(2)] = null);

(statearr_28900_28964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (11))){
var inst_28721 = (state_28844[(14)]);
var inst_28743 = (state_28844[(7)]);
var inst_28743__$1 = cljs.core.seq.call(null,inst_28721);
var state_28844__$1 = (function (){var statearr_28901 = state_28844;
(statearr_28901[(7)] = inst_28743__$1);

return statearr_28901;
})();
if(inst_28743__$1){
var statearr_28902_28965 = state_28844__$1;
(statearr_28902_28965[(1)] = (16));

} else {
var statearr_28903_28966 = state_28844__$1;
(statearr_28903_28966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (9))){
var inst_28773 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28904_28967 = state_28844__$1;
(statearr_28904_28967[(2)] = inst_28773);

(statearr_28904_28967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (5))){
var inst_28719 = cljs.core.deref.call(null,cs);
var inst_28720 = cljs.core.seq.call(null,inst_28719);
var inst_28721 = inst_28720;
var inst_28722 = null;
var inst_28723 = (0);
var inst_28724 = (0);
var state_28844__$1 = (function (){var statearr_28905 = state_28844;
(statearr_28905[(13)] = inst_28723);

(statearr_28905[(14)] = inst_28721);

(statearr_28905[(16)] = inst_28724);

(statearr_28905[(17)] = inst_28722);

return statearr_28905;
})();
var statearr_28906_28968 = state_28844__$1;
(statearr_28906_28968[(2)] = null);

(statearr_28906_28968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (14))){
var state_28844__$1 = state_28844;
var statearr_28907_28969 = state_28844__$1;
(statearr_28907_28969[(2)] = null);

(statearr_28907_28969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (45))){
var inst_28834 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28908_28970 = state_28844__$1;
(statearr_28908_28970[(2)] = inst_28834);

(statearr_28908_28970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (26))){
var inst_28776 = (state_28844[(29)]);
var inst_28830 = (state_28844[(2)]);
var inst_28831 = cljs.core.seq.call(null,inst_28776);
var state_28844__$1 = (function (){var statearr_28909 = state_28844;
(statearr_28909[(31)] = inst_28830);

return statearr_28909;
})();
if(inst_28831){
var statearr_28910_28971 = state_28844__$1;
(statearr_28910_28971[(1)] = (42));

} else {
var statearr_28911_28972 = state_28844__$1;
(statearr_28911_28972[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (16))){
var inst_28743 = (state_28844[(7)]);
var inst_28745 = cljs.core.chunked_seq_QMARK_.call(null,inst_28743);
var state_28844__$1 = state_28844;
if(inst_28745){
var statearr_28912_28973 = state_28844__$1;
(statearr_28912_28973[(1)] = (19));

} else {
var statearr_28913_28974 = state_28844__$1;
(statearr_28913_28974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (38))){
var inst_28823 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28914_28975 = state_28844__$1;
(statearr_28914_28975[(2)] = inst_28823);

(statearr_28914_28975[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (30))){
var state_28844__$1 = state_28844;
var statearr_28915_28976 = state_28844__$1;
(statearr_28915_28976[(2)] = null);

(statearr_28915_28976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (10))){
var inst_28724 = (state_28844[(16)]);
var inst_28722 = (state_28844[(17)]);
var inst_28732 = cljs.core._nth.call(null,inst_28722,inst_28724);
var inst_28733 = cljs.core.nth.call(null,inst_28732,(0),null);
var inst_28734 = cljs.core.nth.call(null,inst_28732,(1),null);
var state_28844__$1 = (function (){var statearr_28916 = state_28844;
(statearr_28916[(26)] = inst_28733);

return statearr_28916;
})();
if(cljs.core.truth_(inst_28734)){
var statearr_28917_28977 = state_28844__$1;
(statearr_28917_28977[(1)] = (13));

} else {
var statearr_28918_28978 = state_28844__$1;
(statearr_28918_28978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (18))){
var inst_28769 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28919_28979 = state_28844__$1;
(statearr_28919_28979[(2)] = inst_28769);

(statearr_28919_28979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (42))){
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28844__$1,(45),dchan);
} else {
if((state_val_28845 === (37))){
var inst_28812 = (state_28844[(23)]);
var inst_28803 = (state_28844[(25)]);
var inst_28712 = (state_28844[(12)]);
var inst_28812__$1 = cljs.core.first.call(null,inst_28803);
var inst_28813 = cljs.core.async.put_BANG_.call(null,inst_28812__$1,inst_28712,done);
var state_28844__$1 = (function (){var statearr_28920 = state_28844;
(statearr_28920[(23)] = inst_28812__$1);

return statearr_28920;
})();
if(cljs.core.truth_(inst_28813)){
var statearr_28921_28980 = state_28844__$1;
(statearr_28921_28980[(1)] = (39));

} else {
var statearr_28922_28981 = state_28844__$1;
(statearr_28922_28981[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (8))){
var inst_28723 = (state_28844[(13)]);
var inst_28724 = (state_28844[(16)]);
var inst_28726 = (inst_28724 < inst_28723);
var inst_28727 = inst_28726;
var state_28844__$1 = state_28844;
if(cljs.core.truth_(inst_28727)){
var statearr_28923_28982 = state_28844__$1;
(statearr_28923_28982[(1)] = (10));

} else {
var statearr_28924_28983 = state_28844__$1;
(statearr_28924_28983[(1)] = (11));

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
});})(c__28110__auto___28929,cs,m,dchan,dctr,done))
;
return ((function (switch__28020__auto__,c__28110__auto___28929,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28021__auto__ = null;
var cljs$core$async$mult_$_state_machine__28021__auto____0 = (function (){
var statearr_28925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28925[(0)] = cljs$core$async$mult_$_state_machine__28021__auto__);

(statearr_28925[(1)] = (1));

return statearr_28925;
});
var cljs$core$async$mult_$_state_machine__28021__auto____1 = (function (state_28844){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_28844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e28926){if((e28926 instanceof Object)){
var ex__28024__auto__ = e28926;
var statearr_28927_28984 = state_28844;
(statearr_28927_28984[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28985 = state_28844;
state_28844 = G__28985;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28021__auto__ = function(state_28844){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28021__auto____1.call(this,state_28844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28021__auto____0;
cljs$core$async$mult_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28021__auto____1;
return cljs$core$async$mult_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___28929,cs,m,dchan,dctr,done))
})();
var state__28112__auto__ = (function (){var statearr_28928 = f__28111__auto__.call(null);
(statearr_28928[(6)] = c__28110__auto___28929);

return statearr_28928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___28929,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28987 = arguments.length;
switch (G__28987) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28999 = arguments.length;
var i__4500__auto___29000 = (0);
while(true){
if((i__4500__auto___29000 < len__4499__auto___28999)){
args__4502__auto__.push((arguments[i__4500__auto___29000]));

var G__29001 = (i__4500__auto___29000 + (1));
i__4500__auto___29000 = G__29001;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28993){
var map__28994 = p__28993;
var map__28994__$1 = ((((!((map__28994 == null)))?(((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var opts = map__28994__$1;
var statearr_28996_29002 = state;
(statearr_28996_29002[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28994,map__28994__$1,opts){
return (function (val){
var statearr_28997_29003 = state;
(statearr_28997_29003[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28994,map__28994__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28998_29004 = state;
(statearr_28998_29004[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28989){
var G__28990 = cljs.core.first.call(null,seq28989);
var seq28989__$1 = cljs.core.next.call(null,seq28989);
var G__28991 = cljs.core.first.call(null,seq28989__$1);
var seq28989__$2 = cljs.core.next.call(null,seq28989__$1);
var G__28992 = cljs.core.first.call(null,seq28989__$2);
var seq28989__$3 = cljs.core.next.call(null,seq28989__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28990,G__28991,G__28992,seq28989__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29005 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29006){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29006 = meta29006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29007,meta29006__$1){
var self__ = this;
var _29007__$1 = this;
return (new cljs.core.async.t_cljs$core$async29005(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29006__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29007){
var self__ = this;
var _29007__$1 = this;
return self__.meta29006;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29006","meta29006",1648362237,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29005";

cljs.core.async.t_cljs$core$async29005.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29005");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29005.
 */
cljs.core.async.__GT_t_cljs$core$async29005 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29005(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29006){
return (new cljs.core.async.t_cljs$core$async29005(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29006));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29005(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28110__auto___29169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29169,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29169,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29109){
var state_val_29110 = (state_29109[(1)]);
if((state_val_29110 === (7))){
var inst_29024 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29111_29170 = state_29109__$1;
(statearr_29111_29170[(2)] = inst_29024);

(statearr_29111_29170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (20))){
var inst_29036 = (state_29109[(7)]);
var state_29109__$1 = state_29109;
var statearr_29112_29171 = state_29109__$1;
(statearr_29112_29171[(2)] = inst_29036);

(statearr_29112_29171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (27))){
var state_29109__$1 = state_29109;
var statearr_29113_29172 = state_29109__$1;
(statearr_29113_29172[(2)] = null);

(statearr_29113_29172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (1))){
var inst_29011 = (state_29109[(8)]);
var inst_29011__$1 = calc_state.call(null);
var inst_29013 = (inst_29011__$1 == null);
var inst_29014 = cljs.core.not.call(null,inst_29013);
var state_29109__$1 = (function (){var statearr_29114 = state_29109;
(statearr_29114[(8)] = inst_29011__$1);

return statearr_29114;
})();
if(inst_29014){
var statearr_29115_29173 = state_29109__$1;
(statearr_29115_29173[(1)] = (2));

} else {
var statearr_29116_29174 = state_29109__$1;
(statearr_29116_29174[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (24))){
var inst_29083 = (state_29109[(9)]);
var inst_29060 = (state_29109[(10)]);
var inst_29069 = (state_29109[(11)]);
var inst_29083__$1 = inst_29060.call(null,inst_29069);
var state_29109__$1 = (function (){var statearr_29117 = state_29109;
(statearr_29117[(9)] = inst_29083__$1);

return statearr_29117;
})();
if(cljs.core.truth_(inst_29083__$1)){
var statearr_29118_29175 = state_29109__$1;
(statearr_29118_29175[(1)] = (29));

} else {
var statearr_29119_29176 = state_29109__$1;
(statearr_29119_29176[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (4))){
var inst_29027 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29027)){
var statearr_29120_29177 = state_29109__$1;
(statearr_29120_29177[(1)] = (8));

} else {
var statearr_29121_29178 = state_29109__$1;
(statearr_29121_29178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (15))){
var inst_29054 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29054)){
var statearr_29122_29179 = state_29109__$1;
(statearr_29122_29179[(1)] = (19));

} else {
var statearr_29123_29180 = state_29109__$1;
(statearr_29123_29180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (21))){
var inst_29059 = (state_29109[(12)]);
var inst_29059__$1 = (state_29109[(2)]);
var inst_29060 = cljs.core.get.call(null,inst_29059__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29061 = cljs.core.get.call(null,inst_29059__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29062 = cljs.core.get.call(null,inst_29059__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29109__$1 = (function (){var statearr_29124 = state_29109;
(statearr_29124[(10)] = inst_29060);

(statearr_29124[(13)] = inst_29061);

(statearr_29124[(12)] = inst_29059__$1);

return statearr_29124;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29109__$1,(22),inst_29062);
} else {
if((state_val_29110 === (31))){
var inst_29091 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29091)){
var statearr_29125_29181 = state_29109__$1;
(statearr_29125_29181[(1)] = (32));

} else {
var statearr_29126_29182 = state_29109__$1;
(statearr_29126_29182[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (32))){
var inst_29068 = (state_29109[(14)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29109__$1,(35),out,inst_29068);
} else {
if((state_val_29110 === (33))){
var inst_29059 = (state_29109[(12)]);
var inst_29036 = inst_29059;
var state_29109__$1 = (function (){var statearr_29127 = state_29109;
(statearr_29127[(7)] = inst_29036);

return statearr_29127;
})();
var statearr_29128_29183 = state_29109__$1;
(statearr_29128_29183[(2)] = null);

(statearr_29128_29183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (13))){
var inst_29036 = (state_29109[(7)]);
var inst_29043 = inst_29036.cljs$lang$protocol_mask$partition0$;
var inst_29044 = (inst_29043 & (64));
var inst_29045 = inst_29036.cljs$core$ISeq$;
var inst_29046 = (cljs.core.PROTOCOL_SENTINEL === inst_29045);
var inst_29047 = ((inst_29044) || (inst_29046));
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29047)){
var statearr_29129_29184 = state_29109__$1;
(statearr_29129_29184[(1)] = (16));

} else {
var statearr_29130_29185 = state_29109__$1;
(statearr_29130_29185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (22))){
var inst_29068 = (state_29109[(14)]);
var inst_29069 = (state_29109[(11)]);
var inst_29067 = (state_29109[(2)]);
var inst_29068__$1 = cljs.core.nth.call(null,inst_29067,(0),null);
var inst_29069__$1 = cljs.core.nth.call(null,inst_29067,(1),null);
var inst_29070 = (inst_29068__$1 == null);
var inst_29071 = cljs.core._EQ_.call(null,inst_29069__$1,change);
var inst_29072 = ((inst_29070) || (inst_29071));
var state_29109__$1 = (function (){var statearr_29131 = state_29109;
(statearr_29131[(14)] = inst_29068__$1);

(statearr_29131[(11)] = inst_29069__$1);

return statearr_29131;
})();
if(cljs.core.truth_(inst_29072)){
var statearr_29132_29186 = state_29109__$1;
(statearr_29132_29186[(1)] = (23));

} else {
var statearr_29133_29187 = state_29109__$1;
(statearr_29133_29187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (36))){
var inst_29059 = (state_29109[(12)]);
var inst_29036 = inst_29059;
var state_29109__$1 = (function (){var statearr_29134 = state_29109;
(statearr_29134[(7)] = inst_29036);

return statearr_29134;
})();
var statearr_29135_29188 = state_29109__$1;
(statearr_29135_29188[(2)] = null);

(statearr_29135_29188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (29))){
var inst_29083 = (state_29109[(9)]);
var state_29109__$1 = state_29109;
var statearr_29136_29189 = state_29109__$1;
(statearr_29136_29189[(2)] = inst_29083);

(statearr_29136_29189[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (6))){
var state_29109__$1 = state_29109;
var statearr_29137_29190 = state_29109__$1;
(statearr_29137_29190[(2)] = false);

(statearr_29137_29190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (28))){
var inst_29079 = (state_29109[(2)]);
var inst_29080 = calc_state.call(null);
var inst_29036 = inst_29080;
var state_29109__$1 = (function (){var statearr_29138 = state_29109;
(statearr_29138[(7)] = inst_29036);

(statearr_29138[(15)] = inst_29079);

return statearr_29138;
})();
var statearr_29139_29191 = state_29109__$1;
(statearr_29139_29191[(2)] = null);

(statearr_29139_29191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (25))){
var inst_29105 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29140_29192 = state_29109__$1;
(statearr_29140_29192[(2)] = inst_29105);

(statearr_29140_29192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (34))){
var inst_29103 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29141_29193 = state_29109__$1;
(statearr_29141_29193[(2)] = inst_29103);

(statearr_29141_29193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (17))){
var state_29109__$1 = state_29109;
var statearr_29142_29194 = state_29109__$1;
(statearr_29142_29194[(2)] = false);

(statearr_29142_29194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (3))){
var state_29109__$1 = state_29109;
var statearr_29143_29195 = state_29109__$1;
(statearr_29143_29195[(2)] = false);

(statearr_29143_29195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (12))){
var inst_29107 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29109__$1,inst_29107);
} else {
if((state_val_29110 === (2))){
var inst_29011 = (state_29109[(8)]);
var inst_29016 = inst_29011.cljs$lang$protocol_mask$partition0$;
var inst_29017 = (inst_29016 & (64));
var inst_29018 = inst_29011.cljs$core$ISeq$;
var inst_29019 = (cljs.core.PROTOCOL_SENTINEL === inst_29018);
var inst_29020 = ((inst_29017) || (inst_29019));
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29020)){
var statearr_29144_29196 = state_29109__$1;
(statearr_29144_29196[(1)] = (5));

} else {
var statearr_29145_29197 = state_29109__$1;
(statearr_29145_29197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (23))){
var inst_29068 = (state_29109[(14)]);
var inst_29074 = (inst_29068 == null);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29074)){
var statearr_29146_29198 = state_29109__$1;
(statearr_29146_29198[(1)] = (26));

} else {
var statearr_29147_29199 = state_29109__$1;
(statearr_29147_29199[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (35))){
var inst_29094 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29094)){
var statearr_29148_29200 = state_29109__$1;
(statearr_29148_29200[(1)] = (36));

} else {
var statearr_29149_29201 = state_29109__$1;
(statearr_29149_29201[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (19))){
var inst_29036 = (state_29109[(7)]);
var inst_29056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29036);
var state_29109__$1 = state_29109;
var statearr_29150_29202 = state_29109__$1;
(statearr_29150_29202[(2)] = inst_29056);

(statearr_29150_29202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (11))){
var inst_29036 = (state_29109[(7)]);
var inst_29040 = (inst_29036 == null);
var inst_29041 = cljs.core.not.call(null,inst_29040);
var state_29109__$1 = state_29109;
if(inst_29041){
var statearr_29151_29203 = state_29109__$1;
(statearr_29151_29203[(1)] = (13));

} else {
var statearr_29152_29204 = state_29109__$1;
(statearr_29152_29204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (9))){
var inst_29011 = (state_29109[(8)]);
var state_29109__$1 = state_29109;
var statearr_29153_29205 = state_29109__$1;
(statearr_29153_29205[(2)] = inst_29011);

(statearr_29153_29205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (5))){
var state_29109__$1 = state_29109;
var statearr_29154_29206 = state_29109__$1;
(statearr_29154_29206[(2)] = true);

(statearr_29154_29206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (14))){
var state_29109__$1 = state_29109;
var statearr_29155_29207 = state_29109__$1;
(statearr_29155_29207[(2)] = false);

(statearr_29155_29207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (26))){
var inst_29069 = (state_29109[(11)]);
var inst_29076 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29069);
var state_29109__$1 = state_29109;
var statearr_29156_29208 = state_29109__$1;
(statearr_29156_29208[(2)] = inst_29076);

(statearr_29156_29208[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (16))){
var state_29109__$1 = state_29109;
var statearr_29157_29209 = state_29109__$1;
(statearr_29157_29209[(2)] = true);

(statearr_29157_29209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (38))){
var inst_29099 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29158_29210 = state_29109__$1;
(statearr_29158_29210[(2)] = inst_29099);

(statearr_29158_29210[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (30))){
var inst_29060 = (state_29109[(10)]);
var inst_29061 = (state_29109[(13)]);
var inst_29069 = (state_29109[(11)]);
var inst_29086 = cljs.core.empty_QMARK_.call(null,inst_29060);
var inst_29087 = inst_29061.call(null,inst_29069);
var inst_29088 = cljs.core.not.call(null,inst_29087);
var inst_29089 = ((inst_29086) && (inst_29088));
var state_29109__$1 = state_29109;
var statearr_29159_29211 = state_29109__$1;
(statearr_29159_29211[(2)] = inst_29089);

(statearr_29159_29211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (10))){
var inst_29011 = (state_29109[(8)]);
var inst_29032 = (state_29109[(2)]);
var inst_29033 = cljs.core.get.call(null,inst_29032,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29034 = cljs.core.get.call(null,inst_29032,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29035 = cljs.core.get.call(null,inst_29032,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29036 = inst_29011;
var state_29109__$1 = (function (){var statearr_29160 = state_29109;
(statearr_29160[(16)] = inst_29034);

(statearr_29160[(17)] = inst_29035);

(statearr_29160[(18)] = inst_29033);

(statearr_29160[(7)] = inst_29036);

return statearr_29160;
})();
var statearr_29161_29212 = state_29109__$1;
(statearr_29161_29212[(2)] = null);

(statearr_29161_29212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (18))){
var inst_29051 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29162_29213 = state_29109__$1;
(statearr_29162_29213[(2)] = inst_29051);

(statearr_29162_29213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (37))){
var state_29109__$1 = state_29109;
var statearr_29163_29214 = state_29109__$1;
(statearr_29163_29214[(2)] = null);

(statearr_29163_29214[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (8))){
var inst_29011 = (state_29109[(8)]);
var inst_29029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29011);
var state_29109__$1 = state_29109;
var statearr_29164_29215 = state_29109__$1;
(statearr_29164_29215[(2)] = inst_29029);

(statearr_29164_29215[(1)] = (10));


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
});})(c__28110__auto___29169,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28020__auto__,c__28110__auto___29169,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28021__auto__ = null;
var cljs$core$async$mix_$_state_machine__28021__auto____0 = (function (){
var statearr_29165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29165[(0)] = cljs$core$async$mix_$_state_machine__28021__auto__);

(statearr_29165[(1)] = (1));

return statearr_29165;
});
var cljs$core$async$mix_$_state_machine__28021__auto____1 = (function (state_29109){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29166){if((e29166 instanceof Object)){
var ex__28024__auto__ = e29166;
var statearr_29167_29216 = state_29109;
(statearr_29167_29216[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29217 = state_29109;
state_29109 = G__29217;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28021__auto__ = function(state_29109){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28021__auto____1.call(this,state_29109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28021__auto____0;
cljs$core$async$mix_$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28021__auto____1;
return cljs$core$async$mix_$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29169,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28112__auto__ = (function (){var statearr_29168 = f__28111__auto__.call(null);
(statearr_29168[(6)] = c__28110__auto___29169);

return statearr_29168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29169,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29219 = arguments.length;
switch (G__29219) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29223 = arguments.length;
switch (G__29223) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__29221_SHARP_){
if(cljs.core.truth_(p1__29221_SHARP_.call(null,topic))){
return p1__29221_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29221_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29224 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29225){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29225 = meta29225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29226,meta29225__$1){
var self__ = this;
var _29226__$1 = this;
return (new cljs.core.async.t_cljs$core$async29224(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29225__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29226){
var self__ = this;
var _29226__$1 = this;
return self__.meta29225;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29225","meta29225",-171715493,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29224";

cljs.core.async.t_cljs$core$async29224.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29224");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29224.
 */
cljs.core.async.__GT_t_cljs$core$async29224 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29224(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29225){
return (new cljs.core.async.t_cljs$core$async29224(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29225));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29224(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28110__auto___29344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29344,mults,ensure_mult,p){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29344,mults,ensure_mult,p){
return (function (state_29298){
var state_val_29299 = (state_29298[(1)]);
if((state_val_29299 === (7))){
var inst_29294 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29300_29345 = state_29298__$1;
(statearr_29300_29345[(2)] = inst_29294);

(statearr_29300_29345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (20))){
var state_29298__$1 = state_29298;
var statearr_29301_29346 = state_29298__$1;
(statearr_29301_29346[(2)] = null);

(statearr_29301_29346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (1))){
var state_29298__$1 = state_29298;
var statearr_29302_29347 = state_29298__$1;
(statearr_29302_29347[(2)] = null);

(statearr_29302_29347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (24))){
var inst_29277 = (state_29298[(7)]);
var inst_29286 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29277);
var state_29298__$1 = state_29298;
var statearr_29303_29348 = state_29298__$1;
(statearr_29303_29348[(2)] = inst_29286);

(statearr_29303_29348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (4))){
var inst_29229 = (state_29298[(8)]);
var inst_29229__$1 = (state_29298[(2)]);
var inst_29230 = (inst_29229__$1 == null);
var state_29298__$1 = (function (){var statearr_29304 = state_29298;
(statearr_29304[(8)] = inst_29229__$1);

return statearr_29304;
})();
if(cljs.core.truth_(inst_29230)){
var statearr_29305_29349 = state_29298__$1;
(statearr_29305_29349[(1)] = (5));

} else {
var statearr_29306_29350 = state_29298__$1;
(statearr_29306_29350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (15))){
var inst_29271 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29307_29351 = state_29298__$1;
(statearr_29307_29351[(2)] = inst_29271);

(statearr_29307_29351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (21))){
var inst_29291 = (state_29298[(2)]);
var state_29298__$1 = (function (){var statearr_29308 = state_29298;
(statearr_29308[(9)] = inst_29291);

return statearr_29308;
})();
var statearr_29309_29352 = state_29298__$1;
(statearr_29309_29352[(2)] = null);

(statearr_29309_29352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (13))){
var inst_29253 = (state_29298[(10)]);
var inst_29255 = cljs.core.chunked_seq_QMARK_.call(null,inst_29253);
var state_29298__$1 = state_29298;
if(inst_29255){
var statearr_29310_29353 = state_29298__$1;
(statearr_29310_29353[(1)] = (16));

} else {
var statearr_29311_29354 = state_29298__$1;
(statearr_29311_29354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (22))){
var inst_29283 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29283)){
var statearr_29312_29355 = state_29298__$1;
(statearr_29312_29355[(1)] = (23));

} else {
var statearr_29313_29356 = state_29298__$1;
(statearr_29313_29356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (6))){
var inst_29279 = (state_29298[(11)]);
var inst_29277 = (state_29298[(7)]);
var inst_29229 = (state_29298[(8)]);
var inst_29277__$1 = topic_fn.call(null,inst_29229);
var inst_29278 = cljs.core.deref.call(null,mults);
var inst_29279__$1 = cljs.core.get.call(null,inst_29278,inst_29277__$1);
var state_29298__$1 = (function (){var statearr_29314 = state_29298;
(statearr_29314[(11)] = inst_29279__$1);

(statearr_29314[(7)] = inst_29277__$1);

return statearr_29314;
})();
if(cljs.core.truth_(inst_29279__$1)){
var statearr_29315_29357 = state_29298__$1;
(statearr_29315_29357[(1)] = (19));

} else {
var statearr_29316_29358 = state_29298__$1;
(statearr_29316_29358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (25))){
var inst_29288 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29317_29359 = state_29298__$1;
(statearr_29317_29359[(2)] = inst_29288);

(statearr_29317_29359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (17))){
var inst_29253 = (state_29298[(10)]);
var inst_29262 = cljs.core.first.call(null,inst_29253);
var inst_29263 = cljs.core.async.muxch_STAR_.call(null,inst_29262);
var inst_29264 = cljs.core.async.close_BANG_.call(null,inst_29263);
var inst_29265 = cljs.core.next.call(null,inst_29253);
var inst_29239 = inst_29265;
var inst_29240 = null;
var inst_29241 = (0);
var inst_29242 = (0);
var state_29298__$1 = (function (){var statearr_29318 = state_29298;
(statearr_29318[(12)] = inst_29239);

(statearr_29318[(13)] = inst_29264);

(statearr_29318[(14)] = inst_29242);

(statearr_29318[(15)] = inst_29240);

(statearr_29318[(16)] = inst_29241);

return statearr_29318;
})();
var statearr_29319_29360 = state_29298__$1;
(statearr_29319_29360[(2)] = null);

(statearr_29319_29360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (3))){
var inst_29296 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29298__$1,inst_29296);
} else {
if((state_val_29299 === (12))){
var inst_29273 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29320_29361 = state_29298__$1;
(statearr_29320_29361[(2)] = inst_29273);

(statearr_29320_29361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (2))){
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29298__$1,(4),ch);
} else {
if((state_val_29299 === (23))){
var state_29298__$1 = state_29298;
var statearr_29321_29362 = state_29298__$1;
(statearr_29321_29362[(2)] = null);

(statearr_29321_29362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (19))){
var inst_29279 = (state_29298[(11)]);
var inst_29229 = (state_29298[(8)]);
var inst_29281 = cljs.core.async.muxch_STAR_.call(null,inst_29279);
var state_29298__$1 = state_29298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29298__$1,(22),inst_29281,inst_29229);
} else {
if((state_val_29299 === (11))){
var inst_29239 = (state_29298[(12)]);
var inst_29253 = (state_29298[(10)]);
var inst_29253__$1 = cljs.core.seq.call(null,inst_29239);
var state_29298__$1 = (function (){var statearr_29322 = state_29298;
(statearr_29322[(10)] = inst_29253__$1);

return statearr_29322;
})();
if(inst_29253__$1){
var statearr_29323_29363 = state_29298__$1;
(statearr_29323_29363[(1)] = (13));

} else {
var statearr_29324_29364 = state_29298__$1;
(statearr_29324_29364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (9))){
var inst_29275 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29325_29365 = state_29298__$1;
(statearr_29325_29365[(2)] = inst_29275);

(statearr_29325_29365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (5))){
var inst_29236 = cljs.core.deref.call(null,mults);
var inst_29237 = cljs.core.vals.call(null,inst_29236);
var inst_29238 = cljs.core.seq.call(null,inst_29237);
var inst_29239 = inst_29238;
var inst_29240 = null;
var inst_29241 = (0);
var inst_29242 = (0);
var state_29298__$1 = (function (){var statearr_29326 = state_29298;
(statearr_29326[(12)] = inst_29239);

(statearr_29326[(14)] = inst_29242);

(statearr_29326[(15)] = inst_29240);

(statearr_29326[(16)] = inst_29241);

return statearr_29326;
})();
var statearr_29327_29366 = state_29298__$1;
(statearr_29327_29366[(2)] = null);

(statearr_29327_29366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (14))){
var state_29298__$1 = state_29298;
var statearr_29331_29367 = state_29298__$1;
(statearr_29331_29367[(2)] = null);

(statearr_29331_29367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (16))){
var inst_29253 = (state_29298[(10)]);
var inst_29257 = cljs.core.chunk_first.call(null,inst_29253);
var inst_29258 = cljs.core.chunk_rest.call(null,inst_29253);
var inst_29259 = cljs.core.count.call(null,inst_29257);
var inst_29239 = inst_29258;
var inst_29240 = inst_29257;
var inst_29241 = inst_29259;
var inst_29242 = (0);
var state_29298__$1 = (function (){var statearr_29332 = state_29298;
(statearr_29332[(12)] = inst_29239);

(statearr_29332[(14)] = inst_29242);

(statearr_29332[(15)] = inst_29240);

(statearr_29332[(16)] = inst_29241);

return statearr_29332;
})();
var statearr_29333_29368 = state_29298__$1;
(statearr_29333_29368[(2)] = null);

(statearr_29333_29368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (10))){
var inst_29239 = (state_29298[(12)]);
var inst_29242 = (state_29298[(14)]);
var inst_29240 = (state_29298[(15)]);
var inst_29241 = (state_29298[(16)]);
var inst_29247 = cljs.core._nth.call(null,inst_29240,inst_29242);
var inst_29248 = cljs.core.async.muxch_STAR_.call(null,inst_29247);
var inst_29249 = cljs.core.async.close_BANG_.call(null,inst_29248);
var inst_29250 = (inst_29242 + (1));
var tmp29328 = inst_29239;
var tmp29329 = inst_29240;
var tmp29330 = inst_29241;
var inst_29239__$1 = tmp29328;
var inst_29240__$1 = tmp29329;
var inst_29241__$1 = tmp29330;
var inst_29242__$1 = inst_29250;
var state_29298__$1 = (function (){var statearr_29334 = state_29298;
(statearr_29334[(12)] = inst_29239__$1);

(statearr_29334[(17)] = inst_29249);

(statearr_29334[(14)] = inst_29242__$1);

(statearr_29334[(15)] = inst_29240__$1);

(statearr_29334[(16)] = inst_29241__$1);

return statearr_29334;
})();
var statearr_29335_29369 = state_29298__$1;
(statearr_29335_29369[(2)] = null);

(statearr_29335_29369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (18))){
var inst_29268 = (state_29298[(2)]);
var state_29298__$1 = state_29298;
var statearr_29336_29370 = state_29298__$1;
(statearr_29336_29370[(2)] = inst_29268);

(statearr_29336_29370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29299 === (8))){
var inst_29242 = (state_29298[(14)]);
var inst_29241 = (state_29298[(16)]);
var inst_29244 = (inst_29242 < inst_29241);
var inst_29245 = inst_29244;
var state_29298__$1 = state_29298;
if(cljs.core.truth_(inst_29245)){
var statearr_29337_29371 = state_29298__$1;
(statearr_29337_29371[(1)] = (10));

} else {
var statearr_29338_29372 = state_29298__$1;
(statearr_29338_29372[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28110__auto___29344,mults,ensure_mult,p))
;
return ((function (switch__28020__auto__,c__28110__auto___29344,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29339[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29339[(1)] = (1));

return statearr_29339;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29298){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29340){if((e29340 instanceof Object)){
var ex__28024__auto__ = e29340;
var statearr_29341_29373 = state_29298;
(statearr_29341_29373[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29374 = state_29298;
state_29298 = G__29374;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29344,mults,ensure_mult,p))
})();
var state__28112__auto__ = (function (){var statearr_29342 = f__28111__auto__.call(null);
(statearr_29342[(6)] = c__28110__auto___29344);

return statearr_29342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29344,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29376 = arguments.length;
switch (G__29376) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29379 = arguments.length;
switch (G__29379) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29382 = arguments.length;
switch (G__29382) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28110__auto___29449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29421){
var state_val_29422 = (state_29421[(1)]);
if((state_val_29422 === (7))){
var state_29421__$1 = state_29421;
var statearr_29423_29450 = state_29421__$1;
(statearr_29423_29450[(2)] = null);

(statearr_29423_29450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (1))){
var state_29421__$1 = state_29421;
var statearr_29424_29451 = state_29421__$1;
(statearr_29424_29451[(2)] = null);

(statearr_29424_29451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (4))){
var inst_29385 = (state_29421[(7)]);
var inst_29387 = (inst_29385 < cnt);
var state_29421__$1 = state_29421;
if(cljs.core.truth_(inst_29387)){
var statearr_29425_29452 = state_29421__$1;
(statearr_29425_29452[(1)] = (6));

} else {
var statearr_29426_29453 = state_29421__$1;
(statearr_29426_29453[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (15))){
var inst_29417 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29427_29454 = state_29421__$1;
(statearr_29427_29454[(2)] = inst_29417);

(statearr_29427_29454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (13))){
var inst_29410 = cljs.core.async.close_BANG_.call(null,out);
var state_29421__$1 = state_29421;
var statearr_29428_29455 = state_29421__$1;
(statearr_29428_29455[(2)] = inst_29410);

(statearr_29428_29455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (6))){
var state_29421__$1 = state_29421;
var statearr_29429_29456 = state_29421__$1;
(statearr_29429_29456[(2)] = null);

(statearr_29429_29456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (3))){
var inst_29419 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29421__$1,inst_29419);
} else {
if((state_val_29422 === (12))){
var inst_29407 = (state_29421[(8)]);
var inst_29407__$1 = (state_29421[(2)]);
var inst_29408 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29407__$1);
var state_29421__$1 = (function (){var statearr_29430 = state_29421;
(statearr_29430[(8)] = inst_29407__$1);

return statearr_29430;
})();
if(cljs.core.truth_(inst_29408)){
var statearr_29431_29457 = state_29421__$1;
(statearr_29431_29457[(1)] = (13));

} else {
var statearr_29432_29458 = state_29421__$1;
(statearr_29432_29458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (2))){
var inst_29384 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29385 = (0);
var state_29421__$1 = (function (){var statearr_29433 = state_29421;
(statearr_29433[(9)] = inst_29384);

(statearr_29433[(7)] = inst_29385);

return statearr_29433;
})();
var statearr_29434_29459 = state_29421__$1;
(statearr_29434_29459[(2)] = null);

(statearr_29434_29459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (11))){
var inst_29385 = (state_29421[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29421,(10),Object,null,(9));
var inst_29394 = chs__$1.call(null,inst_29385);
var inst_29395 = done.call(null,inst_29385);
var inst_29396 = cljs.core.async.take_BANG_.call(null,inst_29394,inst_29395);
var state_29421__$1 = state_29421;
var statearr_29435_29460 = state_29421__$1;
(statearr_29435_29460[(2)] = inst_29396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29421__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (9))){
var inst_29385 = (state_29421[(7)]);
var inst_29398 = (state_29421[(2)]);
var inst_29399 = (inst_29385 + (1));
var inst_29385__$1 = inst_29399;
var state_29421__$1 = (function (){var statearr_29436 = state_29421;
(statearr_29436[(10)] = inst_29398);

(statearr_29436[(7)] = inst_29385__$1);

return statearr_29436;
})();
var statearr_29437_29461 = state_29421__$1;
(statearr_29437_29461[(2)] = null);

(statearr_29437_29461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (5))){
var inst_29405 = (state_29421[(2)]);
var state_29421__$1 = (function (){var statearr_29438 = state_29421;
(statearr_29438[(11)] = inst_29405);

return statearr_29438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29421__$1,(12),dchan);
} else {
if((state_val_29422 === (14))){
var inst_29407 = (state_29421[(8)]);
var inst_29412 = cljs.core.apply.call(null,f,inst_29407);
var state_29421__$1 = state_29421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29421__$1,(16),out,inst_29412);
} else {
if((state_val_29422 === (16))){
var inst_29414 = (state_29421[(2)]);
var state_29421__$1 = (function (){var statearr_29439 = state_29421;
(statearr_29439[(12)] = inst_29414);

return statearr_29439;
})();
var statearr_29440_29462 = state_29421__$1;
(statearr_29440_29462[(2)] = null);

(statearr_29440_29462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (10))){
var inst_29389 = (state_29421[(2)]);
var inst_29390 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29421__$1 = (function (){var statearr_29441 = state_29421;
(statearr_29441[(13)] = inst_29389);

return statearr_29441;
})();
var statearr_29442_29463 = state_29421__$1;
(statearr_29442_29463[(2)] = inst_29390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29421__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29422 === (8))){
var inst_29403 = (state_29421[(2)]);
var state_29421__$1 = state_29421;
var statearr_29443_29464 = state_29421__$1;
(statearr_29443_29464[(2)] = inst_29403);

(statearr_29443_29464[(1)] = (5));


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
});})(c__28110__auto___29449,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28020__auto__,c__28110__auto___29449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29444[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29444[(1)] = (1));

return statearr_29444;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29421){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29445){if((e29445 instanceof Object)){
var ex__28024__auto__ = e29445;
var statearr_29446_29465 = state_29421;
(statearr_29446_29465[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29466 = state_29421;
state_29421 = G__29466;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29449,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28112__auto__ = (function (){var statearr_29447 = f__28111__auto__.call(null);
(statearr_29447[(6)] = c__28110__auto___29449);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29449,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29469 = arguments.length;
switch (G__29469) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28110__auto___29523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29523,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29523,out){
return (function (state_29501){
var state_val_29502 = (state_29501[(1)]);
if((state_val_29502 === (7))){
var inst_29480 = (state_29501[(7)]);
var inst_29481 = (state_29501[(8)]);
var inst_29480__$1 = (state_29501[(2)]);
var inst_29481__$1 = cljs.core.nth.call(null,inst_29480__$1,(0),null);
var inst_29482 = cljs.core.nth.call(null,inst_29480__$1,(1),null);
var inst_29483 = (inst_29481__$1 == null);
var state_29501__$1 = (function (){var statearr_29503 = state_29501;
(statearr_29503[(9)] = inst_29482);

(statearr_29503[(7)] = inst_29480__$1);

(statearr_29503[(8)] = inst_29481__$1);

return statearr_29503;
})();
if(cljs.core.truth_(inst_29483)){
var statearr_29504_29524 = state_29501__$1;
(statearr_29504_29524[(1)] = (8));

} else {
var statearr_29505_29525 = state_29501__$1;
(statearr_29505_29525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (1))){
var inst_29470 = cljs.core.vec.call(null,chs);
var inst_29471 = inst_29470;
var state_29501__$1 = (function (){var statearr_29506 = state_29501;
(statearr_29506[(10)] = inst_29471);

return statearr_29506;
})();
var statearr_29507_29526 = state_29501__$1;
(statearr_29507_29526[(2)] = null);

(statearr_29507_29526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (4))){
var inst_29471 = (state_29501[(10)]);
var state_29501__$1 = state_29501;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29501__$1,(7),inst_29471);
} else {
if((state_val_29502 === (6))){
var inst_29497 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29508_29527 = state_29501__$1;
(statearr_29508_29527[(2)] = inst_29497);

(statearr_29508_29527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (3))){
var inst_29499 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29501__$1,inst_29499);
} else {
if((state_val_29502 === (2))){
var inst_29471 = (state_29501[(10)]);
var inst_29473 = cljs.core.count.call(null,inst_29471);
var inst_29474 = (inst_29473 > (0));
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29474)){
var statearr_29510_29528 = state_29501__$1;
(statearr_29510_29528[(1)] = (4));

} else {
var statearr_29511_29529 = state_29501__$1;
(statearr_29511_29529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (11))){
var inst_29471 = (state_29501[(10)]);
var inst_29490 = (state_29501[(2)]);
var tmp29509 = inst_29471;
var inst_29471__$1 = tmp29509;
var state_29501__$1 = (function (){var statearr_29512 = state_29501;
(statearr_29512[(11)] = inst_29490);

(statearr_29512[(10)] = inst_29471__$1);

return statearr_29512;
})();
var statearr_29513_29530 = state_29501__$1;
(statearr_29513_29530[(2)] = null);

(statearr_29513_29530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (9))){
var inst_29481 = (state_29501[(8)]);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29501__$1,(11),out,inst_29481);
} else {
if((state_val_29502 === (5))){
var inst_29495 = cljs.core.async.close_BANG_.call(null,out);
var state_29501__$1 = state_29501;
var statearr_29514_29531 = state_29501__$1;
(statearr_29514_29531[(2)] = inst_29495);

(statearr_29514_29531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (10))){
var inst_29493 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29515_29532 = state_29501__$1;
(statearr_29515_29532[(2)] = inst_29493);

(statearr_29515_29532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (8))){
var inst_29482 = (state_29501[(9)]);
var inst_29480 = (state_29501[(7)]);
var inst_29471 = (state_29501[(10)]);
var inst_29481 = (state_29501[(8)]);
var inst_29485 = (function (){var cs = inst_29471;
var vec__29476 = inst_29480;
var v = inst_29481;
var c = inst_29482;
return ((function (cs,vec__29476,v,c,inst_29482,inst_29480,inst_29471,inst_29481,state_val_29502,c__28110__auto___29523,out){
return (function (p1__29467_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29467_SHARP_);
});
;})(cs,vec__29476,v,c,inst_29482,inst_29480,inst_29471,inst_29481,state_val_29502,c__28110__auto___29523,out))
})();
var inst_29486 = cljs.core.filterv.call(null,inst_29485,inst_29471);
var inst_29471__$1 = inst_29486;
var state_29501__$1 = (function (){var statearr_29516 = state_29501;
(statearr_29516[(10)] = inst_29471__$1);

return statearr_29516;
})();
var statearr_29517_29533 = state_29501__$1;
(statearr_29517_29533[(2)] = null);

(statearr_29517_29533[(1)] = (2));


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
});})(c__28110__auto___29523,out))
;
return ((function (switch__28020__auto__,c__28110__auto___29523,out){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29518[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29518[(1)] = (1));

return statearr_29518;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29501){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29519){if((e29519 instanceof Object)){
var ex__28024__auto__ = e29519;
var statearr_29520_29534 = state_29501;
(statearr_29520_29534[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29535 = state_29501;
state_29501 = G__29535;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29523,out))
})();
var state__28112__auto__ = (function (){var statearr_29521 = f__28111__auto__.call(null);
(statearr_29521[(6)] = c__28110__auto___29523);

return statearr_29521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29523,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29537 = arguments.length;
switch (G__29537) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28110__auto___29582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29582,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29582,out){
return (function (state_29561){
var state_val_29562 = (state_29561[(1)]);
if((state_val_29562 === (7))){
var inst_29543 = (state_29561[(7)]);
var inst_29543__$1 = (state_29561[(2)]);
var inst_29544 = (inst_29543__$1 == null);
var inst_29545 = cljs.core.not.call(null,inst_29544);
var state_29561__$1 = (function (){var statearr_29563 = state_29561;
(statearr_29563[(7)] = inst_29543__$1);

return statearr_29563;
})();
if(inst_29545){
var statearr_29564_29583 = state_29561__$1;
(statearr_29564_29583[(1)] = (8));

} else {
var statearr_29565_29584 = state_29561__$1;
(statearr_29565_29584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (1))){
var inst_29538 = (0);
var state_29561__$1 = (function (){var statearr_29566 = state_29561;
(statearr_29566[(8)] = inst_29538);

return statearr_29566;
})();
var statearr_29567_29585 = state_29561__$1;
(statearr_29567_29585[(2)] = null);

(statearr_29567_29585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (4))){
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29561__$1,(7),ch);
} else {
if((state_val_29562 === (6))){
var inst_29556 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29568_29586 = state_29561__$1;
(statearr_29568_29586[(2)] = inst_29556);

(statearr_29568_29586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (3))){
var inst_29558 = (state_29561[(2)]);
var inst_29559 = cljs.core.async.close_BANG_.call(null,out);
var state_29561__$1 = (function (){var statearr_29569 = state_29561;
(statearr_29569[(9)] = inst_29558);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29561__$1,inst_29559);
} else {
if((state_val_29562 === (2))){
var inst_29538 = (state_29561[(8)]);
var inst_29540 = (inst_29538 < n);
var state_29561__$1 = state_29561;
if(cljs.core.truth_(inst_29540)){
var statearr_29570_29587 = state_29561__$1;
(statearr_29570_29587[(1)] = (4));

} else {
var statearr_29571_29588 = state_29561__$1;
(statearr_29571_29588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (11))){
var inst_29538 = (state_29561[(8)]);
var inst_29548 = (state_29561[(2)]);
var inst_29549 = (inst_29538 + (1));
var inst_29538__$1 = inst_29549;
var state_29561__$1 = (function (){var statearr_29572 = state_29561;
(statearr_29572[(8)] = inst_29538__$1);

(statearr_29572[(10)] = inst_29548);

return statearr_29572;
})();
var statearr_29573_29589 = state_29561__$1;
(statearr_29573_29589[(2)] = null);

(statearr_29573_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (9))){
var state_29561__$1 = state_29561;
var statearr_29574_29590 = state_29561__$1;
(statearr_29574_29590[(2)] = null);

(statearr_29574_29590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (5))){
var state_29561__$1 = state_29561;
var statearr_29575_29591 = state_29561__$1;
(statearr_29575_29591[(2)] = null);

(statearr_29575_29591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (10))){
var inst_29553 = (state_29561[(2)]);
var state_29561__$1 = state_29561;
var statearr_29576_29592 = state_29561__$1;
(statearr_29576_29592[(2)] = inst_29553);

(statearr_29576_29592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29562 === (8))){
var inst_29543 = (state_29561[(7)]);
var state_29561__$1 = state_29561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29561__$1,(11),out,inst_29543);
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
});})(c__28110__auto___29582,out))
;
return ((function (switch__28020__auto__,c__28110__auto___29582,out){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29577[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29577[(1)] = (1));

return statearr_29577;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29561){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29578){if((e29578 instanceof Object)){
var ex__28024__auto__ = e29578;
var statearr_29579_29593 = state_29561;
(statearr_29579_29593[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29594 = state_29561;
state_29561 = G__29594;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29582,out))
})();
var state__28112__auto__ = (function (){var statearr_29580 = f__28111__auto__.call(null);
(statearr_29580[(6)] = c__28110__auto___29582);

return statearr_29580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29582,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29596 = (function (f,ch,meta29597){
this.f = f;
this.ch = ch;
this.meta29597 = meta29597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29598,meta29597__$1){
var self__ = this;
var _29598__$1 = this;
return (new cljs.core.async.t_cljs$core$async29596(self__.f,self__.ch,meta29597__$1));
});

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29598){
var self__ = this;
var _29598__$1 = this;
return self__.meta29597;
});

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29599 = (function (f,ch,meta29597,_,fn1,meta29600){
this.f = f;
this.ch = ch;
this.meta29597 = meta29597;
this._ = _;
this.fn1 = fn1;
this.meta29600 = meta29600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29601,meta29600__$1){
var self__ = this;
var _29601__$1 = this;
return (new cljs.core.async.t_cljs$core$async29599(self__.f,self__.ch,self__.meta29597,self__._,self__.fn1,meta29600__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29601){
var self__ = this;
var _29601__$1 = this;
return self__.meta29600;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29595_SHARP_){
return f1.call(null,(((p1__29595_SHARP_ == null))?null:self__.f.call(null,p1__29595_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29599.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29597","meta29597",-1273211023,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29596","cljs.core.async/t_cljs$core$async29596",1882054327,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29600","meta29600",1415748470,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29599";

cljs.core.async.t_cljs$core$async29599.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29599");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29599.
 */
cljs.core.async.__GT_t_cljs$core$async29599 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29599(f__$1,ch__$1,meta29597__$1,___$2,fn1__$1,meta29600){
return (new cljs.core.async.t_cljs$core$async29599(f__$1,ch__$1,meta29597__$1,___$2,fn1__$1,meta29600));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29599(self__.f,self__.ch,self__.meta29597,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29597","meta29597",-1273211023,null)], null);
});

cljs.core.async.t_cljs$core$async29596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29596";

cljs.core.async.t_cljs$core$async29596.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29596.
 */
cljs.core.async.__GT_t_cljs$core$async29596 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29596(f__$1,ch__$1,meta29597){
return (new cljs.core.async.t_cljs$core$async29596(f__$1,ch__$1,meta29597));
});

}

return (new cljs.core.async.t_cljs$core$async29596(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29602 = (function (f,ch,meta29603){
this.f = f;
this.ch = ch;
this.meta29603 = meta29603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29604,meta29603__$1){
var self__ = this;
var _29604__$1 = this;
return (new cljs.core.async.t_cljs$core$async29602(self__.f,self__.ch,meta29603__$1));
});

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29604){
var self__ = this;
var _29604__$1 = this;
return self__.meta29603;
});

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29603","meta29603",1352525369,null)], null);
});

cljs.core.async.t_cljs$core$async29602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29602";

cljs.core.async.t_cljs$core$async29602.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29602");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29602.
 */
cljs.core.async.__GT_t_cljs$core$async29602 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29602(f__$1,ch__$1,meta29603){
return (new cljs.core.async.t_cljs$core$async29602(f__$1,ch__$1,meta29603));
});

}

return (new cljs.core.async.t_cljs$core$async29602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29605 = (function (p,ch,meta29606){
this.p = p;
this.ch = ch;
this.meta29606 = meta29606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29607,meta29606__$1){
var self__ = this;
var _29607__$1 = this;
return (new cljs.core.async.t_cljs$core$async29605(self__.p,self__.ch,meta29606__$1));
});

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29607){
var self__ = this;
var _29607__$1 = this;
return self__.meta29606;
});

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29606","meta29606",-1083433571,null)], null);
});

cljs.core.async.t_cljs$core$async29605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29605";

cljs.core.async.t_cljs$core$async29605.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29605");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29605.
 */
cljs.core.async.__GT_t_cljs$core$async29605 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29605(p__$1,ch__$1,meta29606){
return (new cljs.core.async.t_cljs$core$async29605(p__$1,ch__$1,meta29606));
});

}

return (new cljs.core.async.t_cljs$core$async29605(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29609 = arguments.length;
switch (G__29609) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28110__auto___29649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29649,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29649,out){
return (function (state_29630){
var state_val_29631 = (state_29630[(1)]);
if((state_val_29631 === (7))){
var inst_29626 = (state_29630[(2)]);
var state_29630__$1 = state_29630;
var statearr_29632_29650 = state_29630__$1;
(statearr_29632_29650[(2)] = inst_29626);

(statearr_29632_29650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (1))){
var state_29630__$1 = state_29630;
var statearr_29633_29651 = state_29630__$1;
(statearr_29633_29651[(2)] = null);

(statearr_29633_29651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (4))){
var inst_29612 = (state_29630[(7)]);
var inst_29612__$1 = (state_29630[(2)]);
var inst_29613 = (inst_29612__$1 == null);
var state_29630__$1 = (function (){var statearr_29634 = state_29630;
(statearr_29634[(7)] = inst_29612__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29613)){
var statearr_29635_29652 = state_29630__$1;
(statearr_29635_29652[(1)] = (5));

} else {
var statearr_29636_29653 = state_29630__$1;
(statearr_29636_29653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (6))){
var inst_29612 = (state_29630[(7)]);
var inst_29617 = p.call(null,inst_29612);
var state_29630__$1 = state_29630;
if(cljs.core.truth_(inst_29617)){
var statearr_29637_29654 = state_29630__$1;
(statearr_29637_29654[(1)] = (8));

} else {
var statearr_29638_29655 = state_29630__$1;
(statearr_29638_29655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (3))){
var inst_29628 = (state_29630[(2)]);
var state_29630__$1 = state_29630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29630__$1,inst_29628);
} else {
if((state_val_29631 === (2))){
var state_29630__$1 = state_29630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29630__$1,(4),ch);
} else {
if((state_val_29631 === (11))){
var inst_29620 = (state_29630[(2)]);
var state_29630__$1 = state_29630;
var statearr_29639_29656 = state_29630__$1;
(statearr_29639_29656[(2)] = inst_29620);

(statearr_29639_29656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (9))){
var state_29630__$1 = state_29630;
var statearr_29640_29657 = state_29630__$1;
(statearr_29640_29657[(2)] = null);

(statearr_29640_29657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (5))){
var inst_29615 = cljs.core.async.close_BANG_.call(null,out);
var state_29630__$1 = state_29630;
var statearr_29641_29658 = state_29630__$1;
(statearr_29641_29658[(2)] = inst_29615);

(statearr_29641_29658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (10))){
var inst_29623 = (state_29630[(2)]);
var state_29630__$1 = (function (){var statearr_29642 = state_29630;
(statearr_29642[(8)] = inst_29623);

return statearr_29642;
})();
var statearr_29643_29659 = state_29630__$1;
(statearr_29643_29659[(2)] = null);

(statearr_29643_29659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29631 === (8))){
var inst_29612 = (state_29630[(7)]);
var state_29630__$1 = state_29630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29630__$1,(11),out,inst_29612);
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
});})(c__28110__auto___29649,out))
;
return ((function (switch__28020__auto__,c__28110__auto___29649,out){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29644 = [null,null,null,null,null,null,null,null,null];
(statearr_29644[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29644[(1)] = (1));

return statearr_29644;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29630){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29645){if((e29645 instanceof Object)){
var ex__28024__auto__ = e29645;
var statearr_29646_29660 = state_29630;
(statearr_29646_29660[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29661 = state_29630;
state_29630 = G__29661;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29649,out))
})();
var state__28112__auto__ = (function (){var statearr_29647 = f__28111__auto__.call(null);
(statearr_29647[(6)] = c__28110__auto___29649);

return statearr_29647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29649,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28110__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto__){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto__){
return (function (state_29726){
var state_val_29727 = (state_29726[(1)]);
if((state_val_29727 === (7))){
var inst_29722 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29728_29766 = state_29726__$1;
(statearr_29728_29766[(2)] = inst_29722);

(statearr_29728_29766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (20))){
var inst_29692 = (state_29726[(7)]);
var inst_29703 = (state_29726[(2)]);
var inst_29704 = cljs.core.next.call(null,inst_29692);
var inst_29678 = inst_29704;
var inst_29679 = null;
var inst_29680 = (0);
var inst_29681 = (0);
var state_29726__$1 = (function (){var statearr_29729 = state_29726;
(statearr_29729[(8)] = inst_29680);

(statearr_29729[(9)] = inst_29679);

(statearr_29729[(10)] = inst_29703);

(statearr_29729[(11)] = inst_29681);

(statearr_29729[(12)] = inst_29678);

return statearr_29729;
})();
var statearr_29730_29767 = state_29726__$1;
(statearr_29730_29767[(2)] = null);

(statearr_29730_29767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (1))){
var state_29726__$1 = state_29726;
var statearr_29731_29768 = state_29726__$1;
(statearr_29731_29768[(2)] = null);

(statearr_29731_29768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (4))){
var inst_29667 = (state_29726[(13)]);
var inst_29667__$1 = (state_29726[(2)]);
var inst_29668 = (inst_29667__$1 == null);
var state_29726__$1 = (function (){var statearr_29732 = state_29726;
(statearr_29732[(13)] = inst_29667__$1);

return statearr_29732;
})();
if(cljs.core.truth_(inst_29668)){
var statearr_29733_29769 = state_29726__$1;
(statearr_29733_29769[(1)] = (5));

} else {
var statearr_29734_29770 = state_29726__$1;
(statearr_29734_29770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (15))){
var state_29726__$1 = state_29726;
var statearr_29738_29771 = state_29726__$1;
(statearr_29738_29771[(2)] = null);

(statearr_29738_29771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (21))){
var state_29726__$1 = state_29726;
var statearr_29739_29772 = state_29726__$1;
(statearr_29739_29772[(2)] = null);

(statearr_29739_29772[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (13))){
var inst_29680 = (state_29726[(8)]);
var inst_29679 = (state_29726[(9)]);
var inst_29681 = (state_29726[(11)]);
var inst_29678 = (state_29726[(12)]);
var inst_29688 = (state_29726[(2)]);
var inst_29689 = (inst_29681 + (1));
var tmp29735 = inst_29680;
var tmp29736 = inst_29679;
var tmp29737 = inst_29678;
var inst_29678__$1 = tmp29737;
var inst_29679__$1 = tmp29736;
var inst_29680__$1 = tmp29735;
var inst_29681__$1 = inst_29689;
var state_29726__$1 = (function (){var statearr_29740 = state_29726;
(statearr_29740[(8)] = inst_29680__$1);

(statearr_29740[(9)] = inst_29679__$1);

(statearr_29740[(11)] = inst_29681__$1);

(statearr_29740[(12)] = inst_29678__$1);

(statearr_29740[(14)] = inst_29688);

return statearr_29740;
})();
var statearr_29741_29773 = state_29726__$1;
(statearr_29741_29773[(2)] = null);

(statearr_29741_29773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (22))){
var state_29726__$1 = state_29726;
var statearr_29742_29774 = state_29726__$1;
(statearr_29742_29774[(2)] = null);

(statearr_29742_29774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (6))){
var inst_29667 = (state_29726[(13)]);
var inst_29676 = f.call(null,inst_29667);
var inst_29677 = cljs.core.seq.call(null,inst_29676);
var inst_29678 = inst_29677;
var inst_29679 = null;
var inst_29680 = (0);
var inst_29681 = (0);
var state_29726__$1 = (function (){var statearr_29743 = state_29726;
(statearr_29743[(8)] = inst_29680);

(statearr_29743[(9)] = inst_29679);

(statearr_29743[(11)] = inst_29681);

(statearr_29743[(12)] = inst_29678);

return statearr_29743;
})();
var statearr_29744_29775 = state_29726__$1;
(statearr_29744_29775[(2)] = null);

(statearr_29744_29775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (17))){
var inst_29692 = (state_29726[(7)]);
var inst_29696 = cljs.core.chunk_first.call(null,inst_29692);
var inst_29697 = cljs.core.chunk_rest.call(null,inst_29692);
var inst_29698 = cljs.core.count.call(null,inst_29696);
var inst_29678 = inst_29697;
var inst_29679 = inst_29696;
var inst_29680 = inst_29698;
var inst_29681 = (0);
var state_29726__$1 = (function (){var statearr_29745 = state_29726;
(statearr_29745[(8)] = inst_29680);

(statearr_29745[(9)] = inst_29679);

(statearr_29745[(11)] = inst_29681);

(statearr_29745[(12)] = inst_29678);

return statearr_29745;
})();
var statearr_29746_29776 = state_29726__$1;
(statearr_29746_29776[(2)] = null);

(statearr_29746_29776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (3))){
var inst_29724 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29726__$1,inst_29724);
} else {
if((state_val_29727 === (12))){
var inst_29712 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29747_29777 = state_29726__$1;
(statearr_29747_29777[(2)] = inst_29712);

(statearr_29747_29777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (2))){
var state_29726__$1 = state_29726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29726__$1,(4),in$);
} else {
if((state_val_29727 === (23))){
var inst_29720 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29748_29778 = state_29726__$1;
(statearr_29748_29778[(2)] = inst_29720);

(statearr_29748_29778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (19))){
var inst_29707 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29749_29779 = state_29726__$1;
(statearr_29749_29779[(2)] = inst_29707);

(statearr_29749_29779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (11))){
var inst_29692 = (state_29726[(7)]);
var inst_29678 = (state_29726[(12)]);
var inst_29692__$1 = cljs.core.seq.call(null,inst_29678);
var state_29726__$1 = (function (){var statearr_29750 = state_29726;
(statearr_29750[(7)] = inst_29692__$1);

return statearr_29750;
})();
if(inst_29692__$1){
var statearr_29751_29780 = state_29726__$1;
(statearr_29751_29780[(1)] = (14));

} else {
var statearr_29752_29781 = state_29726__$1;
(statearr_29752_29781[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (9))){
var inst_29714 = (state_29726[(2)]);
var inst_29715 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29726__$1 = (function (){var statearr_29753 = state_29726;
(statearr_29753[(15)] = inst_29714);

return statearr_29753;
})();
if(cljs.core.truth_(inst_29715)){
var statearr_29754_29782 = state_29726__$1;
(statearr_29754_29782[(1)] = (21));

} else {
var statearr_29755_29783 = state_29726__$1;
(statearr_29755_29783[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (5))){
var inst_29670 = cljs.core.async.close_BANG_.call(null,out);
var state_29726__$1 = state_29726;
var statearr_29756_29784 = state_29726__$1;
(statearr_29756_29784[(2)] = inst_29670);

(statearr_29756_29784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (14))){
var inst_29692 = (state_29726[(7)]);
var inst_29694 = cljs.core.chunked_seq_QMARK_.call(null,inst_29692);
var state_29726__$1 = state_29726;
if(inst_29694){
var statearr_29757_29785 = state_29726__$1;
(statearr_29757_29785[(1)] = (17));

} else {
var statearr_29758_29786 = state_29726__$1;
(statearr_29758_29786[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (16))){
var inst_29710 = (state_29726[(2)]);
var state_29726__$1 = state_29726;
var statearr_29759_29787 = state_29726__$1;
(statearr_29759_29787[(2)] = inst_29710);

(statearr_29759_29787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29727 === (10))){
var inst_29679 = (state_29726[(9)]);
var inst_29681 = (state_29726[(11)]);
var inst_29686 = cljs.core._nth.call(null,inst_29679,inst_29681);
var state_29726__$1 = state_29726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29726__$1,(13),out,inst_29686);
} else {
if((state_val_29727 === (18))){
var inst_29692 = (state_29726[(7)]);
var inst_29701 = cljs.core.first.call(null,inst_29692);
var state_29726__$1 = state_29726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29726__$1,(20),out,inst_29701);
} else {
if((state_val_29727 === (8))){
var inst_29680 = (state_29726[(8)]);
var inst_29681 = (state_29726[(11)]);
var inst_29683 = (inst_29681 < inst_29680);
var inst_29684 = inst_29683;
var state_29726__$1 = state_29726;
if(cljs.core.truth_(inst_29684)){
var statearr_29760_29788 = state_29726__$1;
(statearr_29760_29788[(1)] = (10));

} else {
var statearr_29761_29789 = state_29726__$1;
(statearr_29761_29789[(1)] = (11));

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
}
}
}
}
}
}
});})(c__28110__auto__))
;
return ((function (switch__28020__auto__,c__28110__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28021__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28021__auto____0 = (function (){
var statearr_29762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29762[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28021__auto__);

(statearr_29762[(1)] = (1));

return statearr_29762;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28021__auto____1 = (function (state_29726){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29763){if((e29763 instanceof Object)){
var ex__28024__auto__ = e29763;
var statearr_29764_29790 = state_29726;
(statearr_29764_29790[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29791 = state_29726;
state_29726 = G__29791;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28021__auto__ = function(state_29726){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28021__auto____1.call(this,state_29726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28021__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28021__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto__))
})();
var state__28112__auto__ = (function (){var statearr_29765 = f__28111__auto__.call(null);
(statearr_29765[(6)] = c__28110__auto__);

return statearr_29765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto__))
);

return c__28110__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29793 = arguments.length;
switch (G__29793) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29796 = arguments.length;
switch (G__29796) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29799 = arguments.length;
switch (G__29799) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28110__auto___29846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29846,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29846,out){
return (function (state_29823){
var state_val_29824 = (state_29823[(1)]);
if((state_val_29824 === (7))){
var inst_29818 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29825_29847 = state_29823__$1;
(statearr_29825_29847[(2)] = inst_29818);

(statearr_29825_29847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (1))){
var inst_29800 = null;
var state_29823__$1 = (function (){var statearr_29826 = state_29823;
(statearr_29826[(7)] = inst_29800);

return statearr_29826;
})();
var statearr_29827_29848 = state_29823__$1;
(statearr_29827_29848[(2)] = null);

(statearr_29827_29848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (4))){
var inst_29803 = (state_29823[(8)]);
var inst_29803__$1 = (state_29823[(2)]);
var inst_29804 = (inst_29803__$1 == null);
var inst_29805 = cljs.core.not.call(null,inst_29804);
var state_29823__$1 = (function (){var statearr_29828 = state_29823;
(statearr_29828[(8)] = inst_29803__$1);

return statearr_29828;
})();
if(inst_29805){
var statearr_29829_29849 = state_29823__$1;
(statearr_29829_29849[(1)] = (5));

} else {
var statearr_29830_29850 = state_29823__$1;
(statearr_29830_29850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (6))){
var state_29823__$1 = state_29823;
var statearr_29831_29851 = state_29823__$1;
(statearr_29831_29851[(2)] = null);

(statearr_29831_29851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (3))){
var inst_29820 = (state_29823[(2)]);
var inst_29821 = cljs.core.async.close_BANG_.call(null,out);
var state_29823__$1 = (function (){var statearr_29832 = state_29823;
(statearr_29832[(9)] = inst_29820);

return statearr_29832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29823__$1,inst_29821);
} else {
if((state_val_29824 === (2))){
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29823__$1,(4),ch);
} else {
if((state_val_29824 === (11))){
var inst_29803 = (state_29823[(8)]);
var inst_29812 = (state_29823[(2)]);
var inst_29800 = inst_29803;
var state_29823__$1 = (function (){var statearr_29833 = state_29823;
(statearr_29833[(10)] = inst_29812);

(statearr_29833[(7)] = inst_29800);

return statearr_29833;
})();
var statearr_29834_29852 = state_29823__$1;
(statearr_29834_29852[(2)] = null);

(statearr_29834_29852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (9))){
var inst_29803 = (state_29823[(8)]);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29823__$1,(11),out,inst_29803);
} else {
if((state_val_29824 === (5))){
var inst_29800 = (state_29823[(7)]);
var inst_29803 = (state_29823[(8)]);
var inst_29807 = cljs.core._EQ_.call(null,inst_29803,inst_29800);
var state_29823__$1 = state_29823;
if(inst_29807){
var statearr_29836_29853 = state_29823__$1;
(statearr_29836_29853[(1)] = (8));

} else {
var statearr_29837_29854 = state_29823__$1;
(statearr_29837_29854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (10))){
var inst_29815 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29838_29855 = state_29823__$1;
(statearr_29838_29855[(2)] = inst_29815);

(statearr_29838_29855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (8))){
var inst_29800 = (state_29823[(7)]);
var tmp29835 = inst_29800;
var inst_29800__$1 = tmp29835;
var state_29823__$1 = (function (){var statearr_29839 = state_29823;
(statearr_29839[(7)] = inst_29800__$1);

return statearr_29839;
})();
var statearr_29840_29856 = state_29823__$1;
(statearr_29840_29856[(2)] = null);

(statearr_29840_29856[(1)] = (2));


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
});})(c__28110__auto___29846,out))
;
return ((function (switch__28020__auto__,c__28110__auto___29846,out){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29841[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29841[(1)] = (1));

return statearr_29841;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29823){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29842){if((e29842 instanceof Object)){
var ex__28024__auto__ = e29842;
var statearr_29843_29857 = state_29823;
(statearr_29843_29857[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29858 = state_29823;
state_29823 = G__29858;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29846,out))
})();
var state__28112__auto__ = (function (){var statearr_29844 = f__28111__auto__.call(null);
(statearr_29844[(6)] = c__28110__auto___29846);

return statearr_29844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29846,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29860 = arguments.length;
switch (G__29860) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28110__auto___29926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___29926,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___29926,out){
return (function (state_29898){
var state_val_29899 = (state_29898[(1)]);
if((state_val_29899 === (7))){
var inst_29894 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29900_29927 = state_29898__$1;
(statearr_29900_29927[(2)] = inst_29894);

(statearr_29900_29927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (1))){
var inst_29861 = (new Array(n));
var inst_29862 = inst_29861;
var inst_29863 = (0);
var state_29898__$1 = (function (){var statearr_29901 = state_29898;
(statearr_29901[(7)] = inst_29863);

(statearr_29901[(8)] = inst_29862);

return statearr_29901;
})();
var statearr_29902_29928 = state_29898__$1;
(statearr_29902_29928[(2)] = null);

(statearr_29902_29928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (4))){
var inst_29866 = (state_29898[(9)]);
var inst_29866__$1 = (state_29898[(2)]);
var inst_29867 = (inst_29866__$1 == null);
var inst_29868 = cljs.core.not.call(null,inst_29867);
var state_29898__$1 = (function (){var statearr_29903 = state_29898;
(statearr_29903[(9)] = inst_29866__$1);

return statearr_29903;
})();
if(inst_29868){
var statearr_29904_29929 = state_29898__$1;
(statearr_29904_29929[(1)] = (5));

} else {
var statearr_29905_29930 = state_29898__$1;
(statearr_29905_29930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (15))){
var inst_29888 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29906_29931 = state_29898__$1;
(statearr_29906_29931[(2)] = inst_29888);

(statearr_29906_29931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (13))){
var state_29898__$1 = state_29898;
var statearr_29907_29932 = state_29898__$1;
(statearr_29907_29932[(2)] = null);

(statearr_29907_29932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (6))){
var inst_29863 = (state_29898[(7)]);
var inst_29884 = (inst_29863 > (0));
var state_29898__$1 = state_29898;
if(cljs.core.truth_(inst_29884)){
var statearr_29908_29933 = state_29898__$1;
(statearr_29908_29933[(1)] = (12));

} else {
var statearr_29909_29934 = state_29898__$1;
(statearr_29909_29934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (3))){
var inst_29896 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29898__$1,inst_29896);
} else {
if((state_val_29899 === (12))){
var inst_29862 = (state_29898[(8)]);
var inst_29886 = cljs.core.vec.call(null,inst_29862);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29898__$1,(15),out,inst_29886);
} else {
if((state_val_29899 === (2))){
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29898__$1,(4),ch);
} else {
if((state_val_29899 === (11))){
var inst_29878 = (state_29898[(2)]);
var inst_29879 = (new Array(n));
var inst_29862 = inst_29879;
var inst_29863 = (0);
var state_29898__$1 = (function (){var statearr_29910 = state_29898;
(statearr_29910[(7)] = inst_29863);

(statearr_29910[(10)] = inst_29878);

(statearr_29910[(8)] = inst_29862);

return statearr_29910;
})();
var statearr_29911_29935 = state_29898__$1;
(statearr_29911_29935[(2)] = null);

(statearr_29911_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (9))){
var inst_29862 = (state_29898[(8)]);
var inst_29876 = cljs.core.vec.call(null,inst_29862);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29898__$1,(11),out,inst_29876);
} else {
if((state_val_29899 === (5))){
var inst_29863 = (state_29898[(7)]);
var inst_29862 = (state_29898[(8)]);
var inst_29871 = (state_29898[(11)]);
var inst_29866 = (state_29898[(9)]);
var inst_29870 = (inst_29862[inst_29863] = inst_29866);
var inst_29871__$1 = (inst_29863 + (1));
var inst_29872 = (inst_29871__$1 < n);
var state_29898__$1 = (function (){var statearr_29912 = state_29898;
(statearr_29912[(12)] = inst_29870);

(statearr_29912[(11)] = inst_29871__$1);

return statearr_29912;
})();
if(cljs.core.truth_(inst_29872)){
var statearr_29913_29936 = state_29898__$1;
(statearr_29913_29936[(1)] = (8));

} else {
var statearr_29914_29937 = state_29898__$1;
(statearr_29914_29937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (14))){
var inst_29891 = (state_29898[(2)]);
var inst_29892 = cljs.core.async.close_BANG_.call(null,out);
var state_29898__$1 = (function (){var statearr_29916 = state_29898;
(statearr_29916[(13)] = inst_29891);

return statearr_29916;
})();
var statearr_29917_29938 = state_29898__$1;
(statearr_29917_29938[(2)] = inst_29892);

(statearr_29917_29938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (10))){
var inst_29882 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29918_29939 = state_29898__$1;
(statearr_29918_29939[(2)] = inst_29882);

(statearr_29918_29939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (8))){
var inst_29862 = (state_29898[(8)]);
var inst_29871 = (state_29898[(11)]);
var tmp29915 = inst_29862;
var inst_29862__$1 = tmp29915;
var inst_29863 = inst_29871;
var state_29898__$1 = (function (){var statearr_29919 = state_29898;
(statearr_29919[(7)] = inst_29863);

(statearr_29919[(8)] = inst_29862__$1);

return statearr_29919;
})();
var statearr_29920_29940 = state_29898__$1;
(statearr_29920_29940[(2)] = null);

(statearr_29920_29940[(1)] = (2));


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
});})(c__28110__auto___29926,out))
;
return ((function (switch__28020__auto__,c__28110__auto___29926,out){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_29921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29921[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_29921[(1)] = (1));

return statearr_29921;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29898){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e29922){if((e29922 instanceof Object)){
var ex__28024__auto__ = e29922;
var statearr_29923_29941 = state_29898;
(statearr_29923_29941[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29942 = state_29898;
state_29898 = G__29942;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___29926,out))
})();
var state__28112__auto__ = (function (){var statearr_29924 = f__28111__auto__.call(null);
(statearr_29924[(6)] = c__28110__auto___29926);

return statearr_29924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___29926,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29944 = arguments.length;
switch (G__29944) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28110__auto___30014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28110__auto___30014,out){
return (function (){
var f__28111__auto__ = (function (){var switch__28020__auto__ = ((function (c__28110__auto___30014,out){
return (function (state_29986){
var state_val_29987 = (state_29986[(1)]);
if((state_val_29987 === (7))){
var inst_29982 = (state_29986[(2)]);
var state_29986__$1 = state_29986;
var statearr_29988_30015 = state_29986__$1;
(statearr_29988_30015[(2)] = inst_29982);

(statearr_29988_30015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (1))){
var inst_29945 = [];
var inst_29946 = inst_29945;
var inst_29947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29986__$1 = (function (){var statearr_29989 = state_29986;
(statearr_29989[(7)] = inst_29946);

(statearr_29989[(8)] = inst_29947);

return statearr_29989;
})();
var statearr_29990_30016 = state_29986__$1;
(statearr_29990_30016[(2)] = null);

(statearr_29990_30016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (4))){
var inst_29950 = (state_29986[(9)]);
var inst_29950__$1 = (state_29986[(2)]);
var inst_29951 = (inst_29950__$1 == null);
var inst_29952 = cljs.core.not.call(null,inst_29951);
var state_29986__$1 = (function (){var statearr_29991 = state_29986;
(statearr_29991[(9)] = inst_29950__$1);

return statearr_29991;
})();
if(inst_29952){
var statearr_29992_30017 = state_29986__$1;
(statearr_29992_30017[(1)] = (5));

} else {
var statearr_29993_30018 = state_29986__$1;
(statearr_29993_30018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (15))){
var inst_29976 = (state_29986[(2)]);
var state_29986__$1 = state_29986;
var statearr_29994_30019 = state_29986__$1;
(statearr_29994_30019[(2)] = inst_29976);

(statearr_29994_30019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (13))){
var state_29986__$1 = state_29986;
var statearr_29995_30020 = state_29986__$1;
(statearr_29995_30020[(2)] = null);

(statearr_29995_30020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (6))){
var inst_29946 = (state_29986[(7)]);
var inst_29971 = inst_29946.length;
var inst_29972 = (inst_29971 > (0));
var state_29986__$1 = state_29986;
if(cljs.core.truth_(inst_29972)){
var statearr_29996_30021 = state_29986__$1;
(statearr_29996_30021[(1)] = (12));

} else {
var statearr_29997_30022 = state_29986__$1;
(statearr_29997_30022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (3))){
var inst_29984 = (state_29986[(2)]);
var state_29986__$1 = state_29986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29986__$1,inst_29984);
} else {
if((state_val_29987 === (12))){
var inst_29946 = (state_29986[(7)]);
var inst_29974 = cljs.core.vec.call(null,inst_29946);
var state_29986__$1 = state_29986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29986__$1,(15),out,inst_29974);
} else {
if((state_val_29987 === (2))){
var state_29986__$1 = state_29986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29986__$1,(4),ch);
} else {
if((state_val_29987 === (11))){
var inst_29954 = (state_29986[(10)]);
var inst_29950 = (state_29986[(9)]);
var inst_29964 = (state_29986[(2)]);
var inst_29965 = [];
var inst_29966 = inst_29965.push(inst_29950);
var inst_29946 = inst_29965;
var inst_29947 = inst_29954;
var state_29986__$1 = (function (){var statearr_29998 = state_29986;
(statearr_29998[(7)] = inst_29946);

(statearr_29998[(8)] = inst_29947);

(statearr_29998[(11)] = inst_29964);

(statearr_29998[(12)] = inst_29966);

return statearr_29998;
})();
var statearr_29999_30023 = state_29986__$1;
(statearr_29999_30023[(2)] = null);

(statearr_29999_30023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (9))){
var inst_29946 = (state_29986[(7)]);
var inst_29962 = cljs.core.vec.call(null,inst_29946);
var state_29986__$1 = state_29986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29986__$1,(11),out,inst_29962);
} else {
if((state_val_29987 === (5))){
var inst_29947 = (state_29986[(8)]);
var inst_29954 = (state_29986[(10)]);
var inst_29950 = (state_29986[(9)]);
var inst_29954__$1 = f.call(null,inst_29950);
var inst_29955 = cljs.core._EQ_.call(null,inst_29954__$1,inst_29947);
var inst_29956 = cljs.core.keyword_identical_QMARK_.call(null,inst_29947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29957 = ((inst_29955) || (inst_29956));
var state_29986__$1 = (function (){var statearr_30000 = state_29986;
(statearr_30000[(10)] = inst_29954__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29957)){
var statearr_30001_30024 = state_29986__$1;
(statearr_30001_30024[(1)] = (8));

} else {
var statearr_30002_30025 = state_29986__$1;
(statearr_30002_30025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (14))){
var inst_29979 = (state_29986[(2)]);
var inst_29980 = cljs.core.async.close_BANG_.call(null,out);
var state_29986__$1 = (function (){var statearr_30004 = state_29986;
(statearr_30004[(13)] = inst_29979);

return statearr_30004;
})();
var statearr_30005_30026 = state_29986__$1;
(statearr_30005_30026[(2)] = inst_29980);

(statearr_30005_30026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (10))){
var inst_29969 = (state_29986[(2)]);
var state_29986__$1 = state_29986;
var statearr_30006_30027 = state_29986__$1;
(statearr_30006_30027[(2)] = inst_29969);

(statearr_30006_30027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (8))){
var inst_29946 = (state_29986[(7)]);
var inst_29954 = (state_29986[(10)]);
var inst_29950 = (state_29986[(9)]);
var inst_29959 = inst_29946.push(inst_29950);
var tmp30003 = inst_29946;
var inst_29946__$1 = tmp30003;
var inst_29947 = inst_29954;
var state_29986__$1 = (function (){var statearr_30007 = state_29986;
(statearr_30007[(7)] = inst_29946__$1);

(statearr_30007[(8)] = inst_29947);

(statearr_30007[(14)] = inst_29959);

return statearr_30007;
})();
var statearr_30008_30028 = state_29986__$1;
(statearr_30008_30028[(2)] = null);

(statearr_30008_30028[(1)] = (2));


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
});})(c__28110__auto___30014,out))
;
return ((function (switch__28020__auto__,c__28110__auto___30014,out){
return (function() {
var cljs$core$async$state_machine__28021__auto__ = null;
var cljs$core$async$state_machine__28021__auto____0 = (function (){
var statearr_30009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30009[(0)] = cljs$core$async$state_machine__28021__auto__);

(statearr_30009[(1)] = (1));

return statearr_30009;
});
var cljs$core$async$state_machine__28021__auto____1 = (function (state_29986){
while(true){
var ret_value__28022__auto__ = (function (){try{while(true){
var result__28023__auto__ = switch__28020__auto__.call(null,state_29986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28023__auto__;
}
break;
}
}catch (e30010){if((e30010 instanceof Object)){
var ex__28024__auto__ = e30010;
var statearr_30011_30029 = state_29986;
(statearr_30011_30029[(5)] = ex__28024__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28022__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30030 = state_29986;
state_29986 = G__30030;
continue;
} else {
return ret_value__28022__auto__;
}
break;
}
});
cljs$core$async$state_machine__28021__auto__ = function(state_29986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28021__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28021__auto____1.call(this,state_29986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28021__auto____0;
cljs$core$async$state_machine__28021__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28021__auto____1;
return cljs$core$async$state_machine__28021__auto__;
})()
;})(switch__28020__auto__,c__28110__auto___30014,out))
})();
var state__28112__auto__ = (function (){var statearr_30012 = f__28111__auto__.call(null);
(statearr_30012[(6)] = c__28110__auto___30014);

return statearr_30012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28112__auto__);
});})(c__28110__auto___30014,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1527842020061
