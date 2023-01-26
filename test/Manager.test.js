const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should show that this person is an engineer", () => {
      const engineer = new Manager("Lorance", 123, "lorance@getmail.org", 234);
      const role = engineer.getRole();
      expect(role).toEqual("Manager");
    });
  });
});

