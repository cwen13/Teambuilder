const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the github it is contructed with", () => {
      const engineer = new Engineer("Lorance", 123, "lorance@getmail.org", "paperGhost");
      const github = engineer.getGithub();
      expect(github).toEqual("paperGhost");
    });
  });

  describe("getRole", () => {
    it("should show that this person is an engineer", () => {
      const engineer = new Engineer("Lorance", 123, "lorance@getmail.org");
      const role = engineer.getRole();
      expect(role).toEqual("Engineer");
    });
  });
}

  
