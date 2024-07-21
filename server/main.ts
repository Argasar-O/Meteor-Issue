
Meteor.startup(async () => {
  try {
    await ServiceConfiguration.configurations.upsertAsync(
      { service: 'google' },
      {
        $set: {
          ...Meteor.settings.serviceConfigurations.google,
        },
      },
    );
    import('../imports/api/publish');
    import('../imports/api/methods');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
});
