import React from 'react';
import { View, Text, Button, StyleSheet, Alert, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CreatePostScreen = () => {
  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'You need to grant photo library permissions to use this feature.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      console.log('User canceled the picker.');
    } else {
      console.log('Selected Image:', result.assets);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.cretePostContainer}>
        <Pressable style={styles.imgWrapper} onPress={handleChoosePhoto} >
          <Image source={require("../img/camera.png")}/>
        </Pressable>
        <Text style={styles.postSubText}>Завантажте фото</Text>
        <TextInput
         style={styles.createPostInput}
         placeholder='Назва...'
         placeholderTextColor="#BDBDBD"

        />
        <View>
          <TextInput
          style={styles.createPostMapInput}
          placeholder='Місцевість...'
          placeholderTextColor="#BDBDBD"
          />
          <Image style={styles.mapIcon} source={require("../img/location.png")}/>
        </View>
        <Pressable style={styles.createPostBtn}>
          <Text style={styles.createPostBtnText}>Опубліковати</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cretePostContainer: {
    flex: 1,
    paddingHorizontal:16,
    paddingTop:32,
  },
  imgWrapper: {
    backgroundColor:"#F6F6F6",
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8"
  },
  postSubText:{
    fontSize: 16,
    fontWeight: 400,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    marginBottom: 32
  },
  createPostInput: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontSize: 16,
    fontWeight: 400,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    marginBottom: 16,
    position: "relative"
  },
  createPostMapInput: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontSize: 16,
    fontWeight: 400,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    marginBottom: 16,
    position: "relative",
    paddingLeft: 25
  },
  mapIcon :{
    position: "absolute",
    top: 12,
    left:0
  },
  createPostBtn: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 32,
    marginBottom: 100
  },
  createPostBtnText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "center"
  }
});

export default CreatePostScreen;
