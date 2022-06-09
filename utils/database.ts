import knex from 'knex'

const db = knex({
  client: 'mysql',
  connection: {
    host: 'terminal.kro.kr',
    user: 'cth',
    password: 'xogur38997',
    database: 'gbsw_capstone',
  }
})

export default db;