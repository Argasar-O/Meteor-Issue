import { getUser } from '../utils/users';

Meteor.publish('publishInError', async () => {
  const user = await getUser();
  console.log("USER connected " + user._id)
  return [];
});
