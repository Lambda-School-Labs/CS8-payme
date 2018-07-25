const CronJob = require('cron').CronJob;
const notificationWorker = require('./notificationWorker.js');
const moment = require('moment');
const Reminder = require('./models/Reminder.js');

let query = Reminder.find();

const scheduler = function() {
  return {
    start: function() {
      new CronJob(
        '00 12 * * * * ',
        function() {
          console.log('Running every day, sent at ' + moment().format());
          notificationWorker.run();
        },
        null,
        true,
        ''
      );
    }
  };
};
module.exports = scheduler();
