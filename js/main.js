/* global data */
/* exported data */

var $url = document.querySelector('.photo-url');
var $img = document.querySelector('.img');
$url.addEventListener('input', function (event) {

  $img.setAttribute('src', event.target.value);

});
