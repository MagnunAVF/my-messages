import 'source-map-support/register';
import { createItem } from "../utils/dynamodb/create";

export const main = async (event, context, callback) => {
    event.Records.forEach(async element => {
        const data = JSON.parse(element.body);

        try {
            await createItem(data);

            console.log(`Contact saved ! Contact = ${JSON.stringify(data)}`);
            callback(null, data);
        } catch (error) {
            console.log(`Error creating Contact : ${error}`);
            callback(error, null);
        }
    });
};