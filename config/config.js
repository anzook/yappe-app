
const config = {
  'development': {
    'username': process.env.DB_USER || "root",
    'password': process.env.MYSQL_ROOT_PASS,
    'database': 'yappe_db',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
  'test': {
    'username': 'root',
    'password': 'root',
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
  'production': {
    'username': 'root',
    'password': 'root',
    'database': 'database_production',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
};

module.exports = config;
