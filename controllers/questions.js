MessageBoard.QuestionsController = Ember.ArrayController.extend({

  actions: {

    addQuestion: function() {

      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
      });
      newQuestion.save();

      this.set('title', '');
      this.set('author', '');
      this.set('description', '');
    }

  }
});
