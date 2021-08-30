import Active from '../infra/typeorm/entities/Active';

export default interface IActiveRepository {
  checkActive(user_id: string): Promise<boolean>;
  activeOn(user_id: string): Promise<Active>;
  activeOff(user_id: string): Promise<Active>;
  listActives(user_id: string): Promise<Active[]>;
}
