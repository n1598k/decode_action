//Wed Mar 25 2026 13:19:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var ws = {
  "run": function () {
    setting.ws_status = true;
    console.log("使用软件的过程中，请确保您的网络流畅~");
    console.log("Websocket连接中..");
    setting.ws = web.newWebSocket("wss://wss.yuxianxian.com:443", {});
    setting.ws.on("open", _0xa68eac => {
      log("WebSocket连接成功！");
      common.set_phone_info();
      setting.heartbeat = threads.start(function () {
        {
          setInterval(function () {
            {
              setting.ws.send("H");
            }
          }, 20000);
        }
      });
    }).on("failure", (_0x3c27d1, _0x431dfe) => {
      setting.ws_status = false;
      setting.heartbeat.interrupt();
      setting.ws.cancel();
      if (!device.isScreenOn()) {
        {
          console.error("警告：因手机息屏造成了总服务器连接中断");
        }
      }
      console.error("错误信息：" + _0x3c27d1);
      if (setting.allow_ws_re) {
        {
          setting.ws_re_num_all += 1;
          if (setting.ws_re_num_all < 20000) {
            console.warn("与总控的连接已断开，20秒后重连...");
            console.error("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
            console.error("提示：如频繁断开，请根据总控 系统主页->常见问题 第四条的说明设置手机，确定设置好后重启手机");
            while (true) {
              {
                sleep(20000);
                if (device.isScreenOn()) {
                  break;
                } else {}
              }
            }
            this.run();
          } else {
            console.error("与总控的连接已断开，且多次自动重连失败，请手动连接总控！");
          }
          ui.run(function () {
            ui.initWs.checked = false;
          });
        }
      }
    }).on("closing", (_0x1bf7a4, _0x5d7798) => {
      log("WebSocket关闭中");
    }).on("text", _0x2a2a50 => {
      if (_0x2a2a50 == "H") {
        return true;
      }
      let _0x40d6d5 = JSON.parse(_0x2a2a50);
      switch (_0x40d6d5.type) {
        case "init":
          console.log("等待总控响应...");
          var _0x3e0a9e = http.post(setting.api_domain + "gateway_bind", {
            "client_id": _0x40d6d5.client_id,
            "access_token": setting.s.get("access_token") || ""
          });
          let _0x5e0934 = _0x3e0a9e.body.json();
          if (_0x5e0934.code === 0) {
            let _0xe96d4f = "大功告成，您可以在云端控制该终端了~";
            console.info(_0xe96d4f);
            toast(_0xe96d4f);
            ui.run(function () {
              ui.initWs.checked = true;
            });
            device.vibrate(50);
            common.device_online();
          } else {
            ui.run(function () {
              ui.initWs.checked = false;
            });
            setting.ws_status = false;
            let _0x2e8c17 = _0x5e0934.msg;
            toast(_0x2e8c17);
            console.error(_0x2e8c17);
          }
          break;
        case "web_to_aj_command":
          ui.run(function () {
            {
              ui.viewpager.currentItem = 4;
            }
          });
          if (_0x40d6d5.task_type == "clear_img") {
            {
              common.clear_img();
              common.web_log("清除缓存成功", "success");
              common.reload_task_table(_0x40d6d5.task_id, "end");
              return false;
            }
          }
          if (_0x40d6d5.task_type == "clear_task") {
            common.clear_task();
            common.web_log("清空任务队列成功", "success");
            common.reload_task_table(_0x40d6d5.task_id, "end");
            return false;
          }
          if (_0x40d6d5.task_type == "remove_task") {
            common.remove_task(_0x40d6d5.task_id);
            common.web_log("删除任务成功", "success");
            return false;
          }
          if (_0x40d6d5.task_type == "restart_aj") {
            common.reload_task_table(_0x40d6d5.task_id, "end");
            common.restart_aj();
            return false;
          }
          if (_0x40d6d5.task_type == "restart_xy") {
            common.reload_task_table(_0x40d6d5.task_id, "end");
            common.restart_xy();
            return false;
          }
          if (_0x40d6d5.task_type == "set_phone_info") {
            common.reload_task_table(_0x40d6d5.task_id, "end");
            common.set_phone_info();
            return false;
          }
          if (_0x40d6d5.task_type == "close_im") {
            {
              toastLog("关闭消息回复");
              if (setting.auto_monitor == null || !setting.auto_monitor.isAlive()) {
                console.verbose("消息回复未开启，无需关闭");
              } else {
                {
                  setting.auto_monitor.interrupt();
                  console.verbose("消息回复已关闭");
                }
              }
              common.web_log("关闭消息回复", "success");
              common.reload_task_table(_0x40d6d5.task_id, "end");
              return false;
            }
          }
          if (_0x40d6d5.task_type == "open_im") {
            toastLog("开启消息回复");
            if (setting.auto_monitor == null || !setting.auto_monitor.isAlive()) {
              message.auto_monitor(_0x40d6d5.task_id);
            }
            common.web_log("开启消息回复", "success");
            common.reload_task_table(_0x40d6d5.task_id, "end");
            return false;
          }
          if (_0x40d6d5.start_time) {
            {
              let _0x3e0a9e = http.get("https://www.baidu.com/favicon.ico");
              let _0x1e7741 = new Date(_0x3e0a9e.headers.Date);
              let _0x2c7348 = _0x1e7741.getTime() - Date.parse(new Date());
              if (Math.abs(_0x2c7348) / 60000 > 5) {
                let _0xe96d4f = "手机时间不准，无法运行定时任务，请调整手机时间";
                console.error(_0xe96d4f);
                common.web_log(_0xe96d4f, "danger");
                common.reload_task_table(_0x40d6d5.task_id, "error", _0xe96d4f);
                return false;
              }
            }
          }
          if (setting.v != setting.v_cloud) {
            console.verbose("重启手机端软件系统将自动检测升级，如果无法自动升级，请前往总控扫描下载最新版");
            let _0x44e143 = "请升级软件到最新版（点 系统主页->设备列表->第七版 扫码下载）";
            common.web_log(_0x44e143, "danger");
            console.warn(_0x44e143);
            common.reload_task_table(_0x40d6d5.task_id, "error", _0x44e143);
            return false;
          }
          if (!setting.has_tanchu) {
            {
              let _0x3cd7dc = "请授予助手后台弹出界面权限（权限管理->后台弹出界面->允许）";
              console.error(_0x3cd7dc);
              common.web_log(_0x3cd7dc, "danger");
              common.reload_task_table(_0x40d6d5.task_id, "error", _0x3cd7dc);
              return false;
            }
          }
          if (device.release.split(".")[0] < 7 && !setting.is_root) {
            {
              let _0xfbb99c = "您的安卓系统版本小于7.0，请先授予Root权限";
              console.error(_0xfbb99c);
              common.web_log(_0xfbb99c, "danger");
              common.reload_task_table(_0x40d6d5.task_id, "error", _0xfbb99c);
              return false;
            }
          }
          if (_0x40d6d5.task_type.slice(0, 4) == "wbzz") {
            if (common.getVersionName(setting.zz_pname) != setting.zz_app_version) {
              {
                let _0x2a46a0 = "请先安装指定版本的转转（安装后关闭手机应用商店的软件自动升级）";
                console.error(_0x2a46a0);
                common.web_log(_0x2a46a0, "danger");
                common.reload_task_table(_0x40d6d5.task_id, "error", _0x2a46a0);
                return false;
              }
            }
          } else if (_0x40d6d5.task_type.slice(0, 2) == "hs") {
            if (common.getVersionName(setting.hs_pname) != setting.hs_app_version) {
              {
                let _0x56eb60 = "请先安装指定版本的红薯（安装后关闭手机应用商店的软件自动升级）";
                console.error(_0x56eb60);
                common.web_log(_0x56eb60, "danger");
                common.reload_task_table(_0x40d6d5.task_id, "error", _0x56eb60);
                return false;
              }
            }
          } else {
            if (!common.xyv_correct()) {
              {
                let _0x12cc03 = "请先安装稳定版闲鱼（安装后关闭手机应用商店的软件自动升级）";
                console.error(_0x12cc03);
                common.web_log(_0x12cc03, "danger");
                common.reload_task_table(_0x40d6d5.task_id, "error", _0x12cc03);
                return false;
              }
            }
          }
          if (setting.task_runing) {
            common.reload_task_table(_0x40d6d5.task_id, "wait");
          } else if (_0x40d6d5.start_time && new Date() < new Date(_0x40d6d5.start_time.replace(/\-/g, "/"))) {
            {
              common.reload_task_table(_0x40d6d5.task_id, "wait");
            }
          } else if (_0x40d6d5.start_time2) {
            common.reload_task_table(_0x40d6d5.task_id, "wait");
          }
          setting.task_list.push(_0x40d6d5);
          setting.s.put("task_list", setting.task_list);
          let _0x44c76b = "成功加入任务队列，当前队列任务数：" + setting.task_list.length;
          console.verbose(_0x44c76b);
          toast(_0x44c76b);
          if (setting.task_list.length > 3) {
            console.warn("检测到队列任务积压，如现在无法正常运行任务（可能是因为某任务异常中断），请点击 手机端->常用功能->清空队列 或 电脑端->系统主页->设备列表->清空任务队列。如果任务正常运行，请忽略本条提醒");
          }
          common.change_task_ui();
          break;
        case "web_to_aj_chat_message":
          console.verbose("收到总控消息，准备发给客户");
          if (_0x40d6d5.zhu_fu == "开") {
            setting.message_b.push({
              "name": _0x40d6d5.name,
              "message": _0x40d6d5.message
            });
          } else {
            setting.message_a.push({
              "name": _0x40d6d5.name,
              "message": _0x40d6d5.message
            });
          }
          break;
        default:
          console.log("defautl 位置的指令类型");
          console.log(_0x40d6d5);
      }
    }).on("closed", (_0x503229, _0x631e44) => {
      setting.ws_status = false;
      console.error("WebSocket已关闭");
    });
  }
};
module.exports = ws;