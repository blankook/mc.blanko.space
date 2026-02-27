(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const a of i.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
function Oc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var So = {
    exports: {}
}
  , Nl = {}
  , jo = {
    exports: {}
}
  , U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr = Symbol.for("react.element")
  , Fc = Symbol.for("react.portal")
  , Uc = Symbol.for("react.fragment")
  , Bc = Symbol.for("react.strict_mode")
  , bc = Symbol.for("react.profiler")
  , $c = Symbol.for("react.provider")
  , Hc = Symbol.for("react.context")
  , Wc = Symbol.for("react.forward_ref")
  , Vc = Symbol.for("react.suspense")
  , Kc = Symbol.for("react.memo")
  , Qc = Symbol.for("react.lazy")
  , ra = Symbol.iterator;
function qc(e) {
    return e === null || typeof e != "object" ? null : (e = ra && e[ra] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ko = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , No = Object.assign
  , Co = {};
function Tn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Co,
    this.updater = n || ko
}
Tn.prototype.isReactComponent = {};
Tn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Tn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Eo() {}
Eo.prototype = Tn.prototype;
function as(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Co,
    this.updater = n || ko
}
var os = as.prototype = new Eo;
os.constructor = as;
No(os, Tn.prototype);
os.isPureReactComponent = !0;
var la = Array.isArray
  , zo = Object.prototype.hasOwnProperty
  , us = {
    current: null
}
  , Po = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function To(e, t, n) {
    var r, l = {}, i = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            zo.call(t, r) && !Po.hasOwnProperty(r) && (l[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1)
        l.children = n;
    else if (1 < o) {
        for (var u = Array(o), f = 0; f < o; f++)
            u[f] = arguments[f + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in o = e.defaultProps,
        o)
            l[r] === void 0 && (l[r] = o[r]);
    return {
        $$typeof: vr,
        type: e,
        key: i,
        ref: a,
        props: l,
        _owner: us.current
    }
}
function Yc(e, t) {
    return {
        $$typeof: vr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function cs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === vr
}
function Gc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ia = /\/+/g;
function Bl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Gc("" + e.key) : t.toString(36)
}
function $r(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case vr:
            case Fc:
                a = !0
            }
        }
    if (a)
        return a = e,
        l = l(a),
        e = r === "" ? "." + Bl(a, 0) : r,
        la(l) ? (n = "",
        e != null && (n = e.replace(ia, "$&/") + "/"),
        $r(l, t, n, "", function(f) {
            return f
        })) : l != null && (cs(l) && (l = Yc(l, n + (!l.key || a && a.key === l.key ? "" : ("" + l.key).replace(ia, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    la(e))
        for (var o = 0; o < e.length; o++) {
            i = e[o];
            var u = r + Bl(i, o);
            a += $r(i, t, n, u, l)
        }
    else if (u = qc(e),
    typeof u == "function")
        for (e = u.call(e),
        o = 0; !(i = e.next()).done; )
            i = i.value,
            u = r + Bl(i, o++),
            a += $r(i, t, n, u, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function kr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return $r(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function Xc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var we = {
    current: null
}
  , Hr = {
    transition: null
}
  , Zc = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Hr,
    ReactCurrentOwner: us
};
function _o() {
    throw Error("act(...) is not supported in production builds of React.")
}
U.Children = {
    map: kr,
    forEach: function(e, t, n) {
        kr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return kr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return kr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!cs(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
U.Component = Tn;
U.Fragment = Uc;
U.Profiler = bc;
U.PureComponent = as;
U.StrictMode = Bc;
U.Suspense = Vc;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc;
U.act = _o;
U.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = No({}, e.props)
      , l = e.key
      , i = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        a = us.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var o = e.type.defaultProps;
        for (u in t)
            zo.call(t, u) && !Po.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        o = Array(u);
        for (var f = 0; f < u; f++)
            o[f] = arguments[f + 2];
        r.children = o
    }
    return {
        $$typeof: vr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: a
    }
}
;
U.createContext = function(e) {
    return e = {
        $$typeof: Hc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: $c,
        _context: e
    },
    e.Consumer = e
}
;
U.createElement = To;
U.createFactory = function(e) {
    var t = To.bind(null, e);
    return t.type = e,
    t
}
;
U.createRef = function() {
    return {
        current: null
    }
}
;
U.forwardRef = function(e) {
    return {
        $$typeof: Wc,
        render: e
    }
}
;
U.isValidElement = cs;
U.lazy = function(e) {
    return {
        $$typeof: Qc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Xc
    }
}
;
U.memo = function(e, t) {
    return {
        $$typeof: Kc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
U.startTransition = function(e) {
    var t = Hr.transition;
    Hr.transition = {};
    try {
        e()
    } finally {
        Hr.transition = t
    }
}
;
U.unstable_act = _o;
U.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
}
;
U.useContext = function(e) {
    return we.current.useContext(e)
}
;
U.useDebugValue = function() {}
;
U.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
}
;
U.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
}
;
U.useId = function() {
    return we.current.useId()
}
;
U.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
}
;
U.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
}
;
U.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
}
;
U.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
}
;
U.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
}
;
U.useRef = function(e) {
    return we.current.useRef(e)
}
;
U.useState = function(e) {
    return we.current.useState(e)
}
;
U.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
}
;
U.useTransition = function() {
    return we.current.useTransition()
}
;
U.version = "18.3.1";
jo.exports = U;
var j = jo.exports;
const Jc = Oc(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ed = j
  , td = Symbol.for("react.element")
  , nd = Symbol.for("react.fragment")
  , rd = Object.prototype.hasOwnProperty
  , ld = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , id = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Lo(e, t, n) {
    var r, l = {}, i = null, a = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        rd.call(t, r) && !id.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: td,
        type: e,
        key: i,
        ref: a,
        props: l,
        _owner: ld.current
    }
}
Nl.Fragment = nd;
Nl.jsx = Lo;
Nl.jsxs = Lo;
So.exports = Nl;
var s = So.exports
  , hi = {}
  , Mo = {
    exports: {}
}
  , De = {}
  , Ro = {
    exports: {}
}
  , Do = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(z, R) {
        var D = z.length;
        z.push(R);
        e: for (; 0 < D; ) {
            var $ = D - 1 >>> 1
              , F = z[$];
            if (0 < l(F, R))
                z[$] = R,
                z[D] = F,
                D = $;
            else
                break e
        }
    }
    function n(z) {
        return z.length === 0 ? null : z[0]
    }
    function r(z) {
        if (z.length === 0)
            return null;
        var R = z[0]
          , D = z.pop();
        if (D !== R) {
            z[0] = D;
            e: for (var $ = 0, F = z.length, yt = F >>> 1; $ < yt; ) {
                var Te = 2 * ($ + 1) - 1
                  , gt = z[Te]
                  , Oe = Te + 1
                  , x = z[Oe];
                if (0 > l(gt, D))
                    Oe < F && 0 > l(x, gt) ? (z[$] = x,
                    z[Oe] = D,
                    $ = Oe) : (z[$] = gt,
                    z[Te] = D,
                    $ = Te);
                else if (Oe < F && 0 > l(x, D))
                    z[$] = x,
                    z[Oe] = D,
                    $ = Oe;
                else
                    break e
            }
        }
        return R
    }
    function l(z, R) {
        var D = z.sortIndex - R.sortIndex;
        return D !== 0 ? D : z.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date
          , o = a.now();
        e.unstable_now = function() {
            return a.now() - o
        }
    }
    var u = []
      , f = []
      , y = 1
      , h = null
      , m = 3
      , w = !1
      , S = !1
      , v = !1
      , M = typeof setTimeout == "function" ? setTimeout : null
      , d = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(z) {
        for (var R = n(f); R !== null; ) {
            if (R.callback === null)
                r(f);
            else if (R.startTime <= z)
                r(f),
                R.sortIndex = R.expirationTime,
                t(u, R);
            else
                break;
            R = n(f)
        }
    }
    function g(z) {
        if (v = !1,
        p(z),
        !S)
            if (n(u) !== null)
                S = !0,
                Pe(C);
            else {
                var R = n(f);
                R !== null && ie(g, R.startTime - z)
            }
    }
    function C(z, R) {
        S = !1,
        v && (v = !1,
        d(N),
        N = -1),
        w = !0;
        var D = m;
        try {
            for (p(R),
            h = n(u); h !== null && (!(h.expirationTime > R) || z && !O()); ) {
                var $ = h.callback;
                if (typeof $ == "function") {
                    h.callback = null,
                    m = h.priorityLevel;
                    var F = $(h.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof F == "function" ? h.callback = F : h === n(u) && r(u),
                    p(R)
                } else
                    r(u);
                h = n(u)
            }
            if (h !== null)
                var yt = !0;
            else {
                var Te = n(f);
                Te !== null && ie(g, Te.startTime - R),
                yt = !1
            }
            return yt
        } finally {
            h = null,
            m = D,
            w = !1
        }
    }
    var E = !1
      , T = null
      , N = -1
      , I = 5
      , P = -1;
    function O() {
        return !(e.unstable_now() - P < I)
    }
    function Ae() {
        if (T !== null) {
            var z = e.unstable_now();
            P = z;
            var R = !0;
            try {
                R = T(!0, z)
            } finally {
                R ? ne() : (E = !1,
                T = null)
            }
        } else
            E = !1
    }
    var ne;
    if (typeof c == "function")
        ne = function() {
            c(Ae)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var rt = new MessageChannel
          , mt = rt.port2;
        rt.port1.onmessage = Ae,
        ne = function() {
            mt.postMessage(null)
        }
    } else
        ne = function() {
            M(Ae, 0)
        }
        ;
    function Pe(z) {
        T = z,
        E || (E = !0,
        ne())
    }
    function ie(z, R) {
        N = M(function() {
            z(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(z) {
        z.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || w || (S = !0,
        Pe(C))
    }
    ,
    e.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < z ? Math.floor(1e3 / z) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(z) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = m
        }
        var D = m;
        m = R;
        try {
            return z()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(z, R) {
        switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            z = 3
        }
        var D = m;
        m = z;
        try {
            return R()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(z, R, D) {
        var $ = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? $ + D : $) : D = $,
        z) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = D + F,
        z = {
            id: y++,
            callback: R,
            priorityLevel: z,
            startTime: D,
            expirationTime: F,
            sortIndex: -1
        },
        D > $ ? (z.sortIndex = D,
        t(f, z),
        n(u) === null && z === n(f) && (v ? (d(N),
        N = -1) : v = !0,
        ie(g, D - $))) : (z.sortIndex = F,
        t(u, z),
        S || w || (S = !0,
        Pe(C))),
        z
    }
    ,
    e.unstable_shouldYield = O,
    e.unstable_wrapCallback = function(z) {
        var R = m;
        return function() {
            var D = m;
            m = R;
            try {
                return z.apply(this, arguments)
            } finally {
                m = D
            }
        }
    }
}
)(Do);
Ro.exports = Do;
var sd = Ro.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad = j
  , Re = sd;
function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Io = new Set
  , tr = {};
function Zt(e, t) {
    Sn(e, t),
    Sn(e + "Capture", t)
}
function Sn(e, t) {
    for (tr[e] = t,
    e = 0; e < t.length; e++)
        Io.add(t[e])
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , mi = Object.prototype.hasOwnProperty
  , od = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , sa = {}
  , aa = {};
function ud(e) {
    return mi.call(aa, e) ? !0 : mi.call(sa, e) ? !1 : od.test(e) ? aa[e] = !0 : (sa[e] = !0,
    !1)
}
function cd(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function dd(e, t, n, r) {
    if (t === null || typeof t > "u" || cd(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Se(e, t, n, r, l, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = a
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new Se(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    fe[t] = new Se(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new Se(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new Se(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new Se(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new Se(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new Se(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new Se(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new Se(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ds = /[\-:]([a-z])/g;
function fs(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ds, fs);
    fe[t] = new Se(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ds, fs);
    fe[t] = new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ds, fs);
    fe[t] = new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new Se(e,1,!1,e.toLowerCase(),null,!1,!1)
});
fe.xlinkHref = new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new Se(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ps(e, t, n, r) {
    var l = fe.hasOwnProperty(t) ? fe[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dd(t, n, l, r) && (n = null),
    r || l === null ? ud(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pt = ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Nr = Symbol.for("react.element")
  , nn = Symbol.for("react.portal")
  , rn = Symbol.for("react.fragment")
  , hs = Symbol.for("react.strict_mode")
  , yi = Symbol.for("react.profiler")
  , Ao = Symbol.for("react.provider")
  , Oo = Symbol.for("react.context")
  , ms = Symbol.for("react.forward_ref")
  , gi = Symbol.for("react.suspense")
  , vi = Symbol.for("react.suspense_list")
  , ys = Symbol.for("react.memo")
  , xt = Symbol.for("react.lazy")
  , Fo = Symbol.for("react.offscreen")
  , oa = Symbol.iterator;
function Dn(e) {
    return e === null || typeof e != "object" ? null : (e = oa && e[oa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var X = Object.assign, bl;
function $n(e) {
    if (bl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            bl = t && t[1] || ""
        }
    return `
` + bl + e
}
var $l = !1;
function Hl(e, t) {
    if (!e || $l)
        return "";
    $l = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (f) {
                    var r = f
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (f) {
                    r = f
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                r = f
            }
            e()
        }
    } catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (var l = f.stack.split(`
`), i = r.stack.split(`
`), a = l.length - 1, o = i.length - 1; 1 <= a && 0 <= o && l[a] !== i[o]; )
                o--;
            for (; 1 <= a && 0 <= o; a--,
            o--)
                if (l[a] !== i[o]) {
                    if (a !== 1 || o !== 1)
                        do
                            if (a--,
                            o--,
                            0 > o || l[a] !== i[o]) {
                                var u = `
` + l[a].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= a && 0 <= o);
                    break
                }
        }
    } finally {
        $l = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? $n(e) : ""
}
function fd(e) {
    switch (e.tag) {
    case 5:
        return $n(e.type);
    case 16:
        return $n("Lazy");
    case 13:
        return $n("Suspense");
    case 19:
        return $n("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Hl(e.type, !1),
        e;
    case 11:
        return e = Hl(e.type.render, !1),
        e;
    case 1:
        return e = Hl(e.type, !0),
        e;
    default:
        return ""
    }
}
function xi(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case rn:
        return "Fragment";
    case nn:
        return "Portal";
    case yi:
        return "Profiler";
    case hs:
        return "StrictMode";
    case gi:
        return "Suspense";
    case vi:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Oo:
            return (e.displayName || "Context") + ".Consumer";
        case Ao:
            return (e._context.displayName || "Context") + ".Provider";
        case ms:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ys:
            return t = e.displayName || null,
            t !== null ? t : xi(e.type) || "Memo";
        case xt:
            t = e._payload,
            e = e._init;
            try {
                return xi(e(t))
            } catch {}
        }
    return null
}
function pd(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return xi(t);
    case 8:
        return t === hs ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Rt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Uo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function hd(e) {
    var t = Uo(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(a) {
                r = "" + a,
                i.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Cr(e) {
    e._valueTracker || (e._valueTracker = hd(e))
}
function Bo(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Uo(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function el(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function wi(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ua(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Rt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function bo(e, t) {
    t = t.checked,
    t != null && ps(e, "checked", t, !1)
}
function Si(e, t) {
    bo(e, t);
    var n = Rt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ji(e, t.type, n) : t.hasOwnProperty("defaultValue") && ji(e, t.type, Rt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ca(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ji(e, t, n) {
    (t !== "number" || el(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Hn = Array.isArray;
function mn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Rt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ki(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(k(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function da(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(k(92));
            if (Hn(n)) {
                if (1 < n.length)
                    throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Rt(n)
    }
}
function $o(e, t) {
    var n = Rt(t.value)
      , r = Rt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function fa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ho(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ni(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ho(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Er, Wo = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Er = Er || document.createElement("div"),
        Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Er.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function nr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Kn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function(e) {
    md.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Kn[t] = Kn[e]
    })
});
function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px"
}
function Ko(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Vo(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var yd = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ci(e, t) {
    if (t) {
        if (yd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(k(62))
    }
}
function Ei(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var zi = null;
function gs(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Pi = null
  , yn = null
  , gn = null;
function pa(e) {
    if (e = Sr(e)) {
        if (typeof Pi != "function")
            throw Error(k(280));
        var t = e.stateNode;
        t && (t = Tl(t),
        Pi(e.stateNode, e.type, t))
    }
}
function Qo(e) {
    yn ? gn ? gn.push(e) : gn = [e] : yn = e
}
function qo() {
    if (yn) {
        var e = yn
          , t = gn;
        if (gn = yn = null,
        pa(e),
        t)
            for (e = 0; e < t.length; e++)
                pa(t[e])
    }
}
function Yo(e, t) {
    return e(t)
}
function Go() {}
var Wl = !1;
function Xo(e, t, n) {
    if (Wl)
        return e(t, n);
    Wl = !0;
    try {
        return Yo(e, t, n)
    } finally {
        Wl = !1,
        (yn !== null || gn !== null) && (Go(),
        qo())
    }
}
function rr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Tl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(k(231, t, typeof n));
    return n
}
var Ti = !1;
if (ut)
    try {
        var In = {};
        Object.defineProperty(In, "passive", {
            get: function() {
                Ti = !0
            }
        }),
        window.addEventListener("test", In, In),
        window.removeEventListener("test", In, In)
    } catch {
        Ti = !1
    }
function gd(e, t, n, r, l, i, a, o, u) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, f)
    } catch (y) {
        this.onError(y)
    }
}
var Qn = !1
  , tl = null
  , nl = !1
  , _i = null
  , vd = {
    onError: function(e) {
        Qn = !0,
        tl = e
    }
};
function xd(e, t, n, r, l, i, a, o, u) {
    Qn = !1,
    tl = null,
    gd.apply(vd, arguments)
}
function wd(e, t, n, r, l, i, a, o, u) {
    if (xd.apply(this, arguments),
    Qn) {
        if (Qn) {
            var f = tl;
            Qn = !1,
            tl = null
        } else
            throw Error(k(198));
        nl || (nl = !0,
        _i = f)
    }
}
function Jt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Zo(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ha(e) {
    if (Jt(e) !== e)
        throw Error(k(188))
}
function Sd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Jt(e),
        t === null)
            throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return ha(l),
                    e;
                if (i === r)
                    return ha(l),
                    t;
                i = i.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var a = !1, o = l.child; o; ) {
                if (o === n) {
                    a = !0,
                    n = l,
                    r = i;
                    break
                }
                if (o === r) {
                    a = !0,
                    r = l,
                    n = i;
                    break
                }
                o = o.sibling
            }
            if (!a) {
                for (o = i.child; o; ) {
                    if (o === n) {
                        a = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (o === r) {
                        a = !0,
                        r = i,
                        n = l;
                        break
                    }
                    o = o.sibling
                }
                if (!a)
                    throw Error(k(189))
            }
        }
        if (n.alternate !== r)
            throw Error(k(190))
    }
    if (n.tag !== 3)
        throw Error(k(188));
    return n.stateNode.current === n ? e : t
}
function Jo(e) {
    return e = Sd(e),
    e !== null ? eu(e) : null
}
function eu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = eu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var tu = Re.unstable_scheduleCallback
  , ma = Re.unstable_cancelCallback
  , jd = Re.unstable_shouldYield
  , kd = Re.unstable_requestPaint
  , te = Re.unstable_now
  , Nd = Re.unstable_getCurrentPriorityLevel
  , vs = Re.unstable_ImmediatePriority
  , nu = Re.unstable_UserBlockingPriority
  , rl = Re.unstable_NormalPriority
  , Cd = Re.unstable_LowPriority
  , ru = Re.unstable_IdlePriority
  , Cl = null
  , tt = null;
function Ed(e) {
    if (tt && typeof tt.onCommitFiberRoot == "function")
        try {
            tt.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Td
  , zd = Math.log
  , Pd = Math.LN2;
function Td(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (zd(e) / Pd | 0) | 0
}
var zr = 64
  , Pr = 4194304;
function Wn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ll(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var o = a & ~l;
        o !== 0 ? r = Wn(o) : (i &= a,
        i !== 0 && (r = Wn(i)))
    } else
        a = n & ~l,
        a !== 0 ? r = Wn(a) : i !== 0 && (r = Wn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - qe(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function _d(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Ld(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var a = 31 - qe(i)
          , o = 1 << a
          , u = l[a];
        u === -1 ? (!(o & n) || o & r) && (l[a] = _d(o, t)) : u <= t && (e.expiredLanes |= o),
        i &= ~o
    }
}
function Li(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lu() {
    var e = zr;
    return zr <<= 1,
    !(zr & 4194240) && (zr = 64),
    e
}
function Vl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function xr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - qe(t),
    e[t] = n
}
function Md(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - qe(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function xs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - qe(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var W = 0;
function iu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var su, ws, au, ou, uu, Mi = !1, Tr = [], Ct = null, Et = null, zt = null, lr = new Map, ir = new Map, St = [], Rd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ya(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ct = null;
        break;
    case "dragenter":
    case "dragleave":
        Et = null;
        break;
    case "mouseover":
    case "mouseout":
        zt = null;
        break;
    case "pointerover":
    case "pointerout":
        lr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ir.delete(t.pointerId)
    }
}
function An(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = Sr(t),
    t !== null && ws(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Dd(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return Ct = An(Ct, e, t, n, r, l),
        !0;
    case "dragenter":
        return Et = An(Et, e, t, n, r, l),
        !0;
    case "mouseover":
        return zt = An(zt, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return lr.set(i, An(lr.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        ir.set(i, An(ir.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function cu(e) {
    var t = $t(e.target);
    if (t !== null) {
        var n = Jt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Zo(n),
                t !== null) {
                    e.blockedOn = t,
                    uu(e.priority, function() {
                        au(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Wr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            zi = r,
            n.target.dispatchEvent(r),
            zi = null
        } else
            return t = Sr(n),
            t !== null && ws(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ga(e, t, n) {
    Wr(e) && n.delete(t)
}
function Id() {
    Mi = !1,
    Ct !== null && Wr(Ct) && (Ct = null),
    Et !== null && Wr(Et) && (Et = null),
    zt !== null && Wr(zt) && (zt = null),
    lr.forEach(ga),
    ir.forEach(ga)
}
function On(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Mi || (Mi = !0,
    Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Id)))
}
function sr(e) {
    function t(l) {
        return On(l, e)
    }
    if (0 < Tr.length) {
        On(Tr[0], e);
        for (var n = 1; n < Tr.length; n++) {
            var r = Tr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ct !== null && On(Ct, e),
    Et !== null && On(Et, e),
    zt !== null && On(zt, e),
    lr.forEach(t),
    ir.forEach(t),
    n = 0; n < St.length; n++)
        r = St[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < St.length && (n = St[0],
    n.blockedOn === null); )
        cu(n),
        n.blockedOn === null && St.shift()
}
var vn = pt.ReactCurrentBatchConfig
  , il = !0;
function Ad(e, t, n, r) {
    var l = W
      , i = vn.transition;
    vn.transition = null;
    try {
        W = 1,
        Ss(e, t, n, r)
    } finally {
        W = l,
        vn.transition = i
    }
}
function Od(e, t, n, r) {
    var l = W
      , i = vn.transition;
    vn.transition = null;
    try {
        W = 4,
        Ss(e, t, n, r)
    } finally {
        W = l,
        vn.transition = i
    }
}
function Ss(e, t, n, r) {
    if (il) {
        var l = Ri(e, t, n, r);
        if (l === null)
            ti(e, t, r, sl, n),
            ya(e, r);
        else if (Dd(l, e, t, n, r))
            r.stopPropagation();
        else if (ya(e, r),
        t & 4 && -1 < Rd.indexOf(e)) {
            for (; l !== null; ) {
                var i = Sr(l);
                if (i !== null && su(i),
                i = Ri(e, t, n, r),
                i === null && ti(e, t, r, sl, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            ti(e, t, r, null, n)
    }
}
var sl = null;
function Ri(e, t, n, r) {
    if (sl = null,
    e = gs(r),
    e = $t(e),
    e !== null)
        if (t = Jt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Zo(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return sl = e,
    null
}
function du(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Nd()) {
        case vs:
            return 1;
        case nu:
            return 4;
        case rl:
        case Cd:
            return 16;
        case ru:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var kt = null
  , js = null
  , Vr = null;
function fu() {
    if (Vr)
        return Vr;
    var e, t = js, n = t.length, r, l = "value"in kt ? kt.value : kt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[i - r]; r++)
        ;
    return Vr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Kr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function _r() {
    return !0
}
function va() {
    return !1
}
function Ie(e) {
    function t(n, r, l, i, a) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
        for (var o in e)
            e.hasOwnProperty(o) && (n = e[o],
            this[o] = n ? n(i) : i[o]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _r : va,
        this.isPropagationStopped = va,
        this
    }
    return X(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = _r)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = _r)
        },
        persist: function() {},
        isPersistent: _r
    }),
    t
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ks = Ie(_n), wr = X({}, _n, {
    view: 0,
    detail: 0
}), Fd = Ie(wr), Kl, Ql, Fn, El = X({}, wr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ns,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Fn && (Fn && e.type === "mousemove" ? (Kl = e.screenX - Fn.screenX,
        Ql = e.screenY - Fn.screenY) : Ql = Kl = 0,
        Fn = e),
        Kl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ql
    }
}), xa = Ie(El), Ud = X({}, El, {
    dataTransfer: 0
}), Bd = Ie(Ud), bd = X({}, wr, {
    relatedTarget: 0
}), ql = Ie(bd), $d = X({}, _n, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hd = Ie($d), Wd = X({}, _n, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Vd = Ie(Wd), Kd = X({}, _n, {
    data: 0
}), wa = Ie(Kd), Qd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, qd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Yd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Gd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yd[e]) ? !!t[e] : !1
}
function Ns() {
    return Gd
}
var Xd = X({}, wr, {
    key: function(e) {
        if (e.key) {
            var t = Qd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Kr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ns,
    charCode: function(e) {
        return e.type === "keypress" ? Kr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Zd = Ie(Xd)
  , Jd = X({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Sa = Ie(Jd)
  , ef = X({}, wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ns
})
  , tf = Ie(ef)
  , nf = X({}, _n, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , rf = Ie(nf)
  , lf = X({}, El, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , sf = Ie(lf)
  , af = [9, 13, 27, 32]
  , Cs = ut && "CompositionEvent"in window
  , qn = null;
ut && "documentMode"in document && (qn = document.documentMode);
var of = ut && "TextEvent"in window && !qn
  , pu = ut && (!Cs || qn && 8 < qn && 11 >= qn)
  , ja = " "
  , ka = !1;
function hu(e, t) {
    switch (e) {
    case "keyup":
        return af.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function mu(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ln = !1;
function uf(e, t) {
    switch (e) {
    case "compositionend":
        return mu(t);
    case "keypress":
        return t.which !== 32 ? null : (ka = !0,
        ja);
    case "textInput":
        return e = t.data,
        e === ja && ka ? null : e;
    default:
        return null
    }
}
function cf(e, t) {
    if (ln)
        return e === "compositionend" || !Cs && hu(e, t) ? (e = fu(),
        Vr = js = kt = null,
        ln = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return pu && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var df = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!df[e.type] : t === "textarea"
}
function yu(e, t, n, r) {
    Qo(r),
    t = al(t, "onChange"),
    0 < t.length && (n = new ks("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Yn = null
  , ar = null;
function ff(e) {
    zu(e, 0)
}
function zl(e) {
    var t = on(e);
    if (Bo(t))
        return e
}
function pf(e, t) {
    if (e === "change")
        return t
}
var gu = !1;
if (ut) {
    var Yl;
    if (ut) {
        var Gl = "oninput"in document;
        if (!Gl) {
            var Ca = document.createElement("div");
            Ca.setAttribute("oninput", "return;"),
            Gl = typeof Ca.oninput == "function"
        }
        Yl = Gl
    } else
        Yl = !1;
    gu = Yl && (!document.documentMode || 9 < document.documentMode)
}
function Ea() {
    Yn && (Yn.detachEvent("onpropertychange", vu),
    ar = Yn = null)
}
function vu(e) {
    if (e.propertyName === "value" && zl(ar)) {
        var t = [];
        yu(t, ar, e, gs(e)),
        Xo(ff, t)
    }
}
function hf(e, t, n) {
    e === "focusin" ? (Ea(),
    Yn = t,
    ar = n,
    Yn.attachEvent("onpropertychange", vu)) : e === "focusout" && Ea()
}
function mf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zl(ar)
}
function yf(e, t) {
    if (e === "click")
        return zl(t)
}
function gf(e, t) {
    if (e === "input" || e === "change")
        return zl(t)
}
function vf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ge = typeof Object.is == "function" ? Object.is : vf;
function or(e, t) {
    if (Ge(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!mi.call(t, l) || !Ge(e[l], t[l]))
            return !1
    }
    return !0
}
function za(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Pa(e, t) {
    var n = za(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = za(n)
    }
}
function xu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function wu() {
    for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = el(e.document)
    }
    return t
}
function Es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function xf(e) {
    var t = wu()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xu(n.ownerDocument.documentElement, n)) {
        if (r !== null && Es(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = Pa(n, i);
                var a = Pa(n, r);
                l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var wf = ut && "documentMode"in document && 11 >= document.documentMode
  , sn = null
  , Di = null
  , Gn = null
  , Ii = !1;
function Ta(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ii || sn == null || sn !== el(r) || (r = sn,
    "selectionStart"in r && Es(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Gn && or(Gn, r) || (Gn = r,
    r = al(Di, "onSelect"),
    0 < r.length && (t = new ks("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = sn)))
}
function Lr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var an = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd")
}
  , Xl = {}
  , Su = {};
ut && (Su = document.createElement("div").style,
"AnimationEvent"in window || (delete an.animationend.animation,
delete an.animationiteration.animation,
delete an.animationstart.animation),
"TransitionEvent"in window || delete an.transitionend.transition);
function Pl(e) {
    if (Xl[e])
        return Xl[e];
    if (!an[e])
        return e;
    var t = an[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Su)
            return Xl[e] = t[n];
    return e
}
var ju = Pl("animationend")
  , ku = Pl("animationiteration")
  , Nu = Pl("animationstart")
  , Cu = Pl("transitionend")
  , Eu = new Map
  , _a = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
    Eu.set(e, t),
    Zt(t, [e])
}
for (var Zl = 0; Zl < _a.length; Zl++) {
    var Jl = _a[Zl]
      , Sf = Jl.toLowerCase()
      , jf = Jl[0].toUpperCase() + Jl.slice(1);
    It(Sf, "on" + jf)
}
It(ju, "onAnimationEnd");
It(ku, "onAnimationIteration");
It(Nu, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(Cu, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Zt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , kf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));
function La(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    wd(r, t, void 0, e),
    e.currentTarget = null
}
function zu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var o = r[a]
                      , u = o.instance
                      , f = o.currentTarget;
                    if (o = o.listener,
                    u !== i && l.isPropagationStopped())
                        break e;
                    La(l, o, f),
                    i = u
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (o = r[a],
                    u = o.instance,
                    f = o.currentTarget,
                    o = o.listener,
                    u !== i && l.isPropagationStopped())
                        break e;
                    La(l, o, f),
                    i = u
                }
        }
    }
    if (nl)
        throw e = _i,
        nl = !1,
        _i = null,
        e
}
function K(e, t) {
    var n = t[Bi];
    n === void 0 && (n = t[Bi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Pu(t, e, 2, !1),
    n.add(r))
}
function ei(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Pu(n, e, r, t)
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function ur(e) {
    if (!e[Mr]) {
        e[Mr] = !0,
        Io.forEach(function(n) {
            n !== "selectionchange" && (kf.has(n) || ei(n, !1, e),
            ei(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Mr] || (t[Mr] = !0,
        ei("selectionchange", !1, t))
    }
}
function Pu(e, t, n, r) {
    switch (du(t)) {
    case 1:
        var l = Ad;
        break;
    case 4:
        l = Od;
        break;
    default:
        l = Ss
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !Ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function ti(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var o = r.stateNode.containerInfo;
                if (o === l || o.nodeType === 8 && o.parentNode === l)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var u = a.tag;
                        if ((u === 3 || u === 4) && (u = a.stateNode.containerInfo,
                        u === l || u.nodeType === 8 && u.parentNode === l))
                            return;
                        a = a.return
                    }
                for (; o !== null; ) {
                    if (a = $t(o),
                    a === null)
                        return;
                    if (u = a.tag,
                    u === 5 || u === 6) {
                        r = i = a;
                        continue e
                    }
                    o = o.parentNode
                }
            }
            r = r.return
        }
    Xo(function() {
        var f = i
          , y = gs(n)
          , h = [];
        e: {
            var m = Eu.get(e);
            if (m !== void 0) {
                var w = ks
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Kr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Zd;
                    break;
                case "focusin":
                    S = "focus",
                    w = ql;
                    break;
                case "focusout":
                    S = "blur",
                    w = ql;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = ql;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = xa;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = Bd;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = tf;
                    break;
                case ju:
                case ku:
                case Nu:
                    w = Hd;
                    break;
                case Cu:
                    w = rf;
                    break;
                case "scroll":
                    w = Fd;
                    break;
                case "wheel":
                    w = sf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Vd;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = Sa
                }
                var v = (t & 4) !== 0
                  , M = !v && e === "scroll"
                  , d = v ? m !== null ? m + "Capture" : null : m;
                v = [];
                for (var c = f, p; c !== null; ) {
                    p = c;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g,
                    d !== null && (g = rr(c, d),
                    g != null && v.push(cr(c, g, p)))),
                    M)
                        break;
                    c = c.return
                }
                0 < v.length && (m = new w(m,S,null,n,y),
                h.push({
                    event: m,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                m && n !== zi && (S = n.relatedTarget || n.fromElement) && ($t(S) || S[ct]))
                    break e;
                if ((w || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window,
                w ? (S = n.relatedTarget || n.toElement,
                w = f,
                S = S ? $t(S) : null,
                S !== null && (M = Jt(S),
                S !== M || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null,
                S = f),
                w !== S)) {
                    if (v = xa,
                    g = "onMouseLeave",
                    d = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = Sa,
                    g = "onPointerLeave",
                    d = "onPointerEnter",
                    c = "pointer"),
                    M = w == null ? m : on(w),
                    p = S == null ? m : on(S),
                    m = new v(g,c + "leave",w,n,y),
                    m.target = M,
                    m.relatedTarget = p,
                    g = null,
                    $t(y) === f && (v = new v(d,c + "enter",S,n,y),
                    v.target = p,
                    v.relatedTarget = M,
                    g = v),
                    M = g,
                    w && S)
                        t: {
                            for (v = w,
                            d = S,
                            c = 0,
                            p = v; p; p = tn(p))
                                c++;
                            for (p = 0,
                            g = d; g; g = tn(g))
                                p++;
                            for (; 0 < c - p; )
                                v = tn(v),
                                c--;
                            for (; 0 < p - c; )
                                d = tn(d),
                                p--;
                            for (; c--; ) {
                                if (v === d || d !== null && v === d.alternate)
                                    break t;
                                v = tn(v),
                                d = tn(d)
                            }
                            v = null
                        }
                    else
                        v = null;
                    w !== null && Ma(h, m, w, v, !1),
                    S !== null && M !== null && Ma(h, M, S, v, !0)
                }
            }
            e: {
                if (m = f ? on(f) : window,
                w = m.nodeName && m.nodeName.toLowerCase(),
                w === "select" || w === "input" && m.type === "file")
                    var C = pf;
                else if (Na(m))
                    if (gu)
                        C = gf;
                    else {
                        C = mf;
                        var E = hf
                    }
                else
                    (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = yf);
                if (C && (C = C(e, f))) {
                    yu(h, C, n, y);
                    break e
                }
                E && E(e, m, f),
                e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && ji(m, "number", m.value)
            }
            switch (E = f ? on(f) : window,
            e) {
            case "focusin":
                (Na(E) || E.contentEditable === "true") && (sn = E,
                Di = f,
                Gn = null);
                break;
            case "focusout":
                Gn = Di = sn = null;
                break;
            case "mousedown":
                Ii = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ii = !1,
                Ta(h, n, y);
                break;
            case "selectionchange":
                if (wf)
                    break;
            case "keydown":
            case "keyup":
                Ta(h, n, y)
            }
            var T;
            if (Cs)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                ln ? hu(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (pu && n.locale !== "ko" && (ln || N !== "onCompositionStart" ? N === "onCompositionEnd" && ln && (T = fu()) : (kt = y,
            js = "value"in kt ? kt.value : kt.textContent,
            ln = !0)),
            E = al(f, N),
            0 < E.length && (N = new wa(N,e,null,n,y),
            h.push({
                event: N,
                listeners: E
            }),
            T ? N.data = T : (T = mu(n),
            T !== null && (N.data = T)))),
            (T = of ? uf(e, n) : cf(e, n)) && (f = al(f, "onBeforeInput"),
            0 < f.length && (y = new wa("onBeforeInput","beforeinput",null,n,y),
            h.push({
                event: y,
                listeners: f
            }),
            y.data = T))
        }
        zu(h, t)
    })
}
function cr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function al(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = rr(e, n),
        i != null && r.unshift(cr(e, i, l)),
        i = rr(e, t),
        i != null && r.push(cr(e, i, l))),
        e = e.return
    }
    return r
}
function tn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ma(e, t, n, r, l) {
    for (var i = t._reactName, a = []; n !== null && n !== r; ) {
        var o = n
          , u = o.alternate
          , f = o.stateNode;
        if (u !== null && u === r)
            break;
        o.tag === 5 && f !== null && (o = f,
        l ? (u = rr(n, i),
        u != null && a.unshift(cr(n, u, o))) : l || (u = rr(n, i),
        u != null && a.push(cr(n, u, o)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var Nf = /\r\n?/g
  , Cf = /\u0000|\uFFFD/g;
function Ra(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nf, `
`).replace(Cf, "")
}
function Rr(e, t, n) {
    if (t = Ra(t),
    Ra(e) !== t && n)
        throw Error(k(425))
}
function ol() {}
var Ai = null
  , Oi = null;
function Fi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0
  , Ef = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Da = typeof Promise == "function" ? Promise : void 0
  , zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Da < "u" ? function(e) {
    return Da.resolve(null).then(e).catch(Pf)
}
: Ui;
function Pf(e) {
    setTimeout(function() {
        throw e
    })
}
function ni(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    sr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    sr(t)
}
function Pt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Ia(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ln = Math.random().toString(36).slice(2)
  , et = "__reactFiber$" + Ln
  , dr = "__reactProps$" + Ln
  , ct = "__reactContainer$" + Ln
  , Bi = "__reactEvents$" + Ln
  , Tf = "__reactListeners$" + Ln
  , _f = "__reactHandles$" + Ln;
function $t(e) {
    var t = e[et];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[ct] || n[et]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Ia(e); e !== null; ) {
                    if (n = e[et])
                        return n;
                    e = Ia(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Sr(e) {
    return e = e[et] || e[ct],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function on(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(k(33))
}
function Tl(e) {
    return e[dr] || null
}
var bi = []
  , un = -1;
function At(e) {
    return {
        current: e
    }
}
function Q(e) {
    0 > un || (e.current = bi[un],
    bi[un] = null,
    un--)
}
function V(e, t) {
    un++,
    bi[un] = e.current,
    e.current = t
}
var Dt = {}
  , ge = At(Dt)
  , Ce = At(!1)
  , Qt = Dt;
function jn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function Ee(e) {
    return e = e.childContextTypes,
    e != null
}
function ul() {
    Q(Ce),
    Q(ge)
}
function Aa(e, t, n) {
    if (ge.current !== Dt)
        throw Error(k(168));
    V(ge, t),
    V(Ce, n)
}
function Tu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(k(108, pd(e) || "Unknown", l));
    return X({}, n, r)
}
function cl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt,
    Qt = ge.current,
    V(ge, e),
    V(Ce, Ce.current),
    !0
}
function Oa(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(k(169));
    n ? (e = Tu(e, t, Qt),
    r.__reactInternalMemoizedMergedChildContext = e,
    Q(Ce),
    Q(ge),
    V(ge, e)) : Q(Ce),
    V(Ce, n)
}
var it = null
  , _l = !1
  , ri = !1;
function _u(e) {
    it === null ? it = [e] : it.push(e)
}
function Lf(e) {
    _l = !0,
    _u(e)
}
function Ot() {
    if (!ri && it !== null) {
        ri = !0;
        var e = 0
          , t = W;
        try {
            var n = it;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            it = null,
            _l = !1
        } catch (l) {
            throw it !== null && (it = it.slice(e + 1)),
            tu(vs, Ot),
            l
        } finally {
            W = t,
            ri = !1
        }
    }
    return null
}
var cn = []
  , dn = 0
  , dl = null
  , fl = 0
  , Fe = []
  , Ue = 0
  , qt = null
  , st = 1
  , at = "";
function Bt(e, t) {
    cn[dn++] = fl,
    cn[dn++] = dl,
    dl = e,
    fl = t
}
function Lu(e, t, n) {
    Fe[Ue++] = st,
    Fe[Ue++] = at,
    Fe[Ue++] = qt,
    qt = e;
    var r = st;
    e = at;
    var l = 32 - qe(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - qe(t) + l;
    if (30 < i) {
        var a = l - l % 5;
        i = (r & (1 << a) - 1).toString(32),
        r >>= a,
        l -= a,
        st = 1 << 32 - qe(t) + l | n << l | r,
        at = i + e
    } else
        st = 1 << i | n << l | r,
        at = e
}
function zs(e) {
    e.return !== null && (Bt(e, 1),
    Lu(e, 1, 0))
}
function Ps(e) {
    for (; e === dl; )
        dl = cn[--dn],
        cn[dn] = null,
        fl = cn[--dn],
        cn[dn] = null;
    for (; e === qt; )
        qt = Fe[--Ue],
        Fe[Ue] = null,
        at = Fe[--Ue],
        Fe[Ue] = null,
        st = Fe[--Ue],
        Fe[Ue] = null
}
var Me = null
  , Le = null
  , q = !1
  , Qe = null;
function Mu(e, t) {
    var n = Be(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Fa(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Me = e,
        Le = Pt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Me = e,
        Le = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = qt !== null ? {
            id: st,
            overflow: at
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Be(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Me = e,
        Le = null,
        !0) : !1;
    default:
        return !1
    }
}
function $i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Hi(e) {
    if (q) {
        var t = Le;
        if (t) {
            var n = t;
            if (!Fa(e, t)) {
                if ($i(e))
                    throw Error(k(418));
                t = Pt(n.nextSibling);
                var r = Me;
                t && Fa(e, t) ? Mu(r, n) : (e.flags = e.flags & -4097 | 2,
                q = !1,
                Me = e)
            }
        } else {
            if ($i(e))
                throw Error(k(418));
            e.flags = e.flags & -4097 | 2,
            q = !1,
            Me = e
        }
    }
}
function Ua(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Me = e
}
function Dr(e) {
    if (e !== Me)
        return !1;
    if (!q)
        return Ua(e),
        q = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps)),
    t && (t = Le)) {
        if ($i(e))
            throw Ru(),
            Error(k(418));
        for (; t; )
            Mu(e, t),
            t = Pt(t.nextSibling)
    }
    if (Ua(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(k(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Pt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else
        Le = Me ? Pt(e.stateNode.nextSibling) : null;
    return !0
}
function Ru() {
    for (var e = Le; e; )
        e = Pt(e.nextSibling)
}
function kn() {
    Le = Me = null,
    q = !1
}
function Ts(e) {
    Qe === null ? Qe = [e] : Qe.push(e)
}
var Mf = pt.ReactCurrentBatchConfig;
function Un(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(k(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(k(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var o = l.refs;
                a === null ? delete o[i] : o[i] = a
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(k(284));
        if (!n._owner)
            throw Error(k(290, e))
    }
    return e
}
function Ir(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ba(e) {
    var t = e._init;
    return t(e._payload)
}
function Du(e) {
    function t(d, c) {
        if (e) {
            var p = d.deletions;
            p === null ? (d.deletions = [c],
            d.flags |= 16) : p.push(c)
        }
    }
    function n(d, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(d, c),
            c = c.sibling;
        return null
    }
    function r(d, c) {
        for (d = new Map; c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
            c = c.sibling;
        return d
    }
    function l(d, c) {
        return d = Mt(d, c),
        d.index = 0,
        d.sibling = null,
        d
    }
    function i(d, c, p) {
        return d.index = p,
        e ? (p = d.alternate,
        p !== null ? (p = p.index,
        p < c ? (d.flags |= 2,
        c) : p) : (d.flags |= 2,
        c)) : (d.flags |= 1048576,
        c)
    }
    function a(d) {
        return e && d.alternate === null && (d.flags |= 2),
        d
    }
    function o(d, c, p, g) {
        return c === null || c.tag !== 6 ? (c = ci(p, d.mode, g),
        c.return = d,
        c) : (c = l(c, p),
        c.return = d,
        c)
    }
    function u(d, c, p, g) {
        var C = p.type;
        return C === rn ? y(d, c, p.props.children, g, p.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === xt && Ba(C) === c.type) ? (g = l(c, p.props),
        g.ref = Un(d, c, p),
        g.return = d,
        g) : (g = Jr(p.type, p.key, p.props, null, d.mode, g),
        g.ref = Un(d, c, p),
        g.return = d,
        g)
    }
    function f(d, c, p, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = di(p, d.mode, g),
        c.return = d,
        c) : (c = l(c, p.children || []),
        c.return = d,
        c)
    }
    function y(d, c, p, g, C) {
        return c === null || c.tag !== 7 ? (c = Kt(p, d.mode, g, C),
        c.return = d,
        c) : (c = l(c, p),
        c.return = d,
        c)
    }
    function h(d, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = ci("" + c, d.mode, p),
            c.return = d,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Nr:
                return p = Jr(c.type, c.key, c.props, null, d.mode, p),
                p.ref = Un(d, null, c),
                p.return = d,
                p;
            case nn:
                return c = di(c, d.mode, p),
                c.return = d,
                c;
            case xt:
                var g = c._init;
                return h(d, g(c._payload), p)
            }
            if (Hn(c) || Dn(c))
                return c = Kt(c, d.mode, p, null),
                c.return = d,
                c;
            Ir(d, c)
        }
        return null
    }
    function m(d, c, p, g) {
        var C = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return C !== null ? null : o(d, c, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Nr:
                return p.key === C ? u(d, c, p, g) : null;
            case nn:
                return p.key === C ? f(d, c, p, g) : null;
            case xt:
                return C = p._init,
                m(d, c, C(p._payload), g)
            }
            if (Hn(p) || Dn(p))
                return C !== null ? null : y(d, c, p, g, null);
            Ir(d, p)
        }
        return null
    }
    function w(d, c, p, g, C) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return d = d.get(p) || null,
            o(c, d, "" + g, C);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Nr:
                return d = d.get(g.key === null ? p : g.key) || null,
                u(c, d, g, C);
            case nn:
                return d = d.get(g.key === null ? p : g.key) || null,
                f(c, d, g, C);
            case xt:
                var E = g._init;
                return w(d, c, p, E(g._payload), C)
            }
            if (Hn(g) || Dn(g))
                return d = d.get(p) || null,
                y(c, d, g, C, null);
            Ir(c, g)
        }
        return null
    }
    function S(d, c, p, g) {
        for (var C = null, E = null, T = c, N = c = 0, I = null; T !== null && N < p.length; N++) {
            T.index > N ? (I = T,
            T = null) : I = T.sibling;
            var P = m(d, T, p[N], g);
            if (P === null) {
                T === null && (T = I);
                break
            }
            e && T && P.alternate === null && t(d, T),
            c = i(P, c, N),
            E === null ? C = P : E.sibling = P,
            E = P,
            T = I
        }
        if (N === p.length)
            return n(d, T),
            q && Bt(d, N),
            C;
        if (T === null) {
            for (; N < p.length; N++)
                T = h(d, p[N], g),
                T !== null && (c = i(T, c, N),
                E === null ? C = T : E.sibling = T,
                E = T);
            return q && Bt(d, N),
            C
        }
        for (T = r(d, T); N < p.length; N++)
            I = w(T, d, N, p[N], g),
            I !== null && (e && I.alternate !== null && T.delete(I.key === null ? N : I.key),
            c = i(I, c, N),
            E === null ? C = I : E.sibling = I,
            E = I);
        return e && T.forEach(function(O) {
            return t(d, O)
        }),
        q && Bt(d, N),
        C
    }
    function v(d, c, p, g) {
        var C = Dn(p);
        if (typeof C != "function")
            throw Error(k(150));
        if (p = C.call(p),
        p == null)
            throw Error(k(151));
        for (var E = C = null, T = c, N = c = 0, I = null, P = p.next(); T !== null && !P.done; N++,
        P = p.next()) {
            T.index > N ? (I = T,
            T = null) : I = T.sibling;
            var O = m(d, T, P.value, g);
            if (O === null) {
                T === null && (T = I);
                break
            }
            e && T && O.alternate === null && t(d, T),
            c = i(O, c, N),
            E === null ? C = O : E.sibling = O,
            E = O,
            T = I
        }
        if (P.done)
            return n(d, T),
            q && Bt(d, N),
            C;
        if (T === null) {
            for (; !P.done; N++,
            P = p.next())
                P = h(d, P.value, g),
                P !== null && (c = i(P, c, N),
                E === null ? C = P : E.sibling = P,
                E = P);
            return q && Bt(d, N),
            C
        }
        for (T = r(d, T); !P.done; N++,
        P = p.next())
            P = w(T, d, N, P.value, g),
            P !== null && (e && P.alternate !== null && T.delete(P.key === null ? N : P.key),
            c = i(P, c, N),
            E === null ? C = P : E.sibling = P,
            E = P);
        return e && T.forEach(function(Ae) {
            return t(d, Ae)
        }),
        q && Bt(d, N),
        C
    }
    function M(d, c, p, g) {
        if (typeof p == "object" && p !== null && p.type === rn && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Nr:
                e: {
                    for (var C = p.key, E = c; E !== null; ) {
                        if (E.key === C) {
                            if (C = p.type,
                            C === rn) {
                                if (E.tag === 7) {
                                    n(d, E.sibling),
                                    c = l(E, p.props.children),
                                    c.return = d,
                                    d = c;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === xt && Ba(C) === E.type) {
                                n(d, E.sibling),
                                c = l(E, p.props),
                                c.ref = Un(d, E, p),
                                c.return = d,
                                d = c;
                                break e
                            }
                            n(d, E);
                            break
                        } else
                            t(d, E);
                        E = E.sibling
                    }
                    p.type === rn ? (c = Kt(p.props.children, d.mode, g, p.key),
                    c.return = d,
                    d = c) : (g = Jr(p.type, p.key, p.props, null, d.mode, g),
                    g.ref = Un(d, c, p),
                    g.return = d,
                    d = g)
                }
                return a(d);
            case nn:
                e: {
                    for (E = p.key; c !== null; ) {
                        if (c.key === E)
                            if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                n(d, c.sibling),
                                c = l(c, p.children || []),
                                c.return = d,
                                d = c;
                                break e
                            } else {
                                n(d, c);
                                break
                            }
                        else
                            t(d, c);
                        c = c.sibling
                    }
                    c = di(p, d.mode, g),
                    c.return = d,
                    d = c
                }
                return a(d);
            case xt:
                return E = p._init,
                M(d, c, E(p._payload), g)
            }
            if (Hn(p))
                return S(d, c, p, g);
            if (Dn(p))
                return v(d, c, p, g);
            Ir(d, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        c !== null && c.tag === 6 ? (n(d, c.sibling),
        c = l(c, p),
        c.return = d,
        d = c) : (n(d, c),
        c = ci(p, d.mode, g),
        c.return = d,
        d = c),
        a(d)) : n(d, c)
    }
    return M
}
var Nn = Du(!0)
  , Iu = Du(!1)
  , pl = At(null)
  , hl = null
  , fn = null
  , _s = null;
function Ls() {
    _s = fn = hl = null
}
function Ms(e) {
    var t = pl.current;
    Q(pl),
    e._currentValue = t
}
function Wi(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function xn(e, t) {
    hl = e,
    _s = fn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0),
    e.firstContext = null)
}
function $e(e) {
    var t = e._currentValue;
    if (_s !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        fn === null) {
            if (hl === null)
                throw Error(k(308));
            fn = e,
            hl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            fn = fn.next = e;
    return t
}
var Ht = null;
function Rs(e) {
    Ht === null ? Ht = [e] : Ht.push(e)
}
function Au(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    Rs(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    dt(e, r)
}
function dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var wt = !1;
function Ds(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ou(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ot(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Tt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    B & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        dt(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    Rs(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    dt(e, n)
}
function Qr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xs(e, n)
    }
}
function ba(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = a : i = i.next = a,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ml(e, t, n, r) {
    var l = e.updateQueue;
    wt = !1;
    var i = l.firstBaseUpdate
      , a = l.lastBaseUpdate
      , o = l.shared.pending;
    if (o !== null) {
        l.shared.pending = null;
        var u = o
          , f = u.next;
        u.next = null,
        a === null ? i = f : a.next = f,
        a = u;
        var y = e.alternate;
        y !== null && (y = y.updateQueue,
        o = y.lastBaseUpdate,
        o !== a && (o === null ? y.firstBaseUpdate = f : o.next = f,
        y.lastBaseUpdate = u))
    }
    if (i !== null) {
        var h = l.baseState;
        a = 0,
        y = f = u = null,
        o = i;
        do {
            var m = o.lane
              , w = o.eventTime;
            if ((r & m) === m) {
                y !== null && (y = y.next = {
                    eventTime: w,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var S = e
                      , v = o;
                    switch (m = t,
                    w = n,
                    v.tag) {
                    case 1:
                        if (S = v.payload,
                        typeof S == "function") {
                            h = S.call(w, h, m);
                            break e
                        }
                        h = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = v.payload,
                        m = typeof S == "function" ? S.call(w, h, m) : S,
                        m == null)
                            break e;
                        h = X({}, h, m);
                        break e;
                    case 2:
                        wt = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [o] : m.push(o))
            } else
                w = {
                    eventTime: w,
                    lane: m,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                },
                y === null ? (f = y = w,
                u = h) : y = y.next = w,
                a |= m;
            if (o = o.next,
            o === null) {
                if (o = l.shared.pending,
                o === null)
                    break;
                m = o,
                o = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (y === null && (u = h),
        l.baseState = u,
        l.firstBaseUpdate = f,
        l.lastBaseUpdate = y,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                a |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Gt |= a,
        e.lanes = a,
        e.memoizedState = h
    }
}
function $a(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(k(191, l));
                l.call(r)
            }
        }
}
var jr = {}
  , nt = At(jr)
  , fr = At(jr)
  , pr = At(jr);
function Wt(e) {
    if (e === jr)
        throw Error(k(174));
    return e
}
function Is(e, t) {
    switch (V(pr, t),
    V(fr, e),
    V(nt, jr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ni(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ni(t, e)
    }
    Q(nt),
    V(nt, t)
}
function Cn() {
    Q(nt),
    Q(fr),
    Q(pr)
}
function Fu(e) {
    Wt(pr.current);
    var t = Wt(nt.current)
      , n = Ni(t, e.type);
    t !== n && (V(fr, e),
    V(nt, n))
}
function As(e) {
    fr.current === e && (Q(nt),
    Q(fr))
}
var Y = At(0);
function yl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var li = [];
function Os() {
    for (var e = 0; e < li.length; e++)
        li[e]._workInProgressVersionPrimary = null;
    li.length = 0
}
var qr = pt.ReactCurrentDispatcher
  , ii = pt.ReactCurrentBatchConfig
  , Yt = 0
  , G = null
  , se = null
  , oe = null
  , gl = !1
  , Xn = !1
  , hr = 0
  , Rf = 0;
function he() {
    throw Error(k(321))
}
function Fs(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ge(e[n], t[n]))
            return !1;
    return !0
}
function Us(e, t, n, r, l, i) {
    if (Yt = i,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    qr.current = e === null || e.memoizedState === null ? Of : Ff,
    e = n(r, l),
    Xn) {
        i = 0;
        do {
            if (Xn = !1,
            hr = 0,
            25 <= i)
                throw Error(k(301));
            i += 1,
            oe = se = null,
            t.updateQueue = null,
            qr.current = Uf,
            e = n(r, l)
        } while (Xn)
    }
    if (qr.current = vl,
    t = se !== null && se.next !== null,
    Yt = 0,
    oe = se = G = null,
    gl = !1,
    t)
        throw Error(k(300));
    return e
}
function Bs() {
    var e = hr !== 0;
    return hr = 0,
    e
}
function Je() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? G.memoizedState = oe = e : oe = oe.next = e,
    oe
}
function He() {
    if (se === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = se.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null)
        oe = t,
        se = e;
    else {
        if (e === null)
            throw Error(k(310));
        se = e,
        e = {
            memoizedState: se.memoizedState,
            baseState: se.baseState,
            baseQueue: se.baseQueue,
            queue: se.queue,
            next: null
        },
        oe === null ? G.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}
function mr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function si(e) {
    var t = He()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = se
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var a = l.next;
            l.next = i.next,
            i.next = a
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var o = a = null
          , u = null
          , f = i;
        do {
            var y = f.lane;
            if ((Yt & y) === y)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                }),
                r = f.hasEagerState ? f.eagerState : e(r, f.action);
            else {
                var h = {
                    lane: y,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                u === null ? (o = u = h,
                a = r) : u = u.next = h,
                G.lanes |= y,
                Gt |= y
            }
            f = f.next
        } while (f !== null && f !== i);
        u === null ? a = r : u.next = o,
        Ge(r, t.memoizedState) || (Ne = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            G.lanes |= i,
            Gt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ai(e) {
    var t = He()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var a = l = l.next;
        do
            i = e(i, a.action),
            a = a.next;
        while (a !== l);
        Ge(i, t.memoizedState) || (Ne = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Uu() {}
function Bu(e, t) {
    var n = G
      , r = He()
      , l = t()
      , i = !Ge(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    Ne = !0),
    r = r.queue,
    bs(Hu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        yr(9, $u.bind(null, n, r, l, t), void 0, null),
        ue === null)
            throw Error(k(349));
        Yt & 30 || bu(n, t, l)
    }
    return l
}
function bu(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function $u(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Wu(t) && Vu(e)
}
function Hu(e, t, n) {
    return n(function() {
        Wu(t) && Vu(e)
    })
}
function Wu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ge(e, n)
    } catch {
        return !0
    }
}
function Vu(e) {
    var t = dt(e, 1);
    t !== null && Ye(t, e, 1, -1)
}
function Ha(e) {
    var t = Je();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Af.bind(null, G, e),
    [t.memoizedState, e]
}
function yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Ku() {
    return He().memoizedState
}
function Yr(e, t, n, r) {
    var l = Je();
    G.flags |= e,
    l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ll(e, t, n, r) {
    var l = He();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (se !== null) {
        var a = se.memoizedState;
        if (i = a.destroy,
        r !== null && Fs(r, a.deps)) {
            l.memoizedState = yr(t, n, i, r);
            return
        }
    }
    G.flags |= e,
    l.memoizedState = yr(1 | t, n, i, r)
}
function Wa(e, t) {
    return Yr(8390656, 8, e, t)
}
function bs(e, t) {
    return Ll(2048, 8, e, t)
}
function Qu(e, t) {
    return Ll(4, 2, e, t)
}
function qu(e, t) {
    return Ll(4, 4, e, t)
}
function Yu(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Gu(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ll(4, 4, Yu.bind(null, t, e), n)
}
function $s() {}
function Xu(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fs(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Zu(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fs(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ju(e, t, n) {
    return Yt & 21 ? (Ge(n, t) || (n = lu(),
    G.lanes |= n,
    Gt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ne = !0),
    e.memoizedState = n)
}
function Df(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ii.transition;
    ii.transition = {};
    try {
        e(!1),
        t()
    } finally {
        W = n,
        ii.transition = r
    }
}
function ec() {
    return He().memoizedState
}
function If(e, t, n) {
    var r = Lt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    tc(e))
        nc(t, n);
    else if (n = Au(e, t, n, r),
    n !== null) {
        var l = xe();
        Ye(n, e, r, l),
        rc(n, t, r)
    }
}
function Af(e, t, n) {
    var r = Lt(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (tc(e))
        nc(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var a = t.lastRenderedState
                  , o = i(a, n);
                if (l.hasEagerState = !0,
                l.eagerState = o,
                Ge(o, a)) {
                    var u = t.interleaved;
                    u === null ? (l.next = l,
                    Rs(t)) : (l.next = u.next,
                    u.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Au(e, t, l, r),
        n !== null && (l = xe(),
        Ye(n, e, r, l),
        rc(n, t, r))
    }
}
function tc(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function nc(e, t) {
    Xn = gl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function rc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xs(e, n)
    }
}
var vl = {
    readContext: $e,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1
}
  , Of = {
    readContext: $e,
    useCallback: function(e, t) {
        return Je().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: $e,
    useEffect: Wa,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Yr(4194308, 4, Yu.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Yr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Yr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Je();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Je();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = If.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Je();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ha,
    useDebugValue: $s,
    useDeferredValue: function(e) {
        return Je().memoizedState = e
    },
    useTransition: function() {
        var e = Ha(!1)
          , t = e[0];
        return e = Df.bind(null, e[1]),
        Je().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = G
          , l = Je();
        if (q) {
            if (n === void 0)
                throw Error(k(407));
            n = n()
        } else {
            if (n = t(),
            ue === null)
                throw Error(k(349));
            Yt & 30 || bu(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        Wa(Hu.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        yr(9, $u.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Je()
          , t = ue.identifierPrefix;
        if (q) {
            var n = at
              , r = st;
            n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = hr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Rf++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Ff = {
    readContext: $e,
    useCallback: Xu,
    useContext: $e,
    useEffect: bs,
    useImperativeHandle: Gu,
    useInsertionEffect: Qu,
    useLayoutEffect: qu,
    useMemo: Zu,
    useReducer: si,
    useRef: Ku,
    useState: function() {
        return si(mr)
    },
    useDebugValue: $s,
    useDeferredValue: function(e) {
        var t = He();
        return Ju(t, se.memoizedState, e)
    },
    useTransition: function() {
        var e = si(mr)[0]
          , t = He().memoizedState;
        return [e, t]
    },
    useMutableSource: Uu,
    useSyncExternalStore: Bu,
    useId: ec,
    unstable_isNewReconciler: !1
}
  , Uf = {
    readContext: $e,
    useCallback: Xu,
    useContext: $e,
    useEffect: bs,
    useImperativeHandle: Gu,
    useInsertionEffect: Qu,
    useLayoutEffect: qu,
    useMemo: Zu,
    useReducer: ai,
    useRef: Ku,
    useState: function() {
        return ai(mr)
    },
    useDebugValue: $s,
    useDeferredValue: function(e) {
        var t = He();
        return se === null ? t.memoizedState = e : Ju(t, se.memoizedState, e)
    },
    useTransition: function() {
        var e = ai(mr)[0]
          , t = He().memoizedState;
        return [e, t]
    },
    useMutableSource: Uu,
    useSyncExternalStore: Bu,
    useId: ec,
    unstable_isNewReconciler: !1
};
function Ve(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Vi(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : X({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ml = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Jt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , l = Lt(e)
          , i = ot(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = Tt(e, i, l),
        t !== null && (Ye(t, e, l, r),
        Qr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , l = Lt(e)
          , i = ot(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Tt(e, i, l),
        t !== null && (Ye(t, e, l, r),
        Qr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe()
          , r = Lt(e)
          , l = ot(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = Tt(e, l, r),
        t !== null && (Ye(t, e, r, n),
        Qr(t, e, r))
    }
};
function Va(e, t, n, r, l, i, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !or(n, r) || !or(l, i) : !0
}
function lc(e, t, n) {
    var r = !1
      , l = Dt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = $e(i) : (l = Ee(t) ? Qt : ge.current,
    r = t.contextTypes,
    i = (r = r != null) ? jn(e, l) : Dt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ml,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Ka(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ml.enqueueReplaceState(t, t.state, null)
}
function Ki(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Ds(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = $e(i) : (i = Ee(t) ? Qt : ge.current,
    l.context = jn(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Vi(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && Ml.enqueueReplaceState(l, l.state, null),
    ml(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function En(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += fd(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function oi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Qi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Bf = typeof WeakMap == "function" ? WeakMap : Map;
function ic(e, t, n) {
    n = ot(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        wl || (wl = !0,
        rs = r),
        Qi(e, t)
    }
    ,
    n
}
function sc(e, t, n) {
    n = ot(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Qi(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Qi(e, t),
        typeof r != "function" && (_t === null ? _t = new Set([this]) : _t.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function Qa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Bf;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = ep.bind(null, e, t, n),
    t.then(e, e))
}
function qa(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ya(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ot(-1, 1),
    t.tag = 2,
    Tt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var bf = pt.ReactCurrentOwner
  , Ne = !1;
function ve(e, t, n, r) {
    t.child = e === null ? Iu(t, null, n, r) : Nn(t, e.child, n, r)
}
function Ga(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return xn(t, l),
    r = Us(e, t, n, r, i, l),
    n = Bs(),
    e !== null && !Ne ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    ft(e, t, l)) : (q && n && zs(t),
    t.flags |= 1,
    ve(e, t, r, l),
    t.child)
}
function Xa(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Gs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        ac(e, t, i, r, l)) : (e = Jr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var a = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : or,
        n(a, r) && e.ref === t.ref)
            return ft(e, t, l)
    }
    return t.flags |= 1,
    e = Mt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ac(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (or(i, r) && e.ref === t.ref)
            if (Ne = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (Ne = !0);
            else
                return t.lanes = e.lanes,
                ft(e, t, l)
    }
    return qi(e, t, n, r, l)
}
function oc(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            V(hn, _e),
            _e |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                V(hn, _e),
                _e |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            V(hn, _e),
            _e |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        V(hn, _e),
        _e |= r;
    return ve(e, t, l, n),
    t.child
}
function uc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function qi(e, t, n, r, l) {
    var i = Ee(n) ? Qt : ge.current;
    return i = jn(t, i),
    xn(t, l),
    n = Us(e, t, n, r, i, l),
    r = Bs(),
    e !== null && !Ne ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    ft(e, t, l)) : (q && r && zs(t),
    t.flags |= 1,
    ve(e, t, n, l),
    t.child)
}
function Za(e, t, n, r, l) {
    if (Ee(n)) {
        var i = !0;
        cl(t)
    } else
        i = !1;
    if (xn(t, l),
    t.stateNode === null)
        Gr(e, t),
        lc(t, n, r),
        Ki(t, n, r, l),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , o = t.memoizedProps;
        a.props = o;
        var u = a.context
          , f = n.contextType;
        typeof f == "object" && f !== null ? f = $e(f) : (f = Ee(n) ? Qt : ge.current,
        f = jn(t, f));
        var y = n.getDerivedStateFromProps
          , h = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        h || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== r || u !== f) && Ka(t, a, r, f),
        wt = !1;
        var m = t.memoizedState;
        a.state = m,
        ml(t, r, a, l),
        u = t.memoizedState,
        o !== r || m !== u || Ce.current || wt ? (typeof y == "function" && (Vi(t, n, y, r),
        u = t.memoizedState),
        (o = wt || Va(t, n, o, r, m, u, f)) ? (h || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        a.props = r,
        a.state = u,
        a.context = f,
        r = o) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Ou(e, t),
        o = t.memoizedProps,
        f = t.type === t.elementType ? o : Ve(t.type, o),
        a.props = f,
        h = t.pendingProps,
        m = a.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = $e(u) : (u = Ee(n) ? Qt : ge.current,
        u = jn(t, u));
        var w = n.getDerivedStateFromProps;
        (y = typeof w == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== h || m !== u) && Ka(t, a, r, u),
        wt = !1,
        m = t.memoizedState,
        a.state = m,
        ml(t, r, a, l);
        var S = t.memoizedState;
        o !== h || m !== S || Ce.current || wt ? (typeof w == "function" && (Vi(t, n, w, r),
        S = t.memoizedState),
        (f = wt || Va(t, n, f, r, m, S, u) || !1) ? (y || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, S, u),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, S, u)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        a.props = r,
        a.state = S,
        a.context = u,
        r = f) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Yi(e, t, n, r, i, l)
}
function Yi(e, t, n, r, l, i) {
    uc(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return l && Oa(t, n, !1),
        ft(e, t, i);
    r = t.stateNode,
    bf.current = t;
    var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Nn(t, e.child, null, i),
    t.child = Nn(t, null, o, i)) : ve(e, t, o, i),
    t.memoizedState = r.state,
    l && Oa(t, n, !0),
    t.child
}
function cc(e) {
    var t = e.stateNode;
    t.pendingContext ? Aa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Aa(e, t.context, !1),
    Is(e, t.containerInfo)
}
function Ja(e, t, n, r, l) {
    return kn(),
    Ts(l),
    t.flags |= 256,
    ve(e, t, n, r),
    t.child
}
var Gi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Xi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function dc(e, t, n) {
    var r = t.pendingProps, l = Y.current, i = !1, a = (t.flags & 128) !== 0, o;
    if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    V(Y, l & 1),
    e === null)
        return Hi(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = a) : i = Il(a, r, 0, null),
        e = Kt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Xi(n),
        t.memoizedState = Gi,
        e) : Hs(t, a));
    if (l = e.memoizedState,
    l !== null && (o = l.dehydrated,
    o !== null))
        return $f(e, t, a, r, o, l, n);
    if (i) {
        i = r.fallback,
        a = t.mode,
        l = e.child,
        o = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = Mt(l, u),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        o !== null ? i = Mt(o, i) : (i = Kt(i, a, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        a = e.child.memoizedState,
        a = a === null ? Xi(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        i.memoizedState = a,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Gi,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Mt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Hs(e, t) {
    return t = Il({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ar(e, t, n, r) {
    return r !== null && Ts(r),
    Nn(t, e.child, null, n),
    e = Hs(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function $f(e, t, n, r, l, i, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = oi(Error(k(422))),
        Ar(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = Il({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Kt(i, l, a, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Nn(t, e.child, null, a),
        t.child.memoizedState = Xi(a),
        t.memoizedState = Gi,
        i);
    if (!(t.mode & 1))
        return Ar(e, t, a, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var o = r.dgst;
        return r = o,
        i = Error(k(419)),
        r = oi(i, r, void 0),
        Ar(e, t, a, r)
    }
    if (o = (a & e.childLanes) !== 0,
    Ne || o) {
        if (r = ue,
        r !== null) {
            switch (a & -a) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | a) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            dt(e, l),
            Ye(r, e, l, -1))
        }
        return Ys(),
        r = oi(Error(k(421))),
        Ar(e, t, a, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = tp.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    Le = Pt(l.nextSibling),
    Me = t,
    q = !0,
    Qe = null,
    e !== null && (Fe[Ue++] = st,
    Fe[Ue++] = at,
    Fe[Ue++] = qt,
    st = e.id,
    at = e.overflow,
    qt = t),
    t = Hs(t, r.children),
    t.flags |= 4096,
    t)
}
function eo(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Wi(e.return, t, n)
}
function ui(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function fc(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (ve(e, t, r.children, n),
    r = Y.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && eo(e, n, t);
                else if (e.tag === 19)
                    eo(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (V(Y, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && yl(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            ui(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && yl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            ui(t, !0, n, null, i);
            break;
        case "together":
            ui(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Gr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ft(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Gt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Mt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Mt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Hf(e, t, n) {
    switch (t.tag) {
    case 3:
        cc(t),
        kn();
        break;
    case 5:
        Fu(t);
        break;
    case 1:
        Ee(t.type) && cl(t);
        break;
    case 4:
        Is(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        V(pl, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (V(Y, Y.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? dc(e, t, n) : (V(Y, Y.current & 1),
            e = ft(e, t, n),
            e !== null ? e.sibling : null);
        V(Y, Y.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return fc(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        V(Y, Y.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        oc(e, t, n)
    }
    return ft(e, t, n)
}
var pc, Zi, hc, mc;
pc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Zi = function() {}
;
hc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Wt(nt.current);
        var i = null;
        switch (n) {
        case "input":
            l = wi(e, l),
            r = wi(e, r),
            i = [];
            break;
        case "select":
            l = X({}, l, {
                value: void 0
            }),
            r = X({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = ki(e, l),
            r = ki(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol)
        }
        Ci(n, r);
        var a;
        n = null;
        for (f in l)
            if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
                if (f === "style") {
                    var o = l[f];
                    for (a in o)
                        o.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (tr.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
        for (f in r) {
            var u = r[f];
            if (o = l != null ? l[f] : void 0,
            r.hasOwnProperty(f) && u !== o && (u != null || o != null))
                if (f === "style")
                    if (o) {
                        for (a in o)
                            !o.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in u)
                            u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}),
                            n[a] = u[a])
                    } else
                        n || (i || (i = []),
                        i.push(f, n)),
                        n = u;
                else
                    f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    o = o ? o.__html : void 0,
                    u != null && o !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (tr.hasOwnProperty(f) ? (u != null && f === "onScroll" && K("scroll", e),
                    i || o === u || (i = [])) : (i = i || []).push(f, u))
        }
        n && (i = i || []).push("style", n);
        var f = i;
        (t.updateQueue = f) && (t.flags |= 4)
    }
}
;
mc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Bn(e, t) {
    if (!q)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Wf(e, t, n) {
    var r = t.pendingProps;
    switch (Ps(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return me(t),
        null;
    case 1:
        return Ee(t.type) && ul(),
        me(t),
        null;
    case 3:
        return r = t.stateNode,
        Cn(),
        Q(Ce),
        Q(ge),
        Os(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Dr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Qe !== null && (ss(Qe),
        Qe = null))),
        Zi(e, t),
        me(t),
        null;
    case 5:
        As(t);
        var l = Wt(pr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            hc(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(k(166));
                return me(t),
                null
            }
            if (e = Wt(nt.current),
            Dr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[et] = t,
                r[dr] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    K("cancel", r),
                    K("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    K("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Vn.length; l++)
                        K(Vn[l], r);
                    break;
                case "source":
                    K("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    K("error", r),
                    K("load", r);
                    break;
                case "details":
                    K("toggle", r);
                    break;
                case "input":
                    ua(r, i),
                    K("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    K("invalid", r);
                    break;
                case "textarea":
                    da(r, i),
                    K("invalid", r)
                }
                Ci(n, i),
                l = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var o = i[a];
                        a === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && Rr(r.textContent, o, e),
                        l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && Rr(r.textContent, o, e),
                        l = ["children", "" + o]) : tr.hasOwnProperty(a) && o != null && a === "onScroll" && K("scroll", r)
                    }
                switch (n) {
                case "input":
                    Cr(r),
                    ca(r, i, !0);
                    break;
                case "textarea":
                    Cr(r),
                    fa(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ol)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ho(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[et] = t,
                e[dr] = r,
                pc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = Ei(n, r),
                    n) {
                    case "dialog":
                        K("cancel", e),
                        K("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        K("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Vn.length; l++)
                            K(Vn[l], e);
                        l = r;
                        break;
                    case "source":
                        K("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        K("error", e),
                        K("load", e),
                        l = r;
                        break;
                    case "details":
                        K("toggle", e),
                        l = r;
                        break;
                    case "input":
                        ua(e, r),
                        l = wi(e, r),
                        K("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = X({}, r, {
                            value: void 0
                        }),
                        K("invalid", e);
                        break;
                    case "textarea":
                        da(e, r),
                        l = ki(e, r),
                        K("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Ci(n, l),
                    o = l;
                    for (i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "style" ? Ko(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Wo(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && nr(e, u) : typeof u == "number" && nr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (tr.hasOwnProperty(i) ? u != null && i === "onScroll" && K("scroll", e) : u != null && ps(e, i, u, a))
                        }
                    switch (n) {
                    case "input":
                        Cr(e),
                        ca(e, r, !1);
                        break;
                    case "textarea":
                        Cr(e),
                        fa(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Rt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? mn(e, !!r.multiple, i, !1) : r.defaultValue != null && mn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = ol)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return me(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            mc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(k(166));
            if (n = Wt(pr.current),
            Wt(nt.current),
            Dr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[et] = t,
                (i = r.nodeValue !== n) && (e = Me,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Rr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[et] = t,
                t.stateNode = r
        }
        return me(t),
        null;
    case 13:
        if (Q(Y),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (q && Le !== null && t.mode & 1 && !(t.flags & 128))
                Ru(),
                kn(),
                t.flags |= 98560,
                i = !1;
            else if (i = Dr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(k(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(k(317));
                    i[et] = t
                } else
                    kn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                me(t),
                i = !1
            } else
                Qe !== null && (ss(Qe),
                Qe = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Y.current & 1 ? ae === 0 && (ae = 3) : Ys())),
        t.updateQueue !== null && (t.flags |= 4),
        me(t),
        null);
    case 4:
        return Cn(),
        Zi(e, t),
        e === null && ur(t.stateNode.containerInfo),
        me(t),
        null;
    case 10:
        return Ms(t.type._context),
        me(t),
        null;
    case 17:
        return Ee(t.type) && ul(),
        me(t),
        null;
    case 19:
        if (Q(Y),
        i = t.memoizedState,
        i === null)
            return me(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = i.rendering,
        a === null)
            if (r)
                Bn(i, !1);
            else {
                if (ae !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = yl(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Bn(i, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                a = i.alternate,
                                a === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = a.childLanes,
                                i.lanes = a.lanes,
                                i.child = a.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = a.memoizedProps,
                                i.memoizedState = a.memoizedState,
                                i.updateQueue = a.updateQueue,
                                i.type = a.type,
                                e = a.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return V(Y, Y.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && te() > zn && (t.flags |= 128,
                r = !0,
                Bn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = yl(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Bn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !a.alternate && !q)
                        return me(t),
                        null
                } else
                    2 * te() - i.renderingStartTime > zn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Bn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = i.last,
            n !== null ? n.sibling = a : t.child = a,
            i.last = a)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = te(),
        t.sibling = null,
        n = Y.current,
        V(Y, r ? n & 1 | 2 : n & 1),
        t) : (me(t),
        null);
    case 22:
    case 23:
        return qs(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? _e & 1073741824 && (me(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(k(156, t.tag))
}
function Vf(e, t) {
    switch (Ps(t),
    t.tag) {
    case 1:
        return Ee(t.type) && ul(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Cn(),
        Q(Ce),
        Q(ge),
        Os(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return As(t),
        null;
    case 13:
        if (Q(Y),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(k(340));
            kn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Q(Y),
        null;
    case 4:
        return Cn(),
        null;
    case 10:
        return Ms(t.type._context),
        null;
    case 22:
    case 23:
        return qs(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Or = !1
  , ye = !1
  , Kf = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function pn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Z(e, t, r)
            }
        else
            n.current = null
}
function Ji(e, t, n) {
    try {
        n()
    } catch (r) {
        Z(e, t, r)
    }
}
var to = !1;
function Qf(e, t) {
    if (Ai = il,
    e = wu(),
    Es(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , o = -1
                      , u = -1
                      , f = 0
                      , y = 0
                      , h = e
                      , m = null;
                    t: for (; ; ) {
                        for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (o = a + l),
                        h !== i || r !== 0 && h.nodeType !== 3 || (u = a + r),
                        h.nodeType === 3 && (a += h.nodeValue.length),
                        (w = h.firstChild) !== null; )
                            m = h,
                            h = w;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (m === n && ++f === l && (o = a),
                            m === i && ++y === r && (u = a),
                            (w = h.nextSibling) !== null)
                                break;
                            h = m,
                            m = h.parentNode
                        }
                        h = w
                    }
                    n = o === -1 || u === -1 ? null : {
                        start: o,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Oi = {
        focusedElem: e,
        selectionRange: n
    },
    il = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var v = S.memoizedProps
                                  , M = S.memoizedState
                                  , d = t.stateNode
                                  , c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ve(t.type, v), M);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                        }
                } catch (g) {
                    Z(t, t.return, g)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return S = to,
    to = !1,
    S
}
function Zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Ji(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function Rl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function es(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function yc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    yc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[et],
    delete t[dr],
    delete t[Bi],
    delete t[Tf],
    delete t[_f])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function gc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function no(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || gc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ts(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ts(e, t, n),
        e = e.sibling; e !== null; )
            ts(e, t, n),
            e = e.sibling
}
function ns(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ns(e, t, n),
        e = e.sibling; e !== null; )
            ns(e, t, n),
            e = e.sibling
}
var ce = null
  , Ke = !1;
function vt(e, t, n) {
    for (n = n.child; n !== null; )
        vc(e, t, n),
        n = n.sibling
}
function vc(e, t, n) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
        try {
            tt.onCommitFiberUnmount(Cl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ye || pn(n, t);
    case 6:
        var r = ce
          , l = Ke;
        ce = null,
        vt(e, t, n),
        ce = r,
        Ke = l,
        ce !== null && (Ke ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
        break;
    case 18:
        ce !== null && (Ke ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? ni(e.parentNode, n) : e.nodeType === 1 && ni(e, n),
        sr(e)) : ni(ce, n.stateNode));
        break;
    case 4:
        r = ce,
        l = Ke,
        ce = n.stateNode.containerInfo,
        Ke = !0,
        vt(e, t, n),
        ce = r,
        Ke = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ye && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , a = i.destroy;
                i = i.tag,
                a !== void 0 && (i & 2 || i & 4) && Ji(n, t, a),
                l = l.next
            } while (l !== r)
        }
        vt(e, t, n);
        break;
    case 1:
        if (!ye && (pn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (o) {
                Z(n, t, o)
            }
        vt(e, t, n);
        break;
    case 21:
        vt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null,
        vt(e, t, n),
        ye = r) : vt(e, t, n);
        break;
    default:
        vt(e, t, n)
    }
}
function ro(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Kf),
        t.forEach(function(r) {
            var l = np.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function We(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , a = t
                  , o = a;
                e: for (; o !== null; ) {
                    switch (o.tag) {
                    case 5:
                        ce = o.stateNode,
                        Ke = !1;
                        break e;
                    case 3:
                        ce = o.stateNode.containerInfo,
                        Ke = !0;
                        break e;
                    case 4:
                        ce = o.stateNode.containerInfo,
                        Ke = !0;
                        break e
                    }
                    o = o.return
                }
                if (ce === null)
                    throw Error(k(160));
                vc(i, a, l),
                ce = null,
                Ke = !1;
                var u = l.alternate;
                u !== null && (u.return = null),
                l.return = null
            } catch (f) {
                Z(l, t, f)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            xc(t, e),
            t = t.sibling
}
function xc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (We(t, e),
        Ze(e),
        r & 4) {
            try {
                Zn(3, e, e.return),
                Rl(3, e)
            } catch (v) {
                Z(e, e.return, v)
            }
            try {
                Zn(5, e, e.return)
            } catch (v) {
                Z(e, e.return, v)
            }
        }
        break;
    case 1:
        We(t, e),
        Ze(e),
        r & 512 && n !== null && pn(n, n.return);
        break;
    case 5:
        if (We(t, e),
        Ze(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                nr(l, "")
            } catch (v) {
                Z(e, e.return, v)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , a = n !== null ? n.memoizedProps : i
              , o = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    o === "input" && i.type === "radio" && i.name != null && bo(l, i),
                    Ei(o, a);
                    var f = Ei(o, i);
                    for (a = 0; a < u.length; a += 2) {
                        var y = u[a]
                          , h = u[a + 1];
                        y === "style" ? Ko(l, h) : y === "dangerouslySetInnerHTML" ? Wo(l, h) : y === "children" ? nr(l, h) : ps(l, y, h, f)
                    }
                    switch (o) {
                    case "input":
                        Si(l, i);
                        break;
                    case "textarea":
                        $o(l, i);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var w = i.value;
                        w != null ? mn(l, !!i.multiple, w, !1) : m !== !!i.multiple && (i.defaultValue != null ? mn(l, !!i.multiple, i.defaultValue, !0) : mn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[dr] = i
                } catch (v) {
                    Z(e, e.return, v)
                }
        }
        break;
    case 6:
        if (We(t, e),
        Ze(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(k(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (v) {
                Z(e, e.return, v)
            }
        }
        break;
    case 3:
        if (We(t, e),
        Ze(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                sr(t.containerInfo)
            } catch (v) {
                Z(e, e.return, v)
            }
        break;
    case 4:
        We(t, e),
        Ze(e);
        break;
    case 13:
        We(t, e),
        Ze(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ks = te())),
        r & 4 && ro(e);
        break;
    case 22:
        if (y = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ye = (f = ye) || y,
        We(t, e),
        ye = f) : We(t, e),
        Ze(e),
        r & 8192) {
            if (f = e.memoizedState !== null,
            (e.stateNode.isHidden = f) && !y && e.mode & 1)
                for (_ = e,
                y = e.child; y !== null; ) {
                    for (h = _ = y; _ !== null; ) {
                        switch (m = _,
                        w = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Zn(4, m, m.return);
                            break;
                        case 1:
                            pn(m, m.return);
                            var S = m.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (v) {
                                    Z(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            pn(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                io(h);
                                continue
                            }
                        }
                        w !== null ? (w.return = m,
                        _ = w) : io(h)
                    }
                    y = y.sibling
                }
            e: for (y = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (y === null) {
                        y = h;
                        try {
                            l = h.stateNode,
                            f ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = h.stateNode,
                            u = h.memoizedProps.style,
                            a = u != null && u.hasOwnProperty("display") ? u.display : null,
                            o.style.display = Vo("display", a))
                        } catch (v) {
                            Z(e, e.return, v)
                        }
                    }
                } else if (h.tag === 6) {
                    if (y === null)
                        try {
                            h.stateNode.nodeValue = f ? "" : h.memoizedProps
                        } catch (v) {
                            Z(e, e.return, v)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    y === h && (y = null),
                    h = h.return
                }
                y === h && (y = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        We(t, e),
        Ze(e),
        r & 4 && ro(e);
        break;
    case 21:
        break;
    default:
        We(t, e),
        Ze(e)
    }
}
function Ze(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (gc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (nr(l, ""),
                r.flags &= -33);
                var i = no(e);
                ns(e, i, l);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , o = no(e);
                ts(e, o, a);
                break;
            default:
                throw Error(k(161))
            }
        } catch (u) {
            Z(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function qf(e, t, n) {
    _ = e,
    wc(e)
}
function wc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var l = _
          , i = l.child;
        if (l.tag === 22 && r) {
            var a = l.memoizedState !== null || Or;
            if (!a) {
                var o = l.alternate
                  , u = o !== null && o.memoizedState !== null || ye;
                o = Or;
                var f = ye;
                if (Or = a,
                (ye = u) && !f)
                    for (_ = l; _ !== null; )
                        a = _,
                        u = a.child,
                        a.tag === 22 && a.memoizedState !== null ? so(l) : u !== null ? (u.return = a,
                        _ = u) : so(l);
                for (; i !== null; )
                    _ = i,
                    wc(i),
                    i = i.sibling;
                _ = l,
                Or = o,
                ye = f
            }
            lo(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            _ = i) : lo(e)
    }
}
function lo(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || Rl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && $a(t, i, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            $a(t, a, n)
                        }
                        break;
                    case 5:
                        var o = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = o;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var f = t.alternate;
                            if (f !== null) {
                                var y = f.memoizedState;
                                if (y !== null) {
                                    var h = y.dehydrated;
                                    h !== null && sr(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                    }
                ye || t.flags & 512 && es(t)
            } catch (m) {
                Z(t, t.return, m)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function io(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function so(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Rl(4, t)
                } catch (u) {
                    Z(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        Z(t, l, u)
                    }
                }
                var i = t.return;
                try {
                    es(t)
                } catch (u) {
                    Z(t, i, u)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    es(t)
                } catch (u) {
                    Z(t, a, u)
                }
            }
        } catch (u) {
            Z(t, t.return, u)
        }
        if (t === e) {
            _ = null;
            break
        }
        var o = t.sibling;
        if (o !== null) {
            o.return = t.return,
            _ = o;
            break
        }
        _ = t.return
    }
}
var Yf = Math.ceil
  , xl = pt.ReactCurrentDispatcher
  , Ws = pt.ReactCurrentOwner
  , be = pt.ReactCurrentBatchConfig
  , B = 0
  , ue = null
  , le = null
  , de = 0
  , _e = 0
  , hn = At(0)
  , ae = 0
  , gr = null
  , Gt = 0
  , Dl = 0
  , Vs = 0
  , Jn = null
  , ke = null
  , Ks = 0
  , zn = 1 / 0
  , lt = null
  , wl = !1
  , rs = null
  , _t = null
  , Fr = !1
  , Nt = null
  , Sl = 0
  , er = 0
  , ls = null
  , Xr = -1
  , Zr = 0;
function xe() {
    return B & 6 ? te() : Xr !== -1 ? Xr : Xr = te()
}
function Lt(e) {
    return e.mode & 1 ? B & 2 && de !== 0 ? de & -de : Mf.transition !== null ? (Zr === 0 && (Zr = lu()),
    Zr) : (e = W,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : du(e.type)),
    e) : 1
}
function Ye(e, t, n, r) {
    if (50 < er)
        throw er = 0,
        ls = null,
        Error(k(185));
    xr(e, n, r),
    (!(B & 2) || e !== ue) && (e === ue && (!(B & 2) && (Dl |= n),
    ae === 4 && jt(e, de)),
    ze(e, r),
    n === 1 && B === 0 && !(t.mode & 1) && (zn = te() + 500,
    _l && Ot()))
}
function ze(e, t) {
    var n = e.callbackNode;
    Ld(e, t);
    var r = ll(e, e === ue ? de : 0);
    if (r === 0)
        n !== null && ma(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ma(n),
        t === 1)
            e.tag === 0 ? Lf(ao.bind(null, e)) : _u(ao.bind(null, e)),
            zf(function() {
                !(B & 6) && Ot()
            }),
            n = null;
        else {
            switch (iu(r)) {
            case 1:
                n = vs;
                break;
            case 4:
                n = nu;
                break;
            case 16:
                n = rl;
                break;
            case 536870912:
                n = ru;
                break;
            default:
                n = rl
            }
            n = Pc(n, Sc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Sc(e, t) {
    if (Xr = -1,
    Zr = 0,
    B & 6)
        throw Error(k(327));
    var n = e.callbackNode;
    if (wn() && e.callbackNode !== n)
        return null;
    var r = ll(e, e === ue ? de : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = jl(e, r);
    else {
        t = r;
        var l = B;
        B |= 2;
        var i = kc();
        (ue !== e || de !== t) && (lt = null,
        zn = te() + 500,
        Vt(e, t));
        do
            try {
                Zf();
                break
            } catch (o) {
                jc(e, o)
            }
        while (!0);
        Ls(),
        xl.current = i,
        B = l,
        le !== null ? t = 0 : (ue = null,
        de = 0,
        t = ae)
    }
    if (t !== 0) {
        if (t === 2 && (l = Li(e),
        l !== 0 && (r = l,
        t = is(e, l))),
        t === 1)
            throw n = gr,
            Vt(e, 0),
            jt(e, r),
            ze(e, te()),
            n;
        if (t === 6)
            jt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Gf(l) && (t = jl(e, r),
            t === 2 && (i = Li(e),
            i !== 0 && (r = i,
            t = is(e, i))),
            t === 1))
                throw n = gr,
                Vt(e, 0),
                jt(e, r),
                ze(e, te()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(k(345));
            case 2:
                bt(e, ke, lt);
                break;
            case 3:
                if (jt(e, r),
                (r & 130023424) === r && (t = Ks + 500 - te(),
                10 < t)) {
                    if (ll(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        xe(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Ui(bt.bind(null, e, ke, lt), t);
                    break
                }
                bt(e, ke, lt);
                break;
            case 4:
                if (jt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var a = 31 - qe(r);
                    i = 1 << a,
                    a = t[a],
                    a > l && (l = a),
                    r &= ~i
                }
                if (r = l,
                r = te() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yf(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ui(bt.bind(null, e, ke, lt), r);
                    break
                }
                bt(e, ke, lt);
                break;
            case 5:
                bt(e, ke, lt);
                break;
            default:
                throw Error(k(329))
            }
        }
    }
    return ze(e, te()),
    e.callbackNode === n ? Sc.bind(null, e) : null
}
function is(e, t) {
    var n = Jn;
    return e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    e = jl(e, t),
    e !== 2 && (t = ke,
    ke = n,
    t !== null && ss(t)),
    e
}
function ss(e) {
    ke === null ? ke = e : ke.push.apply(ke, e)
}
function Gf(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ge(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function jt(e, t) {
    for (t &= ~Vs,
    t &= ~Dl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - qe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ao(e) {
    if (B & 6)
        throw Error(k(327));
    wn();
    var t = ll(e, 0);
    if (!(t & 1))
        return ze(e, te()),
        null;
    var n = jl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Li(e);
        r !== 0 && (t = r,
        n = is(e, r))
    }
    if (n === 1)
        throw n = gr,
        Vt(e, 0),
        jt(e, t),
        ze(e, te()),
        n;
    if (n === 6)
        throw Error(k(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    bt(e, ke, lt),
    ze(e, te()),
    null
}
function Qs(e, t) {
    var n = B;
    B |= 1;
    try {
        return e(t)
    } finally {
        B = n,
        B === 0 && (zn = te() + 500,
        _l && Ot())
    }
}
function Xt(e) {
    Nt !== null && Nt.tag === 0 && !(B & 6) && wn();
    var t = B;
    B |= 1;
    var n = be.transition
      , r = W;
    try {
        if (be.transition = null,
        W = 1,
        e)
            return e()
    } finally {
        W = r,
        be.transition = n,
        B = t,
        !(B & 6) && Ot()
    }
}
function qs() {
    _e = hn.current,
    Q(hn)
}
function Vt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Ef(n)),
    le !== null)
        for (n = le.return; n !== null; ) {
            var r = n;
            switch (Ps(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ul();
                break;
            case 3:
                Cn(),
                Q(Ce),
                Q(ge),
                Os();
                break;
            case 5:
                As(r);
                break;
            case 4:
                Cn();
                break;
            case 13:
                Q(Y);
                break;
            case 19:
                Q(Y);
                break;
            case 10:
                Ms(r.type._context);
                break;
            case 22:
            case 23:
                qs()
            }
            n = n.return
        }
    if (ue = e,
    le = e = Mt(e.current, null),
    de = _e = t,
    ae = 0,
    gr = null,
    Vs = Dl = Gt = 0,
    ke = Jn = null,
    Ht !== null) {
        for (t = 0; t < Ht.length; t++)
            if (n = Ht[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = l,
                    r.next = a
                }
                n.pending = r
            }
        Ht = null
    }
    return e
}
function jc(e, t) {
    do {
        var n = le;
        try {
            if (Ls(),
            qr.current = vl,
            gl) {
                for (var r = G.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                gl = !1
            }
            if (Yt = 0,
            oe = se = G = null,
            Xn = !1,
            hr = 0,
            Ws.current = null,
            n === null || n.return === null) {
                ae = 1,
                gr = t,
                le = null;
                break
            }
            e: {
                var i = e
                  , a = n.return
                  , o = n
                  , u = t;
                if (t = de,
                o.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var f = u
                      , y = o
                      , h = y.tag;
                    if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = y.alternate;
                        m ? (y.updateQueue = m.updateQueue,
                        y.memoizedState = m.memoizedState,
                        y.lanes = m.lanes) : (y.updateQueue = null,
                        y.memoizedState = null)
                    }
                    var w = qa(a);
                    if (w !== null) {
                        w.flags &= -257,
                        Ya(w, a, o, i, t),
                        w.mode & 1 && Qa(i, f, t),
                        t = w,
                        u = f;
                        var S = t.updateQueue;
                        if (S === null) {
                            var v = new Set;
                            v.add(u),
                            t.updateQueue = v
                        } else
                            S.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Qa(i, f, t),
                            Ys();
                            break e
                        }
                        u = Error(k(426))
                    }
                } else if (q && o.mode & 1) {
                    var M = qa(a);
                    if (M !== null) {
                        !(M.flags & 65536) && (M.flags |= 256),
                        Ya(M, a, o, i, t),
                        Ts(En(u, o));
                        break e
                    }
                }
                i = u = En(u, o),
                ae !== 4 && (ae = 2),
                Jn === null ? Jn = [i] : Jn.push(i),
                i = a;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var d = ic(i, u, t);
                        ba(i, d);
                        break e;
                    case 1:
                        o = u;
                        var c = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (_t === null || !_t.has(p)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var g = sc(i, o, t);
                            ba(i, g);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Cc(n)
        } catch (C) {
            t = C,
            le === n && n !== null && (le = n = n.return);
            continue
        }
        break
    } while (!0)
}
function kc() {
    var e = xl.current;
    return xl.current = vl,
    e === null ? vl : e
}
function Ys() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ue === null || !(Gt & 268435455) && !(Dl & 268435455) || jt(ue, de)
}
function jl(e, t) {
    var n = B;
    B |= 2;
    var r = kc();
    (ue !== e || de !== t) && (lt = null,
    Vt(e, t));
    do
        try {
            Xf();
            break
        } catch (l) {
            jc(e, l)
        }
    while (!0);
    if (Ls(),
    B = n,
    xl.current = r,
    le !== null)
        throw Error(k(261));
    return ue = null,
    de = 0,
    ae
}
function Xf() {
    for (; le !== null; )
        Nc(le)
}
function Zf() {
    for (; le !== null && !jd(); )
        Nc(le)
}
function Nc(e) {
    var t = zc(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps,
    t === null ? Cc(e) : le = t,
    Ws.current = null
}
function Cc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Vf(n, t),
            n !== null) {
                n.flags &= 32767,
                le = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ae = 6,
                le = null;
                return
            }
        } else if (n = Wf(n, t, _e),
        n !== null) {
            le = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            le = t;
            return
        }
        le = t = e
    } while (t !== null);
    ae === 0 && (ae = 5)
}
function bt(e, t, n) {
    var r = W
      , l = be.transition;
    try {
        be.transition = null,
        W = 1,
        Jf(e, t, n, r)
    } finally {
        be.transition = l,
        W = r
    }
    return null
}
function Jf(e, t, n, r) {
    do
        wn();
    while (Nt !== null);
    if (B & 6)
        throw Error(k(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(k(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Md(e, i),
    e === ue && (le = ue = null,
    de = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fr || (Fr = !0,
    Pc(rl, function() {
        return wn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = be.transition,
        be.transition = null;
        var a = W;
        W = 1;
        var o = B;
        B |= 4,
        Ws.current = null,
        Qf(e, n),
        xc(n, e),
        xf(Oi),
        il = !!Ai,
        Oi = Ai = null,
        e.current = n,
        qf(n),
        kd(),
        B = o,
        W = a,
        be.transition = i
    } else
        e.current = n;
    if (Fr && (Fr = !1,
    Nt = e,
    Sl = l),
    i = e.pendingLanes,
    i === 0 && (_t = null),
    Ed(n.stateNode),
    ze(e, te()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (wl)
        throw wl = !1,
        e = rs,
        rs = null,
        e;
    return Sl & 1 && e.tag !== 0 && wn(),
    i = e.pendingLanes,
    i & 1 ? e === ls ? er++ : (er = 0,
    ls = e) : er = 0,
    Ot(),
    null
}
function wn() {
    if (Nt !== null) {
        var e = iu(Sl)
          , t = be.transition
          , n = W;
        try {
            if (be.transition = null,
            W = 16 > e ? 16 : e,
            Nt === null)
                var r = !1;
            else {
                if (e = Nt,
                Nt = null,
                Sl = 0,
                B & 6)
                    throw Error(k(331));
                var l = B;
                for (B |= 4,
                _ = e.current; _ !== null; ) {
                    var i = _
                      , a = i.child;
                    if (_.flags & 16) {
                        var o = i.deletions;
                        if (o !== null) {
                            for (var u = 0; u < o.length; u++) {
                                var f = o[u];
                                for (_ = f; _ !== null; ) {
                                    var y = _;
                                    switch (y.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zn(8, y, i)
                                    }
                                    var h = y.child;
                                    if (h !== null)
                                        h.return = y,
                                        _ = h;
                                    else
                                        for (; _ !== null; ) {
                                            y = _;
                                            var m = y.sibling
                                              , w = y.return;
                                            if (yc(y),
                                            y === f) {
                                                _ = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = w,
                                                _ = m;
                                                break
                                            }
                                            _ = w
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var v = S.child;
                                if (v !== null) {
                                    S.child = null;
                                    do {
                                        var M = v.sibling;
                                        v.sibling = null,
                                        v = M
                                    } while (v !== null)
                                }
                            }
                            _ = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null)
                        a.return = i,
                        _ = a;
                    else
                        e: for (; _ !== null; ) {
                            if (i = _,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Zn(9, i, i.return)
                                }
                            var d = i.sibling;
                            if (d !== null) {
                                d.return = i.return,
                                _ = d;
                                break e
                            }
                            _ = i.return
                        }
                }
                var c = e.current;
                for (_ = c; _ !== null; ) {
                    a = _;
                    var p = a.child;
                    if (a.subtreeFlags & 2064 && p !== null)
                        p.return = a,
                        _ = p;
                    else
                        e: for (a = c; _ !== null; ) {
                            if (o = _,
                            o.flags & 2048)
                                try {
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rl(9, o)
                                    }
                                } catch (C) {
                                    Z(o, o.return, C)
                                }
                            if (o === a) {
                                _ = null;
                                break e
                            }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                _ = g;
                                break e
                            }
                            _ = o.return
                        }
                }
                if (B = l,
                Ot(),
                tt && typeof tt.onPostCommitFiberRoot == "function")
                    try {
                        tt.onPostCommitFiberRoot(Cl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            W = n,
            be.transition = t
        }
    }
    return !1
}
function oo(e, t, n) {
    t = En(n, t),
    t = ic(e, t, 1),
    e = Tt(e, t, 1),
    t = xe(),
    e !== null && (xr(e, 1, t),
    ze(e, t))
}
function Z(e, t, n) {
    if (e.tag === 3)
        oo(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                oo(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_t === null || !_t.has(r))) {
                    e = En(n, e),
                    e = sc(t, e, 1),
                    t = Tt(t, e, 1),
                    e = xe(),
                    t !== null && (xr(t, 1, e),
                    ze(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ep(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ue === e && (de & n) === n && (ae === 4 || ae === 3 && (de & 130023424) === de && 500 > te() - Ks ? Vt(e, 0) : Vs |= n),
    ze(e, t)
}
function Ec(e, t) {
    t === 0 && (e.mode & 1 ? (t = Pr,
    Pr <<= 1,
    !(Pr & 130023424) && (Pr = 4194304)) : t = 1);
    var n = xe();
    e = dt(e, t),
    e !== null && (xr(e, t, n),
    ze(e, n))
}
function tp(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ec(e, n)
}
function np(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(k(314))
    }
    r !== null && r.delete(t),
    Ec(e, n)
}
var zc;
zc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current)
            Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ne = !1,
                Hf(e, t, n);
            Ne = !!(e.flags & 131072)
        }
    else
        Ne = !1,
        q && t.flags & 1048576 && Lu(t, fl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Gr(e, t),
        e = t.pendingProps;
        var l = jn(t, ge.current);
        xn(t, n),
        l = Us(null, t, r, e, l, n);
        var i = Bs();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ee(r) ? (i = !0,
        cl(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Ds(t),
        l.updater = Ml,
        t.stateNode = l,
        l._reactInternals = t,
        Ki(t, r, e, n),
        t = Yi(null, t, r, !0, i, n)) : (t.tag = 0,
        q && i && zs(t),
        ve(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gr(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = lp(r),
            e = Ve(r, e),
            l) {
            case 0:
                t = qi(null, t, r, e, n);
                break e;
            case 1:
                t = Za(null, t, r, e, n);
                break e;
            case 11:
                t = Ga(null, t, r, e, n);
                break e;
            case 14:
                t = Xa(null, t, r, Ve(r.type, e), n);
                break e
            }
            throw Error(k(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ve(r, l),
        qi(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ve(r, l),
        Za(e, t, r, l, n);
    case 3:
        e: {
            if (cc(t),
            e === null)
                throw Error(k(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            Ou(e, t),
            ml(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = En(Error(k(423)), t),
                    t = Ja(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = En(Error(k(424)), t),
                    t = Ja(e, t, r, n, l);
                    break e
                } else
                    for (Le = Pt(t.stateNode.containerInfo.firstChild),
                    Me = t,
                    q = !0,
                    Qe = null,
                    n = Iu(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (kn(),
                r === l) {
                    t = ft(e, t, n);
                    break e
                }
                ve(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Fu(t),
        e === null && Hi(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        a = l.children,
        Fi(r, l) ? a = null : i !== null && Fi(r, i) && (t.flags |= 32),
        uc(e, t),
        ve(e, t, a, n),
        t.child;
    case 6:
        return e === null && Hi(t),
        null;
    case 13:
        return dc(e, t, n);
    case 4:
        return Is(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Nn(t, null, r, n) : ve(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ve(r, l),
        Ga(e, t, r, l, n);
    case 7:
        return ve(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ve(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ve(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            a = l.value,
            V(pl, r._currentValue),
            r._currentValue = a,
            i !== null)
                if (Ge(i.value, a)) {
                    if (i.children === l.children && !Ce.current) {
                        t = ft(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var o = i.dependencies;
                        if (o !== null) {
                            a = i.child;
                            for (var u = o.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (i.tag === 1) {
                                        u = ot(-1, n & -n),
                                        u.tag = 2;
                                        var f = i.updateQueue;
                                        if (f !== null) {
                                            f = f.shared;
                                            var y = f.pending;
                                            y === null ? u.next = u : (u.next = y.next,
                                            y.next = u),
                                            f.pending = u
                                        }
                                    }
                                    i.lanes |= n,
                                    u = i.alternate,
                                    u !== null && (u.lanes |= n),
                                    Wi(i.return, n, t),
                                    o.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return,
                            a === null)
                                throw Error(k(341));
                            a.lanes |= n,
                            o = a.alternate,
                            o !== null && (o.lanes |= n),
                            Wi(a, n, t),
                            a = i.sibling
                        } else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (i = a.sibling,
                                i !== null) {
                                    i.return = a.return,
                                    a = i;
                                    break
                                }
                                a = a.return
                            }
                        i = a
                    }
            ve(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        xn(t, n),
        l = $e(l),
        r = r(l),
        t.flags |= 1,
        ve(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Ve(r, t.pendingProps),
        l = Ve(r.type, l),
        Xa(e, t, r, l, n);
    case 15:
        return ac(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ve(r, l),
        Gr(e, t),
        t.tag = 1,
        Ee(r) ? (e = !0,
        cl(t)) : e = !1,
        xn(t, n),
        lc(t, r, l),
        Ki(t, r, l, n),
        Yi(null, t, r, !0, e, n);
    case 19:
        return fc(e, t, n);
    case 22:
        return oc(e, t, n)
    }
    throw Error(k(156, t.tag))
}
;
function Pc(e, t) {
    return tu(e, t)
}
function rp(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Be(e, t, n, r) {
    return new rp(e,t,n,r)
}
function Gs(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function lp(e) {
    if (typeof e == "function")
        return Gs(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ms)
            return 11;
        if (e === ys)
            return 14
    }
    return 2
}
function Mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Be(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Jr(e, t, n, r, l, i) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Gs(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case rn:
            return Kt(n.children, l, i, t);
        case hs:
            a = 8,
            l |= 8;
            break;
        case yi:
            return e = Be(12, n, t, l | 2),
            e.elementType = yi,
            e.lanes = i,
            e;
        case gi:
            return e = Be(13, n, t, l),
            e.elementType = gi,
            e.lanes = i,
            e;
        case vi:
            return e = Be(19, n, t, l),
            e.elementType = vi,
            e.lanes = i,
            e;
        case Fo:
            return Il(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ao:
                    a = 10;
                    break e;
                case Oo:
                    a = 9;
                    break e;
                case ms:
                    a = 11;
                    break e;
                case ys:
                    a = 14;
                    break e;
                case xt:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(k(130, e == null ? e : typeof e, ""))
        }
    return t = Be(a, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Kt(e, t, n, r) {
    return e = Be(7, e, r, t),
    e.lanes = n,
    e
}
function Il(e, t, n, r) {
    return e = Be(22, e, r, t),
    e.elementType = Fo,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ci(e, t, n) {
    return e = Be(6, e, null, t),
    e.lanes = n,
    e
}
function di(e, t, n) {
    return t = Be(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ip(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Vl(0),
    this.expirationTimes = Vl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Vl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Xs(e, t, n, r, l, i, a, o, u) {
    return e = new ip(e,t,n,o,u),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Be(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ds(i),
    e
}
function sp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: nn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Tc(e) {
    if (!e)
        return Dt;
    e = e._reactInternals;
    e: {
        if (Jt(e) !== e || e.tag !== 1)
            throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ee(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ee(n))
            return Tu(e, n, t)
    }
    return t
}
function _c(e, t, n, r, l, i, a, o, u) {
    return e = Xs(n, r, !0, e, l, i, a, o, u),
    e.context = Tc(null),
    n = e.current,
    r = xe(),
    l = Lt(n),
    i = ot(r, l),
    i.callback = t ?? null,
    Tt(n, i, l),
    e.current.lanes = l,
    xr(e, l, r),
    ze(e, r),
    e
}
function Al(e, t, n, r) {
    var l = t.current
      , i = xe()
      , a = Lt(l);
    return n = Tc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ot(i, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Tt(l, t, a),
    e !== null && (Ye(e, l, a, i),
    Qr(e, l, a)),
    a
}
function kl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function uo(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Zs(e, t) {
    uo(e, t),
    (e = e.alternate) && uo(e, t)
}
function ap() {
    return null
}
var Lc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Js(e) {
    this._internalRoot = e
}
Ol.prototype.render = Js.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(k(409));
    Al(e, t, null, null)
}
;
Ol.prototype.unmount = Js.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Xt(function() {
            Al(null, e, null, null)
        }),
        t[ct] = null
    }
}
;
function Ol(e) {
    this._internalRoot = e
}
Ol.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ou();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++)
            ;
        St.splice(n, 0, e),
        n === 0 && cu(e)
    }
}
;
function ea(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Fl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function co() {}
function op(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var f = kl(a);
                i.call(f)
            }
        }
        var a = _c(t, r, e, 0, null, !1, !1, "", co);
        return e._reactRootContainer = a,
        e[ct] = a.current,
        ur(e.nodeType === 8 ? e.parentNode : e),
        Xt(),
        a
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var f = kl(u);
            o.call(f)
        }
    }
    var u = Xs(e, 0, !1, null, null, !1, !1, "", co);
    return e._reactRootContainer = u,
    e[ct] = u.current,
    ur(e.nodeType === 8 ? e.parentNode : e),
    Xt(function() {
        Al(t, u, n, r)
    }),
    u
}
function Ul(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof l == "function") {
            var o = l;
            l = function() {
                var u = kl(a);
                o.call(u)
            }
        }
        Al(t, a, e, l)
    } else
        a = op(n, t, e, l, r);
    return kl(a)
}
su = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Wn(t.pendingLanes);
            n !== 0 && (xs(t, n | 1),
            ze(t, te()),
            !(B & 6) && (zn = te() + 500,
            Ot()))
        }
        break;
    case 13:
        Xt(function() {
            var r = dt(e, 1);
            if (r !== null) {
                var l = xe();
                Ye(r, e, 1, l)
            }
        }),
        Zs(e, 1)
    }
}
;
ws = function(e) {
    if (e.tag === 13) {
        var t = dt(e, 134217728);
        if (t !== null) {
            var n = xe();
            Ye(t, e, 134217728, n)
        }
        Zs(e, 134217728)
    }
}
;
au = function(e) {
    if (e.tag === 13) {
        var t = Lt(e)
          , n = dt(e, t);
        if (n !== null) {
            var r = xe();
            Ye(n, e, t, r)
        }
        Zs(e, t)
    }
}
;
ou = function() {
    return W
}
;
uu = function(e, t) {
    var n = W;
    try {
        return W = e,
        t()
    } finally {
        W = n
    }
}
;
Pi = function(e, t, n) {
    switch (t) {
    case "input":
        if (Si(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Tl(r);
                    if (!l)
                        throw Error(k(90));
                    Bo(r),
                    Si(r, l)
                }
            }
        }
        break;
    case "textarea":
        $o(e, n);
        break;
    case "select":
        t = n.value,
        t != null && mn(e, !!n.multiple, t, !1)
    }
}
;
Yo = Qs;
Go = Xt;
var up = {
    usingClientEntryPoint: !1,
    Events: [Sr, on, Tl, Qo, qo, Qs]
}
  , bn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , cp = {
    bundleType: bn.bundleType,
    version: bn.version,
    rendererPackageName: bn.rendererPackageName,
    rendererConfig: bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Jo(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: bn.findFiberByHostInstance || ap,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ur.isDisabled && Ur.supportsFiber)
        try {
            Cl = Ur.inject(cp),
            tt = Ur
        } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ea(t))
        throw Error(k(200));
    return sp(e, t, null, n)
}
;
De.createRoot = function(e, t) {
    if (!ea(e))
        throw Error(k(299));
    var n = !1
      , r = ""
      , l = Lc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Xs(e, 1, !1, null, null, n, !1, r, l),
    e[ct] = t.current,
    ur(e.nodeType === 8 ? e.parentNode : e),
    new Js(t)
}
;
De.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
        Error(k(268, e)));
    return e = Jo(t),
    e = e === null ? null : e.stateNode,
    e
}
;
De.flushSync = function(e) {
    return Xt(e)
}
;
De.hydrate = function(e, t, n) {
    if (!Fl(t))
        throw Error(k(200));
    return Ul(null, e, t, !0, n)
}
;
De.hydrateRoot = function(e, t, n) {
    if (!ea(e))
        throw Error(k(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , a = Lc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = _c(t, null, e, 1, n ?? null, l, !1, i, a),
    e[ct] = t.current,
    ur(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ol(t)
}
;
De.render = function(e, t, n) {
    if (!Fl(t))
        throw Error(k(200));
    return Ul(null, e, t, !1, n)
}
;
De.unmountComponentAtNode = function(e) {
    if (!Fl(e))
        throw Error(k(40));
    return e._reactRootContainer ? (Xt(function() {
        Ul(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ct] = null
        })
    }),
    !0) : !1
}
;
De.unstable_batchedUpdates = Qs;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Fl(n))
        throw Error(k(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(k(38));
    return Ul(e, t, n, !1, r)
}
;
De.version = "18.3.1-next-f1338f8080-20240426";
function Mc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mc)
        } catch (e) {
            console.error(e)
        }
}
Mc(),
Mo.exports = De;
var Rc = Mo.exports
  , fo = Rc;
hi.createRoot = fo.createRoot,
hi.hydrateRoot = fo.hydrateRoot;
const Pn = "BlankoSpace"
  , Br = "#fab784"
  , po = "soanovkaul@gmail.com"
  , dp = "https://t.me/uaown"
  , fp = "https://richclient.fun"
  , Dc = `${fp}/files/launcher.exe`
  , ho = 271
  , mo = 1858
  , mp = "2020-01-01"
async function J(e, t={}) {
    const n = await fetch(`${pp}${e}`, t)
      , r = n.headers.get("content-type") || "";
    let l = null;
    if (r.includes("application/json") ? l = await n.json() : l = await n.text(),
    !n.ok)
        throw {
            message: typeof l == "string" ? l : (l == null ? void 0 : l.message) || "Request failed",
            status: n.status
        };
    return l
}
function re(e, t) {
    return {
        ...e ? {
            Authorization: `Bearer ${e}`
        } : {},
        ...t ?? {}
    }
}
const ee = {
    user: {
        count() {
            return J("/user/getNumberUser", {
                method: "GET"
            })
        },
        discount(e, t) {
            return J("/user/discount?promo=" + encodeURIComponent(t), {
                method: "GET",
                headers: re(e, {
                    "Content-Type": "application/json"
                })
            })
        }
    },
    admin: {
        check(e) {
            return J("/admin/give/check-admin-panel", {
                method: "POST",
                headers: re(e, {
                    "Content-Type": "application/json"
                })
            })
        },
    }
}
  , yp = {
    en: {
        nav: {
            home: "Home",
            screenshots: "Screenshots",
            faq: "Faq",
            terms: "Terms",
        },
        hero: {
            subtitle: "Чистый лист для твоих великих открытий. Совсем скоро BlankoSpace открывает двери в 1 сезон: уютная ванилла, вежливое комьюнити и мир, который мы построим вместе с нуля. Стань частью нашей истории с первого дня!",
        },
        sections: {
            screenshotsTitle: "Скриншоты",
            screenshotsSubtitleLead: "Уютные",
            screenshotsSubtitleText: "поселения и постройки наших игроков. Вдохновляйся атмосферой чистого выживания.",
            faqTitle: "FAQ",
            faqSubtitleLead: "Здесь собраны",
            faqSubtitleText: "самые популярные вопросы:"
        },
        faq: {
            why: "Как зайти",
            whyText: "Вход на сервер осуществляется по айпи: mc.blanko.space. Сервер работает на версии 1.21.4. Просто добавь адрес в список серверов и начни игру!",
            advantages: "Наши преимущества",
            advantagesText: "Стабильный ТПС даже при высоком онлайне, мощный хостинг и отсутствие лагов. Мы создали идеальный сервер для твоих самых масштабных построек.",
            support: "Наше комьюнити",
            supportText: " BlankoSpace - это прежде всего люди. У нас сформировалось по-настоящему хорошее комьюнити: вежливые игроки, взаимовыручка и отсутствие токсичности в чате.",
            rating: "В чём уникальность?",
            ratingText: "Мы сохраняем баланс между классикой и комфортом. На BlankoSpace тебя ждёт чистая ванилла 1.21.4, дополненная лишь несколькими плагинами, которые не портят дух настоящего выживания."
        },
        terms: {
            title: "",
            intro: ""
        },
        footer: {
            text: "",
            rights: ""
        }
    },
    ru: {
        nav: {
            home: "",
            screenshots: "",
            faq: "",
            terms: "Правила",
        },
        hero: {
            subtitle: "",
        },
        sections: {
            screenshotsTitle: "",
            screenshotsSubtitleLead: "Уютные",
            screenshotsSubtitleText: "",
            faqTitle: "",
            faqSubtitleLead: "",
            faqSubtitleText: ""
        },
        faq: {
            why: "",
            whyText: "",
            advantages: "",
            advantagesText: "",
            support: "",
            supportText: "",
            rating: "",
            ratingText: ""
        },
        terms: {
            title: "",
            intro: ""
        },
        footer: {
            text: "",
            rights: ""
        }
    },
    uk: {
        nav: {
            home: "",
            screenshots: "",
            faq: "",
            terms: "Правила",
        },
        hero: {
            subtitle: "",
        },
        sections: {
            screenshotsTitle: "",
            screenshotsSubtitleLead: "Уютные",
            screenshotsSubtitleText: "",
            faqTitle: "",
            faqSubtitleLead: "",
            faqSubtitleText: ""
        },
        faq: {
            why: "",
            whyText: "",
            advantages: "",
            advantagesText: "",
            support: "",
            supportText: "",
            rating: "",
            ratingText: ""
        },
        terms: {
            title: "",
            intro: ""
        },
        footer: {
            text: "",
            rights: ""
        }
    },
    pl: {
        nav: {
            home: "",
            screenshots: "",
            faq: "",
            terms: "Правила",
        },
        hero: {
            subtitle: "",
        },
        sections: {
            screenshotsTitle: "",
            screenshotsSubtitleLead: "Уютные",
            screenshotsSubtitleText: "",
            faqTitle: "",
            faqSubtitleLead: "",
            faqSubtitleText: ""
        },
        faq: {
            why: "",
            whyText: "",
            advantages: "",
            advantagesText: "",
            support: "",
            supportText: "",
            rating: "",
            ratingText: ""
        },
        terms: {
            title: "",
            intro: ""
        },
        footer: {
            text: "",
            rights: ""
        }
    }
}
  , Ic = j.createContext(null)
  , Ac = "site-language";
function gp() {
    const e = localStorage.getItem(Ac);
    return e && (e === "en" || e === "ru" || e === "uk" || e === "pl") ? e : "en"
}
function vp({children: e}) {
    const [t,n] = j.useState( () => gp())
      , r = i => {
        n(i),
        localStorage.setItem(Ac, i)
    }
      , l = j.useMemo( () => ({
        language: t,
        setLanguage: r,
        t: yp[t]
    }), [t]);
    return s.jsx(Ic.Provider, {
        value: l,
        children: e
    })
}
function ht() {
    const e = j.useContext(Ic);
    if (!e)
        throw new Error("useI18n must be used inside I18nProvider");
    return e
}
function xp() {
    const {t: e} = ht();
    return s.jsxs("footer", {
        className: "footer",
        children: [s.jsxs("div", {
            className: "footer-grid",
            children: [s.jsxs("div", {
                className: "footer-brand",
                children: [s.jsxs("div", {
                    className: "footer-brand-title",
                    children: [s.jsx("img", {
                        src: "/assets/logo.png",
                        alt: "",
                        "aria-hidden": "true",
                        className: "footer-brand-logo"
                    }), s.jsx("strong", {
                        className: "client-name-shine",
                        children: Pn
                    })]
                }), s.jsx("p", {
                    children: e.footer.text
                })]
            }), s.jsxs("div", {
                className: "footer-links",
                children: [s.jsxs("a", {
                    href: "/",
                    children: [s.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [s.jsx("path", {
                            d: "M3 11.8L12 4l9 7.8"
                        }), s.jsx("path", {
                            d: "M6.5 10.2V20h11V10.2"
                        })]
                    }), s.jsx("span", {
                        children: "Home"
                    })]
                }), s.jsxs("a", {
                    href: "/#screenshots",
                    children: [s.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [s.jsx("path", {
                            d: "M12 4v16"
                        }), s.jsx("path", {
                            d: "M4 12h16"
                        })]
                    }), s.jsx("span", {
                        children: e.nav.screenshots
                    })]
                }), s.jsxs("a", {
                    href: "/#faq",
                    children: [s.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [s.jsx("path", {
                            d: "M12 18h.01"
                        }), s.jsx("path", {
                            d: "M9.1 9a3 3 0 1 1 5 2.2c-.9.7-1.6 1.2-1.6 2.3"
                        })]
                    }), s.jsx("span", {
                        children: e.nav.faq
                    })]
                })]
            }), s.jsxs("div", {
                className: "footer-links",
                children: [s.jsxs("a", {
                    href: "/terms",
                    children: [s.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [s.jsx("path", {
                            d: "M6 4h9l3 3v13H6z"
                        }), s.jsx("path", {
                            d: "M15 4v4h4"
                        })]
                    }), s.jsx("span", {
                        children: e.nav.terms
                    })]
                })]
            })]
        }), s.jsxs("div", {
            className: "footer-bottom",
            children: [s.jsxs("p", {
                className: "footer-copy",
                children: [s.jsx("span", {
                    className: "client-name-shine",
                    children: Pn
                }), " (c) ", new Date().getFullYear(), " ", e.footer.rights]
            }), s.jsxs("a", {
                className: "footer-mail",
                href: `mailto:${po}`,
                children: [s.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: [s.jsx("path", {
                        d: "M4 7h16v10H4z"
                    }), s.jsx("path", {
                        d: "m4 8 8 6 8-6"
                    })]
                }), s.jsx("span", {
                    children: po
                })]
            }), s.jsxs("a", {
                className: "footer-mail",
                href: dp,
                target: "_blank",
                rel: "noreferrer",
                children: [s.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: [s.jsx("path", {
                        d: "M21 4 3 11l6 2 2 6 10-15Z"
                    }), s.jsx("path", {
                        d: "m9 13 3 3"
                    })]
                }), s.jsx("span", {
                    children: "Telegram Support"
                })]
            })]
        }), s.jsx("p", {
            className: "footer-watermark",
            children: "UnixStudio | AntiDaunLeak GUARD"
        })]
    })
}
const br = [{
}];
function wp({pathname: e, hash: t, isAuthed: n, onNavigate: r}) {
    const {language: l, setLanguage: i, t: a} = ht()
      , [o,u] = j.useState(!1)
      , [f,y] = j.useState(!1)
      , h = j.useRef(null)
      , m = [{
        label: a.nav.home,
        href: "/",
        icon: s.jsxs("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [s.jsx("path", {
                d: "M3 11.8L12 4l9 7.8"
            }), s.jsx("path", {
                d: "M6.5 10.2V20h11V10.2"
            })]
        })
    }, {
        label: a.nav.screenshots,
        href: "/#screenshots",
        icon: s.jsxs("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [s.jsx("path", {
                d: "M12 4v16"
            }), s.jsx("path", {
                d: "M4 12h16"
            })]
        })
    }, {
        label: a.nav.faq,
        href: "/#faq",
        icon: s.jsxs("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [s.jsx("path", {
                d: "M12 18h.01"
            }), s.jsx("path", {
                d: "M9.1 9a3 3 0 1 1 5 2.2c-.9.7-1.6 1.2-1.6 2.3"
            }), s.jsx("path", {
                d: "M4 4h16v16H4z"
            })]
        })
    }, {
        label: a.nav.terms,
        href: "/terms",
        icon: s.jsxs("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [s.jsx("path", {
                d: "M6 4h9l3 3v13H6z"
            }), s.jsx("path", {
                d: "M15 4v4h4"
            })]
        })
    }]
      , w = v => {
        const [M,d] = v.split("#");
        return (M || "/") !== e ? !1 : d ? t === `#${d}` : !t
    }
    ;
    j.useEffect( () => {
        const v = M => {
            h.current && (h.current.contains(M.target) || u(!1))
        }
        ;
        return document.addEventListener("mousedown", v),
        () => document.removeEventListener("mousedown", v)
    }
    , []),
    j.useEffect( () => {
        y(!1)
    }
    , [e, t]);
    const S = br.find(v => v.code === l) ?? br[0];
    return s.jsxs("header", {
        className: "header",
        children: [s.jsxs("div", {
            className: "header-left",
            children: [s.jsx("button", {
                type: "button",
                className: "header-brand",
                onClick: () => r("/"),
                children: s.jsx("img", {
                    src: "/assets/logo.png",
                    alt: `${Pn} logo`
                })
            }), s.jsx("span", {
                className: "header-mobile-title",
                children: Pn
            }), s.jsxs("button", {
                type: "button",
                className: `header-burger${f ? " is-open" : ""}`,
                onClick: () => y(v => !v),
                "aria-label": "Menu",
                children: [s.jsx("span", {}), s.jsx("span", {}), s.jsx("span", {})]
            }), s.jsx("nav", {
                className: "nav header-desktop-nav",
                "aria-label": "Main navigation",
                children: m.map(v => s.jsxs("button", {
                    type: "button",
                    className: `nav-link nav-btn${w(v.href) ? " is-active" : ""}`,
                    onClick: () => r(v.href),
                    children: [v.icon, s.jsx("span", {
                        children: v.label
                    })]
                }, v.label))
            })]
        }), s.jsxs("div", {
            className: "auth-actions header-desktop-auth",
            children: [s.jsxs("div", {
                className: "lang-switch-dropdown",
                ref: h,
                children: [s.jsxs("button", {
                    type: "button",
                    className: "lang-current-btn",
                    onClick: () => u(v => !v),
                    "aria-label": "Language",
                    children: [s.jsx("img", {
                        className: "lang-flag-img",
                        src: S.flagUrl,
                        alt: S.label
                    }), s.jsx("span", {
                        children: S.label
                    }), s.jsx("span", {
                        className: `lang-caret${o ? " is-open" : ""}`,
                        children: "v"
                    })]
                }), o && s.jsx("div", {
                    className: "lang-menu",
                    children: br.map(v => s.jsxs("button", {
                        type: "button",
                        className: `lang-menu-item${l === v.code ? " is-active" : ""}`,
                        onClick: () => {
                            i(v.code),
                            u(!1)
                        }
                        ,
                        children: [s.jsx("img", {
                            className: "lang-flag-img",
                            src: v.flagUrl,
                            alt: v.label
                        }), s.jsx("span", {
                            children: v.label
                        })]
                    }, v.code))
                })]
            }), n ? s.jsx("button", {
                type: "button",
                className: "auth-btn auth-btn-solid auth-btn-link",
                onClick: () => r("/cabinet"),
                children: a.nav.cabinet
            }) : s.jsxs(s.Fragment, {
                children: [s.jsx("button", {
                    type: "button",
                    className: "auth-btn auth-btn-ghost auth-btn-link",
                    onClick: () => r("/register"),
                    children: a.nav.register
                }), s.jsx("button", {
                    type: "button",
                    className: "auth-btn auth-btn-solid auth-btn-link",
                    onClick: () => r("/login"),
                    children: a.nav.login
                })]
            })]
        }), f && s.jsxs("div", {
            className: "header-mobile-menu",
            children: [s.jsx("nav", {
                className: "header-mobile-nav",
                "aria-label": "Mobile navigation",
                children: m.map(v => s.jsxs("button", {
                    type: "button",
                    className: `nav-link nav-btn${w(v.href) ? " is-active" : ""}`,
                    onClick: () => r(v.href),
                    children: [v.icon, s.jsx("span", {
                        children: v.label
                    })]
                }, v.label))
            }), s.jsx("div", {
                className: "header-mobile-lang",
                children: br.map(v => s.jsxs("button", {
                    type: "button",
                    className: `lang-menu-item${l === v.code ? " is-active" : ""}`,
                    onClick: () => i(v.code),
                    children: [s.jsx("img", {
                        className: "lang-flag-img",
                        src: v.flagUrl,
                        alt: v.label
                    }), s.jsx("span", {
                        children: v.label
                    })]
                }, v.code))
            }), s.jsx("div", {
                className: "header-mobile-auth",
                children: n ? s.jsx("button", {
                    type: "button",
                    className: "auth-btn auth-btn-solid auth-btn-link",
                    onClick: () => r("/cabinet"),
                    children: a.nav.cabinet
                }) : s.jsxs(s.Fragment, {
                    children: [s.jsx("button", {
                        type: "button",
                        className: "auth-btn auth-btn-ghost auth-btn-link",
                        onClick: () => r("/register"),
                        children: a.nav.register
                    }), s.jsx("button", {
                        type: "button",
                        className: "auth-btn auth-btn-solid auth-btn-link",
                        onClick: () => r("/login"),
                        children: a.nav.login
                    })]
                })
            })]
        })]
    })
}
function Sp(e) {
    const t = e.trim().replace("#", "")
      , n = t.length === 3 ? t.split("").map(l => l + l).join("") : t
      , r = Number.parseInt(n, 16);
    return Number.isNaN(r) ? [1, 1, 1] : [(r >> 16 & 255) / 255, (r >> 8 & 255) / 255, (r & 255) / 255]
}
function jp(e, t, n) {
    const r = {
        "top-left": {
            anchor: [0, n * -.2],
            dir: [0, 1]
        },
        "top-right": {
            anchor: [t, n * -.2],
            dir: [0, 1]
        },
        left: {
            anchor: [t * -.2, n * .5],
            dir: [1, 0]
        },
        right: {
            anchor: [t * 1.2, n * .5],
            dir: [-1, 0]
        },
        "bottom-left": {
            anchor: [0, n * 1.2],
            dir: [0, -1]
        },
        "bottom-center": {
            anchor: [t * .5, n * 1.2],
            dir: [0, -1]
        },
        "bottom-right": {
            anchor: [t, n * 1.2],
            dir: [0, -1]
        },
        center: {
            anchor: [t * .5, n * .5],
            dir: [0, 1]
        },
        "top-center": {
            anchor: [t * .5, n * -.2],
            dir: [0, 1]
        }
    };
    return r[e] || r["top-center"]
}
function go(e, t, n) {
    const r = e.createShader(t);
    return r ? (e.shaderSource(r, n),
    e.compileShader(r),
    e.getShaderParameter(r, e.COMPILE_STATUS) ? r : (e.deleteShader(r),
    null)) : null
}
function kp(e, t, n) {
    const r = e.createProgram();
    return r ? (e.attachShader(r, t),
    e.attachShader(r, n),
    e.linkProgram(r),
    e.deleteShader(t),
    e.deleteShader(n),
    e.getProgramParameter(r, e.LINK_STATUS) ? r : (e.deleteProgram(r),
    null)) : null
}
function Np(e, t) {
    const n = document.createElement("canvas");
    n.style.width = "100%",
    n.style.height = "100%",
    e.innerHTML = "",
    e.appendChild(n);
    const r = n.getContext("webgl", {
        alpha: !0,
        antialias: !0
    });
    if (!r)
        return () => {}
        ;
    const l = `
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `
      , i = `
    precision highp float;

    uniform float iTime;
    uniform vec2  iResolution;
    uniform vec2  rayPos;
    uniform vec2  rayDir;
    uniform vec3  raysColor;
    uniform float raysSpeed;
    uniform float lightSpread;
    uniform float rayLength;
    uniform float pulsating;
    uniform float fadeDistance;
    uniform float saturation;
    uniform vec2  mousePos;
    uniform float mouseInfluence;
    uniform float noiseAmount;
    uniform float distortion;

    varying vec2 vUv;

    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                      float seedA, float seedB, float speed) {
      vec2 sourceToCoord = coord - raySource;
      vec2 dirNorm = normalize(sourceToCoord);
      float cosAngle = dot(dirNorm, rayRefDirection);

      float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;

      float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

      float distance = length(sourceToCoord);
      float maxDistance = iResolution.x * rayLength;
      float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

      float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
      float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

      float baseStrength = clamp(
        (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
        (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
        0.0, 1.0
      );

      return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
    }

    void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

      vec2 finalRayDir = rayDir;
      if (mouseInfluence > 0.0) {
        vec2 mouseScreenPos = mousePos * iResolution.xy;
        vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
        finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
      }

      vec4 rays1 = vec4(1.0) *
                   rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
      vec4 rays2 = vec4(1.0) *
                   rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

      fragColor = rays1 * 0.5 + rays2 * 0.4;

      if (noiseAmount > 0.0) {
        float n = noise(coord * 0.01 + iTime * 0.1);
        fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
      }

      float brightness = 1.0 - (coord.y / iResolution.y);
      fragColor.x *= 0.1 + brightness * 0.8;
      fragColor.y *= 0.3 + brightness * 0.6;
      fragColor.z *= 0.5 + brightness * 0.5;

      if (saturation != 1.0) {
        float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
        fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
      }

      fragColor.rgb *= raysColor;
    }

    void main() {
      vec4 color;
      mainImage(color, gl_FragCoord.xy);
      gl_FragColor = color;
    }
  `
      , a = go(r, r.VERTEX_SHADER, l)
      , o = go(r, r.FRAGMENT_SHADER, i);
    if (!a || !o)
        return () => {}
        ;
    const u = kp(r, a, o);
    if (!u)
        return () => {}
        ;
    r.useProgram(u);
    const f = r.createBuffer();
    if (!f)
        return r.deleteProgram(u),
        () => {}
        ;
    r.bindBuffer(r.ARRAY_BUFFER, f),
    r.bufferData(r.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), r.STATIC_DRAW);
    const y = r.getAttribLocation(u, "position");
    r.enableVertexAttribArray(y),
    r.vertexAttribPointer(y, 2, r.FLOAT, !1, 0, 0);
    const h = {
        iTime: r.getUniformLocation(u, "iTime"),
        iResolution: r.getUniformLocation(u, "iResolution"),
        rayPos: r.getUniformLocation(u, "rayPos"),
        rayDir: r.getUniformLocation(u, "rayDir"),
        raysColor: r.getUniformLocation(u, "raysColor"),
        raysSpeed: r.getUniformLocation(u, "raysSpeed"),
        lightSpread: r.getUniformLocation(u, "lightSpread"),
        rayLength: r.getUniformLocation(u, "rayLength"),
        pulsating: r.getUniformLocation(u, "pulsating"),
        fadeDistance: r.getUniformLocation(u, "fadeDistance"),
        saturation: r.getUniformLocation(u, "saturation"),
        mousePos: r.getUniformLocation(u, "mousePos"),
        mouseInfluence: r.getUniformLocation(u, "mouseInfluence"),
        noiseAmount: r.getUniformLocation(u, "noiseAmount"),
        distortion: r.getUniformLocation(u, "distortion")
    }
      , m = Sp(t.raysColor);
    r.uniform3fv(h.raysColor, m),
    r.uniform1f(h.raysSpeed, t.raysSpeed),
    r.uniform1f(h.lightSpread, t.lightSpread),
    r.uniform1f(h.rayLength, t.rayLength),
    r.uniform1f(h.pulsating, 0),
    r.uniform1f(h.fadeDistance, t.fadeDistance),
    r.uniform1f(h.saturation, t.saturation),
    r.uniform1f(h.mouseInfluence, t.mouseInfluence),
    r.uniform1f(h.noiseAmount, t.noiseAmount),
    r.uniform1f(h.distortion, t.distortion);
    const w = {
        x: .5,
        y: .5
    }
      , S = () => {
        const d = Math.min(window.devicePixelRatio || 1, 2)
          , c = Math.max(1, Math.floor(e.clientWidth * d))
          , p = Math.max(1, Math.floor(e.clientHeight * d));
        (n.width !== c || n.height !== p) && (n.width = c,
        n.height = p),
        r.viewport(0, 0, c, p),
        r.uniform2f(h.iResolution, c, p);
        const g = jp(t.raysOrigin, c, p);
        r.uniform2f(h.rayPos, g.anchor[0], g.anchor[1]),
        r.uniform2f(h.rayDir, g.dir[0], g.dir[1])
    }
    ;
    let v = 0;
    const M = d => {
        r.uniform1f(h.iTime, d * .001),
        r.uniform2f(h.mousePos, w.x, w.y),
        r.drawArrays(r.TRIANGLES, 0, 3),
        v = window.requestAnimationFrame(M)
    }
    ;
    return window.addEventListener("resize", S, {
        passive: !0
    }),
    S(),
    v = window.requestAnimationFrame(M),
    () => {
        window.cancelAnimationFrame(v),
        window.removeEventListener("resize", S),
        r.deleteBuffer(f),
        r.deleteProgram(u),
        n.parentElement === e && e.removeChild(n)
    }
}
function Cp(e, t) {
    const n = e.getContext("2d", {
        alpha: !0
    });
    if (!n)
        return () => {}
        ;
    const r = 1024;
    let l = 0
      , i = 0;
    const a = () => {
        e.width = r,
        e.height = r,
        e.style.width = "100vw",
        e.style.height = "100vh"
    }
      , o = () => {
        const f = n.createImageData(r, r)
          , y = f.data;
        for (let h = 0; h < y.length; h += 4) {
            const m = Math.random() * 255;
            y[h] = m,
            y[h + 1] = m,
            y[h + 2] = m,
            y[h + 3] = t.patternAlpha
        }
        n.putImageData(f, 0, 0)
    }
      , u = () => {
        l % t.patternRefreshInterval === 0 && o(),
        l += 1,
        i = window.requestAnimationFrame(u)
    }
    ;
    return window.addEventListener("resize", a, {
        passive: !0
    }),
    a(),
    i = window.requestAnimationFrame(u),
    () => {
        window.cancelAnimationFrame(i),
        window.removeEventListener("resize", a)
    }
}
function Ep({tintHex: e}) {
    const t = j.useRef(null)
      , n = j.useRef(null);
    return j.useEffect( () => {
        const r = t.current
          , l = n.current;
        if (!r || !l)
            return;
        const a = Np(r, {
            raysOrigin: "top-center",
            raysColor: e,
            raysSpeed: 5,
            lightSpread: 150,
            rayLength: 1.5,
            fadeDistance: 1,
            saturation: 1,
            mouseInfluence: .1,
            noiseAmount: .1,
            distortion: 0
        })
          , o = Cp(l, {
            patternRefreshInterval: 1,
            patternAlpha: 7.5
        });
        return () => {
            a(),
            o()
        }
    }
    , [e]),
    s.jsxs("div", {
        id: "shader-bg",
        style: {
            "--accent-color": e
        },
        "aria-hidden": "true",
        children: [s.jsx("div", {
            className: "lighrays",
            children: s.jsx("div", {
                id: "light-rays",
                ref: t,
                className: "light-rays-container"
            })
        }), s.jsx("div", {
            className: "noise",
            children: s.jsx("canvas", {
                id: "noise-overlay",
                ref: n,
                className: "noise-overlay"
            })
        })]
    })
}
function fi(e) {
    return new Date(e).toLocaleString("ru-RU")
}
function zp(e) {
    if (!e)
        return "USER";
    const t = e.toUpperCase();
    return t === "ADMINISTRATOR" || t === "ADMIN" ? "admin" : ["BANNED", "DEFAULT", "USER", "BETA", "MEDIA", "MODER", "OWNER"].includes(t) ? t : t === "MODERATOR" ? "MODER" : "USER"
}
function Pp() {
    const [e,t] = j.useState("users")
      , [n,r] = j.useState("")
      , [l,i] = j.useState(1)
      , [a,o] = j.useState(!0)
      , [u,f] = j.useState("")
      , [y,h] = j.useState([])
      , [m,w] = j.useState([])
      , [S,v] = j.useState([])
      , [M,d] = j.useState(!1)
      , [c,p] = j.useState(null)
      , [g,C] = j.useState({
        username: "",
        email: "",
        group: "USER",
        subs: "",
        passwordReset: !1,
        hwidReset: !1
    })
      , [E,T] = j.useState({
        days: "30",
        quantity: "1"
    })
      , [N,I] = j.useState({
        value: "",
        discount: "10",
        outActive: "100",
        days: "30"
    })
      , [P,O] = j.useState({
        updates: "271",
        openDate: "2020-01-01"
    })
      , [Ae,ne] = j.useState("")
      , [rt,mt] = j.useState([])
      , Pe = 8
      , ie = localStorage.getItem("token") || ""
      , z = async () => {
        if (!ie) {
            f("Authorization required"),
            o(!1);
            return
        }
        o(!0),
        f("");
        try {
            await ee.admin.check(ie);
            const [x,L,Ft] = await Promise.all([ee.admin.users(ie), ee.admin.keys(ie), ee.admin.promos(ie)]);
            h(x.map(H => ({
                id: Number(H.id),
                username: H.username,
                email: H.email,
                group: zp(H.role),
                registeredAt: fi(H.regDate),
                hasSubscription: !!H.hasSubscription
            })).sort( (H, je) => H.id - je.id)),
            w(L.map(H => ({
                id: Number(H.id),
                value: H.value,
                days: Number(H.days),
                status: H.used === 0 ? "active" : "used",
                createdAt: fi(H.entDate),
                activationId: Number(H.used || 0)
            }))),
            v((Ft.Success || []).map(H => ({
                id: Number(H.id),
                value: H.value,
                discount: Number(H.discount),
                balance: Number(H.balance || 0),
                activations: `${Number(H.entActive || 0)}/${Number(H.outActive || 0)}`,
                expiresAt: fi(H.outDate),
                status: Number(H.entActive || 0) >= Number(H.outActive || 0) ? "used" : "active"
            })))
        } catch (x) {
            f(x.message || "Admin access denied")
        } finally {
            o(!1)
        }
    }
    ;
    j.useEffect( () => {
        z()
    }
    , []),
    j.useEffect( () => {
        const x = localStorage.getItem("stats_updates_count")
          , L = localStorage.getItem("stats_client_open_date");
        O({
            updates: x && /^\d+$/.test(x) ? x : "271",
            openDate: L && /^\d{4}-\d{2}-\d{2}$/.test(L) ? L : "2020-01-01"
        })
    }
    , []);
    const R = j.useMemo( () => {
        const x = n.trim().toLowerCase();
        return e === "users" ? y.filter(L => !x || `${L.id} ${L.username} ${L.email} ${L.hasSubscription ? "active" : "none"}`.toLowerCase().includes(x)) : e === "keys" ? m.filter(L => !x || `${L.id} ${L.value} ${L.activationId}`.toLowerCase().includes(x)) : e === "promos" ? S.filter(L => !x || `${L.id} ${L.value}`.toLowerCase().includes(x)) : []
    }
    , [e, n, y, m, S])
      , D = Math.max(1, Math.ceil(R.length / Pe))
      , $ = R.slice((l - 1) * Pe, l * Pe)
      , F = x => {
        p(x),
        C({
            username: x.username,
            email: x.email,
            group: x.group,
            subs: "",
            passwordReset: !1,
            hwidReset: !1
        }),
        d(!0),
        ne("")
    }
      , yt = () => {
        p(null),
        mt([]),
        e === "users" && C({
            username: "",
            email: "",
            group: "USER",
            subs: "",
            passwordReset: !1,
            hwidReset: !1
        }),
        d(!0),
        ne("")
    }
      , Te = async () => {
        if (ie)
            try {
                if (e === "users") {
                    const x = new URLSearchParams;
                    x.append("username", g.username.trim()),
                    g.email.trim() && x.append("email", g.email.trim()),
                    g.group.trim() && x.append("role", g.group.trim()),
                    g.subs && Number(g.subs) > 0 && x.append("subs", g.subs),
                    g.passwordReset && x.append("passwordReset", "true"),
                    g.hwidReset && x.append("hwidReset", "true");
                    const L = await ee.admin.updateUser(ie, x);
                    ne(typeof L == "string" ? L : JSON.stringify(L))
                } else if (e === "keys") {
                    const x = await ee.admin.createKeys(ie, Number(E.days), Number(E.quantity))
                      , L = Array.isArray(x == null ? void 0 : x.keys) ? x.keys : [];
                    mt(L),
                    ne(L.length > 0 ? "Keys generated" : "Saved")
                } else if (e === "promos") {
                    const x = new URLSearchParams;
                    x.append("value", N.value),
                    x.append("discount", N.discount),
                    x.append("outActived", N.outActive),
                    x.append("days", N.days),
                    await ee.admin.createPromo(ie, x),
                    ne("Saved")
                } else
                    localStorage.setItem("stats_updates_count", P.updates),
                    localStorage.setItem("stats_client_open_date", P.openDate),
                    window.dispatchEvent(new Event("site-stats-updated")),
                    ne("Stats saved");
                await z(),
                e !== "keys" && e !== "stats" && setTimeout( () => d(!1), 300)
            } catch (x) {
                ne(x.message || "Failed")
            }
    }
      , gt = async x => {
        try {
            await navigator.clipboard.writeText(x),
            ne("Copied")
        } catch {
            ne("Copy failed")
        }
    }
      , Oe = async (x, L) => {
        if (ie)
            try {
                L === "keys" && await ee.admin.deleteKey(ie, x),
                L === "promos" && await ee.admin.deletePromo(ie, x),
                await z()
            } catch (Ft) {
                f(Ft.message || "Delete failed")
            }
    }
    ;
    return a ? s.jsx("main", {
        className: "admin-page",
        children: s.jsxs("section", {
            className: "admin-shell",
            children: [s.jsx("h1", {
                className: "admin-title",
                children: "Admin Panel"
            }), s.jsx("p", {
                className: "admin-empty",
                children: "Loading..."
            })]
        })
    }) : s.jsxs("main", {
        className: "admin-page",
        children: [s.jsxs("section", {
            className: "admin-shell",
            children: [s.jsx("h1", {
                className: "admin-title",
                children: "Admin Panel"
            }), u && s.jsx("p", {
                className: "admin-empty",
                children: u
            }), s.jsxs("div", {
                className: "admin-tabs",
                children: [s.jsx("button", {
                    type: "button",
                    className: `admin-tab${e === "users" ? " is-active" : ""}`,
                    onClick: () => t("users"),
                    children: "Users"
                }), s.jsx("button", {
                    type: "button",
                    className: `admin-tab${e === "keys" ? " is-active" : ""}`,
                    onClick: () => t("keys"),
                    children: "Keys"
                }), s.jsx("button", {
                    type: "button",
                    className: `admin-tab${e === "promos" ? " is-active" : ""}`,
                    onClick: () => t("promos"),
                    children: "Promos"
                }), s.jsx("button", {
                    type: "button",
                    className: `admin-tab${e === "stats" ? " is-active" : ""}`,
                    onClick: () => t("stats"),
                    children: "Stats"
                })]
            }), e !== "stats" && s.jsxs("div", {
                className: "admin-toolbar",
                children: [s.jsx("div", {
                    className: "admin-filters",
                    children: s.jsx("input", {
                        type: "text",
                        placeholder: e === "users" ? "Search by id / user / email" : e === "keys" ? "Search by key / id" : "Search by promo / id",
                        value: n,
                        onChange: x => {
                            r(x.target.value),
                            i(1)
                        }
                    })
                }), s.jsx("button", {
                    type: "button",
                    className: "admin-create",
                    onClick: yt,
                    children: e === "users" ? "Edit/Create user" : e === "keys" ? "Generate key" : "Create promo"
                })]
            }), e === "stats" && s.jsxs("div", {
                className: "admin-stats-form admin-content-fade",
                children: [s.jsxs("label", {
                    children: ["Updates", s.jsx("input", {
                        type: "number",
                        min: 0,
                        value: P.updates,
                        onChange: x => O(L => ({
                            ...L,
                            updates: x.target.value
                        }))
                    })]
                }), s.jsxs("label", {
                    children: ["Client open date", s.jsx("input", {
                        type: "date",
                        value: P.openDate,
                        onChange: x => O(L => ({
                            ...L,
                            openDate: x.target.value
                        }))
                    })]
                }), Ae && s.jsx("p", {
                    className: "admin-empty",
                    children: Ae
                }), s.jsx("button", {
                    type: "button",
                    className: "admin-modal-save",
                    onClick: Te,
                    children: "Save stats"
                })]
            }), e !== "stats" && s.jsx("div", {
                className: "admin-table-wrap admin-content-fade",
                children: s.jsxs("table", {
                    className: "admin-table",
                    children: [s.jsxs("thead", {
                        children: [e === "users" && s.jsxs("tr", {
                            children: [s.jsx("th", {
                                children: "ID"
                            }), s.jsx("th", {
                                children: "Username"
                            }), s.jsx("th", {
                                children: "Email"
                            }), s.jsx("th", {
                                children: "Group"
                            }), s.jsx("th", {
                                children: "Subscription"
                            }), s.jsx("th", {
                                children: "Registered"
                            }), s.jsx("th", {
                                children: "Actions"
                            })]
                        }), e === "keys" && s.jsxs("tr", {
                            children: [s.jsx("th", {
                                children: "ID"
                            }), s.jsx("th", {
                                children: "Key"
                            }), s.jsx("th", {
                                children: "Days"
                            }), s.jsx("th", {
                                children: "Status"
                            }), s.jsx("th", {
                                children: "Created"
                            }), s.jsx("th", {
                                className: "admin-activation-col",
                                children: "Activation ID"
                            }), s.jsx("th", {
                                children: "Actions"
                            })]
                        }), e === "promos" && s.jsxs("tr", {
                            children: [s.jsx("th", {
                                children: "ID"
                            }), s.jsx("th", {
                                children: "Promo"
                            }), s.jsx("th", {
                                children: "Discount"
                            }), s.jsx("th", {
                                children: "Balance"
                            }), s.jsx("th", {
                                children: "Activations"
                            }), s.jsx("th", {
                                children: "Expires"
                            }), s.jsx("th", {
                                children: "Status"
                            }), s.jsx("th", {
                                children: "Actions"
                            })]
                        })]
                    }), s.jsxs("tbody", {
                        children: [e === "users" && $.map(x => s.jsxs("tr", {
                            children: [s.jsx("td", {
                                children: x.id
                            }), s.jsx("td", {
                                children: x.username
                            }), s.jsx("td", {
                                children: x.email
                            }), s.jsx("td", {
                                children: x.group
                            }), s.jsx("td", {
                                children: s.jsx("span", {
                                    className: `admin-badge admin-badge-status-${x.hasSubscription ? "active" : "used"}`,
                                    children: x.hasSubscription ? "active" : "none"
                                })
                            }), s.jsx("td", {
                                children: x.registeredAt
                            }), s.jsx("td", {
                                children: s.jsx("div", {
                                    className: "admin-actions",
                                    children: s.jsx("button", {
                                        type: "button",
                                        className: "admin-action-btn",
                                        onClick: () => F(x),
                                        children: "Edit"
                                    })
                                })
                            })]
                        }, x.id)), e === "keys" && $.map(x => s.jsxs("tr", {
                            children: [s.jsx("td", {
                                children: x.id
                            }), s.jsx("td", {
                                children: x.value
                            }), s.jsx("td", {
                                children: x.days
                            }), s.jsx("td", {
                                children: s.jsx("span", {
                                    className: `admin-badge admin-badge-status-${x.status}`,
                                    children: x.status
                                })
                            }), s.jsx("td", {
                                children: x.createdAt
                            }), s.jsx("td", {
                                className: "admin-activation-col",
                                children: x.activationId
                            }), s.jsx("td", {
                                children: s.jsx("button", {
                                    type: "button",
                                    className: "admin-action-btn",
                                    onClick: () => Oe(x.id, "keys"),
                                    children: "Delete"
                                })
                            })]
                        }, x.id)), e === "promos" && $.map(x => s.jsxs("tr", {
                            children: [s.jsx("td", {
                                children: x.id
                            }), s.jsx("td", {
                                children: x.value
                            }), s.jsxs("td", {
                                children: [x.discount, "%"]
                            }), s.jsx("td", {
                                children: x.balance
                            }), s.jsx("td", {
                                children: x.activations
                            }), s.jsx("td", {
                                children: x.expiresAt
                            }), s.jsx("td", {
                                children: s.jsx("span", {
                                    className: `admin-badge admin-badge-status-${x.status}`,
                                    children: x.status
                                })
                            }), s.jsx("td", {
                                children: s.jsx("button", {
                                    type: "button",
                                    className: "admin-action-btn",
                                    onClick: () => Oe(x.id, "promos"),
                                    children: "Delete"
                                })
                            })]
                        }, x.id)), $.length === 0 && s.jsx("tr", {
                            children: s.jsx("td", {
                                colSpan: e === "users" || e === "keys" ? 7 : 8,
                                className: "admin-empty-cell",
                                children: "Nothing found."
                            })
                        })]
                    })]
                })
            }, `${e}-${l}-${n}`), e !== "stats" && s.jsxs("div", {
                className: "admin-pagination",
                children: [s.jsx("button", {
                    type: "button",
                    disabled: l === 1,
                    onClick: () => i(x => Math.max(1, x - 1)),
                    children: "Prev"
                }), s.jsxs("span", {
                    children: [l, "/", D]
                }), s.jsx("button", {
                    type: "button",
                    disabled: l === D,
                    onClick: () => i(x => Math.min(D, x + 1)),
                    children: "Next"
                })]
            })]
        }), M && s.jsx("div", {
            className: "admin-modal-backdrop",
            role: "dialog",
            "aria-modal": "true",
            onClick: () => d(!1),
            children: s.jsxs("div", {
                className: "admin-modal",
                onClick: x => x.stopPropagation(),
                children: [s.jsxs("div", {
                    className: "admin-modal-head",
                    children: [s.jsx("h3", {
                        children: e === "users" ? c ? "Edit user" : "Create user" : e === "keys" ? "Generate key" : "Create promo"
                    }), s.jsx("button", {
                        type: "button",
                        onClick: () => d(!1),
                        children: "x"
                    })]
                }), s.jsxs("div", {
                    className: "admin-modal-body",
                    children: [e === "users" && s.jsxs(s.Fragment, {
                        children: [s.jsx("input", {
                            type: "text",
                            placeholder: "Username",
                            value: g.username,
                            onChange: x => C(L => ({
                                ...L,
                                username: x.target.value
                            }))
                        }), s.jsx("input", {
                            type: "email",
                            placeholder: "Email",
                            value: g.email,
                            onChange: x => C(L => ({
                                ...L,
                                email: x.target.value
                            }))
                        }), s.jsxs("select", {
                            value: g.group,
                            onChange: x => C(L => ({
                                ...L,
                                group: x.target.value
                            })),
                            children: [s.jsx("option", {
                                value: "BANNED",
                                children: "BANNED"
                            }), s.jsx("option", {
                                value: "DEFAULT",
                                children: "DEFAULT"
                            }), s.jsx("option", {
                                value: "USER",
                                children: "USER"
                            }), s.jsx("option", {
                                value: "BETA",
                                children: "BETA"
                            }), s.jsx("option", {
                                value: "MEDIA",
                                children: "MEDIA"
                            }), s.jsx("option", {
                                value: "MODER",
                                children: "MODER"
                            }), s.jsx("option", {
                                value: "admin",
                                children: "admin"
                            }), s.jsx("option", {
                                value: "OWNER",
                                children: "OWNER"
                            })]
                        }), s.jsx("input", {
                            type: "number",
                            placeholder: "Subscription days",
                            value: g.subs,
                            onChange: x => C(L => ({
                                ...L,
                                subs: x.target.value
                            }))
                        }), s.jsxs("label", {
                            className: "admin-check-row",
                            children: [s.jsx("input", {
                                type: "checkbox",
                                checked: g.passwordReset,
                                onChange: x => C(L => ({
                                    ...L,
                                    passwordReset: x.target.checked
                                }))
                            }), "Password reset"]
                        }), s.jsxs("label", {
                            className: "admin-check-row",
                            children: [s.jsx("input", {
                                type: "checkbox",
                                checked: g.hwidReset,
                                onChange: x => C(L => ({
                                    ...L,
                                    hwidReset: x.target.checked
                                }))
                            }), "HWID reset"]
                        })]
                    }), e === "keys" && s.jsxs(s.Fragment, {
                        children: [s.jsx("input", {
                            type: "number",
                            min: 1,
                            placeholder: "Days",
                            value: E.days,
                            onChange: x => T(L => ({
                                ...L,
                                days: x.target.value
                            }))
                        }), s.jsx("input", {
                            type: "number",
                            min: 1,
                            placeholder: "Quantity",
                            value: E.quantity,
                            onChange: x => T(L => ({
                                ...L,
                                quantity: x.target.value
                            }))
                        }), rt.length > 0 && s.jsxs(s.Fragment, {
                            children: [s.jsx("button", {
                                type: "button",
                                className: "admin-action-btn",
                                onClick: () => gt(rt.join(`
`)),
                                children: "Copy all"
                            }), rt.map(x => s.jsxs("div", {
                                className: "admin-actions",
                                style: {
                                    justifyContent: "space-between"
                                },
                                children: [s.jsx("span", {
                                    style: {
                                        wordBreak: "break-all"
                                    },
                                    children: x
                                }), s.jsx("button", {
                                    type: "button",
                                    className: "admin-action-btn",
                                    onClick: () => gt(x),
                                    children: "Copy"
                                })]
                            }, x))]
                        })]
                    }), e === "promos" && s.jsxs(s.Fragment, {
                        children: [s.jsx("input", {
                            type: "text",
                            placeholder: "Promo code",
                            value: N.value,
                            onChange: x => I(L => ({
                                ...L,
                                value: x.target.value
                            }))
                        }), s.jsx("input", {
                            type: "number",
                            min: 1,
                            max: 100,
                            placeholder: "Discount %",
                            value: N.discount,
                            onChange: x => I(L => ({
                                ...L,
                                discount: x.target.value
                            }))
                        }), s.jsx("input", {
                            type: "number",
                            min: 1,
                            placeholder: "Max activations",
                            value: N.outActive,
                            onChange: x => I(L => ({
                                ...L,
                                outActive: x.target.value
                            }))
                        }), s.jsx("input", {
                            type: "number",
                            min: 1,
                            placeholder: "Days",
                            value: N.days,
                            onChange: x => I(L => ({
                                ...L,
                                days: x.target.value
                            }))
                        })]
                    }), Ae && s.jsx("p", {
                        className: "admin-empty",
                        children: Ae
                    }), s.jsx("button", {
                        type: "button",
                        className: "admin-modal-save",
                        onClick: Te,
                        children: "Save"
                    })]
                })]
            })
        })]
    })
}
function Tp() {
    return s.jsx(Pp, {})
}
const _p = {
    "2048 MB": 2048,
    "4096 MB": 4096,
    "8192 MB": 8192,
    "16384 MB": 16384
}
  , Lp = Dc.replace(/launcher\.exe$/i, "betalauncher.exe");
function Mp(e, t=!1) {
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "-" : !t && n.getFullYear() > 2030 ? "РќР°РІСЃРµРіРґР°" : n.toISOString().slice(0, 10)
}
function Rp({user: e, setUser: t, selectedRam: n, setSelectedRam: r, onNavigate: l, onLogout: i}) {
    const {t: a} = ht()
      , [o,u] = j.useState(!1)
      , [f,y] = j.useState(!1)
      , [h,m] = j.useState(!1)
      , [w,S] = j.useState("")
      , [v,M] = j.useState(null)
      , d = e.subscriptionExpiresAt !== "-" && e.subscriptionIssuedAt !== "-"
      , c = d ? e.subscriptionExpiresAt : "-"
      , p = j.useRef(null)
      , g = () => {
        y(!0),
        window.setTimeout( () => {
            u(!1),
            y(!1),
            M(null),
            S("")
        }
        , 240)
    }
      , C = async N => {
        const I = localStorage.getItem("token");
        if (I) {
            r(N);
            try {
                await ee.settings.ram(I, _p[N])
            } catch {}
        }
    }
      , E = async () => {
        const N = localStorage.getItem("token");
        if (N)
            try {
                const I = await ee.user.sub(N);
                if (I.sub) {
                    const P = new Date(I.sub.entDate).toISOString().slice(0, 10)
                      , O = Mp(I.sub.outDate, e.role === "admin");
                    t({
                        ...e,
                        subscriptionIssuedAt: P,
                        subscriptionExpiresAt: O
                    });
                    return
                }
                t({
                    ...e,
                    subscriptionIssuedAt: "-",
                    subscriptionExpiresAt: "-"
                })
            } catch {
                t({
                    ...e,
                    subscriptionIssuedAt: "-",
                    subscriptionExpiresAt: "-"
                })
            }
    }
      , T = async () => {
        const N = w.trim();
        if (!N) {
            M({
                type: "error",
                text: a.cabinet.enterKey
            });
            return
        }
        const I = localStorage.getItem("token");
        if (I)
            try {
                await ee.auth.activateKey(I, N),
                M({
                    type: "success",
                    text: a.cabinet.activated
                }),
                await E(),
                g()
            } catch (P) {
                M({
                    type: "error",
                    text: P.message || "Activation failed"
                })
            }
    }
    ;
    return j.useEffect( () => {
        if (!h)
            return;
        const N = P => {
            p.current && (p.current.contains(P.target) || m(!1))
        }
          , I = P => {
            P.key === "Escape" && m(!1)
        }
        ;
        return document.addEventListener("mousedown", N),
        window.addEventListener("keydown", I),
        () => {
            document.removeEventListener("mousedown", N),
            window.removeEventListener("keydown", I)
        }
    }
    , [h]),
    s.jsxs(s.Fragment, {
        children: [s.jsx("main", {
            className: `cabinet-page${o ? " is-modal-open" : ""}`,
            children: s.jsx("section", {
                className: "cabinet-card",
                children: s.jsxs("div", {
                    className: "cabinet-shell",
                    children: [s.jsxs("aside", {
                        className: "cabinet-side",
                        children: [s.jsxs("article", {
                            className: "cabinet-profile-card",
                            children: [s.jsxs("div", {
                                className: "cabinet-profile",
                                children: [s.jsx("img", {
                                    src: "/assets/ava.png",
                                    alt: "Profile avatar",
                                    className: "cabinet-avatar"
                                }), s.jsxs("div", {
                                    className: "cabinet-head-meta",
                                    children: [s.jsxs("h2", {
                                        children: [e.username, " ", s.jsxs("span", {
                                            children: ["#", e.id]
                                        })]
                                    }), s.jsx("p", {
                                        children: e.role
                                    })]
                                })]
                            }), s.jsxs("p", {
                                className: "cabinet-subscription",
                                children: [a.cabinet.subExpires, ": ", s.jsx("strong", {
                                    children: c
                                })]
                            }), s.jsx("div", {
                                className: "cabinet-subscription-line",
                                "aria-hidden": "true",
                                children: s.jsx("span", {})
                            })]
                        }), s.jsxs("div", {
                            className: "cabinet-side-actions",
                            children: [e.role === "admin" && s.jsx("button", {
                                type: "button",
                                className: "cabinet-btn cabinet-btn-ghost",
                                onClick: () => l("/admin"),
                                children: a.cabinet.admin
                            }), s.jsx("button", {
                                type: "button",
                                className: "cabinet-btn cabinet-btn-ghost",
                                onClick: () => {
                                    y(!1),
                                    u(!0),
                                    S(""),
                                    M(null)
                                }
                                ,
                                children: a.cabinet.activate
                            }), d && s.jsx("button", {
                                type: "button",
                                className: "cabinet-btn cabinet-btn-ghost",
                                onClick: () => window.open(Dc, "_blank", "noopener,noreferrer"),
                                children: a.cabinet.download
                            }), d && e.role === "beta" && s.jsx("button", {
                                type: "button",
                                className: "cabinet-btn cabinet-btn-ghost",
                                onClick: () => window.open(Lp, "_blank", "noopener,noreferrer"),
                                children: a.cabinet.downloadBeta || "Бета лаунчер"
                            }), s.jsx("button", {
                                type: "button",
                                className: "cabinet-btn cabinet-btn-ghost cabinet-btn-logout",
                                onClick: i,
                                children: a.cabinet.logout
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "cabinet-main",
                        children: s.jsxs("div", {
                            className: "cabinet-grid",
                            children: [s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: a.cabinet.username
                                }), s.jsx("strong", {
                                    children: e.username
                                })]
                            }), s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: a.cabinet.email
                                }), s.jsx("strong", {
                                    children: e.email
                                })]
                            }), s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: "ID"
                                }), s.jsx("strong", {
                                    children: e.id
                                })]
                            }), s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: a.cabinet.role
                                }), s.jsx("strong", {
                                    children: e.role
                                })]
                            }), s.jsxs("article", {
                                className: "cabinet-item cabinet-item-ram",
                                children: [s.jsx("span", {
                                    children: a.cabinet.ram
                                }), s.jsxs("div", {
                                    className: "cabinet-ram-select-wrap",
                                    ref: p,
                                    children: [s.jsxs("button", {
                                        type: "button",
                                        className: "cabinet-ram-current",
                                        onClick: () => m(N => !N),
                                        "aria-expanded": h,
                                        children: [s.jsx("span", {
                                            className: "cabinet-ram-icon",
                                            "aria-hidden": "true",
                                            children: s.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                children: [s.jsx("rect", {
                                                    x: "4",
                                                    y: "7",
                                                    width: "16",
                                                    height: "10",
                                                    rx: "2"
                                                }), s.jsx("path", {
                                                    d: "M8 10v4M12 10v4M16 10v4"
                                                })]
                                            })
                                        }), s.jsx("span", {
                                            children: n
                                        })]
                                    }), h && s.jsx("div", {
                                        className: "cabinet-ram-menu",
                                        role: "listbox",
                                        "aria-label": "RAM selection",
                                        children: ["2048 MB", "4096 MB", "8192 MB", "16384 MB"].map(N => s.jsxs("button", {
                                            type: "button",
                                            className: `cabinet-ram-option${n === N ? " is-active" : ""}`,
                                            onClick: () => {
                                                C(N),
                                                m(!1)
                                            }
                                            ,
                                            children: [s.jsx("span", {
                                                className: "cabinet-ram-icon",
                                                "aria-hidden": "true",
                                                children: s.jsxs("svg", {
                                                    viewBox: "0 0 24 24",
                                                    children: [s.jsx("rect", {
                                                        x: "4",
                                                        y: "7",
                                                        width: "16",
                                                        height: "10",
                                                        rx: "2"
                                                    }), s.jsx("path", {
                                                        d: "M8 10v4M12 10v4M16 10v4"
                                                    })]
                                                })
                                            }), s.jsx("span", {
                                                children: N
                                            })]
                                        }, N))
                                    })]
                                })]
                            }), s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: a.cabinet.regDate
                                }), s.jsx("strong", {
                                    children: e.registeredAt
                                })]
                            }), d && s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: a.cabinet.subIssued
                                }), s.jsx("strong", {
                                    children: e.subscriptionIssuedAt
                                })]
                            }), d && s.jsxs("article", {
                                className: "cabinet-item",
                                children: [s.jsx("span", {
                                    children: a.cabinet.subExpires
                                }), s.jsx("strong", {
                                    children: e.subscriptionExpiresAt
                                })]
                            })]
                        })
                    })]
                })
            })
        }), o && s.jsx("div", {
            className: `cabinet-modal-backdrop${f ? " is-closing" : ""}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Activate key",
            onClick: g,
            children: s.jsxs("div", {
                className: `cabinet-modal${f ? " is-closing" : ""}`,
                onClick: N => N.stopPropagation(),
                children: [s.jsxs("div", {
                    className: "cabinet-modal-head",
                    children: [s.jsx("h3", {
                        children: a.cabinet.activateTitle
                    }), s.jsx("button", {
                        type: "button",
                        onClick: g,
                        "aria-label": "Close",
                        children: "x"
                    })]
                }), s.jsxs("div", {
                    className: "cabinet-modal-body",
                    children: [s.jsx("input", {
                        type: "text",
                        placeholder: a.cabinet.activatePlaceholder,
                        value: w,
                        onChange: N => S(N.target.value)
                    }), v && s.jsx("p", {
                        className: `cabinet-modal-msg${v.type === "success" ? " is-success" : " is-error"}`,
                        children: v.text
                    }), s.jsx("button", {
                        type: "button",
                        className: "cabinet-modal-activate",
                        onClick: T,
                        children: a.cabinet.activateBtn
                    })]
                })]
            })
        })]
    })
}
const vo = "cf-turnstile-script"
  , Dp = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
function Ip() {
    return new Promise( (e, t) => {
        if (window.turnstile) {
            e();
            return
        }
        const n = document.getElementById(vo);
        if (n) {
            n.addEventListener("load", () => e(), {
                once: !0
            }),
            n.addEventListener("error", () => t(new Error("Turnstile script load failed")), {
                once: !0
            });
            return
        }
        const r = document.createElement("script");
        r.id = vo,
        r.src = Dp,
        r.async = !0,
        r.defer = !0,
        r.onload = () => e(),
        r.onerror = () => t(new Error("Turnstile script load failed")),
        document.head.appendChild(r)
    }
    )
}
function na({siteKey: e, onTokenChange: t}) {
    const n = j.useRef(null)
      , r = j.useRef(null);
    return j.useEffect( () => {
        let l = !1;
        if (!e || e === "PASTE_YOUR_TURNSTILE_SITE_KEY") {
            t(null);
            return
        }
        return Ip().then( () => {
            l || !n.current || !window.turnstile || (r.current = window.turnstile.render(n.current, {
                sitekey: e,
                theme: "light",
                size: "flexible",
                callback: i => t(i),
                "expired-callback": () => t(null),
                "error-callback": () => t(null)
            }))
        }
        ).catch( () => {
            t(null)
        }
        ),
        () => {
            l = !0,
            r.current && window.turnstile && window.turnstile.remove(r.current),
            r.current = null
        }
    }
    , [t, e]),
    s.jsx("div", {
        className: "turnstile-wrap",
        ref: n
    })
}
function Ap({onNavigate: e}) {
    const [t,n] = j.useState("")
      , [r,l] = j.useState("")
      , [i,a] = j.useState("")
      , [o,u] = j.useState(!1)
      , [f,y] = j.useState(null)
      , h = async m => {
        m.preventDefault(),
        l(""),
        a(""),
        u(!0);
        try {
            if (!f) {
                l("Complete captcha first");
                return
            }
            const w = await ee.auth.forgotPassword(t.trim(), f);
            a((w == null ? void 0 : w.message) || "If this email exists, reset instructions were sent."),
            y(null)
        } catch (w) {
            l(w.message || "Failed to send reset email")
        } finally {
            u(!1)
        }
    }
    ;
    return s.jsx("main", {
        className: "auth-page",
        children: s.jsx("section", {
            className: "auth-page-card",
            "aria-label": "Forgot password",
            children: s.jsx("div", {
                className: "auth-switch-enter",
                children: s.jsxs("form", {
                    className: "auth-form auth-form-ref",
                    onSubmit: h,
                    children: [s.jsx("h2", {
                        className: "auth-headline",
                        children: "Reset Password"
                    }), s.jsx("p", {
                        className: "auth-subline",
                        children: "Enter your email and we will send a reset link."
                    }), s.jsxs("label", {
                        className: "auth-field",
                        children: [s.jsx("span", {
                            className: "auth-field-icon",
                            "aria-hidden": "true",
                            children: s.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                children: [s.jsx("path", {
                                    d: "M4 7h16v10H4z"
                                }), s.jsx("path", {
                                    d: "m4 8 8 6 8-6"
                                })]
                            })
                        }), s.jsx("input", {
                            type: "email",
                            placeholder: "Email",
                            value: t,
                            onChange: m => n(m.target.value)
                        })]
                    }), s.jsx(na, {
                        siteKey: ta,
                        onTokenChange: y
                    }), s.jsx("button", {
                        type: "submit",
                        className: "auth-submit auth-submit-main",
                        disabled: o || !t.trim() || !f,
                        children: o ? "Sending..." : "Send reset link"
                    }), i && s.jsx("p", {
                        className: "auth-success",
                        children: i
                    }), r && s.jsx("p", {
                        className: "auth-error",
                        children: r
                    }), s.jsx("button", {
                        type: "button",
                        className: "auth-submit auth-submit-alt",
                        onClick: () => e("/login"),
                        children: "Back to login"
                    })]
                })
            })
        })
    })
}
function Op({activeShot: e, shots: t, setAutoSlide: n, setActiveShot: r, prevShot: l, nextShot: i, isShotModalOpen: a, isShotModalClosing: o, shotModalIndex: u, setIsShotModalOpen: f, closeShotModal: y, prevShotModal: h, nextShotModal: m, onNavigate: w, usersCount: S, updatesCount: v, daysCount: M}) {
    const {t: d} = ht();
    return s.jsxs(s.Fragment, {
        children: [s.jsxs("main", {
            className: "hero",
            children: [s.jsx("h1", {
                className: "hero-rich client-name-shine",
                children: Pn
            }), s.jsx("p", {
                children: d.hero.subtitle
            }), s.jsxs("div", {
                className: "hero-actions",
                children: [s.jsxs("button", {
                    className: "hero-btn hero-btn-ghost",
                    type: "button",
                    onClick: () => w("/#screenshots"),
                    children: [s.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [s.jsx("path", {
                            d: "M12 4v16"
                        }), s.jsx("path", {
                            d: "M4 12h16"
                        })]
                    }), d.hero.screenshots]
                })]
            })]
        }), s.jsxs("section", {
            className: "screenshots",
            id: "screenshots",
            "aria-label": "Screenshots",
            children: [s.jsx("h2", {
                className: "screenshots-title",
                children: d.sections.screenshotsTitle
            }), s.jsxs("p", {
                className: "screenshots-subtitle",
                children: [s.jsx("span", {
                    className: "subtitle-emphasis",
                    children: d.sections.screenshotsSubtitleLead
                }), " ", d.sections.screenshotsSubtitleText]
            }), s.jsxs("div", {
                className: "screenshots-slider",
                children: [s.jsx("button", {
                    className: "shot-nav",
                    type: "button",
                    onClick: l,
                    "aria-label": "Previous screenshot",
                    children: "‹"
                }), s.jsx("div", {
                    className: "shot-viewport",
                    children: s.jsx("div", {
                        className: "shot-track",
                        style: {
                            transform: `translateX(-${e * 100}%)`
                        },
                        children: t.map( (c, p) => s.jsx("figure", {
                            className: "shot-card",
                            onClick: () => {
                                n(!1),
                                r(p),
                                f(!0)
                            }
                            ,
                            children: s.jsx("img", {
                                src: `/assets/screen${c}.png`,
                                alt: `Screenshot ${c}`,
                                loading: "lazy"
                            })
                        }, c))
                    })
                }), s.jsx("button", {
                    className: "shot-nav",
                    type: "button",
                    onClick: i,
                    "aria-label": "Next screenshot",
                    children: "›"
                })]
            }), s.jsx("div", {
                className: "shot-dots",
                "aria-label": "Screenshot pagination",
                children: t.map( (c, p) => s.jsx("button", {
                    type: "button",
                    className: `shot-dot${p === e ? " is-active" : ""}`,
                    onClick: () => {
                        n(!1),
                        r(p)
                    }
                }, c))
            }), a && Rc.createPortal(s.jsx("div", {
                className: `shot-lightbox-backdrop${o ? " is-closing" : ""}`,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Screenshot preview",
                onClick: y,
                children: s.jsxs("div", {
                    className: `shot-lightbox${o ? " is-closing" : ""}`,
                    onClick: c => c.stopPropagation(),
                    children: [s.jsx("button", {
                        type: "button",
                        className: "shot-lightbox-close",
                        onClick: y,
                        "aria-label": "Close",
                        children: "x"
                    }), s.jsx("button", {
                        type: "button",
                        className: "shot-lightbox-nav shot-lightbox-nav-prev",
                        onClick: h,
                        "aria-label": "Previous",
                        children: "‹"
                    }), s.jsx("figure", {
                        className: "shot-lightbox-frame",
                        children: s.jsx("div", {
                            className: "shot-lightbox-viewport",
                            children: s.jsx("div", {
                                className: "shot-lightbox-track",
                                style: {
                                    transform: `translateX(-${u * 100}%)`
                                },
                                children: t.map(c => s.jsx("div", {
                                    className: "shot-lightbox-slide",
                                    children: s.jsx("img", {
                                        className: "shot-lightbox-image",
                                        src: `/assets/screen${c}.png`,
                                        alt: `Screenshot ${c}`
                                    })
                                }, c))
                            })
                        })
                    }), s.jsx("button", {
                        type: "button",
                        className: "shot-lightbox-nav shot-lightbox-nav-next",
                        onClick: m,
                        "aria-label": "Next",
                        children: "›"
                    })]
                })
            }), document.body)]
        }), s.jsxs("section", {
            className: "faq",
            id: "faq",
            "aria-label": "Faq",
            children: [s.jsx("h2", {
                className: "faq-title",
                children: d.sections.faqTitle
            }), s.jsxs("p", {
                className: "faq-subtitle",
                children: [s.jsx("span", {
                    className: "subtitle-emphasis",
                    children: d.sections.faqSubtitleLead
                }), " ", d.sections.faqSubtitleText]
            }), s.jsxs("div", {
                className: "faq-grid",
                children: [s.jsxs("article", {
                    className: "faq-card",
                    children: [s.jsxs("h3", {
                        children: [s.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: [s.jsx("path", {
                                d: "M12 18h.01"
                            }), s.jsx("path", {
                                d: "M9.1 9a3 3 0 1 1 5 2.2c-.9.7-1.6 1.2-1.6 2.3"
                            })]
                        }), d.faq.why]
                    }), s.jsx("p", {
                        children: d.faq.whyText
                    })]
                }), s.jsxs("article", {
                    className: "faq-card",
                    children: [s.jsxs("h3", {
                        children: [s.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: [s.jsx("path", {
                                d: "M4 12h16"
                            }), s.jsx("path", {
                                d: "M12 4v16"
                            })]
                        }), d.faq.advantages]
                    }), s.jsx("p", {
                        children: d.faq.advantagesText
                    })]
                }), s.jsxs("article", {
                    className: "faq-card",
                    children: [s.jsxs("h3", {
                        children: [s.jsx("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: s.jsx("path", {
                                d: "M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"
                            })
                        }), d.faq.support]
                    }), s.jsx("p", {
                        children: d.faq.supportText
                    })]
                }), s.jsxs("article", {
                    className: "faq-card",
                    children: [s.jsxs("h3", {
                        children: [s.jsx("svg", {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: s.jsx("path", {
                                d: "m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.1L12 17.2 6.5 20l1-6.1L3 9.6l6.2-.9Z"
                            })
                        }), d.faq.rating]
                    }), s.jsx("p", {
                        children: d.faq.ratingText
                    })]
                })]
            })]
        })]
    })
}
const $p = `\uFEFF1. Общие положения\r
Администратор сайта, далее «Продавец», публикует Публичную оферту о реализации Услуг, размещенных на официальном сайте Продавца deluxelol.ru\r
\r
В соответствии со статьей 437 Гражданского Кодекса Российской Федерации (ГК РФ) данный документ является публичной офертой, и в случае принятия изложенных ниже условий физическое лицо, производящее акцепт этой оферты, осуществляет оплату Услуги Продавца в соответствии с условиями настоящего Договора. В соответствии с пунктом 3 статьи 438 ГК РФ, оплата Услуги Покупателем является акцептом оферты, что считается равносильным заключению Договора на условиях, изложенных в оферте.\r
\r
На основании вышеизложенного внимательно ознакомьтесь с текстом публичной оферты, и, если вы не согласны с каким-либо пунктом оферты, Вам предлагается отказаться от использования Услуг, предоставляемых Продавцом.\r
\r
В настоящей оферте, если контекст не требует иного, нижеприведенные термины имеют следующие значения:\r
\r
«Оферта» — публичное предложение Продавца, адресованное любому физическому лицу, заключить с ним договор на существующих условиях, содержащихся в Договоре, включая все его приложения.\r
«Покупатель» — физическое лицо, заключившее с Продавцом Договор на условиях, содержащихся в Договоре.\r
«Акцепт» — полное и безоговорочное принятие Покупателем условий Договора.\r
«Услуга» — перечень наименований ассортимента, представленный на официальном интернет-сайте.\r
«Заказ» — отдельные позиции из ассортиментного перечня Услуг, указанные Покупателем при оформлении заявки на интернет-сайте.\r
2. Предмет договора\r
Продавец реализует Услуги в соответствии с действующим прейскурантом, опубликованным на интернет-сайте Продавца в интерактивной форме, а Покупатель производит оплату и принимает Услугу в соответствии с условиями настоящего Договора.\r
\r
Настоящий Договор и приложения к нему являются официальными документами Продавца и неотъемлемой частью оферты.\r
\r
3. Оформление заказа\r
Заказ Услуги осуществляется Покупателем через Интернет-сайт «»\r
\r
При регистрации на интернет-сайте Продавца Покупатель обязуется предоставить следующую регистрационную информацию о себе: никнейм, адрес электронной почты.\r
\r
Оплата Покупателем самостоятельно оформленного на интернет-сайте Заказа означает согласие Покупателя с условиями настоящего Договора. День оплаты Заказа является датой заключения Договора между Продавцом и Покупателем.\r
\r
Все информационные материалы, представленные на сайте «», носят справочный характер и не могут в полной мере передавать достоверную информацию об определенных свойствах и характеристиках Услуги. В случае возникновения у Покупателя вопросов, касающихся Услуги, перед оформлением Заказа ему необходимо обратиться за консультацией к Продавцу.\r
\r
Срок исполнения Заказа - 1 рабочий день. Срок исполнения Заказа в исключительных случаях может быть оговорен с Покупателем индивидуально в зависимости от типа предоставляемых Услуг. В случае невозможности оказания Услуги Продавцом, в том числе по причинам, не зависящим от последнего, Продавец вправе аннулировать указанную Услугу из Заказа Покупателя. Продавец обязуется уведомить Покупателя об изменении его Заказа через Электронную почту.\r
\r
Заказ считается выполненным в момент принятия услуги Покупателем.\r
\r
В случае предоставления Покупателем недостоверной информации его контактных данных Продавец за ненадлежащее исполнение Заказа ответственности не несет.\r
\r
В случае ненадлежащего исполнения Заказа по вине Продавца повторная реализация Заказа осуществляется бесплатно.\r
\r
4. Оплата заказа\r
Оплата исполненного Заказа осуществляется путем передачи Покупателем денежных средств с помощью электронных платежных средств на счет Продавца. Подтверждением оплаты исполненного Заказа является чек.\r
\r
Цены на Услуги, указанные на интернет-сайте «», могут быть изменены Продавцом в одностороннем порядке без уведомления Покупателя.\r
\r
Денежные средства принимаются одним способом: безналичным платежом.\r
\r
5. Возврат заказа\r
В соответствии с п. 4. ст. 26.1. Закона РФ № 2300-I «О Защите прав потребителей» Покупатель вправе отказаться от заказанной Услуги в любое время до момента исполнения Заказа.\r
\r
В случае предоставления Услуги ненадлежащего качества, Покупатель обязуется обратиться к Продавцу в максимально короткие сроки.\r
\r
В соответствии со ст. 22 Закона РФ № 2300-I «О Защите прав потребителей» уплаченная Покупателем сумма за Услугу ненадлежащего качества подлежит возврату Покупателю в течение 10 календарных дней с момента предъявления соответствующего требования. Возврат денежных средств осуществляется на электронный счет Покупателя в течение 5-ти рабочих дней.\r
\r
Для возврата денежных средств за Услугу надлежащего качества (см. приложение 1), должны быть выполнены следующие условия: отсутствует успешный запуск программного обеспечения, который фиксируется на интернет-сервере Продавца при открытии меню программы, запущенной в игре; отсутствует отказ Покупателя от помощи Продавца, при невозможности запуска программного обеспечения на компьютере Покупателя, вызванной сторонним программным обеспечением, или другой проблемой, которую может устранить Продавец, предоставив инструкции по устранению для Покупателя.\r
\r
В остальных случаях возврат денежных средств за услугу надлежащего качества невозможен.\r
\r
Для возврата денежных средств за услугу ненадлежащего качества (см. приложение 1), составляются накладная или акт о возврате денежных средств, в котором указываются: полное фирменное наименование Продавца; фамилия, имя и отчество; наименование Услуги; дата оказания Услуги; сумма, подлежащая возврату; подписи Продавца и Покупателя.\r
\r
Возможен возврат денежных средств в случае отсутствия факта начала оказания услуги.\r
\r
Покупатель имеет право предъявить требование Продавцу о возврате стоимости Услуги не позднее чем через 7 (семь) дней с даты принятия Заказа.\r
\r
Для возврата денежных средств на банковскую карту Заказчику необходимо заполнить «Заявление о возврате денежных средств», которое высылается по требованию Компанией на электронный адрес Заказчика, и отправить его по электронному адресу ">support@. Возврат денежных средств будет осуществлен на банковский счет Заказчика, с которого производилась оплата Услуги, в течение 5 (пяти) рабочих дней со дня получения «Заявление о возврате денежных средств» Компанией.\r
\r
Срок рассмотрения Заявления и возврата денежных средств Заказчику начинает исчисляться с момента получения Компанией Заявления и рассчитывается в рабочих днях без учета праздников/выходных дней. Если заявление поступило Компании после 15.00 рабочего дня или в праздничный/выходной день, моментом получения Компанией Заявления считается следующий рабочий день.\r
\r
6. Права, обязанности и ответственность\r
Продавец не несет ответственности за ненадлежащее использование Услуг Покупателем, заказанных на интернет-сайте или через Оператора.\r
\r
Данный сайт и вся содержащаяся на нем информация и материалы представлены Вам по принципу «как есть», без каких-либо гарантий.\r
\r
Мы (в т.ч. наши партнеры) не несем ответственность за прямой, косвенный, случайный или иной вид ущерба (включая, помимо всего прочего, любого рода баны и блокировки), вследствие использования или невозможности использования содержания, материалов или функционала данного сайта.\r
\r
Продавец вправе передавать свои права и обязанности по исполнению Заказов третьим лицам.\r
\r
Все претензии по ненадлежащему исполнению заказа Покупатель вправе направить на адрес электронной почты ">support@. Вся поступившая информация обрабатывается в течение 10 (десяти) рабочих дней.\r
\r
Покупатель не в праве передавать, продавать или обменивать доступ к Услуге, оказанную Продавцом.\r
\r
Продавец не несёт ответственности за последствия использования программного обеспечения Покупателем, включая, но не ограничиваясь: нарушением правил сторонних игровых серверов, блокировкой игровых аккаунтов, ограничением доступа к игровым платформам или санкциями со стороны третьих лиц.\r
\r
Программное обеспечение предоставляется исключительно для ознакомительных и учебных целей. Продавец не поощряет и не рекомендует использовать программное обеспечение для нарушения пользовательских соглашений Mojang, Microsoft или администраторов любых частных серверов Minecraft, включая, но не ограничиваясь: Anarchia, Hypixel и другими.\r
\r
Покупатель принимает на себя полную ответственность за последствия использования программного обеспечения и обязуется самостоятельно оценивать риски, связанные с его применением в игровых средах.\r
\r
Продавец не несёт ответственности за какие-либо убытки, прямо или косвенно вызванные использованием программного обеспечения Покупателем в онлайн-играх, в том числе, но не ограничиваясь, техническими сбоями, санкциями от третьих лиц, блокировками аккаунтов или утратой доступа к игровым сервисам.\r
\r
Программное обеспечение не содержит вредоносного кода, не предназначено для несанкционированного доступа, разрушения, нарушения или обхода защиты компьютерных систем, в том числе игровых серверов. Его функции реализуются исключительно на стороне клиента и под полным контролем пользователя.\r
\r
7. Минимальные системные требования\r
Процессор: Intel Core i3-3210 или AMD A8-7600 APU или эквивалентный процессор\r
Оперативная память: 4 GB RAM\r
Видеокарта: Intel HD Graphics 4000 или AMD Radeon R5 с OpenGL 4.4 поддержкой\r
Место на жестком диске: 8 GB свободного пространства\r
Операционная система: Windows 10, Windows 11 или выше\r
Рекомендуемые системные требования\r
Процессор: Intel Core i5-4690 или AMD A10-7800 или эквивалентный процессор\r
Оперативная память: 8 GB RAM\r
Видеокарта: NVIDIA GeForce 700 Series или AMD Radeon Rx 200 Series с OpenGL 4.5 поддержкой\r
Место на жестком диске: 12 GB свободного пространства\r
Операционная система: Windows 10, Windows 11 или выше\r
8. Приложение 1\r
Услуга надлежащего качества — программное обеспечение, предоставленное Покупателю, работающее без нареканий на компьютере Продавца и других Покупателей, что подтверждается информационной системой Продавца, в которой зафиксированы успешные использования программного обеспечения всех Покупателей.\r
\r
— Администратор сайта`
  , Hp = `1. General Provisions
The website administrator, hereinafter referred to as the "Seller", publishes this public offer for the provision of digital services on the official website.

By paying for a service, the Buyer fully and unconditionally accepts this offer and enters into an agreement with the Seller under these terms.

2. Subject Of The Agreement
The Seller provides digital software services according to the current price list published on the website, and the Buyer pays for and uses these services in accordance with this offer.

3. Order Placement And Fulfillment
Orders are placed by the Buyer through the website account. During registration and ordering, the Buyer must provide valid account data (username and email).

Standard order fulfillment time is up to 1 business day unless otherwise specified. In exceptional cases, timing may be agreed individually depending on the service type.

If service provision is impossible due to technical or other reasons, the Seller has the right to cancel the order and notify the Buyer by email.

4. Payment
Payment is made using available electronic payment methods. Confirmation of payment is a successful payment transaction.

Prices shown on the website may be changed by the Seller unilaterally for future orders.

5. Refund Policy
The Buyer may request cancellation before the service has been provided.

For quality-related issues, the Buyer must contact support as soon as possible.

Refund requests are processed in accordance with applicable law and this offer. If a refund is approved, funds are returned to the original payment method within the applicable processing period.

6. Liability And Limitations
Services are provided on an "as is" basis.

The Seller is not liable for bans, restrictions, sanctions, or account losses caused by third-party platforms, game servers, service policies, or Buyer actions.

The Buyer is solely responsible for how software is used and for compliance with third-party rules and agreements.

7. System Requirements
Minimum and recommended system requirements are specified by the Seller and must be reviewed by the Buyer before purchase.

8. Support And Claims
Support requests and claims are accepted via support email and processed within business timelines.
`
  , Wp = `1. Загальні положення
Адміністратор сайту, далі "Продавець", публікує цю публічну оферту щодо надання цифрових послуг на офіційному сайті.

Оплачуючи послугу, Покупець повністю та беззастережно приймає умови цієї оферти і укладає договір із Продавцем на зазначених умовах.

2. Предмет договору
Продавець надає цифрові програмні послуги згідно з актуальним прайсом, опублікованим на сайті, а Покупець оплачує та використовує ці послуги відповідно до умов оферти.

3. Оформлення та виконання замовлення
Замовлення оформлюються Покупцем через обліковий запис на сайті. Під час реєстрації та оформлення замовлення Покупець зобов'язаний надати коректні дані (нікнейм та email).

Стандартний строк виконання замовлення - до 1 робочого дня, якщо інше не погоджено окремо. В окремих випадках строк може узгоджуватися індивідуально залежно від типу послуги.

У разі неможливості надання послуги з технічних або інших причин Продавець має право скасувати замовлення та повідомити Покупця електронною поштою.

4. Оплата
Оплата здійснюється доступними електронними способами. Підтвердженням оплати є успішна платіжна операція.

Ціни на сайті можуть бути змінені Продавцем в односторонньому порядку для майбутніх замовлень.

5. Політика повернень
Покупець може скасувати замовлення до моменту фактичного надання послуги.

У разі претензій щодо якості Покупець зобов'язаний якомога швидше звернутися до служби підтримки.

Запити на повернення розглядаються відповідно до чинного законодавства та умов цієї оферти. У разі схвалення повернення кошти повертаються на початковий спосіб оплати у встановлений строк.

6. Відповідальність і обмеження
Послуги надаються за принципом "як є".

Продавець не несе відповідальності за блокування, обмеження, санкції або втрату доступу до акаунтів, спричинені діями третіх сторін, правилами платформ/серверів або діями Покупця.

Покупець самостійно несе відповідальність за спосіб використання програмного забезпечення та дотримання правил і угод третіх сторін.

7. Системні вимоги
Мінімальні та рекомендовані системні вимоги визначаються Продавцем і мають бути перевірені Покупцем до придбання.

8. Підтримка та звернення
Запити до підтримки та претензії приймаються через email підтримки та обробляються у робочі строки.
`
  , Vp = `1. Postanowienia ogólne
Administrator strony, dalej "Sprzedawca", publikuje niniejszą ofertę publiczną dotyczącą świadczenia usług cyfrowych na oficjalnej stronie internetowej.

Dokonując płatności za usługę, Kupujący w pełni i bezwarunkowo akceptuje warunki niniejszej oferty oraz zawiera umowę ze Sprzedawcą na wskazanych zasadach.

2. Przedmiot umowy
Sprzedawca świadczy cyfrowe usługi programowe zgodnie z aktualnym cennikiem opublikowanym na stronie, a Kupujący opłaca i korzysta z tych usług zgodnie z warunkami oferty.

3. Składanie i realizacja zamówień
Zamówienia są składane przez Kupującego za pośrednictwem konta na stronie. Podczas rejestracji i składania zamówienia Kupujący zobowiązany jest podać poprawne dane (nazwa użytkownika i email).

Standardowy czas realizacji zamówienia wynosi do 1 dnia roboczego, o ile nie uzgodniono inaczej. W szczególnych przypadkach termin może być ustalony indywidualnie, zależnie od rodzaju usługi.

W przypadku braku możliwości realizacji usługi z przyczyn technicznych lub innych Sprzedawca ma prawo anulować zamówienie i poinformować Kupującego drogą mailową.

4. Płatność
Płatność odbywa się przy użyciu dostępnych metod elektronicznych. Potwierdzeniem płatności jest poprawnie zakończona transakcja.

Ceny prezentowane na stronie mogą zostać jednostronnie zmienione przez Sprzedawcę dla przyszłych zamówień.

5. Polityka zwrotów
Kupujący może anulować zamówienie przed rozpoczęciem realizacji usługi.

W przypadku zastrzeżeń dotyczących jakości Kupujący powinien jak najszybciej skontaktować się z pomocą techniczną.

Wnioski o zwrot są rozpatrywane zgodnie z obowiązującym prawem i warunkami niniejszej oferty. W przypadku akceptacji zwrotu środki wracają na pierwotną metodę płatności w obowiązującym terminie.

6. Odpowiedzialność i ograniczenia
Usługi są świadczone na zasadzie "tak jak są".

Sprzedawca nie ponosi odpowiedzialności za blokady, ograniczenia, sankcje ani utratę dostępu do kont wynikające z działań podmiotów trzecich, zasad platform/serwerów lub działań Kupującego.

Kupujący ponosi pełną odpowiedzialność za sposób korzystania z oprogramowania oraz za przestrzeganie zasad i umów stron trzecich.

7. Wymagania systemowe
Minimalne i zalecane wymagania systemowe są określane przez Sprzedawcę i powinny zostać sprawdzone przez Kupującego przed zakupem.

8. Wsparcie i reklamacje
Zgłoszenia do wsparcia oraz reklamacje są przyjmowane przez email wsparcia i rozpatrywane w godzinach roboczych.
`;
function Kp() {
    const {t: e, language: t} = ht()
      , r = (t === "ru" ? $p : t === "uk" ? Wp : t === "pl" ? Vp : Hp).split(/\r?\n\r?\n/).map(l => l.trim()).filter(Boolean);
    return s.jsx("main", {
        className: "legal-page",
        children: s.jsxs("section", {
            className: "legal-card",
            children: [s.jsx("h1", {
                children: e.terms.title
            }), r.map( (l, i) => s.jsx("p", {
                children: l
            }, i))]
        })
    })
}
function pi(e, t, n) {
    return Math.min(n, Math.max(t, e))
}
function xo(e, t) {
    const n = e.replace("#", "")
      , r = n.length === 3 ? n.split("").map(u => u + u).join("") : n
      , l = Number.parseInt(r, 16)
      , i = pi((l >> 16 & 255) + t, 0, 255)
      , a = pi((l >> 8 & 255) + t, 0, 255)
      , o = pi((l & 255) + t, 0, 255);
    return `#${i.toString(16).padStart(2, "0")}${a.toString(16).padStart(2, "0")}${o.toString(16).padStart(2, "0")}`
}
function wo(e) {
    return new Date(e).toISOString().slice(0, 10)
}
function Qp(e, t=!1) {
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "-" : !t && n.getFullYear() > 2030 ? "РќР°РІСЃРµРіРґР°" : n.toISOString().slice(0, 10)
}
function qp() {
    const {t: e} = ht()
      , [t,n] = j.useState(window.location.pathname)
      , [r,l] = j.useState(window.location.hash)
      , [i,a] = j.useState(null)
      , [o,u] = j.useState(null)
      , [f,y] = j.useState("")
      , [h,m] = j.useState("")
      , [w,S] = j.useState("")
      , [v,M] = j.useState(!1)
      , [d,c] = j.useState("4096 MB")
      , [p,g] = j.useState(null)
      , [C,E] = j.useState("23,271")
      , [T,N] = j.useState(String(ho))
      , [I,P] = j.useState(String(mo))
      , O = [1, 2, 3, 4, 5]
      , [Ae,ne] = j.useState(0)
      , [rt,mt] = j.useState(!0)
      , [Pe,ie] = j.useState(!1)
      , [z,R] = j.useState(!1)
      , [D,$] = j.useState(0);
    j.useEffect( () => {
        const A = window.location.hash.toLowerCase();
        A === "#terms" && F("/terms")
    }
    , []),
    j.useEffect( () => {
        ee.user.count().then(A => {
            const b = Number.parseInt(String(A).replace(/[^\d]/g, ""), 10);
            Number.isNaN(b) || E(new Intl.NumberFormat("en-US").format(b))
        }
        ).catch( () => {}
        )
    }
    , []),
    j.useEffect( () => {
        const A = pe => {
            const Xe = new Date(pe);
            if (Number.isNaN(Xe.getTime()))
                return String(mo);
            const Ut = Math.floor((new Date().getTime() - Xe.getTime()) / (1e3 * 60 * 60 * 24));
            return String(Math.max(0, Ut))
        }
          , b = () => {
            const pe = localStorage.getItem("stats_updates_count")
              , Xe = localStorage.getItem("stats_client_open_date") || mp;
            N(pe && /^\d+$/.test(pe) ? pe : String(ho)),
            P(A(Xe))
        }
        ;
        return b(),
        window.addEventListener("site-stats-updated", b),
        () => window.removeEventListener("site-stats-updated", b)
    }
    , []),
    j.useEffect( () => {
        const A = document.documentElement;
        A.style.setProperty("--site", Br),
        A.style.setProperty("--site-light", xo(Br, 30)),
        A.style.setProperty("--site-bright", xo(Br, 65)),
        document.title = `${Pn}`
    }
    , []),
    j.useEffect( () => {
        const A = t === "/cabinet";
        return document.body.classList.toggle("is-cabinet-page", A),
        () => {
            document.body.classList.remove("is-cabinet-page")
        }
    }
    , [t]),
    j.useEffect( () => {
        const A = () => n(window.location.pathname)
          , b = () => l(window.location.hash);
        return window.addEventListener("popstate", A),
        window.addEventListener("hashchange", b),
        () => {
            window.removeEventListener("popstate", A),
            window.removeEventListener("hashchange", b)
        }
    }
    , []);
    const F = A => {
    }
    ;
    const Te = async () => {
        const A = localStorage.getItem("token");
        if (A) {
            M(!0);
            try {
                const b = await ee.user.profile(A)
                  , pe = b.role.toUpperCase()
                  , Xe = ["ADMIN", "OWNER", "MODER"].includes(pe)
                  , Mn = pe === "BETA";
                let Ut = "-"
                  , Rn = "-";
                try {
                    const en = await ee.user.sub(A);
                    en.sub && (Ut = wo(en.sub.entDate),
                    Rn = Qp(en.sub.outDate, Xe))
                } catch {}
                g({
                    id: b.id != null ? String(b.id) : "-",
                    username: b.username,
                    email: b.email,
                    role: Xe ? "admin" : Mn ? "beta" : "user",
                    ramAllocated: "4096 MB",
                    registeredAt: wo(b.regDate),
                    subscriptionIssuedAt: Ut,
                    subscriptionExpiresAt: Rn
                })
            } catch (b) {
                const pe = b.status;
                (pe === 401 || pe === 403) && (localStorage.removeItem("token"),
                g(null))
            } finally {
                M(!1)
            }
        }
    }
    ;
    j.useEffect( () => {
        if (t === "/cabinet" || t === "/admin") {
            if (!localStorage.getItem("token")) {
                F("/login");
                return
            }
            Te()
        }
    }
    , [t]);
    const gt = async A => {
        if (A.preventDefault(),
        !!i)
            try {
                const b = await ee.auth.login(f.trim(), h, i);
                if (b.token) {
                    localStorage.setItem("token", b.token),
                    S(""),
                    await Te(),
                    F("/cabinet");
                    return
                }
                S(b.message || e.auth.wrong)
            } catch (b) {
                S(b.message || e.auth.wrong)
            }
    }
      , Oe = j.useCallback( () => {
        mt(!1),
        ne(A => (A - 1 + O.length) % O.length)
    }
    , [O.length])
      , x = j.useCallback( () => {
        mt(!1),
        ne(A => (A + 1) % O.length)
    }
    , [O.length])
      , L = j.useCallback( () => {
        $(A => (A - 1 + O.length) % O.length)
    }
    , [O.length])
      , Ft = j.useCallback( () => {
        $(A => (A + 1) % O.length)
    }
    , [O.length]);
    j.useEffect( () => {
        if (!rt || t !== "/")
            return;
        const A = window.setInterval( () => {
            ne(b => (b + 1) % O.length)
        }
        , 5e3);
        return () => window.clearInterval(A)
    }
    , [t, O.length, rt]),
    j.useEffect( () => {
        if (!Pe)
            return;
        const A = b => {
            b.key === "Escape" && H(),
            b.key === "ArrowLeft" && L(),
            b.key === "ArrowRight" && Ft()
        }
        ;
        return window.addEventListener("keydown", A),
        () => window.removeEventListener("keydown", A)
    }
    , [Pe, L, Ft, H]),
    j.useEffect( () => {
        if (!Pe) {
            document.body.classList.remove("no-scroll");
            return
        }
        return document.body.classList.add("no-scroll"),
        () => {
            document.body.classList.remove("no-scroll")
        }
    }
    , [Pe]);
    function H() {
        R(!0),
        window.setTimeout( () => {
            ie(!1),
            R(!1)
        }
        , 220)
    }
    let je;
    return t === "/forgot-password" ? je = s.jsx(Ap, {
    }) : je = s.jsx(Op, {
        shots: O,
    }),
    s.jsxs(s.Fragment, {
        children: [s.jsx(Ep, {
            tintHex: Br
        }), s.jsx(wp, {
            pathname: t,
            hash: r,
            isAuthed: !!localStorage.getItem("token"),
            onNavigate: F
        }), je, s.jsx(xp, {})]
    })
}
hi.createRoot(document.getElementById("root")).render(s.jsx(Jc.StrictMode, {
    children: s.jsx(vp, {
        children: s.jsx(qp, {})
    })
}));