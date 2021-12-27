/* global data */
/* exported data */

var $url = document.querySelector('.photo-url');
var $img = document.querySelector('.img');
var $entryform = document.getElementById('entry-form');
var $entries = document.getElementById('entries-page');

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

  data.nextEntryId++;

  data.entries.unshift(formvalue);
  $ul.prepend(createEntries(data.entries[0]));
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');

  $form.reset();
  $entryform.classList.add('hidden');
  $entries.classList.remove('hidden');
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

function load(event) {
  for (var i = data.entries.length - 1; i >= 0; i--) {
    $ul.prepend(createEntries(data.entries[i]));
  }
  if (data.view === 'entries') {
    $entryform.classList.add('hidden');
    $entries.classList.remove('hidden');
  } else if (data.view === 'entry-form') {
    $entryform.classList.remove('hidden');
    $entries.classList.add('hidden');
  }
}

window.addEventListener('DOMContentLoaded', load);

var $entry = document.getElementById('entries');
var $new = document.getElementById('new');
var $view = document.querySelectorAll('.view');

function viewswap(event) {
  if (!event.target.matches('.link')) {
    return;
  }

  var data = event.target.getAttribute('data-view');

  for (var view of $view) {
    if (view.getAttribute('data-view') === data) {
      view.classList.remove('hidden');
    } else {
      view.classList.add('hidden');
    }
  }
}

$entry.addEventListener('click', viewswap);
$new.addEventListener('click', viewswap);
