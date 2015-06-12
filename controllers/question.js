MessageBoard.QuestionController = Ember.ObjectController.extend({

  isEditing: false,

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
   }

  }
});
