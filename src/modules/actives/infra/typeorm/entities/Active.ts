import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('actives')
class Active {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  activeOn: Date;

  @CreateDateColumn()
  activeOff: Date | null;

  @Column()
  user_id: string;
}

export default Active;
