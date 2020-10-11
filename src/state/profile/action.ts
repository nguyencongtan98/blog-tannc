import { ProfileInfo } from "../../@types/types";
import { UPDATE_PROFILE } from "./constants";

export type ActionUpdateProfile = {
  type: string;
  payload: ProfileInfo;
};

export const updateProfile = (profile: ProfileInfo): ActionUpdateProfile => ({
  type: UPDATE_PROFILE,
  payload: profile,
});
