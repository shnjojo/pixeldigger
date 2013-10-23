document.addEventListener('DOMContentLoaded', function(){
  var uploader = $('#file_uploader');
  var opacity = $('#opacity');
  var BGPage = chrome.extension.getBackgroundPage();
  
  uploader[0].addEventListener('change', BGPage.readFile, false);
  opacity[0].addEventListener('change', BGPage.changeOpacity, false);
});