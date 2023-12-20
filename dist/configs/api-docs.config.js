"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const api_documentation_credentials = {
    name: 'admin',
    pass: 'admin',
};
function configSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Flash card project')
        .setDescription('## The flash card API description')
        .setVersion('1.0')
        .addSecurity('token', { type: 'http', scheme: 'bearer' })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const http_adapter = app.getHttpAdapter();
    http_adapter.use('/api-docs', (req, res, next) => {
        function parseAuthHeader(input) {
            const [, encodedPart] = input.split(' ');
            const buff = Buffer.from(encodedPart, 'base64');
            const text = buff.toString('ascii');
            const [name, pass] = text.split(':');
            return { name, pass };
        }
        function unauthorizedResponse() {
            if (http_adapter.getType() === 'fastify') {
                res.statusCode = 401;
                res.setHeader('WWW-Authenticate', 'Basic');
            }
            else {
                res.status(401);
                res.set('WWW-Authenticate', 'Basic');
            }
            next();
        }
        if (!req.headers.authorization) {
            return unauthorizedResponse();
        }
        const credentials = parseAuthHeader(req.headers.authorization);
        if (credentials?.name !== api_documentation_credentials.name ||
            credentials?.pass !== api_documentation_credentials.pass) {
            return unauthorizedResponse();
        }
        next();
    });
    swagger_1.SwaggerModule.setup('api-docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
        customJs: '/swagger-custom.js',
        customSiteTitle: 'Flash Card Documentation',
        customfavIcon: '/swagger.ico',
    });
}
exports.configSwagger = configSwagger;
//# sourceMappingURL=api-docs.config.js.map