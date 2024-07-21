
export const getUser = async () => {
  const user = (await Meteor.userAsync());
  if (!user) throw new Error('No user logged');
  return user;
};
