import { User } from '@modules/user/entities/user.entity';
import { Repository, EntityRepository } from 'typeorm';
import { RegisterUserDto } from './dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {

}