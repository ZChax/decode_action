//Tue Nov 19 2024 15:56:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("爱海盐");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(aa) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ac) {
      return typeof ac;
    } : function (ac) {
      return ac && "function" == typeof Symbol && ac.constructor === Symbol && ac !== Symbol.prototype ? "symbol" : typeof ac;
    };
    return b(aa);
  }
  function c(aa, ab) {
    var ad = "undefined" != typeof Symbol && aa[Symbol.iterator] || aa["@@iterator"];
    if (!ad) {
      if (Array.isArray(aa) || (ad = d(aa)) || ab && aa && "number" == typeof aa.length) {
        ad && (aa = ad);
        var ae = 0,
          af = function () {};
        return {
          s: af,
          n: function () {
            var ak = {
              done: !0
            };
            return ae >= aa.length ? ak : {
              done: !1,
              value: aa[ae++]
            };
          },
          e: function (ak) {
            throw ak;
          },
          f: af
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ag,
      ah = !0,
      ai = !1;
    return {
      s: function () {
        ad = ad.call(aa);
      },
      n: function () {
        var al = ad.next();
        ah = al.done;
        return al;
      },
      e: function (al) {
        ai = !0;
        ag = al;
      },
      f: function () {
        try {
          ah || null == ad.return || ad.return();
        } finally {
          if (ai) {
            throw ag;
          }
        }
      }
    };
  }
  function d(aa, ab) {
    if (aa) {
      if ("string" == typeof aa) {
        return f(aa, ab);
      }
      var ad = {}.toString.call(aa).slice(8, -1);
      "Object" === ad && aa.constructor && (ad = aa.constructor.name);
      return "Map" === ad || "Set" === ad ? Array.from(aa) : "Arguments" === ad || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ad) ? f(aa, ab) : void 0;
    }
  }
  function f(aa, ab) {
    (null == ab || ab > aa.length) && (ab = aa.length);
    for (var ac = 0, ad = Array(ab); ac < ab; ac++) {
      ad[ac] = aa[ac];
    }
    return ad;
  }
  function g() {
    'use strict';

    g = function () {
      return ac;
    };
    var ab,
      ac = {},
      ad = Object.prototype,
      ae = ad.hasOwnProperty,
      af = Object.defineProperty || function (aH, aI, aJ) {
        aH[aI] = aJ.value;
      },
      ag = "function" == typeof Symbol ? Symbol : {},
      ah = ag.iterator || "@@iterator",
      ai = ag.asyncIterator || "@@asyncIterator",
      aj = ag.toStringTag || "@@toStringTag";
    function ak(aH, aI, aJ) {
      var aK = {
        value: aJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aH, aI, aK);
      return aH[aI];
    }
    try {
      ak({}, "");
    } catch (aI) {
      ak = function (aK, aL, aM) {
        return aK[aL] = aM;
      };
    }
    function al(aK, aL, aM, aN) {
      var aO = aL && aL.prototype instanceof as ? aL : as,
        aP = Object.create(aO.prototype),
        aQ = new aF(aN || []);
      af(aP, "_invoke", {
        value: aB(aK, aM, aQ)
      });
      return aP;
    }
    function am(aK, aL, aM) {
      try {
        return {
          type: "normal",
          arg: aK.call(aL, aM)
        };
      } catch (aR) {
        var aO = {};
        aO.type = "throw";
        aO.arg = aR;
        return aO;
      }
    }
    ac.wrap = al;
    var an = "suspendedStart",
      ao = "suspendedYield",
      ap = "executing",
      aq = "completed",
      ar = {};
    function as() {}
    function at() {}
    function au() {}
    var av = {};
    ak(av, ah, function () {
      return this;
    });
    var aw = Object.getPrototypeOf,
      ax = aw && aw(aw(aG([])));
    ax && ax !== ad && ae.call(ax, ah) && (av = ax);
    au.prototype = as.prototype = Object.create(av);
    var ay = au.prototype;
    function az(aK) {
      ["next", "throw", "return"].forEach(function (aN) {
        ak(aK, aN, function (aQ) {
          return this._invoke(aN, aQ);
        });
      });
    }
    function aA(aK, aL) {
      function aP(aQ, aR, aS, aT) {
        var aV = am(aK[aQ], aK, aR);
        if ("throw" !== aV.type) {
          var aW = aV.arg,
            aX = aW.value;
          return aX && "object" == b(aX) && ae.call(aX, "__await") ? aL.resolve(aX.__await).then(function (aZ) {
            aP("next", aZ, aS, aT);
          }, function (aZ) {
            aP("throw", aZ, aS, aT);
          }) : aL.resolve(aX).then(function (aZ) {
            aW.value = aZ;
            aS(aW);
          }, function (aZ) {
            return aP("throw", aZ, aS, aT);
          });
        }
        aT(aV.arg);
      }
      var aN;
      af(this, "_invoke", {
        value: function (aQ, aR) {
          function aT() {
            return new aL(function (aV, aW) {
              aP(aQ, aR, aV, aW);
            });
          }
          return aN = aN ? aN.then(aT, aT) : aT();
        }
      });
    }
    function aB(aK, aL, aM) {
      var aO = an;
      return function (aQ, aR) {
        if (aO === ap) {
          throw Error("Generator is already running");
        }
        if (aO === aq) {
          if ("throw" === aQ) {
            throw aR;
          }
          var aT = {
            value: ab,
            done: !0
          };
          return aT;
        }
        for (aM.method = aQ, aM.arg = aR;;) {
          var aU = aM.delegate;
          if (aU) {
            var aV = aC(aU, aM);
            if (aV) {
              if (aV === ar) {
                continue;
              }
              return aV;
            }
          }
          if ("next" === aM.method) {
            aM.sent = aM._sent = aM.arg;
          } else {
            if ("throw" === aM.method) {
              if (aO === an) {
                throw aO = aq, aM.arg;
              }
              aM.dispatchException(aM.arg);
            } else {
              "return" === aM.method && aM.abrupt("return", aM.arg);
            }
          }
          aO = ap;
          var aW = am(aK, aL, aM);
          if ("normal" === aW.type) {
            if (aO = aM.done ? aq : ao, aW.arg === ar) {
              continue;
            }
            var aX = {};
            aX.value = aW.arg;
            aX.done = aM.done;
            return aX;
          }
          "throw" === aW.type && (aO = aq, aM.method = "throw", aM.arg = aW.arg);
        }
      };
    }
    function aC(aK, aL) {
      var aP = aL.method,
        aQ = aK.iterator[aP];
      if (aQ === ab) {
        aL.delegate = null;
        "throw" === aP && aK.iterator.return && (aL.method = "return", aL.arg = ab, aC(aK, aL), "throw" === aL.method) || "return" !== aP && (aL.method = "throw", aL.arg = new TypeError("The iterator does not provide a '" + aP + "' method"));
        return ar;
      }
      var aS = am(aQ, aK.iterator, aL.arg);
      if ("throw" === aS.type) {
        aL.method = "throw";
        aL.arg = aS.arg;
        aL.delegate = null;
        return ar;
      }
      var aR = aS.arg;
      return aR ? aR.done ? (aL[aK.resultName] = aR.value, aL.next = aK.nextLoc, "return" !== aL.method && (aL.method = "next", aL.arg = ab), aL.delegate = null, ar) : aR : (aL.method = "throw", aL.arg = new TypeError("iterator result is not an object"), aL.delegate = null, ar);
    }
    function aD(aK) {
      var aM = {
        tryLoc: aK[0]
      };
      var aN = aM;
      1 in aK && (aN.catchLoc = aK[1]);
      2 in aK && (aN.finallyLoc = aK[2], aN.afterLoc = aK[3]);
      this.tryEntries.push(aN);
    }
    function aE(aK) {
      var aL = aK.completion || {};
      aL.type = "normal";
      delete aL.arg;
      aK.completion = aL;
    }
    function aF(aK) {
      var aL = {};
      aL.tryLoc = "root";
      this.tryEntries = [aL];
      aK.forEach(aD, this);
      this.reset(!0);
    }
    function aG(aK) {
      if (aK || "" === aK) {
        var aM = aK[ah];
        if (aM) {
          return aM.call(aK);
        }
        if ("function" == typeof aK.next) {
          return aK;
        }
        if (!isNaN(aK.length)) {
          var aN = -1,
            aO = function aQ() {
              for (; ++aN < aK.length;) {
                if (ae.call(aK, aN)) {
                  aQ.value = aK[aN];
                  aQ.done = !1;
                  return aQ;
                }
              }
              aQ.value = ab;
              aQ.done = !0;
              return aQ;
            };
          return aO.next = aO;
        }
      }
      throw new TypeError(b(aK) + " is not iterable");
    }
    at.prototype = au;
    af(ay, "constructor", {
      value: au,
      configurable: !0
    });
    af(au, "constructor", {
      value: at,
      configurable: !0
    });
    at.displayName = ak(au, aj, "GeneratorFunction");
    ac.isGeneratorFunction = function (aK) {
      var aL = "function" == typeof aK && aK.constructor;
      return !!aL && (aL === at || "GeneratorFunction" === (aL.displayName || aL.name));
    };
    ac.mark = function (aK) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aK, au) : (aK.__proto__ = au, ak(aK, aj, "GeneratorFunction"));
      aK.prototype = Object.create(ay);
      return aK;
    };
    ac.awrap = function (aK) {
      var aL = {
        __await: aK
      };
      return aL;
    };
    az(aA.prototype);
    ak(aA.prototype, ai, function () {
      return this;
    });
    ac.AsyncIterator = aA;
    ac.async = function (aK, aL, aM, aN, aO) {
      void 0 === aO && (aO = Promise);
      var aP = new aA(al(aK, aL, aM, aN), aO);
      return ac.isGeneratorFunction(aL) ? aP : aP.next().then(function (aR) {
        return aR.done ? aR.value : aP.next();
      });
    };
    az(ay);
    ak(ay, aj, "Generator");
    ak(ay, ah, function () {
      return this;
    });
    ak(ay, "toString", function () {
      return "[object Generator]";
    });
    ac.keys = function (aK) {
      var aM = Object(aK),
        aN = [];
      for (var aO in aM) aN.push(aO);
      aN.reverse();
      return function aP() {
        for (; aN.length;) {
          var aR = aN.pop();
          if (aR in aM) {
            aP.value = aR;
            aP.done = !1;
            return aP;
          }
        }
        aP.done = !0;
        return aP;
      };
    };
    ac.values = aG;
    aF.prototype = {
      constructor: aF,
      reset: function (aK) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ab, this.done = !1, this.delegate = null, this.method = "next", this.arg = ab, this.tryEntries.forEach(aE), !aK) {
          for (var aM in this) "t" === aM.charAt(0) && ae.call(this, aM) && !isNaN(+aM.slice(1)) && (this[aM] = ab);
        }
      },
      stop: function () {
        this.done = !0;
        var aK = this.tryEntries[0].completion;
        if ("throw" === aK.type) {
          throw aK.arg;
        }
        return this.rval;
      },
      dispatchException: function (aK) {
        if (this.done) {
          throw aK;
        }
        var aM = this;
        function aS(aT, aU) {
          aP.type = "throw";
          aP.arg = aK;
          aM.next = aT;
          aU && (aM.method = "next", aM.arg = ab);
          return !!aU;
        }
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN],
            aP = aO.completion;
          if ("root" === aO.tryLoc) {
            return aS("end");
          }
          if (aO.tryLoc <= this.prev) {
            var aQ = ae.call(aO, "catchLoc"),
              aR = ae.call(aO, "finallyLoc");
            if (aQ && aR) {
              if (this.prev < aO.catchLoc) {
                return aS(aO.catchLoc, !0);
              }
              if (this.prev < aO.finallyLoc) {
                return aS(aO.finallyLoc);
              }
            } else {
              if (aQ) {
                if (this.prev < aO.catchLoc) {
                  return aS(aO.catchLoc, !0);
                }
              } else {
                if (!aR) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aO.finallyLoc) {
                  return aS(aO.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aK, aL) {
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN];
          if (aO.tryLoc <= this.prev && ae.call(aO, "finallyLoc") && this.prev < aO.finallyLoc) {
            var aP = aO;
            break;
          }
        }
        aP && ("break" === aK || "continue" === aK) && aP.tryLoc <= aL && aL <= aP.finallyLoc && (aP = null);
        var aQ = aP ? aP.completion : {};
        aQ.type = aK;
        aQ.arg = aL;
        return aP ? (this.method = "next", this.next = aP.finallyLoc, ar) : this.complete(aQ);
      },
      complete: function (aK, aL) {
        if ("throw" === aK.type) {
          throw aK.arg;
        }
        "break" === aK.type || "continue" === aK.type ? this.next = aK.arg : "return" === aK.type ? (this.rval = this.arg = aK.arg, this.method = "return", this.next = "end") : "normal" === aK.type && aL && (this.next = aL);
        return ar;
      },
      finish: function (aK) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.finallyLoc === aK) {
            this.complete(aN.completion, aN.afterLoc);
            aE(aN);
            return ar;
          }
        }
      },
      catch: function (aK) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.tryLoc === aK) {
            var aO = aN.completion;
            if ("throw" === aO.type) {
              var aP = aO.arg;
              aE(aN);
            }
            return aP;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aK, aL, aM) {
        this.delegate = {
          iterator: aG(aK),
          resultName: aL,
          nextLoc: aM
        };
        "next" === this.method && (this.arg = ab);
        return ar;
      }
    };
    return ac;
  }
  function h(aa, ab, ac, ad, ae, af, ag) {
    try {
      var ah = aa[af](ag),
        ai = ah.value;
    } catch (al) {
      return void ac(al);
    }
    ah.done ? ab(ai) : Promise.resolve(ai).then(ad, ae);
  }
  function i(aa) {
    return function () {
      var ac = this,
        ad = arguments;
      return new Promise(function (ae, af) {
        var ah = aa.apply(ac, ad);
        function ai(ak) {
          h(ah, ae, af, ai, aj, "next", ak);
        }
        function aj(ak) {
          h(ah, ae, af, ai, aj, "throw", ak);
        }
        ai(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.AiHaiYan : $.getdata("AiHaiYan")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "60",
    v = "10018",
    w = "FR*r!isE5W",
    x = "0be39bb836a0d86aa76761af779aa93e",
    y = "",
    z = "",
    A = "",
    B = "";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function ab() {
      var ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh, bi;
      return g().wrap(function (bj) {
        for (;;) {
          switch (bj.prev = bj.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bj.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bj.next = 5;
              return a8("先去boxjs填写账号密码");
            case 5:
              return bj.abrupt("return");
            case 6:
              bj.next = 8;
              return a6();
            case 8:
              l = bj.sent;
              ad = j.split(" ");
              af = c(ad);
              bj.prev = 11;
              af.s();
            case 13:
              if ((ag = af.n()).done) {
                bj.next = 259;
                break;
              }
              ah = ag.value;
              console.log("随机生成UA");
              ai = a2();
              s = ai.ua;
              t = ai.commonUa;
              console.log(s);
              console.log(t);
              q = ah.split("&")[0];
              r = ah.split("&")[1];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bj.next = 27;
              return L("/api/account/init");
            case 27:
              aj = bj.sent;
              o = aj.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bj.next = 33;
              return F("/web/init?client_id=".concat(v));
            case 33:
              ak = bj.sent;
              m = ak.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bj.next = 39;
              return H("/web/oauth/credential_auth");
            case 39:
              if (al = bj.sent, al.data) {
                bj.next = 43;
                break;
              }
              console.log(al.message);
              return bj.abrupt("continue", 257);
            case 43:
              am = al.data.authorization_code.code;
              console.log(am);
              console.log("登录");
              bj.next = 48;
              return L("/api/zbtxz/login", "check_token=&code=".concat(am, "&token=&type=-1&union_id="));
            case 48:
              if (an = bj.sent, console.log("登录成功"), p = an.data.session.account_id, o = an.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), y) {
                bj.next = 65;
                break;
              }
              bj.next = 58;
              return J("/api/buoy/list");
            case 58:
              for (ao = bj.sent, ap = decodeURIComponent(ao.data.new_up.icon_list[0].turn_to.url), aq = ap.split("?")[1], ar = {}, as = aq.split("&"), at = 0, au = as.length; at < au; at++) {
                av = as[at].split("=");
                ar[av[0]] = av[1];
              }
              y = ar.id;
            case 65:
              if (y) {
                bj.next = 68;
                break;
              }
              console.log("获取id失败");
              return bj.abrupt("continue", 257);
            case 68:
              console.log(y);
              console.log("获取apiDt");
              bj.next = 72;
              return N("/aosbase/_auth_dt");
            case 72:
              aw = bj.sent;
              z = aw.data.substring(32, 68);
              console.log(z);
              A = "0";
              ax = {
                app_user_token: o,
                appid: "haiyan",
                noncestr: a5(6, !1),
                phone: q,
                portrait_url: an.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: an.data.account.id,
                user_name: an.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              ax.signature = l.md5(a3(ax) + "&appkey=".concat(x));
              bj.next = 80;
              return R("/aosbase/_auth_appuserinit", ax);
            case 80:
              ay = bj.sent;
              B = ay.data.access_token;
              A = ay.data.data.user_id;
              console.log("阅读token：".concat(B));
              az = "";
              aA = Date.now() + "" + Math.floor(10000000 * Math.random());
              bj.next = 88;
              return P("/aoslearnfoot/_optionp_list?activity_id=".concat(y));
            case 88:
              aB = bj.sent;
              aC = c(aB.data);
              bj.prev = 90;
              aC.s();
            case 92:
              if ((aD = aC.n()).done) {
                bj.next = 179;
                break;
              }
              aE = aD.value;
              aF = aE.id;
              console.log(aE.title);
              bj.next = 98;
              return P("/aoslearnfoot/optionp_detail?id=".concat(aE.id));
            case 98:
              if (aG = bj.sent, aG.data.task_num != aG.data.user_done_num) {
                bj.next = 102;
                break;
              }
              console.log("已完成");
              return bj.abrupt("continue", 177);
            case 102:
              if (az) {
                bj.next = 143;
                break;
              }
              console.log("获取滑块token");
              aH = 0;
            case 105:
              if (!(aH < 3)) {
                bj.next = 143;
                break;
              }
              aI = a5(10, !1);
              aJ = Math.round(new Date().getTime() / 1000).toString();
              aK = "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aF);
              aL = a0({
                once: aI,
                referer: aK,
                timestamp: aJ,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bj.next = 112;
              return P("/basemodule/_captcha_get?once=".concat(aI, "&referer=").concat(aK, "&timestamp=").concat(aJ, "&type=1&signature=").concat(encodeURIComponent(aL)));
            case 112:
              aM = bj.sent;
              console.log("滑块：".concat(aM.data.block));
              console.log("背景：".concat(aM.data.background));
              bj.next = 117;
              return U({
                slidingImage: aM.data.block,
                backImage: aM.data.background
              });
            case 117:
              if (aN = bj.sent, aN) {
                bj.next = 123;
                break;
              }
              console.log("ddddocr服务异常");
              bj.next = 122;
              return a8("ddddocr服务异常");
            case 122:
              return bj.abrupt("continue", 140);
            case 123:
              console.log(aN);
              aO = aN.result;
              aP = a0({
                x: aO,
                width: 384,
                track: [{
                  x: Math.floor(aO / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aO / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aO / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aO / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aO / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aO,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bj.next = 129;
              return R("/basemodule/_captcha_check", {
                token: aM.data.token,
                data: aP,
                referer: aK,
                type: aM.data.type
              });
            case 129:
              if (aQ = bj.sent, !aQ.data.result) {
                bj.next = 139;
                break;
              }
              bj.next = 133;
              return R("/aosbasemodule/intelverifcode_check", {
                validate: aQ.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 133:
              aR = bj.sent;
              az = aR.data.tokenid;
              console.log("滑块token：".concat(az));
              return bj.abrupt("break", 143);
            case 139:
              console.log("验证失败");
            case 140:
              aH++;
              bj.next = 105;
              break;
            case 143:
              if (az) {
                bj.next = 145;
                break;
              }
              return bj.abrupt("break", 179);
            case 145:
              bj.next = 147;
              return P("/aosbasemodule/_task_list?offset=0&count=".concat(aE.task_num, "&module_id=").concat(aE.m_id, "&activity_id=").concat(aE.id));
            case 147:
              aS = bj.sent;
              aT = c(aS.data);
              bj.prev = 149;
              aT.s();
            case 151:
              if ((aU = aT.n()).done) {
                bj.next = 169;
                break;
              }
              if (aV = aU.value, console.log("文章：".concat(aV.title)), 1 != aV.user_done) {
                bj.next = 157;
                break;
              }
              console.log("已完成");
              return bj.abrupt("continue", 167);
            case 157:
              var bl = {};
              bl.task_id = aV.id;
              bj.next = 159;
              return R("/aosbasemodule/task_create", bl);
            case 159:
              aW = bj.sent;
              bj.next = 162;
              return J("/api/article/detail?id=".concat(JSON.parse(aV.rule).news_id));
            case 162:
              var bm = {};
              bm.task_record_id = aW.data.task_record_id;
              bm.collect_info = "";
              bm.afs_tokenid = az;
              bm.device_token = aA;
              bj.sent;
              bj.next = 165;
              return R("/aosbasemodule/task_done", bm);
            case 165:
              aX = bj.sent;
              console.log("阅读：".concat(aX.msg));
            case 167:
              bj.next = 151;
              break;
            case 169:
              bj.next = 174;
              break;
            case 171:
              bj.prev = 171;
              bj.t0 = bj.catch(149);
              aT.e(bj.t0);
            case 174:
              bj.prev = 174;
              aT.f();
              return bj.finish(174);
            case 177:
              bj.next = 92;
              break;
            case 179:
              bj.next = 184;
              break;
            case 181:
              bj.prev = 181;
              bj.t1 = bj.catch(90);
              aC.e(bj.t1);
            case 184:
              bj.prev = 184;
              aC.f();
              return bj.finish(184);
            case 187:
              bj.next = 189;
              return P("/aoslearnfoot/_ac_detail?id=".concat(y));
            case 189:
              aY = bj.sent;
              aZ = JSON.parse(aY.data.other_set).lottery.id;
              bj.next = 193;
              return P("/aoslottery/ac_lottery_times?id=".concat(aZ));
            case 193:
              if (b0 = bj.sent, console.log("拥有".concat(b0.data.all_remain, "次抽奖")), !(b0.data.all_remain > 0)) {
                bj.next = 257;
                break;
              }
              console.log("获取抽奖滑块token");
              b1 = "";
              b2 = 0;
            case 199:
              if (!(b2 < 3)) {
                bj.next = 237;
                break;
              }
              b3 = a5(10, !1);
              b4 = Math.round(new Date().getTime() / 1000).toString();
              b5 = "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              b6 = a0({
                once: b3,
                referer: b5,
                timestamp: b4,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bj.next = 206;
              return P("/basemodule/_captcha_get?once=".concat(b3, "&referer=").concat(b5, "&timestamp=").concat(b4, "&type=1&signature=").concat(encodeURIComponent(b6)));
            case 206:
              b7 = bj.sent;
              console.log("滑块：".concat(b7.data.block));
              console.log("背景：".concat(b7.data.background));
              bj.next = 211;
              return U({
                slidingImage: b7.data.block,
                backImage: b7.data.background
              });
            case 211:
              if (b8 = bj.sent, b8) {
                bj.next = 217;
                break;
              }
              console.log("ddddocr服务异常");
              bj.next = 216;
              return a8("ddddocr服务异常");
            case 216:
              return bj.abrupt("continue", 234);
            case 217:
              console.log(b8);
              b9 = b8.result;
              ba = a0({
                x: b9,
                width: 384,
                track: [{
                  x: Math.floor(b9 / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b9 / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b9 / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(b9 / 4),
                  y: 0,
                  time: 100
                }, {
                  x: b9 / 2,
                  y: 0,
                  time: 100
                }, {
                  x: b9,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bj.next = 223;
              return R("/basemodule/_captcha_check", {
                token: b7.data.token,
                data: ba,
                referer: b5,
                type: b7.data.type
              });
            case 223:
              if (bb = bj.sent, !bb.data.result) {
                bj.next = 233;
                break;
              }
              bj.next = 227;
              return R("/aosbasemodule/intelverifcode_check", {
                validate: bb.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 227:
              bc = bj.sent;
              b1 = bc.data.tokenid;
              console.log("抽奖滑块token：".concat(b1));
              return bj.abrupt("break", 237);
            case 233:
              console.log("验证失败");
            case 234:
              b2++;
              bj.next = 199;
              break;
            case 237:
              if (b1) {
                bj.next = 239;
                break;
              }
              return bj.abrupt("continue", 257);
            case 239:
              bj.next = 241;
              return P("/aoslottery/_ac_detail?id=".concat(aZ));
            case 241:
              bd = bj.sent;
              be = 0;
            case 243:
              if (!(be < b0.data.all_remain)) {
                bj.next = 257;
                break;
              }
              bj.next = 246;
              return R("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: bd.data.m_id,
                content_id: bd.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: bd.data.title,
                device_token: aA,
                user_id: ay.data.data.user_id,
                user_name: ay.data.data.user_name,
                phone_num: q,
                page_path: "module-study/home/home",
                version: "1.0.0",
                network: "wifi",
                client_model: "android",
                system_version: "Android 11",
                resolution: "",
                baidu_longitude: "",
                baidu_latitude: "",
                longitude: 0,
                latitude: 0,
                province: "",
                city: "",
                area: "",
                street: "",
                address: ""
              });
            case 246:
              if (bf = bj.sent, console.log("抽奖提交：".concat(bf.msg)), 0 == bf.code) {
                bj.next = 250;
                break;
              }
              return bj.abrupt("continue", 254);
            case 250:
              var bn = {};
              bn.id = aZ;
              bn.verif_uuid = "";
              bn.verif_code = "";
              bn.afs_tokenid = b1;
              bn.collect_info = "";
              bn.longitude = 0;
              bn.latitude = 0;
              bn.device_token = aA;
              bj.next = 252;
              return R("/aoslottery/ac_sub", bn);
            case 252:
              bg = bj.sent;
              0 == bg.code ? (console.log("抽奖获得：".concat(null == bg || null === (bh = bg.data) || void 0 === bh ? void 0 : bh.title)), n += "用户：".concat(q, " 抽奖获得：").concat(null == bg || null === (bi = bg.data) || void 0 === bi ? void 0 : bi.title, "\n")) : "o d w" == bg.msg ? console.log("谢谢参与") : console.log(bg.msg);
            case 254:
              be++;
              bj.next = 243;
              break;
            case 257:
              bj.next = 13;
              break;
            case 259:
              bj.next = 264;
              break;
            case 261:
              bj.prev = 261;
              bj.t2 = bj.catch(11);
              af.e(bj.t2);
            case 264:
              bj.prev = 264;
              af.f();
              return bj.finish(264);
            case 267:
              if (!n) {
                bj.next = 270;
                break;
              }
              bj.next = 270;
              return a8(n);
            case 270:
            case "end":
              return bj.stop();
          }
        }
      }, ab, null, [[11, 261, 264, 267], [90, 181, 184, 187], [149, 171, 174, 177]]);
    }));
    return E.apply(this, arguments);
  }
  function F(aa) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ab(ac) {
      return g().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              return ad.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(ah, function () {
                  var ak = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : af(JSON.parse(ap));
                            } catch (au) {
                              $.logErr(au, ao);
                            } finally {
                              af();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am);
                  }));
                  return function (an, ao, ap) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ad.stop();
          }
        }
      }, ab);
    }));
    return G.apply(this, arguments);
  }
  function H(aa) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = W();
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": s
                };
                var ak = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: aj,
                  body: ae.body
                };
                $.post(ak, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(ap));
                            } catch (as) {
                              $.logErr(as, ao);
                            } finally {
                              ah();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return I.apply(this, arguments);
  }
  function J(aa) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function aa(ab) {
      var ad;
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              ad = X(ab);
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://vapp.tmuyun.com".concat(ab),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ad.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ad.uuid,
                    "X-SIGNATURE": ad.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !al) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            ag();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ae.stop();
          }
        }
      }, aa);
    }));
    return K.apply(this, arguments);
  }
  function L(aa, ab) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ab(ac, ad) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = X(ac);
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://vapp.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ae.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ae.uuid,
                    "X-SIGNATURE": ae.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ad
                };
                $.post(aj, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !am) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ao));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, an);
                          case 14:
                            ar.prev = 14;
                            ah();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return M.apply(this, arguments);
  }
  function N(aa) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "69",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !al) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            ag();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return O.apply(this, arguments);
  }
  function P(aa) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ab(ac) {
      return g().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              return ad.abrupt("return", new Promise(function (af) {
                var ag = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Y(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ag, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            af();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ad.stop();
          }
        }
      }, ab);
    }));
    return Q.apply(this, arguments);
  }
  function R(aa, ab) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Y(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ad)
                };
                $.post(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ag();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return T.apply(this, arguments);
  }
  function U(aa) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function aa(ab) {
      return g().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              return ad.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "".concat(k, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ab)
                };
                $.post(ag, function (ah, ai, aj) {
                  try {
                    ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(aj));
                  } catch (ak) {
                    $.logErr(ak, ai);
                  } finally {
                    ae();
                  }
                });
              }));
            case 1:
            case "end":
              return ad.stop();
          }
        }
      }, aa);
    }));
    return V.apply(this, arguments);
  }
  function W() {
    var ac = new (l.loadJSEncrypt())();
    ac.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ac.encrypt(r);
    var af = Z(),
      ag = "client_id=".concat(v, "&password=").concat(r, "&phone_number=").concat(q),
      ah = "post%%/web/oauth/credential_auth?".concat(ag, "%%").concat(af, "%%");
    ag = "client_id=".concat(v, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ad = CryptoJS.HmacSHA256(ah, m),
      ae = CryptoJS.enc.Hex.stringify(ad);
    var ai = {};
    ai.uuid = af;
    ai.signature = ae;
    ai.body = ag;
    return ai;
  }
  function X(aa) {
    var ab = Z(),
      ac = Date.now();
    aa.indexOf("?") > 0 && (aa = aa.substring(0, aa.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ad = CryptoJS.SHA256("".concat(aa, "&&").concat(o, "&&").concat(ab, "&&").concat(ac, "&&").concat(w, "&&").concat(u)).toString(),
      ae = {
        uuid: ab,
        time: ac,
        signature: ad
      };
    return ae;
  }
  function Y() {
    var aa = Date.now(),
      ab = a5(32, !1),
      ac = "haiyan".concat(ab).concat(aa, "2803cb8d50798c80b66ecd70da7e5fb1"),
      ad = l.md5(ac);
    return "haiyan;".concat(ab, ";").concat(aa, ";").concat(ad);
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ab) {
      var ac = 16 * Math.random() | 0,
        ad = "x" === ab ? ac : 3 & ac | 8;
      return ad.toString(16);
    });
  }
  function a0(aa, ab, ac) {
    var ad = l.createCryptoJS(),
      ae = ad.enc.Utf8.parse(ab),
      af = ad.enc.Utf8.parse(ac),
      ag = ad.enc.Utf8.parse(JSON.stringify(aa)),
      ah = ad.AES.encrypt(ag, ae, {
        iv: af,
        mode: ad.mode.CBC,
        padding: ad.pad.Pkcs7
      });
    return ad.enc.Base64.stringify(ah.ciphertext);
  }
  function a1(aa) {
    return aa[Math.floor(Math.random() * aa.length)];
  }
  function a2() {
    var aa = "3.0.61.0",
      ab = Z(),
      ac = a1(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ad = "Xiaomi " + ac,
      ae = "Android",
      af = "".concat(ae.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(aa, ";1.0;null;").concat(ac),
      ag = "".concat(aa, ";").concat(ab, ";").concat(ad, ";").concat(ae, ";").concat("11", ";Release;").concat("6.12.0"),
      ah = {
        ua: af,
        commonUa: ag
      };
    return ah;
  }
  function a3() {
    var aa = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ab = [];
    for (var ac in aa) {
      var ad = aa[ac];
      ab.push(ac + "=" + a4(ad));
    }
    return ab.length ? "" + ab.join("&") : "";
  }
  function a4(aa) {
    aa = (aa + "").toString();
    return encodeURIComponent(aa).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a5() {
    var aa = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ac = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ad = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      ae = [];
    if (ac = ac || ad.length, aa) {
      for (var af = 0; af < aa; af++) {
        ae[af] = ad[0 | Math.random() * ac];
      }
    } else {
      var ag;
      ae[8] = ae[13] = ae[18] = ae[23] = "-";
      ae[14] = "4";
      for (var ah = 0; ah < 36; ah++) {
        ae[ah] || (ag = 0 | 16 * Math.random(), ae[ah] = ad[19 == ah ? 3 & ag | 8 : ag]);
      }
    }
    return ab ? (ae.shift(), "u" + ae.join("")) : ae.join("");
  }
  function a6() {
    return a7.apply(this, arguments);
  }
  function a7() {
    a7 = i(g().mark(function ac() {
      var ae;
      return g().wrap(function af(ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (ae = $.getdata("Utils_Code") || "", !ae || !Object.keys(ae).length) {
                ag.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ae);
              return ag.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ag.abrupt("return", new Promise(function () {
                var ai = i(g().mark(function aj(ak) {
                  return g().wrap(function al(am) {
                    for (;;) {
                      switch (am.prev = am.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ao) {
                            $.setdata(ao, "Utils_Code");
                            eval(ao);
                            console.log("✅ Utils加载成功, 请继续");
                            ak(creatUtils());
                          });
                        case 1:
                        case "end":
                          return am.stop();
                      }
                    }
                  }, aj);
                }));
                return function (ak) {
                  return ai.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return a7.apply(this, arguments);
  }
  function a8(aa) {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function aa(ab) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              if (!$.isNode()) {
                ae.next = 5;
                break;
              }
              ae.next = 3;
              return notify.sendNotify($.name, ab);
            case 3:
              ae.next = 6;
              break;
            case 5:
              $.msg($.name, "", ab);
            case 6:
            case "end":
              return ae.stop();
          }
        }
      }, aa);
    }));
    return a9.apply(this, arguments);
  }
  i(g().mark(function aa() {
    return g().wrap(function (ab) {
      for (;;) {
        switch (ab.prev = ab.next) {
          case 0:
            ab.next = 2;
            return D();
          case 2:
          case "end":
            return ab.stop();
        }
      }
    }, aa);
  }))().catch(function (ab) {
    $.log(ab);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}