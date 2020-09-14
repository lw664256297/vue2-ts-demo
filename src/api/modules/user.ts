import { post } from "../http";
export default {
  // 登陆
  Login(data: Types.Http.ILoginData): Promise<Types.Cons.IResponseData> {
    return post<Types.Cons.IResponseData>(`/login`, data);
  },
  // 注册
  Reg(data: Types.Http.ILoginData): Promise<Types.Cons.IResponseData> {
    return post<Types.Cons.IResponseData>(`/reg`, data);
  },
};
