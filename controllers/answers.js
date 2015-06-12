MessageBoard.AnswersController = Ember.ArrayController.extend({
  needs: ['question'],
  actions: {

    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        description: this.get('description'),
      });
      newAnswer.save();
      this.set('description', '');

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();
      this.get('controllers.question').set('showAnswerButton', true);
      this.transitionToRoute('question', question.id);
    }

  }
});
