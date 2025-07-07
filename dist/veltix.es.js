import * as S from "react";
import ee, { createContext as zu, useContext as Gu, forwardRef as $u, createElement as On, useLayoutEffect as iv, useState as Bt, useEffect as Ht, useRef as er, useCallback as Rn, useImperativeHandle as Hb, PureComponent as Yb, memo as Ub } from "react";
import * as zs from "react-dom";
import Xb from "react-dom";
var Da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function av(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ma = { exports: {} }, Qo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function qb() {
  if (qd) return Qo;
  qd = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var s in o)
        s !== "key" && (i[s] = o[s]);
    } else i = o;
    return o = i.ref, {
      $$typeof: t,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Qo.Fragment = e, Qo.jsx = r, Qo.jsxs = r, Qo;
}
var ti = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function Kb() {
  return Kd || (Kd = 1, process.env.NODE_ENV !== "production" && function() {
    function t(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === D ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case h:
          return "Fragment";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case _:
          return "Suspense";
        case E:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case g:
            return "Portal";
          case b:
            return (j.displayName || "Context") + ".Provider";
          case x:
            return (j._context.displayName || "Context") + ".Consumer";
          case w:
            var B = j.render;
            return j = j.displayName, j || (j = B.displayName || B.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case C:
            return B = j.displayName || null, B !== null ? B : t(j.type) || "Memo";
          case T:
            B = j._payload, j = j._init;
            try {
              return t(j(B));
            } catch {
            }
        }
      return null;
    }
    function e(j) {
      return "" + j;
    }
    function r(j) {
      try {
        e(j);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var Y = B.error, K = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return Y.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), e(j);
      }
    }
    function n(j) {
      if (j === h) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === T)
        return "<...>";
      try {
        var B = t(j);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var j = N.A;
      return j === null ? null : j.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(j) {
      if (M.call(j, "key")) {
        var B = Object.getOwnPropertyDescriptor(j, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function s(j, B) {
      function Y() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: Y,
        configurable: !0
      });
    }
    function c() {
      var j = t(this.type);
      return $[j] || ($[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function l(j, B, Y, K, X, H, Q, W) {
      return Y = H.ref, j = {
        $$typeof: p,
        type: j,
        key: B,
        props: H,
        _owner: X
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function u(j, B, Y, K, X, H, Q, W) {
      var q = B.children;
      if (q !== void 0)
        if (K)
          if (O(q)) {
            for (K = 0; K < q.length; K++)
              f(q[K]);
            Object.freeze && Object.freeze(q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(q);
      if (M.call(B, "key")) {
        q = t(j);
        var ot = Object.keys(B).filter(function(U) {
          return U !== "key";
        });
        K = 0 < ot.length ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}", z[q + K] || (ot = 0 < ot.length ? "{" + ot.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          q,
          ot,
          q
        ), z[q + K] = !0);
      }
      if (q = null, Y !== void 0 && (r(Y), q = "" + Y), a(B) && (r(B.key), q = "" + B.key), "key" in B) {
        Y = {};
        for (var nt in B)
          nt !== "key" && (Y[nt] = B[nt]);
      } else Y = B;
      return q && s(
        Y,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), l(
        j,
        q,
        H,
        X,
        o(),
        Y,
        Q,
        W
      );
    }
    function f(j) {
      typeof j == "object" && j !== null && j.$$typeof === p && j._store && (j._store.validated = 1);
    }
    var d = ee, p = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), b = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), N = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, O = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(j) {
        return j();
      }
    };
    var F, $ = {}, V = d["react-stack-bottom-frame"].bind(
      d,
      i
    )(), L = k(n(i)), z = {};
    ti.Fragment = h, ti.jsx = function(j, B, Y, K, X) {
      var H = 1e4 > N.recentlyCreatedOwnerStacks++;
      return u(
        j,
        B,
        Y,
        !1,
        K,
        X,
        H ? Error("react-stack-top-frame") : V,
        H ? k(n(j)) : L
      );
    }, ti.jsxs = function(j, B, Y, K, X) {
      var H = 1e4 > N.recentlyCreatedOwnerStacks++;
      return u(
        j,
        B,
        Y,
        !0,
        K,
        X,
        H ? Error("react-stack-top-frame") : V,
        H ? k(n(j)) : L
      );
    };
  }()), ti;
}
var Zd;
function Zb() {
  return Zd || (Zd = 1, process.env.NODE_ENV === "production" ? Ma.exports = qb() : Ma.exports = Kb()), Ma.exports;
}
var v = Zb();
class sv {
  constructor(e = []) {
    this.components = new Map(e.map((r) => [r.type, r]));
  }
  /**
   * Register a component with the given name
   * @param name - Unique identifier for the component
   * @param component - Component to register
   */
  register(e, r) {
    if (this.components.has(e))
      throw new Error(`Component "${e}" is already registered`);
    this.components.set(e, r);
  }
  /**
   * Get a registered component by name
   * @param name - Name of the component to retrieve
   * @returns The registered component or undefined if not found
   */
  get(e) {
    return this.components.get(e);
  }
  /**
   * Check if a component is registered
   * @param name - Name of the component to check
   */
  has(e) {
    return this.components.has(e);
  }
  /**
   * Remove a registered component
   * @param name - Name of the component to remove
   */
  unregister(e) {
    if (!this.components.has(e))
      throw new Error(`Component "${e}" is not registered`);
    this.components.delete(e);
  }
  /**
   * Get all registered component names
   */
  getRegisteredNames() {
    return Array.from(this.components.keys());
  }
  /**
   * Clear all registered components
   */
  clear() {
    this.components.clear();
  }
  /**
   * Get all registered components
   */
  all() {
    return Array.from(this.components.values());
  }
}
new sv();
const Gs = zu(
  null
), wr = () => {
  const t = Gu(Gs);
  if (!t)
    throw new Error("useVeltix must be used within a VeltixProvider");
  return t;
}, Jd = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (l, u) => {
    const f = typeof l == "function" ? l(e) : l;
    if (!Object.is(f, e)) {
      const d = e;
      e = u ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((p) => p(e, d));
    }
  }, o = () => e, s = { setState: n, getState: o, getInitialState: () => c, subscribe: (l) => (r.add(l), () => r.delete(l)) }, c = e = t(n, o, s);
  return s;
}, Jb = (t) => t ? Jd(t) : Jd, Qb = (t) => t;
function tw(t, e = Qb) {
  const r = ee.useSyncExternalStore(
    t.subscribe,
    () => e(t.getState()),
    () => e(t.getInitialState())
  );
  return ee.useDebugValue(r), r;
}
const Qd = (t) => {
  const e = Jb(t), r = (n) => tw(e, n);
  return Object.assign(r, e), r;
}, Ir = (t) => t ? Qd(t) : Qd, cv = Ir((t) => ({
  api: null,
  setApi: (e) => t({ api: e })
})), ue = [];
for (let t = 0; t < 256; ++t)
  ue.push((t + 256).toString(16).slice(1));
function ew(t, e = 0) {
  return (ue[t[e + 0]] + ue[t[e + 1]] + ue[t[e + 2]] + ue[t[e + 3]] + "-" + ue[t[e + 4]] + ue[t[e + 5]] + "-" + ue[t[e + 6]] + ue[t[e + 7]] + "-" + ue[t[e + 8]] + ue[t[e + 9]] + "-" + ue[t[e + 10]] + ue[t[e + 11]] + ue[t[e + 12]] + ue[t[e + 13]] + ue[t[e + 14]] + ue[t[e + 15]]).toLowerCase();
}
let zc;
const rw = new Uint8Array(16);
function nw() {
  if (!zc) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    zc = crypto.getRandomValues.bind(crypto);
  }
  return zc(rw);
}
const ow = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), tp = { randomUUID: ow };
function mo(t, e, r) {
  if (tp.randomUUID && !t)
    return tp.randomUUID();
  t = t || {};
  const n = t.random ?? t.rng?.() ?? nw();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, ew(n);
}
const ep = (t) => Symbol.iterator in t, rp = (t) => (
  // HACK: avoid checking entries type
  "entries" in t
), np = (t, e) => {
  const r = t instanceof Map ? t : new Map(t.entries()), n = e instanceof Map ? e : new Map(e.entries());
  if (r.size !== n.size)
    return !1;
  for (const [o, i] of r)
    if (!Object.is(i, n.get(o)))
      return !1;
  return !0;
}, iw = (t, e) => {
  const r = t[Symbol.iterator](), n = e[Symbol.iterator]();
  let o = r.next(), i = n.next();
  for (; !o.done && !i.done; ) {
    if (!Object.is(o.value, i.value))
      return !1;
    o = r.next(), i = n.next();
  }
  return !!o.done && !!i.done;
};
function aw(t, e) {
  return Object.is(t, e) ? !0 : typeof t != "object" || t === null || typeof e != "object" || e === null || Object.getPrototypeOf(t) !== Object.getPrototypeOf(e) ? !1 : ep(t) && ep(e) ? rp(t) && rp(e) ? np(t, e) : iw(t, e) : np(
    { entries: () => Object.entries(t) },
    { entries: () => Object.entries(e) }
  );
}
function Vu(t) {
  const e = ee.useRef(void 0);
  return (r) => {
    const n = t(r);
    return aw(e.current, n) ? e.current : e.current = n;
  };
}
const sw = {
  id: mo(),
  title: "Untitled",
  docs: [
    {
      id: mo(),
      title: "Page 1",
      nodes: []
    }
  ]
}, It = Ir((t, e) => ({
  json: sw,
  initialize: (r) => t({ json: r }),
  update: (r) => t((n) => ({
    json: n.json ? { ...n.json, ...r } : void 0
  })),
  // 页面相关操作
  addDoc: (r) => t((n) => n.json ? {
    json: {
      ...n.json,
      docs: [...n.json.docs, r]
    }
  } : { json: void 0 }),
  removeDoc: (r) => t((n) => n.json ? {
    json: {
      ...n.json,
      docs: n.json.docs.filter((o) => o.id !== r)
    }
  } : { json: void 0 }),
  updateDoc: (r, n) => t((o) => {
    if (!o.json) return { json: void 0 };
    const i = o.json.docs.map((a) => a.id === r ? { ...a, ...n } : a);
    return {
      json: {
        ...o.json,
        docs: i
      }
    };
  }),
  getDoc: (r) => {
    const n = e();
    if (n.json)
      return n.json.docs.find((o) => o.id === r);
  },
  // 组件相关操作
  updateNode: (r, n, o) => t((i) => {
    if (!i.json) return { json: void 0 };
    const a = (c) => c.map((l) => l.id === n ? { ...l, ...o } : l.children && l.children.length > 0 ? {
      ...l,
      children: a(l.children)
    } : l), s = i.json.docs.map((c) => c.id !== r ? c : {
      ...c,
      nodes: a(c.nodes)
    });
    return {
      json: {
        ...i.json,
        docs: s
      }
    };
  }),
  createNode: (r, n) => t((o) => {
    if (!o.json) return { json: void 0 };
    const i = o.json.docs.map((a) => a.id !== r ? a : {
      ...a,
      nodes: [...a.nodes, n]
    });
    return {
      json: {
        ...o.json,
        docs: i
      }
    };
  }),
  removeNode: (r, n) => t((o) => {
    if (!o.json) return { json: void 0 };
    const i = (s) => s.filter((c) => c.id === n ? !1 : (c.children && c.children.length > 0 && (c.children = i(c.children)), !0)), a = o.json.docs.map((s) => s.id !== r ? s : {
      ...s,
      nodes: i(s.nodes)
    });
    return {
      json: {
        ...o.json,
        docs: a
      }
    };
  }),
  cloneNode: (r, n) => t((o) => {
    if (!o.json) return { json: void 0 };
    const i = (u) => {
      for (const f of u) {
        if (f.id === n)
          return f;
        if (f.children && f.children.length > 0) {
          const d = i(f.children);
          if (d) return d;
        }
      }
      return null;
    }, a = o.json.docs.find((u) => u.id === r);
    if (!a) return { json: o.json };
    const s = i(a.nodes);
    if (!s) return { json: o.json };
    const c = {
      ...s,
      id: `${s.type}-${mo().substring(0, 8)}`,
      position: {
        ...s.position,
        top: s.position.top + 20,
        left: s.position.left + 20
      }
    }, l = o.json.docs.map((u) => u.id !== r ? u : {
      ...u,
      nodes: [...u.nodes, c]
    });
    return {
      json: {
        ...o.json,
        docs: l
      }
    };
  }),
  reorderNode: (r, n, o, i = []) => t((a) => {
    if (!a.json) return { json: void 0 };
    const s = (l, u) => {
      if (u.length === 0) {
        const p = [...l], [g] = p.splice(n, 1);
        return p.splice(o, 0, g), p;
      }
      const [f, ...d] = u;
      return l.map((p, g) => {
        if (g !== f) return p;
        const h = p.children || [];
        return {
          ...p,
          children: s(h, d)
        };
      });
    }, c = a.json.docs.map((l) => l.id !== r ? l : {
      ...l,
      nodes: s(l.nodes, i)
    });
    return {
      json: {
        ...a.json,
        docs: c
      }
    };
  }),
  getNode: (r, n) => {
    const o = e();
    if (!o.json) return;
    const i = o.json.docs.find((a) => a.id === r);
    if (i)
      return i.nodes.find((a) => a.id === n);
  },
  addNode: (r) => t((n) => {
    if (!n.json || !n.json.docs.length) return { json: void 0 };
    const o = n.json.docs[0], i = n.json.docs.map((a) => a.id !== o.id ? a : {
      ...a,
      nodes: [...a.nodes, r]
    });
    return {
      json: {
        ...n.json,
        docs: i
      }
    };
  }),
  getWidget: (r) => {
    const n = e();
    return !n.json || !n.json.docs.length ? void 0 : n.json.docs[0].nodes.find((i) => i.id === r);
  },
  createElementByComponent: (r) => {
    const n = {
      id: `${r.type}-${mo().substring(0, 8)}`,
      type: r.type,
      title: r.title,
      position: {
        top: 100,
        left: 100,
        width: 120,
        height: 80,
        ...r.defaultProps?.position || {}
      }
    };
    e().addNode(n);
  }
})), cw = (t) => It(
  Vu((e) => {
    if (!e.json) return [];
    const r = e.json.docs.find((n) => n.id === t);
    return r ? r.nodes : [];
  })
), lw = (t = 40) => {
  const e = wr();
  return It(
    Vu((r) => {
      if (!r.json || !r.json.docs.length)
        return {
          totalWidth: 0,
          totalGap: 0,
          combinedWidth: 0
        };
      const n = r.json.docs, o = n.reduce((a, s) => a + (s.width || e.config.doc?.width), 0), i = n.length > 1 ? (n.length - 1) * t : 0;
      return {
        totalWidth: o,
        totalGap: i,
        combinedWidth: o + i
      };
    })
  );
}, uw = () => {
  const t = wr();
  return It(
    Vu((e) => {
      if (!e.json || !e.json.docs.length)
        return {
          totalWidth: 0,
          totalGap: 0,
          combinedWidth: 0
        };
      const r = e.json.docs, n = r.reduce((a, s) => a + (s.width || t.config.doc.width), 0), o = Math.max(...r.map((a) => a.height || t.config.doc.height || 0)), i = r.length > 1 ? (r.length - 1) * 40 : 0;
      return {
        width: n + i,
        height: o
      };
    })
  );
}, Wu = Ir((t, e) => {
  const r = () => {
    const { unsubscribe: n } = e();
    n && n();
    const o = It.subscribe(
      // This callback will be called whenever the json state changes
      () => {
        e().projectId && !e().isInitialLoad && e().markForSave(), e().isInitialLoad && t({ isInitialLoad: !1 });
      }
    );
    t({ unsubscribe: o });
  };
  return {
    status: "idle",
    lastSaved: null,
    error: null,
    pendingSave: !1,
    saveTimeout: null,
    projectId: null,
    unsubscribe: null,
    isInitialLoad: !0,
    watch: (n) => {
      t({ projectId: n }), r();
    },
    markForSave: () => {
      const { saveTimeout: n, pendingSave: o } = e();
      if (o) return;
      n && clearTimeout(n);
      const i = setTimeout(() => {
        e().saveNow();
      }, 2e3);
      t({
        pendingSave: !0,
        saveTimeout: i,
        status: "idle"
      });
    },
    saveNow: async () => {
      const { projectId: n, saveTimeout: o } = e(), { api: i } = cv.getState(), a = It.getState().json;
      if (!(!n || !a || !i)) {
        o && clearTimeout(o), t({ status: "saving", saveTimeout: null });
        try {
          await i.updateProject(n, a), t({
            status: "saved",
            lastSaved: /* @__PURE__ */ new Date(),
            pendingSave: !1,
            error: null
          }), setTimeout(() => {
            t((s) => s.status === "saved" ? { status: "idle" } : {});
          }, 3e3);
        } catch (s) {
          t({
            status: "error",
            pendingSave: !1,
            error: s
          });
        }
      }
    },
    clearSaveState: () => {
      const { saveTimeout: n, unsubscribe: o } = e();
      n && clearTimeout(n), o && o(), t({
        status: "idle",
        pendingSave: !1,
        saveTimeout: null,
        error: null,
        unsubscribe: null,
        isInitialLoad: !0
      });
    }
  };
});
function Hu(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const a = (c) => c === null ? null : JSON.parse(c, void 0), s = (i = r.getItem(o)) != null ? i : null;
      return s instanceof Promise ? s.then(a) : a(s);
    },
    setItem: (o, i) => r.setItem(o, JSON.stringify(i, void 0)),
    removeItem: (o) => r.removeItem(o)
  };
}
const Dl = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return Dl(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return Dl(n)(r);
      }
    };
  }
}, fw = (t, e) => (r, n, o) => {
  let i = {
    storage: Hu(() => localStorage),
    partialize: (h) => h,
    version: 0,
    merge: (h, m) => ({
      ...m,
      ...h
    }),
    ...e
  }, a = !1;
  const s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = i.storage;
  if (!l)
    return t(
      (...h) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...h);
      },
      n,
      o
    );
  const u = () => {
    const h = i.partialize({ ...n() });
    return l.setItem(i.name, {
      state: h,
      version: i.version
    });
  }, f = o.setState;
  o.setState = (h, m) => {
    f(h, m), u();
  };
  const d = t(
    (...h) => {
      r(...h), u();
    },
    n,
    o
  );
  o.getInitialState = () => d;
  let p;
  const g = () => {
    var h, m;
    if (!l) return;
    a = !1, s.forEach((x) => {
      var b;
      return x((b = n()) != null ? b : d);
    });
    const y = ((m = i.onRehydrateStorage) == null ? void 0 : m.call(i, (h = n()) != null ? h : d)) || void 0;
    return Dl(l.getItem.bind(l))(i.name).then((x) => {
      if (x)
        if (typeof x.version == "number" && x.version !== i.version) {
          if (i.migrate) {
            const b = i.migrate(
              x.state,
              x.version
            );
            return b instanceof Promise ? b.then((w) => [!0, w]) : [!0, b];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, x.state];
      return [!1, void 0];
    }).then((x) => {
      var b;
      const [w, _] = x;
      if (p = i.merge(
        _,
        (b = n()) != null ? b : d
      ), r(p, !0), w)
        return u();
    }).then(() => {
      y?.(p, void 0), p = n(), a = !0, c.forEach((x) => x(p));
    }).catch((x) => {
      y?.(void 0, x);
    });
  };
  return o.persist = {
    setOptions: (h) => {
      i = {
        ...i,
        ...h
      }, h.storage && (l = h.storage);
    },
    clearStorage: () => {
      l?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => g(),
    hasHydrated: () => a,
    onHydrate: (h) => (s.add(h), () => {
      s.delete(h);
    }),
    onFinishHydration: (h) => (c.add(h), () => {
      c.delete(h);
    })
  }, i.skipHydration || g(), p || d;
}, lv = fw, Re = Ir()(
  lv(
    (t) => ({
      // 选中的目标元素 (来自 Editor.tsx)
      selectedTargets: [],
      // 初始缩放状态 (来自 canvasStore)
      zoom: 1,
      isPinching: !1,
      isDragging: !1,
      // 画布位置和状态初始值
      position: { x: 0, y: 0 },
      spacePressed: !1,
      dragStart: { x: 0, y: 0 },
      isTouchPadDragging: !1,
      cursorMode: "arrow",
      // 初始辅助线状态 (来自 guidesStore)
      guidesSize: 20,
      showHorizontalGuides: !0,
      showVerticalGuides: !0,
      horizontalGuides: [],
      verticalGuides: [],
      // 默认选择模式
      mode: "select",
      // 选中目标操作方法
      setSelectedTargets: (e) => t({ selectedTargets: e }),
      // 缩放操作方法 (来自 canvasStore)
      setZoom: (e) => t({ zoom: e }),
      zoomIn: () => t((e) => ({
        zoom: Math.min(e.zoom + 0.1, 3)
      })),
      zoomOut: () => t((e) => ({
        zoom: Math.max(e.zoom - 0.1, 0.1)
      })),
      resetZoom: () => t({ zoom: 1 }),
      setPinching: (e) => t({ isPinching: e }),
      handlePinch: (e) => t((r) => ({
        zoom: Math.max(0.1, Math.min(3, r.zoom * e))
      })),
      setDragging: (e) => t({ isDragging: e }),
      // 画布位置和状态控制方法
      setCanvasState: (e) => t((r) => ({
        ...r,
        ...e
      })),
      setSpacePressed: (e) => t({ spacePressed: e }),
      setDragStart: (e) => t({ dragStart: e }),
      setIsTouchPadDragging: (e) => t({ isTouchPadDragging: e }),
      setCursorMode: (e) => t({ cursorMode: e }),
      // 设置操作模式
      setMode: (e) => t({ mode: e }),
      // 辅助线操作方法 (来自 guidesStore)
      toggleHorizontalGuides: () => t((e) => ({
        showHorizontalGuides: !e.showHorizontalGuides
      })),
      toggleVerticalGuides: () => t((e) => ({
        showVerticalGuides: !e.showVerticalGuides
      })),
      setHorizontalGuides: (e) => t({ horizontalGuides: e }),
      setVerticalGuides: (e) => t({ verticalGuides: e }),
      // 新增：从 Editor.tsx 移植的方法
      checkBlur: () => {
        const e = document.activeElement;
        e && e.blur();
        const r = document.getSelection();
        r && r.removeAllRanges();
      },
      setSelectedTargetsElements: async (e, r = !1, n, o) => {
        console.log("isRestore", r), e = e.filter((a) => e.every((s) => s === a || !s.contains(a)));
        const i = e.map((a) => a.dataset.scenaElementId);
        return t({ selectedTargets: i }), o && o.setSelectedTargets(e), n && n.setSelectedTargets(e), e;
      },
      selectEndMaker: (e, r) => {
        if (!r) return !1;
        const n = r.getSelected?.(), o = e.width, i = e.height;
        return !(!n || !n.maker || !o || !i);
      },
      toggleGuides: () => {
        t((e) => ({
          showHorizontalGuides: !e.showHorizontalGuides,
          showVerticalGuides: !e.showVerticalGuides
        }));
      },
      setIsDragging(e) {
        t({ isDragging: e });
      }
    }),
    {
      name: "canvas",
      storage: Hu(() => localStorage),
      partialize: (t) => ({
        // zoom: state.zoom,
        // showHorizontalGuides: state.showHorizontalGuides,
        // showVerticalGuides: state.showVerticalGuides,
        // horizontalGuides: state.horizontalGuides,
        // verticalGuides: state.verticalGuides,
        // selectedTargets: state.selectedTargets,
        // mode: state.mode,
        // cursorMode: state.cursorMode,
        // position: state.position
      })
      // 持久化 zoom、辅助线相关状态、选中目标、光标模式和位置
    }
  )
), uv = Ir((t, e) => ({
  contributes: {},
  initialized: !1,
  create: (r) => {
    if (e().initialized || !r?.viewsContainers) return;
    const n = r.viewsContainers ?? {}, o = {};
    for (const i of Object.keys(n)) {
      const a = n[i] ?? [];
      o[i] = a.sort((s, c) => (s.order ?? 0) - (c.order ?? 0));
    }
    t({ contributes: o, initialized: !0 });
  },
  get: (r) => e().contributes[r] ?? [],
  add: (r, n) => {
    const i = [...(e().contributes[r] ?? []).filter((a) => a.id !== n.id), n];
    t((a) => ({
      contributes: {
        ...a.contributes,
        [r]: i.sort((s, c) => (s.order ?? 0) - (c.order ?? 0))
      }
    }));
  },
  remove: (r, n) => {
    const o = e().contributes[r] ?? [];
    t((i) => ({
      contributes: {
        ...i.contributes,
        [r]: o.filter((a) => a.id !== n)
      }
    }));
  },
  clear: () => t({ contributes: {}, initialized: !1 })
}));
class dw {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  get(e) {
    return this.map.get(e);
  }
  set(e, r) {
    return this.map.set(e, r);
  }
  clear() {
    this.map.clear();
  }
}
var fv = "rgb", Yu = "rgba", dv = "hsl", pv = "hsla", pw = [fv, Yu, dv, pv], Mi = "function", $s = "property", Uu = "array", ra = "object", hv = "string", vv = "number", Pi = "undefined", Vs = typeof window !== Pi, Dn = typeof document !== Pi && document, op = ["webkit", "ms", "moz", "o"], Xu = function(t) {
  if (!Dn)
    return "";
  var e = (Dn.body || Dn.documentElement).style, r = op.length;
  if (typeof e[t] !== Pi)
    return t;
  for (var n = 0; n < r; ++n) {
    var o = "-" + op[n] + "-" + t;
    if (typeof e[o] !== Pi)
      return o;
  }
  return "";
}, ip = /* @__PURE__ */ Xu("transform"), Gc = /* @__PURE__ */ Xu("filter"), na = /* @__PURE__ */ Xu("animation"), hw = /* @__PURE__ */ na.replace("animation", "keyframes"), vw = [{
  open: "(",
  close: ")"
}, {
  open: '"',
  close: '"'
}, {
  open: "'",
  close: "'"
}, {
  open: '\\"',
  close: '\\"'
}, {
  open: "\\'",
  close: "\\'"
}], Qt = 1e-7, Pa = {
  cm: function(t) {
    return t * 96 / 2.54;
  },
  mm: function(t) {
    return t * 96 / 254;
  },
  in: function(t) {
    return t * 96;
  },
  pt: function(t) {
    return t * 96 / 72;
  },
  pc: function(t) {
    return t * 96 / 6;
  },
  "%": function(t, e) {
    return t * e / 100;
  },
  vw: function(t, e) {
    return e === void 0 && (e = window.innerWidth), t / 100 * e;
  },
  vh: function(t, e) {
    return e === void 0 && (e = window.innerHeight), t / 100 * e;
  },
  vmax: function(t, e) {
    return e === void 0 && (e = Math.max(window.innerWidth, window.innerHeight)), t / 100 * e;
  },
  vmin: function(t, e) {
    return e === void 0 && (e = Math.min(window.innerWidth, window.innerHeight)), t / 100 * e;
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function gw() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), o = 0, e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
  return n;
}
function yo(t, e, r, n) {
  return (t * n + e * r) / (r + n);
}
function Ze(t) {
  return typeof t === Pi;
}
function $t(t) {
  return t && typeof t === ra;
}
function Tt(t) {
  return Array.isArray(t);
}
function Lt(t) {
  return typeof t === hv;
}
function Oi(t) {
  return typeof t === vv;
}
function we(t) {
  return typeof t === Mi;
}
function mw(t, e) {
  var r = t === "" || t == " ", n = e === "" || e == " ";
  return n && r || t === e;
}
function gv(t, e, r, n, o) {
  var i = qu(t, e, r);
  return i ? r : yw(t, e, r + 1, n, o);
}
function qu(t, e, r) {
  if (!t.ignore)
    return null;
  var n = e.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function yw(t, e, r, n, o) {
  for (var i = function(l) {
    var u = e[l].trim();
    if (u === t.close && !qu(t, e, l))
      return {
        value: l
      };
    var f = l, d = Se(o, function(p) {
      var g = p.open;
      return g === u;
    });
    if (d && (f = gv(d, e, l, n, o)), f === -1)
      return a = l, "break";
    l = f, a = l;
  }, a, s = r; s < n; ++s) {
    var c = i(s);
    if (s = a, typeof c == "object") return c.value;
    if (c === "break") break;
  }
  return -1;
}
function Ni(t, e) {
  var r = Lt(e) ? {
    separator: e
  } : e, n = r.separator, o = n === void 0 ? "," : n, i = r.isSeparateFirst, a = r.isSeparateOnlyOpenClose, s = r.isSeparateOpenClose, c = s === void 0 ? a : s, l = r.openCloseCharacters, u = l === void 0 ? vw : l, f = u.map(function(C) {
    var T = C.open, R = C.close;
    return T === R ? T : T + "|" + R;
  }).join("|"), d = "(\\s*" + o + "\\s*|" + f + "|\\s+)", p = new RegExp(d, "g"), g = t.split(p).filter(function(C) {
    return C && C !== "undefined";
  }), h = g.length, m = [], y = [];
  function x() {
    return y.length ? (m.push(y.join("")), y = [], !0) : !1;
  }
  for (var b = function(C) {
    var T = g[C].trim(), R = C, D = Se(u, function(O) {
      var k = O.open;
      return k === T;
    }), N = Se(u, function(O) {
      var k = O.close;
      return k === T;
    });
    if (D) {
      if (R = gv(D, g, C, h, u), R !== -1 && c)
        return x() && i || (m.push(g.slice(C, R + 1).join("")), C = R, i) ? (w = C, "break") : (w = C, "continue");
    } else if (N && !qu(N, g, C)) {
      var M = gw(u);
      return M.splice(u.indexOf(N), 1), {
        value: Ni(t, {
          separator: o,
          isSeparateFirst: i,
          isSeparateOnlyOpenClose: a,
          isSeparateOpenClose: c,
          openCloseCharacters: M
        })
      };
    } else if (mw(T, o) && !a)
      return x(), i ? (w = C, "break") : (w = C, "continue");
    R === -1 && (R = h - 1), y.push(g.slice(C, R + 1).join("")), C = R, w = C;
  }, w, _ = 0; _ < h; ++_) {
    var E = b(_);
    if (_ = w, typeof E == "object") return E.value;
    if (E === "break") break;
  }
  return y.length && m.push(y.join("")), m;
}
function Or(t) {
  return Ni(t, "");
}
function ze(t) {
  return Ni(t, ",");
}
function Ws(t) {
  var e = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !e || e.length < 4 ? {} : {
    prefix: e[1],
    value: e[2],
    suffix: e[3]
  };
}
function mr(t) {
  var e = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);
  if (!e)
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  var r = e[1], n = e[2], o = e[3];
  return {
    prefix: r,
    unit: o,
    value: parseFloat(n)
  };
}
function xo(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(e, r) {
    return r.toUpperCase();
  });
}
function Ku(t, e) {
  return e === void 0 && (e = "-"), t.replace(/([a-z])([A-Z])/g, function(r, n, o) {
    return "" + n + e + o.toLowerCase();
  });
}
function $c(t) {
  return [].slice.call(t);
}
function ki() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function yr(t, e, r) {
  r === void 0 && (r = -1);
  for (var n = t.length, o = 0; o < n; ++o)
    if (e(t[o], o, t))
      return o;
  return r;
}
function Se(t, e, r) {
  var n = yr(t, e);
  return n > -1 ? t[n] : r;
}
var hs = /* @__PURE__ */ function() {
  var t = ki(), e = Vs && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return e ? e.bind(window) : function(r) {
    var n = ki(), o = setTimeout(function() {
      r(n - t);
    }, 1e3 / 60);
    return o;
  };
}(), mv = /* @__PURE__ */ function() {
  var t = Vs && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(e) {
    clearTimeout(e);
  };
}();
function Ge(t) {
  return Object.keys(t);
}
function mi(t, e) {
  e === void 0 && (e = []), t.sort(function(r, n) {
    var o = e.indexOf(r), i = e.indexOf(n);
    return i === -1 && o === -1 ? 0 : o === -1 ? 1 : i === -1 ? -1 : o - i;
  });
}
function Mt(t, e) {
  var r = mr(t), n = r.value, o = r.unit;
  if ($t(e)) {
    var i = e[o];
    if (i) {
      if (we(i))
        return i(n);
      if (Pa[o])
        return Pa[o](n, i);
    }
  } else if (o === "%")
    return n * e / 100;
  return Pa[o] ? Pa[o](n) : n;
}
function Ai(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
function ap(t, e, r, n) {
  return n === void 0 && (n = t[0] / t[1]), [[pt(e[0], Qt), pt(e[0] / n, Qt)], [pt(e[1] * n, Qt), pt(e[1], Qt)]].filter(function(o) {
    return o.every(function(i, a) {
      var s = e[a], c = pt(s, Qt);
      return r ? i <= s || i <= c : i >= s || i >= c;
    });
  })[0] || t;
}
function Zu(t, e, r, n) {
  if (!n)
    return t.map(function(p, g) {
      return Ai(p, e[g], r[g]);
    });
  var o = t[0], i = t[1], a = n === !0 ? o / i : n, s = ap(t, e, !1, a), c = s[0], l = s[1], u = ap(t, r, !0, a), f = u[0], d = u[1];
  return o < c || i < l ? (o = c, i = l) : (o > f || i > d) && (o = f, i = d), [o, i];
}
function xw(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return r;
}
function Ml(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return e ? r / e : 0;
}
function Xt(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], o = Math.atan2(n, r);
  return o >= 0 ? o : o + Math.PI * 2;
}
function bw(t) {
  return [0, 1].map(function(e) {
    return Ml(t.map(function(r) {
      return r[e];
    }));
  });
}
function sp(t) {
  var e = bw(t), r = Xt(e, t[0]), n = Xt(e, t[1]);
  return r < n && n - r < Math.PI || r > n && n - r < -Math.PI ? 1 : -1;
}
function dr(t, e) {
  return Math.sqrt(Math.pow((e ? e[0] : 0) - t[0], 2) + Math.pow((e ? e[1] : 0) - t[1], 2));
}
function pt(t, e) {
  if (!e)
    return t;
  var r = 1 / e;
  return Math.round(t / e) / r;
}
function cp(t, e) {
  return t.forEach(function(r, n) {
    t[n] = pt(t[n], e);
  }), t;
}
function ww(t) {
  for (var e = [], r = 0; r < t; ++r)
    e.push(r);
  return e;
}
function Sw(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Cw(t) {
  return t.replace("#", "");
}
function lp(t) {
  var e = Cw(t), r = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), o = parseInt(e.substring(4, 6), 16), i = parseInt(e.substring(6, 8), 16) / 255;
  return isNaN(i) && (i = 1), [r, n, o, i];
}
function Ew(t) {
  var e = t.charAt(1), r = t.charAt(2), n = t.charAt(3), o = t.charAt(4), i = ["#", e, e, r, r, n, n, o, o];
  return i.join("");
}
function _w(t) {
  var e, r = t[0], n = t[1], o = t[2];
  r < 0 && (r += Math.floor((Math.abs(r) + 360) / 360) * 360), r %= 360;
  var i = (1 - Math.abs(2 * o - 1)) * n, a = i * (1 - Math.abs(r / 60 % 2 - 1)), s = o - i / 2, c;
  return r < 60 ? c = [i, a, 0] : r < 120 ? c = [a, i, 0] : r < 180 ? c = [0, i, a] : r < 240 ? c = [0, a, i] : r < 300 ? c = [a, 0, i] : r < 360 ? c = [i, 0, a] : c = [0, 0, 0], [Math.round((c[0] + s) * 255), Math.round((c[1] + s) * 255), Math.round((c[2] + s) * 255), (e = t[3]) !== null && e !== void 0 ? e : 1];
}
function yv(t) {
  if (t.charAt(0) === "#")
    return t.length === 4 || t.length === 5 ? lp(Ew(t)) : lp(t);
  if (t.indexOf("(") !== -1) {
    var e = Ws(t), r = e.prefix, n = e.value;
    if (!r || !n)
      return;
    var o = ze(n), i = [0, 0, 0, 1], a = o.length;
    switch (r) {
      case fv:
      case Yu:
        for (var s = 0; s < a; ++s)
          i[s] = parseFloat(o[s]);
        return i;
      case dv:
      case pv:
        for (var s = 0; s < a; ++s)
          o[s].indexOf("%") !== -1 ? i[s] = parseFloat(o[s]) / 100 : i[s] = parseFloat(o[s]);
        return _w(i);
    }
  }
}
function vs(t, e) {
  return Dn ? e ? Dn.querySelectorAll(t) : Dn.querySelector(t) : e ? [] : null;
}
function Ut(t, e) {
  return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function ji(t, e) {
  t.classList ? t.classList.add(e) : t.className += " " + e;
}
function oo(t, e) {
  if (t.classList)
    t.classList.remove(e);
  else {
    var r = new RegExp("(\\s|^)" + e + "(\\s|$)");
    t.className = t.className.replace(r, " ");
  }
}
function Tw(t, e) {
  if (!t || !e || !e.length)
    return {};
  var r;
  if (t instanceof Element)
    r = t;
  else if (t.length)
    r = t[0];
  else
    return {};
  for (var n = {}, o = De(r).getComputedStyle(r), i = e.length, a = 0; a < i; ++a)
    n[e[a]] = o[e[a]];
  return n;
}
function Ft(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function kt(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
function tr(t) {
  return t?.ownerDocument || Dn;
}
function Ju(t) {
  return tr(t).documentElement;
}
function un(t) {
  return tr(t).body;
}
function De(t) {
  var e;
  return ((e = t?.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView) || window;
}
function xv(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function Ii(t) {
  return $t(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Pl = function() {
  return Pl = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Pl.apply(this, arguments);
};
function Rw() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), o = 0, e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
  return n;
}
var fn = /* @__PURE__ */ function() {
  function t() {
    this._events = {};
  }
  var e = t.prototype;
  return e.on = function(r, n) {
    if ($t(r))
      for (var o in r)
        this.on(o, r[o]);
    else
      this._addEvent(r, n, {});
    return this;
  }, e.off = function(r, n) {
    if (!r)
      this._events = {};
    else if ($t(r))
      for (var o in r)
        this.off(o);
    else if (!n)
      this._events[r] = [];
    else {
      var i = this._events[r];
      if (i) {
        var a = yr(i, function(s) {
          return s.listener === n;
        });
        a > -1 && i.splice(a, 1);
      }
    }
    return this;
  }, e.once = function(r, n) {
    var o = this;
    return n && this._addEvent(r, n, {
      once: !0
    }), new Promise(function(i) {
      o._addEvent(r, i, {
        once: !0
      });
    });
  }, e.emit = function(r, n) {
    var o = this;
    n === void 0 && (n = {});
    var i = this._events[r];
    if (!r || !i)
      return !0;
    var a = !1;
    return n.eventType = r, n.stop = function() {
      a = !0;
    }, n.currentTarget = this, Rw(i).forEach(function(s) {
      s.listener(n), s.once && o.off(r, s.listener);
    }), !a;
  }, e.trigger = function(r, n) {
    return n === void 0 && (n = {}), this.emit(r, n);
  }, e._addEvent = function(r, n, o) {
    var i = this._events;
    i[r] = i[r] || [];
    var a = i[r];
    a.push(Pl({
      listener: n
    }, o));
  }, t;
}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Dw(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), {
        value: t && t[n++],
        done: !t
      };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Mw(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t), o, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (s) {
    a = {
      error: s
    };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function Vc() {
  for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Mw(arguments[e]));
  return t;
}
var ei = function(t) {
  return typeof t > "u";
}, up = /* @__PURE__ */ function() {
  function t(r, n) {
    var o, i;
    if (this._canceled = !1, n)
      try {
        for (var a = Dw(Object.keys(n)), s = a.next(); !s.done; s = a.next()) {
          var c = s.value;
          this[c] = n[c];
        }
      } catch (l) {
        o = {
          error: l
        };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
    this.eventType = r;
  }
  var e = t.prototype;
  return e.stop = function() {
    this._canceled = !0;
  }, e.isCanceled = function() {
    return this._canceled;
  }, t;
}(), Pw = /* @__PURE__ */ function() {
  function t() {
    this._eventHandler = {};
  }
  var e = t.prototype;
  return e.trigger = function(r) {
    for (var n = [], o = 1; o < arguments.length; o++)
      n[o - 1] = arguments[o];
    var i = r instanceof up ? r.eventType : r, a = Vc(this._eventHandler[i] || []);
    return a.length <= 0 ? this : (r instanceof up ? (r.currentTarget = this, a.forEach(function(s) {
      s(r);
    })) : a.forEach(function(s) {
      s.apply(void 0, Vc(n));
    }), this);
  }, e.once = function(r, n) {
    var o = this;
    if (typeof r == "object" && ei(n)) {
      var i = r;
      for (var a in i)
        this.once(a, i[a]);
      return this;
    } else if (typeof r == "string" && typeof n == "function") {
      var s = function() {
        for (var c = [], l = 0; l < arguments.length; l++)
          c[l] = arguments[l];
        n.apply(void 0, Vc(c)), o.off(r, s);
      };
      this.on(r, s);
    }
    return this;
  }, e.hasOn = function(r) {
    return !!this._eventHandler[r];
  }, e.on = function(r, n) {
    if (typeof r == "object" && ei(n)) {
      var o = r;
      for (var i in o)
        this.on(i, o[i]);
      return this;
    } else if (typeof r == "string" && typeof n == "function") {
      var a = this._eventHandler[r];
      ei(a) && (this._eventHandler[r] = [], a = this._eventHandler[r]), a.push(n);
    }
    return this;
  }, e.off = function(r, n) {
    if (ei(r))
      return this._eventHandler = {}, this;
    if (ei(n)) {
      if (typeof r == "string")
        return delete this._eventHandler[r], this;
      var o = r;
      for (var i in o)
        this.off(i, o[i]);
      return this;
    }
    var a = this._eventHandler[r];
    if (a) {
      for (var s = a.length, c = 0; c < s; ++c)
        if (a[c] === n) {
          a.splice(c, 1), s <= 1 && delete this._eventHandler[r];
          break;
        }
    }
    return this;
  }, t.VERSION = "3.0.5", t;
}();
function bv(t) {
  return Object.keys(t);
}
function Ow(t) {
  return typeof t == "object";
}
function Nw(t) {
  return typeof t == "function";
}
var Ol = "__observers__", kw = "__computed__", Wc = 1, Hc = "__CFCS_DETECTED_DEPENDENCIES__", Nl = function(t, e) {
  return Nl = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Nl(t, e);
};
function Aw(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Nl(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function Qu() {
  Object[Hc] = Object[Hc] || {};
  var t = Object[Hc];
  return t[Wc] = t[Wc] || [], t[Wc];
}
function jw() {
  var t = Qu();
  return t[t.length - 1];
}
function Iw(t) {
  var e = Qu(), r = [], n = {
    host: t,
    observers: r,
    push: function(o) {
      t !== o && r.indexOf(o) === -1 && r.push(o);
    }
  };
  return e.push(n), n;
}
function Fw() {
  var t = Qu();
  return t.pop();
}
var wv = /* @__PURE__ */ function() {
  function t(r) {
    this._emitter = new Pw(), this._current = r;
  }
  var e = t.prototype;
  return Object.defineProperty(e, "current", {
    /**
     * return the current value.
     */
    get: function() {
      var r = jw();
      return r?.push(this), this._current;
    },
    set: function(r) {
      this._setCurrent(r);
    },
    enumerable: !1,
    configurable: !0
  }), e.subscribe = function(r) {
    return this.current, this._emitter.on("update", r), this;
  }, e.unsubscribe = function(r) {
    return this._emitter.off("update", r), this;
  }, e._setCurrent = function(r) {
    var n = this._current, o = r !== n;
    this._current = r, o && this._emitter.trigger("update", r, n);
  }, e.toString = function() {
    return "".concat(this.current);
  }, e.valueOf = function() {
    return this.current;
  }, t;
}(), Bw = /* @__PURE__ */ function(t) {
  Aw(e, t);
  function e(n) {
    var o = t.call(this) || this;
    return o._computedCallback = n, o._registered = [], o._onCheckUpdate = function() {
      o._setCurrent(o.current);
    }, o._current = o.current, o;
  }
  var r = e.prototype;
  return Object.defineProperty(r, "current", {
    get: function() {
      var n = this;
      Iw(this);
      var o = this._computedCallback(), i = Fw();
      return this._registered.forEach(function(a) {
        a.unsubscribe(n._onCheckUpdate);
      }), i.observers.forEach(function(a) {
        a.subscribe(n._onCheckUpdate);
      }), this._registered = i.observers, o;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}(wv);
function fp(t, e, r) {
  r === void 0 && (r = e);
  var n = {
    configurable: !0,
    get: function() {
      return yi(this, r).current;
    },
    set: function(o) {
      yi(this, r, o).current = o;
    }
  };
  Object.defineProperty(t, e, n), r !== e && Object.defineProperty(t, r, {
    configurable: !0,
    get: function() {
      return yi(this, r).current;
    }
  });
}
function Lw() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.length > 1 ? fp(t[0], t[1]) : function(r, n) {
    return fp(r, n, t[0]);
  };
}
function zw(t) {
  t.subscribe = function(e, r) {
    this[e], yi(this, e).subscribe(r);
  }, t.unsubscribe = function(e, r) {
    var n = this;
    if (!e) {
      bv(tf(this)).forEach(function(o) {
        n.unsubscribe(o);
      });
      return;
    }
    e in this && yi(this, e).unsubscribe(r);
  };
}
function Sv(t, e) {
  var r = Nw(t) ? t() : t, n = {};
  return Cv(n), bv(r).forEach(function(o) {
    var i = r[o];
    Ev(i) ? dp(n, o, i) : dp(n, o, Fi(i)), Lw(o)(n, o);
  }), zw(n), n;
}
function Gw(t) {
  return Sv(t);
}
function $w(t) {
  return Sv(t);
}
function Fi(t) {
  return new wv(t);
}
function Yc(t) {
  return new Bw(t);
}
function Cv(t) {
  var e = {};
  return Object.defineProperty(t, Ol, {
    get: function() {
      return e;
    }
  }), e;
}
function tf(t, e) {
  var r, n;
  t[Ol] || Cv(t);
  var o = t[Ol];
  {
    var i = (n = (r = t?.constructor) === null || r === void 0 ? void 0 : r.prototype) === null || n === void 0 ? void 0 : n[kw];
    i && i.forEach(function(a) {
      !(a in o) && a in t && t[a];
    });
  }
  return o;
}
function yi(t, e, r) {
  var n = tf(t);
  return n[e] || (n[e] = Fi(r)), n[e];
}
function dp(t, e, r) {
  var n = tf(t);
  n[e] = r;
}
function Ev(t) {
  return t && Ow(t) && "current" in t && "subscribe" in t && "unsubscribe" in t;
}
function Dr(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
var fo = /* @__PURE__ */ function() {
  function t(e) {
    this.separator = e, this.orderMap = {};
  }
  return t.prototype.getFullName = function(e) {
    return e.join(this.separator);
  }, t.prototype.get = function(e) {
    return this.orderMap[this.getFullName(e)];
  }, t.prototype.hasName = function(e) {
    var r = e.length;
    if (!r)
      return !1;
    var n = e[r - 1], o = this.get(e.slice(0, r - 1));
    return o ? o.indexOf(n) >= 0 : !1;
  }, t.prototype.gets = function(e, r) {
    r === void 0 && (r = !0);
    var n = [], o = this;
    function i(a, s) {
      var c = o.get(a);
      if (c)
        return c.forEach(function(l) {
          var u = Dr(Dr([], s, !0), [l], !1), f = i(Dr(Dr([], a, !0), [l], !1), u);
          (!f || !f.length) && n.push(Dr(Dr([], s, !0), [l], !1));
        }), c;
    }
    return i(e, r ? e : []), n;
  }, t.prototype.set = function(e, r) {
    var n = this;
    return e.forEach(function(o, i) {
      n.addName(e.slice(0, i), o);
    }), this.orderMap[this.getFullName(e)] = r, r;
  }, t.prototype.add = function(e) {
    var r = e.length;
    return r ? this.addName(e.slice(0, -1), e[r - 1]) : [];
  }, t.prototype.addName = function(e, r) {
    var n = this.get(e) || this.set(e, []);
    return n.indexOf(r) === -1 && n.push(r), n;
  }, t.prototype.findIndex = function(e, r) {
    var n = this.orderMap[this.getFullName(e)];
    return n ? n.indexOf(r) : -1;
  }, t.prototype.remove = function(e) {
    var r = this.getFullName(e), n = this.orderMap;
    for (var o in n)
      o.indexOf(r) === 0 && delete n[o];
    var i = e.length;
    if (i) {
      var a = e.slice(0, -1), s = e[i - 1];
      this.splice(a, this.findIndex(a, s), 1);
    }
    return this;
  }, t.prototype.filter = function(e, r, n) {
    n === void 0 && (n = !0);
    var o = this.gets(e, n).filter(r), i = new t(this.separator), a = n ? [] : e;
    return o.forEach(function(s) {
      i.add(Dr(Dr([], a, !0), s, !0));
    }), i;
  }, t.prototype.splice = function(e, r, n) {
    for (var o = [], i = 3; i < arguments.length; i++)
      o[i - 3] = arguments[i];
    var a = this.get(e) || this.set(e, []);
    return a.splice.apply(a, Dr([r, n], o, !1)), this;
  }, t.prototype.clear = function() {
    this.orderMap = {};
  }, t.prototype.setObject = function(e) {
    var r = this.orderMap;
    for (var n in e)
      r[n] = e[n].slice();
  }, t.prototype.getObject = function() {
    var e = {}, r = this.orderMap;
    for (var n in r)
      e[n] = r[n].slice();
    return e;
  }, t.prototype.clone = function() {
    var e = new t(this.separator);
    return e.setObject(e.orderMap), e;
  }, t;
}();
function Vw(t) {
  for (var e = 5381, r = t.length; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e >>> 0;
}
var Ww = Vw;
function Hw(t) {
  return Ww(t).toString(36);
}
function Yw(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function Uw(t, e, r) {
  return r.original ? e : e.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, o) {
    var i = o.trim();
    return (i ? ze(i) : [""]).map(function(a) {
      var s = a.trim();
      return s.indexOf("@") === 0 ? s : s.indexOf(":global") > -1 ? s.replace(/\:global/g, "") : s.indexOf(":host") > -1 ? "".concat(s.replace(/\:host/g, ".".concat(t))) : s ? ".".concat(t, " ").concat(s) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function Xw(t, e, r, n, o) {
  var i = tr(n), a = i.createElement("style");
  return a.setAttribute("type", "text/css"), a.setAttribute("data-styled-id", t), a.setAttribute("data-styled-count", "1"), r.nonce && a.setAttribute("nonce", r.nonce), a.innerHTML = Uw(t, e, r), (o || i.head || i.body).appendChild(a), a;
}
function Hs(t) {
  var e = "rCS" + Hw(t);
  return {
    className: e,
    inject: function(r, n) {
      n === void 0 && (n = {});
      var o = Yw(r), i = (o || r.ownerDocument || document).querySelector('style[data-styled-id="'.concat(e, '"]'));
      if (!i)
        i = Xw(e, t, n, r, o);
      else {
        var a = parseFloat(i.getAttribute("data-styled-count")) || 0;
        i.setAttribute("data-styled-count", "".concat(a + 1));
      }
      return {
        destroy: function() {
          var s, c = parseFloat(i.getAttribute("data-styled-count")) || 0;
          c <= 1 ? (i.remove ? i.remove() : (s = i.parentNode) === null || s === void 0 || s.removeChild(i), i = null) : i.setAttribute("data-styled-count", "".concat(c - 1));
        }
      };
    }
  };
}
var kl = function(t, e) {
  return kl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, kl(t, e);
};
function Ys(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  kl(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Bi = function() {
  return Bi = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Bi.apply(this, arguments);
};
function qw(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(t, e, r, n);
  else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
}
function At(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function _v(t, e, r) {
  var n = 1 - r;
  return r * r * r + 3 * r * r * n * e + 3 * r * n * n * t;
}
function Kw(t, e, r) {
  for (var n = r, o = r, i = 1; Math.abs(i) > 1 / 1e3; ) {
    if (o = _v(t, e, n), i = o - r, Math.abs(i) < 1 / 1e3)
      return n;
    n -= i / 2;
  }
  return n;
}
function Nn(t, e, r, n) {
  var o = function(i) {
    var a = Kw(t, r, Ai(i, 0, 1));
    return _v(e, n, a);
  };
  return o.easingName = "cubic-bezier(".concat(t, ",").concat(e, ",").concat(r, ",").concat(n, ")"), o;
}
function ef(t, e) {
  var r = function(n) {
    var o = 1 / t;
    return n >= 1 ? 1 : (e === "start" ? o : 0) + Math.floor(n / o) * o;
  };
  return r.easingName = "steps(".concat(t, ", ").concat(e, ")"), r;
}
var Zw = /* @__PURE__ */ ef(1, "start"), Jw = /* @__PURE__ */ ef(1, "end"), Qw = /* @__PURE__ */ Nn(0, 0, 1, 1), tS = /* @__PURE__ */ Nn(0.25, 0.1, 0.25, 1), eS = /* @__PURE__ */ Nn(0.42, 0, 1, 1), rS = /* @__PURE__ */ Nn(0, 0, 0.58, 1), nS = /* @__PURE__ */ Nn(0.42, 0, 0.58, 1), ri, pp = "__SCENEJS_", hp = "data-scene-id", Qr = "animation-timing-function", Tv = { transform: {}, filter: {}, attribute: {}, html: !0 }, gs = { easing: [Qr] }, oS = (ri = {}, ri[Qr] = !0, ri.contents = !0, ri.html = !0, ri), vp = 1e6, ai = 1e-6, lr = "duration", Us = "fillMode", oa = "direction", rr = "iterationCount", Fe = "delay", Li = "easing", tn = "playSpeed", bo = "easingName", iS = "iterationTime", Sn = "paused", Rv = "ended", aS = "timeupdate", Dv = "play", zi = "running", Oa = "iteration", eo = "startAnimation", Na = "pauseAnimation", Al = "alternate", Mv = "reverse", jl = "alternate-reverse", sS = "normal", xi = "infinite", Hr = "playState", rf = "playCSS", Uc = "prevTime", Gr = "tickTime", is = "currentTime", Be = "selector", gp = "transform", mp = {
  linear: Qw,
  ease: tS,
  "ease-in": eS,
  "ease-out": rS,
  "ease-in-out": nS,
  "step-start": Zw,
  "step-end": Jw
}, Mn = "_///_", cS = [lr, Us, oa, rr, Fe, Li, tn], Io = /* @__PURE__ */ function() {
  function t(e, r) {
    this.prefix = "", this.suffix = "", this.model = "", this.type = "", this.separator = ",", r && this.setOptions(r), this.value = Lt(e) ? e.split(this.separator) : e;
  }
  return t.prototype.setOptions = function(e) {
    for (var r in e)
      this[r] = e[r];
    return this;
  }, t.prototype.size = function() {
    return this.value.length;
  }, t.prototype.get = function(e) {
    return this.value[e];
  }, t.prototype.set = function(e, r) {
    return this.value[e] = r, this;
  }, t.prototype.clone = function() {
    var e = this, r = e.separator, n = e.prefix, o = e.suffix, i = e.model, a = e.type, s = this.value.map(function(c) {
      return So(c) ? c.clone() : c;
    });
    return new t(s, {
      separator: r,
      prefix: n,
      suffix: o,
      model: i,
      type: a
    });
  }, t.prototype.toValue = function() {
    return this.prefix + this.join() + this.suffix;
  }, t.prototype.join = function() {
    return this.value.map(function(e) {
      return So(e) ? e.toValue() : e;
    }).join(this.separator);
  }, t.prototype.forEach = function(e) {
    return this.value.forEach(e), this;
  }, t;
}();
function lS(t) {
  for (var e = Ni(t, ";"), r = {}, n = e.length, o = n, i = 0; i < n; ++i) {
    var a = Ni(e[i], ":");
    if (a.length < 2 || !a[1]) {
      --o;
      continue;
    }
    r[a[0].trim()] = pr(a[1].trim());
  }
  return { styles: r, length: o };
}
function Pv(t) {
  var e = Yu;
  return t.length === 3 && (t[3] = 1), new Io(t, {
    model: e,
    separator: ",",
    type: "color",
    prefix: "".concat(e, "("),
    suffix: ")"
  });
}
function uS(t) {
  var e = Ws(t), r = e.prefix, n = e.value, o = e.suffix;
  if (typeof n > "u")
    return t;
  if (pw.indexOf(r) > -1)
    return Pv(yv(t));
  var i = pr(n, r), a = [n], s = ",", c = "".concat(r, "("), l = ")".concat(o);
  return So(i) && (s = i.separator, a = i.value, c += i.prefix, l = i.suffix + l), new Io(a, {
    separator: s,
    model: r,
    prefix: c,
    suffix: l
  });
}
function Xc(t, e) {
  return new Io(t, {
    type: "array",
    separator: e
  });
}
function fS(t) {
  var e = yv(t);
  return e ? Pv(e) : t;
}
function pr(t, e) {
  if (!Lt(t))
    return Tt(t) ? Xc(t, ",") : t;
  var r = ze(t);
  return r.length > 1 ? Xc(r.map(function(n) {
    return pr(n);
  }), ",") : (r = Or(t), r.length > 1 ? Xc(r.map(function(n) {
    return pr(n);
  }), " ") : (r = /^(['"])([^'"]*)(['"])$/g.exec(t), r && r[1] === r[3] ? new Io([pr(r[2])], {
    prefix: r[1],
    suffix: r[1]
  }) : t.indexOf("(") !== -1 ? uS(t) : t.charAt(0) === "#" && e !== "url" ? fS(t) : t));
}
function Ov(t, e) {
  e === void 0 && (e = {});
  var r = t.model;
  if (r) {
    t.setOptions({
      model: "",
      suffix: "",
      prefix: ""
    });
    var n = t.size() > 1 ? t : t.get(0);
    e[r] = n;
  } else
    t.forEach(function(o) {
      Ov(o, e);
    });
  return e;
}
function Gi(t) {
  var e = typeof t;
  if (e === ra) {
    if (Tt(t))
      return Uu;
    if (So(t))
      return $s;
  } else if (e === hv || e === vv)
    return "value";
  return e;
}
function Nv(t) {
  return $t(t) && t.constructor === Object;
}
function nf(t, e) {
  var r = [];
  if (Nv(t))
    for (var n in t)
      e.push(n), r = r.concat(nf(t[n], e)), e.pop();
  else
    r.push(e.slice());
  return r;
}
function kv(t, e) {
  for (var r in e) {
    var n = e[r];
    if (!Nv(n)) {
      t[r] = !0;
      continue;
    }
    $t(t[r]) || (t[r] = {}), kv(t[r], e[r]);
  }
  return t;
}
function wo(t) {
  return Math.round(t * vp) / vp;
}
function bi(t, e, r) {
  r === void 0 && (r = t.length);
  for (var n = e, o = 0; o < r; ++o) {
    if (!$t(n) || n == null)
      return;
    n = n[t[o]];
  }
  return n;
}
function Av(t, e, r) {
  var n = e.length, o = t;
  if (n === 0)
    return !1;
  for (var i = 0; i < n; ++i)
    if (o === !0 || (o = o[e[i]], !o || !r && o === !0))
      return !1;
  return !0;
}
function ro(t, e) {
  return Av(Tv, t, e);
}
function Il(t) {
  return Av(oS, t, !0);
}
function Xs(t, e) {
  t.state[rf] = e;
}
function of(t) {
  return t.state[rf] && t.isPaused();
}
function jv(t) {
  return !t.isEnded() && t.state[rf];
}
function Iv(t) {
  for (; ; ) {
    var e = "".concat(Math.floor(Math.random() * 1e7));
    if (!Vs || !t)
      return e;
    var r = vs('[data-scene-id="'.concat(e, '"]'));
    if (!r)
      return e;
  }
}
function Fv(t) {
  return t.getId() || t.setId(Iv(!1)).getId();
}
function yp(t) {
  return "".concat(t).match(/[0-9a-zA-Z]+/g).join("");
}
function Bv(t, e, r, n) {
  if (n === void 0 && (n = {}), !(!na || t.getPlayState() === zi)) {
    var o = r || eo;
    if (of(t))
      t.addPlayClass(!0, o, n);
    else {
      t.isEnded() && t.setTime(0), e && t.exportCSS({ className: o });
      var i = t.addPlayClass(!1, o, n);
      if (!i)
        return;
      dS(t, i), Xs(t, !0);
    }
    t.setPlayState(zi);
  }
}
function dS(t, e) {
  var r = t.state, n = t.getDuration(), o = !n || !isFinite(n), i = function() {
    Xs(t, !1), t.finish();
  }, a = function() {
    t.trigger(Dv), Ft(e, "animationcancel", i), Ft(e, "animationend", i), Ft(e, "animationiteration", s);
  };
  t.once(Rv, function() {
    kt(e, "animationcancel", i), kt(e, "animationend", i), kt(e, "animationiteration", s), kt(e, "animationstart", a);
  });
  var s = function(c) {
    var l = c.elapsedTime, u = l, f = o ? 0 : u / n;
    r[is] = u, t.setIteration(f);
  };
  Ft(e, "animationstart", a);
}
function Lv(t) {
  var e;
  if (Lt(t))
    if (t in mp)
      e = mp[t];
    else {
      var r = pr(t);
      if (Lt(r))
        return 0;
      if (r.model === "cubic-bezier")
        t = r.value.map(function(n) {
          return parseFloat(n);
        }), e = Nn(t[0], t[1], t[2], t[3]);
      else if (r.model === "steps")
        e = ef(parseFloat(r.value[0]), r.value[1]);
      else
        return 0;
    }
  else Tt(t) ? e = Nn(t[0], t[1], t[2], t[3]) : e = t;
  return e;
}
function So(t) {
  if (!t)
    return !1;
  var e = t.constructor.prototype;
  return !!(e.clone && e.get && e.setOptions);
}
function xp(t) {
  return t && !!t.constructor.prototype.getItem;
}
function si(t) {
  return t && !!t.constructor.prototype.getFrame;
}
function af(t) {
  return t && !!t.constructor.prototype.toCSSText;
}
function zv(t, e) {
  var r = {};
  for (var n in t) {
    var o = t[n];
    if (af(o))
      r[n] = o;
    else if ($t(o)) {
      var i = zv(o, e);
      for (var a in i)
        r["".concat(n).concat(e).concat(a)] = i[a];
    }
  }
  return r;
}
function pS(t) {
  return "length" in t && t.length >= 0;
}
function hS(t, e, r) {
  return function(n) {
    var o = n.prototype;
    t.forEach(function(i) {
      o[xo("get ".concat(i))] = function() {
        return this[r][i];
      };
    }), e.forEach(function(i) {
      o[xo("set ".concat(i))] = function(a) {
        return this[r][i] = a, this;
      };
    });
  };
}
function Gv(t, e, r) {
  return r === Mv ? !0 : e !== xi && t === e && e % 1 === 0 ? r === (t % 2 >= 1 ? jl : Al) : r === (t % 2 >= 1 ? Al : jl);
}
var $v = [
  "id",
  rr,
  Fe,
  Us,
  oa,
  tn,
  lr,
  tn,
  iS,
  Hr
], vS = At(At([], $v, !0), [
  Li,
  bo
], !1), sf = /* @__PURE__ */ function(t) {
  Ys(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.timerId = 0, n.state = Gw({
      id: "",
      easing: 0,
      easingName: "linear",
      iterationCount: 1,
      delay: 0,
      fillMode: "forwards",
      direction: sS,
      playSpeed: 1,
      currentTime: 0,
      iterationTime: -1,
      iteration: 0,
      tickTime: 0,
      prevTime: 0,
      playState: Sn,
      duration: 0
    }), n.setOptions(r), n;
  }
  return e.prototype.setEasing = function(r) {
    var n = Lv(r), o = n && n[bo] || "linear", i = this.state;
    return i[Li] = n, i[bo] = o, this;
  }, e.prototype.setOptions = function(r) {
    r === void 0 && (r = {});
    for (var n in r) {
      var o = r[n];
      if (n === Li) {
        this.setEasing(o);
        continue;
      } else if (n === lr) {
        o && this.setDuration(o);
        continue;
      }
      cS.indexOf(n) > -1 && (this.state[n] = o);
    }
    return this;
  }, e.prototype.getTotalDuration = function() {
    return this.getActiveDuration(!0);
  }, e.prototype.getActiveDuration = function(r) {
    var n = this.state, o = n[rr];
    return o === xi ? 1 / 0 : (r ? n[Fe] : 0) + this.getDuration() * o;
  }, e.prototype.isEnded = function() {
    return this.state[Gr] === 0 && this.state[Hr] === Sn ? !0 : !(this.getTime() < this.getActiveDuration());
  }, e.prototype.isPaused = function() {
    return this.state[Hr] === Sn;
  }, e.prototype.start = function(r) {
    r === void 0 && (r = this.state[Fe]);
    var n = this.state;
    return n[Hr] = zi, n[Gr] >= r ? (this.trigger(Dv), !0) : !1;
  }, e.prototype.play = function(r) {
    var n = this, o = this.state, i = o[Fe], a = this.getTime();
    return o[Hr] = zi, this.isEnded() && (a === 0 || a >= this.getActiveDuration()) && this.setTime(-i, !0), this.timerId = hs(function(s) {
      o[Uc] = s, n.tick(s, r);
    }), this.start(), this;
  }, e.prototype.pause = function() {
    var r = this.state;
    return r[Hr] !== Sn && (r[Hr] = Sn, this.trigger(Sn)), mv(this.timerId), this;
  }, e.prototype.finish = function() {
    return this.setTime(0), this.state[Gr] = 0, this.end(), this;
  }, e.prototype.end = function() {
    return this.pause(), this.trigger(Rv), this;
  }, e.prototype.setTime = function(r, n, o, i) {
    var a = this.getActiveDuration(), s = this.state, c = s[Gr], l = s[Fe], u = n ? r : this.getUnitTime(r);
    s[Gr] = l + u, u < 0 ? u = 0 : u > a && (u = a), s[is] = u, this.calculate();
    var f = n && !o, d = s[Gr], p = Lt(r) ? parseFloat(r) : r;
    return f && c < l && p >= 0 && this.start(0), i?.(), f && (d < c || this.isEnded()) ? (this.end(), this) : this.isDelay() ? this : (this.trigger(aS, {
      currentTime: u,
      time: this.getIterationTime(),
      iterationCount: s[Oa]
    }), this);
  }, e.prototype.getTime = function() {
    return this.state[is];
  }, e.prototype.getUnitTime = function(r) {
    if (Lt(r)) {
      var n = this.getDuration() || 100;
      if (r === "from")
        return 0;
      if (r === "to")
        return n;
      var o = mr(r), i = o.unit, a = o.value;
      return i === "%" ? (!this.getDuration() && this.setDuration(n), wo(parseFloat(r) / 100 * n)) : i === ">" ? a + ai : a;
    } else
      return wo(r);
  }, e.prototype.isDelay = function() {
    var r = this.state, n = r[Fe], o = r[Gr];
    return n > 0 && o < n;
  }, e.prototype.setIteration = function(r) {
    var n = this.state, o = Math.floor(r), i = n[rr] === xi ? 1 / 0 : n[rr];
    return n[Oa] < o && o < i && this.trigger(Oa, {
      currentTime: n[is],
      iterationCount: o
    }), n[Oa] = r, this;
  }, e.prototype.calculate = function() {
    var r = this.state, n = r[rr], o = r[Us], i = r[oa], a = this.getDuration(), s = this.getTime(), c = a === 0 ? 0 : s / a, l = a ? s % a : 0;
    if (!a)
      return this.setIterationTime(0), this;
    this.setIteration(c);
    var u = Gv(c, n, i), f = isFinite(a);
    if (f && u && (l = a - l), f && n !== xi) {
      var d = o === "both" || o === "forwards";
      c >= n && (l = a * (d ? n % 1 || 1 : 0), u && (l = a - l));
    }
    return this.setIterationTime(l), this;
  }, e.prototype.tick = function(r, n) {
    var o = this;
    if (!this.isPaused()) {
      var i = this.state, a = i[tn], s = i[Uc], c = i[Fe], l = i[Gr], u = l + Math.min(1e3, r - s) / 1e3 * a;
      i[Uc] = r, n && n >= u ? (this.setTime(n - c, !0), this.pause()) : this.setTime(u - c, !0), i[Hr] !== Sn && (this.timerId = hs(function(f) {
        o.tick(f, n);
      }));
    }
  }, e = qw([
    hS(vS, $v, "state")
  ], e), e;
}(fn);
function bp(t, e) {
  if (e === void 0 && (e = []), !t)
    return "";
  var r = [], n = Ge(t);
  return mi(n, e), n.forEach(function(o) {
    r.push("".concat(o.replace(/\d$/g, ""), "(").concat(t[o], ")"));
  }), r.join(" ");
}
function Vv(t, e) {
  return e === void 0 && (e = !1), cf({}, t, e);
}
function cf(t, e, r) {
  r === void 0 && (r = !1);
  for (var n in e) {
    var o = e[n], i = Gi(o);
    i === $s ? t[n] = r ? o.toValue() : o.clone() : i === Mi ? t[n] = r ? lf([n], o) : o : i === Uu ? t[n] = o.slice() : i === ra ? $t(t[n]) && !So(t[n]) ? cf(t[n], o, r) : t[n] = Vv(o, r) : t[n] = e[n];
  }
  return t;
}
function ka(t) {
  return t[0] in gs ? gs[t[0]] : t;
}
function lf(t, e) {
  var r = Gi(e);
  if (r === $s)
    return e.toValue();
  if (r === Mi) {
    if (t[0] !== Qr)
      return lf(t, e());
  } else if (r === ra)
    return Vv(e, !0);
  return e;
}
var kn = /* @__PURE__ */ function(t) {
  Ys(e, t);
  function e(r) {
    r === void 0 && (r = {});
    var n = t.call(this) || this;
    return n.properties = {}, n.orderMap = new fo(Mn), n.properties = {}, n.set(r), n;
  }
  return e.prototype.get = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    var o = this.raw.apply(this, r);
    return lf(ka(r), o);
  }, e.prototype.getOrders = function(r) {
    return this.orderMap.get(r);
  }, e.prototype.setOrders = function(r, n) {
    var o = this.orderMap.set(r, n);
    return this._update(), o;
  }, e.prototype.getOrderObject = function() {
    return this.orderMap.getObject();
  }, e.prototype.setOrderObject = function(r) {
    this.orderMap.setObject(r), this._update();
  }, e.prototype.getKeys = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    var o = this.raw.apply(this, r), i = Gi(o) === ra ? Ge(o) : [];
    return mi(i, this.orderMap.get(r)), i;
  }, e.prototype.gets = function() {
    for (var r = this, n = [], o = 0; o < arguments.length; o++)
      n[o] = arguments[o];
    var i = this.get.apply(this, n), a = this.getKeys.apply(this, n);
    return a.map(function(s) {
      var c = i[s];
      return { key: s, value: c, children: r.gets.apply(r, At(At([], n, !1), [s], !1)) };
    });
  }, e.prototype.raw = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    return bi(ka(r), this.properties);
  }, e.prototype.remove = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    var o = ka(r), i = o.length;
    if (!i)
      return this;
    this.orderMap.remove(o);
    var a = bi(o, this.properties, i - 1);
    return $t(a) && delete a[o[i - 1]], this._update(), this;
  }, e.prototype.set = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    return this._set.apply(this, r), this._update(), this;
  }, e.prototype.getNames = function() {
    return nf(this.properties, []);
  }, e.prototype.has = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    var o = ka(r), i = o.length;
    return i ? !Ze(bi(o, this.properties, i)) : !1;
  }, e.prototype.clone = function() {
    var r = new e();
    return r.setOrderObject(this.orderMap.orderMap), r.merge(this);
  }, e.prototype.merge = function(r) {
    var n = this.properties, o = r.properties;
    return o && cf(n, o), this;
  }, e.prototype.toCSSObject = function(r) {
    var n = this.get(), o = {};
    for (var i in n)
      if (!ro([i], !0)) {
        var a = n[i];
        i === Qr && (i = Qr.replace("animation", na), a = (Lt(a) ? a : a[bo]) || "initial"), r && (i = xo(i.replace(/^[-]+/g, ""))), o[i] = a;
      }
    var s = bp(n[gp], this.orderMap.get([gp])), c = bp(n.filter, this.orderMap.get([Gc]));
    return ip && s && (o[ip] = s), Gc && c && (o[Gc] = c), o;
  }, e.prototype.toCSSText = function() {
    var r = this.toCSSObject(), n = [], o = Ge(r);
    return mi(o, this.orderMap.get([])), o.forEach(function(i) {
      n.push("".concat(Ku(i, "-"), ":").concat(r[i], ";"));
    }), n.join("");
  }, e.prototype.toCSS = function() {
    var r = this.toCSSObject(), n = [], o = Ge(r);
    return mi(o, this.orderMap.get([])), o.forEach(function(i) {
      n.push("".concat(i, ":").concat(r[i], ";"));
    }), n.join("");
  }, e.prototype.clear = function() {
    return this.properties = {}, this.orderMap.clear(), this;
  }, e.prototype._set = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    var o = this, i = r.length, a = r.slice(0, -1), s = r[i - 1], c = a[0];
    if (i === 1 && af(s))
      o.merge(s);
    else if (c in gs)
      o._setByPath(gs[c], s);
    else if (i === 2 && Tt(c))
      o._setByPath(c, s);
    else if (So(s))
      ro(a) ? o._set.apply(o, At(At([], a, !1), [Ov(s)], !1)) : o._setByPath(a, s);
    else if (Tt(s))
      o._setByPath(a, s);
    else if ($t(s)) {
      !o.has.apply(o, a) && ro(a) && o._setByPath(a, {});
      for (var l in s)
        o._set.apply(o, At(At([], a, !1), [l, s[l]], !1));
    } else if (Lt(s)) {
      if (ro(a, !0)) {
        if (Il(a) || !ro(a))
          this._setByPath(a, s);
        else {
          var u = pr(s);
          $t(u) && o._set.apply(o, At(At([], a, !1), [u], !1));
        }
        return this;
      } else {
        var f = lS(s), d = f.styles, p = f.length;
        for (var g in d)
          o._set.apply(o, At(At([], a, !1), [g, d[g]], !1));
        if (p)
          return this;
      }
      o._setByPath(a, s);
    } else
      o._setByPath(a, s);
  }, e.prototype._setByPath = function(r, n) {
    for (var o = this.properties, i = r.length, a = 0; a < i - 1; ++a) {
      var s = r[a];
      !(s in o) && (o[s] = {}), o = o[s];
    }
    if (i) {
      var c = r[i - 1];
      this.orderMap.add(r), i === 1 && c === Qr ? o[c] = Lv(n) : o[c] = Lt(n) && !Il(r) ? pr(n, c) : n;
    }
  }, e.prototype._update = function() {
    this.emit("update");
  }, e;
}(fn);
function uf(t, e, r, n) {
  var o = e.length;
  return t.map(function(i, a) {
    return a >= o ? i : $i(i, e[a], r, n);
  });
}
function gS(t, e, r, n) {
  var o = t.value, i = e.value, a = t.model, s = e.model;
  if (a !== s)
    return $i(t.toValue(), e.toValue(), r, n);
  o.length === 3 && (o[3] = 1), i.length === 3 && (i[3] = 1);
  for (var c = uf(o, i, r, n), l = a, u = 0; u < 3; ++u)
    c[u] = parseInt(c[u], 10);
  var f = new Io(c, {
    type: "color",
    model: l,
    prefix: "".concat(l, "("),
    suffix: ")"
  });
  return f;
}
function mS(t, e, r, n) {
  var o = t.type;
  if (o === "color")
    return gS(t, e, r, n);
  var i = t.value, a = e.value, s = uf(i, a, r, n);
  return new Io(s, {
    type: o,
    separator: t.separator || e.separator,
    prefix: t.prefix || e.prefix,
    suffix: t.suffix || e.suffix,
    model: t.model || e.model
  });
}
function $i(t, e, r, n) {
  if (n === 0)
    return e;
  if (r === 0 || r + n === 0)
    return t;
  var o = Gi(t), i = Gi(e), a = o === Mi, s = i === Mi;
  if (a || s)
    return function() {
      return $i(a ? pr(t()) : t, s ? pr(e()) : e, r, n);
    };
  if (o === i) {
    if (o === $s)
      return mS(t, e, r, n);
    if (o === Uu)
      return uf(t, e, r, n);
    if (o !== "value")
      return t;
  } else
    return t;
  var c = mr("".concat(t)), l = mr("".concat(e)), u;
  if (isNaN(c.value) || isNaN(l.value))
    return t;
  u = yo(c.value, l.value, r, n);
  var f = c.prefix || l.prefix, d = c.unit || l.unit;
  return !f && !d ? u : f + u + d;
}
function yS(t, e, r, n, o, i) {
  if (t === e)
    return n;
  if (t === r)
    return o;
  if (!i)
    return $i(n, o, t - e, r - t);
  var a = i((t - e) / (r - e)), s = $i(n, o, a, 1 - a);
  return s;
}
function wp(t, e) {
  for (var r = t.length, n = 0; n < r; ++n) {
    if (t[n] === e)
      return [n, n];
    if (t[n] > e)
      return [n > 0 ? n - 1 : 0, n];
  }
  return [r - 1, r - 1];
}
function Sp(t) {
  var e = [];
  for (var r in t)
    e.push("".concat(na, "-").concat(Ku(r), ":").concat(t[r], ";"));
  return e.join("");
}
function xS(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e < t[n]) {
      t.splice(n, 0, e);
      return;
    }
  t[r] = e;
}
function Fl(t, e, r) {
  var n = t[t.length - 1];
  (!n || n[0] !== e || n[1] !== r) && t.push([wo(e), wo(r)]);
}
function bS(t, e) {
  var r = t.map(function(o) {
    return [o, o];
  }), n = [];
  return e.forEach(function(o) {
    for (var i = o[rr], a = o[Fe], s = o[tn], c = o[oa], l = Math.ceil(i), u = r[r.length - 1][0], f = r.length, d = u * i, p = 0; p < l; ++p)
      for (var g = c === Mv || c === Al && p % 2 || c === jl && !(p % 2), h = 0; h < f; ++h) {
        var m = r[g ? f - h - 1 : h], y = m[1], x = u * p + (g ? u - m[0] : m[0]), b = r[g ? f - h : h - 1];
        if (x > d) {
          if (h !== 0) {
            var w = u * p + (g ? u - b[0] : b[0]), _ = yo(b[1], y, d - w, x - d);
            Fl(n, (a + u * i) / s, _);
          }
          break;
        } else if (x === d && n.length && n[n.length - 1][0] === d + a)
          break;
        Fl(n, (a + x) / s, y);
      }
    a && n.unshift([0, n[0][1]]), r = n, n = [];
  }), r;
}
var wS = /* @__PURE__ */ function(t) {
  Ys(e, t);
  function e(r, n) {
    var o = t.call(this) || this;
    return o.times = [], o.items = {}, o.nameMap = new fo(Mn), o.elements = [], o.needUpdate = !0, o.registeredElement = !1, o.load(r, n), o;
  }
  return e.prototype.getDuration = function() {
    var r = this.times, n = r.length;
    return (n === 0 ? 0 : r[n - 1]) || this.state[lr];
  }, e.prototype.size = function() {
    return this.times.length;
  }, e.prototype.setDuration = function(r) {
    if (!r)
      return this;
    var n = this.getDuration();
    if (n > 0) {
      var o = r / n, i = this, a = i.times, s = i.items, c = {};
      this.times = a.map(function(l) {
        var u = wo(l * o);
        return c[u] = s[l], u;
      }), this.items = c;
    } else
      this.newFrame(r);
    return this;
  }, e.prototype.setId = function(r) {
    var n = this.state, o = this.elements, i = o.length;
    if (n.id = r || Iv(!!i), i && !n[Be]) {
      var a = yp(this.getId());
      n[Be] = "[".concat(hp, '="').concat(a, '"]'), o.forEach(function(s) {
        s.setAttribute(hp, a);
      });
    }
    return this;
  }, e.prototype.set = function(r) {
    for (var n = this, o = [], i = 1; i < arguments.length; i++)
      o[i - 1] = arguments[i];
    if (si(r))
      return this.set(0, r);
    if (Tt(r))
      for (var a = r.length, s = 0; s < a; ++s) {
        var c = a === 1 ? 0 : this.getUnitTime("".concat(s / (a - 1) * 100, "%"));
        this.set(c, r[s]);
      }
    else if ($t(r)) {
      var l = function(f) {
        var d = r[f];
        ze(f).forEach(function(p) {
          var g = n.getUnitTime(p);
          isNaN(g) ? nf(d, [p]).forEach(function(h) {
            for (var m, y = bi(h.slice(1), d), x = Tt(y) ? y : [bi(h, n.target), y], b = x.length, w = 0; w < b; ++w)
              (m = n.newFrame("".concat(w / (b - 1) * 100, "%"))).set.apply(m, At(At([], h, !1), [x[w]], !1));
          }) : n.set(g, d);
        });
      };
      for (var c in r)
        l(c);
    } else if (!Ze(r)) {
      var u = o[0];
      ze(r + "").forEach(function(f) {
        var d = n.getUnitTime(f);
        if (si(u)) {
          var p = u.getDelay(), g = u.toObject(!n.hasFrame(d + p)), h = u.getDuration(), m = u.getDirection(), y = m.indexOf("reverse") > -1;
          for (var x in g) {
            var b = y ? h - parseFloat(x) : parseFloat(x);
            n.set(d + b, g[x]);
          }
        } else if (o.length === 1 && Tt(u))
          u.forEach(function(_) {
            n.set(d, _);
          });
        else {
          var w = n.newFrame(d);
          w.set.apply(w, o);
        }
      });
    }
    return this.needUpdate = !0, this;
  }, e.prototype.get = function(r) {
    for (var n = [], o = 1; o < arguments.length; o++)
      n[o - 1] = arguments[o];
    var i = this.getFrame(r);
    return i && i.get.apply(i, n);
  }, e.prototype.getOrders = function(r) {
    return this.needUpdate && this.update(), this.nameMap.get(r);
  }, e.prototype.setOrders = function(r, n) {
    this.needUpdate && this.update();
    var o = this.nameMap.set(r, n);
    return this.updateFrameOrders(), o;
  }, e.prototype.getOrderObject = function() {
    return this.nameMap.getObject();
  }, e.prototype.setOrderObject = function(r) {
    this.nameMap.setObject(r), this.updateFrameOrders();
  }, e.prototype.remove = function(r) {
    for (var n = [], o = 1; o < arguments.length; o++)
      n[o - 1] = arguments[o];
    if (n.length) {
      var i = this.getFrame(r);
      i && i.remove.apply(i, n);
    } else
      this.removeFrame(r);
    return this.needUpdate = !0, this;
  }, e.prototype.append = function(r) {
    return si(r) ? this.set(this.getDuration(), r) : this.append(new e(r)), this;
  }, e.prototype.prepend = function(r) {
    if (si(r)) {
      var n = r.getDuration() + r.getDelay(), o = this.getFrame(0);
      this.removeFrame(0), this.unshift(n), this.set(0, r), this.set(n + ai, o);
    } else
      this.prepend(new e(r));
    return this;
  }, e.prototype.unshift = function(r) {
    var n = this, o = n.times, i = n.items, a = {};
    return this.times = o.map(function(s) {
      var c = wo(r + s);
      return a[c] = i[s], c;
    }), this.items = a, this;
  }, e.prototype.toObject = function(r) {
    r === void 0 && (r = !0);
    var n = {}, o = this.getDelay();
    return this.forEach(function(i, a) {
      n[(!a && !r ? ai : 0) + o + a] = i.clone();
    }), n;
  }, e.prototype.setSelector = function(r) {
    return this.setElement(r), this;
  }, e.prototype.getElements = function() {
    return this.elements;
  }, e.prototype.setElements = function(r) {
    return this.setElement(r);
  }, e.prototype.setElement = function(r) {
    r !== !0 && this.registeredElement !== r && (this.registeredElement = r);
    var n = this.state, o = this.registeredElement, i = r, a = [];
    if (we(o) && (i = o(this.getId(), 0)), i) {
      if (i === !0 || Lt(i)) {
        var s = Lt(n[Be]) && n[Be] || "".concat(n.id), c = i === !0 ? s : i, l = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(c);
        try {
          a = $c(vs(l ? l[1] : c, !0));
        } catch {
          a = [];
        }
        n[Be] = c;
      } else if (pS(i))
        a = $c(i);
      else if (i instanceof Element)
        a = [i];
      else if ("current" in i || "value" in i) {
        var u = i.current || i.value;
        u ? a = [u] : a = [];
      }
    } else return this;
    return a.length ? (this.elements = a, this.setId(this.getId()), this.target = a[0].style, this.targetFunc = function(f) {
      var d = f.get("attribute");
      if (d) {
        var p = function(y) {
          a.forEach(function(x) {
            x.setAttribute(y, d[y]);
          });
        };
        for (var g in d)
          p(g);
      }
      if (f.has("html")) {
        var h = f.get("html");
        a.forEach(function(y) {
          y.innerHTML = h;
        });
      }
      var m = f.toCSSText();
      if (n.cssText !== m)
        return n.cssText = m, a.forEach(function(y) {
          y.style.cssText += m;
        }), f;
    }, this) : this;
  }, e.prototype.setTarget = function(r) {
    return this.target = r, this.targetFunc = function(n) {
      var o = n.get();
      for (var i in o)
        r[i] = o[i];
    }, this;
  }, e.prototype.setCSS = function(r, n) {
    return n === void 0 && (n = []), this.set(r, Tw(this.elements, n)), this;
  }, e.prototype.setTime = function(r, n, o, i) {
    var a = this;
    return t.prototype.setTime.call(this, r, n, o, function() {
      var s = a.getIterationTime(), c = a.getEasing() || i, l = a.getNowFrame(s, c), u = a.getTime();
      a.temp = l, a.trigger("animate", {
        frame: l,
        currentTime: u,
        time: s
      }), a.targetFunc && a.targetFunc(l);
    }), this;
  }, e.prototype.update = function() {
    var r = this.nameMap, n = {};
    this.forEach(function(a) {
      kv(n, a.properties);
    });
    var o = new fo(Mn);
    function i(a, s) {
      var c = Ge(a);
      mi(c, r.get(s)), o.set(s, c), c.forEach(function(l) {
        var u = a[l];
        $t(u) && i(u, At(At([], s, !0), [l], !1));
      });
    }
    return i(n, []), this.nameMap = o, this.forEach(function(a) {
      a.setOrderObject(o.orderMap);
    }), this.needUpdate = !1, this;
  }, e.prototype.newFrame = function(r) {
    var n = this.getFrame(r);
    return n || (n = new kn(), this.setFrame(r, n), n);
  }, e.prototype.setFrame = function(r, n) {
    var o = this.getUnitTime(r);
    return this.items[o] = n, xS(this.times, o), this.needUpdate = !0, this;
  }, e.prototype.getFrame = function(r) {
    return this.items[this.getUnitTime(r)];
  }, e.prototype.removeFrame = function(r) {
    var n = this.getUnitTime(r), o = this.items, i = this.times.indexOf(n);
    return delete o[n], i > -1 && this.times.splice(i, 1), this.needUpdate = !0, this;
  }, e.prototype.hasFrame = function(r) {
    return this.getUnitTime(r) in this.items;
  }, e.prototype.hasName = function(r) {
    return this.needUpdate && this.update(), !!this.nameMap.hasName(r);
  }, e.prototype.mergeFrame = function(r, n) {
    if (n) {
      var o = this.newFrame(r);
      o.merge(n);
    }
    return this;
  }, e.prototype.getNowFrame = function(r, n, o) {
    var i = this;
    this.needUpdate && this.update();
    var a = new kn(), s = wp(this.times, r), c = s[0], l = s[1], u = this.getEasing() || n, f = this.nameMap;
    if (this.hasName([Qr])) {
      var d = this.getNowValue(r, [Qr], c, l, !1, 0, !0);
      we(d) && (u = d);
    }
    if (o) {
      var p = this.getFrame(r), g = p.orderMap.filter([], function(x) {
        return p.has.apply(p, x);
      });
      for (var h in Tv) {
        var m = f.get([h]);
        g.get([h]) && m && g.set([h], m);
      }
      f = g;
    }
    var y = f.gets([]);
    return a.setOrderObject(f.orderMap), y.forEach(function(x) {
      var b = i.getNowValue(r, x, c, l, o, u, Il(x));
      Ze(b) || a.set(x, b);
    }), a;
  }, e.prototype.getCurrentFrame = function(r, n) {
    var o = this.getIterationTime(), i = r || this.needUpdate || !this.temp ? this.getComputedFrame(o, n) : this.temp;
    return this.temp = i, i;
  }, e.prototype.getComputedFrame = function(r, n, o) {
    return this.getNowFrame(r, n, o);
  }, e.prototype.load = function(r, n) {
    var o;
    if (r === void 0 && (r = {}), n === void 0 && (n = r.options), n && this.setOptions(n), Tt(r))
      this.set(r);
    else if (r.keyframes)
      this.set(r.keyframes);
    else
      for (var i in r)
        i !== "options" && this.set((o = {}, o[i] = r[i], o));
    return n && n[lr] && this.setDuration(n[lr]), this;
  }, e.prototype.clone = function() {
    var r = new e();
    return r.setOptions(this.state), r.setOrderObject(this.nameMap.orderMap), this.forEach(function(n, o) {
      r.setFrame(o, n.clone());
    }), r;
  }, e.prototype.forEach = function(r) {
    var n = this.times, o = this.items;
    return n.forEach(function(i) {
      r(o[i], i, o);
    }), this;
  }, e.prototype.setOptions = function(r) {
    r === void 0 && (r = {}), t.prototype.setOptions.call(this, r);
    var n = r.id, o = r.selector, i = r.elements, a = r.element, s = r.target;
    return n && this.setId(n), s ? this.setTarget(s) : o && !this.state.noRegisterElement ? this.setSelector(o) : (i || a) && this.setElement(i || a), this;
  }, e.prototype.toCSS = function(r, n, o) {
    r === void 0 && (r = { className: eo }), n === void 0 && (n = this.getDuration()), o === void 0 && (o = []);
    var i = this.state, a = i[Be];
    if (!a)
      return "";
    var s = this.getDuration();
    i[lr] = s, o.push(i);
    var c = $c(o).reverse(), l = yp(Fv(this)), u = o[0], f = yr(c, function(T) {
      return T[rr] === xi || !isFinite(T[lr]);
    }, o.length - 1), d = c.slice(0, f), p = n || d.reduce(function(T, R) {
      return (R[Fe] + T * R[rr]) / R[tn];
    }, s), g = c.slice(f).reduce(function(T, R) {
      return (T + R[Fe]) / R[tn];
    }, 0), h = Se(c, function(T) {
      return T[Li] && T[bo];
    }, i)[bo], m = c[f][rr], y = u[Us], x = c[f][oa], b = Sp({
      fillMode: y,
      direction: x,
      iterationCount: m,
      delay: "".concat(g, "s"),
      name: "".concat(pp, "KEYFRAMES_").concat(l),
      duration: "".concat(p / u[tn], "s"),
      timingFunction: h
    }), w = ze(a).map(function(T) {
      var R = /([\s\S]+)(:+[a-zA-Z]+)$/g.exec(T);
      return R ? [R[1], R[2]] : [T, ""];
    }), _ = r.className, E = r.selector, C = we(E) ? E(this, a) : E;
    return `
    `.concat(C || w.map(function(T) {
      var R = T[0], D = T[1];
      return "".concat(R, ".").concat(_).concat(D);
    }), " {").concat(b, `}
    `).concat(w.map(function(T) {
      var R = T[0], D = T[1];
      return "".concat(R, ".").concat(Na).concat(D);
    }), " {").concat(na, `-play-state: paused;}
    @`).concat(hw, " ").concat(pp, "KEYFRAMES_").concat(l, "{").concat(this._toKeyframes(p, d, x), "}");
  }, e.prototype.exportCSS = function(r, n, o) {
    if (!this.elements.length)
      return "";
    var i = this.toCSS(r, n, o), a = o && !Ze(o[rr]);
    return a || (this.styledInjector && (this.styledInjector.destroy(), this.styledInjector = null), this.styled = Hs(i), this.styledInjector = this.styled.inject(this.getAnimationElement(), { original: !0 })), this;
  }, e.prototype.pause = function() {
    return t.prototype.pause.call(this), of(this) && this.pauseCSS(), this;
  }, e.prototype.pauseCSS = function() {
    return this.elements.forEach(function(r) {
      ji(r, Na);
    }), this;
  }, e.prototype.endCSS = function() {
    return this.elements.forEach(function(r) {
      oo(r, Na), oo(r, eo);
    }), Xs(this, !1), this;
  }, e.prototype.end = function() {
    return jv(this) && this.endCSS(), t.prototype.end.call(this), this;
  }, e.prototype.playCSS = function(r, n, o) {
    return r === void 0 && (r = !0), o === void 0 && (o = {}), Bv(this, r, n, o), this;
  }, e.prototype.getAnimationElement = function() {
    return this.elements[0];
  }, e.prototype.addPlayClass = function(r, n, o) {
    o === void 0 && (o = {});
    var i = this.elements, a = i.length, s = Sp(o);
    if (a)
      return r ? i.forEach(function(c) {
        oo(c, Na);
      }) : (i.forEach(function(c) {
        c.style.cssText += s, Ut(c, eo) && oo(c, eo);
      }), i.forEach(function(c) {
        c.clientWidth;
      }), i.forEach(function(c) {
        ji(c, eo);
      })), i[0];
  }, e.prototype.clear = function() {
    return this.times = [], this.items = {}, this.nameMap = new fo(Mn), this.styledInjector && this.styledInjector.destroy(), this.styled = null, this.styledInjector = null, this.temp = null, this.needUpdate = !0, this;
  }, e.prototype.getNowValue = function(r, n, o, i, a, s, c) {
    var l = this.times, u = l.length, f, d, p, g, h = Ze(o), m = Ze(i);
    if (h || m) {
      var y = wp(l, r);
      h && (o = y[0]), m && (i = y[1]);
    }
    for (var x = o; x >= 0; --x) {
      var b = this.getFrame(l[x]);
      if (b.has.apply(b, n)) {
        f = l[x], p = b;
        break;
      }
    }
    var w = p && p.raw.apply(p, n);
    if (a && !ro([n[0]]))
      return f === r ? w : void 0;
    if (c)
      return w;
    for (var x = i; x < u; ++x) {
      var b = this.getFrame(l[x]);
      if (b.has.apply(b, n)) {
        d = l[x], g = b;
        break;
      }
    }
    var _ = g && g.raw.apply(g, n);
    return !p || Ze(w) ? _ : !g || Ze(_) || w === _ ? w : yS(r, Math.max(f, 0), d, w, _, s);
  }, e.prototype._toKeyframes = function(r, n, o) {
    var i = this, a = {}, s = this.times.slice();
    if (!s.length)
      return "";
    var c = this.getDuration();
    !this.getFrame(0) && s.unshift(0), !this.getFrame(c) && s.push(c);
    var l = bS(s, n), u = l[l.length - 1];
    u[0] < r && Fl(l, r, u[1]);
    var f = -1;
    return l.map(function(d) {
      var p = d[0], g = d[1];
      a[g] || (a[g] = (!i.hasFrame(g) || g === 0 || g === c ? i.getNowFrame(g) : i.getNowFrame(g, 0, !0)).toCSSText());
      var h = p / r * 100;
      return h - f < ai && (h += ai), f = h, "".concat(Math.min(h, 100), `%{
                `).concat(p === 0 && !Gv(0, 1, o) ? "" : a[g], `
            }`);
    }).join("");
  }, e.prototype.updateFrameOrders = function() {
    var r = this.nameMap.orderMap;
    this.forEach(function(n) {
      n.setOrderObject(r);
    });
  }, e;
}(sf), Wv = /* @__PURE__ */ function(t) {
  Ys(e, t);
  function e(r, n) {
    var o = t.call(this) || this;
    return o.items = {}, o.orderMap = new fo(Mn), o.load(r, n), o;
  }
  return e.prototype.getDuration = function() {
    var r = 0;
    return this.forEach(function(n) {
      r = Math.max(r, n.getTotalDuration() / n.getPlaySpeed());
    }), r || this.state[lr];
  }, e.prototype.setDuration = function(r) {
    this.items;
    var n = this.getDuration();
    if (r === 0 || !isFinite(n))
      return this;
    if (n === 0)
      this.forEach(function(i) {
        i.setDuration(r);
      });
    else {
      var o = r / n;
      this.forEach(function(i) {
        i.setDelay(i.getDelay() * o), i.setDuration(i.getDuration() * o);
      });
    }
    return t.prototype.setDuration.call(this, r), this;
  }, e.prototype.getItem = function(r) {
    return this.items[r];
  }, e.prototype.newItem = function(r, n) {
    if (n === void 0 && (n = {}), this.items[r])
      return this.items[r];
    var o = new wS();
    return this.setItem(r, o), o.setOptions(n), o;
  }, e.prototype.removeItem = function(r) {
    return delete this.items[r], this.orderMap.remove([r]), this;
  }, e.prototype.setItem = function(r, n) {
    return n.setId(r), this.items[r] = n, this.orderMap.add([r]), this;
  }, e.prototype.getCurrentFrames = function(r, n) {
    var o = this.getEasing() || n, i = {};
    return this.forEach(function(a) {
      var s = a.getId();
      xp(a) ? i[s] = a.getCurrentFrames(r, o) : i[s] = a.getCurrentFrame(r, o);
    }), this.temp = i, i;
  }, e.prototype.getCurrentFlattedFrames = function(r, n) {
    var o = this.getCurrentFrames(r, n);
    return zv(o, Mn);
  }, e.prototype.setTime = function(r, n, o, i) {
    var a = this;
    return t.prototype.setTime.call(this, r, n, o, function() {
      var s = a.getIterationTime(), c = a.getEasing() || i;
      a.forEach(function(u) {
        u.setTime(s * u.getPlaySpeed() - u.getDelay(), n, !0, c);
      });
      var l = a.getCurrentFrames(!1, i);
      a.trigger("animate", {
        frames: l,
        currentTime: a.getTime(),
        time: s
      });
    }), this;
  }, e.prototype.forEach = function(r) {
    var n = this.items;
    return this.getOrders().forEach(function(o, i) {
      r(n[o], o, i, n);
    }), this;
  }, e.prototype.toCSS = function(r, n, o) {
    n === void 0 && (n = this.getDuration()), o === void 0 && (o = []);
    var i = !n || !isFinite(n) ? 0 : n, a = [], s = this.state;
    return s[lr] = this.getDuration(), this.forEach(function(c) {
      a.push(c.toCSS(r, i, o.concat(s)));
    }), a.join("");
  }, e.prototype.exportCSS = function(r, n, o) {
    var i = this.toCSS(r, n, o);
    return (!o || !o.length) && (this.styledInjector && (this.styledInjector.destroy(), this.styledInjector = null), this.styled = Hs(i), this.styledInjector = this.styled.inject(this.getAnimationElement(), { original: !0 })), this;
  }, e.prototype.append = function(r) {
    r.setDelay(r.getDelay() + this.getDuration()), this.setItem(Fv(r), r);
  }, e.prototype.pauseCSS = function() {
    return this.forEach(function(r) {
      r.pauseCSS();
    });
  }, e.prototype.pause = function() {
    return t.prototype.pause.call(this), of(this) && this.pauseCSS(), this.forEach(function(r) {
      r.pause();
    }), this;
  }, e.prototype.endCSS = function() {
    this.forEach(function(r) {
      r.endCSS();
    }), Xs(this, !1);
  }, e.prototype.end = function() {
    return jv(this) && this.endCSS(), t.prototype.end.call(this), this;
  }, e.prototype.getOrders = function() {
    return this.orderMap.get([]) || [];
  }, e.prototype.setOrders = function(r) {
    return this.orderMap.set([], r);
  }, e.prototype.getAnimationElement = function() {
    var r;
    return this.forEach(function(n) {
      var o = n.getAnimationElement();
      !r && (r = o);
    }), r;
  }, e.prototype.addPlayClass = function(r, n, o) {
    o === void 0 && (o = {});
    var i;
    return this.forEach(function(a) {
      var s = a.addPlayClass(r, n, o);
      !i && (i = s);
    }), i;
  }, e.prototype.playCSS = function(r, n, o) {
    return r === void 0 && (r = !0), o === void 0 && (o = {}), Bv(this, r, n, o), this;
  }, e.prototype.set = function(r) {
    return this.load(r), this;
  }, e.prototype.clear = function() {
    this.finish(), this.items = {}, this.orderMap = new fo(Mn), this.styledInjector && this.styledInjector.destroy(), this.styled = null, this.styledInjector = null;
  }, e.prototype.load = function(r, n) {
    if (r === void 0 && (r = {}), n === void 0 && (n = r.options), !r)
      return this;
    this.setOptions(n);
    var o = n && n[Be] || this.state[Be], i = function(c) {
      if (c === "options")
        return "continue";
      var l = r[c], u = void 0;
      if (xp(l) || si(l))
        a.setItem(c, l), u = l;
      else if (we(l)) {
        var f = [];
        o && Vs && (a.state.noRegisterElement || (f = vs("".concat(we(o) ? o(c) : c), !0)));
        for (var d = f.length, p = d || l.defaultCount || 0, g = new e(), h = [], m = 0; m < p; ++m) {
          var y = f[m], x = g.newItem(m);
          x.setId().load(l(m, f[m])), h.push(x.getId()), y && x.setElement(y);
        }
        if (!d) {
          var b = [];
          g.state[Be] = function(w) {
            return b.length || (b = vs("".concat(we(o) ? o(c) : c), !0)), b[h.indexOf(w)];
          };
        }
        return a.setItem(c, g), "continue";
      } else
        u = a.newItem(c, {
          noRegisterElement: !0
        }), u.load(l);
      a.state.noRegisterElement || o && u.setSelector(o);
    }, a = this;
    for (var s in r)
      i(s);
  }, e.prototype.setOptions = function(r) {
    r === void 0 && (r = {}), t.prototype.setOptions.call(this, r);
    var n = r.selector;
    return n && (this.state[Be] = n), this;
  }, e.prototype.setSelector = function(r) {
    var n = this.state, o = r === !0 ? n[Be] || !0 : r;
    n[Be] = o;
    var i = we(r);
    return o && this.forEach(function(a, s) {
      a.setSelector(i ? r(s) : o);
    }), this;
  }, e.prototype.start = function(r) {
    r === void 0 && (r = this.state[Fe]);
    var n = t.prototype.start.call(this, r);
    return n ? this.forEach(function(o) {
      o.start(0);
    }) : this.forEach(function(o) {
      o.setPlayState(zi);
    }), n;
  }, e.VERSION = "1.10.3", e;
}(sf);
function ia(t) {
  var e = t.prototype;
  return Ge(e).filter(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    return r === "constructor" ? !1 : !n.get && !n.set && we(n.value || e[r]);
  });
}
var SS = ia(fn), ff = At(At([], SS, !0), ia(sf), !0);
At(At([], ff, !0), ia(Wv), !0);
At(At([], ff, !0), ia(Wv), !0);
var Cp = At(At([], ff, !0), ia(kn), !0), Ep = {
  methods: Cp,
  created: function(t) {
    var e = we(t) ? t() : t, r = Fi(0), n;
    Ev(e) ? n = e : n = Fi(af(e) ? e : new kn(e));
    var o = Yc(function() {
      return n.current, r.current, n.current.toCSSText();
    }), i = Yc(function() {
      return n.current, o.current, n.current.toCSSObject();
    }), a = Yc(function() {
      return n.current, o.current, n.current.toCSSObject(!0);
    }), s = function() {
      ++r.current;
    };
    n.subscribe(function(l, u) {
      u.off("update", s), l.on("update", s);
    });
    var c = $w(Bi({ cssText: o, cssObject: i, camelCasedCSSObject: a, onUpdate: s }, Cp.reduce(function(l, u) {
      return l[u] = function() {
        for (var f, d = [], p = 0; p < arguments.length; p++)
          d[p] = arguments[p];
        var g = n.current;
        return g == null ? void 0 : (f = g[u]).call.apply(f, At([g], d, !1));
      }, l;
    }, {})));
    return c;
  },
  destroy: function(t) {
    t.off("update", t.onUpdate);
  }
};
Bi(Bi({}, Ep), { created: function(t) {
  var e = we(t) ? t() : t, r = Fi(new kn());
  return e.on("animate", function(n) {
    r.current = n.frame;
  }), Ep.created(r);
} });
function CS(t, e) {
  return (t.getOrders(["transform"]) || []).indexOf(e);
}
class df {
  constructor(e = {}) {
    this.map = /* @__PURE__ */ new Map(), this.onBeforeRenderStart = (r) => {
      const n = this.testFrame(r);
      r.setTransform(n?.toCSSObject().transform || "");
    }, this.onBeforeRenderGroupStart = (r) => {
      r.events.forEach((n) => {
        this.onBeforeRenderStart(n);
      });
    }, this.onDragStart = (r) => {
      const n = this.testFrame(r);
      if (!n)
        return !1;
      this.setTranasform(r, n, "translate");
    }, this.onDrag = (r) => {
      this.testDrag(r), this.testRender(r.target);
    }, this.onDragGroupStart = (r) => {
      r.events.forEach((n) => {
        this.onDragStart(n);
      });
    }, this.onDragGroup = (r) => {
      r.events.forEach((n) => {
        this.onDrag(n);
      });
    }, this.onResizeStart = (r) => {
      r.dragStart && this.onDragStart(r.dragStart), r.setOrigin(["%", "%"]);
    }, this.onResize = (r) => {
      this.testResize(r), this.testRender(r.target);
    }, this.onResizeGroupStart = (r) => {
      r.events.forEach((n) => {
        this.onResizeStart(n);
      });
    }, this.onResizeGroup = (r) => {
      r.events.forEach((n) => {
        this.onResize(n);
      });
    }, this.onScaleStart = (r) => {
      const n = this.testFrame(r);
      if (!n)
        return !1;
      this.setTranasform(r, n, "scale"), r.dragStart && this.onDragStart(r.dragStart);
    }, this.onScale = (r) => {
      this.testScale(r), this.testRender(r.target);
    }, this.onScaleGroupStart = (r) => {
      r.events.forEach((n) => {
        this.onScaleStart(n);
      });
    }, this.onScaleGroup = (r) => {
      r.events.forEach((n) => {
        this.onScale(n);
      });
    }, this.onRotateStart = (r) => {
      const n = this.testFrame(r);
      if (!n)
        return !1;
      this.setTranasform(r, n, "rotate"), r.dragStart && this.onDragStart(r.dragStart);
    }, this.onRotate = (r) => {
      this.testRotate(r), this.testRender(r.target);
    }, this.onRotateGroupStart = (r) => {
      r.events.forEach((n) => {
        this.onRotateStart(n);
      });
    }, this.onRotateGroup = (r) => {
      r.events.forEach((n) => {
        this.onRotate(n);
      });
    }, this.onClip = (r) => {
      const n = this.testFrame(r);
      n && (r.clipType === "rect" ? n.set("clip", r.clipStyle) : n.set("clip-path", r.clipStyle)), this.testRender(r.target);
    }, this.onDragOriginStart = (r) => {
      r.dragStart && this.onDragStart(r.dragStart);
    }, this.onDragOrigin = (r) => {
      const n = this.testFrame(r);
      n && (n.set("transform-origin", r.transformOrigin), this.testDrag(r.drag), this.testRender(r.target));
    }, this.onRound = (r) => {
      const n = this.testFrame(r);
      n && (n.set("border-radius", r.borderRadius), this.testRender(r.target));
    }, this.onWarpStart = (r) => {
      const n = this.testFrame(r);
      if (!n)
        return !1;
      this.setTranasform(r, n, "matrix3d");
    }, this.onWarp = (r) => {
      const n = this.testFrame(r);
      n && (n.set("transform", "matrix3d", r.matrix.join(", ")), this.testRender(r.target));
    }, this.onRender = (r) => {
      const n = r.target, o = this.getFrame(n);
      !n || !o || this.render(n, o);
    }, this.options = {
      useBeforeRender: !1,
      useRender: !1,
      createAuto: !0,
      ...e
    };
  }
  static create(e) {
    return new df(e);
  }
  render(e, r = this.getFrame(e) || new kn()) {
    e.style.cssText += r.toCSS();
  }
  clear() {
    this.map.clear();
  }
  getTargets() {
    return this.map.keys();
  }
  getFrames() {
    return this.map.values();
  }
  getFrame(e) {
    return this.map.get(e);
  }
  setFrame(e, r) {
    return this.map.set(e, r);
  }
  removeFrame(e) {
    this.map.delete(e);
  }
  createFrame(e, r = {}) {
    const { translate: n, rotate: o, scale: i } = ES(e), a = new kn({
      transform: {
        translate: n,
        rotate: o,
        scale: i
      }
    });
    return a.set(r), this.map.set(e, a), a;
  }
  setElements(e) {
    const r = Lt(e) ? document.querySelectorAll(e) : e, n = r.length, o = this.map;
    for (let i = 0; i < n; ++i) {
      const a = r[i];
      o.has(a) || this.createFrame(a);
    }
  }
  testFrame(e) {
    const r = e.target, n = this.getFrame(r);
    if (n)
      return n;
    if (!this.options.createAuto && e.stop) {
      e.stop();
      return;
    }
    return this.createFrame(r);
  }
  testDrag(e) {
    const r = e.target, n = e.translate, o = this.getFrame(r), i = `${n[0]}px`, a = `${n[1]}px`;
    o && (o.has("transform", "translate") ? o.set("transform", "translate", `${i},${a}`) : (o.set("transform", "translateX", i), o.set("transform", "translateY", a)));
  }
  testResize(e) {
    const r = e.target, n = this.getFrame(r);
    n && (n.set("width", `${e.width}px`), n.set("height", `${e.height}px`), this.testDrag(e.drag));
  }
  testScale(e) {
    const r = this.testFrame(e), n = e.scale;
    r && (this.testDrag(e.drag), r.set("transform", "scale", `${n[0]},${n[1]}`));
  }
  testRotate(e) {
    const r = this.testFrame(e), n = e.rotate;
    r && (this.testDrag(e.drag), r.set("transform", "rotate", `${n}deg`));
  }
  testRender(e, r = this.getFrame(e)) {
    this.options.useRender || this.render(e, r);
  }
  setTranasform(e, r, n) {
    const o = CS(r, n);
    this.options.useBeforeRender ? e.setTransformIndex(o) : e.setTransform(r.toCSSObject().transform || [], o);
  }
}
function ES(t) {
  let e = "";
  if (t.style.transform)
    e = t.style.transform;
  else {
    const i = window.getComputedStyle(t);
    e = i.transform || i.webkitTransform;
  }
  let r = "0px, 0px", n = "0deg", o = "1, 1";
  if (e && e !== "none")
    if (e.startsWith("matrix")) {
      const i = e.match(/matrix\((.*?)\)/);
      if (i && i[1]) {
        const a = i[1].split(",").map((s) => parseFloat(s.trim()));
        a.length >= 6 && (r = `${a[4]}px, ${a[5]}px`);
      }
    } else {
      const i = e.match(/translate\(\s*([\d.]+)px\s*,\s*([\d.]+)px\s*\)/);
      i && (r = `${i[1]}px, ${i[2]}px`);
      const a = e.match(/rotate\(\s*([\d.]+)deg\s*\)/);
      a && (n = `${a[1]}deg`);
      const s = e.match(/scale\(\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
      s && (s[2] ? o = `${s[1]}, ${s[2]}` : o = `${s[1]}, ${s[1]}`);
    }
  return {
    translate: r,
    rotate: n,
    scale: o
  };
}
function Hv(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (r = Hv(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function Vi() {
  for (var t, e, r = 0, n = "", o = arguments.length; r < o; r++) (t = arguments[r]) && (e = Hv(t)) && (n && (n += " "), n += e);
  return n;
}
const pf = "-", _S = (t) => {
  const e = RS(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (a) => {
      const s = a.split(pf);
      return s[0] === "" && s.length !== 1 && s.shift(), Yv(s, e) || TS(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
  };
}, Yv = (t, e) => {
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), o = n ? Yv(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const i = t.join(pf);
  return e.validators.find(({
    validator: a
  }) => a(i))?.classGroupId;
}, _p = /^\[(.+)\]$/, TS = (t) => {
  if (_p.test(t)) {
    const e = _p.exec(t)[1], r = e?.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, RS = (t) => {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return MS(Object.entries(t.classGroups), r).forEach(([i, a]) => {
    Bl(a, n, i, e);
  }), n;
}, Bl = (t, e, r, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? e : Tp(e, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (DS(o)) {
        Bl(o(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Bl(a, Tp(e, i), r, n);
    });
  });
}, Tp = (t, e) => {
  let r = t;
  return e.split(pf).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, DS = (t) => t.isThemeGetter, MS = (t, e) => e ? t.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [e + a, s])) : i);
  return [r, o];
}) : t, PS = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    r.set(i, a), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    }
  };
}, Uv = "!", OS = (t) => {
  const {
    separator: e,
    experimentalParseClassName: r
  } = t, n = e.length === 1, o = e[0], i = e.length, a = (s) => {
    const c = [];
    let l = 0, u = 0, f;
    for (let m = 0; m < s.length; m++) {
      let y = s[m];
      if (l === 0) {
        if (y === o && (n || s.slice(m, m + i) === e)) {
          c.push(s.slice(u, m)), u = m + i;
          continue;
        }
        if (y === "/") {
          f = m;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" && l--;
    }
    const d = c.length === 0 ? s : s.substring(u), p = d.startsWith(Uv), g = p ? d.substring(1) : d, h = f && f > u ? f - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, NS = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}, kS = (t) => ({
  cache: PS(t.cacheSize),
  parseClassName: OS(t),
  ..._S(t)
}), AS = /\s+/, jS = (t, e) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, i = [], a = t.trim().split(AS);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const l = a[c], {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: p
    } = r(l);
    let g = !!p, h = n(g ? d.substring(0, p) : d);
    if (!h) {
      if (!g) {
        s = l + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (h = n(d), !h) {
        s = l + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const m = NS(u).join(":"), y = f ? m + Uv : m, x = y + h;
    if (i.includes(x))
      continue;
    i.push(x);
    const b = o(h, g);
    for (let w = 0; w < b.length; ++w) {
      const _ = b[w];
      i.push(y + _);
    }
    s = l + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function IS() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = Xv(e)) && (n && (n += " "), n += r);
  return n;
}
const Xv = (t) => {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Xv(t[n])) && (r && (r += " "), r += e);
  return r;
};
function FS(t, ...e) {
  let r, n, o, i = a;
  function a(c) {
    const l = e.reduce((u, f) => f(u), t());
    return r = kS(l), n = r.cache.get, o = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const l = n(c);
    if (l)
      return l;
    const u = jS(c, r);
    return o(c, u), u;
  }
  return function() {
    return i(IS.apply(null, arguments));
  };
}
const Nt = (t) => {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}, qv = /^\[(?:([a-z-]+):)?(.+)\]$/i, BS = /^\d+\/\d+$/, LS = /* @__PURE__ */ new Set(["px", "full", "screen"]), zS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, GS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, VS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, WS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mr = (t) => po(t) || LS.has(t) || BS.test(t), $r = (t) => Fo(t, "length", JS), po = (t) => !!t && !Number.isNaN(Number(t)), qc = (t) => Fo(t, "number", po), ni = (t) => !!t && Number.isInteger(Number(t)), HS = (t) => t.endsWith("%") && po(t.slice(0, -1)), xt = (t) => qv.test(t), Vr = (t) => zS.test(t), YS = /* @__PURE__ */ new Set(["length", "size", "percentage"]), US = (t) => Fo(t, YS, Kv), XS = (t) => Fo(t, "position", Kv), qS = /* @__PURE__ */ new Set(["image", "url"]), KS = (t) => Fo(t, qS, tC), ZS = (t) => Fo(t, "", QS), oi = () => !0, Fo = (t, e, r) => {
  const n = qv.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}, JS = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  GS.test(t) && !$S.test(t)
), Kv = () => !1, QS = (t) => VS.test(t), tC = (t) => WS.test(t), eC = () => {
  const t = Nt("colors"), e = Nt("spacing"), r = Nt("blur"), n = Nt("brightness"), o = Nt("borderColor"), i = Nt("borderRadius"), a = Nt("borderSpacing"), s = Nt("borderWidth"), c = Nt("contrast"), l = Nt("grayscale"), u = Nt("hueRotate"), f = Nt("invert"), d = Nt("gap"), p = Nt("gradientColorStops"), g = Nt("gradientColorStopPositions"), h = Nt("inset"), m = Nt("margin"), y = Nt("opacity"), x = Nt("padding"), b = Nt("saturate"), w = Nt("scale"), _ = Nt("sepia"), E = Nt("skew"), C = Nt("space"), T = Nt("translate"), R = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", xt, e], M = () => [xt, e], O = () => ["", Mr, $r], k = () => ["auto", po, xt], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], $ = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", xt], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [po, xt];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [oi],
      spacing: [Mr, $r],
      blur: ["none", "", Vr, xt],
      brightness: B(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Vr, xt],
      borderSpacing: M(),
      borderWidth: O(),
      contrast: B(),
      grayscale: z(),
      hueRotate: B(),
      invert: z(),
      gap: M(),
      gradientColorStops: [t],
      gradientColorStopPositions: [HS, $r],
      inset: N(),
      margin: N(),
      opacity: B(),
      padding: M(),
      saturate: B(),
      scale: B(),
      sepia: z(),
      skew: B(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", xt]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Vr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...F(), xt]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ni, xt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: N()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", xt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ni, xt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [oi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ni, xt]
        }, xt]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [oi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ni, xt]
        }, xt]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", xt]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", xt]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...L()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...L(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...L(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [C]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [C]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xt, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [xt, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [xt, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Vr]
        }, Vr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [xt, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [xt, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [xt, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [xt, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Vr, $r]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [oi]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", xt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", po, qc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Mr, xt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", xt]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", xt]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Mr, $r]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Mr, xt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xt]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", xt]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...F(), XS]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", US]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, KS]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: $()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...$()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Mr, xt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Mr, $r]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: O()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Mr, $r]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Vr, ZS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [oi]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...V(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Vr, xt]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", xt]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: B()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", xt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: B()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", xt]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ni, xt]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", xt]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xt]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", xt]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Mr, $r, qc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Zv = /* @__PURE__ */ FS(eC), hf = "data-scena-element-id";
function Jv(t) {
  return t.contentEditable === "inherit" ? Jv(t.parentElement) : t.contentEditable === "true" ? t : null;
}
function Qv(t) {
  return t.getAttribute(hf);
}
function Ur(...t) {
  return Zv(Vi(t));
}
class rC extends df {
  constructor(e) {
    super({
      createAuto: !0,
      useBeforeRender: !0
    }), this.memory = e, this.selectedTargets = [];
  }
  setSelectedTargets(e) {
    this.selectedTargets = e;
  }
  getSelectedTargets() {
    return this.selectedTargets;
  }
  getSelectedFrames() {
    return this.getSelectedTargets().map(
      (e) => this.getFrame(e)
    );
  }
  renderFrames() {
    this.getSelectedTargets().forEach((e) => {
      this.render(e);
    });
  }
  setOrders(e, r) {
    return this.setValue((n) => {
      n.setOrders(e, r);
    });
  }
  setProperty(e, r) {
    return this.setValue((n) => {
      n.set(...e, r);
    });
  }
  removeProperties(...e) {
    return this.setValue((r, n) => {
      e.forEach((o) => {
        r.remove(o), n.style.removeProperty(o);
      });
    });
  }
  getProperties(e, r) {
    const n = this.getSelectedFrames(), o = this.memory;
    return n.length ? e.map((i, a) => n.map((c) => c.get(...i)).filter((c) => c)[0] || r[a]) : e.map(
      (i, a) => o.get(i.join("///")) || r[a]
    );
  }
  setValue(e) {
    const n = this.getSelectedTargets().map((o) => {
      const i = this.getFrame(o), a = i?.getOrderObject(), s = i?.get();
      e(i, o);
      const c = i?.get(), l = i?.getOrderObject();
      return { id: Qv(o), prev: s, prevOrders: a, next: c, nextOrders: l };
    });
    return this.renderFrames(), n;
  }
}
const qs = Ir(
  lv(
    (t, e) => ({
      // 初始状态
      activePanelId: null,
      selectedNodesByPage: {},
      // 设置当前活动面板
      setActivePanel: (r) => t({ activePanelId: r }),
      // 节点选择相关方法
      setSelectedNodes: (r, n) => t((o) => ({
        selectedNodesByPage: {
          ...o.selectedNodesByPage,
          [r]: n
        }
      })),
      addSelectedNode: (r, n) => t((o) => {
        const i = o.selectedNodesByPage[r] || [];
        return i.includes(n) ? o : {
          selectedNodesByPage: {
            ...o.selectedNodesByPage,
            [r]: [...i, n]
          }
        };
      }),
      removeSelectedNode: (r, n) => t((o) => {
        const i = o.selectedNodesByPage[r] || [];
        return {
          selectedNodesByPage: {
            ...o.selectedNodesByPage,
            [r]: i.filter((a) => a !== n)
          }
        };
      }),
      clearSelectedNodes: (r) => t((n) => ({
        selectedNodesByPage: {
          ...n.selectedNodesByPage,
          [r]: []
        }
      })),
      clearAllSelectedNodes: () => t({ selectedNodesByPage: {} }),
      getSelectedNodes: (r) => e().selectedNodesByPage[r] || [],
      getCurrentSelection: () => {
        const r = Re.getState(), n = It.getState(), { selectedTargets: o } = r, i = n.json.docs[0];
        if (o.length === 0 || !i)
          return {
            selectedDoc: i,
            selectedNodes: []
          };
        const a = o.map((s) => n.getNode(i.id, s)).filter(Boolean);
        return {
          selectedDoc: i,
          selectedNodes: a
        };
      }
    }),
    {
      name: "veltix-editor",
      storage: Hu(() => localStorage),
      partialize: (t) => ({
        activePanelId: t.activePanelId
      })
    }
  )
);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nC = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oC = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Rp = (t) => {
  const e = oC(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, tg = (...t) => t.filter((e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim(), iC = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var aC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sC = $u(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => On(
    "svg",
    {
      ref: c,
      ...aC,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: n ? Number(r) * 24 / Number(e) : r,
      className: tg("lucide", o),
      ...!i && !iC(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([l, u]) => On(l, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = (t, e) => {
  const r = $u(
    ({ className: n, ...o }, i) => On(sC, {
      ref: i,
      iconNode: e,
      className: tg(
        `lucide-${nC(Rp(t))}`,
        `lucide-${t}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = Rp(t), r;
};
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cC = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], lC = gt("chart-line", cC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uC = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], vf = gt("check", uC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fC = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], gf = gt("chevron-down", fC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dC = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], pC = gt("chevron-left", dC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hC = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], eg = gt("chevron-right", hC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vC = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], rg = gt("chevron-up", vC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gC = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], mC = gt("circle-alert", gC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yC = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], ng = gt("circle", yC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], og = gt("cloud", xC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], wC = gt("copy", bC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SC = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], CC = gt("database", SC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EC = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], _C = gt("ellipsis", EC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TC = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], ig = gt("eye-off", TC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RC = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ag = gt("eye", RC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DC = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
], Dp = gt("file-spreadsheet", DC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MC = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], PC = gt("globe", MC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OC = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], Mp = gt("grid-3x3", OC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NC = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], kC = gt("grip-vertical", NC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AC = [
  ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
  ["path", { d: "m18 15 4-4", key: "16gjal" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
      key: "b7pghm"
    }
  ]
], jC = gt("hammer", AC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IC = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
], FC = gt("hand", IC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BC = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], sg = gt("image", BC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LC = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], cg = gt("layers", LC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zC = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
], GC = gt("layout-grid", zC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $C = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], VC = gt("link", $C);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WC = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], HC = gt("loader-circle", WC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YC = [
  [
    "path",
    {
      d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
      key: "1i3lhw"
    }
  ],
  ["path", { d: "m5 8 4 4", key: "j6kj7e" }],
  ["path", { d: "m12 15 4 4", key: "lnac28" }]
], UC = gt("magnet", YC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XC = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], qC = gt("moon", XC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KC = [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
], ZC = gt("mouse-pointer-2", KC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JC = [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
], QC = gt("move", JC);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], eE = gt("package", tE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], lg = gt("palette", rE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ms = gt("plus", nE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], iE = gt("search", oE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], sE = gt("settings", aE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cE = [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
], lE = gt("shapes", cE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], Pp = gt("sparkles", uE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], dE = gt("square", fE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Op = gt("sun", pE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hE = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], vE = gt("trash-2", hE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gE = [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
], mE = gt("triangle", gE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yE = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], xE = gt("type", yE);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Np = gt("zap", bE);
function kp(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Ks(...t) {
  return (e) => {
    let r = !1;
    const n = t.map((o) => {
      const i = kp(o, e);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          typeof i == "function" ? i() : kp(t[o], null);
        }
      };
  };
}
function wt(...t) {
  return S.useCallback(Ks(...t), t);
}
// @__NO_SIDE_EFFECTS__
function Co(t) {
  const e = /* @__PURE__ */ SE(t), r = S.forwardRef((n, o) => {
    const { children: i, ...a } = n, s = S.Children.toArray(i), c = s.find(EE);
    if (c) {
      const l = c.props.children, u = s.map((f) => f === c ? S.Children.count(l) > 1 ? S.Children.only(null) : S.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ v.jsx(e, { ...a, ref: o, children: S.isValidElement(l) ? S.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ v.jsx(e, { ...a, ref: o, children: i });
  });
  return r.displayName = `${t}.Slot`, r;
}
var wE = /* @__PURE__ */ Co("Slot");
// @__NO_SIDE_EFFECTS__
function SE(t) {
  const e = S.forwardRef((r, n) => {
    const { children: o, ...i } = r;
    if (S.isValidElement(o)) {
      const a = TE(o), s = _E(i, o.props);
      return o.type !== S.Fragment && (s.ref = n ? Ks(n, a) : a), S.cloneElement(o, s);
    }
    return S.Children.count(o) > 1 ? S.Children.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var ug = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function CE(t) {
  const e = ({ children: r }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: r });
  return e.displayName = `${t}.Slottable`, e.__radixId = ug, e;
}
function EE(t) {
  return S.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === ug;
}
function _E(t, e) {
  const r = { ...e };
  for (const n in e) {
    const o = t[n], i = e[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
      const c = i(...s);
      return o(...s), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...i } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function TE(t) {
  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
const Ap = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, jp = Vi, mf = (t, e) => (r) => {
  var n;
  if (e?.variants == null) return jp(t, r?.class, r?.className);
  const { variants: o, defaultVariants: i } = e, a = Object.keys(o).map((l) => {
    const u = r?.[l], f = i?.[l];
    if (u === null) return null;
    const d = Ap(u) || Ap(f);
    return o[l][d];
  }), s = r && Object.entries(r).reduce((l, u) => {
    let [f, d] = u;
    return d === void 0 || (l[f] = d), l;
  }, {}), c = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: f, className: d, ...p } = u;
    return Object.entries(p).every((g) => {
      let [h, m] = g;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...s
      }[h]) : {
        ...i,
        ...s
      }[h] === m;
    }) ? [
      ...l,
      f,
      d
    ] : l;
  }, []);
  return jp(t, a, c, r?.class, r?.className);
};
function bt(...t) {
  return Zv(Vi(t));
}
const RE = mf(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Me({
  className: t,
  variant: e,
  size: r,
  asChild: n = !1,
  ...o
}) {
  const i = n ? wE : "button";
  return /* @__PURE__ */ v.jsx(
    i,
    {
      "data-slot": "button",
      className: bt(RE({ variant: e, size: r, className: t })),
      ...o
    }
  );
}
const fg = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  "textarea",
  {
    className: bt(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: r,
    ...e
  }
));
fg.displayName = "Textarea";
var Sr = /* @__PURE__ */ ((t) => (t.Sidebar = "sidebar", t.Panel = "panel", t.AuxiliaryBar = "auxiliarybar", t))(Sr || {});
const Zs = Ir((t, e) => ({
  containers: {},
  views: {
    sidebar: [],
    panel: [],
    auxiliarybar: []
  },
  registerViewContainer: (r, n) => t((o) => o.views[n] && o.views[n].some((i) => i.id === r.id) ? o : {
    views: {
      ...o.views,
      [n]: [...o.views[n], r]
    }
  }),
  getViewsByLocation: (r) => e().views[r] ?? [],
  getViewContainer: (r) => e().views.sidebar.find((i) => i.id === r)
}));
function dn(t, e) {
  Zs.getState().registerViewContainer(t, e);
}
const re = S.forwardRef(
  ({ className: t, type: e, ...r }, n) => /* @__PURE__ */ v.jsx(
    "input",
    {
      type: e,
      className: bt(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t
      ),
      ref: n,
      ...r
    }
  )
);
re.displayName = "Input";
var DE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ut = DE.reduce((t, e) => {
  const r = /* @__PURE__ */ Co(`Primitive.${e}`), n = S.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? r : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(c, { ...s, ref: i });
  });
  return n.displayName = `Primitive.${e}`, { ...t, [e]: n };
}, {});
function dg(t, e) {
  t && zs.flushSync(() => t.dispatchEvent(e));
}
var ME = "Label", pg = S.forwardRef((t, e) => /* @__PURE__ */ v.jsx(
  ut.label,
  {
    ...t,
    ref: e,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (t.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
pg.displayName = ME;
var hg = pg;
const PE = mf(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Jt = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  hg,
  {
    ref: r,
    className: bt(PE(), t),
    ...e
  }
));
Jt.displayName = hg.displayName;
function rt(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (t?.(o), r === !1 || !o.defaultPrevented)
      return e?.(o);
  };
}
function Ye(t, e = []) {
  let r = [];
  function n(i, a) {
    const s = S.createContext(a), c = r.length;
    r = [...r, a];
    const l = (f) => {
      const { scope: d, children: p, ...g } = f, h = d?.[t]?.[c] || s, m = S.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ v.jsx(h.Provider, { value: m, children: p });
    };
    l.displayName = i + "Provider";
    function u(f, d) {
      const p = d?.[t]?.[c] || s, g = S.useContext(p);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [l, u];
  }
  const o = () => {
    const i = r.map((a) => S.createContext(a));
    return function(s) {
      const c = s?.[t] || i;
      return S.useMemo(
        () => ({ [`__scope${t}`]: { ...s, [t]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = t, [n, OE(o, ...e)];
}
function OE(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const n = t.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = n.reduce((s, { useScope: c, scopeName: l }) => {
        const f = c(i)[`__scope${l}`];
        return { ...s, ...f };
      }, {});
      return S.useMemo(() => ({ [`__scope${e.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = e.scopeName, r;
}
function Js(t) {
  const e = t + "CollectionProvider", [r, n] = Ye(e), [o, i] = r(
    e,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: m, children: y } = h, x = ee.useRef(null), b = ee.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(o, { scope: m, itemMap: b, collectionRef: x, children: y });
  };
  a.displayName = e;
  const s = t + "CollectionSlot", c = /* @__PURE__ */ Co(s), l = ee.forwardRef(
    (h, m) => {
      const { scope: y, children: x } = h, b = i(s, y), w = wt(m, b.collectionRef);
      return /* @__PURE__ */ v.jsx(c, { ref: w, children: x });
    }
  );
  l.displayName = s;
  const u = t + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ Co(u), p = ee.forwardRef(
    (h, m) => {
      const { scope: y, children: x, ...b } = h, w = ee.useRef(null), _ = wt(m, w), E = i(u, y);
      return ee.useEffect(() => (E.itemMap.set(w, { ref: w, ...b }), () => void E.itemMap.delete(w))), /* @__PURE__ */ v.jsx(d, { [f]: "", ref: _, children: x });
    }
  );
  p.displayName = u;
  function g(h) {
    const m = i(t + "CollectionConsumer", h);
    return ee.useCallback(() => {
      const x = m.collectionRef.current;
      if (!x) return [];
      const b = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(m.itemMap.values()).sort(
        (E, C) => b.indexOf(E.ref.current) - b.indexOf(C.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    g,
    n
  ];
}
var ae = globalThis?.document ? S.useLayoutEffect : () => {
}, NE = S[" useId ".trim().toString()] || (() => {
}), kE = 0;
function Nr(t) {
  const [e, r] = S.useState(NE());
  return ae(() => {
    r((n) => n ?? String(kE++));
  }, [t]), e ? `radix-${e}` : "";
}
function de(t) {
  const e = S.useRef(t);
  return S.useEffect(() => {
    e.current = t;
  }), S.useMemo(() => (...r) => e.current?.(...r), []);
}
var AE = S[" useInsertionEffect ".trim().toString()] || ae;
function kr({
  prop: t,
  defaultProp: e,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, i, a] = jE({
    defaultProp: e,
    onChange: r
  }), s = t !== void 0, c = s ? t : o;
  {
    const u = S.useRef(t !== void 0);
    S.useEffect(() => {
      const f = u.current;
      f !== s && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, n]);
  }
  const l = S.useCallback(
    (u) => {
      if (s) {
        const f = IE(u) ? u(t) : u;
        f !== t && a.current?.(f);
      } else
        i(u);
    },
    [s, t, i, a]
  );
  return [c, l];
}
function jE({
  defaultProp: t,
  onChange: e
}) {
  const [r, n] = S.useState(t), o = S.useRef(r), i = S.useRef(e);
  return AE(() => {
    i.current = e;
  }, [e]), S.useEffect(() => {
    o.current !== r && (i.current?.(r), o.current = r);
  }, [r, o]), [r, n, i];
}
function IE(t) {
  return typeof t == "function";
}
var FE = S.createContext(void 0);
function Bo(t) {
  const e = S.useContext(FE);
  return t || e || "ltr";
}
var Kc = "rovingFocusGroup.onEntryFocus", BE = { bubbles: !1, cancelable: !0 }, aa = "RovingFocusGroup", [Ll, vg, LE] = Js(aa), [zE, Qs] = Ye(
  aa,
  [LE]
), [GE, $E] = zE(aa), gg = S.forwardRef(
  (t, e) => /* @__PURE__ */ v.jsx(Ll.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(Ll.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(VE, { ...t, ref: e }) }) })
);
gg.displayName = aa;
var VE = S.forwardRef((t, e) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = t, d = S.useRef(null), p = wt(e, d), g = Bo(i), [h, m] = kr({
    prop: a,
    defaultProp: s ?? null,
    onChange: c,
    caller: aa
  }), [y, x] = S.useState(!1), b = de(l), w = vg(r), _ = S.useRef(!1), [E, C] = S.useState(0);
  return S.useEffect(() => {
    const T = d.current;
    if (T)
      return T.addEventListener(Kc, b), () => T.removeEventListener(Kc, b);
  }, [b]), /* @__PURE__ */ v.jsx(
    GE,
    {
      scope: r,
      orientation: n,
      dir: g,
      loop: o,
      currentTabStopId: h,
      onItemFocus: S.useCallback(
        (T) => m(T),
        [m]
      ),
      onItemShiftTab: S.useCallback(() => x(!0), []),
      onFocusableItemAdd: S.useCallback(
        () => C((T) => T + 1),
        []
      ),
      onFocusableItemRemove: S.useCallback(
        () => C((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ v.jsx(
        ut.div,
        {
          tabIndex: y || E === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: p,
          style: { outline: "none", ...t.style },
          onMouseDown: rt(t.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: rt(t.onFocus, (T) => {
            const R = !_.current;
            if (T.target === T.currentTarget && R && !y) {
              const D = new CustomEvent(Kc, BE);
              if (T.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const N = w().filter(($) => $.focusable), M = N.find(($) => $.active), O = N.find(($) => $.id === h), F = [M, O, ...N].filter(
                  Boolean
                ).map(($) => $.ref.current);
                xg(F, u);
              }
            }
            _.current = !1;
          }),
          onBlur: rt(t.onBlur, () => x(!1))
        }
      )
    }
  );
}), mg = "RovingFocusGroupItem", yg = S.forwardRef(
  (t, e) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = t, c = Nr(), l = i || c, u = $E(mg, r), f = u.currentTabStopId === l, d = vg(r), { onFocusableItemAdd: p, onFocusableItemRemove: g, currentTabStopId: h } = u;
    return S.useEffect(() => {
      if (n)
        return p(), () => g();
    }, [n, p, g]), /* @__PURE__ */ v.jsx(
      Ll.ItemSlot,
      {
        scope: r,
        id: l,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ v.jsx(
          ut.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: e,
            onMouseDown: rt(t.onMouseDown, (m) => {
              n ? u.onItemFocus(l) : m.preventDefault();
            }),
            onFocus: rt(t.onFocus, () => u.onItemFocus(l)),
            onKeyDown: rt(t.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const y = YE(m, u.orientation, u.dir);
              if (y !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let b = d().filter((w) => w.focusable).map((w) => w.ref.current);
                if (y === "last") b.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && b.reverse();
                  const w = b.indexOf(m.currentTarget);
                  b = u.loop ? UE(b, w + 1) : b.slice(w + 1);
                }
                setTimeout(() => xg(b));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
yg.displayName = mg;
var WE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function HE(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
function YE(t, e, r) {
  const n = HE(t.key, r);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return WE[n];
}
function xg(t, e = !1) {
  const r = document.activeElement;
  for (const n of t)
    if (n === r || (n.focus({ preventScroll: e }), document.activeElement !== r)) return;
}
function UE(t, e) {
  return t.map((r, n) => t[(e + n) % t.length]);
}
var bg = gg, wg = yg;
function XE(t, e) {
  return S.useReducer((r, n) => e[r][n] ?? r, t);
}
var Ne = (t) => {
  const { present: e, children: r } = t, n = qE(e), o = typeof r == "function" ? r({ present: n.isPresent }) : S.Children.only(r), i = wt(n.ref, KE(o));
  return typeof r == "function" || n.isPresent ? S.cloneElement(o, { ref: i }) : null;
};
Ne.displayName = "Presence";
function qE(t) {
  const [e, r] = S.useState(), n = S.useRef(null), o = S.useRef(t), i = S.useRef("none"), a = t ? "mounted" : "unmounted", [s, c] = XE(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return S.useEffect(() => {
    const l = Aa(n.current);
    i.current = s === "mounted" ? l : "none";
  }, [s]), ae(() => {
    const l = n.current, u = o.current;
    if (u !== t) {
      const d = i.current, p = Aa(l);
      t ? c("MOUNT") : p === "none" || l?.display === "none" ? c("UNMOUNT") : c(u && d !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = t;
    }
  }, [t, c]), ae(() => {
    if (e) {
      let l;
      const u = e.ownerDocument.defaultView ?? window, f = (p) => {
        const h = Aa(n.current).includes(p.animationName);
        if (p.target === e && h && (c("ANIMATION_END"), !o.current)) {
          const m = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = m);
          });
        }
      }, d = (p) => {
        p.target === e && (i.current = Aa(n.current));
      };
      return e.addEventListener("animationstart", d), e.addEventListener("animationcancel", f), e.addEventListener("animationend", f), () => {
        u.clearTimeout(l), e.removeEventListener("animationstart", d), e.removeEventListener("animationcancel", f), e.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [e, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: S.useCallback((l) => {
      n.current = l ? getComputedStyle(l) : null, r(l);
    }, [])
  };
}
function Aa(t) {
  return t?.animationName || "none";
}
function KE(t) {
  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
var tc = "Tabs", [ZE, zj] = Ye(tc, [
  Qs
]), Sg = Qs(), [JE, yf] = ZE(tc), Cg = S.forwardRef(
  (t, e) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: o,
      defaultValue: i,
      orientation: a = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...l
    } = t, u = Bo(s), [f, d] = kr({
      prop: n,
      onChange: o,
      defaultProp: i ?? "",
      caller: tc
    });
    return /* @__PURE__ */ v.jsx(
      JE,
      {
        scope: r,
        baseId: Nr(),
        value: f,
        onValueChange: d,
        orientation: a,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ v.jsx(
          ut.div,
          {
            dir: u,
            "data-orientation": a,
            ...l,
            ref: e
          }
        )
      }
    );
  }
);
Cg.displayName = tc;
var Eg = "TabsList", _g = S.forwardRef(
  (t, e) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = t, i = yf(Eg, r), a = Sg(r);
    return /* @__PURE__ */ v.jsx(
      bg,
      {
        asChild: !0,
        ...a,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ v.jsx(
          ut.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...o,
            ref: e
          }
        )
      }
    );
  }
);
_g.displayName = Eg;
var Tg = "TabsTrigger", Rg = S.forwardRef(
  (t, e) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...i } = t, a = yf(Tg, r), s = Sg(r), c = Pg(a.baseId, n), l = Og(a.baseId, n), u = n === a.value;
    return /* @__PURE__ */ v.jsx(
      wg,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ v.jsx(
          ut.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": l,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...i,
            ref: e,
            onMouseDown: rt(t.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(n) : f.preventDefault();
            }),
            onKeyDown: rt(t.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && a.onValueChange(n);
            }),
            onFocus: rt(t.onFocus, () => {
              const f = a.activationMode !== "manual";
              !u && !o && f && a.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
Rg.displayName = Tg;
var Dg = "TabsContent", Mg = S.forwardRef(
  (t, e) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: i, ...a } = t, s = yf(Dg, r), c = Pg(s.baseId, n), l = Og(s.baseId, n), u = n === s.value, f = S.useRef(u);
    return S.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ v.jsx(Ne, { present: o || u, children: ({ present: d }) => /* @__PURE__ */ v.jsx(
      ut.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !d,
        id: l,
        tabIndex: 0,
        ...a,
        ref: e,
        style: {
          ...t.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: d && i
      }
    ) });
  }
);
Mg.displayName = Dg;
function Pg(t, e) {
  return `${t}-trigger-${e}`;
}
function Og(t, e) {
  return `${t}-content-${e}`;
}
var QE = Cg, Ng = _g, kg = Rg, Ag = Mg;
const jg = QE, xf = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  Ng,
  {
    ref: r,
    className: bt(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
xf.displayName = Ng.displayName;
const Xr = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  kg,
  {
    ref: r,
    className: bt(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      t
    ),
    ...e
  }
));
Xr.displayName = kg.displayName;
const qr = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  Ag,
  {
    ref: r,
    className: bt(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
qr.displayName = Ag.displayName;
function Wi(t, [e, r]) {
  return Math.min(r, Math.max(e, t));
}
function t_(t, e = globalThis?.document) {
  const r = de(t);
  S.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return e.addEventListener("keydown", n, { capture: !0 }), () => e.removeEventListener("keydown", n, { capture: !0 });
  }, [r, e]);
}
var e_ = "DismissableLayer", zl = "dismissableLayer.update", r_ = "dismissableLayer.pointerDownOutside", n_ = "dismissableLayer.focusOutside", Ip, Ig = S.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ec = S.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = t, l = S.useContext(Ig), [u, f] = S.useState(null), d = u?.ownerDocument ?? globalThis?.document, [, p] = S.useState({}), g = wt(e, (C) => f(C)), h = Array.from(l.layers), [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(m), x = u ? h.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, w = x >= y, _ = a_((C) => {
      const T = C.target, R = [...l.branches].some((D) => D.contains(T));
      !w || R || (o?.(C), a?.(C), C.defaultPrevented || s?.());
    }, d), E = s_((C) => {
      const T = C.target;
      [...l.branches].some((D) => D.contains(T)) || (i?.(C), a?.(C), C.defaultPrevented || s?.());
    }, d);
    return t_((C) => {
      x === l.layers.size - 1 && (n?.(C), !C.defaultPrevented && s && (C.preventDefault(), s()));
    }, d), S.useEffect(() => {
      if (u)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ip = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Fp(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Ip);
        };
    }, [u, d, r, l]), S.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Fp());
    }, [u, l]), S.useEffect(() => {
      const C = () => p({});
      return document.addEventListener(zl, C), () => document.removeEventListener(zl, C);
    }, []), /* @__PURE__ */ v.jsx(
      ut.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: b ? w ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: rt(t.onFocusCapture, E.onFocusCapture),
        onBlurCapture: rt(t.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: rt(
          t.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
ec.displayName = e_;
var o_ = "DismissableLayerBranch", i_ = S.forwardRef((t, e) => {
  const r = S.useContext(Ig), n = S.useRef(null), o = wt(e, n);
  return S.useEffect(() => {
    const i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ v.jsx(ut.div, { ...t, ref: o });
});
i_.displayName = o_;
function a_(t, e = globalThis?.document) {
  const r = de(t), n = S.useRef(!1), o = S.useRef(() => {
  });
  return S.useEffect(() => {
    const i = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Fg(
            r_,
            r,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (e.removeEventListener("click", o.current), o.current = c, e.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        e.removeEventListener("click", o.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), e.removeEventListener("pointerdown", i), e.removeEventListener("click", o.current);
    };
  }, [e, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function s_(t, e = globalThis?.document) {
  const r = de(t), n = S.useRef(!1);
  return S.useEffect(() => {
    const o = (i) => {
      i.target && !n.current && Fg(n_, r, { originalEvent: i }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", o), () => e.removeEventListener("focusin", o);
  }, [e, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Fp() {
  const t = new CustomEvent(zl);
  document.dispatchEvent(t);
}
function Fg(t, e, r, { discrete: n }) {
  const o = r.originalEvent.target, i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  e && o.addEventListener(t, e, { once: !0 }), n ? dg(o, i) : o.dispatchEvent(i);
}
var Zc = 0;
function Bg() {
  S.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", t[0] ?? Bp()), document.body.insertAdjacentElement("beforeend", t[1] ?? Bp()), Zc++, () => {
      Zc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Zc--;
    };
  }, []);
}
function Bp() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
var Jc = "focusScope.autoFocusOnMount", Qc = "focusScope.autoFocusOnUnmount", Lp = { bubbles: !1, cancelable: !0 }, c_ = "FocusScope", bf = S.forwardRef((t, e) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = t, [s, c] = S.useState(null), l = de(o), u = de(i), f = S.useRef(null), d = wt(e, (h) => c(h)), p = S.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  S.useEffect(() => {
    if (n) {
      let h = function(b) {
        if (p.paused || !s) return;
        const w = b.target;
        s.contains(w) ? f.current = w : Yr(f.current, { select: !0 });
      }, m = function(b) {
        if (p.paused || !s) return;
        const w = b.relatedTarget;
        w !== null && (s.contains(w) || Yr(f.current, { select: !0 }));
      }, y = function(b) {
        if (document.activeElement === document.body)
          for (const _ of b)
            _.removedNodes.length > 0 && Yr(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", m);
      const x = new MutationObserver(y);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", m), x.disconnect();
      };
    }
  }, [n, s, p.paused]), S.useEffect(() => {
    if (s) {
      Gp.add(p);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const y = new CustomEvent(Jc, Lp);
        s.addEventListener(Jc, l), s.dispatchEvent(y), y.defaultPrevented || (l_(h_(Lg(s)), { select: !0 }), document.activeElement === h && Yr(s));
      }
      return () => {
        s.removeEventListener(Jc, l), setTimeout(() => {
          const y = new CustomEvent(Qc, Lp);
          s.addEventListener(Qc, u), s.dispatchEvent(y), y.defaultPrevented || Yr(h ?? document.body, { select: !0 }), s.removeEventListener(Qc, u), Gp.remove(p);
        }, 0);
      };
    }
  }, [s, l, u, p]);
  const g = S.useCallback(
    (h) => {
      if (!r && !n || p.paused) return;
      const m = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (m && y) {
        const x = h.currentTarget, [b, w] = u_(x);
        b && w ? !h.shiftKey && y === w ? (h.preventDefault(), r && Yr(b, { select: !0 })) : h.shiftKey && y === b && (h.preventDefault(), r && Yr(w, { select: !0 })) : y === x && h.preventDefault();
      }
    },
    [r, n, p.paused]
  );
  return /* @__PURE__ */ v.jsx(ut.div, { tabIndex: -1, ...a, ref: d, onKeyDown: g });
});
bf.displayName = c_;
function l_(t, { select: e = !1 } = {}) {
  const r = document.activeElement;
  for (const n of t)
    if (Yr(n, { select: e }), document.activeElement !== r) return;
}
function u_(t) {
  const e = Lg(t), r = zp(e, t), n = zp(e.reverse(), t);
  return [r, n];
}
function Lg(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function zp(t, e) {
  for (const r of t)
    if (!f_(r, { upTo: e })) return r;
}
function f_(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function d_(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Yr(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== r && d_(t) && e && t.select();
  }
}
var Gp = p_();
function p_() {
  let t = [];
  return {
    add(e) {
      const r = t[0];
      e !== r && r?.pause(), t = $p(t, e), t.unshift(e);
    },
    remove(e) {
      t = $p(t, e), t[0]?.resume();
    }
  };
}
function $p(t, e) {
  const r = [...t], n = r.indexOf(e);
  return n !== -1 && r.splice(n, 1), r;
}
function h_(t) {
  return t.filter((e) => e.tagName !== "A");
}
const v_ = ["top", "right", "bottom", "left"], nn = Math.min, Te = Math.max, ys = Math.round, ja = Math.floor, hr = (t) => ({
  x: t,
  y: t
}), g_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, m_ = {
  start: "end",
  end: "start"
};
function Gl(t, e, r) {
  return Te(t, nn(e, r));
}
function Ar(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function jr(t) {
  return t.split("-")[0];
}
function Lo(t) {
  return t.split("-")[1];
}
function wf(t) {
  return t === "x" ? "y" : "x";
}
function Sf(t) {
  return t === "y" ? "height" : "width";
}
function fr(t) {
  return ["top", "bottom"].includes(jr(t)) ? "y" : "x";
}
function Cf(t) {
  return wf(fr(t));
}
function y_(t, e, r) {
  r === void 0 && (r = !1);
  const n = Lo(t), o = Cf(t), i = Sf(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (a = xs(a)), [a, xs(a)];
}
function x_(t) {
  const e = xs(t);
  return [$l(t), e, $l(e)];
}
function $l(t) {
  return t.replace(/start|end/g, (e) => m_[e]);
}
function b_(t, e, r) {
  const n = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return r ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? i : a;
    default:
      return [];
  }
}
function w_(t, e, r, n) {
  const o = Lo(t);
  let i = b_(jr(t), r === "start", n);
  return o && (i = i.map((a) => a + "-" + o), e && (i = i.concat(i.map($l)))), i;
}
function xs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => g_[e]);
}
function S_(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function zg(t) {
  return typeof t != "number" ? S_(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function bs(t) {
  const {
    x: e,
    y: r,
    width: n,
    height: o
  } = t;
  return {
    width: n,
    height: o,
    top: r,
    left: e,
    right: e + n,
    bottom: r + o,
    x: e,
    y: r
  };
}
function Vp(t, e, r) {
  let {
    reference: n,
    floating: o
  } = t;
  const i = fr(e), a = Cf(e), s = Sf(a), c = jr(e), l = i === "y", u = n.x + n.width / 2 - o.width / 2, f = n.y + n.height / 2 - o.height / 2, d = n[s] / 2 - o[s] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: n.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (Lo(e)) {
    case "start":
      p[a] -= d * (r && l ? -1 : 1);
      break;
    case "end":
      p[a] += d * (r && l ? -1 : 1);
      break;
  }
  return p;
}
const C_ = async (t, e, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = r, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(e));
  let l = await a.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: f
  } = Vp(l, n, c), d = n, p = {}, g = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: m,
      fn: y
    } = s[h], {
      x,
      y: b,
      data: w,
      reset: _
    } = await y({
      x: u,
      y: f,
      initialPlacement: n,
      placement: d,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: a,
      elements: {
        reference: t,
        floating: e
      }
    });
    u = x ?? u, f = b ?? f, p = {
      ...p,
      [m]: {
        ...p[m],
        ...w
      }
    }, _ && g <= 50 && (g++, typeof _ == "object" && (_.placement && (d = _.placement), _.rects && (l = _.rects === !0 ? await a.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : _.rects), {
      x: u,
      y: f
    } = Vp(l, d, c)), h = -1);
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: p
  };
};
async function Hi(t, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: p = 0
  } = Ar(e, t), g = zg(p), m = s[d ? f === "floating" ? "reference" : "floating" : f], y = bs(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(m))) == null || r ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = f === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), w = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = bs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: b,
    strategy: c
  }) : x);
  return {
    top: (y.top - _.top + g.top) / w.y,
    bottom: (_.bottom - y.bottom + g.bottom) / w.y,
    left: (y.left - _.left + g.left) / w.x,
    right: (_.right - y.right + g.right) / w.x
  };
}
const E_ = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = e, {
      element: l,
      padding: u = 0
    } = Ar(t, e) || {};
    if (l == null)
      return {};
    const f = zg(u), d = {
      x: r,
      y: n
    }, p = Cf(o), g = Sf(p), h = await a.getDimensions(l), m = p === "y", y = m ? "top" : "left", x = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", w = i.reference[g] + i.reference[p] - d[p] - i.floating[g], _ = d[p] - i.reference[p], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let C = E ? E[b] : 0;
    (!C || !await (a.isElement == null ? void 0 : a.isElement(E))) && (C = s.floating[b] || i.floating[g]);
    const T = w / 2 - _ / 2, R = C / 2 - h[g] / 2 - 1, D = nn(f[y], R), N = nn(f[x], R), M = D, O = C - h[g] - N, k = C / 2 - h[g] / 2 + T, F = Gl(M, k, O), $ = !c.arrow && Lo(o) != null && k !== F && i.reference[g] / 2 - (k < M ? D : N) - h[g] / 2 < 0, V = $ ? k < M ? k - M : k - O : 0;
    return {
      [p]: d[p] + V,
      data: {
        [p]: F,
        centerOffset: k - F - V,
        ...$ && {
          alignmentOffset: V
        }
      },
      reset: $
    };
  }
}), __ = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var r, n;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: l
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...m
      } = Ar(t, e);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const y = jr(o), x = fr(s), b = jr(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = d || (b || !h ? [xs(s)] : x_(s)), E = g !== "none";
      !d && E && _.push(...w_(s, h, g, w));
      const C = [s, ..._], T = await Hi(e, m), R = [];
      let D = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && R.push(T[y]), f) {
        const k = y_(o, a, w);
        R.push(T[k[0]], T[k[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: R
      }], !R.every((k) => k <= 0)) {
        var N, M;
        const k = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, F = C[k];
        if (F && (!(f === "alignment" ? x !== fr(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((L) => L.overflows[0] > 0 && fr(L.placement) === x)))
          return {
            data: {
              index: k,
              overflows: D
            },
            reset: {
              placement: F
            }
          };
        let $ = (M = D.filter((V) => V.overflows[0] <= 0).sort((V, L) => V.overflows[1] - L.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!$)
          switch (p) {
            case "bestFit": {
              var O;
              const V = (O = D.filter((L) => {
                if (E) {
                  const z = fr(L.placement);
                  return z === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((z) => z > 0).reduce((z, j) => z + j, 0)]).sort((L, z) => L[1] - z[1])[0]) == null ? void 0 : O[0];
              V && ($ = V);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function Wp(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Hp(t) {
  return v_.some((e) => t[e] >= 0);
}
const T_ = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: r
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = Ar(t, e);
      switch (n) {
        case "referenceHidden": {
          const i = await Hi(e, {
            ...o,
            elementContext: "reference"
          }), a = Wp(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Hp(a)
            }
          };
        }
        case "escaped": {
          const i = await Hi(e, {
            ...o,
            altBoundary: !0
          }), a = Wp(i, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Hp(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function R_(t, e) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = t, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = jr(r), s = Lo(r), c = fr(r) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = i && c ? -1 : 1, f = Ar(e, t);
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof g == "number" && (p = s === "end" ? g * -1 : g), c ? {
    x: p * u,
    y: d * l
  } : {
    x: d * l,
    y: p * u
  };
}
const D_ = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var r, n;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = e, c = await R_(e, t);
      return a === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, M_ = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: n,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (m) => {
            let {
              x: y,
              y: x
            } = m;
            return {
              x: y,
              y: x
            };
          }
        },
        ...c
      } = Ar(t, e), l = {
        x: r,
        y: n
      }, u = await Hi(e, c), f = fr(jr(o)), d = wf(f);
      let p = l[d], g = l[f];
      if (i) {
        const m = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", x = p + u[m], b = p - u[y];
        p = Gl(x, p, b);
      }
      if (a) {
        const m = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", x = g + u[m], b = g - u[y];
        g = Gl(x, g, b);
      }
      const h = s.fn({
        ...e,
        [d]: p,
        [f]: g
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n,
          enabled: {
            [d]: i,
            [f]: a
          }
        }
      };
    }
  };
}, P_ = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: i,
        middlewareData: a
      } = e, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Ar(t, e), u = {
        x: r,
        y: n
      }, f = fr(o), d = wf(f);
      let p = u[d], g = u[f];
      const h = Ar(s, e), m = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const b = d === "y" ? "height" : "width", w = i.reference[d] - i.floating[b] + m.mainAxis, _ = i.reference[d] + i.reference[b] - m.mainAxis;
        p < w ? p = w : p > _ && (p = _);
      }
      if (l) {
        var y, x;
        const b = d === "y" ? "width" : "height", w = ["top", "left"].includes(jr(o)), _ = i.reference[f] - i.floating[b] + (w && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (w ? 0 : m.crossAxis), E = i.reference[f] + i.reference[b] + (w ? 0 : ((x = a.offset) == null ? void 0 : x[f]) || 0) - (w ? m.crossAxis : 0);
        g < _ ? g = _ : g > E && (g = E);
      }
      return {
        [d]: p,
        [f]: g
      };
    }
  };
}, O_ = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var r, n;
      const {
        placement: o,
        rects: i,
        platform: a,
        elements: s
      } = e, {
        apply: c = () => {
        },
        ...l
      } = Ar(t, e), u = await Hi(e, l), f = jr(o), d = Lo(o), p = fr(o) === "y", {
        width: g,
        height: h
      } = i.floating;
      let m, y;
      f === "top" || f === "bottom" ? (m = f, y = d === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, m = d === "end" ? "top" : "bottom");
      const x = h - u.top - u.bottom, b = g - u.left - u.right, w = nn(h - u[m], x), _ = nn(g - u[y], b), E = !e.middlewareData.shift;
      let C = w, T = _;
      if ((r = e.middlewareData.shift) != null && r.enabled.x && (T = b), (n = e.middlewareData.shift) != null && n.enabled.y && (C = x), E && !d) {
        const D = Te(u.left, 0), N = Te(u.right, 0), M = Te(u.top, 0), O = Te(u.bottom, 0);
        p ? T = g - 2 * (D !== 0 || N !== 0 ? D + N : Te(u.left, u.right)) : C = h - 2 * (M !== 0 || O !== 0 ? M + O : Te(u.top, u.bottom));
      }
      await c({
        ...e,
        availableWidth: T,
        availableHeight: C
      });
      const R = await a.getDimensions(s.floating);
      return g !== R.width || h !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function rc() {
  return typeof window < "u";
}
function zo(t) {
  return Gg(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Pe(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Cr(t) {
  var e;
  return (e = (Gg(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Gg(t) {
  return rc() ? t instanceof Node || t instanceof Pe(t).Node : !1;
}
function or(t) {
  return rc() ? t instanceof Element || t instanceof Pe(t).Element : !1;
}
function xr(t) {
  return rc() ? t instanceof HTMLElement || t instanceof Pe(t).HTMLElement : !1;
}
function Yp(t) {
  return !rc() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Pe(t).ShadowRoot;
}
function sa(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: n,
    display: o
  } = ir(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(o);
}
function N_(t) {
  return ["table", "td", "th"].includes(zo(t));
}
function nc(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ef(t) {
  const e = _f(), r = or(t) ? ir(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function k_(t) {
  let e = on(t);
  for (; xr(e) && !Eo(e); ) {
    if (Ef(e))
      return e;
    if (nc(e))
      return null;
    e = on(e);
  }
  return null;
}
function _f() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Eo(t) {
  return ["html", "body", "#document"].includes(zo(t));
}
function ir(t) {
  return Pe(t).getComputedStyle(t);
}
function oc(t) {
  return or(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function on(t) {
  if (zo(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Yp(t) && t.host || // Fallback.
    Cr(t)
  );
  return Yp(e) ? e.host : e;
}
function $g(t) {
  const e = on(t);
  return Eo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : xr(e) && sa(e) ? e : $g(e);
}
function Yi(t, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const o = $g(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), a = Pe(o);
  if (i) {
    const s = Vl(a);
    return e.concat(a, a.visualViewport || [], sa(o) ? o : [], s && r ? Yi(s) : []);
  }
  return e.concat(o, Yi(o, [], r));
}
function Vl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Vg(t) {
  const e = ir(t);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = xr(t), i = o ? t.offsetWidth : r, a = o ? t.offsetHeight : n, s = ys(r) !== i || ys(n) !== a;
  return s && (r = i, n = a), {
    width: r,
    height: n,
    $: s
  };
}
function Tf(t) {
  return or(t) ? t : t.contextElement;
}
function ho(t) {
  const e = Tf(t);
  if (!xr(e))
    return hr(1);
  const r = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Vg(e);
  let a = (i ? ys(r.width) : r.width) / n, s = (i ? ys(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const A_ = /* @__PURE__ */ hr(0);
function Wg(t) {
  const e = Pe(t);
  return !_f() || !e.visualViewport ? A_ : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function j_(t, e, r) {
  return e === void 0 && (e = !1), !r || e && r !== Pe(t) ? !1 : e;
}
function An(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const o = t.getBoundingClientRect(), i = Tf(t);
  let a = hr(1);
  e && (n ? or(n) && (a = ho(n)) : a = ho(t));
  const s = j_(i, r, n) ? Wg(i) : hr(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, u = o.width / a.x, f = o.height / a.y;
  if (i) {
    const d = Pe(i), p = n && or(n) ? Pe(n) : n;
    let g = d, h = Vl(g);
    for (; h && n && p !== g; ) {
      const m = ho(h), y = h.getBoundingClientRect(), x = ir(h), b = y.left + (h.clientLeft + parseFloat(x.paddingLeft)) * m.x, w = y.top + (h.clientTop + parseFloat(x.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, f *= m.y, c += b, l += w, g = Pe(h), h = Vl(g);
    }
  }
  return bs({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Rf(t, e) {
  const r = oc(t).scrollLeft;
  return e ? e.left + r : An(Cr(t)).left + r;
}
function Hg(t, e, r) {
  r === void 0 && (r = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Rf(t, n)
  )), i = n.top + e.scrollTop;
  return {
    x: o,
    y: i
  };
}
function I_(t) {
  let {
    elements: e,
    rect: r,
    offsetParent: n,
    strategy: o
  } = t;
  const i = o === "fixed", a = Cr(n), s = e ? nc(e.floating) : !1;
  if (n === a || s && i)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = hr(1);
  const u = hr(0), f = xr(n);
  if ((f || !f && !i) && ((zo(n) !== "body" || sa(a)) && (c = oc(n)), xr(n))) {
    const p = An(n);
    l = ho(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  const d = a && !f && !i ? Hg(a, c, !0) : hr(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + d.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + d.y
  };
}
function F_(t) {
  return Array.from(t.getClientRects());
}
function B_(t) {
  const e = Cr(t), r = oc(t), n = t.ownerDocument.body, o = Te(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Te(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Rf(t);
  const s = -r.scrollTop;
  return ir(n).direction === "rtl" && (a += Te(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function L_(t, e) {
  const r = Pe(t), n = Cr(t), o = r.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = _f();
    (!l || l && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function z_(t, e) {
  const r = An(t, !0, e === "fixed"), n = r.top + t.clientTop, o = r.left + t.clientLeft, i = xr(t) ? ho(t) : hr(1), a = t.clientWidth * i.x, s = t.clientHeight * i.y, c = o * i.x, l = n * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Up(t, e, r) {
  let n;
  if (e === "viewport")
    n = L_(t, r);
  else if (e === "document")
    n = B_(Cr(t));
  else if (or(e))
    n = z_(e, r);
  else {
    const o = Wg(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return bs(n);
}
function Yg(t, e) {
  const r = on(t);
  return r === e || !or(r) || Eo(r) ? !1 : ir(r).position === "fixed" || Yg(r, e);
}
function G_(t, e) {
  const r = e.get(t);
  if (r)
    return r;
  let n = Yi(t, [], !1).filter((s) => or(s) && zo(s) !== "body"), o = null;
  const i = ir(t).position === "fixed";
  let a = i ? on(t) : t;
  for (; or(a) && !Eo(a); ) {
    const s = ir(a), c = Ef(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sa(a) && !c && Yg(t, a)) ? n = n.filter((u) => u !== a) : o = s, a = on(a);
  }
  return e.set(t, n), n;
}
function $_(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = t;
  const a = [...r === "clippingAncestors" ? nc(e) ? [] : G_(e, this._c) : [].concat(r), n], s = a[0], c = a.reduce((l, u) => {
    const f = Up(e, u, o);
    return l.top = Te(f.top, l.top), l.right = nn(f.right, l.right), l.bottom = nn(f.bottom, l.bottom), l.left = Te(f.left, l.left), l;
  }, Up(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function V_(t) {
  const {
    width: e,
    height: r
  } = Vg(t);
  return {
    width: e,
    height: r
  };
}
function W_(t, e, r) {
  const n = xr(e), o = Cr(e), i = r === "fixed", a = An(t, !0, i, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = hr(0);
  function l() {
    c.x = Rf(o);
  }
  if (n || !n && !i)
    if ((zo(e) !== "body" || sa(o)) && (s = oc(e)), n) {
      const p = An(e, !0, i, e);
      c.x = p.x + e.clientLeft, c.y = p.y + e.clientTop;
    } else o && l();
  i && !n && o && l();
  const u = o && !n && !i ? Hg(o, s) : hr(0), f = a.left + s.scrollLeft - c.x - u.x, d = a.top + s.scrollTop - c.y - u.y;
  return {
    x: f,
    y: d,
    width: a.width,
    height: a.height
  };
}
function tl(t) {
  return ir(t).position === "static";
}
function Xp(t, e) {
  if (!xr(t) || ir(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let r = t.offsetParent;
  return Cr(t) === r && (r = r.ownerDocument.body), r;
}
function Ug(t, e) {
  const r = Pe(t);
  if (nc(t))
    return r;
  if (!xr(t)) {
    let o = on(t);
    for (; o && !Eo(o); ) {
      if (or(o) && !tl(o))
        return o;
      o = on(o);
    }
    return r;
  }
  let n = Xp(t, e);
  for (; n && N_(n) && tl(n); )
    n = Xp(n, e);
  return n && Eo(n) && tl(n) && !Ef(n) ? r : n || k_(t) || r;
}
const H_ = async function(t) {
  const e = this.getOffsetParent || Ug, r = this.getDimensions, n = await r(t.floating);
  return {
    reference: W_(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Y_(t) {
  return ir(t).direction === "rtl";
}
const U_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: I_,
  getDocumentElement: Cr,
  getClippingRect: $_,
  getOffsetParent: Ug,
  getElementRects: H_,
  getClientRects: F_,
  getDimensions: V_,
  getScale: ho,
  isElement: or,
  isRTL: Y_
};
function Xg(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function X_(t, e) {
  let r = null, n;
  const o = Cr(t);
  function i() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const l = t.getBoundingClientRect(), {
      left: u,
      top: f,
      width: d,
      height: p
    } = l;
    if (s || e(), !d || !p)
      return;
    const g = ja(f), h = ja(o.clientWidth - (u + d)), m = ja(o.clientHeight - (f + p)), y = ja(u), b = {
      rootMargin: -g + "px " + -h + "px " + -m + "px " + -y + "px",
      threshold: Te(0, nn(1, c)) || 1
    };
    let w = !0;
    function _(E) {
      const C = E[0].intersectionRatio;
      if (C !== c) {
        if (!w)
          return a();
        C ? a(!1, C) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Xg(l, t.getBoundingClientRect()) && a(), w = !1;
    }
    try {
      r = new IntersectionObserver(_, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(_, b);
    }
    r.observe(t);
  }
  return a(!0), i;
}
function q_(t, e, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Tf(t), u = o || i ? [...l ? Yi(l) : [], ...Yi(e)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), i && y.addEventListener("resize", r);
  });
  const f = l && s ? X_(l, r) : null;
  let d = -1, p = null;
  a && (p = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === l && p && (p.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var b;
      (b = p) == null || b.observe(e);
    })), r();
  }), l && !c && p.observe(l), p.observe(e));
  let g, h = c ? An(t) : null;
  c && m();
  function m() {
    const y = An(t);
    h && !Xg(h, y) && r(), h = y, g = requestAnimationFrame(m);
  }
  return r(), () => {
    var y;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", r), i && x.removeEventListener("resize", r);
    }), f?.(), (y = p) == null || y.disconnect(), p = null, c && cancelAnimationFrame(g);
  };
}
const K_ = D_, Z_ = M_, J_ = __, Q_ = O_, tT = T_, qp = E_, eT = P_, rT = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: U_,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return C_(t, e, {
    ...o,
    platform: i
  });
};
var nT = typeof document < "u", oT = function() {
}, as = nT ? iv : oT;
function ws(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let r, n, o;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (r = t.length, r !== e.length) return !1;
      for (n = r; n-- !== 0; )
        if (!ws(t[n], e[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(t), r = o.length, r !== Object.keys(e).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && t.$$typeof) && !ws(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function qg(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kp(t, e) {
  const r = qg(t);
  return Math.round(e * r) / r;
}
function el(t) {
  const e = S.useRef(t);
  return as(() => {
    e.current = t;
  }), e;
}
function iT(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = t, [u, f] = S.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [d, p] = S.useState(n);
  ws(d, n) || p(n);
  const [g, h] = S.useState(null), [m, y] = S.useState(null), x = S.useCallback((L) => {
    L !== E.current && (E.current = L, h(L));
  }, []), b = S.useCallback((L) => {
    L !== C.current && (C.current = L, y(L));
  }, []), w = i || g, _ = a || m, E = S.useRef(null), C = S.useRef(null), T = S.useRef(u), R = c != null, D = el(c), N = el(o), M = el(l), O = S.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const L = {
      placement: e,
      strategy: r,
      middleware: d
    };
    N.current && (L.platform = N.current), rT(E.current, C.current, L).then((z) => {
      const j = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      k.current && !ws(T.current, j) && (T.current = j, zs.flushSync(() => {
        f(j);
      }));
    });
  }, [d, e, r, N, M]);
  as(() => {
    l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const k = S.useRef(!1);
  as(() => (k.current = !0, () => {
    k.current = !1;
  }), []), as(() => {
    if (w && (E.current = w), _ && (C.current = _), w && _) {
      if (D.current)
        return D.current(w, _, O);
      O();
    }
  }, [w, _, O, D, R]);
  const F = S.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: x,
    setFloating: b
  }), [x, b]), $ = S.useMemo(() => ({
    reference: w,
    floating: _
  }), [w, _]), V = S.useMemo(() => {
    const L = {
      position: r,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return L;
    const z = Kp($.floating, u.x), j = Kp($.floating, u.y);
    return s ? {
      ...L,
      transform: "translate(" + z + "px, " + j + "px)",
      ...qg($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: z,
      top: j
    };
  }, [r, s, $.floating, u.x, u.y]);
  return S.useMemo(() => ({
    ...u,
    update: O,
    refs: F,
    elements: $,
    floatingStyles: V
  }), [u, O, F, $, V]);
}
const aT = (t) => {
  function e(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof t == "function" ? t(r) : t;
      return n && e(n) ? n.current != null ? qp({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? qp({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, sT = (t, e) => ({
  ...K_(t),
  options: [t, e]
}), cT = (t, e) => ({
  ...Z_(t),
  options: [t, e]
}), lT = (t, e) => ({
  ...eT(t),
  options: [t, e]
}), uT = (t, e) => ({
  ...J_(t),
  options: [t, e]
}), fT = (t, e) => ({
  ...Q_(t),
  options: [t, e]
}), dT = (t, e) => ({
  ...tT(t),
  options: [t, e]
}), pT = (t, e) => ({
  ...aT(t),
  options: [t, e]
});
var hT = "Arrow", Kg = S.forwardRef((t, e) => {
  const { children: r, width: n = 10, height: o = 5, ...i } = t;
  return /* @__PURE__ */ v.jsx(
    ut.svg,
    {
      ...i,
      ref: e,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? r : /* @__PURE__ */ v.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Kg.displayName = hT;
var vT = Kg;
function Df(t) {
  const [e, r] = S.useState(void 0);
  return ae(() => {
    if (t) {
      r({ width: t.offsetWidth, height: t.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          a = l.inlineSize, s = l.blockSize;
        } else
          a = t.offsetWidth, s = t.offsetHeight;
        r({ width: a, height: s });
      });
      return n.observe(t, { box: "border-box" }), () => n.unobserve(t);
    } else
      r(void 0);
  }, [t]), e;
}
var Mf = "Popper", [Zg, Go] = Ye(Mf), [gT, Jg] = Zg(Mf), Qg = (t) => {
  const { __scopePopper: e, children: r } = t, [n, o] = S.useState(null);
  return /* @__PURE__ */ v.jsx(gT, { scope: e, anchor: n, onAnchorChange: o, children: r });
};
Qg.displayName = Mf;
var tm = "PopperAnchor", em = S.forwardRef(
  (t, e) => {
    const { __scopePopper: r, virtualRef: n, ...o } = t, i = Jg(tm, r), a = S.useRef(null), s = wt(e, a);
    return S.useEffect(() => {
      i.onAnchorChange(n?.current || a.current);
    }), n ? null : /* @__PURE__ */ v.jsx(ut.div, { ...o, ref: s });
  }
);
em.displayName = tm;
var Pf = "PopperContent", [mT, yT] = Zg(Pf), rm = S.forwardRef(
  (t, e) => {
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: g,
      ...h
    } = t, m = Jg(Pf, r), [y, x] = S.useState(null), b = wt(e, (W) => x(W)), [w, _] = S.useState(null), E = Df(w), C = E?.width ?? 0, T = E?.height ?? 0, R = n + (i !== "center" ? "-" + i : ""), D = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, N = Array.isArray(l) ? l : [l], M = N.length > 0, O = {
      padding: D,
      boundary: N.filter(bT),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: M
    }, { refs: k, floatingStyles: F, placement: $, isPositioned: V, middlewareData: L } = iT({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...W) => q_(...W, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        sT({ mainAxis: o + T, alignmentAxis: a }),
        c && cT({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? lT() : void 0,
          ...O
        }),
        c && uT({ ...O }),
        fT({
          ...O,
          apply: ({ elements: W, rects: q, availableWidth: ot, availableHeight: nt }) => {
            const { width: U, height: et } = q.reference, dt = W.floating.style;
            dt.setProperty("--radix-popper-available-width", `${ot}px`), dt.setProperty("--radix-popper-available-height", `${nt}px`), dt.setProperty("--radix-popper-anchor-width", `${U}px`), dt.setProperty("--radix-popper-anchor-height", `${et}px`);
          }
        }),
        w && pT({ element: w, padding: s }),
        wT({ arrowWidth: C, arrowHeight: T }),
        d && dT({ strategy: "referenceHidden", ...O })
      ]
    }), [z, j] = im($), B = de(g);
    ae(() => {
      V && B?.();
    }, [V, B]);
    const Y = L.arrow?.x, K = L.arrow?.y, X = L.arrow?.centerOffset !== 0, [H, Q] = S.useState();
    return ae(() => {
      y && Q(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: V ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: H,
          "--radix-popper-transform-origin": [
            L.transformOrigin?.x,
            L.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...L.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ v.jsx(
          mT,
          {
            scope: r,
            placedSide: z,
            onArrowChange: _,
            arrowX: Y,
            arrowY: K,
            shouldHideArrow: X,
            children: /* @__PURE__ */ v.jsx(
              ut.div,
              {
                "data-side": z,
                "data-align": j,
                ...h,
                ref: b,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
rm.displayName = Pf;
var nm = "PopperArrow", xT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, om = S.forwardRef(function(e, r) {
  const { __scopePopper: n, ...o } = e, i = yT(nm, n), a = xT[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ v.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ v.jsx(
          vT,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
om.displayName = nm;
function bT(t) {
  return t !== null;
}
var wT = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    const { placement: r, rects: n, middlewareData: o } = e, a = o.arrow?.centerOffset !== 0, s = a ? 0 : t.arrowWidth, c = a ? 0 : t.arrowHeight, [l, u] = im(r), f = { start: "0%", center: "50%", end: "100%" }[u], d = (o.arrow?.x ?? 0) + s / 2, p = (o.arrow?.y ?? 0) + c / 2;
    let g = "", h = "";
    return l === "bottom" ? (g = a ? f : `${d}px`, h = `${-c}px`) : l === "top" ? (g = a ? f : `${d}px`, h = `${n.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, h = a ? f : `${p}px`) : l === "left" && (g = `${n.floating.width + c}px`, h = a ? f : `${p}px`), { data: { x: g, y: h } };
  }
});
function im(t) {
  const [e, r = "center"] = t.split("-");
  return [e, r];
}
var Of = Qg, Nf = em, kf = rm, Af = om, ST = "Portal", ic = S.forwardRef((t, e) => {
  const { container: r, ...n } = t, [o, i] = S.useState(!1);
  ae(() => i(!0), []);
  const a = r || o && globalThis?.document?.body;
  return a ? Xb.createPortal(/* @__PURE__ */ v.jsx(ut.div, { ...n, ref: e }), a) : null;
});
ic.displayName = ST;
function jf(t) {
  const e = S.useRef({ value: t, previous: t });
  return S.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t]);
}
var am = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), CT = "VisuallyHidden", sm = S.forwardRef(
  (t, e) => /* @__PURE__ */ v.jsx(
    ut.span,
    {
      ...t,
      ref: e,
      style: { ...am, ...t.style }
    }
  )
);
sm.displayName = CT;
var ET = sm, _T = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, Kn = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Fa = {}, rl = 0, cm = function(t) {
  return t && (t.host || cm(t.parentNode));
}, TT = function(t, e) {
  return e.map(function(r) {
    if (t.contains(r))
      return r;
    var n = cm(r);
    return n && t.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, RT = function(t, e, r, n) {
  var o = TT(e, Array.isArray(t) ? t : [t]);
  Fa[r] || (Fa[r] = /* @__PURE__ */ new WeakMap());
  var i = Fa[r], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (s.has(d))
        u(d);
      else
        try {
          var p = d.getAttribute(n), g = p !== null && p !== "false", h = (Kn.get(d) || 0) + 1, m = (i.get(d) || 0) + 1;
          Kn.set(d, h), i.set(d, m), a.push(d), h === 1 && g && Ia.set(d, !0), m === 1 && d.setAttribute(r, "true"), g || d.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", d, y);
        }
    });
  };
  return u(e), s.clear(), rl++, function() {
    a.forEach(function(f) {
      var d = Kn.get(f) - 1, p = i.get(f) - 1;
      Kn.set(f, d), i.set(f, p), d || (Ia.has(f) || f.removeAttribute(n), Ia.delete(f)), p || f.removeAttribute(r);
    }), rl--, rl || (Kn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), Fa = {});
  };
}, lm = function(t, e, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = _T(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), RT(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, ur = function() {
  return ur = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ur.apply(this, arguments);
};
function um(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function DT(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
var ss = "right-scroll-bar-position", cs = "width-before-scroll-bar", MT = "with-scroll-bars-hidden", PT = "--removed-body-scroll-bar-size";
function nl(t, e) {
  return typeof t == "function" ? t(e) : t && (t.current = e), t;
}
function OT(t, e) {
  var r = Bt(function() {
    return {
      // value
      value: t,
      // last callback
      callback: e,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = e, r.facade;
}
var NT = typeof window < "u" ? S.useLayoutEffect : S.useEffect, Zp = /* @__PURE__ */ new WeakMap();
function kT(t, e) {
  var r = OT(null, function(n) {
    return t.forEach(function(o) {
      return nl(o, n);
    });
  });
  return NT(function() {
    var n = Zp.get(r);
    if (n) {
      var o = new Set(n), i = new Set(t), a = r.current;
      o.forEach(function(s) {
        i.has(s) || nl(s, null);
      }), i.forEach(function(s) {
        o.has(s) || nl(s, a);
      });
    }
    Zp.set(r, t);
  }, [t]), r;
}
function AT(t) {
  return t;
}
function jT(t, e) {
  e === void 0 && (e = AT);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : t;
    },
    useMedium: function(i) {
      var a = e(i, n);
      return r.push(a), function() {
        r = r.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(i);
      }
      r = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var a = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(i), a = r;
      }
      var c = function() {
        var u = a;
        a = [], u.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          a.push(u), l();
        },
        filter: function(u) {
          return a = a.filter(u), r;
        }
      };
    }
  };
  return o;
}
function IT(t) {
  t === void 0 && (t = {});
  var e = jT(null);
  return e.options = ur({ async: !0, ssr: !1 }, t), e;
}
var fm = function(t) {
  var e = t.sideCar, r = um(t, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = e.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return S.createElement(n, ur({}, r));
};
fm.isSideCarExport = !0;
function FT(t, e) {
  return t.useMedium(e), fm;
}
var dm = IT(), ol = function() {
}, ac = S.forwardRef(function(t, e) {
  var r = S.useRef(null), n = S.useState({
    onScrollCapture: ol,
    onWheelCapture: ol,
    onTouchMoveCapture: ol
  }), o = n[0], i = n[1], a = t.forwardProps, s = t.children, c = t.className, l = t.removeScrollBar, u = t.enabled, f = t.shards, d = t.sideCar, p = t.noRelative, g = t.noIsolation, h = t.inert, m = t.allowPinchZoom, y = t.as, x = y === void 0 ? "div" : y, b = t.gapMode, w = um(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = d, E = kT([r, e]), C = ur(ur({}, w), o);
  return S.createElement(
    S.Fragment,
    null,
    u && S.createElement(_, { sideCar: dm, removeScrollBar: l, shards: f, noRelative: p, noIsolation: g, inert: h, setCallbacks: i, allowPinchZoom: !!m, lockRef: r, gapMode: b }),
    a ? S.cloneElement(S.Children.only(s), ur(ur({}, C), { ref: E })) : S.createElement(x, ur({}, C, { className: c, ref: E }), s)
  );
});
ac.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ac.classNames = {
  fullWidth: cs,
  zeroRight: ss
};
var BT = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function LT() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = BT();
  return e && t.setAttribute("nonce", e), t;
}
function zT(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function GT(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var $T = function() {
  var t = 0, e = null;
  return {
    add: function(r) {
      t == 0 && (e = LT()) && (zT(e, r), GT(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, VT = function() {
  var t = $T();
  return function(e, r) {
    S.useEffect(function() {
      return t.add(e), function() {
        t.remove();
      };
    }, [e && r]);
  };
}, pm = function() {
  var t = VT(), e = function(r) {
    var n = r.styles, o = r.dynamic;
    return t(n, o), null;
  };
  return e;
}, WT = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, il = function(t) {
  return parseInt(t || "", 10) || 0;
}, HT = function(t) {
  var e = window.getComputedStyle(document.body), r = e[t === "padding" ? "paddingLeft" : "marginLeft"], n = e[t === "padding" ? "paddingTop" : "marginTop"], o = e[t === "padding" ? "paddingRight" : "marginRight"];
  return [il(r), il(n), il(o)];
}, YT = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return WT;
  var e = HT(t), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, n - r + e[2] - e[0])
  };
}, UT = pm(), vo = "data-scroll-locked", XT = function(t, e, r, n) {
  var o = t.left, i = t.top, a = t.right, s = t.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(MT, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(vo, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ss, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(cs, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ss, " .").concat(ss, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(cs, " .").concat(cs, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(vo, `] {
    `).concat(PT, ": ").concat(s, `px;
  }
`);
}, Jp = function() {
  var t = parseInt(document.body.getAttribute(vo) || "0", 10);
  return isFinite(t) ? t : 0;
}, qT = function() {
  S.useEffect(function() {
    return document.body.setAttribute(vo, (Jp() + 1).toString()), function() {
      var t = Jp() - 1;
      t <= 0 ? document.body.removeAttribute(vo) : document.body.setAttribute(vo, t.toString());
    };
  }, []);
}, KT = function(t) {
  var e = t.noRelative, r = t.noImportant, n = t.gapMode, o = n === void 0 ? "margin" : n;
  qT();
  var i = S.useMemo(function() {
    return YT(o);
  }, [o]);
  return S.createElement(UT, { styles: XT(i, !e, o, r ? "" : "!important") });
}, Wl = !1;
if (typeof window < "u")
  try {
    var Ba = Object.defineProperty({}, "passive", {
      get: function() {
        return Wl = !0, !0;
      }
    });
    window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
  } catch {
    Wl = !1;
  }
var Zn = Wl ? { passive: !1 } : !1, ZT = function(t) {
  return t.tagName === "TEXTAREA";
}, hm = function(t, e) {
  if (!(t instanceof Element))
    return !1;
  var r = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    r[e] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !ZT(t) && r[e] === "visible")
  );
}, JT = function(t) {
  return hm(t, "overflowY");
}, QT = function(t) {
  return hm(t, "overflowX");
}, Qp = function(t, e) {
  var r = e.ownerDocument, n = e;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = vm(t, n);
    if (o) {
      var i = gm(t, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, t2 = function(t) {
  var e = t.scrollTop, r = t.scrollHeight, n = t.clientHeight;
  return [
    e,
    r,
    n
  ];
}, e2 = function(t) {
  var e = t.scrollLeft, r = t.scrollWidth, n = t.clientWidth;
  return [
    e,
    r,
    n
  ];
}, vm = function(t, e) {
  return t === "v" ? JT(e) : QT(e);
}, gm = function(t, e) {
  return t === "v" ? t2(e) : e2(e);
}, r2 = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, n2 = function(t, e, r, n, o) {
  var i = r2(t, window.getComputedStyle(e).direction), a = i * n, s = r.target, c = e.contains(s), l = !1, u = a > 0, f = 0, d = 0;
  do {
    if (!s)
      break;
    var p = gm(t, s), g = p[0], h = p[1], m = p[2], y = h - m - i * g;
    (g || y) && vm(t, s) && (f += y, d += g);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (e.contains(s) || e === s)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(d) < 1) && (l = !0), l;
}, La = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, th = function(t) {
  return [t.deltaX, t.deltaY];
}, eh = function(t) {
  return t && "current" in t ? t.current : t;
}, o2 = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, i2 = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, a2 = 0, Jn = [];
function s2(t) {
  var e = S.useRef([]), r = S.useRef([0, 0]), n = S.useRef(), o = S.useState(a2++)[0], i = S.useState(pm)[0], a = S.useRef(t);
  S.useEffect(function() {
    a.current = t;
  }, [t]), S.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = DT([t.lockRef.current], (t.shards || []).map(eh), !0).filter(Boolean);
      return h.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var s = S.useCallback(function(h, m) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = La(h), x = r.current, b = "deltaX" in h ? h.deltaX : x[0] - y[0], w = "deltaY" in h ? h.deltaY : x[1] - y[1], _, E = h.target, C = Math.abs(b) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && C === "h" && E.type === "range")
      return !1;
    var T = Qp(C, E);
    if (!T)
      return !0;
    if (T ? _ = C : (_ = C === "v" ? "h" : "v", T = Qp(C, E)), !T)
      return !1;
    if (!n.current && "changedTouches" in h && (b || w) && (n.current = _), !_)
      return !0;
    var R = n.current || _;
    return n2(R, m, h, R === "h" ? b : w);
  }, []), c = S.useCallback(function(h) {
    var m = h;
    if (!(!Jn.length || Jn[Jn.length - 1] !== i)) {
      var y = "deltaY" in m ? th(m) : La(m), x = e.current.filter(function(_) {
        return _.name === m.type && (_.target === m.target || m.target === _.shadowParent) && o2(_.delta, y);
      })[0];
      if (x && x.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!x) {
        var b = (a.current.shards || []).map(eh).filter(Boolean).filter(function(_) {
          return _.contains(m.target);
        }), w = b.length > 0 ? s(m, b[0]) : !a.current.noIsolation;
        w && m.cancelable && m.preventDefault();
      }
    }
  }, []), l = S.useCallback(function(h, m, y, x) {
    var b = { name: h, delta: m, target: y, should: x, shadowParent: c2(y) };
    e.current.push(b), setTimeout(function() {
      e.current = e.current.filter(function(w) {
        return w !== b;
      });
    }, 1);
  }, []), u = S.useCallback(function(h) {
    r.current = La(h), n.current = void 0;
  }, []), f = S.useCallback(function(h) {
    l(h.type, th(h), h.target, s(h, t.lockRef.current));
  }, []), d = S.useCallback(function(h) {
    l(h.type, La(h), h.target, s(h, t.lockRef.current));
  }, []);
  S.useEffect(function() {
    return Jn.push(i), t.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", c, Zn), document.addEventListener("touchmove", c, Zn), document.addEventListener("touchstart", u, Zn), function() {
      Jn = Jn.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", c, Zn), document.removeEventListener("touchmove", c, Zn), document.removeEventListener("touchstart", u, Zn);
    };
  }, []);
  var p = t.removeScrollBar, g = t.inert;
  return S.createElement(
    S.Fragment,
    null,
    g ? S.createElement(i, { styles: i2(o) }) : null,
    p ? S.createElement(KT, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
}
function c2(t) {
  for (var e = null; t !== null; )
    t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
  return e;
}
const l2 = FT(dm, s2);
var If = S.forwardRef(function(t, e) {
  return S.createElement(ac, ur({}, t, { ref: e, sideCar: l2 }));
});
If.classNames = ac.classNames;
var u2 = [" ", "Enter", "ArrowUp", "ArrowDown"], f2 = [" ", "Enter"], jn = "Select", [sc, cc, d2] = Js(jn), [$o, Gj] = Ye(jn, [
  d2,
  Go
]), lc = Go(), [p2, pn] = $o(jn), [h2, v2] = $o(jn), mm = (t) => {
  const {
    __scopeSelect: e,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: u,
    autoComplete: f,
    disabled: d,
    required: p,
    form: g
  } = t, h = lc(e), [m, y] = S.useState(null), [x, b] = S.useState(null), [w, _] = S.useState(!1), E = Bo(l), [C, T] = kr({
    prop: n,
    defaultProp: o ?? !1,
    onChange: i,
    caller: jn
  }), [R, D] = kr({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: jn
  }), N = S.useRef(null), M = m ? g || !!m.closest("form") : !0, [O, k] = S.useState(/* @__PURE__ */ new Set()), F = Array.from(O).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ v.jsx(Of, { ...h, children: /* @__PURE__ */ v.jsxs(
    p2,
    {
      required: p,
      scope: e,
      trigger: m,
      onTriggerChange: y,
      valueNode: x,
      onValueNodeChange: b,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: _,
      contentId: Nr(),
      value: R,
      onValueChange: D,
      open: C,
      onOpenChange: T,
      dir: E,
      triggerPointerDownPosRef: N,
      disabled: d,
      children: [
        /* @__PURE__ */ v.jsx(sc.Provider, { scope: e, children: /* @__PURE__ */ v.jsx(
          h2,
          {
            scope: t.__scopeSelect,
            onNativeOptionAdd: S.useCallback(($) => {
              k((V) => new Set(V).add($));
            }, []),
            onNativeOptionRemove: S.useCallback(($) => {
              k((V) => {
                const L = new Set(V);
                return L.delete($), L;
              });
            }, []),
            children: r
          }
        ) }),
        M ? /* @__PURE__ */ v.jsxs(
          Gm,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: R,
            onChange: ($) => D($.target.value),
            disabled: d,
            form: g,
            children: [
              R === void 0 ? /* @__PURE__ */ v.jsx("option", { value: "" }) : null,
              Array.from(O)
            ]
          },
          F
        ) : null
      ]
    }
  ) });
};
mm.displayName = jn;
var ym = "SelectTrigger", xm = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = t, i = lc(r), a = pn(ym, r), s = a.disabled || n, c = wt(e, a.onTriggerChange), l = cc(r), u = S.useRef("touch"), [f, d, p] = Vm((h) => {
      const m = l().filter((b) => !b.disabled), y = m.find((b) => b.value === a.value), x = Wm(m, h, y);
      x !== void 0 && a.onValueChange(x.value);
    }), g = (h) => {
      s || (a.onOpenChange(!0), p()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ v.jsx(Nf, { asChild: !0, ...i, children: /* @__PURE__ */ v.jsx(
      ut.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": $m(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: rt(o.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && g(h);
        }),
        onPointerDown: rt(o.onPointerDown, (h) => {
          u.current = h.pointerType;
          const m = h.target;
          m.hasPointerCapture(h.pointerId) && m.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (g(h), h.preventDefault());
        }),
        onKeyDown: rt(o.onKeyDown, (h) => {
          const m = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(m && h.key === " ") && u2.includes(h.key) && (g(), h.preventDefault());
        })
      }
    ) });
  }
);
xm.displayName = ym;
var bm = "SelectValue", wm = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, className: n, style: o, children: i, placeholder: a = "", ...s } = t, c = pn(bm, r), { onValueNodeHasChildrenChange: l } = c, u = i !== void 0, f = wt(e, c.onValueNodeChange);
    return ae(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ v.jsx(
      ut.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: $m(c.value) ? /* @__PURE__ */ v.jsx(v.Fragment, { children: a }) : i
      }
    );
  }
);
wm.displayName = bm;
var g2 = "SelectIcon", Sm = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, children: n, ...o } = t;
    return /* @__PURE__ */ v.jsx(ut.span, { "aria-hidden": !0, ...o, ref: e, children: n || "▼" });
  }
);
Sm.displayName = g2;
var m2 = "SelectPortal", Cm = (t) => /* @__PURE__ */ v.jsx(ic, { asChild: !0, ...t });
Cm.displayName = m2;
var In = "SelectContent", Em = S.forwardRef(
  (t, e) => {
    const r = pn(In, t.__scopeSelect), [n, o] = S.useState();
    if (ae(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const i = n;
      return i ? zs.createPortal(
        /* @__PURE__ */ v.jsx(_m, { scope: t.__scopeSelect, children: /* @__PURE__ */ v.jsx(sc.Slot, { scope: t.__scopeSelect, children: /* @__PURE__ */ v.jsx("div", { children: t.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ v.jsx(Tm, { ...t, ref: e });
  }
);
Em.displayName = In;
var Ke = 10, [_m, hn] = $o(In), y2 = "SelectContentImpl", x2 = /* @__PURE__ */ Co("SelectContent.RemoveScroll"), Tm = S.forwardRef(
  (t, e) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: m,
      //
      ...y
    } = t, x = pn(In, r), [b, w] = S.useState(null), [_, E] = S.useState(null), C = wt(e, (W) => w(W)), [T, R] = S.useState(null), [D, N] = S.useState(
      null
    ), M = cc(r), [O, k] = S.useState(!1), F = S.useRef(!1);
    S.useEffect(() => {
      if (b) return lm(b);
    }, [b]), Bg();
    const $ = S.useCallback(
      (W) => {
        const [q, ...ot] = M().map((et) => et.ref.current), [nt] = ot.slice(-1), U = document.activeElement;
        for (const et of W)
          if (et === U || (et?.scrollIntoView({ block: "nearest" }), et === q && _ && (_.scrollTop = 0), et === nt && _ && (_.scrollTop = _.scrollHeight), et?.focus(), document.activeElement !== U)) return;
      },
      [M, _]
    ), V = S.useCallback(
      () => $([T, b]),
      [$, T, b]
    );
    S.useEffect(() => {
      O && V();
    }, [O, V]);
    const { onOpenChange: L, triggerPointerDownPosRef: z } = x;
    S.useEffect(() => {
      if (b) {
        let W = { x: 0, y: 0 };
        const q = (nt) => {
          W = {
            x: Math.abs(Math.round(nt.pageX) - (z.current?.x ?? 0)),
            y: Math.abs(Math.round(nt.pageY) - (z.current?.y ?? 0))
          };
        }, ot = (nt) => {
          W.x <= 10 && W.y <= 10 ? nt.preventDefault() : b.contains(nt.target) || L(!1), document.removeEventListener("pointermove", q), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", ot, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", ot, { capture: !0 });
        };
      }
    }, [b, L, z]), S.useEffect(() => {
      const W = () => L(!1);
      return window.addEventListener("blur", W), window.addEventListener("resize", W), () => {
        window.removeEventListener("blur", W), window.removeEventListener("resize", W);
      };
    }, [L]);
    const [j, B] = Vm((W) => {
      const q = M().filter((U) => !U.disabled), ot = q.find((U) => U.ref.current === document.activeElement), nt = Wm(q, W, ot);
      nt && setTimeout(() => nt.ref.current.focus());
    }), Y = S.useCallback(
      (W, q, ot) => {
        const nt = !F.current && !ot;
        (x.value !== void 0 && x.value === q || nt) && (R(W), nt && (F.current = !0));
      },
      [x.value]
    ), K = S.useCallback(() => b?.focus(), [b]), X = S.useCallback(
      (W, q, ot) => {
        const nt = !F.current && !ot;
        (x.value !== void 0 && x.value === q || nt) && N(W);
      },
      [x.value]
    ), H = n === "popper" ? Hl : Rm, Q = H === Hl ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: h,
      avoidCollisions: m
    } : {};
    return /* @__PURE__ */ v.jsx(
      _m,
      {
        scope: r,
        content: b,
        viewport: _,
        onViewportChange: E,
        itemRefCallback: Y,
        selectedItem: T,
        onItemLeave: K,
        itemTextRefCallback: X,
        focusSelectedItem: V,
        selectedItemText: D,
        position: n,
        isPositioned: O,
        searchRef: j,
        children: /* @__PURE__ */ v.jsx(If, { as: x2, allowPinchZoom: !0, children: /* @__PURE__ */ v.jsx(
          bf,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (W) => {
              W.preventDefault();
            },
            onUnmountAutoFocus: rt(o, (W) => {
              x.trigger?.focus({ preventScroll: !0 }), W.preventDefault();
            }),
            children: /* @__PURE__ */ v.jsx(
              ec,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (W) => W.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ v.jsx(
                  H,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (W) => W.preventDefault(),
                    ...y,
                    ...Q,
                    onPlaced: () => k(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: rt(y.onKeyDown, (W) => {
                      const q = W.ctrlKey || W.altKey || W.metaKey;
                      if (W.key === "Tab" && W.preventDefault(), !q && W.key.length === 1 && B(W.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(W.key)) {
                        let nt = M().filter((U) => !U.disabled).map((U) => U.ref.current);
                        if (["ArrowUp", "End"].includes(W.key) && (nt = nt.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(W.key)) {
                          const U = W.target, et = nt.indexOf(U);
                          nt = nt.slice(et + 1);
                        }
                        setTimeout(() => $(nt)), W.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Tm.displayName = y2;
var b2 = "SelectItemAlignedPosition", Rm = S.forwardRef((t, e) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = t, i = pn(In, r), a = hn(In, r), [s, c] = S.useState(null), [l, u] = S.useState(null), f = wt(e, (C) => u(C)), d = cc(r), p = S.useRef(!1), g = S.useRef(!0), { viewport: h, selectedItem: m, selectedItemText: y, focusSelectedItem: x } = a, b = S.useCallback(() => {
    if (i.trigger && i.valueNode && s && l && h && m && y) {
      const C = i.trigger.getBoundingClientRect(), T = l.getBoundingClientRect(), R = i.valueNode.getBoundingClientRect(), D = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const U = D.left - T.left, et = R.left - U, dt = C.left - et, ct = C.width + dt, ft = Math.max(ct, T.width), ht = window.innerWidth - Ke, Ct = Wi(et, [
          Ke,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ke, ht - ft)
        ]);
        s.style.minWidth = ct + "px", s.style.left = Ct + "px";
      } else {
        const U = T.right - D.right, et = window.innerWidth - R.right - U, dt = window.innerWidth - C.right - et, ct = C.width + dt, ft = Math.max(ct, T.width), ht = window.innerWidth - Ke, Ct = Wi(et, [
          Ke,
          Math.max(Ke, ht - ft)
        ]);
        s.style.minWidth = ct + "px", s.style.right = Ct + "px";
      }
      const N = d(), M = window.innerHeight - Ke * 2, O = h.scrollHeight, k = window.getComputedStyle(l), F = parseInt(k.borderTopWidth, 10), $ = parseInt(k.paddingTop, 10), V = parseInt(k.borderBottomWidth, 10), L = parseInt(k.paddingBottom, 10), z = F + $ + O + L + V, j = Math.min(m.offsetHeight * 5, z), B = window.getComputedStyle(h), Y = parseInt(B.paddingTop, 10), K = parseInt(B.paddingBottom, 10), X = C.top + C.height / 2 - Ke, H = M - X, Q = m.offsetHeight / 2, W = m.offsetTop + Q, q = F + $ + W, ot = z - q;
      if (q <= X) {
        const U = N.length > 0 && m === N[N.length - 1].ref.current;
        s.style.bottom = "0px";
        const et = l.clientHeight - h.offsetTop - h.offsetHeight, dt = Math.max(
          H,
          Q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (U ? K : 0) + et + V
        ), ct = q + dt;
        s.style.height = ct + "px";
      } else {
        const U = N.length > 0 && m === N[0].ref.current;
        s.style.top = "0px";
        const dt = Math.max(
          X,
          F + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (U ? Y : 0) + Q
        ) + ot;
        s.style.height = dt + "px", h.scrollTop = q - X + h.offsetTop;
      }
      s.style.margin = `${Ke}px 0`, s.style.minHeight = j + "px", s.style.maxHeight = M + "px", n?.(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    d,
    i.trigger,
    i.valueNode,
    s,
    l,
    h,
    m,
    y,
    i.dir,
    n
  ]);
  ae(() => b(), [b]);
  const [w, _] = S.useState();
  ae(() => {
    l && _(window.getComputedStyle(l).zIndex);
  }, [l]);
  const E = S.useCallback(
    (C) => {
      C && g.current === !0 && (b(), x?.(), g.current = !1);
    },
    [b, x]
  );
  return /* @__PURE__ */ v.jsx(
    S2,
    {
      scope: r,
      contentWrapper: s,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w
          },
          children: /* @__PURE__ */ v.jsx(
            ut.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Rm.displayName = b2;
var w2 = "SelectPopperPosition", Hl = S.forwardRef((t, e) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = Ke,
    ...i
  } = t, a = lc(r);
  return /* @__PURE__ */ v.jsx(
    kf,
    {
      ...a,
      ...i,
      ref: e,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Hl.displayName = w2;
var [S2, Ff] = $o(In, {}), Yl = "SelectViewport", Dm = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, nonce: n, ...o } = t, i = hn(Yl, r), a = Ff(Yl, r), s = wt(e, i.onViewportChange), c = S.useRef(0);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ v.jsx(sc.Slot, { scope: r, children: /* @__PURE__ */ v.jsx(
        ut.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: rt(o.onScroll, (l) => {
            const u = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: d } = a;
            if (d?.current && f) {
              const p = Math.abs(c.current - u.scrollTop);
              if (p > 0) {
                const g = window.innerHeight - Ke * 2, h = parseFloat(f.style.minHeight), m = parseFloat(f.style.height), y = Math.max(h, m);
                if (y < g) {
                  const x = y + p, b = Math.min(g, x), w = x - b;
                  f.style.height = b + "px", f.style.bottom === "0px" && (u.scrollTop = w > 0 ? w : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Dm.displayName = Yl;
var Mm = "SelectGroup", [C2, E2] = $o(Mm), _2 = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t, o = Nr();
    return /* @__PURE__ */ v.jsx(C2, { scope: r, id: o, children: /* @__PURE__ */ v.jsx(ut.div, { role: "group", "aria-labelledby": o, ...n, ref: e }) });
  }
);
_2.displayName = Mm;
var Pm = "SelectLabel", Om = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t, o = E2(Pm, r);
    return /* @__PURE__ */ v.jsx(ut.div, { id: o.id, ...n, ref: e });
  }
);
Om.displayName = Pm;
var Ss = "SelectItem", [T2, Nm] = $o(Ss), km = S.forwardRef(
  (t, e) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: i,
      ...a
    } = t, s = pn(Ss, r), c = hn(Ss, r), l = s.value === n, [u, f] = S.useState(i ?? ""), [d, p] = S.useState(!1), g = wt(
      e,
      (x) => c.itemRefCallback?.(x, n, o)
    ), h = Nr(), m = S.useRef("touch"), y = () => {
      o || (s.onValueChange(n), s.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ v.jsx(
      T2,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: S.useCallback((x) => {
          f((b) => b || (x?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ v.jsx(
          sc.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ v.jsx(
              ut.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": d ? "" : void 0,
                "aria-selected": l && d,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: g,
                onFocus: rt(a.onFocus, () => p(!0)),
                onBlur: rt(a.onBlur, () => p(!1)),
                onClick: rt(a.onClick, () => {
                  m.current !== "mouse" && y();
                }),
                onPointerUp: rt(a.onPointerUp, () => {
                  m.current === "mouse" && y();
                }),
                onPointerDown: rt(a.onPointerDown, (x) => {
                  m.current = x.pointerType;
                }),
                onPointerMove: rt(a.onPointerMove, (x) => {
                  m.current = x.pointerType, o ? c.onItemLeave?.() : m.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: rt(a.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: rt(a.onKeyDown, (x) => {
                  c.searchRef?.current !== "" && x.key === " " || (f2.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
km.displayName = Ss;
var ci = "SelectItemText", Am = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, className: n, style: o, ...i } = t, a = pn(ci, r), s = hn(ci, r), c = Nm(ci, r), l = v2(ci, r), [u, f] = S.useState(null), d = wt(
      e,
      (y) => f(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), p = u?.textContent, g = S.useMemo(
      () => /* @__PURE__ */ v.jsx("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: m } = l;
    return ae(() => (h(g), () => m(g)), [h, m, g]), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(ut.span, { id: c.textId, ...i, ref: d }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? zs.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
Am.displayName = ci;
var jm = "SelectItemIndicator", Im = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t;
    return Nm(jm, r).isSelected ? /* @__PURE__ */ v.jsx(ut.span, { "aria-hidden": !0, ...n, ref: e }) : null;
  }
);
Im.displayName = jm;
var Ul = "SelectScrollUpButton", Fm = S.forwardRef((t, e) => {
  const r = hn(Ul, t.__scopeSelect), n = Ff(Ul, t.__scopeSelect), [o, i] = S.useState(!1), a = wt(e, n.onScrollButtonChange);
  return ae(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        i(l);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ v.jsx(
    Lm,
    {
      ...t,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Fm.displayName = Ul;
var Xl = "SelectScrollDownButton", Bm = S.forwardRef((t, e) => {
  const r = hn(Xl, t.__scopeSelect), n = Ff(Xl, t.__scopeSelect), [o, i] = S.useState(!1), a = wt(e, n.onScrollButtonChange);
  return ae(() => {
    if (r.viewport && r.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        i(u);
      };
      const c = r.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ v.jsx(
    Lm,
    {
      ...t,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = r;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Bm.displayName = Xl;
var Lm = S.forwardRef((t, e) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = t, i = hn("SelectScrollButton", r), a = S.useRef(null), s = cc(r), c = S.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return S.useEffect(() => () => c(), [c]), ae(() => {
    s().find((u) => u.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ v.jsx(
    ut.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: e,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: rt(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: rt(o.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: rt(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), R2 = "SelectSeparator", zm = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t;
    return /* @__PURE__ */ v.jsx(ut.div, { "aria-hidden": !0, ...n, ref: e });
  }
);
zm.displayName = R2;
var ql = "SelectArrow", D2 = S.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t, o = lc(r), i = pn(ql, r), a = hn(ql, r);
    return i.open && a.position === "popper" ? /* @__PURE__ */ v.jsx(Af, { ...o, ...n, ref: e }) : null;
  }
);
D2.displayName = ql;
var M2 = "SelectBubbleInput", Gm = S.forwardRef(
  ({ __scopeSelect: t, value: e, ...r }, n) => {
    const o = S.useRef(null), i = wt(n, o), a = jf(e);
    return S.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== e && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(s, e), s.dispatchEvent(f);
      }
    }, [a, e]), /* @__PURE__ */ v.jsx(
      ut.select,
      {
        ...r,
        style: { ...am, ...r.style },
        ref: i,
        defaultValue: e
      }
    );
  }
);
Gm.displayName = M2;
function $m(t) {
  return t === "" || t === void 0;
}
function Vm(t) {
  const e = de(t), r = S.useRef(""), n = S.useRef(0), o = S.useCallback(
    (a) => {
      const s = r.current + a;
      e(s), function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(s);
    },
    [e]
  ), i = S.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return S.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, i];
}
function Wm(t, e, r) {
  const o = e.length > 1 && Array.from(e).every((l) => l === e[0]) ? e[0] : e, i = r ? t.indexOf(r) : -1;
  let a = P2(t, Math.max(i, 0));
  o.length === 1 && (a = a.filter((l) => l !== r));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function P2(t, e) {
  return t.map((r, n) => t[(e + n) % t.length]);
}
var O2 = mm, Hm = xm, N2 = wm, k2 = Sm, A2 = Cm, Ym = Em, j2 = Dm, Um = Om, Xm = km, I2 = Am, F2 = Im, qm = Fm, Km = Bm, Zm = zm;
const Fn = O2, _o = N2, an = S.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ v.jsxs(
  Hm,
  {
    ref: n,
    className: bt(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...r,
    children: [
      e,
      /* @__PURE__ */ v.jsx(k2, { asChild: !0, children: /* @__PURE__ */ v.jsx(gf, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
an.displayName = Hm.displayName;
const Jm = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  qm,
  {
    ref: r,
    className: bt(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ v.jsx(rg, { className: "h-4 w-4" })
  }
));
Jm.displayName = qm.displayName;
const Qm = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  Km,
  {
    ref: r,
    className: bt(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ v.jsx(gf, { className: "h-4 w-4" })
  }
));
Qm.displayName = Km.displayName;
const sn = S.forwardRef(({ className: t, children: e, position: r = "popper", ...n }, o) => /* @__PURE__ */ v.jsx(A2, { children: /* @__PURE__ */ v.jsxs(
  Ym,
  {
    ref: o,
    className: bt(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ v.jsx(Jm, {}),
      /* @__PURE__ */ v.jsx(
        j2,
        {
          className: bt(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ v.jsx(Qm, {})
    ]
  }
) }));
sn.displayName = Ym.displayName;
const B2 = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  Um,
  {
    ref: r,
    className: bt("px-2 py-1.5 text-sm font-semibold", t),
    ...e
  }
));
B2.displayName = Um.displayName;
const fe = S.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ v.jsxs(
  Xm,
  {
    ref: n,
    className: bt(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(F2, { children: /* @__PURE__ */ v.jsx(vf, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ v.jsx(I2, { children: e })
    ]
  }
));
fe.displayName = Xm.displayName;
const L2 = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  Zm,
  {
    ref: r,
    className: bt("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
L2.displayName = Zm.displayName;
var t0 = ["PageUp", "PageDown"], e0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], r0 = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Vo = "Slider", [Kl, z2, G2] = Js(Vo), [n0, $j] = Ye(Vo, [
  G2
]), [$2, uc] = n0(Vo), o0 = S.forwardRef(
  (t, e) => {
    const {
      name: r,
      min: n = 0,
      max: o = 100,
      step: i = 1,
      orientation: a = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: c = 0,
      defaultValue: l = [n],
      value: u,
      onValueChange: f = () => {
      },
      onValueCommit: d = () => {
      },
      inverted: p = !1,
      form: g,
      ...h
    } = t, m = S.useRef(/* @__PURE__ */ new Set()), y = S.useRef(0), b = a === "horizontal" ? V2 : W2, [w = [], _] = kr({
      prop: u,
      defaultProp: l,
      onChange: (N) => {
        [...m.current][y.current]?.focus(), f(N);
      }
    }), E = S.useRef(w);
    function C(N) {
      const M = q2(w, N);
      D(N, M);
    }
    function T(N) {
      D(N, y.current);
    }
    function R() {
      const N = E.current[y.current];
      w[y.current] !== N && d(w);
    }
    function D(N, M, { commit: O } = { commit: !1 }) {
      const k = Q2(i), F = tR(Math.round((N - n) / i) * i + n, k), $ = Wi(F, [n, o]);
      _((V = []) => {
        const L = U2(V, $, M);
        if (J2(L, c * i)) {
          y.current = L.indexOf($);
          const z = String(L) !== String(V);
          return z && O && d(L), z ? L : V;
        } else
          return V;
      });
    }
    return /* @__PURE__ */ v.jsx(
      $2,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: s,
        min: n,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: m.current,
        values: w,
        orientation: a,
        form: g,
        children: /* @__PURE__ */ v.jsx(Kl.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(Kl.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(
          b,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...h,
            ref: e,
            onPointerDown: rt(h.onPointerDown, () => {
              s || (E.current = w);
            }),
            min: n,
            max: o,
            inverted: p,
            onSlideStart: s ? void 0 : C,
            onSlideMove: s ? void 0 : T,
            onSlideEnd: s ? void 0 : R,
            onHomeKeyDown: () => !s && D(n, 0, { commit: !0 }),
            onEndKeyDown: () => !s && D(o, w.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: N, direction: M }) => {
              if (!s) {
                const F = t0.includes(N.key) || N.shiftKey && e0.includes(N.key) ? 10 : 1, $ = y.current, V = w[$], L = i * F * M;
                D(V + L, $, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
o0.displayName = Vo;
var [i0, a0] = n0(Vo, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), V2 = S.forwardRef(
  (t, e) => {
    const {
      min: r,
      max: n,
      dir: o,
      inverted: i,
      onSlideStart: a,
      onSlideMove: s,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...u
    } = t, [f, d] = S.useState(null), p = wt(e, (b) => d(b)), g = S.useRef(void 0), h = Bo(o), m = h === "ltr", y = m && !i || !m && i;
    function x(b) {
      const w = g.current || f.getBoundingClientRect(), _ = [0, w.width], C = Bf(_, y ? [r, n] : [n, r]);
      return g.current = w, C(b - w.left);
    }
    return /* @__PURE__ */ v.jsx(
      i0,
      {
        scope: t.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ v.jsx(
          s0,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...u,
            ref: p,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (b) => {
              const w = x(b.clientX);
              a?.(w);
            },
            onSlideMove: (b) => {
              const w = x(b.clientX);
              s?.(w);
            },
            onSlideEnd: () => {
              g.current = void 0, c?.();
            },
            onStepKeyDown: (b) => {
              const _ = r0[y ? "from-left" : "from-right"].includes(b.key);
              l?.({ event: b, direction: _ ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), W2 = S.forwardRef(
  (t, e) => {
    const {
      min: r,
      max: n,
      inverted: o,
      onSlideStart: i,
      onSlideMove: a,
      onSlideEnd: s,
      onStepKeyDown: c,
      ...l
    } = t, u = S.useRef(null), f = wt(e, u), d = S.useRef(void 0), p = !o;
    function g(h) {
      const m = d.current || u.current.getBoundingClientRect(), y = [0, m.height], b = Bf(y, p ? [n, r] : [r, n]);
      return d.current = m, b(h - m.top);
    }
    return /* @__PURE__ */ v.jsx(
      i0,
      {
        scope: t.__scopeSlider,
        startEdge: p ? "bottom" : "top",
        endEdge: p ? "top" : "bottom",
        size: "height",
        direction: p ? 1 : -1,
        children: /* @__PURE__ */ v.jsx(
          s0,
          {
            "data-orientation": "vertical",
            ...l,
            ref: f,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const m = g(h.clientY);
              i?.(m);
            },
            onSlideMove: (h) => {
              const m = g(h.clientY);
              a?.(m);
            },
            onSlideEnd: () => {
              d.current = void 0, s?.();
            },
            onStepKeyDown: (h) => {
              const y = r0[p ? "from-bottom" : "from-top"].includes(h.key);
              c?.({ event: h, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), s0 = S.forwardRef(
  (t, e) => {
    const {
      __scopeSlider: r,
      onSlideStart: n,
      onSlideMove: o,
      onSlideEnd: i,
      onHomeKeyDown: a,
      onEndKeyDown: s,
      onStepKeyDown: c,
      ...l
    } = t, u = uc(Vo, r);
    return /* @__PURE__ */ v.jsx(
      ut.span,
      {
        ...l,
        ref: e,
        onKeyDown: rt(t.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (s(f), f.preventDefault()) : t0.concat(e0).includes(f.key) && (c(f), f.preventDefault());
        }),
        onPointerDown: rt(t.onPointerDown, (f) => {
          const d = f.target;
          d.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(d) ? d.focus() : n(f);
        }),
        onPointerMove: rt(t.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && o(f);
        }),
        onPointerUp: rt(t.onPointerUp, (f) => {
          const d = f.target;
          d.hasPointerCapture(f.pointerId) && (d.releasePointerCapture(f.pointerId), i(f));
        })
      }
    );
  }
), c0 = "SliderTrack", l0 = S.forwardRef(
  (t, e) => {
    const { __scopeSlider: r, ...n } = t, o = uc(c0, r);
    return /* @__PURE__ */ v.jsx(
      ut.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...n,
        ref: e
      }
    );
  }
);
l0.displayName = c0;
var Zl = "SliderRange", u0 = S.forwardRef(
  (t, e) => {
    const { __scopeSlider: r, ...n } = t, o = uc(Zl, r), i = a0(Zl, r), a = S.useRef(null), s = wt(e, a), c = o.values.length, l = o.values.map(
      (d) => p0(d, o.min, o.max)
    ), u = c > 1 ? Math.min(...l) : 0, f = 100 - Math.max(...l);
    return /* @__PURE__ */ v.jsx(
      ut.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: s,
        style: {
          ...t.style,
          [i.startEdge]: u + "%",
          [i.endEdge]: f + "%"
        }
      }
    );
  }
);
u0.displayName = Zl;
var Jl = "SliderThumb", f0 = S.forwardRef(
  (t, e) => {
    const r = z2(t.__scopeSlider), [n, o] = S.useState(null), i = wt(e, (s) => o(s)), a = S.useMemo(
      () => n ? r().findIndex((s) => s.ref.current === n) : -1,
      [r, n]
    );
    return /* @__PURE__ */ v.jsx(H2, { ...t, ref: i, index: a });
  }
), H2 = S.forwardRef(
  (t, e) => {
    const { __scopeSlider: r, index: n, name: o, ...i } = t, a = uc(Jl, r), s = a0(Jl, r), [c, l] = S.useState(null), u = wt(e, (x) => l(x)), f = c ? a.form || !!c.closest("form") : !0, d = Df(c), p = a.values[n], g = p === void 0 ? 0 : p0(p, a.min, a.max), h = X2(n, a.values.length), m = d?.[s.size], y = m ? K2(m, g, s.direction) : 0;
    return S.useEffect(() => {
      if (c)
        return a.thumbs.add(c), () => {
          a.thumbs.delete(c);
        };
    }, [c, a.thumbs]), /* @__PURE__ */ v.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${g}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ v.jsx(Kl.ItemSlot, { scope: t.__scopeSlider, children: /* @__PURE__ */ v.jsx(
            ut.span,
            {
              role: "slider",
              "aria-label": t["aria-label"] || h,
              "aria-valuemin": a.min,
              "aria-valuenow": p,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...i,
              ref: u,
              style: p === void 0 ? { display: "none" } : t.style,
              onFocus: rt(t.onFocus, () => {
                a.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          f && /* @__PURE__ */ v.jsx(
            d0,
            {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: p
            },
            n
          )
        ]
      }
    );
  }
);
f0.displayName = Jl;
var Y2 = "RadioBubbleInput", d0 = S.forwardRef(
  ({ __scopeSlider: t, value: e, ...r }, n) => {
    const o = S.useRef(null), i = wt(o, n), a = jf(e);
    return S.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
      if (a !== e && u) {
        const f = new Event("input", { bubbles: !0 });
        u.call(s, e), s.dispatchEvent(f);
      }
    }, [a, e]), /* @__PURE__ */ v.jsx(
      ut.input,
      {
        style: { display: "none" },
        ...r,
        ref: i,
        defaultValue: e
      }
    );
  }
);
d0.displayName = Y2;
function U2(t = [], e, r) {
  const n = [...t];
  return n[r] = e, n.sort((o, i) => o - i);
}
function p0(t, e, r) {
  const i = 100 / (r - e) * (t - e);
  return Wi(i, [0, 100]);
}
function X2(t, e) {
  return e > 2 ? `Value ${t + 1} of ${e}` : e === 2 ? ["Minimum", "Maximum"][t] : void 0;
}
function q2(t, e) {
  if (t.length === 1) return 0;
  const r = t.map((o) => Math.abs(o - e)), n = Math.min(...r);
  return r.indexOf(n);
}
function K2(t, e, r) {
  const n = t / 2, i = Bf([0, 50], [0, n]);
  return (n - i(e) * r) * r;
}
function Z2(t) {
  return t.slice(0, -1).map((e, r) => t[r + 1] - e);
}
function J2(t, e) {
  if (e > 0) {
    const r = Z2(t);
    return Math.min(...r) >= e;
  }
  return !0;
}
function Bf(t, e) {
  return (r) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (r - t[0]);
  };
}
function Q2(t) {
  return (String(t).split(".")[1] || "").length;
}
function tR(t, e) {
  const r = Math.pow(10, e);
  return Math.round(t * r) / r;
}
var eR = o0, rR = l0, nR = u0, oR = f0;
function Cs({
  className: t,
  defaultValue: e,
  value: r,
  min: n = 0,
  max: o = 100,
  ...i
}) {
  const a = S.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(e) ? e : [n, o],
    [r, e, n, o]
  );
  return /* @__PURE__ */ v.jsxs(
    eR,
    {
      "data-slot": "slider",
      defaultValue: e,
      value: r,
      min: n,
      max: o,
      className: bt(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ v.jsx(
          rR,
          {
            "data-slot": "slider-track",
            className: bt(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ v.jsx(
              nR,
              {
                "data-slot": "slider-range",
                className: bt(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: a.length }, (s, c) => /* @__PURE__ */ v.jsx(
          oR,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          c
        ))
      ]
    }
  );
}
const iR = [
  { value: "to right", label: "Left to Right" },
  { value: "to left", label: "Right to Left" },
  { value: "to bottom", label: "Top to Bottom" },
  { value: "to top", label: "Bottom to Top" },
  { value: "to bottom right", label: "Top Left to Bottom Right" },
  { value: "to bottom left", label: "Top Right to Bottom Left" },
  { value: "to top right", label: "Bottom Left to Top Right" },
  { value: "to top left", label: "Bottom Right to Top Left" }
], rh = [
  "linear-gradient(to right, #1a2b3c, #0f172a)",
  // Deep blue gradient
  "linear-gradient(to right, #111827, #1f2937)",
  // Deep gray-blue gradient
  "linear-gradient(to right, #0f172a, #312e81)",
  // Blue-purple gradient
  "linear-gradient(to right, #0c0a09, #1c1917)",
  // Dark black gradient
  "linear-gradient(to right, #134e5e, #71b280)",
  // Deep teal gradient
  "linear-gradient(to right, #000428, #004e92)",
  // Deep blue gradient
  "linear-gradient(to bottom, #0f2027, #203a43)",
  // Deep teal-gray gradient
  "linear-gradient(to bottom right, #16222a, #3a6073)",
  // Deep blue-gray gradient
  "radial-gradient(circle, #16222a 0%, #3a6073 100%)",
  // Radial deep blue-gray gradient
  "radial-gradient(circle, #0f2027 0%, #203a43 100%)",
  // Radial deep teal-gray gradient
  "radial-gradient(circle, #000428 0%, #004e92 100%)",
  // Radial deep blue gradient
  "radial-gradient(circle, #134e5e 0%, #71b280 100%)"
  // Radial deep teal gradient
], aR = [
  "#0F172A",
  // Deep blue
  "#1E293B",
  // Deep blue-gray
  "#111827",
  // Deep gray-blue
  "#1F2937",
  // Deep gray
  "#0C0A09",
  // Deep black
  "#0E7490",
  // Teal
  "#0284C7",
  // Blue
  "#1D4ED8",
  // Indigo
  "#4338CA",
  // Purple
  "#7E22CE",
  // Deep purple
  "#0F766E",
  // Deep teal
  "#0369A1"
  // Deep blue
], sR = () => {
  const t = It(), [e, r] = Bt("solid"), [n, o] = Bt("#FFFFFF"), [i, a] = Bt(["#ff9a9e", "#fad0c4"]), [s, c] = Bt("to right"), [l, u] = Bt([0, 100]);
  Ht(() => {
    if (t.json?.theme) {
      const h = t.json.theme.backgroundColor || "#FFFFFF";
      if (h.includes("gradient")) {
        if (h.includes("linear-gradient")) {
          r("linear-gradient");
          const m = h.match(/linear-gradient\(([^,]+),/);
          m && m[1] && c(m[1].trim());
          const y = h.match(/#[a-fA-F0-9]{3,6}/g);
          y && y.length >= 2 && a([y[0], y[1]]);
          const x = h.match(/(\d+)%/g);
          x && x.length >= 2 && u([
            parseInt(x[0], 10),
            parseInt(x[1], 10)
          ]);
        } else if (h.includes("radial-gradient")) {
          r("radial-gradient");
          const m = h.match(/#[a-fA-F0-9]{3,6}/g);
          m && m.length >= 2 && a([m[0], m[1]]);
          const y = h.match(/(\d+)%/g);
          y && y.length >= 2 && u([
            parseInt(y[0], 10),
            parseInt(y[1], 10)
          ]);
        }
      } else
        r("solid"), o(h);
    }
  }, [t.json?.theme]);
  const f = () => e === "solid" ? n : e === "linear-gradient" ? `linear-gradient(${s}, ${i[0]} ${l[0]}%, ${i[1]} ${l[1]}%)` : e === "radial-gradient" ? `radial-gradient(circle, ${i[0]} ${l[0]}%, ${i[1]} ${l[1]}%)` : n, d = () => {
    if (t.json) {
      const h = f();
      t.update({
        theme: {
          ...t.json.theme,
          backgroundColor: h
        }
      });
    }
  }, p = (h) => {
    r("solid"), o(h), t.json && t.update({
      theme: {
        ...t.json.theme,
        backgroundColor: h
      }
    });
  }, g = (h) => {
    if (h.includes("linear-gradient") ? r("linear-gradient") : h.includes("radial-gradient") && r("radial-gradient"), h.includes("linear-gradient")) {
      const y = h.match(/linear-gradient\(([^,]+),/);
      y && y[1] && c(y[1].trim());
    }
    const m = h.match(/#[a-fA-F0-9]{3,6}/g);
    m && m.length >= 2 && a([m[0], m[1]]), t.json && t.update({
      theme: {
        ...t.json.theme,
        backgroundColor: h
      }
    });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold", children: "Background" }),
    /* @__PURE__ */ v.jsxs(jg, { defaultValue: e, onValueChange: (h) => r(h), children: [
      /* @__PURE__ */ v.jsxs(xf, { className: "grid w-full grid-cols-3", children: [
        /* @__PURE__ */ v.jsx(Xr, { value: "solid", children: "Solid " }),
        /* @__PURE__ */ v.jsx(Xr, { value: "linear-gradient", children: "Linear " }),
        /* @__PURE__ */ v.jsx(Xr, { value: "radial-gradient", children: "Radial " })
      ] }),
      /* @__PURE__ */ v.jsxs(qr, { value: "solid", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Preset Colors" }),
          /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-6 gap-2", children: aR.map((h, m) => /* @__PURE__ */ v.jsx(
            "div",
            {
              className: "w-8 h-8 rounded-md cursor-pointer border border-gray-300 flex items-center justify-center",
              style: { backgroundColor: h },
              onClick: () => p(h),
              children: e === "solid" && n === h && /* @__PURE__ */ v.jsx("div", { className: "w-2 h-2 rounded-full bg-primary" })
            },
            m
          )) })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Custom Color" }),
          /* @__PURE__ */ v.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ v.jsx(
              re,
              {
                type: "color",
                value: n,
                onChange: (h) => o(h.target.value),
                className: "w-12 h-10 p-1"
              }
            ),
            /* @__PURE__ */ v.jsx(
              re,
              {
                type: "text",
                value: n,
                onChange: (h) => o(h.target.value),
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ v.jsx(Me, { onClick: () => p(n), children: "Apply" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(qr, { value: "linear-gradient", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Preset Gradients" }),
          /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-3 gap-2", children: rh.filter((h) => h.includes("linear-gradient")).map((h, m) => /* @__PURE__ */ v.jsx(
            "div",
            {
              className: "h-12 rounded-md cursor-pointer border border-gray-300",
              style: { background: h },
              onClick: () => g(h)
            },
            m
          )) })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Gradient Direction" }),
          /* @__PURE__ */ v.jsxs(Fn, { value: s, onValueChange: c, children: [
            /* @__PURE__ */ v.jsx(an, { children: /* @__PURE__ */ v.jsx(_o, { placeholder: "Select gradient direction" }) }),
            /* @__PURE__ */ v.jsx(sn, { children: iR.map((h) => /* @__PURE__ */ v.jsx(fe, { value: h.value, children: h.label }, h.value)) })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Gradient Colors" }),
          /* @__PURE__ */ v.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ v.jsx(
              re,
              {
                type: "color",
                value: i[0],
                onChange: (h) => a([h.target.value, i[1]]),
                className: "w-12 h-10 p-1"
              }
            ),
            /* @__PURE__ */ v.jsx(
              re,
              {
                type: "color",
                value: i[1],
                onChange: (h) => a([i[0], h.target.value]),
                className: "w-12 h-10 p-1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsxs(Jt, { children: [
            "Gradient Position (",
            l[0],
            "% - ",
            l[1],
            "%)"
          ] }),
          /* @__PURE__ */ v.jsx(
            Cs,
            {
              value: l,
              min: 0,
              max: 100,
              step: 1,
              onValueChange: u,
              className: "my-4"
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(Me, { onClick: d, children: "Apply Gradient" })
      ] }),
      /* @__PURE__ */ v.jsxs(qr, { value: "radial-gradient", className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Preset Gradients" }),
          /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-3 gap-2", children: rh.filter((h) => h.includes("radial-gradient")).map((h, m) => /* @__PURE__ */ v.jsx(
            "div",
            {
              className: "h-12 rounded-md cursor-pointer border border-gray-300",
              style: { background: h },
              onClick: () => g(h)
            },
            m
          )) })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsx(Jt, { children: "Gradient Colors" }),
          /* @__PURE__ */ v.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ v.jsx(
              re,
              {
                type: "color",
                value: i[0],
                onChange: (h) => a([h.target.value, i[1]]),
                className: "w-12 h-10 p-1"
              }
            ),
            /* @__PURE__ */ v.jsx(
              re,
              {
                type: "color",
                value: i[1],
                onChange: (h) => a([i[0], h.target.value]),
                className: "w-12 h-10 p-1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ v.jsxs(Jt, { children: [
            "Gradient Position (",
            l[0],
            "% - ",
            l[1],
            "%)"
          ] }),
          /* @__PURE__ */ v.jsx(
            Cs,
            {
              value: l,
              min: 0,
              max: 100,
              step: 1,
              onValueChange: u,
              className: "my-4"
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx(Me, { onClick: d, children: "Apply Gradient" })
      ] })
    ] })
  ] });
}, cR = (t) => {
  const { type: e } = t;
  return {
    id: `${e}-${mo().substring(0, 8)}`,
    type: e,
    title: `New ${e} Chart`,
    position: {
      top: 100,
      left: 100,
      width: 320,
      height: 260,
      ...t?.defaultProps?.position || {}
    }
  };
}, lR = ({ icon: t }) => {
  const e = t?.startsWith("data:") || t?.startsWith("http");
  return /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center text-xl", children: e ? (
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ v.jsx("img", { src: t, alt: "Chart icon", className: "w-10 h-10 object-contain" })
  ) : /* @__PURE__ */ v.jsx("span", { className: "w-10 h-10 text-lg inline-flex justify-center items-center", children: t }) });
}, uR = ({
  chart: t,
  onDragStart: e,
  onClick: r
}) => /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: "bg-gray-100 rounded-lg p-1.5 cursor-move hover:bg-gray-200 transition-colors border border-gray-200",
    draggable: !0,
    onDragStart: (n) => e(n, t),
    onClick: () => r(t),
    children: [
      /* @__PURE__ */ v.jsx(lR, { icon: t.icon }),
      /* @__PURE__ */ v.jsxs("div", { className: "mt-1 text-center", children: [
        /* @__PURE__ */ v.jsx("div", { className: "font-medium text-sm leading-tight", children: t.title }),
        /* @__PURE__ */ v.jsx("div", { className: "text-xs text-gray-500 mt-0.5 line-clamp-1", children: t.description })
      ] })
    ]
  },
  t.type
), fR = () => {
  const t = wr(), { addNode: e } = It(), r = t.registry.all(), n = (i, a) => {
    i.dataTransfer.setData("chart-type", a.type);
  }, o = (i) => {
    const a = cR(i);
    e(a);
  };
  return /* @__PURE__ */ v.jsxs("div", { children: [
    /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold mb-3", children: "Charts" }),
    /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 gap-2", children: r.map((i) => /* @__PURE__ */ v.jsx(uR, { chart: i, onDragStart: n, onClick: o }, i.type)) })
  ] });
};
dn(
  {
    id: "charts",
    title: "Charts",
    icon: lC,
    render: () => /* @__PURE__ */ v.jsx(fR, {}),
    order: 1
  },
  Sr.Sidebar
);
const Ui = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: bt(
      "rounded-xl border bg-card text-card-foreground shadow",
      t
    ),
    ...e
  }
));
Ui.displayName = "Card";
const h0 = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: bt("flex flex-col space-y-1.5 p-6", t),
    ...e
  }
));
h0.displayName = "CardHeader";
const v0 = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: bt("font-semibold leading-none tracking-tight", t),
    ...e
  }
));
v0.displayName = "CardTitle";
const dR = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: bt("text-sm text-muted-foreground", t),
    ...e
  }
));
dR.displayName = "CardDescription";
const Xi = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx("div", { ref: r, className: bt("p-6 pt-0", t), ...e }));
Xi.displayName = "CardContent";
const pR = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  "div",
  {
    ref: r,
    className: bt("flex items-center p-6 pt-0", t),
    ...e
  }
));
pR.displayName = "CardFooter";
const li = ({ children: t, className: e = "" }) => /* @__PURE__ */ v.jsx("span", { className: `animate-pulse bg-gray-200 h-full w-full rounded ${e}`, children: t ? /* @__PURE__ */ v.jsx("span", { className: "opacity-0", children: t }) : /* @__PURE__ */ v.jsx("span", { className: "opacity-0", children: " " }) });
function hR({ src: t, alt: e, className: r, ...n }) {
  const [o, i] = Bt(!0);
  return /* @__PURE__ */ v.jsxs("div", { className: "relative w-full h-full overflow-hidden bg-muted", children: [
    o && /* @__PURE__ */ v.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ v.jsx(li, { className: "w-full h-full" }) }),
    /* @__PURE__ */ v.jsx(
      "img",
      {
        src: t,
        alt: e,
        className: bt(
          r,
          "transition-opacity duration-300",
          o ? "opacity-0" : "opacity-100"
        ),
        onLoad: () => i(!1),
        ...n
      }
    )
  ] });
}
const vR = async (t, e = 12) => {
  await new Promise((n) => setTimeout(n, 1e3));
  const r = t * e + 1;
  return Array.from({ length: e }, (n, o) => ({
    id: r + o,
    title: `卡片标题 ${r + o}`,
    image: "/placeholder.svg?height=200&width=300",
    description: `这是第 ${r + o} 张卡片的描述内容`
  }));
};
function gR({ data: t = [], fetchMore: e, itemsPerPage: r = 12 }) {
  const [n, o] = Bt([]), [i, a] = Bt(!1), [s, c] = Bt(!0), [l, u] = Bt(0), f = er(null), d = er([]), p = er(!1), g = er(!0), h = er(0);
  Ht(() => {
    d.current = n, p.current = i, g.current = s, h.current = l;
  }, [n, i, s, l]);
  const m = Rn(async () => {
    if (!(p.current || !g.current)) {
      a(!0);
      try {
        if (t.length > 0 && !e)
          if (d.current.length >= t.length)
            c(!1);
          else {
            const y = h.current * r, x = Math.min(y + r, t.length), b = t.slice(y, x);
            o((w) => [...w, ...b]), u((w) => w + 1), x >= t.length && c(!1);
          }
        else {
          const x = await (e || vR)(h.current, r);
          x.length === 0 ? c(!1) : (o((b) => [...b, ...x]), u((b) => b + 1));
        }
      } catch (y) {
        console.error("加载卡片失败:", y);
      } finally {
        a(!1);
      }
    }
  }, [t, e, r]);
  return Ht(() => {
    o([]), u(0), c(!0), a(!1), m();
  }, [t, e, r]), Ht(() => {
    const y = new IntersectionObserver(
      (x) => {
        x[0].isIntersecting && g.current && !p.current && m();
      },
      { threshold: 0.1 }
    );
    return f.current && y.observe(f.current), () => y.disconnect();
  }, []), /* @__PURE__ */ v.jsxs("div", { className: "", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
      n.map((y, x) => /* @__PURE__ */ v.jsxs(Ui, { className: "overflow-hidden hover:shadow transition-shadow duration-300 rounded shadow-none", children: [
        /* @__PURE__ */ v.jsx("div", { className: "aspect-video relative overflow-hidden", children: /* @__PURE__ */ v.jsx(
          hR,
          {
            src: y.imageUrl || y.image || "/placeholder.svg",
            alt: y.alt || y.title,
            className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          }
        ) }),
        /* @__PURE__ */ v.jsxs(Xi, { className: "p-2", children: [
          /* @__PURE__ */ v.jsx("h3", { className: "font-semibold text-sm line-clamp-2", children: y.title }),
          y.description && /* @__PURE__ */ v.jsx("p", { className: "text-muted-foreground text-xs mt-2 line-clamp-3", children: y.description })
        ] })
      ] }, x)),
      i && Array.from({ length: 8 }).map((y, x) => /* @__PURE__ */ v.jsxs(Ui, { className: "overflow-hidden", children: [
        /* @__PURE__ */ v.jsx(li, { className: "aspect-video w-full" }),
        /* @__PURE__ */ v.jsxs(Xi, { className: "p-4", children: [
          /* @__PURE__ */ v.jsx(li, { className: "h-6 w-3/4 mb-2" }),
          /* @__PURE__ */ v.jsx(li, { className: "h-4 w-full mb-1" }),
          /* @__PURE__ */ v.jsx(li, { className: "h-4 w-2/3" })
        ] })
      ] }, `skeleton-${x}`))
    ] }),
    /* @__PURE__ */ v.jsxs("div", { ref: f, className: "h-10 flex items-center justify-center mt-8", children: [
      i && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ v.jsx("div", { className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" }),
        /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "加载中..." })
      ] }),
      !s && n.length > 0 && /* @__PURE__ */ v.jsx("p", { className: "text-muted-foreground" })
    ] }),
    n.length === 0 && !i && /* @__PURE__ */ v.jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ v.jsx("p", { className: "text-muted-foreground text-lg", children: "暂无数据" }) })
  ] });
}
const mR = () => {
  const t = [
    {
      id: "example1",
      title: "Design example 1",
      imageUrl: "https://camo.githubusercontent.com/2c69cf44f322bcae0ea6559791f80b5b1168e044bc8d441a4fbdc09fd3cb9087/68747470733a2f2f64656d6f2e6569756e2e6e65742f6769662f3030312e676966",
      alt: "Design example 1"
    },
    {
      id: "example2",
      title: "Design example 2",
      imageUrl: "https://camo.githubusercontent.com/dc4de7fb69dec4bc93b4b1bbf37f030df381be1e570493b26f1a4d58d9bd2980/68747470733a2f2f64656d6f2e6569756e2e6e65742f6769662f3030322e676966",
      alt: "Design example 2"
    }
  ];
  return /* @__PURE__ */ v.jsxs("div", { children: [
    /* @__PURE__ */ v.jsx("header", { className: "sticky top-0 bg-background z-10", children: /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold mb-4", children: "Design" }) }),
    /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(gR, { data: t }) })
  ] });
};
dn(
  {
    id: "design",
    title: "Design",
    icon: lg,
    render: () => /* @__PURE__ */ v.jsx(mR, {}),
    order: 10
  },
  Sr.Sidebar
);
const yR = mf(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function xR({ className: t, variant: e, ...r }) {
  return /* @__PURE__ */ v.jsx("div", { className: bt(yR({ variant: e }), t), ...r });
}
var Ql = ["Enter", " "], bR = ["ArrowDown", "PageUp", "Home"], g0 = ["ArrowUp", "PageDown", "End"], wR = [...bR, ...g0], SR = {
  ltr: [...Ql, "ArrowRight"],
  rtl: [...Ql, "ArrowLeft"]
}, CR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ca = "Menu", [qi, ER, _R] = Js(ca), [$n, m0] = Ye(ca, [
  _R,
  Go,
  Qs
]), fc = Go(), y0 = Qs(), [TR, Vn] = $n(ca), [RR, la] = $n(ca), x0 = (t) => {
  const { __scopeMenu: e, open: r = !1, children: n, dir: o, onOpenChange: i, modal: a = !0 } = t, s = fc(e), [c, l] = S.useState(null), u = S.useRef(!1), f = de(i), d = Bo(o);
  return S.useEffect(() => {
    const p = () => {
      u.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => u.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ v.jsx(Of, { ...s, children: /* @__PURE__ */ v.jsx(
    TR,
    {
      scope: e,
      open: r,
      onOpenChange: f,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ v.jsx(
        RR,
        {
          scope: e,
          onClose: S.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: u,
          dir: d,
          modal: a,
          children: n
        }
      )
    }
  ) });
};
x0.displayName = ca;
var DR = "MenuAnchor", Lf = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t, o = fc(r);
    return /* @__PURE__ */ v.jsx(Nf, { ...o, ...n, ref: e });
  }
);
Lf.displayName = DR;
var zf = "MenuPortal", [MR, b0] = $n(zf, {
  forceMount: void 0
}), w0 = (t) => {
  const { __scopeMenu: e, forceMount: r, children: n, container: o } = t, i = Vn(zf, e);
  return /* @__PURE__ */ v.jsx(MR, { scope: e, forceMount: r, children: /* @__PURE__ */ v.jsx(Ne, { present: r || i.open, children: /* @__PURE__ */ v.jsx(ic, { asChild: !0, container: o, children: n }) }) });
};
w0.displayName = zf;
var $e = "MenuContent", [PR, Gf] = $n($e), S0 = S.forwardRef(
  (t, e) => {
    const r = b0($e, t.__scopeMenu), { forceMount: n = r.forceMount, ...o } = t, i = Vn($e, t.__scopeMenu), a = la($e, t.__scopeMenu);
    return /* @__PURE__ */ v.jsx(qi.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ v.jsx(Ne, { present: n || i.open, children: /* @__PURE__ */ v.jsx(qi.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ v.jsx(OR, { ...o, ref: e }) : /* @__PURE__ */ v.jsx(NR, { ...o, ref: e }) }) }) });
  }
), OR = S.forwardRef(
  (t, e) => {
    const r = Vn($e, t.__scopeMenu), n = S.useRef(null), o = wt(e, n);
    return S.useEffect(() => {
      const i = n.current;
      if (i) return lm(i);
    }, []), /* @__PURE__ */ v.jsx(
      $f,
      {
        ...t,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: rt(
          t.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), NR = S.forwardRef((t, e) => {
  const r = Vn($e, t.__scopeMenu);
  return /* @__PURE__ */ v.jsx(
    $f,
    {
      ...t,
      ref: e,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), kR = /* @__PURE__ */ Co("MenuContent.ScrollLock"), $f = S.forwardRef(
  (t, e) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: p,
      disableOutsideScroll: g,
      ...h
    } = t, m = Vn($e, r), y = la($e, r), x = fc(r), b = y0(r), w = ER(r), [_, E] = S.useState(null), C = S.useRef(null), T = wt(e, C, m.onContentChange), R = S.useRef(0), D = S.useRef(""), N = S.useRef(0), M = S.useRef(null), O = S.useRef("right"), k = S.useRef(0), F = g ? If : S.Fragment, $ = g ? { as: kR, allowPinchZoom: !0 } : void 0, V = (z) => {
      const j = D.current + z, B = w().filter((W) => !W.disabled), Y = document.activeElement, K = B.find((W) => W.ref.current === Y)?.textValue, X = B.map((W) => W.textValue), H = HR(X, j, K), Q = B.find((W) => W.textValue === H)?.ref.current;
      (function W(q) {
        D.current = q, window.clearTimeout(R.current), q !== "" && (R.current = window.setTimeout(() => W(""), 1e3));
      })(j), Q && setTimeout(() => Q.focus());
    };
    S.useEffect(() => () => window.clearTimeout(R.current), []), Bg();
    const L = S.useCallback((z) => O.current === M.current?.side && UR(z, M.current?.area), []);
    return /* @__PURE__ */ v.jsx(
      PR,
      {
        scope: r,
        searchRef: D,
        onItemEnter: S.useCallback(
          (z) => {
            L(z) && z.preventDefault();
          },
          [L]
        ),
        onItemLeave: S.useCallback(
          (z) => {
            L(z) || (C.current?.focus(), E(null));
          },
          [L]
        ),
        onTriggerLeave: S.useCallback(
          (z) => {
            L(z) && z.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: N,
        onPointerGraceIntentChange: S.useCallback((z) => {
          M.current = z;
        }, []),
        children: /* @__PURE__ */ v.jsx(F, { ...$, children: /* @__PURE__ */ v.jsx(
          bf,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: rt(i, (z) => {
              z.preventDefault(), C.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ v.jsx(
              ec,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: d,
                onDismiss: p,
                children: /* @__PURE__ */ v.jsx(
                  bg,
                  {
                    asChild: !0,
                    ...b,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: rt(c, (z) => {
                      y.isUsingKeyboardRef.current || z.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ v.jsx(
                      kf,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": B0(m.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...x,
                        ...h,
                        ref: T,
                        style: { outline: "none", ...h.style },
                        onKeyDown: rt(h.onKeyDown, (z) => {
                          const B = z.target.closest("[data-radix-menu-content]") === z.currentTarget, Y = z.ctrlKey || z.altKey || z.metaKey, K = z.key.length === 1;
                          B && (z.key === "Tab" && z.preventDefault(), !Y && K && V(z.key));
                          const X = C.current;
                          if (z.target !== X || !wR.includes(z.key)) return;
                          z.preventDefault();
                          const Q = w().filter((W) => !W.disabled).map((W) => W.ref.current);
                          g0.includes(z.key) && Q.reverse(), VR(Q);
                        }),
                        onBlur: rt(t.onBlur, (z) => {
                          z.currentTarget.contains(z.target) || (window.clearTimeout(R.current), D.current = "");
                        }),
                        onPointerMove: rt(
                          t.onPointerMove,
                          Ki((z) => {
                            const j = z.target, B = k.current !== z.clientX;
                            if (z.currentTarget.contains(j) && B) {
                              const Y = z.clientX > k.current ? "right" : "left";
                              O.current = Y, k.current = z.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
S0.displayName = $e;
var AR = "MenuGroup", Vf = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t;
    return /* @__PURE__ */ v.jsx(ut.div, { role: "group", ...n, ref: e });
  }
);
Vf.displayName = AR;
var jR = "MenuLabel", C0 = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t;
    return /* @__PURE__ */ v.jsx(ut.div, { ...n, ref: e });
  }
);
C0.displayName = jR;
var Es = "MenuItem", nh = "menu.itemSelect", dc = S.forwardRef(
  (t, e) => {
    const { disabled: r = !1, onSelect: n, ...o } = t, i = S.useRef(null), a = la(Es, t.__scopeMenu), s = Gf(Es, t.__scopeMenu), c = wt(e, i), l = S.useRef(!1), u = () => {
      const f = i.current;
      if (!r && f) {
        const d = new CustomEvent(nh, { bubbles: !0, cancelable: !0 });
        f.addEventListener(nh, (p) => n?.(p), { once: !0 }), dg(f, d), d.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ v.jsx(
      E0,
      {
        ...o,
        ref: c,
        disabled: r,
        onClick: rt(t.onClick, u),
        onPointerDown: (f) => {
          t.onPointerDown?.(f), l.current = !0;
        },
        onPointerUp: rt(t.onPointerUp, (f) => {
          l.current || f.currentTarget?.click();
        }),
        onKeyDown: rt(t.onKeyDown, (f) => {
          const d = s.searchRef.current !== "";
          r || d && f.key === " " || Ql.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
dc.displayName = Es;
var E0 = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: o, ...i } = t, a = Gf(Es, r), s = y0(r), c = S.useRef(null), l = wt(e, c), [u, f] = S.useState(!1), [d, p] = S.useState("");
    return S.useEffect(() => {
      const g = c.current;
      g && p((g.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ v.jsx(
      qi.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: o ?? d,
        children: /* @__PURE__ */ v.jsx(wg, { asChild: !0, ...s, focusable: !n, children: /* @__PURE__ */ v.jsx(
          ut.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...i,
            ref: l,
            onPointerMove: rt(
              t.onPointerMove,
              Ki((g) => {
                n ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: rt(
              t.onPointerLeave,
              Ki((g) => a.onItemLeave(g))
            ),
            onFocus: rt(t.onFocus, () => f(!0)),
            onBlur: rt(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), IR = "MenuCheckboxItem", _0 = S.forwardRef(
  (t, e) => {
    const { checked: r = !1, onCheckedChange: n, ...o } = t;
    return /* @__PURE__ */ v.jsx(P0, { scope: t.__scopeMenu, checked: r, children: /* @__PURE__ */ v.jsx(
      dc,
      {
        role: "menuitemcheckbox",
        "aria-checked": _s(r) ? "mixed" : r,
        ...o,
        ref: e,
        "data-state": Hf(r),
        onSelect: rt(
          o.onSelect,
          () => n?.(_s(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
_0.displayName = IR;
var T0 = "MenuRadioGroup", [FR, BR] = $n(
  T0,
  { value: void 0, onValueChange: () => {
  } }
), R0 = S.forwardRef(
  (t, e) => {
    const { value: r, onValueChange: n, ...o } = t, i = de(n);
    return /* @__PURE__ */ v.jsx(FR, { scope: t.__scopeMenu, value: r, onValueChange: i, children: /* @__PURE__ */ v.jsx(Vf, { ...o, ref: e }) });
  }
);
R0.displayName = T0;
var D0 = "MenuRadioItem", M0 = S.forwardRef(
  (t, e) => {
    const { value: r, ...n } = t, o = BR(D0, t.__scopeMenu), i = r === o.value;
    return /* @__PURE__ */ v.jsx(P0, { scope: t.__scopeMenu, checked: i, children: /* @__PURE__ */ v.jsx(
      dc,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...n,
        ref: e,
        "data-state": Hf(i),
        onSelect: rt(
          n.onSelect,
          () => o.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
M0.displayName = D0;
var Wf = "MenuItemIndicator", [P0, LR] = $n(
  Wf,
  { checked: !1 }
), O0 = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, forceMount: n, ...o } = t, i = LR(Wf, r);
    return /* @__PURE__ */ v.jsx(
      Ne,
      {
        present: n || _s(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ v.jsx(
          ut.span,
          {
            ...o,
            ref: e,
            "data-state": Hf(i.checked)
          }
        )
      }
    );
  }
);
O0.displayName = Wf;
var zR = "MenuSeparator", N0 = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t;
    return /* @__PURE__ */ v.jsx(
      ut.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: e
      }
    );
  }
);
N0.displayName = zR;
var GR = "MenuArrow", k0 = S.forwardRef(
  (t, e) => {
    const { __scopeMenu: r, ...n } = t, o = fc(r);
    return /* @__PURE__ */ v.jsx(Af, { ...o, ...n, ref: e });
  }
);
k0.displayName = GR;
var $R = "MenuSub", [Vj, A0] = $n($R), ui = "MenuSubTrigger", j0 = S.forwardRef(
  (t, e) => {
    const r = Vn(ui, t.__scopeMenu), n = la(ui, t.__scopeMenu), o = A0(ui, t.__scopeMenu), i = Gf(ui, t.__scopeMenu), a = S.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, l = { __scopeMenu: t.__scopeMenu }, u = S.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return S.useEffect(() => u, [u]), S.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ v.jsx(Lf, { asChild: !0, ...l, children: /* @__PURE__ */ v.jsx(
      E0,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": o.contentId,
        "data-state": B0(r.open),
        ...t,
        ref: Ks(e, o.onTriggerChange),
        onClick: (f) => {
          t.onClick?.(f), !(t.disabled || f.defaultPrevented) && (f.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: rt(
          t.onPointerMove,
          Ki((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !t.disabled && !r.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: rt(
          t.onPointerLeave,
          Ki((f) => {
            u();
            const d = r.content?.getBoundingClientRect();
            if (d) {
              const p = r.content?.dataset.side, g = p === "right", h = g ? -5 : 5, m = d[g ? "left" : "right"], y = d[g ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + h, y: f.clientY },
                  { x: m, y: d.top },
                  { x: y, y: d.top },
                  { x: y, y: d.bottom },
                  { x: m, y: d.bottom }
                ],
                side: p
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(f), f.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: rt(t.onKeyDown, (f) => {
          const d = i.searchRef.current !== "";
          t.disabled || d && f.key === " " || SR[n.dir].includes(f.key) && (r.onOpenChange(!0), r.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
j0.displayName = ui;
var I0 = "MenuSubContent", F0 = S.forwardRef(
  (t, e) => {
    const r = b0($e, t.__scopeMenu), { forceMount: n = r.forceMount, ...o } = t, i = Vn($e, t.__scopeMenu), a = la($e, t.__scopeMenu), s = A0(I0, t.__scopeMenu), c = S.useRef(null), l = wt(e, c);
    return /* @__PURE__ */ v.jsx(qi.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ v.jsx(Ne, { present: n || i.open, children: /* @__PURE__ */ v.jsx(qi.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ v.jsx(
      $f,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          a.isUsingKeyboardRef.current && c.current?.focus(), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: rt(t.onFocusOutside, (u) => {
          u.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: rt(t.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: rt(t.onKeyDown, (u) => {
          const f = u.currentTarget.contains(u.target), d = CR[a.dir].includes(u.key);
          f && d && (i.onOpenChange(!1), s.trigger?.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
F0.displayName = I0;
function B0(t) {
  return t ? "open" : "closed";
}
function _s(t) {
  return t === "indeterminate";
}
function Hf(t) {
  return _s(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
function VR(t) {
  const e = document.activeElement;
  for (const r of t)
    if (r === e || (r.focus(), document.activeElement !== e)) return;
}
function WR(t, e) {
  return t.map((r, n) => t[(e + n) % t.length]);
}
function HR(t, e, r) {
  const o = e.length > 1 && Array.from(e).every((l) => l === e[0]) ? e[0] : e, i = r ? t.indexOf(r) : -1;
  let a = WR(t, Math.max(i, 0));
  o.length === 1 && (a = a.filter((l) => l !== r));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function YR(t, e) {
  const { x: r, y: n } = t;
  let o = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    const s = e[i], c = e[a], l = s.x, u = s.y, f = c.x, d = c.y;
    u > n != d > n && r < (f - l) * (n - u) / (d - u) + l && (o = !o);
  }
  return o;
}
function UR(t, e) {
  if (!e) return !1;
  const r = { x: t.clientX, y: t.clientY };
  return YR(r, e);
}
function Ki(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
var XR = x0, qR = Lf, KR = w0, ZR = S0, JR = Vf, QR = C0, tD = dc, eD = _0, rD = R0, nD = M0, oD = O0, iD = N0, aD = k0, sD = j0, cD = F0, pc = "DropdownMenu", [lD, Wj] = Ye(
  pc,
  [m0]
), xe = m0(), [uD, L0] = lD(pc), z0 = (t) => {
  const {
    __scopeDropdownMenu: e,
    children: r,
    dir: n,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = t, c = xe(e), l = S.useRef(null), [u, f] = kr({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: pc
  });
  return /* @__PURE__ */ v.jsx(
    uD,
    {
      scope: e,
      triggerId: Nr(),
      triggerRef: l,
      contentId: Nr(),
      open: u,
      onOpenChange: f,
      onOpenToggle: S.useCallback(() => f((d) => !d), [f]),
      modal: s,
      children: /* @__PURE__ */ v.jsx(XR, { ...c, open: u, onOpenChange: f, dir: n, modal: s, children: r })
    }
  );
};
z0.displayName = pc;
var G0 = "DropdownMenuTrigger", $0 = S.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...o } = t, i = L0(G0, r), a = xe(r);
    return /* @__PURE__ */ v.jsx(qR, { asChild: !0, ...a, children: /* @__PURE__ */ v.jsx(
      ut.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...o,
        ref: Ks(e, i.triggerRef),
        onPointerDown: rt(t.onPointerDown, (s) => {
          !n && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: rt(t.onKeyDown, (s) => {
          n || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
$0.displayName = G0;
var fD = "DropdownMenuPortal", V0 = (t) => {
  const { __scopeDropdownMenu: e, ...r } = t, n = xe(e);
  return /* @__PURE__ */ v.jsx(KR, { ...n, ...r });
};
V0.displayName = fD;
var W0 = "DropdownMenuContent", H0 = S.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, o = L0(W0, r), i = xe(r), a = S.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      ZR,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...n,
        ref: e,
        onCloseAutoFocus: rt(t.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: rt(t.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
          (!o.modal || u) && (a.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
H0.displayName = W0;
var dD = "DropdownMenuGroup", pD = S.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
    return /* @__PURE__ */ v.jsx(JR, { ...o, ...n, ref: e });
  }
);
pD.displayName = dD;
var hD = "DropdownMenuLabel", Y0 = S.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
    return /* @__PURE__ */ v.jsx(QR, { ...o, ...n, ref: e });
  }
);
Y0.displayName = hD;
var vD = "DropdownMenuItem", U0 = S.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
    return /* @__PURE__ */ v.jsx(tD, { ...o, ...n, ref: e });
  }
);
U0.displayName = vD;
var gD = "DropdownMenuCheckboxItem", X0 = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(eD, { ...o, ...n, ref: e });
});
X0.displayName = gD;
var mD = "DropdownMenuRadioGroup", yD = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(rD, { ...o, ...n, ref: e });
});
yD.displayName = mD;
var xD = "DropdownMenuRadioItem", q0 = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(nD, { ...o, ...n, ref: e });
});
q0.displayName = xD;
var bD = "DropdownMenuItemIndicator", K0 = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(oD, { ...o, ...n, ref: e });
});
K0.displayName = bD;
var wD = "DropdownMenuSeparator", Z0 = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(iD, { ...o, ...n, ref: e });
});
Z0.displayName = wD;
var SD = "DropdownMenuArrow", CD = S.forwardRef(
  (t, e) => {
    const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
    return /* @__PURE__ */ v.jsx(aD, { ...o, ...n, ref: e });
  }
);
CD.displayName = SD;
var ED = "DropdownMenuSubTrigger", J0 = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(sD, { ...o, ...n, ref: e });
});
J0.displayName = ED;
var _D = "DropdownMenuSubContent", Q0 = S.forwardRef((t, e) => {
  const { __scopeDropdownMenu: r, ...n } = t, o = xe(r);
  return /* @__PURE__ */ v.jsx(
    cD,
    {
      ...o,
      ...n,
      ref: e,
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Q0.displayName = _D;
var TD = z0, RD = $0, DD = V0, ty = H0, ey = Y0, ry = U0, ny = X0, oy = q0, iy = K0, ay = Z0, sy = J0, cy = Q0;
const hc = TD, vc = RD, MD = S.forwardRef(({ className: t, inset: e, children: r, ...n }, o) => /* @__PURE__ */ v.jsxs(
  sy,
  {
    ref: o,
    className: bt(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e && "pl-8",
      t
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ v.jsx(eg, { className: "ml-auto" })
    ]
  }
));
MD.displayName = sy.displayName;
const PD = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  cy,
  {
    ref: r,
    className: bt(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
PD.displayName = cy.displayName;
const ua = S.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) => /* @__PURE__ */ v.jsx(DD, { children: /* @__PURE__ */ v.jsx(
  ty,
  {
    ref: n,
    sideOffset: e,
    className: bt(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
ua.displayName = ty.displayName;
const Kr = S.forwardRef(({ className: t, inset: e, ...r }, n) => /* @__PURE__ */ v.jsx(
  ry,
  {
    ref: n,
    className: bt(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      e && "pl-8",
      t
    ),
    ...r
  }
));
Kr.displayName = ry.displayName;
const OD = S.forwardRef(({ className: t, children: e, checked: r, ...n }, o) => /* @__PURE__ */ v.jsxs(
  ny,
  {
    ref: o,
    className: bt(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(iy, { children: /* @__PURE__ */ v.jsx(vf, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
OD.displayName = ny.displayName;
const ND = S.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ v.jsxs(
  oy,
  {
    ref: n,
    className: bt(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(iy, { children: /* @__PURE__ */ v.jsx(ng, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
ND.displayName = oy.displayName;
const kD = S.forwardRef(({ className: t, inset: e, ...r }, n) => /* @__PURE__ */ v.jsx(
  ey,
  {
    ref: n,
    className: bt(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...r
  }
));
kD.displayName = ey.displayName;
const ly = S.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ v.jsx(
  ay,
  {
    ref: r,
    className: bt("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
ly.displayName = ay.displayName;
const fi = ({
  className: t,
  ...e
}) => /* @__PURE__ */ v.jsx(
  "span",
  {
    className: bt("ml-auto text-xs tracking-widest opacity-60", t),
    ...e
  }
);
fi.displayName = "DropdownMenuShortcut";
const AD = ({ layerId: t, duplicateLayer: e, deleteLayer: r }) => /* @__PURE__ */ v.jsxs(hc, { children: [
  /* @__PURE__ */ v.jsx(vc, { asChild: !0, children: /* @__PURE__ */ v.jsx(Me, { variant: "ghost", size: "sm", className: "h-6 w-6 p-0", onClick: (n) => n.stopPropagation(), children: /* @__PURE__ */ v.jsx(_C, { className: "h-3 w-3" }) }) }),
  /* @__PURE__ */ v.jsxs(ua, { align: "end", children: [
    /* @__PURE__ */ v.jsx(Kr, { onClick: () => e(t), children: "Duplicate" }),
    /* @__PURE__ */ v.jsxs(Kr, { onClick: () => r(t), className: "text-destructive", children: [
      /* @__PURE__ */ v.jsx(vE, { className: "mr-2 h-4 w-4" }),
      "Delete"
    ] })
  ] })
] }), jD = () => {
  const e = It().json?.docs?.[0]?.id, r = cw(e || ""), n = It((R) => R.reorderNode), o = It((R) => R.updateNode), i = It((R) => R.cloneNode), a = It((R) => R.removeNode), s = (R) => {
    if (!e) return;
    const D = (O) => {
      for (const k of O) {
        if (k.id === R)
          return k;
        if (k.children && k.children.length > 0) {
          const F = D(k.children);
          if (F) return F;
        }
      }
      return null;
    }, N = D(r);
    if (!N) return;
    const M = N.position.visible ?? !0;
    o(e, R, {
      position: {
        ...N.position,
        visible: !M
      }
    });
  }, [c, l] = ee.useState(""), [u, f] = ee.useState("all"), d = ee.useMemo(() => {
    const R = /* @__PURE__ */ new Set(), D = (N) => {
      N.forEach((M) => {
        R.add(M.type), M.children && D(M.children);
      });
    };
    return D(r), Array.from(R);
  }, [r]), p = (R) => {
    e && i(e, R);
  }, g = (R) => {
    e && a(e, R);
  }, h = (R, D, N) => {
    R.dataTransfer.setData("text/plain", JSON.stringify([...N, D])), R.currentTarget.classList.add("opacity-50");
  }, m = (R) => {
    R.currentTarget.classList.remove("opacity-50");
  }, y = (R) => {
    R.preventDefault(), R.currentTarget.classList.add("bg-gray-100");
  }, x = (R) => {
    R.currentTarget.classList.remove("bg-gray-100");
  }, b = (R, D) => R.length === D.length && R.every((N, M) => N === D[M]), w = (R, D, N) => {
    R.preventDefault();
    const M = JSON.parse(R.dataTransfer.getData("text/plain"));
    if (R.currentTarget.classList.remove("bg-gray-100"), e !== void 0 && b(M.slice(0, -1), N)) {
      const O = M[M.length - 1];
      n(e, O, D, N);
    }
  }, _ = (R, D, N) => R.map((M) => {
    const O = M.children ? _(M.children, D, N) : [], k = D ? (M.title || M.type).toLowerCase().includes(D.toLowerCase()) : !0, F = N === "all" ? !0 : M.type === N;
    return k && F || O.length > 0 ? { ...M, children: O } : null;
  }).filter(Boolean), E = ({ comp: R, path: D, index: N }) => {
    [...D];
    const M = D.length * 8;
    return /* @__PURE__ */ v.jsxs("div", { style: { marginLeft: M }, children: [
      /* @__PURE__ */ v.jsxs(
        "div",
        {
          draggable: !0,
          onDragStart: (O) => h(O, N, D),
          onDragEnd: m,
          onDragOver: y,
          onDragLeave: x,
          onDrop: (O) => w(O, N, D),
          className: "flex items-center gap-2 p-1.5 rounded-md hover:bg-sidebar-accent/50 cursor-move group",
          children: [
            /* @__PURE__ */ v.jsx(kC, { className: "h-4 w-4 text-muted-foreground cursor-grab" }),
            /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded bg-muted", children: R.icon || /* @__PURE__ */ v.jsx(cg, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ v.jsx("span", { className: "text-xs font-medium truncate", children: R.title || R.type }),
                R.position.locked && /* @__PURE__ */ v.jsx("div", { className: "w-1 h-1 rounded-full bg-orange-500" })
              ] }),
              /* @__PURE__ */ v.jsx("div", { className: "text-xs text-muted-foreground" })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ v.jsx(
                Me,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: (O) => {
                    O.stopPropagation(), s(R.id);
                  },
                  children: R.position.visible ?? !0 ? /* @__PURE__ */ v.jsx(ag, { className: "h-3 w-3" }) : /* @__PURE__ */ v.jsx(ig, { className: "h-3 w-3 text-muted-foreground" })
                }
              ),
              /* @__PURE__ */ v.jsx(AD, { layerId: R.id, duplicateLayer: p, deleteLayer: g })
            ] })
          ]
        }
      ),
      R.children && R.children.length > 0 && /* @__PURE__ */ v.jsx("div", { className: "space-y-1", children: R.children.map((O, k) => /* @__PURE__ */ v.jsx(E, { comp: O, path: [...D, N], index: k }, O.id)) })
    ] });
  };
  if (!e) return /* @__PURE__ */ v.jsx("div", { children: "No page" });
  const C = uy(r), T = _(r, c, u);
  return /* @__PURE__ */ v.jsxs("div", { children: [
    /* @__PURE__ */ v.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold", children: "Layers" }),
      /* @__PURE__ */ v.jsx(xR, { variant: "secondary", children: C })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex justify-between gap-2", children: [
      /* @__PURE__ */ v.jsx(re, { value: c, onChange: (R) => l(R.target.value), placeholder: "Search layers..." }),
      /* @__PURE__ */ v.jsx("div", { className: "w-20", children: /* @__PURE__ */ v.jsxs(Fn, { value: u, onValueChange: f, children: [
        /* @__PURE__ */ v.jsx(an, { className: "mb-3 text-xs", children: /* @__PURE__ */ v.jsx(_o, { placeholder: "Filter by type" }) }),
        /* @__PURE__ */ v.jsxs(sn, { children: [
          /* @__PURE__ */ v.jsx(fe, { value: "all", children: "All" }),
          d.map((R) => /* @__PURE__ */ v.jsx(fe, { value: R, children: R }, R))
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ v.jsx("div", { children: T.map((R, D) => /* @__PURE__ */ v.jsx(E, { comp: R, path: [], index: D }, R.id)) })
  ] });
};
dn(
  {
    id: "layers",
    title: "Layers",
    icon: cg,
    render: () => /* @__PURE__ */ v.jsx(jD, {}),
    order: 3
  },
  Sr.Sidebar
);
const uy = (t) => t.reduce((e, r) => {
  let n = 1;
  return r.children && r.children.length > 0 && (n += uy(r.children)), e + n;
}, 0), ID = () => /* @__PURE__ */ v.jsxs("div", { children: [
  /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold mb-4", children: "Text" }),
  /* @__PURE__ */ v.jsx("p", { children: "This is the content of the text editing panel" })
] });
dn(
  {
    id: "text",
    title: "Text",
    icon: xE,
    render: () => /* @__PURE__ */ v.jsx(ID, {}),
    order: 30
  },
  Sr.Sidebar
);
const FD = () => /* @__PURE__ */ v.jsxs("div", { children: [
  /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold mb-4", children: "Uploads" }),
  /* @__PURE__ */ v.jsx("p", { children: "This is the content of the file upload panel" })
] });
dn(
  {
    id: "uploads",
    title: "Uploads",
    icon: og,
    render: () => /* @__PURE__ */ v.jsx(FD, {}),
    order: 2
  },
  Sr.Sidebar
);
const BD = () => /* @__PURE__ */ v.jsxs("div", { children: [
  /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-bold mb-4", children: "Photos" }),
  /* @__PURE__ */ v.jsx("p", { children: "This is the content of the photo library panel" })
] });
dn(
  {
    id: "photos",
    title: "Photos",
    icon: sg,
    render: () => /* @__PURE__ */ v.jsx(BD, {}),
    order: 110
  },
  Sr.Sidebar
);
dn(
  {
    id: "background",
    title: "Background",
    icon: UC,
    render: () => /* @__PURE__ */ v.jsx(sR, {}),
    order: 120
  },
  Sr.Sidebar
);
const LD = ({
  icon: t,
  label: e,
  active: r,
  onClick: n
}) => /* @__PURE__ */ v.jsxs(
  "button",
  {
    className: Ur(
      "w-16 h-16 flex-shrink-0 flex flex-col items-center justify-center relative group transition-all duration-200",
      r ? "text-purple-600 dark:text-white" : "text-foreground hover:text-foreground/90"
    ),
    onClick: n,
    title: e,
    children: [
      /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ v.jsx(
        "span",
        {
          className: Ur(
            "flex items-center justify-center mb-1 overflow-hidden p-1 rounded-lg ",
            "group-hover:bg-gray-100 group-hover:text-[#4a53fa]",
            r ? "text-[#4a53fa] bg-white dark:bg-gray-200 shadow-[0px_0px_0px_1px_rgba(64,87,109,0.04),0px_6px_20px_-4px_rgba(64,87,109,0.3)]" : ""
          ),
          children: t ? ee.isValidElement(t) ? t : ee.createElement(t, { className: "w-5 h-5" }) : /* @__PURE__ */ v.jsx("div", { className: "w-5 h-5 bg-gray-200 rounded-sm" })
        }
      ) }),
      /* @__PURE__ */ v.jsx("div", { className: "text-[10px] mt-1 font-medium truncate w-full text-center whitespace-nowrap overflow-hidden", children: e })
    ]
  }
), zD = ({ children: t }) => {
  const { activePanelId: e, setActivePanel: r } = qs(), n = (a) => {
    r(e === a ? "" : a);
  }, i = Zs().getViewsByLocation(Sr.Sidebar);
  return Ht(() => {
    if (!e) {
      const a = i[0]?.id;
      r(a);
    }
  }, [e]), /* @__PURE__ */ v.jsxs("div", { className: "w-16 relative h-full flex flex-col items-center py-4 after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-accent after:content-['']", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex-1 flex flex-col items-center", children: [
      i.map((a) => /* @__PURE__ */ v.jsx(
        LD,
        {
          icon: a.icon,
          label: a.title,
          active: e === a.id,
          onClick: () => n(a.id)
        },
        a.id
      )),
      t
    ] }),
    /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx("div", { className: "mt-6 w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg", children: /* @__PURE__ */ v.jsx("span", { className: "text-lg", children: /* @__PURE__ */ v.jsx(ms, {}) }) }) })
  ] });
};
function GD() {
  const { api: t } = wr(), [e, r] = Bt([]), [n, o] = Bt(null), [i, a] = Bt(!0), [s, c] = Bt(null), l = async () => {
    try {
      a(!0);
      const p = await t.getAllDataSources();
      r(p), p.length > 0 && o(p[0]), c(null);
    } catch (p) {
      c(p instanceof Error ? p.message : "Failed to load data sources");
    } finally {
      a(!1);
    }
  };
  return Ht(() => {
    l();
  }, []), {
    dataSources: e,
    selectedSource: n,
    loading: i,
    error: s,
    setSelectedSource: o,
    loadDataSources: l,
    saveDataSource: async (p, g) => {
      try {
        if (g === "add") {
          const h = await t.createDataSource({
            name: p.name,
            type: p.type,
            status: p.status,
            config: p.config
          });
          r([...e, h]), o(h);
        } else {
          const h = await t.updateDataSource(p.id, {
            name: p.name,
            type: p.type,
            status: p.status,
            config: p.config
          });
          r(e.map((m) => m.id === h.id ? h : m)), o(h);
        }
        c(null);
      } catch (h) {
        throw c(h instanceof Error ? h.message : "Failed to save data source"), h;
      }
    },
    removeDataSource: async (p) => {
      try {
        await t.deleteDataSource(p);
        const g = e.filter((h) => h.id !== p);
        r(g), n?.id === p && g.length > 0 ? o(g[0]) : g.length === 0 && o(null), c(null);
      } catch (g) {
        throw c(g instanceof Error ? g.message : "Failed to delete data source"), g;
      }
    },
    testConnection: async (p) => {
      try {
        const g = await t.testDataSourceConnection(p), h = {
          ...p,
          status: g.status
        };
        return r(e.map((m) => m.id === h.id ? h : m)), o(h), c(null), g;
      } catch (g) {
        throw c(g instanceof Error ? g.message : "Failed to test connection"), g;
      }
    },
    setError: c
  };
}
function $D() {
  const { api: t } = wr(), [e, r] = Bt([]), [n, o] = Bt(null), i = Rn(async (c) => {
    try {
      const l = await t.getDatasetsByDataSource(c);
      r(l), o(null);
    } catch (l) {
      throw o(l instanceof Error ? l.message : "Failed to load datasets"), l;
    }
  }, []);
  return {
    datasets: e,
    error: n,
    loadDatasets: i,
    saveDataset: async (c, l) => {
      try {
        if (l === "add") {
          const u = await t.createDataset({
            name: c.name,
            query: c.query,
            fields: c.fields,
            transform: c.transform,
            previewData: c.previewData,
            status: c.status,
            dataSourceId: c.dataSourceId
          });
          r([...e, u]);
        } else {
          const u = await t.updateDataset(c.id, {
            name: c.name,
            query: c.query,
            fields: c.fields,
            transform: c.transform,
            previewData: c.previewData,
            status: c.status
          });
          r(e.map((f) => f.id === u.id ? u : f));
        }
        o(null);
      } catch (u) {
        throw o(u instanceof Error ? u.message : "Failed to save dataset"), u;
      }
    },
    removeDataset: async (c) => {
      try {
        await t.deleteDataset(c), r(e.filter((l) => l.id !== c)), o(null);
      } catch (l) {
        throw o(l instanceof Error ? l.message : "Failed to delete dataset"), l;
      }
    },
    setError: o
  };
}
const fy = zu(null);
function VD({ children: t, initialValues: e, onConfigChange: r }) {
  const { dataSources: n } = GD(), { datasets: o, loadDatasets: i } = $D(), [a, s] = Bt(null), [c, l] = Bt(!1), [u, f] = Bt(
    e || {
      sourceId: "",
      mode: "static",
      fieldMapping: {}
    }
  ), d = u.sourceId, p = u.datasetId;
  Ht(() => {
    d && i(d);
  }, [d, i]), Ht(() => {
    if (p) {
      const E = o.find((C) => C.id === p) || null;
      s(E);
    } else
      s(null);
  }, [p, o]), Ht(() => {
    e && f(e);
  }, [e]);
  const g = er(null), h = er(!0);
  Ht(() => {
    if (h.current) {
      h.current = !1, g.current = { ...u };
      return;
    }
    !(JSON.stringify(g.current) === JSON.stringify(u)) && r && (r(u), g.current = { ...u });
  }, [u, r]);
  const m = Rn((E, C) => {
    f((T) => ({
      ...T,
      [E]: C
    }));
  }, []), y = Rn((E, C) => {
    f((T) => ({
      ...T,
      fieldMapping: {
        ...T.fieldMapping,
        [E]: C
      }
    }));
  }, []), x = () => a ? a.fields && Array.isArray(a.fields) ? a.fields : a.previewData && a.previewData.length > 0 ? Object.keys(a.previewData[0]) : [] : [], b = x(), _ = {
    formValues: u,
    setFormValue: m,
    setFieldMapping: y,
    dataSources: n,
    datasets: o,
    selectedDataset: a,
    sourceId: d,
    datasetId: p,
    showFormOutput: c,
    setShowFormOutput: l,
    copyFormValues: async () => {
      try {
        await navigator.clipboard.writeText(JSON.stringify(u, null, 2));
      } catch (E) {
        console.error("Copy failed:", E);
      }
    },
    getAvailableFields: x,
    availableFields: b
  };
  return /* @__PURE__ */ v.jsx(fy.Provider, { value: _, children: t });
}
function gc() {
  const t = Gu(fy);
  if (!t)
    throw new Error("useDataBinding must be used within a DataBindingProvider");
  return t;
}
var mc = "Collapsible", [WD, Hj] = Ye(mc), [HD, Yf] = WD(mc), dy = S.forwardRef(
  (t, e) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: i,
      onOpenChange: a,
      ...s
    } = t, [c, l] = kr({
      prop: n,
      defaultProp: o ?? !1,
      onChange: a,
      caller: mc
    });
    return /* @__PURE__ */ v.jsx(
      HD,
      {
        scope: r,
        disabled: i,
        contentId: Nr(),
        open: c,
        onOpenToggle: S.useCallback(() => l((u) => !u), [l]),
        children: /* @__PURE__ */ v.jsx(
          ut.div,
          {
            "data-state": Xf(c),
            "data-disabled": i ? "" : void 0,
            ...s,
            ref: e
          }
        )
      }
    );
  }
);
dy.displayName = mc;
var py = "CollapsibleTrigger", hy = S.forwardRef(
  (t, e) => {
    const { __scopeCollapsible: r, ...n } = t, o = Yf(py, r);
    return /* @__PURE__ */ v.jsx(
      ut.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Xf(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: e,
        onClick: rt(t.onClick, o.onOpenToggle)
      }
    );
  }
);
hy.displayName = py;
var Uf = "CollapsibleContent", vy = S.forwardRef(
  (t, e) => {
    const { forceMount: r, ...n } = t, o = Yf(Uf, t.__scopeCollapsible);
    return /* @__PURE__ */ v.jsx(Ne, { present: r || o.open, children: ({ present: i }) => /* @__PURE__ */ v.jsx(YD, { ...n, ref: e, present: i }) });
  }
);
vy.displayName = Uf;
var YD = S.forwardRef((t, e) => {
  const { __scopeCollapsible: r, present: n, children: o, ...i } = t, a = Yf(Uf, r), [s, c] = S.useState(n), l = S.useRef(null), u = wt(e, l), f = S.useRef(0), d = f.current, p = S.useRef(0), g = p.current, h = a.open || s, m = S.useRef(h), y = S.useRef(void 0);
  return S.useEffect(() => {
    const x = requestAnimationFrame(() => m.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), ae(() => {
    const x = l.current;
    if (x) {
      y.current = y.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const b = x.getBoundingClientRect();
      f.current = b.height, p.current = b.width, m.current || (x.style.transitionDuration = y.current.transitionDuration, x.style.animationName = y.current.animationName), c(n);
    }
  }, [a.open, n]), /* @__PURE__ */ v.jsx(
    ut.div,
    {
      "data-state": Xf(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !h,
      ...i,
      ref: u,
      style: {
        "--radix-collapsible-content-height": d ? `${d}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...t.style
      },
      children: h && o
    }
  );
});
function Xf(t) {
  return t ? "open" : "closed";
}
var UD = dy;
function XD({
  ...t
}) {
  return /* @__PURE__ */ v.jsx(UD, { "data-slot": "collapsible", ...t });
}
function qD({
  ...t
}) {
  return /* @__PURE__ */ v.jsx(
    hy,
    {
      "data-slot": "collapsible-trigger",
      ...t
    }
  );
}
function KD({
  ...t
}) {
  return /* @__PURE__ */ v.jsx(
    vy,
    {
      "data-slot": "collapsible-content",
      ...t
    }
  );
}
function To({ title: t, icon: e, children: r, defaultOpen: n = !0, className: o }) {
  const [i, a] = S.useState(n);
  return /* @__PURE__ */ v.jsxs(XD, { open: i, onOpenChange: a, className: o, children: [
    /* @__PURE__ */ v.jsx(qD, { asChild: !0, children: /* @__PURE__ */ v.jsxs(Me, { variant: "ghost", className: "w-full justify-between p-2 h-auto font-medium text-sm", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
        e,
        /* @__PURE__ */ v.jsx("span", { className: "ml-2", children: t })
      ] }),
      i ? /* @__PURE__ */ v.jsx(gf, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx(eg, { className: "h-4 w-4" })
    ] }) }),
    /* @__PURE__ */ v.jsx(KD, { className: "px-4 pb-4 mt-4", children: /* @__PURE__ */ v.jsx("div", { className: "space-y-4", children: r }) })
  ] });
}
function ZD() {
  const { dataSources: t, datasets: e, sourceId: r, formValues: n, setFormValue: o } = gc();
  return /* @__PURE__ */ v.jsx(To, { title: "Data Source", icon: /* @__PURE__ */ v.jsx(CC, { className: "h-4 w-4" }), children: /* @__PURE__ */ v.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ v.jsx(Jt, { className: "text-xs font-medium", children: "Data Source" }),
      /* @__PURE__ */ v.jsxs(
        Fn,
        {
          onValueChange: (i) => o("sourceId", i),
          value: r || "",
          children: [
            /* @__PURE__ */ v.jsx(an, { className: "w-40 h-7 text-xs", children: /* @__PURE__ */ v.jsx(_o, { placeholder: "Select data source" }) }),
            /* @__PURE__ */ v.jsx(sn, { children: t.map((i) => /* @__PURE__ */ v.jsx(fe, { value: i.id, children: i.name }, i.id)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ v.jsx(Jt, { className: "text-xs font-medium", children: "Dataset" }),
      /* @__PURE__ */ v.jsxs(
        Fn,
        {
          onValueChange: (i) => o("datasetId", i),
          value: n.datasetId || "",
          disabled: !r || e.length === 0,
          children: [
            /* @__PURE__ */ v.jsx(an, { className: "w-40 h-7 text-xs", children: /* @__PURE__ */ v.jsx(_o, { placeholder: "Select dataset" }) }),
            /* @__PURE__ */ v.jsx(sn, { children: e.map((i) => /* @__PURE__ */ v.jsx(fe, { value: i.id, children: i.name }, i.id)) })
          ]
        }
      )
    ] })
  ] }) });
}
function JD({ fieldConfig: t, availableFields: e }) {
  const [r, n] = Bt(!1), { formValues: o, setFieldMapping: i } = gc(), a = (u) => typeof u == "string" ? u : typeof u == "object" && u !== null && (u.name || u.label || u.key) || String(u), s = (u) => typeof u == "string" ? u : typeof u == "object" && u !== null && (u.name || u.value || u.key) || String(u), c = o.fieldMapping?.[t.key]?.sourceField || "", l = (u) => {
    const f = u.dataProcessing;
    return /* @__PURE__ */ v.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      f?.dataType && /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ v.jsx(Jt, { className: "text-xs", children: "字段类型" }),
        /* @__PURE__ */ v.jsxs(Fn, { defaultValue: f.dataType, children: [
          /* @__PURE__ */ v.jsx(an, { className: "h-6 text-xs", children: /* @__PURE__ */ v.jsx(_o, { placeholder: "选择数据类型" }) }),
          /* @__PURE__ */ v.jsxs(sn, { children: [
            /* @__PURE__ */ v.jsx(fe, { value: "string", children: "文本" }),
            /* @__PURE__ */ v.jsx(fe, { value: "number", children: "数字" }),
            /* @__PURE__ */ v.jsx(fe, { value: "date", children: "日期" }),
            /* @__PURE__ */ v.jsx(fe, { value: "datetime", children: "日期时间" }),
            /* @__PURE__ */ v.jsx(fe, { value: "boolean", children: "布尔值" }),
            /* @__PURE__ */ v.jsx(fe, { value: "currency", children: "货币" }),
            /* @__PURE__ */ v.jsx(fe, { value: "percentage", children: "百分比" })
          ] })
        ] })
      ] }),
      f?.format?.dateFormat && /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ v.jsx(Jt, { className: "text-xs", children: "日期格式" }),
        /* @__PURE__ */ v.jsx(
          re,
          {
            className: "h-6 text-xs",
            placeholder: "YYYY-MM-DD",
            defaultValue: f.format.dateFormat
          }
        )
      ] }),
      f?.format?.numberFormat && /* @__PURE__ */ v.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ v.jsx(Jt, { className: "text-xs", children: "小数位数" }),
        /* @__PURE__ */ v.jsx(
          re,
          {
            className: "h-6 text-xs",
            type: "number",
            defaultValue: f.format.numberFormat.decimals || 0
          }
        )
      ] })
    ] });
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ v.jsxs(Jt, { className: "text-xs font-medium", children: [
      t.label,
      t.required && /* @__PURE__ */ v.jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    t.description && /* @__PURE__ */ v.jsx("p", { className: "text-xs text-muted-foreground", children: t.description }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ v.jsxs(
        Fn,
        {
          onValueChange: (u) => i(t.key, { sourceField: u }),
          value: c,
          children: [
            /* @__PURE__ */ v.jsx(an, { className: "h-7 text-xs flex-1", children: /* @__PURE__ */ v.jsx(_o, { placeholder: t.placeholder || `选择${t.label}字段` }) }),
            /* @__PURE__ */ v.jsxs(sn, { children: [
              /* @__PURE__ */ v.jsx(fe, { value: "none", children: "请选择" }),
              t.options ? t.options.map((u) => /* @__PURE__ */ v.jsx(fe, { value: u.value, children: u.label }, u.value)) : e.map((u, f) => /* @__PURE__ */ v.jsx(fe, { value: s(u), children: a(u) }, f))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "button",
          className: "p-1 rounded hover:bg-muted flex-shrink-0",
          onClick: () => n((u) => !u),
          "aria-label": "配置数据处理",
          children: /* @__PURE__ */ v.jsx(sE, { className: `h-4 w-4 ${r ? "text-primary" : "text-muted-foreground"}` })
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: `mt-2 p-2 bg-muted rounded text-xs transition-all duration-200 ${r ? "" : "hidden"}`, children: [
      /* @__PURE__ */ v.jsx("div", { className: "font-medium mb-2", children: "数据处理配置" }),
      r && l(t)
    ] })
  ] });
}
function QD({ schema: t }) {
  const { availableFields: e } = gc(), r = t || [
    { key: "xField", label: "横轴字段 (xField)", type: "select", required: !0 },
    { key: "yField", label: "纵轴字段 (yField)", type: "select", required: !0 },
    { key: "seriesField", label: "系列字段 (seriesField)", type: "select", required: !1 }
  ];
  return /* @__PURE__ */ v.jsx(To, { title: "Field Mapping", icon: /* @__PURE__ */ v.jsx(VC, { className: "h-4 w-4" }), children: /* @__PURE__ */ v.jsx("div", { className: "space-y-3", children: r.map((n) => /* @__PURE__ */ v.jsx(
    JD,
    {
      fieldConfig: n,
      availableFields: e
    },
    n.key
  )) }) });
}
function tM({ watchedValues: t }) {
  return /* @__PURE__ */ v.jsxs(Ui, { className: "bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ v.jsx(h0, { className: "p-2", children: /* @__PURE__ */ v.jsx(v0, { className: "text-sm", children: "Current Form Values" }) }),
    /* @__PURE__ */ v.jsx(Xi, { className: "p-2", children: /* @__PURE__ */ v.jsx("pre", { className: "text-xs overflow-auto max-h-60 bg-white dark:bg-gray-800 rounded border ", children: JSON.stringify(t, null, 2) }) })
  ] });
}
function eM({ showFormOutput: t, setShowFormOutput: e, copyFormValues: r, watchedValues: n }) {
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ v.jsx("h2", { className: "text-lg font-semibold" }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ v.jsx(Me, { variant: "outline", size: "sm", onClick: () => e(!t), title: t ? "Hide Output" : "Show Output", children: t ? /* @__PURE__ */ v.jsx(ig, {}) : /* @__PURE__ */ v.jsx(ag, {}) }),
        /* @__PURE__ */ v.jsx(Me, { variant: "outline", size: "sm", onClick: r, title: "Copy Configuration", children: /* @__PURE__ */ v.jsx(wC, {}) })
      ] })
    ] }),
    t && /* @__PURE__ */ v.jsx("div", { className: "mb-4", children: /* @__PURE__ */ v.jsx(tM, { watchedValues: n }) })
  ] });
}
function rM({ schema: t }) {
  const {
    showFormOutput: e,
    setShowFormOutput: r,
    copyFormValues: n,
    formValues: o,
    selectedDataset: i
  } = gc();
  return /* @__PURE__ */ v.jsxs("div", { children: [
    /* @__PURE__ */ v.jsx(
      eM,
      {
        showFormOutput: e,
        setShowFormOutput: r,
        copyFormValues: n,
        watchedValues: o
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { className: "divide-y divide-border", children: [
      /* @__PURE__ */ v.jsx(ZD, {}),
      /* @__PURE__ */ v.jsx(
        QD,
        {
          schema: t?.fieldMapping
        }
      ),
      i && /* @__PURE__ */ v.jsx(v.Fragment, {})
    ] })
  ] });
}
const nM = ({ initialValues: t, onConfigChange: e, schema: r }) => /* @__PURE__ */ v.jsx(
  VD,
  {
    initialValues: t,
    onConfigChange: e,
    schema: r,
    children: /* @__PURE__ */ v.jsx(rM, { schema: r })
  }
), br = /* @__PURE__ */ Object.create(null);
br.open = "0";
br.close = "1";
br.ping = "2";
br.pong = "3";
br.message = "4";
br.upgrade = "5";
br.noop = "6";
const ls = /* @__PURE__ */ Object.create(null);
Object.keys(br).forEach((t) => {
  ls[br[t]] = t;
});
const tu = { type: "error", data: "parser error" }, gy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", my = typeof ArrayBuffer == "function", yy = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, qf = ({ type: t, data: e }, r, n) => gy && e instanceof Blob ? r ? n(e) : oh(e, n) : my && (e instanceof ArrayBuffer || yy(e)) ? r ? n(e) : oh(new Blob([e]), n) : n(br[t] + (e || "")), oh = (t, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    e("b" + (n || ""));
  }, r.readAsDataURL(t);
};
function ih(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let al;
function oM(t, e) {
  if (gy && t.data instanceof Blob)
    return t.data.arrayBuffer().then(ih).then(e);
  if (my && (t.data instanceof ArrayBuffer || yy(t.data)))
    return e(ih(t.data));
  qf(t, !1, (r) => {
    al || (al = new TextEncoder()), e(al.encode(r));
  });
}
const ah = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", di = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ah.length; t++)
  di[ah.charCodeAt(t)] = t;
const iM = (t) => {
  let e = t.length * 0.75, r = t.length, n, o = 0, i, a, s, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const l = new ArrayBuffer(e), u = new Uint8Array(l);
  for (n = 0; n < r; n += 4)
    i = di[t.charCodeAt(n)], a = di[t.charCodeAt(n + 1)], s = di[t.charCodeAt(n + 2)], c = di[t.charCodeAt(n + 3)], u[o++] = i << 2 | a >> 4, u[o++] = (a & 15) << 4 | s >> 2, u[o++] = (s & 3) << 6 | c & 63;
  return l;
}, aM = typeof ArrayBuffer == "function", Kf = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: xy(t, e)
    };
  const r = t.charAt(0);
  return r === "b" ? {
    type: "message",
    data: sM(t.substring(1), e)
  } : ls[r] ? t.length > 1 ? {
    type: ls[r],
    data: t.substring(1)
  } : {
    type: ls[r]
  } : tu;
}, sM = (t, e) => {
  if (aM) {
    const r = iM(t);
    return xy(r, e);
  } else
    return { base64: !0, data: t };
}, xy = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, by = "", cM = (t, e) => {
  const r = t.length, n = new Array(r);
  let o = 0;
  t.forEach((i, a) => {
    qf(i, !1, (s) => {
      n[a] = s, ++o === r && e(n.join(by));
    });
  });
}, lM = (t, e) => {
  const r = t.split(by), n = [];
  for (let o = 0; o < r.length; o++) {
    const i = Kf(r[o], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function uM() {
  return new TransformStream({
    transform(t, e) {
      oM(t, (r) => {
        const n = r.length;
        let o;
        if (n < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, n);
        else if (n < 65536) {
          o = new Uint8Array(3);
          const i = new DataView(o.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          o = new Uint8Array(9);
          const i = new DataView(o.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        t.data && typeof t.data != "string" && (o[0] |= 128), e.enqueue(o), e.enqueue(r);
      });
    }
  });
}
let sl;
function za(t) {
  return t.reduce((e, r) => e + r.length, 0);
}
function Ga(t, e) {
  if (t[0].length === e)
    return t.shift();
  const r = new Uint8Array(e);
  let n = 0;
  for (let o = 0; o < e; o++)
    r[o] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function fM(t, e) {
  sl || (sl = new TextDecoder());
  const r = [];
  let n = 0, o = -1, i = !1;
  return new TransformStream({
    transform(a, s) {
      for (r.push(a); ; ) {
        if (n === 0) {
          if (za(r) < 1)
            break;
          const c = Ga(r, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? n = 3 : o === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (za(r) < 2)
            break;
          const c = Ga(r, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (za(r) < 8)
            break;
          const c = Ga(r, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            s.enqueue(tu);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), n = 3;
        } else {
          if (za(r) < o)
            break;
          const c = Ga(r, o);
          s.enqueue(Kf(i ? c : sl.decode(c), e)), n = 0;
        }
        if (o === 0 || o > t) {
          s.enqueue(tu);
          break;
        }
      }
    }
  });
}
const wy = 4;
function te(t) {
  if (t) return dM(t);
}
function dM(t) {
  for (var e in te.prototype)
    t[e] = te.prototype[e];
  return t;
}
te.prototype.on = te.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
te.prototype.once = function(t, e) {
  function r() {
    this.off(t, r), e.apply(this, arguments);
  }
  return r.fn = e, this.on(t, r), this;
};
te.prototype.off = te.prototype.removeListener = te.prototype.removeAllListeners = te.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + t];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var n, o = 0; o < r.length; o++)
    if (n = r[o], n === e || n.fn === e) {
      r.splice(o, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + t], this;
};
te.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, o = r.length; n < o; ++n)
      r[n].apply(this, e);
  }
  return this;
};
te.prototype.emitReserved = te.prototype.emit;
te.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
te.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const yc = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), Le = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), pM = "arraybuffer";
function Sy(t, ...e) {
  return e.reduce((r, n) => (t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
const hM = Le.setTimeout, vM = Le.clearTimeout;
function xc(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = hM.bind(Le), t.clearTimeoutFn = vM.bind(Le)) : (t.setTimeoutFn = Le.setTimeout.bind(Le), t.clearTimeoutFn = Le.clearTimeout.bind(Le));
}
const gM = 1.33;
function mM(t) {
  return typeof t == "string" ? yM(t) : Math.ceil((t.byteLength || t.size) * gM);
}
function yM(t) {
  let e = 0, r = 0;
  for (let n = 0, o = t.length; n < o; n++)
    e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Cy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function xM(t) {
  let e = "";
  for (let r in t)
    t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e;
}
function bM(t) {
  let e = {}, r = t.split("&");
  for (let n = 0, o = r.length; n < o; n++) {
    let i = r[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class wM extends Error {
  constructor(e, r, n) {
    super(e), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Zf extends te {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, xc(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, r, n) {
    return super.emitReserved("error", new wM(e, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const r = Kf(e, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, r = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const r = xM(e);
    return r.length ? "?" + r : "";
  }
}
class SM extends Zf {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    lM(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, cM(e, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Cy()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
}
let Ey = !1;
try {
  Ey = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const CM = Ey;
function EM() {
}
class _M extends SM {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, r) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", r), n.on("error", (o, i) => {
      this.onError("xhr post error", o, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = e;
  }
}
class vr extends te {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r, n) {
    super(), this.createRequest = e, xc(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const r = Sy(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var o;
        n.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = vr.requestsCount++, vr.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = EM, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete vr.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
vr.requestsCount = 0;
vr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", sh);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Le ? "pagehide" : "unload";
    addEventListener(t, sh, !1);
  }
}
function sh() {
  for (let t in vr.requests)
    vr.requests.hasOwnProperty(t) && vr.requests[t].abort();
}
const TM = function() {
  const t = _y({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class RM extends _M {
  constructor(e) {
    super(e);
    const r = e && e.forceBase64;
    this.supportsBinary = TM && !r;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new vr(_y, this.uri(), e);
  }
}
function _y(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || CM))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Le[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ty = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class DM extends Zf {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), r = this.opts.protocols, n = Ty ? {} : Sy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, r, n);
    } catch (o) {
      return this.emitReserved("error", o);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = r === e.length - 1;
      qf(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        o && yc(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = Cy()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
}
const cl = Le.WebSocket || Le.MozWebSocket;
class MM extends DM {
  createSocket(e, r, n) {
    return Ty ? new cl(e, r, n) : r ? new cl(e, r) : new cl(e);
  }
  doWrite(e, r) {
    this.ws.send(r);
  }
}
class PM extends Zf {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const r = fM(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), o = uM();
        o.readable.pipeTo(e.writable), this._writer = o.writable.getWriter();
        const i = () => {
          n.read().then(({ done: s, value: c }) => {
            s || (this.onPacket(c), i());
          }).catch((s) => {
          });
        };
        i();
        const a = { type: "open" };
        this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`), this._writer.write(a).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = r === e.length - 1;
      this._writer.write(n).then(() => {
        o && yc(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const OM = {
  websocket: MM,
  webtransport: PM,
  polling: RM
}, NM = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, kM = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function eu(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, r = t.indexOf("["), n = t.indexOf("]");
  r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
  let o = NM.exec(t || ""), i = {}, a = 14;
  for (; a--; )
    i[kM[a]] = o[a] || "";
  return r != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = AM(i, i.path), i.queryKey = jM(i, i.query), i;
}
function AM(t, e) {
  const r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function jM(t, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, o, i) {
    o && (r[o] = i);
  }), r;
}
const ru = typeof addEventListener == "function" && typeof removeEventListener == "function", us = [];
ru && addEventListener("offline", () => {
  us.forEach((t) => t());
}, !1);
class en extends te {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r) {
    if (super(), this.binaryType = pM, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
      const n = eu(e);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = eu(r.host).host);
    xc(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const o = n.prototype.name;
      this.transports.push(o), this._transportsByName[o] = n;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = bM(this.opts.query)), ru && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, us.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = wy, r.transport = e, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && en.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(e);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", en.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = e.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const o = this.writeBuffer[n].data;
      if (o && (r += mM(o)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, yc(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, r, n) {
    return this._sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, r, n) {
    return this._sendPacket("message", e, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, r, n, o) {
    if (typeof r == "function" && (o = r, r = void 0), typeof n == "function" && (o = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: e,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), e();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (en.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ru && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = us.indexOf(this._offlineEventListener);
        n !== -1 && us.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
en.protocol = wy;
class IM extends en {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let r = this.createTransport(e), n = !1;
    en.priorWebsocketSuccess = !1;
    const o = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            en.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = r.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function i() {
      n || (n = !0, u(), r.close(), r = null);
    }
    const a = (f) => {
      const d = new Error("probe error: " + f);
      d.transport = r.name, i(), this.emitReserved("upgradeError", d);
    };
    function s() {
      a("transport closed");
    }
    function c() {
      a("socket closed");
    }
    function l(f) {
      r && f.name !== r.name && i();
    }
    const u = () => {
      r.removeListener("open", o), r.removeListener("error", a), r.removeListener("close", s), this.off("close", c), this.off("upgrading", l);
    };
    r.once("open", o), r.once("error", a), r.once("close", s), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      ~this.transports.indexOf(e[n]) && r.push(e[n]);
    return r;
  }
}
let FM = class extends IM {
  constructor(e, r = {}) {
    const n = typeof e == "object" ? e : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((o) => OM[o]).filter((o) => !!o)), super(e, n);
  }
};
function BM(t, e = "", r) {
  let n = t;
  r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = eu(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const LM = typeof ArrayBuffer == "function", zM = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Ry = Object.prototype.toString, GM = typeof Blob == "function" || typeof Blob < "u" && Ry.call(Blob) === "[object BlobConstructor]", $M = typeof File == "function" || typeof File < "u" && Ry.call(File) === "[object FileConstructor]";
function Jf(t) {
  return LM && (t instanceof ArrayBuffer || zM(t)) || GM && t instanceof Blob || $M && t instanceof File;
}
function fs(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let r = 0, n = t.length; r < n; r++)
      if (fs(t[r]))
        return !0;
    return !1;
  }
  if (Jf(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return fs(t.toJSON(), !0);
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && fs(t[r]))
      return !0;
  return !1;
}
function VM(t) {
  const e = [], r = t.data, n = t;
  return n.data = nu(r, e), n.attachments = e.length, { packet: n, buffers: e };
}
function nu(t, e) {
  if (!t)
    return t;
  if (Jf(t)) {
    const r = { _placeholder: !0, num: e.length };
    return e.push(t), r;
  } else if (Array.isArray(t)) {
    const r = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      r[n] = nu(t[n], e);
    return r;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const r = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (r[n] = nu(t[n], e));
    return r;
  }
  return t;
}
function WM(t, e) {
  return t.data = ou(t.data, e), delete t.attachments, t;
}
function ou(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let r = 0; r < t.length; r++)
      t[r] = ou(t[r], e);
  else if (typeof t == "object")
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (t[r] = ou(t[r], e));
  return t;
}
const HM = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], YM = 5;
var St;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(St || (St = {}));
class UM {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === St.EVENT || e.type === St.ACK) && fs(e) ? this.encodeAsBinary({
      type: e.type === St.EVENT ? St.BINARY_EVENT : St.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let r = "" + e.type;
    return (e.type === St.BINARY_EVENT || e.type === St.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const r = VM(e), n = this.encodeAsString(r.packet), o = r.buffers;
    return o.unshift(n), o;
  }
}
function ch(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Qf extends te {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let r;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(e);
      const n = r.type === St.BINARY_EVENT;
      n || r.type === St.BINARY_ACK ? (r.type = n ? St.EVENT : St.ACK, this.reconstructor = new XM(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Jf(e) || e.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let r = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (St[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === St.BINARY_EVENT || n.type === St.BINARY_ACK) {
      const i = r + 1;
      for (; e.charAt(++r) !== "-" && r != e.length; )
        ;
      const a = e.substring(i, r);
      if (a != Number(a) || e.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(a);
    }
    if (e.charAt(r + 1) === "/") {
      const i = r + 1;
      for (; ++r && !(e.charAt(r) === "," || r === e.length); )
        ;
      n.nsp = e.substring(i, r);
    } else
      n.nsp = "/";
    const o = e.charAt(r + 1);
    if (o !== "" && Number(o) == o) {
      const i = r + 1;
      for (; ++r; ) {
        const a = e.charAt(r);
        if (a == null || Number(a) != a) {
          --r;
          break;
        }
        if (r === e.length)
          break;
      }
      n.id = Number(e.substring(i, r + 1));
    }
    if (e.charAt(++r)) {
      const i = this.tryParse(e.substr(r));
      if (Qf.isPayloadValid(n.type, i))
        n.data = i;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, r) {
    switch (e) {
      case St.CONNECT:
        return ch(r);
      case St.DISCONNECT:
        return r === void 0;
      case St.CONNECT_ERROR:
        return typeof r == "string" || ch(r);
      case St.EVENT:
      case St.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && HM.indexOf(r[0]) === -1);
      case St.ACK:
      case St.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class XM {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const r = WM(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const qM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Qf,
  Encoder: UM,
  get PacketType() {
    return St;
  },
  protocol: YM
}, Symbol.toStringTag, { value: "Module" }));
function Je(t, e, r) {
  return t.on(e, r), function() {
    t.off(e, r);
  };
}
const KM = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Dy extends te {
  /**
   * `Socket` constructor.
   */
  constructor(e, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      Je(e, "open", this.onopen.bind(this)),
      Je(e, "packet", this.onpacket.bind(this)),
      Je(e, "error", this.onerror.bind(this)),
      Je(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...r) {
    var n, o, i;
    if (KM.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const a = {
      type: St.EVENT,
      data: r
    };
    if (a.options = {}, a.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const u = this.ids++, f = r.pop();
      this._registerAckCallback(u, f), a.id = u;
    }
    const s = (o = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !s || (c ? (this.notifyOutgoingListeners(a), this.packet(a)) : this.sendBuffer.push(a)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, r) {
    var n;
    const o = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[e] = r;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === e && this.sendBuffer.splice(s, 1);
      r.call(this, new Error("operation has timed out"));
    }, o), a = (...s) => {
      this.io.clearTimeoutFn(i), r.apply(this, s);
    };
    a.withError = !0, this.acks[e] = a;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...r) {
    return new Promise((n, o) => {
      const i = (a, s) => a ? o(a) : n(s);
      i.withError = !0, r.push(i), this.emit(e, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let r;
    typeof e[e.length - 1] == "function" && (r = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((o, ...i) => n !== this._queue[0] ? void 0 : (o !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(o)) : (this._queue.shift(), r && r(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: St.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((n) => String(n.id) === e)) {
        const n = this.acks[e];
        delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case St.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case St.EVENT:
        case St.BINARY_EVENT:
          this.onevent(e);
          break;
        case St.ACK:
        case St.BINARY_ACK:
          this.onack(e);
          break;
        case St.DISCONNECT:
          this.ondisconnect();
          break;
        case St.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const r = e.data || [];
    e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const r = this;
    let n = !1;
    return function(...o) {
      n || (n = !0, r.packet({
        type: St.ACK,
        id: e,
        data: o
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const r = this.acks[e.id];
    typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, r) {
    this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: St.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (e === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, e.data);
    }
  }
}
function Wo(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Wo.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), r = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r;
  }
  return Math.min(t, this.max) | 0;
};
Wo.prototype.reset = function() {
  this.attempts = 0;
};
Wo.prototype.setMin = function(t) {
  this.ms = t;
};
Wo.prototype.setMax = function(t) {
  this.max = t;
};
Wo.prototype.setJitter = function(t) {
  this.jitter = t;
};
class iu extends te {
  constructor(e, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, xc(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Wo({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
    const o = r.parser || qM;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var r;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this);
  }
  randomizationFactor(e) {
    var r;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var r;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new FM(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Je(r, "open", function() {
      n.onopen(), e && e();
    }), i = (s) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", s), e ? e(s) : this.maybeReconnectOnOpen();
    }, a = Je(r, "error", i);
    if (this._timeout !== !1) {
      const s = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), r.close();
      }, s);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(a), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      Je(e, "ping", this.onping.bind(this)),
      Je(e, "data", this.ondata.bind(this)),
      Je(e, "error", this.onerror.bind(this)),
      Je(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      Je(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    yc(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, r) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Dy(this, e, r), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const r = this.encoder.encode(e);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(e, r) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((o) => {
          o ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", o)) : e.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const ii = {};
function ll(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const r = BM(t, e.path || "/socket.io"), n = r.source, o = r.id, i = r.path, a = ii[o] && i in ii[o].nsps, s = e.forceNew || e["force new connection"] || e.multiplex === !1 || a;
  let c;
  return s ? c = new iu(n, e) : (ii[o] || (ii[o] = new iu(n, e)), c = ii[o]), r.query && !e.query && (e.query = r.queryKey), c.socket(r.path, e);
}
Object.assign(ll, {
  Manager: iu,
  Socket: Dy,
  io: ll,
  connect: ll
});
var $a = { exports: {} }, ul, lh;
function ZM() {
  if (lh) return ul;
  lh = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, o = n * 7, i = n * 365.25;
  ul = function(u, f) {
    f = f || {};
    var d = typeof u;
    if (d === "string" && u.length > 0)
      return a(u);
    if (d === "number" && isFinite(u))
      return f.long ? c(u) : s(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function a(u) {
    if (u = String(u), !(u.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
      );
      if (f) {
        var d = parseFloat(f[1]), p = (f[2] || "ms").toLowerCase();
        switch (p) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * i;
          case "weeks":
          case "week":
          case "w":
            return d * o;
          case "days":
          case "day":
          case "d":
            return d * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function s(u) {
    var f = Math.abs(u);
    return f >= n ? Math.round(u / n) + "d" : f >= r ? Math.round(u / r) + "h" : f >= e ? Math.round(u / e) + "m" : f >= t ? Math.round(u / t) + "s" : u + "ms";
  }
  function c(u) {
    var f = Math.abs(u);
    return f >= n ? l(u, f, n, "day") : f >= r ? l(u, f, r, "hour") : f >= e ? l(u, f, e, "minute") : f >= t ? l(u, f, t, "second") : u + " ms";
  }
  function l(u, f, d, p) {
    var g = f >= d * 1.5;
    return Math.round(u / d) + " " + p + (g ? "s" : "");
  }
  return ul;
}
var fl, uh;
function JM() {
  if (uh) return fl;
  uh = 1;
  function t(e) {
    n.debug = n, n.default = n, n.coerce = l, n.disable = s, n.enable = i, n.enabled = c, n.humanize = ZM(), n.destroy = u, Object.keys(e).forEach((f) => {
      n[f] = e[f];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(f) {
      let d = 0;
      for (let p = 0; p < f.length; p++)
        d = (d << 5) - d + f.charCodeAt(p), d |= 0;
      return n.colors[Math.abs(d) % n.colors.length];
    }
    n.selectColor = r;
    function n(f) {
      let d, p = null, g, h;
      function m(...y) {
        if (!m.enabled)
          return;
        const x = m, b = Number(/* @__PURE__ */ new Date()), w = b - (d || b);
        x.diff = w, x.prev = d, x.curr = b, d = b, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let _ = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (C, T) => {
          if (C === "%%")
            return "%";
          _++;
          const R = n.formatters[T];
          if (typeof R == "function") {
            const D = y[_];
            C = R.call(x, D), y.splice(_, 1), _--;
          }
          return C;
        }), n.formatArgs.call(x, y), (x.log || n.log).apply(x, y);
      }
      return m.namespace = f, m.useColors = n.useColors(), m.color = n.selectColor(f), m.extend = o, m.destroy = n.destroy, Object.defineProperty(m, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => p !== null ? p : (g !== n.namespaces && (g = n.namespaces, h = n.enabled(f)), h),
        set: (y) => {
          p = y;
        }
      }), typeof n.init == "function" && n.init(m), m;
    }
    function o(f, d) {
      const p = n(this.namespace + (typeof d > "u" ? ":" : d) + f);
      return p.log = this.log, p;
    }
    function i(f) {
      n.save(f), n.namespaces = f, n.names = [], n.skips = [];
      const d = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const p of d)
        p[0] === "-" ? n.skips.push(p.slice(1)) : n.names.push(p);
    }
    function a(f, d) {
      let p = 0, g = 0, h = -1, m = 0;
      for (; p < f.length; )
        if (g < d.length && (d[g] === f[p] || d[g] === "*"))
          d[g] === "*" ? (h = g, m = p, g++) : (p++, g++);
        else if (h !== -1)
          g = h + 1, m++, p = m;
        else
          return !1;
      for (; g < d.length && d[g] === "*"; )
        g++;
      return g === d.length;
    }
    function s() {
      const f = [
        ...n.names,
        ...n.skips.map((d) => "-" + d)
      ].join(",");
      return n.enable(""), f;
    }
    function c(f) {
      for (const d of n.skips)
        if (a(f, d))
          return !1;
      for (const d of n.names)
        if (a(f, d))
          return !0;
      return !1;
    }
    function l(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function u() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return fl = t, fl;
}
var fh;
function QM() {
  return fh || (fh = 1, function(t, e) {
    e.formatArgs = n, e.save = o, e.load = i, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function n(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
        return;
      const l = "color: " + this.color;
      c.splice(1, 0, l, "color: inherit");
      let u = 0, f = 0;
      c[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (u++, d === "%c" && (f = u));
      }), c.splice(f, 0, l);
    }
    e.log = console.debug || console.log || (() => {
    });
    function o(c) {
      try {
        c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function i() {
      let c;
      try {
        c = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
    }
    function a() {
      try {
        return localStorage;
      } catch {
      }
    }
    t.exports = JM()(e);
    const { formatters: s } = t.exports;
    s.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (l) {
        return "[UnexpectedJSONParseError]: " + l.message;
      }
    };
  }($a, $a.exports)), $a.exports;
}
var tP = QM();
const eP = /* @__PURE__ */ av(tP), Qn = "@veltix/pusher", rP = {
  JOB: `${Qn}:job`,
  TIMER: `${Qn}:timer`,
  SCHEDULER: `${Qn}:scheduler`,
  SOCKET: `${Qn}:socket`,
  API: `${Qn}:api`,
  DB: `${Qn}:db`
}, td = (t) => eP(rP[t]);
td("JOB");
td("TIMER");
td("SCHEDULER");
var bc = "Switch", [nP, Uj] = Ye(bc), [oP, iP] = nP(bc), My = S.forwardRef(
  (t, e) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: a,
      disabled: s,
      value: c = "on",
      onCheckedChange: l,
      form: u,
      ...f
    } = t, [d, p] = S.useState(null), g = wt(e, (b) => p(b)), h = S.useRef(!1), m = d ? u || !!d.closest("form") : !0, [y, x] = kr({
      prop: o,
      defaultProp: i ?? !1,
      onChange: l,
      caller: bc
    });
    return /* @__PURE__ */ v.jsxs(oP, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ v.jsx(
        ut.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": a,
          "data-state": ky(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: c,
          ...f,
          ref: g,
          onClick: rt(t.onClick, (b) => {
            x((w) => !w), m && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ v.jsx(
        Ny,
        {
          control: d,
          bubbles: !h.current,
          name: n,
          value: c,
          checked: y,
          required: a,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
My.displayName = bc;
var Py = "SwitchThumb", Oy = S.forwardRef(
  (t, e) => {
    const { __scopeSwitch: r, ...n } = t, o = iP(Py, r);
    return /* @__PURE__ */ v.jsx(
      ut.span,
      {
        "data-state": ky(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: e
      }
    );
  }
);
Oy.displayName = Py;
var aP = "SwitchBubbleInput", Ny = S.forwardRef(
  ({
    __scopeSwitch: t,
    control: e,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const a = S.useRef(null), s = wt(a, i), c = jf(r), l = Df(e);
    return S.useEffect(() => {
      const u = a.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (c !== r && p) {
        const g = new Event("click", { bubbles: n });
        p.call(u, r), u.dispatchEvent(g);
      }
    }, [c, r, n]), /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ny.displayName = aP;
function ky(t) {
  return t ? "checked" : "unchecked";
}
var sP = My, cP = Oy;
function au({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ v.jsx(
    sP,
    {
      "data-slot": "switch",
      className: bt(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e,
      children: /* @__PURE__ */ v.jsx(
        cP,
        {
          "data-slot": "switch-thumb",
          className: bt(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function lP() {
  Re();
  const t = It(), e = wr(), { selectedDoc: r, selectedNodes: n } = qs().getCurrentSelection(), o = n[0];
  if (o?.type) {
    const i = e.registry.get(o?.type);
    if (o)
      return i?.dataConfigSchema ? /* @__PURE__ */ v.jsx(
        nM,
        {
          initialValues: o.dataConfig,
          schema: i.dataConfigSchema,
          onConfigChange: (a) => {
            console.log("update data binding", a), t.updateNode(r.id, o.id, { dataConfig: a });
          }
        },
        o.id
      ) : /* @__PURE__ */ v.jsx("div", { children: "No configuration schema available for this widget type." });
  } else
    return /* @__PURE__ */ v.jsx("div", { children: "Please select a widget first." });
}
var uP = "Separator", dh = "horizontal", fP = ["horizontal", "vertical"], Ay = S.forwardRef((t, e) => {
  const { decorative: r, orientation: n = dh, ...o } = t, i = dP(n) ? n : dh, s = r ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ v.jsx(
    ut.div,
    {
      "data-orientation": i,
      ...s,
      ...o,
      ref: e
    }
  );
});
Ay.displayName = uP;
function dP(t) {
  return fP.includes(t);
}
var jy = Ay;
const Iy = S.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: r = !0, ...n }, o) => /* @__PURE__ */ v.jsx(
    jy,
    {
      ref: o,
      decorative: r,
      orientation: e,
      className: bt(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      ...n
    }
  )
);
Iy.displayName = jy.displayName;
const Zi = ({ children: t }) => /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: t }), su = ({ children: t }) => /* @__PURE__ */ v.jsx("div", { className: "space-y-3", children: t }), pP = ({ children: t }) => /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-2 gap-3", children: t }), Ji = ({ children: t }) => /* @__PURE__ */ v.jsx(Jt, { className: "text-xs font-medium", children: t }), hP = ({
  value: t = 0,
  unit: e = "",
  className: r = "w-16",
  step: n,
  onChange: o
}) => /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
  /* @__PURE__ */ v.jsx(
    re,
    {
      type: "number",
      value: t,
      className: `${r} h-7 text-xs px-2 text-right`,
      onChange: (i) => {
        o?.(+i.target.value);
      },
      step: n
    }
  ),
  e && /* @__PURE__ */ v.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: e })
] }), vP = ({
  value: t = [0],
  min: e = 0,
  max: r = 100,
  step: n = 1,
  unit: o = "",
  inputWidth: i = "w-12",
  onChange: a
}) => /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ v.jsx(
    Cs,
    {
      value: t,
      min: e,
      max: r,
      step: n,
      className: "w-20",
      onChange: (s) => console.log(s)
    }
  ),
  /* @__PURE__ */ v.jsx(
    re,
    {
      type: "number",
      value: t[0],
      className: `${i} h-7 text-xs px-2`,
      step: n.toString(),
      onChange: (s) => {
        a?.(+s.target.value);
      }
    }
  ),
  o && /* @__PURE__ */ v.jsx("span", { className: "text-xs text-muted-foreground", children: o })
] }), gP = ({ value: t = "#000000" }) => /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
  /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "w-6 h-6 rounded border border-border cursor-pointer",
      style: { backgroundColor: t }
    }
  ),
  /* @__PURE__ */ v.jsx(
    re,
    {
      type: "text",
      value: t,
      className: "w-20 h-7 text-xs px-2",
      readOnly: !0
    }
  )
] });
function dl({
  label: t,
  value: e = 0,
  unit: r = "",
  className: n,
  step: o,
  onChange: i
}) {
  return /* @__PURE__ */ v.jsxs(Zi, { children: [
    /* @__PURE__ */ v.jsx(Ji, { children: t }),
    /* @__PURE__ */ v.jsx(hP, { value: e, unit: r, className: n, step: o, onChange: i })
  ] });
}
function Va({
  label: t,
  value: e = [0],
  min: r,
  max: n,
  step: o,
  unit: i,
  inputWidth: a,
  onChange: s
}) {
  return /* @__PURE__ */ v.jsxs(Zi, { children: [
    /* @__PURE__ */ v.jsx(Ji, { children: t }),
    /* @__PURE__ */ v.jsx(
      vP,
      {
        value: e,
        min: r,
        max: n,
        step: o,
        unit: i,
        inputWidth: a,
        onChange: s
      }
    )
  ] });
}
function mP({
  label: t,
  value: e = "#000000"
}) {
  return /* @__PURE__ */ v.jsxs(Zi, { children: [
    /* @__PURE__ */ v.jsx(Ji, { children: t }),
    /* @__PURE__ */ v.jsx(gP, { value: e })
  ] });
}
function yP() {
  return /* @__PURE__ */ v.jsxs("div", { className: "divide-y divide-border", children: [
    /* @__PURE__ */ v.jsx(
      To,
      {
        title: "Shadow & Blur",
        icon: /* @__PURE__ */ v.jsx(Np, { className: "h-4 w-4" }),
        children: /* @__PURE__ */ v.jsxs(su, { children: [
          /* @__PURE__ */ v.jsxs(Zi, { children: [
            /* @__PURE__ */ v.jsx(Ji, { children: "Drop Shadow" }),
            /* @__PURE__ */ v.jsx(au, {})
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: "pl-4 space-y-3 opacity-50", children: [
            /* @__PURE__ */ v.jsx(dl, { label: "X Offset", value: 0, unit: "px" }),
            /* @__PURE__ */ v.jsx(dl, { label: "Y Offset", value: 4, unit: "px" }),
            /* @__PURE__ */ v.jsx(dl, { label: "Blur", value: 8, unit: "px" }),
            /* @__PURE__ */ v.jsx(mP, { label: "Shadow Color", value: "#00000040" })
          ] }),
          /* @__PURE__ */ v.jsx(Iy, {}),
          /* @__PURE__ */ v.jsx(Va, { label: "Blur", value: [0], max: 20, step: 0.1 })
        ] })
      }
    ),
    /* @__PURE__ */ v.jsx(
      To,
      {
        title: "Advanced Effects",
        icon: /* @__PURE__ */ v.jsx(Np, { className: "h-4 w-4" }),
        children: /* @__PURE__ */ v.jsxs(su, { children: [
          /* @__PURE__ */ v.jsxs(Zi, { children: [
            /* @__PURE__ */ v.jsx(Ji, { children: "Inner Shadow" }),
            /* @__PURE__ */ v.jsx(au, {})
          ] }),
          /* @__PURE__ */ v.jsx(
            Va,
            {
              label: "Background Blur",
              value: [0],
              max: 50,
              step: 1
            }
          ),
          /* @__PURE__ */ v.jsx(
            Va,
            {
              label: "Brightness",
              value: [100],
              min: 0,
              max: 200,
              step: 1,
              unit: "%"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Va,
            {
              label: "Contrast",
              value: [100],
              min: 0,
              max: 200,
              step: 1,
              unit: "%"
            }
          )
        ] })
      }
    )
  ] });
}
function xP() {
  return /* @__PURE__ */ v.jsx("div", {});
}
function bP(t, e) {
  return S.useReducer((r, n) => e[r][n] ?? r, t);
}
var ed = "ScrollArea", [Fy, Xj] = Ye(ed), [wP, Ue] = Fy(ed), By = S.forwardRef(
  (t, e) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: i = 600,
      ...a
    } = t, [s, c] = S.useState(null), [l, u] = S.useState(null), [f, d] = S.useState(null), [p, g] = S.useState(null), [h, m] = S.useState(null), [y, x] = S.useState(0), [b, w] = S.useState(0), [_, E] = S.useState(!1), [C, T] = S.useState(!1), R = wt(e, (N) => c(N)), D = Bo(o);
    return /* @__PURE__ */ v.jsx(
      wP,
      {
        scope: r,
        type: n,
        dir: D,
        scrollHideDelay: i,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: f,
        onContentChange: d,
        scrollbarX: p,
        onScrollbarXChange: g,
        scrollbarXEnabled: _,
        onScrollbarXEnabledChange: E,
        scrollbarY: h,
        onScrollbarYChange: m,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: T,
        onCornerWidthChange: x,
        onCornerHeightChange: w,
        children: /* @__PURE__ */ v.jsx(
          ut.div,
          {
            dir: D,
            ...a,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": b + "px",
              ...t.style
            }
          }
        )
      }
    );
  }
);
By.displayName = ed;
var Ly = "ScrollAreaViewport", zy = S.forwardRef(
  (t, e) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...i } = t, a = Ue(Ly, r), s = S.useRef(null), c = wt(e, s, a.onViewportChange);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ v.jsx(
        ut.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...t.style
          },
          children: /* @__PURE__ */ v.jsx("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
zy.displayName = Ly;
var Er = "ScrollAreaScrollbar", Gy = S.forwardRef(
  (t, e) => {
    const { forceMount: r, ...n } = t, o = Ue(Er, t.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = t.orientation === "horizontal";
    return S.useEffect(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ v.jsx(SP, { ...n, ref: e, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ v.jsx(CP, { ...n, ref: e, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ v.jsx($y, { ...n, ref: e, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ v.jsx(rd, { ...n, ref: e }) : null;
  }
);
Gy.displayName = Er;
var SP = S.forwardRef((t, e) => {
  const { forceMount: r, ...n } = t, o = Ue(Er, t.__scopeScrollArea), [i, a] = S.useState(!1);
  return S.useEffect(() => {
    const s = o.scrollArea;
    let c = 0;
    if (s) {
      const l = () => {
        window.clearTimeout(c), a(!0);
      }, u = () => {
        c = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ v.jsx(Ne, { present: r || i, children: /* @__PURE__ */ v.jsx(
    $y,
    {
      "data-state": i ? "visible" : "hidden",
      ...n,
      ref: e
    }
  ) });
}), CP = S.forwardRef((t, e) => {
  const { forceMount: r, ...n } = t, o = Ue(Er, t.__scopeScrollArea), i = t.orientation === "horizontal", a = Sc(() => c("SCROLL_END"), 100), [s, c] = bP("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return S.useEffect(() => {
    if (s === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [s, o.scrollHideDelay, c]), S.useEffect(() => {
    const l = o.viewport, u = i ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[u];
      const d = () => {
        const p = l[u];
        f !== p && (c("SCROLL"), a()), f = p;
      };
      return l.addEventListener("scroll", d), () => l.removeEventListener("scroll", d);
    }
  }, [o.viewport, i, c, a]), /* @__PURE__ */ v.jsx(Ne, { present: r || s !== "hidden", children: /* @__PURE__ */ v.jsx(
    rd,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...n,
      ref: e,
      onPointerEnter: rt(t.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: rt(t.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), $y = S.forwardRef((t, e) => {
  const r = Ue(Er, t.__scopeScrollArea), { forceMount: n, ...o } = t, [i, a] = S.useState(!1), s = t.orientation === "horizontal", c = Sc(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      a(s ? l : u);
    }
  }, 10);
  return Ro(r.viewport, c), Ro(r.content, c), /* @__PURE__ */ v.jsx(Ne, { present: n || i, children: /* @__PURE__ */ v.jsx(
    rd,
    {
      "data-state": i ? "visible" : "hidden",
      ...o,
      ref: e
    }
  ) });
}), rd = S.forwardRef((t, e) => {
  const { orientation: r = "vertical", ...n } = t, o = Ue(Er, t.__scopeScrollArea), i = S.useRef(null), a = S.useRef(0), [s, c] = S.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = Uy(s.viewport, s.content), u = {
    ...n,
    sizes: s,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (d) => i.current = d,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (d) => a.current = d
  };
  function f(d, p) {
    return MP(d, a.current, s, p);
  }
  return r === "horizontal" ? /* @__PURE__ */ v.jsx(
    EP,
    {
      ...u,
      ref: e,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const d = o.viewport.scrollLeft, p = ph(d, s, o.dir);
          i.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (d) => {
        o.viewport && (o.viewport.scrollLeft = d);
      },
      onDragScroll: (d) => {
        o.viewport && (o.viewport.scrollLeft = f(d, o.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ v.jsx(
    _P,
    {
      ...u,
      ref: e,
      onThumbPositionChange: () => {
        if (o.viewport && i.current) {
          const d = o.viewport.scrollTop, p = ph(d, s);
          i.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (d) => {
        o.viewport && (o.viewport.scrollTop = d);
      },
      onDragScroll: (d) => {
        o.viewport && (o.viewport.scrollTop = f(d));
      }
    }
  ) : null;
}), EP = S.forwardRef((t, e) => {
  const { sizes: r, onSizesChange: n, ...o } = t, i = Ue(Er, t.__scopeScrollArea), [a, s] = S.useState(), c = S.useRef(null), l = wt(e, c, i.onScrollbarXChange);
  return S.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ v.jsx(
    Wy,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: r,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": wc(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (u) => t.onThumbPointerDown(u.x),
      onDragScroll: (u) => t.onDragScroll(u.x),
      onWheelScroll: (u, f) => {
        if (i.viewport) {
          const d = i.viewport.scrollLeft + u.deltaX;
          t.onWheelScroll(d), qy(d, f) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && a && n({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Rs(a.paddingLeft),
            paddingEnd: Rs(a.paddingRight)
          }
        });
      }
    }
  );
}), _P = S.forwardRef((t, e) => {
  const { sizes: r, onSizesChange: n, ...o } = t, i = Ue(Er, t.__scopeScrollArea), [a, s] = S.useState(), c = S.useRef(null), l = wt(e, c, i.onScrollbarYChange);
  return S.useEffect(() => {
    c.current && s(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ v.jsx(
    Wy,
    {
      "data-orientation": "vertical",
      ...o,
      ref: l,
      sizes: r,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": wc(r) + "px",
        ...t.style
      },
      onThumbPointerDown: (u) => t.onThumbPointerDown(u.y),
      onDragScroll: (u) => t.onDragScroll(u.y),
      onWheelScroll: (u, f) => {
        if (i.viewport) {
          const d = i.viewport.scrollTop + u.deltaY;
          t.onWheelScroll(d), qy(d, f) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && i.viewport && a && n({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Rs(a.paddingTop),
            paddingEnd: Rs(a.paddingBottom)
          }
        });
      }
    }
  );
}), [TP, Vy] = Fy(Er), Wy = S.forwardRef((t, e) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: o,
    onThumbChange: i,
    onThumbPointerUp: a,
    onThumbPointerDown: s,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: u,
    onResize: f,
    ...d
  } = t, p = Ue(Er, r), [g, h] = S.useState(null), m = wt(e, (R) => h(R)), y = S.useRef(null), x = S.useRef(""), b = p.viewport, w = n.content - n.viewport, _ = de(u), E = de(c), C = Sc(f, 10);
  function T(R) {
    if (y.current) {
      const D = R.clientX - y.current.left, N = R.clientY - y.current.top;
      l({ x: D, y: N });
    }
  }
  return S.useEffect(() => {
    const R = (D) => {
      const N = D.target;
      g?.contains(N) && _(D, w);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [b, g, w, _]), S.useEffect(E, [n, E]), Ro(g, C), Ro(p.content, C), /* @__PURE__ */ v.jsx(
    TP,
    {
      scope: r,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: de(i),
      onThumbPointerUp: de(a),
      onThumbPositionChange: E,
      onThumbPointerDown: de(s),
      children: /* @__PURE__ */ v.jsx(
        ut.div,
        {
          ...d,
          ref: m,
          style: { position: "absolute", ...d.style },
          onPointerDown: rt(t.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = g.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), T(R));
          }),
          onPointerMove: rt(t.onPointerMove, T),
          onPointerUp: rt(t.onPointerUp, (R) => {
            const D = R.target;
            D.hasPointerCapture(R.pointerId) && D.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = x.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Ts = "ScrollAreaThumb", Hy = S.forwardRef(
  (t, e) => {
    const { forceMount: r, ...n } = t, o = Vy(Ts, t.__scopeScrollArea);
    return /* @__PURE__ */ v.jsx(Ne, { present: r || o.hasThumb, children: /* @__PURE__ */ v.jsx(RP, { ref: e, ...n }) });
  }
), RP = S.forwardRef(
  (t, e) => {
    const { __scopeScrollArea: r, style: n, ...o } = t, i = Ue(Ts, r), a = Vy(Ts, r), { onThumbPositionChange: s } = a, c = wt(
      e,
      (f) => a.onThumbChange(f)
    ), l = S.useRef(void 0), u = Sc(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return S.useEffect(() => {
      const f = i.viewport;
      if (f) {
        const d = () => {
          if (u(), !l.current) {
            const p = PP(f, s);
            l.current = p, s();
          }
        };
        return s(), f.addEventListener("scroll", d), () => f.removeEventListener("scroll", d);
      }
    }, [i.viewport, u, s]), /* @__PURE__ */ v.jsx(
      ut.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: rt(t.onPointerDownCapture, (f) => {
          const p = f.target.getBoundingClientRect(), g = f.clientX - p.left, h = f.clientY - p.top;
          a.onThumbPointerDown({ x: g, y: h });
        }),
        onPointerUp: rt(t.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Hy.displayName = Ts;
var nd = "ScrollAreaCorner", Yy = S.forwardRef(
  (t, e) => {
    const r = Ue(nd, t.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ v.jsx(DP, { ...t, ref: e }) : null;
  }
);
Yy.displayName = nd;
var DP = S.forwardRef((t, e) => {
  const { __scopeScrollArea: r, ...n } = t, o = Ue(nd, r), [i, a] = S.useState(0), [s, c] = S.useState(0), l = !!(i && s);
  return Ro(o.scrollbarX, () => {
    const u = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(u), c(u);
  }), Ro(o.scrollbarY, () => {
    const u = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(u), a(u);
  }), l ? /* @__PURE__ */ v.jsx(
    ut.div,
    {
      ...n,
      ref: e,
      style: {
        width: i,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...t.style
      }
    }
  ) : null;
});
function Rs(t) {
  return t ? parseInt(t, 10) : 0;
}
function Uy(t, e) {
  const r = t / e;
  return isNaN(r) ? 0 : r;
}
function wc(t) {
  const e = Uy(t.viewport, t.content), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = (t.scrollbar.size - r) * e;
  return Math.max(n, 18);
}
function MP(t, e, r, n = "ltr") {
  const o = wc(r), i = o / 2, a = e || i, s = o - a, c = r.scrollbar.paddingStart + a, l = r.scrollbar.size - r.scrollbar.paddingEnd - s, u = r.content - r.viewport, f = n === "ltr" ? [0, u] : [u * -1, 0];
  return Xy([c, l], f)(t);
}
function ph(t, e, r = "ltr") {
  const n = wc(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, a = e.content - e.viewport, s = i - n, c = r === "ltr" ? [0, a] : [a * -1, 0], l = Wi(t, c);
  return Xy([0, a], [0, s])(l);
}
function Xy(t, e) {
  return (r) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const n = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + n * (r - t[0]);
  };
}
function qy(t, e) {
  return t > 0 && t < e;
}
var PP = (t, e = () => {
}) => {
  let r = { left: t.scrollLeft, top: t.scrollTop }, n = 0;
  return function o() {
    const i = { left: t.scrollLeft, top: t.scrollTop }, a = r.left !== i.left, s = r.top !== i.top;
    (a || s) && e(), r = i, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Sc(t, e) {
  const r = de(t), n = S.useRef(0);
  return S.useEffect(() => () => window.clearTimeout(n.current), []), S.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, e);
  }, [r, e]);
}
function Ro(t, e) {
  const r = de(e);
  ae(() => {
    let n = 0;
    if (t) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(t), () => {
        window.cancelAnimationFrame(n), o.unobserve(t);
      };
    }
  }, [t, r]);
}
var OP = By, NP = zy, kP = Yy;
function AP({
  className: t,
  children: e,
  ...r
}) {
  return /* @__PURE__ */ v.jsxs(
    OP,
    {
      "data-slot": "scroll-area",
      className: bt("relative", t),
      ...r,
      children: [
        /* @__PURE__ */ v.jsx(
          NP,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: e
          }
        ),
        /* @__PURE__ */ v.jsx(jP, {}),
        /* @__PURE__ */ v.jsx(kP, {})
      ]
    }
  );
}
function jP({
  className: t,
  orientation: e = "vertical",
  ...r
}) {
  return /* @__PURE__ */ v.jsx(
    Gy,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: e,
      className: bt(
        "flex touch-none p-px transition-colors select-none",
        e === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        t
      ),
      ...r,
      children: /* @__PURE__ */ v.jsx(
        Hy,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
var pi = { exports: {} };
pi.exports;
var hh;
function IP() {
  return hh || (hh = 1, function(t, e) {
    var r = 200, n = "__lodash_hash_undefined__", o = 1, i = 2, a = 9007199254740991, s = "[object Arguments]", c = "[object Array]", l = "[object AsyncFunction]", u = "[object Boolean]", f = "[object Date]", d = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", h = "[object Map]", m = "[object Number]", y = "[object Null]", x = "[object Object]", b = "[object Promise]", w = "[object Proxy]", _ = "[object RegExp]", E = "[object Set]", C = "[object String]", T = "[object Symbol]", R = "[object Undefined]", D = "[object WeakMap]", N = "[object ArrayBuffer]", M = "[object DataView]", O = "[object Float32Array]", k = "[object Float64Array]", F = "[object Int8Array]", $ = "[object Int16Array]", V = "[object Int32Array]", L = "[object Uint8Array]", z = "[object Uint8ClampedArray]", j = "[object Uint16Array]", B = "[object Uint32Array]", Y = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, X = /^(?:0|[1-9]\d*)$/, H = {};
    H[O] = H[k] = H[F] = H[$] = H[V] = H[L] = H[z] = H[j] = H[B] = !0, H[s] = H[c] = H[N] = H[u] = H[M] = H[f] = H[d] = H[p] = H[h] = H[m] = H[x] = H[_] = H[E] = H[C] = H[D] = !1;
    var Q = typeof Da == "object" && Da && Da.Object === Object && Da, W = typeof self == "object" && self && self.Object === Object && self, q = Q || W || Function("return this")(), ot = e && !e.nodeType && e, nt = ot && !0 && t && !t.nodeType && t, U = nt && nt.exports === ot, et = U && Q.process, dt = function() {
      try {
        return et && et.binding && et.binding("util");
      } catch {
      }
    }(), ct = dt && dt.isTypedArray;
    function ft(P, G) {
      for (var J = -1, at = P == null ? 0 : P.length, Ot = 0, yt = []; ++J < at; ) {
        var Wt = P[J];
        G(Wt, J, P) && (yt[Ot++] = Wt);
      }
      return yt;
    }
    function ht(P, G) {
      for (var J = -1, at = G.length, Ot = P.length; ++J < at; )
        P[Ot + J] = G[J];
      return P;
    }
    function Ct(P, G) {
      for (var J = -1, at = P == null ? 0 : P.length; ++J < at; )
        if (G(P[J], J, P))
          return !0;
      return !1;
    }
    function Rt(P, G) {
      for (var J = -1, at = Array(P); ++J < P; )
        at[J] = G(J);
      return at;
    }
    function mt(P) {
      return function(G) {
        return P(G);
      };
    }
    function _t(P, G) {
      return P.has(G);
    }
    function qt(P, G) {
      return P?.[G];
    }
    function se(P) {
      var G = -1, J = Array(P.size);
      return P.forEach(function(at, Ot) {
        J[++G] = [Ot, at];
      }), J;
    }
    function oe(P, G) {
      return function(J) {
        return P(G(J));
      };
    }
    function Vt(P) {
      var G = -1, J = Array(P.size);
      return P.forEach(function(at) {
        J[++G] = at;
      }), J;
    }
    var Yt = Array.prototype, cr = Function.prototype, Ee = Object.prototype, Yn = q["__core-js_shared__"], Xo = cr.toString, ke = Ee.hasOwnProperty, vn = function() {
      var P = /[^.]+$/.exec(Yn && Yn.keys && Yn.keys.IE_PROTO || "");
      return P ? "Symbol(src)_1." + P : "";
    }(), Un = Ee.toString, Ac = RegExp(
      "^" + Xo.call(ke).replace(Y, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), qo = U ? q.Buffer : void 0, Fr = q.Symbol, xa = q.Uint8Array, ba = Ee.propertyIsEnumerable, jc = Yt.splice, Xe = Fr ? Fr.toStringTag : void 0, Dt = Object.getOwnPropertySymbols, ce = qo ? qo.isBuffer : void 0, wa = oe(Object.keys, Object), Xn = qn(q, "DataView"), gn = qn(q, "Map"), mn = qn(q, "Promise"), Ic = qn(q, "Set"), Fc = qn(q, "WeakMap"), Ko = qn(Object, "create"), Zx = bn(Xn), Jx = bn(gn), Qx = bn(mn), tb = bn(Ic), eb = bn(Fc), Bd = Fr ? Fr.prototype : void 0, Bc = Bd ? Bd.valueOf : void 0;
    function yn(P) {
      var G = -1, J = P == null ? 0 : P.length;
      for (this.clear(); ++G < J; ) {
        var at = P[G];
        this.set(at[0], at[1]);
      }
    }
    function rb() {
      this.__data__ = Ko ? Ko(null) : {}, this.size = 0;
    }
    function nb(P) {
      var G = this.has(P) && delete this.__data__[P];
      return this.size -= G ? 1 : 0, G;
    }
    function ob(P) {
      var G = this.__data__;
      if (Ko) {
        var J = G[P];
        return J === n ? void 0 : J;
      }
      return ke.call(G, P) ? G[P] : void 0;
    }
    function ib(P) {
      var G = this.__data__;
      return Ko ? G[P] !== void 0 : ke.call(G, P);
    }
    function ab(P, G) {
      var J = this.__data__;
      return this.size += this.has(P) ? 0 : 1, J[P] = Ko && G === void 0 ? n : G, this;
    }
    yn.prototype.clear = rb, yn.prototype.delete = nb, yn.prototype.get = ob, yn.prototype.has = ib, yn.prototype.set = ab;
    function Tr(P) {
      var G = -1, J = P == null ? 0 : P.length;
      for (this.clear(); ++G < J; ) {
        var at = P[G];
        this.set(at[0], at[1]);
      }
    }
    function sb() {
      this.__data__ = [], this.size = 0;
    }
    function cb(P) {
      var G = this.__data__, J = Ca(G, P);
      if (J < 0)
        return !1;
      var at = G.length - 1;
      return J == at ? G.pop() : jc.call(G, J, 1), --this.size, !0;
    }
    function lb(P) {
      var G = this.__data__, J = Ca(G, P);
      return J < 0 ? void 0 : G[J][1];
    }
    function ub(P) {
      return Ca(this.__data__, P) > -1;
    }
    function fb(P, G) {
      var J = this.__data__, at = Ca(J, P);
      return at < 0 ? (++this.size, J.push([P, G])) : J[at][1] = G, this;
    }
    Tr.prototype.clear = sb, Tr.prototype.delete = cb, Tr.prototype.get = lb, Tr.prototype.has = ub, Tr.prototype.set = fb;
    function xn(P) {
      var G = -1, J = P == null ? 0 : P.length;
      for (this.clear(); ++G < J; ) {
        var at = P[G];
        this.set(at[0], at[1]);
      }
    }
    function db() {
      this.size = 0, this.__data__ = {
        hash: new yn(),
        map: new (gn || Tr)(),
        string: new yn()
      };
    }
    function pb(P) {
      var G = Ea(this, P).delete(P);
      return this.size -= G ? 1 : 0, G;
    }
    function hb(P) {
      return Ea(this, P).get(P);
    }
    function vb(P) {
      return Ea(this, P).has(P);
    }
    function gb(P, G) {
      var J = Ea(this, P), at = J.size;
      return J.set(P, G), this.size += J.size == at ? 0 : 1, this;
    }
    xn.prototype.clear = db, xn.prototype.delete = pb, xn.prototype.get = hb, xn.prototype.has = vb, xn.prototype.set = gb;
    function Sa(P) {
      var G = -1, J = P == null ? 0 : P.length;
      for (this.__data__ = new xn(); ++G < J; )
        this.add(P[G]);
    }
    function mb(P) {
      return this.__data__.set(P, n), this;
    }
    function yb(P) {
      return this.__data__.has(P);
    }
    Sa.prototype.add = Sa.prototype.push = mb, Sa.prototype.has = yb;
    function Br(P) {
      var G = this.__data__ = new Tr(P);
      this.size = G.size;
    }
    function xb() {
      this.__data__ = new Tr(), this.size = 0;
    }
    function bb(P) {
      var G = this.__data__, J = G.delete(P);
      return this.size = G.size, J;
    }
    function wb(P) {
      return this.__data__.get(P);
    }
    function Sb(P) {
      return this.__data__.has(P);
    }
    function Cb(P, G) {
      var J = this.__data__;
      if (J instanceof Tr) {
        var at = J.__data__;
        if (!gn || at.length < r - 1)
          return at.push([P, G]), this.size = ++J.size, this;
        J = this.__data__ = new xn(at);
      }
      return J.set(P, G), this.size = J.size, this;
    }
    Br.prototype.clear = xb, Br.prototype.delete = bb, Br.prototype.get = wb, Br.prototype.has = Sb, Br.prototype.set = Cb;
    function Eb(P, G) {
      var J = _a(P), at = !J && Lb(P), Ot = !J && !at && Lc(P), yt = !J && !at && !Ot && Ud(P), Wt = J || at || Ot || yt, ie = Wt ? Rt(P.length, String) : [], le = ie.length;
      for (var zt in P)
        ke.call(P, zt) && !(Wt && // Safari 9 has enumerable `arguments.length` in strict mode.
        (zt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        Ot && (zt == "offset" || zt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        yt && (zt == "buffer" || zt == "byteLength" || zt == "byteOffset") || // Skip index properties.
        Ab(zt, le))) && ie.push(zt);
      return ie;
    }
    function Ca(P, G) {
      for (var J = P.length; J--; )
        if (Vd(P[J][0], G))
          return J;
      return -1;
    }
    function _b(P, G, J) {
      var at = G(P);
      return _a(P) ? at : ht(at, J(P));
    }
    function Zo(P) {
      return P == null ? P === void 0 ? R : y : Xe && Xe in Object(P) ? Nb(P) : Bb(P);
    }
    function Ld(P) {
      return Jo(P) && Zo(P) == s;
    }
    function zd(P, G, J, at, Ot) {
      return P === G ? !0 : P == null || G == null || !Jo(P) && !Jo(G) ? P !== P && G !== G : Tb(P, G, J, at, zd, Ot);
    }
    function Tb(P, G, J, at, Ot, yt) {
      var Wt = _a(P), ie = _a(G), le = Wt ? c : Lr(P), zt = ie ? c : Lr(G);
      le = le == s ? x : le, zt = zt == s ? x : zt;
      var _e = le == x, qe = zt == x, pe = le == zt;
      if (pe && Lc(P)) {
        if (!Lc(G))
          return !1;
        Wt = !0, _e = !1;
      }
      if (pe && !_e)
        return yt || (yt = new Br()), Wt || Ud(P) ? Gd(P, G, J, at, Ot, yt) : Pb(P, G, le, J, at, Ot, yt);
      if (!(J & o)) {
        var Ae = _e && ke.call(P, "__wrapped__"), je = qe && ke.call(G, "__wrapped__");
        if (Ae || je) {
          var zr = Ae ? P.value() : P, Rr = je ? G.value() : G;
          return yt || (yt = new Br()), Ot(zr, Rr, J, at, yt);
        }
      }
      return pe ? (yt || (yt = new Br()), Ob(P, G, J, at, Ot, yt)) : !1;
    }
    function Rb(P) {
      if (!Yd(P) || Ib(P))
        return !1;
      var G = Wd(P) ? Ac : K;
      return G.test(bn(P));
    }
    function Db(P) {
      return Jo(P) && Hd(P.length) && !!H[Zo(P)];
    }
    function Mb(P) {
      if (!Fb(P))
        return wa(P);
      var G = [];
      for (var J in Object(P))
        ke.call(P, J) && J != "constructor" && G.push(J);
      return G;
    }
    function Gd(P, G, J, at, Ot, yt) {
      var Wt = J & o, ie = P.length, le = G.length;
      if (ie != le && !(Wt && le > ie))
        return !1;
      var zt = yt.get(P);
      if (zt && yt.get(G))
        return zt == G;
      var _e = -1, qe = !0, pe = J & i ? new Sa() : void 0;
      for (yt.set(P, G), yt.set(G, P); ++_e < ie; ) {
        var Ae = P[_e], je = G[_e];
        if (at)
          var zr = Wt ? at(je, Ae, _e, G, P, yt) : at(Ae, je, _e, P, G, yt);
        if (zr !== void 0) {
          if (zr)
            continue;
          qe = !1;
          break;
        }
        if (pe) {
          if (!Ct(G, function(Rr, wn) {
            if (!_t(pe, wn) && (Ae === Rr || Ot(Ae, Rr, J, at, yt)))
              return pe.push(wn);
          })) {
            qe = !1;
            break;
          }
        } else if (!(Ae === je || Ot(Ae, je, J, at, yt))) {
          qe = !1;
          break;
        }
      }
      return yt.delete(P), yt.delete(G), qe;
    }
    function Pb(P, G, J, at, Ot, yt, Wt) {
      switch (J) {
        case M:
          if (P.byteLength != G.byteLength || P.byteOffset != G.byteOffset)
            return !1;
          P = P.buffer, G = G.buffer;
        case N:
          return !(P.byteLength != G.byteLength || !yt(new xa(P), new xa(G)));
        case u:
        case f:
        case m:
          return Vd(+P, +G);
        case d:
          return P.name == G.name && P.message == G.message;
        case _:
        case C:
          return P == G + "";
        case h:
          var ie = se;
        case E:
          var le = at & o;
          if (ie || (ie = Vt), P.size != G.size && !le)
            return !1;
          var zt = Wt.get(P);
          if (zt)
            return zt == G;
          at |= i, Wt.set(P, G);
          var _e = Gd(ie(P), ie(G), at, Ot, yt, Wt);
          return Wt.delete(P), _e;
        case T:
          if (Bc)
            return Bc.call(P) == Bc.call(G);
      }
      return !1;
    }
    function Ob(P, G, J, at, Ot, yt) {
      var Wt = J & o, ie = $d(P), le = ie.length, zt = $d(G), _e = zt.length;
      if (le != _e && !Wt)
        return !1;
      for (var qe = le; qe--; ) {
        var pe = ie[qe];
        if (!(Wt ? pe in G : ke.call(G, pe)))
          return !1;
      }
      var Ae = yt.get(P);
      if (Ae && yt.get(G))
        return Ae == G;
      var je = !0;
      yt.set(P, G), yt.set(G, P);
      for (var zr = Wt; ++qe < le; ) {
        pe = ie[qe];
        var Rr = P[pe], wn = G[pe];
        if (at)
          var Xd = Wt ? at(wn, Rr, pe, G, P, yt) : at(Rr, wn, pe, P, G, yt);
        if (!(Xd === void 0 ? Rr === wn || Ot(Rr, wn, J, at, yt) : Xd)) {
          je = !1;
          break;
        }
        zr || (zr = pe == "constructor");
      }
      if (je && !zr) {
        var Ta = P.constructor, Ra = G.constructor;
        Ta != Ra && "constructor" in P && "constructor" in G && !(typeof Ta == "function" && Ta instanceof Ta && typeof Ra == "function" && Ra instanceof Ra) && (je = !1);
      }
      return yt.delete(P), yt.delete(G), je;
    }
    function $d(P) {
      return _b(P, $b, kb);
    }
    function Ea(P, G) {
      var J = P.__data__;
      return jb(G) ? J[typeof G == "string" ? "string" : "hash"] : J.map;
    }
    function qn(P, G) {
      var J = qt(P, G);
      return Rb(J) ? J : void 0;
    }
    function Nb(P) {
      var G = ke.call(P, Xe), J = P[Xe];
      try {
        P[Xe] = void 0;
        var at = !0;
      } catch {
      }
      var Ot = Un.call(P);
      return at && (G ? P[Xe] = J : delete P[Xe]), Ot;
    }
    var kb = Dt ? function(P) {
      return P == null ? [] : (P = Object(P), ft(Dt(P), function(G) {
        return ba.call(P, G);
      }));
    } : Vb, Lr = Zo;
    (Xn && Lr(new Xn(new ArrayBuffer(1))) != M || gn && Lr(new gn()) != h || mn && Lr(mn.resolve()) != b || Ic && Lr(new Ic()) != E || Fc && Lr(new Fc()) != D) && (Lr = function(P) {
      var G = Zo(P), J = G == x ? P.constructor : void 0, at = J ? bn(J) : "";
      if (at)
        switch (at) {
          case Zx:
            return M;
          case Jx:
            return h;
          case Qx:
            return b;
          case tb:
            return E;
          case eb:
            return D;
        }
      return G;
    });
    function Ab(P, G) {
      return G = G ?? a, !!G && (typeof P == "number" || X.test(P)) && P > -1 && P % 1 == 0 && P < G;
    }
    function jb(P) {
      var G = typeof P;
      return G == "string" || G == "number" || G == "symbol" || G == "boolean" ? P !== "__proto__" : P === null;
    }
    function Ib(P) {
      return !!vn && vn in P;
    }
    function Fb(P) {
      var G = P && P.constructor, J = typeof G == "function" && G.prototype || Ee;
      return P === J;
    }
    function Bb(P) {
      return Un.call(P);
    }
    function bn(P) {
      if (P != null) {
        try {
          return Xo.call(P);
        } catch {
        }
        try {
          return P + "";
        } catch {
        }
      }
      return "";
    }
    function Vd(P, G) {
      return P === G || P !== P && G !== G;
    }
    var Lb = Ld(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Ld : function(P) {
      return Jo(P) && ke.call(P, "callee") && !ba.call(P, "callee");
    }, _a = Array.isArray;
    function zb(P) {
      return P != null && Hd(P.length) && !Wd(P);
    }
    var Lc = ce || Wb;
    function Gb(P, G) {
      return zd(P, G);
    }
    function Wd(P) {
      if (!Yd(P))
        return !1;
      var G = Zo(P);
      return G == p || G == g || G == l || G == w;
    }
    function Hd(P) {
      return typeof P == "number" && P > -1 && P % 1 == 0 && P <= a;
    }
    function Yd(P) {
      var G = typeof P;
      return P != null && (G == "object" || G == "function");
    }
    function Jo(P) {
      return P != null && typeof P == "object";
    }
    var Ud = ct ? mt(ct) : Db;
    function $b(P) {
      return zb(P) ? Eb(P) : Mb(P);
    }
    function Vb() {
      return [];
    }
    function Wb() {
      return !1;
    }
    t.exports = Gb;
  }(pi, pi.exports)), pi.exports;
}
var FP = IP();
const BP = /* @__PURE__ */ av(FP), LP = Ir((t) => ({
  config: {},
  setConfig: (e, r) => t((n) => ({
    config: { ...n.config, [e]: r }
  })),
  setAll: (e) => t({ config: e })
})), Ky = zu({
  config: {},
  setConfig: (t, e) => {
  }
}), zP = ({
  children: t,
  initialValue: e = {},
  onChange: r
}) => {
  const { config: n, setConfig: o, setAll: i } = LP(), a = er({});
  return Ht(() => {
    Object.keys(e).length > 0 && i(e);
  }, [e, i]), Ht(() => {
    r && Object.keys(n).length > 0 && !BP(n, a.current) && (a.current = { ...n }, r(n));
  }, [n, r]), /* @__PURE__ */ v.jsx(Ky.Provider, { value: { config: n, setConfig: o }, children: t });
}, GP = () => Gu(Ky);
function $P({ field: t, value: e, onChange: r }) {
  return /* @__PURE__ */ v.jsx(re, { type: "text", value: e || "", placeholder: t.placeholder, onChange: (n) => r(n.target.value) });
}
function VP({ value: t, onChange: e }) {
  return /* @__PURE__ */ v.jsx(au, { checked: !!t, onCheckedChange: e });
}
function WP({ value: t, onChange: e }) {
  return /* @__PURE__ */ v.jsx(
    re,
    {
      type: "number",
      value: t ?? "",
      onChange: (r) => e(Number(r.target.value))
    }
  );
}
function HP({ value: t, onChange: e }) {
  return /* @__PURE__ */ v.jsx(re, { type: "color", value: t, onChange: (r) => e(r.target.value) });
}
function YP({ field: t, value: e, onChange: r }) {
  return /* @__PURE__ */ v.jsxs(Fn, { value: e, onValueChange: r, children: [
    /* @__PURE__ */ v.jsx(an, { children: e }),
    /* @__PURE__ */ v.jsx(sn, { children: t.options.map((n) => /* @__PURE__ */ v.jsx(fe, { value: n.value, children: n.label }, n.value)) })
  ] });
}
function UP({ field: t, value: e, onChange: r }) {
  return /* @__PURE__ */ v.jsx(
    fg,
    {
      value: e || "",
      placeholder: t.placeholder,
      rows: t.rows || 3,
      onChange: (n) => r(n.target.value)
    }
  );
}
const XP = {
  input: $P,
  switch: VP,
  number: WP,
  color: HP,
  select: YP,
  textarea: UP
}, qP = ({ label: t, layout: e = "vertical", children: r }) => {
  const n = e === "horizontal";
  return /* @__PURE__ */ v.jsxs("div", { className: `${n ? "flex items-center justify-between gap-4" : "flex flex-col gap-1"}`, children: [
    /* @__PURE__ */ v.jsx(Jt, { className: Ur("text-xs shrink-0", n ? "w-24" : ""), children: t }),
    /* @__PURE__ */ v.jsx("div", { className: `${n ? "flex-1" : ""}`, children: r })
  ] });
};
function KP({ field: t, layout: e = "horizontal" }) {
  const { config: r, setConfig: n } = GP(), o = r[t.name] ?? t.default, i = (s) => n(t.name, s), a = XP[t.type];
  return a ? /* @__PURE__ */ v.jsx(qP, { label: t.label, layout: e, children: /* @__PURE__ */ v.jsx(a, { field: t, value: o, onChange: i, layout: e }) }) : null;
}
const ZP = ({ schema: t, initialValue: e = {}, onChange: r }) => /* @__PURE__ */ v.jsx(zP, { initialValue: e, onChange: r, children: /* @__PURE__ */ v.jsx(AP, { className: "", children: /* @__PURE__ */ v.jsx("div", { className: "divide-y divide-border", children: t?.sections?.map((n) => /* @__PURE__ */ v.jsx(To, { title: n.title, icon: null, children: n.settings.map((o) => /* @__PURE__ */ v.jsx(KP, { field: o }, o.name)) }, n.type)) }) }) }), Wa = ee.memo(function({
  label: e,
  value: r,
  unit: n = "px",
  propertyKey: o,
  onChange: i
}) {
  return /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ v.jsxs(Jt, { className: "text-xs font-medium w-10", children: [
      " ",
      e,
      " "
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 items-center", children: [
      /* @__PURE__ */ v.jsx(re, { type: "number", value: Math.round(r), className: "h-7 text-xs px-2 text-right", onChange: (a) => i(o, Math.round(+a.target.value)) }),
      /* @__PURE__ */ v.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
        " ",
        n,
        " "
      ] })
    ] })
  ] });
}), JP = ee.memo(function({ value: e, onChange: r }) {
  const n = ee.useCallback(
    (o, i) => {
      if (r) {
        const a = { ...e, [o]: i };
        r(a);
      }
    },
    [r, e]
  );
  return /* @__PURE__ */ v.jsxs(To, { title: "Position & Size", icon: /* @__PURE__ */ v.jsx(QC, { className: "h-4 w-4" }), className: "border-b", children: [
    /* @__PURE__ */ v.jsxs(pP, { children: [
      /* @__PURE__ */ v.jsx(Wa, { label: "X", propertyKey: "left", value: e.left, onChange: n }),
      /* @__PURE__ */ v.jsx(Wa, { label: "Y", propertyKey: "top", value: e.top, onChange: n }),
      /* @__PURE__ */ v.jsx(Wa, { label: "W", propertyKey: "width", value: e.width, onChange: n }),
      /* @__PURE__ */ v.jsx(Wa, { label: "H", propertyKey: "height", value: e.height, onChange: n })
    ] }),
    /* @__PURE__ */ v.jsx(su, { children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ v.jsx(Jt, { className: "text-xs font-medium w-14", children: " Rotation " }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 items-center gap-2", children: [
        /* @__PURE__ */ v.jsx(Cs, { value: [Math.round(e.rotation || 0)], min: 0, max: 360, step: 1, className: "w-20", onValueChange: ([o]) => n("rotation", Math.round(o)) }),
        /* @__PURE__ */ v.jsxs("div", { className: "inline-flex w-20", children: [
          /* @__PURE__ */ v.jsx(
            re,
            {
              type: "number",
              value: Math.round(e.rotation || 0),
              className: "w-16 h-7 text-xs px-2",
              step: "1",
              onChange: (o) => n("rotation", Math.round(+o.target.value))
            }
          ),
          /* @__PURE__ */ v.jsx("span", { className: "text-xs text-muted-foreground", children: "°" })
        ] })
      ] })
    ] }) })
  ] });
});
function QP() {
  const t = qs(), e = It(), r = wr(), { selectedDoc: n, selectedNodes: o } = t.getCurrentSelection(), i = o[0];
  if (i?.type) {
    const a = r.registry.get(i?.type);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        JP,
        {
          value: i.position,
          onChange: (s) => {
            e.updateNode(n.id, i.id, { position: s });
          }
        }
      ),
      a?.styleConfigSchema && /* @__PURE__ */ v.jsx(
        ZP,
        {
          initialValue: i.styleConfig || {},
          schema: a.styleConfigSchema,
          onChange: (s) => {
            e.updateNode(n.id, i.id, { styleConfig: s });
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ v.jsx("div", { children: "No selected widget" });
}
function tO() {
  const t = Re(), e = It(), { selectedTargets: r } = t, n = e.getNode(e.json?.docs[0]?.id, r[0]);
  return /* @__PURE__ */ v.jsx("div", { className: `h-full ${n ? "overflow-y-auto" : "overflow-hidden"}`, children: /* @__PURE__ */ v.jsxs(jg, { defaultValue: "style", className: "w-full h-full", children: [
    /* @__PURE__ */ v.jsxs(xf, { className: "grid w-full grid-cols-4 m-0 rounded-none h-10 sticky top-0 z-10", children: [
      /* @__PURE__ */ v.jsx(Xr, { value: "data", className: "text-xs h-8", children: "Data" }),
      /* @__PURE__ */ v.jsx(Xr, { value: "style", className: "text-xs h-8", children: "Style" }),
      /* @__PURE__ */ v.jsx(Xr, { value: "layout", className: "text-xs h-8", children: "Layout" }),
      /* @__PURE__ */ v.jsx(Xr, { value: "effects", className: "text-xs h-8", children: "Effects" })
    ] }),
    n ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(qr, { value: "style", className: "mt-0", children: /* @__PURE__ */ v.jsx(QP, {}) }),
      /* @__PURE__ */ v.jsx(qr, { value: "layout", className: "mt-0", children: /* @__PURE__ */ v.jsx(xP, {}) }),
      /* @__PURE__ */ v.jsx(qr, { value: "data", className: "mt-0", children: /* @__PURE__ */ v.jsx(lP, {}) }),
      /* @__PURE__ */ v.jsx(qr, { value: "effects", className: "mt-0", children: /* @__PURE__ */ v.jsx(yP, {}) })
    ] }) : /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ v.jsx(Ui, { className: "w-full border-none shadow-none bg-transparent", children: /* @__PURE__ */ v.jsxs(Xi, { className: "flex flex-col items-center justify-center p-8 text-center", children: [
      /* @__PURE__ */ v.jsx("div", { className: "mb-4 p-3 rounded-full bg-muted", children: /* @__PURE__ */ v.jsx(eE, { className: "h-8 w-8 text-muted-foreground" }) }),
      /* @__PURE__ */ v.jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "No Component Selected" }),
      /* @__PURE__ */ v.jsx("p", { className: "text-sm text-muted-foreground mb-6 max-w-sm", children: "Select a component for configuration" })
    ] }) }) })
  ] }) });
}
const eO = () => /* @__PURE__ */ v.jsx("div", { className: "w-[320px] relative after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-accent after:content-['']", children: /* @__PURE__ */ v.jsx(tO, {}) });
function od(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return !0;
  return !1;
}
function Zy(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return t[n];
  return null;
}
function Jy(t) {
  var e = t;
  if (typeof e > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    e = navigator.userAgent || "";
  }
  return e.toLowerCase();
}
function id(t, e) {
  try {
    return new RegExp(t, "g").exec(e);
  } catch {
    return null;
  }
}
function rO() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, e = t.brands || t.uaList;
  return !!(e && e.length);
}
function nO(t, e) {
  var r = id("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e);
  return r ? r[3] : "";
}
function cu(t) {
  return t.replace(/_/g, ".");
}
function hi(t, e) {
  var r = null, n = "-1";
  return od(t, function(o) {
    var i = id("(" + o.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", e);
    return !i || o.brand ? !1 : (r = o, n = i[3] || "-1", o.versionAlias ? n = o.versionAlias : o.versionTest && (n = nO(o.versionTest.toLowerCase(), e) || n), n = cu(n), !0);
  }), {
    preset: r,
    version: n
  };
}
function Ha(t, e) {
  var r = {
    brand: "",
    version: "-1"
  };
  return od(t, function(n) {
    var o = Qy(e, n);
    return o ? (r.brand = n.id, r.version = n.versionAlias || o.version, r.version !== "-1") : !1;
  }), r;
}
function Qy(t, e) {
  return Zy(t, function(r) {
    var n = r.brand;
    return id("" + e.test, n.toLowerCase());
  });
}
var t1 = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}], e1 = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: !0
}], lu = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], r1 = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], n1 = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function o1(t) {
  return !!hi(r1, t).preset;
}
function oO(t) {
  var e = Jy(t), r = !!/mobi/g.exec(e), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: o1(e),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, o = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, i = hi(t1, e), a = i.preset, s = i.version, c = hi(n1, e), l = c.preset, u = c.version, f = hi(e1, e);
  if (n.chromium = !!f.preset, n.chromiumVersion = f.version, !n.chromium) {
    var d = hi(lu, e);
    n.webkit = !!d.preset, n.webkitVersion = d.version;
  }
  return l && (o.name = l.id, o.version = u, o.majorVersion = parseInt(u, 10)), a && (n.name = a.id, n.version = s, n.webview && o.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: o,
    isMobile: r,
    isHints: !1
  };
}
function iO(t) {
  var e = navigator.userAgentData, r = (e.uaList || e.brands).slice(), n = e.mobile || !1, o = r[0], i = (e.platform || navigator.platform).toLowerCase(), a = {
    name: o.brand,
    version: o.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!Ha(r1, r).brand || o1(Jy())
  }, s = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  a.webkit = !a.chromium && od(lu, function(d) {
    return Qy(r, d);
  });
  var c = Ha(e1, r);
  if (a.chromium = !!c.brand, a.chromiumVersion = c.version || "-1", !a.chromium) {
    var l = Ha(lu, r);
    a.webkit = !!l.brand, a.webkitVersion = l.version || "-1";
  }
  var u = Zy(n1, function(d) {
    return new RegExp("" + d.test, "g").exec(i);
  });
  s.name = u ? u.id : "";
  {
    var f = Ha(t1, r);
    a.name = f.brand || a.name, a.version = f.brand && t ? t.uaFullVersion : f.version;
  }
  return a.webkit && (s.name = n ? "ios" : "mac"), s.name === "ios" && a.webview && (a.version = "-1"), s.version = cu(s.version), a.version = cu(a.version), s.majorVersion = parseInt(s.version, 10), a.majorVersion = parseInt(a.version, 10), {
    browser: a,
    os: s,
    isMobile: n,
    isHints: !0
  };
}
function aO(t) {
  return rO() ? iO() : oO(t);
}
function sO(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return e.map(function(n) {
    return n.split(" ").map(function(o) {
      return o ? "" + t + o : "";
    }).join(" ");
  }).join(" ");
}
function cO(t, e) {
  return e.replace(/([^}{]*){/gm, function(r, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function rn(t, e) {
  return function(r) {
    r && (t[e] = r);
  };
}
function i1(t, e, r) {
  return function(n) {
    n && (t[e][r] = n);
  };
}
function lO(t, e) {
  return function(r) {
    var n = r.prototype;
    t.forEach(function(o) {
      e(n, o);
    });
  };
}
function a1(t, e) {
  return e === void 0 && (e = {}), function(r, n) {
    t.forEach(function(o) {
      var i = e[o] || o;
      i in r || (r[i] = function() {
        for (var a, s = [], c = 0; c < arguments.length; c++)
          s[c] = arguments[c];
        var l = (a = this[n])[o].apply(a, s);
        return l === this[n] ? this : l;
      });
    });
  };
}
function uO(t, e, r, n, o, i) {
  for (var a = 0; a < o; ++a) {
    var s = r + a * o, c = n + a * o;
    t[s] += t[c] * i, e[s] += e[c] * i;
  }
}
function fO(t, e, r, n, o) {
  for (var i = 0; i < o; ++i) {
    var a = r + i * o, s = n + i * o, c = t[a], l = e[a];
    t[a] = t[s], t[s] = c, e[a] = e[s], e[s] = l;
  }
}
function dO(t, e, r, n, o) {
  for (var i = 0; i < n; ++i) {
    var a = r + i * n;
    t[a] /= o, e[a] /= o;
  }
}
function s1(t, e, r) {
  for (var n = t.slice(), o = 0; o < r; ++o)
    n[o * r + e - 1] = 0, n[(e - 1) * r + o] = 0;
  return n[(e - 1) * (r + 1)] = 1, n;
}
function ar(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = t.slice(), n = jt(e), o = 0; o < e; ++o) {
    var i = e * o + o;
    if (!pt(r[i], Qt)) {
      for (var a = o + 1; a < e; ++a)
        if (r[e * o + a]) {
          fO(r, n, o, a, e);
          break;
        }
    }
    if (!pt(r[i], Qt))
      return [];
    dO(r, n, o, e, r[i]);
    for (var a = 0; a < e; ++a) {
      var s = a, c = a + o * e, l = r[c];
      !pt(l, Qt) || o === a || uO(r, n, s, o, e, -l);
    }
  }
  return n;
}
function pO(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = 0; n < e; ++n)
    for (var o = 0; o < e; ++o)
      r[o * e + n] = t[e * n + o];
  return r;
}
function c1(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = t[e * e - 1], o = 0; o < e - 1; ++o)
    r[o] = t[e * (e - 1) + o] / n;
  return r[e - 1] = 0, r;
}
function hO(t, e) {
  for (var r = jt(e), n = 0; n < e - 1; ++n)
    r[e * (e - 1) + n] = t[n] || 0;
  return r;
}
function Bn(t, e) {
  for (var r = t.slice(), n = t.length; n < e - 1; ++n)
    r[n] = 0;
  return r[e - 1] = 1, r;
}
function sr(t, e, r) {
  if (e === void 0 && (e = Math.sqrt(t.length)), e === r)
    return t;
  for (var n = jt(r), o = Math.min(e, r), i = 0; i < o - 1; ++i) {
    for (var a = 0; a < o - 1; ++a)
      n[i * r + a] = t[i * e + a];
    n[(i + 1) * r - 1] = t[(i + 1) * e - 1], n[(r - 1) * r + i] = t[(e - 1) * e + i];
  }
  return n[r * r - 1] = t[e * e - 1], n;
}
function Ds(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = jt(t);
  return e.forEach(function(o) {
    n = Pt(n, o, t);
  }), n;
}
function Pt(t, e, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  var n = [], o = t.length / r, i = e.length / o;
  if (o) {
    if (!i)
      return t;
  } else return e;
  for (var a = 0; a < r; ++a)
    for (var s = 0; s < i; ++s) {
      n[s * r + a] = 0;
      for (var c = 0; c < o; ++c)
        n[s * r + a] += t[c * r + a] * e[s * o + c];
    }
  return n;
}
function Et(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), o = 0; o < r; ++o)
    n[o] = n[o] + e[o];
  return n;
}
function lt(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), o = 0; o < r; ++o)
    n[o] = n[o] - e[o];
  return n;
}
function vO(t, e) {
  return e === void 0 && (e = t.length === 6), e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function l1(t, e) {
  return e === void 0 && (e = t.length === 9), e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function he(t, e, r) {
  r === void 0 && (r = e.length);
  var n = Pt(t, e, r), o = n[r - 1];
  return n.map(function(i) {
    return i / o;
  });
}
function gO(t, e) {
  return Pt(t, [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function mO(t, e) {
  return Pt(t, [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function yO(t, e) {
  return Pt(t, da(e, 4));
}
function Ya(t, e) {
  var r = e[0], n = r === void 0 ? 1 : r, o = e[1], i = o === void 0 ? 1 : o, a = e[2], s = a === void 0 ? 1 : a;
  return Pt(t, [n, 0, 0, 0, 0, i, 0, 0, 0, 0, s, 0, 0, 0, 0, 1], 4);
}
function fa(t, e) {
  return he(da(e, 3), Bn(t, 3));
}
function pl(t, e) {
  var r = e[0], n = r === void 0 ? 0 : r, o = e[1], i = o === void 0 ? 0 : o, a = e[2], s = a === void 0 ? 0 : a;
  return Pt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, i, s, 1], 4);
}
function uu(t, e) {
  return Pt(t, e, 4);
}
function da(t, e) {
  var r = Math.cos(t), n = Math.sin(t), o = jt(e);
  return o[0] = r, o[1] = n, o[e] = -n, o[e + 1] = r, o;
}
function jt(t) {
  for (var e = t * t, r = [], n = 0; n < e; ++n)
    r[n] = n % (t + 1) ? 0 : 1;
  return r;
}
function ad(t, e) {
  for (var r = jt(e), n = Math.min(t.length, e - 1), o = 0; o < n; ++o)
    r[(e + 1) * o] = t[o];
  return r;
}
function Ln(t, e) {
  for (var r = jt(e), n = Math.min(t.length, e - 1), o = 0; o < n; ++o)
    r[e * (e - 1) + o] = t[o];
  return r;
}
function sd(t, e, r, n, o, i, a, s) {
  var c = t[0], l = t[1], u = e[0], f = e[1], d = r[0], p = r[1], g = n[0], h = n[1], m = o[0], y = o[1], x = i[0], b = i[1], w = a[0], _ = a[1], E = s[0], C = s[1], T = [c, 0, u, 0, d, 0, g, 0, l, 0, f, 0, p, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, u, 0, d, 0, g, 0, l, 0, f, 0, p, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, -m * c, -y * c, -x * u, -b * u, -w * d, -_ * d, -E * g, -C * g, -m * l, -y * l, -x * f, -b * f, -w * p, -_ * p, -E * h, -C * h], R = ar(T, 8);
  if (!R.length)
    return [];
  var D = Pt(R, [m, y, x, b, w, _, E, C], 8);
  return D[8] = 1, sr(pO(D), 3, 4);
}
var wi = function() {
  return wi = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, wi.apply(this, arguments);
};
function cd() {
  return [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
}
function Do(t, e) {
  return e === void 0 && (e = 0), no(Mo(t, e));
}
function ds(t, e) {
  var r = he(t, [e[0], e[1] || 0, e[2] || 0, 1], 4), n = r[3] || 1;
  return [
    r[0] / n,
    r[1] / n,
    r[2] / n
  ];
}
function xO(t, e) {
  e === void 0 && (e = document.body);
  for (var r = t, n = cd(); r; ) {
    var o = getComputedStyle(r).transform;
    if (n = uu(Do(o), n), r === e)
      break;
    r = r.parentElement;
  }
  return n = ar(n, 4), n[12] = 0, n[13] = 0, n[14] = 0, n;
}
function no(t) {
  var e = cd();
  return t.forEach(function(r) {
    var n = r.matrixFunction, o = r.functionValue;
    n && (e = n(e, o));
  }), e;
}
function Mo(t, e) {
  e === void 0 && (e = 0);
  var r = Tt(t) ? t : Or(t);
  return r.map(function(n) {
    var o = Ws(n), i = o.prefix, a = o.value, s = null, c = i, l = "";
    if (i === "translate" || i === "translateX" || i === "translate3d") {
      var u = $t(e) ? wi(wi({}, e), { "o%": e["%"] }) : {
        "%": e,
        "o%": e
      }, f = ze(a).map(function(O, k) {
        return k === 0 && "x%" in u ? u["%"] = e["x%"] : k === 1 && "y%" in u ? u["%"] = e["y%"] : u["%"] = e["o%"], Mt(O, u);
      }), d = f[0], p = f[1], g = p === void 0 ? 0 : p, h = f[2], m = h === void 0 ? 0 : h;
      s = pl, l = [d, g, m];
    } else if (i === "translateY") {
      var y = $t(e) ? wi({ "%": e["y%"] }, e) : {
        "%": e
      }, g = Mt(a, y);
      s = pl, l = [0, g, 0];
    } else if (i === "translateZ") {
      var m = parseFloat(a);
      s = pl, l = [0, 0, m];
    } else if (i === "scale" || i === "scale3d") {
      var x = ze(a).map(function(O) {
        return parseFloat(O);
      }), b = x[0], w = x[1], _ = w === void 0 ? b : w, E = x[2], C = E === void 0 ? 1 : E;
      s = Ya, l = [b, _, C];
    } else if (i === "scaleX") {
      var b = parseFloat(a);
      s = Ya, l = [b, 1, 1];
    } else if (i === "scaleY") {
      var _ = parseFloat(a);
      s = Ya, l = [1, _, 1];
    } else if (i === "scaleZ") {
      var C = parseFloat(a);
      s = Ya, l = [1, 1, C];
    } else if (i === "rotate" || i === "rotateZ" || i === "rotateX" || i === "rotateY") {
      var T = mr(a), R = T.unit, D = T.value, N = R === "rad" ? D : D * Math.PI / 180;
      i === "rotate" || i === "rotateZ" ? (c = "rotateZ", s = yO) : i === "rotateX" ? s = gO : i === "rotateY" && (s = mO), l = N;
    } else if (i === "matrix3d")
      s = uu, l = ze(a).map(function(O) {
        return parseFloat(O);
      });
    else if (i === "matrix") {
      var M = ze(a).map(function(O) {
        return parseFloat(O);
      });
      s = uu, l = [
        M[0],
        M[1],
        0,
        0,
        M[2],
        M[3],
        0,
        0,
        0,
        0,
        1,
        0,
        M[4],
        M[5],
        0,
        1
      ];
    } else
      c = "";
    return {
      name: i,
      functionName: c,
      value: a,
      matrixFunction: s,
      functionValue: l
    };
  });
}
var bO = /* @__PURE__ */ function() {
  function t() {
    this.keys = [], this.values = [];
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.values[this.keys.indexOf(r)];
  }, e.set = function(r, n) {
    var o = this.keys, i = this.values, a = o.indexOf(r), s = a === -1 ? o.length : a;
    o[s] = r, i[s] = n;
  }, t;
}(), wO = /* @__PURE__ */ function() {
  function t() {
    this.object = {};
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.object[r];
  }, e.set = function(r, n) {
    this.object[r] = n;
  }, t;
}(), SO = typeof Map == "function", CO = /* @__PURE__ */ function() {
  function t() {
  }
  var e = t.prototype;
  return e.connect = function(r, n) {
    this.prev = r, this.next = n, r && (r.next = this), n && (n.prev = this);
  }, e.disconnect = function() {
    var r = this.prev, n = this.next;
    r && (r.next = n), n && (n.prev = r);
  }, e.getIndex = function() {
    for (var r = this, n = -1; r; )
      r = r.prev, ++n;
    return n;
  }, t;
}();
function EO(t, e) {
  var r = [], n = [];
  return t.forEach(function(o) {
    var i = o[0], a = o[1], s = new CO();
    r[i] = s, n[a] = s;
  }), r.forEach(function(o, i) {
    o.connect(r[i - 1]);
  }), t.filter(function(o, i) {
    return !e[i];
  }).map(function(o, i) {
    var a = o[0], s = o[1];
    if (a === s)
      return [0, 0];
    var c = r[a], l = n[s - 1], u = c.getIndex();
    c.disconnect(), l ? c.connect(l, l.next) : c.connect(void 0, r[0]);
    var f = c.getIndex();
    return [u, f];
  });
}
var _O = /* @__PURE__ */ function() {
  function t(r, n, o, i, a, s, c, l) {
    this.prevList = r, this.list = n, this.added = o, this.removed = i, this.changed = a, this.maintained = s, this.changedBeforeAdded = c, this.fixed = l;
  }
  var e = t.prototype;
  return Object.defineProperty(e, "ordered", {
    get: function() {
      return this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "pureChanged", {
    get: function() {
      return this.cachePureChanged || this.caculateOrdered(), this.cachePureChanged;
    },
    enumerable: !0,
    configurable: !0
  }), e.caculateOrdered = function() {
    var r = EO(this.changedBeforeAdded, this.fixed), n = this.changed, o = [];
    this.cacheOrdered = r.filter(function(i, a) {
      var s = i[0], c = i[1], l = n[a], u = l[0], f = l[1];
      if (s !== c)
        return o.push([u, f]), !0;
    }), this.cachePureChanged = o;
  }, t;
}();
function ld(t, e, r) {
  var n = SO ? Map : r ? wO : bO, o = r || function(x) {
    return x;
  }, i = [], a = [], s = [], c = t.map(o), l = e.map(o), u = new n(), f = new n(), d = [], p = [], g = {}, h = [], m = 0, y = 0;
  return c.forEach(function(x, b) {
    u.set(x, b);
  }), l.forEach(function(x, b) {
    f.set(x, b);
  }), c.forEach(function(x, b) {
    var w = f.get(x);
    typeof w > "u" ? (++y, a.push(b)) : g[w] = y;
  }), l.forEach(function(x, b) {
    var w = u.get(x);
    typeof w > "u" ? (i.push(b), ++m) : (s.push([w, b]), y = g[b] || 0, d.push([w - y, b - m]), p.push(b === w), w !== b && h.push([w, b]));
  }), a.reverse(), new _O(t, e, i, a, h, s, d, p);
}
var TO = /* @__PURE__ */ function() {
  function t(r, n) {
    r === void 0 && (r = []), this.findKeyCallback = n, this.list = [].slice.call(r);
  }
  var e = t.prototype;
  return e.update = function(r) {
    var n = [].slice.call(r), o = ld(this.list, n, this.findKeyCallback);
    return this.list = n, o;
  }, t;
}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var fu = function(t, e) {
  return fu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
  }, fu(t, e);
};
function RO(t, e) {
  fu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var u1 = typeof Map == "function" ? void 0 : /* @__PURE__ */ function() {
  var t = 0;
  return function(e) {
    return e.__DIFF_KEY__ || (e.__DIFF_KEY__ = ++t);
  };
}(), f1 = /* @__PURE__ */ function(t) {
  RO(e, t);
  function e(r) {
    return r === void 0 && (r = []), t.call(this, r, u1) || this;
  }
  return e;
}(TO);
function io(t, e) {
  return ld(t, e, u1);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var du = function(t, e) {
  return du = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
  }, du(t, e);
};
function DO(t, e) {
  du(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ao = function() {
  return ao = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, ao.apply(this, arguments);
};
function MO(t) {
  var e = t.container;
  return e === document.body ? [e.scrollLeft || document.documentElement.scrollLeft, e.scrollTop || document.documentElement.scrollTop] : [e.scrollLeft, e.scrollTop];
}
function vh(t, e) {
  return t.addEventListener("scroll", e), function() {
    t.removeEventListener("scroll", e);
  };
}
function Ua(t) {
  if (t) {
    if (Lt(t))
      return document.querySelector(t);
  } else return null;
  if (we(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var d1 = /* @__PURE__ */ function(t) {
  DO(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n._startRect = null, n._startPos = [], n._prevTime = 0, n._timer = 0, n._prevScrollPos = [0, 0], n._isWait = !1, n._flag = !1, n._currentOptions = null, n._lock = !1, n._unregister = null, n._onScroll = function() {
      var o = n._currentOptions;
      n._lock || !o || n.emit("scrollDrag", {
        next: function(i) {
          n.checkScroll({
            container: o.container,
            inputEvent: i
          });
        }
      });
    }, n;
  }
  var r = e.prototype;
  return r.dragStart = function(n, o) {
    var i = Ua(o.container);
    if (!i) {
      this._flag = !1;
      return;
    }
    var a = 0, s = 0, c = 0, l = 0;
    if (i === document.body)
      c = window.innerWidth, l = window.innerHeight;
    else {
      var u = i.getBoundingClientRect();
      a = u.top, s = u.left, c = u.width, l = u.height;
    }
    this._flag = !0, this._startPos = [n.clientX, n.clientY], this._startRect = {
      top: a,
      left: s,
      width: c,
      height: l
    }, this._prevScrollPos = this._getScrollPosition([0, 0], o), this._currentOptions = o, this._registerScrollEvent(o);
  }, r.drag = function(n, o) {
    if (clearTimeout(this._timer), !!this._flag) {
      var i = n.clientX, a = n.clientY, s = o.threshold, c = s === void 0 ? 0 : s, l = this, u = l._startRect, f = l._startPos;
      this._currentOptions = o;
      var d = [0, 0];
      return u.top > a - c ? (f[1] > u.top || a < f[1]) && (d[1] = -1) : u.top + u.height < a + c && (f[1] < u.top + u.height || a > f[1]) && (d[1] = 1), u.left > i - c ? (f[0] > u.left || i < f[0]) && (d[0] = -1) : u.left + u.width < i + c && (f[0] < u.left + u.width || i > f[0]) && (d[0] = 1), !d[0] && !d[1] ? !1 : this._continueDrag(ao(ao({}, o), {
        direction: d,
        inputEvent: n,
        isDrag: !0
      }));
    }
  }, r.checkScroll = function(n) {
    var o = this;
    if (this._isWait)
      return !1;
    var i = n.prevScrollPos, a = i === void 0 ? this._prevScrollPos : i, s = n.direction, c = n.throttleTime, l = c === void 0 ? 0 : c, u = n.inputEvent, f = n.isDrag, d = this._getScrollPosition(s || [0, 0], n), p = d[0] - a[0], g = d[1] - a[1], h = s || [p ? Math.abs(p) / p : 0, g ? Math.abs(g) / g : 0];
    return this._prevScrollPos = d, this._lock = !1, !p && !g ? !1 : (this.emit("move", {
      offsetX: h[0] ? p : 0,
      offsetY: h[1] ? g : 0,
      inputEvent: u
    }), l && f && (clearTimeout(this._timer), this._timer = window.setTimeout(function() {
      o._continueDrag(n);
    }, l)), !0);
  }, r.dragEnd = function() {
    this._flag = !1, this._lock = !1, clearTimeout(this._timer), this._unregisterScrollEvent();
  }, r._getScrollPosition = function(n, o) {
    var i = o.container, a = o.getScrollPosition, s = a === void 0 ? MO : a;
    return s({
      container: Ua(i),
      direction: n
    });
  }, r._continueDrag = function(n) {
    var o = this, i, a = n.container, s = n.direction, c = n.throttleTime, l = n.useScroll, u = n.isDrag, f = n.inputEvent;
    if (!(!this._flag || u && this._isWait)) {
      var d = ki(), p = Math.max(c + this._prevTime - d, 0);
      if (p > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          o._continueDrag(n);
        }, p), !1;
      this._prevTime = d;
      var g = this._getScrollPosition(s, n);
      this._prevScrollPos = g, u && (this._isWait = !0), l || (this._lock = !0);
      var h = {
        container: Ua(a),
        direction: s,
        inputEvent: f
      };
      return (i = n.requestScroll) === null || i === void 0 || i.call(n, h), this.emit("scroll", h), this._isWait = !1, l || this.checkScroll(ao(ao({}, n), {
        prevScrollPos: g,
        direction: s,
        inputEvent: f
      }));
    }
  }, r._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var o = n.checkScrollEvent;
    if (o) {
      var i = o === !0 ? vh : o, a = Ua(n.container);
      o === !0 && (a === document.body || a === document.documentElement) ? this._unregister = vh(window, this._onScroll) : this._unregister = i(a, this._onScroll);
    }
  }, r._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, e;
}(fn);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function PO() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), o = 0, e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
  return n;
}
function be(t) {
  return pt(t, Qt);
}
function OO(t, e) {
  return t.every(function(r, n) {
    return be(r - e[n]) === 0;
  });
}
function NO(t, e) {
  return !be(t[0] - e[0]) && !be(t[1] - e[1]);
}
function Si(t) {
  return t.length < 3 ? 0 : Math.abs(xw(t.map(function(e, r) {
    var n = t[r + 1] || t[0];
    return e[0] * n[1] - n[0] * e[1];
  }))) / 2;
}
function pu(t, e) {
  var r = e.width, n = e.height, o = e.left, i = e.top, a = zn(t), s = a.minX, c = a.minY, l = a.maxX, u = a.maxY, f = r / (l - s), d = n / (u - c);
  return t.map(function(p) {
    return [o + (p[0] - s) * f, i + (p[1] - c) * d];
  });
}
function zn(t) {
  var e = t.map(function(n) {
    return n[0];
  }), r = t.map(function(n) {
    return n[1];
  });
  return {
    minX: Math.min.apply(Math, e),
    minY: Math.min.apply(Math, r),
    maxX: Math.max.apply(Math, e),
    maxY: Math.max.apply(Math, r)
  };
}
function Ms(t, e, r) {
  var n = t[0], o = t[1], i = zn(e), a = i.minX, s = i.maxX, c = [[a, o], [s, o]], l = Ps(c[0], c[1]), u = hu(e), f = [];
  if (u.forEach(function(g) {
    var h = Ps(g[0], g[1]), m = g[0];
    if (OO(l, h))
      f.push({
        pos: t,
        line: g,
        type: "line"
      });
    else {
      var y = p1(ud(l, h), [c, g]);
      y.forEach(function(x) {
        g.some(function(b) {
          return NO(b, x);
        }) ? f.push({
          pos: x,
          line: g,
          type: "point"
        }) : be(m[1] - o) !== 0 && f.push({
          pos: x,
          line: g,
          type: "intersection"
        });
      });
    }
  }), Se(f, function(g) {
    return g[0] === n;
  }))
    return !0;
  var d = 0, p = {};
  return f.forEach(function(g) {
    var h = g.pos, m = g.type, y = g.line;
    if (!(h[0] > n))
      if (m === "intersection")
        ++d;
      else {
        if (m === "line")
          return;
        if (m === "point") {
          var x = Se(y, function(_) {
            return _[1] !== o;
          }), b = p[h[0]], w = x[1] > o ? 1 : -1;
          b ? b !== w && ++d : p[h[0]] = w;
        }
      }
  }), d % 2 === 1;
}
function Ps(t, e) {
  var r = t[0], n = t[1], o = e[0], i = e[1], a = o - r, s = i - n;
  Math.abs(a) < Qt && (a = 0), Math.abs(s) < Qt && (s = 0);
  var c = 0, l = 0, u = 0;
  return a ? s ? (c = -s / a, l = 1, u = -c * r - n) : (l = 1, u = -n) : s && (c = -1, u = r), [c, l, u];
}
function ud(t, e) {
  var r = t[0], n = t[1], o = t[2], i = e[0], a = e[1], s = e[2], c = r === 0 && i === 0, l = n === 0 && a === 0, u = [];
  if (c && l)
    return [];
  if (c) {
    var f = -o / n, d = -s / a;
    return f !== d ? [] : [[-1 / 0, f], [1 / 0, f]];
  } else if (l) {
    var p = -o / r, g = -s / i;
    return p !== g ? [] : [[p, -1 / 0], [p, 1 / 0]];
  } else if (r === 0) {
    var h = -o / n, m = -(a * h + s) / i;
    u = [[m, h]];
  } else if (i === 0) {
    var h = -s / a, m = -(n * h + o) / r;
    u = [[m, h]];
  } else if (n === 0) {
    var m = -o / r, h = -(i * m + s) / a;
    u = [[m, h]];
  } else if (a === 0) {
    var m = -s / i, h = -(r * m + o) / n;
    u = [[m, h]];
  } else {
    var m = (n * s - a * o) / (a * r - n * i), h = -(r * m + o) / n;
    u = [[m, h]];
  }
  return u.map(function(y) {
    return [y[0], y[1]];
  });
}
function p1(t, e) {
  var r = e.map(function(f) {
    return [0, 1].map(function(d) {
      return [Math.min(f[0][d], f[1][d]), Math.max(f[0][d], f[1][d])];
    });
  }), n = [];
  if (t.length === 2) {
    var o = t[0], i = o[0], a = o[1];
    if (be(i - t[1][0])) {
      if (!be(a - t[1][1])) {
        var l = Math.max.apply(Math, r.map(function(f) {
          return f[0][0];
        })), u = Math.min.apply(Math, r.map(function(f) {
          return f[0][1];
        }));
        if (be(l - u) > 0)
          return [];
        n = [[l, a], [u, a]];
      }
    } else {
      var s = Math.max.apply(Math, r.map(function(f) {
        return f[1][0];
      })), c = Math.min.apply(Math, r.map(function(f) {
        return f[1][1];
      }));
      if (be(s - c) > 0)
        return [];
      n = [[i, s], [i, c]];
    }
  }
  return n.length || (n = t.filter(function(f) {
    var d = f[0], p = f[1];
    return r.every(function(g) {
      return 0 <= be(d - g[0][0]) && 0 <= be(g[0][1] - d) && 0 <= be(p - g[1][0]) && 0 <= be(g[1][1] - p);
    });
  })), n.map(function(f) {
    return [be(f[0]), be(f[1])];
  });
}
function hu(t) {
  return PO(t.slice(1), [t[0]]).map(function(e, r) {
    return [t[r], e];
  });
}
function kO(t, e) {
  var r = t.slice(), n = e.slice();
  sp(r) === -1 && r.reverse(), sp(n) === -1 && n.reverse();
  var o = hu(r), i = hu(n), a = o.map(function(u) {
    return Ps(u[0], u[1]);
  }), s = i.map(function(u) {
    return Ps(u[0], u[1]);
  }), c = [];
  a.forEach(function(u, f) {
    var d = o[f], p = [];
    s.forEach(function(g, h) {
      var m = ud(u, g), y = p1(m, [d, i[h]]);
      p.push.apply(p, y.map(function(x) {
        return {
          index1: f,
          index2: h,
          pos: x,
          type: "intersection"
        };
      }));
    }), p.sort(function(g, h) {
      return dr(d[0], g.pos) - dr(d[0], h.pos);
    }), c.push.apply(c, p), Ms(d[1], n) && c.push({
      index1: f,
      index2: -1,
      pos: d[1],
      type: "inside"
    });
  }), i.forEach(function(u, f) {
    if (Ms(u[1], r)) {
      var d = !1, p = yr(c, function(g) {
        var h = g.index2;
        return h === f ? (d = !0, !1) : !!d;
      });
      p === -1 && (d = !1, p = yr(c, function(g) {
        var h = g.index1, m = g.index2;
        return h === -1 && m + 1 === f ? (d = !0, !1) : !!d;
      })), p === -1 ? c.push({
        index1: -1,
        index2: f,
        pos: u[1],
        type: "inside"
      }) : c.splice(p, 0, {
        index1: -1,
        index2: f,
        pos: u[1],
        type: "inside"
      });
    }
  });
  var l = {};
  return c.filter(function(u) {
    var f = u.pos, d = f[0] + "x" + f[1];
    return l[d] ? !1 : (l[d] = !0, !0);
  });
}
function vu(t, e) {
  var r = kO(t, e);
  return r.map(function(n) {
    var o = n.pos;
    return o;
  });
}
function AO(t, e) {
  var r = vu(t, e);
  return Si(r);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var gu = function(t, e) {
  return gu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
  }, gu(t, e);
};
function jO(t, e) {
  gu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Kt = function() {
  return Kt = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Kt.apply(this, arguments);
};
function IO(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], o = Math.atan2(n, r);
  return o >= 0 ? o : o + Math.PI * 2;
}
function hl(t) {
  return IO([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function FO(t) {
  return t.touches && t.touches.length >= 2;
}
function Xa(t) {
  return t ? t.touches ? LO(t.touches) : [h1(t)] : [];
}
function BO(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function gh(t, e, r) {
  var n = r.length, o = Ci(t, n), i = o.clientX, a = o.clientY, s = o.originalClientX, c = o.originalClientY, l = Ci(e, n), u = l.clientX, f = l.clientY, d = Ci(r, n), p = d.clientX, g = d.clientY, h = i - u, m = a - f, y = i - p, x = a - g;
  return {
    clientX: s,
    clientY: c,
    deltaX: h,
    deltaY: m,
    distX: y,
    distY: x
  };
}
function vl(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function LO(t) {
  for (var e = Math.min(t.length, 2), r = [], n = 0; n < e; ++n)
    r.push(h1(t[n]));
  return r;
}
function h1(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function Ci(t, e) {
  e === void 0 && (e = t.length);
  for (var r = {
    clientX: 0,
    clientY: 0,
    originalClientX: 0,
    originalClientY: 0
  }, n = Math.min(t.length, e), o = 0; o < n; ++o) {
    var i = t[o];
    r.originalClientX += "originalClientX" in i ? i.originalClientX : i.clientX, r.originalClientY += "originalClientY" in i ? i.originalClientY : i.clientY, r.clientX += i.clientX, r.clientY += i.clientY;
  }
  return e ? {
    clientX: r.clientX / e,
    clientY: r.clientY / e,
    originalClientX: r.originalClientX / e,
    originalClientY: r.originalClientY / e
  } : r;
}
var gl = /* @__PURE__ */ function() {
  function t(e) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = e, this.prevClients = e, this.length = e.length;
  }
  return t.prototype.getAngle = function(e) {
    return e === void 0 && (e = this.prevClients), hl(e);
  }, t.prototype.getRotation = function(e) {
    return e === void 0 && (e = this.prevClients), hl(e) - hl(this.startClients);
  }, t.prototype.getPosition = function(e, r) {
    e === void 0 && (e = this.prevClients);
    var n = gh(e || this.prevClients, this.prevClients, this.startClients), o = n.deltaX, i = n.deltaY;
    return this.movement += Math.sqrt(o * o + i * i), this.prevClients = e, n;
  }, t.prototype.getPositions = function(e) {
    e === void 0 && (e = this.prevClients);
    for (var r = this.prevClients, n = this.startClients, o = Math.min(this.length, r.length), i = [], a = 0; a < o; ++a)
      i[a] = gh([e[a]], [r[a]], [n[a]]);
    return i;
  }, t.prototype.getMovement = function(e) {
    var r = this.movement;
    if (!e)
      return r;
    var n = Ci(e, this.length), o = Ci(this.prevClients, this.length), i = n.clientX - o.clientX, a = n.clientY - o.clientY;
    return Math.sqrt(i * i + a * a) + r;
  }, t.prototype.getDistance = function(e) {
    return e === void 0 && (e = this.prevClients), vl(e);
  }, t.prototype.getScale = function(e) {
    return e === void 0 && (e = this.prevClients), vl(e) / vl(this.startClients);
  }, t.prototype.move = function(e, r) {
    this.startClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    });
  }, t;
}(), mh = ["textarea", "input"], v1 = /* @__PURE__ */ function(t) {
  jO(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var o = t.call(this) || this;
    o.options = {}, o.flag = !1, o.pinchFlag = !1, o.data = {}, o.isDrag = !1, o.isPinch = !1, o.clientStores = [], o.targets = [], o.prevTime = 0, o.doubleFlag = !1, o._useMouse = !1, o._useTouch = !1, o._useDrag = !1, o._dragFlag = !1, o._isTrusted = !1, o._isMouseEvent = !1, o._isSecondaryButton = !1, o._preventMouseEvent = !1, o._prevInputEvent = null, o._isDragAPI = !1, o._isIdle = !0, o._preventMouseEventId = 0, o._window = window, o.onDragStart = function(d, p) {
      if (p === void 0 && (p = !0), !(!o.flag && d.cancelable === !1)) {
        var g = d.type.indexOf("drag") >= -1;
        if (!(o.flag && g)) {
          o._isDragAPI = !0;
          var h = o.options, m = h.container, y = h.pinchOutside, x = h.preventWheelClick, b = h.preventRightClick, w = h.preventDefault, _ = h.checkInput, E = h.dragFocusedInput, C = h.preventClickEventOnDragStart, T = h.preventClickEventOnDrag, R = h.preventClickEventByCondition, D = o._useTouch, N = !o.flag;
          if (o._isSecondaryButton = d.which === 3 || d.button === 2, x && (d.which === 2 || d.button === 1) || b && (d.which === 3 || d.button === 2))
            return o.stop(), !1;
          if (N) {
            var M = o._window.document.activeElement, O = d.target;
            if (O) {
              var k = O.tagName.toLowerCase(), F = mh.indexOf(k) > -1, $ = O.isContentEditable;
              if (F || $) {
                if (_ || !E && M === O)
                  return !1;
                if (M && (M === O || $ && M.isContentEditable && M.contains(O)))
                  if (E)
                    O.blur();
                  else
                    return !1;
              } else if ((w || d.type === "touchstart") && M) {
                var V = M.tagName.toLowerCase();
                (M.isContentEditable || mh.indexOf(V) > -1) && M.blur();
              }
              (C || T || R) && Ft(o._window, "click", o._onClick, !0);
            }
            o.clientStores = [new gl(Xa(d))], o._isIdle = !1, o.flag = !0, o.isDrag = !1, o._isTrusted = p, o._dragFlag = !0, o._prevInputEvent = d, o.data = {}, o.doubleFlag = ki() - o.prevTime < 200, o._isMouseEvent = BO(d), !o._isMouseEvent && o._preventMouseEvent && o._allowMouseEvent();
            var L = o._preventMouseEvent || o.emit("dragStart", Kt(Kt({ data: o.data, datas: o.data, inputEvent: d, isMouseEvent: o._isMouseEvent, isSecondaryButton: o._isSecondaryButton, isTrusted: p, isDouble: o.doubleFlag }, o.getCurrentStore().getPosition()), { preventDefault: function() {
              d.preventDefault();
            }, preventDrag: function() {
              o._dragFlag = !1;
            } }));
            L === !1 && o.stop(), o._isMouseEvent && o.flag && w && d.preventDefault();
          }
          if (!o.flag)
            return !1;
          var z = 0;
          if (N ? (o._attchDragEvent(), D && y && (z = setTimeout(function() {
            Ft(m, "touchstart", o.onDragStart, {
              passive: !1
            });
          }))) : D && y && kt(m, "touchstart", o.onDragStart), o.flag && FO(d)) {
            if (clearTimeout(z), N && d.touches.length !== d.changedTouches.length)
              return;
            o.pinchFlag || o.onPinchStart(d);
          }
        }
      }
    }, o.onDrag = function(d, p) {
      if (o.flag) {
        var g = o.options.preventDefault;
        !o._isMouseEvent && g && d.preventDefault(), o._prevInputEvent = d;
        var h = Xa(d), m = o.moveClients(h, d, !1);
        if (o._dragFlag) {
          if (o.pinchFlag || m.deltaX || m.deltaY) {
            var y = o._preventMouseEvent || o.emit("drag", Kt(Kt({}, m), { isScroll: !!p, inputEvent: d }));
            if (y === !1) {
              o.stop();
              return;
            }
          }
          o.pinchFlag && o.onPinch(d, h);
        }
        o.getCurrentStore().getPosition(h, !0);
      }
    }, o.onDragEnd = function(d) {
      if (o.flag) {
        var p = o.options, g = p.pinchOutside, h = p.container, m = p.preventClickEventOnDrag, y = p.preventClickEventOnDragStart, x = p.preventClickEventByCondition, b = o.isDrag;
        (m || y || x) && requestAnimationFrame(function() {
          o._allowClickEvent();
        }), !x && !y && m && !b && o._allowClickEvent(), o._useTouch && g && kt(h, "touchstart", o.onDragStart), o.pinchFlag && o.onPinchEnd(d);
        var w = d?.touches ? Xa(d) : [], _ = w.length;
        _ === 0 || !o.options.keepDragging ? o.flag = !1 : o._addStore(new gl(w));
        var E = o._getPosition(), C = ki(), T = !b && o.doubleFlag;
        o._prevInputEvent = null, o.prevTime = b || T ? 0 : C, o.flag || (o._dettachDragEvent(), o._preventMouseEvent || o.emit("dragEnd", Kt({ data: o.data, datas: o.data, isDouble: T, isDrag: b, isClick: !b, isMouseEvent: o._isMouseEvent, isSecondaryButton: o._isSecondaryButton, inputEvent: d, isTrusted: o._isTrusted }, E)), o.clientStores = [], o._isMouseEvent || (o._preventMouseEvent = !0, clearTimeout(o._preventMouseEventId), o._preventMouseEventId = setTimeout(function() {
          o._preventMouseEvent = !1;
        }, 200)), o._isIdle = !0);
      }
    }, o.onBlur = function() {
      o.onDragEnd();
    }, o._allowClickEvent = function() {
      kt(o._window, "click", o._onClick, !0);
    }, o._onClick = function(d) {
      o._allowClickEvent(), o._allowMouseEvent();
      var p = o.options.preventClickEventByCondition;
      p?.(d) || (d.stopPropagation(), d.preventDefault());
    }, o._onContextMenu = function(d) {
      var p = o.options;
      p.preventRightClick ? o.onDragEnd(d) : d.preventDefault();
    }, o._passCallback = function() {
    };
    var i = [].concat(r), a = i[0];
    o._window = xv(a) ? a : De(a), o.options = Kt({ checkInput: !1, container: a && !("document" in a) ? De(a) : a, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var s = o.options, c = s.container, l = s.events, u = s.checkWindowBlur;
    if (o._useDrag = l.indexOf("drag") > -1, o._useTouch = l.indexOf("touch") > -1, o._useMouse = l.indexOf("mouse") > -1, o.targets = i, o._useDrag && i.forEach(function(d) {
      Ft(d, "dragstart", o.onDragStart);
    }), o._useMouse && (i.forEach(function(d) {
      Ft(d, "mousedown", o.onDragStart), Ft(d, "mousemove", o._passCallback);
    }), Ft(c, "contextmenu", o._onContextMenu)), u && Ft(De(), "blur", o.onBlur), o._useTouch) {
      var f = {
        passive: !1
      };
      i.forEach(function(d) {
        Ft(d, "touchstart", o.onDragStart, f), Ft(d, "touchmove", o._passCallback, f);
      });
    }
    return o;
  }
  return e.prototype.stop = function() {
    this.isDrag = !1, this.data = {}, this.clientStores = [], this.pinchFlag = !1, this.doubleFlag = !1, this.prevTime = 0, this.flag = !1, this._isIdle = !0, this._allowClickEvent(), this._dettachDragEvent(), this._isDragAPI = !1;
  }, e.prototype.getMovement = function(r) {
    return this.getCurrentStore().getMovement(r) + this.clientStores.slice(1).reduce(function(n, o) {
      return n + o.movement;
    }, 0);
  }, e.prototype.isDragging = function() {
    return this.isDrag;
  }, e.prototype.isIdle = function() {
    return this._isIdle;
  }, e.prototype.isFlag = function() {
    return this.flag;
  }, e.prototype.isPinchFlag = function() {
    return this.pinchFlag;
  }, e.prototype.isDoubleFlag = function() {
    return this.doubleFlag;
  }, e.prototype.isPinching = function() {
    return this.isPinch;
  }, e.prototype.scrollBy = function(r, n, o, i) {
    i === void 0 && (i = !0), this.flag && (this.clientStores[0].move(r, n), i && this.onDrag(o, !0));
  }, e.prototype.move = function(r, n) {
    var o = r[0], i = r[1], a = this.getCurrentStore(), s = a.prevClients;
    return this.moveClients(s.map(function(c) {
      var l = c.clientX, u = c.clientY;
      return {
        clientX: l + o,
        clientY: u + i,
        originalClientX: l,
        originalClientY: u
      };
    }), n, !0);
  }, e.prototype.triggerDragStart = function(r) {
    this.onDragStart(r, !1);
  }, e.prototype.setEventData = function(r) {
    var n = this.data;
    for (var o in r)
      n[o] = r[o];
    return this;
  }, e.prototype.setEventDatas = function(r) {
    return this.setEventData(r);
  }, e.prototype.getCurrentEvent = function(r) {
    return r === void 0 && (r = this._prevInputEvent), Kt(Kt({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: r });
  }, e.prototype.getEventData = function() {
    return this.data;
  }, e.prototype.getEventDatas = function() {
    return this.data;
  }, e.prototype.unset = function() {
    var r = this, n = this.targets, o = this.options.container;
    this.off(), kt(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(i) {
      kt(i, "dragstart", r.onDragStart);
    }), this._useMouse && (n.forEach(function(i) {
      kt(i, "mousedown", r.onDragStart);
    }), kt(o, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(i) {
      kt(i, "touchstart", r.onDragStart);
    }), kt(o, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, e.prototype.onPinchStart = function(r) {
    var n = this, o = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > o)) {
      var i = new gl(Xa(r));
      this.pinchFlag = !0, this._addStore(i);
      var a = this.emit("pinchStart", Kt(Kt({ data: this.data, datas: this.data, angle: i.getAngle(), touches: this.getCurrentStore().getPositions() }, i.getPosition()), { inputEvent: r, isTrusted: this._isTrusted, preventDefault: function() {
        r.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      a === !1 && (this.pinchFlag = !1);
    }
  }, e.prototype.onPinch = function(r, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var o = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", Kt(Kt({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: o.getAngle(n), rotation: o.getRotation(n), touches: o.getPositions(n), scale: o.getScale(n), distance: o.getDistance(n) }, o.getPosition(n)), { inputEvent: r, isTrusted: this._isTrusted }));
    }
  }, e.prototype.onPinchEnd = function(r) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var o = this.getCurrentStore();
      this.emit("pinchEnd", Kt(Kt({ data: this.data, datas: this.data, isPinch: n, touches: o.getPositions() }, o.getPosition()), { inputEvent: r }));
    }
  }, e.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, e.prototype.moveClients = function(r, n, o) {
    var i = this._getPosition(r, o), a = this.isDrag;
    (i.deltaX || i.deltaY) && (this.isDrag = !0);
    var s = !1;
    return !a && this.isDrag && (s = !0), Kt(Kt({ data: this.data, datas: this.data }, i), { movement: this.getMovement(r), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: s });
  }, e.prototype._addStore = function(r) {
    this.clientStores.splice(0, 0, r);
  }, e.prototype._getPosition = function(r, n) {
    var o = this.getCurrentStore(), i = o.getPosition(r, n), a = this.clientStores.slice(1).reduce(function(l, u) {
      var f = u.getPosition();
      return l.distX += f.distX, l.distY += f.distY, l;
    }, i), s = a.distX, c = a.distY;
    return Kt(Kt({}, i), { distX: s, distY: c });
  }, e.prototype._attchDragEvent = function() {
    var r = this._window, n = this.options.container, o = {
      passive: !1
    };
    this._isDragAPI && (Ft(n, "dragover", this.onDrag, o), Ft(r, "dragend", this.onDragEnd)), this._useMouse && (Ft(n, "mousemove", this.onDrag), Ft(r, "mouseup", this.onDragEnd)), this._useTouch && (Ft(n, "touchmove", this.onDrag, o), Ft(r, "touchend", this.onDragEnd, o), Ft(r, "touchcancel", this.onDragEnd, o));
  }, e.prototype._dettachDragEvent = function() {
    var r = this._window, n = this.options.container;
    this._isDragAPI && (kt(n, "dragover", this.onDrag), kt(r, "dragend", this.onDragEnd)), this._useMouse && (kt(n, "mousemove", this.onDrag), kt(r, "mouseup", this.onDragEnd)), this._useTouch && (kt(n, "touchstart", this.onDragStart), kt(n, "touchmove", this.onDrag), kt(r, "touchend", this.onDragEnd), kt(r, "touchcancel", this.onDragEnd));
  }, e.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, e;
}(fn), mu = function() {
  return mu = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, mu.apply(this, arguments);
};
function zO(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
    e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function g1(t, e) {
  var r = Hs(e), n = r.className;
  return $u(function(o, i) {
    var a = o.className, s = a === void 0 ? "" : a;
    o.cspNonce;
    var c = zO(o, ["className", "cspNonce"]), l = er();
    return Hb(i, function() {
      return l.current;
    }, []), Ht(function() {
      var u = r.inject(l.current, {
        nonce: o.cspNonce
      });
      return function() {
        u.destroy();
      };
    }, []), On(t, mu({
      ref: l,
      "data-styled-id": n,
      className: "".concat(s, " ").concat(n)
    }, c));
  });
}
var yu = function(t, e) {
  return yu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, yu(t, e);
};
function pa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  yu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var A = function() {
  return A = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, A.apply(this, arguments);
};
function GO(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function $O(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(t, e, r, n);
  else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
}
function VO(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function I(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t), o, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function tt(t, e, r) {
  if (arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function ha(t, e) {
  return A({ events: [], props: [], name: t }, e);
}
var WO = ["n", "w", "s", "e"], fd = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function HO(t, e) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(e, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function YO(t) {
  var e = HO(1, t), r = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return r === 135 ? n = "nwse-resize" : r === 45 ? n = "nesw-resize" : r === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(e, "') 16 16, ").concat(n, ";");
}
var Ho = aO(), m1 = Ho.browser.webkit, y1 = m1 && function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, e = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return e ? parseFloat(e[1]) < 605 : !1;
}(), x1 = Ho.browser.name, b1 = parseInt(Ho.browser.version, 10), UO = x1 === "chrome", XO = Ho.browser.chromium, qO = parseInt(Ho.browser.chromiumVersion, 10) || 0, KO = UO && b1 >= 109 || XO && qO >= 109, ZO = x1 === "firefox", JO = parseInt(Ho.browser.webkitVersion, 10) >= 612 || b1 >= 15, dd = "moveable-", QO = fd.map(function(t) {
  var e = "", r = "", n = "center", o = "center", i = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (e = "top: ".concat(i, ";"), o = "bottom"), t.indexOf("s") > -1 && (e = "top: 0px;", o = "top"), t.indexOf("w") > -1 && (r = "left: ".concat(i, ";"), n = "right"), t.indexOf("e") > -1 && (r = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(r).concat(e, `
        transform-origin: `).concat(n, " ").concat(o, `;
    }`);
}).join(`
`), tN = `
{
position: absolute;
width: 1px;
height: 1px;
left: 0;
top: 0;
z-index: 3000;
--moveable-color: #4af;
--zoom: 1;
--zoompx: 1px;
--moveable-line-padding: 0;
--moveable-control-padding: 0;
will-change: transform;
outline: 1px solid transparent;
}
.control-box {
z-index: 0;
}
.line, .control {
position: absolute;
left: 0;
top: 0;
will-change: transform;
}
.control {
width: 14px;
height: 14px;
border-radius: 50%;
border: 2px solid #fff;
box-sizing: border-box;
background: #4af;
background: var(--moveable-color);
margin-top: -7px;
margin-left: -7px;
border: 2px solid #fff;
z-index: 10;
}
.around-control {
position: absolute;
will-change: transform;
width: calc(var(--moveable-control-padding, 20) * 1px);
height: calc(var(--moveable-control-padding, 20) * 1px);
left: calc(var(--moveable-control-padding, 20) * -0.5px);
top: calc(var(--moveable-control-padding, 20) * -0.5px);
box-sizing: border-box;
background: transparent;
z-index: 8;
cursor: alias;
transform-origin: center center;
}
`.concat(QO, `
.padding {
position: absolute;
top: 0px;
left: 0px;
width: 100px;
height: 100px;
transform-origin: 0 0;
}
.line {
width: 1px;
height: 1px;
background: #4af;
background: var(--moveable-color);
transform-origin: 0px 50%;
}
.line.edge {
z-index: 1;
background: transparent;
}
.line.dashed {
box-sizing: border-box;
background: transparent;
}
.line.dashed.horizontal {
border-top: 1px dashed #4af;
border-top-color: #4af;
border-top-color: var(--moveable-color);
}
.line.dashed.vertical {
border-left: 1px dashed #4af;
border-left-color: #4af;
border-left-color: var(--moveable-color);
}
.line.vertical {
transform: translateX(-50%);
}
.line.horizontal {
transform: translateY(-50%);
}
.line.vertical.bold {
width: 2px;
}
.line.horizontal.bold {
height: 2px;
}

.control.origin {
border-color: #f55;
background: #fff;
width: 12px;
height: 12px;
margin-top: -6px;
margin-left: -6px;
pointer-events: none;
}
`).concat([0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function(t) {
  return `
.direction[data-rotation="`.concat(t, '"], :global .view-control-rotation').concat(t, ` {
`).concat(YO(t), `
}
`);
}).join(`
`), `

.line.direction:before {
content: "";
position: absolute;
width: 100%;
height: calc(var(--moveable-line-padding, 0) * 1px);
bottom: 0;
left: 0;
}
.group {
z-index: -1;
}
.area {
position: absolute;
}
.area-pieces {
position: absolute;
top: 0;
left: 0;
display: none;
}
.area.avoid, .area.pass {
pointer-events: none;
}
.area.avoid+.area-pieces {
display: block;
}
.area-piece {
position: absolute;
}

`).concat(y1 ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), eN = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], xu = 1e-4, ye = 1e-7, qa = 1e-9, bu = Math.pow(10, 10), yh = -bu, rN = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, pd = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, w1 = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, nN = [
  "isMoveableElement",
  "updateRect",
  "updateTarget",
  "destroy",
  "dragStart",
  "isInside",
  "hitTest",
  "setState",
  "getRect",
  "request",
  "isDragging",
  "getManager",
  "forceUpdate",
  "waitToChangeTarget",
  "updateSelectors",
  "getTargets",
  "stopDrag",
  "getControlBoxElement",
  "getMoveables",
  "getDragElement"
];
function va(t, e, r, n, o, i) {
  var a, s;
  i === void 0 && (i = "draggable");
  var c = (s = (a = e.gestos[i]) === null || a === void 0 ? void 0 : a.move(r, t.inputEvent)) !== null && s !== void 0 ? s : {}, l = c.originalDatas || c.datas, u = l[i] || (l[i] = {});
  return A(A({}, c), { isPinch: !!n, parentEvent: !0, datas: u, originalDatas: t.originalDatas });
}
var Po = /* @__PURE__ */ function() {
  function t(e) {
    var r;
    e === void 0 && (e = "draggable"), this.ableName = e, this.prevX = 0, this.prevY = 0, this.startX = 0, this.startY = 0, this.isDrag = !1, this.isFlag = !1, this.datas = {
      draggable: {}
    }, this.datas = (r = {}, r[e] = {}, r);
  }
  return t.prototype.dragStart = function(e, r) {
    this.isDrag = !1, this.isFlag = !1;
    var n = r.originalDatas;
    return this.datas = n, n[this.ableName] || (n[this.ableName] = {}), A(A({}, this.move(e, r.inputEvent)), { type: "dragstart" });
  }, t.prototype.drag = function(e, r) {
    return this.move([
      e[0] - this.prevX,
      e[1] - this.prevY
    ], r);
  }, t.prototype.move = function(e, r) {
    var n, o, i = !1;
    if (!this.isFlag)
      this.prevX = e[0], this.prevY = e[1], this.startX = e[0], this.startY = e[1], n = e[0], o = e[1], this.isFlag = !0;
    else {
      var a = this.isDrag;
      n = this.prevX + e[0], o = this.prevY + e[1], (e[0] || e[1]) && (this.isDrag = !0), !a && this.isDrag && (i = !0);
    }
    return this.prevX = n, this.prevY = o, {
      type: "drag",
      clientX: n,
      clientY: o,
      inputEvent: r,
      isFirstDrag: i,
      isDrag: this.isDrag,
      distX: n - this.startX,
      distY: o - this.startY,
      deltaX: e[0],
      deltaY: e[1],
      datas: this.datas[this.ableName],
      originalDatas: this.datas,
      parentEvent: !0,
      parentGesto: this
    };
  }, t;
}();
function go(t, e, r, n) {
  var o = t.length === 16, i = o ? 4 : 3, a = Hn(t, r, n, i), s = I(a, 4), c = I(s[0], 2), l = c[0], u = c[1], f = I(s[1], 2), d = f[0], p = f[1], g = I(s[2], 2), h = g[0], m = g[1], y = I(s[3], 2), x = y[0], b = y[1], w = I(Gt(t, e, i), 2), _ = w[0], E = w[1], C = Math.min(l, d, h, x), T = Math.min(u, p, m, b), R = Math.max(l, d, h, x), D = Math.max(u, p, m, b);
  l = l - C || 0, d = d - C || 0, h = h - C || 0, x = x - C || 0, u = u - T || 0, p = p - T || 0, m = m - T || 0, b = b - T || 0, _ = _ - C || 0, E = E - T || 0;
  var N = t[0], M = t[i + 1], O = ge(N * M);
  return {
    left: C,
    top: T,
    right: R,
    bottom: D,
    origin: [_, E],
    pos1: [l, u],
    pos2: [d, p],
    pos3: [h, m],
    pos4: [x, b],
    direction: O
  };
}
function S1(t, e) {
  var r = e.clientX, n = e.clientY, o = e.datas, i = t.state, a = i.moveableClientRect, s = i.rootMatrix, c = i.is3d, l = i.pos1, u = a.left, f = a.top, d = c ? 4 : 3, p = I(lt(ko(s, [r - u, n - f], d), l), 2), g = p[0], h = p[1], m = I(_r({ datas: o, distX: g, distY: h }), 2), y = m[0], x = m[1];
  return [y, x];
}
function Wn(t, e) {
  var r = e.datas, n = t.state, o = n.allMatrix, i = n.beforeMatrix, a = n.is3d, s = n.left, c = n.top, l = n.origin, u = n.offsetMatrix, f = n.targetMatrix, d = n.transformOrigin, p = a ? 4 : 3;
  r.is3d = a, r.matrix = o, r.targetMatrix = f, r.beforeMatrix = i, r.offsetMatrix = u, r.transformOrigin = d, r.inverseMatrix = ar(o, p), r.inverseBeforeMatrix = ar(i, p), r.absoluteOrigin = Bn(Et([s, c], l), p), r.startDragBeforeDist = he(r.inverseBeforeMatrix, r.absoluteOrigin, p), r.startDragDist = he(r.inverseMatrix, r.absoluteOrigin, p);
}
function oN(t) {
  return go(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Cc(t, e, r) {
  var n = e.datas, o = e.originalDatas.beforeRenderable, i = n.transformIndex, a = o.nextTransforms, s = a.length, c = o.nextTransformAppendedIndexes, l = -1;
  i === -1 ? (r === "translate" ? l = 0 : r === "rotate" && (l = yr(a, function(p) {
    return p.match(/scale\(/g);
  })), l === -1 && (l = a.length), n.transformIndex = l) : Se(c, function(p) {
    return p.index === i && p.functionName === r;
  }) ? l = i : l = i + c.filter(function(p) {
    return p.index < i;
  }).length;
  var u = Pk(a, t.state, l), f = u.targetFunction, d = r === "rotate" ? "rotateZ" : r;
  n.beforeFunctionTexts = u.beforeFunctionTexts, n.afterFunctionTexts = u.afterFunctionTexts, n.beforeTransform = u.beforeFunctionMatrix, n.beforeTransform2 = u.beforeFunctionMatrix2, n.targetTansform = u.targetFunctionMatrix, n.afterTransform = u.afterFunctionMatrix, n.afterTransform2 = u.afterFunctionMatrix2, n.targetAllTransform = u.allFunctionMatrix, f.functionName === d ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : s > l && (n.isAppendTransform = !0, o.nextTransformAppendedIndexes = tt(tt([], I(c), !1), [{
    functionName: r,
    index: l,
    isAppend: !0
  }], !1));
}
function Ec(t, e, r) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? r : e, " ").concat(t.afterFunctionTexts.join(" "));
}
function iN(t) {
  var e = t.datas, r = t.distX, n = t.distY, o = I(E1({ datas: e, distX: r, distY: n }), 2), i = o[0], a = o[1], s = C1(e, hO([i, a], 4));
  return he(s, Bn([0, 0, 0], 4), 4);
}
function C1(t, e, r) {
  var n = t.beforeTransform, o = t.afterTransform, i = t.beforeTransform2, a = t.afterTransform2, s = t.targetAllTransform, c = r ? Pt(s, e, 4) : Pt(e, s, 4), l = Pt(ar(r ? i : n, 4), c, 4), u = Pt(l, ar(r ? a : o, 4), 4);
  return u;
}
function E1(t) {
  var e = t.datas, r = t.distX, n = t.distY, o = e.inverseBeforeMatrix, i = e.is3d, a = e.startDragBeforeDist, s = e.absoluteOrigin, c = i ? 4 : 3;
  return lt(he(o, Et(s, [r, n]), c), a);
}
function _r(t, e) {
  var r = t.datas, n = t.distX, o = t.distY, i = r.inverseBeforeMatrix, a = r.inverseMatrix, s = r.is3d, c = r.startDragBeforeDist, l = r.startDragDist, u = r.absoluteOrigin, f = s ? 4 : 3;
  return lt(he(e ? i : a, Et(u, [n, o]), f), e ? c : l);
}
function aN(t, e) {
  var r = t.datas, n = t.distX, o = t.distY;
  r.beforeMatrix;
  var i = r.matrix, a = r.is3d;
  r.startDragBeforeDist;
  var s = r.startDragDist, c = r.absoluteOrigin, l = a ? 4 : 3;
  return lt(he(i, Et(s, [n, o]), l), c);
}
function sN(t, e, r, n, o, i) {
  return n === void 0 && (n = e), o === void 0 && (o = r), i === void 0 && (i = [0, 0]), t ? t.map(function(a, s) {
    var c = mr(a), l = c.value, u = c.unit, f = s ? o : n, d = s ? r : e;
    if (a === "%" || isNaN(l)) {
      var p = f ? i[s] / f : 0;
      return d * p;
    } else if (u !== "%")
      return l;
    return d * l / 100;
  }) : i;
}
function _1(t) {
  var e = [];
  return t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)), t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)), e;
}
function cN(t, e) {
  return _1(e).map(function(r) {
    return t[r];
  });
}
function ml(t, e) {
  var r = (e + 1) / 2;
  return [
    yo(t[0][0], t[1][0], r, 1 - r),
    yo(t[0][1], t[1][1], r, 1 - r)
  ];
}
function ne(t, e) {
  var r = ml([t[0], t[1]], e[0]), n = ml([t[2], t[3]], e[0]);
  return ml([r, n], e[1]);
}
function lN(t, e, r, n, o, i) {
  var a = Hn(e, r, n, o), s = ne(a, i), c = t[0] - s[0], l = t[1] - s[1];
  return [c, l];
}
function ga(t, e, r, n) {
  return Pt(t, _i(e, n, r), n);
}
function uN(t, e, r, n) {
  var o = t.transformOrigin, i = t.offsetMatrix, a = t.is3d, s = a ? 4 : 3, c;
  if (Lt(r)) {
    var l = e.beforeTransform, u = e.afterTransform;
    n ? c = sr(Do(r), 4, s) : c = sr(Pt(Pt(l, Do([r]), 4), u, 4), 4, s);
  } else
    c = r;
  return ga(i, c, o, s);
}
function fN(t, e) {
  var r = t.transformOrigin, n = t.offsetMatrix, o = t.is3d, i = t.targetMatrix, a = t.targetAllTransform, s = o ? 4 : 3;
  return ga(n, Pt(a || i, ad(e, s), s), r, s);
}
function _c(t, e) {
  var r = Yo(e);
  return {
    setTransform: function(n, o) {
      o === void 0 && (o = -1), r.startTransforms = Tt(n) ? n : Or(n), wu(t, e, o);
    },
    setTransformIndex: function(n) {
      wu(t, e, n);
    }
  };
}
function Tc(t, e, r) {
  var n = Yo(e), o = n.startTransforms;
  wu(t, e, yr(o, function(i) {
    return i.indexOf("".concat(r, "(")) === 0;
  }));
}
function wu(t, e, r) {
  var n = Yo(e), o = e.datas;
  if (o.transformIndex = r, r !== -1) {
    var i = n.startTransforms[r];
    if (i) {
      var a = t.state, s = Mo([i], {
        "x%": function(c) {
          return c / 100 * a.offsetWidth;
        },
        "y%": function(c) {
          return c / 100 * a.offsetHeight;
        }
      });
      o.startValue = s[0].functionValue;
    }
  }
}
function hd(t, e) {
  var r = Yo(t);
  r.nextTransforms = Or(e);
}
function Yo(t) {
  return t.originalDatas.beforeRenderable;
}
function Os(t) {
  var e = t.originalDatas.beforeRenderable;
  return e.nextTransforms;
}
function Ka(t) {
  return (Os(t) || []).join(" ");
}
function Za(t) {
  return Yo(t).nextStyle;
}
function T1(t, e, r, n, o) {
  hd(o, e);
  var i = ve.drag(t, va(o, t.state, r, n)), a = i ? i.transform : e;
  return A(A({ transform: e, drag: i }, me({
    transform: a
  }, o)), { afterTransform: a });
}
function vd(t, e, r, n, o, i) {
  var a = uN(t.state, o, e, i), s = hN(t, r, n, a);
  return s;
}
function R1(t, e, r, n, o, i, a) {
  var s = vd(t, e, r, o, i, a), c = t.state, l = c.left, u = c.top, f = t.props.groupable, d = f ? l : 0, p = f ? u : 0, g = lt(n, s);
  return lt(g, [d, p]);
}
function dN(t, e, r, n, o, i, a) {
  var s = R1(t, e, r, n, o, i, a);
  return s;
}
function pN(t, e, r) {
  return [
    e ? -1 + t[0] / (e / 2) : 0,
    r ? -1 + t[1] / (r / 2) : 0
  ];
}
function hN(t, e, r, n) {
  n === void 0 && (n = t.state.allMatrix);
  var o = t.state, i = o.width, a = o.height, s = o.is3d, c = s ? 4 : 3, l = [
    i / 2 * (1 + e[0]) + r[0],
    a / 2 * (1 + e[1]) + r[1]
  ];
  return Gt(n, l, c);
}
function vN(t, e, r) {
  var n = r.fixedDirection, o = r.fixedPosition, i = r.fixedOffset;
  return R1(t, "rotate(".concat(e, "deg)"), n, o, i, r);
}
function gN(t, e, r, n, o, i) {
  var a = t.props.groupable, s = t.state, c = s.transformOrigin, l = s.offsetMatrix, u = s.is3d, f = s.width, d = s.height, p = s.left, g = s.top, h = i.fixedDirection, m = i.nextTargetMatrix || s.targetMatrix, y = u ? 4 : 3, x = sN(o, e, r, f, d, c), b = a ? p : 0, w = a ? g : 0, _ = ga(l, m, x, y), E = lN(n, _, e, r, y, h);
  return lt(E, [b, w]);
}
function mN(t, e) {
  return ne(He(t.state), e);
}
function yN(t, e) {
  var r = t.targetGesto, n = t.controlGesto, o;
  return r?.isFlag() && (o = r.getEventData()[e]), !o && n?.isFlag() && (o = n.getEventData()[e]), o || {};
}
function xN(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function bN(t) {
  var e = t("scale"), r = t("rotate"), n = t("translate"), o = [];
  return n && n !== "0px" && n !== "none" && o.push("translate(".concat(n.split(/\s+/).join(","), ")")), r && r !== "1" && r !== "none" && o.push("rotate(".concat(r, ")")), e && e !== "1" && e !== "none" && o.push("scale(".concat(e.split(/\s+/).join(","), ")")), o;
}
function D1(t, e, r) {
  for (var n = t, o = [], i = Ju(t) || un(t), a = !r && t === e || t === i, s = a, c = !1, l = 3, u, f, d, p = !1, g = ta(e, e, !0).offsetParent, h = 1; n && !s; ) {
    s = a;
    var m = Ce(n), y = m("position"), x = J1(n), b = y === "fixed", w = bN(m), _ = vO(mk(x)), E = void 0, C = !1, T = !1, R = 0, D = 0, N = 0, M = 0, O = {
      hasTransform: !1,
      fixedContainer: null
    };
    b && (p = !0, O = Sk(n), g = O.fixedContainer);
    var k = _.length;
    !c && (k === 16 || w.length) && (c = !0, l = 4, Ru(o), d && (d = sr(d, 3, 4))), c && k === 9 && (_ = sr(_, 3, 4));
    var F = wk(n, t), $ = F.tagName, V = F.hasOffset, L = F.isSVG, z = F.origin, j = F.targetOrigin, B = F.offset, Y = I(B, 2), K = Y[0], X = Y[1];
    $ === "svg" && !n.ownerSVGElement && d && (o.push({
      type: "target",
      target: n,
      matrix: Ck(n, l)
    }), o.push({
      type: "offset",
      target: n,
      matrix: jt(l)
    }));
    var H = parseFloat(m("zoom")) || 1;
    if (b)
      E = O.fixedContainer, C = !0;
    else {
      var Q = ta(n, e, !1, !0, m), W = Q.offsetZoom;
      if (E = Q.offsetParent, C = Q.isEnd, T = Q.isStatic, h *= W, (Q.isCustomElement || W !== 1) && T)
        K -= E.offsetLeft, X -= E.offsetTop;
      else if (ZO || KO) {
        var q = Q.parentSlotElement;
        if (q) {
          for (var ot = E, nt = 0, U = 0; ot && xN(ot); )
            nt += ot.offsetLeft, U += ot.offsetTop, ot = ot.offsetParent;
          K -= nt, X -= U;
        }
      }
    }
    if (m1 && !JO && V && !L && T && (y === "relative" || y === "static") && (K -= E.offsetLeft, X -= E.offsetTop, a = a || C), b)
      V && O.hasTransform && (N = E.clientLeft, M = E.clientTop);
    else if (V && g !== E && (R = E.clientLeft, D = E.clientTop), V && E === i) {
      var et = Q1(n, !1);
      K += et[0], X += et[1];
    }
    if (o.push({
      type: "target",
      target: n,
      matrix: _i(_, l, z)
    }), w.length && (o.push({
      type: "offset",
      target: n,
      matrix: jt(l)
    }), o.push({
      type: "target",
      target: n,
      matrix: _i(Do(w), l, z)
    })), V) {
      var dt = n === t, ct = dt ? 0 : n.scrollLeft, ft = dt ? 0 : n.scrollTop;
      o.push({
        type: "offset",
        target: n,
        matrix: Ln([
          K - ct + R - N,
          X - ft + D - M
        ], l)
      });
    } else
      o.push({
        type: "offset",
        target: n,
        origin: z
      });
    if (H !== 1 && o.push({
      type: "zoom",
      target: n,
      matrix: _i(ad([H, H], l), l, [0, 0])
    }), d || (d = _), u || (u = z), f || (f = j), s || b)
      break;
    n = E, a = C, (!r || n === i) && (s = a);
  }
  return d || (d = jt(l)), u || (u = [0, 0]), f || (f = [0, 0]), {
    zoom: h,
    offsetContainer: g,
    matrixes: o,
    targetMatrix: d,
    transformOrigin: u,
    targetOrigin: f,
    is3d: c,
    hasFixed: p
  };
}
var Cn = null, En = null, so = null;
function Oo(t) {
  t ? (window.Map && (Cn = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map()), so = []) : (Cn = null, so = null, En = null);
}
function wN(t) {
  var e = En?.get(t);
  if (e)
    return e;
  var r = Ti(t, !0);
  return En && En.set(t, r), r;
}
function SN(t, e) {
  if (so) {
    var r = Se(so, function(o) {
      return o[0][0] == t && o[0][1] == e;
    });
    if (r)
      return r[1];
  }
  var n = D1(t, e, !0);
  return so && so.push([[t, e], n]), n;
}
function Ce(t) {
  var e = Cn?.get(t);
  if (!e) {
    var r = De(t).getComputedStyle(t);
    if (!Cn)
      return function(i) {
        return r[i];
      };
    e = {
      style: r,
      cached: {}
    }, Cn.set(t, e);
  }
  var n = e.cached, o = e.style;
  return function(i) {
    return i in n || (n[i] = o[i]), n[i];
  };
}
function nr(t, e, r) {
  var n = r.originalDatas;
  n.groupable = n.groupable || {};
  var o = n.groupable;
  o.childDatas = o.childDatas || [];
  var i = o.childDatas;
  return t.moveables.map(function(a, s) {
    return i[s] = i[s] || {}, i[s][e] = i[s][e] || {}, A(A({}, r), { isRequestChild: !0, datas: i[s][e], originalDatas: i[s] });
  });
}
function yl(t, e, r, n, o, i, a) {
  var s = !!r.match(/Start$/g), c = !!r.match(/End$/g), l = o.isPinch, u = o.datas, f = nr(t, e.name, o), d = t.moveables, p = [], g = f.map(function(h, m) {
    var y = d[m], x = y.state, b = x.gestos, w = h;
    if (s)
      w = new Po(a).dragStart(n, h), p.push(w);
    else {
      if (b[a] || (b[a] = u.childGestos[m]), !b[a])
        return;
      w = va(h, x, n, l, i, a), p.push(w);
    }
    var _ = e[r](y, A(A({}, w), { parentFlag: !0 }));
    return c && (b[a] = null), _;
  });
  return s && (u.childGestos = d.map(function(h) {
    return h.state.gestos[a];
  })), {
    eventParams: g,
    childEvents: p
  };
}
function Pr(t, e, r, n, o, i) {
  o === void 0 && (o = function(u, f) {
    return f;
  });
  var a = !!r.match(/End$/g), s = nr(t, e.name, n), c = t.moveables, l = s.map(function(u, f) {
    var d = c[f], p = u;
    p = o(d, u);
    var g = e[r](d, A(A({}, p), { parentFlag: !0 }));
    return a && (d.state.gestos = {}), g;
  });
  return l;
}
function Ns(t, e, r, n) {
  var o = r.fixedDirection, i = r.fixedPosition, a = n.datas.startPositions || He(e.state), s = ne(a, o), c = I(he(da(-t.rotation / 180 * Math.PI, 3), [s[0] - i[0], s[1] - i[1], 1], 3), 2), l = c[0], u = c[1];
  return n.datas.originalX = l, n.datas.originalY = u, n;
}
function M1(t, e, r, n) {
  var o = t.getState(), i = o.renderPoses, a = o.rotation, s = o.direction, c = Gn(t.props, e).zoom, l = Ei(a / Math.PI * 180), u = {}, f = t.renderState;
  f.renderDirectionMap || (f.renderDirectionMap = {});
  var d = f.renderDirectionMap;
  r.forEach(function(g) {
    var h = g.dir;
    u[h] = !0;
  });
  var p = ge(s);
  return r.map(function(g) {
    var h = g.data, m = g.classNames, y = g.dir, x = pd[y];
    if (!x || !u[y])
      return null;
    d[y] = !0;
    var b = (pt(l, 15) + p * w1[y] + 720) % 180, w = {};
    return Ge(h).forEach(function(_) {
      w["data-".concat(_)] = h[_];
    }), n.createElement("div", A({ className: st.apply(void 0, tt(["control", "direction", y, e], I(m), !1)), "data-rotation": b, "data-direction": y }, w, { key: "direction-".concat(y), style: Is.apply(void 0, tt([a, c], I(x.map(function(_) {
      return i[_];
    })), !1)) }));
  });
}
function P1(t, e, r, n) {
  var o = Gn(t.props, r), i = o.renderDirections, a = i === void 0 ? e : i, s = o.displayAroundControls;
  if (!a)
    return [];
  var c = a === !0 ? fd : a;
  return tt(tt([], I(s ? A1(t, n, r, c) : []), !1), I(M1(t, r, c.map(function(l) {
    return {
      data: {},
      classNames: [],
      dir: l
    };
  }), n)), !1);
}
function Qi(t, e, r, n, o, i) {
  for (var a = [], s = 6; s < arguments.length; s++)
    a[s - 6] = arguments[s];
  var c = Xt(r, n), l = e ? pt(c / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(i), className: st.apply(void 0, tt(["line", "direction", e ? "edge" : "", e], I(a), !1)), "data-rotation": l, "data-line-key": i, "data-direction": e, style: gi(r, n, o, c) });
}
function O1(t, e, r, n, o) {
  var i = r === !0 ? WO : r;
  return i.map(function(a, s) {
    var c = I(pd[a], 2), l = c[0], u = c[1];
    if (u != null)
      return Qi(t, a, n[l], n[u], o, "".concat(e, "Edge").concat(s), e);
  }).filter(Boolean);
}
function N1(t) {
  return function(e, r) {
    var n = Gn(e.props, t).edge;
    return n && (n === !0 || n.length) ? tt(tt([], I(O1(r, t, n, e.getState().renderPoses, e.props.zoom)), !1), I(CN(e, t, r)), !1) : k1(e, t, r);
  };
}
function k1(t, e, r) {
  return P1(t, fd, e, r);
}
function CN(t, e, r) {
  return P1(t, ["nw", "ne", "sw", "se"], e, r);
}
function A1(t, e, r, n) {
  var o = t.renderState;
  o.renderDirectionMap || (o.renderDirectionMap = {});
  var i = t.getState(), a = i.renderPoses, s = i.rotation, c = i.direction, l = o.renderDirectionMap, u = t.props.zoom, f = ge(c), d = s / Math.PI * 180;
  return (n || Ge(l)).map(function(p) {
    var g = pd[p];
    if (!g)
      return null;
    var h = (pt(d, 15) + f * w1[p] + 720) % 180, m = ["around-control"];
    return r && m.push("direction", r), e.createElement("div", { className: st.apply(void 0, tt([], I(m), !1)), "data-rotation": h, "data-direction": p, key: "direction-around-".concat(p), style: Is.apply(void 0, tt([s, u], I(g.map(function(y) {
      return a[y];
    })), !1)) });
  });
}
function gd(t, e, r) {
  var n = t || {}, o = n.position, i = o === void 0 ? "client" : o, a = n.left, s = a === void 0 ? -1 / 0 : a, c = n.top, l = c === void 0 ? -1 / 0 : c, u = n.right, f = u === void 0 ? 1 / 0 : u, d = n.bottom, p = d === void 0 ? 1 / 0 : d, g = {
    position: i,
    left: s,
    top: l,
    right: f,
    bottom: p
  };
  return {
    vertical: xh(g, e, !0),
    horizontal: xh(g, r, !1)
  };
}
function Rc(t, e) {
  var r = t.state, n = r.containerClientRect, o = n.clientHeight, i = n.clientWidth, a = n.clientLeft, s = n.clientTop, c = r.snapOffset, l = c.left, u = c.top, f = c.right, d = c.bottom, p = e || t.props.bounds || {}, g = p.position || "client", h = g === "css", m = p.left, y = m === void 0 ? -1 / 0 : m, x = p.top, b = x === void 0 ? -1 / 0 : x, w = p.right, _ = w === void 0 ? h ? -1 / 0 : 1 / 0 : w, E = p.bottom, C = E === void 0 ? h ? -1 / 0 : 1 / 0 : E;
  return h && (_ = i + f - l - _, C = o + d - u - C), {
    left: y + l - a,
    right: _ + l - a,
    top: b + u - s,
    bottom: C + u - s
  };
}
function EN(t, e, r) {
  var n = Rc(t), o = n.left, i = n.top, a = n.right, s = n.bottom, c = I(r, 2), l = c[0], u = c[1], f = I(lt(r, e), 2), d = f[0], p = f[1];
  Z(d) < ye && (d = 0), Z(p) < ye && (p = 0);
  var g = p > 0, h = d > 0, m = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, y = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (d === 0 && p === 0)
    return {
      vertical: m,
      horizontal: y
    };
  if (d === 0)
    g ? s < u && (y.pos = s, y.offset = u - s) : i > u && (y.pos = i, y.offset = u - i);
  else if (p === 0)
    h ? a < l && (m.pos = a, m.offset = l - a) : o > l && (m.pos = o, m.offset = l - o);
  else {
    var x = p / d, b = r[1] - x * l, w = 0, _ = 0, E = !1;
    h && a <= l ? (w = x * a + b, _ = a, E = !0) : !h && l <= o && (w = x * o + b, _ = o, E = !0), E && (w < i || w > s) && (E = !1), E || (g && s <= u ? (w = s, _ = (w - b) / x, E = !0) : !g && u <= i && (w = i, _ = (w - b) / x, E = !0)), E && (m.isBound = !0, m.pos = _, m.offset = l - _, y.isBound = !0, y.pos = w, y.offset = u - w);
  }
  return {
    vertical: m,
    horizontal: y
  };
}
function xh(t, e, r) {
  var n = t[r ? "left" : "top"], o = t[r ? "right" : "bottom"], i = Math.min.apply(Math, tt([], I(e), !1)), a = Math.max.apply(Math, tt([], I(e), !1)), s = [];
  return n + 1 > i && s.push({
    direction: "start",
    isBound: !0,
    offset: i - n,
    pos: n
  }), o - 1 < a && s.push({
    direction: "end",
    isBound: !0,
    offset: a - o,
    pos: o
  }), s.length || s.push({
    isBound: !1,
    offset: 0,
    pos: 0
  }), s.sort(function(c, l) {
    return Z(l.offset) - Z(c.offset);
  });
}
function bh(t, e, r) {
  var n = r ? t.map(function(o) {
    return fa(o, r);
  }) : t;
  return n.some(function(o) {
    return o[0] < e.left && Z(o[0] - e.left) > 0.1 || o[0] > e.right && Z(o[0] - e.right) > 0.1 || o[1] < e.top && Z(o[1] - e.top) > 0.1 || o[1] > e.bottom && Z(o[1] - e.bottom) > 0.1;
  });
}
function _N(t, e, r) {
  var n = We(t), o = Math.sqrt(n * n - e * e) || 0;
  return [o, -o].sort(function(i, a) {
    return Z(i - t[r ? 0 : 1]) - Z(a - t[r ? 0 : 1]);
  }).map(function(i) {
    return Xt([0, 0], r ? [i, e] : [e, i]);
  });
}
function TN(t, e, r, n, o) {
  if (!t.props.bounds)
    return [];
  var i = o * Math.PI / 180, a = Rc(t), s = a.left, c = a.top, l = a.right, u = a.bottom, f = s - n[0], d = l - n[0], p = c - n[1], g = u - n[1], h = {
    left: f,
    top: p,
    right: d,
    bottom: g
  };
  if (!bh(r, h, 0))
    return [];
  var m = [];
  return [
    [f, 0],
    [d, 0],
    [p, 1],
    [g, 1]
  ].forEach(function(y) {
    var x = I(y, 2), b = x[0], w = x[1];
    r.forEach(function(_) {
      var E = Xt([0, 0], _);
      m.push.apply(m, tt([], I(_N(_, b, w).map(function(C) {
        return i + C - E;
      }).filter(function(C) {
        return !bh(e, h, C);
      }).map(function(C) {
        return pt(C * 180 / Math.PI, ye);
      })), !1));
    });
  }), m;
}
var RN = ["left", "right", "center"], DN = ["top", "bottom", "middle"], wh = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, cn = {
  start: "left",
  end: "right",
  center: "center"
}, ln = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function co() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function Uo(t, e) {
  var r = t.props, n = r.snappable, o = r.bounds, i = r.innerBounds, a = r.verticalGuidelines, s = r.horizontalGuidelines, c = r.snapGridWidth, l = r.snapGridHeight, u = t.state, f = u.guidelines, d = u.enableSnap;
  return !n || !d || e && n !== !0 && n.indexOf(e) < 0 ? !1 : !!(c || l || o || i || f && f.length || a && a.length || s && s.length);
}
function md(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function MN(t, e) {
  var r = md(t), n = {};
  for (var o in r)
    o in e && r[o] && (n[o] = e[o]);
  return n;
}
function yd(t, e) {
  var r = MN(t, e), n = DN.filter(function(i) {
    return i in r;
  }), o = RN.filter(function(i) {
    return i in r;
  });
  return {
    horizontalNames: n,
    verticalNames: o,
    horizontal: n.map(function(i) {
      return r[i];
    }),
    vertical: o.map(function(i) {
      return r[i];
    })
  };
}
function PN(t, e, r) {
  var n = Gt(t, [e.clientLeft, e.clientTop], r);
  return [
    e.left + n[0],
    e.top + n[1]
  ];
}
function ON(t) {
  var e = I(t, 2), r = e[0], n = e[1], o = n[0] - r[0], i = n[1] - r[1];
  Math.abs(o) < Qt && (o = 0), Math.abs(i) < Qt && (i = 0);
  var a = 0, s = 0, c = 0;
  return o ? i ? (a = -i / o, s = 1, c = a * r[0] - r[1]) : (s = 1, c = -r[1]) : (a = -1, c = r[0]), [a, s, c].map(function(l) {
    return pt(l, Qt);
  });
}
var j1 = "snapRotationThreshold", I1 = "snapRotationDegrees", F1 = "snapHorizontalThreshold", B1 = "snapVerticalThreshold";
function Dc(t, e, r, n, o, i, a) {
  var s;
  n === void 0 && (n = []), o === void 0 && (o = []);
  var c = t.props, l = ((s = t.state.snapThresholdInfo) === null || s === void 0 ? void 0 : s.multiples) || [1, 1], u = Ih(a, c[F1], 5), f = Ih(i, c[B1], 5);
  return L1(t.state.guidelines, e, r, n, o, u, f, l);
}
function L1(t, e, r, n, o, i, a, s) {
  return {
    vertical: Ch(t, "vertical", e, a * s[0], n),
    horizontal: Ch(t, "horizontal", r, i * s[1], o)
  };
}
function NN(t, e, r) {
  var n = I(r, 2), o = n[0], i = n[1], a = I(e, 2), s = a[0], c = a[1], l = I(lt(r, e), 2), u = l[0], f = l[1], d = f > 0, p = u > 0;
  u = Fs(u), f = Fs(f);
  var g = {
    isSnap: !1,
    offset: 0,
    pos: 0
  }, h = {
    isSnap: !1,
    offset: 0,
    pos: 0
  };
  if (u === 0 && f === 0)
    return {
      vertical: g,
      horizontal: h
    };
  var m = Dc(t, u ? [o] : [], f ? [i] : [], [], [], void 0, void 0), y = m.vertical, x = m.horizontal;
  y.posInfos.filter(function($) {
    var V = $.pos;
    return p ? V >= s : V <= s;
  }), x.posInfos.filter(function($) {
    var V = $.pos;
    return d ? V >= c : V <= c;
  }), y.isSnap = y.posInfos.length > 0, x.isSnap = x.posInfos.length > 0;
  var b = Su(y), w = b.isSnap, _ = b.guideline, E = Su(x), C = E.isSnap, T = E.guideline, R = C ? T.pos[1] : 0, D = w ? _.pos[0] : 0;
  if (u === 0)
    C && (h.isSnap = !0, h.pos = T.pos[1], h.offset = i - h.pos);
  else if (f === 0)
    w && (g.isSnap = !0, g.pos = D, g.offset = o - D);
  else {
    var N = f / u, M = r[1] - N * o, O = 0, k = 0, F = !1;
    w ? (k = D, O = N * k + M, F = !0) : C && (O = R, k = (O - M) / N, F = !0), F && (g.isSnap = !0, g.pos = k, g.offset = o - k, h.isSnap = !0, h.pos = O, h.offset = i - O);
  }
  return {
    vertical: g,
    horizontal: h
  };
}
function Zr(t) {
  var e = "";
  return t === -1 || t === "top" || t === "left" ? e = "start" : t === 0 || t === "center" || t === "middle" ? e = "center" : (t === 1 || t === "right" || t === "bottom") && (e = "end"), e;
}
function Sh(t, e, r, n) {
  var o = yd(t.props.snapDirections, e), i = Dc(t, o.vertical, o.horizontal, o.verticalNames.map(function(c) {
    return Zr(c);
  }), o.horizontalNames.map(function(c) {
    return Zr(c);
  }), r, n), a = Zr(o.horizontalNames[i.horizontal.index]), s = Zr(o.verticalNames[i.vertical.index]);
  return {
    vertical: A(A({}, i.vertical), { direction: s }),
    horizontal: A(A({}, i.horizontal), { direction: a })
  };
}
function Su(t) {
  var e = t.isSnap;
  if (!e)
    return {
      isSnap: !1,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    };
  var r = t.posInfos[0], n = r.guidelineInfos[0], o = n.offset, i = n.dist, a = n.guideline;
  return {
    isSnap: e,
    offset: o,
    dist: i,
    pos: r.pos,
    guideline: a
  };
}
function Ch(t, e, r, n, o) {
  var i, a;
  if (o === void 0 && (o = []), !t || !t.length)
    return {
      isSnap: !1,
      index: -1,
      direction: "",
      posInfos: []
    };
  var s = e === "vertical", c = s ? 0 : 1, l = r.map(function(f, d) {
    var p = o[d] || "", g = t.map(function(h) {
      var m = h.pos, y = f - m[c];
      return {
        offset: y,
        dist: Z(y),
        guideline: h,
        direction: p
      };
    }).filter(function(h) {
      var m = h.guideline, y = h.dist, x = m.type;
      return !(x !== e || y > n);
    }).sort(function(h, m) {
      return h.dist - m.dist;
    });
    return {
      pos: f,
      index: d,
      guidelineInfos: g,
      direction: p
    };
  }).filter(function(f) {
    return f.guidelineInfos.length > 0;
  }).sort(function(f, d) {
    return f.guidelineInfos[0].dist - d.guidelineInfos[0].dist;
  }), u = l.length > 0;
  return {
    isSnap: u,
    index: u ? l[0].index : -1,
    direction: (a = (i = l[0]) === null || i === void 0 ? void 0 : i.direction) !== null && a !== void 0 ? a : "",
    posInfos: l
  };
}
function kN(t, e, r, n, o) {
  var i = [];
  r[0] && r[1] ? i = [
    r,
    [-r[0], r[1]],
    [r[0], -r[1]]
  ] : !r[0] && !r[1] ? [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ].forEach(function(d, p, g) {
    var h = g[p + 1] || g[0];
    i.push(d), i.push([
      (d[0] + h[0]) / 2,
      (d[1] + h[1]) / 2
    ]);
  }) : t.props.keepRatio ? i.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (i.push.apply(i, tt([], I(cN([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], r)), !1)), i.length > 1 && i.push([
    (i[0][0] + i[1][0]) / 2,
    (i[0][1] + i[1][1]) / 2
  ]));
  var a = i.map(function(d) {
    return ne(e, d);
  }), s = a.map(function(d) {
    return d[0];
  }), c = a.map(function(d) {
    return d[1];
  }), l = Dc(t, s, c, i.map(function(d) {
    return Zr(d[0]);
  }), i.map(function(d) {
    return Zr(d[1]);
  }), n, o), u = Zr(i.map(function(d) {
    return d[0];
  })[l.vertical.index]), f = Zr(i.map(function(d) {
    return d[1];
  })[l.horizontal.index]);
  return {
    vertical: A(A({}, l.vertical), { direction: u }),
    horizontal: A(A({}, l.horizontal), { direction: f })
  };
}
function z1(t, e) {
  var r = Z(t.offset), n = Z(e.offset);
  return t.isBound && e.isBound ? n - r : t.isBound ? -1 : e.isBound ? 1 : t.isSnap && e.isSnap ? n - r : t.isSnap ? -1 : e.isSnap || r < ye ? 1 : n < ye ? -1 : r - n;
}
function ks(t, e) {
  return t.slice().sort(function(r, n) {
    var o = r.sign[e], i = n.sign[e], a = r.offset[e], s = n.offset[e];
    if (o) {
      if (!i)
        return -1;
    } else return 1;
    return z1({ isBound: r.isBound, isSnap: r.isSnap, offset: a }, { isBound: n.isBound, isSnap: n.isSnap, offset: s });
  })[0];
}
function AN(t, e, r) {
  var n = [];
  if (r)
    Z(e[0]) !== 1 || Z(e[1]) !== 1 ? n.push([e, [-1, -1]], [e, [-1, 1]], [e, [1, -1]], [e, [1, 1]]) : n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]]), n.push([e, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var o = t[0] ? t : [1, 1];
    [1, -1].forEach(function(a) {
      [1, -1].forEach(function(s) {
        var c = [a * o[0], s * o[1]];
        e[0] === c[0] && e[1] === c[1] || n.push([e, c]);
      });
    });
  } else if (t[0]) {
    var i = Z(e[0]) === 1 ? [1] : [1, -1];
    i.forEach(function(a) {
      n.push([
        [e[0], -1],
        [a * t[0], -1]
      ], [
        [e[0], 0],
        [a * t[0], 0]
      ], [
        [e[0], 1],
        [a * t[0], 1]
      ]);
    });
  } else if (t[1]) {
    var i = Z(e[1]) === 1 ? [1] : [1, -1];
    i.forEach(function(s) {
      n.push([
        [-1, e[1]],
        [-1, s * t[1]]
      ], [
        [0, e[1]],
        [0, s * t[1]]
      ], [
        [1, e[1]],
        [1, s * t[1]]
      ]);
    });
  }
  return n;
}
function G1(t, e) {
  var r = Ml([e[0][0], e[1][0]]), n = Ml([e[0][1], e[1][1]]);
  return {
    vertical: r <= t[0],
    horizontal: n <= t[1]
  };
}
function xd(t, e) {
  var r = I(e, 2), n = r[0], o = r[1], i = o[0] - n[0], a = o[1] - n[1];
  Z(i) < ye && (i = 0), Z(a) < ye && (a = 0);
  var s, c;
  if (!i)
    s = n[0], c = t[0];
  else if (!a)
    s = n[1], c = t[1];
  else {
    var l = a / i;
    s = l * (t[0] - n[0]) + n[1], c = t[1];
  }
  return s - c;
}
function $1(t, e, r, n) {
  return n === void 0 && (n = ye), t.every(function(o) {
    var i = xd(o, e), a = i <= 0;
    return a === r || Z(i) <= n;
  });
}
function Eh(t, e, r, n, o) {
  return o === void 0 && (o = 0), n && e - o <= t || !n && t <= r + o ? {
    isBound: !0,
    offset: n ? e - t : r - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function jN(t, e) {
  var r = e.line, n = e.centerSign, o = e.verticalSign, i = e.horizontalSign, a = e.lineConstants, s = t.props.innerBounds;
  if (!s)
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var c = s.left, l = s.top, u = s.width, f = s.height, d = [[c, l], [c, l + f]], p = [[c, l], [c + u, l]], g = [[c + u, l], [c + u, l + f]], h = [[c, l + f], [c + u, l + f]];
  if ($1([
    [c, l],
    [c + u, l],
    [c, l + f],
    [c + u, l + f]
  ], r, n))
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var m = Jr(r, a, p, o), y = Jr(r, a, h, o), x = Jr(r, a, d, i), b = Jr(r, a, g, i), w = m.isBound && y.isBound, _ = m.isBound || y.isBound, E = x.isBound && b.isBound, C = x.isBound || b.isBound, T = No(m.offset, y.offset), R = No(x.offset, b.offset), D = [0, 0], N = !1, M = !1;
  return Z(R) < Z(T) ? (D = [T, 0], N = _, M = w) : (D = [0, R], N = C, M = E), {
    isAllBound: M,
    isVerticalBound: _,
    isHorizontalBound: C,
    isBound: N,
    offset: D
  };
}
function Jr(t, e, r, n, o, i) {
  var a = I(e, 2), s = a[0], c = a[1], l = t[0], u = r[0], f = r[1], d = Fs(f[1] - u[1]), p = Fs(f[0] - u[0]), g = c, h = s, m = -s / c;
  if (p) {
    if (!d) {
      if (i && !g)
        return {
          isBound: !1,
          offset: 0
        };
      if (h) {
        var w = (u[1] - l[1]) / m + l[0];
        return Eh(w, u[0], f[0], n, o);
      } else {
        var x = u[1] - l[1], b = Z(x) <= (o || 0);
        return {
          isBound: b,
          offset: b ? x : 0
        };
      }
    }
  } else {
    if (i && !h)
      return {
        isBound: !1,
        offset: 0
      };
    if (g) {
      var y = m * (u[0] - l[0]) + l[1];
      return Eh(y, u[1], f[1], n, o);
    } else {
      var x = u[0] - l[0], b = Z(x) <= (o || 0);
      return {
        isBound: b,
        offset: b ? x : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function V1(t, e, r) {
  return e.map(function(n) {
    var o = jN(t, n), i = o.isBound, a = o.offset, s = o.isVerticalBound, c = o.isHorizontalBound, l = n.multiple, u = _r({
      datas: r,
      distX: a[0],
      distY: a[1]
    }).map(function(f, d) {
      return f * (l[d] ? 2 / l[d] : 0);
    });
    return {
      sign: l,
      isBound: i,
      isVerticalBound: s,
      isHorizontalBound: c,
      isSnap: !1,
      offset: u
    };
  });
}
function IN(t, e, r) {
  var n, o = bd(t, e, [0, 0], !1).map(function(d) {
    return A(A({}, d), { multiple: d.multiple.map(function(p) {
      return Z(p) * 2;
    }) });
  }), i = V1(t, o, r), a = ks(i, 0), s = ks(i, 1), c = 0, l = 0, u = a.isVerticalBound || s.isVerticalBound, f = a.isHorizontalBound || s.isHorizontalBound;
  return (u || f) && (n = I(aN({
    datas: r,
    distX: -a.offset[0],
    distY: -s.offset[1]
  }), 2), c = n[0], l = n[1]), {
    vertical: {
      isBound: u,
      offset: c
    },
    horizontal: {
      isBound: f,
      offset: l
    }
  };
}
function FN(t, e) {
  var r = [], n = t[0], o = t[1];
  return n && o ? r.push([[0, o * 2], t, [-n, o]], [[n * 2, 0], t, [n, -o]]) : n ? (r.push([[n * 2, 0], [n, 1], [n, -1]]), e && r.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : o ? (r.push([[0, o * 2], [1, o], [-1, o]]), e && r.push([[-1, 0], [-1, o], [-1, -o]], [[1, 0], [1, o], [1, -o]])) : r.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), r;
}
function bd(t, e, r, n) {
  var o = t.state, i = o.allMatrix, a = o.is3d, s = Hn(i, 100, 100, a ? 4 : 3), c = ne(s, [0, 0]);
  return FN(r, n).map(function(l) {
    var u = I(l, 3), f = u[0], d = u[1], p = u[2], g = [
      ne(s, d),
      ne(s, p)
    ], h = ON(g), m = G1(c, g), y = m.vertical, x = m.horizontal, b = xd(c, g) <= 0;
    return {
      multiple: f,
      centerSign: b,
      verticalSign: y,
      horizontalSign: x,
      lineConstants: h,
      line: [
        ne(e, d),
        ne(e, p)
      ]
    };
  });
}
function _h(t, e, r, n) {
  var o = n ? t.map(function(i) {
    return fa(i, n);
  }) : t;
  return [
    [o[0], o[1]],
    [o[1], o[3]],
    [o[3], o[2]],
    [o[2], o[0]]
  ].some(function(i) {
    var a = xd(r, i) <= 0;
    return !$1(e, i, a);
  });
}
function BN(t) {
  var e = I(t, 2), r = e[0], n = e[1], o = n[0] - r[0], i = n[1] - r[1];
  if (!o)
    return Z(r[0]);
  if (!i)
    return Z(r[1]);
  var a = i / o;
  return Z((-a * r[0] + r[1]) / Math.sqrt(Math.pow(a, 2) + 1));
}
function LN(t) {
  var e = I(t, 2), r = e[0], n = e[1], o = n[0] - r[0], i = n[1] - r[1];
  if (!o)
    return [r[0], 0];
  if (!i)
    return [0, r[1]];
  var a = i / o, s = -a * r[0] + r[1];
  return [
    -s / (a + 1 / a),
    s / (a * a + 1)
  ];
}
function zN(t, e, r, n, o) {
  var i = t.props.innerBounds, a = o * Math.PI / 180;
  if (!i)
    return [];
  var s = i.left, c = i.top, l = i.width, u = i.height, f = s - n[0], d = s + l - n[0], p = c - n[1], g = c + u - n[1], h = [
    [f, p],
    [d, p],
    [f, g],
    [d, g]
  ], m = ne(r, [0, 0]);
  if (!_h(r, h, m, 0))
    return [];
  var y = [], x = h.map(function(b) {
    return [
      We(b),
      Xt([0, 0], b)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(b) {
    var w = Xt([0, 0], LN(b)), _ = BN(b);
    y.push.apply(y, tt([], I(x.filter(function(E) {
      var C = I(E, 1), T = C[0];
      return T && _ <= T;
    }).map(function(E) {
      var C = I(E, 2), T = C[0], R = C[1], D = Math.acos(T ? _ / T : 0), N = R + D, M = R - D;
      return [
        a + N - w,
        a + M - w
      ];
    }).reduce(function(E, C) {
      return E.push.apply(E, tt([], I(C), !1)), E;
    }, []).filter(function(E) {
      return !_h(e, h, m, E);
    }).map(function(E) {
      return pt(E * 180 / Math.PI, ye);
    })), !1));
  }), y;
}
function GN(t) {
  var e = t.props.innerBounds, r = co();
  if (!e)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), o = n.pos1, i = n.pos2, a = n.pos3, s = n.pos4, c = [o, i, a, s], l = ne(c, [0, 0]), u = e.left, f = e.top, d = e.width, p = e.height, g = [[u, f], [u, f + p]], h = [[u, f], [u + d, f]], m = [[u + d, f], [u + d, f + p]], y = [[u, f + p], [u + d, f + p]], x = bd(t, c, [0, 0], !1), b = [], w = [];
  return x.forEach(function(_) {
    var E = _.line, C = _.lineConstants, T = G1(l, E), R = T.horizontal, D = T.vertical, N = Jr(E, C, h, D, 1, !0), M = Jr(E, C, y, D, 1, !0), O = Jr(E, C, g, R, 1, !0), k = Jr(E, C, m, R, 1, !0);
    N.isBound && !r.top && (b.push(f), r.top = !0), M.isBound && !r.bottom && (b.push(f + p), r.bottom = !0), O.isBound && !r.left && (w.push(u), r.left = !0), k.isBound && !r.right && (w.push(u + d), r.right = !0);
  }), {
    boundMap: r,
    horizontal: b,
    vertical: w
  };
}
function $N(t, e, r, n) {
  var o = e[0] - t[0], i = e[1] - t[1];
  if (Z(o) < Qt && (o = 0), Z(i) < Qt && (i = 0), !o)
    return n ? [0, 0] : [0, r];
  if (!i)
    return n ? [r, 0] : [0, 0];
  var a = i / o, s = t[1] - a * t[0];
  if (n) {
    var c = a * (e[0] + r) + s;
    return [r, c - e[1]];
  } else {
    var l = (e[1] + r - s) / a;
    return [l - e[0], r];
  }
}
function Cu(t, e, r, n, o) {
  var i = $N(t, e, r, n);
  if (!i)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var a = dr(t, e), s = dr(i, t), c = dr(i, e), l = s > a || c > a, u = I(_r({
    datas: o,
    distX: i[0],
    distY: i[1]
  }), 2), f = u[0], d = u[1];
  return {
    offset: [f, d],
    isOutside: l
  };
}
function As(t, e) {
  return t.isBound ? t.offset : e.isSnap ? Su(e).offset : 0;
}
function VN(t, e, r, n, o) {
  var i = I(e, 2), a = i[0], s = i[1], c = I(r, 2), l = c[0], u = c[1], f = I(n, 2), d = f[0], p = f[1], g = I(o, 2), h = g[0], m = g[1], y = -h, x = -m;
  if (t && a && s) {
    y = 0, x = 0;
    var b = [];
    if (l && u ? b.push([0, m], [h, 0]) : l ? b.push([h, 0]) : u ? b.push([0, m]) : d && p ? b.push([0, m], [h, 0]) : d ? b.push([h, 0]) : p && b.push([0, m]), b.length) {
      b.sort(function(C, T) {
        return We(lt([a, s], C)) - We(lt([a, s], T));
      });
      var w = b[0];
      if (w[0] && Z(a) > Qt)
        y = -w[0], x = s * Z(a + y) / Z(a) - s;
      else if (w[1] && Z(s) > Qt) {
        var _ = s;
        x = -w[1], y = a * Z(s + x) / Z(_) - a;
      }
      if (t && u && l)
        if (Z(y) > Qt && Z(y) < Z(h)) {
          var E = Z(h) / Z(y);
          y *= E, x *= E;
        } else if (Z(x) > Qt && Z(x) < Z(m)) {
          var E = Z(m) / Z(x);
          y *= E, x *= E;
        } else
          y = No(-h, y), x = No(-m, x);
    }
  } else
    y = a || l ? -h : 0, x = s || u ? -m : 0;
  return [y, x];
}
function WN(t, e, r, n, o, i) {
  if (!Uo(t, "draggable"))
    return [
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      },
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      }
    ];
  var a = Cd(i.absolutePoses, [e, r]), s = Ve(a), c = s.left, l = s.right, u = s.top, f = s.bottom, d = {
    horizontal: a.map(function(k) {
      return k[1];
    }),
    vertical: a.map(function(k) {
      return k[0];
    })
  }, p = md(t.props.snapDirections), g = yd(p, {
    left: c,
    right: l,
    top: u,
    bottom: f,
    center: (c + l) / 2,
    middle: (u + f) / 2
  }), h = Mc(t, o, g, d), m = h.vertical, y = h.horizontal, x = IN(t, a, i), b = x.vertical, w = x.horizontal, _ = m.isSnap, E = y.isSnap, C = m.isBound || b.isBound, T = y.isBound || w.isBound, R = No(m.offset, b.offset), D = No(y.offset, w.offset), N = I(VN(n, [e, r], [C, T], [_, E], [R, D]), 2), M = N[0], O = N[1];
  return [
    {
      isBound: C,
      isSnap: _,
      offset: M
    },
    {
      isBound: T,
      isSnap: E,
      offset: O
    }
  ];
}
function Mc(t, e, r, n) {
  n === void 0 && (n = r);
  var o = gd(Rc(t), n.vertical, n.horizontal), i = o.horizontal, a = o.vertical, s = e ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : Dc(t, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), c = s.horizontal, l = s.vertical, u = As(i[0], c), f = As(a[0], l), d = Z(u), p = Z(f);
  return {
    horizontal: {
      isBound: i[0].isBound,
      isSnap: c.isSnap,
      snapIndex: c.index,
      offset: u,
      dist: d,
      bounds: i,
      snap: c
    },
    vertical: {
      isBound: a[0].isBound,
      isSnap: l.isSnap,
      snapIndex: l.index,
      offset: f,
      dist: p,
      bounds: a,
      snap: l
    }
  };
}
function Th(t, e, r, n, o, i, a) {
  a === void 0 && (a = [1, 1]);
  var s = gd(e, r, n), c = s.horizontal, l = s.vertical, u = L1(t, r, n, [], [], o, i, a), f = u.horizontal, d = u.vertical, p = As(c[0], f), g = As(l[0], d), h = Z(p), m = Z(g);
  return {
    horizontal: {
      isBound: c[0].isBound,
      isSnap: f.isSnap,
      snapIndex: f.index,
      offset: p,
      dist: h,
      bounds: c,
      snap: f
    },
    vertical: {
      isBound: l[0].isBound,
      isSnap: d.isSnap,
      snapIndex: d.index,
      offset: g,
      dist: m,
      bounds: l,
      snap: d
    }
  };
}
function HN(t, e, r, n) {
  var o = Xt(t, e) / Math.PI * 180, i = r.vertical, a = i.isBound, s = i.isSnap, c = i.dist, l = r.horizontal, u = l.isBound, f = l.isSnap, d = l.dist, p = o % 180, g = p < 3 || p > 177, h = p > 87 && p < 93;
  return d < c && (a || s && !h && (!n || !g)) ? "vertical" : u || f && !g && (!n || !h) ? "horizontal" : "";
}
function YN(t, e, r, n, o, i) {
  return r.map(function(a) {
    var s = I(a, 2), c = s[0], l = s[1], u = ne(e, c), f = ne(e, l), d = n ? UN(t, u, f, o) : Mc(t, o, {
      vertical: [f[0]],
      horizontal: [f[1]]
    }), p = d.horizontal, g = p.offset, h = p.isBound, m = p.isSnap, y = d.vertical, x = y.offset, b = y.isBound, w = y.isSnap, _ = lt(l, c);
    if (!x && !g)
      return {
        isBound: b || h,
        isSnap: w || m,
        sign: _,
        offset: [0, 0]
      };
    var E = HN(u, f, d, n);
    if (!E)
      return {
        sign: _,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var C = E === "vertical", T = [0, 0];
    return !n && Z(l[0]) === 1 && Z(l[1]) === 1 && c[0] !== l[0] && c[1] !== l[1] ? T = _r({
      datas: i,
      distX: -x,
      distY: -g
    }) : T = Cu(u, f, -(C ? x : g), C, i).offset, T = T.map(function(R, D) {
      return R * (_[D] ? 2 / _[D] : 0);
    }), {
      sign: _,
      isBound: C ? b : h,
      isSnap: C ? w : m,
      offset: T
    };
  });
}
function Rh(t, e) {
  return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
}
function UN(t, e, r, n) {
  var o = EN(t, e, r), i = o.horizontal, a = o.vertical, s = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : NN(t, e, r), c = s.horizontal, l = s.vertical, u = Rh(i, c), f = Rh(a, l), d = Z(u), p = Z(f);
  return {
    horizontal: {
      isBound: i.isBound,
      isSnap: c.isSnap,
      offset: u,
      dist: d
    },
    vertical: {
      isBound: a.isBound,
      isSnap: l.isSnap,
      offset: f,
      dist: p
    }
  };
}
function XN(t, e, r, n, o) {
  var i = [-r[0], -r[1]], a = t.state, s = a.width, c = a.height, l = t.props.bounds, u = 1 / 0, f = 1 / 0;
  if (l) {
    var d = [
      [r[0], -r[1]],
      [-r[0], r[1]]
    ], p = l.left, g = p === void 0 ? -1 / 0 : p, h = l.top, m = h === void 0 ? -1 / 0 : h, y = l.right, x = y === void 0 ? 1 / 0 : y, b = l.bottom, w = b === void 0 ? 1 / 0 : b;
    d.forEach(function(_) {
      var E = _[0] !== i[0], C = _[1] !== i[1], T = ne(e, _), R = Xt(n, T) * 360 / Math.PI;
      if (C) {
        var D = T.slice();
        (Z(R - 360) < 2 || Z(R - 180) < 2) && (D[1] = n[1]);
        var N = Cu(n, D, (n[1] < T[1] ? w : m) - T[1], !1, o), M = I(N.offset, 2), O = M[1], k = N.isOutside;
        isNaN(O) || (f = c + (k ? 1 : -1) * Z(O));
      }
      if (E) {
        var D = T.slice();
        (Z(R - 90) < 2 || Z(R - 270) < 2) && (D[0] = n[0]);
        var F = Cu(n, D, (n[0] < T[0] ? x : g) - T[0], !0, o), $ = I(F.offset, 1), V = $[0], L = F.isOutside;
        isNaN(V) || (u = s + (L ? 1 : -1) * Z(V));
      }
    });
  }
  return {
    maxWidth: u,
    maxHeight: f
  };
}
var ve = {
  name: "draggable",
  props: [
    "draggable",
    "throttleDrag",
    "throttleDragRotate",
    "hideThrottleDragRotateLine",
    "startDragRotate",
    "edgeDraggable"
  ],
  events: [
    "dragStart",
    "drag",
    "dragEnd",
    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd"
  ],
  requestStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  requestChildStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  render: function(t, e) {
    var r = t.props, n = r.hideThrottleDragRotateLine, o = r.throttleDragRotate, i = r.zoom, a = t.getState(), s = a.dragInfo, c = a.beforeOrigin;
    if (n || !o || !s)
      return [];
    var l = s.dist;
    if (!l[0] && !l[1])
      return [];
    var u = We(l), f = Xt(l, [0, 0]);
    return [e.createElement("div", { className: st("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(u, "px"),
      transform: "translate(".concat(c[0], "px, ").concat(c[1], "px) rotate(").concat(f, "rad) scaleY(").concat(i, ")")
    } })];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.parentEvent, o = e.parentGesto, i = t.state, a = i.gestos, s = i.style;
    if (a.draggable)
      return !1;
    a.draggable = o || t.targetGesto, r.datas = {}, r.left = parseFloat(s.left || "") || 0, r.top = parseFloat(s.top || "") || 0, r.bottom = parseFloat(s.bottom || "") || 0, r.right = parseFloat(s.right || "") || 0, r.startValue = [0, 0], Wn(t, e), Tc(t, e, "translate"), pk(t, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var c = vt(t, e, A({ set: function(u) {
      r.startValue = u;
    } }, _c(t, e))), l = n || it(t, "onDragStart", c);
    return l !== !1 ? (r.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (a.draggable = null, r.isPinch = !1), r.isDrag ? c : !1;
  },
  drag: function(t, e) {
    if (e) {
      Cc(t, e, "translate");
      var r = e.datas, n = e.parentEvent, o = e.parentFlag, i = e.isPinch, a = e.deltaOffset, s = e.useSnap, c = e.isRequest, l = e.isGroup, u = e.parentThrottleDrag, f = e.distX, d = e.distY, p = r.isDrag, g = r.prevDist, h = r.prevBeforeDist, m = r.startValue;
      if (p) {
        a && (f += a[0], d += a[1]);
        var y = t.props, x = y.parentMoveable, b = l ? 0 : y.throttleDrag || u || 0, w = n ? 0 : y.throttleDragRotate || 0, _ = 0, E = !1, C = !1, T = !1, R = !1;
        if (!n && w > 0 && (f || d)) {
          var D = y.startDragRotate || 0, N = pt(D + Xt([0, 0], [f, d]) * 180 / Math.PI, w) - D, M = d * Math.abs(Math.cos((N - 90) / 180 * Math.PI)), O = f * Math.abs(Math.cos(N / 180 * Math.PI)), k = We([O, M]);
          _ = N * Math.PI / 180, f = k * Math.cos(_), d = k * Math.sin(_);
        }
        if (!i && !n && !o) {
          var F = I(WN(t, f, d, w, !s && c || a, r), 2), $ = F[0], V = F[1];
          E = $.isSnap, C = $.isBound, T = V.isSnap, R = V.isBound;
          var L = $.offset, z = V.offset;
          f += L, d += z;
        }
        var j = Et(E1({ datas: r, distX: f, distY: d }), m), B = Et(iN({ datas: r, distX: f, distY: d }), m);
        cp(B, ye), cp(j, ye), w || (!E && !C && (B[0] = pt(B[0], b), j[0] = pt(j[0], b)), !T && !R && (B[1] = pt(B[1], b), j[1] = pt(j[1], b)));
        var Y = lt(j, m), K = lt(B, m), X = lt(K, g), H = lt(Y, h);
        r.prevDist = K, r.prevBeforeDist = Y, r.passDelta = X, r.passDist = K;
        var Q = r.left + Y[0], W = r.top + Y[1], q = r.right - Y[0], ot = r.bottom - Y[1], nt = Ec(r, "translate(".concat(B[0], "px, ").concat(B[1], "px)"), "translate(".concat(K[0], "px, ").concat(K[1], "px)"));
        if (hd(e, nt), t.state.dragInfo.dist = n ? [0, 0] : K, !(!n && !x && X.every(function(ft) {
          return !ft;
        }) && H.some(function(ft) {
          return !ft;
        }))) {
          var U = t.state, et = U.width, dt = U.height, ct = vt(t, e, A({ transform: nt, dist: K, delta: X, translate: B, beforeDist: Y, beforeDelta: H, beforeTranslate: j, left: Q, top: W, right: q, bottom: ot, width: et, height: dt, isPinch: i }, me({
            transform: nt
          }, e)));
          return !n && it(t, "onDrag", ct), ct;
        }
      }
    }
  },
  dragAfter: function(t, e) {
    var r = e.datas, n = r.deltaOffset;
    return n[0] || n[1] ? (r.deltaOffset = [0, 0], this.drag(t, A(A({}, e), { deltaOffset: n }))) : !1;
  },
  dragEnd: function(t, e) {
    var r = e.parentEvent, n = e.datas;
    if (t.state.dragInfo = null, !!n.isDrag) {
      n.isDrag = !1;
      var o = Oe(t, e, {});
      return !r && it(t, "onDragEnd", o), o;
    }
  },
  dragGroupStart: function(t, e) {
    var r, n, o = e.datas, i = e.clientX, a = e.clientY, s = this.dragStart(t, e);
    if (!s)
      return !1;
    var c = yl(t, this, "dragStart", [
      i || 0,
      a || 0
    ], e, !1, "draggable"), l = c.childEvents, u = c.eventParams, f = A(A({}, s), { targets: t.props.targets, events: u }), d = it(t, "onDragGroupStart", f);
    o.isDrag = d !== !1;
    var p = (n = (r = l[0]) === null || r === void 0 ? void 0 : r.datas.startValue) !== null && n !== void 0 ? n : [0, 0];
    return o.throttleOffset = [p[0] % 1, p[1] % 1], o.isDrag ? s : !1;
  },
  dragGroup: function(t, e) {
    var r = e.datas;
    if (r.isDrag) {
      var n = this.drag(t, A(A({}, e), { parentThrottleDrag: t.props.throttleDrag })), o = e.datas.passDelta, i = yl(t, this, "drag", o, e, !1, "draggable").eventParams;
      if (n) {
        var a = A({ targets: t.props.targets, events: i }, n);
        return it(t, "onDragGroup", a), a;
      }
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isDrag) {
      this.dragEnd(t, e);
      var o = yl(t, this, "dragEnd", [0, 0], e, !1, "draggable").eventParams;
      return it(t, "onDragGroupEnd", Oe(t, e, {
        targets: t.props.targets,
        events: o
      })), r;
    }
  },
  /**
       * @method Moveable.Draggable#request
       * @param {object} [e] - the draggable's request parameter
       * @param {number} [e.x] - x position
       * @param {number} [e.y] - y position
       * @param {number} [e.deltaX] - X number to move
       * @param {number} [e.deltaY] - Y number to move
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("draggable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 });
       * moveable.request("draggable", { x: 220, y: 100 });
       * moveable.request("draggable", { x: 240, y: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var e = {}, r = t.getRect(), n = 0, o = 0, i = !1;
    return {
      isControl: !1,
      requestStart: function(a) {
        return i = a.useSnap, { datas: e, useSnap: i };
      },
      request: function(a) {
        return "x" in a ? n = a.x - r.left : "deltaX" in a && (n += a.deltaX), "y" in a ? o = a.y - r.top : "deltaY" in a && (o += a.deltaY), { datas: e, distX: n, distY: o, useSnap: i };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0, useSnap: i };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.draggable = null, t.state.dragInfo = null;
  }
};
function W1(t, e) {
  var r = ne(t, e), n = [0, 0];
  return {
    fixedPosition: r,
    fixedDirection: e,
    fixedOffset: n
  };
}
function qN(t, e) {
  var r = t.allMatrix, n = t.is3d, o = t.width, i = t.height, a = n ? 4 : 3, s = [
    o / 2 * (1 + e[0]),
    i / 2 * (1 + e[1])
  ], c = Gt(r, s, a), l = [0, 0];
  return {
    fixedPosition: c,
    fixedDirection: e,
    fixedOffset: l
  };
}
function H1(t, e) {
  var r = t.allMatrix, n = t.is3d, o = t.width, i = t.height, a = n ? 4 : 3, s = pN(e, o, i), c = Gt(r, e, a), l = [
    o ? 0 : e[0],
    i ? 0 : e[1]
  ];
  return {
    fixedPosition: c,
    fixedDirection: s,
    fixedOffset: l
  };
}
var Dh = Td("resizable"), Eu = {
  name: "resizable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "resizable",
    "throttleResize",
    "renderDirections",
    "displayAroundControls",
    "keepRatio",
    "resizeFormat",
    "keepRatioFinally",
    "edge",
    "checkResizableError"
  ],
  events: [
    "resizeStart",
    "beforeResize",
    "resize",
    "resizeEnd",
    "resizeGroupStart",
    "beforeResizeGroup",
    "resizeGroup",
    "resizeGroupEnd"
  ],
  render: N1("resizable"),
  dragControlCondition: Dh,
  viewClassName: _d("resizable"),
  dragControlStart: function(t, e) {
    var r, n = e.inputEvent, o = e.isPinch, i = e.isGroup, a = e.parentDirection, s = e.parentGesto, c = e.datas, l = e.parentFixedDirection, u = e.parentEvent, f = ox(a, o, n, c), d = t.state, p = d.target, g = d.width, h = d.height, m = d.gestos;
    if (!f || !p || m.resizable)
      return !1;
    m.resizable = s || t.controlGesto, !o && Wn(t, e), c.datas = {}, c.direction = f, c.startOffsetWidth = g, c.startOffsetHeight = h, c.prevWidth = 0, c.prevHeight = 0, c.minSize = [0, 0], c.startWidth = d.inlineCSSWidth || d.cssWidth, c.startHeight = d.inlineCSSHeight || d.cssHeight, c.maxSize = [1 / 0, 1 / 0], i || (c.minSize = [
      d.minOffsetWidth,
      d.minOffsetHeight
    ], c.maxSize = [
      d.maxOffsetWidth,
      d.maxOffsetHeight
    ]);
    var y = t.props.transformOrigin || "% %";
    c.transformOrigin = Lt(y) ? y.split(" ") : y, c.startOffsetMatrix = d.offsetMatrix, c.startTransformOrigin = d.transformOrigin, c.isWidth = (r = e?.parentIsWidth) !== null && r !== void 0 ? r : !f[0] && !f[1] || f[0] || !f[1];
    function x(R) {
      c.ratio = R && isFinite(R) ? R : 0;
    }
    c.startPositions = He(t.state);
    function b(R) {
      var D = W1(c.startPositions, R);
      c.fixedDirection = D.fixedDirection, c.fixedPosition = D.fixedPosition, c.fixedOffset = D.fixedOffset;
    }
    function w(R) {
      var D = H1(t.state, R);
      c.fixedDirection = D.fixedDirection, c.fixedPosition = D.fixedPosition, c.fixedOffset = D.fixedOffset;
    }
    function _(R) {
      c.minSize = [
        Mt("".concat(R[0]), 0) || 0,
        Mt("".concat(R[1]), 0) || 0
      ];
    }
    function E(R) {
      var D = [
        R[0] || 1 / 0,
        R[1] || 1 / 0
      ];
      (!Oi(D[0]) || isFinite(D[0])) && (D[0] = Mt("".concat(D[0]), 0) || 1 / 0), (!Oi(D[1]) || isFinite(D[1])) && (D[1] = Mt("".concat(D[1]), 0) || 1 / 0), c.maxSize = D;
    }
    x(g / h), b(l || [-f[0], -f[1]]), c.setFixedDirection = b, c.setFixedPosition = w, c.setMin = _, c.setMax = E;
    var C = vt(t, e, {
      direction: f,
      startRatio: c.ratio,
      set: function(R) {
        var D = I(R, 2), N = D[0], M = D[1];
        c.startWidth = N, c.startHeight = M;
      },
      setMin: _,
      setMax: E,
      setRatio: x,
      setFixedDirection: b,
      setFixedPosition: w,
      setOrigin: function(R) {
        c.transformOrigin = R;
      },
      dragStart: ve.dragStart(t, new Po().dragStart([0, 0], e))
    }), T = u || it(t, "onResizeStart", C);
    return c.startFixedDirection = c.fixedDirection, c.startFixedPosition = c.fixedPosition, T !== !1 && (c.isResize = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: f
    }), c.isResize ? C : !1;
  },
  dragControl: function(t, e) {
    var r, n = e.datas, o = e.parentFlag, i = e.isPinch, a = e.parentKeepRatio, s = e.dragClient, c = e.parentDist, l = e.useSnap, u = e.isRequest, f = e.isGroup, d = e.parentEvent, p = e.resolveMatrix, g = n.isResize, h = n.transformOrigin, m = n.startWidth, y = n.startHeight, x = n.prevWidth, b = n.prevHeight, w = n.minSize, _ = n.maxSize, E = n.ratio, C = n.startOffsetWidth, T = n.startOffsetHeight, R = n.isWidth;
    if (!g)
      return;
    if (p) {
      var D = t.state.is3d, N = n.startOffsetMatrix, M = n.startTransformOrigin, O = D ? 4 : 3, k = Do(Os(e)), F = Math.sqrt(k.length);
      O !== F && (k = sr(k, F, O));
      var $ = ga(N, k, M, O), V = Hn($, C, T, O);
      n.startPositions = V, n.nextTargetMatrix = k, n.nextAllMatrix = $;
    }
    var L = Gn(t.props, "resizable"), z = L.resizeFormat, j = L.throttleResize, B = j === void 0 ? o ? 0 : 1 : j, Y = L.parentMoveable, K = L.keepRatioFinally, X = n.direction, H = X, Q = 0, W = 0;
    !X[0] && !X[1] && (H = [1, 1]);
    var q = E && (a ?? L.keepRatio) || !1;
    function ot() {
      var Vt = n.fixedDirection, Yt = ux(H, q, n, e);
      Q = Yt.distWidth, W = Yt.distHeight;
      var cr = H[0] - Vt[0] || q ? Math.max(C + Q, ye) : C, Ee = H[1] - Vt[1] || q ? Math.max(T + W, ye) : T;
      return q && C && T && (R ? Ee = cr / E : cr = Ee * E), [cr, Ee];
    }
    var nt = I(ot(), 2), U = nt[0], et = nt[1];
    d || (n.setFixedDirection(n.fixedDirection), it(t, "onBeforeResize", vt(t, e, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(Vt) {
        var Yt;
        return n.setFixedDirection(Vt), Yt = I(ot(), 2), U = Yt[0], et = Yt[1], [U, et];
      },
      setFixedPosition: function(Vt) {
        var Yt;
        return n.setFixedPosition(Vt), Yt = I(ot(), 2), U = Yt[0], et = Yt[1], [U, et];
      },
      boundingWidth: U,
      boundingHeight: et,
      setSize: function(Vt) {
        var Yt;
        Yt = I(Vt, 2), U = Yt[0], et = Yt[1];
      }
    }, !0)));
    var dt = s;
    s || (!o && i ? dt = mN(t, [0, 0]) : dt = n.fixedPosition);
    var ct = [0, 0];
    i || (ct = fk(t, U, et, X, dt, !l && u, n)), c && (!c[0] && (ct[0] = 0), !c[1] && (ct[1] = 0));
    function ft() {
      var Vt;
      z && (Vt = I(z([U, et]), 2), U = Vt[0], et = Vt[1]), U = pt(U, B), et = pt(et, B);
    }
    if (q) {
      H[0] && H[1] && ct[0] && ct[1] && (Z(ct[0]) > Z(ct[1]) ? ct[1] = 0 : ct[0] = 0);
      var ht = !ct[0] && !ct[1];
      ht && ft(), H[0] && !H[1] || ct[0] && !ct[1] || ht && R ? (U += ct[0], et = U / E) : (!H[0] && H[1] || !ct[0] && ct[1] || ht && !R) && (et += ct[1], U = et * E);
    } else
      U += ct[0], et += ct[1], U = Math.max(0, U), et = Math.max(0, et);
    r = I(Zu([U, et], w, _, q ? E : !1), 2), U = r[0], et = r[1], ft(), q && (f || K) && (R ? et = U / E : U = et * E), Q = U - C, W = et - T;
    var Ct = [Q - x, W - b];
    n.prevWidth = Q, n.prevHeight = W;
    var Rt = gN(t, U, et, dt, h, n);
    if (!(!Y && Ct.every(function(Vt) {
      return !Vt;
    }) && Rt.every(function(Vt) {
      return !Vt;
    }))) {
      var mt = ve.drag(t, va(e, t.state, Rt, !!i, !1, "draggable")), _t = mt.transform, qt = m + Q, se = y + W, oe = vt(t, e, A({ width: qt, height: se, offsetWidth: Math.round(U), offsetHeight: Math.round(et), startRatio: E, boundingWidth: U, boundingHeight: et, direction: X, dist: [Q, W], delta: Ct, isPinch: !!i, drag: mt }, ax({
        style: {
          width: "".concat(qt, "px"),
          height: "".concat(se, "px")
        },
        transform: _t
      }, mt, e)));
      return !d && it(t, "onResize", oe), oe;
    }
  },
  dragControlAfter: function(t, e) {
    var r = e.datas, n = r.isResize, o = r.startOffsetWidth, i = r.startOffsetHeight, a = r.prevWidth, s = r.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var c = t.state, l = c.width, u = c.height, f = l - (o + a), d = u - (i + s), p = Z(f) > 3, g = Z(d) > 3;
      if (p && (r.startWidth += f, r.startOffsetWidth += f, r.prevWidth += f), g && (r.startHeight += d, r.startOffsetHeight += d, r.prevHeight += d), p || g)
        return this.dragControl(t, e);
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.parentEvent;
    if (r.isResize) {
      r.isResize = !1;
      var o = Oe(t, e, {});
      return !n && it(t, "onResizeEnd", o), o;
    }
  },
  dragGroupControlCondition: Dh,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, A(A({}, e), { isGroup: !0 }));
    if (!n)
      return !1;
    var o = nr(t, "resizable", e), i = r.startOffsetWidth, a = r.startOffsetHeight;
    function s() {
      var p = r.minSize;
      o.forEach(function(g) {
        var h = g.datas, m = h.minSize, y = h.startOffsetWidth, x = h.startOffsetHeight, b = i * (y ? m[0] / y : 0), w = a * (x ? m[1] / x : 0);
        p[0] = Math.max(p[0], b), p[1] = Math.max(p[1], w);
      });
    }
    function c() {
      var p = r.maxSize;
      o.forEach(function(g) {
        var h = g.datas, m = h.maxSize, y = h.startOffsetWidth, x = h.startOffsetHeight, b = i * (y ? m[0] / y : 0), w = a * (x ? m[1] / x : 0);
        p[0] = Math.min(p[0], b), p[1] = Math.min(p[1], w);
      });
    }
    var l = Pr(t, this, "dragControlStart", e, function(p, g) {
      return Ns(t, p, r, g);
    });
    s(), c();
    var u = function(p) {
      n.setFixedDirection(p), l.forEach(function(g, h) {
        g.setFixedDirection(p), Ns(t, g.moveable, r, o[h]);
      });
    };
    r.setFixedDirection = u;
    var f = A(A({}, n), { targets: t.props.targets, events: l.map(function(p) {
      return A(A({}, p), { setMin: function(g) {
        p.setMin(g), s();
      }, setMax: function(g) {
        p.setMax(g), c();
      } });
    }), setFixedDirection: u, setMin: function(p) {
      n.setMin(p), s();
    }, setMax: function(p) {
      n.setMax(p), c();
    } }), d = it(t, "onResizeGroupStart", f);
    return r.isResize = d !== !1, r.isResize ? n : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isResize) {
      var n = Gn(t.props, "resizable");
      Oc(t, "onBeforeResize", function(p) {
        it(t, "onBeforeResizeGroup", vt(t, e, A(A({}, p), { targets: n.targets }), !0));
      });
      var o = this.dragControl(t, A(A({}, e), { isGroup: !0 }));
      if (o) {
        var i = o.boundingWidth, a = o.boundingHeight, s = o.dist, c = n.keepRatio, l = [
          i / (i - s[0]),
          a / (a - s[1])
        ], u = r.fixedPosition, f = Pr(t, this, "dragControl", e, function(p, g) {
          var h = I(he(da(t.rotation / 180 * Math.PI, 3), [
            g.datas.originalX * l[0],
            g.datas.originalY * l[1],
            1
          ], 3), 2), m = h[0], y = h[1];
          return A(A({}, g), { parentDist: null, parentScale: l, dragClient: Et(u, [m, y]), parentKeepRatio: c });
        }), d = A({ targets: n.targets, events: f }, o);
        return it(t, "onResizeGroup", d), d;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isResize) {
      this.dragControlEnd(t, e);
      var o = Pr(t, this, "dragControlEnd", e), i = Oe(t, e, {
        targets: t.props.targets,
        events: o
      });
      return it(t, "onResizeGroupEnd", i), r;
    }
  },
  /**
       * @method Moveable.Resizable#request
       * @param {Moveable.Resizable.ResizableRequestParam} e - the Resizable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("resizable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("resizable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 110, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 120, offsetHeight: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var e = {}, r = 0, n = 0, o = !1, i = t.getRect();
    return {
      isControl: !0,
      requestStart: function(a) {
        var s;
        return o = a.useSnap, {
          datas: e,
          parentDirection: a.direction || [1, 1],
          parentIsWidth: (s = a?.horizontal) !== null && s !== void 0 ? s : !0,
          useSnap: o
        };
      },
      request: function(a) {
        return "offsetWidth" in a ? r = a.offsetWidth - i.offsetWidth : "deltaWidth" in a && (r += a.deltaWidth), "offsetHeight" in a ? n = a.offsetHeight - i.offsetHeight : "deltaHeight" in a && (n += a.deltaHeight), {
          datas: e,
          parentDist: [r, n],
          parentKeepRatio: a.keepRatio,
          useSnap: o
        };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0, useSnap: o };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.resizable = null;
  }
};
function xl(t, e, r, n, o) {
  var i = t.props.groupable, a = t.state, s = a.is3d ? 4 : 3, c = e.origin, l = Gt(
    t.state.rootMatrix,
    // TO-DO #710
    lt([c[0], c[1]], i ? [0, 0] : [a.left, a.top]),
    s
  ), u = Et([o.left, o.top], l);
  e.startAbsoluteOrigin = u, e.prevDeg = Xt(u, [r, n]) / Math.PI * 180, e.defaultDeg = e.prevDeg, e.prevSnapDeg = 0, e.loop = 0, e.startDist = dr(u, [r, n]);
}
function ps(t, e, r) {
  var n = r.defaultDeg, o = r.prevDeg, i = o % 360, a = Math.floor(o / 360);
  i < 0 && (i += 360), i > t && i > 270 && t < 90 ? ++a : i < t && i < 90 && t > 270 && --a;
  var s = e * (a * 360 + t - n);
  return r.prevDeg = n + s, s;
}
function bl(t, e, r, n) {
  return ps(Xt(n.startAbsoluteOrigin, [t, e]) / Math.PI * 180, r, n);
}
function wl(t, e, r, n, o, i) {
  var a = t.props.throttleRotate, s = a === void 0 ? 0 : a, c = r.prevSnapDeg, l = 0, u = !1;
  if (i) {
    var f = uk(t, e, n, o + n);
    u = f.isSnap, l = o + f.dist;
  }
  u || (l = pt(o + n, s));
  var d = l - o;
  return r.prevSnapDeg = d, [d - c, d, l];
}
function Y1(t, e, r) {
  var n = I(e, 4), o = n[0], i = n[1], a = n[2], s = n[3];
  if (t === "none")
    return [];
  if (Tt(t))
    return t.map(function(m) {
      return Y1(m, [o, i, a, s], r)[0];
    });
  var c = I((t || "top").split("-"), 2), l = c[0], u = c[1], f = [o, i];
  l === "left" ? f = [a, o] : l === "right" ? f = [i, s] : l === "bottom" && (f = [s, a]);
  var d = [
    (f[0][0] + f[1][0]) / 2,
    (f[0][1] + f[1][1]) / 2
  ], p = rx(f, r);
  if (u) {
    var g = u === "top" || u === "left", h = l === "bottom" || l === "left";
    d = f[g && !h || !g && h ? 0 : 1];
  }
  return [[d, p]];
}
function _u(t, e) {
  if (e.isRequest)
    return e.requestAble === "rotatable";
  var r = e.inputEvent.target;
  if (Ut(r, st("rotation-control")) || t.props.rotateAroundControls && Ut(r, st("around-control")) || Ut(r, st("control")) && Ut(r, st("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Rd(n, !0).some(function(o) {
    return o ? r === o || r.contains(o) : !1;
  }) : !1;
}
var KN = `.rotation {
position: absolute;
height: 40px;
width: 1px;
transform-origin: 50% 100%;
height: calc(40px * var(--zoom));
top: auto;
left: 0;
bottom: 100%;
will-change: transform;
}
.rotation .rotation-line {
display: block;
width: 100%;
height: 100%;
transform-origin: 50% 50%;
}
.rotation .rotation-control {
border-color: #4af;
border-color: var(--moveable-color);
background:#fff;
cursor: alias;
}
:global .view-rotation-dragging, .rotatable.direction.control {
cursor: alias;
}
.rotatable.direction.control.move {
cursor: move;
}
`, ZN = {
  name: "rotatable",
  canPinch: !0,
  props: [
    "rotatable",
    "rotationPosition",
    "throttleRotate",
    "renderDirections",
    "rotationTarget",
    "rotateAroundControls",
    "edge",
    "resolveAblesWithRotatable",
    "displayAroundControls"
  ],
  events: [
    "rotateStart",
    "beforeRotate",
    "rotate",
    "rotateEnd",
    "rotateGroupStart",
    "beforeRotateGroup",
    "rotateGroup",
    "rotateGroupEnd"
  ],
  css: [KN],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? st("view-rotation-dragging") : "";
  },
  render: function(t, e) {
    var r = Gn(t.props, "rotatable"), n = r.rotatable, o = r.rotationPosition, i = r.zoom, a = r.renderDirections, s = r.rotateAroundControls, c = r.resolveAblesWithRotatable, l = t.getState(), u = l.renderPoses, f = l.direction;
    if (!n)
      return null;
    var d = Y1(o, u, f), p = [];
    if (d.forEach(function(y, x) {
      var b = I(y, 2), w = b[0], _ = b[1];
      p.push(e.createElement(
        "div",
        { key: "rotation".concat(x), className: st("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(w[0], "px, ").concat(w[1], "px) rotate(").concat(_, "rad)")
        } },
        e.createElement("div", { className: st("line rotation-line"), style: {
          transform: "scaleX(".concat(i, ")")
        } }),
        e.createElement("div", { className: st("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(i, ")")
        } })
      ));
    }), a) {
      var g = Ge(c || {}), h = {};
      g.forEach(function(y) {
        c[y].forEach(function(x) {
          h[x] = y;
        });
      });
      var m = [];
      Tt(a) && (m = a.map(function(y) {
        var x = h[y];
        return {
          data: x ? { resolve: x } : {},
          classNames: x ? ["move"] : [],
          dir: y
        };
      })), p.push.apply(p, tt([], I(M1(t, "rotatable", m, e)), !1));
    }
    return s && p.push.apply(p, tt([], I(A1(t, e)), !1)), p;
  },
  dragControlCondition: _u,
  dragControlStart: function(t, e) {
    var r, n, o = e.datas, i = e.clientX, a = e.clientY, s = e.parentRotate, c = e.parentFlag, l = e.isPinch, u = e.isRequest, f = t.state, d = f.target, p = f.left, g = f.top, h = f.direction, m = f.beforeDirection, y = f.targetTransform, x = f.moveableClientRect, b = f.offsetMatrix, w = f.targetMatrix, _ = f.allMatrix, E = f.width, C = f.height;
    if (!u && !d)
      return !1;
    var T = t.getRect();
    o.rect = T, o.transform = y, o.left = p, o.top = g;
    var R = function(H) {
      var Q = H1(t.state, H);
      o.fixedDirection = Q.fixedDirection, o.fixedOffset = Q.fixedOffset, o.fixedPosition = Q.fixedPosition, B && B.setFixedPosition(H);
    }, D = function(H) {
      var Q = qN(t.state, H);
      o.fixedDirection = Q.fixedDirection, o.fixedOffset = Q.fixedOffset, o.fixedPosition = Q.fixedPosition, B && B.setFixedDirection(H);
    }, N = i, M = a;
    if (u || l || c) {
      var O = s || 0;
      o.beforeInfo = {
        origin: T.beforeOrigin,
        prevDeg: O,
        defaultDeg: O,
        prevSnapDeg: 0,
        startDist: 0
      }, o.afterInfo = A(A({}, o.beforeInfo), { origin: T.origin }), o.absoluteInfo = A(A({}, o.beforeInfo), { origin: T.origin, startValue: O });
    } else {
      var k = (n = e.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (k) {
        var F = k.getAttribute("data-direction") || "", $ = rN[F];
        if ($) {
          o.isControl = !0, o.isAroundControl = Ut(k, st("around-control")), o.controlDirection = $;
          var V = k.getAttribute("data-resolve");
          V && (o.resolveAble = V);
          var L = Tk(f.rootMatrix, f.renderPoses, x);
          r = I(ne(L, $), 2), N = r[0], M = r[1];
        }
      }
      o.beforeInfo = { origin: T.beforeOrigin }, o.afterInfo = { origin: T.origin }, o.absoluteInfo = {
        origin: T.origin,
        startValue: T.rotation
      };
      var z = R;
      R = function(H) {
        var Q = f.is3d ? 4 : 3, W = I(Et(c1(w, Q), H), 2), q = W[0], ot = W[1], nt = he(b, Bn([q, ot], Q)), U = he(_, Bn([H[0], H[1]], Q));
        z(H);
        var et = f.posDelta;
        o.beforeInfo.origin = lt(nt, et), o.afterInfo.origin = lt(U, et), o.absoluteInfo.origin = lt(U, et), xl(t, o.beforeInfo, N, M, x), xl(t, o.afterInfo, N, M, x), xl(t, o.absoluteInfo, N, M, x);
      }, D = function(H) {
        var Q = ne([
          [0, 0],
          [E, 0],
          [0, C],
          [E, C]
        ], H);
        R(Q);
      };
    }
    o.startClientX = N, o.startClientY = M, o.direction = h, o.beforeDirection = m, o.startValue = 0, o.datas = {}, Tc(t, e, "rotate");
    var j = !1, B = !1;
    if (o.isControl && o.resolveAble) {
      var Y = o.resolveAble;
      Y === "resizable" && (B = Eu.dragControlStart(t, A(A({}, new Po("resizable").dragStart([0, 0], e)), { parentPosition: o.controlPosition, parentFixedPosition: o.fixedPosition })));
    }
    B || (j = ve.dragStart(t, new Po().dragStart([0, 0], e))), R(Rk(t));
    var K = vt(t, e, A(A({ set: function(H) {
      o.startValue = H * Math.PI / 180;
    }, setFixedDirection: D, setFixedPosition: R }, _c(t, e)), { dragStart: j, resizeStart: B })), X = it(t, "onRotateStart", K);
    return o.isRotate = X !== !1, f.snapRenderInfo = {
      request: e.isRequest
    }, o.isRotate ? K : !1;
  },
  dragControl: function(t, e) {
    var r, n, o, i = e.datas, a = e.clientDistX, s = e.clientDistY, c = e.parentRotate, l = e.parentFlag, u = e.isPinch, f = e.groupDelta, d = e.resolveMatrix, p = i.beforeDirection, g = i.beforeInfo, h = i.afterInfo, m = i.absoluteInfo, y = i.isRotate, x = i.startValue, b = i.rect, w = i.startClientX, _ = i.startClientY;
    if (y) {
      Cc(t, e, "rotate");
      var E = oN(e), C = p * E, T = t.props.parentMoveable, R = 0, D, N, M = 0, O, k, F = 0, $, V, L = 180 / Math.PI * x, z = m.startValue, j = !1, B = w + a, Y = _ + s;
      if (!l && "parentDist" in e) {
        var K = e.parentDist;
        D = K, O = K, $ = K;
      } else u || l ? (D = ps(c, p, g), O = ps(c, C, h), $ = ps(c, C, m)) : (D = bl(B, Y, p, g), O = bl(B, Y, C, h), $ = bl(B, Y, C, m), j = !0);
      if (N = L + D, k = L + O, V = z + $, it(t, "onBeforeRotate", vt(t, e, {
        beforeRotation: N,
        rotation: k,
        absoluteRotation: V,
        setRotation: function(dt) {
          O = dt - L, D = O, $ = O;
        }
      }, !0)), r = I(wl(t, b, g, D, L, j), 3), R = r[0], D = r[1], N = r[2], n = I(wl(t, b, h, O, L, j), 3), M = n[0], O = n[1], k = n[2], o = I(wl(t, b, m, $, z, j), 3), F = o[0], $ = o[1], V = o[2], !(!F && !M && !R && !T && !d)) {
        var X = Ec(i, "rotate(".concat(k, "deg)"), "rotate(".concat(O, "deg)"));
        d && (i.fixedPosition = vd(t, i.targetAllTransform, i.fixedDirection, i.fixedOffset, i));
        var H = vN(t, O, i), Q = lt(Et(f || [0, 0], H), i.prevInverseDist || [0, 0]);
        i.prevInverseDist = H, i.requestValue = null;
        var W = T1(t, X, Q, u, e), q = W, ot = dr([B, Y], m.startAbsoluteOrigin) - m.startDist, nt = void 0;
        if (i.resolveAble === "resizable") {
          var U = Eu.dragControl(t, A(A({}, va(e, t.state, [e.deltaX, e.deltaY], !!u, !1, "resizable")), { resolveMatrix: !0, parentDistance: ot }));
          U && (nt = U, q = ax(q, U, e));
        }
        var et = vt(t, e, A(A({ delta: M, dist: O, rotate: k, rotation: k, beforeDist: D, beforeDelta: R, beforeRotate: N, beforeRotation: N, absoluteDist: $, absoluteDelta: F, absoluteRotate: V, absoluteRotation: V, isPinch: !!u, resize: nt }, W), q));
        return it(t, "onRotate", et), et;
      }
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var n = Oe(t, e, {});
      return it(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: _u,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = t.state, o = n.left, i = n.top, a = n.beforeOrigin, s = this.dragControlStart(t, e);
    if (!s)
      return !1;
    s.set(r.beforeDirection * t.rotation);
    var c = Pr(t, this, "dragControlStart", e, function(f, d) {
      var p = f.state, g = p.left, h = p.top, m = p.beforeOrigin, y = Et(lt([g, h], [o, i]), lt(m, a));
      return d.datas.startGroupClient = y, d.datas.groupClient = y, A(A({}, d), { parentRotate: 0 });
    }), l = A(A({}, s), { targets: t.props.targets, events: c }), u = it(t, "onRotateGroupStart", l);
    return r.isRotate = u !== !1, r.isRotate ? s : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      Oc(t, "onBeforeRotate", function(l) {
        it(t, "onBeforeRotateGroup", vt(t, e, A(A({}, l), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var o = r.beforeDirection, i = n.beforeDist, a = i / 180 * Math.PI, s = Pr(t, this, "dragControl", e, function(l, u) {
          var f = u.datas.startGroupClient, d = I(u.datas.groupClient, 2), p = d[0], g = d[1], h = I(fa(f, a * o), 2), m = h[0], y = h[1], x = [m - p, y - g];
          return u.datas.groupClient = [m, y], A(A({}, u), { parentRotate: i, groupDelta: x });
        });
        t.rotation = o * n.beforeRotation;
        var c = A({ targets: t.props.targets, events: s, set: function(l) {
          t.rotation = l;
        }, setGroupRotation: function(l) {
          t.rotation = l;
        } }, n);
        return it(t, "onRotateGroup", c), c;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, e);
      var o = Pr(t, this, "dragControlEnd", e), i = Oe(t, e, {
        targets: t.props.targets,
        events: o
      });
      return it(t, "onRotateGroupEnd", i), r;
    }
  },
  /**
       * @method Moveable.Rotatable#request
       * @param {object} [e] - the Resizable's request parameter
       * @param {number} [e.deltaRotate=0] -  delta number of rotation
       * @param {number} [e.rotate=0] - absolute number of moveable's rotation
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("rotatable", { deltaRotate: 10 }, true);
       *
       * * moveable.request("rotatable", { rotate: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("rotatable");
       *
       * // request
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       *
       * requester.request({ rotate: 10 });
       * requester.request({ rotate: 20 });
       * requester.request({ rotate: 30 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var e = {}, r = 0, n = t.getRotation();
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: e };
      },
      request: function(o) {
        return "deltaRotate" in o ? r += o.deltaRotate : "rotate" in o && (r = o.rotate - n), { datas: e, parentDist: r };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0 };
      }
    };
  }
};
function JN(t, e) {
  var r, n = t.direction, o = t.classNames, i = t.size, a = t.pos, s = t.zoom, c = t.key, l = n === "horizontal", u = l ? "Y" : "X";
  return e.createElement("div", {
    key: c,
    className: o.join(" "),
    style: (r = {}, r[l ? "width" : "height"] = "".concat(i), r.transform = "translate(".concat(a[0], ", ").concat(a[1], ") translate").concat(u, "(-50%) scale").concat(u, "(").concat(s, ")"), r)
  });
}
function wd(t, e) {
  return JN(A(A({}, t), { classNames: tt([
    st("line", "guideline", t.direction)
  ], I(t.classNames), !1).filter(function(r) {
    return r;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(r) {
    return "".concat(pt(r, 0.1), "px");
  }) }), e);
}
function Mh(t, e, r, n, o, i, a, s) {
  var c = t.props.zoom;
  return r.map(function(l, u) {
    var f = l.type, d = l.pos, p = [0, 0];
    return p[a] = n, p[a ? 0 : 1] = -o + d, wd({
      key: "".concat(e, "TargetGuideline").concat(u),
      classNames: [st("target", "bold", f)],
      posValue: p,
      sizeValue: i,
      zoom: c,
      direction: e
    }, s);
  });
}
function Ph(t, e, r, n, o, i) {
  var a = t.props, s = a.zoom, c = a.isDisplayInnerSnapDigit, l = e === "horizontal" ? cn : ln, u = o[l.start], f = o[l.end];
  return r.filter(function(d) {
    var p = d.hide, g = d.elementRect;
    if (p)
      return !1;
    if (c && g) {
      var h = g.rect;
      if (h[l.start] <= u && f <= h[l.end])
        return !1;
    }
    return !0;
  }).map(function(d, p) {
    var g = d.pos, h = d.size, m = d.element, y = d.className, x = [
      -n[0] + g[0],
      -n[1] + g[1]
    ];
    return wd({
      key: "".concat(e, "-default-guideline-").concat(p),
      classNames: m ? [st("bold"), y] : [st("normal"), y],
      direction: e,
      posValue: x,
      sizeValue: h,
      zoom: s
    }, i);
  });
}
function vi(t, e, r, n, o, i, a, s) {
  var c, l = t.props, u = l.snapDigit, f = u === void 0 ? 0 : u, d = l.isDisplaySnapDigit, p = d === void 0 ? !0 : d, g = l.snapDistFormat, h = g === void 0 ? function(_, E) {
    return _;
  } : g, m = l.zoom, y = e === "horizontal" ? "X" : "Y", x = e === "vertical" ? "height" : "width", b = Math.abs(o), w = p ? parseFloat(b.toFixed(f)) : 0;
  return s.createElement(
    "div",
    { key: "".concat(e, "-").concat(r, "-guideline-").concat(n), className: st("guideline-group", e), style: (c = {
      left: "".concat(i[0], "px"),
      top: "".concat(i[1], "px")
    }, c[x] = "".concat(b, "px"), c) },
    wd({
      direction: e,
      classNames: [st(r), a],
      size: "100%",
      posValue: [0, 0],
      sizeValue: b,
      zoom: m
    }, s),
    s.createElement("div", { className: st("size-value", "gap"), style: {
      transform: "translate".concat(y, "(-50%) scale(").concat(m, ")")
    } }, w > 0 ? h(w, e) : "")
  );
}
function QN(t, e, r, n) {
  var o = t === "vertical" ? 0 : 1, i = t === "vertical" ? 1 : 0, a = o ? cn : ln, s = r[a.start], c = r[a.end];
  return sx(e, function(l) {
    return l.pos[o];
  }).map(function(l) {
    var u = [], f = [], d = [];
    return l.forEach(function(p) {
      var g, h, m = p.element, y = p.elementRect.rect;
      if (y[a.end] < s)
        u.push(p);
      else if (c < y[a.start])
        f.push(p);
      else if (y[a.start] <= s && c <= y[a.end] && n) {
        var x = p.pos, b = { element: m, rect: A(A({}, y), (g = {}, g[a.end] = y[a.start], g)) }, w = { element: m, rect: A(A({}, y), (h = {}, h[a.start] = y[a.end], h)) }, _ = [0, 0], E = [0, 0];
        _[o] = x[o], _[i] = x[i], E[o] = x[o], E[i] = x[i] + p.size, u.push({
          type: t,
          pos: _,
          size: 0,
          elementRect: b,
          direction: "",
          elementDirection: "end"
        }), f.push({
          type: t,
          pos: E,
          size: 0,
          elementRect: w,
          direction: "",
          elementDirection: "start"
        });
      }
    }), u.sort(function(p, g) {
      return g.pos[i] - p.pos[i];
    }), f.sort(function(p, g) {
      return p.pos[i] - g.pos[i];
    }), {
      total: l,
      start: u,
      end: f,
      inner: d
    };
  });
}
function tk(t, e, r, n, o) {
  var i = t.props.isDisplayInnerSnapDigit, a = [];
  return ["vertical", "horizontal"].forEach(function(s) {
    var c = e.filter(function(m) {
      return m.type === s;
    }), l = s === "vertical" ? 1 : 0, u = l ? 0 : 1, f = QN(s, c, n, i), d = l ? ln : cn, p = l ? cn : ln, g = n[d.start], h = n[d.end];
    f.forEach(function(m) {
      var y = m.total, x = m.start, b = m.end, w = m.inner, _ = r[u] + y[0].pos[u] - n[p.start], E = n;
      x.forEach(function(C) {
        var T = C.elementRect.rect, R = E[d.start] - T[d.end];
        if (R > 0) {
          var D = [0, 0];
          D[l] = r[l] + E[d.start] - g - R, D[u] = _, a.push(vi(t, s, "dashed", a.length, R, D, C.className, o));
        }
        E = T;
      }), E = n, b.forEach(function(C) {
        var T = C.elementRect.rect, R = T[d.start] - E[d.end];
        if (R > 0) {
          var D = [0, 0];
          D[l] = r[l] + E[d.end] - g, D[u] = _, a.push(vi(t, s, "dashed", a.length, R, D, C.className, o));
        }
        E = T;
      }), w.forEach(function(C) {
        var T = C.elementRect.rect, R = g - T[d.start], D = T[d.end] - h, N = [0, 0], M = [0, 0];
        N[l] = r[l] - R, N[u] = _, M[l] = r[l] + h - g, M[u] = _, a.push(vi(t, s, "dashed", a.length, R, N, C.className, o)), a.push(vi(t, s, "dashed", a.length, D, M, C.className, o));
      });
    });
  }), a;
}
function ek(t, e, r, n, o) {
  var i = [];
  return ["horizontal", "vertical"].forEach(function(a) {
    var s = e.filter(function(m) {
      return m.type === a;
    }).slice(0, 1), c = a === "vertical" ? 0 : 1, l = c ? 0 : 1, u = c ? ln : cn, f = c ? cn : ln, d = n[u.start], p = n[u.end], g = n[f.start], h = n[f.end];
    s.forEach(function(m) {
      var y = m.gap, x = m.gapRects, b = Math.max.apply(Math, tt([g], I(x.map(function(E) {
        var C = E.rect;
        return C[f.start];
      })), !1)), w = Math.min.apply(Math, tt([h], I(x.map(function(E) {
        var C = E.rect;
        return C[f.end];
      })), !1)), _ = (b + w) / 2;
      b === w || _ === (g + h) / 2 || x.forEach(function(E) {
        var C = E.rect, T = E.className, R = [r[0], r[1]];
        if (C[u.end] < d)
          R[c] += C[u.end] - d;
        else if (p < C[u.start])
          R[c] += C[u.start] - d - y;
        else
          return;
        R[l] += _ - g, i.push(vi(t, c ? "vertical" : "horizontal", "gap", i.length, y, R, T, o));
      });
    });
  }), i;
}
function Tu(t) {
  var e, r, n = t.state, o = n.containerClientRect, i = n.hasFixed, a = o.overflow, s = o.scrollHeight, c = o.scrollWidth, l = o.clientHeight, u = o.clientWidth, f = o.clientLeft, d = o.clientTop, p = t.props, g = p.snapGap, h = g === void 0 ? !0 : g, m = p.verticalGuidelines, y = p.horizontalGuidelines, x = p.snapThreshold, b = x === void 0 ? 5 : x, w = p.maxSnapElementGuidelineDistance, _ = w === void 0 ? 1 / 0 : w, E = p.isDisplayGridGuidelines, C = Ve(He(t.state)), T = C.top, R = C.left, D = C.bottom, N = C.right, M = { top: T, left: R, bottom: D, right: N, center: (R + N) / 2, middle: (T + D) / 2 }, O = ik(t), k = tt([], I(O), !1), F = ((r = (e = n.snapThresholdInfo) === null || e === void 0 ? void 0 : e.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(z) {
    return z * b;
  });
  h && k.push.apply(k, tt([], I(rk(t, M, F)), !1));
  var $ = A({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (k.push.apply(k, tt([], I(ok(t, a ? c : u, a ? s : l, f, d, $, E)), !1)), i) {
    var V = o.left, L = o.top;
    $.left += V, $.top += L, $.right += V, $.bottom += L;
  }
  return k.push.apply(k, tt([], I(X1(y || !1, m || !1, a ? c : u, a ? s : l, f, d, $)), !1)), k = k.filter(function(z) {
    var j = z.element, B = z.elementRect, Y = z.type;
    if (!j || !B)
      return !0;
    var K = B.rect;
    return U1(M, K, Y, _);
  }), k;
}
function rk(t, e, r) {
  var n = t.props, o = n.maxSnapElementGuidelineDistance, i = o === void 0 ? 1 / 0 : o, a = n.maxSnapElementGapDistance, s = a === void 0 ? 1 / 0 : a, c = t.state.elementRects, l = [];
  return [
    ["vertical", cn, ln],
    ["horizontal", ln, cn]
  ].forEach(function(u) {
    var f = I(u, 3), d = f[0], p = f[1], g = f[2], h = e[p.start], m = e[p.end], y = e[p.center], x = e[g.start], b = e[g.end], w = {
      left: r[0],
      top: r[1]
    };
    function _(T) {
      var R = T.rect, D = w[p.start];
      return R[p.end] < h + D ? h - R[p.end] : m - D < R[p.start] ? R[p.start] - m : -1;
    }
    var E = c.filter(function(T) {
      var R = T.rect;
      return R[g.start] > b || R[g.end] < x ? !1 : _(T) > 0;
    }).sort(function(T, R) {
      return _(T) - _(R);
    }), C = [];
    E.forEach(function(T) {
      E.forEach(function(R) {
        if (T !== R) {
          var D = T.rect, N = R.rect, M = D[g.start], O = D[g.end], k = N[g.start], F = N[g.end];
          M > F || k > O || C.push([T, R]);
        }
      });
    }), C.forEach(function(T) {
      var R = I(T, 2), D = R[0], N = R[1], M = D.rect, O = N.rect, k = M[p.start], F = M[p.end], $ = O[p.start], V = O[p.end], L = w[p.start], z = 0, j = 0, B = !1, Y = !1, K = !1;
      if (F <= h && m <= $) {
        if (Y = !0, z = ($ - F - (m - h)) / 2, j = F + z + (m - h) / 2, Z(j - y) > L)
          return;
      } else if (F < $ && V < h + L) {
        if (B = !0, z = $ - F, j = V + z, Z(j - h) > L)
          return;
      } else if (F < $ && m - L < k) {
        if (K = !0, z = $ - F, j = k - z, Z(j - m) > L)
          return;
      } else
        return;
      z && U1(e, O, d, i) && (z > s || l.push({
        type: d,
        pos: d === "vertical" ? [j, 0] : [0, j],
        element: N.element,
        size: 0,
        className: N.className,
        isStart: B,
        isCenter: Y,
        isEnd: K,
        gap: z,
        hide: !0,
        gapRects: [D, N],
        direction: "",
        elementDirection: ""
      }));
    });
  }), l;
}
function nk(t, e, r, n) {
  var o, i, a = t.props, s = t.state, c = a.snapGridAll, l = a.snapGridWidth, u = l === void 0 ? 0 : l, f = a.snapGridHeight, d = f === void 0 ? 0 : f, p = s.snapRenderInfo, g = p && (((o = p.direction) === null || o === void 0 ? void 0 : o[0]) || ((i = p.direction) === null || i === void 0 ? void 0 : i[1])), h = t.moveables;
  if (c && h && g && (u || d)) {
    if (s.snapThresholdInfo)
      return;
    s.snapThresholdInfo = {
      multiples: [1, 1],
      offset: [0, 0]
    };
    var m = t.getRect(), y = m.children, x = p.direction;
    if (y) {
      var b = x.map(function(_, E) {
        var C = E === 0 ? {
          snapSize: u,
          posName: "left",
          sizeName: "width",
          clientOffset: n.left - e
        } : {
          snapSize: d,
          posName: "top",
          sizeName: "height",
          clientOffset: n.top - r
        }, T = C.snapSize, R = C.posName, D = C.sizeName, N = C.clientOffset;
        if (!T)
          return {
            dir: _,
            multiple: 1,
            snapSize: T,
            snapOffset: 0
          };
        var M = m[D], O = m[R], k = Sw(y.map(function(B) {
          return [
            B[R] - O,
            B[D],
            M - B[D] - B[R] + O
          ];
        })).filter(function(B) {
          return B;
        }).sort(function(B, Y) {
          return B - Y;
        }), F = k[0], $ = k.map(function(B) {
          return pt(B / F, 0.1) * T;
        }), V = 1, L = pt(M / F, 0.1);
        for (V = 1; V <= 10 && !$.every(function(B) {
          return B * V % 1 === 0;
        }); ++V)
          ;
        var z = (-_ + 1) / 2, j = yo(O - N, O - N + M, z, 1 - z);
        return {
          multiple: L * V,
          dir: _,
          snapSize: T,
          snapOffset: Math.round(j / T)
        };
      }), w = b.map(function(_) {
        return _.multiple || 1;
      });
      s.snapThresholdInfo.multiples = w, s.snapThresholdInfo.offset = b.map(function(_) {
        return _.snapOffset;
      }), b.forEach(function(_, E) {
        _.snapSize;
      });
    }
  } else
    s.snapThresholdInfo = null;
}
function ok(t, e, r, n, o, i, a) {
  n === void 0 && (n = 0), o === void 0 && (o = 0);
  var s = t.props, c = t.state, l = s.snapGridWidth, u = l === void 0 ? 0 : l, f = s.snapGridHeight, d = f === void 0 ? 0 : f, p = [], g = i.left, h = i.top, m = [0, 0];
  nk(t, n, o, i);
  var y = c.snapThresholdInfo, x = u, b = d;
  if (y && (u *= y.multiples[0] || 1, d *= y.multiples[1] || 1, m = y.offset), d) {
    for (var w = function(E) {
      p.push({
        type: "horizontal",
        pos: [
          g,
          pt(m[1] * b + E - o + h, 0.1)
        ],
        className: st("grid-guideline"),
        size: e,
        hide: !a,
        direction: "",
        grid: !0
      });
    }, _ = 0; _ <= r * 2; _ += d)
      w(_);
    for (var _ = -d; _ >= -r; _ -= d)
      w(_);
  }
  if (u) {
    for (var w = function(C) {
      p.push({
        type: "vertical",
        pos: [
          pt(m[0] * x + C - n + g, 0.1),
          h
        ],
        className: st("grid-guideline"),
        size: r,
        hide: !a,
        direction: "",
        grid: !0
      });
    }, _ = 0; _ <= e * 2; _ += u)
      w(_);
    for (var _ = -u; _ >= -e; _ -= u)
      w(_);
  }
  return p;
}
function U1(t, e, r, n) {
  return r === "horizontal" ? Z(t.right - e.left) <= n || Z(t.left - e.right) <= n || t.left <= e.right && e.left <= t.right : r === "vertical" ? Z(t.bottom - e.top) <= n || Z(t.top - e.bottom) <= n || t.top <= e.bottom && e.top <= t.bottom : !0;
}
function ik(t) {
  var e = t.state, r = t.props.elementGuidelines, n = r === void 0 ? [] : r;
  if (!n.length)
    return e.elementRects = [], [];
  var o = (e.elementRects || []).filter(function(d) {
    return !d.refresh;
  }), i = n.map(function(d) {
    return $t(d) && "element" in d ? A(A({}, d), { element: gr(d.element, !0) }) : {
      element: gr(d, !0)
    };
  }).filter(function(d) {
    return d.element;
  }), a = io(o.map(function(d) {
    return d.element;
  }), i.map(function(d) {
    return d.element;
  })), s = a.maintained, c = a.added, l = [];
  s.forEach(function(d) {
    var p = I(d, 2), g = p[0], h = p[1];
    l[h] = o[g];
  }), ak(t, c.map(function(d) {
    return i[d];
  })).map(function(d, p) {
    l[c[p]] = d;
  }), e.elementRects = l;
  var u = md(t.props.elementSnapDirections), f = [];
  return l.forEach(function(d) {
    var p = d.element, g = d.top, h = g === void 0 ? u.top : g, m = d.left, y = m === void 0 ? u.left : m, x = d.right, b = x === void 0 ? u.right : x, w = d.bottom, _ = w === void 0 ? u.bottom : w, E = d.center, C = E === void 0 ? u.center : E, T = d.middle, R = T === void 0 ? u.middle : T, D = d.className, N = d.rect, M = yd({
      top: h,
      right: b,
      left: y,
      bottom: _,
      center: C,
      middle: R
    }, N), O = M.horizontal, k = M.vertical, F = M.horizontalNames, $ = M.verticalNames, V = N.top, L = N.left, z = N.right - L, j = N.bottom - V, B = [z, j];
    k.forEach(function(Y, K) {
      f.push({
        type: "vertical",
        element: p,
        pos: [
          pt(Y, 0.1),
          V
        ],
        size: j,
        sizes: B,
        className: D,
        elementRect: d,
        elementDirection: wh[$[K]] || $[K],
        direction: ""
      });
    }), O.forEach(function(Y, K) {
      f.push({
        type: "horizontal",
        element: p,
        pos: [
          L,
          pt(Y, 0.1)
        ],
        size: z,
        sizes: B,
        className: D,
        elementRect: d,
        elementDirection: wh[F[K]] || F[K],
        direction: ""
      });
    });
  }), f;
}
function Oh(t, e) {
  return t ? t.map(function(r) {
    var n = $t(r) ? r : { pos: r }, o = n.pos;
    return Oi(o) ? n : A(A({}, n), { pos: Mt(o, e) });
  }) : [];
}
function X1(t, e, r, n, o, i, a) {
  o === void 0 && (o = 0), i === void 0 && (i = 0), a === void 0 && (a = { left: 0, top: 0, right: 0, bottom: 0 });
  var s = [], c = a.left, l = a.top, u = a.bottom, f = a.right, d = r + f - c, p = n + u - l;
  return Oh(t, p).forEach(function(g) {
    s.push({
      type: "horizontal",
      pos: [
        c,
        pt(g.pos - i + l, 0.1)
      ],
      size: d,
      className: g.className,
      direction: ""
    });
  }), Oh(e, d).forEach(function(g) {
    s.push({
      type: "vertical",
      pos: [
        pt(g.pos - o + c, 0.1),
        l
      ],
      size: p,
      className: g.className,
      direction: ""
    });
  }), s;
}
function ak(t, e) {
  if (!e.length)
    return [];
  var r = t.props.groupable, n = t.state, o = n.containerClientRect, i = n.rootMatrix, a = n.is3d, s = n.offsetDelta, c = a ? 4 : 3, l = I(PN(i, o, c), 2), u = l[0], f = l[1], d = r ? 0 : s[0], p = r ? 0 : s[1];
  return e.map(function(g) {
    var h = g.element.getBoundingClientRect(), m = h.left - u - d, y = h.top - f - p, x = y + h.height, b = m + h.width, w = I(ko(i, [m, y], c), 2), _ = w[0], E = w[1], C = I(ko(i, [b, x], c), 2), T = C[0], R = C[1];
    return A(A({}, g), { rect: {
      left: _,
      right: T,
      top: E,
      bottom: R,
      center: (_ + T) / 2,
      middle: (E + R) / 2
    } });
  });
}
function Ja(t) {
  var e = t.state, r = e.container, n = t.props.snapContainer || r;
  if (e.snapContainer === n && e.guidelines && e.guidelines.length)
    return !1;
  var o = e.containerClientRect, i = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  if (r !== n) {
    var a = gr(n, !0);
    if (a) {
      var s = Ti(a), c = Fh(e, [
        s.left - o.left,
        s.top - o.top
      ]), l = Fh(e, [
        s.right - o.right,
        s.bottom - o.bottom
      ]);
      i.left = pt(c[0], 1e-5), i.top = pt(c[1], 1e-5), i.right = pt(l[0], 1e-5), i.bottom = pt(l[1], 1e-5);
    }
  }
  return e.snapContainer = n, e.snapOffset = i, e.guidelines = Tu(t), e.enableSnap = !0, !0;
}
function q1(t, e, r, n, o, i) {
  var a = Hn(t, e, r, i ? 4 : 3), s = ne(a, n);
  return Cd(a, lt(o, s));
}
function Nh(t) {
  return t ? t / Z(t) : 0;
}
function sk(t, e, r, n, o, i) {
  var a = i.fixedDirection, s = AN(r, a, n), c = bd(t, e, r, n), l = tt(tt([], I(YN(t, e, s, n, o, i)), !1), I(V1(t, c, i)), !1), u = ks(l, 0), f = ks(l, 1);
  return {
    width: {
      isBound: u.isBound,
      offset: u.offset[0]
    },
    height: {
      isBound: f.isBound,
      offset: f.offset[1]
    }
  };
}
function ck(t, e, r, n, o, i, a, s, c) {
  var l = ne(e, a), u = Mc(t, s, {
    vertical: [l[0]],
    horizontal: [l[1]]
  }), f = u.horizontal.offset, d = u.vertical.offset;
  if (pt(d, xu) || pt(f, xu)) {
    var p = I(_r({
      datas: c,
      distX: -d,
      distY: -f
    }), 2), g = p[0], h = p[1], m = Math.min(o || 1 / 0, r + a[0] * g), y = Math.min(i || 1 / 0, n + a[1] * h);
    return [m - r, y - n];
  }
  return [0, 0];
}
function K1(t, e, r, n, o, i, a, s) {
  for (var c = He(t.state), l = t.props.keepRatio, u = 0, f = 0, d = 0; d < 2; ++d) {
    var p = e(u, f), g = sk(t, p, o, l, a, s), h = g.width, m = g.height, y = h.isBound, x = m.isBound, b = h.offset, w = m.offset;
    if (d === 1 && (y || (b = 0), x || (w = 0)), d === 0 && a && !y && !x)
      return [0, 0];
    if (l) {
      var _ = Z(b) * (r ? 1 / r : 1), E = Z(w) * (n ? 1 / n : 1), C = y && x ? _ < E : x || !y && _ < E;
      C ? b = r * w / n : w = n * b / r;
    }
    u += b, f += w;
  }
  if (!l && o[0] && o[1]) {
    var T = XN(t, c, o, i, s), R = T.maxWidth, D = T.maxHeight, N = I(ck(t, e(u, f).map(function(k) {
      return k.map(function(F) {
        return pt(F, xu);
      });
    }), r + u, n + f, R, D, o, a, s), 2), b = N[0], w = N[1];
    u += b, f += w;
  }
  return [u, f];
}
function Ei(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function lk(t, e) {
  e = Ei(e);
  var r = Math.floor(t / 360), n = r * 360 + 360 - e, o = r * 360 + e;
  return Z(t - n) < Z(t - o) ? n : o;
}
function Sl(t, e) {
  t = Ei(t), e = Ei(e);
  var r = Ei(t - e);
  return Math.min(r, 360 - r);
}
function uk(t, e, r, n) {
  var o, i = t.props, a = (o = i[j1]) !== null && o !== void 0 ? o : 5, s = i[I1];
  if (Uo(t, "rotatable")) {
    var c = e.pos1, l = e.pos2, u = e.pos3, f = e.pos4, d = e.origin, p = r * Math.PI / 180, g = [c, l, u, f].map(function(w) {
      return lt(w, d);
    }), h = g.map(function(w) {
      return fa(w, p);
    }), m = tt(tt([], I(TN(t, g, h, d, r)), !1), I(zN(t, g, h, d, r)), !1);
    m.sort(function(w, _) {
      return Z(w - r) - Z(_ - r);
    });
    var y = m.length > 0;
    if (y)
      return {
        isSnap: y,
        dist: y ? m[0] : r
      };
  }
  if (s?.length && a) {
    var x = s.slice().sort(function(w, _) {
      return Sl(w, n) - Sl(_, n);
    }), b = x[0];
    if (Sl(b, n) <= a)
      return {
        isSnap: !0,
        dist: r + lk(n, b) - n
      };
  }
  return {
    isSnap: !1,
    dist: r
  };
}
function fk(t, e, r, n, o, i, a) {
  if (!Uo(t, "resizable"))
    return [0, 0];
  var s = a.fixedDirection, c = a.nextAllMatrix, l = t.state, u = l.allMatrix, f = l.is3d;
  return K1(t, function(d, p) {
    return q1(c || u, e + d, r + p, s, o, f);
  }, e, r, n, o, i, a);
}
function dk(t, e, r, n, o) {
  if (!Uo(t, "scalable"))
    return [0, 0];
  var i = o.startOffsetWidth, a = o.startOffsetHeight, s = o.fixedPosition, c = o.fixedDirection, l = o.is3d, u = K1(t, function(f, d) {
    return q1(fN(o, Et(e, [f / i, d / a])), i, a, c, s, l);
  }, i, a, r, s, n, o);
  return [u[0] / i, u[1] / a];
}
function pk(t, e) {
  e.absolutePoses = He(t.state);
}
function kh(t) {
  var e = [];
  return t.forEach(function(r) {
    r.guidelineInfos.forEach(function(n) {
      var o = n.guideline;
      Se(e, function(i) {
        return i.guideline === o;
      }) || (o.direction = "", e.push({ guideline: o, posInfo: r }));
    });
  }), e.map(function(r) {
    var n = r.guideline, o = r.posInfo;
    return A(A({}, n), { direction: o.direction });
  });
}
function Ah(t, e, r, n, o, i) {
  var a = gd(Rc(t, i), e, r), s = a.vertical, c = a.horizontal, l = co();
  s.forEach(function(g) {
    g.isBound && (g.direction === "start" && (l.left = !0), g.direction === "end" && (l.right = !0), n.push({
      type: "bounds",
      pos: g.pos
    }));
  }), c.forEach(function(g) {
    g.isBound && (g.direction === "start" && (l.top = !0), g.direction === "end" && (l.bottom = !0), o.push({
      type: "bounds",
      pos: g.pos
    }));
  });
  var u = GN(t), f = u.boundMap, d = u.vertical, p = u.horizontal;
  return d.forEach(function(g) {
    yr(n, function(h) {
      var m = h.type, y = h.pos;
      return m === "bounds" && y === g;
    }) >= 0 || n.push({
      type: "bounds",
      pos: g
    });
  }), p.forEach(function(g) {
    yr(o, function(h) {
      var m = h.type, y = h.pos;
      return m === "bounds" && y === g;
    }) >= 0 || o.push({
      type: "bounds",
      pos: g
    });
  }), {
    boundMap: l,
    innerBoundMap: f
  };
}
var hk = Td("", ["resizable", "scalable"]), vk = {
  name: "snappable",
  dragRelation: "strong",
  props: [
    "snappable",
    "snapContainer",
    "snapDirections",
    "elementSnapDirections",
    "snapGap",
    "snapGridWidth",
    "snapGridHeight",
    "isDisplaySnapDigit",
    "isDisplayInnerSnapDigit",
    "isDisplayGridGuidelines",
    "snapDigit",
    "snapThreshold",
    "snapRenderThreshold",
    "snapGridAll",
    j1,
    I1,
    F1,
    B1,
    "horizontalGuidelines",
    "verticalGuidelines",
    "elementGuidelines",
    "bounds",
    "innerBounds",
    "snapDistFormat",
    "maxSnapElementGuidelineDistance",
    "maxSnapElementGapDistance"
  ],
  events: ["snap", "bound"],
  css: [
    `:host {
--bounds-color: #d66;
}
.guideline {
pointer-events: none;
z-index: 2;
}
.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}
.guideline-group {
position: absolute;
top: 0;
left: 0;
}
.guideline-group .size-value {
position: absolute;
color: #f55;
font-size: 12px;
font-size: calc(12px * var(--zoom));
font-weight: bold;
}
.guideline-group.horizontal .size-value {
transform-origin: 50% 100%;
transform: translateX(-50%);
left: 50%;
bottom: 5px;
bottom: calc(2px + 3px * var(--zoom));
}
.guideline-group.vertical .size-value {
transform-origin: 0% 50%;
top: 50%;
transform: translateY(-50%);
left: 5px;
left: calc(2px + 3px * var(--zoom));
}
.guideline.gap {
background: #f55;
}
.size-value.gap {
color: #f55;
}
`
  ],
  render: function(t, e) {
    var r = t.state, n = r.top, o = r.left, i = r.pos1, a = r.pos2, s = r.pos3, c = r.pos4, l = r.snapRenderInfo, u = t.props.snapRenderThreshold, f = u === void 0 ? 1 : u;
    if (!l || !l.render || !Uo(t, ""))
      return uo(t, "boundMap", co(), function(X) {
        return JSON.stringify(X);
      }), uo(t, "innerBoundMap", co(), function(X) {
        return JSON.stringify(X);
      }), [];
    r.guidelines = Tu(t);
    var d = Math.min(i[0], a[0], s[0], c[0]), p = Math.min(i[1], a[1], s[1], c[1]), g = l.externalPoses || [], h = He(t.state), m = [], y = [], x = [], b = [], w = [], _ = Ve(h), E = _.width, C = _.height, T = _.top, R = _.left, D = _.bottom, N = _.right, M = { left: R, right: N, top: T, bottom: D, center: (R + N) / 2, middle: (T + D) / 2 }, O = g.length > 0, k = O ? Ve(g) : {};
    if (!l.request) {
      if (l.direction && w.push(kN(t, h, l.direction, f, f)), l.snap) {
        var F = Ve(h);
        l.center && (F.middle = (F.top + F.bottom) / 2, F.center = (F.left + F.right) / 2), w.push(Sh(t, F, f, f));
      }
      O && (l.center && (k.middle = (k.top + k.bottom) / 2, k.center = (k.left + k.right) / 2), w.push(Sh(t, k, f, f))), w.forEach(function(X) {
        var H = X.vertical.posInfos, Q = X.horizontal.posInfos;
        m.push.apply(m, tt([], I(H.filter(function(W) {
          var q = W.guidelineInfos;
          return q.some(function(ot) {
            var nt = ot.guideline;
            return !nt.hide;
          });
        }).map(function(W) {
          return {
            type: "snap",
            pos: W.pos
          };
        })), !1)), y.push.apply(y, tt([], I(Q.filter(function(W) {
          var q = W.guidelineInfos;
          return q.some(function(ot) {
            var nt = ot.guideline;
            return !nt.hide;
          });
        }).map(function(W) {
          return {
            type: "snap",
            pos: W.pos
          };
        })), !1)), x.push.apply(x, tt([], I(kh(H)), !1)), b.push.apply(b, tt([], I(kh(Q)), !1));
      });
    }
    var $ = Ah(t, [R, N], [T, D], m, y), V = $.boundMap, L = $.innerBoundMap;
    O && Ah(t, [k.left, k.right], [k.top, k.bottom], m, y, l.externalBounds);
    var z = tt(tt([], I(x), !1), I(b), !1), j = z.filter(function(X) {
      return X.element && !X.gapRects;
    }), B = z.filter(function(X) {
      return X.gapRects;
    }).sort(function(X, H) {
      return X.gap - H.gap;
    });
    it(t, "onSnap", {
      guidelines: z.filter(function(X) {
        var H = X.element;
        return !H;
      }),
      elements: j,
      gaps: B
    }, !0);
    var Y = uo(t, "boundMap", V, function(X) {
      return JSON.stringify(X);
    }, co()), K = uo(t, "innerBoundMap", L, function(X) {
      return JSON.stringify(X);
    }, co());
    return (V === Y || L === K) && it(t, "onBound", {
      bounds: V,
      innerBounds: L
    }, !0), tt(tt(tt(tt(tt(tt([], I(tk(t, j, [d, p], M, e)), !1), I(ek(t, B, [d, p], M, e)), !1), I(Ph(t, "horizontal", b, [o, n], M, e)), !1), I(Ph(t, "vertical", x, [o, n], M, e)), !1), I(Mh(t, "horizontal", y, d, n, E, 0, e)), !1), I(Mh(t, "vertical", m, p, o, C, 1, e)), !1);
  },
  dragStart: function(t, e) {
    t.state.snapRenderInfo = {
      request: e.isRequest,
      snap: !0,
      center: !0
    }, Ja(t);
  },
  drag: function(t) {
    var e = t.state;
    Ja(t) || (e.guidelines = Tu(t)), e.snapRenderInfo && (e.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, e) {
    if (hk(t, e) || _u(t, e))
      return !0;
    if (!e.isRequest && e.inputEvent)
      return Ut(e.inputEvent.target, st("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, Ja(t);
  },
  dragControl: function(t) {
    this.drag(t);
  },
  dragControlEnd: function(t) {
    this.unset(t);
  },
  dragGroupStart: function(t, e) {
    this.dragStart(t, e);
  },
  dragGroup: function(t) {
    this.drag(t);
  },
  dragGroupEnd: function(t) {
    this.unset(t);
  },
  dragGroupControlStart: function(t) {
    t.state.snapRenderInfo = null, Ja(t);
  },
  dragGroupControl: function(t) {
    this.drag(t);
  },
  dragGroupControlEnd: function(t) {
    this.unset(t);
  },
  unset: function(t) {
    var e = t.state;
    e.enableSnap = !1, e.guidelines = [], e.snapRenderInfo = null, e.elementRects = [];
  }
};
function gk(t, e) {
  return [
    t[0] * e[0],
    t[1] * e[1]
  ];
}
function st() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return sO.apply(void 0, tt([dd], I(t), !1));
}
function Z1(t) {
  t();
}
function mk(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : $t(t) ? t : Do(t);
}
function _i(t, e, r) {
  return Ds(e, Ln(r, e), t, Ln(r.map(function(n) {
    return -n;
  }), e));
}
function yk(t, e, r) {
  if (e === "%") {
    var n = Sd(t.ownerSVGElement);
    return n[r ? "width" : "height"] / 100;
  }
  return 1;
}
function xk(t) {
  var e = bk(Ed(t, ":before"));
  return e.map(function(r, n) {
    var o = mr(r), i = o.value, a = o.unit;
    return i * yk(t, a, n === 0);
  });
}
function js(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function bk(t) {
  return js(t.transformOrigin);
}
function J1(t) {
  var e = Ce(t), r = e("transform");
  if (r && r !== "none")
    return r;
  if ("transform" in t) {
    var n = t.transform, o = n.baseVal;
    if (!o)
      return "";
    var i = o.length;
    if (!i)
      return "";
    for (var a = [], s = function(l) {
      var u = o[l].matrix;
      a.push("matrix(".concat(["a", "b", "c", "d", "e", "f"].map(function(f) {
        return u[f];
      }).join(", "), ")"));
    }, c = 0; c < i; ++c)
      s(c);
    return a.join(" ");
  }
  return "";
}
function ta(t, e, r, n, o) {
  var i, a, s = Ju(t) || un(t), c = !1, l, u;
  if (!t || r)
    l = t;
  else {
    var f = (i = t?.assignedSlot) === null || i === void 0 ? void 0 : i.parentElement, d = t.parentElement;
    f ? (c = !0, u = d, l = f) : l = d;
  }
  for (var p = !1, g = t === e || l === e, h = "relative", m = 1, y = parseFloat(o?.("zoom")) || 1, x = o?.("position"); l && l !== s; ) {
    e === l && (g = !0);
    var b = Ce(l), w = l.tagName.toLowerCase(), _ = J1(l), E = b("willChange"), C = parseFloat(b("zoom")) || 1;
    if (h = b("position"), n && C !== 1) {
      m = C;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !r && n && y !== 1 && x && x !== "absolute" || w === "svg" || w === "foreignobject" || h !== "static" || _ && _ !== "none" || E === "transform"
    )
      break;
    var T = (a = t?.assignedSlot) === null || a === void 0 ? void 0 : a.parentNode, R = l.parentNode;
    T && (c = !0, u = R);
    var D = R;
    if (D && D.nodeType === 11) {
      l = D.host, p = !0, h = Ce(l)("position");
      break;
    }
    l = D, h = "relative";
  }
  return {
    offsetZoom: m,
    hasSlot: c,
    parentSlotElement: u,
    isCustomElement: p,
    isStatic: h === "static",
    isEnd: g || !l || l === s,
    offsetParent: l || s
  };
}
function wk(t, e) {
  var r, n = t.tagName.toLowerCase(), o = t.offsetLeft, i = t.offsetTop, a = Ce(t), s = Ze(o), c = !s, l, u;
  return !c && (n !== "svg" || t.ownerSVGElement) ? (l = y1 ? xk(t) : js(a("transformOrigin")).map(function(f) {
    return parseFloat(f);
  }), u = l.slice(), c = !0, n === "svg" ? (o = 0, i = 0) : (r = I(Ek(t, l, t === e && e.tagName.toLowerCase() === "g"), 4), o = r[0], i = r[1], l[0] = r[2], l[1] = r[3])) : (l = js(a("transformOrigin")).map(function(f) {
    return parseFloat(f);
  }), u = l.slice()), {
    tagName: n,
    isSVG: s,
    hasOffset: c,
    offset: [o || 0, i || 0],
    origin: l,
    targetOrigin: u
  };
}
function Q1(t, e) {
  var r = Ce(t), n = Ce(un(t)), o = n("position");
  if (!e && (!o || o === "static"))
    return [0, 0];
  var i = parseInt(n("marginLeft"), 10), a = parseInt(n("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (a = 0), (r("left") !== "auto" || r("right") !== "auto") && (i = 0)), [i, a];
}
function Ru(t) {
  t.forEach(function(e) {
    var r = e.matrix;
    r && (e.matrix = sr(r, 3, 4));
  });
}
function Sk(t) {
  for (var e = t.parentElement, r = !1, n = un(t); e; ) {
    var o = Ed(e).transform;
    if (o && o !== "none") {
      r = !0;
      break;
    }
    if (e === n)
      break;
    e = e.parentElement;
  }
  return {
    fixedContainer: e || n,
    hasTransform: r
  };
}
function Pc(t, e) {
  return e === void 0 && (e = t.length > 9), "".concat(e ? "matrix3d" : "matrix", "(").concat(l1(t, !e).join(","), ")");
}
function Sd(t) {
  var e = t.clientWidth, r = t.clientHeight;
  if (!t)
    return { x: 0, y: 0, width: 0, height: 0, clientWidth: e, clientHeight: r };
  var n = t.viewBox, o = n && n.baseVal || { x: 0, y: 0, width: 0, height: 0 };
  return {
    x: o.x,
    y: o.y,
    width: o.width || e,
    height: o.height || r,
    clientWidth: e,
    clientHeight: r
  };
}
function Ck(t, e) {
  var r, n = Sd(t), o = n.width, i = n.height, a = n.clientWidth, s = n.clientHeight, c = a / o, l = s / i, u = t.preserveAspectRatio.baseVal, f = u.align, d = u.meetOrSlice, p = [0, 0], g = [c, l], h = [0, 0];
  if (f !== 1) {
    var m = (f - 2) % 3, y = Math.floor((f - 2) / 3);
    p[0] = o * m / 2, p[1] = i * y / 2;
    var x = d === 2 ? Math.max(l, c) : Math.min(c, l);
    g[0] = x, g[1] = x, h[0] = (a - o) / 2 * m, h[1] = (s - i) / 2 * y;
  }
  var b = ad(g, e);
  return r = I(h, 2), b[e * (e - 1)] = r[0], b[e * (e - 1) + 1] = r[1], _i(b, e, p);
}
function Ek(t, e, r) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !r && n === "g")
    return [0, 0, 0, 0];
  var o = Ce(t), i = o("transform-box") === "fill-box", a = t.getBBox(), s = Sd(t.ownerSVGElement), c = a.x, l = a.y;
  n === "foreignobject" && !c && !l && (c = parseFloat(t.getAttribute("x")) || 0, l = parseFloat(t.getAttribute("y")) || 0);
  var u = c - s.x, f = l - s.y, d = i ? e[0] : e[0] - u, p = i ? e[1] : e[1] - f;
  return [u, f, d, p];
}
function Gt(t, e, r) {
  return he(t, Bn(e, r), r);
}
function Hn(t, e, r, n) {
  return [[0, 0], [e, 0], [0, r], [e, r]].map(function(o) {
    return Gt(t, o, n);
  });
}
function Ve(t) {
  var e = t.map(function(l) {
    return l[0];
  }), r = t.map(function(l) {
    return l[1];
  }), n = Math.min.apply(Math, tt([], I(e), !1)), o = Math.min.apply(Math, tt([], I(r), !1)), i = Math.max.apply(Math, tt([], I(e), !1)), a = Math.max.apply(Math, tt([], I(r), !1)), s = i - n, c = a - o;
  return {
    left: n,
    top: o,
    right: i,
    bottom: a,
    width: s,
    height: c
  };
}
function jh(t, e, r, n) {
  var o = Hn(t, e, r, n);
  return Ve(o);
}
function _k(t, e, r, n, o) {
  var i, a = t.target, s = t.origin, c = e.matrix, l = ex(a), u = l.offsetWidth, f = l.offsetHeight, d = r.getBoundingClientRect(), p = [0, 0];
  r === un(r) && (p = Q1(a, !0));
  for (var g = a.getBoundingClientRect(), h = g.left - d.left + r.scrollLeft - (r.clientLeft || 0) + p[0], m = g.top - d.top + r.scrollTop - (r.clientTop || 0) + p[1], y = g.width, x = g.height, b = Ds(n, o, c), w = jh(b, u, f, n), _ = w.left, E = w.top, C = w.width, T = w.height, R = Gt(b, s, n), D = lt(R, [_, E]), N = [
    h + D[0] * y / C,
    m + D[1] * x / T
  ], M = [0, 0], O = 0; ++O < 10; ) {
    var k = ar(o, n);
    i = I(lt(Gt(k, N, n), Gt(k, R, n)), 2), M[0] = i[0], M[1] = i[1];
    var F = Ds(n, o, Ln(M, n), c), $ = jh(F, u, f, n), V = $.left, L = $.top, z = V - h, j = L - m;
    if (Z(z) < 2 && Z(j) < 2)
      break;
    N[0] -= z, N[1] -= j;
  }
  return M.map(function(B) {
    return Math.round(B);
  });
}
function Tk(t, e, r) {
  var n = t.length === 16, o = n ? 4 : 3, i = e.map(function(c) {
    return Gt(t, c, o);
  }), a = r.left, s = r.top;
  return i.map(function(c) {
    return [c[0] + a, c[1] + s];
  });
}
function We(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function tx(t, e) {
  return We([
    e[0] - t[0],
    e[1] - t[1]
  ]);
}
function gi(t, e, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = Xt(t, e));
  var o = tx(t, e);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(r, ")"),
    width: "".concat(o, "px")
  };
}
function Is(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var o = r.length, i = r.reduce(function(s, c) {
    return s + c[0];
  }, 0) / o, a = r.reduce(function(s, c) {
    return s + c[1];
  }, 0) / o;
  return {
    transform: "translateZ(0px) translate(".concat(i, "px, ").concat(a, "px) rotate(").concat(t, "rad) scale(").concat(e, ")")
  };
}
function Gn(t, e) {
  var r = t[e];
  return $t(r) ? A(A({}, t), r) : t;
}
function ex(t) {
  var e = t && !Ze(t.offsetWidth), r = 0, n = 0, o = 0, i = 0, a = 0, s = 0, c = 0, l = 0, u = 0, f = 0, d = 0, p = 0, g = 1 / 0, h = 1 / 0, m = 1 / 0, y = 1 / 0, x = 0, b = 0, w = !1;
  if (t)
    if (!e && t.ownerSVGElement) {
      var _ = t.getBBox();
      w = !0, r = _.width, n = _.height, a = r, s = n, c = r, l = n, o = r, i = n;
    } else {
      var E = Ce(t), C = t.style, T = E("boxSizing") === "border-box", R = parseFloat(E("borderLeftWidth")) || 0, D = parseFloat(E("borderRightWidth")) || 0, N = parseFloat(E("borderTopWidth")) || 0, M = parseFloat(E("borderBottomWidth")) || 0, O = parseFloat(E("paddingLeft")) || 0, k = parseFloat(E("paddingRight")) || 0, F = parseFloat(E("paddingTop")) || 0, $ = parseFloat(E("paddingBottom")) || 0, V = O + k, L = F + $, z = R + D, j = N + M, B = V + z, Y = L + j, K = E("position"), X = 0, H = 0;
      if ("clientLeft" in t) {
        var Q = null;
        if (K === "absolute") {
          var W = ta(t, un(t));
          Q = W.offsetParent;
        } else
          Q = t.parentElement;
        if (Q) {
          var q = Ce(Q);
          X = parseFloat(q("width")), H = parseFloat(q("height"));
        }
      }
      u = Math.max(V, Mt(E("minWidth"), X) || 0), f = Math.max(L, Mt(E("minHeight"), H) || 0), g = Mt(E("maxWidth"), X), h = Mt(E("maxHeight"), H), isNaN(g) && (g = 1 / 0), isNaN(h) && (h = 1 / 0), x = Mt(C.width, 0) || 0, b = Mt(C.height, 0) || 0, a = parseFloat(E("width")) || 0, s = parseFloat(E("height")) || 0, c = Z(a - x) < 1 ? Ai(u, x || a, g) : a, l = Z(s - b) < 1 ? Ai(f, b || s, h) : s, r = c, n = l, o = c, i = l, T ? (m = g, y = h, d = u, p = f, c = r - B, l = n - Y) : (m = g + B, y = h + Y, d = u + B, p = f + Y, r = c + B, n = l + Y), o = c + V, i = l + L;
    }
  return {
    svg: w,
    offsetWidth: r,
    offsetHeight: n,
    clientWidth: o,
    clientHeight: i,
    contentWidth: c,
    contentHeight: l,
    inlineCSSWidth: x,
    inlineCSSHeight: b,
    cssWidth: a,
    cssHeight: s,
    minWidth: u,
    minHeight: f,
    maxWidth: g,
    maxHeight: h,
    minOffsetWidth: d,
    minOffsetHeight: p,
    maxOffsetWidth: m,
    maxOffsetHeight: y
  };
}
function rx(t, e) {
  return Xt(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
}
function Qa() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  };
}
function nx(t, e) {
  var r = t === un(t) || t === Ju(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return r && (n.clientHeight = Math.max(e.height, n.clientHeight), n.scrollHeight = Math.max(e.height, n.scrollHeight)), n.overflow = Ce(t)("overflow") !== "visible", A(A({}, e), n);
}
function Cl(t, e, r, n) {
  var o = t.left, i = t.right, a = t.top, s = t.bottom, c = e.top, l = e.left, u = {
    left: l + o,
    top: c + a,
    right: l + i,
    bottom: c + s,
    width: i - o,
    height: s - a
  };
  return r && n ? nx(r, u) : u;
}
function Ti(t, e) {
  var r = 0, n = 0, o = 0, i = 0;
  if (t) {
    var a = t.getBoundingClientRect();
    r = a.left, n = a.top, o = a.width, i = a.height;
  }
  var s = {
    left: r,
    top: n,
    width: o,
    height: i,
    right: r + o,
    bottom: n + i
  };
  return t && e ? nx(t, s) : s;
}
function Rk(t) {
  var e = t.props, r = e.groupable, n = e.svgOrigin, o = t.getState(), i = o.offsetWidth, a = o.offsetHeight, s = o.svg, c = o.transformOrigin;
  return !r && s && n ? Dd(n, i, a) : c;
}
function ox(t, e, r, n) {
  var o;
  if (t)
    o = t;
  else if (e)
    o = [0, 0];
  else {
    var i = r.target;
    o = ix(i, n);
  }
  return o;
}
function ix(t, e) {
  if (t) {
    var r = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (e.deg = r, !!n) {
      var o = [0, 0];
      return n.indexOf("w") > -1 && (o[0] = -1), n.indexOf("e") > -1 && (o[0] = 1), n.indexOf("n") > -1 && (o[1] = -1), n.indexOf("s") > -1 && (o[1] = 1), o;
    }
  }
}
function Cd(t, e) {
  return [
    Et(e, t[0]),
    Et(e, t[1]),
    Et(e, t[2]),
    Et(e, t[3])
  ];
}
function He(t) {
  var e = t.left, r = t.top, n = t.pos1, o = t.pos2, i = t.pos3, a = t.pos4;
  return Cd([n, o, i, a], [e, r]);
}
function Du(t, e) {
  t[e ? "controlAbles" : "targetAbles"].forEach(function(r) {
    r.unset && r.unset(t);
  });
}
function lo(t, e) {
  var r = e ? "controlGesto" : "targetGesto", n = t[r];
  n?.isIdle() === !1 && Du(t, e), n?.unset(), t[r] = null;
}
function me(t, e) {
  if (e) {
    var r = Yo(e);
    r.nextStyle = A(A({}, r.nextStyle), t);
  }
  return {
    style: t,
    cssText: Ge(t).map(function(n) {
      return "".concat(Ku(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function ax(t, e, r) {
  var n = e.afterTransform || e.transform;
  return A(A({}, me(A(A(A({}, t.style), e.style), { transform: n }), r)), { afterTransform: n, transform: t.transform });
}
function vt(t, e, r, n) {
  var o = e.datas;
  o.datas || (o.datas = {});
  var i = A(A({}, r), { target: t.state.target, clientX: e.clientX, clientY: e.clientY, inputEvent: e.inputEvent, currentTarget: t, moveable: t, datas: o.datas, isRequest: e.isRequest, isRequestChild: e.isRequestChild, isFirstDrag: !!e.isFirstDrag, isTrusted: e.isTrusted !== !1, stopAble: function() {
    o.isEventStart = !1;
  }, stopDrag: function() {
    var a;
    (a = e.stop) === null || a === void 0 || a.call(e);
  } });
  return o.isStartEvent ? n || (o.lastEvent = i) : o.isStartEvent = !0, i;
}
function Oe(t, e, r) {
  var n = e.datas, o = "isDrag" in r ? r.isDrag : e.isDrag;
  return n.datas || (n.datas = {}), A(A({ isDrag: o }, r), { moveable: t, target: t.state.target, clientX: e.clientX, clientY: e.clientY, inputEvent: e.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: e.isDouble, datas: n.datas, isFirstDrag: !!e.isFirstDrag });
}
function Oc(t, e, r) {
  t._emitter.on(e, r);
}
function it(t, e, r, n, o) {
  return t.triggerEvent(e, r, n, o);
}
function Ed(t, e) {
  return De(t).getComputedStyle(t, e);
}
function ts(t, e, r) {
  var n = {}, o = {};
  return t.filter(function(i) {
    var a = i.name;
    if (n[a] || !e.some(function(s) {
      return i[s];
    }))
      return !1;
    if (!r && i.ableGroup) {
      if (o[i.ableGroup])
        return !1;
      o[i.ableGroup] = !0;
    }
    return n[a] = !0, !0;
  });
}
function Mu(t, e) {
  return t === e || t == null && e == null;
}
function Ih() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t.length - 1, n = 0; n < r; ++n) {
    var o = t[n];
    if (!Ze(o))
      return o;
  }
  return t[r];
}
function sx(t, e) {
  var r = [], n = [];
  return t.forEach(function(o, i) {
    var a = e(o, i, t), s = n.indexOf(a), c = r[s] || [];
    s === -1 && (n.push(a), r.push(c)), c.push(o);
  }), r;
}
function Dk(t, e) {
  var r = [], n = {};
  return t.forEach(function(o, i) {
    var a = e(o, i, t), s = n[a];
    s || (s = [], n[a] = s, r.push(s)), s.push(o);
  }), r;
}
function cx(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function No() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.sort(function(r, n) {
    return Z(n) - Z(r);
  }), t[0];
}
function ko(t, e, r) {
  return he(ar(t, r), Bn(e, r), r);
}
function Mk(t, e) {
  var r, n = t.is3d, o = t.rootMatrix, i = n ? 4 : 3;
  return r = I(ko(o, [e.distX, e.distY], i), 2), e.distX = r[0], e.distY = r[1], e;
}
function Ie(t, e, r, n) {
  if (!r[0] && !r[1])
    return e;
  var o = Gt(t, [Nh(r[0] || 1), 0], n), i = Gt(t, [0, Nh(r[1] || 1)], n), a = Gt(t, [
    r[0] / We(o),
    r[1] / We(i)
  ], n);
  return Et(e, a);
}
function Qe(t, e, r) {
  return r ? "".concat(t / e * 100, "%") : "".concat(t, "px");
}
function Fs(t) {
  return Z(t) <= ye ? 0 : t;
}
function _d(t) {
  return function(e) {
    if (!e.isDragging(t))
      return "";
    var r = yN(e, t), n = r.deg;
    return n ? st("view-control-rotation".concat(n)) : "";
  };
}
function Td(t, e) {
  return e === void 0 && (e = [t]), function(r, n) {
    if (n.isRequest)
      return e.some(function(i) {
        return n.requestAble === i;
      }) ? n.parentDirection : !1;
    var o = n.inputEvent.target;
    return Ut(o, st("direction")) && (!t || Ut(o, st(t)));
  };
}
function Pk(t, e, r) {
  var n, o = Mo(t, {
    "x%": function(_) {
      return _ / 100 * e.offsetWidth;
    },
    "y%": function(_) {
      return _ / 100 * e.offsetHeight;
    }
  }), i = t.slice(0, r < 0 ? void 0 : r), a = t.slice(0, r < 0 ? void 0 : r + 1), s = t[r] || "", c = r < 0 ? [] : t.slice(r), l = r < 0 ? [] : t.slice(r + 1), u = o.slice(0, r < 0 ? void 0 : r), f = o.slice(0, r < 0 ? void 0 : r + 1), d = (n = o[r]) !== null && n !== void 0 ? n : Mo([""])[0], p = r < 0 ? [] : o.slice(r), g = r < 0 ? [] : o.slice(r + 1), h = d ? [d] : [], m = no(u), y = no(f), x = no(p), b = no(g), w = Pt(m, x, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: m,
    beforeFunctionMatrix2: y,
    targetFunctionMatrix: no(h),
    afterFunctionMatrix: x,
    afterFunctionMatrix2: b,
    allFunctionMatrix: w,
    beforeFunctions: u,
    beforeFunctions2: f,
    targetFunction: h[0],
    afterFunctions: p,
    afterFunctions2: g,
    beforeFunctionTexts: i,
    beforeFunctionTexts2: a,
    targetFunctionText: s,
    afterFunctionTexts: c,
    afterFunctionTexts2: l
  };
}
function Ok(t) {
  return !t || !$t(t) || Ii(t) ? !1 : Tt(t) || "length" in t;
}
function gr(t, e) {
  return t ? Ii(t) ? t : Lt(t) ? e ? document.querySelector(t) : t : we(t) ? t() : xv(t) ? t : "current" in t ? t.current : t : null;
}
function Rd(t, e) {
  if (!t)
    return [];
  var r = Ok(t) ? [].slice.call(t) : [t];
  return r.reduce(function(n, o) {
    return Lt(o) && e ? tt(tt([], I(n), !1), I([].slice.call(document.querySelectorAll(o))), !1) : (Tt(o) ? n.push(Rd(o, e)) : n.push(gr(o, e)), n);
  }, []);
}
function Nk(t, e, r) {
  var n = Xt(t, e) / Math.PI * 180;
  return n = r >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function Fh(t, e) {
  var r = t.rootMatrix, n = t.is3d, o = n ? 4 : 3, i = ar(r, o);
  return n || (i = sr(i, 3, 4)), i[12] = 0, i[13] = 0, i[14] = 0, ds(i, e);
}
function lx(t, e, r, n, o) {
  var i = I(t, 2), a = i[0], s = i[1], c = 0, l = 0;
  if (o && a && s) {
    var u = Xt([0, 0], e), f = Xt([0, 0], n), d = We(e), p = Math.cos(u - f) * d;
    if (!n[0])
      l = p, c = l * r;
    else if (!n[1])
      c = p, l = c / r;
    else {
      var g = n[0] * a, h = n[1] * s, m = Math.atan2(g + e[0], h + e[1]), y = Math.atan2(g, h);
      m < 0 && (m += Math.PI * 2), y < 0 && (y += Math.PI * 2);
      var x = 0;
      Z(m - y) < Math.PI / 2 || Z(m - y) > Math.PI / 2 * 3 || (y += Math.PI), x = m - y, x > Math.PI * 2 ? x -= Math.PI * 2 : x > Math.PI ? x = 2 * Math.PI - x : x < -Math.PI && (x = -2 * Math.PI - x);
      var b = We([g + e[0], h + e[1]]) * Math.cos(x);
      c = b * Math.sin(y) - g, l = b * Math.cos(y) - h, n[0] < 0 && (c *= -1), n[1] < 0 && (l *= -1);
    }
  } else
    c = n[0] * e[0], l = n[1] * e[1];
  return [c, l];
}
function ux(t, e, r, n) {
  var o, i = r.ratio, a = r.startOffsetWidth, s = r.startOffsetHeight, c = 0, l = 0, u = n.distX, f = n.distY, d = n.pinchScale, p = n.parentDistance, g = n.parentDist, h = n.parentScale, m = r.fixedDirection, y = [0, 1].map(function(C) {
    return Z(t[C] - m[C]);
  }), x = [0, 1].map(function(C) {
    var T = y[C];
    return T !== 0 && (T = 2 / T), T;
  });
  if (g)
    c = g[0], l = g[1], e && (c ? l || (l = c / i) : c = l * i);
  else if (Oi(d))
    c = (d - 1) * a, l = (d - 1) * s;
  else if (h)
    c = (h[0] - 1) * a, l = (h[1] - 1) * s;
  else if (p) {
    var b = a * y[0], w = s * y[1], _ = We([b, w]);
    c = p / _ * b * x[0], l = p / _ * w * x[1];
  } else {
    var E = _r({ datas: r, distX: u, distY: f });
    E = x.map(function(C, T) {
      return E[T] * C;
    }), o = I(lx([a, s], E, i, t, e), 2), c = o[0], l = o[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: c,
    distHeight: l
  };
}
function Pu(t, e) {
  if (e) {
    if (t === "left")
      return { x: "0%", y: "50%" };
    if (t === "top")
      return { x: "50%", y: "50%" };
    if (t === "center")
      return { x: "50%", y: "50%" };
    if (t === "right")
      return { x: "100%", y: "50%" };
    if (t === "bottom")
      return { x: "50%", y: "100%" };
    var r = I(t.split(" "), 2), n = r[0], o = r[1], i = Pu(n || ""), a = Pu(o || ""), s = A(A({}, i), a), c = {
      x: "50%",
      y: "50%"
    };
    return s.x && (c.x = s.x), s.y && (c.y = s.y), s.value && (s.x && !s.y && (c.y = s.value), !s.x && s.y && (c.x = s.value)), c;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function Dd(t, e, r) {
  var n = Pu(t, !0), o = n.x, i = n.y;
  return [
    Mt(o, e) || 0,
    Mt(i, r) || 0
  ];
}
function kk(t, e, r) {
  var n = t.map(function(i) {
    return lt(i, e);
  }), o = n.map(function(i) {
    return fa(i, r);
  });
  return {
    prev: n,
    next: o,
    result: o.map(function(i) {
      return Et(i, e);
    })
  };
}
function fx(t, e) {
  return t.length === e.length && t.every(function(r, n) {
    var o = e[n], i = Tt(r), a = Tt(o);
    return i && a ? fx(r, o) : !i && !a ? r === o : !1;
  });
}
function uo(t, e, r, n, o) {
  var i = t._store, a = i[e];
  if (!(e in i))
    if (o != null)
      i[e] = o, a = o;
    else
      return i[e] = r, r;
  return a === r || n(a) === n(r) ? a : (i[e] = r, r);
}
function ge(t) {
  return t >= 0 ? 1 : -1;
}
function Z(t) {
  return Math.abs(t);
}
function El(t, e) {
  return ww(t).map(function(r) {
    return e(r);
  });
}
function dx(t) {
  return Oi(t) ? {
    top: t,
    left: t,
    right: t,
    bottom: t
  } : {
    left: t.left || 0,
    top: t.top || 0,
    right: t.right || 0,
    bottom: t.bottom || 0
  };
}
var Ak = ha("pinchable", {
  props: [
    "pinchable"
  ],
  events: [
    "pinchStart",
    "pinch",
    "pinchEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd"
  ],
  dragStart: function() {
    return !0;
  },
  pinchStart: function(t, e) {
    var r = e.datas, n = e.targets, o = e.angle, i = e.originalDatas, a = t.props, s = a.pinchable, c = a.ables;
    if (!s)
      return !1;
    var l = "onPinch".concat(n ? "Group" : "", "Start"), u = "drag".concat(n ? "Group" : "", "ControlStart"), f = (s === !0 ? t.controlAbles : c.filter(function(h) {
      return s.indexOf(h.name) > -1;
    })).filter(function(h) {
      return h.canPinch && h[u];
    }), d = vt(t, e, {});
    n && (d.targets = n);
    var p = it(t, l, d);
    r.isPinch = p !== !1, r.ables = f;
    var g = r.isPinch;
    return g ? (f.forEach(function(h) {
      if (i[h.name] = i[h.name] || {}, !!h[u]) {
        var m = A(A({}, e), { datas: i[h.name], parentRotate: o, isPinch: !0 });
        h[u](t, m);
      }
    }), t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: [0, 0]
    }, g) : !1;
  },
  pinch: function(t, e) {
    var r = e.datas, n = e.scale, o = e.distance, i = e.originalDatas, a = e.inputEvent, s = e.targets, c = e.angle;
    if (r.isPinch) {
      var l = o * (1 - 1 / n), u = vt(t, e, {});
      s && (u.targets = s);
      var f = "onPinch".concat(s ? "Group" : "");
      it(t, f, u);
      var d = r.ables, p = "drag".concat(s ? "Group" : "", "Control");
      return d.forEach(function(g) {
        g[p] && g[p](t, A(A({}, e), { datas: i[g.name], inputEvent: a, resolveMatrix: !0, pinchScale: n, parentDistance: l, parentRotate: c, isPinch: !0 }));
      }), u;
    }
  },
  pinchEnd: function(t, e) {
    var r = e.datas, n = e.isPinch, o = e.inputEvent, i = e.targets, a = e.originalDatas;
    if (r.isPinch) {
      var s = "onPinch".concat(i ? "Group" : "", "End"), c = Oe(t, e, { isDrag: n });
      i && (c.targets = i), it(t, s, c);
      var l = r.ables, u = "drag".concat(i ? "Group" : "", "ControlEnd");
      return l.forEach(function(f) {
        f[u] && f[u](t, A(A({}, e), { isDrag: n, datas: a[f.name], inputEvent: o, isPinch: !0 }));
      }), n;
    }
  },
  pinchGroupStart: function(t, e) {
    return this.pinchStart(t, A(A({}, e), { targets: t.props.targets }));
  },
  pinchGroup: function(t, e) {
    return this.pinch(t, A(A({}, e), { targets: t.props.targets }));
  },
  pinchGroupEnd: function(t, e) {
    return this.pinchEnd(t, A(A({}, e), { targets: t.props.targets }));
  }
}), Bh = Td("scalable"), jk = {
  name: "scalable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "scalable",
    "throttleScale",
    "renderDirections",
    "keepRatio",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "scaleStart",
    "beforeScale",
    "scale",
    "scaleEnd",
    "scaleGroupStart",
    "beforeScaleGroup",
    "scaleGroup",
    "scaleGroupEnd"
  ],
  render: N1("scalable"),
  dragControlCondition: Bh,
  viewClassName: _d("scalable"),
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.isPinch, o = e.inputEvent, i = e.parentDirection, a = ox(i, n, o, r), s = t.state, c = s.width, l = s.height, u = s.targetTransform, f = s.target, d = s.pos1, p = s.pos2, g = s.pos4;
    if (!a || !f)
      return !1;
    n || Wn(t, e), r.datas = {}, r.transform = u, r.prevDist = [1, 1], r.direction = a, r.startOffsetWidth = c, r.startOffsetHeight = l, r.startValue = [1, 1];
    var h = !a[0] && !a[1] || a[0] || !a[1];
    Tc(t, e, "scale"), r.isWidth = h;
    function m(E) {
      r.ratio = E && isFinite(E) ? E : 0;
    }
    r.startPositions = He(t.state);
    function y(E) {
      var C = W1(r.startPositions, E);
      r.fixedDirection = C.fixedDirection, r.fixedPosition = C.fixedPosition, r.fixedOffset = C.fixedOffset;
    }
    r.setFixedDirection = y, m(dr(d, p) / dr(p, g)), y([-a[0], -a[1]]);
    var x = function(E) {
      r.minScaleSize = E;
    }, b = function(E) {
      r.maxScaleSize = E;
    };
    x([-1 / 0, -1 / 0]), b([1 / 0, 1 / 0]);
    var w = vt(t, e, A(A({ direction: a, set: function(E) {
      r.startValue = E;
    }, setRatio: m, setFixedDirection: y, setMinScaleSize: x, setMaxScaleSize: b }, _c(t, e)), { dragStart: ve.dragStart(t, new Po().dragStart([0, 0], e)) })), _ = it(t, "onScaleStart", w);
    return r.startFixedDirection = r.fixedDirection, _ !== !1 && (r.isScale = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: a
    }), r.isScale ? w : !1;
  },
  dragControl: function(t, e) {
    Cc(t, e, "scale");
    var r = e.datas, n = e.parentKeepRatio, o = e.parentFlag, i = e.isPinch, a = e.dragClient, s = e.isRequest, c = e.useSnap, l = e.resolveMatrix, u = r.prevDist, f = r.direction, d = r.startOffsetWidth, p = r.startOffsetHeight, g = r.isScale, h = r.startValue, m = r.isWidth, y = r.ratio;
    if (!g)
      return !1;
    var x = t.props, b = x.throttleScale, w = x.parentMoveable, _ = f;
    !f[0] && !f[1] && (_ = [1, 1]);
    var E = y && (n ?? x.keepRatio) || !1, C = t.state, T = [
      h[0],
      h[1]
    ];
    function R() {
      var U = ux(_, E, r, e), et = U.distWidth, dt = U.distHeight, ct = d ? (d + et) / d : 1, ft = p ? (p + dt) / p : 1;
      h[0] || (T[0] = et / d), h[1] || (T[1] = dt / p);
      var ht = (_[0] || E ? ct : 1) * T[0], Ct = (_[1] || E ? ft : 1) * T[1];
      return ht === 0 && (ht = ge(u[0]) * qa), Ct === 0 && (Ct = ge(u[1]) * qa), [ht, Ct];
    }
    var D = R();
    if (!i && t.props.groupable) {
      var N = C.snapRenderInfo || {}, M = N.direction;
      Tt(M) && (M[0] || M[1]) && (C.snapRenderInfo = { direction: f, request: e.isRequest });
    }
    it(t, "onBeforeScale", vt(t, e, {
      scale: D,
      setFixedDirection: function(U) {
        return r.setFixedDirection(U), D = R(), D;
      },
      startFixedDirection: r.startFixedDirection,
      setScale: function(U) {
        D = U;
      }
    }, !0));
    var O = [
      D[0] / T[0],
      D[1] / T[1]
    ], k = a, F = [0, 0], $ = ge(O[0] * O[1]), V = !a && !o && i;
    if (V || l ? k = vd(t, r.targetAllTransform, [0, 0], [0, 0], r) : a || (k = r.fixedPosition), i || (F = dk(t, O, f, !c && s, r)), E) {
      _[0] && _[1] && F[0] && F[1] && (Math.abs(F[0] * d) > Math.abs(F[1] * p) ? F[1] = 0 : F[0] = 0);
      var L = !F[0] && !F[1];
      if (L && (m ? O[0] = pt(O[0] * T[0], b) / T[0] : O[1] = pt(O[1] * T[1], b) / T[1]), _[0] && !_[1] || F[0] && !F[1] || L && m) {
        O[0] += F[0];
        var z = d * O[0] * T[0] / y;
        O[1] = ge($ * O[0]) * Z(z / p / T[1]);
      } else if (!_[0] && _[1] || !F[0] && F[1] || L && !m) {
        O[1] += F[1];
        var j = p * O[1] * T[1] * y;
        O[0] = ge($ * O[1]) * Z(j / d / T[0]);
      }
    } else
      O[0] += F[0], O[1] += F[1], F[0] || (O[0] = pt(O[0] * T[0], b) / T[0]), F[1] || (O[1] = pt(O[1] * T[1], b) / T[1]);
    O[0] === 0 && (O[0] = ge(u[0]) * qa), O[1] === 0 && (O[1] = ge(u[1]) * qa), D = gk(O, [T[0], T[1]]);
    var B = [
      d,
      p
    ], Y = [
      d * D[0],
      p * D[1]
    ];
    Y = Zu(Y, r.minScaleSize, r.maxScaleSize, E ? y : !1), D = El(2, function(U) {
      return B[U] ? Y[U] / B[U] : Y[U];
    }), O = El(2, function(U) {
      return D[U] / T[U];
    });
    var K = El(2, function(U) {
      return u[U] ? O[U] / u[U] : O[U];
    }), X = "scale(".concat(O.join(", "), ")"), H = "scale(".concat(D.join(", "), ")"), Q = Ec(r, H, X), W = !h[0] || !h[1], q = dN(t, W ? H : X, r.fixedDirection, k, r.fixedOffset, r, W), ot = V ? q : lt(q, r.prevInverseDist || [0, 0]);
    if (r.prevDist = O, r.prevInverseDist = q, D[0] === u[0] && D[1] === u[1] && ot.every(function(U) {
      return !U;
    }) && !w && !V)
      return !1;
    var nt = vt(t, e, A({ offsetWidth: d, offsetHeight: p, direction: f, scale: D, dist: O, delta: K, isPinch: !!i }, T1(t, Q, ot, i, e)));
    return it(t, "onScale", nt), nt;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var n = Oe(t, e, {});
    return it(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: Bh,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, e);
    if (!n)
      return !1;
    var o = nr(t, "resizable", e);
    r.moveableScale = t.scale;
    var i = Pr(t, this, "dragControlStart", e, function(l, u) {
      return Ns(t, l, r, u);
    }), a = function(l) {
      n.setFixedDirection(l), i.forEach(function(u, f) {
        u.setFixedDirection(l), Ns(t, u.moveable, r, o[f]);
      });
    };
    r.setFixedDirection = a;
    var s = A(A({}, n), { targets: t.props.targets, events: i, setFixedDirection: a }), c = it(t, "onScaleGroupStart", s);
    return r.isScale = c !== !1, r.isScale ? s : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isScale) {
      Oc(t, "onBeforeScale", function(u) {
        it(t, "onBeforeScaleGroup", vt(t, e, A(A({}, u), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var o = n.dist, i = r.moveableScale;
        t.scale = [
          o[0] * i[0],
          o[1] * i[1]
        ];
        var a = t.props.keepRatio, s = r.fixedPosition, c = Pr(t, this, "dragControl", e, function(u, f) {
          var d = I(he(da(t.rotation / 180 * Math.PI, 3), [
            f.datas.originalX * o[0],
            f.datas.originalY * o[1],
            1
          ], 3), 2), p = d[0], g = d[1];
          return A(A({}, f), {
            parentDist: null,
            parentScale: o,
            parentKeepRatio: a,
            // recalculate child fixed position for parent group's dragging.
            dragClient: Et(s, [p, g])
          });
        }), l = A({ targets: t.props.targets, events: c }, n);
        return it(t, "onScaleGroup", l), l;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isScale) {
      this.dragControlEnd(t, e);
      var o = Pr(t, this, "dragControlEnd", e), i = Oe(t, e, {
        targets: t.props.targets,
        events: o
      });
      return it(t, "onScaleGroupEnd", i), r;
    }
  },
  /**
       * @method Moveable.Scalable#request
       * @param {Moveable.Scalable.ScalableRequestParam} e - the Scalable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("scalable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("scalable");
       *
       * // request
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function() {
    var t = {}, e = 0, r = 0, n = !1;
    return {
      isControl: !0,
      requestStart: function(o) {
        return n = o.useSnap, {
          datas: t,
          parentDirection: o.direction || [1, 1],
          useSnap: n
        };
      },
      request: function(o) {
        return e += o.deltaWidth, r += o.deltaHeight, {
          datas: t,
          parentDist: [e, r],
          parentKeepRatio: o.keepRatio,
          useSnap: n
        };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: n };
      }
    };
  }
};
function Wr(t, e) {
  return t.map(function(r, n) {
    return yo(r, e[n], 1, 2);
  });
}
function Lh(t, e, r) {
  var n = Xt(t, e), o = Xt(t, r), i = o - n;
  return i >= 0 ? i : i + 2 * Math.PI;
}
function Ik(t, e) {
  var r = Lh(t[0], t[1], t[2]), n = Lh(e[0], e[1], e[2]), o = Math.PI;
  return !(r >= o && n <= o || r <= o && n >= o);
}
var Fk = {
  name: "warpable",
  ableGroup: "size",
  props: [
    "warpable",
    "renderDirections",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "warpStart",
    "warp",
    "warpEnd"
  ],
  viewClassName: _d("warpable"),
  render: function(t, e) {
    var r = t.props, n = r.resizable, o = r.scalable, i = r.warpable, a = r.zoom;
    if (n || o || !i)
      return [];
    var s = t.state, c = s.pos1, l = s.pos2, u = s.pos3, f = s.pos4, d = Wr(c, l), p = Wr(l, c), g = Wr(c, u), h = Wr(u, c), m = Wr(u, f), y = Wr(f, u), x = Wr(l, f), b = Wr(f, l);
    return tt([
      e.createElement("div", { className: st("line"), key: "middeLine1", style: gi(d, m, a) }),
      e.createElement("div", { className: st("line"), key: "middeLine2", style: gi(p, y, a) }),
      e.createElement("div", { className: st("line"), key: "middeLine3", style: gi(g, x, a) }),
      e.createElement("div", { className: st("line"), key: "middeLine4", style: gi(h, b, a) })
    ], I(k1(t, "warpable", e)), !1);
  },
  dragControlCondition: function(t, e) {
    if (e.isRequest)
      return !1;
    var r = e.inputEvent.target;
    return Ut(r, st("direction")) && Ut(r, st("warpable"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.inputEvent, o = t.props.target, i = n.target, a = ix(i, r);
    if (!a || !o)
      return !1;
    var s = t.state, c = s.transformOrigin, l = s.is3d, u = s.targetTransform, f = s.targetMatrix, d = s.width, p = s.height, g = s.left, h = s.top;
    r.datas = {}, r.targetTransform = u, r.warpTargetMatrix = l ? f : sr(f, 3, 4), r.targetInverseMatrix = s1(ar(r.warpTargetMatrix, 4), 3, 4), r.direction = a, r.left = g, r.top = h, r.poses = [
      [0, 0],
      [d, 0],
      [0, p],
      [d, p]
    ].map(function(x) {
      return lt(x, c);
    }), r.nextPoses = r.poses.map(function(x) {
      var b = I(x, 2), w = b[0], _ = b[1];
      return he(r.warpTargetMatrix, [w, _, 0, 1], 4);
    }), r.startValue = jt(4), r.prevMatrix = jt(4), r.absolutePoses = He(s), r.posIndexes = _1(a), Wn(t, e), Tc(t, e, "matrix3d"), s.snapRenderInfo = {
      request: e.isRequest,
      direction: a
    };
    var m = vt(t, e, A({ set: function(x) {
      r.startValue = x;
    } }, _c(t, e))), y = it(t, "onWarpStart", m);
    return y !== !1 && (r.isWarp = !0), r.isWarp;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isRequest, o = e.distX, i = e.distY, a = r.targetInverseMatrix, s = r.prevMatrix, c = r.isWarp, l = r.startValue, u = r.poses, f = r.posIndexes, d = r.absolutePoses;
    if (!c)
      return !1;
    if (Cc(t, e, "matrix3d"), Uo(t, "warpable")) {
      var p = f.map(function(R) {
        return d[R];
      });
      p.length > 1 && p.push([
        (p[0][0] + p[1][0]) / 2,
        (p[0][1] + p[1][1]) / 2
      ]);
      var g = Mc(t, n, {
        horizontal: p.map(function(R) {
          return R[1] + i;
        }),
        vertical: p.map(function(R) {
          return R[0] + o;
        })
      }), h = g.horizontal, m = g.vertical;
      i -= h.offset, o -= m.offset;
    }
    var y = _r({ datas: r, distX: o, distY: i }, !0), x = r.nextPoses.slice();
    if (f.forEach(function(R) {
      x[R] = Et(x[R], y);
    }), !eN.every(function(R) {
      return Ik(R.map(function(D) {
        return u[D];
      }), R.map(function(D) {
        return x[D];
      }));
    }))
      return !1;
    var b = sd(u[0], u[2], u[1], u[3], x[0], x[2], x[1], x[3]);
    if (!b.length)
      return !1;
    var w = Pt(a, b, 4), _ = C1(r, w, !0), E = Pt(ar(s, 4), _, 4);
    r.prevMatrix = _;
    var C = Pt(l, _, 4), T = Ec(r, "matrix3d(".concat(C.join(", "), ")"), "matrix3d(".concat(_.join(", "), ")"));
    return hd(e, T), it(t, "onWarp", vt(t, e, A({ delta: E, matrix: C, dist: _, multiply: Pt, transform: T }, me({
      transform: T
    }, e)))), !0;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.isDrag;
    return r.isWarp ? (r.isWarp = !1, it(t, "onWarpEnd", Oe(t, e, {})), n) : !1;
  }
}, Bk = /* @__PURE__ */ st("area-pieces"), es = /* @__PURE__ */ st("area-piece"), px = /* @__PURE__ */ st("avoid"), Lk = st("view-dragging");
function _l(t) {
  var e = t.areaElement;
  if (e) {
    var r = t.state, n = r.width, o = r.height;
    oo(e, px), e.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(o, "px");
  }
}
function zh(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: Bk },
    t.createElement("div", { className: es }),
    t.createElement("div", { className: es }),
    t.createElement("div", { className: es }),
    t.createElement("div", { className: es })
  );
}
var hx = {
  name: "dragArea",
  props: [
    "dragArea",
    "passDragArea"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  render: function(t, e) {
    var r = t.props, n = r.target, o = r.dragArea, i = r.groupable, a = r.passDragArea, s = t.getState(), c = s.width, l = s.height, u = s.renderPoses, f = a ? st("area", "pass") : st("area");
    if (i)
      return [
        e.createElement("div", { key: "area", ref: rn(t, "areaElement"), className: f }),
        zh(e)
      ];
    if (!n || !o)
      return [];
    var d = sd([0, 0], [c, 0], [0, l], [c, l], u[0], u[1], u[2], u[3]), p = d.length ? Pc(d, !0) : "none";
    return [
      e.createElement("div", { key: "area", ref: rn(t, "areaElement"), className: f, style: {
        top: "0px",
        left: "0px",
        width: "".concat(c, "px"),
        height: "".concat(l, "px"),
        transformOrigin: "0 0",
        transform: p
      } }),
      zh(e)
    ];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.clientX, o = e.clientY, i = e.inputEvent;
    if (!i)
      return !1;
    r.isDragArea = !1;
    var a = t.areaElement, s = t.state, c = s.moveableClientRect, l = s.renderPoses, u = s.rootMatrix, f = s.is3d, d = c.left, p = c.top, g = Ve(l), h = g.left, m = g.top, y = g.width, x = g.height, b = f ? 4 : 3, w = I(ko(u, [n - d, o - p], b), 2), _ = w[0], E = w[1];
    _ -= h, E -= m;
    var C = [
      { left: h, top: m, width: y, height: E - 10 },
      { left: h, top: m, width: _ - 10, height: x },
      { left: h, top: m + E + 10, width: y, height: x - E - 10 },
      { left: h + _ + 10, top: m, width: y - _ - 10, height: x }
    ], T = [].slice.call(a.nextElementSibling.children);
    C.forEach(function(R, D) {
      T[D].style.cssText = "left: ".concat(R.left, "px;top: ").concat(R.top, "px; width: ").concat(R.width, "px; height: ").concat(R.height, "px;");
    }), ji(a, px), s.disableNativeEvent = !0;
  },
  drag: function(t, e) {
    var r = e.datas, n = e.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    r.isDragArea || (r.isDragArea = !0, _l(t));
  },
  dragEnd: function(t, e) {
    this.enableNativeEvent(t);
    var r = e.inputEvent, n = e.datas;
    if (!r)
      return !1;
    n.isDragArea || _l(t);
  },
  dragGroupStart: function(t, e) {
    return this.dragStart(t, e);
  },
  dragGroup: function(t, e) {
    return this.drag(t, e);
  },
  dragGroupEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  unset: function(t) {
    _l(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var e = t.state;
    e.disableNativeEvent && hs(function() {
      e.disableNativeEvent = !1;
    });
  }
}, zk = ha("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, e) {
    var r = t.props, n = r.zoom, o = r.svgOrigin, i = r.groupable, a = t.getState(), s = a.beforeOrigin, c = a.rotation, l = a.svg, u = a.allMatrix, f = a.is3d, d = a.left, p = a.top, g = a.offsetWidth, h = a.offsetHeight, m;
    if (!i && l && o) {
      var y = I(Dd(o, g, h), 2), x = y[0], b = y[1], w = f ? 4 : 3, _ = Gt(u, [x, b], w);
      m = Is(c, n, lt(_, [d, p]));
    } else
      m = Is(c, n, s);
    return [
      e.createElement("div", { className: st("control", "origin"), style: m, key: "beforeOrigin" })
    ];
  }
});
function Gk(t) {
  var e = t.scrollContainer;
  return [
    e.scrollLeft,
    e.scrollTop
  ];
}
var $k = {
  name: "scrollable",
  canPinch: !0,
  props: [
    "scrollable",
    "scrollContainer",
    "scrollThreshold",
    "scrollThrottleTime",
    "getScrollPosition",
    "scrollOptions"
  ],
  events: [
    "scroll",
    "scrollGroup"
  ],
  dragRelation: "strong",
  dragStart: function(t, e) {
    var r = t.props, n = r.scrollContainer, o = n === void 0 ? t.getContainer() : n, i = r.scrollOptions, a = new d1(), s = gr(o, !0);
    e.datas.dragScroll = a, t.state.dragScroll = a;
    var c = e.isControl ? "controlGesto" : "targetGesto", l = e.targets;
    a.on("scroll", function(u) {
      var f = u.container, d = u.direction, p = vt(t, e, {
        scrollContainer: f,
        direction: d
      }), g = l ? "onScrollGroup" : "onScroll";
      l && (p.targets = l), it(t, g, p);
    }).on("move", function(u) {
      var f = u.offsetX, d = u.offsetY, p = u.inputEvent;
      t[c].scrollBy(f, d, p.inputEvent, !1);
    }).on("scrollDrag", function(u) {
      var f = u.next;
      f(t[c].getCurrentEvent());
    }), a.dragStart(e, A({ container: s }, i));
  },
  checkScroll: function(t, e) {
    var r = e.datas.dragScroll;
    if (r) {
      var n = t.props, o = n.scrollContainer, i = o === void 0 ? t.getContainer() : o, a = n.scrollThreshold, s = a === void 0 ? 0 : a, c = n.scrollThrottleTime, l = c === void 0 ? 0 : c, u = n.getScrollPosition, f = u === void 0 ? Gk : u, d = n.scrollOptions;
      return r.drag(e, A({ container: i, threshold: s, throttleTime: l, getScrollPosition: function(p) {
        return f({ scrollContainer: p.container, direction: p.direction });
      } }, d)), !0;
    }
  },
  drag: function(t, e) {
    return this.checkScroll(t, e);
  },
  dragEnd: function(t, e) {
    e.datas.dragScroll.dragEnd(), e.datas.dragScroll = null;
  },
  dragControlStart: function(t, e) {
    return this.dragStart(t, A(A({}, e), { isControl: !0 }));
  },
  dragControl: function(t, e) {
    return this.drag(t, e);
  },
  dragControlEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  dragGroupStart: function(t, e) {
    return this.dragStart(t, A(A({}, e), { targets: t.props.targets }));
  },
  dragGroup: function(t, e) {
    return this.drag(t, A(A({}, e), { targets: t.props.targets }));
  },
  dragGroupEnd: function(t, e) {
    return this.dragEnd(t, A(A({}, e), { targets: t.props.targets }));
  },
  dragGroupControlStart: function(t, e) {
    return this.dragStart(t, A(A({}, e), { targets: t.props.targets, isControl: !0 }));
  },
  dragGroupControl: function(t, e) {
    return this.drag(t, A(A({}, e), { targets: t.props.targets }));
  },
  dragGroupControEnd: function(t, e) {
    return this.dragEnd(t, A(A({}, e), { targets: t.props.targets }));
  },
  unset: function(t) {
    var e, r = t.state;
    (e = r.dragScroll) === null || e === void 0 || e.dragEnd(), r.dragScroll = null;
  }
}, vx = {
  name: "",
  props: [
    "target",
    "dragTargetSelf",
    "dragTarget",
    "dragContainer",
    "container",
    "warpSelf",
    "rootContainer",
    "useResizeObserver",
    "useMutationObserver",
    "zoom",
    "dragFocusedInput",
    "transformOrigin",
    "ables",
    "className",
    "pinchThreshold",
    "pinchOutside",
    "triggerAblesSimultaneously",
    "checkInput",
    "cspNonce",
    "translateZ",
    "hideDefaultLines",
    "props",
    "flushSync",
    "stopPropagation",
    "preventClickEventOnDrag",
    "preventClickDefault",
    "viewContainer",
    "persistData",
    "useAccuratePosition",
    "firstRenderState",
    "linePadding",
    "controlPadding",
    "preventDefault",
    "preventRightClick",
    "preventWheelClick",
    "requestStyles"
  ],
  events: [
    "changeTargets"
  ]
}, Vk = ha("padding", {
  props: ["padding"],
  render: function(t, e) {
    var r = t.props;
    if (r.dragArea)
      return [];
    var n = dx(r.padding || {}), o = n.left, i = n.top, a = n.right, s = n.bottom, c = t.getState(), l = c.renderPoses, u = c.pos1, f = c.pos2, d = c.pos3, p = c.pos4, g = [u, f, d, p], h = [];
    return o > 0 && h.push([0, 2]), i > 0 && h.push([0, 1]), a > 0 && h.push([1, 3]), s > 0 && h.push([2, 3]), h.map(function(m, y) {
      var x = I(m, 2), b = x[0], w = x[1], _ = g[b], E = g[w], C = l[b], T = l[w], R = sd([0, 0], [100, 0], [0, 100], [100, 100], _, E, C, T);
      if (R.length)
        return e.createElement("div", { key: "padding".concat(y), className: st("padding"), style: {
          transform: Pc(R, !0)
        } });
    });
  }
}), Gh = ["nw", "ne", "se", "sw"];
function rs(t, e) {
  var r = t[0] + t[1], n = r > e ? e / r : 1;
  return t[0] *= n, t[1] = e - t[1] * n, t;
}
var Wk = [1, 2, 5, 6], Hk = [0, 3, 4, 7], _n = [1, -1, -1, 1], Tn = [1, 1, -1, -1];
function Md(t, e, r, n, o, i, a, s) {
  o === void 0 && (o = 0), i === void 0 && (i = 0), a === void 0 && (a = r), s === void 0 && (s = n);
  var c = [], l = !1, u = t.filter(function(d) {
    return !d.virtual;
  }), f = u.map(function(d) {
    var p = d.horizontal, g = d.vertical, h = d.pos;
    if (g && !l && (l = !0, c.push("/")), l) {
      var m = Math.max(0, g === 1 ? h[1] - i : s - h[1]);
      return c.push(Qe(m, n, e)), m;
    } else {
      var m = Math.max(0, p === 1 ? h[0] - o : a - h[0]);
      return c.push(Qe(m, r, e)), m;
    }
  });
  return {
    radiusPoses: u,
    styles: c,
    raws: f
  };
}
function gx(t) {
  for (var e = [0, 0], r = [0, 0], n = t.length, o = 0; o < n; ++o) {
    var i = t[o];
    i.sub && (i.horizontal && (e[1] === 0 && (e[0] = o), e[1] = o - e[0] + 1, r[0] = o + 1), i.vertical && (r[1] === 0 && (r[0] = o), r[1] = o - r[0] + 1));
  }
  return {
    horizontalRange: e,
    verticalRange: r
  };
}
function mx(t, e, r, n, o, i, a) {
  var s, c, l, u;
  i === void 0 && (i = [0, 0]), a === void 0 && (a = !1);
  var f = t.indexOf("/"), d = (f > -1 ? t.slice(0, f) : t).length, p = t.slice(0, d), g = t.slice(d + 1), h = p.length, m = g.length, y = m > 0, x = I(p, 4), b = x[0], w = b === void 0 ? "0px" : b, _ = x[1], E = _ === void 0 ? w : _, C = x[2], T = C === void 0 ? w : C, R = x[3], D = R === void 0 ? E : R, N = I(g, 4), M = N[0], O = M === void 0 ? w : M, k = N[1], F = k === void 0 ? y ? O : E : k, $ = N[2], V = $ === void 0 ? y ? O : T : $, L = N[3], z = L === void 0 ? y ? F : D : L, j = [w, E, T, D].map(function(Q) {
    return Mt(Q, e);
  }), B = [O, F, V, z].map(function(Q) {
    return Mt(Q, r);
  }), Y = j.slice(), K = B.slice();
  s = I(rs([Y[0], Y[1]], e), 2), Y[0] = s[0], Y[1] = s[1], c = I(rs([Y[3], Y[2]], e), 2), Y[3] = c[0], Y[2] = c[1], l = I(rs([K[0], K[3]], r), 2), K[0] = l[0], K[3] = l[1], u = I(rs([K[1], K[2]], r), 2), K[1] = u[0], K[2] = u[1];
  var X = a ? Y : Y.slice(0, Math.max(i[0], h)), H = a ? K : K.slice(0, Math.max(i[1], m));
  return tt(tt([], I(X.map(function(Q, W) {
    var q = Gh[W];
    return {
      virtual: W >= h,
      horizontal: _n[W],
      vertical: 0,
      pos: [n + Q, o + (Tn[W] === -1 ? r : 0)],
      sub: !0,
      raw: j[W],
      direction: q
    };
  })), !1), I(H.map(function(Q, W) {
    var q = Gh[W];
    return {
      virtual: W >= m,
      horizontal: 0,
      vertical: Tn[W],
      pos: [n + (_n[W] === -1 ? e : 0), o + Q],
      sub: !0,
      raw: B[W],
      direction: q
    };
  })), !1);
}
function Yk(t, e, r, n, o) {
  o === void 0 && (o = e.length);
  var i = gx(t.slice(n)), a = i.horizontalRange, s = i.verticalRange, c = r - n, l = 0;
  if (c === 0)
    l = o;
  else if (c > 0 && c < a[1])
    l = a[1] - c;
  else if (c >= s[0])
    l = s[0] + s[1] - c;
  else
    return;
  t.splice(r, l), e.splice(r, l);
}
function Uk(t, e, r, n, o, i, a, s, c, l, u) {
  l === void 0 && (l = 0), u === void 0 && (u = 0);
  var f = gx(t.slice(r)), d = f.horizontalRange, p = f.verticalRange;
  if (n > -1)
    for (var g = _n[n] === 1 ? i - l : s - i, h = d[1]; h <= n; ++h) {
      var m = Tn[h] === 1 ? u : c, y = 0;
      if (n === h ? y = i : h === 0 ? y = l + g : _n[h] === -1 && (y = s - (e[r][0] - l)), t.splice(r + h, 0, {
        horizontal: _n[h],
        vertical: 0,
        pos: [y, m]
      }), e.splice(r + h, 0, [y, m]), h === 0)
        break;
    }
  else if (o > -1) {
    var x = Tn[o] === 1 ? a - u : c - a;
    if (d[1] === 0 && p[1] === 0) {
      var b = [
        l + x,
        u
      ];
      t.push({
        horizontal: _n[0],
        vertical: 0,
        pos: b
      }), e.push(b);
    }
    for (var w = p[0], h = p[1]; h <= o; ++h) {
      var y = _n[h] === 1 ? l : s, m = 0;
      if (o === h ? m = a : h === 0 ? m = u + x : Tn[h] === 1 ? m = e[r + w][1] : Tn[h] === -1 && (m = c - (e[r + w][1] - u)), t.push({
        horizontal: 0,
        vertical: Tn[h],
        pos: [y, m]
      }), e.push([y, m]), h === 0)
        break;
    }
  }
}
function Xk(t, e) {
  e === void 0 && (e = t.map(function(o) {
    return o.raw;
  }));
  var r = t.map(function(o, i) {
    return o.horizontal ? e[i] : null;
  }).filter(function(o) {
    return o != null;
  }), n = t.map(function(o, i) {
    return o.vertical ? e[i] : null;
  }).filter(function(o) {
    return o != null;
  });
  return {
    horizontals: r,
    verticals: n
  };
}
var qk = [
  [0, -1, "n"],
  [1, 0, "e"]
], Kk = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function Pd(t, e, r) {
  var n = t.props.clipRelative, o = t.state, i = o.width, a = o.height, s = e, c = s.type, l = s.poses, u = c === "rect", f = c === "circle";
  if (c === "polygon")
    return r.map(function(E) {
      return "".concat(Qe(E[0], i, n), " ").concat(Qe(E[1], a, n));
    });
  if (u || c === "inset") {
    var d = r[1][1], p = r[3][0], g = r[7][0], h = r[5][1];
    if (u)
      return [
        d,
        p,
        h,
        g
      ].map(function(E) {
        return "".concat(E, "px");
      });
    var m = [d, i - p, a - h, g].map(function(E, C) {
      return Qe(E, C % 2 ? i : a, n);
    });
    if (r.length > 8) {
      var y = I(lt(r[4], r[0]), 2), x = y[0], b = y[1];
      m.push.apply(m, tt(["round"], I(Md(l.slice(8).map(function(E, C) {
        return A(A({}, E), { pos: r[C] });
      }), n, x, b, g, d, p, h).styles), !1));
    }
    return m;
  } else if (f || c === "ellipse") {
    var w = r[0], _ = Qe(Z(r[1][1] - w[1]), f ? Math.sqrt((i * i + a * a) / 2) : a, n), m = f ? [_] : [Qe(Z(r[2][0] - w[0]), i, n), _];
    return m.push("at", Qe(w[0], i, n), Qe(w[1], a, n)), m;
  }
}
function Bs(t, e, r, n) {
  var o = [n, (n + e) / 2, e], i = [t, (t + r) / 2, r];
  return Kk.map(function(a) {
    var s = I(a, 3), c = s[0], l = s[1], u = s[2], f = o[c + 1], d = i[l + 1];
    return {
      vertical: Z(l),
      horizontal: Z(c),
      direction: u,
      pos: [f, d]
    };
  });
}
function yx(t) {
  var e = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var o = n.pos;
    e[0] = Math.min(e[0], o[0]), e[1] = Math.max(e[1], o[0]), r[0] = Math.min(r[0], o[1]), r[1] = Math.max(r[1], o[1]);
  }), [
    Z(e[1] - e[0]),
    Z(r[1] - r[0])
  ];
}
function $h(t, e, r, n, o) {
  var i, a, s, c, l, u, f, d, p;
  if (t) {
    var g = o;
    if (!g) {
      var h = Ce(t), m = h("clipPath");
      g = m !== "none" ? m : h("clip");
    }
    if (!((!g || g === "none" || g === "auto") && (g = n, !g))) {
      var y = Ws(g), x = y.prefix, b = x === void 0 ? g : x, w = y.value, _ = w === void 0 ? "" : w, E = b === "circle", C = " ";
      if (b === "polygon") {
        var T = ze(_ || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        C = ",";
        var R = T.map(function(qt) {
          var se = I(qt.split(" "), 2), oe = se[0], Vt = se[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              Mt(oe, e),
              Mt(Vt, r)
            ]
          };
        }), D = zn(R.map(function(qt) {
          return qt.pos;
        }));
        return {
          type: b,
          clipText: g,
          poses: R,
          splitter: C,
          left: D.minX,
          right: D.maxX,
          top: D.minY,
          bottom: D.maxY
        };
      } else if (E || b === "ellipse") {
        var N = "", M = "", O = 0, k = 0, T = Or(_);
        if (E) {
          var F = "";
          i = I(T, 4), a = i[0], F = a === void 0 ? "50%" : a, s = i[2], N = s === void 0 ? "50%" : s, c = i[3], M = c === void 0 ? "50%" : c, O = Mt(F, Math.sqrt((e * e + r * r) / 2)), k = O;
        } else {
          var $ = "", V = "";
          l = I(T, 5), u = l[0], $ = u === void 0 ? "50%" : u, f = l[1], V = f === void 0 ? "50%" : f, d = l[3], N = d === void 0 ? "50%" : d, p = l[4], M = p === void 0 ? "50%" : p, O = Mt($, e), k = Mt(V, r);
        }
        var L = [
          Mt(N, e),
          Mt(M, r)
        ], R = tt([
          {
            vertical: 1,
            horizontal: 1,
            pos: L,
            direction: "nesw"
          }
        ], I(qk.slice(0, E ? 1 : 2).map(function(oe) {
          return {
            vertical: Z(oe[1]),
            horizontal: oe[0],
            direction: oe[2],
            sub: !0,
            pos: [
              L[0] + oe[0] * O,
              L[1] + oe[1] * k
            ]
          };
        })), !1);
        return {
          type: b,
          clipText: g,
          radiusX: O,
          radiusY: k,
          left: L[0] - O,
          top: L[1] - k,
          right: L[0] + O,
          bottom: L[1] + k,
          poses: R,
          splitter: C
        };
      } else if (b === "inset") {
        var T = Or(_ || "0 0 0 0"), z = T.indexOf("round"), j = (z > -1 ? T.slice(0, z) : T).length, B = T.slice(j + 1), Y = I(T.slice(0, j), 4), K = Y[0], X = Y[1], H = X === void 0 ? K : X, Q = Y[2], W = Q === void 0 ? K : Q, q = Y[3], ot = q === void 0 ? H : q, nt = I([K, W].map(function(oe) {
          return Mt(oe, r);
        }), 2), U = nt[0], et = nt[1], dt = I([ot, H].map(function(oe) {
          return Mt(oe, e);
        }), 2), ct = dt[0], ft = dt[1], ht = e - ft, Ct = r - et, Rt = mx(B, ht - ct, Ct - U, ct, U), R = tt(tt([], I(Bs(U, ht, Ct, ct)), !1), I(Rt), !1);
        return {
          type: "inset",
          clipText: g,
          poses: R,
          top: U,
          left: ct,
          right: ht,
          bottom: Ct,
          radius: B,
          splitter: C
        };
      } else if (b === "rect") {
        var T = ze(_ || "0px, ".concat(e, "px, ").concat(r, "px, 0px"));
        C = ",";
        var mt = I(T.map(function(cr) {
          var Ee = mr(cr).value;
          return Ee;
        }), 4), _t = mt[0], ft = mt[1], et = mt[2], ct = mt[3], R = Bs(_t, ft, et, ct);
        return {
          type: "rect",
          clipText: g,
          poses: R,
          top: _t,
          right: ft,
          bottom: et,
          left: ct,
          values: T,
          splitter: C
        };
      }
    }
  }
}
function Zk(t, e, r, n, o) {
  var i = t[e], a = i.direction, s = i.sub, c = t.map(function() {
    return [0, 0];
  }), l = a ? a.split("") : [];
  if (n && e < 8) {
    var u = l.filter(function(O) {
      return O === "w" || O === "e";
    }), f = l.filter(function(O) {
      return O === "n" || O === "s";
    }), d = u[0], p = f[0];
    c[e] = r;
    var g = I(yx(t), 2), h = g[0], m = g[1], y = h && m ? h / m : 0;
    if (y && o) {
      var x = (e + 4) % 8, b = t[x].pos, w = [0, 0];
      a.indexOf("w") > -1 ? w[0] = -1 : a.indexOf("e") > -1 && (w[0] = 1), a.indexOf("n") > -1 ? w[1] = -1 : a.indexOf("s") > -1 && (w[1] = 1);
      var _ = lx([h, m], r, y, w, !0), E = h + _[0], C = m + _[1], T = b[1], R = b[1], D = b[0], N = b[0];
      w[0] === -1 ? D = N - E : w[0] === 1 ? N = D + E : (D = D - E / 2, N = N + E / 2), w[1] === -1 ? T = R - C : (w[1] === 1 || (T = R - C / 2), R = T + C);
      var M = Bs(T, N, R, D);
      t.forEach(function(O, k) {
        c[k][0] = M[k].pos[0] - O.pos[0], c[k][1] = M[k].pos[1] - O.pos[1];
      });
    } else
      t.forEach(function(O, k) {
        var F = O.direction;
        F && (F.indexOf(d) > -1 && (c[k][0] = r[0]), F.indexOf(p) > -1 && (c[k][1] = r[1]));
      }), d && (c[1][0] = r[0] / 2, c[5][0] = r[0] / 2), p && (c[3][1] = r[1] / 2, c[7][1] = r[1] / 2);
  } else a && !s ? l.forEach(function(O) {
    var k = O === "n" || O === "s";
    t.forEach(function(F, $) {
      var V = F.direction, L = F.horizontal, z = F.vertical;
      !V || V.indexOf(O) === -1 || (c[$] = [
        k || !L ? 0 : r[0],
        !k || !z ? 0 : r[1]
      ]);
    });
  }) : c[e] = r;
  return c;
}
function Jk(t, e) {
  var r = I(S1(t, e), 2), n = r[0], o = r[1], i = e.datas, a = i.clipPath, s = i.clipIndex, c = a, l = c.type, u = c.poses, f = c.splitter, d = u.map(function(x) {
    return x.pos;
  });
  if (l === "polygon")
    d.splice(s, 0, [n, o]);
  else if (l === "inset") {
    var p = Wk.indexOf(s), g = Hk.indexOf(s), h = u.length;
    if (Uk(u, d, 8, p, g, n, o, d[4][0], d[4][1], d[0][0], d[0][1]), h === u.length)
      return;
  } else
    return;
  var m = Pd(t, a, d), y = "".concat(l, "(").concat(m.join(f), ")");
  it(t, "onClip", vt(t, e, A({ clipEventType: "added", clipType: l, poses: d, clipStyles: m, clipStyle: y, distX: 0, distY: 0 }, me({
    clipPath: y
  }, e))));
}
function Qk(t, e) {
  var r = e.datas, n = r.clipPath, o = r.clipIndex, i = n, a = i.type, s = i.poses, c = i.splitter, l = s.map(function(p) {
    return p.pos;
  }), u = l.length;
  if (a === "polygon")
    s.splice(o, 1), l.splice(o, 1);
  else if (a === "inset") {
    if (o < 8 || (Yk(s, l, o, 8, u), u === s.length))
      return;
  } else
    return;
  var f = Pd(t, n, l), d = "".concat(a, "(").concat(f.join(c), ")");
  it(t, "onClip", vt(t, e, A({ clipEventType: "removed", clipType: a, poses: l, clipStyles: f, clipStyle: d, distX: 0, distY: 0 }, me({
    clipPath: d
  }, e))));
}
var tA = {
  name: "clippable",
  props: [
    "clippable",
    "defaultClipPath",
    "customClipPath",
    "keepRatio",
    "clipRelative",
    "clipArea",
    "dragWithClip",
    "clipTargetBounds",
    "clipVerticalGuidelines",
    "clipHorizontalGuidelines",
    "clipSnapThreshold"
  ],
  events: [
    "clipStart",
    "clip",
    "clipEnd"
  ],
  css: [
    `.control.clip-control {
background: #6d6;
cursor: pointer;
}
.control.clip-control.clip-radius {
background: #d66;
}
.line.clip-line {
background: #6e6;
cursor: move;
z-index: 1;
}
.clip-area {
position: absolute;
top: 0;
left: 0;
}
.clip-ellipse {
position: absolute;
cursor: move;
border: 1px solid #6d6;
border: var(--zoompx) solid #6d6;
border-radius: 50%;
transform-origin: 0px 0px;
}`,
    `:host {
--bounds-color: #d66;
}`,
    `.guideline {
pointer-events: none;
z-index: 2;
}`,
    `.line.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.customClipPath, o = r.defaultClipPath, i = r.clipArea, a = r.zoom, s = r.groupable, c = t.getState(), l = c.target, u = c.width, f = c.height, d = c.allMatrix, p = c.is3d, g = c.left, h = c.top, m = c.pos1, y = c.pos2, x = c.pos3, b = c.pos4, w = c.clipPathState, _ = c.snapBoundInfos, E = c.rotation;
    if (!l || s)
      return [];
    var C = $h(l, u, f, o || "inset", w || n);
    if (!C)
      return [];
    var T = p ? 4 : 3, R = C.type, D = C.poses, N = D.map(function(ft) {
      var ht = Gt(d, ft.pos, T);
      return [
        ht[0] - g,
        ht[1] - h
      ];
    }), M = [], O = [], k = R === "rect", F = R === "inset", $ = R === "polygon";
    if (k || F || $) {
      var V = F ? N.slice(0, 8) : N;
      O = V.map(function(ft, ht) {
        var Ct = ht === 0 ? V[V.length - 1] : V[ht - 1], Rt = Xt(Ct, ft), mt = tx(Ct, ft);
        return e.createElement("div", { key: "clipLine".concat(ht), className: st("line", "clip-line", "snap-control"), "data-clip-index": ht, style: {
          width: "".concat(mt, "px"),
          transform: "translate(".concat(Ct[0], "px, ").concat(Ct[1], "px) rotate(").concat(Rt, "rad) scaleY(").concat(a, ")")
        } });
      });
    }
    if (M = N.map(function(ft, ht) {
      return e.createElement("div", { key: "clipControl".concat(ht), className: st("control", "clip-control", "snap-control"), "data-clip-index": ht, style: {
        transform: "translate(".concat(ft[0], "px, ").concat(ft[1], "px) rotate(").concat(E, "rad) scale(").concat(a, ")")
      } });
    }), F && M.push.apply(M, tt([], I(N.slice(8).map(function(ft, ht) {
      return e.createElement("div", { key: "clipRadiusControl".concat(ht), className: st("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + ht, style: {
        transform: "translate(".concat(ft[0], "px, ").concat(ft[1], "px) rotate(").concat(E, "rad) scale(").concat(a, ")")
      } });
    })), !1)), R === "circle" || R === "ellipse") {
      var L = C.left, z = C.top, j = C.radiusX, B = C.radiusY, Y = I(lt(Gt(d, [L, z], T), Gt(d, [0, 0], T)), 2), K = Y[0], X = Y[1], H = "none";
      if (!i) {
        for (var Q = Math.max(10, j / 5, B / 5), W = [], q = 0; q <= Q; ++q) {
          var ot = Math.PI * 2 / Q * q;
          W.push([
            j + (j - a) * Math.cos(ot),
            B + (B - a) * Math.sin(ot)
          ]);
        }
        W.push([j, -2]), W.push([-2, -2]), W.push([-2, B * 2 + 2]), W.push([j * 2 + 2, B * 2 + 2]), W.push([j * 2 + 2, -2]), W.push([j, -2]), H = "polygon(".concat(W.map(function(ft) {
          return "".concat(ft[0], "px ").concat(ft[1], "px");
        }).join(", "), ")");
      }
      M.push(e.createElement("div", { key: "clipEllipse", className: st("clip-ellipse", "snap-control"), style: {
        width: "".concat(j * 2, "px"),
        height: "".concat(B * 2, "px"),
        clipPath: H,
        transform: "translate(".concat(-g + K, "px, ").concat(-h + X, "px) ").concat(Pc(d))
      } }));
    }
    if (i) {
      var nt = Ve(tt([m, y, x, b], I(N), !1)), U = nt.width, et = nt.height, dt = nt.left, ct = nt.top;
      if ($ || k || F) {
        var W = F ? N.slice(0, 8) : N;
        M.push(e.createElement("div", { key: "clipArea", className: st("clip-area", "snap-control"), style: {
          width: "".concat(U, "px"),
          height: "".concat(et, "px"),
          transform: "translate(".concat(dt, "px, ").concat(ct, "px)"),
          clipPath: "polygon(".concat(W.map(function(ht) {
            return "".concat(ht[0] - dt, "px ").concat(ht[1] - ct, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return _ && ["vertical", "horizontal"].forEach(function(ft) {
      var ht = _[ft], Ct = ft === "horizontal";
      ht.isSnap && O.push.apply(O, tt([], I(ht.snap.posInfos.map(function(Rt, mt) {
        var _t = Rt.pos, qt = lt(Gt(d, Ct ? [0, _t] : [_t, 0], T), [g, h]), se = lt(Gt(d, Ct ? [u, _t] : [_t, f], T), [g, h]);
        return Qi(e, "", qt, se, a, "clip".concat(ft, "snap").concat(mt), "guideline");
      })), !1)), ht.isBound && O.push.apply(O, tt([], I(ht.bounds.map(function(Rt, mt) {
        var _t = Rt.pos, qt = lt(Gt(d, Ct ? [0, _t] : [_t, 0], T), [g, h]), se = lt(Gt(d, Ct ? [u, _t] : [_t, f], T), [g, h]);
        return Qi(e, "", qt, se, a, "clip".concat(ft, "bounds").concat(mt), "guideline", "bounds", "bold");
      })), !1));
    }), tt(tt([], I(M), !1), I(O), !1);
  },
  dragControlCondition: function(t, e) {
    return e.inputEvent && (e.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1;
  },
  dragStart: function(t, e) {
    var r = t.props, n = r.dragWithClip, o = n === void 0 ? !0 : n;
    return o ? !1 : this.dragControlStart(t, e);
  },
  drag: function(t, e) {
    return this.dragControl(t, A(A({}, e), { isDragTarget: !0 }));
  },
  dragEnd: function(t, e) {
    return this.dragControlEnd(t, e);
  },
  dragControlStart: function(t, e) {
    var r = t.state, n = t.props, o = n.defaultClipPath, i = n.customClipPath, a = r.target, s = r.width, c = r.height, l = e.inputEvent ? e.inputEvent.target : null, u = l && l.getAttribute("class") || "", f = e.datas, d = $h(a, s, c, o || "inset", i);
    if (!d)
      return !1;
    var p = d.clipText, g = d.type, h = d.poses, m = it(t, "onClipStart", vt(t, e, {
      clipType: g,
      clipStyle: p,
      poses: h.map(function(y) {
        return y.pos;
      })
    }));
    return m === !1 ? (f.isClipStart = !1, !1) : (f.isControl = u && u.indexOf("clip-control") > -1, f.isLine = u.indexOf("clip-line") > -1, f.isArea = u.indexOf("clip-area") > -1 || u.indexOf("clip-ellipse") > -1, f.clipIndex = l ? parseInt(l.getAttribute("data-clip-index"), 10) : -1, f.clipPath = d, f.isClipStart = !0, r.clipPathState = p, Wn(t, e), !0);
  },
  dragControl: function(t, e) {
    var r, n, o, i = e.datas, a = e.originalDatas, s = e.isDragTarget;
    if (!i.isClipStart)
      return !1;
    var c = i, l = c.isControl, u = c.isLine, f = c.isArea, d = c.clipIndex, p = c.clipPath;
    if (!p)
      return !1;
    var g = Gn(t.props, "clippable"), h = g.keepRatio, m = 0, y = 0, x = a.draggable, b = _r(e);
    s && x ? (r = I(x.prevBeforeDist, 2), m = r[0], y = r[1]) : (n = I(b, 2), m = n[0], y = n[1]);
    var w = [m, y], _ = t.state, E = _.width, C = _.height, T = !f && !l && !u, R = p.type, D = p.poses, N = p.splitter, M = D.map(function(Dt) {
      return Dt.pos;
    });
    T && (m = -m, y = -y);
    var O = !l || D[d].direction === "nesw", k = R === "inset" || R === "rect", F = D.map(function() {
      return [0, 0];
    });
    if (l && !O) {
      var $ = D[d], V = $.horizontal, L = $.vertical, z = [
        m * Z(V),
        y * Z(L)
      ];
      F = Zk(D, d, z, k, h);
    } else O && (F = M.map(function() {
      return [m, y];
    }));
    var j = M.map(function(Dt, ce) {
      return Et(Dt, F[ce]);
    }), B = tt([], I(j), !1);
    _.snapBoundInfos = null;
    var Y = p.type === "circle", K = p.type === "ellipse";
    if (Y || K) {
      var X = Ve(j), H = Z(X.bottom - X.top), Q = Z(K ? X.right - X.left : H), W = j[0][1] + H, q = j[0][0] - Q, ot = j[0][0] + Q;
      Y && (B.push([ot, X.bottom]), F.push([1, 0])), B.push([X.left, W]), F.push([0, 1]), B.push([q, X.bottom]), F.push([1, 0]);
    }
    var nt = X1((g.clipHorizontalGuidelines || []).map(function(Dt) {
      return Mt("".concat(Dt), C);
    }), (g.clipVerticalGuidelines || []).map(function(Dt) {
      return Mt("".concat(Dt), E);
    }), E, C), U = [], et = [];
    if (Y || K)
      U = [B[4][0], B[2][0]], et = [B[1][1], B[3][1]];
    else if (k) {
      var dt = [B[0], B[2], B[4], B[6]], ct = [F[0], F[2], F[4], F[6]];
      U = dt.filter(function(Dt, ce) {
        return ct[ce][0];
      }).map(function(Dt) {
        return Dt[0];
      }), et = dt.filter(function(Dt, ce) {
        return ct[ce][1];
      }).map(function(Dt) {
        return Dt[1];
      });
    } else
      U = B.filter(function(Dt, ce) {
        return F[ce][0];
      }).map(function(Dt) {
        return Dt[0];
      }), et = B.filter(function(Dt, ce) {
        return F[ce][1];
      }).map(function(Dt) {
        return Dt[1];
      });
    var ft = [0, 0], ht = Th(nt, g.clipTargetBounds && { left: 0, top: 0, right: E, bottom: C }, U, et, 5, 5), Ct = ht.horizontal, Rt = ht.vertical, mt = Ct.offset, _t = Rt.offset;
    if (Ct.isBound && (ft[1] += mt), Rt.isBound && (ft[0] += _t), (K || Y) && F[0][0] === 0 && F[0][1] === 0) {
      var X = Ve(j), qt = X.bottom - X.top, se = K ? X.right - X.left : qt, oe = Rt.isBound ? Z(_t) : Rt.snapIndex === 0 ? -_t : _t, Vt = Ct.isBound ? Z(mt) : Ct.snapIndex === 0 ? -mt : mt;
      se -= oe, qt -= Vt, Y && (qt = z1(Rt, Ct) > 0 ? qt : se, se = qt);
      var Yt = B[0];
      B[1][1] = Yt[1] - qt, B[2][0] = Yt[0] + se, B[3][1] = Yt[1] + qt, B[4][0] = Yt[0] - se;
    } else if (k && h && l) {
      var cr = I(yx(D), 2), Ee = cr[0], Yn = cr[1], Xo = Ee && Yn ? Ee / Yn : 0, ke = D[d], vn = ke.direction || "", Un = B[1][1], W = B[5][1], q = B[7][0], ot = B[3][0];
      Z(mt) <= Z(_t) ? mt = ge(mt) * Z(_t) / Xo : _t = ge(_t) * Z(mt) * Xo, vn.indexOf("w") > -1 ? q -= _t : vn.indexOf("e") > -1 ? ot -= _t : (q += _t / 2, ot -= _t / 2), vn.indexOf("n") > -1 ? Un -= mt : vn.indexOf("s") > -1 ? W -= mt : (Un += mt / 2, W -= mt / 2);
      var Ac = Bs(Un, ot, W, q);
      B.forEach(function(Xn, gn) {
        var mn;
        mn = I(Ac[gn].pos, 2), Xn[0] = mn[0], Xn[1] = mn[1];
      });
    } else
      B.forEach(function(Dt, ce) {
        var wa = F[ce];
        wa[0] && (Dt[0] -= _t), wa[1] && (Dt[1] -= mt);
      });
    var qo = Pd(t, p, j), Fr = "".concat(R, "(").concat(qo.join(N), ")");
    if (_.clipPathState = Fr, Y || K)
      U = [B[4][0], B[2][0]], et = [B[1][1], B[3][1]];
    else if (k) {
      var dt = [B[0], B[2], B[4], B[6]];
      U = dt.map(function(ce) {
        return ce[0];
      }), et = dt.map(function(ce) {
        return ce[1];
      });
    } else
      U = B.map(function(Dt) {
        return Dt[0];
      }), et = B.map(function(Dt) {
        return Dt[1];
      });
    if (_.snapBoundInfos = Th(nt, g.clipTargetBounds && { left: 0, top: 0, right: E, bottom: C }, U, et, 1, 1), x) {
      var xa = _.is3d, ba = _.allMatrix, jc = xa ? 4 : 3, Xe = ft;
      s && (Xe = [
        w[0] + ft[0] - b[0],
        w[1] + ft[1] - b[1]
      ]), x.deltaOffset = Pt(ba, [Xe[0], Xe[1], 0, 0], jc);
    }
    return it(t, "onClip", vt(t, e, A({ clipEventType: "changed", clipType: R, poses: j, clipStyle: Fr, clipStyles: qo, distX: m, distY: y }, me((o = {}, o[R === "rect" ? "clip" : "clipPath"] = Fr, o), e)))), !0;
  },
  dragControlEnd: function(t, e) {
    this.unset(t);
    var r = e.isDrag, n = e.datas, o = e.isDouble, i = n.isLine, a = n.isClipStart, s = n.isControl;
    return a ? (it(t, "onClipEnd", Oe(t, e, {})), o && (s ? Qk(t, e) : i && Jk(t, e)), o || r) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, eA = {
  name: "originDraggable",
  props: [
    "originDraggable",
    "originRelative"
  ],
  events: [
    "dragOriginStart",
    "dragOrigin",
    "dragOriginEnd"
  ],
  css: [
    `:host[data-able-origindraggable] .control.origin {
pointer-events: auto;
}`
  ],
  dragControlCondition: function(t, e) {
    return e.isRequest ? e.requestAble === "originDraggable" : Ut(e.inputEvent.target, st("origin"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas;
    Wn(t, e);
    var n = vt(t, e, {
      dragStart: ve.dragStart(t, new Po().dragStart([0, 0], e))
    }), o = it(t, "onDragOriginStart", n);
    return r.startOrigin = t.state.transformOrigin, r.startTargetOrigin = t.state.targetOrigin, r.prevOrigin = [0, 0], r.isDragOrigin = !0, o === !1 ? (r.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isPinch, o = e.isRequest;
    if (!r.isDragOrigin)
      return !1;
    var i = I(_r(e), 2), a = i[0], s = i[1], c = t.state, l = c.width, u = c.height, f = c.offsetMatrix, d = c.targetMatrix, p = c.is3d, g = t.props.originRelative, h = g === void 0 ? !0 : g, m = p ? 4 : 3, y = [a, s];
    if (o) {
      var x = e.distOrigin;
      (x[0] || x[1]) && (y = x);
    }
    var b = Et(r.startOrigin, y), w = Et(r.startTargetOrigin, y), _ = lt(y, r.prevOrigin), E = ga(f, d, b, m), C = t.getRect(), T = Ve(Hn(E, l, u, m)), R = [
      C.left - T.left,
      C.top - T.top
    ];
    r.prevOrigin = y;
    var D = [
      Qe(w[0], l, h),
      Qe(w[1], u, h)
    ].join(" "), N = ve.drag(t, va(e, t.state, R, !!n)), M = vt(t, e, A(A({ width: l, height: u, origin: b, dist: y, delta: _, transformOrigin: D, drag: N }, me({
      transformOrigin: D,
      transform: N.transform
    }, e)), { afterTransform: N.transform }));
    return it(t, "onDragOrigin", M), M;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    return r.isDragOrigin ? (it(t, "onDragOriginEnd", Oe(t, e, {})), !0) : !1;
  },
  dragGroupControlCondition: function(t, e) {
    return this.dragControlCondition(t, e);
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    return !!r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    return r ? (t.transformOrigin = r.transformOrigin, !0) : !1;
  },
  /**
      * @method Moveable.OriginDraggable#request
      * @param {object} e - the OriginDraggable's request parameter
      * @param {number} [e.x] - x position
      * @param {number} [e.y] - y position
      * @param {number} [e.deltaX] - x number to move
      * @param {number} [e.deltaY] - y number to move
      * @param {array} [e.deltaOrigin] - left, top number to move transform-origin
      * @param {array} [e.origin] - transform-origin position
      * @param {number} [e.isInstant] - Whether to execute the request instantly
      * @return {Moveable.Requester} Moveable Requester
      * @example
  
      * // Instantly Request (requestStart - request - requestEnd)
      * // Use Relative Value
      * moveable.request("originDraggable", { deltaX: 10, deltaY: 10 }, true);
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 }, true);
      * // Use Transform Value
      * moveable.request("originDraggable", { deltaOrigin: [10, 0] }, true);
      * moveable.request("originDraggable", { origin: [100, 0] }, true);
      * // requestStart
      * const requester = moveable.request("originDraggable");
      *
      * // request
      * // Use Relative Value
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 });
      * moveable.request("originDraggable", { x: 220, y: 100 });
      * moveable.request("originDraggable", { x: 240, y: 100 });
      *
      * // requestEnd
      * requester.requestEnd();
      */
  request: function(t) {
    var e = {}, r = t.getRect(), n = 0, o = 0, i = r.transformOrigin, a = [0, 0];
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: e };
      },
      request: function(s) {
        return "deltaOrigin" in s ? (a[0] += s.deltaOrigin[0], a[1] += s.deltaOrigin[1]) : "origin" in s ? (a[0] = s.origin[0] - i[0], a[1] = s.origin[1] - i[1]) : ("x" in s ? n = s.x - r.left : "deltaX" in s && (n += s.deltaX), "y" in s ? o = s.y - r.top : "deltaY" in s && (o += s.deltaY)), { datas: e, distX: n, distY: o, distOrigin: a };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0 };
      }
    };
  }
};
function rA(t, e, r, n) {
  var o = t.filter(function(c) {
    var l = c.virtual, u = c.horizontal;
    return u && !l;
  }).length, i = t.filter(function(c) {
    var l = c.virtual, u = c.vertical;
    return u && !l;
  }).length, a = -1;
  if (e === 0 && (o === 0 ? a = 0 : o === 1 && (a = 1)), e === 2 && (o <= 2 ? a = 2 : o <= 3 && (a = 3)), e === 3 && (i === 0 ? a = 4 : i < 4 && (a = 7)), e === 1 && (i <= 1 ? a = 5 : i <= 2 && (a = 6)), !(a === -1 || !t[a].virtual)) {
    var s = t[a];
    nA(t, a), a < 4 ? s.pos[0] = r : s.pos[1] = n;
  }
}
function nA(t, e) {
  e < 4 ? t.slice(0, e + 1).forEach(function(r) {
    r.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, e + 1).forEach(function(r) {
    r.virtual = !1;
  }));
}
function oA(t, e) {
  e < 4 ? t.slice(e, 4).forEach(function(r) {
    r.virtual = !0;
  }) : t.slice(e).forEach(function(r) {
    r.virtual = !0;
  });
}
function Vh(t, e, r, n, o) {
  n === void 0 && (n = [0, 0]);
  var i = [];
  return !t || t === "0px" ? i = [] : i = Or(t), mx(i, e, r, 0, 0, n, o);
}
function Wh(t, e, r, n, o) {
  var i = t.state, a = i.width, s = i.height, c = Md(o, t.props.roundRelative, a, s), l = c.raws, u = c.styles, f = c.radiusPoses, d = Xk(f, l), p = d.horizontals, g = d.verticals, h = u.join(" ");
  i.borderRadiusState = h;
  var m = vt(t, e, A({ horizontals: p, verticals: g, borderRadius: h, width: a, height: s, delta: n, dist: r }, me({
    borderRadius: h
  }, e)));
  return it(t, "onRound", m), m;
}
function Hh(t) {
  var e, r, n = t.getState().style, o = n.borderRadius || "";
  if (!o && t.props.groupable) {
    var i = t.moveables[0], a = t.getTargets()[0];
    a && (i?.props.target === a ? (o = (r = (e = t.moveables[0]) === null || e === void 0 ? void 0 : e.state.style.borderRadius) !== null && r !== void 0 ? r : "", n.borderRadius = o) : (o = Ed(a).borderRadius, n.borderRadius = o));
  }
  return o;
}
var iA = {
  name: "roundable",
  props: [
    "roundable",
    "roundRelative",
    "minRoundControls",
    "maxRoundControls",
    "roundClickable",
    "roundPadding",
    "isDisplayShadowRoundControls"
  ],
  events: [
    "roundStart",
    "round",
    "roundEnd",
    "roundGroupStart",
    "roundGroup",
    "roundGroupEnd"
  ],
  css: [
    `.control.border-radius {
background: #d66;
cursor: pointer;
z-index: 3;
}`,
    `.control.border-radius.vertical {
background: #d6d;
z-index: 2;
}`,
    `.control.border-radius.virtual {
opacity: 0.5;
z-index: 1;
}`,
    `:host.round-line-clickable .line.direction {
cursor: pointer;
}`
  ],
  className: function(t) {
    var e = t.props.roundClickable;
    return e === !0 || e === "line" ? st("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, e) {
    var r = t.getState(), n = r.target, o = r.width, i = r.height, a = r.allMatrix, s = r.is3d, c = r.left, l = r.top, u = r.borderRadiusState, f = t.props, d = f.minRoundControls, p = d === void 0 ? [0, 0] : d, g = f.maxRoundControls, h = g === void 0 ? [4, 4] : g, m = f.zoom, y = f.roundPadding, x = y === void 0 ? 0 : y, b = f.isDisplayShadowRoundControls, w = f.groupable;
    if (!n)
      return null;
    var _ = u || Hh(t), E = s ? 4 : 3, C = Vh(_, o, i, p, !0);
    if (!C)
      return null;
    var T = 0, R = 0, D = w ? [0, 0] : [c, l];
    return C.map(function(N, M) {
      var O = N.horizontal, k = N.vertical, F = N.direction || "", $ = tt([], I(N.pos), !1);
      R += Math.abs(O), T += Math.abs(k), O && F.indexOf("n") > -1 && ($[1] -= x), k && F.indexOf("w") > -1 && ($[0] -= x), O && F.indexOf("s") > -1 && ($[1] += x), k && F.indexOf("e") > -1 && ($[0] += x);
      var V = lt(Gt(a, $, E), D), L = b && b !== "horizontal", z = N.vertical ? T <= h[1] && (L || !N.virtual) : R <= h[0] && (b || !N.virtual);
      return e.createElement("div", { key: "borderRadiusControl".concat(M), className: st("control", "border-radius", N.vertical ? "vertical" : "", N.virtual ? "virtual" : ""), "data-radius-index": M, style: {
        display: z ? "block" : "none",
        transform: "translate(".concat(V[0], "px, ").concat(V[1], "px) scale(").concat(m, ")")
      } });
    });
  },
  dragControlCondition: function(t, e) {
    if (!e.inputEvent || e.isRequest)
      return !1;
    var r = e.inputEvent.target.getAttribute("class") || "";
    return r.indexOf("border-radius") > -1 || r.indexOf("moveable-line") > -1 && r.indexOf("moveable-direction") > -1;
  },
  dragGroupControlCondition: function(t, e) {
    return this.dragControlCondition(t, e);
  },
  dragControlStart: function(t, e) {
    var r = e.inputEvent, n = e.datas, o = r.target, i = o.getAttribute("class") || "", a = i.indexOf("border-radius") > -1, s = i.indexOf("moveable-line") > -1 && i.indexOf("moveable-direction") > -1, c = a ? parseInt(o.getAttribute("data-radius-index"), 10) : -1, l = -1;
    if (s) {
      var u = o.getAttribute("data-line-key") || "";
      u && (l = parseInt(u.replace(/render-line-/g, ""), 10), isNaN(l) && (l = -1));
    }
    if (!a && !s)
      return !1;
    var f = vt(t, e, {}), d = it(t, "onRoundStart", f);
    if (d === !1)
      return !1;
    n.lineIndex = l, n.controlIndex = c, n.isControl = a, n.isLine = s, Wn(t, e);
    var p = t.props, g = p.roundRelative, h = p.minRoundControls, m = h === void 0 ? [0, 0] : h, y = t.state, x = y.width, b = y.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var w = Hh(t), _ = Vh(w || "", x, b, m, !0) || [];
    return n.controlPoses = _, y.borderRadiusState = Md(_, g, x, b).styles.join(" "), f;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = r.controlPoses;
    if (!r.isRound || !r.isControl || !n.length)
      return !1;
    var o = r.controlIndex, i = I(_r(e), 2), a = i[0], s = i[1], c = [a, s], l = lt(c, r.prevDist), u = t.props.maxRoundControls, f = u === void 0 ? [4, 4] : u, d = t.state, p = d.width, g = d.height, h = n[o], m = h.vertical, y = h.horizontal, x = n.map(function(w) {
      var _ = w.horizontal, E = w.vertical, C = [
        _ * y * c[0],
        E * m * c[1]
      ];
      if (_) {
        if (f[0] === 1)
          return C;
        if (f[0] < 4 && _ !== y)
          return C;
      } else {
        if (f[1] === 0)
          return C[1] = E * y * c[0] / p * g, C;
        if (m) {
          if (f[1] === 1)
            return C;
          if (f[1] < 4 && E !== m)
            return C;
        }
      }
      return [0, 0];
    });
    x[o] = c;
    var b = n.map(function(w, _) {
      return A(A({}, w), { pos: Et(w.pos, x[_]) });
    });
    return o < 4 ? b.slice(0, o + 1).forEach(function(w) {
      w.virtual = !1;
    }) : b.slice(4, o + 1).forEach(function(w) {
      w.virtual = !1;
    }), r.prevDist = [a, s], Wh(t, e, c, l, b);
  },
  dragControlEnd: function(t, e) {
    var r = t.state;
    r.borderRadiusState = "";
    var n = e.datas, o = e.isDouble;
    if (!n.isRound)
      return !1;
    var i = n.isControl, a = n.controlIndex, s = n.isLine, c = n.lineIndex, l = n.controlPoses, u = l.filter(function(y) {
      var x = y.virtual;
      return x;
    }).length, f = t.props.roundClickable, d = f === void 0 ? !0 : f;
    if (o && d) {
      if (i && (d === !0 || d === "control"))
        oA(l, a);
      else if (s && (d === !0 || d === "line")) {
        var p = I(S1(t, e), 2), g = p[0], h = p[1];
        rA(l, c, g, h);
      }
      u !== l.filter(function(y) {
        var x = y.virtual;
        return x;
      }).length && Wh(t, e, [0, 0], [0, 0], l);
    }
    var m = Oe(t, e, {});
    return it(t, "onRoundEnd", m), r.borderRadiusState = "", m;
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    if (!r)
      return !1;
    var n = t.moveables, o = t.props.targets, i = nr(t, "roundable", e), a = A({ targets: t.props.targets, events: i.map(function(s, c) {
      return A(A({}, s), { target: o[c], moveable: n[c], currentTarget: n[c] });
    }) }, r);
    return it(t, "onRoundGroupStart", a), r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    if (!r)
      return !1;
    var n = t.moveables, o = t.props.targets, i = nr(t, "roundable", e), a = A({ targets: t.props.targets, events: i.map(function(s, c) {
      return A(A(A({}, s), { target: o[c], moveable: n[c], currentTarget: n[c] }), me({
        borderRadius: r.borderRadius
      }, s));
    }) }, r);
    return it(t, "onRoundGroup", a), a;
  },
  dragGroupControlEnd: function(t, e) {
    var r = t.moveables, n = t.props.targets, o = nr(t, "roundable", e);
    Oc(t, "onRound", function(s) {
      var c = A({ targets: t.props.targets, events: o.map(function(l, u) {
        return A(A(A({}, l), { target: n[u], moveable: r[u], currentTarget: r[u] }), me({
          borderRadius: s.borderRadius
        }, l));
      }) }, s);
      it(t, "onRoundGroup", c);
    });
    var i = this.dragControlEnd(t, e);
    if (!i)
      return !1;
    var a = A({ targets: t.props.targets, events: o.map(function(s, c) {
      var l;
      return A(A({}, s), { target: n[c], moveable: r[c], currentTarget: r[c], lastEvent: (l = s.datas) === null || l === void 0 ? void 0 : l.lastEvent });
    }) }, i);
    return it(t, "onRoundGroupEnd", a), a;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function aA(t, e) {
  var r = e ? 4 : 3, n = jt(r), o = "matrix".concat(e ? "3d" : "", "(").concat(n.join(","), ")");
  return t === o || t === "matrix(1,0,0,1,0,0)";
}
var xx = {
  isPinch: !0,
  name: "beforeRenderable",
  props: [],
  events: [
    "beforeRenderStart",
    "beforeRender",
    "beforeRenderEnd",
    "beforeRenderGroupStart",
    "beforeRenderGroup",
    "beforeRenderGroupEnd"
  ],
  dragRelation: "weak",
  setTransform: function(t, e) {
    var r = t.state, n = r.is3d, o = r.targetMatrix, i = r.inlineTransform, a = n ? "matrix3d(".concat(o.join(","), ")") : "matrix(".concat(l1(o, !0), ")"), s = !i || i === "none" ? a : i;
    e.datas.startTransforms = aA(s, n) ? [] : Or(s);
  },
  resetStyle: function(t) {
    var e = t.datas;
    e.nextStyle = {}, e.nextTransforms = t.datas.startTransforms, e.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, e) {
    return vt(t, e, {
      setTransform: function(r) {
        e.datas.startTransforms = Tt(r) ? r : Or(r);
      },
      isPinch: !!e.isPinch
    });
  },
  fillDragParams: function(t, e) {
    return vt(t, e, {
      isPinch: !!e.isPinch
    });
  },
  dragStart: function(t, e) {
    this.setTransform(t, e), this.resetStyle(e), it(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
  },
  drag: function(t, e) {
    e.datas.startTransforms || this.setTransform(t, e), this.resetStyle(e), it(t, "onBeforeRender", vt(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  dragEnd: function(t, e) {
    e.datas.startTransforms || (this.setTransform(t, e), this.resetStyle(e)), it(t, "onBeforeRenderEnd", vt(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag
    }));
  },
  dragGroupStart: function(t, e) {
    var r = this;
    this.dragStart(t, e);
    var n = nr(t, "beforeRenderable", e), o = t.moveables, i = n.map(function(a, s) {
      var c = o[s];
      return r.setTransform(c, a), r.resetStyle(a), r.fillDragStartParams(c, a);
    });
    it(t, "onBeforeRenderGroupStart", vt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      setTransform: function() {
      },
      events: i
    }));
  },
  dragGroup: function(t, e) {
    var r = this;
    this.drag(t, e);
    var n = nr(t, "beforeRenderable", e), o = t.moveables, i = n.map(function(a, s) {
      var c = o[s];
      return r.resetStyle(a), r.fillDragParams(c, a);
    });
    it(t, "onBeforeRenderGroup", vt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      events: i
    }));
  },
  dragGroupEnd: function(t, e) {
    this.dragEnd(t, e), it(t, "onBeforeRenderGroupEnd", vt(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag,
      targets: t.props.targets
    }));
  },
  dragControlStart: function(t, e) {
    return this.dragStart(t, e);
  },
  dragControl: function(t, e) {
    return this.drag(t, e);
  },
  dragControlEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  dragGroupControlStart: function(t, e) {
    return this.dragGroupStart(t, e);
  },
  dragGroupControl: function(t, e) {
    return this.dragGroup(t, e);
  },
  dragGroupControlEnd: function(t, e) {
    return this.dragGroupEnd(t, e);
  }
}, bx = {
  name: "renderable",
  props: [],
  events: [
    "renderStart",
    "render",
    "renderEnd",
    "renderGroupStart",
    "renderGroup",
    "renderGroupEnd"
  ],
  dragRelation: "weak",
  dragStart: function(t, e) {
    it(t, "onRenderStart", vt(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  drag: function(t, e) {
    it(t, "onRender", this.fillDragParams(t, e));
  },
  dragAfter: function(t, e) {
    return this.drag(t, e);
  },
  dragEnd: function(t, e) {
    it(t, "onRenderEnd", this.fillDragEndParams(t, e));
  },
  dragGroupStart: function(t, e) {
    it(t, "onRenderGroupStart", vt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, e) {
    var r = this, n = nr(t, "beforeRenderable", e), o = t.moveables, i = n.map(function(a, s) {
      var c = o[s];
      return r.fillDragParams(c, a);
    });
    it(t, "onRenderGroup", vt(t, e, A(A({ isPinch: !!e.isPinch, targets: t.props.targets, transform: Ka(e), transformObject: {} }, me(Za(e))), { events: i })));
  },
  dragGroupEnd: function(t, e) {
    var r = this, n = nr(t, "beforeRenderable", e), o = t.moveables, i = n.map(function(a, s) {
      var c = o[s];
      return r.fillDragEndParams(c, a);
    });
    it(t, "onRenderGroupEnd", vt(t, e, A({ isPinch: !!e.isPinch, isDrag: e.isDrag, targets: t.props.targets, events: i, transformObject: {}, transform: Ka(e) }, me(Za(e)))));
  },
  dragControlStart: function(t, e) {
    return this.dragStart(t, e);
  },
  dragControl: function(t, e) {
    return this.drag(t, e);
  },
  dragControlAfter: function(t, e) {
    return this.dragAfter(t, e);
  },
  dragControlEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  dragGroupControlStart: function(t, e) {
    return this.dragGroupStart(t, e);
  },
  dragGroupControl: function(t, e) {
    return this.dragGroup(t, e);
  },
  dragGroupControlEnd: function(t, e) {
    return this.dragGroupEnd(t, e);
  },
  fillDragParams: function(t, e) {
    var r = {};
    return Mo(Os(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), vt(t, e, A({ isPinch: !!e.isPinch, transformObject: r, transform: Ka(e) }, me(Za(e))));
  },
  fillDragEndParams: function(t, e) {
    var r = {};
    return Mo(Os(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), vt(t, e, A({ isPinch: !!e.isPinch, isDrag: e.isDrag, transformObject: r, transform: Ka(e) }, me(Za(e))));
  }
};
function Ri(t, e, r, n, o, i, a) {
  i.clientDistX = i.distX, i.clientDistY = i.distY;
  var s = o === "Start", c = o === "End", l = o === "After", u = t.state.target, f = i.isRequest, d = n.indexOf("Control") > -1;
  if (!u || s && d && !f && t.areaElement === i.inputEvent.target)
    return !1;
  var p = tt([], I(e), !1);
  if (f) {
    var g = i.requestAble;
    p.some(function(M) {
      return M.name === g;
    }) || p.push.apply(p, tt([], I(t.props.ables.filter(function(M) {
      return M.name === g;
    })), !1));
  }
  if (!p.length || p.every(function(M) {
    return M.dragRelation;
  }))
    return !1;
  var h = i.inputEvent, m;
  c && h && (m = document.elementFromPoint(i.clientX, i.clientY) || h.target);
  var y = !1, x = function() {
    var M;
    y = !0, (M = i.stop) === null || M === void 0 || M.call(i);
  }, b = s && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  b && t.updateRect(o, !0, !1);
  var w = i.datas, _ = d ? "controlGesto" : "targetGesto", E = t[_], C = function(M, O, k) {
    if (!(O in M) || E !== t[_])
      return !1;
    var F = M.name, $ = w[F] || (w[F] = {});
    if (s && ($.isEventStart = !k || !M[k] || M[k](t, i)), !$.isEventStart)
      return !1;
    var V = M[O](t, A(A({}, i), { stop: x, datas: $, originalDatas: w, inputTarget: m }));
    return t._emitter.off(), s && V === !1 && ($.isEventStart = !1), V;
  };
  b && p.forEach(function(M) {
    M.unset && M.unset(t);
  }), C(xx, "drag".concat(n).concat(o));
  var T = 0, R = 0;
  r.forEach(function(M) {
    if (y)
      return !1;
    var O = "".concat(M).concat(n).concat(o), k = "".concat(M).concat(n, "Condition");
    o === "" && !f && Mk(t.state, i);
    var F = p.filter(function(L) {
      return L[O];
    });
    F = F.filter(function(L, z) {
      return L.name && F.indexOf(L) === z;
    });
    var $ = F.filter(function(L) {
      return C(L, O, k);
    }), V = $.length;
    y && ++T, V && ++R, !y && s && F.length && !V && (T += F.filter(function(L) {
      var z = L.name, j = w[z];
      return j.isEventStart ? L.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!l || R) && C(bx, "drag".concat(n).concat(o));
  var D = E !== t[_] || T === r.length;
  if ((c || y || D) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(M) {
    M.state.gestos = {};
  }), p.forEach(function(M) {
    M.unset && M.unset(t);
  })), s && !D && !f && R && t.props.preventDefault && i?.preventDefault(), t.isUnmounted || D)
    return !1;
  if (!s && R && !a || c) {
    var N = t.props.flushSync || Z1;
    N(function() {
      t.updateRect(c ? o : "", !0, !1), t.forceUpdate();
    });
  }
  return !s && !c && !l && R && !a && Ri(t, e, r, n, o + "After", i), !0;
}
function Od(t, e) {
  return function(r, n) {
    var o;
    n === void 0 && (n = r.inputEvent.target);
    var i = n, a = t.areaElement, s = t._dragTarget;
    return !s || !e && (!((o = t.controlGesto) === null || o === void 0) && o.isFlag()) ? !1 : i === s || s.contains(i) || i === a || !t.isMoveableElement(i) && !t.controlBox.contains(i) || Ut(i, "moveable-area") || Ut(i, "moveable-padding") || Ut(i, "moveable-edgeDraggable");
  };
}
function wx(t, e, r) {
  var n = t.controlBox, o = [], i = t.props, a = i.dragArea, s = t.state.target, c = i.dragTarget;
  o.push(n), (!a || c) && o.push(e), !a && c && s && e !== s && i.dragTargetSelf && o.push(s);
  var l = Od(t);
  return Cx(t, o, "targetAbles", r, {
    dragStart: l,
    pinchStart: l
  });
}
function Sx(t, e) {
  var r = t.controlBox, n = [];
  n.push(r);
  var o = Od(t, !0), i = function(a, s) {
    if (s === void 0 && (s = a.inputEvent.target), s === r)
      return !0;
    var c = o(a, s);
    return !c;
  };
  return Cx(t, n, "controlAbles", e, {
    dragStart: i,
    pinchStart: i
  });
}
function Cx(t, e, r, n, o) {
  o === void 0 && (o = {});
  var i = r === "targetAbles", a = t.props, s = a.pinchOutside, c = a.pinchThreshold, l = a.preventClickEventOnDrag, u = a.preventClickDefault, f = a.checkInput, d = a.dragFocusedInput, p = a.preventDefault, g = p === void 0 ? !0 : p, h = a.preventRightClick, m = h === void 0 ? !0 : h, y = a.preventWheelClick, x = y === void 0 ? !0 : y, b = a.dragContainer, w = gr(b, !0), _ = {
    preventDefault: g,
    preventRightClick: m,
    preventWheelClick: x,
    container: w || De(t.getControlBoxElement()),
    pinchThreshold: c,
    pinchOutside: s,
    preventClickEventOnDrag: i ? l : !1,
    preventClickEventOnDragStart: i ? u : !1,
    preventClickEventByCondition: i ? null : function(T) {
      return t.controlBox.contains(T.target);
    },
    checkInput: i ? f : !1,
    dragFocusedInput: d
  }, E = new v1(e, _), C = n === "Control";
  return ["drag", "pinch"].forEach(function(T) {
    ["Start", "", "End"].forEach(function(R) {
      E.on("".concat(T).concat(R), function(D) {
        var N, M = D.eventType, O = T === "drag" && D.isPinch;
        if (o[M] && !o[M](D)) {
          D.stop();
          return;
        }
        if (!O) {
          var k = T === "drag" ? [T] : ["drag", T], F = tt([], I(t[r]), !1), $ = Ri(t, F, k, n, R, D);
          $ ? (t.props.stopPropagation || R === "Start" && C) && ((N = D?.inputEvent) === null || N === void 0 || N.stopPropagation()) : D.stop();
        }
      });
    });
  }), E;
}
var sA = /* @__PURE__ */ function() {
  function t(e, r, n) {
    var o = this;
    this.target = e, this.moveable = r, this.eventName = n, this.ables = [], this._onEvent = function(i) {
      var a = o.eventName, s = o.moveable;
      s.state.disableNativeEvent || o.ables.forEach(function(c) {
        c[a](s, {
          inputEvent: i
        });
      });
    }, e.addEventListener(n.toLowerCase(), this._onEvent);
  }
  return t.prototype.setAbles = function(e) {
    this.ables = e;
  }, t.prototype.destroy = function() {
    this.target.removeEventListener(this.eventName.toLowerCase(), this._onEvent), this.target = null, this.moveable = null;
  }, t;
}();
function cA(t, e, r, n) {
  var o;
  r === void 0 && (r = e);
  var i = D1(t, e), a = i.matrixes, s = i.is3d, c = i.targetMatrix, l = i.transformOrigin, u = i.targetOrigin, f = i.offsetContainer, d = i.hasFixed, p = i.zoom, g = SN(f, r), h = g.matrixes, m = g.is3d, y = g.offsetContainer, x = g.zoom, b = n, w = 4, _ = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, E = c, C = jt(w), T = jt(w), R = jt(w), D = jt(w), N = a.length, M = h.map(function(z) {
    return A(A({}, z), { matrix: z.matrix ? tt([], I(z.matrix), !1) : void 0 });
  }).reverse();
  a.reverse(), !s && b && (E = sr(E, 3, 4), Ru(a)), !m && b && Ru(M), M.forEach(function(z) {
    T = Pt(T, z.matrix, w);
  });
  var O = r || un(t), k = ((o = M[0]) === null || o === void 0 ? void 0 : o.target) || ta(O, O, !0).offsetParent, F = M.slice(1).reduce(function(z, j) {
    return Pt(z, j.matrix, w);
  }, jt(w));
  a.forEach(function(z, j) {
    if (N - 2 === j && (R = C.slice()), N - 1 === j && (D = C.slice()), !z.matrix) {
      var B = a[j + 1], Y = _k(z, B, k, w, Pt(F, C, w));
      z.matrix = Ln(Y, w);
    }
    C = Pt(C, z.matrix, w);
  });
  var $ = !_ && s;
  E || (E = jt($ ? 4 : 3));
  var V = Pc(_ && E.length === 16 ? sr(E, 4, 3) : E, $), L = T;
  return T = s1(T, w, w), {
    hasZoom: p !== 1 || x !== 1,
    hasFixed: d,
    matrixes: a,
    rootMatrix: T,
    originalRootMatrix: L,
    beforeMatrix: R,
    offsetMatrix: D,
    allMatrix: C,
    targetMatrix: E,
    targetTransform: V,
    inlineTransform: t.style.transform,
    transformOrigin: l,
    targetOrigin: u,
    is3d: b,
    offsetContainer: f,
    offsetRootContainer: y
  };
}
function Ex(t, e, r, n) {
  r === void 0 && (r = e);
  var o = 0, i = 0, a = 0, s = {}, c = ex(t);
  if (t && (o = c.offsetWidth, i = c.offsetHeight), t) {
    var l = cA(t, e, r, n), u = go(l.allMatrix, l.transformOrigin, o, i);
    s = A(A({}, l), u);
    var f = go(l.allMatrix, [50, 50], 100, 100);
    a = rx([f.pos1, f.pos2], f.direction);
  }
  var d = 4;
  return A(A(A({ hasZoom: !1, width: o, height: i, rotation: a }, c), { originalRootMatrix: jt(d), rootMatrix: jt(d), beforeMatrix: jt(d), offsetMatrix: jt(d), allMatrix: jt(d), targetMatrix: jt(d), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !0, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), s);
}
function lA(t, e, r) {
  return r === void 0 && (r = e), Ex(t, e, r, !0);
}
function Ou(t, e, r, n, o, i) {
  i === void 0 && (i = []);
  var a = 1, s = [0, 0], c = Qa(), l = Qa(), u = Qa(), f = Qa(), d = [0, 0], p = {}, g = Ex(e, r, o, !0);
  if (e) {
    var h = Ce(e);
    i.forEach(function(M) {
      p[M] = h(M);
    });
    var m = g.is3d ? 4 : 3, y = go(g.offsetMatrix, Et(g.transformOrigin, c1(g.targetMatrix, m)), g.width, g.height);
    a = y.direction, s = Et(y.origin, [y.left - g.left, y.top - g.top]), f = Ti(g.offsetRootContainer);
    var x = ta(n, n, !0).offsetParent || g.offsetRootContainer;
    if (g.hasZoom) {
      var b = go(Pt(g.originalRootMatrix, g.allMatrix), g.transformOrigin, g.width, g.height), w = go(g.originalRootMatrix, js(Ce(x)("transformOrigin")).map(function(M) {
        return parseFloat(M);
      }), x.offsetWidth, x.offsetHeight);
      if (c = Cl(b, f), u = Cl(w, f, x, !0), t) {
        var _ = b.left, E = b.top;
        l = Cl({
          left: _,
          top: E,
          bottom: E,
          right: E
        }, f);
      }
    } else {
      c = Ti(e), u = wN(x), t && (l = Ti(t));
      var C = u.left, T = u.top, R = u.clientLeft, D = u.clientTop, N = [
        c.left - C,
        c.top - T
      ];
      d = lt(ko(g.rootMatrix, N, 4), [R + g.left, D + g.top]);
    }
  }
  return A({ targetClientRect: c, containerClientRect: u, moveableClientRect: l, rootContainerClientRect: f, beforeDirection: a, beforeOrigin: s, originalBeforeOrigin: s, target: e, style: p, offsetDelta: d }, g);
}
function Yh(t) {
  var e = t.pos1, r = t.pos2, n = t.pos3, o = t.pos4;
  if (!e || !r || !n || !o)
    return null;
  var i = zn([e, r, n, o]), a = [i.minX, i.minY], s = lt(t.origin, a);
  return e = lt(e, a), r = lt(r, a), n = lt(n, a), o = lt(o, a), A(A({}, t), {
    left: t.left,
    top: t.top,
    posDelta: a,
    pos1: e,
    pos2: r,
    pos3: n,
    pos4: o,
    origin: s,
    beforeOrigin: s,
    // originalBeforeOrigin: origin,
    isPersisted: !0
  });
}
var Ao = /* @__PURE__ */ function(t) {
  pa(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = A({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, Ou(null)), r.renderState = {}, r.enabledAbles = [], r.targetAbles = [], r.controlAbles = [], r.rotation = 0, r.scale = [1, 1], r.isMoveableMounted = !1, r.isUnmounted = !1, r.events = {
      mouseEnter: null,
      mouseLeave: null
    }, r._emitter = new fn(), r._prevOriginalDragTarget = null, r._originalDragTarget = null, r._prevDragTarget = null, r._dragTarget = null, r._prevPropTarget = null, r._propTarget = null, r._prevDragArea = !1, r._isPropTargetChanged = !1, r._hasFirstTarget = !1, r._reiszeObserver = null, r._observerId = 0, r._mutationObserver = null, r._rootContainer = null, r._viewContainer = null, r._viewClassNames = [], r._store = {}, r.checkUpdateRect = function() {
      if (!r.isDragging()) {
        var n = r.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        mv(r._observerId), r._observerId = hs(function() {
          r.isDragging() || r.updateRect();
        });
      }
    }, r._onPreventClick = function(n) {
      n.stopPropagation(), n.preventDefault();
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = this.getState(), o = r.parentPosition, i = r.className, a = r.target, s = r.zoom, c = r.cspNonce, l = r.translateZ, u = r.cssStyled, f = r.groupable, d = r.linePadding, p = r.controlPadding;
    this._checkUpdateRootContainer(), this.checkUpdate(), this.updateRenderPoses();
    var g = I(o || [0, 0], 2), h = g[0], m = g[1], y = n.left, x = n.top, b = n.target, w = n.direction, _ = n.hasFixed, E = n.offsetDelta, C = r.targets, T = this.isDragging(), R = {};
    this.getEnabledAbles().forEach(function(F) {
      R["data-able-".concat(F.name.toLowerCase())] = !0;
    });
    var D = this._getAbleClassName(), N = C && C.length && (b || f) || a || !this._hasFirstTarget && this.state.isPersisted, M = this.controlBox || this.props.firstRenderState || this.props.persistData, O = [y - h, x - m];
    !f && r.useAccuratePosition && (O[0] += E[0], O[1] += E[1]);
    var k = {
      position: _ ? "fixed" : "absolute",
      display: N ? "block" : "none",
      visibility: M ? "visible" : "hidden",
      transform: "translate3d(".concat(O[0], "px, ").concat(O[1], "px, ").concat(l, ")"),
      "--zoom": s,
      "--zoompx": "".concat(s, "px")
    };
    return d && (k["--moveable-line-padding"] = d), p && (k["--moveable-control-padding"] = p), S.createElement(
      u,
      A({ cspNonce: c, ref: rn(this, "controlBox"), className: "".concat(st("control-box", w === -1 ? "reverse" : "", T ? "dragging" : ""), " ").concat(D, " ").concat(i) }, R, { onClick: this._onPreventClick, style: k }),
      this.renderAbles(),
      this._renderLines()
    );
  }, e.prototype.componentDidMount = function() {
    this.isMoveableMounted = !0, this.isUnmounted = !1;
    var r = this.props, n = r.parentMoveable, o = r.container;
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateTargets(), this._updateNativeEvents(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(this.props), !o && !n && !this.state.isPersisted && (this.updateRect("", !1, !1), this.forceUpdate());
  }, e.prototype.componentDidUpdate = function(r) {
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateNativeEvents(), this._updateTargets(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(r);
  }, e.prototype.componentWillUnmount = function() {
    var r, n;
    this.isMoveableMounted = !1, this.isUnmounted = !0, this._emitter.off(), (r = this._reiszeObserver) === null || r === void 0 || r.disconnect(), (n = this._mutationObserver) === null || n === void 0 || n.disconnect();
    var o = this._viewContainer;
    o && this._changeAbleViewClassNames([]), lo(this, !1), lo(this, !0);
    var i = this.events;
    for (var a in i) {
      var s = i[a];
      s && s.destroy();
    }
  }, e.prototype.getTargets = function() {
    var r = this.props.target;
    return r ? [r] : [];
  }, e.prototype.getAble = function(r) {
    var n = this.props.ables || [];
    return Se(n, function(o) {
      return o.name === r;
    });
  }, e.prototype.getContainer = function() {
    var r = this.props, n = r.parentMoveable, o = r.wrapperMoveable, i = r.container;
    return i || o && o.getContainer() || n && n.getContainer() || this.controlBox.parentElement;
  }, e.prototype.getControlBoxElement = function() {
    return this.controlBox;
  }, e.prototype.getDragElement = function() {
    return this._dragTarget;
  }, e.prototype.isMoveableElement = function(r) {
    var n;
    return r && (((n = r.getAttribute) === null || n === void 0 ? void 0 : n.call(r, "class")) || "").indexOf(dd) > -1;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var o = this.targetGesto, i = this.controlGesto;
    return o && Od(this)({ inputEvent: r }, n) ? o.isFlag() || o.triggerDragStart(r) : i && this.isMoveableElement(n) && (i.isFlag() || i.triggerDragStart(r)), this;
  }, e.prototype.hitTest = function(r) {
    var n = this.state, o = n.target, i = n.pos1, a = n.pos2, s = n.pos3, c = n.pos4, l = n.targetClientRect;
    if (!o)
      return 0;
    var u;
    if (Ii(r)) {
      var f = r.getBoundingClientRect();
      u = {
        left: f.left,
        top: f.top,
        width: f.width,
        height: f.height
      };
    } else
      u = A({ width: 0, height: 0 }, r);
    var d = u.left, p = u.top, g = u.width, h = u.height, m = pu([i, a, c, s], l), y = AO(m, [
      [d, p],
      [d + g, p],
      [d + g, p + h],
      [d, p + h]
    ]), x = Si(m);
    return !y || !x ? 0 : Math.min(100, y / x * 100);
  }, e.prototype.isInside = function(r, n) {
    var o = this.state, i = o.target, a = o.pos1, s = o.pos2, c = o.pos3, l = o.pos4, u = o.targetClientRect;
    return i ? Ms([r, n], pu([a, s, l, c], u)) : !1;
  }, e.prototype.updateRect = function(r, n, o) {
    o === void 0 && (o = !0);
    var i = this.props, a = !i.parentPosition && !i.wrapperMoveable;
    a && Oo(!0);
    var s = i.parentMoveable, c = this.state, l = c.target || i.target, u = this.getContainer(), f = s ? s._rootContainer : this._rootContainer, d = Ou(this.controlBox, l, u, u, f || u, this._getRequestStyles());
    if (!l && this._hasFirstTarget && i.persistData) {
      var p = Yh(i.persistData);
      for (var g in p)
        d[g] = p[g];
    }
    a && Oo(), this.updateState(d, s ? !1 : o);
  }, e.prototype.isDragging = function(r) {
    var n, o, i = this.targetGesto, a = this.controlGesto;
    if (i?.isFlag()) {
      if (!r)
        return !0;
      var s = i.getEventData();
      return !!(!((n = s[r]) === null || n === void 0) && n.isEventStart);
    }
    if (a?.isFlag()) {
      if (!r)
        return !0;
      var s = a.getEventData();
      return !!(!((o = s[r]) === null || o === void 0) && o.isEventStart);
    }
    return !1;
  }, e.prototype.updateTarget = function(r) {
    this.updateRect(r, !0);
  }, e.prototype.getRect = function() {
    var r = this.state, n = He(this.state), o = I(n, 4), i = o[0], a = o[1], s = o[2], c = o[3], l = Ve(n), u = r.width, f = r.height, d = l.width, p = l.height, g = l.left, h = l.top, m = [r.left, r.top], y = Et(m, r.origin), x = Et(m, r.beforeOrigin), b = r.transformOrigin;
    return {
      width: d,
      height: p,
      left: g,
      top: h,
      pos1: i,
      pos2: a,
      pos3: s,
      pos4: c,
      offsetWidth: u,
      offsetHeight: f,
      beforeOrigin: x,
      origin: y,
      transformOrigin: b,
      rotation: this.getRotation()
    };
  }, e.prototype.getManager = function() {
    return this;
  }, e.prototype.stopDrag = function(r) {
    if (!r || r === "target") {
      var n = this.targetGesto;
      n?.isIdle() === !1 && Du(this, !1), n?.stop();
    }
    if (!r || r === "control") {
      var n = this.controlGesto;
      n?.isIdle() === !1 && Du(this, !0), n?.stop();
    }
  }, e.prototype.getRotation = function() {
    var r = this.state, n = r.pos1, o = r.pos2, i = r.direction;
    return Nk(n, o, i);
  }, e.prototype.request = function(r, n, o) {
    n === void 0 && (n = {});
    var i = this, a = i.props, s = a.parentMoveable || a.wrapperMoveable || i, c = s.props.ables, l = a.groupable, u = Se(c, function(y) {
      return y.name === r;
    });
    if (this.isDragging() || !u || !u.request)
      return {
        request: function() {
          return this;
        },
        requestEnd: function() {
          return this;
        }
      };
    var f = u.request(i), d = o || n.isInstant, p = f.isControl ? "controlAbles" : "targetAbles", g = "".concat(l ? "Group" : "").concat(f.isControl ? "Control" : ""), h = tt([], I(s[p]), !1), m = {
      request: function(y) {
        return Ri(i, h, ["drag"], g, "", A(A({}, f.request(y)), { requestAble: r, isRequest: !0 }), d), m;
      },
      requestEnd: function() {
        return Ri(i, h, ["drag"], g, "End", A(A({}, f.requestEnd()), { requestAble: r, isRequest: !0 }), d), m;
      }
    };
    return Ri(i, h, ["drag"], g, "Start", A(A({}, f.requestStart(n)), { requestAble: r, isRequest: !0 }), d), d ? m.request(n).requestEnd() : m;
  }, e.prototype.getMoveables = function() {
    return [this];
  }, e.prototype.destroy = function() {
    this.componentWillUnmount();
  }, e.prototype.updateRenderPoses = function() {
    var r = this.getState(), n = this.props, o = n.padding, i = r.originalBeforeOrigin, a = r.transformOrigin, s = r.allMatrix, c = r.is3d, l = r.pos1, u = r.pos2, f = r.pos3, d = r.pos4, p = r.left, g = r.top, h = r.isPersisted, m = n.zoom || 1;
    if (!o && m <= 1) {
      r.renderPoses = [
        l,
        u,
        f,
        d
      ], r.renderLines = [
        [l, u],
        [u, d],
        [d, f],
        [f, l]
      ];
      return;
    }
    var y = dx(o || {}), x = y.left, b = y.top, w = y.bottom, _ = y.right, E = c ? 4 : 3, C = [];
    h ? C = a : this.controlBox && n.groupable ? C = i : C = Et(i, [p, g]);
    var T = Ds(E, Ln(C.map(function(k) {
      return -k;
    }), E), s, Ln(a, E)), R = Ie(T, l, [-x, -b], E), D = Ie(T, u, [_, -b], E), N = Ie(T, f, [-x, w], E), M = Ie(T, d, [_, w], E);
    r.renderPoses = [
      R,
      D,
      N,
      M
    ], r.renderLines = [
      [R, D],
      [D, M],
      [M, N],
      [N, R]
    ];
    {
      var O = m / 2;
      r.renderLines = [
        [
          Ie(T, l, [-x - O, -b], E),
          Ie(T, u, [_ + O, -b], E)
        ],
        [
          Ie(T, u, [_, -b - O], E),
          Ie(T, d, [_, w + O], E)
        ],
        [
          Ie(T, d, [_ + O, w], E),
          Ie(T, f, [-x - O, w], E)
        ],
        [
          Ie(T, f, [-x, w + O], E),
          Ie(T, l, [-x, -b - O], E)
        ]
      ];
    }
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var r = this.props, n = r.target, o = r.container, i = r.parentMoveable, a = this.state, s = a.target, c = a.container;
    if (!(!s && !n)) {
      this.updateAbles();
      var l = !Mu(s, n), u = l || !Mu(c, o);
      if (u) {
        var f = o || this.controlBox;
        f && this.unsetAbles(), this.updateState({ target: n, container: o }), !i && f && this.updateRect("End", !1, !1), this._isPropTargetChanged = l;
      }
    }
  }, e.prototype.waitToChangeTarget = function() {
    return new Promise(function() {
    });
  }, e.prototype.triggerEvent = function(r, n) {
    var o = this.props;
    if (this._emitter.trigger(r, n), o.parentMoveable && n.isRequest && !n.isRequestChild)
      return o.parentMoveable.triggerEvent(r, n, !0);
    var i = o[r];
    return i && i(n);
  }, e.prototype.useCSS = function(r, n) {
    var o = this.props.customStyledMap, i = r + n;
    return o[i] || (o[i] = g1(r, n)), o[i];
  }, e.prototype.getState = function() {
    var r, n = this.props;
    (n.target || !((r = n.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var o = this.controlBox, i = n.persistData, a = n.firstRenderState;
    if (a && !o)
      return a;
    if (!this._hasFirstTarget && i) {
      var s = Yh(i);
      if (s)
        return this.updateState(s, !1), this.state;
    }
    return this.state.isPersisted = !1, this.state;
  }, e.prototype.updateSelectors = function() {
  }, e.prototype.unsetAbles = function() {
    var r = this;
    this.targetAbles.forEach(function(n) {
      n.unset && n.unset(r);
    });
  }, e.prototype.updateAbles = function(r, n) {
    r === void 0 && (r = this.props.ables), n === void 0 && (n = "");
    var o = this.props, i = o.triggerAblesSimultaneously, a = this.getEnabledAbles(r), s = "drag".concat(n, "Start"), c = "pinch".concat(n, "Start"), l = "drag".concat(n, "ControlStart"), u = ts(a, [s, c], i), f = ts(a, [l], i);
    this.enabledAbles = a, this.targetAbles = u, this.controlAbles = f;
  }, e.prototype.updateState = function(r, n) {
    if (n) {
      if (this.isUnmounted)
        return;
      this.setState(r);
    } else {
      var o = this.state;
      for (var i in r)
        o[i] = r[i];
    }
  }, e.prototype.getEnabledAbles = function(r) {
    r === void 0 && (r = this.props.ables);
    var n = this.props;
    return r.filter(function(o) {
      return o && (o.always && n[o.name] !== !1 || n[o.name]);
    });
  }, e.prototype.renderAbles = function() {
    var r = this, n = this.props, o = n.triggerAblesSimultaneously, i = {
      createElement: On
    };
    return this.renderState = {}, Dk(cx(ts(this.getEnabledAbles(), ["render"], o).map(function(a) {
      var s = a.render;
      return s(r, i) || [];
    })).filter(function(a) {
      return a;
    }), function(a) {
      var s = a.key;
      return s;
    }).map(function(a) {
      return a[0];
    });
  }, e.prototype.updateCheckInput = function() {
    this.targetGesto && (this.targetGesto.options.checkInput = this.props.checkInput);
  }, e.prototype._getRequestStyles = function() {
    var r = this.getEnabledAbles().reduce(function(n, o) {
      var i, a, s = (a = (i = o.requestStyle) === null || i === void 0 ? void 0 : i.call(o)) !== null && a !== void 0 ? a : [];
      return tt(tt([], I(n), !1), I(s), !1);
    }, tt([], I(this.props.requestStyles || []), !1));
    return r;
  }, e.prototype._updateObserver = function(r) {
    this._updateResizeObserver(r), this._updateMutationObserver(r);
  }, e.prototype._updateEvents = function() {
    var r = this.targetAbles.length, n = this.controlAbles.length, o = this._dragTarget, i = !r && this.targetGesto || this._isTargetChanged(!0);
    i && (lo(this, !1), this.updateState({ gestos: {} })), n || lo(this, !0), o && r && !this.targetGesto && (this.targetGesto = wx(this, o, "")), !this.controlGesto && n && (this.controlGesto = Sx(this, "Control"));
  }, e.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = gr(this._originalDragTarget, !0);
  }, e.prototype._renderLines = function() {
    var r = this.props, n = r, o = n.zoom, i = n.hideDefaultLines, a = n.hideChildMoveableDefaultLines, s = n.parentMoveable;
    if (i || s && a)
      return [];
    var c = this.getState(), l = {
      createElement: On
    };
    return c.renderLines.map(function(u, f) {
      return Qi(l, "", u[0], u[1], o, "render-line-".concat(f));
    });
  }, e.prototype._isTargetChanged = function(r) {
    var n = this.props, o = n.dragTarget || n.target, i = this._prevOriginalDragTarget, a = this._prevDragArea, s = n.dragArea, c = !s && i !== o, l = (r || s) && a !== s;
    return c || l || this._prevPropTarget != this._propTarget;
  }, e.prototype._updateNativeEvents = function() {
    var r = this, n = this.props, o = n.dragArea ? this.areaElement : this.state.target, i = this.events, a = Ge(i);
    if (this._isTargetChanged())
      for (var s in i) {
        var c = i[s];
        c && c.destroy(), i[s] = null;
      }
    if (o) {
      var l = this.enabledAbles;
      a.forEach(function(u) {
        var f = ts(l, [u]), d = f.length > 0, p = i[u];
        if (!d) {
          p && (p.destroy(), i[u] = null);
          return;
        }
        p || (p = new sA(o, r, u), i[u] = p), p.setAbles(f);
      });
    }
  }, e.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = gr(r, !0));
  }, e.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = gr(r, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(tt(tt([], I(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? Lk : ""
    ], !1));
  }, e.prototype._changeAbleViewClassNames = function(r) {
    var n = this._viewContainer, o = sx(r.filter(Boolean), function(l) {
      return l;
    }).map(function(l) {
      var u = I(l, 1), f = u[0];
      return f;
    }), i = this._viewClassNames, a = ld(i, o), s = a.removed, c = a.added;
    s.forEach(function(l) {
      oo(n, i[l]);
    }), c.forEach(function(l) {
      ji(n, o[l]);
    }), this._viewClassNames = o;
  }, e.prototype._getAbleViewClassNames = function() {
    var r = this;
    return (this.getEnabledAbles().map(function(n) {
      var o;
      return ((o = n.viewClassName) === null || o === void 0 ? void 0 : o.call(n, r)) || "";
    }).join(" ") + " ".concat(this._getAbleClassName("-view"))).split(/\s+/g);
  }, e.prototype._getAbleClassName = function(r) {
    var n = this;
    r === void 0 && (r = "");
    var o = this.getEnabledAbles(), i = this.targetGesto, a = this.controlGesto, s = i?.isFlag() ? i.getEventData() : {}, c = a?.isFlag() ? a.getEventData() : {};
    return o.map(function(l) {
      var u, f, d, p = l.name, g = ((u = l.className) === null || u === void 0 ? void 0 : u.call(l, n)) || "";
      return (!((f = s[p]) === null || f === void 0) && f.isEventStart || !((d = c[p]) === null || d === void 0) && d.isEventStart) && (g += " ".concat(st("".concat(p).concat(r, "-dragging")))), g.trim();
    }).filter(Boolean).join(" ");
  }, e.prototype._updateResizeObserver = function(r) {
    var n, o = this.props, i = o.target, a = De(this.getControlBoxElement());
    if (!a.ResizeObserver || !i || !o.useResizeObserver) {
      (n = this._reiszeObserver) === null || n === void 0 || n.disconnect();
      return;
    }
    if (!(r.target === i && this._reiszeObserver)) {
      var s = new a.ResizeObserver(this.checkUpdateRect);
      s.observe(i, {
        box: "border-box"
      }), this._reiszeObserver = s;
    }
  }, e.prototype._updateMutationObserver = function(r) {
    var n = this, o, i = this.props, a = i.target, s = De(this.getControlBoxElement());
    if (!s.MutationObserver || !a || !i.useMutationObserver) {
      (o = this._mutationObserver) === null || o === void 0 || o.disconnect();
      return;
    }
    if (!(r.target === a && this._mutationObserver)) {
      var c = new s.MutationObserver(function(l) {
        var u, f;
        try {
          for (var d = VO(l), p = d.next(); !p.done; p = d.next()) {
            var g = p.value;
            g.type === "attributes" && g.attributeName === "style" && n.checkUpdateRect();
          }
        } catch (h) {
          u = { error: h };
        } finally {
          try {
            p && !p.done && (f = d.return) && f.call(d);
          } finally {
            if (u) throw u.error;
          }
        }
      });
      c.observe(a, {
        attributes: !0
      }), this._mutationObserver = c;
    }
  }, e.defaultProps = {
    dragTargetSelf: !1,
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: !0,
    parentMoveable: null,
    wrapperMoveable: null,
    isWrapperMounted: !1,
    parentPosition: null,
    warpSelf: !1,
    svgOrigin: "",
    dragContainer: null,
    useResizeObserver: !1,
    useMutationObserver: !1,
    preventDefault: !0,
    preventRightClick: !0,
    preventWheelClick: !0,
    linePadding: 0,
    controlPadding: 0,
    ables: [],
    pinchThreshold: 20,
    dragArea: !1,
    passDragArea: !1,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: !1,
    padding: {},
    pinchOutside: !0,
    checkInput: !1,
    dragFocusedInput: !1,
    groupable: !1,
    hideDefaultLines: !1,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {},
    stopPropagation: !1,
    preventClickDefault: !1,
    preventClickEventOnDrag: !0,
    flushSync: Z1,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, e;
}(S.PureComponent), Nd = {
  name: "groupable",
  props: [
    "defaultGroupRotate",
    "useDefaultGroupRotate",
    "defaultGroupOrigin",
    "groupable",
    "groupableProps",
    "targetGroups",
    "hideChildMoveableDefaultLines"
  ],
  events: [],
  render: function(t, e) {
    var r, n = t.props, o = n.targets || [], i = t.getState(), a = i.left, s = i.top, c = i.isPersisted, l = n.zoom || 1, u = t.renderGroupRects, f = ((r = n.persistData) === null || r === void 0 ? void 0 : r.children) || [];
    c ? o = f.map(function() {
      return null;
    }) : f = [];
    var d = uo(t, "parentPosition", [a, s], function(g) {
      return g.join(",");
    }), p = uo(t, "requestStyles", t.getRequestChildStyles(), function(g) {
      return g.join(",");
    });
    return t.moveables = t.moveables.slice(0, o.length), tt(tt([], I(o.map(function(g, h) {
      return e.createElement(Ao, { key: "moveable" + h, ref: i1(t, "moveables", h), target: g, origin: !1, requestStyles: p, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [a, s], persistData: f[h], zoom: l });
    })), !1), I(cx(u.map(function(g, h) {
      var m = g.pos1, y = g.pos2, x = g.pos3, b = g.pos4, w = [m, y, x, b];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(_, E) {
        var C = I(_, 2), T = C[0], R = C[1];
        return Qi(e, "", lt(w[T], d), lt(w[R], d), l, "group-rect-".concat(h, "-").concat(E));
      });
    }))), !1);
  }
}, uA = ha("clickable", {
  props: [
    "clickable"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  always: !0,
  dragRelation: "weak",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dragStart: function() {
  },
  dragControlStart: function() {
  },
  dragGroupStart: function(t, e) {
    e.datas.inputTarget = e.inputEvent && e.inputEvent.target;
  },
  dragEnd: function(t, e) {
    var r = t.props.target, n = e.inputEvent, o = e.inputTarget, i = t.isMoveableElement(o), a = !i && t.controlBox.contains(o);
    if (!(!n || !o || e.isDrag || t.isMoveableElement(o) || a)) {
      var s = r.contains(o);
      it(t, "onClick", vt(t, e, {
        isDouble: e.isDouble,
        inputTarget: o,
        isTarget: r === o,
        moveableTarget: t.props.target,
        containsTarget: s
      }));
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.inputEvent, n = e.inputTarget;
    if (!(!r || !n || e.isDrag || t.isMoveableElement(n) || e.datas.inputTarget === n)) {
      var o = t.props.targets, i = o.indexOf(n), a = i > -1, s = !1;
      i === -1 && (i = yr(o, function(c) {
        return c.contains(n);
      }), s = i > -1), it(t, "onClickGroup", vt(t, e, {
        isDouble: e.isDouble,
        targets: o,
        inputTarget: n,
        targetIndex: i,
        isTarget: a,
        containsTarget: s,
        moveableTarget: o[i]
      }));
    }
  },
  dragControlEnd: function(t, e) {
    this.dragEnd(t, e);
  },
  dragGroupControlEnd: function(t, e) {
    this.dragEnd(t, e);
  }
});
function to(t) {
  var e = t.originalDatas.draggable;
  return e || (t.originalDatas.draggable = {}, e = t.originalDatas.draggable), A(A({}, t), { datas: e });
}
var fA = ha("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.edgeDraggable;
    return n ? O1(e, "edgeDraggable", n, t.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(t, e) {
    var r, n = t.props, o = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !o ? !1 : !n.draggable && Ut(o, st("direction")) && Ut(o, st("edge")) && Ut(o, st("edgeDraggable"));
  },
  dragStart: function(t, e) {
    return ve.dragStart(t, to(e));
  },
  drag: function(t, e) {
    return ve.drag(t, to(e));
  },
  dragEnd: function(t, e) {
    return ve.dragEnd(t, to(e));
  },
  dragGroupCondition: function(t, e) {
    var r, n = t.props, o = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !o ? !1 : !n.draggable && Ut(o, st("direction")) && Ut(o, st("line"));
  },
  dragGroupStart: function(t, e) {
    return ve.dragGroupStart(t, to(e));
  },
  dragGroup: function(t, e) {
    return ve.dragGroup(t, to(e));
  },
  dragGroupEnd: function(t, e) {
    return ve.dragGroupEnd(t, to(e));
  },
  unset: function(t) {
    return ve.unset(t);
  }
}), _x = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, dA = [
  xx,
  vx,
  vk,
  Ak,
  ve,
  fA,
  Eu,
  jk,
  Fk,
  ZN,
  $k,
  Vk,
  zk,
  eA,
  tA,
  iA,
  Nd,
  _x,
  uA,
  hx,
  bx
];
function Uh(t, e) {
  var r = I(t, 3), n = r[0], o = r[1], i = r[2];
  return (n * e[0] + o * e[1] + i) / Math.sqrt(n * n + o * o);
}
function ns(t, e) {
  var r = I(t, 2), n = r[0], o = r[1];
  return -n * e[0] - o * e[1];
}
function Xh(t, e) {
  return Math.max.apply(Math, tt([], I(t.map(function(r) {
    var n = I(r, 4), o = n[0], i = n[1], a = n[2], s = n[3];
    return Math.max(o[e], i[e], a[e], s[e]);
  })), !1));
}
function qh(t, e) {
  return Math.min.apply(Math, tt([], I(t.map(function(r) {
    var n = I(r, 4), o = n[0], i = n[1], a = n[2], s = n[3];
    return Math.min(o[e], i[e], a[e], s[e]);
  })), !1));
}
function pA(t, e) {
  var r, n, o, i = [0, 0], a = [0, 0], s = [0, 0], c = [0, 0], l = 0, u = 0;
  if (!t.length)
    return {
      pos1: i,
      pos2: a,
      pos3: s,
      pos4: c,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: l,
      height: u,
      rotation: e
    };
  var f = pt(e, ye);
  if (f % 90) {
    var d = f / 180 * Math.PI, p = Math.tan(d), g = -1 / p, h = [bu, yh], m = [[0, 0], [0, 0]], y = [bu, yh], x = [[0, 0], [0, 0]];
    t.forEach(function(K) {
      K.forEach(function(X) {
        var H = Uh([-p, 1, 0], X), Q = Uh([-g, 1, 0], X);
        h[0] > H && (m[0] = X, h[0] = H), h[1] < H && (m[1] = X, h[1] = H), y[0] > Q && (x[0] = X, y[0] = Q), y[1] < Q && (x[1] = X, y[1] = Q);
      });
    });
    var b = I(m, 2), w = b[0], _ = b[1], E = I(x, 2), C = E[0], T = E[1], R = [-p, 1, ns([-p, 1], w)], D = [-p, 1, ns([-p, 1], _)], N = [-g, 1, ns([-g, 1], C)], M = [-g, 1, ns([-g, 1], T)];
    r = I([
      [R, N],
      [R, M],
      [D, N],
      [D, M]
    ].map(function(K) {
      var X = I(K, 2), H = X[0], Q = X[1];
      return ud(H, Q)[0];
    }), 4), i = r[0], a = r[1], s = r[2], c = r[3], l = y[1] - y[0], u = h[1] - h[0];
  } else {
    var O = qh(t, 0), k = qh(t, 1), F = Xh(t, 0), $ = Xh(t, 1);
    if (i = [O, k], a = [F, k], s = [O, $], c = [F, $], l = F - O, u = $ - k, f % 180) {
      var V = [s, i, c, a];
      n = I(V, 4), i = n[0], a = n[1], s = n[2], c = n[3], l = $ - k, u = F - O;
    }
  }
  if (f % 360 > 180) {
    var V = [c, s, a, i];
    o = I(V, 4), i = o[0], a = o[1], s = o[2], c = o[3];
  }
  var L = zn([i, a, s, c]), z = L.minX, j = L.minY, B = L.maxX, Y = L.maxY;
  return {
    pos1: i,
    pos2: a,
    pos3: s,
    pos4: c,
    width: l,
    height: u,
    minX: z,
    minY: j,
    maxX: B,
    maxY: Y,
    rotation: e
  };
}
function Tx(t, e) {
  var r = e.map(function(n) {
    if (Tt(n)) {
      var o = Tx(t, n), i = o.length;
      return i > 1 ? o : i === 1 ? o[0] : null;
    } else {
      var a = Se(t, function(s) {
        var c = s.manager;
        return c.props.target === n;
      });
      return a ? (a.finded = !0, a.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && Tt(r[0]) ? r[0] : r;
}
var hA = /* @__PURE__ */ function(t) {
  pa(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.differ = new f1(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
  }
  return e.prototype.componentDidMount = function() {
    t.prototype.componentDidMount.call(this);
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1, this.updateAbles();
  }, e.prototype.getTargets = function() {
    return this.props.targets;
  }, e.prototype.updateRect = function(r, n, o) {
    var i;
    o === void 0 && (o = !0);
    var a = this.state;
    if (!this.controlBox || a.isPersisted)
      return;
    Oo(!0), this.moveables.forEach(function(q) {
      q.updateRect(r, !1, !1);
    });
    var s = this.props, c = this.moveables, l = a.target || s.target, u = c.map(function(q) {
      return { finded: !1, manager: q };
    }), f = this.props.targetGroups || [], d = Tx(u, f), p = s.useDefaultGroupRotate;
    d.push.apply(d, tt([], I(u.filter(function(q) {
      var ot = q.finded;
      return !ot;
    }).map(function(q) {
      var ot = q.manager;
      return ot;
    })), !1));
    var g = [], h = !n || r !== "" && s.updateGroup, m = s.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var y = (i = s.persistData) === null || i === void 0 ? void 0 : i.rotation;
      y != null && (m = y);
    }
    function x(q, ot, nt) {
      var U = q.map(function(Rt) {
        if (Tt(Rt)) {
          var mt = x(Rt, ot), _t = [mt.pos1, mt.pos2, mt.pos3, mt.pos4];
          return g.push(mt), { poses: _t, rotation: mt.rotation };
        } else
          return {
            poses: He(Rt.state),
            rotation: Rt.getRotation()
          };
      }), et = U.map(function(Rt) {
        var mt = Rt.rotation;
        return mt;
      }), dt = 0, ct = et[0], ft = et.every(function(Rt) {
        return Math.abs(ct - Rt) < 0.1;
      });
      h ? dt = !p && ft ? ct : m : dt = !p && !nt && ft ? ct : ot;
      var ht = U.map(function(Rt) {
        var mt = Rt.poses;
        return mt;
      }), Ct = pA(ht, dt);
      return Ct;
    }
    var b = x(d, this.rotation, !0);
    h && (this.rotation = b.rotation, this.transformOrigin = s.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = f, this.renderGroupRects = g;
    var w = this.transformOrigin, _ = this.rotation, E = this.scale, C = b.width, T = b.height, R = b.minX, D = b.minY, N = kk([
      [0, 0],
      [C, 0],
      [0, T],
      [C, T]
    ], Dd(w, C, T), this.rotation / 180 * Math.PI), M = zn(N.result), O = M.minX, k = M.minY, F = " rotate(".concat(_, "deg)") + " scale(".concat(ge(E[0]), ", ").concat(ge(E[1]), ")"), $ = "translate(".concat(-O, "px, ").concat(-k, "px)").concat(F);
    this.controlBox.style.transform = "translate3d(".concat(R, "px, ").concat(D, "px, ").concat(this.props.translateZ || 0, ")"), l.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(w, ";") + "width:".concat(C, "px;height:").concat(T, "px;") + "transform: ".concat($), a.width = C, a.height = T;
    var V = this.getContainer(), L = Ou(this.controlBox, l, this.controlBox, this.getContainer(), this._rootContainer || V, []), z = [L.left, L.top], j = I(He(L), 4), B = j[0], Y = j[1], K = j[2], X = j[3], H = zn([B, Y, K, X]), Q = [H.minX, H.minY], W = ge(E[0] * E[1]);
    L.pos1 = lt(B, Q), L.pos2 = lt(Y, Q), L.pos3 = lt(K, Q), L.pos4 = lt(X, Q), L.left = R - L.left + Q[0], L.top = D - L.top + Q[1], L.origin = lt(Et(z, L.origin), Q), L.beforeOrigin = lt(Et(z, L.beforeOrigin), Q), L.originalBeforeOrigin = Et(z, L.originalBeforeOrigin), L.transformOrigin = lt(Et(z, L.transformOrigin), Q), l.style.transform = "translate(".concat(-O - Q[0], "px, ").concat(-k - Q[1], "px)") + F, Oo(), this.updateState(A(A({}, L), { posDelta: Q, direction: W, beforeDirection: W }), o);
  }, e.prototype.getRect = function() {
    return A(A({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(r) {
      return r.getRect();
    }) });
  }, e.prototype.triggerEvent = function(r, n, o) {
    if (o || r.indexOf("Group") > -1)
      return t.prototype.triggerEvent.call(this, r, n);
    this._emitter.trigger(r, n);
  }, e.prototype.getRequestChildStyles = function() {
    var r = this.getEnabledAbles().reduce(function(n, o) {
      var i, a, s = (a = (i = o.requestChildStyle) === null || i === void 0 ? void 0 : i.call(o)) !== null && a !== void 0 ? a : [];
      return tt(tt([], I(n), !1), I(s), !1);
    }, []);
    return r;
  }, e.prototype.getMoveables = function() {
    return tt([], I(this.moveables), !1);
  }, e.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, tt(tt([], I(this.props.ables), !1), [Nd], !1), "Group");
  }, e.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = gr(this._originalDragTarget, !0);
  }, e.prototype._updateEvents = function() {
    var r = this.state, n = this.props, o = this._prevDragTarget, i = n.dragTarget || this.areaElement, a = n.targets, s = this.differ.update(a), c = s.added, l = s.changed, u = s.removed, f = c.length || u.length;
    (f || this._prevOriginalDragTarget !== this._originalDragTarget) && (lo(this, !1), lo(this, !0), this.updateState({ gestos: {} })), o !== i && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = wx(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = Sx(this, "GroupControl")));
    var d = !Mu(r.container, n.container);
    d && (r.container = n.container), (d || f || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || l.length || a.length && !fx(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!f;
  }, e.prototype._updateObserver = function() {
  }, e.defaultProps = A(A({}, Ao.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), e;
}(Ao), vA = /* @__PURE__ */ function(t) {
  pa(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return e.prototype.render = function() {
    var r = this, n, o = this.props, i = o.cspNonce, a = o.cssStyled, s = o.persistData, c = o.targets || [], l = c.length, u = this.isUnmounted || !l, f = (n = s?.children) !== null && n !== void 0 ? n : [];
    return u && !l && f.length ? c = f.map(function() {
      return null;
    }) : u || (f = []), S.createElement(a, { cspNonce: i, ref: rn(this, "controlBox"), className: st("control-box") }, c.map(function(d, p) {
      var g, h, m = (h = (g = o.individualGroupableProps) === null || g === void 0 ? void 0 : g.call(o, d, p)) !== null && h !== void 0 ? h : {};
      return S.createElement(Ao, A({ key: "moveable" + p, ref: i1(r, "moveables", p) }, o, m, { target: d, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: f[p] }));
    }));
  }, e.prototype.componentDidMount = function() {
  }, e.prototype.componentDidUpdate = function() {
  }, e.prototype.getTargets = function() {
    return this.props.targets;
  }, e.prototype.updateRect = function(r, n, o) {
    o === void 0 && (o = !0), Oo(!0), this.moveables.forEach(function(i) {
      i.updateRect(r, n, o);
    }), Oo();
  }, e.prototype.getRect = function() {
    return A(A({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(r) {
      return r.getRect();
    }) });
  }, e.prototype.request = function(r, n, o) {
    n === void 0 && (n = {});
    var i = this.moveables.map(function(c) {
      return c.request(r, A(A({}, n), { isInstant: !1 }), !1);
    }), a = o || n.isInstant, s = {
      request: function(c) {
        return i.forEach(function(l) {
          return l.request(c);
        }), this;
      },
      requestEnd: function() {
        return i.forEach(function(c) {
          return c.requestEnd();
        }), this;
      }
    };
    return a ? s.request(n).requestEnd() : s;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var o = n, i = Se(this.moveables, function(a) {
      var s = a.getTargets()[0], c = a.getControlBoxElement(), l = a.getDragElement();
      return !s || !l ? !1 : l === o || l.contains(o) || l !== s && s === o || s.contains(o) || c === o || c.contains(o);
    });
    return i && i.dragStart(r, n), this;
  }, e.prototype.hitTest = function() {
    return 0;
  }, e.prototype.isInside = function() {
    return !1;
  }, e.prototype.isDragging = function() {
    return !1;
  }, e.prototype.getDragElement = function() {
    return null;
  }, e.prototype.getMoveables = function() {
    return tt([], I(this.moveables), !1);
  }, e.prototype.updateRenderPoses = function() {
  }, e.prototype.checkUpdate = function() {
  }, e.prototype.triggerEvent = function() {
  }, e.prototype.updateAbles = function() {
  }, e.prototype._updateEvents = function() {
  }, e.prototype._updateObserver = function() {
  }, e;
}(Ao);
function Rx(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Lt(n)) {
        e[n] && r.push.apply(r, tt([], I(e[n]), !1));
        return;
      }
      Tt(n) ? r.push.apply(r, tt([], I(Rx(n, e)), !1)) : r.push(n);
    }
  }), r;
}
function Dx(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Lt(n)) {
        e[n] && r.push.apply(r, tt([], I(e[n]), !1));
        return;
      }
      Tt(n) ? r.push(Dx(n, e)) : r.push(n);
    }
  }), r;
}
function Mx(t, e) {
  return t.length !== e.length || t.some(function(r, n) {
    var o = e[n];
    return !r && !o ? !1 : r != o ? Tt(r) && Tt(o) ? Mx(r, o) : !0 : !1;
  });
}
var gA = /* @__PURE__ */ function(t) {
  pa(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new f1(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
  }
  return e.makeStyled = function() {
    var r = {}, n = this.getTotalAbles();
    n.forEach(function(i) {
      var a = i.css;
      a && a.forEach(function(s) {
        r[s] = !0;
      });
    });
    var o = Ge(r).join(`
`);
    this.defaultStyled = g1("div", cO(dd, tN + o));
  }, e.getTotalAbles = function() {
    return tt([vx, Nd, _x, hx], I(this.defaultAbles), !1);
  }, e.prototype.render = function() {
    var r, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var o = this.props, i = o.ables, a = o.props, s = GO(o, ["ables", "props"]), c = I(this._updateRefs(!0), 2), l = c[0], u = c[1], f = Rx(l, u), d = f.length > 1, p = n.getTotalAbles(), g = tt(tt([], I(p), !1), I(i || []), !1), h = A(A(A({}, s), a || {}), { ables: g, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = f;
    var m = null, y = this.moveable, x = s.persistData;
    if (x?.children && (d = !0), s.individualGroupable)
      return S.createElement(vA, A({ key: "individual-group", ref: rn(this, "moveable") }, h, { target: null, targets: f }));
    if (d) {
      var b = Dx(l, u);
      if (y && !y.props.groupable && !y.props.individualGroupable) {
        var w = y.props.target;
        w && f.indexOf(w) > -1 && (m = A({}, y.state));
      }
      return S.createElement(hA, A({ key: "group", ref: rn(this, "moveable") }, h, (r = s.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: f, targetGroups: b, firstRenderState: m }));
    } else {
      var _ = f[0];
      if (y && (y.props.groupable || y.props.individualGroupable)) {
        var E = y.moveables || [], C = Se(E, function(T) {
          return T.props.target === _;
        });
        C && (m = A({}, C.state));
      }
      return S.createElement(Ao, A({ key: "single", ref: rn(this, "moveable") }, h, { target: _, firstRenderState: m }));
    }
  }, e.prototype.componentDidMount = function() {
    this._checkChangeTargets();
  }, e.prototype.componentDidUpdate = function() {
    this._checkChangeTargets();
  }, e.prototype.componentWillUnmount = function() {
    this.selectorMap = {}, this.refTargets = [];
  }, e.prototype.getTargets = function() {
    var r, n;
    return (n = (r = this.moveable) === null || r === void 0 ? void 0 : r.getTargets()) !== null && n !== void 0 ? n : [];
  }, e.prototype.updateSelectors = function() {
    this.selectorMap = {}, this._updateRefs(), this.forceUpdate();
  }, e.prototype.waitToChangeTarget = function() {
    var r = this, n;
    return this._onChangeTargets = function() {
      r._onChangeTargets = null, n();
    }, new Promise(function(o) {
      n = o;
    });
  }, e.prototype.waitToChangeTargets = function() {
    return this.waitToChangeTarget();
  }, e.prototype.getManager = function() {
    return this.moveable;
  }, e.prototype.getMoveables = function() {
    return this.moveable.getMoveables();
  }, e.prototype.getDragElement = function() {
    return this.moveable.getDragElement();
  }, e.prototype._updateRefs = function(r) {
    var n = this.refTargets, o = Rd(this.props.target || this.props.targets), i = typeof document < "u", a = Mx(n, o), s = this.selectorMap, c = {};
    return this.refTargets.forEach(function l(u) {
      if (Lt(u)) {
        var f = s[u];
        f ? c[u] = s[u] : i && (a = !0, c[u] = [].slice.call(document.querySelectorAll(u)));
      } else Tt(u) && u.forEach(l);
    }), this._tmpRefTargets = o, this._tmpSelectorMap = c, [
      o,
      c,
      !r && a
    ];
  }, e.prototype._checkChangeTargets = function() {
    var r, n, o;
    this.refTargets = this._tmpRefTargets, this.selectorMap = this._tmpSelectorMap;
    var i = this._differ.update(this._elementTargets), a = i.added, s = i.removed, c = a.length || s.length;
    c && ((n = (r = this.props).onChangeTargets) === null || n === void 0 || n.call(r, {
      moveable: this.moveable,
      targets: this._elementTargets
    }), (o = this._onChangeTargets) === null || o === void 0 || o.call(this));
    var l = I(this._updateRefs(), 3), u = l[0], f = l[1], d = l[2];
    this.refTargets = u, this.selectorMap = f, d && this.forceUpdate();
  }, e.defaultAbles = [], e.customStyledMap = {}, e.defaultStyled = null, $O([
    a1(nN)
  ], e.prototype, "moveable", void 0), e;
}(S.PureComponent), Kh = /* @__PURE__ */ function(t) {
  pa(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.defaultAbles = dA, e;
}(gA), Nu = function(t, e) {
  return Nu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Nu(t, e);
};
function mA(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Nu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function yA(t, e) {
  return e = {
    exports: {}
  }, t(e, e.exports), e.exports;
}
var ma = yA(function(t, e) {
  function r(c) {
    if (c && typeof c == "object") {
      var l = c.which || c.keyCode || c.charCode;
      l && (c = l);
    }
    if (typeof c == "number") return a[c];
    var u = String(c), f = n[u.toLowerCase()];
    if (f) return f;
    var f = o[u.toLowerCase()];
    if (f) return f;
    if (u.length === 1) return u.charCodeAt(0);
  }
  r.isEventKey = function(l, u) {
    if (l && typeof l == "object") {
      var f = l.which || l.keyCode || l.charCode;
      if (f == null)
        return !1;
      if (typeof u == "string") {
        var d = n[u.toLowerCase()];
        if (d)
          return d === f;
        var d = o[u.toLowerCase()];
        if (d)
          return d === f;
      } else if (typeof u == "number")
        return u === f;
      return !1;
    }
  }, e = t.exports = r;
  var n = e.code = e.codes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    "pause/break": 19,
    "caps lock": 20,
    esc: 27,
    space: 32,
    "page up": 33,
    "page down": 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    command: 91,
    "left command": 91,
    "right command": 93,
    "numpad *": 106,
    "numpad +": 107,
    "numpad -": 109,
    "numpad .": 110,
    "numpad /": 111,
    "num lock": 144,
    "scroll lock": 145,
    "my computer": 182,
    "my calculator": 183,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  }, o = e.aliases = {
    windows: 91,
    "⇧": 16,
    "⌥": 18,
    "⌃": 17,
    "⌘": 91,
    ctl: 17,
    control: 17,
    option: 18,
    pause: 19,
    break: 19,
    caps: 20,
    return: 13,
    escape: 27,
    spc: 32,
    spacebar: 32,
    pgup: 33,
    pgdn: 34,
    ins: 45,
    del: 46,
    cmd: 91
  };
  /*!
   * Programatically add the following
   */
  for (i = 97; i < 123; i++) n[String.fromCharCode(i)] = i - 32;
  for (var i = 48; i < 58; i++) n[i - 48] = i;
  for (i = 1; i < 13; i++) n["f" + i] = i + 111;
  for (i = 0; i < 10; i++) n["numpad " + i] = i + 96;
  var a = e.names = e.title = {};
  for (i in n) a[n[i]] = i;
  for (var s in o)
    n[s] = o[s];
});
ma.code;
ma.codes;
ma.aliases;
var xA = ma.names;
ma.title;
var Zh = {
  "+": "plus",
  "left command": "meta",
  "right command": "meta"
}, Jh = {
  shift: 1,
  ctrl: 2,
  alt: 3,
  meta: 4
};
function Px(t, e) {
  var r = (xA[t] || e || "").toLowerCase();
  for (var n in Zh)
    r = r.replace(n, Zh[n]);
  return r.replace(/\s/g, "");
}
function Ox(t, e) {
  e === void 0 && (e = Px(t.keyCode, t.key));
  var r = bA(t);
  return r.indexOf(e) === -1 && r.push(e), r.filter(Boolean);
}
function bA(t) {
  var e = [t.shiftKey && "shift", t.ctrlKey && "ctrl", t.altKey && "alt", t.metaKey && "meta"];
  return e.filter(Boolean);
}
function Qh(t) {
  var e = t.slice();
  return e.sort(function(r, n) {
    var o = Jh[r] || 5, i = Jh[n] || 5;
    return o - i;
  }), e;
}
var tv, wA = /* @__PURE__ */ function(t) {
  mA(e, t);
  function e(n) {
    n === void 0 && (n = window);
    var o = t.call(this) || this;
    return o.container = n, o.ctrlKey = !1, o.altKey = !1, o.shiftKey = !1, o.metaKey = !1, o.clear = function() {
      return o.ctrlKey = !1, o.altKey = !1, o.shiftKey = !1, o.metaKey = !1, o;
    }, o.keydownEvent = function(i) {
      o.triggerEvent("keydown", i);
    }, o.keyupEvent = function(i) {
      o.triggerEvent("keyup", i);
    }, o.blur = function() {
      o.clear(), o.trigger("blur");
    }, Ft(n, "blur", o.blur), Ft(n, "keydown", o.keydownEvent), Ft(n, "keyup", o.keyupEvent), o;
  }
  var r = e.prototype;
  return Object.defineProperty(e, "global", {
    /**
     */
    get: function() {
      return tv || (tv = new e());
    },
    enumerable: !1,
    configurable: !0
  }), e.setGlobal = function() {
    return this.global;
  }, r.destroy = function() {
    var n = this.container;
    this.clear(), this.off(), kt(n, "blur", this.blur), kt(n, "keydown", this.keydownEvent), kt(n, "keyup", this.keyupEvent);
  }, r.keydown = function(n, o) {
    return this.addEvent("keydown", n, o);
  }, r.offKeydown = function(n, o) {
    return this.removeEvent("keydown", n, o);
  }, r.offKeyup = function(n, o) {
    return this.removeEvent("keyup", n, o);
  }, r.keyup = function(n, o) {
    return this.addEvent("keyup", n, o);
  }, r.addEvent = function(n, o, i) {
    return Tt(o) ? this.on("".concat(n, ".").concat(Qh(o).join(".")), i) : Lt(o) ? this.on("".concat(n, ".").concat(o), i) : this.on(n, o), this;
  }, r.removeEvent = function(n, o, i) {
    return Tt(o) ? this.off("".concat(n, ".").concat(Qh(o).join(".")), i) : Lt(o) ? this.off("".concat(n, ".").concat(o), i) : this.off(n, o), this;
  }, r.triggerEvent = function(n, o) {
    this.ctrlKey = o.ctrlKey, this.shiftKey = o.shiftKey, this.altKey = o.altKey, this.metaKey = o.metaKey;
    var i = Px(o.keyCode, o.key), a = i === "ctrl" || i === "shift" || i === "meta" || i === "alt", s = {
      key: i,
      isToggle: a,
      inputEvent: o,
      keyCode: o.keyCode,
      ctrlKey: o.ctrlKey,
      altKey: o.altKey,
      shiftKey: o.shiftKey,
      metaKey: o.metaKey
    };
    this.trigger(n, s), this.trigger("".concat(n, ".").concat(i), s);
    var c = Ox(o, i);
    c.length > 1 && this.trigger("".concat(n, ".").concat(c.join(".")), s);
  }, e;
}(fn), ku = function(t, e) {
  return ku = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, ku(t, e);
};
function Nx(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ku(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Zt = function() {
  return Zt = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Zt.apply(this, arguments);
};
function SA(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
    e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function CA(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(t, e, r, n);
  else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
}
function Di(t, e, r) {
  for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function EA(t) {
  if ("touches" in t) {
    var e = t.touches[0] || t.changedTouches[0];
    return {
      clientX: e.clientX,
      clientY: e.clientY
    };
  } else
    return {
      clientX: t.clientX,
      clientY: t.clientY
    };
}
function _A(t) {
  if (typeof Map > "u")
    return t.filter(function(r, n) {
      return t.indexOf(r) === n;
    });
  var e = /* @__PURE__ */ new Map();
  return t.filter(function(r) {
    return e.has(r) ? !1 : (e.set(r, !0), !0);
  });
}
function TA(t, e, r) {
  var n = tr(t);
  return n.elementFromPoint && n.elementFromPoint(e, r) || null;
}
function kx(t, e, r) {
  var n = t.tag, o = t.children, i = t.attributes, a = t.className, s = t.style, c = e || tr(r).createElement(n);
  for (var l in i)
    c.setAttribute(l, i[l]);
  var u = c.children;
  if (o.forEach(function(d, p) {
    kx(d, u[p], c);
  }), a && a.split(/\s+/g).forEach(function(d) {
    d && !Ut(c, d) && ji(c, d);
  }), s) {
    var f = c.style;
    for (var l in s)
      f[l] = s[l];
  }
  return !e && r && r.appendChild(c), c;
}
function RA(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var o = e || {}, i = o.className, a = i === void 0 ? "" : i, s = o.style, c = s === void 0 ? {} : s, l = SA(o, ["className", "style"]);
  return {
    tag: t,
    className: a,
    style: c,
    attributes: l,
    children: r
  };
}
function Tl(t, e, r) {
  t !== e && r(t, e);
}
function ev(t, e, r) {
  var n;
  r === void 0 && (r = t.data.boundArea);
  var o = t.distX, i = o === void 0 ? 0 : o, a = t.distY, s = a === void 0 ? 0 : a, c = t.data, l = c.startX, u = c.startY;
  if (e > 0) {
    var f = Math.sqrt((i * i + s * s) / (1 + e * e)), d = e * f;
    i = (i >= 0 ? 1 : -1) * d, s = (s >= 0 ? 1 : -1) * f;
  }
  var p = Math.abs(i), g = Math.abs(s), h = i < 0 ? l - r.left : r.right - l, m = s < 0 ? u - r.top : r.bottom - u;
  n = Zu([p, g], [0, 0], [h, m], !!e), p = n[0], g = n[1], i = (i >= 0 ? 1 : -1) * p, s = (s >= 0 ? 1 : -1) * g;
  var y = Math.min(0, i), x = Math.min(0, s), b = l + y, w = u + x;
  return {
    left: b,
    top: w,
    right: b + p,
    bottom: w + g,
    width: p,
    height: g
  };
}
function os(t) {
  var e = t.getBoundingClientRect(), r = e.left, n = e.top, o = e.width, i = e.height;
  return {
    pos1: [r, n],
    pos2: [r + o, n],
    pos3: [r, n + i],
    pos4: [r + o, n + i]
  };
}
function rv(t, e, r) {
  var n = io(t, e), o = n.list, i = n.prevList, a = n.added, s = n.removed, c = n.maintained;
  return Di(Di(Di([], a.map(function(l) {
    return o[l];
  }), !0), s.map(function(l) {
    return i[l];
  }), !0), r ? c.map(function(l) {
    var u = l[1];
    return o[u];
  }) : []);
}
function nv(t) {
  for (var e = 0, r = t.length, n = 1; n < r; ++n)
    e = Math.max(dr(t[n], t[n - 1]), e);
  return e;
}
var Ax = Hs(`
:host {
    position: fixed;
    display: none;
    border: 1px solid #4af;
    background: rgba(68, 170, 255, 0.5);
    pointer-events: none;
    will-change: transform;
    z-index: 100;
}
`), Au = "selecto-selection ".concat(Ax.className), kd = ["className", "boundContainer", "selectableTargets", "selectByClick", "selectFromInside", "continueSelect", "continueSelectWithoutDeselect", "toggleContinueSelect", "toggleContinueSelectWithoutDeselect", "keyContainer", "hitRate", "scrollOptions", "checkInput", "preventDefault", "ratio", "getElementRect", "preventDragFromInside", "rootContainer", "dragCondition", "clickBySelectEnd", "checkOverflow", "innerScrollOptions"], DA = Di([
  // ignore target, container,
  "dragContainer",
  "cspNonce",
  "preventClickEventOnDrag",
  "preventClickEventOnDragStart",
  "preventRightClick"
], kd), jx = ["dragStart", "drag", "dragEnd", "selectStart", "select", "selectEnd", "keydown", "keyup", "scroll", "innerScroll"], MA = ["clickTarget", "getSelectableElements", "setSelectedTargets", "getElementPoints", "getSelectedTargets", "findSelectableTargets", "triggerDragStart", "checkScroll", "selectTargetsByPoints", "setSelectedTargetsByPoints"], PA = /* @__PURE__ */ function(t) {
  Nx(e, t);
  function e(n) {
    n === void 0 && (n = {});
    var o = t.call(this) || this;
    o.selectedTargets = [], o.dragScroll = new d1(), o._onDragStart = function(s, c) {
      var l = s.data, u = s.clientX, f = s.clientY, d = s.inputEvent, p = o.options, g = p.selectFromInside, h = p.selectByClick, m = p.rootContainer, y = p.boundContainer, x = p.preventDragFromInside, b = x === void 0 ? !0 : x, w = p.clickBySelectEnd, _ = p.dragCondition;
      if (_ && !_(s)) {
        s.stop();
        return;
      }
      l.data = {};
      var E = De(o.container);
      l.innerWidth = E.innerWidth, l.innerHeight = E.innerHeight, o.findSelectableTargets(l), l.startSelectedTargets = o.selectedTargets, l.scaleMatrix = cd(), l.containerX = 0, l.containerY = 0;
      var C = o.container, T = {
        left: -1 / 0,
        top: -1 / 0,
        right: 1 / 0,
        bottom: 1 / 0
      };
      if (m) {
        var R = o.container.getBoundingClientRect();
        l.containerX = R.left, l.containerY = R.top, l.scaleMatrix = xO(o.container, m);
      }
      if (y) {
        var D = $t(y) && "element" in y ? Zt({
          left: !0,
          top: !0,
          bottom: !0,
          right: !0
        }, y) : {
          element: y,
          left: !0,
          top: !0,
          bottom: !0,
          right: !0
        }, N = D.element, M = void 0;
        if (N) {
          Lt(N) ? M = tr(C).querySelector(N) : N === !0 ? M = o.container : M = N;
          var O = M.getBoundingClientRect();
          D.left && (T.left = O.left), D.top && (T.top = O.top), D.right && (T.right = O.right), D.bottom && (T.bottom = O.bottom);
        }
      }
      l.boundArea = T;
      var k = {
        left: u,
        top: f,
        right: u,
        bottom: f,
        width: 0,
        height: 0
      }, F = [], $ = h && !w, V = !1;
      if (!g || $) {
        var L = o._findElement(
          c || d.target,
          // elementFromPoint(clientX, clientY),
          l.selectableTargets
        );
        V = !!L, $ && (F = L ? [L] : []);
      }
      var z = !g && V;
      if (z && !h)
        return s.stop(), !1;
      var j = d.type, B = j === "mousedown" || j === "touchstart", Y = !s.isClick && B ? o.emit("dragStart", Zt(Zt({}, s), {
        data: l.data
      })) : !0;
      if (!Y)
        return s.stop(), !1;
      if (o.continueSelect ? (F = rv(o.selectedTargets, F, o.continueSelectWithoutDeselect), l.startPassedTargets = o.selectedTargets) : l.startPassedTargets = [], o._select(F, k, s, !0, z && h && !w && b), l.startX = u, l.startY = f, l.selectFlag = !1, l.preventDragFromInside = !1, d.target) {
        var K = ds(l.scaleMatrix, [u - l.containerX, f - l.containerY]);
        o.target.style.cssText += "position: ".concat(m ? "absolute" : "fixed", ";") + "left:0px;top:0px;" + "transform: translate(".concat(K[0], "px, ").concat(K[1], "px)");
      }
      if (z && h && !w)
        d.preventDefault(), b && (o._selectEnd(l.startSelectedTargets, l.startPassedTargets, k, s, !0), l.preventDragFromInside = !0);
      else {
        l.selectFlag = !0;
        var X = o.options, H = X.scrollOptions, Q = X.innerScrollOptions, W = !1;
        if (Q) {
          for (var q = s.inputEvent, ot = q.target, nt = null, U = ot; U && U !== tr(C).body; ) {
            var et = getComputedStyle(U).overflow !== "visible";
            if (et) {
              nt = U;
              break;
            }
            U = U.parentElement;
          }
          nt && (l.innerScrollOptions = Zt({
            container: nt,
            checkScrollEvent: !0
          }, Q === !0 ? {} : Q), o.dragScroll.dragStart(s, l.innerScrollOptions), W = !0);
        }
        !W && H && H.container && o.dragScroll.dragStart(s, H), z && h && w && (l.selectFlag = !1, s.preventDrag());
      }
      return !0;
    }, o._onDrag = function(s) {
      if (s.data.selectFlag) {
        var c = o.scrollOptions, l = s.data.innerScrollOptions, u = l || c?.container;
        if (u && !s.isScroll && o.dragScroll.drag(s, l || c))
          return;
      }
      o._checkSelected(s);
    }, o._onDragEnd = function(s) {
      var c = s.data, l = s.inputEvent, u = ev(s, o.options.ratio), f = c.selectFlag, d = o.container;
      if (l && o.emit("dragEnd", Zt(Zt({
        isDouble: !!s.isDouble,
        isClick: !!s.isClick,
        isDrag: !1,
        isSelect: f
      }, s), {
        data: c.data,
        rect: u
      })), o.target.style.cssText += "display: none;", f)
        c.selectFlag = !1, o.dragScroll.dragEnd();
      else if (o.selectByClick && o.clickBySelectEnd) {
        var p = o._findElement(l?.target || TA(d, s.clientX, s.clientY), c.selectableTargets);
        o._select(p ? [p] : [], u, s);
      }
      c.preventDragFromInside || o._selectEnd(c.startSelectedTargets, c.startPassedTargets, u, s);
    }, o._onKeyDown = function(s) {
      var c = o.options, l = !1;
      if (!o._keydownContinueSelect) {
        var u = o._sameCombiKey(s, c.toggleContinueSelect);
        o._keydownContinueSelect = u, l || (l = u);
      }
      if (!o._keydownContinueSelectWithoutDeselection) {
        var u = o._sameCombiKey(s, c.toggleContinueSelectWithoutDeselect);
        o._keydownContinueSelectWithoutDeselection = u, l || (l = u);
      }
      l && o.emit("keydown", {
        keydownContinueSelect: o._keydownContinueSelect,
        keydownContinueSelectWithoutDeselection: o._keydownContinueSelectWithoutDeselection
      });
    }, o._onKeyUp = function(s) {
      var c = o.options, l = !1;
      if (o._keydownContinueSelect) {
        var u = o._sameCombiKey(s, c.toggleContinueSelect, !0);
        o._keydownContinueSelect = !u, l || (l = u);
      }
      if (o._keydownContinueSelectWithoutDeselection) {
        var u = o._sameCombiKey(s, c.toggleContinueSelectWithoutDeselect, !0);
        o._keydownContinueSelectWithoutDeselection = !u, l || (l = u);
      }
      l && o.emit("keyup", {
        keydownContinueSelect: o._keydownContinueSelect,
        keydownContinueSelectWithoutDeselection: o._keydownContinueSelectWithoutDeselection
      });
    }, o._onBlur = function() {
      (o._keydownContinueSelect || o._keydownContinueSelectWithoutDeselection) && (o._keydownContinueSelect = !1, o._keydownContinueSelectWithoutDeselection = !1, o.emit("keyup", {
        keydownContinueSelect: o._keydownContinueSelect,
        keydownContinueSelectWithoutDeselection: o._keydownContinueSelectWithoutDeselection
      }));
    }, o._onDocumentSelectStart = function(s) {
      var c = tr(o.container);
      if (o.gesto.isFlag()) {
        var l = o.dragContainer;
        l === De(o.container) && (l = c.documentElement);
        var u = Ii(l) ? [l] : [].slice.call(l), f = s.target;
        u.some(function(d) {
          if (d === f || d.contains(f))
            return s.preventDefault(), !0;
        });
      }
    }, o.target = n.portalContainer;
    var i = n.container;
    o.options = Zt({
      className: "",
      portalContainer: null,
      container: null,
      dragContainer: null,
      selectableTargets: [],
      selectByClick: !0,
      selectFromInside: !0,
      clickBySelectEnd: !1,
      hitRate: 100,
      continueSelect: !1,
      continueSelectWithoutDeselect: !1,
      toggleContinueSelect: null,
      toggleContinueSelectWithoutDeselect: null,
      keyContainer: null,
      scrollOptions: null,
      checkInput: !1,
      preventDefault: !1,
      boundContainer: !1,
      preventDragFromInside: !0,
      dragCondition: null,
      rootContainer: null,
      checkOverflow: !1,
      innerScrollOptions: !1,
      getElementRect: os,
      cspNonce: "",
      ratio: 0
    }, n);
    var a = o.options.portalContainer;
    return a && (i = a.parentElement), o.container = i || document.body, o.initElement(), o.initDragScroll(), o.setKeyController(), o;
  }
  var r = e.prototype;
  return r.setSelectedTargets = function(n) {
    var o = this.selectedTargets, i = io(o, n), a = i.added, s = i.removed, c = i.prevList, l = i.list;
    return this.selectedTargets = n, {
      added: a.map(function(u) {
        return l[u];
      }),
      removed: s.map(function(u) {
        return c[u];
      }),
      beforeSelected: o,
      selected: n
    };
  }, r.setSelectedTargetsByPoints = function(n, o) {
    var i = Math.min(n[0], o[0]), a = Math.min(n[1], o[1]), s = Math.max(n[0], o[0]), c = Math.max(n[1], o[1]), l = {
      left: i,
      top: a,
      right: s,
      bottom: c,
      width: s - i,
      height: c - a
    }, u = {
      ignoreClick: !0
    };
    this.findSelectableTargets(u);
    var f = this.hitTest(l, u, !0, null), d = this.setSelectedTargets(f);
    return Zt(Zt({}, d), {
      rect: l
    });
  }, r.selectTargetsByPoints = function(n, o) {
    var i = new MouseEvent("mousedown", {
      clientX: n[0],
      clientY: n[1],
      cancelable: !0,
      bubbles: !0
    }), a = new MouseEvent("mousemove", {
      clientX: o[0],
      clientY: o[1],
      cancelable: !0,
      bubbles: !0
    }), s = new MouseEvent("mousemove", {
      clientX: o[0],
      clientY: o[1],
      cancelable: !0,
      bubbles: !0
    }), c = this.gesto, l = c.onDragStart(i);
    l !== !1 && (c.onDrag(a), c.onDragEnd(s));
  }, r.getSelectedTargets = function() {
    return this.selectedTargets;
  }, r.triggerDragStart = function(n) {
    return this.gesto.triggerDragStart(n), this;
  }, r.destroy = function() {
    var n;
    this.off(), this.keycon && this.keycon.destroy(), this.gesto.unset(), this.injectResult.destroy(), this.dragScroll.dragEnd(), kt(document, "selectstart", this._onDocumentSelectStart), this.options.portalContainer || (n = this.target.parentElement) === null || n === void 0 || n.removeChild(this.target), this.keycon = null, this.gesto = null, this.injectResult = null, this.target = null, this.container = null, this.options = null;
  }, r.getElementPoints = function(n) {
    var o = this.getElementRect || os, i = o(n), a = [i.pos1, i.pos2, i.pos4, i.pos3];
    if (o !== os) {
      var s = n.getBoundingClientRect();
      return pu(a, s);
    }
    return a;
  }, r.getSelectableElements = function() {
    var n = this.container, o = [];
    return this.options.selectableTargets.forEach(function(i) {
      if (we(i)) {
        var a = i();
        a && o.push.apply(o, [].slice.call(a));
      } else if (Ii(i))
        o.push(i);
      else if ($t(i))
        o.push(i.value || i.current);
      else {
        var s = [].slice.call(tr(n).querySelectorAll(i));
        o.push.apply(o, s);
      }
    }), o;
  }, r.checkScroll = function() {
    if (this.gesto.isFlag()) {
      var n = this.scrollOptions, o = this.gesto.getEventData().innerScrollOptions, i = o || n?.container;
      i && this.dragScroll.checkScroll(Zt({
        inputEvent: this.gesto.getCurrentEvent()
      }, o || n));
    }
  }, r.findSelectableTargets = function(n) {
    var o = this;
    n === void 0 && (n = this.gesto.getEventData());
    var i = this.getSelectableElements(), a = i.map(function(f) {
      return o.getElementPoints(f);
    });
    n.selectableTargets = i, n.selectablePoints = a, n.selectableParentMap = null;
    var s = this.options, c = s.checkOverflow || s.innerScrollOptions, l = tr(this.container);
    if (c) {
      var u = /* @__PURE__ */ new Map();
      n.selectableInnerScrollParentMap = u, n.selectableInnerScrollPathsList = i.map(function(f, d) {
        for (var p = f.parentElement, g = [], h = [], m = function() {
          var y = u.get(p);
          if (!y) {
            var x = getComputedStyle(p).overflow !== "visible";
            if (x) {
              var b = os(p);
              y = {
                parentElement: p,
                indexes: [],
                points: [b.pos1, b.pos2, b.pos4, b.pos3],
                paths: Di([], h)
              }, g.push(p), g.forEach(function(w) {
                u.set(w, y);
              }), g = [];
            }
          }
          y ? (p = y.parentElement, u.get(p).indexes.push(d), h.push(p)) : g.push(p), p = p.parentElement;
        }; p && p !== l.body; )
          m();
        return h;
      });
    }
    return s.checkOverflow || (n.selectableInners = i.map(function() {
      return !0;
    })), this._refreshGroups(n), i;
  }, r.clickTarget = function(n, o) {
    var i = EA(n), a = i.clientX, s = i.clientY, c = {
      data: {
        selectFlag: !1
      },
      clientX: a,
      clientY: s,
      inputEvent: n,
      isClick: !0,
      isTrusted: !1,
      stop: function() {
        return !1;
      }
    };
    return this._onDragStart(c, o) && this._onDragEnd(c), this;
  }, r.setKeyController = function() {
    var n = this.options, o = n.keyContainer, i = n.toggleContinueSelect, a = n.toggleContinueSelectWithoutDeselect;
    this.keycon && (this.keycon.destroy(), this.keycon = null), (i || a) && (this.keycon = new wA(o || De(this.container)), this.keycon.keydown(this._onKeyDown).keyup(this._onKeyUp).on("blur", this._onBlur));
  }, r.setClassName = function(n) {
    this.options.className = n, this.target.setAttribute("class", "".concat(Au, " ").concat(n || ""));
  }, r.setKeyEvent = function() {
    var n = this.options, o = n.toggleContinueSelect, i = n.toggleContinueSelectWithoutDeselect;
    !o && !i || this.keycon || this.setKeyController();
  }, r.setKeyContainer = function(n) {
    var o = this, i = this.options;
    Tl(i.keyContainer, n, function() {
      i.keyContainer = n, o.setKeyController();
    });
  }, r.getContinueSelect = function() {
    var n = this.options, o = n.continueSelect, i = n.toggleContinueSelect;
    return !i || !this._keydownContinueSelect ? o : !o;
  }, r.getContinueSelectWithoutDeselect = function() {
    var n = this.options, o = n.continueSelectWithoutDeselect, i = n.toggleContinueSelectWithoutDeselect;
    return !i || !this._keydownContinueSelectWithoutDeselection ? o : !o;
  }, r.setToggleContinueSelect = function(n) {
    var o = this, i = this.options;
    Tl(i.toggleContinueSelect, n, function() {
      i.toggleContinueSelect = n, o.setKeyEvent();
    });
  }, r.setToggleContinueSelectWithoutDeselect = function(n) {
    var o = this, i = this.options;
    Tl(i.toggleContinueSelectWithoutDeselect, n, function() {
      i.toggleContinueSelectWithoutDeselect = n, o.setKeyEvent();
    });
  }, r.setPreventDefault = function(n) {
    this.gesto.options.preventDefault = n;
  }, r.setCheckInput = function(n) {
    this.gesto.options.checkInput = n;
  }, r.initElement = function() {
    var n = this.options, o = n.dragContainer, i = n.checkInput, a = n.preventDefault, s = n.preventClickEventOnDragStart, c = n.preventClickEventOnDrag, l = n.preventClickEventByCondition, u = n.preventRightClick, f = u === void 0 ? !0 : u, d = n.className, p = this.container;
    this.target = kx(RA("div", {
      className: "".concat(Au, " ").concat(d || "")
    }), this.target, p);
    var g = this.target;
    this.dragContainer = typeof o == "string" ? [].slice.call(tr(p).querySelectorAll(o)) : o || this.target.parentNode, this.gesto = new v1(this.dragContainer, {
      checkWindowBlur: !0,
      container: De(p),
      checkInput: i,
      preventDefault: a,
      preventClickEventOnDragStart: s,
      preventClickEventOnDrag: c,
      preventClickEventByCondition: l,
      preventRightClick: f
    }).on({
      dragStart: this._onDragStart,
      drag: this._onDrag,
      dragEnd: this._onDragEnd
    }), Ft(document, "selectstart", this._onDocumentSelectStart), this.injectResult = Ax.inject(g, {
      nonce: this.options.cspNonce
    });
  }, r.hitTest = function(n, o, i, a) {
    var s = this.options, c = s.hitRate, l = s.selectByClick, u = n.left, f = n.top, d = n.right, p = n.bottom, g = o.innerGroups, h = o.innerWidth, m = o.innerHeight, y = a?.clientX, x = a?.clientY, b = o.ignoreClick, w = [[u, f], [d, f], [d, p], [u, p]], _ = function(L, z) {
      var j = mr(typeof c == "function" ? "".concat(c(z)) : "".concat(c)), B = b ? !1 : Ms([y, x], L);
      if (!i && l && B)
        return !0;
      var Y = vu(w, L);
      if (!Y.length)
        return !1;
      var K = Si(Y), X = 0;
      if (K === 0 && Si(L) === 0 ? (X = nv(L), K = nv(Y)) : X = Si(L), j.unit === "px")
        return K >= j.value;
      var H = Ai(Math.round(K / X * 100), 0, 100);
      return H >= Math.min(100, j.value);
    }, E = o.selectableTargets, C = o.selectablePoints, T = o.selectableInners;
    if (!g)
      return E.filter(function(L, z) {
        return T[z] ? _(C[z], E[z]) : !1;
      });
    for (var R = [], D = Math.floor(u / h), N = Math.floor(d / h), M = Math.floor(f / m), O = Math.floor(p / m), k = D; k <= N; ++k) {
      var F = g[k];
      if (F)
        for (var $ = M; $ <= O; ++$) {
          var V = F[$];
          V && V.forEach(function(L) {
            var z = C[L], j = T[L], B = E[L];
            j && _(z, B) && R.push(B);
          });
        }
    }
    return _A(R);
  }, r.initDragScroll = function() {
    var n = this;
    this.dragScroll.on("scrollDrag", function(o) {
      var i = o.next;
      i(n.gesto.getCurrentEvent());
    }).on("scroll", function(o) {
      var i = o.container, a = o.direction, s = n.gesto.getEventData().innerScrollOptions;
      s ? n.emit("innerScroll", {
        container: i,
        direction: a
      }) : n.emit("scroll", {
        container: i,
        direction: a
      });
    }).on("move", function(o) {
      var i = o.offsetX, a = o.offsetY, s = o.inputEvent, c = n.gesto;
      if (!(!c || !c.isFlag())) {
        var l = n.gesto.getEventData(), u = l.boundArea;
        l.startX -= i, l.startY -= a;
        var f = n.gesto.getEventData().innerScrollOptions, d = f?.container, p = !1;
        if (d) {
          var g = l.selectableInnerScrollParentMap, h = g.get(d);
          h && (h.paths.forEach(function(m) {
            var y = g.get(m);
            y.points.forEach(function(x) {
              x[0] -= i, x[1] -= a;
            });
          }), h.indexes.forEach(function(m) {
            l.selectablePoints[m].forEach(function(y) {
              y[0] -= i, y[1] -= a;
            });
          }), p = !0);
        }
        p || l.selectablePoints.forEach(function(m) {
          m.forEach(function(y) {
            y[0] -= i, y[1] -= a;
          });
        }), n._refreshGroups(l), u.left -= i, u.right -= i, u.top -= a, u.bottom -= a, n.gesto.scrollBy(i, a, s.inputEvent), n._checkSelected(n.gesto.getCurrentEvent());
      }
    });
  }, r._select = function(n, o, i, a, s) {
    s === void 0 && (s = !1);
    var c = i.inputEvent, l = i.data, u = this.setSelectedTargets(n), f = io(l.startSelectedTargets, n), d = f.added, p = f.removed, g = f.prevList, h = f.list, m = {
      startSelected: g,
      startAdded: d.map(function(y) {
        return h[y];
      }),
      startRemoved: p.map(function(y) {
        return g[y];
      })
    };
    a && this.emit("selectStart", Zt(Zt(Zt({}, u), m), {
      rect: o,
      inputEvent: c,
      data: l.data,
      isTrusted: i.isTrusted,
      isDragStartEnd: s
    })), (u.added.length || u.removed.length) && this.emit("select", Zt(Zt(Zt({}, u), m), {
      rect: o,
      inputEvent: c,
      data: l.data,
      isTrusted: i.isTrusted,
      isDragStartEnd: s
    }));
  }, r._selectEnd = function(n, o, i, a, s) {
    s === void 0 && (s = !1);
    var c = a.inputEvent, l = a.isDouble, u = a.data, f = c && c.type, d = f === "mousedown" || f === "touchstart", p = io(n, this.selectedTargets), g = p.added, h = p.removed, m = p.prevList, y = p.list, x = io(o, this.selectedTargets), b = x.added, w = x.removed, _ = x.prevList, E = x.list;
    this.emit("selectEnd", {
      startSelected: n,
      beforeSelected: o,
      selected: this.selectedTargets,
      added: g.map(function(C) {
        return y[C];
      }),
      removed: h.map(function(C) {
        return m[C];
      }),
      afterAdded: b.map(function(C) {
        return E[C];
      }),
      afterRemoved: w.map(function(C) {
        return _[C];
      }),
      isDragStart: d && s,
      isDragStartEnd: d && s,
      isClick: !!a.isClick,
      isDouble: !!l,
      rect: i,
      inputEvent: c,
      data: u.data,
      isTrusted: a.isTrusted
    });
  }, r._checkSelected = function(n, o) {
    o === void 0 && (o = ev(n, this.options.ratio));
    var i = n.data, a = o.top, s = o.left, c = o.width, l = o.height, u = i.selectFlag, f = i.containerX, d = i.containerY, p = i.scaleMatrix, g = ds(p, [s - f, a - d]), h = ds(p, [c, l]), m = [];
    if (u) {
      this.target.style.cssText += "display: block;left:0px;top:0px;" + "transform: translate(".concat(g[0], "px, ").concat(g[1], "px);") + "width:".concat(h[0], "px;height:").concat(h[1], "px;");
      var y = this.hitTest(o, i, !0, n);
      m = rv(i.startPassedTargets, y, this.continueSelect && this.continueSelectWithoutDeselect);
    }
    var x = this.emit("drag", Zt(Zt({}, n), {
      data: i.data,
      isSelect: u,
      rect: o
    }));
    if (x === !1) {
      this.target.style.cssText += "display: none;", n.stop();
      return;
    }
    u && this._select(m, o, n);
  }, r._sameCombiKey = function(n, o, i) {
    if (!o)
      return !1;
    var a = Ox(n.inputEvent, n.key), s = [].concat(o), c = Tt(s[0]) ? s : [s];
    if (i) {
      var l = n.key;
      return c.some(function(u) {
        return u.some(function(f) {
          return f === l;
        });
      });
    }
    return c.some(function(u) {
      return u.every(function(f) {
        return a.indexOf(f) > -1;
      });
    });
  }, r._findElement = function(n, o) {
    for (var i = n; i && !(o.indexOf(i) > -1); )
      i = i.parentElement;
    return i;
  }, r._refreshGroups = function(n) {
    var o, i = n.innerWidth, a = n.innerHeight, s = n.selectablePoints;
    if (this.options.checkOverflow) {
      var c = (o = this.gesto.getEventData().innerScrollOptions) === null || o === void 0 ? void 0 : o.container, l = n.selectableInnerScrollParentMap, u = n.selectableInnerScrollPathsList;
      n.selectableInners = u.map(function(p, g) {
        var h = !1;
        return p.every(function(m) {
          if (h)
            return !0;
          if (m === c)
            return h = !0, !0;
          var y = l.get(m);
          if (y) {
            var x = s[g], b = y.points, w = vu(x, b);
            if (!w.length)
              return !1;
          }
          return !0;
        });
      });
    }
    if (!i || !a)
      n.innerGroups = null;
    else {
      var f = n.selectablePoints, d = {};
      f.forEach(function(p, g) {
        var h = 1 / 0, m = -1 / 0, y = 1 / 0, x = -1 / 0;
        p.forEach(function(_) {
          var E = Math.floor(_[0] / i), C = Math.floor(_[1] / a);
          h = Math.min(E, h), m = Math.max(E, m), y = Math.min(C, y), x = Math.max(C, x);
        });
        for (var b = h; b <= m; ++b)
          for (var w = y; w <= x; ++w)
            d[b] = d[b] || {}, d[b][w] = d[b][w] || [], d[b][w].push(g);
      }), n.innerGroups = d;
    }
  }, e = CA([lO(kd, function(n, o) {
    var i = {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return this.options[o];
      }
    }, a = xo("get ".concat(o));
    n[a] ? i.get = function() {
      return this[a]();
    } : i.get = function() {
      return this.options[o];
    };
    var s = xo("set ".concat(o));
    n[s] ? i.set = function(c) {
      this[s](c);
    } : i.set = function(c) {
      this.options[o] = c;
    }, Object.defineProperty(n, o, i);
  })], e), e;
}(fn), OA = /* @__PURE__ */ function(t) {
  Nx(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(PA), ju = function(t, e) {
  return ju = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, ju(t, e);
};
function NA(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ju(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ls = function() {
  return Ls = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ls.apply(this, arguments);
};
function kA(t, e, r, n) {
  var o = arguments.length, i = o < 3 ? e : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(t, e, r, n);
  else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
  return o > 3 && i && Object.defineProperty(e, r, i), i;
}
var ov = jx.map(function(t) {
  return xo("on ".concat(t));
}), AA = /* @__PURE__ */ function(t) {
  NA(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var r = e.prototype;
  return r.render = function() {
    return On("div", {
      className: Au,
      ref: rn(this, "selectionElement")
    });
  }, r.componentDidMount = function() {
    var n = this, o = this.props, i = {};
    DA.forEach(function(a) {
      a in o && (i[a] = o[a]);
    }), this.selecto = new OA(Ls(Ls({}, i), {
      portalContainer: this.selectionElement
    })), jx.forEach(function(a, s) {
      n.selecto.on(a, function(c) {
        var l = n.props, u = l[ov[s]] && l[ov[s]](c);
        u === !1 && c.stop();
      });
    });
  }, r.componentDidUpdate = function(n) {
    var o = this.props, i = this.selecto;
    kd.forEach(function(a) {
      n[a] !== o[a] && (i[a] = o[a]);
    });
  }, r.componentWillUnmount = function() {
    this.selecto.destroy();
  }, kA([a1(MA)], e.prototype, "selecto", void 0), e;
}(Yb);
function jA(t, e) {
  let r = null;
  return function(...n) {
    r && clearTimeout(r), r = setTimeout(() => {
      t(...n);
    }, e);
  };
}
function Ix() {
  const t = er(null), { setCanvasState: e, mode: r, spacePressed: n, setSpacePressed: o, isDragging: i, setIsDragging: a, dragStart: s, setDragStart: c, isTouchPadDragging: l, setIsTouchPadDragging: u } = Re(), f = Re(), d = (C) => {
    C.code === "Space" && !C.repeat ? (C.preventDefault(), o(!0)) : (C.metaKey || C.ctrlKey) && C.key === "1" && (C.preventDefault(), e({
      zoom: 1,
      position: f.position
    }));
  }, p = (C) => {
    C.code === "Space" && (C.preventDefault(), o(!1), a(!1));
  }, g = (C) => {
    const T = t.current;
    if (T)
      if (C.ctrlKey || C.metaKey) {
        C.preventDefault();
        const R = f.zoom, D = x(Math.max(0.1, Math.min(2, R - C.deltaY * 4e-3))), N = T.getBoundingClientRect(), M = C.clientX - N.left, O = C.clientY - N.top, k = (M - f.position.x) / R, F = (O - f.position.y) / R, $ = {
          x: M - k * D,
          y: O - F * D
        };
        e({
          zoom: D,
          position: $
        });
      } else C.buttons === 0 && (C.preventDefault(), e({
        ...f,
        position: {
          x: f.position.x - C.deltaX,
          y: f.position.y - C.deltaY
        }
      }), u(!0));
  };
  Ht(() => (window.addEventListener("keydown", d), window.addEventListener("keyup", p), () => {
    window.removeEventListener("keydown", d), window.removeEventListener("keyup", p);
  }), []), Ht(() => {
    const C = t.current;
    if (C)
      return C.addEventListener("wheel", g, { passive: !1 }), () => {
        C.removeEventListener("wheel", g);
      };
  }, [f]), Ht(() => {
    const C = () => {
      u(!1);
    };
    return window.addEventListener("mouseup", C), () => {
      window.removeEventListener("mouseup", C);
    };
  }, []);
  const h = (C) => {
    !(n || r === "hand") || C.target.closest(".element") || (a(!0), c({
      x: C.clientX - f.position.x,
      y: C.clientY - f.position.y
    }));
  }, m = (C) => {
    i && e({
      ...f,
      position: {
        x: C.clientX - s.x,
        y: C.clientY - s.y
      }
    });
  }, y = Rn(() => {
    a(!1);
  }, []), x = (C) => Number(C.toFixed(2)), b = Rn(
    (C) => {
      const T = t.current;
      if (!T) return;
      const R = T.getBoundingClientRect();
      if (!C) return;
      const N = IA(R, C);
      e({
        zoom: N.zoom,
        position: N.position
      });
    },
    [t, e]
  ), w = Rn(
    jA((C) => {
      b(C);
    }, 40),
    [b]
  );
  Ht(() => {
    const C = t.current;
    if (C)
      return C.addEventListener("mousedown", h), C.addEventListener("mousemove", m), C.addEventListener("mouseup", y), C.addEventListener("mouseleave", y), () => {
        C.removeEventListener("mousedown", h), C.removeEventListener("mousemove", m), C.removeEventListener("mouseup", y), C.removeEventListener("mouseleave", y);
      };
  }, [f, s, i, n, r]);
  const _ = () => i || l ? "cursor-grabbing" : n || r === "hand" ? "cursor-grab" : "cursor-default", E = () => {
  };
  return {
    ref: t,
    position: f.position,
    zoom: f.zoom,
    isDragging: i,
    spacePressed: n,
    isTouchPadDragging: l,
    mode: r,
    calculateFitZoom: w,
    fitViewport: E,
    cursorStyle: _()
  };
}
function IA(t, e) {
  const o = t.width - 120, i = t.height - 40 * 2, a = o / e.width, s = i / e.height, c = Math.min(a, s, 1), l = e.width * c, u = e.height * c, f = 60 + (o - l) / 2, d = 40 + (i - u) / 2;
  return {
    zoom: c,
    position: {
      x: f,
      y: d
    }
  };
}
const FA = ({
  infiniteViewer: t,
  horizontalGuides: e,
  verticalGuides: r,
  selecto: n,
  moveableManager: o,
  selectedTargets: i,
  onCheckBlur: a,
  onSetSelectedTargets: s,
  width: c,
  height: l
}) => {
  const { zoom: u, setZoom: f } = Re();
  iv(() => {
    if (!t.current) return;
    const E = t.current.getContainer();
    if (!E) return;
    const C = E.clientWidth - 100, T = E.clientHeight - 100, R = C / c, D = T / l, N = Math.min(R, D), M = Math.max(0.1, Math.min(3, N));
    f(M), setTimeout(() => {
      t.current && t.current.scrollCenter();
    }, 50);
  }, [t, c, l, f]);
  const d = (E) => {
    f(Math.max(0.1, Math.min(3, u * E.scale)));
  }, p = () => {
  }, g = (E) => {
    const C = E.inputEvent.target;
    a(), (C.nodeName === "A" || o.current.getMoveable().isMoveableElement(C) || o.current.getMoveable().isDragging() || i.some((T) => T === C || T.contains(C))) && E.stop();
  }, h = (E) => {
    E.isDrag || n.current.clickTarget(E.inputEvent);
  }, m = (E) => {
    n.current.triggerDragStart(E.inputEvent);
  }, y = (E) => {
    e.current && (e.current.scroll(E.scrollLeft), e.current.scrollGuides(E.scrollTop)), r.current && (r.current.scroll(E.scrollTop), r.current.scrollGuides(E.scrollLeft));
  }, x = (E) => {
    const C = E.inputEvent, T = C.target;
    if (a(), T.isContentEditable) {
      const R = BA(T);
      R && R.hasAttribute(LA) && (E.stop(), s([R]));
    }
    (C.type === "touchstart" && E.isTrusted || o.current.getMoveable().isMoveableElement(T) || i.some((R) => R === T || R.contains(T))) && E.stop();
  }, b = ({ direction: E }) => {
    t.current.scrollBy(E[0] * 10, E[1] * 10);
  }, w = ({ isDragStart: E, selected: C, inputEvent: T }) => {
    E && T.preventDefault(), s(C).then(() => {
      E && o.current.getMoveable().dragStart(T);
    });
  }, _ = () => {
    t.current.scrollCenter();
  };
  return Ht(() => {
    const E = (C) => {
      C.touches.length;
    };
    return document.addEventListener("touchstart", E), () => {
      document.removeEventListener("touchstart", E);
    };
  }, []), Ht(() => {
    const E = (C) => {
      (C.ctrlKey || C.metaKey) && (C.key === "=" || C.key === "+" ? (C.preventDefault(), f(Math.min(u + 0.1, 3))) : C.key === "-" ? (C.preventDefault(), f(Math.max(u - 0.1, 0.1))) : C.key === "0" && (C.preventDefault(), f(1)));
    };
    return window.addEventListener("keydown", E), () => {
      window.removeEventListener("keydown", E);
    };
  }, [u, f]), {
    onPinch: d,
    onPinchEnd: p,
    onDragStart: g,
    onDragEnd: h,
    onAbortPinch: m,
    onScroll: y,
    onSelectoDragStart: x,
    onSelectoScroll: b,
    onSelectoEnd: w,
    handleCenterView: _
  };
}, BA = (t) => t.closest("[data-scena-element-id]"), LA = "data-scena-element-id";
function zA(t) {
  const e = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    rotation: 0
  }, r = t.match(/top:\s*([\d.]+)px/), n = t.match(/left:\s*([\d.]+)px/), o = t.match(/width:\s*([\d.]+)px/), i = t.match(/height:\s*([\d.]+)px/);
  r && (e.top = parseFloat(r[1])), n && (e.left = parseFloat(n[1])), o && (e.width = parseFloat(o[1])), i && (e.height = parseFloat(i[1]));
  const a = t.match(
    /transform:\s*translate\(\s*([-\d.]+)px,\s*([-\d.]+)px\)\s*rotate\(\s*([-\d.]+)deg\)/
  );
  if (a) {
    const s = parseFloat(a[1]), c = parseFloat(a[2]), l = parseFloat(a[3]);
    e.left += s, e.top += c, e.rotation = l;
  }
  return e;
}
const GA = {
  name: "deleteButtonViewable",
  props: {
    // @ts-expect-error TODO
    deleteButtonViewable: Boolean
  },
  // @ts-expect-error TODO
  events: {},
  render(t, e) {
    const r = t.getRect(), { pos2: n } = t.state, o = t.useCSS(
      "div",
      `
        {
            position: absolute;
            left: 0px;
            top: 0px;
            will-change: transform;
            transform-origin: 0px 0px;
            width: 24px;
            height: 24px;
            background: #4af;
            background: var(--moveable-color);
            opacity: 0.9;
            border-radius: 4px;
        }
        :host:before, :host:after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            width: 16px;
            height: 2px;
            background: #fff;
            border-radius: 1px;
            cursor: pointer;
        }
        :host:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        `
    );
    return /* @__PURE__ */ v.jsx(Gs.Consumer, { children: (i) => /* @__PURE__ */ v.jsx(
      o,
      {
        className: "moveable-delete-button",
        onClick: () => {
          const a = i.getSelectedTargets();
          i.remove(a);
        },
        style: {
          transform: `translate(${n[0]}px, ${n[1]}px) rotate(${r.rotation}deg) translate(10px)`
        }
      }
    ) }, "delete-button-viewer");
  }
}, $A = {
  name: "dimensionViewable",
  props: {
    // @ts-expect-error TODO
    dimensionViewable: Boolean
  },
  // @ts-expect-error TODO
  events: {},
  render(t) {
    const e = t.props.zoom, r = t.getRect();
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        className: "moveable-dimension",
        style: {
          left: `${r.width / 2}px`,
          top: `${r.height}px`,
          transform: `translate(-50%, ${20 * e}px) scale(${e})`
        },
        children: [
          Math.round(r.offsetWidth),
          " x ",
          Math.round(r.offsetHeight)
        ]
      },
      "dimension-viewer"
    );
  }
}, Id = class Id extends S.PureComponent {
  constructor() {
    super(...arguments), this.moveable = S.createRef();
  }
  getMoveable() {
    return this.moveable.current;
  }
  // 添加 getter 方法来替代装饰器提供的属性访问
  get moveableData() {
    return this.context.moveableData;
  }
  get memory() {
    return this.context.memory;
  }
  get getSelecto() {
    return this.context.getSelecto;
  }
  render() {
    const { verticalGuidelines: e, horizontalGuidelines: r, selectedTargets: n, zoom: o } = this.props;
    if (!n.length)
      return this.renderViewportMoveable();
    const i = this.moveableData, a = this.memory, s = [document.querySelector(".scena-viewport"), ...i.getTargets()].filter((u) => n.indexOf(u) === -1), c = !1, l = "";
    return /* @__PURE__ */ v.jsx(
      Kh,
      {
        ables: [$A, GA],
        ref: this.moveable,
        targets: n,
        dimensionViewable: !0,
        deleteButtonViewable: !0,
        draggable: !0,
        resizable: !0,
        pinchable: ["rotatable"],
        zoom: 1 / o,
        throttleResize: 1,
        clippable: l === "Crop",
        passDragArea: l === "Text",
        checkInput: l === "Text",
        throttleDragRotate: 0,
        keepRatio: n.length > 1 ? !0 : c,
        rotatable: !0,
        snappable: !0,
        snapCenter: !0,
        snapGap: !1,
        isDisplayInnerSnapDigit: !0,
        roundable: !0,
        verticalGuidelines: e,
        horizontalGuidelines: r,
        elementGuidelines: s,
        clipArea: !0,
        clipVerticalGuidelines: [0, "50%", "100%"],
        clipHorizontalGuidelines: [0, "50%", "100%"],
        clipTargetBounds: !0,
        onBeforeRenderStart: i.onBeforeRenderStart,
        onBeforeRenderGroupStart: i.onBeforeRenderGroupStart,
        onDragStart: (u) => {
          i.onDragStart(u);
        },
        onDrag: (u) => {
          i.onDrag(u);
        },
        onDragGroupStart: i.onDragGroupStart,
        onDragGroup: i.onDragGroup,
        onScaleStart: i.onScaleStart,
        onScale: i.onScale,
        onScaleGroupStart: i.onScaleGroupStart,
        onScaleGroup: i.onScaleGroup,
        onResizeStart: i.onResizeStart,
        onResize: i.onResize,
        onResizeGroupStart: i.onResizeGroupStart,
        onResizeGroup: i.onResizeGroup,
        onRotateStart: i.onRotateStart,
        onRotate: i.onRotate,
        onRotateGroupStart: i.onRotateGroupStart,
        onRotateGroup: i.onRotateGroup,
        defaultClipPath: a.get("crop") || "inset",
        onClip: i.onClip,
        onDragOriginStart: i.onDragOriginStart,
        onDragOrigin: (u) => {
          i.onDragOrigin(u);
        },
        onRound: i.onRound,
        onClick: (u) => {
          const f = u.inputTarget;
          if (u.isDouble && f.isContentEditable) {
            const d = Jv(f);
            d && d.focus();
          } else
            this.getSelecto().clickTarget(u.inputEvent, u.inputTarget);
        },
        onClickGroup: (u) => {
          this.getSelecto().clickTarget(u.inputEvent, u.inputTarget);
        },
        onRenderStart: (u) => {
          u.datas.prevData = i?.getFrame(u.target)?.get();
        },
        onRender: (u) => {
          u.datas.isRender = !0;
        },
        onRenderEnd: (u) => {
          if (!u.datas.isRender)
            return;
          const f = Qv(u.target), d = u.target.dataset.veltixPageId, p = zA(u.target.getAttribute("style"));
          It.getState().updateNode(d, f, { position: p });
        },
        onRenderGroupStart: (u) => {
          u.datas.prevDatas = u.targets.map((f) => i.getFrame(f)?.get());
        },
        onRenderGroup: (u) => {
          u.datas.isRender = !0;
        },
        onRenderGroupEnd: (u) => {
          u.datas.isRender;
        }
      }
    );
  }
  renderViewportMoveable() {
    const e = this.moveableData;
    return /* @__PURE__ */ v.jsx(
      Kh,
      {
        ref: this.moveable,
        target: null,
        origin: !1,
        onRotateStart: e.onRotateStart,
        onRotate: e.onRotate
      }
    );
  }
  componentDidMount() {
  }
  updateRect() {
    this.getMoveable().updateRect();
  }
};
Id.contextType = Gs;
let Iu = Id;
const VA = () => /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col items-center justify-center w-full h-full min-h-[400px] text-center", children: [
  /* @__PURE__ */ v.jsxs("div", { className: "mb-6 relative", children: [
    /* @__PURE__ */ v.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-gray-300 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-150", children: /* @__PURE__ */ v.jsx(ms, { className: "w-8 h-8 text-gray-400 transition-colors duration-300 hover:text-gray-500" }) }),
    /* @__PURE__ */ v.jsx("div", { className: "absolute inset-0 w-20 h-20 rounded-full bg-gray-200/20 blur-xl -z-10 scale-75" })
  ] }),
  /* @__PURE__ */ v.jsxs("div", { className: "space-y-2 max-w-sm", children: [
    /* @__PURE__ */ v.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "No components yet" }),
    /* @__PURE__ */ v.jsx("p", { className: "text-sm text-gray-500 leading-relaxed", children: "Get started by adding your first component to this page. Click the plus button above to begin." })
  ] }),
  /* @__PURE__ */ v.jsx("button", { className: "mt-6 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2", children: "Add Component" })
] }), WA = ({ doc: t }) => {
  const e = It(), r = wr(), n = (o, i) => !o || o.length === 0 ? /* @__PURE__ */ v.jsx(VA, {}) : o.filter((s) => s.position?.visible !== !1).map((s, c) => {
    const l = r.registry.get(s.type);
    if (l) {
      const u = {
        position: "absolute",
        transform: HA(s.position),
        width: `${s.position.width}px`,
        height: `${s.position.height}px`
      };
      return /* @__PURE__ */ v.jsx("div", { "data-scena-element-id": s.id, "data-type": s.type, "data-veltix-page-id": i, style: u, children: S.createElement(l.main, {
        widget: {
          ...s,
          position: {
            ...s.position,
            rotation: 0,
            left: 0,
            top: 0
          }
        }
      }) }, c);
    }
    return null;
  }) || [];
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: Ur("scena-viewport"),
      [hf]: "viewport",
      style: {
        width: t.width || r.config?.doc?.width,
        height: t.height || r.config?.doc?.height,
        background: e.json?.theme?.backgroundColor || "#fff"
      },
      children: n(t.nodes, t.id)
    }
  );
};
function HA(t) {
  let e = `translate(${t.left}px, ${t.top}px)`;
  return t.rotation && (e += ` rotate(${t.rotation}deg)`), e;
}
const YA = (t) => {
  const { children: e } = t, r = It(), n = wr(), o = 40, { combinedWidth: i } = lw(o), a = r.json?.docs, s = {
    width: `${i}px`,
    height: `${n.height}px`
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "veltix-viewport-container flex", style: { ...s, gap: `${o}px`, ...t.style }, children: [
    e,
    /* @__PURE__ */ v.jsx("div", { children: a?.map((c, l) => /* @__PURE__ */ v.jsx(WA, { doc: c }, l)) })
  ] });
}, UA = () => {
  const { zoom: t, setZoom: e } = Re(), { fitViewport: r } = Ix(), n = (i) => {
    e(i / 100);
  }, o = [200, 100, 50];
  return /* @__PURE__ */ v.jsxs(hc, { children: [
    /* @__PURE__ */ v.jsx(vc, { asChild: !0, children: /* @__PURE__ */ v.jsxs(Me, { variant: "outline", size: "sm", className: "h-8 gap-1 shadow-none w-20", children: [
      /* @__PURE__ */ v.jsxs("span", { children: [
        Math.round(t * 100),
        "%"
      ] }),
      /* @__PURE__ */ v.jsx(rg, { className: "h-3 w-3" })
    ] }) }),
    /* @__PURE__ */ v.jsxs(ua, { align: "end", className: "w-[180px]", children: [
      /* @__PURE__ */ v.jsxs(Kr, { onClick: () => n(Math.min(t * 100 + 25, 200)), children: [
        "Zoom in",
        /* @__PURE__ */ v.jsx(fi, { children: "⌘+" })
      ] }),
      /* @__PURE__ */ v.jsxs(Kr, { onClick: () => n(Math.max(t * 100 - 25, 25)), children: [
        "Zoom out",
        /* @__PURE__ */ v.jsx(fi, { children: "⌘-" })
      ] }),
      /* @__PURE__ */ v.jsxs(Kr, { onClick: () => r(), children: [
        "Zoom to Fit",
        /* @__PURE__ */ v.jsx(fi, { children: "⌘0" })
      ] }),
      /* @__PURE__ */ v.jsx(ly, {}),
      o.map((i) => /* @__PURE__ */ v.jsxs(Kr, { onClick: () => n(i), children: [
        i,
        "%",
        i === 100 && /* @__PURE__ */ v.jsx(fi, { children: "⌘1" })
      ] }, i))
    ] })
  ] });
}, Rl = [
  {
    title: "Plugins",
    items: [
      {
        label: "Asset Library",
        icon: Mp,
        gradient: "from-blue-500 to-blue-600",
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("Asset Library clicked")
      },
      {
        label: "Data Filler",
        icon: Dp,
        gradient: "from-green-500 to-green-600",
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("Data Filler clicked")
      },
      {
        label: "Interaction Engine",
        icon: jC,
        gradient: "from-purple-500 to-purple-600",
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("Interaction Engine clicked")
      },
      {
        label: "Font Manager",
        icon: lg,
        gradient: "from-orange-400 to-orange-500",
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("Font Manager clicked")
      }
    ]
  },
  {
    title: "Project",
    items: [
      {
        label: "New Page",
        icon: ms,
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("New Page clicked")
      },
      {
        label: "New Section",
        icon: ms,
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("New Section clicked")
      },
      {
        label: "Save as Template",
        icon: Dp,
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("Save as Template clicked")
      },
      {
        label: "Export to Code",
        icon: Mp,
        textColor: "text-gray-700 dark:text-gray-200",
        onClick: () => console.log("Export to Code clicked")
      },
      {
        label: "Deploy to Web",
        icon: PC,
        textColor: "text-gray-700 dark:text-gray-200",
        shortcut: "⌘P",
        onClick: () => console.log("Deploy to Web clicked")
      }
    ]
  }
];
function XA() {
  const [t, e] = Bt(-1), r = Rl.flatMap((i) => i.items), n = er([]);
  Ht(() => {
    const i = (a) => {
      if (a.key === "ArrowDown")
        a.preventDefault(), e((s) => (s + 1) % r.length);
      else if (a.key === "ArrowUp")
        a.preventDefault(), e((s) => (s - 1 + r.length) % r.length);
      else if (a.key === "Enter") {
        a.preventDefault();
        const s = r[t];
        s?.onClick ? s.onClick() : n.current[t]?.click();
      }
    };
    return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
  }, [t, r]), Ht(() => {
    const i = n.current[t];
    i && i.scrollIntoView({ block: "nearest" });
  }, [t]);
  const o = (i, a) => {
    e(a), i.onClick?.();
  };
  return /* @__PURE__ */ v.jsx("div", { className: "flex items-start justify-center overflow-hidden bg-background border border-border shadow-lg", children: /* @__PURE__ */ v.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ v.jsx("div", { className: "p-2 border-b border-border", children: /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ v.jsx(iE, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" }),
      /* @__PURE__ */ v.jsx(
        re,
        {
          type: "text",
          placeholder: "Search...",
          className: "pl-10 bg-muted/50 border-0 rounded-lg h-9 text-sm placeholder:text-muted-foreground focus:bg-background focus:ring-2 focus:ring-ring transition-all duration-200"
        }
      )
    ] }) }),
    /* @__PURE__ */ v.jsx("div", { className: "max-h-96 overflow-auto", children: Rl.map((i, a) => /* @__PURE__ */ v.jsxs("div", { className: Ur("p-2 border-border", a !== 0 && "border-t"), children: [
      /* @__PURE__ */ v.jsx("h3", { className: "text-xs font-semibold text-muted-foreground px-3 py-2 bg-background", children: i.title }),
      /* @__PURE__ */ v.jsx("div", { className: "space-y-1", children: i.items.map((s, c) => {
        const l = Rl.slice(0, a).reduce((f, d) => f + d.items.length, 0) + c, u = l === t;
        return /* @__PURE__ */ v.jsxs(
          Me,
          {
            ref: (f) => {
              n.current[l] = f;
            },
            onClick: () => o(s, l),
            variant: "ghost",
            className: Ur(
              "w-full h-10 px-3 rounded-lg transition-all duration-200",
              s.shortcut ? "justify-between" : "justify-start",
              s.bgColor ?? "hover:bg-accent",
              s.textColor ?? "text-foreground",
              u && "bg-accent hover:bg-accent/80"
            ),
            children: [
              /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    className: Ur("w-6 h-6 rounded-md mr-3 flex items-center justify-center shadow-sm", s.gradient ? `bg-gradient-to-br ${s.gradient}` : "bg-muted"),
                    children: /* @__PURE__ */ v.jsx(s.icon, { className: Ur("w-3.5 h-3.5", s.gradient ? "text-white" : "text-muted-foreground") })
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { className: "text-sm font-medium", children: s.label })
              ] }),
              s.shortcut && /* @__PURE__ */ v.jsx("span", { className: "text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded font-mono", children: s.shortcut })
            ]
          },
          s.label
        );
      }) })
    ] }, i.title)) })
  ] }) });
}
const Pn = ({ icon: t, label: e, onClick: r, active: n = !1, disabled: o = !1 }) => /* @__PURE__ */ v.jsxs(
  Me,
  {
    variant: n ? "secondary" : "ghost",
    size: "sm",
    className: `h-7 w-7 p-0 flex items-center justify-center relative group ${n ? "dark:!bg-gray-600" : ""}`,
    onClick: r,
    disabled: o,
    children: [
      t,
      /* @__PURE__ */ v.jsx("span", { className: "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap", children: e })
    ]
  }
), qA = () => /* @__PURE__ */ v.jsxs(hc, { modal: !1, children: [
  /* @__PURE__ */ v.jsx(vc, { asChild: !0, children: /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(Pn, { icon: /* @__PURE__ */ v.jsx(GC, { className: "h-4 w-4" }), label: "Plugins" }) }) }),
  /* @__PURE__ */ v.jsx(ua, { side: "top", className: "p-0 w-80 overflow-hidden !shadow-none mb-3", children: /* @__PURE__ */ v.jsx(XA, {}) })
] }), KA = {
  type: "rectangle",
  title: "Rectangle",
  description: "Basic rectangle shape",
  icon: "⬛",
  defaultProps: {
    position: { width: 120, height: 80, left: 0, top: 0 }
  },
  main: ({ widget: t }) => /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: t.styleConfig?.backgroundColor || "#ddd"
      }
    }
  )
}, ZA = {
  type: "circle",
  title: "Circle",
  description: "Basic circle shape",
  icon: "⚪",
  defaultProps: {
    position: { width: 120, height: 80, left: 0, top: 0 }
  },
  main: ({ widget: t }) => /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: t.styleConfig?.backgroundColor || "#ddd"
      }
    }
  )
}, JA = {
  type: "triangle",
  title: "Triangle",
  description: "Basic triangle shape",
  icon: "🔺",
  defaultProps: {
    position: { width: 120, height: 100, top: 0, left: 0 }
  },
  main: ({ widget: t }) => /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: t.styleConfig?.backgroundColor || "#ddd",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
      }
    }
  )
}, Fx = [KA, ZA, JA], QA = () => {
  const { createElementByComponent: t } = It();
  return /* @__PURE__ */ v.jsxs(hc, { modal: !1, children: [
    /* @__PURE__ */ v.jsx(vc, { asChild: !0, children: /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(Pn, { icon: /* @__PURE__ */ v.jsx(lE, { className: "h-4 w-4" }), label: "Shape" }) }) }),
    /* @__PURE__ */ v.jsx(ua, { side: "top", className: "mb-3", children: Fx.map((e) => /* @__PURE__ */ v.jsxs(Kr, { onClick: () => t(e), children: [
      e.type === "rectangle" && /* @__PURE__ */ v.jsx(dE, { className: "h-3 w-3" }),
      e.type === "circle" && /* @__PURE__ */ v.jsx(ng, { className: "h-3 w-3" }),
      e.type === "triangle" && /* @__PURE__ */ v.jsx(mE, { className: "h-3 w-3" }),
      e.title
    ] }, e.type)) })
  ] });
};
var tj = (t, e, r, n, o, i, a, s) => {
  let c = document.documentElement, l = ["light", "dark"];
  function u(p) {
    (Array.isArray(t) ? t : [t]).forEach((g) => {
      let h = g === "class", m = h && i ? o.map((y) => i[y] || y) : o;
      h ? (c.classList.remove(...m), c.classList.add(i && i[p] ? i[p] : p)) : c.setAttribute(g, p);
    }), f(p);
  }
  function f(p) {
    s && l.includes(p) && (c.style.colorScheme = p);
  }
  function d() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (n) u(n);
  else try {
    let p = localStorage.getItem(e) || r, g = a && p === "system" ? d() : p;
    u(g);
  } catch {
  }
}, ej = S.createContext(void 0), rj = { setTheme: (t) => {
}, themes: [] }, nj = () => {
  var t;
  return (t = S.useContext(ej)) != null ? t : rj;
};
S.memo(({ forcedTheme: t, storageKey: e, attribute: r, enableSystem: n, enableColorScheme: o, defaultTheme: i, value: a, themes: s, nonce: c, scriptProps: l }) => {
  let u = JSON.stringify([r, e, i, t, s, a, n, o]).slice(1, -1);
  return S.createElement("script", { ...l, suppressHydrationWarning: !0, nonce: typeof window > "u" ? c : "", dangerouslySetInnerHTML: { __html: `(${tj.toString()})(${u})` } });
});
const oj = () => {
  const { theme: t, setTheme: e } = nj(), [r, n] = Bt(!1);
  Ht(() => {
    n(!0);
  }, []);
  const o = () => {
    e(t === "light" ? "dark" : "light");
  };
  return r ? /* @__PURE__ */ v.jsx(
    Pn,
    {
      icon: t === "light" ? /* @__PURE__ */ v.jsx(qC, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx(Op, { className: "h-4 w-4" }),
      label: t === "light" ? "Dark Mode" : "Light Mode",
      onClick: o
    }
  ) : /* @__PURE__ */ v.jsx(
    Pn,
    {
      icon: /* @__PURE__ */ v.jsx(Op, { className: "h-4 w-4" }),
      label: "Light Mode",
      onClick: () => {
      }
    }
  );
};
function ij() {
  const { mode: t, setMode: e } = Re(), r = () => {
  };
  return /* @__PURE__ */ v.jsx("footer", { className: "absolute bottom-4 left-2 right-2 h-10 px-4 z-10", children: /* @__PURE__ */ v.jsxs("div", { className: "relative h-full flex items-center", children: [
    /* @__PURE__ */ v.jsx("div", { className: "absolute left-0 z-10" }),
    /* @__PURE__ */ v.jsx("div", { className: "absolute left-0 right-0 flex justify-center", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg px-1 py-1", children: [
      /* @__PURE__ */ v.jsx(Pn, { icon: /* @__PURE__ */ v.jsx(ZC, { className: "h-4 w-4" }), label: "Move", active: t === "select", onClick: () => e("select") }),
      /* @__PURE__ */ v.jsx(Pn, { icon: /* @__PURE__ */ v.jsx(FC, { className: "h-4 w-4" }), label: "Hand Tool", active: t === "hand", onClick: () => e("hand") }),
      /* @__PURE__ */ v.jsx(Pn, { icon: /* @__PURE__ */ v.jsx(sg, { className: "h-4 w-4" }), label: "Upload", onClick: r }),
      /* @__PURE__ */ v.jsx(QA, {}),
      /* @__PURE__ */ v.jsx(oj, {}),
      /* @__PURE__ */ v.jsx(qA, {})
    ] }) }),
    /* @__PURE__ */ v.jsx("div", { className: "absolute right-0 flex items-center gap-4 z-10 bg-background", children: /* @__PURE__ */ v.jsx(UA, {}) })
  ] }) });
}
const aj = () => {
  const t = wr(), { checkBlur: e } = Re(), r = It(), n = S.useRef(null), o = uw(), { ref: i, position: a, spacePressed: s, zoom: c, mode: l, calculateFitZoom: u } = Ix();
  S.useEffect(() => {
    if (i.current) {
      u(o);
      const x = () => u(o);
      return window.addEventListener("resize", x), () => {
        window.removeEventListener("resize", x);
      };
    }
  }, [u]);
  const { onSelectoDragStart: f, onSelectoScroll: d, onSelectoEnd: p } = FA({
    infiniteViewer: t.infiniteViewer,
    horizontalGuides: t.horizontalGuides,
    verticalGuides: t.verticalGuides,
    selecto: t.selecto,
    moveableManager: n,
    selectedTargets: t.selectedTargets,
    onCheckBlur: e,
    // 使用 store 中的方法
    onSetSelectedTargets: (x) => t.setSelectedTargets(x),
    // 使用 store 中的方法
    width: t.width,
    height: t.height
  }), g = Re((x) => x.horizontalGuides), h = Re((x) => x.verticalGuides);
  Re();
  const m = (x) => {
    x.preventDefault();
  }, y = (x) => {
    const b = document.querySelector(".veltix-viewport-container");
    x.preventDefault();
    const w = x.dataTransfer.getData("chart-type");
    if (w) {
      const { clientX: _, clientY: E } = x, { left: C, top: T } = b.getBoundingClientRect(), R = (_ - C) / c, D = (E - T) / c, N = t.registry.get(w), M = {
        id: mo(),
        type: w,
        title: N ? `新${N.title}` : `新${w}图表`,
        position: {
          left: R,
          top: D,
          width: 300,
          height: 200
        }
      };
      r.addNode(M);
    }
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "relative flex-1 overflow-hidden", style: { cursor: l === "hand" ? "grab" : "default" }, onDragOver: m, onDrop: y, ref: i, children: [
    /* @__PURE__ */ v.jsx("div", { className: "veltix-viewer bg-gray-50 dark:bg-background", children: /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
      YA,
      {
        style: {
          transformOrigin: "0px 0px",
          transform: `translate(${a.x}px, ${a.y}px) scale(${c})`
        },
        children: /* @__PURE__ */ v.jsx(
          Iu,
          {
            ref: n,
            selectedTargets: t.selectedTargets,
            verticalGuidelines: h,
            horizontalGuidelines: g,
            zoom: c
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ v.jsx(
      AA,
      {
        ref: t.selecto,
        getElementRect: lA,
        dragContainer: ".veltix-viewer",
        hitRate: 0,
        selectableTargets: [`.scena-viewport [${hf}]`],
        selectByClick: !0,
        selectFromInside: !1,
        toggleContinueSelect: ["shift"],
        preventDefault: !0,
        scrollOptions: i.current ? {
          container: i.current,
          threshold: 30,
          throttleTime: 30,
          getScrollPosition: () => [a.x, a.y]
        } : void 0,
        onDragStart: f,
        onScroll: d,
        onSelectEnd: p
      }
    ),
    /* @__PURE__ */ v.jsx(ij, {}),
    (s || l === "hand") && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("div", { className: "absolute top-0 right-0 bottom-0 left-0 cursor-grab" }),
      /* @__PURE__ */ v.jsx("div", { className: "cursor-grab" })
    ] })
  ] });
}, sj = () => {
  const { activePanelId: t } = qs(), r = Zs().getViewContainer(t);
  return r ? /* @__PURE__ */ v.jsx("div", { className: "w-80  p-4 overflow-y-auto h-full", children: r.render() }) : null;
};
var [Nc, qj] = Ye("Tooltip", [
  Go
]), kc = Go(), Bx = "TooltipProvider", cj = 700, Fu = "tooltip.open", [lj, Ad] = Nc(Bx), Lx = (t) => {
  const {
    __scopeTooltip: e,
    delayDuration: r = cj,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: i
  } = t, a = S.useRef(!0), s = S.useRef(!1), c = S.useRef(0);
  return S.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ v.jsx(
    lj,
    {
      scope: e,
      isOpenDelayedRef: a,
      delayDuration: r,
      onOpen: S.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: S.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: S.useCallback((l) => {
        s.current = l;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
Lx.displayName = Bx;
var ea = "Tooltip", [uj, ya] = Nc(ea), zx = (t) => {
  const {
    __scopeTooltip: e,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: s
  } = t, c = Ad(ea, t.__scopeTooltip), l = kc(e), [u, f] = S.useState(null), d = Nr(), p = S.useRef(0), g = a ?? c.disableHoverableContent, h = s ?? c.delayDuration, m = S.useRef(!1), [y, x] = kr({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (C) => {
      C ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Fu))) : c.onClose(), i?.(C);
    },
    caller: ea
  }), b = S.useMemo(() => y ? m.current ? "delayed-open" : "instant-open" : "closed", [y]), w = S.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, m.current = !1, x(!0);
  }, [x]), _ = S.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x(!1);
  }, [x]), E = S.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      m.current = !0, x(!0), p.current = 0;
    }, h);
  }, [h, x]);
  return S.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ v.jsx(Of, { ...l, children: /* @__PURE__ */ v.jsx(
    uj,
    {
      scope: e,
      contentId: d,
      open: y,
      stateAttribute: b,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: S.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : w();
      }, [c.isOpenDelayedRef, E, w]),
      onTriggerLeave: S.useCallback(() => {
        g ? _() : (window.clearTimeout(p.current), p.current = 0);
      }, [_, g]),
      onOpen: w,
      onClose: _,
      disableHoverableContent: g,
      children: r
    }
  ) });
};
zx.displayName = ea;
var Bu = "TooltipTrigger", Gx = S.forwardRef(
  (t, e) => {
    const { __scopeTooltip: r, ...n } = t, o = ya(Bu, r), i = Ad(Bu, r), a = kc(r), s = S.useRef(null), c = wt(e, s, o.onTriggerChange), l = S.useRef(!1), u = S.useRef(!1), f = S.useCallback(() => l.current = !1, []);
    return S.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ v.jsx(Nf, { asChild: !0, ...a, children: /* @__PURE__ */ v.jsx(
      ut.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: rt(t.onPointerMove, (d) => {
          d.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: rt(t.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: rt(t.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: rt(t.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: rt(t.onBlur, o.onClose),
        onClick: rt(t.onClick, o.onClose)
      }
    ) });
  }
);
Gx.displayName = Bu;
var jd = "TooltipPortal", [fj, dj] = Nc(jd, {
  forceMount: void 0
}), $x = (t) => {
  const { __scopeTooltip: e, forceMount: r, children: n, container: o } = t, i = ya(jd, e);
  return /* @__PURE__ */ v.jsx(fj, { scope: e, forceMount: r, children: /* @__PURE__ */ v.jsx(Ne, { present: r || i.open, children: /* @__PURE__ */ v.jsx(ic, { asChild: !0, container: o, children: n }) }) });
};
$x.displayName = jd;
var jo = "TooltipContent", Vx = S.forwardRef(
  (t, e) => {
    const r = dj(jo, t.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...i } = t, a = ya(jo, t.__scopeTooltip);
    return /* @__PURE__ */ v.jsx(Ne, { present: n || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ v.jsx(Wx, { side: o, ...i, ref: e }) : /* @__PURE__ */ v.jsx(pj, { side: o, ...i, ref: e }) });
  }
), pj = S.forwardRef((t, e) => {
  const r = ya(jo, t.__scopeTooltip), n = Ad(jo, t.__scopeTooltip), o = S.useRef(null), i = wt(e, o), [a, s] = S.useState(null), { trigger: c, onClose: l } = r, u = o.current, { onPointerInTransitChange: f } = n, d = S.useCallback(() => {
    s(null), f(!1);
  }, [f]), p = S.useCallback(
    (g, h) => {
      const m = g.currentTarget, y = { x: g.clientX, y: g.clientY }, x = mj(y, m.getBoundingClientRect()), b = yj(y, x), w = xj(h.getBoundingClientRect()), _ = wj([...b, ...w]);
      s(_), f(!0);
    },
    [f]
  );
  return S.useEffect(() => () => d(), [d]), S.useEffect(() => {
    if (c && u) {
      const g = (m) => p(m, u), h = (m) => p(m, c);
      return c.addEventListener("pointerleave", g), u.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", h);
      };
    }
  }, [c, u, p, d]), S.useEffect(() => {
    if (a) {
      const g = (h) => {
        const m = h.target, y = { x: h.clientX, y: h.clientY }, x = c?.contains(m) || u?.contains(m), b = !bj(y, a);
        x ? d() : b && (d(), l());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, u, a, l, d]), /* @__PURE__ */ v.jsx(Wx, { ...t, ref: i });
}), [hj, vj] = Nc(ea, { isInside: !1 }), gj = /* @__PURE__ */ CE("TooltipContent"), Wx = S.forwardRef(
  (t, e) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...s
    } = t, c = ya(jo, r), l = kc(r), { onClose: u } = c;
    return S.useEffect(() => (document.addEventListener(Fu, u), () => document.removeEventListener(Fu, u)), [u]), S.useEffect(() => {
      if (c.trigger) {
        const f = (d) => {
          d.target?.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ v.jsx(
      ec,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ v.jsxs(
          kf,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...s,
            ref: e,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ v.jsx(gj, { children: n }),
              /* @__PURE__ */ v.jsx(hj, { scope: r, isInside: !0, children: /* @__PURE__ */ v.jsx(ET, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
Vx.displayName = jo;
var Hx = "TooltipArrow", Yx = S.forwardRef(
  (t, e) => {
    const { __scopeTooltip: r, ...n } = t, o = kc(r);
    return vj(
      Hx,
      r
    ).isInside ? null : /* @__PURE__ */ v.jsx(Af, { ...o, ...n, ref: e });
  }
);
Yx.displayName = Hx;
function mj(t, e) {
  const r = Math.abs(e.top - t.y), n = Math.abs(e.bottom - t.y), o = Math.abs(e.right - t.x), i = Math.abs(e.left - t.x);
  switch (Math.min(r, n, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function yj(t, e, r = 5) {
  const n = [];
  switch (e) {
    case "top":
      n.push(
        { x: t.x - r, y: t.y + r },
        { x: t.x + r, y: t.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: t.x - r, y: t.y - r },
        { x: t.x + r, y: t.y - r }
      );
      break;
    case "left":
      n.push(
        { x: t.x + r, y: t.y - r },
        { x: t.x + r, y: t.y + r }
      );
      break;
    case "right":
      n.push(
        { x: t.x - r, y: t.y - r },
        { x: t.x - r, y: t.y + r }
      );
      break;
  }
  return n;
}
function xj(t) {
  const { top: e, right: r, bottom: n, left: o } = t;
  return [
    { x: o, y: e },
    { x: r, y: e },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function bj(t, e) {
  const { x: r, y: n } = t;
  let o = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    const s = e[i], c = e[a], l = s.x, u = s.y, f = c.x, d = c.y;
    u > n != d > n && r < (f - l) * (n - u) / (d - u) + l && (o = !o);
  }
  return o;
}
function wj(t) {
  const e = t.slice();
  return e.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Sj(e);
}
function Sj(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (; e.length >= 2; ) {
      const i = e[e.length - 1], a = e[e.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) e.pop();
      else break;
    }
    e.push(o);
  }
  e.pop();
  const r = [];
  for (let n = t.length - 1; n >= 0; n--) {
    const o = t[n];
    for (; r.length >= 2; ) {
      const i = r[r.length - 1], a = r[r.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r);
}
var Cj = Lx, Ej = zx, _j = Gx, Tj = $x, Rj = Vx, Dj = Yx;
function Mj({
  delayDuration: t = 0,
  ...e
}) {
  return /* @__PURE__ */ v.jsx(
    Cj,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...e
    }
  );
}
function Ux({
  ...t
}) {
  return /* @__PURE__ */ v.jsx(Mj, { children: /* @__PURE__ */ v.jsx(Ej, { "data-slot": "tooltip", ...t }) });
}
function Xx({
  ...t
}) {
  return /* @__PURE__ */ v.jsx(_j, { "data-slot": "tooltip-trigger", ...t });
}
function qx({
  className: t,
  sideOffset: e = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ v.jsx(Tj, { children: /* @__PURE__ */ v.jsxs(
    Rj,
    {
      "data-slot": "tooltip-content",
      sideOffset: e,
      className: bt(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        t
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ v.jsx(Dj, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Pj = () => {
  const { status: t, lastSaved: e, saveNow: r, pendingSave: n } = Wu(), { json: o } = It(), i = () => {
    if (!e) return "";
    const u = (/* @__PURE__ */ new Date()).getTime() - e.getTime();
    if (u < 6e4)
      return "just now";
    if (u < 36e5) {
      const d = Math.floor(u / 6e4);
      return `${d} ${d === 1 ? "minute" : "minutes"} ago`;
    }
    const f = Math.floor(u / 36e5);
    return `${f} ${f === 1 ? "hour" : "hours"} ago`;
  };
  if (!o) return null;
  const a = !n && t !== "error", s = a ? "No changes to save" : "Save current changes", c = ({ icon: l, className: u }) => /* @__PURE__ */ v.jsx(Me, { variant: "outline", size: "sm", className: "h-6 px-2 py-1", children: /* @__PURE__ */ v.jsx(l, { className: `h-4 w-4 ${u || ""}` }) });
  return /* @__PURE__ */ v.jsx("div", { className: "flex items-center gap-2 text-sm", "data-save-status": t, "data-save-last-saved": i(), children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
    t === "idle" && /* @__PURE__ */ v.jsxs(Ux, { children: [
      /* @__PURE__ */ v.jsx(Xx, { asChild: !0, children: /* @__PURE__ */ v.jsx(Me, { variant: "outline", size: "sm", className: "h-6 px-2 py-1", onClick: r, disabled: a, children: /* @__PURE__ */ v.jsx(og, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ v.jsx(qx, { children: s })
    ] }),
    t === "saving" && /* @__PURE__ */ v.jsx(c, { icon: HC, className: "animate-spin" }),
    t === "saved" && /* @__PURE__ */ v.jsx(c, { icon: vf }),
    t === "error" && /* @__PURE__ */ v.jsx(c, { icon: mC })
  ] }) });
}, Oj = (t) => /* @__PURE__ */ v.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 216 60",
    preserveAspectRatio: "xMidYMid meet",
    ...t,
    children: [
      /* @__PURE__ */ v.jsx(
        "path",
        {
          fill: "currentColor",
          d: "m114.853 12.504 4.923.651a222.259 222.259 0 0 1-6.766 16.168 285.418 285.418 0 0 1-7.936 15.712l-6.029-.087c-4.958-10.026-9.107-20.5-12.446-31.424l5.117-.76a174.922 174.922 0 0 0 4.64 14.172 158.802 158.802 0 0 0 5.964 13.78 172.588 172.588 0 0 0 6.852-13.672 154.518 154.518 0 0 0 5.681-14.54ZM130.574 42.409c1.605 0 3.08-.478 4.424-1.432 1.345-.97 2.219-2.315 2.624-4.037l4.185.846a13.021 13.021 0 0 1-1.713 3.581 12.322 12.322 0 0 1-2.581 2.756 11.483 11.483 0 0 1-3.252 1.78c-1.171.42-2.4.63-3.687.63-1.908 0-3.599-.29-5.074-.869-1.474-.579-2.717-1.396-3.729-2.452-2.068-2.156-3.101-5.093-3.101-8.811 0-1.808.303-3.494.911-5.056.621-1.577 1.467-2.944 2.537-4.102a11.798 11.798 0 0 1 3.773-2.734c1.445-.666 3.007-.999 4.683-.999 1.504 0 2.921.297 4.251.89a11.355 11.355 0 0 1 3.534 2.409c1.027 1.042 1.872 2.264 2.537 3.668.665 1.403 1.084 2.922 1.258 4.557l-18.779 2.8c.101 1.026.354 1.952.759 2.777a7.24 7.24 0 0 0 1.562 2.062c1.286 1.157 2.912 1.736 4.878 1.736Zm-7.069-10.59 13.054-1.585-.13-.412c-.549-1.432-1.308-2.553-2.277-3.364-.954-.81-2.146-1.215-3.578-1.215-.607 0-1.272.109-1.994.326-.723.202-1.424.557-2.104 1.063-.679.506-1.294 1.186-1.843 2.04-.535.839-.911 1.888-1.128 3.147ZM155.642 41.15l-.564 4.319c-1.027-.015-1.937-.188-2.732-.521a7.321 7.321 0 0 1-2.06-1.302 8.08 8.08 0 0 1-1.562-1.801 14.694 14.694 0 0 1-1.062-2.062c-.694-1.65-1.128-3.516-1.301-5.599l.585-27.517h4.532l-.195 7.074a1292.69 1292.69 0 0 1-.173 5.86 774.54 774.54 0 0 1-.131 4.73 507.33 507.33 0 0 1-.086 3.668 323.2 323.2 0 0 0-.13 5.881c.014 1.331.209 2.532.585 3.603a6.7 6.7 0 0 0 1.496 2.56c.68.71 1.612 1.078 2.798 1.107ZM163.925 22.943l.173-9.506 4.316-.282-.152 9.7 8.413-.281-.325 4.058-8.131.217-.174 18.924-4.575.108.368-18.902-7.503.174.087-3.993 7.503-.217ZM185.935 15.477c0 .84-.311 1.563-.933 2.17a3.021 3.021 0 0 1-2.19.89 2.996 2.996 0 0 1-2.168-.89 3 3 0 0 1-.889-2.17c0-.853.296-1.584.889-2.191.607-.622 1.33-.934 2.168-.934.853 0 1.583.312 2.19.934.622.607.933 1.338.933 2.191Zm-5.508 7.813 4.488-.174-.216 10.417a422.184 422.184 0 0 0-.13 6.75 226.554 226.554 0 0 0-.066 4.708h-4.445c.015-.78.029-1.635.044-2.56.028-.94.05-1.946.065-3.017.029-1.866.072-4.13.13-6.793l.13-9.331ZM188.819 23.203l4.532-1.063 6.7 8.225 6.571-8.355 4.098 1.605-7.915 10.113 8.349 10.243-3.99 1.628-6.983-8.485-6.527 8.398-4.575-1.237 8.305-10.59-8.565-10.482Z"
        }
      ),
      /* @__PURE__ */ v.jsxs("g", { clipPath: "url(#a)", fill: "currentColor", children: [
        /* @__PURE__ */ v.jsx(
          "path",
          {
            fill: "currentColor",
            d: "M0 4a4 4 0 0 1 4-4h51.953a4 4 0 0 1 4 4v52a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "path",
          {
            fill: "var(--logo-icon-fill)",
            d: "M50.474 21.563c.225.153.396.327.523.54.136.228.19.496.19.761-.002.335-.073.642-.294.936-.206.241-.42.473-.64.702-.132.14-.26.284-.388.427-.33.368-.665.73-1 1.093l-.602.652-.512.554c-.195.21-.389.42-.58.633-.293.326-.359.798-.079 1.135l.162.195c.212.254.426.506.64.758.226.266.445.538.662.812.195.241.395.477.596.713.195.229.386.46.576.693.219.269.441.535.666.8.274.323.544.65.812.98.11.133.22.264.333.394 1.25 1.447 1.25 1.447 1.243 2.372-.025.234-.1.409-.213.57-.173.245-.42.434-.697.548-.264.109-.544.158-.845.102-.849-.264-1.346-1.074-1.866-1.745-.22-.282-.447-.558-.674-.834l-.12-.146-.233-.28c-.236-.286-.47-.574-.705-.861l-.139-.17a384.773 384.773 0 0 1-1.558-1.915l-.319-.393c-.432-.535-1.224-.623-1.708-.135a157.54 157.54 0 0 1-.412.414l-.444.446-1.104 1.11a1654.076 1654.076 0 0 1-1.37 1.376l-.27.27-.12.122c-.247.247-.503.48-.767.708-.14.122-.275.248-.411.375-1.127 1.011-2.378 1.876-3.835 2.325l-.217.068c-1.688.445-3.44.05-4.932-.786-.71-.416-1.321-.98-1.912-1.549l-.109-.105c-.43-.415-.835-.838-1.207-1.307-.137-.172-.278-.34-.421-.507-1.384-1.614-1.384-1.614-1.352-2.543.047-.38.206-.607.491-.858.318-.233.609-.309.946-.31.302-.002.608.068.852.246.474.345.827.928 1.159 1.376 1.08 1.454 2.458 3.06 4.304 3.475 1.57.167 2.82-.545 4.007-1.497.253-.21.495-.432.733-.658.14-.131.28-.256.424-.38.35-.305.677-.634 1.005-.963l.2-.2.418-.418a295.7 295.7 0 0 1 1.14-1.14c.335-.336.662-.674.97-1.034.115-.131.236-.252.363-.372l.133-.127c.09-.087.181-.173.273-.258l.13-.127.12-.112c.118-.142.035-.343-.073-.492-.056-.077-.118-.148-.184-.226l-.164-.196c-.083-.1-.083-.1-.169-.2l-.3-.367c-.05-.06-.1-.122-.15-.185l-.287-.35a315.881 315.881 0 0 0-1.573-1.913c-.92-1.106-.92-1.106-.91-1.913.042-.379.21-.609.49-.858.307-.24.576-.341.902-.36a1.44 1.44 0 0 1 .82.19c.319.19.572.46.804.769.284.368.574.73.87 1.087.286.345.567.692.842 1.046l.135.174a1.47 1.47 0 0 0 2.325.011c.226-.276.46-.544.695-.813.215-.248.43-.496.642-.747l.49-.571c.05-.056.05-.056.098-.113.728-.84 1.567-1.536 2.68-.924Z"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "path",
          {
            fill: "var(--logo-icon-fill)",
            d: "M31.908 22.467c.281.23.541.479.8.733l.115.112c.509.492.982.995 1.417 1.555l.222.28c1.562 1.967 1.562 1.967 1.529 2.716-.071.512-.3.796-.694 1.12a1.098 1.098 0 0 1-.597.17c-.306.01-.62-.05-.87-.227-.428-.304-.745-.811-1.04-1.216-1.336-1.85-1.59-2.12-2.927-3.032l-.149-.102a3.157 3.157 0 0 0-.86-.414 2.696 2.696 0 0 0-2.103.412 7.68 7.68 0 0 0-.438.36l-.154.129c-.336.29-.631.594-.912.937l-.084.102c-.758.92-1.447 1.89-2.118 2.876l-.387.567c-.513.75-1.022 1.5-1.53 2.254l-.374.556c-.357.53-.713 1.06-1.066 1.59-.577.868-1.16 1.728-1.835 2.522l-.129.167c-.493.595-1.146 1.033-1.92 1.13-.622.025-1.067-.11-1.524-.449a2.11 2.11 0 0 1-.407-.406c-.52-.67-.894-1.445-1.286-2.194a140.949 140.949 0 0 0-.477-.902l-.143-.27-.216-.407c-.314-.592-.63-1.183-.947-1.774-.334-.623-.664-1.248-.99-1.876-.22-.424-.445-.843-.675-1.261a84.96 84.96 0 0 1-1.182-2.245c-.134-.262-.27-.522-.412-.779-.222-.407-.402-.78-.39-1.22.005-.211.07-.418.183-.596.118-.185.268-.34.443-.476.17-.132.365-.235.577-.267.19-.03.39-.023.58.01.21.037.41.125.578.257.514.402.795 1.025 1.088 1.608l.229.447.115.223c.159.307.326.61.493.913.366.664.711 1.337 1.056 2.011a68.14 68.14 0 0 0 1 1.886c.305.555.595 1.12.885 1.683.261.506.53 1.006.81 1.5.085.15.16.289.222.443a.288.288 0 0 0 .147.16c.04.018.083.026.124.03.154.014.31-.05.43-.148.29-.234.508-.557.722-.857l.123-.17c.373-.517.735-1.043 1.092-1.571l.48-.704.127-.188c.439-.644.884-1.284 1.33-1.924l.37-.533c.69-.992 1.383-1.988 2.157-2.918l.169-.204c2.435-2.92 5.776-4.816 9.223-2.13Z"
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("defs", { children: /* @__PURE__ */ v.jsx("clipPath", { id: "a", children: /* @__PURE__ */ v.jsx("path", { fill: "currentColor", d: "M0 0h59.953v60H0z" }) }) })
    ]
  }
), Nj = ({ views: t = [], extraProps: e = {}, fallback: r = null }) => {
  if (!t.length) return r ?? null;
  const n = [...t].sort((o, i) => (o.order ?? 0) - (i.order ?? 0));
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: n.map((o) => {
    const i = o.viewContainer;
    return /* @__PURE__ */ v.jsxs(Ux, { children: [
      /* @__PURE__ */ v.jsx(Xx, { asChild: !0, children: /* @__PURE__ */ v.jsx("span", { children: /* @__PURE__ */ v.jsx(i, { ...e }) }) }),
      /* @__PURE__ */ v.jsx(qx, { children: o.title })
    ] }, o.id);
  }) });
}, kj = (t) => {
  const [e, r] = Bt(t.value), { markForSave: n } = Wu(), o = "hover:border hover:border-gray-600 focus:border focus:border-gray-600";
  return /* @__PURE__ */ v.jsxs("div", { className: "max-w-[240px] overflow-hidden relative min-w-[120px] text-sm", children: [
    /* @__PURE__ */ v.jsx(
      "input",
      {
        tabIndex: -1,
        className: Vi(
          "appearance-none bg-transparent box-border font-[ligatures:none] border border-transparent rounded-md shadow-none  text-ellipsis outline-none absolute left-0 top-0 m-0 w-full h-9 p-2",
          o
        ),
        maxLength: 255,
        "aria-label": e,
        type: "text",
        autoComplete: "off",
        value: e,
        placeholder: "Untitled",
        onChange: (i) => {
          r(i.target.value);
        },
        onBlur: () => {
          t.onChange(e), n();
        },
        onKeyDown: (i) => {
          const a = i.target;
          i.key === "Enter" && (t.onChange(e), n(), a.blur());
        }
      }
    ),
    /* @__PURE__ */ v.jsx("div", { className: Vi(
      "appearance-none bg-transparent box-border font-[ligatures:none] border border-transparent rounded-md shadow-none text-ellipsis outline-none absolute left-0 top-0 m-0 w-full h-9 p-2 opacity-0 pointer-events-none relative whitespace-pre",
      o
    ), children: e })
  ] });
}, Aj = () => {
  const { json: t, update: e } = It(), r = uv().get("titlebar");
  return /* @__PURE__ */ v.jsxs("header", { className: "flex h-14 items-center justify-between px-4 w-full z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ v.jsxs("a", { href: "/projects", title: "Veltix, Making Data Visualization Lightning Fast", className: "inline-block w-28 group relative", children: [
        /* @__PURE__ */ v.jsx(Oj, {}),
        /* @__PURE__ */ v.jsx("span", { className: "absolute top-0 left-0 w-8 h-8 bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center justify-center rounded-xs", children: /* @__PURE__ */ v.jsx(pC, {}) })
      ] }),
      /* @__PURE__ */ v.jsx(Pj, {})
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "flex-1" }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ v.jsx(
        kj,
        {
          value: t?.title || "Untitled",
          onChange: (n) => {
            e({
              title: n
            });
          }
        }
      ),
      /* @__PURE__ */ v.jsx(Nj, { views: r })
    ] })
  ] });
}, Kx = Ub(() => /* @__PURE__ */ v.jsxs("div", { className: "veltix-workbench", children: [
  /* @__PURE__ */ v.jsx(Aj, {}),
  /* @__PURE__ */ v.jsxs("div", { className: "flex h-[calc(100vh-48px)]", children: [
    /* @__PURE__ */ v.jsx(zD, {}),
    /* @__PURE__ */ v.jsx(sj, {}),
    /* @__PURE__ */ v.jsx(aj, {}),
    /* @__PURE__ */ v.jsx(eO, {})
  ] })
] }));
Kx.displayName = "Veltix.Layout";
dn(
  {
    id: "ai",
    title: "AI",
    icon: Pp,
    render: () => /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx(Pp, {}),
      " AI"
    ] })
  },
  Sr.Sidebar
);
const Fd = class Fd extends S.PureComponent {
  constructor(e) {
    super(e), this.state = {
      selectedTargets: []
    }, this.memory = new dw(), this.moveableData = new rC(this.memory), this.horizontalGuides = S.createRef(), this.verticalGuides = S.createRef(), this.infiniteViewer = S.createRef(), this.selecto = S.createRef(), this.moveableManager = S.createRef(), this.api = this.props.api, this.getSelecto = () => this.selecto.current, this.getMoveable = () => this.moveableManager.current.getMoveable(), this.getSelectedTargets = () => this.state.selectedTargets, this.getSelectedFrames = () => this.moveableData.getSelectedFrames();
    const r = this.props.components || [];
    this.registry = new sv([...r, ...Fx]), uv.getState().create(this.props.contributes), this.props.data && (It.getState().initialize(this.props.data), this.props.data.id && Wu.getState().watch(this.props.data.id)), this.props.api && cv.getState().setApi(this.props.api);
  }
  get config() {
    return {
      doc: {
        width: this.props.config?.doc?.width || 1920,
        height: this.props.config?.doc?.height || 1080
      }
    };
  }
  get width() {
    let { width: e } = this.props;
    return this.props.data?.width && (e = this.props.data.width), e;
  }
  get height() {
    let { height: e } = this.props;
    return this.props.data?.width && (e = this.props.data.height), e;
  }
  get selectedTargets() {
    return this.state.selectedTargets;
  }
  render() {
    return /* @__PURE__ */ v.jsx(Gs.Provider, { value: this, children: /* @__PURE__ */ v.jsx(Kx, {}) });
  }
  remove(e) {
    const r = e.map((o) => ({
      pageId: o.getAttribute("data-veltix-page-id"),
      id: o.dataset.scenaElementId
    })), n = this.state.selectedTargets.filter((o) => !e.includes(o));
    this.setState({
      selectedTargets: n
    }), r.forEach((o) => {
      It.getState().removeNode(o.pageId, o.id);
    });
  }
  async componentDidMount() {
    const { infiniteViewer: e } = this;
    requestAnimationFrame(() => {
      e.current?.scrollCenter();
    });
  }
  componentWillUnmount() {
    this.memory.clear(), this.moveableData.clear();
  }
  promiseState(e) {
    return new Promise((r) => {
      this.setState(e, () => {
        r();
      });
    });
  }
  setSelectedTargets(e) {
    const r = e.map((n) => n.dataset.scenaElementId);
    return Re.getState().setSelectedTargets(r), e = e.filter((n) => e.every((o) => o === n || !o.contains(n))), this.promiseState({
      selectedTargets: e
    }).then(() => (this.selecto.current.setSelectedTargets(e), this.moveableData.setSelectedTargets(e), e));
  }
  checkBlur() {
    const e = document.activeElement;
    e && e.blur();
    const r = document.getSelection();
    r && r.removeAllRanges();
  }
};
Fd.defaultProps = {
  width: 400,
  height: 600
};
let Lu = Fd;
var jj = /* @__PURE__ */ ((t) => (t.MySQL = "MySQL", t.PostgreSQL = "PostgreSQL", t.MongoDB = "MongoDB", t.REST_API = "REST_API", t.GRAPHQL = "GRAPHQL", t.WEBSOCKET = "WEBSOCKET", t.CUSTOM = "CUSTOM", t))(jj || {}), Ij = /* @__PURE__ */ ((t) => (t.CONNECTED = "CONNECTED", t.DISCONNECTED = "DISCONNECTED", t.FAILED = "FAILED", t.TESTING = "TESTING", t))(Ij || {}), Fj = /* @__PURE__ */ ((t) => (t.READY = "READY", t.ERROR = "ERROR", t.PENDING = "PENDING", t))(Fj || {});
const Kj = Ir(() => ({
  version: "0.0.1",
  registerViewContainer: (t, e) => {
    Zs.getState().registerViewContainer(t, e);
  }
})), Zj = {}, Jj = Lu;
export {
  Ij as ConnectionStatus,
  jj as DataSourceType,
  Fj as DatasetStatus,
  Jj as Veltix,
  Kj as useVeltixStore,
  Zj as veltixStore
};
