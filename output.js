//Wed Mar 25 2026 13:28:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var goods_add = {
  "run": function (_0x407c74) {
    console.log("开始发布商品");
    if (_0x407c74) {
      console.verbose("正在获取发布宝贝列表，请稍等...");
      let _0x358300 = common.get_task_detail(_0x407c74);
      var _0x1eafd9 = JSON.parse(_0x358300.data.args);
      setting.xy_dk = _0x1eafd9.xy_dk;
      time_blank = parseInt(_0x1eafd9.time_blank);
      guanlian = _0x1eafd9.guanlian;
      random_image = _0x1eafd9.random_image;
      img_tab = _0x1eafd9.img_tab;
      watermark = _0x1eafd9.watermark;
      wenan = _0x1eafd9.wenan;
      random_title = _0x1eafd9.random_title;
      post_type = _0x1eafd9.post_type;
      sku_open = _0x1eafd9.sku_open;
      dbt = _0x1eafd9.dbt;
      clear_emoji = _0x1eafd9.clear_emoji;
      auto_fsj = _0x1eafd9.auto_fsj;
      let _0x41a5e3 = _0x1eafd9.insert_desc;
      let _0x513449 = _0x1eafd9.insert_desc_content;
      setting.super_show = _0x1eafd9.super_show;
      var _0x6e4a12 = common.get_goods(_0x1eafd9.goods, wenan);
      for (let _0x270131 = 0; _0x270131 < _0x6e4a12.length; _0x270131++) {
        if (_0x6e4a12[_0x270131].location1 && JSON.parse(_0x6e4a12[_0x270131].location1).length != 0) {
          _0x6e4a12[_0x270131].location = JSON.parse(_0x6e4a12[_0x270131].location1)[0].name;
        }
        if (auto_fsj) {
          if (auto_fsj.indexOf("%") == -1) {
            _0x6e4a12[_0x270131].ykj_fsj = _0x6e4a12[_0x270131].ykj_price2 - auto_fsj;
          } else {
            _0x6e4a12[_0x270131].ykj_fsj = _0x6e4a12[_0x270131].ykj_price2 - _0x6e4a12[_0x270131].ykj_price2 * auto_fsj.split("%")[0] / 100;
            _0x6e4a12[_0x270131].ykj_fsj = Math.ceil(_0x6e4a12[_0x270131].ykj_fsj * 100) / 100;
          }
          _0x6e4a12[_0x270131].ykj_fsj = _0x6e4a12[_0x270131].ykj_fsj.toFixed(2);
          if (_0x6e4a12[_0x270131].ykj_fsj <= 0) {
            {
              _0x6e4a12[_0x270131].ykj_fsj = _0x6e4a12[_0x270131].ykj_price2 - 0.01;
              console.warn(_0x6e4a12[_0x270131].title + " 粉丝价不能小于或等于0，已自动设置粉丝价为原价减0.01元");
            }
          } else if (_0x6e4a12[_0x270131].ykj_fsj < _0x6e4a12[_0x270131].ykj_price2 * 0.1) {
            _0x6e4a12[_0x270131].ykj_fsj = _0x6e4a12[_0x270131].ykj_price2 - 0.01;
            console.warn(_0x6e4a12[_0x270131].title + " 粉丝价最低为原价的10%，已自动设置粉丝价为原价减0.01元");
          }
        }
        if (img_tab == "close") {
          _0x6e4a12[_0x270131].tab = null;
        }
        if (random_title == "open" && _0x6e4a12[_0x270131].t2) {
          {
            let _0x472d18 = _0x6e4a12[_0x270131].t2.split("\n");
            let _0x305aa7 = [];
            _0x472d18.push(_0x6e4a12[_0x270131].title);
            for (let _0x270131 = 0; _0x270131 < _0x472d18.length; _0x270131++) {
              if (_0x472d18[_0x270131]) {
                {
                  _0x305aa7.push(_0x472d18[_0x270131]);
                }
              }
            }
            _0x6e4a12[_0x270131].title = _0x305aa7[random(0, _0x305aa7.length - 1)];
            console.verbose("随机标题：");
            console.verbose(_0x6e4a12[_0x270131].title);
          }
        }
        if (_0x41a5e3 && _0x513449) {
          let _0x4af7ca = _0x513449[random(0, _0x513449.length - 1)];
          _0x6e4a12[_0x270131].content = _0x6e4a12[_0x270131].content + "\n" + _0x4af7ca;
          console.verbose(_0x6e4a12[_0x270131].content);
        }
      }
      if (_0x1eafd9.auto_video == "open") {
        let _0x59dd47 = "智能视频准备中...";
        console.verbose(_0x59dd47);
        for (let _0x270131 = 0; _0x270131 < _0x6e4a12.length; _0x270131++) {
          if (_0x6e4a12[_0x270131].images.length > 1) {
            {
              _0x6e4a12[_0x270131].auto_video = true;
              _0x6e4a12[_0x270131].video_music = _0x1eafd9.video_music;
            }
          } else {
            _0x6e4a12[_0x270131].auto_video = false;
          }
        }
      } else {
        for (let _0x31fdd8 = 0; _0x31fdd8 < _0x6e4a12.length; _0x31fdd8++) {
          {
            _0x6e4a12[_0x31fdd8].auto_video = false;
          }
        }
      }
      let _0x29f413 = _0x1eafd9.location_arr;
      let _0x466bf7 = _0x1eafd9.location_arr_type;
      if (_0x466bf7 == "device") {
        console.log("设备地址模式");
        let _0x1f5c19 = http.post(setting.api_domain + "get_one_device", {
          "android_id": device.getAndroidId()
        });
        let _0x358300 = _0x1f5c19.body.json();
        if (_0x358300.code == 0) {
          {
            let _0x108f95 = JSON.parse(_0x358300.data.area_pool);
            if (_0x108f95) {
              let _0x29f413 = [];
              for (let _0x31fdd8 = 0; _0x31fdd8 < _0x108f95.length; _0x31fdd8++) {
                _0x29f413.push(_0x108f95[_0x31fdd8].name);
              }
              console.log("设备地址池：" + _0x29f413);
              for (let _0x31fdd8 = 0; _0x31fdd8 < _0x6e4a12.length; _0x31fdd8++) {
                {
                  let _0x392559 = _0x29f413[Math.floor(Math.random() * _0x29f413.length)];
                  _0x6e4a12[_0x31fdd8].location = _0x392559;
                }
              }
            } else {
              console.verbose("设备地址池为空，已切换为默认地点模式");
            }
          }
        }
      } else if (_0x466bf7 == "random") {
        {
          if (_0x29f413) {
            console.log("随机地址模式");
            for (let _0x2ebba2 = 0; _0x2ebba2 < _0x6e4a12.length; _0x2ebba2++) {
              let _0x392559 = _0x29f413[Math.floor(Math.random() * _0x29f413.length)];
              _0x6e4a12[_0x2ebba2].location = _0x392559;
            }
          } else {
            console.error("随机地址模式，但地址池为空，已切换为默认地点模式");
          }
        }
      } else if (_0x466bf7 == "all") {
        if (_0x29f413) {
          console.log("多地铺货模式：");
          console.log("您选择了多地铺货模式，该模式会把宝贝在您选择的地址中都发一遍！举例：现有A宝贝，发布地址中有A地址、B地址，A宝贝发布时会使用A地址和B地址各发布一次，共发布两个宝贝。");
          let _0x19155a = [];
          for (let _0x2ebba2 = 0; _0x2ebba2 < _0x6e4a12.length; _0x2ebba2++) {
            {
              let _0x47590d = _0x6e4a12[_0x2ebba2];
              for (let _0x3aebf5 = 0; _0x3aebf5 < _0x29f413.length; _0x3aebf5++) {
                _0x47590d.location = _0x29f413[_0x3aebf5];
                _0x19155a.push(JSON.parse(JSON.stringify(_0x47590d)));
              }
            }
          }
          _0x6e4a12 = _0x19155a;
        } else {
          console.error("多地铺货模式，但地址池为空，已切换为默认地点模式");
        }
      } else {
        {
          console.log("默认地点模式");
        }
      }
      let _0x1b369c = [];
      for (let _0x1389e3 = 0; _0x1389e3 < _0x6e4a12.length; _0x1389e3++) {
        {
          _0x1b369c.push(_0x6e4a12[_0x1389e3].id);
        }
      }
      if (!setting.gadd_msg.contains("local_already_add_goods")) {
        setting.gadd_msg.put("local_already_add_goods", []);
      }
      if (JSON.stringify(_0x1b369c) === JSON.stringify(setting.gadd_msg.get("local_all_goods"))) {
        let _0x528d09 = setting.gadd_msg.get("local_already_add_goods");
        if (Array.isArray(_0x528d09) && _0x528d09.length === 0) {} else {
          {
            console.info("继续上次进度发布宝贝");
            common.web_log("继续上次进度发布宝贝", "success");
            for (let _0x1389e3 = 0; _0x1389e3 < _0x6e4a12.length; _0x1389e3++) {
              {
                if (_0x528d09.indexOf(_0x6e4a12[_0x1389e3].id) > -1) {
                  delete _0x6e4a12[_0x1389e3];
                }
              }
            }
          }
        }
      } else {
        setting.gadd_msg.put("local_all_goods", _0x1b369c);
      }
      if (_0x1eafd9.xy_yt) {
        for (let _0x4110ab = 0; _0x4110ab < _0x6e4a12.length; _0x4110ab++) {
          if (_0x6e4a12[_0x4110ab] !== undefined) {
            {
              _0x6e4a12[_0x4110ab].xy_yt = _0x1eafd9.xy_yt;
            }
          }
        }
      }
    } else {
      setting.xy_dk = "关";
      time_blank = setting.configure.ll_del_edit_interval;
      guanlian = "open";
      random_image = "close";
      img_tab = "open";
      watermark = "open";
      wenan = "open";
      random_title = "open";
      post_type = "";
      sku_open = "open";
      dbt = "close";
      clear_emoji = "open";
      insert_desc = "";
      super_show = "close";
      auto_video = "close";
      var _0x489fe8 = [];
      var _0x55096f = setting.deleted_goods;
      Object.keys(_0x55096f).forEach(function (_0x21026c) {
        console.log(_0x21026c, _0x55096f[_0x21026c]);
        if (!_0x55096f[_0x21026c].been_added) {
          _0x489fe8.push(_0x21026c);
          _0x55096f[_0x21026c].been_added = true;
        }
      });
      var _0x6e4a12 = common.titles_get_goods(_0x489fe8);
      random_image = false;
    }
    setting.album_index = 0;
    setting.add_goods_index = 0;
    threads.start(function () {
      {
        console.verbose("开始后台下载图片视频..");
        let _0x3c6fff = [];
        _0x6e4a12.forEach(function (_0x44cb72, _0x48d543) {
          setting.album_index = _0x48d543;
          while (_0x48d543 - setting.add_goods_index > 1) {
            sleep(5000);
          }
          console.verbose("开始预下载第" + (_0x48d543 + 1) + "套图片");
          if (_0x3c6fff.indexOf(_0x44cb72.title_md5) == -1) {
            {
              if (_0x44cb72.images.length != 0) {
                {
                  _0x3c6fff.push(_0x44cb72.title_md5);
                  if (random_image == "open") {
                    console.warn("随机主图已开启，开始随机主图");
                    _0x44cb72.images = _0x44cb72.images.slice(0, 9);
                    let _0x12f2df = _0x44cb72.images.splice(random(0, _0x44cb72.images.length - 1), 1);
                    _0x44cb72.images.splice(0, 0, _0x12f2df[0]);
                    console.warn("随机主图完成，开始下载图片...");
                  }
                  let _0x2d6f21 = get_images(_0x44cb72, _0x1eafd9);
                  if (watermark == "open") {
                    if (setting.xy_dk == "开") {
                      {
                        _0x2d6f21 = common.watermark(_0x2d6f21, setting.xy_name_sub, setting.xy_name2_sub);
                      }
                    } else {
                      {
                        _0x2d6f21 = common.watermark(_0x2d6f21, setting.xy_name, setting.xy_name2);
                      }
                    }
                  }
                  common.download_img(_0x44cb72.title_md5, _0x2d6f21, false);
                }
              }
              common.download_video(_0x44cb72);
            }
          } else {
            console.verbose("第" + (_0x48d543 + 1) + "套宝贝素材已下载..");
          }
          console.verbose("第" + (_0x48d543 + 1) + "套图片下载完成");
          if (_0x6e4a12.length == 1) {
            {
              setting.album_index = 1;
            }
          }
        });
        console.info("所有宝贝图片视频下载完成");
      }
    });
    common.xy_home();
    _0x6e4a12.forEach(function (_0x2b3bca, _0x3c2c7b) {
      {
        setting.add_goods_index = _0x3c2c7b;
        add_wait(_0x3c2c7b, _0x6e4a12);
        while (true) {
          {
            if (_0x6e4a12.length == 1) {
              {
                if (setting.album_index == 1) {
                  break;
                }
              }
            } else {
              {
                if (_0x6e4a12.length == setting.album_index + 1) {
                  break;
                }
                if (setting.album_index > _0x3c2c7b) {
                  {
                    break;
                  }
                }
              }
            }
            var _0xd758c4 = "正在下载第" + (_0x3c2c7b + 1) + "个宝贝的图片和视频，请稍等...";
            console.log(_0xd758c4);
            toast(_0xd758c4);
            sleep(5000);
          }
        }
        threads.start(function () {
          {
            toastLog("宝贝标题：" + _0x2b3bca.title);
            common.web_log("开始发布：" + _0x2b3bca.title, "success");
          }
        });
        if (_0x2b3bca.goods_class == "mfs") {
          {
            console.error("闲鱼已取消免费送发布功能");
            while (true) {
              toastLog("闲鱼已取消免费送发布功能");
              sleep(3000);
            }
          }
        } else if (_0x2b3bca.goods_class == "zf") {
          {
            let _0xd758c4 = "新版本租房宝贝已停止适配，请将租房宝当成普通宝贝发布";
            toast(_0xd758c4);
            console.error(_0xd758c4);
            return true;
          }
        } else {
          {
            fbxz_title_content(_0x2b3bca);
            if (_0x2b3bca.images.length != 0) {
              select_aibum(_0x2b3bca);
            }
            fbxz_select_video(_0x2b3bca);
            if (setting.xf && _0x2b3bca.location) {
              let _0x704cde = descStartsWith("发布").findOne().depth();
              if (!desc("AI帮你写, AI帮你润色").className("android.widget.ImageView").depth(_0x704cde + 4).clickable(true).exists()) {
                common.select_location_fbxz(_0x2b3bca.location);
                setting.xf_bottom_location = false;
              } else {
                {
                  console.verbose("顶部无地址选择按钮，稍后将在页面底部选择地址");
                  setting.xf_bottom_location = true;
                }
              }
            } else {
              common.select_location_fbxz(_0x2b3bca.location);
            }
            if (_0x2b3bca.tab_fl != "[]" && _0x2b3bca.tab_fl != null) {
              {
                let _0x255fa0 = JSON.parse(_0x2b3bca.tab_fl);
                if (_0x255fa0.indexOf("分类#住房出租") != -1) {
                  {
                    toastLog("住房出租宝贝，自动即将选择为其他闲置发布");
                    for (let _0x5e1873 = 0; _0x5e1873 < 10; _0x5e1873++) {
                      descStartsWith("分类\n").findOne().find(scrollable())[0].scrollForward();
                      sleep(300);
                      if (descStartsWith("其他闲置").exists()) {
                        descStartsWith("其他闲置").findOne().click();
                        sleep(500);
                        sleep(2000);
                        _0x2b3bca.tab_fl = "[]";
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (_0x2b3bca.goods_class == "pm") {
              console.verbose("拍卖宝贝设置起拍价、保证金...");
              click_price_ele_e();
              let _0x1ba1ed = desc("价格设置").findOne().bounds();
              common.my_click(_0x1ba1ed.right - 50, _0x1ba1ed.centerY());
              sleep(1000);
              goods_pm_price(_0x2b3bca);
            } else if (_0x2b3bca.goods_class == "ykj") {
              let _0x119d85 = sku_open;
              if (_0x119d85 == "open") {
                if (_0x2b3bca.sku_name && _0x2b3bca.skus && _0x2b3bca.sku_name != "[]") {
                  _0x119d85 = "close";
                  if (_0x2b3bca.sku_check_res == "规格正确") {
                    if (descStartsWith("商品规格").exists()) {
                      _0x119d85 = "open";
                    } else {
                      common.push_goods_page_down();
                      sleep(2000);
                      if (descStartsWith("商品规格").exists()) {
                        {
                          _0x119d85 = "open";
                        }
                      } else {
                        common.push_goods_page_down();
                        sleep(2000);
                        if (descStartsWith("商品规格").exists()) {
                          _0x119d85 = "open";
                        } else {
                          {
                            console.verbose("非鱼小铺账号和租赁宝贝不支持多规格发布");
                          }
                        }
                      }
                    }
                  } else {
                    console.log(_0x2b3bca.sku_check_res);
                    console.log("宝贝标题：" + _0x2b3bca.title);
                    console.log("规格错误，已自动为您忽略规格，如需发布多规格请前往总控修正规格");
                  }
                } else {
                  _0x119d85 = "close";
                  console.verbose("该宝贝无规格");
                }
              } else {
                console.log("您未开启多规格发布");
              }
              if (_0x119d85 == "open") {
                {
                  console.verbose("发布多规格宝贝");
                  if (setting.xf) {
                    goods_ykj_add_skuf(_0x2b3bca);
                  } else {
                    {
                      goods_ykj_add_skue(_0x2b3bca);
                    }
                  }
                  goods_ykj_fhfs(_0x2b3bca);
                }
              } else {
                goods_ykj_price(_0x2b3bca);
              }
            }
            if (setting.xf) {
              guanlian_shuxing_f(_0x2b3bca);
            } else {
              {
                guanlian_shuxing_e(_0x2b3bca);
              }
            }
            common.clear_dbt(dbt);
            if (setting.xf && setting.xf_bottom_location && _0x2b3bca.location) {
              if (click_select_location_ele_f()) {
                {
                  common.select_location(_0x2b3bca.location);
                }
              }
            }
            if (_0x2b3bca.xy_yt) {
              {
                console.verbose("准备选择圈子:" + _0x2b3bca.xy_yt);
                common.push_goods_page_down();
                sleep(2000);
                if (descStartsWith("同步宝贝到圈子").exists()) {
                  let _0x443d06 = desc("同步宝贝到圈子").clickable(false).findOne().bounds();
                  sleep(500);
                  let _0x32ce75 = _0x443d06.top + (_0x443d06.bottom - _0x443d06.top) * 3 / 4;
                  common.my_click(_0x443d06.centerX(), _0x32ce75);
                  toastLog("等待圈子加载完毕...");
                  for (let _0x5e1873 = 0; _0x5e1873 < 12; _0x5e1873++) {
                    {
                      sleep(1000);
                      console.verbose("等待圈子加载");
                      if (descStartsWith("宝贝与圈子不符会减少").exists()) {
                        {
                          break;
                        }
                      }
                    }
                  }
                  if (!descStartsWith("宝贝与圈子不符会减少").exists()) {
                    {
                      console.verbose("圈子未加载");
                      let _0x33fb25 = desc("同步宝贝到我的圈子").findOne().depth();
                      let _0x51bbde = desc("同步宝贝到我的圈子").findOne().indexInParent();
                      className("android.widget.ImageView").clickable(true).depth(_0x33fb25).indexInParent(_0x51bbde + 1).findOne().click();
                    }
                  } else {
                    console.verbose("开始选择圈子");
                    console.verbose("如果账号圈子有更新，需重新运行绑定闲鱼任务同步圈子");
                    let _0x5a0f27 = 0;
                    while (true) {
                      if (descContains(_0x2b3bca.xy_yt).exists()) {
                        {
                          break;
                        }
                      }
                      if (desc("哎呀，到底了").exists()) {
                        {
                          console.verbose("哎呀，到底了");
                          break;
                        }
                      }
                      if (scrollDown(0)) {
                        _0x5a0f27 = 0;
                      } else {
                        _0x5a0f27 += 1;
                        sleep(2500);
                      }
                      if (_0x5a0f27 >= 3) {
                        break;
                      }
                      sleep(600);
                    }
                    if (descContains(_0x2b3bca.xy_yt).exists()) {
                      descContains(_0x2b3bca.xy_yt).findOne().click();
                      console.verbose("成功选择圈子:" + _0x2b3bca.xy_yt);
                    } else {
                      {
                        let _0x33fb25 = desc("同步宝贝到我的圈子").findOne().depth();
                        className("android.widget.ImageView").clickable(true).depth(_0x33fb25).indexInParent(1).findOne().click();
                        console.verbose("未找到圈子，请先绑定闲鱼同步圈子");
                      }
                    }
                  }
                  sleep(1000);
                } else {
                  {
                    console.error("您未加入圈子或当前宝贝分类与圈子不符");
                  }
                }
              }
            }
            if (_0x2b3bca.ykj_yanji) {
              console.verbose("准备点击验货宝...");
              common.push_goods_page_down();
              sleep(1500);
              if (descStartsWith("宝贝优先推荐").exists()) {
                if (descStartsWith("宝贝优先推荐").findOne().find(clickable()).length != 0) {
                  {
                    descStartsWith("宝贝优先推荐").findOne().find(clickable())[0].click();
                  }
                }
              } else if (descStartsWith("开启后，买家可选购验货服务").exists()) {
                if (descStartsWith("开启后，买家可选购验货服务").findOne().find(className("android.widget.Switch")).length != 0) {
                  {
                    descStartsWith("开启后，买家可选购验货服务").findOne().find(className("android.widget.Switch"))[0].click();
                  }
                }
              }
              sleep(3000);
              while (desc("确定开启验货宝").clickable(false).exists()) {
                {
                  sleep(2500);
                  let _0xd758c4 = "请手动选择验货宝属性";
                  console.verbose(_0xd758c4);
                  toast(_0xd758c4);
                }
              }
              sleep(1000);
              if (desc("确定开启验货宝").clickable().exists()) {
                desc("确定开启验货宝").clickable().findOne().click();
                sleep(2000);
              }
              toastLog("等待验货宝选择结果");
              sleep(3800);
              toastLog("等待验货宝选择结果");
              sleep(3800);
              toastLog("等待验货宝选择结果");
              sleep(3800);
            }
            scrollUp();
            sleep(500);
            if (descEndsWith("点击重试").exists()) {
              {
                descEndsWith("点击重试").click();
                sleep(2000);
                toastLog("检查的上传失败图片，正在重新上传");
              }
            }
            if (post_type == "存草稿") {
              console.verbose("存草稿");
              for (let _0x4d8811 = 0; _0x4d8811 < 30; _0x4d8811++) {
                {
                  if (desc("存草稿").exists()) {
                    {
                      desc("存草稿").findOne().click();
                      sleep(3000);
                      console.verbose("等待存草稿完成");
                    }
                  } else {
                    {
                      if (descEndsWith("我知道了").exists()) {
                        descEndsWith("我知道了").findOne().click();
                        sleep(500);
                        break;
                      }
                    }
                  }
                  sleep(1000);
                }
              }
            } else {
              {
                common.goods_publish(false, _0x2b3bca);
              }
            }
          }
        }
        let _0x47119b = Math.ceil((_0x3c2c7b + 1) / _0x6e4a12.length * 100);
        console.verbose("宝贝发布进度：" + _0x47119b + "%");
        if (_0x47119b != 100) {
          common.reload_task_table(_0x407c74, "run", "", _0x47119b);
        }
        common.web_log("\"" + _0x2b3bca.title + "\"发布完成", "success");
        toastLog("\"" + _0x2b3bca.title + "\"发布完成");
        if (_0x407c74) {
          {
            let _0x4313d0 = setting.gadd_msg.get("local_already_add_goods");
            _0x4313d0.push(_0x2b3bca.id);
            setting.gadd_msg.put("local_already_add_goods", _0x4313d0);
          }
        }
        common.back_xy_home();
      }
    });
    toastLog("全部商品发布成功");
    common.clear_img();
    if (_0x407c74) {
      {
        threads.start(function () {
          {
            common.web_log("发布闲鱼商品任务执行成功", "success");
            common.reload_task_table(_0x407c74, "end");
            setting.gadd_msg.put("local_already_add_goods", []);
          }
        });
      }
    }
  }
};
function guanlian_shuxing_f(_0x6f906e) {
  console.verbose("开始关联宝贝属性...");
  common.swipe_fl_ele_xf();
  if (descContains("ISBN码").exists() && desc("请​扫​描​图​书​I​S​B​N​码​").exists()) {
    toastLog("无法扫描图书ISBN码，自动选择其他闲置");
    for (let _0x7be28d = 0; _0x7be28d < 10; _0x7be28d++) {
      try {
        desc("分类, 分类").findOne().parent().child(2).child(0).scrollForward();
        sleep(300);
      } catch (_0x36c896) {
        desc("分类, 分类").findOne().parent().child(1).child(0).scrollForward();
        sleep(300);
      }
      if (descStartsWith("可选其他闲置").exists()) {
        descStartsWith("可选其他闲置").findOne().click();
        sleep(500);
        sleep(2000);
        break;
      }
    }
    common.swipe_fl_ele_xf();
  }
  if (_0x6f906e.tab_fl != "[]" && _0x6f906e.tab_fl != null) {
    {
      toastLog("分类/品牌：" + _0x6f906e.tab_fl);
      let _0x1e79b7 = JSON.parse(_0x6f906e.tab_fl);
      console.verbose("开始添加自定义分类/品牌");
      for (let _0x7be28d = 0; _0x7be28d < _0x1e79b7.length; _0x7be28d++) {
        {
          let _0x42acaf = _0x1e79b7[_0x7be28d].split("#")[1];
          if (_0x1e79b7[_0x7be28d].indexOf("分类#") != -1) {
            console.verbose("选择分类");
            for (let _0x388ca1 = 0; _0x388ca1 < 10; _0x388ca1++) {
              {
                try {
                  {
                    if (descStartsWith("可选" + _0x42acaf + ",").exists()) {
                      {
                        descStartsWith("可选" + _0x42acaf + ",").findOne().click();
                        sleep(500);
                        sleep(2000);
                        console.verbose("已选中分类：" + _0x42acaf);
                        break;
                      }
                    }
                    if (descStartsWith("已选中" + _0x42acaf + ",").exists()) {
                      {
                        console.verbose("已选中分类：" + _0x42acaf);
                        break;
                      }
                    }
                    console.verbose("滑动分类控件");
                    if (desc("分类, 分类").exists()) {
                      desc("分类, 分类").findOne().parent().child(1).child(0).scrollForward();
                      sleep(300);
                    } else if (desc("分类, 更多信息\n分类").exists()) {
                      desc("分类, 更多信息\n分类").findOne().find(scrollable())[0].scrollForward();
                      sleep(300);
                    } else {
                      console.error("滑动控件不存在");
                    }
                  }
                } catch (_0x31c500) {
                  {
                    console.verbose("选择\"分类\"时滑动失败");
                  }
                }
              }
            }
          } else if (_0x1e79b7[_0x7be28d].indexOf("品牌#") != -1 && desc("品牌, 品牌").exists()) {
            {
              console.verbose("选择品牌");
              for (let _0x210b89 = 0; _0x210b89 < 5; _0x210b89++) {
                if (desc("更多品牌").exists()) {
                  sleep(1000);
                  if (desc("更多品牌").exists()) {
                    {
                      desc("更多品牌").findOne().click();
                      sleep(500);
                      common.my_input(_0x42acaf);
                      console.verbose("注意：如文字输入失败，请授予闲鱼和系统剪切板读写权限");
                      console.verbose("准备点击'添加'按钮");
                      if (desc("添加").exists()) {
                        desc("添加").click();
                        sleep(3500);
                      } else {
                        {
                          for (let _0x210b89 = 0; _0x210b89 < 10; _0x210b89++) {
                            sleep(1000);
                            if (className("android.view.View").clickable().find().length >= 2) {
                              {
                                className("android.view.View").clickable().find()[1].click();
                                sleep(2000);
                                break;
                              }
                            }
                          }
                        }
                      }
                      toastLog(_0x1e79b7[_0x7be28d] + " 选择成功");
                    }
                  }
                  break;
                }
                try {
                  {
                    desc("分类, 分类").findOne().parent().child(3).child(0).scrollForward();
                    sleep(300);
                  }
                } catch (_0x11ae7e) {
                  {
                    console.verbose("选择\"品牌\"时滑动失败");
                  }
                }
              }
            }
          } else if (_0x1e79b7[_0x7be28d].indexOf("品种#") != -1 && (desc("狗狗品种, 狗狗品种").exists() || desc("猫咪品种, 猫咪品种").exists() || desc("兔兔品种, 兔兔品种").exists())) {
            console.verbose("选择品种");
            for (let _0x451d4c = 0; _0x451d4c < 5; _0x451d4c++) {
              if (desc("更多狗狗品种").exists() || desc("更多猫咪品种").exists() || desc("更多兔兔品种").exists()) {
                {
                  sleep(800);
                  if (desc("更多狗狗品种").exists()) {
                    desc("更多狗狗品种").findOne().click();
                    sleep(500);
                  } else if (desc("更多猫咪品种").exists()) {
                    {
                      desc("更多猫咪品种").findOne().click();
                      sleep(500);
                    }
                  } else if (desc("更多兔兔品种").exists()) {
                    desc("更多兔兔品种").findOne().click();
                    sleep(500);
                  }
                  common.my_input(_0x42acaf);
                  console.verbose("注意：如文字输入失败，请授予闲鱼和系统剪切板读写权限");
                  console.verbose("准备点击'添加'按钮");
                  if (desc("添加").exists()) {
                    desc("添加").click();
                    sleep(3500);
                  } else {
                    {
                      for (let _0x451d4c = 0; _0x451d4c < 10; _0x451d4c++) {
                        {
                          sleep(1000);
                          if (className("android.view.View").clickable().find().length >= 2) {
                            className("android.view.View").clickable().find()[1].click();
                            sleep(2000);
                            break;
                          }
                        }
                      }
                    }
                  }
                  toastLog(_0x1e79b7[_0x7be28d] + " 选择成功");
                  selected_tabs.push(_0x1e79b7[_0x7be28d]);
                  break;
                }
              }
              try {
                {
                  desc("分类, 分类").findOne().parent().child(3).child(0).scrollForward();
                  sleep(300);
                }
              } catch (_0x4d621a) {
                {
                  console.verbose("选择\"品种\"时滑动失败");
                }
              }
            }
          } else if (false && _0x1e79b7[_0x7be28d].indexOf("型号#") != -1 && desc("型号, 型号").exists()) {
            {
              console.verbose("选择型号");
              for (let _0x1ba90d = 0; _0x1ba90d < 5; _0x1ba90d++) {
                if (desc("更多型号").exists()) {
                  sleep(800);
                  desc("更多型号").findOne().click();
                  sleep(500);
                  common.my_input(_0x42acaf);
                  console.verbose("准备点击'添加'按钮");
                  if (desc("添加").exists()) {
                    desc("添加").click();
                    sleep(3500);
                  } else {
                    {
                      for (let _0x1ba90d = 0; _0x1ba90d < 10; _0x1ba90d++) {
                        sleep(1000);
                        if (className("android.view.View").clickable().find().length >= 2) {
                          className("android.view.View").clickable().find()[1].click();
                          sleep(2000);
                          break;
                        }
                      }
                    }
                  }
                  toastLog(_0x1e79b7[_0x7be28d] + " 选择成功");
                  break;
                }
                try {
                  {
                    desc("分类, 分类").findOne().parent().child(5).child(0).scrollForward();
                    sleep(300);
                  }
                } catch (_0x28fa2c) {
                  {
                    console.verbose("选择\"型号\"时滑动失败");
                  }
                }
              }
            }
          }
        }
      }
      for (let _0x1adca = 0; _0x1adca < 8; _0x1adca++) {
        {
          for (let _0x7be28d = 0; _0x7be28d < _0x1e79b7.length; _0x7be28d++) {
            {
              if (descStartsWith("可选" + _0x1e79b7[_0x7be28d] + ",").exists()) {
                {
                  descStartsWith("可选" + _0x1e79b7[_0x7be28d] + ",").findOne().click();
                  sleep(500);
                  console.verbose("选中自定义属性：" + _0x1e79b7[_0x7be28d]);
                }
              }
              if (descStartsWith("已选中" + _0x1e79b7[_0x7be28d] + ",").exists()) {}
            }
          }
          if (desc("分类, 分类").exists()) {
            desc("分类, 分类").findOne().parent().find(scrollable()).scrollForward();
            sleep(500);
          }
        }
      }
    }
  } else if (guanlian == "open") {}
  console.verbose("分类/品牌/属性 选择结束");
}
function guanlian_shuxing_e(_0x2c8393) {
  console.verbose("开始关联宝贝属性...");
  common.swipe_fl_ele();
  if (descContains("ISBN码").exists() && desc("请​扫​描​图​书​I​S​B​N​码​").exists()) {
    {
      toastLog("无法扫描图书ISBN码，自动选择其他闲置");
      var _0x30ca10 = desc("请​扫​描​图​书​I​S​B​N​码​").findOne().indexInParent();
      var _0x1ed2b1 = desc("请​扫​描​图​书​I​S​B​N​码​").findOne().depth();
      for (let _0x736614 = 0; _0x736614 < 10; _0x736614++) {
        depth(_0x1ed2b1).indexInParent(_0x30ca10 - 1).findOne().find(scrollable())[0].scrollForward();
        sleep(300);
        if (descStartsWith("其他闲置").exists()) {
          {
            descStartsWith("其他闲置").findOne().click();
            sleep(500);
            sleep(2000);
            _0x2c8393.tab_fl = "[]";
            break;
          }
        }
      }
      common.swipe_fl_ele();
    }
  }
  var _0x57a8bb = descStartsWith("分类/").exists() ? "分类/" : "更多信息";
  if (descStartsWith(_0x57a8bb).findOne().parent().desc()) {
    {
      var _0x18e434 = descStartsWith(_0x57a8bb).findOne().parent().desc().split("\n");
    }
  } else if (descStartsWith(_0x57a8bb).findOne().parent().parent().desc()) {
    var _0x18e434 = descStartsWith(_0x57a8bb).findOne().parent().parent().desc().split("\n");
  } else {
    {
      console.log("fenlei_arr 数组获取失败，用空数组代替");
      var _0x18e434 = [];
      _0x2c8393.tab_fl = "[]";
    }
  }
  if (_0x18e434[0] == "添加宝贝信息") {
    _0x18e434.shift();
  }
  if (_0x18e434[0] !== "分类") {
    {
      console.verbose(_0x18e434);
    }
  }
  if (_0x2c8393.tab_fl != "[]" && _0x2c8393.tab_fl != null) {
    {
      toastLog("分类/品牌：" + _0x2c8393.tab_fl);
      let _0x3d519f = JSON.parse(_0x2c8393.tab_fl);
      console.verbose("开始添加自定义分类/品牌");
      var _0x13d1fc = [];
      for (let _0x736614 = 0; _0x736614 < _0x3d519f.length; _0x736614++) {
        var _0x57a8bb = descStartsWith("分类/").exists() ? "分类/" : "更多信息";
        if (descStartsWith(_0x57a8bb).findOne().parent().desc()) {
          var _0x18e434 = descStartsWith(_0x57a8bb).findOne().parent().desc().split("\n");
        } else {
          {
            var _0x18e434 = descStartsWith(_0x57a8bb).findOne().parent().parent().desc().split("\n");
          }
        }
        if (_0x18e434[0] == "添加宝贝信息") {
          {
            _0x18e434.shift();
          }
        }
        if (_0x18e434[0] !== "分类") {
          {
            console.verbose(_0x18e434);
          }
        }
        if (_0x13d1fc.indexOf(_0x3d519f[_0x736614]) != -1) {
          {
            continue;
          }
        }
        if (_0x3d519f[_0x736614].indexOf("#") == -1) {
          {
            continue;
          }
        }
        sleep(500);
        let _0x2d7222 = _0x3d519f[_0x736614].split("#")[1];
        if (_0x3d519f[_0x736614].indexOf("分类#") != -1) {
          console.verbose("选择分类");
          for (let _0x2039ad = 0; _0x2039ad < 5; _0x2039ad++) {
            {
              if (desc(_0x2d7222).exists()) {
                {
                  desc(_0x2d7222).findOne().click();
                  sleep(3000);
                  toastLog(_0x3d519f[_0x736614] + " 选择成功");
                  sleep(3000);
                  _0x13d1fc.push(_0x3d519f[_0x736614]);
                  common.swipe_fl_ele();
                  break;
                }
              }
              try {
                let _0x30ca10 = descStartsWith(_0x57a8bb).findOne().indexInParent();
                let _0x1ed2b1 = descStartsWith(_0x57a8bb).findOne().depth();
                depth(_0x1ed2b1).indexInParent(_0x30ca10 + 1).findOne().find(scrollable())[0].scrollForward();
                sleep(300);
              } catch (_0x439e58) {
                console.verbose("选择\"分类\"时滑动失败");
              }
            }
          }
        } else if (_0x3d519f[_0x736614].indexOf("品牌#") != -1 && ["品牌"].indexOf(_0x18e434[1]) != -1) {
          {
            console.verbose("选择品牌");
            setClip(_0x2d7222);
            for (let _0x486323 = 0; _0x486323 < 5; _0x486323++) {
              if (desc("更多品牌").exists()) {
                {
                  sleep(1000);
                  if (desc("更多品牌").exists()) {
                    desc("更多品牌").findOne().click();
                    sleep(500);
                    textStartsWith("请输入").findOne().paste();
                    sleep(500);
                    console.verbose("注意：如文字输入失败，请授予闲鱼和系统剪切板读写权限");
                    console.verbose("准备点击'添加'按钮");
                    if (desc("添加").exists()) {
                      {
                        desc("添加").click();
                        sleep(3500);
                      }
                    } else {
                      for (let _0x486323 = 0; _0x486323 < 10; _0x486323++) {
                        sleep(1000);
                        if (className("android.view.View").clickable().find().length >= 2) {
                          className("android.view.View").clickable().find()[1].click();
                          sleep(2000);
                          break;
                        }
                      }
                    }
                    toastLog(_0x3d519f[_0x736614] + " 选择成功");
                    _0x13d1fc.push(_0x3d519f[_0x736614]);
                  }
                  break;
                }
              }
              try {
                let _0x30ca10 = descStartsWith(_0x57a8bb).findOne().indexInParent();
                let _0x1ed2b1 = descStartsWith(_0x57a8bb).findOne().depth();
                depth(_0x1ed2b1).indexInParent(_0x30ca10 + 2).findOne().find(scrollable())[0].scrollForward();
                sleep(300);
              } catch (_0x3fca80) {
                console.verbose("选择\"品牌\"时滑动失败");
              }
            }
          }
        } else if (_0x3d519f[_0x736614].indexOf("品种#") != -1 && ["狗狗品种", "猫咪品种", "兔兔品种"].indexOf(_0x18e434[1]) != -1) {
          console.verbose("选择品种");
          setClip(_0x2d7222);
          for (let _0x4e9712 = 0; _0x4e9712 < 5; _0x4e9712++) {
            if (desc("更多狗狗品种").exists() || desc("更多猫咪品种").exists() || desc("更多兔兔品种").exists()) {
              sleep(800);
              if (desc("更多狗狗品种").exists()) {
                desc("更多狗狗品种").findOne().click();
                sleep(500);
              } else if (desc("更多猫咪品种").exists()) {
                desc("更多猫咪品种").findOne().click();
                sleep(500);
              } else if (desc("更多兔兔品种").exists()) {
                desc("更多兔兔品种").findOne().click();
                sleep(500);
              }
              textStartsWith("请输入").findOne().paste();
              sleep(500);
              console.verbose("注意：如文字输入失败，请授予闲鱼和系统剪切板读写权限");
              console.verbose("准备点击'添加'按钮");
              if (desc("添加").exists()) {
                desc("添加").click();
                sleep(3500);
              } else {
                {
                  for (let _0x4e9712 = 0; _0x4e9712 < 10; _0x4e9712++) {
                    sleep(1000);
                    if (className("android.view.View").clickable().find().length >= 2) {
                      className("android.view.View").clickable().find()[1].click();
                      sleep(2000);
                      break;
                    }
                  }
                }
              }
              toastLog(_0x3d519f[_0x736614] + " 选择成功");
              _0x13d1fc.push(_0x3d519f[_0x736614]);
              break;
            }
            try {
              {
                let _0x30ca10 = descStartsWith(_0x57a8bb).findOne().indexInParent();
                let _0x1ed2b1 = descStartsWith(_0x57a8bb).findOne().depth();
                depth(_0x1ed2b1).indexInParent(_0x30ca10 + 2).findOne().find(scrollable())[0].scrollForward();
                sleep(300);
              }
            } catch (_0x22848c) {
              {
                console.verbose("选择\"品种\"时滑动失败");
              }
            }
          }
        } else if (_0x3d519f[_0x736614].indexOf("型号#") != -1 && _0x18e434[2] == "型号") {
          console.verbose("选择型号");
          setClip(_0x2d7222);
          for (let _0x57b7dd = 0; _0x57b7dd < 5; _0x57b7dd++) {
            if (desc("更多型号").exists()) {
              sleep(800);
              desc("更多型号").findOne().click();
              sleep(500);
              textStartsWith("请输入").findOne().paste();
              sleep(500);
              console.verbose("准备点击'添加'按钮");
              if (desc("添加").exists()) {
                {
                  desc("添加").click();
                  sleep(3500);
                }
              } else {
                {
                  for (let _0x57b7dd = 0; _0x57b7dd < 10; _0x57b7dd++) {
                    sleep(1000);
                    if (className("android.view.View").clickable().find().length >= 2) {
                      {
                        className("android.view.View").clickable().find()[1].click();
                        sleep(2000);
                        break;
                      }
                    }
                  }
                }
              }
              toastLog(_0x3d519f[_0x736614] + " 选择成功");
              _0x13d1fc.push(_0x3d519f[_0x736614]);
              break;
            }
            try {
              let _0x30ca10 = descStartsWith(_0x57a8bb).findOne().indexInParent();
              let _0x1ed2b1 = descStartsWith(_0x57a8bb).findOne().depth();
              depth(_0x1ed2b1).indexInParent(_0x30ca10 + 2).findOne().find(scrollable())[0].scrollForward();
              sleep(300);
            } catch (_0x4bc8d7) {
              console.verbose("选择\"品种\"时滑动失败");
            }
          }
        }
      }
      console.verbose("开始选择其他属性.....");
      var _0x57a8bb = descStartsWith("分类/").exists() ? "分类/" : "更多信息";
      _0x3d519f.shift();
      if (["品牌"].indexOf(_0x18e434[1]) != -1) {
        {
          _0x3d519f.shift();
        }
      }
      if (["狗狗品种", "猫咪品种", "兔兔品种"].indexOf(_0x18e434[1]) != -1) {
        _0x3d519f.shift();
      }
      if (["型号"].indexOf(_0x18e434[2]) != -1) {
        _0x3d519f.shift();
      }
      console.verbose(_0x3d519f);
      for (let _0x4a2362 = 0; _0x4a2362 < 5; _0x4a2362++) {
        for (let _0x736614 = 0; _0x736614 < _0x3d519f.length; _0x736614++) {
          {
            if (_0x13d1fc.indexOf(_0x3d519f[_0x736614]) != -1) {
              continue;
            }
            if (descStartsWith(_0x57a8bb).findOne().parent().find(desc(_0x3d519f[_0x736614]).clickable()).length != 0) {
              {
                let _0x140549 = "选自定义属性：" + _0x3d519f[_0x736614];
                _0x13d1fc.push(_0x3d519f[_0x736614]);
                toast(_0x140549);
                console.verbose(_0x140549);
                descStartsWith(_0x57a8bb).findOne().parent().find(desc(_0x3d519f[_0x736614]).clickable()).click();
                sleep(3000);
              }
            }
          }
        }
        var _0x57a8bb = descStartsWith("分类/").exists() ? "分类/" : "更多信息";
        if (_0x4a2362 == 0) {
          {
            toastLog("开始滑动选择更多属性");
          }
        }
        if (_0x4a2362 != 4) {
          descStartsWith(_0x57a8bb).findOne().parent().find(scrollable()).scrollForward();
          sleep(1000);
          console.verbose("第" + (_0x4a2362 + 1) + "次滑动");
        }
      }
    }
  } else if (guanlian == "open") {
    console.log("无自定义的分类/品牌且开启了自动关联，开始自动点击分类/品牌的第一项");
    for (let _0x336634 = 0; _0x336634 < 8; _0x336634++) {
      {
        sleep(2300);
        if (descStartsWith("分类/").exists() || descStartsWith("更多信息").exists()) {
          var _0x57a8bb = descStartsWith("分类/").exists() ? "分类/" : "更多信息";
          if (descStartsWith("分类/ISBN码").exists()) {} else {
            descStartsWith(_0x57a8bb).findOne().parent().find(indexInParent(0).depth(setting.goods_dep + 6).clickable()).click();
            sleep(2000);
            if (_0x2c8393.new != 1) {
              if (desc("几乎全新").exists()) {
                console.verbose("非全新宝贝...");
                desc("几乎全新").click();
                sleep(1000);
              }
            }
            break;
          }
        } else {
          {
            toastLog("等待'分类/品牌'加载完毕");
          }
        }
      }
    }
  }
  console.verbose("分类/品牌/属性 选择结束");
}
function click_price_ele_e() {
  while (!descStartsWith("价格设置, 商品规格").exists() && !descStartsWith("价格设置, 发货方式").exists() && !descStartsWith("价格设置, 交付方式").exists() && !desc("价格设置").clickable(false).exists()) {
    console.verbose("价格设置不存在，开始下滑");
    common.push_goods_page_down();
    sleep(2000);
  }
  if (desc("价格设置").clickable(false).exists()) {
    {
      if (desc("价格设置").clickable(false).findOne().bounds().height() < 90) {
        {
          common.push_goods_page_down();
          sleep(2000);
        }
      }
    }
  } else if (descStartsWith("价格设置, 商品规格").exists()) {
    if (descStartsWith("价格设置, 商品规格").findOne().bounds().height() < 180) {
      {
        common.push_goods_page_down();
        sleep(2000);
      }
    }
  } else if (descStartsWith("价格设置, 发货方式").exists()) {
    if (descStartsWith("价格设置, 发货方式").findOne().bounds().height() < 180) {
      common.push_goods_page_down();
      sleep(2000);
    }
  } else if (descStartsWith("价格设置, 交付方式").exists()) {
    if (descStartsWith("价格设置, 交付方式").findOne().bounds().height() < 180) {
      {
        common.push_goods_page_down();
        sleep(2000);
      }
    }
  }
  if (descStartsWith("商品规格").exists() && desc("价格设置").exists()) {
    if (descStartsWith("商品规格").findOne().bounds().top == desc("价格设置").findOne().bounds().top) {
      let _0x17e62e = desc("价格设置").findOne().bounds().height();
      if (_0x17e62e > 450) {
        console.verbose("价格控件和商品规格控件顶部坐标重合，价格设置控件高度大于450");
      } else {
        {
          console.verbose("价格设置控件高度：" + _0x17e62e);
          console.verbose("价格控件和商品规格控件顶部坐标重合。价格设置控件高度小于450，下滑一次");
          common.push_goods_page_down();
          sleep(2000);
        }
      }
    }
  }
  if (descStartsWith("价格设置, 商品规格").exists()) {
    {
      let _0x48eb84 = descStartsWith("价格设置, 商品规格").findOne().bounds();
      console.verbose("价格设置, 商品规格");
      common.my_click(_0x48eb84.centerX(), _0x48eb84.centerY());
    }
  } else if (descStartsWith("价格设置, 发货方式").exists()) {
    {
      let _0x17fe7f = descStartsWith("价格设置, 发货方式").findOne().bounds();
      console.verbose("价格设置, 发货方式");
      common.my_click(_0x17fe7f.centerX(), _0x17fe7f.top + 50);
    }
  } else if (descStartsWith("价格设置, 交付方式").exists()) {
    let _0x2552f8 = descStartsWith("价格设置, 交付方式").findOne().bounds();
    console.verbose("价格设置, 交付方式");
    common.my_click(_0x2552f8.centerX(), _0x2552f8.top + 50);
  } else if (desc("价格设置").clickable(false).exists()) {
    console.verbose("价格设置");
    let _0x5033ce = desc("价格设置").clickable(false).findOne().bounds();
    console.verbose("价格设置控件高度：" + _0x5033ce.height());
    common.my_click(_0x5033ce.centerX(), _0x5033ce.centerY());
  } else {
    console.verbose("价格控件未出现1");
  }
  for (let _0x1decf2 = 0; _0x1decf2 < 6; _0x1decf2++) {
    console.verbose("等待价格编辑页面'确定'按钮出现");
    sleep(1000);
    if (desc("确定").exists()) {
      console.verbose("价格编辑页面出现...");
      break;
    }
  }
  if (!desc("确定").exists()) {
    {
      console.verbose("检测是否被识别为租赁");
      if (descStartsWith("价格设置, 商品规格").exists()) {
        console.verbose("价格设置, 商品规格");
        var _0xe9a4ee = descStartsWith("价格设置, 商品规格").findOne().bounds();
      } else if (descStartsWith("价格设置, 发货方式").exists()) {
        {
          console.verbose("价格设置, 发货方式");
          var _0xe9a4ee = descStartsWith("价格设置, 发货方式").findOne().bounds();
        }
      } else if (descStartsWith("价格设置, 交付方式").exists()) {
        {
          console.verbose("价格设置, 交付方式");
          var _0xe9a4ee = descStartsWith("价格设置, 交付方式").findOne().bounds();
        }
      } else if (desc("价格设置").clickable(false).exists()) {
        {
          console.verbose("价格设置");
          var _0xe9a4ee = desc("价格设置").clickable(false).findOne().bounds();
          console.verbose("价格设置控件高度：" + _0xe9a4ee.height());
        }
      } else {
        {
          console.verbose("价格控件未出现2，重新检测");
          click_price_ele_e();
          return false;
        }
      }
      if (_0xe9a4ee.height() > 200) {
        console.verbose("识别为租赁模式，切换回售卖模式");
        let _0x46a922 = _0xe9a4ee.right - 90 - 30 * setting.zl_xy_add;
        let _0x739e35 = _0xe9a4ee.top + 30 + 20 * setting.zl_xy_add;
        common.my_click(_0x46a922, _0x739e35);
        sleep(2000);
        setting.zl_xy_add = setting.zl_xy_add + 1;
        console.verbose("切换完成，重新检测");
        click_price_ele_e();
        return false;
      }
    }
  }
  desc("确定").waitFor();
  sleep(600);
  setting.zl_xy_add = 1;
}
function click_select_location_ele_f() {
  if (!desc("选择位置").exists()) {
    console.verbose("选择位置");
    common.push_goods_page_down();
    sleep(2000);
  }
  if (!desc("选择位置").exists()) {
    {
      console.verbose("选择位置");
      common.push_goods_page_down();
      sleep(2000);
    }
  }
  if (desc("选择位置").clickable(false).exists()) {
    if (desc("选择位置").clickable(false).findOne().bounds().height() < 90) {
      common.push_goods_page_down();
      sleep(2000);
    }
  }
  if (desc("选择位置").exists()) {
    for (let _0x57cccb = 1; _0x57cccb < 6; _0x57cccb++) {
      if (desc("选择位置").exists()) {
        {
          let _0x33a2ae = desc("选择位置").findOne().bounds();
          console.verbose("点击选择位置按钮");
          common.my_click(_0x33a2ae.centerX(), _0x33a2ae.bottom - 10 * _0x57cccb);
          sleep(1000);
        }
      } else {
        {
          return true;
        }
      }
    }
  } else {
    console.verbose("选择位置按钮不存在");
    return false;
  }
}
function goods_ykj_price(_0x47dab3) {
  console.verbose("填写价格相关信息......");
  click_price_ele_e();
  if (descStartsWith("库存").exists()) {
    {
      console.verbose("开始设置库存");
      desc("库存设置").findOne().click();
      if (_0x47dab3.kc) {
        let _0x46efa4 = String(_0x47dab3.kc);
        console.verbose("库存数量：" + _0x46efa4);
        common.enter_num(_0x46efa4);
        sleep(500);
      } else {
        {
          common.enter_num("1999");
          sleep(500);
          let _0x4bf64f = "该闲鱼号支持库存但后台未设置库存，默认设置为1999";
          console.verbose(_0x4bf64f);
          toast(_0x4bf64f);
        }
      }
    }
  }
  if (_0x47dab3.ykj_fsj) {
    console.verbose("设置粉丝价");
    common.fensijia(_0x47dab3.ykj_fsj);
  }
  desc("确定").findOne().click();
  sleep(500);
  descStartsWith("发布").clickable().waitFor();
  sleep(600);
  goods_ykj_fhfs(_0x47dab3);
}
function goods_ykj_fhfs(_0x5e10a3) {
  console.verbose("设置发货方式");
  if (descEndsWith("到店发货").exists()) {
    console.verbose("出现到店发货，无法设置运费或包邮");
  } else if (descStartsWith("发货方式").exists() || descStartsWith("交付方式").exists() || descStartsWith("价格设置, 发货方式").exists()) {
    if (descStartsWith("发货方式").exists()) {
      descStartsWith("发货方式").findOne().click();
      sleep(1000);
    }
    if (descStartsWith("交付方式").exists()) {
      descStartsWith("交付方式").findOne().click();
      sleep(1000);
    } else if (descStartsWith("价格设置, 发货方式").exists()) {
      {
        descStartsWith("价格设置, 发货方式").findOne().click();
        sleep(1000);
      }
    }
    for (let _0x1966d4 = 0; _0x1966d4 < 10; _0x1966d4++) {
      {
        if (desc("确定").exists()) {
          break;
        }
        sleep(1000);
      }
    }
    if (_0x5e10a3.ykj_wxyj == 1) {
      {
        console.verbose("点击无需邮寄");
        let _0x27d4a1 = descStartsWith("邮寄").findOne().find(className("android.widget.ImageView"))[3].bounds();
        common.my_click(_0x27d4a1.centerX(), _0x27d4a1.centerY());
        sleep(1000);
      }
    } else if (_0x5e10a3.ykj_yunfei) {
      console.verbose("填写运费");
      let _0x297511 = descStartsWith("邮寄").findOne().find(className("android.widget.ImageView"))[2].bounds();
      common.my_click(_0x297511.centerX(), _0x297511.centerY());
      sleep(1000);
      setText(_0x5e10a3.ykj_yunfei);
      _0x297511 = desc("确定").find()[1].bounds();
      common.my_click(_0x297511.centerX(), _0x297511.centerY());
      sleep(1000);
    } else {}
    if (_0x5e10a3.ykj_zt == 1) {
      if (desc("买家自提").exists()) {
        {
          console.verbose("点击自提");
          let _0x161e5a = desc("买家自提").findOne().bounds();
          common.my_click(_0x161e5a.left + _0x161e5a.width() * 9 / 10, _0x161e5a.centerY());
          sleep(1000);
        }
      } else {
        {
          console.verbose("自提按钮不存在");
        }
      }
    }
    if (desc("确定").clickable(true).exists()) {
      {
        desc("确定").clickable(true).findOne().click();
        sleep(500);
      }
    } else if (desc("确定").clickable(false).exists()) {
      let _0x529bcf = desc("确定").clickable(false).findOne().bounds();
      common.my_click(_0x529bcf.centerX(), _0x529bcf.centerY());
      sleep(500);
      if (desc("确定").exists()) {
        console.verbose("'确定'按钮依然存在，再点击一次");
        sleep(2000);
        common.my_click(100, _0x529bcf.centerY());
        sleep(1000);
      }
    } else {
      console.verbose("确定按钮不存在");
    }
    descStartsWith("发布").clickable().waitFor();
    sleep(600);
  }
}
function goods_ykj_add_skuf(_0x24b376) {
  descStartsWith("商品规格").findOne().click();
  sleep(2500);
  while (true) {
    {
      if (desc("设置宝贝规格").exists()) {
        console.verbose("宝贝规格编辑框出现");
        break;
      }
      if (textContains("\n删除\n").exists()) {
        console.verbose("宝贝规格编辑框出现2");
        break;
      }
      console.verbose("等待多规格宝贝的运费填写框出现...");
      sleep(1000);
    }
  }
  sleep(2000);
  var _0x51ce8e = className("android.widget.EditText").findOne().bounds();
  var _0x5b0546 = _0x51ce8e.left + _0x51ce8e.width() * 93 / 100;
  for (let _0x57c976 = 0; _0x57c976 < 3; _0x57c976++) {
    common.my_click(_0x5b0546, _0x51ce8e.top + 50 + 30 * _0x57c976);
    sleep(600);
    common.my_click(_0x5b0546, _0x51ce8e.top + 50 + 30 * _0x57c976);
    sleep(600);
    if (desc("完整聊天").exists()) {
      back();
      sleep(1000);
      common.my_click(_0x5b0546, _0x51ce8e.top + 50 + 30 * _0x57c976);
      sleep(600);
      common.my_click(_0x5b0546, _0x51ce8e.top + 50 + 30 * _0x57c976);
      sleep(600);
    }
  }
  console.verbose("开始填写规格名");
  let _0x123ae3 = JSON.parse(_0x24b376.sku_name);
  let _0x4b3cfb = JSON.parse(_0x24b376.skus);
  if (_0x4b3cfb.length > 100) {
    console.error("检测到您的宝贝规格数量已超过100个，建议您立即进行精简。\n过多的规格设置会给发布效率和买家体验带来严重负面影响：\n1. 影响卖家效率与系统稳定：\n发布耗时： 创建和编辑大量规格会极大消耗您的发布时间。\n系统风险： 在闲鱼平台，过多规格易导致发布控件（如点击、填写、返回）响应异常或卡顿，造成发布失败。\n管理困难：规格过多会使库存管理变得极其复杂，容易出错（如超卖、错发）。\n2. 损害买家体验与转化率：\n选择困难： 繁杂的选项列表（SKU）会使买家无所适从，增加选择和决策难度，容易导致用户流失。\n加载缓慢： 宝贝页面加载时间过长，严重影响浏览体验，降低购买意愿。");
  }
  for (let _0x57c976 = 0; _0x57c976 < _0x123ae3.length; _0x57c976++) {
    var _0xd83e31 = _0x123ae3[_0x57c976].split("#");
    var _0x309f3f = _0xd83e31.shift();
    if (_0x57c976 == 0) {
      {
        if (className("android.widget.EditText").clickable(true).find().length == 1) {
          {
            className("android.widget.EditText").clickable(true).find()[0].click();
            sleep(1000);
          }
        }
      }
    }
    if (_0x57c976 == 1) {
      scrollDown(0);
      sleep(1000);
      let _0x51ce8e = desc("添加规格类型").findOne().bounds();
      common.my_click(_0x51ce8e.centerX(), _0x51ce8e.centerY());
      sleep(1000);
      console.verbose("点击 添加规格类型");
      descStartsWith("支持添加图片").findOne().child(0).click();
      sleep(1000);
    }
    console.verbose("填写 " + _0x309f3f);
    setText(_0x309f3f);
    sleep(500);
    setText(_0x309f3f);
    sleep(500);
    console.verbose("注意：如文字输入失败，请检查屏幕是否有特殊悬浮窗遮挡点击，闲鱼和系统是否有剪切板读写权限");
    common.my_click(10, device.height * 3 / 10);
    sleep(300);
    common.my_click(device.width - 10, device.height * 3 / 10);
    sleep(1000);
    if (common.getIME() == "youhu.laixijs/.KeyboardServices.AdbIME") {
      {
        console.verbose("来喜输入法");
        var _0x4fcf36 = true;
      }
    } else {
      {
        var _0x4fcf36 = false;
      }
    }
    _0xd83e31.reverse();
    for (let _0x4ae516 = 0; _0x4ae516 < _0xd83e31.length; _0x4ae516++) {
      let _0x539eb8 = _0xd83e31[_0x4ae516];
      console.verbose("开始输入 " + _0x539eb8);
      if (_0x57c976 == 1) {
        {
          let _0x28a350 = className("android.widget.ImageView").clickable(true).find().length;
          let _0x599393 = className("android.widget.EditText").clickable(true).find().length;
          if (_0x28a350 > 0) {
            {
              console.verbose("ImageView");
              className("android.widget.ImageView").clickable(true).find()[0].click();
              sleep(1000);
            }
          } else if (_0x599393 == 1) {
            {
              className("android.widget.EditText").clickable(true).find()[0].click();
              sleep(1000);
            }
          } else if (_0x599393 == 2) {
            className("android.widget.EditText").clickable(true).find()[1].click();
            sleep(1000);
          }
        }
      } else {
        {
          if (className("android.widget.ImageView").clickable(true).find().length > 0) {
            console.verbose("ImageView");
            className("android.widget.ImageView").clickable(true).find()[0].click();
            sleep(1000);
          } else if (className("android.widget.EditText").clickable(true).find().length > 0) {
            className("android.widget.EditText").clickable(true).find()[0].click();
            sleep(1000);
          }
        }
      }
      console.verbose("点击完成");
      setText(_0x539eb8);
      sleep(500);
      common.my_click(10, device.height * 3 / 10);
      sleep(100);
      common.my_click(device.width - 10, device.height * 3 / 10);
      sleep(500);
      console.verbose(_0x539eb8 + " 添加完成");
    }
  }
  console.verbose("点击下一步 设置价格和库存");
  var _0x51ce8e = desc("下一步 设置价格和库存").findOne().bounds();
  common.my_click(_0x51ce8e.centerX(), _0x51ce8e.centerY());
  sleep(2000);
  for (let _0x57c976 = 0; _0x57c976 < Math.ceil(_0x4b3cfb.length / 4); _0x57c976++) {
    descEndsWith("价格 ¥0.00  库存 0件").findOne().parent().scrollForward();
    sleep(100);
  }
  sleep(1000);
  if (_0x4b3cfb.length > 100) {
    {
      console.error("检测到您的宝贝规格数量已超过100个，建议您立即进行精简。\n过多的规格设置会给发布效率和买家体验带来严重负面影响：\n1. 影响卖家效率与系统稳定：\n发布耗时： 创建和编辑大量规格会极大消耗您的发布时间。\n系统风险： 在闲鱼平台，过多规格易导致发布控件（如点击、填写、返回）响应异常或卡顿，造成发布失败。\n管理困难：规格过多会使库存管理变得极其复杂，容易出错（如超卖、错发）。\n2. 损害买家体验与转化率：\n选择困难： 繁杂的选项列表（SKU）会使买家无所适从，增加选择和决策难度，容易导致用户流失。\n加载缓慢： 宝贝页面加载时间过长，严重影响浏览体验，降低购买意愿。");
    }
  }
  _0x4b3cfb.reverse();
  for (let _0x57c976 = 0; _0x57c976 < _0x4b3cfb.length; _0x57c976++) {
    {
      if (_0x123ae3.length == 1) {
        {
          var _0x539eb8 = _0x4b3cfb[_0x57c976].sku1.slice(0, 12);
        }
      } else if (_0x123ae3.length == 2) {
        {
          var _0x539eb8 = _0x4b3cfb[_0x57c976].sku1.slice(0, 12) + "\n" + _0x4b3cfb[_0x57c976].sku2.slice(0, 12);
        }
      }
      console.verbose(_0x539eb8);
      while (!descStartsWith(_0x539eb8).exists()) {
        sleep(2000);
        if (descStartsWith(_0x539eb8).exists()) {
          {
            break;
          }
        }
        common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, 1000);
        sleep(2000);
        console.verbose("下滑");
      }
      var _0x231064 = descStartsWith(_0x539eb8 + "\n").findOne().bounds();
      while (_0x231064.height() < 150) {
        console.verbose("滑动一次");
        descEndsWith("价格 ¥0.00  库存 0件").findOne().parent().scrollBackward();
        sleep(1000);
        _0x231064 = descStartsWith(_0x539eb8 + "\n").findOne().bounds();
      }
      common.my_click(_0x231064.centerX(), _0x231064.centerY());
      sleep(500);
      console.verbose("设置价格：" + _0x4b3cfb[_0x57c976].price);
      setText(_0x4b3cfb[_0x57c976].price);
      sleep(500);
      console.verbose("设置库存：" + _0x4b3cfb[_0x57c976].number);
      className("android.widget.EditText").find()[1].click();
      sleep(1000);
      if (_0x4b3cfb[_0x57c976].number > 9999) {
        {
          _0x4b3cfb[_0x57c976].number = 9999;
          console.log("宝贝规格库存数量不能大于9999，已自动设置9999");
        }
      }
      setText(_0x4b3cfb[_0x57c976].number);
      sleep(500);
      var _0x23a090 = desc("确定").findOne().bounds();
      common.my_click(_0x23a090.centerX(), _0x23a090.centerY());
      sleep(1000);
    }
  }
  sleep(1200);
  var _0x7384a0 = desc("完成").findOne().bounds();
  common.my_click(_0x7384a0.centerX(), _0x7384a0.centerY());
  sleep(1000);
  toastLog("多规格选择完毕");
}
function goods_ykj_add_skue(_0x1765a3) {
  descStartsWith("商品规格").findOne().click();
  sleep(2500);
  while (true) {
    if (desc("设置宝贝规格").exists()) {
      {
        console.verbose("宝贝规格编辑框出现");
        break;
      }
    }
    if (textContains("\n删除\n").exists()) {
      {
        console.verbose("宝贝规格编辑框出现2");
        break;
      }
    }
    console.verbose("等待多规格宝贝的运费填写框出现...");
    sleep(1000);
  }
  sleep(2000);
  while (textContains("\n删除\n").exists()) {
    let _0x5b4a5a = textContains("\n删除\n").findOne().bounds();
    var _0x352391 = _0x5b4a5a.left + _0x5b4a5a.width() * 93 / 100;
    for (let _0x17afe3 = 0; _0x17afe3 < 3; _0x17afe3++) {
      common.my_click(_0x352391, _0x5b4a5a.top + 50 + 30 * _0x17afe3);
      sleep(600);
      if (desc("完整聊天").exists()) {
        back();
        sleep(1000);
      }
      if (!textContains("\n删除\n").exists()) {
        {
          break;
        }
      }
    }
  }
  let _0x5a7746 = JSON.parse(_0x1765a3.sku_name);
  let _0x2b065c = JSON.parse(_0x1765a3.skus);
  if (_0x2b065c.length > 100) {
    {
      console.error("检测到您的宝贝规格数量已超过100个，建议您立即进行精简。\n过多的规格设置会给发布效率和买家体验带来严重负面影响：\n1. 影响卖家效率与系统稳定：\n发布耗时： 创建和编辑大量规格会极大消耗您的发布时间。\n系统风险： 在闲鱼平台，过多规格易导致发布控件（如点击、填写、返回）响应异常或卡顿，造成发布失败。\n管理困难：规格过多会使库存管理变得极其复杂，容易出错（如超卖、错发）。\n2. 损害买家体验与转化率：\n选择困难： 繁杂的选项列表（SKU）会使买家无所适从，增加选择和决策难度，容易导致用户流失。\n加载缓慢： 宝贝页面加载时间过长，严重影响浏览体验，降低购买意愿。");
    }
  }
  for (let _0x17afe3 = 0; _0x17afe3 < _0x5a7746.length; _0x17afe3++) {
    {
      var _0xec04d8 = _0x5a7746[_0x17afe3].split("#");
      var _0x4e92b7 = _0xec04d8.shift();
      if (_0x17afe3 == 1) {
        scrollDown(0);
        sleep(1000);
        let _0x5b4a5a = desc("添加规格类型").findOne().bounds();
        common.my_click(_0x5b4a5a.centerX(), _0x5b4a5a.centerY());
        sleep(1000);
        text("添加规格类型").findOne().click();
        sleep(1000);
      }
      console.verbose("填写 " + _0x4e92b7);
      setText(_0x4e92b7);
      sleep(500);
      console.verbose("注意：如文字输入失败，请检查屏幕是否有特殊悬浮窗遮挡点击，闲鱼和系统是否有剪切板读写权限");
      common.my_click(10, device.height * 3 / 10);
      sleep(300);
      common.my_click(device.width - 10, device.height * 3 / 10);
      sleep(1000);
      if (common.getIME() == "youhu.laixijs/.KeyboardServices.AdbIME") {
        {
          console.verbose("来喜输入法");
          var _0x197665 = true;
        }
      } else {
        var _0x197665 = false;
      }
      _0xec04d8.reverse();
      for (let _0x8899fd = 0; _0x8899fd < _0xec04d8.length; _0x8899fd++) {
        {
          let _0x55df0d = _0xec04d8[_0x8899fd];
          while (!textEndsWith("\n" + _0x55df0d + "\n请输入具体的" + _0x4e92b7).exists()) {
            if (_0x197665 && (_0x17afe3 !== 0 || _0x8899fd >= 7)) {
              common.my_swipe(device.width / 2, device.height * 50 / 100, device.width / 2, device.height * 37 / 100, 500);
              sleep(1200);
            }
            if (textEndsWith("请输入具体的" + _0x4e92b7).exists()) {
              console.verbose("开始输入 " + _0x55df0d);
              let _0x5b4a5a = textEndsWith("请输入具体的" + _0x4e92b7).findOne().bounds();
              let _0x352391 = device.width / 2;
              let _0x1d4b67 = _0x5b4a5a.bottom - 120;
              common.my_click(_0x352391, _0x1d4b67);
              sleep(1000);
              setText(_0x55df0d);
              sleep(500);
              common.my_click(10, device.height * 3 / 10);
              sleep(100);
              common.my_click(device.width - 10, device.height * 3 / 10);
              sleep(500);
            } else {
              {
                break;
              }
            }
          }
          console.verbose(_0x55df0d + " 添加完成");
        }
      }
    }
  }
  console.verbose("点击下一步 设置价格和库存");
  let _0x5b4a5a = desc("下一步 设置价格和库存").findOne().bounds();
  common.my_click(_0x5b4a5a.centerX(), _0x5b4a5a.centerY());
  sleep(2000);
  for (let _0x17afe3 = 0; _0x17afe3 < Math.ceil(_0x2b065c.length / 4); _0x17afe3++) {
    {
      descEndsWith("价格 ¥0.00  库存 0件").findOne().parent().scrollForward();
      sleep(100);
    }
  }
  sleep(1000);
  if (_0x2b065c.length > 100) {
    console.error("检测到您的宝贝规格数量已超过100个，建议您立即进行精简。\n过多的规格设置会给发布效率和买家体验带来严重负面影响：\n1. 影响卖家效率与系统稳定：\n发布耗时： 创建和编辑大量规格会极大消耗您的发布时间。\n系统风险： 在闲鱼平台，过多规格易导致发布控件（如点击、填写、返回）响应异常或卡顿，造成发布失败。\n管理困难：规格过多会使库存管理变得极其复杂，容易出错（如超卖、错发）。\n2. 损害买家体验与转化率：\n选择困难： 繁杂的选项列表（SKU）会使买家无所适从，增加选择和决策难度，容易导致用户流失。\n加载缓慢： 宝贝页面加载时间过长，严重影响浏览体验，降低购买意愿。");
  }
  _0x2b065c.reverse();
  for (let _0x17afe3 = 0; _0x17afe3 < _0x2b065c.length; _0x17afe3++) {
    {
      if (_0x5a7746.length == 1) {
        {
          var _0x55df0d = _0x2b065c[_0x17afe3].sku1.slice(0, 12);
        }
      } else if (_0x5a7746.length == 2) {
        var _0x55df0d = _0x2b065c[_0x17afe3].sku1.slice(0, 12) + "\n" + _0x2b065c[_0x17afe3].sku2.slice(0, 12);
      }
      console.verbose(_0x55df0d);
      while (!descStartsWith(_0x55df0d).exists()) {
        {
          sleep(2000);
          if (descStartsWith(_0x55df0d).exists()) {
            {
              break;
            }
          }
          common.my_swipe(device.width / 2, device.height * 3 / 10, device.width / 2, device.height * 7 / 10, 1000);
          sleep(2000);
          console.verbose("下滑");
        }
      }
      var _0x2da7b8 = descStartsWith(_0x55df0d + "\n").findOne().bounds();
      while (_0x2da7b8.height() < 150) {
        console.verbose("滑动一次");
        descEndsWith("价格 ¥0.00  库存 0件").findOne().parent().scrollBackward();
        sleep(1000);
        _0x2da7b8 = descStartsWith(_0x55df0d + "\n").findOne().bounds();
      }
      common.my_click(_0x2da7b8.centerX(), _0x2da7b8.centerY());
      sleep(500);
      console.verbose("设置价格：" + _0x2b065c[_0x17afe3].price);
      setText(_0x2b065c[_0x17afe3].price);
      sleep(500);
      console.verbose("设置库存：" + _0x2b065c[_0x17afe3].number);
      textEndsWith("0").findOne().click();
      sleep(500);
      if (_0x2b065c[_0x17afe3].number > 9999) {
        _0x2b065c[_0x17afe3].number = 9999;
        console.log("宝贝规格库存数量不能大于9999，已自动设置9999");
      }
      setText(_0x2b065c[_0x17afe3].number);
      sleep(500);
      textEndsWith(", ¥").findOne().click();
      sleep(500);
      var _0x4bd5be = desc("确定").findOne().bounds();
      common.my_click(_0x4bd5be.centerX(), _0x4bd5be.centerY());
      sleep(1000);
    }
  }
  sleep(1200);
  var _0x519130 = desc("完成").findOne().bounds();
  common.my_click(_0x519130.centerX(), _0x519130.centerY());
  sleep(1000);
  toastLog("多规格选择完毕");
}
function goods_pm_price(_0x3a77e6) {
  console.verbose("填写起拍价");
  descStartsWith("起拍价").click();
  sleep(500);
  common.enter_num(_0x3a77e6.pm_start_price);
  desc("确定").findOne().click();
  sleep(500);
  console.verbose("填写保证金");
  descStartsWith("保证金").click();
  sleep(500);
  common.enter_num(_0x3a77e6.pm_bzj);
  desc("确定").findOne().click();
  sleep(500);
  console.verbose("填写加价幅度");
  descStartsWith("加价幅度").click();
  sleep(500);
  common.enter_num(_0x3a77e6.pm_step);
  desc("确定").findOne().click();
  sleep(500);
  toastLog("开始选择拍卖时间...");
  console.verbose("拍卖开始时间");
  descStartsWith("开始时间").click();
  sleep(1000);
  desc("分").findOne().find(className("android.widget.SeekBar"))[0].scrollForward();
  desc("确定").className("android.widget.Button").findOne().click();
  sleep(500);
  console.verbose("拍卖结束时间");
  descStartsWith("结束时间").click();
  sleep(1000);
  select_pm_end_time(_0x3a77e6);
  sleep(500);
  desc("确定").className("android.widget.Button").findOne().click();
  sleep(500);
  desc("确认").findOne().click();
  sleep(2000);
}
function select_pm_end_time(_0x4a94cc) {
  var _0x3acca8 = new Date();
  let _0x426974 = _0x4a94cc.pm_end_time_day;
  if (_0x4a94cc.pm_end_time_hour) {
    {
      var _0x1377c0 = _0x4a94cc.pm_end_time_hour.split(":")[0];
      var _0x5580ab = _0x4a94cc.pm_end_time_hour.split(":")[1];
    }
  } else if (_0x4a94cc.pm_end_time_hour2) {
    var _0x1377c0 = _0x3acca8.getHours() + parseInt(_0x4a94cc.pm_end_time_hour2);
    var _0x5580ab = _0x3acca8.getMinutes();
  } else {
    {
      var _0x1377c0 = _0x3acca8.getHours() + 1;
      var _0x5580ab = _0x3acca8.getMinutes();
      toastLog("您未设置拍卖结束时间，自动设置为拍卖一小时后结束");
    }
  }
  let _0x15d6e3 = new Date(new Date().setHours(_0x1377c0, _0x5580ab, 0, 0));
  _0x15d6e3.setDate(_0x15d6e3.getDate() + Number(_0x426974));
  if (_0x15d6e3 < _0x3acca8) {
    _0x15d6e3.setDate(_0x15d6e3.getDate() + 1);
    console.warn("设置的发布时间小于当前时间，自动加一天");
  }
  let _0x3a8616 = _0x15d6e3.getFullYear();
  let _0x140401 = _0x15d6e3.getMonth() + 1;
  let _0x3ca285 = _0x15d6e3.getDate();
  let _0x287e40 = _0x15d6e3.getHours();
  let _0x4f6861 = _0x15d6e3.getMinutes();
  var _0x164be8 = Number(desc("年").findOne().find(className("android.widget.SeekBar"))[0].desc());
  var _0x731223 = desc("月").findOne().find(className("android.widget.SeekBar"))[0].desc();
  var _0x30462f = Number(_0x731223.substring(0, _0x731223.length - 1));
  var _0x5db7bd = desc("日").findOne().find(className("android.widget.SeekBar"))[0].desc();
  var _0x7f1f35 = Number(_0x5db7bd.substring(0, _0x5db7bd.length - 1));
  var _0x4151ab = Number(desc("时").findOne().find(className("android.widget.SeekBar"))[0].desc());
  var _0x27a148 = Number(desc("分").findOne().find(className("android.widget.SeekBar"))[0].desc());
  console.log("云端日期", _0x3a8616 + "年" + _0x140401 + "月" + _0x3ca285 + "日" + _0x287e40 + "时" + _0x4f6861 + "分");
  console.log("本地日期", _0x164be8 + "年" + _0x30462f + "月" + _0x7f1f35 + "日" + _0x4151ab + "时" + _0x27a148 + "分");
  if (_0x3a8616 > _0x164be8) {
    while (true) {
      desc("年").findOne().find(className("android.widget.SeekBar"))[0].scrollForward();
      sleep(200);
      if (String(_0x3a8616) === desc("年").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
        break;
      }
    }
  } else if (_0x3a8616 < _0x164be8) {
    while (true) {
      {
        desc("年").findOne().find(className("android.widget.SeekBar"))[0].scrollBackward();
        sleep(200);
        if (String(_0x3a8616) === desc("年").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
          break;
        }
      }
    }
  } else {}
  if (_0x140401 > _0x30462f) {
    while (true) {
      desc("月").findOne().find(className("android.widget.SeekBar"))[0].scrollForward();
      sleep(200);
      if (String(_0x140401) + "月" === desc("月").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
        break;
      }
    }
  } else if (_0x140401 < _0x30462f) {
    {
      while (true) {
        desc("月").findOne().find(className("android.widget.SeekBar"))[0].scrollBackward();
        sleep(200);
        if (String(_0x140401) + "月" === desc("月").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
          break;
        }
      }
    }
  } else {}
  if (_0x3ca285 > _0x7f1f35) {
    while (true) {
      desc("日").findOne().find(className("android.widget.SeekBar"))[0].scrollForward();
      sleep(200);
      if (String(_0x3ca285) + "日" === desc("日").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
        break;
      }
    }
  } else if (_0x3ca285 < _0x7f1f35) {
    {
      while (true) {
        desc("日").findOne().find(className("android.widget.SeekBar"))[0].scrollBackward();
        sleep(200);
        if (String(_0x3ca285) + "日" === desc("日").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
          break;
        }
      }
    }
  } else {}
  if (_0x287e40 < 10) {
    {
      _0x287e40 = "0" + String(_0x287e40);
    }
  } else {
    _0x287e40 = String(_0x287e40);
  }
  if (_0x287e40 > _0x4151ab) {
    while (true) {
      desc("时").findOne().find(className("android.widget.SeekBar"))[0].scrollForward();
      sleep(100);
      if (_0x287e40 === desc("时").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
        break;
      }
    }
  } else if (_0x287e40 < _0x4151ab) {
    {
      while (true) {
        desc("时").findOne().find(className("android.widget.SeekBar"))[0].scrollBackward();
        sleep(100);
        if (_0x287e40 === desc("时").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
          {
            break;
          }
        }
      }
    }
  } else {}
  if (_0x4f6861 < 10) {
    _0x4f6861 = "0" + String(_0x4f6861);
  } else {
    {
      _0x4f6861 = String(_0x4f6861);
    }
  }
  if (_0x4f6861 > _0x27a148) {
    while (true) {
      desc("分").findOne().find(className("android.widget.SeekBar"))[0].scrollForward();
      sleep(100);
      if (_0x4f6861 === desc("分").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
        {
          break;
        }
      }
    }
  } else if (_0x4f6861 < _0x27a148) {
    {
      while (true) {
        {
          desc("分").findOne().find(className("android.widget.SeekBar"))[0].scrollBackward();
          sleep(100);
          if (_0x4f6861 === desc("分").findOne().find(className("android.widget.SeekBar"))[0].desc()) {
            break;
          }
        }
      }
    }
  } else {}
  sleep(1000);
}
function fbxz_title_content(_0x5b2c93) {
  for (let _0x1b6ad7 = 0; _0x1b6ad7 < 300; _0x1b6ad7++) {
    {
      if (desc("发布").exists()) {
        sleep(500);
        setting.goods_dep = desc("发布").findOne().depth();
        break;
      } else if (desc("发布, 发布").exists()) {
        {
          sleep(500);
          setting.goods_dep = desc("发布, 发布").findOne().depth();
          break;
        }
      } else {
        if (_0x1b6ad7 > 8) {
          let _0x1a3147 = "1.请确保当前闲鱼版本为稳定版 2.请授予助手后台弹出界面权限或打开悬浮运行日志或根据总控 系统主页->常见问题 第四条设置手机";
          console.verbose(_0x1a3147);
          console.verbose(_0x1a3147);
          console.verbose(_0x1a3147);
          toast(_0x1a3147);
        } else {
          {
            if (_0x1b6ad7 % 2 == 0) {
              {
                toastLog("准备开始填写宝贝内容...");
                if (_0x5b2c93.content2) {
                  var _0x17d111 = _0x5b2c93.content2;
                  console.verbose("已自动将原描述替换为改写描述");
                } else {
                  var _0x17d111 = _0x5b2c93.content;
                }
                if (_0x17d111.indexOf(_0x5b2c93.title) == 0) {
                  {
                    _0x17d111 = _0x17d111;
                  }
                } else {
                  {
                    _0x17d111 = _0x5b2c93.title + "\n" + _0x17d111;
                  }
                }
                if (clear_emoji == "open") {
                  var _0x53dcb1 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                  if (_0x53dcb1.test(_0x17d111)) {
                    toastLog("检测到在闲鱼中非法的 Emoji，准备清理...");
                    _0x17d111 = _0x17d111.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "");
                    console.verbose("清理后内容：" + _0x17d111);
                  }
                }
                app.startActivity({
                  "action": "VIEW",
                  "data": "fleamarket://simple_post?desc=" + encodeURIComponent(_0x17d111) + "&price=" + _0x5b2c93.ykj_price2 + "&originalPrice=" + _0x5b2c93.ykj_price
                });
                common.start_click_xy_double();
                sleep(3000);
                if (descStartsWith("你有未编辑完成的宝贝").exists() && desc("放弃").exists()) {
                  desc("放弃").findOne().click();
                  sleep(500);
                }
              }
            }
          }
        }
        sleep(1000);
      }
    }
  }
  if (_0x5b2c93.ykj_theme != "[]" && _0x5b2c93.ykj_theme != null) {
    toastLog("开始添加主题：" + _0x5b2c93.ykj_theme);
    if (descStartsWith(_0x5b2c93.title).exists()) {
      descStartsWith(_0x5b2c93.title).findOne().parent().parent().click();
      sleep(1000);
    } else if (descContains(_0x17d111.slice(-5).replace(/\r?\n|\r/g, "")).exists()) {
      console.verbose("点击内容结尾字符点击");
      descContains(_0x17d111.slice(-5).replace(/\r?\n|\r/g, "")).findOne().parent().parent().click();
      sleep(1000);
    } else {
      console.error("点击内容输入框失败");
    }
    if (desc("主题").exists()) {
      {
        let _0x2fdffb = JSON.parse(_0x5b2c93.ykj_theme);
        for (let _0x1b6ad7 = 0; _0x1b6ad7 < _0x2fdffb.length; _0x1b6ad7++) {
          console.verbose("准备输入：" + _0x2fdffb[_0x1b6ad7]);
          desc("主题").findOne().click();
          sleep(1000);
          if (setting.xf) {
            {
              className("android.widget.EditText").findOne().click();
              sleep(1000);
            }
          } else {
            {
              text("搜索你想添加的主题").findOne().click();
              sleep(1000);
            }
          }
          setText(_0x2fdffb[_0x1b6ad7]);
          sleep(3000);
          console.verbose("注意：如文字输入失败，请授予闲鱼和系统剪切板读写权限");
          if (descEndsWith("件宝贝").exists()) {
            descEndsWith("件宝贝").findOne().click();
            sleep(1000);
          } else {
            {
              console.verbose("小闲鱼没有搜到这个主题~");
              while (!desc("主题").exists()) {
                {
                  back();
                  sleep(1000);
                }
              }
            }
          }
        }
        if (desc("收起键盘").exists()) {
          {
            desc("收起键盘").findOne().click();
          }
        }
      }
    } else {
      {
        console.error("未出现添加主题按钮，跳过添加主题");
        console.verbose("可能是因为闲鱼出现bug或使用了来喜输入法造成无法弹出添加主题按钮");
      }
    }
  }
  console.verbose("宝贝内容填写完毕");
}
function fbxz_title_content_b(_0x48832d) {
  for (let _0x3563f5 = 0; _0x3563f5 < 10; _0x3563f5++) {
    {
      sleep(2000);
      if (descStartsWith("发布").exists()) {
        break;
      }
      console.verbose("等待发布页面加载完毕...");
      common.allow_access();
    }
  }
  if (_0x48832d.content2) {
    {
      var _0x2f50fc = _0x48832d.content2;
    }
  } else {
    {
      var _0x2f50fc = _0x48832d.content;
    }
  }
  _0x2f50fc = _0x48832d.title + "\n" + _0x2f50fc;
  descStartsWith("描述,").findOne().click();
  sleep(1500);
  common.my_input(_0x2f50fc);
  sleep(1000);
  console.verbose("宝贝内容填写完毕");
}
function select_aibum(_0xce8476) {
  console.verbose("开始选择宝贝图片...");
  while (true) {
    {
      sleep(1000);
      if (descStartsWith("发布").exists()) {
        console.verbose("进入发布页面");
        desc("添加图片").findOne().click();
        sleep(1000);
        console.verbose("点击添加图片按钮");
        break;
      }
    }
  }
  sleep(1000);
  common.allow_access();
  if (descStartsWith("相册").exists()) {
    {
      descStartsWith("相册").findOne().click();
      sleep(2000);
      console.verbose("进入相册列表页");
    }
  }
  common.allow_access();
  for (let _0x38813e = 0; _0x38813e < 10; _0x38813e++) {
    {
      sleep(1000);
      if (desc("所有图片和视频").exists() || desc("所有文件").exists()) {
        break;
      }
    }
  }
  if (desc("所有图片和视频").exists()) {
    console.verbose("所有图片和视频");
    desc("所有图片和视频").click();
    sleep(1000);
    descStartsWith("所有图片和视频 ·").waitFor();
    sleep(2000);
    toastLog("相册列表加载完毕");
    do {
      sleep(800);
      if (className("ImageView").descStartsWith(_0xce8476.title_md5).exists()) {
        className("ImageView").descStartsWith(_0xce8476.title_md5).findOne().click();
        toastLog("进入相册");
        sleep(2300);
        for (let _0x49faba = 0; _0x49faba < 9; _0x49faba++) {
          let _0x410cb3 = desc("双击选择当前图片").findOnce();
          if (_0x410cb3) {
            _0x410cb3.click();
            sleep(450);
          }
        }
        descStartsWith("下一步").findOne().click();
        sleep(1000);
        break;
      }
    } while (className("android.view.View").depth(9).scrollable().findOne().scrollForward());
    console.verbose("宝贝图片选择完毕...");
  } else if (desc("所有文件").exists()) {
    {
      console.verbose("所有文件");
      desc("所有文件").click();
      sleep(1200);
      descStartsWith("所有文件·").waitFor();
      sleep(2000);
      toastLog("相册列表加载完毕");
      var _0x2ae53f = false;
      for (let _0x238361 = 0; _0x238361 < 25; _0x238361++) {
        if (className("ImageView").descStartsWith(_0xce8476.title_md5).exists()) {
          {
            console.verbose("点击：" + _0xce8476.title_md5);
            className("ImageView").descStartsWith(_0xce8476.title_md5).findOne().click();
            toastLog("进入相册");
            sleep(2300);
            var _0xdfb45f = desc("选择").clickable(true).find();
            _0xdfb45f.reverse();
            for (let _0x238361 = 0; _0x238361 < _0xdfb45f.length; _0x238361++) {
              {
                sleep(120);
                _0xdfb45f[_0x238361].click();
              }
            }
            descStartsWith("下一步").findOne().click();
            sleep(1000);
            _0x2ae53f = true;
            break;
          }
        } else {
          aibum_list_down();
        }
        console.verbose(_0x238361);
        sleep(800);
      }
      if (!_0x2ae53f) {
        console.error("相册列表加载失败，准备重新加载...");
        back();
        sleep(1000);
        select_aibum(_0xce8476);
        return false;
      }
      console.verbose("宝贝图片选择完毕...");
    }
  } else {
    for (let _0x1d32ac = 0; _0x1d32ac < 100; _0x1d32ac++) {
      let _0x4e5ad7 = "相册列表长时间未出现，请前往手机的软件权限设置里授予闲鱼访问相册权限或读取文件权限，授予闲鱼权限后请重新运行任务";
      toast(_0x4e5ad7);
      console.error(_0x4e5ad7);
      console.verbose("出现该提示的原因是闲鱼在申请访问相册/读取文件权限时您长时间未同意或点了拒绝");
      sleep(30000);
    }
  }
  if (_0xce8476.tab != "[]" && _0xce8476.tab != null) {
    {
      console.verbose("等待添加标签页面出现");
      for (let _0x5db23f = 0; _0x5db23f < 10; _0x5db23f++) {
        if (desc("贴纸").exists()) {
          {
            break;
          }
        }
        if (desc("点击添加标签").exists()) {
          {
            break;
          }
        }
        sleep(1000);
      }
      toastLog("标签：" + _0xce8476.tab);
      let _0xbb9d22 = JSON.parse(_0xce8476.tab);
      console.verbose("开始添加标签...");
      if (desc("下一步").exists()) {
        console.verbose("原7.4.10有该界面，现在该界面可能已消失");
      } else if (desc("完成").exists()) {
        console.verbose("[完成]界面");
        if (desc("点击添加标签").indexInParent(0).exists()) {
          let _0xa0e59b = desc("点击添加标签").indexInParent(0).findOnce().bounds();
          console.verbose(_0xa0e59b);
          try {
            {
              for (let _0x5db23f = 0; _0x5db23f < _0xbb9d22.length; _0x5db23f++) {
                desc("完成").waitFor();
                var _0x2ca939 = _0xbb9d22[_0x5db23f];
                toastLog("添加标签：" + _0x2ca939);
                if (_0x2ca939.length > 12) {
                  console.error("7.14.50及以上版本闲鱼图片标签最多可输入12个字符，'" + _0x2ca939 + "'已超12字符，请缩短标签长度");
                }
                var _0x461cc4 = [0.35, 0.4, 0.45, 0.5, 0.55];
                var _0xcfde7e = Math.floor(Math.random() * _0x461cc4.length);
                if (_0x5db23f % 3 == 0) {
                  common.my_click(parseInt(_0xa0e59b.width() * _0x461cc4[_0xcfde7e]), parseInt(_0xa0e59b.centerY() - _0xa0e59b.height() * 0.17));
                }
                if (_0x5db23f % 3 == 1) {
                  {
                    common.my_click(parseInt(_0xa0e59b.width() * _0x461cc4[_0xcfde7e]), parseInt(_0xa0e59b.centerY()));
                  }
                }
                if (_0x5db23f % 3 == 2) {
                  common.my_click(parseInt(_0xa0e59b.width() * _0x461cc4[_0xcfde7e]), parseInt(_0xa0e59b.centerY() + _0xa0e59b.height() * 0.17));
                }
                console.verbose("等待出现标签输入页面...");
                for (let _0x5db23f = 0; _0x5db23f < 10; _0x5db23f++) {
                  if (desc("输入你独一无二的标签").exists() || text("输入你独一无二的标签").exists()) {
                    break;
                  } else {
                    sleep(500);
                  }
                }
                sleep(500);
                console.verbose("注意：如文字输入失败，请尝试重新运行'绑定闲鱼'任务");
                if (desc("输入你独一无二的标签").exists()) {
                  {
                    console.verbose("准备开始粘贴标签desc...");
                    desc("输入你独一无二的标签").findOne().click();
                    sleep(500);
                    common.my_input(_0x2ca939);
                    desc("完成").findOne().click();
                    sleep(1000);
                    sleep(2000);
                  }
                } else if (text("输入你独一无二的标签").exists()) {
                  console.verbose("准备开始粘贴标签text...");
                  setClip(_0x2ca939);
                  sleep(500);
                  text("输入你独一无二的标签").findOne().click();
                  sleep(500);
                  text("输入你独一无二的标签").findOne().paste();
                  sleep(1000);
                  console.verbose("等待出现自定义标签...");
                  for (let _0x5db23f = 0; _0x5db23f < 10; _0x5db23f++) {
                    {
                      console.verbose("等待出现自定义标签..");
                      sleep(2000);
                      if (descEndsWith("自定义标签").exists()) {
                        console.verbose("“自定义标签”出现...");
                        descEndsWith("自定义标签").findOne().click();
                        for (let _0x5db23f = 0; _0x5db23f < 12; _0x5db23f++) {
                          sleep(1000);
                          if (!descEndsWith("自定义标签").exists()) {
                            console.verbose("“自定义标签”消失");
                            sleep(1000);
                            break;
                          }
                        }
                      } else {
                        console.verbose("自定义标签选择成功...");
                        break;
                      }
                    }
                  }
                  sleep(2000);
                } else {
                  console.verbose("选择" + _0x2ca939 + "时出现异常，已跳过该标签...");
                }
                if (_0x5db23f % 3 == 2) {
                  {
                    let _0xe4d082 = parseInt(_0xa0e59b.centerY() - _0xa0e59b.height() * 0.1);
                    if (setting.xf) {
                      common.my_swipe(device.width * 9 / 10, device.height * 5 / 10, device.width * 6 / 10, device.height * 5 / 10, 500);
                      sleep(1000);
                      if (!desc("点击添加标签").exists()) {
                        console.verbose("第二种滑动方式");
                        if (className("android.view.View").scrollable(true).find().length >= 2) {
                          className("android.view.View").scrollable(true).find()[1].scrollForward();
                          sleep(500);
                        }
                      }
                    } else {
                      common.my_swipe(_0xa0e59b.width() * 0.9, _0xe4d082, _0xa0e59b.width() * 0.1, _0xe4d082, 1000);
                    }
                    sleep(2000);
                  }
                }
              }
            }
          } catch (_0x49343f) {
            {
              console.error(_0x49343f);
              console.verbose("选择标签异常，自动跳过选择标签步骤");
              while (!desc("完成").exists()) {
                {
                  back();
                  sleep(2000);
                }
              }
            }
          }
        } else {
          console.verbose("未发现图片控件");
        }
        desc("完成").findOne().click();
        sleep(1000);
      }
      console.log("添加标签结束");
    }
  }
  while (true) {
    if (desc("下一步").clickable().exists()) {
      {
        sleep(1000);
        console.verbose("点击'下一步'");
        desc("下一步").findOne().click();
        sleep(1000);
        break;
      }
    } else if (desc("完成").clickable().exists()) {
      sleep(1000);
      console.verbose("点击'完成'");
      if (desc("完成").clickable().exists()) {
        sleep(2000);
        console.verbose("准备第一次点击'完成'");
        if (desc("完成").clickable().exists()) {
          desc("完成").clickable().findOne().click();
          sleep(1000);
        }
      }
      if (desc("完成").clickable().exists()) {
        sleep(2000);
        console.verbose("准备第二次点击'完成'");
        if (desc("完成").clickable().exists()) {
          desc("完成").clickable().findOne().click();
          sleep(1000);
        }
      }
      break;
    } else if (descStartsWith("发布").clickable().exists()) {
      console.log("跳过'下一步'检测");
      break;
    } else {
      sleep(1000);
      console.verbose("准备点击下一步/完成");
    }
  }
  console.log("准备进入发布页...");
  console.verbose("宝贝图片选择完毕");
}
function fbxz_select_video(_0x3ff907) {
  console.verbose("等待发布页面加载");
  if (_0x3ff907.vcode || _0x3ff907.auto_video) {
    {
      toastLog("开始选择视频...");
      desc("添加图片").findOne().click();
      sleep(1000);
      descStartsWith("相册").findOne().click();
      sleep(800);
      console.verbose("由于视频转码需占用大量 CPU 资源，若手机配置较低并且连续发布多个视频宝贝，可能会导致应用卡顿或闪退。");
      for (let _0x12c8db = 0; _0x12c8db < 10; _0x12c8db++) {
        sleep(1000);
        if (desc("所有图片和视频").exists() || desc("所有文件").exists()) {
          {
            break;
          }
        }
      }
      if (desc("所有图片和视频").exists()) {
        console.verbose("选择视频-所有图片和视频");
        desc("所有图片和视频").click();
        sleep(1000);
        descStartsWith("所有图片和视频 ·").waitFor();
        sleep(2000);
        toastLog("相册列表加载完毕");
        do {
          {
            sleep(800);
            let _0x394d9d = "v_" + _0x3ff907.title_md5;
            console.verbose("等待视频" + _0x394d9d + "出现...");
            if (className("ImageView").descStartsWith(_0x394d9d).exists()) {
              {
                className("ImageView").descStartsWith(_0x394d9d).findOne().click();
                toastLog("进入视频相册...");
                sleep(2000);
                descStartsWith("这是第1个").click();
                sleep(2500);
                desc("完成").waitFor();
                sleep(1000);
                desc("完成").findOne().click();
                toastLog("等待视频处理完成...");
                descStartsWith("发布").waitFor();
                sleep(500);
                break;
              }
            }
          }
        } while (className("android.view.View").depth(9).scrollable().findOne().scrollForward());
      } else if (desc("所有文件").exists()) {
        {
          console.verbose("选择视频-所有文件");
          desc("所有文件").click();
          sleep(1000);
          descStartsWith("所有文件·").waitFor();
          sleep(2000);
          toastLog("相册列表加载完毕");
          var _0xb7d637 = false;
          for (let _0xd6a6f4 = 0; _0xd6a6f4 < 25; _0xd6a6f4++) {
            {
              let _0x394d9d = "v_" + _0x3ff907.title_md5;
              if (className("ImageView").descStartsWith(_0x394d9d).exists()) {
                {
                  console.verbose("点击：" + _0x394d9d);
                  className("ImageView").descStartsWith(_0x394d9d).findOne().click();
                  toastLog("进入视频相册...");
                  sleep(2000);
                  descContains(":").click();
                  sleep(2500);
                  desc("完成").waitFor();
                  sleep(1000);
                  desc("完成").findOne().click();
                  toastLog("等待视频处理完成...");
                  descStartsWith("发布").waitFor();
                  sleep(500);
                  _0xb7d637 = true;
                  break;
                }
              } else {
                aibum_list_down();
              }
              console.verbose(_0xd6a6f4);
              sleep(800);
            }
          }
          if (!_0xb7d637) {
            console.error("相册列表加载失败，准备重新加载...");
            back();
            sleep(1000);
            fbxz_select_video(_0x3ff907);
            return false;
          }
        }
      }
      console.log("视频选择完毕...");
      descStartsWith("发布").clickable().waitFor();
      console.verbose("发布页面加载完毕..");
      sleep(500);
    }
  }
}
function add_wait(_0x4bc8a4, _0x274bf4) {
  let _0x134ad8 = "";
  if (_0x4bc8a4 > 0 && time_blank) {
    threads.start(function () {
      {
        _0x134ad8 = "共" + _0x274bf4.length + "个宝贝，" + time_blank + "秒后开始发布第" + (_0x4bc8a4 + 1) + "个宝贝";
        console.log(_0x134ad8);
        toast(_0x134ad8);
        common.web_log(_0x134ad8, "info");
      }
    });
    sleep(time_blank * 1000);
  } else {
    threads.start(function () {
      _0x134ad8 = "共" + _0x274bf4.length + "个宝贝，开始发布第" + (_0x4bc8a4 + 1) + "个宝贝";
      common.web_log(_0x134ad8, "info");
      console.log(_0x134ad8);
      toast(_0x134ad8);
    });
  }
}
function get_images(_0x114c0d, _0x2f13bb) {
  let _0x49178d = _0x114c0d.vcode || _0x114c0d.auto_video;
  let _0x34457b = _0x2f13bb && _0x2f13bb.insert_image_type != "" && _0x2f13bb.insert_image_url;
  let _0x5457d9 = [];
  if (_0x49178d && _0x34457b) {
    _0x5457d9 = _0x114c0d.images.slice(0, 7);
  } else if (_0x49178d || _0x34457b) {
    _0x5457d9 = _0x114c0d.images.slice(0, 8);
  } else {
    {
      _0x5457d9 = _0x114c0d.images.slice(0, 9);
    }
  }
  if (_0x34457b) {
    console.verbose("插入图片：" + _0x2f13bb.insert_image_url);
    _0x5457d9.splice(Number(_0x2f13bb.insert_image_type), 0, _0x2f13bb.insert_image_url);
  }
  console.verbose("下载图片：" + _0x5457d9.length + "张");
  return _0x5457d9;
}
function aibum_list_down() {
  if (className("android.view.View").depth(setting.goods_dep + 7).scrollable().exists()) {
    return className("android.view.View").depth(setting.goods_dep + 7).scrollable().findOne().scrollForward();
  } else {
    console.verbose("滑动控件不存在，无需滑动");
    return false;
  }
}
module.exports = goods_add;