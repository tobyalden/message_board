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

    addQuestion: function() {

    }

  }
});
