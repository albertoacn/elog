module.exports = {
    // HTTP port
    port: process.env.PORT || 3000,
    mongoUrl: process.env.MONGOLAB_URI || process.env.MONGO_URL || process.env.MONGODB_URI
    // mongoUrl: 'mongodb://localhost:27017/submissions'
};