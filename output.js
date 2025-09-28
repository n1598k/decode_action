//Sun Sep 28 2025 04:06:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var 脚本配置 = storages.create("jiaoben");
let 监控_滑动次数 = 脚本配置.get("监控_滑动次数"),
  监控_滑动次数数组 = 监控_滑动次数.split("-"),
  监控_滑动次数1 = 监控_滑动次数数组[0],
  监控_滑动次数2 = 监控_滑动次数数组[1],
  监控_滑动次数3 = random(parseInt(监控_滑动次数1), parseInt(监控_滑动次数2)),
  maxScrollAttempts = 监控_滑动次数3,
  scrollAttempts = 1;
悬浮窗();
console.setCanInput(false);
console.setMaxLines(50);
checkApi();
console.log("脚本启动---笔记监控v2");
console.log("打开小红书");
launchApp("小红书");
sleep(5000);
返回小红书首页();
console.log("开始运行脚本");
try {
  let weiyunurl = http.get("https://wqcsa.oss-cn-beijing.aliyuncs.com/check.txt", {
      "maxTry": 3,
      "timeout": 50000
    }),
    weixincontent = weiyunurl.body.string();
  if (weixincontent.includes("真的")) try {
    let kami = 脚本配置.get("卡密"),
      jiqima = device.getAndroidId(),
      yanzhengurl = http.get("https://apiv2.fzlzi.com/api/index/start_api?type=jiankong&card=" + kami + "&jiqima=" + jiqima, {
        "maxTry": 3,
        "timeout": 50000
      }),
      yanzhengcontent = yanzhengurl.body.string();
    yanzhengcontent == "0" && (toastLog("卡密校验失败1"), exit());
  } catch (_0x3d641a) {
    toastLog("卡密校验失败2");
    exit();
  } else toastLog("启动失败2!!!"), exit();
} catch (_0x439b57) {
  toastLog("启动失败1!!!");
  exit();
}
while (true) {
  脚本执行流程();
  返回小红书首页();
  let 休息时间 = 脚本配置.get("监控_循环时间");
  console.log("本轮任务完成，休息" + 休息时间 + "分钟");
  sleep(休息时间 * 60 * 1000);
}
function 脚本执行流程() {
  sleep(2000);
  let _0x53bdb3 = 脚本配置.get("监控_笔记链接"),
    _0x34c771 = _0x53bdb3.split("\n");
  for (let _0x4cbc85 = 0; _0x4cbc85 < _0x34c771.length; _0x4cbc85++) {
    {
      scrollAttempts = 1;
      console.log("打开笔记：" + _0x34c771[_0x4cbc85]);
      app.startActivity({
        "data": "xhsdiscover://extweb?link=" + _0x34c771[_0x4cbc85]
      });
      let _0xf27f6a = descMatches(/(分享|暂停)/).findOne(10000);
      if (_0xf27f6a) {
        console.log("打开笔记成功");
        sleep(1000);
        let _0x214f5b = descMatches(/(评论0|评论 0)/).findOnce();
        if (_0x214f5b) {
          console.log("没有评论,跳过");
          continue;
        }
        let _0x229ed4 = desc("暂停").findOnce();
        if (_0x229ed4) {
          console.log("是视频");
          let _0x383f2c = descMatches(/(评论.*$)/).findOnce(),
            _0x33020c = _0x383f2c.bounds();
          click(_0x33020c.centerX(), _0x33020c.centerY());
          sleep(1000);
          视频页展开评论();
        } else console.log("是图文");
        console.log("笔记正常,开始执行" + maxScrollAttempts);
        while (scrollAttempts < maxScrollAttempts) {
          console.log("开始寻找评论");
          sleep(1000);
          console.log("寻找评论中...");
          if (findAndClickUnrepliedComment()) {} else {
            {
              console.log("第" + scrollAttempts + "次滑动");
              let _0x2dfb1a = Math.floor(Math.random() * 601) + 300;
              sml_move(400, 1800, 800, _0x2dfb1a, 1000);
              sleep(1000);
              _0x229ed4 && 视频页展开评论();
              scrollAttempts++;
            }
          }
          let _0x1dfac0 = 脚本配置.get("监控_回复完延迟"),
            _0x1d067d = _0x1dfac0.split("-"),
            _0x2746ae = _0x1d067d[0],
            _0x5d5a63 = _0x1d067d[1],
            _0x510eff = random(parseInt(_0x2746ae), parseInt(_0x5d5a63));
          sleep(_0x510eff * 1000);
        }
        scrollAttempts >= maxScrollAttempts && console.log("本笔记执行完成");
        sleep(1000);
        返回小红书首页();
        sleep(1000);
      }
    }
  }
}
function 视频页展开评论() {
  let _0x2ca6de = textMatches(/(展开.*条回复$)/).find();
  for (let _0x492df6 = 0; _0x492df6 < _0x2ca6de.length; _0x492df6++) {
    _0x2ca6de[_0x492df6].parent().click();
  }
  sleep(2000);
}
function findAndClickUnrepliedComment() {
  let _0x4fc607 = className("android.widget.TextView").visibleToUser().find().filter(_0x374d63 => {
    return _0x374d63.text().includes("回复");
  });
  if (_0x4fc607.length == 1) {
    console.log("屏幕上只有一条评论,防止Bug滑动一次");
    let _0xd191af = Math.floor(Math.random() * 601) + 300;
    sml_move(400, 1800, 800, _0xd191af, 1000);
    sleep(1000);
  }
  if (_0x4fc607.length > 2) {
    if (_0x4fc607[_0x4fc607.length - 1].bounds().left > 220 && _0x4fc607[_0x4fc607.length - 1].bounds().left < 270) {} else {
      {
        let _0xf6582b = text("- 到底了 -").findOnce();
        _0xf6582b ? console.log("到底了") : _0x4fc607 = _0x4fc607.slice(0, -1);
      }
    }
  }
  for (let _0x3348fb = 0; _0x3348fb < _0x4fc607.length; _0x3348fb++) {
    let _0x497a48 = _0x4fc607[_0x3348fb],
      _0x5967d8 = _0x497a48.bounds();
    if (_0x5967d8.left > 140 && _0x5967d8.left < 200) {
      let _0x4dc879 = _0x4fc607[_0x3348fb + 1];
      if (_0x4dc879) {
        {
          let _0x53e384 = _0x4dc879.bounds();
          if (_0x53e384.left > 220 && _0x53e384.left < 270) continue;
        }
      }
      console.log("找到未回复的评论，正在点击...");
      click(_0x497a48.bounds().centerX() - 300, _0x497a48.bounds().centerY() + 40);
      sleep(2000);
      let _0x110b39 = 脚本配置.get("监控_评论内容"),
        _0x4de767 = _0x110b39.split("----");
      评论内容随机 = _0x4de767[Math.floor(Math.random() * _0x4de767.length)];
      console.log("评论内容：" + 评论内容随机);
      setText(评论内容随机);
      sleep(1000);
      点击坐标("发送");
      console.log("发送成功,休息5秒");
      sleep(2000);
      sleep(3000);
      return true;
    }
  }
  return false;
}
function 点击坐标desc(_0x4468e1) {
  var _0x21b3d5 = desc(_0x4468e1).findOne(10000);
  if (_0x21b3d5) {
    {
      console.log("找到并点击" + _0x4468e1);
      let _0x7d920d = _0x21b3d5.bounds();
      click(_0x7d920d.centerX(), _0x7d920d.centerY());
      return true;
    }
  } else return console.log("没找到" + _0x4468e1 + "的坐标"), false;
}
function 点击坐标(_0xbdb0e9) {
  var _0x2c3ec9 = text(_0xbdb0e9).findOne(10000);
  if (_0x2c3ec9) {
    {
      console.log("找到并点击" + _0xbdb0e9);
      let _0xf06e96 = _0x2c3ec9.bounds();
      click(_0xf06e96.centerX(), _0xf06e96.centerY());
      return true;
    }
  } else {
    console.log("没找到" + _0xbdb0e9 + "的坐标");
    return false;
  }
}
function 返回小红书首页() {
  console.log("返回小红书首页");
  while (true) {
    {
      let _0x3ea0bc = desc("发现").findOnce();
      if (_0x3ea0bc) {
        {
          console.log("返回首页成功");
          break;
        }
      } else {
        back();
        sleep(1500);
      }
    }
  }
}
function sml_move(_0x2827b2, _0xb88bca, _0x1936fd, _0x426cb8, _0x57c473) {
  var _0x2f227a = device.width,
    _0x170c1e = device.height;
  _0x2827b2 = Math.round(_0x2827b2 * _0x2f227a / 1080);
  _0xb88bca = Math.round(_0xb88bca * _0x170c1e / 2340);
  _0x1936fd = Math.round(_0x1936fd * _0x2f227a / 1080);
  _0x426cb8 = Math.round(_0x426cb8 * _0x170c1e / 2340);
  var _0xd68383 = [_0x57c473],
    _0x550fe8 = [{
      "x": _0x2827b2,
      "y": _0xb88bca
    }, {
      "x": random(_0x2827b2 - 100, _0x2827b2 + 100),
      "y": random(_0xb88bca, _0xb88bca + 50)
    }, {
      "x": random(_0x1936fd - 100, _0x1936fd + 100),
      "y": random(_0x426cb8, _0x426cb8 + 50)
    }, {
      "x": _0x1936fd,
      "y": _0x426cb8
    }];
  for (let _0x2b55e6 = 0; _0x2b55e6 < 1; _0x2b55e6 += 0.08) {
    let _0x9153b3 = bezier_curves(_0x550fe8, _0x2b55e6);
    _0xd68383.push([parseInt(_0x9153b3.x), parseInt(_0x9153b3.y)]);
  }
  gesture.apply(null, _0xd68383);
}
function bezier_curves(_0x4f2127, _0x346c30) {
  let _0x4740c0 = 3 * (_0x4f2127[1].x - _0x4f2127[0].x),
    _0x4a3b27 = 3 * (_0x4f2127[2].x - _0x4f2127[1].x) - _0x4740c0,
    _0x46f489 = _0x4f2127[3].x - _0x4f2127[0].x - _0x4740c0 - _0x4a3b27,
    _0x2401ea = 3 * (_0x4f2127[1].y - _0x4f2127[0].y),
    _0xc1ac71 = 3 * (_0x4f2127[2].y - _0x4f2127[1].y) - _0x2401ea,
    _0x1ba8cd = _0x4f2127[3].y - _0x4f2127[0].y - _0x2401ea - _0xc1ac71,
    _0x42e31d = _0x346c30 * _0x346c30,
    _0x526bb8 = _0x42e31d * _0x346c30;
  return {
    "x": _0x46f489 * _0x526bb8 + _0x4a3b27 * _0x42e31d + _0x4740c0 * _0x346c30 + _0x4f2127[0].x,
    "y": _0x1ba8cd * _0x526bb8 + _0xc1ac71 * _0x42e31d + _0x2401ea * _0x346c30 + _0x4f2127[0].y
  };
}
function 悬浮窗() {
  let _0x5811be = "<vertical paddingLeft=\"15\" paddingRight=\"15\" bg=\"#95000000\" h=\"{{Math.round(device.height / 15)}}\" w=\"{{Math.round(device.width / 4)}}\">                <com.huaweiii.huawei.core.console.ConsoleView id=\"console\"/>            </vertical>";
  win = floaty.rawWindow(_0x5811be);
  win.setTouchable(false);
  win.setPosition(65, 150);
  win.console.setConsole(runtime.console);
  let _0x38edc6 = "<vertical h=\"{{Math.round(device.height / 15)}}\" w=\"{{Math.round(device.width / 50)}}\" alpha=\"0.5\">            <text layout_weight=\"5\" id=\"jiesu\" textStyle=\"bold\" gravity=\"center\" text=\"结束\" textColor=\"#ffffff\" bg=\"#03001c\" />            <text layout_weight=\"5\" id=\"yincang\" textStyle=\"bold\" gravity=\"center\"  text=\"隐藏\" textColor=\"#ffffff\" bg=\"#03001c\" />        </vertical>";
  win1 = floaty.rawWindow(_0x38edc6);
  win1.setTouchable(true);
  win1.setPosition(0, 150);
  setInterval(() => {}, 1000);
  win1.jiesu.click(() => {
    toastLog("手动结束脚本");
    exit();
  });
  win1.yincang.click(() => {
    ui.run(() => {
      {
        if (win1.yincang.text() == "隐藏") {
          win.setPosition(3000, 3000);
          win1.yincang.setText("显示");
        } else win1.yincang.text() == "显示" && (win1.yincang.setText("隐藏"), win.setPosition(65, 150));
      }
    });
  });
}
function checkApi() {
  try {
    {
      let _0x192a09 = http.get("https://wqcsa.oss-cn-beijing.aliyuncs.com/check.txt", {
          "maxTry": 3,
          "timeout": 50000
        }),
        _0x261759 = _0x192a09.body.string();
      if (_0x261759.includes("真的")) {} else {
        toastLog("启动失败2!!!");
        exit();
      }
    }
  } catch (_0x3d517d) {
    toastLog("启动失败1!!!");
    exit();
  }
}