const BaseRepository = require('./base.repository')
let _idea = null;

class CommentRepository extends BaseRepository{
    constructor({ Comment }){
        super(Comment)
        _comment = Comment;
    }

}


module.exports = CommentRepository;