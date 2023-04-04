import type { Axios } from "axios";
import { UserClient } from "../../../common/axios";
import type {
  CreateUserRequestModel,
  CreateUserResponseModel,
  DeleteUserRequestModel,
  DeleteUserResponseModel,
  GetUserRequestModel,
  GetUserResponseModel,
  IUserRepository,
  UpdateUserRequestModel,
  UpdateUserResponseModel,
} from "../domain";

export class UserService implements IUserRepository {
  private http: Axios;

  private baseUrl = "/users";

  constructor() {
    this.http = UserClient.getInstance();
  }

  async create(
    request: CreateUserRequestModel,
    abortController?: AbortController | undefined
  ): Promise<CreateUserResponseModel> {
    const { data } = await this.http.post(this.baseUrl, request, {
      signal: abortController?.signal,
    });
    return data;
  }

  async get(
    request: GetUserRequestModel,
    abortController?: AbortController | undefined
  ): Promise<GetUserResponseModel> {
    const { data } = await this.http.get(`${this.baseUrl}/${request.id}`, {
      signal: abortController?.signal,
    });
    return data;
  }

  async update(
    request: UpdateUserRequestModel,
    abortController?: AbortController | undefined
  ): Promise<UpdateUserResponseModel> {
    const { data } = await this.http.put(
      `${this.baseUrl}/${request.id}`,
      request,
      {
        signal: abortController?.signal,
      }
    );
    return data;
  }

  async delete(
    request: DeleteUserRequestModel,
    abortController?: AbortController | undefined
  ): Promise<DeleteUserResponseModel> {
    const { data } = await this.http.delete(`${this.baseUrl}/${request.id}`, {
      signal: abortController?.signal,
    });
    return data;
  }
}
