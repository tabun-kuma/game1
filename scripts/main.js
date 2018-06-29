$.hsApp = (function (t2d) {var _obj = {bgm: null,selectChara: null,init: function () { },};_obj.init = function () {if (!this.bgm.paused) { this.bgm.pause(); };this.bgm.loop = false;this.bgm.currentTime = 0;this.selectChara = null;};_obj.bgm = new Audio();return _obj;})($.hs2d);$.hsStoryBoard = {title: function (t2d) {$.hsApp.init();var appInfo = {paintList: {},bgm: null,interval:null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,src: t2d.resources.images.title,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var titleText1 = new t2d.drawTextObject({canvas: t2d.canvas1,x: (document.body.clientWidth / 2),y: 150 * t2d.canvas1.magnificationRate,textWidth: 300,text: 'しにがみくんファイト',fontStyle: {color: 'blue',size: 64 * t2d.canvas1.magnificationRate,unit: 'px',fontFamily: 'ＭＳ ゴシック',textAlign: 'center',verticalAlign: 'middle',},init: function () {  },beforePaint: function () {this.x = (document.body.clientWidth / 2);this.y = 150 * this.canvas.magnificationRate;this.fontStyle.size = 64 * this.canvas.magnificationRate;},});var titleText2 = new t2d.drawTextObject({canvas: t2d.canvas1,x: (document.body.clientWidth / 2),y: 350 * t2d.canvas1.magnificationRate,textWidth: 150,text: 'スタート',fontStyle: {color: 'blue',size: 42 * t2d.canvas1.magnificationRate,unit: 'px',fontFamily: 'ＭＳ ゴシック',textAlign: 'center',verticalAlign: 'middle',},init: function () {this.addX = 0;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});},beforePaint: function () {this.x = (document.body.clientWidth / 2);this.y = 250 * this.canvas.magnificationRate;this.fontStyle.size = 42 * this.canvas.magnificationRate;if (this.canvas.touch.x != null) {if ((this.x - 70 * this.canvas.magnificationRate < this.canvas.touch.x&& this.y - 15 * this.canvas.magnificationRate < this.canvas.touch.y)&& (this.x + 70 * this.canvas.magnificationRate > this.canvas.touch.x&& this.y + 15 * this.canvas.magnificationRate > this.canvas.touch.y)) {this.click.se.play();clearInterval(appInfo.interval);$.hsStoryBoard.story1(t2d);};};},afterPaint: function () {if (this.addX == 30) {this.visible = (this.visible) ? false : true;this.addX = 0;} else {this.addX++;};},});appInfo.paintList = {backGround: back,title1: titleText1,title2: titleText2,};$.hsApp.bgm.src = t2d.resources.audios.bgm2;$.hsApp.bgm.loop = true;$.hsApp.bgm.play();appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},story1: function (t2d) {var appInfo = {paintList: {},bgm: null,interval: null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.story1,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var next = new t2d.drawImageObject({canvas: t2d.canvas1,x: 0,y: 0,visible: false,init: function () {this.count = 0;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});},paintStart: function () {this.count++;this.visible = (this.count > 60);},beforePaint: function () {this.x = (this.canvas.width - this.imgInfo.width) - 20;this.y = (this.canvas.height - this.imgInfo.height) - 20;if (this.isClick()) {this.click.se.play();clearInterval(appInfo.interval);$.hsStoryBoard.story2(t2d);};},src: t2d.resources.images.icon1,});appInfo.paintList = {backGround: back,nextIcon: next,};appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},story2: function (t2d) {var appInfo = {paintList: {},bgm: null,interval: null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.back1,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var chara1 = new t2d.drawImageObject({canvas: t2d.canvas1,x: document.body.clientWidth / 2,y: 50,img: null,init: function () {this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});this.click.ajust.x = (50 * t2d.canvas1.magnificationRate);},beforePaint: function () {this.x = (document.body.clientWidth / 2 - this.imgInfo.width) - (50 * this.canvas.magnificationRate);this.y = 50 * this.canvas.magnificationRate;if (this.isClick()) {this.click.se.play();$.hsApp.selectChara = this.src;clearInterval(appInfo.interval);$.hsStoryBoard.story3(t2d);};},src: t2d.resources.images.chara1,});var chara2 = new t2d.drawImageObject({canvas: t2d.canvas1,x: document.body.clientWidth / 2,y: 50,img: null,init: function () {this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});this.click.ajust.x = (25 * t2d.canvas1.magnificationRate);},beforePaint: function () {this.x = (document.body.clientWidth / 2) + (50 * this.canvas.magnificationRate);this.y = 50 * this.canvas.magnificationRate;if (this.isClick()) {this.click.se.play();$.hsApp.selectChara = this.src;clearInterval(appInfo.interval);$.hsStoryBoard.story3(t2d);};},src: t2d.resources.images.chara2,});var message = new t2d.drawTextObject({canvas: t2d.canvas1,x: (document.body.clientWidth / 2),y: 350 * t2d.canvas1.magnificationRate,textWidth: 300,text: 'キャラクターをえらんでね',fontStyle: {color: 'blue',size: 42 * t2d.canvas1.magnificationRate,unit: 'px',fontFamily: 'ＭＳ ゴシック',textAlign: 'center',verticalAlign: 'middle',},init: function () { this.addX = 0 },beforePaint: function () {this.x = (document.body.clientWidth / 2);this.y = 350 * this.canvas.magnificationRate;this.fontStyle.size = 42 * this.canvas.magnificationRate;},afterPaint: function () {if (this.addX == 30) {this.visible = (this.visible) ? false : true;this.addX = 0;} else {this.addX++;};},});appInfo.paintList = {backGround: back,chara1: chara1,chara2: chara2,message: message,};appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},story3: function (t2d) {var appInfo = {paintList: {},bgm: null,interval: null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.story2,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var next = new t2d.drawImageObject({canvas: t2d.canvas1,x: 0,y: 0,visible: false,init: function () {this.count = 0;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});},paintStart: function () {this.count++;this.visible = (this.count > 60);},beforePaint: function () {this.x = (this.canvas.width - this.imgInfo.width) - 20;this.y = (this.canvas.height - this.imgInfo.height) - 20;if (this.isClick()) {this.click.se.play();clearInterval(appInfo.interval);$.hsStoryBoard.miniGame1(t2d);};},src: t2d.resources.images.icon1,});appInfo.paintList = {backGround: back,nextIcon: next,};$.hsApp.bgm.src = t2d.resources.audios.bgm3;$.hsApp.bgm.loop = true;$.hsApp.bgm.play();appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},miniGame1: function (t2d) {var appInfo = {addCnt: 0,totalCnt: 0,paintList: {},bgm: null,interval: null,life: 3,damage:false,};var test1 = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.back1,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var test2 = new t2d.drawImageObject({canvas: t2d.canvas1,x: 0,y: 50,init: function () {this.addX = 5;this.addY = 2;this.point = -1;this.click.se = new t2d.audioObject({src: t2d.resources.audios.wahaha,});this.click.ajust.x = (25 * t2d.canvas1.magnificationRate);},beforePaint: function () {if (this.isClick()) {this.click.se.play();appInfo.addCnt = this.point;appInfo.damage = true;};for (i = 0; i < 1; i++) {this.x = this.x + this.addX;this.y = this.y + this.addY;if (this.x > (document.body.clientWidth - this.imgInfo.width + this.click.ajust.x) || (this.x + this.click.ajust.x) < 0) { this.addX *= -1; };if (this.y > (document.body.clientHeight - this.imgInfo.height) || (this.y) < 0) { this.addY *= -1; };};},afterPaint: function () { },src: t2d.resources.images.shinigami1,});var test7 = new t2d.drawImageObject({canvas: t2d.canvas1,x: document.body.clientWidth / 3,y: 50,visible: false,init: function () {this.addX = 6;this.addY = 4;this.point = -2;this.click.se = new t2d.audioObject({src: t2d.resources.audios.kyaaa,});},beforePaint: function () {if (this.isClick()) {this.click.se.play();appInfo.addCnt = this.point;appInfo.damage = true;};for (i = 0; i < 1; i++) {this.x = this.x + this.addX;this.y = this.y + this.addY;if (this.x > (document.body.clientWidth - this.imgInfo.width + this.click.ajust.x) || (this.x + this.click.ajust.x) < 0) { this.addX *= -1; };if (this.y > (document.body.clientHeight - this.imgInfo.height) || (this.y) < 0) { this.addY *= -1; };};},afterPaint: function () { },src: t2d.resources.images.akuma,});var test3 = new t2d.drawImageObject({canvas: t2d.canvas1,x: document.body.clientWidth / 2,y: 50,img: null,init: function () {this.addX = 3;this.addY = -2;this.point = 1;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});this.click.ajust.x = (25 * t2d.canvas1.magnificationRate);},beforePaint: function () {if (this.isClick()) {this.click.se.play();appInfo.addCnt = (appInfo.addCnt == 0) ? this.point : appInfo.addCnt;this.x = (Math.floor(Math.random() * (document.body.clientWidth - this.imgInfo.width + this.click.ajust.x)) + 1);};for (i = 0; i < 1; i++) {this.x = this.x + this.addX;this.y = this.y + this.addY;if (this.x > (document.body.clientWidth - this.imgInfo.width + this.click.ajust.x) || (this.x + this.click.ajust.x) < 0) { this.addX *= -1; };if (this.y > (document.body.clientHeight - this.imgInfo.height) || (this.y) < 0) { this.addY *= -1; };};},src: $.hsApp.selectChara || t2d.resources.images.hito,});var text5 = new t2d.drawTextObject({canvas: t2d.canvas1,x: t2d.canvas1.touch.x,y: t2d.canvas1.touch.y,textWidth: 300,text: 0,fontStyle: {color: 'skyblue',size: 64,unit: 'px',fontFamily: 'ＭＳ ゴシック',textAlign: 'left',verticalAlign: 'top',},beforePaint: function () {this.fontStyle.size = 64 * this.canvas.magnificationRate;if (appInfo.addCnt != 0) {this.x = this.canvas.touch.x + 20 * this.canvas.magnificationRate;this.y = this.canvas.touch.y - 20 * this.canvas.magnificationRate;this.text = ((appInfo.addCnt > 0) ? '+' : '') + appInfo.addCnt;} else {this.visible = true;this.text = '';};if (appInfo.addCnt < 0) {this.fontStyle.color = 'red';} else {this.fontStyle.color = 'skyblue';};},});var text6 = new t2d.drawTextObject({canvas: t2d.canvas1,x: 20,y: 20,textWidth: 300,text: 0,fontStyle: {color: 'blue',size: 24,unit: 'px',fontFamily: 'ＭＳ ゴシック',textAlign: 'left',verticalAlign: 'middle',},beforePaint: function () {this.x = 20 * this.canvas.magnificationRate;this.y = 20 * this.canvas.magnificationRate;this.fontStyle.size = 24 * this.canvas.magnificationRate;if (appInfo.damage) { appInfo.life--; };appInfo.totalCnt += appInfo.addCnt;appInfo.totalCnt = (appInfo.totalCnt < 0) ? 0 : appInfo.totalCnt;this.text = $.hsJs.stringFormat('SCORE : {0}     LIFE：{1}', [appInfo.totalCnt, appInfo.life]);appInfo.addCnt = 0;appInfo.damage = false;if (appInfo.life == 0) {clearInterval(appInfo.interval);$.hsStoryBoard.gameOver(t2d);};if (appInfo.totalCnt == 5 && appInfo.paintList.akuma.visible == false) {appInfo.paintList.akuma.visible = true;};if (appInfo.totalCnt == 10 && Math.abs(appInfo.paintList.shinigami.addX) != 7) {appInfo.paintList.shinigami.img.src = t2d.resources.images.shinigami2;appInfo.paintList.shinigami.img.onload = function () {appInfo.paintList.shinigami.x = 0;appInfo.paintList.shinigami.addX = -7;appInfo.paintList.shinigami.addY = -7;appInfo.paintList.shinigami.point = -3;};};if (appInfo.totalCnt == 20) {clearInterval(appInfo.interval);$.hsStoryBoard.gameClear(t2d);};},});appInfo.paintList = {backGround: test1,hito: test3,shinigami: test2,akuma: test7,point: text5,score: text6};$.hsApp.bgm.src = t2d.resources.audios.bgm1;$.hsApp.bgm.loop = true;$.hsApp.bgm.play();appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},gameOver: function (t2d) {var appInfo = {paintList: {},bgm: null,interval: null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.gameover,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var next = new t2d.drawImageObject({canvas: t2d.canvas1,x: 0,y: 0,visible: false,init: function () {this.count = 0;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});},paintStart: function () {this.count++;this.visible = (this.count > 60);},beforePaint: function () {this.x = (this.canvas.width - this.imgInfo.width) - 20;this.y = (this.canvas.height - this.imgInfo.height) - 20;if (this.isClick()) {this.click.se.play();clearInterval(appInfo.interval);$.hsStoryBoard.title(t2d);};},src: t2d.resources.images.icon1,});appInfo.paintList = {backGround: back,nextIcon: next,};$.hsApp.bgm.src = t2d.resources.audios.gameover;$.hsApp.bgm.loop = true;$.hsApp.bgm.play();appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},gameClear: function (t2d) {var appInfo = {paintList: {},bgm: null,interval: null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.clear,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var next = new t2d.drawImageObject({canvas: t2d.canvas1,x: 0,y: 0,visible: false,init: function () {this.count = 0;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});},paintStart: function () {this.count++;this.visible = (this.count > 60);},beforePaint: function () {this.x = (this.canvas.width - this.imgInfo.width) - 20;this.y = (this.canvas.height - this.imgInfo.height) - 20;if (this.isClick()) {this.click.se.play();clearInterval(appInfo.interval);$.hsStoryBoard.endRoll(t2d);};},src: t2d.resources.images.icon1,});appInfo.paintList = {backGround: back,nextIcon: next,};$.hsApp.bgm.src = t2d.resources.audios.clear;$.hsApp.bgm.loop = true;$.hsApp.bgm.play();appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},endRoll: function (t2d) {var appInfo = {paintList: {},bgm: null,interval: null,};var back = new t2d.drawImageObject({canvas: t2d.canvas1,beforePaint: function () { this.x = 0; },afterPaint: function () { this.x = 0; },src: t2d.resources.images.endroll,drawInfo: {style: 'fit',drawX: 0,drawY: 0,drawWidth: 0,drawHeight: 0,},});var next = new t2d.drawImageObject({canvas: t2d.canvas1,x: 0,y: 0,visible: false,init: function () {this.count = 0;this.click.se = new t2d.audioObject({src: t2d.resources.audios.piro,});},paintStart: function () {this.count++;this.visible = (this.count > 60);},beforePaint: function () {this.x = (this.canvas.width - this.imgInfo.width) - 20;this.y = (this.canvas.height - this.imgInfo.height) - 20;if (this.isClick()) {this.click.se.play();clearInterval(appInfo.interval);$.hsStoryBoard.title(t2d);};},src: t2d.resources.images.icon1,});appInfo.paintList = {backGround: back,nextIcon: next,};appInfo.interval = setInterval(function () {for (var j in appInfo.paintList) { appInfo.paintList[j].paint(); };t2d.canvas1.touch.x = null;t2d.canvas1.touch.y = null;}, 1000 / 30);},};(function (t2d) {t2d.addCanvas('#canvas1', 'canvas1', {size: { width: 680, height: 400 },margin: { top: 0, left: 0, bottom: 0, right: 0 },});var _resize = function () {t2d.canvas1.resize();};_resize();window.addEventListener('resize', _resize, false);$.hsStoryBoard.title(t2d);})($.hs2d);