//Wed Mar 25 2026 13:47:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var post_add = {
  "run": function (_0x4a5d1b) {
    console.log("开始发布帖子");
    if (_0x4a5d1b) {
      {
        console.verbose("正在获取发布帖子列表，请稍等...");
        let _0x37a2ac = common.get_task_detail(_0x4a5d1b);
        var _0x187b4 = JSON.parse(_0x37a2ac.data.args);
        time_blank = parseInt(_0x187b4.time_blank);
        post_type = _0x187b4.post_type;
        setting.xy_dk = _0x187b4.xy_dk;
        watermark = _0x187b4.watermark;
        var _0x285aa6 = common.get_posts(_0x187b4.post);
        let _0x2009f1 = [];
        for (let _0x138f4e = 0; _0x138f4e < _0x285aa6.length; _0x138f4e++) {
          {
            _0x2009f1.push(_0x285aa6[_0x138f4e].id);
          }
        }
        if (!setting.padd_msg.contains("local_already_add_post")) {
          setting.padd_msg.put("local_already_add_post", []);
        }
        if (JSON.stringify(_0x2009f1) === JSON.stringify(setting.padd_msg.get("local_all_post"))) {
          let _0x595eb8 = setting.padd_msg.get("local_already_add_post");
          if (Array.isArray(_0x595eb8) && _0x595eb8.length === 0) {} else {
            common.web_log("继续上次进度发布帖子", "success");
            for (let _0x138f4e = 0; _0x138f4e < _0x285aa6.length; _0x138f4e++) {
              {
                if (_0x595eb8.indexOf(_0x285aa6[_0x138f4e].id) > -1) {
                  delete _0x285aa6[_0x138f4e];
                }
              }
            }
          }
        } else {
          setting.padd_msg.put("local_all_post", _0x2009f1);
        }
      }
    }
    threads.start(function () {
      setting.album_index = -1;
      console.verbose("开始后台下载图片视频..");
      let _0x42b7ab = [];
      _0x285aa6.forEach(function (_0x2210d5, _0x23b500) {
        {
          console.verbose("开始下载第" + (_0x23b500 + 1) + "套图片");
          if (_0x42b7ab.indexOf(_0x2210d5.title_md5) == -1) {
            {
              _0x42b7ab.push(_0x2210d5.title_md5);
              let _0x1a6ce9 = get_images(_0x2210d5, _0x187b4);
              if (watermark == "open") {
                if (setting.xy_dk == "开") {
                  {
                    _0x1a6ce9 = common.watermark(_0x1a6ce9, setting.xy_name_sub, setting.xy_name2_sub);
                  }
                } else {
                  _0x1a6ce9 = common.watermark(_0x1a6ce9, setting.xy_name, setting.xy_name2);
                }
              }
              common.download_img(_0x2210d5.title_md5, _0x1a6ce9, false);
              common.download_video(_0x2210d5);
            }
          } else {
            console.verbose("第" + (_0x23b500 + 1) + "套帖子素材已下载..");
          }
          setting.album_index = _0x23b500;
        }
      });
      console.info("所有帖子图片视频素材下载完成");
    });
    common.xy_home();
    _0x285aa6.forEach(function (_0x368d2e, _0x48c1bb) {
      add_wait(_0x48c1bb, _0x285aa6);
      let _0x3f0a8e = "正在下载图片或视频，请稍等...";
      while (_0x48c1bb > setting.album_index) {
        console.log(_0x3f0a8e);
        toast(_0x3f0a8e);
        sleep(5000);
      }
      threads.start(function () {
        {
          toastLog("帖子标题：" + _0x368d2e.title);
          common.web_log("开始发布：" + _0x368d2e.title, "success");
        }
      });
      enter_fbtz();
      if (_0x368d2e.vcode || _0x368d2e.auto_video) {
        toastLog("开始选择视频...");
        select_video_aibum(_0x368d2e);
      } else {
        {
          select_aibum(_0x368d2e);
        }
      }
      if (_0x368d2e.content.length > 1000) {
        _0x368d2e.content = _0x368d2e.content.substring(0, 1000);
        console.error("闲鱼帖子内容最多可输入1000字，已自动为您截断");
      }
      if (setting.xf) {
        console.verbose("等待发帖页面加载完成..");
        common.my_waitfor("发帖");
        sleep(500);
        toastLog("准备开始填写帖子内容...");
        desc("描述").findOne().find(className("android.widget.EditText"))[0].click();
        sleep(500);
        setText(_0x368d2e.title);
        sleep(500);
        desc("描述").findOne().find(className("android.widget.EditText"))[1].click();
        sleep(500);
        setText(_0x368d2e.content);
        sleep(500);
        console.verbose("帖子内容填写完毕");
        sleep(1000);
        common.close_srf();
        if (_0x368d2e.location) {
          console.verbose("添加位置");
          let _0x17b6a4 = desc("地点信息").findOne().bounds();
          common.my_click(_0x17b6a4.centerX(), _0x17b6a4.centerY());
          sleep(2000);
          if (text("开启定位").exists()) {
            {
              console.verbose("定位功能未开启");
              back();
              sleep(2000);
            }
          } else {
            {
              setText(_0x368d2e.location);
              sleep(5000);
              for (let _0x483479 = 0; _0x483479 < 20; _0x483479++) {
                if (indexInParent(0).depth(6).clickable().exists()) {
                  {
                    indexInParent(0).depth(6).clickable().findOne().click();
                    sleep(2000);
                    break;
                  }
                }
                sleep(1000);
              }
            }
          }
        }
        if (_0x368d2e.post_sort) {
          _0x368d2e.post_sort = _0x368d2e.post_sort.split("#").filter(del_empty)[0];
          console.verbose("添加话题：" + _0x368d2e.post_sort);
          desc("话题").findOne().click();
          sleep(1000);
          for (let _0x3a609d = 0; _0x3a609d < 10; _0x3a609d++) {
            sleep(1000);
            if (textEndsWith("人在看").exists()) {
              {
                break;
              }
            }
          }
          setText(_0x368d2e.post_sort);
          sleep(3000);
          if (textStartsWith("#" + _0x368d2e.post_sort).exists()) {
            textStartsWith("#" + _0x368d2e.post_sort).findOne().click();
            sleep(2000);
          } else {
            console.error("未找到话题：" + _0x368d2e.post_sort);
            back();
            sleep(1000);
          }
        }
      } else {
        {
          console.verbose("等待发布页面加载完成..");
          common.my_waitfor("发布");
          sleep(500);
          toastLog("准备开始填写帖子内容...");
          textStartsWith("描述,").findOne().click();
          sleep(500);
          setText(0, _0x368d2e.title + "\n" + _0x368d2e.content);
          sleep(1000);
          console.verbose("帖子内容填写完毕");
          sleep(1000);
          var _0x476bf6 = desc("优质攻略").findOne().depth();
          var _0x4f7631 = desc("优质攻略").findOne().indexInParent();
          console.verbose("优质攻略控件查找完成");
          if (_0x368d2e.location) {
            console.verbose("添加位置");
            depth(_0x476bf6).indexInParent(_0x4f7631 - 2).findOne().find(className("android.widget.ImageView").indexInParent(4))[0].click();
            sleep(2000);
            desc("位置").findOne().click();
            sleep(2000);
            if (text("开启定位").exists()) {
              {
                console.verbose("定位功能未开启");
                back();
                sleep(2000);
              }
            } else {
              setText(_0x368d2e.location);
              sleep(5000);
              for (let _0x24a530 = 0; _0x24a530 < 20; _0x24a530++) {
                {
                  if (indexInParent(0).depth(6).clickable().exists()) {
                    {
                      indexInParent(0).depth(6).clickable().findOne().click();
                      sleep(2000);
                      break;
                    }
                  }
                  sleep(1000);
                }
              }
            }
          }
          if (_0x368d2e.post_sort) {
            _0x368d2e.post_sort = _0x368d2e.post_sort.split("#").filter(del_empty)[0];
            console.verbose("添加话题：" + _0x368d2e.post_sort);
            depth(_0x476bf6).indexInParent(_0x4f7631 - 2).findOne().find(className("android.widget.ImageView").indexInParent(1))[0].click();
            sleep(2000);
            for (let _0x226d98 = 0; _0x226d98 < 10; _0x226d98++) {
              {
                sleep(1000);
                if (textEndsWith("人在看").exists()) {
                  {
                    break;
                  }
                }
              }
            }
            setText(_0x368d2e.post_sort);
            sleep(3000);
            if (textStartsWith("#" + _0x368d2e.post_sort).exists()) {
              textStartsWith("#" + _0x368d2e.post_sort).findOne().parent().click();
              sleep(2000);
            } else {
              {
                console.error("未找到话题：" + _0x368d2e.post_sort);
                back();
                sleep(1000);
              }
            }
          }
        }
      }
      if (post_type == "存草稿") {
        console.verbose("存草稿");
        sleep(2000);
        for (let _0x97f589 = 0; _0x97f589 < 50; _0x97f589++) {
          if (common.my_exists("存草稿")) {
            common.my_click2("存草稿");
            sleep(3000);
            console.verbose("等待存草稿完成");
          } else {
            {
              sleep(1000);
              break;
            }
          }
        }
      } else {
        {
          toastLog("准备点击\"发布\"");
          sleep(2000);
          if (setting.xf) {
            desc("发布, 发布").findOne().click();
            sleep(5000);
          } else {
            while (desc("发布").exists()) {
              common.my_click2("发布");
              sleep(5000);
              sleep(3000);
            }
          }
        }
      }
      let _0x473afb = Math.ceil((_0x48c1bb + 1) / _0x285aa6.length * 100);
      console.verbose("帖子发布进度：" + _0x473afb + "%");
      if (_0x473afb != 100) {
        common.reload_task_table(_0x4a5d1b, "run", "", _0x473afb);
      }
      common.web_log("\"" + _0x368d2e.title + "\"发布成功", "success");
      toastLog("\"" + _0x368d2e.title + "\"发布成功");
      let _0xbf2adf = setting.padd_msg.get("local_already_add_post");
      _0xbf2adf.push(_0x368d2e.id);
      setting.padd_msg.put("local_already_add_post", _0xbf2adf);
      common.back_xy_home();
    });
    toastLog("防干扰线程关闭");
    toastLog("全部帖子发布成功");
    threads.start(function () {
      {
        common.web_log("发布闲鱼帖子任务执行成功", "success");
        common.reload_task_table(_0x4a5d1b, "end");
        setting.padd_msg.put("local_already_add_post", []);
      }
    });
    threads.start(function () {
      _0x285aa6.forEach(function (_0x5cdcd5, _0x2440fe) {
        common.remove_img(_0x5cdcd5.title_md5);
        common.remove_video("v_" + _0x5cdcd5.title_md5);
      });
      console.log("残留文件清除成功");
    });
  },
  "xy_post_del": function (_0x207642) {
    if (_0x207642) {
      {
        let _0x2b991f = common.get_task_detail(_0x207642);
        var _0x3df08f = JSON.parse(_0x2b991f.data.args);
      }
    } else {
      {
        var _0x3df08f = JSON.parse(common.get_xytaskc().xy_post_del);
      }
    }
    time_blank = parseInt(_0x3df08f.time_blank);
    setting.xy_dk = _0x3df08f.xy_dk;
    common.xy_home();
    if (setting.xf) {
      console.verbose("已到达闲鱼首屏");
      common.enter_tab("我的");
      sleep(1000);
      if (!desc("帖子中心").exists()) {
        {
          scrollUp();
          sleep(1000);
        }
      }
      descStartsWith("帖子中心").findOne().click();
      sleep(3000);
      while (true) {
        {
          if (textStartsWith("优质帖发布秘籍").exists()) {
            console.verbose("帖子列表为空");
            break;
          } else {
            common.my_click(device.width * 1 / 4, device.height * 6 / 10);
            sleep(3000);
            console.verbose("准备删除帖子...");
            desc("分享按钮").findOne().click();
            sleep(2000);
            console.verbose("等待删除按钮出现...");
            var _0x4820f2 = desc("删除").findOne().bounds();
            console.verbose("点击删除按钮");
            common.my_click(_0x4820f2.centerX(), _0x4820f2.centerY());
            sleep(1000);
            text("确认").findOne().click();
            sleep(1000);
            console.verbose("删除帖子成功");
          }
        }
      }
    } else {
      while (true) {
        {
          console.verbose("已到达闲鱼首屏");
          common.enter_tab("我的");
          sleep(1000);
          if (!desc("帖子中心").exists()) {
            scrollUp();
            sleep(1000);
          }
          descStartsWith("帖子中心").findOne().click();
          sleep(3000);
          if (textStartsWith("优质帖发布秘籍").exists()) {
            {
              console.verbose("帖子列表为空");
              break;
            }
          } else {
            common.my_click(device.width * 1 / 4, device.height * 6 / 10);
            sleep(3000);
            console.verbose("准备删除帖子...");
            if (descContains("夸夸TA").exists()) {
              {
                for (let _0x69af85 = 0; _0x69af85 < 5; _0x69af85++) {
                  var _0x4820f2 = descStartsWith("推荐\n").findOne().find(indexInParent(3))[0].bounds();
                  common.my_click(_0x4820f2.centerX(), _0x4820f2.centerY());
                  sleep(3500);
                  if (desc("删除").exists()) {
                    break;
                  }
                }
              }
            } else {
              console.error("未找到夸夸TA(删除按钮父控件)");
            }
            console.verbose("等待删除按钮出现...");
            var _0x4820f2 = desc("删除").findOne().bounds();
            common.my_click(_0x4820f2.centerX(), _0x4820f2.centerY());
            sleep(2000);
            if (descContains("取消").exists() && descContains("确定").exists()) {
              console.verbose("通过坐标点击确定");
              for (let _0x1bdd71 = 0; _0x1bdd71 < 10; _0x1bdd71++) {
                {
                  common.my_click(device.width * 6 / 10, device.height / 2 + _0x1bdd71 * 70);
                  sleep(500);
                  if (!descContains("取消").exists() && !descContains("确定").exists()) {
                    {
                      break;
                    }
                  }
                }
              }
            } else {
              console.error("未找到取消和确定按钮");
            }
            console.verbose("删除帖子成功");
            back();
            sleep(1000);
            back();
            sleep(1000);
          }
        }
      }
    }
    console.info("删除帖子完成");
    common.back_xy_home();
    if (_0x207642) {
      {
        common.web_log("闲鱼删除会玩帖子完成", "success");
        common.reload_task_table(_0x207642, "end");
      }
    }
  }
};
function enter_fbtz() {
  common.enter_tab("我的");
  sleep(1000);
  if (!desc("帖子中心").exists()) {
    scrollUp();
    sleep(1000);
  }
  descStartsWith("帖子中心").findOne().click();
  common.my_waitfor("发帖子");
  sleep(1000);
  if (text("发帖子").clickable(true).exists()) {
    {
      text("发帖子").clickable(true).findOne().click();
    }
  } else if (text("发帖子").clickable(false).exists()) {
    {
      text("发帖子").clickable(false).findOne().parent().click();
    }
  } else {
    console.error("发帖子 按钮不存在");
  }
  for (let _0x2a5aad = 0; _0x2a5aad < 10; _0x2a5aad++) {
    sleep(1000);
    if (desc("发布").exists()) {
      {
        break;
      }
    } else if (desc("发帖").exists()) {
      {
        break;
      }
    }
  }
  toastLog("进入帖子内容管理页面");
}
function select_aibum(_0x1eae11) {
  desc("添加图片").findOne().click();
  for (let _0x2969a0 = 0; _0x2969a0 < 10; _0x2969a0++) {
    sleep(1000);
    if (descStartsWith("所有文件").exists()) {
      {
        break;
      }
    }
  }
  if (descStartsWith("所有文件").exists()) {
    console.verbose("descStartsWith 所有文件");
    descStartsWith("所有文件").findOne().click();
    sleep(500);
    {
      var _0x1a5e02 = false;
      for (let _0x39b49b = 0; _0x39b49b < 25; _0x39b49b++) {
        if (className("ImageView").descStartsWith(_0x1eae11.title_md5).exists()) {
          {
            console.verbose("点击：" + _0x1eae11.title_md5);
            className("ImageView").descStartsWith(_0x1eae11.title_md5).findOne().click();
            toastLog("进入相册");
            sleep(2300);
            var _0x10e125 = desc("选择").clickable(true).find();
            _0x10e125.reverse();
            for (let _0x39b49b = 0; _0x39b49b < _0x10e125.length; _0x39b49b++) {
              sleep(200);
              _0x10e125[_0x39b49b].click();
            }
            descStartsWith("下一步").findOne().click();
            sleep(1000);
            _0x1a5e02 = true;
            while (desc("完成").exists()) {
              {
                console.verbose("点击完成按钮");
                desc("完成").findOne().click();
                sleep(1000);
              }
            }
            break;
          }
        } else {
          console.verbose(depth(17).scrollable().findOne().scrollForward());
        }
        sleep(500);
      }
      if (!_0x1a5e02) {
        {
          console.error("会玩帖子相册列表加载失败，准备重新加载...");
          back();
          sleep(1000);
          back();
          sleep(1000);
          back();
          sleep(1000);
          enter_fbtz();
          select_aibum(_0x1eae11);
          return false;
        }
      }
      console.log("准备进入发布页...");
    }
  } else {
    console.error("未出现 descStartsWith所有文件");
    console.error(textStartsWith("所有文件").exists());
  }
}
function select_video_aibum(_0x502b2f) {
  desc("添加图片").findOne().click();
  for (let _0x5d291b = 0; _0x5d291b < 10; _0x5d291b++) {
    sleep(1000);
    if (descStartsWith("所有文件").exists()) {
      {
        break;
      }
    }
  }
  if (descStartsWith("所有文件").exists()) {
    console.verbose("descStartsWith 所有文件");
    descStartsWith("所有文件").findOne().click();
    sleep(500);
    {
      var _0x22551e = false;
      var _0x5d297a = "v_" + _0x502b2f.title_md5;
      for (let _0x2b9ce3 = 0; _0x2b9ce3 < 25; _0x2b9ce3++) {
        sleep(800);
        console.verbose("等待视频" + _0x5d297a + "出现...");
        if (className("ImageView").descStartsWith(_0x5d297a).exists()) {
          className("ImageView").descStartsWith(_0x5d297a).findOne().click();
          toastLog("进入相册");
          sleep(2300);
          descStartsWith("选择视频").findOne().click();
          sleep(2000);
          common.my_waitfor("完成");
          sleep(1000);
          common.my_click2("完成");
          sleep(1000);
          console.log("准备进入发布页...");
          _0x22551e = true;
          break;
        } else {
          {
            console.verbose(depth(17).scrollable().findOne().scrollForward());
          }
        }
        console.verbose(_0x2b9ce3);
      }
      if (!_0x22551e) {
        console.error("会玩帖子相册列表加载失败，准备重新加载...");
        back();
        sleep(1000);
        back();
        sleep(1000);
        back();
        sleep(1000);
        enter_fbtz();
        select_video_aibum(_0x502b2f);
        return false;
      }
    }
  } else {
    console.error("未出现 descStartsWith所有文件");
    console.error(textStartsWith("所有文件").exists());
  }
  console.log("视频选择完毕...");
}
function add_wait(_0x4790da, _0x5c6fc8) {
  let _0x41ea31 = "";
  if (_0x4790da > 0 && time_blank) {
    {
      threads.start(function () {
        {
          _0x41ea31 = "共" + _0x5c6fc8.length + "条帖子，" + time_blank + "秒后开始发布第" + (_0x4790da + 1) + "条帖子";
          console.log(_0x41ea31);
          toast(_0x41ea31);
          common.web_log(_0x41ea31, "info");
        }
      });
      sleep(time_blank * 1000);
    }
  } else {
    {
      threads.start(function () {
        _0x41ea31 = "共" + _0x5c6fc8.length + "条帖子，开始发布第" + (_0x4790da + 1) + "条帖子";
        common.web_log(_0x41ea31, "info");
        console.log(_0x41ea31);
        toast(_0x41ea31);
      });
    }
  }
}
function get_images(_0x5d7d44, _0x101c0b) {
  let _0x479a65 = _0x5d7d44.vcode || _0x5d7d44.auto_video;
  let _0x242e66 = _0x101c0b.insert_image_type != "" && _0x101c0b.insert_image_url;
  let _0x24209f = [];
  if (_0x479a65 && _0x242e66) {
    _0x24209f = _0x5d7d44.images.slice(0, 7);
  } else if (_0x479a65 || _0x242e66) {
    {
      _0x24209f = _0x5d7d44.images.slice(0, 8);
    }
  } else {
    {
      _0x24209f = _0x5d7d44.images.slice(0, 9);
    }
  }
  if (_0x242e66) {
    {
      console.verbose("插入图片：" + _0x101c0b.insert_image_url);
      _0x24209f.splice(Number(_0x101c0b.insert_image_type), 0, _0x101c0b.insert_image_url);
    }
  }
  console.verbose("下载图片：" + _0x24209f.length + "张");
  return _0x24209f;
}
function del_empty(_0x28baea) {
  return _0x28baea && _0x28baea.trim();
}
module.exports = post_add;