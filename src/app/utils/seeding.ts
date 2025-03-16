/* eslint-disable no-console */
import config from '../../config';
import { USER_ROLE, USER_STATUS } from '../modules/User/user.constant';
import userModel from '../modules/User/user.model';
// import { User } from '../modules/User/user.model';

export const seed = async () => {
  try {
    const admin = await userModel.findOne({
      role: USER_ROLE.ADMIN,
      email: config.admin_email,
      status: USER_STATUS.ACTIVE,
    });
    if (!admin) {
      console.log('Seeding started...');

      await userModel.create({
        name: 'Admin',
        role: USER_ROLE.ADMIN,
        email: config.admin_email,
        // password: config.admin_password,
        // profilePhoto: config.admin_profile_photo,
        // mobileNumber: config.admin_mobile_number,
        status: USER_STATUS.ACTIVE,
      });
      console.log('Admin created successfully...');
      console.log('Seeding completed...');
    }
  } catch (error) {
    console.log('Error in seeding', error);
  }
};