import Email from "./Email";
import Username from "./Username";
import Entity from "./Entity";
import EntityId from "./EntityId";

interface UserProps {
  firstName: string;
  email: Email;
  username: Username;
}

export default class User extends Entity<UserProps> {
  public firstName: string;
  public email: Email;
  public username: Username;

  constructor(props: UserProps, id: EntityId) {
    super(props, id);
    this.firstName = props.firstName;
    this.email = props.email;
    this.username = props.username;
  }
}
