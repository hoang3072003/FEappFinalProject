import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      Alert.alert('Đăng nhập thành công!');
      navigation.navigate('Home'); // Điều hướng đến trang Home
    } else {
      Alert.alert('Tài khoản hoặc mật khẩu không đúng');
    }
  };

  const handleRegister = () => {
    // Điều hướng đến trang đăng ký
    Alert.alert('Đi đến trang Đăng ký');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg' }} // Đường dẫn ảnh nền
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/227/054/original/car-shop-logo-design-template-element-usable-for-business-and-automotive-logos-vector.jpg' }} style={styles.logo} />
          <Text style={styles.title}>Đăng nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Tài khoản"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Nếu chưa có tài khoản:</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerButton}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền trắng với độ mờ để ảnh nền hiển thị
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    width: '50%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#0288D1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#333',
  },
  registerButton: {
    fontSize: 16,
    color: '#0288D1',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

