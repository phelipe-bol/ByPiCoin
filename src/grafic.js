import React from 'react';
import {View} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

const PieChart = ({value, color, radius, strokeWidth, styles}) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * value) / 100;

  return (
    <View style={styles}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
    </View>
  );
};

export default PieChart;
