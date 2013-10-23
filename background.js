var img_data = {};
var img_opacity = {};

function readFile(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    img_data.img_src = this.result;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, img_data);
    });
  }
};

function changeOpacity(){
  img_opacity.opacity = this.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, img_opacity);
  });
}