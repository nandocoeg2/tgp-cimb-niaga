export class BaseResponse<T, R = any> {
  status: number = 0;
  message: string = "";
  data?: T;
  errors?: R;
}
