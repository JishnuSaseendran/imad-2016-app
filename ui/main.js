console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//move image
var img = document.getElementById('madi');
var margineLeft = 0;
function moveright  () {
    marginLeft = margineLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
  var interval = setInterval(moveLeft, 100);    
};