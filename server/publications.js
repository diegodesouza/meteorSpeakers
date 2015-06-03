Meteor.publish('speakers', function(){
  return Speakers.find({});
});
