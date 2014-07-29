SgwAdmin.ShippingCompany = DS.Model.extend({
  name: DS.attr('string')  
});

SgwAdmin.ShippingCompany.FIXTURES = [
  {
    id: 1,
    name: 'Fedex'
  }
];