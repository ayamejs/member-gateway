const { Structures } = require("discord.js");
const AyameGuildMemberManager = require("./AyameGuildMemberManager.js");

module.exports = Structures.extend("Guild", (Guild) => class AyameGuild extends Guild {
  constructor(...args) {
    super(...args);
    
    this.members = new AyameGuildMemberManager(this);
  }
});
