SgwAdmin.Client = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  primaryPhone: DS.attr('string'),
  alternatePhone: DS.attr('string'),
  email: DS.attr('string'),
  companyName: DS.attr('string'),
  shippingAddress: DS.belongsTo('address'),
  billingAddress: DS.belongsTo('address'),
  californian: DS.attr('boolean'),
  orders: DS.hasMany('order'),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName','lastName')
});

SgwAdmin.Client.FIXTURES = [
  {
    id: 1,
    firstName: 'Christine',
    lastName: 'King',
    primaryPhone: '707-222-6917',
    email: 'ChristineRKing@dayrep.com',
    companyName: 'Gottschalks Inc.',
    shippingAddress: 1,
    billingAddress: 1,
    californian: true,
    orders: [1]
  },
  {
    id: 2,
    firstName: 'Mary',
    lastName: 'Myrick',
    primaryPhone: '512-736-1366',
    alternatePhone: '512-345-9583',
    email: 'MaryMMyrick@teleworm.us',
    companyName: 'Pro Yard Services',
    shippingAddress: 2,
    billingAddress: 2,
    californian: false,
    orders: [2]
  }
];