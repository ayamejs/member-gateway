const { AyameClient: { plugin } } = require("ayame");

module.exports = {
  AyameMember: require("./extensions/AyameMember.js"),
  AyameGuild: require("./extensions/AyameGuild.js"),
  AyameGuildMemberManager: require("./extensions/AyameGuildMemberManager.js"),
  MemberGateway: require("./settings/MemberGateway.js"),
  Client: require("./Client.js"),
  [plugin]: require("./Client.js")[plugin]
};
