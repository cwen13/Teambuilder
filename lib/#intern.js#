const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  
  getRole () {
    return "Intern";
  }
  getCard() {
    return `<section class="card bg-warning mb-3" style="width: 18rem;">
              <section class="card-header bg-danger text-white">
                <div class="card-title">
                    ${this.name}
                </div>
                <div class="card-subtitle">
                  <i class="fa-brands fa-github"></i>${this.getRole()}
                 </div>
              </section>
              <section class="card-body">
                <ul class="list-group list-group-flush">
                   <li class="list-group-item">${this.id}</li>
		   <li class="list-group-item">${this.email}</li>
                   <li class="list-group-item">${this.school}</li>
                </ul>
              </section>
      </section>`;
  }


}
module.exports = Intern;

