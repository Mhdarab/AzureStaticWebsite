
const { app } = require('@azure/functions');

app.http('HelloAzure', {
    methods: ['GET'],
    authLevel: 'anonymous',

    handler: async (request, context) => {
        context.log('HelloAzure function executed');

        const name = request.query.get('name') || 'Student';

        return {
            status: 200,
            jsonBody: {
                message: `Hello ${name}!`,
                project: 'Azure Guided Projects',
                service: 'Azure Functions',
                status: 'Success'
            }
        };
    }
});
