import { v4 as uuidv4 } from "uuid";

export default class EntityId {
  private value: string;

  constructor(id?: string) {
    this.value = id ?? uuidv4();
  }
}
