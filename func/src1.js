function btnclick(){
		prompt('hello clicked');
	}
function load(){
	var btn=document.getElementById('btn1');
	btn.style.visibility='visible';// hidden

	var fs=document.getElementById('fs');
		fs.addEventListener("click",function(){
			var status=toggleFullScreen();
			if(status)
			{
				fs.innerText="cancel full screen";
			}
			else{
				fs.innerText="full screen";
			}
		},false);
}
// 全屏切换
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    return true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    return false;
  }
}