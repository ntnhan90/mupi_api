import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export class UserRepository extends Repository<User> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
        super(userRepository.target, userRepository.manager, userRepository.queryRunner);
    }

    // sample method for demo purposes
    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOneBy({ email }); // could also be this.findOneBy({ email });, but depending on your IDE/TS settings, could warn that userRepository is not used though. Up to you to use either of the 2 methods
    }
    
    // your other custom methods in your repo...
}