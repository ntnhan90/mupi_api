import {  Controller,  Get,  Post, Body,  Patch,  Param,  Delete,} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}


	@Get()
  	async findAll() {
    	return this.userService.findAll();
  	}

  	@Get(':id')
  	async findOne(@Param('id') id: string) {
   	 	return this.userService.findOne(+id);
  	}
}
