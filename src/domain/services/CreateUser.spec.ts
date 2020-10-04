import { CreateUser } from "./CreateUser";
import InMemoryUserRepo from "../../repos/InMemoryUserRepo";
import User from "../../domain/entities/User";
import Email from "../../domain/valueObjects/Email";
import Username from "../../domain/valueObjects/Username";
import Password from "../../domain/valueObjects/Password";

let createUser: ReturnType<typeof CreateUser>;

beforeEach(() => {
  createUser = CreateUser(new InMemoryUserRepo());
});

describe("CreateUser", () => {
  it("should fail because email is taken", async () => {
    await createUser(
      new User({
        firstName: "Alex",
        email: new Email("email@test.com"),
        username: new Username("username1"),
        password: new Password("12345678"),
      })
    );

    await expect(
      createUser(
        new User({
          firstName: "Alex",
          email: new Email("email@test.com"),
          username: new Username("username2"),
          password: new Password("12345678"),
        })
      )
    ).rejects.toThrow("Email taken");
  });

  it("should fail because username is taken", async () => {
    await createUser(
      new User({
        firstName: "Alex",
        email: new Email("email1@test.com"),
        username: new Username("username"),
        password: new Password("12345678"),
      })
    );

    await expect(
      createUser(
        new User({
          firstName: "Alex",
          email: new Email("email2@test.com"),
          username: new Username("username"),
          password: new Password("12345678"),
        })
      )
    ).rejects.toThrow("Username taken");
  });

  it("should create a user", async () => {
    await createUser(
      new User({
        firstName: "Alex",
        email: new Email("email@test.com"),
        username: new Username("username"),
        password: new Password("12345678"),
      })
    );
  });
});
