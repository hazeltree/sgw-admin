SgwAdmin.Order = DS.Model.extend({
  client: DS.belongsTo('client'),
  size: function(){
    return this.get('height') + '" x ' + this.get('width') + '"';
  }.property(),
  height: DS.attr('number'),
  width: DS.attr('number'), 
  privacy: DS.attr('boolean'),
  frameCost: DS.attr('string'),
  crateCost: DS.attr('number'),
  taxCost: DS.attr('number'),
  shipCost: DS.attr('number'),
  shippingCompany: DS.belongsTo('shippingCompany'),
  totalCost: DS.attr('number'),
  deposit: DS.attr('number'),
  balance: DS.attr('number'),
  date: DS.attr('date')
});

SgwAdmin.Order.FIXTURES = [
  {
    id: 1,
    client: 1,
    height: 34,
    width: 50,
    privacy: false,
    frameCost: 0,
    crateCost: 35,
    taxCost: 0,
    shipCost: 150,
    shippingCompany: 'FedEx',
    totalCost: 1145,
    deposit: 573,
    balance: 572,
    date: 1403711794685
  },
  {
    id: 2,
    client: 2,
    height: 24,
    width: 24,
    privacy: true,
    frameCost: 0,
    crateCost: 35,
    taxCost: 0,
    shipCost: 0,
    shippingCompany: 'UPS',
    totalCost: 349.99,
    deposit: 349.99,
    balance: 0,
    date: 1403711794685
  }
];