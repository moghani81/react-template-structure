import type { UserModel } from "./model";

export interface CreateUserRequestModel extends Omit<UserModel, "id"> {}

export interface GetUserRequestModel extends Pick<UserModel, "id"> {}

export interface UpdateUserRequestModel extends UserModel {}

export interface DeleteUserRequestModel extends Pick<UserModel, "id"> {}
