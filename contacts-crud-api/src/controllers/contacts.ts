import 'source-map-support/register';

export const create = async (event, context, callback) => {
  event.Records.forEach(async element => {
    const data = JSON.parse(element.body);

    console.log(data);
  });
};