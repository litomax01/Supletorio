import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const products = [
  { id: '1', title: 'Mouse', price: 50 },
  { id: '2', title: 'Laptop', price: 1500 },
  { id: '3', title: 'Teclado', price: 80 },
  { id: '4', title: 'Monitor', price: 120 },
];

type ItemProps = { title: string; price: number };

const Item = ({ title, price }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}: ${price}</Text>
  </View>
);

export default function ProductsScreen() {
  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => <Item title={item.title} price={item.price} />}
          keyExtractor={item => item.id}
        />
        <Text style={styles.total}>Total a pagar: ${totalPrice}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    padding: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
