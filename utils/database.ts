import knex from 'knex'

const db = knex({
  client: 'mysql',
  connection: {
    host: 'terminal.kro.kr',
    user: '',
    password: '',
    database: 'gbsw_capstone',
  }
})

export default db;