import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IwtService } from '@nestjs/jwt';
import { IPayloadIwt } from './auth.interface';
import { RegisterUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { Response } from 'express';
import { User } from '@modules/user/user.entity'

@Injectable()
export class AuthService {}
