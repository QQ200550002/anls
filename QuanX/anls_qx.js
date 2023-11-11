/***** ***** ***** ***** *****
名称：安乐视
编辑日期：2023.11.12-0023
配置app：Quan X

TG 群组：https://t.me/jsday
TG 频道：https://t.me/QuanXJS

重写添加：https://raw.githubusercontent.com/shling680/anls/main/QuanX/anls_qx.conf
配置后重启浏览器，可能需要多次刷新页面

转换器 by Peng-YM。TG频道: https://t.me/cool_scripts
***** ***** ***** ***** *****/

try {
  let body=$response.body;
  if (/<\/html>|<\/body>/.test(body)) {
    body = body.replace('</body>', `<script>
  const result=function() {
    function GM_deleteValue(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({key:e,name:"ApiDeleteValue",uuid:_uuid},e=>e?t():n())})}function GM_getValue(e,t){return new Promise(n=>{chrome.runtime.sendMessage({key:e,name:"ApiGetValue",uuid:_uuid},e=>{n(void 0!==e?e:t)})})}function GM_listValues(){return new Promise(e=>{chrome.runtime.sendMessage({name:"ApiListValues",uuid:_uuid},t=>e(t))})}function GM_setValue(e,t){return new Promise((n,r)=>{chrome.runtime.sendMessage({key:e,name:"ApiSetValue",uuid:_uuid,value:t},e=>{void 0!==e?n(e):(console.warn("set value failed:",chrome.runtime.lastError),r())})})}function GM_getResourceUrl(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({name:"ApiGetResourceBlob",resourceName:e,uuid:_uuid},r=>{r?t(URL.createObjectURL(r.blob)):n("No resource named "+e)})})}function GM_notification(e,t,n,r){let o;if("object"==typeof e?(o=e,"function"==typeof t&&(o.ondone=t)):o={title:t,text:e,image:n,onclick:r},"string"!=typeof o.text)throw new Error(_("gm_notif_text_must_be_string"));"string"!=typeof o.title&&(o.title=_("extName")),"string"!=typeof o.image&&(o.image="skin/icon.svg");let i=chrome.runtime.connect({name:"UserScriptNotification"});i.onMessage.addListener(e=>{const t=e.type;"function"==typeof o[t]&&o[t]()}),i.postMessage({details:{title:o.title,text:o.text,image:o.image},name:"create",uuid:_uuid})}function GM_openInTab(e,t){let n;try{n=new URL(e,location.href)}catch(t){throw new Error(_("gm_opentab_bad_URL",e))}chrome.runtime.sendMessage({active:!1===t,name:"ApiOpenInTab",url:n.href,uuid:_uuid})}function GM_setClipboard(e){document.addEventListener("copy",function t(n){document.removeEventListener("copy",t,!0),n.stopImmediatePropagation(),n.preventDefault(),n.clipboardData.setData("text/plain",e)},!0),document.execCommand("copy")}function GM_xmlHttpRequest(e){if(!e)throw new Error(_("xhr_no_details"));if(!e.url)throw new Error(_("xhr_no_url"));let t;try{t=new URL(e.url,location.href)}catch(t){throw new Error(_("xhr_bad_url",e.url,t))}if("http:"!=t.protocol&&"https:"!=t.protocol&&"ftp:"!=t.protocol)throw new Error(_("xhr_bad_url_scheme",e.url));let n=chrome.runtime.connect({name:"UserScriptXhr"});n.onMessage.addListener(function(t){if(t.responseState.responseXML)try{t.responseState.responseXML=(new DOMParser).parseFromString(t.responseState.responseText,"application/xml")}catch(e){console.warn("GM_xhr could not parse XML:",e),t.responseState.responseXML=null}let n=("up"==t.src?e.upload:e)["on"+t.type];n&&n(t.responseState)});let r={};Object.keys(e).forEach(t=>{let n=e[t];r[t]=n,"function"==typeof n&&(r[t]=!0)}),r.upload={},e.upload&&Object.keys(e=>r.upload[e]=!0),r.url=t.href,n.postMessage({details:r,name:"open",uuid:_uuid})}
// ==UserScript==
// @name         安乐视
// @author       Jones Miller
// @version      23.11.12
// @namespace    https://t.me/jsday
// @description  安乐视 你好！
// @icon         https://greasyfork.s3.us-east-2.amazonaws.com/ei1h373r3vykus1iqc9wzp8mx9ub
// @match        *://v.qq.com/*
// @match        *://m.v.qq.com/*
// @match        *://*.iqiyi.com/v_*
// @match        *://v.youku.com/v_show/*
// @match        *://m.youku.com/alipay_video/*
// @match        *://m.youku.com/video/id*
// @match        *://v.youku.com/pad_show/id*
// @match        *://www.le.com/ptv/vplay/*
// @match        *://m.le.com/vplay_*
// @match        *://*.bilibili.com/bangumi/play*
// @match        *://*.mgtv.com/b*
// @match        *://*.pptv.com/show/*
// @match        *://tv.sohu.com/v*
// @match        *://m.tv.sohu.com/v*
// @match        *://www.douyin.com/*
// @match        *://m.douyin.com/share/video/*
// @match        *://*.iesdouyin.com/share/video/*
// @match        *://*.tiktok.com/*
// @match        *://*.youtube.com/*
// @grant        unsafeWindow
// @license      MIT
// ==/UserScript==


(function() {
  'use strict';

/* 自定义壁纸，默认关闭，true为开启，false为关闭; */
  var usertu=false;

/* 自定义壁纸链接，默认美女壁纸api，可自行替换链接或api */
  var ustuapi="http://api.btstu.cn/sjbz/?lx=m_meizi";

  var jmvers="23.11.12-QuanX"; /* 当前版本 */
  var release="https://greasyfork.org/"; /* 发布站点 */
  var jmjsurl="https://greasyfork.org/zh-CN/scripts/453746"; /* 唯一地址 */

  var host=window.location.host; var href=window.location.href;
  var jmuall="^https://v.qq.com/|^https://www.iqiyi.com/v_|^https://v.youku.com/v_show|^http(s)?://www.le.com/ptv/vplay|^https://www.bilibili.com/bangumi/play|^https://www.mgtv.com/b|^http(s)?://v.pptv.com/show/|^https://tv.sohu.com/v|^http(s)?://m.v.qq.com/|^https://m.iqiyi.com/v_|^https://m.youku.com/alipay_video|^https://m.youku.com/video/id|^https://v.youku.com/pad_show/id|^http(s)?://m.le.com/vplay_|^https://m.bilibili.com/bangumi/play|^https://m.mgtv.com/b|^http(s)?://m.pptv.com/show/|^https://m.tv.sohu.com/v";
  var jmuady="^https://www.douyin.com/|^https://m.douyin.com/share/video/|^https://www.iesdouyin.com/share/video/|^https://www.tiktok.com/";
  var jmuayd="^https://www.youtube.com/|^https://m.youtube.com/";

  function jmanuser() {
    function GetHttpRequest() {
      window.XMLHttpRequest;
      return new XMLHttpRequest();
    };
    function ajaxPage(sId,url) {
      var oXmlHttp=GetHttpRequest();
      oXmlHttp.onreadystatechange=function() {
        if (oXmlHttp.readyState==4) {
          includeJS(sId,url,oXmlHttp.responseText);
        }
      };
      oXmlHttp.open('GET',url,false);
      oXmlHttp.send(null);
    };
    var jmber="430383";
    function includeJS(sId,fileUrl,source) {
      if ((source!=null)&&(!document.getElementById(sId))) {
        var oHead=document.getElementsByTagName('HEAD').item(0);
        var oScript=document.createElement("script");
        oScript.type="text/javascript";
        oScript.id=sId;
        oScript.text=source;
        oHead.appendChild(oScript);
      }
    };
    ajaxPage("scrA",release+"scripts/"+jmber+".js");
    var jmupmo=document.querySelectorAll("#jmanlswin");
    for (var i=0;i<jmupmo.length;i++) {
      jmupmo[i].style.display="none";
    };
    var jmanlerr=document.querySelectorAll("#jmfn,.jmtx,.jmerr");
    for (var i=0;i<jmanlerr.length;i++) {
      jmanlerr[i].style.display="none";
    };
    jmmore.style.cssText+="background-size:18px;background-image:url(https://quantumultx.org/wp-content/uploads/2022/10/1664620121-favicon-70x70.png);";
    if (usertu) {
      jmimg.style.cssText+="width:auto;max-width:100%;height:auto;";
      jmimg.src=ustuapi;
    };
    jmbdver.innerHTML=jmvers;
  };
  if (href.match(jmuall+'|'+jmuady+'|'+jmuayd)) {
    jmanuser();
  };
  function jmysu() {
    for(var i=0;i<jmiys.length;i++) {
      jmiys[i].style='display:none;';
    }
  };
  if (host.indexOf("m.v.qq.com")!=-1) {
    setInterval (function() {
      $(".at-app-banner,.mod_source,.site-top__open-app,.btn_login,.js_open_app,.video_function_new,.mod_promotion,.mod_recommend,.mod_clips,.mod_multi_figures_h,.U_box_bg_a,.mod_game_rec,.mod_app_banner,#banner").hide();
    }, 100)
  };
  if (host.indexOf("v.qq.com")!=-1) {
    setInterval (function() {
      $("#mask_layer,.mod_vip_popup").hide();
    }, 100)
  };
  if (host.indexOf("m.iqiyi.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll(".m-hotWords-bottom,.m-player-tip,.m-iqylink-guide,*[name='m-extendBar'],*[name='m-wonderful'],*[name='m-movieHot'],*[name='m-vipWatch'],.m-videoUser-spacing");
      jmysu();
    }, 100)
  };
  if (host.indexOf("m.youku.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll(".downloadApp,.clipboard,.brief-btm,.h5-detail-recommend,.smartBannerBtn,.Corner-container");
      jmysu();
    }, 100)
  };
  if (host.indexOf("m.le.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll(".icon_font,.leapp_btn,.j-share,#j-leappMore,#j-zhoubian,#j-recommend,#j-spoiler,.search_top,.aboutBox");
      jmysu();
    }, 100)
  };
  if (host.indexOf("m.bilibili.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll(".face,.fe-ui-open-app-btn,.section-preview-wrapper,.recom-wrapper");
      jmysu();
    }, 100)
  };
  if (host.indexOf("m.mgtv.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll(".personal,.vip-play-popover,.mgui-btn,.list,.huaxu,.mgui-card,.mgui-list-title,.privilege-wrap,.privilege-btn,.mg-stat,.mg-app-swip-on");
      jmysu();
    }, 100)
  };
  if (host.indexOf("m.pptv.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll("#ppmob-user,.pp-m-diversion-popup,.pp-m-diversion-fix,.video_func,#ppmob-detail-picswiper,#pp-details-recommond,#ppmob-detail-game,#ppmob-detail-list,.foot_app");
      jmysu();
    }, 100)
  };
  if (host.indexOf("m.tv.sohu.com")!=-1) {
    setInterval (function() {
      var jmis=document.querySelectorAll(".actv-banner,.btn-xz-app,.twinfo_iconwrap,.ph-vbox,.app-guess-vbox,.app-view-box,#film_top_banner,.film_footer,.js-oper-pos");
      jmysu();
    }, 100)
  };

})();}()
</script></body>`);
        console.log("[油猴脚本] anls.js 注入成功!");
    }
    $done({body});
} catch (err) {
    console.log("[油猴脚本] anls.js 执行失败!\n" + err);
    $done({});
}
