import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			rentals:this.store.findAll('rental'),
			reviews:this.store.findAll('review')
		});

	},
	actions: {
		saveRental3(params) {
			var newRental = this.store.createRecord('rental',params);
			newRental.save();
			this.transitionTo('index');
		},
		saveReview(params) {
			var newReview = this.store.createRecord('review',params);
			newReview.save();
			this.transitionTo('index');
		}

	}
});
