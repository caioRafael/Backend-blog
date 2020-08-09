const connection = require('../database/connection'); 

module.exports = {
    async create(request, response){
        const{id,password} = request.body;

        const user = await connection('users')
        .where('id',id)
        .andWhere('password', password)
        .select('*')
        .first();
        
        if(!user){
            return response.status(400).json({error: "Não há usuário com este ID e senha"});
        }

        return response.json(user);
    }
}