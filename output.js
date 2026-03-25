//Wed Mar 25 2026 02:21:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"ui";
"ui";

importClass(android.content.Context);
importClass(android.provider.Settings);
const PackageName = context.getPackageName();
importClass(android.net.Uri);
importClass(android.content.Intent);
importClass(android.widget.PopupWindow);
importClass(android.view.Gravity);
importClass(android.view.ViewGroup);
importClass(android.view.animation.ScaleAnimation);
importClass(android.view.animation.Animation);
var setting = require("./setting.js");
var sys_msg = require("./sys_msg.js");
var common = require("./common.js");
var init = require("./init.js");
var goods_add = require("./goods_add.js");
var post_add = require("./post_add.js");
var goods_manage_b = require("./goods_manage_b.js");
var order = require("./order.js");
var wbzz = require("./wbzz.js");
var message = require("./message.js");
var ws = require("./ws.js");
var bz = require("./bz.js");
var hs = require("./hs.js");
var dy = require("./dy.js");
if (setting.xds_name.indexOf(sys_msg.sys_name) != -1) {
  bz.show_bzui();
} else {
  showMainUI();
}
threads.start(function () {
  init.run();
});
function showMainUI() {
  ui.layout("<drawer id=\"drawer\">            <vertical>                <appbar>                    <toolbar id=\"toolbar\" title=\"{{sys_msg.sys_name}}\"/>                    <tabs id=\"tabs\"/>                </appbar>                <viewpager id=\"viewpager\">                    <frame>                        <ScrollView><vertical>                                <card w=\"*\" h=\"auto\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <horizontal>                                        <vertical margin=\"10\" layout_gravity=\"center_vertical\" layout_weight=\"2\">                                            <text id=\"username\" size=\"18\" color=\"#444444\" text=\"加载中...\"/>                                            <text id=\"end_time\"  padding=\"1\" size=\"15\" text=\"到期时间：2019-07-19 16:00:00\" foreground=\"?selectableItemBackground\"/>                                            <text id=\"phone_name\"  padding=\"1\" size=\"13\" text=\"设备名加载中...\" />                                        </vertical>                                        <button id=\"login\" w=\"88dp\" text=\"登录账号\"  color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                    </horizontal>                                </card>                                <card w=\"*\" h=\"auto\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"{{auto.service != null}}\" text=\"开启无障碍服务\" id=\"autoService\"/>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装稳定版闲鱼\" id=\"initXyApp\"/>                                        <horizontal w=\"*\" margin=\"20 0\">                                            <text w=\"112dp\">闲鱼版本{{setting.xy_app_version_e}}</text>                                            <button id=\"down_xy_e\"  h=\"30\" padding=\"10 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                        </horizontal>                                        <horizontal w=\"*\" margin=\"20 0\">                                            <text id=\"now_xyv\" w=\"112dp\">版本检测中...</text>                                            <text id=\"now_xyv_msg\" padding=\"10 0\"></text>                                        </horizontal>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"\" text=\"连接总服务器\" id=\"initWs\"/>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"true\" text=\"屏幕截图权限\" id=\"jietu\"/>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"true\" text=\"内核自动更新\" id=\"\"/>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"程序后台运行\" id=\"IgnoredPower\"/>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"悬浮运行日志\" id=\"log_floaty\"/>                                    </vertical>                                </card>                                <card w=\"*\" layout_weight=\"1\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical margin=\"0 5\">                                        <horizontal>                                            <text margin=\"10 3\">心跳保活线程：</text>                                            <text color=\"#ff5d85ff\" margin=\"1 4\" id=\"xintiao\">网络状态检测中...</text>                                        </horizontal>                                        <horizontal>                                            <text margin=\"10 3\">后台弹出界面：</text>                                            <text color=\"#ff5d85ff\" margin=\"1 4\" id=\"houtai_tanchu\">权限状态检测中...</text>                                        </horizontal>                                        <horizontal>                                            <text margin=\"10 3\">程序内核版本：</text>                                            <text id=\"android_banben\" color=\"#ff5d85ff\" margin=\"1 4\">{{setting.v2}}</text>                                        </horizontal>                                        <horizontal>                                            <text margin=\"10 3\">设备内存剩余：</text>                                            <text id=\"AvailMem\" color=\"#ff5d85ff\" margin=\"1 4\">检测中...</text>                                        </horizontal>                                        <horizontal>                                            <text margin=\"10 3\">设备安卓版本：</text>                                            <text id=\"android_ver\" color=\"#ff5d85ff\" margin=\"1 4\">检测中...</text>                                        </horizontal>                                    </vertical>                                </card>                                <card w=\"*\" layout_weight=\"1\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical margin=\"0 5\">                                        <text margin=\"10 3\">程序任务队列：</text>                                        <text color=\"#ff5d85ff\" margin=\"10 3\" ellipsize=\"end\" ems=\"20\" line=\"5\" id=\"task_list_text\" text=\"任务队列正常|等待任务中...\"></text>                                    </vertical>                                </card>                        </vertical></ScrollView>                    </frame>                    <frame>                        <ScrollView><vertical>                            <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                <vertical margin=\"2\">                                    <text text=\"基础功能:\" margin=\"3\"/>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"clear_img\" text=\"清除缓存\"/>                                        <button layout_weight=\"1\" id=\"clear_task\" text=\"清空队列\"/>                                        <button layout_weight=\"1\" id=\"restart_task\" text=\"重启队列\"/>                                        <button layout_weight=\"1\" id=\"restart_app\" text=\"重启内核\"/>                                    </horizontal>                                </vertical>                            </card>                            <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                <vertical margin=\"2\">                                    <text text=\"闲鱼功能:\" margin=\"3\"/>                                    <horizontal >                                        <Switch layout_weight=\"1\" margin=\"3 3 3 9\" textColor=\"#666666\" checked=\"false\" text=\"消息自动回复|聚合聊天|自动上架\" id=\"auto_monitor\"/>                                    </horizontal>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"yanghao\" text=\"闲鱼养号\"/>                                        <button layout_weight=\"1\" id=\"yanghao_unity\" text=\"互助养号\"/>                                        <button layout_weight=\"1\" id=\"yanghao_tz\" text=\"会玩养号\"/>                                        <button layout_weight=\"1\" id=\"re_edit\" text=\"编辑重发\"/>                                    </horizontal>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"xy_goods_polish\" text=\"擦亮商品\"/>                                        <button layout_weight=\"1\" id=\"xy_goods_shelf_up\" text=\"上架商品\"/>                                        <button layout_weight=\"1\" id=\"xy_goods_shelf_down\" text=\"下架商品\"/>                                        <button layout_weight=\"1\" id=\"xy_del_down_goods\" text=\"删除商品\"/>                                    </horizontal>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"xy_init\" text=\"绑定闲鱼\"/>                                        <button layout_weight=\"1\" id=\"register\" text=\"签到鱼币\"/>                                        <button layout_weight=\"1\" id=\"xy_goods_price_cut\" text=\"一键降价\"/>                                        <button layout_weight=\"1\" id=\"remove_dongtai\" text=\"删除动态\"/>                                    </horizontal>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"del_message\" text=\"删除消息\"/>                                        <button layout_weight=\"1\" id=\"remove_liuyan\" text=\"删除留言\"/>                                        <button layout_weight=\"1\" id=\"xy_post_del\" text=\"删除帖子\"/>                                        <button layout_weight=\"1\" id=\"first_show\" text=\"优先曝光\"/>                                    </horizontal>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"fast_goods_del\" text=\"快速下架\"/>                                        <button layout_weight=\"1\" id=\"xy_goods_get\" text=\"宝贝信息\"/>                                        <button layout_weight=\"1\" id=\"fast_re_edit\" text=\"快速编辑\"/>                                        <button layout_weight=\"1\" id=\"get_order\" text=\"同步订单\"/>                                    </horizontal>                                </vertical>                            </card>                            <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                <vertical margin=\"2\">                                    <text text=\"转转功能:\" margin=\"3\"/>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"zz_goods_rub\" text=\"擦亮商品\"/>                                        <button layout_weight=\"1\" id=\"zz_goods_up\" text=\"上架商品\"/>                                        <button layout_weight=\"1\" id=\"zz_goods_down\" text=\"下架商品\"/>                                        <button layout_weight=\"1\" id=\"zz_goods_del\" text=\"删除商品\"/>                                    </horizontal>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"zz_yanghao\" text=\"转转养号\"/>                                        <button layout_weight=\"1\" id=\"zz_re_edit\" text=\"流量模式\"/>                                        <button layout_weight=\"1\" id=\"\" text=\"暂无功能\"/>                                        <button layout_weight=\"1\" id=\"open_zz\" text=\"启动转转\"/>                                    </horizontal>                                </vertical>                            </card>                            <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                <vertical margin=\"2\">                                    <text text=\"红薯功能:\" margin=\"3\"/>                                    <horizontal >                                        <button layout_weight=\"1\" id=\"hs_yanghao\" text=\"红薯养号\"/>                                        <button layout_weight=\"1\" id=\"hs_flow_search\" text=\"搜索养号\"/>                                        <button layout_weight=\"1\" id=\"hs_post_del\" text=\"删除笔记\"/>                                        <button layout_weight=\"1\" id=\"open_hs\" text=\"启动红薯\"/>                                    </horizontal>                                </vertical>                            </card>                        </vertical></ScrollView>                    </frame>                    <frame>                        <vertical>                            <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                <vertical  h=\"*\">                                    <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装转转 {{setting.zz_app_version}}\" id=\"initZzApp\"/>                                    <horizontal w=\"*\" margin=\"20 0\">                                        <text >当前版本 </text>                                        <text id=\"now_zzv\" w=\"50dp\">检测中...</text>                                        <button id=\"down_zz\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                    </horizontal>                                    <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装抖音 {{setting.dy_app_version}}\" id=\"initDyApp\"/>                                    <horizontal w=\"*\" margin=\"20 0\">                                        <text >当前版本 </text>                                        <text id=\"now_dyv\" w=\"50dp\">检测中...</text>                                        <button id=\"down_dy\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                    </horizontal>                                    <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装拼多多 {{setting.pdd_app_version}}\" id=\"initPddApp\"/>                                    <horizontal w=\"*\" margin=\"20 0\">                                        <text >当前版本 </text>                                        <text id=\"now_pddv\" w=\"50dp\">检测中...</text>                                        <button id=\"down_pdd\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                    </horizontal>                                    <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装小红书 {{setting.hs_app_version}}\" id=\"initXhsApp\"/>                                    <horizontal w=\"*\" margin=\"20 0\">                                        <text >当前版本 </text>                                        <text id=\"now_xhsv\" w=\"50dp\">检测中...</text>                                        <button id=\"down_xhs\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                    </horizontal>                                </vertical>                                <text h=\"20\" layout_gravity=\"left|bottom\" text=\"如您希望能控制其他软件，可以向管理员反应\" margin=\"12 1\" textColor=\"#666666\"  textSize=\"12sp\"/>                            </card>                        </vertical>                    </frame>                    <frame>                        <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                            <vertical padding=\"8\" h=\"auto\">                                <vertical >                                    <com.stardust.autojs.core.console.ConsoleView  id=\"console\"  h=\"*\"/>                                </vertical>                            </vertical>                        </card>                    </frame>                </viewpager>            </vertical>        </drawer>");
  ui.emitter.on("create_options_menu", _0x1a1571 => {
    _0x1a1571.add("关于");
  });
  ui.emitter.on("options_item_selected", (_0x375767, _0xedead) => {
    {
      switch (_0xedead.getTitle()) {
        case "关于":
          toast(sys_msg.sys_name + " v" + setting.v2);
          break;
      }
      _0x375767.consumed = true;
    }
  });
  activity.setSupportActionBar(ui.toolbar);
  ui.viewpager.setTitles(["基本环境", "常用功能", "其他环境", "运行日志"]);
  ui.tabs.setupWithViewPager(ui.viewpager);
  ui.console.setConsole(runtime.console);
  try {
    {
      ui.console.setInputEnabled(false);
      ui.console.setColor("V", "#c2c2c2");
      ui.console.setColor("D", "#cc000000");
      ui.console.setColor("I", "#009688");
      ui.console.setColor("W", "#1E9FFF");
      ui.console.setColor("E", "#FF5722");
    }
  } catch (_0x56a304) {
    let _0x305130 = new android.util.SparseArray();
    let _0x2cd30c = android.util.Log;
    _0x305130.put(_0x2cd30c.VERBOSE, new java.lang.Integer(colors.parseColor("#c2c2c2")));
    _0x305130.put(_0x2cd30c.INFO, new java.lang.Integer(colors.parseColor("#009688")));
    _0x305130.put(_0x2cd30c.ERROR, new java.lang.Integer(colors.parseColor("#FF5722")));
    _0x305130.put(_0x2cd30c.WARN, new java.lang.Integer(colors.parseColor("#1E9FFF")));
    _0x305130.put(_0x2cd30c.DEBUG, new java.lang.Integer(colors.parseColor("#cc000000")));
    _0x305130.put(_0x2cd30c.ASSERT, new java.lang.Integer(colors.parseColor("#ffff534e")));
    ui.console.setColors(_0x305130);
    try {
      {
        input_container = activity.findViewById(context.getResources().getIdentifier("input_container", "id", context.getPackageName()));
        input_container.attr("visibility", "gone");
      }
    } catch (_0x5368a8) {
      {
        input_container = activity.findViewById(context.getResources().getIdentifier("inputContainer", "id", context.getPackageName()));
        input_container.attr("visibility", "gone");
      }
    }
  }
  ui.initWs.on("click", function () {
    {
      if (auto.service == null) {
        ui.initWs.checked = false;
        let _0x538dd7 = "请先开启无障碍服务";
        toast(_0x538dd7);
        console.error(_0x538dd7);
        return false;
      }
      if (!setting.s.contains("access_token")) {
        {
          ui.initWs.checked = false;
          let _0x1fea7f = "请先进行登录";
          toast(_0x1fea7f);
          console.error(_0x1fea7f);
          return false;
        }
      }
      main();
    }
  });
  ui.login.on("click", function (_0x56fcef) {
    setting.s.remove("access_token");
    setting.s.remove("username");
    setting.s.remove("end_time");
    ui.username.setText("请登录账号");
    ui.login.setText("登录账号");
    showLoginUI();
  });
  ui.emitter.on("resume", function () {
    {
      common.init_ui();
      if (ui.autoService) {
        if (auto.service != null) {
          ui.autoService.checked = true;
          setting.click_autoService = false;
        } else {
          ui.autoService.checked = false;
          if (setting.click_autoService) {
            ui.viewpager.currentItem = 4;
            console.warn("请点击基本环境->开启无障碍服务，如您的无障碍服务无法开启，请参考：\n1.确保开启的位置正确，如不确定请截图咨询我们（新用户容易开错位置）\n2.尝试关闭无障碍后再开启，或可以直接重启手机（此为安卓系统的bug）\n3.将外接的数据线拔掉后再开启，可能与您连接的某种服务冲突（如tc）\n4.提示'某应用遮挡了权限请求界面'，是因为某应用开了悬浮窗遮挡了本应用，关闭该应用的悬浮窗就好了\n5.部分年代久远的小众手机无无障碍服务，比如小辣椒、朵唯手机");
          }
        }
        try {
          {
            if ($power_manager.isIgnoringBatteryOptimizations()) {
              ui.IgnoredPower.checked = true;
            } else {
              ui.IgnoredPower.checked = false;
              console.warn("需开启忽略电池优化才能保证脚本后台运行（省电策略选择无限制）");
            }
          }
        } catch (_0x58b9d8) {
          console.verbose("跳过电池优化检测");
        }
        ui.initXyApp.checked = common.xyv_correct();
        ui.auto_monitor.checked = setting.auto_monitor != null && setting.auto_monitor.isAlive();
        houtai_tanchu();
      }
      authenticate();
    }
  });
  ui.autoService.on("check", function (_0x2c8ced) {
    if (_0x2c8ced && auto.service == null) {
      setting.click_autoService = true;
      app.startActivity({
        "action": "android.settings.ACCESSIBILITY_SETTINGS"
      });
    }
  });
  ui.log_floaty.on("check", function (_0x5bd1c5) {
    if (_0x5bd1c5) {
      setting.s.put("log_floaty", true);
      if ($floaty.checkPermission()) {
        show_log_floaty();
        toastLog("悬浮运行日志已开启");
      } else {
        {
          toastLog("请开启悬浮窗权限");
          ui.log_floaty.checked = false;
          $floaty.requestPermission();
        }
      }
    } else {
      setting.s.put("log_floaty", false);
      setting.log_floaty = null;
      floaty.closeAll();
    }
  });
  ui.IgnoredPower.on("check", function (_0x4d4a97) {
    try {
      if (_0x4d4a97 && !$power_manager.isIgnoringBatteryOptimizations()) {
        {
          console.log("需开启忽略电池优化才能保证脚本后台运行（省电策略选择无限制）");
          $power_manager.requestIgnoreBatteryOptimizations();
        }
      }
    } catch (_0x27b36c) {
      console.verbose("跳过电池优化检测");
    }
  });
  ui.jietu.on("check", function (_0x31159) {});
  ui.initXyApp.on("check", function (_0x2df174) {
    {
      if (_0x2df174) {
        let _0x3e3d9f = "";
        if (common.xyv_correct()) {
          _0x3e3d9f = "稳定版闲鱼初始化完成";
        } else {
          {
            if (setting.is_install_app) {
              {
                toastLog("正在下载其他App");
                ui.initXyApp.checked = false;
                return;
              }
            }
            if (auto.service != null) {
              ui.viewpager.currentItem = 4;
              _0x3e3d9f = "正在安装稳定版闲鱼";
              toast(_0x3e3d9f);
              console.log(_0x3e3d9f);
              console.log("请等待稳定版闲鱼安装完成...");
              threads.start(function () {
                init.install("xy");
              });
            } else {
              _0x3e3d9f = "请先开启无障碍服务";
              toast(_0x3e3d9f);
              console.log(_0x3e3d9f);
              ui.initXyApp.checked = false;
            }
          }
        }
      }
    }
  });
  ui.initZzApp.on("check", function (_0xb3a95d) {
    if (_0xb3a95d) {
      if (common.getVersionName(setting.zz_pname) == setting.zz_app_version) {} else {
        {
          if (setting.is_install_app) {
            {
              toastLog("正在下载其他App");
              ui.initZzApp.checked = false;
              return;
            }
          }
          if (auto.service != null) {
            {
              ui.viewpager.currentItem = 4;
              let _0x289c1b = "正在安装转转App";
              toast(_0x289c1b);
              console.log(_0x289c1b);
              threads.start(function () {
                {
                  init.install("zz");
                }
              });
            }
          } else {
            let _0x47d91a = "请先开启无障碍服务";
            toast(_0x47d91a);
            console.log(_0x47d91a);
            ui.initZzApp.checked = false;
          }
        }
      }
    }
  });
  ui.initDyApp.on("check", function (_0xb2f76c) {
    {
      if (_0xb2f76c) {
        if (common.getVersionName(setting.dy_pname) == setting.dy_app_version) {
          {}
        } else {
          if (setting.is_install_app) {
            {
              toastLog("正在下载其他App");
              ui.initDyApp.checked = false;
              return;
            }
          }
          if (auto.service != null) {
            ui.viewpager.currentItem = 4;
            let _0x13b9c2 = "正在安装抖音App";
            toast(_0x13b9c2);
            console.log(_0x13b9c2);
            threads.start(function () {
              {
                init.install("dy");
              }
            });
          } else {
            {
              let _0x370557 = "请先开启无障碍服务";
              toast(_0x370557);
              console.log(_0x370557);
              ui.initDyApp.checked = false;
            }
          }
        }
      }
    }
  });
  ui.initPddApp.on("check", function (_0x38a6bb) {
    if (_0x38a6bb) {
      {
        if (common.getVersionName(setting.pdd_pname) == setting.pdd_app_version) {} else {
          if (setting.is_install_app) {
            toastLog("正在下载其他App");
            ui.initPddApp.checked = false;
            return;
          }
          if (auto.service != null) {
            ui.viewpager.currentItem = 4;
            let _0x2a899d = "正在安装拼多多App";
            toast(_0x2a899d);
            console.log(_0x2a899d);
            threads.start(function () {
              init.install("pdd");
            });
          } else {
            let _0x23d454 = "请先开启无障碍服务";
            toast(_0x23d454);
            console.log(_0x23d454);
            ui.initPddApp.checked = false;
          }
        }
      }
    }
  });
  ui.initXhsApp.on("check", function (_0x5df44b) {
    if (_0x5df44b) {
      if (common.getVersionName(setting.hs_pname) == setting.hs_app_version) {} else {
        if (setting.is_install_app) {
          {
            toastLog("正在下载其他App");
            ui.initXhsApp.checked = false;
            return;
          }
        }
        if (auto.service != null) {
          ui.viewpager.currentItem = 4;
          let _0x4a9479 = "正在安装小红书App";
          toast(_0x4a9479);
          console.log(_0x4a9479);
          threads.start(function () {
            init.install("xhs");
          });
        } else {
          {
            let _0x1c9f2d = "请先开启无障碍服务";
            toast(_0x1c9f2d);
            console.log(_0x1c9f2d);
            ui.initXhsApp.checked = false;
          }
        }
      }
    }
  });
  ui.auto_monitor.on("check", function (_0x1bbbbe) {
    if (_0x1bbbbe) {
      ui.viewpager.currentItem = 4;
      if (setting.auto_monitor == null || !setting.auto_monitor.isAlive()) {
        message.auto_monitor();
      }
    } else {
      setting.auto_monitor.interrupt();
    }
  });
  ui.clear_img.on("click", function (_0x34d4d5) {
    {
      toast("清除缓存");
      ui.viewpager.currentItem = 4;
      common.clear_img();
      toastLog("清除缓存成功");
    }
  });
  ui.clear_task.on("click", function (_0x1cbb70) {
    {
      toast("清空任务队列");
      ui.viewpager.currentItem = 4;
      common.clear_task();
      toastLog("清空任务队列成功");
    }
  });
  ui.restart_task.on("click", function (_0x35dc0a) {
    toast("重启任务队列");
    ui.viewpager.currentItem = 4;
    common.restart_task();
    toastLog("重启任务队列成功");
  });
  ui.restart_app.on("click", function (_0x3b55bb) {
    toast("重启内核");
    ui.viewpager.currentItem = 4;
    common.restart_aj();
  });
  ui.down_xy_e.on("click", function (_0x59ffb9) {
    {
      toast("浏览器下载闲鱼");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.xy_app_url_e);
    }
  });
  ui.down_zz.on("click", function (_0x19a047) {
    {
      toast("浏览器下载转转");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.zz_app_url);
    }
  });
  ui.down_dy.on("click", function (_0x5c372e) {
    toast("浏览器下载抖音");
    ui.viewpager.currentItem = 4;
    common.browser_down(setting.dy_app_url);
  });
  ui.down_pdd.on("click", function (_0x2e0c26) {
    toast("浏览器下载拼多多");
    ui.viewpager.currentItem = 4;
    common.browser_down(setting.pdd_app_url);
  });
  ui.down_xhs.on("click", function (_0x5a2229) {
    toast("浏览器下载小红书");
    ui.viewpager.currentItem = 4;
    common.browser_down(setting.xhs_app_url);
  });
  ui.hs_yanghao.on("click", function (_0x4a9486) {
    toast("红薯养号");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "hs.yanghao",
      "task_type_name": "红薯养号"
    });
  });
  ui.hs_flow_search.on("click", function (_0x550bdc) {
    toast("红薯搜索养号");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "hs.flow_search",
      "task_type_name": "红薯搜索养号"
    });
  });
  ui.hs_post_del.on("click", function (_0x4677b2) {
    toast("红薯删除笔记");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "hs.post_del",
      "task_type_name": "红薯删除笔记"
    });
  });
  ui.open_hs.on("click", function (_0x2c2529) {
    toast("启动红薯");
    ui.viewpager.currentItem = 4;
    threads.start(function () {
      {
        common.hs_home();
      }
    });
  });
  ui.zz_goods_rub.on("click", function (_0x5d7329) {
    {
      toast("擦亮商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "wbzz.zz_goods_polish",
        "task_type_name": "擦亮转转商品"
      });
    }
  });
  ui.zz_goods_down.on("click", function (_0x4ca0a0) {
    toast("下架商品");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "wbzz.zz_goods_shelf_down",
      "task_type_name": "下架转转商品"
    });
  });
  ui.zz_goods_up.on("click", function (_0x110d7a) {
    {
      toast("上架商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "wbzz.zz_goods_shelf_up",
        "task_type_name": "上架转转商品"
      });
    }
  });
  ui.zz_goods_del.on("click", function (_0x490660) {
    toast("删除商品");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "wbzz.zz_goods_del",
      "task_type_name": "删除转转商品"
    });
  });
  ui.zz_yanghao.on("click", function (_0x242098) {
    toast("自动养号");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "wbzz.zz_yanghao",
      "task_type_name": "转转自动养号"
    });
  });
  ui.zz_re_edit.on("click", function (_0x9bb8ee) {
    toast("流量模式");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "wbzz.zz_re_edit",
      "task_type_name": "转转流量模式"
    });
  });
  ui.open_zz.on("click", function (_0x1bb8ff) {
    toast("启动转转");
    ui.viewpager.currentItem = 4;
    threads.start(function () {
      common.zz_home();
    });
  });
  ui.yanghao.on("click", function (_0x28edae) {
    {
      toast("闲鱼养号");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.yanghao",
        "task_type_name": "闲鱼养号"
      });
    }
  });
  ui.yanghao_unity.on("click", function (_0x215623) {
    {
      toast("互助养号");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.yanghao_unity",
        "task_type_name": "闲鱼互助养号"
      });
    }
  });
  ui.yanghao_tz.on("click", function (_0x499c4d) {
    {
      toast("会玩养号");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.yanghao_tz",
        "task_type_name": "闲鱼会玩养号"
      });
    }
  });
  ui.re_edit.on("click", function (_0x5dff46) {
    {
      toast("编辑重发");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_re_edit",
        "task_type_name": "闲鱼编辑重发"
      });
    }
  });
  ui.fast_re_edit.on("click", function (_0x5ce3da) {
    {
      toast("快速编辑");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_fast_re_edit",
        "task_type_name": "闲鱼快速编辑"
      });
    }
  });
  ui.xy_goods_polish.on("click", function (_0x584759) {
    {
      toast("擦亮商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_polish",
        "task_type_name": "擦亮闲鱼商品"
      });
    }
  });
  ui.xy_goods_shelf_up.on("click", function (_0x227fc9) {
    {
      toast("上架商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_shelf_up",
        "task_type_name": "上架闲鱼商品"
      });
    }
  });
  ui.xy_goods_shelf_down.on("click", function (_0x1a9414) {
    toast("下架商品");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.xy_goods_shelf_down",
      "task_type_name": "下架闲鱼商品"
    });
  });
  ui.xy_del_down_goods.on("click", function (_0x3dc955) {
    toast("删除商品");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.xy_del_down_goods",
      "task_type_name": "删除闲鱼商品"
    });
  });
  ui.xy_init.on("click", function (_0x59bb4a) {
    toast("绑定闲鱼");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.xy_init",
      "task_type_name": "绑定闲鱼"
    });
  });
  ui.register.on("click", function (_0x510904) {
    toast("签到鱼币");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.register",
      "task_type_name": "闲鱼签到鱼币"
    });
  });
  ui.xy_goods_price_cut.on("click", function (_0x3898ba) {
    {
      toast("一键降价");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_price_cut",
        "task_type_name": "闲鱼一键降价"
      });
    }
  });
  ui.remove_dongtai.on("click", function (_0x528204) {
    toast("删除动态");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.remove_dongtai",
      "task_type_name": "删除闲鱼动态"
    });
  });
  ui.del_message.on("click", function (_0x57a54e) {
    {
      toast("删除消息");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.del_message",
        "task_type_name": "删除闲鱼消息"
      });
    }
  });
  ui.remove_liuyan.on("click", function (_0x472296) {
    {
      toast("删除留言");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.remove_liuyan",
        "task_type_name": "删除闲鱼留言"
      });
    }
  });
  ui.xy_post_del.on("click", function (_0x140c5c) {
    {
      toast("删除帖子");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "post_add.xy_post_del",
        "task_type_name": "删除闲鱼帖子"
      });
    }
  });
  ui.first_show.on("click", function (_0x497b40) {
    toast("优先曝光");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.first_show",
      "task_type_name": "闲鱼优先曝光"
    });
  });
  ui.fast_goods_del.on("click", function (_0x5c9454) {
    toast("快速下架");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.fast_goods_del",
      "task_type_name": "闲鱼快速下架"
    });
  });
  ui.xy_goods_get.on("click", function (_0x4bab3e) {
    toast("宝贝信息");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "goods_manage.xy_goods_get",
      "task_type_name": "闲鱼宝贝信息"
    });
  });
  ui.get_order.on("click", function (_0xf573d9) {
    toast("同步订单");
    ui.viewpager.currentItem = 4;
    setting.task_list.push({
      "task_type": "order.get_order",
      "task_type_name": "同步闲鱼订单"
    });
  });
}
function showLoginUI() {
  var _0x2f6f4b = ui.inflate("<vertical layout_weight=\"1\" gravity=\"center\" bg=\"#00ffffff\">            <vertical gravity=\"center\" margin=\"25\" bg=\"#ffffff\">            <text text=\"{{sys_msg.sys_name}}系统账号\" size=\"15\" color=\"#000000\" padding=\"24 10\" />            <vertical margin=\"25 0 25 10\">                <linear>                <text gravity=\"center\" color=\"#555555\" size=\"17\" text=\"账号 \" />                <input textColor=\"#000000\" id=\"username2\" w=\"*\" />                </linear>                <linear>                <text gravity=\"center\" color=\"#555555\" size=\"17\" text=\"密码 \" />                <input textColor=\"#000000\" id=\"password2\" w=\"*\" password=\"true\" />                </linear>            </vertical>            <relative>                <button id=\"cancel2\" layout_alignParentLeft=\"true\" text=\"取消\" style=\"Widget.AppCompat.Button.Borderless.Colored\" w=\"auto\"/>                <button id=\"login2\" layout_alignParentRight=\"true\" text=\"登录\" style=\"Widget.AppCompat.Button.Borderless.Colored\" w=\"auto\"/>            </relative>            </vertical>        </vertical>", null, false);
  let _0x38e9e8 = new PopupWindow(_0x2f6f4b, ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, true);
  _0x38e9e8.setFocusable(true);
  _0x38e9e8.setOutsideTouchable(false);
  _0x38e9e8.setContentView(_0x2f6f4b);
  _0x38e9e8.setOnDismissListener(new PopupWindow.OnDismissListener({
    "onDismiss": function () {
      backgroundAlpha(1);
    }
  }));
  _0x38e9e8.showAtLocation(activity.getWindow().getDecorView(), Gravity.CENTER, 0, 0);
  let _0x431d63 = new ScaleAnimation(0, 1, 0, 1, Animation.RELATIVE_TO_SELF, 0.5, 1, 0.5);
  _0x431d63.setDuration(500);
  _0x2f6f4b.startAnimation(_0x431d63);
  backgroundAlpha(0.5);
  _0x2f6f4b.login2.click(function () {
    if (!_0x2f6f4b.username2.text()) {
      {
        toastLog("请输入账号");
      }
    } else if (!_0x2f6f4b.password2.text()) {
      toastLog("请输入密码");
    } else {
      check_name_pwd(_0x2f6f4b.username2.text(), _0x2f6f4b.password2.text());
      _0x38e9e8.dismiss();
    }
  });
  _0x2f6f4b.cancel2.click(function () {
    _0x38e9e8.dismiss();
  });
}
var atto_start_main = setInterval(function () {
  if (auto.service != null) {
    if (setting.main_threads == null || !setting.main_threads.isAlive()) {
      main();
      clearInterval(atto_start_main);
    }
  }
}, 1500);
if (ui_log_floaty_status()) {
  show_log_floaty();
}
houtai_tanchu();
requestScreenshot();
function main() {
  setting.main_threads = threads.start(function () {
    if (common.xyv_correct()) {
      {
        ui.run(function () {
          ui.initXyApp.checked = true;
          try {
            {
              ui.IgnoredPower.checked = $power_manager.isIgnoringBatteryOptimizations();
            }
          } catch (_0x557ba3) {}
        });
      }
    } else {
      ui.run(function () {
        ui.initWs.checked = false;
        ui.initXyApp.checked = false;
      });
      let _0x5dd5b0 = "请先安装稳定版闲鱼";
      toast(_0x5dd5b0);
      console.error(_0x5dd5b0);
      return false;
    }
    if (setting.ws_status) {
      {
        console.info("大功告成，您可以在云端控制该终端了~");
      }
    } else {
      {
        ws.run();
      }
    }
    common.interference();
    events.on("exit", function () {
      {
        try {
          setting.allow_ws_re = false;
          setting.ws.cancel();
          setting.interference.interrupt();
        } catch (_0x4a4fbb) {
          {
            console.error("程序退出时出错：");
            console.error(_0x4a4fbb);
          }
        }
      }
    });
  });
}
function authenticate() {
  threads.start(function () {
    {
      if (setting.s.contains("access_token")) {
        try {
          let _0x2574e8 = setting.api_domain + "check_jwt";
          var _0x34a90d = http.post(_0x2574e8, {
            "access_token": setting.s.get("access_token")
          });
          let _0x1b4887 = _0x34a90d.body.json();
          if (_0x1b4887.code === 0) {} else if (_0x1b4887.code === -2) {
            if (_0x1b4887.data.updateed_time) {
              {
                console.info("用户令牌重签成功，用户到期时间更新为" + _0x1b4887.data.authorize_end_time);
                setting.s.put("access_token", _0x1b4887.data.access_token);
                setting.s.put("end_time", _0x1b4887.data.authorize_end_time);
                ui.post(function () {
                  {
                    ui.end_time.setText("到期时间：" + setting.s.get("end_time"));
                  }
                });
              }
            } else {
              if (_0x1b4887.data.authorize_user_type != "tryA") {
                console.error("您的账号即将到期！到前期续费手机端账号无需重新登录");
                console.verbose("用户到期时间：" + _0x1b4887.data.authorize_end_time);
              }
            }
          } else if (_0x1b4887.code === -1) {
            console.error(_0x1b4887.msg);
            console.error(_0x1b4887.msg);
            console.error(_0x1b4887.msg);
            setting.s.remove("access_token");
            setting.s.remove("username");
            for (let _0x34b75f = 0; _0x34b75f < 3; _0x34b75f++) {
              {
                toast("登录过期，即将重启内核");
                sleep(2000);
              }
            }
            common.restart_aj();
          } else {
            console.error("jwt校验失败 ", _0x1b4887.msg);
          }
        } catch (_0x2d7a3c) {
          console.verbose("检查jwt异常");
          console.error(_0x2d7a3c);
        }
      } else {
        toastLog("请先进行登录");
      }
    }
  });
}
function check_name_pwd(_0x1c7b3e, _0x32ed3f) {
  threads.start(function () {
    console.log("开始验证用户名和密码...");
    var _0x9d2c2b = setting.api_domain + "login";
    var _0x3f299d = http.post(_0x9d2c2b, {
      "name": _0x1c7b3e,
      "pwd": _0x32ed3f,
      "is_mobile": true,
      "phone_info": common.mobile_info()
    });
    let _0x3d188c = _0x3f299d.body.json();
    if (_0x3d188c.code === 0) {
      setting.s.put("end_time", _0x3d188c.data.authorize_end_time);
      var _0x322918 = setting.s.get("end_time");
      console.log("到期时间：" + _0x322918);
      _0x322918 = _0x322918.replace(/-/g, ":").replace(" ", ":");
      _0x322918 = _0x322918.split(":");
      let _0x44d12e = new Date(_0x322918[0], _0x322918[1] - 1, _0x322918[2], _0x322918[3], _0x322918[4], _0x322918[5]);
      if (new Date(_0x44d12e) - new Date() < 0) {
        let _0x1e3f40 = "您的账号已到期或未激活，请在总控端激活系统后再尝试登录";
        toast(_0x1e3f40);
        console.error(_0x1e3f40);
        ui.viewpager.currentItem = 4;
      } else {
        setting.s.put("access_token", _0x3d188c.data.access_token);
        setting.s.put("username", _0x3d188c.data.name);
        setting.s.put("end_time", _0x3d188c.data.authorize_end_time);
        ui.post(function () {
          ui.username.setText(setting.s.get("username"));
          ui.login.setText("重新登录");
          ui.end_time.setText("到期时间：" + setting.s.get("end_time"));
        });
        if (setting.s.contains("access_token")) {
          {
            console.log("写入jwt成功");
            toast("登录成功");
            console.info("登录成功");
          }
        }
      }
    } else {
      toast(_0x3d188c.msg);
      console.error(_0x3d188c.msg);
      ui.viewpager.currentItem = 4;
      console.error("\n登录失败：\n1.需要输入的是用户名和密码，而不是手机号和密码\n2.需要输入的是系统的用户名密码，而不是闲鱼的用户名密码\n3.请注意易混淆的字符和字母大小写，如数字1和字母l，数字0和字母o等等\n4.请注意用户名中的汉字是否有错别字，如'账号'和'帐号'、'斑马'和'班马'等等\n5.如果您忘记了您的用户名或密码，可联系管理员尝试找回");
    }
  });
}
function backgroundAlpha(_0x34b21c) {
  lp = activity.getWindow().getAttributes();
  lp.alpha = _0x34b21c;
  activity.getWindow().setAttributes(lp);
}
function show_log_floaty() {
  if (setting.log_floaty == null) {
    let _0x24bfc6 = floaty.rawWindow("<vertical bg=\"#90000000\" h=\"1\" w=\"1\" id=\"ConSP\"><com.stardust.autojs.core.console.ConsoleView h=\"*\" id=\"ConS\" margin=\"10\"/></vertical>");
    setTimeout(function () {
      {
        _0x24bfc6.setSize(device.width * 0.6, device.height * 0.16);
        _0x24bfc6.setTouchable(false);
        ui.run(() => {
          try {
            _0x24bfc6.ConS.setInputEnabled(false);
          } catch (_0x56977a) {
            {
              input_container = _0x24bfc6.ConS.findViewById(context.getResources().getIdentifier("input_container", "id", context.getPackageName()));
              input_container.attr("visibility", "gone");
            }
          }
          _0x24bfc6.ConS.setConsole(runtime.console);
          let _0x594ae1 = new android.util.SparseArray();
          let _0x38381c = android.util.Log;
          _0x594ae1.put(_0x38381c.VERBOSE, new java.lang.Integer(colors.parseColor("#009688")));
          _0x594ae1.put(_0x38381c.INFO, new java.lang.Integer(colors.parseColor("#009688")));
          _0x594ae1.put(_0x38381c.ERROR, new java.lang.Integer(colors.parseColor("#FF5722")));
          _0x594ae1.put(_0x38381c.WARN, new java.lang.Integer(colors.parseColor("#009688")));
          _0x594ae1.put(_0x38381c.DEBUG, new java.lang.Integer(colors.parseColor("#009688")));
          _0x594ae1.put(_0x38381c.ASSERT, new java.lang.Integer(colors.parseColor("#009688")));
          _0x24bfc6.ConS.setColors(_0x594ae1);
          _0x24bfc6.ConSP.attr("w", Math.floor(device.width * 0.6) + "px");
          _0x24bfc6.ConSP.attr("h", Math.floor(device.height * 0.16) + "px");
        });
        setting.log_floaty = true;
      }
    }, 200);
  }
}
function ui_log_floaty_status(_0x3d5aa1) {
  return setting.s.get("log_floaty", false) && $floaty.checkPermission();
}
function houtai_tanchu() {
  let _0x447e07 = false;
  try {
    _0x447e07 = context.getSystemService("appops").checkOp(10021, android.os.Binder.getCallingUid(), context.getPackageName()) == 0;
  } catch (_0x33f479) {
    {
      _0x447e07 = true;
    }
  }
  setting.has_tanchu = _0x447e07;
  if (_0x447e07) {
    ui.run(function () {
      {
        ui.houtai_tanchu.setText("权限正常");
        ui.houtai_tanchu.setTextColor(colors.parseColor("#ff5d85ff"));
      }
    });
  } else {
    {
      let _0x196893 = "请授予后台弹出界面权限";
      console.error(_0x196893);
      console.error(_0x196893);
      console.error(_0x196893);
      ui.run(function () {
        ui.houtai_tanchu.setText(_0x196893);
        ui.houtai_tanchu.setTextColor(colors.parseColor("#FF5722"));
      });
    }
  }
}
function requestScreenshot() {
  return false;
  threads.start(function () {
    if (device.release.split(".")[0] >= 12 && ["xiaomi", "Mi", "Redmi", "Xiaomi"].indexOf(device.brand) > -1) {
      return false;
    }
    for (let _0x384781 = 0; _0x384781 < 1000; _0x384781++) {
      {
        sleep(100);
        if (auto.service != null) {
          {
            break;
          }
        }
      }
    }
    if (auto.service != null) {
      let _0x2c155b = threads.start(function () {
        let _0x384781 = 0;
        while (_0x384781 < 5) {
          clickNode("text", "立即开始");
          _0x384781++;
        }
      });
      if (!requestScreenCapture()) {
        {
          toast("请求截图失败");
          console.warn("请求截图失败");
        }
      } else {
        _0x2c155b.interrupt();
        console.verbose("屏幕截图权限申请成功");
        setting.requestScreenshot = true;
        ui.run(function () {
          {
            ui.jietu.checked = setting.requestScreenshot;
          }
        });
      }
    }
  });
}
function clickNode(_0x1d2a78, _0x524a3d, _0x590051) {
  if (!_0x590051) {
    {
      _0x590051 = 1000;
    }
  }
  let _0x3d7fde = false;
  if (!_0x524a3d) {
    {
      return _0x3d7fde;
    }
  }
  let _0x40cef9;
  if (_0x1d2a78 == "text") {
    _0x40cef9 = text(_0x524a3d).visibleToUser(true).findOne(1000);
  } else if (_0x1d2a78 == "desc") {
    _0x40cef9 = desc(_0x524a3d).visibleToUser(true).findOne(1000);
  } else if (_0x1d2a78 == "id") {
    {
      _0x40cef9 = id(_0x524a3d).visibleToUser(true).findOne(1000);
    }
  } else if (_0x1d2a78 == "className") {
    _0x40cef9 = className(_0x524a3d).visibleToUser(true).findOne(1000);
  } else {
    log("clickNode:" + _0x1d2a78 + " 参数不正确");
  }
  if (_0x40cef9 != null) {
    if (_0x40cef9.clickable()) {
      _0x3d7fde = _0x40cef9.click();
      _0x3d7fde && sleep(_0x590051);
    } else {
      log("clickNode:" + _0x524a3d + " 不可点击");
    }
  } else {}
  return _0x3d7fde;
}