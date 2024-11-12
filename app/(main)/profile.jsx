import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { Button } from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";

const Profile = () => {
  const router = useRouter(); // Initialize router
  const { signOut, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn]);

  // Add return statement with proper JSX structure
  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Sign Out"
          onPress={async () => {
            try {
              await signOut();
              router.push("/login");
            } catch (error) {
              console.error("Sign out error:", error);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
