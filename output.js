//Wed Mar 25 2026 13:37:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var hs = {
  "post_add": function (_0x5852fc) {
    console.log("开始发布笔记");
    if (_0x5852fc) {
      console.verbose("正在获取发布笔记列表，请稍等...");
      let _0xb07d3f = common.get_task_detail(_0x5852fc);
      var _0x5770c8 = JSON.parse(_0xb07d3f.data.args);
      hspost_add_time_blank = parseInt(_0x5770c8.time_blank);
      post_type = _0x5770c8.post_type;
      setting.hs_dk = _0x5770c8.hs_dk;
      watermark = _0x5770c8.watermark;
      hs_yjcp = _0x5770c8.yjcp;
      var _0x333d32 = common.get_posts(_0x5770c8.post);
      let _0x272286 = [];
      for (let _0x3f8813 = 0; _0x3f8813 < _0x333d32.length; _0x3f8813++) {
        {
          _0x272286.push(_0x333d32[_0x3f8813].id);
        }
      }
      if (!setting.phsadd_msg.contains("local_already_add_hspost")) {
        setting.phsadd_msg.put("local_already_add_hspost", []);
      }
      if (JSON.stringify(_0x272286) === JSON.stringify(setting.phsadd_msg.get("local_all_post"))) {
        let _0x29520d = setting.phsadd_msg.get("local_already_add_hspost");
        if (Array.isArray(_0x29520d) && _0x29520d.length === 0) {} else {
          {
            common.web_log("继续上次进度发布笔记", "success");
            for (let _0x3f8813 = 0; _0x3f8813 < _0x333d32.length; _0x3f8813++) {
              {
                if (_0x29520d.indexOf(_0x333d32[_0x3f8813].id) > -1) {
                  delete _0x333d32[_0x3f8813];
                }
              }
            }
          }
        }
      } else {
        setting.phsadd_msg.put("local_all_post", _0x272286);
      }
    }
    threads.start(function () {
      {
        setting.album_index = -1;
        console.verbose("开始后台下载图片视频..");
        let _0x4bac7f = [];
        _0x333d32.forEach(function (_0x418618, _0x497f3f) {
          console.verbose("开始下载第" + (_0x497f3f + 1) + "套图片");
          if (_0x4bac7f.indexOf(_0x418618.title_md5) == -1) {
            _0x4bac7f.push(_0x418618.title_md5);
            let _0x380d25 = get_images(_0x418618, _0x5770c8);
            if (watermark == "open") {
              _0x380d25 = common.watermark(_0x380d25, setting.xy_name, setting.xy_name2);
            }
            common.download_img(_0x418618.title_md5, _0x380d25, false);
            common.download_video(_0x418618);
          } else {
            console.verbose("第" + (_0x497f3f + 1) + "套笔记素材已下载..");
          }
          setting.album_index = _0x497f3f;
        });
        console.info("所有笔记图片视频素材下载完成");
      }
    });
    _0x333d32.forEach(function (_0x2435e8, _0x4e75bb) {
      hs_add_wait(_0x4e75bb, _0x333d32);
      common.hs_home();
      let _0x30e75b = "正在下载图片或视频，请稍等...";
      while (_0x4e75bb > setting.album_index) {
        {
          console.log(_0x30e75b);
          toast(_0x30e75b);
          sleep(5000);
        }
      }
      threads.start(function () {
        toastLog("笔记标题：" + _0x2435e8.title);
        common.web_log("开始发布：" + _0x2435e8.title, "success");
      });
      enter_fbbj();
      if (_0x2435e8.vcode || _0x2435e8.auto_video) {
        {
          select_video_aibum(_0x2435e8);
        }
      } else {
        select_aibum(_0x2435e8);
      }
      console.verbose("等待发布笔记页面加载完成..");
      text("发布笔记").waitFor();
      sleep(500);
      toastLog("准备开始填写笔记内容...");
      sleep(2000);
      setText(0, _0x2435e8.title);
      sleep(1000);
      setText(1, _0x2435e8.content);
      sleep(1000);
      console.verbose("笔记内容填写完毕");
      sleep(2000);
      if (_0x2435e8.location && id("com.xingin.xhs:id/anc").exists()) {
        {
          id("com.xingin.xhs:id/anc").findOne().click();
          sleep(1000);
          console.verbose("开始选择地点");
          text("搜索地点").waitFor();
          setText(_0x2435e8.location);
          sleep(2000);
          id("com.xingin.xhs:id/eh5").findOne().click();
          sleep(1000);
        }
      }
      if (_0x2435e8.post_sort && id("com.xingin.xhs:id/jig").exists()) {
        {
          post_sort_arr = _0x2435e8.post_sort.split("#").filter(del_empty);
          for (let _0x787006 = 0; _0x787006 < post_sort_arr.length; _0x787006++) {
            {
              id("com.xingin.xhs:id/jig").findOne().click();
              sleep(1000);
              common.my_input(post_sort_arr[_0x787006]);
              sleep(1000);
            }
          }
        }
      }
      if (post_type == "存草稿") {
        console.verbose("存草稿");
        text("存草稿").findOne().click();
        sleep(500);
        text("确定").findOne().click();
        sleep(1000);
      } else {
        toastLog("点击 发布笔记");
        text("发布笔记").findOne().click();
        sleep(2000);
      }
      let _0x2ff08c = Math.ceil((_0x4e75bb + 1) / _0x333d32.length * 100);
      console.verbose("笔记发布进度：" + _0x2ff08c + "%");
      if (_0x2ff08c != 100) {
        common.reload_task_table(_0x5852fc, "run", "", _0x2ff08c);
      }
      common.web_log("\"" + _0x2435e8.title + "\"发布成功", "success");
      toastLog("\"" + _0x2435e8.title + "\"发布成功");
      let _0x12d786 = setting.phsadd_msg.get("local_already_add_hspost");
      _0x12d786.push(_0x2435e8.id);
      setting.phsadd_msg.put("local_already_add_hspost", _0x12d786);
      common.hs_home();
    });
    toastLog("全部笔记发布成功");
    threads.start(function () {
      {
        common.web_log("发布红薯笔记任务执行成功", "success");
        common.reload_task_table(_0x5852fc, "end");
        setting.phsadd_msg.put("local_already_add_hspost", []);
      }
    });
    threads.start(function () {
      _0x333d32.forEach(function (_0x4f07de, _0x526c45) {
        {
          common.remove_img(_0x4f07de.title_md5);
          common.remove_video("v_" + _0x4f07de.title_md5);
        }
      });
      console.log("残留文件清除成功");
    });
  },
  "yanghao": function (_0x44ba85) {
    if (_0x44ba85) {
      let _0x80ec7 = common.get_task_detail(_0x44ba85);
      var _0x48d35e = JSON.parse(_0x80ec7.data.args);
    } else {
      {
        var _0x48d35e = JSON.parse(common.get_hstaskc().hs_yanghao);
      }
    }
    setting.hs_dk = _0x48d35e.hs_dk;
    common.hs_home();
    hs_yanghao_main(_0x48d35e);
    if (_0x44ba85) {
      common.web_log("红薯养号", "success");
      common.reload_task_table(_0x44ba85, "end");
    }
  },
  "flow_search": function (_0x1aec26) {
    if (_0x1aec26) {
      {
        let _0x6648f6 = common.get_task_detail(_0x1aec26);
        var _0x183a92 = JSON.parse(_0x6648f6.data.args);
      }
    } else {
      var _0x183a92 = JSON.parse(common.get_hstaskc().hs_search);
    }
    setting.hs_dk = _0x183a92.hs_dk;
    common.hs_home();
    start_hsflow_search(_0x183a92);
    if (_0x1aec26) {
      common.web_log("红薯搜索养号", "success");
      common.reload_task_table(_0x1aec26, "end");
    }
  },
  "post_del": function (_0x345287) {
    if (_0x345287) {
      let _0x24d1b9 = common.get_task_detail(_0x345287);
      var _0x2dfa50 = JSON.parse(_0x24d1b9.data.args);
    } else {
      {
        var _0x2dfa50 = JSON.parse(common.get_hstaskc().post_del);
      }
    }
    setting.hs_dk = _0x2dfa50.hs_dk;
    common.hs_home();
    post_del(_0x2dfa50);
    if (_0x345287) {
      {
        common.web_log("红薯删除笔记", "success");
        common.reload_task_table(_0x345287, "end");
      }
    }
  }
};
function enter_fbbj() {
  console.verbose("准备开始发布...");
  if (text("继续编辑图文笔记吗？").exists()) {
    console.verbose("出现'继续编辑图文笔记吗？' 点击'存草稿'");
    text("存草稿").findOne().click();
    sleep(1000);
  }
  id("dx0").findOne().click();
  sleep(2000);
  id("com.xingin.xhs:id/o_").findOne().click();
  sleep(1000);
  toastLog("相册列表加载完毕");
}
function hs_add_wait(_0x4803c0, _0x2d510d) {
  let _0x277bcf = "";
  if (_0x4803c0 > 0 && hspost_add_time_blank) {
    threads.start(function () {
      {
        _0x277bcf = "共" + _0x2d510d.length + "个红薯笔记，" + hspost_add_time_blank + "秒后开始发布第" + (_0x4803c0 + 1) + "个红薯笔记";
        console.log(_0x277bcf);
        toast(_0x277bcf);
        common.web_log(_0x277bcf, "info");
      }
    });
    sleep(hspost_add_time_blank * 1000);
  } else {
    {
      threads.start(function () {
        _0x277bcf = "共" + _0x2d510d.length + "个红薯笔记，开始发布第" + (_0x4803c0 + 1) + "个笔记";
        common.web_log(_0x277bcf, "info");
        console.log(_0x277bcf);
        toast(_0x277bcf);
      });
    }
  }
}
function get_images(_0x7aea2b, _0x4f53b1) {
  let _0x399849 = [];
  _0x399849 = _0x7aea2b.images.slice(0, 18);
  console.verbose("下载图片：" + _0x399849.length + "张");
  return _0x399849;
}
function select_video_aibum(_0x59adc9) {
  console.verbose("开始选择视频...");
  do {
    {
      sleep(800);
      if (className("android.widget.TextView").text("v_" + _0x59adc9.title_md5).exists()) {
        className("android.widget.TextView").text("v_" + _0x59adc9.title_md5).findOne().parent().click();
        toastLog("进入相册");
        sleep(2300);
        className("android.widget.FrameLayout").id("com.xingin.xhs:id/hzs").findOne().click();
        sleep(500);
        desc("下一步").findOne().click();
        sleep(1000);
        if (text("下一步").exists()) {
          {
            text("下一步").findOne().click();
            sleep(1000);
          }
        }
        break;
      }
    }
  } while (id("com.xingin.xhs:id/bi5").scrollable().findOne().scrollForward());
  console.log("准备进入发布页...");
}
function select_aibum(_0x54c062) {
  console.verbose("准备开始选择图片...");
  do {
    {
      sleep(800);
      if (className("android.widget.TextView").text(_0x54c062.title_md5).exists()) {
        className("android.widget.TextView").text(_0x54c062.title_md5).findOne().parent().click();
        toastLog("进入相册");
        sleep(2300);
        let _0x2e360d = id("hzs").find();
        if (className("androidx.recyclerview.widget.RecyclerView").id("fqh").find().length == 3) {
          {
            _0x2e360d = _0x2e360d.slice(0, _0x2e360d.length / 2);
          }
        }
        _0x2e360d.reverse();
        for (let _0x2f2c83 = 0; _0x2f2c83 < _0x2e360d.length; _0x2f2c83++) {
          sleep(100);
          _0x2e360d[_0x2f2c83].click();
          if (_0x2f2c83 == 9) {
            common.my_swipe(device.width / 2, device.height * 2 / 10, device.width / 2, device.height * 7 / 10, 300);
            sleep(1000);
          }
        }
        if (hs_yjcp == "开") {
          text("一键成片").findOne().parent().click();
          while (!text("使用原片").exists()) {
            {
              console.verbose("等待一键成片完成");
              sleep(2500);
            }
          }
        } else {
          {
            desc("下一步").findOne().click();
            sleep(2000);
          }
        }
        sleep(2000);
        if (id("e63").exists()) {
          {
            id("e63").findOne().click();
            sleep(2000);
            console.verbose("点击关闭图片模板按钮");
          }
        }
        text("下一步").findOne().click();
        sleep(1000);
        break;
      }
    }
  } while (id("com.xingin.xhs:id/bi5").scrollable().findOne().scrollForward());
  console.log("准备进入发布页...");
}
function hs_yanghao_main(_0x3e26d2) {
  var _0x23a65d = _0x3e26d2.lllx;
  var _0x479caf = _0x3e26d2.pdlx;
  var _0x198d93 = _0x3e26d2.hs_yanghao_scroll_num;
  var _0x29687b = _0x3e26d2.hs_yanghao_click_percent;
  var _0x17b9ec = _0x3e26d2.hs_yanghao_like_percent;
  var _0x5d2062 = _0x3e26d2.hs_yanghao_collect_percent;
  var _0x45a5c9 = _0x3e26d2.hs_yanghao_comment_percent;
  var _0x5ac600 = _0x3e26d2.hs_yanghao_comment_content;
  console.verbose("准备进入红薯养号页面");
  id("com.xingin.xhs:id/dwx").findOne().click();
  sleep(3000);
  console.verbose("浏览类型：" + _0x23a65d);
  if (_0x23a65d == "关注" && desc("关注").clickable().exists()) {
    {
      desc("关注").clickable().findOne().click();
      sleep(1000);
    }
  } else if (_0x23a65d == "发现" && desc("发现").clickable().exists()) {
    desc("发现").clickable().findOne().click();
    sleep(3500);
    console.verbose("频道类型：" + _0x479caf);
    if (_0x479caf != "推荐") {
      {
        id("com.xingin.xhs:id/avu").findOne().click();
        sleep(1000);
        if (id("com.xingin.xhs:id/j0d").text(_0x479caf).exists()) {
          {
            console.verbose("点击 " + _0x479caf);
            id("com.xingin.xhs:id/j0d").text(_0x479caf).find().pop().parent().click();
            sleep(500);
          }
        }
        if (!desc("已选定" + _0x479caf).exists() && id("com.xingin.xhs:id/j0d").text(_0x479caf).exists()) {
          console.verbose("点击 " + _0x479caf);
          id("com.xingin.xhs:id/j0d").text(_0x479caf).find().pop().parent().click();
          sleep(500);
        }
      }
    }
  } else if (_0x23a65d == "本地") {
    let _0x13c362 = desc("发现").clickable().findOne();
    className("androidx.appcompat.app.ActionBar$Tab").indexInParent(_0x13c362.indexInParent() + 1).depth(_0x13c362.depth()).clickable().findOne().click();
  } else {}
  sleep(3000);
  toastLog("开始模拟人工浏览帖子...");
  for (let _0x14fb97 = 0; _0x14fb97 < _0x198d93; _0x14fb97++) {
    {
      if (_0x29687b > random(0, 100)) {
        {
          var _0x247671 = common.get_all_text_desc();
          if (random(0, 1) === 0) {
            var _0x54e473 = device.width / 10;
          } else {
            {
              var _0x54e473 = device.width / 10 * 6;
            }
          }
          common.my_click(_0x54e473, device.height / 2);
          sleep(1000);
          let _0x3a0774 = common.get_all_text_desc();
          if (_0x247671 == _0x3a0774) {
            console.verbose("二次点击");
            common.my_click(_0x54e473, device.height / 2 + 30);
            sleep(1000);
          }
          console.verbose("开始浏览内容...");
          sleep(random(500, 2500));
          man_look_post();
          man_like_post(_0x17b9ec, _0x5d2062, _0x45a5c9, _0x5ac600);
          while (!id("com.xingin.xhs:id/dwx").exists()) {
            back();
            sleep(2000);
          }
          toastLog("已返回帖子列表");
        }
      }
      common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 1 / 10, random(500, 1500));
      sleep(2000);
      console.verbose("第" + (_0x14fb97 + 1) + "次滑动帖子列表");
      sleep(random(1500, 3500));
    }
  }
  if (id("com.xingin.xhs:id/dwz").exists()) {
    id("com.xingin.xhs:id/dwz").findOne().click();
    sleep(500);
  }
  toastLog("红薯养号结束");
}
function start_hsflow_search(_0x2f9dda) {
  var _0x49c2a9 = _0x2f9dda.word;
  var _0x5f2ae9 = _0x2f9dda.order;
  var _0x4a2dd5 = _0x2f9dda.num;
  var _0x1a234d = _0x2f9dda.click_percent;
  var _0x5dae0b = _0x2f9dda.like_percent;
  var _0x5e8cc5 = _0x2f9dda.collect_percent;
  var _0x5cb500 = _0x2f9dda.comment_percent;
  var _0x5f5bbc = _0x2f9dda.comment_content;
  console.verbose("准备进入红薯首页搜索关键词");
  id("com.xingin.xhs:id/dwx").findOne().click();
  sleep(3000);
  console.verbose(_0x49c2a9);
  var _0x1a0c86 = _0x49c2a9.split("#").filter(del_empty);
  var _0x2a5d8b = Math.floor(Math.random() * _0x1a0c86.length);
  _0x49c2a9 = _0x1a0c86[_0x2a5d8b];
  console.verbose("搜索词：" + _0x49c2a9);
  console.verbose("排序依据：" + _0x5f2ae9);
  id("com.xingin.xhs:id/hsz").findOne().click();
  sleep(1000);
  setText(_0x49c2a9);
  sleep(1000);
  text("搜索").findOne().click();
  sleep(3000);
  if (_0x5f2ae9 != "综合") {
    text("筛选").findOne().parent().click();
    sleep(1000);
    text(_0x5f2ae9).findOne().click();
    sleep(2000);
    back();
    sleep(1000);
  }
  toastLog("开始模拟人工浏览帖子...");
  for (let _0x58c094 = 0; _0x58c094 < _0x4a2dd5; _0x58c094++) {
    if (_0x1a234d > random(0, 100)) {
      var _0x2524a7 = common.get_all_text_desc();
      if (random(0, 1) === 0) {
        {
          var _0x18a70c = device.width / 10;
        }
      } else {
        var _0x18a70c = device.width / 10 * 6;
      }
      common.my_click(_0x18a70c, device.height / 2);
      sleep(2000);
      let _0x392ee9 = common.get_all_text_desc();
      if (_0x2524a7 == _0x392ee9) {
        {
          console.verbose("二次点击");
          common.my_click(_0x18a70c, device.height / 2 + 30);
          sleep(2000);
        }
      }
      if (text("关注").exists() || text("已关注").exists()) {
        console.verbose("开始浏览内容...");
        sleep(random(500, 2500));
        man_look_post();
        man_like_post(_0x5dae0b, _0x5e8cc5, _0x5cb500, _0x5f5bbc);
      } else {
        {
          console.verbose("返回");
          back();
          sleep(1000);
        }
      }
      while (!text("筛选").exists()) {
        back();
        sleep(2000);
      }
      toastLog("已返回帖子搜索结果列表");
    }
    common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 1 / 10, random(500, 1500));
    sleep(2000);
    console.verbose("第" + (_0x58c094 + 1) + "次滑动帖子列表");
    sleep(random(1500, 3500));
  }
  back();
  sleep(1000);
  back();
  sleep(1000);
  if (id("com.xingin.xhs:id/dwz").exists()) {
    id("com.xingin.xhs:id/dwz").findOne().click();
    sleep(500);
  }
  toastLog("红薯搜索养号结束");
}
function post_del(_0x1c0849) {
  var _0x18b6ba = Number(_0x1c0849.look);
  var _0x435877 = Number(_0x1c0849.like);
  var _0x34ddfa = _0x1c0849.word;
  var _0x9ebc94 = _0x1c0849.time_blank;
  console.verbose("删除条件为：");
  if (_0x18b6ba != 0) {
    {
      console.verbose("阅读量小于 " + _0x18b6ba);
    }
  }
  if (_0x435877 != 0) {
    {
      console.verbose("点赞数小于 " + _0x435877);
    }
  }
  if (_0x34ddfa) {
    {
      console.verbose("标题包含关键词 " + _0x34ddfa);
    }
  }
  console.verbose("准备进入红薯'我的'页面");
  id("com.xingin.xhs:id/dwy").findOne().click();
  sleep(2000);
  var _0x3da89d = [];
  while (true) {
    {
      var _0x350f87 = true;
      let _0x3149b8 = id("com.xingin.xhs:id/av8").descEndsWith("阅读").find();
      for (let _0x391810 = 0; _0x391810 < _0x3149b8.length; _0x391810++) {
        let _0x4bc166 = _0x3149b8[_0x391810].desc();
        var _0x228f41 = _0x4bc166.split(",")[1];
        var _0x5564de = 0;
        var _0x12ca93 = 0;
        var _0x18a66c = _0x4bc166.match(/(\d+)阅读/);
        var _0x29cb33 = _0x4bc166.match(/(\d+)赞/);
        if (_0x18a66c) {
          _0x5564de = Number(_0x18a66c[1]);
        }
        if (_0x29cb33) {
          {
            _0x12ca93 = Number(_0x29cb33[1]);
          }
        }
        let _0x5a69ef = "标题：" + _0x228f41 + " 阅读：" + _0x5564de + " 点赞：" + _0x12ca93;
        if (_0x3da89d.indexOf(_0x5a69ef) > -1) {
          continue;
        } else {
          console.verbose(_0x5a69ef);
          _0x3da89d.push(_0x5a69ef);
        }
        let _0x33389a = false;
        if (_0x5564de < _0x18b6ba) {
          {
            toastLog("阅读量" + _0x5564de + "，符合删除条件");
            _0x33389a = true;
          }
        }
        if (_0x12ca93 < _0x435877) {
          toastLog("点赞数" + _0x12ca93 + "，符合删除条件");
          _0x33389a = true;
        }
        if (_0x34ddfa) {
          {
            _0x34ddfa.split("#").forEach(_0x4ac43f => {
              if (_0x228f41.indexOf(_0x4ac43f) != -1 && _0x4ac43f) {
                toastLog("包含关键词'" + _0x4ac43f + "'，符合删除条件");
                _0x33389a = true;
              }
            });
          }
        }
        if (_0x33389a) {
          _0x350f87 = false;
          _0x3149b8[_0x391810].click();
          sleep(2000);
          console.verbose("点击右上角的'更多'按钮");
          if (id("moreOperateIV").exists()) {
            {
              id("moreOperateIV").findOne().click();
              sleep(1000);
            }
          } else if (id("shareButton").exists()) {
            console.verbose("视频");
            id("shareButton").findOne().click();
            sleep(1000);
          }
          while (!id("jh7").className("android.widget.TextView").text("删除").exists()) {
            console.verbose("删除按钮不存在，向后滑动一次");
            id("com.xingin.xhs:id/giz").findOne().scrollForward();
            sleep(1000);
          }
          id("jh7").className("android.widget.TextView").text("删除").findOne().parent().parent().click();
          sleep(1000);
          text("确定").findOne().click();
          sleep(1000);
          console.verbose("删除成功");
        }
        sleep(_0x9ebc94);
      }
      if (_0x350f87) {
        var _0x4df88e = common.get_all_text_desc();
        common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 1 / 10, 500);
        sleep(2000);
        var _0x5c13d7 = common.get_all_text_desc();
        if (_0x5c13d7 == _0x4df88e) {
          toastLog("已滑动到列表最底部");
          break;
        }
      }
    }
  }
  if (id("com.xingin.xhs:id/dwz").exists()) {
    id("com.xingin.xhs:id/dwz").findOne().click();
    sleep(500);
  }
  toastLog("红薯删除笔记结束");
}
function man_look_post() {
  if (descStartsWith("图片,第").exists()) {
    let _0x403e2c = descStartsWith("图片,第").findOne().desc();
    var _0x3a838c = 2;
    var _0x12ded6 = _0x403e2c.match(/共 (\d+)张/);
    if (_0x12ded6) {
      _0x3a838c = _0x12ded6[1];
      console.verbose("共 " + _0x3a838c + " 张照片");
    }
    var _0x216cc3 = 1;
    while (true) {
      if (_0x216cc3 >= _0x3a838c) {
        break;
      }
      common.my_swipe(device.width * 0.9, device.height * 0.3, device.width * 0.2, device.height * 0.3, random(400, 600));
      sleep(random(500, 2500));
      _0x216cc3 += 1;
      if (random(0, 100) < 12) {
        {
          _0x216cc3 -= 1;
          common.my_swipe(device.width * 0.2, device.height * 0.3, device.width * 0.9, device.height * 0.3, random(400, 600));
          sleep(random(500, 2500));
        }
      }
    }
    let _0x2f17c7 = random(3, 8);
    for (let _0x46083d = 0; _0x46083d < _0x2f17c7; _0x46083d++) {
      {
        common.my_swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 600);
        sleep(random(300, 1000));
        if (text("抢首评").exists()) {
          break;
        }
        if (text("- 到底了 -").exists()) {
          {
            break;
          }
        }
        if (random(0, 100) < 20) {
          {
            common.my_swipe(device.width * 0.5, device.height * 0.2, device.width * 0.5, device.height * 0.9, 600);
          }
        }
      }
    }
    common.my_swipe(device.width * 0.5, device.height * 0.2, device.width * 0.5, device.height * 0.9, 600);
    common.my_swipe(device.width * 0.5, device.height * 0.2, device.width * 0.5, device.height * 0.9, 600);
    common.my_swipe(device.width * 0.5, device.height * 0.2, device.width * 0.5, device.height * 0.9, 600);
  } else if (desc("暂停").exists() || desc("播放").exists()) {
    {
      console.verbose("视频");
      let _0x1abc2f = random(5, 70);
      console.verbose("观看" + _0x1abc2f + "秒");
      for (let _0x46083d = 0; _0x46083d < _0x1abc2f; _0x46083d++) {
        {
          if (random(0, 100) < 3) {
            let _0x3abc68 = random(800, 5500);
            toastLog("随机暂停视频" + _0x3abc68 + "毫秒");
            common.my_click(device.width / 2, device.height / 2);
            sleep(_0x3abc68);
            common.my_click(device.width / 2, device.height / 2);
          }
          sleep(1000);
        }
      }
    }
  } else if (desc("人气票").exists()) {
    console.verbose("进入直播间");
    sleep(random(2000, 20000));
  } else {
    {
      sleep(2000);
    }
  }
  sleep(random(500, 2000));
}
function man_like_post(_0x37fae9, _0xffec4f, _0x7e3582, _0x54992f) {
  if (descStartsWith("图片,第").exists()) {
    if (_0x37fae9 > random(0, 100) && id("gbx").exists()) {
      {
        id("gbx").findOne().click();
        sleep(1000);
        toastLog("点赞了帖子");
        sleep(2000);
      }
    }
    if (_0xffec4f > random(0, 100) && id("ga4").exists()) {
      {
        id("ga4").findOne().click();
        sleep(1000);
        toastLog("收藏了帖子");
        sleep(2000);
      }
    }
    if (_0x7e3582 > random(0, 100) && id("ga_").exists()) {
      id("ga_").findOne().click();
      sleep(1000);
      if (id("ga_").exists()) {
        id("ga_").findOne().click();
        sleep(1000);
      }
      var _0x5b839c = _0x54992f.split("#").filter(del_empty);
      var _0x1974eb = Math.floor(Math.random() * _0x5b839c.length);
      console.verbose(_0x5b839c[_0x1974eb]);
      setText(_0x5b839c[_0x1974eb]);
      sleep(1000);
      id("ffm").findOne().click();
      sleep(1000);
      toastLog("评论帖子成功");
      sleep(1000);
    }
  } else if (desc("暂停").exists() || desc("播放").exists()) {
    if (_0x37fae9 > random(0, 100) && id("com.xingin.xhs:id/likeLayout").exists()) {
      id("com.xingin.xhs:id/likeLayout").className("android.widget.Button").descStartsWith("点赞").findOne().click();
      sleep(1000);
      toastLog("点赞了视频");
      sleep(1000);
    }
    if (_0xffec4f > random(0, 100) && id("com.xingin.xhs:id/collectLayout").exists()) {
      {
        id("com.xingin.xhs:id/collectLayout").className("android.widget.Button").descStartsWith("收藏").findOne().click();
        sleep(1000);
        toastLog("收藏了视频");
        sleep(1000);
      }
    }
    if (_0x7e3582 > random(0, 100) && id("com.xingin.xhs:id/commentLayout").exists()) {
      id("com.xingin.xhs:id/commentLayout").className("android.widget.Button").descStartsWith("评论").findOne().click();
      sleep(1000);
      id("com.xingin.xhs:id/f73").findOne().click();
      sleep(1000);
      var _0x5b839c = _0x54992f.split("#").filter(del_empty);
      var _0x1974eb = Math.floor(Math.random() * _0x5b839c.length);
      console.verbose(_0x5b839c[_0x1974eb]);
      setText(_0x5b839c[_0x1974eb]);
      sleep(1000);
      id("ffm").findOne().click();
      sleep(1000);
      toastLog("评论视频成功");
      sleep(1000);
    }
  } else if (desc("人气票").exists()) {} else {}
  sleep(random(500, 5000));
}
function del_empty(_0x1441b5) {
  return _0x1441b5 && _0x1441b5.trim();
}
module.exports = hs;