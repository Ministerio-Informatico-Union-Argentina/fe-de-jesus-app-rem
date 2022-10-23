const mockLessons = [
    {
        id: '30be14b5-99aa-46cb-a009-d5456a5d5897',
        title: '¿Podemos creer en la Biblia?',
        order: 1,
        questions: [
            {
                id: '76e15ec2-a28a-4565-a81c-87aea53ab835',
                question: '¿Quién inspiró la Biblia?',
                type: 'MULTIPLE_CHOICE',
                options: [
                    {
                        id: '27952e6b-7ac9-4cba-bcc6-730745be5dd5',
                        answer: 'Los fariseos',
                    },
                    {
                        id: 'fd2ff216-4814-4cc1-b22c-69af12f25d8b',
                        answer: 'El Espíritu Santo',
                    },
                    {
                        id: '8727024b-756a-4406-8a00-75aab358fe2a',
                        answer: 'Los patriarcas',
                    },
                    {
                        id: '8c9a23df-42ee-4973-aeec-f18cf1217a61',
                        answer: 'No sé',
                    },
                ],
            },
        ],
    },
]

exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify(mockLessons),
    }

}
