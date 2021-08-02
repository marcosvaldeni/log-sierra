import { EntityRepository, getRepository, Repository } from "typeorm";

import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import IUserRepository from "../../../repositories/IUsersRepository";
import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User>{
  
}

export default UserRepository;
