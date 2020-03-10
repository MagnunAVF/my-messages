// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
var message = {
    name: "Ximira",
    phone: "+5551982019180",
    email: "ximira@test.com",
}
// var params = {
//     QueueName: 'MyFourthQueue', /* required */
//     // QueueOwnerAWSAccountId: 'STRING_VALUE'
//   };
//   sqs.getQueueUrl(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });

var params = {
//   DelaySeconds: 1,
//   MessageAttributes: {},
  MessageBody: JSON.stringify(message),
  // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  // MessageId: "Group1",  // Required for FIFO queues
  QueueUrl: "http://0.0.0.0:9324/queue/CreateContactQueue"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});