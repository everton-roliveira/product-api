const {
	DATABASE_HOST,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE_NAME,
	DATABASE_DIALECT,
	DATABASE_PORT
} = process.env;

module.exports = {
	host: DATABASE_HOST || "127.0.0.1",
	username: DATABASE_USER || "sandbox",
	password: DATABASE_PASSWORD || "sandbox",
	dialect: DATABASE_DIALECT || "mysql",
	database:DATABASE_NAME || "sandbox",
	port: DATABASE_PORT || 3306
};
