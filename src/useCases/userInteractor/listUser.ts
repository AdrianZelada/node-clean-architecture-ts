export default class ListUser{
    
    constructor (private userRepository:any){ }

    async execute(){        
        return await this.userRepository.list()
    }
}