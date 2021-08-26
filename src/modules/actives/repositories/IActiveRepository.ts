import Active from '../infra/typeorm/entities/Active';

export default interface IActiveRepository {
  activeOn(user_id: string): Promise<Active>;
  activeOff(user_id: string): Promise<Active>;
  listActives(user_id: string): Promise<Active[]>;
}
