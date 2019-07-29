import React from 'react';

import globalMessages from 'containers/App/messages';
import { routes } from 'config/routes';

import appointmentActiveIcon from 'assets/images/menu-icon/appointment-active.png';
import appointmentIcon from 'assets/images/menu-icon/appointment.png';
import companyActiveIcon from 'assets/images/menu-icon/company-active.png';
import companyIcon from 'assets/images/menu-icon/company.png';
import settingActiveIcon from 'assets/images/menu-icon/setting-active.png';
import settingIcon from 'assets/images/menu-icon/setting.png';
import serviceActiveIcon from 'assets/images/menu-icon/service-active.png';
import serviceIcon from 'assets/images/menu-icon/service.png';
import staffActiveIcon from 'assets/images/menu-icon/staff-active.png';
import staffIcon from 'assets/images/menu-icon/staff.png';
import profileActiveIcon from 'assets/images/menu-icon/profile-active.png';
import profileIcon from 'assets/images/menu-icon/profile.png';

export const adminNavItems = [
  {
    path: routes.admin.index,
    icon: <img src={appointmentIcon} alt="company" />,
    activeIcon: <img src={appointmentActiveIcon} alt="company-active" />,
    label: globalMessages.dashboard,
  },
  {
    path: routes.admin.users.list,
    icon: <img src={companyIcon} alt="setting" />,
    activeIcon: <img src={companyActiveIcon} alt="setting-active" />,
    label: globalMessages.usersManagement,
  },
  {
    path: routes.admin.tourGuide.list,
    icon: <img src={settingIcon} alt="setting" />,
    activeIcon: <img src={settingActiveIcon} alt="setting-active" />,
    label: globalMessages.tourGuide,
  },
];
