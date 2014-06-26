var SgwAdmin = window.SgwAdmin = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
require('bower_components/moment/moment');

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).format('L');
});