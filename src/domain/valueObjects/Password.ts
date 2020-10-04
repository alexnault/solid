import ValueObject from "../../shared/domain/ValueObject";

export default class Password extends ValueObject<string> {
  public static readonly MIN_LENGTH = 8;
  public static readonly MAX_LENGTH = 255;

  public readonly value: string;

  constructor(password: string) {
    super();
    if (password.length < Password.MIN_LENGTH) {
      throw new Error("Password too short");
    }
    if (password.length > Password.MAX_LENGTH) {
      throw new Error("Password too long");
    }

    this.value = password;
  }
}
