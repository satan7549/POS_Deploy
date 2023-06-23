const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Title",
      version: "1.0.0",
      description: "Description of your API",
    },
    // Specify the path to the API docs
    paths: require("./swagger-spec.json"),
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Specify the paths to the API files
  apis: ["./app.js", "./routes/userRoutes.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { specs };
