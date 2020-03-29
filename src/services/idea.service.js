const BaseService = require('./base.service');
let _ideaRepository = null


class IdeaService extends BaseService{
    constructor({IdeaRepository}){
    super(IdeaRepository)
    _ideaRepository = IdeaRepository

    }
    
    async getUserIdea(author){
        if(!author){
            const error = new Error();
            error.status = 400;
            error.message = "userid must be sent";
            throw error;
        }

        return await _ideaRepository.getUserIdea(author);
    }

    async positiveVote(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "userId must be sent";
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId)
        if(!ideaId){
            const error = new Error();
            error.status = 404;
            error.message = "Idea does not exist";
            throw error;
        }

        idea.positiveVote.push(true);

        return await _ideaRepository.update(ideaId, {positiveVote: idea.positiveVote})
    }

    async negativeVote(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "userId must be sent";
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId)
        if(!ideaId){
            const error = new Error();
            error.status = 404;
            error.message = "Idea does not exist";
            throw error;
        }

        idea.negativeVote.push(true);

        return await _ideaRepository.update(ideaId, {negativeVote: idea.negativeVote})
    }

}


module.exports = IdeaService