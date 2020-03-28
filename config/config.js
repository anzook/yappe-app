
const config = {
  'development': {
    'username': process.env.MYSQL_USER,
    'password': process.env.MYSQL_PASS,
    'database': process.env.MYSQL_DBNAME,
    'host': process.env.MYSQL_HOST,
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
    // 'username': 'root',
    // 'password': 'root',
    // 'database': 'database_production',
    // 'host': '127.0.0.1',
    "use_env_variable": "JAWSDB_URL",
    'dialect': 'mysql',
    // 'operatorsAliases': false,
  },
};

module.exports = config;
