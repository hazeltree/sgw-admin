SgwAdmin.Request = DS.Model.extend({
  firstName: DS.attr('string'),
  email: DS.attr('string'),
  primaryPhone: DS.attr('string'),
  design: DS.attr('string'),
  stock: DS.attr('string'),
  height: DS.attr('string'),
  width: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  installation: DS.attr('string'),
  framing: DS.attr('string'),
  date: DS.attr('date')
});

SgwAdmin.Request.FIXTURES = [
  {
    id: 1,
    firstName: 'Lynn Martel',
    email: 'Lmartel25@aol.com',
    primaryPhone: '7742664858',
    design: 'I would like a custom pattern designed by your artists',
    stock: 'Item #6646',
    height: '21 1/2',
    width: '33 3/4',
    description: 'I have a sun room that we have turned into a spare room. There is a framed opening and when you walk down the stairs you can see in the room and the bed. I want to put in the stained glass window for some privacy and I am looking for a quote.',
    image: 'http://upload.wikimedia.org/wikipedia/commons/3/3e/Temple_Ohev_Sholom_Stained_Glass,_Ascalon_Studios,_David_Ascalon.jpg',
    installation: 'I m going to mount the window into a frame',
    framing: 'Minimal Install: The stained glass rests against your existing window and is held in place by tacking, quarter round or molding.',
    date: '07/08/2014'
  }
];