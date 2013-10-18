var insert_content = {};

function readFile(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    insert_content.img_src = this.result;
    chrome.runtime.sendMessage(insert_content);
    console.log(insert_content);
  }
}