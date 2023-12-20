import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(
    	private readonly userRepository: UserRepository, // import as usual
  	) {}

	async findAll(): Promise<User[]> {
    	return this.userRepository.find();
  	}


  	async findOne(id: number) {
    	return this.userRepository.findOne({
      		where: { id },
      	//	relations: { listing: true, comments: true, tags: true },
    	});
  	}

	getHello(): string {
      return 'Hello New Users!';
  	}
}
