import ValueObject from "../../shared/domain/ValueObject";

export default class Username extends ValueObject<string> {
  public static readonly MIN_LENGTH = 4;
  public static readonly MAX_LENGTH = 30;

  public readonly value: string;

  constructor(username: string) {
    super();
    if (username.length <= Username.MIN_LENGTH) {
      throw new Error("Username too short");
    }
    if (username.length > Username.MAX_LENGTH) {
      throw new Error("Username too long");
    }
    // TODO check illegal char

    this.value = username;
  }
}
