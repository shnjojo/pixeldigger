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
  console.log(offset);
  var i_img = document.getElementById("inserted_img");
  i_img.style.left = e.clientX + parseInt(offset[0]) + 'px';
  i_img.style.top = e.clientY + parseInt(offset[1]) + 'px';
  e.preventDefault();
  return false;
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
});