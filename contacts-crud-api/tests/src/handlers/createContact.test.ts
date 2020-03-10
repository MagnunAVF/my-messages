import { setupDB } from "./../../utils/testSetup";
import { sendContactToQueue } from "./../../utils/sqs";
import { getItems } from "./../../utils/dynamodb";

setupDB();

it("test 1", async () => {
    await sendContactToQueue("CreateContactQueue");

    const contacts = await getItems();

    expect(contacts).toBe(2);
})

// it("test 2", () => {
//     putItem();
// })

// it("test 3", () => {
//     putItem();
// })