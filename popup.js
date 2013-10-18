document.addEventListener('DOMContentLoaded', function(){
  var input = document.getElementById('file_uploader');
  var result = document.getElementById('preview');
  var data = chrome.extension.getBackgroundPage().articleData;

  console.log(data);

  input.addEventListener('change', readFile, false);

  function readFile(){
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
      //chrome.tabs.executeScript(null,
          //{code:'target1.innerHTML = <img src="' + this.result + '" alt=""/>'});  
      result.innerHTML = '<img src="' + this.result + '" alt=""/>'
    }
  }
});