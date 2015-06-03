Template.speakers.helpers({
  speakers: function() {
    return Speakers.find();
  }
});

Template.speakers.events({
  'click li a': function(event, template) {
    Session.set('selectedDocId', this._id);
  },
  'click #clear-people': function(){
    Session.set('selectedDocId', null);
  }
});
