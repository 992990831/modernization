//export const token = Symbol('token');
import { Request, Sign_In_Url } from '../util/Request';

export interface UserInfo{
    id: number;
    note: string;
}

class AuthService {
  async authenticate(userName:string='andy', password:string='123456'): Promise<void> {
    let success = false;

    try {
      const resp = await Request.get(Sign_In_Url);
      
      debugger;
      localStorage.setItem('auth_token', JSON.stringify(resp.data));
      success = true;
    } catch {
      console.error('auth failed');
    }

    return success ? Promise.resolve() : Promise.reject();
  }
}

export const authervice = new AuthService();


