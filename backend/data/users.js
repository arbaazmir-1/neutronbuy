const bcrypt = require('bcryptjs')

const users = [
    {
        name: "Admin User",
        email: "admin@admin.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin: true,

    },
    {
        name: "Arbaaz",
        email: "arbaaz@admin.com",
        password: bcrypt.hashSync("123456",10),
        address: "970 Post Office Road"

    },
    {
        name: "Navan",
        email: "navan@admin.com",
        password: bcrypt.hashSync("123456",10),
        address: "910  Office Road"

    },

]
module.exports = users;