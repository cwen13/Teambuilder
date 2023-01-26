const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  
  getRole() {
    return "Engineer";
  }

  getCard(){
    return `<section class="card" style="width: 18rem;">
              <seciton class="card-header">
                <div class="card-title>
                  ${this.name}
                </div>
                <div class="card-subtitle">
                  <i class="fa-brands fa-github"></i>${this.getRole()}
                 </div>
              </seciton>
              <section class="card-body">
                <ul class="list-group list-group-flush">
                   <li class="list-group-item">${this.id}</li>
		   <li class="list-group-item">${this.email}</li>
                   <li class="list-group-item">${this.github}</li>
                </ul>
              </section>
            </section>`;
  }

}

module.exports = Engineer;

