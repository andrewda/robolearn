const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin@ds115085.mlab.com:15085/robolearn',
  port: process.env.PORT || 8000,
};

export default config;
