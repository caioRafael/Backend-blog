const connection = require('../database/connection');

module.exports ={

    async list(request, response){
        const [count] = await connection('post').count();

        const posts = await connection('post').
        join('users', 'users.id', '=', 'post.autor')
        .select('post.title',
        'post.subTitle',
        'post.image',
        'post.text',
        'post.date',
        'users.name',
        'users.email',
        );

        response.header('X-Total-count', count['count(*)']);

        return response.json(posts);
    },

    async create(request, response){
        const {title, subTitle,text,date} = request.body;
        const image = request.file.path;//pega o caminho completo da imagem e armazenada
        const autor = request.headers.authorization;

        const [id] = await connection('post').insert({
            title,
            subTitle,
            image,
            text,
            date,
            autor,
        });

        return response.json({id});

    },
};