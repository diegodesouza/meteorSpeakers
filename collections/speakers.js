Speakers = new Mongo.Collection("speakers");

Speakers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  birthday: {
    type: Date,
    label: "Birthday",
    optional: true
  }
}));

Speakers.allow({
  update: function(userId, doc, fields, modifier){
    // can only change your own documents
    return doc.userId === userId;
  }
});
