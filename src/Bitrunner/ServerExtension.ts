import { ServerExtension } from "../Server/ServerExtension";
import { bitrunnerServerData } from "./data/servers";

export class BitrunnerServerExtension extends ServerExtension {
  proxyHealth : number;

  constructor(serverName : string) {
    super();
    this.proxyHealth = bitrunnerServerData[serverName].proxyHealth;
  }
}
