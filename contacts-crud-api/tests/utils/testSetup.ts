import { dynamodbClient } from "./testClient";

const TEST_TABLE = "contacts-crud-api-test"

const removeAllItems = () => {
    const params = {
        TableName: TEST_TABLE,
    };

    dynamodbClient.scan(params, function (error, data) {
        if (error) {
            console.log(`Error cleaning dynamodb: ${error}`);
        }
        else {
            if (data.Items.length > 0) {
                data.Items.forEach(item => {
                    const params = {
                        TableName: TEST_TABLE,
                        Key: {
                            id: item.id,
                        },
                    };
                    dynamodbClient.delete(params, function (err) {
                        if (err) console.log(`Error cleaning dynamodb: ${error}`);
                    });
                });
            }
        }
    });
}

export const setupDB = async () => {
    afterEach(async () => {
        await removeAllItems();
    });
}
