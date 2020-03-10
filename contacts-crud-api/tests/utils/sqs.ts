import * as AWS from "aws-sdk";

AWS.config.update({region: 'us-east-1'});
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const QUEUE_URL = "http://0.0.0.0:9324/queue"

export const sendContactToQueue = async (queueName) => {
    const contact = {
        name: "Ximira",
        phone: "+5551982019180",
        email: "ximira@test.com",
    }

    const params = {
        MessageBody: JSON.stringify(contact),
        QueueUrl: `${QUEUE_URL}/${queueName}`
    };

    await sqs.sendMessage(params).promise();
}






