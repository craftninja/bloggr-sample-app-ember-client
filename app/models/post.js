import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date'),
  excerpt: DS.attr('string'),
  body: DS.attr('string')
});
