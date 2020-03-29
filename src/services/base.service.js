class BaseService{

    constructor(){
        this.repository = repository
     }

     async get(id){
         if (!id) {
             const error = new Error();
             error.status = 400;
             error.message = "El id debe ser enviado";
             throw error;

         }

         const currentEntity = await this.repository.get(id);

         if(!currentEntity){
            const error = new Error();
            error.status = 404;
            error.message = "Entidad no encontrada";
            throw error;
         }

         return currentEntity;
     }

     async getAll(){
         return await this.repository.getAll();
     }

     async create(entity){
        return await this.repository.create(entity);
     }

     async update(id, entity){
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "El id debe ser enviado";
            throw error;

        }

        return await this.repository.update(id, entity)
     }

    
     async delete(id){
        if (!id) {
            const error = new Error();
            error.status = 400;
            error.message = "El id debe ser enviado";
            throw error;

        }

        return await this.repository.delete(id)
     }
}


module.exports = BaseService