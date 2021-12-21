/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('submit', function (event) {
  data.nextEntryId++;
  var $data = JSON.stringify(data);
  this.localStorage.setItem('data-profile', $data);
});
