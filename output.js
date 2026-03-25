//Wed Mar 25 2026 13:39:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var init = {
  "run": function () {
    try {
      com.stardust.autojs.core.pref.Pref.INSTANCE.get().edit().putBoolean("key_foreground_service", true).commit();
    } catch (_0x7dff9f) {
      {
        console.verbose("ajx开启前台服务异常");
      }
    }
    check_sys_version();
    check_android_v();
    check_total_memory();
    device.keepScreenOn(86400000);
    threads.start(function () {
      common.set_phone_info();
      common.init_ui();
    });
    if (setting.s.contains("access_token")) {
      {
        common.check_configure();
      }
    }
    common.start_task_list();
  },
  "install": function (_0x436123) {
    setting.is_install_app = true;
    if (device.release.split(".")[0] < 7 && !setting.is_root) {
      let _0x2a0e96 = "您的安卓系统版本小于7.0，请先授予Root权限";
      console.error(_0x2a0e96);
      toast(_0x2a0e96);
    } else {
      {
        if (!install(_0x436123)) {
          {
            let _0x4af3d5 = "App安装失败！";
            console.error(_0x4af3d5);
            toast(_0x4af3d5);
          }
        }
      }
    }
    setting.is_install_app = false;
  }
};
function check_sys_version() {
  let _0xdfaec4 = common.getVersionName("com.ydydyd8818");
  if (_0xdfaec4) {
    {
      try {
        var _0x42e081 = setting.api_domain + "check_xyzs_version7";
        var _0x1d48b0 = http.post(_0x42e081, {
          "v": _0xdfaec4,
          "v2": setting.v2
        });
        var _0x3438a2 = _0x1d48b0.body.json();
      } catch (_0x259942) {
        console.verbose("尝试切换备用域名");
        try {
          setting.api_domain = setting.api_domain2;
          var _0x42e081 = setting.api_domain + "check_xyzs_version7";
          var _0x1d48b0 = http.post(_0x42e081, {
            "v": _0xdfaec4,
            "v2": setting.v2
          });
          var _0x3438a2 = _0x1d48b0.body.json();
        } catch (_0x1e81cc) {
          var _0x32e37a = "无法访问网络！无法访问网络！无法访问网络！";
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          console.error(_0x32e37a);
          toast(_0x32e37a);
          ui.run(function () {
            ui.viewpager.currentItem = 4;
          });
        }
      }
      try {
        setting.v = _0xdfaec4;
        setting.v_cloud = _0x3438a2.v_cloud;
        setting.v2_cloud = _0x3438a2.v2_cloud;
        if (_0x3438a2.code == 0) {
          console.info("当前" + sys_msg.sys_name + "版本：" + setting.v_cloud + "，已为最新版");
          console.info(sys_msg.sys_name + "内核版本：" + setting.v2_cloud + "，已为最新版");
          ui.run(function () {
            ui.xintiao.setText("网络正常|服务器连接正常");
          });
        } else if (_0x3438a2.code == -1) {
          let _0x44b3ee = "当前本版低，请前往总控扫码下载最新版";
          console.log(_0x44b3ee);
          console.log(_0x44b3ee);
          console.log(_0x44b3ee);
        } else if (_0x3438a2.code == -2) {
          {
            sleep(2000);
            toast("检测到新版本，即将自动更新");
            console.info("更新中...");
            let _0x545400 = engines.myEngine().cwd();
            _0x1d48b0 = http.get(_0x3438a2.hot_update_url);
            files.writeBytes(_0x545400 + "/1.zip", _0x1d48b0.body.bytes());
            $zip.unzip(_0x545400 + "/1.zip", _0x545400);
            var _0x3b98a8 = files.listDir(_0x545400 + "/yxx_client");
            for (let _0x4b5722 = 0; _0x4b5722 < _0x3b98a8.length; _0x4b5722++) {
              {
                if ([".git", "project.json"].indexOf(_0x3b98a8[_0x4b5722]) > -1) {
                  continue;
                }
                if (files.isFile(_0x545400 + "/yxx_client/" + _0x3b98a8[_0x4b5722])) {
                  console.verbose("更新文件：" + _0x3b98a8[_0x4b5722]);
                  files.write(_0x545400 + "/" + _0x3b98a8[_0x4b5722], files.read(_0x545400 + "/yxx_client/" + _0x3b98a8[_0x4b5722]));
                }
              }
            }
            console.info("准备重启");
            toast("即将重启");
            engines.stopAll();
            engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
            toast("已更新至最新版！");
          }
        }
      } catch (_0x1b18d0) {
        {
          console.verbose("热更新出错");
          var _0x32e37a = "无网络连接|请检查网络";
          console.error(_0x32e37a);
          toast(_0x32e37a);
          ui.run(function () {
            ui.xintiao.setText(_0x32e37a);
            ui.xintiao.setTextColor(colors.parseColor("#FF5722"));
          });
          console.verbose(_0x1b18d0);
        }
      }
    }
  }
}
function check_android_v() {
  let _0x30b99a = device.release;
  try {
    {
      setting.is_root = $shell.checkAccess("root");
    }
  } catch (_0x2b8a25) {
    {
      setting.is_root = false;
      console.verbose("ajx判断root权限异常");
    }
  }
  if (_0x30b99a.split(".")[0] < 7) {
    if (setting.is_root) {
      {
        setting.android_ver_color = "#ff5d85ff";
        setting.android_ver_text = _0x30b99a + " | 已ROOT";
      }
    } else {
      {
        setting.android_ver_color = "#FF5722";
        setting.android_ver_text = _0x30b99a + " | 未ROOT 安卓7以下需ROOT";
      }
    }
  } else {
    setting.android_ver_color = "#ff5d85ff";
    setting.android_ver_text = _0x30b99a + " | 安卓7或7以上免ROOT";
  }
  ui.run(function () {
    ui.android_ver.setText(setting.android_ver_text);
    ui.android_ver.setTextColor(colors.parseColor(setting.android_ver_color));
  });
  if (_0x30b99a.split(".")[0] < 7) {
    if (setting.is_root) {
      if (auto.service == null) {
        try {
          {
            shell("pm grant " + PackageName.toString() + " android.permission.WRITE_SECURE_SETTINGS", {
              "root": true
            });
            let _0x3acf10 = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
            let _0x10c329 = _0x3acf10 + ":" + PackageName.toString() + "/com.stardust.autojs.core.accessibility.AccessibilityService";
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, _0x10c329);
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, "1");
            console.info("root已授权开启无障碍");
            setTimeout(function () {
              {
                ui.run(function () {
                  ui.autoService.checked = true;
                });
                toast("已自动开启无障碍");
              }
            }, 1000);
          }
        } catch (_0x5ac302) {}
      }
    } else {
      console.error("您的系统版本为：" + device.release + ",小于7.0,请授予root权限！！！！！");
      console.error("您的系统版本小于7.0,请授予root权限！！！！！");
      console.error("无root权限！！！无root权限！！！无root权限！");
      console.error("请授予root权限,否则系统将无法正确运行");
      console.error("请授予" + sys_msg.sys_name + "root权限,否则系统将无法正确运行");
      console.error("请授予" + sys_msg.sys_name + "root权限,否则系统将无法正确运行");
      console.error("授予root后请重启" + sys_msg.sys_name + "App");
      console.error("授予root后请重启" + sys_msg.sys_name + "App");
      console.error("授予root后请重启" + sys_msg.sys_name + "App");
      console.error("授予root后请重启" + sys_msg.sys_name + "App");
      for (let _0x21b302 = 0; _0x21b302 < 300; _0x21b302++) {
        console.error("授予root后请重启" + sys_msg.sys_name + "App");
        toast("请授予" + sys_msg.sys_name + "root权限");
        sleep(6000);
      }
    }
  } else if (device.brand == "Meizu" || device.brand == "meizu") {
    console.log("提醒：");
    console.log("部分魅族手机运行不稳定，请自行测试系统稳定性！");
  } else if (["MI 4C", "Mi-4c"].indexOf(device.model) != -1) {
    let _0x51edb2 = "因小米4c发布宝贝时会直接跳到拍照界面（闲鱼的bug），所以无法发布宝贝，请更换其他型号的手机或使用老版本的闲鱼（第二版助手适配的闲鱼）";
    toast(_0x51edb2);
    console.error("警告：");
    console.error(_0x51edb2);
  } else {
    console.info("本地运行环境正常");
  }
}
function check_total_memory() {
  let _0x11cf8a = device.getTotalMem();
  let _0x2d8fa2 = (_0x11cf8a / 1000000000).toFixed(2);
  let _0x4c77a2 = (_0x11cf8a / Math.pow(1024, 3)).toFixed(2);
  if (_0x2d8fa2 < 4) {
    console.warn("运行设备建议： 当前设备硬件配置较低，运行闲鱼或助手时可能会出现卡顿。为保障您的顺畅体验，建议使用运行内存（RAM）6GB 及以上的手机。您可以继续使用当前设备，但在高负载场景下可能无法获得最佳的操作流畅度。");
    console.verbose("厂商口径内存(1000进制): " + _0x2d8fa2 + " GB");
    console.verbose("系统口径内存(1024进制): " + _0x4c77a2 + " GB");
  } else {}
}
function install(_0x11bbcd) {
  if (_0x11bbcd == "xy") {
    {
      let _0x512c6f = common.getVersionName(setting.xy_pname);
      if (_0x512c6f == "未安装") {
        console.verbose("您未安装闲鱼");
      } else {
        let _0x18a301 = common.get_v_num(_0x512c6f);
        let _0x4d805c = common.get_v_num(setting.xy_app_version_tjbb);
        if (_0x18a301 > _0x4d805c) {
          {
            app_uninstall(setting.xy_pname);
          }
        }
      }
      _0x532a82 = "正在安装闲鱼" + setting.xy_app_version_tjbb;
      toast(_0x532a82);
      console.log(_0x532a82);
      try {
        common.download_file(setting.xy_app_location_path, setting.xy_app_url_e);
      } catch (_0xfe5d2a) {
        {
          console.verbose("启用备用地址下载闲鱼");
          common.download_file(setting.xy_app_location_path, setting.xy_app_url_bak_e);
        }
      }
      console.verbose("闲鱼安装包下载结束");
      app_install(setting.xy_app_location_path, setting.xy_pname);
      let _0x532a82 = "闲鱼App安装完成，请记得登录闲鱼，并且关闭应用商店的软件自动升级！";
      console.info(_0x532a82);
      toast(_0x532a82);
      console.verbose("请记得关闭应用商店的软件自动升级！");
      console.verbose("请记得关闭应用商店的软件自动升级！");
      console.log("您现在已正确安装了闲鱼，如过段时间闲鱼版本自动改变，说明您未关闭应用商店的软件自动升级。请确保您已关闭手机应用商店的软件自动升级，如不确定是否已成功关闭，可截图咨询我们");
      return true;
    }
  } else if (_0x11bbcd == "zz") {
    let _0x3b33d1 = common.getVersionName(setting.zz_pname);
    if (_0x3b33d1 == "未安装") {
      console.verbose("您未安装转转");
    } else {
      let _0x425e13 = common.get_v_num(_0x3b33d1);
      let _0x394cb9 = common.get_v_num(setting.zz_app_version);
      if (_0x425e13 > _0x394cb9) {
        app_uninstall(setting.zz_pname);
      }
    }
    _0x532a82 = "正在安装转转" + setting.zz_app_version;
    toast(_0x532a82);
    console.log(_0x532a82);
    try {
      {
        console.verbose("开始下载转转安装包");
        common.download_file(setting.zz_app_location_path, setting.zz_app_url);
      }
    } catch (_0x359daf) {
      console.verbose("启用备用地址下载转转");
      common.download_file(setting.zz_app_location_path, setting.zz_app_url_bak);
    }
    console.verbose("转转安装包下载结束");
    app_install(setting.zz_app_location_path, setting.zz_pname);
    let _0x532a82 = "转转App安装完成，请记得登录转转，并且关闭应用商店的软件自动升级~";
    console.info(_0x532a82);
    toast(_0x532a82);
    return true;
  } else if (_0x11bbcd == "pdd") {
    let _0x24957c = common.getVersionName(setting.pdd_pname);
    if (_0x24957c == "未安装") {
      console.verbose("您未安装拼多多");
    } else {
      let _0x9f6394 = common.get_v_num(_0x24957c);
      let _0x5c5e9c = common.get_v_num(setting.pdd_app_version);
      if (_0x9f6394 > _0x5c5e9c) {
        app_uninstall(setting.pdd_pname);
      }
    }
    _0x532a82 = "正在安装拼多多" + setting.pdd_app_version;
    toast(_0x532a82);
    console.log(_0x532a82);
    try {
      common.download_file(setting.pdd_app_location_path, setting.pdd_app_url);
    } catch (_0x2aaa48) {
      console.verbose("启用备用地址下载拼多多");
      common.download_file(setting.pdd_app_location_path, setting.pdd_app_url_bak);
    }
    app_install(setting.pdd_app_location_path, setting.pdd_pname);
    let _0x532a82 = "拼多多App安装完成，请记得登录拼多多，并且关闭应用商店的软件自动升级~";
    console.info(_0x532a82);
    toast(_0x532a82);
    return true;
  } else if (_0x11bbcd == "xhs") {
    {
      let _0x607269 = common.getVersionName(setting.hs_pname);
      if (_0x607269 == "未安装") {
        console.verbose("您未安装小红书");
      } else {
        let _0x167fed = common.get_v_num(_0x607269);
        let _0x1733a4 = common.get_v_num(setting.hs_app_version);
        if (_0x167fed > _0x1733a4) {
          app_uninstall(setting.hs_pname);
        }
      }
      _0x532a82 = "正在安装小红书" + setting.hs_app_version;
      toast(_0x532a82);
      console.log(_0x532a82);
      try {
        {
          common.download_file(setting.hs_app_location_path, setting.xhs_app_url);
        }
      } catch (_0x15b532) {
        console.verbose("启用备用地址下载拼多多");
        common.download_file(setting.hs_app_location_path, setting.xhs_app_url_bak);
      }
      app_install(setting.hs_app_location_path, setting.hs_pname);
      let _0x532a82 = "小红书App安装完成，请记得登录小红书，并且关闭应用商店的软件自动升级~";
      console.info(_0x532a82);
      toast(_0x532a82);
      return true;
    }
  } else if (_0x11bbcd == "dy") {
    {
      let _0x593455 = common.getVersionName(setting.dy_pname);
      if (_0x593455 == "未安装") {
        console.verbose("您未安装抖音");
      } else {
        let _0x544317 = common.get_v_num(_0x593455);
        let _0x50db01 = common.get_v_num(setting.dy_app_version);
        if (_0x544317 > _0x50db01) {
          {
            app_uninstall(setting.dy_pname);
          }
        }
      }
      _0x532a82 = "正在安装抖音" + setting.dy_app_version;
      toast(_0x532a82);
      console.log(_0x532a82);
      try {
        common.download_file(setting.dy_app_location_path, setting.dy_app_url);
      } catch (_0xb4a621) {
        console.verbose("启用备用地址下载抖音");
        common.download_file(setting.dy_app_location_path, setting.dy_app_url_bak);
      }
      app_install(setting.dy_app_location_path, setting.dy_pname);
      let _0x532a82 = "抖音App安装完成，请记得登录抖音，并且关闭应用商店的软件自动升级~";
      console.info(_0x532a82);
      toast(_0x532a82);
      return true;
    }
  }
  return false;
}
function app_install(_0x2626cf, _0x5c0976) {
  if (device.release.split(".")[0] < 7) {
    {
      shell("chmod -R 777 /data/data/org.autojs.autojspro/", true);
      shell("chmod -R 777 /data/data/com.ydydyd8818/", true);
      let _0x5c4c37 = "App安装中，请稍等....";
      console.log(_0x5c4c37);
      toast(_0x5c4c37);
      console.verbose("安装完成后请关闭手机应用商店的软件自动升级！！");
      shell("pm install -r " + _0x2626cf, true);
      return true;
    }
  } else {
    app.viewFile(_0x2626cf);
    switch (device.brand) {
      case "xiaomi":
      case "Xiaomi":
        sleep(2000);
        text("安装").enabled().waitFor();
        text("安装").findOne().click();
        text("完成").waitFor();
        text("完成").findOne().click();
        toast("安装成功");
        break;
      default:
        while (common.getVersionName(_0x5c0976) == null) {
          toast("请手动完成App的安装");
          sleep(3000);
        }
    }
  }
  return true;
}
function app_uninstall(_0x5820b3) {
  if (device.release.split(".")[0] < 7) {
    {
      console.verbose("静默卸载");
      shell("pm uninstall " + _0x5820b3, true);
    }
  } else {
    {
      console.verbose("模拟点击卸载");
      app.uninstall(_0x5820b3);
      while (common.getVersionName(_0x5820b3) !== "未安装") {
        {
          if (_0x5820b3 === setting.xy_pname) {
            toastLog("请手动完成闲鱼App的卸载，卸载后系统将自动安装指定版本闲鱼...");
          }
          if (_0x5820b3 === setting.zz_pname) {
            toastLog("请手动完成转转App的卸载，卸载后系统将自动安装指定版本转转...");
          }
          if (_0x5820b3 === setting.pdd_pname) {
            {
              toastLog("请手动完成拼多多App的卸载，卸载后系统将自动安装指定版本拼多多...");
            }
          }
          if (_0x5820b3 === setting.hs_pname) {
            toastLog("请手动完成小红书App的卸载，卸载后系统将自动安装指定版本小红书...");
          }
          sleep(3000);
        }
      }
    }
  }
  sleep(1000);
}
module.exports = init;