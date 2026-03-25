//Wed Mar 25 2026 13:07:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var bz = {
  "show_bzui": function () {
    ui.layout("<drawer id=\"drawer\">                <vertical>                    <appbar>                        <toolbar id=\"toolbar\" title=\"{{sys_msg.sys_name}}\" bg=\"{{setting.bz_colour}}\"/>                        <tabs id=\"tabs\" bg=\"{{setting.bz_colour}}\"/>                    </appbar>                    <viewpager id=\"viewpager\">                        <frame>                            <ScrollView><vertical>                                    <card w=\"*\" h=\"auto\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <horizontal>                                            <vertical margin=\"10\" layout_gravity=\"center_vertical\" layout_weight=\"2\">                                                <text id=\"username\" size=\"18\" color=\"#444444\" text=\"加载中...\"/>                                                <text id=\"end_time\"  padding=\"1\" size=\"15\" text=\"到期时间：2019-07-19 16:00:00\" foreground=\"?selectableItemBackground\"/>                                                <text id=\"phone_name\"  padding=\"1\" size=\"13\" text=\"设备名加载中...\" />                                            </vertical>                                            <button id=\"login\" w=\"88dp\" text=\"登录账号\"  color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                        </horizontal>                                    </card>                                    <card w=\"*\" h=\"auto\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"{{auto.service != null}}\" text=\"开启无障碍服务\" id=\"autoService\"/>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装稳定版闲鱼\" id=\"initXyApp\"/>                                            <horizontal w=\"*\" margin=\"20 0\">                                                <text w=\"112dp\">闲鱼版本{{setting.xy_app_version_e}} </text>                                                <button id=\"down_xy_e\"  h=\"30\" padding=\"10 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                            </horizontal>                                            <horizontal w=\"*\" margin=\"20 0\">                                                <text id=\"now_xyv\" w=\"112dp\">版本检测中...</text>                                                <text id=\"now_xyv_msg\" padding=\"10 0\"></text>                                            </horizontal>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"\" text=\"连接总服务器\" id=\"initWs\"/>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"\" text=\"屏幕截图权限\" id=\"jietu\"/>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"true\" text=\"内核自动更新\" id=\"\"/>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"true\" text=\"程序后台运行\" id=\"IgnoredPower\"/>                                            <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"悬浮运行日志\" id=\"log_floaty\"/>                                        </vertical>                                    </card>                                    <card w=\"*\" layout_weight=\"1\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical margin=\"0 5\">                                            <horizontal>                                                <text margin=\"10 3\">心跳保活线程：</text>                                                <text color=\"#ff5d85ff\" margin=\"1 4\" id=\"xintiao\">网络状态检测中...</text>                                            </horizontal>                                            <horizontal>                                                <text margin=\"10 3\">后台弹出界面：</text>                                                <text color=\"#ff5d85ff\" margin=\"1 4\" id=\"houtai_tanchu\">权限状态检测中...</text>                                            </horizontal>                                            <horizontal>                                                <text margin=\"10 3\">程序内核版本：</text>                                                <text id=\"android_banben\" color=\"#ff5d85ff\" margin=\"1 4\">{{setting.v2}}</text>                                            </horizontal>                                            <horizontal>                                                <text margin=\"10 3\">设备内存剩余：</text>                                                <text id=\"AvailMem\" color=\"#ff5d85ff\" margin=\"1 4\">检测中...</text>                                            </horizontal>                                            <horizontal>                                                <text margin=\"10 3\">设备安卓版本：</text>                                                <text id=\"android_ver\" color=\"#ff5d85ff\" margin=\"1 4\">检测中...</text>                                            </horizontal>                                        </vertical>                                    </card>                                    <card w=\"*\" layout_weight=\"1\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical margin=\"0 5\">                                            <text margin=\"10 3\">程序任务队列：</text>                                            <text color=\"#ff5d85ff\" margin=\"10 3\" ellipsize=\"end\" ems=\"20\" line=\"5\" id=\"task_list_text\" text=\"任务队列正常|等待任务中...\"></text>                                        </vertical>                                    </card>                            </vertical></ScrollView>                        </frame>                        <frame>                            <ScrollView><vertical>                                <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical margin=\"2\">                                        <text text=\"养号模式\"  textSize=\"16sp\" margin=\"3\" textColor=\"black\"/>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >翻屏次数：</text>                                                <input w=\"50\" id=\"yanghao_scroll_num\" inputType=\"number\" textSize=\"12sp\"/>                                                <text  w=\"auto\">次</text>                                            </horizontal>                                             <horizontal layout_weight=\"1\">                                                <text  w=\"auto\">点击概率：</text>                                                <input w=\"50\" id=\"yanghao_click_percent\" inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\"> %</text>                                            </horizontal>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >超赞概率：</text>                                                <input w=\"50\" id=\"yanghao_like_percent\" inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\"> %</text>                                            </horizontal>                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\">想要概率：</text>                                                <input w=\"50\" id=\"yanghao_want_percent\" inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\"> %</text>                                            </horizontal>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >收藏概率：</text>                                                <input w=\"50\" id=\"yanghao_collect_percent\"  inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\"> %</text>                                            </horizontal>                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\">留言概率：</text>                                                <input w=\"50\" id=\"yanghao_comment_percent\"  inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\"> %</text>                                            </horizontal>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >留言内容：</text>                                                <input w=\"*\" id=\"yanghao_comment_content\"  lines=\"1\"  textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >私信内容：</text>                                                <input w=\"*\" id=\"yanghao_want_content\"  lines=\"1\"  textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                        <vertical margin=\"3 1 3 1\">                                            <text>注：近期建议调低想要概率和留言概率</text>                                        </vertical>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <button w=\"auto\" layout_weight=\"1\" id=\"yanghao2\" h=\"45\" text=\"开始\" textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                    </vertical>                                </card>                                <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical margin=\"2\">                                        <text text=\"排名模式\"  textSize=\"16sp\" margin=\"3\" textColor=\"black\"/>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >时间间隔：</text>                                                <input w=\"50\"  id=\"re_edit_interval\" inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\">秒</text>                                            </horizontal>                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\">执行数量：</text>                                                <input w=\"50\"  id=\"re_edit_num\" inputType=\"number\"  textSize=\"12sp\"/>                                                <text  w=\"auto\">个</text>                                            </horizontal>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <radiogroup orientation=\"horizontal\" id=\"location_pool\">                                                {/* <text>地址池\u3000：</text> */}                                                <radio id=\"location_g1\" text=\"1池\u3000\u3000\"/>                                                <radio id=\"location_g2\" text=\"2池\u3000\u3000\"/>                                                <radio id=\"location_g3\" text=\"3池\u3000\u3000\"/>                                            </radiogroup>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <button w=\"auto\" layout_weight=\"1\" id=\"re_edit2\" h=\"45\" text=\"开始\" textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                    </vertical>                                </card>                                <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical margin=\"2\">                                        <text text=\"算法模式1\"  textSize=\"16sp\" margin=\"3\" textColor=\"black\"/>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >保留浏览量：</text>                                                <input w=\"50\"  id=\"ll_del_edit_lll\" inputType=\"number\" textSize=\"12sp\"/>                                            </horizontal>                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\">保留想要量：</text>                                                <input w=\"50\" id=\"ll_del_edit_lyl\" inputType=\"number\" textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >保留时间\u3000：</text>                                                <input w=\"50\" id=\"ll1_del_edit_baohu\" inputType=\"number\" textSize=\"12sp\"/>                                                <text  w=\"auto\">时</text>                                            </horizontal>                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\">发布间隔\u3000：</text>                                                <input w=\"50\" id=\"ll_del_edit_interval\" inputType=\"number\" textSize=\"12sp\"/>                                                <text  w=\"auto\">秒</text>                                            </horizontal>                                        </horizontal>                                        <vertical margin=\"3 1 3 1\">                                            <text>此模式只会删除低于保留浏览量的产品</text>                                        </vertical>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <button w=\"auto\" layout_weight=\"1\" id=\"algorithm1\" h=\"45\" text=\"开始运行普通版\" textSize=\"12sp\"/>                                                <button w=\"auto\" layout_weight=\"1\" id=\"algorithm3\" h=\"45\" text=\"开始运行进阶版\" textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                    </vertical>                                </card>                                <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical margin=\"2\">                                        <text text=\"算法模式2\"  textSize=\"16sp\" margin=\"3\" textColor=\"black\"/>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <text  w=\"auto\" >保留时间\u3000：</text>                                                <input w=\"50\" id=\"ll2_del_edit_baohu\" inputType=\"number\" textSize=\"12sp\"/>                                                <text  w=\"auto\">时</text>                                            </horizontal>                                            <horizontal layout_weight=\"1\">                                            </horizontal>                                        </horizontal>                                        <vertical margin=\"3 1 3 1\">                                            <text>此模式下会删除单个浏览量最低的产品</text>                                        </vertical>                                        <horizontal margin=\"3 1 3 1\">                                            <horizontal layout_weight=\"1\">                                                <button w=\"auto\" layout_weight=\"1\" id=\"algorithm2\" h=\"45\" text=\"开始\" textSize=\"12sp\"/>                                            </horizontal>                                        </horizontal>                                    </vertical>                                </card>                            </vertical></ScrollView>                        </frame>                        <frame>                            <ScrollView><vertical>                                    <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical margin=\"2\">                                            <text text=\"基础功能:\" margin=\"3\"/>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"clear_img\" text=\"清除缓存\"/>                                                <button layout_weight=\"1\" id=\"clear_task\" text=\"清空队列\"/>                                                <button layout_weight=\"1\" id=\"restart_task\" text=\"重启队列\"/>                                                <button layout_weight=\"1\" id=\"restart_app\" text=\"重启内核\"/>                                            </horizontal>                                        </vertical>                                    </card>                                    <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical margin=\"2\">                                            <text text=\"闲鱼功能:\" margin=\"3\"/>                                            <horizontal >                                                <Switch layout_weight=\"1\" margin=\"3 3\" textColor=\"#666666\" checked=\"false\" text=\"消息自动回复|聚合聊天|自动上架\" id=\"auto_monitor\"/>                                            </horizontal>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"yanghao\" text=\"某某养号\"/>                                                <button layout_weight=\"1\" id=\"yanghao_unity\" text=\"互助养号\"/>                                                <button layout_weight=\"1\" id=\"yanghao_tz\" text=\"会玩养号\"/>                                                <button layout_weight=\"1\" id=\"re_edit\" text=\"编辑重发\"/>                                            </horizontal>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"xy_goods_polish\" text=\"擦亮商品\"/>                                                <button layout_weight=\"1\" id=\"xy_goods_shelf_up\" text=\"上架商品\"/>                                                <button layout_weight=\"1\" id=\"xy_goods_shelf_down\" text=\"下架商品\"/>                                                <button layout_weight=\"1\" id=\"xy_del_down_goods\" text=\"删除商品\"/>                                            </horizontal>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"xy_init\" text=\"绑定闲鱼\"/>                                                <button layout_weight=\"1\" id=\"register\" text=\"签到鱼币\"/>                                                <button layout_weight=\"1\" id=\"xy_goods_price_cut\" text=\"一键降价\"/>                                                <button layout_weight=\"1\" id=\"remove_dongtai\" text=\"删除动态\"/>                                            </horizontal>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"del_message\" text=\"删除消息\"/>                                                <button layout_weight=\"1\" id=\"remove_liuyan\" text=\"删除留言\"/>                                                <button layout_weight=\"1\" id=\"xy_post_del\" text=\"删除帖子\"/>                                                <button layout_weight=\"1\" id=\"first_show\" text=\"优先曝光\"/>                                            </horizontal>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"fast_goods_del\" text=\"快速下架\"/>                                                <button layout_weight=\"1\" id=\"xy_goods_get\" text=\"宝贝信息\"/>                                                <button layout_weight=\"1\" id=\"fast_re_edit\" text=\"快速编辑\"/>                                                <button layout_weight=\"1\" id=\"get_order\" text=\"同步订单\"/>                                            </horizontal>                                        </vertical>                                    </card>                                    <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical margin=\"2\">                                            <text text=\"转转功能:\" margin=\"3\"/>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"zz_goods_rub\" text=\"擦亮商品\"/>                                                <button layout_weight=\"1\" id=\"zz_goods_up\" text=\"上架商品\"/>                                                <button layout_weight=\"1\" id=\"zz_goods_down\" text=\"下架商品\"/>                                                <button layout_weight=\"1\" id=\"zz_goods_del\" text=\"删除商品\"/>                                            </horizontal>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"zz_yanghao\" text=\"转转养号\"/>                                                <button layout_weight=\"1\" id=\"zz_re_edit\" text=\"流量模式\"/>                                                <button layout_weight=\"1\" id=\"\" text=\"暂无功能\"/>                                                <button layout_weight=\"1\" id=\"open_zz\" text=\"启动转转\"/>                                            </horizontal>                                        </vertical>                                    </card>                                    <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                        <vertical margin=\"2\">                                            <text text=\"红薯功能:\" margin=\"3\"/>                                            <horizontal >                                                <button layout_weight=\"1\" id=\"hs_yanghao\" text=\"红薯养号\"/>                                                <button layout_weight=\"1\" id=\"hs_flow_search\" text=\"搜索养号\"/>                                                <button layout_weight=\"1\" id=\"hs_post_del\" text=\"删除笔记\"/>                                                <button layout_weight=\"1\" id=\"open_hs\" text=\"启动红薯\"/>                                            </horizontal>                                        </vertical>                                    </card>                            </vertical></ScrollView>                        </frame>                        <frame>                            <vertical>                                <card w=\"*\" h=\"*\" margin=\"7 5\" cardCornerRadius=\"6dp\" cardElevation=\"2dp\">                                    <vertical  h=\"*\">                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装转传 {{setting.zz_app_version}}\" id=\"initZzApp\"/>                                        <horizontal w=\"*\" margin=\"20 0\">                                            <text >当前版本：</text>                                            <text id=\"now_zzv\" w=\"50dp\" >检测中...</text>                                            <button id=\"down_zz\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                        </horizontal>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装抖音 {{setting.dy_app_version}}\" id=\"initDyApp\"/>                                        <horizontal w=\"*\" margin=\"20 0\">                                            <text >当前版本 </text>                                            <text id=\"now_dyv\" w=\"50dp\">检测中...</text>                                            <button id=\"down_dy\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                        </horizontal>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装拼多多 {{setting.pdd_app_version}}\" id=\"initPddApp\"/>                                        <horizontal w=\"*\" margin=\"20 0\">                                            <text >当前版本：</text>                                            <text id=\"now_pddv\" w=\"50dp\">检测中...</text>                                            <button id=\"down_pdd\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                        </horizontal>                                        <Switch w=\"*\" margin=\"10 3\" textColor=\"#666666\" checked=\"false\" text=\"安装小红薯 {{setting.hs_app_version}}\" id=\"initXhsApp\"/>                                        <horizontal w=\"*\" margin=\"20 0\">                                            <text >当前版本 </text>                                            <text id=\"now_xhsv\" w=\"50dp\">检测中...</text>                                            <button id=\"down_xhs\"  h=\"30\" padding=\"8 0\" text=\"浏览器下载\" color=\"#ff5d85ff\" style=\"Widget.AppCompat.Button.Borderless.Colored\"/>                                        </horizontal>                                        <text w=\"*\" margin=\"10 5\" textColor=\"#666666\">程序运行日志：</text>                                        <vertical w=\"*\" h=\"auto\" margin=\"10 3\">                                            <com.stardust.autojs.core.console.ConsoleView  id=\"console\"  h=\"*\"/>                                        </vertical>                                    </vertical>                                </card>                            </vertical>                        </frame>                    </viewpager>                </vertical>            </drawer>");
    ui.statusBarColor(setting.bz_colour);
    ui.emitter.on("create_options_menu", _0x390a34 => {
      _0x390a34.add("关于");
    });
    ui.emitter.on("options_item_selected", (_0x3a3f27, _0xcce9a0) => {
      {
        switch (_0xcce9a0.getTitle()) {
          case "关于":
            toast(sys_msg.sys_name + " v" + setting.v);
            break;
        }
        _0x3a3f27.consumed = true;
      }
    });
    activity.setSupportActionBar(ui.toolbar);
    ui.viewpager.setTitles(["基本环境", "流量功能", "基础功能", "插件设置"]);
    ui.tabs.setupWithViewPager(ui.viewpager);
    ui.console.setConsole(runtime.console);
    try {
      ui.console.setInputEnabled(false);
      ui.console.setColor("V", "#c2c2c2");
      ui.console.setColor("D", "#cc000000");
      ui.console.setColor("I", "#009688");
      ui.console.setColor("W", "#1E9FFF");
      ui.console.setColor("E", "#FF5722");
    } catch (_0x502597) {
      let _0x1a9051 = new android.util.SparseArray();
      let _0x452ddc = android.util.Log;
      _0x1a9051.put(_0x452ddc.VERBOSE, new java.lang.Integer(colors.parseColor("#c2c2c2")));
      _0x1a9051.put(_0x452ddc.INFO, new java.lang.Integer(colors.parseColor("#009688")));
      _0x1a9051.put(_0x452ddc.ERROR, new java.lang.Integer(colors.parseColor("#FF5722")));
      _0x1a9051.put(_0x452ddc.WARN, new java.lang.Integer(colors.parseColor("#1E9FFF")));
      _0x1a9051.put(_0x452ddc.DEBUG, new java.lang.Integer(colors.parseColor("#cc000000")));
      _0x1a9051.put(_0x452ddc.ASSERT, new java.lang.Integer(colors.parseColor("#ffff534e")));
      ui.console.setColors(_0x1a9051);
      try {
        {
          input_container = activity.findViewById(context.getResources().getIdentifier("input_container", "id", context.getPackageName()));
          input_container.attr("visibility", "gone");
        }
      } catch (_0x5c7885) {
        input_container = activity.findViewById(context.getResources().getIdentifier("inputContainer", "id", context.getPackageName()));
        input_container.attr("visibility", "gone");
      }
    }
    ui.initWs.on("click", function () {
      {
        if (auto.service == null) {
          {
            ui.initWs.checked = false;
            let _0xb244ce = "请先开启无障碍服务";
            toast(_0xb244ce);
            console.error(_0xb244ce);
            return false;
          }
        }
        if (!setting.s.contains("access_token")) {
          ui.initWs.checked = false;
          let _0xb827ea = "请先进行登录";
          toast(_0xb827ea);
          console.error(_0xb827ea);
          return false;
        }
        main();
      }
    });
    ui.login.on("click", function (_0x1b1d05) {
      setting.s.remove("access_token");
      setting.s.remove("username");
      setting.s.remove("end_time");
      ui.username.setText("请登录账号");
      ui.login.setText("登录账号");
      showLoginUI();
    });
    ui.emitter.on("resume", function () {
      common.init_ui();
      if (ui.autoService) {
        {
          if (auto.service != null) {
            ui.autoService.checked = true;
            setting.click_autoService = false;
          } else {
            ui.autoService.checked = false;
            if (setting.click_autoService) {
              ui.viewpager.currentItem = 4;
              console.warn("请点击基本环境->开启无障碍服务，如您的无障碍服务无法开启，请参考：\n1.确保开启的位置正确，如不确定开哪请截图咨询我们（不要开无障碍快捷方式）\n2.尝试关闭无障碍后再开启，或可以直接重启手机（此为安卓系统的bug）\n3.将外接的数据线拔掉后再开启，可能与您连接的某种服务冲突（如tc）\n4.提示'某应用遮挡了权限请求界面'，是因为某应用开了悬浮窗遮挡了本应用，关闭该应用的悬浮窗就好了\n5.部分年代久远的小众手机无无障碍服务，如果小辣椒、朵唯手机");
            }
          }
          ui.initXyApp.checked = common.xyv_correct();
          ui.auto_monitor.checked = setting.auto_monitor != null && setting.auto_monitor.isAlive();
          houtai_tanchu();
          ui.jietu.checked = setting.requestScreenshot;
        }
      }
      authenticate();
    });
    ui.autoService.on("check", function (_0x5b743f) {
      if (_0x5b743f && auto.service == null) {
        {
          app.startActivity({
            "action": "android.settings.ACCESSIBILITY_SETTINGS"
          });
        }
      }
    });
    ui.log_floaty.on("check", function (_0xb2be5b) {
      if (_0xb2be5b) {
        {
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
        }
      } else {
        setting.s.put("log_floaty", false);
        setting.log_floaty = null;
        floaty.closeAll();
      }
    });
    ui.jietu.on("check", function (_0x42a121) {
      if (_0x42a121 && !setting.requestScreenshot) {
        {
          threads.start(function () {
            try {
              {
                if (requestScreenCapture()) {
                  setting.requestScreenshot = true;
                  console.verbose("屏幕截图权限申请成功");
                } else {
                  {
                    setting.requestScreenshot = false;
                  }
                }
              }
            } catch (_0x22b103) {
              setting.requestScreenshot = false;
            }
          });
        }
      }
    });
    ui.initXyApp.on("check", function (_0x583749) {
      {
        if (_0x583749) {
          let _0x40964b = "";
          if (common.xyv_correct()) {
            {
              _0x40964b = "稳定版闲鱼初始化完成";
            }
          } else {
            if (setting.is_install_app) {
              toastLog("正在下载其他App");
              ui.initXyApp.checked = false;
              return;
            }
            if (auto.service != null) {
              ui.viewpager.currentItem = 4;
              _0x40964b = "正在安装闲鱼App";
              toast(_0x40964b);
              console.log(_0x40964b);
              console.log("请等待闲鱼App安装完成..");
              threads.start(function () {
                {
                  init.install("xy");
                }
              });
            } else {
              _0x40964b = "请先开启无障碍服务";
              toast(_0x40964b);
              console.log(_0x40964b);
              ui.initXyApp.checked = false;
            }
          }
        }
      }
    });
    ui.initZzApp.on("check", function (_0x4fc63c) {
      {
        if (_0x4fc63c) {
          if (common.getVersionName(setting.zz_pname) == setting.zz_app_version) {
            {}
          } else {
            {
              if (setting.is_install_app) {
                {
                  toastLog("正在下载其他App");
                  ui.initZzApp.checked = false;
                  return;
                }
              }
              if (auto.service != null) {
                ui.viewpager.currentItem = 4;
                let _0x1e90f4 = "正在安装转转App";
                toast(_0x1e90f4);
                console.log(_0x1e90f4);
                threads.start(function () {
                  init.install("zz");
                });
              } else {
                let _0x361e98 = "请先开启无障碍服务";
                toast(_0x361e98);
                console.log(_0x361e98);
                ui.initZzApp.checked = false;
              }
            }
          }
        }
      }
    });
    ui.initDyApp.on("check", function (_0x54f190) {
      if (_0x54f190) {
        {
          if (common.getVersionName(setting.dy_pname) == setting.dy_app_version) {} else {
            {
              if (setting.is_install_app) {
                toastLog("正在下载其他App");
                ui.initDyApp.checked = false;
                return;
              }
              if (auto.service != null) {
                {
                  ui.viewpager.currentItem = 4;
                  let _0x483240 = "正在安装抖音App";
                  toast(_0x483240);
                  console.log(_0x483240);
                  threads.start(function () {
                    init.install("dy");
                  });
                }
              } else {
                let _0x2c1b04 = "请先开启无障碍服务";
                toast(_0x2c1b04);
                console.log(_0x2c1b04);
                ui.initDyApp.checked = false;
              }
            }
          }
        }
      }
    });
    ui.initPddApp.on("check", function (_0x790bee) {
      {
        if (_0x790bee) {
          if (common.getVersionName(setting.pdd_pname) == setting.pdd_app_version) {
            {}
          } else {
            {
              if (setting.is_install_app) {
                toastLog("正在下载其他App");
                ui.initPddApp.checked = false;
                return;
              }
              if (auto.service != null) {
                ui.viewpager.currentItem = 4;
                let _0x45783d = "正在安装拼多多App";
                toast(_0x45783d);
                console.log(_0x45783d);
                threads.start(function () {
                  init.install("pdd");
                });
              } else {
                let _0x1070ca = "请先开启无障碍服务";
                toast(_0x1070ca);
                console.log(_0x1070ca);
                ui.initPddApp.checked = false;
              }
            }
          }
        }
      }
    });
    ui.auto_monitor.on("check", function (_0x5b6b73) {
      if (_0x5b6b73) {
        {
          ui.viewpager.currentItem = 4;
          if (setting.auto_monitor == null || !setting.auto_monitor.isAlive()) {
            message.auto_monitor();
          }
        }
      } else {
        {
          setting.auto_monitor.interrupt();
        }
      }
    });
    ui.clear_img.on("click", function (_0x2fea58) {
      toast("清除缓存");
      ui.viewpager.currentItem = 4;
      common.clear_img();
      toastLog("清除缓存成功");
    });
    ui.clear_task.on("click", function (_0xf055ab) {
      toast("清空任务队列");
      ui.viewpager.currentItem = 4;
      common.clear_task();
      toastLog("清空任务队列成功");
    });
    ui.restart_task.on("click", function (_0x5a03b4) {
      toast("重启任务队列");
      ui.viewpager.currentItem = 4;
      common.restart_task();
      toastLog("重启任务队列成功");
    });
    ui.restart_app.on("click", function (_0x3d2caa) {
      toast("重启内核");
      ui.viewpager.currentItem = 4;
      common.restart_aj();
    });
    ui.down_xy_e.on("click", function (_0x10141b) {
      toast("浏览器下载闲鱼");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.xy_app_url_e);
    });
    ui.down_zz.on("click", function (_0x41f070) {
      toast("浏览器下载转转");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.zz_app_url);
    });
    ui.down_dy.on("click", function (_0x4ee94e) {
      toast("浏览器下载抖音");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.dy_app_url);
    });
    ui.down_pdd.on("click", function (_0x958cc4) {
      toast("浏览器下载拼多多");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.pdd_app_url);
    });
    ui.down_xhs.on("click", function (_0x494761) {
      toast("浏览器下载小红书");
      ui.viewpager.currentItem = 4;
      common.browser_down(setting.xhs_app_url);
    });
    ui.hs_yanghao.on("click", function (_0x20b6b4) {
      {
        toast("红薯养号");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "hs.yanghao",
          "task_type_name": "红薯养号"
        });
      }
    });
    ui.hs_flow_search.on("click", function (_0x1a10f9) {
      {
        toast("红薯搜索养号");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "hs.flow_search",
          "task_type_name": "红薯搜索养号"
        });
      }
    });
    ui.hs_post_del.on("click", function (_0x2eba43) {
      toast("红薯删除笔记");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "hs.post_del",
        "task_type_name": "红薯删除笔记"
      });
    });
    ui.open_hs.on("click", function (_0x3d2eeb) {
      toast("启动红薯");
      ui.viewpager.currentItem = 4;
      threads.start(function () {
        {
          common.hs_home();
        }
      });
    });
    ui.zz_goods_rub.on("click", function (_0x5af911) {
      {
        toast("擦亮商品");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "wbzz.zz_goods_polish"
        });
      }
    });
    ui.zz_goods_down.on("click", function (_0x4ec11a) {
      toast("下架商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "wbzz.zz_goods_shelf_down"
      });
    });
    ui.zz_goods_up.on("click", function (_0x3bc317) {
      toast("上架商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "wbzz.zz_goods_shelf_up"
      });
    });
    ui.zz_goods_del.on("click", function (_0x497df4) {
      {
        toast("删除商品");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "wbzz.zz_goods_del"
        });
      }
    });
    ui.zz_yanghao.on("click", function (_0x38a76d) {
      toast("自动养号");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "wbzz.zz_yanghao"
      });
    });
    ui.zz_re_edit.on("click", function (_0x4671cf) {
      toast("流量模式");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "wbzz.zz_re_edit"
      });
    });
    ui.open_zz.on("click", function (_0x1f0f28) {
      {
        toast("启动转转");
        ui.viewpager.currentItem = 4;
        threads.start(function () {
          {
            common.zz_home();
          }
        });
      }
    });
    ui.yanghao.on("click", function (_0x11c6c7) {
      toast("某鱼养号");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.yanghao"
      });
    });
    ui.yanghao2.on("click", function (_0x57c906) {
      toast("养号模式");
      common.set_configure();
      setTimeout(function () {
        {
          setting.task_list.push({
            "task_type": "goods_manage.yanghao"
          });
        }
      }, 1000);
    });
    ui.yanghao_unity.on("click", function (_0x1740d1) {
      toast("互助养号");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.yanghao_unity"
      });
    });
    ui.yanghao_tz.on("click", function (_0x41a6ce) {
      {
        toast("会玩养号");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "goods_manage.yanghao_tz"
        });
      }
    });
    ui.re_edit.on("click", function (_0x2a6d21) {
      toast("编辑重发");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_re_edit"
      });
    });
    ui.re_edit2.on("click", function (_0x382fe7) {
      toast("排名模式");
      common.set_configure();
      setTimeout(function () {
        setting.task_list.push({
          "task_type": "goods_manage.xy_re_edit"
        });
      }, 1000);
    });
    ui.algorithm1.on("click", function (_0x32366a) {
      setting.task_list.push({
        "task_type": "goods_manage.algorithm1"
      });
    });
    ui.algorithm2.on("click", function (_0x435e1f) {
      setting.task_list.push({
        "task_type": "goods_manage.algorithm2"
      });
    });
    ui.algorithm3.on("click", function (_0x2852aa) {
      setting.task_list.push({
        "task_type": "goods_manage.algorithm3"
      });
    });
    ui.fast_re_edit.on("click", function (_0x514bfd) {
      toast("快速编辑");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_fast_re_edit"
      });
    });
    ui.xy_goods_polish.on("click", function (_0x3dc23f) {
      toast("擦亮商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_polish"
      });
    });
    ui.xy_goods_shelf_up.on("click", function (_0x32b8bd) {
      toast("上架商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_shelf_up"
      });
    });
    ui.xy_goods_shelf_down.on("click", function (_0x357ae9) {
      {
        toast("下架商品");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "goods_manage.xy_goods_shelf_down"
        });
      }
    });
    ui.xy_del_down_goods.on("click", function (_0x299ba2) {
      toast("删除商品");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_del_down_goods"
      });
    });
    ui.xy_init.on("click", function (_0x539a8c) {
      {
        toast("绑定闲鱼");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "goods_manage.xy_init"
        });
      }
    });
    ui.register.on("click", function (_0x36c261) {
      toast("签到鱼币");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.register"
      });
    });
    ui.xy_goods_price_cut.on("click", function (_0x2c0c04) {
      toast("一键降价");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_price_cut"
      });
    });
    ui.remove_dongtai.on("click", function (_0x50308e) {
      toast("删除动态");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.remove_dongtai"
      });
    });
    ui.del_message.on("click", function (_0x128318) {
      toast("删除消息");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.del_message"
      });
    });
    ui.remove_liuyan.on("click", function (_0x457bb7) {
      {
        toast("删除留言");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "goods_manage.remove_liuyan"
        });
      }
    });
    ui.xy_post_del.on("click", function (_0x4cba30) {
      {
        toast("删除闲鱼帖子");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "post_add.xy_post_del"
        });
      }
    });
    ui.first_show.on("click", function (_0x302efc) {
      toast("优先曝光");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.first_show"
      });
    });
    ui.fast_goods_del.on("click", function (_0x256389) {
      {
        toast("快速下架");
        ui.viewpager.currentItem = 4;
        setting.task_list.push({
          "task_type": "goods_manage.fast_goods_del"
        });
      }
    });
    ui.xy_goods_get.on("click", function (_0x1787a4) {
      toast("宝贝信息");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "goods_manage.xy_goods_get"
      });
    });
    ui.get_order.on("click", function (_0x20f7ff) {
      toast("同步订单");
      ui.viewpager.currentItem = 4;
      setting.task_list.push({
        "task_type": "order.get_order"
      });
    });
    ui.location_g1.on("check", _0x3d2553 => {
      {
        if (_0x3d2553) {
          setting.now_area = "area1";
          setting.configure.area_pool = "1";
          console.verbose("选中地址池一");
        }
      }
    });
    ui.location_g2.on("check", _0xf94aad => {
      if (_0xf94aad) {
        setting.now_area = "area2";
        setting.configure.area_pool = "2";
        console.verbose("选中地址池二");
      }
    });
    ui.location_g3.on("check", _0x40d367 => {
      {
        if (_0x40d367) {
          setting.now_area = "area3";
          setting.configure.area_pool = "3";
          console.verbose("选中地址池三");
        }
      }
    });
  }
};
module.exports = bz;