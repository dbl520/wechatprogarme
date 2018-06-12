module.exports = function(e) {
  var t = {};

  function n(s) {
    if (t[s]) return t[s].exports;
    var r = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  return n.m = e, n.c = t, n.d = function(e, t, s) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: s
    })
  }, n.r = function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 166)
}([function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = (n(10), n(37)),
    i = n(26);
  n(87);
  var o, a, c = n(5),
    u = c.getGlobal(),
    m = /\s+/;
  c.deduplicate = function(e) {
    var t = [];
    return e.forEach(function(e) {
      -1 === t.indexOf(e) && t.push(e)
    }), t
  }, c.capFirstLetter = function(e) {
    return e ? (e = "" + e).slice(0, 1).toUpperCase() + e.slice(1) : ""
  }, c.guid = (o = function() {
    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
  }, function() {
    return o() + o() + o() + o() + o() + o() + o() + o()
  }), c.extend = function(e, t, n) {
    for (var s in t) void 0 !== e[s] && !0 !== n || (e[s] = t[s])
  }, c.filterObj = function(e, t) {
    var n = {};
    return c.isString(t) && (t = t.split(m)), t.forEach(function(t) {
      e.hasOwnProperty(t) && (n[t] = e[t])
    }), n
  }, c.copy = function(e, t) {
    return t = t || {}, e ? (Object.keys(e).forEach(function(n) {
      c.exist(e[n]) && (t[n] = e[n])
    }), t) : t
  }, c.copyWithNull = function(e, t) {
    return t = t || {}, e ? (Object.keys(e).forEach(function(n) {
      (c.exist(e[n]) || c.isnull(e[n])) && (t[n] = e[n])
    }), t) : t
  }, c.findObjIndexInArray = function(e, t) {
    e = e || [];
    var n = t.keyPath || "id",
      s = -1;
    return e.some(function(e, r) {
      if (i(e, n) === t.value) return s = r, !0
    }), s
  }, c.findObjInArray = function(e, t) {
    var n = c.findObjIndexInArray(e, t);
    return -1 === n ? null : e[n]
  }, c.mergeObjArray = function() {
    var e = [],
      t = [].slice.call(arguments, 0, -1),
      n = arguments[arguments.length - 1];
    c.isArray(n) && (t.push(n), n = {});
    var s, r = n.keyPath = n.keyPath || "id";
    for (n.sortPath = n.sortPath || r; !e.length && t.length;) e = (e = t.shift() || []).slice(0);
    return t.forEach(function(t) {
      t && t.forEach(function(t) {
        -1 !== (s = c.findObjIndexInArray(e, {
          keyPath: r,
          value: i(t, r)
        })) ? e[s] = c.merge({}, e[s], t) : e.push(t)
      })
    }), n.notSort || (e = c.sortObjArray(e, n)), e
  }, c.cutObjArray = function(e) {
    var t = e.slice(0),
      n = arguments.length,
      s = [].slice.call(arguments, 1, n - 1),
      r = arguments[n - 1];
    c.isObject(r) || (s.push(r), r = {});
    var o, a = r.keyPath = r.keyPath || "id";
    return s.forEach(function(e) {
      c.isArray(e) || (e = [e]), e.forEach(function(e) {
        e && (r.value = i(e, a), -1 !== (o = c.findObjIndexInArray(t, r)) && t.splice(o, 1))
      })
    }), t
  }, c.sortObjArray = function(e, t) {
    var n = (t = t || {}).sortPath || "id";
    r.insensitive = !!t.insensitive;
    var s, o, a, u = !!t.desc;
    return a = c.isFunction(t.compare) ? t.compare : function(e, t) {
      return s = i(e, n), o = i(t, n), u ? r(o, s) : r(s, o)
    }, e.sort(a)
  }, c.emptyFunc = function() {}, c.isEmptyFunc = function(e) {
    return e === c.emptyFunc
  }, c.notEmptyFunc = function(e) {
    return e !== c.emptyFunc
  }, c.splice = function(e, t, n) {
    return [].splice.call(e, t, n)
  }, c.reshape2d = function(e, t) {
    if (Array.isArray(e)) {
      c.verifyParamType("type", t, "number", "util::reshape2d");
      var n = e.length;
      if (n <= t) return [e];
      for (var s = Math.ceil(n / t), r = [], i = 0; i < s; i++) r.push(e.slice(i * t, (i + 1) * t));
      return r
    }
    return e
  }, c.flatten2d = function(e) {
    if (Array.isArray(e)) {
      var t = [];
      return e.forEach(function(e) {
        t = t.concat(e)
      }), t
    }
    return e
  }, c.dropArrayDuplicates = function(e) {
    if (Array.isArray(e)) {
      for (var t = {}, n = []; e.length > 0;) {
        t[e.shift()] = !0
      }
      for (var s in t) !0 === t[s] && n.push(s);
      return n
    }
    return e
  }, c.onError = function(e) {
    throw new function(e) {
      "object" === (void 0 === e ? "undefined" : s(e)) ? (this.callFunc = e.callFunc || null, this.message = e.message || "UNKNOW ERROR") : this.message = e, this.time = new Date, this.timetag = +this.time
    }(e)
  }, c.verifyParamPresent = function(e, t, n, s) {
    n = n || "";
    var r = !1;
    switch (c.typeOf(t)) {
      case "undefined":
      case "null":
        r = !0;
        break;
      case "string":
        "" === t && (r = !0);
        break;
      case "object":
        Object.keys(t).length || (r = !0);
        break;
      case "array":
        t.length ? t.some(function(e) {
          if (c.notexist(e)) return r = !0, !0
        }) : r = !0
    }
    r && c.onParamAbsent(n + e, s)
  }, c.onParamAbsent = function(e, t) {
    c.onParamError("缺少参数 " + e + ", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined", t)
  }, c.verifyParamAbsent = function(e, t, n, s) {
    n = n || "", void 0 !== t && c.onParamPresent(n + e, s)
  }, c.onParamPresent = function(e, t) {
    c.onParamError("多余的参数 " + e, t)
  }, c.verifyParamType = function(e, t, n, s) {
    var r = c.typeOf(t).toLowerCase();
    c.isArray(n) || (n = [n]);
    var i = !0;
    switch (-1 === (n = n.map(function(e) {
      return e.toLowerCase()
    })).indexOf(r) && (i = !1), r) {
      case "number":
        isNaN(t) && (i = !1)
    }
    i || c.onParamInvalidType(e, n, "", s)
  }, c.onParamInvalidType = function(e, t, n, s) {
    n = n || "", t = c.isArray(t) ? (t = t.map(function(e) {
      return '"' + e + '"'
    })).join(", ") : '"' + t + '"', c.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]", s)
  }, c.verifyParamValid = function(e, t, n, s) {
    c.isArray(n) || (n = [n]), -1 === n.indexOf(t) && c.onParamInvalidValue(e, n, s)
  }, c.onParamInvalidValue = function(e, t, n) {
    c.isArray(t) || (t = [t]), t = t.map(function(e) {
      return '"' + e + '"'
    }), c.isArray(t) && (t = t.join(", ")), c.onParamError("参数 " + e + "值错误, 合法的值包括: [" + JSON.stringify(t) + "]", n)
  }, c.verifyParamMin = function(e, t, n, s) {
    t < n && c.onParamError("参数" + e + "的值不能小于" + n, s)
  }, c.verifyParamMax = function(e, t, n, s) {
    t > n && c.onParamError("参数" + e + "的值不能大于" + n, s)
  }, c.verifyArrayMax = function(e, t, n, s) {
    t.length > n && c.onParamError("参数" + e + "的长度不能大于" + n, s)
  }, c.verifyEmail = (a = /^\S+@\S+$/, function(e, t, n) {
    a.test(t) || c.onParamError("参数" + e + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符", n)
  }), c.verifyTel = function() {
    var e = /^[+\-()\d]+$/;
    return function(t, n, s) {
      e.test(n) || c.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字", s)
    }
  }(), c.verifyBirth = function() {
    var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    return function(t, n, s) {
      e.test(n) || c.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"', s)
    }
  }(), c.onParamError = function(e, t) {
    c.onError({
      message: e,
      callFunc: t
    })
  }, c.verifyOptions = function(e, t, n, s, r) {
    if (e = e || {}, t && (c.isString(t) && (t = t.split(m)), c.isArray(t))) {
      "boolean" != typeof n && (r = n || null, n = !0, s = "");
      var i = n ? c.verifyParamPresent : c.verifyParamAbsent;
      t.forEach(function(t) {
        i.call(c, t, e[t], s, r)
      })
    }
    return e
  }, c.verifyParamAtLeastPresentOne = function(e, t, n) {
    t && (c.isString(t) && (t = t.split(m)), c.isArray(t) && (t.some(function(t) {
      return c.exist(e[t])
    }) || c.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个", n)))
  }, c.verifyParamPresentJustOne = function(e, t, n) {
    t && (c.isString(t) && (t = t.split(m)), c.isArray(t) && 1 !== t.reduce(function(t, n) {
      return c.exist(e[n]) && t++, t
    }, 0) && c.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个", n))
  }, c.verifyBooleanWithDefault = function(e, t, n, s, r) {
    c.undef(n) && (n = !0), m.test(t) && (t = t.split(m)), c.isArray(t) ? t.forEach(function(t) {
      c.verifyBooleanWithDefault(e, t, n, s, r)
    }) : void 0 === e[t] ? e[t] = n : c.isBoolean(e[t]) || c.onParamInvalidType(t, "boolean", s, r)
  }, c.verifyFileInput = function(e, t) {
    return c.verifyParamPresent("fileInput", e, "", t), c.isString(e) && ((e = document.getElementById(e)) || c.onParamError("找不到要上传的文件对应的input, 请检查fileInput id " + e, t)), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || c.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:" + e.tagName + ", filetype:" + e.type, t), e
  }, c.verifyFileType = function(e, t) {
    c.verifyParamValid("type", e, c.validFileTypes, t)
  }, c.verifyCallback = function(e, t, n) {
    m.test(t) && (t = t.split(m)), c.isArray(t) ? t.forEach(function(t) {
      c.verifyCallback(e, t, n)
    }) : e[t] ? c.isFunction(e[t]) || c.onParamInvalidType(t, "function", "", n) : e[t] = c.emptyFunc
  }, c.verifyFileUploadCallback = function(e, t) {
    c.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel", t)
  }, c.validFileTypes = ["image", "audio", "video", "file"], c.validFileExts = {
    image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
    audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
    video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
  }, c.filterFiles = function(e, t) {
    var n, s, r = "file" === (t = t.toLowerCase()),
      i = [];
    return [].forEach.call(e, function(e) {
      if (r) i.push(e);
      else if (n = e.name.slice(e.name.lastIndexOf(".") + 1), (s = e.type.split("/"))[0] && s[1]) {
        (s[0].toLowerCase() === t || -1 !== c.validFileExts[t].indexOf(n)) && i.push(e)
      }
    }), i
  };
  var l, d, p = c.supportFormData = c.notundef(u.FormData);
  c.getFileName = function(e) {
    return e = c.verifyFileInput(e), p ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1)
  }, c.getFileInfo = (l = {
    ppt: 1,
    pptx: 2,
    pdf: 3
  }, function(e) {
    var t = {};
    if (!(e = c.verifyFileInput(e)).files) return t;
    var n = e.files[0];
    return p && (t.name = n.name, t.size = n.size, t.type = n.name.match(/\.(\w+)$/), t.type = t.type && t.type[1].toLowerCase(), t.transcodeType = l[t.type] || 0), t
  }), c.sizeText = (d = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"], function(e) {
    var t, n = 0;
    do {
      t = (e = Math.floor(100 * e) / 100) + d[n], e /= 1024, n++
    } while (e > 1);
    return t
  }), c.promises2cmds = function(e) {
    return e.map(function(e) {
      return e.cmd
    })
  }, c.objs2accounts = function(e) {
    return e.map(function(e) {
      return e.account
    })
  }, c.teams2ids = function(e) {
    return e.map(function(e) {
      return e.teamId
    })
  }, c.objs2ids = function(e) {
    return e.map(function(e) {
      return e.id
    })
  }, c.getMaxUpdateTime = function(e) {
    var t = e.map(function(e) {
      return +e.updateTime
    });
    return Math.max.apply(Math, t)
  }, c.genCheckUniqueFunc = function(e, t) {
    return e = e || "id", t = t || 1e3,
      function(t) {
        this.uniqueSet = this.uniqueSet || {}, this.uniqueSet[e] = this.uniqueSet[e] || {};
        var n = this.uniqueSet[e],
          s = t[e];
        return !n[s] && (n[s] = !0, !0)
      }
  }, c.fillPropertyWithDefault = function(e, t, n) {
    return !!c.undef(e[t]) && (e[t] = n, !0)
  }, e.exports = c
}, function(e, t, n) {
  "use strict";
  var s = {
    info: {
      hash: "'a9f68f4d0a8394b5028159f63dddc475fb7eee76",
      shortHash: "a9f68f4d'",
      version: "5.1.0",
      sdkVersion: "48",
      nrtcVersion: "3.9.0",
      nrtcSdkVersion: "1",
      protocolVersion: 1
    },
    agentVersion: "2.6.0.328",
    lbsUrl: "https://lbs.netease.im/lbs/webconf.jsp",
    roomserver: "roomserver.netease.im",
    connectTimeout: 18e3,
    xhrTimeout: 18e3,
    socketTimeout: 18e3,
    reconnectionDelay: 1e3,
    reconnectionDelayMax: 18e3,
    reconnectionJitter: .1,
    heartbeatInterval: 18e4,
    cmdTimeout: 18e3,
    defaultReportUrl: "https://dr.netease.im/1.gif",
    isWeixinApp: !1,
    isNodejs: !1,
    isRN: !1,
    formatSocketUrl: function(e) {
      var t = e.url,
        n = e.secure ? "https" : "http";
      return -1 === t.indexOf("http") ? n + "://" + t : t
    },
    uploadUrl: "https://nos.netease.com",
    replaceUrl: "https://{bucket}.nosdn.127.net/{object}",
    downloadHost: "nos.netease.com",
    downloadUrl: "https://{bucket}.nosdn.127.net/{object}",
    httpsEnabled: !1,
    genUploadUrl: function(e) {
      return s.uploadUrl + "/" + e
    },
    genDownloadUrl: function(e, t) {
      var n = s.replaceUrl;
      return /^http/.test(n) ? s.httpsEnabled && (n = n.replace("http", "https")) : n = s.httpsEnabled ? "https://" + n : "http://" + n, n.replace("{bucket}", e).replace("{object}", t)
    }
  };
  e.exports = s
}, function(e, t, n) {
  "use strict";
  var s = n(7),
    r = n(11),
    i = n(3),
    o = n(1),
    a = n(0),
    c = a.undef,
    u = n(46),
    m = n(15).getInstance("IM"),
    l = n(20);

  function d(e) {
    a.verifyOptions(e, "appKey account token", "protocol::IMProtocol"), a.verifyCallback(e, ["onconnect", "onerror", "onwillreconnect", "ondisconnect", "onloginportschange", "onmyinfo", "onblacklist", "onmutelist", "onfriends", "onusers", "onrobots", "onteams", "onsessions", "onroamingmsgs", "onofflinemsgs", "onofflinefiltermsgs", "onroamingsysmsgs", "onofflinesysmsgs", "onofflinefiltersysmsgs", "onofflinecustomsysmsgs", "onofflinefiltercustomsysmsgs", "onbroadcastmsg", "onbroadcastmsgs", "onsysmsgunread", "onsyncdone", "onteammembers", "onsyncteammembersdone", "onmsg", "onsysmsg", "oncustomsysmsg", "onupdatemyinfo", "onupdateuser", "onupdateteammember", "onCreateTeam", "onUpdateTeam", "onAddTeamMembers", "onRemoveTeamMembers", "onUpdateTeamManagers", "onDismissTeam", "onTransferTeam", "onUpdateTeamMembersMute", "onTeamMsgReceipt", "onupdatesession", "onupdatesysmsgunread", "onupdatesysmsg", "onsynccreateteam", "onsyncmarkinblacklist", "onsyncmarkinmutelist", "onsyncfriendaction", "shouldIgnoreNotification", "shouldCountNotifyUnread", "onPushNotificationMultiportConfig", "onPushNotificationMultiportConfigUpdate", "onpushevents"], "protocol::IMProtocol"), this.db = e.api.db = new s({
      logger: e.logger
    }), r.call(this, e)
  }
  var p = r.fn,
    f = d.fn = d.prototype = Object.create(p);
  f.init = function() {
    p.init.call(this), this.socketUrls = [], this.parser = m, this.syncing = !0, this.hasSynced = !1, this.hasSyncedTeamMembers = !1, this.syncPromiseArray = [], this.syncResult = {}, this.syncTeamMembersPromiseArray = [], this.syncTeamMembersResult = {}, this.timetags = {}, this.sysMsgUnread = l.completeUnread({}), this.resetUnsettledMsgs(), this.resetUnsettledSysMsgs(), this.msgPromise = Promise.resolve(), this.sysMsgPromise = Promise.resolve(), this.sessionSet = {}, this.msgReceiptTasks = {}, this.userSet = {}, this.pushNotificationMultiportConfig = u.getDefaultConfig()
  }, f.reset = function() {
    p.reset.call(this);
    var e = this.options;
    this.db.reset(e.db), c(e.lbsUrl) && (e.lbsUrl = o.lbsUrl), this.resetAutoMarkRead()
  }, f.resetAutoMarkRead = function() {
    var e = this.options;
    a.verifyBooleanWithDefault(e, "autoMarkRead", !0, "", "protocol::resetAutoMarkRead")
  }, f.resetUnsettledMsgs = function() {
    this.unhandledMsgs = [], this.unupdatedMsgs = []
  }, f.resetUnsettledSysMsgs = function() {
    this.unhandledSysMsgs = [], this.unupdatedSysMsgs = []
  }, f.packetFromSync = function(e) {
    return !e.obj || !!e.obj.sync
  }, f.onCustomError = function(e, t) {
    var n = i.customError(e, t),
      s = t.message || "未知错误";
    this.onMiscError(s, n)
  }, e.exports = d, n(154), n(153), n(152), n(151), n(149), n(148), n(147), n(146), n(145), n(144), n(143), n(142), n(141), n(140), n(139), n(138), n(137)
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };

  function r(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    this.message = e || n.message || "", "object" === (void 0 === t ? "undefined" : s(t)) ? (this.event = t, this.code = "Other_Error") : void 0 !== t && (this.code = t), this.timetag = +new Date, void 0 !== n && (this.event = n), this.event && (this.callFunc = this.event.callFunc || null, delete this.event.callFunc)
  }
  r.prototype = Object.create(Error.prototype), r.prototype.name = "NIMError";
  var i = {
    201: "客户端版本不对, 需升级sdk",
    302: "用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配",
    403: "非法操作或没有权限",
    404: "对象(用户/群/聊天室)不存在",
    405: "参数长度过长",
    408: "客户端请求超时",
    414: "参数错误",
    415: "服务不可用/没有聊天室服务器可分配",
    416: "频率控制",
    417: "重复操作",
    422: "帐号被禁用",
    500: "服务器内部错误",
    501: "数据库操作失败",
    503: "服务器繁忙",
    508: "删除有效期过了",
    509: "已失效",
    7101: "被拉黑",
    801: "群人数达到上限",
    802: "没有权限",
    803: "群不存在或未发生变化",
    804: "用户不在群里面",
    805: "群类型不匹配",
    806: "创建群数量达到限制",
    807: "群成员状态不对",
    809: "已经在群里",
    811: "强推列表中帐号数量超限",
    812: "群被禁言",
    813: "因群数量限制，部分拉人成功",
    997: "协议已失效",
    998: "解包错误",
    999: "打包错误",
    9102: "通道失效",
    9103: "已经在其他端接听/拒绝过这通电话",
    11001: "对方离线, 通话不可送达",
    13002: "聊天室状态异常",
    13003: "在黑名单中",
    13004: "在禁言名单中",
    13006: "聊天室处于整体禁言状态,只有管理员能发言",
    Connect_Failed: "无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下",
    Error_Internet_Disconnected: "网断了",
    Error_Connection_is_not_Established: "连接未建立",
    Error_Connection_Socket_State_not_Match: "socket状态不对",
    Error_Timeout: "超时",
    Param_Error: "参数错误",
    No_File_Selected: "请选择文件",
    Wrong_File_Type: "文件类型错误",
    File_Too_Large: "文件过大",
    Cross_Origin_Iframe: "不能获取跨域Iframe的内容",
    Not_Support: "不支持",
    NO_DB: "无数据库",
    DB: "数据库错误",
    Still_In_Team: "还在群里",
    Session_Exist: "会话已存在",
    Session_Not_Exist: "会话不存在",
    Error_Unknown: "未知错误",
    Operation_Canceled: "操作取消"
  };
  [200, 406, 808, 810].forEach(function(e) {
    i[e] = null
  }), r.genError = function(e) {
    var t = i[e];
    return void 0 === t && (t = "操作失败"), null === t ? null : new r(t, e)
  }, r.multiInstance = function(e) {
    return new r("不允许初始化多个实例", "Not_Allow_Multi_Instance", e)
  }, r.newNetworkError = function(e) {
    var t = "Error_Internet_Disconnected";
    return new r(i[t], t, e)
  }, r.newConnectError = function(e) {
    var t = "Connect_Failed";
    return new r(i[t] || null, t, e)
  }, r.newConnectionError = function(e) {
    var t = "Error_Connection_is_not_Established";
    return new r(i[t], t, e)
  }, r.newSocketStateError = function(e) {
    var t = "Error_Connection_Socket_State_not_Match";
    return new r(i[t], t, e)
  }, r.newTimeoutError = function(e) {
    var t = "Error_Timeout";
    return new r(i[t], t, e)
  }, r.newFrequencyControlError = function(e) {
    var t = new r(i[416], 416, e);
    return t.from = "local", t
  }, r.newParamError = function(e, t) {
    return new r(e || i.Param_Error, "Param_Error", t)
  }, r.newNoFileError = function(e, t) {
    var n = "No_File_Selected";
    return new r(e || i[n], n, t)
  }, r.newWrongFileTypeError = function(e, t) {
    var n = "Wrong_File_Type";
    return new r(e || i[n], n, t)
  }, r.newFileTooLargeError = function(e, t) {
    var n = "File_Too_Large";
    return new r(e || i[n], n, t)
  }, r.newCORSIframeError = function(e) {
    var t = "Cross_Origin_Iframe";
    return new r(i[t], t, e)
  }, r.newSupportError = function(e, t, n) {
    return new r("不支持" + e, "Not_Support_" + t, n)
  }, r.newSupportDBError = function(e) {
    return r.newSupportError("数据库", "DB", e)
  }, r.noDBError = function(e) {
    return new r(i.NO_DB, "NO_DB", e)
  }, r.newDBError = function(e) {
    return new r(i.DB, "DB", e)
  }, r.newUnknownError = function(e) {
    var t = "Error_Unknown";
    return new r(i[t], t, e)
  }, r.stillInTeamError = function(e) {
    var t = "Still_In_Team";
    return new r(i[t], t, e)
  }, r.sessionExist = function(e) {
    var t = "Session_Exist";
    return new r(i[t], t, e)
  }, r.sessionNotExist = function(e) {
    var t = "Session_Not_Exist";
    return new r(i[t], t, e)
  }, r.cancel = function(e) {
    var t = "Operation_Canceled";
    return new r(i[t], t, e)
  }, r.customError = function(e, t) {
    e = e || "Other_Error";
    var n = "";
    return (t = t || {}).message || (n = i[e] || e), "object" !== (void 0 === e ? "undefined" : s(e)) ? new r(n, e, t) : new r(n, "Other_Error", void 0 === t ? e : t)
  }, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = n(6),
    r = n(2),
    i = n(1),
    o = n(136),
    a = n(15).getInstance("IM");

  function c(e) {
    return this.subType = "im", e.Protocol = r, e.Message = o, e.constructor = c, this.init(e)
  }
  c.Protocol = r, c.parser = a, c.use = s.use, c.getInstance = s.getInstance, c.rmAllInstances = s.rmAllInstances, c.genInstanceName = function(e) {
    return "NIM-account-" + e.account
  };
  var u = c.fn = c.prototype = Object.create(s.prototype);
  c.info = u.info = i.info, e.exports = c, n(126), n(125), n(124), n(123), n(122), n(121), n(120), n(119), n(118), n(117), n(116), n(115), n(114), n(113), n(112), n(111)
}, function(e, t, n) {
  "use strict";
  (function(e) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.getGlobal = s, t.detectCSSFeature = function(e) {
      var t = !1,
        n = "Webkit Moz ms O".split(" "),
        s = document.createElement("div"),
        r = null;
      e = e.toLowerCase(), void 0 !== s.style[e] && (t = !0);
      if (!1 === t) {
        r = e.charAt(0).toUpperCase() + e.substr(1);
        for (var i = 0; i < n.length; i++)
          if (void 0 !== s.style[n[i] + r]) {
            t = !0;
            break
          }
      }
      return t
    }, t.fix = r, t.getYearStr = i, t.getMonthStr = o, t.getDayStr = a, t.getHourStr = c, t.getMinuteStr = u, t.getSecondStr = m, t.getMillisecondStr = l, t.dateFromDateTimeLocal = function(e) {
      return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
    }, t.getClass = f, t.typeOf = g, t.isString = y, t.isNumber = function(e) {
      return "number" === g(e)
    }, t.isBoolean = function(e) {
      return "boolean" === g(e)
    }, t.isArray = h, t.isFunction = v, t.isDate = b, t.isRegExp = function(e) {
      return "regexp" === g(e)
    }, t.isError = function(e) {
      return "error" === g(e)
    }, t.isnull = M, t.notnull = T, t.undef = k, t.notundef = S, t.exist = C, t.notexist = I, t.isObject = P, t.isEmpty = function(e) {
      return I(e) || (y(e) || h(e)) && 0 === e.length
    }, t.containsNode = function(e, t) {
      if (e === t) return !0;
      for (; t.parentNode;) {
        if (t.parentNode === e) return !0;
        t = t.parentNode
      }
      return !1
    }, t.calcHeight = function(e) {
      var t = e.parentNode || document.body;
      (e = e.cloneNode(!0)).style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
      var n = e.offsetHeight;
      return t.removeChild(e), n
    }, t.remove = function(e) {
      e.parentNode && e.parentNode.removeChild(e)
    }, t.dataset = function(e, t, n) {
      if (!C(n)) return e.getAttribute("data-" + t);
      e.setAttribute("data-" + t, n)
    }, t.target = function(e) {
      return e.target || e.srcElement
    }, t.createIframe = function(e) {
      var t;
      if ((e = e || {}).name) try {
        (t = document.createElement('<iframe name="' + e.name + '"></iframe>')).frameBorder = 0
      } catch (n) {
        (t = document.createElement("iframe")).name = e.name
      } else t = document.createElement("iframe");
      e.visible || (t.style.display = "none");
      v(e.onload) && O(t, "load", function n(s) {
        if (!t.src) return;
        e.multi || x(t, "load", n);
        e.onload(s)
      });
      (e.parent || document.body).appendChild(t);
      var n = e.src || "about:blank";
      return setTimeout(function() {
        t.src = n
      }, 0), t
    }, t.html2node = function(e) {
      var t = document.createElement("div");
      t.innerHTML = e;
      var n = [],
        s = void 0,
        r = void 0;
      if (t.children)
        for (s = 0, r = t.children.length; s < r; s++) n.push(t.children[s]);
      else
        for (s = 0, r = t.childNodes.length; s < r; s++) {
          var i = t.childNodes[s];
          1 === i.nodeType && n.push(i)
        }
      return n.length > 1 ? t : n[0]
    }, t.scrollTop = function(e) {
      C(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }, t.forOwn = E, t.mixin = _, t.isJSON = F, t.parseJSON = function e(t) {
      try {
        F(t) && (t = JSON.parse(t)), P(t) && E(t, function(n, s) {
          switch (g(s)) {
            case "string":
            case "object":
              t[n] = e(s)
          }
        })
      } catch (e) {
        console.error(e)
      }
      return t
    }, t.simpleClone = function(e) {
      var t = [],
        s = JSON.stringify(e, function(e, s) {
          if ("object" === (void 0 === s ? "undefined" : n(s)) && null !== s) {
            if (-1 !== t.indexOf(s)) return;
            t.push(s)
          }
          return s
        });
      return JSON.parse(s)
    }, t.merge = function() {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
      return n.forEach(function(t) {
        _(e, t)
      }), e
    }, t.fillUndef = function(e, t) {
      return E(t, function(t, n) {
        k(e[t]) && (e[t] = n)
      }), e
    }, t.checkWithDefault = function(e, t, n) {
      var s = e[t] || e[t.toLowerCase()];
      I(s) && (s = n, e[t] = s);
      return s
    }, t.fetch = function(e, t) {
      return E(e, function(n, s) {
        C(t[n]) && (e[n] = t[n])
      }), e
    }, t.string2object = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",",
        n = {};
      return e.split(t).forEach(function(e) {
        var t = e.split("="),
          s = t.shift();
        s && (n[decodeURIComponent(s)] = decodeURIComponent(t.join("=")))
      }), n
    }, t.object2string = j, t.genUrlSep = function(e) {
      return e.indexOf("?") < 0 ? "?" : "&"
    }, t.object2query = function(e) {
      return j(e, "&", !0)
    }, t.isFileInput = U, t.getKeys = function(e, t) {
      var n = Object.keys(e);
      t && n.sort(function(t, n) {
        var s = U(e[t]),
          r = U(e[n]);
        return s === r ? 0 : s ? 1 : -1
      });
      return n
    };
    t.o = {}, t.emptyObj = {}, t.f = function() {}, t.emptyFunc = function() {}, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi;

    function s() {
      return "undefined" != typeof window ? window : void 0 !== e ? e : {}
    }

    function r(e, t) {
      t = t || 2;
      for (var n = "" + e; n.length < t;) n = "0" + n;
      return n
    }

    function i(e) {
      return "" + e.getFullYear()
    }

    function o(e) {
      return r(e.getMonth() + 1)
    }

    function a(e) {
      return r(e.getDate())
    }

    function c(e) {
      return r(e.getHours())
    }

    function u(e) {
      return r(e.getMinutes())
    }

    function m(e) {
      return r(e.getSeconds())
    }

    function l(e) {
      return r(e.getMilliseconds(), 3)
    }
    var d, p;
    t.format = (d = /yyyy|MM|dd|hh|mm|ss|SSS/g, p = {
      yyyy: i,
      MM: o,
      dd: a,
      hh: c,
      mm: u,
      ss: m,
      SSS: l
    }, function(e, t) {
      return e = new Date(e), isNaN(+e) ? "invalid date" : (t = t || "yyyy-MM-dd").replace(d, function(t) {
        return p[t](e)
      })
    });

    function f(e) {
      return Object.prototype.toString.call(e).slice(8, -1)
    }

    function g(e) {
      return f(e).toLowerCase()
    }

    function y(e) {
      return "string" === g(e)
    }

    function h(e) {
      return "array" === g(e)
    }

    function v(e) {
      return "function" === g(e)
    }

    function b(e) {
      return "date" === g(e)
    }

    function M(e) {
      return null === e
    }

    function T(e) {
      return null !== e
    }

    function k(e) {
      return void 0 === e
    }

    function S(e) {
      return void 0 !== e
    }

    function C(e) {
      return S(e) && T(e)
    }

    function I(e) {
      return k(e) || M(e)
    }

    function P(e) {
      return C(e) && "object" === g(e)
    }
    var w = t.addEventListener = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
      },
      O = t.on = w,
      A = t.removeEventListener = function(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
      },
      x = t.off = A;

    function E() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
        n = arguments[2];
      for (var s in e) e.hasOwnProperty(s) && t.call(n, s, e[s])
    }

    function _(e, t) {
      E(t, function(t, n) {
        e[t] = n
      })
    }
    var R;
    t.uniqueID = (R = 0, function() {
      return "" + R++
    });

    function F(e) {
      return y(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1
    }

    function j(e, t, n) {
      if (!e) return "";
      var s = [];
      return E(e, function(e, t) {
        v(t) || (b(t) ? t = t.getTime() : h(t) ? t = t.join(",") : P(t) && (t = JSON.stringify(t)), n && (t = encodeURIComponent(t)), s.push(encodeURIComponent(e) + "=" + t))
      }), s.join(t || ",")
    }
    t.url2origin = function() {
      var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
      return function(t) {
        return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
      }
    }();

    function U(e) {
      var t = s();
      return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob
    }
  }).call(this, n(16))
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(88),
    i = n(0),
    o = i.notundef,
    a = n(86),
    c = n(1);

  function u() {}
  var m = {};
  u.rmAllInstances = function() {
    for (var e in m) m[e].destroy();
    m = {}
  }, u.getInstance = function(e) {
    i.verifyOptions(e, "account", "api::Base.getInstance");
    var t = this.genInstanceName(e),
      n = m[t];
    return n ? u.updateInstance(n, e) : n = m[t] = new this(e), n
  }, u.updateInstance = function(e, t) {
    e.setOptions(t), e.connect()
  };
  var l = u.fn = u.prototype = Object.create(new r);
  l.updatePrivateConf = function(e) {
    if (e && "object" === s(e.privateConf)) {
      var t = e.privateConf;
      "string" == typeof t.lbs_web && (e.lbsUrl = t.lbs_web), "boolean" == typeof t.link_ssl_web && (e.secure = t.link_ssl_web), "boolean" == typeof t.https_enabled && (e.httpsEnabled = t.https_enabled), e.uploadUrl = t.nos_uploader_web ? t.nos_uploader_web : null, e.replaceUrl = t.nos_downloader ? t.nos_downloader : null, e.downloadUrl = t.nos_accelerate ? t.nos_accelerate : null, e.downloadHost = t.nos_accelerate_host ? t.nos_accelerate_host : null, e.ntServerAddress = t.nt_server
    }
    return null === e.ntServerAddress || "" === e.ntServerAddress ? c.ntServerAddress = null : c.ntServerAddress = e.ntServerAddress || c.defaultReportUrl, c.uploadUrl = e.uploadUrl || c.uploadUrl, c.downloadUrl = e.downloadUrl || c.downloadUrl, c.downloadHost = e.downloadHost || c.downloadHost, c.replaceUrl = e.replaceUrl || c.replaceUrl, c.httpsEnabled = e.httpsEnabled || c.httpsEnabled, e
  }, l.init = function(e) {
    i.verifyOptions(e, "account", "api::Base.init"), e = this.updatePrivateConf(e);
    var t = this.account = e.account = e.account + "",
      n = e.constructor.genInstanceName(e),
      s = m[n];
    if (e._disableSingleton && (s = null), s) return u.updateInstance(s, e), s;
    this.name = n, m[n] = this, this.logger = e.logger = new a({
      debug: e.debug,
      logFunc: e.logFunc,
      prefix: this.subType
    }), e.api = this;
    var r = this.protocol = new e.Protocol(e);
    return r.name = "Protocol-" + n, r.account = t, r.api = this, r.message = this.message = new e.Message({
      account: t
    }), this.options = i.copy(e), this.reset(), this
  }, l.destroy = function(e) {
    e = e || {};
    var t = this.name,
      n = this;

    function s(s) {
      n.logger.warn("ApiBase::destroy: instance destroyed ..."), Object.getOwnPropertyNames(n).forEach(function(e) {
        delete n[e]
      }), m && (delete m[t], m[t] = null), e.done instanceof Function && e.done(s)
    }
    this.isConnected && this.isConnected() ? this.disconnect({
      done: s
    }) : s(null)
  }, l.reset = function() {
    var e = this.updatePrivateConf(this.options);
    i.verifyBooleanWithDefault(e, "exifOrientation", !0, "", "api::Base.reset")
  }, l.setOptions = function(e) {
    this.reset(), this.protocol.setOptions(e)
  }, l.processCallback = function(e, t) {
    d(e, t)
  }, l.processCallbackPromise = function(e, t) {
    return new Promise(function(n, s) {
      d(e, t, !0, n, s)
    })
  };
  var d = function(e, t, n, s, r) {
    var a = "api::processCallback";
    n && (a = "api::processCallbackPromise"), i.verifyCallback(e, "done", a), e.callback = function(c, u, m) {
      var l = e.callback.options;
      if (u = u || l, t && (u = l), i.isFunction(e.cbaop)) {
        var d = e.cbaop(c, u);
        o(d) && (u = d)
      }
      var p = e.done;
      i.isObject(u) && (delete u.done, delete u.cb, delete u.callback), n ? c ? r({
        message: "生成接口回调错误",
        callFunc: a,
        event: c
      }) : s(u) : p(c, u, m)
    }, e.callback.options = i.copy(e)
  };
  l.processPs = function(e) {
    i.notexist(e.ps) && (e.ps = "")
  }, l.processCustom = function(e) {
    i.notexist(e.custom) && (e.custom = "")
  }, l.sendCmd = function() {
    this.protocol.sendCmd.apply(this.protocol, arguments)
  }, l.sendCmdWithResp = function(e, t, n) {
    this.sendCmd(e, t, function(e, t, s) {
      i.isFunction(n) && (e ? n(e, t) : n(null, s))
    })
  }, l.cbAndSendCmd = function(e, t) {
    var n = this.processCallbackPromise(t);
    return this.sendCmd(e, t), n
  }, u.use = function(e, t) {
    e && e.install && i.isFunction(e.install) && e.install(this, t)
  }, e.exports = u, n(79), n(78), n(74), n(73), n(72), n(71)
}, function(e, t, n) {
  "use strict";
  var s = n(10),
    r = n(26),
    i = n(48),
    o = n(0),
    a = n(47),
    c = n(3),
    u = c.newSupportDBError,
    m = c.noDBError,
    l = n(165),
    d = !1;

  function p(e) {
    d = e, a.set("db", e, i)
  }
  if (p(!!o.getGlobal().indexedDB), "IE" === s.name && p(!1), "Microsoft Edge" === s.name && p(!1), "Safari" === s.name) {
    try {
      parseInt(s.version.split(".")[0], 10) < 10 && p(!1)
    } catch (e) {}
    p(!1)
  }

  function f(e) {
    this.concurrency = 0, this.pendingTasks = [], this.queue = Promise.resolve(), this.logger = e.logger
  }
  var g = f.fn = f.prototype;
  g.reset = o.emptyFunc, d && (g.reset = function(e) {
    this.enable = !1 !== e
  }), g.addTask = function(e) {
    var t = this;
    return new Promise(function(n, s) {
      function r(e) {
        t.concurrency--;
        var n = t.pendingTasks.shift();
        n && t.addTask(n), e()
      }
      if (t.concurrency < 100) return t.concurrency++, e().then(function(t) {
        r(function() {
          n(t), e.resolve && e.resolve(t)
        })
      }, function(t) {
        r(function() {
          var n = new c("数据库并发错误", "DB_ERROR", {
            event: t,
            callFunc: "db::addTask"
          });
          s(n), e.reject && e.reject(n)
        })
      });
      e.resolve || (e.resolve = n, e.reject = s), t.pendingTasks.push(e)
    })
  }, g.init = function(e) {
    var t = this;
    return t.addTask(function() {
      return t.enable ? t.server ? Promise.resolve() : (t.name = "nim-" + e, i.open({
        server: t.name,
        version: l.version,
        schema: l.schema
      }).then(function(e) {
        t.logger.log("db::init: " + t.name), t.server = e
      }, function(e) {
        throw p(!1), t.server = null, t.name = null, e
      })) : Promise.reject(u({
        callFunc: "db::init"
      }))
    })
  }, g.destroy = function() {
    var e = this;
    return e.addTask(function() {
      return e.enable ? e.server ? i.remove(e.name).then(function() {
        e.logger.log("db::destroy: " + e.name), e.server = null, e.name = null
      }) : Promise.resolve() : Promise.reject(u({
        callFunc: "db::destroy"
      }))
    })
  }, g.clear = function() {
    var e = this;
    return e.addTask(function() {
      return e.enable ? e.server ? e.server.clear("timetag").then(function() {
        var t = [].slice.call(e.server.getIndexedDB().objectStoreNames),
          n = [];
        if (t.forEach(function(t) {
            n.push(e.server.clear(t))
          }), n.length) return Promise.all(n).then(function() {
          e.logger.log("db::clear: " + e.name)
        })
      }) : Promise.resolve() : Promise.reject(u({
        callFunc: "db::clear"
      }))
    })
  }, g.close = function() {
    this.server && (this.server.close(), this.server = null, this.name = null)
  }, g.remove = function(e, t) {
    var n = this;
    return n.addTask(function() {
      return n.enable ? n.server ? (o.isArray(t) || (t = [t]), n.server.remove(e, t).then(function() {
        n.logger.log("db::delete: " + e + " " + (1 === t.length ? t[0] : t))
      })) : Promise.reject(m({
        callFunc: "db::remove"
      })) : Promise.reject(u({
        callFunc: "db::remove"
      }))
    })
  }, g.put = function(e, t) {
    var n = this;
    return n.addTask(function() {
      return n.enable ? n.server ? (o.isArray(t) || (t = [t]), n.server.update(e, t).then(function(t) {
        var s = ["put", e],
          i = l.keyPath(e),
          o = [];
        return i && (t.forEach(function(e) {
          o.push(r(e, i))
        }), s.push(1 === o.length ? o[0] : o)), s.push(1 === t.length ? t[0] : t), s.unshift("db::put:"), n.logger.log.apply(n.logger.log, s), t
      })) : Promise.reject(m({
        callFunc: "db::put"
      })) : Promise.reject(u({
        callFunc: "db::put"
      }))
    })
  }, g.modifyOrPut = function(e) {
    var t = this,
      n = e.table,
      s = o.copy(e.obj),
      r = e.key,
      i = e.modifyObjWhenPut,
      a = o.copy(s);
    return delete a[r], t.getOne(n, null, s[r], {
      modifyObj: a
    }).then(function(e) {
      return e ? (t.logger.log("db::modifyOrPut: update table " + n, s), e) : (s = o.merge(s, i), t.put(n, s).then(function(e) {
        return e[0]
      }))
    })
  }, g.updateAndDelete = function(e, t, n) {
    var s = this;
    return s.addTask(function() {
      return s.enable ? s.server ? s.server.updateAndDelete(e, t, n) : Promise.reject(m({
        callFunc: "db::updateAndDelete"
      })) : Promise.reject(u({
        callFunc: "db::updateAndDelete"
      }))
    })
  }, g.get = function(e, t) {
    var n = this;
    return n.addTask(function() {
      return n.enable ? n.server ? n.server.get(e, t) : Promise.reject(m({
        callFunc: "db::get"
      })) : Promise.reject(u({
        callFunc: "db::get"
      }))
    })
  }, g.getAll = function(e, t) {
    var n = this;
    return n.addTask(function() {
      return n.enable ? n.server ? ((t = t || {}).keys = !0 === t.keys, t.desc = !0 === t.desc, t.distinct = !0 === t.distinct, n.server.query(e, t.index).filter(t.filter).keys(t.keys).desc(t.desc).limit(t.limit).distinct(t.distinct).map(t.mapper).modify(t.modifyObj).execute()) : Promise.reject(m({
        callFunc: "db::getAll"
      })) : Promise.reject(u({
        callFunc: "db::getAll"
      }))
    })
  }, g.getOnly = function(e, t, n, s) {
    var r = this;
    return r.addTask(function() {
      if (!r.enable) throw u({
        callFunc: "db::getOnly"
      });
      if (!r.server) throw m({
        callFunc: "db::getOnly"
      });
      return (s = s || {}).keys = !0 === s.keys, s.desc = !0 === s.desc, s.distinct = !0 === s.distinct, s.remove = !0 === s.remove, r.server.query(e, t).only(n).filter(s.filter).keys(s.keys).desc(s.desc).limit(s.limit).distinct(s.distinct).map(s.mapper).modify(s.modifyObj).remove(s.remove).execute()
    })
  }, g.getOne = function() {
    return this.getOnly.apply(this, arguments).then(function(e) {
      return e[0]
    })
  }, g.clearTable = function(e) {
    var t = this;
    return t.addTask(function() {
      if (!t.enable) throw u({
        callFunc: "db::clearTable"
      });
      if (!t.server) throw m({
        callFunc: "db::clearTable"
      });
      return t.server.clear(e)
    })
  }, g.checkDB = function() {
    if (!this.enable) throw u({
      callFunc: "db::checkDB"
    });
    if (!this.server) throw m({
      callFunc: "db::checkDB"
    })
  }, e.exports = f, n(164), n(163), n(162), n(161), n(160), n(159), n(158), n(157), n(156), n(155)
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = {
      init: function() {
        r.deviceId = s.guid()
      }
    };
  r.init(), r.clientTypeMap = {
    1: "Android",
    2: "iOS",
    4: "PC",
    8: "WindowsPhone",
    16: "Web",
    32: "Server",
    64: "Mac"
  }, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = n(24),
    r = n(81),
    i = n(80);
  s.json = r, s.upload = i, e.exports = s
}, function(e, t, n) {
  "use strict";
  e.exports = {
    description: "weixin micro app",
    layout: null,
    manufacturer: null,
    name: "weixin",
    prerelease: null,
    product: null,
    ua: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Weixin/1.9.1",
    version: "1.9.1",
    os: {
      architecture: 64,
      family: "Windows",
      version: "1.9.1"
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = n(1),
    i = n(3);

  function o(e) {
    s.undef(e.secure) && (e.secure = !0), this.options = s.copy(e), this.init(), this.connect()
  }
  var a = o.fn = o.prototype;
  a.init = function() {
    this.logger = this.options.logger, this.cmdTaskArray = [], this.timerMap = {}, this.cmdCallbackMap = {}, this.cmdContentMap = {}, this.initConnect(), this.reset()
  }, a.reset = function() {
    this.resetConnect()
  }, a.setOptions = function(e) {
    var t = this.options,
      n = Object.keys(t),
      r = n.indexOf("account"); - 1 !== r && n.splice(r, 1), e = s.filterObj(e, n), this.options = s.merge(t, e), this.reset()
  }, a.sendCmd = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = arguments[2];
    this.heartbeat(), "heartbeat" !== e && this.logger.warn("protocol::sendCmd: " + e, t);
    var s, r = e,
      i = (e = this.parser.createCmd(e, t)).SER;
    t = t || {}, this.cmdContentMap[i] = t, t.single && (delete t.single, 1 === (s = Object.keys(t)).length && (this.cmdContentMap[i] = t[s[0]])), t.NOTSTORE && ((s = t.NOTSTORE.split(" ")).forEach(function(e) {
      delete t[e]
    }), delete t.NOTSTORE), (n = n || t.callback) && (this.cmdCallbackMap[i] = n), this.cmdTaskArray.push({
      cmdName: r,
      cmd: JSON.stringify(e)
    }), this.startCmdTaskTimer()
  }, a.startCmdTaskTimer = function() {
    var e = this;
    e.cmdTaskTimer || (e.cmdTaskTimer = setTimeout(function() {
      var t = e.cmdTaskArray.shift();
      e.cmdTaskTimer = null, t && e.executeCmdTask(t), e.cmdTaskArray.length && e.startCmdTaskTimer()
    }, 0))
  }, a.executeCmdTask = function(e) {
    var t = e.cmdName,
      n = e.cmd,
      s = (n = JSON.parse(n)).SER;
    this.isFrequencyControlled(t) ? (this.logger.warn("protocol::executeCmdTask: " + t + " hit freq control"), this.markCallbackInvalid(s, i.newFrequencyControlError({
      callFunc: "protocol::executeCmdTask",
      message: t + " hit freq control"
    }))) : this.isConnected() ? (this.logger.log("protocol::sendCmd: " + t + " " + JSON.stringify(n)), this.doSendCmd(n)) : (this.logger.warn("protocol::executeCmdTask: " + t + " not connected"), this.markCallbackInvalid(s, i.newSocketStateError({
      callFunc: "protocol::executeCmdTask",
      message: t + " not connected"
    })))
  }, a.isFrequencyControlled = function(e) {
    var t = this.frequencyControlMap && this.frequencyControlMap[e];
    if (t) {
      if (Date.now() < t.from + t.duration) return !0;
      delete this.frequencyControlMap[e]
    }
  }, a.doSendCmd = function(e) {
    var t = this,
      n = e.SER;
    t.timerMap[n] = setTimeout(function() {
      t.markCallbackInvalid(n, i.newTimeoutError({
        callFunc: "protocol::doSendCmd",
        message: "ser " + n + " Timeout Error"
      }))
    }, r.cmdTimeout);
    try {
      t.socket.send(JSON.stringify(e))
    } catch (e) {
      t.markCallbackInvalid(n, i.newSocketStateError({
        callFunc: "protocol::doSendCmd",
        message: "ser " + n + " socketSendJson Error"
      })), t.onDisconnect(!0, "protocol::doSendCmd:socketSendJson")
    }
  }, a.getObjWithSer = function(e) {
    var t = this.cmdContentMap[e];
    return delete this.cmdContentMap[e], t && s.copy(t)
  }, a.getCallbackWithSer = function(e) {
    var t = this.cmdCallbackMap[e];
    return delete this.cmdCallbackMap[e], t
  }, a.getTimerWithSer = function(e) {
    var t = this.timerMap[e];
    return delete this.timerMap[e], t
  }, a.clearTimerWithSer = function(e) {
    var t = this.getTimerWithSer(e);
    t && clearTimeout(t)
  }, a.markCallbackInvalid = function(e, t) {
    this.getObjWithSer(e), this.clearTimerWithSer(e);
    var n = this.getCallbackWithSer(e);
    if (n) {
      var s = n.options;
      setTimeout(function() {
        n(t || i.newUnknownError({
          ser: e
        }), s)
      }, 0)
    }
  }, a.markAllCallbackInvalid = function(e) {
    var t = this;
    Object.keys(this.cmdCallbackMap).forEach(function(n) {
      t.markCallbackInvalid(n, e)
    })
  }, a.getPacketObj = function(e) {
    var t = null;
    if (e && e.raw) {
      var n = e.raw.ser;
      s.notundef(n) && (t = this.getObjWithSer(n))
    }
    return t
  }, a.callPacketAckCallback = function(e) {
    var t = this;
    if (e && e.raw) {
      var n = e.raw.ser;
      if (s.notundef(n)) {
        t.clearTimerWithSer(n);
        var r = t.getCallbackWithSer(n);
        r && (e.promise ? e.promise.then(function() {
          r(e.error, e.obj)
        }, function(s) {
          s.callFunc = "protocol::callPacketAckCallback", s.message = "Resp Promoise Error: cmd: " + e.cmd + ", ser: " + n;
          var o = i.customError("CALLBACK_ACK_ERR", s);
          t.logger.error("protocol::callPacketAckCallback: promise error " + JSON.stringify(s)), r(o, e.obj, e.content)
        }) : r(e.error, e.obj, e.content))
      }
    }
  }, a.onMessage = function(e) {
    this.heartbeat();
    var t = this.parser.parseResponse(e);
    t.notFound && this.logger.warn("protocol::onMessage: packet not found " + JSON.stringify(t)), t.error ? (t.error.message = t.cmd + " error: " + t.error.message, this.logger.error("protocol::onMessage: packet error " + JSON.stringify(t.error))) : t.content || "heartbeat" === t.cmd || this.logger.warn("protocol::onMessage: packet.content undefined " + JSON.stringify(t)), t.frequencyControlDuration && (this.logger.error("protocol::onMessage: server freq control " + JSON.stringify(t.cmd)), this.frequencyControlMap = this.frequencyControlMap || {}, this.frequencyControlMap[t.cmd] = {
      from: +new Date,
      duration: t.frequencyControlDuration
    }), t.obj = this.getPacketObj(t), "heartbeat" !== t.cmd && "getClientAntispam" !== t.cmd && this.logger.log("protocol::recvCmd: " + t.cmd + " " + t.rawStr);
    var n = "process" + s.capFirstLetter(t.service);
    this[n] ? (this.logger.warn("protocol::recvCmd: " + t.cmd + " " + n, t.content), this[n](t)) : this.logger.warn("protocol::onMessage: " + n + " not found"), this.callPacketAckCallback(t)
  }, a.onMiscError = function(e, t, n) {
    t && this.notifyError(e, t, n)
  }, a.notifyError = function(e, t, n) {
    if (this.isConnected()) {
      var s = [(e || "") + " " + this.name + " " + JSON.stringify(t)];
      n && s.push(n), this.logger.error.apply(this.logger.error, s), this.options.onerror(t, n)
    }
  }, a.emitAPI = function(e) {
    var t = e.type,
      n = e.obj;
    this.api.emit(t, n)
  }, e.exports = o, n(70), n(67), n(66), n(65)
}, , function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(0),
    i = r.undef,
    o = r.notundef,
    a = r.exist,
    c = n(21),
    u = n(50),
    m = "#%@all@%#",
    l = {
      p2p: 0,
      team: 1
    },
    d = {
      0: "p2p",
      1: "team"
    },
    p = Object.keys(l),
    f = u.typeMap,
    g = u.validTypes;

  function y(e) {
    r.verifyOptions(e, "scene to type", "msg::Message"), r.verifyParamValid("scene", e.scene, p, "msg::Message");
    this.scene = l[e.scene], this.to = "" + e.to, this.type = f[e.type], this.resend = e.resend ? 1 : 0, e.resend ? (r.verifyOptions(e, "idClient", "msg::Message"), this.idClient = e.idClient) : this.idClient = r.guid(), o(e.text) && (this.body = "" + e.text), o(e.custom) && ("object" === s(e.custom) ? (this.logger.warn("model::Message: custom should be JsonString, auto transfer"), this.custom = JSON.stringify(e.custom)) : this.custom = "" + e.custom), o(e.body) && (this.body = "" + e.body), o(e.pushContent) && (this.pushContent = "" + e.pushContent), o(e.pushPayload) && (this.pushPayload = "" + e.pushPayload);
    var t = e.apns;
    if (o(t) && "team" === e.scene) {
      var n = t.accounts;
      o(n) && r.verifyParamType("apns.accounts", n, "array", "msg::Message"), this.apnsAccounts = n ? JSON.stringify(n) : m, this.apnsContent = t.content || e.pushContent || "", r.verifyBooleanWithDefault(t, "forcePush", !0, "options.apns", "msg::Message"), this.apnsForcePush = t.forcePush ? 1 : 0
    }
    o(e.isHistoryable) && (this.isHistoryable = e.isHistoryable ? 1 : 0), o(e.isRoamingable) && (this.isRoamingable = e.isRoamingable ? 1 : 0), o(e.isSyncable) && (this.isSyncable = e.isSyncable ? 1 : 0), o(e.cc) && (this.cc = e.cc ? 1 : 0), o(e.isPushable) && (this.isPushable = e.isPushable ? 1 : 0), o(e.isOfflinable) && (this.isOfflinable = e.isOfflinable ? 1 : 0), o(e.isUnreadable) && (this.isUnreadable = e.isUnreadable ? 1 : 0), o(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0), o(e.needMsgReceipt) && (this.needMsgReceipt = e.needMsgReceipt ? 1 : 0), o(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0), o(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0), o(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0), o(e.antiSpamContent) && ("object" === s(e.antiSpamContent) ? (this.logger.warn("model::Message: antiSpamContent should be JsonString, auto transfer"), this.antiSpamContent = JSON.stringify(e.antiSpamContent)) : this.antiSpamContent = "" + e.antiSpamContent), o(e.antiSpamBusinessId) && ("object" === s(e.antiSpamBusinessId) ? (this.logger.warn("model::Message: antiSpamBusinessId should be JsonString, auto transfer"), this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)) : this.antiSpamBusinessId = "" + e.antiSpamBusinessId)
  }
  r.merge(y.prototype, u.prototype), y.prototype.getScene = function() {
    return d[this.scene]
  }, y.getType = u.getType, y.reverse = function(e) {
    var t = {
      scene: d[e.scene] || e.scene,
      from: e.from,
      fromNick: e.fromNick,
      fromClientType: c.reverseType(e.fromClientType),
      fromDeviceId: e.fromDeviceId,
      to: "" + e.to,
      time: +e.time,
      type: y.getType(e),
      text: a(e.body) ? e.body : "",
      isHistoryable: i(e.isHistoryable) || 1 == +e.isHistoryable,
      isRoamingable: i(e.isRoamingable) || 1 == +e.isRoamingable,
      isSyncable: i(e.isSyncable) || 1 == +e.isSyncable,
      cc: i(e.cc) || 1 == +e.cc,
      isPushable: i(e.isPushable) || 1 == +e.isPushable,
      isOfflinable: i(e.isOfflinable) || 1 == +e.isOfflinable,
      isUnreadable: i(e.isUnreadable) || 1 == +e.isUnreadable,
      isReplyMsg: i(e.isReplyMsg) || 1 == +e.isReplyMsg,
      needPushNick: i(e.needPushNick) || 1 == +e.needPushNick,
      needMsgReceipt: 1 == +e.needMsgReceipt,
      isLocal: !1
    };
    if (o(e.isMuted) && (t.isMuted = 1 == +e.isMuted), o(e.resend) && (t.resend = 1 == +e.resend), o(e.idClient) && (t.idClient = e.idClient), o(e.idServer) && (t.idServer = "" + e.idServer), o(e.userUpdateTime) && (t.userUpdateTime = +e.userUpdateTime), o(e.custom) && (t.custom = e.custom), o(e.pushContent) && (t.pushContent = e.pushContent), o(e.pushPayload) && (t.pushPayload = e.pushPayload), o(e.tempTeamMemberCount) && (t.tempTeamMemberCount = +e.tempTeamMemberCount), o(e.apnsAccounts)) {
      if (t.apns = {}, e.apnsAccounts !== m) {
        var n = e.apnsAccounts;
        try {
          t.apns.accounts = JSON.parse(n)
        } catch (e) {
          t.apns.accounts = []
        }
      }
      t.apns.content = e.apnsContent || "", t.apns.forcePush = 1 == +e.apnsForcePush
    }
    return t.status = e.status || "success", o(e.filter) && (t.filter = e.filter), t
  }, y.setExtra = function(e, t) {
    e.target = y.getMsgTarget(e, t), e.sessionId = e.scene + "-" + e.target, u.setFlow(e, t)
  }, y.getMsgTarget = function(e, t) {
    return "p2p" === e.scene ? e.to === t ? e.from : e.to : "team" === e.scene ? e.to : void 0
  }, y.deduplication = function(e) {
    var t, n = {},
      s = [];
    return e.forEach(function(e) {
      t = e.idClient, n[t] || (n[t] = !0, s.push(e))
    }), s
  }, y.sortMsgs = function(e) {
    return e = e.slice(0), r.sortObjArray(e, {
      sortPath: "time"
    }), e
  }, y.getLastMsg = function(e) {
    return (e = y.sortMsgs(e))[e.length - 1]
  }, y.getLastNotIgnoredMsg = function(e) {
    for (var t = null, n = (e = y.sortMsgs(e)).length - 1; n >= 0; n--)
      if (!(t = e[n]).ignore) return t;
    return null
  }, y.getMaxTimetag = function(e) {
    return y.getLastMsg(e).time
  }, y.validScenes = p, y.validTypes = g, e.exports = y
}, function(e, t, n) {
  "use strict";
  var s = n(1),
    r = {
      genUrlSep: function(e) {
        return -1 === (e = "" + e).indexOf("?") ? "?imageView&" : "&"
      },
      url2object: function(e) {
        var t = (e = e || "").indexOf("https") >= 0 ? "https://" : "http://",
          n = e.replace(t, "");
        n.indexOf("?") >= 0 && (n = n.substring(0, n.indexOf("?")));
        var s = n.split("/");
        n = s[0];
        var r = "";
        if (s.length > 0 && (r = s.slice(1).join("/")), -1 === e.indexOf("?")) return {
          protocol: t,
          hostname: n,
          path: r,
          query: {}
        };
        var i = e.substr(e.indexOf("?") + 1).split("&"),
          o = {};
        return i.forEach(function(e) {
          if (e.indexOf("=") > 0) {
            var t = e.split("=");
            o[t[0]] = decodeURIComponent(t[1])
          } else o[e] = ""
        }), {
          protocol: t,
          hostname: n,
          path: r,
          query: o
        }
      },
      object2url: function(e) {
        var t = e.protocol,
          n = e.hostname,
          s = e.path,
          r = e.query;
        t = t || "http://", n = n || "", s && (n = n + "/" + s), r = r || {};
        var i = [];
        for (var o in r) "imageView" !== o && i.push(o + "=" + encodeURIComponent(r[o]));
        return i.length > 0 ? "" + t + n + "?imageView&" + i.join("&") : "" + t + n
      },
      genPrivateUrl: function(e) {
        var t = r.url2object(e),
          n = t.hostname,
          i = t.path,
          o = s.downloadHost,
          a = s.downloadUrl;
        if (n === o) {
          var c = i.indexOf("/");
          if (-1 !== c) {
            var u = i.substring(0, c),
              m = i.substring(c + 1);
            return a.replace("{bucket}", u).replace("{object}", m)
          }
        } else if (-1 !== n.indexOf(o)) {
          var l = t.path,
            d = l.indexOf(".");
          if (-1 !== d) {
            var p = l.substring(0, d),
              f = l;
            return a.replace("{bucket}", p).replace("{object}", f)
          }
        }
        return e
      }
    };
  e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = s.undef,
    i = n(3),
    o = n(45),
    a = n(64),
    c = n(63),
    u = n(62),
    m = n(61),
    l = n(60);

  function d(e) {
    this.mixin(e)
  }
  d.prototype.mixin = function(e) {
    var t = this;
    this.configMap = this.configMap || {}, ["idMap", "cmdConfig", "packetConfig"].forEach(function(n) {
      t.configMap[n] = s.merge({}, t.configMap[n], e.configMap && e.configMap[n])
    }), ["serializeMap", "unserializeMap"].forEach(function(n) {
      t[n] = s.merge({}, t[n], e[n])
    })
  };
  var p, f = new d({
      configMap: o,
      serializeMap: a,
      unserializeMap: c
    }),
    g = new d({
      configMap: u,
      serializeMap: m,
      unserializeMap: l
    });
  d.getInstance = function(e) {
    switch (e) {
      case "IM":
        return f;
      case "Chatroom":
        return g
    }
  }, d.prototype.createCmd = (p = 1, function(e, t) {
    var n = this,
      s = this.configMap.cmdConfig[e];
    return e = {
      SID: s.sid,
      CID: s.cid,
      SER: "heartbeat" === e ? 0 : p++
    }, s.params && (e.Q = [], s.params.forEach(function(s) {
      var i = s.type,
        o = s.name,
        a = s.entity,
        c = t[o];
      if (!r(c)) {
        switch (i) {
          case "PropertyArray":
            i = "ArrayMable", c = c.map(function(e) {
              return {
                t: "Property",
                v: n.serialize(e, a)
              }
            });
            break;
          case "Property":
            c = n.serialize(c, o);
            break;
          case "bool":
            c = c ? "true" : "false"
        }
        e.Q.push({
          t: i,
          v: c
        })
      }
    })), e
  }), d.prototype.parseResponse = function(e) {
    var t = this,
      n = JSON.parse(e),
      r = {
        raw: n,
        rawStr: e,
        error: i.genError(n.code)
      },
      o = t.configMap.packetConfig[n.sid + "_" + n.cid];
    if (!o) return r.notFound = {
      sid: n.sid,
      cid: n.cid
    }, r;
    var a = n.r,
      c = "notify" === o.service && !o.cmd;
    if (r.isNotify = c, c) {
      var u = n.r[1].headerPacket;
      if (o = t.configMap.packetConfig[u.sid + "_" + u.cid], a = n.r[1].body, !o) return r.notFound = {
        sid: u.sid,
        cid: u.cid
      }, r
    }
    if (r.service = o.service, r.cmd = o.cmd, r.error) {
      var m = n.sid + "_" + n.cid;
      if (c && (m = u.sid + "_" + u.cid), r.error.cmd = r.cmd, r.error.callFunc = "protocol::parseResponse: " + m, 416 === r.error.code) {
        var l = a[0];
        l && (r.frequencyControlDuration = 1e3 * l)
      }
    }
    var d = !1;
    return r.error && o.trivialErrorCodes && (d = -1 !== o.trivialErrorCodes.indexOf(r.error.code)), r.error && !d || !o.response || (r.content = {}, o.response.forEach(function(e, i) {
      var o = a[i];
      if (!s.undef(o)) {
        var u = e.type,
          m = e.name,
          l = e.entity || m;
        switch (u) {
          case "Property":
            r.content[m] = t.unserialize(o, l);
            break;
          case "PropertyArray":
            r.content[m] = [], o.forEach(function(e) {
              r.content[m].push(t.unserialize(e, l))
            });
            break;
          case "KVArray":
            r.content[m] = o;
            break;
          case "long":
          case "Long":
          case "byte":
          case "Byte":
          case "Number":
            r.content[m] = +o;
            break;
          default:
            r.content[m] = o
        }
        if (c && "msg" === m || "sysMsg" === m) {
          var d = r.content[m];
          s.isObject(d) && !d.idServer && (d.idServer = "" + n.r[0], d.type && "8" === d.type && d.deletedIdClient && (d.idServer = d.deletedIdClient))
        }
      }
    })), r
  }, d.prototype.serialize = function(e, t) {
    var n = this.serializeMap[t],
      s = {};
    for (var r in n) e.hasOwnProperty(r) && (s[n[r]] = e[r]);
    return s
  }, d.prototype.unserialize = function(e, t) {
    var n = this.unserializeMap[t],
      s = {};
    if (e)
      for (var r in n) e.hasOwnProperty(r) && (s[n[r]] = e[r]);
    return s
  }, e.exports = d
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = s.notundef,
    i = s.fillPropertyWithDefault,
    o = {
      0: "normal",
      1: "owner",
      2: "manager"
    };

  function a(e) {
    s.verifyOptions(e, "teamId", "team::TeamMember"), s.verifyParamAtLeastPresentOne(e, "nickInTeam muteTeam muteNotiType custom", "team::TeamMember"), this.teamId = e.teamId, r(e.account) && (this.account = e.account), r(e.nickInTeam) && (this.nickInTeam = e.nickInTeam), r(e.muteNotiType) ? this.bits = e.muteNotiType : r(e.muteTeam) && (this.bits = 0, e.muteTeam && (this.bits += 1)), r(e.mute) && (this.mute = e.mute ? 1 : 0), r(e.custom) && (this.custom = "" + e.custom)
  }
  a.reverse = function(e) {
    var t = s.copy(e);
    if (r(t.teamId) && (t.teamId = "" + t.teamId), r(t.type) && (t.type = o[t.type]), r(t.active) && (t.active = 1 == +t.active), r(t.valid) && (t.valid = 1 == +t.valid), r(t.mute) && (t.mute = 1 == +t.mute), r(t.joinTime) && (t.joinTime = +t.joinTime), r(t.updateTime) && (t.updateTime = +t.updateTime), r(t.bits)) {
      var n = t.bits;
      delete t.bits, t.muteTeam = !!(1 & n), t.muteNotiType = n
    }
    return r(t.teamId) && r(t.account) && (t.id = a.genId(t.teamId, t.account)), t
  }, a.reverseMembers = function(e) {
    return e.map(function(e) {
      return a.reverse(e)
    })
  }, a.fillProperties = function(e) {
    var t = i(e, "mute", !1),
      n = i(e, "custom", "");
    return t || n
  }, a.genId = function(e, t) {
    return e + "-" + t
  }, a.accounts2ids = function(e, t) {
    return t.map(function(t) {
      return a.genId(e, t)
    })
  }, a.assembleMembers = function(e, t) {
    return s.isArray(t) || (t = [t]), t.map(function(t) {
      return a.assembleMember(e, t)
    })
  }, a.assembleMember = function(e, t) {
    return {
      id: a.genId(e.teamId, t),
      account: t,
      teamId: e.teamId,
      type: "normal",
      nickInTeam: "",
      muteTeam: !1,
      mute: !1,
      joinTime: e.memberUpdateTime,
      updateTime: e.memberUpdateTime,
      active: !0,
      valid: !0
    }
  }, a.assembleOwner = function(e) {
    var t = a.assembleMember(e, e.owner);
    return t.type = "owner", t
  }, e.exports = a
}, , function(e, t, n) {
  "use strict";
  var s = n(0);

  function r() {}
  r.parse = function(e) {
    var t = e.split("|");
    return {
      scene: t[0],
      to: t[1]
    }
  }, r.genSessionByMsg = function(e) {
    return {
      id: e.sessionId,
      scene: e.scene,
      to: e.target,
      updateTime: e.time,
      lastMsg: e
    }
  }, r.appendLastMsg = function(e) {
    var t = e.lastMsg;
    e["last" + s.capFirstLetter(t.type) + "Msg"] = t, e["last" + s.capFirstLetter(t.flow) + "Msg"] = t
  }, r.genSessionByMsgs = function(e, t) {
    var n = e.getLastNotIgnoredMsg(t);
    return n ? r.genSessionByMsg(n) : null
  }, r.trim = function(e) {
    delete e.msgReceiptSendTime, delete e.msgReceiptServerTime, delete e.ack, delete e.unreadMsgs
  }, r.isComplete = function(e) {
    return e.id && e.scene && e.to
  }, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(0),
    i = r.undef,
    o = r.notundef,
    a = n(15).getInstance("IM"),
    c = n(22),
    u = n(17),
    m = {
      customP2p: 100,
      customTeam: 101,
      deleteMsgP2p: 7,
      deleteMsgTeam: 8
    },
    l = {
      0: "applyTeam",
      1: "rejectTeamApply",
      2: "teamInvite",
      3: "rejectTeamInvite",
      5: "friendRequest",
      6: "deleteFriend",
      7: "deleteMsgP2p",
      8: "deleteMsgTeam",
      100: "customP2p",
      101: "customTeam",
      102: "customP2p"
    },
    d = {
      1: "addFriend",
      2: "applyFriend",
      3: "passFriendApply",
      4: "rejectFriendApply"
    },
    p = ["team", "friend", "msg"],
    f = {
      applyTeam: "team",
      rejectTeamApply: "team",
      teamInvite: "team",
      rejectTeamInvite: "team",
      addFriend: "friend",
      applyFriend: "friend",
      passFriendApply: "friend",
      rejectFriendApply: "friend",
      deleteFriend: "friend",
      deleteMsg: "msg"
    };

  function g(e) {
    r.verifyOptions(e, "type to", "sysmsg::SystemMessage"), r.verifyParamValid("type", e.type, g.validTypes, "sysmsg::SystemMessage"), -1 !== e.type.indexOf("custom") && (r.verifyOptions(e, "content", "sysmsg::SystemMessage"), this.attach = e.content, o(e.apnsText) && (this.apnsText = "" + e.apnsText), o(e.pushPayload) && ("object" === s(e.pushPayload) ? (this.logger.warn("model::Message: pushPayload should be JsonString, auto transfer"), this.pushPayload = JSON.stringify(e.pushPayload)) : this.pushPayload = "" + e.pushPayload), o(e.sendToOnlineUsersOnly) && (this.sendToOnlineUsersOnly = e.sendToOnlineUsersOnly ? 0 : 1), o(e.cc) && (this.cc = e.cc ? 1 : 0), o(e.isPushable) && (this.isPushable = e.isPushable ? 1 : 0), o(e.isUnreadable) && (this.isUnreadable = e.isUnreadable ? 1 : 0), o(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0)), this.time = e.time || +new Date, this.type = m[e.type], this.to = e.to, o(e.from) && (this.from = e.from), o(e.ps) && (this.ps = e.ps), o(e.deletedIdClient) && (this.deletedIdClient = e.deletedIdClient), o(e.deletedIdServer) && (this.deletedIdServer = e.deletedIdServer), o(e.opeAccount) && (this.opeAccount = e.opeAccount), o(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0), o(e.antiSpamContent) && ("object" === s(e.antiSpamContent) ? (this.logger.warn("model::Message: antiSpamContent should be JsonString, auto transfer"), this.antiSpamContent = JSON.stringify(e.antiSpamContent)) : this.antiSpamContent = "" + e.antiSpamContent), o(e.antiSpamBusinessId) && ("object" === s(e.antiSpamBusinessId) ? (this.logger.warn("model::Message: antiSpamBusinessId should be JsonString, auto transfer"), this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)) : this.antiSpamBusinessId = "" + e.antiSpamBusinessId), this.idClient = e.idClient || r.guid()
  }
  g.validTypes = Object.keys(m).concat(Object.keys(f)), g.validCategories = ["team", "friend"], g.isCustom = function(e) {
    return "custom" === e.type
  }, g.reverse = function(e) {
    var t = {
      time: +e.time,
      to: e.to,
      type: l[e.type]
    };
    if (o(e.from) && (t.from = e.from), o(e.idServer) && (t.idServer = "" + e.idServer), o(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient), o(e.deletedIdServer) && (t.deletedIdServer = "" + e.deletedIdServer), o(e.deletedMsgTime) && (t.deletedMsgTime = +e.deletedMsgTime), o(e.deletedMsgFromNick) && (t.deletedMsgFromNick = "" + e.deletedMsgFromNick), o(e.opeAccount) && (t.opeAccount = e.opeAccount), o(e.ps) && (t.ps = e.ps), e.attach = e.attach ? "" + e.attach : "", "customP2p" === t.type || "customTeam" === t.type) t.content = e.attach, o(e.apnsText) && (t.apnsText = e.apnsText), o(e.pushPayload) && (t.pushPayload = e.pushPayload), r.merge(t, {
      sendToOnlineUsersOnly: i(e.sendToOnlineUsersOnly) || 0 == +e.sendToOnlineUsersOnly,
      cc: i(e.cc) || 1 == +e.cc,
      isPushable: i(e.isPushable) || 1 == +e.isPushable,
      isUnreadable: i(e.isUnreadable) || 1 == +e.isUnreadable,
      needPushNick: o(e.needPushNick) && 1 == +e.needPushNick
    }), t.scene = t.type.slice(6).toLowerCase(), t.type = "custom";
    else if ("deleteMsgP2p" === t.type || "deleteMsgTeam" === t.type) t.scene = t.type.slice(9).toLowerCase(), t.type = "deleteMsg";
    else {
      if (e.attach) {
        t.attach = {};
        var n = JSON.parse(e.attach);
        o(n.vt) ? (t.type = d[n.vt], delete t.attach) : (o(n.tinfo) && (t.attach.team = c.reverse(a.unserialize(n.tinfo, "team"))), o(n.tlist) && (t.attach.member = u.reverse(a.unserialize(n.tlist, "teamMember"))), o(n.attach) && (t.attach.custom = n.attach))
      }
      t.category = f[t.type], t.read = !1, t.state = "init"
    }
    return o(e.cc) && (t.cc = 1 == +e.cc), t.status = e.status || "success", o(e.filter) && (t.filter = e.filter), t
  }, g.reverseSysMsgs = function(e, t) {
    var n = (t = t || {}).mapper,
      s = r.isFunction(n);
    return e.map(function(e) {
      return e = g.reverse(e), s && (e = n(e)), e
    })
  }, g.completeUnread = function(e) {
    var t;
    return e = e || {}, p.forEach(function(t) {
      delete e[t]
    }), Object.keys(f).forEach(function(n) {
      e[n] = e[n] || 0, e[n] < 0 && (e[n] = 0), e[t = f[n]] = e[t] || 0, e[t] = e[t] + e[n]
    }), e.total = 0, p.forEach(function(t) {
      e.total += e[t]
    }), e
  }, e.exports = g
}, function(e, t, n) {
  "use strict";
  var s, r = n(8);
  var i = ((s = r) && s.__esModule ? s : {
    default: s
  }).default.clientTypeMap;

  function o() {}
  o.reverse = function(e) {
    var t = e;
    return t.type = i[t.type], t
  }, o.reverseType = function(e) {
    return i[e] || e
  }, e.exports = o
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = s.notundef,
    i = s.fillPropertyWithDefault,
    o = Object.keys,
    a = {},
    c = {},
    u = [],
    m = {},
    l = {
      normal: 0,
      advanced: 1
    },
    d = {
      0: "normal",
      1: "advanced"
    },
    p = o(l),
    f = a.joinMode = {
      noVerify: 0,
      needVerify: 1,
      rejectAll: 2
    };
  c.joinMode = {
    0: "noVerify",
    1: "needVerify",
    2: "rejectAll"
  }, u.push("join"), m.joinMode = o(f);
  var g = a.beInviteMode = {
    needVerify: 0,
    noVerify: 1
  };
  c.beInviteMode = {
    0: "needVerify",
    1: "noVerify"
  }, u.push("beInvite"), m.beInviteMode = o(g);
  var y = a.inviteMode = {
    manager: 0,
    all: 1
  };
  c.inviteMode = {
    0: "manager",
    1: "all"
  }, u.push("invite"), m.inviteMode = o(y);
  var h = a.updateTeamMode = {
    manager: 0,
    all: 1
  };
  c.updateTeamMode = {
    0: "manager",
    1: "all"
  }, u.push("updateTeam"), m.updateTeamMode = o(h);
  var v = a.updateCustomMode = {
    manager: 0,
    all: 1
  };

  function b(e) {
    switch (s.verifyOptions(e, "action", "team::Team"), e.action) {
      case "create":
        s.verifyOptions(e, "teamId", !1, "team::Team"), s.verifyOptions(e, "type name", "team::Team"), s.verifyParamValid("type", e.type, p, "team::Team");
        break;
      case "update":
        s.verifyOptions(e, "teamId", "team::Team"), s.verifyOptions(e, "type", !1, "team::Team")
    }
    r(e.teamId) && (this.teamId = e.teamId), r(e.type) && (this.type = l[e.type]), r(e.avatar) && (this.avatar = "" + e.avatar), r(e.name) && (this.name = "" + e.name), r(e.intro) && (this.intro = "" + e.intro), r(e.announcement) && (this.announcement = "" + e.announcement), u.forEach(this.setMode.bind(this, e)), r(e.custom) && (this.custom = "" + e.custom)
  }
  c.updateCustomMode = {
    0: "manager",
    1: "all"
  }, u.push("updateCustom"), m.updateCustomMode = o(v), b.prototype.setMode = function(e, t) {
    r(e[t += "Mode"]) && (s.verifyParamValid(t, e[t], m[t], "team::Team"), this[t] = a[t][e[t]])
  }, b.reverse = function(e, t) {
    var n = s.copy(e);
    if (r(n.teamId) && (n.teamId = "" + n.teamId), r(n.type) && (n.type = d[n.type]), r(n.level) && (n.level = +n.level), r(n.valid) && (n.valid = 1 == +n.valid), r(n.memberNum) && (n.memberNum = +n.memberNum), r(n.memberUpdateTime) && (n.memberUpdateTime = +n.memberUpdateTime), r(n.createTime) && (n.createTime = +n.createTime), r(n.updateTime) && (n.updateTime = +n.updateTime), r(n.validToCurrentUser) && (n.validToCurrentUser = "1" === n.validToCurrentUser), r(n.mute) && (n.mute = "1" === n.mute), r(n.muteType)) switch (n.muteType) {
      case "0":
        n.mute = !1, n.muteType = "none";
        break;
      case "1":
        n.mute = !0, n.muteType = "normal";
        break;
      case "2":
        n.mute = !0, n.muteType = "all"
    } else r(n.mute) && (1 === n.mute ? (n.mute = !0, n.muteType = "normal") : (n.mute = !1, n.muteType = "none"));
    return u.forEach(function(e, t) {
      r(e[t += "Mode"]) && (e[t] = c[t][e[t]])
    }.bind(null, n)), delete n.bits, t || b.fillProperties(n), n
  }, b.fillProperties = function(e) {
    var t = i(e, "beInviteMode", "needVerify"),
      n = i(e, "inviteMode", "manager"),
      s = i(e, "updateTeamMode", "manager"),
      r = i(e, "updateCustomMode", "manager"),
      o = i(e, "avatar", "");
    return t || n || s || r || o
  }, e.exports = b
}, function(e, t, n) {
  "use strict";
  var s = n(5),
    r = s.f,
    i = n(84);

  function o(e) {
    e.onload && this.once("load", e.onload), e.onerror && this.once("error", e.onerror), e.onbeforesend && this.once("beforesend", e.onbeforesend), e.onaftersend && this.once("aftersend", e.onaftersend);
    var t = (e = this.options = s.fetch({
      method: "GET",
      url: "",
      sync: !1,
      data: null,
      headers: {},
      cookie: !1,
      timeout: 6e4,
      type: "text",
      form: null,
      input: null,
      putFileAtEnd: !1,
      proxyUrl: ""
    }, e)).headers;
    s.notexist(t["Content-Type"]) && (t["Content-Type"] = "application/x-www-form-urlencoded"), this.send()
  }
  var a = o.prototype = Object.create(i.prototype);
  a.send = function() {
    var e = this,
      t = e.options;
    setTimeout(function() {
      try {
        try {
          e.emit("beforesend", t)
        } catch (e) {
          console.error("ignore error ajax beforesend,", e)
        }
        e.doSend()
      } catch (t) {
        console.error("ignore error server error,", t), e.onError("serverError", "请求失败:" + t.message)
      }
    }, 0)
  }, a.doSend = r, a.afterSend = function() {
    var e = this;
    setTimeout(function() {
      e.emit("aftersend", e.options)
    }, 0)
  }, a.onLoad = function(e) {
    var t = this.options,
      n = e.status,
      s = e.result;
    if (0 === ("" + n).indexOf("2")) {
      if ("json" === t.type) try {
        s = JSON.parse(s)
      } catch (e) {
        return console.error("ignore error parse json,", e), void this.onError("parseError", s)
      }
      this.emit("load", s)
    } else this.onError("serverError", "服务器返回异常状态", {
      status: n,
      result: s
    })
  }, a.onError = function(e, t, n) {
    var r = s.isObject(n) ? n : {};
    r.code = e || "error", r.message = t || "发生错误", this.emit("error", r)
  }, a.onTimeout = function() {
    this.onError("timeout", "请求超时")
  }, a.abort = function() {
    this.onError("abort", "客户端中止")
  }, a.header = function(e) {
    var t = this;
    if (!s.isArray(e)) return t.getResponseHeader(e || "");
    var n = {};
    return e.forEach(function(e) {
      n[e] = t.header(e)
    }), n
  }, a.getResponseHeader = r, a.destroy = r, e.exports = o
}, function(e, t, n) {
  "use strict";
  var s = n(5),
    r = n(85),
    i = n(83),
    o = n(82),
    a = {},
    c = s.f;

  function u(e) {
    var t = e.upload = "multipart/form-data" === (e.headers || s.o)["Content-Type"],
      n = !1;
    try {
      n = (location.protocol + "//" + location.host).toLowerCase() !== s.url2origin(e.url)
    } catch (e) {}
    return e.cors = n, t || n || e.mode ? function(e) {
      var t = e.mode,
        n = r,
        a = s.getGlobal();
      return !a.FormData && a.document && (t = "iframe"), "iframe" === t && (n = e.upload ? i : o), new n(e)
    }(e) : new r(e)
  }

  function m(e, t, n) {
    var s = a[e];
    if (s) {
      "onload" === t && s.result && (n = function(e, t) {
          t = {
            data: t
          };
          var n = e.result.headers;
          return n && (t.headers = e.req.header(n)), t
        }(s, n)),
        function(e) {
          var t = a[e];
          t && (t.req.destroy(), delete a[e])
        }(e);
      var r = {
        type: t,
        result: n
      };
      c(r), r.stopped || s[t](r.result)
    }
  }

  function l(e, t) {
    var n = s.genUrlSep(e);
    return t = t || "", s.isObject(t) && (t = s.object2query(t)), t && (e += n + t), e
  }

  function d(e, t) {
    t = t || {};
    var n = s.uniqueID(),
      r = {
        result: t.result,
        onload: t.onload || s.f,
        onerror: t.onerror || s.f
      };
    a[n] = r, t.onload = function(e, t) {
      m(e, "onload", t)
    }.bind(null, n), t.onerror = function(e, t) {
      m(e, "onerror", t)
    }.bind(null, n), t.query && (e = l(e, t.query));
    var i = t.method || "";
    return i && !/get/i.test(i) || !t.data || (e = l(e, t.data), t.data = null), t.url = e, r.req = u(t), n
  }
  d.filter = function(e) {
    s.isFunction(e) && (c = e)
  }, d.abort = function(e) {
    var t = a[e];
    t && t.req.abort()
  }, e.exports = d
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
      }
      return function(t, n, s) {
        return n && e(t.prototype, n), s && e(t, s), t
      }
    }();
  var i = function() {
    function e() {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this._entries = []
    }
    return r(e, [{
      key: "append",
      value: function(e, t) {
        if ("string" != typeof e) throw new TypeError("FormData name must be a string");
        if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : s(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
        this._entries.push([e, t])
      }
    }, {
      key: "set",
      value: function(e, t) {
        var n = this.get(e);
        n ? n[1] = t : this.append(e, t)
      }
    }, {
      key: "delete",
      value: function(e) {
        this._entries = this._entries.filter(function(t) {
          return t[0] !== e
        })
      }
    }, {
      key: "entries",
      value: function() {
        return this._entries
      }
    }, {
      key: "get",
      value: function(e) {
        return this._entries.find(function(t) {
          return t[0] === e
        })
      }
    }, {
      key: "getAll",
      value: function(e) {
        return this._entries.filter(function(t) {
          return t[0] === e
        })
      }
    }, {
      key: "has",
      value: function(e) {
        return this._entries.some(function(t) {
          return t[0] === e
        })
      }
    }, {
      key: "keys",
      value: function() {
        return this._entries.map(function(e) {
          return e[0]
        })
      }
    }, {
      key: "values",
      value: function() {
        return this._entries.map(function(e) {
          return e[1]
        })
      }
    }]), e
  }();
  e.exports = i
}, function(e, t) {
  e.exports = function(e, t) {
    var n = t.split(".");
    for (; n.length;) {
      var s = n.shift(),
        r = !1;
      if ("?" == s[s.length - 1] && (s = s.slice(0, -1), r = !0), !(e = e[s]) && r) return e
    }
    return e
  }
}, , , function(e, t, n) {
  "use strict";
  var s = n(14),
    r = n(13),
    i = n(0),
    o = n(1);

  function a(e) {
    switch (i.notundef(e.type) ? i.verifyFileType(e.type, "msg::FileMessage") : e.type = "file", i.verifyOptions(e, "file", "msg::FileMessage"), i.verifyOptions(e.file, "url ext size md5", !0, "file.", "msg::FileMessage"), e.type) {
      case "image":
        c.verifyFile(e.file, "msg::FileMessage");
        break;
      case "audio":
        u.verifyFile(e.file, "msg::FileMessage");
        break;
      case "video":
        m.verifyFile(e.file, "msg::FileMessage")
    }
    r.call(this, e), this.attach = JSON.stringify(e.file)
  }
  a.prototype = Object.create(r.prototype), a.reverse = function(e) {
    var t = r.reverse(e);
    return e.attach = e.attach ? "" + e.attach : "", t.file = e.attach ? JSON.parse(e.attach) : {}, t.file.url = (0, s.genPrivateUrl)(t.file.url), "audio" === t.type && (t.file.mp3Url = t.file.url + "?audioTrans&type=mp3"), o.httpsEnabled && (t.file.url = t.file.url.replace("http", "https")), t
  }, e.exports = a;
  var c = n(134),
    u = n(133),
    m = n(132)
}, function(e, t, n) {
  "use strict";
  var s = n(14),
    r = n(0),
    i = {
      unknown: 0,
      male: 1,
      female: 2
    },
    o = {
      0: "unknown",
      1: "male",
      2: "female"
    };

  function a(e) {
    r.merge(this, e), r.notundef(this.gender) && (r.verifyParamValid("gender", this.gender, a.validGenders, "user::User"), this.gender = i[this.gender]), r.notundef(this.email) && "" !== this.email && r.verifyEmail("email", this.email, "user::User"), r.notundef(this.birth) && "" !== this.birth && r.verifyBirth("birth", this.birth, "user::User"), r.notundef(this.tel) && "" !== this.tel && r.verifyTel("tel", this.tel, "user::User")
  }
  a.reverse = function(e) {
    var t = r.filterObj(e, "account nick avatar sign gender email birth tel custom createTime updateTime");
    return r.notundef(t.avatar) && (t.avatar = (0, s.genPrivateUrl)(t.avatar)), r.notundef(t.gender) && (t.gender = o[t.gender]), r.notundef(t.createTime) && (t.createTime = +t.createTime), r.notundef(t.updateTime) && (t.updateTime = +t.updateTime), t
  }, a.reverseUsers = function(e) {
    return e.map(function(e) {
      return a.reverse(e)
    })
  }, a.validGenders = Object.keys(i), e.exports = a
}, function(e, t) {
  e.exports = function(e) {
    var t = n.call(e);
    return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
  };
  var n = Object.prototype.toString
}, function(e, t, n) {
  "use strict";
  var s = {
      link: {
        id: 1,
        heartbeat: 2
      },
      misc: {
        id: 6,
        getSimpleNosToken: 1,
        getNosToken: 2,
        notifyUploadLog: 3,
        uploadSdkLogUrl: 4,
        audioToText: 5,
        processImage: 6,
        getClientAntispam: 17,
        getNosTokenTrans: 7,
        notifyTransLog: 8,
        fetchFile: 9,
        fetchFileList: 10,
        removeFile: 11
      }
    },
    r = {
      heartbeat: {
        sid: s.link.id,
        cid: s.link.heartbeat
      },
      getSimpleNosToken: {
        sid: s.misc.id,
        cid: s.misc.getSimpleNosToken,
        params: [{
          type: "int",
          name: "num"
        }]
      },
      getNosToken: {
        sid: s.misc.id,
        cid: s.misc.getNosToken,
        params: [{
          type: "String",
          name: "responseBody"
        }]
      },
      uploadSdkLogUrl: {
        sid: s.misc.id,
        cid: s.misc.uploadSdkLogUrl,
        params: [{
          type: "string",
          name: "url"
        }]
      },
      audioToText: {
        sid: s.misc.id,
        cid: s.misc.audioToText,
        params: [{
          type: "Property",
          name: "audioToText"
        }]
      },
      processImage: {
        sid: s.misc.id,
        cid: s.misc.processImage,
        params: [{
          type: "String",
          name: "url"
        }, {
          type: "PropertyArray",
          name: "imageOps",
          entity: "imageOp"
        }]
      },
      getClientAntispam: {
        sid: s.misc.id,
        cid: s.misc.getClientAntispam,
        params: [{
          type: "Property",
          name: "clientAntispam"
        }]
      },
      getNosTokenTrans: {
        sid: s.misc.id,
        cid: s.misc.getNosTokenTrans,
        params: [{
          type: "Property",
          name: "transToken"
        }]
      },
      fetchFile: {
        sid: s.misc.id,
        cid: s.misc.fetchFile,
        params: [{
          type: "String",
          name: "docId"
        }]
      },
      fetchFileList: {
        sid: s.misc.id,
        cid: s.misc.fetchFileList,
        params: [{
          type: "Property",
          name: "fileListParam"
        }]
      },
      removeFile: {
        sid: s.misc.id,
        cid: s.misc.removeFile,
        params: [{
          type: "String",
          name: "docId"
        }]
      }
    };
  e.exports = {
    idMap: s,
    cmdConfig: r,
    packetConfig: {
      "1_2": {
        service: "link",
        cmd: "heartbeat"
      },
      "6_1": {
        service: "misc",
        cmd: "getSimpleNosToken",
        response: [{
          type: "PropertyArray",
          name: "nosTokens",
          entity: "nosToken"
        }]
      },
      "6_2": {
        service: "misc",
        cmd: "getNosToken",
        response: [{
          type: "Property",
          name: "nosToken"
        }]
      },
      "6_3": {
        service: "misc",
        cmd: "notifyUploadLog"
      },
      "6_5": {
        service: "misc",
        cmd: "audioToText",
        response: [{
          type: "String",
          name: "text"
        }]
      },
      "6_6": {
        service: "misc",
        cmd: "processImage",
        response: [{
          type: "String",
          name: "url"
        }]
      },
      "6_17": {
        service: "misc",
        cmd: "getClientAntispam",
        response: [{
          type: "Property",
          name: "clientAntispam"
        }]
      },
      "6_7": {
        service: "misc",
        cmd: "getNosTokenTrans",
        response: [{
          type: "Property",
          name: "nosToken"
        }, {
          type: "String",
          name: "docId"
        }]
      },
      "6_8": {
        service: "misc",
        cmd: "notifyTransLog",
        response: [{
          type: "Property",
          name: "transInfo"
        }]
      },
      "6_9": {
        service: "misc",
        cmd: "fetchFile",
        response: [{
          type: "Property",
          name: "info",
          entity: "transInfo"
        }]
      },
      "6_10": {
        service: "misc",
        cmd: "fetchFileList",
        response: [{
          type: "PropertyArray",
          name: "list",
          entity: "transInfo"
        }, {
          type: "Number",
          name: "totalCount"
        }]
      },
      "6_11": {
        service: "misc",
        cmd: "removeFile",
        response: [{
          type: "String",
          name: "res"
        }]
      }
    }
  }
}, function(module, exports, __webpack_require__) {
  (function(global, module) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
    function getGlobal() {
      return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== global ? global : {}
    }
    var root = getGlobal(),
      io = module.exports;
    void 0 === root.location && (root.location = null), root.io ? module && (module.exports = io = root.io) : root.io = io,
      function() {
        ! function(e, t) {
          var n = e;
          n.version = "0.9.11", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function(e, s) {
            var r, i, o = n.util.parseUri(e);
            t && t.location && (o.protocol = o.protocol || t.location.protocol.slice(0, -1), o.host = o.host || (t.document ? t.document.domain : t.location.hostname), o.port = o.port || t.location.port), r = n.util.uniqueUri(o);
            var a = {
              host: o.host,
              secure: "https" === o.protocol,
              port: o.port || ("https" === o.protocol ? 443 : 80),
              query: o.query || ""
            };
            return n.util.merge(a, s), !a["force new connection"] && n.sockets[r] || (i = new n.Socket(a)), !a["force new connection"] && i && (n.sockets[r] = i), (i = i || n.sockets[r]).of(o.path.length > 1 ? o.path : "")
          }
        }(module.exports, root),
        function(e, t) {
          var n = e.util = {},
            s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
          n.parseUri = function(e) {
            for (var t = s.exec(e || ""), n = {}, i = 14; i--;) n[r[i]] = t[i] || "";
            return n
          }, n.uniqueUri = function(e) {
            var n = e.protocol,
              s = e.host,
              r = e.port;
            return "document" in t ? (s = s || document.domain, r = r || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (s = s || "localhost", r || "https" != n || (r = 443)), (n || "http") + "://" + s + ":" + (r || 80)
          }, n.query = function(e, t) {
            var s = n.chunkQuery(e || ""),
              r = [];
            for (var i in n.merge(s, n.chunkQuery(t || "")), s) s.hasOwnProperty(i) && r.push(i + "=" + s[i]);
            return r.length ? "?" + r.join("&") : ""
          }, n.chunkQuery = function(e) {
            for (var t, n = {}, s = e.split("&"), r = 0, i = s.length; r < i; ++r)(t = s[r].split("="))[0] && (n[t[0]] = t[1]);
            return n
          };
          var i = !1;
          n.load = function(e) {
            if (document && "complete" === document.readyState || i) return e();
            n.on(t, "load", e, !1)
          }, n.on = function(e, t, n, s) {
            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, s)
          }, n.request = function(e) {
            if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
            if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS)) return new XMLHttpRequest;
            if (!e) try {
              return new(root[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
            } catch (e) {}
            return null
          }, void 0 !== root && n.load(function() {
            i = !0
          }), n.defer = function(e) {
            if (!n.ua.webkit || "undefined" != typeof importScripts) return e();
            n.load(function() {
              setTimeout(e, 100)
            })
          }, n.merge = function(e, t, s, r) {
            var i, o = r || [],
              a = void 0 === s ? 2 : s;
            for (i in t) t.hasOwnProperty(i) && n.indexOf(o, i) < 0 && ("object" == typeof e[i] && a ? n.merge(e[i], t[i], a - 1, o) : (e[i] = t[i], o.push(t[i])));
            return e
          }, n.mixin = function(e, t) {
            n.merge(e.prototype, t.prototype)
          }, n.inherit = function(e, t) {
            function n() {}
            n.prototype = t.prototype, e.prototype = new n
          }, n.isArray = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          }, n.intersect = function(e, t) {
            for (var s = [], r = e.length > t.length ? e : t, i = e.length > t.length ? t : e, o = 0, a = i.length; o < a; o++) ~n.indexOf(r, i[o]) && s.push(i[o]);
            return s
          }, n.indexOf = function(e, t, n) {
            var s = e.length;
            for (n = n < 0 ? n + s < 0 ? 0 : n + s : n || 0; n < s && e[n] !== t; n++);
            return s <= n ? -1 : n
          }, n.toArray = function(e) {
            for (var t = [], n = 0, s = e.length; n < s; n++) t.push(e[n]);
            return t
          }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
              var e = new XMLHttpRequest
            } catch (e) {
              return !1
            }
            return null != e.withCredentials
          }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
        }(void 0 !== io ? io : module.exports, root),
        function(e, t) {
          function n() {}
          e.EventEmitter = n, n.prototype.on = function(e, n) {
            return this.$events || (this.$events = {}), this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n, this
          }, n.prototype.addListener = n.prototype.on, n.prototype.once = function(e, t) {
            var n = this;

            function s() {
              n.removeListener(e, s), t.apply(this, arguments)
            }
            return s.listener = t, this.on(e, s), this
          }, n.prototype.removeListener = function(e, n) {
            if (this.$events && this.$events[e]) {
              var s = this.$events[e];
              if (t.util.isArray(s)) {
                for (var r = -1, i = 0, o = s.length; i < o; i++)
                  if (s[i] === n || s[i].listener && s[i].listener === n) {
                    r = i;
                    break
                  }
                if (r < 0) return this;
                s.splice(r, 1), s.length || delete this.$events[e]
              } else(s === n || s.listener && s.listener === n) && delete this.$events[e]
            }
            return this
          }, n.prototype.removeAllListeners = function(e) {
            return void 0 === e ? (this.$events = {}, this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
          }, n.prototype.listeners = function(e) {
            return this.$events || (this.$events = {}), this.$events[e] || (this.$events[e] = []), t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]), this.$events[e]
          }, n.prototype.emit = function(e) {
            if (!this.$events) return !1;
            var n = this.$events[e];
            if (!n) return !1;
            var s = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof n) n.apply(this, s);
            else {
              if (!t.util.isArray(n)) return !1;
              for (var r = n.slice(), i = 0, o = r.length; i < o; i++) r[i].apply(this, s)
            }
            return !0
          }
        }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
        function(exports, nativeJSON) {
          "use strict";
          if (nativeJSON && nativeJSON.parse) return exports.JSON = {
            parse: nativeJSON.parse,
            stringify: nativeJSON.stringify
          };
          var JSON = exports.JSON = {};

          function f(e) {
            return e < 10 ? "0" + e : e
          }

          function date(e, t) {
            return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
          }
          var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
              "\b": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
            },
            rep;

          function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
              var t = meta[e];
              return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
          }

          function str(e, t) {
            var n, s, r, i, o, a = gap,
              c = t[e];
            switch (c instanceof Date && (c = date(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
              case "string":
                return quote(c);
              case "number":
                return isFinite(c) ? String(c) : "null";
              case "boolean":
              case "null":
                return String(c);
              case "object":
                if (!c) return "null";
                if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                  for (i = c.length, n = 0; n < i; n += 1) o[n] = str(n, c) || "null";
                  return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]", gap = a, r
                }
                if (rep && "object" == typeof rep)
                  for (i = rep.length, n = 0; n < i; n += 1) "string" == typeof rep[n] && (r = str(s = rep[n], c)) && o.push(quote(s) + (gap ? ": " : ":") + r);
                else
                  for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (r = str(s, c)) && o.push(quote(s) + (gap ? ": " : ":") + r);
                return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}", gap = a, r
            }
          }
          JSON.stringify = function(e, t, n) {
            var s;
            if (gap = "", indent = "", "number" == typeof n)
              for (s = 0; s < n; s += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("socket.io:: replacer cannot JSON.stringify");
            return str("", {
              "": e
            })
          }, JSON.parse = function(text, reviver) {
            var j;

            function walk(e, t) {
              var n, s, r = e[t];
              if (r && "object" == typeof r)
                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (void 0 !== (s = walk(r, n)) ? r[n] = s : delete r[n]);
              return reviver.call(e, t, r)
            }
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
              })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
              "": j
            }, "") : j;
            throw new SyntaxError("socket.io:: reviver cannot JSON.parse")
          }
        }(void 0 !== io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0),
        function(e, t) {
          var n = e.parser = {},
            s = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
            r = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
            i = n.advice = ["reconnect"],
            o = t.JSON,
            a = t.util.indexOf;
          n.encodePacket = function(e) {
            var t = a(s, e.type),
              n = e.id || "",
              c = e.endpoint || "",
              u = e.ack,
              m = null;
            switch (e.type) {
              case "error":
                var l = e.reason ? a(r, e.reason) : "",
                  d = e.advice ? a(i, e.advice) : "";
                "" === l && "" === d || (m = l + ("" !== d ? "+" + d : ""));
                break;
              case "message":
                "" !== e.data && (m = e.data);
                break;
              case "event":
                var p = {
                  name: e.name
                };
                e.args && e.args.length && (p.args = e.args), m = o.stringify(p);
                break;
              case "json":
                m = o.stringify(e.data);
                break;
              case "connect":
                e.qs && (m = e.qs);
                break;
              case "ack":
                m = e.ackId + (e.args && e.args.length ? "+" + o.stringify(e.args) : "")
            }
            var f = [t, n + ("data" == u ? "+" : ""), c];
            return null != m && f.push(m), f.join(":")
          }, n.encodePayload = function(e) {
            var t = "";
            if (1 == e.length) return e[0];
            for (var n = 0, s = e.length; n < s; n++) {
              t += "�" + e[n].length + "�" + e[n]
            }
            return t
          };
          var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
          n.decodePacket = function(e) {
            if (!(a = e.match(c))) return {};
            var t = a[2] || "",
              n = (e = a[5] || "", {
                type: s[a[1]],
                endpoint: a[4] || ""
              });
            switch (t && (n.id = t, a[3] ? n.ack = "data" : n.ack = !0), n.type) {
              case "error":
                var a = e.split("+");
                n.reason = r[a[0]] || "", n.advice = i[a[1]] || "";
                break;
              case "message":
                n.data = e || "";
                break;
              case "event":
                try {
                  var u = o.parse(e);
                  n.name = u.name, n.args = u.args
                } catch (e) {}
                n.args = n.args || [];
                break;
              case "json":
                try {
                  n.data = o.parse(e)
                } catch (e) {}
                break;
              case "connect":
                n.qs = e || "";
                break;
              case "ack":
                if ((a = e.match(/^([0-9]+)(\+)?(.*)/)) && (n.ackId = a[1], n.args = [], a[3])) try {
                  n.args = a[3] ? o.parse(a[3]) : []
                } catch (e) {}
            }
            return n
          }, n.decodePayload = function(e) {
            var t = function(e, t) {
              for (var n = 0, s = e; s < t.length; s++) {
                if ("�" == t.charAt(s)) return n;
                n++
              }
              return n
            };
            if ("�" == e.charAt(0)) {
              for (var s = [], r = 1, i = ""; r < e.length; r++)
                if ("�" == e.charAt(r)) {
                  var o = e.substr(r + 1).substr(0, i);
                  if ("�" != e.charAt(r + 1 + Number(i)) && r + 1 + Number(i) != e.length) {
                    var a = Number(i);
                    l = t(r + a + 1, e), o = e.substr(r + 1).substr(0, a + l), r += l
                  }
                  s.push(n.decodePacket(o)), r += Number(i) + 1, i = ""
                } else i += e.charAt(r);
              return s
            }
            return [n.decodePacket(e)]
          }
        }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
        function(e, t) {
          function n(e, t) {
            this.socket = e, this.sessid = t
          }
          e.Transport = n, t.util.mixin(n, t.EventEmitter), n.prototype.heartbeats = function() {
            return !0
          }, n.prototype.onData = function(e) {
            if (this !== this.socket.transport) return this;
            if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== e) {
              var n = t.parser.decodePayload(e);
              if (n && n.length)
                for (var s = 0, r = n.length; s < r; s++) this.onPacket(n[s])
            }
            return this
          }, n.prototype.onPacket = function(e) {
            return this.socket.setHeartbeatTimeout(), "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(), "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1), this.socket.onPacket(e), this)
          }, n.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
              var e = this;
              this.closeTimeout = setTimeout(function() {
                e.onDisconnect()
              }, this.socket.closeTimeout)
            }
          }, n.prototype.onDisconnect = function() {
            return this.isOpen && this.close(), this.clearTimeouts(), this.socket.transport === this ? this.socket.onDisconnect() : this.socket.setBuffer(!1), this
          }, n.prototype.onConnect = function() {
            return this.socket.onConnect(), this
          }, n.prototype.clearCloseTimeout = function() {
            this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
          }, n.prototype.clearTimeouts = function() {
            this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
          }, n.prototype.packet = function(e) {
            this.send(t.parser.encodePacket(e))
          }, n.prototype.onHeartbeat = function(e) {
            this.packet({
              type: "heartbeat"
            })
          }, n.prototype.onOpen = function() {
            this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
          }, n.prototype.onClose = function() {
            this.isOpen = !1, this.socket.transport === this ? this.socket.onClose() : this.socket.setBuffer(!1), this.onDisconnect(), this.onDisconnectDone instanceof Function && this.onDisconnectDone(null)
          }, n.prototype.onDisconnectDone = function() {}, n.prototype.prepareUrl = function() {
            var e = this.socket.options;
            return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
          }, n.prototype.ready = function(e, t) {
            t.call(this)
          }
        }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
        function(e, t, n) {
          function s(e) {
            if (this.options = {
                port: 80,
                secure: !1,
                document: "document" in n && document,
                resource: "socket.io",
                transports: e.transports || t.transports,
                "connect timeout": 1e4,
                "try multiple transports": !0,
                reconnect: !0,
                "reconnection delay": 500,
                "reconnection limit": 1 / 0,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": !1,
                "auto connect": !0,
                "flash policy port": 10843,
                manualFlush: !1
              }, t.util.merge(this.options, e), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
              var s = this;
              t.util.on(n, "beforeunload", function() {
                s.disconnectSync()
              }, !1)
            }
            this.options["auto connect"] && this.connect()
          }

          function r() {}
          e.Socket = s, t.util.mixin(s, t.EventEmitter), s.prototype.of = function(e) {
            return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this, e), "" !== e && this.namespaces[e].packet({
              type: "connect"
            })), this.namespaces[e]
          }, s.prototype.publish = function() {
            var e;
            for (var t in this.emit.apply(this, arguments), this.namespaces) this.namespaces.hasOwnProperty(t) && (e = this.of(t)).$emit.apply(e, arguments)
          }, s.prototype.handshake = function(e) {
            var n = this,
              s = this.options;

            function i(t) {
              t instanceof Error ? (n.connecting = !1, n.onError(t.message)) : (console.log("SocketIO handshake success " + t), e.apply(null, t.split(":")))
            }
            var o = ["http" + (s.secure ? "s" : "") + ":/", s.host + ":" + s.port, s.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
            if (this.isXDomain() && !t.util.ua.hasCORS && document && document.getElementsByTagName) {
              var a = document.getElementsByTagName("script")[0],
                c = document.createElement("script");
              c.src = o + "&jsonp=" + t.j.length, c.onreadystatechange = function() {
                "loaded" == this.readyState && c.parentNode && (c.parentNode.removeChild(c), n.connecting = !1, !n.reconnecting && n.onError("Server down or port not open"), n.publish("handshake_failed"))
              }, a.parentNode.insertBefore(c, a), t.j.push(function(e) {
                i(e), c.parentNode.removeChild(c)
              })
            } else {
              var u = t.util.request();
              u.open("GET", o, !0), u.timeout = 1e4, this.isXDomain() && (u.withCredentials = !0), u.onreadystatechange = function() {
                4 == u.readyState && (u.onreadystatechange = r, 200 == u.status ? i(u.responseText) : 403 == u.status ? (n.connecting = !1, n.onError(u.responseText), n.publish("handshake_failed")) : (n.connecting = !1, !n.reconnecting && n.onError(u.responseText), n.publish("handshake_failed")))
              }, u.ontimeout = function(e) {
                n.connecting = !1, !n.reconnecting && n.onError(u.responseText), n.publish("handshake_failed")
              }, u.send(null)
            }
          }, s.prototype.connect = function(e) {
            if (this.connecting) return this;
            var n = this;
            return n.connecting = !0, this.handshake(function(s, r, i, o) {
              n.sessionid = s, n.closeTimeout = 1e3 * i, n.heartbeatTimeout = 1e3 * r, n.transports || (n.transports = n.origTransports = o ? t.util.intersect(o.split(","), n.options.transports) : n.options.transports), console.log("SocketIO transports: " + n.transports + "opt:" + n.options.transports), n.setHeartbeatTimeout(), n.once("connect", function() {
                clearTimeout(n.connectTimeoutTimer), n.connectTimeoutTimer = null, e && "function" == typeof e && e()
              }), n.doConnect()
            }), this
          }, s.prototype.doConnect = function() {
            var e = this;
            if (e.transport && e.transport.clearTimeouts(), e.transport = e.getTransport(e.transports), !e.transport) return e.publish("connect_failed");
            e.transport.ready(e, function() {
              e.connecting = !0, e.publish("connecting", e.transport.name), e.transport.open(), e.options["connect timeout"] && (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer), e.connectTimeoutTimer = setTimeout(e.tryNextTransport.bind(e), e.options["connect timeout"]))
            })
          }, s.prototype.getTransport = function(e) {
            for (var n, s = e || this.transports, r = 0; n = s[r]; r++) {
              if (console.log("SocketIO check " + n + " " + t.Transport[n].check(this) + " , cors " + t.Transport[n].xdomainCheck(this)), t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this))) return new t.Transport[n](this, this.sessionid)
            }
            return null
          }, s.prototype.tryNextTransport = function() {
            console.log("SocketIO try next transport");
            if (!this.connected && (this.connecting = !1, this.options["try multiple transports"])) {
              for (var e = this.transports; e.length > 0 && e.splice(0, 1)[0] != this.transport.name;);
              e.length ? this.doConnect() : this.publish("connect_failed")
            }
          }, s.prototype.setHeartbeatTimeout = function() {
            if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
              var e = this;
              this.heartbeatTimeoutTimer = setTimeout(function() {
                e.transport && e.transport.onClose()
              }, this.heartbeatTimeout)
            }
          }, s.prototype.packet = function(e) {
            return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e), this
          }, s.prototype.setBuffer = function(e) {
            this.doBuffer = e, !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
          }, s.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer), this.buffer = []
          }, s.prototype.disconnect = function() {
            return (this.connected || this.connecting) && (this.open && this.of("").packet({
              type: "disconnect"
            }), this.onDisconnect("booted")), this
          }, s.prototype.disconnectSync = function() {
            var e = t.util.request(),
              n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            e.open("GET", n, !1), e.send(null), this.onDisconnect("booted")
          }, s.prototype.isXDomain = function() {
            var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
            return this.options.host !== n.location.hostname || this.options.port != e
          }, s.prototype.onConnect = function() {
            this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
          }, s.prototype.onOpen = function() {
            this.open = !0
          }, s.prototype.onClose = function() {
            this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
          }, s.prototype.onPacket = function(e) {
            this.of(e.endpoint).onPacket(e)
          }, s.prototype.onError = function(e) {
            e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", e && e.reason ? e.reason : e)
          }, s.prototype.onDisconnect = function(e) {
            var t = this.connected,
              n = this.connecting;
            this.connected = !1, this.connecting = !1, this.open = !1, (t || n) && (this.transport.close(), this.transport.clearTimeouts(), t && (this.publish("disconnect", e), "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()), n && this.tryNextTransport())
          }, s.prototype.reconnect = function() {
            this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
            var e = this,
              t = this.options["max reconnection attempts"],
              n = this.options["try multiple transports"],
              s = this.options["reconnection limit"];

            function r() {
              if (e.connected) {
                for (var t in e.namespaces) e.namespaces.hasOwnProperty(t) && "" !== t && e.namespaces[t].packet({
                  type: "connect"
                });
                e.publish("reconnect", e.transport.name, e.reconnectionAttempts)
              }
              clearTimeout(e.reconnectionTimer), e.removeListener("connect_failed", i), e.removeListener("connect", i), e.reconnecting = !1, delete e.reconnectionAttempts, delete e.reconnectionDelay, delete e.reconnectionTimer, delete e.redoTransports, e.options["try multiple transports"] = n
            }

            function i() {
              if (e.reconnecting) return e.connected ? r() : e.connecting && e.reconnecting ? e.reconnectionTimer = setTimeout(i, 1e3) : void(e.reconnectionAttempts++ >= t ? e.redoTransports ? (e.publish("reconnect_failed"), r()) : (e.on("connect_failed", i), e.options["try multiple transports"] = !0, e.transports = e.origTransports, e.transport = e.getTransport(), e.redoTransports = !0, e.connect()) : (e.reconnectionDelay < s && (e.reconnectionDelay *= 2), e.connect(), e.publish("reconnecting", e.reconnectionDelay, e.reconnectionAttempts), e.reconnectionTimer = setTimeout(i, e.reconnectionDelay)))
            }
            this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(i, this.reconnectionDelay), this.on("connect", i)
          }
        }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports, root),
        function(e, t) {
          function n(e, t) {
            this.socket = e, this.name = t || "", this.flags = {}, this.json = new s(this, "json"), this.ackPackets = 0, this.acks = {}
          }

          function s(e, t) {
            this.namespace = e, this.name = t
          }
          e.SocketNamespace = n, t.util.mixin(n, t.EventEmitter), n.prototype.$emit = t.EventEmitter.prototype.emit, n.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
          }, n.prototype.packet = function(e) {
            return e.endpoint = this.name, this.socket.packet(e), this.flags = {}, this
          }, n.prototype.send = function(e, t) {
            var n = {
              type: this.flags.json ? "json" : "message",
              data: e
            };
            return "function" == typeof t && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = t), this.packet(n)
          }, n.prototype.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1),
              n = t[t.length - 1],
              s = {
                type: "event",
                name: e
              };
            return "function" == typeof n && (s.id = ++this.ackPackets, s.ack = "data", this.acks[s.id] = n, t = t.slice(0, t.length - 1)), s.args = t, this.packet(s)
          }, n.prototype.disconnect = function() {
            return "" === this.name ? this.socket.disconnect() : (this.packet({
              type: "disconnect"
            }), this.$emit("disconnect")), this
          }, n.prototype.onPacket = function(e) {
            var n = this;

            function s() {
              n.packet({
                type: "ack",
                args: t.util.toArray(arguments),
                ackId: e.id
              })
            }
            switch (e.type) {
              case "connect":
                this.$emit("connect");
                break;
              case "disconnect":
                "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                break;
              case "message":
              case "json":
                var r = ["message", e.data];
                "data" == e.ack ? r.push(s) : e.ack && this.packet({
                  type: "ack",
                  ackId: e.id
                }), this.$emit.apply(this, r);
                break;
              case "event":
                r = [e.name].concat(e.args);
                "data" == e.ack && r.push(s), this.$emit.apply(this, r);
                break;
              case "ack":
                this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                break;
              case "error":
                e.advice ? this.socket.onError(e) : "unauthorized" == e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
            }
          }, s.prototype.send = function() {
            this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
          }, s.prototype.emit = function() {
            this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
          }
        }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
        function(e, t, n) {
          function s(e) {
            t.Transport.apply(this, arguments)
          }
          e.websocket = s, t.util.inherit(s, t.Transport), s.prototype.name = "websocket", s.prototype.open = function() {
            var e, s = t.util.query(this.socket.options.query),
              r = this;
            return e || (e = n.MozWebSocket || n.WebSocket), this.websocket = new e(this.prepareUrl() + s), this.websocket.onopen = function() {
              r.onOpen(), r.socket.setBuffer(!1)
            }, this.websocket.onmessage = function(e) {
              r.onData(e.data)
            }, this.websocket.onclose = function() {
              r.socket.setBuffer(!0), r.onClose()
            }, this.websocket.onerror = function(e) {
              r.onError(e)
            }, this
          }, t.util.ua.iDevice ? s.prototype.send = function(e) {
            var t = this;
            return setTimeout(function() {
              t.websocket.send(e)
            }, 0), this
          } : s.prototype.send = function(e) {
            return this.websocket.send(e), this
          }, s.prototype.payload = function(e) {
            for (var t = 0, n = e.length; t < n; t++) this.packet(e[t]);
            return this
          }, s.prototype.close = function() {
            return this.websocket.close(), this
          }, s.prototype.onError = function(e) {
            this.socket.onError(e)
          }, s.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
          }, s.check = function() {
            return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
          }, s.xdomainCheck = function() {
            return !0
          }, t.transports.push("websocket")
        }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root),
        function(e, t, n) {
          function s(e) {
            e && (t.Transport.apply(this, arguments), this.sendBuffer = [])
          }

          function r() {}
          e.XHR = s, t.util.inherit(s, t.Transport), s.prototype.open = function() {
            return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
          }, s.prototype.payload = function(e) {
            for (var n = [], s = 0, r = e.length; s < r; s++) n.push(t.parser.encodePacket(e[s]));
            this.send(t.parser.encodePayload(n))
          }, s.prototype.send = function(e) {
            return this.post(e), this
          }, s.prototype.post = function(e) {
            var t = this;
            this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = function() {
              this.onload = r, t.socket.setBuffer(!1)
            } : this.sendXHR.onreadystatechange = function() {
              4 == this.readyState && (this.onreadystatechange = r, t.posting = !1, 200 == this.status ? t.socket.setBuffer(!1) : t.onClose())
            }, this.sendXHR.send(e)
          }, s.prototype.close = function() {
            return this.onClose(), this
          }, s.prototype.request = function(e) {
            var n = t.util.request(this.socket.isXDomain()),
              s = t.util.query(this.socket.options.query, "t=" + +new Date);
            if (n.open(e || "GET", this.prepareUrl() + s, !0), "POST" == e) try {
              n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
            } catch (e) {}
            return n
          }, s.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
          }, s.check = function(e, s) {
            try {
              var r = t.util.request(s),
                i = n.XDomainRequest && r instanceof XDomainRequest,
                o = e && e.options && e.options.secure ? "https:" : "http:",
                a = n.location && o != n.location.protocol;
              if (r && (!i || !a)) return !0
            } catch (e) {}
            return !1
          }, s.xdomainCheck = function(e) {
            return s.check(e, !0)
          }
        }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root),
        function(e, t) {
          function n(e) {
            t.Transport.XHR.apply(this, arguments)
          }
          e.htmlfile = n, t.util.inherit(n, t.Transport.XHR), n.prototype.name = "htmlfile", n.prototype.get = function() {
            this.doc = new(root[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentroot.s = this;
            var e = this.doc.createElement("div");
            e.className = "socketio", this.doc.body.appendChild(e), this.iframe = this.doc.createElement("iframe"), e.appendChild(this.iframe);
            var n = this,
              s = t.util.query(this.socket.options.query, "t=" + +new Date);
            this.iframe.src = this.prepareUrl() + s, t.util.on(root, "unload", function() {
              n.destroy()
            })
          }, n.prototype._ = function(e, t) {
            this.onData(e);
            try {
              var n = t.getElementsByTagName("script")[0];
              n.parentNode.removeChild(n)
            } catch (e) {}
          }, n.prototype.destroy = function() {
            if (this.iframe) {
              try {
                this.iframe.src = "about:blank"
              } catch (e) {}
              this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
            }
          }, n.prototype.close = function() {
            return this.destroy(), t.Transport.XHR.prototype.close.call(this)
          }, n.check = function(e) {
            if (void 0 !== root && ["Active"].concat("Object").join("X") in root) try {
              return new(root[["Active"].concat("Object").join("X")])("htmlfile") && t.Transport.XHR.check(e)
            } catch (e) {}
            return !1
          }, n.xdomainCheck = function() {
            return !1
          }, t.transports.push("htmlfile")
        }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports),
        function(e, t, n) {
          function s() {
            t.Transport.XHR.apply(this, arguments)
          }

          function r() {}
          e["xhr-polling"] = s, t.util.inherit(s, t.Transport.XHR), t.util.merge(s, t.Transport.XHR), s.prototype.name = "xhr-polling", s.prototype.heartbeats = function() {
            return !1
          }, s.prototype.open = function() {
            return t.Transport.XHR.prototype.open.call(this), !1
          }, s.prototype.get = function() {
            if (this.isOpen) {
              var e = this;
              this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = function() {
                this.onload = r, this.onerror = r, e.retryCounter = 1, e.onData(this.responseText), e.get()
              }, this.xhr.onerror = function() {
                e.retryCounter++, !e.retryCounter || e.retryCounter > 3 ? e.onClose() : e.get()
              }) : this.xhr.onreadystatechange = function() {
                4 == this.readyState && (this.onreadystatechange = r, 200 == this.status ? (e.onData(this.responseText), e.get()) : e.onClose())
              }, this.xhr.send(null)
            }
          }, s.prototype.onClose = function() {
            if (t.Transport.XHR.prototype.onClose.call(this), this.xhr) {
              this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = r;
              try {
                this.xhr.abort()
              } catch (e) {}
              this.xhr = null
            }
          }, s.prototype.ready = function(e, n) {
            var s = this;
            t.util.defer(function() {
              n.call(s)
            })
          }, t.transports.push("xhr-polling")
        }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root),
        function(e, t, n) {
          var s = n.document && "MozAppearance" in n.document.documentElement.style;

          function r(e) {
            t.Transport["xhr-polling"].apply(this, arguments), this.index = t.j.length;
            var n = this;
            t.j.push(function(e) {
              n._(e)
            })
          }
          e["jsonp-polling"] = r, t.util.inherit(r, t.Transport["xhr-polling"]), r.prototype.name = "jsonp-polling", r.prototype.post = function(e) {
            var n = this,
              s = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
            if (!this.form) {
              var r, i = document.createElement("form"),
                o = document.createElement("textarea"),
                a = this.iframeId = "socketio_iframe_" + this.index;
              i.className = "socketio", i.style.position = "absolute", i.style.top = "0px", i.style.left = "0px", i.style.display = "none", i.target = a, i.method = "POST", i.setAttribute("accept-charset", "utf-8"), o.name = "d", i.appendChild(o), document.body.appendChild(i), this.form = i, this.area = o
            }

            function c() {
              u(), n.socket.setBuffer(!1)
            }

            function u() {
              n.iframe && n.form.removeChild(n.iframe);
              try {
                r = document.createElement('<iframe name="' + n.iframeId + '">')
              } catch (e) {
                (r = document.createElement("iframe")).name = n.iframeId
              }
              r.id = n.iframeId, n.form.appendChild(r), n.iframe = r
            }
            this.form.action = this.prepareUrl() + s, u(), this.area.value = t.JSON.stringify(e);
            try {
              this.form.submit()
            } catch (e) {}
            this.iframe.attachEvent ? r.onreadystatechange = function() {
              "complete" == n.iframe.readyState && c()
            } : this.iframe.onload = c, this.socket.setBuffer(!0)
          }, r.prototype.get = function() {
            var e = this,
              n = document.createElement("script"),
              r = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), n.async = !0, n.src = this.prepareUrl() + r, n.onerror = function() {
              e.onClose()
            };
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(n, i), this.script = n, s && setTimeout(function() {
              var e = document.createElement("iframe");
              document.body.appendChild(e), document.body.removeChild(e)
            }, 100)
          }, r.prototype._ = function(e) {
            return this.onData(e), this.isOpen && this.get(), this
          }, r.prototype.ready = function(e, n) {
            var r = this;
            if (!s) return n.call(this);
            t.util.load(function() {
              n.call(r)
            })
          }, r.check = function() {
            return "document" in n
          }, r.xdomainCheck = function() {
            return !0
          }, t.transports.push("jsonp-polling")
        }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root), __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
          return io
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
      }()
  }).call(this, __webpack_require__(16), __webpack_require__(68)(module))
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = {
      stripmeta: 0,
      blur: 2,
      quality: 3,
      crop: 4,
      rotate: 5,
      thumbnail: 7,
      interlace: 9
    },
    i = {
      0: "stripmeta",
      1: "type",
      2: "blur",
      3: "quality",
      4: "crop",
      5: "rotate",
      6: "pixel",
      7: "thumbnail",
      8: "watermark",
      9: "interlace",
      10: "tmp"
    };

  function o(e) {
    s.verifyOptions(e, "type", "image::ImageOp"), s.verifyParamValid("type", e.type, o.validTypes, "image::ImageOp"), s.merge(this, e), this.type = r[e.type]
  }
  o.validTypes = Object.keys(r), o.reverse = function(e) {
    var t = s.copy(e);
    return t.type = i[t.type], t
  }, o.reverseImageOps = function(e) {
    return e.map(function(e) {
      return o.reverse(e)
    })
  }, e.exports = o
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = {};
  r.fromDataURL = s.blobFromDataURL, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = n(5),
    r = s.getGlobal(),
    i = {},
    o = r.name || "_parent",
    a = [],
    c = [];
  i.addMsgListener = function(e) {
    a.push(e)
  };
  var u, m, l, d, p = (u = /^([\w]+?:\/\/.*?(?=\/|$))/i, function(e) {
      return e = e || "", u.test(e) ? RegExp.$1 : "*"
    }),
    f = function() {
      var e = unescape(r.name || "").trim();
      if (e && 0 === e.indexOf("MSG|")) {
        r.name = "";
        var t = s.string2object(e.replace("MSG|", ""), "|"),
          n = (t.origin || "").toLowerCase();
        n && "*" !== n && 0 !== location.href.toLowerCase().indexOf(n) || function(e) {
          for (var t = 0, n = a.length; t < n; t++) try {
            a[t].call(null, e)
          } catch (e) {}
        }({
          data: JSON.parse(t.data || "null"),
          source: r.frames[t.self] || t.self,
          origin: p(t.ref || document.referrer)
        })
      }
    },
    g = (l = function(e, t) {
      for (var n = 0, s = e.length; n < s; n++)
        if (e[n] === t) return !0;
      return !1
    }, function() {
      if (c.length) {
        m = [];
        for (var e, t = c.length - 1; t >= 0; t--) e = c[t], l(m, e.w) || (m.push(e.w), c.splice(t, 1), e.w.name = e.d);
        m = null
      }
    }),
    y = i.startTimer = (d = !1, function() {
      d || (d = !0, r.postMessage || (setInterval(g, 100), setInterval(f, 20)))
    });
  i.postMessage = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (s.fillUndef(t, {
        origin: "*",
        source: o
      }), r.postMessage) {
      var n = t.data;
      r.FormData || (n = JSON.stringify(n)), e.postMessage(n, t.origin)
    } else {
      if (y(), s.isObject(t)) {
        var i = {};
        i.origin = t.origin || "", i.ref = location.href, i.self = t.source, i.data = JSON.stringify(t.data), t = "MSG|" + s.object2string(i, "|", !0)
      }
      c.unshift({
        w: e,
        d: escape(t)
      })
    }
  }, e.exports = i
}, function(e, t) {
  e.exports = function e(t, n) {
    "use strict";
    var s, r, i = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
      o = /(^[ ]*|[ ]*$)/g,
      a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
      c = /^0x[0-9a-f]+$/i,
      u = /^0/,
      m = function(t) {
        return e.insensitive && ("" + t).toLowerCase() || "" + t
      },
      l = m(t).replace(o, "") || "",
      d = m(n).replace(o, "") || "",
      p = l.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
      f = d.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
      g = parseInt(l.match(c), 16) || 1 !== p.length && l.match(a) && Date.parse(l),
      y = parseInt(d.match(c), 16) || g && d.match(a) && Date.parse(d) || null;
    if (y) {
      if (g < y) return -1;
      if (g > y) return 1
    }
    for (var h = 0, v = Math.max(p.length, f.length); h < v; h++) {
      if (s = !(p[h] || "").match(u) && parseFloat(p[h]) || p[h] || 0, r = !(f[h] || "").match(u) && parseFloat(f[h]) || f[h] || 0, isNaN(s) !== isNaN(r)) return isNaN(s) ? 1 : -1;
      if (typeof s != typeof r && (s += "", r += ""), s < r) return -1;
      if (s > r) return 1
    }
    return 0
  }
}, function(e, t, n) {
  "use strict";
  e.exports = {}
}, function(e, t, n) {
  "use strict";
  var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }
    return function(t, n, s) {
      return n && e(t.prototype, n), s && e(t, s), t
    }
  }();
  var r = n(40),
    i = 0,
    o = 1,
    a = 3,
    c = function() {
      function e(t, n) {
        var s = this;
        if (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), !t) throw new TypeError("Failed to construct 'WebSocket': url required");
        if (n && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
        t = t.replace(/:\d+/, ""), this._url = t, this._protocal = n || "", this._readyState = i, this._socketTask = wx.connectSocket({
          url: t,
          protocals: this._protocal,
          fail: function(e) {
            console.info("wx::ws: sockets build failed ..."), s.errorHandler(e)
          },
          success: function(e) {
            console.log("wx::ws: sockets build succeed ...")
          }
        }), this._socketTask.onOpen(function(e) {
          s._readyState = o, console.log("wx::ws: onopen ", e), s.dispatchEvent({
            type: "open"
          })
        }), this._socketTask.onError(function(e) {
          s.errorHandler(e)
        }), this._socketTask.onClose(function(e) {
          s._readyState = a, console.log("wx::ws: onclose ", e);
          var t = e.code,
            n = e.reason,
            r = e.wasClean;
          s.dispatchEvent({
            code: t,
            reason: n,
            wasClean: r,
            type: "close"
          }), s._socketTask = null
        }), this._socketTask.onMessage(function(e) {
          var t = e.data,
            n = e.origin,
            r = e.ports,
            i = e.source;
          s.dispatchEvent({
            data: t,
            origin: n,
            ports: r,
            source: i,
            type: "message"
          })
        })
      }
      return s(e, [{
        key: "dispatchEvent",
        value: function(e) {
          var t = "on" + e.type;
          "function" == typeof this[t] && this[t](e)
        }
      }, {
        key: "close",
        value: function() {
          this._readyState !== a && (this._readyState === i && console.warn("wx::ws:close WebSocket which is connecting might not work"), this._socketTask.close({
            code: 1e3,
            reason: "wx::ws:user manually close websocket"
          }))
        }
      }, {
        key: "send",
        value: function(e) {
          if (this._readyState !== o) throw new Error("wx:ws: sendMsg when readyState=" + this._readyState);
          if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("wx:ws: sendMsg only String/ArrayBuffer supported");
          this._socketTask.send({
            data: e
          })
        }
      }, {
        key: "errorHandler",
        value: function(e) {
          console.error("wx::ws: onerror ", e), "" !== e.message && (this._readyState = a, this.dispatchEvent({
            type: "error",
            message: e.errMsg
          }), this._socketTask = null)
        }
      }, {
        key: "url",
        get: function() {
          return this._url
        }
      }, {
        key: "protocal",
        get: function() {
          return this._protocal
        }
      }, {
        key: "readyState",
        get: function() {
          return this._readyState
        }
      }]), e
    }();
  r(c, {
    CONNECTING: i,
    OPEN: o,
    CLOSING: 2,
    CLOSED: a
  }), e.exports = c
}, function(e, t, n) {
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var s = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable;
  e.exports = function() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
          return t[e]
        }).join("")) return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(e) {
        s[e] = e
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
    } catch (e) {
      return !1
    }
  }() ? Object.assign : function(e, t) {
    for (var n, o, a = function(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
      }(e), c = 1; c < arguments.length; c++) {
      for (var u in n = Object(arguments[c])) r.call(n, u) && (a[u] = n[u]);
      if (s) {
        o = s(n);
        for (var m = 0; m < o.length; m++) i.call(n, o[m]) && (a[o[m]] = n[o[m]])
      }
    }
    return a
  }
}, function(e, t, n) {
  "use strict";
  var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }
    return function(t, n, s) {
      return n && e(t.prototype, n), s && e(t, s), t
    }
  }();

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  var i = n(40),
    o = n(25),
    a = 0,
    c = 4;

  function u(e) {
    this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Object.keys(e.header).reduce(function(t, n) {
      return t[n.toLowerCase()] = e.header[n], t
    }, {}));
    var t = e.data;
    "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, this.readyState = c, this.dispatchEvent({
      type: "readystatechange"
    })
  }
  var m = function() {
      function e() {
        r(this, e)
      }
      return s(e, [{
        key: "dispatchEvent",
        value: function(e) {
          var t = "on" + e.type;
          "function" == typeof this[t] && this[t](e)
        }
      }]), e
    }(),
    l = function() {
      function e() {
        r(this, e), this.readyState = a, this._headers = {}, this.upload = new m
      }
      return s(e, [{
        key: "dispatchEvent",
        value: function(e) {
          var t = "on" + e.type;
          "function" == typeof this[t] && this[t](e)
        }
      }, {
        key: "abort",
        value: function() {
          if (!this._request || this._request.abort) return this.status = 0, this.readyState = c, this._request.abort();
          throw new Error("该版本基础库不支持 abort request")
        }
      }, {
        key: "getAllResponseHeaders",
        value: function() {
          var e = this;
          return this._responseHeaders ? Object.keys(this._responseHeaders).map(function(t) {
            return t + ": " + e._responseHeaders[t]
          }).join("\r\n") : ""
        }
      }, {
        key: "getResponseHeader",
        value: function(e) {
          var t = e.toLowerCase();
          return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null
        }
      }, {
        key: "overrideMimeType",
        value: function() {
          throw new Error("not supported in weapp")
        }
      }, {
        key: "open",
        value: function(e, t) {
          var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (this.readyState !== a) throw new Error("request is already opened");
          if (!n) throw new Error("sync request is not supported");
          this._method = e, t = t.replace(/:\d+/, ""), this._url = t, this.readyState = 1, this.dispatchEvent({
            type: "readystatechange"
          })
        }
      }, {
        key: "setRequestHeader",
        value: function(e, t) {
          if (1 !== this.readyState) throw new Error("request is not opened");
          this._headers[e.toLowerCase()] = t
        }
      }, {
        key: "send",
        value: function(e) {
          var t = this;
          if (1 !== this.readyState) throw new Error("request is not opened");
          if (e instanceof o) {
            var n = e.entries(),
              s = n.filter(function(e) {
                return "string" != typeof e[1]
              });
            if (0 === s.length) throw new Error("Must specify a Blob field in FormData");
            s.length > 1 && console.warn("Only the first Blob will be send in Weapp");
            var r = n.filter(function(e) {
              return "string" == typeof e[1]
            }).reduce(function(e, t) {
              return i(e, (n = {}, s = t[0], r = t[1], s in n ? Object.defineProperty(n, s, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : n[s] = r, n));
              var n, s, r
            }, {});
            this._request = wx.uploadFile({
              url: this._url,
              name: s[0][0],
              filePath: s[0][1].uri,
              formData: r,
              header: this._headers,
              success: u.bind(this),
              fail: function(e) {
                t.status = 0, t.readyState = c, t.dispatchEvent({
                  type: "readystatechange"
                }), t.dispatchEvent({
                  type: "error"
                })
              }
            }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(e) {
              var n = e.totalBytesSent,
                s = e.totalBytesExpectedToSend;
              t.upload.dispatchEvent({
                type: "progress",
                loaded: n,
                total: s
              })
            })
          } else this._request = wx.request({
            url: this._url,
            data: e || "",
            method: this._method.toUpperCase(),
            header: this._headers,
            success: u.bind(this),
            fail: function(e) {
              t.status = 0, t.readyState = c, t.dispatchEvent({
                type: "readystatechange"
              }), t.dispatchEvent({
                type: "error"
              })
            }
          })
        }
      }]), e
    }();
  i(l, {
    UNSENT: a,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: c
  }), e.exports = l
}, function(e, t, n) {
  "use strict";
  var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }
    return function(t, n, s) {
      return n && e(t.prototype, n), s && e(t, s), t
    }
  }();
  var r = function() {
    function e() {
      ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e)
    }
    return s(e, [{
      key: "getItem",
      value: function(e) {
        return wx.getStorageSync(e)
      }
    }, {
      key: "setItem",
      value: function(e, t) {
        return wx.setStorageSync(e, t)
      }
    }, {
      key: "removeItem",
      value: function(e) {
        return this.setItem(e, "")
      }
    }, {
      key: "clear",
      value: function() {
        return wx.clearStorageSync()
      }
    }]), e
  }();
  e.exports = new r
}, , function(e, t, n) {
  "use strict";
  var s = n(10),
    r = n(58),
    i = n(33),
    o = n(37),
    a = n(26),
    c = n(48),
    u = n(0),
    m = n(47),
    l = n(35),
    d = n(9),
    p = n(52);
  e.exports = function(e) {
    u.merge(e, {
      platform: s,
      xhr: r,
      io: i,
      naturalSort: o,
      deepAccess: a,
      db: c,
      util: u,
      support: m,
      blob: l,
      ajax: d,
      LoggerPlugin: p
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = n(32),
    i = s.merge({}, r.idMap, {
      auth: {
        id: 2,
        login: 3,
        kicked: 5,
        logout: 6,
        multiPortLogin: 7,
        kick: 8
      },
      user: {
        id: 3,
        markInBlacklist: 3,
        getBlacklist: 4,
        markInMutelist: 5,
        getMutelist: 6,
        getRelations: 8,
        getUsers: 7,
        updateMyInfo: 10,
        updateDonnop: 15,
        syncMyInfo: 109,
        syncUpdateMyInfo: 110
      },
      notify: {
        id: 4,
        markRead: 3,
        syncOfflineMsgs: 4,
        batchMarkRead: 5,
        syncOfflineSysMsgs: 6,
        syncRoamingMsgs: 9,
        syncMsgReceipts: 12,
        syncRobots: 15,
        syncBroadcastMsgs: 16
      },
      sync: {
        id: 5,
        sync: 1,
        syncTeamMembers: 2
      },
      msg: {
        id: 7,
        sendMsg: 1,
        msg: 2,
        sysMsg: 3,
        getHistoryMsgs: 6,
        sendCustomSysMsg: 7,
        searchHistoryMsgs: 8,
        deleteSessions: 9,
        getSessions: 10,
        syncSendMsg: 101,
        sendMsgReceipt: 11,
        msgReceipt: 12,
        deleteMsg: 13,
        msgDeleted: 14,
        markSessionAck: 16,
        broadcastMsg: 17
      },
      team: {
        id: 8,
        createTeam: 1,
        sendTeamMsg: 2,
        teamMsg: 3,
        teamMsgs: 4,
        addTeamMembers: 5,
        removeTeamMembers: 6,
        updateTeam: 7,
        leaveTeam: 8,
        getTeam: 9,
        getTeams: 10,
        getTeamMembers: 11,
        dismissTeam: 12,
        applyTeam: 13,
        passTeamApply: 14,
        rejectTeamApply: 15,
        addTeamManagers: 16,
        removeTeamManagers: 17,
        transferTeam: 18,
        updateInfoInTeam: 19,
        updateNickInTeam: 20,
        acceptTeamInvite: 21,
        rejectTeamInvite: 22,
        getTeamHistoryMsgs: 23,
        searchTeamHistoryMsgs: 24,
        updateMuteStateInTeam: 25,
        getMyTeamMembers: 26,
        getMutedTeamMembers: 27,
        sendTeamMsgReceipt: 28,
        getTeamMsgReads: 29,
        getTeamMsgReadAccounts: 30,
        notifyTeamMsgReads: 31,
        muteTeamAll: 32,
        syncMyTeamMembers: 126,
        syncTeams: 109,
        syncTeamMembers: 111,
        syncCreateTeam: 101,
        syncSendTeamMsg: 102,
        syncUpdateTeamMember: 119
      },
      friend: {
        id: 12,
        friendRequest: 1,
        syncFriendRequest: 101,
        deleteFriend: 2,
        syncDeleteFriend: 102,
        updateFriend: 3,
        syncUpdateFriend: 103,
        getFriends: 4
      },
      chatroom: {
        id: 13,
        getChatroomAddress: 1
      },
      filter: {
        id: 101,
        sendFilterMsg: 1,
        filterMsg: 2,
        filterSysMsg: 3,
        sendFilterCustomSysMsg: 7
      },
      eventService: {
        id: 14,
        publishEvent: 1,
        pushEvent: 2,
        subscribeEvent: 3,
        unSubscribeEventsByAccounts: 4,
        unSubscribeEventsByType: 5,
        querySubscribeEventsByAccounts: 6,
        querySubscribeEventsByType: 7,
        pushEvents: 9
      }
    }),
    o = s.merge({}, r.cmdConfig, {
      login: {
        sid: i.auth.id,
        cid: i.auth.login,
        params: [{
          type: "Property",
          name: "login"
        }]
      },
      logout: {
        sid: i.auth.id,
        cid: i.auth.logout
      },
      kick: {
        sid: i.auth.id,
        cid: i.auth.kick,
        params: [{
          type: "StrArray",
          name: "deviceIds"
        }]
      },
      markInBlacklist: {
        sid: i.user.id,
        cid: i.user.markInBlacklist,
        params: [{
          type: "String",
          name: "account"
        }, {
          type: "bool",
          name: "isAdd"
        }]
      },
      getBlacklist: {
        sid: i.user.id,
        cid: i.user.getBlacklist,
        params: [{
          type: "long",
          name: "time"
        }]
      },
      markInMutelist: {
        sid: i.user.id,
        cid: i.user.markInMutelist,
        params: [{
          type: "String",
          name: "account"
        }, {
          type: "bool",
          name: "isAdd"
        }]
      },
      getMutelist: {
        sid: i.user.id,
        cid: i.user.getMutelist,
        params: [{
          type: "long",
          name: "time"
        }]
      },
      getRelations: {
        sid: i.user.id,
        cid: i.user.getRelations,
        params: [{
          type: "long",
          name: "timetag"
        }]
      },
      getUsers: {
        sid: i.user.id,
        cid: i.user.getUsers,
        params: [{
          type: "StrArray",
          name: "accounts"
        }]
      },
      updateMyInfo: {
        sid: i.user.id,
        cid: i.user.updateMyInfo,
        params: [{
          type: "Property",
          name: "user"
        }]
      },
      updateDonnop: {
        sid: i.user.id,
        cid: i.user.updateDonnop,
        params: [{
          type: "Property",
          name: "donnop"
        }]
      },
      markRead: {
        sid: i.notify.id,
        cid: i.notify.markRead,
        params: [{
          type: "long",
          name: "id"
        }, {
          type: "ph",
          name: "ph"
        }]
      },
      batchMarkRead: {
        sid: i.notify.id,
        cid: i.notify.batchMarkRead,
        params: [{
          type: "byte",
          name: "sid"
        }, {
          type: "byte",
          name: "cid"
        }, {
          type: "LongArray",
          name: "ids"
        }]
      },
      sync: {
        sid: i.sync.id,
        cid: i.sync.sync,
        params: [{
          type: "Property",
          name: "sync"
        }]
      },
      syncTeamMembers: {
        sid: i.sync.id,
        cid: i.sync.syncTeamMembers,
        params: [{
          type: "LongLongMap",
          name: "sync"
        }]
      },
      sendMsg: {
        sid: i.msg.id,
        cid: i.msg.sendMsg,
        params: [{
          type: "Property",
          name: "msg"
        }]
      },
      getHistoryMsgs: {
        sid: i.msg.id,
        cid: i.msg.getHistoryMsgs,
        params: [{
          type: "String",
          name: "to"
        }, {
          type: "long",
          name: "beginTime"
        }, {
          type: "long",
          name: "endTime"
        }, {
          type: "long",
          name: "lastMsgId"
        }, {
          type: "int",
          name: "limit"
        }, {
          type: "bool",
          name: "reverse"
        }, {
          type: "LongArray",
          name: "msgTypes"
        }]
      },
      sendCustomSysMsg: {
        sid: i.msg.id,
        cid: i.msg.sendCustomSysMsg,
        params: [{
          type: "Property",
          name: "sysMsg"
        }]
      },
      searchHistoryMsgs: {
        sid: i.msg.id,
        cid: i.msg.searchHistoryMsgs,
        params: [{
          type: "String",
          name: "to"
        }, {
          type: "long",
          name: "beginTime"
        }, {
          type: "long",
          name: "endTime"
        }, {
          type: "String",
          name: "keyword"
        }, {
          type: "int",
          name: "limit"
        }, {
          type: "bool",
          name: "reverse"
        }]
      },
      getSessions: {
        sid: i.msg.id,
        cid: i.msg.getSessions,
        params: [{
          type: "long",
          name: "time"
        }]
      },
      deleteSessions: {
        sid: i.msg.id,
        cid: i.msg.deleteSessions,
        params: [{
          type: "StrArray",
          name: "sessions"
        }]
      },
      sendMsgReceipt: {
        sid: i.msg.id,
        cid: i.msg.sendMsgReceipt,
        params: [{
          type: "Property",
          name: "msgReceipt"
        }]
      },
      deleteMsg: {
        sid: i.msg.id,
        cid: i.msg.deleteMsg,
        params: [{
          type: "Property",
          name: "sysMsg"
        }]
      },
      markSessionAck: {
        sid: i.msg.id,
        cid: i.msg.markSessionAck,
        params: [{
          type: "byte",
          name: "scene"
        }, {
          type: "String",
          name: "to"
        }, {
          type: "long",
          name: "timetag"
        }]
      },
      createTeam: {
        sid: i.team.id,
        cid: i.team.createTeam,
        params: [{
          type: "Property",
          name: "team"
        }, {
          type: "StrArray",
          name: "accounts"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      sendTeamMsg: {
        sid: i.team.id,
        cid: i.team.sendTeamMsg,
        params: [{
          type: "Property",
          name: "msg"
        }]
      },
      addTeamMembers: {
        sid: i.team.id,
        cid: i.team.addTeamMembers,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "StrArray",
          name: "accounts"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      removeTeamMembers: {
        sid: i.team.id,
        cid: i.team.removeTeamMembers,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "StrArray",
          name: "accounts"
        }]
      },
      updateTeam: {
        sid: i.team.id,
        cid: i.team.updateTeam,
        params: [{
          type: "Property",
          name: "team"
        }]
      },
      leaveTeam: {
        sid: i.team.id,
        cid: i.team.leaveTeam,
        params: [{
          type: "long",
          name: "teamId"
        }]
      },
      getTeam: {
        sid: i.team.id,
        cid: i.team.getTeam,
        params: [{
          type: "long",
          name: "teamId"
        }]
      },
      getTeams: {
        sid: i.team.id,
        cid: i.team.getTeams,
        params: [{
          type: "long",
          name: "timetag"
        }]
      },
      getTeamMembers: {
        sid: i.team.id,
        cid: i.team.getTeamMembers,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "long",
          name: "timetag"
        }]
      },
      dismissTeam: {
        sid: i.team.id,
        cid: i.team.dismissTeam,
        params: [{
          type: "long",
          name: "teamId"
        }]
      },
      applyTeam: {
        sid: i.team.id,
        cid: i.team.applyTeam,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      passTeamApply: {
        sid: i.team.id,
        cid: i.team.passTeamApply,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "from"
        }]
      },
      rejectTeamApply: {
        sid: i.team.id,
        cid: i.team.rejectTeamApply,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "from"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      addTeamManagers: {
        sid: i.team.id,
        cid: i.team.addTeamManagers,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "StrArray",
          name: "accounts"
        }]
      },
      removeTeamManagers: {
        sid: i.team.id,
        cid: i.team.removeTeamManagers,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "StrArray",
          name: "accounts"
        }]
      },
      transferTeam: {
        sid: i.team.id,
        cid: i.team.transferTeam,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "account"
        }, {
          type: "bool",
          name: "leave"
        }]
      },
      updateInfoInTeam: {
        sid: i.team.id,
        cid: i.team.updateInfoInTeam,
        params: [{
          type: "Property",
          name: "teamMember"
        }]
      },
      updateNickInTeam: {
        sid: i.team.id,
        cid: i.team.updateNickInTeam,
        params: [{
          type: "Property",
          name: "teamMember"
        }]
      },
      acceptTeamInvite: {
        sid: i.team.id,
        cid: i.team.acceptTeamInvite,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "from"
        }]
      },
      rejectTeamInvite: {
        sid: i.team.id,
        cid: i.team.rejectTeamInvite,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "from"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      getTeamHistoryMsgs: {
        sid: i.team.id,
        cid: i.team.getTeamHistoryMsgs,
        params: [{
          type: "long",
          name: "to"
        }, {
          type: "long",
          name: "beginTime"
        }, {
          type: "long",
          name: "endTime"
        }, {
          type: "long",
          name: "lastMsgId"
        }, {
          type: "int",
          name: "limit"
        }, {
          type: "bool",
          name: "reverse"
        }, {
          type: "LongArray",
          name: "msgTypes"
        }]
      },
      searchTeamHistoryMsgs: {
        sid: i.team.id,
        cid: i.team.searchTeamHistoryMsgs,
        params: [{
          type: "long",
          name: "to"
        }, {
          type: "long",
          name: "beginTime"
        }, {
          type: "long",
          name: "endTime"
        }, {
          type: "String",
          name: "keyword"
        }, {
          type: "int",
          name: "limit"
        }, {
          type: "bool",
          name: "reverse"
        }]
      },
      updateMuteStateInTeam: {
        sid: i.team.id,
        cid: i.team.updateMuteStateInTeam,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "String",
          name: "account"
        }, {
          type: "int",
          name: "mute"
        }]
      },
      getMyTeamMembers: {
        sid: i.team.id,
        cid: i.team.getMyTeamMembers,
        params: [{
          type: "LongArray",
          name: "teamIds"
        }]
      },
      getMutedTeamMembers: {
        sid: i.team.id,
        cid: i.team.getMutedTeamMembers,
        params: [{
          type: "long",
          name: "teamId"
        }]
      },
      sendTeamMsgReceipt: {
        sid: i.team.id,
        cid: i.team.sendTeamMsgReceipt,
        params: [{
          type: "PropertyArray",
          name: "teamMsgReceipts",
          entity: "teamMsgReceipt"
        }]
      },
      getTeamMsgReads: {
        sid: i.team.id,
        cid: i.team.getTeamMsgReads,
        params: [{
          type: "PropertyArray",
          name: "teamMsgReceipts",
          entity: "teamMsgReceipt"
        }]
      },
      getTeamMsgReadAccounts: {
        sid: i.team.id,
        cid: i.team.getTeamMsgReadAccounts,
        params: [{
          type: "Property",
          name: "teamMsgReceipt"
        }]
      },
      muteTeamAll: {
        sid: i.team.id,
        cid: i.team.muteTeamAll,
        params: [{
          type: "long",
          name: "teamId"
        }, {
          type: "int",
          name: "muteType"
        }]
      },
      friendRequest: {
        sid: i.friend.id,
        cid: i.friend.friendRequest,
        params: [{
          type: "String",
          name: "account"
        }, {
          type: "byte",
          name: "type"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      deleteFriend: {
        sid: i.friend.id,
        cid: i.friend.deleteFriend,
        params: [{
          type: "String",
          name: "account"
        }]
      },
      updateFriend: {
        sid: i.friend.id,
        cid: i.friend.updateFriend,
        params: [{
          type: "Property",
          name: "friend"
        }]
      },
      getFriends: {
        sid: i.friend.id,
        cid: i.friend.getFriends,
        params: [{
          type: "long",
          name: "timetag"
        }]
      },
      getChatroomAddress: {
        sid: i.chatroom.id,
        cid: i.chatroom.getChatroomAddress,
        params: [{
          type: "long",
          name: "chatroomId"
        }, {
          type: "bool",
          name: "isWeixinApp"
        }]
      },
      sendFilterMsg: {
        sid: i.filter.id,
        cid: i.filter.sendFilterMsg,
        params: [{
          type: "Property",
          name: "msg"
        }]
      },
      sendFilterCustomSysMsg: {
        sid: i.filter.id,
        cid: i.filter.sendFilterCustomSysMsg,
        params: [{
          type: "Property",
          name: "sysMsg"
        }]
      },
      publishEvent: {
        sid: i.eventService.id,
        cid: i.eventService.publishEvent,
        params: [{
          type: "Property",
          name: "msgEvent"
        }]
      },
      pushEvent: {
        sid: i.eventService.id,
        cid: i.eventService.pushEvent
      },
      subscribeEvent: {
        sid: i.eventService.id,
        cid: i.eventService.subscribeEvent,
        params: [{
          type: "Property",
          name: "msgEventSubscribe"
        }, {
          type: "StrArray",
          name: "accounts"
        }]
      },
      unSubscribeEventsByAccounts: {
        sid: i.eventService.id,
        cid: i.eventService.unSubscribeEventsByAccounts,
        params: [{
          type: "Property",
          name: "msgEventSubscribe"
        }, {
          type: "StrArray",
          name: "accounts"
        }]
      },
      unSubscribeEventsByType: {
        sid: i.eventService.id,
        cid: i.eventService.unSubscribeEventsByType,
        params: [{
          type: "Property",
          name: "msgEventSubscribe"
        }]
      },
      querySubscribeEventsByAccounts: {
        sid: i.eventService.id,
        cid: i.eventService.querySubscribeEventsByAccounts,
        params: [{
          type: "Property",
          name: "msgEventSubscribe"
        }, {
          type: "StrArray",
          name: "accounts"
        }]
      },
      querySubscribeEventsByType: {
        sid: i.eventService.id,
        cid: i.eventService.querySubscribeEventsByType,
        params: [{
          type: "Property",
          name: "msgEventSubscribe"
        }]
      },
      pushEvents: {
        sid: i.eventService.id,
        cid: i.eventService.pushEvents
      }
    }),
    a = s.merge({}, r.packetConfig, {
      "2_3": {
        service: "auth",
        cmd: "login",
        response: [{
          type: "Property",
          name: "loginRes"
        }, {
          type: "PropertyArray",
          name: "loginPorts",
          entity: "loginPort"
        }]
      },
      "2_5": {
        service: "auth",
        cmd: "kicked",
        response: [{
          type: "Number",
          name: "from"
        }, {
          type: "Number",
          name: "reason"
        }]
      },
      "2_6": {
        service: "auth",
        cmd: "logout"
      },
      "2_7": {
        service: "auth",
        cmd: "multiPortLogin",
        response: [{
          type: "Number",
          name: "state"
        }, {
          type: "PropertyArray",
          name: "loginPorts",
          entity: "loginPort"
        }]
      },
      "2_8": {
        service: "auth",
        cmd: "kick",
        response: [{
          type: "StrArray",
          name: "deviceIds"
        }]
      },
      "3_3": {
        service: "user",
        cmd: "markInBlacklist"
      },
      "3_103": {
        service: "user",
        cmd: "syncMarkInBlacklist",
        response: [{
          type: "String",
          name: "account"
        }, {
          type: "Boolean",
          name: "isAdd"
        }]
      },
      "3_4": {
        service: "user",
        cmd: "getBlacklist",
        response: [{
          type: "StrArray",
          name: "blacklist"
        }]
      },
      "3_5": {
        service: "user",
        cmd: "markInMutelist"
      },
      "3_105": {
        service: "user",
        cmd: "syncMarkInMutelist",
        response: [{
          type: "String",
          name: "account"
        }, {
          type: "Boolean",
          name: "isAdd"
        }]
      },
      "3_6": {
        service: "user",
        cmd: "getMutelist",
        response: [{
          type: "StrArray",
          name: "mutelist"
        }]
      },
      "3_8": {
        service: "user",
        cmd: "getRelations",
        response: [{
          type: "PropertyArray",
          name: "specialRelations",
          entity: "specialRelation"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "3_7": {
        service: "user",
        cmd: "getUsers",
        response: [{
          type: "PropertyArray",
          name: "users",
          entity: "user"
        }]
      },
      "3_10": {
        service: "user",
        cmd: "updateMyInfo",
        response: [{
          type: "Number",
          name: "timetag"
        }]
      },
      "3_15": {
        service: "user",
        cmd: "updateDonnop",
        response: [{
          type: "Number",
          name: "timetag"
        }]
      },
      "3_115": {
        service: "user",
        cmd: "syncUpdateDonnop",
        response: [{
          type: "Property",
          name: "donnop"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "3_109": {
        service: "user",
        cmd: "syncMyInfo",
        response: [{
          type: "Property",
          name: "user"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "3_110": {
        service: "user",
        cmd: "syncUpdateMyInfo",
        response: [{
          type: "Property",
          name: "user"
        }]
      },
      "4_1": {
        service: "notify"
      },
      "4_2": {
        service: "notify"
      },
      "4_3": {
        service: "notify",
        cmd: "markRead"
      },
      "4_4": {
        service: "notify",
        cmd: "syncOfflineMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "4_5": {
        service: "notify",
        cmd: "batchMarkRead"
      },
      "4_6": {
        service: "notify",
        cmd: "syncOfflineSysMsgs",
        response: [{
          type: "PropertyArray",
          name: "sysMsgs",
          entity: "sysMsg"
        }]
      },
      "4_9": {
        service: "notify",
        cmd: "syncRoamingMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "4_12": {
        service: "notify",
        cmd: "syncMsgReceipts",
        response: [{
          type: "PropertyArray",
          name: "msgReceipts",
          entity: "msgReceipt"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "4_13": {
        service: "notify",
        cmd: "syncDonnop",
        response: [{
          type: "Property",
          name: "donnop"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "4_14": {
        service: "notify",
        cmd: "syncSessionAck",
        response: [{
          type: "StrLongMap",
          name: "p2p"
        }, {
          type: "LongLongMap",
          name: "team"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "4_15": {
        service: "notify",
        cmd: "syncRobots",
        response: [{
          type: "PropertyArray",
          name: "robots",
          entity: "robot"
        }]
      },
      "4_16": {
        service: "notify",
        cmd: "syncBroadcastMsgs",
        response: [{
          type: "PropertyArray",
          name: "broadcastMsgs",
          entity: "broadcastMsg"
        }]
      },
      "4_100": {
        service: "notify",
        cmd: "syncOfflineFilterMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "4_101": {
        service: "notify",
        cmd: "syncOfflineFilterSysMsgs",
        response: [{
          type: "PropertyArray",
          name: "sysMsgs",
          entity: "sysMsg"
        }]
      },
      "5_1": {
        service: "sync",
        cmd: "syncDone",
        response: [{
          type: "Number",
          name: "timetag"
        }]
      },
      "5_2": {
        service: "sync",
        cmd: "syncTeamMembersDone",
        response: [{
          type: "Number",
          name: "timetag"
        }]
      },
      "7_1": {
        service: "msg",
        cmd: "sendMsg",
        response: [{
          type: "Property",
          name: "msg"
        }],
        trivialErrorCodes: [7101]
      },
      "7_2": {
        service: "msg",
        cmd: "msg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "7_3": {
        service: "msg",
        cmd: "sysMsg",
        response: [{
          type: "Property",
          name: "sysMsg"
        }]
      },
      "7_6": {
        service: "msg",
        cmd: "getHistoryMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "7_7": {
        service: "msg",
        cmd: "sendCustomSysMsg",
        trivialErrorCodes: [7101]
      },
      "7_8": {
        service: "msg",
        cmd: "searchHistoryMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "7_9": {
        service: "msg",
        cmd: "deleteSessions"
      },
      "7_10": {
        service: "msg",
        cmd: "getSessions",
        response: [{
          type: "StrArray",
          name: "sessions"
        }]
      },
      "7_101": {
        service: "msg",
        cmd: "syncSendMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "7_11": {
        service: "msg",
        cmd: "sendMsgReceipt",
        response: [{
          type: "Property",
          name: "msgReceipt"
        }]
      },
      "7_12": {
        service: "msg",
        cmd: "msgReceipt",
        response: [{
          type: "Property",
          name: "msgReceipt"
        }]
      },
      "7_13": {
        service: "msg",
        cmd: "onDeleteMsg"
      },
      "7_14": {
        service: "msg",
        cmd: "onMsgDeleted",
        response: [{
          type: "Property",
          name: "sysMsg"
        }]
      },
      "7_15": {
        service: "msg",
        cmd: "onDeleteMsgOfflineRoaming",
        response: [{
          type: "PropertyArray",
          name: "sysMsgs",
          entity: "sysMsg"
        }, {
          type: "Number",
          name: "timetag"
        }, {
          type: "Number",
          name: "type"
        }]
      },
      "7_16": {
        service: "msg",
        cmd: "onMarkSessionAck"
      },
      "7_17": {
        service: "msg",
        cmd: "broadcastMsg",
        response: [{
          type: "Property",
          name: "broadcastMsg"
        }]
      },
      "7_116": {
        service: "msg",
        cmd: "syncMarkSessionAck",
        response: [{
          type: "Number",
          name: "scene"
        }, {
          type: "String",
          name: "to"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "8_1": {
        service: "team",
        cmd: "createTeam",
        response: [{
          type: "Property",
          name: "team"
        }]
      },
      "8_2": {
        service: "team",
        cmd: "sendTeamMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "8_3": {
        service: "team",
        cmd: "teamMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "8_4": {
        service: "team",
        cmd: "teamMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "8_5": {
        service: "team",
        cmd: "addTeamMembers"
      },
      "8_6": {
        service: "team",
        cmd: "removeTeamMembers"
      },
      "8_7": {
        service: "team",
        cmd: "updateTeam",
        response: [{
          type: "Number",
          name: "id"
        }, {
          type: "Number",
          name: "time"
        }]
      },
      "8_8": {
        service: "team",
        cmd: "leaveTeam"
      },
      "8_9": {
        service: "team",
        cmd: "getTeam",
        response: [{
          type: "Property",
          name: "team"
        }]
      },
      "8_10": {
        service: "team",
        cmd: "getTeams",
        response: [{
          type: "PropertyArray",
          name: "teams",
          entity: "team"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "8_11": {
        service: "team",
        cmd: "getTeamMembers",
        response: [{
          type: "Number",
          name: "teamId"
        }, {
          type: "PropertyArray",
          name: "members",
          entity: "teamMember"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "8_12": {
        service: "team",
        cmd: "dismissTeam"
      },
      "8_13": {
        service: "team",
        cmd: "applyTeam",
        response: [{
          type: "Property",
          name: "team"
        }]
      },
      "8_14": {
        service: "team",
        cmd: "passTeamApply"
      },
      "8_15": {
        service: "team",
        cmd: "rejectTeamApply"
      },
      "8_16": {
        service: "team",
        cmd: "addTeamManagers"
      },
      "8_17": {
        service: "team",
        cmd: "removeTeamManagers"
      },
      "8_18": {
        service: "team",
        cmd: "transferTeam"
      },
      "8_19": {
        service: "team",
        cmd: "updateInfoInTeam"
      },
      "8_20": {
        service: "team",
        cmd: "updateNickInTeam"
      },
      "8_21": {
        service: "team",
        cmd: "acceptTeamInvite",
        response: [{
          type: "Property",
          name: "team"
        }]
      },
      "8_22": {
        service: "team",
        cmd: "rejectTeamInvite"
      },
      "8_23": {
        service: "team",
        cmd: "getTeamHistoryMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "8_24": {
        service: "team",
        cmd: "searchTeamHistoryMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "8_25": {
        service: "team",
        cmd: "updateMuteStateInTeam"
      },
      "8_26": {
        service: "team",
        cmd: "getMyTeamMembers",
        response: [{
          type: "PropertyArray",
          name: "teamMembers",
          entity: "teamMember"
        }]
      },
      "8_27": {
        service: "team",
        cmd: "getMutedTeamMembers",
        response: [{
          type: "Number",
          name: "teamId"
        }, {
          type: "PropertyArray",
          name: "teamMembers",
          entity: "teamMember"
        }]
      },
      "8_28": {
        service: "team",
        cmd: "sendTeamMsgReceipt",
        response: [{
          type: "PropertyArray",
          name: "teamMsgReceipts",
          entity: "teamMsgReceipt"
        }]
      },
      "8_29": {
        service: "team",
        cmd: "getTeamMsgReads",
        response: [{
          type: "PropertyArray",
          name: "teamMsgReceipts",
          entity: "teamMsgReceipt"
        }]
      },
      "8_30": {
        service: "team",
        cmd: "getTeamMsgReadAccounts",
        response: [{
          type: "String",
          name: "idClient"
        }, {
          type: "StrArray",
          name: "readAccounts"
        }, {
          type: "StrArray",
          name: "unreadAccounts"
        }]
      },
      "8_31": {
        service: "team",
        cmd: "notifyTeamMsgReads",
        response: [{
          type: "PropertyArray",
          name: "teamMsgReceipts",
          entity: "teamMsgReceipt"
        }]
      },
      "8_32": {
        service: "team",
        cmd: "muteTeamAll",
        response: []
      },
      "8_126": {
        service: "team",
        cmd: "syncMyTeamMembers",
        response: [{
          type: "PropertyArray",
          name: "teamMembers",
          entity: "teamMember"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "8_109": {
        service: "team",
        cmd: "syncTeams",
        response: [{
          type: "Number",
          name: "timetag"
        }, {
          type: "PropertyArray",
          name: "teams",
          entity: "team"
        }]
      },
      "8_111": {
        service: "team",
        cmd: "syncTeamMembers",
        response: [{
          type: "Number",
          name: "teamId"
        }, {
          type: "PropertyArray",
          name: "members",
          entity: "teamMember"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "8_101": {
        service: "team",
        cmd: "syncCreateTeam",
        response: [{
          type: "Property",
          name: "team"
        }]
      },
      "8_102": {
        service: "team",
        cmd: "syncSendTeamMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "8_119": {
        service: "team",
        cmd: "syncUpdateTeamMember",
        response: [{
          type: "Property",
          name: "teamMember"
        }]
      },
      "12_1": {
        service: "friend",
        cmd: "friendRequest"
      },
      "12_101": {
        service: "friend",
        cmd: "syncFriendRequest",
        response: [{
          type: "String",
          name: "account"
        }, {
          type: "Number",
          name: "type"
        }, {
          type: "String",
          name: "ps"
        }]
      },
      "12_2": {
        service: "friend",
        cmd: "deleteFriend"
      },
      "12_102": {
        service: "friend",
        cmd: "syncDeleteFriend",
        response: [{
          type: "String",
          name: "account"
        }]
      },
      "12_3": {
        service: "friend",
        cmd: "updateFriend"
      },
      "12_103": {
        service: "friend",
        cmd: "syncUpdateFriend",
        response: [{
          type: "Property",
          name: "friend"
        }]
      },
      "12_4": {
        service: "friend",
        cmd: "getFriends",
        response: [{
          type: "PropertyArray",
          name: "friends",
          entity: "friend"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "12_5": {
        service: "friend",
        cmd: "syncFriends",
        response: [{
          type: "PropertyArray",
          name: "friends",
          entity: "friend"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "12_6": {
        service: "friend",
        cmd: "syncFriendUsers",
        response: [{
          type: "PropertyArray",
          name: "users",
          entity: "user"
        }, {
          type: "Number",
          name: "timetag"
        }]
      },
      "13_1": {
        service: "chatroom",
        cmd: "getChatroomAddress",
        response: [{
          type: "StrArray",
          name: "address"
        }]
      },
      "14_1": {
        service: "eventService",
        cmd: "publishEvent",
        response: [{
          type: "Property",
          name: "msgEvent"
        }]
      },
      "14_2": {
        service: "eventService",
        cmd: "pushEvent",
        response: [{
          type: "Property",
          name: "msgEvent"
        }]
      },
      "14_3": {
        service: "eventService",
        cmd: "subscribeEvent",
        response: [{
          type: "StrArray",
          name: "accounts"
        }]
      },
      "14_4": {
        service: "eventService",
        cmd: "unSubscribeEventsByAccounts",
        response: [{
          type: "StrArray",
          name: "accounts"
        }]
      },
      "14_5": {
        service: "eventService",
        cmd: "unSubscribeEventsByType"
      },
      "14_6": {
        service: "eventService",
        cmd: "querySubscribeEventsByAccounts",
        response: [{
          type: "PropertyArray",
          name: "msgEventSubscribes",
          entity: "msgEventSubscribe"
        }]
      },
      "14_7": {
        service: "eventService",
        cmd: "querySubscribeEventsByType",
        response: [{
          type: "PropertyArray",
          name: "msgEventSubscribes",
          entity: "msgEventSubscribe"
        }]
      },
      "14_9": {
        service: "eventService",
        cmd: "pushEvents",
        response: [{
          type: "PropertyArray",
          name: "msgEvents",
          entity: "msgEvent"
        }]
      },
      "101_1": {
        service: "filter",
        cmd: "sendFilterMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "101_2": {
        service: "filter",
        cmd: "filterMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "101_3": {
        service: "filter",
        cmd: "filterSysMsg",
        response: [{
          type: "Property",
          name: "sysMsg"
        }]
      },
      "101_7": {
        service: "filter",
        cmd: "sendFilterCustomSysMsg"
      }
    });
  e.exports = {
    idMap: i,
    cmdConfig: o,
    packetConfig: a
  }
}, function(e, t, n) {
  "use strict";
  var s = n(0).notundef;

  function r(e) {
    s(e.shouldPushNotificationWhenPCOnline) && (this.open = e.shouldPushNotificationWhenPCOnline ? 2 : 1)
  }
  r.getDefaultConfig = function() {
    return {
      shouldPushNotificationWhenPCOnline: !0
    }
  }, r.reverse = function(e) {
    return {
      shouldPushNotificationWhenPCOnline: 1 != +e.open
    }
  }, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = {
    set: function(e, t, n) {
      s[e] = t, n && (n.support = t)
    }
  };
  e.exports = s
}, function(e, t, n) {
  "use strict";
  e.exports = {
    version: "0.10.2",
    support: !1,
    open: function() {},
    close: function() {}
  }
}, function(e, t, n) {
  "use strict";
  n(90);
  var s = n(1);
  s.lbsUrl = s.lbsUrl.replace("/webconf.jsp", "/wxwebconf.jsp"), s.defaultReportUrl = null, s.isWeixinApp = !0
}, function(e, t, n) {
  "use strict";
  var s = n(8);

  function r() {}
  r.typeMap = {
    text: 0,
    image: 1,
    audio: 2,
    video: 3,
    geo: 4,
    notification: 5,
    file: 6,
    tip: 10,
    robot: 11,
    custom: 100
  };
  var i = r.typeReverseMap = {
    0: "text",
    1: "image",
    2: "audio",
    3: "video",
    4: "geo",
    5: "notification",
    6: "file",
    10: "tip",
    11: "robot",
    100: "custom"
  };
  r.validTypes = Object.keys(r.typeMap), r.setFlow = function(e, t) {
    var n = t === e.from;
    n && t === e.to && (n = s.deviceId === e.fromDeviceId), e.flow = n ? "out" : "in", "robot" === e.type && e.content && e.content.msgOut && (e.flow = "in")
  }, r.getType = function(e) {
    var t = e.type;
    return i[t] || t
  }, e.exports = r
}, , function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };

  function r(e) {
    var t = this,
      n = e.url || null;
    t.level = {
      debug: 0,
      log: 1,
      info: 2,
      warn: 3,
      error: 4
    }[e.level] || 0, t.logCache = [], t.logNum = 1, t.timeInterval = 5e3, window.onerror = function(e, n, s, r, i) {
      t.error.call(t, i)
    }, setInterval(function() {
      t.logCache.length > 0 && n && t.postLogs(n, t.logCache)
    }, t.timeInterval)
  }
  r.prototype.debug = function() {
    this.level > 0 || (console.debug.apply(this, arguments), this.cacheLogs.apply(this, ["[degbug]"].concat(arguments)))
  }, r.prototype.log = function() {
    this.level > 1 || (console.log.apply(this, arguments), this.cacheLogs.apply(this, ["[log]"].concat(arguments)))
  }, r.prototype.info = function() {
    this.level > 2 || (console.info.apply(this, arguments), this.cacheLogs.apply(this, ["[info]"].concat(arguments)))
  }, r.prototype.warn = function() {
    this.level > 3 || (console.warn.apply(this, arguments), this.cacheLogs.apply(this, ["[warn]"].concat(arguments)))
  }, r.prototype.error = function() {
    this.level > 4 || (console.error.apply(this, arguments), this.cacheLogs.apply(this, ["[error]"].concat(arguments)))
  }, r.prototype.cacheLogs = function(e, t) {
    for (var n = [], r = 0; r < t.length; r++) {
      var i = t[r];
      "object" === (void 0 === i ? "undefined" : s(i)) ? n.push(JSON.stringify(i)): n.push(i)
    }
    var o = this.logNum++ + " " + e + " " + n.join("; ");
    this.logCache.push(o.replace("%c", ""))
  }, r.prototype.postLogs = function(e, t) {
    var n = this,
      s = new XMLHttpRequest;
    s.onreadystatechange = function() {
      4 === s.readyState && (200 === s.status ? (console.info("LoggerPlugin::日志上报完成"), n.logCache = [], n.timeInterval = 5e3) : n.timeInterval += 5e3)
    }, s.open("POST", e), s.setRequestHeader("Content-Type", "plain/text;charset=utf-8"), s.timeout = 360, s.send(t.join("\n"))
  }, e.exports = r
}, function(e, t) {
  e.exports = function() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      var s = arguments[t];
      for (var r in s) n.call(s, r) && (e[r] = s[r])
    }
    return e
  };
  var n = Object.prototype.hasOwnProperty
}, function(e, t, n) {
  var s = n(31);
  e.exports = function(e, t, n) {
    if (!s(t)) throw new TypeError("iterator must be a function");
    arguments.length < 3 && (n = this);
    "[object Array]" === r.call(e) ? function(e, t, n) {
      for (var s = 0, r = e.length; s < r; s++) i.call(e, s) && t.call(n, e[s], s, e)
    }(e, t, n) : "string" == typeof e ? function(e, t, n) {
      for (var s = 0, r = e.length; s < r; s++) t.call(n, e.charAt(s), s, e)
    }(e, t, n) : function(e, t, n) {
      for (var s in e) i.call(e, s) && t.call(n, e[s], s, e)
    }(e, t, n)
  };
  var r = Object.prototype.toString,
    i = Object.prototype.hasOwnProperty
}, function(e, t) {
  (t = e.exports = function(e) {
    return e.replace(/^\s*|\s*$/g, "")
  }).left = function(e) {
    return e.replace(/^\s*/, "")
  }, t.right = function(e) {
    return e.replace(/\s*$/, "")
  }
}, function(e, t, n) {
  var s = n(55),
    r = n(54);
  e.exports = function(e) {
    if (!e) return {};
    var t = {};
    return r(s(e).split("\n"), function(e) {
      var n, r = e.indexOf(":"),
        i = s(e.slice(0, r)).toLowerCase(),
        o = s(e.slice(r + 1));
      void 0 === t[i] ? t[i] = o : (n = t[i], "[object Array]" === Object.prototype.toString.call(n) ? t[i].push(o) : t[i] = [t[i], o])
    }), t
  }
}, function(e, t, n) {
  (function(t) {
    var n;
    n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
  }).call(this, n(16))
}, function(e, t, n) {
  "use strict";
  var s = n(57),
    r = n(31),
    i = n(56),
    o = n(53);

  function a(e, t, n) {
    var s = e;
    return r(t) ? (n = t, "string" == typeof e && (s = {
      uri: e
    })) : s = o(t, {
      uri: e
    }), s.callback = n, s
  }

  function c(e, t, n) {
    return u(t = a(e, t, n))
  }

  function u(e) {
    if (void 0 === e.callback) throw new Error("callback argument missing");
    var t = !1,
      n = function(n, s, r) {
        t || (t = !0, e.callback(n, s, r))
      };

    function s(e) {
      return clearTimeout(m), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, n(e, h)
    }

    function r() {
      if (!a) {
        var t;
        clearTimeout(m), t = e.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
        var s = h,
          r = null;
        return 0 !== t ? (s = {
          body: function() {
            var e = void 0;
            if (e = u.response ? u.response : u.responseText || function(e) {
                try {
                  if ("document" === e.responseType) return e.responseXML;
                  var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                  if ("" === e.responseType && !t) return e.responseXML
                } catch (e) {}
                return null
              }(u), y) try {
              e = JSON.parse(e)
            } catch (e) {}
            return e
          }(),
          statusCode: t,
          method: d,
          headers: {},
          url: l,
          rawRequest: u
        }, u.getAllResponseHeaders && (s.headers = i(u.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"), n(r, s, s.body)
      }
    }
    var o, a, u = e.xhr || null;
    u || (u = e.cors || e.useXDR ? new c.XDomainRequest : new c.XMLHttpRequest);
    var m, l = u.url = e.uri || e.url,
      d = u.method = e.method || "GET",
      p = e.body || e.data,
      f = u.headers = e.headers || {},
      g = !!e.sync,
      y = !1,
      h = {
        body: void 0,
        headers: {},
        statusCode: 0,
        method: d,
        url: l,
        rawRequest: u
      };
    if ("json" in e && !1 !== e.json && (y = !0, f.accept || f.Accept || (f.Accept = "application/json"), "GET" !== d && "HEAD" !== d && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"), p = JSON.stringify(!0 === e.json ? p : e.json))), u.onreadystatechange = function() {
        4 === u.readyState && setTimeout(r, 0)
      }, u.onload = r, u.onerror = s, u.onprogress = function() {}, u.onabort = function() {
        a = !0
      }, u.ontimeout = s, u.open(d, l, !g, e.username, e.password), g || (u.withCredentials = !!e.withCredentials), !g && e.timeout > 0 && (m = setTimeout(function() {
        if (!a) {
          a = !0, u.abort("timeout");
          var e = new Error("XMLHttpRequest timeout");
          e.code = "ETIMEDOUT", s(e)
        }
      }, e.timeout)), u.setRequestHeader)
      for (o in f) f.hasOwnProperty(o) && u.setRequestHeader(o, f[o]);
    else if (e.headers && ! function(e) {
        for (var t in e)
          if (e.hasOwnProperty(t)) return !1;
        return !0
      }(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
    return "responseType" in e && (u.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(u), u.send(p || null), u
  }
  e.exports = c, c.XMLHttpRequest = s.XMLHttpRequest || function() {}, c.XDomainRequest = "withCredentials" in new c.XMLHttpRequest ? c.XMLHttpRequest : s.XDomainRequest,
    function(e, t) {
      for (var n = 0; n < e.length; n++) t(e[n])
    }(["get", "put", "post", "patch", "head", "delete"], function(e) {
      c["delete" === e ? "del" : e] = function(t, n, s) {
        return (n = a(t, n, s)).method = e.toUpperCase(), u(n)
      }
    })
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = s.notundef,
    i = {
      addFriend: 1,
      applyFriend: 2,
      passFriendApply: 3,
      rejectFriendApply: 4
    },
    o = {
      1: "addFriend",
      2: "applyFriend",
      3: "passFriendApply",
      4: "rejectFriendApply"
    };

  function a(e) {
    s.verifyOptions(e, "account", "friend::Friend"), s.verifyParamAtLeastPresentOne(e, "alias custom", "friend::Friend"), this.account = e.account, r(e.alias) && (this.alias = e.alias), r(e.custom) && (this.custom = e.custom)
  }
  a.reverse = function(e) {
    var t = s.filterObj(e, "account alias custom createTime updateTime");
    return r(e.flag) && (t.valid = "1" === e.flag), r(t.createTime) && (t.createTime = +t.createTime), r(t.updateTime) && (t.updateTime = +t.updateTime), t
  }, a.validTypes = function() {
    return Object.keys(i)
  }, a.getByteFromType = function(e) {
    return i[e]
  }, a.getTypeFromByte = function(e) {
    return o[e]
  }, a.assembleFriend = function(e) {
    var t = +new Date;
    return {
      account: e,
      alias: "",
      createTime: t,
      custom: "",
      updateTime: t,
      valid: !0
    }
  }, e.exports = a
}, function(e, t, n) {
  "use strict";
  e.exports = {
    imLogin: {
      4: "os",
      6: "sdkVersion",
      8: "appLogin",
      9: "protocolVersion",
      13: "deviceId",
      18: "appKey",
      19: "account",
      24: "browser",
      26: "session",
      1000: "token"
    },
    nosToken: {
      1: "objectName",
      2: "token",
      3: "bucket",
      4: "expireTime"
    },
    audioToText: {
      2: "url"
    },
    imageOp: {
      0: "type",
      1: "stripmeta",
      2: "typeType",
      3: "blurRadius",
      4: "blurSigma",
      5: "qualityQuality",
      6: "cropX",
      7: "cropY",
      8: "cropWidth",
      9: "cropHeight",
      10: "rotateAngle",
      11: "pixelPixel",
      12: "thumbnailMode",
      13: "thumbnailWidth",
      14: "thumbnailHeight",
      15: "thumbnailAxisX",
      16: "thumbnailAxisY",
      17: "thumbnailCenterX",
      18: "thumbnailCenterY",
      19: "thumbnailEnlarge",
      20: "thumbnailToStatic",
      21: "watermarkType",
      22: "watermarkGravity",
      23: "watermarkDissolve",
      24: "watermarkDx",
      25: "watermarkDy",
      26: "watermarkImage",
      27: "watermarkText",
      28: "watermarkFont",
      29: "watermarkFontSize",
      30: "watermarkFontColor",
      31: "interlace"
    },
    robot: {
      4: "account",
      5: "nick",
      6: "avatar",
      7: "intro",
      8: "config",
      9: "valid",
      10: "createTime",
      11: "updateTime",
      12: "custid",
      13: "botid",
      14: "bindTime"
    },
    clientAntispam: {
      1: "version",
      2: "md5",
      3: "nosurl",
      4: "thesaurus"
    },
    transToken: {
      1: "name",
      2: "type",
      3: "transType",
      4: "size",
      5: "extra",
      6: "body"
    },
    transInfo: {
      1: "docId",
      2: "name",
      3: "prefix",
      4: "size",
      5: "type",
      6: "state",
      7: "transType",
      8: "transSize",
      9: "pageCount",
      10: "picInfo",
      11: "extra",
      12: "flag"
    },
    fileListParam: {
      1: "fromDocId",
      2: "limit"
    },
    login: {
      1: "appKey",
      2: "account",
      3: "deviceId",
      5: "chatroomId",
      8: "appLogin",
      20: "chatroomNick",
      21: "chatroomAvatar",
      22: "chatroomCustom",
      23: "chatroomEnterCustom",
      26: "session",
      38: "isAnonymous"
    },
    chatroom: {
      1: "id",
      3: "name",
      4: "announcement",
      5: "broadcastUrl",
      12: "custom",
      14: "createTime",
      15: "updateTime",
      16: "queuelevel",
      100: "creator",
      101: "onlineMemberNum",
      102: "mute"
    },
    msg: {
      1: "idClient",
      2: "type",
      3: "attach",
      4: "custom",
      5: "resend",
      6: "userUpdateTime",
      7: "fromNick",
      8: "fromAvatar",
      9: "fromCustom",
      10: "yidunEnable",
      11: "antiSpamContent",
      12: "skipHistory",
      13: "body",
      14: "antiSpamBusinessId",
      15: "clientAntiSpam",
      16: "antiSpamUsingYidun",
      20: "time",
      21: "from",
      22: "chatroomId",
      23: "fromClientType",
      25: "highPriority"
    },
    chatroomMember: {
      1: "chatroomId",
      2: "account",
      3: "type",
      4: "level",
      5: "nick",
      6: "avatar",
      7: "custom",
      8: "online",
      9: "guest",
      10: "enterTime",
      12: "blacked",
      13: "gaged",
      14: "valid",
      15: "updateTime",
      16: "tempMuted",
      17: "tempMuteDuration"
    }
  }
}, function(e, t, n) {
  "use strict";
  e.exports = {
    imLogin: {
      os: 4,
      sdkVersion: 6,
      appLogin: 8,
      protocolVersion: 9,
      deviceId: 13,
      appKey: 18,
      account: 19,
      browser: 24,
      session: 26,
      token: 1e3
    },
    nosToken: {
      objectName: 1,
      token: 2,
      bucket: 3,
      expireTime: 4
    },
    audioToText: {
      url: 2
    },
    imageOp: {
      type: 0,
      stripmeta: 1,
      typeType: 2,
      blurRadius: 3,
      blurSigma: 4,
      qualityQuality: 5,
      cropX: 6,
      cropY: 7,
      cropWidth: 8,
      cropHeight: 9,
      rotateAngle: 10,
      pixelPixel: 11,
      thumbnailMode: 12,
      thumbnailWidth: 13,
      thumbnailHeight: 14,
      thumbnailAxisX: 15,
      thumbnailAxisY: 16,
      thumbnailCenterX: 17,
      thumbnailCenterY: 18,
      thumbnailEnlarge: 19,
      thumbnailToStatic: 20,
      watermarkType: 21,
      watermarkGravity: 22,
      watermarkDissolve: 23,
      watermarkDx: 24,
      watermarkDy: 25,
      watermarkImage: 26,
      watermarkText: 27,
      watermarkFont: 28,
      watermarkFontSize: 29,
      watermarkFontColor: 30,
      interlace: 31
    },
    robot: {
      account: 4,
      nick: 5,
      avatar: 6,
      intro: 7,
      config: 8,
      valid: 9,
      createTime: 10,
      updateTime: 11,
      custid: 12,
      botid: 13,
      bindTime: 14
    },
    clientAntispam: {
      version: 1,
      md5: 2,
      nosurl: 3,
      thesaurus: 4
    },
    transToken: {
      name: 1,
      type: 2,
      transType: 3,
      size: 4,
      extra: 5,
      body: 6
    },
    transInfo: {
      docId: 1,
      name: 2,
      prefix: 3,
      size: 4,
      type: 5,
      state: 6,
      transType: 7,
      transSize: 8,
      pageCount: 9,
      picInfo: 10,
      extra: 11,
      flag: 12
    },
    fileListParam: {
      fromDocId: 1,
      limit: 2
    },
    login: {
      appKey: 1,
      account: 2,
      deviceId: 3,
      chatroomId: 5,
      appLogin: 8,
      chatroomNick: 20,
      chatroomAvatar: 21,
      chatroomCustom: 22,
      chatroomEnterCustom: 23,
      session: 26,
      isAnonymous: 38
    },
    chatroom: {
      id: 1,
      name: 3,
      announcement: 4,
      broadcastUrl: 5,
      custom: 12,
      createTime: 14,
      updateTime: 15,
      queuelevel: 16,
      creator: 100,
      onlineMemberNum: 101,
      mute: 102
    },
    msg: {
      idClient: 1,
      type: 2,
      attach: 3,
      custom: 4,
      resend: 5,
      userUpdateTime: 6,
      fromNick: 7,
      fromAvatar: 8,
      fromCustom: 9,
      yidunEnable: 10,
      antiSpamContent: 11,
      skipHistory: 12,
      body: 13,
      antiSpamBusinessId: 14,
      clientAntiSpam: 15,
      antiSpamUsingYidun: 16,
      time: 20,
      from: 21,
      chatroomId: 22,
      fromClientType: 23,
      highPriority: 25
    },
    chatroomMember: {
      chatroomId: 1,
      account: 2,
      type: 3,
      level: 4,
      nick: 5,
      avatar: 6,
      custom: 7,
      online: 8,
      guest: 9,
      enterTime: 10,
      blacked: 12,
      gaged: 13,
      valid: 14,
      updateTime: 15,
      tempMuted: 16,
      tempMuteDuration: 17
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = n(32),
    i = s.merge({}, r.idMap, {
      chatroom: {
        id: 13,
        login: 2,
        kicked: 3,
        logout: 4,
        sendMsg: 6,
        msg: 7,
        getChatroomMembers: 8,
        getHistoryMsgs: 9,
        markChatroomMember: 11,
        closeChatroom: 12,
        getChatroom: 13,
        updateChatroom: 14,
        updateMyChatroomMemberInfo: 15,
        getChatroomMembersInfo: 16,
        kickChatroomMember: 17,
        updateChatroomMemberTempMute: 19,
        queueOffer: 20,
        queuePoll: 21,
        queueList: 22,
        peak: 23,
        queueDrop: 24,
        queueInit: 25
      },
      user: {
        id: 3,
        syncRobot: 16
      }
    }),
    o = s.merge({}, r.cmdConfig, {
      login: {
        sid: i.chatroom.id,
        cid: i.chatroom.login,
        params: [{
          type: "byte",
          name: "type"
        }, {
          type: "Property",
          name: "login"
        }, {
          type: "Property",
          name: "imLogin"
        }]
      },
      logout: {
        sid: i.chatroom.id,
        cid: i.chatroom.logout
      },
      sendMsg: {
        sid: i.chatroom.id,
        cid: i.chatroom.sendMsg,
        params: [{
          type: "Property",
          name: "msg"
        }]
      },
      getChatroomMembers: {
        sid: i.chatroom.id,
        cid: i.chatroom.getChatroomMembers,
        params: [{
          type: "byte",
          name: "type"
        }, {
          type: "long",
          name: "time"
        }, {
          type: "int",
          name: "limit"
        }]
      },
      getHistoryMsgs: {
        sid: i.chatroom.id,
        cid: i.chatroom.getHistoryMsgs,
        params: [{
          type: "long",
          name: "timetag"
        }, {
          type: "int",
          name: "limit"
        }, {
          type: "bool",
          name: "reverse"
        }, {
          type: "LongArray",
          name: "msgTypes"
        }]
      },
      markChatroomMember: {
        sid: i.chatroom.id,
        cid: i.chatroom.markChatroomMember,
        params: [{
          type: "string",
          name: "account"
        }, {
          type: "int",
          name: "type"
        }, {
          type: "bool",
          name: "isAdd"
        }, {
          type: "int",
          name: "level"
        }, {
          type: "string",
          name: "custom"
        }]
      },
      closeChatroom: {
        sid: i.chatroom.id,
        cid: i.chatroom.closeChatroom,
        params: [{
          type: "string",
          name: "custom"
        }]
      },
      getChatroom: {
        sid: i.chatroom.id,
        cid: i.chatroom.getChatroom
      },
      updateChatroom: {
        sid: i.chatroom.id,
        cid: i.chatroom.updateChatroom,
        params: [{
          type: "Property",
          name: "chatroom"
        }, {
          type: "bool",
          name: "needNotify"
        }, {
          type: "String",
          name: "custom"
        }]
      },
      updateMyChatroomMemberInfo: {
        sid: i.chatroom.id,
        cid: i.chatroom.updateMyChatroomMemberInfo,
        params: [{
          type: "Property",
          name: "chatroomMember"
        }, {
          type: "bool",
          name: "needNotify"
        }, {
          type: "String",
          name: "custom"
        }, {
          type: "bool",
          name: "needSave"
        }]
      },
      getChatroomMembersInfo: {
        sid: i.chatroom.id,
        cid: i.chatroom.getChatroomMembersInfo,
        params: [{
          type: "StrArray",
          name: "accounts"
        }]
      },
      kickChatroomMember: {
        sid: i.chatroom.id,
        cid: i.chatroom.kickChatroomMember,
        params: [{
          type: "string",
          name: "account"
        }, {
          type: "string",
          name: "custom"
        }]
      },
      updateChatroomMemberTempMute: {
        sid: i.chatroom.id,
        cid: i.chatroom.updateChatroomMemberTempMute,
        params: [{
          type: "String",
          name: "account"
        }, {
          type: "long",
          name: "duration"
        }, {
          type: "bool",
          name: "needNotify"
        }, {
          type: "String",
          name: "custom"
        }]
      },
      queueOffer: {
        sid: i.chatroom.id,
        cid: i.chatroom.queueOffer,
        params: [{
          type: "string",
          name: "elementKey"
        }, {
          type: "string",
          name: "elementValue"
        }, {
          type: "bool",
          name: "transient"
        }]
      },
      queuePoll: {
        sid: i.chatroom.id,
        cid: i.chatroom.queuePoll,
        params: [{
          type: "string",
          name: "elementKey"
        }]
      },
      queueList: {
        sid: i.chatroom.id,
        cid: i.chatroom.queueList
      },
      peak: {
        sid: i.chatroom.id,
        cid: i.chatroom.peak
      },
      queueDrop: {
        sid: i.chatroom.id,
        cid: i.chatroom.queueDrop
      },
      queueInit: {
        sid: i.chatroom.id,
        cid: i.chatroom.queueInit,
        params: [{
          type: "int",
          name: "limit"
        }]
      },
      syncRobot: {
        sid: i.user.id,
        cid: i.user.syncRobot,
        params: [{
          type: "long",
          name: "timetag"
        }]
      }
    }),
    a = s.merge({}, r.packetConfig, {
      "4_10": {
        service: "notify"
      },
      "4_11": {
        service: "notify"
      },
      "3_16": {
        service: "chatroom",
        cmd: "syncRobot",
        response: [{
          type: "PropertyArray",
          name: "robots",
          entity: "robot"
        }]
      },
      "13_2": {
        service: "chatroom",
        cmd: "login",
        response: [{
          type: "Property",
          name: "chatroom"
        }, {
          type: "Property",
          name: "chatroomMember"
        }]
      },
      "13_3": {
        service: "chatroom",
        cmd: "kicked",
        response: [{
          type: "Number",
          name: "reason"
        }, {
          type: "String",
          name: "custom"
        }]
      },
      "13_4": {
        service: "chatroom",
        cmd: "logout"
      },
      "13_6": {
        service: "chatroom",
        cmd: "sendMsg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "13_7": {
        service: "chatroom",
        cmd: "msg",
        response: [{
          type: "Property",
          name: "msg"
        }]
      },
      "13_8": {
        service: "chatroom",
        cmd: "getChatroomMembers",
        response: [{
          type: "PropertyArray",
          name: "members",
          entity: "chatroomMember"
        }]
      },
      "13_9": {
        service: "chatroom",
        cmd: "getHistoryMsgs",
        response: [{
          type: "PropertyArray",
          name: "msgs",
          entity: "msg"
        }]
      },
      "13_11": {
        service: "chatroom",
        cmd: "markChatroomMember",
        response: [{
          type: "Property",
          name: "chatroomMember"
        }]
      },
      "13_12": {
        service: "chatroom",
        cmd: "closeChatroom"
      },
      "13_13": {
        service: "chatroom",
        cmd: "getChatroom",
        response: [{
          type: "Property",
          name: "chatroom"
        }]
      },
      "13_14": {
        service: "chatroom",
        cmd: "updateChatroom"
      },
      "13_15": {
        service: "chatroom",
        cmd: "updateMyChatroomMemberInfo"
      },
      "13_16": {
        service: "chatroom",
        cmd: "getChatroomMembersInfo",
        response: [{
          type: "PropertyArray",
          name: "members",
          entity: "chatroomMember"
        }]
      },
      "13_17": {
        service: "chatroom",
        cmd: "kickChatroomMember"
      },
      "13_19": {
        service: "chatroom",
        cmd: "updateChatroomMemberTempMute"
      },
      "13_20": {
        service: "chatroom",
        cmd: "queueOffer"
      },
      "13_21": {
        service: "chatroom",
        cmd: "queuePoll",
        response: [{
          type: "String",
          name: "elementKey"
        }, {
          type: "String",
          name: "elementValue"
        }]
      },
      "13_22": {
        service: "chatroom",
        cmd: "queueList",
        response: [{
          type: "KVArray",
          name: "queueList"
        }]
      },
      "13_23": {
        service: "chatroom",
        cmd: "peak",
        response: [{
          type: "String",
          name: "elementKey"
        }, {
          type: "String",
          name: "elementValue"
        }]
      },
      "13_24": {
        service: "chatroom",
        cmd: "queueDrop"
      },
      "13_25": {
        service: "chatroom",
        cmd: "queueInit"
      }
    });
  e.exports = {
    idMap: i,
    cmdConfig: o,
    packetConfig: a
  }
}, function(e, t, n) {
  "use strict";
  e.exports = {
    nosToken: {
      1: "objectName",
      2: "token",
      3: "bucket",
      4: "expireTime"
    },
    audioToText: {
      2: "url"
    },
    imageOp: {
      0: "type",
      1: "stripmeta",
      2: "typeType",
      3: "blurRadius",
      4: "blurSigma",
      5: "qualityQuality",
      6: "cropX",
      7: "cropY",
      8: "cropWidth",
      9: "cropHeight",
      10: "rotateAngle",
      11: "pixelPixel",
      12: "thumbnailMode",
      13: "thumbnailWidth",
      14: "thumbnailHeight",
      15: "thumbnailAxisX",
      16: "thumbnailAxisY",
      17: "thumbnailCenterX",
      18: "thumbnailCenterY",
      19: "thumbnailEnlarge",
      20: "thumbnailToStatic",
      21: "watermarkType",
      22: "watermarkGravity",
      23: "watermarkDissolve",
      24: "watermarkDx",
      25: "watermarkDy",
      26: "watermarkImage",
      27: "watermarkText",
      28: "watermarkFont",
      29: "watermarkFontSize",
      30: "watermarkFontColor",
      31: "interlace"
    },
    robot: {
      4: "account",
      5: "nick",
      6: "avatar",
      7: "intro",
      8: "config",
      9: "valid",
      10: "createTime",
      11: "updateTime",
      12: "custid",
      13: "botid",
      14: "bindTime"
    },
    clientAntispam: {
      1: "version",
      2: "md5",
      3: "nosurl",
      4: "thesaurus"
    },
    transToken: {
      1: "name",
      2: "type",
      3: "transType",
      4: "size",
      5: "extra",
      6: "body"
    },
    transInfo: {
      1: "docId",
      2: "name",
      3: "prefix",
      4: "size",
      5: "type",
      6: "state",
      7: "transType",
      8: "transSize",
      9: "pageCount",
      10: "picInfo",
      11: "extra",
      12: "flag"
    },
    fileListParam: {
      1: "fromDocId",
      2: "limit"
    },
    login: {
      4: "os",
      6: "sdkVersion",
      8: "appLogin",
      9: "protocolVersion",
      13: "deviceId",
      18: "appKey",
      19: "account",
      24: "browser",
      26: "session",
      1000: "token"
    },
    loginRes: {
      17: "lastLoginDeviceId",
      102: "connectionId",
      103: "ip",
      104: "port",
      106: "country"
    },
    loginPort: {
      3: "type",
      4: "os",
      5: "mac",
      13: "deviceId",
      19: "account",
      102: "connectionId",
      103: "ip",
      109: "time"
    },
    sync: {
      1: "myInfo",
      2: "offlineMsgs",
      3: "teams",
      6: "netcallMsgs",
      7: "roamingMsgs",
      9: "relations",
      11: "friends",
      12: "sessions",
      13: "friendUsers",
      14: "msgReceipts",
      15: "myTeamMembers",
      16: "donnop",
      17: "deleteMsg",
      18: "sessionAck",
      19: "robots",
      20: "broadcastMsgs",
      100: "filterMsgs"
    },
    donnop: {
      1: "open"
    },
    team: {
      1: "teamId",
      3: "name",
      4: "type",
      5: "owner",
      6: "level",
      7: "selfCustom",
      8: "valid",
      9: "memberNum",
      10: "memberUpdateTime",
      11: "createTime",
      12: "updateTime",
      13: "validToCurrentUser",
      14: "intro",
      15: "announcement",
      16: "joinMode",
      17: "bits",
      18: "custom",
      19: "serverCustom",
      20: "avatar",
      21: "beInviteMode",
      22: "inviteMode",
      23: "updateTeamMode",
      24: "updateCustomMode",
      100: "mute",
      101: "muteType"
    },
    teamMember: {
      1: "teamId",
      3: "account",
      4: "type",
      5: "nickInTeam",
      7: "bits",
      8: "active",
      9: "valid",
      10: "joinTime",
      11: "updateTime",
      12: "custom",
      13: "mute"
    },
    msg: {
      0: "scene",
      1: "to",
      2: "from",
      4: "fromClientType",
      5: "fromDeviceId",
      6: "fromNick",
      7: "time",
      8: "type",
      9: "body",
      10: "attach",
      11: "idClient",
      12: "idServer",
      13: "resend",
      14: "userUpdateTime",
      15: "custom",
      16: "pushPayload",
      17: "pushContent",
      18: "apnsAccounts",
      19: "apnsContent",
      20: "apnsForcePush",
      21: "yidunEnable",
      22: "antiSpamContent",
      23: "antiSpamBusinessId",
      24: "clientAntiSpam",
      25: "antiSpamUsingYidun",
      26: "needMsgReceipt",
      100: "isHistoryable",
      101: "isRoamingable",
      102: "isSyncable",
      104: "isMuted",
      105: "cc",
      107: "isPushable",
      108: "isOfflinable",
      109: "isUnreadable",
      110: "needPushNick",
      111: "isReplyMsg",
      112: "tempTeamMemberCount"
    },
    msgReceipt: {
      1: "to",
      2: "from",
      7: "time",
      11: "idClient"
    },
    teamMsgReceipt: {
      0: "teamId",
      1: "idServer",
      100: "read",
      101: "unread",
      102: "idClient",
      103: "account"
    },
    sysMsg: {
      0: "time",
      1: "type",
      2: "to",
      3: "from",
      4: "ps",
      5: "attach",
      6: "idServer",
      7: "sendToOnlineUsersOnly",
      8: "apnsText",
      9: "pushPayload",
      10: "deletedIdClient",
      11: "deletedIdServer",
      12: "yidunEnable",
      13: "antiSpamContent",
      14: "deletedMsgTime",
      15: "deletedMsgFromNick",
      16: "opeAccount",
      105: "cc",
      107: "isPushable",
      109: "isUnreadable",
      110: "needPushNick"
    },
    broadcastMsg: {
      1: "broadcastId",
      2: "fromAccid",
      3: "fromUid",
      4: "timestamp",
      5: "body"
    },
    friend: {
      4: "account",
      5: "flag",
      6: "beflag",
      7: "source",
      8: "alias",
      9: "bits",
      10: "custom",
      11: "createTime",
      12: "updateTime"
    },
    user: {
      1: "account",
      3: "nick",
      4: "avatar",
      5: "sign",
      6: "gender",
      7: "email",
      8: "birth",
      9: "tel",
      10: "custom",
      12: "createTime",
      13: "updateTime"
    },
    specialRelation: {
      0: "account",
      1: "isMuted",
      2: "isBlacked",
      3: "createTime",
      4: "updateTime"
    },
    msgType: {
      0: "text",
      1: "picture",
      2: "audio",
      3: "video",
      4: "location",
      5: "notification",
      6: "file",
      7: "netcall_audio",
      8: "netcall_vedio",
      9: "datatunnel_new",
      10: "tips",
      11: "robot",
      100: "custom"
    },
    msgEvent: {
      1: "type",
      2: "value",
      3: "idClient",
      4: "custom",
      5: "validTime",
      6: "broadcastType",
      7: "sync",
      8: "validTimeType",
      9: "durable",
      10: "time",
      11: "idServer",
      12: "clientType",
      13: "serverConfig",
      14: "serverCustom",
      101: "appid",
      103: "account",
      104: "enableMultiClient",
      106: "consid"
    },
    msgEventSubscribe: {
      1: "type",
      2: "subscribeTime",
      3: "sync",
      102: "to",
      104: "from",
      105: "time"
    }
  }
}, function(e, t, n) {
  "use strict";
  e.exports = {
    nosToken: {
      objectName: 1,
      token: 2,
      bucket: 3,
      expireTime: 4
    },
    audioToText: {
      url: 2
    },
    imageOp: {
      type: 0,
      stripmeta: 1,
      typeType: 2,
      blurRadius: 3,
      blurSigma: 4,
      qualityQuality: 5,
      cropX: 6,
      cropY: 7,
      cropWidth: 8,
      cropHeight: 9,
      rotateAngle: 10,
      pixelPixel: 11,
      thumbnailMode: 12,
      thumbnailWidth: 13,
      thumbnailHeight: 14,
      thumbnailAxisX: 15,
      thumbnailAxisY: 16,
      thumbnailCenterX: 17,
      thumbnailCenterY: 18,
      thumbnailEnlarge: 19,
      thumbnailToStatic: 20,
      watermarkType: 21,
      watermarkGravity: 22,
      watermarkDissolve: 23,
      watermarkDx: 24,
      watermarkDy: 25,
      watermarkImage: 26,
      watermarkText: 27,
      watermarkFont: 28,
      watermarkFontSize: 29,
      watermarkFontColor: 30,
      interlace: 31
    },
    robot: {
      account: 4,
      nick: 5,
      avatar: 6,
      intro: 7,
      config: 8,
      valid: 9,
      createTime: 10,
      updateTime: 11,
      custid: 12,
      botid: 13,
      bindTime: 14
    },
    clientAntispam: {
      version: 1,
      md5: 2,
      nosurl: 3,
      thesaurus: 4
    },
    transToken: {
      name: 1,
      type: 2,
      transType: 3,
      size: 4,
      extra: 5,
      body: 6
    },
    transInfo: {
      docId: 1,
      name: 2,
      prefix: 3,
      size: 4,
      type: 5,
      state: 6,
      transType: 7,
      transSize: 8,
      pageCount: 9,
      picInfo: 10,
      extra: 11,
      flag: 12
    },
    fileListParam: {
      fromDocId: 1,
      limit: 2
    },
    login: {
      os: 4,
      sdkVersion: 6,
      appLogin: 8,
      protocolVersion: 9,
      deviceId: 13,
      appKey: 18,
      account: 19,
      browser: 24,
      session: 26,
      token: 1e3
    },
    loginRes: {
      lastLoginDeviceId: 17,
      connectionId: 102,
      ip: 103,
      port: 104,
      country: 106
    },
    loginPort: {
      type: 3,
      os: 4,
      mac: 5,
      deviceId: 13,
      account: 19,
      connectionId: 102,
      ip: 103,
      time: 109
    },
    sync: {
      myInfo: 1,
      offlineMsgs: 2,
      teams: 3,
      netcallMsgs: 6,
      roamingMsgs: 7,
      relations: 9,
      friends: 11,
      sessions: 12,
      friendUsers: 13,
      msgReceipts: 14,
      myTeamMembers: 15,
      donnop: 16,
      deleteMsg: 17,
      sessionAck: 18,
      robots: 19,
      broadcastMsgs: 20,
      filterMsgs: 100
    },
    donnop: {
      open: 1
    },
    team: {
      teamId: 1,
      name: 3,
      type: 4,
      owner: 5,
      level: 6,
      selfCustom: 7,
      valid: 8,
      memberNum: 9,
      memberUpdateTime: 10,
      createTime: 11,
      updateTime: 12,
      validToCurrentUser: 13,
      intro: 14,
      announcement: 15,
      joinMode: 16,
      bits: 17,
      custom: 18,
      serverCustom: 19,
      avatar: 20,
      beInviteMode: 21,
      inviteMode: 22,
      updateTeamMode: 23,
      updateCustomMode: 24,
      mute: 100,
      muteType: 101
    },
    teamMember: {
      teamId: 1,
      account: 3,
      type: 4,
      nickInTeam: 5,
      bits: 7,
      active: 8,
      valid: 9,
      joinTime: 10,
      updateTime: 11,
      custom: 12,
      mute: 13
    },
    msg: {
      scene: 0,
      to: 1,
      from: 2,
      fromClientType: 4,
      fromDeviceId: 5,
      fromNick: 6,
      time: 7,
      type: 8,
      body: 9,
      attach: 10,
      idClient: 11,
      idServer: 12,
      resend: 13,
      userUpdateTime: 14,
      custom: 15,
      pushPayload: 16,
      pushContent: 17,
      apnsAccounts: 18,
      apnsContent: 19,
      apnsForcePush: 20,
      yidunEnable: 21,
      antiSpamContent: 22,
      antiSpamBusinessId: 23,
      clientAntiSpam: 24,
      antiSpamUsingYidun: 25,
      needMsgReceipt: 26,
      isHistoryable: 100,
      isRoamingable: 101,
      isSyncable: 102,
      isMuted: 104,
      cc: 105,
      isPushable: 107,
      isOfflinable: 108,
      isUnreadable: 109,
      needPushNick: 110,
      isReplyMsg: 111,
      tempTeamMemberCount: 112
    },
    msgReceipt: {
      to: 1,
      from: 2,
      time: 7,
      idClient: 11
    },
    teamMsgReceipt: {
      teamId: 0,
      idServer: 1,
      read: 100,
      unread: 101,
      idClient: 102,
      account: 103
    },
    sysMsg: {
      time: 0,
      type: 1,
      to: 2,
      from: 3,
      ps: 4,
      attach: 5,
      idServer: 6,
      sendToOnlineUsersOnly: 7,
      apnsText: 8,
      pushPayload: 9,
      deletedIdClient: 10,
      deletedIdServer: 11,
      yidunEnable: 12,
      antiSpamContent: 13,
      deletedMsgTime: 14,
      deletedMsgFromNick: 15,
      opeAccount: 16,
      cc: 105,
      isPushable: 107,
      isUnreadable: 109,
      needPushNick: 110
    },
    broadcastMsg: {
      broadcastId: 1,
      fromAccid: 2,
      fromUid: 3,
      timestamp: 4,
      body: 5
    },
    friend: {
      account: 4,
      flag: 5,
      beflag: 6,
      source: 7,
      alias: 8,
      bits: 9,
      custom: 10,
      createTime: 11,
      updateTime: 12
    },
    user: {
      account: 1,
      nick: 3,
      avatar: 4,
      sign: 5,
      gender: 6,
      email: 7,
      birth: 8,
      tel: 9,
      custom: 10,
      createTime: 12,
      updateTime: 13
    },
    specialRelation: {
      account: 0,
      isMuted: 1,
      isBlacked: 2,
      createTime: 3,
      updateTime: 4
    },
    msgType: {
      text: 0,
      picture: 1,
      audio: 2,
      video: 3,
      location: 4,
      notification: 5,
      file: 6,
      netcall_audio: 7,
      netcall_vedio: 8,
      datatunnel_new: 9,
      tips: 10,
      robot: 11,
      custom: 100
    },
    msgEvent: {
      type: 1,
      value: 2,
      idClient: 3,
      custom: 4,
      validTime: 5,
      broadcastType: 6,
      sync: 7,
      validTimeType: 8,
      durable: 9,
      time: 10,
      idServer: 11,
      clientType: 12,
      serverConfig: 13,
      serverCustom: 14,
      appid: 101,
      account: 103,
      enableMultiClient: 104,
      consid: 106
    },
    msgEventSubscribe: {
      type: 1,
      subscribeTime: 2,
      sync: 3,
      to: 102,
      from: 104,
      time: 105
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(11).fn,
    r = n(34);
  s.processMisc = function(e) {
    switch (e.cmd) {
      case "getSimpleNosToken":
        e.error || (e.obj = e.content.nosTokens[0]);
        break;
      case "getNosToken":
        e.error || (e.obj = e.content.nosToken);
        break;
      case "notifyUploadLog":
        e.error || this.emitAPI({
          type: "notifyUploadLog"
        });
        break;
      case "audioToText":
        e.error || (e.obj.text = e.content.text);
        break;
      case "processImage":
        e.obj.imageOps = r.reverseImageOps(e.obj.imageOps), e.error || (e.obj = {
          url: e.content.url
        });
        break;
      case "getNosTokenTrans":
        e.error || (e.obj = {
          nosToken: e.content.nosToken,
          docId: e.content.docId
        });
        break;
      case "notifyTransLog":
        e.error || this.emitAPI({
          type: "notifyTransLog",
          obj: e.content.transInfo
        });
        break;
      case "fetchFile":
      case "fetchFileList":
      case "removeFile":
        e.error || (e.obj = e.content)
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(11).fn,
    r = n(1);
  s.processLink = function(e) {
    e.cmd
  }, s.startHeartbeat = function() {
    var e = this;
    e.stopHeartbeat(), e.heartbeatTimer = setTimeout(function() {
      e.sendCmd("heartbeat", null, e.onHeartbeat.bind(e))
    }, r.heartbeatInterval)
  }, s.stopHeartbeat = function() {
    this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
  }, s.onHeartbeat = function(e, t) {
    e ? (e.callFunc = "link::onHeartbeat", this.api.reportLogs({
      event: "ping_timeout"
    }), this.onCustomError("heartbeat error", "HEARTBEAT_ERROR", e)) : this.startHeartbeat()
  }, s.heartbeat = function() {}
}, function(e, t, n) {
  "use strict";
  var s, r = n(11).fn,
    i = n(3),
    o = n(10),
    a = n(21),
    c = n(8),
    u = n(1),
    m = n(0),
    l = m.notundef;
  r.login = function() {
    this.sendCmd("login", this.assembleLogin(), this.onLogin.bind(this)), this.autoconnect = !1
  }, r.genSessionKey = (s = {}, function() {
    var e = this.name;
    return s[e] = s[e] || m.guid()
  }), r.assembleIMLogin = function() {
    var e = this.options,
      t = e.account,
      n = this.autoconnect ? 0 : 1;
    return this.sdkSession = this.genSessionKey(), {
      appLogin: n,
      appKey: e.appKey,
      account: t,
      token: e.token,
      sdkVersion: u.info.sdkVersion,
      protocolVersion: u.info.protocolVersion,
      os: o.os.toString(),
      browser: o.name + " " + o.version,
      session: this.sdkSession,
      deviceId: c.deviceId
    }
  }, r.onLogin = function(e, t) {
    this.loginResult = t, e ? this.onAuthError(e, "link::onLogin") : (this.startHeartbeat(), this.afterLogin(t))
  }, r.afterLogin = m.emptyFunc, r.notifyLogin = function() {
    var e = this.loginResult;
    this.logger.info("link::notifyLogin: on connect", e), this.options.onconnect(e)
  }, r.logout = function() {
    if (this.isConnected()) {
      var e = new i("主动退出", "logout");
      this.onAuthError(e, "link::logout")
    }
  }, r.onKicked = function(e) {
    var t = e.content,
      n = t.from,
      s = t.reason,
      r = t.custom,
      o = {
        reason: this.kickedReasons[s] || "unknown",
        message: this.kickedMessages[s] || "未知原因"
      };
    if (l(n) && (o.from = a.reverseType(n)), l(r) && (o.custom = r), this.shouldNotifyKicked(o)) {
      var c = new i("被踢了", "kicked");
      m.merge(c, o), this.onAuthError(c, "link::onKicked")
    } else this.logger.warn("link::onKicked: silentlyKick"), this.shouldReconnect = !0, this.hasNotifyDisconnected = !0, this.disconnectSocket()
  }, r.shouldNotifyKicked = function(e) {
    return "silentlyKick" !== e.reason
  }, r.onAuthError = function(e, t) {
    this.shouldReconnect = !1, (e = e || i.newConnectionError({
      callFunc: t
    })).callFunc = e.callFunc || t || null, this.markAllCallbackInvalid(e), this.notifyDisconnect(e)
  }
}, function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t) {
  function n(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
  }
  e.exports = n, n.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var t = Math.random(),
        n = Math.floor(t * this.jitter * e);
      e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
    }
    return 0 | Math.min(e, this.max)
  }, n.prototype.reset = function() {
    this.attempts = 0
  }, n.prototype.setMin = function(e) {
    this.ms = e
  }, n.prototype.setMax = function(e) {
    this.max = e
  }, n.prototype.setJitter = function(e) {
    this.jitter = e
  }
}, function(e, t, n) {
  "use strict";
  var s = n(11).fn,
    r = n(3),
    i = n(69),
    o = n(33),
    a = n(1),
    c = n(0);
  s.initConnect = function() {
    this.socket = null, this.retryCount = 0, this.connecting = !1, this.shouldReconnect = !0, this.hasNotifyDisconnected = !1
  }, s.resetConnect = function() {
    var e = this.options;
    c.notundef(e.needReconnect) ? (c.verifyParamType("needReconnect", e.needReconnect, "boolean", "link::resetConnect"), this.needReconnect = e.needReconnect) : this.needReconnect = !0, this.logger.log("link::resetConnect: needReconnect " + this.needReconnect), c.notundef(e.reconnectionAttempts) && c.verifyParamType("reconnectionAttempts", e.reconnectionAttempts, "number", "link::resetConnect"), this.reconnectionAttempts = e.reconnectionAttempts || 1 / 0, this.backoff = new i({
      min: a.reconnectionDelay,
      max: a.reconnectionDelayMax,
      jitter: a.reconnectionJitter
    })
  }, s.connect = function() {
    if (this.isConnected()) this.logger.warn("link::connect: already connected");
    else if (this.connecting) this.logger.warn("link::connect: already connecting");
    else if (this.connecting = !0, this.hasNotifyDisconnected = !1, this.socket) this.logger.info("link::connect: try connecting..."), this.socket.socket.connect();
    else {
      var e = this.getNextSocketUrl();
      e ? this.connectToUrl(e) : this.refreshSocketUrl()
    }
  }, s.getNextSocketUrl = function() {
    return this.socketUrls.shift()
  }, s.isConnected = function() {
    return !!this.socket && !!this.socket.socket && this.socket.socket.connected
  }, s.connectToUrl = function(e) {
    var t = this;
    if (t.logger.log("link::connectToUrl: " + e), "undefined" == typeof window) {
      var n = c.getGlobal(),
        s = e.split(":");
      n.location || (n.location = {
        protocol: s[0],
        hostname: s[1].slice(2),
        port: s[2]
      }), this.options.transports = ["websocket"]
    }
    var r = this.options.transports || ["websocket", "xhr-polling"];
    t.socket = o.connect(e, {
      transports: r,
      reconnect: !1,
      "force new connection": !0,
      "connect timeout": a.connectTimeout
    }), t.logger.info("link::connectToUrl: socket url: " + e + ", transports: " + JSON.stringify(r)), t.socket.on("connect", t.onConnect.bind(t)), t.socket.on("handshake_failed", t.onHandshakeFailed.bind(t)), t.socket.on("connect_failed", t.onConnectFailed.bind(t)), t.socket.on("error", t.onError.bind(t)), t.socket.on("message", t.onMessage.bind(t)), t.socket.on("disconnect", function() {
      t.logger.warn("link::connectToUrl: socket url: " + e + ", disconnected"), t.onDisconnect(!0, "link::socketDisconnect")
    })
  }, s.disconnect = function(e) {
    var t = this;

    function n(n) {
      t.logger.info("link::disconnect: socket finally closed, ", n), clearTimeout(t.disconnectCallbackTimer), e(n)
    }
    e instanceof Function || (e = function() {}), t.connectTimer && clearTimeout(t.connectTimer), t.disconnectCallbackTimer = setTimeout(function() {
      e.call(t, "mark disconnected due to timeout")
    }, 1e4), t.socket && t.socket.socket && t.socket.socket.transport ? t.socket.socket.transport.onDisconnectDone = function(e) {
      n(e)
    } : n(null), t.isConnected() ? (t.logger.log("link::disconnect: start disconnecting"), t.logout()) : t.connecting && (t.shouldReconnect = !1, t.needReconnect = !1, t.disconnectSocket())
  }, s.onConnect = function() {
    this.backoff && this.backoff.reset(), this.reconnectStatus = this.retryCount > 0 ? 1 : 0, this.retryCount = 0, this.connecting = !1, this.shouldReconnect = !0, this.hasNotifyDisconnected = !1, this.logger.log("link::onConnect: socket onconnected, start login"), this.login(), this.api.reportLogs({
      event: "ws_connected"
    })
  }, s.onHandshakeFailed = function() {
    this.api.reportLogs({
      event: "ws_handshake_failed"
    }), this.onDisconnect(!1, "link::onHandshakeFailed")
  }, s.onConnectFailed = function() {
    this.api.reportLogs({
      event: "ws_connect_failed"
    }), this.onDisconnect(!1, "link::onConnectFailed")
  }, s.onError = function() {
    var e = arguments[0];
    e && (this.api.reportLogs({
      event: "connect_timeout"
    }), this.onMiscError("连接错误", new r(e, "LINK_ERROR", {
      callFunc: "link::onError"
    })))
  }, s.onDisconnect = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    this.connected = e, this.connecting = !1, this.markAllCallbackInvalid(r.newNetworkError({
      callFunc: t
    })), this.stopHeartbeat(), this.reconnect()
  }, s.willReconnect = function() {
    return this.shouldReconnect && this.needReconnect && this.retryCount < this.reconnectionAttempts
  }, s.reconnect = function() {
    var e = this;
    if (e.willReconnect()) {
      e.socket = null, e.connected && (e.autoconnect = !0), e.retryCount++, e.appLogin = 1;
      var t = e.backoff.duration();
      e.logger.info("link::reconnect: will retry after " + t + "ms, retryCount " + e.retryCount), e.options.onwillreconnect({
        retryCount: e.retryCount,
        duration: t
      }), e.connectTimer = setTimeout(function() {
        clearTimeout(e.connectTimer), e.connect()
      }, t)
    } else e.notifyDisconnect()
  }, s.notifyConnectError = function(e) {
    var t = r.newConnectError({
      message: e,
      callFunc: "link::notifyConnectError"
    });
    this.logger.error("link::notifyConnectError:", t), this.options.onerror(t)
  }, s.notifyDisconnect = function(e) {
    this.hasNotifyDisconnected || (this.hasNotifyDisconnected = !0, this.disconnectSocket(), (e = e || new r).retryCount = this.retryCount, e.willReconnect = this.willReconnect(), this.backoff && this.backoff.reset(), this.retryCount = 0, this.connecting = !1, this.logger.info("link::notifyDisconnect: ondisconnected ", e), this.options.ondisconnect(e))
  }, s.disconnectSocket = function() {
    if (this.isConnected() || this.connecting) try {
      this.socket.disconnect(), this.socket = null
    } catch (e) {
      this.logger.info("link::disconnectSocket: disconnect failed, error ", e)
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(6).fn,
    r = n(0),
    i = n(9),
    o = n(1),
    a = n(10);
  (a = a || {}).name = a.name || "", a.version = a.version || "", s.reportLogs = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = this,
      n = t.options,
      s = o.ntServerAddress;
    if (s) {
      var c = o.info;
      e = r.merge(e, {
        appkey: n.appKey,
        uid: n.account,
        os: "web",
        session: t.protocol.sdkSession || "",
        ver: c.sdkVersion,
        type: t.subType,
        platform: "" + a.name.toLowerCase() + a.version.replace(/(\.\d+)+$/, "")
      });
      var u = s + r.genUrlSep(s),
        m = [];
      for (var l in e) m.push(l + "=" + e[l]);
      u += m.join("&"), i(u, {
        proxyUrl: r.url2origin(u) + "/lbs/res/cors/nej_proxy_frame.html",
        timeout: o.xhrTimeout,
        onload: function() {},
        onerror: function(e) {
          t.logger.info("report::ajax report error", e)
        }
      })
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(0),
    i = n(6).fn;

  function o(e, t, n, s) {
    var r = !1,
      i = "";
    if (1 === n ? e.indexOf(t) >= 0 && (r = !0, i = t) : 2 === n && (i = new RegExp(t, "g")).test(e) && (r = !0), r && "" !== i) switch (s) {
      case 1:
        return e.replace(i, "**");
      case 2:
        return {
          code: 2
        };
      case 3:
        return {
          code: 3
        }
    }
    return e
  }

  function a(e, t) {
    for (var n = t.match, r = t.operate, i = e, a = 0; a < t.keys.length; a++) {
      var c = t.keys[a],
        u = c.match || n,
        m = c.operate || r;
      try {
        if ("object" === (void 0 === (i = o(i, c.key, u, m)) ? "undefined" : s(i))) return i
      } catch (e) {
        this.logger.warn("misc::filterContent: js cannot parse this regexp ", e)
      }
    }
    return i
  }
  i.uploadSdkLogUrl = function(e) {
    return r.verifyOptions(e, "url", "misc::uploadSdkLogUrl"), this.cbAndSendCmd("uploadSdkLogUrl", e)
  }, i.getClientAntispamLexicon = function(e) {
    var t = this,
      n = (e = e || {}).done;
    n instanceof Function || (n = function() {}), e = {
      clientAntispam: {
        version: 0
      }
    };
    var s = this;
    return this.protocol.sendCmd("getClientAntispam", e, function(e, r, i) {
      e ? (s.protocol.logger.error("misc::getClientAntispamLexicon:", e), n.call(t, e, {})) : (n.call(t, null, i), s.antispamLexicon = i.clientAntispam || {})
    })
  }, i.filterClientAntispam = function(e) {
    var t = e.content,
      n = e.antispamLexicon;
    if (!t) return {
      code: 404,
      errmsg: "待反垃圾文本content不存在"
    };
    n = n || this.antispamLexicon || {};
    var r = this.antispamLexicon && this.antispamLexicon.thesaurus;
    if (!r) return {
      code: 404,
      errmsg: "没有反垃圾词库或者词库格式不合法"
    };
    try {
      r = JSON.parse(r).thesaurus
    } catch (e) {
      return this.protocol.logger.error("misc::filterClientAntispam: parse thesaurus error"), {
        code: 500,
        errmsg: "反垃圾词库格式不合法"
      }
    }
    for (var i = t, o = 0; o < r.length; o++)
      if ("object" === (void 0 === (i = a.call(this, i, r[o])) ? "undefined" : s(i))) {
        if (2 === i.code) return {
          code: 200,
          type: 2,
          errmsg: "建议拒绝发送",
          content: t,
          result: ""
        };
        if (3 === i.code) return {
          code: 200,
          type: 3,
          errmsg: "建议服务器处理反垃圾，发消息带上字段clientAntiSpam",
          content: t,
          result: t
        }
      }
    return i === t ? {
      code: 200,
      type: 0,
      errmsg: "",
      content: t,
      result: i
    } : {
      code: 200,
      type: 1,
      errmsg: "已对特殊字符做了过滤",
      content: t,
      result: i
    }
  }
}, function(e, t, n) {
  "use strict";
  var s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    i = n(14),
    o = n(0),
    a = n(6).fn;
  a.viewImageSync = function(e) {
    var t = this.options;
    o.verifyOptions(e, "url", "nos::viewImageSync");
    var n = e.url,
      s = (0, i.url2object)(n),
      a = s.protocol,
      c = s.hostname,
      u = s.path,
      m = s.query;
    if ("boolean" == typeof e.strip && (m.stripmeta = e.strip ? 1 : 0), "number" == typeof e.quality && (o.verifyParamMin("quality", e.quality, 0, "nos::viewImageSync"), o.verifyParamMax("quality", e.quality, 100, "nos::viewImageSync"), m.quality = Math.round(e.quality)), "boolean" == typeof e.interlace && (m.interlace = e.interlace ? 1 : 0), "number" == typeof e.rotate && (m.rotate = Math.round(e.rotate)), "object" === r(e.thumbnail)) {
      var l = e.thumbnail.mode || "crop",
        d = e.thumbnail.width,
        p = e.thumbnail.height;
      if (d >= 0 && p >= 0 && d < 4096 && p < 4096 && (d > 0 || p > 0)) {
        switch (l) {
          case "crop":
            l = "y";
            break;
          case "contain":
            l = "x";
            break;
          case "cover":
            l = "z";
            break;
          default:
            l = "x"
        }
        m.thumbnail = "" + d + l + p
      }
    }
    if (t.downloadUrl) {
      var f = (0, i.url2object)(e.url),
        g = t.downloadUrl,
        y = f.path,
        h = y.indexOf("/");
      if (-1 !== h) {
        var v = y.substring(0, h),
          b = y.substring(h + 1);
        g = g.replace("{bucket}", v).replace("{object}", b)
      }
      var M = (0, i.url2object)(g);
      return (0, i.object2url)({
        protocol: M.protocol,
        hostname: M.hostname,
        path: M.path,
        query: o.merge(M.query, m)
      })
    }
    return (0, i.object2url)({
      protocol: a,
      hostname: c,
      path: u,
      query: m
    })
  }, a.viewImageStripMeta = function(e) {
    o.verifyOptions(e, "url strip", "nos::viewImageStripMeta"), o.verifyParamType("strip", e.strip, "boolean", "nos::viewImageStripMeta");
    var t = "stripmeta=" + (e.strip ? 1 : 0),
      n = (0, i.genUrlSep)(e.url);
    return e.url + n + t
  }, a.viewImageQuality = function(e) {
    o.verifyOptions(e, "url quality", "nos::viewImageQuality"), o.verifyParamType("quality", e.quality, "number", "nos::viewImageQuality"), o.verifyParamMin("quality", e.quality, 0, "nos::viewImageQuality"), o.verifyParamMax("quality", e.quality, 100, "nos::viewImageQuality");
    var t = "quality=" + Math.round(e.quality),
      n = (0, i.genUrlSep)(e.url);
    return e.url + n + t
  }, a.viewImageInterlace = function(e) {
    o.verifyOptions(e, "url", "nos::viewImageInterlace");
    var t = (0, i.genUrlSep)(e.url);
    return e.url + t + "interlace=1"
  }, a.viewImageRotate = function(e) {
    for (o.verifyOptions(e, "url angle", "nos::viewImageRotate"), o.verifyParamType("angle", e.angle, "number", "nos::viewImageRotate"); e.angle < 0;) e.angle = e.angle + 360;
    e.angle = e.angle % 360;
    var t = "rotate=" + Math.round(e.angle),
      n = (0, i.genUrlSep)(e.url);
    return e.url + n + t
  }, a.viewImageBlur = function(e) {
    o.verifyOptions(e, "url radius sigma", "nos::viewImageBlur"), o.verifyParamType("radius", e.radius, "number", "nos::viewImageBlur"), o.verifyParamMin("radius", e.radius, 1, "nos::viewImageBlur"), o.verifyParamMax("radius", e.radius, 50, "nos::viewImageBlur"), o.verifyParamType("sigma", e.sigma, "number", "nos::viewImageBlur"), o.verifyParamMin("sigma", e.sigma, 0, "nos::viewImageBlur");
    var t = "blur=" + Math.round(e.radius) + "x" + Math.round(e.sigma),
      n = (0, i.genUrlSep)(e.url);
    return e.url + n + t
  }, a.viewImageCrop = function(e) {
    o.verifyOptions(e, "url x y width height", "nos::viewImageCrop"), o.verifyParamType("x", e.x, "number", "nos::viewImageCrop"), o.verifyParamMin("x", e.x, 0, "nos::viewImageCrop"), o.verifyParamType("y", e.y, "number", "nos::viewImageCrop"), o.verifyParamMin("y", e.y, 0, "nos::viewImageCrop"), o.verifyParamType("width", e.width, "number", "nos::viewImageCrop"), o.verifyParamMin("width", e.width, 0, "nos::viewImageCrop"), o.verifyParamType("height", e.height, "number", "nos::viewImageCrop"), o.verifyParamMin("height", e.height, 0, "nos::viewImageCrop");
    var t = "crop=" + Math.round(e.x) + "_" + Math.round(e.y) + "_" + Math.round(e.width) + "_" + Math.round(e.height),
      n = (0, i.genUrlSep)(e.url);
    return e.url + n + t
  }, a.viewImageThumbnail = (s = {
    cover: "z",
    contain: "x",
    crop: "y"
  }, function(e) {
    o.verifyOptions(e, "url mode", "nos::viewImageThumbnail"), o.verifyParamValid("mode", e.mode, Object.keys(s), "nos::viewImageThumbnail"), "contain" === e.mode ? o.verifyParamAtLeastPresentOne(e, "width height", "nos::viewImageThumbnail") : o.verifyOptions(e, "width height", "nos::viewImageThumbnail"), o.undef(e.width) && (e.width = 0), o.undef(e.height) && (e.height = 0), o.verifyParamType("width", e.width, "number", "nos::viewImageThumbnail"), o.verifyParamMin("width", e.width, 0, "nos::viewImageThumbnail"), o.verifyParamType("height", e.height, "number", "nos::viewImageThumbnail"), o.verifyParamMin("height", e.height, 0, "nos::viewImageThumbnail");
    var t = Math.round(e.width),
      n = Math.round(e.height),
      r = "thumbnail=" + t + s[e.mode] + n;
    "crop" === e.mode && o.notundef(e.axis) && (o.undef(e.axis.x) && (e.axis.x = 5), o.undef(e.axis.y) && (e.axis.y = 5), o.verifyParamMin("axis.x", e.axis.x, 0, "nos::viewImageThumbnail"), o.verifyParamMax("axis.x", e.axis.x, 10, "nos::viewImageThumbnail"), o.verifyParamMin("axis.y", e.axis.y, 0, "nos::viewImageThumbnail"), o.verifyParamMax("axis.y", e.axis.y, 10, "nos::viewImageThumbnail"), r = r + "&axis=" + Math.round(e.axis.x) + "_" + Math.round(e.axis.y)), o.notundef(e.enlarge) && (o.verifyParamType("enlarge", e.enlarge, "boolean", "nos::viewImageThumbnail"), e.enlarge && (r += "&enlarge=1"));
    var a = (0, i.genUrlSep)(e.url);
    return e.url + a + r
  })
}, function(e, t, n) {
  "use strict";
  var s, r = n(0),
    i = n(6).fn,
    o = n(34);
  i.getSimpleNosToken = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e.num = 1, r.verifyOptions(e), this.cbAndSendCmd("getSimpleNosToken", e)
  }, i.getNosToken = function(e) {
    this.sendCmd("getNosToken", {
      responseBody: e.responseBody
    }, e.callback)
  }, i.getNosTokenTrans = function(e) {
    this.sendCmd("getNosTokenTrans", e.responseBody, e.callback)
  }, i.packFileDownloadName = function(e) {
    r.verifyOptions(e, "url name", !0, "", "nos::packFileDownloadName");
    var t = e.url;
    return t + r.genUrlSep(t) + "download=" + encodeURIComponent(e.name)
  }, i.audioToMp3 = function(e) {
    r.verifyOptions(e, "url", "nos::audioToMp3");
    var t = e.url;
    return t + r.genUrlSep(t) + "audioTrans&type=mp3"
  }, i.removeFile = function(e) {
    this.sendCmd("removeFile", e, e.callback)
  }, i.fetchFile = function(e) {
    this.sendCmd("fetchFile", e, e.callback)
  }, i.fetchFileList = function(e) {
    this.sendCmd("fetchFileList", e, e.callback)
  }, i.stripImageMeta = function(e) {
    return this.beforeProcessImage(e, "stripmeta")
  }, i.qualityImage = function(e) {
    return this.beforeProcessImage(e, "quality")
  }, i.interlaceImage = function(e) {
    return this.beforeProcessImage(e, "interlace")
  }, i.rotateImage = function(e) {
    return this.beforeProcessImage(e, "rotate")
  }, i.blurImage = function(e) {
    return this.beforeProcessImage(e, "blur")
  }, i.cropImage = function(e) {
    return this.beforeProcessImage(e, "crop")
  }, i.thumbnailImage = function(e) {
    return this.beforeProcessImage(e, "thumbnail")
  }, i.beforeProcessImage = function(e, t) {
    var n = r.copy(e);
    return n.type = t, e.ops = [n], this.processImage(e)
  }, i.processImage = function(e) {
    var t = this;
    r.verifyOptions(e, "url ops", !0, "", "nos::processImage"), r.verifyParamType("ops", e.ops, "array", "nos::processImage");
    var n = e.ops.map(function(e) {
      return r.verifyOptions(e, "type", !0, "", "nos::processImage"), r.verifyParamValid("type", e.type, o.validTypes, "nos::processImage"), t["gen" + e.type.slice(0, 1).toUpperCase() + e.type.slice(1) + "Op"](e)
    });
    t.processCallback(e), t.sendCmd("processImage", {
      url: e.url,
      imageOps: n
    }, e.callback)
  }, i.genStripmetaOp = function(e) {
    return new o({
      type: e.type,
      stripmeta: e.strip ? 1 : 0
    })
  }, i.genQualityOp = function(e) {
    r.verifyOptions(e, "quality", !0, "", "nos::genQualityOp"), r.verifyParamType("quality", e.quality, "number", "nos::genQualityOp"), r.verifyParamMin("quality", e.quality, 0, "nos::genQualityOp"), r.verifyParamMax("quality", e.quality, 100, "nos::genQualityOp");
    var t = Math.round(e.quality);
    return new o({
      type: e.type,
      qualityQuality: t
    })
  }, i.genInterlaceOp = function(e) {
    return new o({
      type: e.type
    })
  }, i.genRotateOp = function(e) {
    for (r.verifyOptions(e, "angle", !0, "", "nos::genRotateOp"), r.verifyParamType("angle", e.angle, "number", "nos::genRotateOp"); e.angle < 0;) e.angle = e.angle + 360;
    e.angle = e.angle % 360;
    var t = Math.round(e.angle);
    return new o({
      type: e.type,
      rotateAngle: t
    })
  }, i.genBlurOp = function(e) {
    r.verifyOptions(e, "radius sigma", "nos::genBlurOp"), r.verifyParamType("radius", e.radius, "number", "nos::genBlurOp"), r.verifyParamMin("radius", e.radius, 1, "nos::genBlurOp"), r.verifyParamMax("radius", e.radius, 50, "nos::genBlurOp"), r.verifyParamType("sigma", e.sigma, "number", "nos::genBlurOp"), r.verifyParamMin("sigma", e.sigma, 0, "nos::genBlurOp");
    var t = Math.round(e.radius),
      n = Math.round(e.sigma);
    return new o({
      type: e.type,
      blurRadius: t,
      blurSigma: n
    })
  }, i.genCropOp = function(e) {
    r.verifyOptions(e, "x y width height", "nos::genCropOp"), r.verifyParamType("x", e.x, "number", "nos::genCropOp"), r.verifyParamMin("x", e.x, 0, "nos::genCropOp"), r.verifyParamType("y", e.y, "number", "nos::genCropOp"), r.verifyParamMin("y", e.y, 0, "nos::genCropOp"), r.verifyParamType("width", e.width, "number", "nos::genCropOp"), r.verifyParamMin("width", e.width, 0, "nos::genCropOp"), r.verifyParamType("height", e.height, "number", "nos::genCropOp"), r.verifyParamMin("height", e.height, 0, "nos::genCropOp");
    var t = Math.round(e.x),
      n = Math.round(e.y),
      s = Math.round(e.width),
      i = Math.round(e.height);
    return new o({
      type: e.type,
      cropX: t,
      cropY: n,
      cropWidth: s,
      cropHeight: i
    })
  }, i.genThumbnailOp = (s = {
    cover: "z",
    contain: "x",
    crop: "y"
  }, function(e) {
    r.verifyOptions(e, "mode", "nos::genThumbnailOp"), r.verifyParamValid("mode", e.mode, Object.keys(s), "nos::genThumbnailOp"), "contain" === e.mode ? r.verifyParamAtLeastPresentOne(e, "width height", "nos::genThumbnailOp") : r.verifyOptions(e, "width height", "nos::genThumbnailOp"), r.undef(e.width) && (e.width = 0), r.undef(e.height) && (e.height = 0), r.verifyParamType("width", e.width, "number", "nos::genThumbnailOp"), r.verifyParamMin("width", e.width, 0, "nos::genThumbnailOp"), r.verifyParamType("height", e.height, "number", "nos::genThumbnailOp"), r.verifyParamMin("height", e.height, 0, "nos::genThumbnailOp");
    var t = Math.round(e.width),
      n = Math.round(e.height),
      i = new o({
        type: e.type,
        thumbnailMode: s[e.mode],
        thumbnailWidth: t,
        thumbnailHeight: n
      });
    if ("crop" === e.mode && r.notundef(e.axis)) {
      r.undef(e.axis.x) && (e.axis.x = 5), r.undef(e.axis.y) && (e.axis.y = 5), r.verifyParamMin("axis.x", e.axis.x, 0, "nos::genThumbnailOp"), r.verifyParamMax("axis.x", e.axis.x, 10, "nos::genThumbnailOp"), r.verifyParamMin("axis.y", e.axis.y, 0, "nos::genThumbnailOp"), r.verifyParamMax("axis.y", e.axis.y, 10, "nos::genThumbnailOp");
      var a = Math.round(e.axis.x),
        c = Math.round(e.axis.y);
      i.thumbnailAxisX = a, i.thumbnailAxisY = c
    }
    return r.notundef(e.enlarge) && (r.verifyParamType("enlarge", e.enlarge, "boolean", "nos::genThumbnailOp"), e.enlarge && (i.thumbnailEnlarge = 1)), i
  })
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = n(3),
    i = n(9).upload,
    o = n(9).abort,
    a = s.supportFormData,
    c = 104857600;

  function u(e) {
    var t = this;
    t.options = s.copy(e), s.verifyOptions(e, "url fileName"), s.verifyParamPresentJustOne(e, "blob fileInput"), s.verifyCallback(e, "beginupload uploadprogress uploaddone"), e.fileInput && (e.fileInput = s.verifyFileInput(e.fileInput)), e.type && s.verifyFileType(e.type), e.timeout ? s.verifyParamType("timeout", e.timeout, "number") : e.timeout = 6e5, s.verifyFileUploadCallback(e), e.data = {};
    var n = e.fileName,
      o = e.fileInput;
    if (a)
      if (o) {
        var u = e.type ? s.filterFiles(o.files, e.type) : [].slice.call(o.files, 0);
        if (!u || !u.length) return void e.uploaddone(r.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了" + e.type + "类型的文件"));
        if (o.files[0].size > c) return void e.uploaddone(r.newFileTooLargeError("文件大小超过100M"));
        e.data[n] = u[0]
      } else e.blob && (e.data[n] = e.blob);
    else s.dataset(o, "name", n), e.data.input = o;
    e.params && s.merge(e.data, e.params);
    var m = {
      data: e.data,
      onaftersend: function() {
        e.beginupload(t)
      },
      onuploading: function(t) {
        var n = Math.floor(1e4 * t.loaded / t.total) / 100,
          s = {
            docId: e.docId,
            total: t.total,
            loaded: t.loaded,
            percentage: n,
            percentageText: n + "%"
          };
        e.fileInput && (s.fileInput = e.fileInput), e.blob && (s.blob = e.blob), e.uploadprogress(s)
      },
      onload: function(n) {
        n.docId = e.docId, n.Error ? t.onError(n) : e.uploaddone(null, n)
      },
      onerror: function(n) {
        try {
          if (n.result) var s = JSON.parse(n.result);
          else s = n;
          t.onError(s)
        } catch (s) {
          console.error("ignore error if could not parse obj.result", s), e.uploaddone(new r(n.message, n.code), t.options)
        }
      }
    };
    a || (m.mode = "iframe"), m.putFileAtEnd = !0, t.sn = i(e.url, m)
  }
  u.prototype.onError = function(e) {
    var t, n, s, i = this.options;
    n = (t = (e = e || {}).Error || e || {}).Code || t.code || "unknown", s = t.Message || t.message || "未知错误", i.uploaddone(new r(n + "(" + s + ")", n))
  }, u.prototype.abort = function() {
    o(this.sn)
  }, e.exports = u
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = {
      file: {
        md5: "$(Etag)",
        size: "$(ObjectSize)"
      },
      image: {
        md5: "$(Etag)",
        size: "$(ObjectSize)",
        w: "$(ImageInfo.Width)",
        h: "$(ImageInfo.Height)",
        orientation: "$(ImageInfo.Orientation)"
      },
      audio: {
        md5: "$(Etag)",
        size: "$(ObjectSize)",
        dur: "$(AVinfo.Audio.Duration)"
      },
      video: {
        md5: "$(Etag)",
        size: "$(ObjectSize)",
        dur: "$(AVinfo.Video.Duration)",
        w: "$(AVinfo.Video.Width)",
        h: "$(AVinfo.Video.Height)"
      }
    },
    i = {
      genResponseBody: function(e) {
        return r[e = e || "file"]
      },
      parseResponse: function(e, t) {
        s.notundef(e.size) && (e.size = +e.size), s.notundef(e.w) && (e.w = +e.w), s.notundef(e.h) && (e.h = +e.h), s.notundef(e.dur) && (e.dur = +e.dur);
        var n = e.orientation;
        if (s.notundef(n) && (delete e.orientation, t && ("right, top" === n || "left, bottom" === n))) {
          var r = e.w;
          e.w = e.h, e.h = r
        }
        return e
      }
    };
  e.exports = i
}, function(e, t, n) {
  var s, r, i;
  ! function(n, o) {
    "use strict";
    r = [], void 0 === (i = "function" == typeof(s = function(e) {
      return function(t) {
        t = t || {},
          function() {
            t.arrayAccessForm = t.arrayAccessForm || "none", t.emptyNodeForm = t.emptyNodeForm || "text", t.jsAttributeFilter = t.jsAttributeFilter, t.jsAttributeConverter = t.jsAttributeConverter, t.attributeConverters = t.attributeConverters || [], t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || [], t.arrayAccessFormPaths = t.arrayAccessFormPaths || [], void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0);
            void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0);
            void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0);
            void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0);
            void 0 === t.ignoreRoot && (t.ignoreRoot = !1);
            void 0 === t.escapeMode && (t.escapeMode = !0);
            void 0 === t.attributePrefix && (t.attributePrefix = "_");
            void 0 === t.selfClosingElements && (t.selfClosingElements = !0);
            void 0 === t.keepCData && (t.keepCData = !1);
            void 0 === t.jsDateUTC && (t.jsDateUTC = !1)
          }(),
          function() {
            function e(e) {
              var t = String(e);
              return 1 === t.length && (t = "0" + t), t
            }
            "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
              return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
            });
            "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function() {
              return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
            })
          }();
        var n = {
          ELEMENT_NODE: 1,
          TEXT_NODE: 3,
          CDATA_SECTION_NODE: 4,
          COMMENT_NODE: 8,
          DOCUMENT_NODE: 9
        };

        function s(e) {
          var t = e.localName;
          return null == t && (t = e.baseName), null != t && "" !== t || (t = e.nodeName), t
        }

        function r(e) {
          return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : e
        }

        function i(e, n, s) {
          switch (t.arrayAccessForm) {
            case "property":
              e[n] instanceof Array ? e[n + "_asArray"] = e[n] : e[n + "_asArray"] = [e[n]]
          }
          if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
            for (var r = !1, i = 0; i < t.arrayAccessFormPaths.length; i++) {
              var o = t.arrayAccessFormPaths[i];
              if ("string" == typeof o) {
                if (o === s) {
                  r = !0;
                  break
                }
              } else if (o instanceof RegExp) {
                if (o.test(s)) {
                  r = !0;
                  break
                }
              } else if ("function" == typeof o && o(n, s)) {
                r = !0;
                break
              }
            }
            r && (e[n] = [e[n]])
          }
        }

        function o(e) {
          var t = e.split(/[-T:+Z]/g),
            n = new Date(t[0], t[1] - 1, t[2]),
            s = t[5].split(".");
          if (n.setHours(t[3], t[4], s[0]), s.length > 1 && n.setMilliseconds(s[1]), t[6] && t[7]) {
            var r = 60 * t[6] + Number(t[7]),
              i = /\d\d-\d\d:\d\d$/.test(e) ? "-" : "+";
            r = 0 + ("-" === i ? -1 * r : r), n.setMinutes(n.getMinutes() - r - n.getTimezoneOffset())
          } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
          return n
        }

        function a(e, r) {
          for (var a = {
              __cnt: 0
            }, u = e.childNodes, m = 0; m < u.length; m++) {
            var l = u.item(m),
              d = s(l);
            l.nodeType !== n.COMMENT_NODE && (a.__cnt++, null == a[d] ? (a[d] = c(l, r + "." + d), i(a, d, r + "." + d)) : (a[d] instanceof Array || (a[d] = [a[d]], i(a, d, r + "." + d)), a[d][a[d].length] = c(l, r + "." + d)))
          }
          for (var p = 0; p < e.attributes.length; p++) {
            var f = e.attributes.item(p);
            a.__cnt++;
            for (var g = f.value, y = 0; y < t.attributeConverters.length; y++) {
              var h = t.attributeConverters[y];
              h.test.call(null, f.name, f.value) && (g = h.convert.call(null, f.name, f.value))
            }
            a[t.attributePrefix + f.name] = g
          }
          var v = e.prefix;
          return v && (a.__cnt++, a.__prefix = v), a["#text"] && (a.__text = a["#text"], a.__text instanceof Array && (a.__text = a.__text.join("\n")), t.escapeMode && (a.__text = a.__text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")), t.stripWhitespaces && (a.__text = a.__text.trim()), delete a["#text"], "property" === t.arrayAccessForm && delete a["#text_asArray"], a.__text = function(e, n, s) {
            if (t.datetimeAccessFormPaths.length > 0)
              for (var r = s.split(".#")[0], i = 0; i < t.datetimeAccessFormPaths.length; i++) {
                var a = t.datetimeAccessFormPaths[i];
                if ("string" == typeof a) {
                  if (a === r) return o(e)
                } else if (a instanceof RegExp) {
                  if (a.test(r)) return o(e)
                } else if ("function" == typeof a && a(r)) return o(e)
              }
            return e
          }(a.__text, 0, r + ".#text")), a.hasOwnProperty("#cdata-section") && (a.__cdata = a["#cdata-section"], delete a["#cdata-section"], "property" === t.arrayAccessForm && delete a["#cdata-section_asArray"]), 1 === a.__cnt && a.__text ? a = a.__text : 0 === a.__cnt && "text" === t.emptyNodeForm ? a = "" : a.__cnt > 1 && void 0 !== a.__text && t.skipEmptyTextNodesForObj && (t.stripWhitespaces && "" === a.__text || "" === a.__text.trim()) && delete a.__text, delete a.__cnt, t.keepCData || a.hasOwnProperty("__text") || !a.hasOwnProperty("__cdata") ? (t.enableToStringFunc && (a.__text || a.__cdata) && (a.toString = function() {
            return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "")
          }), a) : a.__cdata ? a.__cdata : ""
        }

        function c(e, r) {
          return e.nodeType === n.DOCUMENT_NODE ? function(e) {
            for (var r = {}, i = e.childNodes, o = 0; o < i.length; o++) {
              var a = i.item(o);
              if (a.nodeType === n.ELEMENT_NODE) {
                var u = s(a);
                t.ignoreRoot ? r = c(a, u) : r[u] = c(a, u)
              }
            }
            return r
          }(e) : e.nodeType === n.ELEMENT_NODE ? a(e, r) : e.nodeType === n.TEXT_NODE || e.nodeType === n.CDATA_SECTION_NODE ? e.nodeValue : null
        }

        function u(e, n, s, i) {
          var o = "<" + (e && e.__prefix ? e.__prefix + ":" : "") + n;
          if (s)
            for (var a = 0; a < s.length; a++) {
              var c = s[a],
                u = e[c];
              t.escapeMode && (u = r(u)), o += " " + c.substr(t.attributePrefix.length) + "=", t.useDoubleQuotes ? o += '"' + u + '"' : o += "'" + u + "'"
            }
          return o += i ? " />" : ">"
        }

        function m(e, t) {
          return "</" + (e && e.__prefix ? e.__prefix + ":" : "") + t + ">"
        }

        function l(e, n) {
          return "property" === t.arrayAccessForm && (s = n.toString(), r = "_asArray", -1 !== s.indexOf(r, s.length - r.length)) || 0 === n.toString().indexOf(t.attributePrefix) || 0 === n.toString().indexOf("__") || e[n] instanceof Function;
          var s, r
        }

        function d(e) {
          var t = 0;
          if (e instanceof Object)
            for (var n in e) l(e, n) || t++;
          return t
        }

        function p(e) {
          var n = [];
          if (e instanceof Object)
            for (var s in e) - 1 === s.toString().indexOf("__") && 0 === s.toString().indexOf(t.attributePrefix) && n.push(s);
          return n
        }

        function f(e) {
          var n = "";
          return e instanceof Object ? n += function(e) {
            var n = "";
            e.__cdata && (n += "<![CDATA[" + e.__cdata + "]]>");
            e.__text && (t.escapeMode ? n += r(e.__text) : n += e.__text);
            return n
          }(e) : null !== e && (t.escapeMode ? n += r(e) : n += e), n
        }

        function g(e, n, s) {
          var r = "";
          if (t.jsAttributeFilter && t.jsAttributeFilter.call(null, n, e)) return r;
          if (t.jsAttributeConverter && (e = t.jsAttributeConverter.call(null, n, e)), null != e && "" !== e || !t.selfClosingElements)
            if ("object" == typeof e)
              if ("[object Array]" === Object.prototype.toString.call(e)) r += function(e, t, n) {
                var s = "";
                if (0 === e.length) s += u(e, t, n, !0);
                else
                  for (var r = 0; r < e.length; r++) s += g(e[r], t, p(e[r]));
                return s
              }(e, n, s);
              else if (e instanceof Date) r += u(e, n, s, !1), r += t.jsDateUTC ? e.toUTCString() : e.toISOString(), r += m(e, n);
          else {
            var i = d(e);
            i > 0 || e.__text || e.__cdata ? (r += u(e, n, s, !1), r += y(e), r += m(e, n)) : t.selfClosingElements ? r += u(e, n, s, !0) : (r += u(e, n, s, !1), r += m(e, n))
          } else r += u(e, n, s, !1), r += f(e), r += m(e, n);
          else r += u(e, n, s, !0);
          return r
        }

        function y(e) {
          var t = "",
            n = d(e);
          if (n > 0)
            for (var s in e)
              if (!l(e, s)) {
                var r = e[s],
                  i = p(r);
                t += g(r, s, i)
              }
          return t += f(e)
        }

        function h(t) {
          if (void 0 === t) return null;
          if ("string" != typeof t) return null;
          var n = null,
            s = null;
          if (e) n = new e, s = n.parseFromString(t, "text/xml");
          else if (window && window.DOMParser) {
            n = new window.DOMParser;
            var r = null,
              i = window.ActiveXObject || "ActiveXObject" in window;
            if (!i) try {
              r = n.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
            } catch (e) {
              r = null
            }
            try {
              s = n.parseFromString(t, "text/xml"), null !== r && s.getElementsByTagNameNS(r, "parsererror").length > 0 && (s = null)
            } catch (e) {
              s = null
            }
          } else 0 === t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)), (s = new ActiveXObject("Microsoft.XMLDOM")).async = "false", s.loadXML(t);
          return s
        }
        this.asArray = function(e) {
          return null == e ? [] : e instanceof Array ? e : [e]
        }, this.toXmlDateTime = function(e) {
          return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
        }, this.asDateTime = function(e) {
          return "string" == typeof e ? o(e) : e
        }, this.xml2dom = function(e) {
          return h(e)
        }, this.dom2js = function(e) {
          return c(e, null)
        }, this.js2dom = function(e) {
          var t = this.js2xml(e);
          return h(t)
        }, this.xml2js = function(e) {
          var t = h(e);
          return null != t ? this.dom2js(t) : null
        }, this.js2xml = function(e) {
          return y(e)
        }, this.getVersion = function() {
          return "3.1.1"
        }
      }
    }) ? s.apply(t, r) : s) || (e.exports = i)
  }()
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(6).fn,
    i = n(0),
    o = n(77),
    a = n(3),
    c = n(1),
    u = n(76),
    m = n(75),
    l = n(35);
  r.sendText = function(e) {
    return this.processCallback(e), e.msg = new this.message.TextMessage(e), this.sendMsg(e)
  }, r.previewFile = function(e) {
    if (i.verifyOptions(e, "done", "msg::previewFile"), e.type || (e.type = "file"), i.verifyParamPresentJustOne(e, "dataURL blob fileInput filePath wxFilePath fileObject", "msg::previewFile"), e.filePath = e.filePath || e.wxFilePath, delete e.wxFilePath, e.dataURL) e.blob = l.fromDataURL(e.dataURL);
    else if (e.blob);
    else if (e.fileInput) {
      if (e.fileInput = i.verifyFileInput(e.fileInput, "msg::previewFile"), e.fileInput.files) {
        if (!e.fileInput.files.length) return void e.done(a.newNoFileError("请选择" + e.type + "文件", {
          callFunc: "msg::previewFile",
          fileInput: e.fileInput
        }), e);
        e.fileSize = e.fileInput.files[0].size
      }
      e.fileInputName = i.getFileName(e.fileInput), e.fileInfo = i.getFileInfo(e.fileInput), e.transtype = e.fileInfo.type
    }
    this.processCallback(e);
    var t = JSON.stringify(u.genResponseBody(e.type) || {}).replace(/"/gi, '\\"'),
      n = null,
      s = e.transcode ? "getNosTokenTrans" : "getNosToken";
    n = e.transcode ? {
      transToken: {
        name: e.fileInfo.name,
        type: e.fileInfo.transcodeType,
        transType: "png" === e.transcode ? 11 : 10,
        size: e.fileInfo.size,
        body: t
      }
    } : t, this[s]({
      responseBody: n,
      callback: function(t, n) {
        t ? e.done(t, e.callback.options) : (e.transcode ? (e.nosToken = n.nosToken, e.docId = n.docId) : e.nosToken = n, this._doPreviewFile(e))
      }.bind(this)
    })
  }, r._doPreviewFile = function(e) {
    var t = this,
      n = e.uploaddone,
      r = c.genUploadUrl(e.nosToken.bucket),
      o = this.assembleUploadParams(e.nosToken);

    function l(s, r) {
      if (e.uploaddone = n, s) e.done(s, e.callback.options);
      else {
        if ((r = u.parseResponse(r, t.options.exifOrientation)).url = c.genDownloadUrl(e.nosToken.bucket, o.Object), i.exist(e.fileInputName)) r.name = e.fileInputName;
        else if (e.blob) {
          var a = e.blob.name;
          if (r.name = a || "blob-" + r.md5, !a) {
            var m = e.blob.type;
            r.ext = m.slice(m.lastIndexOf("/") + 1)
          }
        } else e.filePath ? r.name = e.filePath : e.fileObject && (r.name = e.fileObject.fileName);
        if (!r.ext) {
          var l = r.name.lastIndexOf(".");
          r.ext = -1 === l ? "unknown" : r.name.slice(l + 1)
        }
        r.size = r.size || 0, e.done(null, i.copy(r))
      }
    }
    if (c.isWeixinApp) i.verifyOptions(e, "filePath", "msg::_doPreviewFile"), wx.uploadFile({
      url: r,
      filePath: e.filePath,
      name: "file",
      formData: o,
      fail: function(e) {
        console.error("api::msg:upload file failed", e)
      },
      success: function(e) {
        if (200 === e.statusCode) try {
          l(null, JSON.parse(e.data))
        } catch (t) {
          console.error("parse wx upload file res error", t), l({
            code: "PARSE_WX_UPLOAD_FILE_RES_ERROR",
            str: e.data,
            msg: e.errMsg
          })
        } else l({
          code: e.statusCode,
          msg: e.errMsg
        })
      }
    });
    else if (c.isNodejs) {
      var d = {
        url: r,
        name: "file",
        formData: o,
        success: function(e) {
          if (200 === e.statusCode) try {
            l(null, JSON.parse(e.data))
          } catch (t) {
            console.error("parse nodejs upload file res error", t), l({
              code: "PARSE_NODEJS_UPLOAD_FILE_RES_ERROR",
              str: e.data,
              msg: e.errMsg
            })
          } else l({
            code: e.statusCode,
            msg: e.errMsg
          })
        },
        fail: function(e) {
          console.error("api::msg:upload file failed", e)
        }
      };
      if (e.filePath) d.filePath = e.filePath;
      else {
        if ("object" !== s(e.fileObject)) throw new a("Nodejs上传fileObject参数类型应如 {fileName:..,fileData:..} ");
        d.fileData = e.fileObject.fileData
      }
      m.uploadFile(d)
    } else if (c.isRN) {
      var p = {
        url: r,
        name: "file",
        formData: o,
        filePath: e.filePath,
        success: function(e) {
          if (e.ok && 200 === e.status) try {
            e.md5 = e.headers.map && e.headers.map.etag && e.headers.map.etag[0] || "UNKNOWN", l(null, e)
          } catch (t) {
            console.error("parse React Native upload file res error", t), l({
              code: "PARSE_React_Native_UPLOAD_FILE_RES_ERROR",
              res: e
            })
          } else l({
            code: e.status,
            msg: e.statusText
          })
        },
        fail: function(e) {
          console.error("api::msg:upload file failed", e)
        }
      };
      m.uploadFile(p)
    } else e.uploaddone = l, e.url = r, e.params = o, e.fileName = "file", new m(e)
  }, r.sendFile = function(e) {
    if (e.type || (e.type = "file"), i.verifyParamPresentJustOne(e, "dataURL blob fileInput file filePath wxFilePath fileObject", "msg::sendFile"), this.processCallback(e), e.filePath = e.filePath || e.wxFilePath, delete e.wxFilePath, e.dataURL) this._previewAndSendFile(e);
    else if (e.blob) this._previewAndSendFile(e);
    else if (e.fileInput) {
      if (e.fileInput = i.verifyFileInput(e.fileInput, "msg::sendFile"), e.fileInput.files && !e.fileInput.files.length) return void e.done(a.newNoFileError("请选择" + e.type + "文件", {
        callFunc: "msg::sendFile",
        fileInput: e.fileInput
      }), e.callback.options);
      this._previewAndSendFile(e)
    } else if (e.filePath || e.fileObject) this._previewAndSendFile(e);
    else if (e.file) return e.msg = new this.message.FileMessage(e), this.sendMsg(e)
  }, r._previewAndSendFile = function(e) {
    var t = this;
    i.verifyCallback(e, "uploaddone beforesend", "msg::_previewAndSendFile");
    var n = e.done;
    e.done = function(s, r) {
      if (e.done = n, s) e.uploaddone(s, e.callback.options);
      else {
        if (/chatroom/.test(e.scene)) return;
        e.uploaddone(null, i.copy(r)), e.file = r, e.msg = new t.message.FileMessage(e), e.beforesend(t.sendMsg(e))
      }
    }, t.previewFile(e)
  }, r.assembleUploadParams = function(e) {
    return e ? {
      Object: decodeURIComponent(e.objectName),
      "x-nos-token": e.token,
      "x-nos-entity-type": "json"
    } : null
  }, r.deleteFile = function(e) {
    i.verifyParamPresentJustOne(e, "docId", "msg::deleteFile"), this.removeFile({
      docId: e.docId,
      callback: function(t, n) {
        t ? e.error && e.error(t, n) : e.success && e.success(n)
      }
    })
  }, r.getFile = function(e) {
    i.verifyParamPresentJustOne(e, "docId", "msg::getFile"), this.fetchFile({
      docId: e.docId,
      callback: function(t, n) {
        t ? e.error && e.error(t, n) : e.success && e.success(n.info)
      }
    })
  }, r.getFileList = function(e) {
    var t = e.fromDocId,
      n = void 0 === t ? "" : t,
      s = e.limit,
      r = void 0 === s ? 10 : s,
      i = {
        limit: r
      };
    n && (i.fromDocId = n), this.fetchFileList({
      fileListParam: i,
      callback: function(t, n) {
        t ? (r > 30 && (t.message = t.message + "::文档条数超过限制:30"), e.error && e.error(t, n)) : e.success && e.success(n)
      }
    })
  }, r.sendGeo = function(e) {
    return this.processCallback(e), e.msg = new this.message.GeoMessage(e), this.sendMsg(e)
  }, r.sendTipMsg = function(e) {
    return this.processCallback(e), e.msg = new this.message.TipMessage(e), this.sendMsg(e)
  }, r.sendCustomMsg = function(e) {
    return this.processCallback(e), e.msg = new this.message.CustomMessage(e), this.sendMsg(e)
  }, r.sendRobotMsg = function(e) {
    return this.processCallback(e), e.msg = new this.message.RobotMessage(e), this.sendMsg(e)
  }, r.sendMsg = function(e) {
    var t = this.protocol,
      n = e.msg,
      s = {},
      r = !!e.isLocal;
    if (r && e.time && (n.time = e.time), e.resend && ("out" !== e.flow || "fail" !== e.status)) return i.onError("只能重发发送失败的消息");
    e.callback.options.idClient = n.idClient, this.beforeSendMsg(e, s);
    var o = e.rtnMsg = this.formatReturnMsg(n);
    return r && (o.status = "success", o.isLocal = !0), t.storeSendMsg && (s.promise = t.storeSendMsg(o)), e.cbaop = function(e) {
      if (e && "server" !== e.from) return o.status = "fail", t.updateSendMsgError && t.updateSendMsgError(o), o
    }, r || (s.msg = n, this.sendCmd(e.cmd, s, e.callback)), this.afterSendMsg(e), r && setTimeout(function() {
      o = i.simpleClone(o), e.done(null, o)
    }, 0), i.copy(o)
  }, r.beforeSendMsg = function() {}, r.afterSendMsg = function() {}, r.formatReturnMsg = function(e) {
    return e = i.copy(e), this.protocol.completeMsg(e), e.status = "sending", e = this.message.reverse(e)
  }, r.resendMsg = function(e) {
    return i.verifyOptions(e, "msg", "msg::resendMsg"), this.trimMsgFlag(e), e.resend = !0, this._sendMsgByType(e)
  }, r.forwardMsg = function(e) {
    return i.verifyOptions(e, "msg", "msg::forwardMsg"), this.beforeForwardMsg(e), this.trimMsgFlag(e), e.forward = !0, e.msg.idClient = i.guid(), this._sendMsgByType(e)
  }, r.trimMsgFlag = function(e) {
    e && e.msg && (e.msg = i.copy(e.msg), delete e.msg.resend, delete e.msg.forward)
  }, r.beforeForwardMsg = function() {}, r._sendMsgByType = function(e) {
    switch (i.verifyOptions(e, "msg", "msg::_sendMsgByType"), i.verifyParamValid("msg.type", e.msg.type, this.message.validTypes, "msg::_sendMsgByType"), i.merge(e, e.msg), e.type) {
      case "text":
        return this.sendText(e);
      case "image":
      case "audio":
      case "video":
      case "file":
        return this.sendFile(e);
      case "geo":
        return this.sendGeo(e);
      case "custom":
        return this.sendCustomMsg(e);
      case "tip":
        return this.sendTipMsg(e);
      default:
        throw new a("不能发送类型为 " + e.type + " 的消息")
    }
  }, r.parseRobotTemplate = function(e) {
    if (/<template[^>\/]+\/>/.test(e)) return {
      raw: e,
      json: [{
        type: "text",
        name: "",
        text: ""
      }]
    };
    if (!/<template[^>\/]+>/.test(e)) return {
      raw: e,
      json: [{
        type: "text",
        name: "",
        text: e
      }]
    };
    var t = new o({
      escapeMode: !1
    });
    e = e.replace(/<template [^>]+>/, "<template>");
    var n = t.xml2js(e);
    n = n.template.LinearLayout, Array.isArray(n) || (n = [n]);
    var s = [];
    return n = n.forEach(function(e) {
      e.image && (s = s.concat(i(e))), e.text && (s = s.concat(r(e))), e.link && (s = s.concat(function(e) {
        if (e.link) {
          var t = e.link;
          Array.isArray(t) || (t = [t]), t = t.map(function(e) {
            return e.image && (e.image = i(e)), e.text && (e.text = r(e)), "url" === e._type ? (e.type = "url", e.style = e._style || "", e.target = e._target, delete e._target, delete e._style) : "block" === e._type && (e.type = "block", e.style = e._style || "", e.params = e._params || "", e.target = e._target, delete e._params, delete e._target, delete e._style), delete e._type, e
          }), e.link = t
        }
        return e.link
      }(e)))
    }), {
      raw: e,
      json: s
    };

    function r(e) {
      return Array.isArray(e.text) || (e.text = [e.text]), e.text = e.text.map(function(e) {
        return {
          type: "text",
          name: e._name,
          text: e.__text
        }
      }), e.text
    }

    function i(e) {
      return Array.isArray(e.image) || (e.image = [e.image]), e.image = e.image.map(function(e) {
        return {
          type: "image",
          name: e._name,
          url: e._url
        }
      }), e.image
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(6).fn;
  s.isConnected = function() {
    return this.protocol.isConnected()
  }, s.connect = function() {
    this.protocol.appLogin = 0, this.protocol.connect()
  }, s.disconnect = function(e) {
    e = e || {}, this.protocol.disconnect(e.done)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(24);
  e.exports = function(e, t) {
    return t.method = "POST", t.headers = t.headers || {}, t.headers["Content-Type"] = "multipart/form-data", t.timeout = 0, t.type = t.type || "json", s(e, t)
  }
}, function(e, t, n) {
  "use strict";
  var s, r, i = n(5),
    o = n(24),
    a = (s = /json/i, r = /post/i, function(e, t) {
      var n = (t = t || {}).data = t.data || {},
        a = t.headers = t.headers || {},
        c = i.checkWithDefault(a, "Accept", "application/json"),
        u = i.checkWithDefault(a, "Content-Type", "application/json");
      return s.test(c) && (t.type = "json"), r.test(t.method) && s.test(u) && (t.data = JSON.stringify(n)), o(e, t)
    });
  e.exports = a
}, function(e, t, n) {
  "use strict";
  var s = n(5),
    r = n(36),
    i = n(23),
    o = {};

  function a(e) {
    this.init(), i.call(this, e)
  }
  var c = i.prototype,
    u = a.prototype = Object.create(c);
  u.init = function() {
    var e = "NEJ-AJAX-DATA:",
      t = !1;

    function n(t) {
      var n = t.data;
      if (0 === n.indexOf(e)) {
        var s = (n = JSON.parse(n.replace(e, ""))).key,
          r = o[s];
        r && (delete o[s], n.result = decodeURIComponent(n.result || ""), r.onLoad(n))
      }
    }
    return function() {
      ! function() {
        if (!t) {
          t = !0;
          var e = s.getGlobal();
          e.postMessage ? s.on(e, "message", n) : r.addMsgListener(n)
        }
      }()
    }
  }(), u.doSend = function() {
    var e = this.options,
      t = s.url2origin(e.url),
      n = e.proxyUrl || t + "/res/nej_proxy_frame.html",
      i = o[n];
    if (s.isArray(i)) i.push(this.doSend.bind(this, e));
    else {
      if (!i) return o[n] = [this.doSend.bind(this, e)], void s.createIframe({
        src: n,
        onload: function(e) {
          var t = o[n];
          o[n] = s.target(e).contentWindow, t.forEach(function(e) {
            try {
              e()
            } catch (e) {
              console.error(e)
            }
          })
        }
      });
      if (!this.aborted) {
        var a = this.key = s.uniqueID();
        o[a] = this;
        var c = s.fetch({
          method: "GET",
          url: "",
          data: null,
          headers: {},
          timeout: 0
        }, e);
        c.key = a, r.postMessage(i, {
          data: c
        }), this.afterSend()
      }
    }
  }, u.abort = function() {
    this.aborted = !0, delete o[this.key], c.abort.call(this)
  }, e.exports = a
}, function(e, t, n) {
  "use strict";
  var s = n(5),
    r = n(23),
    i = n(36),
    o = "NEJ-UPLOAD-RESULT:",
    a = {};

  function c(e) {
    this.init(), r.call(this, e)
  }
  var u = r.prototype,
    m = c.prototype = Object.create(u);
  m.init = function() {
    var e = !1;

    function t(e) {
      var t = e.data;
      if (0 === t.indexOf(o)) {
        var n = (t = JSON.parse(t.replace(o, ""))).key,
          s = a[n];
        s && (delete a[n], t.result = decodeURIComponent(t.result || ""), s.onLoad(t.result))
      }
    }
    return function() {
      ! function() {
        if (!e) {
          e = !0;
          var n = s.getGlobal();
          n.postMessage ? s.on(n, "message", t) : (i.addMsgListener(t), i.startTimer())
        }
      }()
    }
  }(), m.doSend = function() {
    var e = this,
      t = e.options,
      n = e.key = "zoro-ajax-upload-iframe-" + s.uniqueID();
    a[n] = e;
    var r = e.form = s.html2node('<form style="display:none;"></form>');
    document.body.appendChild(r), r.target = n, r.method = "POST", r.enctype = "multipart/form-data", r.encoding = "multipart/form-data";
    var i = t.url,
      o = s.genUrlSep(i);
    r.action = i + o + "_proxy_=form";
    var c = t.data,
      u = [],
      m = [];

    function l() {
      u.forEach(function(e, t) {
        var n = m[t];
        n.parentNode && (e.name = n.name, s.isFunction(e.setAttribute) && e.setAttribute("form", n.getAttribute("form")), n.parentNode.replaceChild(e, n))
      })
    }
    c && s.getKeys(c, t.putFileAtEnd).forEach(function(e) {
      var t = c[e];
      if (t.tagName && "INPUT" === t.tagName.toUpperCase()) {
        if ("file" === t.type) {
          var n = t,
            i = n.cloneNode(!0);
          n.parentNode.insertBefore(i, n);
          var o = s.dataset(n, "name");
          o && (n.name = o), r.appendChild(n), s.isFunction(n.setAttribute) && (n.setAttribute("form", ""), n.removeAttribute("form")), u.push(t), m.push(i)
        }
      } else {
        var a = s.html2node('<input type="hidden"/>');
        a.name = e, a.value = t, r.appendChild(a)
      }
    });
    var d = e.iframe = s.createIframe({
      name: n,
      onload: function() {
        e.aborted ? l() : (s.on(d, "load", e.checkResult.bind(e)), r.submit(), l(), e.afterSend())
      }
    })
  }, m.checkResult = function() {
    var e, t;
    try {
      if ((t = ((e = this.iframe.contentWindow.document.body).innerText || e.textContent || "").trim()).indexOf(o) >= 0 || e.innerHTML.indexOf(o) >= 0) return
    } catch (e) {
      return void console.error("ignore error if not same domain,", e)
    }
    this.onLoad(t)
  }, m.onLoad = function(e) {
    u.onLoad.call(this, {
      status: 200,
      result: e
    }), s.remove(this.form), s.remove(this.iframe), u.destroy.call(this)
  }, m.destroy = function() {
    s.remove(this.iframe), s.remove(this.form)
  }, m.abort = function() {
    this.aborted = !0, delete a[this.key], u.abort.call(this)
  }, e.exports = c
}, function(e, t, n) {
  var s;
  /*!
   * EventEmitter v5.2.4 - git.io/ee
   * Unlicense - http://unlicense.org/
   * Oliver Caldwell - http://oli.me.uk/
   * @preserve
   */
  ! function(t) {
    "use strict";

    function r() {}
    var i = r.prototype,
      o = t.EventEmitter;

    function a(e, t) {
      for (var n = e.length; n--;)
        if (e[n].listener === t) return n;
      return -1
    }

    function c(e) {
      return function() {
        return this[e].apply(this, arguments)
      }
    }
    i.getListeners = function(e) {
      var t, n, s = this._getEvents();
      if (e instanceof RegExp)
        for (n in t = {}, s) s.hasOwnProperty(n) && e.test(n) && (t[n] = s[n]);
      else t = s[e] || (s[e] = []);
      return t
    }, i.flattenListeners = function(e) {
      var t, n = [];
      for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
      return n
    }, i.getListenersAsObject = function(e) {
      var t, n = this.getListeners(e);
      return n instanceof Array && ((t = {})[e] = n), t || n
    }, i.addListener = function(e, t) {
      if (! function e(t) {
          return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
        }(t)) throw new TypeError("listener must be a function");
      var n, s = this.getListenersAsObject(e),
        r = "object" == typeof t;
      for (n in s) s.hasOwnProperty(n) && -1 === a(s[n], t) && s[n].push(r ? t : {
        listener: t,
        once: !1
      });
      return this
    }, i.on = c("addListener"), i.addOnceListener = function(e, t) {
      return this.addListener(e, {
        listener: t,
        once: !0
      })
    }, i.once = c("addOnceListener"), i.defineEvent = function(e) {
      return this.getListeners(e), this
    }, i.defineEvents = function(e) {
      for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
      return this
    }, i.removeListener = function(e, t) {
      var n, s, r = this.getListenersAsObject(e);
      for (s in r) r.hasOwnProperty(s) && -1 !== (n = a(r[s], t)) && r[s].splice(n, 1);
      return this
    }, i.off = c("removeListener"), i.addListeners = function(e, t) {
      return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
      return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
      var s, r, i = e ? this.removeListener : this.addListener,
        o = e ? this.removeListeners : this.addListeners;
      if ("object" != typeof t || t instanceof RegExp)
        for (s = n.length; s--;) i.call(this, t, n[s]);
      else
        for (s in t) t.hasOwnProperty(s) && (r = t[s]) && ("function" == typeof r ? i.call(this, s, r) : o.call(this, s, r));
      return this
    }, i.removeEvent = function(e) {
      var t, n = typeof e,
        s = this._getEvents();
      if ("string" === n) delete s[e];
      else if (e instanceof RegExp)
        for (t in s) s.hasOwnProperty(t) && e.test(t) && delete s[t];
      else delete this._events;
      return this
    }, i.removeAllListeners = c("removeEvent"), i.emitEvent = function(e, t) {
      var n, s, r, i, o = this.getListenersAsObject(e);
      for (i in o)
        if (o.hasOwnProperty(i))
          for (n = o[i].slice(0), r = 0; r < n.length; r++) !0 === (s = n[r]).once && this.removeListener(e, s.listener), s.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, s.listener);
      return this
    }, i.trigger = c("emitEvent"), i.emit = function(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
      return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
      return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, i._getEvents = function() {
      return this._events || (this._events = {})
    }, r.noConflict = function() {
      return t.EventEmitter = o, r
    }, void 0 === (s = function() {
      return r
    }.call(t, n, t, e)) || (e.exports = s)
  }(this || {})
}, function(e, t, n) {
  "use strict";
  var s = n(5),
    r = n(23);

  function i(e) {
    e.onuploading && this.on("uploading", e.onuploading), r.call(this, e)
  }
  var o = r.prototype,
    a = i.prototype = Object.create(o);
  a.doSend = function() {
    var e = this.options,
      t = e.headers,
      n = this.xhr = new XMLHttpRequest;
    if ("multipart/form-data" === t["Content-Type"]) {
      delete t["Content-Type"], n.upload.onprogress = this.onProgress.bind(this), n.upload.onload = this.onProgress.bind(this);
      var r = e.data;
      e.data = new window.FormData, r && s.getKeys(r, e.putFileAtEnd).forEach(function(t) {
        var n = r[t];
        n.tagName && "INPUT" === n.tagName.toUpperCase() ? "file" === n.type && [].forEach.call(n.files, function(t) {
          e.data.append(s.dataset(n, "name") || n.name || t.name || "file-" + s.uniqueID(), t)
        }) : e.data.append(t, n)
      })
    }
    n.onreadystatechange = this.onStateChange.bind(this), 0 !== e.timeout && (this.timer = setTimeout(this.onTimeout.bind(this), e.timeout)), n.open(e.method, e.url, !e.sync), Object.keys(t).forEach(function(e) {
      n.setRequestHeader(e, t[e])
    }), e.cookie && "withCredentials" in n && (n.withCredentials = !0), n.send(e.data), this.afterSend()
  }, a.onProgress = function(e) {
    e.lengthComputable && e.loaded <= e.total && this.emit("uploading", e)
  }, a.onStateChange = function() {
    var e = this.xhr;
    4 === e.readyState && this.onLoad({
      status: e.status,
      result: e.responseText || ""
    })
  }, a.getResponseHeader = function(e) {
    var t = this.xhr;
    return t ? t.getResponseHeader(e) : ""
  }, a.destroy = function() {
    clearTimeout(this.timer);
    try {
      this.xhr.onreadystatechange = s.f, this.xhr.abort()
    } catch (e) {
      console.error("ignore error ajax destroy,", e)
    }
    o.destroy.call(this)
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(10),
    r = n(0);
  n(9);

  function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    r.merge(this, {
      options: e,
      debug: !1,
      api: "log",
      style: "color:blue;",
      log: r.emptyFunc,
      info: r.emptyFunc,
      warn: r.emptyFunc,
      error: r.emptyFunc
    }), this.prefix = e.prefix || "", this.setDebug(e.debug)
  }
  var o = i.prototype,
    a = ["Chrome", "Safari", "Firefox"];
  o.setDebug = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = this;
    if (t.debug = e, e.style && (t.style = e.style), t.debug && r.exist(console)) {
      var n = console;
      t.debug = function() {
        var e = t.formatArgs(arguments); - 1 !== a.indexOf(s.name) && r.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("debug", e)
      }, t.log = function() {
        var e = t.formatArgs(arguments); - 1 !== a.indexOf(s.name) && r.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("log", e)
      }, t.info = function() {
        var e = t.formatArgs(arguments); - 1 !== a.indexOf(s.name) && r.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("info", e)
      }, t.warn = function() {
        var e = t.formatArgs(arguments); - 1 !== a.indexOf(s.name) && r.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("warn", e)
      }, t.error = function() {
        var e = t.formatArgs(arguments); - 1 !== a.indexOf(s.name) && r.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("error", e)
      }, t._log = function(e, s) {
        var i = t.options.logFunc,
          o = null;
        if (i && (i[e] && (o = i[e]), r.isFunction(o))) o.apply(i, s);
        else if (n[e]) try {
          n[e].apply ? t.chrome(e, s) : t.ie(e, s)
        } catch (e) {}
      }, t.chrome = function(e, r) {
        -1 !== a.indexOf(s.name) ? n[e].apply(n, r) : t.ie(e, r)
      }, t.ie = function(e, t) {
        t.forEach(function(t) {
          n[e](JSON.stringify(t, null, 4))
        })
      }
    }
  }, o.formatArgs = function(e) {
    e = [].slice.call(e, 0);
    var t = new Date,
      n = "[NIM LOG " + (c(t.getMonth() + 1) + "-" + c(t.getDate()) + " " + c(t.getHours()) + ":" + c(t.getMinutes()) + ":" + c(t.getSeconds()) + ":" + c(t.getMilliseconds(), 3)) + " " + this.prefix.toUpperCase() + "]  ";
    return r.isString(e[0]) ? e[0] = n + e[0] : e.splice(0, 0, n), e.forEach(function(t, n) {
      (r.isArray(t) || r.isObject(t)) && (e[n] = r.simpleClone(t))
    }), e
  };
  var c = function(e, t) {
    t = t || 2;
    for (var n = "" + e; n.length < t;) n = "0" + n;
    return n
  };
  e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(1);
  "undefined" != typeof window && (window.console || s.isWeixinApp || (window.console = {
    log: function() {},
    info: function() {},
    warn: function() {},
    error: function() {}
  }))
}, function(e, t, n) {
  "use strict";
  var s = Object.prototype.hasOwnProperty,
    r = "~";

  function i() {}

  function o(e, t, n) {
    this.fn = e, this.context = t, this.once = n || !1
  }

  function a() {
    this._events = new i, this._eventsCount = 0
  }
  Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)), a.prototype.eventNames = function() {
    var e, t, n = [];
    if (0 === this._eventsCount) return n;
    for (t in e = this._events) s.call(e, t) && n.push(r ? t.slice(1) : t);
    return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
  }, a.prototype.listeners = function(e, t) {
    var n = r ? r + e : e,
      s = this._events[n];
    if (t) return !!s;
    if (!s) return [];
    if (s.fn) return [s.fn];
    for (var i = 0, o = s.length, a = new Array(o); i < o; i++) a[i] = s[i].fn;
    return a
  }, a.prototype.emit = function(e, t, n, s, i, o) {
    var a = r ? r + e : e;
    if (!this._events[a]) return !1;
    var c, u, m = this._events[a],
      l = arguments.length;
    if (m.fn) {
      switch (m.once && this.removeListener(e, m.fn, void 0, !0), l) {
        case 1:
          return m.fn.call(m.context), !0;
        case 2:
          return m.fn.call(m.context, t), !0;
        case 3:
          return m.fn.call(m.context, t, n), !0;
        case 4:
          return m.fn.call(m.context, t, n, s), !0;
        case 5:
          return m.fn.call(m.context, t, n, s, i), !0;
        case 6:
          return m.fn.call(m.context, t, n, s, i, o), !0
      }
      for (u = 1, c = new Array(l - 1); u < l; u++) c[u - 1] = arguments[u];
      m.fn.apply(m.context, c)
    } else {
      var d, p = m.length;
      for (u = 0; u < p; u++) switch (m[u].once && this.removeListener(e, m[u].fn, void 0, !0), l) {
        case 1:
          m[u].fn.call(m[u].context);
          break;
        case 2:
          m[u].fn.call(m[u].context, t);
          break;
        case 3:
          m[u].fn.call(m[u].context, t, n);
          break;
        case 4:
          m[u].fn.call(m[u].context, t, n, s);
          break;
        default:
          if (!c)
            for (d = 1, c = new Array(l - 1); d < l; d++) c[d - 1] = arguments[d];
          m[u].fn.apply(m[u].context, c)
      }
    }
    return !0
  }, a.prototype.on = function(e, t, n) {
    var s = new o(t, n || this),
      i = r ? r + e : e;
    return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], s] : this._events[i].push(s) : (this._events[i] = s, this._eventsCount++), this
  }, a.prototype.once = function(e, t, n) {
    var s = new o(t, n || this, !0),
      i = r ? r + e : e;
    return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], s] : this._events[i].push(s) : (this._events[i] = s, this._eventsCount++), this
  }, a.prototype.removeListener = function(e, t, n, s) {
    var o = r ? r + e : e;
    if (!this._events[o]) return this;
    if (!t) return 0 == --this._eventsCount ? this._events = new i : delete this._events[o], this;
    var a = this._events[o];
    if (a.fn) a.fn !== t || s && !a.once || n && a.context !== n || (0 == --this._eventsCount ? this._events = new i : delete this._events[o]);
    else {
      for (var c = 0, u = [], m = a.length; c < m; c++)(a[c].fn !== t || s && !a[c].once || n && a[c].context !== n) && u.push(a[c]);
      u.length ? this._events[o] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new i : delete this._events[o]
    }
    return this
  }, a.prototype.removeAllListeners = function(e) {
    var t;
    return e ? (t = r ? r + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new i : delete this._events[t])) : (this._events = new i, this._eventsCount = 0), this
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prototype.setMaxListeners = function() {
    return this
  }, a.prefixed = r, a.EventEmitter = a, e.exports = a
}, function(e, t, n) {
  "use strict";
  (function(t) {
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      r = n(42),
      i = n(41),
      o = n(25),
      a = n(39),
      c = n(38);
    e.exports = {
      polyfill: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || window;
        if ("object" !== (void 0 === e ? "undefined" : s(e))) throw new Error("polyfill target is not an Object");
        var n = {
          localStorage: r,
          XMLHttpRequest: i,
          FormData: o,
          WebSocket: a,
          Object: Object,
          navigator: c,
          location: Object.create(null)
        };
        for (var u in n) e[u] || (e[u] = n[u]);
        e.navigator.product = "WeixinApp"
      },
      localStorage: r,
      XMLHttpRequest: i,
      FormData: o,
      WebSocket: a
    }
  }).call(this, n(16))
}, function(e, t, n) {
  "use strict";
  var s = n(89).polyfill;
  try {
    s()
  } catch (e) {}
  try {
    s(GameGlobal)
  } catch (e) {}
  try {
    window = window || {}, s(window)
  } catch (e) {}
  try {
    localStorage = localStorage || n(42)
  } catch (e) {}
  try {
    XMLHttpRequest = XMLHttpRequest || n(41)
  } catch (e) {}
  try {
    FormData = FormData || n(25)
  } catch (e) {}
  try {
    WebSocket = WebSocket || n(39)
  } catch (e) {}
  try {
    navigator = navigator || n(38)
  } catch (e) {}
}, , , , , , , , , , , , , , , , , , , function(e, t, n) {
  "use strict";
  var s = n(0),
    r = s.notundef;

  function i(e) {
    s.verifyOptions(e, "type", "event::MsgEventSubscribe"), s.verifyParamType("type", e.type, "number", "event::MsgEventSubscribe"), s.findObjIndexInArray([1, 2, 3], e.type) < 0 && s.verifyParamMin("type", e.type, 1e5, "event::MsgEventSubscribe"), this.type = e.type, r(e.subscribeTime) ? (s.verifyParamType("subscribeTime", e.subscribeTime, "number", "event::MsgEventSubscribe"), s.verifyParamMin("subscribeTime", e.subscribeTime, 60, "event::MsgEventSubscribe"), s.verifyParamMax("subscribeTime", e.subscribeTime, 2592e3, "event::MsgEventSubscribe"), this.subscribeTime = e.subscribeTime) : this.subscribeTime = 2592e3, r(e.sync) ? (s.verifyParamType("sync", e.sync, "boolean", "event::MsgEventSubscribe"), this.sync = e.sync) : this.sync = !0
  }
  i.prototype.assembleEvent = function(e) {
    return {
      type: this.type,
      subscribeTime: this.subscribeTime,
      sync: !0 === this.sync ? 1 : 0
    }
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = s.notundef,
    i = n(3);

  function o(e) {
    if (s.verifyOptions(e, "type value", "event::MsgEvent"), s.verifyParamType("type", e.type, "number", "event::MsgEvent"), s.verifyParamMin("type", e.type, 1e5, "event::MsgEvent"), s.verifyParamType("value", e.value, "number", "event::MsgEvent"), this.type = e.type, this.value = e.value, this.idClient = s.guid(), r(e.custom) && (this.custom = "" + e.custom), this.validTime = e.validTime || 604800, s.verifyParamType("validTime", this.validTime, "number", "event::MsgEvent"), s.verifyParamMin("validTime", this.validTime, 60, "event::MsgEvent"), s.verifyParamMax("validTime", this.validTime, 604800, "event::MsgEvent"), r(e.broadcastType)) {
      if (s.verifyParamType("broadcastType", e.broadcastType, "number", "event::MsgEvent"), [1, 2].indexOf(e.broadcastType) < 0) throw new i('参数错误"broadcastType":只能为1或2');
      this.broadcastType = e.broadcastType
    } else this.broadcastType = 2;
    r(e.sync) ? (s.verifyParamType("sync", e.sync, "boolean", "event::MsgEvent"), this.sync = e.sync) : this.sync = !1
  }
  o.prototype.assembleEvent = function() {
    return {
      type: this.type,
      value: this.value,
      idClient: this.idClient,
      custom: this.custom || "",
      validTime: this.validTime,
      broadcastType: this.broadcastType,
      sync: !0 === this.sync ? 1 : 0
    }
  }, e.exports = o
}, function(e, t, n) {
  "use strict";
  var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    r = n(4).fn,
    i = n(0),
    o = n(110),
    a = n(109);

  function c(e) {
    return "object" === (void 0 === e ? "undefined" : s(e)) && (e.msgEventSubscribes ? e = e.msgEventSubscribes : e.msgEventSubscribe ? e = e.msgEventSubscribe : e.accounts ? e = e.accounts : e.msgEvent && (e = e.msgEvent).time && (e.time = +e.time), 1 === e.sync ? e.sync = !0 : 0 === e.sync && (e.sync = !1)), e
  }
  r.batchSendEventsCmds = function(e, t, n) {
    var s = this,
      r = i.dropArrayDuplicates(t.accounts);
    r = i.reshape2d(r, 100);
    var o = [];
    r.forEach(function(n) {
      o.push(new Promise(function(r, o) {
        var a = i.simpleClone(t);
        a.accounts = n, s.sendCmdWithResp(e, a, function(e, t) {
          e ? o(e) : r(c(t))
        })
      }))
    }), Promise.all(o).then(function(e) {
      var t = null;
      if (e.length > 0)
        if (e[0].msgEventSubscribe) {
          var s = e[0].msgEventSubscribe;
          s = c(s);
          var r = [];
          e.forEach(function(e) {
            r = r.concat(e.accounts)
          }), t = {
            accounts: r,
            msgEventSubscribe: s
          }
        } else t = [], e.forEach(function(e) {
          t = t.concat(e)
        });
      n(null, t)
    }, function(e) {
      n(e, null)
    })
  }, r.publishEvent = function(e) {
    var t = new o(e);
    t = t.assembleEvent(), this.processCallback(e), this.sendCmdWithResp("publishEvent", {
      msgEvent: t
    }, function(t, n) {
      t || (n = c(n)), e.callback(t, n)
    })
  }, r.subscribeEvent = function(e) {
    i.verifyOptions(e, "accounts", "event::subscribeEvent");
    var t = new a(e);
    i.verifyParamType("accounts", e.accounts, "array", "event::subscribeEvent"), this.processCallback(e), t = t.assembleEvent(), this.batchSendEventsCmds("subscribeEvent", {
      msgEventSubscribe: t,
      accounts: e.accounts
    }, function(t, n) {
      !t && n && (n = {
        failedAccounts: n
      }), e.callback(t, n)
    })
  }, r.unSubscribeEventsByAccounts = function(e) {
    i.verifyOptions(e, "accounts", "event::unSubscribeEventsByAccounts"), i.verifyParamType("accounts", e.accounts, "array", "event::unSubscribeEventsByAccounts");
    var t = new a(e);
    t = t.assembleEvent(), this.processCallback(e), this.batchSendEventsCmds("unSubscribeEventsByAccounts", {
      msgEventSubscribe: t,
      accounts: e.accounts
    }, function(t, n) {
      !t && n && (n = {
        failedAccounts: n
      }), e.callback(t, n)
    })
  }, r.unSubscribeEventsByType = function(e) {
    var t = new a(e);
    t = t.assembleEvent(), this.processCallback(e), this.sendCmdWithResp("unSubscribeEventsByType", {
      msgEventSubscribe: t
    }, function(t, n) {
      e.callback(t)
    })
  }, r.querySubscribeEventsByAccounts = function(e) {
    i.verifyOptions(e, "accounts", "event::querySubscribeEventsByAccounts"), i.verifyParamType("accounts", e.accounts, "array", "event::querySubscribeEventsByAccounts");
    var t = new a(e);
    t = t.assembleEvent(), this.processCallback(e), this.batchSendEventsCmds("querySubscribeEventsByAccounts", {
      msgEventSubscribe: t,
      accounts: e.accounts
    }, function(t, n) {
      !t && n && (n = {
        msgEventSubscribes: n
      }), e.callback(t, n)
    })
  }, r.querySubscribeEventsByType = function(e) {
    var t = new a(e);
    t = t.assembleEvent(), this.processCallback(e), this.sendCmdWithResp("querySubscribeEventsByType", {
      msgEventSubscribe: t
    }, function(t, n) {
      t || (n = {
        msgEventSubscribes: c(n)
      }), e.callback(t, n)
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(46),
    i = n(0),
    o = i.undef;
  s.getPushNotificationMultiportConfig = function() {
    return this.protocol.getPushNotificationMultiportConfig()
  }, s.updatePushNotificationMultiportConfig = function(e) {
    i.verifyOptions(e), o(e.shouldPushNotificationWhenPCOnline) && (e.shouldPushNotificationWhenPCOnline = !0), e.donnop = new r(e), this.processCallback(e), this.sendCmd("updateDonnop", e)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0);
  s.audioToText = function(e) {
    r.verifyOptions(e, "url", "audio::audioToText"), e.audioToText = r.filterObj(e, "url");
    this.processCallback(e), this.sendCmd("audioToText", e)
  }
}, function(e, t, n) {
  "use strict"
}, function(e, t, n) {
  "use strict"
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = n(1);
  s.getChatroomAddress = function(e) {
    r.verifyOptions(e, "chatroomId", "chatroom::getChatroomAddress");
    e.isWeixinApp = i.isWeixinApp, this.processCallback(e), this.sendCmd("getChatroomAddress", e)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.undef,
    o = r.notundef,
    a = n(20);
  s.markSysMsgRead = function(e) {
    var t, n = this.db,
      s = Promise.resolve(),
      i = this.protocol;
    r.verifyOptions(e, "sysMsgs", "sysmsg::markSysMsgRead");
    var o = e.sysMsgs;

    function a() {
      e.done(t, e)
    }
    r.isArray(o) || (o = [o]), n.enable ? s = n.markSysMsgRead(o).then(function(e) {
      o = e, i.onUpdateSysMsg(e)
    }) : (o = o.filter(function(e) {
      return !e.read
    })).length && (i.options.autoMarkRead || i.markSysMsgRead(o, !0), o.forEach(function(e) {
      e.read = !0
    }), i.onUpdateSysMsg(o)), s.then(function() {
      return i.reduceSysMsgUnread(o)
    }).then(a, function(e) {
      t = e, a()
    })
  }, s.sendCustomSysMsg = function(e) {
    r.verifyOptions(e, "scene to content", "sysmsg::sendCustomSysMsg"), r.verifyParamValid("scene", e.scene, this.message.validScenes, "sysmsg::sendCustomSysMsg"), this.processCallback(e), "p2p" === e.scene ? e.type = "customP2p" : e.type = "customTeam", e.sysMsg = new a(e);
    var t = "sendCustomSysMsg";
    return e.filter && (t = "sendFilterCustomSysMsg"), this.sendCmd(t, {
      sysMsg: e.sysMsg,
      single: !0
    }, e.callback), this.formatReturnSysMsg(e.sysMsg)
  }, s.formatReturnSysMsg = function(e) {
    return e = r.copy(e), this.protocol.completeSysMsg(e), e.status = "sending", e = a.reverse(e)
  }, s.getLocalSysMsgs = function(e) {
    var t, n = this.db,
      s = [];

    function c() {
      e.sysMsgs = s, e.done(t, e)
    }
    r.verifyOptions(e), e.category && r.verifyParamValid("category", e.category, a.validCategories, "sysmsg::getLocalSysMsgs"), e.type && r.verifyParamValid("type", e.type, a.validTypes, "sysmsg::getLocalSysMsgs"), i(e.limit) && (e.limit = 100), r.verifyParamType("limit", e.limit, "number", "sysmsg::getLocalSysMsgs"), r.verifyParamMax("limit", e.limit, 100, "sysmsg::getLocalSysMsgs"), o(e.reverse) ? r.verifyParamType("reverse", e.reverse, "boolean", "sysmsg::getLocalSysMsgs") : e.reverse = !1, this.processCallback(e), n.enable ? n.getSysMsgs(e).then(function(e) {
      s = e, c()
    }, function(e) {
      t = e, c()
    }) : c()
  }, s.updateLocalSysMsg = function(e) {
    var t, n = this.db,
      s = null;
    if (r.verifyOptions(e, "idServer", "sysmsg::updateLocalSysMsg"), this.processCallback(e), n.enable) {
      var i = r.filterObj(e, "idServer state localCustom");
      n.updateSysMsg(i).then(function(e) {
        s = e, o()
      }, function(e) {
        t = e, o()
      })
    } else o();

    function o() {
      e.sysMsg = s, e.done(t, e)
    }
  }, s.deleteLocalSysMsg = function(e) {
    var t, n = this.db;

    function s() {
      e.done(t, e)
    }
    r.verifyOptions(e, "idServer", "sysmsg::deleteLocalSysMsg"), this.processCallback(e), n.enable ? n.deleteSysMsg(e.idServer).then(function() {
      s()
    }, function(e) {
      t = e, s()
    }) : s()
  }, s.deleteAllLocalSysMsgs = function(e) {
    var t, n = this,
      s = n.db;

    function r() {
      n.protocol.onUpdateSysMsgUnread({}), e.done(t, e)
    }
    n.processCallback(e), s.enable && s.deleteAllSysMsgs().then(function() {
      r()
    }, function(e) {
      t = e, r()
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.undef,
    o = r.notundef,
    a = n(8),
    c = n(19),
    u = n(20),
    m = n(3);
  s.beforeSendMsg = function(e) {
    var t, n = this.protocol,
      s = e.msg;
    switch (s.to === this.account && (s.fromDeviceId = a.deviceId), s.userUpdateTime = n.myInfo && n.myInfo.updateTime, s.getScene()) {
      case "p2p":
        t = "sendMsg";
        break;
      case "team":
        t = "sendTeamMsg"
    }
    e.filter && (t = "sendFilterMsg", s.filter = !0), e.cmd = t
  }, s.afterSendMsg = function(e) {
    var t = e.rtnMsg,
      n = c.genSessionByMsg(t);
    this.protocol.onUpdateSession(n)
  }, s.beforeForwardMsg = function(e) {
    r.verifyOptions(e, "msg scene to", "msg::beforeForwardMsg"), e.msg.scene = e.scene, e.msg.to = e.to
  }, s.markMsgRead = function(e) {
    var t = this.protocol;
    !e || this.db.enable || t.options.autoMarkRead ? this.logger.warn("api::markMsgRead: 不需要标记消息为已收到 (没有消息, 或者启用了数据库, 或者启用了自动标记已收到)") : t.markMsgRead(e, !0)
  }, s.sendMsgReceipt = function(e) {
    if (r.verifyOptions(e), this.processCallback(e), e.msg) {
      r.verifyOptions(e, "msg", "msg::sendMsgReceipt");
      var t = e.msg;
      r.verifyOptions(t, "target idClient time", !0, "msg.", "msg::sendMsgReceipt"), this.protocol.shouldSendMsgReceipt(t) ? this.sendCmd("sendMsgReceipt", {
        msgReceipt: {
          to: t.target,
          idClient: t.idClient,
          time: t.time
        }
      }, e.callback) : e.done()
    } else e.done()
  }, s.isMsgRemoteRead = function(e) {
    return this.protocol.isMsgRemoteRead(e)
  }, s.deleteMsg = function(e) {
    r.verifyOptions(e, "msg", "msg::deleteMsg");
    var t = e.msg;
    if ("team" !== t.scene && "out" !== t.flow || "success" !== t.status || t.from === t.to || t.isLocal) return e.done(m.newParamError("只能删除自己发送给别人的, 并且发送成功的非本地消息", {
      callFunc: "msg::deleteMsg"
    }), e);
    r.verifyOptions(t, ["scene", "to", "from", "time", "idClient", "idServer"], !0, "msg.", "msg::deleteMsg"), r.verifyParamValid("msg.scene", t.scene, this.message.validScenes, "msg::deleteMsg");
    var n = r.simpleClone(t);
    this.processPs(n), this.processCallback(e), o(e.opeAccount) ? n.opeAccount = e.opeAccount : i(n.opeAccount) && (n.opeAccount = n.from), "p2p" === n.scene ? n.type = "deleteMsgP2p" : n.type = "deleteMsgTeam", n.deletedIdClient = n.idClient, n.deletedIdServer = n.idServer, n = new u(n), this.sendCmd("deleteMsg", {
      sysMsg: n,
      msg: t
    }, e.callback)
  };
  var l = {
    text: 0,
    image: 1,
    audio: 2,
    video: 3,
    geo: 4,
    notification: 5,
    file: 6,
    tip: 10,
    robot: 11,
    custom: 100
  };
  s.getHistoryMsgs = function(e) {
    var t;
    switch (r.verifyOptions(e, "scene to", "msg::getHistoryMsgs"), r.verifyParamValid("scene", e.scene, this.message.validScenes, "msg::getHistoryMsgs"), void 0 === e.beginTime && (e.beginTime = 0), r.verifyParamType("beginTime", e.beginTime, "number", "msg::getHistoryMsgs"), void 0 === e.endTime && (e.endTime = 0), r.verifyParamType("endTime", e.endTime, "number", "msg::getHistoryMsgs"), void 0 !== e.lastMsgId && null !== e.lastMsgId || (e.lastMsgId = "0"), void 0 === e.limit && (e.limit = 100), r.verifyParamType("limit", e.limit, "number", "msg::getHistoryMsgs"), r.verifyParamMax("limit", e.limit, 100, "msg::getHistoryMsgs"), o(e.reverse) ? r.verifyParamType("reverse", e.reverse, "boolean", "msg::getHistoryMsgs") : e.reverse = !1, o(e.asc) ? r.verifyParamType("asc", e.asc, "boolean", "msg::getHistoryMsgs") : e.asc = !1, i(e.msgTypes) ? e.msgTypes = [] : Array.isArray(e.msgTypes) ? (e.msgTypes = e.msgTypes.map(function(e) {
      return l[e]
    }), e.msgTypes = e.msgTypes.filter(function(e) {
      return "number" == typeof e
    })) : "number" == typeof l[e.msgTypes] ? e.msgTypes = [l[e.msgTypes]] : e.msgTypes = [], this.processCallback(e), e.asc && (e.cbaop = function(e, t) {
      e || (t.msgs = t.msgs.reverse())
    }), e.scene) {
      case "p2p":
        t = "getHistoryMsgs";
        break;
      case "team":
        t = "getTeamHistoryMsgs"
    }
    var n = {
      scene: e.scene,
      to: e.to,
      beginTime: e.beginTime,
      endTime: e.endTime,
      lastMsgId: e.lastMsgId,
      limit: e.limit,
      reverse: e.reverse,
      msgTypes: e.msgTypes
    };
    this.sendCmd(t, n, e.callback)
  }, s.searchHistoryMsgs = function(e) {
    var t;
    switch (r.verifyOptions(e, "scene to keyword", "msg::searchHistoryMsgs"), r.verifyParamValid("scene", e.scene, this.message.validScenes, "msg::searchHistoryMsgs"), void 0 === e.beginTime && (e.beginTime = 0), r.verifyParamType("beginTime", e.beginTime, "number", "msg::searchHistoryMsgs"), void 0 === e.endTime && (e.endTime = 0), r.verifyParamType("endTime", e.endTime, "number", "msg::searchHistoryMsgs"), void 0 === e.limit && (e.limit = 100), r.verifyParamType("limit", e.limit, "number", "msg::searchHistoryMsgs"), r.verifyParamMax("limit", e.limit, 100, "msg::searchHistoryMsgs"), o(e.reverse) ? r.verifyParamType("reverse", e.reverse, "boolean", "msg::searchHistoryMsgs") : e.reverse = !1, o(e.asc) ? r.verifyParamType("asc", e.asc, "boolean", "msg::searchHistoryMsgs") : e.asc = !1, this.processCallback(e), e.asc && (e.cbaop = function(e, t) {
      e || (t.msgs = t.msgs.reverse())
    }), e.scene) {
      case "p2p":
        t = "searchHistoryMsgs";
        break;
      case "team":
        t = "searchTeamHistoryMsgs"
    }
    var n = r.filterObj(e, "scene to beginTime endTime keyword limit reverse");
    this.sendCmd(t, n, e.callback)
  }, s.getLocalMsgs = function(e) {
    var t, n = this.db,
      s = [];
    r.verifyOptions(e);
    var a = !1;
    o(e.start) && (a = !0, r.verifyParamType("start", e.start, "number", "msg::getLocalMsgs"));
    var c = !1;

    function u() {
      e.msgs = s, e.done(t, e)
    }
    o(e.end) && (c = !0, r.verifyParamType("end", e.end, "number", "msg::getLocalMsgs")), a && c && e.end <= e.start && r.onParamError("参数 end 必须晚于 start"), i(e.limit) && (e.limit = 100), r.verifyParamType("limit", e.limit, "number", "msg::getLocalMsgs"), r.verifyParamMin("limit", e.limit, 1, "msg::getLocalMsgs"), this.processCallback(e), n.enable ? n.getMsgs(e).then(function(e) {
      s = e, u()
    }, function(e) {
      t = e, u()
    }) : u()
  }, s.getLocalMsgByIdClient = function(e) {
    var t, n = this.db,
      s = null;

    function i() {
      e.msg = s, e.done(t, e)
    }
    r.verifyOptions(e, "idClient", "msg::getLocalMsgByIdClient"), this.processCallback(e), n.enable ? n.getMsgByIdClient(e.idClient).then(function(e) {
      e && (s = e), i()
    }, function(e) {
      t = e, i()
    }) : i()
  }, s.getLocalMsgsByIdClients = function(e) {
    var t, n = this.db,
      s = [];

    function i() {
      e.msgs = s, e.done(t, e)
    }
    r.verifyOptions(e, "idClients", "msg::getLocalMsgByIdClient"), r.verifyParamType("idClients", e.idClients, "array", "msg::getLocalMsgByIdClient"), this.processCallback(e), n.enable ? n.getMsgsByIdClients(e.idClients).then(function(e) {
      s = e.filter(function(e) {
        return !!e
      }), i()
    }, function(e) {
      t = e, i()
    }) : i()
  }, s.updateLocalMsg = function(e) {
    var t, n = this.db,
      s = null;
    if (r.verifyOptions(e, "idClient", "msg::updateLocalMsg"), this.processCallback(e), n.enable) {
      var i = r.filterObj(e, "idClient localCustom");
      n.updateMsg(i).then(function(e) {
        s = e, o()
      }, function(e) {
        t = e, o()
      })
    } else o();

    function o() {
      e.msg = s, e.done(t, e)
    }
  }, s.deleteLocalMsg = function(e) {
    var t;
    r.verifyOptions(e, "msg", "msg::deleteLocalMsg");
    var n = e.msg;

    function s() {
      e.done(t, e)
    }
    r.verifyOptions(n, "idClient sessionId", !0, "msg.", "msg::deleteLocalMsg"), this.processCallback(e), this.protocol.deleteLocalMsg(n).then(s, function(e) {
      t = e, s()
    })
  }, s.deleteLocalMsgsBySession = function(e) {
    var t, n = this.db;

    function s() {
      e.done(t, e)
    }
    r.verifyOptions(e, "scene to", "msg::deleteLocalMsgsBySession"), r.verifyParamValid("scene", e.scene, this.message.validScenes, "msg::deleteLocalMsgsBySession"), e.sessionId = e.scene + "-" + e.to, this.processCallback(e), n.enable ? n.deleteMsgsBySessionId(e.sessionId).then(function() {
      s()
    }, function(e) {
      t = e, s()
    }) : s()
  }, s.deleteAllLocalMsgs = function(e) {
    var t, n = this.db;

    function s() {
      e.done(t, e)
    }
    this.processCallback(e), n.enable && n.deleteAllMsgs().then(function() {
      s()
    }, function(e) {
      t = e, s()
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.undef,
    o = r.notundef;
  s.setCurrSession = function(e) {
    this.resetSessionUnread(e), this.protocol.setCurrSession(e)
  }, s.resetAllSessionUnread = function() {
    for (var e in this.protocol.sessionSet) this.protocol.sessionSet[e].unread > 0 && this.resetSessionUnread(e)
  }, s.resetSessionUnread = function(e) {
    if (this.protocol.resetSessionUnread(e), this.options.syncSessionUnread) {
      var t = this.protocol.findSession(e);
      if (t)
        if (t.lastMsg)
          if (t.scene && t.to) {
            var n = t.lastMsg.time;
            if (t && t.ack && t.ack >= n) this.logger.warn("api::resetSessionUnread: session ack not needs " + e);
            else {
              var s = {
                scene: "p2p" === t.scene ? 0 : 1,
                to: t.to,
                timetag: n
              };
              this.sendCmd("markSessionAck", s)
            }
          } else this.logger.warn("api::resetSessionUnread: session.scene|to undefined " + e);
      else this.logger.warn("api::resetSessionUnread: session.lastMsg undefined " + e);
      else this.logger.warn("api::resetSessionUnread: session undefined " + e)
    }
  }, s.resetCurrSession = function() {
    this.protocol.setCurrSession("")
  }, s.insertLocalSession = function(e) {
    var t, n;

    function s() {
      e.session = n, e.done(t, e)
    }
    r.verifyOptions(e, "scene to", "scene::insertLocalSession"), r.verifyParamValid("scene", e.scene, this.message.validScenes, "scene::insertLocalSession"), this.processCallback(e), this.protocol.insertLocalSession(e).then(function(e) {
      n = e, s()
    }, function(e) {
      t = e, s()
    })
  }, s.getLocalSessions = function(e) {
    var t, n = this,
      s = n.db,
      a = [];

    function c() {
      e.sessions = a, e.done(t, e)
    }
    r.verifyOptions(e), i(e.limit) && (e.limit = 100), r.verifyParamType("limit", e.limit, "number", "scene::getLocalSessions"), r.verifyParamMax("limit", e.limit, 100, "scene::getLocalSessions"), o(e.reverse) ? r.verifyParamType("reverse", e.reverse, "boolean", "scene::getLocalSessions") : e.reverse = !1, n.processCallback(e), s.enable ? s.getSessions(e).then(function(e) {
      a = e, n.protocol.mergeSessions(a), c()
    }, function(e) {
      t = e, c()
    }) : c()
  }, s.updateLocalSession = function(e) {
    var t, n = this,
      s = n.db;
    r.verifyOptions(e, "id", "scene::updateLocalSession"), n.processCallback(e);
    var i = r.filterObj(e, "id localCustom");

    function o() {
      n.protocol.onUpdateSession(i), e.session = i, e.done(t, e)
    }
    s.enable ? s.updateSession(i).then(function(e) {
      i = e, o()
    }, function(e) {
      t = e, o()
    }) : o()
  }, s.deleteLocalSession = function(e) {
    var t, n = this,
      s = n.db;

    function i() {
      e.done(t, e)
    }
    r.verifyOptions(e, "id", "session::deleteLocalSession"), n.processCallback(e), s.enable ? s.deleteSession(e.id).then(function() {
      n.protocol.deleteLocalSession(e.id), i()
    }, function(e) {
      t = e, i()
    }) : i()
  }, s.deleteSession = function(e) {
    r.verifyOptions(e, "scene to", "session::deleteSession"), this.processCallback(e), e.sessions = [{
      scene: e.scene,
      to: e.to
    }], this.deleteSessions(e)
  }, s.deleteSessions = function(e) {
    r.verifyOptions(e, "sessions", "session::deleteSessions"), r.verifyParamType("sessions", e.sessions, "array", "session::deleteSessions"), e.sessions.forEach(function(e, t) {
      r.verifyOptions(e, "scene to", !0, "sessions[" + t + "].", "session::deleteSessions")
    }), this.processCallback(e), this.sendCmd("deleteSessions", {
      sessions: e.sessions.map(function(e) {
        return e.scene + "|" + e.to
      })
    }, e.callback)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.undef,
    o = n(22),
    a = n(17);
  s.createTeam = function(e) {
    r.verifyOptions(e, "type name", "team::createTeam"), i(e.accounts) ? e.accounts = [] : r.verifyParamType("accounts", e.accounts, "array", "team::createTeam"), e.action = "create", this.processPs(e), this.processCallback(e), e.team = new o(e);
    var t = {
      team: e.team,
      accounts: e.accounts.slice(0),
      ps: e.ps
    };
    this.sendCmd("createTeam", t, e.callback)
  }, s.updateTeam = function(e) {
    r.verifyOptions(e, "teamId", "team::updateTeam"), e.action = "update", this.processCallback(e), e.team = new o(e), this.sendCmd("updateTeam", {
      team: e.team,
      single: !0
    }, e.callback)
  }, s.addTeamMembers = function(e) {
    r.verifyOptions(e, "teamId accounts", "team::addTeamMembers"), r.verifyParamType("accounts", e.accounts, "array", "team::addTeamMembers"), this.processPs(e), this.processCallback(e);
    var t = {
      teamId: e.teamId,
      accounts: e.accounts.slice(0),
      ps: e.ps
    };
    this.sendCmd("addTeamMembers", t, e.callback)
  }, s.removeTeamMembers = function(e) {
    r.verifyOptions(e, "teamId accounts", "team::removeTeamMembers"), r.verifyParamType("accounts", e.accounts, "array", "team::removeTeamMembers"), this.processCallback(e);
    var t = {
      teamId: e.teamId,
      accounts: e.accounts.slice(0)
    };
    this.sendCmd("removeTeamMembers", t, e.callback)
  }, s.acceptTeamInvite = function(e) {
    r.verifyOptions(e, "idServer teamId from", "team::acceptTeamInvite"), this.processCallback(e);
    var t = {
      idServer: e.idServer,
      teamId: e.teamId,
      from: e.from
    };
    this.sendCmd("acceptTeamInvite", t, e.callback)
  }, s.rejectTeamInvite = function(e) {
    r.verifyOptions(e, "idServer teamId from", "team::rejectTeamInvite"), this.processPs(e), this.processCallback(e);
    var t = {
      idServer: e.idServer,
      teamId: e.teamId,
      from: e.from,
      ps: e.ps
    };
    this.sendCmd("rejectTeamInvite", t, e.callback)
  }, s.applyTeam = function(e) {
    r.verifyOptions(e, "teamId", "team::applyTeam"), this.processPs(e), this.processCallback(e);
    var t = {
      teamId: e.teamId,
      ps: e.ps
    };
    this.sendCmd("applyTeam", t, e.callback)
  }, s.passTeamApply = function(e) {
    r.verifyOptions(e, "idServer teamId from", "team::passTeamApply"), this.processCallback(e);
    var t = {
      idServer: e.idServer,
      teamId: e.teamId,
      from: e.from
    };
    this.sendCmd("passTeamApply", t, e.callback)
  }, s.rejectTeamApply = function(e) {
    r.verifyOptions(e, "idServer teamId from", "team::rejectTeamApply"), this.processPs(e), this.processCallback(e);
    var t = {
      idServer: e.idServer,
      teamId: e.teamId,
      from: e.from,
      ps: e.ps
    };
    this.sendCmd("rejectTeamApply", t, e.callback)
  }, s.addTeamManagers = function(e) {
    r.verifyOptions(e, "teamId accounts", "team::addTeamManagers"), r.verifyParamType("accounts", e.accounts, "array", "team::addTeamManagers"), this.processCallback(e);
    var t = {
      teamId: e.teamId,
      accounts: e.accounts.slice(0)
    };
    this.sendCmd("addTeamManagers", t, e.callback)
  }, s.removeTeamManagers = function(e) {
    r.verifyOptions(e, "teamId accounts", "team::removeTeamManagers"), r.verifyParamType("accounts", e.accounts, "array", "team::removeTeamManagers"), this.processCallback(e);
    var t = {
      teamId: e.teamId,
      accounts: e.accounts.slice(0)
    };
    this.sendCmd("removeTeamManagers", t, e.callback)
  }, s.updateInfoInTeam = function(e) {
    r.verifyOptions(e, "teamId", "team::updateInfoInTeam"), this.processCallback(e), this.sendCmd("updateInfoInTeam", {
      teamMember: new a(e),
      single: !0
    }, e.callback)
  }, s.updateNickInTeam = function(e) {
    r.verifyOptions(e, "teamId account", "team::updateNickInTeam"), this.processCallback(e), this.sendCmd("updateNickInTeam", {
      teamMember: new a(e),
      single: !0
    }, e.callback)
  }, s.updateMuteStateInTeam = function(e) {
    r.verifyOptions(e, "teamId account mute", "team::updateMuteStateInTeam"), this.processCallback(e), e.mute = e.mute ? 1 : 0, this.sendCmd("updateMuteStateInTeam", e)
  }, s.getMutedTeamMembers = function(e) {
    r.verifyOptions(e, "teamId", "team::getMutedTeamMembers"), this.processCallback(e), this.sendCmd("getMutedTeamMembers", e)
  }, s.leaveTeam = function(e) {
    r.verifyOptions(e, "teamId", "team::leaveTeam"), this.processCallback(e);
    var t = {
      teamId: e.teamId
    };
    this.sendCmd("leaveTeam", t, e.callback)
  }, s.transferTeam = function(e) {
    r.verifyOptions(e, "teamId account leave", "team::transferTeam"), r.verifyParamType("leave", e.leave, "boolean", "team::transferTeam"), this.processCallback(e);
    var t = {
      teamId: e.teamId,
      account: e.account,
      leave: e.leave
    };
    this.sendCmd("transferTeam", t, e.callback)
  }, s.dismissTeam = function(e) {
    r.verifyOptions(e, "teamId", "team::dismissTeam"), this.processCallback(e);
    var t = {
      teamId: e.teamId
    };
    this.sendCmd("dismissTeam", t, e.callback)
  }, s.getTeam = function(e) {
    var t, n = this,
      s = n.db;

    function i() {
      n.sendCmd("getTeam", {
        teamId: e.teamId
      }, e.callback)
    }
    r.verifyOptions(e, "teamId", "team::getTeam"), n.processCallback(e), e.cbaop = function(e, s) {
      e || n.logger.log("api::getTeam: cbaop " + t, s)
    }, t = e.teamId, s.enable && !e.sync ? s.getTeam(t).then(function(s) {
      s ? (n.logger.log("api::getTeam: db.getTeam " + t, s), e.done(null, s)) : i()
    }, i) : i()
  }, s.getTeams = function(e) {
    var t = this,
      n = t.db,
      s = 0;

    function i() {
      t.sendCmd("getTeams", {
        timetag: s,
        NOTSTORE: "timetag"
      }, e.callback)
    }
    r.verifyOptions(e), t.processCallback(e), n.enable ? n.getTeamsTimetag().then(function(e) {
      s = e, i()
    }, i) : i()
  }, s.getTeamMembers = function(e) {
    var t = this,
      n = 0;
    r.verifyOptions(e, "teamId", "team::getTeamMembers"), t.processCallback(e), t.sendCmd("getTeamMembers", {
      teamId: e.teamId,
      timetag: n,
      NOTSTORE: "timetag"
    }, e.callback)
  }, s.notifyForNewTeamMsg = function(e) {
    r.verifyOptions(e, "teamIds", "team::notifyForNewTeamMsg"), this.protocol.notifyForNewTeamMsg(e.teamIds).then(function(t) {
      e.done(null, t)
    }, function(t) {
      e.done(t)
    })
  }, s.getMyTeamMembers = function(e) {
    r.verifyOptions(e, "teamIds", "team::getMyTeamMembers");
    var t = this.processCallbackPromise(e);
    return this.sendCmd("getMyTeamMembers", e), t
  }, s.getLocalTeams = function(e) {
    var t, n = this.db,
      s = [];

    function i() {
      e.teams = s, e.done(t, e)
    }
    r.verifyOptions(e, "teamIds", "team::getLocalTeams"), r.verifyParamType("teamIds", e.teamIds, "array", "team::getLocalTeams"), this.processCallback(e), n.enable ? n.getTeamsByTeamIds(e.teamIds).then(function(e) {
      s = e.filter(function(e) {
        return !!e
      }), i()
    }, function(e) {
      t = e, i()
    }) : i()
  }, s.getLocalTeamMembers = function(e) {
    var t, n = this.db,
      s = [];

    function i() {
      e.members = s, e.done(t, e)
    }
    r.verifyOptions(e, "teamId accounts", "team::getLocalTeamMembers"), r.verifyParamType("accounts", e.accounts, "array", "team::getLocalTeamMembers"), this.processCallback(e), n.enable ? n.getInvalidTeamMembers(e.teamId, e.accounts).then(function(e) {
      s = e.filter(function(e) {
        return !!e
      }), i()
    }, function(e) {
      t = e, i()
    }) : i()
  }, s.deleteLocalTeam = function(e) {
    var t, n = this.db;

    function s() {
      e.done(t, e)
    }
    r.verifyOptions(e, "teamId", "team::deleteLocalTeam"), this.processCallback(e), n.enable ? n.deleteTeam(e.teamId).then(function() {
      s()
    }, function(e) {
      t = e, s()
    }) : s()
  }, s.muteTeamAll = function(e) {
    switch (r.verifyOptions(e, "teamId type", "team::muteTeamAll"), e.type) {
      case "none":
        e.muteType = 0;
        break;
      case "normal":
        e.muteType = 1;
        break;
      case "all":
        e.muteType = 2;
        break;
      default:
        e.muteType = 1
    }
    this.processCallback(e), this.sendCmd("muteTeamAll", e)
  }, s.sendTeamMsgReceipt = function(e) {
    r.verifyOptions(e, "teamMsgReceipts", "team::sendTeamMsgReceipt"), this.processCallback(e), this.sendCmd("sendTeamMsgReceipt", e)
  }, s.getTeamMsgReads = function(e) {
    r.verifyOptions(e, "teamMsgReceipts", "team::getTeamMsgReads"), this.processCallback(e), this.sendCmd("getTeamMsgReads", e)
  }, s.getTeamMsgReadAccounts = function(e) {
    r.verifyOptions(e, "teamMsgReceipt", "team::getTeamMsgReadAccounts"), this.processCallback(e), this.sendCmd("getTeamMsgReadAccounts", e)
  }
}, function(e, t, n) {
  "use strict";
  n(4).fn.getRobots = function(e) {
    (e = e || {}).type = "getRobots", this.processCallback(e), this.sendCmd("sync", {
      sync: {
        robots: 0
      }
    }, e.callback)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.notundef,
    o = n(59);
  s.friendRequest = function(e) {
    r.verifyOptions(e, "type account", "friend::friendRequest"), r.verifyParamValid("type", e.type, o.validTypes(), "friend::friendRequest"), this.processPs(e), this.processCallback(e);
    var t = {
      account: e.account,
      type: o.getByteFromType(e.type),
      ps: e.ps
    };
    i(e.idServer) && (t.idServer = e.idServer), this.sendCmd("friendRequest", t, e.callback)
  }, s.addFriend = function(e) {
    e.type = "addFriend", this.friendRequest(e)
  }, s.applyFriend = function(e) {
    e.type = "applyFriend", this.friendRequest(e)
  }, s.passFriendApply = function(e) {
    r.verifyOptions(e, "idServer", "friend::passFriendApply"), e.type = "passFriendApply", this.friendRequest(e)
  }, s.rejectFriendApply = function(e) {
    r.verifyOptions(e, "idServer", "friend::rejectFriendApply"), e.type = "rejectFriendApply", this.friendRequest(e)
  }, s.deleteFriend = function(e) {
    r.verifyOptions(e, "account", "friend::deleteFriend"), this.processCallback(e), this.sendCmd("deleteFriend", {
      account: e.account
    }, e.callback)
  }, s.updateFriend = function(e) {
    this.processCallback(e);
    var t = new o(e);
    this.sendCmd("updateFriend", {
      friend: t,
      single: !0
    }, e.callback)
  }, s.getFriends = function(e) {
    var t = this,
      n = t.db,
      s = 0;

    function i() {
      t.sendCmd("getFriends", {
        timetag: s,
        NOTSTORE: "timetag"
      }, e.callback)
    }
    r.verifyOptions(e), t.processCallback(e), n.enable ? n.getFriendsTimetag().then(function(e) {
      s = e, i()
    }, i) : i()
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.objs2accounts,
    o = n(30);
  s.updateMyInfo = function(e) {
    r.verifyOptions(e), this.processCallback(e), e.user = new o(e), delete e.user.account, this.sendCmd("updateMyInfo", {
      user: e.user,
      single: !0
    }, e.callback)
  }, s.getMyInfo = function(e) {
    return (e = e || {}).account = this.account, this.getUser(e)
  }, s.getUser = function(e) {
    var t, n = this,
      s = n.db;

    function i() {
      n.sendCmd("getUsers", {
        accounts: [t],
        single: !0
      }, e.callback)
    }
    r.verifyOptions(e, "account", "user::getUser"), n.processCallback(e), e.cbaop = function(e, s) {
      if (!e) return s = s[0] || null, n.logger.log("api::getUser: cbaop " + t, s), s
    }, t = e.account, e.sync ? i() : s.enable ? s.getUser(t).then(function(s) {
      s ? (n.logger.log("api::getUser: db.getUser " + t, s), e.done(null, s)) : i()
    }, i) : i()
  }, s.getUsers = function(e) {
    var t, n = this,
      s = n.db,
      o = [];

    function a() {
      n.sendCmd("getUsers", {
        accounts: t,
        single: !0
      }, e.callback)
    }
    r.verifyOptions(e, "accounts", "user::getUsers"), r.verifyParamType("accounts", e.accounts, "array", "user::getUsers"), n.processCallback(e), e.cbaop = function(e, s) {
      if (!e) return s = s.concat(o), n.logger.log("api::getUsers: cbaop " + t, s), s
    }, t = r.deduplicate(e.accounts), r.verifyArrayMax("accounts", e.accounts, 150, "user::getUsers"), e.sync ? a() : s.enable ? s.getUsers(t).then(function(s) {
      if (s && s.length === t.length) n.logger.log("api::getUsers: db.getUsers", s), e.done(null, s);
      else {
        o = s;
        var r = i(s),
          c = [];
        t.forEach(function(e) {
          -1 === r.indexOf(e) && c.push(e)
        }), t = c, a()
      }
    }, a) : a()
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0);
  s.markInBlacklist = function(e) {
    r.verifyOptions(e, "account isAdd", "relation::markInBlacklist"), r.verifyParamType("isAdd", e.isAdd, "boolean", "relation::markInBlacklist"), this.processCallback(e), this.sendCmd("markInBlacklist", {
      account: e.account,
      isAdd: e.isAdd
    }, e.callback)
  }, s.addToBlacklist = function(e) {
    return e.isAdd = !0, this.markInBlacklist(e)
  }, s.removeFromBlacklist = function(e) {
    return e.isAdd = !1, this.markInBlacklist(e)
  }, s.markInMutelist = function(e) {
    r.verifyOptions(e, "account", "relation::markInMutelist"), r.verifyParamType("isAdd", e.isAdd, "boolean", "relation::markInMutelist"), this.processCallback(e), this.sendCmd("markInMutelist", {
      account: e.account,
      isAdd: e.isAdd
    }, e.callback)
  }, s.addToMutelist = function(e) {
    return e.isAdd = !0, this.markInMutelist(e)
  }, s.removeFromMutelist = function(e) {
    return e.isAdd = !1, this.markInMutelist(e)
  }, s.getRelations = function(e) {
    var t = this,
      n = t.db,
      s = 0;

    function i() {
      t.sendCmd("getRelations", {
        timetag: s,
        NOTSTORE: "timetag"
      }, e.callback)
    }
    e = r.verifyOptions(e), t.processCallback(e), n.enable ? n.getRelationsTimetag().then(function(e) {
      s = e, i()
    }, i) : i()
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0);
  s.kick = function(e) {
    r.verifyOptions(e, "deviceIds", "link::kick"), this.processCallback(e), this.sendCmd("kick", {
      deviceIds: e.deviceIds.slice(0)
    }, e.callback)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(4).fn,
    r = n(0),
    i = r.isArray,
    o = n(17);
  s.mergeObjArray = function(e, t, n) {
    return e || (e = []), t ? (i(t) || (t = [t]), t.length ? (n = n || {}, r.mergeObjArray(e, t, n)) : e) : e
  }, s.cutObjArray = function(e, t, n) {
    return e && t ? (i(t) || (t = [t]), t.length ? (n = n || {}, r.cutObjArray(e, t, n)) : e) : e
  }, s.mergeLoginPorts = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "deviceId"
    })
  }, s.cutLoginPorts = function(e, t) {
    return this.cutObjArray(e, t, {
      keyPath: "deviceId",
      sortPath: "type"
    })
  }, s.mergeRelations = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "account"
    })
  }, s.cutRelations = function(e, t) {
    return this.cutObjArray(e, t, {
      keyPath: "account"
    })
  }, s.findRelation = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "account",
      value: t
    })
  }, s.mergeFriends = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "account"
    })
  }, s.cutFriends = function(e, t) {
    return this.cutObjArray(e, t, {
      keyPath: "account"
    })
  }, s.cutFriendsByAccounts = function(e, t) {
    i(t) || (t = [t]);
    var n = t.map(function(e) {
      return {
        account: e
      }
    });
    return this.cutFriends(e, n)
  }, s.findFriend = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "account",
      value: t
    })
  }, s.mergeUsers = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "account"
    })
  }, s.findUser = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "account",
      value: t
    })
  }, s.mergeTeams = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "teamId"
    })
  }, s.cutTeams = function(e, t) {
    return this.cutObjArray(e, t, {
      keyPath: "teamId"
    })
  }, s.findTeam = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "teamId",
      value: t
    })
  }, s.assembleTeamOwner = o.assembleOwner, s.assembleTeamMembers = o.assembleMembers, s.genTeamMemberId = o.genId, s.mergeTeamMembers = function(e, t) {
    return this.mergeObjArray(e, t)
  }, s.cutTeamMembers = function(e, t) {
    return this.cutObjArray(e, t)
  }, s.cutTeamMembersByAccounts = function(e, t, n) {
    i(n) || (n = [n]);
    var s = o.assembleMembers({
      teamId: t
    }, n);
    return this.cutTeamMembers(e, s)
  }, s.findTeamMember = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "id",
      value: t
    })
  }, s.mergeSessions = function(e, t) {
    return this.mergeObjArray(e, t, {
      sortPath: "updateTime",
      desc: !0
    })
  }, s.cutSessions = function(e, t) {
    return this.cutObjArray(e, t)
  }, s.cutSessionsByIds = function(e, t) {
    i(t) || (t = [t]);
    var n = t.map(function(e) {
      return {
        id: e
      }
    });
    return this.cutSessions(e, n)
  }, s.findSession = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "id",
      value: t
    })
  }, s.mergeMsgs = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "idClient",
      sortPath: "time"
    })
  }, s.cutMsgs = function(e, t) {
    return this.cutObjArray(e, t, {
      keyPath: "idClient"
    })
  }, s.cutMsgsByIdClients = function(e, t) {
    i(t) || (t = [t]);
    var n = t.map(function(e) {
      return {
        idClient: e
      }
    });
    return this.cutMsgs(e, n)
  }, s.findMsg = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "idClient",
      value: t
    })
  }, s.mergeSysMsgs = function(e, t) {
    return this.mergeObjArray(e, t, {
      keyPath: "idServer",
      desc: !0
    })
  }, s.cutSysMsgs = function(e, t) {
    return this.cutObjArray(e, t, {
      keyPath: "idServer"
    })
  }, s.cutSysMsgsByIdServers = function(e, t) {
    i(t) || (t = [t]);
    var n = t.map(function(e) {
      return {
        idServer: e
      }
    });
    return this.cutSysMsgs(e, n)
  }, s.findSysMsg = function(e, t) {
    return r.findObjInArray(e, {
      keyPath: "idServer",
      value: t
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(13),
    r = n(0),
    i = {
      welcome: "00",
      text: "01",
      link: "03"
    },
    o = {
      "01": "text",
      "02": "image",
      "03": "answer",
      11: "template"
    };

  function a(e) {
    r.verifyOptions(e, "content", "msg::RobotMessage"), r.undef(e.robotAccid) && (e.robotAccid = e.to);
    var t = e.content;
    switch (t.type) {
      case "welcome":
        r.undef(e.body) && (this.body = "欢迎消息");
        break;
      case "text":
        r.verifyOptions(t, "content", "msg::RobotMessage"), r.undef(e.body) && (this.body = t.content);
        break;
      case "link":
        r.verifyOptions(t, "target", "msg::RobotMessage")
    }
    t.type && (t.type = i[t.type]), t = {
      param: t,
      robotAccid: e.robotAccid
    }, this.attach = JSON.stringify(t), e.type = "robot", s.call(this, e)
  }
  a.prototype = Object.create(s.prototype), a.reverse = function(e) {
    var t = s.reverse(e);
    if ("robot" === t.type) {
      var n = JSON.parse(e.attach);
      if (n.param && (n.param.type = o[n.param.type] || "unknown"), n.robotMsg) {
        var i = (n = r.merge(n, n.robotMsg)).message;
        "bot" === n.flag ? n.message = i.map(function(e) {
          return e.type = o[e.type] || "unknown", e
        }) : n.flag, delete n.robotMsg
      }
      t.content = n
    }
    return t
  }, e.exports = a
}, function(e, t, n) {
  "use strict";
  var s = n(13),
    r = n(0);

  function i(e) {
    r.verifyOptions(e, "tip", "msg::TipMessage"), e.type = "tip", s.call(this, e), this.body = e.tip
  }
  i.prototype = Object.create(s.prototype), i.reverse = function(e) {
    var t = s.reverse(e);
    return t.text = "", t.tip = e.body, e.attach && (t.attach = e.attach), t
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(13),
    r = n(0);

  function i(e) {
    r.verifyOptions(e, "content", "msg::CustomMessage"), e.type = "custom", s.call(this, e), this.attach = e.content
  }
  i.prototype = Object.create(s.prototype), i.reverse = function(e) {
    var t = s.reverse(e);
    return t.content = e.attach, t
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(0).notundef,
    r = n(13),
    i = n(15).getInstance("IM"),
    o = n(22),
    a = n(30),
    c = {
      0: "addTeamMembers",
      1: "removeTeamMembers",
      2: "leaveTeam",
      3: "updateTeam",
      4: "dismissTeam",
      5: "passTeamApply",
      6: "transferTeam",
      7: "addTeamManagers",
      8: "removeTeamManagers",
      9: "acceptTeamInvite",
      10: "updateTeamMute",
      101: "netcallMiss",
      102: "netcallBill"
    };

  function u() {}
  u.prototype = Object.create(r.prototype), u.reverse = function(e) {
    var t = r.reverse(e);
    if (e.attach = e.attach ? "" + e.attach : "", e.attach) {
      var n = JSON.parse(e.attach);
      if (t.attach = {
          type: c[n.id] || n.id
        }, s(n.data)) {
        var u = n.data;
        s(u.tinfo) && (t.attach.team = o.reverse(i.unserialize(u.tinfo, "team"), !0)), s(u.ids) && (t.attach.accounts = u.ids), s(u.id) && (t.attach.account = u.id), s(u.uinfos) && (t.attach.users = u.uinfos.map(function(e) {
          return a.reverse(i.unserialize(e, "user"))
        })), s(u.mute) && (t.attach.mute = 1 == +u.mute), s(u.attach) && (t.attach.custom = u.attach), s(u.channel) && (t.attach.channelId = u.channel), s(u.calltype) && (t.attach.netcallType = u.calltype), s(u.duration) && (t.attach.duration = u.duration), s(u.time) && (t.attach.time = u.time), t.attach.accounts && t.attach.accounts.length <= 2 && t.from === t.to && t.attach.accounts.some(function(e) {
          if (e !== t.to) return t.to = e, !0
        })
      }
    } else t.attach = {};
    return t
  }, e.exports = u
}, function(e, t, n) {
  "use strict";
  var s = n(13),
    r = n(0);

  function i(e) {
    e.type = "geo", r.verifyOptions(e, "geo", "msg::GeoMessage"), r.verifyOptions(e.geo, "lng lat title", !0, "geo.", "msg::GeoMessage"), r.verifyParamType("geo.lng", e.geo.lng, "number", "msg::GeoMessage"), r.verifyParamType("geo.lat", e.geo.lat, "number", "msg::GeoMessage"), r.verifyParamType("geo.title", e.geo.title, "string", "msg::GeoMessage"), s.call(this, e), this.attach = JSON.stringify(e.geo)
  }
  i.prototype = Object.create(s.prototype), i.reverse = function(e) {
    var t = s.reverse(e);
    return e.attach = e.attach ? "" + e.attach : "", t.geo = e.attach ? JSON.parse(e.attach) : {}, t
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(29),
    r = n(0);

  function i() {}
  i.prototype = Object.create(s.prototype), i.verifyFile = function(e, t) {
    r.verifyOptions(e, "dur w h", !0, "file.", t)
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(29),
    r = n(0);

  function i() {}
  i.prototype = Object.create(s.prototype), i.verifyFile = function(e, t) {
    r.verifyOptions(e, "dur", !0, "file.", t)
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = n(29);

  function i() {}
  i.prototype = Object.create(r.prototype), i.verifyFile = function(e, t) {
    s.verifyOptions(e, "w h", !0, "file.", t)
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(13),
    r = n(0);

  function i(e) {
    r.verifyOptions(e, "text", "msg::TextMessage"), e.type = "text", s.call(this, e)
  }
  i.prototype = Object.create(s.prototype), i.reverse = function(e) {
    return s.reverse(e)
  }, e.exports = i
}, function(e, t, n) {
  "use strict";
  var s = n(0),
    r = function(e) {
      this.account = e.account
    },
    i = r.prototype,
    o = i.Message = n(13),
    a = i.TextMessage = n(135),
    c = i.FileMessage = n(29),
    u = i.GeoMessage = n(131),
    m = i.NotificationMessage = n(130),
    l = i.CustomMessage = n(129),
    d = i.TipMessage = n(128),
    p = i.RobotMessage = n(127);
  i.validScenes = o.validScenes, i.validTypes = o.validTypes, i.reverse = function(e) {
    var t;
    switch (o.getType(e)) {
      case "text":
        t = a.reverse(e);
        break;
      case "image":
      case "audio":
      case "video":
      case "file":
        t = c.reverse(e);
        break;
      case "geo":
        t = u.reverse(e);
        break;
      case "notification":
        t = m.reverse(e);
        break;
      case "custom":
        t = l.reverse(e);
        break;
      case "tip":
        t = d.reverse(e);
        break;
      case "robot":
        t = p.reverse(e);
        break;
      default:
        t = o.reverse(e)
    }
    return o.setExtra(t, this.account), t
  }, i.reverseMsgs = function(e, t) {
    var n, r, i = this;
    return e.map(function(e) {
      return e = i.reverse(e), t && ((n = t.modifyObj) && (e = s.merge(e, n)), r = t.mapper, s.isFunction(r) && (e = r(e))), e
    })
  }, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s, r = n(8),
    i = (s = r) && s.__esModule ? s : {
      default: s
    };
  var o = n(2).fn,
    a = n(0),
    c = i.default.clientTypeMap;

  function u(e) {
    e = e || {};
    var t = a.copy(e);
    return t.clientType && (t.clientType = c[t.clientType] || ""), t.serverCustom && (t.custom = JSON.parse(t.serverCustom), "string" == typeof t.custom[0] && (t.custom = t.custom[0]), delete t.serverCustom), t
  }
  o.processEventService = function(e) {
    var t = e.content,
      n = e.error,
      s = this.options || {};
    switch (n && (n.callFunc = "events::processEventService", this.onCustomError("事件服务解包失败", "EVENT_SERVICE_ERROR", n)), e.cmd) {
      case "pushEvent":
        if (a.isFunction(s.onpushevents)) {
          var r = {
            msgEvents: [u(t.msgEvent)]
          };
          s.onpushevents(r)
        }
        break;
      case "pushEvents":
        if (a.isFunction(s.onpushevents)) {
          var i = t.msgEvents;
          i = {
            msgEvents: i.map(function(e) {
              return u(e)
            })
          }, s.onpushevents(i)
        }
    }
  }
}, function(e, t, n) {
  "use strict";
  n(2).fn.processFilter = function(e) {
    switch (e.cmd) {
      case "sendFilterMsg":
        this.onSendMsg(e, !0);
        break;
      case "filterMsg":
        this.onMsg(e, !0);
        break;
      case "filterSysMsg":
        this.onSysMsg(e, !0);
        break;
      case "sendFilterCustomSysMsg":
        this.onSendSysMsg(e, !0)
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn;
  s.processChatroom = function(e) {
    switch (e.cmd) {
      case "getChatroomAddress":
        this.onChatroomAddress(e)
    }
  }, s.onChatroomAddress = function(e) {
    e.error || (e.obj.address = e.content.address)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn;
  s.syncSessionAck = function(e) {
    var t = this,
      n = t.db,
      s = Promise.resolve();
    [
      [e.content.p2p, "p2p"],
      [e.content.team.m_map, "team"]
    ].forEach(function(e) {
      var r = e[0],
        i = e[1];
      Object.keys(r).forEach(function(e) {
        var o = i + "-" + e,
          a = {
            id: o,
            ack: r[e]
          };
        n.enable && (s = s.then(function() {
          return n.putSession(a)
        }).then(function() {
          t.markUnreadBySessionAck({
            sessionId: o,
            ack: r[e]
          })
        })), t.mergeSession(a)
      })
    }), t.logger.warn("session::syncSessionAck: parse offline session ack", t.sessionSet);
    var r = e.content.timetag;
    n.enable && (s = s.then(function() {
      return t.db.updateSessionAck(r)
    })), s.cmd = "sessionAck", t.syncPromiseArray.push(s)
  }, s.onMarkSessionAck = function(e) {
    e.error || this.storeSessionAck(e.obj)
  }, s.syncMarkSessionAck = function(e) {
    this.storeSessionAck(e.content)
  }, s.storeSessionAck = function(e) {
    if (this.options.syncSessionUnread) {
      var t = this.db,
        n = (0 === e.scene ? "p2p" : "team") + "-" + e.to,
        s = e.timetag;
      if (s <= ((this.findSession(n) || {}).ack || 0)) this.logger.warn("session::storeSessionAck: ack <= ackInMemory", s);
      else {
        var r = {
          id: n,
          ack: s
        };
        this.mergeSession(r), t.enable && t.updateSession(r), this.logger.info("session::storeSessionAck:", r), this.markUnreadBySessionAck({
          sessionId: n,
          ack: r.ack
        })
      }
    }
  }, s.markUnreadBySessionAck = function(e) {
    var t = e.sessionId,
      n = e.ack,
      s = this,
      r = s.db;
    if (r.enable) s.pushMsgTask(function() {
      return r.getMsgCountAfterAck({
        shouldCountNotifyUnread: s.options.shouldCountNotifyUnread,
        sessionId: t,
        ack: n
      }).then(function(e) {
        var n = {
          id: t,
          unread: e
        };
        return s.logger.log("session::markUnreadBySessionAck: db.getMsgCountAfterAck done"), s.syncing && s.cacheSyncedSession(n), s.onUpdateSession(n), r.updateSession(n)
      })
    });
    else {
      var i = s.findSession(t);
      if (i) {
        var o = i.unreadMsgs;
        if (o && o.length) {
          for (var a = 0, c = [], u = o.length - 1; u >= 0; u--) {
            var m = o[u];
            if (!(m.time > n)) break;
            a++, c.push(m)
          }
          i.unreadMsgs = c, i.unread = a, s.logger.info("session::markUnreadBySessionAck: unread " + a), s.onUpdateSession(i)
        }
      }
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = n(19),
    o = n(3);
  s.mergeSession = function(e) {
    e = r.copyWithNull(e);
    var t = this.sessionSet,
      n = e.id,
      s = t[n];
    if (s && s.lastMsg && e && e.lastMsg && e.lastMsg.isLocal) {
      var i = s.lastMsg.time || 0;
      if ((e.lastMsg.time || 0) < i) return s
    }
    return t[n] = r.merge(s, e), e = t[n], r.undef(e.unread) && (e.unread = 0), e
  }, s.mergeSessions = function(e) {
    var t = this;
    e.forEach(function(e) {
      t.mergeSession(e)
    })
  }, s.deleteLocalSession = function(e) {
    var t = this;
    r.isArray(e) || (e = [e]), e.forEach(function(e) {
      delete t.sessionSet[e]
    })
  }, s.onDeleteSessions = function(e) {
    e.obj = e.obj.sessions.map(function(e) {
      return i.parse(e)
    })
  }, s.onUpdateSession = function(e) {
    var t = this;
    return new Promise(function(n) {
      e ? (e = t.mergeSession(e), e = r.simpleClone(e), i.trim(e), i.isComplete(e) && setTimeout(function() {
        t.logger.info("session::onUpdateSession:", e.id, r.simpleClone(e)), t.options.onupdatesession(e), n(e)
      }, 0)) : n(e)
    })
  }, s.setCurrSession = function(e) {
    e = "" + e, this.currSessionId = e, this.logger.info("session::setCurrSession:", e)
  }, s.findSession = function(e) {
    return this.sessionSet[e]
  }, s.resetSessionUnread = function(e) {
    e = "" + e;
    var t, n = this,
      s = n.db;
    if (n.findSession(e)) {
      if (s.enable && s.resetSessionUnread(e), !n.options.autoMarkRead && n.sessionUnreadMsgs && n.sessionUnreadMsgs[e]) {
        var r = n.sessionUnreadMsgs[e];
        n.markMsgRead(r, !0), n.sessionUnreadMsgs[e] = []
      }
      t = {
        id: e,
        unread: 0
      }, n.onUpdateSession(t)
    } else n.logger.warn("session::resetSessionUnread: no session " + e)
  }, s.insertLocalSession = function(e) {
    var t = this,
      n = t.db,
      s = t.sessionSet;
    return new Promise(function(a, c) {
      var u = e.scene,
        m = e.to,
        l = u + "-" + m,
        d = t.findSession(l);
      if (d) c(o.sessionExist({
        callFunc: "session::insertLocalSession",
        session: d
      }));
      else {
        var p;
        if (r.isNumber(e.updateTime)) p = e.updateTime;
        else {
          var f, g = [];
          for (var y in s) s.hasOwnProperty(y) && (f = s[y], r.isNumber(f.updateTime) && g.push(f.updateTime));
          p = Math.max.apply(Math, g) + 1, p = Math.max(p, +new Date)
        }
        var h = Promise.resolve();
        n.enable && (h = n.getMsgs({
          sessionId: l,
          limit: 1
        })), h.then(function(e) {
          if (r.isArray(e) && 1 === e.length) {
            var s = e[0];
            (d = i.genSessionByMsg(s)).updateTime = p
          } else d = {
            id: l,
            scene: u,
            to: m,
            updateTime: p,
            lastMsg: null
          };
          n.enable ? n.putSession(d).then(a, c) : a(d), t.onUpdateSession(d)
        })
      }
    })
  }, s.updateLocalSession = function(e, t) {
    var n = this;
    return new Promise(function(s, i) {
      var a = n.db;
      if (n.findSession(e.id)) {
        var c = Promise.resolve(),
          u = r.filterObj(e, "id lastMsg localCustom");
        a.enable && (c = a.updateSession(u)), c.then(function(e) {
          return n.onUpdateSession(e, t)
        }).then(s, function(e) {
          i({
            callFunc: "session::updateLocalSession",
            event: e
          })
        })
      } else i(o.sessionNotExist({
        sessionId: e.id,
        callFunc: "session::updateLocalSession"
      }))
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = n(20);
  s.splitSysMsgs = function(e, t) {
    for (var n, s = e.length - 1; s >= 0; s--) n = e[s], i.isCustom(n) && (e.splice(s, 1), t.push(n))
  }, s.onOfflineSysMsgs = function(e, t) {
    var n = this,
      s = e.content.sysMsgs.map(function(e) {
        return e = i.reverse(e), t && (e.filter = !0), e
      });
    s = s.reverse(), n.markSysMsgRead(s);
    var r = [];
    n.splitSysMsgs(s, r);
    var o = t ? "offlineFilterSysMsgs" : "offlineSysMsgs",
      a = t ? "offlineFilterCustomSysMsgs" : "offlineCustomSysMsgs";
    if (s.length) {
      var c = n.putSysMsg(s, "offlineSysMsgs").then(function(e) {
        (s = e).length && (n.logger.info("sysmsg::onOfflineSysMsgs: ", o, s.length, s), n.syncResult[o] = n.syncResult[o] || [], n.syncResult[o] = n.syncResult[o].concat(s))
      });
      c.cmd = "sysMsgs", n.syncPromiseArray.push(c)
    }
    r.length && (n.logger.info("sysmsg::onOfflineSysMsgs: ", a, r), n.syncResult[a] = n.syncResult[a] || [], n.syncResult[a] = n.syncResult[a].concat(r))
  }, s.onSendSysMsg = function(e, t) {
    var n = e.obj;
    this.completeSysMsg(n), e.error ? n.status = "fail" : n.status = "success", n = i.reverse(n), t && (e.obj.filter = !0), e.obj = n
  }, s.completeSysMsg = function(e) {
    return e.from = this.account, e
  }, s.onSysMsg = function(e, t) {
    var n = i.reverse(e.content.sysMsg);
    this.markSysMsgRead(n), t && (n.filter = !0), i.isCustom(n) ? (this.logger.info("sysmsg::onSysMsg: on customSysMsg", n), this.options.oncustomsysmsg(n)) : this.syncing ? this.unhandledSysMsgs.push(n) : this.handleSysMsg(n)
  }, s.handleSysMsg = function(e) {
    var t = this,
      n = e.type,
      s = e.from;
    t.sysMsgPromise = t.sysMsgPromise.then(function() {
      return t.putSysMsg(e, "onSysMsg")
    }).then(function(t) {
      e = t[0]
    }).then(function() {
      if (e) {
        var r, i = Promise.resolve();
        switch (n) {
          case "addFriend":
            r = {
              type: "addFriend",
              account: s
            }, i = t.onFriendRequest(r);
            break;
          case "passFriendApply":
            r = {
              type: "passFriendApply",
              account: s
            }, i = t.onFriendRequest(r);
            break;
          case "deleteFriend":
            i = t.onDeleteFriend({
              account: s
            })
        }
        return r && r.friend && (e.friend = r.friend), i
      }
    }).then(function() {
      e && (t.logger.info("sysmsg::handleSysMsg: ", n, e), setTimeout(function() {
        t.options.onsysmsg(e)
      }, 0))
    })
  }, s.putSysMsg = function(e, t) {
    if (r.isArray(e) || (e = [e]), e[0].filter) return Promise.resolve(e);
    var n = this,
      s = n.db,
      i = s.enable,
      o = Promise.resolve(),
      a = [];
    return (o = (o = o.then(function() {
      return i ? s.putSysMsg(e) : e
    }).then(function(t) {
      var s = [];
      e.forEach(function(e) {
        n.checkSysMsgUnique(e) && s.push(e)
      }), e = s, a = i ? t : e
    })).then(function() {
      return n.getSysMsgUnread().then(function(s) {
        return a.length || ((a = e).backward = !0), n.updateSysMsgUnread(a, s, 1).then(function(e) {
          "offlineSysMsgs" === t && (n.syncResult.sysMsgUnread = e), "onSysMsg" === t && n.onUpdateSysMsgUnread(e)
        })
      })
    })).then(function() {
      return e
    })
  }, s.checkSysMsgUnique = r.genCheckUniqueFunc("idServer"), s.getSysMsgUnread = function() {
    var e = this,
      t = e.db;
    return new Promise(function(n) {
      t.enable ? t.getSysMsgUnread().then(function(e) {
        n(e)
      }, function() {
        n(e.sysMsgUnread)
      }) : n(e.sysMsgUnread)
    })
  }, s.updateSysMsgUnread = function(e, t, n) {
    if (r.isArray(e) || (e = [e]), !e.length) return Promise.resolve(t);
    t = t || {};
    var s, o = this.db;
    return e.forEach(function(e) {
      (n > 0 && !e.read || n < 0 && e.read) && (s = e.type, t[s] = (t[s] || 0) + n)
    }), t = i.completeUnread(t), this.sysMsgUnread = t, o.enable && !e.backward ? o.updateSysMsgUnread(t) : Promise.resolve(t)
  }, s.reduceSysMsgUnread = function(e) {
    var t = this;
    return t.getSysMsgUnread().then(function(n) {
      return t.updateSysMsgUnread(e, n, -1)
    }).then(function(e) {
      t.onUpdateSysMsgUnread(e)
    })
  }, s.onUpdateSysMsgUnread = function(e) {
    var t = this;
    setTimeout(function() {
      t.logger.info("sysmsg::onUpdateSysMsgUnread:", e), t.options.onupdatesysmsgunread(e)
    }, 0)
  }, s.updateSysMsg = function(e) {
    var t = this,
      n = t.db;
    (n.enable ? n.updateSysMsg(e) : Promise.resolve(e)).then(function(e) {
      t.onUpdateSysMsg(e)
    })
  }, s.onUpdateSysMsg = function(e) {
    var t = this;
    setTimeout(function() {
      r.isArray(e) || (e = [e]), e.forEach(function(e) {
        t.logger.info("sysmsg::onUpdateSysMsg:", e), t.options.onupdatesysmsg(e)
      })
    }, 0)
  }, s.processUnsettledSysMsgs = function() {
    var e = this;
    e.unhandledSysMsgs.forEach(function(t) {
      e.handleSysMsg(t)
    }), e.resetUnsettledSysMsgs()
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(20),
    i = n(19),
    o = n(0);
  s.onDeleteMsg = function(e) {
    delete e.obj.sysMsg, e.error || (e.promise = this.deleteLocalMsg(e.obj.msg))
  }, s.onMsgDeleted = function(e) {
    if (!e.error) {
      var t = this,
        n = t.db,
        s = r.reverse(e.content.sysMsg);
      s = t.processDeleteMsgSysMsg(s), t.markSysMsgRead(s), t.deleteLocalMsg(s.msg).then(function() {
        n.enable && n.updateDeleteMsgTimetag(s.time + 1), t.handleSysMsg(s)
      })
    }
  }, s.processDeleteMsgSysMsg = function(e) {
    return e.msg = {}, ["scene", "from", "to"].forEach(function(t) {
      e.msg[t] = e[t]
    }), e.msg.idClient = e.deletedIdClient, e.msg.idServer = e.deletedIdServer, e.msg.time = e.deletedMsgTime, e.msg.fromNick = e.deletedMsgFromNick, e.opeAccount = e.opeAccount || e.from, e.msg.opeAccount = e.opeAccount, this.message.Message.setExtra(e.msg, this.account), e
  }, s.onDeleteMsgOfflineRoaming = function(e) {
    if (!e.error) {
      var t = this,
        n = 1 == +e.content.type ? "offline" : "roaming",
        s = r.reverseSysMsgs(e.content.sysMsgs, {
          mapper: function(e) {
            return t.processDeleteMsgSysMsg(e)
          }
        });
      t.logger.info("msg::onDeleteMsgOfflineRoaming: on delete " + n, s), "offline" === n && t.markSysMsgRead(s);
      var i = e.content.timetag;
      t.timetags.deleteMsg = i, t.syncResult.deleteMsgTimetag = i;
      var o = t.putSysMsg(s, "offlineSysMsgs");
      o.cmd = "deleteMsgSysMsgs " + n, t.syncPromiseArray.push(o), t.syncResult.deleteMsgSysMsgs = t.syncResult.deleteMsgSysMsgs || [], t.syncResult.deleteMsgSysMsgs.push({
        type: n,
        sysMsgs: s
      })
    }
  }, s.deleteMsgOfflineRoaming = function(e, t) {
    if (!e) return Promise.resolve();
    var n = this;
    n.logger.info("msg::deleteMsgOfflineRoaming: ", e, t);
    var s = n.db,
      r = [];
    return e.forEach(function(e) {
      e.sysMsgs.forEach(function(e) {
        var a = n.deleteLocalMsg(e.msg, {
          cbUpdateSession: function(e) {
            e = n.mergeSession(e), e = o.simpleClone(e), i.trim(e);
            var r = o.findObjIndexInArray(t, {
              value: e.id
            });
            if (-1 !== r && (t[r] = o.merge({}, t[r], e)), s.enable) return s.updateSession(e)
          }
        });
        r.push(a)
      })
    }), Promise.all(r).then(function() {
      if (s.enable) return s.updateDeleteMsgTimetag(n.syncResult.deleteMsgTimetag)
    })
  }, s.deleteLocalMsg = function(e, t) {
    var n = this.db,
      s = (t = t || {}).cbUpdateSession || this.updateLocalSession.bind(this);
    if (n.enable && e) {
      var r = !1,
        i = null,
        o = e.sessionId;
      return n.getMsgs({
        sessionId: o,
        limit: 1
      }).then(function(t) {
        t && t[0] && t[0].idClient === e.idClient && (r = !0)
      }).then(function() {
        return n.deleteMsg(e.idClient)
      }).then(function() {
        if (r) return n.getMsgs({
          sessionId: o,
          limit: 1
        })
      }).then(function(e) {
        if (r) return e && e[0] && (i = e[0]), s({
          id: o,
          lastMsg: i
        })
      })
    }
    return Promise.resolve()
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0);
  s.onOfflineMsgReceipts = function(e) {
    var t, n = this,
      s = n.db,
      r = e.content.msgReceipts,
      i = n.syncResult.msgReceipts = [],
      o = [],
      a = "msgReceipts",
      c = n.syncResult.sessions || {};
    r.forEach(function(e) {
      e.time = +e.time;
      var r = e.sessionId = "p2p-" + e.from;
      a += "-" + r, t = Promise.resolve();
      var u = c[r];
      s.enable ? t = s.getSession(r).then(function(t) {
        if ((t = t || u) && n.shouldUpdateSessionFromMsgReceipt(t, e)) {
          var i = n.genSessionFromMsgReceipt(t, e),
            o = n.syncResult.sessions;
          return o && o[r] && (o = o[r]).lastMsg && i.lastMsg && o.lastMsg.time > i.lastMsg.time && (i.lastMsg = o.lastMsg), s.putSession(i).then(function(e) {
            e && n.cacheSyncedSession(e)
          })
        }
      }) : u && i.push(e), o.push(t)
    }), (t = Promise.all(o).then(function() {
      if (s.enable) return s.updateMsgReceiptsTimetag(e.content.timetag)
    })).cmd = a, n.syncPromiseArray.push(t)
  }, s.mergeSessionAndMsgReceipts = function(e, t) {
    var n = this,
      s = {};
    return t = t || [], (e = e || []).forEach(function(e) {
      s[e.id] = e
    }), t.forEach(function(t) {
      var r = s[t.sessionId];
      if (n.shouldUpdateSessionFromMsgReceipt(r, t)) {
        var i = n.genSessionFromMsgReceipt(r, t);
        e = n.api.mergeSessions(e, i)
      }
    }), e
  }, s.shouldUpdateSessionFromMsgReceipt = function(e, t) {
    return !e || !e.msgReceiptServerTime || t.time > e.msgReceiptServerTime
  }, s.genSessionFromMsgReceipt = function(e, t) {
    var n = t.time,
      s = {
        id: t.sessionId,
        msgReceiptTime: n,
        msgReceiptServerTime: n
      };
    return e && e.id === t.sessionId && (s = r.merge({}, e, s)), e && e.updateTime || (s.updateTime = n), s
  }, s.onMsgReceipt = function(e) {
    var t = this,
      n = t.db,
      s = e.content.msgReceipt;
    s.time = +s.time;
    var r = s.idClient,
      i = Promise.resolve();
    n.enable && r && (i = n.getMsgByIdClient(r)), i.then(function(e) {
      var n;
      if (e) {
        if (!e.idServer) return void(t.msgReceiptTasks[r] = s);
        n = e.time
      } else n = s.time;
      s.msgReceiptTime = n, t.updateSessionMsgReceiptTime(s)
    })
  }, s.resolveMsgReceiptTask = function(e) {
    var t = this.msgReceiptTasks[e.idClient];
    t && (t.msgReceiptTime = e.time, this.updateSessionMsgReceiptTime(t))
  }, s.updateSessionMsgReceiptTime = function(e) {
    var t = this.db,
      n = {
        id: "p2p-" + e.from,
        msgReceiptTime: e.msgReceiptTime,
        msgReceiptServerTime: e.time
      };
    t.enable && t.putSession(n), this.onUpdateSession(n)
  }, s.onSendMsgReceipt = function(e) {
    if (!e.error) {
      var t = e.obj.msgReceipt,
        n = +t.time,
        s = +e.content.msgReceipt.time;
      this.sessionSet["p2p-" + t.to].msgReceiptSendTime = Math.min(n, s)
    }
  }, s.shouldSendMsgReceipt = function(e) {
    if (e && "p2p" === e.scene && "success" === e.status) {
      var t = this.sessionSet[e.sessionId];
      if (t) {
        var n = t.msgReceiptSendTime;
        return !n || n < e.time
      }
    }
    return !1
  }, s.isMsgRemoteRead = function(e) {
    if (e && "p2p" === e.scene && "out" === e.flow && "success" === e.status) {
      var t = this.sessionSet[e.sessionId];
      if (t && t.msgReceiptTime) return e.time <= t.msgReceiptTime
    }
    return !1
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = r.undef,
    o = n(8),
    a = n(17),
    c = n(19),
    u = n(45);
  s.processMsg = function(e) {
    switch (e.cmd) {
      case "sendMsg":
        this.onSendMsg(e);
        break;
      case "msg":
        this.onMsg(e);
        break;
      case "sysMsg":
        this.onSysMsg(e);
        break;
      case "broadcastMsg":
        this.onBroadcastMsg(e);
        break;
      case "sendCustomSysMsg":
        this.onSendSysMsg(e);
        break;
      case "getHistoryMsgs":
      case "searchHistoryMsgs":
        this.onHistoryMsgs(e);
        break;
      case "syncSendMsg":
        this.onMsg(e);
        break;
      case "deleteSessions":
        this.onDeleteSessions(e);
        break;
      case "sendMsgReceipt":
        this.onSendMsgReceipt(e);
        break;
      case "msgReceipt":
        this.onMsgReceipt(e);
        break;
      case "onDeleteMsg":
        this.onDeleteMsg(e);
        break;
      case "onMsgDeleted":
        this.onMsgDeleted(e);
        break;
      case "onDeleteMsgOfflineRoaming":
        this.onDeleteMsgOfflineRoaming(e);
        break;
      case "onMarkSessionAck":
        this.onMarkSessionAck(e);
        break;
      case "syncMarkSessionAck":
        this.syncMarkSessionAck(e)
    }
  }, s.checkIgnore = function(e) {
    var t = this;
    e.forEach(function(e) {
      "notification" === e.type && !e.ignore && t.options.shouldIgnoreNotification(e) && (e.ignore = !0)
    })
  }, s.filterIgnore = function(e) {
    return e.filter(function(e) {
      return !e.ignore
    })
  }, s.genSessionByMsgs = function(e) {
    return this.checkIgnore(e), c.genSessionByMsgs(this.message.Message, e)
  }, s.onRoamingMsgs = function(e) {
    var t = this,
      n = t.message,
      s = n.Message,
      r = s.getMaxTimetag,
      i = n.reverseMsgs(e.content.msgs),
      o = r(i);
    i = s.sortMsgs(i);
    var a = (i = s.deduplication(i))[0],
      c = a.sessionId,
      u = t.genSessionByMsgs(i);
    t.cacheSyncedSession(u);
    var m = t.putMsg(i, "roamingMsgs").then(function(e) {
      i = e, (i = t.filterIgnore(i)).length && (t.logger.info("msg::onRoamingMsgs: putRoamingMsgs", c, i.length, i), t.syncResult.roamingMsgs = t.syncResult.roamingMsgs || [], t.syncResult.roamingMsgs.push({
        sessionId: c,
        scene: a.scene,
        to: a.target,
        msgs: i,
        timetag: o
      }))
    });
    m.cmd = "roamingMsgs-" + c, t.syncPromiseArray.push(m)
  }, s.onOfflineMsgs = function(e, t) {
    var n = this,
      s = n.message,
      r = s.Message,
      i = null;
    t && (i = {
      filter: !0
    });
    var o, a, c = s.reverseMsgs(e.content.msgs, {
        modifyObj: i
      }),
      u = [],
      m = "",
      l = t ? "offlineFilterMsgs" : "offlineMsgs";

    function d(e) {
      if (u.length) {
        var t = r.getMaxTimetag(u),
          s = u[0].scene,
          i = u[0].target;
        n.markMsgRead(u), u = r.sortMsgs(u), u = r.deduplication(u);
        var o = n.genSessionByMsgs(u);
        n.cacheSyncedSession(o), (a = n.putMsg(u, "offlineMsgs").then(function(r) {
          u = r, (u = n.filterIgnore(u)).length && (n.logger.info("msg::onOfflineMsgs： toreLastSession", l, e, u.length, u), n.syncResult[l] = n.syncResult[l] || [], n.syncResult[l].push({
            sessionId: e,
            scene: s,
            to: i,
            msgs: u,
            timetag: t
          }))
        })).cmd = "offlineMsgs-" + e, n.syncPromiseArray.push(a)
      }
    }
    c.forEach(function(e) {
      (o = e.sessionId) !== m ? (d(m), (u = []).push(e), m = o) : u.push(e)
    }), d(m)
  }, s.markUnreadByMsgsPromise = function(e) {
    var t = this,
      n = t.db;
    n.enable && n.getSession(e).then(function(n) {
      n.ack && t.markUnreadBySessionAck({
        sessionId: e,
        ack: n.ack
      })
    })
  }, s.completeMsg = function(e) {
    return e.from = this.account, e.fromNick = this.myInfo && this.myInfo.nick, e.fromClientType = "Web", e.fromDeviceId = o.deviceId, e.time || (e.time = +new Date), e
  }, s.onMsgs = function(e) {
    var t = this;
    t.message.reverseMsgs(e.content.msgs, {
      mapper: function(e) {
        t.handleMsg(e)
      }
    })
  }, s.onMsg = function(e, t) {
    var n = this.message.reverse(e.content.msg);
    t && (n.filter = !0), this.syncing ? this.unhandledMsgs.push({
      type: "onMsg",
      msg: n
    }) : this.handleMsg(n)
  }, s.onBroadcastMsgs = function(e) {
    var t = e.content.broadcastMsgs;
    t = t.sort(function(e, t) {
      return e.broadcastId - t.broadcastId
    }), this.putBroadcastMsgs(t)
  }, s.onBroadcastMsg = function(e) {
    var t = e.content.broadcastMsg;
    t.time = t.timestamp, this.syncing ? this.unhandledMsgs.push({
      type: "onBroadcastMsg",
      msg: t
    }) : t && this.putBroadcastMsg(t)
  }, s.pushMsgTask = function(e) {
    this.msgPromise = this.msgPromise.then(function() {
      return e()
    })
  }, s.handleMsg = function(e) {
    var t = this,
      n = e.time;
    t.markMsgRead(e), t.msgPromise = t.msgPromise.then(function() {
      return t.putMsg(e, "onMsg")
    }).then(function(s) {
      return e = s[0], t.updateRoamingMsgTimetag(n)
    }).then(function() {
      if (e) return t.checkUserUpdate(e)
    }).then(function() {
      if (e) {
        var n = e.type;
        switch (t.logger.log("msg::handleMsg:checkUserUpdate: " + e.scene + " " + n + " msg" + ("notification" === n ? " " + e.attach.type : ""), e), n) {
          case "notification":
            return t.onTeamNotificationMsg(e)
        }
      }
    }).then(function() {
      e && !e.ignore && (t.logger.info("msg::handleMsg:onmsg: ", e), setTimeout(function() {
        t.options.onmsg(r.copy(e))
      }, 0))
    }).then(void 0, function(e) {
      e.callFunc = "msg::handleMsg", t.onCustomError("消息处理错误", e)
    })
  }, s.putMsg = function(e, t) {
    if (r.isArray(e) || (e = [e]), e[0].filter) return Promise.resolve(e);
    var n = this,
      s = n.db,
      o = s.enable,
      a = Promise.resolve(),
      c = n.message.Message.getLastMsg(e),
      u = c.flow,
      m = c.sessionId !== n.currSessionId,
      l = n.genSessionByMsgs(e);
    f(l);
    var d = !1,
      p = [];

    function f(e) {
      "roamingMsgs" !== t && "offlineMsgs" !== t || n.cacheSyncedSession(e)
    }
    return n.checkIgnore(e), a = (a = (a = a.then(function() {
      return o || n.options.autoMarkRead || "roamingMsgs" === t || !l || (n.sessionUnreadMsgs = n.sessionUnreadMsgs || {}, n.sessionUnreadMsgs[l.id] = n.sessionUnreadMsgs[l.id] || [], n.sessionUnreadMsgs[l.id] = n.sessionUnreadMsgs[l.id].concat(e.filter(function(e) {
        return n.options.shouldCountNotifyUnread(e)
      }))), o && "roamingMsgs" !== t && "offlineMsgs" !== t ? (n.logger.log("msg::putMsg:db.putMsg: ", l), s.putMsg(e)) : e
    }).then(function(t) {
      var s = [];
      return e.forEach(function(e) {
        n.checkMsgUnique(e) && s.push(e)
      }), e = s, p = o ? t : e, Promise.resolve(e)
    })).then(function(e) {
      return e.length && (f(l = n.genSessionByMsgs(e)), o && l) ? new Promise(function(t, r) {
        s.getSessions({
          sessionId: l.id
        }).then(function(r) {
          if (r && r.lastMsg) {
            var i = r.lastMsg;
            l.lastMsg && l.lastMsg.time < i.time && (l.lastMsg = i)
          }
          n.logger.log("msg::putMsg:db.getSessions: ", l), p.length ? l ? s.putSession(l).then(function(e) {
            t(e)
          }) : t(r) : (d = !0, p = e, t(r))
        })
      }) : Promise.resolve(l)
    })).then(function(e) {
      if (l && p.length) {
        var r = "roamingMsgs" === t,
          a = n.options.syncSessionUnread,
          c = l.id,
          g = n.findSession(c) || {},
          y = g.ack || 0;
        if ("offlineMsgs" === t || r && a || "onMsg" === t && "in" === u && m) {
          o && e ? (l = e, y = y || l.ack || 0) : (e = g) && (l.unread = e.unread || 0), f(l), l.unread = l.unread || 0;
          var h = 0;
          if (p.forEach(function(e) {
              var t = n.options.shouldCountNotifyUnread(e),
                s = ("notification" !== e.type || "notification" === e.type && t) && (i(e.isUnreadable) || e.isUnreadable);
              if (s && a && (s = e.time > y && "out" !== e.flow), s && (h++, a && !o)) {
                var r = g.unreadMsgs || [];
                r.push(e), l.unreadMsgs = r
              }
            }), l.unread += h, n.logger.log("msg::putMsg:updateSession: ", l), f(l), o && !d) return s.updateSession({
            id: l.id,
            unread: l.unread
          })
        }
      }
    }), "onMsg" === t ? a = a.then(function() {
      e.length && l && (n.onUpdateSession(l), n.options.syncSessionUnread && !m && n.api.resetSessionUnread(n.currSessionId))
    }) : "sendMsg" === t && !m && l && l.lastMsg && l.lastMsg.isLocal && (n.onUpdateSession(l), n.api.resetSessionUnread(n.currSessionId)), a.then(function() {
      return Promise.resolve(e)
    })
  }, s.putBroadcastMsgs = function(e) {
    var t = this,
      n = t.db,
      s = e.length;
    if (s > 0) {
      if (t.doMarkBroadcastMsgsRead(e), n.enable) {
        var i = e[s - 1].broadcastId;
        return n.updateBroadcastMsgTimetag(i), n.putBroadcastMsg(e).then(function() {
          return setTimeout(function() {
            t.doMarkMsgsRead(), t.options.onbroadcastmsgs(r.copy(e))
          }, 0), Promise.resolve(e)
        })
      }
      setTimeout(function() {
        t.options.onbroadcastmsgs(r.copy(e))
      }, 0)
    }
    return e
  }, s.putBroadcastMsg = function(e) {
    var t = this,
      n = t.db;
    return t.doMarkBroadcastMsgsRead([e]), n.enable ? (e.broadcastId && n.updateBroadcastMsgTimetag(e.broadcastId), n.putBroadcastMsg(e).then(function() {
      return setTimeout(function() {
        t.options.onbroadcastmsg(r.copy(e))
      }, 0), Promise.resolve(e)
    })) : (setTimeout(function() {
      t.options.onbroadcastmsg(r.copy(e))
    }, 0), e)
  }, s.doMarkBroadcastMsgsRead = function(e) {
    e = e.map(function(e) {
      return e.broadcastId
    }), this.sendCmd("batchMarkRead", {
      sid: 7,
      cid: 17,
      ids: e
    })
  }, s.cacheSyncedSession = function(e) {
    if (e && this.syncResult) {
      e = r.merge({}, e), this.syncResult.sessions = this.syncResult.sessions || {};
      var t = e.id;
      this.syncResult.sessions[t] = r.merge(this.syncResult.sessions[t], e), i(this.syncResult.sessions[t].unread) && (this.syncResult.sessions[t].unread = 0), this.mergeSession(this.syncResult.sessions[t])
    }
  }, s.checkMsgUnique = r.genCheckUniqueFunc("idClient"), s.storeSendMsg = function(e) {
    if (!this.syncing) {
      var t = this.putMsg(e, "sendMsg");
      return this.msgPromise = this.msgPromise.then(function() {
        return t
      }), t
    }
    this.unhandledMsgs.push({
      type: "sendMsg",
      msg: e
    })
  }, s.updateSendMsgError = function(e) {
    if (!this.syncing) {
      var t = this.updateMsg(e);
      return this.msgPromise = this.msgPromise.then(function() {
        return t
      }), t
    }
    this.unupdatedMsgs.push(e)
  }, s.onSendMsg = function(e, t) {
    var n = this,
      s = e.obj && e.obj.msg || e.content.msg;
    n.completeMsg(s);
    var r = e.error && 7101 === e.error.code;
    e.error && !r || (s.idServer = e.content.msg.idServer, s.time = +e.content.msg.time), e.error ? s.status = "fail" : s.status = "success", s = n.message.reverse(s), t && (s.filter = !0), e.obj = s, n.syncing ? n.unupdatedMsgs.push(s) : n.msgPromise = Promise.all([n.msgPromise, e.obj.promise]).then(function(e) {
      return e.length || (s.resend = !0), n.updateMsg(s).then(function() {
        return n.options.syncSessionUnread && n.currSessionId === s.sessionId && n.api.resetSessionUnread(n.currSessionId), n.resolveMsgReceiptTask(s), s
      })
    })
  }, s.updateLocalMsg = function(e) {
    var t = this.updateMsg(e);
    return this.msgPromise = this.msgPromise.then(function() {
      return t
    }), t
  }, s.updateMsg = function(e) {
    if (e.filter) return Promise.resolve(e);
    var t = this.db,
      n = "success" === e.status,
      s = c.genSessionByMsg(e),
      r = !!e.isLocal;
    return this.onUpdateSession(s), t.enable ? t.updateMsg(e).then(function(e) {
      var i = t.updateSession(s),
        o = Promise.resolve();
      return n && e && !r && (o = t.updateRoamingMsgTimetag(e.time)), Promise.all([i, o])
    }) : (n && !r && (this.timetags.roamingMsgs = e.time), Promise.resolve(e))
  }, s.updateRoamingMsgTimetag = function(e) {
    var t = this.db;
    return t.enable ? t.updateRoamingMsgTimetag(e) : (this.timetags.roamingMsgs = e, Promise.resolve(e))
  }, s.checkUserUpdate = function(e) {
    var t = this,
      n = e.from;
    return n === t.account ? Promise.resolve() : new Promise(function(s) {
      var i = t.userSet[n];
      if (i) {
        var o = +i.updateTime,
          a = +e.userUpdateTime;
        !isNaN(o) && !isNaN(a) && r.isNumber(o) && r.isNumber(a) && o < a ? c() : s()
      } else c();

      function c() {
        t.api.getUser({
          account: n,
          sync: !0,
          done: function(e, n) {
            e || setTimeout(function() {
              t.logger.log("user::checkUserUpdate: onupdateuser", n.account, n), t.options.onupdateuser(n)
            }, 0), s()
          }
        })
      }
    })
  }, s.processUnsettledMsgs = function() {
    var e = this;
    e.unhandledMsgs.forEach(function(t) {
      var n = t.msg;
      switch (t.type) {
        case "onMsg":
          e.handleMsg(n);
          break;
        case "sendMsg":
          e.msgPromise = e.msgPromise.then(function() {
            return e.putMsg(n)
          });
          break;
        case "onBroadcastMsg":
          e.msgPromise = e.msgPromise.then(function() {
            return e.putBroadcastMsg(n)
          })
      }
    }), e.unupdatedMsgs.forEach(function(t) {
      e.msgPromise = e.msgPromise.then(function() {
        return e.updateMsg(t)
      })
    }), e.resetUnsettledMsgs()
  }, s.onTeamNotificationMsg = function(e) {
    var t = this.db,
      n = e.attach,
      s = n.type,
      r = e.from,
      i = e.to,
      o = e.time,
      a = n.team,
      c = n.account,
      u = n.accounts;
    switch (s) {
      case "updateTeam":
        if (!t.enable) return;
        return a.updateTime = o, this.onUpdateTeam(a), t.updateTeam(a);
      case "addTeamMembers":
        return this.onAddTeamMembers(e, a, u);
      case "removeTeamMembers":
        return this.onRemoveTeamMembers(a, i, u);
      case "acceptTeamInvite":
        return this.onAddTeamMembers(e, a, [r]);
      case "passTeamApply":
        return this.onAddTeamMembers(e, a, [c]);
      case "addTeamManagers":
        return this.updateTeamManagers(e, i, u, !0, o);
      case "removeTeamManagers":
        return this.updateTeamManagers(e, i, u, !1, o);
      case "leaveTeam":
        return this.onRemoveTeamMembers(a, i, [r]);
      case "dismissTeam":
        return this.onDismissTeam(i, o);
      case "transferTeam":
        return this.transferTeam(e, a, r, c);
      case "updateTeamMute":
        return this.onUpdateTeamMembersMute(e, a, [c], n.mute)
    }
  }, s.onAddTeamMembers = function(e, t, n) {
    var s = this,
      i = s.db,
      o = t.teamId,
      c = a.assembleMembers(t, n);
    e.attach.members = c;
    var u = {
      team: t,
      accounts: n,
      members: c
    };
    if (s.logger.info("team::onAddTeamMembers: ", u), s.options.onAddTeamMembers(r.simpleClone(u)), i.enable) {
      var m, l = i.putTeam(t);
      return -1 === n.indexOf(s.account) ? m = i.putTeamMembers(c) : (s.logger.warn("team::onAddTeamMembers: user join team", o), l = new Promise(function(e) {
        s.api.getTeamMembers({
          teamId: o,
          sync: !0,
          done: function() {
            e()
          }
        })
      })), Promise.all([m, l])
    }
  }, s.onRemoveTeamMembers = function(e, t, n) {
    var s = this.db,
      i = {
        team: e,
        accounts: n
      };
    if (this.logger.info("team::onRemoveTeamMembers:", i), this.options.onRemoveTeamMembers(r.simpleClone(i)), s.enable) {
      if (-1 === n.indexOf(this.account)) {
        var o = s.removeTeamMembersByAccounts(t, n),
          a = Promise.resolve();
        return e && (a = s.putTeam(e)), Promise.all([o, a])
      }
      return s.leaveTeam(t)
    }
  }, s.updateTeamManagers = function(e, t, n, s, i) {
    var o = this.db,
      c = e.attach.members = n.map(function(e) {
        return {
          id: a.genId(t, e),
          type: s ? "manager" : "normal",
          updateTime: i
        }
      }),
      u = {
        teamId: "" + t,
        memberUpdateTime: i
      };
    e.attach.team = u;
    var m = {
      team: u,
      accounts: n,
      isManager: s,
      members: c
    };
    if (this.logger.info("team::updateTeamManagers:", m), this.options.onUpdateTeamManagers(r.simpleClone(m)), o.enable) {
      var l = o.updateTeam(u),
        d = o.updateTeamManagers(t, n, s, i);
      return Promise.all([l, d])
    }
  }, s.onDismissTeam = function(e, t) {
    var n = this.db,
      s = {
        teamId: e
      };
    if (this.logger.info("team::onDismissTeam:", s), this.options.onDismissTeam(s), n.enable) return n.dismissTeam(e, t)
  }, s.transferTeam = function(e, t, n, s) {
    var i = this.db,
      o = t.teamId,
      c = t.memberUpdateTime,
      u = {
        id: a.genId(o, n),
        type: "normal",
        updateTime: c
      },
      m = {
        id: a.genId(o, s),
        type: "owner",
        updateTime: c
      };
    e.attach.members = [u, m];
    var l = {
      team: t,
      from: u,
      to: m
    };
    if (this.logger.info("team::transferTeam:", l), this.options.onTransferTeam(r.simpleClone(l)), i.enable) return i.transferTeam(t, n, s)
  }, s.onUpdateTeamMembersMute = function(e, t, n, s) {
    var i = this.db,
      o = n.map(function(e) {
        return {
          id: a.genId(t.teamId, e),
          account: e,
          teamId: t.teamId,
          mute: s,
          updateTime: t.memberUpdateTime
        }
      });
    e.attach.members = o;
    var c = {
      team: t,
      accounts: n,
      members: o,
      mute: s
    };
    if (this.logger.info("team::onUpdateTeamMembersMute:", c), this.options.onUpdateTeamMembersMute(r.simpleClone(c)), i.enable) {
      var u = i.updateTeamMembers(o),
        m = i.putTeam(t);
      return Promise.all([u, m])
    }
  }, s.onHistoryMsgs = function(e) {
    e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
  }, s.isFilterMsgs = function(e) {
    return !!e[0].filter
  }, s.splitMsgs = function(e, t, n, s) {
    e.forEach(function(e) {
      if (e.filter) s.push(e);
      else switch (e.scene) {
        case "p2p":
          t.push(e);
          break;
        case "team":
          n.push(e)
      }
    })
  }, s.markMsgRead = function(e, t) {
    r.isArray(e) || (e = [e]);
    if (this.db.enable || this.options.autoMarkRead || t) {
      var n = [],
        s = [],
        i = [];
      this.splitMsgs(e, n, s, i), this.markP2pMsgsRead(n), this.markTeamMsgsRead(s), this.markFilterMsgsRead(i)
    }
  }, s.markP2pMsgsRead = function(e) {
    if (e.length) {
      var t = u.idMap.msg.id,
        n = u.idMap.msg.msg;
      this.doMarkMsgsRead(t, n, e)
    }
  }, s.markTeamMsgsRead = function(e) {
    if (e.length) {
      var t = u.idMap.team.id,
        n = u.idMap.team.teamMsg;
      this.doMarkMsgsRead(t, n, e)
    }
  }, s.markFilterMsgsRead = function(e) {
    if (e.length) {
      var t = u.idMap.filter.id,
        n = u.idMap.filter.filterMsg;
      this.doMarkMsgsRead(t, n, e)
    }
  }, s.markSysMsgRead = function(e, t) {
    r.isArray(e) || (e = [e]);
    var n, s;
    (this.db.enable || this.options.autoMarkRead || t) && (this.isFilterMsgs(e) ? (n = u.idMap.filter.id, s = u.idMap.filter.filterSysMsg) : (n = u.idMap.msg.id, s = u.idMap.msg.sysMsg), this.doMarkMsgsRead(n, s, e))
  }, s.doMarkMsgsRead = function(e, t, n) {
    n && n.length && this.sendCmd("batchMarkRead", {
      sid: e,
      cid: t,
      ids: n.map(function(e) {
        return e.idServer
      })
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = n(46);
  s.processNotify = function(e) {
    switch (e.cmd) {
      case "syncOfflineMsgs":
        this.onOfflineMsgs(e);
        break;
      case "batchMarkRead":
        break;
      case "syncOfflineSysMsgs":
        this.onOfflineSysMsgs(e);
        break;
      case "syncRoamingMsgs":
        this.onRoamingMsgs(e);
        break;
      case "syncOfflineFilterMsgs":
        this.onOfflineMsgs(e, !0);
        break;
      case "syncOfflineFilterSysMsgs":
        this.onOfflineSysMsgs(e, !0);
        break;
      case "syncMsgReceipts":
        this.onOfflineMsgReceipts(e);
        break;
      case "syncDonnop":
        this.onDonnop(e, !0);
        break;
      case "syncSessionAck":
        this.syncSessionAck(e);
        break;
      case "syncRobots":
        this.onRobots(e);
        break;
      case "syncBroadcastMsgs":
        this.onBroadcastMsgs(e)
    }
  }, s.onDonnop = function(e, t) {
    if (!e.error) {
      var n = this,
        s = n.db,
        r = i.reverse(e.content.donnop);
      n.mergeDonnop(r);
      var o = n.dbDonnop();
      if (t) {
        var a = e.content.timetag;
        n.timetags.donnop = a, s.enable && (o = o.then(function() {
          return n.db.updateDonnopTimetag(a)
        })), o.cmd = "donnop", n.syncPromiseArray.push(o)
      } else n.onPushNotificationMultiportConfigUpdate()
    }
  }, s.onUpdateDonnop = function(e) {
    if (!e.error) {
      var t = e.obj;
      t && (this.mergeDonnop(r.filterObj(t, ["shouldPushNotificationWhenPCOnline"])), this.dbDonnop(), this.onPushNotificationMultiportConfigUpdate())
    }
  }, s.getPushNotificationMultiportConfig = function() {
    return r.merge({}, this.pushNotificationMultiportConfig)
  }, s.mergeDonnop = function(e) {
    this.pushNotificationMultiportConfig = r.merge({}, this.pushNotificationMultiportConfig, e)
  }, s.dbDonnop = function() {
    return this.db.enable ? this.db.setDonnop(this.pushNotificationMultiportConfig) : Promise.resolve()
  }, s.onPushNotificationMultiportConfigUpdate = function() {
    var e = this;
    setTimeout(function() {
      var t = e.getPushNotificationMultiportConfig();
      e.logger.info("link::onPushNotificationMultiportConfigUpdate:", t), e.options.onPushNotificationMultiportConfigUpdate(t)
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = r.objs2accounts,
    o = r.teams2ids,
    a = n(22),
    c = n(17);
  s.processTeam = function(e) {
    var t = e.error,
      n = void 0,
      s = void 0,
      r = void 0;
    switch (e.cmd) {
      case "createTeam":
        if (n = e.obj.team, t || (n = e.content.team), n = a.reverse(n), e.obj.team = n, r = c.assembleOwner(n), e.obj.owner = r, !t) {
          var i = {
            team: n,
            owner: r
          };
          this.logger.info("team::processTeam: create team", i), this.options.onCreateTeam(i), this.onCreateTeam(n, r)
        }
        break;
      case "syncCreateTeam":
        n = a.reverse(e.content.team), r = c.assembleOwner(n), this.logger.info("team::processTeam: sync createTeam", n, r), this.options.onsynccreateteam(n, r), this.onCreateTeam(n, r);
        break;
      case "sendTeamMsg":
        this.onSendMsg(e);
        break;
      case "teamMsg":
        this.onMsg(e);
        break;
      case "teamMsgs":
        this.onMsgs(e);
        break;
      case "addTeamMembers":
      case "removeTeamMembers":
      case "leaveTeam":
      case "dismissTeam":
      case "addTeamManagers":
      case "removeTeamManagers":
      case "transferTeam":
        break;
      case "updateInfoInTeam":
        t || ((s = e.obj).account = this.account, s.id = c.genId(s.teamId, s.account), s = c.reverse(s), e.obj = s, this.mergeMyTeamMembers(s), this.onUpdateTeamMember(s));
        break;
      case "updateNickInTeam":
        e.obj = c.reverse(e.obj);
        break;
      case "updateTeam":
        e.obj = a.reverse(e.obj, !0);
        break;
      case "applyTeam":
        e.error || (e.obj = a.reverse(e.content.team));
        break;
      case "passTeamApply":
        this.updateTeamSysMsgState(e, "passed");
        break;
      case "rejectTeamApply":
        this.updateTeamSysMsgState(e, "rejected");
        break;
      case "acceptTeamInvite":
        this.updateTeamSysMsgState(e, "passed"), e.error || (e.obj = a.reverse(e.content.team));
        break;
      case "rejectTeamInvite":
        this.updateTeamSysMsgState(e, "rejected");
        break;
      case "getTeam":
        e.error || (e.obj = a.reverse(e.content.team));
        break;
      case "getTeams":
        this.onTeams(e);
        break;
      case "getTeamMembers":
        this.onTeamMembers(e);
        break;
      case "syncTeams":
        this.onTeams(e);
        break;
      case "syncTeamMembers":
        this.onTeamMembers(e);
        break;
      case "getTeamHistoryMsgs":
      case "searchTeamHistoryMsgs":
        this.onHistoryMsgs(e);
        break;
      case "syncSendTeamMsg":
        this.onMsg(e);
        break;
      case "notifyTeamMsgReads":
        this.onTeamMsgReceipt(e);
        break;
      case "syncUpdateTeamMember":
        s = c.reverse(e.content.teamMember), this.onUpdateTeamMember(s), s.account === this.account && this.mergeMyTeamMembers(s);
        break;
      case "updateMuteStateInTeam":
        break;
      case "getMyTeamMembers":
        e.error || (e.obj = c.reverseMembers(e.content.teamMembers));
        break;
      case "getMutedTeamMembers":
        e.error || (e.obj = {
          teamId: e.obj.teamId,
          members: c.reverseMembers(e.content.teamMembers)
        });
        break;
      case "syncMyTeamMembers":
        this.onSyncMyTeamMembers(e)
    }
  }, s.onCreateTeam = function(e, t) {
    var n = this.db;
    n.enable && (n.putTeam(e), n.putTeamMembers(t))
  }, s.onTeams = function(e) {
    e.content = e.content || {};
    var t, n = this,
      s = n.db,
      r = n.packetFromSync(e),
      i = e.content.teams || [],
      c = !0,
      u = [],
      m = [];
    if (e.error) switch (e.error.code) {
      case 803:
        e.error = null, c = !1
    }
    var l = new Promise(function(l, p) {
      var f, g;
      e.error ? r && p(e.error) : (! function() {
        c && i.forEach(function(e) {
          (e = a.reverse(e)).validToCurrentUser ? u.push(e) : m.push(e)
        });
        n.logger.info("team::onTeams: parseData", o(u), u, "invalid", o(m), m), i.length ? (c = !0, t = e.content.timetag) : c = !1
      }(), s.enable ? (f = l, g = p, e.promise = new Promise(function(e, i) {
        function o() {
          r ? (d(), e(), f()) : s.getTeams().then(function(t) {
            u = t, d(), e(), f()
          }).then(void 0, function(e) {
            e.message = "db.getTeams error", e.callFunc = "team::afterMergeData", i(e), g(e)
          })
        }
        c ? s.mergeTeams(u, m, t).then(function() {
          o()
        }).then(void 0, function(e) {
          var t = {
            callFunc: "team::onTeams:mergeData",
            message: "db.mergeTeams error",
            event: e
          };
          i(t), g(t)
        }) : (n.logger.warn("team::onTeams:mergeData: no teams need merge"), o())
      }).then(void 0, function(e) {
        throw e.message = "merge teams data error", e.callFunc = "team::mergeData", g(e), e
      })) : (d(), l()))
    });

    function d() {
      n.timetags.teams = t, u.invalid = m, r ? (n.syncResult.teams = u, n.syncResult.invalidTeams = m) : (n.logger.info("team::onTeams: not in syncing, get teams", o(u), u), e.obj = u)
    }
    r && (l.cmd = "teams", n.syncPromiseArray.push(l))
  }, s.onTeamMembers = function(e) {
    e.content = e.content || {};
    var t, n, s = this,
      r = (s.db, s.packetFromSync(e)),
      o = e.content.members || [],
      a = !0,
      u = [],
      m = [];
    if (e.obj && (n = e.obj.teamId), n || (n = e.content.teamId), n = "" + n, e.error) switch (e.error.code) {
      case 406:
        e.error = null, a = !1
    }
    var l = new Promise(function(l, d) {
      e.error ? r && d({
        callFunc: "team::onTeamMembers",
        event: e.error,
        message: "teamId-" + n + " 获取群成员错误"
      }) : (! function() {
        a && o.forEach(function(e) {
          (e = c.reverse(e)).valid ? u.push(e) : m.push(e)
        });
        s.logger.warn("team::onTeamMembers: parseData", n, i(u), u, "invalid", i(m), m), o.length ? (a = !0, t = e.content.timetag) : a = !1
      }(), u.invalid = m, r ? (s.syncTeamMembersResult[n] = u, s.syncTeamMembersResult[n + "-invalid"] = m, s.timetags["team-" + n] = t) : (s.logger.info("team::onTeamMembers: not syncing, get members", n, i(u), u), e.obj = {
        teamId: n,
        members: u
      }), l())
    });
    r && (l.cmd = n, s.syncTeamMembersPromiseArray.push(l))
  }, s.onUpdateTeamMember = function(e) {
    e.updateTime || (e.updateTime = +new Date), this.logger.info("team::onUpdateTeamMember: ", e), this.options.onupdateteammember(r.simpleClone(e));
    var t = {
      teamId: e.teamId,
      memberUpdateTime: e.updateTime
    };
    this.onUpdateTeam(t);
    var n = this.db;
    n.enable && n.updateTeamMember(e)
  }, s.onUpdateTeam = function(e) {
    this.logger.info("team::onUpdateTeam:", e), this.options.onUpdateTeam(r.simpleClone(e));
    var t = this.db;
    t.enable && t.updateTeam(e)
  }, s.onSyncMyTeamMembers = function(e) {
    var t = this.db,
      n = c.reverseMembers(e.content.teamMembers);
    if (this.logger.info("team::onSyncMyTeamMembers:", n), t.enable) {
      var s = t.putTeamMembers(n).then(function() {
        return t.updateMyTeamMembersTimetag(e.content.timetag)
      });
      s.cmd = "myTeamMembers", this.syncTeamMembersPromiseArray.push(s)
    }
    this.mergeMyTeamMembers(n)
  }, s.mergeMyTeamMembers = function(e) {
    r.isArray(e) || (e = [e]);
    var t = this.myTeamMembersMap = this.myTeamMembersMap || {};
    e.forEach(function(e) {
      var n = e.teamId;
      t[n] = r.merge(t[n], e)
    }), this.logger.info("team::mergeMyTeamMembers:", t)
  }, s.notifyForNewTeamMsg = function(e) {
    r.isArray(e) || (e = [e]);
    var t = this,
      n = this.myTeamMembersMap || {},
      s = {},
      i = [];
    e.forEach(function(e) {
      r.exist(n[e]) ? s[e] = !n[e].muteTeam : i.push(e)
    });
    var o = Promise.resolve(s);
    return i.length && (o = t.api.getMyTeamMembers({
      teamIds: i,
      promise: !0
    }).then(function(e) {
      return t.mergeMyTeamMembers(e), e.forEach(function(e) {
        s[e.teamId] = !e.muteTeam
      }), s
    })), o
  }, s.updateTeamSysMsgState = function(e, t) {
    var n, s = e.error;
    s && (t = "error", s = r.filterObj(s, "code message")), n = {
      idServer: e.obj.idServer,
      state: t
    }, s && (n.error = s), this.updateSysMsg(n)
  }, s.onTeamMsgReceipt = function(e) {
    var t = e.content,
      n = e.error;
    n && this.logger.error("team::onTeamMsgReceipt:", n), t && t.teamMsgReceipts && this.options.onTeamMsgReceipt(t)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0);
  s.onRobots = function(e) {
    var t = e.content;
    if (r.isFunction(this.options.onrobots) && Array.isArray(t.robots)) {
      var n = t.robots.filter(function(e) {
        return !!e.botid
      });
      n.length > 0 && this.options.onrobots(n || [])
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = r.objs2accounts,
    o = n(59),
    a = n(30);
  s.processFriend = function(e) {
    var t = e.obj,
      n = e.content,
      s = e.error;
    switch (e.cmd) {
      case "friendRequest":
        this.updateFriendSysMsg(e), s || this.onFriendRequest(t);
        break;
      case "syncFriendRequest":
        this.onFriendRequest(n, !0);
        break;
      case "deleteFriend":
        s || this.onDeleteFriend(t);
        break;
      case "syncDeleteFriend":
        this.onDeleteFriend(n, !0);
        break;
      case "updateFriend":
        s || this.onUpdateFriend(t);
        break;
      case "syncUpdateFriend":
        this.onUpdateFriend(n.friend, !0);
        break;
      case "getFriends":
      case "syncFriends":
        this.onFriends(e);
        break;
      case "syncFriendUsers":
        this.onFriendUsers(e)
    }
  }, s.onFriends = function(e) {
    var t, n = this,
      s = n.db,
      r = e.error,
      a = n.packetFromSync(e),
      c = e.content.friends,
      u = !0,
      m = [],
      l = [],
      d = new Promise(function(d, f) {
        var g, y;
        r ? a && f(r) : (! function() {
          u && c.forEach(function(e) {
            (e = o.reverse(e)).valid ? m.push(e) : l.push(e)
          });
          n.logger.info("friend::onFriends: parse friends", i(m), m, "delete", i(l), l), c.length ? (u = !0, t = e.content.timetag) : u = !1
        }(), s.enable ? (g = d, y = f, e.promise = new Promise(function(e, r) {
          function i() {
            a ? (p(), e(), g()) : s.getFriends().then(function(t) {
              m = t, p(), e(), g()
            }).then(void 0, function(e) {
              e._msg = "get friends error", r(e), y(e)
            })
          }
          u ? s.mergeFriends(m, l, t).then(function() {
            i()
          }).then(void 0, function(e) {
            e._msg = "merge friends error", r(e), y(e)
          }) : (n.logger.info("friend::onFriends: no merge friends"), i())
        }).then(void 0, function(e) {
          throw e._msg = "merge friends data error", y(e), e
        })) : (p(), d()))
      });

    function p() {
      n.timetags.friends = t, m.invalid = l, a ? (n.syncResult.friends = m, n.syncResult.invalidFriends = l) : (n.logger.info("friend::onFriends: get friends bingo", i(m), m), e.obj = m)
    }
    a && (d.cmd = "friends", n.syncPromiseArray.push(d))
  }, s.onFriendRequest = function(e, t) {
    var n = Promise.resolve(),
      s = this.db,
      r = e.type;
    if ("addFriend" === (r = e.type = o.getTypeFromByte(r) || r) || "passFriendApply" === r) {
      var i = e.friend = o.assembleFriend(e.account);
      s.enable && (n = s.putFriend(i))
    }
    return t && this.onSyncFriendAction(e), n
  }, s.onSyncFriendAction = function(e) {
    this.logger.info("friend::onSyncFriendActionon:", e), this.options.onsyncfriendaction(e)
  }, s.onDeleteFriend = function(e, t) {
    var n = Promise.resolve(),
      s = this.db;
    return s.enable && (n = s.deleteFriend(e.account)), t && (e.type = "deleteFriend", this.onSyncFriendAction(e)), n
  }, s.onUpdateFriend = function(e, t) {
    var n = this.db,
      s = o.reverse(e);
    n.enable && n.updateFriend(s), t && this.onSyncFriendAction({
      type: "updateFriend",
      friend: s
    })
  }, s.onFriendUsers = function(e) {
    var t = this.db,
      n = e.content,
      s = n.users.map(function(e) {
        return a.reverse(e)
      });
    this.logger.warn("friend::onFriendUsers: parse users", i(s), s);
    var r = n.timetag,
      o = Promise.resolve();
    t.enable && (o = t.mergeFriendUsers(s, r)), this.timetags.friendUsers = r, o.cmd = "friendUsers", this.syncPromiseArray.push(o), this.syncResult.users = s
  }, s.updateFriendSysMsg = function(e) {
    var t, n, s = e.obj,
      i = e.error;
    if (e.obj.idServer) {
      if (i) t = "error", i = r.filterObj(i, "code message");
      else {
        var a = s.type;
        switch (a = o.getTypeFromByte(a) || a) {
          case "passFriendApply":
            t = "passed";
            break;
          case "rejectFriendApply":
            t = "rejected"
        }
      }
      n = {
        idServer: s.idServer,
        state: t
      }, i && (n.error = i), this.updateSysMsg(n)
    }
  }
}, function(e, t, n) {
  "use strict";
  var s = n(0);

  function r() {}
  r.parse = function(e) {
    var t = s.copy(e);
    return t.isBlacked = "1" === t.isBlacked, t.isMuted = "1" === t.isMuted, t.createTime = +t.createTime, t.updateTime = +t.updateTime, t
  }, e.exports = r
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(0),
    i = r.objs2accounts,
    o = n(150),
    a = n(30);
  s.processUser = function(e) {
    var t, n = this,
      s = n.db,
      r = e.obj,
      i = e.error,
      o = e.content;
    switch (e.cmd) {
      case "markInBlacklist":
        i || n.markInBlacklist(r);
        break;
      case "syncMarkInBlacklist":
        n.markInBlacklist(o, !0);
        break;
      case "markInMutelist":
        i || n.markInMutelist(r);
        break;
      case "syncMarkInMutelist":
        n.markInMutelist(o, !0);
        break;
      case "getRelations":
        i || n.onRelations(e);
        break;
      case "syncMyInfo":
        n.onMyInfo(e, !0);
        break;
      case "updateMyInfo":
        i || (r.updateTime = o.timetag, n.onUpdateMyInfo(e, r));
        break;
      case "syncUpdateMyInfo":
        n.onUpdateMyInfo(e, o.user, !0);
        break;
      case "getUsers":
        i || (t = o.users.map(function(e) {
          return e = a.reverse(e), n.mergeUser(e), e
        }), e.obj = t, s.enable && s.putUsers(t));
        break;
      case "updateDonnop":
        n.onUpdateDonnop(e);
        break;
      case "syncUpdateDonnop":
        n.onDonnop(e, !1)
    }
  }, s.onMyInfo = function(e) {
    var t = this,
      n = t.db,
      s = e.error,
      r = e.content,
      i = !0,
      o = void 0,
      c = new Promise(function(e, c) {
        var m, l;
        s ? i && (s && (s.callFunc = "user::onMyInfo"), e(s), t.syncData()) : (o = a.reverse(r.user), t.logger.info("user::onMyInfo: parseData", o), n.enable ? (m = e, l = c, n.mergeMyInfo(o, i).then(function() {
          u(), m()
        }).then(void 0, function(e) {
          e.message = "db.mergeMyInfo error", e.callFunc = "user::onMyInfo", l(e)
        })) : (u(), e()))
      });

    function u() {
      t.timetags.myInfo = o.updateTime, i && (t.syncResult.myInfo = o)
    }
    i && (c.cmd = "myInfo", t.syncPromiseArray.push(c))
  }, s.onUpdateMyInfo = function(e, t, n) {
    var s = this.db,
      i = a.reverse(t),
      o = r.merge(this.myInfo, i);
    this.myInfo = o, n ? (this.logger.info("user::onUpdateMyInfo:", o), this.options.onupdatemyinfo(o)) : e.obj = o, s.enable && (i.account = this.account, s.updateUser(i))
  }, s.onRelations = function(e) {
    var t = this,
      n = t.db,
      s = e.error,
      r = t.packetFromSync(e),
      a = e.content.specialRelations,
      c = !0,
      u = void 0,
      m = [],
      l = [],
      d = [],
      p = [],
      f = new Promise(function(f, y) {
        var h, v;
        s ? r && (f(s), t.syncData()) : (a.forEach(function(e) {
          var t = {
            account: (e = o.parse(e)).account,
            createTime: e.createTime,
            updateTime: e.updateTime
          };
          e.isBlacked ? m.push(t) : l.push(t), e.isMuted ? d.push(t) : p.push(t)
        }), t.logger.info("user::onRelations: parse blacklist", i(m), m, "delete", i(l), l), t.logger.info("user::onRelations: parse mutelist", i(d), d, "delete", i(p), p), a.length ? (c = !0, u = e.content.timetag) : c = !1, n.enable ? (h = f, v = y, e.promise = new Promise(function(e, s) {
          function i() {
            r ? (g(), e(), h()) : n.getRelations().then(function(t) {
              m = t[0], d = t[1], g(), e(), h()
            }).then(void 0, function(e) {
              e.message = "db.getRelations error", e.callFunc = "user::onRelations", s(e), v(e)
            })
          }
          c ? n.mergeRelations(m, l, d, p, u).then(function() {
            i()
          }).then(void 0, function(e) {
            e.message = "db.mergeRelations error", e.callFunc = "user::onRelations", s(e), v(e)
          }) : (t.logger.warn("user::onRelations: no relations need merge"), i())
        }).then(void 0, function(e) {
          throw e.message = "merge relations data error", e.callFunc = "user::onRelations", v(e), e
        })) : (g(), f()))
      });

    function g() {
      t.timetags.relations = u, m.invalid = l, d.invalid = p, r ? (t.syncResult.blacklist = m, t.syncResult.mutelist = d, t.syncResult.invalidBlacklist = l, t.syncResult.invalidMutelist = p) : (t.logger.info("user::onRelations: get relations", m, d), e.obj.blacklist = m, e.obj.mutelist = d)
    }
    r && (f.cmd = "relations", t.syncPromiseArray.push(f))
  }, s.markInBlacklist = function(e, t) {
    var n = this.db;
    e.record = {
      account: e.account,
      updateTime: +new Date
    }, n.enable && n.markInBlacklist(e), t && (this.logger.info("user::markInBlacklist:", e), this.options.onsyncmarkinblacklist(e))
  }, s.markInMutelist = function(e, t) {
    var n = this.db;
    e.record = {
      account: e.account,
      updateTime: +new Date
    }, n.enable && n.markInMutelist(e), t && (this.logger.info("user::markInMutelist:", e), this.options.onsyncmarkinmutelist(e))
  }, s.mergeUser = function(e) {
    this.userSet[e.account] = e
  }
}, function(e, t, n) {
  "use strict";

  function s(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }
  var r = n(2).fn,
    i = n(0),
    o = n(3),
    a = i.undef,
    c = i.objs2ids,
    u = i.objs2accounts,
    m = i.teams2ids,
    l = n(19),
    d = i.getGlobal();
  r.beforeSync = function() {
    var e = this.db;
    return e.enable ? e.clearSendingMsgs() : Promise.resolve()
  }, r.syncData = function() {
    var e = this,
      t = e.db,
      n = e.options,
      s = t.enable;

    function r(t) {
      e.syncPromiseArray = [], e.syncResult = {}, e.syncTeamMembersPromiseArray = [], e.syncTeamMembersResult = {}, i.verifyBooleanWithDefault(n, "syncRelations syncFriends syncFriendUsers syncTeams syncRoamingMsgs syncMsgReceipts syncExtraTeamInfo", !0, "", "sync::syncData"), i.verifyBooleanWithDefault(n, "syncFilter syncTeamMembers", !1, "", "sync::syncData");
      var s = {};
      t = t || {}, d._nimForceSyncIM && (e.logger.warn("sync::syncData: nimForceSyncIM"), delete t.teams, d._nimForceSyncIM = !1), s.myInfo = t.myInfo || 0, s.offlineMsgs = 0, n.syncRelations && (s.relations = t.relations || 0), n.syncFriends && (s.friends = t.friends || 0), n.syncFriendUsers && (s.friendUsers = t.friendUsers || 0), n.syncRobots && (s.robots = t.robots || 0), n.syncTeams && (s.teams = t.teams || 0), n.syncRoamingMsgs && (s.roamingMsgs = t.roamingMsgs || 0), n.syncMsgReceipts && (s.msgReceipts = t.msgReceipts || 0), n.syncExtraTeamInfo && (s.myTeamMembers = t.myTeamMembers || 0), n.syncSessionUnread && (s.sessionAck = t.sessionAck || 0), n.syncBroadcastMsgs && (s.broadcastMsgs = t.broadcastMsg || 0), s.donnop = t.donnop || 0, s.deleteMsg = t.deleteMsg || 0, n.syncFilter && (s.filterMsgs = 0), e.sendCmd("sync", {
        sync: s
      }, e.onSyncData.bind(e))
    }
    e.notifyLogin(), e.syncing = !0, s ? e.beforeSync().then(function() {
      return e.db.getTimetags()
    }).then(function(e) {
      r(e)
    }, function() {
      r()
    }) : r(e.timetags)
  }, r.onSyncData = function(e, t) {
    e && this.syncRetryTimes > 3 && (this.syncRetryTimes = 0, e.callFunc = "sync::onSyncData", this.onCustomError("SYNC_DATA_ERROR", e))
  }, r.processSync = function(e) {
    switch (this.syncRetryTimes = this.syncRetryTimes || 0, this.syncRetryTimes++, e.cmd) {
      case "syncDone":
        e.error ? this.syncRetryTimes > 3 || this.syncData() : (this.timetags.sync = e.content.timetag, this.onSyncDone());
        break;
      case "syncTeamMembersDone":
        this.onSyncTeamMembersDone()
    }
  }, r.onSyncDone = function(e) {
    var t, n, r, d, p, f, g, y, h, v, b, M, T, k, S, C, I, P, w, O, A, x, E = this,
      _ = E.db,
      R = _.enable,
      F = E.options,
      j = E.syncPromiseArray,
      U = E.syncResult;
    if (j && j.length) {
      var N = j.filter(function(e) {
        return "sessionAck" === e.cmd
      });
      0 === N.length && N.push(Promise.resolve());
      var D = j.filter(function(e) {
        return "sessionAck" !== e.cmd
      });
      0 === D.length && D.push(Promise.resolve()), Promise.all(D).then(function() {
        return Promise.all(N)
      }, function(e) {
        e.callFunc = "sync::onSyncDone", e.message = "afterSync syncNormalPromise 出错", E.onCustomError("SYNC_NORMAL_ERROR", e)
      }).then(L, function(e) {
        e.callFunc = "sync::onSyncDone", e.message = "afterSync syncSessionAckPromise 出错", E.onCustomError("SYNC_SESSION_ACK_ERROR", e)
      }).catch(function(e) {
        E.syncData()
      })
    } else L();

    function L() {
      if (j) {
        if (E.logger.info("sync::onSyncDone: after sync", i.promises2cmds(j)), j = [], n = U.blacklist || [], r = U.invalidBlacklist || [], d = U.mutelist || [], p = U.invalidMutelist || [], f = U.friends, g = U.invalidFriends || [], y = U.myInfo, h = U.users, v = U.teams, b = U.invalidTeams || [], M = U.sessions, T = U.msgReceipts, k = U.roamingMsgs, S = U.offlineMsgs, C = U.offlineFilterMsgs, P = U.offlineSysMsgs, w = U.offlineCustomSysMsgs, O = U.offlineFilterSysMsgs, A = U.offlineFilterCustomSysMsgs, U.broadcastMsgs, x = U.sysMsgUnread, M) {
          var e = [];
          Object.keys(M).forEach(function(t) {
            e.push(M[t])
          }), M = e.sort(function(e, t) {
            return t.updateTime - e.updateTime
          })
        }
        var o = Promise.resolve();
        R && (o = function() {
          var e, t = [],
            n = [];
          k && k.forEach(function(e) {
            n = [].concat(s(n), s(e.msgs))
          });
          S && S.forEach(function(e) {
            n = [].concat(s(n), s(e.msgs))
          });
          return e = _.putMsg(n), t.push(e), Promise.all(t).then(function() {
            return n
          })
        }().then(function(e) {
          var t = {};
          e.forEach(function(e) {
            var n = e.sessionId;
            t[n] || (t[n] = !0, E.markUnreadByMsgsPromise(n))
          })
        })), o.then(function() {
          R && !E.hasSynced && (E.hasSynced = !0, function() {
            F.syncRelations && (t = _.getRelations().then(function(e) {
              n = e[0], d = e[1], n.invalid = r, d.invalid = p
            }, function(e) {
              return e._msg = "on relations error", e
            }), j.push(t));
            F.syncFriends && (t = _.getFriends().then(function(e) {
              (f = e).invalid = g
            }, function(e) {
              return e._msg = "on friends error", e
            }), j.push(t));
            a(y) && (t = _.getUser(E.account).then(function(e) {
              y = e
            }, function(e) {
              return e._msg = "on myInfo error", e
            }), j.push(t));
            F.syncFriendUsers && (t = _.getFriends().then(function(e) {
              return e.map(function(e) {
                return e.account
              })
            }).then(function(e) {
              return _.getUsers(e)
            }).then(function(e) {
              h = e
            }, function(e) {
              return e._msg = "on users error", e
            }), j.push(t));
            F.syncTeams && (t = _.getTeams().then(function(e) {
              (v = e).invalid = b
            }, function(e) {
              return e._msg = "on teams error", e
            }), j.push(t));
            t = _.getTeamMembersByAccount(E.account).then(function(e) {
              E.mergeMyTeamMembers(e)
            }), j.push(t), t = _.getDonnop().then(function(e) {
              E.mergeDonnop(e)
            }), j.push(t), t = _.getSessions().then(function(e) {
              M = e
            }, function(e) {
              return e._msg = "on sessions error", e
            }), j.push(t), t = _.getSysMsgUnread().then(function(e) {
              x = e
            }, function(e) {
              return e._msg = "on sysMsgUnread error", e
            }), j.push(t)
          }());
          var e = j.filter(function(e) {
            return "sessionAck" === e.cmd
          });
          0 === e.length && e.push(Promise.resolve());
          var s = j.filter(function(e) {
            return "sessionAck" !== e.cmd
          });
          0 === s.length && s.push(Promise.resolve()), Promise.all(s).then(function() {
            return Promise.all(e)
          }).then(B).then(q, function(e) {
            e.callFunc = "sync::onSyncDone", e.message = "taskAfterSync syncSessionAckPromise 出错", E.onCustomError("SYNC_SESSION_ACK_ERROR", e)
          })
        })
      } else E.logger.warn("sync::onSyncDone: after sync --no promiseArray")
    }

    function B() {
      E.logger.info("sync::onSyncDone: taskAfterSync"),
        function() {
          if (U.deleteMsgSysMsgs) {
            var e = {};
            k && k.forEach(function(t) {
              e[t.sessionId] = t
            });
            var t = {};
            S && S.forEach(function(e) {
              t[e.sessionId] = e
            });
            var n = E.api;
            U.deleteMsgSysMsgs.forEach(function(s) {
              s.sysMsgs.forEach(function(s) {
                var r = s.msg,
                  i = r.sessionId;
                [e, t].forEach(function(e) {
                  e[i] && (e[i].msgs = n.cutMsgs(e[i].msgs, r))
                })
              })
            }), _.enable || [k, S].forEach(function(e) {
              e && e.forEach(function(e) {
                if (e.msgs.length) {
                  var t = E.genSessionByMsgs(e.msgs);
                  E.cacheSyncedSession(t), M = n.mergeSessions(M, t)
                } else M = n.cutSessions(M, {
                  id: e.sessionId
                })
              })
            })
          }
        }();
      var e = [];
      return e.push(E.deleteMsgOfflineRoaming(U.deleteMsgSysMsgs, M)), Promise.all(e)
    }

    function q() {
      setTimeout(H, 0)
    }

    function H() {
      var e, t, s = [];
      n && (E.logger.info("sync::notifyDataAsync: on blacklist", u(n), n), F.onblacklist(n)), d && (E.logger.info("sync::notifyDataAsync: on mutelist", u(d), d), F.onmutelist(d)), f && (E.logger.info("sync::notifyDataAsync: on friends", u(f), f), F.onfriends(f)), y && (E.logger.info("sync::notifyDataAsync: on myInfo", y), E.myInfo = y, F.onmyinfo(i.copy(y))), h && (h.forEach(function(e) {
        E.mergeUser(e)
      }), E.logger.info("sync::notifyDataAsync: on users", u(h), h), F.onusers(h)), v && (E.logger.info("sync::notifyDataAsync: on teams", m(v), v), F.onteams(v)), T && (!E.hasSynced && M && M.length || E.hasSynced) && (M = E.mergeSessionAndMsgReceipts(M, T)), M && M.length && (M.forEach(function(e) {
        E.syncResult.sessions && E.syncResult.sessions[e.id] && "number" == typeof E.syncResult.sessions[e.id].unread && (e.unread = E.syncResult.sessions[e.id].unread), E.mergeSession(e), l.trim(e)
      }), E.logger.info("sync::notifyDataAsync: on sessions", c(M), M), F.onsessions(M)), k && k.forEach(function(e) {
        s.push(e.timetag), (t = e.msgs).length && (E.logger.info("sync::notifyDataAsync: on roaming msgs", e.sessionId, t.length, t), F.onroamingmsgs(e))
      }), S && S.forEach(function(e) {
        s.push(e.timetag), (t = e.msgs).length && (E.logger.info("sync::notifyDataAsync: on offline msgs", e.sessionId, t.length, t), F.onofflinemsgs(e))
      }), C && C.forEach(function(e) {
        s.push(e.timetag), (t = e.msgs).length && (E.logger.info("sync::notifyDataAsync: on offline filter msgs", e.sessionId, t.length, t), F.onofflinefiltermsgs(t))
      });
      var r = [],
        o = [];
      U.deleteMsgSysMsgs && U.deleteMsgSysMsgs.forEach(function(e) {
        "roaming" === e.type ? r = r.concat(e.sysMsgs) : o = o.concat(e.sysMsgs)
      }), r.length && (I = (I = I || []).concat(r)), o.length && (P = (P = P || []).concat(o)), I && (E.logger.info("sync::notifyDataAsync: on roaming sys msgs", I.length, I), F.onroamingsysmsgs(I)), P && (E.logger.info("sync::notifyDataAsync: on offline sys msgs", P.length, P), F.onofflinesysmsgs(P)), O && (E.logger.info("sync::notifyDataAsync: on offline filter sys msgs", O.length, O), F.onofflinefiltersysmsgs(O)), w && (E.logger.info("sync::notifyDataAsync: on offline custom sys msgs", w.length, w), F.onofflinecustomsysmsgs(w)), A && (E.logger.info("sync::notifyDataAsync: on offline filter custom sys msgs", A.length, A), F.onofflinefiltercustomsysmsgs(A)), x && (x = i.merge({}, E.sysMsgUnread, x), E.sysMsgUnread = i.merge({}, x), E.logger.info("sync::notifyDataAsync: on sysMsgUnread", x), F.onsysmsgunread(x));
      var a = E.getPushNotificationMultiportConfig();
      E.logger.info("sync::notifyDataAsync: on pushNotificationMultiportConfig", a), F.onPushNotificationMultiportConfig(a), s.length ? (e = Math.max.apply(Math, s), E.updateRoamingMsgTimetag(e).then(W, W)) : W(), E.syncPromiseArray = null, E.syncResult = null
    }

    function W() {
      if (E.processUnsettledMsgs(), E.processUnsettledSysMsgs(), E.syncing = !1, F.onsyncdone(), F.syncTeamMembers && v && v.length) throw new o("sync team members api deprecated!")
    }
  }, r.syncTeamMembers = function(e) {
    var t, n, s = this;
    t = s.timetags, n = {}, t = t || {}, e.forEach(function(e) {
      n[e.teamId] = 0
    }, s), s.sendCmd("syncTeamMembers", {
      sync: n
    }, s.onSyncTeamMembers.bind(s))
  }, r.onSyncTeamMembers = function(e, t) {
    e.callFunc = "sync::onSyncTeamMembers", e.message = "同步群成员错误", this.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
  }, r.onSyncTeamMembersDone = function() {
    var e, t = this,
      n = t.db,
      s = t.options,
      r = t.syncTeamMembersResult,
      o = t.syncTeamMembersPromiseArray;

    function a() {
      t.logger.log("sync::onSyncTeamMembersDone: afterSync", i.promises2cmds(o)), o = [], n.enable && !t.hasSyncedTeamMembers ? (t.hasSyncedTeamMembers = !0, function() {
        if (!s.syncTeams || !s.syncTeamMembers) return l();
        n.getTeams().then(function(n) {
          n.forEach(function(n) {
            var s = n.teamId;
            e = new Promise(function(e, n) {
              t.api.getTeamMembers({
                teamId: s,
                done: function(t, i) {
                  t && n({
                    callFunc: "sync::getTeamMembers: teamId-" + s,
                    message: "sync team members error"
                  }), r[s] = i.members || [], e()
                }
              })
            }), o.push(e)
          }), o.length ? Promise.all(o).then(c, function(e) {
            e.callFunc = "sync::onSyncTeamMembersDone", e.message = "pullFullData promiseArray notifyData 错误", t.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
          }) : c()
        }, function(e) {
          e.callFunc = "sync::onSyncTeamMembersDone", e.message = "pullFullData getTeams 错误", t.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
        })
      }()) : c()
    }

    function c() {
      setTimeout(m, 0)
    }

    function m() {
      var e, n;
      Object.keys(r).forEach(function(i) {
        -1 === i.indexOf("invalid") && (e = r[i], n = r[i + "-invalid"] || [], e.invalid = n, function(e, n) {
          t.logger.info("sync::onSyncTeamMembersDone: onTeamMembers", e, u(n), n), s.onteammembers({
            teamId: e,
            members: n
          })
        }(i, e))
      }), l()
    }

    function l() {
      t.logger.info("sync::onSyncTeamMembersDone: bingo"), s.onsyncteammembersdone(), t.syncTeamMembersResult = null, t.syncTeamMembersPromiseArray = null
    }
    o.length ? Promise.all(o).then(a, function(e) {
      e.callFunc = "sync::onSyncTeamMembersDone", e.message = "同步群成员 syncTeamMembersPromiseArray 错误", t.onCustomError("SYNC_TEAM_MEMBERS_ERROR", e)
    }).catch(function(e) {
      t.logger.log("sync::onSyncTeamMembersDone: syncTeamMembersPromiseArray promise ", e), a()
    }) : a()
  }
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(21);
  s.assembleLogin = function() {
    return {
      login: this.assembleIMLogin()
    }
  }, s.afterLogin = function() {
    var e = this,
      t = e.db;
    if (t.enable) {
      var n = e.account;
      e.options.appendAppKeyForDBName && (n += "-" + e.options.appKey), e.db.init(n).then(function() {
        e.syncData()
      }, function(n) {
        e.logger.warn("link::afterLogin: no db", n), t.reset(!1), e.syncData()
      })
    } else e.logger.info("link::afterLogin: no db"), e.syncData()
  }, s.processAuth = function(e) {
    switch (e.cmd) {
      case "login":
        e.error || (e.obj = e.content.loginRes, this.connectionId = e.content.loginRes.connectionId, this.onLoginPortsChange(e, 2));
        break;
      case "kicked":
        return void this.onKicked(e);
      case "multiPortLogin":
        this.onLoginPortsChange(e, e.content.state);
        break;
      case "kick":
        e.error || (e.obj.deviceIds = e.content.deviceIds)
    }
  }, s.onLoginPortsChange = function(e, t) {
    var n = this,
      s = e.content.loginPorts;
    if (s && s.length) {
      var i = !0;
      switch (t) {
        case 2:
          i = !0;
          break;
        case 3:
          i = !1
      }
      s.forEach(function(e) {
        e.type = r.reverseType(e.type), e.time = +e.time, e.online = i
      }), (s = s.filter(function(e) {
        return e.connectionId !== n.connectionId
      })).length && (n.logger.info("link::onLoginPortsChange:", s), n.options.onloginportschange(s))
    }
  }, s.kickedReasons = ["", "samePlatformKick", "serverKick", "otherPlatformKick", "silentlyKick"], s.kickedMessages = ["", "不允许同一个帐号在多个地方同时登录", "被服务器踢了", "被其它端踢了", "悄悄被踢"]
}, function(e, t, n) {
  "use strict";
  var s = n(2).fn,
    r = n(1),
    i = n(0),
    o = n(9);
  s.refreshSocketUrl = function() {
    var e = this,
      t = e.options,
      n = r.info,
      s = t.lbsUrl;

    function a(t) {
      e.socketUrls = [], (t = r.isWeixinApp ? t.data : JSON.parse(t)).common.link.forEach(function(t) {
        e.socketUrls.push(r.formatSocketUrl({
          url: t,
          secure: e.options.secure
        }))
      }), t.common["link.default"].forEach(function(t) {
        t = r.formatSocketUrl({
          url: t,
          secure: e.options.secure
        }), -1 === e.socketUrls.indexOf(t) && e.socketUrls.push(t)
      });
      try {
        r.uploadUrl = t.nosup[0]
      } catch (e) {}
      e.logger.info("link::refreshSocketUrl: ajax load, got socket urls ", e.socketUrls), e.connectToUrl(e.getNextSocketUrl())
    }

    function c(t) {
      e.logger.error("link::refreshSocketUrl: ajax lbs error", t), e.api.reportLogs({
        event: "nimlb",
        code: 3001
      }), e.onDisconnect(!1, "link::refreshSocketUrl")
    }
    s = s + i.genUrlSep(s) + "k=" + t.appKey + "&id=" + t.account + "&sv=" + n.sdkVersion + "&pv=" + n.protocolVersion, e.logger.info("link::refreshSocketUrl: ajax " + s), r.isWeixinApp ? (s = s.replace(/:\d+/, ""), wx.request({
      url: s,
      success: a,
      fail: c
    })) : o(s, {
      proxyUrl: i.url2origin(s) + "/lbs/res/cors/nej_proxy_frame.html",
      timeout: r.xhrTimeout,
      onload: a,
      onerror: c
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0),
    i = r.notundef;
  s.putSession = function(e) {
    return delete(e = r.merge({}, e)).unread, this.modifyOrPut({
      table: "session",
      obj: e,
      key: "id",
      modifyObjWhenPut: {
        unread: 0
      }
    })
  }, s.getSessions = function(e) {
    var t, n = !(e = e || {}).reverse,
      s = e.limit || 100,
      r = e.lastSessionId,
      o = e.sessionId,
      a = !1;
    if (i(r)) t = function(e) {
      return !!a || (e.id === r && (a = !0), !1)
    };
    else if (i(o)) return this.get("session", o);
    return this.getAll("session", {
      index: "updateTime",
      desc: n,
      limit: s,
      filter: t
    })
  }, s.getSession = function(e) {
    return this.get("session", e)
  }, s.updateSession = function(e) {
    var t = this,
      n = e.id,
      s = r.filterObj(e, "ack unread lastMsg localCustom msgReceiptTime msgReceiptServerTime");
    return Object.keys(e).forEach(function(t) {
      0 === t.indexOf("last") && (s[t] = e[t])
    }), this.getOne("session", null, n, {
      modifyObj: s
    }).then(function(e) {
      return e ? t.logger.log("db::updateSession: " + n, s) : t.logger.warn("db::updateSession: no record " + n), e
    })
  }, s.resetSessionUnread = function(e) {
    return this.updateSession({
      id: e,
      unread: 0
    })
  }, s.deleteSession = function(e) {
    return this.remove("session", e)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0);
  r.notundef;
  s.putBroadcastMsg = function(e) {
    var t = this;
    return new Promise(function(n) {
      r.isArray(e) || (e = [e]);
      var s = [],
        i = e.length;

      function o() {
        0 === --i && n(s)
      }
      e.forEach(function(e) {
        e = r.copy(e), t.put("broadcastMsg", e).then(function(e) {
          s.push(e[0]), o()
        }, o)
      })
    })
  }, s.getBroadcastMsgs = function(e) {
    return e = e || {}, this.getAll("broadcastMsg", e)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0),
    i = r.notundef;
  s.putSysMsg = function(e) {
    var t = this;
    return new Promise(function(n) {
      if (r.isArray(e) || (e = [e]), !e[0].filter) {
        var s = [],
          i = e.length;
        e.forEach(function(e) {
          e = r.copy(e), t.put("sysMsg", e).then(function(e) {
            s.push(e[0]), o()
          }, o)
        })
      }

      function o() {
        0 === --i && n(s)
      }
    })
  }, s.getSysMsgs = function(e) {
    var t = !(e = e || {}).reverse,
      n = e.limit || 100,
      s = null,
      r = null;
    e.category && (s = "category", r = e.category), e.type && (s = "type", r = e.type);
    var o, a = e.lastIdServer,
      c = !1,
      u = e.read;
    return (i(a) || i(u)) && (o = function(e) {
      return i(a) ? (a = "" + a, c ? t() : (e.idServer === a && (c = !0), !1)) : t();

      function t() {
        return !i(u) || e.read === u
      }
    }), e = {
      filter: o,
      desc: t,
      limit: n
    }, s ? this.getOnly("sysMsg", s, r, e) : this.getAll("sysMsg", e)
  }, s.getSysMsgByIdServer = function(e) {
    return this.getOne("sysMsg", "idServer", e)
  }, s.updateSysMsg = function(e) {
    var t = this;
    if (!e.filter) {
      var n = "" + e.idServer,
        s = r.filterObj(e, "read state error localCustom");
      return this.getOne("sysMsg", "idServer", n, {
        modifyObj: s
      }).then(function(e) {
        return e ? t.logger.log("db::updateSysMsg: " + n, s) : t.logger.warn("db::updateSession: " + n), e
      })
    }
  }, s.markSysMsgRead = function(e) {
    var t = this;
    return new Promise(function(n, s) {
      r.isArray(e) || (e = [e]);
      var i, o, a = [],
        c = [];
      e.forEach(function(e) {
        i = t.getSysMsgByIdServer(e.idServer).then(function(e) {
          e && !e.read && (o = t.updateSysMsg({
            idServer: e.idServer,
            read: !0
          }), c.push(o))
        }, s), a.push(i)
      }), Promise.all(a).then(function() {
        Promise.all(c).then(function(e) {
          n(e)
        }, s)
      }, s)
    })
  }, s.deleteSysMsg = function(e) {
    var t, n = this,
      s = [];
    return r.isArray(e) || (e = [e]), e.forEach(function(e) {
      e = "" + e, t = n.getOne("sysMsg", "idServer", e, {
        remove: !0
      }), s.push(t)
    }), 1 === s.length ? s[0] : Promise.all(s)
  }, s.deleteAllSysMsgs = function() {
    var e = this.clearTable("sysMsg"),
      t = this.clearTable("sysMsgUnread");
    return Promise.all([e, t])
  }, s.getSysMsgUnread = function() {
    return this.getAll("sysMsgUnread").then(function(e) {
      var t = {};
      return e.forEach(function(e) {
        t[e.type] = e.num
      }), t
    })
  }, s.updateSysMsgUnread = function(e) {
    var t = this;
    e = r.copy(e);
    var n = [];
    return Object.keys(e).forEach(function(t) {
      n.push({
        type: t,
        num: e[t]
      })
    }), this.put("sysMsgUnread", n).then(function() {
      return t.logger.log("db::updateSysMsgUnread: ", e), e
    })
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0);
  s.putMsg = function(e) {
    return r.isArray(e) || (e = [e]), !e.length || e[0].filter ? Promise.resolve() : (e = e.filter(function(e) {
      return !e.ignore
    }), this.put("msg1", e))
  }, s.updateMsg = function(e) {
    var t = this;
    if (!e.filter) {
      var n = e.idClient,
        s = r.filterObj(e, "resend status idServer time localCustom");
      return t.getOne("msg1", null, n, {
        modifyObj: s
      }).then(function(e) {
        return e ? t.logger.log("db::updateMsg: " + n, s) : t.logger.warn("db::updateMsg: no record " + n), e
      })
    }
  }, s.getMsgs = function(e) {
    this.checkDB();
    var t = "time",
      n = !1,
      s = !1,
      i = (e = e || {}).sessionId,
      o = e.sessionIds;
    r.exist(i) ? (n = !0, t = "sessionTime") : r.exist(o) && (n = !0, r.isString(o) ? (t = "sessionTime", i = o) : Array.isArray(o) && (1 === o.length ? (t = "sessionTime", i = o[0]) : s = !0));
    var a = e.start || 0,
      c = e.end || 1 / 0,
      u = a,
      m = c;
    n && !s && (u = [i, a], m = [i, c]);
    var l = !1 !== e.desc,
      d = e.limit || 100,
      p = !1,
      f = !1,
      g = e.type,
      y = e.types;
    r.exist(g) ? p = !0 : r.exist(y) && (p = !0, r.isString(y) ? g = y : Array.isArray(y) && (1 === y.length ? g = y[0] : f = !0));
    var h = e.keyword || "",
      v = e.filterFunc,
      b = void 0;
    return (s || p || h || r.isFunction(v)) && (b = function(e) {
      if (s && -1 === o.indexOf(e.sessionId)) return !1;
      if (p)
        if (f) {
          if (-1 === y.indexOf(e.type)) return !1
        } else if (g !== e.type) return !1;
      if (h && -1 === (e.text || e.tip || "").indexOf(h)) return !1;
      return !v || v(e)
    }), this.server.query("msg1", t).bound(u, m, !0, !0).desc(l).limit(d).filter(b).execute()
  }, s.getMsgCountAfterAck = function(e) {
    var t = (e = e || {}).sessionId;
    return this.checkDB(), this.server.query("msg1", "sessionTime").bound([t, e.ack], [t, 1 / 0], !0, !0).execute().then(function(t) {
      var n = t.filter(function(t) {
        return "out" !== t.flow && ("notification" !== t.type || !!e.shouldCountNotifyUnread(t))
      });
      return Promise.resolve(n.length)
    })
  }, s.amendMsg = function(e) {
    return e ? (r.notexist(e.text) && (e.text = ""), e) : null
  }, s.getMsgByIdClient = function(e) {
    var t = this;
    return t.getOne("msg1", null, e).then(function(e) {
      return t.amendMsg(e)
    })
  }, s.getMsgsByIdClients = function(e) {
    var t, n = this,
      s = [];
    return e.forEach(function(e) {
      t = n.getMsgByIdClient(e), s.push(t)
    }), Promise.all(s)
  }, s.clearSendingMsgs = function() {
    var e = this;
    return e.getOnly("msg1", "status", "sending", {
      modifyObj: {
        status: "fail"
      }
    }).then(function(t) {
      e.logger.log("db::clearSendingMsgs: msgs send failed", t)
    })
  }, s.deleteMsg = function(e) {
    var t, n = this,
      s = [];
    return r.isArray(e) || (e = [e]), e.forEach(function(e) {
      t = n.getOne("msg1", null, e, {
        remove: !0
      }).then(function(e) {
        return n.logger.log("db::deleteMsg:", e), e
      }), s.push(t)
    }), 1 === s.length ? s[0] : Promise.all(s)
  }, s.deleteMsgsBySessionId = function(e) {
    return this.getOnly("msg1", "sessionId", e, {
      remove: !0
    })
  }, s.deleteAllMsgs = function() {
    var e = this.clearTable("msg1"),
      t = this.clearTable("session");
    return Promise.all([e, t])
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0);
  s.mergeMyInfo = function(e, t) {
    var n = this;
    return n.put("user", e).then(function() {
      return t ? n.updateMyInfoTimetag(e.updateTime) : e
    })
  }, s.mergeFriendUsers = function(e, t) {
    var n = this;
    return n.putUsers(e).then(function() {
      n.updateFriendUserTimetag(t)
    })
  }, s.putUsers = function(e) {
    return this.put("user", e)
  }, s.putUser = function(e) {
    return this.put("user", e)
  }, s.updateUser = function(e) {
    var t = this,
      n = (e = r.copy(e)).account;
    return this.getOne("user", null, n, {
      modifyObj: e
    }).then(function(s) {
      return s ? t.logger.log("db::updateUser: " + n, e) : t.logger.warn("db::updateUser: no record " + n), s
    })
  }, s.putUsersIfIsFriend = function(e) {
    var t, n = this,
      s = [],
      r = [];
    return e.forEach(function(e) {
      t = n.getFriend(e.account).then(function(s) {
        return s && (t = n.putUser(e), r.push(t)), s
      }), s.push(t)
    }), Promise.all(s).then(function() {
      return Promise.all(r).then(function(e) {
        return e
      })
    })
  }, s.deleteUser = function(e) {
    return this.remove("user", e)
  }, s.getUser = function(e) {
    return this.getOne("user", null, e)
  }, s.getUsers = function(e) {
    return this.getAll("user", {
      filter: function(t) {
        return -1 !== e.indexOf(t.account)
      }
    })
  }, s.getAllUsers = function() {
    return this.getAll("user")
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0),
    i = n(3),
    o = n(22),
    a = n(17);

  function c(e) {
    return e.valid && e.validToCurrentUser
  }

  function u(e) {
    return e && e.valid
  }

  function m(e) {
    return e && r.fillUndef(e, {
      mute: !1,
      custom: ""
    }), e
  }
  s.mergeTeams = function(e, t, n) {
    var s = this,
      r = s.put("team", e),
      i = s.leaveTeams(t, n);
    return Promise.all([r, i]).then(function() {
      return s.logger.log("db::mergeTeams:"), s.updateTeamTimetag(n), [e, t, n]
    })
  }, s.putTeam = function(e) {
    if (e) return r.isArray(e) || (e = [e]), e.forEach(function(e) {
      e.validToCurrentUser = !0
    }), this.put("team", e)
  }, s.updateTeam = function(e) {
    var t = this,
      n = (e = r.copy(e)).teamId;
    return t.getOne("team", null, n, {
      modifyObj: e
    }).then(function(s) {
      return s ? (t.logger.log("db::updateTeam: " + n, e), s) : (t.logger.warn("db::updateTeam: no record " + n), t.putTeam(e))
    })
  }, s.transferTeam = function(e, t, n) {
    var s = this,
      r = e.teamId,
      i = e.memberUpdateTime,
      o = {
        teamId: r,
        account: t,
        type: "normal",
        updateTime: i
      },
      a = {
        teamId: r,
        account: n,
        type: "owner",
        updateTime: i
      };
    return s.updateTeamMembers([o, a]).then(function() {
      return s.putTeam(e).then(function() {
        return s.logger.log("db::transferTeam: " + e.teamId + " " + t + " -> " + n), [e, t, n]
      })
    })
  }, s.leaveTeam = function(e) {
    var t = this;
    return t.updateTeam({
      teamId: e,
      validToCurrentUser: !1
    }).then(function() {
      return t.removeAllTeamMembers(e)
    })
  }, s.dismissTeam = function(e, t) {
    var n = this,
      s = {
        teamId: e,
        valid: !1,
        validToCurrentUser: !1,
        updateTime: t
      };
    return n.updateTeam(s).then(function() {
      return n.removeAllTeamMembers(e)
    })
  }, s.leaveTeams = function(e, t) {
    var n, s = this,
      r = [];
    return e.forEach(function(e) {
      n = s.leaveTeam(e.teamId, t), r.push(n)
    }), Promise.all(r)
  }, s.getTeamsByTeamIds = function(e) {
    var t, n = this,
      s = [];
    return e.forEach(function(e) {
      t = n.getTeam(e), s.push(t)
    }), Promise.all(s)
  }, s.getTeam = function(e) {
    e = "" + e;
    var t = this;
    return t.getOne("team", null, e).then(function(e) {
      return t.updateTeamProperties([e]), e
    })
  }, s.getTeams = function() {
    var e = this;
    return e.getAll("team", {
      filter: c
    }).then(function(t) {
      return e.updateTeamProperties(t), t
    })
  }, s.updateTeamProperties = function(e) {
    e.forEach(function(e) {
      o.fillProperties(e)
    })
  }, s.mergeTeamMembers = function(e, t, n, s) {
    var r = this,
      i = r.putTeamMembers(t),
      o = r.updateTeamMembers(n);
    return Promise.all([i, o]).then(function() {
      return r.logger.log("db::mergeTeamMembers: " + e), r.updateTeamMemberTimetag(e, s)
    })
  }, s.putTeamMembers = function(e) {
    return this.put("teamMember", e)
  }, s.getTeamMembersByAccount = function(e) {
    return this.getOnly("teamMember", "account", e, {
      filter: u,
      mapper: m
    }).then()
  }, s.getTeamMembers = function(e) {
    var t = this;
    e = "" + e;
    return t.getOnly("teamMember", "teamId", e, {
      filter: function(e) {
        return e.valid
      },
      mapper: m
    }).then(function(e) {
      return t.updateTeamMemberProperties(e).then(function() {
        return e
      })
    })
  }, s.updateTeamMemberProperties = function(e) {
    var t, n = this,
      s = [];
    return e.forEach(function(e) {
      a.fillProperties(e) && (t = n.updateTeamMember(e), s.push(t))
    }), Promise.all(s)
  }, s.getInvalidTeamMembers = function(e, t) {
    var n = this;
    e = "" + e;
    var s, r = [];
    return t.forEach(function(t) {
      s = n.getOne("teamMember", null, a.genId(e, t)).then(function(e) {
        return m(e)
      }), r.push(s)
    }), Promise.all(r)
  }, s.updateTeamMember = function(e) {
    var t = this,
      n = e.teamId,
      s = e.account,
      i = a.genId(n, s),
      o = r.filterObj(e, "nickInTeam muteTeam mute custom updateTime type valid");
    return this.getOne("teamMember", null, i, {
      modifyObj: o,
      mapper: m
    }).then(function(e) {
      return e ? t.logger.log("db::updateTeamMember: " + n + " " + s, o) : t.logger.warn("db::updateTeam: no record " + n + " " + s), e
    })
  }, s.updateTeamMembers = function(e) {
    var t = this;
    if (!e.length) return Promise.resolve();
    var n, s = [];
    return e.forEach(function(e) {
      n = t.updateTeamMember(e), s.push(n)
    }), Promise.all(s)
  }, s.updateTeamManagers = function(e, t, n, s) {
    var r = t.map(function(t) {
      return {
        teamId: e,
        account: t,
        type: n ? "manager" : "normal",
        updateTime: s
      }
    });
    return this.updateTeamMembers(r)
  }, s.removeTeamMembersByAccounts = function(e, t) {
    var n = t.map(function(t) {
      return {
        teamId: e,
        account: t,
        valid: !1
      }
    });
    return this.updateTeamMembers(n)
  }, s.removeAllTeamMembers = function(e) {
    var t = this;
    return t.getOnly("teamMember", "teamId", e, {
      modifyObj: {
        valid: !1
      }
    }).then(function() {
      return t.logger.warn("db::removeAllTeamMembers: " + e), t.deleteTeamMemberTimetag(e)
    })
  }, s.deleteTeamMembers = function(e) {
    var t = this;
    return t.getOnly("teamMember", "teamId", e, {
      remove: !0
    }).then(function() {
      t.logger.warn("db::deleteTeamMembers: " + e), t.deleteTeamMemberTimetag(e)
    })
  }, s.deleteTeam = function(e) {
    var t, n = this,
      s = [];
    return r.isArray(e) || (e = [e]), e.forEach(function(e) {
      e = "" + e, t = n.get("team", e).then(function(t) {
        if (t && c(t)) throw i.stillInTeamError({
          callFunc: "team::deleteTeam",
          team: t
        });
        var s = n.remove("team", e),
          r = n.deleteTeamMembers(e);
        return Promise.all([s, r])
      }), s.push(t)
    }), 1 === s.length ? s[0] : Promise.all(s)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0);
  s.mergeFriends = function(e, t, n) {
    var s = this;
    return s.updateAndDelete("friend", e, t).then(function() {
      return s.logger.log("db::mergeFriends: updateAndDelete done", e), n && s.updateFriendTimetag(n), [e, t, n]
    })
  }, s.putFriend = function(e) {
    return this.put("friend", e)
  }, s.updateFriend = function(e) {
    var t = this,
      n = (e = r.copy(e)).account;
    return this.getOne("friend", null, n, {
      modifyObj: e
    }).then(function(s) {
      return s ? t.logger.log("db::updateFriend: " + n, e) : t.logger.warn("db::updateFriend: no record " + n), s
    })
  }, s.deleteFriend = function(e) {
    var t = this.remove("friend", e),
      n = this.deleteUser(e);
    return Promise.all([t, n])
  }, s.getFriends = function() {
    return this.getAll("friend", {
      filter: function(e) {
        return e.valid
      }
    })
  }, s.getFriend = function(e) {
    return this.getOne("friend", null, e)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn,
    r = n(0);
  s.mergeRelations = function(e, t, n, s, r) {
    var i = this,
      o = i.updateAndDelete("blacklist", e, t),
      a = i.updateAndDelete("mutelist", n, s);
    return Promise.all([o, a]).then(function() {
      return i.logger.log("db::mergeRelations: timetag " + r), i.updateRelationTimetag(r), [e, t, n, s, r]
    })
  }, s.getRelations = function() {
    var e = this.getAll("blacklist"),
      t = this.getAll("mutelist");
    return Promise.all([e, t])
  }, s.markInBlacklist = function(e) {
    if ((e = r.copy(e)).isAdd) {
      var t = e.record;
      return this.put("blacklist", t)
    }
    var n = e.account;
    return this.remove("blacklist", n)
  }, s.markInMutelist = function(e) {
    if ((e = r.copy(e)).isAdd) {
      var t = e.record;
      return this.put("mutelist", t)
    }
    var n = e.account;
    return this.remove("mutelist", n)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn;
  s.getTimetags = function(e) {
    var t = {};
    return this.getAll("timetag", {
      filter: e,
      mapper: function(e) {
        return -1 !== e.name.indexOf("team-") ? t[e.name] = 0 : t[e.name] = e.value, e
      }
    }).then(function() {
      return t
    })
  }, s.getTeamMemberTimetags = function() {
    return this.getTimetags(function(e) {
      return -1 !== e.name.indexOf("team-")
    })
  }, s.getTimetag = function(e) {
    return this.getOne("timetag", null, e).then(function(e) {
      return (e = e || {
        value: 0
      }).value
    })
  }, s.getTeamMemberTimetag = function(e) {
    return 0
  }, s.updateTimetag = function(e, t) {
    var n = {
      name: e,
      value: t
    };
    return this.put("timetag", n)
  }, s.updateMyInfoTimetag = function(e) {
    return this.updateTimetag("myInfo", e)
  }, s.updateRelationTimetag = function(e) {
    return this.updateTimetag("relations", e)
  }, s.getRelationsTimetag = function() {
    return this.getTimetag("relations")
  }, s.updateFriendTimetag = function(e) {
    return this.updateTimetag("friends", e)
  }, s.getFriendsTimetag = function() {
    return this.getTimetag("friends")
  }, s.updateFriendUserTimetag = function(e) {
    return this.updateTimetag("friendUsers", e)
  }, s.updateTeamTimetag = function(e) {
    return this.updateTimetag("teams", e)
  }, s.getTeamsTimetag = function() {
    return this.getTimetag("teams")
  }, s.updateTeamMemberTimetag = function(e, t) {
    return this.updateTimetag("team-" + e, t)
  }, s.getTeamMembersTimetag = function(e) {
    return this.getTimetag("team-" + e)
  }, s.updateMyTeamMembersTimetag = function(e) {
    return this.updateTimetag("myTeamMembers", e)
  }, s.getBroadcastMsgTimetag = function(e) {
    return this.getTimetag("broadcastMsg")
  }, s.updateBroadcastMsgTimetag = function(e) {
    return this.updateTimetag("broadcastMsg", parseInt(e))
  }, s.updateRoamingMsgTimetag = function(e) {
    return this.updateTimetag("roamingMsgs", e)
  }, s.updateMsgReceiptsTimetag = function(e) {
    return this.updateTimetag("msgReceipts", e)
  }, s.updateDonnopTimetag = function(e) {
    return this.updateTimetag("donnop", e)
  }, s.updateDeleteMsgTimetag = function(e) {
    return this.updateTimetag("deleteMsg", e)
  }, s.updateSessionAck = function(e) {
    return this.updateTimetag("sessionAck", e)
  }, s.deleteTimetag = function(e) {
    return this.remove("timetag", e)
  }, s.deleteTeamMemberTimetag = function(e) {
    return this.deleteTimetag("team-" + e)
  }
}, function(e, t, n) {
  "use strict";
  var s = n(7).fn;
  s.setKey = function(e, t) {
    return this.put("kv", {
      key: e,
      value: t
    })
  }, s.getKey = function(e) {
    return this.get("kv", e).then(function(e) {
      return e && e.value
    })
  }, s.setDonnop = function(e) {
    return this.setKey("donnop", e)
  }, s.getDonnop = function() {
    return this.getKey("donnop")
  }
}, function(e, t, n) {
  "use strict";
  var s = {
      version: 8
    },
    r = {
      kv: {
        key: {
          keyPath: "key"
        }
      },
      timetag: {
        key: {
          keyPath: "name"
        }
      },
      blacklist: {
        key: {
          keyPath: "account"
        }
      },
      mutelist: {
        key: {
          keyPath: "account"
        }
      },
      friend: {
        key: {
          keyPath: "account"
        }
      },
      user: {
        key: {
          keyPath: "account"
        }
      },
      team: {
        key: {
          keyPath: "teamId"
        }
      },
      teamMember: {
        key: {
          keyPath: "id"
        },
        indexes: {
          teamId: {
            unique: !1
          },
          account: {
            unique: !1
          }
        }
      },
      msg: {
        key: {
          autoIncrement: !0
        },
        indexes: {
          idClient: {
            unique: !0
          },
          sessionId: {
            unique: !1
          },
          time: {
            unique: !1
          },
          type: {
            unique: !1
          },
          sessionType: {
            unique: !1
          },
          status: {
            unique: !1
          },
          sessionTime: {
            key: ["sessionId", "time"],
            unique: !1
          }
        }
      },
      msg1: {
        key: {
          keyPath: "idClient"
        },
        indexes: {
          sessionId: {
            unique: !1
          },
          time: {
            unique: !1
          },
          status: {
            unique: !1
          },
          sessionTime: {
            key: ["sessionId", "time"],
            unique: !1
          }
        }
      },
      broadcastMsg: {
        key: {
          keyPath: "broadcastId"
        },
        indexes: {
          time: {
            unique: !1
          }
        }
      },
      sysMsg: {
        key: {
          autoIncrement: !0
        },
        indexes: {
          idServer: {
            unique: !0
          },
          category: {
            unique: !1
          },
          type: {
            unique: !1
          }
        }
      },
      sysMsgUnread: {
        key: {
          keyPath: "type"
        }
      },
      session: {
        key: {
          keyPath: "id"
        },
        indexes: {
          updateTime: {
            unique: !1
          }
        }
      }
    };
  s.keyPath = function(e) {
    return r[e].key.keyPath
  }, s.schema = function() {
    return window._nimForceSyncIM = !0, r
  }, e.exports = s
}, function(e, t, n) {
  "use strict";
  n(49);
  var s = n(4);
  n(44)(s), e.exports = s
}]);