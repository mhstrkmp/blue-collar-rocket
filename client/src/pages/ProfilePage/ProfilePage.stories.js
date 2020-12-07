import React from "react";
import { ProfilePage } from "./ProfilePage";

export default {
  title: "Pages/Profile",
  component: ProfilePage,
};

const Template = (args) => <ProfilePage {...args} />;
export const Profile = Template.bind({});
Profile.args = {
  title: "Profil",
};
