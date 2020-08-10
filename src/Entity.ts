import EntityId from "./EntityId";

export default abstract class Entity<T> {
  protected readonly id: EntityId;
  public readonly props: T;

  constructor(props: T, id?: EntityId) {
    this.id = id ? id : new EntityId();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (object instanceof Entity === false) {
      return false;
    }

    return this.id === object.id;
    // return this.id.equals(object.id);
  }
}
