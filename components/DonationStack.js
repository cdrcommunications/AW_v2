import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DonationsScreen from '../screens/DonationsScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Tab = createStackNavigator();

const DonationStack = () => {

  return (
    <Tab.Navigator
        initialRouteName="Donations"
        barStyle={{elevation: 0, shadowOpacity: 0}}
        >
        <Tab.Screen 
            name="Donations" 
            component={DonationsScreen}
            options={{
                title: "",
                tabBarShowLabel: false,
                headerStyle: {
                    height: 0
                }
            }}
          />
        <Tab.Screen 
            name="Subscribe" 
            component={SubscribeScreen}
            options={{
                title: "Subscribe to Newsletter!",
                tabBarShowLabel: false,
                headerStyle: {
                    height: 100,
                    backgroundColor: '#6ACDEA',
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                    elevation: 0
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 19,
                    marginTop: 20
                }
            }}
          />
     </Tab.Navigator>
  );
};


export default DonationStack;
