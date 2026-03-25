//Wed Mar 25 2026 13:45:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var pdd = {
  "get_order": function (_0x48a41e) {
    if (_0x48a41e) {
      {
        let _0xdc279 = common.get_task_detail(_0x48a41e);
        var _0x3db155 = JSON.parse(_0xdc279.data.args);
      }
    } else {
      var _0x3db155 = JSON.parse(common.get_xytaskc().get_order);
    }
    setting.xy_dk = _0x3db155.xy_dk;
    console.log("开始获取" + _0x3db155.start_date + "之后订单");
    if (enter_my_sell_page()) {
      {
        if (descStartsWith("联系买家").exists() || descContains("联系买家").exists()) {
          {
            get_orders(_0x3db155);
          }
        } else if (desc("联系买家").exists()) {
          console.verbose("get_orders_c已废弃");
        }
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x48a41e, "订单同步完毕");
  },
  "from_pdd_buy": function (_0x4a227c) {
    if (!floaty.checkPermission()) {
      {
        common.web_log("请授予悬浮窗权限", "danger");
        common.reload_task_table(_0x4a227c, "reload", "请授予悬浮窗权限");
        return false;
      }
    }
    if (common.getVersionName(setting.pdd_pname) != setting.pdd_app_version) {
      common.web_log("请先安装指定版本的拼多多（手机端->其他环境->安装拼多多）", "danger");
      common.reload_task_table(_0x4a227c, "reload");
      return false;
    }
    let _0x5f4597 = common.get_task_detail(_0x4a227c);
    let _0x2d5c6d = JSON.parse(_0x5f4597.data.args).all_order;
    if (_0x2d5c6d) {
      {
        _0x2d5c6d.forEach((_0x17c4b4, _0x52565e) => {
          toastLog("共" + _0x2d5c6d.length + "订单，开始采购第" + (_0x52565e + 1) + "个");
          sleep(200);
          pdd_buy(_0x17c4b4);
        });
      }
    }
    toastLog("全部订单采购完成");
    while (!text("首页").exists()) {
      back();
      sleep(2500);
    }
    common.web_log("拼多多采购完成", "success");
    common.reload_task_table(_0x4a227c, "end");
  },
  "get_pdd_order": function (_0x16a1a2) {
    if (common.getVersionName(setting.pdd_pname) != setting.pdd_app_version) {
      common.web_log("请先安装指定版本的拼多多", "danger");
      common.reload_task_table(_0x16a1a2, "reload");
      return false;
    }
    let _0xabb74f = common.get_task_detail(_0x16a1a2);
    let _0x9ea517 = JSON.parse(_0xabb74f.data.args).trade_value3;
    console.log("开始取" + _0x9ea517 + "之后的拼多多订单");
    if (enter_pdd_dsh_page()) {
      {
        get_pdd_orders(_0x9ea517);
        toastLog("已取得全部指定的拼多多单号");
      }
    }
    common.web_log("取拼多多订单完成", "success");
    common.reload_task_table(_0x16a1a2, "end");
  },
  "xy_goods_haoping": function (_0x164f0f) {
    if (_0x164f0f) {
      {
        let _0x230081 = common.get_task_detail(_0x164f0f);
        var _0xe3e5a4 = JSON.parse(_0x230081.data.args);
      }
    } else {
      {
        var _0xe3e5a4 = JSON.parse(common.get_xytaskc().get_order);
      }
    }
    setting.xy_dk = _0xe3e5a4.xy_dk;
    time_blank = parseInt(_0xe3e5a4.time_blank);
    console.log("开始自动评价");
    if (_0xe3e5a4.hpdx == "wmdd") {
      enter_my_buy_page();
      if (descStartsWith("联系卖家").exists() || descContains("联系卖家").exists()) {
        descStartsWith("待评价").clickable().findOne().click();
        sleep(3000);
        while (true) {
          var _0x5a651d = desc("更多，按钮, 更多").find();
          if (_0x5a651d.length == 0) {
            {
              break;
            }
          }
          for (let _0x5a578d = 0; _0x5a578d < _0x5a651d.length; _0x5a578d++) {
            _0x5a651d = desc("更多，按钮, 更多").find();
            if (_0x5a651d[_0x5a578d].parent().find(className("android.widget.ImageView")).length < 2) {
              {
                console.verbose("跳过一个高度太低的控件(控件数量判断)");
                continue;
              }
            }
            let _0x3d3fc0 = _0x5a651d[_0x5a578d].parent().bounds();
            if (_0x3d3fc0.height() < 250) {
              console.verbose(_0x3d3fc0.height());
              console.verbose("跳过一个高度太低的控件");
              continue;
            }
            common.my_click(_0x3d3fc0.centerX(), _0x3d3fc0.centerY());
            sleep(1000);
            console.verbose("准备进入订单详情页");
            descContains("\n订单编号\n").waitFor();
            sleep(1000);
            console.verbose("已进入订单详情页");
            let _0x2fcb7e = className("android.widget.ImageView").depth(setting.order_dep).indexInParent(3).findOne().bounds();
            let _0x11725b = device.width - _0x2fcb7e.centerX();
            let _0x4a5905 = _0x2fcb7e.centerY();
            console.verbose("准备进入评价界面");
            common.my_click(_0x11725b, _0x4a5905);
            sleep(2000);
            common.haoping(_0xe3e5a4.hp);
            back();
            sleep(1500);
            if (desc("取消评价").exists()) {
              {
                desc("取消评价").findOne().click();
              }
            }
            back();
            sleep(1500);
            sleep(time_blank * 1000);
          }
          common.down_pull();
          sleep(5000);
        }
      }
    } else {
      if (enter_my_sell_page()) {
        {
          if (descStartsWith("联系买家").exists() || descContains("联系买家").exists()) {
            {
              descStartsWith("待评价").clickable().findOne().click();
              sleep(3000);
              while (true) {
                {
                  var _0x5a651d = desc("更多，按钮, 更多").find();
                  if (_0x5a651d.length == 0) {
                    {
                      break;
                    }
                  }
                  for (let _0x130dd9 = 0; _0x130dd9 < _0x5a651d.length; _0x130dd9++) {
                    {
                      _0x5a651d = desc("更多，按钮, 更多").find();
                      if (_0x5a651d[_0x130dd9].parent().find(className("android.widget.ImageView")).length < 2) {
                        {
                          console.verbose("跳过一个高度太低的控件(控件数量判断)");
                          continue;
                        }
                      }
                      let _0x3d3fc0 = _0x5a651d[_0x130dd9].parent().bounds();
                      if (_0x3d3fc0.height() < 250) {
                        {
                          console.verbose(_0x3d3fc0.height());
                          console.verbose("跳过一个高度太低的控件");
                          continue;
                        }
                      }
                      common.my_click(_0x3d3fc0.centerX(), _0x3d3fc0.centerY());
                      sleep(1000);
                      console.verbose("准备进入订单详情页");
                      descContains("\n订单编号\n").waitFor();
                      sleep(1000);
                      console.verbose("已进入订单详情页");
                      let _0x2fcb7e = className("android.widget.ImageView").depth(setting.order_dep).indexInParent(3).findOne().bounds();
                      let _0x11725b = device.width - _0x2fcb7e.centerX();
                      let _0x4a5905 = _0x2fcb7e.centerY();
                      console.verbose("准备进入评价界面");
                      common.my_click(_0x11725b, _0x4a5905);
                      sleep(2000);
                      common.haoping(_0xe3e5a4.hp);
                      back();
                      sleep(1500);
                      if (desc("取消评价").exists()) {
                        desc("取消评价").findOne().click();
                      }
                      back();
                      sleep(1500);
                      sleep(time_blank * 1000);
                    }
                  }
                  common.down_pull();
                  sleep(5000);
                }
              }
            }
          } else if (desc("联系买家").exists()) {
            console.verbose("7.4  7.9 废弃");
          }
        }
      }
    }
    common.back_xy_home();
    common.web_log_and_reload_task(_0x164f0f, "订单评价完成");
  }
};
function get_orders(_0x592cd4) {
  var _0x12aa45 = _0x592cd4.start_date;
  var _0x46a75f = true;
  var _0x55118d = [];
  console.verbose("同步订单类型：" + _0x592cd4.order_class);
  if (_0x592cd4.order_class && _0x592cd4.order_class != "全部") {
    {
      descStartsWith(_0x592cd4.order_class).clickable().findOne().click();
      sleep(3000);
    }
  }
  let _0x341d9a = true;
  while (_0x46a75f) {
    var _0x5060a3 = desc("更多，按钮, 更多").find();
    for (let _0x3fbfec = 0; _0x3fbfec < _0x5060a3.length; _0x3fbfec++) {
      if (_0x3fbfec == 0) {
        {
          if (_0x341d9a) {
            _0x341d9a = false;
          } else {
            console.verbose("跳过已同步的订单");
            continue;
          }
        }
      }
      var _0xe0df86 = {};
      console.verbose("等待订单列表加载...");
      desc("更多，按钮, 更多").waitFor();
      sleep(1000);
      _0x5060a3 = desc("更多，按钮, 更多").find();
      let _0x47e25f = _0x5060a3[_0x3fbfec].parent().find(className("android.widget.ImageView"));
      let _0x2d8f3a = _0x5060a3[_0x3fbfec].parent().children();
      if (_0x2d8f3a[_0x2d8f3a.length - 1].className() == "android.widget.ImageView") {
        {
          if (_0x47e25f.length < 3) {
            console.verbose("跳过一个高度太低的控件(控件数量判断<3)");
            continue;
          }
        }
      } else {
        if (_0x47e25f.length < 2) {
          {
            console.verbose("跳过一个高度太低的控件(控件数量判断<2)");
            continue;
          }
        }
      }
      _0xe0df86.item_content = _0x2d8f3a.find(indexInParent(3))[0].desc();
      if (_0x5060a3[_0x3fbfec].parent().find(indexInParent(4))[0].desc() != "更多，按钮, 更多") {
        _0xe0df86.pro_sku = _0x2d8f3a.find(indexInParent(4))[0].desc();
        if (_0xe0df86.pro_sku.indexOf(", ") != -1) {
          _0xe0df86.pro_sku = _0xe0df86.pro_sku.split(", ")[0];
        }
      }
      let _0x27e931 = _0x5060a3[_0x3fbfec].parent().desc().match(/¥\d+(\.\d+)?/);
      if (_0x27e931) {
        _0xe0df86.price = _0x27e931[0].replace("¥", "");
      } else {
        {
          _0xe0df86.price = "0";
          console.log("未能在文本中找到价格:", _0x5060a3[_0x3fbfec].parent().desc());
        }
      }
      let _0x2e724b = _0x5060a3[_0x3fbfec].parent().desc().match(/[×xX]\s*(\d+)(?!\s*[:：])/g);
      if (_0x2e724b) {
        if (_0xe0df86.pro_sku) {
          {
            _0xe0df86.pro_sku = _0xe0df86.pro_sku + " " + _0x2e724b[0];
          }
        } else {
          _0xe0df86.pro_sku = _0x2e724b[0];
        }
      }
      let _0x1af9b0 = _0x5060a3[_0x3fbfec].parent().bounds();
      if (_0x1af9b0.height() < 200) {
        {
          console.verbose(_0x1af9b0.height());
          console.verbose("跳过一个高度太低的控件");
          continue;
        }
      }
      common.my_click(_0x1af9b0.centerX(), _0x1af9b0.centerY() - device.height / 20);
      sleep(500);
      for (let _0x3fbfec = 0; _0x3fbfec < 10; _0x3fbfec++) {
        if (descContains("\n订单编号\n").exists()) {
          sleep(1000);
          break;
        }
        sleep(1000);
      }
      if (!descContains("\n订单编号\n").exists()) {
        console.verbose("第二次尝试点击");
        common.my_click(_0x1af9b0.centerX(), _0x1af9b0.centerY());
        sleep(3000);
      }
      if (text("O1CN01SznrUd237lvHLlN8e_!!6000000007209-2-tps-72-72").exists()) {
        toastLog("验货宝订单无法同步");
        back();
        sleep(1000);
        continue;
      }
      console.verbose("等待订单详情页加载完毕");
      click_chakangengduo_button();
      _0xe0df86.trade_value0 = "";
      _0xe0df86.trade_value1 = "";
      _0xe0df86.trade_value2 = "";
      _0xe0df86.trade_value3 = "";
      if (descEndsWith("收起").exists()) {
        {
          var _0x5223bb = descEndsWith("收起").findOne().desc().split("\n");
        }
      } else {
        {
          var _0x5223bb = descContains("\n订单编号\n").findOne().desc().split("\n");
        }
      }
      if (_0x5223bb.indexOf("买家昵称") != -1) {
        _0xe0df86.trade_value0 = _0x5223bb[_0x5223bb.indexOf("买家昵称") + 1];
        _0xe0df86.trade_value0 = _0xe0df86.trade_value0.replace(/\u200b/g, "");
      }
      if (_0x5223bb.indexOf("订单编号") != -1) {
        _0xe0df86.trade_value1 = _0x5223bb[_0x5223bb.indexOf("订单编号") + 1];
        _0xe0df86.trade_value1 = _0xe0df86.trade_value1.replace(/\u200b/g, "");
      }
      if (_0x5223bb.indexOf("支付宝交易号") != -1) {
        _0xe0df86.trade_value2 = _0x5223bb[_0x5223bb.indexOf("支付宝交易号") + 1];
        _0xe0df86.trade_value2 = _0xe0df86.trade_value2.replace(/\u200b/g, "");
      }
      if (_0x5223bb.indexOf("下单时间") != -1) {
        _0xe0df86.trade_value3 = _0x5223bb[_0x5223bb.indexOf("下单时间") + 1];
        _0xe0df86.trade_value3 = _0xe0df86.trade_value3.replace(/\u200b/g, "");
      }
      if (_0x55118d.indexOf(_0xe0df86.trade_value1) == -1) {
        toastLog("开始同步第" + (_0x55118d.length + 1) + "个闲鱼订单");
        _0x55118d.push(_0xe0df86.trade_value1);
      } else {
        {
          console.verbose("该闲鱼订单已同步");
          back();
          sleep(2000);
          continue;
        }
      }
      if (_0x12aa45 > _0xe0df86.trade_value3) {
        toastLog("已加载" + _0x12aa45 + "之后的全部订单..");
        _0x46a75f = false;
        back();
        break;
      }
      if (descMatches(/(.*?)[\s](.*?)[\s]复制[\s](.*?)/).exists()) {
        let _0x52d271 = descMatches(/(.*?)[\s](.*?)[\s]复制[\s](.*?)/).findOne().desc().split("\n");
        console.verbose(_0x52d271);
        _0xe0df86.name = _0x52d271[0];
        _0xe0df86.tel = _0x52d271[1];
        _0xe0df86.addr = _0x52d271[3];
      }
      var _0x51b9db = "";
      if (desc("等待买家付款").exists()) {
        var _0x51b9db = "已拍下";
      } else if (desc("买家已付款，请尽快发货").exists() || desc("已刀成,待卖家发货").exists()) {
        {
          console.log("发现‘去发货’按钮");
          if (_0x592cd4.wuliu_mod == "no_wuliu") {
            toastLog("无需物流发货");
            let _0x3d3fe9 = className("android.widget.ImageView").depth(setting.order_dep).indexInParent(3).findOne().bounds();
            common.my_click(device.width - _0x3d3fe9.centerX(), _0x3d3fe9.centerY());
            sleep(500);
            common.no_wuliu();
            _0x51b9db = "闲鱼已发货";
          } else {
            let _0x286310 = setting.api_domain + "xy_courier_pdd_courier";
            _0xe0df86.access_token = setting.s.get("access_token");
            let _0x3cb474 = http.post(_0x286310, _0xe0df86);
            let _0x475ffb = _0x3cb474.body.json();
            console.log(_0x475ffb.data);
            if (!_0x475ffb.data) {
              var _0x51b9db = "已付款";
              console.log("该“待发货”订单第一次同步");
            } else if (_0x475ffb.data.status == "已拍下") {
              {
                _0x51b9db = "已付款";
                toastLog("该订单原状态为‘已拍下’");
              }
            } else if (_0x475ffb.data.status == "待刀成") {
              {
                _0x51b9db = "已付款";
                toastLog("该订单原状态为‘待刀成’");
              }
            } else if (_0x475ffb.data.status == "已付款") {
              _0x51b9db = "已付款";
              toastLog("该已付款订单还未进行采购..");
            } else if (_0x475ffb.data.status == "已采购") {
              _0x51b9db = "已采购";
              toastLog("该订单已采购，但拼多多未发货");
            } else if (_0x475ffb.data.status == "采购已发货") {
              {
                console.log("准备填写快递单号..");
                enter_courier_number(_0x475ffb.data, _0x592cd4);
                _0x51b9db = "闲鱼已发货";
              }
            } else {
              {
                console.error("待发货订单状态异常..");
                var _0x51b9db = "异常状态";
              }
            }
          }
        }
      } else if (desc("已发货，待买家确认收货").exists()) {
        {
          var _0x51b9db = "闲鱼已发货";
        }
      } else if (desc("买家已付款,待刀成").exists()) {
        var _0x51b9db = "待刀成";
      } else if (descEndsWith("\n查看评价").exists()) {
        var _0x51b9db = "已评价";
      } else if (desc("交易成功").exists()) {
        {
          var _0x51b9db = "交易成功";
        }
      } else if (descStartsWith("买家申请退款").exists()) {
        var _0x51b9db = "买家申请退款";
        common.web_log("有一笔订单买家申请退款，请及时与买家沟通", "danger");
      } else if (descStartsWith("退款成功").exists()) {
        {
          var _0x51b9db = "退款成功";
        }
      } else if (descStartsWith("因交易超时").exists()) {
        {
          var _0x51b9db = "交易已关闭";
        }
      } else if (descContains("交易已取消").exists() || descContains("关闭了这笔交易").exists() || descContains("交易关闭").exists()) {
        {
          var _0x51b9db = "交易已关闭";
        }
      } else {
        var _0x51b9db = "其他状态";
      }
      _0xe0df86.status = _0x51b9db;
      console.verbose(_0xe0df86);
      if (setting.xy_dk == "开" || setting.xy_dk == "先主后副" && setting.xzhf == "f") {
        {
          _0xe0df86.xy_dk = "开";
        }
      } else if (setting.xy_dk == "关" || setting.xy_dk == "先主后副" && setting.xzhf == "z") {
        {
          _0xe0df86.xy_dk = "关";
        }
      }
      let _0x8e4e33 = setting.api_domain + "set_order";
      _0xe0df86.access_token = setting.s.get("access_token");
      let _0x5d1da5 = http.post(_0x8e4e33, _0xe0df86);
      let _0x200052 = _0x5d1da5.body;
      if (_0x200052.json().code == "0") {
        {
          threads.start(function () {
            console.verbose("“" + _0xe0df86.status + "”订单已同步至总控");
            common.web_log("闲鱼订单" + _0xe0df86.trade_value1 + "状态更新成功", "success");
          });
        }
      } else {
        {
          console.log("同步总控出错");
          toast("同步总控出错");
        }
      }
      sleep(1000);
      back();
      sleep(1500);
    }
    for (let _0x2a9bba = 0; _0x2a9bba < 7; _0x2a9bba++) {
      {
        console.log("订单列表下滑");
        sleep(1300);
        if (xy_order_list_down()) {
          {
            sleep(2000);
            break;
          }
        } else {
          console.verbose("闲鱼订单列表下滑失败(可能已到底)");
        }
        if (_0x2a9bba == 6) {
          _0x46a75f = false;
          console.log("已加载该账户全部订单..");
        }
      }
    }
  }
}
function click_chakangengduo_button() {
  for (let _0xaf405b = 0; _0xaf405b < 10; _0xaf405b++) {
    {
      if (descEndsWith("查看更多").exists()) {
        break;
      }
      if (descEndsWith("复制").exists()) {
        break;
      }
      sleep(2000);
    }
  }
  if (descEndsWith("查看更多").exists()) {
    {
      console.verbose("准备点击查看更多");
      common.my_swipe(device.width / 2, device.height * 40 / 100, device.width / 2, device.height * 8 / 100, 500);
      sleep(1000);
      if (descEndsWith("查看更多").exists()) {
        var _0x9b1a7f = descEndsWith("查看更多").findOne().bounds();
        common.my_click(_0x9b1a7f.centerX(), _0x9b1a7f.bottom - 50);
        sleep(800);
      }
      if (descEndsWith("查看更多").exists()) {
        {
          console.verbose("第二次点击查看更多");
          var _0x9b1a7f = descEndsWith("查看更多").findOne().bounds();
          common.my_click(_0x9b1a7f.centerX(), _0x9b1a7f.bottom - 50);
          sleep(800);
        }
      }
      common.my_swipe(device.width / 2, device.height * 30 / 100, device.width / 2, device.height * 60 / 100, 300);
      sleep(2000);
      if (descEndsWith("查看更多").exists()) {
        console.verbose("复位后再次点击查看更多");
        var _0x9b1a7f = descEndsWith("查看更多").findOne().bounds();
        common.my_click(_0x9b1a7f.centerX(), _0x9b1a7f.bottom - 50);
        sleep(800);
      }
    }
  } else if (descEndsWith("复制").exists()) {
    console.verbose("准备点击查看更多2");
    common.my_swipe(device.width / 2, device.height * 40 / 100, device.width / 2, device.height * 8 / 100, 500);
    sleep(1000);
    if (descEndsWith("复制").exists()) {
      {
        var _0x9b1a7f = descEndsWith("复制").findOne().bounds();
        common.my_click(device.width * 18 / 100, _0x9b1a7f.bottom - 80);
        sleep(1000);
      }
    }
    if (descEndsWith("复制").exists()) {
      console.verbose("第二次点击查看更多");
      var _0x9b1a7f = descEndsWith("复制").findOne().bounds();
      common.my_click(device.width * 18 / 100, _0x9b1a7f.bottom - 80);
      sleep(1000);
    }
    common.my_swipe(device.width / 2, device.height * 30 / 100, device.width / 2, device.height * 60 / 100, 300);
    sleep(2000);
    if (descEndsWith("复制").exists()) {
      console.verbose("复位后再次点击查看更多");
      var _0x9b1a7f = descEndsWith("复制").findOne().bounds();
      common.my_click(device.width * 18 / 100, _0x9b1a7f.bottom - 80);
      sleep(1000);
    }
  } else {
    console.error("未发现'查看更多'或'复制'按钮");
  }
}
function enter_courier_number(_0x229b81, _0x342df4) {
  let _0x48c39f = className("android.widget.ImageView").depth(setting.order_dep).indexInParent(3).findOne().bounds();
  common.my_click(_0x48c39f.centerX(), _0x48c39f.centerY());
  sleep(500);
  console.verbose("等待聊天页面加载...");
  for (let _0x1f451d = 0; _0x1f451d < 10; _0x1f451d++) {
    sleep(2000);
    if (descStartsWith("商品图片,").exists()) {
      {
        break;
      }
    } else if (desc("等待卖家发货").exists()) {
      {
        break;
      }
    } else if (desc("去发货，按钮, 去发货").exists()) {
      {
        break;
      }
    }
  }
  if (_0x342df4.wuliu_chat_content) {
    {
      toastLog("发货前私聊买家...");
      let _0xe80262 = _0x342df4.wuliu_chat_content.replace(/{number}/, _0x229b81.courier_number).replace(/{company}/, _0x229b81.courier_company);
      console.log(_0xe80262);
      common.send(_0xe80262);
      console.log("私聊买家成功");
    }
  }
  if (desc("去发货，按钮, 去发货").exists()) {
    console.verbose("点击去发货...");
    let _0x566b23 = desc("去发货，按钮, 去发货").findOne().bounds();
    common.my_click(_0x566b23.centerX(), _0x566b23.centerY());
    sleep(1000);
  } else if (desc("去发货").exists()) {
    console.verbose("点击去发货2...");
    let _0x82db7f = desc("去发货").findOne().bounds();
    common.my_click(_0x82db7f.centerX(), _0x82db7f.centerY());
    sleep(1000);
  } else if (descContains("个订单交易中").exists()) {
    {
      let _0x2fbb7e = "存在多个待发货订单，请手动点击'去发货'按钮，5秒后助手会继续运行";
      console.warn(_0x2fbb7e);
      toast(_0x2fbb7e);
    }
  } else {
    {
      console.error("未发现'去发货'按钮");
    }
  }
  console.verbose("等待出现已邮寄填单...");
  for (let _0x3c4899 = 0; _0x3c4899 < 10; _0x3c4899++) {
    sleep(2000);
    if (desc("上门取件").exists()) {
      console.verbose("出现上门取件，判断为新版的发货页面");
      break;
    } else if (descContains("尊享寄件\n").exists()) {
      console.verbose("尊享寄件出现");
      break;
    }
  }
  sleep(4000);
  console.verbose("准备点击我已寄出");
  console.log("请确保您已手动建立过寄件人信息");
  for (let _0x5eacdf = 0; _0x5eacdf < 10; _0x5eacdf++) {
    if (desc("我已寄出").exists()) {
      {
        console.verbose("已出现我已寄出填单号页面");
        break;
      }
    } else if (desc("上门取件").exists()) {
      {
        console.verbose("点击'我已寄出'");
        var _0xa7f0e0 = descStartsWith("立即下单, 我已寄出").findOne().find(className("android.widget.ImageView"))[1].bounds();
        common.my_click(_0xa7f0e0.centerX(), _0xa7f0e0.centerY());
        sleep(2000);
        console.verbose("等待我已寄出填单号页面...");
      }
    } else if (descContains("尊享寄件\n").exists()) {
      console.verbose("点击'我已寄出'");
      var _0xa7f0e0 = descContains("尊享寄件\n").findOne().find(className("android.widget.ImageView"))[0].bounds();
      common.my_click(_0xa7f0e0.centerX(), _0xa7f0e0.centerY());
      sleep(2000);
      console.verbose("等待我已寄出填单号页面...");
    } else {
      {
        sleep("2000");
        console.verbose("睡眠两秒，等待页面加载...");
      }
    }
    if (_0x5eacdf == 9) {
      console.error("当前设备网络较慢，页面未在20秒内加载成功，发货失败");
      sleep(30000);
    }
  }
  className("android.widget.EditText").findOne().click();
  sleep(500);
  if (_0x229b81.courier_number) {
    console.verbose("快递单号为：" + _0x229b81.courier_number);
  } else {
    {
      console.error("快递单号为空，请检查是否已正确填写快递单号");
    }
  }
  setText(0, _0x229b81.courier_number);
  sleep(3500);
  if (_0x342df4.wuliu_mod == "other") {
    console.verbose("当前闲鱼版本无法选择'其他快递公司'，切换至'原快递公司'");
  }
  var _0xa7f0e0 = desc("我已寄出").findOne().bounds();
  common.my_click(_0xa7f0e0.centerX(), _0xa7f0e0.centerY());
  sleep(1000);
  var _0x57e8f8 = desc("提交").findOne().bounds();
  common.my_click(_0x57e8f8.centerX(), _0x57e8f8.centerY());
  sleep(1000);
  var _0x2d0322 = desc("确认").findOne().bounds();
  common.my_click(_0x2d0322.centerX(), _0x2d0322.centerY());
  sleep(1000);
  while (true) {
    {
      sleep(500);
      console.verbose("检测发货是否成功...");
      if (textStartsWith("您输入的单号不符合").exists()) {
        console.log("运单号不符合规则，自动选择无需寄件");
        text("无需寄件").findOne().click();
        sleep(1000);
        text("继续").findOne().click();
        sleep(1000);
        break;
      }
      if (textStartsWith("立即下单").exists()) {
        back();
        sleep(1000);
      }
      if (descContains("已发货成功，请刷新页面~").exists()) {
        console.verbose("出现 已发货成功，请刷新页面~");
        back();
        sleep(1000);
      }
      if (descContains("尊享寄件").exists() || descContains("特惠寄件").exists() || descContains("服务点寄").exists()) {
        {
          back();
          sleep(1000);
        }
      }
      if (descStartsWith("已发货成功").exists() || textStartsWith("已发货成功").exists()) {
        {
          back();
          sleep(1000);
        }
      }
      if (desc("去发货").exists()) {
        console.info("发货成功");
        break;
      }
      if (descContains("\n去发货").exists()) {
        {
          console.info("发货成功");
          break;
        }
      }
      if (descContains("提醒收货").exists()) {
        console.info("发货成功");
        break;
      }
    }
  }
  toastLog("订单：" + _0x229b81.trade_value1 + "发货成功", "success");
  common.web_log("订单：" + _0x229b81.trade_value1 + "发货成功", "success");
  while (!descContains("\n订单编号\n").exists()) {
    {
      console.verbose("返回到订单详情页面...");
      back();
      sleep(1000);
    }
  }
}
function enter_my_sell_page() {
  common.xy_home();
  console.log("已到达闲鱼首屏");
  common.enter_tab("我的");
  if (!descStartsWith("我卖出的").exists()) {
    {
      scrollUp();
      sleep(500);
    }
  }
  descStartsWith("我卖出的").waitFor();
  sleep(200);
  descStartsWith("我卖出的").findOne().click();
  for (let _0xe2b531 = 0; _0xe2b531 < 15; _0xe2b531++) {
    {
      sleep(2000);
      console.log("等待我卖出的列表加载完毕...");
      if (descStartsWith("联系买家").exists() || descContains("联系买家").exists()) {
        {
          if (setting.xf) {
            setting.order_dep = desc("账单").findOne().depth();
          } else {
            {
              setting.order_dep = text("搜索卖出的宝贝").findOne().depth();
            }
          }
          break;
        }
      }
    }
  }
  if (descContains("没有卖出过宝贝").exists()) {
    toastLog("没有卖出过宝贝");
    return false;
  }
  if (!descStartsWith("联系买家").exists() && !descContains("联系买家").exists()) {
    {
      console.error("订单列表30秒内未加载成功，即将重启闲鱼...");
      console.error("加载失败的原因：1.手机网络异常 2.闲鱼出现bug 3.手机卡顿 4.闲鱼版本异常 5.闲鱼出现了动态更新");
      common.restart_xy();
      return enter_my_sell_page();
    }
  } else {
    console.log("进入'我卖出的'页面");
    return true;
  }
}
function enter_my_buy_page() {
  common.xy_home();
  console.log("已到达闲鱼首屏");
  common.enter_tab("我的");
  if (!descStartsWith("我买到的").exists()) {
    {
      scrollUp();
      sleep(500);
    }
  }
  descStartsWith("我买到的").waitFor();
  sleep(200);
  descStartsWith("我买到的").findOne().click();
  for (let _0x2dc500 = 0; _0x2dc500 < 15; _0x2dc500++) {
    {
      sleep(2000);
      console.log("等待我买到的列表加载完毕...");
      if (descStartsWith("联系卖家").exists() || descContains("联系卖家").exists()) {
        {
          if (setting.xf) {
            setting.order_dep = desc("筛选").findOne().depth();
          } else {
            setting.order_dep = text("搜索买过的宝贝").findOne().depth();
          }
          break;
        }
      }
    }
  }
  if (descContains("你还没有买到过宝贝").exists()) {
    {
      toastLog("你还没有买到过宝贝");
      return false;
    }
  }
  if (!descStartsWith("联系卖家").exists() && !descContains("联系卖家").exists()) {
    {
      console.error("订单列表30秒内未加载成功，即将重启闲鱼...");
      console.error("加载失败的原因：1.手机网络异常 2.闲鱼出现bug 3.手机卡顿 4.闲鱼版本异常 5.闲鱼出现了动态更新");
      common.restart_xy();
      return enter_my_buy_page();
    }
  } else {
    console.log("进入'我买到的'页面");
    return true;
  }
}
function pdd_buy(_0x569b12) {
  let _0x270d91 = _0x569b12.name;
  let _0x13ac8b = _0x569b12.tel;
  let _0x4c7ea3 = _0x569b12.addr;
  let _0x165a9e = _0x270d91 + _0x13ac8b + _0x4c7ea3;
  console.log("闲鱼订单编号：" + _0x569b12.trade_value1);
  console.log("买家信息：" + _0x165a9e);
  setClip(_0x165a9e);
  let _0x1a7a35 = _0x569b12.url;
  let _0x22e57f = _0x1a7a35.match(/goods_id=([0-9]*)/)[1];
  console.log("采购宝贝id：" + _0x22e57f);
  let _0x82c633 = "pinduoduo://com.xunmeng.pinduoduo/goods.html?goods_id=" + _0x22e57f;
  app.startActivity({
    "action": "android.intent.action.VIEW",
    "data": _0x82c633
  });
  while (!text("发起拼单").exists() && !text("免拼购买").exists()) {
    sleep(1000);
    console.verbose("等待发起拼单或免拼购买按钮出现");
  }
  if (!text("去拼单").exists()) {
    console.verbose("未发现'去拼单' 下滑一次");
    scrollDown();
    sleep(1000);
  }
  if (text("免拼购买").exists()) {
    console.verbose("免拼购买");
    text("免拼购买").findOne().parent().click();
    sleep(1000);
  } else if (text("去拼单").exists()) {
    console.verbose("去拼单");
    text("去拼单").findOne().click();
    sleep(1000);
    if (text("参与拼单").exists()) {
      console.verbose("参与拼单");
      text("参与拼单").findOne().click();
    }
  } else {
    console.verbose("发起拼单");
    text("发起拼单").findOne().parent().click();
    sleep(1000);
  }
  while (text("确定").exists()) {
    {
      toastLog("请选择宝贝sku\n宝贝名：" + _0x569b12.item_content + "\n买家名：" + _0x569b12.name + "\n备注：" + _0x569b12.remark);
      sleep(2500);
    }
  }
  console.log("正在加载确认订单界面...");
  text("确认订单").waitFor();
  if (textStartsWith("领券立减").exists()) {
    {
      console.verbose("领取优惠券");
      textStartsWith("领券立减").findOne().parent().click();
      text("领取").waitFor();
      sleep(100);
      text("领取").findOne().click();
      sleep(500);
      back();
      sleep(500);
    }
  }
  console.log("准备处理地址..");
  if (text("手动添加收货地址").exists()) {
    {
      text("手动添加收货地址").findOne().parent().click();
    }
  } else {
    {
      id("pdd").className("android.view.ViewGroup").clickable(true).depth(10).findOne().click();
      text("收货地址").waitFor();
      sleep(200);
      while (desc("删除").exists()) {
        {
          desc("删除").findOne().click();
          text("确定").waitFor();
          sleep(500);
          text("确定").findOne().click();
          sleep(500);
        }
      }
      text("添加收货地址").findOne().parent().click();
    }
  }
  console.verbose("开始自动识别收货信息");
  for (let _0x5d72d2 = 0; _0x5d72d2 < 18; _0x5d72d2++) {
    sleep(360);
    if (text("识别到收货信息，是否填入？").exists()) {
      console.verbose("识别到收货信息，是否填入？");
      text("确定").findOne().click();
      console.verbose("准备点击保存");
      text("保存").waitFor();
      text("保存").findOne().click();
      break;
    }
  }
  console.verbose("识别收货信息结束");
  if (text("添加收货地址").exists()) {
    {
      setText(0, _0x270d91);
      sleep(200);
      setText(1, _0x13ac8b);
      sleep(200);
      setText(2, _0x4c7ea3);
      sleep(200);
    }
  }
  while (text("添加收货地址").exists()) {
    toastLog("请手动处理收货地址..");
    sleep(3000);
  }
  for (let _0x3d43b1 = 0; _0x3d43b1 < 10000; _0x3d43b1++) {
    sleep(1000);
    if (desc("关闭").exists()) {
      {
        sleep(3500);
        toastLog("请手动选择宝贝规格并完成付款（任意付款方式）");
      }
    } else {
      break;
    }
  }
  while (true) {
    toastLog("等待付款完成后出现的订单详情页...");
    sleep(3000);
    if (textStartsWith("查看订单详情").exists() || textStartsWith("查看订单").exists()) {
      if (textStartsWith("查看订单详情").exists()) {
        {
          textStartsWith("查看订单详情").findOne().click();
          console.verbose("点击 查看订单详情");
        }
      } else if (textStartsWith("查看订单").exists()) {
        {
          textStartsWith("查看订单").findOne().click();
          console.verbose("点击 查看订单");
        }
      }
      sleep(1000);
    }
    if (textStartsWith("订单编号").exists()) {
      trade_value1_pdd = textStartsWith("订单编号").findOne().text();
      trade_value1_pdd = trade_value1_pdd.split("： ")[1];
      console.verbose("订单编号：" + trade_value1_pdd);
      if (textContains("确认收货后自动付款¥").exists()) {
        console.verbose("文字 确认收货后自动付款¥");
        price_pdd = textContains("确认收货后自动付款¥").findOne().text();
        price_pdd = price_pdd.split("确认收货后自动付款¥")[1];
      } else if (textContains("实付:,").exists()) {
        console.verbose("文字 实付:,");
        price_pdd = textContains("实付:,").findOne().text();
        price_pdd = price_pdd.split("实付:,")[1];
        price_pdd = price_pdd.split("元,")[0];
      } else if (textContains("实付,").exists()) {
        {
          console.verbose("文字 实付,");
          price_pdd = textContains("实付,").findOne().text();
          price_pdd = price_pdd.split("实付,")[1];
          price_pdd = price_pdd.split("元,")[0];
        }
      } else if (textContains("实付实付,").exists()) {
        {
          console.verbose("实付实付,");
          price_pdd = textContains("实付实付,").findOne().text();
          price_pdd = price_pdd.split("实付实付,")[1];
          price_pdd = price_pdd.split("元,")[0];
        }
      } else if (textContains("先用后付 实付:").exists()) {
        console.verbose("文字 先用后付 实付:");
        price_pdd = textContains("先用后付 实付:").findOne().text();
        const _0x145d47 = price_pdd.match(/实付:.*?[,]?(\d+\.\d+)元/);
        if (_0x145d47) {
          {
            price_pdd = parseFloat(_0x145d47[1]);
          }
        } else {
          {
            price_pdd = 0;
            console.log("未找到价格");
          }
        }
      } else {
        price_pdd = 0;
        console.verbose("未找到价格");
      }
      console.verbose("价格：" + price_pdd);
      let _0xbf59f6 = "采购订单收货信息：\n" + _0x270d91 + " " + _0x13ac8b + "\n" + _0x4c7ea3;
      var _0x4d979b = confirm("请确认是否为同一订单", _0xbf59f6);
      if (_0x4d979b) {
        break;
      }
    }
  }
  threads.start(function () {
    {
      let _0x1a7a35 = setting.api_domain + "set_order";
      order_data = {};
      order_data.access_token = setting.s.get("access_token");
      order_data.trade_value1 = _0x569b12.trade_value1;
      order_data.status = "已采购";
      order_data.price_pdd = price_pdd;
      order_data.trade_value1_pdd = trade_value1_pdd;
      let _0x5a42c2 = http.post(_0x1a7a35, order_data);
      if (_0x5a42c2.body.json().code == "0") {
        threads.start(function () {
          {
            toastLog("订单：" + order_data.trade_value1 + "同步至总控");
            common.web_log("订单：" + order_data.trade_value1 + "下单成功", "success");
          }
        });
      }
    }
  });
}
function start_pdd() {
  if (currentPackage() == setting.pdd_pname) {
    while (!text("首页").exists()) {
      {
        back();
        toastLog("等待拼多多首屏出现");
        sleep(2500);
      }
    }
  } else {
    console.log("正在启动拼多多..");
    launch(setting.pdd_pname);
    sleep(1000);
    common.allow_open();
    while (!text("首页").exists()) {
      back();
      toastLog("等待拼多多首屏出现");
      sleep(2500);
    }
  }
}
function enter_pdd_dsh_page() {
  start_pdd();
  console.verbose("拼多多已启动");
  text("个人中心").waitFor();
  text("个人中心").findOne().parent().click();
  text("待收货").waitFor();
  text("待收货").findOne().parent().click();
  for (let _0x188e5e = 0; _0x188e5e < 10; _0x188e5e++) {
    sleep(1000);
    if (textStartsWith("实付").exists() || textStartsWith("先用后付 实付").exists()) {
      {
        break;
      }
    }
  }
  if (!textStartsWith("实付").exists() && !textStartsWith("先用后付 实付").exists()) {
    {
      toastLog("无待收货订单或因网络异常页面加载失败...");
      return false;
    }
  }
  toastLog("已进入拼多多订单页面");
  return true;
}
function get_pdd_orders(_0xa17cf7) {
  console.log("开始采集拼多多订单列表...");
  var _0x5f42d2 = true;
  var _0x4f5f4b = [];
  setting.get_pdd_orders_threads = threads.start(function () {
    {
      sleep(20000);
      pdd_order_length = 0;
      while (true) {
        pdd_order_length = _0x4f5f4b.length;
        console.verbose("订单数量监控线程：" + pdd_order_length);
        while (text("安全验证").exists()) {
          toastLog("等待完成安全验证..");
          sleep(10000);
        }
        sleep(15000);
        while (text("安全验证").exists()) {
          {
            toastLog("等待完成安全验证..");
            sleep(10000);
          }
        }
        if (pdd_order_length == _0x4f5f4b.length) {
          {
            console.verbose("订单数量监控线程：已加载全部拼多多订单");
            _0x5f42d2 = false;
            break;
          }
        }
      }
    }
  });
  while (_0x5f42d2) {
    var _0x40d58d = text("查看物流").find();
    for (let _0x41c2be = 0; _0x41c2be < _0x40d58d.length; _0x41c2be++) {
      {
        var _0x2920ca = text("确认收货").find()[_0x41c2be].parent().parent().parent().find(desc("商品图片"))[0].parent();
        _0x2920ca.click();
        console.log("等待'订单编号'加载完毕");
        textStartsWith("订单编号：").waitFor();
        sleep(200);
        if (text("查看更多订单信息").exists()) {
          console.verbose("点击‘查看更多订单信息’");
          text("查看更多订单信息").findOne().click();
          sleep(1000);
        } else if (text("查看更多订单和优惠信息").exists()) {
          {
            console.verbose("点击‘查看更多订单和优惠信息’");
            text("查看更多订单和优惠信息").findOne().click();
            sleep(1000);
          }
        } else {
          {
            console.verbose("未点击查看更多订单信息");
          }
        }
        var _0x1cfe97 = {};
        scrollDown();
        sleep(500);
        console.verbose("订单编号出现");
        textStartsWith("订单编号：").waitFor();
        sleep(50);
        _0x1cfe97.trade_value1_pdd = textStartsWith("订单编号：").findOne().text().split("：")[1].trim();
        console.verbose("物流公司出现");
        textStartsWith("物流公司：").waitFor();
        sleep(50);
        _0x1cfe97.courier_company = textStartsWith("物流公司：").findOne().text().split("：")[1].trim();
        console.verbose("快递单号出现");
        textStartsWith("快递单号：").waitFor();
        sleep(50);
        _0x1cfe97.courier_number = textStartsWith("快递单号：").findOne().text().split("：")[1].trim();
        console.verbose("下单时间出现");
        textStartsWith("下单时间：").waitFor();
        sleep(50);
        _0x1cfe97.trade_value3_pdd = textStartsWith("下单时间：").findOne().text().split("：")[1].trim();
        console.verbose("订单信息获取成功");
        if (_0x4f5f4b.indexOf(_0x1cfe97.trade_value1_pdd) == -1) {
          toastLog("开始同步第" + (_0x4f5f4b.length + 1) + "单");
          _0x4f5f4b.push(_0x1cfe97.trade_value1_pdd);
        } else {
          toastLog("该订单已同步");
          back();
          sleep(2000);
          continue;
        }
        console.log(_0x1cfe97);
        let _0x53a430 = setting.api_domain + "set_order";
        _0x1cfe97.access_token = setting.s.get("access_token");
        let _0x2589c6 = http.post(_0x53a430, _0x1cfe97);
        let _0x4e06e7 = _0x2589c6.body.json();
        if (_0x4e06e7.code == "0") {
          {
            threads.start(function () {
              toastLog(_0x1cfe97.trade_value1_pdd + "状态已同步至总控");
              common.web_log("拼多多订单：" + _0x1cfe97.trade_value1_pdd + "状态更新成功", "success");
            });
          }
        } else {
          toastLog("非系统管理的订单");
          console.verbose("该拼多多订单为用户手动下单，系统无法关联订单");
        }
        if (_0xa17cf7 > _0x1cfe97.trade_value3_pdd) {
          {
            toastLog("已加载" + _0xa17cf7 + "之后的全部订单..");
            _0x5f42d2 = false;
            back();
            break;
          }
        }
        if (!text("我的订单").exists()) {
          back();
          sleep(2000);
        }
      }
    }
    text("确认收货").findOne().parent().parent().parent().parent().scrollForward();
    sleep(900);
  }
  setting.get_pdd_orders_threads.interrupt();
  back();
}
function xy_order_details_down() {
  if (className("android.widget.ScrollView").depth(setting.order_dep - 2).exists()) {
    {
      className("android.widget.ScrollView").depth(setting.order_dep - 2).findOne().scrollForward();
      sleep(300);
    }
  } else {
    {
      console.verbose("订单详情页下滑控件不存在...");
    }
  }
}
function xy_order_details_up() {
  if (className("android.widget.ScrollView").depth(setting.order_dep - 2).exists()) {
    className("android.widget.ScrollView").depth(setting.order_dep - 2).findOne().scrollBackward();
    sleep(300);
  } else {
    {
      console.verbose("订单详情页上滑控件不存在...");
    }
  }
}
function xy_order_list_down() {
  if (desc("账单").exists()) {
    if (depth(setting.order_dep + 4).indexInParent(0).scrollable().exists()) {
      return depth(setting.order_dep + 4).indexInParent(0).scrollable().findOne().scrollForward();
    } else {
      return false;
    }
  } else {
    {
      console.verbose("订单列表下滑控件不存在...");
      return false;
    }
  }
}
module.exports = pdd;