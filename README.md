# Meteor-Subscribe-Issue
Settings:
```
{
  "serviceConfigurations": {
    "google": {
      "clientId": "XXX.apps.googleusercontent.com",
      "secret": "XXX",
      "loginStyle": "popup"
    }
  }
}
```

Reproduction:
- Connect user with google api
- Refresh client (F5)
  -> Publish hasn't found the user (error server side)
- Uncomment in `/client/main.tsx`
- Refresh client (F5)
  -> Publish has found the user correctly (log server side)