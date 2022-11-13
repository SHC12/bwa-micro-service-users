'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    
       await queryInterface.bulkInsert('users', [
         {
        name: 'John Doe',
        profession: 'Admin Micro',
        role:'admin',
        email: 'denialfarizi.da@gmail.com',
        password:await bcrypt.hash('admin123',10),
        created_at: new Date(),
        updated_at: new Date(),
      },
         {
        name: 'Deni',
        profession: 'Mobile Developer',
        role:'student',
        email: 'denshinji@gmail.com',
        password:await bcrypt.hash('deni123',10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
