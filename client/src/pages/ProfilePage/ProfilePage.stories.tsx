import React from "react";
import { ProfilePage } from "./ProfilePage";

export default {
  title: "Pages/ProfilePage",
  component: ProfilePage,
};

export const Standard = (args: any) => <ProfilePage {...args} />;
