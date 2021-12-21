/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var datacheck = this.localStorage.getItem('enrties');
  if (datacheck !== null) {
    datacheck = JSON.parse(data);
  }

  var $data = JSON.stringify(data);
  this.localStorage.setItem('data-profile', $data);
});
