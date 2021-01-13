const { checkSchema } = require('express-validator');

module.exports = {
   editAction: checkSchema({
      token: {
         notEmpty: true
      },
      name: {
         optional: true,
         trim: true,
         isLength: {
            options: { min: 2}
         },
         errorMessage: 'Nome precisa de pelo menos 2 caracteres'
      },
      email : {
         optional: true,
         isEmail: true,
         normalizeEmail: true,
         errorMessage: 'E-mail inválido'
      },
      password: {
         optional: true,
         isLength: {
            options: { min: 2}
         },
         errorMessage: 'Senha precisa de pelo menos caracteres'
      },
      state: {
         optional: true,
         notEmpty: true,
         errorMessage: 'Estado não preenchido'
      }
   })
}
