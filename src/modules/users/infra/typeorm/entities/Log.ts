import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('logs')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: boolean;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export default User;
