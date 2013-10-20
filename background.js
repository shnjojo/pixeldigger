var upload_img = {};

function readFile(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    upload_img.img_src = this.result;
    //$('#preview').append('<img src="' + upload_img.img_src + '" />');
    //datauriToImage(img);
    //injectSomeShit(this.result);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, upload_img);
    });
  }
};

function injectSomeShit(shit){
  chrome.tabs.executeScript(null,
      {code: "$('body').prepend('<img src=" + shit + "/>')"}
  )
}

function datauriToImage(data_uri){
  var myCanvas = document.createElement('canvas');
  var ctx = myCanvas.getContext('2d');
  var stupid_img = new Image;
  stupid_img.onload = function(){
    ctx.drawImage(stupid_img,0,0);
  };
  stupid_img.src = data_uri;
}