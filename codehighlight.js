"use strict";
(() => {
    var u = "fs-attributes";
    var h = "cmsattribute";
    var m = "codehighlight";
    var U = "richtext";
    var _ = "support";
    var w = async (...t) => {
        var o;
        let r = [];
        for (let s of t) {
            let e = await ((o = window.fsAttributes[s]) == null ? void 0 : o.loading);
            r.push(e)
        }
        return r
    };
    var R = () => {};
    var A = t => typeof t == "string";
    function B(t, r, o) {
        var e;
        let s = window.fsAttributes[t];
        return s.destroy = o || R, (e = s.resolve) == null || e.call(s, r), r
    }
    var v = (t, r = "1", o = "iife") => {
        let e = `${t}${o === "esm" ? ".esm" : ""}.js`;
        return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${r}/${e}`
    };
    var k = `${u}-${_}`;
    var L = async () => {
        var e;
        let {
            fsAttributes: t,
            location: r
        } = window, {
            host: o,
            searchParams: s
        } = new URL(r.href);
        return !o.includes("webflow.io") || !s.has(k) ? !1 : (e = t.import) == null ? void 0 : e.call(t, _, "1")
    };
    var d = t => {
        let r = (e, i, n) => {
            let c = t[e], {
                key: T,
                values: x
            } = c, l;
            if (!i) return `[${T}]`;
            let I = x == null ? void 0 : x[i];
            A(I) ? l = I : l = I(n && "instanceIndex" in n ? n.instanceIndex : void 0);
            let E = n && "caseInsensitive" in n && n.caseInsensitive ? "i" : "";
            if (!(n != null && n.operator)) return `[${T}="${l}"${E}]`;
            switch (n.operator) {
                case "prefixed":
                    return `[${T}^="${l}"${E}]`;
                case "suffixed":
                    return `[${T}$="${l}"${E}]`;
                case "contains":
                    return `[${T}*="${l}"${E}]`
            }
        };
        function o(e, i) {
            let n = r("element", e, i),
                c = (i == null ? void 0 : i.scope) || document;
            return i != null && i.all ? [...c.querySelectorAll(n)] : c.querySelector(n)
        }
        return [r, o, (e, i) => {
            let n = t[i];
            return n ? e.getAttribute(n.key) : null
        }]
    };
    var p = {
        preventLoad: {
            key: `${u}-preventload`
        },
        debugMode: {
            key: `${u}-debug`
        },
        src: {
            key: "src",
            values: {
                finsweet: "@finsweet/attributes"
            }
        },
        dev: {
            key: `${u}-dev`
        }
    }, [S, pt] = d(p);
    var C = t => {
        let {
            currentScript: r
        } = document, o = {};
        if (!r) return {
            attributes: o,
            preventsLoad: !1
        };
        let e = {
            preventsLoad: A(r.getAttribute(p.preventLoad.key)),
            attributes: o
        };
        for (let i in t) {
            let n = r.getAttribute(t[i]);
            e.attributes[i] = n
        }
        return e
    };
    var H = ({
        scriptAttributes: t,
        attributeKey: r,
        version: o,
        init: s
    }) => {
        var c;
        j(), (c = window.fsAttributes)[r] || (c[r] = {});
        let {
            preventsLoad: e,
            attributes: i
        } = C(t), n = window.fsAttributes[r];
        n.version = o, n.init = s, e || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => s(i)))
    };
    var j = () => {
        let t = q();
        if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
            g(window.fsAttributes, t);
            return
        }
        let r = F(t);
        g(r, t), J(r), window.fsAttributes = r, window.FsAttributes = window.fsAttributes, L()
    };
    var F = t => {
        let r = {
            cms: {},
            push(...o) {
                var s, e;
                for (let [i, n] of o)(e = (s = this[i]) == null ? void 0 : s.loading) == null || e.then(n)
            },
            async import(o, s) {
                let e = r[o];
                return e || new Promise(i => {
                    let n = document.createElement("script");
                    n.src = v(o, s), n.async = !0, n.onload = () => {
                        let [c] = g(r, [o]);
                        i(c)
                    }, document.head.append(n)
                })
            },
            destroy() {
                var o, s;
                for (let e of t)(s = (o = window.fsAttributes[e]) == null ? void 0 : o.destroy) == null || s.call(o)
            }
        };
        return r
    };
    var q = () => {
        let t = S("src", "finsweet", {
            operator: "contains"
        }), r = S("dev");
        return [...document.querySelectorAll(`script${t}, script${r}`)].reduce((e, i) => {
            var c;
            let n = i.getAttribute(p.dev.key) || ((c = i.src.match(/[\w-. ]+(?=\.js$)/)) == null ? void 0 : c[0]);
            return n && !e.includes(n) && e.push(n), e
        }, [])
    };
    var g = (t, r) => r.map(s => {
        let e = t[s];
        return e || (t[s] = {}, e = t[s], e.loading = new Promise(i => {
            e.resolve = n => {
                i(n), delete e.resolve
            }
        }), e)
    });
    var J = t => {
        let r = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
        t.push(...r)
    };
    var O = "1.5.2";
    var P = `fs-${m}`;
    var Y = "code";
    var z = "theme";
    var y = {
        element: {
            key: `${P}-element`,
            values: {
                code: Y
            }
        },
        theme: {
            key: `${P}-${z}`
        }
    }, [N, yt] = d(y);
    var M = "11.4.0";
    var $ = `//cdn.jsdelivr.net/gh/highlightjs/cdn-release@${M}/build/highlight.min.js`;
    var V = t => `//cdn.jsdelivr.net/gh/highlightjs/cdn-release@${M}/build/styles/${t}.min.css`;
    var K = {
        webflow: "https://cdn.jsdelivr.net/npm/@finsweet/attributes-codehighlight@1/themes/webflow.min.css"
    };
    var b, a, f = async () => {
        if (b) return b;
        let t = document.createElement("script");
        return t.setAttribute("src", $), b = new Promise(r => {
            t.onload = () => r(t)
        }), document.head.append(t), b
    };
    var D = async t => {
        if (!t) return;
        if (a) {
            let s = await a;
            return () => {
                s.remove(), a = void 0
            }
        }
        let r = K[t] || V(t), o = document.createElement("link");
        o.setAttribute("rel", "stylesheet"), o.setAttribute("href", r), a = new Promise(s => {
            o.onload = () => s(o)
        }), document.head.append(o), await a, () => {
            o.remove(), a = void 0
        }
    };
    var G = async () => {
        await w(h, U);
        let t = [...document.querySelectorAll('pre code')], r = t.reduce((e, i) => (e || (e = i.getAttribute(y.theme.key)), e), null), [o] = await Promise.all([D(r), f()]), s = W(t);
        return B(m, s, () => {
            o == null || o()
        })
    };
    var W = t => {
        let r = t.reduce((o, s) => {
            let e = s.tagName === "CODE" ? [s] : s.querySelectorAll("code");
            return o.push(...e), o
        }, []);
        for (let o of r) window.hljs.highlightElement(o);
        return r
    };
    H({
        init: G,
        version: O,
        attributeKey: m
    });
    f();
})();
