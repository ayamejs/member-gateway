const { Gateway, Settings } = require("ayame");

class MemberGateway extends Gateway {
  constructor(client, provider) {
    super(client, "members", provider);
  }

  get(input, create = false) {
    const [guildID, memberID] = Array.isArray(input) ? input : input.split(".");
    const guild = this.client.guilds.cache.get(guildID);

    if(guild) {
      const member = guild.members.cache.get(memberID);
      if(member) return member.settings;
    }

    if(create) {
      const settings = new Settings(this, { id: `${guildID}.${memberID}` });
      if(this.synced) settings.sync(true).catch(err => this.client.emit("error", err));
      return settings;
    }

    return null;
  }

  sync(keys = this.client.guilds.reduce((keys, guild) => keys.concat(guild.members.map(member => member.settings.id)))) {
    return super.sync(keys);
  }
}

module.exports = MemberGateway;
