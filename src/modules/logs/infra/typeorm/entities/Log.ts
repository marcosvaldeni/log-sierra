import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  login: Date;

  @CreateDateColumn()
  logout: Date;

  @Column()
  user_id: string;
}

export default User;
