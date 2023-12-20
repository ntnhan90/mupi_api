import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    getHello(): string;
}
