var input = document.getElementById('file_uploader');
var result = document.getElementById('preview');

input.addEventListener('change', readFile, false);

function readFile(){
  var file = this.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    result.innerHTML = '<img src="' + this.result + '" alt=""/>'
  }
}