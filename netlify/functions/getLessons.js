import mockLessons from '../../mocks/mockLessons'

const handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify(mockLessons),
    }

}

export { handler }