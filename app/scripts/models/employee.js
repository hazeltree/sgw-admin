SgwAdmin.Employee = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});

SgwAdmin.Employee.FIXTURES = [
  {
    id: 1,
    firstName: 'Steven',
    lastName: 'Valladolid',
    fullName: function() {
      return this.get('firstName') + ' ' + this.get('fullName');
    }.property('firstName','fullName')
  }
];