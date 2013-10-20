var insert_img = {};

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
  insert_img = request;
  console.log(insert_img);
  $('body').prepend('<img src="' + insert_img.img_src + '"/>');
});