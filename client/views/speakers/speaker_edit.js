Template.speakers.helpers({
  'editingDoc': function() {
  return Speakers.findOne({_id: Session.get("selectedDocId")});
  }
});
