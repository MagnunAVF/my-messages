import * as uuid from "uuid";
import { dynamodbClient } from "./client";

export const createItem = async (item) => {
    const timestamp = new Date().getTime();

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            name: item.name,
            phone: item.phone,
            email: item.email,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };

    await dynamodbClient.put(params).promise()
};
