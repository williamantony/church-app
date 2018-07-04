const Person = require('./Person.model');

const addPerson = async (req, res) => {
  const { person } = req.body;
  try {
    const createRequest = await Person.create(person);
    res.status(201).json(createRequest);
  }
  catch(error) {
    console.log(error);
  }
};

const getPerson = (req, res) => {
  


};

const updatePerson = async (req, res) => {
  


};

const deletePerson = (req, res) => {
// Never Delete Record


};

module.exports = {
  addPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
