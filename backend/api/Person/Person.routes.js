/* Person Routes */

const {
  addPerson,
  getAllPeople,
  getPerson,
  updatePerson,
  deletePerson,
} = require('./Person.controller');

module.exports = (server) => {

  server.route('/person')
    .post(addPerson)
    .get(getAllPeople);
  
  server.route('/person/:personId')
    .put(updatePerson)
    .get(getPerson)
    .delete(deletePerson);
    
};
