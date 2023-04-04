import type * as Domain from "./index";

export interface IUserRepository {
  create(
    request: Domain.CreateUserRequestModel,
    abortController?: AbortController
  ): Promise<Domain.CreateUserResponseModel>;

  get(
    request: Domain.GetUserRequestModel,
    abortController?: AbortController
  ): Promise<Domain.GetUserResponseModel>;

  update(
    request: Domain.UpdateUserRequestModel,
    abortController?: AbortController
  ): Promise<Domain.UpdateserResponseModel>;

  delete(
    request: Domain.DeleteUserRequestModel,
    abortController?: AbortController
  ): Promise<Domain.DeleteUserResponseModel>;
}
