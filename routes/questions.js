MessageBoard.QuestionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('question');
  },
  // this.transitionToRoute('test');
});
