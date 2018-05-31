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
var G__27652 = arguments.length;
switch (G__27652) {
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
if(typeof cljs.core.async.t_cljs$core$async27653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27653 = (function (f,blockable,meta27654){
this.f = f;
this.blockable = blockable;
this.meta27654 = meta27654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27655,meta27654__$1){
var self__ = this;
var _27655__$1 = this;
return (new cljs.core.async.t_cljs$core$async27653(self__.f,self__.blockable,meta27654__$1));
});

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27655){
var self__ = this;
var _27655__$1 = this;
return self__.meta27654;
});

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27654","meta27654",-440845788,null)], null);
});

cljs.core.async.t_cljs$core$async27653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27653";

cljs.core.async.t_cljs$core$async27653.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27653");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27653.
 */
cljs.core.async.__GT_t_cljs$core$async27653 = (function cljs$core$async$__GT_t_cljs$core$async27653(f__$1,blockable__$1,meta27654){
return (new cljs.core.async.t_cljs$core$async27653(f__$1,blockable__$1,meta27654));
});

}

return (new cljs.core.async.t_cljs$core$async27653(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27659 = arguments.length;
switch (G__27659) {
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
var G__27662 = arguments.length;
switch (G__27662) {
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
var G__27665 = arguments.length;
switch (G__27665) {
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
var val_27667 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27667);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27667,ret){
return (function (){
return fn1.call(null,val_27667);
});})(val_27667,ret))
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
var G__27669 = arguments.length;
switch (G__27669) {
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
var n__4376__auto___27671 = n;
var x_27672 = (0);
while(true){
if((x_27672 < n__4376__auto___27671)){
(a[x_27672] = (0));

var G__27673 = (x_27672 + (1));
x_27672 = G__27673;
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

var G__27674 = (i + (1));
i = G__27674;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27675 = (function (flag,meta27676){
this.flag = flag;
this.meta27676 = meta27676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27677,meta27676__$1){
var self__ = this;
var _27677__$1 = this;
return (new cljs.core.async.t_cljs$core$async27675(self__.flag,meta27676__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27677){
var self__ = this;
var _27677__$1 = this;
return self__.meta27676;
});})(flag))
;

cljs.core.async.t_cljs$core$async27675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27675.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27676","meta27676",-1335868220,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27675";

cljs.core.async.t_cljs$core$async27675.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27675");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27675.
 */
cljs.core.async.__GT_t_cljs$core$async27675 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27675(flag__$1,meta27676){
return (new cljs.core.async.t_cljs$core$async27675(flag__$1,meta27676));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27675(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27678 = (function (flag,cb,meta27679){
this.flag = flag;
this.cb = cb;
this.meta27679 = meta27679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27680,meta27679__$1){
var self__ = this;
var _27680__$1 = this;
return (new cljs.core.async.t_cljs$core$async27678(self__.flag,self__.cb,meta27679__$1));
});

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27680){
var self__ = this;
var _27680__$1 = this;
return self__.meta27679;
});

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27679","meta27679",963268858,null)], null);
});

cljs.core.async.t_cljs$core$async27678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27678";

cljs.core.async.t_cljs$core$async27678.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27678");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27678.
 */
cljs.core.async.__GT_t_cljs$core$async27678 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27678(flag__$1,cb__$1,meta27679){
return (new cljs.core.async.t_cljs$core$async27678(flag__$1,cb__$1,meta27679));
});

}

