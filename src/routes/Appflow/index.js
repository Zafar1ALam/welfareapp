import {
  Home, EventsByDepartment, EventsByDates,
  ReportingByDepartment, Library, EventDetail, AddReporting,
  CreateMemberShip, ViewReporting, EditProfileScreen,

} from '../../screens';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer';
import { connect } from 'react-redux';
import Draft from '../../screens/Appflow/Draft/Index';
import EditReporting from '../../screens/Appflow/EditReporting/EditReporting';
import MonthlyReport from '../../screens/Appflow/MonthlyReport/MonthlyReport';
import MonthlyReportDetail from '../../screens/Appflow/MonthlyReportDetail/MonthlyReportDetail';
import MonthlyReportEdit from '../../screens/Appflow/MonthlyReportEdit/MonthlyReportEdit';
import DraftReportDetail from '../../screens/Appflow/draftreportdetail/DraftReportDetail';
import ReportDetail from '../../screens/Appflow/reportdetail/ReportDetail';
import AddMonthlyReport from '../../screens/Appflow/AddMonthlyReport/AddMonthlyReport';
import DraftReportEdit from '../../screens/Appflow/draftreportedit/DraftReportEdit';
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyDrawer = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen
        name={'Events By Department'}
        component={EventsByDepartment}
        options={{ swipeEnabled: false }}
      />
      <Drawer.Screen
        name={'Events By Dates'}
        component={EventsByDates}
        options={{ swipeEnabled: false }}
      />
      <Drawer.Screen
        name={'Create Reporting'}
        component={AddReporting}
        options={{ swipeEnabled: false }}
      />
      <Drawer.Screen
        name={'Reporting By Department'}
        component={ReportingByDepartment}
        options={{ swipeEnabled: false }}
      />

      <Drawer.Screen
        name={'Rate Us'}
        component={Home}
        options={{ swipeEnabled: false }}
      />
      <Drawer.Screen
        name={'Logout'}
        component={Home}
        options={{ swipeEnabled: false }}
      />
    </Drawer.Navigator>
  );
};


const App = () => {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'MyDrawer'}>
      <AppStack.Screen name={'MyDrawer'} component={MyDrawer} />

      <AppStack.Screen name={'Home'} component={Home} />
      <AppStack.Screen name={'Edit Profile'} component={EditProfileScreen} />
      <AppStack.Screen
        name={'EventsByDepartment'}
        component={EventsByDepartment}
      />
      <AppStack.Screen name={'EventsByDates'} component={EventsByDates} />
      <AppStack.Screen
        name={'ReportingByDepartment'}
        component={ReportingByDepartment}
      />
      <AppStack.Screen name={'Library'} component={Library} />
      <AppStack.Screen name={'Draft'} component={Draft} />
      <AppStack.Screen name={'DraftReportDetail'} component={DraftReportDetail} />
      <AppStack.Screen name={'DraftReportEdit'} component={DraftReportEdit} />
      <AppStack.Screen name={'MonthlyReport'} component={MonthlyReport} />
      <AppStack.Screen name={'MonthlyReportDetail'} component={MonthlyReportDetail} />
      <AppStack.Screen name={'MonthlyReportEdit'} component={MonthlyReportEdit} />
      <AppStack.Screen name={'AddMonthlyReport'} component={AddMonthlyReport} />
      <AppStack.Screen name={'EventDetail'} component={EventDetail} />
      <AppStack.Screen name={'AddReporting'} component={AddReporting} />
      <AppStack.Screen name={'CreateMemberShip'} component={CreateMemberShip} />
      <AppStack.Screen name={'ViewReporting'} component={ViewReporting} />
      <AppStack.Screen name={'EditReporting'} component={EditReporting} />
      <AppStack.Screen name={'ReportDetail'} component={ReportDetail} />

    </AppStack.Navigator>
  );
};

export default App
// export default connect(null, mapDispatchToProps)(App)
