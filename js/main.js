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
  data.entries.upshift(formvalue);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  data.nextEntryId++;
  $form.reset();
});

function createEntries(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'row');

  var imgdiv = document.createElement('div');
  imgdiv.setAttribute('class', 'column-half');
  li.appendChild(imgdiv);

  var img = document.createElement('img');
  img.setAttribute('src', entry.photourl);
  img.setAttribute('class', 'img');
  imgdiv.appendChild(img);

  var textdiv = document.createElement('div');
  textdiv.setAttribute('class', 'column-half');
  li.appendChild(textdiv);

  var texth3 = document.createElement('h3');
  texth3.setAttribute('class', 'title');
  texth3.textContent = entry.title;
  textdiv.appendChild(texth3);

  var textp = document.createElement('p');
  textp.setAttribute('class', 'text');
  textp.textContent = entry.notes;
  textdiv.appendChild(textp);
  return li;
}

var $ul = document.querySelector('.ul');

for (var i = 0; i < data.entries.length; i++) {
  var entry = createEntries(data.entries[i]);
  $ul.appendChild(entry);
}
