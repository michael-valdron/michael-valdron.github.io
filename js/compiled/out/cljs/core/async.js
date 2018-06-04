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
var G__34473 = arguments.length;
switch (G__34473) {
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
if(typeof cljs.core.async.t_cljs$core$async34474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34474 = (function (f,blockable,meta34475){
this.f = f;
this.blockable = blockable;
this.meta34475 = meta34475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34476,meta34475__$1){
var self__ = this;
var _34476__$1 = this;
return (new cljs.core.async.t_cljs$core$async34474(self__.f,self__.blockable,meta34475__$1));
});

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34476){
var self__ = this;
var _34476__$1 = this;
return self__.meta34475;
});

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34475","meta34475",108229954,null)], null);
});

cljs.core.async.t_cljs$core$async34474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34474";

cljs.core.async.t_cljs$core$async34474.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34474.
 */
cljs.core.async.__GT_t_cljs$core$async34474 = (function cljs$core$async$__GT_t_cljs$core$async34474(f__$1,blockable__$1,meta34475){
return (new cljs.core.async.t_cljs$core$async34474(f__$1,blockable__$1,meta34475));
});

}

return (new cljs.core.async.t_cljs$core$async34474(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34480 = arguments.length;
switch (G__34480) {
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
var G__34483 = arguments.length;
switch (G__34483) {
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
var G__34486 = arguments.length;
switch (G__34486) {
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
var val_34488 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34488);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34488,ret){
return (function (){
return fn1.call(null,val_34488);
});})(val_34488,ret))
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
var G__34490 = arguments.length;
switch (G__34490) {
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
var n__4376__auto___34492 = n;
var x_34493 = (0);
while(true){
if((x_34493 < n__4376__auto___34492)){
(a[x_34493] = (0));

var G__34494 = (x_34493 + (1));
x_34493 = G__34494;
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

var G__34495 = (i + (1));
i = G__34495;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34496 = (function (flag,meta34497){
this.flag = flag;
this.meta34497 = meta34497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34498,meta34497__$1){
var self__ = this;
var _34498__$1 = this;
return (new cljs.core.async.t_cljs$core$async34496(self__.flag,meta34497__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34498){
var self__ = this;
var _34498__$1 = this;
return self__.meta34497;
});})(flag))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34496.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34497","meta34497",-398361949,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34496";

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34496");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34496.
 */
cljs.core.async.__GT_t_cljs$core$async34496 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34496(flag__$1,meta34497){
return (new cljs.core.async.t_cljs$core$async34496(flag__$1,meta34497));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34496(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34499 = (function (flag,cb,meta34500){
this.flag = flag;
this.cb = cb;
this.meta34500 = meta34500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34501,meta34500__$1){
var self__ = this;
var _34501__$1 = this;
return (new cljs.core.async.t_cljs$core$async34499(self__.flag,self__.cb,meta34500__$1));
});

cljs.core.async.t_cljs$core$async34499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34501){
var self__ = this;
var _34501__$1 = this;
return self__.meta34500;
});

cljs.core.async.t_cljs$core$async34499.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34500","meta34500",627910391,null)], null);
});

cljs.core.async.t_cljs$core$async34499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34499";

cljs.core.async.t_cljs$core$async34499.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async34499");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34499.
 */
cljs.core.async.__GT_t_cljs$core$async34499 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34499(flag__$1,cb__$1,meta34500){
return (new cljs.core.async.t_cljs$core$async34499(flag__$1,cb__$1,meta34500));
});

}

