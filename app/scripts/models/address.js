SgwAdmin.Address = DS.Model.extend({
  street: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('number'),
  full: function() {
    return this.get('street') + ', ' + this.get('city') + ', ' + this.get('state') + ' ' + this.get('zip');
  }.property('street','city','state','zip'),
});

SgwAdmin.Address.FIXTURES = [
  {
    id: 1,
    street: '3705 Hillview Drive',
    city: 'San Francisco',
    state: 'CA',
    zip: 94103
  },
  {
    id: 2,
    street: '2931 Brentwood Drive',
    city: 'Austin',
    state: 'TX',
    zip: 78744
  }
];