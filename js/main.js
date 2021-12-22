/* global data */
/* exported data */

var $url = document.querySelector('.photo-url');
var $img = document.querySelector('.img');

$url.addEventListener('input', function (event) {

  $img.setAttribute('src', event.target.value);

});

var $form = document.querySelector('.form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var formvalue = {
    entryId: data.nextEntryId,
    title: $form.elements.Title.value,
    photourl: $form.elements.photoUrl.value,
    notes: $form.elements.Note.value

  };
  data.entries.push(formvalue);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.nextEntryId++;
  $form.reset();
});
