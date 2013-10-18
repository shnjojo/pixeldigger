var img = "";

function readFile(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    img = this.result;
    datauriToImage(img);
    //injectSomeShit(img);
    //chrome.runtime.sendMessage(insert_content);
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