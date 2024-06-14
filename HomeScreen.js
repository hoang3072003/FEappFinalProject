import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const products = [
  { id: 1, name: 'Mercedes GLC 300 4Matic', image: 'https://mercedes-benz-hanoi.vn/wp-content/uploads/2023/06/Mercedes-glc-300-4matic-3.jpg' },
  { id: 2, name: 'Mercedes-Benz E300 AMG', image: 'https://drive.gianhangvn.com/image/2212013-2212102j29447.jpg' },
  { id: 3, name: 'Toyota Fortuner 2023', image: 'https://cdn.24h.com.vn/upload/3-2023/images/2023-07-14/Gia-xe-Toyota-Fortuner-lan-banh-thang-7-2023-giam-50-le-phi-truoc-ba-22-1689351480-571-width740height493.jpg' },
  { id: 4, name: 'Toyota Camry 2.5q 2023', image: 'https://static.wixstatic.com/media/b4dcef_e1ed38ba29d9482daae0fede7361e946~mv2.png/v1/fill/w_980,h_588,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b4dcef_e1ed38ba29d9482daae0fede7361e946~mv2.png' },
  { id: 5, name: 'Porsche 911 Carrera', image: 'https://cdn.arstechnica.net/wp-content/uploads/2020/12/2020-Porsche-911-Carrera-S-manual-2.jpg' },
  { id: 6, name: 'Porsche Panamera', image: 'https://i-vnexpress.vnecdn.net/2020/08/27/2021-Porsche-Panamera-VNE-1-34-8533-2408-1598496416.jpeg' },
  { id: 7, name: 'Hyundai Santa Fe 2023', image: 'https://file.hstatic.net/200000721757/file/otovui_santafe___2__597d637b63a24a8f9f8121aff8ca7c59_2048x2048.jpg' },
  { id: 8, name: 'Hyundai Accent 1.4 AT', image: 'https://i2-vnexpress.vnecdn.net/2021/09/17/avatarjpg-1631841781.jpg?w=700&h=420&q=100&dpr=1&fit=crop&s=1MdnoIUJ6GFkEUfetEfphg' },
  { id: 9, name: 'Mazda CX-5', image: 'https://drive.gianhangvn.com/image/new-mazda-cx-5-premium-2453101j28905.jpg' },
  { id: 10, name: 'Mazda 3', image: 'https://i1-vnexpress.vnecdn.net/2021/09/18/Mazda32020VnE993047211573621051jpg-1631963909.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=Ksi2dIeIocGk9Pke5aGnRQ' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: 'https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg' }} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/227/054/original/car-shop-logo-design-template-element-usable-for-business-and-automotive-logos-vector.jpg' }} style={styles.logo} />
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.navItem, styles.activeNavItem]}>
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.navItem}>
              <Text style={styles.navText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.product} onPress={() => navigation.navigate('ProductDetail', { product })}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70, // Chiều cao của header bằng chiều cao của logo
    backgroundColor: '#4CAF50', // Background color of the header
    paddingHorizontal: 8,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  activeNavItem: {
    backgroundColor: 'red',
  },
  navText: {
    fontSize: 18,
    color: '#fff',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
