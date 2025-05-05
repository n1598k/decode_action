//Mon May 05 2025 11:18:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var 脚本配置 = storages.create("jiaoben");
悬浮窗();
console.setCanInput(false);
console.setMaxLines(50);
checkApi();
let 克隆_笔记链接 = 脚本配置.get("克隆_笔记链接"),
  克隆_笔记链接数组 = 克隆_笔记链接.split("\n");
console.log("脚本启动---笔记克隆v2");
console.log("打开小红书");
launchApp("小红书");
sleep(3000);
返回小红书首页();
try {
  let weiyunurl = http.get("https://wqcsa.oss-cn-beijing.aliyuncs.com/check.txt", {
      "maxTry": 3,
      "timeout": 50000
    }),
    weixincontent = weiyunurl.body.string();
  if (weixincontent.includes("真的")) try {
    let kami = 脚本配置.get("卡密"),
      jiqima = device.getAndroidId(),
      yanzhengurl = http.get("https://apiv2.fzlzi.com/api/index/start_api?type=kelong&card=" + kami + "&jiqima=" + jiqima, {
        "maxTry": 3,
        "timeout": 50000
      }),
      yanzhengcontent = yanzhengurl.body.string();
    yanzhengcontent == "0" && (toastLog("卡密校验失败1"), exit());
  } catch (_0x55ff02) {
    toastLog("卡密校验失败2");
    exit();
  } else toastLog("启动失败2!!!"), exit();
} catch (_0x52862a) {
  toastLog("启动失败1!!!");
  exit();
}
for (let i = 0; i < 克隆_笔记链接数组.length; i++) {
  sleep(2000);
  console.log("开始克隆第" + (i + 1) + "个笔记");
  let 笔记链接 = 克隆_笔记链接数组[i],
    解析后笔记 = 解析笔记(笔记链接),
    笔记数组 = JSON.parse(解析后笔记);
  if (笔记数组.msg != "解析成功") {
    console.log("解析失败--" + 笔记数组.msg);
    continue;
  }
  console.log("笔记解析成功");
  let imgs = 笔记数组.data.images,
    图片数量 = imgs.length;
  for (let i = 0; i < imgs.length; i++) {
    console.log("开始下载第" + (i + 1) + "张图片");
    let img = imgs[i];
    图片去重并保存(img);
    console.log("第" + (i + 1) + "张下载完成");
  }
  console.log("笔记克隆完成");
  sleep(1000);
  console.log("打开小红书");
  launchApp("小红书");
  sleep(3000);
  返回小红书首页();
  sleep(2000);
  点击坐标desc("发布");
  sleep(2000);
  隐藏悬浮窗();
  let 选择图片 = className("androidx.recyclerview.widget.RecyclerView").find(),
    图片控件 = 选择图片[0],
    图片控件坐标 = 图片控件.bounds();
  click(图片控件坐标.left + device.width / 8, 图片控件坐标.top);
  text("选择").findOne(5000);
  显示悬浮窗();
  console.log("选择图片成功");
  for (let i = 0; i < 图片数量; i++) {
    sleep(1000);
    let 当前图片 = className("android.widget.ImageView").depth("10").find(),
      图片控件1 = 当前图片[0],
      图片控件坐标1 = 图片控件1.bounds();
    click(图片控件坐标1.centerX(), 图片控件坐标1.centerY());
    sleep(1000);
    console.log("选择第" + i + "张图片成功");
    if (i == 图片数量 - 1) console.log("图片选择完成1");else {
      let 滑动图片 = className("androidx.recyclerview.widget.RecyclerView").scrollable().findOnce().scrollForward();
      滑动图片 ? console.log("滑动成功") : console.log("滑动失败");
    }
    sleep(1000);
  }
  console.log("选择图片完成");
  sleep(1000);
  !点击坐标desc("下一步") && 点击坐标("制作音乐图集");
  sleep(2000);
  text("滤镜").findOne(50000);
  console.log("成功进入下一步");
  sleep(2000);
  点击坐标("下一步");
  sleep(2000);
  let title = 笔记数组.data.title,
    content = 笔记数组.data.content,
    是否改写 = 脚本配置.get("克隆_是否改写");
  if (title == "") {} else {
    if (是否改写 == 0) {
      console.log("开始ai改写标题");
      let ai改写标题 = ai改写(title, "aiGaixieTitle");
      ai改写标题 == "" ? console.log("ai改写标题失败2") : title = ai改写标题;
      setText(0, title);
    } else setText(0, title);
  }
  sleep(2000);
  if (content == "") {} else {
    if (是否改写 == 0) {
      console.log("开始ai改写内容");
      let ai改写内容 = ai改写(content, "aiGaixie");
      ai改写内容 == "" ? console.log("ai改写内容失败2") : content = ai改写内容;
      setClip(content);
      var et = className("android.widget.EditText").find();
      et[1].paste();
    } else {
      setClip(content);
      var et = className("android.widget.EditText").find();
      et[1].paste();
    }
  }
  sleep(5000);
  let 发布方式 = 脚本配置.get("克隆_发布方式");
  if (发布方式 == 0) {
    console.log("发布笔记");
    点击坐标("发布笔记");
    sleep(5000);
    let 是否发布成功 = textMatches(/(发布成功.*$)/).find();
    if (是否发布成功) {
      console.log("发布成功");
      sleep(2000);
      if (脚本配置.get("发布完评论")) {
        console.log("评论发布成功的笔记");
        text("刚刚 ").findOne(20000);
        console.log("开始进入笔记");
        点击坐标("刚刚 ");
        let 是否成功进入 = desc("更多").findOne(5000);
        是否成功进入 ? (console.log("进入笔记成功"), sleep(2000), 发送评论()) : console.log("进入笔记失败");
        sleep(2000);
        返回小红书首页();
      }
    }
  } else console.log("保存草稿"), 点击坐标("存草稿"), sleep(2000), 点击坐标("确定"), sleep(2000), console.log("保存草稿成功");
  sleep(2000);
}
console.log("全部笔记克隆完成");
function 图片去重并保存(_0x4126da) {
  var _0x24b239 = getRandom14DigitNumber(),
    _0x7ba2ea = "https://apiv2.fzlzi.com/api/kelong/pic/?url=" + _0x4126da,
    _0x5e1287 = images.load(_0x7ba2ea),
    _0x453714 = "/sdcard/Pictures/" + _0x24b239 + ".jpg";
  images.save(_0x5e1287, _0x453714, "jpg", 50);
  media.scanFile(_0x453714);
}
function 发送评论() {
  let _0x5156a8 = 脚本配置.get("克隆_评论话术");
  点击坐标("说点什么...");
  sleep(1000);
  console.log("评论内容：" + _0x5156a8);
  setText(_0x5156a8);
  sleep(1000);
  点击坐标("发送");
  sleep(1000);
  console.log("评论成功");
  if (脚本配置.get("评论完置顶")) {
    sleep(2000);
    while (true) {
      sleep(1000);
      let _0x5cb9f7 = text("- 到底了 -").visibleToUser().findOnce();
      if (_0x5cb9f7) {
        {
          console.log("到底了");
          break;
        }
      } else console.log("滑动"), swipe(device.width / 2, device.height - 400, device.width / 2, device.height / 4, 500);
      sleep(1000);
    }
    sleep(1000);
    let _0x4f2cac = text("作者").visibleToUser().findOne(10000);
    if (_0x4f2cac) {
      {
        console.log("找到刚发布的评论");
        let _0x52f0d4 = _0x4f2cac,
          _0x1f10c9 = _0x52f0d4.bounds();
        click(_0x1f10c9.centerX(), _0x1f10c9.centerY());
        sleep(3000);
        点击坐标("置顶");
        sleep(1000);
        console.log("评论置顶操作完成");
      }
    } else console.log("没找到刚发布的评论");
  }
}
function 解析笔记(_0x2f385a) {
  console.log("开始解析笔记");
  var _0x26b4a6 = "https://apiv2.fzlzi.com/api/kelong/jiexi";
  try {
    var _0x51a4b3 = http.post(_0x26b4a6, {
      "link": _0x2f385a
    }, {
      "maxTry": 3,
      "timeout": 50000
    });
    return _0x51a4b3.body.string();
  } catch (_0x26a053) {
    toastLog("解析笔记失败1");
  }
}
function getRandom14DigitNumber() {
  var _0x4c0566 = Math.random(),
    _0x5c20d8 = Math.floor(_0x4c0566 * Math.pow(10, 14)),
    _0x266f4d = _0x5c20d8.toString().padStart(14, "0");
  return _0x266f4d;
}
function 返回小红书首页() {
  console.log("返回小红书首页");
  while (true) {
    {
      let _0x1d11b4 = desc("发现").findOnce();
      if (_0x1d11b4) {
        {
          console.log("返回首页成功");
          break;
        }
      } else {
        back();
        sleep(1500);
      }
    }
  }
}
function 点击坐标desc(_0x106a9f) {
  var _0x5027d1 = desc(_0x106a9f).findOne(10000);
  if (_0x5027d1) {
    {
      console.log("找到并点击" + _0x106a9f);
      let _0x30d972 = _0x5027d1.bounds();
      click(_0x30d972.centerX(), _0x30d972.centerY());
      return true;
    }
  } else return console.log("没找到" + _0x106a9f + "的坐标"), false;
}
function 点击坐标(_0x4a6ddd) {
  var _0x38f3ec = text(_0x4a6ddd).findOne(10000);
  if (_0x38f3ec) {
    {
      console.log("找到并点击" + _0x4a6ddd);
      let _0x56ee99 = _0x38f3ec.bounds();
      click(_0x56ee99.centerX(), _0x56ee99.centerY());
      return true;
    }
  } else {
    console.log("没找到" + _0x4a6ddd + "的坐标");
    return false;
  }
}
function ai改写(_0x58477, _0x115ade) {
  var _0x286627 = "https://apiv2.fzlzi.com/api/kelong/" + _0x115ade;
  try {
    {
      var _0x5930fa = http.post(_0x286627, {
        "content": _0x58477
      }, {
        "maxTry": 3,
        "timeout": 60000
      });
      console.log("Ai改写成功");
      return _0x5930fa.body.string();
    }
  } catch (_0x4f2e77) {
    console.log(_0x4f2e77);
    toastLog("ai改写内容失败1");
    return "";
  }
}
function 悬浮窗() {
  let _0x1541f5 = "<vertical paddingLeft=\"15\" paddingRight=\"15\" bg=\"#95000000\" h=\"{{Math.round(device.height / 15)}}\" w=\"{{Math.round(device.width / 4)}}\">                <com.huaweiii.huawei.core.console.ConsoleView id=\"console\"/>            </vertical>";
  win = floaty.rawWindow(_0x1541f5);
  win.setTouchable(false);
  win.setPosition(65, 150);
  win.console.setConsole(runtime.console);
  let _0x191cd4 = "<vertical h=\"{{Math.round(device.height / 15)}}\" w=\"{{Math.round(device.width / 50)}}\" alpha=\"0.5\">            <text layout_weight=\"5\" id=\"jiesu\" textStyle=\"bold\" gravity=\"center\" text=\"结束\" textColor=\"#ffffff\" bg=\"#03001c\" />            <text layout_weight=\"5\" id=\"yincang\" textStyle=\"bold\" gravity=\"center\"  text=\"隐藏\" textColor=\"#ffffff\" bg=\"#03001c\" />        </vertical>";
  win1 = floaty.rawWindow(_0x191cd4);
  win1.setTouchable(true);
  win1.setPosition(0, 150);
  setInterval(() => {}, 1000);
  win1.jiesu.click(() => {
    toastLog("手动结束脚本");
    exit();
  });
  win1.yincang.click(() => {
    ui.run(() => {
      if (win1.yincang.text() == "隐藏") win.setPosition(3000, 3000), win1.yincang.setText("显示");else {
        if (win1.yincang.text() == "显示") {
          win1.yincang.setText("隐藏");
          win.setPosition(65, 150);
        }
      }
    });
  });
}
function 隐藏悬浮窗() {
  win.setPosition(3000, 3000);
  win1.yincang.setText("显示");
}
function 显示悬浮窗() {
  win.setPosition(65, 150);
  win1.yincang.setText("隐藏");
}
function checkApi() {
  try {
    {
      let _0x1122f1 = http.get("https://wqcsa.oss-cn-beijing.aliyuncs.com/check.txt", {
          "maxTry": 3,
          "timeout": 50000
        }),
        _0x3bf9f6 = _0x1122f1.body.string();
      if (_0x3bf9f6.includes("真的")) {} else toastLog("启动失败2!!!"), exit();
    }
  } catch (_0xeee2b2) {
    toastLog("启动失败1!!!");
    exit();
  }
}