/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var datacheck = this.localStorage.getItem('enrties');
if (datacheck !== null) {
  datacheck = JSON.parse(data);
}

window.addEventListener('beforeunload', function (event) {
  var $data = JSON.stringify(data);
  this.localStorage.setItem('data-profile', $data);
});
