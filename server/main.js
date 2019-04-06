import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

Meteor.startup(() => {


  // If the Links collection is empty, add some data.
  ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": "3f5e963a50ab49e4b13d550d27c56e89",
        "secret": "5a742d1843ec40d086672808ee33f09e"
      }
    },
    { upsert: true }
  );

});