return (new cljs.core.async.t_cljs$core$async34499(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34502_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34502_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34503_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34503_SHARP_,port], null));
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
var G__34504 = (i + (1));
i = G__34504;
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
var len__4499__auto___34510 = arguments.length;
var i__4500__auto___34511 = (0);
while(true){
if((i__4500__auto___34511 < len__4499__auto___34510)){
args__4502__auto__.push((arguments[i__4500__auto___34511]));

var G__34512 = (i__4500__auto___34511 + (1));
i__4500__auto___34511 = G__34512;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34507){
var map__34508 = p__34507;
var map__34508__$1 = ((((!((map__34508 == null)))?(((((map__34508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34508):map__34508);
var opts = map__34508__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34505){
var G__34506 = cljs.core.first.call(null,seq34505);
var seq34505__$1 = cljs.core.next.call(null,seq34505);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34506,seq34505__$1);
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
var G__34514 = arguments.length;
switch (G__34514) {
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
var c__32549__auto___34560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___34560){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___34560){
return (function (state_34538){
var state_val_34539 = (state_34538[(1)]);
if((state_val_34539 === (7))){
var inst_34534 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34540_34561 = state_34538__$1;
(statearr_34540_34561[(2)] = inst_34534);

(statearr_34540_34561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (1))){
var state_34538__$1 = state_34538;
var statearr_34541_34562 = state_34538__$1;
(statearr_34541_34562[(2)] = null);

(statearr_34541_34562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (4))){
var inst_34517 = (state_34538[(7)]);
var inst_34517__$1 = (state_34538[(2)]);
var inst_34518 = (inst_34517__$1 == null);
var state_34538__$1 = (function (){var statearr_34542 = state_34538;
(statearr_34542[(7)] = inst_34517__$1);

return statearr_34542;
})();
if(cljs.core.truth_(inst_34518)){
var statearr_34543_34563 = state_34538__$1;
(statearr_34543_34563[(1)] = (5));

} else {
var statearr_34544_34564 = state_34538__$1;
(statearr_34544_34564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (13))){
var state_34538__$1 = state_34538;
var statearr_34545_34565 = state_34538__$1;
(statearr_34545_34565[(2)] = null);

(statearr_34545_34565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (6))){
var inst_34517 = (state_34538[(7)]);
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34538__$1,(11),to,inst_34517);
} else {
if((state_val_34539 === (3))){
var inst_34536 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34538__$1,inst_34536);
} else {
if((state_val_34539 === (12))){
var state_34538__$1 = state_34538;
var statearr_34546_34566 = state_34538__$1;
(statearr_34546_34566[(2)] = null);

(statearr_34546_34566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (2))){
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34538__$1,(4),from);
} else {
if((state_val_34539 === (11))){
var inst_34527 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
if(cljs.core.truth_(inst_34527)){
var statearr_34547_34567 = state_34538__$1;
(statearr_34547_34567[(1)] = (12));

} else {
var statearr_34548_34568 = state_34538__$1;
(statearr_34548_34568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (9))){
var state_34538__$1 = state_34538;
var statearr_34549_34569 = state_34538__$1;
(statearr_34549_34569[(2)] = null);

(statearr_34549_34569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (5))){
var state_34538__$1 = state_34538;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34550_34570 = state_34538__$1;
(statearr_34550_34570[(1)] = (8));

} else {
var statearr_34551_34571 = state_34538__$1;
(statearr_34551_34571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (14))){
var inst_34532 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34552_34572 = state_34538__$1;
(statearr_34552_34572[(2)] = inst_34532);

(statearr_34552_34572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (10))){
var inst_34524 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34553_34573 = state_34538__$1;
(statearr_34553_34573[(2)] = inst_34524);

(statearr_34553_34573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (8))){
var inst_34521 = cljs.core.async.close_BANG_.call(null,to);
var state_34538__$1 = state_34538;
var statearr_34554_34574 = state_34538__$1;
(statearr_34554_34574[(2)] = inst_34521);

(statearr_34554_34574[(1)] = (10));


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
});})(c__32549__auto___34560))
;
return ((function (switch__32392__auto__,c__32549__auto___34560){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_34555 = [null,null,null,null,null,null,null,null];
(statearr_34555[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_34555[(1)] = (1));

return statearr_34555;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_34538){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34556){if((e34556 instanceof Object)){
var ex__32396__auto__ = e34556;
var statearr_34557_34575 = state_34538;
(statearr_34557_34575[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34576 = state_34538;
state_34538 = G__34576;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_34538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_34538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___34560))
})();
var state__32551__auto__ = (function (){var statearr_34558 = f__32550__auto__.call(null);
(statearr_34558[(6)] = c__32549__auto___34560);

return statearr_34558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___34560))
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
return (function (p__34577){
var vec__34578 = p__34577;
var v = cljs.core.nth.call(null,vec__34578,(0),null);
var p = cljs.core.nth.call(null,vec__34578,(1),null);
var job = vec__34578;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32549__auto___34749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___34749,res,vec__34578,v,p,job,jobs,results){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___34749,res,vec__34578,v,p,job,jobs,results){
return (function (state_34585){
var state_val_34586 = (state_34585[(1)]);
if((state_val_34586 === (1))){
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34585__$1,(2),res,v);
} else {
if((state_val_34586 === (2))){
var inst_34582 = (state_34585[(2)]);
var inst_34583 = cljs.core.async.close_BANG_.call(null,res);
var state_34585__$1 = (function (){var statearr_34587 = state_34585;
(statearr_34587[(7)] = inst_34582);

return statearr_34587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34585__$1,inst_34583);
} else {
return null;
}
}
});})(c__32549__auto___34749,res,vec__34578,v,p,job,jobs,results))
;
return ((function (switch__32392__auto__,c__32549__auto___34749,res,vec__34578,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0 = (function (){
var statearr_34588 = [null,null,null,null,null,null,null,null];
(statearr_34588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__);

(statearr_34588[(1)] = (1));

return statearr_34588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1 = (function (state_34585){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34589){if((e34589 instanceof Object)){
var ex__32396__auto__ = e34589;
var statearr_34590_34750 = state_34585;
(statearr_34590_34750[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34751 = state_34585;
state_34585 = G__34751;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = function(state_34585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1.call(this,state_34585);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___34749,res,vec__34578,v,p,job,jobs,results))
})();
var state__32551__auto__ = (function (){var statearr_34591 = f__32550__auto__.call(null);
(statearr_34591[(6)] = c__32549__auto___34749);

return statearr_34591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___34749,res,vec__34578,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34592){
var vec__34593 = p__34592;
var v = cljs.core.nth.call(null,vec__34593,(0),null);
var p = cljs.core.nth.call(null,vec__34593,(1),null);
var job = vec__34593;
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
var n__4376__auto___34752 = n;
var __34753 = (0);
while(true){
if((__34753 < n__4376__auto___34752)){
var G__34596_34754 = type;
var G__34596_34755__$1 = (((G__34596_34754 instanceof cljs.core.Keyword))?G__34596_34754.fqn:null);
switch (G__34596_34755__$1) {
case "compute":
var c__32549__auto___34757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34753,c__32549__auto___34757,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (__34753,c__32549__auto___34757,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async){
return (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34611_34758 = state_34609__$1;
(statearr_34611_34758[(2)] = null);

(statearr_34611_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (2))){
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34609__$1,(4),jobs);
} else {
if((state_val_34610 === (3))){
var inst_34607 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34609__$1,inst_34607);
} else {
if((state_val_34610 === (4))){
var inst_34599 = (state_34609[(2)]);
var inst_34600 = process.call(null,inst_34599);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34600)){
var statearr_34612_34759 = state_34609__$1;
(statearr_34612_34759[(1)] = (5));

} else {
var statearr_34613_34760 = state_34609__$1;
(statearr_34613_34760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
var statearr_34614_34761 = state_34609__$1;
(statearr_34614_34761[(2)] = null);

(statearr_34614_34761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var state_34609__$1 = state_34609;
var statearr_34615_34762 = state_34609__$1;
(statearr_34615_34762[(2)] = null);

(statearr_34615_34762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34616_34763 = state_34609__$1;
(statearr_34616_34763[(2)] = inst_34605);

(statearr_34616_34763[(1)] = (3));


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
});})(__34753,c__32549__auto___34757,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async))
;
return ((function (__34753,switch__32392__auto__,c__32549__auto___34757,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0 = (function (){
var statearr_34617 = [null,null,null,null,null,null,null];
(statearr_34617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__);

(statearr_34617[(1)] = (1));

return statearr_34617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1 = (function (state_34609){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34618){if((e34618 instanceof Object)){
var ex__32396__auto__ = e34618;
var statearr_34619_34764 = state_34609;
(statearr_34619_34764[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34765 = state_34609;
state_34609 = G__34765;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = function(state_34609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1.call(this,state_34609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__;
})()
;})(__34753,switch__32392__auto__,c__32549__auto___34757,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async))
})();
var state__32551__auto__ = (function (){var statearr_34620 = f__32550__auto__.call(null);
(statearr_34620[(6)] = c__32549__auto___34757);

return statearr_34620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(__34753,c__32549__auto___34757,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async))
);


break;
case "async":
var c__32549__auto___34766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34753,c__32549__auto___34766,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (__34753,c__32549__auto___34766,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async){
return (function (state_34633){
var state_val_34634 = (state_34633[(1)]);
if((state_val_34634 === (1))){
var state_34633__$1 = state_34633;
var statearr_34635_34767 = state_34633__$1;
(statearr_34635_34767[(2)] = null);

(statearr_34635_34767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (2))){
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,(4),jobs);
} else {
if((state_val_34634 === (3))){
var inst_34631 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34633__$1,inst_34631);
} else {
if((state_val_34634 === (4))){
var inst_34623 = (state_34633[(2)]);
var inst_34624 = async.call(null,inst_34623);
var state_34633__$1 = state_34633;
if(cljs.core.truth_(inst_34624)){
var statearr_34636_34768 = state_34633__$1;
(statearr_34636_34768[(1)] = (5));

} else {
var statearr_34637_34769 = state_34633__$1;
(statearr_34637_34769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (5))){
var state_34633__$1 = state_34633;
var statearr_34638_34770 = state_34633__$1;
(statearr_34638_34770[(2)] = null);

(statearr_34638_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (6))){
var state_34633__$1 = state_34633;
var statearr_34639_34771 = state_34633__$1;
(statearr_34639_34771[(2)] = null);

(statearr_34639_34771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34634 === (7))){
var inst_34629 = (state_34633[(2)]);
var state_34633__$1 = state_34633;
var statearr_34640_34772 = state_34633__$1;
(statearr_34640_34772[(2)] = inst_34629);

(statearr_34640_34772[(1)] = (3));


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
});})(__34753,c__32549__auto___34766,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async))
;
return ((function (__34753,switch__32392__auto__,c__32549__auto___34766,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0 = (function (){
var statearr_34641 = [null,null,null,null,null,null,null];
(statearr_34641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1 = (function (state_34633){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34642){if((e34642 instanceof Object)){
var ex__32396__auto__ = e34642;
var statearr_34643_34773 = state_34633;
(statearr_34643_34773[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34774 = state_34633;
state_34633 = G__34774;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = function(state_34633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1.call(this,state_34633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__;
})()
;})(__34753,switch__32392__auto__,c__32549__auto___34766,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async))
})();
var state__32551__auto__ = (function (){var statearr_34644 = f__32550__auto__.call(null);
(statearr_34644[(6)] = c__32549__auto___34766);

return statearr_34644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(__34753,c__32549__auto___34766,G__34596_34754,G__34596_34755__$1,n__4376__auto___34752,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34596_34755__$1)].join('')));

}

var G__34775 = (__34753 + (1));
__34753 = G__34775;
continue;
} else {
}
break;
}

var c__32549__auto___34776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___34776,jobs,results,process,async){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___34776,jobs,results,process,async){
return (function (state_34666){
var state_val_34667 = (state_34666[(1)]);
if((state_val_34667 === (1))){
var state_34666__$1 = state_34666;
var statearr_34668_34777 = state_34666__$1;
(statearr_34668_34777[(2)] = null);

(statearr_34668_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (2))){
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34666__$1,(4),from);
} else {
if((state_val_34667 === (3))){
var inst_34664 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34666__$1,inst_34664);
} else {
if((state_val_34667 === (4))){
var inst_34647 = (state_34666[(7)]);
var inst_34647__$1 = (state_34666[(2)]);
var inst_34648 = (inst_34647__$1 == null);
var state_34666__$1 = (function (){var statearr_34669 = state_34666;
(statearr_34669[(7)] = inst_34647__$1);

return statearr_34669;
})();
if(cljs.core.truth_(inst_34648)){
var statearr_34670_34778 = state_34666__$1;
(statearr_34670_34778[(1)] = (5));

} else {
var statearr_34671_34779 = state_34666__$1;
(statearr_34671_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (5))){
var inst_34650 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34666__$1 = state_34666;
var statearr_34672_34780 = state_34666__$1;
(statearr_34672_34780[(2)] = inst_34650);

(statearr_34672_34780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (6))){
var inst_34647 = (state_34666[(7)]);
var inst_34652 = (state_34666[(8)]);
var inst_34652__$1 = cljs.core.async.chan.call(null,(1));
var inst_34653 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34654 = [inst_34647,inst_34652__$1];
var inst_34655 = (new cljs.core.PersistentVector(null,2,(5),inst_34653,inst_34654,null));
var state_34666__$1 = (function (){var statearr_34673 = state_34666;
(statearr_34673[(8)] = inst_34652__$1);

return statearr_34673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34666__$1,(8),jobs,inst_34655);
} else {
if((state_val_34667 === (7))){
var inst_34662 = (state_34666[(2)]);
var state_34666__$1 = state_34666;
var statearr_34674_34781 = state_34666__$1;
(statearr_34674_34781[(2)] = inst_34662);

(statearr_34674_34781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34667 === (8))){
var inst_34652 = (state_34666[(8)]);
var inst_34657 = (state_34666[(2)]);
var state_34666__$1 = (function (){var statearr_34675 = state_34666;
(statearr_34675[(9)] = inst_34657);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34666__$1,(9),results,inst_34652);
} else {
if((state_val_34667 === (9))){
var inst_34659 = (state_34666[(2)]);
var state_34666__$1 = (function (){var statearr_34676 = state_34666;
(statearr_34676[(10)] = inst_34659);

return statearr_34676;
})();
var statearr_34677_34782 = state_34666__$1;
(statearr_34677_34782[(2)] = null);

(statearr_34677_34782[(1)] = (2));


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
});})(c__32549__auto___34776,jobs,results,process,async))
;
return ((function (switch__32392__auto__,c__32549__auto___34776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0 = (function (){
var statearr_34678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__);

(statearr_34678[(1)] = (1));

return statearr_34678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1 = (function (state_34666){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34679){if((e34679 instanceof Object)){
var ex__32396__auto__ = e34679;
var statearr_34680_34783 = state_34666;
(statearr_34680_34783[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34784 = state_34666;
state_34666 = G__34784;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = function(state_34666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1.call(this,state_34666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___34776,jobs,results,process,async))
})();
var state__32551__auto__ = (function (){var statearr_34681 = f__32550__auto__.call(null);
(statearr_34681[(6)] = c__32549__auto___34776);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___34776,jobs,results,process,async))
);


var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__,jobs,results,process,async){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__,jobs,results,process,async){
return (function (state_34719){
var state_val_34720 = (state_34719[(1)]);
if((state_val_34720 === (7))){
var inst_34715 = (state_34719[(2)]);
var state_34719__$1 = state_34719;
var statearr_34721_34785 = state_34719__$1;
(statearr_34721_34785[(2)] = inst_34715);

(statearr_34721_34785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (20))){
var state_34719__$1 = state_34719;
var statearr_34722_34786 = state_34719__$1;
(statearr_34722_34786[(2)] = null);

(statearr_34722_34786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (1))){
var state_34719__$1 = state_34719;
var statearr_34723_34787 = state_34719__$1;
(statearr_34723_34787[(2)] = null);

(statearr_34723_34787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (4))){
var inst_34684 = (state_34719[(7)]);
var inst_34684__$1 = (state_34719[(2)]);
var inst_34685 = (inst_34684__$1 == null);
var state_34719__$1 = (function (){var statearr_34724 = state_34719;
(statearr_34724[(7)] = inst_34684__$1);

return statearr_34724;
})();
if(cljs.core.truth_(inst_34685)){
var statearr_34725_34788 = state_34719__$1;
(statearr_34725_34788[(1)] = (5));

} else {
var statearr_34726_34789 = state_34719__$1;
(statearr_34726_34789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (15))){
var inst_34697 = (state_34719[(8)]);
var state_34719__$1 = state_34719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34719__$1,(18),to,inst_34697);
} else {
if((state_val_34720 === (21))){
var inst_34710 = (state_34719[(2)]);
var state_34719__$1 = state_34719;
var statearr_34727_34790 = state_34719__$1;
(statearr_34727_34790[(2)] = inst_34710);

(statearr_34727_34790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (13))){
var inst_34712 = (state_34719[(2)]);
var state_34719__$1 = (function (){var statearr_34728 = state_34719;
(statearr_34728[(9)] = inst_34712);

return statearr_34728;
})();
var statearr_34729_34791 = state_34719__$1;
(statearr_34729_34791[(2)] = null);

(statearr_34729_34791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (6))){
var inst_34684 = (state_34719[(7)]);
var state_34719__$1 = state_34719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34719__$1,(11),inst_34684);
} else {
if((state_val_34720 === (17))){
var inst_34705 = (state_34719[(2)]);
var state_34719__$1 = state_34719;
if(cljs.core.truth_(inst_34705)){
var statearr_34730_34792 = state_34719__$1;
(statearr_34730_34792[(1)] = (19));

} else {
var statearr_34731_34793 = state_34719__$1;
(statearr_34731_34793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (3))){
var inst_34717 = (state_34719[(2)]);
var state_34719__$1 = state_34719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34719__$1,inst_34717);
} else {
if((state_val_34720 === (12))){
var inst_34694 = (state_34719[(10)]);
var state_34719__$1 = state_34719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34719__$1,(14),inst_34694);
} else {
if((state_val_34720 === (2))){
var state_34719__$1 = state_34719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34719__$1,(4),results);
} else {
if((state_val_34720 === (19))){
var state_34719__$1 = state_34719;
var statearr_34732_34794 = state_34719__$1;
(statearr_34732_34794[(2)] = null);

(statearr_34732_34794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (11))){
var inst_34694 = (state_34719[(2)]);
var state_34719__$1 = (function (){var statearr_34733 = state_34719;
(statearr_34733[(10)] = inst_34694);

return statearr_34733;
})();
var statearr_34734_34795 = state_34719__$1;
(statearr_34734_34795[(2)] = null);

(statearr_34734_34795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (9))){
var state_34719__$1 = state_34719;
var statearr_34735_34796 = state_34719__$1;
(statearr_34735_34796[(2)] = null);

(statearr_34735_34796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (5))){
var state_34719__$1 = state_34719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34736_34797 = state_34719__$1;
(statearr_34736_34797[(1)] = (8));

} else {
var statearr_34737_34798 = state_34719__$1;
(statearr_34737_34798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (14))){
var inst_34699 = (state_34719[(11)]);
var inst_34697 = (state_34719[(8)]);
var inst_34697__$1 = (state_34719[(2)]);
var inst_34698 = (inst_34697__$1 == null);
var inst_34699__$1 = cljs.core.not.call(null,inst_34698);
var state_34719__$1 = (function (){var statearr_34738 = state_34719;
(statearr_34738[(11)] = inst_34699__$1);

(statearr_34738[(8)] = inst_34697__$1);

return statearr_34738;
})();
if(inst_34699__$1){
var statearr_34739_34799 = state_34719__$1;
(statearr_34739_34799[(1)] = (15));

} else {
var statearr_34740_34800 = state_34719__$1;
(statearr_34740_34800[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (16))){
var inst_34699 = (state_34719[(11)]);
var state_34719__$1 = state_34719;
var statearr_34741_34801 = state_34719__$1;
(statearr_34741_34801[(2)] = inst_34699);

(statearr_34741_34801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (10))){
var inst_34691 = (state_34719[(2)]);
var state_34719__$1 = state_34719;
var statearr_34742_34802 = state_34719__$1;
(statearr_34742_34802[(2)] = inst_34691);

(statearr_34742_34802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (18))){
var inst_34702 = (state_34719[(2)]);
var state_34719__$1 = state_34719;
var statearr_34743_34803 = state_34719__$1;
(statearr_34743_34803[(2)] = inst_34702);

(statearr_34743_34803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34720 === (8))){
var inst_34688 = cljs.core.async.close_BANG_.call(null,to);
var state_34719__$1 = state_34719;
var statearr_34744_34804 = state_34719__$1;
(statearr_34744_34804[(2)] = inst_34688);

(statearr_34744_34804[(1)] = (10));


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
});})(c__32549__auto__,jobs,results,process,async))
;
return ((function (switch__32392__auto__,c__32549__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0 = (function (){
var statearr_34745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__);

(statearr_34745[(1)] = (1));

return statearr_34745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1 = (function (state_34719){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34746){if((e34746 instanceof Object)){
var ex__32396__auto__ = e34746;
var statearr_34747_34805 = state_34719;
(statearr_34747_34805[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34806 = state_34719;
state_34719 = G__34806;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__ = function(state_34719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1.call(this,state_34719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__,jobs,results,process,async))
})();
var state__32551__auto__ = (function (){var statearr_34748 = f__32550__auto__.call(null);
(statearr_34748[(6)] = c__32549__auto__);

return statearr_34748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__,jobs,results,process,async))
);

return c__32549__auto__;
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
var G__34808 = arguments.length;
switch (G__34808) {
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
var G__34811 = arguments.length;
switch (G__34811) {
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
var G__34814 = arguments.length;
switch (G__34814) {
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
var c__32549__auto___34863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___34863,tc,fc){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___34863,tc,fc){
return (function (state_34840){
var state_val_34841 = (state_34840[(1)]);
if((state_val_34841 === (7))){
var inst_34836 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34842_34864 = state_34840__$1;
(statearr_34842_34864[(2)] = inst_34836);

(statearr_34842_34864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (1))){
var state_34840__$1 = state_34840;
var statearr_34843_34865 = state_34840__$1;
(statearr_34843_34865[(2)] = null);

(statearr_34843_34865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (4))){
var inst_34817 = (state_34840[(7)]);
var inst_34817__$1 = (state_34840[(2)]);
var inst_34818 = (inst_34817__$1 == null);
var state_34840__$1 = (function (){var statearr_34844 = state_34840;
(statearr_34844[(7)] = inst_34817__$1);

return statearr_34844;
})();
if(cljs.core.truth_(inst_34818)){
var statearr_34845_34866 = state_34840__$1;
(statearr_34845_34866[(1)] = (5));

} else {
var statearr_34846_34867 = state_34840__$1;
(statearr_34846_34867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (13))){
var state_34840__$1 = state_34840;
var statearr_34847_34868 = state_34840__$1;
(statearr_34847_34868[(2)] = null);

(statearr_34847_34868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (6))){
var inst_34817 = (state_34840[(7)]);
var inst_34823 = p.call(null,inst_34817);
var state_34840__$1 = state_34840;
if(cljs.core.truth_(inst_34823)){
var statearr_34848_34869 = state_34840__$1;
(statearr_34848_34869[(1)] = (9));

} else {
var statearr_34849_34870 = state_34840__$1;
(statearr_34849_34870[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (3))){
var inst_34838 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34840__$1,inst_34838);
} else {
if((state_val_34841 === (12))){
var state_34840__$1 = state_34840;
var statearr_34850_34871 = state_34840__$1;
(statearr_34850_34871[(2)] = null);

(statearr_34850_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (2))){
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34840__$1,(4),ch);
} else {
if((state_val_34841 === (11))){
var inst_34817 = (state_34840[(7)]);
var inst_34827 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34840__$1,(8),inst_34827,inst_34817);
} else {
if((state_val_34841 === (9))){
var state_34840__$1 = state_34840;
var statearr_34851_34872 = state_34840__$1;
(statearr_34851_34872[(2)] = tc);

(statearr_34851_34872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (5))){
var inst_34820 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34821 = cljs.core.async.close_BANG_.call(null,fc);
var state_34840__$1 = (function (){var statearr_34852 = state_34840;
(statearr_34852[(8)] = inst_34820);

return statearr_34852;
})();
var statearr_34853_34873 = state_34840__$1;
(statearr_34853_34873[(2)] = inst_34821);

(statearr_34853_34873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (14))){
var inst_34834 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34854_34874 = state_34840__$1;
(statearr_34854_34874[(2)] = inst_34834);

(statearr_34854_34874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (10))){
var state_34840__$1 = state_34840;
var statearr_34855_34875 = state_34840__$1;
(statearr_34855_34875[(2)] = fc);

(statearr_34855_34875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (8))){
var inst_34829 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
if(cljs.core.truth_(inst_34829)){
var statearr_34856_34876 = state_34840__$1;
(statearr_34856_34876[(1)] = (12));

} else {
var statearr_34857_34877 = state_34840__$1;
(statearr_34857_34877[(1)] = (13));

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
});})(c__32549__auto___34863,tc,fc))
;
return ((function (switch__32392__auto__,c__32549__auto___34863,tc,fc){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_34858 = [null,null,null,null,null,null,null,null,null];
(statearr_34858[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_34858[(1)] = (1));

return statearr_34858;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_34840){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34859){if((e34859 instanceof Object)){
var ex__32396__auto__ = e34859;
var statearr_34860_34878 = state_34840;
(statearr_34860_34878[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34879 = state_34840;
state_34840 = G__34879;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_34840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_34840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___34863,tc,fc))
})();
var state__32551__auto__ = (function (){var statearr_34861 = f__32550__auto__.call(null);
(statearr_34861[(6)] = c__32549__auto___34863);

return statearr_34861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___34863,tc,fc))
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
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__){
return (function (state_34900){
var state_val_34901 = (state_34900[(1)]);
if((state_val_34901 === (7))){
var inst_34896 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
var statearr_34902_34920 = state_34900__$1;
(statearr_34902_34920[(2)] = inst_34896);

(statearr_34902_34920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (1))){
var inst_34880 = init;
var state_34900__$1 = (function (){var statearr_34903 = state_34900;
(statearr_34903[(7)] = inst_34880);

return statearr_34903;
})();
var statearr_34904_34921 = state_34900__$1;
(statearr_34904_34921[(2)] = null);

(statearr_34904_34921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (4))){
var inst_34883 = (state_34900[(8)]);
var inst_34883__$1 = (state_34900[(2)]);
var inst_34884 = (inst_34883__$1 == null);
var state_34900__$1 = (function (){var statearr_34905 = state_34900;
(statearr_34905[(8)] = inst_34883__$1);

return statearr_34905;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34906_34922 = state_34900__$1;
(statearr_34906_34922[(1)] = (5));

} else {
var statearr_34907_34923 = state_34900__$1;
(statearr_34907_34923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (6))){
var inst_34883 = (state_34900[(8)]);
var inst_34880 = (state_34900[(7)]);
var inst_34887 = (state_34900[(9)]);
var inst_34887__$1 = f.call(null,inst_34880,inst_34883);
var inst_34888 = cljs.core.reduced_QMARK_.call(null,inst_34887__$1);
var state_34900__$1 = (function (){var statearr_34908 = state_34900;
(statearr_34908[(9)] = inst_34887__$1);

return statearr_34908;
})();
if(inst_34888){
var statearr_34909_34924 = state_34900__$1;
(statearr_34909_34924[(1)] = (8));

} else {
var statearr_34910_34925 = state_34900__$1;
(statearr_34910_34925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (3))){
var inst_34898 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34900__$1,inst_34898);
} else {
if((state_val_34901 === (2))){
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34900__$1,(4),ch);
} else {
if((state_val_34901 === (9))){
var inst_34887 = (state_34900[(9)]);
var inst_34880 = inst_34887;
var state_34900__$1 = (function (){var statearr_34911 = state_34900;
(statearr_34911[(7)] = inst_34880);

return statearr_34911;
})();
var statearr_34912_34926 = state_34900__$1;
(statearr_34912_34926[(2)] = null);

(statearr_34912_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (5))){
var inst_34880 = (state_34900[(7)]);
var state_34900__$1 = state_34900;
var statearr_34913_34927 = state_34900__$1;
(statearr_34913_34927[(2)] = inst_34880);

(statearr_34913_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (10))){
var inst_34894 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
var statearr_34914_34928 = state_34900__$1;
(statearr_34914_34928[(2)] = inst_34894);

(statearr_34914_34928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (8))){
var inst_34887 = (state_34900[(9)]);
var inst_34890 = cljs.core.deref.call(null,inst_34887);
var state_34900__$1 = state_34900;
var statearr_34915_34929 = state_34900__$1;
(statearr_34915_34929[(2)] = inst_34890);

(statearr_34915_34929[(1)] = (10));


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
});})(c__32549__auto__))
;
return ((function (switch__32392__auto__,c__32549__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32393__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32393__auto____0 = (function (){
var statearr_34916 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34916[(0)] = cljs$core$async$reduce_$_state_machine__32393__auto__);

(statearr_34916[(1)] = (1));

return statearr_34916;
});
var cljs$core$async$reduce_$_state_machine__32393__auto____1 = (function (state_34900){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34917){if((e34917 instanceof Object)){
var ex__32396__auto__ = e34917;
var statearr_34918_34930 = state_34900;
(statearr_34918_34930[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34931 = state_34900;
state_34900 = G__34931;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32393__auto__ = function(state_34900){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32393__auto____1.call(this,state_34900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32393__auto____0;
cljs$core$async$reduce_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32393__auto____1;
return cljs$core$async$reduce_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__))
})();
var state__32551__auto__ = (function (){var statearr_34919 = f__32550__auto__.call(null);
(statearr_34919[(6)] = c__32549__auto__);

return statearr_34919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__))
);

return c__32549__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__,f__$1){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__,f__$1){
return (function (state_34937){
var state_val_34938 = (state_34937[(1)]);
if((state_val_34938 === (1))){
var inst_34932 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34937__$1,(2),inst_34932);
} else {
if((state_val_34938 === (2))){
var inst_34934 = (state_34937[(2)]);
var inst_34935 = f__$1.call(null,inst_34934);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34937__$1,inst_34935);
} else {
return null;
}
}
});})(c__32549__auto__,f__$1))
;
return ((function (switch__32392__auto__,c__32549__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32393__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32393__auto____0 = (function (){
var statearr_34939 = [null,null,null,null,null,null,null];
(statearr_34939[(0)] = cljs$core$async$transduce_$_state_machine__32393__auto__);

(statearr_34939[(1)] = (1));

return statearr_34939;
});
var cljs$core$async$transduce_$_state_machine__32393__auto____1 = (function (state_34937){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34940){if((e34940 instanceof Object)){
var ex__32396__auto__ = e34940;
var statearr_34941_34943 = state_34937;
(statearr_34941_34943[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34944 = state_34937;
state_34937 = G__34944;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32393__auto__ = function(state_34937){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32393__auto____1.call(this,state_34937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32393__auto____0;
cljs$core$async$transduce_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32393__auto____1;
return cljs$core$async$transduce_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__,f__$1))
})();
var state__32551__auto__ = (function (){var statearr_34942 = f__32550__auto__.call(null);
(statearr_34942[(6)] = c__32549__auto__);

return statearr_34942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__,f__$1))
);

return c__32549__auto__;
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
var G__34946 = arguments.length;
switch (G__34946) {
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
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__){
return (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (7))){
var inst_34953 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34973_34994 = state_34971__$1;
(statearr_34973_34994[(2)] = inst_34953);

(statearr_34973_34994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (1))){
var inst_34947 = cljs.core.seq.call(null,coll);
var inst_34948 = inst_34947;
var state_34971__$1 = (function (){var statearr_34974 = state_34971;
(statearr_34974[(7)] = inst_34948);

return statearr_34974;
})();
var statearr_34975_34995 = state_34971__$1;
(statearr_34975_34995[(2)] = null);

(statearr_34975_34995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (4))){
var inst_34948 = (state_34971[(7)]);
var inst_34951 = cljs.core.first.call(null,inst_34948);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34971__$1,(7),ch,inst_34951);
} else {
if((state_val_34972 === (13))){
var inst_34965 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34976_34996 = state_34971__$1;
(statearr_34976_34996[(2)] = inst_34965);

(statearr_34976_34996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (6))){
var inst_34956 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34956)){
var statearr_34977_34997 = state_34971__$1;
(statearr_34977_34997[(1)] = (8));

} else {
var statearr_34978_34998 = state_34971__$1;
(statearr_34978_34998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (3))){
var inst_34969 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34971__$1,inst_34969);
} else {
if((state_val_34972 === (12))){
var state_34971__$1 = state_34971;
var statearr_34979_34999 = state_34971__$1;
(statearr_34979_34999[(2)] = null);

(statearr_34979_34999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (2))){
var inst_34948 = (state_34971[(7)]);
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34948)){
var statearr_34980_35000 = state_34971__$1;
(statearr_34980_35000[(1)] = (4));

} else {
var statearr_34981_35001 = state_34971__$1;
(statearr_34981_35001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (11))){
var inst_34962 = cljs.core.async.close_BANG_.call(null,ch);
var state_34971__$1 = state_34971;
var statearr_34982_35002 = state_34971__$1;
(statearr_34982_35002[(2)] = inst_34962);

(statearr_34982_35002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (9))){
var state_34971__$1 = state_34971;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34983_35003 = state_34971__$1;
(statearr_34983_35003[(1)] = (11));

} else {
var statearr_34984_35004 = state_34971__$1;
(statearr_34984_35004[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (5))){
var inst_34948 = (state_34971[(7)]);
var state_34971__$1 = state_34971;
var statearr_34985_35005 = state_34971__$1;
(statearr_34985_35005[(2)] = inst_34948);

(statearr_34985_35005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (10))){
var inst_34967 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34986_35006 = state_34971__$1;
(statearr_34986_35006[(2)] = inst_34967);

(statearr_34986_35006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (8))){
var inst_34948 = (state_34971[(7)]);
var inst_34958 = cljs.core.next.call(null,inst_34948);
var inst_34948__$1 = inst_34958;
var state_34971__$1 = (function (){var statearr_34987 = state_34971;
(statearr_34987[(7)] = inst_34948__$1);

return statearr_34987;
})();
var statearr_34988_35007 = state_34971__$1;
(statearr_34988_35007[(2)] = null);

(statearr_34988_35007[(1)] = (2));


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
});})(c__32549__auto__))
;
return ((function (switch__32392__auto__,c__32549__auto__){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_34989 = [null,null,null,null,null,null,null,null];
(statearr_34989[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_34989[(1)] = (1));

return statearr_34989;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_34971){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_34971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e34990){if((e34990 instanceof Object)){
var ex__32396__auto__ = e34990;
var statearr_34991_35008 = state_34971;
(statearr_34991_35008[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35009 = state_34971;
state_34971 = G__35009;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__))
})();
var state__32551__auto__ = (function (){var statearr_34992 = f__32550__auto__.call(null);
(statearr_34992[(6)] = c__32549__auto__);

return statearr_34992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__))
);

return c__32549__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35010 = (function (ch,cs,meta35011){
this.ch = ch;
this.cs = cs;
this.meta35011 = meta35011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35012,meta35011__$1){
var self__ = this;
var _35012__$1 = this;
return (new cljs.core.async.t_cljs$core$async35010(self__.ch,self__.cs,meta35011__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35012){
var self__ = this;
var _35012__$1 = this;
return self__.meta35011;
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35011","meta35011",969699168,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35010";

cljs.core.async.t_cljs$core$async35010.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35010");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35010.
 */
cljs.core.async.__GT_t_cljs$core$async35010 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35010(ch__$1,cs__$1,meta35011){
return (new cljs.core.async.t_cljs$core$async35010(ch__$1,cs__$1,meta35011));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35010(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32549__auto___35232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35232,cs,m,dchan,dctr,done){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35232,cs,m,dchan,dctr,done){
return (function (state_35147){
var state_val_35148 = (state_35147[(1)]);
if((state_val_35148 === (7))){
var inst_35143 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35149_35233 = state_35147__$1;
(statearr_35149_35233[(2)] = inst_35143);

(statearr_35149_35233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (20))){
var inst_35046 = (state_35147[(7)]);
var inst_35058 = cljs.core.first.call(null,inst_35046);
var inst_35059 = cljs.core.nth.call(null,inst_35058,(0),null);
var inst_35060 = cljs.core.nth.call(null,inst_35058,(1),null);
var state_35147__$1 = (function (){var statearr_35150 = state_35147;
(statearr_35150[(8)] = inst_35059);

return statearr_35150;
})();
if(cljs.core.truth_(inst_35060)){
var statearr_35151_35234 = state_35147__$1;
(statearr_35151_35234[(1)] = (22));

} else {
var statearr_35152_35235 = state_35147__$1;
(statearr_35152_35235[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (27))){
var inst_35015 = (state_35147[(9)]);
var inst_35095 = (state_35147[(10)]);
var inst_35090 = (state_35147[(11)]);
var inst_35088 = (state_35147[(12)]);
var inst_35095__$1 = cljs.core._nth.call(null,inst_35088,inst_35090);
var inst_35096 = cljs.core.async.put_BANG_.call(null,inst_35095__$1,inst_35015,done);
var state_35147__$1 = (function (){var statearr_35153 = state_35147;
(statearr_35153[(10)] = inst_35095__$1);

return statearr_35153;
})();
if(cljs.core.truth_(inst_35096)){
var statearr_35154_35236 = state_35147__$1;
(statearr_35154_35236[(1)] = (30));

} else {
var statearr_35155_35237 = state_35147__$1;
(statearr_35155_35237[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (1))){
var state_35147__$1 = state_35147;
var statearr_35156_35238 = state_35147__$1;
(statearr_35156_35238[(2)] = null);

(statearr_35156_35238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (24))){
var inst_35046 = (state_35147[(7)]);
var inst_35065 = (state_35147[(2)]);
var inst_35066 = cljs.core.next.call(null,inst_35046);
var inst_35024 = inst_35066;
var inst_35025 = null;
var inst_35026 = (0);
var inst_35027 = (0);
var state_35147__$1 = (function (){var statearr_35157 = state_35147;
(statearr_35157[(13)] = inst_35026);

(statearr_35157[(14)] = inst_35027);

(statearr_35157[(15)] = inst_35024);

(statearr_35157[(16)] = inst_35065);

(statearr_35157[(17)] = inst_35025);

return statearr_35157;
})();
var statearr_35158_35239 = state_35147__$1;
(statearr_35158_35239[(2)] = null);

(statearr_35158_35239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (39))){
var state_35147__$1 = state_35147;
var statearr_35162_35240 = state_35147__$1;
(statearr_35162_35240[(2)] = null);

(statearr_35162_35240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (4))){
var inst_35015 = (state_35147[(9)]);
var inst_35015__$1 = (state_35147[(2)]);
var inst_35016 = (inst_35015__$1 == null);
var state_35147__$1 = (function (){var statearr_35163 = state_35147;
(statearr_35163[(9)] = inst_35015__$1);

return statearr_35163;
})();
if(cljs.core.truth_(inst_35016)){
var statearr_35164_35241 = state_35147__$1;
(statearr_35164_35241[(1)] = (5));

} else {
var statearr_35165_35242 = state_35147__$1;
(statearr_35165_35242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (15))){
var inst_35026 = (state_35147[(13)]);
var inst_35027 = (state_35147[(14)]);
var inst_35024 = (state_35147[(15)]);
var inst_35025 = (state_35147[(17)]);
var inst_35042 = (state_35147[(2)]);
var inst_35043 = (inst_35027 + (1));
var tmp35159 = inst_35026;
var tmp35160 = inst_35024;
var tmp35161 = inst_35025;
var inst_35024__$1 = tmp35160;
var inst_35025__$1 = tmp35161;
var inst_35026__$1 = tmp35159;
var inst_35027__$1 = inst_35043;
var state_35147__$1 = (function (){var statearr_35166 = state_35147;
(statearr_35166[(13)] = inst_35026__$1);

(statearr_35166[(14)] = inst_35027__$1);

(statearr_35166[(18)] = inst_35042);

(statearr_35166[(15)] = inst_35024__$1);

(statearr_35166[(17)] = inst_35025__$1);

return statearr_35166;
})();
var statearr_35167_35243 = state_35147__$1;
(statearr_35167_35243[(2)] = null);

(statearr_35167_35243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (21))){
var inst_35069 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35171_35244 = state_35147__$1;
(statearr_35171_35244[(2)] = inst_35069);

(statearr_35171_35244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (31))){
var inst_35095 = (state_35147[(10)]);
var inst_35099 = done.call(null,null);
var inst_35100 = cljs.core.async.untap_STAR_.call(null,m,inst_35095);
var state_35147__$1 = (function (){var statearr_35172 = state_35147;
(statearr_35172[(19)] = inst_35099);

return statearr_35172;
})();
var statearr_35173_35245 = state_35147__$1;
(statearr_35173_35245[(2)] = inst_35100);

(statearr_35173_35245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (32))){
var inst_35090 = (state_35147[(11)]);
var inst_35088 = (state_35147[(12)]);
var inst_35089 = (state_35147[(20)]);
var inst_35087 = (state_35147[(21)]);
var inst_35102 = (state_35147[(2)]);
var inst_35103 = (inst_35090 + (1));
var tmp35168 = inst_35088;
var tmp35169 = inst_35089;
var tmp35170 = inst_35087;
var inst_35087__$1 = tmp35170;
var inst_35088__$1 = tmp35168;
var inst_35089__$1 = tmp35169;
var inst_35090__$1 = inst_35103;
var state_35147__$1 = (function (){var statearr_35174 = state_35147;
(statearr_35174[(22)] = inst_35102);

(statearr_35174[(11)] = inst_35090__$1);

(statearr_35174[(12)] = inst_35088__$1);

(statearr_35174[(20)] = inst_35089__$1);

(statearr_35174[(21)] = inst_35087__$1);

return statearr_35174;
})();
var statearr_35175_35246 = state_35147__$1;
(statearr_35175_35246[(2)] = null);

(statearr_35175_35246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (40))){
var inst_35115 = (state_35147[(23)]);
var inst_35119 = done.call(null,null);
var inst_35120 = cljs.core.async.untap_STAR_.call(null,m,inst_35115);
var state_35147__$1 = (function (){var statearr_35176 = state_35147;
(statearr_35176[(24)] = inst_35119);

return statearr_35176;
})();
var statearr_35177_35247 = state_35147__$1;
(statearr_35177_35247[(2)] = inst_35120);

(statearr_35177_35247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (33))){
var inst_35106 = (state_35147[(25)]);
var inst_35108 = cljs.core.chunked_seq_QMARK_.call(null,inst_35106);
var state_35147__$1 = state_35147;
if(inst_35108){
var statearr_35178_35248 = state_35147__$1;
(statearr_35178_35248[(1)] = (36));

} else {
var statearr_35179_35249 = state_35147__$1;
(statearr_35179_35249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (13))){
var inst_35036 = (state_35147[(26)]);
var inst_35039 = cljs.core.async.close_BANG_.call(null,inst_35036);
var state_35147__$1 = state_35147;
var statearr_35180_35250 = state_35147__$1;
(statearr_35180_35250[(2)] = inst_35039);

(statearr_35180_35250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (22))){
var inst_35059 = (state_35147[(8)]);
var inst_35062 = cljs.core.async.close_BANG_.call(null,inst_35059);
var state_35147__$1 = state_35147;
var statearr_35181_35251 = state_35147__$1;
(statearr_35181_35251[(2)] = inst_35062);

(statearr_35181_35251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (36))){
var inst_35106 = (state_35147[(25)]);
var inst_35110 = cljs.core.chunk_first.call(null,inst_35106);
var inst_35111 = cljs.core.chunk_rest.call(null,inst_35106);
var inst_35112 = cljs.core.count.call(null,inst_35110);
var inst_35087 = inst_35111;
var inst_35088 = inst_35110;
var inst_35089 = inst_35112;
var inst_35090 = (0);
var state_35147__$1 = (function (){var statearr_35182 = state_35147;
(statearr_35182[(11)] = inst_35090);

(statearr_35182[(12)] = inst_35088);

(statearr_35182[(20)] = inst_35089);

(statearr_35182[(21)] = inst_35087);

return statearr_35182;
})();
var statearr_35183_35252 = state_35147__$1;
(statearr_35183_35252[(2)] = null);

(statearr_35183_35252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (41))){
var inst_35106 = (state_35147[(25)]);
var inst_35122 = (state_35147[(2)]);
var inst_35123 = cljs.core.next.call(null,inst_35106);
var inst_35087 = inst_35123;
var inst_35088 = null;
var inst_35089 = (0);
var inst_35090 = (0);
var state_35147__$1 = (function (){var statearr_35184 = state_35147;
(statearr_35184[(27)] = inst_35122);

(statearr_35184[(11)] = inst_35090);

(statearr_35184[(12)] = inst_35088);

(statearr_35184[(20)] = inst_35089);

(statearr_35184[(21)] = inst_35087);

return statearr_35184;
})();
var statearr_35185_35253 = state_35147__$1;
(statearr_35185_35253[(2)] = null);

(statearr_35185_35253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (43))){
var state_35147__$1 = state_35147;
var statearr_35186_35254 = state_35147__$1;
(statearr_35186_35254[(2)] = null);

(statearr_35186_35254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (29))){
var inst_35131 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35187_35255 = state_35147__$1;
(statearr_35187_35255[(2)] = inst_35131);

(statearr_35187_35255[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (44))){
var inst_35140 = (state_35147[(2)]);
var state_35147__$1 = (function (){var statearr_35188 = state_35147;
(statearr_35188[(28)] = inst_35140);

return statearr_35188;
})();
var statearr_35189_35256 = state_35147__$1;
(statearr_35189_35256[(2)] = null);

(statearr_35189_35256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (6))){
var inst_35079 = (state_35147[(29)]);
var inst_35078 = cljs.core.deref.call(null,cs);
var inst_35079__$1 = cljs.core.keys.call(null,inst_35078);
var inst_35080 = cljs.core.count.call(null,inst_35079__$1);
var inst_35081 = cljs.core.reset_BANG_.call(null,dctr,inst_35080);
var inst_35086 = cljs.core.seq.call(null,inst_35079__$1);
var inst_35087 = inst_35086;
var inst_35088 = null;
var inst_35089 = (0);
var inst_35090 = (0);
var state_35147__$1 = (function (){var statearr_35190 = state_35147;
(statearr_35190[(11)] = inst_35090);

(statearr_35190[(29)] = inst_35079__$1);

(statearr_35190[(30)] = inst_35081);

(statearr_35190[(12)] = inst_35088);

(statearr_35190[(20)] = inst_35089);

(statearr_35190[(21)] = inst_35087);

return statearr_35190;
})();
var statearr_35191_35257 = state_35147__$1;
(statearr_35191_35257[(2)] = null);

(statearr_35191_35257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (28))){
var inst_35106 = (state_35147[(25)]);
var inst_35087 = (state_35147[(21)]);
var inst_35106__$1 = cljs.core.seq.call(null,inst_35087);
var state_35147__$1 = (function (){var statearr_35192 = state_35147;
(statearr_35192[(25)] = inst_35106__$1);

return statearr_35192;
})();
if(inst_35106__$1){
var statearr_35193_35258 = state_35147__$1;
(statearr_35193_35258[(1)] = (33));

} else {
var statearr_35194_35259 = state_35147__$1;
(statearr_35194_35259[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (25))){
var inst_35090 = (state_35147[(11)]);
var inst_35089 = (state_35147[(20)]);
var inst_35092 = (inst_35090 < inst_35089);
var inst_35093 = inst_35092;
var state_35147__$1 = state_35147;
if(cljs.core.truth_(inst_35093)){
var statearr_35195_35260 = state_35147__$1;
(statearr_35195_35260[(1)] = (27));

} else {
var statearr_35196_35261 = state_35147__$1;
(statearr_35196_35261[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (34))){
var state_35147__$1 = state_35147;
var statearr_35197_35262 = state_35147__$1;
(statearr_35197_35262[(2)] = null);

(statearr_35197_35262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (17))){
var state_35147__$1 = state_35147;
var statearr_35198_35263 = state_35147__$1;
(statearr_35198_35263[(2)] = null);

(statearr_35198_35263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (3))){
var inst_35145 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35147__$1,inst_35145);
} else {
if((state_val_35148 === (12))){
var inst_35074 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35199_35264 = state_35147__$1;
(statearr_35199_35264[(2)] = inst_35074);

(statearr_35199_35264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (2))){
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35147__$1,(4),ch);
} else {
if((state_val_35148 === (23))){
var state_35147__$1 = state_35147;
var statearr_35200_35265 = state_35147__$1;
(statearr_35200_35265[(2)] = null);

(statearr_35200_35265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (35))){
var inst_35129 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35201_35266 = state_35147__$1;
(statearr_35201_35266[(2)] = inst_35129);

(statearr_35201_35266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (19))){
var inst_35046 = (state_35147[(7)]);
var inst_35050 = cljs.core.chunk_first.call(null,inst_35046);
var inst_35051 = cljs.core.chunk_rest.call(null,inst_35046);
var inst_35052 = cljs.core.count.call(null,inst_35050);
var inst_35024 = inst_35051;
var inst_35025 = inst_35050;
var inst_35026 = inst_35052;
var inst_35027 = (0);
var state_35147__$1 = (function (){var statearr_35202 = state_35147;
(statearr_35202[(13)] = inst_35026);

(statearr_35202[(14)] = inst_35027);

(statearr_35202[(15)] = inst_35024);

(statearr_35202[(17)] = inst_35025);

return statearr_35202;
})();
var statearr_35203_35267 = state_35147__$1;
(statearr_35203_35267[(2)] = null);

(statearr_35203_35267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (11))){
var inst_35024 = (state_35147[(15)]);
var inst_35046 = (state_35147[(7)]);
var inst_35046__$1 = cljs.core.seq.call(null,inst_35024);
var state_35147__$1 = (function (){var statearr_35204 = state_35147;
(statearr_35204[(7)] = inst_35046__$1);

return statearr_35204;
})();
if(inst_35046__$1){
var statearr_35205_35268 = state_35147__$1;
(statearr_35205_35268[(1)] = (16));

} else {
var statearr_35206_35269 = state_35147__$1;
(statearr_35206_35269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (9))){
var inst_35076 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35207_35270 = state_35147__$1;
(statearr_35207_35270[(2)] = inst_35076);

(statearr_35207_35270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (5))){
var inst_35022 = cljs.core.deref.call(null,cs);
var inst_35023 = cljs.core.seq.call(null,inst_35022);
var inst_35024 = inst_35023;
var inst_35025 = null;
var inst_35026 = (0);
var inst_35027 = (0);
var state_35147__$1 = (function (){var statearr_35208 = state_35147;
(statearr_35208[(13)] = inst_35026);

(statearr_35208[(14)] = inst_35027);

(statearr_35208[(15)] = inst_35024);

(statearr_35208[(17)] = inst_35025);

return statearr_35208;
})();
var statearr_35209_35271 = state_35147__$1;
(statearr_35209_35271[(2)] = null);

(statearr_35209_35271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (14))){
var state_35147__$1 = state_35147;
var statearr_35210_35272 = state_35147__$1;
(statearr_35210_35272[(2)] = null);

(statearr_35210_35272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (45))){
var inst_35137 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35211_35273 = state_35147__$1;
(statearr_35211_35273[(2)] = inst_35137);

(statearr_35211_35273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (26))){
var inst_35079 = (state_35147[(29)]);
var inst_35133 = (state_35147[(2)]);
var inst_35134 = cljs.core.seq.call(null,inst_35079);
var state_35147__$1 = (function (){var statearr_35212 = state_35147;
(statearr_35212[(31)] = inst_35133);

return statearr_35212;
})();
if(inst_35134){
var statearr_35213_35274 = state_35147__$1;
(statearr_35213_35274[(1)] = (42));

} else {
var statearr_35214_35275 = state_35147__$1;
(statearr_35214_35275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (16))){
var inst_35046 = (state_35147[(7)]);
var inst_35048 = cljs.core.chunked_seq_QMARK_.call(null,inst_35046);
var state_35147__$1 = state_35147;
if(inst_35048){
var statearr_35215_35276 = state_35147__$1;
(statearr_35215_35276[(1)] = (19));

} else {
var statearr_35216_35277 = state_35147__$1;
(statearr_35216_35277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (38))){
var inst_35126 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35217_35278 = state_35147__$1;
(statearr_35217_35278[(2)] = inst_35126);

(statearr_35217_35278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (30))){
var state_35147__$1 = state_35147;
var statearr_35218_35279 = state_35147__$1;
(statearr_35218_35279[(2)] = null);

(statearr_35218_35279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (10))){
var inst_35027 = (state_35147[(14)]);
var inst_35025 = (state_35147[(17)]);
var inst_35035 = cljs.core._nth.call(null,inst_35025,inst_35027);
var inst_35036 = cljs.core.nth.call(null,inst_35035,(0),null);
var inst_35037 = cljs.core.nth.call(null,inst_35035,(1),null);
var state_35147__$1 = (function (){var statearr_35219 = state_35147;
(statearr_35219[(26)] = inst_35036);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35037)){
var statearr_35220_35280 = state_35147__$1;
(statearr_35220_35280[(1)] = (13));

} else {
var statearr_35221_35281 = state_35147__$1;
(statearr_35221_35281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (18))){
var inst_35072 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35222_35282 = state_35147__$1;
(statearr_35222_35282[(2)] = inst_35072);

(statearr_35222_35282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (42))){
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35147__$1,(45),dchan);
} else {
if((state_val_35148 === (37))){
var inst_35015 = (state_35147[(9)]);
var inst_35115 = (state_35147[(23)]);
var inst_35106 = (state_35147[(25)]);
var inst_35115__$1 = cljs.core.first.call(null,inst_35106);
var inst_35116 = cljs.core.async.put_BANG_.call(null,inst_35115__$1,inst_35015,done);
var state_35147__$1 = (function (){var statearr_35223 = state_35147;
(statearr_35223[(23)] = inst_35115__$1);

return statearr_35223;
})();
if(cljs.core.truth_(inst_35116)){
var statearr_35224_35283 = state_35147__$1;
(statearr_35224_35283[(1)] = (39));

} else {
var statearr_35225_35284 = state_35147__$1;
(statearr_35225_35284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (8))){
var inst_35026 = (state_35147[(13)]);
var inst_35027 = (state_35147[(14)]);
var inst_35029 = (inst_35027 < inst_35026);
var inst_35030 = inst_35029;
var state_35147__$1 = state_35147;
if(cljs.core.truth_(inst_35030)){
var statearr_35226_35285 = state_35147__$1;
(statearr_35226_35285[(1)] = (10));

} else {
var statearr_35227_35286 = state_35147__$1;
(statearr_35227_35286[(1)] = (11));

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
});})(c__32549__auto___35232,cs,m,dchan,dctr,done))
;
return ((function (switch__32392__auto__,c__32549__auto___35232,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32393__auto__ = null;
var cljs$core$async$mult_$_state_machine__32393__auto____0 = (function (){
var statearr_35228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35228[(0)] = cljs$core$async$mult_$_state_machine__32393__auto__);

(statearr_35228[(1)] = (1));

return statearr_35228;
});
var cljs$core$async$mult_$_state_machine__32393__auto____1 = (function (state_35147){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35229){if((e35229 instanceof Object)){
var ex__32396__auto__ = e35229;
var statearr_35230_35287 = state_35147;
(statearr_35230_35287[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35288 = state_35147;
state_35147 = G__35288;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32393__auto__ = function(state_35147){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32393__auto____1.call(this,state_35147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32393__auto____0;
cljs$core$async$mult_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32393__auto____1;
return cljs$core$async$mult_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35232,cs,m,dchan,dctr,done))
})();
var state__32551__auto__ = (function (){var statearr_35231 = f__32550__auto__.call(null);
(statearr_35231[(6)] = c__32549__auto___35232);

return statearr_35231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35232,cs,m,dchan,dctr,done))
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
var G__35290 = arguments.length;
switch (G__35290) {
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
var len__4499__auto___35302 = arguments.length;
var i__4500__auto___35303 = (0);
while(true){
if((i__4500__auto___35303 < len__4499__auto___35302)){
args__4502__auto__.push((arguments[i__4500__auto___35303]));

var G__35304 = (i__4500__auto___35303 + (1));
i__4500__auto___35303 = G__35304;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35296){
var map__35297 = p__35296;
var map__35297__$1 = ((((!((map__35297 == null)))?(((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var opts = map__35297__$1;
var statearr_35299_35305 = state;
(statearr_35299_35305[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35297,map__35297__$1,opts){
return (function (val){
var statearr_35300_35306 = state;
(statearr_35300_35306[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35297,map__35297__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35301_35307 = state;
(statearr_35301_35307[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35292){
var G__35293 = cljs.core.first.call(null,seq35292);
var seq35292__$1 = cljs.core.next.call(null,seq35292);
var G__35294 = cljs.core.first.call(null,seq35292__$1);
var seq35292__$2 = cljs.core.next.call(null,seq35292__$1);
var G__35295 = cljs.core.first.call(null,seq35292__$2);
var seq35292__$3 = cljs.core.next.call(null,seq35292__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35293,G__35294,G__35295,seq35292__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35308 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35309){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35309 = meta35309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35310,meta35309__$1){
var self__ = this;
var _35310__$1 = this;
return (new cljs.core.async.t_cljs$core$async35308(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35309__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35310){
var self__ = this;
var _35310__$1 = this;
return self__.meta35309;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35308.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35309","meta35309",-1654196382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35308";

cljs.core.async.t_cljs$core$async35308.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35308");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35308.
 */
cljs.core.async.__GT_t_cljs$core$async35308 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35308(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35309){
return (new cljs.core.async.t_cljs$core$async35308(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35309));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35308(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32549__auto___35472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35472,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35472,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35412){
var state_val_35413 = (state_35412[(1)]);
if((state_val_35413 === (7))){
var inst_35327 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35414_35473 = state_35412__$1;
(statearr_35414_35473[(2)] = inst_35327);

(statearr_35414_35473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (20))){
var inst_35339 = (state_35412[(7)]);
var state_35412__$1 = state_35412;
var statearr_35415_35474 = state_35412__$1;
(statearr_35415_35474[(2)] = inst_35339);

(statearr_35415_35474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (27))){
var state_35412__$1 = state_35412;
var statearr_35416_35475 = state_35412__$1;
(statearr_35416_35475[(2)] = null);

(statearr_35416_35475[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (1))){
var inst_35314 = (state_35412[(8)]);
var inst_35314__$1 = calc_state.call(null);
var inst_35316 = (inst_35314__$1 == null);
var inst_35317 = cljs.core.not.call(null,inst_35316);
var state_35412__$1 = (function (){var statearr_35417 = state_35412;
(statearr_35417[(8)] = inst_35314__$1);

return statearr_35417;
})();
if(inst_35317){
var statearr_35418_35476 = state_35412__$1;
(statearr_35418_35476[(1)] = (2));

} else {
var statearr_35419_35477 = state_35412__$1;
(statearr_35419_35477[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (24))){
var inst_35372 = (state_35412[(9)]);
var inst_35386 = (state_35412[(10)]);
var inst_35363 = (state_35412[(11)]);
var inst_35386__$1 = inst_35363.call(null,inst_35372);
var state_35412__$1 = (function (){var statearr_35420 = state_35412;
(statearr_35420[(10)] = inst_35386__$1);

return statearr_35420;
})();
if(cljs.core.truth_(inst_35386__$1)){
var statearr_35421_35478 = state_35412__$1;
(statearr_35421_35478[(1)] = (29));

} else {
var statearr_35422_35479 = state_35412__$1;
(statearr_35422_35479[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (4))){
var inst_35330 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35330)){
var statearr_35423_35480 = state_35412__$1;
(statearr_35423_35480[(1)] = (8));

} else {
var statearr_35424_35481 = state_35412__$1;
(statearr_35424_35481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (15))){
var inst_35357 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35357)){
var statearr_35425_35482 = state_35412__$1;
(statearr_35425_35482[(1)] = (19));

} else {
var statearr_35426_35483 = state_35412__$1;
(statearr_35426_35483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (21))){
var inst_35362 = (state_35412[(12)]);
var inst_35362__$1 = (state_35412[(2)]);
var inst_35363 = cljs.core.get.call(null,inst_35362__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35364 = cljs.core.get.call(null,inst_35362__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35365 = cljs.core.get.call(null,inst_35362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35412__$1 = (function (){var statearr_35427 = state_35412;
(statearr_35427[(12)] = inst_35362__$1);

(statearr_35427[(13)] = inst_35364);

(statearr_35427[(11)] = inst_35363);

return statearr_35427;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35412__$1,(22),inst_35365);
} else {
if((state_val_35413 === (31))){
var inst_35394 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35394)){
var statearr_35428_35484 = state_35412__$1;
(statearr_35428_35484[(1)] = (32));

} else {
var statearr_35429_35485 = state_35412__$1;
(statearr_35429_35485[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (32))){
var inst_35371 = (state_35412[(14)]);
var state_35412__$1 = state_35412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35412__$1,(35),out,inst_35371);
} else {
if((state_val_35413 === (33))){
var inst_35362 = (state_35412[(12)]);
var inst_35339 = inst_35362;
var state_35412__$1 = (function (){var statearr_35430 = state_35412;
(statearr_35430[(7)] = inst_35339);

return statearr_35430;
})();
var statearr_35431_35486 = state_35412__$1;
(statearr_35431_35486[(2)] = null);

(statearr_35431_35486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (13))){
var inst_35339 = (state_35412[(7)]);
var inst_35346 = inst_35339.cljs$lang$protocol_mask$partition0$;
var inst_35347 = (inst_35346 & (64));
var inst_35348 = inst_35339.cljs$core$ISeq$;
var inst_35349 = (cljs.core.PROTOCOL_SENTINEL === inst_35348);
var inst_35350 = ((inst_35347) || (inst_35349));
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35350)){
var statearr_35432_35487 = state_35412__$1;
(statearr_35432_35487[(1)] = (16));

} else {
var statearr_35433_35488 = state_35412__$1;
(statearr_35433_35488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (22))){
var inst_35371 = (state_35412[(14)]);
var inst_35372 = (state_35412[(9)]);
var inst_35370 = (state_35412[(2)]);
var inst_35371__$1 = cljs.core.nth.call(null,inst_35370,(0),null);
var inst_35372__$1 = cljs.core.nth.call(null,inst_35370,(1),null);
var inst_35373 = (inst_35371__$1 == null);
var inst_35374 = cljs.core._EQ_.call(null,inst_35372__$1,change);
var inst_35375 = ((inst_35373) || (inst_35374));
var state_35412__$1 = (function (){var statearr_35434 = state_35412;
(statearr_35434[(14)] = inst_35371__$1);

(statearr_35434[(9)] = inst_35372__$1);

return statearr_35434;
})();
if(cljs.core.truth_(inst_35375)){
var statearr_35435_35489 = state_35412__$1;
(statearr_35435_35489[(1)] = (23));

} else {
var statearr_35436_35490 = state_35412__$1;
(statearr_35436_35490[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (36))){
var inst_35362 = (state_35412[(12)]);
var inst_35339 = inst_35362;
var state_35412__$1 = (function (){var statearr_35437 = state_35412;
(statearr_35437[(7)] = inst_35339);

return statearr_35437;
})();
var statearr_35438_35491 = state_35412__$1;
(statearr_35438_35491[(2)] = null);

(statearr_35438_35491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (29))){
var inst_35386 = (state_35412[(10)]);
var state_35412__$1 = state_35412;
var statearr_35439_35492 = state_35412__$1;
(statearr_35439_35492[(2)] = inst_35386);

(statearr_35439_35492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (6))){
var state_35412__$1 = state_35412;
var statearr_35440_35493 = state_35412__$1;
(statearr_35440_35493[(2)] = false);

(statearr_35440_35493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (28))){
var inst_35382 = (state_35412[(2)]);
var inst_35383 = calc_state.call(null);
var inst_35339 = inst_35383;
var state_35412__$1 = (function (){var statearr_35441 = state_35412;
(statearr_35441[(15)] = inst_35382);

(statearr_35441[(7)] = inst_35339);

return statearr_35441;
})();
var statearr_35442_35494 = state_35412__$1;
(statearr_35442_35494[(2)] = null);

(statearr_35442_35494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (25))){
var inst_35408 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35443_35495 = state_35412__$1;
(statearr_35443_35495[(2)] = inst_35408);

(statearr_35443_35495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (34))){
var inst_35406 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35444_35496 = state_35412__$1;
(statearr_35444_35496[(2)] = inst_35406);

(statearr_35444_35496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (17))){
var state_35412__$1 = state_35412;
var statearr_35445_35497 = state_35412__$1;
(statearr_35445_35497[(2)] = false);

(statearr_35445_35497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (3))){
var state_35412__$1 = state_35412;
var statearr_35446_35498 = state_35412__$1;
(statearr_35446_35498[(2)] = false);

(statearr_35446_35498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (12))){
var inst_35410 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35412__$1,inst_35410);
} else {
if((state_val_35413 === (2))){
var inst_35314 = (state_35412[(8)]);
var inst_35319 = inst_35314.cljs$lang$protocol_mask$partition0$;
var inst_35320 = (inst_35319 & (64));
var inst_35321 = inst_35314.cljs$core$ISeq$;
var inst_35322 = (cljs.core.PROTOCOL_SENTINEL === inst_35321);
var inst_35323 = ((inst_35320) || (inst_35322));
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35323)){
var statearr_35447_35499 = state_35412__$1;
(statearr_35447_35499[(1)] = (5));

} else {
var statearr_35448_35500 = state_35412__$1;
(statearr_35448_35500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (23))){
var inst_35371 = (state_35412[(14)]);
var inst_35377 = (inst_35371 == null);
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35377)){
var statearr_35449_35501 = state_35412__$1;
(statearr_35449_35501[(1)] = (26));

} else {
var statearr_35450_35502 = state_35412__$1;
(statearr_35450_35502[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (35))){
var inst_35397 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
if(cljs.core.truth_(inst_35397)){
var statearr_35451_35503 = state_35412__$1;
(statearr_35451_35503[(1)] = (36));

} else {
var statearr_35452_35504 = state_35412__$1;
(statearr_35452_35504[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (19))){
var inst_35339 = (state_35412[(7)]);
var inst_35359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35339);
var state_35412__$1 = state_35412;
var statearr_35453_35505 = state_35412__$1;
(statearr_35453_35505[(2)] = inst_35359);

(statearr_35453_35505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (11))){
var inst_35339 = (state_35412[(7)]);
var inst_35343 = (inst_35339 == null);
var inst_35344 = cljs.core.not.call(null,inst_35343);
var state_35412__$1 = state_35412;
if(inst_35344){
var statearr_35454_35506 = state_35412__$1;
(statearr_35454_35506[(1)] = (13));

} else {
var statearr_35455_35507 = state_35412__$1;
(statearr_35455_35507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (9))){
var inst_35314 = (state_35412[(8)]);
var state_35412__$1 = state_35412;
var statearr_35456_35508 = state_35412__$1;
(statearr_35456_35508[(2)] = inst_35314);

(statearr_35456_35508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (5))){
var state_35412__$1 = state_35412;
var statearr_35457_35509 = state_35412__$1;
(statearr_35457_35509[(2)] = true);

(statearr_35457_35509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (14))){
var state_35412__$1 = state_35412;
var statearr_35458_35510 = state_35412__$1;
(statearr_35458_35510[(2)] = false);

(statearr_35458_35510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (26))){
var inst_35372 = (state_35412[(9)]);
var inst_35379 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35372);
var state_35412__$1 = state_35412;
var statearr_35459_35511 = state_35412__$1;
(statearr_35459_35511[(2)] = inst_35379);

(statearr_35459_35511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (16))){
var state_35412__$1 = state_35412;
var statearr_35460_35512 = state_35412__$1;
(statearr_35460_35512[(2)] = true);

(statearr_35460_35512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (38))){
var inst_35402 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35461_35513 = state_35412__$1;
(statearr_35461_35513[(2)] = inst_35402);

(statearr_35461_35513[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (30))){
var inst_35372 = (state_35412[(9)]);
var inst_35364 = (state_35412[(13)]);
var inst_35363 = (state_35412[(11)]);
var inst_35389 = cljs.core.empty_QMARK_.call(null,inst_35363);
var inst_35390 = inst_35364.call(null,inst_35372);
var inst_35391 = cljs.core.not.call(null,inst_35390);
var inst_35392 = ((inst_35389) && (inst_35391));
var state_35412__$1 = state_35412;
var statearr_35462_35514 = state_35412__$1;
(statearr_35462_35514[(2)] = inst_35392);

(statearr_35462_35514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (10))){
var inst_35314 = (state_35412[(8)]);
var inst_35335 = (state_35412[(2)]);
var inst_35336 = cljs.core.get.call(null,inst_35335,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35337 = cljs.core.get.call(null,inst_35335,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35338 = cljs.core.get.call(null,inst_35335,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35339 = inst_35314;
var state_35412__$1 = (function (){var statearr_35463 = state_35412;
(statearr_35463[(16)] = inst_35337);

(statearr_35463[(7)] = inst_35339);

(statearr_35463[(17)] = inst_35336);

(statearr_35463[(18)] = inst_35338);

return statearr_35463;
})();
var statearr_35464_35515 = state_35412__$1;
(statearr_35464_35515[(2)] = null);

(statearr_35464_35515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (18))){
var inst_35354 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35465_35516 = state_35412__$1;
(statearr_35465_35516[(2)] = inst_35354);

(statearr_35465_35516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (37))){
var state_35412__$1 = state_35412;
var statearr_35466_35517 = state_35412__$1;
(statearr_35466_35517[(2)] = null);

(statearr_35466_35517[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (8))){
var inst_35314 = (state_35412[(8)]);
var inst_35332 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35314);
var state_35412__$1 = state_35412;
var statearr_35467_35518 = state_35412__$1;
(statearr_35467_35518[(2)] = inst_35332);

(statearr_35467_35518[(1)] = (10));


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
});})(c__32549__auto___35472,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32392__auto__,c__32549__auto___35472,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32393__auto__ = null;
var cljs$core$async$mix_$_state_machine__32393__auto____0 = (function (){
var statearr_35468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35468[(0)] = cljs$core$async$mix_$_state_machine__32393__auto__);

(statearr_35468[(1)] = (1));

return statearr_35468;
});
var cljs$core$async$mix_$_state_machine__32393__auto____1 = (function (state_35412){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35469){if((e35469 instanceof Object)){
var ex__32396__auto__ = e35469;
var statearr_35470_35519 = state_35412;
(statearr_35470_35519[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35520 = state_35412;
state_35412 = G__35520;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32393__auto__ = function(state_35412){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32393__auto____1.call(this,state_35412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32393__auto____0;
cljs$core$async$mix_$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32393__auto____1;
return cljs$core$async$mix_$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35472,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32551__auto__ = (function (){var statearr_35471 = f__32550__auto__.call(null);
(statearr_35471[(6)] = c__32549__auto___35472);

return statearr_35471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35472,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35522 = arguments.length;
switch (G__35522) {
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
var G__35526 = arguments.length;
switch (G__35526) {
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
return (function (p1__35524_SHARP_){
if(cljs.core.truth_(p1__35524_SHARP_.call(null,topic))){
return p1__35524_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35524_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35527 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35528){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35528 = meta35528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35529,meta35528__$1){
var self__ = this;
var _35529__$1 = this;
return (new cljs.core.async.t_cljs$core$async35527(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35528__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35529){
var self__ = this;
var _35529__$1 = this;
return self__.meta35528;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35528","meta35528",-1764136144,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35527";

cljs.core.async.t_cljs$core$async35527.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35527");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35527.
 */
cljs.core.async.__GT_t_cljs$core$async35527 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35527(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35528){
return (new cljs.core.async.t_cljs$core$async35527(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35528));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35527(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32549__auto___35647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35647,mults,ensure_mult,p){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35647,mults,ensure_mult,p){
return (function (state_35601){
var state_val_35602 = (state_35601[(1)]);
if((state_val_35602 === (7))){
var inst_35597 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35603_35648 = state_35601__$1;
(statearr_35603_35648[(2)] = inst_35597);

(statearr_35603_35648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (20))){
var state_35601__$1 = state_35601;
var statearr_35604_35649 = state_35601__$1;
(statearr_35604_35649[(2)] = null);

(statearr_35604_35649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (1))){
var state_35601__$1 = state_35601;
var statearr_35605_35650 = state_35601__$1;
(statearr_35605_35650[(2)] = null);

(statearr_35605_35650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (24))){
var inst_35580 = (state_35601[(7)]);
var inst_35589 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35580);
var state_35601__$1 = state_35601;
var statearr_35606_35651 = state_35601__$1;
(statearr_35606_35651[(2)] = inst_35589);

(statearr_35606_35651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (4))){
var inst_35532 = (state_35601[(8)]);
var inst_35532__$1 = (state_35601[(2)]);
var inst_35533 = (inst_35532__$1 == null);
var state_35601__$1 = (function (){var statearr_35607 = state_35601;
(statearr_35607[(8)] = inst_35532__$1);

return statearr_35607;
})();
if(cljs.core.truth_(inst_35533)){
var statearr_35608_35652 = state_35601__$1;
(statearr_35608_35652[(1)] = (5));

} else {
var statearr_35609_35653 = state_35601__$1;
(statearr_35609_35653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (15))){
var inst_35574 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35610_35654 = state_35601__$1;
(statearr_35610_35654[(2)] = inst_35574);

(statearr_35610_35654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (21))){
var inst_35594 = (state_35601[(2)]);
var state_35601__$1 = (function (){var statearr_35611 = state_35601;
(statearr_35611[(9)] = inst_35594);

return statearr_35611;
})();
var statearr_35612_35655 = state_35601__$1;
(statearr_35612_35655[(2)] = null);

(statearr_35612_35655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (13))){
var inst_35556 = (state_35601[(10)]);
var inst_35558 = cljs.core.chunked_seq_QMARK_.call(null,inst_35556);
var state_35601__$1 = state_35601;
if(inst_35558){
var statearr_35613_35656 = state_35601__$1;
(statearr_35613_35656[(1)] = (16));

} else {
var statearr_35614_35657 = state_35601__$1;
(statearr_35614_35657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (22))){
var inst_35586 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
if(cljs.core.truth_(inst_35586)){
var statearr_35615_35658 = state_35601__$1;
(statearr_35615_35658[(1)] = (23));

} else {
var statearr_35616_35659 = state_35601__$1;
(statearr_35616_35659[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (6))){
var inst_35580 = (state_35601[(7)]);
var inst_35582 = (state_35601[(11)]);
var inst_35532 = (state_35601[(8)]);
var inst_35580__$1 = topic_fn.call(null,inst_35532);
var inst_35581 = cljs.core.deref.call(null,mults);
var inst_35582__$1 = cljs.core.get.call(null,inst_35581,inst_35580__$1);
var state_35601__$1 = (function (){var statearr_35617 = state_35601;
(statearr_35617[(7)] = inst_35580__$1);

(statearr_35617[(11)] = inst_35582__$1);

return statearr_35617;
})();
if(cljs.core.truth_(inst_35582__$1)){
var statearr_35618_35660 = state_35601__$1;
(statearr_35618_35660[(1)] = (19));

} else {
var statearr_35619_35661 = state_35601__$1;
(statearr_35619_35661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (25))){
var inst_35591 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35620_35662 = state_35601__$1;
(statearr_35620_35662[(2)] = inst_35591);

(statearr_35620_35662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (17))){
var inst_35556 = (state_35601[(10)]);
var inst_35565 = cljs.core.first.call(null,inst_35556);
var inst_35566 = cljs.core.async.muxch_STAR_.call(null,inst_35565);
var inst_35567 = cljs.core.async.close_BANG_.call(null,inst_35566);
var inst_35568 = cljs.core.next.call(null,inst_35556);
var inst_35542 = inst_35568;
var inst_35543 = null;
var inst_35544 = (0);
var inst_35545 = (0);
var state_35601__$1 = (function (){var statearr_35621 = state_35601;
(statearr_35621[(12)] = inst_35542);

(statearr_35621[(13)] = inst_35545);

(statearr_35621[(14)] = inst_35544);

(statearr_35621[(15)] = inst_35543);

(statearr_35621[(16)] = inst_35567);

return statearr_35621;
})();
var statearr_35622_35663 = state_35601__$1;
(statearr_35622_35663[(2)] = null);

(statearr_35622_35663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (3))){
var inst_35599 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35601__$1,inst_35599);
} else {
if((state_val_35602 === (12))){
var inst_35576 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35623_35664 = state_35601__$1;
(statearr_35623_35664[(2)] = inst_35576);

(statearr_35623_35664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (2))){
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35601__$1,(4),ch);
} else {
if((state_val_35602 === (23))){
var state_35601__$1 = state_35601;
var statearr_35624_35665 = state_35601__$1;
(statearr_35624_35665[(2)] = null);

(statearr_35624_35665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (19))){
var inst_35582 = (state_35601[(11)]);
var inst_35532 = (state_35601[(8)]);
var inst_35584 = cljs.core.async.muxch_STAR_.call(null,inst_35582);
var state_35601__$1 = state_35601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35601__$1,(22),inst_35584,inst_35532);
} else {
if((state_val_35602 === (11))){
var inst_35542 = (state_35601[(12)]);
var inst_35556 = (state_35601[(10)]);
var inst_35556__$1 = cljs.core.seq.call(null,inst_35542);
var state_35601__$1 = (function (){var statearr_35625 = state_35601;
(statearr_35625[(10)] = inst_35556__$1);

return statearr_35625;
})();
if(inst_35556__$1){
var statearr_35626_35666 = state_35601__$1;
(statearr_35626_35666[(1)] = (13));

} else {
var statearr_35627_35667 = state_35601__$1;
(statearr_35627_35667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (9))){
var inst_35578 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35628_35668 = state_35601__$1;
(statearr_35628_35668[(2)] = inst_35578);

(statearr_35628_35668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (5))){
var inst_35539 = cljs.core.deref.call(null,mults);
var inst_35540 = cljs.core.vals.call(null,inst_35539);
var inst_35541 = cljs.core.seq.call(null,inst_35540);
var inst_35542 = inst_35541;
var inst_35543 = null;
var inst_35544 = (0);
var inst_35545 = (0);
var state_35601__$1 = (function (){var statearr_35629 = state_35601;
(statearr_35629[(12)] = inst_35542);

(statearr_35629[(13)] = inst_35545);

(statearr_35629[(14)] = inst_35544);

(statearr_35629[(15)] = inst_35543);

return statearr_35629;
})();
var statearr_35630_35669 = state_35601__$1;
(statearr_35630_35669[(2)] = null);

(statearr_35630_35669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (14))){
var state_35601__$1 = state_35601;
var statearr_35634_35670 = state_35601__$1;
(statearr_35634_35670[(2)] = null);

(statearr_35634_35670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (16))){
var inst_35556 = (state_35601[(10)]);
var inst_35560 = cljs.core.chunk_first.call(null,inst_35556);
var inst_35561 = cljs.core.chunk_rest.call(null,inst_35556);
var inst_35562 = cljs.core.count.call(null,inst_35560);
var inst_35542 = inst_35561;
var inst_35543 = inst_35560;
var inst_35544 = inst_35562;
var inst_35545 = (0);
var state_35601__$1 = (function (){var statearr_35635 = state_35601;
(statearr_35635[(12)] = inst_35542);

(statearr_35635[(13)] = inst_35545);

(statearr_35635[(14)] = inst_35544);

(statearr_35635[(15)] = inst_35543);

return statearr_35635;
})();
var statearr_35636_35671 = state_35601__$1;
(statearr_35636_35671[(2)] = null);

(statearr_35636_35671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (10))){
var inst_35542 = (state_35601[(12)]);
var inst_35545 = (state_35601[(13)]);
var inst_35544 = (state_35601[(14)]);
var inst_35543 = (state_35601[(15)]);
var inst_35550 = cljs.core._nth.call(null,inst_35543,inst_35545);
var inst_35551 = cljs.core.async.muxch_STAR_.call(null,inst_35550);
var inst_35552 = cljs.core.async.close_BANG_.call(null,inst_35551);
var inst_35553 = (inst_35545 + (1));
var tmp35631 = inst_35542;
var tmp35632 = inst_35544;
var tmp35633 = inst_35543;
var inst_35542__$1 = tmp35631;
var inst_35543__$1 = tmp35633;
var inst_35544__$1 = tmp35632;
var inst_35545__$1 = inst_35553;
var state_35601__$1 = (function (){var statearr_35637 = state_35601;
(statearr_35637[(12)] = inst_35542__$1);

(statearr_35637[(13)] = inst_35545__$1);

(statearr_35637[(17)] = inst_35552);

(statearr_35637[(14)] = inst_35544__$1);

(statearr_35637[(15)] = inst_35543__$1);

return statearr_35637;
})();
var statearr_35638_35672 = state_35601__$1;
(statearr_35638_35672[(2)] = null);

(statearr_35638_35672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (18))){
var inst_35571 = (state_35601[(2)]);
var state_35601__$1 = state_35601;
var statearr_35639_35673 = state_35601__$1;
(statearr_35639_35673[(2)] = inst_35571);

(statearr_35639_35673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35602 === (8))){
var inst_35545 = (state_35601[(13)]);
var inst_35544 = (state_35601[(14)]);
var inst_35547 = (inst_35545 < inst_35544);
var inst_35548 = inst_35547;
var state_35601__$1 = state_35601;
if(cljs.core.truth_(inst_35548)){
var statearr_35640_35674 = state_35601__$1;
(statearr_35640_35674[(1)] = (10));

} else {
var statearr_35641_35675 = state_35601__$1;
(statearr_35641_35675[(1)] = (11));

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
});})(c__32549__auto___35647,mults,ensure_mult,p))
;
return ((function (switch__32392__auto__,c__32549__auto___35647,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_35642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35642[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_35642[(1)] = (1));

return statearr_35642;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_35601){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35643){if((e35643 instanceof Object)){
var ex__32396__auto__ = e35643;
var statearr_35644_35676 = state_35601;
(statearr_35644_35676[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35677 = state_35601;
state_35601 = G__35677;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_35601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_35601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35647,mults,ensure_mult,p))
})();
var state__32551__auto__ = (function (){var statearr_35645 = f__32550__auto__.call(null);
(statearr_35645[(6)] = c__32549__auto___35647);

return statearr_35645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35647,mults,ensure_mult,p))
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
var G__35679 = arguments.length;
switch (G__35679) {
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
var G__35682 = arguments.length;
switch (G__35682) {
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
var G__35685 = arguments.length;
switch (G__35685) {
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
var c__32549__auto___35752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35752,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35752,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35724){
var state_val_35725 = (state_35724[(1)]);
if((state_val_35725 === (7))){
var state_35724__$1 = state_35724;
var statearr_35726_35753 = state_35724__$1;
(statearr_35726_35753[(2)] = null);

(statearr_35726_35753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (1))){
var state_35724__$1 = state_35724;
var statearr_35727_35754 = state_35724__$1;
(statearr_35727_35754[(2)] = null);

(statearr_35727_35754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (4))){
var inst_35688 = (state_35724[(7)]);
var inst_35690 = (inst_35688 < cnt);
var state_35724__$1 = state_35724;
if(cljs.core.truth_(inst_35690)){
var statearr_35728_35755 = state_35724__$1;
(statearr_35728_35755[(1)] = (6));

} else {
var statearr_35729_35756 = state_35724__$1;
(statearr_35729_35756[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (15))){
var inst_35720 = (state_35724[(2)]);
var state_35724__$1 = state_35724;
var statearr_35730_35757 = state_35724__$1;
(statearr_35730_35757[(2)] = inst_35720);

(statearr_35730_35757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (13))){
var inst_35713 = cljs.core.async.close_BANG_.call(null,out);
var state_35724__$1 = state_35724;
var statearr_35731_35758 = state_35724__$1;
(statearr_35731_35758[(2)] = inst_35713);

(statearr_35731_35758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (6))){
var state_35724__$1 = state_35724;
var statearr_35732_35759 = state_35724__$1;
(statearr_35732_35759[(2)] = null);

(statearr_35732_35759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (3))){
var inst_35722 = (state_35724[(2)]);
var state_35724__$1 = state_35724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35724__$1,inst_35722);
} else {
if((state_val_35725 === (12))){
var inst_35710 = (state_35724[(8)]);
var inst_35710__$1 = (state_35724[(2)]);
var inst_35711 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35710__$1);
var state_35724__$1 = (function (){var statearr_35733 = state_35724;
(statearr_35733[(8)] = inst_35710__$1);

return statearr_35733;
})();
if(cljs.core.truth_(inst_35711)){
var statearr_35734_35760 = state_35724__$1;
(statearr_35734_35760[(1)] = (13));

} else {
var statearr_35735_35761 = state_35724__$1;
(statearr_35735_35761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (2))){
var inst_35687 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35688 = (0);
var state_35724__$1 = (function (){var statearr_35736 = state_35724;
(statearr_35736[(7)] = inst_35688);

(statearr_35736[(9)] = inst_35687);

return statearr_35736;
})();
var statearr_35737_35762 = state_35724__$1;
(statearr_35737_35762[(2)] = null);

(statearr_35737_35762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (11))){
var inst_35688 = (state_35724[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35724,(10),Object,null,(9));
var inst_35697 = chs__$1.call(null,inst_35688);
var inst_35698 = done.call(null,inst_35688);
var inst_35699 = cljs.core.async.take_BANG_.call(null,inst_35697,inst_35698);
var state_35724__$1 = state_35724;
var statearr_35738_35763 = state_35724__$1;
(statearr_35738_35763[(2)] = inst_35699);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35724__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (9))){
var inst_35688 = (state_35724[(7)]);
var inst_35701 = (state_35724[(2)]);
var inst_35702 = (inst_35688 + (1));
var inst_35688__$1 = inst_35702;
var state_35724__$1 = (function (){var statearr_35739 = state_35724;
(statearr_35739[(7)] = inst_35688__$1);

(statearr_35739[(10)] = inst_35701);

return statearr_35739;
})();
var statearr_35740_35764 = state_35724__$1;
(statearr_35740_35764[(2)] = null);

(statearr_35740_35764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (5))){
var inst_35708 = (state_35724[(2)]);
var state_35724__$1 = (function (){var statearr_35741 = state_35724;
(statearr_35741[(11)] = inst_35708);

return statearr_35741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35724__$1,(12),dchan);
} else {
if((state_val_35725 === (14))){
var inst_35710 = (state_35724[(8)]);
var inst_35715 = cljs.core.apply.call(null,f,inst_35710);
var state_35724__$1 = state_35724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35724__$1,(16),out,inst_35715);
} else {
if((state_val_35725 === (16))){
var inst_35717 = (state_35724[(2)]);
var state_35724__$1 = (function (){var statearr_35742 = state_35724;
(statearr_35742[(12)] = inst_35717);

return statearr_35742;
})();
var statearr_35743_35765 = state_35724__$1;
(statearr_35743_35765[(2)] = null);

(statearr_35743_35765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (10))){
var inst_35692 = (state_35724[(2)]);
var inst_35693 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35724__$1 = (function (){var statearr_35744 = state_35724;
(statearr_35744[(13)] = inst_35692);

return statearr_35744;
})();
var statearr_35745_35766 = state_35724__$1;
(statearr_35745_35766[(2)] = inst_35693);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35724__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35725 === (8))){
var inst_35706 = (state_35724[(2)]);
var state_35724__$1 = state_35724;
var statearr_35746_35767 = state_35724__$1;
(statearr_35746_35767[(2)] = inst_35706);

(statearr_35746_35767[(1)] = (5));


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
});})(c__32549__auto___35752,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32392__auto__,c__32549__auto___35752,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_35747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35747[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_35747[(1)] = (1));

return statearr_35747;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_35724){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35748){if((e35748 instanceof Object)){
var ex__32396__auto__ = e35748;
var statearr_35749_35768 = state_35724;
(statearr_35749_35768[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35769 = state_35724;
state_35724 = G__35769;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_35724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_35724);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35752,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32551__auto__ = (function (){var statearr_35750 = f__32550__auto__.call(null);
(statearr_35750[(6)] = c__32549__auto___35752);

return statearr_35750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35752,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35772 = arguments.length;
switch (G__35772) {
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
var c__32549__auto___35826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35826,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35826,out){
return (function (state_35804){
var state_val_35805 = (state_35804[(1)]);
if((state_val_35805 === (7))){
var inst_35783 = (state_35804[(7)]);
var inst_35784 = (state_35804[(8)]);
var inst_35783__$1 = (state_35804[(2)]);
var inst_35784__$1 = cljs.core.nth.call(null,inst_35783__$1,(0),null);
var inst_35785 = cljs.core.nth.call(null,inst_35783__$1,(1),null);
var inst_35786 = (inst_35784__$1 == null);
var state_35804__$1 = (function (){var statearr_35806 = state_35804;
(statearr_35806[(7)] = inst_35783__$1);

(statearr_35806[(8)] = inst_35784__$1);

(statearr_35806[(9)] = inst_35785);

return statearr_35806;
})();
if(cljs.core.truth_(inst_35786)){
var statearr_35807_35827 = state_35804__$1;
(statearr_35807_35827[(1)] = (8));

} else {
var statearr_35808_35828 = state_35804__$1;
(statearr_35808_35828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (1))){
var inst_35773 = cljs.core.vec.call(null,chs);
var inst_35774 = inst_35773;
var state_35804__$1 = (function (){var statearr_35809 = state_35804;
(statearr_35809[(10)] = inst_35774);

return statearr_35809;
})();
var statearr_35810_35829 = state_35804__$1;
(statearr_35810_35829[(2)] = null);

(statearr_35810_35829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (4))){
var inst_35774 = (state_35804[(10)]);
var state_35804__$1 = state_35804;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35804__$1,(7),inst_35774);
} else {
if((state_val_35805 === (6))){
var inst_35800 = (state_35804[(2)]);
var state_35804__$1 = state_35804;
var statearr_35811_35830 = state_35804__$1;
(statearr_35811_35830[(2)] = inst_35800);

(statearr_35811_35830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (3))){
var inst_35802 = (state_35804[(2)]);
var state_35804__$1 = state_35804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35804__$1,inst_35802);
} else {
if((state_val_35805 === (2))){
var inst_35774 = (state_35804[(10)]);
var inst_35776 = cljs.core.count.call(null,inst_35774);
var inst_35777 = (inst_35776 > (0));
var state_35804__$1 = state_35804;
if(cljs.core.truth_(inst_35777)){
var statearr_35813_35831 = state_35804__$1;
(statearr_35813_35831[(1)] = (4));

} else {
var statearr_35814_35832 = state_35804__$1;
(statearr_35814_35832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (11))){
var inst_35774 = (state_35804[(10)]);
var inst_35793 = (state_35804[(2)]);
var tmp35812 = inst_35774;
var inst_35774__$1 = tmp35812;
var state_35804__$1 = (function (){var statearr_35815 = state_35804;
(statearr_35815[(10)] = inst_35774__$1);

(statearr_35815[(11)] = inst_35793);

return statearr_35815;
})();
var statearr_35816_35833 = state_35804__$1;
(statearr_35816_35833[(2)] = null);

(statearr_35816_35833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (9))){
var inst_35784 = (state_35804[(8)]);
var state_35804__$1 = state_35804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35804__$1,(11),out,inst_35784);
} else {
if((state_val_35805 === (5))){
var inst_35798 = cljs.core.async.close_BANG_.call(null,out);
var state_35804__$1 = state_35804;
var statearr_35817_35834 = state_35804__$1;
(statearr_35817_35834[(2)] = inst_35798);

(statearr_35817_35834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (10))){
var inst_35796 = (state_35804[(2)]);
var state_35804__$1 = state_35804;
var statearr_35818_35835 = state_35804__$1;
(statearr_35818_35835[(2)] = inst_35796);

(statearr_35818_35835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35805 === (8))){
var inst_35783 = (state_35804[(7)]);
var inst_35784 = (state_35804[(8)]);
var inst_35774 = (state_35804[(10)]);
var inst_35785 = (state_35804[(9)]);
var inst_35788 = (function (){var cs = inst_35774;
var vec__35779 = inst_35783;
var v = inst_35784;
var c = inst_35785;
return ((function (cs,vec__35779,v,c,inst_35783,inst_35784,inst_35774,inst_35785,state_val_35805,c__32549__auto___35826,out){
return (function (p1__35770_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35770_SHARP_);
});
;})(cs,vec__35779,v,c,inst_35783,inst_35784,inst_35774,inst_35785,state_val_35805,c__32549__auto___35826,out))
})();
var inst_35789 = cljs.core.filterv.call(null,inst_35788,inst_35774);
var inst_35774__$1 = inst_35789;
var state_35804__$1 = (function (){var statearr_35819 = state_35804;
(statearr_35819[(10)] = inst_35774__$1);

return statearr_35819;
})();
var statearr_35820_35836 = state_35804__$1;
(statearr_35820_35836[(2)] = null);

(statearr_35820_35836[(1)] = (2));


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
});})(c__32549__auto___35826,out))
;
return ((function (switch__32392__auto__,c__32549__auto___35826,out){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_35821 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35821[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_35821[(1)] = (1));

return statearr_35821;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_35804){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35822){if((e35822 instanceof Object)){
var ex__32396__auto__ = e35822;
var statearr_35823_35837 = state_35804;
(statearr_35823_35837[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35838 = state_35804;
state_35804 = G__35838;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_35804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_35804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35826,out))
})();
var state__32551__auto__ = (function (){var statearr_35824 = f__32550__auto__.call(null);
(statearr_35824[(6)] = c__32549__auto___35826);

return statearr_35824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35826,out))
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
var G__35840 = arguments.length;
switch (G__35840) {
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
var c__32549__auto___35885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35885,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35885,out){
return (function (state_35864){
var state_val_35865 = (state_35864[(1)]);
if((state_val_35865 === (7))){
var inst_35846 = (state_35864[(7)]);
var inst_35846__$1 = (state_35864[(2)]);
var inst_35847 = (inst_35846__$1 == null);
var inst_35848 = cljs.core.not.call(null,inst_35847);
var state_35864__$1 = (function (){var statearr_35866 = state_35864;
(statearr_35866[(7)] = inst_35846__$1);

return statearr_35866;
})();
if(inst_35848){
var statearr_35867_35886 = state_35864__$1;
(statearr_35867_35886[(1)] = (8));

} else {
var statearr_35868_35887 = state_35864__$1;
(statearr_35868_35887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (1))){
var inst_35841 = (0);
var state_35864__$1 = (function (){var statearr_35869 = state_35864;
(statearr_35869[(8)] = inst_35841);

return statearr_35869;
})();
var statearr_35870_35888 = state_35864__$1;
(statearr_35870_35888[(2)] = null);

(statearr_35870_35888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (4))){
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35864__$1,(7),ch);
} else {
if((state_val_35865 === (6))){
var inst_35859 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35871_35889 = state_35864__$1;
(statearr_35871_35889[(2)] = inst_35859);

(statearr_35871_35889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (3))){
var inst_35861 = (state_35864[(2)]);
var inst_35862 = cljs.core.async.close_BANG_.call(null,out);
var state_35864__$1 = (function (){var statearr_35872 = state_35864;
(statearr_35872[(9)] = inst_35861);

return statearr_35872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35864__$1,inst_35862);
} else {
if((state_val_35865 === (2))){
var inst_35841 = (state_35864[(8)]);
var inst_35843 = (inst_35841 < n);
var state_35864__$1 = state_35864;
if(cljs.core.truth_(inst_35843)){
var statearr_35873_35890 = state_35864__$1;
(statearr_35873_35890[(1)] = (4));

} else {
var statearr_35874_35891 = state_35864__$1;
(statearr_35874_35891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (11))){
var inst_35841 = (state_35864[(8)]);
var inst_35851 = (state_35864[(2)]);
var inst_35852 = (inst_35841 + (1));
var inst_35841__$1 = inst_35852;
var state_35864__$1 = (function (){var statearr_35875 = state_35864;
(statearr_35875[(10)] = inst_35851);

(statearr_35875[(8)] = inst_35841__$1);

return statearr_35875;
})();
var statearr_35876_35892 = state_35864__$1;
(statearr_35876_35892[(2)] = null);

(statearr_35876_35892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (9))){
var state_35864__$1 = state_35864;
var statearr_35877_35893 = state_35864__$1;
(statearr_35877_35893[(2)] = null);

(statearr_35877_35893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (5))){
var state_35864__$1 = state_35864;
var statearr_35878_35894 = state_35864__$1;
(statearr_35878_35894[(2)] = null);

(statearr_35878_35894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (10))){
var inst_35856 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35879_35895 = state_35864__$1;
(statearr_35879_35895[(2)] = inst_35856);

(statearr_35879_35895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (8))){
var inst_35846 = (state_35864[(7)]);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35864__$1,(11),out,inst_35846);
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
});})(c__32549__auto___35885,out))
;
return ((function (switch__32392__auto__,c__32549__auto___35885,out){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_35880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35880[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_35880[(1)] = (1));

return statearr_35880;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_35864){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35881){if((e35881 instanceof Object)){
var ex__32396__auto__ = e35881;
var statearr_35882_35896 = state_35864;
(statearr_35882_35896[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35897 = state_35864;
state_35864 = G__35897;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_35864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_35864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35885,out))
})();
var state__32551__auto__ = (function (){var statearr_35883 = f__32550__auto__.call(null);
(statearr_35883[(6)] = c__32549__auto___35885);

return statearr_35883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35885,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35899 = (function (f,ch,meta35900){
this.f = f;
this.ch = ch;
this.meta35900 = meta35900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35901,meta35900__$1){
var self__ = this;
var _35901__$1 = this;
return (new cljs.core.async.t_cljs$core$async35899(self__.f,self__.ch,meta35900__$1));
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35901){
var self__ = this;
var _35901__$1 = this;
return self__.meta35900;
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35902 = (function (f,ch,meta35900,_,fn1,meta35903){
this.f = f;
this.ch = ch;
this.meta35900 = meta35900;
this._ = _;
this.fn1 = fn1;
this.meta35903 = meta35903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35904,meta35903__$1){
var self__ = this;
var _35904__$1 = this;
return (new cljs.core.async.t_cljs$core$async35902(self__.f,self__.ch,self__.meta35900,self__._,self__.fn1,meta35903__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35904){
var self__ = this;
var _35904__$1 = this;
return self__.meta35903;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35898_SHARP_){
return f1.call(null,(((p1__35898_SHARP_ == null))?null:self__.f.call(null,p1__35898_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35902.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35900","meta35900",-5554569,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35899","cljs.core.async/t_cljs$core$async35899",1820940780,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35903","meta35903",-1841924387,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35902";

cljs.core.async.t_cljs$core$async35902.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35902");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35902.
 */
cljs.core.async.__GT_t_cljs$core$async35902 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35902(f__$1,ch__$1,meta35900__$1,___$2,fn1__$1,meta35903){
return (new cljs.core.async.t_cljs$core$async35902(f__$1,ch__$1,meta35900__$1,___$2,fn1__$1,meta35903));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35902(self__.f,self__.ch,self__.meta35900,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35900","meta35900",-5554569,null)], null);
});

cljs.core.async.t_cljs$core$async35899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35899";

cljs.core.async.t_cljs$core$async35899.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35899");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35899.
 */
cljs.core.async.__GT_t_cljs$core$async35899 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35899(f__$1,ch__$1,meta35900){
return (new cljs.core.async.t_cljs$core$async35899(f__$1,ch__$1,meta35900));
});

}

return (new cljs.core.async.t_cljs$core$async35899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35905 = (function (f,ch,meta35906){
this.f = f;
this.ch = ch;
this.meta35906 = meta35906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35907,meta35906__$1){
var self__ = this;
var _35907__$1 = this;
return (new cljs.core.async.t_cljs$core$async35905(self__.f,self__.ch,meta35906__$1));
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35907){
var self__ = this;
var _35907__$1 = this;
return self__.meta35906;
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35906","meta35906",-868682808,null)], null);
});

cljs.core.async.t_cljs$core$async35905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35905";

cljs.core.async.t_cljs$core$async35905.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35905");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35905.
 */
cljs.core.async.__GT_t_cljs$core$async35905 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35905(f__$1,ch__$1,meta35906){
return (new cljs.core.async.t_cljs$core$async35905(f__$1,ch__$1,meta35906));
});

}

return (new cljs.core.async.t_cljs$core$async35905(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35908 = (function (p,ch,meta35909){
this.p = p;
this.ch = ch;
this.meta35909 = meta35909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35910,meta35909__$1){
var self__ = this;
var _35910__$1 = this;
return (new cljs.core.async.t_cljs$core$async35908(self__.p,self__.ch,meta35909__$1));
});

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35910){
var self__ = this;
var _35910__$1 = this;
return self__.meta35909;
});

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35909","meta35909",201266195,null)], null);
});

cljs.core.async.t_cljs$core$async35908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35908";

cljs.core.async.t_cljs$core$async35908.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35908");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35908.
 */
cljs.core.async.__GT_t_cljs$core$async35908 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35908(p__$1,ch__$1,meta35909){
return (new cljs.core.async.t_cljs$core$async35908(p__$1,ch__$1,meta35909));
});

}

return (new cljs.core.async.t_cljs$core$async35908(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35912 = arguments.length;
switch (G__35912) {
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
var c__32549__auto___35952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___35952,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___35952,out){
return (function (state_35933){
var state_val_35934 = (state_35933[(1)]);
if((state_val_35934 === (7))){
var inst_35929 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35935_35953 = state_35933__$1;
(statearr_35935_35953[(2)] = inst_35929);

(statearr_35935_35953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (1))){
var state_35933__$1 = state_35933;
var statearr_35936_35954 = state_35933__$1;
(statearr_35936_35954[(2)] = null);

(statearr_35936_35954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (4))){
var inst_35915 = (state_35933[(7)]);
var inst_35915__$1 = (state_35933[(2)]);
var inst_35916 = (inst_35915__$1 == null);
var state_35933__$1 = (function (){var statearr_35937 = state_35933;
(statearr_35937[(7)] = inst_35915__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35916)){
var statearr_35938_35955 = state_35933__$1;
(statearr_35938_35955[(1)] = (5));

} else {
var statearr_35939_35956 = state_35933__$1;
(statearr_35939_35956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (6))){
var inst_35915 = (state_35933[(7)]);
var inst_35920 = p.call(null,inst_35915);
var state_35933__$1 = state_35933;
if(cljs.core.truth_(inst_35920)){
var statearr_35940_35957 = state_35933__$1;
(statearr_35940_35957[(1)] = (8));

} else {
var statearr_35941_35958 = state_35933__$1;
(statearr_35941_35958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (3))){
var inst_35931 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else {
if((state_val_35934 === (2))){
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(4),ch);
} else {
if((state_val_35934 === (11))){
var inst_35923 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35942_35959 = state_35933__$1;
(statearr_35942_35959[(2)] = inst_35923);

(statearr_35942_35959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (9))){
var state_35933__$1 = state_35933;
var statearr_35943_35960 = state_35933__$1;
(statearr_35943_35960[(2)] = null);

(statearr_35943_35960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (5))){
var inst_35918 = cljs.core.async.close_BANG_.call(null,out);
var state_35933__$1 = state_35933;
var statearr_35944_35961 = state_35933__$1;
(statearr_35944_35961[(2)] = inst_35918);

(statearr_35944_35961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (10))){
var inst_35926 = (state_35933[(2)]);
var state_35933__$1 = (function (){var statearr_35945 = state_35933;
(statearr_35945[(8)] = inst_35926);

return statearr_35945;
})();
var statearr_35946_35962 = state_35933__$1;
(statearr_35946_35962[(2)] = null);

(statearr_35946_35962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35934 === (8))){
var inst_35915 = (state_35933[(7)]);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35933__$1,(11),out,inst_35915);
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
});})(c__32549__auto___35952,out))
;
return ((function (switch__32392__auto__,c__32549__auto___35952,out){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_35947 = [null,null,null,null,null,null,null,null,null];
(statearr_35947[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_35947[(1)] = (1));

return statearr_35947;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_35933){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_35933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e35948){if((e35948 instanceof Object)){
var ex__32396__auto__ = e35948;
var statearr_35949_35963 = state_35933;
(statearr_35949_35963[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35964 = state_35933;
state_35933 = G__35964;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___35952,out))
})();
var state__32551__auto__ = (function (){var statearr_35950 = f__32550__auto__.call(null);
(statearr_35950[(6)] = c__32549__auto___35952);

return statearr_35950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___35952,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35966 = arguments.length;
switch (G__35966) {
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
var c__32549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto__){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto__){
return (function (state_36029){
var state_val_36030 = (state_36029[(1)]);
if((state_val_36030 === (7))){
var inst_36025 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36031_36069 = state_36029__$1;
(statearr_36031_36069[(2)] = inst_36025);

(statearr_36031_36069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (20))){
var inst_35995 = (state_36029[(7)]);
var inst_36006 = (state_36029[(2)]);
var inst_36007 = cljs.core.next.call(null,inst_35995);
var inst_35981 = inst_36007;
var inst_35982 = null;
var inst_35983 = (0);
var inst_35984 = (0);
var state_36029__$1 = (function (){var statearr_36032 = state_36029;
(statearr_36032[(8)] = inst_35984);

(statearr_36032[(9)] = inst_35982);

(statearr_36032[(10)] = inst_36006);

(statearr_36032[(11)] = inst_35981);

(statearr_36032[(12)] = inst_35983);

return statearr_36032;
})();
var statearr_36033_36070 = state_36029__$1;
(statearr_36033_36070[(2)] = null);

(statearr_36033_36070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (1))){
var state_36029__$1 = state_36029;
var statearr_36034_36071 = state_36029__$1;
(statearr_36034_36071[(2)] = null);

(statearr_36034_36071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (4))){
var inst_35970 = (state_36029[(13)]);
var inst_35970__$1 = (state_36029[(2)]);
var inst_35971 = (inst_35970__$1 == null);
var state_36029__$1 = (function (){var statearr_36035 = state_36029;
(statearr_36035[(13)] = inst_35970__$1);

return statearr_36035;
})();
if(cljs.core.truth_(inst_35971)){
var statearr_36036_36072 = state_36029__$1;
(statearr_36036_36072[(1)] = (5));

} else {
var statearr_36037_36073 = state_36029__$1;
(statearr_36037_36073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (15))){
var state_36029__$1 = state_36029;
var statearr_36041_36074 = state_36029__$1;
(statearr_36041_36074[(2)] = null);

(statearr_36041_36074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (21))){
var state_36029__$1 = state_36029;
var statearr_36042_36075 = state_36029__$1;
(statearr_36042_36075[(2)] = null);

(statearr_36042_36075[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (13))){
var inst_35984 = (state_36029[(8)]);
var inst_35982 = (state_36029[(9)]);
var inst_35981 = (state_36029[(11)]);
var inst_35983 = (state_36029[(12)]);
var inst_35991 = (state_36029[(2)]);
var inst_35992 = (inst_35984 + (1));
var tmp36038 = inst_35982;
var tmp36039 = inst_35981;
var tmp36040 = inst_35983;
var inst_35981__$1 = tmp36039;
var inst_35982__$1 = tmp36038;
var inst_35983__$1 = tmp36040;
var inst_35984__$1 = inst_35992;
var state_36029__$1 = (function (){var statearr_36043 = state_36029;
(statearr_36043[(8)] = inst_35984__$1);

(statearr_36043[(9)] = inst_35982__$1);

(statearr_36043[(14)] = inst_35991);

(statearr_36043[(11)] = inst_35981__$1);

(statearr_36043[(12)] = inst_35983__$1);

return statearr_36043;
})();
var statearr_36044_36076 = state_36029__$1;
(statearr_36044_36076[(2)] = null);

(statearr_36044_36076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (22))){
var state_36029__$1 = state_36029;
var statearr_36045_36077 = state_36029__$1;
(statearr_36045_36077[(2)] = null);

(statearr_36045_36077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (6))){
var inst_35970 = (state_36029[(13)]);
var inst_35979 = f.call(null,inst_35970);
var inst_35980 = cljs.core.seq.call(null,inst_35979);
var inst_35981 = inst_35980;
var inst_35982 = null;
var inst_35983 = (0);
var inst_35984 = (0);
var state_36029__$1 = (function (){var statearr_36046 = state_36029;
(statearr_36046[(8)] = inst_35984);

(statearr_36046[(9)] = inst_35982);

(statearr_36046[(11)] = inst_35981);

(statearr_36046[(12)] = inst_35983);

return statearr_36046;
})();
var statearr_36047_36078 = state_36029__$1;
(statearr_36047_36078[(2)] = null);

(statearr_36047_36078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (17))){
var inst_35995 = (state_36029[(7)]);
var inst_35999 = cljs.core.chunk_first.call(null,inst_35995);
var inst_36000 = cljs.core.chunk_rest.call(null,inst_35995);
var inst_36001 = cljs.core.count.call(null,inst_35999);
var inst_35981 = inst_36000;
var inst_35982 = inst_35999;
var inst_35983 = inst_36001;
var inst_35984 = (0);
var state_36029__$1 = (function (){var statearr_36048 = state_36029;
(statearr_36048[(8)] = inst_35984);

(statearr_36048[(9)] = inst_35982);

(statearr_36048[(11)] = inst_35981);

(statearr_36048[(12)] = inst_35983);

return statearr_36048;
})();
var statearr_36049_36079 = state_36029__$1;
(statearr_36049_36079[(2)] = null);

(statearr_36049_36079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (3))){
var inst_36027 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36029__$1,inst_36027);
} else {
if((state_val_36030 === (12))){
var inst_36015 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36050_36080 = state_36029__$1;
(statearr_36050_36080[(2)] = inst_36015);

(statearr_36050_36080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (2))){
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36029__$1,(4),in$);
} else {
if((state_val_36030 === (23))){
var inst_36023 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36051_36081 = state_36029__$1;
(statearr_36051_36081[(2)] = inst_36023);

(statearr_36051_36081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (19))){
var inst_36010 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36052_36082 = state_36029__$1;
(statearr_36052_36082[(2)] = inst_36010);

(statearr_36052_36082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (11))){
var inst_35981 = (state_36029[(11)]);
var inst_35995 = (state_36029[(7)]);
var inst_35995__$1 = cljs.core.seq.call(null,inst_35981);
var state_36029__$1 = (function (){var statearr_36053 = state_36029;
(statearr_36053[(7)] = inst_35995__$1);

return statearr_36053;
})();
if(inst_35995__$1){
var statearr_36054_36083 = state_36029__$1;
(statearr_36054_36083[(1)] = (14));

} else {
var statearr_36055_36084 = state_36029__$1;
(statearr_36055_36084[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (9))){
var inst_36017 = (state_36029[(2)]);
var inst_36018 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36029__$1 = (function (){var statearr_36056 = state_36029;
(statearr_36056[(15)] = inst_36017);

return statearr_36056;
})();
if(cljs.core.truth_(inst_36018)){
var statearr_36057_36085 = state_36029__$1;
(statearr_36057_36085[(1)] = (21));

} else {
var statearr_36058_36086 = state_36029__$1;
(statearr_36058_36086[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (5))){
var inst_35973 = cljs.core.async.close_BANG_.call(null,out);
var state_36029__$1 = state_36029;
var statearr_36059_36087 = state_36029__$1;
(statearr_36059_36087[(2)] = inst_35973);

(statearr_36059_36087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (14))){
var inst_35995 = (state_36029[(7)]);
var inst_35997 = cljs.core.chunked_seq_QMARK_.call(null,inst_35995);
var state_36029__$1 = state_36029;
if(inst_35997){
var statearr_36060_36088 = state_36029__$1;
(statearr_36060_36088[(1)] = (17));

} else {
var statearr_36061_36089 = state_36029__$1;
(statearr_36061_36089[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (16))){
var inst_36013 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36062_36090 = state_36029__$1;
(statearr_36062_36090[(2)] = inst_36013);

(statearr_36062_36090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (10))){
var inst_35984 = (state_36029[(8)]);
var inst_35982 = (state_36029[(9)]);
var inst_35989 = cljs.core._nth.call(null,inst_35982,inst_35984);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36029__$1,(13),out,inst_35989);
} else {
if((state_val_36030 === (18))){
var inst_35995 = (state_36029[(7)]);
var inst_36004 = cljs.core.first.call(null,inst_35995);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36029__$1,(20),out,inst_36004);
} else {
if((state_val_36030 === (8))){
var inst_35984 = (state_36029[(8)]);
var inst_35983 = (state_36029[(12)]);
var inst_35986 = (inst_35984 < inst_35983);
var inst_35987 = inst_35986;
var state_36029__$1 = state_36029;
if(cljs.core.truth_(inst_35987)){
var statearr_36063_36091 = state_36029__$1;
(statearr_36063_36091[(1)] = (10));

} else {
var statearr_36064_36092 = state_36029__$1;
(statearr_36064_36092[(1)] = (11));

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
});})(c__32549__auto__))
;
return ((function (switch__32392__auto__,c__32549__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32393__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32393__auto____0 = (function (){
var statearr_36065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36065[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32393__auto__);

(statearr_36065[(1)] = (1));

return statearr_36065;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32393__auto____1 = (function (state_36029){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_36029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object)){
var ex__32396__auto__ = e36066;
var statearr_36067_36093 = state_36029;
(statearr_36067_36093[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36094 = state_36029;
state_36029 = G__36094;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32393__auto__ = function(state_36029){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32393__auto____1.call(this,state_36029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32393__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32393__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto__))
})();
var state__32551__auto__ = (function (){var statearr_36068 = f__32550__auto__.call(null);
(statearr_36068[(6)] = c__32549__auto__);

return statearr_36068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto__))
);

return c__32549__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36096 = arguments.length;
switch (G__36096) {
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
var G__36099 = arguments.length;
switch (G__36099) {
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
var G__36102 = arguments.length;
switch (G__36102) {
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
var c__32549__auto___36149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___36149,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___36149,out){
return (function (state_36126){
var state_val_36127 = (state_36126[(1)]);
if((state_val_36127 === (7))){
var inst_36121 = (state_36126[(2)]);
var state_36126__$1 = state_36126;
var statearr_36128_36150 = state_36126__$1;
(statearr_36128_36150[(2)] = inst_36121);

(statearr_36128_36150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (1))){
var inst_36103 = null;
var state_36126__$1 = (function (){var statearr_36129 = state_36126;
(statearr_36129[(7)] = inst_36103);

return statearr_36129;
})();
var statearr_36130_36151 = state_36126__$1;
(statearr_36130_36151[(2)] = null);

(statearr_36130_36151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (4))){
var inst_36106 = (state_36126[(8)]);
var inst_36106__$1 = (state_36126[(2)]);
var inst_36107 = (inst_36106__$1 == null);
var inst_36108 = cljs.core.not.call(null,inst_36107);
var state_36126__$1 = (function (){var statearr_36131 = state_36126;
(statearr_36131[(8)] = inst_36106__$1);

return statearr_36131;
})();
if(inst_36108){
var statearr_36132_36152 = state_36126__$1;
(statearr_36132_36152[(1)] = (5));

} else {
var statearr_36133_36153 = state_36126__$1;
(statearr_36133_36153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (6))){
var state_36126__$1 = state_36126;
var statearr_36134_36154 = state_36126__$1;
(statearr_36134_36154[(2)] = null);

(statearr_36134_36154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (3))){
var inst_36123 = (state_36126[(2)]);
var inst_36124 = cljs.core.async.close_BANG_.call(null,out);
var state_36126__$1 = (function (){var statearr_36135 = state_36126;
(statearr_36135[(9)] = inst_36123);

return statearr_36135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36126__$1,inst_36124);
} else {
if((state_val_36127 === (2))){
var state_36126__$1 = state_36126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36126__$1,(4),ch);
} else {
if((state_val_36127 === (11))){
var inst_36106 = (state_36126[(8)]);
var inst_36115 = (state_36126[(2)]);
var inst_36103 = inst_36106;
var state_36126__$1 = (function (){var statearr_36136 = state_36126;
(statearr_36136[(10)] = inst_36115);

(statearr_36136[(7)] = inst_36103);

return statearr_36136;
})();
var statearr_36137_36155 = state_36126__$1;
(statearr_36137_36155[(2)] = null);

(statearr_36137_36155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (9))){
var inst_36106 = (state_36126[(8)]);
var state_36126__$1 = state_36126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36126__$1,(11),out,inst_36106);
} else {
if((state_val_36127 === (5))){
var inst_36103 = (state_36126[(7)]);
var inst_36106 = (state_36126[(8)]);
var inst_36110 = cljs.core._EQ_.call(null,inst_36106,inst_36103);
var state_36126__$1 = state_36126;
if(inst_36110){
var statearr_36139_36156 = state_36126__$1;
(statearr_36139_36156[(1)] = (8));

} else {
var statearr_36140_36157 = state_36126__$1;
(statearr_36140_36157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (10))){
var inst_36118 = (state_36126[(2)]);
var state_36126__$1 = state_36126;
var statearr_36141_36158 = state_36126__$1;
(statearr_36141_36158[(2)] = inst_36118);

(statearr_36141_36158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36127 === (8))){
var inst_36103 = (state_36126[(7)]);
var tmp36138 = inst_36103;
var inst_36103__$1 = tmp36138;
var state_36126__$1 = (function (){var statearr_36142 = state_36126;
(statearr_36142[(7)] = inst_36103__$1);

return statearr_36142;
})();
var statearr_36143_36159 = state_36126__$1;
(statearr_36143_36159[(2)] = null);

(statearr_36143_36159[(1)] = (2));


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
});})(c__32549__auto___36149,out))
;
return ((function (switch__32392__auto__,c__32549__auto___36149,out){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_36144 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36144[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_36144[(1)] = (1));

return statearr_36144;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_36126){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_36126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e36145){if((e36145 instanceof Object)){
var ex__32396__auto__ = e36145;
var statearr_36146_36160 = state_36126;
(statearr_36146_36160[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36161 = state_36126;
state_36126 = G__36161;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_36126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_36126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___36149,out))
})();
var state__32551__auto__ = (function (){var statearr_36147 = f__32550__auto__.call(null);
(statearr_36147[(6)] = c__32549__auto___36149);

return statearr_36147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___36149,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36163 = arguments.length;
switch (G__36163) {
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
var c__32549__auto___36229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___36229,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___36229,out){
return (function (state_36201){
var state_val_36202 = (state_36201[(1)]);
if((state_val_36202 === (7))){
var inst_36197 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
var statearr_36203_36230 = state_36201__$1;
(statearr_36203_36230[(2)] = inst_36197);

(statearr_36203_36230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (1))){
var inst_36164 = (new Array(n));
var inst_36165 = inst_36164;
var inst_36166 = (0);
var state_36201__$1 = (function (){var statearr_36204 = state_36201;
(statearr_36204[(7)] = inst_36166);

(statearr_36204[(8)] = inst_36165);

return statearr_36204;
})();
var statearr_36205_36231 = state_36201__$1;
(statearr_36205_36231[(2)] = null);

(statearr_36205_36231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (4))){
var inst_36169 = (state_36201[(9)]);
var inst_36169__$1 = (state_36201[(2)]);
var inst_36170 = (inst_36169__$1 == null);
var inst_36171 = cljs.core.not.call(null,inst_36170);
var state_36201__$1 = (function (){var statearr_36206 = state_36201;
(statearr_36206[(9)] = inst_36169__$1);

return statearr_36206;
})();
if(inst_36171){
var statearr_36207_36232 = state_36201__$1;
(statearr_36207_36232[(1)] = (5));

} else {
var statearr_36208_36233 = state_36201__$1;
(statearr_36208_36233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (15))){
var inst_36191 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
var statearr_36209_36234 = state_36201__$1;
(statearr_36209_36234[(2)] = inst_36191);

(statearr_36209_36234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (13))){
var state_36201__$1 = state_36201;
var statearr_36210_36235 = state_36201__$1;
(statearr_36210_36235[(2)] = null);

(statearr_36210_36235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (6))){
var inst_36166 = (state_36201[(7)]);
var inst_36187 = (inst_36166 > (0));
var state_36201__$1 = state_36201;
if(cljs.core.truth_(inst_36187)){
var statearr_36211_36236 = state_36201__$1;
(statearr_36211_36236[(1)] = (12));

} else {
var statearr_36212_36237 = state_36201__$1;
(statearr_36212_36237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (3))){
var inst_36199 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36201__$1,inst_36199);
} else {
if((state_val_36202 === (12))){
var inst_36165 = (state_36201[(8)]);
var inst_36189 = cljs.core.vec.call(null,inst_36165);
var state_36201__$1 = state_36201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36201__$1,(15),out,inst_36189);
} else {
if((state_val_36202 === (2))){
var state_36201__$1 = state_36201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36201__$1,(4),ch);
} else {
if((state_val_36202 === (11))){
var inst_36181 = (state_36201[(2)]);
var inst_36182 = (new Array(n));
var inst_36165 = inst_36182;
var inst_36166 = (0);
var state_36201__$1 = (function (){var statearr_36213 = state_36201;
(statearr_36213[(7)] = inst_36166);

(statearr_36213[(10)] = inst_36181);

(statearr_36213[(8)] = inst_36165);

return statearr_36213;
})();
var statearr_36214_36238 = state_36201__$1;
(statearr_36214_36238[(2)] = null);

(statearr_36214_36238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (9))){
var inst_36165 = (state_36201[(8)]);
var inst_36179 = cljs.core.vec.call(null,inst_36165);
var state_36201__$1 = state_36201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36201__$1,(11),out,inst_36179);
} else {
if((state_val_36202 === (5))){
var inst_36166 = (state_36201[(7)]);
var inst_36165 = (state_36201[(8)]);
var inst_36174 = (state_36201[(11)]);
var inst_36169 = (state_36201[(9)]);
var inst_36173 = (inst_36165[inst_36166] = inst_36169);
var inst_36174__$1 = (inst_36166 + (1));
var inst_36175 = (inst_36174__$1 < n);
var state_36201__$1 = (function (){var statearr_36215 = state_36201;
(statearr_36215[(12)] = inst_36173);

(statearr_36215[(11)] = inst_36174__$1);

return statearr_36215;
})();
if(cljs.core.truth_(inst_36175)){
var statearr_36216_36239 = state_36201__$1;
(statearr_36216_36239[(1)] = (8));

} else {
var statearr_36217_36240 = state_36201__$1;
(statearr_36217_36240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (14))){
var inst_36194 = (state_36201[(2)]);
var inst_36195 = cljs.core.async.close_BANG_.call(null,out);
var state_36201__$1 = (function (){var statearr_36219 = state_36201;
(statearr_36219[(13)] = inst_36194);

return statearr_36219;
})();
var statearr_36220_36241 = state_36201__$1;
(statearr_36220_36241[(2)] = inst_36195);

(statearr_36220_36241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (10))){
var inst_36185 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
var statearr_36221_36242 = state_36201__$1;
(statearr_36221_36242[(2)] = inst_36185);

(statearr_36221_36242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (8))){
var inst_36165 = (state_36201[(8)]);
var inst_36174 = (state_36201[(11)]);
var tmp36218 = inst_36165;
var inst_36165__$1 = tmp36218;
var inst_36166 = inst_36174;
var state_36201__$1 = (function (){var statearr_36222 = state_36201;
(statearr_36222[(7)] = inst_36166);

(statearr_36222[(8)] = inst_36165__$1);

return statearr_36222;
})();
var statearr_36223_36243 = state_36201__$1;
(statearr_36223_36243[(2)] = null);

(statearr_36223_36243[(1)] = (2));


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
});})(c__32549__auto___36229,out))
;
return ((function (switch__32392__auto__,c__32549__auto___36229,out){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_36224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36224[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_36224[(1)] = (1));

return statearr_36224;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_36201){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_36201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e36225){if((e36225 instanceof Object)){
var ex__32396__auto__ = e36225;
var statearr_36226_36244 = state_36201;
(statearr_36226_36244[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36245 = state_36201;
state_36201 = G__36245;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_36201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_36201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___36229,out))
})();
var state__32551__auto__ = (function (){var statearr_36227 = f__32550__auto__.call(null);
(statearr_36227[(6)] = c__32549__auto___36229);

return statearr_36227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___36229,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36247 = arguments.length;
switch (G__36247) {
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
var c__32549__auto___36317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32549__auto___36317,out){
return (function (){
var f__32550__auto__ = (function (){var switch__32392__auto__ = ((function (c__32549__auto___36317,out){
return (function (state_36289){
var state_val_36290 = (state_36289[(1)]);
if((state_val_36290 === (7))){
var inst_36285 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36291_36318 = state_36289__$1;
(statearr_36291_36318[(2)] = inst_36285);

(statearr_36291_36318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (1))){
var inst_36248 = [];
var inst_36249 = inst_36248;
var inst_36250 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36289__$1 = (function (){var statearr_36292 = state_36289;
(statearr_36292[(7)] = inst_36249);

(statearr_36292[(8)] = inst_36250);

return statearr_36292;
})();
var statearr_36293_36319 = state_36289__$1;
(statearr_36293_36319[(2)] = null);

(statearr_36293_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (4))){
var inst_36253 = (state_36289[(9)]);
var inst_36253__$1 = (state_36289[(2)]);
var inst_36254 = (inst_36253__$1 == null);
var inst_36255 = cljs.core.not.call(null,inst_36254);
var state_36289__$1 = (function (){var statearr_36294 = state_36289;
(statearr_36294[(9)] = inst_36253__$1);

return statearr_36294;
})();
if(inst_36255){
var statearr_36295_36320 = state_36289__$1;
(statearr_36295_36320[(1)] = (5));

} else {
var statearr_36296_36321 = state_36289__$1;
(statearr_36296_36321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (15))){
var inst_36279 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36297_36322 = state_36289__$1;
(statearr_36297_36322[(2)] = inst_36279);

(statearr_36297_36322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (13))){
var state_36289__$1 = state_36289;
var statearr_36298_36323 = state_36289__$1;
(statearr_36298_36323[(2)] = null);

(statearr_36298_36323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (6))){
var inst_36249 = (state_36289[(7)]);
var inst_36274 = inst_36249.length;
var inst_36275 = (inst_36274 > (0));
var state_36289__$1 = state_36289;
if(cljs.core.truth_(inst_36275)){
var statearr_36299_36324 = state_36289__$1;
(statearr_36299_36324[(1)] = (12));

} else {
var statearr_36300_36325 = state_36289__$1;
(statearr_36300_36325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (3))){
var inst_36287 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36289__$1,inst_36287);
} else {
if((state_val_36290 === (12))){
var inst_36249 = (state_36289[(7)]);
var inst_36277 = cljs.core.vec.call(null,inst_36249);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36289__$1,(15),out,inst_36277);
} else {
if((state_val_36290 === (2))){
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36289__$1,(4),ch);
} else {
if((state_val_36290 === (11))){
var inst_36253 = (state_36289[(9)]);
var inst_36257 = (state_36289[(10)]);
var inst_36267 = (state_36289[(2)]);
var inst_36268 = [];
var inst_36269 = inst_36268.push(inst_36253);
var inst_36249 = inst_36268;
var inst_36250 = inst_36257;
var state_36289__$1 = (function (){var statearr_36301 = state_36289;
(statearr_36301[(7)] = inst_36249);

(statearr_36301[(11)] = inst_36267);

(statearr_36301[(12)] = inst_36269);

(statearr_36301[(8)] = inst_36250);

return statearr_36301;
})();
var statearr_36302_36326 = state_36289__$1;
(statearr_36302_36326[(2)] = null);

(statearr_36302_36326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (9))){
var inst_36249 = (state_36289[(7)]);
var inst_36265 = cljs.core.vec.call(null,inst_36249);
var state_36289__$1 = state_36289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36289__$1,(11),out,inst_36265);
} else {
if((state_val_36290 === (5))){
var inst_36253 = (state_36289[(9)]);
var inst_36250 = (state_36289[(8)]);
var inst_36257 = (state_36289[(10)]);
var inst_36257__$1 = f.call(null,inst_36253);
var inst_36258 = cljs.core._EQ_.call(null,inst_36257__$1,inst_36250);
var inst_36259 = cljs.core.keyword_identical_QMARK_.call(null,inst_36250,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36260 = ((inst_36258) || (inst_36259));
var state_36289__$1 = (function (){var statearr_36303 = state_36289;
(statearr_36303[(10)] = inst_36257__$1);

return statearr_36303;
})();
if(cljs.core.truth_(inst_36260)){
var statearr_36304_36327 = state_36289__$1;
(statearr_36304_36327[(1)] = (8));

} else {
var statearr_36305_36328 = state_36289__$1;
(statearr_36305_36328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (14))){
var inst_36282 = (state_36289[(2)]);
var inst_36283 = cljs.core.async.close_BANG_.call(null,out);
var state_36289__$1 = (function (){var statearr_36307 = state_36289;
(statearr_36307[(13)] = inst_36282);

return statearr_36307;
})();
var statearr_36308_36329 = state_36289__$1;
(statearr_36308_36329[(2)] = inst_36283);

(statearr_36308_36329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (10))){
var inst_36272 = (state_36289[(2)]);
var state_36289__$1 = state_36289;
var statearr_36309_36330 = state_36289__$1;
(statearr_36309_36330[(2)] = inst_36272);

(statearr_36309_36330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36290 === (8))){
var inst_36249 = (state_36289[(7)]);
var inst_36253 = (state_36289[(9)]);
var inst_36257 = (state_36289[(10)]);
var inst_36262 = inst_36249.push(inst_36253);
var tmp36306 = inst_36249;
var inst_36249__$1 = tmp36306;
var inst_36250 = inst_36257;
var state_36289__$1 = (function (){var statearr_36310 = state_36289;
(statearr_36310[(7)] = inst_36249__$1);

(statearr_36310[(8)] = inst_36250);

(statearr_36310[(14)] = inst_36262);

return statearr_36310;
})();
var statearr_36311_36331 = state_36289__$1;
(statearr_36311_36331[(2)] = null);

(statearr_36311_36331[(1)] = (2));


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
});})(c__32549__auto___36317,out))
;
return ((function (switch__32392__auto__,c__32549__auto___36317,out){
return (function() {
var cljs$core$async$state_machine__32393__auto__ = null;
var cljs$core$async$state_machine__32393__auto____0 = (function (){
var statearr_36312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36312[(0)] = cljs$core$async$state_machine__32393__auto__);

(statearr_36312[(1)] = (1));

return statearr_36312;
});
var cljs$core$async$state_machine__32393__auto____1 = (function (state_36289){
while(true){
var ret_value__32394__auto__ = (function (){try{while(true){
var result__32395__auto__ = switch__32392__auto__.call(null,state_36289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32395__auto__;
}
break;
}
}catch (e36313){if((e36313 instanceof Object)){
var ex__32396__auto__ = e36313;
var statearr_36314_36332 = state_36289;
(statearr_36314_36332[(5)] = ex__32396__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36333 = state_36289;
state_36289 = G__36333;
continue;
} else {
return ret_value__32394__auto__;
}
break;
}
});
cljs$core$async$state_machine__32393__auto__ = function(state_36289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32393__auto____1.call(this,state_36289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32393__auto____0;
cljs$core$async$state_machine__32393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32393__auto____1;
return cljs$core$async$state_machine__32393__auto__;
})()
;})(switch__32392__auto__,c__32549__auto___36317,out))
})();
var state__32551__auto__ = (function (){var statearr_36315 = f__32550__auto__.call(null);
(statearr_36315[(6)] = c__32549__auto___36317);

return statearr_36315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32551__auto__);
});})(c__32549__auto___36317,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1528121932514
