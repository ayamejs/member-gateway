# `@ayamejs/member-gateway`
Per-member settings gateway for Ayame.

## Install
```sh
$ npm install @ayamejs/member-gateway
```

## Usage
Before creating the Ayame client register the plugin.
```js
const { AyameClient } = require("ayame");

AyameClient.use(require("@ayamejs/member-gateway"));
```
When creating your client specify that you want the members gateway
```js
new AyameClient({ gateways: { members: true } });
// Or to use a different provider that's not the default. E.g use redis to handle members.
new AyameClient({ gateways: { members: "redis" } });
```
And then all members get a `settings` property like normal.
```js
member.settings.update({ xp: 420, level: 69 });

return msg.send(`Your level is: ${member.settings.get("level", 0)}`);
```

## License
Released under the [MIT License](LICENSE)
