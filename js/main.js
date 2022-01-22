/* global data */
/* exported data */

var $url = document.querySelector('.photo-url');
var $img = document.querySelector('.img');
var $entryForm = document.getElementById('entry-form');
var $entryPage = document.getElementById('entry-title');
var $noEntriesText = document.querySelector('#no-entries');
var $ul = document.querySelector('ul');
var $view = document.querySelectorAll('.view');
var $form = document.querySelector('.form');

function updateImg(event) {
  $img.setAttribute('src', $url.value);
}

function handleSubmit(event) {
  event.preventDefault();
  var entry = {
    entryId: data.nextEntryId,
    title: $form.elements.Title.value,
    photoUrl: $form.elements.photoUrl.value,
    notes: $form.elements.Note.value
  };
  if (data.editing === null) {
    data.nextEntryId++;
    data.entries.unshift(entry);
    var newEntry = createEntries(entry);
    $ul.prepend(newEntry);
  }
  for (var i = 0; i < data.entries.length; i++) {
    if (data.editing === data.entries[i].entryId) {

      data.entries[i].title = entry.title;
      data.entries[i].photoUrl = entry.photoUrl;
      data.entries[i].notes = entry.notes;
      updateImg();
      var editedEntry = createEntries(entry);
      $ul.children[i].replaceWith(editedEntry);
      data.editing = null;
    }
  }

  $img.setAttribute('src', './images/placeholder-image-square.jpg');
  $form.reset();
  $noEntriesText.className = 'hidden';
  swapView('entries');
}

function createEntries(entry) {
  var li = document.createElement('li');
  li.setAttribute('class', 'row');
  li.setAttribute('data-entry-id', entry.entryId);

  var imgdiv = document.createElement('div');
  imgdiv.setAttribute('class', 'column-half');
  li.appendChild(imgdiv);

  var img = document.createElement('img');
  img.setAttribute('src', entry.photoUrl);
  img.setAttribute('class', 'img');
  imgdiv.appendChild(img);

  var textdiv = document.createElement('div');
  textdiv.setAttribute('class', 'column-half');
  li.appendChild(textdiv);

  var texth2 = document.createElement('h2');
  texth2.setAttribute('class', 'title');
  texth2.textContent = entry.title;
  textdiv.appendChild(texth2);

  var edit = document.createElement('a');
  edit.setAttribute('class', 'fas fa-pen edit');
  edit.setAttribute('href', '#');
  edit.setAttribute('data-entry-id', entry.entryId);
  texth2.append(edit);

  var textp = document.createElement('p');
  textp.setAttribute('class', 'text');
  textp.textContent = entry.notes;
  textdiv.appendChild(textp);
  return li;
}

function appendDom(entry) {
  swapView(data.view);
  if (data.entries.length !== 0) {
    $noEntriesText.className = 'hidden';
  }
  for (var i = 0; i < data.entries.length; i++) {
    var returnObject = createEntries(data.entries[i]);
    $ul.appendChild(returnObject);
  }
}
function swapView(string) {
  data.view = string;
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === string) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'hidden';
    }
  }
}

function dataView(event) {
  var dataViewValue = event.target.getAttribute('data-view');
  if (dataViewValue === null) {
    return;
  }
  swapView(dataViewValue);
}
function handleEdit(event) {
  if (event.target.matches('.edit')) {
    swapView('entry-form');
    $entryPage.textContent = 'Edit Entry';
    var dataEntryIdNum = parseInt(event.target.getAttribute('data-entry-id'));
    data.editing = dataEntryIdNum;
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing === data.entries[i].entryId) {
        $entryForm.elements.Title.value = data.entries[i].title;
        $entryForm.elements.photoUrl.value = data.entries[i].photoUrl;
        $entryForm.elements.Note.value = data.entries[i].notes;
        updateImg();
      }
    }
  }
}

$ul.addEventListener('click', handleEdit);
document.addEventListener('click', dataView);
document.addEventListener('DOMContentLoaded', appendDom);
$url.addEventListener('input', updateImg);
$entryForm.addEventListener('submit', handleSubmit);
