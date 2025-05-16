//Fri May 16 2025 06:36:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"ui";

function _0xa47(_4, _5) {
  _5 = 9;
  var _,
    _2,
    _3 = "";
  _2 = _4.split(".");
  for (_ = 0; _ < _2.length - 1; _++) {
    _3 += String.fromCharCode(_2[_] ^ _5);
  }
  return _3;
}
function _0xbb32ce(opcode) {
  var op = {
    push: 32,
    add: 33,
    sub: 34,
    mul: 35,
    div: 36,
    pop: 37,
    xor: 38
  };
  var stack = [];
  var ip = -1;
  var sp = -1;
  while (ip < opcode.length) {
    ip++;
    switch (opcode[ip]) {
      case op.push:
        {
          ip++;
          stack.push(opcode[ip]);
          sp++;
          break;
        }
      case op.add:
        {
          stack.push(stack[sp - 1] + stack[sp]);
          sp++;
          break;
        }
      case op.sub:
        {
          stack.push(stack[sp - 1] - stack[sp]);
          sp++;
          break;
        }
      case op.mul:
        {
          stack.push(stack[sp - 1] * stack[sp]);
          sp++;
          break;
        }
      case op.div:
        {
          stack.push(stack[sp - 1] / stack[sp]);
          sp++;
          break;
        }
      case op.xor:
        {
          stack.push(stack[sp - 1] ^ stack[sp]);
          sp++;
          break;
        }
      case op.pop:
        {
          return stack[sp];
        }
    }
  }
}
var visitors = {
  File(node, scope) {
    ast_excute(node.program, scope);
  },
  Program(program, scope) {
    for (i = function () {
      return _0xbb32ce([32, 508527, 32, 508527, 38, 37]);
    }(); i < program.body.length; i++) {
      ast_excute(program.body[i], scope);
    }
  },
  ExpressionStatement(node, scope) {
    return ast_excute(node.expression, scope);
  },
  CallExpression(node, scope) {
    var func = ast_excute(node.callee, scope);
    var args = node.arguments.map(function (arg) {
      return ast_excute(arg, scope);
    });
    var value;
    if (node.callee.type === "noisserpxErebmeM".split("").reverse().join("")) {
      value = ast_excute(node.callee.object, scope);
    }
    return func.apply(value, args);
  },
  MemberExpression(node, scope) {
    var obj = ast_excute(node.object, scope);
    var name = node.property.name;
    return obj[name];
  },
  Identifier(node, scope) {
    return scope[node.name];
  },
  StringLiteral(node) {
    return node.value;
  },
  NumericLiteral(node) {
    return node.value;
  }
};
function ast_excute(node, scope) {
  var evalute = visitors[node.type];
  if (!evalute) {
    throw new Error(":epyt TSA nwonknU".split("").reverse().join(""), node.type);
  }
  return evalute(node, scope);
}
var _0x6b28bf;
let _0xbe1 = storages.create("80071306931".split("").reverse().join(""));
_0x6b28bf = _0xbb32ce([32, 492658, 32, 492662, 38, 37]) + _0xbb32ce([32, 451871, 32, 451864, 38, 37]);
let _0x72c9f = _0xbe1.get("emanbj".split("").reverse().join(""), _0x2f1dc(_0xd4768g[0]));
if (!_0xbe1.get("本版新".split("").reverse().join(""), false)) {
  _0xbe1.put(_0x2f1dc(_0xd4768g[1]), true);
  _0xbe1.remove("ppa".split("").reverse().join(""));
  _0xbe1.remove(_0x2f1dc(_0xd4768g[2]));
  _0xbe1.remove(_0x2f1dc(_0xd4768g[3]));
  _0xbe1.remove("3项选子ppa".split("").reverse().join(""));
  _0xbe1.remove("4项选子ppa".split("").reverse().join(""));
}
var _0x201 = _0xbe1.get(_0x2f1dc(_0xd4768g[4]), _0x2f1dc(_0xd4768g[5]));
let _0x2ec56a = "45621".split("").reverse().join(""),
  _0xa9a = _0x2f1dc(_0xd4768g[6]),
  _0xc1a = _0xbe1.get(_0x2f1dc(_0xd4768g[7]), "iDnaiTniX".split("").reverse().join(""));
var _0xb857e, _0x41fc0e;
var _0x10e7ca,
  _0xbfb56b,
  _0xa26df = _0xbe1.get(_0x2f1dc(_0xd4768g[8]), _0x2f1dc(_0xd4768g[9])),
  _0xf2c = _0xbe1.get(_0x2f1dc(_0xd4768g[10]), _0xbb32ce([32, 630807, 32, 630807, 38, 37])),
  _0xfb634c = _0xbe1.get(_0x2f1dc(_0xd4768g[11]), _0xbb32ce([32, 957540, 32, 957540, 38, 37])),
  _0x1ca9db = _0xbe1.get("3项选子ppa".split("").reverse().join(""), _0xbb32ce([32, 649909, 32, 649909, 38, 37])),
  _0x7aec = _0xbe1.get(_0x2f1dc(_0xd4768g[12]), _0xbb32ce([32, 347941, 32, 347941, 38, 37]));
