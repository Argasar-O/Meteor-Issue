import { getUser } from '../utils/users';

Meteor.methods({
  async useless() {
    await getUser();
  },
});
