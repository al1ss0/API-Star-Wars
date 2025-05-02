import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, Platform } from "react-native";
import { Audio } from "expo-av";

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const soundRef = useRef(null);

  useEffect(() => {
    async function playMusic() {
      if (Platform.OS === "web") {
        const audioElement = document.getElementById("theme-audio");
        if (audioElement) {
          try {
            await audioElement.play();
          } catch (err) {
            console.error("Erro ao tocar no navegador:", err);
          }
        }
        return;
      }

      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
        });

        const { sound } = await Audio.Sound.createAsync(
          require("../../assets/star-wars-theme.mp3")
        );

        soundRef.current = sound;
        await sound.playAsync();
      } catch (error) {
        console.error("Erro ao tocar a música:", error);
      }
    }

    playMusic();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    return () => {
      if (Platform.OS === "web") {
        const audioElement = document.getElementById("theme-audio");
        if (audioElement) audioElement.pause();
      } else if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const handlePress = () => {
    if (Platform.OS === "web") {
      const audioElement = document.getElementById("theme-audio");
      if (audioElement) audioElement.pause();
    } else if (soundRef.current) {
      soundRef.current.stopAsync();
    }

    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      {Platform.OS === "web" && (
        <audio id="theme-audio" src="./assets/star-wars-theme.mp3" preload="auto" />
      )}

      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        STAR WARS
      </Animated.Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Entrar no universo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 320,
    color: "#FFE81F",
    fontWeight: "bold",
    fontFamily: "monospace",
    textAlign: "center",
    letterSpacing: 10,
    marginBottom: 50,
  },
  button: {
    marginTop: 60,
    padding: 16,
    backgroundColor: "#000000",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFE81F",
  },
  buttonText: {
    fontSize: 30,
    color: "#FFD700",
    fontWeight: "bold",
  },
});
