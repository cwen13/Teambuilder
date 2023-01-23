const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name it is contructed with", () => {
      const employee = new Employee("Lorance", 123, "lorance@getmail.org");
      const name = employee.getName();
      expect(name).toEqual("Lorance");
    });
  });

  describe("getEmail", () => {
    it("should show the email entered into the employee", () => {
      const employee = new Employee("Lorance", 123, "lorance@getmail.org");
      const email = employee.getEmail();
      expect(email).toEqual("lorance@getmail.org");
    });
  });

  describe("getRole", () => {
    it("should show that this person is an employee", () => {
      const employee = new Employee("Lorance", 123, "lorance@getmail.org");
      const role = employee.getRole();
      expect(role).toEqual("Employee");
    });
  });
});

  
