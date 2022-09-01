import Dexie, { Table } from "dexie";

export class Contacts extends Dexie {
  contacts!: Table<IContact>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      contacts: "++id, universalProfile, name, imgUrl",
    });
  }
}

export const db = new Contacts();
