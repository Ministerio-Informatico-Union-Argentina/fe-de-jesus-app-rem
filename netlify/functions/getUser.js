const mockUser = {
    id: 'acf7a6da-ec3a-4e0d-adbc-394cf49ccd91',
    name: 'Flavio',
    lastname: 'Tosi',
    version: 1,
    lessons: [
        {
            id: '30be14b5-99aa-46cb-a009-d5456a5d5897',
            completed: true,
        },
    ],
    questions: [
        {
            id: '76e15ec2-a28a-4565-a81c-87aea53ab835',
            answer: '27952e6b-7ac9-4cba-bcc6-730745be5dd5',
        },
        {
            id: 'b0c62b4d-29cf-4b3b-b863-01d01f2972aa',
            answer: 'El Espíritu Santo',
        },
    ],
}

const handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify(mockUser),
    }

}

export { handler }

// const fetch = require("node-fetch")

// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts'

// exports.handler = async (event, context) => {
//   try {
//     const response = await fetch(API_ENDPOINT)
//     const data = await response.json()
//     return { statusCode: 200, body: JSON.stringify({ data }) }
//   } catch (error) {
//     console.log(error)
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed fetching data' }),
//     }
//   }
// }
