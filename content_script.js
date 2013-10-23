var insert_img = {};
insert_img.opacity = 0;
var already_uploaded = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
  insert_img = request;
  if (insert_img.img_src && already_uploaded === 0) {
    $('body').prepend('<img id="inserted_img" src="' + insert_img.img_src + '"/>');
    already_uploaded = 1;
  } else if (already_uploaded === 1 && !insert_img.opacity) {
    $('#inserted_img').attr('src', insert_img.img_src);
  } else if (insert_img.opacity){
    $('#inserted_img').css('opacity', insert_img.opacity/10);
  };
});