var upload_img = {};

function readFile(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    upload_img.img_src = this.result;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, upload_img);
    });
  }
};