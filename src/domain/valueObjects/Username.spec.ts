import Username from "./Username";

describe("Username", () => {
  it("should throw username too short", async () => {
    expect(() => new Username("bob")).toThrow("Username too short");
  });

  it("should throw username too long", async () => {
    expect(() => new Username("1234567890123456789012345678901")).toThrow(
      "Username too long"
    );
  });

  it("should create a username", async () => {
    const username = new Username("myusername");
    expect(username.value).toEqual("myusername");
  });
});
