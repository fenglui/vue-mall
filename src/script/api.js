var ua = navigator.userAgent.toLowerCase();
console.warn('navigator.userAgent=' + ua);
console.warn('navigator.vendor=' + navigator.vendor);
console.warn('navigator.appVersion=' + navigator.appVersion);
console.warn('typeof(os)=' + typeof (os));
var isGoogleVendor = navigator.vendor === 'Google Inc.';
var isChrome = isGoogleVendor && ua.indexOf("chrome") !== -1;
var isIos = isGoogleVendor === false && isChrome === false && /iphone|ipad|ipod/.test(ua);
var isAndroid = (/android/gi).test(navigator.appVersion);//&& typeof (os) === 'object';
console.warn('isAndroid=' + isAndroid);
var isWeChat = ua.match(/MicroMessenger/i) == "micromessenger";
var isWeChatIOS = isIos == true && isWeChat;
function _webp_or_jpg() {
  return isIos ? "jpg" : "webp";
}