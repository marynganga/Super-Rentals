import Model from 'ember-data/model';


export default Model.extend({
  author:DS.attr(),
  rating: DS.attr(),
  content:DS.attr(),

});
