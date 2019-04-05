import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

Meteor.startup(() => {


  // If the Links collection is empty, add some data.
  ServiceConfiguration.configurations.update(
    { "service": "spotify" },
    {
      $set: {
        "clientId": "40a25c6162004edd9a4eac59e6fad904",
        "secret": "68b4fc0373b64da293201be1796b0f58"
      }
    },
    { upsert: true }
  );

});
