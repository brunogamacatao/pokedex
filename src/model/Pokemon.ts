export class Pokemon {
  public id: number;
  public avatar_uri: string;

  constructor(public name: string, public resource_uri: string) {
    this.id = +(this.resource_uri.split('/')[3]);
    this.avatar_uri = `assets/pokemon/${this.id}.png`;
  }
}