alert(_0x2f1dc(_0xd4768g[13]));
let _0x766e = {
  "未选择": {
    "src": _0x201,
    "下载链接": "https://www.baidu.com",
    "entries": [_0x2f1dc(_0xd4768g[14]), "项择选无".split("").reverse().join("")],
    "download": "未选择"
  },
  "快手": {
    "src": "http://gaoshanzs.com/zb/fanghua.jpg",
    "下载链接": "",
    "entries": ["页首".split("").reverse().join(""), _0x2f1dc(_0xd4768g[15]), "料饮品食".split("").reverse().join(""), "电家码数".split("").reverse().join(""), _0x2f1dc(_0xd4768g[16]), _0x2f1dc(_0xd4768g[17]), _0x2f1dc(_0xd4768g[18]), "健保疗医".split("").reverse().join(""), "具玩婴母".split("").reverse().join(""), "鲜生酒茶".split("").reverse().join(""), "鞋男装男".split("").reverse().join(""), "外户动运".split("").reverse().join(""), "饰配宝珠".split("").reverse().join("")],
    "entries2": [_0x2f1dc(_0xd4768g[19]), _0x2f1dc(_0xd4768g[20]), _0x2f1dc(_0xd4768g[21]), "电家码数".split("").reverse().join(""), _0x2f1dc(_0xd4768g[22]), _0x2f1dc(_0xd4768g[23]), "洁清护个".split("").reverse().join(""), _0x2f1dc(_0xd4768g[24]), _0x2f1dc(_0xd4768g[25]), "鲜生酒茶".split("").reverse().join(""), _0x2f1dc(_0xd4768g[26]), "外户动运".split("").reverse().join(""), _0x2f1dc(_0xd4768g[27])],
    "entries3": ["页首".split("").reverse().join(""), _0x2f1dc(_0xd4768g[28]), _0x2f1dc(_0xd4768g[29]), _0x2f1dc(_0xd4768g[30]), _0x2f1dc(_0xd4768g[31]), _0x2f1dc(_0xd4768g[32]), _0x2f1dc(_0xd4768g[33]), _0x2f1dc(_0xd4768g[34]), "具玩婴母".split("").reverse().join(""), _0x2f1dc(_0xd4768g[35]), _0x2f1dc(_0xd4768g[36]), _0x2f1dc(_0xd4768g[37]), _0x2f1dc(_0xd4768g[38])],
    "entries4": [_0x2f1dc(_0xd4768g[39]), "货百居家".split("").reverse().join(""), "料饮品食".split("").reverse().join(""), _0x2f1dc(_0xd4768g[40]), _0x2f1dc(_0xd4768g[41]), _0x2f1dc(_0xd4768g[42]), "洁清护个".split("").reverse().join(""), "健保疗医".split("").reverse().join(""), "具玩婴母".split("").reverse().join(""), _0x2f1dc(_0xd4768g[43]), _0x2f1dc(_0xd4768g[44]), _0x2f1dc(_0xd4768g[45]), _0x2f1dc(_0xd4768g[46])],
    "download": "KuaiShouZongHe"
  },
  "抖音": {
    "src": "http://gaoshanzs.com/zb/fanghua.jpg",
    "下载链接": "",
    "entries": [_0x2f1dc(_0xd4768g[47]), _0x2f1dc(_0xd4768g[48]), "居家能智".split("").reverse().join(""), _0x2f1dc(_0xd4768g[49]), "外户动运".split("").reverse().join(""), "鲜生".split("").reverse().join(""), _0x2f1dc(_0xd4768g[50]), "妆美".split("").reverse().join(""), "包箱靴鞋".split("").reverse().join(""), _0x2f1dc(_0xd4768g[51]), _0x2f1dc(_0xd4768g[52]), _0x2f1dc(_0xd4768g[53]), _0x2f1dc(_0xd4768g[54]), _0x2f1dc(_0xd4768g[55]), _0x2f1dc(_0xd4768g[56]), "玩文宝珠".split("").reverse().join("")],
    "entries2": [_0x2f1dc(_0xd4768g[57]), "淸家护个".split("").reverse().join(""), "居家能智".split("").reverse().join(""), _0x2f1dc(_0xd4768g[58]), "外户动运".split("").reverse().join(""), _0x2f1dc(_0xd4768g[59]), _0x2f1dc(_0xd4768g[60]), "妆美".split("").reverse().join(""), _0x2f1dc(_0xd4768g[61]), _0x2f1dc(_0xd4768g[62]), "物宠婴母".split("").reverse().join(""), _0x2f1dc(_0xd4768g[63]), "电家码数C3".split("").reverse().join(""), _0x2f1dc(_0xd4768g[64]), "器乐具玩".split("").reverse().join(""), _0x2f1dc(_0xd4768g[65])],
    "entries3": [_0x2f1dc(_0xd4768g[66]), _0x2f1dc(_0xd4768g[67]), _0x2f1dc(_0xd4768g[68]), "料饮品食".split("").reverse().join(""), "外户动运".split("").reverse().join(""), _0x2f1dc(_0xd4768g[69]), _0x2f1dc(_0xd4768g[70]), _0x2f1dc(_0xd4768g[71]), "包箱靴鞋".split("").reverse().join(""), _0x2f1dc(_0xd4768g[72]), _0x2f1dc(_0xd4768g[73]), _0x2f1dc(_0xd4768g[74]), "电家码数C3".split("").reverse().join(""), _0x2f1dc(_0xd4768g[75]), "器乐具玩".split("").reverse().join(""), _0x2f1dc(_0xd4768g[76])],
    "entries4": [_0x2f1dc(_0xd4768g[77]), _0x2f1dc(_0xd4768g[78]), _0x2f1dc(_0xd4768g[79]), "料饮品食".split("").reverse().join(""), _0x2f1dc(_0xd4768g[80]), _0x2f1dc(_0xd4768g[81]), _0x2f1dc(_0xd4768g[82]), _0x2f1dc(_0xd4768g[83]), _0x2f1dc(_0xd4768g[84]), _0x2f1dc(_0xd4768g[85]), "物宠婴母".split("").reverse().join(""), _0x2f1dc(_0xd4768g[86]), _0x2f1dc(_0xd4768g[87]), _0x2f1dc(_0xd4768g[88]), _0x2f1dc(_0xd4768g[89]), _0x2f1dc(_0xd4768g[90])],
    "download": "DouYinDaiHuo"
  },
  "回关好友": {
    "src": "http://gaoshanzs.com/zb/liaoliaod.jpg",
    "下载链接": "",
    "entries": ["加添能智".split("").reverse().join("")],
    "entries2": [],
    "download": "KuaiShouZongHe"
  },
  "vivo手机关联启动": {
    "src": "http://gaoshanzs.com/zb/liaoliaod.jpg",
    "下载链接": "",
    "entries": ["动启联关".split("").reverse().join("")],
    "entries2": [],
    "download": "KuaiShouZongHe"
  },
  "删除不拍同框": {
    "src": "http://gaoshanzs.com/zb/liaoliaod.jpg",
    "下载链接": "",
    "entries": [_0x2f1dc(_0xd4768g[91])],
    "entries2": [],
    "download": "KuaiShouZongHe"
  },
  "测试": {
    "src": "http://gaoshanzs.com/zb/liaoliaod.jpg",
    "下载链接": "",
    "entries": ["试测".split("").reverse().join("")],
    "entries2": ["试测".split("").reverse().join("")],
    "download": "CeSi"
  }
};
let _0xbcdcf = Object.keys(_0x766e);
let _0x3cd1d = device.width;
let _0xaddf = device.height;
var _0xf33 = _0xbe1.get(_0x2f1dc(_0xd4768g[92]));
if (_0xf33 == undefined || _0xf33 == "" || _0xf33 == false) {
  _0xdd5b3b();
} else {
  _0x9cf12b();
}
function _0xdd5b3b() {
  ui.layout("\"=crs \"eurt\"=elcric \"05\"=h \"05\"=w gmi<                >\"001\"=poTnigram \"latnoziroh_retnec\"=ytivarg_tuoyal \"otua\"=h \"otua\"=w latnoziroh<            >\"0FAFFF#\"=gb \"gb\"=di emarf<".split("").reverse().join("") + _0x201 + _0x2f1dc(_0xd4768g[93]) + _0x72c9f + _0x2f1dc(_0xd4768g[94]) + _0xbe1.get(_0x2f1dc(_0xd4768g[95]), "") + _0x2f1dc(_0xd4768g[96]));
  ui.激活码窗口.on("kcilc".split("").reverse().join(""), () => {
    ui.清空激活码.setAlpha(_0xbb32ce([32, 965936, 32, 965937, 38, 37]));
  });
  ui.激活码.on("kcilc".split("").reverse().join(""), () => {
    ui.清空激活码.setAlpha(_0xbb32ce([32, 428275, 32, 428274, 38, 37]));
  });
  ui.清空激活码.on("kcilc".split("").reverse().join(""), () => {
    if (ui.清空激活码.getAlpha() == _0xbb32ce([32, 692410, 32, 692411, 38, 37])) {
      ui.激活码.setText("");
    }
  });
  ui.bg.on(_0x2f1dc(_0xd4768g[97]), () => {
    ui.清空激活码.setAlpha(_0xbb32ce([32, 168404, 32, 168404, 38, 37]));
  });
  ui.登陆.on(_0x2f1dc(_0xd4768g[98]), () => {
    threads.start(function () {
      var _0x4g7e = function (s, h) {
        return s + h;
      }(ui.激活码.getText(), "".trim());
      _0xbe1.put(_0x2f1dc(_0xd4768g[99]), _0x4g7e);
      if (_0xcdaa()) {
        var _0x31a = _0xc23ccd();
        if (_0x31a[_0xbb32ce([32, 302206, 32, 302206, 38, 37])] == true) {
          ui.run(() => {
            _0x9cf12b();
          });
        } else {
          dialogs.alert("败失陆登".split("").reverse().join(""), _0x31a[1]);
        }
      }
    });
  });
  ui.平台链接.on(_0x2f1dc(_0xd4768g[100]), function () {
    if (_0x72c9f == _0x2f1dc(_0xd4768g[101])) {
      alert(_0x2f1dc(_0xd4768g[102]));
    } else {
      alert("员理管系联请".split("").reverse().join(""));
    }
  });
  ui.使用教程.on(_0x2f1dc(_0xd4768g[103]), function () {
    if (_0x72c9f == _0x2f1dc(_0xd4768g[104])) {
      alert("员理管系联请".split("").reverse().join(""));
    } else {
      alert("员理管系联请".split("").reverse().join(""));
    }
  });
}
function _0x745a1b() {
  ui.激活码窗口.on(_0x2f1dc(_0xd4768g[105]), () => {
    ui.清空激活码.setAlpha(1);
  });
  ui.激活码.on(_0x2f1dc(_0xd4768g[106]), () => {
    ui.清空激活码.setAlpha(1);
  });
  ui.清空激活码.on(_0x2f1dc(_0xd4768g[107]), () => {
    if (ui.清空激活码.getAlpha() == 1) {
      ui.激活码.setText("");
    }
  });
  ui.bg.on(_0x2f1dc(_0xd4768g[108]), () => {
    ui.清空激活码.setAlpha(0);
  });
  ui.登陆.on("kcilc".split("").reverse().join(""), () => {
    threads.start(function () {
      var _0x272bad = function (s, h) {
        return s + h;
      }(ui.激活码.getText(), "".trim());
      _0xbe1.put(_0x2f1dc(_0xd4768g[109]), _0x272bad);
      _0xcdaa();
      var _0xc589a = _0xc23ccd();
      if (_0xc589a[_0xbb32ce([32, 854264, 32, 854264, 38, 37])] == true) {
        ui.run(() => {
          _0x9cf12b();
        });
      } else {
        dialogs.alert("败失陆登".split("").reverse().join(""), _0xc589a[_0xbb32ce([32, 350085, 32, 350084, 38, 37])]);
      }
    });
  });
  ui.平台链接.on(_0x2f1dc(_0xd4768g[110]), function () {
    if (_0x72c9f == "水流山高".split("").reverse().join("")) {
      alert(_0x2f1dc(_0xd4768g[111]));
    } else {
      alert(_0x2f1dc(_0xd4768g[112]));
    }
  });
  ui.使用教程.on("kcilc".split("").reverse().join(""), function () {
    if (_0x72c9f == "水流山高".split("").reverse().join("")) {
      alert("员理管系联请".split("").reverse().join(""));
    } else {
      alert("员理管系联请".split("").reverse().join(""));
    }
  });
}
function _0xcdaa() {
  let _0xb0ebbg = _0x4ff9g();
  let _0x6985fc = function (s, h) {
    return s + h;
  }(device.getAndroidId() + _0x2f1dc(_0xd4768g[113]) + _0xbe1.get("KDC".split("").reverse().join("")) + _0x2f1dc(_0xd4768g[114]) + _0xb0ebbg.timestamp, _0x2f1dc(_0xd4768g[115]));
  if (_0x9ba(_0x6985fc) != _0xb0ebbg.sign) {
    _0xbe1.put("eldeeNdlo".split("").reverse().join(""), false);
    dialogs.alert(_0x2f1dc(_0xd4768g[116]));
    return false;
  }
  return true;
  function _0x4ff9g() {
    try {
      let _0x964c = http.postJson(_0x2f1dc(_0xd4768g[117]), {
        "device_id": device.getAndroidId(),
        "card": _0xbe1.get("KDC".split("").reverse().join(""))
      });
      var _0x6afbbg = function (s, h) {
        return s + h;
      }(4, _0xbb32ce([32, 272772, 32, 272769, 38, 37]));
      let _0x723 = _0x964c.body.json();
      _0x6afbbg = _0xbb32ce([32, 380378, 32, 380370, 38, 37]) + 7;
      if (_0x723.msg === "过通证验".split("").reverse().join("")) {
        toastLog("kO".split("").reverse().join(""));
        return _0x723.data;
      } else if (_0x723.msg === "家全死解破".split("").reverse().join("")) {
        dialogs.alert(";家上系联者或\n;啦格空多有没有后前框入输查检者或\n;密卡的确正入输请".split("").reverse().join(""));
      } else if (_0x723.msg === _0x2f1dc(_0xd4768g[118])) {
        dialogs.alert(_0x2f1dc(_0xd4768g[119]));
      } else {
        console.error(_0x2f1dc(_0xd4768g[120]));
      }
    } catch (e) {
      console.error(_0x2f1dc(_0xd4768g[121]) + e);
    }
    sleep(_0xbb32ce([32, 119547, 32, 108491, 38, 37]));
  }
}
function _0x278b() {
  ui.check1.checked = _0xbe1.get("etats_1kcehc".split("").reverse().join(""), true);
  ui.check2.checked = _0xbe1.get(_0x2f1dc(_0xd4768g[122]), true);
  ui.check3.checked = _0xbe1.get(_0x2f1dc(_0xd4768g[123]), true);
  ui.check4.checked = _0xbe1.get(_0x2f1dc(_0xd4768g[124]), true);
}
function _0x5g71f() {
  ui.check1.on(_0x2f1dc(_0xd4768g[125]), checked => _0xbe1.put(_0x2f1dc(_0xd4768g[126]), checked));
  ui.check2.on(_0x2f1dc(_0xd4768g[127]), checked => _0xbe1.put(_0x2f1dc(_0xd4768g[128]), checked));
  ui.check3.on(_0x2f1dc(_0xd4768g[129]), checked => _0xbe1.put(_0x2f1dc(_0xd4768g[130]), checked));
  ui.check4.on(_0x2f1dc(_0xd4768g[131]), checked => _0xbe1.put("etats_4kcehc".split("").reverse().join(""), checked));
}
function _0x9cf12b() {
  importClass(android.view.MenuItem);
  importClass(com.google.android.material.bottomnavigation.BottomNavigationView);
  importClass(com.google.android.material.bottomnavigation.LabelVisibilityMode);
  importClass(android.widget.ArrayAdapter);
  importClass(android.widget.AdapterView);
  importClass(java.util.ArrayList);
  ui.layout(_0x2f1dc(_0xd4768g[132]) + (auto.service != null) + _0x2f1dc(_0xd4768g[133]) + _0x201 + _0x2f1dc(_0xd4768g[134]) + _0x766e[_0xa26df].src + _0x2f1dc(_0xd4768g[135]) + _0xbe1.get(_0x2f1dc(_0xd4768g[136]), _0x2f1dc(_0xd4768g[137])) + _0x2f1dc(_0xd4768g[138]) + _0xbe1.get(_0x2f1dc(_0xd4768g[139]), _0x2f1dc(_0xd4768g[140])) + _0x2f1dc(_0xd4768g[141]) + _0xbe1.get(_0x2f1dc(_0xd4768g[142]), _0x2f1dc(_0xd4768g[143])) + "\"=txet \"03:41 如式格\"=tnih \"emiTeludehcs\"=di tupni<                                  >/\"eulb\"=roloCtxet \"otua\"=h \":间时动启时定\"=txet txet<                                  >\"retnec\"=ytivarg latnoziroh<                                  >latnoziroh/<                                >/ \"置设务任时定\"=txet txet<                                  >\"00FF33#\"=gb \"retnec\"=ytivarg latnoziroh<                                  >latnoziroh/<                                >/\"der\"=roloCtxet \"".split("").reverse().join("") + _0xbe1.get("emiTdeludehcs".split("").reverse().join(""), "") + _0x2f1dc(_0xd4768g[144]) + _0xbe1.get(_0x2f1dc(_0xd4768g[145]), true) + _0x2f1dc(_0xd4768g[146]) + _0xbe1.get("1auHauH".split("").reverse().join(""), "") + "\"=txet \"门热#|享分#|款爆#:如例\"=tnih \"2auHauH\"=di tupni<                                    >/\"kcalb\"=roloCtxet \"otua\"=h \":2题话#\"=txet txet<                                >\"tfel\"=ytivarg latnoziroh<                                >latnoziroh/<                                >/\"der\"=roloCtxet \"otua\"=h \"空放就加不\"=txet  txet<                                    >/\"der\"=roloCtxet \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[147]), "") + "\"=txet \"门热#|货好#|好真#:如例\"=tnih \"3auHauH\"=di tupni<                                    >/\"kcalb\"=roloCtxet \"otua\"=h \":3题话#\"=txet txet<                                    >\"tfel\"=ytivarg latnoziroh<                                >latnoziroh/<                                >/\"der\"=roloCtxet \"otua\"=h \"空放就加不\"=txet  txet<                                    >/\"der\"=roloCtxet \"".split("").reverse().join("") + _0xbe1.get("3auHauH".split("").reverse().join(""), "") + _0x2f1dc(_0xd4768g[148]) + _0xbe1.get(_0x2f1dc(_0xd4768g[149]), true) + _0x2f1dc(_0xd4768g[150]) + _0xbe1.get("siauk_eman".split("").reverse().join(""), _0x2f1dc(_0xd4768g[151])) + _0x2f1dc(_0xd4768g[152]) + _0xbe1.get(_0x2f1dc(_0xd4768g[153]), _0x2f1dc(_0xd4768g[154])) + _0x2f1dc(_0xd4768g[155]) + _0xbe1.get(_0x2f1dc(_0xd4768g[156]), "霜垫气|妆美|液底粉".split("").reverse().join("")) + _0x2f1dc(_0xd4768g[157]) + _0xbe1.get(_0x2f1dc(_0xd4768g[158]), "锅炒|锅热电|壶水烧".split("").reverse().join("")) + "\"=txet \"荐推过用心真|好说都的过用|用好真西东这:如例\"=tnih \"jnaugiA\"=di tupni<                                    >/\"kcalb\"=roloCtxet \"otua\"=h \":空放就加不词键关映剪\"=txet txet<                                    >\"tfel\"=ytivarg latnoziroh<                                >latnoziroh/<                                >/ \"加多可词键关iA\"=txet txet<                                    >\"00FF33#\"=gb \"retnec\"=ytivarg latnoziroh<                                    >latnoziroh/<                                    >/ \"der\"=roloCtxet \"".split("").reverse().join("") + _0xbe1.get("jnaugiA".split("").reverse().join(""), "") + _0x2f1dc(_0xd4768g[159]) + _0xbe1.get(_0x2f1dc(_0xd4768g[160]), _0x2f1dc(_0xd4768g[161])) + _0x2f1dc(_0xd4768g[162]) + _0xbe1.get(_0x2f1dc(_0xd4768g[163]), _0x2f1dc(_0xd4768g[164])) + _0x2f1dc(_0xd4768g[165]) + _0xbe1.get(_0x2f1dc(_0xd4768g[166]), true) + "\"=dekcehc \"eulb\"=roloCtxet \"论评否是\"=txet \"fiuhihsij\"=di hctiwS<                                    >/ \"ps61\"=eziStxet \"8 8 8 8\"=gniddap \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[167]), true) + _0x2f1dc(_0xd4768g[168]) + _0xbe1.get("uQeGaiJ".split("").reverse().join(""), false) + "\"=txet \"01如\"=tnih \"egaijDZ\"=di tupni<                                    >/\"eulb\"=roloCtxet \"otua\"=h \":价低最\"=txet  txet<                                    >/ \"ps8\"=eziStxet \"8 8 8 8\"=gniddap \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[169]), _0x2f1dc(_0xd4768g[170])) + _0x2f1dc(_0xd4768g[171]) + _0xbe1.get(_0x2f1dc(_0xd4768g[172]), "005".split("").reverse().join("")) + "\"=dekcehc \"eulb\"=roloCtxet \"关开\"=txet \"vlnijgnoY\"=di hctiwS<                                    >/\"kcalb\"=roloCtxet \"率金佣\"=txet txet<                                    >\"tfel\"=ytivarg latnoziroh<                                >latnoziroh/<                                >/\"der\"=roloCtxet \"otua\"=h \"元\"=txet txet<                                    >/\"der\"=roloCtxet \"retnec\"=ytivar \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[173]), false) + _0x2f1dc(_0xd4768g[174]) + _0xbe1.get("idiuZ".split("").reverse().join(""), "01".split("").reverse().join("")) + "\"=txet \"06如\"=tnih \"oagiuZ\"=di tupni<                                    >/\"eulb\"=roloCtxet \"otua\"=h \":值高最\"=txet  txet<                                    >/\"der\"=roloCtxet \"otua\"=h \"%\"=txet txet<                                    >/\"der\"=roloCtxet \"retnec\"=ytivar \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[175]), _0x2f1dc(_0xd4768g[176])) + "\"=dekcehc \"eulb\"=roloCtxet \"关开\"=txet \"iTuPnaiD\"=di hctiwS<                                    >/\"kcalb\"=roloCtxet \"分验体铺店\"=txet txet<                                >\"tfel\"=ytivarg latnoziroh<                                >latnoziroh/<                                >/\"der\"=roloCtxet \"otua\"=h \"%\"=txet txet<                                    >/\"der\"=roloCtxet \"retnec\"=ytivar \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[177]), false) + _0x2f1dc(_0xd4768g[178]) + _0xbe1.get(_0x2f1dc(_0xd4768g[179]), false) + _0x2f1dc(_0xd4768g[180]) + _0xbe1.get(_0x2f1dc(_0xd4768g[181]), false) + _0x2f1dc(_0xd4768g[182]) + _0xbe1.get("oaitgnailaf".split("").reverse().join(""), false) + _0x2f1dc(_0xd4768g[183]) + _0xbe1.get(_0x2f1dc(_0xd4768g[184]), false) + "\"=dekcehc \"eulb\"=roloCtxet \"开打剪混片出键一加频视音抖\"=txet \"niyuyld\"=di hctiwS<                                >/ \"ps51\"=eziStxet \"8 8 8 8\"=gniddap \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[185]), false) + _0x2f1dc(_0xd4768g[186]) + _0xbe1.get("niyuyyh".split("").reverse().join(""), false) + "\"=dekcehc \"eulb\"=roloCtxet \"闭关的说解频视iA,开打换替板模iA\"=txet \"gniteijujkl\"=di hctiwS<                                >/ \"ps51\"=eziStxet \"8 8 8 8\"=gniddap \"".split("").reverse().join("") + _0xbe1.get(_0x2f1dc(_0xd4768g[187]), false) + "\"=dekcehc \"eulb\"=roloCtxet \"闭关的屏横会不,开打屏横会品作\"=txet \"lcgnipgneh\"=di hctiwS<                                >/ \"ps51\"=eziStxet \"8 8 8 8\"=gniddap \"".split("").reverse().join("") + _0xbe1.get("lcgnipgneh".split("").reverse().join(""), false) + _0x2f1dc(_0xd4768g[188]) + _0xbe1.get("uPgniduG".split("").reverse().join(""), false) + _0x2f1dc(_0xd4768g[189]) + _0xbe1.get("nauyij".split("").reverse().join(""), "7.0".split("").reverse().join("")) + _0x2f1dc(_0xd4768g[190]) + _0xbe1.get(_0x2f1dc(_0xd4768g[191]), true) + _0x2f1dc(_0xd4768g[192]) + _0x201 + "\"=txet txet<                                >/ \"".split("").reverse().join("") + _0x72c9f + ":码活激\"=txet \"txet_码活激\"=di txet<                                        >latnoziroh<                                    >\" lacitrev_retnec|tfel\"=ytivarg_tuoyal \"011\"=h \"otua\"=w \"息信码活激\"=di lacitrev<                                >\"pd01\"=mottoBnigram \"ffffff#\"=gb \"otua\"=h \"*\"=w \"01 01\"=gniddap lacitrev<                            >latnoziroh/<                            >/ \"8\"=gniddap \"dlob\"=elytStxet \"ps42\"=eziStxet \"000000#\"=roloCtxet \"".split("").reverse().join("") + _0xbe1.get("KDC".split("").reverse().join("")) + _0x2f1dc(_0xd4768g[193]) + _0x201 + _0x2f1dc(_0xd4768g[194]));
  var _0x224ab = new ArrayAdapter(context, android.R.layout.simple_spinner_dropdown_item, new ArrayList(_0xbcdcf));
  ui.spin_pingTai.setAdapter(_0x224ab);
  ui.spin_pingTai.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener({
    "onItemSelected": function (_0x0e1dd, _0x7017db, _0xf35e) {
      _0xf5b5f(_0xbcdcf[_0xf35e]);
      _0x224ab = new ArrayAdapter(context, android.R.layout.simple_spinner_dropdown_item, new ArrayList(_0x766e[_0xbcdcf[_0xf35e]].entries));
      ui.spin_moShi.setAdapter(_0x224ab);
      arr_adapter2 = new ArrayAdapter(context, android.R.layout.simple_spinner_dropdown_item, new ArrayList(_0x766e[_0xbcdcf[_0xf35e]].entries2 || [_0x2f1dc(_0xd4768g[195])]));
      ui.spin_moShi2.setAdapter(arr_adapter2);
      arr_adapter3 = new ArrayAdapter(context, android.R.layout.simple_spinner_dropdown_item, new ArrayList(_0x766e[_0xbcdcf[_0xf35e]].entries3 || ["式模无".split("").reverse().join("")]));
      ui.spin_moShi3.setAdapter(arr_adapter3);
      arr_adapter4 = new ArrayAdapter(context, android.R.layout.simple_spinner_dropdown_item, new ArrayList(_0x766e[_0xbcdcf[_0xf35e]].entries4 || [_0x2f1dc(_0xd4768g[196])]));
      ui.spin_moShi4.setAdapter(arr_adapter4);
    }
  }));
  let _0x8a2 = ui.bnv;
  var _0x9ea7f = function (s, h) {
    return s + h;
  }(6, 3);
  let _0x03d8b = _0x8a2.getMenu();
  _0x9ea7f = function () {
    return 9;
  }();
  _0x8a2.setOnNavigationItemSelectedListener({
    "onNavigationItemSelected": function (_0x6ga2db) {
      ui.vp.setCurrentItem(_0x6ga2db.getItemId());
      return true;
    }
  });
  ui.vp.addOnPageChangeListener({
    "onPageSelected": function (_0x1gg30a) {
      _0x03d8b.getItem(_0x1gg30a).setChecked(true);
      if (_0x03d8b.getItem(_0x1gg30a) == _0x2f1dc(_0xd4768g[197])) {
        ui.viewpager.setTitles([_0x2f1dc(_0xd4768g[198]), _0x2f1dc(_0xd4768g[199]), _0x2f1dc(_0xd4768g[200])]);
        ui.tabs.setupWithViewPager(ui.viewpager);
        let _0x7f8fc = _0xbe1.get(_0x2f1dc(_0xd4768g[201]), false);
        if (_0x7f8fc) {
          ui.视频话术.checked = function () {
            return true;
          }();
          ui.打招呼语多行.setText(_0xbe1.get("语呼招打频视".split("").reverse().join(""), []).join(_0x2f1dc(_0xd4768g[202])));
          ui.通用回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[203]), []).join(_0x2f1dc(_0xd4768g[204])));
          ui.关键词回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[205]), []).join(_0x2f1dc(_0xd4768g[206])));
        } else {
          ui.聊天话术.checked = function () {
            return true;
          }();
          ui.打招呼语多行.setText(_0xbe1.get("语呼招打天聊".split("").reverse().join(""), []).join(_0x2f1dc(_0xd4768g[207])));
          ui.通用回复多行.setText(_0xbe1.get("语复回用通天聊".split("").reverse().join(""), []).join(_0x2f1dc(_0xd4768g[208])));
          ui.关键词回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[209]), []).join(_0x2f1dc(_0xd4768g[210])));
        }
      }
    }
  });
  ui.模糊搜索btn.click(() => {
    let _0x5a2 = ui.模糊搜索.getText().toString();
    var _0x6de11e;
    var _0x48e73e = [];
    _0x6de11e = function () {
      return _0x2f1dc(_0xd4768g[211]);
    }();
    for (let _0x3d2 = function (s, h) {
      return s ^ h;
    }(150232, 150232); _0x3d2 < _0xbcdcf.length; _0x3d2++) {
      if (_0xbcdcf[_0x3d2].indexOf(_0x5a2) > -1) {
        _0x48e73e.push(_0xbcdcf[_0x3d2]);
      }
    }
    if (_0x48e73e.length > _0xbb32ce([32, 270702, 32, 270702, 38, 37])) {
      dialogs.build({
        "title": "请选择您要找的app",
        "items": _0x48e73e,
        "itemsSelectMode": "single"
      }).on("eciohc_elgnis".split("").reverse().join(""), (index, item) => {
        toast(_0x2f1dc(_0xd4768g[212]) + item);
        index = _0xee307f(_0xbcdcf, item);
        ui.spin_pingTai.setSelection(index);
        _0xa26df = item;
      }).show();
    } else {
      alert("台平的要你供提家卖系联以可,台平的索搜你到找没".split("").reverse().join(""));
    }
  });
  _0x278b();
  _0x5g71f();
  ui.autoService.on(_0x2f1dc(_0xd4768g[213]), function (_0x2c5b8a) {
    if (_0x2c5b8a && auto.service == null) {
      app.startActivity(JSON.parse(_0x2f1dc(_0xd4768g[214])));
    }
    if (!_0x2c5b8a && auto.service != null) {
      auto.service.disableSelf();
    }
  });
  ui.emitter.on(_0x2f1dc(_0xd4768g[215]), () => {
    if (_0xbe1.get("态状行运".split("").reverse().join("")) == 2) {
      toastLog(_0x2f1dc(_0xd4768g[216]));
      try {
        _0xb857e.getEngine().forceStop();
      } catch (e) {}
    }
    ui.运行.setClickable(true);
    ui.autoService.checked = auto.service != null;
    if (getPackageName(_0xa26df) != null) {
      ui.详情.setText(_0xa26df + ")装安已(".split("").reverse().join(""));
      ui.下载app.attr(_0x2f1dc(_0xd4768g[217]), _0x2f1dc(_0xd4768g[218]));
    } else {
      _0xc8c9cb(_0xa26df);
    }
  });
  function _0xadbd(_0x2afa7d, _0x10) {
    return context.getResources().getIdentifier(_0x2afa7d, _0x10, context.getPackageName());
  }
  ui.跳无障碍.click(() => {
    alert(_0x2f1dc(_0xd4768g[219]), "务服碍障无启开必务\n发开式模碍障无由本脚此".split("").reverse().join("")).then(() => {
      app.startActivity(JSON.parse("}\n\"SGNITTES_YTILIBISSECCA.sgnittes.diordna\" :\"noitca\"  \n{".split("").reverse().join("")));
    });
  });
  ui.跳悬浮窗.click(() => {
    alert(_0x2f1dc(_0xd4768g[220]), _0x2f1dc(_0xd4768g[221])).then(() => {
      app.startActivity(JSON.parse(_0x2f1dc(_0xd4768g[222])));
    });
  });
  ui.跳悬浮窗2.click(() => {
    alert(_0x2f1dc(_0xd4768g[223]), "限权予给并》面界出弹台后《》窗浮悬示显《到找.2\n面界置设限权本脚入进.1\n限权窗浮悬启开必务\n限权窗浮悬要需本脚".split("").reverse().join("")).then(() => {
      floaty.requestPermission();
    });
  });
  ui.跳查看日志.click(() => {
    toast(_0x2f1dc(_0xd4768g[224]));
    app.startActivity("elosnoc".split("").reverse().join(""));
  });
  ui.设置.on(_0x2f1dc(_0xd4768g[225]), () => {
    app.startActivity("sgnittes".split("").reverse().join(""));
  });
  ui.下载app.on(_0x2f1dc(_0xd4768g[226]), () => {});
  ui.scheduleTime.setText(_0xbe1.get("emiTdeludehcs".split("").reverse().join("")) || "");
  ui.运行.on("kcilc".split("").reverse().join(""), () => {
    _0xa26df = ui.spin_pingTai.getSelectedItem().toString();
    if (_0xa26df == _0x2f1dc(_0xd4768g[227])) {
      alert(_0x2f1dc(_0xd4768g[228]));
      return;
    }
    if (!$power_manager.isIgnoringBatteryOptimizations()) {
      toastLog(_0x2f1dc(_0xd4768g[229]));
      $power_manager.requestIgnoreBatteryOptimizations();
      return;
    }
    if (auto.service == null) {
      toastLog(_0x2f1dc(_0xd4768g[230]));
      app.startActivity(JSON.parse("}\n\"SGNITTES_YTILIBISSECCA.sgnittes.diordna\" :\"noitca\"  \n{".split("").reverse().join("")));
      return;
    }
    if (!floaty.checkPermission()) {
      toastLog(_0x2f1dc(_0xd4768g[231]));
      floaty.requestPermission();
      return;
    }
    ui.运行.setClickable(false);
    _0xbe1.put(_0x2f1dc(_0xd4768g[232]), 0);
    _0xbe1.put(_0x2f1dc(_0xd4768g[233]), ui.name_kuais.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[234]), ui.name_kuaisFen.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[235]), ui.ShiPinTongkuan.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[236]), ui.name_jisu.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[237]), ui.name_jisuFen.getText().toString());
    _0xbe1.put("jnaugiA".split("").reverse().join(""), ui.Aiguanj.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[238]), ui.t1.getText().toString());
    _0xbe1.put("1emit".split("").reverse().join(""), ui.gua.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[239]), ui.zhangh.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[240]), ui.HuaHua1.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[241]), ui.HuaHua2.getText().toString());
    _0xbe1.put("3auHauH".split("").reverse().join(""), ui.HuaHua3.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[242]), ui.geshu.getText().toString());
    _0xbe1.put("idiuZ".split("").reverse().join(""), ui.Zuidi.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[243]), ui.Zuigao.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[244]), ui.ZDjiage.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[245]), ui.ZGjia.getText().toString());
    _0xbe1.put("nauyij".split("").reverse().join(""), ui.jiyuan.getText().toString());
    _0xbe1.put(_0x2f1dc(_0xd4768g[246]), _0xa26df);
    _0xfb634c = ui.spin_moShi.getSelectedItemPosition();
    _0xbe1.put("2项选子ppa".split("").reverse().join(""), ui.spin_moShi2.getSelectedItemPosition());
    _0xbe1.put(_0x2f1dc(_0xd4768g[247]), ui.spin_moShi3.getSelectedItemPosition());
    _0xbe1.put("4项选子ppa".split("").reverse().join(""), ui.spin_moShi4.getSelectedItemPosition());
    _0xbe1.put(_0x2f1dc(_0xd4768g[248]), _0xfb634c);
    _0xbe1.put(_0x2f1dc(_0xd4768g[249]), ui.check1.checked);
    _0xbe1.put("sutats_2kcehc".split("").reverse().join(""), ui.check2.checked);
    _0xbe1.put(_0x2f1dc(_0xd4768g[250]), ui.check3.checked);
    _0xbe1.put("sutats_4kcehc".split("").reverse().join(""), ui.check4.checked);
    _0xbe1.put(_0x2f1dc(_0xd4768g[251]), _0xbe1.get(_0x2f1dc(_0xd4768g[252]), false));
    _0xbe1.put("2noitpo".split("").reverse().join(""), _0xbe1.get("2noitpo".split("").reverse().join(""), false));
    _0xbe1.put("6noitpo".split("").reverse().join(""), _0xbe1.get(_0x2f1dc(_0xd4768g[253]), false));
    _0xbe1.put(_0x2f1dc(_0xd4768g[254]), _0xbe1.get(_0x2f1dc(_0xd4768g[255]), false));
    _0xbe1.put(_0x2f1dc(_0xd4768g[256]), _0xbe1.get(_0x2f1dc(_0xd4768g[257]), false));
    _0xbe1.put("11noitpo".split("").reverse().join(""), _0xbe1.get(_0x2f1dc(_0xd4768g[258]), false));
    _0xbe1.put(_0x2f1dc(_0xd4768g[259]), _0xbe1.get("noitpOirTdetceles".split("").reverse().join(""), _0xbb32ce([32, 824078, 32, 824076, 38, 37])));
    _0xbe1.put("6noitpOdetceles".split("").reverse().join(""), _0xbe1.get("6noitpOdetceles".split("").reverse().join(""), 2));
    _0xbe1.put(_0x2f1dc(_0xd4768g[260]), _0xbe1.get(_0x2f1dc(_0xd4768g[261]), 2));
    _0xbe1.put(_0x2f1dc(_0xd4768g[262]), _0xbe1.get("51noitpOdetceles".split("").reverse().join(""), _0xbb32ce([32, 827779, 32, 827777, 38, 37])));
    _0xbe1.put(_0x2f1dc(_0xd4768g[263]), _0xbe1.get(_0x2f1dc(_0xd4768g[264]), 1));
    _0xbe1.put(_0xa26df + "项选子".split("").reverse().join(""), _0xfb634c);
    _0xbe1.put(_0xa26df + _0x2f1dc(_0xd4768g[265]), _0xf2c);
    _0xbe1.put(_0xa26df + "3项选子".split("").reverse().join(""), _0x1ca9db);
    _0xbe1.put(_0xa26df + "4项选子".split("").reverse().join(""), _0x7aec);
    _0xbe1.put("ipa1ru".split("").reverse().join(""), _0x2f1dc(_0xd4768g[266]));
    threads.start(function () {
      _0x25bae(_0x766e[_0xa26df].download);
      for (let _0x767c2848 = function (s, h) {
        return s ^ h;
      }(955551, 955551); _0x767c2848 < 10; _0x767c2848++) {
        sleep(500);
        if (_0xbe1.get("态状行运".split("").reverse().join("")) == _0xbb32ce([32, 277779, 32, 277778, 38, 37])) {
          home();
          sleep(500);
          _0xbe1.put(_0x2f1dc(_0xd4768g[267]), 2);
          return;
        }
      }
      alert(_0x2f1dc(_0xd4768g[268]));
      ui.运行.setClickable(true);
    });
  });
  ui.平台链接.on(_0x2f1dc(_0xd4768g[269]), function () {
    alert(_0x2f1dc(_0xd4768g[270]));
  });
  ui.使用教程.on(_0x2f1dc(_0xd4768g[271]), function () {
    if (_0x72c9f == "水流山高".split("").reverse().join("")) {
      alert(_0x2f1dc(_0xd4768g[272]));
    } else {
      alert(_0x2f1dc(_0xd4768g[273]));
    }
  });
  ui.saveSchedule.on(_0x2f1dc(_0xd4768g[274]), () => {
    let _0xea1faf = ui.scheduleTime.getText().toString().trim();
    if (_0xea1faf === "") {
      _0xbe1.remove(_0x2f1dc(_0xd4768g[275]));
      toast(_0x2f1dc(_0xd4768g[276]));
      return;
    }
    if (new RegExp(_0x2f1dc(_0xd4768g[277]), "").test(_0xea1faf)) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[278]), _0xea1faf);
      toast(_0x2f1dc(_0xd4768g[279]) + _0xea1faf);
    } else {
      toast(_0x2f1dc(_0xd4768g[280]));
    }
  });
  ui.退出登陆.on("kcilc".split("").reverse().join(""), () => {
    if (ui.激活码_text.getText() == _0x2f1dc(_0xd4768g[281])) {
      toast(_0x2f1dc(_0xd4768g[282]));
      return;
    } else {
      toast(_0x2f1dc(_0xd4768g[283]));
      threads.start(function () {
        var _0xb7a3af = _0xfe88ab();
        if (_0xb7a3af[_0xbb32ce([32, 538959, 32, 538959, 38, 37])] != false) {
          _0xbe1.put(_0x2f1dc(_0xd4768g[284]), false);
          dialogs.alert(_0x2f1dc(_0xd4768g[285]), _0xb7a3af[1]);
          exit();
        } else {
          dialogs.alert("示提出退".split("").reverse().join(""), _0xb7a3af[1]);
        }
      });
    }
  });
  ui.解绑.on("kcilc".split("").reverse().join(""), () => {
    if (ui.激活码_text.getText() == ":码活激".split("").reverse().join("")) {
      toast(_0x2f1dc(_0xd4768g[286]));
      return;
    } else {
      toast(_0x2f1dc(_0xd4768g[287]));
      threads.start(function () {
        while (true) {
          try {
            let _0xdaceb = http.postJson(_0x2f1dc(_0xd4768g[288]), {
              "card": _0xbe1.get(_0x2f1dc(_0xd4768g[289]))
            });
            var _0xe168ee = function (s, h) {
              return s + h;
            }(7, 8);
            let _0xg97ff = _0xdaceb.body.json();
            _0xe168ee = _0xbb32ce([32, 427762, 32, 427760, 38, 37]) + _0xbb32ce([32, 354384, 32, 354389, 38, 37]);
            if (_0xdaceb.statusCode == _0xbb32ce([32, 904572, 32, 904628, 38, 37])) {
              if (_0xg97ff.msg == "功成除清".split("").reverse().join("")) {
                toastLog(_0x2f1dc(_0xd4768g[290]));
                break;
              } else {
                toastLog(_0x2f1dc(_0xd4768g[291]) + _0xg97ff.msg + "试重后s5,".split("").reverse().join(""));
              }
            } else {
              toastLog(_0x2f1dc(_0xd4768g[292]) + _0xdaceb.statusMessage + _0x2f1dc(_0xd4768g[293]));
            }
          } catch (error) {
            toastLog(":误错".split("").reverse().join("") + error + _0x2f1dc(_0xd4768g[294]));
          }
          sleep(_0xbb32ce([32, 193860, 32, 190156, 38, 37]));
        }
        var _0x373 = function (s, h) {
          return s + h;
        }(_0xbb32ce([32, 306862, 32, 306862, 38, 37]), 2);
        var _0x78fdbd48 = _0xfe88ab();
        _0x373 = function () {
          return _0xbb32ce([32, 476707, 32, 476706, 38, 37]);
        }();
        if (_0x78fdbd48[0] != false) {
          _0xbe1.put(_0x2f1dc(_0xd4768g[295]), false);
          dialogs.alert("示提出退".split("").reverse().join(""), _0x78fdbd48[_0xbb32ce([32, 305234, 32, 305235, 38, 37])]);
          exit();
        } else {
          dialogs.alert("示提出退".split("").reverse().join(""), _0x78fdbd48[1]);
        }
      });
    }
  });
  ui.视频话术.on(_0x2f1dc(_0xd4768g[296]), checked => {
    if (checked) {
      ui.打招呼语多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[297]), []).join(_0x2f1dc(_0xd4768g[298])));
      ui.通用回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[299]), []).join(_0x2f1dc(_0xd4768g[300])));
      ui.关键词回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[301]), []).join(_0x2f1dc(_0xd4768g[302])));
      _0xbe1.put(_0x2f1dc(_0xd4768g[303]), true);
    } else {
      ui.打招呼语多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[304]), []).join(_0x2f1dc(_0xd4768g[305])));
      ui.通用回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[306]), []).join(_0x2f1dc(_0xd4768g[307])));
      ui.关键词回复多行.setText(_0xbe1.get(_0x2f1dc(_0xd4768g[308]), []).join(_0x2f1dc(_0xd4768g[309])));
      _0xbe1.put(_0x2f1dc(_0xd4768g[310]), false);
    }
  });
  ui.招呼语恢复默认话术.on("kcilc".split("").reverse().join(""), () => {
    if (_0xbe1.get("式模术话频视".split("").reverse().join(""), false)) {
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + _0x2f1dc(_0xd4768g[311]) + _0x2f1dc(_0xd4768g[312]), JSON.parse(_0x2f1dc(_0xd4768g[313])), function (_0x9aa5b, _0x097bce) {
        if (_0x097bce) {
          ui.run(() => {
            toast(_0x2f1dc(_0xd4768g[314]) + _0x097bce);
          });
          return;
        }
        if (_0x9aa5b.statusCode == _0xbb32ce([32, 343696, 32, 343640, 38, 37])) {
          try {
            var _0xfb2 = $crypto.decrypt(_0x9aa5b.body.bytes(), new $crypto.Key("5e3.9+ncbdd-?mnc".split("").reverse().join("")), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
              "output": "string"
            });
            ui.run(() => {
              ui.打招呼语多行.setText(_0xfb2);
            });
            _0xbe1.put("语呼招打频视".split("").reverse().join(""), _0xfb2.split(_0x2f1dc(_0xd4768g[315])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    } else {
      http.get(_0x2f1dc(_0xd4768g[316]) + "SKHZD_TL".split("").reverse().join("") + _0x2f1dc(_0xd4768g[317]), JSON.parse("}{".split("").reverse().join("")), function (_0xcd, _0xcd2) {
        if (_0xcd2) {
          ui.run(() => {
            toast(_0x2f1dc(_0xd4768g[318]) + _0xcd2);
          });
          return;
        }
        if (_0xcd.statusCode == _0xbb32ce([32, 757074, 32, 757146, 38, 37])) {
          try {
            var _0x0ae5b148 = $crypto.decrypt(_0xcd.body.bytes(), new $crypto.Key("5e3.9+ncbdd-?mnc".split("").reverse().join("")), _0x2f1dc(_0xd4768g[319]), {
              "output": "string"
            });
            ui.run(() => {
              ui.打招呼语多行.setText(_0x0ae5b148);
            });
            _0xbe1.put("语呼招打天聊".split("").reverse().join(""), _0x0ae5b148.split(_0x2f1dc(_0xd4768g[320])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    }
  });
  ui.通用回复恢复默认话术.on(_0x2f1dc(_0xd4768g[321]), () => {
    if (_0xbe1.get(_0x2f1dc(_0xd4768g[322]), false)) {
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + "SKFH_PS".split("").reverse().join("") + _0x2f1dc(_0xd4768g[323]), JSON.parse("}{".split("").reverse().join("")), function (_0xcf5d9e, _0x8fec) {
        if (_0x8fec) {
          ui.run(() => {
            toast(":误错".split("").reverse().join("") + _0x8fec);
          });
          return;
        }
        if (_0xcf5d9e.statusCode == _0xbb32ce([32, 411029, 32, 410973, 38, 37])) {
          try {
            var _0x6647bc48 = $crypto.decrypt(_0xcf5d9e.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[324])), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
              "output": "string"
            });
            ui.run(() => {
              ui.通用回复多行.setText(_0x6647bc48);
            });
            _0xbe1.put("语复回用通频视".split("").reverse().join(""), _0x6647bc48.split(_0x2f1dc(_0xd4768g[325])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    } else {
      http.get(_0x2f1dc(_0xd4768g[326]) + _0x2f1dc(_0xd4768g[327]) + _0x2f1dc(_0xd4768g[328]), JSON.parse(_0x2f1dc(_0xd4768g[329])), function (_0xe58edc, _0x2b) {
        if (_0x2b) {
          ui.run(() => {
            toast(":误错".split("").reverse().join("") + _0x2b);
          });
          return;
        }
        if (_0xe58edc.statusCode == 200) {
          try {
            var _0xcdaac = function (s, h) {
              return s + h;
            }(5, 0);
            var _0xb7g3fd48 = $crypto.decrypt(_0xe58edc.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[330])), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
              "output": "string"
            });
            _0xcdaac = _0xbb32ce([32, 610994, 32, 610999, 38, 37]) + 8;
            ui.run(() => {
              ui.通用回复多行.setText(_0xb7g3fd48);
            });
            _0xbe1.put("语复回用通天聊".split("").reverse().join(""), _0xb7g3fd48.split(_0x2f1dc(_0xd4768g[331])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    }
  });
  ui.关键词回复恢复默认话术.on("kcilc".split("").reverse().join(""), () => {
    if (_0xbe1.get(_0x2f1dc(_0xd4768g[332]), false)) {
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + "SKCJG_PS".split("").reverse().join("") + _0x2f1dc(_0xd4768g[333]), JSON.parse(_0x2f1dc(_0xd4768g[334])), function (_0x7bg29e, _0x4c) {
        if (_0x4c) {
          ui.run(() => {
            toast(_0x2f1dc(_0xd4768g[335]) + _0x4c);
          });
          return;
        }
        if (_0x7bg29e.statusCode == _0xbb32ce([32, 450755, 32, 450571, 38, 37])) {
          try {
            var _0x28b5f648 = $crypto.decrypt(_0x7bg29e.body.bytes(), new $crypto.Key("5e3.9+ncbdd-?mnc".split("").reverse().join("")), _0x2f1dc(_0xd4768g[336]), {
              "output": "string"
            });
            ui.run(() => {
              ui.关键词回复多行.setText(_0x28b5f648);
            });
            _0xbe1.put("复回词键关频视".split("").reverse().join(""), _0x28b5f648.split(_0x2f1dc(_0xd4768g[337])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    } else {
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + "SKCJG_TL".split("").reverse().join("") + _0x2f1dc(_0xd4768g[338]), JSON.parse(_0x2f1dc(_0xd4768g[339])), function (_0xd5e8c, _0x8ee3a) {
        if (_0x8ee3a) {
          ui.run(() => {
            toast(_0x2f1dc(_0xd4768g[340]) + _0x8ee3a);
          });
          return;
        }
        if (_0xd5e8c.statusCode == 200) {
          try {
            var _0x275;
            var _0x9c281g48 = $crypto.decrypt(_0xd5e8c.body.bytes(), new $crypto.Key("5e3.9+ncbdd-?mnc".split("").reverse().join("")), _0x2f1dc(_0xd4768g[341]), {
              "output": "string"
            });
            _0x275 = 0 + _0xbb32ce([32, 870033, 32, 870038, 38, 37]);
            ui.run(() => {
              ui.关键词回复多行.setText(_0x9c281g48);
            });
            _0xbe1.put(_0x2f1dc(_0xd4768g[342]), _0x9c281g48.split(_0x2f1dc(_0xd4768g[343])));
          } catch (error) {
            toast(_0x2f1dc(_0xd4768g[344]) + error);
          }
          return true;
        }
      });
    }
  });
  ui.招呼语保存.on(_0x2f1dc(_0xd4768g[345]), () => {
    if (_0xbe1.get(_0x2f1dc(_0xd4768g[346]), false)) {
      _0xbe1.put("语呼招打频视".split("").reverse().join(""), ui.打招呼语多行.getText().toString().split(_0x2f1dc(_0xd4768g[347])));
      toast("功成存保".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[348]), ui.打招呼语多行.getText().toString().split(_0x2f1dc(_0xd4768g[349])));
      toast(_0x2f1dc(_0xd4768g[350]));
    }
  });
  ui.通用回复保存.on("kcilc".split("").reverse().join(""), () => {
    if (_0xbe1.get(_0x2f1dc(_0xd4768g[351]), false)) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[352]), ui.通用回复多行.getText().toString().split(_0x2f1dc(_0xd4768g[353])));
      toast(_0x2f1dc(_0xd4768g[354]));
    } else {
      _0xbe1.put("语复回用通天聊".split("").reverse().join(""), ui.通用回复多行.getText().toString().split(_0x2f1dc(_0xd4768g[355])));
      toast(_0x2f1dc(_0xd4768g[356]));
    }
  });
  ui.关键词回复保存.on(_0x2f1dc(_0xd4768g[357]), () => {
    if (_0xbe1.get(_0x2f1dc(_0xd4768g[358]), false)) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[359]), ui.关键词回复多行.getText().toString().split(_0x2f1dc(_0xd4768g[360])));
      toast("功成存保".split("").reverse().join(""));
    } else {
      _0xbe1.put("复回词键关天聊".split("").reverse().join(""), ui.关键词回复多行.getText().toString().split(_0x2f1dc(_0xd4768g[361])));
      toast("功成存保".split("").reverse().join(""));
    }
  });
  let _0x10f = _0xbe1.get("51noitpOdetceles".split("").reverse().join(""), 2);
  ui.option10.checked = _0x10f === 1;
  ui.option11.checked = _0x10f === 2;
  ui.option10.on("kcehc".split("").reverse().join(""), function (_0xd8489e) {
    if (_0xd8489e) {
      ui.option11.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[362]), _0xbb32ce([32, 506173, 32, 506172, 38, 37]));
    }
    _0xbe1.put("01noitpo".split("").reverse().join(""), _0xd8489e);
  });
  ui.option11.on(_0x2f1dc(_0xd4768g[363]), function (_0x9359c) {
    if (_0x9359c) {
      ui.option10.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[364]), 2);
    }
    _0xbe1.put("11noitpo".split("").reverse().join(""), _0x9359c);
  });
  let _0xe114d = _0xbe1.get(_0x2f1dc(_0xd4768g[365]), 2);
  ui.optioni6.checked = _0xe114d === 1;
  ui.optioni7.checked = _0xe114d === _0xbb32ce([32, 442703, 32, 442701, 38, 37]);
  ui.optioni8.checked = _0xe114d === 3;
  ui.optioni6.on(_0x2f1dc(_0xd4768g[366]), function (_0x75541g) {
    if (_0x75541g) {
      ui.optioni7.checked = function () {
        return false;
      }();
      ui.optioni8.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[367]), _0xbb32ce([32, 892785, 32, 892784, 38, 37]));
    }
  });
  ui.optioni7.on("kcehc".split("").reverse().join(""), function (_0xae1df) {
    if (_0xae1df) {
      ui.optioni6.checked = function () {
        return false;
      }();
      ui.optioni8.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[368]), _0xbb32ce([32, 412110, 32, 412108, 38, 37]));
    }
  });
  ui.optioni8.on(_0x2f1dc(_0xd4768g[369]), function (_0xd725c) {
    if (_0xd725c) {
      ui.optioni6.checked = function () {
        return false;
      }();
      ui.optioni7.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[370]), 3);
    }
  });
  let _0x2b7c = _0xbe1.get(_0x2f1dc(_0xd4768g[371]), 2);
  ui.option6.checked = _0x2b7c === _0xbb32ce([32, 845497, 32, 845496, 38, 37]);
  ui.option7.checked = _0x2b7c === 2;
  ui.option8.checked = _0x2b7c === _0xbb32ce([32, 169484, 32, 169487, 38, 37]);
  ui.option6.on(_0x2f1dc(_0xd4768g[372]), function (_0x8dd51b) {
    if (_0x8dd51b) {
      ui.option7.checked = function () {
        return false;
      }();
      ui.option8.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[373]), _0xbb32ce([32, 195424, 32, 195425, 38, 37]));
    }
  });
  ui.option7.on("kcehc".split("").reverse().join(""), function (_0x981d) {
    if (_0x981d) {
      ui.option6.checked = function () {
        return false;
      }();
      ui.option8.checked = function () {
        return false;
      }();
      _0xbe1.put("6noitpOdetceles".split("").reverse().join(""), 2);
    }
  });
  ui.option8.on("kcehc".split("").reverse().join(""), function (_0xab9ae) {
    if (_0xab9ae) {
      ui.option6.checked = function () {
        return false;
      }();
      ui.option7.checked = function () {
        return false;
      }();
      _0xbe1.put("6noitpOdetceles".split("").reverse().join(""), 3);
    }
  });
  let _0x132bc = _0xbe1.get(_0x2f1dc(_0xd4768g[374]), 0);
  ui.option1.checked = _0x132bc === _0xbb32ce([32, 816908, 32, 816909, 38, 37]);
  ui.option2.checked = _0x132bc === _0xbb32ce([32, 386538, 32, 386536, 38, 37]);
  ui.option1.on(_0x2f1dc(_0xd4768g[375]), function (_0xg1c4d) {
    if (_0xg1c4d) {
      ui.option2.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[376]), 1);
    }
    _0xbe1.put(_0x2f1dc(_0xd4768g[377]), _0xg1c4d);
  });
  ui.option2.on("kcehc".split("").reverse().join(""), function (_0xee) {
    if (_0xee) {
      ui.option1.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[378]), 2);
    }
    _0xbe1.put(_0x2f1dc(_0xd4768g[379]), _0xee);
  });
  let _0xb6b1a = _0xbe1.get(_0x2f1dc(_0xd4768g[380]), _0xbb32ce([32, 726572, 32, 726574, 38, 37]));
  ui.option3.checked = _0xb6b1a === 1;
  ui.option4.checked = _0xb6b1a === _0xbb32ce([32, 115117, 32, 115119, 38, 37]);
  ui.option5.checked = _0xb6b1a === 3;
  ui.option3.on(_0x2f1dc(_0xd4768g[381]), function (_0xe9c2cd) {
    if (_0xe9c2cd) {
      ui.option4.checked = function () {
        return false;
      }();
      ui.option5.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[382]), 1);
    }
  });
  ui.option4.on(_0x2f1dc(_0xd4768g[383]), function (_0xfaadd) {
    if (_0xfaadd) {
      ui.option3.checked = function () {
        return false;
      }();
      ui.option5.checked = function () {
        return false;
      }();
      _0xbe1.put("noitpOirTdetceles".split("").reverse().join(""), 2);
    }
  });
  ui.option5.on(_0x2f1dc(_0xd4768g[384]), function (_0xb5f) {
    if (_0xb5f) {
      ui.option3.checked = function () {
        return false;
      }();
      ui.option4.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[385]), _0xbb32ce([32, 204653, 32, 204654, 38, 37]));
    }
  });
  var _0x81bb9b;
  let _0xb43 = _0xbe1.get(_0x2f1dc(_0xd4768g[386]), 2);
  _0x81bb9b = function () {
    return _0xbb32ce([32, 148482, 32, 148490, 38, 37]);
  }();
  ui.Tiyanfen1.checked = _0xb43 === _0xbb32ce([32, 370310, 32, 370311, 38, 37]);
  ui.Tiyanfen2.checked = _0xb43 === 2;
  ui.Tiyanfen3.checked = _0xb43 === 3;
  ui.Tiyanfen1.on(_0x2f1dc(_0xd4768g[387]), function (_0xf9728c) {
    if (_0xf9728c) {
      ui.Tiyanfen2.checked = function () {
        return false;
      }();
      ui.Tiyanfen3.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[388]), _0xbb32ce([32, 654108, 32, 654109, 38, 37]));
    }
  });
  ui.Tiyanfen2.on(_0x2f1dc(_0xd4768g[389]), function (_0x5g8eg) {
    if (_0x5g8eg) {
      ui.Tiyanfen1.checked = function () {
        return false;
      }();
      ui.Tiyanfen3.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[390]), 2);
    }
  });
  ui.Tiyanfen3.on(_0x2f1dc(_0xd4768g[391]), function (_0xafc5f) {
    if (_0xafc5f) {
      ui.Tiyanfen1.checked = function () {
        return false;
      }();
      ui.Tiyanfen2.checked = function () {
        return false;
      }();
      _0xbe1.put(_0x2f1dc(_0xd4768g[392]), 3);
    }
  });
  ui.xqbcf.on(_0x2f1dc(_0xd4768g[393]), function (_0xfcb) {
    if (_0xfcb) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[394]), true);
      toast("字文条一发再要".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[395]), false);
      toast(_0x2f1dc(_0xd4768g[396]));
    }
  });
  ui.faliangtiao.on(_0x2f1dc(_0xd4768g[397]), function (_0x11) {
    if (_0x11) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[398]), true);
      toast(_0x2f1dc(_0xd4768g[399]));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[400]), false);
      toast(_0x2f1dc(_0xd4768g[401]));
    }
  });
  ui.fawandashipin.on(_0x2f1dc(_0xd4768g[402]), function (_0x9b5d) {
    if (_0x9b5d) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[403]), true);
      toast("去过频视打了到度密亲启开".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[404]), false);
      toast("频视打不了到度密亲".split("").reverse().join(""));
    }
  });
  ui.dlyuyin.on("kcehc".split("").reverse().join(""), function (_0x174ba) {
    if (_0x174ba) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[405]), true);
      toast(_0x2f1dc(_0xd4768g[406]));
    } else {
      _0xbe1.put("niyuyld".split("").reverse().join(""), false);
      toast(_0x2f1dc(_0xd4768g[407]));
    }
  });
  ui.hyyuyin.on(_0x2f1dc(_0xd4768g[408]), function (_0xc3b83b) {
    if (_0xc3b83b) {
      _0xbe1.put("niyuyyh".split("").reverse().join(""), true);
      toast("音语的制录台平发".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[409]), false);
      toast("音语的3pm.1发".split("").reverse().join(""));
    }
  });
  ui.zdingY.on(_0x2f1dc(_0xd4768g[410]), function (_0x2ac9a) {
    if (_0x2ac9a) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[411]), true);
      toast("品商义定自发".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[412]), false);
      toast(_0x2f1dc(_0xd4768g[413]));
    }
  });
  ui.HuaTi.on(_0x2f1dc(_0xd4768g[414]), function (_0xec) {
    if (_0xec) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[415]), true);
      toast("题话义定自发".split("").reverse().join(""));
    } else {
      _0xbe1.put("iTauH".split("").reverse().join(""), false);
      toast(_0x2f1dc(_0xd4768g[416]));
    }
  });
  ui.lkjujieting.on("kcehc".split("").reverse().join(""), function (_0xc557fb) {
    if (_0xc557fb) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[417]), true);
      toast(_0x2f1dc(_0xd4768g[418]));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[419]), false);
      toast(_0x2f1dc(_0xd4768g[420]));
    }
  });
  ui.hengpingcl.on("kcehc".split("").reverse().join(""), function (_0xbfb7de) {
    if (_0xbfb7de) {
      _0xbe1.put("lcgnipgneh".split("").reverse().join(""), true);
      toast(_0x2f1dc(_0xd4768g[421]));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[422]), false);
      toast(_0x2f1dc(_0xd4768g[423]));
    }
  });
  ui.GudingPu.on("kcehc".split("").reverse().join(""), function (_0xfaa) {
    if (_0xfaa) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[424]), true);
      toast(_0x2f1dc(_0xd4768g[425]));
    } else {
      _0xbe1.put("uPgniduG".split("").reverse().join(""), false);
      toast(_0x2f1dc(_0xd4768g[426]));
    }
  });
  ui.Fwzd.on(_0x2f1dc(_0xd4768g[427]), function (_0x2df) {
    if (_0x2df) {
      _0xbe1.put("dzwF".split("").reverse().join(""), true);
      toast("了启开".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[428]), false);
      toast(_0x2f1dc(_0xd4768g[429]));
    }
  });
  ui.jishihuif.on(_0x2f1dc(_0xd4768g[430]), function (_0x3a6dc) {
    if (_0x3a6dc) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[431]), true);
      toast("了启开".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[432]), false);
      toast(_0x2f1dc(_0xd4768g[433]));
    }
  });
  ui.huashuxz.on(_0x2f1dc(_0xd4768g[434]), function (_0xaca) {
    if (_0xaca) {
      _0xbe1.put("zxuhsauh".split("").reverse().join(""), true);
      toast("术话能智IA了择选".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[435]), false);
      toast(_0x2f1dc(_0xd4768g[436]));
    }
  });
  ui.Yongjinlv.on(_0x2f1dc(_0xd4768g[437]), function (_0xa) {
    if (_0xa) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[438]), true);
      toast("的内围范是启开".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[439]), false);
      toast(_0x2f1dc(_0xd4768g[440]));
    }
  });
  ui.JiaGeQu.on(_0x2f1dc(_0xd4768g[441]), function (_0xfe4c) {
    if (_0xfe4c) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[442]), true);
      toast("的内围范是启开".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[443]), false);
      toast("的机随是闭关".split("").reverse().join(""));
    }
  });
  ui.DianPuTi.on("kcehc".split("").reverse().join(""), function (_0x12) {
    if (_0x12) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[444]), true);
      toast("的内围范是启开".split("").reverse().join(""));
    } else {
      _0xbe1.put(_0x2f1dc(_0xd4768g[445]), false);
      toast("的机随是闭关".split("").reverse().join(""));
    }
  });
  ui.yaofayuyin.on(_0x2f1dc(_0xd4768g[446]), function (_0x1af) {
    if (_0x1af) {
      _0xbe1.put(_0x2f1dc(_0xd4768g[447]), true);
      toast("音语3pm.1发择选".split("").reverse().join(""));
    } else {
      _0xbe1.put("niyuyafoay".split("").reverse().join(""), false);
      toast(_0x2f1dc(_0xd4768g[448]));
    }
  });
  let _0x6117de = _0xee307f(_0xbcdcf, _0xa26df);
  ui.spin_pingTai.setSelection(_0x6117de);
  setTimeout(() => {
    ui.toolbar.setTitle(_0x72c9f);
    ui.spin_moShi.setSelection(_0xfb634c);
    ui.spin_moShi2.setSelection(_0xf2c);
    ui.spin_moShi3.setSelection(_0x1ca9db);
    ui.spin_moShi4.setSelection(_0x7aec);
  }, 900);
  setTimeout(() => {
    _0x8a2.setLabelVisibilityMode(LabelVisibilityMode.LABEL_VISIBILITY_LABELED);
    _0x03d8b.add(_0xbb32ce([32, 261279, 32, 261279, 38, 37]), 0, 0, "页首".split("").reverse().join("")).setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
    _0x03d8b.getItem(0).setIcon(_0xadbd(_0x2f1dc(_0xd4768g[449]), _0x2f1dc(_0xd4768g[450])));
    _0x03d8b.add(0, _0xbb32ce([32, 269962, 32, 269963, 38, 37]), 1, _0x2f1dc(_0xd4768g[451])).setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
    _0x03d8b.getItem(1).setIcon(_0xadbd(_0x2f1dc(_0xd4768g[452]), "elbaward".split("").reverse().join("")));
    _0x03d8b.add(_0xbb32ce([32, 548237, 32, 548237, 38, 37]), 2, 3, "术话".split("").reverse().join("")).setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
    _0x03d8b.getItem(_0xbb32ce([32, 925519, 32, 925517, 38, 37])).setIcon(_0xadbd("pd84_kcalb_tnemngissa_ci".split("").reverse().join(""), _0x2f1dc(_0xd4768g[453])));
    _0x03d8b.add(_0xbb32ce([32, 193094, 32, 193094, 38, 37]), _0xbb32ce([32, 456557, 32, 456558, 38, 37]), _0xbb32ce([32, 208593, 32, 208594, 38, 37]), _0x2f1dc(_0xd4768g[454])).setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
    _0x03d8b.getItem(_0xbb32ce([32, 753978, 32, 753977, 38, 37])).setIcon(_0xadbd(_0x2f1dc(_0xd4768g[455]), "elbaward".split("").reverse().join("")));
    ui.toolbar.setupWithDrawer(ui.drawer);
    ui.滚动内容1.setSelected(true);
    ui.滚动内容2.setSelected(true);
    threads.start(function () {
      var _0x5167dd = _0xc23ccd();
      if (_0x5167dd[_0xbb32ce([32, 529220, 32, 529220, 38, 37])] == true) {
        ui.run(() => {
          ui.到期时间_text.setText(_0x2f1dc(_0xd4768g[456]) + _0x10e7ca);
          ui.剩余时间_text.setText(_0x2f1dc(_0xd4768g[457]) + _0xbfb56b);
        });
        let _0x944 = _0x1a4bac();
        console.log(_0x944);
        if (_0x9ba(device.getAndroidId() + _0x2f1dc(_0xd4768g[458]) + _0xbe1.get(_0x2f1dc(_0xd4768g[459])) + _0x2f1dc(_0xd4768g[460]) + _0x944.timestamp + _0x2f1dc(_0xd4768g[461])) != _0x944.sign) {
          _0xbe1.put(_0x2f1dc(_0xd4768g[462]), false);
          toastLog(_0x2f1dc(_0xd4768g[463]));
          dialogs.build({
            "title": "请正确输入卡密格式，或者卸载重装再输入",
            "neutral": "点这下载安装正版",
            "cancelable": false
          }).on(_0x2f1dc(_0xd4768g[464]), () => {
            app.openUrl("nahsoagff/moc.uuoznal.iuhsuilnahsoag//:sptth".split("").reverse().join(""));
            exit();
          }).show();
          sleep(_0xbb32ce([32, 209597, 32, 209237, 38, 37]));
        }
      } else {
        _0xbe1.put(_0x2f1dc(_0xd4768g[465]), false);
        ui.run(() => {
          _0xdd5b3b();
        });
      }
    });
  }, 1500);
  setTimeout(() => {
    if (!_0xbe1.get("语呼招打频视".split("").reverse().join(""))) {
      toast(_0x2f1dc(_0xd4768g[466]));
      http.get(_0x2f1dc(_0xd4768g[467]) + "SKHZD_PS".split("").reverse().join("") + _0x2f1dc(_0xd4768g[468]), JSON.parse("}{".split("").reverse().join("")), function (_0xafd, _0x924g) {
        if (_0x924g) {
          ui.run(() => {
            toast(":误错".split("").reverse().join("") + _0x924g);
          });
          return;
        }
        if (_0xafd.statusCode == 200) {
          try {
            var _0xg536cd;
            var _0x8acc3b48 = $crypto.decrypt(_0xafd.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[469])), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
              "output": "string"
            });
            _0xg536cd = _0xbb32ce([32, 879231, 32, 879227, 38, 37]) + 6;
            ui.run(() => {
              ui.打招呼语多行.setText(_0x8acc3b48);
            });
            _0xbe1.put(_0x2f1dc(_0xd4768g[470]), _0x8acc3b48.split(_0x2f1dc(_0xd4768g[471])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    }
    if (!_0xbe1.get(_0x2f1dc(_0xd4768g[472]))) {
      toast(_0x2f1dc(_0xd4768g[473]));
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + _0x2f1dc(_0xd4768g[474]) + "osxed.".split("").reverse().join(""), JSON.parse("}{".split("").reverse().join("")), function (_0x9cb48c, _0x35ee) {
        if (_0x35ee) {
          ui.run(() => {
            toast(_0x2f1dc(_0xd4768g[475]) + _0x35ee);
          });
          return;
        }
        if (_0x9cb48c.statusCode == _0xbb32ce([32, 243638, 32, 243582, 38, 37])) {
          try {
            var _0x4921g;
            var _0xdbfgea48 = $crypto.decrypt(_0x9cb48c.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[476])), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
              "output": "string"
            });
            _0x4921g = function () {
              return _0x2f1dc(_0xd4768g[477]);
            }();
            ui.run(() => {
              ui.打招呼语多行.setText(_0xdbfgea48);
            });
            _0xbe1.put(_0x2f1dc(_0xd4768g[478]), _0xdbfgea48.split(_0x2f1dc(_0xd4768g[479])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    }
    if (!_0xbe1.get(_0x2f1dc(_0xd4768g[480]))) {
      toast("术话语复回统系频视化始初在正".split("").reverse().join(""));
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + _0x2f1dc(_0xd4768g[481]) + "osxed.".split("").reverse().join(""), JSON.parse(_0x2f1dc(_0xd4768g[482])), function (_0x30b66f, _0x019ab) {
        if (_0x019ab) {
          ui.run(() => {
            toast(":误错".split("").reverse().join("") + _0x019ab);
          });
          return;
        }
        if (_0x30b66f.statusCode == _0xbb32ce([32, 386872, 32, 387056, 38, 37])) {
          try {
            var _0x3a518248 = $crypto.decrypt(_0x30b66f.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[483])), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
              "output": "string"
            });
            ui.run(() => {
              ui.通用回复多行.setText(_0x3a518248);
            });
            _0xbe1.put(_0x2f1dc(_0xd4768g[484]), _0x3a518248.split(_0x2f1dc(_0xd4768g[485])));
          } catch (error) {
            toast(_0x2f1dc(_0xd4768g[486]) + error);
          }
          return true;
        }
      });
    }
    if (!_0xbe1.get("语复回用通天聊".split("").reverse().join(""))) {
      toast("术话语复回统系天聊化始初在正".split("").reverse().join(""));
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + "SKFH_TL".split("").reverse().join("") + "osxed.".split("").reverse().join(""), JSON.parse(_0x2f1dc(_0xd4768g[487])), function (_0xac, _0x9cb) {
        if (_0x9cb) {
          ui.run(() => {
            toast(_0x2f1dc(_0xd4768g[488]) + _0x9cb);
          });
          return;
        }
        if (_0xac.statusCode == 200) {
          try {
            var _0x36f0e948 = $crypto.decrypt(_0xac.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[489])), _0x2f1dc(_0xd4768g[490]), {
              "output": "string"
            });
            ui.run(() => {
              ui.通用回复多行.setText(_0x36f0e948);
            });
            _0xbe1.put("语复回用通天聊".split("").reverse().join(""), _0x36f0e948.split(_0x2f1dc(_0xd4768g[491])));
          } catch (error) {
            toast(_0x2f1dc(_0xd4768g[492]) + error);
          }
          return true;
        }
      });
    }
    if (!_0xbe1.get("复回词键关频视".split("").reverse().join(""))) {
      toast(_0x2f1dc(_0xd4768g[493]));
      http.get(_0x2f1dc(_0xd4768g[494]) + "SKCJG_PS".split("").reverse().join("") + "osxed.".split("").reverse().join(""), JSON.parse("}{".split("").reverse().join("")), function (_0x7b04d, _0xa2) {
        if (_0xa2) {
          ui.run(() => {
            toast(":误错".split("").reverse().join("") + _0xa2);
          });
          return;
        }
        if (_0x7b04d.statusCode == _0xbb32ce([32, 762422, 32, 762622, 38, 37])) {
          try {
            var _0x336e4a48 = $crypto.decrypt(_0x7b04d.body.bytes(), new $crypto.Key(_0x2f1dc(_0xd4768g[495])), _0x2f1dc(_0xd4768g[496]), {
              "output": "string"
            });
            ui.run(() => {
              ui.关键词回复多行.setText(_0x336e4a48);
            });
            _0xbe1.put(_0x2f1dc(_0xd4768g[497]), _0x336e4a48.split(_0x2f1dc(_0xd4768g[498])));
          } catch (error) {
            toast(" uwouc".split("").reverse().join("") + error);
          }
          return true;
        }
      });
    }
    if (!_0xbe1.get("复回词键关天聊".split("").reverse().join(""))) {
      toast(_0x2f1dc(_0xd4768g[499]));
      http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + _0x2f1dc(_0xd4768g[500]) + _0x2f1dc(_0xd4768g[501]), JSON.parse("}{".split("").reverse().join("")), function (_0x9184b, _0x1f5gc) {
        if (_0x1f5gc) {
          ui.run(() => {
            toast(":误错".split("").reverse().join("") + _0x1f5gc);
          });
          return;
        }
        if (_0x9184b.statusCode == 200) {
          try {
            var _0x9738d348 = $crypto.decrypt(_0x9184b.body.bytes(), new $crypto.Key("5e3.9+ncbdd-?mnc".split("").reverse().join("")), _0x2f1dc(_0xd4768g[502]), {
              "output": "string"
            });
            ui.run(() => {
              ui.关键词回复多行.setText(_0x9738d348);
            });
            _0xbe1.put("复回词键关天聊".split("").reverse().join(""), _0x9738d348.split(_0x2f1dc(_0xd4768g[503])));
          } catch (error) {
            toast(_0x2f1dc(_0xd4768g[504]) + error);
          }
          return true;
        }
      });
    }
  }, 1800);
  function _0x1a4bac() {
    while (true) {
      try {
        var _0x6db;
        let _0x12573a48 = http.postJson("kcehc/drac/ipa/moc.sznahsoag.ipa//:ptth".split("").reverse().join(""), {
          "device_id": device.getAndroidId(),
          "card": _0xbe1.get(_0x2f1dc(_0xd4768g[505]))
        });
        _0x6db = function () {
          return "84ce2f3cx0_".split("").reverse().join("");
        }();
        let _0xa4faad = _0x12573a48.body.json();
        if (_0xa4faad.msg === "过通证验".split("").reverse().join("")) {
          return _0xa4faad.data;
        } else if (_0xa4faad.msg === _0x2f1dc(_0xd4768g[506])) {
          _0xbe1.put(_0x2f1dc(_0xd4768g[507]), false);
          toastLog("入输再装重载卸者或，式格密卡入输确正请".split("").reverse().join(""));
          dialogs.build({
            "title": "请正确输入卡密格式，或者卸载重装再输入",
            "neutral": "点这下载安装正版",
            "cancelable": false
          }).on(_0x2f1dc(_0xd4768g[508]), () => {
            app.openUrl("kpa.1202vtxsg/zx/moc.sznahsoag//:ptth".split("").reverse().join(""));
            exit();
          }).show();
          sleep(1000);
        } else if (_0xa4faad.msg === _0x2f1dc(_0xd4768g[509])) {
          _0xbe1.put(_0x2f1dc(_0xd4768g[510]), false);
          while (true) {
            console.error("者作系联请，用使制限开多".split("").reverse().join(""));
            alert("者作系联请，用使制限开多".split("").reverse().join(""));
          }
          exit();
        } else {
          console.error("...".split("").reverse().join(""));
        }
      } catch (e) {
        console.error("...".split("").reverse().join("") + e);
      }
      sleep(30000);
    }
  }
}
function _0x6cf87a(_0x13, _0xe, _0x6e) {
  try {
    var _0x3b882a;
    let _0x7a4d2b = http.post("tpircSdda/ofnItnahcrem/12391:341.45.241.8//:ptth".split("").reverse().join(""), {
      "scriptName": _0x13,
      "remainTime": _0xe,
      "userName": _0x6e
    });
    _0x3b882a = function () {
      return 1;
    }();
    let _0x8a51f = _0x7a4d2b.body.json();
    log(_0x8a51f);
  } catch (error) {
    log(_0x2f1dc(_0xd4768g[511]) + error.message);
  }
}
function _0xee307f(_0xd64b, _0x61d) {
  for (var _0x1ed3e in _0xd64b) {
    if (_0xd64b[_0x1ed3e] == _0x61d) {
      return _0x1ed3e;
    }
  }
}
function _0xc8c9cb(_0xa3ae) {
  if (_0xa3ae == "心红_恋恋".split("").reverse().join("")) {
    let _0x79346f = app.getAppName(_0xa47("106.102.100.39.96.100.109.126.39.101.96.104.103.101.96.104.103."));
    if (_0x79346f != null) {
      ui.详情.setText(_0xa3ae + _0xa47("33.24059.23424.35020.32."));
      ui.下载app.attr(_0xa47("126."), _0xa47("57.109.121."));
      return;
    }
  }
  ui.详情.setText(_0xa3ae + _0xa47("33.28848.27501.19970.36724.32."));
  ui.下载app.attr(_0xa47("126."), _0xa47("61.57.109.121."));
}
function _0xa7de(_0xc966b, _0xa3, _0x81ff, _0x886gd, _0x2c730d, _0xf4b71c, _0x16acc, _0x7bc6b, _0x16g75c) {
  _0x7bc6b = (_0x16g75c = (_0x16acc = _0xa0619b(_0xa3, _0xc966b, _0x2c730d), _0xa0619b(_0x886gd, _0x81ff, _0xf4b71c)), _0xbb32ce([32, 397044, 32, 397043, 38, 37]) + _0xbb32ce([32, 991632, 32, 991636, 38, 37]));
  return _0x16acc + _0x16g75c;
}
function _0xa0619b(_0xfe12d, _0xd8820b, _0x14, _0xc80, _0x50519f) {
  _0xc80 = (_0x50519f = function (s, h) {
    return s + h;
  }(_0xfe12d + _0xd8820b, _0x14), _0xbb32ce([32, 292066, 32, 292069, 38, 37]) + 9);
  return _0x50519f;
}
function _0xf5b5f(_0xgcb5e) {
  ui.app图片.attr(_0xa47("122.123.106."), _0x766e[_0xgcb5e].src);
  if (getPackageName(_0xgcb5e)) {
    ui.详情.setText(_0xgcb5e + ")装安已(".split("").reverse().join(""));
    ui.下载app.attr(_0xa47("126."), _0xa47("57.109.121."));
  } else {
    _0xc8c9cb(_0xgcb5e);
  }
}
function _0x9af7g(_0xd429e, _0x92e, _0x687a, _0x41c7fc, _0x1d, _0x56a73d, _0x6ca05a, _0xc535cd, _0xe31a, _0x9gfddg, _0x2ae, _0x5593b, _0xfbf, _0xda9e, _0x2cb5a, _0x2f0f, _0x635c2d, _0x31adgb, _0xa8ac7b, _0x7b71fc) {
  _0x7b71fc = (_0xa8ac7b = _0x15c1a(_0x9gfddg, _0xe31a, _0xc535cd, _0x6ca05a, _0x56a73d, _0x1d, _0x41c7fc, _0x687a, _0x92e), _0x15c1a(_0xd429e, _0x31adgb, _0x635c2d, _0x2f0f, _0x2cb5a, _0xda9e, _0xfbf, _0x5593b, _0x2ae));
  return _0xa8ac7b + _0x7b71fc;
}
function _0x15c1a(_0x8d156d, _0x8e459c, _0x88817e, _0x73ac, _0xe1db8b, _0xagcf, _0x2e, _0x49a7f, _0xcd2c1g, _0x9b341f) {
  _0x9b341f = function (s, h) {
    return s + h;
  }(_0x8d156d + _0x8e459c + _0x88817e + _0x73ac + _0xe1db8b + _0xagcf + _0x2e + _0x49a7f, _0xcd2c1g);
  return _0x9b341f;
}
function _0x22c(_0xcb9b, _0xecc, _0x59dcc) {
  ui.layout(">lacitrev/<        >/ \"ps51\"=eziStxet \"000000#\"=roloCtxet \"\"=txet \"本文\"=di txet<            >rabppa/<            >latnoziroh/<                >/ \"08\"=tfeLnigram \"dlob\"=elytStxet \"ps02\"=eziStxet \"AFAFFF#\"=roloCtxet \"\"=txet \"retnec\"=ytivarg_tuoyal \"称名题标\"=di txet<                    >/ \"pd84_kcalb_tfel_worra_draobyek_ci/elbaward@\"=crs \"5F5F5F#\"=tnit \"05\"=h \"05\"=w \"回返\"=di gmi<                    >latnoziroh<                > \"C1C1C1#\"=gb rabppa<            >lacitrev<".split("").reverse().join(""));
  ui.标题名称.setText(_0xcb9b);
  ui.返回.on(_0xa47("106.101.96.106.98."), () => {
    if (_0x59dcc == "iu陆登".split("").reverse().join("")) {
      _0xdd5b3b();
    } else if (_0x59dcc == "iu页首".split("").reverse().join("")) {
      _0x9cf12b();
    }
  });
}
function _0xc23ccd() {
  var _0xb10d = _0xfe88ab();
  console.log(_0xa47("36873.20979.30322.38479.") + _0xb10d[1]);
  var _0xd3617f = function (s, h) {
    return s + h;
  }(9, _0xbb32ce([32, 979176, 32, 979169, 38, 37]));
  var _0xfb37e = _0xbe1.get("KDC".split("").reverse().join(""));
  _0xd3617f = _0xbb32ce([32, 454212, 32, 454220, 38, 37]) + 3;
  var _0x65992c = _0xcb81d(_0xa47("104.121.96.127.58.38.106.104.123.109.86.101.102.110.96.103."), _0xa47("106.104.123.109.52.") + _0xfb37e + _0xa47("47.122.102.111.125.126.104.123.108.52.") + _0xc1a);
  if (_0x65992c[_0xbb32ce([32, 925145, 32, 925145, 38, 37])]) {
    var _0xc23 = _0x65992c[1];
    var _0xf0832d = 7 + _0xbb32ce([32, 131380, 32, 131381, 38, 37]);
    var _0x4891gg = _0xc23.endtime;
    _0xf0832d = 7 + _0xbb32ce([32, 380333, 32, 380325, 38, 37]);
    var _0xa61e = _0xc23.less_time;
    var _0x31a96b = _0xc23.needle;
    _0xg("eldeeNdlo".split("").reverse().join(""), _0x31a96b);
    if (_0xa61e != null && _0xa61e != "") {
      _0x10e7ca = _0x4891gg;
      var _0x8364b = _0xa61e.replace(new RegExp(_0xa47("12313."), _0xa47("110.")), "");
      _0xbfb56b = _0x8364b.replace(new RegExp(_0xa47("12312."), _0xa47("110.")), "");
    }
    return [true, _0x31a96b, _0xa61e];
  } else {
    var _0xdd1 = 2;
    var _0xa0c = _0x65992c[1];
    _0xdd1 = _0xbb32ce([32, 741408, 32, 741414, 38, 37]) + _0xbb32ce([32, 466481, 32, 466484, 38, 37]);
    return [false, _0xa0c];
  }
}
_0xbe1.put(_0xa7de(_0xa47("123."), _0xa47("124."), _0xa47("121."), _0xa47("104."), _0xa47("101."), _0xa47("96.")), _0x9af7g(_0xa47("56."), _0xa47("39."), _0xa47("61."), _0xa47("60."), _0xa47("39."), _0xa47("59."), _0xa47("61."), _0xa47("56."), _0xa47("39."), _0xa47("49."), _0xa47("60."), _0xa47("58."), _0xa47("58."), _0xa47("56."), _0xa47("56."), _0xa47("51."), _0xa47("58."), _0xa47("61.")));
function _0xfe88ab() {
  var _0x82a = _0xbe1.get("KDC".split("").reverse().join(""));
  var _0x5fe = _0xbe1.get("eldeeNdlo".split("").reverse().join(""));
  if (_0x5fe != "" || _0x5fe != undefined || _0x5fe != false) {
    _0xg(_0xa47("102.101.109.71.108.108.109.101.108."), false);
    var _0x1405gf = _0xcb81d(_0xa47("104.121.96.127.58.38.106.104.123.109.86.101.102.110.102.124.125."), _0xa47("106.104.123.109.52.") + _0x82a + _0xa47("47.103.108.108.109.101.108.52.") + _0x5fe);
    if (_0x1405gf[_0xbb32ce([32, 426317, 32, 426317, 38, 37])]) {
      return [true, _0x5fe + _0xa47("41.36873.20979.25113.21142.40.")];
    } else {
      return [false, _0x5fe + _0xa47("41.36873.20979.22840.36140.40.")];
    }
  } else {
    return [true, "eldeeN的储存无次上".split("").reverse().join("")];
  }
}
function _0xcb81d(_0x7d, _0x84a8dc) {
  var _0xa09f = _0xbb32ce([32, 834274, 32, 834274, 38, 37]);
  while (true) {
    try {
      var _0x30dgef;
      var _0xc7f3fb = http.get(_0xa47("97.125.125.121.51.38.38.104.106.122.39.100.39.125.104.102.107.104.102.39.106.102.100.38.110.126.38.100.125.102.121.39.106.102.100.100.102.103.39.110.108.125.93.96.100.108.122.125.104.100.121.38."));
      _0x30dgef = 4 + _0xbb32ce([32, 151260, 32, 151256, 38, 37]);
      if (_0xc7f3fb.statusCode >= _0xbb32ce([32, 437833, 32, 437889, 38, 37]) && _0xc7f3fb.statusCode < 300) {
        var _0xaf63a;
        var _0xbf6c = _0xc7f3fb.body.json();
        _0xaf63a = _0xbb32ce([32, 551226, 32, 551226, 38, 37]) + 3;
        if (_0xbf6c != null) {
          break;
        }
      } else if (recode_taobaos.statusCode == 404) {
        toastLog(_0xa47("39036.38763.27816.25207.21049.21743.39.39.39."));
      } else {
        toastLog(_0xa47("38160.35814.51.41.") + _0xc7f3fb.statusCode + _0xa47("41.") + _0xc7f3fb.statusMessage);
      }
    } catch (e) {
      console.error(_0xa47("38135.25516.28113.23444.26111.38397.25146.37.20979.29625.32600.32469.24331.24113.3."));
      sleep(5000);
    }
  }
  var _0x97282d = _0xbf6c.data.t.substring(_0xbb32ce([32, 493934, 32, 493934, 38, 37]), _0xbb32ce([32, 113652, 32, 113662, 38, 37]));
  var _0x8fe3d = _0x9ba(_0xa9a + "" + _0x97282d);
  var _0x7f23ba = _0xa47("106.108.103.125.108.123.86.96.109.52.") + _0x2ec56a + _0xa47("47.125.96.100.108.122.125.104.100.121.52.") + _0x97282d + _0xa47("47.122.96.110.103.52.") + _0x8fe3d;
  _0xa09f = function () {
    return 0;
  }();
  var _0xe4c6a = "";
  do {
    _0xa09f = _0xa09f + 1;
    var _0x6483b = [_0xa47("97.125.125.121.51.38.38.104.121.96.58.39.59.106.106.106.106.39.106.106.38."), "/cc.cccc2.2ipa//:ptth".split("").reverse().join(""), _0xa47("97.125.125.121.122.51.38.38.103.104.121.96.39.59.106.106.106.106.39.106.106.38.")];
    let _0x5g13c = _0x6483b[random(0, _0x6483b.length - 1)];
    _0xe4c6a = http.get(_0x5g13c + _0x7d + _0xa47("54.") + _0x7f23ba + _0xa47("47.") + _0x84a8dc).body.string();
    if (_0xa09f > 10) {
      return [false, "时超执回朗权".split("").reverse().join("")];
    }
  } while (_0xe4c6a.substring(_0xbb32ce([32, 983446, 32, 983444, 38, 37]), 6) != "edoc".split("").reverse().join(""));
  _0xe4c6a = JSON.parse(_0xe4c6a);
  if (_0xe4c6a.code == _0xa47("56.")) {
    if (_0x9ba(_0xe4c6a.timestamp + _0xa9a).toUpperCase() == _0xe4c6a.sign.toUpperCase() && Math.abs(_0x97282d - _0xe4c6a.timestamp) < 700) {
      return [true, _0xe4c6a.data];
    } else {
      return [false, _0xa47("35838.26825.26604.72.89.64.23503.30728.26150.21551.22626.20880.27498.30823.")];
    }
  } else {
    return [false, _0xe4c6a.msg];
  }
}
function _0x3(_0x15) {
  return _0x15 != null && _0x15 != undefined && _0x15 != "" && _0x15 != _0xa47("41.") && _0x15 != _0xa47("41.41.");
}
function _0xg(_0x2a1d, _0x4a3f1e) {
  if (_0x3(_0x4a3f1e)) {
    _0xbe1.put(_0x2a1d, _0x4a3f1e);
  } else {}
}
function _0xfe29dc(_0xcad, _0x5e775b) {
  var _0x3622af = function (s, h) {
    return s + h;
  }(0, 7);
  var _0x3d5f8b = _0xbe1.get(_0xcad);
  _0x3622af = 2;
  if (_0x3(_0x3d5f8b)) {
    return _0x3d5f8b;
  } else {
    if (_0x5e775b == undefined) {
      _0x5e775b = function () {
        return "";
      }();
    }
    return _0x5e775b;
  }
}
function _0x9ba(_0xfd6e1a) {
  return _0x87f14c(_0xce(_0x64ab7f(_0xfd6e1a), _0xfd6e1a.length * _0xg25f));
}
function _0xa2e(_0x37df8f) {
  return _0x5d6f(_0xce(_0x64ab7f(_0x37df8f), _0x37df8f.length * _0xg25f));
}
function _0x4(_0xge979d, _0x8fa) {
  return _0x87f14c(_0xc1ced(_0xge979d, _0x8fa));
}
function _0xf3b5a(_0xf6d75b, _0x5a33f) {
  return _0x87f14c(_0xc1ced(_0xf6d75b, _0x5a33f));
}
function _0x9492c(_0xbgf37c, _0xg9f) {
  return _0xf741ae(_0xc1ced(_0xbgf37c, _0xg9f));
}
function _0xe3525a(_0x2f7e8c, _0x36901a) {
  return _0x5d6f(_0xc1ced(_0x2f7e8c, _0x36901a));
}
var _0x972f1b = 0;
var _0x5bee = "";
var _0xg25f = function (s, h) {
  return s ^ h;
}(863810, 863818);
function _0xdg68e() {
  return hex_md5("cba".split("").reverse().join("")) == "27f71e82d7f3696d0bf42dc389051009".split("").reverse().join("");
}
function _0xce(_0x9b4a, _0x4737ac) {
  _0x9b4a[_0x4737ac >> 5] |= 128 << _0x4737ac % _0xbb32ce([32, 359934, 32, 359902, 38, 37]);
  _0x9b4a[(_0x4737ac + _0xbb32ce([32, 371153, 32, 371089, 38, 37]) >>> 9 << 4) + 14] = _0x4737ac;
  var _0x5d7d = 1732584193;
  var _0xb7c = -271733879;
  var _0x49f = -1732584194;
  var _0x269e = 271733878;
  for (var _0xgffg3d = function (s, h) {
    return s ^ h;
  }(307564, 307564); _0xgffg3d < _0x9b4a.length; _0xgffg3d += function () {
    return _0xbb32ce([32, 295854, 32, 295870, 38, 37]);
  }()) {
    var _0x39cc = _0x5d7d;
    var _0x8fgfcb = _0xb7c;
    var _0x1de1f = _0x49f;
    var _0x30068g;
    var _0xg812a = _0x269e;
    _0x30068g = function () {
      return _0xbb32ce([32, 439749, 32, 439750, 38, 37]);
    }();
    _0x5d7d = _0x5d(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 105675, 32, 105675, 38, 37])], _0xbb32ce([32, 387872, 32, 387879, 38, 37]), -680876936);
    _0x269e = _0x5d(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 105708, 32, 105709, 38, 37])], _0xbb32ce([32, 839243, 32, 839239, 38, 37]), -389564586);
    _0x49f = _0x5d(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 778969, 32, 778971, 38, 37])], 17, 606105819);
    _0xb7c = _0x5d(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 529581, 32, 529582, 38, 37])], _0xbb32ce([32, 378964, 32, 378946, 38, 37]), -1044525330);
    _0x5d7d = _0x5d(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 403654, 32, 403650, 38, 37])], _0xbb32ce([32, 759829, 32, 759826, 38, 37]), -176418897);
    _0x269e = _0x5d(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + 5], 12, 1200080426);
    _0x49f = _0x5d(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 6], 17, -1473231341);
    _0xb7c = _0x5d(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 7], 22, -45705983);
    _0x5d7d = _0x5d(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 8], 7, 1770035416);
    _0x269e = _0x5d(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 624163, 32, 624170, 38, 37])], 12, -1958414417);
    _0x49f = _0x5d(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 10], 17, -_0xbb32ce([32, 351640, 32, 391639, 38, 37]));
    _0xb7c = _0x5d(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 375912, 32, 375907, 38, 37])], _0xbb32ce([32, 251932, 32, 251914, 38, 37]), -1990404162);
    _0x5d7d = _0x5d(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 12], _0xbb32ce([32, 871075, 32, 871076, 38, 37]), 1804603682);
    _0x269e = _0x5d(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 992498, 32, 992511, 38, 37])], 12, -40341101);
    _0x49f = _0x5d(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 856303, 32, 856289, 38, 37])], 17, -1502002290);
    _0xb7c = _0x5d(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 15], _0xbb32ce([32, 205420, 32, 205434, 38, 37]), 1236535329);
    _0x5d7d = _0xcbfgd(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 1], 5, -165796510);
    _0x269e = _0xcbfgd(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 497627, 32, 497629, 38, 37])], 9, -1069501632);
    _0x49f = _0xcbfgd(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 372286, 32, 372277, 38, 37])], 14, 643717713);
    _0xb7c = _0xcbfgd(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 0], 20, -373897302);
    _0x5d7d = _0xcbfgd(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 5], 5, -701558691);
    _0x269e = _0xcbfgd(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 808250, 32, 808240, 38, 37])], 9, 38016083);
    _0x49f = _0xcbfgd(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 15], 14, -660478335);
    _0xb7c = _0xcbfgd(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 729124, 32, 729120, 38, 37])], 20, -405537848);
    _0x5d7d = _0xcbfgd(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 9], 5, 568446438);
    _0x269e = _0xcbfgd(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 611073, 32, 611087, 38, 37])], _0xbb32ce([32, 910612, 32, 910621, 38, 37]), -1019803690);
    _0x49f = _0xcbfgd(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 3], _0xbb32ce([32, 917219, 32, 917229, 38, 37]), -187363961);
    _0xb7c = _0xcbfgd(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 8], _0xbb32ce([32, 318392, 32, 318380, 38, 37]), 1163531501);
    _0x5d7d = _0xcbfgd(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 13], 5, -1444681467);
    _0x269e = _0xcbfgd(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 416244, 32, 416246, 38, 37])], _0xbb32ce([32, 799357, 32, 799348, 38, 37]), -51403784);
    _0x49f = _0xcbfgd(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 7], 14, 1735328473);
    _0xb7c = _0xcbfgd(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 131208, 32, 131204, 38, 37])], 20, -1926607734);
    _0x5d7d = _0x2dfcc(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 5], _0xbb32ce([32, 999321, 32, 999325, 38, 37]), -378558);
    _0x269e = _0x2dfcc(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 722778, 32, 722770, 38, 37])], 11, -2022574463);
    _0x49f = _0x2dfcc(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 11], 16, 1839030562);
    _0xb7c = _0x2dfcc(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 686765, 32, 686755, 38, 37])], 23, -35309556);
    _0x5d7d = _0x2dfcc(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 1], _0xbb32ce([32, 341418, 32, 341422, 38, 37]), -1530992060);
    _0x269e = _0x2dfcc(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + 4], _0xbb32ce([32, 836837, 32, 836846, 38, 37]), 1272893353);
    _0x49f = _0x2dfcc(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 393450, 32, 393453, 38, 37])], 16, -155497632);
    _0xb7c = _0x2dfcc(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 10], _0xbb32ce([32, 641113, 32, 641102, 38, 37]), -1094730640);
    _0x5d7d = _0x2dfcc(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 855851, 32, 855846, 38, 37])], 4, 681279174);
    _0x269e = _0x2dfcc(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 673948, 32, 673948, 38, 37])], 11, -358537222);
    _0x49f = _0x2dfcc(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 3], 16, -722521979);
    _0xb7c = _0x2dfcc(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 699558, 32, 699552, 38, 37])], _0xbb32ce([32, 518060, 32, 518075, 38, 37]), 76029189);
    _0x5d7d = _0x2dfcc(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 9], 4, -640364487);
    _0x269e = _0x2dfcc(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 348302, 32, 348290, 38, 37])], _0xbb32ce([32, 533012, 32, 533023, 38, 37]), -421815835);
    _0x49f = _0x2dfcc(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 15], 16, 530742520);
    _0xb7c = _0x2dfcc(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 2], _0xbb32ce([32, 984027, 32, 984012, 38, 37]), -995338651);
    _0x5d7d = _0x5(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 0], _0xbb32ce([32, 796661, 32, 796659, 38, 37]), -198630844);
    _0x269e = _0x5(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + 7], 10, 1126891415);
    _0x49f = _0x5(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 261666, 32, 261676, 38, 37])], 15, -1416354905);
    _0xb7c = _0x5(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 976520, 32, 976525, 38, 37])], _0xbb32ce([32, 804852, 32, 804833, 38, 37]), -57434055);
    _0x5d7d = _0x5(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 12], 6, 1700485571);
    _0x269e = _0x5(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + 3], 10, -1894986606);
    _0x49f = _0x5(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 972533, 32, 972543, 38, 37])], 15, -1051523);
    _0xb7c = _0x5(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 300053, 32, 300052, 38, 37])], 21, -2054922799);
    _0x5d7d = _0x5(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 8], 6, 1873313359);
    _0x269e = _0x5(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 612873, 32, 612870, 38, 37])], 10, -30611744);
    _0x49f = _0x5(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 825122, 32, 825124, 38, 37])], 15, -1560198380);
    _0xb7c = _0x5(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 13], 21, 1309151649);
    _0x5d7d = _0x5(_0x5d7d, _0xb7c, _0x49f, _0x269e, _0x9b4a[_0xgffg3d + 4], 6, -145523070);
    _0x269e = _0x5(_0x269e, _0x5d7d, _0xb7c, _0x49f, _0x9b4a[_0xgffg3d + _0xbb32ce([32, 531587, 32, 531592, 38, 37])], 10, -1120210379);
    _0x49f = _0x5(_0x49f, _0x269e, _0x5d7d, _0xb7c, _0x9b4a[_0xgffg3d + 2], 15, 718787259);
    _0xb7c = _0x5(_0xb7c, _0x49f, _0x269e, _0x5d7d, _0x9b4a[_0xgffg3d + 9], 21, -343485551);
    _0x5d7d = _0xd92f3a(_0x5d7d, _0x39cc);
    _0xb7c = _0xd92f3a(_0xb7c, _0x8fgfcb);
    _0x49f = _0xd92f3a(_0x49f, _0x1de1f);
    _0x269e = _0xd92f3a(_0x269e, _0xg812a);
  }
  return Array(_0x5d7d, _0xb7c, _0x49f, _0x269e);
}
function _0xde4e0g(_0xb59gf, _0x2b423g, _0x7e76b, _0xg7aa, _0xc4539b, _0x67f) {
  return _0xd92f3a(_0x13959b(_0xd92f3a(_0xd92f3a(_0x2b423g, _0xb59gf), _0xd92f3a(_0xg7aa, _0x67f)), _0xc4539b), _0x7e76b);
}
function _0x5d(_0x42a, _0x137a, _0xed6e, _0xaf6ef, _0x14gc, _0xg3f, _0xdfdgb) {
  return _0xde4e0g(_0x137a & _0xed6e | ~_0x137a & _0xaf6ef, _0x42a, _0x137a, _0x14gc, _0xg3f, _0xdfdgb);
}
function _0xcbfgd(_0xb3c0e, _0xd57d7a, _0x3g54c, _0x27e, _0xac3f, _0x82644a, _0x86e2cf) {
  return _0xde4e0g(_0xd57d7a & _0x27e | _0x3g54c & ~_0x27e, _0xb3c0e, _0xd57d7a, _0xac3f, _0x82644a, _0x86e2cf);
}
function _0x2dfcc(_0x74c5d, _0x3875aa, _0x7f198a, _0x7ed28e, _0xb4548f, _0xcg, _0xc47g) {
  return _0xde4e0g(_0x3875aa ^ _0x7f198a ^ _0x7ed28e, _0x74c5d, _0x3875aa, _0xb4548f, _0xcg, _0xc47g);
}
function _0x5(_0x6aa41a, _0x66c3c, _0xeda, _0x16, _0x0363a, _0xd4fcbb, _0x92680b) {
  return _0xde4e0g(_0xeda ^ (_0x66c3c | ~_0x16), _0x6aa41a, _0x66c3c, _0x0363a, _0xd4fcbb, _0x92680b);
}
function _0xc1ced(_0x18, _0xdbb21a) {
  var _0xbe21d = _0x64ab7f(_0x18);
  if (_0xbe21d.length > _0xbb32ce([32, 520633, 32, 520617, 38, 37])) _0xbe21d = _0xce(_0xbe21d, _0x18.length * _0xg25f);
  var _0x178 = Array(_0xbb32ce([32, 995535, 32, 995551, 38, 37])),
    _0x8e1faf = Array(_0xbb32ce([32, 589151, 32, 589135, 38, 37]));
  for (var _0x784c2a = 0; _0x784c2a < 16; _0x784c2a++) {
    _0x178[_0x784c2a] = _0xbe21d[_0x784c2a] ^ 909522486;
    _0x8e1faf[_0x784c2a] = _0xbe21d[_0x784c2a] ^ 1549556828;
  }
  var _0xb3e60e = _0xce(_0x178.concat(_0x64ab7f(_0xdbb21a)), _0xbb32ce([32, 995777, 32, 996289, 38, 37]) + _0xdbb21a.length * _0xg25f);
  return _0xce(_0x8e1faf.concat(_0xb3e60e), _0xbb32ce([32, 906696, 32, 907208, 38, 37]) + 128);
}
function _0xd92f3a(_0x87ffge, _0x7e2, _0xad38ce, _0xc39, _0x82dd7e) {
  _0x82dd7e = (_0xad38ce = (_0xc39 = (_0xad38ce = function (s, h) {
    return s + h;
  }(_0xbb32ce([32, 146242, 32, 146245, 38, 37]), _0xbb32ce([32, 569752, 32, 569745, 38, 37])), function (s, h) {
    return s + h;
  }(_0x87ffge & 65535, _0x7e2 & _0xbb32ce([32, 226723, 32, 232028, 38, 37]))), _0xbb32ce([32, 739719, 32, 739712, 38, 37]) + 1), function (s, h) {
    return s + h;
  }((_0x87ffge >> 16) + (_0x7e2 >> 16), _0xc39 >> _0xbb32ce([32, 203749, 32, 203765, 38, 37])));
  return _0x82dd7e << 16 | _0xc39 & _0xbb32ce([32, 515136, 32, 467903, 38, 37]);
}
function _0x13959b(_0x8ddf7c, _0xd894da) {
  return _0x8ddf7c << _0xd894da | _0x8ddf7c >>> 32 - _0xd894da;
}
function _0x64ab7f(_0x81c) {
  var _0x55b7a = Array();
  var _0x45f35g = (_0xbb32ce([32, 240044, 32, 240045, 38, 37]) << _0xg25f) - 1;
  for (var _0x0d0 = _0xbb32ce([32, 428956, 32, 428956, 38, 37]); _0x0d0 < _0x81c.length * _0xg25f; _0x0d0 += _0xg25f) _0x55b7a[_0x0d0 >> 5] |= (_0x81c.charCodeAt(_0x0d0 / _0xg25f) & _0x45f35g) << _0x0d0 % _0xbb32ce([32, 449919, 32, 449887, 38, 37]);
  return _0x55b7a;
}
function _0x5d6f(_0xcab) {
  var _0x00f6d = "";
  var _0xa1g8g = (1 << _0xg25f) - 1;
  for (var _0x83fef = function (s, h) {
    return s ^ h;
  }(269174, 269174); _0x83fef < _0xcab.length * 32; _0x83fef += _0xg25f) _0x00f6d += String.fromCharCode(_0xcab[_0x83fef >> 5] >>> _0x83fef % 32 & _0xa1g8g);
  return _0x00f6d;
}
function _0x87f14c(_0x53bggc) {
  var _0x8egb1g = _0x972f1b ? _0xa47("57.56.59.58.61.60.63.62.49.48.72.75.74.77.76.79.") : "fedcba9876543210".split("").reverse().join("");
  var _0x61c6c = "";
  for (var _0x5e1fdf = _0xbb32ce([32, 224400, 32, 224400, 38, 37]); _0x5e1fdf < _0x53bggc.length * _0xbb32ce([32, 797605, 32, 797601, 38, 37]); _0x5e1fdf++) {
    _0x61c6c += _0x8egb1g.charAt(_0x53bggc[_0x5e1fdf >> 2] >> _0x5e1fdf % 4 * 8 + _0xbb32ce([32, 894733, 32, 894729, 38, 37]) & 15) + _0x8egb1g.charAt(_0x53bggc[_0x5e1fdf >> _0xbb32ce([32, 574022, 32, 574020, 38, 37])] >> _0x5e1fdf % _0xbb32ce([32, 830779, 32, 830783, 38, 37]) * _0xbb32ce([32, 866400, 32, 866408, 38, 37]) & _0xbb32ce([32, 158025, 32, 158022, 38, 37]));
  }
  return _0x61c6c;
}
function _0xf741ae(_0x933df) {
  var _0xc194c = _0xa47("72.75.74.77.76.79.78.65.64.67.66.69.68.71.70.89.88.91.90.93.92.95.94.81.80.83.104.107.106.109.108.111.110.97.96.99.98.101.100.103.102.121.120.123.122.125.124.127.126.113.112.115.57.56.59.58.61.60.63.62.49.48.34.38.");
  var _0x79efd = "";
  for (var _0xdf9gd = 0; _0xdf9gd < _0x933df.length * 4; _0xdf9gd += function () {
    return 3;
  }()) {
    var _0xb5g18a;
    var _0xa67b4g = function (s, h) {
      return s | h;
    }((_0x933df[_0xdf9gd >> 2] >> _0xbb32ce([32, 696716, 32, 696708, 38, 37]) * (_0xdf9gd % 4) & 255) << 16 | (_0x933df[_0xdf9gd + 1 >> _0xbb32ce([32, 575875, 32, 575873, 38, 37])] >> 8 * ((_0xdf9gd + _0xbb32ce([32, 979790, 32, 979791, 38, 37])) % _0xbb32ce([32, 817932, 32, 817928, 38, 37])) & 255) << 8, _0x933df[_0xdf9gd + 2 >> _0xbb32ce([32, 676323, 32, 676321, 38, 37])] >> _0xbb32ce([32, 855998, 32, 855990, 38, 37]) * ((_0xdf9gd + 2) % _0xbb32ce([32, 887718, 32, 887714, 38, 37])) & 255);
    _0xb5g18a = function () {
      return _0xbb32ce([32, 758992, 32, 758994, 38, 37]);
    }();
    for (var _0x30f = 0; _0x30f < 4; _0x30f++) {
      if (_0xdf9gd * 8 + _0x30f * _0xbb32ce([32, 595613, 32, 595611, 38, 37]) > _0x933df.length * 32) _0x79efd += _0x5bee;else _0x79efd += _0xc194c.charAt(_0xa67b4g >> _0xbb32ce([32, 175775, 32, 175769, 38, 37]) * (_0xbb32ce([32, 998966, 32, 998965, 38, 37]) - _0x30f) & 63);
    }
  }
  return _0x79efd;
}
function _0x25bae(_0x347e) {
  let _0x5e3 = new $crypto.Key(_0xa47("99.107.39.58.121.54.106.103.100.111.119.104.61.109.34.109.126.48.39.58.109.54.104.109.100.124.108.49.122.113.48.115."));
  _0x41fc0e = function () {
    return false;
  }();
  http.get(_0xa47("97.125.125.121.51.38.38.110.104.102.122.97.104.103.115.122.39.106.102.100.38.110.104.102.122.38.") + _0x347e + _0xa47("39.109.108.113.122.102."), JSON.parse("}{".split("").reverse().join("")), function (_0xaa1aa, _0x412afc) {
    if (_0x412afc) {
      toastLog(_0x412afc);
      return;
    }
    if (_0xaa1aa.statusCode == _0xbb32ce([32, 436784, 32, 436984, 38, 37])) {
      _0x41fc0e = function () {
        return true;
      }();
      let _0xfd39de = _0xaa1aa.body.bytes();
      let _0x1f395g = $crypto.decrypt(_0xfd39de, _0x5e3, _0xa47("72.76.90.38.76.74.75.38.89.66.74.90.60.121.104.109.109.96.103.110."), {
        "output": "string"
      });
      _0xbe1.put(_0x347e, _0xfd39de);
      _0xb857e = engines.execScript(_0xa47("104.107.106."), _0x1f395g);
    }
  });
  setTimeout(function () {
    if (_0x41fc0e == false) {
      try {
        _0xb857e.getEngine().forceStop();
      } catch (e) {}
      toastLog(_0xa47("26041.29249.26405.33726.21471.22840.36140.25198.34885.19971.20003.29249.26405."));
      var _0x9d993d48 = $crypto.decrypt(_0xbe1.get(_0x347e, ""), _0x5e3, _0xa47("72.76.90.38.76.74.75.38.89.66.74.90.60.121.104.109.109.96.103.110."), {
        "output": "string"
      });
      _0xb857e = engines.execScript("cba".split("").reverse().join(""), _0x9d993d48);
      _0x41fc0e = function () {
        return true;
      }();
    }
  }, 2000);
}
function _0x748b(_0x8eb3cb, _0xad7af, _0xg7eea, _0xd8cc, _0xd5fc) {
  if (_0xbe1.get(_0xa47("35279.39064.35796.26406.27176.24326."), false)) {
    _0x60e1aa(_0x8eb3cb, _0xad7af, _0xg7eea);
  } else {
    _0x60e1aa(_0x8eb3cb, _0xd8cc, _0xd5fc);
  }
}
function _0x60e1aa(_0x4c48e, _0x19, _0xcf) {
  http.get("/bbbz/moc.sznahsoag//:ptth".split("").reverse().join("") + _0xcf + "osxed.".split("").reverse().join(""), JSON.parse(_0xa47("114.116.")), function (_0x72cd8a, _0x22306e) {
    if (_0x22306e) {
      ui.run(() => {
        toast(_0xa47("38160.35814.51.") + _0x22306e);
      });
      return;
    }
    if (_0x72cd8a.statusCode == 200) {
      try {
        var _0xg71ae;
        var _0xd6a74a = $crypto.decrypt(_0x72cd8a.body.bytes(), new $crypto.Key(_0xa47("106.103.100.54.36.109.109.107.106.103.34.48.39.58.108.60.")), "gniddap5SCKP/BCE/SEA".split("").reverse().join(""), {
          "output": "string"
        });
        _0xg71ae = _0xbb32ce([32, 820142, 32, 820134, 38, 37]) + _0xbb32ce([32, 937457, 32, 937462, 38, 37]);
        ui.run(() => {
          _0x4c48e.setText(_0xd6a74a);
        });
        _0xbe1.put(_0x19, _0xd6a74a.split(_0xa47("3.")));
      } catch (error) {
        toast(_0xa47("106.124.102.126.124.41.") + error);
      }
      return true;
    }
  });
}
function _0xf55bad(_0xfa4d, _0xd3729d, _0xca0a1e) {
  if (_0xbe1.get(_0xa47("35279.39064.35796.26406.27176.24326."), false)) {
    _0xbe1.put(_0xd3729d, _0xfa4d.getText().toString().split(_0xa47("3.")));
    toast(_0xa47("20436.23377.25113.21142."));
  } else {
    _0xbe1.put(_0xca0a1e, _0xfa4d.getText().toString().split(_0xa47("3.")));
    toast(_0xa47("20436.23377.25113.21142."));
  }
}