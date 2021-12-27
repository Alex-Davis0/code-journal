/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var $view = document.querySelectorAll('.view');

var datacheck = this.localStorage.getItem('entries');
if (datacheck !== null) {
  data = JSON.parse(datacheck);
}

function before(event) {
  for (var view of $view) {
    if (!view.classList.contains('hidden')) {
      data.view = view.getAttribute('data-view');
    }
  }
  var $data = JSON.stringify(data);
  this.localStorage.setItem('entries', $data);
}

window.addEventListener('beforeunload', before);
