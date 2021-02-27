import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stocks from '../components/Stocks';

const StocksContainer = () => {
    return (
        <View style={styles.stocksContainer}>
            <Stocks />
            <Stocks/>
        </View>
    );
};

const styles = StyleSheet.create({
    stocksContainer: {
        flex: 1,
        marginTop: 18,

    }
});

export default StocksContainer;