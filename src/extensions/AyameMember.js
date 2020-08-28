const { Structures } = require("discord.js");

module.exports = Structures.extend("GuildMember", (GuildMember) => class AyameMember extends GuildMember {
  constructor(...args) {
    super(...args);

    if(this.client.options.gateways.members) {
      this.settings = this.client.gateways.members.get([this.guild.id, this.id], true);
    }
  }
});
