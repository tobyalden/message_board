MessageBoard.QuestionController = Ember.ObjectController.extend({

  isEditing: false,
  showAnswerButton: true,

  actions: {

    editDescription: function() {
      this.set('isEditing', true);
    },

    finishEditing: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },

    deleteQuestion: function () {
     var question = this.get('model');
     question.deleteRecord();
     question.save();
     this.transitionToRoute('questions');
   },

   addAnswer: function() {
     this.set('showAnswerButton', false);
     this.transitionToRoute('answers');
   },

   deleteAnswer: function(answer) {
     var question = this.get('model');
     question.get('answers').removeObject(answer);
     question.save();

     answer.deleteRecord();
     answer.save();
     this.transitionToRoute('question', this.get('id'));
   }

  }
});
