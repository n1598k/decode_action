//Wed Mar 25 2026 13:25:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var dy = {
  "yanghao": function (_0x4e6aea) {
    if (_0x4e6aea) {
      {
        let _0x28cacd = common.get_task_detail(_0x4e6aea);
        var _0x31f98a = JSON.parse(_0x28cacd.data.args);
      }
    } else {
      {
        var _0x31f98a = JSON.parse(common.get_dytaskc().yanghao);
      }
    }
    setting.dy_dk = _0x31f98a.dy_dk;
    common.dy_home();
    dy_yanghao_main(_0x31f98a);
    if (_0x4e6aea) {
      common.web_log("抖音养号", "success");
      common.reload_task_table(_0x4e6aea, "end");
    }
  }
};
function dy_yanghao_main(_0xf97fcf) {
  var _0x36bbae = _0xf97fcf.scroll_num;
  var _0x2f0daa = _0xf97fcf.like_percent;
  var _0x2c7ec7 = _0xf97fcf.collect_percent;
  var _0x2af2d0 = _0xf97fcf.comment_percent;
  var _0xbd8d10 = _0xf97fcf.comment_content;
  console.verbose("准备进入抖音养号页面");
  id("xsr").findOne().parent().click();
  sleep(3000);
  for (let _0x5e1cb3 = 0; _0x5e1cb3 < _0x36bbae; _0x5e1cb3++) {
    if (text("点击进入直播间").exists()) {
      {
        console.verbose("跳过直播间");
      }
    } else {
      let _0x404f3a = random(5, 70);
      toastLog("开始观看视频，观看时间" + _0x404f3a + "秒");
      for (let _0x13219e = 0; _0x13219e < _0x404f3a; _0x13219e++) {
        if (random(0, 100) < 3) {
          let _0x6492c4 = random(800, 5500);
          toastLog("随机暂停视频" + _0x6492c4 + "毫秒");
          common.my_click(device.width / 2, device.height / 2);
          sleep(_0x6492c4);
          common.my_click(device.width / 2, device.height / 2);
        }
        sleep(1000);
      }
      sleep(random(500, 2000));
      if (_0x2f0daa > random(0, 100)) {
        {
          toastLog("准备给视频点赞");
          try {
            {
              id("e+-").find()[1].click();
              sleep(1000);
              toastLog("点赞了视频");
            }
          } catch (_0x473df1) {}
        }
      }
      if (_0x2c7ec7 > random(0, 100)) {
        toastLog("准备收藏视频");
        try {
          {
            id("df1").find()[1].click();
            toastLog("收藏了视频");
          }
        } catch (_0x12f34e) {}
      }
      if (_0x2af2d0 > random(0, 100)) {
        {
          toastLog("准备评论视频");
          id("dqc").find()[1].click();
          sleep(1000);
          id("djw").findOne().click();
          sleep(2000);
          var _0x2a508d = _0xbd8d10.split("#").filter(del_empty);
          var _0x32bc5e = Math.floor(Math.random() * _0x2a508d.length);
          console.verbose(_0x2a508d[_0x32bc5e]);
          setText(_0x2a508d[_0x32bc5e]);
          sleep(1000);
          text("发送").findOne().parent().click();
          sleep(1000);
          back();
          sleep(2000);
          toastLog("评论视频成功");
          sleep(1000);
        }
      }
    }
    sleep(random(1000, 3500));
    common.my_swipe(device.width / 2, device.height * 7 / 10, device.width / 2, device.height * 2 / 10, random(100, 500));
    sleep(2000);
    console.verbose("第" + (_0x5e1cb3 + 1) + "次滑动视频列表");
    sleep(random(500, 3500));
  }
  if (id("xsr").find().length == 5) {
    {
      id("xsr").find()[3].parent().click();
    }
  }
  toastLog("抖音养号结束");
}
function del_empty(_0x581f33) {
  return _0x581f33 && _0x581f33.trim();
}
module.exports = dy;