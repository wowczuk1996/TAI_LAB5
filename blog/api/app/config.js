const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:#taitai1@ds263656.mlab.com:63656/tai1',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
