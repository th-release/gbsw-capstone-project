import knex from 'knex'

const db = knex({
  client: 'mysql',
  connection: {
    host: 'LOCALHOST',
    user: 'cth',
    password: '',
    database: 'gbsw_capstone',
  }
})

export default db;
