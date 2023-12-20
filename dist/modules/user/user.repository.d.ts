import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserRepository extends Repository<User> {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User>;
}
