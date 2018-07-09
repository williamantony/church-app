/* Person Routes */

const {
  addPerson,
  getPeopleByQuery,
  getPerson,
  updatePerson,
  deletePerson,
} = require('./Person.controller');

module.exports = (server) => {

  server.route('/person')
    .post(addPerson)
    .get(getPeopleByQuery);
  
  server.route('/person/:personId')
    .put(updatePerson)
    .get(getPerson)
    .delete(deletePerson);
    
};
