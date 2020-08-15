import Email from "../valueObjects/Email";
import Username from "../valueObjects/Username";
import Password from "../valueObjects/Password";
import Entity from "../../shared/domain/Entity";
import EntityId from "../../shared/domain/EntityId";

interface UserProps {
  firstName: string;
  email: Email;
  username: Username;
  password: Password;
}

export default class User extends Entity<UserProps> {
  public firstName: string;
  public email: Email;
  public username: Username;
  public password: Password;

  constructor(props: UserProps, id?: EntityId) {
    super(props, id);
    this.firstName = props.firstName;
    this.email = props.email;
    this.username = props.username;
    this.password = props.password;
  }
}
