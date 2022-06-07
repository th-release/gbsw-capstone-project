import knex from 'knex'

const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'cth',
    password: '',
    database: 'gbsw_capstone',
  }
})

export default db;