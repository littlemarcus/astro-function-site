export default async() => {
    console.log('Request received:', new Date().toISOString());

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: Date.now(),
            random: Math.random()
        })
    };
}
