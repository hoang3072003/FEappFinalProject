import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Rating } from 'react-native-ratings';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleAddReview = () => {
    if (comment.trim() && rating > 0) {
      const newReview = {
        comment,
        rating,
        id: Math.random().toString(),
      };
      setReviews([...reviews, newReview]);
      setComment('');
      setRating(0);
      Alert.alert('Review added successfully!');
    } else {
      Alert.alert('Please enter a comment and select a rating');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewTitle}>Leave a Review</Text>
        <TextInput
          style={styles.reviewInput}
          placeholder="Write your review here..."
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <Rating
          showRating
          onFinishRating={setRating}
          style={styles.rating}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddReview}>
          <Text style={styles.buttonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviews}>
        <Text style={styles.reviewHeader}>Reviews</Text>
        {reviews.map((review) => (
          <View key={review.id} style={styles.review}>
            <Text style={styles.comment}>{review.comment}</Text>
            <Rating
              readonly
              startingValue={review.rating}
              imageSize={20}
              style={styles.reviewRating}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  reviewContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    textAlignVertical: 'top',
  },
  rating: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  reviews: {
    marginTop: 16,
  },
  reviewHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  review: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  comment: {
    fontSize: 16,
    marginBottom: 8,
  },
  reviewRating: {
    alignSelf: 'flex-start',
  },
});

export default ProductDetailScreen;
