import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../pages/Home';

interface BottomNavBarProps {
  navigation: any
}

const BottomNavBar: React.FunctionComponent<BottomNavBarProps> = (props) => {
  const HomeRoute = () => <Home navigation={props.navigation} />

  const PhoneRoute = () => <Text>Phone</Text>;

  const PersonalRoute = () => <Text>Personal</Text>;

  const CloseRoute = () => <Text>Close</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'personal', title: 'Personal', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'phone', title: 'Phone', focusedIcon: 'phone', unfocusedIcon: 'phone-outline' },
    { key: 'close', title: 'Close', focusedIcon: 'close', unfocusedIcon: 'close' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    phone: PhoneRoute,
    personal: PersonalRoute,
    close: CloseRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavBar;