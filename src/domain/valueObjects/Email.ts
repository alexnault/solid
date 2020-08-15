import ValueObject from "../../shared/domain/ValueObject";

export default class Email extends ValueObject<string> {
  private value: string;

  constructor(email: string) {
    super();
    if (!Email.isValidEmail(email)) {
      throw new Error("Email address not valid");
    }

    this.value = email.trim().toLowerCase();
  }

  private static isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
