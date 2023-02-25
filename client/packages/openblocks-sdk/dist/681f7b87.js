/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Ia = {};
Ia.version = "0.18.5";
var Nr = 1200, Bt = 1252, Xc = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], un = {
  0: 1252,
  1: 65001,
  2: 65001,
  77: 1e4,
  128: 932,
  129: 949,
  130: 1361,
  134: 936,
  136: 950,
  161: 1253,
  162: 1254,
  163: 1258,
  177: 1255,
  178: 1256,
  186: 1257,
  204: 1251,
  222: 874,
  238: 1250,
  255: 1252,
  69: 6969
}, S0 = function(e) {
  Xc.indexOf(e) != -1 && (Bt = un[0] = e);
};
function Gc() {
  S0(1252);
}
var Gr = function(e) {
  Nr = e, S0(e);
};
function F0() {
  Gr(1200), Gc();
}
function u0(e) {
  for (var t = [], r = 0, a = e.length; r < a; ++r)
    t[r] = e.charCodeAt(r);
  return t;
}
function zc(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return t.join("");
}
function xs(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var ra = function(e) {
  var t = e.charCodeAt(0), r = e.charCodeAt(1);
  return t == 255 && r == 254 ? zc(e.slice(2)) : t == 254 && r == 255 ? xs(e.slice(2)) : t == 65279 ? e.slice(1) : e;
}, wa = function(t) {
  return String.fromCharCode(t);
}, Z0 = function(t) {
  return String.fromCharCode(t);
}, De;
function Ug(e) {
  De = e, Gr = function(t) {
    Nr = t, S0(t);
  }, ra = function(t) {
    return t.charCodeAt(0) === 255 && t.charCodeAt(1) === 254 ? De.utils.decode(1200, u0(t.slice(2))) : t;
  }, wa = function(r) {
    return Nr === 1200 ? String.fromCharCode(r) : De.utils.decode(Nr, [r & 255, r >> 8])[0];
  }, Z0 = function(r) {
    return De.utils.decode(Bt, [r])[0];
  }, Vs();
}
var _t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Ra(e) {
  for (var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, o = 0; o < e.length; )
    r = e.charCodeAt(o++), i = r >> 2, a = e.charCodeAt(o++), s = (r & 3) << 4 | a >> 4, n = e.charCodeAt(o++), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), t += _t.charAt(i) + _t.charAt(s) + _t.charAt(f) + _t.charAt(c);
  return t;
}
function br(e) {
  var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var o = 0; o < e.length; )
    i = _t.indexOf(e.charAt(o++)), s = _t.indexOf(e.charAt(o++)), r = i << 2 | s >> 4, t += String.fromCharCode(r), f = _t.indexOf(e.charAt(o++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (t += String.fromCharCode(a)), c = _t.indexOf(e.charAt(o++)), n = (f & 3) << 6 | c, c !== 64 && (t += String.fromCharCode(n));
  return t;
}
var Te = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), xt = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function Tt(e) {
  return Te ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function si(e) {
  return Te ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Ir = function(t) {
  return Te ? xt(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function za(e) {
  if (typeof ArrayBuffer > "u")
    return Ir(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), a = 0; a != e.length; ++a)
    r[a] = e.charCodeAt(a) & 255;
  return t;
}
function At(e) {
  if (Array.isArray(e))
    return e.map(function(a) {
      return String.fromCharCode(a);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function $c(e) {
  if (typeof Uint8Array > "u")
    throw new Error("Unsupported");
  return new Uint8Array(e);
}
function hn(e) {
  if (typeof ArrayBuffer > "u")
    throw new Error("Unsupported");
  if (e instanceof ArrayBuffer)
    return hn(new Uint8Array(e));
  for (var t = new Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}
var cr = Te ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : xt(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var a = new Uint8Array(r), n = 0;
    for (t = 0, r = 0; t < e.length; r += n, ++t)
      if (n = e[t].length, e[t] instanceof Uint8Array)
        a.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        a.set(new Uint8Array(e[t]), r);
      }
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function Kc(e) {
  for (var t = [], r = 0, a = e.length + 250, n = Tt(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128)
      n[r++] = s;
    else if (s < 2048)
      n[r++] = 192 | s >> 6 & 31, n[r++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[r++] = 240 | s >> 8 & 7, n[r++] = 128 | s >> 2 & 63, n[r++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[r++] = 128 | f & 63;
    } else
      n[r++] = 224 | s >> 12 & 15, n[r++] = 128 | s >> 6 & 63, n[r++] = 128 | s & 63;
    r > a && (t.push(n.slice(0, r)), r = 0, n = Tt(65535), a = 65530);
  }
  return t.push(n.slice(0, r)), cr(t);
}
var _r = /\u0000/g, ka = /[\u0001-\u0006]/g;
function aa(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function jr(e, t) {
  var r = "" + e;
  return r.length >= t ? r : $e("0", t - r.length) + r;
}
function xn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : $e(" ", t - r.length) + r;
}
function h0(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + $e(" ", t - r.length);
}
function jc(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : $e("0", t - r.length) + r;
}
function Yc(e, t) {
  var r = "" + e;
  return r.length >= t ? r : $e("0", t - r.length) + r;
}
var fi = /* @__PURE__ */ Math.pow(2, 32);
function Zt(e, t) {
  if (e > fi || e < -fi)
    return jc(e, t);
  var r = Math.round(e);
  return Yc(r, t);
}
function x0(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var ci = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], B0 = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Jc(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var de = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'
}, oi = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  67: 9,
  68: 10,
  69: 12,
  70: 13,
  71: 14,
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  76: 20,
  77: 21,
  78: 22,
  79: 45,
  80: 46,
  81: 47,
  82: 0
}, Zc = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function d0(e, t, r) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, c = 1, o = 0, l = 0, u = Math.floor(n); o < t && (u = Math.floor(n), f = u * s + i, l = u * o + c, !(n - u < 5e-8)); )
    n = 1 / (n - u), i = s, s = f, c = o, o = l;
  if (l > t && (o > t ? (l = c, f = i) : (l = o, f = s)), !r)
    return [0, a * f, l];
  var x = Math.floor(a * f / l);
  return [x, a * f - x * l, l];
}
function wt(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), t && t.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60)
    s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0)
    s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var c = new Date(1900, 0, 1);
    c.setDate(c.getDate() + a - 1), s = [c.getFullYear(), c.getMonth() + 1, c.getDate()], i = c.getDay(), a < 60 && (i = (i + 6) % 7), r && (i = ao(c, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
var ds = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), qc = /* @__PURE__ */ ds.getTime(), Qc = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function vs(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Qc && (r += 24 * 60 * 60 * 1e3), (r - (qc + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ ds.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function dn(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function eo(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function ro(e) {
  var t = e < 0 ? 12 : 11, r = dn(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function to(e) {
  var t = dn(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function Na(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = ro(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = to(e), dn(eo(r.toUpperCase()));
}
function Mt(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Na(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return Pr(14, vs(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function ao(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function no(e, t, r, a) {
  var n = "", i = 0, s = 0, f = r.y, c, o = 0;
  switch (e) {
    case 98:
      f = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          c = f % 100, o = 2;
          break;
        default:
          c = f % 1e4, o = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          c = r.m, o = t.length;
          break;
        case 3:
          return B0[r.m - 1][1];
        case 5:
          return B0[r.m - 1][0];
        default:
          return B0[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          c = r.d, o = t.length;
          break;
        case 3:
          return ci[r.q][0];
        default:
          return ci[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          c = 1 + (r.H + 11) % 12, o = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          c = r.H, o = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          c = r.M, o = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? jr(r.S, t.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (r.S + r.u)), i >= 60 * s && (i = 0), t === "s" ? i === 0 ? "0" : "" + i / s : (n = jr(i, 2 + a), t === "ss" ? n.substr(0, 2) : "." + n.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          c = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          c = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          c = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      o = t.length === 3 ? 1 : 2;
      break;
    case 101:
      c = f, o = 1;
      break;
  }
  var l = o > 0 ? jr(c, o) : "";
  return l;
}
function kt(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, a = e.substr(0, r); r != e.length; r += t)
    a += (a.length > 0 ? "," : "") + e.substr(r, t);
  return a;
}
var ps = /%/g;
function io(e, t, r) {
  var a = t.replace(ps, ""), n = t.length - a.length;
  return ut(e, a, r * Math.pow(10, 2 * n)) + $e("%", n);
}
function so(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44; )
    --a;
  return ut(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)));
}
function ms(e, t) {
  var r, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + ms(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (i < 0 && (i += n), r = (t / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), r.indexOf("e") === -1) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, n) + "." + r.substr(2 + n), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
      return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
    });
  } else
    r = t.toExponential(a);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var gs = /# (\?+)( ?)\/( ?)(\d+)/;
function fo(e, t, r) {
  var a = parseInt(e[4], 10), n = Math.round(t * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return r + (i === 0 ? "" : "" + i) + " " + (s === 0 ? $e(" ", e[1].length + 1 + e[4].length) : xn(s, e[1].length) + e[2] + "/" + e[3] + jr(f, e[4].length));
}
function co(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + $e(" ", e[1].length + 2 + e[4].length);
}
var _s = /^#*0*\.([0#]+)/, ws = /\).*[0#]/, ks = /\(###\) ###\\?-####/;
function Sr(e) {
  for (var t = "", r, a = 0; a != e.length; ++a)
    switch (r = e.charCodeAt(a)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function li(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function ui(e, t) {
  var r = e - Math.floor(e), a = Math.pow(10, t);
  return t < ("" + Math.round(r * a)).length ? 0 : Math.round(r * a);
}
function oo(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function lo(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function Ur(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(ws)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Ur("n", a, r) : "(" + Ur("n", a, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return so(e, t, r);
  if (t.indexOf("%") !== -1)
    return io(e, t, r);
  if (t.indexOf("E") !== -1)
    return ms(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Ur(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, i, s, f, c = Math.abs(r), o = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return o + Zt(c, t.length);
  if (t.match(/^[#?]+$/))
    return n = Zt(r, 0), n === "0" && (n = ""), n.length > t.length ? n : Sr(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(gs))
    return fo(i, c, o);
  if (t.match(/^#+0+$/))
    return o + Zt(c, t.length - t.indexOf("0"));
  if (i = t.match(_s))
    return n = li(r, i[1].length).replace(/^([^\.]+)$/, "$1." + Sr(i[1])).replace(/\.$/, "." + Sr(i[1])).replace(/\.(\d*)$/, function(v, h) {
      return "." + h + $e("0", Sr(i[1]).length - h.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return o + li(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return o + kt(Zt(c, 0));
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Ur(e, t, -r) : kt("" + (Math.floor(r) + oo(r, i[1].length))) + "." + jr(ui(r, i[1].length), i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return Ur(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = aa(Ur(e, t.replace(/[\\-]/g, ""), r)), s = 0, aa(aa(t.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return s < n.length ? n.charAt(s++) : v === "0" ? "0" : "";
    }));
  if (t.match(ks))
    return n = Ur(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var l = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(i[4].length, 7), f = d0(c, Math.pow(10, s) - 1, !1), n = "" + o, l = ut("n", i[1], f[1]), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), n += l + i[2] + "/" + i[3], l = h0(f[2], s), l.length < i[4].length && (l = Sr(i[4].substr(i[4].length - l.length)) + l), n += l, n;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = d0(c, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? xn(f[1], s) + i[2] + "/" + i[3] + h0(f[2], s) : $e(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return n = Zt(r, 0), t.length <= n.length ? n : Sr(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var u = t.indexOf(".") - s, x = t.length - n.length - u;
    return Sr(t.substr(0, u) + n + t.substr(t.length - x));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return s = ui(r, i[1].length), r < 0 ? "-" + Ur(e, t, -r) : kt(lo(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? jr(0, 3 - v.length) : "") + v;
    }) + "." + jr(s, i[1].length);
  switch (t) {
    case "###,##0.00":
      return Ur(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = kt(Zt(c, 0));
      return d !== "0" ? o + d : "";
    case "###,###.00":
      return Ur(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return Ur(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function uo(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44; )
    --a;
  return ut(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)));
}
function ho(e, t, r) {
  var a = t.replace(ps, ""), n = t.length - a.length;
  return ut(e, a, r * Math.pow(10, 2 * n)) + $e("%", n);
}
function Es(e, t) {
  var r, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + Es(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (i < 0 && (i += n), r = (t / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), !r.match(/[Ee]/)) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
      return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
    });
  } else
    r = t.toExponential(a);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function et(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(ws)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? et("n", a, r) : "(" + et("n", a, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return uo(e, t, r);
  if (t.indexOf("%") !== -1)
    return ho(e, t, r);
  if (t.indexOf("E") !== -1)
    return Es(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + et(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, i, s, f, c = Math.abs(r), o = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return o + jr(c, t.length);
  if (t.match(/^[#?]+$/))
    return n = "" + r, r === 0 && (n = ""), n.length > t.length ? n : Sr(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(gs))
    return co(i, c, o);
  if (t.match(/^#+0+$/))
    return o + jr(c, t.length - t.indexOf("0"));
  if (i = t.match(_s))
    return n = ("" + r).replace(/^([^\.]+)$/, "$1." + Sr(i[1])).replace(/\.$/, "." + Sr(i[1])), n = n.replace(/\.(\d*)$/, function(v, h) {
      return "." + h + $e("0", Sr(i[1]).length - h.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return o + ("" + c).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return o + kt("" + c);
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + et(e, t, -r) : kt("" + r) + "." + $e("0", i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return et(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = aa(et(e, t.replace(/[\\-]/g, ""), r)), s = 0, aa(aa(t.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return s < n.length ? n.charAt(s++) : v === "0" ? "0" : "";
    }));
  if (t.match(ks))
    return n = et(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var l = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(i[4].length, 7), f = d0(c, Math.pow(10, s) - 1, !1), n = "" + o, l = ut("n", i[1], f[1]), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), n += l + i[2] + "/" + i[3], l = h0(f[2], s), l.length < i[4].length && (l = Sr(i[4].substr(i[4].length - l.length)) + l), n += l, n;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = d0(c, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? xn(f[1], s) + i[2] + "/" + i[3] + h0(f[2], s) : $e(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return n = "" + r, t.length <= n.length ? n : Sr(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var u = t.indexOf(".") - s, x = t.length - n.length - u;
    return Sr(t.substr(0, u) + n + t.substr(t.length - x));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + et(e, t, -r) : kt("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? jr(0, 3 - v.length) : "") + v;
    }) + "." + jr(0, i[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = kt("" + c);
      return d !== "0" ? o + d : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return et(e, t.slice(0, t.lastIndexOf(".")), r) + Sr(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function ut(e, t, r) {
  return (r | 0) === r ? et(e, t, r) : Ur(e, t, r);
}
function xo(e) {
  for (var t = [], r = !1, a = 0, n = 0; a < e.length; ++a)
    switch (e.charCodeAt(a)) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++a;
        break;
      case 59:
        t[t.length] = e.substr(n, a - n), n = a + 1;
    }
  if (t[t.length] = e.substr(n), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var Ts = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Gt(e) {
  for (var t = 0, r = "", a = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        x0(e, t) && (t += 6), t++;
        break;
      case '"':
        for (; e.charCodeAt(++t) !== 34 && t < e.length; )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "\u4E0A":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348")
          return !0;
        ++t;
        break;
      case "[":
        for (a = r; e.charAt(t++) !== "]" && t < e.length; )
          a += e.charAt(t);
        if (a.match(Ts))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function vo(e, t, r, a) {
  for (var n = [], i = "", s = 0, f = "", c = "t", o, l, u, x = "H"; s < e.length; )
    switch (f = e.charAt(s)) {
      case "G":
        if (!x0(e, s))
          throw new Error("unrecognized character " + f + " in " + e);
        n[n.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (i = ""; (u = e.charCodeAt(++s)) !== 34 && s < e.length; )
          i += String.fromCharCode(u);
        n[n.length] = { t: "t", v: i }, ++s;
        break;
      case "\\":
        var d = e.charAt(++s), v = d === "(" || d === ")" ? d : "t";
        n[n.length] = { t: v, v: d }, ++s;
        break;
      case "_":
        n[n.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        n[n.length] = { t: "T", v: t }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (o == null && (o = wt(t, r, e.charAt(s + 1) === "2"), o == null))
            return "";
          n[n.length] = { t: "X", v: e.substr(s, 2) }, c = f, s += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        f = f.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || o == null && (o = wt(t, r), o == null))
          return "";
        for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; )
          i += f;
        f === "m" && c.toLowerCase() === "h" && (f = "M"), f === "h" && (f = x), n[n.length] = { t: f, v: i }, c = f;
        break;
      case "A":
      case "a":
      case "\u4E0A":
        var h = { t: f, v: f };
        if (o == null && (o = wt(t, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (o != null && (h.v = o.H >= 12 ? "P" : "A"), h.t = "T", x = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (o != null && (h.v = o.H >= 12 ? "PM" : "AM"), h.t = "T", s += 5, x = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (o != null && (h.v = o.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), h.t = "T", s += 5, x = "h") : (h.t = "t", ++s), o == null && h.t === "T")
          return "";
        n[n.length] = h, c = f;
        break;
      case "[":
        for (i = f; e.charAt(s++) !== "]" && s < e.length; )
          i += e.charAt(s);
        if (i.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + i + "|";
        if (i.match(Ts)) {
          if (o == null && (o = wt(t, r), o == null))
            return "";
          n[n.length] = { t: "Z", v: i.toLowerCase() }, c = i.charAt(1);
        } else
          i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", Gt(e) || (n[n.length] = { t: "t", v: i }));
        break;
      case ".":
        if (o != null) {
          for (i = f; ++s < e.length && (f = e.charAt(s)) === "0"; )
            i += f;
          n[n.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1; )
          i += f;
        n[n.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = f; e.charAt(++s) === f; )
          i += f;
        n[n.length] = { t: f, v: i }, c = f;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        n[n.length] = { t: a === 1 ? "t" : f, v: f }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; )
          i += e.charAt(s);
        n[n.length] = { t: "D", v: i };
        break;
      case " ":
        n[n.length] = { t: f, v: f }, ++s;
        break;
      case "$":
        n[n.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(f) === -1)
          throw new Error("unrecognized character " + f + " in " + e);
        n[n.length] = { t: "t", v: f }, ++s;
        break;
    }
  var p = 0, w = 0, y;
  for (s = n.length - 1, c = "t"; s >= 0; --s)
    switch (n[s].t) {
      case "h":
      case "H":
        n[s].t = x, c = "h", p < 1 && (p = 1);
        break;
      case "s":
        (y = n[s].v.match(/\.0+$/)) && (w = Math.max(w, y[0].length - 1)), p < 3 && (p = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        c = n[s].t;
        break;
      case "m":
        c === "s" && (n[s].t = "M", p < 2 && (p = 2));
        break;
      case "X":
        break;
      case "Z":
        p < 1 && n[s].v.match(/[Hh]/) && (p = 1), p < 2 && n[s].v.match(/[Mm]/) && (p = 2), p < 3 && n[s].v.match(/[Ss]/) && (p = 3);
    }
  switch (p) {
    case 0:
      break;
    case 1:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M), o.M >= 60 && (o.M = 0, ++o.H);
      break;
    case 2:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M);
      break;
  }
  var g = "", D;
  for (s = 0; s < n.length; ++s)
    switch (n[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        n[s].v = "", n[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        n[s].v = no(n[s].t.charCodeAt(0), n[s].v, o, w), n[s].t = "t";
        break;
      case "n":
      case "?":
        for (D = s + 1; n[D] != null && ((f = n[D].t) === "?" || f === "D" || (f === " " || f === "t") && n[D + 1] != null && (n[D + 1].t === "?" || n[D + 1].t === "t" && n[D + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[D].v === "/" || n[D].v === " " && n[D + 1] != null && n[D + 1].t == "?")); )
          n[s].v += n[D].v, n[D] = { v: "", t: ";" }, ++D;
        g += n[s].v, s = D - 1;
        break;
      case "G":
        n[s].t = "t", n[s].v = Mt(t, r);
        break;
    }
  var b = "", N, F;
  if (g.length > 0) {
    g.charCodeAt(0) == 40 ? (N = t < 0 && g.charCodeAt(0) === 45 ? -t : t, F = ut("n", g, N)) : (N = t < 0 && a > 1 ? -t : t, F = ut("n", g, N), N < 0 && n[0] && n[0].t == "t" && (F = F.substr(1), n[0].v = "-" + n[0].v)), D = F.length - 1;
    var B = n.length;
    for (s = 0; s < n.length; ++s)
      if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
        B = s;
        break;
      }
    var I = n.length;
    if (B === n.length && F.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s)
        n[s] == null || "n?".indexOf(n[s].t) === -1 || (D >= n[s].v.length - 1 ? (D -= n[s].v.length, n[s].v = F.substr(D + 1, n[s].v.length)) : D < 0 ? n[s].v = "" : (n[s].v = F.substr(0, D + 1), D = -1), n[s].t = "t", I = s);
      D >= 0 && I < n.length && (n[I].v = F.substr(0, D + 1) + n[I].v);
    } else if (B !== n.length && F.indexOf("E") === -1) {
      for (D = F.indexOf(".") - 1, s = B; s >= 0; --s)
        if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
          for (l = n[s].v.indexOf(".") > -1 && s === B ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, b = n[s].v.substr(l + 1); l >= 0; --l)
            D >= 0 && (n[s].v.charAt(l) === "0" || n[s].v.charAt(l) === "#") && (b = F.charAt(D--) + b);
          n[s].v = b, n[s].t = "t", I = s;
        }
      for (D >= 0 && I < n.length && (n[I].v = F.substr(0, D + 1) + n[I].v), D = F.indexOf(".") + 1, s = B; s < n.length; ++s)
        if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== B)) {
          for (l = n[s].v.indexOf(".") > -1 && s === B ? n[s].v.indexOf(".") + 1 : 0, b = n[s].v.substr(0, l); l < n[s].v.length; ++l)
            D < F.length && (b += F.charAt(D++));
          n[s].v = b, n[s].t = "t", I = s;
        }
    }
  }
  for (s = 0; s < n.length; ++s)
    n[s] != null && "n?".indexOf(n[s].t) > -1 && (N = a > 1 && t < 0 && s > 0 && n[s - 1].v === "-" ? -t : t, n[s].v = ut(n[s].t, n[s].v, N), n[s].t = "t");
  var z = "";
  for (s = 0; s !== n.length; ++s)
    n[s] != null && (z += n[s].v);
  return z;
}
var hi = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function xi(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function po(e, t) {
  var r = xo(e), a = r.length, n = r[a - 1].indexOf("@");
  if (a < 4 && n > -1 && --a, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || n > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = n > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = n > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = n > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [a, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(hi), f = r[1].match(hi);
    return xi(t, s) ? [a, r[0]] : xi(t, f) ? [a, r[1]] : [a, r[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function Pr(e, t, r) {
  r == null && (r = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? a = r.dateNF : a = e;
      break;
    case "number":
      e == 14 && r.dateNF ? a = r.dateNF : a = (r.table != null ? r.table : de)[e], a == null && (a = r.table && r.table[oi[e]] || de[oi[e]]), a == null && (a = Zc[e] || "General");
      break;
  }
  if (x0(a, 0))
    return Mt(t, r);
  t instanceof Date && (t = vs(t, r.date1904));
  var n = po(a, t);
  if (x0(n[1]))
    return Mt(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return vo(n[1], t, r, n[0]);
}
function at(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (de[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (de[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return de[t] = e, t;
}
function $a(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && at(e[t], t);
}
function la() {
  de = Jc();
}
var mo = {
  format: Pr,
  load: at,
  _table: de,
  load_table: $a,
  parse_date_code: wt,
  is_date: Gt,
  get_table: function() {
    return mo._table = de;
  }
}, go = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, Ss = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function _o(e) {
  var t = typeof e == "number" ? de[e] : e;
  return t = t.replace(Ss, "(\\d+)"), new RegExp("^" + t + "$");
}
function wo(e, t, r) {
  var a = -1, n = -1, i = -1, s = -1, f = -1, c = -1;
  (t.match(Ss) || []).forEach(function(u, x) {
    var d = parseInt(r[x + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        a = d;
        break;
      case "d":
        i = d;
        break;
      case "h":
        s = d;
        break;
      case "s":
        c = d;
        break;
      case "m":
        s >= 0 ? f = d : n = d;
        break;
    }
  }), c >= 0 && f == -1 && n >= 0 && (f = n, n = -1);
  var o = ("" + (a >= 0 ? a : new Date().getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  o.length == 7 && (o = "0" + o), o.length == 8 && (o = "20" + o);
  var l = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
  return s == -1 && f == -1 && c == -1 ? o : a == -1 && n == -1 && i == -1 ? l : o + "T" + l;
}
var ko = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var F = 0, B = new Array(256), I = 0; I != 256; ++I)
      F = I, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, B[I] = F;
    return typeof Int32Array < "u" ? new Int32Array(B) : B;
  }
  var r = t();
  function a(F) {
    var B = 0, I = 0, z = 0, X = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (z = 0; z != 256; ++z)
      X[z] = F[z];
    for (z = 0; z != 256; ++z)
      for (I = F[z], B = 256 + z; B < 4096; B += 256)
        I = X[B] = I >>> 8 ^ F[I & 255];
    var L = [];
    for (z = 1; z != 16; ++z)
      L[z - 1] = typeof Int32Array < "u" ? X.subarray(z * 256, z * 256 + 256) : X.slice(z * 256, z * 256 + 256);
    return L;
  }
  var n = a(r), i = n[0], s = n[1], f = n[2], c = n[3], o = n[4], l = n[5], u = n[6], x = n[7], d = n[8], v = n[9], h = n[10], p = n[11], w = n[12], y = n[13], g = n[14];
  function D(F, B) {
    for (var I = B ^ -1, z = 0, X = F.length; z < X; )
      I = I >>> 8 ^ r[(I ^ F.charCodeAt(z++)) & 255];
    return ~I;
  }
  function b(F, B) {
    for (var I = B ^ -1, z = F.length - 15, X = 0; X < z; )
      I = g[F[X++] ^ I & 255] ^ y[F[X++] ^ I >> 8 & 255] ^ w[F[X++] ^ I >> 16 & 255] ^ p[F[X++] ^ I >>> 24] ^ h[F[X++]] ^ v[F[X++]] ^ d[F[X++]] ^ x[F[X++]] ^ u[F[X++]] ^ l[F[X++]] ^ o[F[X++]] ^ c[F[X++]] ^ f[F[X++]] ^ s[F[X++]] ^ i[F[X++]] ^ r[F[X++]];
    for (z += 15; X < z; )
      I = I >>> 8 ^ r[(I ^ F[X++]) & 255];
    return ~I;
  }
  function N(F, B) {
    for (var I = B ^ -1, z = 0, X = F.length, L = 0, J = 0; z < X; )
      L = F.charCodeAt(z++), L < 128 ? I = I >>> 8 ^ r[(I ^ L) & 255] : L < 2048 ? (I = I >>> 8 ^ r[(I ^ (192 | L >> 6 & 31)) & 255], I = I >>> 8 ^ r[(I ^ (128 | L & 63)) & 255]) : L >= 55296 && L < 57344 ? (L = (L & 1023) + 64, J = F.charCodeAt(z++) & 1023, I = I >>> 8 ^ r[(I ^ (240 | L >> 8 & 7)) & 255], I = I >>> 8 ^ r[(I ^ (128 | L >> 2 & 63)) & 255], I = I >>> 8 ^ r[(I ^ (128 | J >> 6 & 15 | (L & 3) << 4)) & 255], I = I >>> 8 ^ r[(I ^ (128 | J & 63)) & 255]) : (I = I >>> 8 ^ r[(I ^ (224 | L >> 12 & 15)) & 255], I = I >>> 8 ^ r[(I ^ (128 | L >> 6 & 63)) & 255], I = I >>> 8 ^ r[(I ^ (128 | L & 63)) & 255]);
    return ~I;
  }
  return e.table = r, e.bstr = D, e.buf = b, e.str = N, e;
}(), xe = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(m, E) {
    for (var _ = m.split("/"), k = E.split("/"), T = 0, S = 0, U = Math.min(_.length, k.length); T < U; ++T) {
      if (S = _[T].length - k[T].length)
        return S;
      if (_[T] != k[T])
        return _[T] < k[T] ? -1 : 1;
    }
    return _.length - k.length;
  }
  function a(m) {
    if (m.charAt(m.length - 1) == "/")
      return m.slice(0, -1).indexOf("/") === -1 ? m : a(m.slice(0, -1));
    var E = m.lastIndexOf("/");
    return E === -1 ? m : m.slice(0, E + 1);
  }
  function n(m) {
    if (m.charAt(m.length - 1) == "/")
      return n(m.slice(0, -1));
    var E = m.lastIndexOf("/");
    return E === -1 ? m : m.slice(E + 1);
  }
  function i(m, E) {
    typeof E == "string" && (E = new Date(E));
    var _ = E.getHours();
    _ = _ << 6 | E.getMinutes(), _ = _ << 5 | E.getSeconds() >>> 1, m.write_shift(2, _);
    var k = E.getFullYear() - 1980;
    k = k << 4 | E.getMonth() + 1, k = k << 5 | E.getDate(), m.write_shift(2, k);
  }
  function s(m) {
    var E = m.read_shift(2) & 65535, _ = m.read_shift(2) & 65535, k = new Date(), T = _ & 31;
    _ >>>= 5;
    var S = _ & 15;
    _ >>>= 4, k.setMilliseconds(0), k.setFullYear(_ + 1980), k.setMonth(S - 1), k.setDate(T);
    var U = E & 31;
    E >>>= 5;
    var K = E & 63;
    return E >>>= 6, k.setHours(E), k.setMinutes(K), k.setSeconds(U << 1), k;
  }
  function f(m) {
    ur(m, 0);
    for (var E = {}, _ = 0; m.l <= m.length - 4; ) {
      var k = m.read_shift(2), T = m.read_shift(2), S = m.l + T, U = {};
      switch (k) {
        case 21589:
          _ = m.read_shift(1), _ & 1 && (U.mtime = m.read_shift(4)), T > 5 && (_ & 2 && (U.atime = m.read_shift(4)), _ & 4 && (U.ctime = m.read_shift(4))), U.mtime && (U.mt = new Date(U.mtime * 1e3));
          break;
      }
      m.l = S, E[k] = U;
    }
    return E;
  }
  var c;
  function o() {
    return c || (c = {});
  }
  function l(m, E) {
    if (m[0] == 80 && m[1] == 75)
      return ii(m, E);
    if ((m[0] | 32) == 109 && (m[1] | 32) == 105)
      return Bc(m, E);
    if (m.length < 512)
      throw new Error("CFB file size " + m.length + " < 512");
    var _ = 3, k = 512, T = 0, S = 0, U = 0, K = 0, M = 0, W = [], H = m.slice(0, 512);
    ur(H, 0);
    var q = u(H);
    switch (_ = q[0], _) {
      case 3:
        k = 512;
        break;
      case 4:
        k = 4096;
        break;
      case 0:
        if (q[1] == 0)
          return ii(m, E);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + _);
    }
    k !== 512 && (H = m.slice(0, k), ur(H, 28));
    var se = m.slice(0, k);
    x(H, _);
    var ue = H.read_shift(4, "i");
    if (_ === 3 && ue !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + ue);
    H.l += 4, U = H.read_shift(4, "i"), H.l += 4, H.chk("00100000", "Mini Stream Cutoff Size: "), K = H.read_shift(4, "i"), T = H.read_shift(4, "i"), M = H.read_shift(4, "i"), S = H.read_shift(4, "i");
    for (var ee = -1, oe = 0; oe < 109 && (ee = H.read_shift(4, "i"), !(ee < 0)); ++oe)
      W[oe] = ee;
    var _e = d(m, k);
    p(M, S, _e, k, W);
    var Xe = y(_e, U, W, k);
    Xe[U].name = "!Directory", T > 0 && K !== J && (Xe[K].name = "!MiniFAT"), Xe[W[0]].name = "!FAT", Xe.fat_addrs = W, Xe.ssz = k;
    var Ge = {}, xr = [], pa = [], ma = [];
    g(U, Xe, _e, xr, T, Ge, pa, K), v(pa, ma, xr), xr.shift();
    var ga = {
      FileIndex: pa,
      FullPaths: ma
    };
    return E && E.raw && (ga.raw = { header: se, sectors: _e }), ga;
  }
  function u(m) {
    if (m[m.l] == 80 && m[m.l + 1] == 75)
      return [0, 0];
    m.chk(le, "Header Signature: "), m.l += 16;
    var E = m.read_shift(2, "u");
    return [m.read_shift(2, "u"), E];
  }
  function x(m, E) {
    var _ = 9;
    switch (m.l += 2, _ = m.read_shift(2)) {
      case 9:
        if (E != 3)
          throw new Error("Sector Shift: Expected 9 saw " + _);
        break;
      case 12:
        if (E != 4)
          throw new Error("Sector Shift: Expected 12 saw " + _);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + _);
    }
    m.chk("0600", "Mini Sector Shift: "), m.chk("000000000000", "Reserved: ");
  }
  function d(m, E) {
    for (var _ = Math.ceil(m.length / E) - 1, k = [], T = 1; T < _; ++T)
      k[T - 1] = m.slice(T * E, (T + 1) * E);
    return k[_ - 1] = m.slice(_ * E), k;
  }
  function v(m, E, _) {
    for (var k = 0, T = 0, S = 0, U = 0, K = 0, M = _.length, W = [], H = []; k < M; ++k)
      W[k] = H[k] = k, E[k] = _[k];
    for (; K < H.length; ++K)
      k = H[K], T = m[k].L, S = m[k].R, U = m[k].C, W[k] === k && (T !== -1 && W[T] !== T && (W[k] = W[T]), S !== -1 && W[S] !== S && (W[k] = W[S])), U !== -1 && (W[U] = k), T !== -1 && k != W[k] && (W[T] = W[k], H.lastIndexOf(T) < K && H.push(T)), S !== -1 && k != W[k] && (W[S] = W[k], H.lastIndexOf(S) < K && H.push(S));
    for (k = 1; k < M; ++k)
      W[k] === k && (S !== -1 && W[S] !== S ? W[k] = W[S] : T !== -1 && W[T] !== T && (W[k] = W[T]));
    for (k = 1; k < M; ++k)
      if (m[k].type !== 0) {
        if (K = k, K != W[K])
          do
            K = W[K], E[k] = E[K] + "/" + E[k];
          while (K !== 0 && W[K] !== -1 && K != W[K]);
        W[k] = -1;
      }
    for (E[0] += "/", k = 1; k < M; ++k)
      m[k].type !== 2 && (E[k] += "/");
  }
  function h(m, E, _) {
    for (var k = m.start, T = m.size, S = [], U = k; _ && T > 0 && U >= 0; )
      S.push(E.slice(U * L, U * L + L)), T -= L, U = Rt(_, U * 4);
    return S.length === 0 ? G(0) : cr(S).slice(0, m.size);
  }
  function p(m, E, _, k, T) {
    var S = J;
    if (m === J) {
      if (E !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (m !== -1) {
      var U = _[m], K = (k >>> 2) - 1;
      if (!U)
        return;
      for (var M = 0; M < K && (S = Rt(U, M * 4)) !== J; ++M)
        T.push(S);
      p(Rt(U, k - 4), E - 1, _, k, T);
    }
  }
  function w(m, E, _, k, T) {
    var S = [], U = [];
    T || (T = []);
    var K = k - 1, M = 0, W = 0;
    for (M = E; M >= 0; ) {
      T[M] = !0, S[S.length] = M, U.push(m[M]);
      var H = _[Math.floor(M * 4 / k)];
      if (W = M * 4 & K, k < 4 + W)
        throw new Error("FAT boundary crossed: " + M + " 4 " + k);
      if (!m[H])
        break;
      M = Rt(m[H], W);
    }
    return { nodes: S, data: Fi([U]) };
  }
  function y(m, E, _, k) {
    var T = m.length, S = [], U = [], K = [], M = [], W = k - 1, H = 0, q = 0, se = 0, ue = 0;
    for (H = 0; H < T; ++H)
      if (K = [], se = H + E, se >= T && (se -= T), !U[se]) {
        M = [];
        var ee = [];
        for (q = se; q >= 0; ) {
          ee[q] = !0, U[q] = !0, K[K.length] = q, M.push(m[q]);
          var oe = _[Math.floor(q * 4 / k)];
          if (ue = q * 4 & W, k < 4 + ue)
            throw new Error("FAT boundary crossed: " + q + " 4 " + k);
          if (!m[oe] || (q = Rt(m[oe], ue), ee[q]))
            break;
        }
        S[se] = { nodes: K, data: Fi([M]) };
      }
    return S;
  }
  function g(m, E, _, k, T, S, U, K) {
    for (var M = 0, W = k.length ? 2 : 0, H = E[m].data, q = 0, se = 0, ue; q < H.length; q += 128) {
      var ee = H.slice(q, q + 128);
      ur(ee, 64), se = ee.read_shift(2), ue = D0(ee, 0, se - W), k.push(ue);
      var oe = {
        name: ue,
        type: ee.read_shift(1),
        color: ee.read_shift(1),
        L: ee.read_shift(4, "i"),
        R: ee.read_shift(4, "i"),
        C: ee.read_shift(4, "i"),
        clsid: ee.read_shift(16),
        state: ee.read_shift(4, "i"),
        start: 0,
        size: 0
      }, _e = ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2);
      _e !== 0 && (oe.ct = D(ee, ee.l - 8));
      var Xe = ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2) + ee.read_shift(2);
      Xe !== 0 && (oe.mt = D(ee, ee.l - 8)), oe.start = ee.read_shift(4, "i"), oe.size = ee.read_shift(4, "i"), oe.size < 0 && oe.start < 0 && (oe.size = oe.type = 0, oe.start = J, oe.name = ""), oe.type === 5 ? (M = oe.start, T > 0 && M !== J && (E[M].name = "!StreamData")) : oe.size >= 4096 ? (oe.storage = "fat", E[oe.start] === void 0 && (E[oe.start] = w(_, oe.start, E.fat_addrs, E.ssz)), E[oe.start].name = oe.name, oe.content = E[oe.start].data.slice(0, oe.size)) : (oe.storage = "minifat", oe.size < 0 ? oe.size = 0 : M !== J && oe.start !== J && E[M] && (oe.content = h(oe, E[M].data, (E[K] || {}).data))), oe.content && ur(oe.content, 0), S[ue] = oe, U.push(oe);
    }
  }
  function D(m, E) {
    return new Date((fr(m, E + 4) / 1e7 * Math.pow(2, 32) + fr(m, E) / 1e7 - 11644473600) * 1e3);
  }
  function b(m, E) {
    return o(), l(c.readFileSync(m), E);
  }
  function N(m, E) {
    var _ = E && E.type;
    switch (_ || Te && Buffer.isBuffer(m) && (_ = "buffer"), _ || "base64") {
      case "file":
        return b(m, E);
      case "base64":
        return l(Ir(br(m)), E);
      case "binary":
        return l(Ir(m), E);
    }
    return l(m, E);
  }
  function F(m, E) {
    var _ = E || {}, k = _.root || "Root Entry";
    if (m.FullPaths || (m.FullPaths = []), m.FileIndex || (m.FileIndex = []), m.FullPaths.length !== m.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    m.FullPaths.length === 0 && (m.FullPaths[0] = k + "/", m.FileIndex[0] = { name: k, type: 5 }), _.CLSID && (m.FileIndex[0].clsid = _.CLSID), B(m);
  }
  function B(m) {
    var E = "Sh33tJ5";
    if (!xe.find(m, "/" + E)) {
      var _ = G(4);
      _[0] = 55, _[1] = _[3] = 50, _[2] = 54, m.FileIndex.push({ name: E, type: 2, content: _, size: 4, L: 69, R: 69, C: 69 }), m.FullPaths.push(m.FullPaths[0] + E), I(m);
    }
  }
  function I(m, E) {
    F(m);
    for (var _ = !1, k = !1, T = m.FullPaths.length - 1; T >= 0; --T) {
      var S = m.FileIndex[T];
      switch (S.type) {
        case 0:
          k ? _ = !0 : (m.FileIndex.pop(), m.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          k = !0, isNaN(S.R * S.L * S.C) && (_ = !0), S.R > -1 && S.L > -1 && S.R == S.L && (_ = !0);
          break;
        default:
          _ = !0;
          break;
      }
    }
    if (!(!_ && !E)) {
      var U = new Date(1987, 1, 19), K = 0, M = Object.create ? /* @__PURE__ */ Object.create(null) : {}, W = [];
      for (T = 0; T < m.FullPaths.length; ++T)
        M[m.FullPaths[T]] = !0, m.FileIndex[T].type !== 0 && W.push([m.FullPaths[T], m.FileIndex[T]]);
      for (T = 0; T < W.length; ++T) {
        var H = a(W[T][0]);
        k = M[H], k || (W.push([H, {
          name: n(H).replace("/", ""),
          type: 1,
          clsid: he,
          ct: U,
          mt: U,
          content: null
        }]), M[H] = !0);
      }
      for (W.sort(function(ue, ee) {
        return r(ue[0], ee[0]);
      }), m.FullPaths = [], m.FileIndex = [], T = 0; T < W.length; ++T)
        m.FullPaths[T] = W[T][0], m.FileIndex[T] = W[T][1];
      for (T = 0; T < W.length; ++T) {
        var q = m.FileIndex[T], se = m.FullPaths[T];
        if (q.name = n(se).replace("/", ""), q.L = q.R = q.C = -(q.color = 1), q.size = q.content ? q.content.length : 0, q.start = 0, q.clsid = q.clsid || he, T === 0)
          q.C = W.length > 1 ? 1 : -1, q.size = 0, q.type = 5;
        else if (se.slice(-1) == "/") {
          for (K = T + 1; K < W.length && a(m.FullPaths[K]) != se; ++K)
            ;
          for (q.C = K >= W.length ? -1 : K, K = T + 1; K < W.length && a(m.FullPaths[K]) != a(se); ++K)
            ;
          q.R = K >= W.length ? -1 : K, q.type = 1;
        } else
          a(m.FullPaths[T + 1] || "") == a(se) && (q.R = T + 1), q.type = 2;
      }
    }
  }
  function z(m, E) {
    var _ = E || {};
    if (_.fileType == "mad")
      return Mc(m, _);
    switch (I(m), _.fileType) {
      case "zip":
        return Ic(m, _);
    }
    var k = function(ue) {
      for (var ee = 0, oe = 0, _e = 0; _e < ue.FileIndex.length; ++_e) {
        var Xe = ue.FileIndex[_e];
        if (!!Xe.content) {
          var Ge = Xe.content.length;
          Ge > 0 && (Ge < 4096 ? ee += Ge + 63 >> 6 : oe += Ge + 511 >> 9);
        }
      }
      for (var xr = ue.FullPaths.length + 3 >> 2, pa = ee + 7 >> 3, ma = ee + 127 >> 7, ga = pa + oe + xr + ma, It = ga + 127 >> 7, L0 = It <= 109 ? 0 : Math.ceil((It - 109) / 127); ga + It + L0 + 127 >> 7 > It; )
        L0 = ++It <= 109 ? 0 : Math.ceil((It - 109) / 127);
      var ot = [1, L0, It, ma, xr, oe, ee, 0];
      return ue.FileIndex[0].size = ee << 6, ot[7] = (ue.FileIndex[0].start = ot[0] + ot[1] + ot[2] + ot[3] + ot[4] + ot[5]) + (ot[6] + 7 >> 3), ot;
    }(m), T = G(k[7] << 9), S = 0, U = 0;
    {
      for (S = 0; S < 8; ++S)
        T.write_shift(1, ie[S]);
      for (S = 0; S < 8; ++S)
        T.write_shift(2, 0);
      for (T.write_shift(2, 62), T.write_shift(2, 3), T.write_shift(2, 65534), T.write_shift(2, 9), T.write_shift(2, 6), S = 0; S < 3; ++S)
        T.write_shift(2, 0);
      for (T.write_shift(4, 0), T.write_shift(4, k[2]), T.write_shift(4, k[0] + k[1] + k[2] + k[3] - 1), T.write_shift(4, 0), T.write_shift(4, 1 << 12), T.write_shift(4, k[3] ? k[0] + k[1] + k[2] - 1 : J), T.write_shift(4, k[3]), T.write_shift(-4, k[1] ? k[0] - 1 : J), T.write_shift(4, k[1]), S = 0; S < 109; ++S)
        T.write_shift(-4, S < k[2] ? k[1] + S : -1);
    }
    if (k[1])
      for (U = 0; U < k[1]; ++U) {
        for (; S < 236 + U * 127; ++S)
          T.write_shift(-4, S < k[2] ? k[1] + S : -1);
        T.write_shift(-4, U === k[1] - 1 ? J : U + 1);
      }
    var K = function(ue) {
      for (U += ue; S < U - 1; ++S)
        T.write_shift(-4, S + 1);
      ue && (++S, T.write_shift(-4, J));
    };
    for (U = S = 0, U += k[1]; S < U; ++S)
      T.write_shift(-4, ce.DIFSECT);
    for (U += k[2]; S < U; ++S)
      T.write_shift(-4, ce.FATSECT);
    K(k[3]), K(k[4]);
    for (var M = 0, W = 0, H = m.FileIndex[0]; M < m.FileIndex.length; ++M)
      H = m.FileIndex[M], H.content && (W = H.content.length, !(W < 4096) && (H.start = U, K(W + 511 >> 9)));
    for (K(k[6] + 7 >> 3); T.l & 511; )
      T.write_shift(-4, ce.ENDOFCHAIN);
    for (U = S = 0, M = 0; M < m.FileIndex.length; ++M)
      H = m.FileIndex[M], H.content && (W = H.content.length, !(!W || W >= 4096) && (H.start = U, K(W + 63 >> 6)));
    for (; T.l & 511; )
      T.write_shift(-4, ce.ENDOFCHAIN);
    for (S = 0; S < k[4] << 2; ++S) {
      var q = m.FullPaths[S];
      if (!q || q.length === 0) {
        for (M = 0; M < 17; ++M)
          T.write_shift(4, 0);
        for (M = 0; M < 3; ++M)
          T.write_shift(4, -1);
        for (M = 0; M < 12; ++M)
          T.write_shift(4, 0);
        continue;
      }
      H = m.FileIndex[S], S === 0 && (H.start = H.size ? H.start - 1 : J);
      var se = S === 0 && _.root || H.name;
      if (W = 2 * (se.length + 1), T.write_shift(64, se, "utf16le"), T.write_shift(2, W), T.write_shift(1, H.type), T.write_shift(1, H.color), T.write_shift(-4, H.L), T.write_shift(-4, H.R), T.write_shift(-4, H.C), H.clsid)
        T.write_shift(16, H.clsid, "hex");
      else
        for (M = 0; M < 4; ++M)
          T.write_shift(4, 0);
      T.write_shift(4, H.state || 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, 0), T.write_shift(4, H.start), T.write_shift(4, H.size), T.write_shift(4, 0);
    }
    for (S = 1; S < m.FileIndex.length; ++S)
      if (H = m.FileIndex[S], H.size >= 4096)
        if (T.l = H.start + 1 << 9, Te && Buffer.isBuffer(H.content))
          H.content.copy(T, T.l, 0, H.size), T.l += H.size + 511 & -512;
        else {
          for (M = 0; M < H.size; ++M)
            T.write_shift(1, H.content[M]);
          for (; M & 511; ++M)
            T.write_shift(1, 0);
        }
    for (S = 1; S < m.FileIndex.length; ++S)
      if (H = m.FileIndex[S], H.size > 0 && H.size < 4096)
        if (Te && Buffer.isBuffer(H.content))
          H.content.copy(T, T.l, 0, H.size), T.l += H.size + 63 & -64;
        else {
          for (M = 0; M < H.size; ++M)
            T.write_shift(1, H.content[M]);
          for (; M & 63; ++M)
            T.write_shift(1, 0);
        }
    if (Te)
      T.l = T.length;
    else
      for (; T.l < T.length; )
        T.write_shift(1, 0);
    return T;
  }
  function X(m, E) {
    var _ = m.FullPaths.map(function(M) {
      return M.toUpperCase();
    }), k = _.map(function(M) {
      var W = M.split("/");
      return W[W.length - (M.slice(-1) == "/" ? 2 : 1)];
    }), T = !1;
    E.charCodeAt(0) === 47 ? (T = !0, E = _[0].slice(0, -1) + E) : T = E.indexOf("/") !== -1;
    var S = E.toUpperCase(), U = T === !0 ? _.indexOf(S) : k.indexOf(S);
    if (U !== -1)
      return m.FileIndex[U];
    var K = !S.match(ka);
    for (S = S.replace(_r, ""), K && (S = S.replace(ka, "!")), U = 0; U < _.length; ++U)
      if ((K ? _[U].replace(ka, "!") : _[U]).replace(_r, "") == S || (K ? k[U].replace(ka, "!") : k[U]).replace(_r, "") == S)
        return m.FileIndex[U];
    return null;
  }
  var L = 64, J = -2, le = "d0cf11e0a1b11ae1", ie = [208, 207, 17, 224, 161, 177, 26, 225], he = "00000000000000000000000000000000", ce = {
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: J,
    FREESECT: -1,
    HEADER_SIGNATURE: le,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: he,
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function Pe(m, E, _) {
    o();
    var k = z(m, _);
    c.writeFileSync(E, k);
  }
  function V(m) {
    for (var E = new Array(m.length), _ = 0; _ < m.length; ++_)
      E[_] = String.fromCharCode(m[_]);
    return E.join("");
  }
  function ve(m, E) {
    var _ = z(m, E);
    switch (E && E.type || "buffer") {
      case "file":
        return o(), c.writeFileSync(E.filename, _), _;
      case "binary":
        return typeof _ == "string" ? _ : V(_);
      case "base64":
        return Ra(typeof _ == "string" ? _ : V(_));
      case "buffer":
        if (Te)
          return Buffer.isBuffer(_) ? _ : xt(_);
      case "array":
        return typeof _ == "string" ? Ir(_) : _;
    }
    return _;
  }
  var ge;
  function C(m) {
    try {
      var E = m.InflateRaw, _ = new E();
      if (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag), _.bytesRead)
        ge = m;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (k) {
      console.error("cannot use native zlib: " + (k.message || k));
    }
  }
  function P(m, E) {
    if (!ge)
      return ai(m, E);
    var _ = ge.InflateRaw, k = new _(), T = k._processChunk(m.slice(m.l), k._finishFlushFlag);
    return m.l += k.bytesRead, T;
  }
  function O(m) {
    return ge ? ge.deflateRawSync(m) : Se(m);
  }
  var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], re = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function te(m) {
    var E = (m << 1 | m << 11) & 139536 | (m << 5 | m << 15) & 558144;
    return (E >> 16 | E >> 8 | E) & 255;
  }
  for (var Q = typeof Uint8Array < "u", Z = Q ? new Uint8Array(1 << 8) : [], Ee = 0; Ee < 1 << 8; ++Ee)
    Z[Ee] = te(Ee);
  function A(m, E) {
    var _ = Z[m & 255];
    return E <= 8 ? _ >>> 8 - E : (_ = _ << 8 | Z[m >> 8 & 255], E <= 16 ? _ >>> 16 - E : (_ = _ << 8 | Z[m >> 16 & 255], _ >>> 24 - E));
  }
  function Ue(m, E) {
    var _ = E & 7, k = E >>> 3;
    return (m[k] | (_ <= 6 ? 0 : m[k + 1] << 8)) >>> _ & 3;
  }
  function Ce(m, E) {
    var _ = E & 7, k = E >>> 3;
    return (m[k] | (_ <= 5 ? 0 : m[k + 1] << 8)) >>> _ & 7;
  }
  function Be(m, E) {
    var _ = E & 7, k = E >>> 3;
    return (m[k] | (_ <= 4 ? 0 : m[k + 1] << 8)) >>> _ & 15;
  }
  function ye(m, E) {
    var _ = E & 7, k = E >>> 3;
    return (m[k] | (_ <= 3 ? 0 : m[k + 1] << 8)) >>> _ & 31;
  }
  function fe(m, E) {
    var _ = E & 7, k = E >>> 3;
    return (m[k] | (_ <= 1 ? 0 : m[k + 1] << 8)) >>> _ & 127;
  }
  function Je(m, E, _) {
    var k = E & 7, T = E >>> 3, S = (1 << _) - 1, U = m[T] >>> k;
    return _ < 8 - k || (U |= m[T + 1] << 8 - k, _ < 16 - k) || (U |= m[T + 2] << 16 - k, _ < 24 - k) || (U |= m[T + 3] << 24 - k), U & S;
  }
  function Lr(m, E, _) {
    var k = E & 7, T = E >>> 3;
    return k <= 5 ? m[T] |= (_ & 7) << k : (m[T] |= _ << k & 255, m[T + 1] = (_ & 7) >> 8 - k), E + 3;
  }
  function Zr(m, E, _) {
    var k = E & 7, T = E >>> 3;
    return _ = (_ & 1) << k, m[T] |= _, E + 1;
  }
  function ft(m, E, _) {
    var k = E & 7, T = E >>> 3;
    return _ <<= k, m[T] |= _ & 255, _ >>>= 8, m[T + 1] = _, E + 8;
  }
  function da(m, E, _) {
    var k = E & 7, T = E >>> 3;
    return _ <<= k, m[T] |= _ & 255, _ >>>= 8, m[T + 1] = _ & 255, m[T + 2] = _ >>> 8, E + 16;
  }
  function pt(m, E) {
    var _ = m.length, k = 2 * _ > E ? 2 * _ : E + 5, T = 0;
    if (_ >= E)
      return m;
    if (Te) {
      var S = si(k);
      if (m.copy)
        m.copy(S);
      else
        for (; T < m.length; ++T)
          S[T] = m[T];
      return S;
    } else if (Q) {
      var U = new Uint8Array(k);
      if (U.set)
        U.set(m);
      else
        for (; T < _; ++T)
          U[T] = m[T];
      return U;
    }
    return m.length = k, m;
  }
  function Dr(m) {
    for (var E = new Array(m), _ = 0; _ < m; ++_)
      E[_] = 0;
    return E;
  }
  function ct(m, E, _) {
    var k = 1, T = 0, S = 0, U = 0, K = 0, M = m.length, W = Q ? new Uint16Array(32) : Dr(32);
    for (S = 0; S < 32; ++S)
      W[S] = 0;
    for (S = M; S < _; ++S)
      m[S] = 0;
    M = m.length;
    var H = Q ? new Uint16Array(M) : Dr(M);
    for (S = 0; S < M; ++S)
      W[T = m[S]]++, k < T && (k = T), H[S] = 0;
    for (W[0] = 0, S = 1; S <= k; ++S)
      W[S + 16] = K = K + W[S - 1] << 1;
    for (S = 0; S < M; ++S)
      K = m[S], K != 0 && (H[S] = W[K + 16]++);
    var q = 0;
    for (S = 0; S < M; ++S)
      if (q = m[S], q != 0)
        for (K = A(H[S], k) >> k - q, U = (1 << k + 4 - q) - 1; U >= 0; --U)
          E[K | U << q] = q & 15 | S << 4;
    return k;
  }
  var mt = Q ? new Uint16Array(512) : Dr(512), va = Q ? new Uint16Array(32) : Dr(32);
  if (!Q) {
    for (var Tr = 0; Tr < 512; ++Tr)
      mt[Tr] = 0;
    for (Tr = 0; Tr < 32; ++Tr)
      va[Tr] = 0;
  }
  (function() {
    for (var m = [], E = 0; E < 32; E++)
      m.push(5);
    ct(m, va, 32);
    var _ = [];
    for (E = 0; E <= 143; E++)
      _.push(8);
    for (; E <= 255; E++)
      _.push(9);
    for (; E <= 279; E++)
      _.push(7);
    for (; E <= 287; E++)
      _.push(8);
    ct(_, mt, 288);
  })();
  var qr = /* @__PURE__ */ function() {
    for (var E = Q ? new Uint8Array(32768) : [], _ = 0, k = 0; _ < re.length - 1; ++_)
      for (; k < re[_ + 1]; ++k)
        E[k] = _;
    for (; k < 32768; ++k)
      E[k] = 29;
    var T = Q ? new Uint8Array(259) : [];
    for (_ = 0, k = 0; _ < j.length - 1; ++_)
      for (; k < j[_ + 1]; ++k)
        T[k] = _;
    function S(K, M) {
      for (var W = 0; W < K.length; ) {
        var H = Math.min(65535, K.length - W), q = W + H == K.length;
        for (M.write_shift(1, +q), M.write_shift(2, H), M.write_shift(2, ~H & 65535); H-- > 0; )
          M[M.l++] = K[W++];
      }
      return M.l;
    }
    function U(K, M) {
      for (var W = 0, H = 0, q = Q ? new Uint16Array(32768) : []; H < K.length; ) {
        var se = Math.min(65535, K.length - H);
        if (se < 10) {
          for (W = Lr(M, W, +(H + se == K.length)), W & 7 && (W += 8 - (W & 7)), M.l = W / 8 | 0, M.write_shift(2, se), M.write_shift(2, ~se & 65535); se-- > 0; )
            M[M.l++] = K[H++];
          W = M.l * 8;
          continue;
        }
        W = Lr(M, W, +(H + se == K.length) + 2);
        for (var ue = 0; se-- > 0; ) {
          var ee = K[H];
          ue = (ue << 5 ^ ee) & 32767;
          var oe = -1, _e = 0;
          if ((oe = q[ue]) && (oe |= H & -32768, oe > H && (oe -= 32768), oe < H))
            for (; K[oe + _e] == K[H + _e] && _e < 250; )
              ++_e;
          if (_e > 2) {
            ee = T[_e], ee <= 22 ? W = ft(M, W, Z[ee + 1] >> 1) - 1 : (ft(M, W, 3), W += 5, ft(M, W, Z[ee - 23] >> 5), W += 3);
            var Xe = ee < 8 ? 0 : ee - 4 >> 2;
            Xe > 0 && (da(M, W, _e - j[ee]), W += Xe), ee = E[H - oe], W = ft(M, W, Z[ee] >> 3), W -= 3;
            var Ge = ee < 4 ? 0 : ee - 2 >> 1;
            Ge > 0 && (da(M, W, H - oe - re[ee]), W += Ge);
            for (var xr = 0; xr < _e; ++xr)
              q[ue] = H & 32767, ue = (ue << 5 ^ K[H]) & 32767, ++H;
            se -= _e - 1;
          } else
            ee <= 143 ? ee = ee + 48 : W = Zr(M, W, 1), W = ft(M, W, Z[ee]), q[ue] = H & 32767, ++H;
        }
        W = ft(M, W, 0) - 1;
      }
      return M.l = (W + 7) / 8 | 0, M.l;
    }
    return function(M, W) {
      return M.length < 8 ? S(M, W) : U(M, W);
    };
  }();
  function Se(m) {
    var E = G(50 + Math.floor(m.length * 1.1)), _ = qr(m, E);
    return E.slice(0, _);
  }
  var Ze = Q ? new Uint16Array(32768) : Dr(32768), Br = Q ? new Uint16Array(32768) : Dr(32768), ar = Q ? new Uint16Array(128) : Dr(128), Ot = 1, ti = 1;
  function Cc(m, E) {
    var _ = ye(m, E) + 257;
    E += 5;
    var k = ye(m, E) + 1;
    E += 5;
    var T = Be(m, E) + 4;
    E += 4;
    for (var S = 0, U = Q ? new Uint8Array(19) : Dr(19), K = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], M = 1, W = Q ? new Uint8Array(8) : Dr(8), H = Q ? new Uint8Array(8) : Dr(8), q = U.length, se = 0; se < T; ++se)
      U[R[se]] = S = Ce(m, E), M < S && (M = S), W[S]++, E += 3;
    var ue = 0;
    for (W[0] = 0, se = 1; se <= M; ++se)
      H[se] = ue = ue + W[se - 1] << 1;
    for (se = 0; se < q; ++se)
      (ue = U[se]) != 0 && (K[se] = H[ue]++);
    var ee = 0;
    for (se = 0; se < q; ++se)
      if (ee = U[se], ee != 0) {
        ue = Z[K[se]] >> 8 - ee;
        for (var oe = (1 << 7 - ee) - 1; oe >= 0; --oe)
          ar[ue | oe << ee] = ee & 7 | se << 3;
      }
    var _e = [];
    for (M = 1; _e.length < _ + k; )
      switch (ue = ar[fe(m, E)], E += ue & 7, ue >>>= 3) {
        case 16:
          for (S = 3 + Ue(m, E), E += 2, ue = _e[_e.length - 1]; S-- > 0; )
            _e.push(ue);
          break;
        case 17:
          for (S = 3 + Ce(m, E), E += 3; S-- > 0; )
            _e.push(0);
          break;
        case 18:
          for (S = 11 + fe(m, E), E += 7; S-- > 0; )
            _e.push(0);
          break;
        default:
          _e.push(ue), M < ue && (M = ue);
          break;
      }
    var Xe = _e.slice(0, _), Ge = _e.slice(_);
    for (se = _; se < 286; ++se)
      Xe[se] = 0;
    for (se = k; se < 30; ++se)
      Ge[se] = 0;
    return Ot = ct(Xe, Ze, 286), ti = ct(Ge, Br, 30), E;
  }
  function Dc(m, E) {
    if (m[0] == 3 && !(m[1] & 3))
      return [Tt(E), 2];
    for (var _ = 0, k = 0, T = si(E || 1 << 18), S = 0, U = T.length >>> 0, K = 0, M = 0; (k & 1) == 0; ) {
      if (k = Ce(m, _), _ += 3, k >>> 1 == 0) {
        _ & 7 && (_ += 8 - (_ & 7));
        var W = m[_ >>> 3] | m[(_ >>> 3) + 1] << 8;
        if (_ += 32, W > 0)
          for (!E && U < S + W && (T = pt(T, S + W), U = T.length); W-- > 0; )
            T[S++] = m[_ >>> 3], _ += 8;
        continue;
      } else
        k >> 1 == 1 ? (K = 9, M = 5) : (_ = Cc(m, _), K = Ot, M = ti);
      for (; ; ) {
        !E && U < S + 32767 && (T = pt(T, S + 32767), U = T.length);
        var H = Je(m, _, K), q = k >>> 1 == 1 ? mt[H] : Ze[H];
        if (_ += q & 15, q >>>= 4, (q >>> 8 & 255) === 0)
          T[S++] = q;
        else {
          if (q == 256)
            break;
          q -= 257;
          var se = q < 8 ? 0 : q - 4 >> 2;
          se > 5 && (se = 0);
          var ue = S + j[q];
          se > 0 && (ue += Je(m, _, se), _ += se), H = Je(m, _, M), q = k >>> 1 == 1 ? va[H] : Br[H], _ += q & 15, q >>>= 4;
          var ee = q < 4 ? 0 : q - 2 >> 1, oe = re[q];
          for (ee > 0 && (oe += Je(m, _, ee), _ += ee), !E && U < ue && (T = pt(T, ue + 100), U = T.length); S < ue; )
            T[S] = T[S - oe], ++S;
        }
      }
    }
    return E ? [T, _ + 7 >>> 3] : [T.slice(0, S), _ + 7 >>> 3];
  }
  function ai(m, E) {
    var _ = m.slice(m.l || 0), k = Dc(_, E);
    return m.l += k[1], k[0];
  }
  function ni(m, E) {
    if (m)
      typeof console < "u" && console.error(E);
    else
      throw new Error(E);
  }
  function ii(m, E) {
    var _ = m;
    ur(_, 0);
    var k = [], T = [], S = {
      FileIndex: k,
      FullPaths: T
    };
    F(S, { root: E.root });
    for (var U = _.length - 4; (_[U] != 80 || _[U + 1] != 75 || _[U + 2] != 5 || _[U + 3] != 6) && U >= 0; )
      --U;
    _.l = U + 4, _.l += 4;
    var K = _.read_shift(2);
    _.l += 6;
    var M = _.read_shift(4);
    for (_.l = M, U = 0; U < K; ++U) {
      _.l += 20;
      var W = _.read_shift(4), H = _.read_shift(4), q = _.read_shift(2), se = _.read_shift(2), ue = _.read_shift(2);
      _.l += 8;
      var ee = _.read_shift(4), oe = f(_.slice(_.l + q, _.l + q + se));
      _.l += q + se + ue;
      var _e = _.l;
      _.l = ee + 4, Oc(_, W, H, S, oe), _.l = _e;
    }
    return S;
  }
  function Oc(m, E, _, k, T) {
    m.l += 2;
    var S = m.read_shift(2), U = m.read_shift(2), K = s(m);
    if (S & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var M = m.read_shift(4), W = m.read_shift(4), H = m.read_shift(4), q = m.read_shift(2), se = m.read_shift(2), ue = "", ee = 0; ee < q; ++ee)
      ue += String.fromCharCode(m[m.l++]);
    if (se) {
      var oe = f(m.slice(m.l, m.l + se));
      (oe[21589] || {}).mt && (K = oe[21589].mt), ((T || {})[21589] || {}).mt && (K = T[21589].mt);
    }
    m.l += se;
    var _e = m.slice(m.l, m.l + W);
    switch (U) {
      case 8:
        _e = P(m, H);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + U);
    }
    var Xe = !1;
    S & 8 && (M = m.read_shift(4), M == 134695760 && (M = m.read_shift(4), Xe = !0), W = m.read_shift(4), H = m.read_shift(4)), W != E && ni(Xe, "Bad compressed size: " + E + " != " + W), H != _ && ni(Xe, "Bad uncompressed size: " + _ + " != " + H), P0(k, ue, _e, { unsafe: !0, mt: K });
  }
  function Ic(m, E) {
    var _ = E || {}, k = [], T = [], S = G(1), U = _.compression ? 8 : 0, K = 0, M = 0, W = 0, H = 0, q = 0, se = m.FullPaths[0], ue = se, ee = m.FileIndex[0], oe = [], _e = 0;
    for (M = 1; M < m.FullPaths.length; ++M)
      if (ue = m.FullPaths[M].slice(se.length), ee = m.FileIndex[M], !(!ee.size || !ee.content || ue == "Sh33tJ5")) {
        var Xe = H, Ge = G(ue.length);
        for (W = 0; W < ue.length; ++W)
          Ge.write_shift(1, ue.charCodeAt(W) & 127);
        Ge = Ge.slice(0, Ge.l), oe[q] = ko.buf(ee.content, 0);
        var xr = ee.content;
        U == 8 && (xr = O(xr)), S = G(30), S.write_shift(4, 67324752), S.write_shift(2, 20), S.write_shift(2, K), S.write_shift(2, U), ee.mt ? i(S, ee.mt) : S.write_shift(4, 0), S.write_shift(-4, oe[q]), S.write_shift(4, xr.length), S.write_shift(4, ee.content.length), S.write_shift(2, Ge.length), S.write_shift(2, 0), H += S.length, k.push(S), H += Ge.length, k.push(Ge), H += xr.length, k.push(xr), S = G(46), S.write_shift(4, 33639248), S.write_shift(2, 0), S.write_shift(2, 20), S.write_shift(2, K), S.write_shift(2, U), S.write_shift(4, 0), S.write_shift(-4, oe[q]), S.write_shift(4, xr.length), S.write_shift(4, ee.content.length), S.write_shift(2, Ge.length), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(4, 0), S.write_shift(4, Xe), _e += S.l, T.push(S), _e += Ge.length, T.push(Ge), ++q;
      }
    return S = G(22), S.write_shift(4, 101010256), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(2, q), S.write_shift(2, q), S.write_shift(4, _e), S.write_shift(4, H), S.write_shift(2, 0), cr([cr(k), cr(T), S]);
  }
  var e0 = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Rc(m, E) {
    if (m.ctype)
      return m.ctype;
    var _ = m.name || "", k = _.match(/\.([^\.]+)$/);
    return k && e0[k[1]] || E && (k = (_ = E).match(/[\.\\]([^\.\\])+$/), k && e0[k[1]]) ? e0[k[1]] : "application/octet-stream";
  }
  function Nc(m) {
    for (var E = Ra(m), _ = [], k = 0; k < E.length; k += 76)
      _.push(E.slice(k, k + 76));
    return _.join(`\r
`) + `\r
`;
  }
  function bc(m) {
    var E = m.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(W) {
      var H = W.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (H.length == 1 ? "0" + H : H);
    });
    E = E.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), E.charAt(0) == `
` && (E = "=0D" + E.slice(1)), E = E.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var _ = [], k = E.split(`\r
`), T = 0; T < k.length; ++T) {
      var S = k[T];
      if (S.length == 0) {
        _.push("");
        continue;
      }
      for (var U = 0; U < S.length; ) {
        var K = 76, M = S.slice(U, U + K);
        M.charAt(K - 1) == "=" ? K-- : M.charAt(K - 2) == "=" ? K -= 2 : M.charAt(K - 3) == "=" && (K -= 3), M = S.slice(U, U + K), U += K, U < S.length && (M += "="), _.push(M);
      }
    }
    return _.join(`\r
`);
  }
  function Pc(m) {
    for (var E = [], _ = 0; _ < m.length; ++_) {
      for (var k = m[_]; _ <= m.length && k.charAt(k.length - 1) == "="; )
        k = k.slice(0, k.length - 1) + m[++_];
      E.push(k);
    }
    for (var T = 0; T < E.length; ++T)
      E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function(S) {
        return String.fromCharCode(parseInt(S.slice(1), 16));
      });
    return Ir(E.join(`\r
`));
  }
  function Lc(m, E, _) {
    for (var k = "", T = "", S = "", U, K = 0; K < 10; ++K) {
      var M = E[K];
      if (!M || M.match(/^\s*$/))
        break;
      var W = M.match(/^(.*?):\s*([^\s].*)$/);
      if (W)
        switch (W[1].toLowerCase()) {
          case "content-location":
            k = W[2].trim();
            break;
          case "content-type":
            S = W[2].trim();
            break;
          case "content-transfer-encoding":
            T = W[2].trim();
            break;
        }
    }
    switch (++K, T.toLowerCase()) {
      case "base64":
        U = Ir(br(E.slice(K).join("")));
        break;
      case "quoted-printable":
        U = Pc(E.slice(K));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + T);
    }
    var H = P0(m, k.slice(_.length), U, { unsafe: !0 });
    S && (H.ctype = S);
  }
  function Bc(m, E) {
    if (V(m.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var _ = E && E.root || "", k = (Te && Buffer.isBuffer(m) ? m.toString("binary") : V(m)).split(`\r
`), T = 0, S = "";
    for (T = 0; T < k.length; ++T)
      if (S = k[T], !!/^Content-Location:/i.test(S) && (S = S.slice(S.indexOf("file")), _ || (_ = S.slice(0, S.lastIndexOf("/") + 1)), S.slice(0, _.length) != _))
        for (; _.length > 0 && (_ = _.slice(0, _.length - 1), _ = _.slice(0, _.lastIndexOf("/") + 1), S.slice(0, _.length) != _); )
          ;
    var U = (k[1] || "").match(/boundary="(.*?)"/);
    if (!U)
      throw new Error("MAD cannot find boundary");
    var K = "--" + (U[1] || ""), M = [], W = [], H = {
      FileIndex: M,
      FullPaths: W
    };
    F(H);
    var q, se = 0;
    for (T = 0; T < k.length; ++T) {
      var ue = k[T];
      ue !== K && ue !== K + "--" || (se++ && Lc(H, k.slice(q, T), _), q = T);
    }
    return H;
  }
  function Mc(m, E) {
    var _ = E || {}, k = _.boundary || "SheetJS";
    k = "------=" + k;
    for (var T = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + k.slice(2) + '"',
      "",
      "",
      ""
    ], S = m.FullPaths[0], U = S, K = m.FileIndex[0], M = 1; M < m.FullPaths.length; ++M)
      if (U = m.FullPaths[M].slice(S.length), K = m.FileIndex[M], !(!K.size || !K.content || U == "Sh33tJ5")) {
        U = U.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(_e) {
          return "_x" + _e.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(_e) {
          return "_u" + _e.charCodeAt(0).toString(16) + "_";
        });
        for (var W = K.content, H = Te && Buffer.isBuffer(W) ? W.toString("binary") : V(W), q = 0, se = Math.min(1024, H.length), ue = 0, ee = 0; ee <= se; ++ee)
          (ue = H.charCodeAt(ee)) >= 32 && ue < 128 && ++q;
        var oe = q >= se * 4 / 5;
        T.push(k), T.push("Content-Location: " + (_.root || "file:///C:/SheetJS/") + U), T.push("Content-Transfer-Encoding: " + (oe ? "quoted-printable" : "base64")), T.push("Content-Type: " + Rc(K, U)), T.push(""), T.push(oe ? bc(H) : Nc(H));
      }
    return T.push(k + `--\r
`), T.join(`\r
`);
  }
  function Uc(m) {
    var E = {};
    return F(E, m), E;
  }
  function P0(m, E, _, k) {
    var T = k && k.unsafe;
    T || F(m);
    var S = !T && xe.find(m, E);
    if (!S) {
      var U = m.FullPaths[0];
      E.slice(0, U.length) == U ? U = E : (U.slice(-1) != "/" && (U += "/"), U = (U + E).replace("//", "/")), S = { name: n(E), type: 2 }, m.FileIndex.push(S), m.FullPaths.push(U), T || xe.utils.cfb_gc(m);
    }
    return S.content = _, S.size = _ ? _.length : 0, k && (k.CLSID && (S.clsid = k.CLSID), k.mt && (S.mt = k.mt), k.ct && (S.ct = k.ct)), S;
  }
  function Wc(m, E) {
    F(m);
    var _ = xe.find(m, E);
    if (_) {
      for (var k = 0; k < m.FileIndex.length; ++k)
        if (m.FileIndex[k] == _)
          return m.FileIndex.splice(k, 1), m.FullPaths.splice(k, 1), !0;
    }
    return !1;
  }
  function Hc(m, E, _) {
    F(m);
    var k = xe.find(m, E);
    if (k) {
      for (var T = 0; T < m.FileIndex.length; ++T)
        if (m.FileIndex[T] == k)
          return m.FileIndex[T].name = n(_), m.FullPaths[T] = _, !0;
    }
    return !1;
  }
  function Vc(m) {
    I(m, !0);
  }
  return t.find = X, t.read = N, t.parse = l, t.write = ve, t.writeFile = Pe, t.utils = {
    cfb_new: Uc,
    cfb_add: P0,
    cfb_del: Wc,
    cfb_mov: Hc,
    cfb_gc: Vc,
    ReadShift: Ta,
    CheckField: Xs,
    prep_blob: ur,
    bconcat: cr,
    use_zlib: C,
    _deflateRaw: Se,
    _inflateRaw: ai,
    consts: ce
  }, t;
}();
let Et;
function Wg(e) {
  Et = e;
}
function Eo(e) {
  return typeof e == "string" ? za(e) : Array.isArray(e) ? $c(e) : e;
}
function Ka(e, t, r) {
  if (typeof Et < "u" && Et.writeFileSync)
    return r ? Et.writeFileSync(e, t, r) : Et.writeFileSync(e, t);
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = za(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var a = r == "utf8" ? tt(t) : t;
  if (typeof IE_SaveFile < "u")
    return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([Eo(a)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(n, e);
    if (typeof saveAs < "u")
      return saveAs(n, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var i = URL.createObjectURL(n);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), chrome.downloads.download({ url: i, filename: e, saveAs: !0 });
      var s = document.createElement("a");
      if (s.download != null)
        return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), i;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var f = File(e);
      return f.open("w"), f.encoding = "binary", Array.isArray(t) && (t = At(t)), f.write(t), f.close(), t;
    } catch (c) {
      if (!c.message || !c.message.match(/onstruct/))
        throw c;
    }
  throw new Error("cannot save file " + e);
}
function To(e) {
  if (typeof Et < "u")
    return Et.readFileSync(e);
  if (typeof Deno < "u")
    return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var t = File(e);
      t.open("r"), t.encoding = "binary";
      var r = t.read();
      return t.close(), r;
    } catch (a) {
      if (!a.message || !a.message.match(/onstruct/))
        throw a;
    }
  throw new Error("Cannot access file " + e);
}
function Ye(e) {
  for (var t = Object.keys(e), r = [], a = 0; a < t.length; ++a)
    Object.prototype.hasOwnProperty.call(e, t[a]) && r.push(t[a]);
  return r;
}
function di(e, t) {
  for (var r = [], a = Ye(e), n = 0; n !== a.length; ++n)
    r[e[a[n]][t]] == null && (r[e[a[n]][t]] = a[n]);
  return r;
}
function y0(e) {
  for (var t = [], r = Ye(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] = r[a];
  return t;
}
function A0(e) {
  for (var t = [], r = Ye(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] = parseInt(r[a], 10);
  return t;
}
function So(e) {
  for (var t = [], r = Ye(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] == null && (t[e[r[a]]] = []), t[e[r[a]]].push(r[a]);
  return t;
}
var v0 = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function ir(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var a = /* @__PURE__ */ v0.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ v0.getTimezoneOffset()) * 6e4;
  return (r - a) / (24 * 60 * 60 * 1e3);
}
var Fs = /* @__PURE__ */ new Date(), Fo = /* @__PURE__ */ v0.getTime() + (/* @__PURE__ */ Fs.getTimezoneOffset() - /* @__PURE__ */ v0.getTimezoneOffset()) * 6e4, vi = /* @__PURE__ */ Fs.getTimezoneOffset();
function C0(e) {
  var t = new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + Fo), t.getTimezoneOffset() !== vi && t.setTime(t.getTime() + (t.getTimezoneOffset() - vi) * 6e4), t;
}
function yo(e) {
  var t = 0, r = 0, a = !1, n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!n)
    throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var i = 1; i != n.length; ++i)
    if (!!n[i]) {
      switch (r = 1, i > 3 && (a = !0), n[i].slice(n[i].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + n[i].slice(n[i].length - 1));
        case "D":
          r *= 24;
        case "H":
          r *= 60;
        case "M":
          if (a)
            r *= 60;
          else
            throw new Error("Unsupported ISO Duration Field: M");
      }
      t += r * parseInt(n[i], 10);
    }
  return t;
}
var pi = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), ys = /* @__PURE__ */ isNaN(/* @__PURE__ */ pi.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : pi, Ao = /* @__PURE__ */ ys.getFullYear() == 2017;
function Ve(e, t) {
  var r = new Date(e);
  if (Ao)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (ys.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var a = r.getFullYear();
    return e.indexOf("" + a) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], i = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i;
}
function Ut(e, t) {
  if (Te && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return tt(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return tt(xs(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return tt(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return tt(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "\u20AC": "\x80",
        "\u201A": "\x82",
        \u0192: "\x83",
        "\u201E": "\x84",
        "\u2026": "\x85",
        "\u2020": "\x86",
        "\u2021": "\x87",
        "\u02C6": "\x88",
        "\u2030": "\x89",
        \u0160: "\x8A",
        "\u2039": "\x8B",
        \u0152: "\x8C",
        \u017D: "\x8E",
        "\u2018": "\x91",
        "\u2019": "\x92",
        "\u201C": "\x93",
        "\u201D": "\x94",
        "\u2022": "\x95",
        "\u2013": "\x96",
        "\u2014": "\x97",
        "\u02DC": "\x98",
        "\u2122": "\x99",
        \u0161: "\x9A",
        "\u203A": "\x9B",
        \u0153: "\x9C",
        \u017E: "\x9E",
        \u0178: "\x9F"
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
        return r[i] || i;
      });
    } catch {
    }
  for (var a = [], n = 0; n != e.length; ++n)
    a.push(String.fromCharCode(e[n]));
  return a.join("");
}
function Me(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Me(e[r]));
  return t;
}
function $e(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function Yr(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(a)) || (a = a.replace(/[(](.*)[)]/, function(n, i) {
    return r = -r, i;
  }), !isNaN(t = Number(a))) ? t / r : t;
}
var Co = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function fa(e) {
  var t = new Date(e), r = new Date(NaN), a = t.getYear(), n = t.getMonth(), i = t.getDate();
  if (isNaN(i))
    return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), s.length > 3 && Co.indexOf(s) == -1)
      return r;
  } else if (s.match(/[a-z]/))
    return r;
  return a < 0 || a > 8099 ? r : (n > 0 || i > 1) && a != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
var Do = /* @__PURE__ */ function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, a, n) {
    if (e || typeof a == "string")
      return r.split(a);
    for (var i = r.split(a), s = [i[0]], f = 1; f < i.length; ++f)
      s.push(n), s.push(i[f]);
    return s;
  };
}();
function As(e) {
  return e ? e.content && e.type ? Ut(e.content, !0) : e.data ? ra(e.data) : e.asNodeBuffer && Te ? ra(e.asNodeBuffer().toString("binary")) : e.asBinary ? ra(e.asBinary()) : e._data && e._data.getContent ? ra(Ut(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Cs(e) {
  if (!e)
    return null;
  if (e.data)
    return u0(e.data);
  if (e.asNodeBuffer && Te)
    return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var t = e._data.getContent();
    return typeof t == "string" ? u0(t) : Array.prototype.slice.call(t);
  }
  return e.content && e.type ? e.content : null;
}
function Oo(e) {
  return e && e.name.slice(-4) === ".bin" ? Cs(e) : As(e);
}
function Vr(e, t) {
  for (var r = e.FullPaths || Ye(e.files), a = t.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < r.length; ++i) {
    var s = r[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s)
      return e.files ? e.files[r[i]] : e.FileIndex[i];
  }
  return null;
}
function vn(e, t) {
  var r = Vr(e, t);
  if (r == null)
    throw new Error("Cannot find file " + t + " in zip");
  return r;
}
function rr(e, t, r) {
  if (!r)
    return Oo(vn(e, t));
  if (!t)
    return null;
  try {
    return rr(e, t);
  } catch {
    return null;
  }
}
function Rr(e, t, r) {
  if (!r)
    return As(vn(e, t));
  if (!t)
    return null;
  try {
    return Rr(e, t);
  } catch {
    return null;
  }
}
function Ds(e, t, r) {
  if (!r)
    return Cs(vn(e, t));
  if (!t)
    return null;
  try {
    return Ds(e, t);
  } catch {
    return null;
  }
}
function mi(e) {
  for (var t = e.FullPaths || Ye(e.files), r = [], a = 0; a < t.length; ++a)
    t[a].slice(-1) != "/" && r.push(t[a].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function ke(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var a;
      return Te ? a = xt(r) : a = Kc(r), xe.utils.cfb_add(e, t, a);
    }
    xe.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function pn() {
  return xe.utils.cfb_new();
}
function Os(e, t) {
  switch (t.type) {
    case "base64":
      return xe.read(e, { type: "base64" });
    case "binary":
      return xe.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return xe.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Ea(e, t) {
  if (e.charAt(0) == "/")
    return e.slice(1);
  var r = t.split("/");
  t.slice(-1) != "/" && r.pop();
  for (var a = e.split("/"); a.length !== 0; ) {
    var n = a.shift();
    n === ".." ? r.pop() : n !== "." && r.push(n);
  }
  return r.join("/");
}
var Qe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Io = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, gi = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, Ro = /<[^>]*>/g, Er = /* @__PURE__ */ Qe.match(gi) ? gi : Ro, No = /<\w*:/, bo = /<(\/?)\w+:/;
function me(e, t, r) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n)
    ;
  if (t || (a[0] = e.slice(0, n)), n === e.length)
    return a;
  var s = e.match(Io), f = 0, c = "", o = 0, l = "", u = "", x = 1;
  if (s)
    for (o = 0; o != s.length; ++o) {
      for (u = s[o], i = 0; i != u.length && u.charCodeAt(i) !== 61; ++i)
        ;
      for (l = u.slice(0, i).trim(); u.charCodeAt(i + 1) == 32; )
        ++i;
      for (x = (n = u.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, c = u.slice(i + 1 + x, u.length - x), f = 0; f != l.length && l.charCodeAt(f) !== 58; ++f)
        ;
      if (f === l.length)
        l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), a[l] = c, r || (a[l.toLowerCase()] = c);
      else {
        var d = (f === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(f + 1);
        if (a[d] && l.slice(f - 3, f) == "ext")
          continue;
        a[d] = c, r || (a[d.toLowerCase()] = c);
      }
    }
  return a;
}
function it(e) {
  return e.replace(bo, "<$1");
}
var Is = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, mn = /* @__PURE__ */ y0(Is), Oe = /* @__PURE__ */ function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, t = /_x([\da-fA-F]{4})_/ig;
  return function r(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1)
      return n.replace(e, function(f, c) {
        return Is[f] || String.fromCharCode(parseInt(c, f.indexOf("x") > -1 ? 16 : 10)) || f;
      }).replace(t, function(f, c) {
        return String.fromCharCode(parseInt(c, 16));
      });
    var s = n.indexOf("]]>");
    return r(n.slice(0, i)) + n.slice(i + 9, s) + r(n.slice(s + 3));
  };
}(), gn = /[&<>'"]/g, Po = /[\u0000-\u0008\u000b-\u001f]/g;
function be(e) {
  var t = e + "";
  return t.replace(gn, function(r) {
    return mn[r];
  }).replace(Po, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function _i(e) {
  return be(e).replace(/ /g, "_x0020_");
}
var Rs = /[\u0000-\u001f]/g;
function _n(e) {
  var t = e + "";
  return t.replace(gn, function(r) {
    return mn[r];
  }).replace(/\n/g, "<br/>").replace(Rs, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Lo(e) {
  var t = e + "";
  return t.replace(gn, function(r) {
    return mn[r];
  }).replace(Rs, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var wi = /* @__PURE__ */ function() {
  var e = /&#(\d+);/g;
  function t(r, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, t);
  };
}();
function Bo(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function We(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function M0(e) {
  for (var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0; r < e.length; ) {
    if (a = e.charCodeAt(r++), a < 128) {
      t += String.fromCharCode(a);
      continue;
    }
    if (n = e.charCodeAt(r++), a > 191 && a < 224) {
      s = (a & 31) << 6, s |= n & 63, t += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(r++), a < 240) {
      t += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(r++), f = ((a & 7) << 18 | (n & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, t += String.fromCharCode(55296 + (f >>> 10 & 1023)), t += String.fromCharCode(56320 + (f & 1023));
  }
  return t;
}
function ki(e) {
  var t = Tt(2 * e.length), r, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n)
    n = 1, (f = e.charCodeAt(a)) < 128 ? r = f : f < 224 ? (r = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (r = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, r = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), r -= 65536, s = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), s !== 0 && (t[i++] = s & 255, t[i++] = s >>> 8, s = 0), t[i++] = r % 256, t[i++] = r >>> 8;
  return t.slice(0, i).toString("ucs2");
}
function Ei(e) {
  return xt(e, "binary").toString("utf8");
}
var r0 = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Le = Te && (/* @__PURE__ */ Ei(r0) == /* @__PURE__ */ M0(r0) && Ei || /* @__PURE__ */ ki(r0) == /* @__PURE__ */ M0(r0) && ki) || M0, tt = Te ? function(e) {
  return xt(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, a = 0, n = 0; r < e.length; )
    switch (a = e.charCodeAt(r++), !0) {
      case a < 128:
        t.push(String.fromCharCode(a));
        break;
      case a < 2048:
        t.push(String.fromCharCode(192 + (a >> 6))), t.push(String.fromCharCode(128 + (a & 63)));
        break;
      case (a >= 55296 && a < 57344):
        a -= 55296, n = e.charCodeAt(r++) - 56320 + (a << 10), t.push(String.fromCharCode(240 + (n >> 18 & 7))), t.push(String.fromCharCode(144 + (n >> 12 & 63))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (a >> 12))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (a & 63)));
    }
  return t.join("");
}, ba = /* @__PURE__ */ function() {
  var e = {};
  return function(r, a) {
    var n = r + "|" + (a || "");
    return e[n] ? e[n] : e[n] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", a || "");
  };
}(), Ns = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "\xB7"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var a = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), n = 0; n < e.length; ++n)
      a = a.replace(e[n][0], e[n][1]);
    return a;
  };
}(), Mo = /* @__PURE__ */ function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
}(), Uo = /<\/?(?:vt:)?variant>/g, Wo = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Ti(e, t) {
  var r = me(e), a = e.match(Mo(r.baseType)) || [], n = [];
  if (a.length != r.size) {
    if (t.WTF)
      throw new Error("unexpected vector length " + a.length + " != " + r.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(Uo, "").match(Wo);
    s && n.push({ v: Le(s[2]), t: s[1] });
  }), n;
}
var bs = /(^\s|\s$|\n)/;
function hr(e, t) {
  return "<" + e + (t.match(bs) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function Pa(e) {
  return Ye(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function ae(e, t, r) {
  return "<" + e + (r != null ? Pa(r) : "") + (t != null ? (t.match(bs) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function q0(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t)
      throw r;
  }
  return "";
}
function Ho(e, t) {
  switch (typeof e) {
    case "string":
      var r = ae("vt:lpwstr", be(e));
      return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return ae((e | 0) == e ? "vt:i4" : "vt:r8", be(String(e)));
    case "boolean":
      return ae("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date)
    return ae("vt:filetime", q0(e));
  throw new Error("Unable to serialize " + e);
}
function wn(e) {
  if (Te && Buffer.isBuffer(e))
    return e.toString("utf8");
  if (typeof e == "string")
    return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array)
    return Le(At(hn(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var La = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, nr = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, zt = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], Or = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Vo(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), a = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), n = e[t + 6] & 15, i = 5; i >= 0; --i)
    n = n * 256 + e[t + i];
  return a == 2047 ? n == 0 ? r * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), r * Math.pow(2, a - 52) * n);
}
function Xo(e, t, r) {
  var a = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -t : t;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(t) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256)
    e[r + f] = i & 255;
  e[r + 6] = (n & 15) << 4 | i & 15, e[r + 7] = n >> 4 | a;
}
var Si = function(e) {
  for (var t = [], r = 10240, a = 0; a < e[0].length; ++a)
    if (e[0][a])
      for (var n = 0, i = e[0][a].length; n < i; n += r)
        t.push.apply(t, e[0][a].slice(n, n + r));
  return t;
}, Fi = Te ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : xt(t);
  })) : Si(e);
} : Si, yi = function(e, t, r) {
  for (var a = [], n = t; n < r; n += 2)
    a.push(String.fromCharCode(lt(e, n)));
  return a.join("").replace(_r, "");
}, D0 = Te ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(_r, "") : yi(e, t, r);
} : yi, Ai = function(e, t, r) {
  for (var a = [], n = t; n < t + r; ++n)
    a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Ps = Te ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Ai(e, t, r);
} : Ai, Ci = function(e, t, r) {
  for (var a = [], n = t; n < r; n++)
    a.push(String.fromCharCode(ea(e, n)));
  return a.join("");
}, ua = Te ? function(t, r, a) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, a) : Ci(t, r, a);
} : Ci, Ls = function(e, t) {
  var r = fr(e, t);
  return r > 0 ? ua(e, t + 4, t + 4 + r - 1) : "";
}, kn = Ls, Bs = function(e, t) {
  var r = fr(e, t);
  return r > 0 ? ua(e, t + 4, t + 4 + r - 1) : "";
}, En = Bs, Ms = function(e, t) {
  var r = 2 * fr(e, t);
  return r > 0 ? ua(e, t + 4, t + 4 + r - 1) : "";
}, Tn = Ms, Us = function(t, r) {
  var a = fr(t, r);
  return a > 0 ? D0(t, r + 4, r + 4 + a) : "";
}, Sn = Us, Ws = function(e, t) {
  var r = fr(e, t);
  return r > 0 ? ua(e, t + 4, t + 4 + r) : "";
}, Fn = Ws, Hs = function(e, t) {
  return Vo(e, t);
}, p0 = Hs, yn = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
Te && (kn = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ls(t, r);
  var a = t.readUInt32LE(r);
  return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : "";
}, En = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Bs(t, r);
  var a = t.readUInt32LE(r);
  return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : "";
}, Tn = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ms(t, r);
  var a = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + a - 1);
}, Sn = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Us(t, r);
  var a = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + a);
}, Fn = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ws(t, r);
  var a = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + a);
}, p0 = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : Hs(t, r);
}, yn = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
function Vs() {
  D0 = function(e, t, r) {
    return De.utils.decode(1200, e.slice(t, r)).replace(_r, "");
  }, ua = function(e, t, r) {
    return De.utils.decode(65001, e.slice(t, r));
  }, kn = function(e, t) {
    var r = fr(e, t);
    return r > 0 ? De.utils.decode(Bt, e.slice(t + 4, t + 4 + r - 1)) : "";
  }, En = function(e, t) {
    var r = fr(e, t);
    return r > 0 ? De.utils.decode(Nr, e.slice(t + 4, t + 4 + r - 1)) : "";
  }, Tn = function(e, t) {
    var r = 2 * fr(e, t);
    return r > 0 ? De.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1)) : "";
  }, Sn = function(e, t) {
    var r = fr(e, t);
    return r > 0 ? De.utils.decode(1200, e.slice(t + 4, t + 4 + r)) : "";
  }, Fn = function(e, t) {
    var r = fr(e, t);
    return r > 0 ? De.utils.decode(65001, e.slice(t + 4, t + 4 + r)) : "";
  };
}
typeof De < "u" && Vs();
var ea = function(e, t) {
  return e[t];
}, lt = function(e, t) {
  return e[t + 1] * (1 << 8) + e[t];
}, Go = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, fr = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, Rt = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, zo = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function Ta(e, t) {
  var r = "", a, n, i = [], s, f, c, o;
  switch (t) {
    case "dbcs":
      if (o = this.l, Te && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (c = 0; c < e; ++c)
          r += String.fromCharCode(lt(this, o)), o += 2;
      e *= 2;
      break;
    case "utf8":
      r = ua(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = D0(this, this.l, this.l + e);
      break;
    case "wstr":
      if (typeof De < "u")
        r = De.utils.decode(Nr, this.slice(this.l, this.l + 2 * e));
      else
        return Ta.call(this, e, "dbcs");
      e = 2 * e;
      break;
    case "lpstr-ansi":
      r = kn(this, this.l), e = 4 + fr(this, this.l);
      break;
    case "lpstr-cp":
      r = En(this, this.l), e = 4 + fr(this, this.l);
      break;
    case "lpwstr":
      r = Tn(this, this.l), e = 4 + 2 * fr(this, this.l);
      break;
    case "lpp4":
      e = 4 + fr(this, this.l), r = Sn(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + fr(this, this.l), r = Fn(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = ea(this, this.l + e++)) !== 0; )
        i.push(wa(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = lt(this, this.l + e)) !== 0; )
        i.push(wa(s)), e += 2;
      e += 2, r = i.join("");
      break;
    case "dbcs-cont":
      for (r = "", o = this.l, c = 0; c < e; ++c) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = ea(this, o), this.l = o + 1, f = Ta.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(wa(lt(this, o))), o += 2;
      }
      r = i.join(""), e *= 2;
      break;
    case "cpstr":
      if (typeof De < "u") {
        r = De.utils.decode(Nr, this.slice(this.l, this.l + e));
        break;
      }
    case "sbcs-cont":
      for (r = "", o = this.l, c = 0; c != e; ++c) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = ea(this, o), this.l = o + 1, f = Ta.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(wa(ea(this, o))), o += 1;
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = ea(this, this.l), this.l++, a;
        case 2:
          return a = (t === "i" ? Go : lt)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return t === "i" || (this[this.l + 3] & 128) === 0 ? (a = (e > 0 ? Rt : zo)(this, this.l), this.l += 4, a) : (n = fr(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? n = p0(this, this.l) : n = p0([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          r = Ps(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var $o = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, Ko = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, jo = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function Yo(e, t, r) {
  var a = 0, n = 0;
  if (r === "dbcs") {
    for (n = 0; n != t.length; ++n)
      jo(this, t.charCodeAt(n), this.l + 2 * n);
    a = 2 * t.length;
  } else if (r === "sbcs") {
    if (typeof De < "u" && Bt == 874)
      for (n = 0; n != t.length; ++n) {
        var i = De.utils.encode(Bt, t.charAt(n));
        this[this.l + n] = i[0];
      }
    else
      for (t = t.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != t.length; ++n)
        this[this.l + n] = t.charCodeAt(n) & 255;
    a = t.length;
  } else if (r === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(t.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(t.length, e); ++n) {
      var f = t.charCodeAt(n);
      this[this.l++] = f & 255, this[this.l++] = f >> 8;
    }
    for (; this.l < s; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        a = 1, this[this.l] = t & 255;
        break;
      case 2:
        a = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        a = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        a = 4, $o(this, t, this.l);
        break;
      case 8:
        if (a = 8, r === "f") {
          Xo(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        a = 4, Ko(this, t, this.l);
        break;
    }
  return this.l += a, this;
}
function Xs(e, t) {
  var r = Ps(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function ur(e, t) {
  e.l = t, e.read_shift = Ta, e.chk = Xs, e.write_shift = Yo;
}
function kr(e, t) {
  e.l += t;
}
function G(e) {
  var t = Tt(e);
  return ur(t, 0), t;
}
function dt(e, t, r) {
  if (!!e) {
    var a, n, i;
    ur(e, e.l || 0);
    for (var s = e.length, f = 0, c = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var o = Va[f] || Va[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n)
        i += ((a = e.read_shift(1)) & 127) << 7 * n;
      c = e.l + i;
      var l = o.f && o.f(e, i, r);
      if (e.l = c, t(l, o, f))
        return;
    }
  }
}
function Cr() {
  var e = [], t = Te ? 256 : 2048, r = function(o) {
    var l = G(o);
    return ur(l, 0), l;
  }, a = r(t), n = function() {
    !a || (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a), a = null);
  }, i = function(o) {
    return a && o < a.length - a.l ? a : (n(), a = r(Math.max(o + 1, t)));
  }, s = function() {
    return n(), cr(e);
  }, f = function(o) {
    n(), a = o, a.l == null && (a.l = a.length), i(t);
  };
  return { next: i, push: f, end: s, _bufs: e };
}
function Y(e, t, r, a) {
  var n = +t, i;
  if (!isNaN(n)) {
    a || (a = Va[n].p || (r || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f)
      if (a >= 128)
        s.write_shift(1, (a & 127) + 128), a >>= 7;
      else {
        s.write_shift(1, a);
        break;
      }
    a > 0 && yn(r) && e.push(r);
  }
}
function Sa(e, t, r) {
  var a = Me(e);
  if (t.s ? (a.cRel && (a.c += t.s.c), a.rRel && (a.r += t.s.r)) : (a.cRel && (a.c += t.c), a.rRel && (a.r += t.r)), !r || r.biff < 12) {
    for (; a.c >= 256; )
      a.c -= 256;
    for (; a.r >= 65536; )
      a.r -= 65536;
  }
  return a;
}
function Di(e, t, r) {
  var a = Me(e);
  return a.s = Sa(a.s, t.s, r), a.e = Sa(a.e, t.s, r), a;
}
function Fa(e, t) {
  if (e.cRel && e.c < 0)
    for (e = Me(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Me(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = pe(e);
  return !e.cRel && e.cRel != null && (r = qo(r)), !e.rRel && e.rRel != null && (r = Jo(r)), r;
}
function U0(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + He(e.s.c) + ":" + (e.e.cRel ? "" : "$") + He(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Ke(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Ke(e.e.r) : Fa(e.s, t.biff) + ":" + Fa(e.e, t.biff);
}
function An(e) {
  return parseInt(Zo(e), 10) - 1;
}
function Ke(e) {
  return "" + (e + 1);
}
function Jo(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Zo(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function Cn(e) {
  for (var t = Qo(e), r = 0, a = 0; a !== t.length; ++a)
    r = 26 * r + t.charCodeAt(a) - 64;
  return r - 1;
}
function He(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function qo(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Qo(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function el(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function ze(e) {
  for (var t = 0, r = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? t = 10 * t + (n - 48) : n >= 65 && n <= 90 && (r = 26 * r + (n - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function pe(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function yr(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: ze(e), e: ze(e) } : { s: ze(e.slice(0, t)), e: ze(e.slice(t + 1)) };
}
function we(e, t) {
  return typeof t > "u" || typeof t == "number" ? we(e.s, e.e) : (typeof e != "string" && (e = pe(e)), typeof t != "string" && (t = pe(t)), e == t ? e : e + ":" + t);
}
function Ae(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, a = 0, n = 0, i = e.length;
  for (r = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    r = 26 * r + n;
  for (t.s.c = --r, r = 0; a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    r = 10 * r + n;
  if (t.s.r = --r, a === i || n != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++a, r = 0; a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    r = 26 * r + n;
  for (t.e.c = --r, r = 0; a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    r = 10 * r + n;
  return t.e.r = --r, t;
}
function Oi(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = Pr(e.z, r ? ir(t) : t);
    } catch {
    }
  try {
    return e.w = Pr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? ir(t) : t);
  } catch {
    return "" + t;
  }
}
function nt(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? vt[e.v] || e.v : t == null ? Oi(e, e.v) : Oi(e, t));
}
function Ct(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", a = {};
  return a[r] = e, { SheetNames: [r], Sheets: a };
}
function Gs(e, t, r) {
  var a = r || {}, n = e ? Array.isArray(e) : a.dense, i = e || (n ? [] : {}), s = 0, f = 0;
  if (i && a.origin != null) {
    if (typeof a.origin == "number")
      s = a.origin;
    else {
      var c = typeof a.origin == "string" ? ze(a.origin) : a.origin;
      s = c.r, f = c.c;
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var l = Ae(i["!ref"]);
    o.s.c = l.s.c, o.s.r = l.s.r, o.e.c = Math.max(o.e.c, l.e.c), o.e.r = Math.max(o.e.r, l.e.r), s == -1 && (o.e.r = s = l.e.r + 1);
  }
  for (var u = 0; u != t.length; ++u)
    if (!!t[u]) {
      if (!Array.isArray(t[u]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var x = 0; x != t[u].length; ++x)
        if (!(typeof t[u][x] > "u")) {
          var d = { v: t[u][x] }, v = s + u, h = f + x;
          if (o.s.r > v && (o.s.r = v), o.s.c > h && (o.s.c = h), o.e.r < v && (o.e.r = v), o.e.c < h && (o.e.c = h), t[u][x] && typeof t[u][x] == "object" && !Array.isArray(t[u][x]) && !(t[u][x] instanceof Date))
            d = t[u][x];
          else if (Array.isArray(d.v) && (d.f = t[u][x][1], d.v = d.v[0]), d.v === null)
            if (d.f)
              d.t = "n";
            else if (a.nullError)
              d.t = "e", d.v = 0;
            else if (a.sheetStubs)
              d.t = "z";
            else
              continue;
          else
            typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = a.dateNF || de[14], a.cellDates ? (d.t = "d", d.w = Pr(d.z, ir(d.v))) : (d.t = "n", d.v = ir(d.v), d.w = Pr(d.z, d.v))) : d.t = "s";
          if (n)
            i[v] || (i[v] = []), i[v][h] && i[v][h].z && (d.z = i[v][h].z), i[v][h] = d;
          else {
            var p = pe({ c: h, r: v });
            i[p] && i[p].z && (d.z = i[p].z), i[p] = d;
          }
        }
    }
  return o.s.c < 1e7 && (i["!ref"] = we(o)), i;
}
function ha(e, t) {
  return Gs(null, e, t);
}
function rl(e) {
  return e.read_shift(4, "i");
}
function Jr(e, t) {
  return t || (t = G(4)), t.write_shift(4, e), t;
}
function wr(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function or(e, t) {
  var r = !1;
  return t == null && (r = !0, t = G(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function tl(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function al(e, t) {
  return t || (t = G(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t;
}
function Dn(e, t) {
  var r = e.l, a = e.read_shift(1), n = wr(e), i = [], s = { t: n, h: n };
  if ((a & 1) !== 0) {
    for (var f = e.read_shift(4), c = 0; c != f; ++c)
      i.push(tl(e));
    s.r = i;
  } else
    s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, s;
}
function nl(e, t) {
  var r = !1;
  return t == null && (r = !0, t = G(15 + 4 * e.t.length)), t.write_shift(1, 0), or(e.t, t), r ? t.slice(0, t.l) : t;
}
var il = Dn;
function sl(e, t) {
  var r = !1;
  return t == null && (r = !0, t = G(23 + 4 * e.t.length)), t.write_shift(1, 1), or(e.t, t), t.write_shift(4, 1), al({ ich: 0, ifnt: 0 }, t), r ? t.slice(0, t.l) : t;
}
function $r(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function $t(e, t) {
  return t == null && (t = G(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function Kt(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function jt(e, t) {
  return t == null && (t = G(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var fl = wr, zs = or;
function On(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function m0(e, t) {
  var r = !1;
  return t == null && (r = !0, t = G(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var cl = wr, Q0 = On, In = m0;
function Rn(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, a = t[0] & 2;
  e.l += 4;
  var n = a === 0 ? p0([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Rt(t, 0) >> 2;
  return r ? n / 100 : n;
}
function $s(e, t) {
  t == null && (t = G(4));
  var r = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -(1 << 29) && n < 1 << 29 && (a = 1, r = 1), a)
    t.write_shift(-4, ((r ? n : e) << 2) + (r + 2));
  else
    throw new Error("unsupported RkNumber " + e);
}
function Ks(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function ol(e, t) {
  return t || (t = G(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var Yt = Ks, xa = ol;
function gr(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Wt(e, t) {
  return (t || G(8)).write_shift(8, e, "f");
}
function ll(e) {
  var t = {}, r = e.read_shift(1), a = r >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), c = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = n;
      var o = Nt[n];
      o && (t.rgb = Ma(o));
      break;
    case 2:
      t.rgb = Ma([s, f, c]);
      break;
    case 3:
      t.theme = n;
      break;
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t;
}
function g0(e, t) {
  if (t || (t = G(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var a = e.rgb || "FFFFFF";
    typeof a == "number" && (a = ("000000" + a.toString(16)).slice(-6)), t.write_shift(1, parseInt(a.slice(0, 2), 16)), t.write_shift(1, parseInt(a.slice(2, 4), 16)), t.write_shift(1, parseInt(a.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function ul(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function hl(e, t) {
  t || (t = G(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
function js(e, t) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, a = e.read_shift(4);
  switch (a) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (a > 400)
    throw new Error("Unsupported Clipboard: " + a.toString(16));
  return e.l -= 4, e.read_shift(0, t == 1 ? "lpstr" : "lpwstr");
}
function xl(e) {
  return js(e, 1);
}
function dl(e) {
  return js(e, 2);
}
var Nn = 2, Ar = 3, t0 = 11, Ii = 12, _0 = 19, a0 = 64, vl = 65, pl = 71, ml = 4108, gl = 4126, sr = 80, Ys = 81, _l = [sr, Ys], en = {
  1: { n: "CodePage", t: Nn },
  2: { n: "Category", t: sr },
  3: { n: "PresentationFormat", t: sr },
  4: { n: "ByteCount", t: Ar },
  5: { n: "LineCount", t: Ar },
  6: { n: "ParagraphCount", t: Ar },
  7: { n: "SlideCount", t: Ar },
  8: { n: "NoteCount", t: Ar },
  9: { n: "HiddenCount", t: Ar },
  10: { n: "MultimediaClipCount", t: Ar },
  11: { n: "ScaleCrop", t: t0 },
  12: { n: "HeadingPairs", t: ml },
  13: { n: "TitlesOfParts", t: gl },
  14: { n: "Manager", t: sr },
  15: { n: "Company", t: sr },
  16: { n: "LinksUpToDate", t: t0 },
  17: { n: "CharacterCount", t: Ar },
  19: { n: "SharedDoc", t: t0 },
  22: { n: "HyperlinksChanged", t: t0 },
  23: { n: "AppVersion", t: Ar, p: "version" },
  24: { n: "DigSig", t: vl },
  26: { n: "ContentType", t: sr },
  27: { n: "ContentStatus", t: sr },
  28: { n: "Language", t: sr },
  29: { n: "Version", t: sr },
  255: {},
  2147483648: { n: "Locale", t: _0 },
  2147483651: { n: "Behavior", t: _0 },
  1919054434: {}
}, rn = {
  1: { n: "CodePage", t: Nn },
  2: { n: "Title", t: sr },
  3: { n: "Subject", t: sr },
  4: { n: "Author", t: sr },
  5: { n: "Keywords", t: sr },
  6: { n: "Comments", t: sr },
  7: { n: "Template", t: sr },
  8: { n: "LastAuthor", t: sr },
  9: { n: "RevNumber", t: sr },
  10: { n: "EditTime", t: a0 },
  11: { n: "LastPrinted", t: a0 },
  12: { n: "CreatedDate", t: a0 },
  13: { n: "ModifiedDate", t: a0 },
  14: { n: "PageCount", t: Ar },
  15: { n: "WordCount", t: Ar },
  16: { n: "CharCount", t: Ar },
  17: { n: "Thumbnail", t: pl },
  18: { n: "Application", t: sr },
  19: { n: "DocSecurity", t: Ar },
  255: {},
  2147483648: { n: "Locale", t: _0 },
  2147483651: { n: "Behavior", t: _0 },
  1919054434: {}
}, Ri = {
  1: "US",
  2: "CA",
  3: "",
  7: "RU",
  20: "EG",
  30: "GR",
  31: "NL",
  32: "BE",
  33: "FR",
  34: "ES",
  36: "HU",
  39: "IT",
  41: "CH",
  43: "AT",
  44: "GB",
  45: "DK",
  46: "SE",
  47: "NO",
  48: "PL",
  49: "DE",
  52: "MX",
  55: "BR",
  61: "AU",
  64: "NZ",
  66: "TH",
  81: "JP",
  82: "KR",
  84: "VN",
  86: "CN",
  90: "TR",
  105: "JS",
  213: "DZ",
  216: "MA",
  218: "LY",
  351: "PT",
  354: "IS",
  358: "FI",
  420: "CZ",
  886: "TW",
  961: "LB",
  962: "JO",
  963: "SY",
  964: "IQ",
  965: "KW",
  966: "SA",
  971: "AE",
  972: "IL",
  974: "QA",
  981: "IR",
  65535: "US"
}, wl = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function kl(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var El = /* @__PURE__ */ kl([
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  16777215,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), Nt = /* @__PURE__ */ Me(El), vt = {
  0: "#NULL!",
  7: "#DIV/0!",
  15: "#VALUE!",
  23: "#REF!",
  29: "#NAME?",
  36: "#NUM!",
  42: "#N/A",
  43: "#GETTING_DATA",
  255: "#WTF?"
}, Js = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, tn = {
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  "application/vnd.ms-office.chartex+xml": "TODO",
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  "application/vnd.ms-excel.wsSortMap": "TODO",
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  "application/vnd.ms-excel.Survey+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  "image/png": "TODO",
  sheet: "js"
}, n0 = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function bn() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function Tl(e) {
  var t = bn();
  if (!e || !e.match)
    return t;
  var r = {};
  if ((e.match(Er) || []).forEach(function(a) {
    var n = me(a);
    switch (n[0].replace(No, "<")) {
      case "<?xml":
        break;
      case "<Types":
        t.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[n.Extension] = n.ContentType;
        break;
      case "<Override":
        t[tn[n.ContentType]] !== void 0 && t[tn[n.ContentType]].push(n.PartName);
        break;
    }
  }), t.xmlns !== nr.CT)
    throw new Error("Unknown Namespace: " + t.xmlns);
  return t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "", t.sst = t.strs.length > 0 ? t.strs[0] : "", t.style = t.styles.length > 0 ? t.styles[0] : "", t.defaults = r, delete t.calcchains, t;
}
function Zs(e, t) {
  var r = So(tn), a = [], n;
  a[a.length] = Qe, a[a.length] = ae("Types", null, {
    xmlns: nr.CT,
    "xmlns:xsd": nr.xsd,
    "xmlns:xsi": nr.xsi
  }), a = a.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(c) {
    return ae("Default", null, { Extension: c[0], ContentType: c[1] });
  }));
  var i = function(c) {
    e[c] && e[c].length > 0 && (n = e[c][0], a[a.length] = ae("Override", null, {
      PartName: (n[0] == "/" ? "" : "/") + n,
      ContentType: n0[c][t.bookType] || n0[c].xlsx
    }));
  }, s = function(c) {
    (e[c] || []).forEach(function(o) {
      a[a.length] = ae("Override", null, {
        PartName: (o[0] == "/" ? "" : "/") + o,
        ContentType: n0[c][t.bookType] || n0[c].xlsx
      });
    });
  }, f = function(c) {
    (e[c] || []).forEach(function(o) {
      a[a.length] = ae("Override", null, {
        PartName: (o[0] == "/" ? "" : "/") + o,
        ContentType: r[c][0]
      });
    });
  };
  return i("workbooks"), s("sheets"), s("charts"), f("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(f), f("vba"), f("comments"), f("threadedcomments"), f("drawings"), s("metadata"), f("people"), a.length > 2 && (a[a.length] = "</Types>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var Fe = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Ba(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function ya(e, t) {
  var r = { "!id": {} };
  if (!e)
    return r;
  t.charAt(0) !== "/" && (t = "/" + t);
  var a = {};
  return (e.match(Er) || []).forEach(function(n) {
    var i = me(n);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = i.Target, s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var f = i.TargetMode === "External" ? i.Target : Ea(i.Target, t);
      r[f] = s, a[i.Id] = s;
    }
  }), r["!id"] = a, r;
}
function na(e) {
  var t = [Qe, ae("Relationships", null, {
    xmlns: nr.RELS
  })];
  return Ye(e["!id"]).forEach(function(r) {
    t[t.length] = ae("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Ne(e, t, r, a, n, i) {
  if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
      ;
  if (e["!idx"] = t + 1, n.Id = "rId" + t, n.Type = a, n.Target = r, i ? n.TargetMode = i : [Fe.HLINK, Fe.XPATH, Fe.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id])
    throw new Error("Cannot rewrite rId " + t);
  return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, t;
}
var Sl = "application/vnd.oasis.opendocument.spreadsheet";
function Fl(e, t) {
  for (var r = wn(e), a, n; a = La.exec(r); )
    switch (a[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (n = me(a[0], !1), n.path == "/" && n.type !== Sl)
          throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (t && t.WTF)
          throw a;
    }
}
function yl(e) {
  var t = [Qe];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function Ni(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function Al(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function Cl(e) {
  var t = [Qe];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(Ni(e[r][0], e[r][1])), t.push(Al("", e[r][0]));
  return t.push(Ni("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function qs() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Ia.version + "</meta:generator></office:meta></office:document-meta>";
}
var zr = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
], Dl = /* @__PURE__ */ function() {
  for (var e = new Array(zr.length), t = 0; t < zr.length; ++t) {
    var r = zr[t], a = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[t] = new RegExp("<" + a + "[^>]*>([\\s\\S]*?)</" + a + ">");
  }
  return e;
}();
function Qs(e) {
  var t = {};
  e = Le(e);
  for (var r = 0; r < zr.length; ++r) {
    var a = zr[r], n = e.match(Dl[r]);
    n != null && n.length > 0 && (t[a[1]] = Oe(n[1])), a[2] === "date" && t[a[1]] && (t[a[1]] = Ve(t[a[1]]));
  }
  return t;
}
function W0(e, t, r, a, n) {
  n[e] != null || t == null || t === "" || (n[e] = t, t = be(t), a[a.length] = r ? ae(e, t, r) : hr(e, t));
}
function ef(e, t) {
  var r = t || {}, a = [Qe, ae("cp:coreProperties", null, {
    "xmlns:cp": nr.CORE_PROPS,
    "xmlns:dc": nr.dc,
    "xmlns:dcterms": nr.dcterms,
    "xmlns:dcmitype": nr.dcmitype,
    "xmlns:xsi": nr.xsi
  })], n = {};
  if (!e && !r.Props)
    return a.join("");
  e && (e.CreatedDate != null && W0("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : q0(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && W0("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : q0(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != zr.length; ++i) {
    var s = zr[i], f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0 ? f = "1" : f === !1 ? f = "0" : typeof f == "number" && (f = String(f)), f != null && W0(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var bt = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], rf = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function tf(e, t, r, a) {
  var n = [];
  if (typeof e == "string")
    n = Ti(e, a);
  else
    for (var i = 0; i < e.length; ++i)
      n = n.concat(e[i].map(function(l) {
        return { v: l };
      }));
  var s = typeof t == "string" ? Ti(t, a).map(function(l) {
    return l.v;
  }) : t, f = 0, c = 0;
  if (s.length > 0)
    for (var o = 0; o !== n.length; o += 2) {
      switch (c = +n[o + 1].v, n[o].v) {
        case "Worksheets":
        case "\u5DE5\u4F5C\u8868":
        case "\u041B\u0438\u0441\u0442\u044B":
        case "\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0639\u0645\u0644":
        case "\u30EF\u30FC\u30AF\u30B7\u30FC\u30C8":
        case "\u05D2\u05DC\u05D9\u05D5\u05E0\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4":
        case "Arbeitsbl\xE4tter":
        case "\xC7al\u0131\u015Fma Sayfalar\u0131":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de c\xE1lculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de c\xE1lculo":
        case "Werkbladen":
          r.Worksheets = c, r.SheetNames = s.slice(f, f + c);
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "\u540D\u524D\u4ED8\u304D\u4E00\u89A7":
        case "Benannte Bereiche":
        case "Navngivne omr\xE5der":
          r.NamedRanges = c, r.DefinedNames = s.slice(f, f + c);
          break;
        case "Charts":
        case "Diagramme":
          r.Chartsheets = c, r.ChartNames = s.slice(f, f + c);
          break;
      }
      f += c;
    }
}
function Ol(e, t, r) {
  var a = {};
  return t || (t = {}), e = Le(e), bt.forEach(function(n) {
    var i = (e.match(ba(n[0])) || [])[1];
    switch (n[2]) {
      case "string":
        i && (t[n[1]] = Oe(i));
        break;
      case "bool":
        t[n[1]] = i === "true";
        break;
      case "raw":
        var s = e.match(new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"));
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && tf(a.HeadingPairs, a.TitlesOfParts, t, r), t;
}
function af(e) {
  var t = [], r = ae;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = Qe, t[t.length] = ae("Properties", null, {
    xmlns: nr.EXT_PROPS,
    "xmlns:vt": nr.vt
  }), bt.forEach(function(a) {
    if (e[a[1]] !== void 0) {
      var n;
      switch (a[2]) {
        case "string":
          n = be(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (t[t.length] = r(a[0], n));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(a) {
    return "<vt:lpstr>" + be(a) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var Il = /<[^>]+>[^<]*/g;
function Rl(e, t) {
  var r = {}, a = "", n = e.match(Il);
  if (n)
    for (var i = 0; i != n.length; ++i) {
      var s = n[i], f = me(s);
      switch (f[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          a = Oe(f.name);
          break;
        case "</property>":
          a = null;
          break;
        default:
          if (s.indexOf("<vt:") === 0) {
            var c = s.split(">"), o = c[0].slice(4), l = c[1];
            switch (o) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                r[a] = Oe(l);
                break;
              case "bool":
                r[a] = We(l);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                r[a] = parseInt(l, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                r[a] = parseFloat(l);
                break;
              case "filetime":
              case "date":
                r[a] = Ve(l);
                break;
              case "cy":
              case "error":
                r[a] = Oe(l);
                break;
              default:
                if (o.slice(-1) == "/")
                  break;
                t.WTF && typeof console < "u" && console.warn("Unexpected", s, o, c);
            }
          } else if (s.slice(0, 2) !== "</") {
            if (t.WTF)
              throw new Error(s);
          }
      }
    }
  return r;
}
function nf(e) {
  var t = [Qe, ae("Properties", null, {
    xmlns: nr.CUST_PROPS,
    "xmlns:vt": nr.vt
  })];
  if (!e)
    return t.join("");
  var r = 1;
  return Ye(e).forEach(function(n) {
    ++r, t[t.length] = ae("property", Ho(e[n], !0), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: be(n)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var an = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  Category: "Category",
  Manager: "Manager",
  Company: "Company",
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  Identifier: "Identifier",
  Language: "Language"
}, H0;
function Nl(e, t, r) {
  H0 || (H0 = y0(an)), t = H0[t] || t, e[t] = r;
}
function bl(e, t) {
  var r = [];
  return Ye(an).map(function(a) {
    for (var n = 0; n < zr.length; ++n)
      if (zr[n][1] == a)
        return zr[n];
    for (n = 0; n < bt.length; ++n)
      if (bt[n][1] == a)
        return bt[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = t && t.Props && t.Props[a[1]] != null ? t.Props[a[1]] : e[a[1]];
      switch (a[2]) {
        case "date":
          n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof n == "number" ? n = String(n) : n === !0 || n === !1 ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), r.push(hr(an[a[1]] || a[1], n));
    }
  }), ae("DocumentProperties", r.join(""), { xmlns: Or.o });
}
function Pl(e, t) {
  var r = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && Ye(e).forEach(function(i) {
    if (!!Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < zr.length; ++s)
        if (i == zr[s][1])
          return;
      for (s = 0; s < bt.length; ++s)
        if (i == bt[s][1])
          return;
      for (s = 0; s < r.length; ++s)
        if (i == r[s])
          return;
      var f = e[i], c = "string";
      typeof f == "number" ? (c = "float", f = String(f)) : f === !0 || f === !1 ? (c = "boolean", f = f ? "1" : "0") : f = String(f), n.push(ae(_i(i), f, { "dt:dt": c }));
    }
  }), t && Ye(t).forEach(function(i) {
    if (!!Object.prototype.hasOwnProperty.call(t, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = t[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === !0 || s === !1 ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(ae(_i(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Or.o + '">' + n.join("") + "</" + a + ">";
}
function Pn(e) {
  var t = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + t / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Ll(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, a = r % Math.pow(2, 32), n = (r - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = G(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function sf(e, t, r) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (r)
    for (; e.l - a & 3; )
      ++e.l;
  return n;
}
function ff(e, t, r) {
  var a = e.read_shift(0, "lpwstr");
  return r && (e.l += 4 - (a.length + 1 & 3) & 3), a;
}
function cf(e, t, r) {
  return t === 31 ? ff(e) : sf(e, t, r);
}
function nn(e, t, r) {
  return cf(e, t, r === !1 ? 0 : 4);
}
function Bl(e, t) {
  if (!t)
    throw new Error("VtUnalignedString must have positive length");
  return cf(e, t, 0);
}
function Ml(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a != t; ++a) {
    var n = e.l;
    r[a] = e.read_shift(0, "lpwstr").replace(_r, ""), e.l - n & 2 && (e.l += 2);
  }
  return r;
}
function Ul(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a != t; ++a)
    r[a] = e.read_shift(0, "lpstr-cp").replace(_r, "");
  return r;
}
function Wl(e) {
  var t = e.l, r = w0(e, Ys);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - t & 2 && (e.l += 2);
  var a = w0(e, Ar);
  return [r, a];
}
function Hl(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a < t / 2; ++a)
    r.push(Wl(e));
  return r;
}
function bi(e, t) {
  for (var r = e.read_shift(4), a = {}, n = 0; n != r; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, t === 1200 ? "utf16le" : "utf8").replace(_r, "").replace(ka, "!"), t === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 2 + 1 << 2), a;
}
function of(e) {
  var t = e.read_shift(4), r = e.slice(e.l, e.l + t);
  return e.l += t, (t & 3) > 0 && (e.l += 4 - (t & 3) & 3), r;
}
function Vl(e) {
  var t = {};
  return t.Size = e.read_shift(4), e.l += t.Size + 3 - (t.Size - 1) % 4, t;
}
function w0(e, t, r) {
  var a = e.read_shift(2), n, i = r || {};
  if (e.l += 2, t !== Ii && a !== t && _l.indexOf(t) === -1 && !((t & 65534) == 4126 && (a & 65534) == 4126))
    throw new Error("Expected type " + t + " saw " + a);
  switch (t === Ii ? a : t) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      return sf(e, a, 4).replace(_r, "");
    case 31:
      return ff(e);
    case 64:
      return Pn(e);
    case 65:
      return of(e);
    case 71:
      return Vl(e);
    case 80:
      return nn(e, a, !i.raw).replace(_r, "");
    case 81:
      return Bl(e, a).replace(_r, "");
    case 4108:
      return Hl(e);
    case 4126:
    case 4127:
      return a == 4127 ? Ml(e) : Ul(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + t + " " + a);
  }
}
function Pi(e, t) {
  var r = G(4), a = G(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      a.write_shift(-4, t);
      break;
    case 5:
      a = G(8), a.write_shift(8, t, "f");
      break;
    case 11:
      a.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      a = Ll(t);
      break;
    case 31:
    case 80:
      for (a = G(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), a.write_shift(4, t.length + 1), a.write_shift(0, t, "dbcs"); a.l != a.length; )
        a.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return cr([r, a]);
}
function Li(e, t) {
  var r = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, c = -1, o = {};
  for (s = 0; s != n; ++s) {
    var l = e.read_shift(4), u = e.read_shift(4);
    i[s] = [l, u + r];
  }
  i.sort(function(y, g) {
    return y[1] - g[1];
  });
  var x = {};
  for (s = 0; s != n; ++s) {
    if (e.l !== i[s][1]) {
      var d = !0;
      if (s > 0 && t)
        switch (t[i[s - 1][0]].t) {
          case 2:
            e.l + 2 === i[s][1] && (e.l += 2, d = !1);
            break;
          case 80:
            e.l <= i[s][1] && (e.l = i[s][1], d = !1);
            break;
          case 4108:
            e.l <= i[s][1] && (e.l = i[s][1], d = !1);
            break;
        }
      if ((!t || s == 0) && e.l <= i[s][1] && (d = !1, e.l = i[s][1]), d)
        throw new Error("Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s);
    }
    if (t) {
      var v = t[i[s][0]];
      if (x[v.n] = w0(e, v.t, { raw: !0 }), v.p === "version" && (x[v.n] = String(x[v.n] >> 16) + "." + ("0000" + String(x[v.n] & 65535)).slice(-4)), v.n == "CodePage")
        switch (x[v.n]) {
          case 0:
            x[v.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            Gr(f = x[v.n] >>> 0 & 65535);
            break;
          default:
            throw new Error("Unsupported CodePage: " + x[v.n]);
        }
    } else if (i[s][0] === 1) {
      if (f = x.CodePage = w0(e, Nn), Gr(f), c !== -1) {
        var h = e.l;
        e.l = i[c][1], o = bi(e, f), e.l = h;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        c = s, e.l = i[s + 1][1];
        continue;
      }
      o = bi(e, f);
    } else {
      var p = o[i[s][0]], w;
      switch (e[e.l]) {
        case 65:
          e.l += 4, w = of(e);
          break;
        case 30:
          e.l += 4, w = nn(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, w = nn(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, w = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, w = e.read_shift(4);
          break;
        case 5:
          e.l += 4, w = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, w = qe(e, 4);
          break;
        case 64:
          e.l += 4, w = Ve(Pn(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      x[p] = w;
    }
  }
  return e.l = r + a, x;
}
var lf = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function Xl(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date)
        return 64;
      break;
  }
  return -1;
}
function Bi(e, t, r) {
  var a = G(8), n = [], i = [], s = 8, f = 0, c = G(8), o = G(8);
  if (c.write_shift(4, 2), c.write_shift(4, 1200), o.write_shift(4, 1), i.push(c), n.push(o), s += 8 + c.length, !t) {
    o = G(8), o.write_shift(4, 0), n.unshift(o);
    var l = [G(4)];
    for (l[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var u = e[f][0];
      for (c = G(4 + 4 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)), c.write_shift(4, f + 2), c.write_shift(4, u.length + 1), c.write_shift(0, u, "dbcs"); c.l != c.length; )
        c.write_shift(1, 0);
      l.push(c);
    }
    c = cr(l), i.unshift(c), s += 8 + c.length;
  }
  for (f = 0; f < e.length; ++f)
    if (!(t && !t[e[f][0]]) && !(lf.indexOf(e[f][0]) > -1 || rf.indexOf(e[f][0]) > -1) && e[f][1] != null) {
      var x = e[f][1], d = 0;
      if (t) {
        d = +t[e[f][0]];
        var v = r[d];
        if (v.p == "version" && typeof x == "string") {
          var h = x.split(".");
          x = (+h[0] << 16) + (+h[1] || 0);
        }
        c = Pi(v.t, x);
      } else {
        var p = Xl(x);
        p == -1 && (p = 31, x = String(x)), c = Pi(p, x);
      }
      i.push(c), o = G(8), o.write_shift(4, t ? d : 2 + f), n.push(o), s += 8 + c.length;
    }
  var w = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f)
    n[f].write_shift(4, w), w += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), cr([a].concat(n).concat(i));
}
function Mi(e, t, r) {
  var a = e.content;
  if (!a)
    return {};
  ur(a, 0);
  var n, i, s, f, c = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var o = a.read_shift(4), l = a.read_shift(16);
  if (l !== xe.utils.consts.HEADER_CLSID && l !== r)
    throw new Error("Bad PropertySet CLSID " + l);
  if (n = a.read_shift(4), n !== 1 && n !== 2)
    throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l)
    throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), c = a.read_shift(4));
  var u = Li(a, t), x = { SystemIdentifier: o };
  for (var d in u)
    x[d] = u[d];
  if (x.FMTID = i, n === 1)
    return x;
  if (c - a.l == 2 && (a.l += 2), a.l !== c)
    throw new Error("Length mismatch 2: " + a.l + " !== " + c);
  var v;
  try {
    v = Li(a, null);
  } catch {
  }
  for (d in v)
    x[d] = v[d];
  return x.FMTID = [i, s], x;
}
function Ui(e, t, r, a, n, i) {
  var s = G(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, xe.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, n ? 68 : 48);
  var c = Bi(e, r, a);
  if (f.push(c), n) {
    var o = Bi(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + c.length), f.push(o);
  }
  return cr(f);
}
function gt(e, t) {
  return e.read_shift(t), null;
}
function Gl(e, t) {
  t || (t = G(e));
  for (var r = 0; r < e; ++r)
    t.write_shift(1, 0);
  return t;
}
function zl(e, t, r) {
  for (var a = [], n = e.l + t; e.l < n; )
    a.push(r(e, n - e.l));
  if (n !== e.l)
    throw new Error("Slurp error");
  return a;
}
function qe(e, t) {
  return e.read_shift(t) === 1;
}
function Fr(e, t) {
  return t || (t = G(2)), t.write_shift(2, +!!e), t;
}
function tr(e) {
  return e.read_shift(2, "u");
}
function Xr(e, t) {
  return t || (t = G(2)), t.write_shift(2, e), t;
}
function uf(e, t) {
  return zl(e, t, tr);
}
function $l(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? t : t === 1;
}
function hf(e, t, r) {
  return r || (r = G(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function ja(e, t, r) {
  var a = e.read_shift(r && r.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = Nr;
  if (r && r.biff >= 8 && (Nr = 1200), !r || r.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else
    r.biff == 12 && (n = "wstr");
  r.biff >= 2 && r.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return Nr = i, f;
}
function Kl(e) {
  var t = Nr;
  Nr = 1200;
  var r = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, c, o = {};
  i && (f = e.read_shift(2)), n && (c = e.read_shift(4));
  var l = s == 2 ? "dbcs-cont" : "sbcs-cont", u = r === 0 ? "" : e.read_shift(r, l);
  return i && (e.l += 4 * f), n && (e.l += c), o.t = u, i || (o.raw = "<t>" + o.t + "</t>", o.r = o.t), Nr = t, o;
}
function jl(e) {
  var t = e.t || "", r = G(3 + 0);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var a = G(2 * t.length);
  a.write_shift(2 * t.length, t, "utf16le");
  var n = [r, a];
  return cr(n);
}
function Ht(e, t, r) {
  var a;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(t, "sbcs-cont") : a = e.read_shift(t, "dbcs-cont"), a;
}
function Ya(e, t, r) {
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : Ht(e, a, r);
}
function Jt(e, t, r) {
  if (r.biff > 5)
    return Ya(e, t, r);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function xf(e, t, r) {
  return r || (r = G(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function Yl(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [t, r];
}
function Jl(e) {
  var t = e.read_shift(4), r = e.l, a = !1;
  t > 24 && (e.l += t - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = !0), e.l = r);
  var n = e.read_shift((a ? t - 24 : t) >> 1, "utf16le").replace(_r, "");
  return a && (e.l += 24), n;
}
function Zl(e) {
  for (var t = e.read_shift(2), r = ""; t-- > 0; )
    r += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005)
    throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0)
    return r + a.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3)
    throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(_r, "");
  return r + s;
}
function ql(e, t) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return Jl(e);
    case "0303000000000000c000000000000046":
      return Zl(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function i0(e) {
  var t = e.read_shift(4), r = t > 0 ? e.read_shift(t, "utf16le").replace(_r, "") : "";
  return r;
}
function Wi(e, t) {
  t || (t = G(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function Ql(e, t) {
  var r = e.l + t, a = e.read_shift(4);
  if (a !== 2)
    throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, c, o = "", l, u;
  n & 16 && (i = i0(e, r - e.l)), n & 128 && (s = i0(e, r - e.l)), (n & 257) === 257 && (f = i0(e, r - e.l)), (n & 257) === 1 && (c = ql(e, r - e.l)), n & 8 && (o = i0(e, r - e.l)), n & 32 && (l = e.read_shift(16)), n & 64 && (u = Pn(e)), e.l = r;
  var x = s || f || c || "";
  x && o && (x += "#" + o), x || (x = "#" + o), n & 2 && x.charAt(0) == "/" && x.charAt(1) != "/" && (x = "file://" + x);
  var d = { Target: x };
  return l && (d.guid = l), u && (d.time = u), i && (d.Tooltip = i), d;
}
function eu(e) {
  var t = G(512), r = 0, a = e.Target;
  a.slice(0, 7) == "file://" && (a = a.slice(7));
  var n = a.indexOf("#"), i = n > -1 ? 31 : 23;
  switch (a.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r)
    t.write_shift(4, s[r]);
  if (i == 28)
    a = a.slice(1), Wi(a, t);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r)
      t.write_shift(2, f.charCodeAt(r));
    t.write_shift(2, 0), i & 8 && Wi(n > -1 ? a.slice(n + 1) : "", t);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    for (var c = 0; a.slice(c * 3, c * 3 + 3) == "../" || a.slice(c * 3, c * 3 + 3) == "..\\"; )
      ++c;
    for (t.write_shift(2, c), t.write_shift(4, a.length - 3 * c + 1), r = 0; r < a.length - 3 * c; ++r)
      t.write_shift(1, a.charCodeAt(r + 3 * c) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function df(e) {
  var t = e.read_shift(1), r = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [t, r, a, n];
}
function vf(e, t) {
  var r = df(e);
  return r[3] = 0, r;
}
function st(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2);
  return { r: t, c: r, ixfe: a };
}
function Vt(e, t, r, a) {
  return a || (a = G(6)), a.write_shift(2, e), a.write_shift(2, t), a.write_shift(2, r || 0), a;
}
function ru(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: t, flags: r };
}
function tu(e, t, r) {
  return t === 0 ? "" : Jt(e, t, r);
}
function au(e, t, r) {
  var a = r.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function pf(e) {
  var t = e.read_shift(2), r = Rn(e);
  return [t, r];
}
function nu(e, t, r) {
  e.l += 4, t -= 4;
  var a = e.l + t, n = ja(e, t, r), i = e.read_shift(2);
  if (a -= e.l, i !== a)
    throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function O0(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r: t }, e: { c: n, r } };
}
function mf(e, t) {
  return t || (t = G(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function gf(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r: t }, e: { c: n, r } };
}
var iu = gf;
function _f(e) {
  e.l += 4;
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function su(e) {
  var t = {};
  return e.l += 4, e.l += 16, t.fSharedNote = e.read_shift(2), e.l += 4, t;
}
function fu(e) {
  var t = {};
  return e.l += 4, e.cf = e.read_shift(2), t;
}
function dr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var cu = {
  0: dr,
  4: dr,
  5: dr,
  6: dr,
  7: fu,
  8: dr,
  9: dr,
  10: dr,
  11: dr,
  12: dr,
  13: su,
  14: dr,
  15: dr,
  16: dr,
  17: dr,
  18: dr,
  19: dr,
  20: dr,
  21: _f
};
function ou(e, t) {
  for (var r = e.l + t, a = []; e.l < r; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a.push(cu[n](e, r - e.l));
    } catch {
      return e.l = r, a;
    }
  }
  return e.l != r && (e.l = r), a;
}
function s0(e, t) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), t -= 2, t >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (t > 6)
        throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(t), r;
}
function Ln(e, t, r) {
  var a = 1536, n = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      a = 1280, n = 8;
      break;
    case "biff4":
      a = 4, n = 6;
      break;
    case "biff3":
      a = 3, n = 6;
      break;
    case "biff2":
      a = 2, n = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = G(n);
  return i.write_shift(2, a), i.write_shift(2, t), n > 4 && i.write_shift(2, 29282), n > 6 && i.write_shift(2, 1997), n > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function lu(e, t) {
  return t === 0 || e.read_shift(2), 1200;
}
function uu(e, t, r) {
  if (r.enc)
    return e.l += t, "";
  var a = e.l, n = Jt(e, 0, r);
  return e.read_shift(t + a - e.l), n;
}
function hu(e, t) {
  var r = !t || t.biff == 8, a = G(r ? 112 : 54);
  for (a.write_shift(t.biff == 8 ? 2 : 1, 7), r && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (r ? 0 : 536870912)); a.l < a.length; )
    a.write_shift(1, r ? 0 : 32);
  return a;
}
function xu(e, t, r) {
  var a = r && r.biff == 8 || t == 2 ? e.read_shift(2) : (e.l += t, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function du(e, t, r) {
  var a = e.read_shift(4), n = e.read_shift(1) & 3, i = e.read_shift(1);
  switch (i) {
    case 0:
      i = "Worksheet";
      break;
    case 1:
      i = "Macrosheet";
      break;
    case 2:
      i = "Chartsheet";
      break;
    case 6:
      i = "VBAModule";
      break;
  }
  var s = ja(e, 0, r);
  return s.length === 0 && (s = "Sheet1"), { pos: a, hs: n, dt: i, name: s };
}
function vu(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, a = G(8 + r * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), t.biff >= 8 && a.write_shift(1, 1), a.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function pu(e, t) {
  for (var r = e.l + t, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < r; ++s)
    i.push(Kl(e));
  return i.Count = a, i.Unique = n, i;
}
function mu(e, t) {
  var r = G(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n)
    a[n] = jl(e[n]);
  var i = cr([r].concat(a));
  return i.parts = [r.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function gu(e, t) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += t - 2, r;
}
function _u(e) {
  var t = {};
  t.r = e.read_shift(2), t.c = e.read_shift(2), t.cnt = e.read_shift(2) - t.c;
  var r = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (t.level = a & 7), a & 32 && (t.hidden = !0), a & 64 && (t.hpt = r / 20), t;
}
function wu(e) {
  var t = ru(e);
  if (t.type != 2211)
    throw new Error("Invalid Future Record " + t.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function ku(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Hi(e, t, r) {
  var a = 0;
  r && r.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  r && r.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function Eu(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), c = e.read_shift(2), o = e.read_shift(2);
  return {
    Pos: [t, r],
    Dim: [a, n],
    Flags: i,
    CurTab: s,
    FirstTab: f,
    Selected: c,
    TabRatio: o
  };
}
function Tu() {
  var e = G(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Su(e, t, r) {
  if (r && r.biff >= 2 && r.biff < 5)
    return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function Fu(e) {
  var t = G(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function yu() {
}
function Au(e, t, r) {
  var a = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return a.name = ja(e, 0, r), a;
}
function Cu(e, t) {
  var r = e.name || "Arial", a = t && t.biff == 5, n = a ? 15 + r.length : 16 + 2 * r.length, i = G(n);
  return i.write_shift(2, (e.sz || 12) * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, r.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * r.length, r, a ? "sbcs" : "utf16le"), i;
}
function Du(e) {
  var t = st(e);
  return t.isst = e.read_shift(4), t;
}
function Ou(e, t, r, a) {
  var n = G(10);
  return Vt(e, t, a, n), n.write_shift(4, r), n;
}
function Iu(e, t, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var a = e.l + t, n = st(e);
  r.biff == 2 && e.l++;
  var i = Ya(e, a - e.l, r);
  return n.val = i, n;
}
function Ru(e, t, r, a, n) {
  var i = !n || n.biff == 8, s = G(6 + 2 + +i + (1 + i) * r.length);
  return Vt(e, t, a, s), s.write_shift(2, r.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"), s;
}
function Nu(e, t, r) {
  var a = e.read_shift(2), n = Jt(e, 0, r);
  return [a, n];
}
function bu(e, t, r, a) {
  var n = r && r.biff == 5;
  a || (a = G(n ? 3 + t.length : 5 + 2 * t.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, t.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * t.length, t, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var Pu = Jt;
function Vi(e, t, r) {
  var a = e.l + t, n = r.biff == 8 || !r.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), c = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c } };
}
function Lu(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, a = G(2 * r + 6);
  return a.write_shift(r, e.s.r), a.write_shift(r, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function Bu(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = pf(e);
  return { r: t, c: r, ixfe: a[0], rknum: a[1] };
}
function Mu(e, t) {
  for (var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < r; )
    i.push(pf(e));
  if (e.l !== r)
    throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1)
    throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function Uu(e, t) {
  for (var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < r; )
    i.push(e.read_shift(2));
  if (e.l !== r)
    throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1)
    throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function Wu(e, t, r, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), c = e.read_shift(2);
  return n.patternType = wl[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = c & 127, n.icvBack = c >> 7 & 127, n.fsxButton = c >> 14 & 1), n;
}
function Hu(e, t, r) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, t -= 6, a.data = Wu(e, t, a.fStyle, r), a;
}
function Xi(e, t, r, a) {
  var n = r && r.biff == 5;
  a || (a = G(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, t << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function Vu(e) {
  e.l += 4;
  var t = [e.read_shift(2), e.read_shift(2)];
  if (t[0] !== 0 && t[0]--, t[1] !== 0 && t[1]--, t[0] > 7 || t[1] > 7)
    throw new Error("Bad Gutters: " + t.join("|"));
  return t;
}
function Xu(e) {
  var t = G(8);
  return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t;
}
function Gi(e, t, r) {
  var a = st(e);
  (r.biff == 2 || t == 9) && ++e.l;
  var n = $l(e);
  return a.val = n, a.t = n === !0 || n === !1 ? "b" : "e", a;
}
function Gu(e, t, r, a, n, i) {
  var s = G(8);
  return Vt(e, t, a, s), hf(r, i, s), s;
}
function zu(e, t, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var a = st(e), n = gr(e);
  return a.val = n, a;
}
function $u(e, t, r, a) {
  var n = G(14);
  return Vt(e, t, a, n), Wt(r, n), n;
}
var zi = tu;
function Ku(e, t, r) {
  var a = e.l + t, n = e.read_shift(2), i = e.read_shift(2);
  if (r.sbcch = i, i == 1025 || i == 14849)
    return [i, n];
  if (i < 1 || i > 255)
    throw new Error("Unexpected SupBook type: " + i);
  for (var s = Ht(e, i), f = []; a > e.l; )
    f.push(Ya(e));
  return [i, n, s, f];
}
function $i(e, t, r) {
  var a = e.read_shift(2), n, i = {
    fBuiltIn: a & 1,
    fWantAdvise: a >>> 1 & 1,
    fWantPict: a >>> 2 & 1,
    fOle: a >>> 3 & 1,
    fOleLink: a >>> 4 & 1,
    cf: a >>> 5 & 1023,
    fIcon: a >>> 15 & 1
  };
  return r.sbcch === 14849 && (n = nu(e, t - 2, r)), i.body = n || e.read_shift(t - 2), typeof n == "string" && (i.Name = n), i;
}
var ju = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function Ki(e, t, r) {
  var a = e.l + t, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(r && r.biff == 2 ? 1 : 2), c = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), c = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var o = Ht(e, s, r);
  n & 32 && (o = ju[o.charCodeAt(0)]);
  var l = a - e.l;
  r && r.biff == 2 && --l;
  var u = a == e.l || f === 0 || !(l > 0) ? [] : ov(e, l, r, f);
  return {
    chKey: i,
    Name: o,
    itab: c,
    rgce: u
  };
}
function wf(e, t, r) {
  if (r.biff < 8)
    return Yu(e, t, r);
  for (var a = [], n = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
    a.push(au(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != n)
    throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function Yu(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = ja(e, t, r);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function Ju(e, t, r) {
  if (r.biff < 8) {
    e.l += t;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = Ht(e, a, r), s = Ht(e, n, r);
  return [i, s];
}
function Zu(e, t, r) {
  var a = gf(e);
  e.l++;
  var n = e.read_shift(1);
  return t -= 8, [lv(e, t, r), n, a];
}
function ji(e, t, r) {
  var a = iu(e);
  switch (r.biff) {
    case 2:
      e.l++, t -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, t -= 8;
      break;
    default:
      e.l += 6, t -= 12;
  }
  return [a, fv(e, t, r)];
}
function qu(e) {
  var t = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [t, r, a];
}
function Qu(e, t, r) {
  if (!(r.biff < 8)) {
    var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Jt(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: a, c: n }, f, s, i];
  }
}
function eh(e, t, r) {
  return Qu(e, t, r);
}
function rh(e, t) {
  for (var r = [], a = e.read_shift(2); a--; )
    r.push(O0(e));
  return r;
}
function th(e) {
  var t = G(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r)
    mf(e[r], t);
  return t;
}
function ah(e, t, r) {
  if (r && r.biff < 8)
    return ih(e, t, r);
  var a = _f(e), n = ou(e, t - 22, a[1]);
  return { cmo: a, ft: n };
}
var nh = {
  8: function(e, t) {
    var r = e.l + t;
    e.l += 10;
    var a = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var n = e.read_shift(1);
    return e.l += n, e.l = r, { fmt: a };
  }
};
function ih(e, t, r) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, t -= 36;
  var s = [];
  return s.push((nh[a] || kr)(e, t, r)), { cmo: [n, a, i], ft: s };
}
function sh(e, t, r) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (r.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = Yl(e, 6, r);
    var f = e.read_shift(2);
    e.read_shift(2), tr(e, 2);
    var c = e.read_shift(2);
    e.l += c;
    for (var o = 1; o < e.lens.length - 1; ++o) {
      if (e.l - a != e.lens[o])
        throw new Error("TxO: bad continue record");
      var l = e[e.l], u = Ht(e, e.lens[o + 1] - e.lens[o] - 1);
      if (n += u, n.length >= (l ? f : 2 * f))
        break;
    }
    if (n.length !== f && n.length !== f * 2)
      throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + t, { t: n };
  } catch {
    return e.l = a + t, { t: n };
  }
}
function fh(e, t) {
  var r = O0(e);
  e.l += 16;
  var a = Ql(e, t - 24);
  return [r, a];
}
function ch(e) {
  var t = G(24), r = ze(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n)
    t.write_shift(1, parseInt(a[n], 16));
  return cr([t, eu(e[1])]);
}
function oh(e, t) {
  e.read_shift(2);
  var r = O0(e), a = e.read_shift((t - 10) / 2, "dbcs-cont");
  return a = a.replace(_r, ""), [r, a];
}
function lh(e) {
  var t = e[1].Tooltip, r = G(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var a = ze(e[0]);
  r.write_shift(2, a.r), r.write_shift(2, a.r), r.write_shift(2, a.c), r.write_shift(2, a.c);
  for (var n = 0; n < t.length; ++n)
    r.write_shift(2, t.charCodeAt(n));
  return r.write_shift(2, 0), r;
}
function uh(e) {
  var t = [0, 0], r;
  return r = e.read_shift(2), t[0] = Ri[r] || r, r = e.read_shift(2), t[1] = Ri[r] || r, t;
}
function hh(e) {
  return e || (e = G(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function xh(e) {
  for (var t = e.read_shift(2), r = []; t-- > 0; )
    r.push(vf(e));
  return r;
}
function dh(e) {
  for (var t = e.read_shift(2), r = []; t-- > 0; )
    r.push(vf(e));
  return r;
}
function vh(e) {
  e.l += 2;
  var t = { cxfs: 0, crc: 0 };
  return t.cxfs = e.read_shift(2), t.crc = e.read_shift(4), t;
}
function kf(e, t, r) {
  if (!r.cellStyles)
    return kr(e, t);
  var a = r && r.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), c = e.read_shift(2);
  a == 2 && (e.l += 2);
  var o = { s: n, e: i, w: s, ixfe: f, flags: c };
  return (r.biff >= 5 || !r.biff) && (o.level = c >> 8 & 7), o;
}
function ph(e, t) {
  var r = G(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), r.write_shift(1, a), a = e.level || 0, r.write_shift(1, a), r.write_shift(2, 0), r;
}
function mh(e, t) {
  var r = {};
  return t < 32 || (e.l += 16, r.header = gr(e), r.footer = gr(e), e.l += 2), r;
}
function gh(e, t, r) {
  var a = { area: !1 };
  if (r.biff != 5)
    return e.l += t, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = !0), a;
}
function _h(e) {
  for (var t = G(2 * e), r = 0; r < e; ++r)
    t.write_shift(2, r + 1);
  return t;
}
var wh = st, kh = uf, Eh = Ya;
function Th(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(4), n = { fmt: t, env: r, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function Sh(e, t, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var a = st(e);
  ++e.l;
  var n = Jt(e, t - 7, r);
  return a.t = "str", a.val = n, a;
}
function Fh(e) {
  var t = st(e);
  ++e.l;
  var r = gr(e);
  return t.t = "n", t.val = r, t;
}
function yh(e, t, r) {
  var a = G(15);
  return Qa(a, e, t), a.write_shift(8, r, "f"), a;
}
function Ah(e) {
  var t = st(e);
  ++e.l;
  var r = e.read_shift(2);
  return t.t = "n", t.val = r, t;
}
function Ch(e, t, r) {
  var a = G(9);
  return Qa(a, e, t), a.write_shift(2, r), a;
}
function Dh(e) {
  var t = e.read_shift(1);
  return t === 0 ? (e.l++, "") : e.read_shift(t, "sbcs-cont");
}
function Oh(e, t) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += t - 13;
}
function Ih(e, t, r) {
  var a = e.l + t, n = st(e), i = e.read_shift(2), s = Ht(e, i, r);
  return e.l = a, n.t = "str", n.val = s, n;
}
var Rh = [2, 3, 48, 49, 131, 139, 140, 245], sn = /* @__PURE__ */ function() {
  var e = {
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127,
    8: 865,
    9: 437,
    10: 850,
    11: 437,
    13: 437,
    14: 850,
    15: 437,
    16: 850,
    17: 437,
    18: 850,
    19: 932,
    20: 850,
    21: 437,
    22: 850,
    23: 865,
    24: 437,
    25: 437,
    26: 850,
    27: 437,
    28: 863,
    29: 850,
    31: 852,
    34: 852,
    35: 852,
    36: 860,
    37: 850,
    38: 866,
    55: 850,
    64: 852,
    77: 936,
    78: 949,
    79: 950,
    80: 874,
    87: 1252,
    88: 1252,
    89: 1252,
    108: 863,
    134: 737,
    135: 852,
    136: 857,
    204: 1257,
    255: 16969
  }, t = y0({
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127
  });
  function r(f, c) {
    var o = [], l = Tt(1);
    switch (c.type) {
      case "base64":
        l = Ir(br(f));
        break;
      case "binary":
        l = Ir(f);
        break;
      case "buffer":
      case "array":
        l = f;
        break;
    }
    ur(l, 0);
    var u = l.read_shift(1), x = !!(u & 136), d = !1, v = !1;
    switch (u) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        d = !0, x = !0;
        break;
      case 49:
        d = !0, x = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        v = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + u.toString(16));
    }
    var h = 0, p = 521;
    u == 2 && (h = l.read_shift(2)), l.l += 3, u != 2 && (h = l.read_shift(4)), h > 1048576 && (h = 1e6), u != 2 && (p = l.read_shift(2));
    var w = l.read_shift(2), y = c.codepage || 1252;
    u != 2 && (l.l += 16, l.read_shift(1), l[l.l] !== 0 && (y = e[l[l.l]]), l.l += 1, l.l += 2), v && (l.l += 36);
    for (var g = [], D = {}, b = Math.min(l.length, u == 2 ? 521 : p - 10 - (d ? 264 : 0)), N = v ? 32 : 11; l.l < b && l[l.l] != 13; )
      switch (D = {}, D.name = De.utils.decode(y, l.slice(l.l, l.l + N)).replace(/[\u0000\r\n].*$/g, ""), l.l += N, D.type = String.fromCharCode(l.read_shift(1)), u != 2 && !v && (D.offset = l.read_shift(4)), D.len = l.read_shift(1), u == 2 && (D.offset = l.read_shift(2)), D.dec = l.read_shift(1), D.name.length && g.push(D), u != 2 && (l.l += v ? 13 : 14), D.type) {
        case "B":
          (!d || D.len != 8) && c.WTF && console.log("Skipping " + D.name + ":" + D.type);
          break;
        case "G":
        case "P":
          c.WTF && console.log("Skipping " + D.name + ":" + D.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + D.type);
      }
    if (l[l.l] !== 13 && (l.l = p - 1), l.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
    l.l = p;
    var F = 0, B = 0;
    for (o[0] = [], B = 0; B != g.length; ++B)
      o[0][B] = g[B].name;
    for (; h-- > 0; ) {
      if (l[l.l] === 42) {
        l.l += w;
        continue;
      }
      for (++l.l, o[++F] = [], B = 0, B = 0; B != g.length; ++B) {
        var I = l.slice(l.l, l.l + g[B].len);
        l.l += g[B].len, ur(I, 0);
        var z = De.utils.decode(y, I);
        switch (g[B].type) {
          case "C":
            z.trim().length && (o[F][B] = z.replace(/\s+$/, ""));
            break;
          case "D":
            z.length === 8 ? o[F][B] = new Date(+z.slice(0, 4), +z.slice(4, 6) - 1, +z.slice(6, 8)) : o[F][B] = z;
            break;
          case "F":
            o[F][B] = parseFloat(z.trim());
            break;
          case "+":
          case "I":
            o[F][B] = v ? I.read_shift(-4, "i") ^ 2147483648 : I.read_shift(4, "i");
            break;
          case "L":
            switch (z.trim().toUpperCase()) {
              case "Y":
              case "T":
                o[F][B] = !0;
                break;
              case "N":
              case "F":
                o[F][B] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + z + "|");
            }
            break;
          case "M":
            if (!x)
              throw new Error("DBF Unexpected MEMO for type " + u.toString(16));
            o[F][B] = "##MEMO##" + (v ? parseInt(z.trim(), 10) : I.read_shift(4));
            break;
          case "N":
            z = z.replace(/\u0000/g, "").trim(), z && z != "." && (o[F][B] = +z || 0);
            break;
          case "@":
            o[F][B] = new Date(I.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            o[F][B] = new Date((I.read_shift(4) - 2440588) * 864e5 + I.read_shift(4));
            break;
          case "Y":
            o[F][B] = I.read_shift(4, "i") / 1e4 + I.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            o[F][B] = -I.read_shift(-8, "f");
            break;
          case "B":
            if (d && g[B].len == 8) {
              o[F][B] = I.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            I.l += g[B].len;
            break;
          case "0":
            if (g[B].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + g[B].type);
        }
      }
    }
    if (u != 2 && l.l < l.length && l[l.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
    return c && c.sheetRows && (o = o.slice(0, c.sheetRows)), c.DBF = g, o;
  }
  function a(f, c) {
    var o = c || {};
    o.dateNF || (o.dateNF = "yyyymmdd");
    var l = ha(r(f, o), o);
    return l["!cols"] = o.DBF.map(function(u) {
      return {
        wch: u.len,
        DBF: u
      };
    }), delete o.DBF, l;
  }
  function n(f, c) {
    try {
      return Ct(a(f, c), c);
    } catch (o) {
      if (c && c.WTF)
        throw o;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, c) {
    var o = c || {};
    if (+o.codepage >= 0 && Gr(+o.codepage), o.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var l = Cr(), u = T0(f, { header: 1, raw: !0, cellDates: !0 }), x = u[0], d = u.slice(1), v = f["!cols"] || [], h = 0, p = 0, w = 0, y = 1;
    for (h = 0; h < x.length; ++h) {
      if (((v[h] || {}).DBF || {}).name) {
        x[h] = v[h].DBF.name, ++w;
        continue;
      }
      if (x[h] != null) {
        if (++w, typeof x[h] == "number" && (x[h] = x[h].toString(10)), typeof x[h] != "string")
          throw new Error("DBF Invalid column name " + x[h] + " |" + typeof x[h] + "|");
        if (x.indexOf(x[h]) !== h) {
          for (p = 0; p < 1024; ++p)
            if (x.indexOf(x[h] + "_" + p) == -1) {
              x[h] += "_" + p;
              break;
            }
        }
      }
    }
    var g = Ae(f["!ref"]), D = [], b = [], N = [];
    for (h = 0; h <= g.e.c - g.s.c; ++h) {
      var F = "", B = "", I = 0, z = [];
      for (p = 0; p < d.length; ++p)
        d[p][h] != null && z.push(d[p][h]);
      if (z.length == 0 || x[h] == null) {
        D[h] = "?";
        continue;
      }
      for (p = 0; p < z.length; ++p) {
        switch (typeof z[p]) {
          case "number":
            B = "B";
            break;
          case "string":
            B = "C";
            break;
          case "boolean":
            B = "L";
            break;
          case "object":
            B = z[p] instanceof Date ? "D" : "C";
            break;
          default:
            B = "C";
        }
        I = Math.max(I, String(z[p]).length), F = F && F != B ? "C" : B;
      }
      I > 250 && (I = 250), B = ((v[h] || {}).DBF || {}).type, B == "C" && v[h].DBF.len > I && (I = v[h].DBF.len), F == "B" && B == "N" && (F = "N", N[h] = v[h].DBF.dec, I = v[h].DBF.len), b[h] = F == "C" || B == "N" ? I : i[F] || 0, y += b[h], D[h] = F;
    }
    var X = l.next(32);
    for (X.write_shift(4, 318902576), X.write_shift(4, d.length), X.write_shift(2, 296 + 32 * w), X.write_shift(2, y), h = 0; h < 4; ++h)
      X.write_shift(4, 0);
    for (X.write_shift(4, 0 | (+t[Bt] || 3) << 8), h = 0, p = 0; h < x.length; ++h)
      if (x[h] != null) {
        var L = l.next(32), J = (x[h].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        L.write_shift(1, J, "sbcs"), L.write_shift(1, D[h] == "?" ? "C" : D[h], "sbcs"), L.write_shift(4, p), L.write_shift(1, b[h] || i[D[h]] || 0), L.write_shift(1, N[h] || 0), L.write_shift(1, 2), L.write_shift(4, 0), L.write_shift(1, 0), L.write_shift(4, 0), L.write_shift(4, 0), p += b[h] || i[D[h]] || 0;
      }
    var le = l.next(264);
    for (le.write_shift(4, 13), h = 0; h < 65; ++h)
      le.write_shift(4, 0);
    for (h = 0; h < d.length; ++h) {
      var ie = l.next(y);
      for (ie.write_shift(1, 0), p = 0; p < x.length; ++p)
        if (x[p] != null)
          switch (D[p]) {
            case "L":
              ie.write_shift(1, d[h][p] == null ? 63 : d[h][p] ? 84 : 70);
              break;
            case "B":
              ie.write_shift(8, d[h][p] || 0, "f");
              break;
            case "N":
              var he = "0";
              for (typeof d[h][p] == "number" && (he = d[h][p].toFixed(N[p] || 0)), w = 0; w < b[p] - he.length; ++w)
                ie.write_shift(1, 32);
              ie.write_shift(1, he, "sbcs");
              break;
            case "D":
              d[h][p] ? (ie.write_shift(4, ("0000" + d[h][p].getFullYear()).slice(-4), "sbcs"), ie.write_shift(2, ("00" + (d[h][p].getMonth() + 1)).slice(-2), "sbcs"), ie.write_shift(2, ("00" + d[h][p].getDate()).slice(-2), "sbcs")) : ie.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ce = String(d[h][p] != null ? d[h][p] : "").slice(0, b[p]);
              for (ie.write_shift(1, ce, "sbcs"), w = 0; w < b[p] - ce.length; ++w)
                ie.write_shift(1, 32);
              break;
          }
    }
    return l.next(1).write_shift(1, 26), l.end();
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: s
  };
}(), Ef = /* @__PURE__ */ function() {
  var e = {
    AA: "\xC0",
    BA: "\xC1",
    CA: "\xC2",
    DA: 195,
    HA: "\xC4",
    JA: 197,
    AE: "\xC8",
    BE: "\xC9",
    CE: "\xCA",
    HE: "\xCB",
    AI: "\xCC",
    BI: "\xCD",
    CI: "\xCE",
    HI: "\xCF",
    AO: "\xD2",
    BO: "\xD3",
    CO: "\xD4",
    DO: 213,
    HO: "\xD6",
    AU: "\xD9",
    BU: "\xDA",
    CU: "\xDB",
    HU: "\xDC",
    Aa: "\xE0",
    Ba: "\xE1",
    Ca: "\xE2",
    Da: 227,
    Ha: "\xE4",
    Ja: 229,
    Ae: "\xE8",
    Be: "\xE9",
    Ce: "\xEA",
    He: "\xEB",
    Ai: "\xEC",
    Bi: "\xED",
    Ci: "\xEE",
    Hi: "\xEF",
    Ao: "\xF2",
    Bo: "\xF3",
    Co: "\xF4",
    Do: 245,
    Ho: "\xF6",
    Au: "\xF9",
    Bu: "\xFA",
    Cu: "\xFB",
    Hu: "\xFC",
    KC: "\xC7",
    Kc: "\xE7",
    q: "\xE6",
    z: "\u0153",
    a: "\xC6",
    j: "\u0152",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    0: 176,
    1: 177,
    2: 178,
    3: 179,
    5: 181,
    6: 182,
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + Ye(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(x, d) {
    var v = e[d];
    return typeof v == "number" ? Z0(v) : v;
  }, a = function(x, d, v) {
    var h = d.charCodeAt(0) - 32 << 4 | v.charCodeAt(0) - 48;
    return h == 59 ? x : Z0(h);
  };
  e["|"] = 254;
  function n(x, d) {
    switch (d.type) {
      case "base64":
        return i(br(x), d);
      case "binary":
        return i(x, d);
      case "buffer":
        return i(Te && Buffer.isBuffer(x) ? x.toString("binary") : At(x), d);
      case "array":
        return i(Ut(x), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function i(x, d) {
    var v = x.split(/[\n\r]+/), h = -1, p = -1, w = 0, y = 0, g = [], D = [], b = null, N = {}, F = [], B = [], I = [], z = 0, X;
    for (+d.codepage >= 0 && Gr(+d.codepage); w !== v.length; ++w) {
      z = 0;
      var L = v[w].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(t, r), J = L.replace(/;;/g, "\0").split(";").map(function(R) {
        return R.replace(/\u0000/g, ";");
      }), le = J[0], ie;
      if (L.length > 0)
        switch (le) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            J[1].charAt(0) == "P" && D.push(L.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var he = !1, ce = !1, Pe = !1, V = !1, ve = -1, ge = -1;
            for (y = 1; y < J.length; ++y)
              switch (J[y].charAt(0)) {
                case "A":
                  break;
                case "X":
                  p = parseInt(J[y].slice(1)) - 1, ce = !0;
                  break;
                case "Y":
                  for (h = parseInt(J[y].slice(1)) - 1, ce || (p = 0), X = g.length; X <= h; ++X)
                    g[X] = [];
                  break;
                case "K":
                  ie = J[y].slice(1), ie.charAt(0) === '"' ? ie = ie.slice(1, ie.length - 1) : ie === "TRUE" ? ie = !0 : ie === "FALSE" ? ie = !1 : isNaN(Yr(ie)) ? isNaN(fa(ie).getDate()) || (ie = Ve(ie)) : (ie = Yr(ie), b !== null && Gt(b) && (ie = C0(ie))), typeof De < "u" && typeof ie == "string" && (d || {}).type != "string" && (d || {}).codepage && (ie = De.utils.decode(d.codepage, ie)), he = !0;
                  break;
                case "E":
                  V = !0;
                  var C = ia(J[y].slice(1), { r: h, c: p });
                  g[h][p] = [g[h][p], C];
                  break;
                case "S":
                  Pe = !0, g[h][p] = [g[h][p], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  ve = parseInt(J[y].slice(1)) - 1;
                  break;
                case "C":
                  ge = parseInt(J[y].slice(1)) - 1;
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + L);
              }
            if (he && (g[h][p] && g[h][p].length == 2 ? g[h][p][0] = ie : g[h][p] = ie, b = null), Pe) {
              if (V)
                throw new Error("SYLK shared formula cannot have own formula");
              var P = ve > -1 && g[ve][ge];
              if (!P || !P[1])
                throw new Error("SYLK shared formula cannot find base");
              g[h][p][1] = Wf(P[1], { r: h - ve, c: p - ge });
            }
            break;
          case "F":
            var O = 0;
            for (y = 1; y < J.length; ++y)
              switch (J[y].charAt(0)) {
                case "X":
                  p = parseInt(J[y].slice(1)) - 1, ++O;
                  break;
                case "Y":
                  for (h = parseInt(J[y].slice(1)) - 1, X = g.length; X <= h; ++X)
                    g[X] = [];
                  break;
                case "M":
                  z = parseInt(J[y].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  b = D[parseInt(J[y].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (I = J[y].slice(1).split(" "), X = parseInt(I[0], 10); X <= parseInt(I[1], 10); ++X)
                    z = parseInt(I[2], 10), B[X - 1] = z === 0 ? { hidden: !0 } : { wch: z }, St(B[X - 1]);
                  break;
                case "C":
                  p = parseInt(J[y].slice(1)) - 1, B[p] || (B[p] = {});
                  break;
                case "R":
                  h = parseInt(J[y].slice(1)) - 1, F[h] || (F[h] = {}), z > 0 ? (F[h].hpt = z, F[h].hpx = oa(z)) : z === 0 && (F[h].hidden = !0);
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + L);
              }
            O < 1 && (b = null);
            break;
          default:
            if (d && d.WTF)
              throw new Error("SYLK bad record " + L);
        }
    }
    return F.length > 0 && (N["!rows"] = F), B.length > 0 && (N["!cols"] = B), d && d.sheetRows && (g = g.slice(0, d.sheetRows)), [g, N];
  }
  function s(x, d) {
    var v = n(x, d), h = v[0], p = v[1], w = ha(h, d);
    return Ye(p).forEach(function(y) {
      w[y] = p[y];
    }), w;
  }
  function f(x, d) {
    return Ct(s(x, d), d);
  }
  function c(x, d, v, h) {
    var p = "C;Y" + (v + 1) + ";X" + (h + 1) + ";K";
    switch (x.t) {
      case "n":
        p += x.v || 0, x.f && !x.F && (p += ";E" + Vn(x.f, { r: v, c: h }));
        break;
      case "b":
        p += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        p += x.w || x.v;
        break;
      case "d":
        p += '"' + (x.w || x.v) + '"';
        break;
      case "s":
        p += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return p;
  }
  function o(x, d) {
    d.forEach(function(v, h) {
      var p = "F;W" + (h + 1) + " " + (h + 1) + " ";
      v.hidden ? p += "0" : (typeof v.width == "number" && !v.wpx && (v.wpx = Ua(v.width)), typeof v.wpx == "number" && !v.wch && (v.wch = Wa(v.wpx)), typeof v.wch == "number" && (p += Math.round(v.wch))), p.charAt(p.length - 1) != " " && x.push(p);
    });
  }
  function l(x, d) {
    d.forEach(function(v, h) {
      var p = "F;";
      v.hidden ? p += "M0;" : v.hpt ? p += "M" + 20 * v.hpt + ";" : v.hpx && (p += "M" + 20 * Ha(v.hpx) + ";"), p.length > 2 && x.push(p + "R" + (h + 1));
    });
  }
  function u(x, d) {
    var v = ["ID;PWXL;N;E"], h = [], p = Ae(x["!ref"]), w, y = Array.isArray(x), g = `\r
`;
    v.push("P;PGeneral"), v.push("F;P0;DG0G8;M255"), x["!cols"] && o(v, x["!cols"]), x["!rows"] && l(v, x["!rows"]), v.push("B;Y" + (p.e.r - p.s.r + 1) + ";X" + (p.e.c - p.s.c + 1) + ";D" + [p.s.c, p.s.r, p.e.c, p.e.r].join(" "));
    for (var D = p.s.r; D <= p.e.r; ++D)
      for (var b = p.s.c; b <= p.e.c; ++b) {
        var N = pe({ r: D, c: b });
        w = y ? (x[D] || [])[b] : x[N], !(!w || w.v == null && (!w.f || w.F)) && h.push(c(w, x, D, b));
      }
    return v.join(g) + g + h.join(g) + g + "E" + g;
  }
  return {
    to_workbook: f,
    to_sheet: s,
    from_sheet: u
  };
}(), Tf = /* @__PURE__ */ function() {
  function e(i, s) {
    switch (s.type) {
      case "base64":
        return t(br(i), s);
      case "binary":
        return t(i, s);
      case "buffer":
        return t(Te && Buffer.isBuffer(i) ? i.toString("binary") : At(i), s);
      case "array":
        return t(Ut(i), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(i, s) {
    for (var f = i.split(`
`), c = -1, o = -1, l = 0, u = []; l !== f.length; ++l) {
      if (f[l].trim() === "BOT") {
        u[++c] = [], o = 0;
        continue;
      }
      if (!(c < 0)) {
        var x = f[l].trim().split(","), d = x[0], v = x[1];
        ++l;
        for (var h = f[l] || ""; (h.match(/["]/g) || []).length & 1 && l < f.length - 1; )
          h += `
` + f[++l];
        switch (h = h.trim(), +d) {
          case -1:
            if (h === "BOT") {
              u[++c] = [], o = 0;
              continue;
            } else if (h !== "EOD")
              throw new Error("Unrecognized DIF special command " + h);
            break;
          case 0:
            h === "TRUE" ? u[c][o] = !0 : h === "FALSE" ? u[c][o] = !1 : isNaN(Yr(v)) ? isNaN(fa(v).getDate()) ? u[c][o] = v : u[c][o] = Ve(v) : u[c][o] = Yr(v), ++o;
            break;
          case 1:
            h = h.slice(1, h.length - 1), h = h.replace(/""/g, '"'), h && h.match(/^=".*"$/) && (h = h.slice(2, -1)), u[c][o++] = h !== "" ? h : null;
            break;
        }
        if (h === "EOD")
          break;
      }
    }
    return s && s.sheetRows && (u = u.slice(0, s.sheetRows)), u;
  }
  function r(i, s) {
    return ha(e(i, s), s);
  }
  function a(i, s) {
    return Ct(r(i, s), s);
  }
  var n = /* @__PURE__ */ function() {
    var i = function(c, o, l, u, x) {
      c.push(o), c.push(l + "," + u), c.push('"' + x.replace(/"/g, '""') + '"');
    }, s = function(c, o, l, u) {
      c.push(o + "," + l), c.push(o == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
    };
    return function(c) {
      var o = [], l = Ae(c["!ref"]), u, x = Array.isArray(c);
      i(o, "TABLE", 0, 1, "sheetjs"), i(o, "VECTORS", 0, l.e.r - l.s.r + 1, ""), i(o, "TUPLES", 0, l.e.c - l.s.c + 1, ""), i(o, "DATA", 0, 0, "");
      for (var d = l.s.r; d <= l.e.r; ++d) {
        s(o, -1, 0, "BOT");
        for (var v = l.s.c; v <= l.e.c; ++v) {
          var h = pe({ r: d, c: v });
          if (u = x ? (c[d] || [])[v] : c[h], !u) {
            s(o, 1, 0, "");
            continue;
          }
          switch (u.t) {
            case "n":
              var p = u.w;
              !p && u.v != null && (p = u.v), p == null ? u.f && !u.F ? s(o, 1, 0, "=" + u.f) : s(o, 1, 0, "") : s(o, 0, p, "V");
              break;
            case "b":
              s(o, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
              break;
            case "s":
              s(o, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
              break;
            case "d":
              u.w || (u.w = Pr(u.z || de[14], ir(Ve(u.v)))), s(o, 0, u.w, "V");
              break;
            default:
              s(o, 1, 0, "");
          }
        }
      }
      s(o, -1, 0, "EOD");
      var w = `\r
`, y = o.join(w);
      return y;
    };
  }();
  return {
    to_workbook: a,
    to_sheet: r,
    from_sheet: n
  };
}(), Sf = /* @__PURE__ */ function() {
  function e(u) {
    return u.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(u) {
    return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(u, x) {
    for (var d = u.split(`
`), v = -1, h = -1, p = 0, w = []; p !== d.length; ++p) {
      var y = d[p].trim().split(":");
      if (y[0] === "cell") {
        var g = ze(y[1]);
        if (w.length <= g.r)
          for (v = w.length; v <= g.r; ++v)
            w[v] || (w[v] = []);
        switch (v = g.r, h = g.c, y[2]) {
          case "t":
            w[v][h] = e(y[3]);
            break;
          case "v":
            w[v][h] = +y[3];
            break;
          case "vtf":
            var D = y[y.length - 1];
          case "vtc":
            switch (y[3]) {
              case "nl":
                w[v][h] = !!+y[4];
                break;
              default:
                w[v][h] = +y[4];
                break;
            }
            y[2] == "vtf" && (w[v][h] = [w[v][h], D]);
        }
      }
    }
    return x && x.sheetRows && (w = w.slice(0, x.sheetRows)), w;
  }
  function a(u, x) {
    return ha(r(u, x), x);
  }
  function n(u, x) {
    return Ct(a(u, x), x);
  }
  var i = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), s = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, f = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), c = "--SocialCalcSpreadsheetControlSave--";
  function o(u) {
    if (!u || !u["!ref"])
      return "";
    for (var x = [], d = [], v, h = "", p = yr(u["!ref"]), w = Array.isArray(u), y = p.s.r; y <= p.e.r; ++y)
      for (var g = p.s.c; g <= p.e.c; ++g)
        if (h = pe({ r: y, c: g }), v = w ? (u[y] || [])[g] : u[h], !(!v || v.v == null || v.t === "z")) {
          switch (d = ["cell", h, "t"], v.t) {
            case "s":
            case "str":
              d.push(t(v.v));
              break;
            case "n":
              v.f ? (d[2] = "vtf", d[3] = "n", d[4] = v.v, d[5] = t(v.f)) : (d[2] = "v", d[3] = v.v);
              break;
            case "b":
              d[2] = "vt" + (v.f ? "f" : "c"), d[3] = "nl", d[4] = v.v ? "1" : "0", d[5] = t(v.f || (v.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var D = ir(Ve(v.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + D, d[5] = v.w || Pr(v.z || de[14], D);
              break;
            case "e":
              continue;
          }
          x.push(d.join(":"));
        }
    return x.push("sheet:c:" + (p.e.c - p.s.c + 1) + ":r:" + (p.e.r - p.s.r + 1) + ":tvf:1"), x.push("valueformat:1:text-wiki"), x.join(`
`);
  }
  function l(u) {
    return [i, s, f, s, o(u), c].join(`
`);
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: l
  };
}(), ca = /* @__PURE__ */ function() {
  function e(l, u, x, d, v) {
    v.raw ? u[x][d] = l : l === "" || (l === "TRUE" ? u[x][d] = !0 : l === "FALSE" ? u[x][d] = !1 : isNaN(Yr(l)) ? isNaN(fa(l).getDate()) ? u[x][d] = l : u[x][d] = Ve(l) : u[x][d] = Yr(l));
  }
  function t(l, u) {
    var x = u || {}, d = [];
    if (!l || l.length === 0)
      return d;
    for (var v = l.split(/[\r\n]/), h = v.length - 1; h >= 0 && v[h].length === 0; )
      --h;
    for (var p = 10, w = 0, y = 0; y <= h; ++y)
      w = v[y].indexOf(" "), w == -1 ? w = v[y].length : w++, p = Math.max(p, w);
    for (y = 0; y <= h; ++y) {
      d[y] = [];
      var g = 0;
      for (e(v[y].slice(0, p).trim(), d, y, g, x), g = 1; g <= (v[y].length - p) / 10 + 1; ++g)
        e(v[y].slice(p + (g - 1) * 10, p + g * 10).trim(), d, y, g, x);
    }
    return x.sheetRows && (d = d.slice(0, x.sheetRows)), d;
  }
  var r = {
    44: ",",
    9: "	",
    59: ";",
    124: "|"
  }, a = {
    44: 3,
    9: 2,
    59: 1,
    124: 0
  };
  function n(l) {
    for (var u = {}, x = !1, d = 0, v = 0; d < l.length; ++d)
      (v = l.charCodeAt(d)) == 34 ? x = !x : !x && v in r && (u[v] = (u[v] || 0) + 1);
    v = [];
    for (d in u)
      Object.prototype.hasOwnProperty.call(u, d) && v.push([u[d], d]);
    if (!v.length) {
      u = a;
      for (d in u)
        Object.prototype.hasOwnProperty.call(u, d) && v.push([u[d], d]);
    }
    return v.sort(function(h, p) {
      return h[0] - p[0] || a[h[1]] - a[p[1]];
    }), r[v.pop()[1]] || 44;
  }
  function i(l, u) {
    var x = u || {}, d = "", v = x.dense ? [] : {}, h = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    l.slice(0, 4) == "sep=" ? l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? (d = l.charAt(4), l = l.slice(7)) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? (d = l.charAt(4), l = l.slice(6)) : d = n(l.slice(0, 1024)) : x && x.FS ? d = x.FS : d = n(l.slice(0, 1024));
    var p = 0, w = 0, y = 0, g = 0, D = 0, b = d.charCodeAt(0), N = !1, F = 0, B = l.charCodeAt(0);
    l = l.replace(/\r\n/mg, `
`);
    var I = x.dateNF != null ? _o(x.dateNF) : null;
    function z() {
      var X = l.slice(g, D), L = {};
      if (X.charAt(0) == '"' && X.charAt(X.length - 1) == '"' && (X = X.slice(1, -1).replace(/""/g, '"')), X.length === 0)
        L.t = "z";
      else if (x.raw)
        L.t = "s", L.v = X;
      else if (X.trim().length === 0)
        L.t = "s", L.v = X;
      else if (X.charCodeAt(0) == 61)
        X.charCodeAt(1) == 34 && X.charCodeAt(X.length - 1) == 34 ? (L.t = "s", L.v = X.slice(2, -1).replace(/""/g, '"')) : Kx(X) ? (L.t = "n", L.f = X.slice(1)) : (L.t = "s", L.v = X);
      else if (X == "TRUE")
        L.t = "b", L.v = !0;
      else if (X == "FALSE")
        L.t = "b", L.v = !1;
      else if (!isNaN(y = Yr(X)))
        L.t = "n", x.cellText !== !1 && (L.w = X), L.v = y;
      else if (!isNaN(fa(X).getDate()) || I && X.match(I)) {
        L.z = x.dateNF || de[14];
        var J = 0;
        I && X.match(I) && (X = wo(X, x.dateNF, X.match(I) || []), J = 1), x.cellDates ? (L.t = "d", L.v = Ve(X, J)) : (L.t = "n", L.v = ir(Ve(X, J))), x.cellText !== !1 && (L.w = Pr(L.z, L.v instanceof Date ? ir(L.v) : L.v)), x.cellNF || delete L.z;
      } else
        L.t = "s", L.v = X;
      if (L.t == "z" || (x.dense ? (v[p] || (v[p] = []), v[p][w] = L) : v[pe({ c: w, r: p })] = L), g = D + 1, B = l.charCodeAt(g), h.e.c < w && (h.e.c = w), h.e.r < p && (h.e.r = p), F == b)
        ++w;
      else if (w = 0, ++p, x.sheetRows && x.sheetRows <= p)
        return !0;
    }
    e:
      for (; D < l.length; ++D)
        switch (F = l.charCodeAt(D)) {
          case 34:
            B === 34 && (N = !N);
            break;
          case b:
          case 10:
          case 13:
            if (!N && z())
              break e;
            break;
        }
    return D - g > 0 && z(), v["!ref"] = we(h), v;
  }
  function s(l, u) {
    return !(u && u.PRN) || u.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? i(l, u) : ha(t(l, u), u);
  }
  function f(l, u) {
    var x = "", d = u.type == "string" ? [0, 0, 0, 0] : Jn(l, u);
    switch (u.type) {
      case "base64":
        x = br(l);
        break;
      case "binary":
        x = l;
        break;
      case "buffer":
        u.codepage == 65001 ? x = l.toString("utf8") : u.codepage && typeof De < "u" ? x = De.utils.decode(u.codepage, l) : x = Te && Buffer.isBuffer(l) ? l.toString("binary") : At(l);
        break;
      case "array":
        x = Ut(l);
        break;
      case "string":
        x = l;
        break;
      default:
        throw new Error("Unrecognized type " + u.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? x = Le(x.slice(3)) : u.type != "string" && u.type != "buffer" && u.codepage == 65001 ? x = Le(x) : u.type == "binary" && typeof De < "u" && u.codepage && (x = De.utils.decode(u.codepage, De.utils.encode(28591, x))), x.slice(0, 19) == "socialcalc:version:" ? Sf.to_sheet(u.type == "string" ? x : Le(x), u) : s(x, u);
  }
  function c(l, u) {
    return Ct(f(l, u), u);
  }
  function o(l) {
    for (var u = [], x = Ae(l["!ref"]), d, v = Array.isArray(l), h = x.s.r; h <= x.e.r; ++h) {
      for (var p = [], w = x.s.c; w <= x.e.c; ++w) {
        var y = pe({ r: h, c: w });
        if (d = v ? (l[h] || [])[w] : l[y], !d || d.v == null) {
          p.push("          ");
          continue;
        }
        for (var g = (d.w || (nt(d), d.w) || "").slice(0, 10); g.length < 10; )
          g += " ";
        p.push(g + (w === 0 ? " " : ""));
      }
      u.push(p.join(""));
    }
    return u.join(`
`);
  }
  return {
    to_workbook: c,
    to_sheet: f,
    from_sheet: o
  };
}();
function Nh(e, t) {
  var r = t || {}, a = !!r.WTF;
  r.WTF = !0;
  try {
    var n = Ef.to_workbook(e, r);
    return r.WTF = a, n;
  } catch (i) {
    if (r.WTF = a, !i.message.match(/SYLK bad record ID/) && a)
      throw i;
    return ca.to_workbook(e, t);
  }
}
var Pt = /* @__PURE__ */ function() {
  function e(C, P, O) {
    if (!!C) {
      ur(C, C.l || 0);
      for (var R = O.Enum || ve; C.l < C.length; ) {
        var j = C.read_shift(2), re = R[j] || R[65535], te = C.read_shift(2), Q = C.l + te, Z = re.f && re.f(C, te, O);
        if (C.l = Q, P(Z, re, j))
          return;
      }
    }
  }
  function t(C, P) {
    switch (P.type) {
      case "base64":
        return r(Ir(br(C)), P);
      case "binary":
        return r(Ir(C), P);
      case "buffer":
      case "array":
        return r(C, P);
    }
    throw "Unsupported type " + P.type;
  }
  function r(C, P) {
    if (!C)
      return C;
    var O = P || {}, R = O.dense ? [] : {}, j = "Sheet1", re = "", te = 0, Q = {}, Z = [], Ee = [], A = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ue = O.sheetRows || 0;
    if (C[2] == 0 && (C[3] == 8 || C[3] == 9) && C.length >= 16 && C[14] == 5 && C[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (C[2] == 2)
      O.Enum = ve, e(C, function(fe, Je, Lr) {
        switch (Lr) {
          case 0:
            O.vers = fe, fe >= 4096 && (O.qpro = !0);
            break;
          case 6:
            A = fe;
            break;
          case 204:
            fe && (re = fe);
            break;
          case 222:
            re = fe;
            break;
          case 15:
          case 51:
            O.qpro || (fe[1].v = fe[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            Lr == 14 && (fe[2] & 112) == 112 && (fe[2] & 15) > 1 && (fe[2] & 15) < 15 && (fe[1].z = O.dateNF || de[14], O.cellDates && (fe[1].t = "d", fe[1].v = C0(fe[1].v))), O.qpro && fe[3] > te && (R["!ref"] = we(A), Q[j] = R, Z.push(j), R = O.dense ? [] : {}, A = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, te = fe[3], j = re || "Sheet" + (te + 1), re = "");
            var Zr = O.dense ? (R[fe[0].r] || [])[fe[0].c] : R[pe(fe[0])];
            if (Zr) {
              Zr.t = fe[1].t, Zr.v = fe[1].v, fe[1].z != null && (Zr.z = fe[1].z), fe[1].f != null && (Zr.f = fe[1].f);
              break;
            }
            O.dense ? (R[fe[0].r] || (R[fe[0].r] = []), R[fe[0].r][fe[0].c] = fe[1]) : R[pe(fe[0])] = fe[1];
            break;
        }
      }, O);
    else if (C[2] == 26 || C[2] == 14)
      O.Enum = ge, C[2] == 14 && (O.qpro = !0, C.l = 0), e(C, function(fe, Je, Lr) {
        switch (Lr) {
          case 204:
            j = fe;
            break;
          case 22:
            fe[1].v = fe[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (fe[3] > te && (R["!ref"] = we(A), Q[j] = R, Z.push(j), R = O.dense ? [] : {}, A = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, te = fe[3], j = "Sheet" + (te + 1)), Ue > 0 && fe[0].r >= Ue)
              break;
            O.dense ? (R[fe[0].r] || (R[fe[0].r] = []), R[fe[0].r][fe[0].c] = fe[1]) : R[pe(fe[0])] = fe[1], A.e.c < fe[0].c && (A.e.c = fe[0].c), A.e.r < fe[0].r && (A.e.r = fe[0].r);
            break;
          case 27:
            fe[14e3] && (Ee[fe[14e3][0]] = fe[14e3][1]);
            break;
          case 1537:
            Ee[fe[0]] = fe[1], fe[0] == te && (j = fe[1]);
            break;
        }
      }, O);
    else
      throw new Error("Unrecognized LOTUS BOF " + C[2]);
    if (R["!ref"] = we(A), Q[re || j] = R, Z.push(re || j), !Ee.length)
      return { SheetNames: Z, Sheets: Q };
    for (var Ce = {}, Be = [], ye = 0; ye < Ee.length; ++ye)
      Q[Z[ye]] ? (Be.push(Ee[ye] || Z[ye]), Ce[Ee[ye]] = Q[Ee[ye]] || Q[Z[ye]]) : (Be.push(Ee[ye]), Ce[Ee[ye]] = { "!ref": "A1" });
    return { SheetNames: Be, Sheets: Ce };
  }
  function a(C, P) {
    var O = P || {};
    if (+O.codepage >= 0 && Gr(+O.codepage), O.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var R = Cr(), j = Ae(C["!ref"]), re = Array.isArray(C), te = [];
    ne(R, 0, i(1030)), ne(R, 6, c(j));
    for (var Q = Math.min(j.e.r, 8191), Z = j.s.r; Z <= Q; ++Z)
      for (var Ee = Ke(Z), A = j.s.c; A <= j.e.c; ++A) {
        Z === j.s.r && (te[A] = He(A));
        var Ue = te[A] + Ee, Ce = re ? (C[Z] || [])[A] : C[Ue];
        if (!(!Ce || Ce.t == "z"))
          if (Ce.t == "n")
            (Ce.v | 0) == Ce.v && Ce.v >= -32768 && Ce.v <= 32767 ? ne(R, 13, d(Z, A, Ce.v)) : ne(R, 14, h(Z, A, Ce.v));
          else {
            var Be = nt(Ce);
            ne(R, 15, u(Z, A, Be.slice(0, 239)));
          }
      }
    return ne(R, 1), R.end();
  }
  function n(C, P) {
    var O = P || {};
    if (+O.codepage >= 0 && Gr(+O.codepage), O.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var R = Cr();
    ne(R, 0, s(C));
    for (var j = 0, re = 0; j < C.SheetNames.length; ++j)
      (C.Sheets[C.SheetNames[j]] || {})["!ref"] && ne(R, 27, V(C.SheetNames[j], re++));
    var te = 0;
    for (j = 0; j < C.SheetNames.length; ++j) {
      var Q = C.Sheets[C.SheetNames[j]];
      if (!(!Q || !Q["!ref"])) {
        for (var Z = Ae(Q["!ref"]), Ee = Array.isArray(Q), A = [], Ue = Math.min(Z.e.r, 8191), Ce = Z.s.r; Ce <= Ue; ++Ce)
          for (var Be = Ke(Ce), ye = Z.s.c; ye <= Z.e.c; ++ye) {
            Ce === Z.s.r && (A[ye] = He(ye));
            var fe = A[ye] + Be, Je = Ee ? (Q[Ce] || [])[ye] : Q[fe];
            if (!(!Je || Je.t == "z"))
              if (Je.t == "n")
                ne(R, 23, z(Ce, ye, te, Je.v));
              else {
                var Lr = nt(Je);
                ne(R, 22, F(Ce, ye, te, Lr.slice(0, 239)));
              }
          }
        ++te;
      }
    }
    return ne(R, 1), R.end();
  }
  function i(C) {
    var P = G(2);
    return P.write_shift(2, C), P;
  }
  function s(C) {
    var P = G(26);
    P.write_shift(2, 4096), P.write_shift(2, 4), P.write_shift(4, 0);
    for (var O = 0, R = 0, j = 0, re = 0; re < C.SheetNames.length; ++re) {
      var te = C.SheetNames[re], Q = C.Sheets[te];
      if (!(!Q || !Q["!ref"])) {
        ++j;
        var Z = yr(Q["!ref"]);
        O < Z.e.r && (O = Z.e.r), R < Z.e.c && (R = Z.e.c);
      }
    }
    return O > 8191 && (O = 8191), P.write_shift(2, O), P.write_shift(1, j), P.write_shift(1, R), P.write_shift(2, 0), P.write_shift(2, 0), P.write_shift(1, 1), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(4, 0), P;
  }
  function f(C, P, O) {
    var R = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return P == 8 && O.qpro ? (R.s.c = C.read_shift(1), C.l++, R.s.r = C.read_shift(2), R.e.c = C.read_shift(1), C.l++, R.e.r = C.read_shift(2), R) : (R.s.c = C.read_shift(2), R.s.r = C.read_shift(2), P == 12 && O.qpro && (C.l += 2), R.e.c = C.read_shift(2), R.e.r = C.read_shift(2), P == 12 && O.qpro && (C.l += 2), R.s.c == 65535 && (R.s.c = R.e.c = R.s.r = R.e.r = 0), R);
  }
  function c(C) {
    var P = G(8);
    return P.write_shift(2, C.s.c), P.write_shift(2, C.s.r), P.write_shift(2, C.e.c), P.write_shift(2, C.e.r), P;
  }
  function o(C, P, O) {
    var R = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return O.qpro && O.vers != 20768 ? (R[0].c = C.read_shift(1), R[3] = C.read_shift(1), R[0].r = C.read_shift(2), C.l += 2) : (R[2] = C.read_shift(1), R[0].c = C.read_shift(2), R[0].r = C.read_shift(2)), R;
  }
  function l(C, P, O) {
    var R = C.l + P, j = o(C, P, O);
    if (j[1].t = "s", O.vers == 20768) {
      C.l++;
      var re = C.read_shift(1);
      return j[1].v = C.read_shift(re, "utf8"), j;
    }
    return O.qpro && C.l++, j[1].v = C.read_shift(R - C.l, "cstr"), j;
  }
  function u(C, P, O) {
    var R = G(7 + O.length);
    R.write_shift(1, 255), R.write_shift(2, P), R.write_shift(2, C), R.write_shift(1, 39);
    for (var j = 0; j < R.length; ++j) {
      var re = O.charCodeAt(j);
      R.write_shift(1, re >= 128 ? 95 : re);
    }
    return R.write_shift(1, 0), R;
  }
  function x(C, P, O) {
    var R = o(C, P, O);
    return R[1].v = C.read_shift(2, "i"), R;
  }
  function d(C, P, O) {
    var R = G(7);
    return R.write_shift(1, 255), R.write_shift(2, P), R.write_shift(2, C), R.write_shift(2, O, "i"), R;
  }
  function v(C, P, O) {
    var R = o(C, P, O);
    return R[1].v = C.read_shift(8, "f"), R;
  }
  function h(C, P, O) {
    var R = G(13);
    return R.write_shift(1, 255), R.write_shift(2, P), R.write_shift(2, C), R.write_shift(8, O, "f"), R;
  }
  function p(C, P, O) {
    var R = C.l + P, j = o(C, P, O);
    if (j[1].v = C.read_shift(8, "f"), O.qpro)
      C.l = R;
    else {
      var re = C.read_shift(2);
      D(C.slice(C.l, C.l + re), j), C.l += re;
    }
    return j;
  }
  function w(C, P, O) {
    var R = P & 32768;
    return P &= -32769, P = (R ? C : 0) + (P >= 8192 ? P - 16384 : P), (R ? "" : "$") + (O ? He(P) : Ke(P));
  }
  var y = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, g = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  function D(C, P) {
    ur(C, 0);
    for (var O = [], R = 0, j = "", re = "", te = "", Q = ""; C.l < C.length; ) {
      var Z = C[C.l++];
      switch (Z) {
        case 0:
          O.push(C.read_shift(8, "f"));
          break;
        case 1:
          re = w(P[0].c, C.read_shift(2), !0), j = w(P[0].r, C.read_shift(2), !1), O.push(re + j);
          break;
        case 2:
          {
            var Ee = w(P[0].c, C.read_shift(2), !0), A = w(P[0].r, C.read_shift(2), !1);
            re = w(P[0].c, C.read_shift(2), !0), j = w(P[0].r, C.read_shift(2), !1), O.push(Ee + A + ":" + re + j);
          }
          break;
        case 3:
          if (C.l < C.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          O.push("(" + O.pop() + ")");
          break;
        case 5:
          O.push(C.read_shift(2));
          break;
        case 6:
          {
            for (var Ue = ""; Z = C[C.l++]; )
              Ue += String.fromCharCode(Z);
            O.push('"' + Ue.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          O.push("-" + O.pop());
          break;
        case 23:
          O.push("+" + O.pop());
          break;
        case 22:
          O.push("NOT(" + O.pop() + ")");
          break;
        case 20:
        case 21:
          Q = O.pop(), te = O.pop(), O.push(["AND", "OR"][Z - 20] + "(" + te + "," + Q + ")");
          break;
        default:
          if (Z < 32 && g[Z])
            Q = O.pop(), te = O.pop(), O.push(te + g[Z] + Q);
          else if (y[Z]) {
            if (R = y[Z][1], R == 69 && (R = C[C.l++]), R > O.length) {
              console.error("WK1 bad formula parse 0x" + Z.toString(16) + ":|" + O.join("|") + "|");
              return;
            }
            var Ce = O.slice(-R);
            O.length -= R, O.push(y[Z][0] + "(" + Ce.join(",") + ")");
          } else
            return Z <= 7 ? console.error("WK1 invalid opcode " + Z.toString(16)) : Z <= 24 ? console.error("WK1 unsupported op " + Z.toString(16)) : Z <= 30 ? console.error("WK1 invalid opcode " + Z.toString(16)) : Z <= 115 ? console.error("WK1 unsupported function opcode " + Z.toString(16)) : console.error("WK1 unrecognized opcode " + Z.toString(16));
      }
    }
    O.length == 1 ? P[1].f = "" + O[0] : console.error("WK1 bad formula parse |" + O.join("|") + "|");
  }
  function b(C) {
    var P = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return P[0].r = C.read_shift(2), P[3] = C[C.l++], P[0].c = C[C.l++], P;
  }
  function N(C, P) {
    var O = b(C);
    return O[1].t = "s", O[1].v = C.read_shift(P - 4, "cstr"), O;
  }
  function F(C, P, O, R) {
    var j = G(6 + R.length);
    j.write_shift(2, C), j.write_shift(1, O), j.write_shift(1, P), j.write_shift(1, 39);
    for (var re = 0; re < R.length; ++re) {
      var te = R.charCodeAt(re);
      j.write_shift(1, te >= 128 ? 95 : te);
    }
    return j.write_shift(1, 0), j;
  }
  function B(C, P) {
    var O = b(C);
    O[1].v = C.read_shift(2);
    var R = O[1].v >> 1;
    if (O[1].v & 1)
      switch (R & 7) {
        case 0:
          R = (R >> 3) * 5e3;
          break;
        case 1:
          R = (R >> 3) * 500;
          break;
        case 2:
          R = (R >> 3) / 20;
          break;
        case 3:
          R = (R >> 3) / 200;
          break;
        case 4:
          R = (R >> 3) / 2e3;
          break;
        case 5:
          R = (R >> 3) / 2e4;
          break;
        case 6:
          R = (R >> 3) / 16;
          break;
        case 7:
          R = (R >> 3) / 64;
          break;
      }
    return O[1].v = R, O;
  }
  function I(C, P) {
    var O = b(C), R = C.read_shift(4), j = C.read_shift(4), re = C.read_shift(2);
    if (re == 65535)
      return R === 0 && j === 3221225472 ? (O[1].t = "e", O[1].v = 15) : R === 0 && j === 3489660928 ? (O[1].t = "e", O[1].v = 42) : O[1].v = 0, O;
    var te = re & 32768;
    return re = (re & 32767) - 16446, O[1].v = (1 - te * 2) * (j * Math.pow(2, re + 32) + R * Math.pow(2, re)), O;
  }
  function z(C, P, O, R) {
    var j = G(14);
    if (j.write_shift(2, C), j.write_shift(1, O), j.write_shift(1, P), R == 0)
      return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
    var re = 0, te = 0, Q = 0, Z = 0;
    return R < 0 && (re = 1, R = -R), te = Math.log2(R) | 0, R /= Math.pow(2, te - 31), Z = R >>> 0, (Z & 2147483648) == 0 && (R /= 2, ++te, Z = R >>> 0), R -= Z, Z |= 2147483648, Z >>>= 0, R *= Math.pow(2, 32), Q = R >>> 0, j.write_shift(4, Q), j.write_shift(4, Z), te += 16383 + (re ? 32768 : 0), j.write_shift(2, te), j;
  }
  function X(C, P) {
    var O = I(C);
    return C.l += P - 14, O;
  }
  function L(C, P) {
    var O = b(C), R = C.read_shift(4);
    return O[1].v = R >> 6, O;
  }
  function J(C, P) {
    var O = b(C), R = C.read_shift(8, "f");
    return O[1].v = R, O;
  }
  function le(C, P) {
    var O = J(C);
    return C.l += P - 10, O;
  }
  function ie(C, P) {
    return C[C.l + P - 1] == 0 ? C.read_shift(P, "cstr") : "";
  }
  function he(C, P) {
    var O = C[C.l++];
    O > P - 1 && (O = P - 1);
    for (var R = ""; R.length < O; )
      R += String.fromCharCode(C[C.l++]);
    return R;
  }
  function ce(C, P, O) {
    if (!(!O.qpro || P < 21)) {
      var R = C.read_shift(1);
      C.l += 17, C.l += 1, C.l += 2;
      var j = C.read_shift(P - 21, "cstr");
      return [R, j];
    }
  }
  function Pe(C, P) {
    for (var O = {}, R = C.l + P; C.l < R; ) {
      var j = C.read_shift(2);
      if (j == 14e3) {
        for (O[j] = [0, ""], O[j][0] = C.read_shift(2); C[C.l]; )
          O[j][1] += String.fromCharCode(C[C.l]), C.l++;
        C.l++;
      }
    }
    return O;
  }
  function V(C, P) {
    var O = G(5 + C.length);
    O.write_shift(2, 14e3), O.write_shift(2, P);
    for (var R = 0; R < C.length; ++R) {
      var j = C.charCodeAt(R);
      O[O.l++] = j > 127 ? 95 : j;
    }
    return O[O.l++] = 0, O;
  }
  var ve = {
    0: { n: "BOF", f: tr },
    1: { n: "EOF" },
    2: { n: "CALCMODE" },
    3: { n: "CALCORDER" },
    4: { n: "SPLIT" },
    5: { n: "SYNC" },
    6: { n: "RANGE", f },
    7: { n: "WINDOW1" },
    8: { n: "COLW1" },
    9: { n: "WINTWO" },
    10: { n: "COLW2" },
    11: { n: "NAME" },
    12: { n: "BLANK" },
    13: { n: "INTEGER", f: x },
    14: { n: "NUMBER", f: v },
    15: { n: "LABEL", f: l },
    16: { n: "FORMULA", f: p },
    24: { n: "TABLE" },
    25: { n: "ORANGE" },
    26: { n: "PRANGE" },
    27: { n: "SRANGE" },
    28: { n: "FRANGE" },
    29: { n: "KRANGE1" },
    32: { n: "HRANGE" },
    35: { n: "KRANGE2" },
    36: { n: "PROTEC" },
    37: { n: "FOOTER" },
    38: { n: "HEADER" },
    39: { n: "SETUP" },
    40: { n: "MARGINS" },
    41: { n: "LABELFMT" },
    42: { n: "TITLES" },
    43: { n: "SHEETJS" },
    45: { n: "GRAPH" },
    46: { n: "NGRAPH" },
    47: { n: "CALCCOUNT" },
    48: { n: "UNFORMATTED" },
    49: { n: "CURSORW12" },
    50: { n: "WINDOW" },
    51: { n: "STRING", f: l },
    55: { n: "PASSWORD" },
    56: { n: "LOCKED" },
    60: { n: "QUERY" },
    61: { n: "QUERYNAME" },
    62: { n: "PRINT" },
    63: { n: "PRINTNAME" },
    64: { n: "GRAPH2" },
    65: { n: "GRAPHNAME" },
    66: { n: "ZOOM" },
    67: { n: "SYMSPLIT" },
    68: { n: "NSROWS" },
    69: { n: "NSCOLS" },
    70: { n: "RULER" },
    71: { n: "NNAME" },
    72: { n: "ACOMM" },
    73: { n: "AMACRO" },
    74: { n: "PARSE" },
    102: { n: "PRANGES??" },
    103: { n: "RRANGES??" },
    104: { n: "FNAME??" },
    105: { n: "MRANGES??" },
    204: { n: "SHEETNAMECS", f: ie },
    222: { n: "SHEETNAMELP", f: he },
    65535: { n: "" }
  }, ge = {
    0: { n: "BOF" },
    1: { n: "EOF" },
    2: { n: "PASSWORD" },
    3: { n: "CALCSET" },
    4: { n: "WINDOWSET" },
    5: { n: "SHEETCELLPTR" },
    6: { n: "SHEETLAYOUT" },
    7: { n: "COLUMNWIDTH" },
    8: { n: "HIDDENCOLUMN" },
    9: { n: "USERRANGE" },
    10: { n: "SYSTEMRANGE" },
    11: { n: "ZEROFORCE" },
    12: { n: "SORTKEYDIR" },
    13: { n: "FILESEAL" },
    14: { n: "DATAFILLNUMS" },
    15: { n: "PRINTMAIN" },
    16: { n: "PRINTSTRING" },
    17: { n: "GRAPHMAIN" },
    18: { n: "GRAPHSTRING" },
    19: { n: "??" },
    20: { n: "ERRCELL" },
    21: { n: "NACELL" },
    22: { n: "LABEL16", f: N },
    23: { n: "NUMBER17", f: I },
    24: { n: "NUMBER18", f: B },
    25: { n: "FORMULA19", f: X },
    26: { n: "FORMULA1A" },
    27: { n: "XFORMAT", f: Pe },
    28: { n: "DTLABELMISC" },
    29: { n: "DTLABELCELL" },
    30: { n: "GRAPHWINDOW" },
    31: { n: "CPA" },
    32: { n: "LPLAUTO" },
    33: { n: "QUERY" },
    34: { n: "HIDDENSHEET" },
    35: { n: "??" },
    37: { n: "NUMBER25", f: L },
    38: { n: "??" },
    39: { n: "NUMBER27", f: J },
    40: { n: "FORMULA28", f: le },
    142: { n: "??" },
    147: { n: "??" },
    150: { n: "??" },
    151: { n: "??" },
    152: { n: "??" },
    153: { n: "??" },
    154: { n: "??" },
    155: { n: "??" },
    156: { n: "??" },
    163: { n: "??" },
    174: { n: "??" },
    175: { n: "??" },
    176: { n: "??" },
    177: { n: "??" },
    184: { n: "??" },
    185: { n: "??" },
    186: { n: "??" },
    187: { n: "??" },
    188: { n: "??" },
    195: { n: "??" },
    201: { n: "??" },
    204: { n: "SHEETNAMECS", f: ie },
    205: { n: "??" },
    206: { n: "??" },
    207: { n: "??" },
    208: { n: "??" },
    256: { n: "??" },
    259: { n: "??" },
    260: { n: "??" },
    261: { n: "??" },
    262: { n: "??" },
    263: { n: "??" },
    265: { n: "??" },
    266: { n: "??" },
    267: { n: "??" },
    268: { n: "??" },
    270: { n: "??" },
    271: { n: "??" },
    384: { n: "??" },
    389: { n: "??" },
    390: { n: "??" },
    393: { n: "??" },
    396: { n: "??" },
    512: { n: "??" },
    514: { n: "??" },
    513: { n: "??" },
    516: { n: "??" },
    517: { n: "??" },
    640: { n: "??" },
    641: { n: "??" },
    642: { n: "??" },
    643: { n: "??" },
    644: { n: "??" },
    645: { n: "??" },
    646: { n: "??" },
    647: { n: "??" },
    648: { n: "??" },
    658: { n: "??" },
    659: { n: "??" },
    660: { n: "??" },
    661: { n: "??" },
    662: { n: "??" },
    665: { n: "??" },
    666: { n: "??" },
    768: { n: "??" },
    772: { n: "??" },
    1537: { n: "SHEETINFOQP", f: ce },
    1600: { n: "??" },
    1602: { n: "??" },
    1793: { n: "??" },
    1794: { n: "??" },
    1795: { n: "??" },
    1796: { n: "??" },
    1920: { n: "??" },
    2048: { n: "??" },
    2049: { n: "??" },
    2052: { n: "??" },
    2688: { n: "??" },
    10998: { n: "??" },
    12849: { n: "??" },
    28233: { n: "??" },
    28484: { n: "??" },
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: a,
    book_to_wk3: n,
    to_workbook: t
  };
}();
function bh(e) {
  var t = {}, r = e.match(Er), a = 0, n = !1;
  if (r)
    for (; a != r.length; ++a) {
      var i = me(r[a]);
      switch (i[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!i.val)
            break;
        case "<shadow>":
        case "<shadow/>":
          t.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (i.val == "1")
            break;
          t.cp = un[parseInt(i.val, 10)];
          break;
        case "<outline":
          if (!i.val)
            break;
        case "<outline>":
        case "<outline/>":
          t.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          t.name = i.val;
          break;
        case "<sz":
          t.sz = i.val;
          break;
        case "<strike":
          if (!i.val)
            break;
        case "<strike>":
        case "<strike/>":
          t.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!i.val)
            break;
          switch (i.val) {
            case "double":
              t.uval = "double";
              break;
            case "singleAccounting":
              t.uval = "single-accounting";
              break;
            case "doubleAccounting":
              t.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          t.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (i.val == "0")
            break;
        case "<b>":
        case "<b/>":
          t.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (i.val == "0")
            break;
        case "<i>":
        case "<i/>":
          t.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          i.rgb && (t.color = i.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          t.family = i.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          t.valign = i.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (i[0].charCodeAt(1) !== 47 && !n)
            throw new Error("Unrecognized rich format " + i[0]);
      }
    }
  return t;
}
var Ph = /* @__PURE__ */ function() {
  var e = ba("t"), t = ba("rPr");
  function r(i) {
    var s = i.match(e);
    if (!s)
      return { t: "s", v: "" };
    var f = { t: "s", v: Oe(s[1]) }, c = i.match(t);
    return c && (f.s = bh(c[1])), f;
  }
  var a = /<(?:\w+:)?r>/g, n = /<\/(?:\w+:)?r>/;
  return function(s) {
    return s.replace(a, "").split(n).map(r).filter(function(f) {
      return f.v;
    });
  };
}(), Lh = /* @__PURE__ */ function() {
  var t = /(\r\n|\n)/g;
  function r(n, i, s) {
    var f = [];
    n.u && f.push("text-decoration: underline;"), n.uval && f.push("text-underline-style:" + n.uval + ";"), n.sz && f.push("font-size:" + n.sz + "pt;"), n.outline && f.push("text-effect: outline;"), n.shadow && f.push("text-shadow: auto;"), i.push('<span style="' + f.join("") + '">'), n.b && (i.push("<b>"), s.push("</b>")), n.i && (i.push("<i>"), s.push("</i>")), n.strike && (i.push("<s>"), s.push("</s>"));
    var c = n.valign || "";
    return c == "superscript" || c == "super" ? c = "sup" : c == "subscript" && (c = "sub"), c != "" && (i.push("<" + c + ">"), s.push("</" + c + ">")), s.push("</span>"), n;
  }
  function a(n) {
    var i = [[], n.v, []];
    return n.v ? (n.s && r(n.s, i[0], i[2]), i[0].join("") + i[1].replace(t, "<br/>") + i[2].join("")) : "";
  }
  return function(i) {
    return i.map(a).join("");
  };
}(), Bh = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, Mh = /<(?:\w+:)?r>/, Uh = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function Bn(e, t) {
  var r = t ? t.cellHTML : !0, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Oe(Le(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), a.r = Le(e), r && (a.h = _n(a.t))) : e.match(Mh) && (a.r = Le(e), a.t = Oe(Le((e.replace(Uh, "").match(Bh) || []).join("").replace(Er, ""))), r && (a.h = Lh(Ph(a.r)))), a) : { t: "" };
}
var Wh = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, Hh = /<(?:\w+:)?(?:si|sstItem)>/g, Vh = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Xh(e, t) {
  var r = [], a = "";
  if (!e)
    return r;
  var n = e.match(Wh);
  if (n) {
    a = n[2].replace(Hh, "").split(Vh);
    for (var i = 0; i != a.length; ++i) {
      var s = Bn(a[i].trim(), t);
      s != null && (r[r.length] = s);
    }
    n = me(n[1]), r.Count = n.count, r.Unique = n.uniqueCount;
  }
  return r;
}
var Gh = /^\s|\s$|[\t\n\r]/;
function Ff(e, t) {
  if (!t.bookSST)
    return "";
  var r = [Qe];
  r[r.length] = ae("sst", null, {
    xmlns: zt[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var a = 0; a != e.length; ++a)
    if (e[a] != null) {
      var n = e[a], i = "<si>";
      n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), n.t.match(Gh) && (i += ' xml:space="preserve"'), i += ">" + be(n.t) + "</t>"), i += "</si>", r[r.length] = i;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function zh(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function $h(e, t) {
  var r = [], a = !1;
  return dt(e, function(i, s, f) {
    switch (f) {
      case 159:
        r.Count = i[0], r.Unique = i[1];
        break;
      case 19:
        r.push(i);
        break;
      case 160:
        return !0;
      case 35:
        a = !0;
        break;
      case 36:
        a = !1;
        break;
      default:
        if (s.T, !a || t.WTF)
          throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), r;
}
function Kh(e, t) {
  return t || (t = G(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var jh = nl;
function Yh(e) {
  var t = Cr();
  Y(t, 159, Kh(e));
  for (var r = 0; r < e.length; ++r)
    Y(t, 19, jh(e[r]));
  return Y(t, 160), t.end();
}
function yf(e) {
  if (typeof De < "u")
    return De.utils.encode(Bt, e);
  for (var t = [], r = e.split(""), a = 0; a < r.length; ++a)
    t[a] = r[a].charCodeAt(0);
  return t;
}
function ht(e, t) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), t >= 4 && (e.l += t - 4), r;
}
function Jh(e) {
  var t = {};
  return t.id = e.read_shift(0, "lpp4"), t.R = ht(e, 4), t.U = ht(e, 4), t.W = ht(e, 4), t;
}
function Zh(e) {
  for (var t = e.read_shift(4), r = e.l + t - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; )
    i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != r)
    throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return a;
}
function qh(e) {
  var t = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    t.push(Zh(e));
  return t;
}
function Qh(e) {
  var t = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    t.push(e.read_shift(0, "lpp4"));
  return t;
}
function e1(e) {
  var t = {};
  return e.read_shift(4), e.l += 4, t.id = e.read_shift(0, "lpp4"), t.name = e.read_shift(0, "lpp4"), t.R = ht(e, 4), t.U = ht(e, 4), t.W = ht(e, 4), t;
}
function r1(e) {
  var t = e1(e);
  if (t.ename = e.read_shift(0, "8lpp4"), t.blksz = e.read_shift(4), t.cmode = e.read_shift(4), e.read_shift(4) != 4)
    throw new Error("Bad !Primary record");
  return t;
}
function Af(e, t) {
  var r = e.l + t, a = {};
  a.Flags = e.read_shift(4) & 63, e.l += 4, a.AlgID = e.read_shift(4);
  var n = !1;
  switch (a.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = a.Flags == 36;
      break;
    case 26625:
      n = a.Flags == 4;
      break;
    case 0:
      n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + a.AlgID;
  }
  if (!n)
    throw new Error("Encryption Flags/AlgID mismatch");
  return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, a;
}
function Cf(e, t) {
  var r = {}, a = e.l + t;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, a), e.l = a, r;
}
function t1(e) {
  var t = ht(e);
  switch (t.Minor) {
    case 2:
      return [t.Minor, a1(e)];
    case 3:
      return [t.Minor, n1()];
    case 4:
      return [t.Minor, i1(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + t.Minor);
}
function a1(e) {
  var t = e.read_shift(4);
  if ((t & 63) != 36)
    throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), a = Af(e, r), n = Cf(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function n1() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function i1(e) {
  var t = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), a = {};
  return r.replace(Er, function(i) {
    var s = me(i);
    switch (it(s[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        t.forEach(function(f) {
          a[f] = s[f];
        });
        break;
      case "<dataIntegrity":
        a.encryptedHmacKey = s.encryptedHmacKey, a.encryptedHmacValue = s.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        a.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        a.uri = s.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        a.encs.push(s);
        break;
      default:
        throw s[0];
    }
  }), a;
}
function s1(e, t) {
  var r = {}, a = r.EncryptionVersionInfo = ht(e, 4);
  if (t -= 4, a.Minor != 2)
    throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2)
    throw new Error("unrecognized major version code: " + a.Major);
  r.Flags = e.read_shift(4), t -= 4;
  var n = e.read_shift(4);
  return t -= 4, r.EncryptionHeader = Af(e, n), t -= n, r.EncryptionVerifier = Cf(e, t), r;
}
function f1(e) {
  var t = {}, r = t.EncryptionVersionInfo = ht(e, 4);
  if (r.Major != 1 || r.Minor != 1)
    throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return t.Salt = e.read_shift(16), t.EncryptedVerifier = e.read_shift(16), t.EncryptedVerifierHash = e.read_shift(16), t;
}
function Mn(e) {
  var t = 0, r, a = yf(e), n = a.length + 1, i, s, f, c, o;
  for (r = Tt(n), r[0] = a.length, i = 1; i != n; ++i)
    r[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i)
    s = r[i], f = (t & 16384) === 0 ? 0 : 1, c = t << 1 & 32767, o = f | c, t = o ^ s;
  return t ^ 52811;
}
var Df = /* @__PURE__ */ function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], t = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = t[s.length - 1], c = 104, o = s.length - 1; o >= 0; --o)
      for (var l = s[o], u = 0; u != 7; ++u)
        l & 64 && (f ^= r[c]), l *= 2, --c;
    return f;
  };
  return function(s) {
    for (var f = yf(s), c = i(f), o = f.length, l = Tt(16), u = 0; u != 16; ++u)
      l[u] = 0;
    var x, d, v;
    for ((o & 1) === 1 && (x = c >> 8, l[o] = n(e[0], x), --o, x = c & 255, d = f[f.length - 1], l[o] = n(d, x)); o > 0; )
      --o, x = c >> 8, l[o] = n(f[o], x), --o, x = c & 255, l[o] = n(f[o], x);
    for (o = 15, v = 15 - f.length; v > 0; )
      x = c >> 8, l[o] = n(e[v], x), --o, --v, x = c & 255, l[o] = n(f[o], x), --o, --v;
    return l;
  };
}(), c1 = function(e, t, r, a, n) {
  n || (n = t), a || (a = Df(e));
  var i, s;
  for (i = 0; i != t.length; ++i)
    s = t[i], s ^= a[r], s = (s >> 5 | s << 3) & 255, n[i] = s, ++r;
  return [n, r, a];
}, o1 = function(e) {
  var t = 0, r = Df(e);
  return function(a) {
    var n = c1("", a, t, r);
    return t = n[1], n[0];
  };
};
function l1(e, t, r, a) {
  var n = { key: tr(e), verificationBytes: tr(e) };
  return r.password && (n.verifier = Mn(r.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = o1(r.password)), n;
}
function u1(e, t, r) {
  var a = r || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = f1(e) : a.Data = s1(e, t), a;
}
function h1(e, t, r) {
  var a = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? u1(e, t - 2, a) : l1(e, r.biff >= 8 ? t : t - 2, r, a), a;
}
var Of = /* @__PURE__ */ function() {
  function e(n, i) {
    switch (i.type) {
      case "base64":
        return t(br(n), i);
      case "binary":
        return t(n, i);
      case "buffer":
        return t(Te && Buffer.isBuffer(n) ? n.toString("binary") : At(n), i);
      case "array":
        return t(Ut(n), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(n, i) {
    var s = i || {}, f = s.dense ? [] : {}, c = n.match(/\\trowd.*?\\row\b/g);
    if (!c.length)
      throw new Error("RTF missing table");
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: c.length - 1 } };
    return c.forEach(function(l, u) {
      Array.isArray(f) && (f[u] = []);
      for (var x = /\\\w+\b/g, d = 0, v, h = -1; v = x.exec(l); ) {
        switch (v[0]) {
          case "\\cell":
            var p = l.slice(d, x.lastIndex - v[0].length);
            if (p[0] == " " && (p = p.slice(1)), ++h, p.length) {
              var w = { v: p, t: "s" };
              Array.isArray(f) ? f[u][h] = w : f[pe({ r: u, c: h })] = w;
            }
            break;
        }
        d = x.lastIndex;
      }
      h > o.e.c && (o.e.c = h);
    }), f["!ref"] = we(o), f;
  }
  function r(n, i) {
    return Ct(e(n, i), i);
  }
  function a(n) {
    for (var i = ["{\\rtf1\\ansi"], s = Ae(n["!ref"]), f, c = Array.isArray(n), o = s.s.r; o <= s.e.r; ++o) {
      i.push("\\trowd\\trautofit1");
      for (var l = s.s.c; l <= s.e.c; ++l)
        i.push("\\cellx" + (l + 1));
      for (i.push("\\pard\\intbl"), l = s.s.c; l <= s.e.c; ++l) {
        var u = pe({ r: o, c: l });
        f = c ? (n[o] || [])[l] : n[u], !(!f || f.v == null && (!f.f || f.F)) && (i.push(" " + (f.w || (nt(f), f.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: a
  };
}();
function x1(e) {
  var t = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)];
}
function Ma(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
function d1(e) {
  var t = e[0] / 255, r = e[1] / 255, a = e[2] / 255, n = Math.max(t, r, a), i = Math.min(t, r, a), s = n - i;
  if (s === 0)
    return [0, 0, t];
  var f = 0, c = 0, o = n + i;
  switch (c = s / (o > 1 ? 2 - o : o), n) {
    case t:
      f = ((r - a) / s + 6) % 6;
      break;
    case r:
      f = (a - t) / s + 2;
      break;
    case a:
      f = (t - r) / s + 4;
      break;
  }
  return [f / 6, c, o / 2];
}
function v1(e) {
  var t = e[0], r = e[1], a = e[2], n = r * 2 * (a < 0.5 ? a : 1 - a), i = a - n / 2, s = [i, i, i], f = 6 * t, c;
  if (r !== 0)
    switch (f | 0) {
      case 0:
      case 6:
        c = n * f, s[0] += n, s[1] += c;
        break;
      case 1:
        c = n * (2 - f), s[0] += c, s[1] += n;
        break;
      case 2:
        c = n * (f - 2), s[1] += n, s[2] += c;
        break;
      case 3:
        c = n * (4 - f), s[1] += c, s[2] += n;
        break;
      case 4:
        c = n * (f - 4), s[2] += n, s[0] += c;
        break;
      case 5:
        c = n * (6 - f), s[2] += c, s[0] += n;
        break;
    }
  for (var o = 0; o != 3; ++o)
    s[o] = Math.round(s[o] * 255);
  return s;
}
function k0(e, t) {
  if (t === 0)
    return e;
  var r = d1(x1(e));
  return t < 0 ? r[2] = r[2] * (1 + t) : r[2] = 1 - (1 - r[2]) * (1 - t), Ma(v1(r));
}
var If = 6, p1 = 15, m1 = 1, mr = If;
function Ua(e) {
  return Math.floor((e + Math.round(128 / mr) / 256) * mr);
}
function Wa(e) {
  return Math.floor((e - 5) / mr * 100 + 0.5) / 100;
}
function E0(e) {
  return Math.round((e * mr + 5) / mr * 256) / 256;
}
function V0(e) {
  return E0(Wa(Ua(e)));
}
function Un(e) {
  var t = Math.abs(e - V0(e)), r = mr;
  if (t > 5e-3)
    for (mr = m1; mr < p1; ++mr)
      Math.abs(e - V0(e)) <= t && (t = Math.abs(e - V0(e)), r = mr);
  mr = r;
}
function St(e) {
  e.width ? (e.wpx = Ua(e.width), e.wch = Wa(e.wpx), e.MDW = mr) : e.wpx ? (e.wch = Wa(e.wpx), e.width = E0(e.wch), e.MDW = mr) : typeof e.wch == "number" && (e.width = E0(e.wch), e.wpx = Ua(e.width), e.MDW = mr), e.customWidth && delete e.customWidth;
}
var g1 = 96, Rf = g1;
function Ha(e) {
  return e * 96 / Rf;
}
function oa(e) {
  return e * Rf / 96;
}
var _1 = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function w1(e, t, r, a) {
  t.Borders = [];
  var n = {}, i = !1;
  (e[0].match(Er) || []).forEach(function(s) {
    var f = me(s);
    switch (it(f[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        n = {}, f.diagonalUp && (n.diagonalUp = We(f.diagonalUp)), f.diagonalDown && (n.diagonalDown = We(f.diagonalDown)), t.Borders.push(n);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in borders");
    }
  });
}
function k1(e, t, r, a) {
  t.Fills = [];
  var n = {}, i = !1;
  (e[0].match(Er) || []).forEach(function(s) {
    var f = me(s);
    switch (it(f[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        n = {}, t.Fills.push(n);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        t.Fills.push(n), n = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        f.patternType && (n.patternType = f.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        n.bgColor || (n.bgColor = {}), f.indexed && (n.bgColor.indexed = parseInt(f.indexed, 10)), f.theme && (n.bgColor.theme = parseInt(f.theme, 10)), f.tint && (n.bgColor.tint = parseFloat(f.tint)), f.rgb && (n.bgColor.rgb = f.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        n.fgColor || (n.fgColor = {}), f.theme && (n.fgColor.theme = parseInt(f.theme, 10)), f.tint && (n.fgColor.tint = parseFloat(f.tint)), f.rgb != null && (n.fgColor.rgb = f.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in fills");
    }
  });
}
function E1(e, t, r, a) {
  t.Fonts = [];
  var n = {}, i = !1;
  (e[0].match(Er) || []).forEach(function(s) {
    var f = me(s);
    switch (it(f[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        t.Fonts.push(n), n = {};
        break;
      case "<name":
        f.val && (n.name = Le(f.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = f.val ? We(f.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "<i":
        n.italic = f.val ? We(f.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "<u":
        switch (f.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "<strike":
        n.strike = f.val ? We(f.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "<outline":
        n.outline = f.val ? We(f.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "<shadow":
        n.shadow = f.val ? We(f.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "<condense":
        n.condense = f.val ? We(f.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "<extend":
        n.extend = f.val ? We(f.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "<sz":
        f.val && (n.sz = +f.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        f.val && (n.vertAlign = f.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        f.val && (n.family = parseInt(f.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        f.val && (n.scheme = f.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (f.val == "1")
          break;
        f.codepage = un[parseInt(f.val, 10)];
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = We(f.auto)), f.rgb)
          n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var c = Nt[n.color.index];
          n.color.index == 81 && (c = Nt[1]), c || (c = Nt[1]), n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
        } else
          f.theme && (n.color.theme = parseInt(f.theme, 10), f.tint && (n.color.tint = parseFloat(f.tint)), f.theme && r.themeElements && r.themeElements.clrScheme && (n.color.rgb = k0(r.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        i = !0;
        break;
      case "</AlternateContent>":
        i = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in fonts");
    }
  });
}
function T1(e, t, r) {
  t.NumberFmt = [];
  for (var a = Ye(de), n = 0; n < a.length; ++n)
    t.NumberFmt[a[n]] = de[a[n]];
  var i = e[0].match(Er);
  if (!!i)
    for (n = 0; n < i.length; ++n) {
      var s = me(i[n]);
      switch (it(s[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var f = Oe(Le(s.formatCode)), c = parseInt(s.numFmtId, 10);
            if (t.NumberFmt[c] = f, c > 0) {
              if (c > 392) {
                for (c = 392; c > 60 && t.NumberFmt[c] != null; --c)
                  ;
                t.NumberFmt[c] = f;
              }
              at(f, c);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF)
            throw new Error("unrecognized " + s[0] + " in numFmts");
      }
    }
}
function S1(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(r) {
    for (var a = r[0]; a <= r[1]; ++a)
      e[a] != null && (t[t.length] = ae("numFmt", null, { numFmtId: a, formatCode: be(e[a]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = ae("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
var f0 = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], c0 = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function F1(e, t, r) {
  t.CellXf = [];
  var a, n = !1;
  (e[0].match(Er) || []).forEach(function(i) {
    var s = me(i), f = 0;
    switch (it(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (a = s, delete a[0], f = 0; f < f0.length; ++f)
          a[f0[f]] && (a[f0[f]] = parseInt(a[f0[f]], 10));
        for (f = 0; f < c0.length; ++f)
          a[c0[f]] && (a[c0[f]] = We(a[c0[f]]));
        if (t.NumberFmt && a.numFmtId > 392) {
          for (f = 392; f > 60; --f)
            if (t.NumberFmt[a.numFmtId] == t.NumberFmt[f]) {
              a.numFmtId = f;
              break;
            }
        }
        t.CellXf.push(a);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var c = {};
        s.vertical && (c.vertical = s.vertical), s.horizontal && (c.horizontal = s.horizontal), s.textRotation != null && (c.textRotation = s.textRotation), s.indent && (c.indent = s.indent), s.wrapText && (c.wrapText = We(s.wrapText)), a.alignment = c;
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (r && r.WTF && !n)
          throw new Error("unrecognized " + s[0] + " in cellXfs");
    }
  });
}
function y1(e) {
  var t = [];
  return t[t.length] = ae("cellXfs", null), e.forEach(function(r) {
    t[t.length] = ae("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = ae("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
var A1 = /* @__PURE__ */ function() {
  var t = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, a = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, n = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(f, c, o) {
    var l = {};
    if (!f)
      return l;
    f = f.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var u;
    return (u = f.match(t)) && T1(u, l, o), (u = f.match(n)) && E1(u, l, c, o), (u = f.match(a)) && k1(u, l, c, o), (u = f.match(i)) && w1(u, l, c, o), (u = f.match(r)) && F1(u, l, o), l;
  };
}();
function Nf(e, t) {
  var r = [Qe, ae("styleSheet", null, {
    xmlns: zt[0],
    "xmlns:vt": nr.vt
  })], a;
  return e.SSF && (a = S1(e.SSF)) != null && (r[r.length] = a), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = y1(t.cellXfs)) && (r[r.length] = a), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function C1(e, t) {
  var r = e.read_shift(2), a = wr(e);
  return [r, a];
}
function D1(e, t, r) {
  r || (r = G(6 + 4 * t.length)), r.write_shift(2, e), or(t, r);
  var a = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), a;
}
function O1(e, t, r) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = ul(e);
  n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (a.bold = 1), e.read_shift(2)) {
    case 1:
      a.vertAlign = "superscript";
      break;
    case 2:
      a.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (a.underline = s);
  var f = e.read_shift(1);
  f > 0 && (a.family = f);
  var c = e.read_shift(1);
  switch (c > 0 && (a.charset = c), e.l++, a.color = ll(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = wr(e), a;
}
function I1(e, t) {
  t || (t = G(25 + 4 * 32)), t.write_shift(2, e.sz * 20), hl(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), g0(e.color, t);
  var a = 0;
  return e.scheme == "major" && (a = 1), e.scheme == "minor" && (a = 2), t.write_shift(1, a), or(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var R1 = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], X0, N1 = kr;
function Yi(e, t) {
  t || (t = G(4 * 3 + 8 * 7 + 16 * 1)), X0 || (X0 = y0(R1));
  var r = X0[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var a = 0;
  if (r != 40)
    for (g0({ auto: 1 }, t), g0({ auto: 1 }, t); a < 12; ++a)
      t.write_shift(4, 0);
  else {
    for (; a < 4; ++a)
      t.write_shift(4, 0);
    for (; a < 12; ++a)
      t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function b1(e, t) {
  var r = e.l + t, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = r, { ixfe: a, numFmtId: n };
}
function bf(e, t, r) {
  r || (r = G(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var a = 0;
  return r.write_shift(1, a), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function _a(e, t) {
  return t || (t = G(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var P1 = kr;
function L1(e, t) {
  return t || (t = G(51)), t.write_shift(1, 0), _a(null, t), _a(null, t), _a(null, t), _a(null, t), _a(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function B1(e, t) {
  return t || (t = G(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), m0(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function M1(e, t, r) {
  var a = G(2052);
  return a.write_shift(4, e), m0(t, a), m0(r, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function U1(e, t, r) {
  var a = {};
  a.NumberFmt = [];
  for (var n in de)
    a.NumberFmt[n] = de[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = !1;
  return dt(e, function(c, o, l) {
    switch (l) {
      case 44:
        a.NumberFmt[c[0]] = c[1], at(c[1], c[0]);
        break;
      case 43:
        a.Fonts.push(c), c.color.theme != null && t && t.themeElements && t.themeElements.clrScheme && (c.color.rgb = k0(t.themeElements.clrScheme[c.color.theme].rgb, c.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        i[i.length - 1] == 617 && a.CellXf.push(c);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        i.push(l), s = !0;
        break;
      case 38:
        i.pop(), s = !1;
        break;
      default:
        if (o.T > 0)
          i.push(l);
        else if (o.T < 0)
          i.pop();
        else if (!s || r.WTF && i[i.length - 1] != 37)
          throw new Error("Unexpected record 0x" + l.toString(16));
    }
  }), a;
}
function W1(e, t) {
  if (!!t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n)
        t[n] != null && ++r;
    }), r != 0 && (Y(e, 615, Jr(r)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n)
        t[n] != null && Y(e, 44, D1(n, t[n]));
    }), Y(e, 616));
  }
}
function H1(e) {
  var t = 1;
  Y(e, 611, Jr(t)), Y(e, 43, I1({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  })), Y(e, 612);
}
function V1(e) {
  var t = 2;
  Y(e, 603, Jr(t)), Y(e, 45, Yi({ patternType: "none" })), Y(e, 45, Yi({ patternType: "gray125" })), Y(e, 604);
}
function X1(e) {
  var t = 1;
  Y(e, 613, Jr(t)), Y(e, 46, L1()), Y(e, 614);
}
function G1(e) {
  var t = 1;
  Y(e, 626, Jr(t)), Y(e, 47, bf({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535)), Y(e, 627);
}
function z1(e, t) {
  Y(e, 617, Jr(t.length)), t.forEach(function(r) {
    Y(e, 47, bf(r, 0));
  }), Y(e, 618);
}
function $1(e) {
  var t = 1;
  Y(e, 619, Jr(t)), Y(e, 48, B1({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  })), Y(e, 620);
}
function K1(e) {
  var t = 0;
  Y(e, 505, Jr(t)), Y(e, 506);
}
function j1(e) {
  var t = 0;
  Y(e, 508, M1(t, "TableStyleMedium9", "PivotStyleMedium4")), Y(e, 509);
}
function Y1(e, t) {
  var r = Cr();
  return Y(r, 278), W1(r, e.SSF), H1(r), V1(r), X1(r), G1(r), z1(r, t.cellXfs), $1(r), K1(r), j1(r), Y(r, 279), r.end();
}
var J1 = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function Z1(e, t, r) {
  t.themeElements.clrScheme = [];
  var a = {};
  (e[0].match(Er) || []).forEach(function(n) {
    var i = me(n);
    switch (i[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        a.rgb = i.val;
        break;
      case "<a:sysClr":
        a.rgb = i.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        i[0].charAt(1) === "/" ? (t.themeElements.clrScheme[J1.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (r && r.WTF)
          throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function q1() {
}
function Q1() {
}
var ex = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, rx = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, tx = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function ax(e, t, r) {
  t.themeElements = {};
  var a;
  [
    ["clrScheme", ex, Z1],
    ["fontScheme", rx, q1],
    ["fmtScheme", tx, Q1]
  ].forEach(function(n) {
    if (!(a = e.match(n[1])))
      throw new Error(n[0] + " not found in themeElements");
    n[2](a, t, r);
  });
}
var nx = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function Pf(e, t) {
  (!e || e.length === 0) && (e = Wn());
  var r, a = {};
  if (!(r = e.match(nx)))
    throw new Error("themeElements not found in theme");
  return ax(r[0], a, t), a.raw = e, a;
}
function Wn(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [Qe];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function ix(e, t, r) {
  var a = e.l + t, n = e.read_shift(4);
  if (n !== 124226) {
    if (!r.cellStyles) {
      e.l = a;
      return;
    }
    var i = e.slice(e.l);
    e.l = a;
    var s;
    try {
      s = Os(i, { type: "array" });
    } catch {
      return;
    }
    var f = Rr(s, "theme/theme/theme1.xml", !0);
    if (!!f)
      return Pf(f, r);
  }
}
function sx(e) {
  return e.read_shift(4);
}
function fx(e) {
  var t = {};
  switch (t.xclrType = e.read_shift(2), t.nTintShade = e.read_shift(2), t.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      t.xclrValue = cx(e, 4);
      break;
    case 2:
      t.xclrValue = df(e);
      break;
    case 3:
      t.xclrValue = sx(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, t;
}
function cx(e, t) {
  return kr(e, t);
}
function ox(e, t) {
  return kr(e, t);
}
function lx(e) {
  var t = e.read_shift(2), r = e.read_shift(2) - 4, a = [t];
  switch (t) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      a[1] = fx(e);
      break;
    case 6:
      a[1] = ox(e, r);
      break;
    case 14:
    case 15:
      a[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + t + " " + r);
  }
  return a;
}
function ux(e, t) {
  var r = e.l + t;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; )
    i.push(lx(e, r - e.l));
  return { ixfe: a, ext: i };
}
function hx(e, t) {
  t.forEach(function(r) {
    switch (r[0]) {
    }
  });
}
function xx(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: wr(e)
  };
}
function dx(e) {
  var t = G(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), or(e.name, t), t.slice(0, t.l);
}
function vx(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function px(e) {
  var t = G(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function mx(e, t) {
  var r = G(8 + 2 * t.length);
  return r.write_shift(4, e), or(t, r), r.slice(0, r.l);
}
function gx(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function _x(e, t) {
  var r = G(8);
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r;
}
function wx(e, t, r) {
  var a = { Types: [], Cell: [], Value: [] }, n = r || {}, i = [], s = !1, f = 2;
  return dt(e, function(c, o, l) {
    switch (l) {
      case 335:
        a.Types.push({ name: c.name });
        break;
      case 51:
        c.forEach(function(u) {
          f == 1 ? a.Cell.push({ type: a.Types[u[0] - 1].name, index: u[1] }) : f == 0 && a.Value.push({ type: a.Types[u[0] - 1].name, index: u[1] });
        });
        break;
      case 337:
        f = c ? 1 : 0;
        break;
      case 338:
        f = 2;
        break;
      case 35:
        i.push(l), s = !0;
        break;
      case 36:
        i.pop(), s = !1;
        break;
      default:
        if (!o.T) {
          if (!s || n.WTF && i[i.length - 1] != 35)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), a;
}
function kx() {
  var e = Cr();
  return Y(e, 332), Y(e, 334, Jr(1)), Y(e, 335, dx({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), Y(e, 336), Y(e, 339, mx(1, "XLDAPR")), Y(e, 52), Y(e, 35, Jr(514)), Y(e, 4096, Jr(0)), Y(e, 4097, Xr(1)), Y(e, 36), Y(e, 53), Y(e, 340), Y(e, 337, _x(1, !0)), Y(e, 51, px([[1, 0]])), Y(e, 338), Y(e, 333), e.end();
}
function Ex(e, t, r) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e)
    return a;
  var n = !1, i = 2, s;
  return e.replace(Er, function(f) {
    var c = me(f);
    switch (it(c[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        a.Types.push({ name: c.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var o = 0; o < a.Types.length; ++o)
          a.Types[o].name == c.name && (s = a.Types[o]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        i == 1 ? a.Cell.push({ type: a.Types[c.t - 1].name, index: +c.v }) : i == 0 && a.Value.push({ type: a.Types[c.t - 1].name, index: +c.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        i = 1;
        break;
      case "</cellMetadata>":
        i = 2;
        break;
      case "<valueMetadata":
        i = 0;
        break;
      case "</valueMetadata>":
        i = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      case "<rvb":
        if (!s)
          break;
        s.offsets || (s.offsets = []), s.offsets.push(+c.i);
        break;
      default:
        if (!n && r.WTF)
          throw new Error("unrecognized " + c[0] + " in metadata");
    }
    return f;
  }), a;
}
function Lf() {
  var e = [Qe];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function Tx(e) {
  var t = [];
  if (!e)
    return t;
  var r = 1;
  return (e.match(Er) || []).forEach(function(a) {
    var n = me(a);
    switch (n[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete n[0], n.i ? r = n.i : n.i = r, t.push(n);
        break;
    }
  }), t;
}
function Sx(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = pe(r);
  var a = e.read_shift(1);
  return a & 2 && (t.l = "1"), a & 8 && (t.a = "1"), t;
}
function Fx(e, t, r) {
  var a = [];
  return dt(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T)
          throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function yx(e, t, r, a) {
  if (!e)
    return e;
  var n = a || {}, i = !1;
  dt(e, function(f, c, o) {
    switch (o) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      default:
        if (!c.T) {
          if (!i || n.WTF)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }, n);
}
function Ax(e, t) {
  if (!e)
    return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return t["!id"][r].Target;
}
var ta = 1024;
function Bf(e, t) {
  for (var r = [21600, 21600], a = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), n = [
    ae("xml", null, { "xmlns:v": Or.v, "xmlns:o": Or.o, "xmlns:x": Or.x, "xmlns:mv": Or.mv }).replace(/\/>/, ">"),
    ae("o:shapelayout", ae("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    ae("v:shapetype", [
      ae("v:stroke", null, { joinstyle: "miter" }),
      ae("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: a })
  ]; ta < e * 1e3; )
    ta += 1e3;
  return t.forEach(function(i) {
    var s = ze(i[0]), f = { color2: "#BEFF82", type: "gradient" };
    f.type == "gradient" && (f.angle = "-180");
    var c = f.type == "gradient" ? ae("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, o = ae("v:fill", c, f), l = { on: "t", obscured: "t" };
    ++ta, n = n.concat([
      "<v:shape" + Pa({
        id: "_x0000_s" + ta,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (i[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      o,
      ae("v:shadow", null, l),
      ae("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      hr("x:Anchor", [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(",")),
      hr("x:AutoFill", "False"),
      hr("x:Row", String(s.r)),
      hr("x:Column", String(s.c)),
      i[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), n.push("</xml>"), n.join("");
}
function Ji(e, t, r, a) {
  var n = Array.isArray(e), i;
  t.forEach(function(s) {
    var f = ze(s.ref);
    if (n ? (e[f.r] || (e[f.r] = []), i = e[f.r][f.c]) : i = e[s.ref], !i) {
      i = { t: "z" }, n ? e[f.r][f.c] = i : e[s.ref] = i;
      var c = Ae(e["!ref"] || "BDWGO1000001:A1");
      c.s.r > f.r && (c.s.r = f.r), c.e.r < f.r && (c.e.r = f.r), c.s.c > f.c && (c.s.c = f.c), c.e.c < f.c && (c.e.c = f.c);
      var o = we(c);
      o !== e["!ref"] && (e["!ref"] = o);
    }
    i.c || (i.c = []);
    var l = { a: s.author, t: s.t, r: s.r, T: r };
    s.h && (l.h = s.h);
    for (var u = i.c.length - 1; u >= 0; --u) {
      if (!r && i.c[u].T)
        return;
      r && !i.c[u].T && i.c.splice(u, 1);
    }
    if (r && a) {
      for (u = 0; u < a.length; ++u)
        if (l.a == a[u].id) {
          l.a = a[u].name || l.a;
          break;
        }
    }
    i.c.push(l);
  });
}
function Cx(e, t) {
  if (e.match(/<(?:\w+:)?comments *\/>/))
    return [];
  var r = [], a = [], n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?author[^>]*>(.*)/);
      f && r.push(f[1]);
    }
  });
  var i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return i && i[1] && i[1].split(/<\/\w*:?comment>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?comment[^>]*>/);
      if (!!f) {
        var c = me(f[0]), o = { author: c.authorId && r[c.authorId] || "sheetjsghost", ref: c.ref, guid: c.guid }, l = ze(c.ref);
        if (!(t.sheetRows && t.sheetRows <= l.r)) {
          var u = s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), x = !!u && !!u[1] && Bn(u[1]) || { r: "", t: "", h: "" };
          o.r = x.r, x.r == "<t></t>" && (x.t = x.h = ""), o.t = (x.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), t.cellHTML && (o.h = x.h), a.push(o);
        }
      }
    }
  }), a;
}
function Mf(e) {
  var t = [Qe, ae("comments", null, { xmlns: zt[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = be(n.a);
      r.indexOf(i) == -1 && (r.push(i), t.push("<author>" + i + "</author>")), n.T && n.ID && r.indexOf("tc=" + n.ID) == -1 && (r.push("tc=" + n.ID), t.push("<author>tc=" + n.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(a) {
    var n = 0, i = [];
    if (a[1][0] && a[1][0].T && a[1][0].ID ? n = r.indexOf("tc=" + a[1][0].ID) : a[1].forEach(function(c) {
      c.a && (n = r.indexOf(be(c.a))), i.push(c.t || "");
    }), t.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>'), i.length <= 1)
      t.push(hr("t", be(i[0] || "")));
    else {
      for (var s = `Comment:
    ` + i[0] + `
`, f = 1; f < i.length; ++f)
        s += `Reply:
    ` + i[f] + `
`;
      t.push(hr("t", be(s)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Dx(e, t) {
  var r = [], a = !1, n = {}, i = 0;
  return e.replace(Er, function(f, c) {
    var o = me(f);
    switch (it(o[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        n = { author: o.personId, guid: o.id, ref: o.ref, T: 1 };
        break;
      case "</threadedComment>":
        n.t != null && r.push(n);
        break;
      case "<text>":
      case "<text":
        i = c + f.length;
        break;
      case "</text>":
        n.t = e.slice(i, c).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        a = !0;
        break;
      case "</mentions>":
        a = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + o[0] + " in threaded comments");
    }
    return f;
  }), r;
}
function Ox(e, t, r) {
  var a = [Qe, ae("ThreadedComments", null, { xmlns: nr.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var i = "";
    (n[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && t.indexOf(s.a) == -1 && t.push(s.a);
      var c = {
        ref: n[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      f == 0 ? i = c.id : c.parentId = i, s.ID = c.id, s.a && (c.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(s.a)).slice(-12) + "}"), a.push(ae("threadedComment", hr("text", s.t || ""), c));
    });
  }), a.push("</ThreadedComments>"), a.join("");
}
function Ix(e, t) {
  var r = [], a = !1;
  return e.replace(Er, function(i) {
    var s = me(i);
    switch (it(s[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        r.push({ name: s.displayname, id: s.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + s[0] + " in threaded comments");
    }
    return i;
  }), r;
}
function Rx(e) {
  var t = [Qe, ae("personList", null, {
    xmlns: nr.TCMNT,
    "xmlns:x": zt[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, a) {
    t.push(ae("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function Nx(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Yt(e);
  return t.rfx = r.s, t.ref = pe(r.s), e.l += 16, t;
}
function bx(e, t) {
  return t == null && (t = G(36)), t.write_shift(4, e[1].iauthor), xa(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Px = wr;
function Lx(e) {
  return or(e.slice(0, 54));
}
function Bx(e, t) {
  var r = [], a = [], n = {}, i = !1;
  return dt(e, function(f, c, o) {
    switch (o) {
      case 632:
        a.push(f);
        break;
      case 635:
        n = f;
        break;
      case 637:
        n.t = f.t, n.h = f.h, n.r = f.r;
        break;
      case 636:
        if (n.author = a[n.iauthor], delete n.iauthor, t.sheetRows && n.rfx && t.sheetRows <= n.rfx.r)
          break;
        n.t || (n.t = ""), delete n.rfx, r.push(n);
        break;
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!c.T) {
          if (!i || t.WTF)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }), r;
}
function Mx(e) {
  var t = Cr(), r = [];
  return Y(t, 628), Y(t, 630), e.forEach(function(a) {
    a[1].forEach(function(n) {
      r.indexOf(n.a) > -1 || (r.push(n.a.slice(0, 54)), Y(t, 632, Lx(n.a)));
    });
  }), Y(t, 631), Y(t, 633), e.forEach(function(a) {
    a[1].forEach(function(n) {
      n.iauthor = r.indexOf(n.a);
      var i = { s: ze(a[0]), e: ze(a[0]) };
      Y(t, 635, bx([i, n])), n.t && n.t.length > 0 && Y(t, 637, sl(n)), Y(t, 636), delete n.iauthor;
    });
  }), Y(t, 634), Y(t, 629), t.end();
}
var Ux = "application/vnd.ms-office.vbaProject";
function Wx(e) {
  var t = xe.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, a) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var n = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      xe.utils.cfb_add(t, n, e.FileIndex[a].content);
    }
  }), xe.write(t);
}
function Hx(e, t) {
  t.FullPaths.forEach(function(r, a) {
    if (a != 0) {
      var n = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && xe.utils.cfb_add(e, n, t.FileIndex[a].content);
    }
  });
}
var Uf = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function Vx() {
  return { "!type": "dialog" };
}
function Xx() {
  return { "!type": "dialog" };
}
function Gx() {
  return { "!type": "macro" };
}
function zx() {
  return { "!type": "macro" };
}
var ia = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(a, n, i, s) {
    var f = !1, c = !1;
    i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1)), s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1));
    var o = i.length > 0 ? parseInt(i, 10) | 0 : 0, l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? l += t.c : --l, c ? o += t.r : --o, n + (f ? "" : "$") + He(l) + (c ? "" : "$") + Ke(o);
  }
  return function(n, i) {
    return t = i, n.replace(e, r);
  };
}(), Hn = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, Vn = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(Hn, function(a, n, i, s, f, c) {
      var o = Cn(s) - (i ? 0 : r.c), l = An(c) - (f ? 0 : r.r), u = l == 0 ? "" : f ? l + 1 : "[" + l + "]", x = o == 0 ? "" : i ? o + 1 : "[" + o + "]";
      return n + "R" + u + "C" + x;
    });
  };
}();
function Wf(e, t) {
  return e.replace(Hn, function(r, a, n, i, s, f) {
    return a + (n == "$" ? n + i : He(Cn(i) + t.c)) + (s == "$" ? s + f : Ke(An(f) + t.r));
  });
}
function $x(e, t, r) {
  var a = yr(t), n = a.s, i = ze(r), s = { r: i.r - n.r, c: i.c - n.c };
  return Wf(e, s);
}
function Kx(e) {
  return e.length != 1;
}
function Zi(e) {
  return e.replace(/_xlfn\./g, "");
}
function er(e) {
  e.l += 1;
}
function Ft(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function Hf(e, t, r) {
  var a = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return Vf(e);
    r.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = Ft(e, 2), f = Ft(e, 2);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function Vf(e) {
  var t = Ft(e, 2), r = Ft(e, 2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: t[0], c: a, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: n, cRel: r[1], rRel: r[2] } };
}
function jx(e, t, r) {
  if (r.biff < 8)
    return Vf(e);
  var a = e.read_shift(r.biff == 12 ? 4 : 2), n = e.read_shift(r.biff == 12 ? 4 : 2), i = Ft(e, 2), s = Ft(e, 2);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function Xf(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return Yx(e);
  var a = e.read_shift(r && r.biff == 12 ? 4 : 2), n = Ft(e, 2);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function Yx(e) {
  var t = Ft(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function Jx(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function Zx(e, t, r) {
  var a = r && r.biff ? r.biff : 8;
  if (a >= 2 && a <= 5)
    return qx(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1)
    for (; n > 524287; )
      n -= 1048576;
  if (s == 1)
    for (; i > 8191; )
      i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function qx(e) {
  var t = e.read_shift(2), r = e.read_shift(1), a = (t & 32768) >> 15, n = (t & 16384) >> 14;
  return t &= 16383, a == 1 && t >= 8192 && (t = t - 16384), n == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: n, rRel: a };
}
function Qx(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = Hf(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [a, n];
}
function ed(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  var s = Hf(e, i, r);
  return [a, n, s];
}
function rd(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [a];
}
function td(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  return e.l += i, [a, n];
}
function ad(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = jx(e, t - 1, r);
  return [a, n];
}
function nd(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [a];
}
function qi(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function id(e, t, r) {
  e.l += 2;
  for (var a = e.read_shift(r && r.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i)
    n.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return n;
}
function sd(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function fd(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function cd(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function od(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [a];
}
function Gf(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function ld(e) {
  return e.read_shift(2), Gf(e);
}
function ud(e) {
  return e.read_shift(2), Gf(e);
}
function hd(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Xf(e, 0, r);
  return [a, n];
}
function xd(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Zx(e, 0, r);
  return [a, n];
}
function dd(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = Xf(e, 0, r);
  return [a, n, i];
}
function vd(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [gv[n], Kf[n], a];
}
function pd(e, t, r) {
  var a = e[e.l++], n = e.read_shift(1), i = r && r.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : md(e);
  return [n, (i[0] === 0 ? Kf : mv)[i[1]]];
}
function md(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function gd(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function _d(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function wd(e) {
  return e.l++, vt[e.read_shift(1)];
}
function kd(e) {
  return e.l++, e.read_shift(2);
}
function Ed(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Td(e) {
  return e.l++, gr(e);
}
function Sd(e, t, r) {
  return e.l++, ja(e, t - 1, r);
}
function Fd(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = qe(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = vt[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = gr(e);
      break;
    case 2:
      r[1] = Jt(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function yd(e, t, r) {
  for (var a = e.read_shift(r.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i)
    n.push((r.biff == 12 ? Yt : O0)(e));
  return n;
}
function Ad(e, t, r) {
  var a = 0, n = 0;
  r.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i)
    for (var f = 0; f != n; ++f)
      s[i][f] = Fd(e, r.biff);
  return s;
}
function Cd(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3, n = !r || r.biff >= 8 ? 4 : 2, i = e.read_shift(n);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [a, 0, i];
}
function Dd(e, t, r) {
  if (r.biff == 5)
    return Od(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function Od(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function Id(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Rd(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Nd(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [a];
}
function bd(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 4;
  if (r)
    switch (r.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return e.l += i, [a, n];
}
var Pd = kr, Ld = kr, Bd = kr;
function Ja(e, t, r) {
  return e.l += 2, [Jx(e)];
}
function Xn(e) {
  return e.l += 6, [];
}
var Md = Ja, Ud = Xn, Wd = Xn, Hd = Ja;
function zf(e) {
  return e.l += 2, [tr(e), e.read_shift(2) & 1];
}
var Vd = Ja, Xd = zf, Gd = Xn, zd = Ja, $d = Ja, Kd = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function jd(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = Kd[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: a, c: n, C: i };
}
function Yd(e) {
  return e.l += 2, [e.read_shift(4)];
}
function Jd(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Zd(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function qd(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function Qd(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function ev(e) {
  return e.l += 4, [0, 0];
}
var Qi = {
  1: { n: "PtgExp", f: _d },
  2: { n: "PtgTbl", f: Bd },
  3: { n: "PtgAdd", f: er },
  4: { n: "PtgSub", f: er },
  5: { n: "PtgMul", f: er },
  6: { n: "PtgDiv", f: er },
  7: { n: "PtgPower", f: er },
  8: { n: "PtgConcat", f: er },
  9: { n: "PtgLt", f: er },
  10: { n: "PtgLe", f: er },
  11: { n: "PtgEq", f: er },
  12: { n: "PtgGe", f: er },
  13: { n: "PtgGt", f: er },
  14: { n: "PtgNe", f: er },
  15: { n: "PtgIsect", f: er },
  16: { n: "PtgUnion", f: er },
  17: { n: "PtgRange", f: er },
  18: { n: "PtgUplus", f: er },
  19: { n: "PtgUminus", f: er },
  20: { n: "PtgPercent", f: er },
  21: { n: "PtgParen", f: er },
  22: { n: "PtgMissArg", f: er },
  23: { n: "PtgStr", f: Sd },
  26: { n: "PtgSheet", f: Jd },
  27: { n: "PtgEndSheet", f: Zd },
  28: { n: "PtgErr", f: wd },
  29: { n: "PtgBool", f: Ed },
  30: { n: "PtgInt", f: kd },
  31: { n: "PtgNum", f: Td },
  32: { n: "PtgArray", f: nd },
  33: { n: "PtgFunc", f: vd },
  34: { n: "PtgFuncVar", f: pd },
  35: { n: "PtgName", f: Cd },
  36: { n: "PtgRef", f: hd },
  37: { n: "PtgArea", f: Qx },
  38: { n: "PtgMemArea", f: Id },
  39: { n: "PtgMemErr", f: Pd },
  40: { n: "PtgMemNoMem", f: Ld },
  41: { n: "PtgMemFunc", f: Rd },
  42: { n: "PtgRefErr", f: Nd },
  43: { n: "PtgAreaErr", f: rd },
  44: { n: "PtgRefN", f: xd },
  45: { n: "PtgAreaN", f: ad },
  46: { n: "PtgMemAreaN", f: qd },
  47: { n: "PtgMemNoMemN", f: Qd },
  57: { n: "PtgNameX", f: Dd },
  58: { n: "PtgRef3d", f: dd },
  59: { n: "PtgArea3d", f: ed },
  60: { n: "PtgRefErr3d", f: bd },
  61: { n: "PtgAreaErr3d", f: td },
  255: {}
}, rv = {
  64: 32,
  96: 32,
  65: 33,
  97: 33,
  66: 34,
  98: 34,
  67: 35,
  99: 35,
  68: 36,
  100: 36,
  69: 37,
  101: 37,
  70: 38,
  102: 38,
  71: 39,
  103: 39,
  72: 40,
  104: 40,
  73: 41,
  105: 41,
  74: 42,
  106: 42,
  75: 43,
  107: 43,
  76: 44,
  108: 44,
  77: 45,
  109: 45,
  78: 46,
  110: 46,
  79: 47,
  111: 47,
  88: 34,
  120: 34,
  89: 57,
  121: 57,
  90: 58,
  122: 58,
  91: 59,
  123: 59,
  92: 60,
  124: 60,
  93: 61,
  125: 61
}, tv = {
  1: { n: "PtgElfLel", f: zf },
  2: { n: "PtgElfRw", f: zd },
  3: { n: "PtgElfCol", f: Md },
  6: { n: "PtgElfRwV", f: $d },
  7: { n: "PtgElfColV", f: Hd },
  10: { n: "PtgElfRadical", f: Vd },
  11: { n: "PtgElfRadicalS", f: Gd },
  13: { n: "PtgElfColS", f: Ud },
  15: { n: "PtgElfColSV", f: Wd },
  16: { n: "PtgElfRadicalLel", f: Xd },
  25: { n: "PtgList", f: jd },
  29: { n: "PtgSxName", f: Yd },
  255: {}
}, av = {
  0: { n: "PtgAttrNoop", f: ev },
  1: { n: "PtgAttrSemi", f: od },
  2: { n: "PtgAttrIf", f: fd },
  4: { n: "PtgAttrChoose", f: id },
  8: { n: "PtgAttrGoto", f: sd },
  16: { n: "PtgAttrSum", f: gd },
  32: { n: "PtgAttrBaxcel", f: qi },
  33: { n: "PtgAttrBaxcel", f: qi },
  64: { n: "PtgAttrSpace", f: ld },
  65: { n: "PtgAttrSpaceSemi", f: ud },
  128: { n: "PtgAttrIfError", f: cd },
  255: {}
};
function Za(e, t, r, a) {
  if (a.biff < 8)
    return kr(e, t);
  for (var n = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        r[s][1] = Ad(e, 0, a), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        r[s][2] = yd(e, r[s][1], a), i.push(r[s][2]);
        break;
      case "PtgExp":
        a && a.biff == 12 && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return t = n - e.l, t !== 0 && i.push(kr(e, t)), i;
}
function qa(e, t, r) {
  for (var a = e.l + t, n, i, s = []; a != e.l; )
    t = a - e.l, i = e[e.l], n = Qi[i] || Qi[rv[i]], (i === 24 || i === 25) && (n = (i === 24 ? tv : av)[e[e.l + 1]]), !n || !n.f ? kr(e, t) : s.push([n.n, n.f(e, t, r)]);
  return s;
}
function nv(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var a = e[r], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      if (s)
        switch (s[0]) {
          case 2:
            n.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            n.push(s[1]);
        }
      else
        n.push("");
    }
    t.push(n.join(","));
  }
  return t.join(";");
}
var iv = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function sv(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function $f(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var a = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!a)
    return "SH33TJSERR1";
  var n = "";
  if (r.biff > 8)
    switch (e[a[0]][0]) {
      case 357:
        return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[a[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[a[0]][0];
    }
  switch (e[a[0]][0][0]) {
    case 1025:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 14849:
      return e[a[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    default:
      return e[a[0]][0][3] ? (n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2";
  }
}
function es(e, t, r) {
  var a = $f(e, t, r);
  return a == "#REF" ? a : sv(a, r);
}
function pr(e, t, r, a, n) {
  var i = n && n.biff || 8, s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, f = [], c, o, l, u = 0, x = 0, d, v = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var h = -1, p = "", w = 0, y = e[0].length; w < y; ++w) {
    var g = e[0][w];
    switch (g[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (c = f.pop(), o = f.pop(), h >= 0) {
          switch (e[0][h][1][0]) {
            case 0:
              p = $e(" ", e[0][h][1][1]);
              break;
            case 1:
              p = $e("\r", e[0][h][1][1]);
              break;
            default:
              if (p = "", n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          o = o + p, h = -1;
        }
        f.push(o + iv[g[0]] + c);
        break;
      case "PtgIsect":
        c = f.pop(), o = f.pop(), f.push(o + " " + c);
        break;
      case "PtgUnion":
        c = f.pop(), o = f.pop(), f.push(o + "," + c);
        break;
      case "PtgRange":
        c = f.pop(), o = f.pop(), f.push(o + ":" + c);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        l = Sa(g[1][1], s, n), f.push(Fa(l, i));
        break;
      case "PtgRefN":
        l = r ? Sa(g[1][1], r, n) : g[1][1], f.push(Fa(l, i));
        break;
      case "PtgRef3d":
        u = g[1][1], l = Sa(g[1][2], s, n), v = es(a, u, n), f.push(v + "!" + Fa(l, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var D = g[1][0], b = g[1][1];
        D || (D = 0), D &= 127;
        var N = D == 0 ? [] : f.slice(-D);
        f.length -= D, b === "User" && (b = N.shift()), f.push(b + "(" + N.join(",") + ")");
        break;
      case "PtgBool":
        f.push(g[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(g[1]);
        break;
      case "PtgNum":
        f.push(String(g[1]));
        break;
      case "PtgStr":
        f.push('"' + g[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        f.push(g[1]);
        break;
      case "PtgAreaN":
        d = Di(g[1][1], r ? { s: r } : s, n), f.push(U0(d, n));
        break;
      case "PtgArea":
        d = Di(g[1][1], s, n), f.push(U0(d, n));
        break;
      case "PtgArea3d":
        u = g[1][1], d = g[1][2], v = es(a, u, n), f.push(v + "!" + U0(d, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        x = g[1][2];
        var F = (a.names || [])[x - 1] || (a[0] || [])[x], B = F ? F.Name : "SH33TJSNAME" + String(x);
        B && B.slice(0, 6) == "_xlfn." && !n.xlfn && (B = B.slice(6)), f.push(B);
        break;
      case "PtgNameX":
        var I = g[1][1];
        x = g[1][2];
        var z;
        if (n.biff <= 5)
          I < 0 && (I = -I), a[I] && (z = a[I][x]);
        else {
          var X = "";
          if (((a[I] || [])[0] || [])[0] == 14849 || (((a[I] || [])[0] || [])[0] == 1025 ? a[I][x] && a[I][x].itab > 0 && (X = a.SheetNames[a[I][x].itab - 1] + "!") : X = a.SheetNames[x - 1] + "!"), a[I] && a[I][x])
            X += a[I][x].Name;
          else if (a[0] && a[0][x])
            X += a[0][x].Name;
          else {
            var L = ($f(a, I, n) || "").split(";;");
            L[x - 1] ? X = L[x - 1] : X += "SH33TJSERRX";
          }
          f.push(X);
          break;
        }
        z || (z = { Name: "SH33TJSERRY" }), f.push(z.Name);
        break;
      case "PtgParen":
        var J = "(", le = ")";
        if (h >= 0) {
          switch (p = "", e[0][h][1][0]) {
            case 2:
              J = $e(" ", e[0][h][1][1]) + J;
              break;
            case 3:
              J = $e("\r", e[0][h][1][1]) + J;
              break;
            case 4:
              le = $e(" ", e[0][h][1][1]) + le;
              break;
            case 5:
              le = $e("\r", e[0][h][1][1]) + le;
              break;
            default:
              if (n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          h = -1;
        }
        f.push(J + f.pop() + le);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        l = { c: g[1][1], r: g[1][0] };
        var ie = { c: r.c, r: r.r };
        if (a.sharedf[pe(l)]) {
          var he = a.sharedf[pe(l)];
          f.push(pr(he, s, ie, a, n));
        } else {
          var ce = !1;
          for (c = 0; c != a.arrayf.length; ++c)
            if (o = a.arrayf[c], !(l.c < o[0].s.c || l.c > o[0].e.c) && !(l.r < o[0].s.r || l.r > o[0].e.r)) {
              f.push(pr(o[1], s, ie, a, n)), ce = !0;
              break;
            }
          ce || f.push(g[1]);
        }
        break;
      case "PtgArray":
        f.push("{" + nv(g[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        h = w;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + g[1].idx + "[#" + g[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(g));
      default:
        throw new Error("Unrecognized Formula Token: " + String(g));
    }
    var Pe = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && h >= 0 && Pe.indexOf(e[0][w][0]) == -1) {
      g = e[0][h];
      var V = !0;
      switch (g[1][0]) {
        case 4:
          V = !1;
        case 0:
          p = $e(" ", g[1][1]);
          break;
        case 5:
          V = !1;
        case 1:
          p = $e("\r", g[1][1]);
          break;
        default:
          if (p = "", n.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + g[1][0]);
      }
      f.push((V ? p : "") + f.pop() + (V ? "" : p)), h = -1;
    }
  }
  if (f.length > 1 && n.WTF)
    throw new Error("bad formula stack");
  return f[0];
}
function fv(e, t, r) {
  var a = e.l + t, n = r.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535)
    return [[], kr(e, t - 2)];
  var f = qa(e, s, r);
  return t !== s + n && (i = Za(e, t - s - n, f, r)), e.l = a, [f, i];
}
function cv(e, t, r) {
  var a = e.l + t, n = r.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535)
    return [[], kr(e, t - 2)];
  var f = qa(e, s, r);
  return t !== s + n && (i = Za(e, t - s - n, f, r)), e.l = a, [f, i];
}
function ov(e, t, r, a) {
  var n = e.l + t, i = qa(e, a, r), s;
  return n !== e.l && (s = Za(e, n - e.l, i, r)), [i, s];
}
function lv(e, t, r) {
  var a = e.l + t, n, i = e.read_shift(2), s = qa(e, i, r);
  return i == 65535 ? [[], kr(e, t - 2)] : (t !== i + 2 && (n = Za(e, a - i - 2, s, r)), [s, n]);
}
function uv(e) {
  var t;
  if (lt(e, e.l + 6) !== 65535)
    return [gr(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return t = e[e.l + 2] === 1, e.l += 8, [t, "b"];
    case 2:
      return t = e[e.l + 2], e.l += 8, [t, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function hv(e) {
  if (e == null) {
    var t = G(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number")
    return Wt(e);
  return Wt(0);
}
function G0(e, t, r) {
  var a = e.l + t, n = st(e);
  r.biff == 2 && ++e.l;
  var i = uv(e), s = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var f = cv(e, a - e.l, r);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function xv(e, t, r, a, n) {
  var i = Vt(t, r, n), s = hv(e.v), f = G(6), c = 33;
  f.write_shift(2, c), f.write_shift(4, 0);
  for (var o = G(e.bf.length), l = 0; l < e.bf.length; ++l)
    o[l] = e.bf[l];
  var u = cr([i, s, f, o]);
  return u;
}
function I0(e, t, r) {
  var a = e.read_shift(4), n = qa(e, a, r), i = e.read_shift(4), s = i > 0 ? Za(e, i, n, r) : null;
  return [n, s];
}
var dv = I0, R0 = I0, vv = I0, pv = I0, mv = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Kf = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, gv = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function rs(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(t, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function _v(e) {
  var t = "of:=" + e.replace(Hn, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function z0(e) {
  var t = e.split(":"), r = t[0].split(".")[0];
  return [r, t[0].split(".")[1] + (t.length > 1 ? ":" + (t[1].split(".")[1] || t[1].split(".")[0]) : "")];
}
function wv(e) {
  return e.replace(/\./, "!");
}
var Aa = {}, sa = {}, Ca = typeof Map < "u";
function Gn(e, t, r) {
  var a = 0, n = e.length;
  if (r) {
    if (Ca ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = Ca ? r.get(t) : r[t]; a < i.length; ++a)
        if (e[i[a]].t === t)
          return e.Count++, i[a];
    }
  } else
    for (; a < n; ++a)
      if (e[a].t === t)
        return e.Count++, a;
  return e[n] = { t }, e.Count++, e.Unique++, r && (Ca ? (r.has(t) || r.set(t, []), r.get(t).push(n)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(n))), n;
}
function N0(e, t) {
  var r = { min: e + 1, max: e + 1 }, a = -1;
  return t.MDW && (mr = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? a = Wa(t.wpx) : t.wch != null && (a = t.wch), a > -1 ? (r.width = E0(a), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function Lt(e, t) {
  if (!!e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function Dt(e, t, r) {
  var a = r.revssf[t.z != null ? t.z : "General"], n = 60, i = e.length;
  if (a == null && r.ssf) {
    for (; n < 392; ++n)
      if (r.ssf[n] == null) {
        at(t.z, n), r.ssf[n] = t.z, r.revssf[t.z] = a = n;
        break;
      }
  }
  for (n = 0; n != i; ++n)
    if (e[n].numFmtId === a)
      return n;
  return e[i] = {
    numFmtId: a,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, i;
}
function jf(e, t, r, a, n, i) {
  try {
    a.cellNF && (e.z = de[t]);
  } catch (f) {
    if (a.WTF)
      throw f;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = Ve(e.v)), (!a || a.cellText !== !1) && e.t !== "z")
      try {
        if (de[t] == null && at(go[t] || "General", t), e.t === "e")
          e.w = e.w || vt[e.v];
        else if (t === 0)
          if (e.t === "n")
            (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Na(e.v);
          else if (e.t === "d") {
            var s = ir(e.v);
            (s | 0) === s ? e.w = s.toString(10) : e.w = Na(s);
          } else {
            if (e.v === void 0)
              return "";
            e.w = Mt(e.v, sa);
          }
        else
          e.t === "d" ? e.w = Pr(t, ir(e.v), sa) : e.w = Pr(t, e.v, sa);
      } catch (f) {
        if (a.WTF)
          throw f;
      }
    if (!!a.cellStyles && r != null)
      try {
        e.s = i.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = k0(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = k0(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (f) {
        if (a.WTF && i.Fills)
          throw f;
      }
  }
}
function kv(e, t, r) {
  if (e && e["!ref"]) {
    var a = Ae(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function Ev(e, t) {
  var r = Ae(t);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = we(r));
}
var Tv = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, Sv = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, Fv = /<(?:\w:)?hyperlink [^>]*>/mg, yv = /"(\w*:\w*)"/, Av = /<(?:\w:)?col\b[^>]*[\/]?>/g, Cv = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, Dv = /<(?:\w:)?pageMargins[^>]*\/>/g, Yf = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, Ov = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, Iv = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Rv(e, t, r, a, n, i, s) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var f = t.dense ? [] : {}, c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, o = "", l = "", u = e.match(Sv);
  u ? (o = e.slice(0, u.index), l = e.slice(u.index + u[0].length)) : o = l = e;
  var x = o.match(Yf);
  x ? zn(x[0], f, n, r) : (x = o.match(Ov)) && bv(x[0], x[1] || "", f, n, r);
  var d = (o.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var v = o.slice(d, d + 50).match(yv);
    v && Ev(f, v[1]);
  }
  var h = o.match(Iv);
  h && h[1] && Kv(h[1], n);
  var p = [];
  if (t.cellStyles) {
    var w = o.match(Av);
    w && Vv(p, w);
  }
  u && Jv(u[1], f, t, c, i, s);
  var y = l.match(Cv);
  y && (f["!autofilter"] = Gv(y[0]));
  var g = [], D = l.match(Tv);
  if (D)
    for (d = 0; d != D.length; ++d)
      g[d] = Ae(D[d].slice(D[d].indexOf('"') + 1));
  var b = l.match(Fv);
  b && Uv(f, b, a);
  var N = l.match(Dv);
  if (N && (f["!margins"] = Wv(me(N[0]))), !f["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r && (f["!ref"] = we(c)), t.sheetRows > 0 && f["!ref"]) {
    var F = Ae(f["!ref"]);
    t.sheetRows <= +F.e.r && (F.e.r = t.sheetRows - 1, F.e.r > c.e.r && (F.e.r = c.e.r), F.e.r < F.s.r && (F.s.r = F.e.r), F.e.c > c.e.c && (F.e.c = c.e.c), F.e.c < F.s.c && (F.s.c = F.e.c), f["!fullref"] = f["!ref"], f["!ref"] = we(F));
  }
  return p.length > 0 && (f["!cols"] = p), g.length > 0 && (f["!merges"] = g), f;
}
function Nv(e) {
  if (e.length === 0)
    return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + we(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function zn(e, t, r, a) {
  var n = me(e);
  r.Sheets[a] || (r.Sheets[a] = {}), n.codeName && (r.Sheets[a].CodeName = Oe(Le(n.codeName)));
}
function bv(e, t, r, a, n) {
  zn(e.slice(0, e.indexOf(">")), r, a, n);
}
function Pv(e, t, r, a, n) {
  var i = !1, s = {}, f = null;
  if (a.bookType !== "xlsx" && t.vbaraw) {
    var c = t.SheetNames[r];
    try {
      t.Workbook && (c = t.Workbook.Sheets[r].CodeName || c);
    } catch {
    }
    i = !0, s.codeName = tt(be(c));
  }
  if (e && e["!outline"]) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (o.summaryBelow = 0), e["!outline"].left && (o.summaryRight = 0), f = (f || "") + ae("outlinePr", null, o);
  }
  !i && !f || (n[n.length] = ae("sheetPr", f, s));
}
var Lv = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], Bv = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function Mv(e) {
  var t = { sheet: 1 };
  return Lv.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), Bv.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = Mn(e.password).toString(16).toUpperCase()), ae("sheetProtection", null, t);
}
function Uv(e, t, r) {
  for (var a = Array.isArray(e), n = 0; n != t.length; ++n) {
    var i = me(Le(t[n]), !0);
    if (!i.ref)
      return;
    var s = ((r || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Oe(i.location))) : (i.Target = "#" + Oe(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Ae(i.ref), c = f.s.r; c <= f.e.r; ++c)
      for (var o = f.s.c; o <= f.e.c; ++o) {
        var l = pe({ c: o, r: c });
        a ? (e[c] || (e[c] = []), e[c][o] || (e[c][o] = { t: "z", v: void 0 }), e[c][o].l = i) : (e[l] || (e[l] = { t: "z", v: void 0 }), e[l].l = i);
      }
  }
}
function Wv(e) {
  var t = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (t[r] = parseFloat(e[r]));
  }), t;
}
function Hv(e) {
  return Lt(e), ae("pageMargins", null, e);
}
function Vv(e, t) {
  for (var r = !1, a = 0; a != t.length; ++a) {
    var n = me(t[a], !0);
    n.hidden && (n.hidden = We(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !r && n.width && (r = !0, Un(n.width)), St(n); i <= s; )
      e[i++] = Me(n);
  }
}
function Xv(e, t) {
  for (var r = ["<cols>"], a, n = 0; n != t.length; ++n)
    !(a = t[n]) || (r[r.length] = ae("col", null, N0(n, a)));
  return r[r.length] = "</cols>", r.join("");
}
function Gv(e) {
  var t = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return t;
}
function zv(e, t, r, a) {
  var n = typeof e.ref == "string" ? e.ref : we(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var i = r.Workbook.Names, s = yr(n);
  s.s.r == s.e.r && (s.e.r = yr(t["!ref"]).e.r, n = we(s));
  for (var f = 0; f < i.length; ++f) {
    var c = i[f];
    if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == a) {
      c.Ref = "'" + r.SheetNames[a] + "'!" + n;
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + r.SheetNames[a] + "'!" + n }), ae("autoFilter", null, { ref: n });
}
var $v = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function Kv(e, t) {
  t.Views || (t.Views = [{}]), (e.match($v) || []).forEach(function(r, a) {
    var n = me(r);
    t.Views[a] || (t.Views[a] = {}), +n.zoomScale && (t.Views[a].zoom = +n.zoomScale), We(n.rightToLeft) && (t.Views[a].RTL = !0);
  });
}
function jv(e, t, r, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), ae("sheetViews", ae("sheetView", null, n), {});
}
function Yv(e, t, r, a) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f)
    return "";
  var n = "", i = e.t, s = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        n = e.v ? "1" : "0";
        break;
      case "n":
        n = "" + e.v;
        break;
      case "e":
        n = vt[e.v];
        break;
      case "d":
        a && a.cellDates ? n = Ve(e.v, -1).toISOString() : (e = Me(e), e.t = "n", n = "" + (e.v = ir(Ve(e.v)))), typeof e.z > "u" && (e.z = de[14]);
        break;
      default:
        n = e.v;
        break;
    }
  var f = hr("v", be(n)), c = { r: t }, o = Dt(a.cellXfs, e, a);
  switch (o !== 0 && (c.s = o), e.t) {
    case "n":
      break;
    case "d":
      c.t = "d";
      break;
    case "b":
      c.t = "b";
      break;
    case "e":
      c.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (a && a.bookSST) {
        f = hr("v", "" + Gn(a.Strings, e.v, a.revStrings)), c.t = "s";
        break;
      }
      c.t = "str";
      break;
  }
  if (e.t != i && (e.t = i, e.v = s), typeof e.f == "string" && e.f) {
    var l = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    f = ae("f", be(e.f), l) + (e.v != null ? f : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (c.cm = 1), ae("c", f, c);
}
var Jv = /* @__PURE__ */ function() {
  var e = /<(?:\w+:)?c[ \/>]/, t = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, a = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, n = /ref=["']([^"']*)["']/, i = ba("v"), s = ba("f");
  return function(c, o, l, u, x, d) {
    for (var v = 0, h = "", p = [], w = [], y = 0, g = 0, D = 0, b = "", N, F, B = 0, I = 0, z, X, L = 0, J = 0, le = Array.isArray(d.CellXf), ie, he = [], ce = [], Pe = Array.isArray(o), V = [], ve = {}, ge = !1, C = !!l.sheetStubs, P = c.split(t), O = 0, R = P.length; O != R; ++O) {
      h = P[O].trim();
      var j = h.length;
      if (j === 0)
        continue;
      var re = 0;
      e:
        for (v = 0; v < j; ++v)
          switch (h[v]) {
            case ">":
              if (h[v - 1] != "/") {
                ++v;
                break e;
              }
              if (l && l.cellStyles) {
                if (F = me(h.slice(re, v), !0), B = F.r != null ? parseInt(F.r, 10) : B + 1, I = -1, l.sheetRows && l.sheetRows < B)
                  continue;
                ve = {}, ge = !1, F.ht && (ge = !0, ve.hpt = parseFloat(F.ht), ve.hpx = oa(ve.hpt)), F.hidden == "1" && (ge = !0, ve.hidden = !0), F.outlineLevel != null && (ge = !0, ve.level = +F.outlineLevel), ge && (V[B - 1] = ve);
              }
              break;
            case "<":
              re = v;
              break;
          }
      if (re >= v)
        break;
      if (F = me(h.slice(re, v), !0), B = F.r != null ? parseInt(F.r, 10) : B + 1, I = -1, !(l.sheetRows && l.sheetRows < B)) {
        u.s.r > B - 1 && (u.s.r = B - 1), u.e.r < B - 1 && (u.e.r = B - 1), l && l.cellStyles && (ve = {}, ge = !1, F.ht && (ge = !0, ve.hpt = parseFloat(F.ht), ve.hpx = oa(ve.hpt)), F.hidden == "1" && (ge = !0, ve.hidden = !0), F.outlineLevel != null && (ge = !0, ve.level = +F.outlineLevel), ge && (V[B - 1] = ve)), p = h.slice(v).split(e);
        for (var te = 0; te != p.length && p[te].trim().charAt(0) == "<"; ++te)
          ;
        for (p = p.slice(te), v = 0; v != p.length; ++v)
          if (h = p[v].trim(), h.length !== 0) {
            if (w = h.match(r), y = v, g = 0, D = 0, h = "<c " + (h.slice(0, 1) == "<" ? ">" : "") + h, w != null && w.length === 2) {
              for (y = 0, b = w[1], g = 0; g != b.length && !((D = b.charCodeAt(g) - 64) < 1 || D > 26); ++g)
                y = 26 * y + D;
              --y, I = y;
            } else
              ++I;
            for (g = 0; g != h.length && h.charCodeAt(g) !== 62; ++g)
              ;
            if (++g, F = me(h.slice(0, g), !0), F.r || (F.r = pe({ r: B - 1, c: I })), b = h.slice(g), N = { t: "" }, (w = b.match(i)) != null && w[1] !== "" && (N.v = Oe(w[1])), l.cellFormula) {
              if ((w = b.match(s)) != null && w[1] !== "") {
                if (N.f = Oe(Le(w[1])).replace(/\r\n/g, `
`), l.xlfn || (N.f = Zi(N.f)), w[0].indexOf('t="array"') > -1)
                  N.F = (b.match(n) || [])[1], N.F.indexOf(":") > -1 && he.push([Ae(N.F), N.F]);
                else if (w[0].indexOf('t="shared"') > -1) {
                  X = me(w[0]);
                  var Q = Oe(Le(w[1]));
                  l.xlfn || (Q = Zi(Q)), ce[parseInt(X.si, 10)] = [X, Q, F.r];
                }
              } else
                (w = b.match(/<f[^>]*\/>/)) && (X = me(w[0]), ce[X.si] && (N.f = $x(ce[X.si][1], ce[X.si][2], F.r)));
              var Z = ze(F.r);
              for (g = 0; g < he.length; ++g)
                Z.r >= he[g][0].s.r && Z.r <= he[g][0].e.r && Z.c >= he[g][0].s.c && Z.c <= he[g][0].e.c && (N.F = he[g][1]);
            }
            if (F.t == null && N.v === void 0)
              if (N.f || N.F)
                N.v = 0, N.t = "n";
              else if (C)
                N.t = "z";
              else
                continue;
            else
              N.t = F.t || "n";
            switch (u.s.c > I && (u.s.c = I), u.e.c < I && (u.e.c = I), N.t) {
              case "n":
                if (N.v == "" || N.v == null) {
                  if (!C)
                    continue;
                  N.t = "z";
                } else
                  N.v = parseFloat(N.v);
                break;
              case "s":
                if (typeof N.v > "u") {
                  if (!C)
                    continue;
                  N.t = "z";
                } else
                  z = Aa[parseInt(N.v, 10)], N.v = z.t, N.r = z.r, l.cellHTML && (N.h = z.h);
                break;
              case "str":
                N.t = "s", N.v = N.v != null ? Le(N.v) : "", l.cellHTML && (N.h = _n(N.v));
                break;
              case "inlineStr":
                w = b.match(a), N.t = "s", w != null && (z = Bn(w[1])) ? (N.v = z.t, l.cellHTML && (N.h = z.h)) : N.v = "";
                break;
              case "b":
                N.v = We(N.v);
                break;
              case "d":
                l.cellDates ? N.v = Ve(N.v, 1) : (N.v = ir(Ve(N.v, 1)), N.t = "n");
                break;
              case "e":
                (!l || l.cellText !== !1) && (N.w = N.v), N.v = Js[N.v];
                break;
            }
            if (L = J = 0, ie = null, le && F.s !== void 0 && (ie = d.CellXf[F.s], ie != null && (ie.numFmtId != null && (L = ie.numFmtId), l.cellStyles && ie.fillId != null && (J = ie.fillId))), jf(N, L, J, l, x, d), l.cellDates && le && N.t == "n" && Gt(de[L]) && (N.t = "d", N.v = C0(N.v)), F.cm && l.xlmeta) {
              var Ee = (l.xlmeta.Cell || [])[+F.cm - 1];
              Ee && Ee.type == "XLDAPR" && (N.D = !0);
            }
            if (Pe) {
              var A = ze(F.r);
              o[A.r] || (o[A.r] = []), o[A.r][A.c] = N;
            } else
              o[F.r] = N;
          }
      }
    }
    V.length > 0 && (o["!rows"] = V);
  };
}();
function Zv(e, t, r, a) {
  var n = [], i = [], s = Ae(e["!ref"]), f = "", c, o = "", l = [], u = 0, x = 0, d = e["!rows"], v = Array.isArray(e), h = { r: o }, p, w = -1;
  for (x = s.s.c; x <= s.e.c; ++x)
    l[x] = He(x);
  for (u = s.s.r; u <= s.e.r; ++u) {
    for (i = [], o = Ke(u), x = s.s.c; x <= s.e.c; ++x) {
      c = l[x] + o;
      var y = v ? (e[u] || [])[x] : e[c];
      y !== void 0 && (f = Yv(y, c, e, t)) != null && i.push(f);
    }
    (i.length > 0 || d && d[u]) && (h = { r: o }, d && d[u] && (p = d[u], p.hidden && (h.hidden = 1), w = -1, p.hpx ? w = Ha(p.hpx) : p.hpt && (w = p.hpt), w > -1 && (h.ht = w, h.customHeight = 1), p.level && (h.outlineLevel = p.level)), n[n.length] = ae("row", i.join(""), h));
  }
  if (d)
    for (; u < d.length; ++u)
      d && d[u] && (h = { r: u + 1 }, p = d[u], p.hidden && (h.hidden = 1), w = -1, p.hpx ? w = Ha(p.hpx) : p.hpt && (w = p.hpt), w > -1 && (h.ht = w, h.customHeight = 1), p.level && (h.outlineLevel = p.level), n[n.length] = ae("row", "", h));
  return n.join("");
}
function Jf(e, t, r, a) {
  var n = [Qe, ae("worksheet", null, {
    xmlns: zt[0],
    "xmlns:r": nr.r
  })], i = r.SheetNames[e], s = 0, f = "", c = r.Sheets[i];
  c == null && (c = {});
  var o = c["!ref"] || "A1", l = Ae(o);
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + o + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575), o = we(l);
  }
  a || (a = {}), c["!comments"] = [];
  var u = [];
  Pv(c, r, e, t, n), n[n.length] = ae("dimension", null, { ref: o }), n[n.length] = jv(c, t, e, r), t.sheetFormat && (n[n.length] = ae("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), c["!cols"] != null && c["!cols"].length > 0 && (n[n.length] = Xv(c, c["!cols"])), n[s = n.length] = "<sheetData/>", c["!links"] = [], c["!ref"] != null && (f = Zv(c, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), c["!protect"] && (n[n.length] = Mv(c["!protect"])), c["!autofilter"] != null && (n[n.length] = zv(c["!autofilter"], c, r, e)), c["!merges"] != null && c["!merges"].length > 0 && (n[n.length] = Nv(c["!merges"]));
  var x = -1, d, v = -1;
  return c["!links"].length > 0 && (n[n.length] = "<hyperlinks>", c["!links"].forEach(function(h) {
    !h[1].Target || (d = { ref: h[0] }, h[1].Target.charAt(0) != "#" && (v = Ne(a, -1, be(h[1].Target).replace(/#.*$/, ""), Fe.HLINK), d["r:id"] = "rId" + v), (x = h[1].Target.indexOf("#")) > -1 && (d.location = be(h[1].Target.slice(x + 1))), h[1].Tooltip && (d.tooltip = be(h[1].Tooltip)), n[n.length] = ae("hyperlink", null, d));
  }), n[n.length] = "</hyperlinks>"), delete c["!links"], c["!margins"] != null && (n[n.length] = Hv(c["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (n[n.length] = hr("ignoredErrors", ae("ignoredError", null, { numberStoredAsText: 1, sqref: o }))), u.length > 0 && (v = Ne(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Fe.DRAW), n[n.length] = ae("drawing", null, { "r:id": "rId" + v }), c["!drawing"] = u), c["!comments"].length > 0 && (v = Ne(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Fe.VML), n[n.length] = ae("legacyDrawing", null, { "r:id": "rId" + v }), c["!legacy"] = v), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("");
}
function qv(e, t) {
  var r = {}, a = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = n / 20), r;
}
function Qv(e, t, r) {
  var a = G(145), n = (r["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = Ha(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, c = a.l;
  a.l += 4;
  for (var o = { r: e, c: 0 }, l = 0; l < 16; ++l)
    if (!(t.s.c > l + 1 << 10 || t.e.c < l << 10)) {
      for (var u = -1, x = -1, d = l << 10; d < l + 1 << 10; ++d) {
        o.c = d;
        var v = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[pe(o)];
        v && (u < 0 && (u = d), x = d);
      }
      u < 0 || (++f, a.write_shift(4, u), a.write_shift(4, x));
    }
  var h = a.l;
  return a.l = c, a.write_shift(4, f), a.l = h, a.length > a.l ? a.slice(0, a.l) : a;
}
function e2(e, t, r, a) {
  var n = Qv(a, r, t);
  (n.length > 17 || (t["!rows"] || [])[a]) && Y(e, 0, n);
}
var r2 = Yt, t2 = xa;
function a2() {
}
function n2(e, t) {
  var r = {}, a = e[e.l];
  return ++e.l, r.above = !(a & 64), r.left = !(a & 128), e.l += 18, r.name = fl(e), r;
}
function i2(e, t, r) {
  r == null && (r = G(84 + 4 * e.length));
  var a = 192;
  t && (t.above && (a &= -65), t.left && (a &= -129)), r.write_shift(1, a);
  for (var n = 1; n < 3; ++n)
    r.write_shift(1, 0);
  return g0({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), zs(e, r), r.slice(0, r.l);
}
function s2(e) {
  var t = $r(e);
  return [t];
}
function f2(e, t, r) {
  return r == null && (r = G(8)), $t(t, r);
}
function c2(e) {
  var t = Kt(e);
  return [t];
}
function o2(e, t, r) {
  return r == null && (r = G(4)), jt(t, r);
}
function l2(e) {
  var t = $r(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function u2(e, t, r) {
  return r == null && (r = G(9)), $t(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function h2(e) {
  var t = Kt(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function x2(e, t, r) {
  return r == null && (r = G(5)), jt(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function d2(e) {
  var t = $r(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function v2(e, t, r) {
  return r == null && (r = G(9)), $t(t, r), r.write_shift(1, e.v), r;
}
function p2(e) {
  var t = Kt(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function m2(e, t, r) {
  return r == null && (r = G(8)), jt(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function g2(e) {
  var t = $r(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function _2(e, t, r) {
  return r == null && (r = G(12)), $t(t, r), r.write_shift(4, t.v), r;
}
function w2(e) {
  var t = Kt(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function k2(e, t, r) {
  return r == null && (r = G(8)), jt(t, r), r.write_shift(4, t.v), r;
}
function E2(e) {
  var t = $r(e), r = gr(e);
  return [t, r, "n"];
}
function T2(e, t, r) {
  return r == null && (r = G(16)), $t(t, r), Wt(e.v, r), r;
}
function Zf(e) {
  var t = Kt(e), r = gr(e);
  return [t, r, "n"];
}
function S2(e, t, r) {
  return r == null && (r = G(12)), jt(t, r), Wt(e.v, r), r;
}
function F2(e) {
  var t = $r(e), r = Rn(e);
  return [t, r, "n"];
}
function y2(e, t, r) {
  return r == null && (r = G(12)), $t(t, r), $s(e.v, r), r;
}
function A2(e) {
  var t = Kt(e), r = Rn(e);
  return [t, r, "n"];
}
function C2(e, t, r) {
  return r == null && (r = G(8)), jt(t, r), $s(e.v, r), r;
}
function D2(e) {
  var t = $r(e), r = Dn(e);
  return [t, r, "is"];
}
function O2(e) {
  var t = $r(e), r = wr(e);
  return [t, r, "str"];
}
function I2(e, t, r) {
  return r == null && (r = G(12 + 4 * e.v.length)), $t(t, r), or(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function R2(e) {
  var t = Kt(e), r = wr(e);
  return [t, r, "str"];
}
function N2(e, t, r) {
  return r == null && (r = G(8 + 4 * e.v.length)), jt(t, r), or(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function b2(e, t, r) {
  var a = e.l + t, n = $r(e);
  n.r = r["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var f = R0(e, a - e.l, r);
    s[3] = pr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
function P2(e, t, r) {
  var a = e.l + t, n = $r(e);
  n.r = r["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var f = R0(e, a - e.l, r);
    s[3] = pr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
function L2(e, t, r) {
  var a = e.l + t, n = $r(e);
  n.r = r["!row"];
  var i = gr(e), s = [n, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var f = R0(e, a - e.l, r);
    s[3] = pr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
function B2(e, t, r) {
  var a = e.l + t, n = $r(e);
  n.r = r["!row"];
  var i = wr(e), s = [n, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var f = R0(e, a - e.l, r);
    s[3] = pr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
var M2 = Yt, U2 = xa;
function W2(e, t) {
  return t == null && (t = G(4)), t.write_shift(4, e), t;
}
function H2(e, t) {
  var r = e.l + t, a = Yt(e), n = On(e), i = wr(e), s = wr(e), f = wr(e);
  e.l = r;
  var c = { rfx: a, relId: n, loc: i, display: f };
  return s && (c.Tooltip = s), c;
}
function V2(e, t) {
  var r = G(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  xa({ s: ze(e[0]), e: ze(e[0]) }, r), In("rId" + t, r);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return or(n || "", r), or(e[1].Tooltip || "", r), or("", r), r.slice(0, r.l);
}
function X2() {
}
function G2(e, t, r) {
  var a = e.l + t, n = Ks(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, r.cellFormula) {
    var f = dv(e, a - e.l, r);
    s[1] = f;
  } else
    e.l = a;
  return s;
}
function z2(e, t, r) {
  var a = e.l + t, n = Yt(e), i = [n];
  if (r.cellFormula) {
    var s = pv(e, a - e.l, r);
    i[1] = s, e.l = a;
  } else
    e.l = a;
  return i;
}
function $2(e, t, r) {
  r == null && (r = G(18));
  var a = N0(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (a.width || 10) * 256), r.write_shift(4, 0);
  var n = 0;
  return t.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), t.level && (n |= t.level << 8), r.write_shift(2, n), r;
}
var qf = ["left", "right", "top", "bottom", "header", "footer"];
function K2(e) {
  var t = {};
  return qf.forEach(function(r) {
    t[r] = gr(e);
  }), t;
}
function j2(e, t) {
  return t == null && (t = G(6 * 8)), Lt(e), qf.forEach(function(r) {
    Wt(e[r], t);
  }), t;
}
function Y2(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function J2(e, t, r) {
  r == null && (r = G(30));
  var a = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (a |= 32), r.write_shift(2, a), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function Z2(e) {
  var t = G(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), xa(e, t), t;
}
function q2(e, t) {
  return t == null && (t = G(16 * 4 + 2)), t.write_shift(2, e.password ? Mn(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    ["scenarios", !1],
    ["formatCells", !0],
    ["formatColumns", !0],
    ["formatRows", !0],
    ["insertColumns", !0],
    ["insertRows", !0],
    ["insertHyperlinks", !0],
    ["deleteColumns", !0],
    ["deleteRows", !0],
    ["selectLockedCells", !1],
    ["sort", !0],
    ["autoFilter", !0],
    ["pivotTables", !0],
    ["selectUnlockedCells", !1]
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function Q2() {
}
function ep() {
}
function rp(e, t, r, a, n, i, s) {
  if (!e)
    return e;
  var f = t || {};
  a || (a = { "!id": {} });
  var c = f.dense ? [] : {}, o, l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = !1, x = !1, d, v, h, p, w, y, g, D, b, N = [];
  f.biff = 12, f["!row"] = 0;
  var F = 0, B = !1, I = [], z = {}, X = f.supbooks || n.supbooks || [[]];
  if (X.sharedf = z, X.arrayf = I, X.SheetNames = n.SheetNames || n.Sheets.map(function(Pe) {
    return Pe.name;
  }), !f.supbooks && (f.supbooks = X, n.Names))
    for (var L = 0; L < n.Names.length; ++L)
      X[0][L + 1] = n.Names[L];
  var J = [], le = [], ie = !1;
  Va[16] = { n: "BrtShortReal", f: Zf };
  var he;
  if (dt(e, function(V, ve, ge) {
    if (!x)
      switch (ge) {
        case 148:
          o = V;
          break;
        case 0:
          d = V, f.sheetRows && f.sheetRows <= d.r && (x = !0), D = Ke(p = d.r), f["!row"] = d.r, (V.hidden || V.hpt || V.level != null) && (V.hpt && (V.hpx = oa(V.hpt)), le[V.r] = V);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 62:
          switch (v = { t: V[2] }, V[2]) {
            case "n":
              v.v = V[1];
              break;
            case "s":
              g = Aa[V[1]], v.v = g.t, v.r = g.r;
              break;
            case "b":
              v.v = !!V[1];
              break;
            case "e":
              v.v = V[1], f.cellText !== !1 && (v.w = vt[v.v]);
              break;
            case "str":
              v.t = "s", v.v = V[1];
              break;
            case "is":
              v.t = "s", v.v = V[1].t;
              break;
          }
          if ((h = s.CellXf[V[0].iStyleRef]) && jf(v, h.numFmtId, null, f, i, s), w = V[0].c == -1 ? w + 1 : V[0].c, f.dense ? (c[p] || (c[p] = []), c[p][w] = v) : c[He(w) + D] = v, f.cellFormula) {
            for (B = !1, F = 0; F < I.length; ++F) {
              var C = I[F];
              d.r >= C[0].s.r && d.r <= C[0].e.r && w >= C[0].s.c && w <= C[0].e.c && (v.F = we(C[0]), B = !0);
            }
            !B && V.length > 3 && (v.f = V[3]);
          }
          if (l.s.r > d.r && (l.s.r = d.r), l.s.c > w && (l.s.c = w), l.e.r < d.r && (l.e.r = d.r), l.e.c < w && (l.e.c = w), f.cellDates && h && v.t == "n" && Gt(de[h.numFmtId])) {
            var P = wt(v.v);
            P && (v.t = "d", v.v = new Date(P.y, P.m - 1, P.d, P.H, P.M, P.S, P.u));
          }
          he && (he.type == "XLDAPR" && (v.D = !0), he = void 0);
          break;
        case 1:
        case 12:
          if (!f.sheetStubs || u)
            break;
          v = { t: "z", v: void 0 }, w = V[0].c == -1 ? w + 1 : V[0].c, f.dense ? (c[p] || (c[p] = []), c[p][w] = v) : c[He(w) + D] = v, l.s.r > d.r && (l.s.r = d.r), l.s.c > w && (l.s.c = w), l.e.r < d.r && (l.e.r = d.r), l.e.c < w && (l.e.c = w), he && (he.type == "XLDAPR" && (v.D = !0), he = void 0);
          break;
        case 176:
          N.push(V);
          break;
        case 49:
          he = ((f.xlmeta || {}).Cell || [])[V - 1];
          break;
        case 494:
          var O = a["!id"][V.relId];
          for (O ? (V.Target = O.Target, V.loc && (V.Target += "#" + V.loc), V.Rel = O) : V.relId == "" && (V.Target = "#" + V.loc), p = V.rfx.s.r; p <= V.rfx.e.r; ++p)
            for (w = V.rfx.s.c; w <= V.rfx.e.c; ++w)
              f.dense ? (c[p] || (c[p] = []), c[p][w] || (c[p][w] = { t: "z", v: void 0 }), c[p][w].l = V) : (y = pe({ c: w, r: p }), c[y] || (c[y] = { t: "z", v: void 0 }), c[y].l = V);
          break;
        case 426:
          if (!f.cellFormula)
            break;
          I.push(V), b = f.dense ? c[p][w] : c[He(w) + D], b.f = pr(V[1], l, { r: d.r, c: w }, X, f), b.F = we(V[0]);
          break;
        case 427:
          if (!f.cellFormula)
            break;
          z[pe(V[0].s)] = V[1], b = f.dense ? c[p][w] : c[He(w) + D], b.f = pr(V[1], l, { r: d.r, c: w }, X, f);
          break;
        case 60:
          if (!f.cellStyles)
            break;
          for (; V.e >= V.s; )
            J[V.e--] = { width: V.w / 256, hidden: !!(V.flags & 1), level: V.level }, ie || (ie = !0, Un(V.w / 256)), St(J[V.e + 1]);
          break;
        case 161:
          c["!autofilter"] = { ref: we(V) };
          break;
        case 476:
          c["!margins"] = V;
          break;
        case 147:
          n.Sheets[r] || (n.Sheets[r] = {}), V.name && (n.Sheets[r].CodeName = V.name), (V.above || V.left) && (c["!outline"] = { above: V.above, left: V.left });
          break;
        case 137:
          n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), V.RTL && (n.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        case 1053:
          break;
        case 151:
          break;
        case 152:
        case 175:
        case 644:
        case 625:
        case 562:
        case 396:
        case 1112:
        case 1146:
        case 471:
        case 1050:
        case 649:
        case 1105:
        case 589:
        case 607:
        case 564:
        case 1055:
        case 168:
        case 174:
        case 1180:
        case 499:
        case 507:
        case 550:
        case 171:
        case 167:
        case 1177:
        case 169:
        case 1181:
        case 551:
        case 552:
        case 661:
        case 639:
        case 478:
        case 537:
        case 477:
        case 536:
        case 1103:
        case 680:
        case 1104:
        case 1024:
        case 663:
        case 535:
        case 678:
        case 504:
        case 1043:
        case 428:
        case 170:
        case 3072:
        case 50:
        case 2070:
        case 1045:
          break;
        case 35:
          u = !0;
          break;
        case 36:
          u = !1;
          break;
        case 37:
          u = !0;
          break;
        case 38:
          u = !1;
          break;
        default:
          if (!ve.T) {
            if (!u || f.WTF)
              throw new Error("Unexpected record 0x" + ge.toString(16));
          }
      }
  }, f), delete f.supbooks, delete f["!row"], !c["!ref"] && (l.s.r < 2e6 || o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0)) && (c["!ref"] = we(o || l)), f.sheetRows && c["!ref"]) {
    var ce = Ae(c["!ref"]);
    f.sheetRows <= +ce.e.r && (ce.e.r = f.sheetRows - 1, ce.e.r > l.e.r && (ce.e.r = l.e.r), ce.e.r < ce.s.r && (ce.s.r = ce.e.r), ce.e.c > l.e.c && (ce.e.c = l.e.c), ce.e.c < ce.s.c && (ce.s.c = ce.e.c), c["!fullref"] = c["!ref"], c["!ref"] = we(ce));
  }
  return N.length > 0 && (c["!merges"] = N), J.length > 0 && (c["!cols"] = J), le.length > 0 && (c["!rows"] = le), c;
}
function tp(e, t, r, a, n, i, s) {
  if (t.v === void 0)
    return !1;
  var f = "";
  switch (t.t) {
    case "b":
      f = t.v ? "1" : "0";
      break;
    case "d":
      t = Me(t), t.z = t.z || de[14], t.v = ir(Ve(t.v)), t.t = "n";
      break;
    case "n":
    case "e":
      f = "" + t.v;
      break;
    default:
      f = t.v;
      break;
  }
  var c = { r, c: a };
  switch (c.s = Dt(n.cellXfs, t, n), t.l && i["!links"].push([pe(c), t.l]), t.c && i["!comments"].push([pe(c), t.c]), t.t) {
    case "s":
    case "str":
      return n.bookSST ? (f = Gn(n.Strings, t.v, n.revStrings), c.t = "s", c.v = f, s ? Y(e, 18, k2(t, c)) : Y(e, 7, _2(t, c))) : (c.t = "str", s ? Y(e, 17, N2(t, c)) : Y(e, 6, I2(t, c))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? s ? Y(e, 13, C2(t, c)) : Y(e, 2, y2(t, c)) : s ? Y(e, 16, S2(t, c)) : Y(e, 5, T2(t, c)), !0;
    case "b":
      return c.t = "b", s ? Y(e, 15, x2(t, c)) : Y(e, 4, u2(t, c)), !0;
    case "e":
      return c.t = "e", s ? Y(e, 14, m2(t, c)) : Y(e, 3, v2(t, c)), !0;
  }
  return s ? Y(e, 12, o2(t, c)) : Y(e, 1, f2(t, c)), !0;
}
function ap(e, t, r, a) {
  var n = Ae(t["!ref"] || "A1"), i, s = "", f = [];
  Y(e, 145);
  var c = Array.isArray(t), o = n.e.r;
  t["!rows"] && (o = Math.max(n.e.r, t["!rows"].length - 1));
  for (var l = n.s.r; l <= o; ++l) {
    s = Ke(l), e2(e, t, n, l);
    var u = !1;
    if (l <= n.e.r)
      for (var x = n.s.c; x <= n.e.c; ++x) {
        l === n.s.r && (f[x] = He(x)), i = f[x] + s;
        var d = c ? (t[l] || [])[x] : t[i];
        if (!d) {
          u = !1;
          continue;
        }
        u = tp(e, d, l, x, a, t, u);
      }
  }
  Y(e, 146);
}
function np(e, t) {
  !t || !t["!merges"] || (Y(e, 177, W2(t["!merges"].length)), t["!merges"].forEach(function(r) {
    Y(e, 176, U2(r));
  }), Y(e, 178));
}
function ip(e, t) {
  !t || !t["!cols"] || (Y(e, 390), t["!cols"].forEach(function(r, a) {
    r && Y(e, 60, $2(a, r));
  }), Y(e, 391));
}
function sp(e, t) {
  !t || !t["!ref"] || (Y(e, 648), Y(e, 649, Z2(Ae(t["!ref"]))), Y(e, 650));
}
function fp(e, t, r) {
  t["!links"].forEach(function(a) {
    if (!!a[1].Target) {
      var n = Ne(r, -1, a[1].Target.replace(/#.*$/, ""), Fe.HLINK);
      Y(e, 494, V2(a, n));
    }
  }), delete t["!links"];
}
function cp(e, t, r, a) {
  if (t["!comments"].length > 0) {
    var n = Ne(a, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Fe.VML);
    Y(e, 551, In("rId" + n)), t["!legacy"] = n;
  }
}
function op(e, t, r, a) {
  if (!!t["!autofilter"]) {
    var n = t["!autofilter"], i = typeof n.ref == "string" ? n.ref : we(n.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names, f = yr(i);
    f.s.r == f.e.r && (f.e.r = yr(t["!ref"]).e.r, i = we(f));
    for (var c = 0; c < s.length; ++c) {
      var o = s[c];
      if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == a) {
        o.Ref = "'" + r.SheetNames[a] + "'!" + i;
        break;
      }
    }
    c == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + r.SheetNames[a] + "'!" + i }), Y(e, 161, xa(Ae(i))), Y(e, 162);
  }
}
function lp(e, t, r) {
  Y(e, 133), Y(e, 137, J2(t, r)), Y(e, 138), Y(e, 134);
}
function up(e, t) {
  !t["!protect"] || Y(e, 535, q2(t["!protect"]));
}
function hp(e, t, r, a) {
  var n = Cr(), i = r.SheetNames[e], s = r.Sheets[i] || {}, f = i;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var c = Ae(s["!ref"] || "A1");
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], Y(n, 129), (r.vbaraw || s["!outline"]) && Y(n, 147, i2(f, s["!outline"])), Y(n, 148, t2(c)), lp(n, s, r.Workbook), ip(n, s), ap(n, s, e, t), up(n, s), op(n, s, r, e), np(n, s), fp(n, s, a), s["!margins"] && Y(n, 476, j2(s["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && sp(n, s), cp(n, s, e, a), Y(n, 130), n.end();
}
function xp(e) {
  var t = [], r = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    !s || (t[+s[1]] = r ? +s[2] : s[2]);
  });
  var n = Oe((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(i) {
    a = i.replace(/<.*?>/g, "");
  }), [t, n, a];
}
function dp(e, t, r, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e)
    return i;
  var f = 0, c = 0, o = "A", l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(u) {
    var x = xp(u);
    l.s.r = l.s.c = 0, l.e.c = f, o = He(f), x[0].forEach(function(d, v) {
      s[o + Ke(v)] = { t: "n", v: d, z: x[1] }, c = v;
    }), l.e.r < c && (l.e.r = c), ++f;
  }), f > 0 && (s["!ref"] = we(l)), s;
}
function vp(e, t, r, a, n) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(Yf);
  return f && zn(f[0], i, n, r), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function pp(e, t) {
  e.l += 10;
  var r = wr(e);
  return { name: r };
}
function mp(e, t, r, a, n) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = !1;
  return dt(e, function(c, o, l) {
    switch (l) {
      case 550:
        i["!rel"] = c;
        break;
      case 651:
        n.Sheets[r] || (n.Sheets[r] = {}), c.name && (n.Sheets[r].CodeName = c.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(o.T > 0)) {
          if (!(o.T < 0)) {
            if (!s || t.WTF)
              throw new Error("Unexpected record 0x" + l.toString(16));
          }
        }
    }
  }, t), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
var $n = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], gp = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
], _p = [], wp = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function ts(e, t) {
  for (var r = 0; r != e.length; ++r)
    for (var a = e[r], n = 0; n != t.length; ++n) {
      var i = t[n];
      if (a[i[0]] == null)
        a[i[0]] = i[1];
      else
        switch (i[2]) {
          case "bool":
            typeof a[i[0]] == "string" && (a[i[0]] = We(a[i[0]]));
            break;
          case "int":
            typeof a[i[0]] == "string" && (a[i[0]] = parseInt(a[i[0]], 10));
            break;
        }
    }
}
function as(e, t) {
  for (var r = 0; r != t.length; ++r) {
    var a = t[r];
    if (e[a[0]] == null)
      e[a[0]] = a[1];
    else
      switch (a[2]) {
        case "bool":
          typeof e[a[0]] == "string" && (e[a[0]] = We(e[a[0]]));
          break;
        case "int":
          typeof e[a[0]] == "string" && (e[a[0]] = parseInt(e[a[0]], 10));
          break;
      }
  }
}
function Qf(e) {
  as(e.WBProps, $n), as(e.CalcPr, wp), ts(e.WBView, gp), ts(e.Sheets, _p), sa.date1904 = We(e.WBProps.date1904);
}
function kp(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : We(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var Ep = /* @__PURE__ */ "][*?/\\".split("");
function ec(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return Ep.forEach(function(a) {
    if (e.indexOf(a) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
function Tp(e, t, r) {
  e.forEach(function(a, n) {
    ec(a);
    for (var i = 0; i < n; ++i)
      if (a == e[i])
        throw new Error("Duplicate Sheet Name: " + a);
    if (r) {
      var s = t && t[n] && t[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function rc(e) {
  if (!e || !e.SheetNames || !e.Sheets)
    throw new Error("Invalid Workbook");
  if (!e.SheetNames.length)
    throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  Tp(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    kv(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
var Sp = /<\w+:workbook/;
function Fp(e, t) {
  if (!e)
    throw new Error("Could not find file");
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, a = !1, n = "xmlns", i = {}, s = 0;
  if (e.replace(Er, function(c, o) {
    var l = me(c);
    switch (it(l[0])) {
      case "<?xml":
        break;
      case "<workbook":
        c.match(Sp) && (n = "xmlns" + c.match(/<(\w+):/)[1]), r.xmlns = l[n];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete l[0], r.AppVersion = l;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        $n.forEach(function(u) {
          if (l[u[0]] != null)
            switch (u[2]) {
              case "bool":
                r.WBProps[u[0]] = We(l[u[0]]);
                break;
              case "int":
                r.WBProps[u[0]] = parseInt(l[u[0]], 10);
                break;
              default:
                r.WBProps[u[0]] = l[u[0]];
            }
        }), l.codeName && (r.WBProps.CodeName = Le(l.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete l[0], r.WBView.push(l);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (l.state) {
          case "hidden":
            l.Hidden = 1;
            break;
          case "veryHidden":
            l.Hidden = 2;
            break;
          default:
            l.Hidden = 0;
        }
        delete l.state, l.name = Oe(Le(l.name)), delete l[0], r.Sheets.push(l);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        a = !0;
        break;
      case "</definedNames>":
        a = !1;
        break;
      case "<definedName":
        i = {}, i.Name = Le(l.name), l.comment && (i.Comment = l.comment), l.localSheetId && (i.Sheet = +l.localSheetId), We(l.hidden || "0") && (i.Hidden = !0), s = o + c.length;
        break;
      case "</definedName>":
        i.Ref = Oe(Le(e.slice(s, o))), r.Names.push(i);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete l[0], r.CalcPr = l;
        break;
      case "<calcPr/>":
        delete l[0], r.CalcPr = l;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        a = !0;
        break;
      case "</AlternateContent>":
        a = !1;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + l[0] + " in workbook");
    }
    return c;
  }), zt.indexOf(r.xmlns) === -1)
    throw new Error("Unknown Namespace: " + r.xmlns);
  return Qf(r), r;
}
function tc(e) {
  var t = [Qe];
  t[t.length] = ae("workbook", null, {
    xmlns: zt[0],
    "xmlns:r": nr.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && ($n.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), t[t.length] = ae("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (n && n[0] && !!n[0].Hidden) {
    for (t[t.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i)
      ;
    i == e.SheetNames.length && (i = 0), t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: be(e.SheetNames[i].slice(0, 31)) };
    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), n[i])
      switch (n[i].Hidden) {
        case 1:
          s.state = "hidden";
          break;
        case 2:
          s.state = "veryHidden";
          break;
      }
    t[t.length] = ae("sheet", null, s);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
    var c = { name: f.Name };
    f.Comment && (c.comment = f.Comment), f.Sheet != null && (c.localSheetId = "" + f.Sheet), f.Hidden && (c.hidden = "1"), f.Ref && (t[t.length] = ae("definedName", be(f.Ref), c));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function yp(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = Q0(e), r.name = wr(e), r;
}
function Ap(e, t) {
  return t || (t = G(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), In(e.strRelID, t), or(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function Cp(e, t) {
  var r = {}, a = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var n = t > 8 ? wr(e) : "";
  return n.length > 0 && (r.CodeName = n), r.autoCompressPictures = !!(a & 65536), r.backupFile = !!(a & 64), r.checkCompatibility = !!(a & 4096), r.date1904 = !!(a & 1), r.filterPrivacy = !!(a & 8), r.hidePivotFieldList = !!(a & 1024), r.promptedSolutions = !!(a & 16), r.publishItems = !!(a & 2048), r.refreshAllConnections = !!(a & 262144), r.saveExternalLinkValues = !!(a & 128), r.showBorderUnselectedTables = !!(a & 4), r.showInkAnnotation = !!(a & 32), r.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], r.showPivotChartFilter = !!(a & 32768), r.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], r;
}
function Dp(e, t) {
  t || (t = G(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), zs(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function Op(e, t) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += t - 8, r;
}
function Ip(e, t, r) {
  var a = e.l + t;
  e.l += 4, e.l += 1;
  var n = e.read_shift(4), i = cl(e), s = vv(e, 0, r), f = On(e);
  e.l = a;
  var c = { Name: i, Ptg: s };
  return n < 268435455 && (c.Sheet = n), f && (c.Comment = f), c;
}
function Rp(e, t) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = !1;
  t || (t = {}), t.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], Va[16] = { n: "BrtFRTArchID$", f: Op }, dt(e, function(c, o, l) {
    switch (l) {
      case 156:
        s.SheetNames.push(c.name), r.Sheets.push(c);
        break;
      case 153:
        r.WBProps = c;
        break;
      case 39:
        c.Sheet != null && (t.SID = c.Sheet), c.Ref = pr(c.Ptg, null, null, s, t), delete t.SID, delete c.Ptg, i.push(c);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        s[0].length ? s.push([l, c]) : s[0] = [l, c], s[s.length - 1].XTI = [];
        break;
      case 362:
        s.length === 0 && (s[0] = [], s[0].XTI = []), s[s.length - 1].XTI = s[s.length - 1].XTI.concat(c), s.XTI = s.XTI.concat(c);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        a.push(l), n = !0;
        break;
      case 36:
        a.pop(), n = !1;
        break;
      case 37:
        a.push(l), n = !0;
        break;
      case 38:
        a.pop(), n = !1;
        break;
      case 16:
        break;
      default:
        if (!o.T) {
          if (!n || t.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, t), Qf(r), r.Names = i, r.supbooks = s, r;
}
function Np(e, t) {
  Y(e, 143);
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var a = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, n = { Hidden: a, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    Y(e, 156, Ap(n));
  }
  Y(e, 144);
}
function bp(e, t) {
  t || (t = G(127));
  for (var r = 0; r != 4; ++r)
    t.write_shift(4, 0);
  return or("SheetJS", t), or(Ia.version, t), or(Ia.version, t), or("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function Pp(e, t) {
  t || (t = G(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function Lp(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, a = 0, n = -1, i = -1; a < r.length; ++a)
      !r[a] || !r[a].Hidden && n == -1 ? n = a : r[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (Y(e, 135), Y(e, 158, Pp(n)), Y(e, 136));
  }
}
function Bp(e, t) {
  var r = Cr();
  return Y(r, 131), Y(r, 128, bp()), Y(r, 153, Dp(e.Workbook && e.Workbook.WBProps || null)), Lp(r, e), Np(r, e), Y(r, 132), r.end();
}
function Mp(e, t, r) {
  return t.slice(-4) === ".bin" ? Rp(e, r) : Fp(e, r);
}
function Up(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? rp(e, a, r, n, i, s, f) : Rv(e, a, r, n, i, s, f);
}
function Wp(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? mp(e, a, r, n, i) : vp(e, a, r, n, i);
}
function Hp(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? Gx() : zx();
}
function Vp(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? Vx() : Xx();
}
function Xp(e, t, r, a) {
  return t.slice(-4) === ".bin" ? U1(e, r, a) : A1(e, r, a);
}
function Gp(e, t, r) {
  return Pf(e, r);
}
function zp(e, t, r) {
  return t.slice(-4) === ".bin" ? $h(e, r) : Xh(e, r);
}
function $p(e, t, r) {
  return t.slice(-4) === ".bin" ? Bx(e, r) : Cx(e, r);
}
function Kp(e, t, r) {
  return t.slice(-4) === ".bin" ? Fx(e) : Tx(e);
}
function jp(e, t, r, a) {
  return r.slice(-4) === ".bin" ? yx(e, t, r, a) : void 0;
}
function Yp(e, t, r) {
  return t.slice(-4) === ".bin" ? wx(e, t, r) : Ex(e, t, r);
}
function Jp(e, t, r) {
  return (t.slice(-4) === ".bin" ? Bp : tc)(e);
}
function Zp(e, t, r, a, n) {
  return (t.slice(-4) === ".bin" ? hp : Jf)(e, r, a, n);
}
function qp(e, t, r) {
  return (t.slice(-4) === ".bin" ? Y1 : Nf)(e, r);
}
function Qp(e, t, r) {
  return (t.slice(-4) === ".bin" ? Yh : Ff)(e, r);
}
function em(e, t, r) {
  return (t.slice(-4) === ".bin" ? Mx : Mf)(e);
}
function rm(e) {
  return (e.slice(-4) === ".bin" ? kx : Lf)();
}
var ac = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, nc = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Kr(e, t) {
  var r = e.split(/\s+/), a = [];
  if (t || (a[0] = r[0]), r.length === 1)
    return a;
  var n = e.match(ac), i, s, f, c;
  if (n)
    for (c = 0; c != n.length; ++c)
      i = n[c].match(nc), (s = i[1].indexOf(":")) === -1 ? a[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), a[f] = i[2].slice(1, i[2].length - 1));
  return a;
}
function tm(e) {
  var t = e.split(/\s+/), r = {};
  if (t.length === 1)
    return r;
  var a = e.match(ac), n, i, s, f;
  if (a)
    for (f = 0; f != a.length; ++f)
      n = a[f].match(nc), (i = n[1].indexOf(":")) === -1 ? r[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), r[s] = n[2].slice(1, n[2].length - 1));
  return r;
}
var Da;
function am(e, t) {
  var r = Da[e] || Oe(e);
  return r === "General" ? Mt(t) : Pr(r, t);
}
function nm(e, t, r, a) {
  var n = a;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = We(a);
      break;
    case "i2":
    case "int":
      n = parseInt(a, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(a);
      break;
    case "date":
    case "dateTime.tz":
      n = Ve(a);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[Oe(t)] = n;
}
function im(e, t, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || vt[e.v] : t === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Na(e.v) : e.w = Mt(e.v) : e.w = am(t || "General", e.v);
      } catch (i) {
        if (r.WTF)
          throw i;
      }
    try {
      var a = Da[t] || t || "General";
      if (r.cellNF && (e.z = a), r.cellDates && e.t == "n" && Gt(a)) {
        var n = wt(e.v);
        n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u));
      }
    } catch (i) {
      if (r.WTF)
        throw i;
    }
  }
}
function sm(e, t, r) {
  if (r.cellStyles && t.Interior) {
    var a = t.Interior;
    a.Pattern && (a.patternType = _1[a.Pattern] || a.Pattern);
  }
  e[t.ID] = t;
}
function fm(e, t, r, a, n, i, s, f, c, o) {
  var l = "General", u = a.StyleID, x = {};
  o = o || {};
  var d = [], v = 0;
  for (u === void 0 && f && (u = f.StyleID), u === void 0 && s && (u = s.StyleID); i[u] !== void 0 && (i[u].nf && (l = i[u].nf), i[u].Interior && d.push(i[u].Interior), !!i[u].Parent); )
    u = i[u].Parent;
  switch (r.Type) {
    case "Boolean":
      a.t = "b", a.v = We(e);
      break;
    case "String":
      a.t = "s", a.r = wi(Oe(e)), a.v = e.indexOf("<") > -1 ? Oe(t || e).replace(/<.*?>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = (Ve(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3), a.v !== a.v ? a.v = Oe(e) : a.v < 60 && (a.v = a.v - 1), (!l || l == "General") && (l = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = Js[e], o.cellText !== !1 && (a.w = e);
      break;
    default:
      e == "" && t == "" ? a.t = "z" : (a.t = "s", a.v = wi(t || e));
      break;
  }
  if (im(a, l, o), o.cellFormula !== !1)
    if (a.Formula) {
      var h = Oe(a.Formula);
      h.charCodeAt(0) == 61 && (h = h.slice(1)), a.f = ia(h, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = ia("RC:RC", n) : a.ArrayRange && (a.F = ia(a.ArrayRange, n), c.push([Ae(a.F), a.F]));
    } else
      for (v = 0; v < c.length; ++v)
        n.r >= c[v][0].s.r && n.r <= c[v][0].e.r && n.c >= c[v][0].s.c && n.c <= c[v][0].e.c && (a.F = c[v][1]);
  o.cellStyles && (d.forEach(function(p) {
    !x.patternType && p.patternType && (x.patternType = p.patternType);
  }), a.s = x), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function cm(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function $0(e, t) {
  var r = t || {};
  la();
  var a = ra(wn(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (typeof De < "u" ? a = De.utils.decode(65001, u0(a)) : a = Le(a));
  var n = a.slice(0, 1024).toLowerCase(), i = !1;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = Me(r);
    return s.type = "string", ca.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(Je) {
    n.indexOf("<" + Je) >= 0 && (i = !0);
  }), i)
    return Gm(a, r);
  Da = {
    "General Number": "General",
    "General Date": de[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": de[15],
    "Short Date": de[14],
    "Long Time": de[19],
    "Medium Time": de[18],
    "Short Time": de[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: de[2],
    Standard: de[4],
    Percent: de[10],
    Scientific: de[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var f, c = [], o, l = {}, u = [], x = r.dense ? [] : {}, d = "", v = {}, h = {}, p = Kr('<Data ss:Type="String">'), w = 0, y = 0, g = 0, D = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, b = {}, N = {}, F = "", B = 0, I = [], z = {}, X = {}, L = 0, J = [], le = [], ie = {}, he = [], ce, Pe = !1, V = [], ve = [], ge = {}, C = 0, P = 0, O = { Sheets: [], WBProps: { date1904: !1 } }, R = {};
  La.lastIndex = 0, a = a.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var j = ""; f = La.exec(a); )
    switch (f[3] = (j = f[3]).toLowerCase()) {
      case "data":
        if (j == "data") {
          if (f[1] === "/") {
            if ((o = c.pop())[0] !== f[3])
              throw new Error("Bad state: " + o.join("|"));
          } else
            f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
          break;
        }
        if (c[c.length - 1][1])
          break;
        f[1] === "/" ? fm(a.slice(w, f.index), F, p, c[c.length - 1][0] == "comment" ? ie : v, { c: y, r: g }, b, he[y], h, V, r) : (F = "", p = Kr(f[0]), w = f.index + f[0].length);
        break;
      case "cell":
        if (f[1] === "/")
          if (le.length > 0 && (v.c = le), (!r.sheetRows || r.sheetRows > g) && v.v !== void 0 && (r.dense ? (x[g] || (x[g] = []), x[g][y] = v) : x[He(y) + Ke(g)] = v), v.HRef && (v.l = { Target: Oe(v.HRef) }, v.HRefScreenTip && (v.l.Tooltip = v.HRefScreenTip), delete v.HRef, delete v.HRefScreenTip), (v.MergeAcross || v.MergeDown) && (C = y + (parseInt(v.MergeAcross, 10) | 0), P = g + (parseInt(v.MergeDown, 10) | 0), I.push({ s: { c: y, r: g }, e: { c: C, r: P } })), !r.sheetStubs)
            v.MergeAcross ? y = C + 1 : ++y;
          else if (v.MergeAcross || v.MergeDown) {
            for (var re = y; re <= C; ++re)
              for (var te = g; te <= P; ++te)
                (re > y || te > g) && (r.dense ? (x[te] || (x[te] = []), x[te][re] = { t: "z" }) : x[He(re) + Ke(te)] = { t: "z" });
            y = C + 1;
          } else
            ++y;
        else
          v = tm(f[0]), v.Index && (y = +v.Index - 1), y < D.s.c && (D.s.c = y), y > D.e.c && (D.e.c = y), f[0].slice(-2) === "/>" && ++y, le = [];
        break;
      case "row":
        f[1] === "/" || f[0].slice(-2) === "/>" ? (g < D.s.r && (D.s.r = g), g > D.e.r && (D.e.r = g), f[0].slice(-2) === "/>" && (h = Kr(f[0]), h.Index && (g = +h.Index - 1)), y = 0, ++g) : (h = Kr(f[0]), h.Index && (g = +h.Index - 1), ge = {}, (h.AutoFitHeight == "0" || h.Height) && (ge.hpx = parseInt(h.Height, 10), ge.hpt = Ha(ge.hpx), ve[g] = ge), h.Hidden == "1" && (ge.hidden = !0, ve[g] = ge));
        break;
      case "worksheet":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
          u.push(d), D.s.r <= D.e.r && D.s.c <= D.e.c && (x["!ref"] = we(D), r.sheetRows && r.sheetRows <= D.e.r && (x["!fullref"] = x["!ref"], D.e.r = r.sheetRows - 1, x["!ref"] = we(D))), I.length && (x["!merges"] = I), he.length > 0 && (x["!cols"] = he), ve.length > 0 && (x["!rows"] = ve), l[d] = x;
        } else
          D = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, g = y = 0, c.push([f[3], !1]), o = Kr(f[0]), d = Oe(o.Name), x = r.dense ? [] : {}, I = [], V = [], ve = [], R = { name: d, Hidden: 0 }, O.Sheets.push(R);
        break;
      case "table":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else {
          if (f[0].slice(-2) == "/>")
            break;
          c.push([f[3], !1]), he = [], Pe = !1;
        }
        break;
      case "style":
        f[1] === "/" ? sm(b, N, r) : N = Kr(f[0]);
        break;
      case "numberformat":
        N.nf = Oe(Kr(f[0]).Format || "General"), Da[N.nf] && (N.nf = Da[N.nf]);
        for (var Q = 0; Q != 392 && de[Q] != N.nf; ++Q)
          ;
        if (Q == 392) {
          for (Q = 57; Q != 392; ++Q)
            if (de[Q] == null) {
              at(N.nf, Q);
              break;
            }
        }
        break;
      case "column":
        if (c[c.length - 1][0] !== "table")
          break;
        if (ce = Kr(f[0]), ce.Hidden && (ce.hidden = !0, delete ce.Hidden), ce.Width && (ce.wpx = parseInt(ce.Width, 10)), !Pe && ce.wpx > 10) {
          Pe = !0, mr = If;
          for (var Z = 0; Z < he.length; ++Z)
            he[Z] && St(he[Z]);
        }
        Pe && St(ce), he[ce.Index - 1 || he.length] = ce;
        for (var Ee = 0; Ee < +ce.Span; ++Ee)
          he[he.length] = Me(ce);
        break;
      case "namedrange":
        if (f[1] === "/")
          break;
        O.Names || (O.Names = []);
        var A = me(f[0]), Ue = {
          Name: A.Name,
          Ref: ia(A.RefersTo.slice(1), { r: 0, c: 0 })
        };
        O.Sheets.length > 0 && (Ue.Sheet = O.Sheets.length - 1), O.Names.push(Ue);
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (f[0].slice(-2) === "/>")
          break;
        f[1] === "/" ? F += a.slice(B, f.index) : B = f.index + f[0].length;
        break;
      case "interior":
        if (!r.cellStyles)
          break;
        N.Interior = Kr(f[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (f[0].slice(-2) === "/>")
          break;
        f[1] === "/" ? Nl(z, j, a.slice(L, f.index)) : L = f.index + f[0].length;
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else
          c.push([f[3], !1]);
        break;
      case "comment":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
          cm(ie), le.push(ie);
        } else
          c.push([f[3], !1]), o = Kr(f[0]), ie = { a: o.Author };
        break;
      case "autofilter":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else if (f[0].charAt(f[0].length - 2) !== "/") {
          var Ce = Kr(f[0]);
          x["!autofilter"] = { ref: ia(Ce.Range).replace(/\$/g, "") }, c.push([f[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else
          f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else
          f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
        break;
      case "null":
        break;
      default:
        if (c.length == 0 && f[3] == "document" || c.length == 0 && f[3] == "uof")
          return cs(a, r);
        var Be = !0;
        switch (c[c.length - 1][0]) {
          case "officedocumentsettings":
            switch (f[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                Be = !1;
            }
            break;
          case "componentoptions":
            switch (f[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                Be = !1;
            }
            break;
          case "excelworkbook":
            switch (f[3]) {
              case "date1904":
                O.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                Be = !1;
            }
            break;
          case "workbookoptions":
            switch (f[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                Be = !1;
            }
            break;
          case "worksheetoptions":
            switch (f[3]) {
              case "visible":
                if (f[0].slice(-2) !== "/>")
                  if (f[1] === "/")
                    switch (a.slice(L, f.index)) {
                      case "SheetHidden":
                        R.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        R.Hidden = 2;
                        break;
                    }
                  else
                    L = f.index + f[0].length;
                break;
              case "header":
                x["!margins"] || Lt(x["!margins"] = {}, "xlml"), isNaN(+me(f[0]).Margin) || (x["!margins"].header = +me(f[0]).Margin);
                break;
              case "footer":
                x["!margins"] || Lt(x["!margins"] = {}, "xlml"), isNaN(+me(f[0]).Margin) || (x["!margins"].footer = +me(f[0]).Margin);
                break;
              case "pagemargins":
                var ye = me(f[0]);
                x["!margins"] || Lt(x["!margins"] = {}, "xlml"), isNaN(+ye.Top) || (x["!margins"].top = +ye.Top), isNaN(+ye.Left) || (x["!margins"].left = +ye.Left), isNaN(+ye.Right) || (x["!margins"].right = +ye.Right), isNaN(+ye.Bottom) || (x["!margins"].bottom = +ye.Bottom);
                break;
              case "displayrighttoleft":
                O.Views || (O.Views = []), O.Views[0] || (O.Views[0] = {}), O.Views[0].RTL = !0;
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                x["!outline"] || (x["!outline"] = {}), x["!outline"].above = !0;
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                x["!outline"] || (x["!outline"] = {}), x["!outline"].left = !0;
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                Be = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (f[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                Be = !1;
            }
            break;
          case "pagebreaks":
            switch (f[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                Be = !1;
            }
            break;
          case "autofilter":
            switch (f[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                Be = !1;
            }
            break;
          case "querytable":
            switch (f[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                Be = !1;
            }
            break;
          case "datavalidation":
            switch (f[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                Be = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (f[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                Be = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (f[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                Be = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            Be = !1;
            break;
        }
        if (Be || f[3].match(/!\[CDATA/))
          break;
        if (!c[c.length - 1][1])
          throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
        if (c[c.length - 1][0] === "customdocumentproperties") {
          if (f[0].slice(-2) === "/>")
            break;
          f[1] === "/" ? nm(X, j, J, a.slice(L, f.index)) : (J = f, L = f.index + f[0].length);
          break;
        }
        if (r.WTF)
          throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
    }
  var fe = {};
  return !r.bookSheets && !r.bookProps && (fe.Sheets = l), fe.SheetNames = u, fe.Workbook = O, fe.SSF = Me(de), fe.Props = z, fe.Custprops = X, fe;
}
function fn(e, t) {
  switch (jn(t = t || {}), t.type || "base64") {
    case "base64":
      return $0(br(e), t);
    case "binary":
    case "buffer":
    case "file":
      return $0(e, t);
    case "array":
      return $0(At(e), t);
  }
}
function om(e, t) {
  var r = [];
  return e.Props && r.push(bl(e.Props, t)), e.Custprops && r.push(Pl(e.Props, e.Custprops)), r.join("");
}
function lm() {
  return "";
}
function um(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(ae("NumberFormat", null, { "ss:Format": be(de[a.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + n) };
    r.push(ae("Style", i.join(""), s));
  }), ae("Styles", r.join(""));
}
function ic(e) {
  return ae("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + Vn(e.Ref, { r: 0, c: 0 }) });
}
function hm(e) {
  if (!((e || {}).Workbook || {}).Names)
    return "";
  for (var t = e.Workbook.Names, r = [], a = 0; a < t.length; ++a) {
    var n = t[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || r.push(ic(n)));
  }
  return ae("Names", r.join(""));
}
function xm(e, t, r, a) {
  if (!e || !((a || {}).Workbook || {}).Names)
    return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(ic(f)));
  }
  return i.join("");
}
function dm(e, t, r, a) {
  if (!e)
    return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(ae("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(ae("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(ae("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[r])
    if (a.Workbook.Sheets[r].Hidden)
      n.push(ae("Visible", a.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var i = 0; i < r && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i)
        ;
      i == r && n.push("<Selected/>");
    }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(hr("ProtectContents", "True")), e["!protect"].objects && n.push(hr("ProtectObjects", "True")), e["!protect"].scenarios && n.push(hr("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(hr("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(hr("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : ae("WorksheetOptions", n.join(""), { xmlns: Or.x });
}
function vm(e) {
  return e.map(function(t) {
    var r = Bo(t.t || ""), a = ae("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return ae("Comment", a, { "ss:Author": t.a });
  }).join("");
}
function pm(e, t, r, a, n, i, s) {
  if (!e || e.v == null && e.f == null)
    return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + be(Vn(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
    var c = ze(e.F.slice(t.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (c.r == s.r ? "" : "[" + (c.r - s.r) + "]") + "C" + (c.c == s.c ? "" : "[" + (c.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = be(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = be(e.l.Tooltip))), r["!merges"])
    for (var o = r["!merges"], l = 0; l != o.length; ++l)
      o[l].s.c != s.c || o[l].s.r != s.r || (o[l].e.c > o[l].s.c && (f["ss:MergeAcross"] = o[l].e.c - o[l].s.c), o[l].e.r > o[l].s.r && (f["ss:MergeDown"] = o[l].e.r - o[l].s.r));
  var u = "", x = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs)
        return "";
      break;
    case "n":
      u = "Number", x = String(e.v);
      break;
    case "b":
      u = "Boolean", x = e.v ? "1" : "0";
      break;
    case "e":
      u = "Error", x = vt[e.v];
      break;
    case "d":
      u = "DateTime", x = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || de[14]);
      break;
    case "s":
      u = "String", x = Lo(e.v || "");
      break;
  }
  var d = Dt(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + d), f["ss:Index"] = s.c + 1;
  var v = e.v != null ? x : "", h = e.t == "z" ? "" : '<Data ss:Type="' + u + '">' + v + "</Data>";
  return (e.c || []).length > 0 && (h += vm(e.c)), ae("Cell", h, f);
}
function mm(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = oa(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function gm(e, t, r, a) {
  if (!e["!ref"])
    return "";
  var n = Ae(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(p, w) {
    St(p);
    var y = !!p.width, g = N0(w, p), D = { "ss:Index": w + 1 };
    y && (D["ss:Width"] = Ua(g.width)), p.hidden && (D["ss:Hidden"] = "1"), f.push(ae("Column", null, D));
  });
  for (var c = Array.isArray(e), o = n.s.r; o <= n.e.r; ++o) {
    for (var l = [mm(o, (e["!rows"] || [])[o])], u = n.s.c; u <= n.e.c; ++u) {
      var x = !1;
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > u) && !(i[s].s.r > o) && !(i[s].e.c < u) && !(i[s].e.r < o)) {
          (i[s].s.c != u || i[s].s.r != o) && (x = !0);
          break;
        }
      if (!x) {
        var d = { r: o, c: u }, v = pe(d), h = c ? (e[o] || [])[u] : e[v];
        l.push(pm(h, v, e, t, r, a, d));
      }
    }
    l.push("</Row>"), l.length > 2 && f.push(l.join(""));
  }
  return f.join("");
}
function _m(e, t, r) {
  var a = [], n = r.SheetNames[e], i = r.Sheets[n], s = i ? xm(i, t, e, r) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? gm(i, t, e, r) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(dm(i, t, e, r)), a.join("");
}
function wm(e, t) {
  t || (t = {}), e.SSF || (e.SSF = Me(de)), e.SSF && (la(), $a(e.SSF), t.revssf = A0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], Dt(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(om(e, t)), r.push(lm()), r.push(""), r.push("");
  for (var a = 0; a < e.SheetNames.length; ++a)
    r.push(ae("Worksheet", _m(a, t, e), { "ss:Name": be(e.SheetNames[a]) }));
  return r[2] = um(e, t), r[3] = hm(e), Qe + ae("Workbook", r.join(""), {
    xmlns: Or.ss,
    "xmlns:o": Or.o,
    "xmlns:x": Or.x,
    "xmlns:ss": Or.ss,
    "xmlns:dt": Or.dt,
    "xmlns:html": Or.html
  });
}
function km(e) {
  var t = {}, r = e.content;
  if (r.l = 28, t.AnsiUserType = r.read_shift(0, "lpstr-ansi"), t.AnsiClipboardFormat = xl(r), r.length - r.l <= 4)
    return t;
  var a = r.read_shift(4);
  if (a == 0 || a > 40 || (r.l -= 4, t.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (a = r.read_shift(4), a !== 1907505652) || (t.UnicodeClipboardFormat = dl(r), a = r.read_shift(4), a == 0 || a > 40))
    return t;
  r.l -= 4, t.Reserved2 = r.read_shift(0, "lpwstr");
}
var Em = [60, 1084, 2066, 2165, 2175];
function Tm(e, t, r, a, n) {
  var i = a, s = [], f = r.slice(r.l, r.l + i);
  if (n && n.enc && n.enc.insitu && f.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        n.enc.insitu(f);
    }
  s.push(f), r.l += i;
  for (var c = lt(r, r.l), o = cn[c], l = 0; o != null && Em.indexOf(c) > -1; )
    i = lt(r, r.l + 2), l = r.l + 4, c == 2066 ? l += 4 : (c == 2165 || c == 2175) && (l += 12), f = r.slice(l, r.l + 4 + i), s.push(f), r.l += 4 + i, o = cn[c = lt(r, r.l)];
  var u = cr(s);
  ur(u, 0);
  var x = 0;
  u.lens = [];
  for (var d = 0; d < s.length; ++d)
    u.lens.push(x), x += s[d].length;
  if (u.length < a)
    throw "XLS Record 0x" + e.toString(16) + " Truncated: " + u.length + " < " + a;
  return t.f(u, u.length, n);
}
function Qr(e, t, r) {
  if (e.t !== "z" && !!e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, t.cellNF && (e.z = de[a]);
    } catch (i) {
      if (t.WTF)
        throw i;
    }
    if (!t || t.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || vt[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Na(e.v) : e.w = Mt(e.v) : e.w = Pr(a, e.v, { date1904: !!r, dateNF: t && t.dateNF });
      } catch (i) {
        if (t.WTF)
          throw i;
      }
    if (t.cellDates && a && e.t == "n" && Gt(de[a] || String(a))) {
      var n = wt(e.v);
      n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u));
    }
  }
}
function o0(e, t, r) {
  return { v: e, ixfe: t, t: r };
}
function Sm(e, t) {
  var r = { opts: {} }, a = {}, n = t.dense ? [] : {}, i = {}, s = {}, f = null, c = [], o = "", l = {}, u, x = "", d, v, h, p, w = {}, y = [], g, D, b = [], N = [], F = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, B = {}, I = function(Se) {
    return Se < 8 ? Nt[Se] : Se < 64 && N[Se - 8] || Nt[Se];
  }, z = function(Se, Ze, Br) {
    var ar = Ze.XF.data;
    if (!(!ar || !ar.patternType || !Br || !Br.cellStyles)) {
      Ze.s = {}, Ze.s.patternType = ar.patternType;
      var Ot;
      (Ot = Ma(I(ar.icvFore))) && (Ze.s.fgColor = { rgb: Ot }), (Ot = Ma(I(ar.icvBack))) && (Ze.s.bgColor = { rgb: Ot });
    }
  }, X = function(Se, Ze, Br) {
    if (!(ge > 1) && !(Br.sheetRows && Se.r >= Br.sheetRows)) {
      if (Br.cellStyles && Ze.XF && Ze.XF.data && z(Se, Ze, Br), delete Ze.ixfe, delete Ze.XF, u = Se, x = pe(Se), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Se.r < s.s.r && (s.s.r = Se.r), Se.c < s.s.c && (s.s.c = Se.c), Se.r + 1 > s.e.r && (s.e.r = Se.r + 1), Se.c + 1 > s.e.c && (s.e.c = Se.c + 1), Br.cellFormula && Ze.f) {
        for (var ar = 0; ar < y.length; ++ar)
          if (!(y[ar][0].s.c > Se.c || y[ar][0].s.r > Se.r) && !(y[ar][0].e.c < Se.c || y[ar][0].e.r < Se.r)) {
            Ze.F = we(y[ar][0]), (y[ar][0].s.c != Se.c || y[ar][0].s.r != Se.r) && delete Ze.f, Ze.f && (Ze.f = "" + pr(y[ar][1], s, Se, V, L));
            break;
          }
      }
      Br.dense ? (n[Se.r] || (n[Se.r] = []), n[Se.r][Se.c] = Ze) : n[x] = Ze;
    }
  }, L = {
    enc: !1,
    sbcch: 0,
    snames: [],
    sharedf: w,
    arrayf: y,
    rrtabid: [],
    lastuser: "",
    biff: 8,
    codepage: 0,
    winlocked: 0,
    cellStyles: !!t && !!t.cellStyles,
    WTF: !!t && !!t.wtf
  };
  t.password && (L.password = t.password);
  var J, le = [], ie = [], he = [], ce = [], Pe = !1, V = [];
  V.SheetNames = L.snames, V.sharedf = L.sharedf, V.arrayf = L.arrayf, V.names = [], V.XTI = [];
  var ve = 0, ge = 0, C = 0, P = [], O = [], R;
  L.codepage = 1200, Gr(1200);
  for (var j = !1; e.l < e.length - 1; ) {
    var re = e.l, te = e.read_shift(2);
    if (te === 0 && ve === 10)
      break;
    var Q = e.l === e.length ? 0 : e.read_shift(2), Z = cn[te];
    if (Z && Z.f) {
      if (t.bookSheets && ve === 133 && te !== 133)
        break;
      if (ve = te, Z.r === 2 || Z.r == 12) {
        var Ee = e.read_shift(2);
        if (Q -= 2, !L.enc && Ee !== te && ((Ee & 255) << 8 | Ee >> 8) !== te)
          throw new Error("rt mismatch: " + Ee + "!=" + te);
        Z.r == 12 && (e.l += 10, Q -= 10);
      }
      var A = {};
      if (te === 10 ? A = Z.f(e, Q, L) : A = Tm(te, Z, e, Q, L), ge == 0 && [9, 521, 1033, 2057].indexOf(ve) === -1)
        continue;
      switch (te) {
        case 34:
          r.opts.Date1904 = F.WBProps.date1904 = A;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if (L.enc || (e.l = 0), L.enc = A, !t.password)
            throw new Error("File is password-protected");
          if (A.valid == null)
            throw new Error("Encryption scheme unsupported");
          if (!A.valid)
            throw new Error("Password is incorrect");
          break;
        case 92:
          L.lastuser = A;
          break;
        case 66:
          var Ue = Number(A);
          switch (Ue) {
            case 21010:
              Ue = 1200;
              break;
            case 32768:
              Ue = 1e4;
              break;
            case 32769:
              Ue = 1252;
              break;
          }
          Gr(L.codepage = Ue), j = !0;
          break;
        case 317:
          L.rrtabid = A;
          break;
        case 25:
          L.winlocked = A;
          break;
        case 439:
          r.opts.RefreshAll = A;
          break;
        case 12:
          r.opts.CalcCount = A;
          break;
        case 16:
          r.opts.CalcDelta = A;
          break;
        case 17:
          r.opts.CalcIter = A;
          break;
        case 13:
          r.opts.CalcMode = A;
          break;
        case 14:
          r.opts.CalcPrecision = A;
          break;
        case 95:
          r.opts.CalcSaveRecalc = A;
          break;
        case 15:
          L.CalcRefMode = A;
          break;
        case 2211:
          r.opts.FullCalc = A;
          break;
        case 129:
          A.fDialog && (n["!type"] = "dialog"), A.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = !0), A.fRight || ((n["!outline"] || (n["!outline"] = {})).left = !0);
          break;
        case 224:
          b.push(A);
          break;
        case 430:
          V.push([A]), V[V.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          V[V.length - 1].push(A);
          break;
        case 24:
        case 536:
          R = {
            Name: A.Name,
            Ref: pr(A.rgce, s, null, V, L)
          }, A.itab > 0 && (R.Sheet = A.itab - 1), V.names.push(R), V[0] || (V[0] = [], V[0].XTI = []), V[V.length - 1].push(A), A.Name == "_xlnm._FilterDatabase" && A.itab > 0 && A.rgce && A.rgce[0] && A.rgce[0][0] && A.rgce[0][0][0] == "PtgArea3d" && (O[A.itab - 1] = { ref: we(A.rgce[0][0][1][2]) });
          break;
        case 22:
          L.ExternCount = A;
          break;
        case 23:
          V.length == 0 && (V[0] = [], V[0].XTI = []), V[V.length - 1].XTI = V[V.length - 1].XTI.concat(A), V.XTI = V.XTI.concat(A);
          break;
        case 2196:
          if (L.biff < 8)
            break;
          R != null && (R.Comment = A[1]);
          break;
        case 18:
          n["!protect"] = A;
          break;
        case 19:
          A !== 0 && L.WTF && console.error("Password verifier: " + A);
          break;
        case 133:
          i[A.pos] = A, L.snames.push(A.name);
          break;
        case 10:
          {
            if (--ge)
              break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = we(s), t.sheetRows && t.sheetRows <= s.e.r) {
                  var Ce = s.e.r;
                  s.e.r = t.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = we(s), s.e.r = Ce;
                }
                s.e.r++, s.e.c++;
              }
              le.length > 0 && (n["!merges"] = le), ie.length > 0 && (n["!objects"] = ie), he.length > 0 && (n["!cols"] = he), ce.length > 0 && (n["!rows"] = ce), F.Sheets.push(B);
            }
            o === "" ? l = n : a[o] = n, n = t.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (L.biff === 8 && (L.biff = {
              9: 2,
              521: 3,
              1033: 4
            }[te] || {
              512: 2,
              768: 3,
              1024: 4,
              1280: 5,
              1536: 8,
              2: 2,
              7: 2
            }[A.BIFFVer] || 8), L.biffguess = A.BIFFVer == 0, A.BIFFVer == 0 && A.dt == 4096 && (L.biff = 5, j = !0, Gr(L.codepage = 28591)), L.biff == 8 && A.BIFFVer == 0 && A.dt == 16 && (L.biff = 2), ge++)
              break;
            if (n = t.dense ? [] : {}, L.biff < 8 && !j && (j = !0, Gr(L.codepage = t.codepage || 1252)), L.biff < 5 || A.BIFFVer == 0 && A.dt == 4096) {
              o === "" && (o = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Be = { pos: e.l - Q, name: o };
              i[Be.pos] = Be, L.snames.push(o);
            } else
              o = (i[re] || { name: "" }).name;
            A.dt == 32 && (n["!type"] = "chart"), A.dt == 64 && (n["!type"] = "macro"), le = [], ie = [], L.arrayf = y = [], he = [], ce = [], Pe = !1, B = { Hidden: (i[re] || { hs: 0 }).hs, name: o };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (t.dense ? (n[A.r] || [])[A.c] : n[pe({ c: A.c, r: A.r })]) && ++A.c, g = { ixfe: A.ixfe, XF: b[A.ixfe] || {}, v: A.val, t: "n" }, C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: A.c, r: A.r }, g, t);
          break;
        case 5:
        case 517:
          g = { ixfe: A.ixfe, XF: b[A.ixfe], v: A.val, t: A.t }, C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: A.c, r: A.r }, g, t);
          break;
        case 638:
          g = { ixfe: A.ixfe, XF: b[A.ixfe], v: A.rknum, t: "n" }, C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: A.c, r: A.r }, g, t);
          break;
        case 189:
          for (var ye = A.c; ye <= A.C; ++ye) {
            var fe = A.rkrec[ye - A.c][0];
            g = { ixfe: fe, XF: b[fe], v: A.rkrec[ye - A.c][1], t: "n" }, C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: ye, r: A.r }, g, t);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (A.val == "String") {
              f = A;
              break;
            }
            if (g = o0(A.val, A.cell.ixfe, A.tt), g.XF = b[g.ixfe], t.cellFormula) {
              var Je = A.formula;
              if (Je && Je[0] && Je[0][0] && Je[0][0][0] == "PtgExp") {
                var Lr = Je[0][0][1][0], Zr = Je[0][0][1][1], ft = pe({ r: Lr, c: Zr });
                w[ft] ? g.f = "" + pr(A.formula, s, A.cell, V, L) : g.F = ((t.dense ? (n[Lr] || [])[Zr] : n[ft]) || {}).F;
              } else
                g.f = "" + pr(A.formula, s, A.cell, V, L);
            }
            C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X(A.cell, g, t), f = A;
          }
          break;
        case 7:
        case 519:
          if (f)
            f.val = A, g = o0(A, f.cell.ixfe, "s"), g.XF = b[g.ixfe], t.cellFormula && (g.f = "" + pr(f.formula, s, f.cell, V, L)), C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X(f.cell, g, t), f = null;
          else
            throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            y.push(A);
            var da = pe(A[0].s);
            if (d = t.dense ? (n[A[0].s.r] || [])[A[0].s.c] : n[da], t.cellFormula && d) {
              if (!f || !da || !d)
                break;
              d.f = "" + pr(A[1], s, A[0], V, L), d.F = we(A[0]);
            }
          }
          break;
        case 1212:
          {
            if (!t.cellFormula)
              break;
            if (x) {
              if (!f)
                break;
              w[pe(f.cell)] = A[0], d = t.dense ? (n[f.cell.r] || [])[f.cell.c] : n[pe(f.cell)], (d || {}).f = "" + pr(A[0], s, u, V, L);
            }
          }
          break;
        case 253:
          g = o0(c[A.isst].t, A.ixfe, "s"), c[A.isst].h && (g.h = c[A.isst].h), g.XF = b[g.ixfe], C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: A.c, r: A.r }, g, t);
          break;
        case 513:
          t.sheetStubs && (g = { ixfe: A.ixfe, XF: b[A.ixfe], t: "z" }, C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: A.c, r: A.r }, g, t));
          break;
        case 190:
          if (t.sheetStubs)
            for (var pt = A.c; pt <= A.C; ++pt) {
              var Dr = A.ixfe[pt - A.c];
              g = { ixfe: Dr, XF: b[Dr], t: "z" }, C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: pt, r: A.r }, g, t);
            }
          break;
        case 214:
        case 516:
        case 4:
          g = o0(A.val, A.ixfe, "s"), g.XF = b[g.ixfe], C > 0 && (g.z = P[g.ixfe >> 8 & 63]), Qr(g, t, r.opts.Date1904), X({ c: A.c, r: A.r }, g, t);
          break;
        case 0:
        case 512:
          ge === 1 && (s = A);
          break;
        case 252:
          c = A;
          break;
        case 1054:
          if (L.biff == 4) {
            P[C++] = A[1];
            for (var ct = 0; ct < C + 163 && de[ct] != A[1]; ++ct)
              ;
            ct >= 163 && at(A[1], C + 163);
          } else
            at(A[1], A[0]);
          break;
        case 30:
          {
            P[C++] = A;
            for (var mt = 0; mt < C + 163 && de[mt] != A; ++mt)
              ;
            mt >= 163 && at(A, C + 163);
          }
          break;
        case 229:
          le = le.concat(A);
          break;
        case 93:
          ie[A.cmo[0]] = L.lastobj = A;
          break;
        case 438:
          L.lastobj.TxO = A;
          break;
        case 127:
          L.lastobj.ImData = A;
          break;
        case 440:
          for (p = A[0].s.r; p <= A[0].e.r; ++p)
            for (h = A[0].s.c; h <= A[0].e.c; ++h)
              d = t.dense ? (n[p] || [])[h] : n[pe({ c: h, r: p })], d && (d.l = A[1]);
          break;
        case 2048:
          for (p = A[0].s.r; p <= A[0].e.r; ++p)
            for (h = A[0].s.c; h <= A[0].e.c; ++h)
              d = t.dense ? (n[p] || [])[h] : n[pe({ c: h, r: p })], d && d.l && (d.l.Tooltip = A[1]);
          break;
        case 28:
          {
            if (L.biff <= 5 && L.biff >= 2)
              break;
            d = t.dense ? (n[A[0].r] || [])[A[0].c] : n[pe(A[0])];
            var va = ie[A[2]];
            d || (t.dense ? (n[A[0].r] || (n[A[0].r] = []), d = n[A[0].r][A[0].c] = { t: "z" }) : d = n[pe(A[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, A[0].r), s.s.r = Math.min(s.s.r, A[0].r), s.e.c = Math.max(s.e.c, A[0].c), s.s.c = Math.min(s.s.c, A[0].c)), d.c || (d.c = []), v = { a: A[1], t: va.TxO.t }, d.c.push(v);
          }
          break;
        case 2173:
          hx(b[A.ixfe], A.ext);
          break;
        case 125:
          {
            if (!L.cellStyles)
              break;
            for (; A.e >= A.s; )
              he[A.e--] = { width: A.w / 256, level: A.level || 0, hidden: !!(A.flags & 1) }, Pe || (Pe = !0, Un(A.w / 256)), St(he[A.e + 1]);
          }
          break;
        case 520:
          {
            var Tr = {};
            A.level != null && (ce[A.r] = Tr, Tr.level = A.level), A.hidden && (ce[A.r] = Tr, Tr.hidden = !0), A.hpt && (ce[A.r] = Tr, Tr.hpt = A.hpt, Tr.hpx = oa(A.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || Lt(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[te]] = A;
          break;
        case 161:
          n["!margins"] || Lt(n["!margins"] = {}), n["!margins"].header = A.header, n["!margins"].footer = A.footer;
          break;
        case 574:
          A.RTL && (F.Views[0].RTL = !0);
          break;
        case 146:
          N = A;
          break;
        case 2198:
          J = A;
          break;
        case 140:
          D = A;
          break;
        case 442:
          o ? B.CodeName = A || B.name : F.WBProps.CodeName = A || "ThisWorkbook";
          break;
      }
    } else
      Z || console.error("Missing Info for XLS Record 0x" + te.toString(16)), e.l += Q;
  }
  return r.SheetNames = Ye(i).sort(function(qr, Se) {
    return Number(qr) - Number(Se);
  }).map(function(qr) {
    return i[qr].name;
  }), t.bookSheets || (r.Sheets = a), !r.SheetNames.length && l["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = l)) : r.Preamble = l, r.Sheets && O.forEach(function(qr, Se) {
    r.Sheets[r.SheetNames[Se]]["!autofilter"] = qr;
  }), r.Strings = c, r.SSF = Me(de), L.enc && (r.Encryption = L.enc), J && (r.Themes = J), r.Metadata = {}, D !== void 0 && (r.Metadata.Country = D), V.names.length > 0 && (F.Names = V.names), r.Workbook = F, r;
}
var Oa = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Fm(e, t, r) {
  var a = xe.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0)
    try {
      var n = Mi(a, en, Oa.DSI);
      for (var i in n)
        t[i] = n[i];
    } catch (o) {
      if (r.WTF)
        throw o;
    }
  var s = xe.find(e, "/!SummaryInformation");
  if (s && s.size > 0)
    try {
      var f = Mi(s, rn, Oa.SI);
      for (var c in f)
        t[c] == null && (t[c] = f[c]);
    } catch (o) {
      if (r.WTF)
        throw o;
    }
  t.HeadingPairs && t.TitlesOfParts && (tf(t.HeadingPairs, t.TitlesOfParts, t, r), delete t.HeadingPairs, delete t.TitlesOfParts);
}
function ym(e, t) {
  var r = [], a = [], n = [], i = 0, s, f = di(en, "n"), c = di(rn, "n");
  if (e.Props)
    for (s = Ye(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops)
    for (s = Ye(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var o = [];
  for (i = 0; i < n.length; ++i)
    lf.indexOf(n[i][0]) > -1 || rf.indexOf(n[i][0]) > -1 || n[i][1] != null && o.push(n[i]);
  a.length && xe.utils.cfb_add(t, "/SummaryInformation", Ui(a, Oa.SI, c, rn)), (r.length || o.length) && xe.utils.cfb_add(t, "/DocumentSummaryInformation", Ui(r, Oa.DSI, f, en, o.length ? o : null, Oa.UDI));
}
function sc(e, t) {
  t || (t = {}), jn(t), F0(), t.codepage && S0(t.codepage);
  var r, a;
  if (e.FullPaths) {
    if (xe.find(e, "/encryption"))
      throw new Error("File is password-protected");
    r = xe.find(e, "!CompObj"), a = xe.find(e, "/Workbook") || xe.find(e, "/Book");
  } else {
    switch (t.type) {
      case "base64":
        e = Ir(br(e));
        break;
      case "binary":
        e = Ir(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    ur(e, 0), a = { content: e };
  }
  var n, i;
  if (r && km(r), t.bookProps && !t.bookSheets)
    n = {};
  else {
    var s = Te ? "buffer" : "array";
    if (a && a.content)
      n = Sm(a.content, t);
    else if ((i = xe.find(e, "PerfectOffice_MAIN")) && i.content)
      n = Pt.to_workbook(i.content, (t.type = s, t));
    else if ((i = xe.find(e, "NativeContent_MAIN")) && i.content)
      n = Pt.to_workbook(i.content, (t.type = s, t));
    else
      throw (i = xe.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    t.bookVBA && e.FullPaths && xe.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = Wx(e));
  }
  var f = {};
  return e.FullPaths && Fm(e, f, t), n.Props = n.Custprops = f, t.bookFiles && (n.cfb = e), n;
}
function Am(e, t) {
  var r = t || {}, a = xe.utils.cfb_new({ root: "R" }), n = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      n = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      n = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return xe.utils.cfb_add(a, n, fc(e, r)), r.biff == 8 && (e.Props || e.Custprops) && ym(e, a), r.biff == 8 && e.vbaraw && Hx(a, xe.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Va = {
  0: { f: qv },
  1: { f: s2 },
  2: { f: F2 },
  3: { f: d2 },
  4: { f: l2 },
  5: { f: E2 },
  6: { f: O2 },
  7: { f: g2 },
  8: { f: B2 },
  9: { f: L2 },
  10: { f: b2 },
  11: { f: P2 },
  12: { f: c2 },
  13: { f: A2 },
  14: { f: p2 },
  15: { f: h2 },
  16: { f: Zf },
  17: { f: R2 },
  18: { f: w2 },
  19: { f: Dn },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: { T: 1 },
  36: { T: -1 },
  37: { T: 1 },
  38: { T: -1 },
  39: { f: Ip },
  40: {},
  42: {},
  43: { f: O1 },
  44: { f: C1 },
  45: { f: N1 },
  46: { f: P1 },
  47: { f: b1 },
  48: {},
  49: { f: rl },
  50: {},
  51: { f: vx },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: kf },
  62: { f: D2 },
  63: { f: Sx },
  64: { f: Q2 },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: kr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: Y2 },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: n2 },
  148: { f: r2, p: 16 },
  151: { f: X2 },
  152: {},
  153: { f: Cp },
  154: {},
  155: {},
  156: { f: yp },
  157: {},
  158: {},
  159: { T: 1, f: zh },
  160: { T: -1 },
  161: { T: 1, f: Yt },
  162: { T: -1 },
  163: { T: 1 },
  164: { T: -1 },
  165: { T: 1 },
  166: { T: -1 },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: { T: 1 },
  173: { T: -1 },
  174: {},
  175: {},
  176: { f: M2 },
  177: { T: 1 },
  178: { T: -1 },
  179: { T: 1 },
  180: { T: -1 },
  181: { T: 1 },
  182: { T: -1 },
  183: { T: 1 },
  184: { T: -1 },
  185: { T: 1 },
  186: { T: -1 },
  187: { T: 1 },
  188: { T: -1 },
  189: { T: 1 },
  190: { T: -1 },
  191: { T: 1 },
  192: { T: -1 },
  193: { T: 1 },
  194: { T: -1 },
  195: { T: 1 },
  196: { T: -1 },
  197: { T: 1 },
  198: { T: -1 },
  199: { T: 1 },
  200: { T: -1 },
  201: { T: 1 },
  202: { T: -1 },
  203: { T: 1 },
  204: { T: -1 },
  205: { T: 1 },
  206: { T: -1 },
  207: { T: 1 },
  208: { T: -1 },
  209: { T: 1 },
  210: { T: -1 },
  211: { T: 1 },
  212: { T: -1 },
  213: { T: 1 },
  214: { T: -1 },
  215: { T: 1 },
  216: { T: -1 },
  217: { T: 1 },
  218: { T: -1 },
  219: { T: 1 },
  220: { T: -1 },
  221: { T: 1 },
  222: { T: -1 },
  223: { T: 1 },
  224: { T: -1 },
  225: { T: 1 },
  226: { T: -1 },
  227: { T: 1 },
  228: { T: -1 },
  229: { T: 1 },
  230: { T: -1 },
  231: { T: 1 },
  232: { T: -1 },
  233: { T: 1 },
  234: { T: -1 },
  235: { T: 1 },
  236: { T: -1 },
  237: { T: 1 },
  238: { T: -1 },
  239: { T: 1 },
  240: { T: -1 },
  241: { T: 1 },
  242: { T: -1 },
  243: { T: 1 },
  244: { T: -1 },
  245: { T: 1 },
  246: { T: -1 },
  247: { T: 1 },
  248: { T: -1 },
  249: { T: 1 },
  250: { T: -1 },
  251: { T: 1 },
  252: { T: -1 },
  253: { T: 1 },
  254: { T: -1 },
  255: { T: 1 },
  256: { T: -1 },
  257: { T: 1 },
  258: { T: -1 },
  259: { T: 1 },
  260: { T: -1 },
  261: { T: 1 },
  262: { T: -1 },
  263: { T: 1 },
  264: { T: -1 },
  265: { T: 1 },
  266: { T: -1 },
  267: { T: 1 },
  268: { T: -1 },
  269: { T: 1 },
  270: { T: -1 },
  271: { T: 1 },
  272: { T: -1 },
  273: { T: 1 },
  274: { T: -1 },
  275: { T: 1 },
  276: { T: -1 },
  277: {},
  278: { T: 1 },
  279: { T: -1 },
  280: { T: 1 },
  281: { T: -1 },
  282: { T: 1 },
  283: { T: 1 },
  284: { T: -1 },
  285: { T: 1 },
  286: { T: -1 },
  287: { T: 1 },
  288: { T: -1 },
  289: { T: 1 },
  290: { T: -1 },
  291: { T: 1 },
  292: { T: -1 },
  293: { T: 1 },
  294: { T: -1 },
  295: { T: 1 },
  296: { T: -1 },
  297: { T: 1 },
  298: { T: -1 },
  299: { T: 1 },
  300: { T: -1 },
  301: { T: 1 },
  302: { T: -1 },
  303: { T: 1 },
  304: { T: -1 },
  305: { T: 1 },
  306: { T: -1 },
  307: { T: 1 },
  308: { T: -1 },
  309: { T: 1 },
  310: { T: -1 },
  311: { T: 1 },
  312: { T: -1 },
  313: { T: -1 },
  314: { T: 1 },
  315: { T: -1 },
  316: { T: 1 },
  317: { T: -1 },
  318: { T: 1 },
  319: { T: -1 },
  320: { T: 1 },
  321: { T: -1 },
  322: { T: 1 },
  323: { T: -1 },
  324: { T: 1 },
  325: { T: -1 },
  326: { T: 1 },
  327: { T: -1 },
  328: { T: 1 },
  329: { T: -1 },
  330: { T: 1 },
  331: { T: -1 },
  332: { T: 1 },
  333: { T: -1 },
  334: { T: 1 },
  335: { f: xx },
  336: { T: -1 },
  337: { f: gx, T: 1 },
  338: { T: -1 },
  339: { T: 1 },
  340: { T: -1 },
  341: { T: 1 },
  342: { T: -1 },
  343: { T: 1 },
  344: { T: -1 },
  345: { T: 1 },
  346: { T: -1 },
  347: { T: 1 },
  348: { T: -1 },
  349: { T: 1 },
  350: { T: -1 },
  351: {},
  352: {},
  353: { T: 1 },
  354: { T: -1 },
  355: { f: Q0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: wf },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: { T: 1 },
  373: { T: -1 },
  374: { T: 1 },
  375: { T: -1 },
  376: { T: 1 },
  377: { T: -1 },
  378: { T: 1 },
  379: { T: -1 },
  380: { T: 1 },
  381: { T: -1 },
  382: { T: 1 },
  383: { T: -1 },
  384: { T: 1 },
  385: { T: -1 },
  386: { T: 1 },
  387: { T: -1 },
  388: { T: 1 },
  389: { T: -1 },
  390: { T: 1 },
  391: { T: -1 },
  392: { T: 1 },
  393: { T: -1 },
  394: { T: 1 },
  395: { T: -1 },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: { T: 1 },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: { T: 1 },
  423: { T: 1 },
  424: { T: -1 },
  425: { T: -1 },
  426: { f: G2 },
  427: { f: z2 },
  428: {},
  429: { T: 1 },
  430: { T: -1 },
  431: { T: 1 },
  432: { T: -1 },
  433: { T: 1 },
  434: { T: -1 },
  435: { T: 1 },
  436: { T: -1 },
  437: { T: 1 },
  438: { T: -1 },
  439: { T: 1 },
  440: { T: -1 },
  441: { T: 1 },
  442: { T: -1 },
  443: { T: 1 },
  444: { T: -1 },
  445: { T: 1 },
  446: { T: -1 },
  447: { T: 1 },
  448: { T: -1 },
  449: { T: 1 },
  450: { T: -1 },
  451: { T: 1 },
  452: { T: -1 },
  453: { T: 1 },
  454: { T: -1 },
  455: { T: 1 },
  456: { T: -1 },
  457: { T: 1 },
  458: { T: -1 },
  459: { T: 1 },
  460: { T: -1 },
  461: { T: 1 },
  462: { T: -1 },
  463: { T: 1 },
  464: { T: -1 },
  465: { T: 1 },
  466: { T: -1 },
  467: { T: 1 },
  468: { T: -1 },
  469: { T: 1 },
  470: { T: -1 },
  471: {},
  472: {},
  473: { T: 1 },
  474: { T: -1 },
  475: {},
  476: { f: K2 },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: a2 },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: H2 },
  495: { T: 1 },
  496: { T: -1 },
  497: { T: 1 },
  498: { T: -1 },
  499: {},
  500: { T: 1 },
  501: { T: -1 },
  502: { T: 1 },
  503: { T: -1 },
  504: {},
  505: { T: 1 },
  506: { T: -1 },
  507: {},
  508: { T: 1 },
  509: { T: -1 },
  510: { T: 1 },
  511: { T: -1 },
  512: {},
  513: {},
  514: { T: 1 },
  515: { T: -1 },
  516: { T: 1 },
  517: { T: -1 },
  518: { T: 1 },
  519: { T: -1 },
  520: { T: 1 },
  521: { T: -1 },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: { T: 1 },
  529: { T: -1 },
  530: { T: 1 },
  531: { T: -1 },
  532: { T: 1 },
  533: { T: -1 },
  534: {},
  535: {},
  536: {},
  537: {},
  538: { T: 1 },
  539: { T: -1 },
  540: { T: 1 },
  541: { T: -1 },
  542: { T: 1 },
  548: {},
  549: {},
  550: { f: Q0 },
  551: {},
  552: {},
  553: {},
  554: { T: 1 },
  555: { T: -1 },
  556: { T: 1 },
  557: { T: -1 },
  558: { T: 1 },
  559: { T: -1 },
  560: { T: 1 },
  561: { T: -1 },
  562: {},
  564: {},
  565: { T: 1 },
  566: { T: -1 },
  569: { T: 1 },
  570: { T: -1 },
  572: {},
  573: { T: 1 },
  574: { T: -1 },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: { T: -1 },
  589: {},
  590: { T: 1 },
  591: { T: -1 },
  592: { T: 1 },
  593: { T: -1 },
  594: { T: 1 },
  595: { T: -1 },
  596: {},
  597: { T: 1 },
  598: { T: -1 },
  599: { T: 1 },
  600: { T: -1 },
  601: { T: 1 },
  602: { T: -1 },
  603: { T: 1 },
  604: { T: -1 },
  605: { T: 1 },
  606: { T: -1 },
  607: {},
  608: { T: 1 },
  609: { T: -1 },
  610: {},
  611: { T: 1 },
  612: { T: -1 },
  613: { T: 1 },
  614: { T: -1 },
  615: { T: 1 },
  616: { T: -1 },
  617: { T: 1 },
  618: { T: -1 },
  619: { T: 1 },
  620: { T: -1 },
  625: {},
  626: { T: 1 },
  627: { T: -1 },
  628: { T: 1 },
  629: { T: -1 },
  630: { T: 1 },
  631: { T: -1 },
  632: { f: Px },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: Nx },
  636: { T: -1 },
  637: { f: il },
  638: { T: 1 },
  639: {},
  640: { T: -1 },
  641: { T: 1 },
  642: { T: -1 },
  643: { T: 1 },
  644: {},
  645: { T: -1 },
  646: { T: 1 },
  648: { T: 1 },
  649: {},
  650: { T: -1 },
  651: { f: pp },
  652: {},
  653: { T: 1 },
  654: { T: -1 },
  655: { T: 1 },
  656: { T: -1 },
  657: { T: 1 },
  658: { T: -1 },
  659: {},
  660: { T: 1 },
  661: {},
  662: { T: -1 },
  663: {},
  664: { T: 1 },
  665: {},
  666: { T: -1 },
  667: {},
  668: {},
  669: {},
  671: { T: 1 },
  672: { T: -1 },
  673: { T: 1 },
  674: { T: -1 },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: { T: 1 },
  1027: { T: -1 },
  1028: { T: 1 },
  1029: { T: -1 },
  1030: {},
  1031: { T: 1 },
  1032: { T: -1 },
  1033: { T: 1 },
  1034: { T: -1 },
  1035: {},
  1036: {},
  1037: {},
  1038: { T: 1 },
  1039: { T: -1 },
  1040: {},
  1041: { T: 1 },
  1042: { T: -1 },
  1043: {},
  1044: {},
  1045: {},
  1046: { T: 1 },
  1047: { T: -1 },
  1048: { T: 1 },
  1049: { T: -1 },
  1050: {},
  1051: { T: 1 },
  1052: { T: 1 },
  1053: { f: ep },
  1054: { T: 1 },
  1055: {},
  1056: { T: 1 },
  1057: { T: -1 },
  1058: { T: 1 },
  1059: { T: -1 },
  1061: {},
  1062: { T: 1 },
  1063: { T: -1 },
  1064: { T: 1 },
  1065: { T: -1 },
  1066: { T: 1 },
  1067: { T: -1 },
  1068: { T: 1 },
  1069: { T: -1 },
  1070: { T: 1 },
  1071: { T: -1 },
  1072: { T: 1 },
  1073: { T: -1 },
  1075: { T: 1 },
  1076: { T: -1 },
  1077: { T: 1 },
  1078: { T: -1 },
  1079: { T: 1 },
  1080: { T: -1 },
  1081: { T: 1 },
  1082: { T: -1 },
  1083: { T: 1 },
  1084: { T: -1 },
  1085: {},
  1086: { T: 1 },
  1087: { T: -1 },
  1088: { T: 1 },
  1089: { T: -1 },
  1090: { T: 1 },
  1091: { T: -1 },
  1092: { T: 1 },
  1093: { T: -1 },
  1094: { T: 1 },
  1095: { T: -1 },
  1096: {},
  1097: { T: 1 },
  1098: {},
  1099: { T: -1 },
  1100: { T: 1 },
  1101: { T: -1 },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: { T: 1 },
  1114: { T: -1 },
  1115: { T: 1 },
  1116: { T: -1 },
  1117: {},
  1118: { T: 1 },
  1119: { T: -1 },
  1120: { T: 1 },
  1121: { T: -1 },
  1122: { T: 1 },
  1123: { T: -1 },
  1124: { T: 1 },
  1125: { T: -1 },
  1126: {},
  1128: { T: 1 },
  1129: { T: -1 },
  1130: {},
  1131: { T: 1 },
  1132: { T: -1 },
  1133: { T: 1 },
  1134: { T: -1 },
  1135: { T: 1 },
  1136: { T: -1 },
  1137: { T: 1 },
  1138: { T: -1 },
  1139: { T: 1 },
  1140: { T: -1 },
  1141: {},
  1142: { T: 1 },
  1143: { T: -1 },
  1144: { T: 1 },
  1145: { T: -1 },
  1146: {},
  1147: { T: 1 },
  1148: { T: -1 },
  1149: { T: 1 },
  1150: { T: -1 },
  1152: { T: 1 },
  1153: { T: -1 },
  1154: { T: -1 },
  1155: { T: -1 },
  1156: { T: -1 },
  1157: { T: 1 },
  1158: { T: -1 },
  1159: { T: 1 },
  1160: { T: -1 },
  1161: { T: 1 },
  1162: { T: -1 },
  1163: { T: 1 },
  1164: { T: -1 },
  1165: { T: 1 },
  1166: { T: -1 },
  1167: { T: 1 },
  1168: { T: -1 },
  1169: { T: 1 },
  1170: { T: -1 },
  1171: {},
  1172: { T: 1 },
  1173: { T: -1 },
  1177: {},
  1178: { T: 1 },
  1180: {},
  1181: {},
  1182: {},
  2048: { T: 1 },
  2049: { T: -1 },
  2050: {},
  2051: { T: 1 },
  2052: { T: -1 },
  2053: {},
  2054: {},
  2055: { T: 1 },
  2056: { T: -1 },
  2057: { T: 1 },
  2058: { T: -1 },
  2060: {},
  2067: {},
  2068: { T: 1 },
  2069: { T: -1 },
  2070: {},
  2071: {},
  2072: { T: 1 },
  2073: { T: -1 },
  2075: {},
  2076: {},
  2077: { T: 1 },
  2078: { T: -1 },
  2079: {},
  2080: { T: 1 },
  2081: { T: -1 },
  2082: {},
  2083: { T: 1 },
  2084: { T: -1 },
  2085: { T: 1 },
  2086: { T: -1 },
  2087: { T: 1 },
  2088: { T: -1 },
  2089: { T: 1 },
  2090: { T: -1 },
  2091: {},
  2092: {},
  2093: { T: 1 },
  2094: { T: -1 },
  2095: {},
  2096: { T: 1 },
  2097: { T: -1 },
  2098: { T: 1 },
  2099: { T: -1 },
  2100: { T: 1 },
  2101: { T: -1 },
  2102: {},
  2103: { T: 1 },
  2104: { T: -1 },
  2105: {},
  2106: { T: 1 },
  2107: { T: -1 },
  2108: {},
  2109: { T: 1 },
  2110: { T: -1 },
  2111: { T: 1 },
  2112: { T: -1 },
  2113: { T: 1 },
  2114: { T: -1 },
  2115: {},
  2116: {},
  2117: {},
  2118: { T: 1 },
  2119: { T: -1 },
  2120: {},
  2121: { T: 1 },
  2122: { T: -1 },
  2123: { T: 1 },
  2124: { T: -1 },
  2125: {},
  2126: { T: 1 },
  2127: { T: -1 },
  2128: {},
  2129: { T: 1 },
  2130: { T: -1 },
  2131: { T: 1 },
  2132: { T: -1 },
  2133: { T: 1 },
  2134: {},
  2135: {},
  2136: {},
  2137: { T: 1 },
  2138: { T: -1 },
  2139: { T: 1 },
  2140: { T: -1 },
  2141: {},
  3072: {},
  3073: {},
  4096: { T: 1 },
  4097: { T: -1 },
  5002: { T: 1 },
  5003: { T: -1 },
  5081: { T: 1 },
  5082: { T: -1 },
  5083: {},
  5084: { T: 1 },
  5085: { T: -1 },
  5086: { T: 1 },
  5087: { T: -1 },
  5088: {},
  5089: {},
  5090: {},
  5092: { T: 1 },
  5093: { T: -1 },
  5094: {},
  5095: { T: 1 },
  5096: { T: -1 },
  5097: {},
  5099: {},
  65535: { n: "" }
}, cn = {
  6: { f: G0 },
  10: { f: gt },
  12: { f: tr },
  13: { f: tr },
  14: { f: qe },
  15: { f: qe },
  16: { f: gr },
  17: { f: qe },
  18: { f: qe },
  19: { f: tr },
  20: { f: zi },
  21: { f: zi },
  23: { f: wf },
  24: { f: Ki },
  25: { f: qe },
  26: {},
  27: {},
  28: { f: eh },
  29: {},
  34: { f: qe },
  35: { f: $i },
  38: { f: gr },
  39: { f: gr },
  40: { f: gr },
  41: { f: gr },
  42: { f: qe },
  43: { f: qe },
  47: { f: h1 },
  49: { f: Au },
  51: { f: tr },
  60: {},
  61: { f: Eu },
  64: { f: qe },
  65: { f: yu },
  66: { f: tr },
  77: {},
  80: {},
  81: {},
  82: {},
  85: { f: tr },
  89: {},
  90: {},
  91: {},
  92: { f: uu },
  93: { f: ah },
  94: {},
  95: { f: qe },
  96: {},
  97: {},
  99: { f: qe },
  125: { f: kf },
  128: { f: Vu },
  129: { f: xu },
  130: { f: tr },
  131: { f: qe },
  132: { f: qe },
  133: { f: du },
  134: {},
  140: { f: uh },
  141: { f: tr },
  144: {},
  146: { f: dh },
  151: {},
  152: {},
  153: {},
  154: {},
  155: {},
  156: { f: tr },
  157: {},
  158: {},
  160: { f: kh },
  161: { f: mh },
  174: {},
  175: {},
  176: {},
  177: {},
  178: {},
  180: {},
  181: {},
  182: {},
  184: {},
  185: {},
  189: { f: Mu },
  190: { f: Uu },
  193: { f: gt },
  197: {},
  198: {},
  199: {},
  200: {},
  201: {},
  202: { f: qe },
  203: {},
  204: {},
  205: {},
  206: {},
  207: {},
  208: {},
  209: {},
  210: {},
  211: {},
  213: {},
  215: {},
  216: {},
  217: {},
  218: { f: tr },
  220: {},
  221: { f: qe },
  222: {},
  224: { f: Hu },
  225: { f: lu },
  226: { f: gt },
  227: {},
  229: { f: rh },
  233: {},
  235: {},
  236: {},
  237: {},
  239: {},
  240: {},
  241: {},
  242: {},
  244: {},
  245: {},
  246: {},
  247: {},
  248: {},
  249: {},
  251: {},
  252: { f: pu },
  253: { f: Du },
  255: { f: gu },
  256: {},
  259: {},
  290: {},
  311: {},
  312: {},
  315: {},
  317: { f: uf },
  318: {},
  319: {},
  320: {},
  330: {},
  331: {},
  333: {},
  334: {},
  335: {},
  336: {},
  337: {},
  338: {},
  339: {},
  340: {},
  351: {},
  352: { f: qe },
  353: { f: gt },
  401: {},
  402: {},
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  425: {},
  426: {},
  427: {},
  428: {},
  429: {},
  430: { f: Ku },
  431: { f: qe },
  432: {},
  433: {},
  434: {},
  437: {},
  438: { f: sh },
  439: { f: qe },
  440: { f: fh },
  441: {},
  442: { f: Ya },
  443: {},
  444: { f: tr },
  445: {},
  446: {},
  448: { f: gt },
  449: { f: ku, r: 2 },
  450: { f: gt },
  512: { f: Vi },
  513: { f: wh },
  515: { f: zu },
  516: { f: Iu },
  517: { f: Gi },
  519: { f: Eh },
  520: { f: _u },
  523: {},
  545: { f: ji },
  549: { f: Hi },
  566: {},
  574: { f: Su },
  638: { f: Bu },
  659: {},
  1048: {},
  1054: { f: Nu },
  1084: {},
  1212: { f: Zu },
  2048: { f: oh },
  2049: {},
  2050: {},
  2051: {},
  2052: {},
  2053: {},
  2054: {},
  2055: {},
  2056: {},
  2057: { f: s0 },
  2058: {},
  2059: {},
  2060: {},
  2061: {},
  2062: {},
  2063: {},
  2064: {},
  2066: {},
  2067: {},
  2128: {},
  2129: {},
  2130: {},
  2131: {},
  2132: {},
  2133: {},
  2134: {},
  2135: {},
  2136: {},
  2137: {},
  2138: {},
  2146: {},
  2147: { r: 12 },
  2148: {},
  2149: {},
  2150: {},
  2151: { f: gt },
  2152: {},
  2154: {},
  2155: {},
  2156: {},
  2161: {},
  2162: {},
  2164: {},
  2165: {},
  2166: {},
  2167: {},
  2168: {},
  2169: {},
  2170: {},
  2171: {},
  2172: { f: vh, r: 12 },
  2173: { f: ux, r: 12 },
  2174: {},
  2175: {},
  2180: {},
  2181: {},
  2182: {},
  2183: {},
  2184: {},
  2185: {},
  2186: {},
  2187: {},
  2188: { f: qe, r: 12 },
  2189: {},
  2190: { r: 12 },
  2191: {},
  2192: {},
  2194: {},
  2195: {},
  2196: { f: Ju, r: 12 },
  2197: {},
  2198: { f: ix, r: 12 },
  2199: {},
  2200: {},
  2201: {},
  2202: { f: qu, r: 12 },
  2203: { f: gt },
  2204: {},
  2205: {},
  2206: {},
  2207: {},
  2211: { f: wu },
  2212: {},
  2213: {},
  2214: {},
  2215: {},
  4097: {},
  4098: {},
  4099: {},
  4102: {},
  4103: {},
  4105: {},
  4106: {},
  4107: {},
  4108: {},
  4109: {},
  4116: {},
  4117: {},
  4118: {},
  4119: {},
  4120: {},
  4121: {},
  4122: {},
  4123: {},
  4124: {},
  4125: {},
  4126: {},
  4127: {},
  4128: {},
  4129: {},
  4130: {},
  4132: {},
  4133: {},
  4134: { f: tr },
  4135: {},
  4146: {},
  4147: {},
  4148: {},
  4149: {},
  4154: {},
  4156: {},
  4157: {},
  4158: {},
  4159: {},
  4160: {},
  4161: {},
  4163: {},
  4164: { f: gh },
  4165: {},
  4166: {},
  4168: {},
  4170: {},
  4171: {},
  4174: {},
  4175: {},
  4176: {},
  4177: {},
  4187: {},
  4188: { f: xh },
  4189: {},
  4191: {},
  4192: {},
  4193: {},
  4194: {},
  4195: {},
  4196: {},
  4197: {},
  4198: {},
  4199: {},
  4200: {},
  0: { f: Vi },
  1: {},
  2: { f: Ah },
  3: { f: Fh },
  4: { f: Sh },
  5: { f: Gi },
  7: { f: Dh },
  8: {},
  9: { f: s0 },
  11: {},
  22: { f: tr },
  30: { f: Pu },
  31: {},
  32: {},
  33: { f: ji },
  36: {},
  37: { f: Hi },
  50: { f: Oh },
  62: {},
  52: {},
  67: {},
  68: { f: tr },
  69: {},
  86: {},
  126: {},
  127: { f: Th },
  135: {},
  136: {},
  137: {},
  145: {},
  148: {},
  149: {},
  150: {},
  169: {},
  171: {},
  188: {},
  191: {},
  192: {},
  194: {},
  195: {},
  214: { f: Ih },
  223: {},
  234: {},
  354: {},
  421: {},
  518: { f: G0 },
  521: { f: s0 },
  536: { f: Ki },
  547: { f: $i },
  561: {},
  579: {},
  1030: { f: G0 },
  1033: { f: s0 },
  1091: {},
  2157: {},
  2163: {},
  2177: {},
  2240: {},
  2241: {},
  2242: {},
  2243: {},
  2244: {},
  2245: {},
  2246: {},
  2247: {},
  2248: {},
  2249: {},
  2250: {},
  2251: {},
  2262: { r: 12 },
  29282: {}
};
function ne(e, t, r, a) {
  var n = t;
  if (!isNaN(n)) {
    var i = a || (r || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), i > 0 && yn(r) && e.push(r);
  }
}
function Cm(e, t, r, a) {
  var n = a || (r || []).length || 0;
  if (n <= 8224)
    return ne(e, t, r, n);
  var i = t;
  if (!isNaN(i)) {
    for (var s = r.parts || [], f = 0, c = 0, o = 0; o + (s[f] || 8224) <= 8224; )
      o += s[f] || 8224, f++;
    var l = e.next(4);
    for (l.write_shift(2, i), l.write_shift(2, o), e.push(r.slice(c, c + o)), c += o; c < n; ) {
      for (l = e.next(4), l.write_shift(2, 60), o = 0; o + (s[f] || 8224) <= 8224; )
        o += s[f] || 8224, f++;
      l.write_shift(2, o), e.push(r.slice(c, c + o)), c += o;
    }
  }
}
function Qa(e, t, r) {
  return e || (e = G(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function Dm(e, t, r, a) {
  var n = G(9);
  return Qa(n, e, t), hf(r, a || "b", n), n;
}
function Om(e, t, r) {
  var a = G(8 + 2 * r.length);
  return Qa(a, e, t), a.write_shift(1, r.length), a.write_shift(r.length, r, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function Im(e, t, r, a) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var n = t.t == "d" ? ir(Ve(t.v)) : t.v;
        n == (n | 0) && n >= 0 && n < 65536 ? ne(e, 2, Ch(r, a, n)) : ne(e, 3, yh(r, a, n));
        return;
      case "b":
      case "e":
        ne(e, 5, Dm(r, a, t.v, t.t));
        return;
      case "s":
      case "str":
        ne(e, 4, Om(r, a, (t.v || "").slice(0, 255)));
        return;
    }
  ne(e, 1, Qa(null, r, a));
}
function Rm(e, t, r, a) {
  var n = Array.isArray(t), i = Ae(t["!ref"] || "A1"), s, f = "", c = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (a.WTF)
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    i.e.c = Math.min(i.e.c, 255), i.e.r = Math.min(i.e.c, 16383), s = we(i);
  }
  for (var o = i.s.r; o <= i.e.r; ++o) {
    f = Ke(o);
    for (var l = i.s.c; l <= i.e.c; ++l) {
      o === i.s.r && (c[l] = He(l)), s = c[l] + f;
      var u = n ? (t[o] || [])[l] : t[s];
      !u || Im(e, u, o, l);
    }
  }
}
function Nm(e, t) {
  for (var r = t || {}, a = Cr(), n = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (n = i);
  if (n == 0 && !!r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return ne(a, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, Ln(e, 16, r)), Rm(a, e.Sheets[e.SheetNames[n]], n, r), ne(a, 10), a.end();
}
function bm(e, t, r) {
  ne(e, 49, Cu({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, r));
}
function Pm(e, t, r) {
  !t || [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n)
      t[n] != null && ne(e, 1054, bu(n, t[n], r));
  });
}
function Lm(e, t) {
  var r = G(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), ne(e, 2151, r), r = G(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), mf(Ae(t["!ref"] || "A1"), r), r.write_shift(4, 4), ne(e, 2152, r);
}
function Bm(e, t) {
  for (var r = 0; r < 16; ++r)
    ne(e, 224, Xi({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(a) {
    ne(e, 224, Xi(a, 0, t));
  });
}
function Mm(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var a = t["!links"][r];
    ne(e, 440, ch(a)), a[1].Tooltip && ne(e, 2048, lh(a));
  }
  delete t["!links"];
}
function Um(e, t) {
  if (!!t) {
    var r = 0;
    t.forEach(function(a, n) {
      ++r <= 256 && a && ne(e, 125, ph(N0(n, a), n));
    });
  }
}
function Wm(e, t, r, a, n) {
  var i = 16 + Dt(n.cellXfs, t, n);
  if (t.v == null && !t.bf) {
    ne(e, 513, Vt(r, a, i));
    return;
  }
  if (t.bf)
    ne(e, 6, xv(t, r, a, n, i));
  else
    switch (t.t) {
      case "d":
      case "n":
        var s = t.t == "d" ? ir(Ve(t.v)) : t.v;
        ne(e, 515, $u(r, a, s, i));
        break;
      case "b":
      case "e":
        ne(e, 517, Gu(r, a, t.v, i, n, t.t));
        break;
      case "s":
      case "str":
        if (n.bookSST) {
          var f = Gn(n.Strings, t.v, n.revStrings);
          ne(e, 253, Ou(r, a, f, i));
        } else
          ne(e, 516, Ru(r, a, (t.v || "").slice(0, 255), i, n));
        break;
      default:
        ne(e, 513, Vt(r, a, i));
    }
}
function Hm(e, t, r) {
  var a = Cr(), n = r.SheetNames[e], i = r.Sheets[n] || {}, s = (r || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, c = Array.isArray(i), o = t.biff == 8, l, u = "", x = [], d = Ae(i["!ref"] || "A1"), v = o ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= v) {
    if (t.WTF)
      throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.c, v - 1);
  }
  ne(a, 2057, Ln(r, 16, t)), ne(a, 13, Xr(1)), ne(a, 12, Xr(100)), ne(a, 15, Fr(!0)), ne(a, 17, Fr(!1)), ne(a, 16, Wt(1e-3)), ne(a, 95, Fr(!0)), ne(a, 42, Fr(!1)), ne(a, 43, Fr(!1)), ne(a, 130, Xr(1)), ne(a, 128, Xu([0, 0])), ne(a, 131, Fr(!1)), ne(a, 132, Fr(!1)), o && Um(a, i["!cols"]), ne(a, 512, Lu(d, t)), o && (i["!links"] = []);
  for (var h = d.s.r; h <= d.e.r; ++h) {
    u = Ke(h);
    for (var p = d.s.c; p <= d.e.c; ++p) {
      h === d.s.r && (x[p] = He(p)), l = x[p] + u;
      var w = c ? (i[h] || [])[p] : i[l];
      !w || (Wm(a, w, h, p, t), o && w.l && i["!links"].push([l, w.l]));
    }
  }
  var y = f.CodeName || f.name || n;
  return o && ne(a, 574, Fu((s.Views || [])[0])), o && (i["!merges"] || []).length && ne(a, 229, th(i["!merges"])), o && Mm(a, i), ne(a, 442, xf(y)), o && Lm(a, i), ne(a, 10), a.end();
}
function Vm(e, t, r) {
  var a = Cr(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = n.WBProps || {}, f = r.biff == 8, c = r.biff == 5;
  if (ne(a, 2057, Ln(e, 5, r)), r.bookType == "xla" && ne(a, 135), ne(a, 225, f ? Xr(1200) : null), ne(a, 193, Gl(2)), c && ne(a, 191), c && ne(a, 192), ne(a, 226), ne(a, 92, hu("SheetJS", r)), ne(a, 66, Xr(f ? 1200 : 1252)), f && ne(a, 353, Xr(0)), f && ne(a, 448), ne(a, 317, _h(e.SheetNames.length)), f && e.vbaraw && ne(a, 211), f && e.vbaraw) {
    var o = s.CodeName || "ThisWorkbook";
    ne(a, 442, xf(o));
  }
  ne(a, 156, Xr(17)), ne(a, 25, Fr(!1)), ne(a, 18, Fr(!1)), ne(a, 19, Xr(0)), f && ne(a, 431, Fr(!1)), f && ne(a, 444, Xr(0)), ne(a, 61, Tu()), ne(a, 64, Fr(!1)), ne(a, 141, Xr(0)), ne(a, 34, Fr(kp(e) == "true")), ne(a, 14, Fr(!0)), f && ne(a, 439, Fr(!1)), ne(a, 218, Xr(0)), bm(a, e, r), Pm(a, e.SSF, r), Bm(a, r), f && ne(a, 352, Fr(!1));
  var l = a.end(), u = Cr();
  f && ne(u, 140, hh()), f && r.Strings && Cm(u, 252, mu(r.Strings)), ne(u, 10);
  var x = u.end(), d = Cr(), v = 0, h = 0;
  for (h = 0; h < e.SheetNames.length; ++h)
    v += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[h].length;
  var p = l.length + v + x.length;
  for (h = 0; h < e.SheetNames.length; ++h) {
    var w = i[h] || {};
    ne(d, 133, vu({ pos: p, hs: w.Hidden || 0, dt: 0, name: e.SheetNames[h] }, r)), p += t[h].length;
  }
  var y = d.end();
  if (v != y.length)
    throw new Error("BS8 " + v + " != " + y.length);
  var g = [];
  return l.length && g.push(l), y.length && g.push(y), x.length && g.push(x), cr(g);
}
function Xm(e, t) {
  var r = t || {}, a = [];
  e && !e.SSF && (e.SSF = Me(de)), e && e.SSF && (la(), $a(e.SSF), r.revssf = A0(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, Yn(r), r.cellXfs = [], Dt(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n)
    a[a.length] = Hm(n, r, e);
  return a.unshift(Vm(e, a, r)), cr(a);
}
function fc(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var a = e.Sheets[e.SheetNames[r]];
    if (!(!a || !a["!ref"])) {
      var n = yr(a["!ref"]);
      n.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var i = t || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return Xm(e, t);
    case 4:
    case 3:
    case 2:
      return Nm(e, t);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function ns(e, t) {
  var r = t || {}, a = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var n = e.match(/<table/i);
  if (!n)
    throw new Error("Invalid HTML: could not find <table>");
  var i = e.match(/<\/table/i), s = n.index, f = i && i.index || e.length, c = Do(e.slice(s, f), /(:?<tr[^>]*>)/i, "<tr>"), o = -1, l = 0, u = 0, x = 0, d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, v = [];
  for (s = 0; s < c.length; ++s) {
    var h = c[s].trim(), p = h.slice(0, 3).toLowerCase();
    if (p == "<tr") {
      if (++o, r.sheetRows && r.sheetRows <= o) {
        --o;
        break;
      }
      l = 0;
      continue;
    }
    if (!(p != "<td" && p != "<th")) {
      var w = h.split(/<\/t[dh]>/i);
      for (f = 0; f < w.length; ++f) {
        var y = w[f].trim();
        if (!!y.match(/<t[dh]/i)) {
          for (var g = y, D = 0; g.charAt(0) == "<" && (D = g.indexOf(">")) > -1; )
            g = g.slice(D + 1);
          for (var b = 0; b < v.length; ++b) {
            var N = v[b];
            N.s.c == l && N.s.r < o && o <= N.e.r && (l = N.e.c + 1, b = -1);
          }
          var F = me(y.slice(0, y.indexOf(">")));
          x = F.colspan ? +F.colspan : 1, ((u = +F.rowspan) > 1 || x > 1) && v.push({ s: { r: o, c: l }, e: { r: o + (u || 1) - 1, c: l + x - 1 } });
          var B = F.t || F["data-t"] || "";
          if (!g.length) {
            l += x;
            continue;
          }
          if (g = Ns(g), d.s.r > o && (d.s.r = o), d.e.r < o && (d.e.r = o), d.s.c > l && (d.s.c = l), d.e.c < l && (d.e.c = l), !g.length) {
            l += x;
            continue;
          }
          var I = { t: "s", v: g };
          r.raw || !g.trim().length || B == "s" || (g === "TRUE" ? I = { t: "b", v: !0 } : g === "FALSE" ? I = { t: "b", v: !1 } : isNaN(Yr(g)) ? isNaN(fa(g).getDate()) || (I = { t: "d", v: Ve(g) }, r.cellDates || (I = { t: "n", v: ir(I.v) }), I.z = r.dateNF || de[14]) : I = { t: "n", v: Yr(g) }), r.dense ? (a[o] || (a[o] = []), a[o][l] = I) : a[pe({ r: o, c: l })] = I, l += x;
        }
      }
    }
  }
  return a["!ref"] = we(d), v.length && (a["!merges"] = v), a;
}
function cc(e, t, r, a) {
  for (var n = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var f = 0, c = 0, o = 0; o < n.length; ++o)
      if (!(n[o].s.r > r || n[o].s.c > s) && !(n[o].e.r < r || n[o].e.c < s)) {
        if (n[o].s.r < r || n[o].s.c < s) {
          f = -1;
          break;
        }
        f = n[o].e.r - n[o].s.r + 1, c = n[o].e.c - n[o].s.c + 1;
        break;
      }
    if (!(f < 0)) {
      var l = pe({ r, c: s }), u = a.dense ? (e[r] || [])[s] : e[l], x = u && u.v != null && (u.h || _n(u.w || (nt(u), u.w) || "")) || "", d = {};
      f > 1 && (d.rowspan = f), c > 1 && (d.colspan = c), a.editable ? x = '<span contenteditable="true">' + x + "</span>" : u && (d["data-t"] = u && u.t || "z", u.v != null && (d["data-v"] = u.v), u.z != null && (d["data-z"] = u.z), u.l && (u.l.Target || "#").charAt(0) != "#" && (x = '<a href="' + u.l.Target + '">' + x + "</a>")), d.id = (a.id || "sjs") + "-" + l, i.push(ae("td", x, d));
    }
  }
  var v = "<tr>";
  return v + i.join("") + "</tr>";
}
var oc = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', lc = "</body></html>";
function Gm(e, t) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0)
    throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1)
    return Ct(ns(r[0], t), t);
  var a = ei();
  return r.forEach(function(n, i) {
    ri(a, ns(n, t), "Sheet" + (i + 1));
  }), a;
}
function uc(e, t, r) {
  var a = [];
  return a.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function hc(e, t) {
  var r = t || {}, a = r.header != null ? r.header : oc, n = r.footer != null ? r.footer : lc, i = [a], s = yr(e["!ref"]);
  r.dense = Array.isArray(e), i.push(uc(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f)
    i.push(cc(e, s, f, r));
  return i.push("</table>" + n), i.join("");
}
function xc(e, t, r) {
  var a = r || {}, n = 0, i = 0;
  if (a.origin != null)
    if (typeof a.origin == "number")
      n = a.origin;
    else {
      var s = typeof a.origin == "string" ? ze(a.origin) : a.origin;
      n = s.r, i = s.c;
    }
  var f = t.getElementsByTagName("tr"), c = Math.min(a.sheetRows || 1e7, f.length), o = { s: { r: 0, c: 0 }, e: { r: n, c: i } };
  if (e["!ref"]) {
    var l = yr(e["!ref"]);
    o.s.r = Math.min(o.s.r, l.s.r), o.s.c = Math.min(o.s.c, l.s.c), o.e.r = Math.max(o.e.r, l.e.r), o.e.c = Math.max(o.e.c, l.e.c), n == -1 && (o.e.r = n = l.e.r + 1);
  }
  var u = [], x = 0, d = e["!rows"] || (e["!rows"] = []), v = 0, h = 0, p = 0, w = 0, y = 0, g = 0;
  for (e["!cols"] || (e["!cols"] = []); v < f.length && h < c; ++v) {
    var D = f[v];
    if (is(D)) {
      if (a.display)
        continue;
      d[h] = { hidden: !0 };
    }
    var b = D.children;
    for (p = w = 0; p < b.length; ++p) {
      var N = b[p];
      if (!(a.display && is(N))) {
        var F = N.hasAttribute("data-v") ? N.getAttribute("data-v") : N.hasAttribute("v") ? N.getAttribute("v") : Ns(N.innerHTML), B = N.getAttribute("data-z") || N.getAttribute("z");
        for (x = 0; x < u.length; ++x) {
          var I = u[x];
          I.s.c == w + i && I.s.r < h + n && h + n <= I.e.r && (w = I.e.c + 1 - i, x = -1);
        }
        g = +N.getAttribute("colspan") || 1, ((y = +N.getAttribute("rowspan") || 1) > 1 || g > 1) && u.push({ s: { r: h + n, c: w + i }, e: { r: h + n + (y || 1) - 1, c: w + i + (g || 1) - 1 } });
        var z = { t: "s", v: F }, X = N.getAttribute("data-t") || N.getAttribute("t") || "";
        F != null && (F.length == 0 ? z.t = X || "z" : a.raw || F.trim().length == 0 || X == "s" || (F === "TRUE" ? z = { t: "b", v: !0 } : F === "FALSE" ? z = { t: "b", v: !1 } : isNaN(Yr(F)) ? isNaN(fa(F).getDate()) || (z = { t: "d", v: Ve(F) }, a.cellDates || (z = { t: "n", v: ir(z.v) }), z.z = a.dateNF || de[14]) : z = { t: "n", v: Yr(F) })), z.z === void 0 && B != null && (z.z = B);
        var L = "", J = N.getElementsByTagName("A");
        if (J && J.length)
          for (var le = 0; le < J.length && !(J[le].hasAttribute("href") && (L = J[le].getAttribute("href"), L.charAt(0) != "#")); ++le)
            ;
        L && L.charAt(0) != "#" && (z.l = { Target: L }), a.dense ? (e[h + n] || (e[h + n] = []), e[h + n][w + i] = z) : e[pe({ c: w + i, r: h + n })] = z, o.e.c < w + i && (o.e.c = w + i), w += g;
      }
    }
    ++h;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), o.e.r = Math.max(o.e.r, h - 1 + n), e["!ref"] = we(o), h >= c && (e["!fullref"] = we((o.e.r = f.length - v + h - 1 + n, o))), e;
}
function dc(e, t) {
  var r = t || {}, a = r.dense ? [] : {};
  return xc(a, e, t);
}
function zm(e, t) {
  return Ct(dc(e, t), t);
}
function is(e) {
  var t = "", r = $m(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function $m(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function Km(e) {
  var t = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = Oe(t.replace(/<[^>]*>/g, ""));
  return [r];
}
var ss = {
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function vc(e, t) {
  var r = t || {}, a = wn(e), n = [], i, s, f = { name: "" }, c = "", o = 0, l, u, x = {}, d = [], v = r.dense ? [] : {}, h, p, w = { value: "" }, y = "", g = 0, D = [], b = -1, N = -1, F = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, B = 0, I = {}, z = [], X = {}, L = 0, J = 0, le = [], ie = 1, he = 1, ce = [], Pe = { Names: [] }, V = {}, ve = ["", ""], ge = [], C = {}, P = "", O = 0, R = !1, j = !1, re = 0;
  for (La.lastIndex = 0, a = a.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); h = La.exec(a); )
    switch (h[3] = h[3].replace(/_.*$/, "")) {
      case "table":
      case "\u5DE5\u4F5C\u8868":
        h[1] === "/" ? (F.e.c >= F.s.c && F.e.r >= F.s.r ? v["!ref"] = we(F) : v["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= F.e.r && (v["!fullref"] = v["!ref"], F.e.r = r.sheetRows - 1, v["!ref"] = we(F)), z.length && (v["!merges"] = z), le.length && (v["!rows"] = le), l.name = l.\u540D\u79F0 || l.name, typeof JSON < "u" && JSON.stringify(l), d.push(l.name), x[l.name] = v, j = !1) : h[0].charAt(h[0].length - 2) !== "/" && (l = me(h[0], !1), b = N = -1, F.s.r = F.s.c = 1e7, F.e.r = F.e.c = 0, v = r.dense ? [] : {}, z = [], le = [], j = !0);
        break;
      case "table-row-group":
        h[1] === "/" ? --B : ++B;
        break;
      case "table-row":
      case "\u884C":
        if (h[1] === "/") {
          b += ie, ie = 1;
          break;
        }
        if (u = me(h[0], !1), u.\u884C\u53F7 ? b = u.\u884C\u53F7 - 1 : b == -1 && (b = 0), ie = +u["number-rows-repeated"] || 1, ie < 10)
          for (re = 0; re < ie; ++re)
            B > 0 && (le[b + re] = { level: B });
        N = -1;
        break;
      case "covered-table-cell":
        h[1] !== "/" && ++N, r.sheetStubs && (r.dense ? (v[b] || (v[b] = []), v[b][N] = { t: "z" }) : v[pe({ r: b, c: N })] = { t: "z" }), y = "", D = [];
        break;
      case "table-cell":
      case "\u6570\u636E":
        if (h[0].charAt(h[0].length - 2) === "/")
          ++N, w = me(h[0], !1), he = parseInt(w["number-columns-repeated"] || "1", 10), p = { t: "z", v: null }, w.formula && r.cellFormula != !1 && (p.f = rs(Oe(w.formula))), (w.\u6570\u636E\u7C7B\u578B || w["value-type"]) == "string" && (p.t = "s", p.v = Oe(w["string-value"] || ""), r.dense ? (v[b] || (v[b] = []), v[b][N] = p) : v[pe({ r: b, c: N })] = p), N += he - 1;
        else if (h[1] !== "/") {
          ++N, y = "", g = 0, D = [], he = 1;
          var te = ie ? b + ie - 1 : b;
          if (N > F.e.c && (F.e.c = N), N < F.s.c && (F.s.c = N), b < F.s.r && (F.s.r = b), te > F.e.r && (F.e.r = te), w = me(h[0], !1), ge = [], C = {}, p = { t: w.\u6570\u636E\u7C7B\u578B || w["value-type"], v: null }, r.cellFormula)
            if (w.formula && (w.formula = Oe(w.formula)), w["number-matrix-columns-spanned"] && w["number-matrix-rows-spanned"] && (L = parseInt(w["number-matrix-rows-spanned"], 10) || 0, J = parseInt(w["number-matrix-columns-spanned"], 10) || 0, X = { s: { r: b, c: N }, e: { r: b + L - 1, c: N + J - 1 } }, p.F = we(X), ce.push([X, p.F])), w.formula)
              p.f = rs(w.formula);
            else
              for (re = 0; re < ce.length; ++re)
                b >= ce[re][0].s.r && b <= ce[re][0].e.r && N >= ce[re][0].s.c && N <= ce[re][0].e.c && (p.F = ce[re][1]);
          switch ((w["number-columns-spanned"] || w["number-rows-spanned"]) && (L = parseInt(w["number-rows-spanned"], 10) || 0, J = parseInt(w["number-columns-spanned"], 10) || 0, X = { s: { r: b, c: N }, e: { r: b + L - 1, c: N + J - 1 } }, z.push(X)), w["number-columns-repeated"] && (he = parseInt(w["number-columns-repeated"], 10)), p.t) {
            case "boolean":
              p.t = "b", p.v = We(w["boolean-value"]);
              break;
            case "float":
              p.t = "n", p.v = parseFloat(w.value);
              break;
            case "percentage":
              p.t = "n", p.v = parseFloat(w.value);
              break;
            case "currency":
              p.t = "n", p.v = parseFloat(w.value);
              break;
            case "date":
              p.t = "d", p.v = Ve(w["date-value"]), r.cellDates || (p.t = "n", p.v = ir(p.v)), p.z = "m/d/yy";
              break;
            case "time":
              p.t = "n", p.v = yo(w["time-value"]) / 86400, r.cellDates && (p.t = "d", p.v = C0(p.v)), p.z = "HH:MM:SS";
              break;
            case "number":
              p.t = "n", p.v = parseFloat(w.\u6570\u636E\u6570\u503C);
              break;
            default:
              if (p.t === "string" || p.t === "text" || !p.t)
                p.t = "s", w["string-value"] != null && (y = Oe(w["string-value"]), D = []);
              else
                throw new Error("Unsupported value type " + p.t);
          }
        } else {
          if (R = !1, p.t === "s" && (p.v = y || "", D.length && (p.R = D), R = g == 0), V.Target && (p.l = V), ge.length > 0 && (p.c = ge, ge = []), y && r.cellText !== !1 && (p.w = y), R && (p.t = "z", delete p.v), (!R || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= b))
            for (var Q = 0; Q < ie; ++Q) {
              if (he = parseInt(w["number-columns-repeated"] || "1", 10), r.dense)
                for (v[b + Q] || (v[b + Q] = []), v[b + Q][N] = Q == 0 ? p : Me(p); --he > 0; )
                  v[b + Q][N + he] = Me(p);
              else
                for (v[pe({ r: b + Q, c: N })] = p; --he > 0; )
                  v[pe({ r: b + Q, c: N + he })] = Me(p);
              F.e.c <= N && (F.e.c = N);
            }
          he = parseInt(w["number-columns-repeated"] || "1", 10), N += he - 1, he = 0, p = {}, y = "", D = [];
        }
        V = {};
        break;
      case "document":
      case "document-content":
      case "\u7535\u5B50\u8868\u683C\u6587\u6863":
      case "spreadsheet":
      case "\u4E3B\u4F53":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (h[1] === "/") {
          if ((i = n.pop())[0] !== h[3])
            throw "Bad state: " + i;
        } else
          h[0].charAt(h[0].length - 2) !== "/" && n.push([h[3], !0]);
        break;
      case "annotation":
        if (h[1] === "/") {
          if ((i = n.pop())[0] !== h[3])
            throw "Bad state: " + i;
          C.t = y, D.length && (C.R = D), C.a = P, ge.push(C);
        } else
          h[0].charAt(h[0].length - 2) !== "/" && n.push([h[3], !1]);
        P = "", O = 0, y = "", g = 0, D = [];
        break;
      case "creator":
        h[1] === "/" ? P = a.slice(O, h.index) : O = h.index + h[0].length;
        break;
      case "meta":
      case "\u5143\u6570\u636E":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (h[1] === "/") {
          if ((i = n.pop())[0] !== h[3])
            throw "Bad state: " + i;
        } else
          h[0].charAt(h[0].length - 2) !== "/" && n.push([h[3], !1]);
        y = "", g = 0, D = [];
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (h[1] === "/") {
          if (I[f.name] = c, (i = n.pop())[0] !== h[3])
            throw "Bad state: " + i;
        } else
          h[0].charAt(h[0].length - 2) !== "/" && (c = "", f = me(h[0], !1), n.push([h[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            s = me(h[0], !1), c += ss[h[3]][s.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            s = me(h[0], !1), c += ss[h[3]][s.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (h[0].slice(-2) === "/>")
          break;
        if (h[1] === "/")
          switch (n[n.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              c += a.slice(o, h.index);
              break;
          }
        else
          o = h.index + h[0].length;
        break;
      case "named-range":
        s = me(h[0], !1), ve = z0(s["cell-range-address"]);
        var Z = { Name: s.name, Ref: ve[0] + "!" + ve[1] };
        j && (Z.Sheet = d.length), Pe.Names.push(Z);
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "\u7535\u5B50\u8868\u683C":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "\u6587\u672C\u4E32":
        if (["master-styles"].indexOf(n[n.length - 1][0]) > -1)
          break;
        if (h[1] === "/" && (!w || !w["string-value"])) {
          var Ee = Km(a.slice(g, h.index));
          y = (y.length > 0 ? y + `
` : "") + Ee[0];
        } else
          me(h[0], !1), g = h.index + h[0].length;
        break;
      case "s":
        break;
      case "database-range":
        if (h[1] === "/")
          break;
        try {
          ve = z0(me(h[0])["target-range-address"]), x[ve[0]]["!autofilter"] = { ref: ve[1] };
        } catch {
        }
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "\u6807\u9898":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (h[1] !== "/") {
          if (V = me(h[0], !1), !V.href)
            break;
          V.Target = Oe(V.href), delete V.href, V.Target.charAt(0) == "#" && V.Target.indexOf(".") > -1 ? (ve = z0(V.Target.slice(1)), V.Target = "#" + ve[0] + "!" + ve[1]) : V.Target.match(/^\.\.[\\\/]/) && (V.Target = V.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (h[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "\u8868:":
          case "\u5B57:":
            break;
          default:
            if (r.WTF)
              throw new Error(h);
        }
    }
  var A = {
    Sheets: x,
    SheetNames: d,
    Workbook: Pe
  };
  return r.bookSheets && delete A.Sheets, A;
}
function fs(e, t) {
  t = t || {}, Vr(e, "META-INF/manifest.xml") && Fl(rr(e, "META-INF/manifest.xml"), t);
  var r = Rr(e, "content.xml");
  if (!r)
    throw new Error("Missing content.xml in ODS / UOF file");
  var a = vc(Le(r), t);
  return Vr(e, "meta.xml") && (a.Props = Qs(rr(e, "meta.xml"))), a;
}
function cs(e, t) {
  return vc(e, t);
}
var jm = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + Pa({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return Qe + t;
  };
}(), os = /* @__PURE__ */ function() {
  var e = function(i) {
    return be(i).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, a = function(i, s, f) {
    var c = [];
    c.push('      <table:table table:name="' + be(s.SheetNames[f]) + `" table:style-name="ta1">
`);
    var o = 0, l = 0, u = yr(i["!ref"] || "A1"), x = i["!merges"] || [], d = 0, v = Array.isArray(i);
    if (i["!cols"])
      for (l = 0; l <= u.e.c; ++l)
        c.push("        <table:table-column" + (i["!cols"][l] ? ' table:style-name="co' + i["!cols"][l].ods + '"' : "") + `></table:table-column>
`);
    var h = "", p = i["!rows"] || [];
    for (o = 0; o < u.s.r; ++o)
      h = p[o] ? ' table:style-name="ro' + p[o].ods + '"' : "", c.push("        <table:table-row" + h + `></table:table-row>
`);
    for (; o <= u.e.r; ++o) {
      for (h = p[o] ? ' table:style-name="ro' + p[o].ods + '"' : "", c.push("        <table:table-row" + h + `>
`), l = 0; l < u.s.c; ++l)
        c.push(t);
      for (; l <= u.e.c; ++l) {
        var w = !1, y = {}, g = "";
        for (d = 0; d != x.length; ++d)
          if (!(x[d].s.c > l) && !(x[d].s.r > o) && !(x[d].e.c < l) && !(x[d].e.r < o)) {
            (x[d].s.c != l || x[d].s.r != o) && (w = !0), y["table:number-columns-spanned"] = x[d].e.c - x[d].s.c + 1, y["table:number-rows-spanned"] = x[d].e.r - x[d].s.r + 1;
            break;
          }
        if (w) {
          c.push(r);
          continue;
        }
        var D = pe({ r: o, c: l }), b = v ? (i[o] || [])[l] : i[D];
        if (b && b.f && (y["table:formula"] = be(_v(b.f)), b.F && b.F.slice(0, D.length) == D)) {
          var N = yr(b.F);
          y["table:number-matrix-columns-spanned"] = N.e.c - N.s.c + 1, y["table:number-matrix-rows-spanned"] = N.e.r - N.s.r + 1;
        }
        if (!b) {
          c.push(t);
          continue;
        }
        switch (b.t) {
          case "b":
            g = b.v ? "TRUE" : "FALSE", y["office:value-type"] = "boolean", y["office:boolean-value"] = b.v ? "true" : "false";
            break;
          case "n":
            g = b.w || String(b.v || 0), y["office:value-type"] = "float", y["office:value"] = b.v || 0;
            break;
          case "s":
          case "str":
            g = b.v == null ? "" : b.v, y["office:value-type"] = "string";
            break;
          case "d":
            g = b.w || Ve(b.v).toISOString(), y["office:value-type"] = "date", y["office:date-value"] = Ve(b.v).toISOString(), y["table:style-name"] = "ce1";
            break;
          default:
            c.push(t);
            continue;
        }
        var F = e(g);
        if (b.l && b.l.Target) {
          var B = b.l.Target;
          B = B.charAt(0) == "#" ? "#" + wv(B.slice(1)) : B, B.charAt(0) != "#" && !B.match(/^\w+:/) && (B = "../" + B), F = ae("text:a", F, { "xlink:href": B.replace(/&/g, "&amp;") });
        }
        c.push("          " + ae("table:table-cell", ae("text:p", F, {}), y) + `
`);
      }
      c.push(`        </table:table-row>
`);
    }
    return c.push(`      </table:table>
`), c.join("");
  }, n = function(i, s) {
    i.push(` <office:automatic-styles>
`), i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), i.push(`   <number:month number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:day number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:year/>
`), i.push(`  </number:date-style>
`);
    var f = 0;
    s.SheetNames.map(function(o) {
      return s.Sheets[o];
    }).forEach(function(o) {
      if (!!o && o["!cols"]) {
        for (var l = 0; l < o["!cols"].length; ++l)
          if (o["!cols"][l]) {
            var u = o["!cols"][l];
            if (u.width == null && u.wpx == null && u.wch == null)
              continue;
            St(u), u.ods = f;
            var x = o["!cols"][l].wpx + "px";
            i.push('  <style:style style:name="co' + f + `" style:family="table-column">
`), i.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + x + `"/>
`), i.push(`  </style:style>
`), ++f;
          }
      }
    });
    var c = 0;
    s.SheetNames.map(function(o) {
      return s.Sheets[o];
    }).forEach(function(o) {
      if (!!o && o["!rows"]) {
        for (var l = 0; l < o["!rows"].length; ++l)
          if (o["!rows"][l]) {
            o["!rows"][l].ods = c;
            var u = o["!rows"][l].hpx + "px";
            i.push('  <style:style style:name="ro' + c + `" style:family="table-row">
`), i.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + u + `"/>
`), i.push(`  </style:style>
`), ++c;
          }
      }
    }), i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), i.push(`  </style:style>
`), i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), i.push(` </office:automatic-styles>
`);
  };
  return function(s, f) {
    var c = [Qe], o = Pa({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), l = Pa({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    f.bookType == "fods" ? (c.push("<office:document" + o + l + `>
`), c.push(qs().replace(/office:document-meta/g, "office:meta"))) : c.push("<office:document-content" + o + `>
`), n(c, s), c.push(`  <office:body>
`), c.push(`    <office:spreadsheet>
`);
    for (var u = 0; u != s.SheetNames.length; ++u)
      c.push(a(s.Sheets[s.SheetNames[u]], s, u));
    return c.push(`    </office:spreadsheet>
`), c.push(`  </office:body>
`), f.bookType == "fods" ? c.push("</office:document>") : c.push("</office:document-content>"), c.join("");
  };
}();
function pc(e, t) {
  if (t.bookType == "fods")
    return os(e, t);
  var r = pn(), a = "", n = [], i = [];
  return a = "mimetype", ke(r, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", ke(r, a, os(e, t)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", ke(r, a, jm(e, t)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", ke(r, a, Qe + qs()), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", ke(r, a, Cl(i)), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", ke(r, a, yl(n)), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function Xt(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function on(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Le(At(e));
}
function Ym(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Ir(tt(e));
}
function Jm(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var a = 0; a < t.length; ++a)
        if (e[r + a] != t[a])
          continue e;
      return !0;
    }
  return !1;
}
function yt(e) {
  var t = e.reduce(function(n, i) {
    return n + i.length;
  }, 0), r = new Uint8Array(t), a = 0;
  return e.forEach(function(n) {
    r.set(n, a), a += n.length;
  }), r;
}
function ls(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function Zm(e, t) {
  for (var r = (e[t + 15] & 127) << 7 | e[t + 14] >> 1, a = e[t + 14] & 1, n = t + 13; n >= t; --n)
    a = a * 256 + e[n];
  return (e[t + 15] & 128 ? -a : a) * Math.pow(10, r - 6176);
}
function qm(e, t, r) {
  var a = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, n = r / Math.pow(10, a - 6176);
  e[t + 15] |= a >> 7, e[t + 14] |= (a & 127) << 1;
  for (var i = 0; n >= 1; ++i, n /= 256)
    e[t + i] = n & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function Xa(e, t) {
  var r = t ? t[0] : 0, a = e[r] & 127;
  e:
    if (e[r++] >= 128 && (a |= (e[r] & 127) << 7, e[r++] < 128 || (a |= (e[r] & 127) << 14, e[r++] < 128) || (a |= (e[r] & 127) << 21, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), a;
}
function Re(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function je(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function Ie(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var a = r[0], n = Xa(e, r), i = n & 7;
    n = Math.floor(n / 8);
    var s = 0, f;
    if (n == 0)
      break;
    switch (i) {
      case 0:
        {
          for (var c = r[0]; e[r[0]++] >= 128; )
            ;
          f = e.slice(c, r[0]);
        }
        break;
      case 5:
        s = 4, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 1:
        s = 8, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 2:
        s = Xa(e, r), f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(n, " at offset ").concat(a));
    }
    var o = { data: f, type: i };
    t[n] == null ? t[n] = [o] : t[n].push(o);
  }
  return t;
}
function lr(e) {
  var t = [];
  return e.forEach(function(r, a) {
    r.forEach(function(n) {
      !n.data || (t.push(Re(a * 8 + n.type)), n.type == 2 && t.push(Re(n.data.length)), t.push(n.data));
    });
  }), yt(t);
}
function Kn(e, t) {
  return (e == null ? void 0 : e.map(function(r) {
    return t(r.data);
  })) || [];
}
function Wr(e) {
  for (var t, r = [], a = [0]; a[0] < e.length; ) {
    var n = Xa(e, a), i = Ie(e.slice(a[0], a[0] + n));
    a[0] += n;
    var s = {
      id: je(i[1][0].data),
      messages: []
    };
    i[2].forEach(function(f) {
      var c = Ie(f.data), o = je(c[3][0].data);
      s.messages.push({
        meta: c,
        data: e.slice(a[0], a[0] + o)
      }), a[0] += o;
    }), (t = i[3]) != null && t[0] && (s.merge = je(i[3][0].data) >>> 0 > 0), r.push(s);
  }
  return r;
}
function qt(e) {
  var t = [];
  return e.forEach(function(r) {
    var a = [];
    a[1] = [{ data: Re(r.id), type: 0 }], a[2] = [], r.merge != null && (a[3] = [{ data: Re(+!!r.merge), type: 0 }]);
    var n = [];
    r.messages.forEach(function(s) {
      n.push(s.data), s.meta[3] = [{ type: 0, data: Re(s.data.length) }], a[2].push({ data: lr(s.meta), type: 2 });
    });
    var i = lr(a);
    t.push(Re(i.length)), t.push(i), n.forEach(function(s) {
      return t.push(s);
    });
  }), yt(t);
}
function Qm(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], a = Xa(t, r), n = []; r[0] < t.length; ) {
    var i = t[r[0]] & 3;
    if (i == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60)
        ++s;
      else {
        var f = s - 59;
        s = t[r[0]], f > 1 && (s |= t[r[0] + 1] << 8), f > 2 && (s |= t[r[0] + 2] << 16), f > 3 && (s |= t[r[0] + 3] << 24), s >>>= 0, s++, r[0] += f;
      }
      n.push(t.slice(r[0], r[0] + s)), r[0] += s;
      continue;
    } else {
      var c = 0, o = 0;
      if (i == 1 ? (o = (t[r[0]] >> 2 & 7) + 4, c = (t[r[0]++] & 224) << 3, c |= t[r[0]++]) : (o = (t[r[0]++] >> 2) + 1, i == 2 ? (c = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (c = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), n = [yt(n)], c == 0)
        throw new Error("Invalid offset 0");
      if (c > n[0].length)
        throw new Error("Invalid offset beyond length");
      if (o >= c)
        for (n.push(n[0].slice(-c)), o -= c; o >= n[n.length - 1].length; )
          n.push(n[n.length - 1]), o -= n[n.length - 1].length;
      n.push(n[0].slice(-c, -c + o));
    }
  }
  var l = yt(n);
  if (l.length != a)
    throw new Error("Unexpected length: ".concat(l.length, " != ").concat(a));
  return l;
}
function Hr(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var a = e[r++], n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(Qm(a, e.slice(r, r + n))), r += n;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return yt(t);
}
function Qt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var a = Math.min(e.length - r, 268435455), n = new Uint8Array(4);
    t.push(n);
    var i = Re(a), s = i.length;
    t.push(i), a <= 60 ? (s++, t.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, t.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, t.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, t.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, t.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), t.push(e.slice(r, r + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, r += a;
  }
  return yt(t);
}
function eg(e, t, r, a) {
  var n = Xt(e), i = n.getUint32(4, !0), s = (a > 1 ? 12 : 8) + ls(i & (a > 1 ? 3470 : 398)) * 4, f = -1, c = -1, o = NaN, l = new Date(2001, 0, 1);
  i & 512 && (f = n.getUint32(s, !0), s += 4), s += ls(i & (a > 1 ? 12288 : 4096)) * 4, i & 16 && (c = n.getUint32(s, !0), s += 4), i & 32 && (o = n.getFloat64(s, !0), s += 8), i & 64 && (l.setTime(l.getTime() + n.getFloat64(s, !0) * 1e3), s += 8);
  var u;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: o };
      break;
    case 3:
      u = { t: "s", v: t[c] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: o > 0 };
      break;
    case 7:
      u = { t: "n", v: o / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (f > -1)
        u = { t: "s", v: r[f] };
      else if (c > -1)
        u = { t: "s", v: t[c] };
      else if (!isNaN(o))
        u = { t: "n", v: o };
      else
        throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return u;
}
function rg(e, t, r) {
  var a = Xt(e), n = a.getUint32(8, !0), i = 12, s = -1, f = -1, c = NaN, o = NaN, l = new Date(2001, 0, 1);
  n & 1 && (c = Zm(e, i), i += 16), n & 2 && (o = a.getFloat64(i, !0), i += 8), n & 4 && (l.setTime(l.getTime() + a.getFloat64(i, !0) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, !0), i += 4), n & 16 && (s = a.getUint32(i, !0), i += 4);
  var u;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: c };
      break;
    case 3:
      u = { t: "s", v: t[f] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: o > 0 };
      break;
    case 7:
      u = { t: "n", v: o / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1)
        u = { t: "s", v: r[s] };
      else
        throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      u = { t: "n", v: c };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e.slice(0, 4)));
  }
  return u;
}
function K0(e, t) {
  var r = new Uint8Array(32), a = Xt(r), n = 12, i = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, qm(r, n, e.v), i |= 1, n += 16;
      break;
    case "b":
      r[1] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 2, n += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, a.setUint32(n, t.indexOf(e.v), !0), i |= 8, n += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return a.setUint32(8, i, !0), r.slice(0, n);
}
function j0(e, t) {
  var r = new Uint8Array(32), a = Xt(r), n = 12, i = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, a.setFloat64(n, e.v, !0), i |= 32, n += 8;
      break;
    case "b":
      r[2] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 32, n += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, a.setUint32(n, t.indexOf(e.v), !0), i |= 16, n += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return a.setUint32(4, i, !0), r.slice(0, n);
}
function tg(e, t, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return eg(e, t, r, e[0]);
    case 5:
      return rg(e, t, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function vr(e) {
  var t = Ie(e);
  return Xa(t[1][0].data);
}
function us(e, t) {
  var r = Ie(t.data), a = je(r[1][0].data), n = r[3], i = [];
  return (n || []).forEach(function(s) {
    var f = Ie(s.data), c = je(f[1][0].data) >>> 0;
    switch (a) {
      case 1:
        i[c] = on(f[3][0].data);
        break;
      case 8:
        {
          var o = e[vr(f[9][0].data)][0], l = Ie(o.data), u = e[vr(l[1][0].data)][0], x = je(u.meta[1][0].data);
          if (x != 2001)
            throw new Error("2000 unexpected reference to ".concat(x));
          var d = Ie(u.data);
          i[c] = d[3].map(function(v) {
            return on(v.data);
          }).join("");
        }
        break;
    }
  }), i;
}
function ag(e, t) {
  var r, a, n, i, s, f, c, o, l, u, x, d, v, h, p = Ie(e), w = je(p[1][0].data) >>> 0, y = je(p[2][0].data) >>> 0, g = ((a = (r = p[8]) == null ? void 0 : r[0]) == null ? void 0 : a.data) && je(p[8][0].data) > 0 || !1, D, b;
  if (((i = (n = p[7]) == null ? void 0 : n[0]) == null ? void 0 : i.data) && t != 0)
    D = (f = (s = p[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, b = (o = (c = p[6]) == null ? void 0 : c[0]) == null ? void 0 : o.data;
  else if (((u = (l = p[4]) == null ? void 0 : l[0]) == null ? void 0 : u.data) && t != 1)
    D = (d = (x = p[4]) == null ? void 0 : x[0]) == null ? void 0 : d.data, b = (h = (v = p[3]) == null ? void 0 : v[0]) == null ? void 0 : h.data;
  else
    throw "NUMBERS Tile missing ".concat(t, " cell storage");
  for (var N = g ? 4 : 1, F = Xt(D), B = [], I = 0; I < D.length / 2; ++I) {
    var z = F.getUint16(I * 2, !0);
    z < 65535 && B.push([I, z]);
  }
  if (B.length != y)
    throw "Expected ".concat(y, " cells, found ").concat(B.length);
  var X = [];
  for (I = 0; I < B.length - 1; ++I)
    X[B[I][0]] = b.subarray(B[I][1] * N, B[I + 1][1] * N);
  return B.length >= 1 && (X[B[B.length - 1][0]] = b.subarray(B[B.length - 1][1] * N)), { R: w, cells: X };
}
function ng(e, t) {
  var r, a = Ie(t.data), n = (r = a == null ? void 0 : a[7]) != null && r[0] ? je(a[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, i = Kn(a[5], function(s) {
    return ag(s, n);
  });
  return {
    nrows: je(a[4][0].data) >>> 0,
    data: i.reduce(function(s, f) {
      return s[f.R] || (s[f.R] = []), f.cells.forEach(function(c, o) {
        if (s[f.R][o])
          throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(o));
        s[f.R][o] = c;
      }), s;
    }, [])
  };
}
function ig(e, t, r) {
  var a, n = Ie(t.data), i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (i.e.r = (je(n[6][0].data) >>> 0) - 1, i.e.r < 0)
    throw new Error("Invalid row varint ".concat(n[6][0].data));
  if (i.e.c = (je(n[7][0].data) >>> 0) - 1, i.e.c < 0)
    throw new Error("Invalid col varint ".concat(n[7][0].data));
  r["!ref"] = we(i);
  var s = Ie(n[4][0].data), f = us(e, e[vr(s[4][0].data)][0]), c = (a = s[17]) != null && a[0] ? us(e, e[vr(s[17][0].data)][0]) : [], o = Ie(s[3][0].data), l = 0;
  o[1].forEach(function(u) {
    var x = Ie(u.data), d = e[vr(x[2][0].data)][0], v = je(d.meta[1][0].data);
    if (v != 6002)
      throw new Error("6001 unexpected reference to ".concat(v));
    var h = ng(e, d);
    h.data.forEach(function(p, w) {
      p.forEach(function(y, g) {
        var D = pe({ r: l + w, c: g }), b = tg(y, f, c);
        b && (r[D] = b);
      });
    }), l += h.nrows;
  });
}
function sg(e, t) {
  var r = Ie(t.data), a = { "!ref": "A1" }, n = e[vr(r[2][0].data)], i = je(n[0].meta[1][0].data);
  if (i != 6001)
    throw new Error("6000 unexpected reference to ".concat(i));
  return ig(e, n[0], a), a;
}
function fg(e, t) {
  var r, a = Ie(t.data), n = {
    name: (r = a[1]) != null && r[0] ? on(a[1][0].data) : "",
    sheets: []
  }, i = Kn(a[2], vr);
  return i.forEach(function(s) {
    e[s].forEach(function(f) {
      var c = je(f.meta[1][0].data);
      c == 6e3 && n.sheets.push(sg(e, f));
    });
  }), n;
}
function cg(e, t) {
  var r = ei(), a = Ie(t.data), n = Kn(a[1], vr);
  if (n.forEach(function(i) {
    e[i].forEach(function(s) {
      var f = je(s.meta[1][0].data);
      if (f == 2) {
        var c = fg(e, s);
        c.sheets.forEach(function(o, l) {
          ri(r, o, l == 0 ? c.name : c.name + "_" + l, !0);
        });
      }
    });
  }), r.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return r;
}
function Y0(e) {
  var t, r, a, n, i = {}, s = [];
  if (e.FullPaths.forEach(function(c) {
    if (c.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(c) {
    if (!!c.name.match(/\.iwa$/)) {
      var o;
      try {
        o = Hr(c.content);
      } catch (u) {
        return console.log("?? " + c.content.length + " " + (u.message || u));
      }
      var l;
      try {
        l = Wr(o);
      } catch (u) {
        return console.log("## " + (u.message || u));
      }
      l.forEach(function(u) {
        i[u.id] = u.messages, s.push(u.id);
      });
    }
  }), !s.length)
    throw new Error("File has no messages");
  var f = ((n = (a = (r = (t = i == null ? void 0 : i[1]) == null ? void 0 : t[0]) == null ? void 0 : r.meta) == null ? void 0 : a[1]) == null ? void 0 : n[0].data) && je(i[1][0].meta[1][0].data) == 1 && i[1][0];
  if (f || s.forEach(function(c) {
    i[c].forEach(function(o) {
      var l = je(o.meta[1][0].data) >>> 0;
      if (l == 1)
        if (!f)
          f = o;
        else
          throw new Error("Document has multiple roots");
    });
  }), !f)
    throw new Error("Cannot find Document root");
  return cg(i, f);
}
function og(e, t, r) {
  var a, n, i, s;
  if (!((a = e[6]) != null && a[0]) || !((n = e[7]) != null && n[0]))
    throw "Mutation only works on post-BNC storages!";
  var f = ((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) && je(e[8][0].data) > 0 || !1;
  if (f)
    throw "Math only works with normal offsets";
  for (var c = 0, o = Xt(e[7][0].data), l = 0, u = [], x = Xt(e[4][0].data), d = 0, v = [], h = 0; h < t.length; ++h) {
    if (t[h] == null) {
      o.setUint16(h * 2, 65535, !0), x.setUint16(h * 2, 65535);
      continue;
    }
    o.setUint16(h * 2, l, !0), x.setUint16(h * 2, d, !0);
    var p, w;
    switch (typeof t[h]) {
      case "string":
        p = K0({ t: "s", v: t[h] }, r), w = j0({ t: "s", v: t[h] }, r);
        break;
      case "number":
        p = K0({ t: "n", v: t[h] }, r), w = j0({ t: "n", v: t[h] }, r);
        break;
      case "boolean":
        p = K0({ t: "b", v: t[h] }, r), w = j0({ t: "b", v: t[h] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[h]);
    }
    u.push(p), l += p.length, v.push(w), d += w.length, ++c;
  }
  for (e[2][0].data = Re(c); h < e[7][0].data.length / 2; ++h)
    o.setUint16(h * 2, 65535, !0), x.setUint16(h * 2, 65535, !0);
  return e[6][0].data = yt(u), e[3][0].data = yt(v), c;
}
function lg(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var a = yr(r["!ref"]);
  a.s.r = a.s.c = 0;
  var n = !1;
  a.e.c > 9 && (n = !0, a.e.c = 9), a.e.r > 49 && (n = !0, a.e.r = 49), n && console.error("The Numbers writer is currently limited to ".concat(we(a)));
  var i = T0(r, { range: a, header: 1 }), s = ["~Sh33tJ5~"];
  i.forEach(function(P) {
    return P.forEach(function(O) {
      typeof O == "string" && s.push(O);
    });
  });
  var f = {}, c = [], o = xe.read(t.numbers, { type: "base64" });
  o.FileIndex.map(function(P, O) {
    return [P, o.FullPaths[O]];
  }).forEach(function(P) {
    var O = P[0], R = P[1];
    if (O.type == 2 && !!O.name.match(/\.iwa/)) {
      var j = O.content, re = Hr(j), te = Wr(re);
      te.forEach(function(Q) {
        c.push(Q.id), f[Q.id] = { deps: [], location: R, type: je(Q.messages[0].meta[1][0].data) };
      });
    }
  }), c.sort(function(P, O) {
    return P - O;
  });
  var l = c.filter(function(P) {
    return P > 1;
  }).map(function(P) {
    return [P, Re(P)];
  });
  o.FileIndex.map(function(P, O) {
    return [P, o.FullPaths[O]];
  }).forEach(function(P) {
    var O = P[0];
    if (P[1], !!O.name.match(/\.iwa/)) {
      var R = Wr(Hr(O.content));
      R.forEach(function(j) {
        j.messages.forEach(function(re) {
          l.forEach(function(te) {
            j.messages.some(function(Q) {
              return je(Q.meta[1][0].data) != 11006 && Jm(Q.data, te[1]);
            }) && f[te[0]].deps.push(j.id);
          });
        });
      });
    }
  });
  for (var u = xe.find(o, f[1].location), x = Wr(Hr(u.content)), d, v = 0; v < x.length; ++v) {
    var h = x[v];
    h.id == 1 && (d = h);
  }
  var p = vr(Ie(d.messages[0].data)[1][0].data);
  for (u = xe.find(o, f[p].location), x = Wr(Hr(u.content)), v = 0; v < x.length; ++v)
    h = x[v], h.id == p && (d = h);
  for (p = vr(Ie(d.messages[0].data)[2][0].data), u = xe.find(o, f[p].location), x = Wr(Hr(u.content)), v = 0; v < x.length; ++v)
    h = x[v], h.id == p && (d = h);
  for (p = vr(Ie(d.messages[0].data)[2][0].data), u = xe.find(o, f[p].location), x = Wr(Hr(u.content)), v = 0; v < x.length; ++v)
    h = x[v], h.id == p && (d = h);
  var w = Ie(d.messages[0].data);
  {
    w[6][0].data = Re(a.e.r + 1), w[7][0].data = Re(a.e.c + 1);
    var y = vr(w[46][0].data), g = xe.find(o, f[y].location), D = Wr(Hr(g.content));
    {
      for (var b = 0; b < D.length && D[b].id != y; ++b)
        ;
      if (D[b].id != y)
        throw "Bad ColumnRowUIDMapArchive";
      var N = Ie(D[b].messages[0].data);
      N[1] = [], N[2] = [], N[3] = [];
      for (var F = 0; F <= a.e.c; ++F) {
        var B = [];
        B[1] = B[2] = [{ type: 0, data: Re(F + 420690) }], N[1].push({ type: 2, data: lr(B) }), N[2].push({ type: 0, data: Re(F) }), N[3].push({ type: 0, data: Re(F) });
      }
      N[4] = [], N[5] = [], N[6] = [];
      for (var I = 0; I <= a.e.r; ++I)
        B = [], B[1] = B[2] = [{ type: 0, data: Re(I + 726270) }], N[4].push({ type: 2, data: lr(B) }), N[5].push({ type: 0, data: Re(I) }), N[6].push({ type: 0, data: Re(I) });
      D[b].messages[0].data = lr(N);
    }
    g.content = Qt(qt(D)), g.size = g.content.length, delete w[46];
    var z = Ie(w[4][0].data);
    {
      z[7][0].data = Re(a.e.r + 1);
      var X = Ie(z[1][0].data), L = vr(X[2][0].data);
      g = xe.find(o, f[L].location), D = Wr(Hr(g.content));
      {
        if (D[0].id != L)
          throw "Bad HeaderStorageBucket";
        var J = Ie(D[0].messages[0].data);
        for (I = 0; I < i.length; ++I) {
          var le = Ie(J[2][0].data);
          le[1][0].data = Re(I), le[4][0].data = Re(i[I].length), J[2][I] = { type: J[2][0].type, data: lr(le) };
        }
        D[0].messages[0].data = lr(J);
      }
      g.content = Qt(qt(D)), g.size = g.content.length;
      var ie = vr(z[2][0].data);
      g = xe.find(o, f[ie].location), D = Wr(Hr(g.content));
      {
        if (D[0].id != ie)
          throw "Bad HeaderStorageBucket";
        for (J = Ie(D[0].messages[0].data), F = 0; F <= a.e.c; ++F)
          le = Ie(J[2][0].data), le[1][0].data = Re(F), le[4][0].data = Re(a.e.r + 1), J[2][F] = { type: J[2][0].type, data: lr(le) };
        D[0].messages[0].data = lr(J);
      }
      g.content = Qt(qt(D)), g.size = g.content.length;
      var he = vr(z[4][0].data);
      (function() {
        for (var P = xe.find(o, f[he].location), O = Wr(Hr(P.content)), R, j = 0; j < O.length; ++j) {
          var re = O[j];
          re.id == he && (R = re);
        }
        var te = Ie(R.messages[0].data);
        {
          te[3] = [];
          var Q = [];
          s.forEach(function(A, Ue) {
            Q[1] = [{ type: 0, data: Re(Ue) }], Q[2] = [{ type: 0, data: Re(1) }], Q[3] = [{ type: 2, data: Ym(A) }], te[3].push({ type: 2, data: lr(Q) });
          });
        }
        R.messages[0].data = lr(te);
        var Z = qt(O), Ee = Qt(Z);
        P.content = Ee, P.size = P.content.length;
      })();
      var ce = Ie(z[3][0].data);
      {
        var Pe = ce[1][0];
        delete ce[2];
        var V = Ie(Pe.data);
        {
          var ve = vr(V[2][0].data);
          (function() {
            for (var P = xe.find(o, f[ve].location), O = Wr(Hr(P.content)), R, j = 0; j < O.length; ++j) {
              var re = O[j];
              re.id == ve && (R = re);
            }
            var te = Ie(R.messages[0].data);
            {
              delete te[6], delete ce[7];
              var Q = new Uint8Array(te[5][0].data);
              te[5] = [];
              for (var Z = 0, Ee = 0; Ee <= a.e.r; ++Ee) {
                var A = Ie(Q);
                Z += og(A, i[Ee], s), A[1][0].data = Re(Ee), te[5].push({ data: lr(A), type: 2 });
              }
              te[1] = [{ type: 0, data: Re(a.e.c + 1) }], te[2] = [{ type: 0, data: Re(a.e.r + 1) }], te[3] = [{ type: 0, data: Re(Z) }], te[4] = [{ type: 0, data: Re(a.e.r + 1) }];
            }
            R.messages[0].data = lr(te);
            var Ue = qt(O), Ce = Qt(Ue);
            P.content = Ce, P.size = P.content.length;
          })();
        }
        Pe.data = lr(V);
      }
      z[3][0].data = lr(ce);
    }
    w[4][0].data = lr(z);
  }
  d.messages[0].data = lr(w);
  var ge = qt(x), C = Qt(ge);
  return u.content = C, u.size = u.content.length, o;
}
function mc(e) {
  return function(r) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      r[n[0]] === void 0 && (r[n[0]] = n[1]), n[2] === "n" && (r[n[0]] = Number(r[n[0]]));
    }
  };
}
function jn(e) {
  mc([
    ["cellNF", !1],
    ["cellHTML", !0],
    ["cellFormula", !0],
    ["cellStyles", !1],
    ["cellText", !0],
    ["cellDates", !1],
    ["sheetStubs", !1],
    ["sheetRows", 0, "n"],
    ["bookDeps", !1],
    ["bookSheets", !1],
    ["bookProps", !1],
    ["bookFiles", !1],
    ["bookVBA", !1],
    ["password", ""],
    ["WTF", !1]
  ])(e);
}
function Yn(e) {
  mc([
    ["cellDates", !1],
    ["bookSST", !1],
    ["bookType", "xlsx"],
    ["compression", !1],
    ["WTF", !1]
  ])(e);
}
function ug(e) {
  return Fe.WS.indexOf(e) > -1 ? "sheet" : e == Fe.CS ? "chart" : e == Fe.DS ? "dialog" : e == Fe.MS ? "macro" : e && e.length ? e : "sheet";
}
function hg(e, t) {
  if (!e)
    return 0;
  try {
    e = t.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, ug(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function xg(e, t, r, a, n, i, s, f, c, o, l, u) {
  try {
    i[a] = ya(Rr(e, r, !0), t);
    var x = rr(e, t), d;
    switch (f) {
      case "sheet":
        d = Up(x, t, n, c, i[a], o, l, u);
        break;
      case "chart":
        if (d = Wp(x, t, n, c, i[a], o, l, u), !d || !d["!drawel"])
          break;
        var v = Ea(d["!drawel"].Target, t), h = Ba(v), p = Ax(Rr(e, v, !0), ya(Rr(e, h, !0), v)), w = Ea(p, v), y = Ba(w);
        d = dp(Rr(e, w, !0), w, c, ya(Rr(e, y, !0), w), o, d);
        break;
      case "macro":
        d = Hp(x, t, n, c, i[a], o, l, u);
        break;
      case "dialog":
        d = Vp(x, t, n, c, i[a], o, l, u);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = d;
    var g = [];
    i && i[a] && Ye(i[a]).forEach(function(D) {
      var b = "";
      if (i[a][D].Type == Fe.CMNT) {
        b = Ea(i[a][D].Target, t);
        var N = $p(rr(e, b, !0), b, c);
        if (!N || !N.length)
          return;
        Ji(d, N, !1);
      }
      i[a][D].Type == Fe.TCMNT && (b = Ea(i[a][D].Target, t), g = g.concat(Dx(rr(e, b, !0), c)));
    }), g && g.length && Ji(d, g, !0, c.people || []);
  } catch (D) {
    if (c.WTF)
      throw D;
  }
}
function Mr(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function dg(e, t) {
  if (la(), t = t || {}, jn(t), Vr(e, "META-INF/manifest.xml") || Vr(e, "objectdata.xml"))
    return fs(e, t);
  if (Vr(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u")
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Y0 < "u") {
      if (e.FileIndex)
        return Y0(e);
      var r = xe.utils.cfb_new();
      return mi(e).forEach(function(le) {
        ke(r, le, Ds(e, le));
      }), Y0(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!Vr(e, "[Content_Types].xml"))
    throw Vr(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : Vr(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var a = mi(e), n = Tl(Rr(e, "[Content_Types].xml")), i = !1, s, f;
  if (n.workbooks.length === 0 && (f = "xl/workbook.xml", rr(e, f, !0) && n.workbooks.push(f)), n.workbooks.length === 0) {
    if (f = "xl/workbook.bin", !rr(e, f, !0))
      throw new Error("Could not find workbook");
    n.workbooks.push(f), i = !0;
  }
  n.workbooks[0].slice(-3) == "bin" && (i = !0);
  var c = {}, o = {};
  if (!t.bookSheets && !t.bookProps) {
    if (Aa = [], n.sst)
      try {
        Aa = zp(rr(e, Mr(n.sst)), n.sst, t);
      } catch (le) {
        if (t.WTF)
          throw le;
      }
    t.cellStyles && n.themes.length && (c = Gp(Rr(e, n.themes[0].replace(/^\//, ""), !0) || "", n.themes[0], t)), n.style && (o = Xp(rr(e, Mr(n.style)), n.style, c, t));
  }
  n.links.map(function(le) {
    try {
      var ie = ya(Rr(e, Ba(Mr(le))), le);
      return jp(rr(e, Mr(le)), ie, le, t);
    } catch {
    }
  });
  var l = Mp(rr(e, Mr(n.workbooks[0])), n.workbooks[0], t), u = {}, x = "";
  n.coreprops.length && (x = rr(e, Mr(n.coreprops[0]), !0), x && (u = Qs(x)), n.extprops.length !== 0 && (x = rr(e, Mr(n.extprops[0]), !0), x && Ol(x, u, t)));
  var d = {};
  (!t.bookSheets || t.bookProps) && n.custprops.length !== 0 && (x = Rr(e, Mr(n.custprops[0]), !0), x && (d = Rl(x, t)));
  var v = {};
  if ((t.bookSheets || t.bookProps) && (l.Sheets ? s = l.Sheets.map(function(ie) {
    return ie.name;
  }) : u.Worksheets && u.SheetNames.length > 0 && (s = u.SheetNames), t.bookProps && (v.Props = u, v.Custprops = d), t.bookSheets && typeof s < "u" && (v.SheetNames = s), t.bookSheets ? v.SheetNames : t.bookProps))
    return v;
  s = {};
  var h = {};
  t.bookDeps && n.calcchain && (h = Kp(rr(e, Mr(n.calcchain)), n.calcchain));
  var p = 0, w = {}, y, g;
  {
    var D = l.Sheets;
    u.Worksheets = D.length, u.SheetNames = [];
    for (var b = 0; b != D.length; ++b)
      u.SheetNames[b] = D[b].name;
  }
  var N = i ? "bin" : "xml", F = n.workbooks[0].lastIndexOf("/"), B = (n.workbooks[0].slice(0, F + 1) + "_rels/" + n.workbooks[0].slice(F + 1) + ".rels").replace(/^\//, "");
  Vr(e, B) || (B = "xl/_rels/workbook." + N + ".rels");
  var I = ya(Rr(e, B, !0), B.replace(/_rels.*/, "s5s"));
  (n.metadata || []).length >= 1 && (t.xlmeta = Yp(rr(e, Mr(n.metadata[0])), n.metadata[0], t)), (n.people || []).length >= 1 && (t.people = Ix(rr(e, Mr(n.people[0])), t)), I && (I = hg(I, l.Sheets));
  var z = rr(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e:
    for (p = 0; p != u.Worksheets; ++p) {
      var X = "sheet";
      if (I && I[p] ? (y = "xl/" + I[p][1].replace(/[\/]?xl\//, ""), Vr(e, y) || (y = I[p][1]), Vr(e, y) || (y = B.replace(/_rels\/.*$/, "") + I[p][1]), X = I[p][2]) : (y = "xl/worksheets/sheet" + (p + 1 - z) + "." + N, y = y.replace(/sheet0\./, "sheet.")), g = y.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), t && t.sheets != null)
        switch (typeof t.sheets) {
          case "number":
            if (p != t.sheets)
              continue e;
            break;
          case "string":
            if (u.SheetNames[p].toLowerCase() != t.sheets.toLowerCase())
              continue e;
            break;
          default:
            if (Array.isArray && Array.isArray(t.sheets)) {
              for (var L = !1, J = 0; J != t.sheets.length; ++J)
                typeof t.sheets[J] == "number" && t.sheets[J] == p && (L = 1), typeof t.sheets[J] == "string" && t.sheets[J].toLowerCase() == u.SheetNames[p].toLowerCase() && (L = 1);
              if (!L)
                continue e;
            }
        }
      xg(e, y, g, u.SheetNames[p], p, w, s, X, t, l, c, o);
    }
  return v = {
    Directory: n,
    Workbook: l,
    Props: u,
    Custprops: d,
    Deps: h,
    Sheets: s,
    SheetNames: u.SheetNames,
    Strings: Aa,
    Styles: o,
    Themes: c,
    SSF: Me(de)
  }, t && t.bookFiles && (e.files ? (v.keys = a, v.files = e.files) : (v.keys = [], v.files = {}, e.FullPaths.forEach(function(le, ie) {
    le = le.replace(/^Root Entry[\/]/, ""), v.keys.push(le), v.files[le] = e.FileIndex[ie];
  }))), t && t.bookVBA && (n.vba.length > 0 ? v.vbaraw = rr(e, Mr(n.vba[0]), !0) : n.defaults && n.defaults.bin === Ux && (v.vbaraw = rr(e, "xl/vbaProject.bin", !0))), v;
}
function vg(e, t) {
  var r = t || {}, a = "Workbook", n = xe.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = xe.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    if (Jh(n.content), a = "/!DataSpaces/DataSpaceMap", n = xe.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = qh(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = xe.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = Qh(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = xe.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    r1(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = xe.find(e, a), !n || !n.content)
    throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = t1(n.content);
  if (a = "/EncryptedPackage", n = xe.find(e, a), !n || !n.content)
    throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u")
    return decrypt_agile(f[1], n.content, r.password || "", r);
  if (f[0] == 2 && typeof decrypt_std76 < "u")
    return decrypt_std76(f[1], n.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function pg(e, t) {
  return t.bookType == "ods" ? pc(e, t) : t.bookType == "numbers" ? lg(e, t) : t.bookType == "xlsb" ? mg(e, t) : gc(e, t);
}
function mg(e, t) {
  ta = 1024, e && !e.SSF && (e.SSF = Me(de)), e && e.SSF && (la(), $a(e.SSF), t.revssf = A0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ca ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", a = Uf.indexOf(t.bookType) > -1, n = bn();
  Yn(t = t || {});
  var i = pn(), s = "", f = 0;
  if (t.cellXfs = [], Dt(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ke(i, s, ef(e.Props, t)), n.coreprops.push(s), Ne(t.rels, 2, s, Fe.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var c = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && c.push(e.SheetNames[o]);
      e.Props.SheetNames = c;
    }
  for (e.Props.Worksheets = e.Props.SheetNames.length, ke(i, s, af(e.Props)), n.extprops.push(s), Ne(t.rels, 3, s, Fe.EXT_PROPS), e.Custprops !== e.Props && Ye(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ke(i, s, nf(e.Custprops)), n.custprops.push(s), Ne(t.rels, 4, s, Fe.CUST_PROPS)), f = 1; f <= e.SheetNames.length; ++f) {
    var l = { "!id": {} }, u = e.Sheets[e.SheetNames[f - 1]], x = (u || {})["!type"] || "sheet";
    switch (x) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ke(i, s, Zp(f - 1, s, t, e, l)), n.sheets.push(s), Ne(t.wbrels, -1, "worksheets/sheet" + f + "." + r, Fe.WS[0]);
    }
    if (u) {
      var d = u["!comments"], v = !1, h = "";
      d && d.length > 0 && (h = "xl/comments" + f + "." + r, ke(i, h, em(d, h)), n.comments.push(h), Ne(l, -1, "../comments" + f + "." + r, Fe.CMNT), v = !0), u["!legacy"] && v && ke(i, "xl/drawings/vmlDrawing" + f + ".vml", Bf(f, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    l["!id"].rId1 && ke(i, Ba(s), na(l));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ke(i, s, Qp(t.Strings, s, t)), n.strs.push(s), Ne(t.wbrels, -1, "sharedStrings." + r, Fe.SST)), s = "xl/workbook." + r, ke(i, s, Jp(e, s)), n.workbooks.push(s), Ne(t.rels, 1, s, Fe.WB), s = "xl/theme/theme1.xml", ke(i, s, Wn(e.Themes, t)), n.themes.push(s), Ne(t.wbrels, -1, "theme/theme1.xml", Fe.THEME), s = "xl/styles." + r, ke(i, s, qp(e, s, t)), n.styles.push(s), Ne(t.wbrels, -1, "styles." + r, Fe.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", ke(i, s, e.vbaraw), n.vba.push(s), Ne(t.wbrels, -1, "vbaProject.bin", Fe.VBA)), s = "xl/metadata." + r, ke(i, s, rm(s)), n.metadata.push(s), Ne(t.wbrels, -1, "metadata." + r, Fe.XLMETA), ke(i, "[Content_Types].xml", Zs(n, t)), ke(i, "_rels/.rels", na(t.rels)), ke(i, "xl/_rels/workbook." + r + ".rels", na(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function gc(e, t) {
  ta = 1024, e && !e.SSF && (e.SSF = Me(de)), e && e.SSF && (la(), $a(e.SSF), t.revssf = A0(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Ca ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", a = Uf.indexOf(t.bookType) > -1, n = bn();
  Yn(t = t || {});
  var i = pn(), s = "", f = 0;
  if (t.cellXfs = [], Dt(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ke(i, s, ef(e.Props, t)), n.coreprops.push(s), Ne(t.rels, 2, s, Fe.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var c = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && c.push(e.SheetNames[o]);
      e.Props.SheetNames = c;
    }
  e.Props.Worksheets = e.Props.SheetNames.length, ke(i, s, af(e.Props)), n.extprops.push(s), Ne(t.rels, 3, s, Fe.EXT_PROPS), e.Custprops !== e.Props && Ye(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ke(i, s, nf(e.Custprops)), n.custprops.push(s), Ne(t.rels, 4, s, Fe.CUST_PROPS));
  var l = ["SheetJ5"];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var u = { "!id": {} }, x = e.Sheets[e.SheetNames[f - 1]], d = (x || {})["!type"] || "sheet";
    switch (d) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ke(i, s, Jf(f - 1, t, e, u)), n.sheets.push(s), Ne(t.wbrels, -1, "worksheets/sheet" + f + "." + r, Fe.WS[0]);
    }
    if (x) {
      var v = x["!comments"], h = !1, p = "";
      if (v && v.length > 0) {
        var w = !1;
        v.forEach(function(y) {
          y[1].forEach(function(g) {
            g.T == !0 && (w = !0);
          });
        }), w && (p = "xl/threadedComments/threadedComment" + f + "." + r, ke(i, p, Ox(v, l, t)), n.threadedcomments.push(p), Ne(u, -1, "../threadedComments/threadedComment" + f + "." + r, Fe.TCMNT)), p = "xl/comments" + f + "." + r, ke(i, p, Mf(v)), n.comments.push(p), Ne(u, -1, "../comments" + f + "." + r, Fe.CMNT), h = !0;
      }
      x["!legacy"] && h && ke(i, "xl/drawings/vmlDrawing" + f + ".vml", Bf(f, x["!comments"])), delete x["!comments"], delete x["!legacy"];
    }
    u["!id"].rId1 && ke(i, Ba(s), na(u));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ke(i, s, Ff(t.Strings, t)), n.strs.push(s), Ne(t.wbrels, -1, "sharedStrings." + r, Fe.SST)), s = "xl/workbook." + r, ke(i, s, tc(e)), n.workbooks.push(s), Ne(t.rels, 1, s, Fe.WB), s = "xl/theme/theme1.xml", ke(i, s, Wn(e.Themes, t)), n.themes.push(s), Ne(t.wbrels, -1, "theme/theme1.xml", Fe.THEME), s = "xl/styles." + r, ke(i, s, Nf(e, t)), n.styles.push(s), Ne(t.wbrels, -1, "styles." + r, Fe.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", ke(i, s, e.vbaraw), n.vba.push(s), Ne(t.wbrels, -1, "vbaProject.bin", Fe.VBA)), s = "xl/metadata." + r, ke(i, s, Lf()), n.metadata.push(s), Ne(t.wbrels, -1, "metadata." + r, Fe.XLMETA), l.length > 1 && (s = "xl/persons/person.xml", ke(i, s, Rx(l)), n.people.push(s), Ne(t.wbrels, -1, "persons/person.xml", Fe.PEOPLE)), ke(i, "[Content_Types].xml", Zs(n, t)), ke(i, "_rels/.rels", na(t.rels)), ke(i, "xl/_rels/workbook." + r + ".rels", na(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function Jn(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = br(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function gg(e, t) {
  return xe.find(e, "EncryptedPackage") ? vg(e, t) : sc(e, t);
}
function _g(e, t) {
  var r, a = e, n = t || {};
  return n.type || (n.type = Te && Buffer.isBuffer(e) ? "buffer" : "base64"), r = Os(a, n), dg(r, n);
}
function _c(e, t) {
  var r = 0;
  e:
    for (; r < e.length; )
      switch (e.charCodeAt(r)) {
        case 10:
        case 13:
        case 32:
          ++r;
          break;
        case 60:
          return fn(e.slice(r), t);
        default:
          break e;
      }
  return ca.to_workbook(e, t);
}
function wg(e, t) {
  var r = "", a = Jn(e, t);
  switch (t.type) {
    case "base64":
      r = br(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = Ut(e);
      break;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (r = Le(r)), t.type = "binary", _c(r, t);
}
function kg(e, t) {
  var r = e;
  return t.type == "base64" && (r = br(r)), r = De.utils.decode(1200, r.slice(2), "str"), t.type = "binary", _c(r, t);
}
function Eg(e) {
  return e.match(/[^\x00-\x7F]/) ? tt(e) : e;
}
function J0(e, t, r, a) {
  return a ? (r.type = "string", ca.to_workbook(e, r)) : ca.to_workbook(t, r);
}
function ln(e, t) {
  F0();
  var r = t || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer)
    return ln(new Uint8Array(e), (r = Me(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = !1;
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), sa = {}, r.dateNF && (sa.dateNF = r.dateNF), r.type || (r.type = Te && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = Te ? "buffer" : "binary", a = To(e), typeof Uint8Array < "u" && !Te && (r.type = "array")), r.type == "string" && (i = !0, r.type = "binary", r.codepage = 65001, a = Eg(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo)
      return r = Me(r), r.type = "array", ln(hn(a), r);
  }
  switch ((n = Jn(a, r))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225)
        return gg(xe.read(a, r), r);
      break;
    case 9:
      if (n[1] <= 8)
        return sc(a, r);
      break;
    case 60:
      return fn(a, r);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0)
        throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68)
        return Nh(a, r);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76)
        return Tf.to_workbook(a, r);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? _g(a, r) : J0(e, a, r, i);
    case 239:
      return n[3] === 60 ? fn(a, r) : J0(e, a, r, i);
    case 255:
      if (n[1] === 254)
        return kg(a, r);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0)
        return Pt.to_workbook(a, r);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9)))
        return Pt.to_workbook(a, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return sn.to_workbook(a, r);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116)
        return Of.to_workbook(a, r);
      break;
    case 10:
    case 13:
    case 32:
      return wg(a, r);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71)
        throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return Rh.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? sn.to_workbook(a, r) : J0(e, a, r, i);
}
function Hg(e, t) {
  var r = t || {};
  return r.type = "file", ln(e, r);
}
function wc(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return Ka(t.file, xe.write(e, { type: Te ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return xe.write(e, t);
}
function Tg(e, t) {
  var r = Me(t || {}), a = pg(e, r);
  return kc(a, r);
}
function Sg(e, t) {
  var r = Me(t || {}), a = gc(e, r);
  return kc(a, r);
}
function kc(e, t) {
  var r = {}, a = Te ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password)
    r.type = a;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = a;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var n = e.FullPaths ? xe.write(e, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[r.type] || r.type, compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof n == "string") {
    if (t.type == "binary" || t.type == "base64")
      return n;
    n = new Uint8Array(za(n));
  }
  return t.password && typeof encrypt_agile < "u" ? wc(encrypt_agile(n, t.password), t) : t.type === "file" ? Ka(t.file, n) : t.type == "string" ? Le(n) : n;
}
function Fg(e, t) {
  var r = t || {}, a = Am(e, r);
  return wc(a, r);
}
function rt(e, t, r) {
  r || (r = "");
  var a = r + e;
  switch (t.type) {
    case "base64":
      return Ra(tt(a));
    case "binary":
      return tt(a);
    case "string":
      return e;
    case "file":
      return Ka(t.file, a, "utf8");
    case "buffer":
      return Te ? xt(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : rt(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function yg(e, t) {
  switch (t.type) {
    case "base64":
      return Ra(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return Ka(t.file, e, "binary");
    case "buffer":
      return Te ? xt(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function l0(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", a = 0; a < e.length; ++a)
        r += String.fromCharCode(e[a]);
      return t.type == "base64" ? Ra(r) : t.type == "string" ? Le(r) : r;
    case "file":
      return Ka(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Ec(e, t) {
  F0(), rc(e);
  var r = Me(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var a = Ec(e, r);
    return r.type = "array", za(a);
  }
  return Sg(e, r);
}
function Zn(e, t) {
  F0(), rc(e);
  var r = Me(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var a = Zn(e, r);
    return r.type = "array", za(a);
  }
  var n = 0;
  if (r.sheet && (typeof r.sheet == "number" ? n = r.sheet : n = e.SheetNames.indexOf(r.sheet), !e.SheetNames[n]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return rt(wm(e, r), r);
    case "slk":
    case "sylk":
      return rt(Ef.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "htm":
    case "html":
      return rt(hc(e.Sheets[e.SheetNames[n]], r), r);
    case "txt":
      return yg(Fc(e.Sheets[e.SheetNames[n]], r), r);
    case "csv":
      return rt(Qn(e.Sheets[e.SheetNames[n]], r), r, "\uFEFF");
    case "dif":
      return rt(Tf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "dbf":
      return l0(sn.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "prn":
      return rt(ca.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "rtf":
      return rt(Of.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "eth":
      return rt(Sf.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "fods":
      return rt(pc(e, r), r);
    case "wk1":
      return l0(Pt.sheet_to_wk1(e.Sheets[e.SheetNames[n]], r), r);
    case "wk3":
      return l0(Pt.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), l0(fc(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), Fg(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return Tg(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function qn(e) {
  if (!e.bookType) {
    var t = {
      xls: "biff8",
      htm: "html",
      slk: "sylk",
      socialcalc: "eth",
      Sh33tJS: "WTF"
    }, r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = t[e.bookType] || e.bookType;
  }
}
function Vg(e, t, r) {
  var a = r || {};
  return a.type = "file", a.file = t, qn(a), Zn(e, a);
}
function Xg(e, t, r) {
  var a = r || {};
  return a.type = "file", a.file = t, qn(a), Ec(e, a);
}
function Gg(e, t, r, a) {
  var n = r || {};
  n.type = "file", n.file = e, qn(n), n.type = "buffer";
  var i = a;
  return i instanceof Function || (i = r), Et.writeFile(e, Zn(t, n), i);
}
function Tc(e, t, r, a, n, i, s, f) {
  var c = Ke(r), o = f.defval, l = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw"), u = !0, x = n === 1 ? [] : {};
  if (n !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(x, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        x.__rowNum__ = r;
      }
    else
      x.__rowNum__ = r;
  if (!s || e[r])
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var v = s ? e[r][d] : e[a[d] + c];
      if (v === void 0 || v.t === void 0) {
        if (o === void 0)
          continue;
        i[d] != null && (x[i[d]] = o);
        continue;
      }
      var h = v.v;
      switch (v.t) {
        case "z":
          if (h == null)
            break;
          continue;
        case "e":
          h = h == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + v.t);
      }
      if (i[d] != null) {
        if (h == null)
          if (v.t == "e" && h === null)
            x[i[d]] = null;
          else if (o !== void 0)
            x[i[d]] = o;
          else if (l && h === null)
            x[i[d]] = null;
          else
            continue;
        else
          x[i[d]] = l && (v.t !== "n" || v.t === "n" && f.rawNumbers !== !1) ? h : nt(v, h, f);
        h != null && (u = !1);
      }
    }
  return { row: x, isempty: u };
}
function T0(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, o = t || {}, l = o.range != null ? o.range : e["!ref"];
  switch (o.header === 1 ? a = 1 : o.header === "A" ? a = 2 : Array.isArray(o.header) ? a = 3 : o.header == null && (a = 0), typeof l) {
    case "string":
      c = Ae(l);
      break;
    case "number":
      c = Ae(e["!ref"]), c.s.r = l;
      break;
    default:
      c = l;
  }
  a > 0 && (n = 0);
  var u = Ke(c.s.r), x = [], d = [], v = 0, h = 0, p = Array.isArray(e), w = c.s.r, y = 0, g = {};
  p && !e[w] && (e[w] = []);
  var D = o.skipHidden && e["!cols"] || [], b = o.skipHidden && e["!rows"] || [];
  for (y = c.s.c; y <= c.e.c; ++y)
    if (!(D[y] || {}).hidden)
      switch (x[y] = He(y), r = p ? e[w][y] : e[x[y] + u], a) {
        case 1:
          i[y] = y - c.s.c;
          break;
        case 2:
          i[y] = x[y];
          break;
        case 3:
          i[y] = o.header[y - c.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), f = s = nt(r, null, o), h = g[s] || 0, !h)
            g[s] = 1;
          else {
            do
              f = s + "_" + h++;
            while (g[f]);
            g[s] = h, g[f] = 1;
          }
          i[y] = f;
      }
  for (w = c.s.r + n; w <= c.e.r; ++w)
    if (!(b[w] || {}).hidden) {
      var N = Tc(e, c, w, x, a, i, p, o);
      (N.isempty === !1 || (a === 1 ? o.blankrows !== !1 : !!o.blankrows)) && (d[v++] = N.row);
    }
  return d.length = v, d;
}
var hs = /"/g;
function Sc(e, t, r, a, n, i, s, f) {
  for (var c = !0, o = [], l = "", u = Ke(r), x = t.s.c; x <= t.e.c; ++x)
    if (!!a[x]) {
      var d = f.dense ? (e[r] || [])[x] : e[a[x] + u];
      if (d == null)
        l = "";
      else if (d.v != null) {
        c = !1, l = "" + (f.rawNumbers && d.t == "n" ? d.v : nt(d, null, f));
        for (var v = 0, h = 0; v !== l.length; ++v)
          if ((h = l.charCodeAt(v)) === n || h === i || h === 34 || f.forceQuotes) {
            l = '"' + l.replace(hs, '""') + '"';
            break;
          }
        l == "ID" && (l = '"ID"');
      } else
        d.f != null && !d.F ? (c = !1, l = "=" + d.f, l.indexOf(",") >= 0 && (l = '"' + l.replace(hs, '""') + '"')) : l = "";
      o.push(l);
    }
  return f.blankrows === !1 && c ? null : o.join(s);
}
function Qn(e, t) {
  var r = [], a = t == null ? {} : t;
  if (e == null || e["!ref"] == null)
    return "";
  var n = Ae(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), o = new RegExp((i == "|" ? "\\|" : i) + "+$"), l = "", u = [];
  a.dense = Array.isArray(e);
  for (var x = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], v = n.s.c; v <= n.e.c; ++v)
    (x[v] || {}).hidden || (u[v] = He(v));
  for (var h = 0, p = n.s.r; p <= n.e.r; ++p)
    (d[p] || {}).hidden || (l = Sc(e, n, p, u, s, c, i, a), l != null && (a.strip && (l = l.replace(o, "")), (l || a.blankrows !== !1) && r.push((h++ ? f : "") + l)));
  return delete a.dense, r.join("");
}
function Fc(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = Qn(e, t);
  if (typeof De > "u" || t.type == "string")
    return r;
  var a = De.utils.encode(1200, r, "str");
  return String.fromCharCode(255) + String.fromCharCode(254) + a;
}
function Ag(e) {
  var t = "", r, a = "";
  if (e == null || e["!ref"] == null)
    return [];
  var n = Ae(e["!ref"]), i = "", s = [], f, c = [], o = Array.isArray(e);
  for (f = n.s.c; f <= n.e.c; ++f)
    s[f] = He(f);
  for (var l = n.s.r; l <= n.e.r; ++l)
    for (i = Ke(l), f = n.s.c; f <= n.e.c; ++f)
      if (t = s[f] + i, r = o ? (e[l] || [])[f] : e[t], a = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          a = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          a = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            a = "" + r.v;
          else if (r.t == "b")
            a = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            a = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? a = "'" + r.v : a = "" + r.v;
          }
        }
        c[c.length] = t + "=" + a;
      }
  return c;
}
function yc(e, t, r) {
  var a = r || {}, n = +!a.skipHeader, i = e || {}, s = 0, f = 0;
  if (i && a.origin != null)
    if (typeof a.origin == "number")
      s = a.origin;
    else {
      var c = typeof a.origin == "string" ? ze(a.origin) : a.origin;
      s = c.r, f = c.c;
    }
  var o, l = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + n } };
  if (i["!ref"]) {
    var u = Ae(i["!ref"]);
    l.e.c = Math.max(l.e.c, u.e.c), l.e.r = Math.max(l.e.r, u.e.r), s == -1 && (s = u.e.r + 1, l.e.r = s + t.length - 1 + n);
  } else
    s == -1 && (s = 0, l.e.r = t.length - 1 + n);
  var x = a.header || [], d = 0;
  t.forEach(function(h, p) {
    Ye(h).forEach(function(w) {
      (d = x.indexOf(w)) == -1 && (x[d = x.length] = w);
      var y = h[w], g = "z", D = "", b = pe({ c: f + d, r: s + p + n });
      o = Ga(i, b), y && typeof y == "object" && !(y instanceof Date) ? i[b] = y : (typeof y == "number" ? g = "n" : typeof y == "boolean" ? g = "b" : typeof y == "string" ? g = "s" : y instanceof Date ? (g = "d", a.cellDates || (g = "n", y = ir(y)), D = a.dateNF || de[14]) : y === null && a.nullError && (g = "e", y = 0), o ? (o.t = g, o.v = y, delete o.w, delete o.R, D && (o.z = D)) : i[b] = o = { t: g, v: y }, D && (o.z = D));
    });
  }), l.e.c = Math.max(l.e.c, f + x.length - 1);
  var v = Ke(s);
  if (n)
    for (d = 0; d < x.length; ++d)
      i[He(d + f) + v] = { t: "s", v: x[d] };
  return i["!ref"] = we(l), i;
}
function Cg(e, t) {
  return yc(null, e, t);
}
function Ga(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var a = ze(t);
      return e[a.r] || (e[a.r] = []), e[a.r][a.c] || (e[a.r][a.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? Ga(e, pe(t)) : Ga(e, pe({ r: t, c: r || 0 }));
}
function Dg(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function ei() {
  return { SheetNames: [], Sheets: {} };
}
function ri(e, t, r, a) {
  var n = 1;
  if (!r)
    for (; n <= 65535 && e.SheetNames.indexOf(r = "Sheet" + n) != -1; ++n, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    n = i && +i[2] || 0;
    var s = i && i[1] || r;
    for (++n; n <= 65535 && e.SheetNames.indexOf(r = s + n) != -1; ++n)
      ;
  }
  if (ec(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function Og(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = Dg(e, t);
  switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[a].Hidden = r;
}
function Ig(e, t) {
  return e.z = t, e;
}
function Ac(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function Rg(e, t, r) {
  return Ac(e, "#" + t, r);
}
function Ng(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function bg(e, t, r, a) {
  for (var n = typeof t != "string" ? t : Ae(t), i = typeof t == "string" ? t : we(t), s = n.s.r; s <= n.e.r; ++s)
    for (var f = n.s.c; f <= n.e.c; ++f) {
      var c = Ga(e, s, f);
      c.t = "n", c.F = i, delete c.v, s == n.s.r && f == n.s.c && (c.f = r, a && (c.D = !0));
    }
  return e;
}
var zg = {
  encode_col: He,
  encode_row: Ke,
  encode_cell: pe,
  encode_range: we,
  decode_col: Cn,
  decode_row: An,
  split_cell: el,
  decode_cell: ze,
  decode_range: yr,
  format_cell: nt,
  sheet_add_aoa: Gs,
  sheet_add_json: yc,
  sheet_add_dom: xc,
  aoa_to_sheet: ha,
  json_to_sheet: Cg,
  table_to_sheet: dc,
  table_to_book: zm,
  sheet_to_csv: Qn,
  sheet_to_txt: Fc,
  sheet_to_json: T0,
  sheet_to_html: hc,
  sheet_to_formulae: Ag,
  sheet_to_row_object_array: T0,
  sheet_get_cell: Ga,
  book_new: ei,
  book_append_sheet: ri,
  book_set_sheet_visibility: Og,
  cell_set_number_format: Ig,
  cell_set_hyperlink: Ac,
  cell_set_internal_link: Rg,
  cell_add_comment: Ng,
  sheet_set_array_formula: bg,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
}, b0;
function Pg(e) {
  b0 = e;
}
function Lg(e, t) {
  var r = b0(), a = t == null ? {} : t;
  if (e == null || e["!ref"] == null)
    return r.push(null), r;
  var n = Ae(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), o = new RegExp((i == "|" ? "\\|" : i) + "+$"), l = "", u = [];
  a.dense = Array.isArray(e);
  for (var x = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], v = n.s.c; v <= n.e.c; ++v)
    (x[v] || {}).hidden || (u[v] = He(v));
  var h = n.s.r, p = !1, w = 0;
  return r._read = function() {
    if (!p)
      return p = !0, r.push("\uFEFF");
    for (; h <= n.e.r; )
      if (++h, !(d[h - 1] || {}).hidden && (l = Sc(e, n, h - 1, u, s, c, i, a), l != null && (a.strip && (l = l.replace(o, "")), l || a.blankrows !== !1)))
        return r.push((w++ ? f : "") + l);
    return r.push(null);
  }, r;
}
function Bg(e, t) {
  var r = b0(), a = t || {}, n = a.header != null ? a.header : oc, i = a.footer != null ? a.footer : lc;
  r.push(n);
  var s = yr(e["!ref"]);
  a.dense = Array.isArray(e), r.push(uc(e, s, a));
  var f = s.s.r, c = !1;
  return r._read = function() {
    if (f > s.e.r)
      return c || (c = !0, r.push("</table>" + i)), r.push(null);
    for (; f <= s.e.r; ) {
      r.push(cc(e, s, f, a)), ++f;
      break;
    }
  }, r;
}
function Mg(e, t) {
  var r = b0({ objectMode: !0 });
  if (e == null || e["!ref"] == null)
    return r.push(null), r;
  var a = { t: "n", v: 0 }, n = 0, i = 1, s = [], f = 0, c = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = t || {}, u = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? n = 1 : l.header === "A" ? n = 2 : Array.isArray(l.header) && (n = 3), typeof u) {
    case "string":
      o = Ae(u);
      break;
    case "number":
      o = Ae(e["!ref"]), o.s.r = u;
      break;
    default:
      o = u;
  }
  n > 0 && (i = 0);
  var x = Ke(o.s.r), d = [], v = 0, h = Array.isArray(e), p = o.s.r, w = 0, y = {};
  h && !e[p] && (e[p] = []);
  var g = l.skipHidden && e["!cols"] || [], D = l.skipHidden && e["!rows"] || [];
  for (w = o.s.c; w <= o.e.c; ++w)
    if (!(g[w] || {}).hidden)
      switch (d[w] = He(w), a = h ? e[p][w] : e[d[w] + x], n) {
        case 1:
          s[w] = w - o.s.c;
          break;
        case 2:
          s[w] = d[w];
          break;
        case 3:
          s[w] = l.header[w - o.s.c];
          break;
        default:
          if (a == null && (a = { w: "__EMPTY", t: "s" }), c = f = nt(a, null, l), v = y[f] || 0, !v)
            y[f] = 1;
          else {
            do
              c = f + "_" + v++;
            while (y[c]);
            y[f] = v, y[c] = 1;
          }
          s[w] = c;
      }
  return p = o.s.r + i, r._read = function() {
    for (; p <= o.e.r; )
      if (!(D[p - 1] || {}).hidden) {
        var b = Tc(e, o, p, d, n, s, h, l);
        if (++p, b.isempty === !1 || (n === 1 ? l.blankrows !== !1 : !!l.blankrows)) {
          r.push(b.row);
          return;
        }
      }
    return r.push(null);
  }, r;
}
var $g = {
  to_json: Mg,
  to_html: Bg,
  to_csv: Lg,
  set_readable: Pg
};
const Kg = Ia.version;
export {
  xe as CFB,
  mo as SSF,
  sc as parse_xlscfb,
  dg as parse_zip,
  ln as read,
  Hg as readFile,
  Hg as readFileSync,
  Ug as set_cptable,
  Wg as set_fs,
  $g as stream,
  zg as utils,
  Kg as version,
  Zn as write,
  Vg as writeFile,
  Gg as writeFileAsync,
  Vg as writeFileSync,
  Xg as writeFileXLSX,
  Ec as writeXLSX
};
