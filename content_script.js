var insert_img = {};
insert_img.opacity = 0;
var already_uploaded = 0;

function handleDragStart(e){
  var style = window.getComputedStyle(e.target, null);
  e.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left")) - e.clientX) + 
    ',' + 
    (parseInt(style.getPropertyValue("top")) - e.clientY));
  var offset = e.dataTransfer.getData("text/plain").split(',');
}

function handleDragOver(e) {
  e.preventDefault();
  return false;
}

function handleDrop(e) {
  var offset = e.dataTransfer.getData("text/plain").split(',');
  var i_img = document.getElementById("inserted_img");
  i_img.style.left = e.clientX + parseInt(offset[0]) + 'px';
  i_img.style.top = e.clientY + parseInt(offset[1]) + 'px';
  e.preventDefault();
  return false;
}

function handleKey(e) {
  var key_code = e.keyCode;
  var i_img = document.getElementById("inserted_img");
  var img_style = window.getComputedStyle(i_img, null);
  switch(key_code){
  case 37: //key_left
    var raw_left = parseInt(img_style.getPropertyValue("left"));
    raw_left -= 1;
    i_img.style.left = raw_left + "px";
    break;
  case 38: //key_top
    var raw_top = parseInt(img_style.getPropertyValue("top"));
    raw_top -= 1;
    i_img.style.top = raw_top + "px";
    break;
  case 39: //key_right
    var raw_left = parseInt(img_style.getPropertyValue("left"));
    raw_left += 1;
    i_img.style.left = raw_left + "px";
    break;
  case 40: //key_down
    var raw_top = parseInt(img_style.getPropertyValue("top"));
    raw_top += 1;
    i_img.style.top = raw_top + "px";
    break;
  default:
    return;
  }
  e.preventDefault();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
  insert_img = request;
  if (insert_img.img_src && already_uploaded === 0) {
    $('body').prepend('<img id="inserted_img" draggable="true" style="z-index: 999999999" src="' + insert_img.img_src + '"/>');
    already_uploaded = 1;
  } else if (already_uploaded === 1 && !insert_img.opacity) {
    $('#inserted_img').attr('src', insert_img.img_src);
  } else if (insert_img.opacity){
    $('#inserted_img').css('opacity', insert_img.opacity/10);
  };
  
  var drag_img = $('#inserted_img');
  drag_img[0].addEventListener('dragstart', handleDragStart, false);
  document.body.addEventListener('dragover', handleDragOver, false);
  document.body.addEventListener('drop', handleDrop, false);
  
  window.addEventListener("keydown", handleKey, false);
});