return (new cljs.core.async.t_cljs$core$async27678(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27681_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27682_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27682_SHARP_,port], null));
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
var G__27683 = (i + (1));
i = G__27683;
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
var len__4499__auto___27689 = arguments.length;
var i__4500__auto___27690 = (0);
while(true){
if((i__4500__auto___27690 < len__4499__auto___27689)){
args__4502__auto__.push((arguments[i__4500__auto___27690]));

var G__27691 = (i__4500__auto___27690 + (1));
i__4500__auto___27690 = G__27691;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27686){
var map__27687 = p__27686;
var map__27687__$1 = ((((!((map__27687 == null)))?(((((map__27687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27687):map__27687);
var opts = map__27687__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27684){
var G__27685 = cljs.core.first.call(null,seq27684);
var seq27684__$1 = cljs.core.next.call(null,seq27684);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27685,seq27684__$1);
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
var G__27693 = arguments.length;
switch (G__27693) {
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
var c__27592__auto___27739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___27739){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___27739){
return (function (state_27717){
var state_val_27718 = (state_27717[(1)]);
if((state_val_27718 === (7))){
var inst_27713 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27719_27740 = state_27717__$1;
(statearr_27719_27740[(2)] = inst_27713);

(statearr_27719_27740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (1))){
var state_27717__$1 = state_27717;
var statearr_27720_27741 = state_27717__$1;
(statearr_27720_27741[(2)] = null);

(statearr_27720_27741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (4))){
var inst_27696 = (state_27717[(7)]);
var inst_27696__$1 = (state_27717[(2)]);
var inst_27697 = (inst_27696__$1 == null);
var state_27717__$1 = (function (){var statearr_27721 = state_27717;
(statearr_27721[(7)] = inst_27696__$1);

return statearr_27721;
})();
if(cljs.core.truth_(inst_27697)){
var statearr_27722_27742 = state_27717__$1;
(statearr_27722_27742[(1)] = (5));

} else {
var statearr_27723_27743 = state_27717__$1;
(statearr_27723_27743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (13))){
var state_27717__$1 = state_27717;
var statearr_27724_27744 = state_27717__$1;
(statearr_27724_27744[(2)] = null);

(statearr_27724_27744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (6))){
var inst_27696 = (state_27717[(7)]);
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27717__$1,(11),to,inst_27696);
} else {
if((state_val_27718 === (3))){
var inst_27715 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27717__$1,inst_27715);
} else {
if((state_val_27718 === (12))){
var state_27717__$1 = state_27717;
var statearr_27725_27745 = state_27717__$1;
(statearr_27725_27745[(2)] = null);

(statearr_27725_27745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (2))){
var state_27717__$1 = state_27717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27717__$1,(4),from);
} else {
if((state_val_27718 === (11))){
var inst_27706 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
if(cljs.core.truth_(inst_27706)){
var statearr_27726_27746 = state_27717__$1;
(statearr_27726_27746[(1)] = (12));

} else {
var statearr_27727_27747 = state_27717__$1;
(statearr_27727_27747[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (9))){
var state_27717__$1 = state_27717;
var statearr_27728_27748 = state_27717__$1;
(statearr_27728_27748[(2)] = null);

(statearr_27728_27748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (5))){
var state_27717__$1 = state_27717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27729_27749 = state_27717__$1;
(statearr_27729_27749[(1)] = (8));

} else {
var statearr_27730_27750 = state_27717__$1;
(statearr_27730_27750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (14))){
var inst_27711 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27731_27751 = state_27717__$1;
(statearr_27731_27751[(2)] = inst_27711);

(statearr_27731_27751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (10))){
var inst_27703 = (state_27717[(2)]);
var state_27717__$1 = state_27717;
var statearr_27732_27752 = state_27717__$1;
(statearr_27732_27752[(2)] = inst_27703);

(statearr_27732_27752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27718 === (8))){
var inst_27700 = cljs.core.async.close_BANG_.call(null,to);
var state_27717__$1 = state_27717;
var statearr_27733_27753 = state_27717__$1;
(statearr_27733_27753[(2)] = inst_27700);

(statearr_27733_27753[(1)] = (10));


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
});})(c__27592__auto___27739))
;
return ((function (switch__27502__auto__,c__27592__auto___27739){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_27734 = [null,null,null,null,null,null,null,null];
(statearr_27734[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_27734[(1)] = (1));

return statearr_27734;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_27717){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_27717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e27735){if((e27735 instanceof Object)){
var ex__27506__auto__ = e27735;
var statearr_27736_27754 = state_27717;
(statearr_27736_27754[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27755 = state_27717;
state_27717 = G__27755;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_27717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_27717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___27739))
})();
var state__27594__auto__ = (function (){var statearr_27737 = f__27593__auto__.call(null);
(statearr_27737[(6)] = c__27592__auto___27739);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___27739))
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
return (function (p__27756){
var vec__27757 = p__27756;
var v = cljs.core.nth.call(null,vec__27757,(0),null);
var p = cljs.core.nth.call(null,vec__27757,(1),null);
var job = vec__27757;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27592__auto___27928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___27928,res,vec__27757,v,p,job,jobs,results){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___27928,res,vec__27757,v,p,job,jobs,results){
return (function (state_27764){
var state_val_27765 = (state_27764[(1)]);
if((state_val_27765 === (1))){
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(2),res,v);
} else {
if((state_val_27765 === (2))){
var inst_27761 = (state_27764[(2)]);
var inst_27762 = cljs.core.async.close_BANG_.call(null,res);
var state_27764__$1 = (function (){var statearr_27766 = state_27764;
(statearr_27766[(7)] = inst_27761);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27764__$1,inst_27762);
} else {
return null;
}
}
});})(c__27592__auto___27928,res,vec__27757,v,p,job,jobs,results))
;
return ((function (switch__27502__auto__,c__27592__auto___27928,res,vec__27757,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0 = (function (){
var statearr_27767 = [null,null,null,null,null,null,null,null];
(statearr_27767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__);

(statearr_27767[(1)] = (1));

return statearr_27767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1 = (function (state_27764){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_27764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object)){
var ex__27506__auto__ = e27768;
var statearr_27769_27929 = state_27764;
(statearr_27769_27929[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27930 = state_27764;
state_27764 = G__27930;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = function(state_27764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1.call(this,state_27764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___27928,res,vec__27757,v,p,job,jobs,results))
})();
var state__27594__auto__ = (function (){var statearr_27770 = f__27593__auto__.call(null);
(statearr_27770[(6)] = c__27592__auto___27928);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___27928,res,vec__27757,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27771){
var vec__27772 = p__27771;
var v = cljs.core.nth.call(null,vec__27772,(0),null);
var p = cljs.core.nth.call(null,vec__27772,(1),null);
var job = vec__27772;
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
var n__4376__auto___27931 = n;
var __27932 = (0);
while(true){
if((__27932 < n__4376__auto___27931)){
var G__27775_27933 = type;
var G__27775_27934__$1 = (((G__27775_27933 instanceof cljs.core.Keyword))?G__27775_27933.fqn:null);
switch (G__27775_27934__$1) {
case "compute":
var c__27592__auto___27936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27932,c__27592__auto___27936,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (__27932,c__27592__auto___27936,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async){
return (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (1))){
var state_27788__$1 = state_27788;
var statearr_27790_27937 = state_27788__$1;
(statearr_27790_27937[(2)] = null);

(statearr_27790_27937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (2))){
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(4),jobs);
} else {
if((state_val_27789 === (3))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (4))){
var inst_27778 = (state_27788[(2)]);
var inst_27779 = process.call(null,inst_27778);
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27779)){
var statearr_27791_27938 = state_27788__$1;
(statearr_27791_27938[(1)] = (5));

} else {
var statearr_27792_27939 = state_27788__$1;
(statearr_27792_27939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (5))){
var state_27788__$1 = state_27788;
var statearr_27793_27940 = state_27788__$1;
(statearr_27793_27940[(2)] = null);

(statearr_27793_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (6))){
var state_27788__$1 = state_27788;
var statearr_27794_27941 = state_27788__$1;
(statearr_27794_27941[(2)] = null);

(statearr_27794_27941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (7))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27795_27942 = state_27788__$1;
(statearr_27795_27942[(2)] = inst_27784);

(statearr_27795_27942[(1)] = (3));


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
});})(__27932,c__27592__auto___27936,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async))
;
return ((function (__27932,switch__27502__auto__,c__27592__auto___27936,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null];
(statearr_27796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1 = (function (state_27788){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e27797){if((e27797 instanceof Object)){
var ex__27506__auto__ = e27797;
var statearr_27798_27943 = state_27788;
(statearr_27798_27943[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27944 = state_27788;
state_27788 = G__27944;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__;
})()
;})(__27932,switch__27502__auto__,c__27592__auto___27936,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async))
})();
var state__27594__auto__ = (function (){var statearr_27799 = f__27593__auto__.call(null);
(statearr_27799[(6)] = c__27592__auto___27936);

return statearr_27799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(__27932,c__27592__auto___27936,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async))
);


break;
case "async":
var c__27592__auto___27945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27932,c__27592__auto___27945,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (__27932,c__27592__auto___27945,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async){
return (function (state_27812){
var state_val_27813 = (state_27812[(1)]);
if((state_val_27813 === (1))){
var state_27812__$1 = state_27812;
var statearr_27814_27946 = state_27812__$1;
(statearr_27814_27946[(2)] = null);

(statearr_27814_27946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (2))){
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27812__$1,(4),jobs);
} else {
if((state_val_27813 === (3))){
var inst_27810 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27812__$1,inst_27810);
} else {
if((state_val_27813 === (4))){
var inst_27802 = (state_27812[(2)]);
var inst_27803 = async.call(null,inst_27802);
var state_27812__$1 = state_27812;
if(cljs.core.truth_(inst_27803)){
var statearr_27815_27947 = state_27812__$1;
(statearr_27815_27947[(1)] = (5));

} else {
var statearr_27816_27948 = state_27812__$1;
(statearr_27816_27948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (5))){
var state_27812__$1 = state_27812;
var statearr_27817_27949 = state_27812__$1;
(statearr_27817_27949[(2)] = null);

(statearr_27817_27949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (6))){
var state_27812__$1 = state_27812;
var statearr_27818_27950 = state_27812__$1;
(statearr_27818_27950[(2)] = null);

(statearr_27818_27950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27813 === (7))){
var inst_27808 = (state_27812[(2)]);
var state_27812__$1 = state_27812;
var statearr_27819_27951 = state_27812__$1;
(statearr_27819_27951[(2)] = inst_27808);

(statearr_27819_27951[(1)] = (3));


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
});})(__27932,c__27592__auto___27945,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async))
;
return ((function (__27932,switch__27502__auto__,c__27592__auto___27945,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0 = (function (){
var statearr_27820 = [null,null,null,null,null,null,null];
(statearr_27820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__);

(statearr_27820[(1)] = (1));

return statearr_27820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1 = (function (state_27812){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_27812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e27821){if((e27821 instanceof Object)){
var ex__27506__auto__ = e27821;
var statearr_27822_27952 = state_27812;
(statearr_27822_27952[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27953 = state_27812;
state_27812 = G__27953;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = function(state_27812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1.call(this,state_27812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__;
})()
;})(__27932,switch__27502__auto__,c__27592__auto___27945,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async))
})();
var state__27594__auto__ = (function (){var statearr_27823 = f__27593__auto__.call(null);
(statearr_27823[(6)] = c__27592__auto___27945);

return statearr_27823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(__27932,c__27592__auto___27945,G__27775_27933,G__27775_27934__$1,n__4376__auto___27931,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27775_27934__$1)].join('')));

}

var G__27954 = (__27932 + (1));
__27932 = G__27954;
continue;
} else {
}
break;
}

var c__27592__auto___27955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___27955,jobs,results,process,async){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___27955,jobs,results,process,async){
return (function (state_27845){
var state_val_27846 = (state_27845[(1)]);
if((state_val_27846 === (1))){
var state_27845__$1 = state_27845;
var statearr_27847_27956 = state_27845__$1;
(statearr_27847_27956[(2)] = null);

(statearr_27847_27956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (2))){
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27845__$1,(4),from);
} else {
if((state_val_27846 === (3))){
var inst_27843 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27845__$1,inst_27843);
} else {
if((state_val_27846 === (4))){
var inst_27826 = (state_27845[(7)]);
var inst_27826__$1 = (state_27845[(2)]);
var inst_27827 = (inst_27826__$1 == null);
var state_27845__$1 = (function (){var statearr_27848 = state_27845;
(statearr_27848[(7)] = inst_27826__$1);

return statearr_27848;
})();
if(cljs.core.truth_(inst_27827)){
var statearr_27849_27957 = state_27845__$1;
(statearr_27849_27957[(1)] = (5));

} else {
var statearr_27850_27958 = state_27845__$1;
(statearr_27850_27958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (5))){
var inst_27829 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27845__$1 = state_27845;
var statearr_27851_27959 = state_27845__$1;
(statearr_27851_27959[(2)] = inst_27829);

(statearr_27851_27959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (6))){
var inst_27826 = (state_27845[(7)]);
var inst_27831 = (state_27845[(8)]);
var inst_27831__$1 = cljs.core.async.chan.call(null,(1));
var inst_27832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27833 = [inst_27826,inst_27831__$1];
var inst_27834 = (new cljs.core.PersistentVector(null,2,(5),inst_27832,inst_27833,null));
var state_27845__$1 = (function (){var statearr_27852 = state_27845;
(statearr_27852[(8)] = inst_27831__$1);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27845__$1,(8),jobs,inst_27834);
} else {
if((state_val_27846 === (7))){
var inst_27841 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
var statearr_27853_27960 = state_27845__$1;
(statearr_27853_27960[(2)] = inst_27841);

(statearr_27853_27960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (8))){
var inst_27831 = (state_27845[(8)]);
var inst_27836 = (state_27845[(2)]);
var state_27845__$1 = (function (){var statearr_27854 = state_27845;
(statearr_27854[(9)] = inst_27836);

return statearr_27854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27845__$1,(9),results,inst_27831);
} else {
if((state_val_27846 === (9))){
var inst_27838 = (state_27845[(2)]);
var state_27845__$1 = (function (){var statearr_27855 = state_27845;
(statearr_27855[(10)] = inst_27838);

return statearr_27855;
})();
var statearr_27856_27961 = state_27845__$1;
(statearr_27856_27961[(2)] = null);

(statearr_27856_27961[(1)] = (2));


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
});})(c__27592__auto___27955,jobs,results,process,async))
;
return ((function (switch__27502__auto__,c__27592__auto___27955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0 = (function (){
var statearr_27857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__);

(statearr_27857[(1)] = (1));

return statearr_27857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1 = (function (state_27845){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_27845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object)){
var ex__27506__auto__ = e27858;
var statearr_27859_27962 = state_27845;
(statearr_27859_27962[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27963 = state_27845;
state_27845 = G__27963;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = function(state_27845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1.call(this,state_27845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___27955,jobs,results,process,async))
})();
var state__27594__auto__ = (function (){var statearr_27860 = f__27593__auto__.call(null);
(statearr_27860[(6)] = c__27592__auto___27955);

return statearr_27860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___27955,jobs,results,process,async))
);


var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__,jobs,results,process,async){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__,jobs,results,process,async){
return (function (state_27898){
var state_val_27899 = (state_27898[(1)]);
if((state_val_27899 === (7))){
var inst_27894 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27900_27964 = state_27898__$1;
(statearr_27900_27964[(2)] = inst_27894);

(statearr_27900_27964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (20))){
var state_27898__$1 = state_27898;
var statearr_27901_27965 = state_27898__$1;
(statearr_27901_27965[(2)] = null);

(statearr_27901_27965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (1))){
var state_27898__$1 = state_27898;
var statearr_27902_27966 = state_27898__$1;
(statearr_27902_27966[(2)] = null);

(statearr_27902_27966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (4))){
var inst_27863 = (state_27898[(7)]);
var inst_27863__$1 = (state_27898[(2)]);
var inst_27864 = (inst_27863__$1 == null);
var state_27898__$1 = (function (){var statearr_27903 = state_27898;
(statearr_27903[(7)] = inst_27863__$1);

return statearr_27903;
})();
if(cljs.core.truth_(inst_27864)){
var statearr_27904_27967 = state_27898__$1;
(statearr_27904_27967[(1)] = (5));

} else {
var statearr_27905_27968 = state_27898__$1;
(statearr_27905_27968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (15))){
var inst_27876 = (state_27898[(8)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27898__$1,(18),to,inst_27876);
} else {
if((state_val_27899 === (21))){
var inst_27889 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27906_27969 = state_27898__$1;
(statearr_27906_27969[(2)] = inst_27889);

(statearr_27906_27969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (13))){
var inst_27891 = (state_27898[(2)]);
var state_27898__$1 = (function (){var statearr_27907 = state_27898;
(statearr_27907[(9)] = inst_27891);

return statearr_27907;
})();
var statearr_27908_27970 = state_27898__$1;
(statearr_27908_27970[(2)] = null);

(statearr_27908_27970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (6))){
var inst_27863 = (state_27898[(7)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,(11),inst_27863);
} else {
if((state_val_27899 === (17))){
var inst_27884 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
if(cljs.core.truth_(inst_27884)){
var statearr_27909_27971 = state_27898__$1;
(statearr_27909_27971[(1)] = (19));

} else {
var statearr_27910_27972 = state_27898__$1;
(statearr_27910_27972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (3))){
var inst_27896 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27898__$1,inst_27896);
} else {
if((state_val_27899 === (12))){
var inst_27873 = (state_27898[(10)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,(14),inst_27873);
} else {
if((state_val_27899 === (2))){
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,(4),results);
} else {
if((state_val_27899 === (19))){
var state_27898__$1 = state_27898;
var statearr_27911_27973 = state_27898__$1;
(statearr_27911_27973[(2)] = null);

(statearr_27911_27973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (11))){
var inst_27873 = (state_27898[(2)]);
var state_27898__$1 = (function (){var statearr_27912 = state_27898;
(statearr_27912[(10)] = inst_27873);

return statearr_27912;
})();
var statearr_27913_27974 = state_27898__$1;
(statearr_27913_27974[(2)] = null);

(statearr_27913_27974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (9))){
var state_27898__$1 = state_27898;
var statearr_27914_27975 = state_27898__$1;
(statearr_27914_27975[(2)] = null);

(statearr_27914_27975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (5))){
var state_27898__$1 = state_27898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27915_27976 = state_27898__$1;
(statearr_27915_27976[(1)] = (8));

} else {
var statearr_27916_27977 = state_27898__$1;
(statearr_27916_27977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (14))){
var inst_27876 = (state_27898[(8)]);
var inst_27878 = (state_27898[(11)]);
var inst_27876__$1 = (state_27898[(2)]);
var inst_27877 = (inst_27876__$1 == null);
var inst_27878__$1 = cljs.core.not.call(null,inst_27877);
var state_27898__$1 = (function (){var statearr_27917 = state_27898;
(statearr_27917[(8)] = inst_27876__$1);

(statearr_27917[(11)] = inst_27878__$1);

return statearr_27917;
})();
if(inst_27878__$1){
var statearr_27918_27978 = state_27898__$1;
(statearr_27918_27978[(1)] = (15));

} else {
var statearr_27919_27979 = state_27898__$1;
(statearr_27919_27979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (16))){
var inst_27878 = (state_27898[(11)]);
var state_27898__$1 = state_27898;
var statearr_27920_27980 = state_27898__$1;
(statearr_27920_27980[(2)] = inst_27878);

(statearr_27920_27980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (10))){
var inst_27870 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27921_27981 = state_27898__$1;
(statearr_27921_27981[(2)] = inst_27870);

(statearr_27921_27981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (18))){
var inst_27881 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27922_27982 = state_27898__$1;
(statearr_27922_27982[(2)] = inst_27881);

(statearr_27922_27982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (8))){
var inst_27867 = cljs.core.async.close_BANG_.call(null,to);
var state_27898__$1 = state_27898;
var statearr_27923_27983 = state_27898__$1;
(statearr_27923_27983[(2)] = inst_27867);

(statearr_27923_27983[(1)] = (10));


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
});})(c__27592__auto__,jobs,results,process,async))
;
return ((function (switch__27502__auto__,c__27592__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0 = (function (){
var statearr_27924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__);

(statearr_27924[(1)] = (1));

return statearr_27924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1 = (function (state_27898){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_27898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e27925){if((e27925 instanceof Object)){
var ex__27506__auto__ = e27925;
var statearr_27926_27984 = state_27898;
(statearr_27926_27984[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27985 = state_27898;
state_27898 = G__27985;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__ = function(state_27898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1.call(this,state_27898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27503__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__,jobs,results,process,async))
})();
var state__27594__auto__ = (function (){var statearr_27927 = f__27593__auto__.call(null);
(statearr_27927[(6)] = c__27592__auto__);

return statearr_27927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__,jobs,results,process,async))
);

return c__27592__auto__;
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
var G__27987 = arguments.length;
switch (G__27987) {
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
var G__27990 = arguments.length;
switch (G__27990) {
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
var G__27993 = arguments.length;
switch (G__27993) {
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
var c__27592__auto___28042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___28042,tc,fc){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___28042,tc,fc){
return (function (state_28019){
var state_val_28020 = (state_28019[(1)]);
if((state_val_28020 === (7))){
var inst_28015 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
var statearr_28021_28043 = state_28019__$1;
(statearr_28021_28043[(2)] = inst_28015);

(statearr_28021_28043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (1))){
var state_28019__$1 = state_28019;
var statearr_28022_28044 = state_28019__$1;
(statearr_28022_28044[(2)] = null);

(statearr_28022_28044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (4))){
var inst_27996 = (state_28019[(7)]);
var inst_27996__$1 = (state_28019[(2)]);
var inst_27997 = (inst_27996__$1 == null);
var state_28019__$1 = (function (){var statearr_28023 = state_28019;
(statearr_28023[(7)] = inst_27996__$1);

return statearr_28023;
})();
if(cljs.core.truth_(inst_27997)){
var statearr_28024_28045 = state_28019__$1;
(statearr_28024_28045[(1)] = (5));

} else {
var statearr_28025_28046 = state_28019__$1;
(statearr_28025_28046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (13))){
var state_28019__$1 = state_28019;
var statearr_28026_28047 = state_28019__$1;
(statearr_28026_28047[(2)] = null);

(statearr_28026_28047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (6))){
var inst_27996 = (state_28019[(7)]);
var inst_28002 = p.call(null,inst_27996);
var state_28019__$1 = state_28019;
if(cljs.core.truth_(inst_28002)){
var statearr_28027_28048 = state_28019__$1;
(statearr_28027_28048[(1)] = (9));

} else {
var statearr_28028_28049 = state_28019__$1;
(statearr_28028_28049[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (3))){
var inst_28017 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28019__$1,inst_28017);
} else {
if((state_val_28020 === (12))){
var state_28019__$1 = state_28019;
var statearr_28029_28050 = state_28019__$1;
(statearr_28029_28050[(2)] = null);

(statearr_28029_28050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (2))){
var state_28019__$1 = state_28019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28019__$1,(4),ch);
} else {
if((state_val_28020 === (11))){
var inst_27996 = (state_28019[(7)]);
var inst_28006 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28019__$1,(8),inst_28006,inst_27996);
} else {
if((state_val_28020 === (9))){
var state_28019__$1 = state_28019;
var statearr_28030_28051 = state_28019__$1;
(statearr_28030_28051[(2)] = tc);

(statearr_28030_28051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (5))){
var inst_27999 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28000 = cljs.core.async.close_BANG_.call(null,fc);
var state_28019__$1 = (function (){var statearr_28031 = state_28019;
(statearr_28031[(8)] = inst_27999);

return statearr_28031;
})();
var statearr_28032_28052 = state_28019__$1;
(statearr_28032_28052[(2)] = inst_28000);

(statearr_28032_28052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (14))){
var inst_28013 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
var statearr_28033_28053 = state_28019__$1;
(statearr_28033_28053[(2)] = inst_28013);

(statearr_28033_28053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (10))){
var state_28019__$1 = state_28019;
var statearr_28034_28054 = state_28019__$1;
(statearr_28034_28054[(2)] = fc);

(statearr_28034_28054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28020 === (8))){
var inst_28008 = (state_28019[(2)]);
var state_28019__$1 = state_28019;
if(cljs.core.truth_(inst_28008)){
var statearr_28035_28055 = state_28019__$1;
(statearr_28035_28055[(1)] = (12));

} else {
var statearr_28036_28056 = state_28019__$1;
(statearr_28036_28056[(1)] = (13));

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
});})(c__27592__auto___28042,tc,fc))
;
return ((function (switch__27502__auto__,c__27592__auto___28042,tc,fc){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_28019){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__27506__auto__ = e28038;
var statearr_28039_28057 = state_28019;
(statearr_28039_28057[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28058 = state_28019;
state_28019 = G__28058;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_28019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_28019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___28042,tc,fc))
})();
var state__27594__auto__ = (function (){var statearr_28040 = f__27593__auto__.call(null);
(statearr_28040[(6)] = c__27592__auto___28042);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___28042,tc,fc))
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
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__){
return (function (state_28079){
var state_val_28080 = (state_28079[(1)]);
if((state_val_28080 === (7))){
var inst_28075 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28081_28099 = state_28079__$1;
(statearr_28081_28099[(2)] = inst_28075);

(statearr_28081_28099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (1))){
var inst_28059 = init;
var state_28079__$1 = (function (){var statearr_28082 = state_28079;
(statearr_28082[(7)] = inst_28059);

return statearr_28082;
})();
var statearr_28083_28100 = state_28079__$1;
(statearr_28083_28100[(2)] = null);

(statearr_28083_28100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (4))){
var inst_28062 = (state_28079[(8)]);
var inst_28062__$1 = (state_28079[(2)]);
var inst_28063 = (inst_28062__$1 == null);
var state_28079__$1 = (function (){var statearr_28084 = state_28079;
(statearr_28084[(8)] = inst_28062__$1);

return statearr_28084;
})();
if(cljs.core.truth_(inst_28063)){
var statearr_28085_28101 = state_28079__$1;
(statearr_28085_28101[(1)] = (5));

} else {
var statearr_28086_28102 = state_28079__$1;
(statearr_28086_28102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (6))){
var inst_28059 = (state_28079[(7)]);
var inst_28066 = (state_28079[(9)]);
var inst_28062 = (state_28079[(8)]);
var inst_28066__$1 = f.call(null,inst_28059,inst_28062);
var inst_28067 = cljs.core.reduced_QMARK_.call(null,inst_28066__$1);
var state_28079__$1 = (function (){var statearr_28087 = state_28079;
(statearr_28087[(9)] = inst_28066__$1);

return statearr_28087;
})();
if(inst_28067){
var statearr_28088_28103 = state_28079__$1;
(statearr_28088_28103[(1)] = (8));

} else {
var statearr_28089_28104 = state_28079__$1;
(statearr_28089_28104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (3))){
var inst_28077 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28079__$1,inst_28077);
} else {
if((state_val_28080 === (2))){
var state_28079__$1 = state_28079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28079__$1,(4),ch);
} else {
if((state_val_28080 === (9))){
var inst_28066 = (state_28079[(9)]);
var inst_28059 = inst_28066;
var state_28079__$1 = (function (){var statearr_28090 = state_28079;
(statearr_28090[(7)] = inst_28059);

return statearr_28090;
})();
var statearr_28091_28105 = state_28079__$1;
(statearr_28091_28105[(2)] = null);

(statearr_28091_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (5))){
var inst_28059 = (state_28079[(7)]);
var state_28079__$1 = state_28079;
var statearr_28092_28106 = state_28079__$1;
(statearr_28092_28106[(2)] = inst_28059);

(statearr_28092_28106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (10))){
var inst_28073 = (state_28079[(2)]);
var state_28079__$1 = state_28079;
var statearr_28093_28107 = state_28079__$1;
(statearr_28093_28107[(2)] = inst_28073);

(statearr_28093_28107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28080 === (8))){
var inst_28066 = (state_28079[(9)]);
var inst_28069 = cljs.core.deref.call(null,inst_28066);
var state_28079__$1 = state_28079;
var statearr_28094_28108 = state_28079__$1;
(statearr_28094_28108[(2)] = inst_28069);

(statearr_28094_28108[(1)] = (10));


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
});})(c__27592__auto__))
;
return ((function (switch__27502__auto__,c__27592__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27503__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27503__auto____0 = (function (){
var statearr_28095 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28095[(0)] = cljs$core$async$reduce_$_state_machine__27503__auto__);

(statearr_28095[(1)] = (1));

return statearr_28095;
});
var cljs$core$async$reduce_$_state_machine__27503__auto____1 = (function (state_28079){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28096){if((e28096 instanceof Object)){
var ex__27506__auto__ = e28096;
var statearr_28097_28109 = state_28079;
(statearr_28097_28109[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28110 = state_28079;
state_28079 = G__28110;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27503__auto__ = function(state_28079){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27503__auto____1.call(this,state_28079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27503__auto____0;
cljs$core$async$reduce_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27503__auto____1;
return cljs$core$async$reduce_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__))
})();
var state__27594__auto__ = (function (){var statearr_28098 = f__27593__auto__.call(null);
(statearr_28098[(6)] = c__27592__auto__);

return statearr_28098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__))
);

return c__27592__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__,f__$1){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__,f__$1){
return (function (state_28116){
var state_val_28117 = (state_28116[(1)]);
if((state_val_28117 === (1))){
var inst_28111 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28116__$1 = state_28116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28116__$1,(2),inst_28111);
} else {
if((state_val_28117 === (2))){
var inst_28113 = (state_28116[(2)]);
var inst_28114 = f__$1.call(null,inst_28113);
var state_28116__$1 = state_28116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28116__$1,inst_28114);
} else {
return null;
}
}
});})(c__27592__auto__,f__$1))
;
return ((function (switch__27502__auto__,c__27592__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27503__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27503__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null];
(statearr_28118[(0)] = cljs$core$async$transduce_$_state_machine__27503__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var cljs$core$async$transduce_$_state_machine__27503__auto____1 = (function (state_28116){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__27506__auto__ = e28119;
var statearr_28120_28122 = state_28116;
(statearr_28120_28122[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28123 = state_28116;
state_28116 = G__28123;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27503__auto__ = function(state_28116){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27503__auto____1.call(this,state_28116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27503__auto____0;
cljs$core$async$transduce_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27503__auto____1;
return cljs$core$async$transduce_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__,f__$1))
})();
var state__27594__auto__ = (function (){var statearr_28121 = f__27593__auto__.call(null);
(statearr_28121[(6)] = c__27592__auto__);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__,f__$1))
);

return c__27592__auto__;
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
var G__28125 = arguments.length;
switch (G__28125) {
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
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__){
return (function (state_28150){
var state_val_28151 = (state_28150[(1)]);
if((state_val_28151 === (7))){
var inst_28132 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28152_28173 = state_28150__$1;
(statearr_28152_28173[(2)] = inst_28132);

(statearr_28152_28173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (1))){
var inst_28126 = cljs.core.seq.call(null,coll);
var inst_28127 = inst_28126;
var state_28150__$1 = (function (){var statearr_28153 = state_28150;
(statearr_28153[(7)] = inst_28127);

return statearr_28153;
})();
var statearr_28154_28174 = state_28150__$1;
(statearr_28154_28174[(2)] = null);

(statearr_28154_28174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (4))){
var inst_28127 = (state_28150[(7)]);
var inst_28130 = cljs.core.first.call(null,inst_28127);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(7),ch,inst_28130);
} else {
if((state_val_28151 === (13))){
var inst_28144 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28155_28175 = state_28150__$1;
(statearr_28155_28175[(2)] = inst_28144);

(statearr_28155_28175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (6))){
var inst_28135 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
if(cljs.core.truth_(inst_28135)){
var statearr_28156_28176 = state_28150__$1;
(statearr_28156_28176[(1)] = (8));

} else {
var statearr_28157_28177 = state_28150__$1;
(statearr_28157_28177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (3))){
var inst_28148 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else {
if((state_val_28151 === (12))){
var state_28150__$1 = state_28150;
var statearr_28158_28178 = state_28150__$1;
(statearr_28158_28178[(2)] = null);

(statearr_28158_28178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (2))){
var inst_28127 = (state_28150[(7)]);
var state_28150__$1 = state_28150;
if(cljs.core.truth_(inst_28127)){
var statearr_28159_28179 = state_28150__$1;
(statearr_28159_28179[(1)] = (4));

} else {
var statearr_28160_28180 = state_28150__$1;
(statearr_28160_28180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (11))){
var inst_28141 = cljs.core.async.close_BANG_.call(null,ch);
var state_28150__$1 = state_28150;
var statearr_28161_28181 = state_28150__$1;
(statearr_28161_28181[(2)] = inst_28141);

(statearr_28161_28181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (9))){
var state_28150__$1 = state_28150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28162_28182 = state_28150__$1;
(statearr_28162_28182[(1)] = (11));

} else {
var statearr_28163_28183 = state_28150__$1;
(statearr_28163_28183[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (5))){
var inst_28127 = (state_28150[(7)]);
var state_28150__$1 = state_28150;
var statearr_28164_28184 = state_28150__$1;
(statearr_28164_28184[(2)] = inst_28127);

(statearr_28164_28184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (10))){
var inst_28146 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28165_28185 = state_28150__$1;
(statearr_28165_28185[(2)] = inst_28146);

(statearr_28165_28185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (8))){
var inst_28127 = (state_28150[(7)]);
var inst_28137 = cljs.core.next.call(null,inst_28127);
var inst_28127__$1 = inst_28137;
var state_28150__$1 = (function (){var statearr_28166 = state_28150;
(statearr_28166[(7)] = inst_28127__$1);

return statearr_28166;
})();
var statearr_28167_28186 = state_28150__$1;
(statearr_28167_28186[(2)] = null);

(statearr_28167_28186[(1)] = (2));


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
});})(c__27592__auto__))
;
return ((function (switch__27502__auto__,c__27592__auto__){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_28168 = [null,null,null,null,null,null,null,null];
(statearr_28168[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_28168[(1)] = (1));

return statearr_28168;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_28150){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28169){if((e28169 instanceof Object)){
var ex__27506__auto__ = e28169;
var statearr_28170_28187 = state_28150;
(statearr_28170_28187[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28188 = state_28150;
state_28150 = G__28188;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__))
})();
var state__27594__auto__ = (function (){var statearr_28171 = f__27593__auto__.call(null);
(statearr_28171[(6)] = c__27592__auto__);

return statearr_28171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__))
);

return c__27592__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28189 = (function (ch,cs,meta28190){
this.ch = ch;
this.cs = cs;
this.meta28190 = meta28190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28191,meta28190__$1){
var self__ = this;
var _28191__$1 = this;
return (new cljs.core.async.t_cljs$core$async28189(self__.ch,self__.cs,meta28190__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28191){
var self__ = this;
var _28191__$1 = this;
return self__.meta28190;
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28190","meta28190",471430132,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28189";

cljs.core.async.t_cljs$core$async28189.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28189");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28189.
 */
cljs.core.async.__GT_t_cljs$core$async28189 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28189(ch__$1,cs__$1,meta28190){
return (new cljs.core.async.t_cljs$core$async28189(ch__$1,cs__$1,meta28190));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28189(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27592__auto___28411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___28411,cs,m,dchan,dctr,done){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___28411,cs,m,dchan,dctr,done){
return (function (state_28326){
var state_val_28327 = (state_28326[(1)]);
if((state_val_28327 === (7))){
var inst_28322 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28328_28412 = state_28326__$1;
(statearr_28328_28412[(2)] = inst_28322);

(statearr_28328_28412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (20))){
var inst_28225 = (state_28326[(7)]);
var inst_28237 = cljs.core.first.call(null,inst_28225);
var inst_28238 = cljs.core.nth.call(null,inst_28237,(0),null);
var inst_28239 = cljs.core.nth.call(null,inst_28237,(1),null);
var state_28326__$1 = (function (){var statearr_28329 = state_28326;
(statearr_28329[(8)] = inst_28238);

return statearr_28329;
})();
if(cljs.core.truth_(inst_28239)){
var statearr_28330_28413 = state_28326__$1;
(statearr_28330_28413[(1)] = (22));

} else {
var statearr_28331_28414 = state_28326__$1;
(statearr_28331_28414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (27))){
var inst_28269 = (state_28326[(9)]);
var inst_28267 = (state_28326[(10)]);
var inst_28194 = (state_28326[(11)]);
var inst_28274 = (state_28326[(12)]);
var inst_28274__$1 = cljs.core._nth.call(null,inst_28267,inst_28269);
var inst_28275 = cljs.core.async.put_BANG_.call(null,inst_28274__$1,inst_28194,done);
var state_28326__$1 = (function (){var statearr_28332 = state_28326;
(statearr_28332[(12)] = inst_28274__$1);

return statearr_28332;
})();
if(cljs.core.truth_(inst_28275)){
var statearr_28333_28415 = state_28326__$1;
(statearr_28333_28415[(1)] = (30));

} else {
var statearr_28334_28416 = state_28326__$1;
(statearr_28334_28416[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (1))){
var state_28326__$1 = state_28326;
var statearr_28335_28417 = state_28326__$1;
(statearr_28335_28417[(2)] = null);

(statearr_28335_28417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (24))){
var inst_28225 = (state_28326[(7)]);
var inst_28244 = (state_28326[(2)]);
var inst_28245 = cljs.core.next.call(null,inst_28225);
var inst_28203 = inst_28245;
var inst_28204 = null;
var inst_28205 = (0);
var inst_28206 = (0);
var state_28326__$1 = (function (){var statearr_28336 = state_28326;
(statearr_28336[(13)] = inst_28206);

(statearr_28336[(14)] = inst_28244);

(statearr_28336[(15)] = inst_28205);

(statearr_28336[(16)] = inst_28204);

(statearr_28336[(17)] = inst_28203);

return statearr_28336;
})();
var statearr_28337_28418 = state_28326__$1;
(statearr_28337_28418[(2)] = null);

(statearr_28337_28418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (39))){
var state_28326__$1 = state_28326;
var statearr_28341_28419 = state_28326__$1;
(statearr_28341_28419[(2)] = null);

(statearr_28341_28419[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (4))){
var inst_28194 = (state_28326[(11)]);
var inst_28194__$1 = (state_28326[(2)]);
var inst_28195 = (inst_28194__$1 == null);
var state_28326__$1 = (function (){var statearr_28342 = state_28326;
(statearr_28342[(11)] = inst_28194__$1);

return statearr_28342;
})();
if(cljs.core.truth_(inst_28195)){
var statearr_28343_28420 = state_28326__$1;
(statearr_28343_28420[(1)] = (5));

} else {
var statearr_28344_28421 = state_28326__$1;
(statearr_28344_28421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (15))){
var inst_28206 = (state_28326[(13)]);
var inst_28205 = (state_28326[(15)]);
var inst_28204 = (state_28326[(16)]);
var inst_28203 = (state_28326[(17)]);
var inst_28221 = (state_28326[(2)]);
var inst_28222 = (inst_28206 + (1));
var tmp28338 = inst_28205;
var tmp28339 = inst_28204;
var tmp28340 = inst_28203;
var inst_28203__$1 = tmp28340;
var inst_28204__$1 = tmp28339;
var inst_28205__$1 = tmp28338;
var inst_28206__$1 = inst_28222;
var state_28326__$1 = (function (){var statearr_28345 = state_28326;
(statearr_28345[(13)] = inst_28206__$1);

(statearr_28345[(15)] = inst_28205__$1);

(statearr_28345[(18)] = inst_28221);

(statearr_28345[(16)] = inst_28204__$1);

(statearr_28345[(17)] = inst_28203__$1);

return statearr_28345;
})();
var statearr_28346_28422 = state_28326__$1;
(statearr_28346_28422[(2)] = null);

(statearr_28346_28422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (21))){
var inst_28248 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28350_28423 = state_28326__$1;
(statearr_28350_28423[(2)] = inst_28248);

(statearr_28350_28423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (31))){
var inst_28274 = (state_28326[(12)]);
var inst_28278 = done.call(null,null);
var inst_28279 = cljs.core.async.untap_STAR_.call(null,m,inst_28274);
var state_28326__$1 = (function (){var statearr_28351 = state_28326;
(statearr_28351[(19)] = inst_28278);

return statearr_28351;
})();
var statearr_28352_28424 = state_28326__$1;
(statearr_28352_28424[(2)] = inst_28279);

(statearr_28352_28424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (32))){
var inst_28268 = (state_28326[(20)]);
var inst_28269 = (state_28326[(9)]);
var inst_28267 = (state_28326[(10)]);
var inst_28266 = (state_28326[(21)]);
var inst_28281 = (state_28326[(2)]);
var inst_28282 = (inst_28269 + (1));
var tmp28347 = inst_28268;
var tmp28348 = inst_28267;
var tmp28349 = inst_28266;
var inst_28266__$1 = tmp28349;
var inst_28267__$1 = tmp28348;
var inst_28268__$1 = tmp28347;
var inst_28269__$1 = inst_28282;
var state_28326__$1 = (function (){var statearr_28353 = state_28326;
(statearr_28353[(20)] = inst_28268__$1);

(statearr_28353[(9)] = inst_28269__$1);

(statearr_28353[(10)] = inst_28267__$1);

(statearr_28353[(21)] = inst_28266__$1);

(statearr_28353[(22)] = inst_28281);

return statearr_28353;
})();
var statearr_28354_28425 = state_28326__$1;
(statearr_28354_28425[(2)] = null);

(statearr_28354_28425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (40))){
var inst_28294 = (state_28326[(23)]);
var inst_28298 = done.call(null,null);
var inst_28299 = cljs.core.async.untap_STAR_.call(null,m,inst_28294);
var state_28326__$1 = (function (){var statearr_28355 = state_28326;
(statearr_28355[(24)] = inst_28298);

return statearr_28355;
})();
var statearr_28356_28426 = state_28326__$1;
(statearr_28356_28426[(2)] = inst_28299);

(statearr_28356_28426[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (33))){
var inst_28285 = (state_28326[(25)]);
var inst_28287 = cljs.core.chunked_seq_QMARK_.call(null,inst_28285);
var state_28326__$1 = state_28326;
if(inst_28287){
var statearr_28357_28427 = state_28326__$1;
(statearr_28357_28427[(1)] = (36));

} else {
var statearr_28358_28428 = state_28326__$1;
(statearr_28358_28428[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (13))){
var inst_28215 = (state_28326[(26)]);
var inst_28218 = cljs.core.async.close_BANG_.call(null,inst_28215);
var state_28326__$1 = state_28326;
var statearr_28359_28429 = state_28326__$1;
(statearr_28359_28429[(2)] = inst_28218);

(statearr_28359_28429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (22))){
var inst_28238 = (state_28326[(8)]);
var inst_28241 = cljs.core.async.close_BANG_.call(null,inst_28238);
var state_28326__$1 = state_28326;
var statearr_28360_28430 = state_28326__$1;
(statearr_28360_28430[(2)] = inst_28241);

(statearr_28360_28430[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (36))){
var inst_28285 = (state_28326[(25)]);
var inst_28289 = cljs.core.chunk_first.call(null,inst_28285);
var inst_28290 = cljs.core.chunk_rest.call(null,inst_28285);
var inst_28291 = cljs.core.count.call(null,inst_28289);
var inst_28266 = inst_28290;
var inst_28267 = inst_28289;
var inst_28268 = inst_28291;
var inst_28269 = (0);
var state_28326__$1 = (function (){var statearr_28361 = state_28326;
(statearr_28361[(20)] = inst_28268);

(statearr_28361[(9)] = inst_28269);

(statearr_28361[(10)] = inst_28267);

(statearr_28361[(21)] = inst_28266);

return statearr_28361;
})();
var statearr_28362_28431 = state_28326__$1;
(statearr_28362_28431[(2)] = null);

(statearr_28362_28431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (41))){
var inst_28285 = (state_28326[(25)]);
var inst_28301 = (state_28326[(2)]);
var inst_28302 = cljs.core.next.call(null,inst_28285);
var inst_28266 = inst_28302;
var inst_28267 = null;
var inst_28268 = (0);
var inst_28269 = (0);
var state_28326__$1 = (function (){var statearr_28363 = state_28326;
(statearr_28363[(20)] = inst_28268);

(statearr_28363[(9)] = inst_28269);

(statearr_28363[(10)] = inst_28267);

(statearr_28363[(27)] = inst_28301);

(statearr_28363[(21)] = inst_28266);

return statearr_28363;
})();
var statearr_28364_28432 = state_28326__$1;
(statearr_28364_28432[(2)] = null);

(statearr_28364_28432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (43))){
var state_28326__$1 = state_28326;
var statearr_28365_28433 = state_28326__$1;
(statearr_28365_28433[(2)] = null);

(statearr_28365_28433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (29))){
var inst_28310 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28366_28434 = state_28326__$1;
(statearr_28366_28434[(2)] = inst_28310);

(statearr_28366_28434[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (44))){
var inst_28319 = (state_28326[(2)]);
var state_28326__$1 = (function (){var statearr_28367 = state_28326;
(statearr_28367[(28)] = inst_28319);

return statearr_28367;
})();
var statearr_28368_28435 = state_28326__$1;
(statearr_28368_28435[(2)] = null);

(statearr_28368_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (6))){
var inst_28258 = (state_28326[(29)]);
var inst_28257 = cljs.core.deref.call(null,cs);
var inst_28258__$1 = cljs.core.keys.call(null,inst_28257);
var inst_28259 = cljs.core.count.call(null,inst_28258__$1);
var inst_28260 = cljs.core.reset_BANG_.call(null,dctr,inst_28259);
var inst_28265 = cljs.core.seq.call(null,inst_28258__$1);
var inst_28266 = inst_28265;
var inst_28267 = null;
var inst_28268 = (0);
var inst_28269 = (0);
var state_28326__$1 = (function (){var statearr_28369 = state_28326;
(statearr_28369[(20)] = inst_28268);

(statearr_28369[(29)] = inst_28258__$1);

(statearr_28369[(30)] = inst_28260);

(statearr_28369[(9)] = inst_28269);

(statearr_28369[(10)] = inst_28267);

(statearr_28369[(21)] = inst_28266);

return statearr_28369;
})();
var statearr_28370_28436 = state_28326__$1;
(statearr_28370_28436[(2)] = null);

(statearr_28370_28436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (28))){
var inst_28285 = (state_28326[(25)]);
var inst_28266 = (state_28326[(21)]);
var inst_28285__$1 = cljs.core.seq.call(null,inst_28266);
var state_28326__$1 = (function (){var statearr_28371 = state_28326;
(statearr_28371[(25)] = inst_28285__$1);

return statearr_28371;
})();
if(inst_28285__$1){
var statearr_28372_28437 = state_28326__$1;
(statearr_28372_28437[(1)] = (33));

} else {
var statearr_28373_28438 = state_28326__$1;
(statearr_28373_28438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (25))){
var inst_28268 = (state_28326[(20)]);
var inst_28269 = (state_28326[(9)]);
var inst_28271 = (inst_28269 < inst_28268);
var inst_28272 = inst_28271;
var state_28326__$1 = state_28326;
if(cljs.core.truth_(inst_28272)){
var statearr_28374_28439 = state_28326__$1;
(statearr_28374_28439[(1)] = (27));

} else {
var statearr_28375_28440 = state_28326__$1;
(statearr_28375_28440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (34))){
var state_28326__$1 = state_28326;
var statearr_28376_28441 = state_28326__$1;
(statearr_28376_28441[(2)] = null);

(statearr_28376_28441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (17))){
var state_28326__$1 = state_28326;
var statearr_28377_28442 = state_28326__$1;
(statearr_28377_28442[(2)] = null);

(statearr_28377_28442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (3))){
var inst_28324 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28326__$1,inst_28324);
} else {
if((state_val_28327 === (12))){
var inst_28253 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28378_28443 = state_28326__$1;
(statearr_28378_28443[(2)] = inst_28253);

(statearr_28378_28443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (2))){
var state_28326__$1 = state_28326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28326__$1,(4),ch);
} else {
if((state_val_28327 === (23))){
var state_28326__$1 = state_28326;
var statearr_28379_28444 = state_28326__$1;
(statearr_28379_28444[(2)] = null);

(statearr_28379_28444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (35))){
var inst_28308 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28380_28445 = state_28326__$1;
(statearr_28380_28445[(2)] = inst_28308);

(statearr_28380_28445[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (19))){
var inst_28225 = (state_28326[(7)]);
var inst_28229 = cljs.core.chunk_first.call(null,inst_28225);
var inst_28230 = cljs.core.chunk_rest.call(null,inst_28225);
var inst_28231 = cljs.core.count.call(null,inst_28229);
var inst_28203 = inst_28230;
var inst_28204 = inst_28229;
var inst_28205 = inst_28231;
var inst_28206 = (0);
var state_28326__$1 = (function (){var statearr_28381 = state_28326;
(statearr_28381[(13)] = inst_28206);

(statearr_28381[(15)] = inst_28205);

(statearr_28381[(16)] = inst_28204);

(statearr_28381[(17)] = inst_28203);

return statearr_28381;
})();
var statearr_28382_28446 = state_28326__$1;
(statearr_28382_28446[(2)] = null);

(statearr_28382_28446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (11))){
var inst_28225 = (state_28326[(7)]);
var inst_28203 = (state_28326[(17)]);
var inst_28225__$1 = cljs.core.seq.call(null,inst_28203);
var state_28326__$1 = (function (){var statearr_28383 = state_28326;
(statearr_28383[(7)] = inst_28225__$1);

return statearr_28383;
})();
if(inst_28225__$1){
var statearr_28384_28447 = state_28326__$1;
(statearr_28384_28447[(1)] = (16));

} else {
var statearr_28385_28448 = state_28326__$1;
(statearr_28385_28448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (9))){
var inst_28255 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28386_28449 = state_28326__$1;
(statearr_28386_28449[(2)] = inst_28255);

(statearr_28386_28449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (5))){
var inst_28201 = cljs.core.deref.call(null,cs);
var inst_28202 = cljs.core.seq.call(null,inst_28201);
var inst_28203 = inst_28202;
var inst_28204 = null;
var inst_28205 = (0);
var inst_28206 = (0);
var state_28326__$1 = (function (){var statearr_28387 = state_28326;
(statearr_28387[(13)] = inst_28206);

(statearr_28387[(15)] = inst_28205);

(statearr_28387[(16)] = inst_28204);

(statearr_28387[(17)] = inst_28203);

return statearr_28387;
})();
var statearr_28388_28450 = state_28326__$1;
(statearr_28388_28450[(2)] = null);

(statearr_28388_28450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (14))){
var state_28326__$1 = state_28326;
var statearr_28389_28451 = state_28326__$1;
(statearr_28389_28451[(2)] = null);

(statearr_28389_28451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (45))){
var inst_28316 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28390_28452 = state_28326__$1;
(statearr_28390_28452[(2)] = inst_28316);

(statearr_28390_28452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (26))){
var inst_28258 = (state_28326[(29)]);
var inst_28312 = (state_28326[(2)]);
var inst_28313 = cljs.core.seq.call(null,inst_28258);
var state_28326__$1 = (function (){var statearr_28391 = state_28326;
(statearr_28391[(31)] = inst_28312);

return statearr_28391;
})();
if(inst_28313){
var statearr_28392_28453 = state_28326__$1;
(statearr_28392_28453[(1)] = (42));

} else {
var statearr_28393_28454 = state_28326__$1;
(statearr_28393_28454[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (16))){
var inst_28225 = (state_28326[(7)]);
var inst_28227 = cljs.core.chunked_seq_QMARK_.call(null,inst_28225);
var state_28326__$1 = state_28326;
if(inst_28227){
var statearr_28394_28455 = state_28326__$1;
(statearr_28394_28455[(1)] = (19));

} else {
var statearr_28395_28456 = state_28326__$1;
(statearr_28395_28456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (38))){
var inst_28305 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28396_28457 = state_28326__$1;
(statearr_28396_28457[(2)] = inst_28305);

(statearr_28396_28457[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (30))){
var state_28326__$1 = state_28326;
var statearr_28397_28458 = state_28326__$1;
(statearr_28397_28458[(2)] = null);

(statearr_28397_28458[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (10))){
var inst_28206 = (state_28326[(13)]);
var inst_28204 = (state_28326[(16)]);
var inst_28214 = cljs.core._nth.call(null,inst_28204,inst_28206);
var inst_28215 = cljs.core.nth.call(null,inst_28214,(0),null);
var inst_28216 = cljs.core.nth.call(null,inst_28214,(1),null);
var state_28326__$1 = (function (){var statearr_28398 = state_28326;
(statearr_28398[(26)] = inst_28215);

return statearr_28398;
})();
if(cljs.core.truth_(inst_28216)){
var statearr_28399_28459 = state_28326__$1;
(statearr_28399_28459[(1)] = (13));

} else {
var statearr_28400_28460 = state_28326__$1;
(statearr_28400_28460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (18))){
var inst_28251 = (state_28326[(2)]);
var state_28326__$1 = state_28326;
var statearr_28401_28461 = state_28326__$1;
(statearr_28401_28461[(2)] = inst_28251);

(statearr_28401_28461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (42))){
var state_28326__$1 = state_28326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28326__$1,(45),dchan);
} else {
if((state_val_28327 === (37))){
var inst_28285 = (state_28326[(25)]);
var inst_28294 = (state_28326[(23)]);
var inst_28194 = (state_28326[(11)]);
var inst_28294__$1 = cljs.core.first.call(null,inst_28285);
var inst_28295 = cljs.core.async.put_BANG_.call(null,inst_28294__$1,inst_28194,done);
var state_28326__$1 = (function (){var statearr_28402 = state_28326;
(statearr_28402[(23)] = inst_28294__$1);

return statearr_28402;
})();
if(cljs.core.truth_(inst_28295)){
var statearr_28403_28462 = state_28326__$1;
(statearr_28403_28462[(1)] = (39));

} else {
var statearr_28404_28463 = state_28326__$1;
(statearr_28404_28463[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28327 === (8))){
var inst_28206 = (state_28326[(13)]);
var inst_28205 = (state_28326[(15)]);
var inst_28208 = (inst_28206 < inst_28205);
var inst_28209 = inst_28208;
var state_28326__$1 = state_28326;
if(cljs.core.truth_(inst_28209)){
var statearr_28405_28464 = state_28326__$1;
(statearr_28405_28464[(1)] = (10));

} else {
var statearr_28406_28465 = state_28326__$1;
(statearr_28406_28465[(1)] = (11));

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
});})(c__27592__auto___28411,cs,m,dchan,dctr,done))
;
return ((function (switch__27502__auto__,c__27592__auto___28411,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27503__auto__ = null;
var cljs$core$async$mult_$_state_machine__27503__auto____0 = (function (){
var statearr_28407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28407[(0)] = cljs$core$async$mult_$_state_machine__27503__auto__);

(statearr_28407[(1)] = (1));

return statearr_28407;
});
var cljs$core$async$mult_$_state_machine__27503__auto____1 = (function (state_28326){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28408){if((e28408 instanceof Object)){
var ex__27506__auto__ = e28408;
var statearr_28409_28466 = state_28326;
(statearr_28409_28466[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_28326;
state_28326 = G__28467;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27503__auto__ = function(state_28326){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27503__auto____1.call(this,state_28326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27503__auto____0;
cljs$core$async$mult_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27503__auto____1;
return cljs$core$async$mult_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___28411,cs,m,dchan,dctr,done))
})();
var state__27594__auto__ = (function (){var statearr_28410 = f__27593__auto__.call(null);
(statearr_28410[(6)] = c__27592__auto___28411);

return statearr_28410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___28411,cs,m,dchan,dctr,done))
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
var G__28469 = arguments.length;
switch (G__28469) {
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
var len__4499__auto___28481 = arguments.length;
var i__4500__auto___28482 = (0);
while(true){
if((i__4500__auto___28482 < len__4499__auto___28481)){
args__4502__auto__.push((arguments[i__4500__auto___28482]));

var G__28483 = (i__4500__auto___28482 + (1));
i__4500__auto___28482 = G__28483;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28475){
var map__28476 = p__28475;
var map__28476__$1 = ((((!((map__28476 == null)))?(((((map__28476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28476):map__28476);
var opts = map__28476__$1;
var statearr_28478_28484 = state;
(statearr_28478_28484[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28476,map__28476__$1,opts){
return (function (val){
var statearr_28479_28485 = state;
(statearr_28479_28485[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28476,map__28476__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28480_28486 = state;
(statearr_28480_28486[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28471){
var G__28472 = cljs.core.first.call(null,seq28471);
var seq28471__$1 = cljs.core.next.call(null,seq28471);
var G__28473 = cljs.core.first.call(null,seq28471__$1);
var seq28471__$2 = cljs.core.next.call(null,seq28471__$1);
var G__28474 = cljs.core.first.call(null,seq28471__$2);
var seq28471__$3 = cljs.core.next.call(null,seq28471__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28472,G__28473,G__28474,seq28471__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28487 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28488){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28488 = meta28488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28489,meta28488__$1){
var self__ = this;
var _28489__$1 = this;
return (new cljs.core.async.t_cljs$core$async28487(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28488__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28489){
var self__ = this;
var _28489__$1 = this;
return self__.meta28488;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28487.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28488","meta28488",1543589251,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28487";

cljs.core.async.t_cljs$core$async28487.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28487");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28487.
 */
cljs.core.async.__GT_t_cljs$core$async28487 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28487(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28488){
return (new cljs.core.async.t_cljs$core$async28487(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28488));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28487(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27592__auto___28651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___28651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___28651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28591){
var state_val_28592 = (state_28591[(1)]);
if((state_val_28592 === (7))){
var inst_28506 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28593_28652 = state_28591__$1;
(statearr_28593_28652[(2)] = inst_28506);

(statearr_28593_28652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (20))){
var inst_28518 = (state_28591[(7)]);
var state_28591__$1 = state_28591;
var statearr_28594_28653 = state_28591__$1;
(statearr_28594_28653[(2)] = inst_28518);

(statearr_28594_28653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (27))){
var state_28591__$1 = state_28591;
var statearr_28595_28654 = state_28591__$1;
(statearr_28595_28654[(2)] = null);

(statearr_28595_28654[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (1))){
var inst_28493 = (state_28591[(8)]);
var inst_28493__$1 = calc_state.call(null);
var inst_28495 = (inst_28493__$1 == null);
var inst_28496 = cljs.core.not.call(null,inst_28495);
var state_28591__$1 = (function (){var statearr_28596 = state_28591;
(statearr_28596[(8)] = inst_28493__$1);

return statearr_28596;
})();
if(inst_28496){
var statearr_28597_28655 = state_28591__$1;
(statearr_28597_28655[(1)] = (2));

} else {
var statearr_28598_28656 = state_28591__$1;
(statearr_28598_28656[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (24))){
var inst_28542 = (state_28591[(9)]);
var inst_28565 = (state_28591[(10)]);
var inst_28551 = (state_28591[(11)]);
var inst_28565__$1 = inst_28542.call(null,inst_28551);
var state_28591__$1 = (function (){var statearr_28599 = state_28591;
(statearr_28599[(10)] = inst_28565__$1);

return statearr_28599;
})();
if(cljs.core.truth_(inst_28565__$1)){
var statearr_28600_28657 = state_28591__$1;
(statearr_28600_28657[(1)] = (29));

} else {
var statearr_28601_28658 = state_28591__$1;
(statearr_28601_28658[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (4))){
var inst_28509 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28509)){
var statearr_28602_28659 = state_28591__$1;
(statearr_28602_28659[(1)] = (8));

} else {
var statearr_28603_28660 = state_28591__$1;
(statearr_28603_28660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (15))){
var inst_28536 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28536)){
var statearr_28604_28661 = state_28591__$1;
(statearr_28604_28661[(1)] = (19));

} else {
var statearr_28605_28662 = state_28591__$1;
(statearr_28605_28662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (21))){
var inst_28541 = (state_28591[(12)]);
var inst_28541__$1 = (state_28591[(2)]);
var inst_28542 = cljs.core.get.call(null,inst_28541__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28543 = cljs.core.get.call(null,inst_28541__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28544 = cljs.core.get.call(null,inst_28541__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28591__$1 = (function (){var statearr_28606 = state_28591;
(statearr_28606[(9)] = inst_28542);

(statearr_28606[(13)] = inst_28543);

(statearr_28606[(12)] = inst_28541__$1);

return statearr_28606;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28591__$1,(22),inst_28544);
} else {
if((state_val_28592 === (31))){
var inst_28573 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28573)){
var statearr_28607_28663 = state_28591__$1;
(statearr_28607_28663[(1)] = (32));

} else {
var statearr_28608_28664 = state_28591__$1;
(statearr_28608_28664[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (32))){
var inst_28550 = (state_28591[(14)]);
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28591__$1,(35),out,inst_28550);
} else {
if((state_val_28592 === (33))){
var inst_28541 = (state_28591[(12)]);
var inst_28518 = inst_28541;
var state_28591__$1 = (function (){var statearr_28609 = state_28591;
(statearr_28609[(7)] = inst_28518);

return statearr_28609;
})();
var statearr_28610_28665 = state_28591__$1;
(statearr_28610_28665[(2)] = null);

(statearr_28610_28665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (13))){
var inst_28518 = (state_28591[(7)]);
var inst_28525 = inst_28518.cljs$lang$protocol_mask$partition0$;
var inst_28526 = (inst_28525 & (64));
var inst_28527 = inst_28518.cljs$core$ISeq$;
var inst_28528 = (cljs.core.PROTOCOL_SENTINEL === inst_28527);
var inst_28529 = ((inst_28526) || (inst_28528));
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28529)){
var statearr_28611_28666 = state_28591__$1;
(statearr_28611_28666[(1)] = (16));

} else {
var statearr_28612_28667 = state_28591__$1;
(statearr_28612_28667[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (22))){
var inst_28550 = (state_28591[(14)]);
var inst_28551 = (state_28591[(11)]);
var inst_28549 = (state_28591[(2)]);
var inst_28550__$1 = cljs.core.nth.call(null,inst_28549,(0),null);
var inst_28551__$1 = cljs.core.nth.call(null,inst_28549,(1),null);
var inst_28552 = (inst_28550__$1 == null);
var inst_28553 = cljs.core._EQ_.call(null,inst_28551__$1,change);
var inst_28554 = ((inst_28552) || (inst_28553));
var state_28591__$1 = (function (){var statearr_28613 = state_28591;
(statearr_28613[(14)] = inst_28550__$1);

(statearr_28613[(11)] = inst_28551__$1);

return statearr_28613;
})();
if(cljs.core.truth_(inst_28554)){
var statearr_28614_28668 = state_28591__$1;
(statearr_28614_28668[(1)] = (23));

} else {
var statearr_28615_28669 = state_28591__$1;
(statearr_28615_28669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (36))){
var inst_28541 = (state_28591[(12)]);
var inst_28518 = inst_28541;
var state_28591__$1 = (function (){var statearr_28616 = state_28591;
(statearr_28616[(7)] = inst_28518);

return statearr_28616;
})();
var statearr_28617_28670 = state_28591__$1;
(statearr_28617_28670[(2)] = null);

(statearr_28617_28670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (29))){
var inst_28565 = (state_28591[(10)]);
var state_28591__$1 = state_28591;
var statearr_28618_28671 = state_28591__$1;
(statearr_28618_28671[(2)] = inst_28565);

(statearr_28618_28671[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (6))){
var state_28591__$1 = state_28591;
var statearr_28619_28672 = state_28591__$1;
(statearr_28619_28672[(2)] = false);

(statearr_28619_28672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (28))){
var inst_28561 = (state_28591[(2)]);
var inst_28562 = calc_state.call(null);
var inst_28518 = inst_28562;
var state_28591__$1 = (function (){var statearr_28620 = state_28591;
(statearr_28620[(7)] = inst_28518);

(statearr_28620[(15)] = inst_28561);

return statearr_28620;
})();
var statearr_28621_28673 = state_28591__$1;
(statearr_28621_28673[(2)] = null);

(statearr_28621_28673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (25))){
var inst_28587 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28622_28674 = state_28591__$1;
(statearr_28622_28674[(2)] = inst_28587);

(statearr_28622_28674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (34))){
var inst_28585 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28623_28675 = state_28591__$1;
(statearr_28623_28675[(2)] = inst_28585);

(statearr_28623_28675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (17))){
var state_28591__$1 = state_28591;
var statearr_28624_28676 = state_28591__$1;
(statearr_28624_28676[(2)] = false);

(statearr_28624_28676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (3))){
var state_28591__$1 = state_28591;
var statearr_28625_28677 = state_28591__$1;
(statearr_28625_28677[(2)] = false);

(statearr_28625_28677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (12))){
var inst_28589 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28591__$1,inst_28589);
} else {
if((state_val_28592 === (2))){
var inst_28493 = (state_28591[(8)]);
var inst_28498 = inst_28493.cljs$lang$protocol_mask$partition0$;
var inst_28499 = (inst_28498 & (64));
var inst_28500 = inst_28493.cljs$core$ISeq$;
var inst_28501 = (cljs.core.PROTOCOL_SENTINEL === inst_28500);
var inst_28502 = ((inst_28499) || (inst_28501));
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28502)){
var statearr_28626_28678 = state_28591__$1;
(statearr_28626_28678[(1)] = (5));

} else {
var statearr_28627_28679 = state_28591__$1;
(statearr_28627_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (23))){
var inst_28550 = (state_28591[(14)]);
var inst_28556 = (inst_28550 == null);
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28556)){
var statearr_28628_28680 = state_28591__$1;
(statearr_28628_28680[(1)] = (26));

} else {
var statearr_28629_28681 = state_28591__$1;
(statearr_28629_28681[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (35))){
var inst_28576 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
if(cljs.core.truth_(inst_28576)){
var statearr_28630_28682 = state_28591__$1;
(statearr_28630_28682[(1)] = (36));

} else {
var statearr_28631_28683 = state_28591__$1;
(statearr_28631_28683[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (19))){
var inst_28518 = (state_28591[(7)]);
var inst_28538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28518);
var state_28591__$1 = state_28591;
var statearr_28632_28684 = state_28591__$1;
(statearr_28632_28684[(2)] = inst_28538);

(statearr_28632_28684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (11))){
var inst_28518 = (state_28591[(7)]);
var inst_28522 = (inst_28518 == null);
var inst_28523 = cljs.core.not.call(null,inst_28522);
var state_28591__$1 = state_28591;
if(inst_28523){
var statearr_28633_28685 = state_28591__$1;
(statearr_28633_28685[(1)] = (13));

} else {
var statearr_28634_28686 = state_28591__$1;
(statearr_28634_28686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (9))){
var inst_28493 = (state_28591[(8)]);
var state_28591__$1 = state_28591;
var statearr_28635_28687 = state_28591__$1;
(statearr_28635_28687[(2)] = inst_28493);

(statearr_28635_28687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (5))){
var state_28591__$1 = state_28591;
var statearr_28636_28688 = state_28591__$1;
(statearr_28636_28688[(2)] = true);

(statearr_28636_28688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (14))){
var state_28591__$1 = state_28591;
var statearr_28637_28689 = state_28591__$1;
(statearr_28637_28689[(2)] = false);

(statearr_28637_28689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (26))){
var inst_28551 = (state_28591[(11)]);
var inst_28558 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28551);
var state_28591__$1 = state_28591;
var statearr_28638_28690 = state_28591__$1;
(statearr_28638_28690[(2)] = inst_28558);

(statearr_28638_28690[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (16))){
var state_28591__$1 = state_28591;
var statearr_28639_28691 = state_28591__$1;
(statearr_28639_28691[(2)] = true);

(statearr_28639_28691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (38))){
var inst_28581 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28640_28692 = state_28591__$1;
(statearr_28640_28692[(2)] = inst_28581);

(statearr_28640_28692[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (30))){
var inst_28542 = (state_28591[(9)]);
var inst_28551 = (state_28591[(11)]);
var inst_28543 = (state_28591[(13)]);
var inst_28568 = cljs.core.empty_QMARK_.call(null,inst_28542);
var inst_28569 = inst_28543.call(null,inst_28551);
var inst_28570 = cljs.core.not.call(null,inst_28569);
var inst_28571 = ((inst_28568) && (inst_28570));
var state_28591__$1 = state_28591;
var statearr_28641_28693 = state_28591__$1;
(statearr_28641_28693[(2)] = inst_28571);

(statearr_28641_28693[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (10))){
var inst_28493 = (state_28591[(8)]);
var inst_28514 = (state_28591[(2)]);
var inst_28515 = cljs.core.get.call(null,inst_28514,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28516 = cljs.core.get.call(null,inst_28514,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28517 = cljs.core.get.call(null,inst_28514,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28518 = inst_28493;
var state_28591__$1 = (function (){var statearr_28642 = state_28591;
(statearr_28642[(7)] = inst_28518);

(statearr_28642[(16)] = inst_28515);

(statearr_28642[(17)] = inst_28517);

(statearr_28642[(18)] = inst_28516);

return statearr_28642;
})();
var statearr_28643_28694 = state_28591__$1;
(statearr_28643_28694[(2)] = null);

(statearr_28643_28694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (18))){
var inst_28533 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28644_28695 = state_28591__$1;
(statearr_28644_28695[(2)] = inst_28533);

(statearr_28644_28695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (37))){
var state_28591__$1 = state_28591;
var statearr_28645_28696 = state_28591__$1;
(statearr_28645_28696[(2)] = null);

(statearr_28645_28696[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (8))){
var inst_28493 = (state_28591[(8)]);
var inst_28511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28493);
var state_28591__$1 = state_28591;
var statearr_28646_28697 = state_28591__$1;
(statearr_28646_28697[(2)] = inst_28511);

(statearr_28646_28697[(1)] = (10));


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
});})(c__27592__auto___28651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27502__auto__,c__27592__auto___28651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27503__auto__ = null;
var cljs$core$async$mix_$_state_machine__27503__auto____0 = (function (){
var statearr_28647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28647[(0)] = cljs$core$async$mix_$_state_machine__27503__auto__);

(statearr_28647[(1)] = (1));

return statearr_28647;
});
var cljs$core$async$mix_$_state_machine__27503__auto____1 = (function (state_28591){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28648){if((e28648 instanceof Object)){
var ex__27506__auto__ = e28648;
var statearr_28649_28698 = state_28591;
(statearr_28649_28698[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28699 = state_28591;
state_28591 = G__28699;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27503__auto__ = function(state_28591){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27503__auto____1.call(this,state_28591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27503__auto____0;
cljs$core$async$mix_$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27503__auto____1;
return cljs$core$async$mix_$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___28651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27594__auto__ = (function (){var statearr_28650 = f__27593__auto__.call(null);
(statearr_28650[(6)] = c__27592__auto___28651);

return statearr_28650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___28651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28701 = arguments.length;
switch (G__28701) {
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
var G__28705 = arguments.length;
switch (G__28705) {
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
return (function (p1__28703_SHARP_){
if(cljs.core.truth_(p1__28703_SHARP_.call(null,topic))){
return p1__28703_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28703_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28706 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28707){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28707 = meta28707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28708,meta28707__$1){
var self__ = this;
var _28708__$1 = this;
return (new cljs.core.async.t_cljs$core$async28706(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28707__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28708){
var self__ = this;
var _28708__$1 = this;
return self__.meta28707;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28707","meta28707",-798662411,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28706";

cljs.core.async.t_cljs$core$async28706.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28706");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28706.
 */
cljs.core.async.__GT_t_cljs$core$async28706 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28706(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28707){
return (new cljs.core.async.t_cljs$core$async28706(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28707));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28706(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27592__auto___28826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___28826,mults,ensure_mult,p){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___28826,mults,ensure_mult,p){
return (function (state_28780){
var state_val_28781 = (state_28780[(1)]);
if((state_val_28781 === (7))){
var inst_28776 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
var statearr_28782_28827 = state_28780__$1;
(statearr_28782_28827[(2)] = inst_28776);

(statearr_28782_28827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (20))){
var state_28780__$1 = state_28780;
var statearr_28783_28828 = state_28780__$1;
(statearr_28783_28828[(2)] = null);

(statearr_28783_28828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (1))){
var state_28780__$1 = state_28780;
var statearr_28784_28829 = state_28780__$1;
(statearr_28784_28829[(2)] = null);

(statearr_28784_28829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (24))){
var inst_28759 = (state_28780[(7)]);
var inst_28768 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28759);
var state_28780__$1 = state_28780;
var statearr_28785_28830 = state_28780__$1;
(statearr_28785_28830[(2)] = inst_28768);

(statearr_28785_28830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (4))){
var inst_28711 = (state_28780[(8)]);
var inst_28711__$1 = (state_28780[(2)]);
var inst_28712 = (inst_28711__$1 == null);
var state_28780__$1 = (function (){var statearr_28786 = state_28780;
(statearr_28786[(8)] = inst_28711__$1);

return statearr_28786;
})();
if(cljs.core.truth_(inst_28712)){
var statearr_28787_28831 = state_28780__$1;
(statearr_28787_28831[(1)] = (5));

} else {
var statearr_28788_28832 = state_28780__$1;
(statearr_28788_28832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (15))){
var inst_28753 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
var statearr_28789_28833 = state_28780__$1;
(statearr_28789_28833[(2)] = inst_28753);

(statearr_28789_28833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (21))){
var inst_28773 = (state_28780[(2)]);
var state_28780__$1 = (function (){var statearr_28790 = state_28780;
(statearr_28790[(9)] = inst_28773);

return statearr_28790;
})();
var statearr_28791_28834 = state_28780__$1;
(statearr_28791_28834[(2)] = null);

(statearr_28791_28834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (13))){
var inst_28735 = (state_28780[(10)]);
var inst_28737 = cljs.core.chunked_seq_QMARK_.call(null,inst_28735);
var state_28780__$1 = state_28780;
if(inst_28737){
var statearr_28792_28835 = state_28780__$1;
(statearr_28792_28835[(1)] = (16));

} else {
var statearr_28793_28836 = state_28780__$1;
(statearr_28793_28836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (22))){
var inst_28765 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
if(cljs.core.truth_(inst_28765)){
var statearr_28794_28837 = state_28780__$1;
(statearr_28794_28837[(1)] = (23));

} else {
var statearr_28795_28838 = state_28780__$1;
(statearr_28795_28838[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (6))){
var inst_28759 = (state_28780[(7)]);
var inst_28761 = (state_28780[(11)]);
var inst_28711 = (state_28780[(8)]);
var inst_28759__$1 = topic_fn.call(null,inst_28711);
var inst_28760 = cljs.core.deref.call(null,mults);
var inst_28761__$1 = cljs.core.get.call(null,inst_28760,inst_28759__$1);
var state_28780__$1 = (function (){var statearr_28796 = state_28780;
(statearr_28796[(7)] = inst_28759__$1);

(statearr_28796[(11)] = inst_28761__$1);

return statearr_28796;
})();
if(cljs.core.truth_(inst_28761__$1)){
var statearr_28797_28839 = state_28780__$1;
(statearr_28797_28839[(1)] = (19));

} else {
var statearr_28798_28840 = state_28780__$1;
(statearr_28798_28840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (25))){
var inst_28770 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
var statearr_28799_28841 = state_28780__$1;
(statearr_28799_28841[(2)] = inst_28770);

(statearr_28799_28841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (17))){
var inst_28735 = (state_28780[(10)]);
var inst_28744 = cljs.core.first.call(null,inst_28735);
var inst_28745 = cljs.core.async.muxch_STAR_.call(null,inst_28744);
var inst_28746 = cljs.core.async.close_BANG_.call(null,inst_28745);
var inst_28747 = cljs.core.next.call(null,inst_28735);
var inst_28721 = inst_28747;
var inst_28722 = null;
var inst_28723 = (0);
var inst_28724 = (0);
var state_28780__$1 = (function (){var statearr_28800 = state_28780;
(statearr_28800[(12)] = inst_28723);

(statearr_28800[(13)] = inst_28721);

(statearr_28800[(14)] = inst_28724);

(statearr_28800[(15)] = inst_28722);

(statearr_28800[(16)] = inst_28746);

return statearr_28800;
})();
var statearr_28801_28842 = state_28780__$1;
(statearr_28801_28842[(2)] = null);

(statearr_28801_28842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (3))){
var inst_28778 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28780__$1,inst_28778);
} else {
if((state_val_28781 === (12))){
var inst_28755 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
var statearr_28802_28843 = state_28780__$1;
(statearr_28802_28843[(2)] = inst_28755);

(statearr_28802_28843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (2))){
var state_28780__$1 = state_28780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28780__$1,(4),ch);
} else {
if((state_val_28781 === (23))){
var state_28780__$1 = state_28780;
var statearr_28803_28844 = state_28780__$1;
(statearr_28803_28844[(2)] = null);

(statearr_28803_28844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (19))){
var inst_28761 = (state_28780[(11)]);
var inst_28711 = (state_28780[(8)]);
var inst_28763 = cljs.core.async.muxch_STAR_.call(null,inst_28761);
var state_28780__$1 = state_28780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28780__$1,(22),inst_28763,inst_28711);
} else {
if((state_val_28781 === (11))){
var inst_28721 = (state_28780[(13)]);
var inst_28735 = (state_28780[(10)]);
var inst_28735__$1 = cljs.core.seq.call(null,inst_28721);
var state_28780__$1 = (function (){var statearr_28804 = state_28780;
(statearr_28804[(10)] = inst_28735__$1);

return statearr_28804;
})();
if(inst_28735__$1){
var statearr_28805_28845 = state_28780__$1;
(statearr_28805_28845[(1)] = (13));

} else {
var statearr_28806_28846 = state_28780__$1;
(statearr_28806_28846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (9))){
var inst_28757 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
var statearr_28807_28847 = state_28780__$1;
(statearr_28807_28847[(2)] = inst_28757);

(statearr_28807_28847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (5))){
var inst_28718 = cljs.core.deref.call(null,mults);
var inst_28719 = cljs.core.vals.call(null,inst_28718);
var inst_28720 = cljs.core.seq.call(null,inst_28719);
var inst_28721 = inst_28720;
var inst_28722 = null;
var inst_28723 = (0);
var inst_28724 = (0);
var state_28780__$1 = (function (){var statearr_28808 = state_28780;
(statearr_28808[(12)] = inst_28723);

(statearr_28808[(13)] = inst_28721);

(statearr_28808[(14)] = inst_28724);

(statearr_28808[(15)] = inst_28722);

return statearr_28808;
})();
var statearr_28809_28848 = state_28780__$1;
(statearr_28809_28848[(2)] = null);

(statearr_28809_28848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (14))){
var state_28780__$1 = state_28780;
var statearr_28813_28849 = state_28780__$1;
(statearr_28813_28849[(2)] = null);

(statearr_28813_28849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (16))){
var inst_28735 = (state_28780[(10)]);
var inst_28739 = cljs.core.chunk_first.call(null,inst_28735);
var inst_28740 = cljs.core.chunk_rest.call(null,inst_28735);
var inst_28741 = cljs.core.count.call(null,inst_28739);
var inst_28721 = inst_28740;
var inst_28722 = inst_28739;
var inst_28723 = inst_28741;
var inst_28724 = (0);
var state_28780__$1 = (function (){var statearr_28814 = state_28780;
(statearr_28814[(12)] = inst_28723);

(statearr_28814[(13)] = inst_28721);

(statearr_28814[(14)] = inst_28724);

(statearr_28814[(15)] = inst_28722);

return statearr_28814;
})();
var statearr_28815_28850 = state_28780__$1;
(statearr_28815_28850[(2)] = null);

(statearr_28815_28850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (10))){
var inst_28723 = (state_28780[(12)]);
var inst_28721 = (state_28780[(13)]);
var inst_28724 = (state_28780[(14)]);
var inst_28722 = (state_28780[(15)]);
var inst_28729 = cljs.core._nth.call(null,inst_28722,inst_28724);
var inst_28730 = cljs.core.async.muxch_STAR_.call(null,inst_28729);
var inst_28731 = cljs.core.async.close_BANG_.call(null,inst_28730);
var inst_28732 = (inst_28724 + (1));
var tmp28810 = inst_28723;
var tmp28811 = inst_28721;
var tmp28812 = inst_28722;
var inst_28721__$1 = tmp28811;
var inst_28722__$1 = tmp28812;
var inst_28723__$1 = tmp28810;
var inst_28724__$1 = inst_28732;
var state_28780__$1 = (function (){var statearr_28816 = state_28780;
(statearr_28816[(12)] = inst_28723__$1);

(statearr_28816[(13)] = inst_28721__$1);

(statearr_28816[(14)] = inst_28724__$1);

(statearr_28816[(17)] = inst_28731);

(statearr_28816[(15)] = inst_28722__$1);

return statearr_28816;
})();
var statearr_28817_28851 = state_28780__$1;
(statearr_28817_28851[(2)] = null);

(statearr_28817_28851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (18))){
var inst_28750 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
var statearr_28818_28852 = state_28780__$1;
(statearr_28818_28852[(2)] = inst_28750);

(statearr_28818_28852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (8))){
var inst_28723 = (state_28780[(12)]);
var inst_28724 = (state_28780[(14)]);
var inst_28726 = (inst_28724 < inst_28723);
var inst_28727 = inst_28726;
var state_28780__$1 = state_28780;
if(cljs.core.truth_(inst_28727)){
var statearr_28819_28853 = state_28780__$1;
(statearr_28819_28853[(1)] = (10));

} else {
var statearr_28820_28854 = state_28780__$1;
(statearr_28820_28854[(1)] = (11));

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
});})(c__27592__auto___28826,mults,ensure_mult,p))
;
return ((function (switch__27502__auto__,c__27592__auto___28826,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_28821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28821[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_28821[(1)] = (1));

return statearr_28821;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_28780){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28822){if((e28822 instanceof Object)){
var ex__27506__auto__ = e28822;
var statearr_28823_28855 = state_28780;
(statearr_28823_28855[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28856 = state_28780;
state_28780 = G__28856;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_28780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_28780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___28826,mults,ensure_mult,p))
})();
var state__27594__auto__ = (function (){var statearr_28824 = f__27593__auto__.call(null);
(statearr_28824[(6)] = c__27592__auto___28826);

return statearr_28824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___28826,mults,ensure_mult,p))
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
var G__28858 = arguments.length;
switch (G__28858) {
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
var G__28861 = arguments.length;
switch (G__28861) {
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
var G__28864 = arguments.length;
switch (G__28864) {
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
var c__27592__auto___28931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___28931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___28931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28903){
var state_val_28904 = (state_28903[(1)]);
if((state_val_28904 === (7))){
var state_28903__$1 = state_28903;
var statearr_28905_28932 = state_28903__$1;
(statearr_28905_28932[(2)] = null);

(statearr_28905_28932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (1))){
var state_28903__$1 = state_28903;
var statearr_28906_28933 = state_28903__$1;
(statearr_28906_28933[(2)] = null);

(statearr_28906_28933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (4))){
var inst_28867 = (state_28903[(7)]);
var inst_28869 = (inst_28867 < cnt);
var state_28903__$1 = state_28903;
if(cljs.core.truth_(inst_28869)){
var statearr_28907_28934 = state_28903__$1;
(statearr_28907_28934[(1)] = (6));

} else {
var statearr_28908_28935 = state_28903__$1;
(statearr_28908_28935[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (15))){
var inst_28899 = (state_28903[(2)]);
var state_28903__$1 = state_28903;
var statearr_28909_28936 = state_28903__$1;
(statearr_28909_28936[(2)] = inst_28899);

(statearr_28909_28936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (13))){
var inst_28892 = cljs.core.async.close_BANG_.call(null,out);
var state_28903__$1 = state_28903;
var statearr_28910_28937 = state_28903__$1;
(statearr_28910_28937[(2)] = inst_28892);

(statearr_28910_28937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (6))){
var state_28903__$1 = state_28903;
var statearr_28911_28938 = state_28903__$1;
(statearr_28911_28938[(2)] = null);

(statearr_28911_28938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (3))){
var inst_28901 = (state_28903[(2)]);
var state_28903__$1 = state_28903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28903__$1,inst_28901);
} else {
if((state_val_28904 === (12))){
var inst_28889 = (state_28903[(8)]);
var inst_28889__$1 = (state_28903[(2)]);
var inst_28890 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28889__$1);
var state_28903__$1 = (function (){var statearr_28912 = state_28903;
(statearr_28912[(8)] = inst_28889__$1);

return statearr_28912;
})();
if(cljs.core.truth_(inst_28890)){
var statearr_28913_28939 = state_28903__$1;
(statearr_28913_28939[(1)] = (13));

} else {
var statearr_28914_28940 = state_28903__$1;
(statearr_28914_28940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (2))){
var inst_28866 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28867 = (0);
var state_28903__$1 = (function (){var statearr_28915 = state_28903;
(statearr_28915[(7)] = inst_28867);

(statearr_28915[(9)] = inst_28866);

return statearr_28915;
})();
var statearr_28916_28941 = state_28903__$1;
(statearr_28916_28941[(2)] = null);

(statearr_28916_28941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (11))){
var inst_28867 = (state_28903[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28903,(10),Object,null,(9));
var inst_28876 = chs__$1.call(null,inst_28867);
var inst_28877 = done.call(null,inst_28867);
var inst_28878 = cljs.core.async.take_BANG_.call(null,inst_28876,inst_28877);
var state_28903__$1 = state_28903;
var statearr_28917_28942 = state_28903__$1;
(statearr_28917_28942[(2)] = inst_28878);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (9))){
var inst_28867 = (state_28903[(7)]);
var inst_28880 = (state_28903[(2)]);
var inst_28881 = (inst_28867 + (1));
var inst_28867__$1 = inst_28881;
var state_28903__$1 = (function (){var statearr_28918 = state_28903;
(statearr_28918[(7)] = inst_28867__$1);

(statearr_28918[(10)] = inst_28880);

return statearr_28918;
})();
var statearr_28919_28943 = state_28903__$1;
(statearr_28919_28943[(2)] = null);

(statearr_28919_28943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (5))){
var inst_28887 = (state_28903[(2)]);
var state_28903__$1 = (function (){var statearr_28920 = state_28903;
(statearr_28920[(11)] = inst_28887);

return statearr_28920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28903__$1,(12),dchan);
} else {
if((state_val_28904 === (14))){
var inst_28889 = (state_28903[(8)]);
var inst_28894 = cljs.core.apply.call(null,f,inst_28889);
var state_28903__$1 = state_28903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28903__$1,(16),out,inst_28894);
} else {
if((state_val_28904 === (16))){
var inst_28896 = (state_28903[(2)]);
var state_28903__$1 = (function (){var statearr_28921 = state_28903;
(statearr_28921[(12)] = inst_28896);

return statearr_28921;
})();
var statearr_28922_28944 = state_28903__$1;
(statearr_28922_28944[(2)] = null);

(statearr_28922_28944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (10))){
var inst_28871 = (state_28903[(2)]);
var inst_28872 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28903__$1 = (function (){var statearr_28923 = state_28903;
(statearr_28923[(13)] = inst_28871);

return statearr_28923;
})();
var statearr_28924_28945 = state_28903__$1;
(statearr_28924_28945[(2)] = inst_28872);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28903__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28904 === (8))){
var inst_28885 = (state_28903[(2)]);
var state_28903__$1 = state_28903;
var statearr_28925_28946 = state_28903__$1;
(statearr_28925_28946[(2)] = inst_28885);

(statearr_28925_28946[(1)] = (5));


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
});})(c__27592__auto___28931,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27502__auto__,c__27592__auto___28931,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_28926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28926[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_28926[(1)] = (1));

return statearr_28926;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_28903){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e28927){if((e28927 instanceof Object)){
var ex__27506__auto__ = e28927;
var statearr_28928_28947 = state_28903;
(statearr_28928_28947[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28948 = state_28903;
state_28903 = G__28948;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_28903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_28903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___28931,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27594__auto__ = (function (){var statearr_28929 = f__27593__auto__.call(null);
(statearr_28929[(6)] = c__27592__auto___28931);

return statearr_28929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___28931,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28951 = arguments.length;
switch (G__28951) {
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
var c__27592__auto___29005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29005,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29005,out){
return (function (state_28983){
var state_val_28984 = (state_28983[(1)]);
if((state_val_28984 === (7))){
var inst_28963 = (state_28983[(7)]);
var inst_28962 = (state_28983[(8)]);
var inst_28962__$1 = (state_28983[(2)]);
var inst_28963__$1 = cljs.core.nth.call(null,inst_28962__$1,(0),null);
var inst_28964 = cljs.core.nth.call(null,inst_28962__$1,(1),null);
var inst_28965 = (inst_28963__$1 == null);
var state_28983__$1 = (function (){var statearr_28985 = state_28983;
(statearr_28985[(7)] = inst_28963__$1);

(statearr_28985[(9)] = inst_28964);

(statearr_28985[(8)] = inst_28962__$1);

return statearr_28985;
})();
if(cljs.core.truth_(inst_28965)){
var statearr_28986_29006 = state_28983__$1;
(statearr_28986_29006[(1)] = (8));

} else {
var statearr_28987_29007 = state_28983__$1;
(statearr_28987_29007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (1))){
var inst_28952 = cljs.core.vec.call(null,chs);
var inst_28953 = inst_28952;
var state_28983__$1 = (function (){var statearr_28988 = state_28983;
(statearr_28988[(10)] = inst_28953);

return statearr_28988;
})();
var statearr_28989_29008 = state_28983__$1;
(statearr_28989_29008[(2)] = null);

(statearr_28989_29008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (4))){
var inst_28953 = (state_28983[(10)]);
var state_28983__$1 = state_28983;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28983__$1,(7),inst_28953);
} else {
if((state_val_28984 === (6))){
var inst_28979 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28990_29009 = state_28983__$1;
(statearr_28990_29009[(2)] = inst_28979);

(statearr_28990_29009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (3))){
var inst_28981 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28983__$1,inst_28981);
} else {
if((state_val_28984 === (2))){
var inst_28953 = (state_28983[(10)]);
var inst_28955 = cljs.core.count.call(null,inst_28953);
var inst_28956 = (inst_28955 > (0));
var state_28983__$1 = state_28983;
if(cljs.core.truth_(inst_28956)){
var statearr_28992_29010 = state_28983__$1;
(statearr_28992_29010[(1)] = (4));

} else {
var statearr_28993_29011 = state_28983__$1;
(statearr_28993_29011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (11))){
var inst_28953 = (state_28983[(10)]);
var inst_28972 = (state_28983[(2)]);
var tmp28991 = inst_28953;
var inst_28953__$1 = tmp28991;
var state_28983__$1 = (function (){var statearr_28994 = state_28983;
(statearr_28994[(11)] = inst_28972);

(statearr_28994[(10)] = inst_28953__$1);

return statearr_28994;
})();
var statearr_28995_29012 = state_28983__$1;
(statearr_28995_29012[(2)] = null);

(statearr_28995_29012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (9))){
var inst_28963 = (state_28983[(7)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28983__$1,(11),out,inst_28963);
} else {
if((state_val_28984 === (5))){
var inst_28977 = cljs.core.async.close_BANG_.call(null,out);
var state_28983__$1 = state_28983;
var statearr_28996_29013 = state_28983__$1;
(statearr_28996_29013[(2)] = inst_28977);

(statearr_28996_29013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (10))){
var inst_28975 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28997_29014 = state_28983__$1;
(statearr_28997_29014[(2)] = inst_28975);

(statearr_28997_29014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (8))){
var inst_28963 = (state_28983[(7)]);
var inst_28964 = (state_28983[(9)]);
var inst_28962 = (state_28983[(8)]);
var inst_28953 = (state_28983[(10)]);
var inst_28967 = (function (){var cs = inst_28953;
var vec__28958 = inst_28962;
var v = inst_28963;
var c = inst_28964;
return ((function (cs,vec__28958,v,c,inst_28963,inst_28964,inst_28962,inst_28953,state_val_28984,c__27592__auto___29005,out){
return (function (p1__28949_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28949_SHARP_);
});
;})(cs,vec__28958,v,c,inst_28963,inst_28964,inst_28962,inst_28953,state_val_28984,c__27592__auto___29005,out))
})();
var inst_28968 = cljs.core.filterv.call(null,inst_28967,inst_28953);
var inst_28953__$1 = inst_28968;
var state_28983__$1 = (function (){var statearr_28998 = state_28983;
(statearr_28998[(10)] = inst_28953__$1);

return statearr_28998;
})();
var statearr_28999_29015 = state_28983__$1;
(statearr_28999_29015[(2)] = null);

(statearr_28999_29015[(1)] = (2));


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
});})(c__27592__auto___29005,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29005,out){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_29000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29000[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_29000[(1)] = (1));

return statearr_29000;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_28983){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_28983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29001){if((e29001 instanceof Object)){
var ex__27506__auto__ = e29001;
var statearr_29002_29016 = state_28983;
(statearr_29002_29016[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29017 = state_28983;
state_28983 = G__29017;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_28983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_28983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29005,out))
})();
var state__27594__auto__ = (function (){var statearr_29003 = f__27593__auto__.call(null);
(statearr_29003[(6)] = c__27592__auto___29005);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29005,out))
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
var G__29019 = arguments.length;
switch (G__29019) {
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
var c__27592__auto___29064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29064,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29064,out){
return (function (state_29043){
var state_val_29044 = (state_29043[(1)]);
if((state_val_29044 === (7))){
var inst_29025 = (state_29043[(7)]);
var inst_29025__$1 = (state_29043[(2)]);
var inst_29026 = (inst_29025__$1 == null);
var inst_29027 = cljs.core.not.call(null,inst_29026);
var state_29043__$1 = (function (){var statearr_29045 = state_29043;
(statearr_29045[(7)] = inst_29025__$1);

return statearr_29045;
})();
if(inst_29027){
var statearr_29046_29065 = state_29043__$1;
(statearr_29046_29065[(1)] = (8));

} else {
var statearr_29047_29066 = state_29043__$1;
(statearr_29047_29066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (1))){
var inst_29020 = (0);
var state_29043__$1 = (function (){var statearr_29048 = state_29043;
(statearr_29048[(8)] = inst_29020);

return statearr_29048;
})();
var statearr_29049_29067 = state_29043__$1;
(statearr_29049_29067[(2)] = null);

(statearr_29049_29067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (4))){
var state_29043__$1 = state_29043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29043__$1,(7),ch);
} else {
if((state_val_29044 === (6))){
var inst_29038 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
var statearr_29050_29068 = state_29043__$1;
(statearr_29050_29068[(2)] = inst_29038);

(statearr_29050_29068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (3))){
var inst_29040 = (state_29043[(2)]);
var inst_29041 = cljs.core.async.close_BANG_.call(null,out);
var state_29043__$1 = (function (){var statearr_29051 = state_29043;
(statearr_29051[(9)] = inst_29040);

return statearr_29051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29043__$1,inst_29041);
} else {
if((state_val_29044 === (2))){
var inst_29020 = (state_29043[(8)]);
var inst_29022 = (inst_29020 < n);
var state_29043__$1 = state_29043;
if(cljs.core.truth_(inst_29022)){
var statearr_29052_29069 = state_29043__$1;
(statearr_29052_29069[(1)] = (4));

} else {
var statearr_29053_29070 = state_29043__$1;
(statearr_29053_29070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (11))){
var inst_29020 = (state_29043[(8)]);
var inst_29030 = (state_29043[(2)]);
var inst_29031 = (inst_29020 + (1));
var inst_29020__$1 = inst_29031;
var state_29043__$1 = (function (){var statearr_29054 = state_29043;
(statearr_29054[(10)] = inst_29030);

(statearr_29054[(8)] = inst_29020__$1);

return statearr_29054;
})();
var statearr_29055_29071 = state_29043__$1;
(statearr_29055_29071[(2)] = null);

(statearr_29055_29071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (9))){
var state_29043__$1 = state_29043;
var statearr_29056_29072 = state_29043__$1;
(statearr_29056_29072[(2)] = null);

(statearr_29056_29072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (5))){
var state_29043__$1 = state_29043;
var statearr_29057_29073 = state_29043__$1;
(statearr_29057_29073[(2)] = null);

(statearr_29057_29073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (10))){
var inst_29035 = (state_29043[(2)]);
var state_29043__$1 = state_29043;
var statearr_29058_29074 = state_29043__$1;
(statearr_29058_29074[(2)] = inst_29035);

(statearr_29058_29074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29044 === (8))){
var inst_29025 = (state_29043[(7)]);
var state_29043__$1 = state_29043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29043__$1,(11),out,inst_29025);
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
});})(c__27592__auto___29064,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29064,out){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_29059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29059[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_29059[(1)] = (1));

return statearr_29059;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_29043){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29060){if((e29060 instanceof Object)){
var ex__27506__auto__ = e29060;
var statearr_29061_29075 = state_29043;
(statearr_29061_29075[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29043;
state_29043 = G__29076;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_29043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_29043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29064,out))
})();
var state__27594__auto__ = (function (){var statearr_29062 = f__27593__auto__.call(null);
(statearr_29062[(6)] = c__27592__auto___29064);

return statearr_29062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29064,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29078 = (function (f,ch,meta29079){
this.f = f;
this.ch = ch;
this.meta29079 = meta29079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29080,meta29079__$1){
var self__ = this;
var _29080__$1 = this;
return (new cljs.core.async.t_cljs$core$async29078(self__.f,self__.ch,meta29079__$1));
});

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29080){
var self__ = this;
var _29080__$1 = this;
return self__.meta29079;
});

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29081 = (function (f,ch,meta29079,_,fn1,meta29082){
this.f = f;
this.ch = ch;
this.meta29079 = meta29079;
this._ = _;
this.fn1 = fn1;
this.meta29082 = meta29082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29083,meta29082__$1){
var self__ = this;
var _29083__$1 = this;
return (new cljs.core.async.t_cljs$core$async29081(self__.f,self__.ch,self__.meta29079,self__._,self__.fn1,meta29082__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29083){
var self__ = this;
var _29083__$1 = this;
return self__.meta29082;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29081.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29077_SHARP_){
return f1.call(null,(((p1__29077_SHARP_ == null))?null:self__.f.call(null,p1__29077_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29081.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29079","meta29079",1718570552,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29078","cljs.core.async/t_cljs$core$async29078",1603050178,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29082","meta29082",-150499599,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29081";

cljs.core.async.t_cljs$core$async29081.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29081");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29081.
 */
cljs.core.async.__GT_t_cljs$core$async29081 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29081(f__$1,ch__$1,meta29079__$1,___$2,fn1__$1,meta29082){
return (new cljs.core.async.t_cljs$core$async29081(f__$1,ch__$1,meta29079__$1,___$2,fn1__$1,meta29082));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29081(self__.f,self__.ch,self__.meta29079,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29079","meta29079",1718570552,null)], null);
});

cljs.core.async.t_cljs$core$async29078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29078";

cljs.core.async.t_cljs$core$async29078.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29078");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29078.
 */
cljs.core.async.__GT_t_cljs$core$async29078 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29078(f__$1,ch__$1,meta29079){
return (new cljs.core.async.t_cljs$core$async29078(f__$1,ch__$1,meta29079));
});

}

return (new cljs.core.async.t_cljs$core$async29078(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29084 = (function (f,ch,meta29085){
this.f = f;
this.ch = ch;
this.meta29085 = meta29085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29086,meta29085__$1){
var self__ = this;
var _29086__$1 = this;
return (new cljs.core.async.t_cljs$core$async29084(self__.f,self__.ch,meta29085__$1));
});

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29086){
var self__ = this;
var _29086__$1 = this;
return self__.meta29085;
});

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29085","meta29085",-1433132376,null)], null);
});

cljs.core.async.t_cljs$core$async29084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29084";

cljs.core.async.t_cljs$core$async29084.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29084");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29084.
 */
cljs.core.async.__GT_t_cljs$core$async29084 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29084(f__$1,ch__$1,meta29085){
return (new cljs.core.async.t_cljs$core$async29084(f__$1,ch__$1,meta29085));
});

}

return (new cljs.core.async.t_cljs$core$async29084(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29087 = (function (p,ch,meta29088){
this.p = p;
this.ch = ch;
this.meta29088 = meta29088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29089,meta29088__$1){
var self__ = this;
var _29089__$1 = this;
return (new cljs.core.async.t_cljs$core$async29087(self__.p,self__.ch,meta29088__$1));
});

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29089){
var self__ = this;
var _29089__$1 = this;
return self__.meta29088;
});

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29088","meta29088",-378474465,null)], null);
});

cljs.core.async.t_cljs$core$async29087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29087";

cljs.core.async.t_cljs$core$async29087.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29087");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29087.
 */
cljs.core.async.__GT_t_cljs$core$async29087 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29087(p__$1,ch__$1,meta29088){
return (new cljs.core.async.t_cljs$core$async29087(p__$1,ch__$1,meta29088));
});

}

return (new cljs.core.async.t_cljs$core$async29087(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29091 = arguments.length;
switch (G__29091) {
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
var c__27592__auto___29131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29131,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29131,out){
return (function (state_29112){
var state_val_29113 = (state_29112[(1)]);
if((state_val_29113 === (7))){
var inst_29108 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29114_29132 = state_29112__$1;
(statearr_29114_29132[(2)] = inst_29108);

(statearr_29114_29132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (1))){
var state_29112__$1 = state_29112;
var statearr_29115_29133 = state_29112__$1;
(statearr_29115_29133[(2)] = null);

(statearr_29115_29133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (4))){
var inst_29094 = (state_29112[(7)]);
var inst_29094__$1 = (state_29112[(2)]);
var inst_29095 = (inst_29094__$1 == null);
var state_29112__$1 = (function (){var statearr_29116 = state_29112;
(statearr_29116[(7)] = inst_29094__$1);

return statearr_29116;
})();
if(cljs.core.truth_(inst_29095)){
var statearr_29117_29134 = state_29112__$1;
(statearr_29117_29134[(1)] = (5));

} else {
var statearr_29118_29135 = state_29112__$1;
(statearr_29118_29135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (6))){
var inst_29094 = (state_29112[(7)]);
var inst_29099 = p.call(null,inst_29094);
var state_29112__$1 = state_29112;
if(cljs.core.truth_(inst_29099)){
var statearr_29119_29136 = state_29112__$1;
(statearr_29119_29136[(1)] = (8));

} else {
var statearr_29120_29137 = state_29112__$1;
(statearr_29120_29137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (3))){
var inst_29110 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29112__$1,inst_29110);
} else {
if((state_val_29113 === (2))){
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(4),ch);
} else {
if((state_val_29113 === (11))){
var inst_29102 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29121_29138 = state_29112__$1;
(statearr_29121_29138[(2)] = inst_29102);

(statearr_29121_29138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (9))){
var state_29112__$1 = state_29112;
var statearr_29122_29139 = state_29112__$1;
(statearr_29122_29139[(2)] = null);

(statearr_29122_29139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (5))){
var inst_29097 = cljs.core.async.close_BANG_.call(null,out);
var state_29112__$1 = state_29112;
var statearr_29123_29140 = state_29112__$1;
(statearr_29123_29140[(2)] = inst_29097);

(statearr_29123_29140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (10))){
var inst_29105 = (state_29112[(2)]);
var state_29112__$1 = (function (){var statearr_29124 = state_29112;
(statearr_29124[(8)] = inst_29105);

return statearr_29124;
})();
var statearr_29125_29141 = state_29112__$1;
(statearr_29125_29141[(2)] = null);

(statearr_29125_29141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (8))){
var inst_29094 = (state_29112[(7)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29112__$1,(11),out,inst_29094);
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
});})(c__27592__auto___29131,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29131,out){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_29126 = [null,null,null,null,null,null,null,null,null];
(statearr_29126[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_29126[(1)] = (1));

return statearr_29126;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_29112){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object)){
var ex__27506__auto__ = e29127;
var statearr_29128_29142 = state_29112;
(statearr_29128_29142[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29143 = state_29112;
state_29112 = G__29143;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29131,out))
})();
var state__27594__auto__ = (function (){var statearr_29129 = f__27593__auto__.call(null);
(statearr_29129[(6)] = c__27592__auto___29131);

return statearr_29129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29131,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29145 = arguments.length;
switch (G__29145) {
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
var c__27592__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto__){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto__){
return (function (state_29208){
var state_val_29209 = (state_29208[(1)]);
if((state_val_29209 === (7))){
var inst_29204 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
var statearr_29210_29248 = state_29208__$1;
(statearr_29210_29248[(2)] = inst_29204);

(statearr_29210_29248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (20))){
var inst_29174 = (state_29208[(7)]);
var inst_29185 = (state_29208[(2)]);
var inst_29186 = cljs.core.next.call(null,inst_29174);
var inst_29160 = inst_29186;
var inst_29161 = null;
var inst_29162 = (0);
var inst_29163 = (0);
var state_29208__$1 = (function (){var statearr_29211 = state_29208;
(statearr_29211[(8)] = inst_29161);

(statearr_29211[(9)] = inst_29162);

(statearr_29211[(10)] = inst_29185);

(statearr_29211[(11)] = inst_29160);

(statearr_29211[(12)] = inst_29163);

return statearr_29211;
})();
var statearr_29212_29249 = state_29208__$1;
(statearr_29212_29249[(2)] = null);

(statearr_29212_29249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (1))){
var state_29208__$1 = state_29208;
var statearr_29213_29250 = state_29208__$1;
(statearr_29213_29250[(2)] = null);

(statearr_29213_29250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (4))){
var inst_29149 = (state_29208[(13)]);
var inst_29149__$1 = (state_29208[(2)]);
var inst_29150 = (inst_29149__$1 == null);
var state_29208__$1 = (function (){var statearr_29214 = state_29208;
(statearr_29214[(13)] = inst_29149__$1);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29150)){
var statearr_29215_29251 = state_29208__$1;
(statearr_29215_29251[(1)] = (5));

} else {
var statearr_29216_29252 = state_29208__$1;
(statearr_29216_29252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (15))){
var state_29208__$1 = state_29208;
var statearr_29220_29253 = state_29208__$1;
(statearr_29220_29253[(2)] = null);

(statearr_29220_29253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (21))){
var state_29208__$1 = state_29208;
var statearr_29221_29254 = state_29208__$1;
(statearr_29221_29254[(2)] = null);

(statearr_29221_29254[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (13))){
var inst_29161 = (state_29208[(8)]);
var inst_29162 = (state_29208[(9)]);
var inst_29160 = (state_29208[(11)]);
var inst_29163 = (state_29208[(12)]);
var inst_29170 = (state_29208[(2)]);
var inst_29171 = (inst_29163 + (1));
var tmp29217 = inst_29161;
var tmp29218 = inst_29162;
var tmp29219 = inst_29160;
var inst_29160__$1 = tmp29219;
var inst_29161__$1 = tmp29217;
var inst_29162__$1 = tmp29218;
var inst_29163__$1 = inst_29171;
var state_29208__$1 = (function (){var statearr_29222 = state_29208;
(statearr_29222[(8)] = inst_29161__$1);

(statearr_29222[(9)] = inst_29162__$1);

(statearr_29222[(14)] = inst_29170);

(statearr_29222[(11)] = inst_29160__$1);

(statearr_29222[(12)] = inst_29163__$1);

return statearr_29222;
})();
var statearr_29223_29255 = state_29208__$1;
(statearr_29223_29255[(2)] = null);

(statearr_29223_29255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (22))){
var state_29208__$1 = state_29208;
var statearr_29224_29256 = state_29208__$1;
(statearr_29224_29256[(2)] = null);

(statearr_29224_29256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (6))){
var inst_29149 = (state_29208[(13)]);
var inst_29158 = f.call(null,inst_29149);
var inst_29159 = cljs.core.seq.call(null,inst_29158);
var inst_29160 = inst_29159;
var inst_29161 = null;
var inst_29162 = (0);
var inst_29163 = (0);
var state_29208__$1 = (function (){var statearr_29225 = state_29208;
(statearr_29225[(8)] = inst_29161);

(statearr_29225[(9)] = inst_29162);

(statearr_29225[(11)] = inst_29160);

(statearr_29225[(12)] = inst_29163);

return statearr_29225;
})();
var statearr_29226_29257 = state_29208__$1;
(statearr_29226_29257[(2)] = null);

(statearr_29226_29257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (17))){
var inst_29174 = (state_29208[(7)]);
var inst_29178 = cljs.core.chunk_first.call(null,inst_29174);
var inst_29179 = cljs.core.chunk_rest.call(null,inst_29174);
var inst_29180 = cljs.core.count.call(null,inst_29178);
var inst_29160 = inst_29179;
var inst_29161 = inst_29178;
var inst_29162 = inst_29180;
var inst_29163 = (0);
var state_29208__$1 = (function (){var statearr_29227 = state_29208;
(statearr_29227[(8)] = inst_29161);

(statearr_29227[(9)] = inst_29162);

(statearr_29227[(11)] = inst_29160);

(statearr_29227[(12)] = inst_29163);

return statearr_29227;
})();
var statearr_29228_29258 = state_29208__$1;
(statearr_29228_29258[(2)] = null);

(statearr_29228_29258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (3))){
var inst_29206 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29208__$1,inst_29206);
} else {
if((state_val_29209 === (12))){
var inst_29194 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
var statearr_29229_29259 = state_29208__$1;
(statearr_29229_29259[(2)] = inst_29194);

(statearr_29229_29259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (2))){
var state_29208__$1 = state_29208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29208__$1,(4),in$);
} else {
if((state_val_29209 === (23))){
var inst_29202 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
var statearr_29230_29260 = state_29208__$1;
(statearr_29230_29260[(2)] = inst_29202);

(statearr_29230_29260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (19))){
var inst_29189 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
var statearr_29231_29261 = state_29208__$1;
(statearr_29231_29261[(2)] = inst_29189);

(statearr_29231_29261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (11))){
var inst_29160 = (state_29208[(11)]);
var inst_29174 = (state_29208[(7)]);
var inst_29174__$1 = cljs.core.seq.call(null,inst_29160);
var state_29208__$1 = (function (){var statearr_29232 = state_29208;
(statearr_29232[(7)] = inst_29174__$1);

return statearr_29232;
})();
if(inst_29174__$1){
var statearr_29233_29262 = state_29208__$1;
(statearr_29233_29262[(1)] = (14));

} else {
var statearr_29234_29263 = state_29208__$1;
(statearr_29234_29263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (9))){
var inst_29196 = (state_29208[(2)]);
var inst_29197 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29208__$1 = (function (){var statearr_29235 = state_29208;
(statearr_29235[(15)] = inst_29196);

return statearr_29235;
})();
if(cljs.core.truth_(inst_29197)){
var statearr_29236_29264 = state_29208__$1;
(statearr_29236_29264[(1)] = (21));

} else {
var statearr_29237_29265 = state_29208__$1;
(statearr_29237_29265[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (5))){
var inst_29152 = cljs.core.async.close_BANG_.call(null,out);
var state_29208__$1 = state_29208;
var statearr_29238_29266 = state_29208__$1;
(statearr_29238_29266[(2)] = inst_29152);

(statearr_29238_29266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (14))){
var inst_29174 = (state_29208[(7)]);
var inst_29176 = cljs.core.chunked_seq_QMARK_.call(null,inst_29174);
var state_29208__$1 = state_29208;
if(inst_29176){
var statearr_29239_29267 = state_29208__$1;
(statearr_29239_29267[(1)] = (17));

} else {
var statearr_29240_29268 = state_29208__$1;
(statearr_29240_29268[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (16))){
var inst_29192 = (state_29208[(2)]);
var state_29208__$1 = state_29208;
var statearr_29241_29269 = state_29208__$1;
(statearr_29241_29269[(2)] = inst_29192);

(statearr_29241_29269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29209 === (10))){
var inst_29161 = (state_29208[(8)]);
var inst_29163 = (state_29208[(12)]);
var inst_29168 = cljs.core._nth.call(null,inst_29161,inst_29163);
var state_29208__$1 = state_29208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29208__$1,(13),out,inst_29168);
} else {
if((state_val_29209 === (18))){
var inst_29174 = (state_29208[(7)]);
var inst_29183 = cljs.core.first.call(null,inst_29174);
var state_29208__$1 = state_29208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29208__$1,(20),out,inst_29183);
} else {
if((state_val_29209 === (8))){
var inst_29162 = (state_29208[(9)]);
var inst_29163 = (state_29208[(12)]);
var inst_29165 = (inst_29163 < inst_29162);
var inst_29166 = inst_29165;
var state_29208__$1 = state_29208;
if(cljs.core.truth_(inst_29166)){
var statearr_29242_29270 = state_29208__$1;
(statearr_29242_29270[(1)] = (10));

} else {
var statearr_29243_29271 = state_29208__$1;
(statearr_29243_29271[(1)] = (11));

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
});})(c__27592__auto__))
;
return ((function (switch__27502__auto__,c__27592__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27503__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27503__auto____0 = (function (){
var statearr_29244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29244[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27503__auto__);

(statearr_29244[(1)] = (1));

return statearr_29244;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27503__auto____1 = (function (state_29208){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29245){if((e29245 instanceof Object)){
var ex__27506__auto__ = e29245;
var statearr_29246_29272 = state_29208;
(statearr_29246_29272[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29273 = state_29208;
state_29208 = G__29273;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27503__auto__ = function(state_29208){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27503__auto____1.call(this,state_29208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27503__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27503__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto__))
})();
var state__27594__auto__ = (function (){var statearr_29247 = f__27593__auto__.call(null);
(statearr_29247[(6)] = c__27592__auto__);

return statearr_29247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto__))
);

return c__27592__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29275 = arguments.length;
switch (G__29275) {
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
var G__29278 = arguments.length;
switch (G__29278) {
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
var G__29281 = arguments.length;
switch (G__29281) {
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
var c__27592__auto___29328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29328,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29328,out){
return (function (state_29305){
var state_val_29306 = (state_29305[(1)]);
if((state_val_29306 === (7))){
var inst_29300 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29307_29329 = state_29305__$1;
(statearr_29307_29329[(2)] = inst_29300);

(statearr_29307_29329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (1))){
var inst_29282 = null;
var state_29305__$1 = (function (){var statearr_29308 = state_29305;
(statearr_29308[(7)] = inst_29282);

return statearr_29308;
})();
var statearr_29309_29330 = state_29305__$1;
(statearr_29309_29330[(2)] = null);

(statearr_29309_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (4))){
var inst_29285 = (state_29305[(8)]);
var inst_29285__$1 = (state_29305[(2)]);
var inst_29286 = (inst_29285__$1 == null);
var inst_29287 = cljs.core.not.call(null,inst_29286);
var state_29305__$1 = (function (){var statearr_29310 = state_29305;
(statearr_29310[(8)] = inst_29285__$1);

return statearr_29310;
})();
if(inst_29287){
var statearr_29311_29331 = state_29305__$1;
(statearr_29311_29331[(1)] = (5));

} else {
var statearr_29312_29332 = state_29305__$1;
(statearr_29312_29332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (6))){
var state_29305__$1 = state_29305;
var statearr_29313_29333 = state_29305__$1;
(statearr_29313_29333[(2)] = null);

(statearr_29313_29333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (3))){
var inst_29302 = (state_29305[(2)]);
var inst_29303 = cljs.core.async.close_BANG_.call(null,out);
var state_29305__$1 = (function (){var statearr_29314 = state_29305;
(statearr_29314[(9)] = inst_29302);

return statearr_29314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29305__$1,inst_29303);
} else {
if((state_val_29306 === (2))){
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(4),ch);
} else {
if((state_val_29306 === (11))){
var inst_29285 = (state_29305[(8)]);
var inst_29294 = (state_29305[(2)]);
var inst_29282 = inst_29285;
var state_29305__$1 = (function (){var statearr_29315 = state_29305;
(statearr_29315[(7)] = inst_29282);

(statearr_29315[(10)] = inst_29294);

return statearr_29315;
})();
var statearr_29316_29334 = state_29305__$1;
(statearr_29316_29334[(2)] = null);

(statearr_29316_29334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (9))){
var inst_29285 = (state_29305[(8)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29305__$1,(11),out,inst_29285);
} else {
if((state_val_29306 === (5))){
var inst_29282 = (state_29305[(7)]);
var inst_29285 = (state_29305[(8)]);
var inst_29289 = cljs.core._EQ_.call(null,inst_29285,inst_29282);
var state_29305__$1 = state_29305;
if(inst_29289){
var statearr_29318_29335 = state_29305__$1;
(statearr_29318_29335[(1)] = (8));

} else {
var statearr_29319_29336 = state_29305__$1;
(statearr_29319_29336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (10))){
var inst_29297 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29320_29337 = state_29305__$1;
(statearr_29320_29337[(2)] = inst_29297);

(statearr_29320_29337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (8))){
var inst_29282 = (state_29305[(7)]);
var tmp29317 = inst_29282;
var inst_29282__$1 = tmp29317;
var state_29305__$1 = (function (){var statearr_29321 = state_29305;
(statearr_29321[(7)] = inst_29282__$1);

return statearr_29321;
})();
var statearr_29322_29338 = state_29305__$1;
(statearr_29322_29338[(2)] = null);

(statearr_29322_29338[(1)] = (2));


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
});})(c__27592__auto___29328,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29328,out){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_29323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29323[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_29323[(1)] = (1));

return statearr_29323;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_29305){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29324){if((e29324 instanceof Object)){
var ex__27506__auto__ = e29324;
var statearr_29325_29339 = state_29305;
(statearr_29325_29339[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29340 = state_29305;
state_29305 = G__29340;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_29305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_29305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29328,out))
})();
var state__27594__auto__ = (function (){var statearr_29326 = f__27593__auto__.call(null);
(statearr_29326[(6)] = c__27592__auto___29328);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29328,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29342 = arguments.length;
switch (G__29342) {
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
var c__27592__auto___29408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29408,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29408,out){
return (function (state_29380){
var state_val_29381 = (state_29380[(1)]);
if((state_val_29381 === (7))){
var inst_29376 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29382_29409 = state_29380__$1;
(statearr_29382_29409[(2)] = inst_29376);

(statearr_29382_29409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (1))){
var inst_29343 = (new Array(n));
var inst_29344 = inst_29343;
var inst_29345 = (0);
var state_29380__$1 = (function (){var statearr_29383 = state_29380;
(statearr_29383[(7)] = inst_29344);

(statearr_29383[(8)] = inst_29345);

return statearr_29383;
})();
var statearr_29384_29410 = state_29380__$1;
(statearr_29384_29410[(2)] = null);

(statearr_29384_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (4))){
var inst_29348 = (state_29380[(9)]);
var inst_29348__$1 = (state_29380[(2)]);
var inst_29349 = (inst_29348__$1 == null);
var inst_29350 = cljs.core.not.call(null,inst_29349);
var state_29380__$1 = (function (){var statearr_29385 = state_29380;
(statearr_29385[(9)] = inst_29348__$1);

return statearr_29385;
})();
if(inst_29350){
var statearr_29386_29411 = state_29380__$1;
(statearr_29386_29411[(1)] = (5));

} else {
var statearr_29387_29412 = state_29380__$1;
(statearr_29387_29412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (15))){
var inst_29370 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29388_29413 = state_29380__$1;
(statearr_29388_29413[(2)] = inst_29370);

(statearr_29388_29413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (13))){
var state_29380__$1 = state_29380;
var statearr_29389_29414 = state_29380__$1;
(statearr_29389_29414[(2)] = null);

(statearr_29389_29414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (6))){
var inst_29345 = (state_29380[(8)]);
var inst_29366 = (inst_29345 > (0));
var state_29380__$1 = state_29380;
if(cljs.core.truth_(inst_29366)){
var statearr_29390_29415 = state_29380__$1;
(statearr_29390_29415[(1)] = (12));

} else {
var statearr_29391_29416 = state_29380__$1;
(statearr_29391_29416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (3))){
var inst_29378 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29380__$1,inst_29378);
} else {
if((state_val_29381 === (12))){
var inst_29344 = (state_29380[(7)]);
var inst_29368 = cljs.core.vec.call(null,inst_29344);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29380__$1,(15),out,inst_29368);
} else {
if((state_val_29381 === (2))){
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29380__$1,(4),ch);
} else {
if((state_val_29381 === (11))){
var inst_29360 = (state_29380[(2)]);
var inst_29361 = (new Array(n));
var inst_29344 = inst_29361;
var inst_29345 = (0);
var state_29380__$1 = (function (){var statearr_29392 = state_29380;
(statearr_29392[(7)] = inst_29344);

(statearr_29392[(10)] = inst_29360);

(statearr_29392[(8)] = inst_29345);

return statearr_29392;
})();
var statearr_29393_29417 = state_29380__$1;
(statearr_29393_29417[(2)] = null);

(statearr_29393_29417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (9))){
var inst_29344 = (state_29380[(7)]);
var inst_29358 = cljs.core.vec.call(null,inst_29344);
var state_29380__$1 = state_29380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29380__$1,(11),out,inst_29358);
} else {
if((state_val_29381 === (5))){
var inst_29348 = (state_29380[(9)]);
var inst_29344 = (state_29380[(7)]);
var inst_29353 = (state_29380[(11)]);
var inst_29345 = (state_29380[(8)]);
var inst_29352 = (inst_29344[inst_29345] = inst_29348);
var inst_29353__$1 = (inst_29345 + (1));
var inst_29354 = (inst_29353__$1 < n);
var state_29380__$1 = (function (){var statearr_29394 = state_29380;
(statearr_29394[(12)] = inst_29352);

(statearr_29394[(11)] = inst_29353__$1);

return statearr_29394;
})();
if(cljs.core.truth_(inst_29354)){
var statearr_29395_29418 = state_29380__$1;
(statearr_29395_29418[(1)] = (8));

} else {
var statearr_29396_29419 = state_29380__$1;
(statearr_29396_29419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (14))){
var inst_29373 = (state_29380[(2)]);
var inst_29374 = cljs.core.async.close_BANG_.call(null,out);
var state_29380__$1 = (function (){var statearr_29398 = state_29380;
(statearr_29398[(13)] = inst_29373);

return statearr_29398;
})();
var statearr_29399_29420 = state_29380__$1;
(statearr_29399_29420[(2)] = inst_29374);

(statearr_29399_29420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (10))){
var inst_29364 = (state_29380[(2)]);
var state_29380__$1 = state_29380;
var statearr_29400_29421 = state_29380__$1;
(statearr_29400_29421[(2)] = inst_29364);

(statearr_29400_29421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29381 === (8))){
var inst_29344 = (state_29380[(7)]);
var inst_29353 = (state_29380[(11)]);
var tmp29397 = inst_29344;
var inst_29344__$1 = tmp29397;
var inst_29345 = inst_29353;
var state_29380__$1 = (function (){var statearr_29401 = state_29380;
(statearr_29401[(7)] = inst_29344__$1);

(statearr_29401[(8)] = inst_29345);

return statearr_29401;
})();
var statearr_29402_29422 = state_29380__$1;
(statearr_29402_29422[(2)] = null);

(statearr_29402_29422[(1)] = (2));


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
});})(c__27592__auto___29408,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29408,out){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_29403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29403[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_29403[(1)] = (1));

return statearr_29403;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_29380){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29404){if((e29404 instanceof Object)){
var ex__27506__auto__ = e29404;
var statearr_29405_29423 = state_29380;
(statearr_29405_29423[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29424 = state_29380;
state_29380 = G__29424;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_29380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_29380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29408,out))
})();
var state__27594__auto__ = (function (){var statearr_29406 = f__27593__auto__.call(null);
(statearr_29406[(6)] = c__27592__auto___29408);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29408,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29426 = arguments.length;
switch (G__29426) {
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
var c__27592__auto___29496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27592__auto___29496,out){
return (function (){
var f__27593__auto__ = (function (){var switch__27502__auto__ = ((function (c__27592__auto___29496,out){
return (function (state_29468){
var state_val_29469 = (state_29468[(1)]);
if((state_val_29469 === (7))){
var inst_29464 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
var statearr_29470_29497 = state_29468__$1;
(statearr_29470_29497[(2)] = inst_29464);

(statearr_29470_29497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (1))){
var inst_29427 = [];
var inst_29428 = inst_29427;
var inst_29429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29468__$1 = (function (){var statearr_29471 = state_29468;
(statearr_29471[(7)] = inst_29429);

(statearr_29471[(8)] = inst_29428);

return statearr_29471;
})();
var statearr_29472_29498 = state_29468__$1;
(statearr_29472_29498[(2)] = null);

(statearr_29472_29498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (4))){
var inst_29432 = (state_29468[(9)]);
var inst_29432__$1 = (state_29468[(2)]);
var inst_29433 = (inst_29432__$1 == null);
var inst_29434 = cljs.core.not.call(null,inst_29433);
var state_29468__$1 = (function (){var statearr_29473 = state_29468;
(statearr_29473[(9)] = inst_29432__$1);

return statearr_29473;
})();
if(inst_29434){
var statearr_29474_29499 = state_29468__$1;
(statearr_29474_29499[(1)] = (5));

} else {
var statearr_29475_29500 = state_29468__$1;
(statearr_29475_29500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (15))){
var inst_29458 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
var statearr_29476_29501 = state_29468__$1;
(statearr_29476_29501[(2)] = inst_29458);

(statearr_29476_29501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (13))){
var state_29468__$1 = state_29468;
var statearr_29477_29502 = state_29468__$1;
(statearr_29477_29502[(2)] = null);

(statearr_29477_29502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (6))){
var inst_29428 = (state_29468[(8)]);
var inst_29453 = inst_29428.length;
var inst_29454 = (inst_29453 > (0));
var state_29468__$1 = state_29468;
if(cljs.core.truth_(inst_29454)){
var statearr_29478_29503 = state_29468__$1;
(statearr_29478_29503[(1)] = (12));

} else {
var statearr_29479_29504 = state_29468__$1;
(statearr_29479_29504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (3))){
var inst_29466 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29468__$1,inst_29466);
} else {
if((state_val_29469 === (12))){
var inst_29428 = (state_29468[(8)]);
var inst_29456 = cljs.core.vec.call(null,inst_29428);
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29468__$1,(15),out,inst_29456);
} else {
if((state_val_29469 === (2))){
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29468__$1,(4),ch);
} else {
if((state_val_29469 === (11))){
var inst_29436 = (state_29468[(10)]);
var inst_29432 = (state_29468[(9)]);
var inst_29446 = (state_29468[(2)]);
var inst_29447 = [];
var inst_29448 = inst_29447.push(inst_29432);
var inst_29428 = inst_29447;
var inst_29429 = inst_29436;
var state_29468__$1 = (function (){var statearr_29480 = state_29468;
(statearr_29480[(11)] = inst_29446);

(statearr_29480[(7)] = inst_29429);

(statearr_29480[(8)] = inst_29428);

(statearr_29480[(12)] = inst_29448);

return statearr_29480;
})();
var statearr_29481_29505 = state_29468__$1;
(statearr_29481_29505[(2)] = null);

(statearr_29481_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (9))){
var inst_29428 = (state_29468[(8)]);
var inst_29444 = cljs.core.vec.call(null,inst_29428);
var state_29468__$1 = state_29468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29468__$1,(11),out,inst_29444);
} else {
if((state_val_29469 === (5))){
var inst_29436 = (state_29468[(10)]);
var inst_29432 = (state_29468[(9)]);
var inst_29429 = (state_29468[(7)]);
var inst_29436__$1 = f.call(null,inst_29432);
var inst_29437 = cljs.core._EQ_.call(null,inst_29436__$1,inst_29429);
var inst_29438 = cljs.core.keyword_identical_QMARK_.call(null,inst_29429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29439 = ((inst_29437) || (inst_29438));
var state_29468__$1 = (function (){var statearr_29482 = state_29468;
(statearr_29482[(10)] = inst_29436__$1);

return statearr_29482;
})();
if(cljs.core.truth_(inst_29439)){
var statearr_29483_29506 = state_29468__$1;
(statearr_29483_29506[(1)] = (8));

} else {
var statearr_29484_29507 = state_29468__$1;
(statearr_29484_29507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (14))){
var inst_29461 = (state_29468[(2)]);
var inst_29462 = cljs.core.async.close_BANG_.call(null,out);
var state_29468__$1 = (function (){var statearr_29486 = state_29468;
(statearr_29486[(13)] = inst_29461);

return statearr_29486;
})();
var statearr_29487_29508 = state_29468__$1;
(statearr_29487_29508[(2)] = inst_29462);

(statearr_29487_29508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (10))){
var inst_29451 = (state_29468[(2)]);
var state_29468__$1 = state_29468;
var statearr_29488_29509 = state_29468__$1;
(statearr_29488_29509[(2)] = inst_29451);

(statearr_29488_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29469 === (8))){
var inst_29436 = (state_29468[(10)]);
var inst_29432 = (state_29468[(9)]);
var inst_29428 = (state_29468[(8)]);
var inst_29441 = inst_29428.push(inst_29432);
var tmp29485 = inst_29428;
var inst_29428__$1 = tmp29485;
var inst_29429 = inst_29436;
var state_29468__$1 = (function (){var statearr_29489 = state_29468;
(statearr_29489[(14)] = inst_29441);

(statearr_29489[(7)] = inst_29429);

(statearr_29489[(8)] = inst_29428__$1);

return statearr_29489;
})();
var statearr_29490_29510 = state_29468__$1;
(statearr_29490_29510[(2)] = null);

(statearr_29490_29510[(1)] = (2));


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
});})(c__27592__auto___29496,out))
;
return ((function (switch__27502__auto__,c__27592__auto___29496,out){
return (function() {
var cljs$core$async$state_machine__27503__auto__ = null;
var cljs$core$async$state_machine__27503__auto____0 = (function (){
var statearr_29491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29491[(0)] = cljs$core$async$state_machine__27503__auto__);

(statearr_29491[(1)] = (1));

return statearr_29491;
});
var cljs$core$async$state_machine__27503__auto____1 = (function (state_29468){
while(true){
var ret_value__27504__auto__ = (function (){try{while(true){
var result__27505__auto__ = switch__27502__auto__.call(null,state_29468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27505__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27505__auto__;
}
break;
}
}catch (e29492){if((e29492 instanceof Object)){
var ex__27506__auto__ = e29492;
var statearr_29493_29511 = state_29468;
(statearr_29493_29511[(5)] = ex__27506__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29512 = state_29468;
state_29468 = G__29512;
continue;
} else {
return ret_value__27504__auto__;
}
break;
}
});
cljs$core$async$state_machine__27503__auto__ = function(state_29468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27503__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27503__auto____1.call(this,state_29468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27503__auto____0;
cljs$core$async$state_machine__27503__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27503__auto____1;
return cljs$core$async$state_machine__27503__auto__;
})()
;})(switch__27502__auto__,c__27592__auto___29496,out))
})();
var state__27594__auto__ = (function (){var statearr_29494 = f__27593__auto__.call(null);
(statearr_29494[(6)] = c__27592__auto___29496);

return statearr_29494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27594__auto__);
});})(c__27592__auto___29496,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1527748568824
