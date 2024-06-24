import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
            ),
            href: null,
          }}
        />
        <Tabs.Screen
          name="healthinfo"
          options={{
            title: "건강정보",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "telescope" : "telescope-outline"}
                size={30}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="selfdiagnosis"
          options={{
            title: "자가진단",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "gift" : "gift-outline"} size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="experience"
          options={{
            title: "체험단",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "cart" : "cart-outline"} size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: "커뮤니티",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "people" : "people-outline"} size={30} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "설정",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "heart-circle" : "heart-circle-outline"}
                size={30}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
