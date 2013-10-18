document.addEventListener('DOMContentLoaded', function(){
  var input = document.getElementById('file_uploader');
  var popup_preview = document.getElementById('preview');
  var mask_content = {};
  var read = chrome.extension.getBackgroundPage();
  
  input.addEventListener('change', read.readFile, false);
});