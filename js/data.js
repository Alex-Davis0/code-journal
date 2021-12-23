/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var datacheck = this.localStorage.getItem('entries');
if (datacheck !== null) {
  data = JSON.parse(datacheck);
}

window.addEventListener('beforeunload', function (event) {
  var $data = JSON.stringify(data);
  this.localStorage.setItem('entries', $data);
});
