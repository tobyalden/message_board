MessageBoard.Question = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
