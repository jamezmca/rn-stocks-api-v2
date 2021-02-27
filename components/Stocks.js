import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Stocks = () => {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);

  useEffect(() => {
    fetchStock();
  })

  const fetchStock = () => {
    const API_KEY = '9OLZU016V28ZXD4X';
    let StockSymbol = 'AMZN';
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_CALL)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          //console.log(data);
          for (var key in data['Time Series (5min)']) {
            setXValues(xValues => [...xValues, key]);
            setYValues(yValues => [...yValues, data['Time Series (5min)'][key]['1. open']]);
          };
          console.log(xValues);
          console.log(yValues);
        }
      );
    
  };

  let james = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,

  ];

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.graphTitle}>Bezier Line Chart</Text>
        <Text style={styles.value}>Current: $0</Text>
      </View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "welcome", "howdy"],
          datasets: [
            {
              data: [...james

              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        //yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ccc",
          backgroundGradientFrom: "hsl(140, 60%, 50%)",
          backgroundGradientTo: "hsl(220, 60%, 45%)",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "1",
            strokeWidth: "1",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 1,
          borderRadius: 16
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  graphTitle: {
    textAlign: 'center',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  }

});

export default Stocks;