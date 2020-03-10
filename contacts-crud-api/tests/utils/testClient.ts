import { DynamoDB } from "aws-sdk";

let options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
};

export const dynamodbClient = new DynamoDB.DocumentClient(options);