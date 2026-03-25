//Wed Mar 25 2026 13:33:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var goods_manage_b = {
  "xy_goods_polish": function (_0x2a64a9) {
    if (_0x2a64a9) {
      let _0x20e420 = common.get_task_detail(_0x2a64a9);
      var _0x8eb24f = JSON.parse(_0x20e420.data.args);
    } else {
      var _0x8eb24f = JSON.parse(common.get_xytaskc().xy_goods_polish);
    }
    setting.xy_dk = _0x8eb24f.xy_dk;
    var _0x1e0941 = _0x8eb24f.goods_rub_time_blank;
    common.xy_home();
    common.enter_tab("我的");
    scrollUp();
    sleep(500);
    if (!descStartsWith("我发布的").exists()) {
      scrollDown();
      sleep(500);
    }
    descStartsWith("我发布的").waitFor();
    sleep(500);
    if (descStartsWith("今日擦亮").exists()) {
      {
        console.verbose("通过点击进入擦亮界面");
        descStartsWith("今日擦亮").findOne().click();
        for (let _0x219660 = 0; _0x219660 < 10; _0x219660++) {
          {
            sleep(2000);
            console.verbose("等待擦亮界面加载....");
            if (desc("一键擦亮").exists()) {
              break;
            }
            if (desc("今日曝光").exists()) {
              {
                break;
              }
            }
            if (desc("已下架").exists()) {
              break;
            }
          }
        }
        sleep(1000);
        if (desc("一键擦亮").exists()) {
          let _0x378473 = desc("一键擦亮").findOne().bounds();
          common.my_click(_0x378473.centerX(), _0x378473.top + 50);
          sleep(3000);
          console.verbose("已点击一键擦亮1");
        } else if (descContains("\n一键擦亮\n").exists()) {
          let _0x419075 = descContains("\n一键擦亮\n").findOne().bounds();
          common.my_click(_0x419075.centerX(), _0x419075.bottom - 60);
          sleep(1000);
          common.my_click(_0x419075.centerX(), _0x419075.bottom - 120);
          sleep(2000);
          console.verbose("已点击一键擦亮2");
        } else {
          toastLog("今日已擦亮");
        }
      }
    } else if (enter_my_goods_page(false, true)) {
      console.verbose("进入擦亮界面");
      goods_polish(_0x1e0941);
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x2a64a9, "擦亮完成");
  },
  "restart_xy": function (_0x4411e3) {
    if (_0x4411e3) {
      {
        let _0x255513 = common.get_task_detail(_0x4411e3);
        var _0xa96b32 = JSON.parse(_0x255513.data.args);
      }
    } else {
      {
        var _0xa96b32 = JSON.parse(common.get_xytaskc().restart_xy);
      }
    }
    setting.xy_dk = _0xa96b32.xy_dk;
    common.restart_xy();
    common.back_xy_home();
    common.web_log_and_reload_task(_0x4411e3, "重启闲鱼完成");
  },
  "xy_goods_shelf_up": function (_0x36855c) {
    if (_0x36855c) {
      {
        let _0x253600 = common.get_task_detail(_0x36855c);
        var _0x5c4b4c = JSON.parse(_0x253600.data.args);
      }
    } else {
      var _0x5c4b4c = JSON.parse(common.get_xytaskc().xy_goods_shelf_up);
    }
    time_blank = parseInt(_0x5c4b4c.time_blank);
    setting.xy_dk = _0x5c4b4c.xy_dk;
    while (true) {
      enter_my_goods_page(false);
      if (goods_shelf_up()) {
        break;
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x36855c, "上架完成");
  },
  "xy_caogao_shelf_up": function (_0x48e660) {
    if (_0x48e660) {
      let _0x556091 = common.get_task_detail(_0x48e660);
      var _0x314f07 = JSON.parse(_0x556091.data.args);
    } else {
      {
        var _0x314f07 = JSON.parse(common.get_xytaskc().xy_caogao_shelf_up);
      }
    }
    time_blank = parseInt(_0x314f07.time_blank);
    setting.xy_dk = _0x314f07.xy_dk;
    enter_my_goods_page(false);
    textStartsWith("草稿").clickable().findOne().click();
    sleep(5000);
    while (textContains("宝贝可以直接发布啦").exists()) {
      {
        let _0x55f5f7 = textContains("宝贝可以直接发布啦").findOne();
        _0x55f5f7.parent().click();
        sleep(1000);
        if (desc("草稿查询失败").exists()) {
          desc("我知道了").findOne().click();
          sleep(1000);
          back();
          sleep(1000);
          common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 85 / 100, 700);
          sleep(5000);
        } else {
          {
            common.goods_publish();
            back();
            sleep(2000);
            if (!textStartsWith("草稿").exists()) {
              back();
              sleep(2000);
            }
            common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 85 / 100, 700);
            sleep(5000);
            console.verbose("睡眠" + time_blank + "秒");
            sleep(time_blank * 1000);
          }
        }
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x48e660, "草稿上架完成");
  },
  "xy_goods_shelf_down": function (_0x245034) {
    if (_0x245034) {
      let _0x2280de = common.get_task_detail(_0x245034);
      var _0x1da527 = JSON.parse(_0x2280de.data.args);
    } else {
      var _0x1da527 = JSON.parse(common.get_xytaskc().xy_goods_shelf_down);
    }
    time_blank = parseInt(_0x1da527.time_blank);
    setting.xy_dk = _0x1da527.xy_dk;
    show = parseInt(_0x1da527.show);
    look = parseInt(_0x1da527.look);
    want = parseInt(_0x1da527.want);
    word = _0x1da527.word;
    if (enter_my_goods_page(false)) {
      goods_list_bottom(_0x1da527);
      down_goods(time_blank, show, look, want, word);
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x245034, "下架完成");
  },
  "down_bz": function (_0x3f3771) {
    if (enter_my_goods_page(false)) {
      goods_list_bottom({
        "obj_num": false
      });
      time_blank = "3";
      setting.xy_dk = "关";
      show = "0";
      word = "";
      record = true;
      if (_0x3f3771 == "A") {
        look = setting.configure.ll_del_edit_lll;
        want = setting.configure.ll_del_edit_lyl;
      } else {
        look = get_low_want_good();
        want = "";
      }
      down_goods(time_blank, show, look, want, word, record);
    }
    common.back_xy_home();
  },
  "xy_del_down_goods": function (_0x20dcbf) {
    if (_0x20dcbf) {
      let _0x4ec69c = common.get_task_detail(_0x20dcbf);
      var _0x42d7f5 = JSON.parse(_0x4ec69c.data.args);
    } else {
      var _0x42d7f5 = JSON.parse(common.get_xytaskc().xy_del_down_goods);
    }
    time_blank = parseInt(_0x42d7f5.time_blank);
    setting.xy_dk = _0x42d7f5.xy_dk;
    while (true) {
      enter_my_goods_page(false);
      if (desc("下架宝贝").exists()) {
        desc("下架宝贝").clickable().findOne().click();
        sleep(500);
      } else if (text("下架宝贝").exists()) {
        {
          text("下架宝贝").clickable().findOne().click();
          sleep(500);
        }
      } else if (text("已下架").exists()) {
        {
          text("已下架").clickable().findOne().click();
          sleep(500);
        }
      }
      sleep(2000);
      if (text("你没有下架的宝贝哦").exists()) {
        toastLog("你没有下架的宝贝哦");
        break;
      }
      text("下架原因").waitFor();
      sleep(500);
      toastLog("开始删除下架宝贝，请耐心等待删除完毕...");
      while (text("下架原因").exists()) {
        {
          let _0xb4d42f = text("下架原因").findOne();
          _0xb4d42f.parent().parent().find(text("更多"))[0].click();
          sleep(1000);
          text("删除").indexInParent(0).findOne().click();
          sleep(1000);
          text("确定").findOne().click();
          sleep(1300);
          sleep(time_blank * 1000);
          console.verbose("下架宝贝删除成功");
        }
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x20dcbf, "删除下架宝贝完成");
  },
  "xy_init": function (_0x4f0b2b) {
    if (_0x4f0b2b) {
      let _0x2e5a12 = common.get_task_detail(_0x4f0b2b);
      var _0x22605e = JSON.parse(_0x2e5a12.data.args);
    } else {
      var _0x22605e = JSON.parse(common.get_xytaskc().xy_init);
    }
    setting.xy_dk = _0x22605e.xy_dk;
    toastLog("开始获取闲鱼账号信息...");
    if (!enter_my_goods_page(true, true)) {
      {
        console.log("因无宝贝，宝贝数、曝光量等等数据未同步...");
      }
    }
    let _0x467c19 = common.get_hym();
    if (_0x467c19[0]) {
      setting.xy_name = _0x467c19[0];
    } else if (_0x22605e.xy_name) {
      setting.xy_name = _0x22605e.xy_name;
      console.verbose("用户自己输入了用户名：" + setting.xy_name);
    } else {
      {
        console.error("该设备获取闲鱼会员名异常，可在总控端点击'闲鱼任务->绑定闲鱼' 阅读页面底部文字说明后手动填写本设备的闲鱼会员名");
        console.warn("本任务已卡住，请重启助手后再创建其他任务");
        sleep(3600000);
      }
    }
    console.verbose("开始同步圈子");
    var _0x59008a = [];
    try {
      {
        app.startActivity({
          "extras": {
            "url": "https://h5.m.goofish.com/wow/moyu/moyu-project/idle-community/pages/home?spm=a2170.7905589.0.0&isOldFriendly=false&_from__=main"
          },
          "packageName": "com.taobao.idlefish",
          "className": "com.taobao.idlefish.webview.WebHybridActivity"
        });
        common.start_click_xy_double();
        console.verbose("等待'加入的圈子'出现");
        for (let _0x5920f4 = 0; _0x5920f4 < 8; _0x5920f4++) {
          {
            sleep(1000);
            if (text("加入的圈子").exists()) {
              {
                break;
              }
            }
          }
        }
        text("加入的圈子").findOne().click();
        sleep(500);
        for (let _0x5af0c6 = 0; _0x5af0c6 < 8; _0x5af0c6++) {
          sleep(1000);
          if (textStartsWith("我加入的·").exists()) {
            break;
          }
          if (text("你还没有加入圈子哦").exists()) {
            console.verbose("你还没有加入圈子哦");
            break;
          }
        }
        if (textStartsWith("我加入的·").exists()) {
          var _0x2b0e13 = 0;
          for (let _0x142773 = 0; _0x142773 < 10; _0x142773++) {
            let _0x39df38 = textMatches(/去签到|进圈子/).find();
            if (_0x39df38[0].parent().childCount() == 1) {
              _0x39df38.forEach(_0x10296d => {
                {
                  let _0x297dd7 = _0x10296d.parent().parent().child(1).text();
                  if (_0x59008a.indexOf(_0x297dd7) === -1) {
                    _0x59008a.push(_0x297dd7);
                  }
                }
              });
            } else {
              _0x39df38.forEach(_0x1ebded => {
                {
                  let _0x5d9338 = _0x1ebded.parent().child(1).text();
                  if (_0x59008a.indexOf(_0x5d9338) === -1) {
                    {
                      _0x59008a.push(_0x5d9338);
                    }
                  }
                }
              });
            }
            toastLog("圈子数：" + _0x59008a.length);
            if (text("哎呀，玩到底啦～").exists()) {
              console.verbose("哎呀，玩到底啦～");
              break;
            }
            if (text("你可能感兴趣的圈子").exists()) {
              {
                console.verbose("你可能感兴趣的圈子");
                break;
              }
            }
            if (text("你还没有加入圈子哦").exists()) {
              console.verbose("你还没有加入圈子哦");
              break;
            }
            common.my_swipe(device.width / 2, device.height * 6 / 10, device.width / 2, device.height * 5 / 10, 250);
            sleep(500);
            if (scrollDown()) {
              {
                _0x2b0e13 = 0;
              }
            } else {
              _0x2b0e13 += 1;
              sleep(2500);
            }
            if (_0x2b0e13 >= 3) {
              break;
            }
            sleep(600);
          }
        } else {
          {
            console.verbose("未加入圈子");
          }
        }
      }
    } catch (_0xa498e3) {
      console.error(_0xa498e3);
      console.error("极少数安卓版本为13、14的oppo、vivo、小米手机无法通过Activity打开闲鱼的页面，同步圈子失败");
    }
    if (setting.xy_dk == "开" || setting.xy_dk == "先主后副" && setting.xzhf == "f") {
      var _0x46c7ed = {
        "android_id": device.getAndroidId(),
        "access_token": setting.s.get("access_token"),
        "xy_yt_sub": JSON.stringify(_0x59008a),
        "xy_name_sub": setting.xy_name
      };
      if (_0x467c19[1]) {
        {
          setting.xy_name2_sub = _0x467c19[1];
          _0x46c7ed.xy_name2_sub = setting.xy_name2_sub;
        }
      }
    } else if (setting.xy_dk == "关" || setting.xy_dk == "先主后副" && setting.xzhf == "z") {
      var _0x46c7ed = {
        "android_id": device.getAndroidId(),
        "access_token": setting.s.get("access_token"),
        "xy_yt": JSON.stringify(_0x59008a),
        "xy_name": setting.xy_name
      };
      if (_0x467c19[1]) {
        setting.xy_name2 = _0x467c19[1];
        _0x46c7ed.xy_name2 = setting.xy_name2;
      }
    }
    var _0x3fdd33 = http.post(setting.api_domain + "edit_device", _0x46c7ed);
    console.verbose(_0x3fdd33.body.string());
    if (setting.xy_dk == "先主后副" && setting.xzhf == "f") {
      {
        common.back_xy_home();
      }
    } else {
      {
        common.back_xy_home();
        setting.device_cilck = false;
        toastLog("开始测试设备屏幕能否正常点击...");
        if (id("post_container").exists()) {
          let _0x1c1d8b = id("post_container").findOne().bounds();
          common.my_click(device.width / 2, _0x1c1d8b.centerY());
          sleep(2000);
          if (desc("关闭").exists()) {
            setting.device_cilck = true;
            toast("点击正常");
            console.info("点击正常");
            back();
          } else {
            console.error("检测到设备屏幕无法正常点击，请尝试重启手机，或恢复手机出厂设置、更换手机");
          }
        } else {
          console.verbose("跳过设备屏幕能否点击检测e" + hw_arr.length);
        }
        console.warn("在7.14.50及以上版本的闲鱼中，使用多规格、图片文字标签、留言私信等功能需要搜狗或讯飞或来喜输入法，即将开始输入法校对。");
        toastLog("开始输入法校对");
        if (common.getIME() == "youhu.laixijs/.KeyboardServices.AdbIME") {
          var _0x3fdd33 = http.post(setting.api_domain + "edit_device", {
            "android_id": device.getAndroidId(),
            "access_token": setting.s.get("access_token"),
            "lx": 1
          });
          toast("当前为来喜输入法，无需校对");
          console.info("当前为来喜输入法，无需校对");
        } else {
          {
            var _0x3fdd33 = http.post(setting.api_domain + "edit_device", {
              "android_id": device.getAndroidId(),
              "access_token": setting.s.get("access_token"),
              "lx": 0
            });
            common.back_xy_home();
            common.enter_fbxz();
            common.fbxz_input_title_check();
            common.back_xy_home();
          }
        }
      }
    }
    common.web_log_and_reload_task(_0x4f0b2b, "绑定闲鱼成功");
  },
  "register": function (_0x2b0362) {
    toastLog("开始签到");
    if (_0x2b0362) {
      {
        let _0x177b14 = common.get_task_detail(_0x2b0362);
        var _0x2ad205 = JSON.parse(_0x177b14.data.args);
      }
    } else {
      {
        var _0x2ad205 = JSON.parse(common.get_xytaskc().register);
      }
    }
    setting.xy_dk = _0x2ad205.xy_dk;
    register_jump = "开";
    if (_0x2ad205.jump) {
      {
        register_jump = _0x2ad205.jump;
      }
    }
    common.xy_home();
    common.enter_tab("闲鱼");
    sleep(1000);
    common.enter_tab("闲鱼");
    sleep(1500);
    console.verbose("当前第1次循环，共3次循环");
    if (setting.xf) {
      {
        xyb_register_f(1);
      }
    } else {
      {
        xyb_register_d(1);
      }
    }
    common.xy_home();
    common.enter_tab("闲鱼");
    sleep(1000);
    common.enter_tab("闲鱼");
    sleep(1500);
    console.verbose("当前第2次循环，共3次循环");
    if (setting.xf) {
      {
        xyb_register_f(2);
      }
    } else {
      xyb_register_d(2);
    }
    common.xy_home();
    common.enter_tab("闲鱼");
    sleep(1000);
    common.enter_tab("闲鱼");
    sleep(1500);
    console.verbose("当前第3次循环，共3次循环");
    if (setting.xf) {
      xyb_register_f(3);
    } else {
      {
        xyb_register_d(3);
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x2b0362, "一键签到、领闲鱼币结束");
  },
  "xy_goods_price_cut": function (_0x2cc31e) {
    if (_0x2cc31e) {
      let _0x2fc18e = common.get_task_detail(_0x2cc31e);
      var _0x474c69 = JSON.parse(_0x2fc18e.data.args);
    } else {
      var _0x474c69 = JSON.parse(common.get_xytaskc().xy_goods_price_cut);
    }
    setting.xy_dk = _0x474c69.xy_dk;
    var _0x5a6ff5 = parseInt(_0x474c69.time_blank);
    var _0x36657c = _0x474c69.price_cut_proportion;
    var _0x313de1 = _0x474c69.price_cut_number;
    if (enter_my_goods_page(false)) {
      goods_list_bottom(_0x474c69);
      goods_price_cut(_0x5a6ff5, _0x36657c, _0x313de1);
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x2cc31e, "一键降价完成");
  },
  "remove_dongtai": function (_0x33908b) {
    if (_0x33908b) {
      let _0x57346f = common.get_task_detail(_0x33908b);
      var _0xefcaa5 = JSON.parse(_0x57346f.data.args);
    } else {
      {
        var _0xefcaa5 = JSON.parse(common.get_xytaskc().remove_dongtai);
      }
    }
    setting.xy_dk = _0xefcaa5.xy_dk;
    time_blank = parseInt(_0xefcaa5.time_blank);
    toastLog("开始删除动态");
    common.xy_home();
    shanchu_dongtai();
    common.back_xy_home();
    common.web_log_and_reload_task(_0x33908b, "删除动态结束");
  },
  "del_message": function (_0x2d016f) {
    if (_0x2d016f) {
      {
        let _0x135f90 = common.get_task_detail(_0x2d016f);
        var _0x4b94e9 = JSON.parse(_0x135f90.data.args);
      }
    } else {
      {
        var _0x4b94e9 = JSON.parse(common.get_xytaskc().del_message);
      }
    }
    time_blank = parseInt(_0x4b94e9.time_blank);
    setting.xy_dk = _0x4b94e9.xy_dk;
    del_message_type = _0x4b94e9.del_message_type;
    toastLog("开始删除闲鱼消息");
    common.xy_home();
    common.enter_tab("消息");
    sleep(1000);
    if (del_message_type == "点开小红点") {
      for (let _0x581233 = 0; _0x581233 < 20; _0x581233++) {
        {
          scrollUp();
          sleep(150);
        }
      }
      while (id("tv_msg_unread").exists()) {
        {
          common.enter_tab("消息");
          common.enter_tab("消息");
          sleep(1200);
          if (desc("清除未读").exists()) {
            {
              desc("清除未读").findOne().click();
              sleep(1000);
              text("确定").findOne().click();
              sleep(1000);
            }
          } else if (descStartsWith("未读数").exists()) {
            {
              let _0x2fdb4c = descStartsWith("未读数").findOne();
              toastLog("发现新客户消息，准备点击...");
              new_message_card = _0x2fdb4c.parent();
              new_message_card.click();
              sleep(2000);
              back();
              sleep(2000);
            }
          }
        }
      }
    } else {
      {
        let _0x3d187f = desc("通知消息").findOne().depth() - 1;
        while (depth(_0x3d187f).longClickable().clickable().find().length > 3) {
          {
            depth(_0x3d187f).longClickable().clickable().find()[3].longClick();
            sleep(500);
            if (desc("删除").exists()) {
              {
                desc("删除").click();
                sleep(600);
                console.verbose("消息删除成功...");
              }
            }
            if (desc("确定").exists()) {
              desc("确定").click();
              sleep(500);
            }
            if (desc("删除").exists()) {
              {
                desc("删除").click();
                sleep(500);
              }
            }
          }
        }
      }
    }
    common.web_log_and_reload_task(_0x2d016f, "删除闲鱼消息结束");
  },
  "xiaodao": function (_0x414da1) {
    if (_0x414da1) {
      let _0x1be4c4 = common.get_task_detail(_0x414da1);
      var _0x56d29c = JSON.parse(_0x1be4c4.data.args);
    } else {
      var _0x56d29c = JSON.parse(common.get_xytaskc().xiaodao);
    }
    time_blank = parseInt(_0x56d29c.time_blank);
    setting.xy_dk = _0x56d29c.xy_dk;
    xiaodao_type = _0x56d29c.xiaodao_type2;
    toastLog("开始设置小刀");
    common.xy_home();
    try {
      {
        app.startActivity({
          "extras": {
            "url": "https://h5.m.goofish.com/wow/moyu/moyu-project/fish-pro-workbench/pages/team-work?spm=a2170.28358589.0.0&isOldFriendly=false&_from__=webhybrid"
          },
          "packageName": "com.taobao.idlefish",
          "className": "com.taobao.idlefish.webview.WebHybridActivity"
        });
        common.start_click_xy_double();
      }
    } catch (_0x3a8151) {
      console.error(_0x3a8151);
      console.error("极少数安卓版本为13、14的oppo、vivo、小米手机无法通过Activity打开闲鱼的页面，打开小刀页面失败");
      sleep(100000);
      return false;
    }
    console.verbose("等待闲鱼小刀页面加载完毕...");
    for (let _0x5d271d = 0; _0x5d271d <= 11; _0x5d271d++) {
      sleep(2000);
      if (text("已开启宝贝").exists()) {
        break;
      }
      if (text("8折开启").exists()) {
        {
          break;
        }
      }
      if (_0x5d271d == 10) {
        let _0x19f8e6 = "小刀页面加载超过20秒，可能是闲鱼出现bug或手机网络异常";
        console.error(_0x19f8e6);
        toast(_0x19f8e6);
        break;
      }
    }
    if (!xiaodao_type) {
      {
        console.warn("未设置小刀操作方式");
      }
    } else if (xiaodao_type == "close") {
      {
        console.warn("关闭全部小刀");
        if (text("已开启宝贝").exists()) {
          text("已开启宝贝").findOne().click();
          sleep(2000);
          if (text("去开启").exists()) {
            {
              console.info("关闭全部小刀成功");
            }
          } else if (text("关闭小刀").exists()) {
            while (text("关闭小刀").exists()) {
              text("关闭小刀").findOne().click();
              sleep(1000);
              text("确认").findOne().click();
              sleep(1000);
              console.verbose("关闭小刀成功");
              sleep(time_blank * 1000);
            }
            back();
            sleep(1000);
            console.log("再次检测确保全部小刀宝贝关闭成功...");
            return goods_manage_b.xiaodao(_0x414da1);
          }
        }
      }
    } else {
      console.verbose("小刀幅度：" + xiaodao_type);
      if (text("什么样的宝贝不支持开启").exists()) {
        {
          let _0x3e8395 = text("什么样的宝贝不支持开启").findOne();
          let _0x45f9b8 = _0x3e8395.depth();
          let _0x52f786 = _0x3e8395.indexInParent();
          depth(_0x45f9b8).indexInParent(_0x52f786 + 1).findOne().click();
          sleep(2000);
          console.verbose("点击只展示可开启宝贝");
        }
      }
      for (let _0x17838f = 0; _0x17838f < 10; _0x17838f++) {
        scrollDown(0);
        scrollDown();
        sleep(500);
        scrollDown(0);
        scrollDown();
        sleep(500);
        scrollDown(0);
        scrollDown();
        sleep(500);
        scrollDown(0);
        scrollDown();
        sleep(500);
        scrollDown(0);
        scrollDown();
        sleep(500);
        scrollDown(0);
        scrollDown();
        sleep(500);
        scrollDown(0);
        scrollDown();
        sleep(500);
        console.verbose("下滑加载更多宝贝...");
        if (text("没有更多宝贝了~").exists()) {
          {
            console.verbose("没有更多宝贝了~");
            break;
          }
        }
      }
      console.verbose("全部宝贝加载成功");
      input_ele_array = className("android.widget.EditText").find();
      for (let _0x48611f = 0; _0x48611f < input_ele_array.length; _0x48611f++) {
        {
          let _0x551239 = input_ele_array[_0x48611f].parent();
          let _0x3e4e8c = depth(_0x551239.depth()).indexInParent(_0x551239.indexInParent() - 1).findOne();
          let _0x7f6f04 = _0x3e4e8c.children();
          for (let _0x919e68 = 0; _0x919e68 < _0x7f6f04.length; _0x919e68++) {
            if (_0x7f6f04[_0x919e68].text() == "¥") {
              let _0x3727dd = _0x3e4e8c.children()[_0x919e68 - 1].text();
              let _0x3cc596 = _0x3e4e8c.children()[_0x919e68 + 1].text();
              if (xiaodao_type.indexOf("%") == -1) {
                xd_price = _0x3cc596 - xiaodao_type;
              } else {
                xd_price = _0x3cc596 - _0x3cc596 * xiaodao_type.split("%")[0] / 100;
              }
              xd_price = xd_price.toFixed(2);
              if (xd_price <= 0) {
                xd_price = 0.01;
                console.warn(_0x3727dd + " 小刀价不能小于或等于0，已自动设置小刀价为0.01元");
              }
              toastLog(_0x3727dd + " 原价：" + _0x3cc596 + " 小刀价：" + xd_price);
              input_ele_array[_0x48611f].setText(xd_price);
              sleep(500);
              text("开启").findOne().click();
              sleep(500);
              if (text("确认").exists()) {
                text("确认").findOne().click();
                sleep(500);
              }
              console.verbose("设置小刀价成功");
              sleep(time_blank * 1000);
              break;
            }
          }
        }
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x414da1, "闲鱼一键小刀结束");
  },
  "dikou": function (_0xf6ae19) {
    if (_0xf6ae19) {
      {
        let _0x24d568 = common.get_task_detail(_0xf6ae19);
        var _0x566ab6 = JSON.parse(_0x24d568.data.args);
      }
    } else {
      var _0x566ab6 = JSON.parse(common.get_xytaskc().dikou);
    }
    time_blank = parseInt(_0x566ab6.time_blank);
    setting.xy_dk = _0x566ab6.xy_dk;
    dikou_type = _0x566ab6.dikou_type2;
    dikou_obj = _0x566ab6.dikou_obj;
    toastLog("开始闲鱼币抵扣");
    common.xy_home();
    try {
      {
        app.startActivity({
          "extras": {
            "url": "https://h5.m.goofish.com/wow/moyu/moyu-project/coin-new-deduction/pages/home?useCusFont=true&channel=coinHome&spm=a2170.13730683.0.0&isOldFriendly=false&_from__=webhybrid"
          },
          "packageName": "com.taobao.idlefish",
          "className": "com.taobao.idlefish.webview.WebHybridActivity"
        });
        common.start_click_xy_double();
      }
    } catch (_0x1efd87) {
      console.error(_0x1efd87);
      console.error("极少数安卓版本为13、14的oppo、vivo、小米手机无法通过Activity打开闲鱼的页面，打开鱼币抵扣页面失败");
      sleep(100000);
      return false;
    }
    if (dikou_type == "不抵扣" || dikou_type == "20%" || dikou_type == "30%") {
      {
        console.verbose("等待闲鱼币抵扣页面加载完毕");
        for (let _0x38d2a4 = 0; _0x38d2a4 <= 11; _0x38d2a4++) {
          if (text("抵20%").exists()) {
            break;
          }
          if (text("闲鱼币优推抵扣").exists()) {
            {
              break;
            }
          }
          if (_0x38d2a4 == 10) {
            {
              let _0x5a5639 = "鱼币抵扣页面加载超过20秒，可能是闲鱼出现bug或手机网络异常";
              console.error(_0x5a5639);
              toast(_0x5a5639);
              break;
            }
          }
          sleep(2000);
        }
        sleep(2000);
        if ((dikou_obj == 0 || dikou_obj == 1) && dikou_type != "不抵扣") {
          console.verbose("开始操作未开启抵扣宝贝");
          text("开启抵扣").findOne().click();
          sleep(3500);
          while (scrollDown(0)) {
            {
              console.verbose("已加载宝贝数：" + text("抵20%").find().length);
              if (textStartsWith("哎呀，到底啦~").exists()) {
                {
                  console.verbose("哎呀，到底啦~");
                  break;
                }
              }
              sleep(500);
            }
          }
          if (text("抵20%").find().length > 0) {
            {
              console.verbose("开始设置 " + dikou_type);
              console.verbose("共" + text("抵20%").find().length + "个待设置宝贝");
              dikou_text = dikou_type;
              if (dikou_text == "30%") {
                {
                  let _0xc23535 = text("抵30%").find();
                  for (let _0x38d2a4 = 0; _0x38d2a4 < _0xc23535.length; _0x38d2a4++) {
                    {
                      _0xc23535[_0x38d2a4].click();
                      sleep(500);
                      toastLog("第" + (_0x38d2a4 + 1) + "个宝贝 " + dikou_type + " 已设置");
                    }
                  }
                }
              }
              while (text("交易后得").exists()) {
                {
                  let _0x51ff1c = text("交易后得").findOne().depth();
                  toastLog("结果提交中，剩余未提交宝贝：" + (text("交易后得").find().length - 1));
                  text("交易后得").findOne().parent().find(className("android.widget.Image").depth(_0x51ff1c).clickable(true))[0].click();
                  sleep(1000);
                  sleep(time_blank * 1000);
                }
              }
            }
          } else {
            console.warn("无待开启抵扣的宝贝");
          }
        }
        if (dikou_obj == 0 || dikou_obj == 2 || dikou_type == "不抵扣") {
          {
            console.warn("开始操作已开启抵扣宝贝");
            text("修改抵扣").findOne().click();
            sleep(3500);
            while (scrollDown(0)) {
              console.verbose("已加载宝贝数：" + text("修改").find().length);
              if (textStartsWith("哎呀，到底啦~").exists()) {
                {
                  console.verbose("哎呀，到底啦~");
                  break;
                }
              }
              sleep(500);
            }
            console.verbose("开始设置 " + dikou_type);
            if (dikou_type == "20%") {
              dikou_text = "抵20%";
            } else if (dikou_type == "30%") {
              dikou_text = "抵30%";
            } else {
              {
                dikou_text = "不抵扣";
              }
            }
            var _0x587548 = text("修改").find();
            console.verbose("共" + _0x587548.length + "个待修改宝贝");
            for (let _0x4d874b = _0x587548.length - 1; _0x4d874b >= 0; _0x4d874b--) {
              _0x587548[_0x4d874b].click();
              sleep(500);
              if (text("确定修改").exists()) {
                if (text(dikou_text).exists()) {
                  {
                    text(dikou_text).findOne().parent().click();
                    sleep(500);
                  }
                } else {
                  console.verbose(dikou_text + "不存在");
                }
                text("确定修改").clickable().findOne().click();
                sleep(1000);
                if (text("确定关闭").exists()) {
                  if (text("下次不再提醒").exists()) {
                    {
                      text("下次不再提醒").findOne().click();
                      sleep(1000);
                    }
                  }
                  text("确定关闭").clickable().findOne().click();
                  sleep(500);
                }
                if (text("确定修改").exists()) {
                  {
                    common.my_click(device.width / 2, device.height * 1 / 10);
                    sleep(500);
                  }
                }
              }
              sleep(time_blank * 1000);
              console.verbose("第" + (_0x4d874b + 1) + "个宝贝 " + dikou_type + " 设置成功");
            }
          }
        }
        common.back_xy_home();
      }
    }
    common.web_log_and_reload_task(_0xf6ae19, "闲鱼币抵扣结束");
  },
  "remove_liuyan": function (_0x56c516) {
    if (_0x56c516) {
      let _0x4df94e = common.get_task_detail(_0x56c516);
      var _0x1bcf71 = JSON.parse(_0x4df94e.data.args);
    } else {
      {
        var _0x1bcf71 = JSON.parse(common.get_xytaskc().remove_liuyan);
      }
    }
    time_blank = parseInt(_0x1bcf71.time_blank);
    setting.xy_dk = _0x1bcf71.xy_dk;
    toastLog("开始删除留言");
    if (enter_my_goods_page(false)) {
      {
        goods_list_bottom(_0x1bcf71);
        shanchu_liuyan(time_blank);
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x56c516, "删除留言结束");
  },
  "first_show": function (_0x33f1d3) {
    if (_0x33f1d3) {
      {
        let _0x256abe = common.get_task_detail(_0x33f1d3);
        var _0x42edda = JSON.parse(_0x256abe.data.args);
      }
    } else {
      {
        var _0x42edda = JSON.parse(common.get_xytaskc().first_show);
      }
    }
    setting.xy_dk = _0x42edda.xy_dk;
    var _0x1d6c59 = parseInt(_0x42edda.time_blank);
    var _0x2473b6 = _0x42edda.quality;
    common.xy_home();
    common.enter_tab("我的");
    while (true) {
      let _0xfd82c3 = false;
      if (descEndsWith("去领取").exists()) {
        _0xfd82c3 = true;
        toastLog("领取专属曝光");
        descEndsWith("去领取").findOne().click();
        for (let _0x3d2fea = 0; _0x3d2fea < 5; _0x3d2fea++) {
          {
            sleep(2000);
            if (text("立即领取曝光").exists()) {
              {
                break;
              }
            }
          }
        }
        text("立即领取曝光").findOne().click();
        sleep(2000);
        back();
        sleep(2000);
      }
      if (descEndsWith("免费领卡").exists()) {
        _0xfd82c3 = true;
        toastLog("领取曝光卡");
        descEndsWith("免费领卡").findOne().click();
        sleep(3000);
        common.get_baogaung2();
        back();
        sleep(2000);
      }
      sleep(2500);
      if (!_0xfd82c3) {
        break;
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x33f1d3, "闲鱼优先曝光任务完成");
  },
  "fast_goods_del": function (_0x357bb1) {
    if (_0x357bb1) {
      let _0x2dc5c3 = common.get_task_detail(_0x357bb1);
      var _0x258a46 = JSON.parse(_0x2dc5c3.data.args);
    } else {
      {
        var _0x258a46 = JSON.parse(common.get_xytaskc().fast_goods_del);
      }
    }
    time_blank = parseInt(_0x258a46.time_blank);
    setting.xy_dk = _0x258a46.xy_dk;
    while (true) {
      if (enter_my_goods_page(false)) {
        while (true) {
          {
            let _0x5c76af = text("更多").clickable().find();
            if (_0x5c76af.length) {
              {
                _0x5c76af[0].click();
                sleep(1000);
                for (let _0x10d590 = 0; _0x10d590 < 8; _0x10d590++) {
                  if (text("下架").exists()) {
                    break;
                  }
                  sleep(500);
                }
                if (text("下架").exists()) {
                  console.verbose("点击'下架'");
                  text("下架").findOne().click();
                  sleep(500);
                } else if (text("删除").exists()) {
                  {
                    console.verbose("点击'删除'");
                    text("删除").findOne().click();
                    sleep(500);
                  }
                } else {
                  console.verbose("下架和删除按钮都不存在");
                }
                text("确定").findOne().click();
                sleep(500);
                console.verbose("成功点击'确定'");
                sleep(1000);
              }
            } else {
              break;
            }
          }
        }
      } else {
        {
          break;
        }
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x357bb1, "快速下架宝贝完成");
  },
  "xy_goods_get": function (_0x338b9e) {
    if (_0x338b9e) {
      let _0x2e5707 = common.get_task_detail(_0x338b9e);
      var _0x514685 = JSON.parse(_0x2e5707.data.args);
    } else {
      var _0x514685 = JSON.parse(common.get_xytaskc().xy_goods_get);
    }
    setting.xy_dk = _0x514685.xy_dk;
    toastLog("开始获取闲鱼宝贝信息...");
    if (enter_my_goods_page(false)) {
      xy_goods_get_son();
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x338b9e, "闲鱼宝贝信息获取成功");
  },
  "flow_search": function (_0x36fcc8) {
    toastLog("搜索互动开始运行...");
    let _0x10ba2 = common.get_task_detail(_0x36fcc8);
    let _0x55cb8d = JSON.parse(_0x10ba2.data.args);
    setting.xy_dk = _0x55cb8d.xy_dk;
    if (_0x55cb8d.word) {
      console.verbose(_0x55cb8d.word);
      let _0x1f8e19 = _0x55cb8d.word.split("#").filter(del_empty);
      var _0x383b2a = Math.floor(Math.random() * _0x1f8e19.length);
      _0x55cb8d.word = _0x1f8e19[_0x383b2a];
      console.verbose("搜索词：" + _0x55cb8d.word);
      common.xy_home();
      common.enter_tab("闲鱼");
      common.enter_tab("闲鱼");
      sleep(1500);
      id("search_bar_layout").waitFor();
      sleep(100);
      console.verbose("首页宝贝搜索框出现");
      id("search_bar_layout").findOne().click();
      sleep(2000);
      console.verbose("搜索按钮出现");
      if (className("android.widget.EditText").exists()) {
        {
          setText(_0x55cb8d.word);
          sleep(1000);
          desc("搜索").findOne().click();
          sleep(2000);
        }
      } else {
        {
          common.my_input(_0x55cb8d.word);
          sleep(1000);
          if (className("android.view.View").desc("返回, 返回按钮").exists()) {
            console.verbose("准备点击搜索按钮");
            let _0x374300 = className("android.view.View").desc("返回, 返回按钮").findOne();
            let _0x2dc1ea = _0x374300.parent();
            let _0x535931 = _0x374300.depth();
            let _0x5ea43c = _0x2dc1ea.find(className("android.widget.ImageView").depth(_0x535931).clickable(true)).pop();
            _0x5ea43c.click();
          } else {
            console.error("未出现搜索按钮");
            sleep(100000);
          }
        }
      }
    } else {
      console.verbose("无搜索词");
      while (!textContains("筛选").exists() || !textContains("人想要").exists()) {
        {
          sleep(6000);
          toastLog("请手动搜索");
        }
      }
    }
    for (let _0x3985dd = 0; _0x3985dd < 10; _0x3985dd++) {
      {
        sleep(1000);
        if (descContains("人想要").exists() || textContains("人想要").exists()) {
          break;
        } else if (descContains("人买过").exists() || textContains("人买过").exists()) {
          break;
        }
      }
    }
    if (text("筛选").exists()) {
      let _0x524323 = text("筛选").findOne();
      if (_0x524323.parent().parent().find(className("android.widget.LinearLayout")).length == 8) {
        console.verbose("切换到瀑布流模式");
        className("android.widget.LinearLayout").depth(_0x524323.depth() - 1).indexInParent("5").findOne().click();
        sleep(2000);
      }
    }
    console.log("进入宝贝列表页");
    start_flow_search(_0x55cb8d);
    common.back_xy_home();
    common.web_log_and_reload_task(_0x36fcc8, "搜索互动结束");
  },
  "yanghao": function (_0x1ab666) {
    if (_0x1ab666) {
      let _0x13bece = common.get_task_detail(_0x1ab666);
      let _0x9587a4 = JSON.parse(_0x13bece.data.args);
      setting.xy_dk = _0x9587a4.xy_dk;
    }
    common.check_configure();
    toastLog("自动养号开始...");
    look_goods();
    common.enter_tab("消息");
    sleep(1000);
    common.web_log_and_reload_task(_0x1ab666, "养号结束");
  },
  "yanghao_unity": function (_0x3950ed) {
    if (_0x3950ed) {
      let _0x185754 = common.get_task_detail(_0x3950ed);
      let _0x21d616 = JSON.parse(_0x185754.data.args);
      setting.xy_dk = _0x21d616.xy_dk;
    }
    common.check_configure();
    toastLog("互助养号开始...");
    look_goods_unity();
    common.enter_tab("消息");
    sleep(1000);
    common.web_log_and_reload_task(_0x3950ed, "互助养号结束");
  },
  "yanghao_tz": function (_0x42330e) {
    if (_0x42330e) {
      {
        let _0x357eba = common.get_task_detail(_0x42330e);
        let _0x5168d6 = JSON.parse(_0x357eba.data.args);
        setting.xy_dk = _0x5168d6.xy_dk;
      }
    }
    {
      let _0x2842ca = "由于7.18.92版闲鱼取消了会玩帖子的首页展示，因此自7.18.92版以后系统将不再更新会玩帖子相关功能";
      toast(_0x2842ca);
      console.error(_0x2842ca);
    }
    common.web_log_and_reload_task(_0x42330e, "闲鱼会玩养号完成");
  },
  "xy_re_edit": function (_0x419eae) {
    if (_0x419eae) {
      {
        let _0x2eabf5 = common.get_task_detail(_0x419eae);
        let _0x17e67d = JSON.parse(_0x2eabf5.data.args);
        setting.xy_dk = _0x17e67d.xy_dk;
      }
    }
    common.check_configure();
    xy_re_edit_son();
    common.web_log_and_reload_task(_0x419eae, "编辑重发任务完成");
  },
  "xy_fast_re_edit": function (_0x72ef83) {
    common.check_configure();
    if (_0x72ef83) {
      let _0x288610 = common.get_task_detail(_0x72ef83);
      var _0x54d267 = JSON.parse(_0x288610.data.args);
      setting.xy_dk = _0x54d267.xy_dk;
    } else {
      var _0x54d267 = {
        "obj_num": false
      };
    }
    if (enter_my_goods_page(false)) {
      goods_list_bottom(_0x54d267);
      xy_fast_re_edit_son();
    }
    common.web_log_and_reload_task(_0x72ef83, "快速编辑重发任务完成");
  },
  "algorithm1": function () {
    toastLog("流量算法接入中...");
    sleep(3000);
    common.set_configure();
    toastLog("流量算法接入中...");
    sleep(3000);
    toastLog("排名模式开启");
    sleep(3000);
    common.check_configure();
    while (true) {
      sleep("2000");
      toastLog("即将开启排名模式...");
      sleep(3000);
      let _0x34c9a1 = setting.configure.re_edit_interval;
      let _0x183b20 = setting.configure.re_edit_num;
      toastLog("排名操作间隔：" + _0x34c9a1 + "秒");
      for (let _0x2d4d4b = 0; _0x2d4d4b < _0x183b20; _0x2d4d4b++) {
        console.log("第" + (_0x2d4d4b + 1) + "次编辑重发");
        re_edit(_0x34c9a1);
      }
      sleep("2000");
      toastLog("即将开始删除低流量宝贝...");
      sleep(2000);
      goods_manage_b.down_bz("A");
      sleep("2000");
      toastLog("即将开始重新发布...");
      sleep(2000);
      goods_add.run(false);
      sleep("2000");
      toastLog("即将开始自动养号...");
      sleep(3000);
      toastLog("自动养号开始");
      look_goods();
      toast("养号结束");
      console.info("养号结束");
      toastLog("20分钟后进入下一次循环..");
      sleep(1200000);
    }
  },
  "algorithm2": function () {
    toastLog("流量算法接入中...");
    sleep(3000);
    common.set_configure();
    toastLog("流量算法接入中...");
    sleep(3000);
    toastLog("排名模式开启");
    sleep(3000);
    common.check_configure();
    while (true) {
      sleep("2000");
      toastLog("即将开启排名模式...");
      sleep(3000);
      let _0x41a1fe = setting.configure.re_edit_interval;
      let _0x2abb72 = setting.configure.re_edit_num;
      toastLog("排名操作间隔：" + _0x41a1fe + "秒");
      for (let _0x198e1b = 0; _0x198e1b < _0x2abb72; _0x198e1b++) {
        console.log("第" + (_0x198e1b + 1) + "次编辑重发");
        re_edit(_0x41a1fe);
      }
      sleep("2000");
      toastLog("即将开始删除低流量宝贝...");
      sleep(2000);
      goods_manage_b.down_bz("B");
      sleep("2000");
      toastLog("即将开始重新发布...");
      sleep(2000);
      goods_add.run(false);
      sleep("2000");
      toastLog("即将开始自动养号...");
      sleep(3000);
      toastLog("自动养号开始");
      look_goods();
      toast("养号结束");
      console.info("养号结束");
      toastLog("20分钟后进入下一次循环..");
      sleep(1200000);
    }
  },
  "algorithm3": function () {
    toastLog("流量算法接入中...");
    sleep(3000);
    common.set_configure();
    toastLog("流量算法接入中...");
    sleep(3000);
    toastLog("排名模式开启");
    sleep(3000);
    common.check_configure();
    while (true) {
      sleep("2000");
      toastLog("即将开始删除低流量宝贝...");
      sleep(2000);
      goods_manage_b.down_bz("A");
      sleep("2000");
      toastLog("即将开始重新发布...");
      sleep(2000);
      goods_add.run(false);
      toastLog("20分钟后进入下一次循环..");
      sleep(1200000);
    }
  }
};
function xy_re_edit_son() {
  if (setting.configure.re_edit_interval) {
    var _0x26e4ab = parseInt(setting.configure.re_edit_interval);
    var _0x43bbd3 = parseInt(setting.configure.re_edit_num);
  } else {
    var _0x26e4ab = 120;
    var _0x43bbd3 = 20;
  }
  for (let _0x447d4a = 0; _0x447d4a < _0x43bbd3; _0x447d4a++) {
    {
      console.log("第" + (_0x447d4a + 1) + "次编辑重发");
      if (common.is_runtime()) {
        re_edit(_0x26e4ab);
      } else {
        toastLog("当前为休眠时间段..");
        sleep(600000);
      }
    }
  }
  common.back_xy_home();
  toastLog("编辑重发完成");
}
function xy_fast_re_edit_son() {
  if (setting.configure.re_edit_interval) {
    {
      var _0x356cd1 = parseInt(setting.configure.fast_re_edit_interval);
      var _0x386f9c = parseInt(setting.configure.fast_re_edit_num);
      var _0x3d1b1a = setting.configure.fast_re_edit_path;
    }
  } else {
    var _0x356cd1 = 2;
    var _0x386f9c = 1;
    var _0x3d1b1a = "从上往下";
  }
  console.verbose("编辑方向：" + _0x3d1b1a);
  console.log("快速编辑重发间隔：" + _0x356cd1 + "秒");
  for (let _0x5e3ecc = 0; _0x5e3ecc < _0x386f9c; _0x5e3ecc++) {
    {
      toastLog("第" + (_0x5e3ecc + 1) + "轮快速编辑重发...");
      let _0x2d1e79 = text("编辑").find().length;
      for (let _0x3c9273 = 0; _0x3c9273 < _0x2d1e79; _0x3c9273++) {
        {
          var _0x189b0f = text("编辑").find();
          let _0x2171d7 = "编辑宝贝列表第" + (_0x3c9273 + 1) + "个宝贝";
          console.verbose(_0x2171d7);
          toast(_0x2171d7);
          console.verbose("点击结果：" + _0x189b0f[_0x2d1e79 - 1 - _0x3c9273].click());
          console.verbose("成功点击'编辑'按钮");
          sleep(2000);
          common.clear_dbt(setting.configure.re_edit_dbt);
          common.goods_publish(true);
          sleep(_0x356cd1 * 1000);
          while (!desc("编辑").exists() && !text("编辑").exists()) {
            if (currentPackage() == "com.taobao.idlefish") {
              {
                back();
                sleep(2000);
              }
            } else {
              {
                console.error("闲鱼App异常，系统即将重新运行...");
                return false;
              }
            }
            if (text("不保存").exists()) {
              text("不保存").findOne().click();
              sleep(200);
            }
          }
        }
      }
    }
  }
  common.back_xy_home();
  toastLog("快速编辑重发完成");
}
function enter_my_goods_page(_0x29a004, _0x58855a) {
  common.xy_home();
  console.verbose("已到达闲鱼首屏");
  if (setting.restart_xy_num == 3) {
    {
      console.error("已重启3次，宝贝列表按钮仍无法点击，请手动尝试点击 我的->我发布的->编辑，如按钮无法点击，请手动重启闲鱼或重启手机再试、或稍后再试，此为闲鱼的bug");
      setting.restart_xy_num = 0;
      return false;
    }
  }
  common.enter_tab("我的");
  if (text("我的空间").exists()) {
    {
      console.verbose("我的空间 按钮存在");
    }
  } else {
    scrollUp();
    sleep(500);
    if (!descStartsWith("我发布的").exists()) {
      scrollDown();
      sleep(500);
    }
    descStartsWith("我发布的").waitFor();
    sleep(500);
  }
  let _0x19a944 = 0;
  let _0x539223 = 0;
  let _0x2b51b4 = "0";
  let _0x34a5e5 = 0;
  let _0x277769 = 0;
  let _0x37d703 = 0;
  try {
    {}
    if (descStartsWith("我发布的").exists()) {
      _0x19a944 = descStartsWith("我发布的").findOne().desc().split(" ")[1];
      if (!_0x19a944) {
        _0x19a944 = 0;
      }
    }
    if (descStartsWith("我卖出的").exists()) {
      _0x539223 = descStartsWith("我卖出的").findOne().desc().split(" ")[1];
      if (!_0x539223) {
        {
          _0x539223 = 0;
        }
      }
    }
    if (descContains("在闲鱼赚了").exists()) {
      _0x2b51b4 = descContains("在闲鱼赚了").findOne().desc().split("在闲鱼赚了")[1];
      if (!_0x2b51b4) {
        {
          _0x2b51b4 = 0;
        }
      }
    }
    if (desc("曝光推广").exists() || desc("营销工具").exists()) {
      _0x37d703 = 1;
      console.verbose("鱼小铺已开启");
    }
    if (descEndsWith("粉丝").exists()) {
      _0x34a5e5 = descEndsWith("粉丝").findOne().desc().split("\n")[0];
      if (!_0x34a5e5) {
        _0x34a5e5 = 0;
      }
    }
  } catch (_0x4474fe) {
    {
      console.error(_0x4474fe);
    }
  }
  if (_0x58855a) {} else {
    {
      if (descStartsWith("我发布的").exists()) {
        descStartsWith("我发布的").findOne().click();
        sleep(2000);
      } else if (text("我发布的").exists()) {
        {
          text("我发布的").findOne().click();
          sleep(2000);
        }
      }
    }
  }
  console.verbose("打开宝贝列表页面");
  try {
    app.startActivity({
      "extras": {
        "url": "https://h5.m.goofish.com/cea/idleFish-F2e/dlefish-my-publish-mix/pages/mainnew?kun=true&loadingVisible=false&titleVisible=false&isOldFriendly=false&_from__=main"
      },
      "packageName": "com.taobao.idlefish",
      "className": "com.taobao.idlefish.webview.WebHybridActivity"
    });
    common.start_click_xy_double();
  } catch (_0x36eff2) {
    console.error(_0x36eff2);
    console.error("极少数安卓版本为13、14的oppo、vivo、小米手机无法通过Activity打开闲鱼的页面，您看到该提示时意味着本手机所有需要打开宝贝列表的功能都无法使用");
    return false;
  }
  for (let _0x159c06 = 0; _0x159c06 < 10; _0x159c06++) {
    sleep(2000);
    if (text("编辑").exists()) {
      {
        if (_0x58855a) {} else {
          {
            setting.glist_dep = text("编辑").findOne().depth();
            setting.glist_scroll_dep = 10;
            if (depth(10).scrollable().exists()) {
              {
                setting.glist_scroll_dep = 10;
              }
            } else if (depth(11).scrollable().exists()) {
              setting.glist_scroll_dep = 11;
            } else if (depth(9).scrollable().exists()) {
              setting.glist_scroll_dep = 9;
            } else if (depth(8).scrollable().exists()) {
              setting.glist_scroll_dep = 8;
            } else if (depth(12).scrollable().exists()) {
              setting.glist_scroll_dep = 12;
            } else {
              console.error("setting.glist_scroll_dep 未赋值");
              console.verbose(scrollable().exists());
              console.verbose(depth(6).scrollable().exists());
              console.verbose(depth(7).scrollable().exists());
              console.verbose(depth(13).scrollable().exists());
              console.verbose(depth(14).scrollable().exists());
            }
          }
        }
        break;
      }
    } else if (text("重新加载").exists()) {
      {
        text("重新加载").findOne().click();
        console.verbose("点击重新加载按钮");
      }
    } else if (text("刷新").exists()) {
      {
        text("刷新").findOne().click();
        console.verbose("点击刷新按钮");
      }
    } else if (desc("你还没有发布宝贝哦").exists() || text("你还没有发布宝贝哦").exists()) {
      console.verbose("发现‘你还没有发布宝贝哦’");
      sleep(500);
      console.verbose("进入我的宝贝列表，无宝贝");
      sleep(500);
      return false;
    } else if (desc("发布宝贝").exists() || text("发布宝贝").exists()) {
      {
        console.verbose("发现‘发布宝贝’");
        sleep(500);
        console.verbose("进入我的宝贝列表，无宝贝");
        sleep(500);
        return false;
      }
    } else if (desc("什么值得卖").exists() || text("什么值得卖").exists()) {
      {
        console.verbose("发现‘什么值得卖’");
        sleep(500);
        console.verbose("进入我的宝贝列表，无宝贝");
        sleep(500);
        return false;
      }
    } else {
      console.verbose("等待宝贝列表加载完毕...");
      sleep(2300);
      if (_0x159c06 == 9) {
        console.error("有极少数手机会一直卡在'等待宝贝列表加载完毕...'，请重启手机再试或改日再试，如果一直不行请尝试恢复手机出厂设置或更换手机");
        console.error("有极少数手机会一直卡在'等待宝贝列表加载完毕...'，请重启手机再试或改日再试，如果一直不行请尝试恢复手机出厂设置或更换手机");
        console.error("有极少数手机会一直卡在'等待宝贝列表加载完毕...'，请重启手机再试或改日再试，如果一直不行请尝试恢复手机出厂设置或更换手机");
        return false;
        break;
      }
    }
  }
  try {
    {
      if (text("今日曝光").exists()) {
        {
          sleep(1000);
          try {
            {
              _0x277769 = text("今日曝光").findOne().parent().find(className("TextView").depth(13))[0].text();
            }
          } catch (_0x3e50c8) {
            _0x277769 = text("今日曝光").findOne().parent().find(className("android.view.View").depth(13))[0].text();
          }
        }
      } else if (descStartsWith("今日曝光：").exists()) {
        sleep(1000);
        _0x277769 = descStartsWith("今日曝光：").findOne().desc().split("：")[1];
      } else if (textStartsWith("今日曝光：").exists()) {
        sleep(1000);
        _0x277769 = textStartsWith("今日曝光：").findOne().text().split("：")[1];
      }
    }
  } catch (_0x58671f) {
    {
      console.error(_0x58671f);
    }
  }
  threads.start(function () {
    {
      if (setting.xy_dk == "开" || setting.xy_dk == "先主后副" && setting.xzhf == "f") {
        var _0x5ce78b = {
          "android_id": device.getAndroidId(),
          "xy_gnum_sub": _0x19a944,
          "xy_gsell_sub": _0x539223,
          "xy_gmoney_sub": _0x2b51b4,
          "xy_fans_sub": _0x34a5e5,
          "xy_gshow_sub": _0x277769,
          "yxp_sub": _0x37d703,
          "access_token": setting.s.get("access_token")
        };
      } else if (setting.xy_dk == "关" || setting.xy_dk == "先主后副" && setting.xzhf == "z") {
        var _0x5ce78b = {
          "android_id": device.getAndroidId(),
          "xy_gnum": _0x19a944,
          "xy_gsell": _0x539223,
          "xy_gmoney": _0x2b51b4,
          "xy_fans": _0x34a5e5,
          "xy_gshow": _0x277769,
          "yxp": _0x37d703,
          "access_token": setting.s.get("access_token")
        };
      }
      http.post(setting.api_domain + "edit_device", _0x5ce78b);
    }
  });
  return true;
}
function goods_list_bottom(_0x4bf523) {
  toastLog("准备下拉加载全部宝贝");
  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 5 / 10, 500);
  sleep(1000);
  if (device.release.split(".")[0] == 13) {
    console.verbose("安卓13可能会出现只加载部分宝贝的情况，此为闲鱼在安卓13系统的bug");
  }
  while (true) {
    var _0x276cdd = text("更多").find().length;
    console.verbose("已加载宝贝数：" + _0x276cdd);
    if (_0x4bf523.obj_num) {
      if (_0x276cdd >= _0x4bf523.obj_num) {
        {
          console.verbose("加载宝贝数量已达到设定宝贝数" + _0x4bf523.obj_num);
          break;
        }
      }
    }
    if (desc("哎呀，到底啦～").exists() || text("哎呀，到底啦～").exists()) {
      {
        console.verbose("出现 哎呀，到底啦~");
        break;
      }
    }
    if (desc("什么值得卖").exists() || text("什么值得卖").exists()) {
      console.verbose("出现什么值得卖，到达底部...");
      break;
    }
    if (desc("这些值得卖").exists() || text("这些值得卖").exists()) {
      {
        console.verbose("出现这些值得卖，到达底部...");
        break;
      }
    }
    if (desc("一键转卖").exists() || text("一键转卖").exists()) {
      {
        console.verbose("出现一键转卖，到达底部...");
        break;
      }
    }
    var _0x35772e = common.get_all_text_desc();
    depth(setting.glist_scroll_dep).scrollable().findOne().scrollForward();
    sleep(300);
    depth(setting.glist_scroll_dep).scrollable().findOne().scrollForward();
    sleep(300);
    depth(setting.glist_scroll_dep).scrollable().findOne().scrollForward();
    sleep(300);
    common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 3 / 10, 500);
    sleep(3000);
    depth(setting.glist_scroll_dep).scrollable().findOne().scrollForward();
    sleep(1000);
    var _0x2e8c45 = common.get_all_text_desc();
    if (_0x35772e == _0x2e8c45) {
      console.verbose("翻动页面后页面内容无变化，跳出翻页");
      break;
    }
    if (_0x4bf523.obj_num) {
      {
        if (_0x276cdd >= _0x4bf523.obj_num) {
          console.verbose("加载宝贝数量已达到设定宝贝数" + _0x4bf523.obj_num);
          break;
        }
      }
    }
    if (_0x276cdd == 1000) {
      break;
    }
    sleep(150);
  }
  console.verbose("已加载全部宝贝");
  if (device.release.split(".")[0] == 13 && _0x276cdd > 19) {
    console.verbose("安卓13可能会出现只加载部分宝贝的情况，此为闲鱼在安卓13系统的bug");
  }
}
function goods_list_top() {
  for (let _0x2de438 = 0; _0x2de438 < 30; _0x2de438++) {
    {
      scrollUp() || scrollUp(0);
      sleep(100);
    }
  }
}
function goods_polish(_0x4a052e) {
  if (text("已完成全部优化，明天再来看看~").exists()) {
    {
      text("已完成全部优化，明天再来看看~").findOne().click();
      sleep(3000);
    }
  } else if (textStartsWith("今日已擦亮").exists()) {
    {
      textStartsWith("今日已擦亮").findOne().click();
      sleep(3000);
    }
  } else if (desc("一键擦亮宝贝").exists()) {
    desc("一键擦亮宝贝").findOne().parent().click();
    sleep(3000);
  } else if (text("一键擦亮宝贝").exists()) {
    {
      click("一键擦亮宝贝");
      sleep(3000);
    }
  } else if (desc("今日已擦亮").exists() || text("今日已擦亮").exists()) {
    console.verbose("今日已擦亮");
  } else {
    toastLog("开始滑动加载宝贝，请稍等");
    console.verbose("玩家号、商家号、直播号最多可擦亮500个宝贝");
    goods_list_bottom({
      "obj_num": false
    });
    toastLog("宝贝加载完毕，开始擦亮");
    let _0x3e2dbc = text("擦亮").find();
    console.verbose("待擦亮宝贝个数：" + _0x3e2dbc.length);
    for (let _0x461b34 = 0; _0x461b34 < _0x3e2dbc.length; _0x461b34++) {
      toastLog("第" + (_0x461b34 + 1) + "个");
      _0x3e2dbc[_0x461b34].click();
      sleep(700);
    }
  }
}
function goods_price_cut(_0x2f6157, _0x1f327e, _0x291590) {
  let _0xaae052 = [];
  if (desc("降价").exists()) {
    {
      var _0x5009a1 = desc("降价").find();
    }
  } else {
    var _0x5009a1 = text("降价").find();
  }
  for (let _0x1dc77c = 0; _0x1dc77c < _0x5009a1.length; _0x1dc77c++) {
    var _0x39cac9 = _0x5009a1[_0x1dc77c].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(1).depth(setting.glist_dep))[0];
    title = _0x39cac9.text() || _0x39cac9.find(indexInParent(0))[0].text();
    if (title.indexOf(".png_110x10000.jpg_") != -1) {
      {
        _0x39cac9 = _0x5009a1[_0x1dc77c].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(2).depth(setting.glist_dep))[0];
        title = _0x39cac9.text() || _0x39cac9.find(indexInParent(0))[0].text();
      }
    }
    if (_0xaae052.indexOf(title) == -1) {
      let _0x1dc0bd = "操作第" + (_0xaae052.length + 1) + "个宝贝：" + title;
      console.verbose(_0x1dc0bd);
      toast(_0x1dc0bd);
      _0xaae052.push(title);
      _0x5009a1[_0x1dc77c].parent().click();
      sleep(2000);
      for (let _0x1dc77c = 0; _0x1dc77c < 5; _0x1dc77c++) {
        if (descStartsWith("现价").exists() || textStartsWith("现价").exists()) {
          {
            break;
          }
        }
        sleep(1000);
      }
      console.verbose("成功点击'降价'按钮");
      sleep(1000);
      let _0x1382b8 = textStartsWith("现价￥").findOne().text();
      _0x1382b8 = _0x1382b8.split("现价￥")[1];
      if (_0x1382b8.indexOf("万") !== -1) {
        _0x1382b8 = _0x1382b8.replace("万", "");
        _0x1382b8 = parseInt(_0x1382b8 * 10000);
      }
      console.verbose(_0x1382b8);
      if (_0x1f327e && _0x1f327e != "0") {
        console.verbose("比例降价");
        p2 = _0x1382b8 - _0x1382b8 * _0x1f327e / 100;
      } else if (_0x291590 && _0x291590 != "0") {
        console.verbose("数值降价");
        p2 = _0x1382b8 - _0x291590;
      } else {
        p2 = _0x1382b8;
      }
      if (_0x1382b8 <= 1) {
        {
          p2 = 0.1;
        }
      }
      p2 = parseFloat(p2).toFixed(2);
      toastLog("原价：" + _0x1382b8 + " 降价后：" + p2);
      setText(p2);
      sleep(1000);
      if (text("确定降价").exists()) {
        {
          text("确定降价").findOne().click();
        }
      } else if (text("确认降价").exists()) {
        {
          text("确认降价").findOne().click();
        }
      }
      sleep(1500);
      sleep(_0x2f6157 * 1000);
    } else {}
  }
  console.verbose("系统根据宝贝标题判断宝贝的唯一性，请勿有标题相同的宝贝");
  console.log("如果成功降价宝贝数小于宝贝总数，可能是因为：1.宝贝列表存在标题相同的宝贝2.部分价格过低宝贝或多规格宝贝（无降价按钮）3.特殊宝贝（公益宝贝、免费送等等）无法降价");
  let _0x5e01f0 = "一键降价完成";
  toast(_0x5e01f0);
  console.info(_0x5e01f0);
}
function xy_goods_get_son() {
  goods_list_bottom({
    "obj_num": false
  });
  toastLog("所有宝贝加载完成");
  sleep(2000);
  toastLog("准备采集宝贝..");
  let _0x4b48ea = {};
  var _0x527bfc = text("编辑").find();
  for (let _0x1f7d54 = 0; _0x1f7d54 < _0x527bfc.length; _0x1f7d54++) {
    {
      message_arr = [];
      var _0x40b051 = _0x527bfc[_0x1f7d54].parent().parent().find(textStartsWith("曝光"));
      var _0x44c407 = _0x527bfc[_0x1f7d54].parent().parent().find(textStartsWith("浏览"));
      var _0x52df79 = _0x527bfc[_0x1f7d54].parent().parent().find(textStartsWith("想要"));
      _0x40b051 = _0x40b051.length == 1 ? _0x40b051[0].text() : "曝光0";
      _0x44c407 = _0x44c407.length == 1 ? _0x44c407[0].text() : "浏览0";
      _0x52df79 = _0x52df79.length == 1 ? _0x52df79[0].text() : "想要0";
      message_arr.push(_0x40b051);
      message_arr.push(_0x44c407);
      message_arr.push(_0x52df79);
      var _0x28418c = _0x527bfc[_0x1f7d54].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(1).depth(setting.glist_dep))[0];
      title = _0x28418c.text() || _0x28418c.find(indexInParent(0))[0].text();
      if (title.indexOf(".png_110x10000.jpg_") != -1) {
        {
          _0x28418c = _0x527bfc[_0x1f7d54].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(2).depth(setting.glist_dep))[0];
          title = _0x28418c.text() || _0x28418c.find(indexInParent(0))[0].text();
        }
      }
      if (!_0x4b48ea.hasOwnProperty(title)) {
        {
          for (let _0x1f7d54 = 0; _0x1f7d54 < message_arr.length; _0x1f7d54++) {
            message_arr[_0x1f7d54] = message_arr[_0x1f7d54].slice(2);
            if (message_arr[_0x1f7d54].indexOf("万") !== -1) {
              {
                message_arr[_0x1f7d54] = message_arr[_0x1f7d54].replace("万", "");
                message_arr[_0x1f7d54] = message_arr[_0x1f7d54] * 10000;
              }
            }
          }
          _0x4b48ea[title] = message_arr;
        }
      }
    }
  }
  let _0x37feab = device.getAndroidId();
  gl = [];
  for (var _0x26f48e in _0x4b48ea) {
    gl.push({
      "a_id": _0x37feab,
      "x_id": setting.xy_name,
      "x2_id": setting.xy_name2,
      "title": _0x26f48e,
      "show": _0x4b48ea[_0x26f48e][0],
      "look": _0x4b48ea[_0x26f48e][1],
      "want": _0x4b48ea[_0x26f48e][2]
    });
  }
  console.log("宝贝个数：" + gl.length);
  console.verbose("如果获取宝贝数低于您实际宝贝数，请检查是否有重复标题的宝贝");
  threads.start(function () {
    var _0x5c22cf = http.post(setting.api_domain + "edit_count", {
      "goods_list": JSON.stringify(gl),
      "access_token": setting.s.get("access_token")
    });
    var _0x2ca2c8 = _0x5c22cf.body.string();
    console.verbose(_0x2ca2c8);
  });
}
function re_edit(_0x511a41) {
  enter_my_goods_page(false);
  goods_list_bottom({
    "obj_num": false
  });
  if (desc("编辑").exists()) {
    var _0x340a6a = desc("编辑").find();
  } else {
    var _0x340a6a = text("编辑").find();
  }
  var _0x282f6e = _0x340a6a[parseInt(_0x340a6a.length) - 1].parent();
  if (_0x282f6e) {
    {
      _0x282f6e.click();
      console.verbose("成功点击'编辑'按钮");
      sleep(2000);
      common.clear_dbt(setting.configure.re_edit_dbt);
      common.goods_publish(true);
    }
  }
  toastLog("睡眠：" + common.s_get_time(_0x511a41));
  sleep(_0x511a41 * 1000);
}
function down_goods(_0x5a7a41, _0x53279b, _0x140433, _0xb6b351, _0x27b376, _0xb4a7e3) {
  toastLog("开始下架");
  console.log("系统根据宝贝标题判断宝贝的唯一性，请勿有标题相同的宝贝，否则会下架异常");
  let _0x58fe46 = textStartsWith("想要").depth(setting.glist_dep).find();
  let _0x49ecdd = [];
  for (let _0x116b8c = 0; _0x116b8c < _0x58fe46.length; _0x116b8c++) {
    var _0x224b12 = _0x58fe46[_0x116b8c].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(1).depth(setting.glist_dep))[0];
    title = _0x224b12.text() || _0x224b12.find(indexInParent(0))[0].text();
    if (title.indexOf(".png_110x10000.jpg_") != -1) {
      {
        _0x224b12 = _0x58fe46[_0x116b8c].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(2).depth(setting.glist_dep))[0];
        title = _0x224b12.text() || _0x224b12.find(indexInParent(0))[0].text();
      }
    }
    _0x49ecdd.push(title);
  }
  console.warn("下架条件：曝光量" + _0x53279b + "，浏览量" + _0x140433 + "，想要数" + _0xb6b351 + "，关键词 " + _0x27b376);
  console.verbose("曝光量、浏览量、想要数、关键词只要满足其中一个条件便执行下架");
  for (let _0x5c9b1f = 0; _0x5c9b1f < _0x49ecdd.length; _0x5c9b1f++) {
    let _0x5356a1 = text(_0x49ecdd[_0x5c9b1f]).findOne().parent().parent().find(textStartsWith("曝光"));
    let _0xc3e31e = text(_0x49ecdd[_0x5c9b1f]).findOne().parent().parent().find(textStartsWith("浏览"));
    let _0x53ef5a = text(_0x49ecdd[_0x5c9b1f]).findOne().parent().parent().find(textStartsWith("想要"));
    _0x5356a1 = _0x5356a1.length == 1 ? _0x5356a1[0].text() : "曝光0";
    _0xc3e31e = _0xc3e31e.length == 1 ? _0xc3e31e[0].text() : "浏览0";
    _0x53ef5a = _0x53ef5a.length == 1 ? _0x53ef5a[0].text() : "想要0";
    toastLog("开始检测：" + _0x49ecdd[_0x5c9b1f] + " " + _0x5356a1 + " " + _0xc3e31e + " " + _0x53ef5a);
    _0x5356a1 = _0x5356a1.replace("曝光", "");
    _0xc3e31e = _0xc3e31e.replace("浏览", "");
    _0x53ef5a = _0x53ef5a.replace("想要", "");
    if (_0x5356a1.substr(_0x5356a1.length - 1, 1) == "万") {
      _0x5356a1 = _0x5356a1.substr(0, _0x5356a1.length - 1);
      _0x5356a1 = Number(_0x5356a1) * 10000;
    } else {
      _0x5356a1 = Number(_0x5356a1);
    }
    if (_0xc3e31e.substr(_0xc3e31e.length - 1, 1) == "万") {
      _0xc3e31e = _0xc3e31e.substr(0, _0xc3e31e.length - 1);
      _0xc3e31e = Number(_0xc3e31e) * 10000;
    } else {
      {
        _0xc3e31e = Number(_0xc3e31e);
      }
    }
    if (_0x53ef5a.substr(_0x53ef5a.length - 1, 1) == "万") {
      _0x53ef5a = _0x53ef5a.substr(0, _0x53ef5a.length - 1);
      _0x53ef5a = Number(_0x53ef5a) * 10000;
    } else {
      {
        _0x53ef5a = Number(_0x53ef5a);
      }
    }
    let _0x108480 = false;
    if (_0x5356a1 < _0x53279b) {
      console.verbose("曝光量" + _0x5356a1 + "，符合下架条件");
      _0x108480 = true;
    } else if (_0xc3e31e < _0x140433) {
      console.verbose("浏览量" + _0xc3e31e + "，符合下架条件");
      _0x108480 = true;
    } else if (_0x53ef5a < _0xb6b351) {
      console.verbose("想要数" + _0x53ef5a + "，符合下架条件");
      _0x108480 = true;
    } else if (_0x27b376) {
      {
        _0x27b376.split("#").forEach(_0x37681f => {
          if (_0x49ecdd[_0x5c9b1f].indexOf(_0x37681f) != -1 && _0x37681f) {
            console.verbose("包含关键词'" + _0x37681f + "'，符合下架条件");
            _0x108480 = true;
          }
        });
      }
    } else {
      {
        console.verbose("不符合下架条件");
        _0x108480 = false;
      }
    }
    if (_0x108480) {
      if (_0xb4a7e3) {
        {
          if (setting.deleted_goods && setting.deleted_goods[title]) {
            {
              console.log(setting.deleted_goods);
              var _0x21bb72 = Date.parse(new Date());
              var _0x3f1279 = setting.deleted_goods[title].time;
              console.log(_0x21bb72);
              console.log(_0x3f1279);
              console.log(_0x21bb72 - _0x3f1279);
              console.log("保护时间：" + setting.configure.ll_del_edit_baohu + "小时");
              let _0x280d10 = setting.configure.ll_del_edit_baohu * 60 * 60;
              if ((_0x21bb72 - _0x3f1279) / 1000 < _0x280d10) {
                {
                  toastLog("'" + title + "'在保护时间内，无法删除");
                  sleep(2000);
                  continue;
                }
              } else {
                delete setting.deleted_goods.title;
              }
            }
          } else {
            {
              console.verbose("下架宝贝：" + title);
              setting.deleted_goods[title] = {
                "time": Date.parse(new Date()),
                "been_added": false
              };
            }
          }
        }
      }
      toastLog("准备点击下架按钮");
      sleep(_0x5a7a41 * 1000);
      text(_0x49ecdd[_0x5c9b1f]).findOne().parent().parent().parent().find(text("更多"))[0].click();
      sleep(500);
      for (let _0x5c9b1f = 0; _0x5c9b1f < 8; _0x5c9b1f++) {
        {
          if (text("下架").exists()) {
            break;
          }
          sleep(500);
        }
      }
      if (text("下架").exists()) {
        console.verbose("点击'下架'");
        text("下架").findOne().click();
        sleep(500);
      } else if (text("删除").exists()) {
        {
          console.verbose("点击'删除'");
          text("删除").findOne().click();
          sleep(500);
        }
      } else {
        console.verbose("下架和删除按钮都不存在");
      }
      console.verbose("等待确定下架按钮");
      text("确定").findOne().click();
      sleep(500);
    }
    sleep(1000);
  }
  toastLog("下架完成");
}
function get_low_want_good() {
  var _0xd61659 = 10000;
  var _0xa33b3d = "";
  let _0x4c979a = textStartsWith("浏览").depth(17).find();
  for (let _0x180da9 = 0; _0x180da9 < _0x4c979a.length; _0x180da9++) {
    let _0x1da0e9 = _0x4c979a[_0x180da9].text();
    let _0x243a02 = _0x1da0e9.replace("浏览", "");
    if (_0x243a02.substr(_0x243a02.length - 1, 1) == "万") {
      _0x243a02 = _0x243a02.substr(0, _0x243a02.length - 1);
      _0x243a02 = Number(_0x243a02) * 10000;
    } else {
      _0x243a02 = Number(_0x243a02);
    }
    try {
      var _0x3be235 = _0x4c979a[_0x180da9].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(1).depth(setting.glist_dep))[0];
      title = _0x3be235.text() || _0x3be235.find(indexInParent(0))[0].text();
      if (title.indexOf(".png_110x10000.jpg_") != -1) {
        _0x3be235 = _0x4c979a[_0x180da9].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(2).depth(setting.glist_dep))[0];
        title = _0x3be235.text() || _0x3be235.find(indexInParent(0))[0].text();
      }
    } catch (_0x95f382) {
      {
        console.verbose("获取标题出现异常");
      }
    }
    if (_0x243a02 < _0xd61659) {
      if (setting.deleted_goods && !setting.deleted_goods[title]) {
        _0xd61659 = _0x243a02;
        _0xa33b3d = title;
      }
    }
  }
  console.verbose("最低浏览量：" + _0xd61659);
  console.verbose("标题为：" + _0xa33b3d);
  return _0xd61659 + 1;
}
function look_goods() {
  var _0xedf8a8 = setting.configure.yanghao_scroll_num;
  var _0x43f0bf = setting.configure.yanghao_click_percent;
  var _0x1f7fd8 = setting.configure.yanghao_like_percent;
  var _0x5f5c14 = setting.configure.yanghao_want_percent;
  var _0x47b7b4 = setting.configure.yanghao_collect_percent;
  var _0xaa0626 = setting.configure.yanghao_comment_percent;
  var _0x378ef7 = setting.configure.yanghao_comment_content;
  var _0x374034 = setting.configure.yanghao_want_content;
  enter_yanghao();
  common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 2 / 10, random(700, 1400));
  sleep(2000);
  common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 2 / 10, random(700, 1400));
  sleep(2000);
  for (let _0x30ce3b = 0; _0x30ce3b < _0xedf8a8; _0x30ce3b++) {
    if (common.is_runtime()) {
      if (!desc("闲鱼签到").exists() && !id("search_bar_layout").exists()) {
        console.verbose("准备返回养号宝贝列表...");
        enter_yanghao();
        sleep(6000);
      }
      if (className("android.widget.Image").exists()) {
        console.verbose("已关闭临时活动悬浮窗...");
        if (className("android.widget.Image").text("O1CN01YdifXD26KXu4LfOxK_!!6000000007643-2-tps-57-57.png_").exists()) {
          className("android.widget.Image").text("O1CN01YdifXD26KXu4LfOxK_!!6000000007643-2-tps-57-57.png_").findOne().parent().click();
        } else if (className("android.widget.Image").indexInParent(1).exists()) {
          className("android.widget.Image").indexInParent(1).findOne().click();
          sleep(1000);
        }
      }
      common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 2 / 10, random(700, 1400));
      sleep(2000);
      toastLog("第" + (_0x30ce3b + 1) + "次翻动宝贝列表..");
      sleep(random(1500, 3500));
      let _0x2481cd = id("cardview_61801").find();
      for (let _0x30ce3b = 0; _0x30ce3b < _0x2481cd.length; _0x30ce3b++) {
        {
          let _0x4744c4 = _0x2481cd[_0x30ce3b].find(id("hot_point"));
          if (_0x4744c4.length != 1) {
            continue;
          }
          let _0x2d887e = _0x4744c4[0].text();
          if (_0x2d887e.indexOf("想要") == -1) {
            {
              continue;
            }
          } else {
            _0x2d887e = _0x2d887e.replace("人想要", "");
          }
          let _0x39fdc3 = _0x2481cd[_0x30ce3b].find(id("price"))[0].text();
          _0x39fdc3 = _0x39fdc3.replace("¥", "");
          if (_0x39fdc3.indexOf("万") !== -1) {
            _0x39fdc3 = _0x39fdc3.replace("万", "");
            _0x39fdc3 = _0x39fdc3 * 10000;
          }
          let _0x2c31a7 = _0x2481cd[_0x30ce3b].find(id("user_nick"))[0].text();
          let _0x265549 = _0x2481cd[_0x30ce3b].find(id("content_title"))[0].text();
          if (setting.all_top_goods_title.indexOf(_0x265549) == -1) {
            setting.all_top_goods.push({
              "want": _0x2d887e,
              "price": _0x39fdc3,
              "user_nick": _0x2c31a7,
              "title": _0x265549
            });
            setting.all_top_goods_title.push(_0x265549);
          }
        }
      }
      if (textStartsWith("淘宝热卖").exists()) {
        {
          scrollDown(0);
          sleep(random(2000, 3000));
          scrollDown(0);
          sleep(random(2000, 3000));
          continue;
        }
      }
      if (_0x43f0bf > random(0, 100)) {
        console.verbose("某鱼养号准备进入宝贝详情页...");
        try {
          textEndsWith("人想要").find()[0].parent().find(className("android.widget.LinearLayout").clickable())[0].click();
          sleep(2000);
        } catch (_0x40ff3c) {
          {
            console.verbose("无法点击进入宝贝详情，跳过宝贝");
            continue;
          }
        }
        if (!desc("更多").exists() && descContains("\n详情").exists()) {
          descContains("\n详情").findOne().click();
          sleep(1000);
        }
        for (let _0x30ce3b = 0; _0x30ce3b < 12; _0x30ce3b++) {
          sleep(1000);
          if (desc("聊一聊按钮")) {
            break;
          } else if (desc("我想要").exists()) {
            {
              if (desc("我想要").findOne().depth() == 10) {
                {
                  setting.dep = 0;
                }
              } else {
                setting.dep = 1;
              }
              break;
            }
          } else if (desc("我想要, 我想要").exists()) {
            {
              break;
            }
          }
        }
        toastLog("进入详情页...");
        sleep(5000);
        if (text("去会玩").exists() || text("我要兑换").exists() || text("出个价").exists() || text("加入购物车").exists()) {
          console.verbose("去会玩 我要兑换 出个价 加入购物车");
          back();
          sleep(3000);
          continue;
        }
        if (desc("立即租, 立即租").exists()) {
          console.verbose("立即租");
          back();
          sleep(3000);
          continue;
        }
        if (text("天猫新品预约").exists()) {
          console.verbose("天猫新品预约");
          back();
          sleep(3000);
        }
        if (!desc("我想要").exists() && !desc("聊一聊, 聊一聊").exists() && !desc("我想要, 我想要").exists() && !desc("聊一聊按钮").exists()) {
          {
            console.verbose("我想要或聊一聊不存在");
            back();
            sleep(3000);
            if (desc("我想要").exists() || desc("聊一聊按钮").exists()) {
              back();
              sleep(3000);
            } else if (desc("聊一聊, 聊一聊").exists()) {
              back();
              sleep(3000);
            } else if (desc("我想要, 我想要").exists()) {
              {
                back();
                sleep(3000);
              }
            }
            continue;
          }
        }
        var _0x2c3917 = "";
        if (id("user_info_nick").exists()) {
          _0x2c3917 = id("user_info_nick").findOne().text();
          sleep(500);
          console.verbose("用户名：" + _0x2c3917);
        } else if (descContains("前来过").exists()) {
          _0x2c3917 = descContains("前来过").findOne().desc();
          sleep(500);
          _0x2c3917 = _0x2c3917.split("\n")[0];
          console.verbose("用户名：" + _0x2c3917);
        }
        if (setting.xf) {
          if (className("android.widget.TextView").textEndsWith("人浏览").exists() && className("android.widget.TextView").textEndsWith("人想要").exists()) {
            var _0x46c836 = className("android.widget.TextView").textEndsWith("人想要").findOne().text().split("人想要")[0];
            if (_0x46c836 > 1000 && device.release.split(".")[0] < 10 && _0x2c3917) {
              console.verbose("想要数：" + _0x46c836);
              if (desc("分享按钮").exists()) {
                {
                  desc("分享按钮").findOne().click();
                  sleep(2000);
                  let _0x4779a0 = desc("复制链接").findOne().bounds();
                  common.my_click(_0x4779a0.centerX(), _0x4779a0.centerY());
                  sleep(1000);
                  back();
                  sleep(500);
                  threads.start(function () {
                    let _0x4f7e17 = http.postJson(setting.api_domain + "add_fiery2", {
                      "url": getClip(),
                      "user_nick": _0x2c3917,
                      "access_token": setting.s.get("access_token")
                    });
                  });
                }
              }
            }
          }
        } else {
          if (descContains("人想要").exists()) {
            {
              var _0x46c836 = descContains("人想要").findOne().desc();
              _0x46c836 = _0x46c836.split("\n");
              for (let _0x30ce3b = 0; _0x30ce3b < _0x46c836.length; _0x30ce3b++) {
                if (_0x46c836[_0x30ce3b].indexOf("人想要") != -1) {
                  _0x46c836 = _0x46c836[_0x30ce3b].split("人想要")[0];
                  break;
                }
              }
              if (_0x46c836 > 1000 && device.release.split(".")[0] < 10 && _0x2c3917) {
                {
                  console.verbose("想要数：" + _0x46c836);
                  if (desc("分享").exists()) {
                    {
                      desc("分享").findOne().click();
                      sleep(2000);
                      let _0x22979d = desc("复制链接").findOne().bounds();
                      common.my_click(_0x22979d.centerX(), _0x22979d.centerY());
                      sleep(1000);
                      back();
                      sleep(500);
                      threads.start(function () {
                        let _0x50c370 = http.postJson(setting.api_domain + "add_fiery2", {
                          "url": getClip(),
                          "user_nick": _0x2c3917,
                          "access_token": setting.s.get("access_token")
                        });
                      });
                    }
                  }
                }
              }
            }
          }
        }
        toastLog("开始模拟人工浏览宝贝...");
        for (let _0x30ce3b = 0; _0x30ce3b < 20; _0x30ce3b++) {
          let _0x2d8d28 = random(1000, 1500);
          if (random(0, 15) < 2) {
            common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, _0x2d8d28);
          } else {
            common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, _0x2d8d28);
          }
          sleep(random(500, 1500));
          if (descStartsWith("担保交易").exists() || id("user_content").exists()) {
            common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, _0x2d8d28);
            sleep(random(800, 1500));
            if (random(0, 1)) {
              common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, _0x2d8d28);
              sleep(random(800, 1500));
            }
            break;
          }
        }
        if (_0x1f7fd8 > random(0, 100)) {
          if (desc("超赞").exists()) {
            {
              desc("超赞").click();
              toastLog("超赞了宝贝");
              sleep(5000);
            }
          }
        }
        if (_0x47b7b4 > random(0, 100)) {
          {
            console.verbose("准备收藏宝贝...");
            if (desc("收藏按钮").exists()) {
              desc("收藏按钮").findOne().click();
              sleep(1000);
            } else if (desc("收藏").exists()) {
              {
                desc("收藏").findOne().click();
                sleep(1000);
              }
            }
            toastLog("收藏了宝贝");
            sleep(2000);
          }
        }
        if (_0x5f5c14 > random(0, 100)) {
          {
            console.verbose("准备 想要/聊一聊 宝贝...");
            if (desc("我想要, 我想要").exists()) {
              desc("我想要, 我想要").click();
              sleep(2000);
              if (_0x374034) {
                console.verbose("准备发送私信...");
                common.send(_0x374034);
              }
            } else if (desc("聊一聊按钮").exists()) {
              {
                desc("聊一聊按钮").findOne().click();
                sleep(2000);
                if (_0x374034) {
                  {
                    console.verbose("准备发送私信...");
                    common.send(_0x374034);
                  }
                }
              }
            }
            sleep(3500);
            while (!desc("我想要, 我想要").exists() && !desc("聊一聊按钮").exists()) {
              back();
              sleep(2000);
            }
            toastLog("想要了宝贝");
            sleep(3500);
          }
        }
        if (_0xaa0626 > random(0, 100)) {
          console.verbose("准备留言...");
          sleep(2000);
          let _0xb16d0c = _0x378ef7.split("#").filter(function (_0x4f2db5) {
            {
              return _0x4f2db5 && _0x4f2db5.trim();
            }
          });
          let _0xdba385 = Math.floor(Math.random() * _0xb16d0c.length);
          var _0x21f2da = _0xb16d0c[_0xdba385];
          if (desc("评论按钮").exists()) {
            {
              desc("评论按钮").findOne().click();
              sleep(1000);
            }
          } else if (desc("留言按钮").exists()) {
            {
              desc("留言按钮").findOne().click();
              sleep(1000);
            }
          } else if (desc("留言").exists()) {
            {
              desc("留言").findOne().click();
              sleep(1000);
            }
          }
          console.verbose("留言内容：" + _0x21f2da);
          if (descStartsWith("看对眼就留言").exists()) {
            descStartsWith("看对眼就留言").click();
            sleep(1000);
          } else {
            textStartsWith("看对眼就留言").click();
            sleep(1000);
          }
          common.my_input(_0x21f2da);
          if (desc("发送").exists()) {
            desc("发送").findOne().click();
            sleep(3000);
          } else if (text("发送").exists()) {
            {
              text("发送").findOne().click();
              sleep(3000);
            }
          }
          if (descStartsWith("看对眼就留言").exists() || textStartsWith("看对眼就留言").exists()) {
            back();
            sleep(1000);
          }
        }
        while (desc("我想要, 我想要").exists() || desc("聊一聊按钮").exists()) {
          back();
          sleep(6000);
        }
      }
    } else {
      {
        toastLog("当前为休眠时间段..");
        sleep(600000);
      }
    }
    if (setting.all_top_goods_title.length >= 50) {
      {
        setting.all_top_goods_title = [];
        setting.all_top_goods = [];
      }
    }
  }
  var _0x29e772 = http.postJson(setting.api_domain + "add_fiery", {
    "all_top_goods": setting.all_top_goods,
    "access_token": setting.s.get("access_token")
  });
  setting.all_top_goods_title = [];
  setting.all_top_goods = [];
  common.back_xy_home();
}
function look_goods_unity() {
  var _0x24c14c = setting.configure.unity;
  toastLog("开始互助养号");
  common.xy_home();
  sleep(1000);
  var _0x35213c = http.post(setting.api_domain + "yanghao_get_other_uname", {
    "access_token": setting.s.get("access_token")
  });
  var _0x2e4009 = _0x35213c.body.json();
  if (_0x2e4009.code == 1) {
    {
      let _0x2edac0 = _0x2e4009.msg;
      toast(_0x2edac0);
      console.error(_0x2edac0);
      return false;
    }
  }
  var _0x589f2e = _0x2e4009.data;
  for (let _0x5b64a4 = 0; _0x5b64a4 < _0x589f2e.length; _0x5b64a4++) {
    {
      let _0x17f54b = _0x589f2e[_0x5b64a4].u_id;
      let _0xf0889c = _0x589f2e[_0x5b64a4].u_name;
      let _0x2102d9 = 0;
      let _0x1e9b53 = 0;
      let _0x44fa7e = 0;
      let _0x4cf92e = 0;
      let _0x4e91a5 = 0;
      common.xy_home();
      common.enter_tab("闲鱼");
      common.enter_tab("闲鱼");
      sleep(1500);
      id("search_bar_layout").waitFor();
      sleep(100);
      console.verbose("首页宝贝搜索框出现");
      id("search_bar_layout").findOne().click();
      sleep(2000);
      console.verbose("搜索按钮出现");
      setText(_0xf0889c);
      sleep(1000);
      desc("搜索").findOne().click();
      sleep(2000);
      var _0x2ab280 = false;
      for (let _0x5b64a4 = 0; _0x5b64a4 < 20; _0x5b64a4++) {
        sleep(1000);
        if (text("用户").exists()) {
          break;
        }
      }
      if (text("用户").exists()) {
        {
          text("用户").findOne().parent().click();
          sleep(2000);
          for (let _0x33297a = 0; _0x33297a < 10; _0x33297a++) {
            sleep(1000);
            if (descContains("会员名：").exists()) {
              {
                break;
              }
            }
          }
          if (descContains("会员名：").exists()) {
            descContains("会员名：").findOne().click();
            sleep(2000);
            if (descEndsWith("重新加载").exists()) {
              {
                console.verbose("存在'重新加载'，准备返回闲鱼首页");
                common.xy_home();
              }
            } else {
              _0x2ab280 = true;
            }
          } else {
            console.verbose("'会员名：'不存在，准备返回闲鱼首页");
            common.xy_home();
          }
        }
      } else {
        common.xy_home();
      }
      if (_0x2ab280) {
        {
          {
            {
              console.verbose("开始关注...");
              for (let _0x5b64a4 = 0; _0x5b64a4 < 3; _0x5b64a4++) {
                sleep(3000);
                if (desc("关注").exists()) {
                  {
                    console.verbose("卖家详情页加载完毕");
                    break;
                  }
                }
              }
              if (desc("关注").exists()) {
                if (descContains("相互关注").exists() || descContains("已关注").exists()) {
                  toastLog("已关注");
                } else if (desc("关注").exists()) {
                  {
                    let _0x8502b3 = desc("关注").find();
                    if (_0x8502b3.length == 2) {
                      let _0x191e21 = _0x8502b3[1].bounds();
                      common.my_click(_0x191e21.centerX(), _0x191e21.centerY());
                      sleep(500);
                      _0x4cf92e = _0x4cf92e + 1;
                    } else {
                      console.verbose(_0x8502b3.length);
                    }
                  }
                } else {
                  console.verbose("关注按钮不存在");
                }
                sleep(3000);
                if (descStartsWith("关注成功！请设置通知接收范围").exists()) {
                  back();
                  sleep(1000);
                }
              }
            }
          }
          sleep(1000);
          console.verbose("获取宝贝数量");
          while (!descEndsWith("\n宝贝").exists() && !desc("这里空空如也～").exists()) {
            {
              console.verbose("下滑");
              common.my_swipe(device.width / 2, device.height * 9 / 10, device.width / 2, device.height * 4 / 10, random(1000, 2000));
              sleep(1000);
            }
          }
          if (desc("这里空空如也～").exists()) {
            _0x4e91a5 = "0";
          } else if (descEndsWith("\n宝贝").exists()) {
            _0x4e91a5 = descEndsWith("\n宝贝").findOne().desc().split("\n")[0];
          } else {
            _0x4e91a5 = desc("宝贝").findOne().parent().find(indexInParent(1))[0].desc();
          }
          _0x4e91a5 = _0x4e91a5.replace(/[^0-9]/gi, "");
          console.verbose("宝贝总数：" + _0x4e91a5);
          let _0x5b5aaa = parseInt(_0x4e91a5 / 3);
          if (_0x5b5aaa > 20) {
            _0x5b5aaa = 20;
          }
          common.my_swipe(device.width / 2, device.height * 9 / 10, device.width / 2, device.height * 4 / 10, random(1000, 1300));
          sleep(2000);
          for (let _0x5b64a4 = 0; _0x5b64a4 < _0x5b5aaa; _0x5b64a4++) {
            console.verbose("第" + (_0x5b64a4 + 1) + "次下滑");
            common.my_swipe(device.width / 2, device.height * 9 / 10, device.width / 2, device.height * 4 / 10, random(1000, 1300));
            sleep(2000);
            if (1 < random(0, 100)) {
              console.verbose("互助养号准备进入宝贝详情页...");
              if (descContains("商品价格").exists()) {
                {
                  console.verbose("点击1");
                  let _0x2cbf5b = descContains("商品价格").find();
                  if (_0x2cbf5b.length >= 3) {
                    let _0x191e21 = _0x2cbf5b[2].bounds();
                    common.my_click(_0x191e21.centerX(), _0x191e21.centerY());
                    sleep(500);
                  }
                }
              } else if (desc("¥").exists()) {
                {
                  console.verbose("点击2");
                  let _0x50ac52 = desc("¥").find();
                  if (_0x50ac52.length >= 2) {
                    _0x50ac52[1].parent().parent().parent().click();
                  }
                }
              } else if (descStartsWith("¥").exists()) {
                console.verbose("点击3");
                let _0xd6079c = descStartsWith("¥").find();
                if (_0xd6079c.length >= 3) {
                  let _0x191e21 = _0xd6079c[2].bounds();
                  common.my_click(_0x191e21.centerX(), _0x191e21.centerY());
                  sleep(500);
                }
              } else {
                {
                  console.verbose("未找到宝贝控件，后续详情页可能会失败");
                  continue;
                }
              }
              toastLog("等待详情页加载完毕..");
              for (let _0x5b64a4 = 0; _0x5b64a4 < 12; _0x5b64a4++) {
                sleep(1000);
                if (desc("我想要").exists()) {
                  if (desc("我想要").findOne().depth() == 10) {
                    setting.dep = 0;
                  } else {
                    setting.dep = 1;
                  }
                  break;
                } else if (desc("我想要, 我想要").exists()) {
                  break;
                } else if (desc("聊一聊, 聊一聊").exists()) {
                  break;
                }
              }
              if (text("我要兑换").exists() || text("出个价").exists() || text("加入购物车").exists()) {
                console.verbose("我要兑换 出个价 加入购物车");
                back();
                sleep(3000);
                continue;
              }
              if (desc("立即租, 立即租").exists()) {
                {
                  console.verbose("立即租");
                  back();
                  sleep(3000);
                  continue;
                }
              }
              if (textEndsWith("重新加载").exists() || text("卖掉了").exists()) {
                console.verbose("重新加载 卖掉了");
                back();
                sleep(3000);
                break;
              }
              if (!desc("我想要").exists() && !desc("聊一聊, 聊一聊").exists() && !desc("我想要, 我想要").exists()) {
                console.verbose("'我想要'不存在");
                back();
                sleep(3000);
                if (desc("我想要").exists()) {
                  back();
                  sleep(3000);
                } else if (desc("聊一聊, 聊一聊").exists()) {
                  back();
                  sleep(3000);
                } else if (desc("我想要, 我想要").exists()) {
                  {
                    back();
                    sleep(3000);
                  }
                }
                continue;
              }
              toastLog("开始模拟人工浏览宝贝...");
              for (let _0x5b64a4 = 0; _0x5b64a4 < 5; _0x5b64a4++) {
                {
                  let _0x4bcdee = random(900, 1500);
                  if (random(0, 8) < 2) {
                    {
                      common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, _0x4bcdee);
                    }
                  } else {
                    common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, _0x4bcdee);
                  }
                  sleep(random(500, 1200));
                  if (descStartsWith("担保交易").exists()) {
                    common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, _0x4bcdee);
                    sleep(random(800, 1200));
                    if (random(0, 1)) {
                      common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, _0x4bcdee);
                      sleep(random(800, 1200));
                    }
                    break;
                  }
                }
              }
              if (15 < random(0, 100)) {
                {
                  if (desc("超赞").exists()) {
                    {
                      desc("超赞").click();
                      toastLog("超赞了宝贝");
                      sleep(2000);
                      _0x2102d9 = _0x2102d9 + 1;
                    }
                  } else {
                    console.verbose("超赞不存在");
                  }
                }
              }
              if (15 < random(0, 100)) {
                console.verbose("准备收藏");
                if (desc("收藏").exists()) {
                  {
                    console.verbose("准备收藏宝贝...");
                    desc("收藏").findOne().click();
                    sleep(1000);
                    _0x44fa7e = _0x44fa7e + 1;
                    toastLog("收藏了宝贝");
                    sleep(2000);
                  }
                }
              }
              if (15 < random(0, 100)) {
                {
                  console.verbose("准备想要");
                  if (desc("聊一聊, 聊一聊").exists()) {
                    console.verbose("点击聊一聊");
                    desc("聊一聊, 聊一聊").click();
                    sleep(5000);
                    _0x1e9b53 = _0x1e9b53 + 1;
                    back();
                    sleep(2000);
                  } else if (desc("我想要, 我想要").exists()) {
                    console.verbose("点击我想要");
                    desc("我想要, 我想要").click();
                    sleep(5000);
                    _0x1e9b53 = _0x1e9b53 + 1;
                    back();
                    sleep(2000);
                  }
                  toastLog("想要了宝贝");
                  sleep(2000);
                }
              }
              while (desc("聊一聊, 聊一聊").exists() || desc("我想要, 我想要").exists()) {
                console.verbose("返回宝贝列表页面...");
                back();
                sleep(2000);
              }
            }
            if (desc("没有更多了～").exists()) {
              {
                console.verbose("没有更多宝贝了～");
                break;
              }
            }
          }
          console.verbose(setting.xy_name);
          var _0x35213c = http.postJson(setting.api_domain + "add_yanghao_log", {
            "ou_id": _0x17f54b,
            "u_name": setting.xy_name,
            "ou_name": _0xf0889c,
            "like": _0x2102d9,
            "want": _0x1e9b53,
            "collect": _0x44fa7e,
            "care": _0x4cf92e,
            "total": _0x4e91a5,
            "access_token": setting.s.get("access_token")
          });
          console.verbose(_0x35213c.body.string());
        }
      }
    }
  }
  toastLog("互助结束");
  common.back_xy_home();
}
function look_tiezi() {
  var _0x599bbc = setting.configure.yanghao_tz_scroll_num;
  var _0x1a87d9 = setting.configure.yanghao_tz_like_percent;
  enter_yanghao_tz();
  for (let _0x42c45c = 0; _0x42c45c < _0x599bbc; _0x42c45c++) {
    {
      if (common.is_runtime()) {
        let _0xf3df3d = Math.round(device.getAvailMem() / 1048576);
        if (_0xf3df3d < setting.min_mem) {
          {
            if (setting.is_root) {
              {
                console.error("内存剩余:" + _0xf3df3d + "M");
                shell("am force-stop com.taobao.idlefish", true);
                toastLog("内存优化中...");
                sleep(7000);
                toastLog("内存已优化");
                common.xy_home();
                sleep(7000);
                enter_yanghao_tz();
              }
            } else {
              toastLog("设备内存优化中...");
              common.closeapp(setting.xy_pname);
              common.xy_home();
              sleep(7000);
              enter_yanghao_tz();
              console.error("内存剩余量过低可能造成运行软件不稳定，请尽量关闭其他占用内存的应用");
              sleep(10000);
            }
          }
        }
        if (!text("发帖子").exists() && !descStartsWith("会玩，").clickable().indexInParent(1).exists()) {
          {
            console.verbose("当前不在帖子列表，开始进入帖子列表...");
            enter_yanghao_tz();
            sleep(5000);
          }
        }
        common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 2 / 10, random(500, 1500));
        sleep(2000);
        toastLog("第" + (_0x42c45c + 1) + "次翻动会玩帖子列表..");
        sleep(random(1500, 3500));
        if (_0x1a87d9 > random(0, 100)) {
          console.verbose("准备进入会玩帖子详情页...");
          if (random(0, 1) === 0) {
            common.my_click(device.width / 10, device.height / 2);
            sleep(1000);
          } else {
            common.my_click(device.width / 10 * 6, device.height / 2);
            sleep(1000);
          }
          if (id("fun_video_like").exists()) {
            common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 5 / 10, 500);
            toastLog("视频内容");
            sleep(random(3000, 12000));
            id("fun_video_like").findOne().click();
            sleep(1000);
            toastLog("超赞了帖子视频");
            sleep(2000);
          } else {
            toastLog("进入会玩帖子详情页..");
            sleep(3000);
            toastLog("开始模拟人工浏览帖子...");
            if (random(0, 1) === 0) {
              common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, random(900, 2000));
              sleep(2000);
            }
            if (desc("表态按钮").exists()) {
              desc("表态按钮").findOne().click();
              sleep(500);
              if (descStartsWith("赞一个").exists()) {
                descStartsWith("赞一个").findOne().click();
              } else if (descStartsWith("鱿意思").exists()) {
                {
                  descStartsWith("鱿意思").findOne().click();
                }
              } else if (descStartsWith("鲸呆了").exists()) {
                descStartsWith("鲸呆了").findOne().click();
              } else if (descStartsWith("赞一个\n").exists()) {
                {
                  descStartsWith("赞一个\n").findOne().click();
                }
              } else if (descStartsWith("鱿意思\n").exists()) {
                descStartsWith("鱿意思\n").findOne().click();
              } else if (descStartsWith("鲸呆了\n").exists()) {
                descStartsWith("鲸呆了\n").findOne().click();
              }
              sleep(1000);
              toastLog("表态成功");
            } else if (device.release.split(".")[0] >= 7 && !id("more").exists()) {
              sleep(2000);
              console.verbose("准备点赞帖子");
              click(device.width / 2, device.height * 1 / 10);
              sleep(100);
              click(device.width / 2, device.height * 1 / 10);
              sleep(2000);
            } else {
              {
                console.verbose("仅浏览帖子不做其他操作");
              }
            }
            for (let _0x42c45c = 0; _0x42c45c <= 3; _0x42c45c++) {
              {
                if (random(0, 15) < 2) {
                  {
                    common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, random(900, 2000));
                  }
                } else {
                  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, random(900, 2000));
                }
                sleep(random(300, 2000));
              }
            }
          }
          back();
          sleep(6000);
        }
      } else {
        toastLog("当前为休眠时间段..");
        sleep(600000);
      }
      sleep(1000);
    }
  }
  common.back_xy_home();
}
function enter_yanghao() {
  common.xy_home();
  sleep(2000);
  common.enter_tab("闲鱼");
  sleep(1000);
  console.log("已进入宝贝列表，准备开始养号...");
}
function enter_yanghao_tz() {
  common.xy_home();
  sleep(3000);
  descStartsWith("会玩，").findOne().click();
  sleep(1000);
  sleep(random(3000, 6000));
  console.log("已进入会玩帖子，准备开始养号...");
}
function enter_qwc(_0x40a988) {
  let _0xb9af77 = _0x40a988.depth();
  let _0x2b7a2f = _0x40a988.indexInParent();
  for (let _0x45cda0 = 5; _0x45cda0 < 15; _0x45cda0++) {
    {
      try {
        let _0x4ede81 = depth(_0xb9af77).indexInParent(_0x2b7a2f + _0x45cda0).findOne().child(0).text();
        if (_0x4ede81 == "去完成") {
          {
            depth(_0xb9af77).indexInParent(_0x2b7a2f + _0x45cda0).findOne().child(0).click();
            sleep(2000);
            console.verbose("点击'去完成'");
            return true;
          }
        } else if (_0x4ede81 == "已完成") {
          {
            return false;
          }
        } else if (depth(_0xb9af77).text("去完成").indexInParent(_0x2b7a2f + _0x45cda0).exists()) {
          depth(_0xb9af77).text("去完成").indexInParent(_0x2b7a2f + _0x45cda0).click();
          sleep(2000);
          console.verbose("点击'去完成'2");
          return true;
        }
      } catch (_0xba14d1) {}
    }
  }
  return false;
}
function enter_qwc_xf(_0x3ede55) {
  console.verbose("检测任务: " + _0x3ede55);
  if (!setting.xyb_list.includes(_0x3ede55) && setting.all_xyb_task_name.includes(_0x3ede55)) {
    {
      let _0x72469f = text(_0x3ede55).algorithm(setting.xyb_algorithm).findOnce();
      if (_0x72469f) {
        {
          setting.xyb_list.push(_0x3ede55);
          let _0x5a0a2c = _0x72469f.indexInParent();
          let _0x1af3c0 = _0x72469f.parent().children();
          for (let _0x3420b5 = 5; _0x3420b5 < 15; _0x3420b5++) {
            try {
              let _0x17b99b = _0x1af3c0[_0x5a0a2c + _0x3420b5].child(0).text();
              if (_0x17b99b == "去完成") {
                _0x1af3c0[_0x5a0a2c + _0x3420b5].child(0).click();
                sleep(2000);
                console.verbose("进入'" + _0x3ede55 + "'");
                return true;
              } else if (_0x17b99b == "已完成") {
                {
                  toastLog(_0x3ede55 + " 已完成");
                  return false;
                }
              }
            } catch (_0x1d7172) {}
          }
        }
      }
    }
  }
  return false;
}
function xyb_register_d(_0x423a41) {
  enter_xyb_register_d_son();
  if (textEndsWith("领取酬金").exists()) {
    toastLog("领取酬金");
    textEndsWith("领取酬金").findOne().click();
    sleep(3000);
  }
  {
    toastLog("领取奖励");
    for (let _0x43eff7 = 0; _0x43eff7 < 8; _0x43eff7++) {
      sleep(1000);
      if (text("闲鱼币抵扣").exists()) {
        break;
      }
    }
    sleep(3000);
    let _0x4463b0 = text("闲鱼币抵扣").findOne().parent().bounds();
    let _0x1bd1de = device.width;
    let _0x54c5ae = _0x4463b0.height();
    if (!text("去完成").exists()) {
      {
        common.my_click(_0x1bd1de * 7.5 / 10, _0x4463b0.top - _0x54c5ae * 2 / 3);
      }
    }
    for (let _0x43eff7 = 0; _0x43eff7 < 100; _0x43eff7++) {
      {
        sleep(2000);
        console.verbose("等待赚鱼币任务列表出现");
        if (text("领取奖励").exists()) {
          {
            break;
          }
        }
        if (text("去完成").exists()) {
          break;
        }
        if (text("重新进入").exists()) {
          {
            console.verbose("地图加载失败，重新加载");
            text("重新进入").findOne().click();
            sleep(5000);
          }
        }
        if (text("刷新一下").exists()) {
          {
            console.verbose("地图加载失败，点击刷新");
            text("刷新一下").findOne().click();
            sleep(5000);
          }
        }
        if (_0x43eff7 == 7) {
          console.verbose("重新进入鱼币任务页面");
          back();
          sleep(2000);
          xyb_register_d(_0x423a41);
          return false;
        }
      }
    }
    sleep(2000);
    if (false && !setting.xyb_list.includes("去浏览全新好物") && text("去浏览全新好物xxxxx").exists()) {
      setting.xyb_list.push("去浏览全新好物");
      toastLog("去浏览全新好物");
      let _0x2d8144 = text("去浏览全新好物").findOne();
      if (enter_qwc(_0x2d8144)) {
        {
          console.verbose("进入'去浏览全新好物'");
          for (let _0x3ba3dd = 0; _0x3ba3dd < 30; _0x3ba3dd++) {
            if (!textStartsWith("滑动浏览").exists()) {
              break;
            }
            common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 1000);
            sleep(100);
          }
          back();
          sleep(1000);
        }
      }
    }
    if (!setting.xyb_list.includes("搜一搜喜欢的商品") && text("搜一搜喜欢的商品").exists()) {
      setting.xyb_list.push("搜一搜喜欢的商品");
      toastLog("搜一搜喜欢的商品");
      let _0x1d7eb6 = text("搜一搜喜欢的商品").findOne();
      if (enter_qwc(_0x1d7eb6)) {
        sleep(3000);
        if (text("1688").exists()) {
          console.verbose("在1688搜一搜喜欢的商品");
          for (let _0x3ba3dd = 0; _0x3ba3dd < 30; _0x3ba3dd++) {
            if (!textStartsWith("滑动浏览").exists()) {
              {
                break;
              }
            }
            if (Math.random() < 0.4) {
              {
                common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, 1000);
                sleep(100);
              }
            } else {
              {
                common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 1000);
                sleep(100);
              }
            }
          }
          back();
          sleep(1000);
        } else {
          {
            console.verbose("进入'搜一搜喜欢的商品'");
            if (className("android.view.View").depth(13).clickable().exists()) {
              className("android.view.View").depth(13).clickable().find()[0].click();
              sleep(2000);
              for (let _0x3ba3dd = 0; _0x3ba3dd < 10; _0x3ba3dd++) {
                if (text("任务完成，再逛逛").exists()) {
                  {
                    break;
                  }
                }
                common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 500);
                sleep(2000);
              }
              back();
              sleep(1000);
            }
            back();
            sleep(1000);
          }
        }
      }
    }
    while (text("领取奖励").clickable(true).exists()) {
      {
        text("领取奖励").clickable(true).findOne().click();
        sleep(2000);
      }
    }
    if (!setting.xyb_list.includes("好物夺宝试试手气") && text("好物夺宝试试手气").exists()) {
      setting.xyb_list.push("好物夺宝试试手气");
      toastLog("好物夺宝试试手气");
      let _0x2d265f = text("好物夺宝试试手气").findOne();
      if (enter_qwc(_0x2d265f)) {
        console.verbose("进入'好物夺宝试试手气'");
        for (let _0x43eff7 = 0; _0x43eff7 < 10; _0x43eff7++) {
          if (text("100闲鱼币夺宝").exists()) {
            {
              sleep(1000);
              break;
            }
          }
          if (desc("100闲鱼币夺宝").exists() || desc("已参与").exists() || descEndsWith("夺得宝贝").exists()) {
            sleep(1000);
            break;
          }
          if (text("确认授权").exists()) {
            {
              console.verbose("出现淘宝登录界面，自动跳过");
              back();
              sleep(2000);
            }
          }
          sleep(1000);
        }
        if (desc("100闲鱼币夺宝").boundsInside(0, 0, device.width, device.height * 9 / 10).exists() && !desc("已参与").exists() && !descEndsWith("夺得宝贝").exists()) {
          sleep(1000);
          let _0x3d9d49 = desc("100闲鱼币夺宝").findOne().bounds();
          common.my_click(_0x3d9d49.centerX(), _0x3d9d49.centerY());
          sleep(3000);
          _0x3d9d49 = desc("100闲鱼币夺宝").findOne().bounds();
          common.my_click(_0x3d9d49.centerX(), _0x3d9d49.centerY());
          sleep(2000);
          console.verbose("开始设置投注量");
          setText("1");
          sleep(1000);
          if (descContains("闲鱼币不足").exists()) {
            toastLog("闲鱼币不足最小投注额");
          } else {
            {
              console.verbose("点击确定投注");
              desc("去投注").findOne().click();
              sleep(500);
              desc("直接投1注").findOne().parent().click();
              sleep(500);
            }
          }
          back();
          sleep(2000);
          console.verbose("返回");
        } else if (text("100闲鱼币夺宝").boundsInside(0, 0, device.width, device.height * 9 / 10).exists() && !desc("已参与").exists() && !descEndsWith("夺得宝贝").exists()) {
          sleep(1000);
          let _0x8b29b6 = text("100闲鱼币夺宝").findOne().bounds();
          common.my_click(_0x8b29b6.centerX(), _0x8b29b6.centerY());
          sleep(3000);
          console.verbose("第一次点击100闲鱼币夺宝");
          _0x8b29b6 = text("100闲鱼币夺宝").findOne().bounds();
          common.my_click(_0x8b29b6.centerX(), _0x8b29b6.centerY());
          sleep(3000);
          console.verbose("第二次点击100闲鱼币夺宝");
          console.verbose("开始设置投注量");
          setText("1");
          sleep(1200);
          if (descContains("闲鱼币不足").exists()) {
            {
              toastLog("闲鱼币不足最小投注额");
            }
          } else {
            console.verbose("点击确定投注");
            if (text("确定投注").exists()) {
              {
                text("确定投注").findOne().click();
                sleep(1000);
              }
            } else {
              {
                console.verbose("确定投注按钮加载失败，无法投注");
              }
            }
            if (text("直接投1注").exists()) {
              console.verbose("直接投1注");
              text("直接投1注").findOne().parent().click();
              sleep(500);
            } else if (text("直接投3注").exists()) {
              {
                console.verbose("直接投3注");
                text("直接投3注").findOne().parent().click();
                sleep(500);
              }
            }
          }
          back();
          sleep(2000);
          console.verbose("返回");
        } else {
          toastLog("已参与无好物夺宝或今日已无好物夺宝");
        }
        back();
        sleep(2000);
        console.verbose("返回");
      }
    }
    if (!setting.xyb_list.includes("去借钱频道看一看") && text("去借钱频道看一看").exists()) {
      setting.xyb_list.push("去借钱频道看一看");
      toastLog("去借钱频道看一看");
      let _0x332c71 = text("去借钱频道看一看").findOne();
      if (enter_qwc(_0x332c71)) {
        sleep(2000);
        console.verbose("进入'去借钱频道看一看'");
        back();
        sleep(2000);
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.zfb_pname) == "未安装") {
      console.verbose("未安装支付宝，跳过支付宝相关任务");
    } else {
      {
        if (!setting.xyb_list.includes("去支付宝领积分") && text("去支付宝领积分").exists()) {
          setting.xyb_list.push("去支付宝领积分");
          toastLog("去支付宝领积分");
          let _0x277ca5 = text("去支付宝领积分").findOne();
          if (enter_qwc(_0x277ca5)) {
            {
              console.verbose("进入'去支付宝领积分'");
              sleep(3000);
              common.allow_access();
              sleep(7000);
              common.start_double_xy_son();
              sleep(5000);
              if (!text("去完成").exists()) {
                {
                  back();
                  sleep(2000);
                }
              }
            }
          }
        }
        if (!setting.xyb_list.includes("去支付宝农场领水果") && text("去支付宝农场领水果").exists()) {
          setting.xyb_list.push("去支付宝农场领水果");
          toastLog("去支付宝农场领水果");
          let _0x4c9eb7 = text("去支付宝农场领水果").findOne();
          if (enter_qwc(_0x4c9eb7)) {
            console.verbose("进入'去支付宝农场领水果'");
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").exists()) {
              {
                back();
                sleep(2000);
              }
            }
          }
        }
        if (!setting.xyb_list.includes("去蚂蚁森林逛一逛") && text("去蚂蚁森林逛一逛").exists()) {
          setting.xyb_list.push("去蚂蚁森林逛一逛");
          toastLog("去蚂蚁森林逛一逛");
          let _0xa57490 = text("去蚂蚁森林逛一逛").findOne();
          if (enter_qwc(_0xa57490)) {
            console.verbose("进入'去蚂蚁森林逛一逛'");
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").exists()) {
              {
                back();
                sleep(2000);
              }
            }
          }
        }
        if (!setting.xyb_list.includes("去蚂蚁庄园逛一逛") && text("去蚂蚁庄园逛一逛").exists()) {
          {
            setting.xyb_list.push("去蚂蚁庄园逛一逛");
            toastLog("去蚂蚁庄园逛一逛");
            let _0xfc60c4 = text("去蚂蚁庄园逛一逛").findOne();
            if (enter_qwc(_0xfc60c4)) {
              console.verbose("进入'去蚂蚁庄园逛一逛'");
              sleep(3000);
              common.allow_access();
              sleep(7000);
              common.start_double_xy_son();
              sleep(5000);
              if (!text("去完成").exists()) {
                {
                  back();
                  sleep(2000);
                }
              }
            }
          }
        }
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.tb_pname) == "未安装") {
      console.verbose("未安装淘宝，跳过淘宝相关任务");
    } else {
      {
        if (!setting.xyb_list.includes("去淘宝签到领红包") && text("去淘宝签到领红包").exists()) {
          setting.xyb_list.push("去淘宝签到领红包");
          toastLog("去淘宝签到领红包");
          let _0x138dc8 = text("去淘宝签到领红包").findOne();
          if (enter_qwc(_0x138dc8)) {
            {
              console.verbose("进入'去淘宝签到领红包'");
              sleep(3000);
              common.allow_access();
              sleep(7000);
              back();
              sleep(2000);
              if (!text("打开淘宝").exists()) {
                back();
                sleep(2000);
              }
              if (!text("打开淘宝").exists()) {
                back();
                sleep(2000);
              }
              common.start_double_xy_son();
              sleep(5000);
              back();
              sleep(2000);
            }
          }
        }
        if (!setting.xyb_list.includes("去芭芭农场领水果") && text("去芭芭农场领水果").exists()) {
          setting.xyb_list.push("去芭芭农场领水果");
          toastLog("去芭芭农场领水果");
          let _0x559259 = text("去芭芭农场领水果").findOne();
          if (enter_qwc(_0x559259)) {
            console.verbose("进入'去芭芭农场领水果'");
            sleep(3000);
            common.allow_access();
            sleep(7000);
            back();
            sleep(2000);
            if (!text("打开淘宝").exists()) {
              back();
              sleep(2000);
            }
            if (!text("打开淘宝").exists()) {
              back();
              sleep(2000);
            }
            common.start_double_xy_son();
            sleep(5000);
            back();
            sleep(2000);
          }
        }
        if (!setting.xyb_list.includes("逛短视频领现金") && text("逛短视频领现金").exists()) {
          {
            setting.xyb_list.push("逛短视频领现金");
            toastLog("逛短视频领现金");
            let _0x51216c = text("逛短视频领现金").findOne();
            if (enter_qwc(_0x51216c)) {
              console.verbose("进入'逛短视频领现金'");
              sleep(3000);
              common.allow_access();
              sleep(7000);
              back();
              sleep(2000);
              if (!text("打开淘宝").exists()) {
                back();
                sleep(2000);
              }
              if (!text("打开淘宝").exists()) {
                {
                  back();
                  sleep(2000);
                }
              }
              common.start_double_xy_son();
              sleep(5000);
              back();
              sleep(2000);
            }
          }
        }
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.ksjs_pname) == "未安装") {
      console.verbose("未安装快手极速版，跳过快手极速版相关任务");
    } else {
      {
        if (!setting.xyb_list.includes("去快手极速版领红包") && text("去快手极速版领红包").exists()) {
          setting.xyb_list.push("去快手极速版领红包");
          toastLog("去快手极速版领红包");
          let _0x209084 = text("去快手极速版领红包").findOne();
          if (enter_qwc(_0x209084)) {
            console.verbose("进入'去快手极速版领红包'");
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").exists()) {
              back();
              sleep(2000);
            }
          }
        }
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.tt_pname) == "未安装") {
      console.verbose("未安装淘特，跳过淘特相关任务");
    } else {
      {
        if (!setting.xyb_list.includes("去淘特领好礼") && text("去淘特领好礼").exists()) {
          setting.xyb_list.push("去淘特领好礼");
          toastLog("去淘特领好礼");
          let _0x1037ce = text("去淘特领好礼").findOne();
          if (enter_qwc(_0x1037ce)) {
            console.verbose("进入'去淘特领好礼'");
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").exists()) {
              {
                back();
                sleep(2000);
              }
            }
          }
        }
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.zgyd_pname) == "未安装") {
      console.verbose("未安装中国移动，跳过中国移动相关任务");
    } else {
      if (!setting.xyb_list.includes("去中国移动签到领话费") && text("去中国移动签到领话费").exists()) {
        setting.xyb_list.push("去中国移动签到领话费");
        toastLog("去中国移动签到领话费");
        let _0x25428d = text("去中国移动签到领话费").findOne();
        if (enter_qwc(_0x25428d)) {
          console.verbose("进入'去中国移动签到领话费'");
          sleep(3000);
          if (id("wx-open-app-button").exists()) {
            id("wx-open-app-button").findOne().click();
            sleep(2000);
          }
          common.allow_access();
          sleep(7000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").exists()) {
            {
              back();
              sleep(2000);
            }
          }
        }
      }
      if (!setting.xyb_list.includes("去中国移动领话费") && text("去中国移动领话费").exists()) {
        {
          setting.xyb_list.push("去中国移动领话费");
          toastLog("去中国移动领话费");
          let _0x4d435 = text("去中国移动领话费").findOne();
          if (enter_qwc(_0x4d435)) {
            {
              console.verbose("进入'去中国移动领话费'");
              sleep(3000);
              if (id("wx-open-app-button").exists()) {
                {
                  id("wx-open-app-button").findOne().click();
                  sleep(2000);
                }
              }
              common.allow_access();
              sleep(7000);
              common.start_double_xy_son();
              sleep(5000);
              if (!text("去完成").exists()) {
                back();
                sleep(2000);
              }
            }
          }
        }
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.bd_pname) == "未安装") {
      console.verbose("未安装百度，跳过百度相关任务");
    } else {
      {
        if (!setting.xyb_list.includes("去百度逛一逛") && text("去百度逛一逛").exists()) {
          {
            setting.xyb_list.push("去百度逛一逛");
            toastLog("去百度逛一逛");
            let _0x113495 = text("去百度逛一逛").findOne();
            if (enter_qwc(_0x113495)) {
              console.verbose("进入'去百度逛一逛'");
              sleep(3000);
              common.allow_access();
              sleep(12000);
              sleep(5000);
              common.start_double_xy_son();
              sleep(5000);
              if (!text("去完成").exists()) {
                back();
                sleep(2000);
              }
            }
          }
        }
      }
    }
    if (register_jump == "关") {} else if (common.getVersionName(setting.bddt_pname) == "未安装") {
      console.verbose("未安装百度地图，跳过百度地图相关任务");
    } else {
      {
        if (!setting.xyb_list.includes("去百度地图逛一逛") && text("去百度地图逛一逛").exists()) {
          {
            setting.xyb_list.push("去百度地图逛一逛");
            toastLog("去百度地图逛一逛");
            let _0x40993e = text("去百度地图逛一逛").findOne();
            if (enter_qwc(_0x40993e)) {
              console.verbose("进入'去百度地图逛一逛'");
              sleep(3000);
              common.allow_access();
              sleep(7000);
              common.start_double_xy_son();
              sleep(5000);
              if (!text("去完成").exists()) {
                back();
                sleep(2000);
              }
            }
          }
        }
      }
    }
    if (!setting.xyb_list.includes("浏览鱼小铺工作台") && text("浏览鱼小铺工作台").exists()) {
      setting.xyb_list.push("浏览鱼小铺工作台");
      toastLog("浏览鱼小铺工作台");
      let _0x557f22 = text("浏览鱼小铺工作台").findOne();
      if (enter_qwc(_0x557f22)) {
        sleep(2000);
        console.verbose("进入'浏览鱼小铺工作台'");
        back();
        sleep(2000);
      }
    }
    if (!setting.xyb_list.includes("去看一看闲鱼直播") && text("去看一看闲鱼直播").exists()) {
      {
        setting.xyb_list.push("去看一看闲鱼直播");
        toastLog("去看一看闲鱼直播");
        let _0x451fd5 = text("去看一看闲鱼直播").findOne();
        if (enter_qwc(_0x451fd5)) {
          sleep(2000);
          console.verbose("进入'去看一看闲鱼直播'");
          back();
          sleep(2000);
        }
      }
    }
    if (!setting.xyb_list.includes("点击指定频道好物") && text("点击指定频道好物").exists()) {
      {
        setting.xyb_list.push("点击指定频道好物");
        toastLog("点击指定频道好物");
        let _0x4f897c = text("点击指定频道好物").findOne();
        if (enter_qwc(_0x4f897c)) {
          console.verbose("进入'点击指定频道好物'");
          depth(8).scrollable().findOne().scrollForward();
          sleep(500);
          depth(8).scrollable().findOne().scrollForward();
          sleep(500);
          if (textStartsWith("再点").exists()) {
            for (let _0x43eff7 = 0; _0x43eff7 < 17; _0x43eff7++) {
              {
                if (textStartsWith("再点").exists()) {
                  common.my_click(device.width * 3 / 10, device.height / 2);
                  sleep(1000);
                  console.verbose("进入宝贝详情...");
                  for (let _0x43eff7 = 0; _0x43eff7 < 8; _0x43eff7++) {
                    if (text("加入购物车").exists()) {
                      break;
                    }
                    if (desc("我想要").exists() || desc("立即购买").exists()) {
                      break;
                    }
                    if (desc("我想要, 我想要").exists() || desc("留言按钮").exists()) {
                      break;
                    }
                    sleep(1000);
                  }
                  if (!desc("闲鱼币首页").exists()) {
                    console.verbose("返回频道宝贝列表...");
                    back();
                    sleep(2000);
                  }
                }
                if (text("点击领取").exists()) {
                  break;
                }
                depth(8).scrollable().findOne().scrollForward();
                sleep(500);
              }
            }
          } else {
            for (let _0x43eff7 = 0; _0x43eff7 < 17; _0x43eff7++) {
              if (_0x43eff7 == 1 && !textStartsWith("继续浏览").exists()) {
                break;
              }
              if (text("点击领取").exists()) {
                {
                  break;
                }
              }
              depth(8).scrollable().findOne().scrollForward();
              sleep(2000);
            }
          }
          back();
          sleep(2000);
          enter_xyb_register_d_son();
        }
      }
    }
    while (text("领取奖励").clickable(true).exists()) {
      text("领取奖励").clickable(true).findOne().click();
      sleep(2000);
    }
    while (text("领取").exists()) {
      text("领取").findOne().parent().click();
      sleep(2000);
    }
    if (text("签到").exists()) {
      {
        toastLog("签到");
        text("签到").findOne().click();
        sleep(1000);
      }
    }
    if (false && text("倒计时15s获得1个骰子").exists()) {
      for (let _0x43eff7 = 0; _0x43eff7 < 3; _0x43eff7++) {
        {
          if (text("领取奖励").exists()) {
            {
              break;
            }
          } else if (text("倒计时15s获得1个骰子").exists()) {
            toastLog("倒计时15s获得1个骰子");
            sleep(6000);
          }
        }
      }
      if (!text("领取奖励").exists()) {
        {
          common.my_click(_0x1bd1de * 7.5 / 10, _0x4463b0.top - 5 * _0x54c5ae);
          sleep(1000);
          common.my_click(_0x1bd1de * 7.5 / 10, _0x4463b0.top - _0x54c5ae);
          sleep(1000);
        }
      }
      while (text("领取奖励").clickable(true).exists()) {
        text("领取奖励").clickable(true).findOne().click();
        sleep(2000);
      }
    }
    if (false && text("倒计时30s获得1个骰子").exists()) {
      {
        let _0x287543 = text("倒计时30s获得1个骰子").findOne();
        let _0x437711 = _0x287543.depth();
        let _0x3219b8 = _0x287543.indexInParent();
        var _0x4d4a81 = false;
        for (let _0x43eff7 = 0; _0x43eff7 < 10; _0x43eff7++) {
          {
            if (depth(_0x437711).text("已完成").indexInParent(_0x3219b8 + _0x43eff7).exists()) {
              {
                console.verbose("倒计时30s获得1个骰子已完成");
                var _0x4d4a81 = true;
                break;
              }
            }
          }
        }
        if (!_0x4d4a81) {
          for (let _0x43eff7 = 0; _0x43eff7 < 6; _0x43eff7++) {
            if (text("领取奖励").exists()) {
              break;
            } else if (text("倒计时30s获得1个骰子").exists()) {
              {
                toastLog("倒计时30s获得1个骰子");
                sleep(6000);
              }
            }
          }
          if (!text("领取奖励").exists()) {
            {
              common.my_click(_0x1bd1de * 7.5 / 10, _0x4463b0.top - 5 * _0x54c5ae);
              sleep(1000);
              common.my_click(_0x1bd1de * 7.5 / 10, _0x4463b0.top - _0x54c5ae);
              sleep(1000);
            }
          }
          while (text("领取奖励").exists()) {
            text("领取奖励").findOne().click();
            sleep(2000);
          }
        }
      }
    }
    console.verbose("关闭赚鱼币任务列表");
    common.my_click(_0x1bd1de * 7.5 / 10, parseInt(device.height / 7));
    sleep(2000);
  }
  for (let _0xc0bc8 = 0; _0xc0bc8 < 7; _0xc0bc8++) {
    {
      if (textMatches(/×\d{1,2}/).exists()) {
        {
          console.verbose("点击扔骰子寻宝");
          textMatches(/×\d{1,2}/).findOne().click();
          sleep(7000);
          if (text("有机会获得闲鱼币奖励哦！").exists()) {
            console.verbose("出现开九个盒子小游戏，该游戏无收益，跳过");
            back();
            sleep(1000);
            enter_xyb_register_d_son();
          }
          if (text("猜中可赢200闲鱼币! 幸运之神眷顾你").exists()) {
            {
              console.verbose("出现'猜中可赢200闲鱼币! 幸运之神眷顾你'，该游戏无收益，跳过");
              back();
              sleep(1000);
              enter_xyb_register_d_son();
            }
          }
          if (text("闲鱼币! 幸运之神眷顾你").exists()) {
            console.verbose("出现'闲鱼币! 幸运之神眷顾你'，该游戏无收益，跳过");
            back();
            sleep(1000);
            enter_xyb_register_d_son();
          }
        }
      } else {
        {
          break;
        }
      }
      sleep(1000);
    }
  }
  back();
  sleep(1000);
}
function enter_xyb_register_d_son() {
  if (id("right_title_view").desc("闲鱼签到").exists()) {
    {
      id("right_title_view").desc("闲鱼签到").findOne().click();
    }
  } else if (id("right_title_view_lottie").exists()) {
    id("right_title_view_lottie").findOne().click();
  } else if (id("icon_entry_lottie").exists()) {
    {
      console.verbose("icon_entry_lottie");
      id("icon_entry_lottie").findOne().click();
    }
  } else if (id("icon_entry_wrapper").exists()) {
    console.verbose("icon_entry_wrapper");
    id("icon_entry_wrapper").findOne().click();
  } else {
    {
      console.error("进入鱼币任务按钮不存在");
    }
  }
  console.verbose("等待签到页面出现");
  for (let _0x149757 = 0; _0x149757 < 8; _0x149757++) {
    sleep(2000);
    if (text("+").exists()) {
      console.verbose("等待地图页面加载完毕...");
      sleep(2000);
      break;
    }
  }
  sleep(1000);
}
function xyb_register_f(_0x15fef3) {
  setting.all_xyb_task_name = [];
  enter_xyb_register_f_son();
  {
    {
      sleep(3000);
      var _0x1006ad = null;
      if (setting.xyb_register_f_xf_xybdk_rect) {
        {
          _0x1006ad = setting.xyb_register_f_xf_xybdk_rect;
        }
      } else {
        _0x1006ad = text("闲鱼币抵扣").algorithm(setting.xyb_algorithm).findOne().parent().bounds();
        setting.xyb_register_f_xf_xybdk_rect = _0x1006ad;
      }
      let _0x3b87a1 = device.width;
      let _0xae7c26 = _0x1006ad.height();
      console.verbose("检测赚鱼币任务列表是否已出现");
      try {
        {
          var _0x5a6f20 = text("去完成").findOnce().parent().parent().children();
        }
      } catch (_0x2cece0) {
        if (_0x15fef3 == 1) {
          console.verbose("未出现'去完成'，重新进入鱼币任务页面");
          back();
          sleep(2000);
          xyb_register_f(2);
          return false;
        } else {
          console.verbose("未出现'去完成'");
          common.my_click(_0x3b87a1 * 7.5 / 10, _0x1006ad.top - _0xae7c26 * 2 / 3);
          var _0x5a6f20 = text("去完成").findOne().parent().parent().children();
        }
      }
      for (let _0x8d7f04 = 0; _0x8d7f04 < _0x5a6f20.length; _0x8d7f04++) {
        let _0xb2c9ec = _0x5a6f20[_0x8d7f04].text();
        if (_0xb2c9ec.length > 5 && !setting.all_xyb_task_name.includes(_0xb2c9ec)) {
          setting.all_xyb_task_name.push(_0xb2c9ec);
        }
      }
      sleep(2000);
      if (enter_qwc_xf("搜一搜喜欢的商品")) {
        {
          if (text("1688").algorithm(setting.xyb_algorithm).exists()) {
            console.verbose("在1688搜一搜喜欢的商品");
            for (let _0x2fb2ec = 0; _0x2fb2ec < 30; _0x2fb2ec++) {
              if (!textStartsWith("滑动浏览").exists()) {
                break;
              }
              if (Math.random() < 0.4) {
                {
                  common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, 1000);
                  sleep(100);
                }
              } else {
                {
                  common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 1000);
                  sleep(100);
                }
              }
            }
            back();
            sleep(1000);
          } else {
            {
              console.verbose("进入'搜一搜喜欢的商品'");
              if (className("android.view.View").depth(13).clickable().exists()) {
                className("android.view.View").depth(13).clickable().find()[0].click();
                sleep(2000);
                for (let _0x46a991 = 0; _0x46a991 < 10; _0x46a991++) {
                  {
                    if (text("任务完成，再逛逛").exists()) {
                      break;
                    }
                    common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 3 / 10, 500);
                    sleep(2000);
                  }
                }
                back();
                sleep(1000);
              }
              back();
              sleep(1000);
            }
          }
        }
      }
      if (_0x15fef3 == 1) {
        text("领取奖励").clickable(true).algorithm(setting.xyb_algorithm).find().forEach(_0x20a1ef => {
          {
            console.verbose("点击 领取奖励");
            _0x20a1ef.click();
            sleep(500);
          }
        });
      }
      if (enter_qwc_xf("好物夺宝试试手气")) {
        {
          for (let _0x101e8e = 0; _0x101e8e < 10; _0x101e8e++) {
            if (text("100闲鱼币夺宝").algorithm(setting.xyb_algorithm).exists()) {
              sleep(1000);
              break;
            }
            if (desc("100闲鱼币夺宝").algorithm(setting.xyb_algorithm).exists() || desc("已参与").algorithm(setting.xyb_algorithm).exists() || descEndsWith("夺得宝贝").algorithm(setting.xyb_algorithm).exists()) {
              {
                sleep(1000);
                break;
              }
            }
            if (text("确认授权").algorithm(setting.xyb_algorithm).exists()) {
              {
                console.verbose("出现淘宝登录界面，自动跳过");
                back();
                sleep(2000);
              }
            }
            sleep(1000);
          }
          if (text("100闲鱼币夺宝").boundsInside(0, 0, device.width, device.height * 9 / 10).exists() && !desc("已参与").exists() && !descEndsWith("夺得宝贝").exists()) {
            sleep(1000);
            let _0xf1b56c = text("100闲鱼币夺宝").findOne().bounds();
            common.my_click(_0xf1b56c.centerX(), _0xf1b56c.centerY());
            sleep(3000);
            console.verbose("第一次点击100闲鱼币夺宝");
            _0xf1b56c = text("100闲鱼币夺宝").findOne().bounds();
            common.my_click(_0xf1b56c.centerX(), _0xf1b56c.centerY());
            sleep(3000);
            console.verbose("第二次点击100闲鱼币夺宝");
            console.verbose("开始设置投注量");
            setText("1");
            sleep(1200);
            if (descContains("闲鱼币不足").exists()) {
              {
                toastLog("闲鱼币不足最小投注额");
              }
            } else {
              console.verbose("点击确定投注");
              if (text("确定投注").exists()) {
                {
                  text("确定投注").findOne().click();
                  sleep(1000);
                }
              } else {
                console.verbose("确定投注按钮加载失败，无法投注");
              }
              if (text("直接投1注").exists()) {
                console.verbose("直接投1注");
                text("直接投1注").findOne().parent().click();
                sleep(500);
              } else if (text("直接投3注").exists()) {
                console.verbose("直接投3注");
                text("直接投3注").findOne().parent().click();
                sleep(500);
              }
            }
            back();
            sleep(2000);
            console.verbose("返回");
          } else if (desc("100闲鱼币夺宝").boundsInside(0, 0, device.width, device.height * 9 / 10).exists() && !desc("已参与").exists() && !descEndsWith("夺得宝贝").exists()) {
            sleep(1000);
            let _0x4eeb09 = desc("100闲鱼币夺宝").findOne().bounds();
            common.my_click(_0x4eeb09.centerX(), _0x4eeb09.centerY());
            sleep(3000);
            _0x4eeb09 = desc("100闲鱼币夺宝").findOne().bounds();
            common.my_click(_0x4eeb09.centerX(), _0x4eeb09.centerY());
            sleep(2000);
            console.verbose("开始设置投注量");
            setText("1");
            sleep(1000);
            if (descContains("闲鱼币不足").exists()) {
              toastLog("闲鱼币不足最小投注额");
            } else {
              {
                console.verbose("点击确定投注");
                desc("去投注").findOne().click();
                sleep(500);
                desc("直接投1注").findOne().parent().click();
                sleep(500);
              }
            }
            back();
            sleep(2000);
            console.verbose("返回");
          } else {
            toastLog("已参与无好物夺宝或今日已无好物夺宝");
          }
          back();
          sleep(2000);
          console.verbose("返回");
        }
      }
      if (enter_qwc_xf("去借钱频道看一看")) {
        back();
        sleep(2000);
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.zfb_pname) == "未安装") {
        {
          console.verbose("未安装支付宝，跳过支付宝相关任务");
        }
      } else {
        if (enter_qwc_xf("去支付宝领积分")) {
          sleep(3000);
          common.allow_access();
          sleep(7000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
            back();
            sleep(2000);
          }
        }
        if (enter_qwc_xf("去支付宝农场领水果")) {
          sleep(3000);
          common.allow_access();
          sleep(7000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
            back();
            sleep(2000);
          }
        }
        if (enter_qwc_xf("去蚂蚁森林逛一逛")) {
          sleep(3000);
          common.allow_access();
          sleep(7000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
            back();
            sleep(2000);
          }
        }
        if (enter_qwc_xf("去蚂蚁庄园逛一逛")) {
          sleep(3000);
          common.allow_access();
          sleep(7000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
            back();
            sleep(2000);
          }
        }
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.tb_pname) == "未安装") {
        console.verbose("未安装淘宝，跳过淘宝相关任务");
      } else {
        if (enter_qwc_xf("去淘宝签到领红包")) {
          {
            sleep(3000);
            common.allow_access();
            sleep(7000);
            back();
            sleep(2000);
            if (!text("打开淘宝").exists()) {
              {
                back();
                sleep(2000);
              }
            }
            if (!text("打开淘宝").exists()) {
              {
                back();
                sleep(2000);
              }
            }
            common.start_double_xy_son();
            sleep(5000);
            back();
            sleep(2000);
          }
        }
        if (enter_qwc_xf("去芭芭农场领水果")) {
          {
            sleep(3000);
            common.allow_access();
            sleep(7000);
            back();
            sleep(2000);
            if (!text("打开淘宝").exists()) {
              back();
              sleep(2000);
            }
            if (!text("打开淘宝").exists()) {
              back();
              sleep(2000);
            }
            common.start_double_xy_son();
            sleep(5000);
            back();
            sleep(2000);
          }
        }
        if (enter_qwc_xf("逛短视频领现金")) {
          sleep(3000);
          common.allow_access();
          sleep(7000);
          back();
          sleep(2000);
          if (!text("打开淘宝").exists()) {
            back();
            sleep(2000);
          }
          if (!text("打开淘宝").exists()) {
            back();
            sleep(2000);
          }
          common.start_double_xy_son();
          sleep(5000);
          back();
          sleep(2000);
        }
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.ksjs_pname) == "未安装") {
        console.verbose("未安装快手极速版，跳过快手极速版相关任务");
      } else {
        {
          if (enter_qwc_xf("去快手极速版领红包")) {
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
              back();
              sleep(2000);
            }
          }
        }
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.tt_pname) == "未安装") {
        console.verbose("未安装淘特，跳过淘特相关任务");
      } else {
        if (enter_qwc_xf("去淘特领好礼")) {
          {
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
              back();
              sleep(2000);
            }
          }
        }
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.zgyd_pname) == "未安装") {
        console.verbose("未安装中国移动，跳过中国移动相关任务");
      } else {
        if (false && !setting.xyb_list.includes("去中国移动签到领话费") && text("去中国移动签到领话费").algorithm(setting.xyb_algorithm).exists()) {
          setting.xyb_list.push("去中国移动签到领话费");
          toastLog("去中国移动签到领话费");
          let _0xc3733f = text("去中国移动签到领话费").algorithm(setting.xyb_algorithm).findOne();
          let _0x5343c4 = _0xc3733f.depth();
          let _0x49ab43 = _0xc3733f.indexInParent();
          for (let _0x101e8e = 0; _0x101e8e < 10; _0x101e8e++) {
            if (depth(_0x5343c4).text("去完成").indexInParent(_0x49ab43 + _0x101e8e).algorithm(setting.xyb_algorithm).exists()) {
              {
                depth(_0x5343c4).text("去完成").indexInParent(_0x49ab43 + _0x101e8e).algorithm(setting.xyb_algorithm).findOne().click();
                sleep(2000);
                console.verbose("进入'去中国移动签到领话费'");
                sleep(3000);
                if (id("wx-open-app-button").algorithm(setting.xyb_algorithm).exists()) {
                  id("wx-open-app-button").algorithm(setting.xyb_algorithm).findOne().click();
                  sleep(2000);
                }
                common.allow_access();
                sleep(7000);
                common.start_double_xy_son();
                sleep(5000);
                if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
                  {
                    back();
                    sleep(2000);
                  }
                }
                break;
              }
            }
          }
        }
        if (enter_qwc_xf("去中国移动领话费")) {
          sleep(3000);
          if (id("wx-open-app-button").algorithm(setting.xyb_algorithm).exists()) {
            id("wx-open-app-button").algorithm(setting.xyb_algorithm).findOne().click();
            sleep(2000);
          }
          common.allow_access();
          sleep(7000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
            back();
            sleep(2000);
          }
        }
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.bd_pname) == "未安装") {
        {
          console.verbose("未安装百度，跳过百度相关任务");
        }
      } else {
        if (enter_qwc_xf("去百度逛一逛")) {
          sleep(3000);
          common.allow_access();
          sleep(12000);
          sleep(5000);
          common.start_double_xy_son();
          sleep(5000);
          if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
            back();
            sleep(2000);
          }
        }
      }
      if (register_jump == "关") {} else if (common.getVersionName(setting.bddt_pname) == "未安装") {
        console.verbose("未安装百度地图，跳过百度地图相关任务");
      } else {
        if (enter_qwc_xf("去百度地图逛一逛")) {
          {
            sleep(3000);
            common.allow_access();
            sleep(7000);
            common.start_double_xy_son();
            sleep(5000);
            if (!text("去完成").algorithm(setting.xyb_algorithm).exists()) {
              back();
              sleep(2000);
            }
          }
        }
      }
      if (enter_qwc_xf("浏览鱼小铺工作台")) {
        sleep(2000);
        back();
        sleep(2000);
      }
      if (enter_qwc_xf("去看一看闲鱼直播")) {
        sleep(2000);
        back();
        sleep(2000);
      }
      if (enter_qwc_xf("点击指定频道好物")) {
        depth(8).scrollable().algorithm(setting.xyb_algorithm).findOne().scrollForward();
        sleep(500);
        depth(8).scrollable().algorithm(setting.xyb_algorithm).findOne().scrollForward();
        sleep(500);
        if (textStartsWith("再点").algorithm(setting.xyb_algorithm).exists()) {
          {
            for (let _0x86827c = 0; _0x86827c < 17; _0x86827c++) {
              if (textStartsWith("再点").algorithm(setting.xyb_algorithm).exists()) {
                {
                  common.my_click(device.width * 3 / 10, device.height / 2);
                  sleep(1000);
                  console.verbose("进入宝贝详情...");
                  for (let _0x1887a4 = 0; _0x1887a4 < 8; _0x1887a4++) {
                    {
                      if (text("加入购物车").algorithm(setting.xyb_algorithm).exists()) {
                        break;
                      }
                      if (desc("聊一聊按钮").algorithm(setting.xyb_algorithm).exists()) {
                        break;
                      }
                      if (desc("我想要").algorithm(setting.xyb_algorithm).exists() || desc("立即购买").algorithm(setting.xyb_algorithm).exists()) {
                        {
                          break;
                        }
                      }
                      sleep(1000);
                    }
                  }
                  if (!desc("闲鱼币首页").algorithm(setting.xyb_algorithm).exists()) {
                    {
                      console.verbose("返回频道宝贝列表...");
                      back();
                      sleep(2000);
                    }
                  }
                }
              }
              if (text("点击领取").algorithm(setting.xyb_algorithm).exists()) {
                {
                  break;
                }
              }
              depth(8).scrollable().algorithm(setting.xyb_algorithm).findOne().scrollForward();
              sleep(500);
            }
          }
        } else {
          for (let _0x4e87ce = 0; _0x4e87ce < 17; _0x4e87ce++) {
            if (_0x4e87ce == 1 && !textStartsWith("继续浏览").algorithm(setting.xyb_algorithm).exists()) {
              {
                break;
              }
            }
            if (text("点击领取").algorithm(setting.xyb_algorithm).exists()) {
              {
                break;
              }
            }
            depth(8).scrollable().algorithm(setting.xyb_algorithm).findOne().scrollForward();
            sleep(2000);
          }
        }
        back();
        sleep(2000);
        enter_xyb_register_f_son();
      }
      console.verbose("准备领取奖励");
      text("领取奖励").clickable(true).algorithm(setting.xyb_algorithm).find().forEach(_0x5a1156 => {
        {
          console.verbose("点击 领取奖励");
          _0x5a1156.click();
          sleep(500);
        }
      });
      console.verbose("领取奖励完成");
      try {
        if (_0x15fef3 == 3) {
          text("签到").algorithm(setting.xyb_algorithm).findOnce().click();
          sleep(1000);
          toastLog("签到");
        }
      } catch (_0x5e4399) {}
      if (false && !setting.xyb_list.includes("倒计时30s获得1个骰子") && text("倒计时30s获得1个骰子").algorithm(setting.xyb_algorithm).exists()) {
        {
          setting.xyb_list.push("倒计时30s获得1个骰子");
          let _0x5ee9d9 = text("倒计时30s获得1个骰子").findOne();
          let _0x5343c4 = _0x5ee9d9.depth();
          let _0x49ab43 = _0x5ee9d9.indexInParent();
          var _0x2dab59 = false;
          for (let _0x101e8e = 0; _0x101e8e < 10; _0x101e8e++) {
            if (depth(_0x5343c4).text("已完成").indexInParent(_0x49ab43 + _0x101e8e).algorithm(setting.xyb_algorithm).exists()) {
              {
                console.verbose("倒计时30s获得1个骰子已完成");
                var _0x2dab59 = true;
                break;
              }
            }
          }
          if (!_0x2dab59) {
            {
              for (let _0x101e8e = 0; _0x101e8e < 6; _0x101e8e++) {
                {
                  if (text("领取奖励").algorithm(setting.xyb_algorithm).exists()) {
                    break;
                  } else if (text("倒计时30s获得1个骰子").algorithm(setting.xyb_algorithm).exists()) {
                    toastLog("倒计时30s获得1个骰子");
                    sleep(6000);
                  }
                }
              }
              if (!text("领取奖励").algorithm(setting.xyb_algorithm).exists()) {
                common.my_click(_0x3b87a1 * 7.5 / 10, _0x1006ad.top - 5 * _0xae7c26);
                sleep(1000);
                common.my_click(_0x3b87a1 * 7.5 / 10, _0x1006ad.top - _0xae7c26);
                sleep(1000);
              }
              while (text("领取奖励").algorithm(setting.xyb_algorithm).exists()) {
                text("领取奖励").findOne().click();
                sleep(2000);
              }
            }
          }
        }
      }
      console.verbose("关闭赚鱼币任务列表");
      common.my_click(_0x3b87a1 * 7.5 / 10, parseInt(device.height / 7));
      sleep(2000);
    }
  }
  for (let _0x1e0915 = 0; _0x1e0915 < 7; _0x1e0915++) {
    {
      if (id("mapDiceBtn").algorithm(setting.xyb_algorithm).findOne().child(0).text() == "赚") {
        {
          break;
        }
      } else {
        toastLog("点击扔骰子寻宝");
        id("mapDiceBtn").algorithm(setting.xyb_algorithm).findOne().click();
        sleep(7000);
      }
      sleep(1000);
    }
  }
  back();
  sleep(1000);
}
function enter_xyb_register_f_son() {
  if (id("right_title_view").desc("闲鱼签到").exists()) {
    id("right_title_view").desc("闲鱼签到").findOne().click();
  } else if (id("right_title_view_lottie").exists()) {
    id("right_title_view_lottie").findOne().click();
  } else if (id("icon_entry_lottie").exists()) {
    {
      console.verbose("icon_entry_lottie");
      id("icon_entry_lottie").findOne().click();
    }
  } else if (id("icon_entry_wrapper").exists()) {
    {
      console.verbose("icon_entry_wrapper");
      id("icon_entry_wrapper").findOne().click();
    }
  } else {
    {
      console.error("进入鱼币任务按钮不存在");
    }
  }
  console.verbose("等待鱼币任务列表页面出现");
  id("mapDiceBtn").findOne(8000);
  console.verbose("等待地图页面加载完毕...");
  text("去完成").findOne(3000);
  sleep(1000);
}
function shanchu_dongtai() {
  common.enter_tab("我的");
  sleep(2000);
  scrollUp();
  sleep(500);
  scrollUp();
  sleep(500);
  scrollUp();
  sleep(500);
  desc("设置").findOne().parent().click();
  console.verbose("等待账号动态出现...");
  descContains("动态").waitFor();
  sleep(500);
  if (descStartsWith("动态\n").exists()) {
    descStartsWith("动态\n").findOne().click();
    sleep(1500);
  } else if (descStartsWith("动态").exists()) {
    {
      descStartsWith("动态").findOne().parent().parent().click();
      sleep(1500);
    }
  } else if (descEndsWith("动态").exists()) {
    descEndsWith("动态").findOne().click();
    sleep(1500);
  }
  console.verbose("准备点击删除动态按钮");
  if (descStartsWith("你还没有过动态").exists()) {
    {
      toastLog("动态已清空...");
      return true;
    }
  } else {
    console.verbose("等待出现动态列表...");
    sleep(1000);
    if (desc("鱼小铺新人手册").exists()) {
      console.verbose("关闭页面中的干扰元素");
      let _0xa44bd8 = desc("关闭").findOne().bounds();
      common.my_click(_0xa44bd8.centerX(), _0xa44bd8.centerY());
      sleep(1000);
    }
    for (let _0x3c1c8f = 0; _0x3c1c8f < 10; _0x3c1c8f++) {
      while (true) {
        {
          if (desc("删除动态").exists()) {
            let _0x1a69d3 = desc("删除动态").findOne().bounds();
            common.my_click(_0x1a69d3.centerX(), _0x1a69d3.centerY());
            sleep(2000);
            desc("确定").waitFor();
            sleep(1000);
            let _0x5ee86f = desc("确定").findOne().bounds();
            common.my_click(_0x5ee86f.centerX(), _0x5ee86f.centerY());
            sleep(2000);
            toast("动态删除成功");
            sleep(time_blank * 1000);
            if (!desc("删除动态").exists()) {
              {
                break;
              }
            }
          } else {
            break;
          }
        }
      }
      console.verbose("第" + (_0x3c1c8f + 1) + "次向下滑动");
      common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 2 / 10, 1000);
      sleep(2000);
      if (desc("没有更多了～").exists()) {
        toastLog("动态已清空...");
        return true;
      }
    }
    console.verbose("该页动态已清空...");
    common.back_xy_home();
  }
}
function shanchu_liuyan(_0x35df14) {
  let _0x5b2dd8 = [];
  var _0x2b5850 = text("编辑").find();
  for (let _0x48907f = 0; _0x48907f < _0x2b5850.length; _0x48907f++) {
    var _0x2b5850 = text("编辑").find();
    var _0x34edbb = _0x2b5850[_0x48907f].parent().parent().parent().parent().find(textStartsWith("曝光"))[0].text();
    var _0x5204b8 = _0x2b5850[_0x48907f].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(1).depth(setting.glist_dep))[0];
    title = _0x5204b8.text() || _0x5204b8.find(indexInParent(0))[0].text();
    if (title.indexOf(".png_110x10000.jpg_") != -1) {
      _0x5204b8 = _0x2b5850[_0x48907f].parent().parent().find(indexInParent(0).depth(setting.glist_dep - 1))[0].find(indexInParent(2).depth(setting.glist_dep))[0];
      title = _0x5204b8.text() || _0x5204b8.find(indexInParent(0))[0].text();
    }
    var _0x17617e = title + _0x34edbb;
    if (_0x5b2dd8.indexOf(_0x17617e) == -1) {
      {
        let _0x3439e2 = "删除第" + (_0x5b2dd8.length + 1) + "个宝贝的留言";
        console.verbose(_0x3439e2);
        toast(_0x3439e2);
        console.verbose(_0x17617e);
        _0x5b2dd8.push(_0x17617e);
        _0x2b5850[_0x48907f].parent().parent().click();
        for (let _0x48907f = 0; _0x48907f < 5; _0x48907f++) {
          {
            sleep(2000);
            if (desc("管理").exists()) {
              break;
            } else if (desc("管理, 管理").exists()) {
              break;
            } else if (desc("管理按钮").exists()) {
              break;
            }
          }
        }
        console.verbose("开始寻找留言");
        if (setting.xf) {
          while (id("ll_comment").exists()) {
            id("ll_comment").findOne().longClick();
            sleep(1000);
            text("删除留言").findOne().click();
            sleep(1000);
            text("确定").findOne().click();
            sleep(1000);
            console.verbose("留言删除成功");
          }
        } else {
          while (!descEndsWith("留言").exists()) {
            {
              className("android.widget.ScrollView").scrollForward();
              sleep(700);
            }
          }
          if (descStartsWith("宝贝评价").exists()) {
            className("android.widget.ScrollView").scrollForward();
            sleep(700);
          }
          let _0x183097 = 0;
          for (let _0x48907f = 0; _0x48907f < 20; _0x48907f++) {
            let _0x8cf927 = desc("头像").find();
            let _0x1d160a = false;
            for (let _0xcc28b = 0; _0xcc28b < _0x8cf927.length; _0xcc28b++) {
              if (_0x8cf927[_0xcc28b].parent().find(descStartsWith("回复")).length == 0 && _0x8cf927[_0xcc28b].parent().desc() != null && _0x8cf927[_0xcc28b].parent().desc().indexOf("出价") == -1) {
                {
                  if (_0x8cf927[_0xcc28b].parent().desc().indexOf("该留言已删除") == -1) {
                    {
                      if (_0x8cf927[_0xcc28b].parent().longClickable()) {
                        _0x1d160a = true;
                        _0x8cf927[_0xcc28b].parent().longClick();
                        sleep(1000);
                        desc("删除留言").findOne().click();
                        sleep(1000);
                        desc("确定").findOne().click();
                        sleep(2000);
                        console.verbose("留言删除成功");
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (!_0x1d160a) {
              if (desc("查看全部留言").exists()) {
                {
                  desc("查看全部留言").click();
                  sleep(1000);
                  if (descStartsWith("留言").findOne().find(className("android.widget.ImageView")).length != 0) {
                    {
                      descStartsWith("留言").findOne().find(className("android.widget.ImageView"))[0].click();
                    }
                  } else {
                    let _0x18accc = descStartsWith("留言").findOne();
                    className("ImageView").indexInParent(_0x18accc.indexInParent() + 1).depth(_0x18accc.depth()).clickable().findOne().click();
                    sleep(500);
                  }
                }
              } else {
                className("android.widget.ScrollView").scrollForward();
                sleep(700);
                _0x183097 += 1;
                console.verbose("未发现新留言：" + _0x183097);
              }
            }
            if (_0x183097 > 2) {
              break;
            }
            sleep(1200);
          }
        }
        back();
        sleep(1200);
        sleep(_0x35df14 * 1000);
      }
    } else {}
  }
}
function goods_shelf_up() {
  if (desc("下架宝贝").exists()) {
    {
      desc("下架宝贝").clickable().findOne().click();
      sleep(500);
    }
  } else if (text("下架宝贝").exists()) {
    text("下架宝贝").clickable().findOne().click();
    sleep(500);
  } else if (text("已下架").exists()) {
    text("已下架").clickable().findOne().click();
    sleep(500);
  }
  sleep(2000);
  if (text("你没有下架的宝贝哦").exists()) {
    toastLog("你没有下架的宝贝哦");
    return true;
  }
  text("下架原因").waitFor();
  sleep(500);
  toastLog("准备开始重新上架");
  while (text("下架原因").exists()) {
    if (text("重新上架").exists()) {
      {
        console.verbose("重新上架1");
        var _0x531271 = text("重新上架").clickable().findOne();
        _0x531271.click();
        console.verbose("成功点击'重新上架'按钮");
        common.goods_publish();
        back();
        sleep(2000);
      }
    } else if (text("下架原因").exists()) {
      console.verbose("重新上架2");
      text("下架原因").findOne().parent().parent().click();
      for (let _0x25db06 = 0; _0x25db06 < 10; _0x25db06++) {
        sleep(1000);
        if (className("android.view.View").descStartsWith("管理").exists()) {
          className("android.view.View").descStartsWith("管理").findOne().click();
          sleep(800);
        } else if (desc("管理按钮").exists()) {
          descStartsWith("管理按钮").findOne().click();
          sleep(800);
        } else {
          console.verbose("管理 按钮按钮未出现");
        }
      }
      if (desc("编辑").exists()) {
        desc("编辑").click();
      } else if (text("重新发布").exists()) {
        text("重新发布").click();
      } else if (desc("重新发布").exists()) {
        desc("重新发布").click();
      }
      console.verbose("成功点击'重新上架2'按钮");
      common.goods_publish();
      while (className("android.view.View").descStartsWith("管理").exists()) {
        back();
        sleep(2000);
      }
      common.down_pull();
      sleep(2000);
    } else {
      console.verbose("没有找到'重新上架'按钮");
      break;
    }
    if (time_blank) {
      {
        m = time_blank + "秒后开始上架";
        console.log(m);
        toast(m);
        sleep(time_blank * 1000);
      }
    }
  }
  toastLog("本轮重新上架结束");
  return false;
}
function start_flow_search(_0x193e40) {
  var _0x348241 = [];
  while (true) {
    var _0x2a300e = textContains("人想要").clickable(false).find().length > textContains("已售").clickable(false).find().length ? "人想要" : "已售";
    items = textContains(_0x2a300e).clickable(false).find();
    for (let _0x367037 = 0; _0x367037 < items.length; _0x367037++) {
      {
        items = textContains(_0x2a300e).clickable(false).find();
        if (!items[_0x367037]) {
          continue;
        } else {
          {
            var _0x22d423 = items[_0x367037].text();
            var _0x9a52a0 = items[_0x367037].parent().find(className("android.widget.TextView"))[1].text();
            var _0x1659d1 = _0x9a52a0 + "元，" + _0x22d423;
          }
        }
        if (_0x348241.indexOf(_0x1659d1) == -1) {
          {
            _0x348241.push(_0x1659d1);
            console.verbose("第" + _0x348241.length + "个宝贝");
            if (_0x193e40.click_percent > random(0, 100)) {
              console.verbose("准备点击宝贝进入详情页...");
              if (items[_0x367037].parent().parent().clickable()) {
                items[_0x367037].parent().parent().click();
              } else if (items[_0x367037].parent().clickable()) {
                items[_0x367037].parent().click();
                console.verbose("第二种点击方式");
              }
              for (let _0x367037 = 0; _0x367037 < 10; _0x367037++) {
                sleep(1000);
                if (desc("聊一聊按钮").exists()) {
                  break;
                } else if (desc("我想要").exists()) {
                  break;
                } else if (desc("我想要, 我想要").exists()) {
                  break;
                } else if (desc("聊一聊, 聊一聊").exists()) {
                  {
                    break;
                  }
                }
              }
              if (desc("立即租, 立即租").exists()) {
                console.verbose("立即租");
                back();
                sleep(3000);
                continue;
              }
              if (!desc("我想要").exists() && !desc("聊一聊, 聊一聊").exists() && !desc("我想要, 我想要").exists() && !desc("聊一聊按钮").exists()) {
                console.verbose("我想要或聊一聊 不存在");
                back();
                sleep(3000);
                if (desc("我想要").exists() || desc("聊一聊按钮").exists()) {
                  {
                    back();
                    sleep(3000);
                  }
                } else if (desc("聊一聊, 聊一聊").exists()) {
                  {
                    back();
                    sleep(3000);
                  }
                } else if (desc("我想要, 我想要").exists()) {
                  back();
                  sleep(3000);
                }
                continue;
              }
              if (text("我要兑换").exists() || text("出个价").exists() || text("加入购物车").exists()) {
                {
                  console.verbose("该宝贝为免费送或拍卖...");
                  back();
                  sleep(3000);
                  continue;
                }
              }
              toastLog("进入详情页...");
              sleep(2300);
              if (_0x193e40.collect_percent > random(0, 100)) {
                {
                  console.verbose("开始收藏...");
                  if (desc("收藏").exists()) {
                    desc("收藏").findOne().click();
                    sleep(1000);
                    toastLog("收藏了宝贝");
                    sleep(2000);
                  } else if (desc("收藏按钮").exists()) {
                    {
                      desc("收藏按钮").findOne().click();
                      sleep(1000);
                      toastLog("收藏了宝贝");
                      sleep(2000);
                    }
                  }
                }
              }
              if (_0x193e40.want_percent > random(0, 100)) {
                console.verbose("开始想要...");
                if (desc("聊一聊按钮").exists()) {
                  {
                    console.verbose("点击 聊一聊按钮");
                    desc("聊一聊按钮").click();
                    sleep(3000);
                    if (_0x193e40.want_content) {
                      {
                        console.verbose("准备发送私信...");
                        common.send(_0x193e40.want_content);
                      }
                    }
                    while (!desc("聊一聊按钮").exists()) {
                      console.verbose("聊天内容发送成功，返回宝贝详情页面...");
                      back();
                      sleep(2000);
                    }
                  }
                } else if (desc("聊一聊, 聊一聊").exists()) {
                  {
                    console.verbose("点击聊一聊");
                    desc("聊一聊, 聊一聊").click();
                    sleep(3000);
                    if (_0x193e40.want_content) {
                      {
                        console.verbose("准备发送私信...");
                        common.send(_0x193e40.want_content);
                      }
                    }
                    while (!desc("聊一聊, 聊一聊").exists()) {
                      {
                        console.verbose("聊天内容发送成功，返回宝贝详情页面...");
                        back();
                        sleep(2000);
                      }
                    }
                  }
                } else if (desc("我想要, 我想要").exists()) {
                  console.verbose("点击我想要");
                  desc("我想要, 我想要").click();
                  sleep(3000);
                  if (_0x193e40.want_content) {
                    {
                      console.verbose("准备发送私信...");
                      common.send(_0x193e40.want_content);
                    }
                  }
                  while (!desc("我想要, 我想要").exists()) {
                    console.verbose("聊天内容发送成功，返回宝贝详情页面...");
                    back();
                    sleep(2000);
                  }
                }
              }
              if (_0x193e40.care_percent > random(0, 100)) {
                {
                  console.verbose("开始关注...");
                  if (id("user_info_avatar_wrapper").exists()) {
                    id("user_info_avatar_wrapper").findOne().parent().click();
                  } else if (descContains("来过").clickable().exists()) {
                    {
                      descContains("来过").clickable().findOne().click();
                    }
                  } else if (descContains("发布于").clickable().exists()) {
                    descContains("发布于").clickable().findOne().click();
                  } else if (descContains("刚刚擦亮").clickable().exists()) {
                    {
                      descContains("刚刚擦亮").clickable().findOne().click();
                    }
                  }
                  for (let _0x367037 = 0; _0x367037 < 3; _0x367037++) {
                    sleep(3000);
                    if (desc("关注").exists()) {
                      console.verbose("卖家详情页加载完毕");
                      break;
                    }
                  }
                  if (desc("关注").exists()) {
                    if (descContains("相互关注").exists() || descContains("已关注").exists()) {
                      toastLog("已关注");
                    } else if (desc("关注").exists()) {
                      let _0x18623a = desc("关注").find();
                      if (_0x18623a.length == 2) {
                        let _0x5980ee = _0x18623a[1].bounds();
                        common.my_click(_0x5980ee.centerX(), _0x5980ee.centerY());
                        sleep(500);
                        console.verbose("关注成功");
                        sleep(2000);
                      } else {
                        console.verbose(_0x18623a.length);
                      }
                    } else {
                      console.verbose("关注按钮不存在");
                    }
                    if (descStartsWith("关注成功！请设置通知接收范围").exists()) {
                      {
                        back();
                        sleep(1000);
                      }
                    }
                    sleep(2000);
                    back();
                    sleep(2000);
                  } else {
                    console.verbose("卖家详情页加载失败");
                  }
                }
              }
              if (_0x193e40.comment_percent > random(0, 100)) {
                console.verbose("开始留言...");
                sleep(2000);
                let _0x269ca5 = _0x193e40.comment_content.split("#").filter(function (_0x18dc92) {
                  {
                    return _0x18dc92 && _0x18dc92.trim();
                  }
                });
                let _0xf5f0a2 = Math.floor(Math.random() * _0x269ca5.length);
                var _0x86f4b5 = _0x269ca5[_0xf5f0a2];
                if (desc("评论按钮").exists()) {
                  desc("评论按钮").findOne().click();
                  sleep(1000);
                }
                if (desc("留言按钮").exists()) {
                  desc("留言按钮").findOne().click();
                  sleep(1000);
                } else if (desc("留言").exists()) {
                  {
                    desc("留言").findOne().click();
                    sleep(1000);
                  }
                }
                console.verbose("留言内容：" + _0x86f4b5);
                if (descStartsWith("看对眼就留言").exists()) {
                  descStartsWith("看对眼就留言").click();
                  sleep(1000);
                } else if (textStartsWith("看对眼就留言").exists()) {
                  textStartsWith("看对眼就留言").click();
                  sleep(1000);
                }
                common.my_input(_0x86f4b5);
                if (desc("发送").exists()) {
                  desc("发送").findOne().click();
                  sleep(3000);
                } else if (text("发送").exists()) {
                  text("发送").findOne().click();
                  sleep(3000);
                }
                if (descStartsWith("看对眼就留言").exists()) {
                  back();
                  sleep(1000);
                }
              }
            } else {
              {
                console.verbose("跳过该宝贝...");
              }
            }
            while (!text("筛选").exists() && !text("全部").exists()) {
              {
                console.verbose("返回搜索宝贝列表页...");
                back();
                sleep(2000);
              }
            }
            if (_0x348241.length == _0x193e40.num) {
              {
                break;
              }
            }
            toastLog("睡眠" + _0x193e40.time_blank + "秒");
            sleep(_0x193e40.time_blank * 1000);
          }
        }
      }
    }
    if (_0x348241.length == _0x193e40.num) {
      {
        console.verbose("累计操作宝贝数" + _0x193e40.num + "，任务结束");
        break;
      }
    }
    common.my_swipe(device.width / 2, device.height * 9 / 10, device.width / 2, device.height * 1 / 10, 800);
    sleep(1000);
  }
}
function del_empty(_0x2b499b) {
  return _0x2b499b && _0x2b499b.trim();
}
module.exports = goods_manage_b;