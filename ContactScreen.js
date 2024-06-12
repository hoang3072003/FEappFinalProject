import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native';

const ContactScreen = ({ navigation }) => {
  const [review, setReview] = useState('');

  const handleSendReview = () => {
    Alert.alert('Successfully');
    setReview(''); // Clear the review after sending
  };

  return (
    <ImageBackground source={{ uri: 'https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg' }} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/227/054/original/car-shop-logo-design-template-element-usable-for-business-and-automotive-logos-vector.jpg' }} style={styles.logo} />
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={[styles.navItem, styles.activeNavItem]}>
              <Text style={styles.navText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.companyName}>Car Shop</Text>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>Service Reviews</Text>
          <TextInput
            style={styles.reviewInput}
            placeholder="Write your review here..."
            value={review}
            onChangeText={setReview}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendReview}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.text}>Email: contact@carshop.com</Text>
          <Text style={styles.text}>Phone: +84 948887916</Text>
          <Text style={styles.text}>Address: Ha Noi City</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

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
  companyName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  reviewContainer: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginBottom: 20, // Ensure some space between the review container and the contact details
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top', // For Android
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default ContactScreen;
