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
  } catch(error) {
    console.log(error);
  }
};

const getPeopleByQuery = async (req, res) => {
  const { query } = req;
  try {
    const getByQueryRequest = await Person.find(query);
    res.status(SUCCESS).json(getByQueryRequest);
  } catch(error) {
    console.log(error);
  }
};

const getPerson = async (req, res) => {
  const { personId } = req.params;
  try {
    const getRequest = await Person.findById(personId);
    res.status(SUCCESS).json(getRequest);
  } catch(error) {
    console.log(error);
  }
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

const deletePerson = async (req, res) => {
  const { personId } = req.params;
  try {
    const deleteRequest = await Person.findOneAndRemove({ _id: personId });
    res.status(SUCCESS).json(deleteRequest);
  } catch(error) {
    console.log(error);
  }
};

module.exports = {
  addPerson,
  getPeopleByQuery,
  getPerson,
  updatePerson,
  deletePerson,
};
