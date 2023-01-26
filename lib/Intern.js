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
  getCard(){
    return `<section class="card" style="width: 18rem;">
              <seciton class="card-header">
                <div class="card-title>
                  ${this.name}
                </div>
                <div class="card-subtitle">
                  <i class="fa-regular fa-cup-togo"></i>${this.getRole()}
                 </div>
              </seciton>
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

