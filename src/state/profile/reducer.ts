import { ProfileInfo } from "../../@types/types";
import data from "../../data/profile.json";
import { ActionUpdateProfile } from "./action";
import { UPDATE_PROFILE } from "./constants";

const initialData: ProfileInfo = data;

export const profileReducer = (
  state: ProfileInfo = initialData,
  action: ActionUpdateProfile
) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
