import { dynamodbClient } from "./testClient";

const TEST_TABLE = "contacts-crud-api-test"

export const putItem = async () => {
    const params = {
        TableName: TEST_TABLE,
        Item: {
            name: "Ximira",
            phone: "+5551982019180",
            email: "ximira@test.com",
        }
    };

    await dynamodbClient.put(params).promise();
}

export const getItems = async () => {
    let resp_data;

    const params = {
        TableName: TEST_TABLE,
    };

    resp_data = await dynamodbClient.scan(params);

    return Object.keys(resp_data._events);
}