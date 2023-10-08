
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Types = require('./types');
const Breeds = require('./breeds');
const Users = require('./users');
const Pets = require('./pets');
const AdoptionRequests = require('./AdoptionRequests');

// Define the relationships between the models
Breeds.hasMany(Types, {
  foreignKey: 'type_id',
  onDelete: 'CASCADE'
});

Pets.belongsTo(Types, {
  foreignKey: 'type_id',
});

Pets.hasMany(Breeds, {
  foreignKey: 'breed_id',
});

AdoptionRequests.hasMany(Pets, {
  foreignKey: 'pet_id',
});

AdoptionRequests.belongsTo(Users, {
  foreignKey: 'user_id',
});

module.exports = { Types, Breeds, Users, Pets, AdoptionRequests };

