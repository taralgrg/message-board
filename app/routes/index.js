import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    questions: this.store.findAll('question'),
    reviews: this.store.findAll('answer')
  });
   },
   actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      debugger;
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
