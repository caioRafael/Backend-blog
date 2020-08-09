const connection = require('../database/connection'); 

module.exports = {
    async list(request, response){
        const autor = request.headers.authorization;

        const posts = await connection('post')
        .where('autor',autor)
        .select("*");


        return response.json(posts);
    }
}