import Username from "./Username";

describe("Username", () => {
  test("should throw username too short", async () => {
    expect(() => new Username("bob")).toThrow("Username too short");
  });

  test("should throw username too long", async () => {
    expect(() => new Username("1234567890123456789012345678901")).toThrow(
      "Username too long"
    );
  });

  test("should create a username", async () => {
    const username = new Username("myusername");
    expect(username.value).toEqual("myusername");
  });
});
