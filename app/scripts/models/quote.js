SgwAdmin.Quote = DS.Model.extend({
  sender: DS.belongsTo('employee'),
  date: DS.attr('string'),
  firstName: DS.attr('string'),
  email: DS.attr('string'),
  pattern: DS.attr('string'),
  size: DS.attr('string'),
  squareFeet: DS.attr('string'),
  squareFootPrice: DS.attr('number'),
  totalCost: DS.attr('number'),
  temperedGlass: DS.attr('string'),
  framing: DS.attr('string'),
  misc: DS.attr('string'),
});

SgwAdmin.Quote.FIXTURES = [
  {
    id: 1,
    sender: 1,
    date: '06/01/14',
    firstName: 'Jane',
    email: 'jane@doe.com',
    pattern: 'Abstract art',
    size: '45 x 45',
    squareFeet: '14',
    squareFootPrice: 90,
    totalCost: 1460,
    temperedGlass: 'none',
    framing: 'Standard brace bar for minimal install',
    misc: 'some additional notes'
  }
];