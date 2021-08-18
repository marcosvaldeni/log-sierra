import { v4 as uuid } from 'uuid';

import IUserTokenRepository from '../IUserTokenRepository';

import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokenRepository implements IUserTokenRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const foundToken = this.userTokens.find(
      findingToken => findingToken.token === token,
    );

    return foundToken;
  }
}

export default FakeUserTokenRepository;
