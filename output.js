//Wed Mar 25 2026 13:43:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  back_xy_home
} = require("./common");
var message = {
  "auto_monitor": function (_0x502560) {
    setting.auto_monitor = threads.start(function () {
      {
        if (_0x502560) {
          {
            let _0x624db2 = common.get_task_detail(_0x502560);
            setting.mesc = JSON.parse(_0x624db2.data.args);
            var _0x27a414 = setting.mesc;
          }
        } else {
          setting.mesc = JSON.parse(common.get_xytaskc().open_im);
          var _0x27a414 = setting.mesc;
        }
        if (_0x27a414.xy_dk) {
          setting.xy_dk = _0x27a414.xy_dk;
        } else {
          setting.xy_dk = "关";
        }
        if (setting.xy_dk == "主副轮流") {
          {
            setting.mesc.mi_double = "开";
            setting.xy_dk = "关";
          }
        }
        toastLog("开始获取消息回复配置");
        console.verbose(setting.mesc);
        console.verbose("消息监听间隔为" + setting.mesc.time_blank + "秒");
        if (setting.mesc.scenes == "开" && setting.mesc.scenes_group) {
          {
            console.verbose("setting.mesc.scenes_group：" + setting.mesc.scenes_group);
            var _0x112026 = http.post(setting.api_domain + "get_reply", {
              "access_token": setting.s.get("access_token"),
              "id": setting.mesc.scenes_group
            });
            setting.reply_scenes = _0x112026.body.json().data;
            console.log(setting.reply_scenes);
          }
        } else {
          {
            console.verbose("场景回复未设置");
          }
        }
        if (setting.mesc.word == "开") {
          {
            var _0x112026 = http.post(setting.api_domain + "get_reply_word", {
              "access_token": setting.s.get("access_token")
            });
            setting.reply_word = _0x112026.body.json().data;
            let _0x21749f = [];
            setting.reply_word.forEach(_0xd5f307 => {
              if (_0xd5f307.k.includes("#")) {
                {
                  let _0xc74b87 = _0xd5f307.k.split("#");
                  _0xc74b87.forEach(_0x5c79e5 => {
                    if (_0x5c79e5) {
                      _0x21749f.push({
                        "id": _0xd5f307.id,
                        "u_id": _0xd5f307.u_id,
                        "k": _0x5c79e5,
                        "v": _0xd5f307.v
                      });
                    }
                  });
                }
              } else {
                {
                  _0x21749f.push(_0xd5f307);
                }
              }
            });
            setting.reply_word = _0x21749f;
            console.log(setting.reply_word);
          }
        }
        console.verbose("消息回复配置获取成功");
        common.xy_home();
        if (id("tab_title").className("TextView").text("消息").exists()) {
          common.enter_tab("消息");
          sleep(1000);
        }
        console.verbose("开始监听消息");
        while (true) {
          {
            sleep(setting.mesc.time_blank * 1000);
            sleep(random(1, 500));
            if (monitor()) {
              auto_reply();
              if (setting.mesc.web_replay == "开") {
                {
                  local_to_web();
                }
              }
              monitor_end();
            } else {
              web_to_local();
              if (setting.mesc.mi_double == "开" && setting.app_num == 2) {
                {
                  if (setting.xy_dk == "开") {
                    setting.xy_dk = "关";
                    console.warn("切换至主闲鱼");
                  } else {
                    setting.xy_dk = "开";
                    console.warn("切换至副闲鱼");
                  }
                  common.xy_home();
                  sleep(3000);
                  console.verbose("等待进入闲鱼消息列表...");
                  id("tab_title").text("消息").waitFor();
                  common.enter_tab("消息");
                  sleep(1000);
                }
              }
            }
          }
        }
      }
    });
  }
};
function monitor() {
  if (setting.task_runing) {
    sleep(3000);
    return false;
  }
  if (desc("清除未读").exists()) {
    {
      var _0x33621e = null;
      if (id("com.taobao.idlefish:id/msg_tag_debug_text_id").exists()) {
        let _0x238a40 = id("com.taobao.idlefish:id/msg_tag_debug_text_id").findOne().text();
        if (_0x238a40) {
          console.verbose("未读消息数：" + _0x238a40);
        } else {
          if (setting.auto_monitor_number % 120 == 0) {
            {
              console.verbose("清除非买家的未读消息");
              if (desc("清除未读").exists()) {
                desc("清除未读").findOne().click();
                sleep(500);
                text("确定").findOne().click();
                sleep(2000);
              }
            }
          }
        }
      }
      if (id("com.taobao.idlefish:id/tv_msg_unread").exists()) {
        if (descStartsWith("未读数").exists()) {
          let _0x2d6e94 = descStartsWith("未读数").findOne();
          _0x33621e = _0x2d6e94.parent();
        }
      }
      if (_0x33621e) {
        {
          console.verbose("准备点击进入消息详情");
          _0x33621e.click();
          sleep(2000);
          if (desc("通知消息").exists() || desc("互动消息").exists()) {
            console.verbose("通知消息_互动消息");
            back();
            sleep(2000);
          } else if (desc("闲鱼情报社").exists() || desc("卖家小助手").exists() || desc("会玩精选").exists()) {
            {
              console.verbose("服务号消息");
              back();
              sleep(2000);
            }
          } else if (descContains("粉丝抽奖活动").exists()) {
            console.verbose("粉丝抽奖活动");
            back();
            sleep(2000);
          } else if (text("闲小蜜").exists() && text("展开工具栏").exists()) {
            {
              console.verbose("进入闲小蜜客服界面1");
              back();
              sleep(2000);
            }
          } else if (desc("WVUCWebView").exists()) {
            console.verbose("进入闲小蜜客服界面2");
            back();
            sleep(2000);
          } else if (desc("卖货帮手").exists() || text("卖货帮手").exists()) {
            console.verbose("进入'卖货帮手'界面");
            back();
            sleep(2000);
          } else {
            makesure_goods();
            console.verbose("获取聊天界面depth");
            setting.im_dep = desc("更多").findOne().depth();
            return true;
          }
        }
      } else {
        if (setting.auto_monitor_number % 5 == 0) {
          {
            toast("消息监听中");
          }
        }
        if (setting.auto_monitor_number % 30 == 0) {
          toastLog("刷新消息");
          auto.clearCache();
          sleep(2000);
          common.my_swipe(device.width / 2, device.height * 35 / 100, device.width / 2, device.height * 65 / 100, 300);
          sleep(5000);
        }
        setting.auto_monitor_number++;
      }
      common.enter_tab("消息");
      common.enter_tab("消息");
      sleep(1200);
      return false;
    }
  } else if (id("com.wuba.zhuanzhuan:id/da0").exists()) {
    {
      console.verbose("转转监听");
      id("com.wuba.zhuanzhuan:id/da0").findOne().click();
      id("com.wuba.zhuanzhuan:id/da0").findOne().click();
      sleep(500);
      let _0x1343af = id("com.wuba.zhuanzhuan:id/f1o").find();
      let _0x3bc36e = "";
      for (let _0x5e2e75 = 0; _0x5e2e75 < _0x1343af.length; _0x5e2e75++) {
        let _0x15535b = _0x1343af[_0x5e2e75].text();
        if (["转转客服", "交易信息", "通知互动"].indexOf(_0x15535b) !== -1) {
          continue;
        }
        if (text(_0x15535b).findOne().parent().parent().find(id("com.wuba.zhuanzhuan:id/c6a")).length == 1) {
          console.verbose(_0x15535b);
          _0x3bc36e = _0x15535b;
          break;
        }
      }
      if (_0x3bc36e) {
        {
          let _0x39347b = text(_0x3bc36e).findOne().parent().parent().bounds();
          common.my_click(_0x39347b.centerX(), _0x39347b.bottom - 10);
          sleep(200);
          return true;
        }
      } else {
        {
          if (setting.auto_monitor_number % 5 == 0) {
            toast("转转消息监听中");
          }
          if (setting.auto_monitor_number % 50 == 0) {
            common.my_swipe(device.width / 2, device.height * 2 / 10, device.width / 2, device.height * 5 / 10, 200);
            sleep(2000);
          }
          setting.auto_monitor_number++;
        }
      }
      return false;
    }
  } else {
    {
      if (desc("互动消息").exists() && desc("返回").exists()) {
        back();
        sleep(2000);
        console.verbose("跳出活动消息页面...");
      }
      if (desc("通知消息").exists() && desc("返回").exists()) {
        {
          back();
          sleep(2000);
          console.verbose("跳出活动消息页面...");
        }
      }
      toastLog("进入闲鱼消息列表后，系统即开始监听消息");
      sleep(3600);
      return false;
    }
  }
}
function monitor_end() {
  while (common.xy_home_page_not_exists()) {
    console.verbose("不在闲鱼首屏");
    back();
    sleep(1000);
  }
  if (id("tab_title").className("TextView").text("消息").exists()) {
    {
      common.enter_tab("消息");
      sleep(1000);
    }
  }
  console.verbose("到达闲鱼首屏...");
}
function auto_reply() {
  sleep(500);
  if (id("com.wuba.zhuanzhuan:id/ad5").exists() || currentPackage() == setting.zz_pname) {
    common.zz_send(setting.reply_scenes.zz_lxk);
    while (!text("消息").exists()) {
      back();
      sleep(2000);
    }
    return true;
  }
  if (setting.mesc.word == "开" || setting.mesc.scenes == "开") {
    let _0x2681a4 = common.get_chat_record(4);
    setting.im_all_temp = _0x2681a4.all;
    var _0x1b8428 = _0x2681a4.left;
    var _0x33aac9 = _0x2681a4.right;
    toastLog("开始回复");
  } else {
    console.verbose("场景回复和关键词回复未开启");
  }
  var _0x2c703e = false;
  if (setting.mesc.hmd) {
    console.verbose("买家黑名单：" + setting.mesc.hmd);
    var _0x20a066 = common.get_uname_chatbox();
    var _0x43fedc = setting.mesc.hmd.split("#");
    for (let _0x2f12b3 = 0; _0x2f12b3 < _0x43fedc.length; _0x2f12b3++) {
      if (_0x43fedc[_0x2f12b3] && _0x20a066.indexOf(_0x43fedc[_0x2f12b3]) != -1) {
        console.warn(_0x20a066 + " 命中黑名单，跳过自动回复");
        _0x2c703e = true;
        break;
      }
    }
  }
  if (setting.mesc.word == "开" && _0x2c703e == false) {
    {
      console.verbose("关键词回复");
      var _0x5c1f85 = setting.reply_word;
      console.log("关键词自动回复内容：" + JSON.stringify(_0x5c1f85));
      if (_0x5c1f85) {
        _0x5c1f85.forEach(_0x94deb8 => {
          {
            _0x1b8428.forEach(_0x40fa9b => {
              if (_0x40fa9b.indexOf(_0x94deb8.k) > -1) {
                {
                  console.verbose("'" + _0x40fa9b + "' 匹配到关键词 '" + _0x94deb8.k + "'，开始检测是否已自动回复过");
                  var _0x14bde2 = _0x94deb8.v.split(/\n|#/);
                  var _0x53e86e = true;
                  _0x14bde2.forEach(_0x266755 => {
                    _0x33aac9.forEach(_0x4256b8 => {
                      if (_0x266755 == _0x4256b8) {
                        console.log("此关键词已自动回复...");
                        _0x53e86e = false;
                      }
                      if (_0x266755 == "««" + _0x4256b8 + "»»") {
                        console.log("此关键词已自动回复(编码内容)...");
                        _0x53e86e = false;
                      }
                    });
                  });
                  if (setting.mesc.repeat == "开") {
                    {
                      common.send(_0x94deb8.v);
                    }
                  } else if (_0x53e86e) {
                    common.send(_0x94deb8.v);
                  }
                }
              }
            });
          }
        });
      }
      sleep(500);
    }
  }
  if (setting.mesc.scenes == "开" && _0x2c703e == false) {
    console.verbose("场景回复");
    if (setting.mesc.mianpin == "开" && descContains("直接免拼").exists()) {
      {
        console.verbose("直接免拼");
        desc("直接免拼").findOne().click();
        sleep(1000);
        desc("确认").findOne().click();
        sleep(1000);
        desc("我知道了").findOne().click();
        sleep(1000);
      }
    }
    if (descContains("笔订单待付款").exists()) {
      {
        console.verbose("多笔订单，跳过场景回复");
      }
    } else if (descContains("退款详情").exists()) {
      console.verbose("宝贝发生退款");
    } else if (descContains("查看钱款").exists()) {
      console.verbose("宝贝退款完成");
    } else if (descContains("双方已完成评价\n").exists() || descContains("已完成互评").exists()) {
      {
        if (setting.reply_scenes && setting.reply_scenes.chakanpingjia) {
          {
            if (descContains("追加了评价\n").exists()) {
              console.verbose("已自动追评");
            } else {
              console.verbose("双方已评价，开始追评");
              if (descContains("已完成互评").exists()) {
                {
                  console.verbose("出现'已完成互评'");
                  desc("查看评价").findOne().click();
                  sleep(1000);
                  desc("追加评价").findOne().click();
                  sleep(1000);
                  var _0x3e2312 = setting.reply_scenes.chakanpingjia.split("\n")[0];
                  _0x3e2312 = _0x3e2312.split("#");
                  var _0xef2408 = Math.floor(Math.random() * _0x3e2312.length);
                  if (textStartsWith("聊聊本次交易感受").exists()) {
                    textStartsWith("聊聊本次交易感受").findOne().click();
                    sleep(500);
                  } else if (descStartsWith("匿名评价").exists()) {
                    {
                      let _0x31ef49 = descStartsWith("匿名评价").findOne().bounds();
                      common.my_click(_0x31ef49.centerX(), _0x31ef49.top + 150);
                      sleep(500);
                    }
                  } else {
                    console.warn("无法点击输入框");
                  }
                  setText(_0x3e2312[_0xef2408]);
                  sleep(500);
                  desc("发布").click();
                  sleep(6000);
                }
              } else {
                {
                  console.verbose("出现'双方已完成评价'");
                  descContains("双方已完成评价").click();
                  sleep(1000);
                  desc("追加评价").click();
                  sleep(1000);
                  var _0x3e2312 = setting.reply_scenes.chakanpingjia.split("\n")[0];
                  _0x3e2312 = _0x3e2312.split("#");
                  var _0xef2408 = Math.floor(Math.random() * _0x3e2312.length);
                  setText(_0x3e2312[_0xef2408]);
                  sleep(500);
                  id("publish_rate").click();
                  sleep(500);
                  text("确认").click();
                  sleep(500);
                }
              }
              back();
              sleep(500);
              return true;
            }
          }
        } else {
          console.warn("当前场景可自动追评，但您未设置追评内容，自动跳过");
        }
      }
    } else if (desc("去评价，按钮, 去评价").exists() && desc("去评价").exists()) {
      {
        if (setting.reply_scenes && setting.reply_scenes.pingjia) {
          {
            if (descContains("卖家已评价").exists()) {
              console.verbose("已自动评价");
            } else {
              console.log("交易成功，准备自动评价");
              desc("去评价").findOne().click();
              sleep(2000);
              common.haoping(setting.reply_scenes.pingjia);
              back();
              sleep(500);
              return true;
            }
          }
        } else {
          {
            console.warn("当前场景可自动评价，但您未设置评价内容，自动跳过");
          }
        }
      }
    } else if (className("android.view.View").desc("修改价格，按钮, 修改价格").exists()) {
      {
        if (setting.mesc.close_order == "开") {
          {
            toastLog("您已开启自动关闭订单");
            close_order();
          }
        }
        if (setting.reply_scenes && setting.reply_scenes.gaijia) {
          let _0x4a5eb0 = setting.reply_scenes.gaijia;
          console.log("等待买家付款场景");
          let _0x5df66d = [];
          if (_0x4a5eb0.indexOf("\n=====+=====\n") > -1) {
            {
              _0x5df66d = _0x4a5eb0.split("\n=====+=====\n");
            }
          } else {
            _0x5df66d = [_0x4a5eb0];
          }
          for (let _0x2f12b3 = 0; _0x2f12b3 < _0x5df66d.length; _0x2f12b3++) {
            let _0xf2280c = true;
            for (let _0xccc235 = 0; _0xccc235 < _0x33aac9.length; _0xccc235++) {
              if (_0x33aac9[_0xccc235] != "" && _0x5df66d[_0x2f12b3].indexOf(_0x33aac9[_0xccc235]) > -1) {
                _0xf2280c = false;
                break;
              }
            }
            if (_0xf2280c) {
              console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
              common.send(_0x5df66d[_0x2f12b3]);
              return true;
            } else {
              if (setting.mesc.repeat == "开") {
                {
                  console.verbose("重复回复为开启状态，准备再次进行场景回复");
                  console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
                  common.send(_0x5df66d[_0x2f12b3]);
                  return true;
                }
              } else {
                console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段已回复");
              }
            }
          }
          sleep(1000);
        }
        sleep(1000);
      }
    } else if (className("android.view.View").desc("去发货，按钮, 去发货").exists() || className("android.view.View").desc("去发货").exists()) {
      if (setting.reply_scenes && setting.reply_scenes.qufahuo) {
        {
          let _0x5794c4 = setting.reply_scenes.qufahuo;
          console.log("买家已付款场景");
          let _0x4f01fa = [];
          if (_0x5794c4.indexOf("\n=====+=====\n") > -1) {
            _0x4f01fa = _0x5794c4.split("\n=====+=====\n");
          } else {
            _0x4f01fa = [_0x5794c4];
          }
          var _0x1b4390 = false;
          for (let _0x2f12b3 = 0; _0x2f12b3 < _0x4f01fa.length; _0x2f12b3++) {
            {
              let _0xf2280c = true;
              for (let _0xccc235 = 0; _0xccc235 < _0x33aac9.length; _0xccc235++) {
                if (_0x33aac9[_0xccc235] != "" && _0x4f01fa[_0x2f12b3].indexOf(_0x33aac9[_0xccc235]) > -1) {
                  {
                    _0xf2280c = false;
                    break;
                  }
                }
              }
              if (_0xf2280c) {
                console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
                common.send(_0x4f01fa[_0x2f12b3]);
                _0x1b4390 = true;
                break;
              } else {
                {
                  if (setting.mesc.repeat == "开") {
                    console.verbose("重复回复为开启状态，准备再次进行场景回复");
                    console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
                    common.send(_0x4f01fa[_0x2f12b3]);
                    return true;
                  } else {
                    console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段已回复");
                  }
                }
              }
              if (_0x1b4390) {
                break;
              }
            }
          }
        }
      } else {
        toastLog("无买家已付款场景内容");
      }
      if (setting.mesc.close_order == "开") {
        toastLog("您已开启自动关闭订单");
        close_order();
        if (setting.mesc.auto_up == "开") {
          re_on(setting.mesc.im_dbt);
        }
      } else if (setting.mesc.virtual == "开") {
        toastLog("虚拟发货...");
        virtual();
        if (setting.yxp == 0) {
          console.verbose("鱼小铺未开启，重新上架");
          re_on("close");
        } else {
          {
            console.verbose("鱼小铺已开启，无需重新上架");
          }
        }
      } else {
        if (setting.mesc.auto_up == "开") {
          re_on(setting.mesc.im_dbt);
        }
      }
      sleep(1000);
    } else if (className("android.view.View").desc("提醒收货，按钮, 提醒收货").exists()) {
      if (setting.reply_scenes && setting.reply_scenes.tixingshouhuo) {
        let _0x2d394a = setting.reply_scenes.tixingshouhuo;
        let _0x435378 = desc("提醒收货，按钮, 提醒收货").findOne().bounds();
        common.my_click(_0x435378.centerX(), _0x435378.centerY());
        sleep(500);
        console.log("提醒买家收货场景");
        let _0x3a8b09 = [];
        if (_0x2d394a.indexOf("\n=====+=====\n") > -1) {
          {
            _0x3a8b09 = _0x2d394a.split("\n=====+=====\n");
          }
        } else {
          _0x3a8b09 = [_0x2d394a];
        }
        for (let _0x2f12b3 = 0; _0x2f12b3 < _0x3a8b09.length; _0x2f12b3++) {
          let _0xf2280c = true;
          for (let _0xccc235 = 0; _0xccc235 < _0x33aac9.length; _0xccc235++) {
            if (_0x33aac9[_0xccc235] != "" && _0x3a8b09[_0x2f12b3].indexOf(_0x33aac9[_0xccc235]) > -1) {
              _0xf2280c = false;
              break;
            }
          }
          if (_0xf2280c) {
            console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
            common.send(_0x3a8b09[_0x2f12b3]);
            return true;
          } else {
            {
              if (setting.mesc.repeat == "开") {
                console.verbose("重复回复为开启状态，准备再次进行场景回复");
                console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
                common.send(_0x3a8b09[_0x2f12b3]);
                return true;
              } else {
                {
                  console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段已回复");
                }
              }
            }
          }
        }
      }
      sleep(1000);
    } else if (!descStartsWith("卖家追加了评价").exists() && !descContains("卖家已评价").exists()) {
      if (descContains("交易关闭").exists()) {
        {
          console.verbose("该订单为已关闭订单，退出交易前聊一聊场景回复");
          return true;
        }
      }
      if (setting.reply_scenes && setting.reply_scenes.liaoyiliao) {
        let _0xcdf348 = setting.reply_scenes.liaoyiliao;
        console.verbose(_0xcdf348);
        console.log("交易前聊一聊场景");
        let _0x1066e = [];
        if (_0xcdf348.indexOf("\n=====+=====\n") > -1) {
          {
            _0x1066e = _0xcdf348.split("\n=====+=====\n");
          }
        } else {
          _0x1066e = [_0xcdf348];
        }
        for (let _0x2f12b3 = 0; _0x2f12b3 < _0x1066e.length; _0x2f12b3++) {
          {
            let _0xf2280c = true;
            for (let _0xccc235 = 0; _0xccc235 < _0x33aac9.length; _0xccc235++) {
              if (_0x33aac9[_0xccc235] != "" && _0x1066e[_0x2f12b3].indexOf(_0x33aac9[_0xccc235]) > -1) {
                _0xf2280c = false;
                break;
              }
            }
            if (_0xf2280c) {
              console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
              common.send(_0x1066e[_0x2f12b3]);
              return true;
            } else {
              if (setting.mesc.repeat == "开") {
                console.verbose("重复回复为开启状态，准备再次进行场景回复");
                console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段");
                common.send(_0x1066e[_0x2f12b3]);
                return true;
              } else {
                {
                  console.verbose("多段回复第" + (_0x2f12b3 + 1) + "段已回复");
                }
              }
            }
          }
        }
      }
      sleep(1000);
    } else {
      {
        console.verbose("未匹配到场景");
      }
    }
  } else {
    {
      console.warn("场景回复未开启，虚拟物品、卖出上架、关闭订单、自动评价等功能不可用");
    }
  }
  sleep(1000);
  while (true) {
    {
      sleep(1200);
      if (desc("语音按钮").exists() || desc("键盘按钮").exists()) {
        break;
      } else {
        console.verbose("语音按钮或键盘按钮不存在，返回");
        back();
        sleep(1000);
      }
    }
  }
}
function virtual() {
  console.verbose("开始虚拟发货");
  goods_title = common.get_title();
  var _0x3ef25d = setting.api_domain + "gTitle_get_gDetail";
  var _0x18c2e0 = http.post(_0x3ef25d, {
    "access_token": setting.s.get("access_token"),
    "title": goods_title.substring(0, 12)
  });
  let _0x32be71 = _0x18c2e0.body.json();
  if (_0x32be71.code == 0) {
    {
      let _0x376cf2 = _0x32be71.data.ykj_pan_content;
      console.verbose("通过宝贝标题的前12的字符搜索后得到以下宝贝信息：");
      console.verbose("=======");
      console.verbose("宝贝标题：" + _0x32be71.data.title);
      console.verbose("发货内容：\n" + _0x376cf2);
      console.verbose("=======");
      common.send(_0x376cf2);
      if (desc("去发货").clickable().exists()) {
        console.verbose("点击去发货");
        desc("去发货").clickable().findOne().click();
        sleep(1000);
      } else if (desc("去发货").clickable(false).exists()) {
        console.verbose("点击去发货2");
        let _0x194566 = desc("去发货").clickable(false).findOne().bounds();
        common.my_click(_0x194566.centerX(), _0x194566.centerY());
        sleep(1000);
      } else if (desc("去发货，按钮, 去发货").clickable(false).exists()) {
        {
          console.verbose("点击去发货3");
          let _0x2efed4 = desc("去发货，按钮, 去发货").clickable(false).findOne().bounds();
          common.my_click(_0x2efed4.centerX(), _0x2efed4.centerY());
          sleep(1000);
        }
      } else {
        {
          console.verbose("未找到\"去发货\"按钮");
        }
      }
      common.no_wuliu();
    }
  } else {
    {
      console.error(_0x32be71.msg);
    }
  }
}
function web_to_local() {
  if (setting.xy_dk == "关") {
    setting.message = setting.message_a;
    if (setting.message.length > 0) {
      {
        console.verbose("需发送给主闲鱼用户的消息：" + JSON.stringify(setting.message));
      }
    }
  } else {
    {
      setting.message = setting.message_b;
      if (setting.message.length > 0) {
        console.verbose("需发送给副闲鱼用户的消息：" + JSON.stringify(setting.message));
      }
    }
  }
  while (setting.message.length > 0) {
    common.back_xy_home();
    common.enter_tab("消息");
    console.verbose("发送到：" + setting.message[0].name);
    if (!desc(setting.message[0].name).exists()) {
      for (let _0xf83309 = 0; _0xf83309 < 9; _0xf83309++) {
        scrollUp(0);
        sleep(60);
      }
    }
    sleep(500);
    for (let _0x2f0c97 = 0; _0x2f0c97 < 9; _0x2f0c97++) {
      sleep(200);
      var _0x2462b1 = false;
      if (desc(setting.message[0].name).exists()) {
        desc(setting.message[0].name).findOne().parent().click();
        _0x2462b1 = true;
      } else {
        scrollDown(0);
      }
      if (_0x2462b1) {
        console.verbose("等待聊天界面加载完毕...");
        common.my_waitfor("想跟TA说点什么...");
        sleep(200);
        let _0x1f996b = setting.message[0].message;
        console.verbose("消息内容：" + _0x1f996b);
        if (_0x1f996b.substr(0, 6) == "price:") {
          {
            let _0xa40bae = Number(_0x1f996b.substring(6));
            toastLog("价格：" + _0xa40bae);
            sleep(500);
            for (let _0x2f0c97 = 0; _0x2f0c97 < 10; _0x2f0c97++) {
              if (desc("修改价格").exists()) {
                {
                  break;
                }
              }
              sleep(1200);
            }
            if (desc("修改价格，按钮, 修改价格").exists() || desc("修改价格").clickable(true).exists()) {
              if (desc("修改价格，按钮, 修改价格").exists()) {
                {
                  console.verbose("修改价格，按钮, 修改价格");
                  var _0x2159b6 = desc("修改价格，按钮, 修改价格").clickable(false).findOne().bounds();
                  common.my_click(_0x2159b6.centerX(), _0x2159b6.centerY());
                  sleep(2000);
                }
              } else {
                console.verbose("修改价格");
                desc("修改价格").clickable(true).findOne().click();
                sleep(2000);
              }
              console.log("等待修改价格运费页面加载...");
              if (id("et_price").exists()) {
                {
                  id("et_price").findOne().setText(_0xa40bae);
                  text("确认").findOne().click();
                  text("确定").waitFor();
                  sleep(500);
                  text("确定").findOne().click();
                }
              } else if (className("EditText").find().length == 2) {
                {
                  className("EditText").find()[0].click();
                  sleep(1000);
                  setText(_0xa40bae);
                  let _0x2325c1 = className("EditText").find()[1].bounds();
                  for (let _0x2f0c97 = 0; _0x2f0c97 <= 5; _0x2f0c97++) {
                    {
                      common.my_click(_0x2325c1.centerX(), _0x2325c1.centerY() + 160 + _0x2f0c97 * 50);
                      sleep(1000);
                      if (desc("确定").exists()) {
                        desc("确定").findOne().click();
                        break;
                      }
                    }
                  }
                }
              } else {
                console.error("获取改价页面信息时失败");
                sleep(1000000);
              }
              common.web_log("价格已修改为" + _0xa40bae, "success");
            } else {
              {
                console.warn("未发现修改价格按钮，无法改价");
                console.verbose(descStartsWith("修改价格").findOnce().desc());
              }
            }
          }
        } else if (_0x1f996b.substr(0, 5) == "fare:") {
          let _0x37c52e = Number(_0x1f996b.substring(5));
          toastLog("运费：" + _0x37c52e);
          sleep(500);
          for (let _0x2f0c97 = 0; _0x2f0c97 < 10; _0x2f0c97++) {
            if (desc("修改价格").exists()) {
              {
                break;
              }
            }
            sleep(1200);
          }
          if (desc("修改价格，按钮, 修改价格").exists() || desc("修改价格").clickable(true).exists()) {
            if (desc("修改价格，按钮, 修改价格").exists()) {
              console.verbose("修改价格，按钮, 修改价格");
              var _0x2159b6 = desc("修改价格，按钮, 修改价格").clickable(false).findOne().bounds();
              common.my_click(_0x2159b6.centerX(), _0x2159b6.centerY());
              sleep(2000);
            } else {
              {
                console.verbose("修改价格");
                desc("修改价格").clickable(true).findOne().click();
                sleep(2000);
              }
            }
            console.log("等待修改价格运费页面加载...");
            if (id("et_fare_price").exists()) {
              {
                id("et_fare_price").findOne().setText(_0x37c52e);
                text("确认").findOne().click();
                text("确定").waitFor();
                sleep(500);
                text("确定").findOne().click();
              }
            } else if (className("EditText").find().length == 2) {
              className("EditText").find()[1].click();
              sleep(1000);
              setText(_0x37c52e);
              let _0x2325c1 = className("EditText").find()[1].bounds();
              for (let _0x2f0c97 = 0; _0x2f0c97 <= 5; _0x2f0c97++) {
                common.my_click(_0x2325c1.centerX(), _0x2325c1.centerY() + 160 + _0x2f0c97 * 50);
                sleep(1000);
                if (desc("确定").exists()) {
                  desc("确定").findOne().click();
                  break;
                }
              }
            } else {
              console.error("获取改价页面信息时失败");
              sleep(1000000);
            }
            common.web_log("运费已修改为" + _0x37c52e, "success");
          } else {
            console.warn("未发现修改价格按钮，无法改价");
            console.verbose(descStartsWith("修改价格").findOnce().desc());
          }
        } else if (_0x1f996b == "close_order") {
          close_order();
        } else {
          {
            common.send(_0x1f996b);
          }
        }
        setting.message.splice(0, 1);
        while (!text("消息").id("center_text").exists() && !desc("消息").exists()) {
          back();
          sleep(1000);
        }
        break;
      }
    }
  }
  if (setting.xy_dk == "关") {
    setting.message_a = setting.message;
  } else {
    {
      setting.message_b = setting.message;
    }
  }
}
function local_to_web() {
  let _0x5ac0ce = [];
  for (let _0x5ba2a9 = 0; _0x5ba2a9 < setting.message.length; _0x5ba2a9++) {
    {
      if (setting.message[_0x5ba2a9].name == _0x207f44) {
        {
          if (setting.message[_0x5ba2a9].message.substr(0, 6) !== "price:" && setting.message[_0x5ba2a9].message.substr(0, 5) !== "fare:" && setting.message[_0x5ba2a9].message !== "close_order") {
            {
              let _0x39c387 = setting.message.splice([_0x5ba2a9], 1);
              _0x5ac0ce.push(_0x39c387[0].message);
            }
          }
        }
      }
    }
  }
  if (_0x5ac0ce.length !== 0) {
    {
      _0x5ac0ce.forEach(function (_0x27bb06) {
        common.send(_0x27bb06);
      });
    }
  }
  sleep(1000);
  if (setting.im_all_temp.length) {
    {
      im_all_end = common.get_chat_record(1).all;
      im_all = setting.im_all_temp.concat(im_all_end);
      setting.im_all_temp = [];
    }
  } else {
    {
      im_all = common.get_chat_record(4).all;
    }
  }
  if (setting.temp_img_bit) {
    let _0x5444fb = android.os.Environment;
    let _0x11537f = _0x5444fb.getExternalStoragePublicDirectory(_0x5444fb.DIRECTORY_DCIM).getAbsolutePath() + "/message_tmp/";
    files.create(_0x11537f);
    let _0x5b645e = _0x11537f + random(10, 99) + ".png";
    images.save(setting.temp_img_bit, _0x5b645e, "png", 100);
    console.verbose(_0x5b645e);
    var _0x276d2d = http.postMultipart(setting.api_domain + "upload_tmp_img", {
      "file": open(_0x5b645e)
    });
    let _0x42675c = _0x276d2d.body.json();
    let _0x31a5fb = _0x42675c.data.src;
    setting.message_temp_image.push(_0x31a5fb);
    files.removeDir(_0x11537f);
  }
  let _0x21b4e0 = "交易前聊一聊";
  if (descStartsWith("交易成功！").exists()) {
    _0x21b4e0 = "交易成功，未评价";
  } else if (className("android.view.View").desc("去评价").exists()) {
    {
      _0x21b4e0 = "交易成功，未评价";
    }
  } else if (descStartsWith("双方已完成评价").exists()) {
    _0x21b4e0 = "双方已完成评价";
  } else if (className("android.view.View").desc("查看评价").exists()) {
    {
      _0x21b4e0 = "已评价";
    }
  } else if (descContains("交易前聊一聊").exists()) {
    {
      _0x21b4e0 = "交易前聊一聊";
    }
  } else if (className("android.view.View").desc("修改价格").exists()) {
    _0x21b4e0 = "等待买家付款";
  } else if (className("android.view.View").desc("去发货").exists()) {
    _0x21b4e0 = "买家已付款";
  } else if (className("android.view.View").desc("提醒收货").exists()) {
    {
      _0x21b4e0 = "等待买家收货";
    }
  } else if (className("android.view.View").desc("退款详情").exists()) {
    _0x21b4e0 = "买家申请退款";
  } else if (className("android.view.View").desc("查看钱款").exists()) {
    _0x21b4e0 = "退款成功";
  }
  console.verbose("交易状态：" + _0x21b4e0);
  var _0x207f44 = common.get_uname_chatbox();
  console.verbose(_0x207f44);
  console.verbose("开始获取宝贝价格");
  let _0x4305e6 = "";
  if (descStartsWith("含运费").exists()) {
    {
      let _0x2a1f21 = descStartsWith("含运费").findOne();
      if (descStartsWith("粉丝价 ¥").depth(_0x2a1f21.depth()).exists()) {
        var _0x36438e = descStartsWith("粉丝价 ¥").depth(_0x2a1f21.depth()).findOne();
      } else {
        {
          var _0x36438e = descStartsWith("¥").depth(_0x2a1f21.depth()).findOne();
        }
      }
      _0x4305e6 = _0x36438e.desc();
    }
  } else if (descContains("含运费").exists()) {
    {
      let _0x3c2650 = descContains("含运费").findOne().desc();
      _0x4305e6 = _0x3c2650.split("\n")[0];
    }
  } else if (descContains("\n含​运​费").exists()) {
    {
      let _0x136dbe = descContains("\n含​运​费").findOne().desc();
      _0x4305e6 = _0x136dbe.split("\n")[0];
    }
  }
  console.log(_0x4305e6);
  goods_description = common.get_title();
  try {
    {
      var _0x276d2d = http.post(setting.api_domain + "gateway_send_message", {
        "type": "aj_to_web_chat_message",
        "im_msg": JSON.stringify(im_all),
        "im_image": setting.message_temp_image,
        "access_token": setting.s.get("access_token"),
        "buyer_name": _0x207f44,
        "goods_description": goods_description,
        "android_id": device.getAndroidId(),
        "android_name": setting.phone_name + (setting.xy_dk === "关" ? "" : "[副]"),
        "status": _0x21b4e0,
        "price": _0x4305e6,
        "zhu_fu": setting.xy_dk
      });
      console.log(_0x276d2d.body.string());
      toastLog("消息已回传总控");
    }
  } catch (_0x2be11e) {
    {
      console.error(_0x2be11e);
    }
  }
}
function re_on(_0x3cb516) {
  toastLog("准备重新上架...");
  if (descStartsWith("商品图片,").exists()) {
    console.verbose("开启了鱼币抵扣的宝贝重新上架");
    var _0x182dd9 = descStartsWith("商品图片,").findOne().desc() + common.get_uname_chatbox();
  } else {
    {
      var _0x182dd9 = common.get_uname_chatbox();
    }
  }
  if (setting.re_on_list.indexOf(_0x182dd9) == -1) {
    setting.re_on_list.push(_0x182dd9);
  } else {
    console.verbose("已重新上架过...");
    return false;
  }
  if (descStartsWith("商品图片,").exists()) {
    {
      descStartsWith("商品图片,").click();
    }
  } else if (descStartsWith("含运费").exists()) {
    let _0x5c961b = descStartsWith("含运费").findOne().bounds();
    common.my_click(_0x5c961b.left - 80, _0x5c961b.centerY());
    sleep(1000);
  } else if (descContains("\n含运费").exists()) {
    let _0x572da0 = descContains("\n含运费").findOne().bounds();
    common.my_click(_0x572da0.left - 80, _0x572da0.centerY());
    sleep(1000);
  } else if (descContains("\n含​运​费").exists()) {
    let _0x48e4e3 = descContains("\n含​运​费").findOne().bounds();
    common.my_click(_0x48e4e3.left - 80, _0x48e4e3.centerY());
    sleep(1000);
  }
  if (setting.xf) {
    {
      console.verbose("等待'管理按钮'加载");
      desc("管理按钮").waitFor();
      sleep(500);
      desc("管理按钮").findOne().click();
      sleep(1000);
      if (text("编辑").exists()) {
        text("编辑").click();
      } else if (text("重新发布").exists()) {
        text("重新发布").click();
      }
    }
  } else {
    {
      console.verbose("等待'管理, 管理'加载");
      desc("管理, 管理").waitFor();
      sleep(500);
      desc("管理, 管理").click();
      sleep(1000);
      if (desc("编辑").exists()) {
        desc("编辑").click();
      } else if (desc("重新发布").exists()) {
        desc("重新发布").click();
      }
    }
  }
  sleep(2000);
  common.clear_dbt(_0x3cb516);
  common.goods_publish();
  while (!common.my_exists("想跟TA说点什么...")) {
    back();
    sleep(2000);
  }
}
function makesure_goods() {
  console.verbose("等待聊天界面加载");
  for (let _0x478d7f = 0; _0x478d7f < 8; _0x478d7f++) {
    if (descContains("含运费").exists()) {
      {
        console.verbose("聊天页面已加载2");
        break;
      }
    } else if (descContains("\n含​运​费").exists()) {
      {
        console.verbose("聊天页面已加载");
        break;
      }
    } else {
      {
        sleep(1000);
      }
    }
    if (descStartsWith("亲，无法连接网络").exists()) {
      {
        return false;
      }
    }
  }
}
function unique_arr(_0x5d914b) {
  if (!Array.isArray(_0x5d914b)) {
    console.log("type error!");
    return;
  }
  var _0x4c47ee = [];
  for (var _0x46347d = 0; _0x46347d < _0x5d914b.length; _0x46347d++) {
    {
      if (_0x4c47ee.indexOf(_0x5d914b[_0x46347d]) === -1) {
        _0x4c47ee.push(_0x5d914b[_0x46347d]);
      }
    }
  }
  return _0x4c47ee;
}
function close_order() {
  toastLog("关闭订单...");
  for (let _0x3a7dd3 = 0; _0x3a7dd3 < 8; _0x3a7dd3++) {
    {
      if (descContains("去发货").clickable(false).exists() || descContains("修改价格").clickable(false).exists() || descContains("处理退款").exists()) {
        console.verbose("准备关闭订单");
        break;
      }
      sleep(2000);
    }
  }
  if (desc("去发货，按钮, 去发货").clickable(false).exists()) {
    console.verbose("发现 去发货 按钮");
    var _0x858e16 = desc("去发货，按钮, 去发货").clickable(false).findOne().bounds();
  } else if (desc("修改价格，按钮, 修改价格").clickable(false).exists()) {
    {
      console.verbose("发现 修改价格 按钮");
      var _0x858e16 = desc("修改价格，按钮, 修改价格").clickable(false).findOne().bounds();
    }
  } else if (desc("去发货").clickable(false).exists()) {
    console.verbose("发现 去发货 按钮2");
    var _0x858e16 = desc("去发货").clickable(false).findOne().bounds();
  } else if (desc("修改价格").clickable(false).exists()) {
    console.verbose("发现 修改价格 按钮2");
    var _0x858e16 = desc("修改价格").clickable(false).findOne().bounds();
  } else if (desc("处理退款").exists()) {
    console.verbose("注意：买家申请退款订单无法关闭，闲鱼需手动输入支付密码才能完成退款");
    return false;
  } else {
    console.verbose("买家未拍下，无法关闭订单");
    return false;
  }
  for (let _0x4aeb7d = 0; _0x4aeb7d < 5; _0x4aeb7d++) {
    common.my_click(device.width - 20 - _0x4aeb7d * 20, _0x858e16.centerY());
    sleep(1000);
    if (desc("取消订单，，按钮, 取消订单").exists()) {
      {
        console.verbose("取消订单按钮出现");
        let _0xa489be = desc("取消订单，，按钮, 取消订单").findOne().bounds();
        common.my_click(_0xa489be.centerX(), _0xa489be.centerY());
        sleep(1000);
        let _0x55ea05 = desc("与买家协商一致，可选，按钮, 与买家协商一致").findOne().bounds();
        common.my_click(_0x55ea05.centerX(), _0x55ea05.centerY());
        sleep(1000);
        let _0xa95e92 = desc("取消订单，按钮, 取消订单").findOne().bounds();
        common.my_click(_0xa95e92.centerX(), _0xa95e92.centerY());
        sleep(1000);
        console.verbose("已关闭订单");
        break;
      }
    }
  }
}
module.exports = message;