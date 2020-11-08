import EntityId from "../shared/domain/EntityId";

export default interface Repo<T> {
  exists: (id: EntityId) => Promise<boolean>;
  delete: (t: T) => Promise<void>;
  save: (t: T) => Promise<void>;
}
