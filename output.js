//Tue Sep 30 2025 12:08:50 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var 脚本配置 = storages.create("jiaoben"),
  ispinglun = false,
  是否评论 = false,
  checkurl = "https://apiv2.fzlzi.com/";
let 匹配控件 = "",
  上一次作品标题 = "";
悬浮窗();
console.setCanInput(false);
console.setMaxLines(50);
checkApi();
console.log("脚本启动---评论养号v2");
console.log("打开小红书");
launchApp("小红书");
sleep(5000);
返回小红书首页();
console.log("开始运行脚本");
try {
  let weiyunurl1 = http.get("https://wqcsa.oss-cn-beijing.aliyuncs.com/check.txt", {
      "maxTry": 3,
      "timeout": 50000
    }),
    weixincontent1 = weiyunurl1.body.string();
  if (weixincontent1.includes("真的")) try {
    let kami = 脚本配置.get("卡密"),
      jiqima = device.getAndroidId(),
      yanzhengurl = http.get(checkurl + "api/index/start_api?type=yanghao&card=" + kami + "&jiqima=" + jiqima, {
        "maxTry": 3,
        "timeout": 50000
      }),
      yanzhengcontent = yanzhengurl.body.string();
    yanzhengcontent == "0" && (toastLog("卡密校验失败1"), exit());
  } catch (_0x236f6d) {
    toastLog("卡密校验失败2");
    exit();
  } else toastLog("启动失败2!!!"), exit();
} catch (_0x350229) {
  toastLog("启动失败1!!!");
  exit();
}
while (true) {
  脚本执行流程();
  sleep(1000);
  脚本配置.get("功能") == "1" && 点击坐标("首页");
  sleep(1000);
  let 休息时间 = 脚本配置.get("休息时间");
  if (休息时间 == "") {
    console.log("脚本执行完成");
    break;
  } else console.log("本轮任务完成，休息" + 休息时间 + "小时"), sleep(休息时间 * 3600 * 1000);
}
function 脚本执行流程() {
  sleep(5000);
  评论养号();
}
function 评论养号() {
  console.log("本次评论" + 脚本配置.get("评论数量") + "次");
  for (var _0x102904 = 0; _0x102904 < 脚本配置.get("评论数量"); _0x102904++) {
    let _0x40f526 = 脚本配置.get("功能");
    if (_0x40f526 == "0") {
      养号_搜索();
      sleep(2000);
      let _0x306587 = 脚本配置.get("搜索滑动"),
        _0x402542 = _0x306587.split("-"),
        _0x4e24a6 = _0x402542[0],
        _0x3a5995 = _0x402542[1],
        _0x3dc47e = random(parseInt(_0x4e24a6), parseInt(_0x3a5995));
      console.log("开始滑动" + _0x3dc47e + "次");
      for (cc = 0; cc < _0x3dc47e; cc++) {
        let _0x179e44 = Math.floor(Math.random() * 601) + 300;
        sml_move(400, 1800, 800, _0x179e44, 1000);
        sleep(1000);
      }
      console.log("滑动完成，随机进入作品");
      sleep(1000);
      while (true) {
        {
          sleep(1000);
          let _0x311811 = textMatches(/(.*前.*|.*-.*|.*天.*)/).visibleToUser().find();
          if (_0x311811.length > 0) {
            {
              let _0x6c9f49 = _0x311811.slice(2),
                _0x13a65c = _0x6c9f49[Math.floor(Math.random() * _0x6c9f49.length)];
              if (_0x13a65c) {
                {
                  console.log("找到并点击" + _0x13a65c.text());
                  let _0x42b6b2 = _0x13a65c.bounds();
                  click(_0x42b6b2.centerX(), _0x42b6b2.centerY());
                }
              } else {
                swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500);
                sleep(1000);
                console.log("没找到有效控件");
              }
              let _0xdfc335 = desc("分享").findOne(5000);
              if (_0xdfc335) {
                console.log("成功进入作品页");
                break;
              } else {
                let _0x5e62ae = desc("切换成悬浮窗").findOne(2000),
                  _0x207302 = desc("暂停").findOne(2000),
                  _0x2f87ab = text("全屏观看").findOne(2000);
                if (_0x5e62ae) console.log("直播页，返回"), back(), swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500), sleep(1000);else {
                  if (_0x207302) {
                    console.log("成功进入作品页(视频页)1");
                    break;
                  } else {
                    if (_0x2f87ab) {
                      console.log("成功进入作品页(视频页)2");
                      break;
                    } else swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500), console.log("点击作品失败，重试");
                  }
                }
                sleep(1000);
              }
            }
          } else {
            {
              let _0x469f51 = text("搜索").findOne(1000);
              if (_0x469f51) {
                {
                  let _0x5e345a = _0x469f51.bounds();
                  click(_0x5e345a.centerX(), _0x5e345a.centerY());
                  sleep(1000);
                }
              }
              sleep(1000);
              swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500);
              sleep(1000);
              console.log("没找到作品，重试");
            }
          }
        }
      }
    }
    if (_0x40f526 == "1") {
      {
        sleep(1000);
        let _0xcac7fb = Math.floor(Math.random() * 601) + 300;
        sml_move(400, 1800, 800, _0xcac7fb, 1000);
        sleep(1000);
        while (true) {
          sleep(1000);
          let _0x1e5ff0 = 脚本配置.get("匹配关键词");
          if (_0x1e5ff0.length < 1) 匹配控件 = descMatches(/(视频.*|笔记.*)/).visibleToUser().find();else {
            let _0xeb1467 = _0x1e5ff0.split("\n"),
              _0x480587 = "(.*" + _0xeb1467.join(".*|.*") + ".*)";
            匹配控件 = descMatches(_0x480587).visibleToUser().find();
          }
          if (匹配控件.length > 0) {
            {
              let _0x1cd153 = "";
              if (_0x1e5ff0.length < 1) {
                let _0x562a55 = 匹配控件.slice(2);
                _0x1cd153 = _0x562a55[Math.floor(Math.random() * _0x562a55.length)];
              } else _0x1cd153 = 匹配控件[Math.floor(Math.random() * 匹配控件.length)];
              if (_0x1cd153) {
                if (上一次作品标题 == _0x1cd153.desc()) {
                  {
                    console.log("该作品浏览过，跳过");
                    sleep(1000);
                    let _0x284551 = Math.floor(Math.random() * 601) + 300;
                    sml_move(400, 1800, 800, _0x284551, 1000);
                    sleep(1000);
                  }
                } else {
                  上一次作品标题 = _0x1cd153.desc();
                  console.log("找到并点击" + _0x1cd153.desc());
                  let _0xfc1196 = _0x1cd153.bounds();
                  click(_0xfc1196.centerX(), _0xfc1196.centerY());
                  sleep(1000);
                  let _0x413527 = desc("分享").findOne(5000);
                  if (_0x413527) {
                    {
                      console.log("成功进入作品页");
                      break;
                    }
                  } else {
                    {
                      let _0x3c87d3 = desc("切换成悬浮窗").findOne(2000),
                        _0x3b9d4e = desc("暂停").findOne(2000),
                        _0x405371 = text("全屏观看").findOne(2000);
                      if (_0x3c87d3) console.log("直播页，返回"), back(), swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500), sleep(1000);else {
                        if (_0x3b9d4e) {
                          {
                            console.log("成功进入作品页(视频页)1");
                            break;
                          }
                        } else {
                          if (_0x405371) {
                            {
                              console.log("成功进入作品页(视频页)2");
                              break;
                            }
                          } else swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500), console.log("点击作品失败，重试");
                        }
                      }
                      sleep(1000);
                    }
                  }
                }
              } else swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500), sleep(1000), console.log("没找到有效控件");
            }
          } else {
            {
              sleep(1000);
              let _0x1b7bcd = Math.floor(Math.random() * 601) + 300;
              sml_move(400, 1800, 800, _0x1b7bcd, 1000);
              sleep(1000);
              console.log("未找到符合条件的作品");
            }
          }
        }
      }
    }
    console.log("开始浏览作品");
    ispinglun = false;
    let _0xac48fe = 脚本配置.get("浏览时间"),
      _0x4e232c = _0xac48fe.split("-"),
      _0x31ed4d = _0x4e232c[0],
      _0x354f35 = _0x4e232c[1],
      _0x1d539d = random(parseInt(_0x31ed4d), parseInt(_0x354f35));
    var _0x1e90ec = _0x1d539d * 1000;
    let _0x5f0d2d = desc("暂停").findOnce(),
      _0x1d0ee2 = "";
    if (probability(脚本配置.get("评论概率"))) {
      {
        是否评论 = true;
        let _0x57bb91 = className("android.widget.TextView").find();
        for (let _0x1da940 = 0; _0x1da940 < _0x57bb91.length; _0x1da940++) {
          _0x1d0ee2 += _0x57bb91[_0x1da940].text() + "\n";
        }
      }
    } else 是否评论 = false;
    if (_0x5f0d2d) sleep(_0x1e90ec);else {
      {
        var _0x240098 = 3000,
          _0x55c3c7 = Math.floor(_0x1e90ec / _0x240098);
        for (var _0x1e2ad9 = 0; _0x1e2ad9 < _0x55c3c7; _0x1e2ad9++) {
          {
            let _0x2f1bcc = Math.floor(Math.random() * 601) + 300;
            sml_move(400, 1800, 800, _0x2f1bcc, 1000);
            sleep(_0x240098 - 1000);
            let _0x1256bb = 脚本配置.get("账号名字"),
              _0x1e2ee0 = text(_0x1256bb).findOnce();
            _0x1e2ee0 && (ispinglun = true);
          }
        }
      }
    }
    if (probability(脚本配置.get("点赞概率"))) {
      {
        console.log("开始点赞");
        let _0x53a5b6 = descMatches(/(点赞.*)/).visibleToUser().find();
        if (_0x53a5b6.empty()) console.log("没找到点赞按钮");else {
          if (_0x5f0d2d) {
            console.log("开始点赞1");
            let _0x10bcb3 = _0x53a5b6[0].bounds();
            click(_0x10bcb3.centerX(), _0x10bcb3.centerY());
          } else console.log("开始点赞2"), _0x53a5b6.forEach(function (_0x152c12) {
            let _0x195e47 = _0x152c12.bounds(),
              _0x20fa3e = className("android.widget.LinearLayout").findOnce().bounds().bottom;
            _0x195e47.bottom === _0x20fa3e && click(_0x195e47.centerX(), _0x195e47.centerY());
          });
        }
        sleep(3000);
      }
    }
    probability(脚本配置.get("关注概率")) && (console.log("开始关注"), 点击坐标("关注"), sleep(3000));
    if (probability(脚本配置.get("收藏概率"))) {
      {
        console.log("开始收藏");
        let _0x36bd0b = descMatches(/(收藏.*)/).findOne(5000);
        if (_0x36bd0b) {
          console.log("找到并点击收藏");
          let _0x352621 = _0x36bd0b.bounds();
          click(_0x352621.centerX(), _0x352621.centerY());
        } else console.log("没找收藏的坐标");
        sleep(6000);
      }
    }
    if (是否评论) {
      {
        let _0x5aebbf = 脚本配置.get("账号名字");
        if (_0x5aebbf == "") {
          console.log("开始评论1");
          发送评论(_0x1d0ee2);
        } else ispinglun ? console.log("已经评论过,返回") : (console.log("开始评论2"), 发送评论(_0x1d0ee2));
      }
    }
    返回小红书首页();
    let _0x5b8727 = 脚本配置.get("评论完延迟"),
      _0x23b8ef = _0x5b8727.split("-"),
      _0x4d77db = _0x23b8ef[0],
      _0x1b5246 = _0x23b8ef[1],
      _0x442f2e = random(parseInt(_0x4d77db), parseInt(_0x1b5246));
    console.log("本次任务完成,休息" + _0x442f2e + "秒");
    sleep(_0x442f2e * 1000);
  }
}
function 发送评论(_0x1c77ce) {
  let _0x49013f = "";
  if (脚本配置.get("ai评论")) {
    _0x49013f = ai写评论(_0x1c77ce);
  } else {
    {
      let _0x3fbd72 = 脚本配置.get("评论内容"),
        _0x55d624 = _0x3fbd72.split("----");
      _0x49013f = _0x55d624[Math.floor(Math.random() * _0x55d624.length)];
    }
  }
  点击坐标("说点什么...");
  sleep(1000);
  console.log("评论内容：" + _0x49013f);
  setText(_0x49013f);
  sleep(1000);
  let _0x4c213c = 脚本配置.get("评论带表情");
  if (_0x4c213c) {
    console.log("开始选择第一个表情包");
    let _0x20c370 = className("android.widget.ImageView").drawingOrder(3).findOnce();
    if (_0x20c370) {
      {
        _0x20c370.click();
        console.log("点击表情按钮");
        sleep(1000);
        let _0x1f1958 = className("androidx.appcompat.app.ActionBar$Tab").find();
        if (_0x1f1958.length > 0) {
          {
            _0x1f1958[1].click();
            sleep(1000);
            console.log("点击我收藏的表情包");
            let _0x4bf3ee = className("androidx.recyclerview.widget.RecyclerView").find();
            if (_0x4bf3ee.length >= 3) {
              let _0x3dfdd9 = _0x4bf3ee[1],
                _0x4357fb = _0x3dfdd9.children();
              if (_0x4357fb.length >= 3) {
                let _0x58a7a5 = _0x4357fb[2],
                  _0x48f7fe = _0x58a7a5.bounds();
                click(_0x48f7fe.centerX(), _0x48f7fe.centerY());
              } else console.log("控件格式错误,可能不存在表情包");
              console.log("点击第1个表情");
            } else console.log("控件格式错误");
          }
        } else console.log("未找到收藏表情的按钮");
      }
    } else console.log("未找到表情按钮");
  }
  sleep(1000);
  点击坐标("发送");
  sleep(1000);
}
function 养号_搜索() {
  let _0x249a29 = 脚本配置.get("搜索关键词"),
    _0x478bbd = _0x249a29.split("\n"),
    _0x248726 = _0x478bbd[Math.floor(Math.random() * _0x478bbd.length)];
  while (true) {
    {
      点击坐标desc("搜索");
      let _0x569b16 = text("猜你想搜").findOne(20000);
      if (_0x569b16) break;else 返回小红书首页(), sleep(1000);
    }
  }
  console.log("搜索关键词：" + _0x248726);
  setText(_0x248726);
  sleep(1000);
  点击坐标("搜索");
  sleep(3000);
  let _0x46a421 = 脚本配置.get("笔记类型");
  console.log("笔记类型：" + _0x46a421);
  if (_0x46a421 == 0) {} else {
    隐藏悬浮窗();
    console.log("点击筛选笔记类型");
    !点击坐标("筛选") && 点击坐标("全部");
    sleep(2000);
    if (_0x46a421 == 1) {
      {
        let _0x50aa29 = text("最新").visibleToUser().find();
        if (_0x50aa29) {
          {
            console.log("找到并点击最新的坐标");
            let _0x1fdfff = _0x50aa29[_0x50aa29.length - 1].bounds();
            click(_0x1fdfff.centerX(), _0x1fdfff.centerY());
          }
        } else {
          console.log("没找到最新的坐标");
        }
        sleep(5000);
        back();
      }
    }
    _0x46a421 == 2 && (点击坐标("最多点赞"), sleep(5000), back());
    _0x46a421 == 3 && (点击坐标("最多评论"), sleep(5000), back());
    _0x46a421 == 4 && (点击坐标("最多收藏"), sleep(5000), back());
    显示悬浮窗();
  }
}
function ai写评论(_0xbf6949) {
  console.log("开始获取Ai评论内容1");
  var _0x845d0e = checkurl + "api/index/aiComment";
  try {
    {
      var _0x10d31a = http.post(_0x845d0e, {
        "content": _0xbf6949
      }, {
        "maxTry": 3,
        "timeout": 50000
      });
      console.log("获取Ai评论成功");
      return _0x10d31a.body.string();
    }
  } catch (_0xb79957) {
    console.log(_0xb79957);
    toastLog("获取ai评论内容失败1");
  }
}
function 打开分身(_0x1d5e88) {
  var _0x5584b1 = text(_0x1d5e88).findOne(15000).parent().parent();
  if (_0x5584b1) {
    let _0x163d10 = _0x5584b1.bounds();
    click(_0x163d10.centerX(), _0x163d10.centerY());
    console.log("打开分身" + _0x1d5e88);
    点击坐标("打开应用");
    return;
  } else {
    console.log("没找" + _0x1d5e88 + "的坐标");
    return;
  }
}
function 点击坐标desc(_0x2738d2) {
  var _0x40831c = desc(_0x2738d2).findOne(10000);
  if (_0x40831c) {
    {
      console.log("找到并点击" + _0x2738d2);
      let _0x17fd74 = _0x40831c.bounds();
      click(_0x17fd74.centerX(), _0x17fd74.centerY());
      return true;
    }
  } else return console.log("没找到" + _0x2738d2 + "的坐标"), false;
}
function 点击坐标(_0x484568) {
  var _0x10ffec = text(_0x484568).findOne(10000);
  if (_0x10ffec) {
    {
      console.log("找到并点击" + _0x484568);
      let _0x58d8b7 = _0x10ffec.bounds();
      click(_0x58d8b7.centerX(), _0x58d8b7.centerY());
      return true;
    }
  } else return console.log("没找到" + _0x484568 + "的坐标"), false;
}
function 返回小红书首页() {
  console.log("返回小红书首页");
  while (true) {
    let _0x5a90c7 = desc("发现").findOnce();
    if (_0x5a90c7) {
      console.log("返回首页成功");
      break;
    } else back(), sleep(1500);
  }
}
function 返回搜索列表页() {
  console.log("返回搜索列表页");
  while (true) {
    let _0x13b7b1 = desc("拍照搜索").findOnce();
    if (_0x13b7b1) {
      {
        console.log("返回搜索列表页成功");
        break;
      }
    } else {
      back();
      sleep(1500);
    }
  }
}
function sml_move(_0x296359, _0x3bab45, _0x56bb00, _0x2a90e2, _0x360b2b) {
  var _0x52a8f0 = device.width,
    _0x18040e = device.height;
  _0x296359 = Math.round(_0x296359 * _0x52a8f0 / 1080);
  _0x3bab45 = Math.round(_0x3bab45 * _0x18040e / 2340);
  _0x56bb00 = Math.round(_0x56bb00 * _0x52a8f0 / 1080);
  _0x2a90e2 = Math.round(_0x2a90e2 * _0x18040e / 2340);
  var _0x2cca4f = [_0x360b2b],
    _0x3e08f3 = [{
      "x": _0x296359,
      "y": _0x3bab45
    }, {
      "x": random(_0x296359 - 100, _0x296359 + 100),
      "y": random(_0x3bab45, _0x3bab45 + 50)
    }, {
      "x": random(_0x56bb00 - 100, _0x56bb00 + 100),
      "y": random(_0x2a90e2, _0x2a90e2 + 50)
    }, {
      "x": _0x56bb00,
      "y": _0x2a90e2
    }];
  for (let _0x4f99f2 = 0; _0x4f99f2 < 1; _0x4f99f2 += 0.08) {
    {
      let _0x1fe733 = bezier_curves(_0x3e08f3, _0x4f99f2);
      _0x2cca4f.push([parseInt(_0x1fe733.x), parseInt(_0x1fe733.y)]);
    }
  }
  gesture.apply(null, _0x2cca4f);
}
function bezier_curves(_0x5a8c1c, _0x57dac2) {
  let _0x2b5a21 = 3 * (_0x5a8c1c[1].x - _0x5a8c1c[0].x),
    _0x2b9f41 = 3 * (_0x5a8c1c[2].x - _0x5a8c1c[1].x) - _0x2b5a21,
    _0x4f3d93 = _0x5a8c1c[3].x - _0x5a8c1c[0].x - _0x2b5a21 - _0x2b9f41,
    _0x394080 = 3 * (_0x5a8c1c[1].y - _0x5a8c1c[0].y),
    _0x141451 = 3 * (_0x5a8c1c[2].y - _0x5a8c1c[1].y) - _0x394080,
    _0x2d60cd = _0x5a8c1c[3].y - _0x5a8c1c[0].y - _0x394080 - _0x141451,
    _0x3d3910 = _0x57dac2 * _0x57dac2,
    _0x25ba16 = _0x3d3910 * _0x57dac2;
  return {
    "x": _0x4f3d93 * _0x25ba16 + _0x2b9f41 * _0x3d3910 + _0x2b5a21 * _0x57dac2 + _0x5a8c1c[0].x,
    "y": _0x2d60cd * _0x25ba16 + _0x141451 * _0x3d3910 + _0x394080 * _0x57dac2 + _0x5a8c1c[0].y
  };
}
function 悬浮窗() {
  let _0x4a6da1 = "<vertical paddingLeft=\"15\" paddingRight=\"15\" bg=\"#95000000\" h=\"{{Math.round(device.height / 15)}}\" w=\"{{Math.round(device.width / 4)}}\">                <com.huaweiii.huawei.core.console.ConsoleView id=\"console\"/>            </vertical>";
  win = floaty.rawWindow(_0x4a6da1);
  win.setTouchable(false);
  win.setPosition(65, 150);
  win.console.setConsole(runtime.console);
  let _0x4bad80 = "<vertical h=\"{{Math.round(device.height / 15)}}\" w=\"{{Math.round(device.width / 50)}}\" alpha=\"0.5\">            <text layout_weight=\"5\" id=\"jiesu\" textStyle=\"bold\" gravity=\"center\" text=\"结束\" textColor=\"#ffffff\" bg=\"#03001c\" />            <text layout_weight=\"5\" id=\"yincang\" textStyle=\"bold\" gravity=\"center\"  text=\"隐藏\" textColor=\"#ffffff\" bg=\"#03001c\" />        </vertical>";
  win1 = floaty.rawWindow(_0x4bad80);
  win1.setTouchable(true);
  win1.setPosition(0, 150);
  setInterval(() => {}, 1000);
  win1.jiesu.click(() => {
    toastLog("手动结束脚本");
    exit();
  });
  win1.yincang.click(() => {
    ui.run(() => {
      if (win1.yincang.text() == "隐藏") win.setPosition(3000, 3000), win1.yincang.setText("显示");else win1.yincang.text() == "显示" && (win1.yincang.setText("隐藏"), win.setPosition(65, 150));
    });
  });
}
function 隐藏悬浮窗() {
  win.setPosition(3000, 3000);
  win1.yincang.setText("显示");
}
function 显示悬浮窗() {
  win.setPosition(65, 150);
  win1.yincang.setText("隐藏");
}
function probability(_0x453156) {
  const _0x29ebf2 = Math.random() * 100;
  return _0x29ebf2 <= _0x453156 ? true : false;
}
function checkApi() {
  try {
    let _0x34f6ea = http.get("https://wqcsa.oss-cn-beijing.aliyuncs.com/check.txt", {
        "maxTry": 3,
        "timeout": 50000
      }),
      _0x4c61b7 = _0x34f6ea.body.string();
    if (_0x4c61b7.includes("真的")) {} else toastLog("启动失败2!!!"), exit();
  } catch (_0x429120) {
    toastLog("启动失败1!!!");
    exit();
  }
}