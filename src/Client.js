const { AyameClient } = require("ayame");
const MemberGateway = require("./settings/MemberGateway.js");

class Client extends AyameClient {
  static [AyameClient.plugin]() {
    if(this.options.gateways.members) {
      this.gateways.register(new MemberGateway(this, this.options.gateways.members));
    }
  }
}

module.exports = Client;
