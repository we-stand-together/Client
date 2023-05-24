import React, { useContext } from 'react';
import {Dimensions, View, ScrollView} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import {TextInput, Title} from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';


interface ProfileProps {}

export interface FormResult {
    abuseType: string,
    score: number
}

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
    const context = useContext(GlobalContext);

    const toBarData = () => {
      const set: ChartData = {
        labels: [],
        datasets: [
          {
            data: []
          }
        ]
      };

      const sorted = context.formResults.sort((a, b) => b.score - a.score);

      for (const result of context.formResults) {
        set.labels.push(result.abuseType);
        set.datasets[0].data.push(result.score*100);
      }

      return set;
    }

  return (
    <View style={base.centeredScroll}>
      <Title>Profile, {context.placeholder}</Title>
      <ScrollView horizontal={true}>

        <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
            data={toBarData()}
            width={2000}
            height={220}
            yAxisLabel={'%'}
            // verticalLabelRotation={30}
            yAxisSuffix="%"
            chartConfig={{
              backgroundColor: '#ffb0b0',
              backgroundGradientFrom: '#f76565',
              backgroundGradientTo: '#f59090',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

            }}
        />
      </ScrollView>
    </View>
  );
};
export default Profile;