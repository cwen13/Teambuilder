const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the school it is contructed with", () => {
      const intern = new Intern("Lorance", 123, "lorance@getmail.org", "CWRU");
      const school = intern.getSchool();
      expect(school).toEqual("CWRU");
    });
  });

  describe("getRole", () => {
    it("should show that this person is an intern", () => {
      const intern = new Intern("Lorance", 123, "lorance@getmail.org");
      const role = intern.getRole();
      expect(role).toEqual("Intern");
    });
  });
}
