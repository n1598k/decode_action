//Wed Mar 25 2026 13:52:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var wbzz = {
  "goods_add": function (_0x5cdb1e) {
    toastLog("开始发布转转商品");
    let _0x2cf61f = common.get_task_detail(_0x5cdb1e);
    let _0xdfa26c = JSON.parse(_0x2cf61f.data.args);
    zz_add_time_blank = _0xdfa26c.time_blank;
    random_image = _0xdfa26c.random_image;
    watermark = _0xdfa26c.watermark;
    wenan = _0xdfa26c.wenan;
    post_type = _0xdfa26c.post_type;
    guanlian = _0xdfa26c.guanlian;
    setting.zz_dk = _0xdfa26c.zz_dk;
    let _0x34625f = common.get_goods(_0xdfa26c.goods, wenan);
    if (_0xdfa26c.auto_video == "open") {
      let _0x359725 = "智能视频准备中...";
      console.verbose(_0x359725);
      for (let _0x25c4e0 = 0; _0x25c4e0 < _0x34625f.length; _0x25c4e0++) {
        {
          if (_0x34625f[_0x25c4e0].images.length > 1) {
            {
              _0x34625f[_0x25c4e0].auto_video = true;
              _0x34625f[_0x25c4e0].video_music = _0xdfa26c.video_music;
            }
          } else {
            _0x34625f[_0x25c4e0].auto_video = false;
          }
        }
      }
    } else {
      for (let _0x812cb = 0; _0x812cb < _0x34625f.length; _0x812cb++) {
        {
          _0x34625f[_0x812cb].auto_video = false;
        }
      }
    }
    let _0x81c79c = _0xdfa26c.location_arr;
    if (_0x81c79c) {
      {
        for (let _0x2dbccc = 0; _0x2dbccc < _0x34625f.length; _0x2dbccc++) {
          let _0x41e00d = _0x81c79c[Math.floor(Math.random() * _0x81c79c.length)];
          _0x34625f[_0x2dbccc].location = _0x41e00d;
        }
      }
    }
    let _0x537800 = [];
    for (let _0x3166ad = 0; _0x3166ad < _0x34625f.length; _0x3166ad++) {
      _0x537800.push(_0x34625f[_0x3166ad].id);
    }
    if (!setting.gadd_msg.contains("local_already_add_goods")) {
      {
        setting.gadd_msg.put("local_already_add_goods", []);
      }
    }
    if (JSON.stringify(_0x537800) === JSON.stringify(setting.gadd_msg.get("local_all_goods"))) {
      {
        let _0x2b8722 = setting.gadd_msg.get("local_already_add_goods");
        if (Array.isArray(_0x2b8722) && _0x2b8722.length === 0) {} else {
          {
            common.web_log("继续上次进度发布宝贝", "success");
            for (let _0x3166ad = 0; _0x3166ad < _0x34625f.length; _0x3166ad++) {
              if (_0x2b8722.indexOf(_0x34625f[_0x3166ad].id) > -1) {
                {
                  delete _0x34625f[_0x3166ad];
                }
              }
            }
          }
        }
      }
    } else {
      {
        setting.gadd_msg.put("local_all_goods", _0x537800);
      }
    }
    _0x34625f.forEach(function (_0x22803c, _0x862daa) {
      console.verbose(_0x22803c);
      zz_add_wait(_0x862daa, _0x34625f);
      common.zz_home();
      console.log("开始发布：" + _0x22803c.title);
      common.web_log("开始发布：" + _0x22803c.title, "success");
      if (random_image == "open") {
        let _0x1024d3 = _0x22803c.images;
        let _0x251715 = _0x1024d3.splice(random(0, _0x1024d3.length - 1), 1);
        _0x1024d3.splice(0, 0, _0x251715[0]);
        _0x22803c.images = _0x1024d3;
      }
      _0x22803c.images = get_images(_0x22803c, _0xdfa26c);
      let _0x517aa4 = _0x22803c.images.reverse();
      if (watermark == "open") {
        _0x517aa4 = common.watermark(_0x517aa4, "");
      }
      common.download_img(_0x22803c.title_md5, _0x517aa4, true);
      sleep(1000);
      common.download_video(_0x22803c);
      console.verbose("点击'卖闲置'按钮");
      id("com.wuba.zhuanzhuan:id/f6y").click();
      for (let _0x404194 = 0; _0x404194 < 5; _0x404194++) {
        {
          sleep(1000);
          if (text("知道了").exists()) {
            {
              text("知道了").click();
              sleep(1000);
            }
          }
          if (text("卖法logo").exists()) {
            let _0x26fac6 = text("卖法logo").find();
            _0x26fac6[_0x26fac6.length - 1].click();
            sleep(1000);
            break;
          }
        }
      }
      if (!text("发布").exists()) {
        console.verbose("发布宝贝页面不存在，使用第二种点击方式");
        for (let _0x57e1d4 = 1; _0x57e1d4 < 4; _0x57e1d4++) {
          common.my_click(device.width / 2, device.height / 10 * 7 - 50 * _0x57e1d4);
          sleep(1000);
          if (text("发布").exists()) {
            {
              break;
            }
          }
        }
      }
      console.verbose("等待发布宝贝页面加载完毕");
      text("发布").waitFor();
      edit_goods_c(_0x22803c);
      let _0xf990b0 = Math.ceil((_0x862daa + 1) / _0x34625f.length * 100);
      console.verbose("宝贝发布进度：" + _0xf990b0 + "%");
      if (_0xf990b0 != 100) {
        {
          common.reload_task_table(_0x5cdb1e, "run", "", _0xf990b0);
        }
      }
      common.web_log("\"" + _0x22803c.title + "\"发布成功", "success");
      toastLog("\"" + _0x22803c.title + "\"发布成功");
      common.zz_home();
      common.remove_img(_0x22803c.title_md5);
      let _0x5ea792 = setting.gadd_msg.get("local_already_add_goods");
      _0x5ea792.push(_0x22803c.id);
      setting.gadd_msg.put("local_already_add_goods", _0x5ea792);
    });
    console.info("全部转转商品发布成功");
    toast("全部转转商品发布成功");
    common.web_log("全部转转商品发布成功", "success");
    common.reload_task_table(_0x5cdb1e, "end");
    setting.gadd_msg.put("local_already_add_goods", []);
  },
  "zz_goods_polish": function (_0x571f88) {
    if (_0x571f88) {
      let _0x216cd8 = common.get_task_detail(_0x571f88);
      var _0x13d1eb = JSON.parse(_0x216cd8.data.args);
    } else {
      var _0x13d1eb = JSON.parse(common.get_zztaskc().goods_rub);
    }
    setting.zz_dk = _0x13d1eb.zz_dk;
    common.zz_home();
    enter_zz_goods_page();
    if (descEndsWith("转全部").exists()) {
      console.verbose("点击转一转...");
      descEndsWith("转全部").click();
      sleep(2000);
    } else {
      toastLog("今日已转过~");
    }
    common.zz_home();
    if (_0x571f88) {
      {
        common.web_log("转一转 完成", "success");
        common.reload_task_table(_0x571f88, "end");
      }
    }
  },
  "zz_goods_shelf_up": function (_0x3b6a47) {
    if (_0x3b6a47) {
      let _0x1b0e0 = common.get_task_detail(_0x3b6a47);
      var _0x41bef8 = JSON.parse(_0x1b0e0.data.args);
    } else {
      var _0x41bef8 = JSON.parse(common.get_zztaskc().goods_up);
    }
    let _0x26449f = _0x41bef8.time_blank;
    setting.zz_dk = _0x41bef8.zz_dk;
    common.zz_home();
    enter_zz_goods_page();
    if (form_goods_page_enter_del_page()) {
      {
        while (true) {
          while (text("彻底删除").indexInParent(0).exists()) {
            text("彻底删除").indexInParent(0).find()[0].click();
            sleep(1000);
            toastLog("成功删除失效宝贝");
            continue;
          }
          if (text("重新上架").exists()) {
            {
              text("重新上架").find()[0].click();
              click_push_goods();
              while (!text("已下架的宝贝").exists()) {
                {
                  back();
                  sleep(1000);
                }
              }
            }
          } else {
            toastLog("已无待上架宝贝");
            break;
          }
          sleep(_0x26449f * 1000);
        }
        toastLog("已重新上架全部已下架宝贝");
      }
    }
    common.zz_home();
    if (_0x3b6a47) {
      common.web_log("上架完成", "success");
      common.reload_task_table(_0x3b6a47, "end");
    }
  },
  "zz_goods_shelf_down": function (_0x1d4168) {
    console.verbose("转转下架商品");
    if (_0x1d4168) {
      let _0x2ae330 = common.get_task_detail(_0x1d4168);
      var _0x36ab10 = JSON.parse(_0x2ae330.data.args);
    } else {
      {
        var _0x36ab10 = JSON.parse(common.get_zztaskc().goods_down);
      }
    }
    var _0xf3c343 = _0x36ab10.time_blank;
    var _0x45a4f9 = _0x36ab10.down_cause;
    var _0x2ff2af = _0x36ab10.show;
    var _0x407920 = _0x36ab10.look;
    var _0x24db18 = _0x36ab10.want;
    var _0x3f91fb = _0x36ab10.word;
    setting.zz_dk = _0x36ab10.zz_dk;
    common.zz_home();
    enter_zz_goods_page();
    for (let _0x288596 = 0; _0x288596 < 10; _0x288596++) {
      {
        sleep(1000);
        if (desc("编辑").exists()) {
          {
            break;
          }
        }
      }
    }
    goods_down(_0xf3c343, _0x45a4f9, _0x2ff2af, _0x407920, _0x24db18, _0x3f91fb);
    common.zz_home();
    if (_0x1d4168) {
      common.web_log("下架完成", "success");
      common.reload_task_table(_0x1d4168, "end");
    }
  },
  "zz_goods_del": function (_0x48c3b6) {
    if (_0x48c3b6) {
      {
        let _0x161561 = common.get_task_detail(_0x48c3b6);
        var _0x4feaa0 = JSON.parse(_0x161561.data.args);
      }
    } else {
      var _0x4feaa0 = JSON.parse(common.get_zztaskc().goods_del);
    }
    var _0x4ed7bb = parseInt(_0x4feaa0.time_blank);
    setting.zz_dk = _0x4feaa0.zz_dk;
    common.zz_home();
    enter_zz_goods_page();
    if (form_goods_page_enter_del_page()) {
      {
        while (text("彻底删除").exists()) {
          text("彻底删除").find()[0].click();
          sleep(1000);
          sleep(_0x4ed7bb * 1000);
        }
        toastLog("已删除全部已下架宝贝");
      }
    }
    common.zz_home();
    if (_0x48c3b6) {
      common.web_log("删除完成", "success");
      common.reload_task_table(_0x48c3b6, "end");
    }
  },
  "zz_re_edit": function (_0x35d18b) {
    if (_0x35d18b) {
      {
        let _0x58d3bb = common.get_task_detail(_0x35d18b);
        var _0x41242b = JSON.parse(_0x58d3bb.data.args);
      }
    } else {
      var _0x41242b = JSON.parse(common.get_zztaskc().re_edit);
    }
    var _0x2cd1e6 = parseInt(_0x41242b.time_blank);
    var _0x1322f0 = parseInt(_0x41242b.num);
    setting.zz_dk = _0x41242b.zz_dk;
    for (let _0xb3734a = 0; _0xb3734a < _0x1322f0; _0xb3734a++) {
      common.zz_home();
      enter_zz_goods_page();
      if (desc("没有发布的宝贝哦").exists()) {
        {
          toastLog("没有发布的宝贝哦");
          break;
        }
      }
      while (zz_goods_list_down()) {}
      toastLog("到达宝贝列表底部...");
      sleep(1000);
      toastLog("开始编辑第" + (_0xb3734a + 1) + "个宝贝");
      sleep(1000);
      let _0x140a49 = desc("编辑").clickable().find();
      _0x140a49[_0x140a49.length - 1].click();
      toastLog("即将即将开始发布...");
      sleep(random(2500, 3500));
      if (_0x41242b.zz_change_city == "开启") {
        select_city();
      }
      let _0x112b34 = "";
      if (id("cej").exists()) {
        {
          _0x112b34 = id("cej").findOne().text().substr(0, 20);
        }
      }
      click_push_goods();
      toastLog(_0x112b34 + "编辑完成，" + _0x2cd1e6 + "秒后进行下一次编辑...");
      sleep(_0x2cd1e6 * 1000);
    }
    common.zz_home();
    if (_0x35d18b) {
      common.web_log("转转流量模式运行结束", "success");
      common.reload_task_table(_0x35d18b, "end");
    }
  },
  "zz_yanghao": function (_0x5e6102) {
    if (_0x5e6102) {
      {
        let _0x490955 = common.get_task_detail(_0x5e6102);
        var _0x94f00d = JSON.parse(_0x490955.data.args);
      }
    } else {
      {
        var _0x94f00d = JSON.parse(common.get_zztaskc().yanghao);
      }
    }
    setting.zz_dk = _0x94f00d.zz_dk;
    common.zz_home();
    zz_yanghao_main();
    if (_0x5e6102) {
      common.web_log("转转养号", "success");
      common.reload_task_table(_0x5e6102, "end");
    }
  }
};
function enter_zz_goods_page() {
  console.verbose("点击'我的'");
  id("com.wuba.zhuanzhuan:id/d_u").click();
  sleep(500);
  text("我发布的").findOne().parent().click();
  console.verbose("等待宝贝列表页出现");
  desc("交易安全").waitFor();
  sleep(1500);
  console.verbose("转转宝贝列表已加载");
}
function form_goods_page_enter_del_page() {
  desc(" 已下架宝贝").click();
  console.verbose("等待已下架宝贝页面加载完毕...");
  for (let _0xbf664e = 0; _0xbf664e < 10; _0xbf664e++) {
    {
      sleep(2000);
      if (text("重新上架").exists()) {
        {
          console.log("已下架宝贝页面加载完毕");
          return true;
        }
      } else if (text("您还没有下架的宝贝哦").exists()) {
        {
          console.log("您还没有下架的宝贝哦");
          return false;
        }
      }
    }
  }
}
function edit_goods_c(_0x46e9a5) {
  toastLog("开始填写转转宝贝内容...");
  console.verbose("等待宝贝标题描述编辑框出现...");
  id("an2").waitFor();
  sleep(1000);
  id("an2").click();
  sleep(1000);
  if (_0x46e9a5.content2) {
    var _0x2da15b = _0x46e9a5.title + "\n" + _0x46e9a5.content2;
  } else {
    {
      var _0x2da15b = _0x46e9a5.title + "\n" + _0x46e9a5.content;
    }
  }
  setText(_0x2da15b);
  sleep(200);
  console.verbose("宝贝内容填写完毕");
  common.my_swipe(device.width / 2, device.height / 3, device.width / 2, device.height / 2, 600);
  sleep(1000);
  if (_0x46e9a5.location) {
    console.verbose("转转自定义发布地");
    select_city(_0x46e9a5.location);
    sleep(2000);
  } else {
    if (textStartsWith("选择宝贝位置").exists()) {
      {
        _0x46e9a5.location = "北京市-北京市-朝阳区";
        select_city(_0x46e9a5.location);
      }
    }
  }
  if (_0x46e9a5.new === 1) {
    click("全新宝贝");
  }
  select_aibum_video(_0x46e9a5);
  sleep(1000);
  select_aibum(_0x46e9a5.title_md5);
  scrollDown();
  sleep(1000);
  scrollDown();
  sleep(1000);
  text("填写价格").findOne().parent().click();
  sleep(1000);
  console.log("开始填写价格");
  let _0x7f3058 = Math.round(_0x46e9a5.ykj_price2);
  console.verbose("价格：" + _0x7f3058);
  text("想卖多少钱 ").findOne().setText(_0x7f3058);
  sleep(500);
  if (_0x46e9a5.ykj_price) {
    {
      let _0x4cea6c = String(_0x46e9a5.ykj_price).split(".")[0];
      console.verbose("原价：" + _0x4cea6c);
      id("com.wuba.zhuanzhuan:id/ch1").setText(_0x4cea6c);
      sleep(500);
    }
  }
  if (_0x46e9a5.ykj_yunfei) {
    let _0x348639 = String(_0x46e9a5.ykj_yunfei).split(".")[0];
    console.verbose("运费：" + _0x348639);
    id("com.wuba.zhuanzhuan:id/ajw").setText(_0x348639);
    sleep(500);
  } else {
    console.verbose("包邮");
    id("com.wuba.zhuanzhuan:id/vq").click();
    sleep(500);
  }
  text("确认").click();
  sleep(200);
  scrollDown();
  sleep(1000);
  if (guanlian == "open") {
    console.verbose("转转自动关联");
    try {
      for (let _0x2cef98 = 0; _0x2cef98 < 8; _0x2cef98++) {
        let _0xd2c5fc = id("com.wuba.zhuanzhuan:id/b__").find();
        if (_0xd2c5fc[_0x2cef98]) {
          _0xd2c5fc[_0x2cef98].find(className("TextView"))[0].click();
          sleep(1000);
        }
      }
    } catch (_0x3a9dde) {}
  }
  if (post_type == "存草稿" && text("存草稿").exists()) {
    console.verbose("存草稿");
    text("存草稿").findOne().click();
    sleep(2000);
    text("我知道了").findOne().click();
    sleep(1000);
  } else {
    click_push_goods();
  }
}
function zz_add_wait(_0x32a3e4, _0x5cb0a7) {
  let _0x189048 = "";
  if (_0x32a3e4 > 0 && zz_add_time_blank) {
    {
      threads.start(function () {
        _0x189048 = "共" + _0x5cb0a7.length + "个转转宝贝，" + zz_add_time_blank + "秒后开始发布第" + (_0x32a3e4 + 1) + "个转转宝贝";
        console.log(_0x189048);
        toast(_0x189048);
        common.web_log(_0x189048, "info");
      });
      sleep(zz_add_time_blank * 1000);
    }
  } else {
    threads.start(function () {
      {
        _0x189048 = "共" + _0x5cb0a7.length + "个转转宝贝，开始发布第" + (_0x32a3e4 + 1) + "个宝贝";
        common.web_log(_0x189048, "info");
        console.log(_0x189048);
        toast(_0x189048);
      }
    });
  }
}
function zz_goods_list_down() {
  for (var _0x29e44a = 0; _0x29e44a < 2; _0x29e44a++) {
    if (text("没有更多宝贝了").exists()) {
      {
        console.verbose("出现‘没有更多宝贝了’，到达底部...");
        break;
      }
    }
    if (className("android.widget.ScrollView").findOne().scrollForward()) {
      console.verbose("下滑成功...");
      return true;
    } else {
      toast("等待更多宝贝出现...");
      common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 2 / 10, 500);
      sleep(1500);
      if (className("android.widget.ScrollView").findOne().scrollForward()) {
        {
          console.verbose("下滑成功...");
          return true;
        }
      }
    }
    sleep(500);
  }
  console.verbose("已加载全部宝贝...");
  return false;
}
function click_push_goods() {
  console.verbose("等待出现发布按钮");
  text("发布").waitFor();
  sleep(1000);
  text("发布").findOne().click();
  sleep(1000);
  console.verbose("已点击发布");
  for (var _0x4e09a6 = 0; _0x4e09a6 < 240; _0x4e09a6++) {
    sleep(2000);
    let _0xff448e = "等待发布成功";
    console.log(_0xff448e);
    if (textStartsWith("发布成功").exists()) {
      back();
      sleep(1000);
      break;
    }
    if (text("推荐宝贝").exists()) {
      {
        back();
        break;
      }
    }
    if (text("分享宝贝").exists()) {
      break;
    }
    if (text("管理宝贝").exists()) {
      break;
    }
    if (text("以后再说").exists()) {
      {
        text("以后再说").findOne().click();
        sleep(1000);
        break;
      }
    }
    if (text("我知道了").exists()) {
      {
        text("我知道了").findOne().click();
        sleep(1000);
        break;
      }
    }
    if (text("跳过").exists()) {
      text("跳过").findOne().click();
      sleep(1000);
      break;
    }
    if (text("商品违规，已被系统删除").exists()) {
      {
        console.error("商品违规，已被系统删除");
        break;
      }
    }
    if (text("发布").exists()) {
      text("发布").findOne().click();
      sleep(1000);
      sleep(2000);
    }
  }
  console.log("发布成功");
}
function select_aibum(_0x437eb1) {
  console.log("开始选择图片");
  if (text("拍摄宝贝靓照").exists()) {
    {
      text("拍摄宝贝靓照").findOne().parent().click();
    }
  } else if (textStartsWith("拍摄更多宝贝细节").exists()) {
    {
      textStartsWith("拍摄更多宝贝细节").findOne().parent().click();
    }
  } else {
    console.error("添加图片/视频按钮不存在");
  }
  console.verbose("等待相册出现");
  text("相册").waitFor();
  sleep(200);
  text("相册").findOne().click();
  sleep(200);
  text("选择相册").waitFor();
  sleep(200);
  text("选择相册").findOne().parent().click();
  sleep(2000);
  console.verbose("title_md5:", _0x437eb1);
  while (!text(_0x437eb1).exists()) {
    if (id("com.wuba.zhuanzhuan:id/d3a").findOne().scrollForward()) {
      {
        toastLog("下滑成功");
      }
    } else {
      {
        toastLog("已到达相册底部，未发现该宝贝图片");
      }
    }
    sleep(1600);
  }
  text(_0x437eb1).findOne().parent().click();
  sleep(2000);
  console.verbose("进入相册");
  for (let _0x2a9ccc = 0; _0x2a9ccc < 10; _0x2a9ccc++) {
    sleep(100);
    depth(7).indexInParent(_0x2a9ccc).find().find(id("com.wuba.zhuanzhuan:id/cv")).click();
  }
  console.verbose("等待按钮");
  textStartsWith("下一步").waitFor();
  textStartsWith("下一步").findOne().click();
  sleep(1000);
  if (text("确定").exists()) {
    {
      text("确定").findOne().click();
      sleep(1000);
    }
  }
  console.log("选择图片完成");
  sleep(1000);
  sleep(1200);
  if (text("确认").exists()) {
    {
      console.verbose("流量上传提醒");
      text("确认").findOne().click();
      sleep(500);
    }
  }
}
function select_aibum_video(_0x2dc8ac) {
  if (_0x2dc8ac.vcode || _0x2dc8ac.auto_video) {
    if (text("拍摄宝贝靓照").exists()) {
      text("拍摄宝贝靓照").findOne().parent().click();
    } else if (textStartsWith("拍摄更多宝贝细节").exists()) {
      {
        textStartsWith("拍摄更多宝贝细节").findOne().parent().click();
      }
    } else {
      {
        console.error("添加图片/视频按钮不存在");
      }
    }
    console.verbose("等待相册出现");
    text("相册").waitFor();
    sleep(200);
    text("相册").findOne().click();
    sleep(200);
    text("选择相册").waitFor();
    sleep(200);
    text("选择相册").findOne().parent().click();
    sleep(2000);
    toastLog("开始选择视频...");
    let _0x298f48 = "v_" + _0x2dc8ac.title_md5;
    console.verbose("等待视频" + _0x298f48 + "出现...");
    while (!text(_0x298f48).exists()) {
      {
        if (id("com.wuba.zhuanzhuan:id/d3a").findOne().scrollForward()) {
          {
            toastLog("下滑成功");
          }
        } else {
          toastLog("已到达相册底部，未发现该宝贝视频");
        }
        sleep(1600);
      }
    }
    text(_0x298f48).findOne().parent().click();
    sleep(2000);
    console.verbose("进入视频详情");
    id("com.wuba.zhuanzhuan:id/cw").findOne().click();
    sleep(1000);
    text("下一步").findOne().click();
    console.verbose("视频处理中");
    sleep(1000);
    text("确认").waitFor();
    sleep(200);
    text("确认").findOne().click();
    console.verbose("选择视频完成");
    sleep(1000);
    text("发布").waitFor();
    console.log("选择视频完成");
    sleep(1000);
    sleep(1200);
    if (text("确认").exists()) {
      {
        console.verbose("流量上传提醒");
        text("确认").findOne().click();
        sleep(500);
      }
    }
  }
}
function zz_yanghao_main() {
  console.verbose("准备进入转转养号页面");
  id("com.wuba.zhuanzhuan:id/d9d").findOne().click();
  sleep(500);
  console.verbose("到达转转首页");
  scrollDown();
  sleep(300);
  scrollDown();
  sleep(300);
  toastLog("开始模拟人工浏览宝贝...");
  let _0x11d080 = random(30, 50);
  for (let _0x8658e6 = 0; _0x8658e6 < _0x11d080; _0x8658e6++) {
    {
      if (30 > random(0, 100)) {
        toastLog("开始浏览宝贝...");
        id("com.wuba.zhuanzhuan:id/d8w").findOne().parent().click();
        sleep(random(800, 1500));
        for (let _0x8658e6 = 0; _0x8658e6 < 10; _0x8658e6++) {
          if (id("com.wuba.zhuanzhuan:id/x3").exists()) {
            {
              id("com.wuba.zhuanzhuan:id/x3").findOne().click();
              break;
            }
          } else if (text("加购物车").exists()) {
            {
              break;
            }
          }
          sleep(1000);
        }
        sleep(random(500, 1500));
        if (text("我知道了").exists()) {
          text("我知道了").click();
          sleep(random(1000, 2500));
        }
        for (let _0x8658e6 = 0; _0x8658e6 < 8; _0x8658e6++) {
          let _0x454ed4 = random(900, 2000);
          if (random(0, 15) < 3) {
            common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 8 / 10, _0x454ed4);
          } else {
            common.my_swipe(device.width / 2, device.height * 8 / 10, device.width / 2, device.height * 3 / 10, _0x454ed4);
          }
          sleep(random(300, 2500));
        }
        if (15 > random(0, 100)) {
          {
            toastLog("准备收藏宝贝");
            if (text("收藏").exists()) {
              {
                text("收藏").findOne().parent().click();
                sleep(random(500, 1500));
              }
            }
          }
        }
        while (!text("综合").exists()) {
          back();
          sleep(2000);
        }
        toastLog("已返回宝贝列表");
      }
      common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 1 / 10, random(500, 1500));
      sleep(2000);
      console.verbose("第" + (_0x8658e6 + 1) + "次滑动商品列表");
      sleep(random(2000, 3500));
    }
  }
  if (id("com.wuba.zhuanzhuan:id/da0").exists()) {
    {
      id("com.wuba.zhuanzhuan:id/da0").findOne().click();
      sleep(500);
    }
  }
  toastLog("转转养号结束");
}
function select_city(_0x54a8ed) {
  console.verbose("开始选择位置");
  sleep(2000);
  if (textStartsWith("发货地").exists()) {
    {
      textStartsWith("发货地").click();
      sleep(2000);
    }
  } else if (textStartsWith("选择宝贝位置").exists()) {
    textStartsWith("选择宝贝位置").click();
    sleep(2000);
  } else {
    console.log("无法打开转转地址列表");
    return false;
  }
  if (_0x54a8ed) {
    {
      console.verbose("转转宝贝发布地为：" + _0x54a8ed);
      if (_0x54a8ed == "广东省-中山市") {
        _0x54a8ed = "广东省-中山市-石岐";
      }
      if (_0x54a8ed == "广东省-东莞市") {
        _0x54a8ed = "广东省-东莞市-莞城";
      }
      if (_0x54a8ed == "甘肃省-嘉峪关市") {
        _0x54a8ed = "甘肃省-嘉峪关市-长城";
      }
      _0x54a8ed = _0x54a8ed.split("-");
      if (_0x54a8ed[2] == "莱芜区") {
        {
          _0x54a8ed[2] = "历下区";
          console.verbose("行政区变动‘历下区’");
        }
      }
      if (_0x54a8ed.length == 1) {
        {
          if (_0x54a8ed[0] == "北京市") {
            _0x54a8ed = ["北京", "北京", "海淀区"];
          }
          if (_0x54a8ed[0] == "天津市") {
            {
              _0x54a8ed = ["天津", "天津", "和平区"];
            }
          }
          if (_0x54a8ed[0] == "上海市") {
            _0x54a8ed = ["上海", "上海", "黄浦区"];
          }
          if (_0x54a8ed[0] == "重庆市") {
            _0x54a8ed = ["重庆", "重庆", "万州区"];
          }
        }
      }
      c = [_0x54a8ed[1].slice(0, 2), _0x54a8ed[2].slice(0, 2)];
      console.verbose(c);
      for (let _0x14390a = 0; _0x14390a < c.length; _0x14390a++) {
        {
          let _0x486a71 = c[_0x14390a];
          console.verbose("选择地点：" + _0x486a71);
          while (!textStartsWith(_0x486a71).exists()) {
            {
              if (!scrollDown()) {
                {
                  break;
                }
              }
              sleep(250);
            }
          }
          if (textStartsWith(_0x486a71).exists()) {
            {
              textStartsWith(_0x486a71).findOne().parent().click();
              sleep(2000);
            }
          }
        }
      }
    }
  } else {
    console.verbose("随机更换转转宝贝发布地点...");
    let _0x1c7ec3 = id("com.wuba.zhuanzhuan:id/bpa").findOne().bounds();
    common.my_click(_0x1c7ec3.centerX(), _0x1c7ec3.top + random(1, _0x1c7ec3.height()));
    for (let _0x14390a = 0; _0x14390a < 2; _0x14390a++) {
      if (random(0, 1)) {
        scrollUp();
        sleep(500);
      } else {
        {
          scrollDown();
          sleep(500);
        }
      }
    }
  }
  while (!textStartsWith("发货地").exists()) {
    {
      var _0x54d3c5 = id("com.wuba.zhuanzhuan:id/gu").find();
      sleep(200);
      if (_0x54d3c5.length > 0) {
        var _0x45823c = _0x54d3c5.length > 5 ? 5 : _0x54d3c5.length - 1;
        _0x54d3c5[random(0, _0x45823c)].parent().click();
        sleep(1000);
      }
    }
  }
}
function goods_down(_0x4d9037, _0x130613, _0xd9c62, _0x564e42, _0x45b0df, _0x288edf) {
  console.verbose("下架条件：");
  console.verbose("曝光量：" + _0xd9c62);
  console.verbose("浏览量：" + _0x564e42);
  console.verbose("想要数：" + _0x45b0df);
  console.verbose("关键词：" + _0x288edf);
  sleep(100);
  console.verbose("注意：宝贝内容相同，且曝光、浏览、想要数相同的宝贝每次只会下架其中一个");
  var _0x3eb4c4 = [];
  while (true) {
    var _0xfa3116 = desc("编辑").find();
    var _0x11de11 = false;
    for (let _0x444192 = 0; _0x444192 < _0xfa3116.length; _0x444192++) {
      var _0x2d0906 = _0xfa3116[_0x444192].parent().desc();
      var _0x1d7e2f = _0x2d0906;
      if (_0x3eb4c4.indexOf(_0x2d0906) === -1) {
        _0x3eb4c4.push(_0x2d0906);
        _0x2d0906 = _0x2d0906.split("\n");
        for (let _0x444192 = 0; _0x444192 < _0x2d0906.length; _0x444192++) {
          {
            if (_0x2d0906[_0x444192].indexOf("次浏览  ") != -1) {
              {
                _0x2d0906 = _0x2d0906[_0x444192];
                break;
              }
            }
          }
        }
        console.verbose(_0x2d0906);
        let _0x127fad = _0x2d0906.split("  ")[0].slice(0, -3);
        let _0x37494f = _0x2d0906.split("  ")[1].slice(0, -3);
        let _0x89acd9 = _0x2d0906.split("  ")[2].slice(0, -3);
        if (_0x127fad == "--") {
          _0x127fad = "0";
        }
        if (_0x37494f == "--") {
          _0x37494f = "0";
        }
        if (_0x89acd9 == "--") {
          {
            _0x89acd9 = "0";
          }
        }
        if (_0x127fad.substr(_0x127fad.length - 1, 1) == "万") {
          _0x127fad = _0x127fad.substr(0, _0x127fad.length - 1);
          _0x127fad = Number(_0x127fad) * 10000;
        } else {
          {
            _0x127fad = Number(_0x127fad);
          }
        }
        if (_0x37494f.substr(_0x37494f.length - 1, 1) == "万") {
          {
            _0x37494f = _0x37494f.substr(0, _0x37494f.length - 1);
            _0x37494f = Number(_0x37494f) * 10000;
          }
        } else {
          {
            _0x37494f = Number(_0x37494f);
          }
        }
        if (_0x89acd9.substr(_0x89acd9.length - 1, 1) == "万") {
          _0x89acd9 = _0x89acd9.substr(0, _0x89acd9.length - 1);
          _0x89acd9 = Number(_0x89acd9) * 10000;
        } else {
          _0x89acd9 = Number(_0x89acd9);
        }
        var _0x106282 = false;
        console.verbose(_0x1d7e2f);
        console.verbose("曝光量" + _0x127fad);
        console.verbose("浏览量" + _0x37494f);
        console.verbose("想要数" + _0x89acd9);
        sleep(100);
        if (_0x288edf) {
          {
            _0x288edf.split("#").forEach(_0x270cc4 => {
              {
                if (_0x1d7e2f.indexOf(_0x270cc4) != -1 && _0x270cc4) {
                  console.verbose("包含关键词'" + _0x270cc4 + "'，符合下架条件");
                  _0x106282 = true;
                }
              }
            });
          }
        }
        if (_0x127fad < _0xd9c62) {
          toastLog("曝光量" + _0x127fad + "，开始下架");
          _0x106282 = true;
        }
        if (_0x37494f < _0x564e42) {
          {
            toastLog("浏览量" + _0x37494f + "，开始下架");
            _0x106282 = true;
          }
        }
        if (_0x89acd9 < _0x45b0df) {
          toastLog("想要数" + _0x89acd9 + "，开始下架");
          _0x106282 = true;
        }
        if (_0x106282) {
          {
            _0x11de11 = true;
            if (desc(_0x1d7e2f).findOne().find(desc("下架")).length == 1) {
              desc(_0x1d7e2f).findOne().find(desc("下架"))[0].click();
            } else {
              {
                let _0x455dce = desc(_0x1d7e2f).findOne().find(className("android.widget.ImageView").depth(13));
                let _0x26e66e = _0x455dce.pop();
                if (_0x26e66e.desc() !== null) {
                  _0x26e66e = _0x455dce.pop();
                }
                _0x26e66e.click();
                sleep(1000);
                desc("下架").findOne().click();
              }
            }
            sleep(1000);
            if (_0x130613 == "已卖出") {
              toastLog("已卖出");
              desc("已卖出").click();
            } else {
              toastLog("不想卖了");
              desc("不想卖了").click();
            }
            sleep(2000);
            sleep(_0x4d9037 * 1000);
            break;
          }
        }
      }
    }
    if (!_0x11de11) {
      if (desc("没有更多宝贝了").exists()) {
        console.verbose("出现'没有更多宝贝了'");
        break;
      }
      if (_0x353bd5 >= 3) {
        console.verbose("连续下滑失败多次，判断到达底部");
        break;
      }
      var _0x353bd5 = 0;
      for (let _0x180065 = 0; _0x180065 < 5; _0x180065++) {
        {
          sleep(2000);
          if (scrollDown()) {
            console.verbose("下滑成功");
            break;
          } else {
            _0x353bd5 += 1;
          }
        }
      }
    }
  }
}
function get_images(_0x1d9f8b, _0x45cd9f) {
  let _0x2d3f5d = _0x1d9f8b.vcode || _0x1d9f8b.auto_video;
  let _0x55e336 = _0x45cd9f && _0x45cd9f.insert_image_type != "" && _0x45cd9f.insert_image_url;
  let _0x57c676 = [];
  if (_0x2d3f5d && _0x55e336) {
    {
      _0x57c676 = _0x1d9f8b.images.slice(0, 7);
    }
  } else if (_0x2d3f5d || _0x55e336) {
    _0x57c676 = _0x1d9f8b.images.slice(0, 8);
  } else {
    _0x57c676 = _0x1d9f8b.images.slice(0, 9);
  }
  if (_0x55e336) {
    console.verbose("插入图片：" + _0x45cd9f.insert_image_url);
    _0x57c676.splice(Number(_0x45cd9f.insert_image_type), 0, _0x45cd9f.insert_image_url);
  }
  console.verbose("下载图片：" + _0x57c676.length + "张");
  return _0x57c676;
}
module.exports = wbzz;