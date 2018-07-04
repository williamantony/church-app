const Person = require('./Person.model');
const {
  SUCCESS,
  CREATED,
} = require('../status.codes');

const addPerson = async (req, res) => {
  const { person } = req.body;
  try {
    const createRequest = await Person.create(person);
    res.status(CREATED).json(createRequest);
  }
  catch(error) {
    console.log(error);
  }
};

const getPerson = (req, res) => {



};

const updatePerson = async (req, res) => {
  const { personId } = req.params;
  const { update } = req.body;
  try {
    const updateRequest = await Person.findOneAndUpdate({ _id: personId }, update, { new: true });
    res.status(SUCCESS).json(updateRequest);
  } catch(error) {
    console.log(error);
  }
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
