// ==UserScript==
// @name         Anls bt6
// @author       Jones Miller
// @version      23.11.12
// @namespace    https://t.me/jsday
// @description  anleshilibrary. No ads, no login. Analyze VIP video, advanced on-demand. Multi-interface free choice, some interfaces support high-definition playback. It is not guaranteed to parse all videos. Mobile phone scan code playback, Douyin to remove watermark. Non-professionals All data is collected on the Internet-thanks to the original author for deleting if there is any infringement.
// @match        *://*/*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
  'use strict';

  var jmname="安乐视"; var author="Jones Miller"; var jmbdnew="23.11.12"; var jmycver="23.11.12-0013";
  var jmtext="电脑端抖音、tiktok去水印<br>YouTube新接口<br>其他一些调整...";

  var host=window.location.host; var href=window.location.href;
  var jmuaLogo="pc"; if (/Android|iPhone|iPod/i.test(navigator.userAgent)) { jmuaLogo="mobile";}
  var jmuapc="^https://v.qq.com/x/cover|^https://www.iqiyi.com/v_|^https://v.youku.com/v_show|^http(s)?://www.le.com/ptv/vplay|^https://www.bilibili.com/bangumi/play|^https://www.mgtv.com/b|^http(s)?://v.pptv.com/show/|^https://tv.sohu.com/v";
  var jmuamb="^https://m.iqiyi.com/v_|^https://m.youku.com/alipay_video|^https://m.youku.com/video/id|^https://v.youku.com/pad_show/id|^http(s)?://m.le.com/vplay_|^https://m.bilibili.com/bangumi/play|^https://m.mgtv.com/b|^http(s)?://m.pptv.com/show/|^https://m.tv.sohu.com/v";
  var jmuamq="^http(s)?://m.v.qq.com";
  var jmuady="^https://www.douyin.com/|^https://m.douyin.com/share/video/|^https://www.iesdouyin.com/share/video/|^https://www.tiktok.com/";
  var jmuayg="^https://www.youtube.com/|^https://m.youtube.com/";

  var jmqrapi="https://api.pwmqr.com/qrcode/create/?url=";
  var jmanlurl="https://greasyfork.org/zh-CN/scripts/";
  var jmimgapi="https://api.paugram.com/bing/";
  var jmimgerr="https://v.api.aa1.cn/api/pc-girl_bz/index.php?wpon=ro38d57y8rhuwur3788y3rd"
  var jmalstbk="#c779d0,#4bc0c8,#feac5e";
  var jmanstbk="rgb(110,41,118),rgb(36,113,100),rgb(147,72,1)";
  var jmalsico="https://greasyfork.s3.us-east-2.amazonaws.com/ei1h373r3vykus1iqc9wzp8mx9ub";
  var jmxym="https://s1.aigei.com/src/img/png/8c/8c8605025af34fd588658202ab2a5579.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:2aHZo8ikILPvwhgzTu1MakGTcFw=";

  var jmnxj='<span style="width:20px;height:20px;right:95%;top:-15px;background:#ff8f73 !important;color:#000 !important;line-height:1.5;border-radius:6px;">新</span>';
  var apis=[ {name:jmnxj+"yangtu",url:"https://jx.yangtu.top/?url="},
            {name:jmnxj+"777jiexi",url:"https://jx.777jiexi.com/player/?url="},
            {name:"jsonplayer",url:"https://jx.jsonplayer.com/player/?url="},{name:"xmflv",url:"https://jx.xmflv.com/?url="},{"name":"纯净1","url":"https://z1.m1907.top/?jx="},{"name":"B站1","url":"https://jx.bozrc.com:4433/player/?url="},{"name":"爱豆","url":"https://jx.aidouer.net/?url="},{"name":"BL","url":"https://vip.bljiex.com/?v="},{"name":"冰豆","url":"https://api.qianqi.net/vip/?url="},{"name":"百域","url":"https://jx.618g.com/?url="},{"name":"CK","url":"https://www.ckplayer.vip/jiexi/?url="},{"name":"CHok","url":"https://www.gai4.com/?url="},{"name":"ckmov","url":"https://www.ckmov.vip/api.php?url="},{"name":"H8","url":"https://www.h8jx.com/jiexi.php?url="},{"name":"JY","url":"https://jx.playerjy.com/?url="},{"name":"解析","url":"https://ckmov.ccyjjd.com/ckmov/?url="},{"name":"解析la","url":"https://api.jiexi.la/?url="},{"name":"老板","url":"https://vip.laobandq.com/jiexi.php?url="},{"name":"MAO","url":"https://www.mtosz.com/m3u8.php?url="},{"name":"M3U8","url":"https://jx.m3u8.tv/jiexi/?url="},{"name":"诺讯","url":"https://www.nxflv.com/?url="},{"name":"OK","url":"https://okjx.cc/?url="},{"name":"PM","url":"https://www.playm3u8.cn/jiexi.php?url="},{"name":"盘古","url":"https://www.pangujiexi.cc/jiexi.php?url="},{"name":"七哥","url":"https://jx.nnxv.cn/tv.php?url="},{"name":"RDHK","url":"https://jx.rdhk.net/?v="},{"name":"人人迷","url":"https://jx.blbo.cc:4433/?url="},{"name":"思云","url":"https://jx.ap2p.cn/?url="},{"name":"思古3","url":"https://jsap.attakids.com/?url="},{"name":"听乐","url":"https://jx.dj6u.com/?url="},{"name":"维多","url":"https://jx.ivito.cn/?url="},{"name":"虾米","url":"https://jx.xmflv.com/?url="},{"name":"云端","url":"https://sb.5gseo.net/?url="},{"name":"云析","url":"https://jx.yparse.com/index.php?url="},{"name":"0523","url":"https://go.yh0523.cn/y.cy?url="},{"name":"17云","url":"https://www.1717yun.com/jx/ty.php?url="},{"name":"180","url":"https://jx.000180.top/jx/?url="},{"name":"4K","url":"https://jx.4kdv.com/?url="},{"name":"8090","url":"https://www.8090g.cn/?url="}];

  function parsing(apis) {
    var jmframe="allowfullscreen='true' allowtransparency='true' frameborder='0' scrolling='no';";
    for (var i=0;i<apis.length;i++) {
      var jxapi=document.createElement("div");
      jxapi.innerHTML="<span>"+apis[i].name+"</span>";
      jmanljx.appendChild(jxapi);
      (function(i) {
        jxapi.onclick=function() {
          jmplayer.innerHTML="<iframe id='jmanlsplayer' src='"+apis[i].url+location.href+"' "+jmframe+"></iframe>";
          jmgoqr.onclick=function() {
            jmqrimg.src=jmqrapi+apis[i].url+href
            jmmq();
            jmspbs();
            jmqrsp.innerHTML="视频可播放后<br>再扫码看";
          };
          jmgonce();
          jmshare.onclick=function() {
            navigator.share({
              title: document.title,
              url: apis[i].url+href
            })
          };
          jmbianse();
          this.style.cssText+="background-color:rgba(255,255,255,0.5) !important;";
        };
      })(i);
      var jxsapi=document.createElement("div");
      jxsapi.innerHTML="<span>"+apis[i].name+"</span>";
      jxsapi.style.cssText+="background-image:url("+jmxym+");background-position:right 2px top 2px;background-size:8px;";
      jmanljxs.appendChild(jxsapi);
      (function(i) {
        jxsapi.onclick=function() {
          window.open(apis[i].url+location.href, '_blank');
        }
      })(i);
    }
  };
  function jmbianse() {
    var jmhmbs=document.querySelectorAll("#jmanljx div");
    for(var i=0;i<jmhmbs.length;i++){
      jmhmbs[i].style.backgroundColor="rgba(0,0,0,0.2)";
    }
  };
  function jmlohy() {
    jmlogo.style.cssText+="background-color:transparent !important;background-position:center;";
    jmlogo.innerText="";
  };
  var jmgonce=(function() {
    var executed=false;
    return function() {
      if (!executed) {
        executed=true;
        jmin.style.display="block";
        jmtj.style.display="block";
        jmzc.style.display="block";
        jmtj2.style.display="none";
        jmzc2.style.display="none";
        jmfull();
        setTimeout(function() {
          jmlogo.style.cssText+="background-color:rgba(255,255,255,0.8) !important;background-position:center bottom 50px;";
          jmlogo.innerText="multi";
        }, 200)
        setTimeout(function() {
          jmlohy();
        }, 5000)
        setTimeout(function() {
          jmgoqr.style.cssText+="background-image:url(https://s1.aigei.com/src/img/png/7d/7d3ba135a9094da49930e8590d398d27.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:C42thzKg5H92vM21SQqnGY4JQMU=);";
        }, 500)
        if (navigator.share) {
          setTimeout(function() {
            jmshare.style.display="inline-block";
          },2000)
        }
      }
    }
  })();
  var jmgfu="130";
  if (jmuaLogo=="pc") {
    var jmgfu="260";
  };
  function jmfull() {
    jmplay.style.cssText+="width:"+jmgfu+"%;max-width:99vw;min-height:185px;height:"+jmgfu+"%;max-height:49vw;bottom:45px;box-shadow:0 0 10px #666;";
    jmanlstion.style.cssText+="bottom:60px;";
  };
  var jmanls=document.createElement('div');
  document.body.appendChild(jmanls);
  function jmgomenu() {
    jmanls.style="position:fixed; display:block; width:130px; max-width:99vw; height:60px; bottom:30px; right:50%; transform:translate(50%); background-image:linear-gradient(to right top,"+jmalstbk+"); background-position:center; background-repeat:no-repeat; background-size:100%; box-shadow:0 0 10px #666; color:#000; font-size:12px; text-align:center; font-weight:600; line-height:1.5; overflow:hidden; transition:0.3s all; z-index:99999999; border-radius:49px;";
    jmanls.innerHTML=`
    <style type="text/css">
  .jmanlstion,.jmanlsmenu { position:absolute; display:none; width:99%; height:135px; right:50%; bottom:45px; transform:translate(50%); background:rgba(255,255,255,0.5) !important; overflow:hidden;}
  .jmanlsmenu { width:auto; max-width:95%; height:40px; bottom:3px; overflow-x:auto; overflow-y:hidden; white-space:nowrap; padding:0 5px;}
  .jmanlstion,.jmanlsmenu,.jmanlstion div { scrollbar-width:none; -webkit-overflow-scrolling:touch; transition:0.3s all; border-radius:10px;}
  .jmanlstion div::-webkit-scrollbar,.jmanlsmenu::-webkit-scrollbar,.jmtiondivs { display:none;}
  .jmanlstion div { position:absolute; width:100%; height:100%; //background-color:rgba(255,0,0,0.5) !important; overflow:auto;}
  .jmtiondivs div,.jmtiondivs a,.jmanlsmenu div,#jmlogo { background-size:20px; background-position:center; background-repeat:no-repeat;}
  .jmtiondivs div,.jmtiondivs a { position:relative; float:left; width:15.8%; height:40px; left:3.5%; margin:10px 3.5% 12px 0; background-color:rgba(0,0,0,0.2) !important; color:#000 !important; text-align:center; overflow:visible; cursor:pointer; border-radius:10px; text-decoration:none;}
  .jmanlsmenu div { position:relative; display:none; width:40px; height:30px; transform-style:preserve-3d; //background-color:red !important; margin:5px 0 0 3px; cursor:pointer; border-radius:8px;}
  #jmanlsplayer { position:absolute; width:100%; height:100%; right:0%; top:0%; background:#000 url(`+jmalsico+`) center no-repeat !important; background-size:26% !important; transition:0.3s all; z-index:999; box-shadow:0 0 10px #666; overflow:hidden; border-radius:10px;}
  #jmplay { display:block; width:100%; height:100%; bottom:0px; overflow:hidden;}
  #jmimg { position:absolute; width:auto; max-width:100%; min-height:100%; height:auto; left:0px; top:0px; border-radius:10px;}
  #jmanlswin { display:block; width:110%; height:110%; bottom:-5px; background:#000 url(`+jmalsico+`) center no-repeat !important; background-size:50% !important; color:#fff !important;}
  #jmlogo { width:130px; height:60px; right:0px; top:0px; background-color:transparent !important; background-image:url(`+jmalsico+`); background-position:center; background-size:80px; font-size:16px; line-height:1.8; z-index:9999;}
  </style>
  <div class="jmanlstion" id="jmplay">
    <div id="jmplayer">
      <img id="jmimg" src="`+jmimgapi+`" onerror="this.onerror=null;this.src='https://v.api.aa1.cn/api/pc-girl_bz/girl/1640166370.3315.jpg';"/>
    </div>
    <div id="jmlogo">
    </div>
  </div>
  <div class="jmanlstion" id="jmanlstion">
  </div>
  <div class="jmanlsmenu" id="jmanlsmenu">
  </div>
  <div class="jmanlstion" id="jmanlswin">
  </div>`;
    jmfortop(); jmbottom(); jmshen();
    jmanls.onclick=function() {
      jmopen();
    };
    jmlogo.onclick=function() {
      if (jmanlstion.style.display=='block') {
        jmanlstion.style.display='none';
      } else {
        if (jmanlsmenu.style.display=='block') {
          setTimeout(function() {
            jmanlsmenu.style.display='none';
            jmplay.style.cssText+="bottom:0px;";
            jmanlstion.style.cssText+="bottom:45px;";
          }, 200)
        }
      }
      jmlohy();
    };
  };
  function jmfortop() {
    jmanlstion.innerHTML=`
    <style type="text/css">
  .jmtiondivs a { background-size:50px; background-image:url(`+jmalsico+`);}
  .jmtiondivs span { position:absolute; height:0px; top:100%; right:50%; transform:translate(50%); zoom:0.8; white-space:nowrap; border-radius:10px;}
  #jmanljx div,#jmanljxs div,#jmanlso div { width:17.6%; height:36px; left:2%; margin:5px 2% 0 0; line-height:2.2;}
  #jmanljx span,#jmanljxs span,#jmanlso span { top:10px;}
  #jmabout div { width:44.7%; height:95px; margin:5px 3.5% 0 0; overflow:auto; cursor:default;}
  #jmabout span { position:static; zoom:1;}
  #jmabout hr { width:50%; margin:auto; border:none; border-top:1px solid #888 !important; text-align:center;}
  #jmfunts { width:93%; min-height:30px; height:auto; margin:5px 0 0 0; line-height:2; cursor:default;}
  #jmsotext { position:absolute; width:50%; height:28px; top:3px; left:50%; transform:translate(-50%); background-color:#fff !important; text-indent:15px; border-radius:49px; border:2px solid #666; outline:none;}
  </style>
  <div class="jmtiondivs" id="jmtion">
  </div>
  <div class="jmtiondivs" id="jmscan" style="overflow:visible;">
  </div>
  <div class="jmtiondivs" id="jmfun">
  </div>
  <div class="jmtiondivs" id="jmabout">
    <div>`+jmname+` `+author+`<hr>当前: <span id="jmbdver"></span><br>最新: <span id="jmbnew">`+jmbdnew+`</span><br>远程: `+jmycver+`
    </div>
    <div id="jmrz">《 最近更新 》<br><span style="top:70%;color:yellow !important;zoom:0.8;">点击 查看更多</span><hr>`+jmtext+`</div>
    <div style="width:66%;">《 声明 》<hr>非专业人士 所有数据收集于互联网<br>根据个人喜好调整修改 如有侵权 联系删除<br>不保证脚本的兼容性和稳定性</div>
    <div style="width:23.4%;">《 感谢 》<hr>飝 飝 、JW</div>
    <div style="width:93%;">《 info 》<hr>Device: `+navigator.platform+`<br>UserAgent: `+navigator.userAgent+`</div>
  </div>
  <div class="jmtiondivs" id="jmanljx"></div>
  <div class="jmtiondivs" id="jmanljxs"></div>
  <div class="jmtiondivs" id="jmanlso"></div>`;
    jmdivscan(); jmtiondiv(); jmsoso();
    jmanlswin.innerText='更新脚本';
    jmanlswin.onclick=function() {
      window.open(jmanlurl+'453746', '_blank');
      jmanls.style.display="none";
    };
    jmanlswin.style.display="block";
  };
  var jmsmzico="https://s1.chu0.com/src/img/png/db/db49e56ade9f4542a72d6d1cd1475ba1.png?imageMogr2/auto-orient/thumbnail/!234x234r/gravity/Center/crop/234x234/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:8aM2-T-3KU_1cWeU44Nk9xEuVXQ=";
  function jmdivscan() {
    jmscan.innerHTML=`
    <style>
    #jmscan div { width:12%;}
    #jmqrcode,#jmqrspan { position:absolute; min-width:130px; height:130px; left:50%; bottom:2.5px; transform:translate(-50%); margin:0; z-index:99; overflow:hidden;}
    #jmqrspan {  min-width:110px; left:98%; transform:translate(-100%); background-color:transparent !important; cursor:default;}
    #jmqrspan span { width:100px; height:auto; right:50%; top:10px; background-color:rgba(255,255,255,0.5) !important; color:#000 !important; zoom:1;}
    </style>
    <div id="jmal" style="background-image:url(https://s1.aigei.com/src/img/png/9b/9bf5203179f94a9790bd8e57a0fb8ab1.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:ieYWTeggdoMY2uhunJMIlUyc7S4=)">
      <span>支付宝红包</span>
    </div>
    <div id="jmin" style="display:none;background-size:23px;background-image:url(`+jmsmzico+`)">
      <span>扫码装</span>
    </div><br style="clear:both;">
    <div id="jmas" style="background-image:url(https://www.apple.com.cn/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large.png)">
      <span>AppStore红包</span>
    </div>
    <div id="jmzs" style="background-size:23px;background-image:url(https://s1.aigei.com/src/img/png/2c/2cf33a978e7d4b1d858b3157d8b80461.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:7hpftpgvasbuAqQ2vzwTE4nkOQM=)">
      <span>赞赏</span>
    </div>
    <div id="jmqrspan">
      <span>若载入失败<br>请稍后再试</span>
      <span style="top:50px;">点击放大<br>长按保存</span>
      <span id="jmqrsp" style="top:90px;"></span>
    </div>
    <div id="jmqrcode"><img id="jmqrimg" width="100%" height="100%"/></div>`;
  };
  function jmtiondiv() {
    jmtion.innerHTML=`
    <div id="jmhide" style="background-size:25px;background-image:url(https://s1.aigei.com/src/img/png/d3/d34dddce47c445fcbf31b803d9109cb1.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:M_CWsCRQGU6i7W8okrKpP9Io0Bs=)">
      <span>隐藏</span>
    </div>
    <div id="jmts" style="background-size:30px;background-image:url(https://s1.aigei.com/src/img/png/9f/9ff00ba6f30145f0bb63e6545b930232.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:OrxEDxgXHYGGM-H2my0AEXlzsQ4=)">
      <span>提示</span>
    </div>
    <div id="jmfd" style="background-size:28px;background-image:url(https://s1.4sai.com/src/img/png/81/8167b0a0a3de465d884f8c08169ae54f.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:atHZcsxMUZjkyiGiudfgnAUwfpI=);">
      <span>full</span>
    </div>
    <div id="jmjs" style="background-size:22px;background-image:url(https://s1.4sai.com/src/img/png/fb/fb827f8acad14f2c895baca3621cca0e.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:8Fh5_ZQzxOluF0qWYqAgBioJtAI=)">
      <span>脚本</span>
    </div>
    <div id="jmab" style="background-size:23px;background-image:url(https://s1.aigei.com/src/img/png/5b/5bf477c59e5f4512bda8b7d0220de127.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:QBrfu-TealKAZp-1HFRoovPRWPQ=);">
      <span>关于</span>
    </div>
    <div id="jmxy" style="display:none;background-color:#999 !important;background-position:center,right 2px top 2px;background-size:20px,8px;background-image:url(https://s1.4sai.com/src/img/png/a4/a48fdff9222c497bafb4adfcd5712835.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:unwTKi-5NwVy-WzNslg0U0hYlWk=),url(`+jmxym+`);">
      <span>新页播放</span>
    </div>
    <div id="jmtj" style="display:none;background-size:21px;background-image:url(https://s1.4sai.com/src/img/png/68/68f5b4672ae043e39b3dee3bc4b157d4.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:LWNlVLGJkrEOHqqQWxMEMNKrP5A=)">
      <span>推荐</span>
    </div>
    <div id="jmzc" style="display:none;background-size:32px;background-image:url(https://s1.aigei.com/src/img/png/29/29d664d1f42b47009a179982b021c249.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:yAtrJuJtmQlE91vS9IqPJv0QGMM=)">
      <span>支持</span>
    </div>
    <a style="background-size:25px;background-image:url(https://s1.aigei.com/src/img/png/49/494c6d6f38d84e6b9edf4d55363280af.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:eUmN0Lq0hH1FnO_2xIPGs7h2VtA=);" href="`+jmanlurl+`453746#help">
      <span>简介和帮助</span>
    </a>
    <a style="background-size:27px;background-image:url(https://s1.aigei.com/src/img/png/2b/2b8aa2e23ce748128de194b21c054346.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:kYc-EvMC0cf8cgj9aI71I8XUOhE=);" href="`+jmanlurl+`453746/feedback">
      <span>反馈</span>
    </a>
    <a style="background-size:20px;background-image:url(https://s1.aigei.com/src/img/png/bb/bb2d379396aa405da9d57fba0c81833d.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:m8hKzuNX3IbAhaABRcEwqE5azZU=);" href="https://t.me/jsday">
      <span>TG群</span>
    </a>`;
    jmtopclick(); linkb();
  };
  function jmonnone() {
    var jmnone=document.querySelectorAll(".jmtiondivs");
    for (var i=0;i<jmnone.length;i++) {
      jmnone[i].style.display="none";
    };
  };
  function jmmq() {
    jmonnone();
    jmanlstion.style.display="block";
    jmscan.style.display="block";
  };
  function jmmu() {
    jmonnone();
    jmfun.style.display="block";
  };
  function jmopen() {
    jmanls.style.cssText+="width:400px;height:183px;overflow:visible;border-radius:10px;";
    setTimeout(function() {
      jmanlsmenu.style.display="block";
      jmlogo.style.cssText+="width:60px;height:30px;right:2px;top:2px;background-size:100%;";
    }, 100)
    if (jmqrcode.style.width=="180px") {
      jmqrcode.style.cssText+="width:130px;height:130px;";
      jmanlstion.style.cssText+="overflow:hidden;";
    };
  };
  function jmoff() {
    jmanlstion.style.cssText+="bottom:45px;";
    setTimeout(function() {
      jmplay.style.cssText+="max-width:100%;min-height:60px;max-height:100%;bottom:0px;box-shadow:none;";
    }, 300)
   setTimeout(function() {
      jmanlstion.style.cssText+="display:none;";
     }, 500)
   setTimeout(function() {
      jmanls.style.cssText+="width:130px;height:60px;overflow:hidden;border-radius:49px;";
      jmanlsmenu.style.display="none";
      jmlogo.style.cssText+="width:130px;height:60px;right:0px;top:0px;background-color:transparent !important;background-position:center;background-size:80px;";
    }, 550)
    if (!(jmlogo.style.backgroundPosition=="center")) {
      jmlohy();
    }
  };
  function jmtuij() {
    var jmtjstyle="width:28.6%;height:60px;background-size:110%;background-image:url(";
    jmfun.innerHTML=`
    <a href="https://www.youtube.com/watch?v=PlIZyN1rCFU" style="`+jmtjstyle+`https://puui.qpic.cn/vpic_cover/t3508m1q3b0/t3508m1q3b0_1680138481_hz.jpg/496);">
      <span>隐入尘烟</span>
    </a>
    <a href="https://www.iqiyi.com/v_xkt6z3z798.html" style="`+jmtjstyle+`https://pic0.iqiyipic.com/image/20230814/8b/04/a_100476174_m_601_m42_284_160.jpg);">
      <span>狂飙</span>
    </a>
    <a href="https://v.qq.com/x/cover/0s4fa14ciz3ohd0.html" style="`+jmtjstyle+`https://puui.qpic.cn/tv/0/1250298172_540304/450?max_age=7776001);">
      <span>封神 第一部</span>
    </a><br style="clear:both;"><br><span style="top:70%;">在YouTube观看《 隐入尘烟 》<br>若遇到版权问题 可使用解析下载后观看</span>`;
    jmmu(); linkb();
  };
  function jmzhic() {
    jmfun.innerHTML=`
    <a style="background-size:26px;background-image:url(https://v.qq.com/favicon.ico);" href="https://v.qq.com/">
      <span>腾讯视频</span>
    </a>
    <a style="background-size:22px;background-image:url(https://www.iqiyipic.com/common/fix/128-128-logo.png);" href="https://www.iqiyi.com/">
      <span>爱奇艺</span>
    </a>
    <a style="background-size:26px;background-image:url(https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png);" href="https://www.youku.com/">
      <span>优酷</span>
    </a>
    <a style="background-size:26px;background-image:url(https://i3.letvimg.com/lc05_img/201803/01/16/53/appLetvNew.png);" href="https://www.le.com/">
      <span>乐视</span>
    </a>
    <a style="background-size:30px;background-image:url(https://i0.hdslb.com/bfs/activity-plat/static/20220518/49ddaeaba3a23f61a6d2695de40d45f0/U16vgUX6Te.png);" href="https://www.bilibili.com/">
      <span>哔哩哔哩</span>
    </a>
    <a style="background-size:22px;background-image:url(https://static.hitv.com/pc/icons/icon_512x512.1b7ca7.png);" href="https://www.mgtv.com/">
      <span>芒果tv</span>
    </a>
    <a style="background-size:40px;background-image:url(https://ppwfs.pptv.com/public/images/headerfooter/cms-logo.png);" href="https://www.pptv.com/">
      <span>PPTV</span>
    </a>
    <a style="background-size:20px;background-image:url(https://i1.itc.cn/20140515/2f73_300e02da_4d0b_9415_041a_d9221ee27857_1.png);" href="https://tv.sohu.com/">
      <span>搜狐视频</span>
    </a>
    <a style="background-size:22px;background-image:url(`+jmdyico+`);" href="https://www.douyin.com/discover">
      <span>抖音</span>
    </a>
    <a style="background-size:26px;background-image:url(`+jmytbico+`);" href="https://www.youtube.com/">
      <span>YouTube</span>
    </a>`;
    jmmu(); linkb();
  };
  function jmspbs() {
    setTimeout(function() {
      jmqrsp.style.cssText+="background-color:yellow !important;";
    }, 500)
    setTimeout(function() {
      jmqrsp.style.cssText+="background-color:rgba(255,255,255,0.5) !important;";
    }, 2000)
  };
  var jmgf3="https://greasyfork.s3.us-east-2.amazonaws.com/";
  function jmtopclick() {
    jmhide.onclick=function() {
      jmplayer.innerHTML='<img id="jmimg" src="'+jmimgapi+'"/>';
      jmoff();
      setTimeout(function() {
        jmanls.style.cssText+="bottom:-200px;";
      }, 1500)
    };
    jmin.onclick=function() {
      jmqrimg.src=jmgf3+"dx14s7i5selgybqqw3a8h2dqxv1u";
      jmmq();
      jmspbs();
      jmqrsp.innerHTML="其他设备扫码<br>去安乐视页面";
    };
    jmzs.onclick=function() {
      jmqrimg.src=jmgf3+"s212tkjjhh09iz4bcai0qi96qr4i";
      jmmq();
      jmspbs();
      jmqrsp.innerHTML="赞赏<br>微信扫码";
    };
    jmal.onclick=function() {
      jmqrimg.src=jmgf3+"sd2tnq4wj8oqggfn510fv63un8l2";
      jmmq();
      jmspbs();
      jmqrsp.innerHTML="支付宝扫码<br>领消费红包";
    };
    jmas.onclick=function() {
      jmqrimg.src=jmgf3+"c548pu2jnuvbh5sftkfldyqmh2xn";
      jmmq();
      jmspbs();
      jmqrsp.innerHTML="支付宝扫码<br>领AppStore红包";
    };
    jmtj.onclick=function() {
      jmtuij();
    };
    jmzc.onclick=function() {
      jmzhic();
    };
    jmfd.onclick=function() {
      jmfull();
    };
    jmjs.onclick=function() {
      jmfun.innerHTML='<a href="'+jmanlurl+'453746"><span>安乐视</span></a><a href="https://raw.githubusercontent.com/shling680/anls/main/scripts/%E5%AE%89%E4%B9%90%E8%A7%86.alook"><span>Alook专用</span></a><br style="clear:both;"><a href="'+jmanlurl+'412041"><span>安乐滚</span></a><a href="'+jmanlurl+'423419"><span>安乐传</span></a><a href="'+jmanlurl+'428174"><span>安乐码</span></a><a href="'+jmanlurl+'442127"><span>安乐净</span></a>';
      jmmu(); linkb();
    };
    jmxy.onclick=function() {
      jmoention();
      jmanljxs.style.display="block";
    };
    jmab.onclick=function() {
      jmonnone();
      jmabout.style.display="block";
    };
    jmts.onclick=function() {
      jmfun.innerHTML=`
      <div id="jmfunts">所有广告与 安乐视 无关 请勿轻信广告</div>
      <div id="jmfunts">在iOS端 UA改为安卓 可避免部分页面跳转</div>
      <div id="jmfunts">抖音去水印<br>支持电脑端<br>ios端 抖音app-分享-更多分享-在Alook中打开</div>`;
      jmmu();
    };
    jmrz.onclick=function() {
      fetch("https://raw.githubusercontent.com/shling680/anls/main/uplog.md")
        .then(response=>response.text())
        .then(data=>{
        document.getElementById("jmfun").innerText=data;
      })
        .catch(error=>{
          console.log('error is', error)
          jmfun.innerHTML="<br>网络连接错误<br><br>请试试以下办法：<br>检查网络连接<br>检查代理服务器和防火墙";
      });
      jmmu();
    };
    jmqrcode.onclick=function() {
      setTimeout(function() {
        jmanlstion.style.cssText+="overflow:visible;";
        jmqrcode.style.cssText+="width:180px;height:180px;";
      }, 100)
    };
  };
  function jmbottom() {
    jmanlsmenu.innerHTML=`
    <style>
  .jmanlsmenu jmask { position:absolute; width:98%; height:98%; right:50%; bottom:50%; transform:translate3d(50%,50%,-10px); background-color:rgba(0,0,0,0.2) !important; transition:0.1s all; border-radius:8px;}
  .jmanlsmenu jmask:hover { width:115%; height:115%;}
  </style>
  <div id="jmback" style="display:inline-block;background-size:25px;background-image:url(https://s.aigei.com/src/img/png/d8/d8f4b77181234762a11ac519a4b1c55e.png?imageMogr2/auto-orient/thumbnail/!237x237r/gravity/Center/crop/237x237/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Jq-vMa_81vzEPd1pOK_YfkRoDQE=);">
  </div>
  <div id="jmmore" style="display:inline-block;background-size:17px;background-image:url(https://s1.4sai.com/src/img/png/9a/9a8459b0370c477c812a6e359726eaf4.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:wHM1yNLWOEiamtLYvjaNSoD_JwY=);">
  </div>
  <div id="jmnowplay" style="background-size:17px;background-image:url(https://s1.4sai.com/src/img/png/7d/7d615efb57ed4790851369c511a1a90e.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:fghDGuvxaEUAcVhL5DtUghKWRlo=);">
  </div>
  <!--div id="jmnewplay" style="display:inline-block;background-position:center,right 2px top 2px;background-size:18px,8px;background-image:url(https://s1.4sai.com/src/img/png/a4/a48fdff9222c497bafb4adfcd5712835.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:unwTKi-5NwVy-WzNslg0U0hYlWk=),url(`+jmxym+`);">
  </div>
  <div id="jmytbe" style="background-size:25px;background-image:url(`+jmytbico+`);">
  </div>
  <div id="jmdyin" style="background-size:17px;background-image:url(`+jmdyico+`);">
  </div-->
  <div id="jmtj2" style="display:inline-block;background-size:18px;background-image:url(https://s1.4sai.com/src/img/png/68/68f5b4672ae043e39b3dee3bc4b157d4.png?e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:LWNlVLGJkrEOHqqQWxMEMNKrP5A=)">
  </div>
  <div id="jmzc2" style="display:inline-block;background-size:28px;background-image:url(https://s1.aigei.com/src/img/png/29/29d664d1f42b47009a179982b021c249.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:yAtrJuJtmQlE91vS9IqPJv0QGMM=)">
  </div>
  <div id="jmgeli" style="display:inline-block;width:1px;background-color:rgba(0,0,0,0.5) !important;cursor:default;">
  </div>
  <div id="jmgoqr" style="display:inline-block;background-size:23px;background-image:url(`+jmsmzico+`)">
  </div>
  <div id="jmshare" style="display:none;background-size:18px;background-image:url(https://s1.aigei.com/src/img/png/80/805b1a81d1414250be98960a2730f612.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:woJASejc3FfM2RK15G0B7-uINh8=);">
  </div>
  <div id="jmsearch" style="display:inline-block;background-size:17px;background-image:url(https://s1.aigei.com/src/img/png/b0/b063960f582b4a78a4456f386583405b.png?imageMogr2/auto-orient/thumbnail/!240x240r/gravity/Center/crop/240x240/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:OjIMEZunz-D_DRVTZbgJ89BuWWA=);">
  </div>`;
    jmbotclick(); jmask();
  };
  function jmask() {
    var jmask=document.querySelectorAll(".jmanlsmenu div");
    for (var i=0;i<jmask.length;i++) {
      jmask[i].innerHTML="<jmask></jmask>";
    }
    jmlide();
  };
  function jmgeli() {
    var jmgl=document.querySelectorAll("#jmgeli jmask");
    for (var i=0;i<jmgl.length;i++) {
      jmgl[i].style.display="none";
    };
  }
  function jmlide() {
    var jshade=document.querySelectorAll("#jmanlstion,#jmanlsmenu");
    for (var i=0;i<jshade.length;i++) {
      jshade[i].style.cssText+="background-color:rgba(255,255,255,0.8) !important;";
    };
    jmgeli();
  };
  function jmdade() {
    var jshade=document.querySelectorAll("#jmanlstion,#jmanlsmenu");
    for (var i=0;i<jshade.length;i++) {
      jshade[i].style.cssText+="background-color:rgba(128,128,128,0.8) !important;";
    };
    jmgeli();
  };
  function jmtions() {
    jmanlstion.style.display="block";
  };
  function jmoention() {
    jmonnone(); jmtions();
  };
  function jmbotclick() {
    jmback.onclick=function() {
      if (jmanlstion.style.display=='block') {
        jmanlstion.style.display="none";
      } else {
        if (jmplay.style.bottom=='45px') {
          jmplay.style.cssText+="width:100%;height:100%;bottom:0px;";
          jmanlstion.style.cssText+="bottom:45px;";
          setTimeout(function() {
            jmlogo.style.cssText+="background-position:center bottom 50px;";
            jmlogo.innerText="multi";
          }, 200)
          setTimeout(function() {
            jmlohy()
          }, 2000)
        } else {
          jmoff();
        }
      }
    };
    jmmore.onclick=function() {
      jmoention();
      jmtion.style.display="block";
    };
    jmnowplay.onclick=function() {
      jmoention();
      jmanljx.style.display="block";
    };
    /*jmnewplay.onclick=function() {
      jmoention();
      jmanljxs.style.display="block";
    };*/
    jmtj2.onclick=function() {
      jmoention();
      jmtuij();
    };
    jmzc2.onclick=function() {
      jmoention();
      jmzhic();
    };
    jmgoqr.onclick=function() {
      jmqrimg.src=jmgf3+"dx14s7i5selgybqqw3a8h2dqxv1u";
      jmmq();
      jmspbs();
      jmqrsp.innerHTML="其他设备扫码<br>去安乐视页面";
    };
    jmsearch.onclick=function() {
      jmoention();
      jmanlso.style.display="block";
    };
  };
  function jmsoso() {
    jmanlso.innerHTML='<input id="jmsotext" placeholder="搜索...   键入内容后可用"><div id="jmtoso" style="display:none;width:96%;height:68%;top:35px;background-color:transparent !important;overflow:auto;cursor:default;"></div>';
    var jmsoapi=[ {name:"Baidu",url:"https://www.baidu.com/s?&wd="},{name:"Google",url:"https://www.google.com/search?q="},{name:"Bing",url:"https://cn.bing.com/search?q="},{name:"抖音",url:"https://www.douyin.com/search/"},{name:"YouTube",url:"https://m.youtube.com/results?search_query="},{name:"腾讯视频",url:"https://m.v.qq.com/search.html?keyWord="},{name:"爱奇艺",url:"https://m.iqiyi.com/search.html?key="},{name:"优酷",url:"https://search.youku.com/search_video?keyword="},{name:"乐视",url:"https://m.le.com/search?wd="},{name:"哔哩哔哩",url:"https://m.bilibili.com/search?keyword="},{name:"芒果tv",url:"https://m.mgtv.com/so/?k="},{name:"PPTV",url:"https://msou.pptv.com/s_video/pg_result?keyword="},{name:"搜狐视频",url:"https://m.tv.sohu.com/upload/h5/m/mso.html?key="}]; if (jmuaLogo=="pc") { var jmsoapi=[ {name:"Baidu",url:"https://www.baidu.com/s?&wd="},{name:"Google",url:"https://www.google.com/search?q="},{name:"Bing",url:"https://cn.bing.com/search?q="},{name:"抖音",url:"https://www.douyin.com/search/"},{name:"YouTube",url:"https://www.youtube.com/results?search_query="},{name:"腾讯视频",url:"https://v.qq.com/x/search/?q="},{name:"爱奇艺",url:"https://so.iqiyi.com/so/q_"},{name:"优酷",url:"https://so.youku.com/search_video/q_"},{name:"乐视",url:"http://so.le.com/s?wd="},{name:"哔哩哔哩",url:"https://search.bilibili.com/all?keyword="},{name:"芒果tv",url:"https://so.mgtv.com/so?k="},{name:"PPTV",url:"https://sou.pptv.com/s_video?kw="},{name:"搜狐视频",url:"https://so.tv.sohu.com/mts?wd="}];};
    for (var i=0;i<jmsoapi.length;i++) {
      var jmsoapis=document.createElement("div");
      jmsoapis.innerHTML="<span>"+jmsoapi[i].name+"</span>";
      jmtoso.appendChild(jmsoapis);
      (function(i) {
        jmsoapis.onclick=function() {
          var jmsott=document.getElementById("jmsotext").value;
          window.open(jmsoapi[i].url+jmsott,'_blank');
        };
      })(i);
    };
    var jmsosr=document.getElementById("jmsotext");
    jmsosr.onkeyup=function() {
      jmtoso.style.display=jmsosr.value?"block":"none";
    };
  };
  function jmdark() {
    jmanls.style.cssText+="background-image:linear-gradient(to right top,"+jmanstbk+");";
    jmimg.style.cssText+="filter:brightness(50%);";
    jmdade();
  }
  function jmlight() {
    jmanls.style.cssText+="background-image:linear-gradient(to right top,"+jmalstbk+");";
    jmimg.style.cssText+="filter:brightness(100%);";
    jmlide();
  }
  function jmshen() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      jmdark();
    }
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      jmlight();
    }
    let listeners = {
      dark: (mediaQueryList) => {
        if (mediaQueryList.matches) {
          jmdark();
        }
      },
      light: (mediaQueryList) => {
        if (mediaQueryList.matches) {
          jmlight();
        }
      },
    };
    window.matchMedia("(prefers-color-scheme: dark)").addListener(listeners.dark);
    window.matchMedia("(prefers-color-scheme: light)").addListener(listeners.light);
  };
  function linkb() {
    var jmlink=document.querySelectorAll(".jmanlstion a");
    for(var i=0;i<jmlink.length;i++) {
      jmlink[i].setAttribute("target","_blank");
    }
  };
  function jmdisplay() { jmanls.style.cssText+="display:block;";};
  function jmhideplay() { jmanls.style.cssText+="display:none;"};
  function jmanlsvq() {
    jmhideplay();
    if ((href.indexOf("/play?")!=-1)||(href.indexOf("/cover/")!=-1)) {
      jmdisplay();
    }
  };
  var jmdyico="https://sf1-cdn-tos.douyinstatic.com/obj/eden-cn/kpchkeh7upepld/fe_app_new/favicon_v2.ico";
  function jmanlsdy() {
    function jmsady() {
      jmandz.onclick="";
      var match=href.match(/video\/(\d*)/);
      var id=match[1];
      fetch("https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=" + id)
        .then(res=>res.json())
        .then(json=>{
        var info=json.item_list[0];
        var url=info.video.play_addr.url_list[0].replace("playwm","play");
        jmandz.innerHTML="接口A - ok - 点此开始:<br>"+document.title;
        jmandz.onclick=function() {
          window.open(url,'_blank');
        }
      })
        .catch(error=>{
        jmandz.innerHTML="接口A 错误, 请尝试 其它接口";
      });
    };
    function jmsbdy() {
      jmandz.onclick="";
      var href=window.location.href;
      var match=href.match(/(.*?modal_id=|.*video\/)(\d*)/);
      var id=match[2];
      fetch("https://www.tikwm.com/api/?url="+id)
        .then(resr=>resr.json())
        .then(json=>{
        var title=json.data.title;
        var url=json.data.play;
        jmandz.innerHTML="接口B - ok - 点此开始:<br>"+title;
        jmandz.onclick=function() {
          window.open(url,'_blank');
        }
      })
        .catch(error=>{
        jmandz.innerHTML="接口B 错误, 请尝试 其它接口";
      });
    };
    var jmdyst="background-image:url("+jmdyico+");line-height:7.5;"
    jmanljx.innerHTML=`
    <div id="jmanda" style="`+jmdyst+`">
      <span>去水印A</span>
    </div>
    <div id="jmandb" style="`+jmdyst+`">
      <span>`+jmnxj+`去水印B</span>
    </div>
    <br style="clear:both;"><br style="clear:both;">
    <div id="jmandz" style="width:96%;height:auto;cursor:default;zoom:0.8;">点击上方接口<br>* 接口A 仅在www.iesdouyin.com可用</div>`;
    jmnowplay.style.cssText+="display:inline-block;background-size:17px;background-image:url("+jmdyico+");";
    setInterval (function() {
      var href=window.location.href;
      jmhideplay();
      if ((href.indexOf("modal_id=")!=-1)||(href.indexOf("/video/")!=-1)||(href.indexOf("tiktok.com/@.*")!=-1)) {
        jmdisplay();
        jmandb.onclick=function() {
          jmandz.innerHTML="请稍等...";
          jmsbdy();
        }
      }
    }, 100);
    jmanda.onclick=function() {
      jmandz.innerHTML="请稍等...";
      jmsady();
    };
  };
  var jmytbico="https://s1.aigei.com/src/img/png/46/46e4d6a5e62b4b9497432fce6703ebc8.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Xwo2FkneUDr2MK527yrHxk5kUAc=";
  var ytbapi=[ {name:jmnxj+"CocoCut",url:"https://findit.cococut.net/?v="},{name:"ytdownfk",url:"https://www.ytdownfk.com/search?url="},{name:"yout",url:"https://yout.com/video/?url="}];
  function ytbsing(ytbapi) {
    for (var i=0;i<ytbapi.length;i++) {
      var jxyapi=document.createElement("div");
      jxyapi.innerHTML="<span>"+ytbapi[i].name+"</span>";
      jxyapi.style.cssText+="background-image:url("+jmxym+");background-position:right 2px top 2px;background-size:8px;";
      jmanljx.appendChild(jxyapi);
      (function(i) {
        jxyapi.onclick=function() {
          window.open(ytbapi[i].url+location.href, '_blank');
        }
      })(i);
    }
  };
  function jmalsytb() {
    setInterval (function() {
      var href=window.location.href;
      jmhideplay();
      if (href.indexOf("youtube.com/watch")!=-1) {
        jmdisplay();
      }
    }, 100)
  };
  if (href.match(jmuapc+'|'+jmuamb+'|'+jmuamq+'|^https://v.qq.com/favicon.ico')) {
    jmgomenu(); parsing(apis);
    var jmanot=document.querySelectorAll("#jmnowplay");
    for (var i=0;i<jmanot.length;i++) {
      jmanot[i].style.display="inline-block";
    }
    jmxy.style.display="block";
  };
  if (href.match(jmuamq)) {
    jmanlsvq();
  };
  if (href.match(jmuady)) {
    jmgomenu(); jmanlsdy();
  };
  if (href.match(jmuayg)) {
    jmgomenu(); ytbsing(ytbapi); jmalsytb();
    var jmanot=document.querySelectorAll("#jmnowplay");
    for (var i=0;i<jmanot.length;i++) {
      jmanot[i].style.cssText+="display:inline-block;background-size:25px;background-image:url("+jmytbico+");";
    }
  };

})();
