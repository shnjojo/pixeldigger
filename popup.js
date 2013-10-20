document.addEventListener('DOMContentLoaded', function(){
  var uploader = $('#file_uploader');
  var BGPage = chrome.extension.getBackgroundPage();
  
  uploader[0].addEventListener('change', BGPage.readFile, false);
  
});