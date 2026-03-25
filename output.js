//Wed Mar 25 2026 13:12:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var common = {
  "start_task_list": function () {
    console.verbose("准备启动任务队列");
    for (let _0x2bb934 = 0; _0x2bb934 < 1000000; _0x2bb934++) {
      {
        if (auto.service == null) {
          if (_0x2bb934 % 20 == 1) {
            console.verbose("任务队列未启动，等待无障碍开启中...");
          }
        } else {
          {
            break;
          }
        }
        sleep(1000);
      }
    }
    setting.task_list_threads = threads.start(function () {
      {
        if (setting.s.contains("task_list")) {
          setting.task_list = setting.s.get("task_list");
          common.change_task_ui();
        }
        setInterval(function () {
          {
            if (!setting.task_runing && setting.task_list.length >= 1) {
              if (!setting.xy_name || setting.xy_name == "未初始化") {
                {
                  var _0x4b99ce = true;
                  let _0x31cf98 = ["xy_init", "wbzz", "from_pdd_buy", "get_pdd_order", "hs", "dy"];
                  for (let _0x5dcc8e = 0; _0x5dcc8e < _0x31cf98.length; _0x5dcc8e++) {
                    {
                      if (setting.task_list[0].task_type.indexOf(_0x31cf98[_0x5dcc8e]) != -1) {
                        _0x4b99ce = false;
                        break;
                      }
                    }
                  }
                  if (_0x4b99ce) {
                    console.warn("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
                    console.warn("因设备未绑定闲鱼，即将开始自动绑定闲鱼");
                    setting.task_list.unshift({
                      "task_type": "goods_manage.xy_init",
                      "task_type_name": "自动绑定闲鱼"
                    });
                  }
                }
              }
              for (let _0x3b3c64 = 0; _0x3b3c64 < setting.task_list.length; _0x3b3c64++) {
                {
                  let _0xc9b3dd = setting.task_list[_0x3b3c64];
                  let _0x409f07 = "";
                  _0xc9b3dd.task_type = common.convert_task_type(_0xc9b3dd.task_type);
                  let _0x32db43 = false;
                  if (!_0xc9b3dd.start_time && !_0xc9b3dd.start_time2) {
                    _0x32db43 = true;
                    _0x409f07 = _0xc9b3dd.task_type_name + " 立即执行\n";
                  }
                  if (_0xc9b3dd.start_time) {
                    let _0x1dbd0f = new Date();
                    let _0x23c300 = _0xc9b3dd.start_time;
                    let _0x2a2816 = new Date(_0x23c300.replace(/\-/g, "/"));
                    let _0x2acab0 = _0x1dbd0f - _0x2a2816;
                    if (_0x2acab0 > 0 && _0x2acab0 <= 1800000) {
                      _0x32db43 = true;
                      _0x409f07 = _0xc9b3dd.task_type_name + " " + _0xc9b3dd.start_time + "\n";
                    }
                  }
                  if (_0xc9b3dd.start_time2) {
                    let _0x2868c5 = new Date().getFullYear() + "-" + pad(new Date().getMonth() + 1) + "-" + pad(new Date().getDate());
                    if (_0xc9b3dd.run_day != _0x2868c5) {
                      let _0x1dbd0f = new Date();
                      let _0x23c300 = _0x2868c5 + " " + _0xc9b3dd.start_time2;
                      let _0x2a2816 = new Date(_0x23c300.replace(/\-/g, "/"));
                      let _0x2acab0 = _0x1dbd0f - _0x2a2816;
                      if (_0x2acab0 > 0 && _0x2acab0 <= 1800000) {
                        {
                          _0x32db43 = true;
                          _0xc9b3dd.run_day = _0x2868c5;
                          _0x409f07 = _0xc9b3dd.task_type_name + " " + "每天执行（" + _0xc9b3dd.start_time2 + "）\n";
                        }
                      }
                    }
                  }
                  if (_0x32db43) {
                    setting.task_runing = true;
                    console.verbose("开始执行任务：\n" + _0x409f07);
                    try {
                      if (_0xc9b3dd.task_id) {
                        common.reload_task_table(_0xc9b3dd.task_id, "run");
                        common.web_log("任务开始执行", "success");
                      } else {
                        if (_0xc9b3dd.task_type.indexOf("hs.") == -1 && _0xc9b3dd.task_type.indexOf("wbzz.") == -1) {
                          task_type = _0xc9b3dd.task_type;
                          task_type = task_type.split(".")[1];
                          if (["xy_re_edit", "xy_fast_re_edit", "yanghao", "algorithm1", "algorithm2", "algorithm3"].indexOf(task_type) == -1) {
                            linshi_data = JSON.parse(common.get_xytaskc()[task_type]);
                            if (linshi_data.xy_dk) {
                              {
                                _0xc9b3dd.xy_dk = linshi_data.xy_dk;
                              }
                            } else {
                              {
                                _0xc9b3dd.xy_dk = "关";
                              }
                            }
                          } else {
                            common.check_configure();
                            _0xc9b3dd.xy_dk = setting.xy_dk;
                          }
                        }
                      }
                      if (!_0xc9b3dd.start_time2) {
                        {
                          setting.task_list.splice(_0x3b3c64, 1);
                        }
                      }
                      setting.s.put("task_list", setting.task_list);
                      common.change_task_ui();
                      if (auto.service == null) {
                        let _0x271283 = "请先开启无障碍服务";
                        console.error(_0x271283);
                        toast(_0x271283);
                        break;
                      }
                      if (!common.xyv_correct()) {
                        let _0x345daf = "请先安装稳定版闲鱼";
                        console.error(_0x345daf);
                        toast(_0x345daf);
                        break;
                      }
                      if (setting.s.contains("access_token")) {
                        if (_0xc9b3dd.xy_dk == "先主后副" && setting.app_num == "2") {
                          {
                            console.verbose("先主后副 主闲鱼");
                            setting.xzhf = "z";
                            eval(_0xc9b3dd.task_type + "(" + _0xc9b3dd.task_id + ")");
                            console.verbose("先主后副 副闲鱼");
                            setting.xzhf = "f";
                            eval(_0xc9b3dd.task_type + "(" + _0xc9b3dd.task_id + ")");
                          }
                        } else {
                          eval(_0xc9b3dd.task_type + "(" + _0xc9b3dd.task_id + ")");
                        }
                        console.verbose("任务运行完成，当前任务队列任务数：" + setting.task_list.length);
                      } else {
                        {
                          sleep(6000);
                          let _0x52eaf2 = "请先进行登录";
                          console.error(_0x52eaf2);
                          toast(_0x52eaf2);
                        }
                      }
                    } catch (_0x22a066) {
                      if (_0x22a066 == "JavaException: com.stardust.autojs.runtime.exception.ScriptInterruptedException: null") {
                        toastLog("任务强制结束");
                        common.web_log("任务强制结束", "info");
                      } else {
                        {
                          toast(_0x22a066);
                          console.error("任务出错：\n" + _0x22a066);
                          console.error(_0x22a066.stack);
                          if (_0xc9b3dd.task_id) {
                            common.reload_task_table(_0xc9b3dd.task_id, "error", _0x22a066);
                            common.web_log("任务运行出错，请查看手机端日志", "danger");
                          }
                        }
                      }
                    }
                    setting.task_runing = false;
                    sleep(1000);
                    if (id("tab_title").className("TextView").text("消息").exists()) {
                      common.enter_tab("消息");
                      sleep(1000);
                    }
                    break;
                  }
                }
              }
            }
          }
        }, 1000);
      }
    });
    console.info("任务队列启动成功");
  },
  "convert_task_type": function (_0x22d9aa) {
    _0x22d9aa = _0x22d9aa.replace("goods_manage.", "goods_manage_b.");
    return _0x22d9aa;
  },
  "my_input": function (_0x94bec0) {
    while (true) {
      {
        sleep(1000);
        if (common.has_srf()) {
          {
            break;
          }
        }
        console.verbose("等待输入法出现");
      }
    }
    sleep(500);
    _0x94bec0 = _0x94bec0.toString();
    if (common.getIME() == "youhu.laixijs/.KeyboardServices.AdbIME") {
      intent = new Intent("youhu.laixijs.KeyboardServices.AdbIME.AdbReceiver");
      intent.setAction("ADB_INPUT_TEXT");
      intent.putExtra("msg", _0x94bec0);
      context.sendBroadcast(intent);
      sleep(1000);
      return true;
    }
    console.verbose("即将通过搜狗/讯飞输入文字");
    setClip("输入法");
    sleep(250);
    setClip(_0x94bec0);
    sleep(1200);
    var _0x11673a = _0x94bec0.substring(0, 12);
    if (setting.my_inputx && setting.my_inputy) {
      var _0x30c903 = setting.my_inputx;
      var _0x58f29f = setting.my_inputy;
      common.my_click(_0x30c903, _0x58f29f);
      console.verbose("'" + _0x11673a + "'输入完成");
    } else {
      setClip("因未绑定闲鱼停止运行，请查看日志");
      console.error("输入法剪贴板坐标不存在，请安装搜狗或讯飞输入法后运行'绑定闲鱼'任务以获取坐标");
      console.error("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
      console.warn("如何运行绑定闲鱼任务？总控端点击'闲鱼任务->绑定闲鱼' 或 手机端点击'常用功能->绑定闲鱼'，成功运行一次即可。");
      console.verbose("");
      console.log("常见问题:");
      console.log("1.为什么会出现这个提示？助手需要通过点击输入法剪贴板实现闲鱼的输入文字，这台设备之前没有成功运行绑定闲鱼任务（或者根本没运行过），因此无法正常输入文字。");
      console.log("2.什么是绑定闲鱼任务？绑定闲鱼任务会检测设备屏幕能否正常点击、同步您的闲鱼信息、设备信息，成功运行一次即可。如果您更换了闲鱼号或调整了手机屏幕分辨率或换了输入法版本，需要重新运行");
      console.log("3.如何运行绑定闲鱼任务？总控端点击'闲鱼任务->绑定闲鱼' 或 手机端点击'常用功能->绑定闲鱼'，成功运行一次即可。");
      console.verbose("");
      sleep(10000);
    }
  },
  "has_srf": function () {
    窗口 = auto.windows;
    var _0x2df9e4 = false;
    for (i = 0; i < 窗口.length; i++) {
      let _0x329149 = 窗口[i].type;
      if (_0x329149 == 2) {
        _0x2df9e4 = true;
        break;
      }
    }
    return _0x2df9e4;
  },
  "get_chat_record": function (_0x3e15c6) {
    toastLog("开始获取聊天信息");
    let _0x2b6813 = {};
    _0x2b6813.all = [];
    _0x2b6813.left = [];
    _0x2b6813.right = [];
    if (common.has_srf()) {
      {
        sleep(1000);
        if (common.has_srf()) {
          common.touch_screen_up();
          common.touch_screen_down();
        }
      }
    }
    for (let _0x1a3d04 = 0; _0x1a3d04 < _0x3e15c6; _0x1a3d04++) {
      if (_0x1a3d04 == 0) {
        {
          console.verbose("轻微上滑、轻微下滑");
          common.touch_screen_up();
          sleep(500);
          common.touch_screen_down();
          sleep(1500);
        }
      }
      if (_0x3e15c6 == 1) {
        {
          break;
        }
      }
      if (depth(setting.im_dep + 1).indexInParent(0).className("android.view.View").scrollable().exists()) {
        console.verbose("滑动控件1");
        depth(setting.im_dep + 1).indexInParent(0).className("android.view.View").scrollable().findOne().scrollBackward();
        sleep(200);
      } else if (depth(setting.im_dep + 1).indexInParent(0).className("android.widget.ScrollView").scrollable().exists()) {
        {
          depth(setting.im_dep + 1).indexInParent(0).className("android.widget.ScrollView").scrollable().findOne().scrollBackward();
          sleep(200);
        }
      } else {
        {
          console.verbose("滑动控件不存在");
          break;
        }
      }
    }
    console.verbose("滑动完成");
    for (let _0x410489 = 0; _0x410489 < _0x3e15c6 + 2; _0x410489++) {
      {
        console.verbose(desc("闲鱼私聊, 左\n滑\n看\nTA\n的\n闲\n鱼\n号").exists());
        let _0x5735dc = desc("闲鱼私聊, 左\n滑\n看\nTA\n的\n闲\n鱼\n号").findOne();
        _0x5735dc.find(depth(setting.im_dep + 3).className("android.view.View")).forEach(_0x24f69b => {
          if (_0x24f69b && _0x24f69b.desc()) {
            let _0x23adc0 = _0x24f69b.desc();
            if (_0x23adc0.indexOf("&#") != -1) {
              _0x23adc0 = common.decodeFromHtmlDecimal(_0x23adc0);
            }
            if (_0x24f69b.find(descStartsWith("聊天小助手")).length == 1) {
              console.verbose("聊天小助手");
            } else if (_0x24f69b.parent() == null) {
              {
                console.verbose("element.parent()为null");
              }
            } else if (_0x24f69b.parent().desc() == null) {
              if (_0x2b6813.left.indexOf(_0x23adc0) == -1) {
                _0x2b6813.all.push({
                  "role": "buyer",
                  "message": _0x23adc0
                });
                _0x2b6813.left.push(_0x23adc0);
              }
            } else if (_0x24f69b.parent().desc().indexOf("已读") != -1 || _0x24f69b.parent().desc().indexOf("未读") != -1) {
              {
                if (_0x2b6813.right.indexOf(_0x23adc0) == -1 && _0x23adc0 != "修改") {
                  _0x2b6813.all.push({
                    "role": "seller",
                    "message": _0x23adc0
                  });
                  _0x2b6813.right.push(_0x23adc0);
                }
              }
            } else {
              if (_0x2b6813.left.indexOf(_0x23adc0) == -1) {
                _0x2b6813.all.push({
                  "role": "buyer",
                  "message": _0x23adc0
                });
                _0x2b6813.left.push(_0x23adc0);
              }
            }
          }
        });
        if (_0x3e15c6 == 1) {
          break;
        }
        if (depth(setting.im_dep + 1).indexInParent(0).className("android.view.View").scrollable().exists()) {
          {
            depth(setting.im_dep + 1).indexInParent(0).className("android.view.View").scrollable().findOne().scrollForward();
            sleep(100);
          }
        } else if (depth(setting.im_dep + 1).indexInParent(0).className("android.widget.ScrollView").scrollable().exists()) {
          {
            depth(setting.im_dep + 1).indexInParent(0).className("android.widget.ScrollView").scrollable().findOne().scrollForward();
            sleep(100);
          }
        }
      }
    }
    console.verbose("消息已提取");
    console.verbose(_0x2b6813.left);
    console.verbose(_0x2b6813.right);
    return _0x2b6813;
  },
  "change_task_ui": function () {
    ui.run(function () {
      let _0x427494 = setting.task_list;
      let _0x4e4f97 = "";
      if (_0x427494.length != 0) {
        for (let _0x20881a = 0; _0x20881a < _0x427494.length; _0x20881a++) {
          if (_0x427494[_0x20881a].start_time) {
            _0x4e4f97 += _0x427494[_0x20881a].task_type_name + " " + _0x427494[_0x20881a].start_time + "\n";
          } else if (_0x427494[_0x20881a].start_time2) {
            {
              _0x4e4f97 += _0x427494[_0x20881a].task_type_name + " " + "每天执行（" + _0x427494[_0x20881a].start_time2 + "）\n";
            }
          } else {
            {
              _0x4e4f97 += _0x427494[_0x20881a].task_type_name + " 立即执行\n";
            }
          }
        }
      } else {
        {
          _0x4e4f97 = "任务队列正常|等待任务中...";
        }
      }
      console.warn("当前任务队列：\n" + _0x4e4f97);
      ui.task_list_text.setText(_0x4e4f97);
    });
  },
  "clear_task": function () {
    console.verbose("清空任务队列...");
    setting.task_list = [];
    setting.s.put("task_list", setting.task_list);
    common.restart_task();
  },
  "remove_task": function (_0x5b5fb5) {
    console.verbose("要移除的任务id：" + _0x5b5fb5);
    let _0x439f5c = setting.task_list;
    let _0x1be013 = false;
    for (let _0x1799aa = 0; _0x1799aa < _0x439f5c.length; _0x1799aa++) {
      if (_0x439f5c[_0x1799aa].task_id == _0x5b5fb5) {
        setting.task_list.splice(_0x1799aa, 1);
        console.verbose("成功移除，当前队列任务数：" + setting.task_list.length);
        _0x1be013 = true;
        common.change_task_ui();
        setting.s.put("task_list", setting.task_list);
        break;
      }
    }
    setting.s.put("task_list", setting.task_list);
    if (setting.task_runing && !_0x1be013) {
      common.restart_task();
    }
  },
  "restart_task": function () {
    console.verbose("重启任务队列...");
    let _0xc94774 = currentPackage();
    if (_0xc94774 == setting.xy_pname) {
      {
        common.xy_home();
        if (id("tab_title").className("TextView").text("消息").exists()) {
          common.enter_tab("消息");
          sleep(1000);
        }
      }
    } else if (_0xc94774 == setting.zz_pname) {
      {
        common.zz_home();
      }
    }
    setting.task_runing = false;
    if (setting.task_list_threads != null && setting.task_list_threads.isAlive()) {
      setting.task_list_threads.interrupt();
      common.start_task_list();
    }
  },
  "restart_aj": function () {
    toastLog("内核重启中...");
    engines.stopAll();
    engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
  },
  "set_phone_info": function () {
    let _0x2e102f = setting.api_domain + "get_one_device";
    try {
      let _0x36fa43 = device.getAndroidId();
      if (_0x36fa43 == "0000000000000000") {
        console.error("小米miui 13、14系统安装软件请勾选‘读取虚拟身份ID’功能，否则系统无法确定设备的唯一性，可能操作设备名错乱、任务错乱、总控回复无法使用等问题");
      }
      let _0x60f918 = http.post(_0x2e102f, {
        "android_id": _0x36fa43,
        "core": setting.v2
      });
      let _0x30ebd0 = _0x60f918.body.json();
      if (_0x30ebd0.code == 0) {
        setting.phone_name = _0x30ebd0.data.phone_name;
        setting.xy_name = _0x30ebd0.data.xy_name;
        setting.xy_name2 = _0x30ebd0.data.xy_name2;
        setting.xy_name_sub = _0x30ebd0.data.xy_name_sub;
        setting.xy_name2_sub = _0x30ebd0.data.xy_name2_sub;
        setting.yxp = _0x30ebd0.data.yxp;
        setting.yxp_sub = _0x30ebd0.data.yxp_sub;
        setting.app_num = _0x30ebd0.data.app_num;
        if (_0x30ebd0.data.my_inputx) {
          {
            setting.my_inputx = _0x30ebd0.data.my_inputx;
            setting.my_inputy = _0x30ebd0.data.my_inputy;
          }
        }
      }
      if (setting.app_num == 2) {
        setting.phone_name = setting.phone_name + "（双开）";
      }
      console.log("设备名：", setting.phone_name);
      ui.post(function () {
        {
          ui.phone_name.setText("设备名：" + setting.phone_name);
        }
      });
    } catch (_0x3507b0) {
      {
        console.verbose("暂无设备信息");
      }
    }
  },
  "watermark": function (_0x42e593, _0x46133b, _0x44e549) {
    console.verbose("水印 闲鱼名:" + _0x46133b + "/闲鱼昵称:" + _0x44e549);
    var _0x4a31ab = setting.api_domain + "get_watermark";
    if (!_0x46133b) {
      _0x46133b = "";
    }
    if (!_0x44e549) {
      _0x44e549 = "";
    }
    var _0x2ff8ed = http.post(_0x4a31ab, {
      "text": _0x46133b,
      "text2": _0x44e549,
      "access_token": setting.s.get("access_token")
    });
    var _0x1fd835 = _0x2ff8ed.body.json();
    let _0x2af132 = _0x1fd835.data;
    for (let _0x5cca15 = 0; _0x5cca15 < _0x42e593.length; _0x5cca15++) {
      while (_0x42e593[_0x5cca15].indexOf("?") != -1) {
        {
          _0x42e593[_0x5cca15] = _0x42e593[_0x5cca15].replace("?", "");
        }
      }
      _0x42e593[_0x5cca15] = _0x42e593[_0x5cca15] + "?";
      if (_0x2af132.pic_where == "全部") {
        _0x42e593[_0x5cca15] += _0x2af132.water_str;
      } else if (_0x2af132.pic_where == "首张") {
        if (_0x5cca15 == 0) {
          _0x42e593[_0x5cca15] += _0x2af132.water_str;
        }
      } else if (_0x2af132.pic_where == "除首张") {
        if (_0x5cca15 != 0) {
          _0x42e593[_0x5cca15] += _0x2af132.water_str;
        }
      } else if (_0x2af132.pic_where == "第二张") {
        if (_0x5cca15 == 1) {
          {
            _0x42e593[_0x5cca15] += _0x2af132.water_str;
          }
        }
      } else if (_0x2af132.pic_where == "尾张") {
        {
          if (_0x5cca15 == _0x42e593.length - 1) {
            _0x42e593[_0x5cca15] += _0x2af132.water_str;
          }
        }
      }
    }
    return _0x42e593;
  },
  "get_task_detail": function (_0x57604d) {
    var _0x16f087 = setting.api_domain + "get_task";
    var _0x5a7759 = http.post(_0x16f087, {
      "id": _0x57604d,
      "access_token": setting.s.get("access_token")
    });
    var _0x4ae19e = _0x5a7759.body.json();
    if (!_0x4ae19e.data) {
      console.error(_0x4ae19e);
    }
    let _0x13f793 = setting.v2;
    let _0x7f785e = _0x4ae19e.v2_cloud;
    let _0x5db3fd = _0x13f793.replace(/\./g, "");
    let _0x39d201 = _0x7f785e.replace(/\./g, "");
    _0x5db3fd = Number(_0x5db3fd);
    _0x39d201 = Number(_0x39d201);
    let _0x50cb1a = Math.abs(_0x5db3fd - _0x39d201);
    if (_0x50cb1a == 0) {
      {
        console.info("内核已为最新版");
      }
    } else if (_0x50cb1a > 9) {
      console.warn("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
      console.warn("当前内核版本：" + _0x13f793 + " 最新内核版本：" + _0x7f785e + " 建议重启内核更新到最新版");
    } else {
      console.verbose("当前内核版本：" + _0x13f793 + " 最新内核版本：" + _0x7f785e);
    }
    return _0x4ae19e;
  },
  "check_configure": function () {
    console.verbose("正在获取配置数据...");
    try {
      {
        var _0x4aa3b1 = setting.api_domain + "get_configure";
        var _0x4b7940 = http.post(_0x4aa3b1, {
          "access_token": setting.s.get("access_token")
        });
        setting.configure = _0x4b7940.body.json().data;
        setting.xy_dk = setting.configure.xy_dk;
        if (setting.configure.area_pool != "0") {
          if (setting.configure.area_pool == "1") {
            setting.now_area = "area1";
          } else if (setting.configure.area_pool == "2") {
            {
              setting.now_area = "area2";
            }
          } else if (setting.configure.area_pool == "3") {
            setting.now_area = "area3";
          } else if (setting.configure.area_pool == "4") {
            setting.now_area = "area4";
          } else if (setting.configure.area_pool == "5") {
            setting.now_area = "area5";
          } else if (setting.configure.area_pool == "6") {
            setting.now_area = "area6";
          }
          var _0x8dffd6 = [];
          var _0x5cc36c = [];
          var _0x4c9d3f = [];
          var _0x364c95 = [];
          var _0x5d7647 = [];
          var _0x3e9ff1 = [];
          var _0x4aa3b1 = setting.api_domain + "get_area_pool";
          var _0x4b7940 = http.post(_0x4aa3b1, {
            "access_token": setting.s.get("access_token")
          });
          var _0x5278ef = _0x4b7940.body.json().data;
          if (_0x5278ef.area1) {
            JSON.parse(_0x5278ef.area1).forEach(function (_0x9740f8) {
              {
                _0x8dffd6.push(_0x9740f8.name);
              }
            });
          }
          if (_0x5278ef.area2) {
            JSON.parse(_0x5278ef.area2).forEach(function (_0x6efe05) {
              {
                _0x5cc36c.push(_0x6efe05.name);
              }
            });
          }
          if (_0x5278ef.area3) {
            JSON.parse(_0x5278ef.area3).forEach(function (_0x534ceb) {
              _0x4c9d3f.push(_0x534ceb.name);
            });
          }
          if (_0x5278ef.area4) {
            JSON.parse(_0x5278ef.area4).forEach(function (_0x132f31) {
              _0x364c95.push(_0x132f31.name);
            });
          }
          if (_0x5278ef.area5) {
            JSON.parse(_0x5278ef.area5).forEach(function (_0x251a4a) {
              _0x5d7647.push(_0x251a4a.name);
            });
          }
          if (_0x5278ef.area6) {
            JSON.parse(_0x5278ef.area6).forEach(function (_0x3838fb) {
              _0x3e9ff1.push(_0x3838fb.name);
            });
          }
          setting.area_pool.area1 = _0x8dffd6;
          setting.area_pool.area2 = _0x5cc36c;
          setting.area_pool.area3 = _0x4c9d3f;
          setting.area_pool.area4 = _0x364c95;
          setting.area_pool.area5 = _0x5d7647;
          setting.area_pool.area6 = _0x3e9ff1;
        } else {
          setting.now_area = false;
        }
        console.verbose("成功获取用户配置数据");
      }
    } catch (_0x303781) {
      {
        var _0x5efcaa = "获取配置失败，请联网后重启软件";
        console.error(_0x5efcaa);
        toast(_0x5efcaa);
        console.error(_0x303781);
      }
    }
    if (setting.xds_name.indexOf(sys_msg.sys_name) != -1) {
      {
        ui.run(function () {
          {
            let _0x132750 = setting.configure;
            ui.yanghao_scroll_num.setText(_0x132750.yanghao_scroll_num.toString());
            ui.yanghao_click_percent.setText(_0x132750.yanghao_click_percent.toString());
            ui.yanghao_like_percent.setText(_0x132750.yanghao_like_percent.toString());
            ui.yanghao_want_percent.setText(_0x132750.yanghao_want_percent.toString());
            ui.yanghao_want_content.setText(_0x132750.yanghao_want_content.toString());
            ui.yanghao_collect_percent.setText(_0x132750.yanghao_collect_percent.toString());
            ui.yanghao_comment_percent.setText(_0x132750.yanghao_comment_percent.toString());
            ui.yanghao_comment_content.setText(_0x132750.yanghao_comment_content.toString());
            ui.re_edit_interval.setText(_0x132750.re_edit_interval.toString());
            ui.re_edit_num.setText(_0x132750.re_edit_num.toString());
            ui.ll_del_edit_lll.setText(_0x132750.ll_del_edit_lll.toString());
            ui.ll_del_edit_lyl.setText(_0x132750.ll_del_edit_lyl.toString());
            ui.ll1_del_edit_baohu.setText(_0x132750.ll_del_edit_baohu.toString());
            ui.ll_del_edit_interval.setText(_0x132750.ll_del_edit_interval.toString());
            ui.ll2_del_edit_baohu.setText(_0x132750.ll_del_edit_baohu.toString());
            setting.configure.ll_time_time = "01:00:00 - 06:00:00";
            setting.configure.dormant = "开启";
            if (setting.configure.area_pool != "0") {
              {
                if (setting.configure.area_pool == "1") {
                  {
                    ui.location_g1.checked = true;
                  }
                } else if (setting.configure.area_pool == "2") {
                  ui.location_g2.checked = true;
                } else if (setting.configure.area_pool == "3") {
                  ui.location_g3.checked = true;
                }
              }
            }
          }
        });
      }
    }
  },
  "set_configure": function () {
    ui.run(function () {
      {
        setting.configure.yanghao_scroll_num = ui.yanghao_scroll_num.getText();
        setting.configure.yanghao_click_percent = ui.yanghao_click_percent.getText();
        setting.configure.yanghao_like_percent = ui.yanghao_like_percent.getText();
        setting.configure.yanghao_want_percent = ui.yanghao_want_percent.getText();
        setting.configure.yanghao_want_content = ui.yanghao_want_content.getText();
        setting.configure.yanghao_collect_percent = ui.yanghao_collect_percent.getText();
        setting.configure.yanghao_comment_percent = ui.yanghao_comment_percent.getText();
        setting.configure.yanghao_comment_content = ui.yanghao_comment_content.getText();
        setting.configure.re_edit_interval = ui.re_edit_interval.getText();
        setting.configure.re_edit_num = ui.re_edit_num.getText();
        setting.configure.ll_re_edit_interval = ui.re_edit_interval.getText();
        setting.configure.ll_re_edit_num = ui.re_edit_num.getText();
        setting.configure.ll_del_edit_lll = ui.ll_del_edit_lll.getText();
        setting.configure.ll_del_edit_lyl = ui.ll_del_edit_lyl.getText();
        setting.configure.ll_del_edit_baohu = ui.ll1_del_edit_baohu.getText();
        setting.configure.ll_del_edit_interval = ui.ll_del_edit_interval.getText();
      }
    });
    setting.configure.access_token = setting.s.get("access_token");
    threads.start(function () {
      var _0x13f52c = http.post(setting.api_domain + "set_configure", setting.configure);
      console.verbose(_0x13f52c.body.string());
    });
  },
  "enter_tab": function (_0x5ed929) {
    console.verbose("点击'" + _0x5ed929 + "'按钮");
    if (descStartsWith(_0x5ed929 + "，").depth(7).clickable().exists()) {
      {
        _0x5ed929 = _0x5ed929 + "，";
      }
    } else if (_0x5ed929 == "消息" && desc("消息").depth(7).clickable().exists()) {
      _0x5ed929 = _0x5ed929;
    }
    if (descStartsWith(_0x5ed929).depth(7).exists()) {
      {
        descStartsWith(_0x5ed929).depth(7).clickable().findOne().click();
        sleep(300);
      }
    } else if (descStartsWith(_0x5ed929).depth(8).exists()) {
      {
        descStartsWith(_0x5ed929).depth(8).clickable().findOne().click();
        sleep(300);
      }
    } else if (descStartsWith(_0x5ed929).depth(9).exists()) {
      descStartsWith(_0x5ed929).depth(9).clickable().findOne().click();
      sleep(300);
    } else {
      {
        console.error("点击'" + _0x5ed929 + "'按钮失败");
      }
    }
  },
  "get_uname_chatbox": function () {
    var _0x1b1da7 = "无会员名";
    console.verbose("准备获取会员名");
    for (let _0x118c9e = 0; _0x118c9e < 270; _0x118c9e++) {
      if (descContains("\n会员名：").exists()) {
        {
          console.verbose("出现会员名1");
          break;
        }
      } else if (descContains("***").exists()) {
        console.verbose("出现会员名2");
        break;
      } else {
        if (_0x118c9e % 10 == 0) {
          console.verbose("等待会员名加载中...");
        }
        sleep(300);
      }
      if (_0x118c9e == 269) {
        console.error("无闲鱼会员名控件");
      }
    }
    if (descContains("\n会员名：").exists()) {
      console.verbose("获取会员名1");
      let _0x465efa = descContains("\n会员名：").findOne().desc().split("\n");
      if (_0x465efa.length == 2) {
        {
          _0x1b1da7 = _0x465efa[0];
        }
      } else if (_0x465efa.length == 3) {
        _0x1b1da7 = _0x465efa[1];
      } else if (_0x465efa.length == 4) {
        {
          _0x1b1da7 = _0x465efa[2];
        }
      } else if (_0x465efa.length == 5) {
        {
          _0x1b1da7 = _0x465efa[3];
        }
      } else {
        {
          console.error(_0x465efa);
          console.error("软件运行出错，请截图此处的日志联系管理员");
        }
      }
    } else if (descContains("***").exists()) {
      console.verbose("获取会员名2");
      var _0x51aa56 = depth(setting.im_dep).descContains("***").findOne().desc().split("\n");
      console.verbose(_0x51aa56);
      if (_0x51aa56.length == 1) {
        _0x1b1da7 = _0x51aa56[0];
      } else if (_0x51aa56.length == 2) {
        _0x1b1da7 = _0x51aa56[1];
      } else if (_0x51aa56.length == 3) {
        _0x1b1da7 = _0x51aa56[2];
      } else if (_0x51aa56.length == 4) {
        {
          _0x1b1da7 = _0x51aa56[3];
        }
      } else if (_0x51aa56.length == 5) {
        _0x1b1da7 = _0x51aa56[4];
      } else {
        {
          console.error(_0x51aa56);
          console.error("软件运行出错，请截图此处的日志联系管理员");
        }
      }
    } else {
      console.error("会员名和*** 、都不存在");
    }
    return _0x1b1da7;
  },
  "check_clipboard_bak": function () {
    console.verbose("开始剪贴板权限检测");
    console.verbose("向剪贴板写入内容：测试测试");
    setClip("测试测试");
    sleep(250);
    let _0x2836c0 = getClip();
    console.verbose("剪贴板中的内容为：" + _0x2836c0);
    if (_0x2836c0 !== "测试测试") {
      {
        console.error("警告：");
        console.error("请检查是否授予" + sys_msg.sys_name + "剪贴板权限（选择始终允许）");
        console.error("如无剪贴板权限" + sys_msg.sys_name + "无法正常复制黏贴文字，发布宝贝、发送消息等等功能都无法使用");
        console.error("请在您手机的权限管理授予" + sys_msg.sys_name + "剪贴板权限，若已授予或系统无该权限，请忽略此警告");
        return false;
      }
    } else {
      console.verbose(_0x2836c0, "剪贴板内容正确，剪贴板权限正常");
    }
    setClip("");
    return true;
  },
  "get_zztaskc": function () {
    console.verbose("正在获取转转配置数据");
    try {
      {
        var _0x282adb = setting.api_domain + "get_zztaskc";
        var _0x2a92f3 = http.post(_0x282adb, {
          "access_token": setting.s.get("access_token")
        });
        return _0x2a92f3.body.json().data;
      }
    } catch (_0x5f04fd) {
      {
        console.error(_0x5f04fd);
        return false;
      }
    }
  },
  "get_hstaskc": function () {
    console.verbose("正在获取红薯配置数据");
    try {
      {
        var _0x45432c = setting.api_domain + "get_hstaskc";
        var _0x42980c = http.post(_0x45432c, {
          "access_token": setting.s.get("access_token")
        });
        return _0x42980c.body.json().data;
      }
    } catch (_0x3c5433) {
      console.error(_0x3c5433);
      return false;
    }
  },
  "get_dytaskc": function () {
    console.verbose("正在获取抖音配置数据");
    try {
      {
        var _0x42ddd7 = setting.api_domain + "get_dytaskc";
        var _0x1861df = http.post(_0x42ddd7, {
          "access_token": setting.s.get("access_token")
        });
        return _0x1861df.body.json().data;
      }
    } catch (_0x46e235) {
      console.error(_0x46e235);
      return false;
    }
  },
  "get_xytaskc": function () {
    try {
      var _0x539cea = setting.api_domain + "get_xytaskc";
      var _0xefa8fa = http.post(_0x539cea, {
        "access_token": setting.s.get("access_token")
      });
      return _0xefa8fa.body.json().data;
    } catch (_0x4b000d) {
      {
        console.error("请检查网络权限是否正常");
        console.error(_0x4b000d);
        return false;
      }
    }
  },
  "browser_down": function name(_0x1ff8dc) {
    console.verbose("备用下载地址（如浏览器下载失败，可长按复制下面地址下载）：\n闲鱼" + setting.xy_app_version_e + ":\n" + setting.xy_app_url_bak_e + "\n" + "闲鱼" + setting.xy_app_version_f + ":\n" + setting.xy_app_url_bak_f + "\n" + "转转" + setting.zz_app_version + ":\n" + setting.zz_app_url_bak + "\n" + "拼多多" + setting.pdd_app_version + ":\n" + setting.pdd_app_url_bak + "\n" + "小红书" + setting.hs_app_version + ":\n" + setting.xhs_app_url_bak + "\n" + "抖音" + setting.dy_app_version + ":\n" + setting.dy_app_url_bak + "\n");
    let _0x4482eb = new Intent();
    _0x4482eb.setAction(Intent.ACTION_VIEW);
    _0x4482eb.addCategory(Intent.CATEGORY_BROWSABLE);
    _0x4482eb.setData(Uri.parse(_0x1ff8dc));
    app.startActivity(_0x4482eb);
    console.log("请等待浏览器下载完成后手动完成安装");
  },
  "web_log": function (_0x4a36b4, _0x351b1d) {
    threads.start(function () {
      if (_0x351b1d == "danger") {
        {
          console.error(_0x4a36b4);
        }
      }
      let _0xa9424c = http.post(setting.api_domain + "gateway_send_message", {
        "type": "aj_to_web_back_message",
        "status": _0x351b1d,
        "msg": setting.phone_name + "：" + _0x4a36b4,
        "access_token": setting.s.get("access_token")
      });
      console.verbose("日志回传总控...");
    });
  },
  "web_log_and_reload_task": function (_0x175276, _0x28a4ba) {
    if (setting.xy_dk == "先主后副") {
      {
        if (setting.xzhf == "z") {
          toast("主闲鱼 " + _0x28a4ba);
          console.info("主闲鱼 " + _0x28a4ba);
          if (_0x175276) {
            {
              common.web_log("主闲鱼 " + _0x28a4ba, "success");
              common.reload_task_table(_0x175276, "run", "", 50);
            }
          }
        } else if (setting.xzhf == "f") {
          toast("副闲鱼 " + _0x28a4ba);
          console.info("副闲鱼 " + _0x28a4ba);
          if (_0x175276) {
            {
              common.web_log("副闲鱼 " + _0x28a4ba, "success");
              common.reload_task_table(_0x175276, "end", "", 100);
            }
          }
        }
      }
    } else if (setting.xy_dk == "开") {
      {
        toast("副闲鱼 " + _0x28a4ba);
        console.info("副闲鱼 " + _0x28a4ba);
        if (_0x175276) {
          {
            common.web_log("副闲鱼 " + _0x28a4ba, "success");
            common.reload_task_table(_0x175276, "end", "", 100);
          }
        }
      }
    } else {
      {
        toast(_0x28a4ba);
        console.info(_0x28a4ba);
        if (_0x175276) {
          common.web_log(_0x28a4ba, "success");
          common.reload_task_table(_0x175276, "end");
        }
      }
    }
  },
  "reload_task_table": function (_0x5c9908, _0x5baeb6, _0x113d09, _0x554334) {
    _0x113d09 = _0x113d09 || "";
    _0x554334 = _0x554334 || "";
    threads.start(function () {
      {
        let _0x9944b1 = http.post(setting.api_domain + "gateway_send_message", {
          "type": "reload_task_table",
          "status": _0x5baeb6,
          "task_id": _0x5c9908,
          "mark": _0x113d09,
          "num": _0x554334,
          "access_token": setting.s.get("access_token")
        });
      }
    });
  },
  "device_online": function () {
    threads.start(function () {
      {
        http.post(setting.api_domain + "gateway_send_message", {
          "type": "device_online",
          "msg": setting.phone_name + "：" + "设备成功上线",
          "access_token": setting.s.get("access_token")
        });
      }
    });
  },
  "back_xy_home": function (_0x3f6fbd) {
    while (common.xy_home_page_not_exists()) {
      {
        if (currentPackage() == setting.xy_pname) {
          {
            back();
            toastLog("等待闲鱼首屏出现");
            sleep(3500);
            if (desc("确定要退出发布吗？").exists() && desc("确定退出").exists()) {
              desc("确定退出").findOne().click();
              sleep(2000);
            }
          }
        }
      }
    }
  },
  "zz_home": function () {
    console.verbose("等待进入转转首屏");
    if (currentPackage() === setting.zz_pname) {
      {
        console.verbose("当前页面在转转App");
        launch(setting.zz_pname);
        sleep(2500);
        while (!id("f6y").exists()) {
          let _0x40606c = "等待转转首屏出现";
          console.verbose(_0x40606c);
          toast(_0x40606c);
          back();
          sleep(3000);
        }
      }
    } else {
      {
        if (setting.zz_dk == "开") {
          {
            let _0x3b6b23 = "您开启了'转转多开'，请您手动点开一个转转";
            common.web_log(_0x3b6b23, "info");
            console.log("您创建任务时选择了'转转多开'，多开的意思是您已使用第三方多开软件在手机安装了多个转转（不推荐多开，建议一机一卡一号），请您手动点开一个转转，系统会在这个转转运行任务");
            while (!id("f6y").exists()) {
              sleep(3500);
              toast(_0x3b6b23);
              console.warn(_0x3b6b23);
            }
          }
        } else {
          console.verbose("打开转转...");
          launch(setting.zz_pname);
          sleep(1000);
          common.allow_open();
          for (let _0x2e9647 = 0; _0x2e9647 < 12; _0x2e9647++) {
            if (id("f6y").exists()) {
              break;
            }
            sleep(1000);
          }
          _0x2e9647 = 6;
          while (!id("f6y").exists()) {
            {
              toast("等待转转首屏出现" + _0x2e9647);
              _0x2e9647--;
              back();
              sleep(3000);
              if (_0x2e9647 == 0) {
                break;
              }
            }
          }
        }
      }
    }
    let _0x5d8f92 = "转转首屏出现";
    console.verbose(_0x5d8f92);
    toast(_0x5d8f92);
  },
  "hs_home": function () {
    console.verbose("等待进入红薯首屏");
    if (currentPackage() === setting.hs_pname) {
      console.verbose("当前页面在红薯App");
      launch(setting.hs_pname);
      sleep(2500);
      while (!id("dx0").exists()) {
        {
          let _0x513a1b = "等待红薯首屏出现";
          console.verbose(_0x513a1b);
          toast(_0x513a1b);
          back();
          sleep(3000);
        }
      }
    } else {
      if (setting.hs_dk == "开") {
        let _0x3a2522 = "您开启了'红薯多开'，请您手动点开一个红薯";
        common.web_log(_0x3a2522, "info");
        console.log("您创建任务时选择了'红薯多开'，多开的意思是您已使用第三方多开软件在手机安装了多个红薯（不推荐多开，建议一机一卡一号），请您手动点开一个红薯，系统会在这个红薯运行任务");
        while (!id("dx0").exists()) {
          sleep(3500);
          toast(_0x3a2522);
          console.warn(_0x3a2522);
        }
      } else {
        {
          console.verbose("打开红薯...");
          launch(setting.hs_pname);
          sleep(1000);
          common.allow_open();
          for (let _0x1d5ca7 = 0; _0x1d5ca7 < 12; _0x1d5ca7++) {
            if (id("dx0").exists()) {
              {
                break;
              }
            }
            sleep(1000);
          }
          _0x1d5ca7 = 6;
          while (!id("dx0").exists()) {
            toast("等待红薯首屏出现" + _0x1d5ca7);
            _0x1d5ca7--;
            back();
            sleep(3000);
            if (_0x1d5ca7 == 0) {
              break;
            }
          }
        }
      }
    }
    let _0x5529f7 = "红薯首屏出现";
    console.verbose(_0x5529f7);
    toast(_0x5529f7);
  },
  "dy_home": function () {
    console.verbose("等待进入抖音首屏");
    if (currentPackage() === setting.dy_pname) {
      console.verbose("当前页面在抖音App");
      launch(setting.dy_pname);
      sleep(2500);
      while (!text("首页").exists()) {
        let _0x7e8a6 = "等待抖音首屏出现";
        console.verbose(_0x7e8a6);
        toast(_0x7e8a6);
        back();
        sleep(3000);
      }
    } else {
      if (setting.dy_dk == "开") {
        {
          let _0x22d167 = "您开启了'抖音多开'，请您手动点开一个抖音";
          common.web_log(_0x22d167, "info");
          console.log("您创建任务时选择了'抖音多开'，多开的意思是您已使用第三方多开软件在手机安装了多个抖音（不推荐多开，建议一机一卡一号），请您手动点开一个抖音，系统会在这个抖音运行任务");
          while (!text("首页").exists()) {
            sleep(3500);
            toast(_0x22d167);
            console.warn(_0x22d167);
          }
        }
      } else {
        console.verbose("打开抖音...");
        launch(setting.dy_pname);
        sleep(1000);
        common.allow_open();
        for (let _0x24cb02 = 0; _0x24cb02 < 12; _0x24cb02++) {
          if (text("首页").exists()) {
            break;
          }
          sleep(1000);
        }
        _0x24cb02 = 6;
        while (!text("首页").exists()) {
          {
            toast("等待抖音首屏出现" + _0x24cb02);
            _0x24cb02--;
            back();
            sleep(3000);
            if (_0x24cb02 == 0) {
              {
                break;
              }
            }
          }
        }
      }
    }
    let _0xc82630 = "抖音首屏出现";
    console.verbose(_0xc82630);
    toast(_0xc82630);
  },
  "restart_xy": function () {
    console.verbose("准备重启闲鱼...");
    console.log("为什么会重启闲鱼：\n1.闲鱼的控件无法点击（手工也无法点击），需重启闲鱼才能点击，如一直重启可过会再试或更换闲鱼版本\n2.闲鱼运行时间长了会占用手机运行内存，手机内存不足会导致闲鱼运行不稳定\n3.您手动运行了重启闲鱼任务");
    if (setting.is_root) {
      {
        shell("am force-stop com.taobao.idlefish", true);
        sleep(7000);
        common.xy_home();
        sleep(3000);
      }
    } else {
      {
        common.closeapp(setting.xy_pname);
        common.xy_home();
        sleep(3000);
      }
    }
  },
  "xy_home_page_not_exists": function () {
    return !text("闲鱼").exists() && !text("首页").exists() || !text("消息").exists();
  },
  "start_click_xy_double": function () {
    if (setting.xy_dk == "先主后副" && setting.app_num == 1) {
      {
        console.error("创建任务时的'执行应用'选择了'先主后副'，但本设备并未设置双开");
        console.error("请前往 系统主页->设备列表 设置本设备为双开模式");
        toast("创建任务时的'执行应用'选择了'先主后副'，但本设备并未设置双开，请前往 系统主页->设备列表 设置本设备为双开模式");
      }
    }
    if (setting.app_num == 2) {
      {
        if (setting.xy_dk == "关") {
          {
            toastLog("启动主闲鱼");
            var _0xa69153 = 0;
          }
        } else if (setting.xy_dk == "开") {
          {
            toastLog("启动副闲鱼");
            var _0xa69153 = 1;
          }
        } else if (setting.xy_dk == "先主后副") {
          if (setting.xzhf == "z") {
            {
              toastLog("启动主闲鱼");
              var _0xa69153 = 0;
            }
          } else if (setting.xzhf == "f") {
            toastLog("启动副闲鱼");
            var _0xa69153 = 1;
          }
        } else {
          console.error(setting.xy_dk);
          console.error("未获取主副应用参数，将默认选择主闲鱼");
          var _0xa69153 = 0;
          setting.xy_dk = "关";
        }
        var _0x43cee2 = true;
        for (let _0x442399 = 0; _0x442399 < 12; _0x442399++) {
          if (text("闲鱼").find().length == 2) {
            {
              _0x43cee2 = true;
              var _0x39131c = text("闲鱼").find()[_0xa69153];
              break;
            }
          } else if (desc("闲鱼").find().length == 2) {
            _0x43cee2 = true;
            var _0x39131c = desc("闲鱼").find()[_0xa69153];
            break;
          } else if (textStartsWith("闲鱼").find().length == 2) {
            {
              _0x43cee2 = true;
              var _0x39131c = textStartsWith("闲鱼").find()[_0xa69153];
              break;
            }
          } else if (descStartsWith("闲鱼").find().length == 2) {
            {
              _0x43cee2 = true;
              var _0x39131c = descStartsWith("闲鱼").find()[_0xa69153];
              break;
            }
          }
          if (textEndsWith("闲鱼").find().length == 2) {
            {
              _0x43cee2 = true;
              var _0x39131c = textEndsWith("闲鱼").find()[_0xa69153];
              break;
            }
          } else if (descEndsWith("闲鱼").find().length == 2) {
            {
              _0x43cee2 = true;
              var _0x39131c = descEndsWith("闲鱼").find()[_0xa69153];
              break;
            }
          } else if (textContains("闲鱼").find().length == 2) {
            {
              _0x43cee2 = true;
              var _0x39131c = textContains("闲鱼").find()[_0xa69153];
              break;
            }
          } else if (descContains("闲鱼").find().length == 2) {
            _0x43cee2 = true;
            var _0x39131c = descContains("闲鱼").find()[_0xa69153];
            break;
          } else {
            sleep(500);
            _0x43cee2 = false;
            if (_0x442399 == 10) {
              console.warn("提示：请确保手机系统语言为简体中文，繁体、英语会造成打开双开应用异常");
              console.verbose("调试信息：" + text("闲鱼").find().length + "," + desc("闲鱼").find().length + "," + textContains("闲鱼").find().length + "," + descContains("闲鱼").find().length + "," + textStartsWith("闲鱼").find().length + "," + descStartsWith("闲鱼").find().length + "," + textEndsWith("闲鱼").find().length + "," + textEndsWith("闲鱼").find().length);
            }
          }
        }
        if (_0x43cee2) {
          {
            if (_0x39131c) {
              {
                if (_0x39131c.clickable()) {
                  {
                    _0x39131c.click();
                    sleep(1000);
                    console.verbose("点击闲鱼应用成功");
                  }
                } else if (_0x39131c.parent().clickable()) {
                  _0x39131c.parent().click();
                  sleep(1000);
                  console.verbose("点击闲鱼成功");
                } else if (_0x39131c.parent().parent().clickable()) {
                  _0x39131c.parent().parent().click();
                  sleep(1000);
                  console.verbose("点击闲鱼应用成功.");
                } else {
                  {
                    console.error("未找到可点击的闲鱼控件");
                  }
                }
              }
            } else {
              console.error("xy_ele为空");
            }
          }
        } else {
          {
            if (setting.xy_dk == "开") {
              console.warn("创建任务时的'执行应用'选择了'副闲鱼'，但未能找到双开的闲鱼应用");
            }
          }
        }
      }
    } else {
      {
        if (setting.xy_dk == "关") {} else if (setting.xy_dk == "开") {
          {
            console.error("创建任务时的'执行应用'选择了'副闲鱼'，但本设备并未设置双开");
            console.error("请前往 系统主页->设备列表 设置本设备为双开模式");
            toast("创建任务时的'执行应用'选择了'副闲鱼'，但本设备并未设置双开，请前往 系统主页->设备列表 设置本设备为双开模式");
          }
        }
      }
    }
  },
  "allow_open": function () {
    if (text("允许").exists()) {
      text("允许").click();
      console.log("点击允许启动");
      sleep(2000);
    } else if (text("始终允许").exists()) {
      text("始终允许").click();
      console.log("点击始终允许启动");
      sleep(2000);
    } else if (desc("始终允许").exists()) {
      {
        desc("始终允许").click();
        console.log("点击允许启动");
        sleep(2000);
      }
    } else if (desc("允许").exists()) {
      {
        desc("允许").click();
        console.log("点击始终允许启动");
        sleep(2000);
      }
    }
  },
  "xy_home": function () {
    common.start_xy_son();
    common.allow_open();
    console.verbose("如果闲鱼长时间未启动，可能是因为您拒绝了本软件启动闲鱼");
    common.start_click_xy_double();
    common.allow_open();
    for (let _0x2a7377 = 0; _0x2a7377 < 8; _0x2a7377++) {
      if (text("闲鱼").exists() || text("消息").exists()) {
        break;
      }
      sleep(1000);
    }
    while (common.xy_home_page_not_exists()) {
      back();
      toastLog("等待闲鱼首屏出现");
      sleep(3500);
      if (desc("确定要退出发布吗？").exists() && desc("确定退出").exists()) {
        desc("确定退出").findOne().click();
        sleep(2000);
      }
    }
    console.verbose("闲鱼已启动");
    sleep(1000);
  },
  "start_xy_bak": function () {
    if (currentPackage() == setting.xy_pname) {
      {
        while (common.xy_home_page_not_exists()) {
          {
            back();
            toastLog("等待闲鱼首屏出现");
            sleep(3500);
            if (desc("确定要退出发布吗？").exists() && desc("确定退出").exists()) {
              desc("确定退出").findOne().click();
              sleep(2000);
            }
          }
        }
      }
    } else {
      if (setting.xy_dk == "开") {
        let _0x763449 = "您开启了'闲鱼多开'，请您手动点开一个闲鱼";
        toastLog(_0x763449);
        console.log("您创建任务时选择了'闲鱼多开'，多开的意思是您已使用第三方多开软件在手机安装了多个闲鱼（不推荐多开，建议一机一卡一号），请您手动点开一个闲鱼，系统会在这个闲鱼运行任务");
        common.web_log(_0x763449, "info");
        while (common.xy_home_page_not_exists()) {
          {
            sleep(3500);
            toast(_0x763449);
            console.warn(_0x763449);
          }
        }
      } else {
        common.start_xy_son();
        sleep(1000);
        common.allow_open();
        console.verbose("如果闲鱼长时间未启动，可能是因为您拒绝了本软件启动闲鱼");
        for (let _0x3eedf5 = 0; _0x3eedf5 < 8; _0x3eedf5++) {
          {
            if (text("闲鱼").exists() || text("消息").exists()) {
              break;
            }
            sleep(1000);
          }
        }
        while (common.xy_home_page_not_exists()) {
          {
            back();
            toastLog("等待闲鱼首屏出现");
            sleep(3500);
            if (desc("确定要退出发布吗？").exists() && desc("确定退出").exists()) {
              desc("确定退出").findOne().click();
              sleep(2000);
            }
          }
        }
        console.verbose("闲鱼已启动");
      }
    }
  },
  "start_xy_son": function () {
    toastLog("正在启动闲鱼...");
    if (setting.is_root) {
      {
        app.startActivity({
          "packageName": "com.taobao.idlefish",
          "className": "com.taobao.fleamarket.home.activity.InitActivity",
          "root": true
        });
      }
    } else {
      {
        launch(setting.xy_pname);
      }
    }
    sleep(2000);
  },
  "start_double_xy_son": function () {
    toastLog("正在启动闲鱼...");
    if (setting.is_root) {
      app.startActivity({
        "packageName": "com.taobao.idlefish",
        "className": "com.taobao.fleamarket.home.activity.InitActivity",
        "root": true
      });
    } else {
      {
        launch(setting.xy_pname);
      }
    }
    sleep(2000);
    common.start_click_xy_double();
  },
  "closeapp": function (_0x147e0c) {
    console.log("提示：请确保手机系统语言为简体中文，繁体、英语会造成关闭App异常");
    var _0x5070cc = app.getAppName(_0x147e0c);
    console.verbose("准备关闭" + _0x5070cc);
    app.openAppSetting(_0x147e0c);
    sleep(2000);
    text(_0x5070cc).waitFor();
    sleep(500);
    let _0x10f96d = /(.*强.*|.*停.*|.*结.*)/;
    let _0xa0fa06 = textMatches(_0x10f96d).findOne();
    if (_0xa0fa06.enabled()) {
      if (textMatches(_0x10f96d).clickable(true).exists()) {
        {
          textMatches(_0x10f96d).clickable(true).findOne().click();
          sleep(600);
        }
      } else if (textMatches(_0x10f96d).clickable(false).findOne().parent().clickable()) {
        textMatches(_0x10f96d).clickable(false).findOne().parent().click();
        sleep(600);
      } else {
        {
          console.error("未发现结束程序运行按钮，请截图联系管理员适配");
        }
      }
      textMatches(/(.*确.*|.*定.*|.*强.*|.*停.*|.*结.*)/).clickable(true).findOne().click();
      sleep(600);
      toastLog(_0x5070cc + "应用已被关闭");
      sleep(1000);
      back();
    } else {
      {
        log(_0x5070cc + "应用不能被正常关闭或不在后台运行");
        back();
      }
    }
  },
  "get_goods": function (_0x3bae13, _0x514084) {
    goods_arr = [];
    _0x3bae13.forEach(function (_0xfd9dfd, _0x172ade) {
      url = setting.api_domain + "get_goods?id_aj=" + _0xfd9dfd + "&access_token=" + setting.s.get("access_token") + "&wenan=" + _0x514084;
      var _0x37d459 = http.get(url);
      try {
        var _0x57642b = _0x37d459.body.json();
        if (_0x57642b.code === 0) {
          goods_arr.push(_0x57642b.data);
          console.verbose("第" + (_0x172ade + 1) + "个宝贝获取成功");
        }
      } catch (_0x2a78ed) {
        console.error("第" + (_0x172ade + 1) + "个宝贝数据异常或该宝贝已被删除");
      }
      sleep(200);
    });
    return goods_arr;
  },
  "get_posts": function (_0x3b9a3c) {
    goods_arr = [];
    _0x3b9a3c.forEach(function (_0x1845b3, _0x10cc9d) {
      {
        url = setting.api_domain + "/get_post?id=" + _0x1845b3 + "&access_token=" + setting.s.get("access_token");
        var _0x4e4ee3 = http.get(url);
        var _0x563017 = JSON.parse(_0x4e4ee3.body.string());
        if (_0x563017.code === 0) {
          goods_arr.push(_0x563017.data);
          console.verbose("第" + (_0x10cc9d + 1) + "篇帖子获取成功");
        } else {
          console.log("获取帖子数据错误：" + _0x563017.msg);
        }
      }
    });
    return goods_arr;
  },
  "get_hym": function () {
    console.verbose("开始获取闲鱼会员名");
    try {
      {
        app.startActivity({
          "extras": {
            "url": "https://h5.m.goofish.com/app/idleFish-F2e/personal-new/home.html?isOldFriendly=false&_from__=settings"
          },
          "packageName": "com.taobao.idlefish",
          "className": "com.taobao.idlefish.webview.WebHybridActivity"
        });
        common.start_click_xy_double();
      }
    } catch (_0x1563cf) {
      {
        console.error(_0x1563cf);
        console.error("极少数安卓版本为13、14的oppo、vivo、小米手机无法通过Activity打开闲鱼的页面，获取会员名失败");
        return false;
      }
    }
    console.verbose("等待'个人资料设置-会员名'出现");
    for (let _0x5f67a2 = 0; _0x5f67a2 < 8; _0x5f67a2++) {
      sleep(2000);
      if (textStartsWith("会员名").exists()) {
        {
          break;
        }
      }
      if (desc("会员名").exists()) {
        break;
      }
    }
    for (let _0x512f0f = 0; _0x512f0f < 5; _0x512f0f++) {
      if (textStartsWith("填写专属昵称").exists() || descStartsWith("填写专属昵称").exists()) {
        sleep(1000);
      } else {
        break;
      }
    }
    sleep(3000);
    if (!textStartsWith("会员名").exists() && !desc("会员名").exists()) {
      while (true) {
        console.warn("等待'会员名'出现");
        let _0x56471e = "请授予系统后台弹出界面权限或悬浮窗权限，授予权限后请重启本软件。";
        console.error(_0x56471e);
        toast(_0x56471e);
        console.log("请前往手机系统的 设置->权限管理 授予系统后台弹出界面权限或悬浮窗权限。如果您自己找不到这两项权限，请百度xx手机xx权限，比如您的手机型号是vivo x27，您可百度'vivo x27后台弹出界面权限如何设置'或'vivo x27悬浮窗权限如何设置'");
        sleep(5600);
      }
    }
    console.verbose("等待'会员名'出现");
    if (text("会员名").exists()) {
      {
        let _0x314437 = text("会员名").findOne();
        let _0x2d4e22 = _0x314437.depth();
        let _0x586baa = _0x314437.indexInParent();
        xy_name = _0x314437.parent().find(depth(_0x2d4e22).indexInParent(_0x586baa + 1))[0].text();
      }
    } else if (textStartsWith("会员名").exists()) {
      console.verbose("会员名textStartsWith存在");
      xy_name = textStartsWith("会员名").findOne().text().split("会员名")[1];
    } else if (desc("会员名").exists()) {
      let _0x4d7d95 = desc("会员名").findOne();
      let _0x2d4e22 = _0x4d7d95.depth();
      let _0x586baa = _0x4d7d95.indexInParent();
      xy_name = _0x4d7d95.parent().find(depth(_0x2d4e22).indexInParent(_0x586baa + 1))[0].desc();
    } else {
      console.error("'会员名'不存在");
    }
    var _0x27071c = "";
    try {
      if (text("昵称").exists()) {
        let _0x58570f = text("昵称").findOne();
        _0x27071c = _0x58570f.parent().find(indexInParent(_0x58570f.indexInParent() + 1))[0].text();
      }
    } catch (_0x235c91) {
      console.error("获取昵称失败");
    }
    console.verbose("会员名：" + xy_name);
    console.verbose("昵称：" + _0x27071c);
    back();
    sleep(500);
    return [xy_name, _0x27071c];
  },
  "swipe_fl_ele": function () {
    for (let _0x5689cf = 0; _0x5689cf < 20; _0x5689cf++) {
      if (!descStartsWith("分类/").exists() && !descStartsWith("更多信息").exists()) {
        {
          common.my_swipe(device.width / 2, device.height * 5 / 10, device.width / 2, device.height * 6 / 10, 250);
          sleep(800);
          console.verbose("调整分类/品牌位置中...");
        }
      } else {
        {
          break;
        }
      }
    }
    if (!descStartsWith("分类/").exists() && !descStartsWith("更多信息").exists()) {
      {
        console.warn("分类/品牌位置调整失败");
      }
    }
  },
  "swipe_fl_ele_xf": function () {
    for (let _0x4fdfd2 = 0; _0x4fdfd2 < 20; _0x4fdfd2++) {
      if (!desc("分类, 分类").exists() && !descStartsWith("分类, 更多信息").exists()) {
        {
          common.my_swipe(device.width / 2, device.height * 5 / 10, device.width / 2, device.height * 6 / 10, 250);
          sleep(800);
          console.verbose("调整分类/品牌位置中...");
        }
      } else {
        break;
      }
    }
    if (!desc("分类, 分类").exists() && !descStartsWith("分类, 更多信息").exists()) {
      console.warn("分类/品牌位置调整失败xf");
    }
  },
  "titles_get_goods": function (_0x4c16b7) {
    goods_arr = [];
    _0x4c16b7.forEach(function (_0x35722e, _0x3c7ba0) {
      {
        url = setting.api_domain + "/gTitle_get_gDetail?title=" + _0x35722e + "&access_token=" + setting.s.get("access_token");
        var _0x464d1e = http.get(url);
        var _0x462378 = JSON.parse(_0x464d1e.body.string());
        if (_0x462378.code === 0 && _0x462378.data) {
          goods_arr.push(_0x462378.data);
        } else {
          {
            console.verbose("宝贝标题：" + _0x35722e);
            console.error("获取商品数据错误：" + _0x462378.msg);
          }
        }
      }
    });
    return goods_arr;
  },
  "download_img": function (_0x3e387c, _0x5d10d8, _0x545ea2) {
    while (setting.clear_img_ing) {
      sleep(3500);
      toastLog("清理图片缓存中...");
    }
    if (_0x5d10d8.length == 0) {
      console.log("该宝贝图片为空，跳过下载");
      return false;
    }
    var _0x3cb9d0 = android.os.Environment;
    _0x4e695f = _0x3cb9d0.getExternalStoragePublicDirectory(_0x3cb9d0.DIRECTORY_DCIM).getAbsolutePath() + "/";
    var _0x4e695f = files.join(_0x4e695f, _0x3e387c);
    var _0x59d09f = _0x5d10d8.length;
    _0x5d10d8 = _0x5d10d8.slice(0, _0x59d09f);
    for (var _0x13586a = 0; _0x13586a < _0x5d10d8.length; _0x13586a++) {
      {
        if (_0x5d10d8[_0x13586a].indexOf("?") != -1) {
          _0x5d10d8[_0x13586a] = _0x5d10d8[_0x13586a] + "imageMogr2/auto-orient|imageView2/4/w/1200/h/1200";
        } else {
          {
            _0x5d10d8[_0x13586a] = _0x5d10d8[_0x13586a] + "?imageMogr2/auto-orient|imageView2/4/w/1200/h/1200";
          }
        }
      }
    }
    try {
      for (var _0x13586a = 0; _0x13586a < _0x59d09f; _0x13586a++) {
        {
          img_url = setting.image_domain + _0x5d10d8[_0x13586a];
          img_type = ".png";
          var _0x363b23 = files.join(_0x4e695f, _0x13586a + img_type);
          var _0x1aaa65 = files.createWithDirs(_0x363b23);
          var _0x38e7a3 = http.get(img_url);
          var _0x903935 = _0x38e7a3.body.bytes();
          files.writeBytes(_0x363b23, _0x903935);
          if (_0x545ea2) {
            {
              m = "第" + (_0x13586a + 1) + "张图片下载成功";
              toast(m);
              console.verbose(m);
            }
          }
          sleep(1500);
          this.update_MediaStore(_0x363b23);
          sleep(500);
          setting.download_img_err_num = 0;
        }
      }
    } catch (_0x2e498f) {
      sleep(5000);
      setting.download_img_err_num += 1;
      if (setting.download_img_err_num > 3) {
        while (true) {
          {
            m = "图片下载尝试3次后仍无法下载，请检查助手的文件读写或网络权限是否正确（华为手机请关闭纯净模式）";
            console.log(img_url);
            toast(m);
            console.error(_0x2e498f);
            console.error(m);
            console.error(m);
            console.error(m);
            sleep(5000);
          }
        }
      } else {
        m = "图片下载失败，即将进行第次" + setting.download_img_err_num + "重试";
        toast(m);
        console.error(m);
        common.download_img(_0x3e387c, _0x5d10d8, false);
      }
    }
    console.verbose("开始处理图片MD5值...");
  },
  "download_cos_video": function (_0x7b4839, _0x432530) {
    var _0x122ede = android.os.Environment;
    aibum_path = _0x122ede.getExternalStoragePublicDirectory(_0x122ede.DIRECTORY_DCIM).getAbsolutePath() + "/";
    try {
      let _0x29c4f5 = setting.yxx_video_domain + _0x432530;
      var _0x5aefda = files.createWithDirs(_0x24cd0a);
      var _0x24cd0a = files.join(aibum_path + "v_" + _0x7b4839, _0x7b4839 + ".mp4");
      var _0x5aefda = files.createWithDirs(_0x24cd0a);
      var _0x587333 = http.get(_0x29c4f5);
      var _0x3e9c1e = _0x587333.body.bytes();
      files.writeBytes(_0x24cd0a, _0x3e9c1e);
      this.update_MediaStore(_0x24cd0a);
      sleep(500);
    } catch (_0x4e2470) {
      {
        console.error(_0x4e2470);
        console.error("自动回复视频下载失败");
      }
    }
  },
  "download_cos_audio": function (_0x3102a4, _0x514908) {
    try {
      let _0x58ba8b = setting.yxx_audio_domain + _0x514908;
      var _0x34529a = engines.myEngine().cwd() + "/" + _0x3102a4 + ".mp3";
      var _0xb3e510 = http.get(_0x58ba8b);
      var _0x153dac = _0xb3e510.body.bytes();
      files.writeBytes(_0x34529a, _0x153dac);
    } catch (_0x14744b) {
      console.error(_0x14744b);
      console.error("自动回复音频下载失败");
    }
  },
  "download_video": function (_0x164654) {
    while (setting.clear_img_ing) {
      sleep(3500);
      toastLog("清理图片缓存中...");
    }
    let _0x5261ae = "";
    try {
      if (_0x164654.vcode) {
        {
          console.verbose("准备开始获取视频链接...");
          var _0x550fce = setting.api_domain + "get_video_url";
          var _0x116965 = http.post(_0x550fce, {
            "vcode": _0x164654.vcode,
            "access_token": setting.s.get("access_token")
          });
          var _0x161e8b = _0x116965.body.json();
          _0x5261ae = _0x161e8b.data.data.download_url;
        }
      } else if (_0x164654.auto_video) {
        console.verbose("开始合成视频...");
        let _0x5ba53d = "https://service-fd6e74hb-1251927313.sh.apigw.tencentcs.com/release/img_to_mp4";
        var _0x116965 = http.postJson(_0x5ba53d, {
          "id": _0x164654.id,
          "video_music": _0x164654.video_music,
          "images": _0x164654.images
        });
        var _0x161e8b = _0x116965.body.json();
        console.verbose("图片合成结果：");
        console.verbose(_0x161e8b);
        if (_0x161e8b && _0x161e8b == true) {
          _0x5261ae = setting.img_to_mp4_domain + _0x164654.id + ".mp4";
        } else {
          _0x164654.auto_video = false;
          return false;
        }
      } else {
        {
          return false;
        }
      }
    } catch (_0x2380a5) {
      console.error(_0x2380a5);
      _0x164654.vcode = false;
      _0x164654.auto_video = false;
      return false;
    }
    var _0x5a7c87 = android.os.Environment;
    _0x2942e7 = _0x5a7c87.getExternalStoragePublicDirectory(_0x5a7c87.DIRECTORY_DCIM).getAbsolutePath() + "/";
    var _0x2942e7 = files.join(_0x2942e7, "v_" + _0x164654.title_md5);
    console.verbose("视频保存路径：" + _0x2942e7);
    try {
      console.verbose("视频下载地址：" + _0x5261ae);
      var _0xd7d5af = files.join(_0x2942e7, _0x164654.id + ".mp4");
      var _0x18f91e = files.createWithDirs(_0xd7d5af);
      var _0x116965 = http.get(_0x5261ae);
      var _0x2e4e61 = _0x116965.body.bytes();
      files.writeBytes(_0xd7d5af, _0x2e4e61);
      toastLog("视频下载成功");
      this.update_MediaStore(_0xd7d5af);
      sleep(500);
    } catch (_0x4d6783) {
      {
        console.error(_0x4d6783);
        toastLog("视频下载失败");
        _0x164654.vcode = false;
        _0x164654.auto_video = false;
      }
    }
  },
  "clear_dbt": function (_0x5032e9) {
    if (!descEndsWith("短标题").exists()) {
      {
        common.my_swipe(device.width / 2, device.height * 5 / 10, device.width / 2, device.height * 6 / 10, 250);
        sleep(500);
      }
    }
    if (descEndsWith("短标题").exists()) {
      if (_0x5032e9 == "open") {
        console.verbose("检测到闲鱼给宝贝自动生成了短标题。如果不想用，发布时把「自动短标题」开关关掉就行了");
      } else {
        while (descEndsWith("短标题").findOne().find(className("android.widget.EditText")).length === 0) {
          common.my_swipe(device.width / 2, device.height * 5 / 10, device.width / 2, device.height * 6 / 10, 250);
          sleep(1000);
          console.verbose("再次下拉页面，等待短标题编辑框出现");
        }
        console.verbose("准备去除闲鱼的短标题...");
        sleep(2000);
        descEndsWith("短标题").findOne().find(className("android.widget.EditText"))[0].click();
        sleep(500);
        descEndsWith("短标题").findOne().find(className("android.widget.EditText"))[0].setText("");
        sleep(500);
        back();
        sleep(500);
      }
    }
  },
  "goods_publish": function (_0xd08c8d, _0x19b37e) {
    for (var _0x2c4588 = 0; _0x2c4588 < 30; _0x2c4588++) {
      console.verbose("准备点击发布按钮...");
      sleep(2500);
      if (desc("发布").exists()) {
        {
          sleep(500);
          setting.goods_dep = desc("发布").findOne().depth();
          break;
        }
      } else if (desc("发布, 发布").exists()) {
        sleep(500);
        setting.goods_dep = desc("发布, 发布").findOne().depth();
        break;
      }
    }
    if (!descStartsWith("发布").exists()) {
      {
        common.xy_home();
        return false;
      }
    }
    if (textStartsWith("说说你的使用感受").exists()) {
      console.verbose("宝贝详情加载失败，开始返回首页");
      common.xy_home();
      return false;
    }
    if (setting.now_area && _0xd08c8d) {
      change_location();
    }
    for (let _0x2c4588 = 0; _0x2c4588 < 10; _0x2c4588++) {
      if (descStartsWith("发布").clickable().exists()) {
        {
          break;
        }
      }
      sleep(2000);
    }
    if (descStartsWith("发布").clickable().exists()) {
      console.verbose("准备点击“发布”");
      while (!descStartsWith("发布").clickable().findOne().click()) {}
    } else {
      toast("未找到发布按钮");
      sleep(2000);
      console.verbose("未找到发布按钮，返回上一层");
      back();
      sleep(2000);
    }
    sleep(3000);
    for (var _0x2c4588 = 0; _0x2c4588 < 120; _0x2c4588++) {
      {
        if (desc("照片视频上传中").exists()) {
          var _0x396b72 = "照片视频上传中";
          toast(_0x396b72);
          console.verbose(_0x396b72);
          sleep(3000);
        } else {
          {
            break;
          }
        }
      }
    }
    var _0xeee5cc = false;
    for (var _0x2c4588 = 0; _0x2c4588 < 60; _0x2c4588++) {
      {
        sleep(2000);
        if (setting.super_show == "open") {}
        if (descStartsWith("管理").exists()) {
          {
            _0xeee5cc = true;
            break;
          }
        }
        if (textStartsWith("管理").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (desc("去看看").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (text("TB1s91M1oT1gK0jSZFrXXcNCXXa-72-72.png_110x10000.jpg_").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (desc("亲，无法连接网络，请检查网络！\n我知道了").exists()) {
          {
            console.error("闲鱼出现提示：无法连接网络，请检查网络！");
            descEndsWith("我知道了").findOne().click();
            sleep(1000);
            common.goods_publish();
            break;
          }
        }
        if (className("android.view.View").desc("分享给好友卖得更快哦").exists()) {
          {
            _0xeee5cc = true;
            break;
          }
        }
        if (className("android.view.View").text("发布免费送").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (desc("发布成功 竞拍开始").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (desc("发布成功").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (descContains("再发一件").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (descContains("发布成功").exists()) {
          _0xeee5cc = true;
          break;
        }
        if (descStartsWith("请勿发布代写论文").exists()) {
          {
            console.warn("请勿发布代写论文、期刊代投等违规商品。点击“继续发布”即表示已确认并承诺不包含此类内容。\n继续发布宝贝将进入人工审核，未过审将会被下架或删除");
            console.verbose("点击继续发布");
            desc("继续发布").findOne().click();
            sleep(1000);
          }
        }
        if (descContains("二手车商品不支持多库存配置").exists()) {
          {
            console.error("无法发布宝贝，二手车商品不支持多库存配置");
            _0xeee5cc = false;
            break;
          }
        }
        if (descContains("您的标题或描述里面有表情").exists()) {
          console.error("无法发布宝贝，亲,您的标题或描述里面有表情,现在我们还不支持哦");
          _0xeee5cc = false;
          break;
        }
        if (descContains("您没有发布该类商品的资质！").exists()) {
          console.error("无法发布宝贝\n您没有发布该类商品的资质！");
          _0xeee5cc = false;
          break;
        }
        if (_0x2c4588 == 0 || _0x2c4588 == 5) {
          {
            if (descStartsWith("你还没有填写价格").exists()) {
              console.verbose("开始补填价格");
              desc("去填价格").findOne().click();
              sleep(3000);
              if (desc("看同款售价").exists() || descContains("此价格预估").exists()) {
                {
                  console.verbose("删除预估价");
                  if (className("EditText").exists()) {
                    className("EditText").findOne().click();
                    sleep(1000);
                  }
                  let _0x57db3e = desc("删除").findOne().bounds();
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.my_click(_0x57db3e.centerX(), _0x57db3e.centerY());
                  sleep(200);
                  common.enter_num(_0x19b37e.ykj_price2);
                  sleep(500);
                  desc("确定").findOne().click();
                  sleep(1000);
                  if (desc("确定").exists()) {
                    {
                      desc("确定").findOne().click();
                      sleep(500);
                    }
                  }
                }
              } else {
                common.enter_num(_0x19b37e.ykj_price2);
                sleep(500);
                desc("确定").findOne().click();
                sleep(500);
              }
              descStartsWith("发布").clickable().waitFor();
              sleep(600);
              common.goods_publish();
              return false;
            } else if (descContains("副业宝贝必须选择属性").exists()) {
              {
                console.verbose("点击 我知道了");
                descStartsWith("我知道了").findOne().click();
                sleep(2000);
                console.verbose("开始选择副业宝贝属性");
                for (let _0x2ba965 = 0; _0x2ba965 < 10; _0x2ba965++) {
                  if (descEndsWith("1小时").exists()) {
                    {
                      descEndsWith("1小时").findOne().click();
                      sleep(1000);
                      break;
                    }
                  } else if (descEndsWith("1天内").exists()) {
                    descEndsWith("1天内").findOne().click();
                    sleep(1000);
                    break;
                  } else if (descEndsWith("1-5天").exists()) {
                    {
                      descEndsWith("1-5天").findOne().click();
                      sleep(1000);
                      break;
                    }
                  } else if (descEndsWith("10分钟").exists()) {
                    descEndsWith("10分钟").findOne().click();
                    sleep(1000);
                    break;
                  } else if (descEndsWith("待议").exists()) {
                    descEndsWith("待议").findOne().click();
                    sleep(1000);
                    break;
                  } else if (descEndsWith("天内").exists()) {
                    descEndsWith("天内").findOne().click();
                    sleep(1000);
                    break;
                  } else if (descEndsWith("小时").exists()) {
                    descEndsWith("小时").findOne().click();
                    sleep(1000);
                    break;
                  } else if (descEndsWith("分钟").exists()) {
                    descEndsWith("分钟").findOne().click();
                    sleep(1000);
                    break;
                  } else if (descEndsWith("天").exists()) {
                    {
                      descEndsWith("天").findOne().click();
                      sleep(1000);
                      break;
                    }
                  } else {
                    {
                      console.verbose("副业宝贝必须选择属性:服务时长");
                    }
                  }
                  if (_0x2ba965 == 0) {
                    {
                      common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, 250);
                      sleep(800);
                      common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, 250);
                      sleep(800);
                      common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, 250);
                      sleep(800);
                    }
                  } else {
                    common.my_swipe(device.width / 2, device.height * 2 / 10, device.width / 2, device.height * 7 / 10, 250);
                    sleep(800);
                  }
                }
                common.goods_publish();
                return false;
              }
            } else if (descContains("请补充属性：3C认证").exists()) {
              console.verbose("请补充属性：3C认证");
              desc("我知道了~").findOne().click();
              sleep(2000);
              for (let _0x2b9f75 = 0; _0x2b9f75 < 10; _0x2b9f75++) {
                if (desc("有认证").exists()) {
                  {
                    desc("有认证").findOne().click();
                    sleep(1000);
                    break;
                  }
                } else {
                  {
                    console.verbose("请补充属性：3C认证");
                  }
                }
                if (_0x2b9f75 == 0) {
                  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, 250);
                  sleep(800);
                  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, 250);
                  sleep(800);
                  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, 250);
                  sleep(800);
                } else {
                  common.my_swipe(device.width / 2, device.height * 2 / 10, device.width / 2, device.height * 7 / 10, 250);
                  sleep(800);
                }
              }
              common.goods_publish();
              return false;
            }
          }
        }
        if (_0x2c4588 == 10) {
          console.verbose("已等待20秒");
          common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 9 / 10, 600);
          sleep(1000);
          common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 9 / 10, 600);
          sleep(1000);
          if (desc("一键打码").exists()) {
            console.verbose("图片含有二维码，开始打码");
            desc("一键打码").findOne().click();
            sleep(10000);
            common.goods_publish();
            return false;
          }
        }
        toastLog("等待发布成功");
      }
    }
    if (_0xeee5cc) {
      {
        toast("宝贝发布成功");
        console.verbose("宝贝发布成功");
        sleep(1000);
      }
    } else {
      let _0x396b72 = "宝贝发布失败";
      toast(_0x396b72);
      console.error(_0x396b72);
      console.error("失败原因：\n1.手机网络异常或闲鱼服务器异常，请测试手动发布是否能成功\n2.发布了有资质要求的宝贝，但您的账号无对应资质\n3.发布的宝贝属性不符合闲鱼要求，比如二手车设置了库存，描述中有特殊符号或特殊表情等等...");
      sleep(1000);
    }
    return true;
  },
  "remove_img": function (_0x3e54e) {
    var _0x1a9940 = android.os.Environment;
    _0x526b83 = _0x1a9940.getExternalStoragePublicDirectory(_0x1a9940.DIRECTORY_DCIM).getAbsolutePath() + "/";
    var _0x526b83 = files.join(_0x526b83, _0x3e54e);
    if (files.removeDir(_0x526b83)) {
      img_type = ".png";
      for (var _0x2ab7ec = 0; _0x2ab7ec < 10; _0x2ab7ec++) {
        {
          var _0x117a1a = files.join(_0x526b83, _0x2ab7ec + img_type);
          this.update_MediaStore(_0x117a1a);
        }
      }
    }
  },
  "remove_video": function (_0x45a34b) {
    if (!_0x45a34b) {
      {
        return;
      }
    }
    var _0x43bf29 = android.os.Environment;
    var _0x3034b4 = _0x43bf29.getExternalStoragePublicDirectory(_0x43bf29.DIRECTORY_DCIM).getAbsolutePath() + "/";
    _0x3034b4 = files.join(_0x3034b4, _0x45a34b);
    if (files.removeDir(_0x3034b4)) {
      {
        this.update_MediaStore(_0x3034b4);
      }
    }
  },
  "clear_img": function () {
    threads.start(function () {
      setting.clear_img_ing = true;
      var _0x334b29 = android.os.Environment;
      aibum_path = _0x334b29.getExternalStoragePublicDirectory(_0x334b29.DIRECTORY_DCIM).getAbsolutePath() + "/";
      var _0x13aeb3 = files.listDir(aibum_path);
      for (let _0x4924d1 = 0; _0x4924d1 < _0x13aeb3.length; _0x4924d1++) {
        {
          if (_0x13aeb3[_0x4924d1].length == 32) {
            common.remove_img(_0x13aeb3[_0x4924d1]);
          }
          if (_0x13aeb3[_0x4924d1].substr(0, 2) == "v_" && _0x13aeb3[_0x4924d1].length == 34) {
            common.remove_video(_0x13aeb3[_0x4924d1]);
          }
        }
      }
      setting.clear_img_ing = false;
      toastLog("缓存清除成功");
    });
  },
  "update_MediaStore": function (_0x3ba8f5) {
    media.scanFile(_0x3ba8f5);
    sleep(200);
  },
  "getVersionName": function (_0x1a8aa1) {
    var _0xed44b9 = context.getPackageManager();
    try {
      var _0x55d0a1 = _0xed44b9.getPackageInfo(_0x1a8aa1, 0);
    } catch (_0x1f3e6e) {
      return "未安装";
    }
    return _0x55d0a1.versionName;
  },
  "xyv_correct": function () {
    let _0xa9029a = common.getVersionName(setting.xy_pname);
    let _0x4dae64 = common.get_v_num(_0xa9029a);
    let _0xf21bae = common.get_v_num(setting.xy_app_version_d);
    let _0x22a058 = common.get_v_num(setting.xy_app_version_e);
    let _0x55a5d0 = common.get_v_num(setting.xy_app_version_f);
    if (_0x4dae64 >= _0x55a5d0) {
      setting.xf = true;
      return true;
    } else if (_0x4dae64 >= _0x22a058) {
      {
        setting.xe = true;
        return true;
      }
    } else if (_0x4dae64 >= _0xf21bae) {
      setting.xb = true;
      setting.xd = true;
      return false;
    } else {
      {
        return false;
      }
    }
  },
  "get_v_num": function (_0x5a6813) {
    if (_0x5a6813 == "未安装") {
      {
        return 0;
      }
    }
    let _0x21e8b7 = _0x5a6813.split(".");
    let _0x45ac77 = "";
    _0x21e8b7.forEach(_0x208569 => {
      {
        if (_0x208569.length == 1) {
          _0x45ac77 = _0x45ac77 + "0" + _0x208569;
        } else {
          _0x45ac77 = _0x45ac77 + _0x208569;
        }
      }
    });
    return Number(_0x45ac77);
  },
  "encodeToHtmlDecimal": function (_0x12e845) {
    var _0x384b58 = "";
    for (var _0x4fe96b = 0; _0x4fe96b < _0x12e845.length; _0x4fe96b++) {
      _0x384b58 += "&#" + _0x12e845.charCodeAt(_0x4fe96b) + ";";
    }
    return _0x384b58;
  },
  "decodeFromHtmlDecimal": function (_0x53afb8) {
    return _0x53afb8.replace(/&#(\d+);/g, function (_0x5bb3a6, _0x1a16df) {
      {
        return String.fromCharCode(parseInt(_0x1a16df, 10));
      }
    });
  },
  "init_ui": function () {
    ui.post(() => {
      {
        ui.username.setText(setting.s.get("username", "请登录账号"));
        let _0x2803b5 = setting.s.get("end_time", "2019-07-19 16:00:00");
        if (_0x2803b5 > "2050-01-01 00:00:00") {
          {
            _0x2803b5 = "365天+";
          }
        }
        ui.end_time.setText("到期时间：" + _0x2803b5);
        ui.phone_name.setText("设备名：" + setting.phone_name);
        ui.login.setText(setting.s.get("username") ? "重新登录" : "登录账号");
        ui.AvailMem.setText(Math.round(device.getAvailMem() / 1048576) + "M");
        let _0x13bc19 = ui_log_floaty_status();
        ui.log_floaty.checked = _0x13bc19;
        if (!_0x13bc19 && setting.show_log_floaty_status_num < 3) {
          {
            console.verbose("推荐开启'悬浮运行日志' 开启后您可更清晰地看到软件运行过程");
            setting.show_log_floaty_status_num++;
          }
        }
        let _0x18e568 = common.getVersionName(setting.sg_pname);
        if (_0x18e568 == "未安装") {} else {}
        let _0x9d0e33 = common.get_v_num(_0x18e568);
        if (_0x9d0e33 > 1145) {}
        let _0x1d0086 = common.getVersionName(setting.xy_pname);
        let _0x1e44fe = common.get_v_num(_0x1d0086);
        let _0x5ea060 = common.get_v_num(setting.xy_app_version_tj4);
        let _0x414346 = common.get_v_num(setting.xy_app_version_tj5);
        if (_0x1e44fe == _0x5ea060) {
          {
            ui.now_xyv.setText("当前版本" + _0x1d0086);
            ui.now_xyv_msg.setText("已为稳定版本");
            ui.now_xyv.setTextColor(colors.parseColor("#696969"));
            ui.now_xyv_msg.setTextColor(colors.parseColor("#696969"));
          }
        } else if (_0x1e44fe == _0x414346) {
          {
            ui.now_xyv.setText("当前版本" + _0x1d0086);
            ui.now_xyv_msg.setText("已为稳定版本");
            ui.now_xyv.setTextColor(colors.parseColor("#696969"));
            ui.now_xyv_msg.setTextColor(colors.parseColor("#696969"));
          }
        } else if (_0x1d0086 == "未安装") {
          ui.now_xyv.setText("当前未安装闲鱼");
          ui.now_xyv_msg.setText("推荐安装" + setting.xy_app_version_tjbb + "版闲鱼");
          ui.now_xyv.setTextColor(colors.parseColor("#FF5722"));
          ui.now_xyv_msg.setTextColor(colors.parseColor("#FF5722"));
        } else if (_0x1e44fe < _0x5ea060) {
          ui.now_xyv.setText("当前版本" + _0x1d0086);
          ui.now_xyv_msg.setText("请升级到" + setting.xy_app_version_tjbb + "版闲鱼");
          ui.now_xyv.setTextColor(colors.parseColor("#FF5722"));
          ui.now_xyv_msg.setTextColor(colors.parseColor("#FF5722"));
          console.error("当前闲鱼版本过低，请升级至" + setting.xy_app_version_tjbb + "版闲鱼");
          console.error("当前闲鱼版本过低，请升级至" + setting.xy_app_version_tjbb + "版闲鱼");
          console.error("当前闲鱼版本过低，请升级至" + setting.xy_app_version_tjbb + "版闲鱼");
        } else if (_0x1e44fe < _0x414346) {
          {
            ui.now_xyv.setText("当前版本" + _0x1d0086);
            ui.now_xyv_msg.setText("请升级到" + setting.xy_app_version_tj5 + "版闲鱼");
            ui.now_xyv.setTextColor(colors.parseColor("#FF5722"));
            ui.now_xyv_msg.setTextColor(colors.parseColor("#FF5722"));
            console.error("当前闲鱼版本过低，请升级至" + setting.xy_app_version_tj5 + "版闲鱼");
            console.error("当前闲鱼版本过低，请升级至" + setting.xy_app_version_tj5 + "版闲鱼");
            console.error("当前闲鱼版本过低，请升级至" + setting.xy_app_version_tj5 + "版闲鱼");
          }
        } else {
          ui.now_xyv.setText("当前版本" + _0x1d0086);
          ui.now_xyv_msg.setText("推荐安装" + setting.xy_app_version_tjbb + "版闲鱼");
          ui.now_xyv.setTextColor(colors.parseColor("#FF5722"));
          ui.now_xyv_msg.setTextColor(colors.parseColor("#FF5722"));
          console.verbose("");
          console.error("当前闲鱼版本" + _0x1d0086 + "，建议安装" + setting.xy_app_version_tjbb + "版或" + setting.xy_app_version_tj5 + "版闲鱼。推荐原因:1.闲鱼出现更新时（闲鱼会动态更新）我们会优先适配推荐版本闲鱼 2.推荐版本闲鱼运行比较稳定，当前版本占内存较多且会概率出现黑屏白屏问题");
          console.log("如果下载推荐版本的闲鱼后闲鱼版本仍不正确，可能是因为：\n1.下载安装时选择了手机系统弹出的应用商店闲鱼（需要点源文件下载）\n2.安装后未关闭手机应用商店的软件自动升级\n3.手机中存在闲鱼分身或手机分身中存在其他版本闲鱼");
          console.log("如果安装推荐版本的闲鱼一段时间后闲鱼版本自动改变，说明您未关闭应用商店的软件自动升级。请确保您已关闭手机应用商店的软件自动升级，如不确定是否已关闭，可截图咨询我们");
          console.error("当前闲鱼版本非稳定版，如您使用过程中遇到问题需向我们反馈，请说明您现在的闲鱼版本，或直接更换稳定版闲鱼");
          console.verbose("");
        }
        let _0x16eae7 = common.getVersionName(setting.zz_pname);
        let _0x2041c3 = common.getVersionName(setting.dy_pname);
        let _0x275fcb = common.getVersionName(setting.pdd_pname);
        let _0x593bfd = common.getVersionName(setting.hs_pname);
        ui.now_zzv.setText(_0x16eae7);
        ui.now_dyv.setText(_0x2041c3);
        ui.now_pddv.setText(_0x275fcb);
        ui.now_xhsv.setText(_0x593bfd);
        ui.initZzApp.checked = _0x16eae7 == setting.zz_app_version;
        ui.initDyApp.checked = _0x2041c3 == setting.dy_app_version;
        ui.initPddApp.checked = _0x275fcb == setting.pdd_app_version;
        ui.initXhsApp.checked = _0x593bfd == setting.hs_app_version;
      }
    });
  },
  "download_file": function (_0x3a4c87, _0x3354c4) {
    importClass("java.io.FileOutputStream");
    importClass("java.io.IOException");
    importClass("java.io.InputStream");
    importClass("java.net.MalformedURLException");
    importClass("java.net.URL");
    importClass("java.net.URLConnection");
    importClass("java.util.ArrayList");
    files.createWithDirs(_0x3a4c87);
    url = new URL(_0x3354c4);
    conn = url.openConnection();
    inStream = conn.getInputStream();
    fs = new FileOutputStream(_0x3a4c87);
    connLength = conn.getContentLength();
    startTime = java.lang.System.currentTimeMillis();
    buffer = util.java.array("byte", 1024);
    prevTime = java.lang.System.currentTimeMillis();
    bytePrev = 0;
    byteSum = 0;
    var _0x27a8dd;
    threads.start(function () {
      {
        while (true) {
          {
            sleep(5000);
            var _0xa74918 = byteSum;
            var _0x5714d3 = Math.floor(_0xa74918 / connLength * 100);
            var _0x32b4f7 = util.format("下载了%s%", _0x5714d3);
            if (_0x5714d3 < 90) {
              toast(_0x32b4f7);
              console.verbose(_0x32b4f7);
            }
            if (_0xa74918 >= connLength) {
              {
                break;
              }
            }
          }
        }
      }
    });
    while ((_0x27a8dd = inStream.read(buffer)) != -1) {
      byteSum += _0x27a8dd;
      currentTime = java.lang.System.currentTimeMillis();
      fs.write(buffer, 0, _0x27a8dd);
    }
  },
  "s_get_time": function (_0x22ea6a) {
    var _0x4d649c = parseInt(_0x22ea6a / 60);
    var _0x574b3b = _0x22ea6a % 60;
    if (_0x4d649c > 0) {
      {
        return _0x4d649c + "分" + _0x574b3b + "秒";
      }
    } else {
      {
        return _0x574b3b + "秒";
      }
    }
  },
  "send": function (_0x4949d2) {
    console.verbose("等待消息框出现");
    common.my_waitfor("想跟TA说点什么...");
    sleep(200);
    console.log("发送消息...");
    try {
      {
        content_list = _0x4949d2.split("\n").filter(del_empty);
        content_list.forEach(function (_0x492d16) {
          if (_0x492d16.indexOf("##") !== -1) {
            var _0x20a86f = _0x492d16.replace(/##/g, "#");
          } else {
            {
              var _0x5c9830 = _0x492d16.split("#").filter(del_empty);
              var _0x35d19a = Math.floor(Math.random() * _0x5c9830.length);
              var _0x20a86f = _0x5c9830[_0x35d19a];
            }
          }
          console.log(_0x20a86f);
          if (_0x20a86f.indexOf("yxx-1251927313") != -1) {
            if (setting.local_reply_image.indexOf(_0x20a86f) == -1) {
              toast("下载图片中");
              common.download_img(_0x20a86f.split("/").pop(), [_0x20a86f.replace("https://yxx-1251927313.image.myqcloud.com/", "")], false);
              sleep(1000);
              setting.local_reply_image.push(_0x20a86f);
            }
            send_image(_0x20a86f.split("/").pop());
            console.log("发送图片完成");
          } else if (_0x20a86f.indexOf("yxx-video-125192731") != -1) {
            {
              if (setting.local_reply_video.indexOf(_0x20a86f) == -1) {
                toast("下载视频中");
                common.download_cos_video(_0x20a86f.split("/").pop(), _0x20a86f.replace("https://yxx-video-1251927313.file.myqcloud.com/", ""));
                sleep(1000);
                setting.local_reply_video.push(_0x20a86f);
              }
              send_video("v_" + _0x20a86f.split("/").pop());
              console.log("发送视频完成");
            }
          } else if (_0x20a86f.indexOf("yxx-audio-1251927313") != -1) {
            {
              if (setting.local_reply_audio.indexOf(_0x20a86f) == -1) {
                {
                  toast("下载音频中");
                  common.download_cos_audio(_0x20a86f.split("/").pop(), _0x20a86f.replace("https://yxx-audio-1251927313.file.myqcloud.com/", ""));
                  sleep(1000);
                  setting.local_reply_audio.push(_0x20a86f);
                }
              }
              let _0x177c5a = engines.myEngine().cwd() + "/" + _0x20a86f.split("/").pop() + ".mp3";
              send_audio(_0x177c5a);
              console.log("发送音频完成");
            }
          } else if (_0x20a86f.substr(0, 4) == "[宝贝]") {
            {
              send_goods_card(_0x20a86f.substr(4, _0x20a86f.length));
              console.log("宝贝分享完成");
            }
          } else if (_0x20a86f.substr(0, 4) == "[位置]") {
            {
              send_weizhi(_0x20a86f.substr(4, _0x20a86f.length));
              console.log("位置发送完成");
            }
          } else {
            sleep(1000);
            while (_0x20a86f.indexOf("*") > -1) {
              _0x20a86f = _0x20a86f.replace("*", "\n");
            }
            const _0x550436 = _0x20a86f.match(/««(.*?)»»/);
            if (_0x550436) {
              const _0x4949d2 = _0x550436[1];
              console.log("字符编码前:", _0x4949d2);
              content2 = common.encodeToHtmlDecimal(_0x4949d2);
              console.log("字符编码后:", content2);
              _0x20a86f = _0x20a86f.replace(/««(.*?)»»/g, content2);
            }
            if (desc("键盘按钮").exists()) {
              {
                desc("键盘按钮").findOne().click();
                sleep(1000);
              }
            }
            common.my_click2("想跟TA说点什么...");
            sleep(500);
            desc("想跟TA说点什么...").waitFor();
            common.my_input(_0x20a86f);
            desc("发送").findOne().click();
            console.log("发送文字完成");
          }
          sleep(1000);
        });
        toastLog("消息发送完成");
      }
    } catch (_0xfea116) {
      console.verbose(_0xfea116);
      console.verbose("消息格式错误，回复失败，请阅读总控端“消息回复格式”说明");
    }
  },
  "zz_send": function (_0x4dcae8) {
    console.verbose("等待转转消息框出现");
    for (let _0x111ea3 = 0; _0x111ea3 < 20; _0x111ea3++) {
      sleep(1000);
      if (id("com.wuba.zhuanzhuan:id/ad5").exists()) {
        break;
      }
    }
    id("com.wuba.zhuanzhuan:id/ad5").waitFor();
    sleep(200);
    console.log("发送消息....");
    sleep(300);
    try {
      {
        content_list = _0x4dcae8.split("\n").filter(del_empty);
        console.verbose(content_list);
        content_list.forEach(function (_0x376515) {
          var _0x517dc8 = _0x376515.split("#").filter(del_empty);
          var _0x3ab81c = Math.floor(Math.random() * _0x517dc8.length);
          var _0x4d62e1 = _0x517dc8[_0x3ab81c];
          if (["微信号", "手机号", "QQ号"].indexOf(_0x4d62e1) != -1) {
            {
              id("com.wuba.zhuanzhuan:id/ayk").click();
              sleep(500);
              if (text("联系卡").exists()) {
                {
                  text("联系卡").findOne().parent().click();
                  sleep(1000);
                  if (text("确认").exists()) {
                    {
                      text("确认").findOne().click();
                      sleep(500);
                    }
                  }
                  if (_0x4d62e1 == "微信号") {
                    {
                      text("微信号").findOne().parent().click();
                      sleep(500);
                    }
                  } else if (_0x4d62e1 == "手机号") {
                    text("手机号").findOne().parent().click();
                    sleep(500);
                  } else if (_0x4d62e1 == "QQ号") {
                    {
                      text("QQ号").findOne().parent().click();
                      sleep(500);
                    }
                  }
                  console.verbose("转转联系卡发送完成");
                }
              } else {
                {
                  console.error("不存在联系卡");
                }
              }
            }
          } else {
            id("com.wuba.zhuanzhuan:id/ad5").findOne().click();
            sleep(500);
            _0x4d62e1 = _0x4d62e1.replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n").replace("*", "\n");
            setClip(_0x4d62e1);
            sleep(500);
            paste();
            sleep(200);
            text("发送").click();
            console.log("发送文字完成");
          }
        });
      }
    } catch (_0x2c0794) {
      console.verbose(_0x2c0794);
      console.verbose("转转消息格式错误，回复失败，请阅读总控端“消息回复格式”说明");
    }
  },
  "del_goods_two": function (_0x25c6de, _0x52ad3d, _0x5c3e4a, _0x58e8e) {
    console.verbose("删除宝贝...");
    console.log("cloud_view_num:", _0x25c6de);
    var _0x3a404b = text("编辑").find();
    console.verbose("edit_element.length:" + _0x3a404b.length);
    if (_0x3a404b.length == 0) {
      {
        return false;
      }
    }
    for (let _0x1bdca7 = 0; _0x1bdca7 < _0x3a404b.length; _0x1bdca7++) {
      {
        var _0x3a404b = text("编辑").find();
        var _0x3915b9 = false;
        for (var _0x50b3c0 = 0; _0x50b3c0 < _0x3a404b.length; _0x50b3c0++) {
          sleep(200);
          var _0x33faea = _0x3a404b[_0x50b3c0].parent().parent().parent().parent().find(textStartsWith("曝光"))[0].text();
          var _0x6dab15 = _0x33faea.split(" · ");
          var _0x2cfb99 = _0x6dab15[1].slice(2);
          var _0x4cab5d = _0x3a404b[_0x50b3c0].parent().parent().parent().parent().find(textStartsWith("¥"))[0].text();
          var _0x3582a1 = _0x4cab5d + _0x33faea;
          _0x2cfb99 = parseInt(_0x2cfb99);
          console.log("view_num:", _0x2cfb99);
          console.log("浏览量判断条件", _0x2cfb99 < _0x25c6de);
          if (setting.deleted_goods && setting.deleted_goods[_0x3582a1]) {
            console.log(setting.deleted_goods);
            var _0x107630 = Date.parse(new Date());
            var _0x3b2400 = setting.deleted_goods[_0x3582a1].time;
            console.log(_0x107630);
            console.log(_0x3b2400);
            console.log(_0x107630 - _0x3b2400);
            console.log(_0x5c3e4a);
            if ((_0x107630 - _0x3b2400) / 1000 < _0x5c3e4a) {
              {
                toastLog("'" + _0x3582a1 + "'在保护时间内，无法删除");
                sleep(2000);
                continue;
              }
            } else {
              {
                delete setting.deleted_goods.strr;
              }
            }
          }
          if (_0x2cfb99 <= _0x25c6de) {
            {
              console.log("开始执行删除...");
              console.log("浏览量" + _0x2cfb99);
              let _0x22553f = _0x3a404b[_0x50b3c0].parent().indexInParent() + 1;
              more = _0x3a404b[_0x50b3c0].parent().parent().findOne(indexInParent(_0x22553f).clickable());
              more.click();
              sleep(1000);
              text("删除").findOne().click();
              sleep(500);
              text("确定").findOne().click();
              sleep(1000);
              toastLog("\"" + _0x3582a1 + "\"已删除");
              sleep(600);
              if (_0x58e8e) {
                setting.deleted_goods[_0x3582a1] = {
                  "time": Date.parse(new Date()),
                  "been_added": false
                };
              }
              _0x3915b9 = true;
              break;
            }
          }
        }
        if (!_0x3915b9) {
          {
            console.verbose("删除完毕");
            break;
          }
        }
      }
    }
    return true;
  },
  "is_runtime": function () {
    return true;
    if (setting.configure.dormant == "关闭") {
      {
        return true;
      }
    }
    var _0x3750eb = setting.configure.ll_time_time.split("-")[0].trim();
    var _0x13e2ce = setting.configure.ll_time_time.split("-")[1].trim();
    var _0x32f01d = _0x3750eb.split(":")[0] * 1000 + _0x3750eb.split(":")[1] * 10;
    var _0x4a3726 = _0x13e2ce.split(":")[0] * 1000 + _0x13e2ce.split(":")[1] * 10;
    var _0x5b5965 = new Date();
    var _0x175447 = _0x5b5965.getHours() * 1000 + _0x5b5965.getMinutes() * 10;
    var _0x3b4465 = _0x32f01d < _0x175447 && _0x175447 < _0x4a3726;
    return !_0x3b4465;
  },
  "enter_num": function (_0x190d19) {
    console.verbose("输入数字：" + _0x190d19);
    let _0x573ec4 = _0x190d19.toString().split("");
    for (let _0x5723a9 = 0; _0x5723a9 < _0x573ec4.length; _0x5723a9++) {
      let _0x21262e = _0x573ec4[_0x5723a9];
      desc(_0x21262e).className("android.widget.Button").findOne().click();
      sleep(350);
    }
    console.verbose("输入数字完成");
  },
  "close_srf": function () {
    common.my_swipe(device.width / 2, device.height * 2 / 10, device.width / 2, device.height * 3 / 10, 250);
    sleep(2000);
  },
  "select_location_fbxz": function (_0x75a3f) {
    if (!_0x75a3f) {
      return false;
    }
    console.verbose("等待发布主页面加载完毕...");
    descStartsWith("发布").clickable().waitFor();
    sleep(500);
    common.close_srf();
    console.verbose("发布闲置选择地址");
    if (setting.xf) {
      {
        {
          {
            while (descStartsWith("上传中\n").exists()) {
              {
                sleep(2000);
                console.verbose("等待视频或图片上传完毕...");
              }
            }
            let _0x58d98a = descStartsWith("发布").findOne().depth();
            var _0x4b3cfd = className("android.widget.ImageView").depth(_0x58d98a + 7).clickable(false).indexInParent(1).find();
            if (_0x4b3cfd.length == 0) {
              {
                var _0x1d9a31 = [];
              }
            } else {
              {
                var _0x1d9a31 = [_0x4b3cfd[0].parent()];
              }
            }
            if (_0x1d9a31[0]) {
              while (desc("发布, 发布").exists() || desc("发布").exists()) {
                sleep(2000);
                console.verbose("地址控件出现，点击地址控件位置");
                _0x1d9a31[0].click();
                sleep(1000);
              }
            } else {
              console.verbose("地址控件未出现，选择地址失败");
              return false;
            }
            sleep(1000);
            common.select_location(_0x75a3f);
          }
        }
      }
    } else {
      if (_0x75a3f) {
        {
          toastLog("自定义发货地为：" + _0x75a3f);
          {
            while (descStartsWith("上传中\n").exists()) {
              {
                sleep(2000);
                console.verbose("等待视频或图片上传完毕...");
              }
            }
            let _0x2d248f = descStartsWith("发布").findOne().depth();
            var _0x4b3cfd = className("android.widget.ImageView").depth(_0x2d248f + 5).clickable(false).indexInParent(1).find();
            if (_0x4b3cfd.length == 0) {
              var _0x1d9a31 = [];
            } else {
              var _0x1d9a31 = [_0x4b3cfd[0].parent()];
            }
            if (!_0x1d9a31[0]) {
              {
                console.verbose("可点击的地址选择按钮不存在，轻微下滑后再检测一次");
                for (let _0x10f522 = 0; _0x10f522 < 20; _0x10f522++) {
                  {
                    if (descStartsWith("上传中").exists()) {
                      sleep(1500);
                    } else {
                      sleep(1000);
                      common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 5 / 10, 500);
                      sleep(1500);
                      break;
                    }
                  }
                }
                let _0x2d248f = descStartsWith("发布").findOne().depth();
                var _0x4b3cfd = className("android.widget.ImageView").depth(_0x2d248f + 5).clickable(false).indexInParent(1).find();
                if (_0x4b3cfd.length == 0) {
                  var _0x1d9a31 = [];
                } else {
                  var _0x1d9a31 = [_0x4b3cfd[0].parent()];
                }
              }
            }
            if (_0x1d9a31[0]) {
              while (desc("发布, 发布").exists() || desc("发布").exists()) {
                sleep(2000);
                console.verbose("地址控件出现，点击地址控件位置");
                _0x1d9a31[0].click();
                sleep(1000);
              }
            } else {
              {
                console.verbose("地址控件未出现，选择地址失败");
                return false;
              }
            }
          }
          sleep(1000);
          common.select_location(_0x75a3f);
        }
      } else {
        sleep(3000);
        console.verbose("无自定义地址");
        for (let _0x3fa27d = 0; _0x3fa27d < 3; _0x3fa27d++) {
          if (!desc("请选择宝贝所在地").exists() || desc("未知").exists()) {
            break;
          }
          sleep(2500);
          toastLog("等待闲鱼App地址定位成功");
        }
        if (desc("请选择宝贝所在地").exists()) {
          toastLog("闲鱼App未定位成功，且无自定义发货地,自动定位至“北京市-北京市-朝阳区”");
          console.verbose("请检查闲鱼App定位权限是否开启");
          desc("请选择宝贝所在地").findOne().click();
          sleep(4000);
          common.select_location("北京市-北京市-朝阳区");
        } else if (desc("未知").exists()) {
          {
            toastLog("闲鱼App未定位成功，且无自定义发货地,自动定位至“北京市-北京市-朝阳区”");
            console.verbose("请检查闲鱼App定位权限是否开启");
            desc("未知").findOne().click();
            sleep(4000);
            common.select_location("北京市-北京市-朝阳区");
          }
        }
      }
    }
    console.verbose("地址处理完成");
  },
  "select_location": function (_0x1b6729) {
    console.log("等待地址列表加载完毕");
    for (var _0x592f5c = 0; _0x592f5c < 120; _0x592f5c++) {
      if (text("北京").exists()) {
        {
          console.log("地址列表加载完毕");
          break;
        }
      } else if (desc("搜索地址").exists()) {
        {
          console.verbose("搜索地址 存在");
          for (let _0x456010 = 0; _0x456010 < 2; _0x456010++) {
            {
              if (desc("城市区域").exists()) {
                {
                  toastLog("等待'城市区域'消失");
                  sleep(2000);
                }
              } else {
                break;
              }
            }
          }
          if (className("android.widget.ScrollView").scrollable(true).exists()) {
            className("android.widget.ScrollView").scrollable(true).findOne().scrollForward();
            sleep(100);
            className("android.widget.ScrollView").scrollable(true).findOne().scrollForward();
            sleep(100);
            className("android.widget.ScrollView").scrollable(true).findOne().scrollForward();
            sleep(100);
          } else {
            console.verbose("下滑控件不存在");
          }
          if (desc("更多其他区域").exists()) {
            {
              desc("更多其他区域").findOne().click();
              sleep(2000);
              console.verbose("点击更多其他区域");
              common.select_location(_0x1b6729);
              return true;
            }
          } else if (desc("去选择").exists()) {
            {
              desc("去选择").findOne().click();
              sleep(2000);
              console.verbose("点击 去选择");
              common.select_location(_0x1b6729);
              return true;
            }
          } else {
            {
              console.verbose("更多其他区域|去选择 不存在");
            }
          }
          break;
        }
      } else {
        sleep(1000);
      }
    }
    if (!text("北京").exists() && !desc("搜索地址").exists()) {
      console.error("地址列表加载失败..准备重新加载");
      back();
      sleep(1000);
    }
    sleep(1000);
    location_arr = _0x1b6729.split("-");
    console.log(location_arr);
    if (location_arr[2] == "莱芜区") {
      location_arr[2] = "历下区";
      console.verbose("行政区变动‘历下区’");
    }
    if (location_arr[0] == "重庆市") {
      if (location_arr[2] == "江北区") {
        {
          location_arr[2] = "两江新区";
          console.verbose("江北区 已变更为 两江新区");
        }
      } else if (location_arr[2] == "渝北区") {
        {
          location_arr[2] = "两江新区";
          console.verbose("渝北区 已变更为 两江新区");
        }
      }
    }
    if (location_arr.length == 1) {
      if (location_arr[0] == "北京市") {
        location_arr = ["北京", "北京", "海淀区"];
      }
      if (location_arr[0] == "天津市") {
        {
          location_arr = ["天津", "天津", "和平区"];
        }
      }
      if (location_arr[0] == "上海市") {
        location_arr = ["上海", "上海", "黄浦区"];
      }
      if (location_arr[0] == "重庆市") {
        location_arr = ["重庆", "重庆", "万州区"];
      }
    }
    if (location_arr[0] == "香港特別行政區" || location_arr[0] == "香港特别行政区") {
      {
        location_arr = ["香港", "九龙", "九龙城区"];
      }
    }
    if (location_arr[0] == "澳門特別行政區" || location_arr[0] == "澳门特别行政区") {
      {
        location_arr = ["澳门", "澳门半岛", "大堂区"];
      }
    }
    if (location_arr[0] == "台湾" || location_arr[0] == "台湾省") {
      {
        location_arr = ["台湾", "金门", "金沙镇"];
      }
    }
    console.log("地址格式已处理：" + location_arr);
    if (text("北京").exists()) {
      console.verbose("选择地址-所在地");
      for (var _0x592f5c = 0; _0x592f5c < location_arr.length; _0x592f5c++) {
        {
          do {
            sleep(2300);
            if (textStartsWith(location_arr[_0x592f5c].slice(0, 2)).depth(5).exists()) {
              let _0x2098d5 = common.get_all_text_desc();
              textStartsWith(location_arr[_0x592f5c].slice(0, 2)).depth(5).findOne().click();
              sleep(1500);
              toastLog("成功点击地址：" + location_arr[_0x592f5c].slice(0, 2));
              for (let _0x456010 = 0; _0x456010 < 19; _0x456010++) {
                sleep(2000);
                let _0x460982 = common.get_all_text_desc();
                if (_0x460982 != _0x2098d5) {
                  break;
                }
                if (_0x456010 > 10) {
                  {
                    toastLog("当前手机网速过慢，如长时间未加载出地址，会自动跳过地址选择");
                  }
                }
              }
              scrollUp(0);
              scrollUp(0);
              scrollUp(0);
              scrollUp(0);
              sleep(500);
              break;
            } else {
              toastLog("寻找地址：" + location_arr[_0x592f5c].slice(0, 2));
            }
          } while (scrollDown(0));
        }
      }
      while (text("所在地").exists() || desc("宝贝所在地").exists()) {
        back();
        sleep(2000);
      }
    } else if (desc("搜索地址").exists()) {
      {
        console.verbose("选择地址-搜索地址");
        desc("搜索地址").findOne().click();
        sleep(2000);
        setText(location_arr.join(""));
        for (let _0x592f5c = 0; _0x592f5c < 6; _0x592f5c++) {
          {
            sleep(1200);
            if (depth(setting.goods_dep + 3).clickable().indexInParent(0).exists()) {
              depth(setting.goods_dep + 3).clickable().indexInParent(0).findOne().click();
              sleep(2000);
              console.verbose("选择精准地址成功");
              break;
            } else {
              {
                console.verbose("精准地址未选择成功");
              }
            }
          }
        }
        while (!descStartsWith("发布").exists()) {
          back();
          sleep(2000);
        }
      }
    } else {
      console.verbose("北京、选择精准地址 都不存在");
    }
    sleep(1000);
  },
  "interference": function () {
    console.log("防干扰线程启动");
    setting.interference = threads.start(function () {
      {
        while (true) {
          sleep(1000);
          if ([setting.xy_pname, setting.zz_pname].indexOf(currentPackage()) == -1) {
            sleep(3000);
            continue;
          }
          if (id("left").text("暂不升级").exists()) {
            id("left").text("暂不升级").click();
            sleep(1000);
          }
          if (descEndsWith("我知道了").exists()) {
            let _0x1acc9f = descEndsWith("我知道了").findOne().desc();
            toast(_0x1acc9f);
            console.warn(_0x1acc9f);
            sleep(3000);
            toast(_0x1acc9f);
            console.warn(_0x1acc9f);
            sleep(3000);
            toast(_0x1acc9f);
            console.warn(_0x1acc9f);
            sleep(3000);
            if (desc("亲，无法连接网络，请检查网络！\n我知道了").exists()) {
              console.error("闲鱼出现提示：亲，无法连接网络，请检查网络！");
              console.error("上传宝贝时网络中断...");
            } else if (_0x1acc9f.indexOf("草稿保存成功") != -1) {
              {
                console.verbose("草稿保存成功");
              }
            } else {}
          }
          if (desc("不保存").exists()) {
            {
              toastLog("已点击不保存...");
              desc("不保存").click();
              sleep(1000);
            }
          }
          if (text("残忍拒绝").exists()) {
            click("残忍拒绝");
            console.verbose("出现更新提醒，已自动跳过");
            sleep(1000);
          }
          if (text("下次再说").exists()) {
            {
              click("下次再说");
              console.verbose("出现更新提醒，已自动跳过");
              sleep(1000);
            }
          }
          if (descContains("图片合成异常，是否用原图发布").exists()) {
            {
              console.verbose("出现 图片合成异常，是否用原图发布");
              desc("继续").findOne().click();
            }
          }
          if (text("淘口令").id("title").exists()) {
            id("ivClose").click();
            sleep(1000);
          }
          if (className("android.widget.ImageView").id("com.wuba.zhuanzhuan:id/f6y").exists()) {
            {
              className("android.widget.ImageView").id("com.wuba.zhuanzhuan:id/f6y").click();
            }
          }
          if (className("android.widget.ImageView").id("com.wuba.zhuanzhuan:id/nr").exists()) {
            {
              className("android.widget.ImageView").id("com.wuba.zhuanzhuan:id/nr").click();
            }
          }
        }
      }
    });
  },
  "mobile_info": function () {
    var _0x503e81 = {
      "width": device.width,
      "height": device.height,
      "brand": device.brand,
      "model": device.model,
      "serial": device.serial,
      "sdk_int": device.sdkInt,
      "android_release": device.release,
      "android_id": device.getAndroidId(),
      "mac_address": device.getMacAddress(),
      "battery": device.getBattery(),
      "is_charging": device.isCharging(),
      "is_screen_on": device.isScreenOn()
    };
    return JSON.stringify(_0x503e81);
  },
  "goods_list_down": function () {
    common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 5 / 10, 500);
    sleep(1000);
    var _0x3d9b1d = 0;
    while (true) {
      {
        if (desc("哎呀，到底啦～").exists() || text("哎呀，到底啦～").exists()) {
          {
            console.verbose("出现 哎呀，到底啦~");
            break;
          }
        }
        if (desc("什么值得卖").exists() || text("什么值得卖").exists()) {
          {
            console.verbose("出现什么值得卖，到达底部...");
            break;
          }
        }
        if (desc("这些值得卖").exists() || text("这些值得卖").exists()) {
          console.verbose("出现这些值得卖，到达底部...");
          break;
        }
        if (desc("一键转卖").exists() || text("一键转卖").exists()) {
          console.verbose("出现一键转卖，到达底部...");
          break;
        }
        if (depth(setting.glist_scroll_dep).scrollable().findOne().scrollForward()) {
          _0x3d9b1d = 0;
          return true;
        } else {
          {
            _0x3d9b1d += 1;
            sleep(2000);
          }
        }
        if (_0x3d9b1d > 5) {
          break;
        }
        if (_0x3d9b1d == 2) {
          {
            common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 3 / 10, 500);
            sleep(1000);
          }
        }
        sleep(150);
      }
    }
    toastLog("所有宝贝加载完毕");
    return false;
  },
  "goods_list_down_self_home": function () {
    let _0x179134 = common.get_all_text_desc();
    let _0x12fff9 = "";
    for (var _0x413964 = 0; _0x413964 < 3; _0x413964++) {
      _0x12fff9 = common.get_all_text_desc();
      if (_0x12fff9 == _0x179134) {
        {
          common.my_swipe(device.width / 2, device.height * 6 / 10, device.width / 2, device.height * 1 / 10, 500);
          sleep(1000);
          _0x12fff9 = common.get_all_text_desc();
          if (_0x12fff9 == _0x179134) {
            console.verbose("未出现新控件");
          } else {
            console.verbose("出现新控件，模拟手工下滑成功");
            return true;
          }
        }
      } else {
        console.verbose("出现新控件，下滑成功");
        return true;
      }
      sleep(500);
    }
    console.verbose("已加载全部宝贝...");
    return false;
  },
  "goods_list_up": function () {
    for (var _0x225eb6 = 0; _0x225eb6 < 50; _0x225eb6++) {
      if (desc("今日曝光").exists()) {
        console.verbose("出现今日曝光");
        break;
      }
      if (desc("下架宝贝").exists()) {
        if (scrollUp()) {
          {
            console.verbose("上滑成功...");
            sleep(500);
            return true;
          }
        } else {
          toastLog("上滑失败");
          break;
        }
      } else {
        {
          if (scrollUp(0)) {
            {
              console.verbose("上滑成功...");
              sleep(500);
              return true;
            }
          } else {
            toastLog("上滑失败");
            break;
          }
        }
      }
      sleep(1000);
    }
    console.verbose("到达宝贝列表顶部...");
    return false;
  },
  "get_title": function () {
    console.verbose("开始获取宝贝标题");
    var _0x33228b = "";
    if (descStartsWith("商品图片,").exists()) {
      {
        desc_obj = descStartsWith("商品图片,").findOne();
        _0x33228b = desc_obj.desc().replace("商品图片,", "");
      }
    } else {
      {
        for (let _0x59173a = 0; _0x59173a < 20; _0x59173a++) {
          sleep(1000);
          if (descStartsWith("含运费").exists()) {
            break;
          } else if (descContains("\n含运费").exists()) {
            console.verbose("存在 含运费 字符串");
            break;
          } else if (descContains("\n含​运​费").exists()) {
            {
              console.verbose("含运费 字符串存在，但不是在第一行");
              break;
            }
          } else if (desc("到店交货").exists()) {
            break;
          }
        }
        if (descStartsWith("含运费").exists()) {
          {
            var _0x251736 = descStartsWith("含运费").findOne().bounds();
          }
        } else if (descContains("\n含运费").exists()) {
          var _0x251736 = descContains("\n含运费").findOne().bounds();
        } else if (descContains("\n含​运​费").exists()) {
          {
            var _0x251736 = descContains("\n含​运​费").findOne().bounds();
          }
        } else if (desc("到店交货").exists()) {
          {
            var _0x251736 = desc("到店交货").findOne().bounds();
          }
        } else {
          {
            console.error("含运费 字符串不存在，获取标题失败");
            return "获取标题失败（页面未正常加载或特殊页面助手未适配）";
          }
        }
        common.my_click(_0x251736.left - 80, _0x251736.centerY());
        sleep(1000);
        if (desc("完整聊天").indexInParent("2").exists()) {
          console.verbose("误点了其他消息，返回重新获取宝贝标题");
          back();
          sleep(1000);
          return common.get_title();
        }
        console.verbose("等待宝贝详情页加载");
        for (let _0x4ebf2b = 0; _0x4ebf2b < 10; _0x4ebf2b++) {
          sleep(1000);
          if (desc("管理, 管理").exists()) {
            break;
          } else if (text("管理").exists()) {
            {
              break;
            }
          } else if (desc("您要看的宝贝不存在或已被删除啦!").exists()) {
            {
              console.verbose("您要看的宝贝不存在或已被删除啦");
              return "您要看的宝贝不存在或已被删除啦!";
            }
          }
        }
        console.verbose("宝贝详情页加载完毕");
        if (setting.xf) {
          {
            _0x33228b = id("layout_desc").findOne().find(className("android.widget.TextView").indexInParent(0))[0].text();
            _0x33228b = _0x33228b.split("\n")[0];
          }
        } else {
          {
            if (id("detail_media_layout_tab_image").exists() || id("layout_media").exists()) {
              console.verbose("第二种宝贝详情界面");
              common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 500);
              sleep(1000);
              if (className("android.widget.TextView").longClickable().clickable().indexInParent("0").depth(7).find().length !== 0) {
                console.verbose("使用第一种方法获取标题");
                var _0x5b0921 = 7;
                var _0x276c93 = true;
              } else if (className("android.widget.TextView").longClickable().clickable().indexInParent("0").depth(8).find().length !== 0) {
                console.verbose("使用第二种方法获取标题");
                var _0x5b0921 = 8;
                var _0x276c93 = true;
              } else if (className("android.widget.TextView").longClickable().clickable().indexInParent("0").depth(6).find().length !== 0) {
                console.verbose("使用第三种方法获取标题");
                var _0x5b0921 = 6;
                var _0x276c93 = true;
              } else if (className("android.widget.TextView").longClickable(false).clickable(false).indexInParent("0").depth(7).find().length !== 0) {
                {
                  console.verbose("使用第四种方法获取标题");
                  var _0x5b0921 = 7;
                  var _0x276c93 = false;
                }
              } else if (className("android.widget.TextView").longClickable(false).clickable(false).indexInParent("0").depth(8).find().length !== 0) {
                {
                  console.verbose("使用第五种方法获取标题");
                  var _0x5b0921 = 8;
                  var _0x276c93 = false;
                }
              } else if (className("android.widget.TextView").longClickable(false).clickable(false).indexInParent("0").depth(6).find().length !== 0) {
                console.verbose("使用第六种方法获取标题");
                var _0x5b0921 = 6;
                var _0x276c93 = false;
              } else {
                {
                  console.error("未发现标题");
                }
              }
              for (let _0x13cb58 = 0; _0x13cb58 < 10; _0x13cb58++) {
                {
                  let _0x43bab0 = className("android.widget.TextView").longClickable(_0x276c93).clickable(_0x276c93).indexInParent("0").depth(_0x5b0921).find()[_0x13cb58];
                  if (_0x43bab0 && _0x43bab0.text()) {
                    _0x33228b = _0x43bab0.text();
                    break;
                  }
                  console.verbose(_0x13cb58);
                }
              }
            } else {
              {
                console.verbose("第一种宝贝详情界面");
                if (desc("播放视频").exists() || desc("开启声音").exists()) {
                  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 500);
                  sleep(1000);
                }
                var _0x5c0960 = [14, 13, 15];
                for (let _0x1bfa34 = 0; _0x1bfa34 < 3; _0x1bfa34++) {
                  console.verbose("dep：" + _0x5c0960[_0x1bfa34]);
                  if (className("android.view.View").indexInParent("0").clickable(false).depth(_0x5c0960[_0x1bfa34]).find().length === 0) {
                    continue;
                  }
                  for (let _0x13cb58 = 0; _0x13cb58 < 10; _0x13cb58++) {
                    let _0x43bab0 = className("android.view.View").indexInParent("0").clickable(false).depth(_0x5c0960[_0x1bfa34]).find()[_0x13cb58];
                    if (_0x43bab0 && _0x43bab0.desc()) {
                      if (_0x43bab0.desc() != "图片") {
                        _0x33228b = _0x43bab0.desc();
                        break;
                      }
                    }
                    console.verbose(_0x13cb58);
                  }
                  _0x33228b = _0x33228b.trim();
                  if (_0x33228b) {
                    {
                      break;
                    }
                  } else {
                    console.verbose("dep" + _0x5c0960[_0x1bfa34] + "无法获取标题");
                  }
                }
              }
            }
          }
        }
        back();
        sleep(1000);
      }
    }
    _0x33228b = _0x33228b.substring(0, 25);
    toastLog("宝贝标题：'" + _0x33228b + "'");
    return _0x33228b;
  },
  "down_pull": function () {
    console.verbose("下拉刷新...");
    common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 8 / 10, 700);
  },
  "down_pull_sm": function () {
    common.my_swipe(device.width / 2, device.height * 3.5 / 10, device.width / 2, device.height * 9 / 10, 500);
    sleep(500);
  },
  "my_press": function (_0x1e12f6, _0x5cde47) {
    if (device.release.split(".")[0] < 7) {
      {
        threads.start(function () {
          shell("input tap " + _0x1e12f6 + " " + _0x5cde47, true);
        });
        threads.start(function () {
          shell("input tap " + _0x1e12f6 + " " + _0x5cde47, true);
        });
        threads.start(function () {
          {
            let _0x5a47e7 = shell("input tap " + _0x1e12f6 + " " + _0x5cde47, true);
            if (_0x5a47e7.code == 0) {
              {
                console.verbose("点击成功");
              }
            }
          }
        });
        sleep(3000);
      }
    } else {
      {
        press(_0x1e12f6, _0x5cde47, 200);
        press(_0x1e12f6, _0x5cde47, 800);
        press(_0x1e12f6, _0x5cde47, 800);
      }
    }
    sleep(2000);
  },
  "my_longclick": function (_0x589cef, _0x103c7b, _0x41bbbb) {
    if (device.release.split(".")[0] < 7) {
      {
        shell("input swipe " + _0x589cef + " " + _0x103c7b + " " + (_0x589cef + 50) + " " + (_0x103c7b + 20) + " " + _0x41bbbb, true);
      }
    } else {
      press(_0x589cef, _0x103c7b, _0x41bbbb);
    }
  },
  "my_click": function (_0x27e4be, _0x2a68ef) {
    console.verbose("点击坐标：" + _0x27e4be + " " + _0x2a68ef);
    if (device.release.split(".")[0] < 7) {
      {
        shell("input tap " + _0x27e4be + " " + _0x2a68ef, true);
      }
    } else {
      {
        let _0x63ab49 = false;
        _0x63ab49 = click(_0x27e4be, _0x2a68ef);
        if (!_0x63ab49) {
          console.verbose("点击失败，尝试切换第二种点击");
          _0x63ab49 = press(_0x27e4be, _0x2a68ef, 10);
          if (!_0x63ab49) {
            console.verbose("点击失败，尝试切换第三种点击");
            _0x63ab49 = press(_0x27e4be, _0x2a68ef, 1);
            if (!_0x63ab49) {
              console.verbose("尝试三次点击后失败，手机操作系统异常，请尝试重启手机或更换手机");
            }
          }
        } else {}
      }
    }
  },
  "my_swipe": function (_0x394db6, _0x232240, _0x38d8f3, _0x2b96dd, _0x25d690) {
    if (device.release.split(".")[0] < 7) {
      shell("input swipe " + _0x394db6 + " " + _0x232240 + " " + _0x38d8f3 + " " + _0x2b96dd + " " + _0x25d690, true);
    } else {
      {
        swipe(_0x394db6, _0x232240, _0x38d8f3, _0x2b96dd, _0x25d690);
      }
    }
  },
  "touch_screen_up": function () {
    let _0x36837a = device.height / 2 - 20;
    if (device.release.split(".")[0] < 7) {
      {
        shell("input swipe " + device.width / 2 + " " + _0x36837a + " " + device.width / 2 + " " + _0x36837a - 150 + " " + 600, true);
        sleep(200);
      }
    } else {
      {
        swipe(device.width / 2, _0x36837a, device.width / 2, _0x36837a - 150, 700);
        sleep(200);
      }
    }
  },
  "touch_screen_down": function () {
    let _0x19a107 = device.height / 2 - 20;
    if (device.release.split(".")[0] < 7) {
      {
        shell("input swipe " + device.width / 2 + " " + _0x19a107 + " " + device.width / 2 + " " + _0x19a107 + 150 + " " + 600, true);
        sleep(200);
      }
    } else {
      swipe(device.width / 2, _0x19a107, device.width / 2, _0x19a107 + 150, 700);
      sleep(200);
    }
    console.verbose("下滑完成");
  },
  "push_goods_page_down": function () {
    if (common.has_srf()) {
      {
        common.my_swipe(device.width / 2, device.height * 1 / 10, device.width / 2, device.height * 6 / 10, 250);
        sleep(1000);
      }
    }
    if (descStartsWith("上传中").exists()) {
      {
        while (descStartsWith("上传中").exists()) {
          toastLog("等待图片上传成功");
          sleep(2500);
        }
        sleep(3900);
      }
    }
    if (depth(setting.goods_dep + 2).className("android.view.View").scrollable(true).exists()) {
      {
        depth(setting.goods_dep + 2).className("android.view.View").scrollable(true).findOne().scrollForward();
        sleep(1000);
        console.verbose("向下滑动成功");
      }
    } else {
      console.verbose("向下滑动控件不存在");
    }
  },
  "get_baogaung2": function () {
    try {
      let _0x4e1a4e = text("单选").find();
      for (let _0x2d8a03 = 0; _0x2d8a03 < _0x4e1a4e.length; _0x2d8a03++) {
        _0x4e1a4e[_0x2d8a03].parent().find(depth(13).indexInParent(2))[0].click();
        sleep(1000);
      }
      while (textStartsWith("提交").exists()) {
        textStartsWith("提交").findOne().click();
        sleep(1000);
        if (text("我知道了").exists()) {
          {
            text("我知道了").findOne().click();
            sleep(1000);
          }
        }
      }
      while (textStartsWith("确定包邮").exists()) {
        textStartsWith("确定包邮").findOne().click();
        sleep(1000);
        if (text("我知道了").exists()) {
          text("我知道了").findOne().click();
          sleep(1000);
        }
      }
    } catch (_0x5932a0) {
      console.error("领取超级曝光出错");
    }
  },
  "my_waitfor": function (_0x1746de, _0x505fe3) {
    console.verbose("等待'" + _0x1746de + "'出现");
    if (_0x505fe3 == undefined) {
      while (true) {
        sleep(800);
        if (text(_0x1746de).exists()) {
          break;
        }
        if (desc(_0x1746de).exists()) {
          break;
        }
      }
    } else if (_0x505fe3 == "s") {
      while (true) {
        sleep(800);
        if (textStartsWith(_0x1746de).exists()) {
          break;
        }
        if (descStartsWith(_0x1746de).exists()) {
          break;
        }
      }
    } else if (_0x505fe3 == "e") {
      while (true) {
        {
          sleep(800);
          if (textEndsWith(_0x1746de).exists()) {
            break;
          }
          if (descEndsWith(_0x1746de).exists()) {
            {
              break;
            }
          }
        }
      }
    } else if (_0x505fe3 == "c") {
      while (true) {
        sleep(800);
        if (textContains(_0x1746de).exists()) {
          {
            break;
          }
        }
        if (descContains(_0x1746de).exists()) {
          {
            break;
          }
        }
      }
    }
  },
  "my_exists": function (_0x24b891, _0x56eefa) {
    if (_0x56eefa == undefined) {
      if (text(_0x24b891).exists() || desc(_0x24b891).exists()) {
        {
          return true;
        }
      } else {
        {
          return false;
        }
      }
    } else if (_0x56eefa == "s") {
      if (textStartsWith(_0x24b891).exists() || descStartsWith(_0x24b891).exists()) {
        return true;
      } else {
        return false;
      }
    } else if (_0x56eefa == "e") {
      if (textEndsWith(_0x24b891).exists() || descEndsWith(_0x24b891).exists()) {
        return true;
      } else {
        {
          return false;
        }
      }
    } else if (_0x56eefa == "c") {
      if (textContains(_0x24b891).exists() || descContains(_0x24b891).exists()) {
        {
          return true;
        }
      } else {
        return false;
      }
    }
  },
  "my_click2": function (_0x5c3966, _0x174594) {
    if (_0x174594 == undefined) {
      {
        if (text(_0x5c3966).exists()) {
          text(_0x5c3966).findOne().click();
        } else if (desc(_0x5c3966).exists()) {
          {
            desc(_0x5c3966).findOne().click();
          }
        }
      }
    } else if (_0x174594 == "s") {
      if (textStartsWith(_0x5c3966).exists()) {
        textStartsWith(_0x5c3966).findOne().click();
      } else if (descStartsWith(_0x5c3966).exists()) {
        {
          descStartsWith(_0x5c3966).findOne().click();
        }
      }
    } else if (_0x174594 == "e") {
      if (textEndsWith(_0x5c3966).exists()) {
        {
          textEndsWith(_0x5c3966).findOne().click();
        }
      } else if (descEndsWith(_0x5c3966).exists()) {
        {
          descEndsWith(_0x5c3966).findOne().click();
        }
      }
    } else if (_0x174594 == "c") {
      if (textContains(_0x5c3966).exists()) {
        textContains(_0x5c3966).findOne().click();
      } else if (descContains(_0x5c3966).exists()) {
        descContains(_0x5c3966).findOne().click();
      }
    }
  },
  "allow_access": function () {
    if (text("始终允许").exists()) {
      {
        console.verbose("点击 始终允许");
        text("始终允许").findOne().click();
        sleep(1000);
      }
    } else if (text("允许访问全部").exists()) {
      console.verbose("点击 允许访问全部");
      text("允许访问全部").findOne().click();
      sleep(1000);
    } else if (text("允许").exists()) {
      {
        console.verbose("点击 允许");
        text("允许").findOne().click();
        sleep(1000);
      }
    } else if (text("打开").exists()) {
      console.verbose("点击 打开");
      text("打开").findOne().click();
      sleep(1000);
    } else if (text("仅在使用中允许").exists()) {
      console.verbose("点击 仅在使用中允许");
      text("仅在使用中允许").findOne().click();
      sleep(1000);
    }
  },
  "no_wuliu": function () {
    for (let _0x57e408 = 0; _0x57e408 < 20; _0x57e408++) {
      {
        sleep(2000);
        console.verbose("等待'无需寄件'出现");
        if (descContains("\n无需寄件").exists()) {
          {
            for (let _0x2d4334 = 0; _0x2d4334 < 10; _0x2d4334++) {
              {
                toastLog("睡眠6秒，等待页面完全加载");
                sleep(6000);
                console.verbose("7.18.92闲鱼此处通过坐标点击，闲鱼来了新消息时存在小概率的误点");
                let _0xbd0f83 = className("android.widget.ImageView").find()[0].bounds();
                let _0x59999d = device.width - _0xbd0f83.centerX();
                let _0x25f988 = _0xbd0f83.centerY();
                common.my_swipe(device.width / 2, device.height * 10 / 100, device.width / 2, device.height * 1 / 100, 10);
                sleep(400);
                console.verbose("点击无需寄件");
                common.my_click(_0x59999d, _0x25f988);
                sleep(2000);
                console.verbose("准备点击确认");
                sleep(2000);
                if (desc("确认").exists()) {
                  let _0x1d0c9a = desc("确认").findOne().bounds();
                  console.verbose("已点击'确认'按钮");
                  common.my_click(_0x1d0c9a.centerX(), _0x1d0c9a.centerY());
                  sleep(1000);
                  break;
                } else if (desc("确认发货").exists()) {
                  {
                    let _0x491d56 = desc("确认发货").findOne().bounds();
                    console.verbose("已点击'确认发货'按钮");
                    common.my_click(_0x491d56.centerX(), _0x491d56.centerY());
                    sleep(1000);
                    break;
                  }
                } else {
                  {
                    console.verbose("未出现确认按钮，准备重新点击");
                  }
                }
              }
            }
            for (let _0x36eeb2 = 0; _0x36eeb2 < 10; _0x36eeb2++) {
              {
                sleep(2000);
                console.verbose("等待发货成功界面出现");
                if (desc("提醒收货，按钮, 提醒收货").exists()) {
                  console.verbose("出现'提醒收货'");
                  break;
                } else if (descContains("尊享寄件").exists() || descContains("特惠寄件").exists() || descContains("服务点寄").exists()) {
                  console.verbose("出现'尊享寄件'，开始返回");
                  back();
                  sleep(1000);
                  break;
                } else if (descContains("已发货成功，请刷新页面~").exists()) {
                  console.verbose("出现 已发货成功，请刷新页面~");
                  back();
                  sleep(1000);
                  break;
                } else if (desc("已发货，待买家确认收货").exists()) {
                  {
                    console.verbose("出现 已发货，待买家确认收货");
                    break;
                  }
                }
              }
            }
            break;
          }
        } else if (text("无需寄件").exists()) {
          console.verbose("7.4 7.9 废弃代码");
        } else if (desc("该笔订单无需邮寄").exists()) {
          if (desc("确认发货").exists()) {
            {
              let _0x1cdd49 = desc("确认发货").findOne().bounds();
              console.verbose("已点击'确认发货'按钮");
              common.my_click(_0x1cdd49.centerX(), _0x1cdd49.centerY());
              sleep(1000);
            }
          } else {
            console.verbose("未出现确认发货按钮，准备重新点击");
          }
          console.verbose("无需邮寄，点击'确认发货'");
          break;
        }
      }
    }
    console.verbose("无物流发货结束");
  },
  "haoping": function (_0x5b9e1f) {
    var _0x457c69 = _0x5b9e1f.split("\n")[0];
    _0x457c69 = _0x457c69.split("#");
    var _0x387eda = Math.floor(Math.random() * _0x457c69.length);
    var _0x4d6244 = _0x457c69[_0x387eda];
    console.verbose(_0x4d6244);
    if (descStartsWith("交易成功").exists()) {
      console.verbose("该订单已评价");
    } else if (desc("赏好评").exists()) {
      textStartsWith("聊聊本次交易感受").findOne().click();
      sleep(500);
      setText(_0x4d6244);
      sleep(500);
      desc("赏好评").findOne().click();
      sleep(500);
      desc("发布").click();
      for (let _0x54392b = 0; _0x54392b < 6; _0x54392b++) {
        sleep(1000);
        if (desc("先不用了").exists()) {
          console.verbose("点击 先不用了");
          desc("先不用了").findOne().click();
          sleep(1000);
          break;
        }
      }
    } else if (desc("提交评价").exists()) {
      if (setting.xf) {
        className("android.widget.EditText").findOne().click();
        sleep(1000);
      } else {
        textStartsWith("分享交易感受").findOne().click();
        sleep(500);
      }
      setText(_0x4d6244);
      sleep(500);
      let _0x1fddcd = desc("好评\n中评\n差评").findOne().find(className("android.widget.ImageView"))[0].bounds();
      common.my_click(_0x1fddcd.centerX(), _0x1fddcd.centerY());
      sleep(500);
      let _0x19d223 = desc("提交评价").findOne().bounds();
      common.my_click(_0x19d223.centerX(), _0x19d223.centerY());
      sleep(500);
    } else if (id("favour_status").exists()) {
      console.verbose("7.4废弃");
    } else {
      {
        console.verbose("未找到评论相关控件，继续等待");
        sleep(2000);
        common.haoping(_0x5b9e1f);
      }
    }
  },
  "fensijia": function (_0x4fdd56) {
    if (desc("设置粉丝价").exists()) {
      console.verbose("粉丝价为：" + _0x4fdd56);
      desc("设置粉丝价").findOne().click();
      sleep(1500);
      for (let _0x1f836e = 0; _0x1f836e < 5; _0x1f836e++) {
        sleep(1000);
        if (text("全部粉丝").exists()) {
          break;
        }
      }
      if (text("全部粉丝").exists()) {
        let _0x50805d = text("全部粉丝").findOne();
        depth(_0x50805d.depth()).indexInParent(_0x50805d.indexInParent() - 1).findOne().click();
        sleep(1000);
        common.my_input(_0x4fdd56);
        sleep(1000);
        depth(_0x50805d.depth()).indexInParent(_0x50805d.indexInParent() - 1).findOne().click();
        sleep(1000);
        text("确定").findOne().click();
        sleep(1000);
      } else {
        {
          console.verbose("未出现设置粉丝价页面");
        }
      }
    } else {
      {
        console.verbose("未发现'设置粉丝价'按钮");
      }
    }
  },
  "enter_fbxz": function () {
    if (desc("卖闲置").clickable().exists()) {
      desc("卖闲置").clickable().findOne().click();
    } else if (id("post_guide").exists()) {
      id("post_guide").findOne().parent().click();
    } else {
      {
        console.verbose("desc卖闲置不存在，启用备用方法点击");
        className("android.widget.FrameLayout").depth(7).indexInParent(2).clickable().findOne().click();
      }
    }
    for (let _0x5eebec = 0; _0x5eebec < 6; _0x5eebec++) {
      sleep(1000);
      if (descStartsWith("发闲置").exists()) {
        {
          break;
        }
      }
      if (descStartsWith("卖闲置").exists()) {
        {
          break;
        }
      }
    }
    if (descStartsWith("发闲置").exists()) {
      {
        descStartsWith("发闲置").findOne().click();
        sleep(1000);
      }
    } else if (descStartsWith("卖闲置").exists()) {
      {
        descStartsWith("卖闲置").findOne().click();
        sleep(1000);
      }
    } else {
      {
        console.error("发闲置|卖闲置 不存在");
      }
    }
  },
  "fbxz_input_title_check": function () {
    for (let _0x42eabc = 0; _0x42eabc < 20; _0x42eabc++) {
      sleep(1000);
      if (descStartsWith("发布").exists()) {
        break;
      } else if (descStartsWith("你有未编辑完成的宝贝").exists() && desc("放弃").exists()) {
        desc("放弃").findOne().click();
        sleep(500);
        break;
      }
      console.verbose("等待发布页面加载完毕...");
      common.allow_access();
    }
    descStartsWith("描述,").findOne().click();
    sleep(1500);
    let _0x4e9348 = desc("主题").findOne().bounds();
    console.verbose("发布页面加载完毕");
    setting.my_inputx = null;
    setting.my_inputy = null;
    console.verbose("即将通过搜狗/讯飞输入文字");
    while (true) {
      {
        sleep(1000);
        if (common.has_srf()) {
          {
            break;
          }
        }
        console.verbose("等待输入法出现");
      }
    }
    var _0x5c0091 = _0x4e9348.bottom + 50;
    var _0x5aad2c = 200;
    let _0x3615e7 = "输入法校对中";
    let _0x59a683 = ".";
    var _0x1561fb = "输入文字异常，7.18.92及以上版本闲鱼需使用搜狗或讯飞输入法\n\n搜狗设置方法：\n1.下载后请启用搜狗，并请确保输入文字时的输入法是搜狗\n2.去搜狗输入法的设置里关闭\"旺仔助手\"\n3.搜狗设置->输入设置->剪贴板 确保\"候选区显示剪切板内容\"为开启状态\n\n讯飞输入法：\n1.下载后请启用讯飞，并请确保输入文字时的输入法是讯飞\n2.去讯飞输入法的设置里关闭\"AI助手小蓝\"\n3.确保开启\"候选栏展示剪贴板\"且不要开启\"AI剪贴板\"\n\n另外，助手后台未锁好也会影响文字输入，请确保已根据网页端后台->系统主页->常见问题第四条设置好手机，也不要有特殊的第三方软件悬浮窗遮挡输入或者悬浮球，不要开智能剪贴板，不要缩放输入法，不要开游戏键盘。使用9键或26键，不要使用手写。\n\n随便复制一个文字，看输入法左上角是否弹出刚复制的文字，如正确弹出则表示设置正确，设置正确后重新运行\"绑定闲鱼\"任务即可\n\n如果您根据以上提示设置后输入法仍不能正确运行：1.请重新阅读说明文字，不要一目十行粗心大意 2.重启手机后再尝试 3.点击输入法的设置->恢复默认设置后重新设置输入法";
    var _0x2a0fcc = "检测到设备屏幕无法正常点击，请尝试重启手机，或恢复手机出厂设置、更换手机";
    sleep(500);
    setClip("输入法");
    sleep(250);
    setClip(_0x3615e7);
    sleep(1000);
    for (let _0x42eabc = 1; _0x42eabc < 20; _0x42eabc++) {
      {
        console.verbose("第" + _0x42eabc + "次点击");
        console.verbose("x:" + _0x5aad2c + ",y:" + _0x5c0091);
        common.my_click(_0x5aad2c, _0x5c0091);
        sleep(800);
        console.verbose(desc(_0x3615e7).exists() || desc(_0x3615e7).exists());
        if (desc(_0x3615e7).exists() || desc(_0x3615e7).exists()) {
          setting.my_inputy = _0x5c0091;
          console.verbose("'" + _0x3615e7 + "'输入完成，y坐标确认");
          break;
        }
        _0x5c0091 = _0x5c0091 + 20;
        if (_0x42eabc == 8) {
          if (setting.device_cilck) {
            toast(_0x1561fb);
            console.error(_0x1561fb);
            console.verbose("输入法设置完毕后请重新运行任务");
          } else {
            {
              setClip(_0x2a0fcc);
              toast(_0x2a0fcc);
              console.error(_0x2a0fcc);
              console.error(_0x2a0fcc);
              console.error(_0x2a0fcc);
            }
          }
          sleep(36000000);
        }
      }
    }
    sleep(500);
    setClip("输入法");
    sleep(250);
    setClip(_0x59a683);
    sleep(1000);
    for (let _0x42eabc = 1; _0x42eabc < 30; _0x42eabc++) {
      {
        console.verbose("第" + _0x42eabc + "次点击");
        console.verbose("x:" + _0x5aad2c + ",y:" + _0x5c0091);
        common.my_click(_0x5aad2c, _0x5c0091);
        sleep(800);
        console.verbose(desc(_0x3615e7 + _0x59a683).exists() || desc(_0x3615e7 + _0x59a683).exists());
        if (desc(_0x3615e7 + _0x59a683).exists() || desc(_0x3615e7 + _0x59a683).exists()) {
          {
            setting.my_inputx = _0x5aad2c;
            console.verbose("'" + _0x3615e7 + _0x59a683 + "'输入完成，x坐标确认");
            break;
          }
        }
        _0x5aad2c = _0x5aad2c - 10;
        if (_0x42eabc == 25 || _0x5aad2c < 30) {
          if (setting.device_cilck) {
            toast(_0x1561fb);
            console.error(_0x1561fb);
            console.verbose("输入法设置完毕后请重新运行任务");
          } else {
            {
              setClip(_0x2a0fcc);
              toast(_0x2a0fcc);
              console.error(_0x2a0fcc);
              console.error(_0x2a0fcc);
              console.error(_0x2a0fcc);
            }
          }
          sleep(36000000);
        }
      }
    }
    var _0x43b851 = http.post(setting.api_domain + "edit_device", {
      "android_id": device.getAndroidId(),
      "access_token": setting.s.get("access_token"),
      "my_inputx": _0x5aad2c,
      "my_inputy": _0x5c0091
    });
    toast("输入法校对完成");
    console.info("输入法校对完成");
    sleep(1000);
  },
  "getIME": function () {
    var _0x4121ba = Settings.Secure.getString(context.contentResolver, Settings.Secure.DEFAULT_INPUT_METHOD);
    return _0x4121ba;
  },
  "get_all_text_desc": function () {
    const _0x3753a3 = "FrameLayout";
    const _0x48990f = 250;
    const _0x55fff0 = function getPackageNameOfTheForegroundApplication(_0x6de295) {
      const _0xcef18f = _0x58484b(_0x6de295);
      return _0xcef18f !== null ? _0xcef18f.packageName() : currentPackage();
    };
    const _0x58484b = function getFrameLayoutNode(_0x46c42b) {
      return className(_0x3753a3).findOne(_0x46c42b || _0x48990f);
    };
    const _0x13ed7a = function getAllDescriptionAndTextUnderNodeRecursively(_0x27d0b7) {
      let _0x2f5348 = [];
      const _0x528265 = function (_0x27d0b7) {
        if (_0x27d0b7 !== null) {
          if (_0x27d0b7.visibleToUser()) {
            _0x2f5348.push(_0x27d0b7.desc());
            _0x2f5348.push(_0x27d0b7.text());
          }
          for (let _0x3a2b7f = _0x27d0b7.childCount(), _0x1d5857 = 0; _0x1d5857 < _0x3a2b7f; _0x1d5857++) {
            {
              _0x528265(_0x27d0b7.child(_0x1d5857));
            }
          }
        }
      };
      _0x528265(_0x27d0b7 || _0x58484b());
      return _0x2f5348.filter(_0x1ddb6c => _0x1ddb6c !== "" && _0x1ddb6c !== null);
    };
    let _0x332dfa = {
      "getCurrentPackage": _0x55fff0,
      "getAllTextualContent": _0x13ed7a
    };
    return _0x332dfa.getAllTextualContent().join("");
  }
};
function del_empty(_0x59c3a7) {
  return _0x59c3a7 && _0x59c3a7.trim();
}
function send_image(_0x2006b4) {
  console.log("发送图片..");
  if (!desc("相册").exists()) {
    if (!desc("更多选择").exists()) {
      {
        console.verbose("未发现‘更多选择’，尝试改变界面控件信息...");
        let _0x2d0dcb = desc("语音按钮").findOne().bounds();
        common.my_click(_0x2d0dcb.centerX(), _0x2d0dcb.centerY());
        sleep(500);
      }
    }
    desc("更多选择").findOne().click();
    sleep(1000);
  }
  desc("相册").findOne().click();
  sleep(500);
  desc("所有文件").waitFor();
  sleep(500);
  desc("所有文件").findOne().click();
  descStartsWith("所有文件·").waitFor();
  sleep(2000);
  toastLog("相册列表加载完毕");
  do {
    sleep(800);
    if (className("ImageView").descStartsWith(_0x2006b4).exists()) {
      {
        className("ImageView").descStartsWith(_0x2006b4).findOne().click();
        toastLog("进入相册");
        sleep(2300);
        for (let _0x569da0 = 0; _0x569da0 < 9; _0x569da0++) {
          var _0x2f2c8a = desc("选择").findOnce();
          if (_0x2f2c8a) {
            {
              _0x2f2c8a.click();
              sleep(450);
            }
          }
        }
        if (desc("发送").exists()) {
          {
            console.verbose("出现'发送'按钮");
            desc("发送").findOne().click();
            sleep(1000);
            break;
          }
        } else {
          descStartsWith("下一步").findOne().click();
          sleep(1500);
          while (true) {
            if (desc("完成").exists()) {
              {
                console.verbose("出现'完成'按钮");
                desc("完成").findOne().click();
                sleep(1000);
                break;
              }
            } else if (desc("下一步").exists()) {
              {
                console.verbose("出现'下一步'按钮");
                desc("下一步").findOne().click();
                sleep(1000);
                break;
              }
            }
          }
        }
        break;
      }
    }
  } while (scrollDown(0) || scrollDown(1));
  sleep(1000);
}
function send_weizhi(_0x343a58) {
  console.log("发送位置...");
  if (!desc("相册").exists()) {
    {
      if (!desc("更多选择").exists()) {
        console.verbose("未发现‘更多选择’，尝试改变界面控件信息...");
        let _0x1b8385 = desc("语音按钮").findOne().bounds();
        common.my_click(_0x1b8385.centerX(), _0x1b8385.centerY());
        sleep(500);
      }
      desc("更多选择").findOne().click();
      sleep(1000);
    }
  }
  desc("发送位置").findOne().click();
  sleep(2000);
  text("搜索地点").findOne().parent().click();
  sleep(1000);
  common.my_input(_0x343a58);
  sleep(3000);
  let _0x5d883a = text("搜索地点").findOne().parent().parent().parent().bounds();
  common.my_click(_0x5d883a.centerX(), _0x5d883a.bottom + 80);
  sleep(1500);
  text("发送").findOne().click();
  sleep(1000);
}
function send_video(_0x1604e6) {
  console.log("发送视频..");
  if (!desc("相册").exists()) {
    {
      if (!desc("更多选择").exists()) {
        {
          console.verbose("未发现‘更多选择’，尝试改变界面控件信息...");
          let _0x231a3c = desc("语音按钮").findOne().bounds();
          common.my_click(_0x231a3c.centerX(), _0x231a3c.centerY());
          sleep(500);
        }
      }
      desc("更多选择").findOne().click();
      sleep(1000);
    }
  }
  desc("相册").findOne().click();
  sleep(500);
  desc("所有文件").waitFor();
  sleep(500);
  desc("所有文件").findOne().click();
  descStartsWith("所有文件·").waitFor();
  sleep(2000);
  toastLog("相册列表加载完毕");
  do {
    {
      sleep(800);
      console.verbose("等待视频" + _0x1604e6 + "出现...");
      if (className("ImageView").descStartsWith(_0x1604e6).exists()) {
        {
          className("ImageView").descStartsWith(_0x1604e6).findOne().click();
          toastLog("进入视频相册...");
          sleep(1000);
          descContains(":").click();
          sleep(2000);
          while (true) {
            if (desc("完成").exists()) {
              {
                console.verbose("出现'完成'按钮");
                sleep(1000);
                desc("完成").findOne().click();
                sleep(1000);
                break;
              }
            } else if (desc("发送").exists()) {
              {
                console.verbose("出现'发送'按钮");
                sleep(1000);
                desc("发送").findOne().click();
                sleep(1000);
                break;
              }
            }
          }
          toastLog("等待视频处理完成...");
          sleep(2000);
          break;
        }
      }
    }
  } while (scrollDown(0) || scrollDown(1));
  sleep(1000);
}
function send_audio(_0x2f0963) {
  if (desc("语音按钮").exists()) {
    {
      desc("语音按钮").findOne().click();
      sleep(1000);
      while (!desc("按住 说话").exists()) {
        sleep(3000);
        console.verbose("请允许闲鱼访问录音权限");
      }
    }
  }
  while (true) {
    {
      var _0x8f82ec = http.post(setting.api_domain + "get_audio_send_time", {
        "audio_time": 0,
        "access_token": setting.s.get("access_token")
      });
      var _0x4b2857 = _0x8f82ec.body.json();
      let _0x28d210 = _0x4b2857.data.sleep_time;
      if (_0x28d210 == 0) {
        media.playMusic(_0x2f0963, 0);
        let _0x1d7b4 = media.getMusicDuration();
        media.stopMusic();
        var _0x8f82ec = http.post(setting.api_domain + "get_audio_send_time", {
          "audio_time": Math.ceil(_0x1d7b4 / 1000) + 3,
          "access_token": setting.s.get("access_token")
        });
        _0x1d7b4 = _0x1d7b4 + 1000;
        threads.start(function () {
          {
            let _0x5b5824 = desc("按住 说话").findOne().bounds();
            common.my_longclick(_0x5b5824.centerX(), _0x5b5824.centerY(), _0x1d7b4);
          }
        });
        if (device.release.split(".")[0] < 7) {
          sleep(1500);
        } else {
          {
            sleep(500);
          }
        }
        media.playMusic(_0x2f0963, 1);
        sleep(_0x1d7b4);
        break;
      } else {
        console.verbose("睡眠时间12秒");
        sleep(12000);
      }
    }
  }
  if (desc("键盘按钮").exists()) {
    desc("键盘按钮").findOne().click();
    sleep(1000);
  }
}
function send_goods_card(_0x4dbd69) {
  sleep(3000);
  var _0x21506b = common.get_uname_chatbox();
  console.verbose("宝贝标题前缀或id：" + _0x4dbd69);
  console.verbose("买家名：" + _0x21506b);
  if (_0x4dbd69.length > 6 && !isNaN(_0x4dbd69)) {
    app.startActivity({
      "action": "VIEW",
      "data": "fleamarket://awesome_detail?flutter=true&ignoreMiddle=true&id=" + _0x4dbd69 + "&isOldFriendly=false"
    });
    common.start_click_xy_double();
    sleep(3000);
  } else {}
  if (desc("更多").exists()) {
    for (let _0x2c3252 = 0; _0x2c3252 < 3; _0x2c3252++) {
      desc("更多").findOne().click();
      sleep(2500);
      console.verbose("准备点击买家名");
      for (let _0x2c3252 = 0; _0x2c3252 < 20; _0x2c3252++) {
        if (!desc(_0x21506b).exists()) {
          {
            scrollDown();
            sleep(1000);
          }
        } else {
          {
            break;
          }
        }
      }
      if (desc(_0x21506b).exists()) {
        {
          let _0x289cb4 = desc(_0x21506b).findOne().bounds();
          common.my_click(_0x289cb4.centerX(), _0x289cb4.centerY());
          sleep(2000);
          console.verbose("通过坐标点击发送");
          for (let _0x2c3252 = 0; _0x2c3252 < 10; _0x2c3252++) {
            common.my_click(device.width * 6 / 10, device.height * 2 / 3 - _0x2c3252 * 70);
            sleep(1000);
            if (!textContains("给对方留言").exists()) {
              back();
              sleep(2000);
              break;
            }
          }
          break;
        }
      } else {
        back();
        sleep(2000);
      }
    }
  } else {
    console.error("未发现标题或id为：\"" + _0x4dbd69 + "\"的宝贝");
  }
}
function change_location() {
  console.verbose("更换发布地点");
  var _0x96e1b3 = setting.area_pool[setting.now_area];
  if (_0x96e1b3 && _0x96e1b3.length) {
    {
      var _0x4c17b0 = _0x96e1b3[Math.floor(Math.random() * _0x96e1b3.length)];
      if (_0x4c17b0) {
        toastLog("地址池：" + _0x4c17b0);
        common.select_location_fbxz(_0x4c17b0);
        sleep(1000);
        toastLog("成功切换发布地址");
        sleep(1000);
      }
    }
  } else {
    {
      toastLog("地址池为空或未成功加载...");
    }
  }
}
function pad(_0x36e3aa) {
  return _0x36e3aa < 10 ? "0" + _0x36e3aa : _0x36e3aa;
}
module.exports = common;