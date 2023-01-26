const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNum = officeNumber;
  }

  getRole () {
    return "Manager";
  }
  getCard(){
    return `<section class="card" style="width: 18rem;">
              <seciton class="card-header">
                <div class="card-title>
                  ${this.name}
                </div>
                <div class="card-subtitle">
                  <i class="fa-solid fa-people-roof"></i>${this.getRole()}
                 </div>
              </seciton>
              <section class="card-body">
                <ul class="list-group list-group-flush">
                   <li class="list-group-item">${this.id}</li>
		   <li class="list-group-item">${this.email}</li>
                   <li class="list-group-item">${this.officeNum}</li>
                </ul>
              </section>
            </section>`;
  }


}

module.exports = Manager;


