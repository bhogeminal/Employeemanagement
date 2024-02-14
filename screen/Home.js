import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Employee Managament System
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
           onPress={() =>navigation.navigate("Employee") }
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={styles.secondview}
          >
            <Pressable
              style={styles.secondrow}
            >
              <View
                style={styles.newsview}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={styles.atten}
              >
                Attendance Report
              </Text>
              <View
                style={styles.right}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
                onPress={() => router.push("/(home)/summary")}
              style={styles.secondrow}
            >
              <View
                style={styles.newsview}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={styles.atten}
              >
                Summary Report
              </Text>
              <View
                style={styles.right}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
                onPress={() => router.push("/(home)/summary")}
              style={styles.secondrow}
            >
              <View
                style={styles.newsview}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={styles.atten}
              >
                All Generate Reports
              </Text>
              <View
                style={styles.right}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
                onPress={() => router.push("/(home)/summary")}
              style={styles.secondrow}
            >
             <View
                style={styles.newsview}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={styles.atten}
              >
                Overtime Employees
              </Text>
              <View
                style={styles.newsview}
              >
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={styles.rowview}
          >
            <View
              style={styles.lowerview}
            >
              <View
                style={styles.blockone}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
            </View>
            <View
              style={styles.blocktwo}
            >
              <View
                style={styles.blockone}
              >
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7 }}>Increased Workflow</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row", 
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={styles.blockthree}
            >
              <View
                style={styles.blockone}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Cost Savings</Text>
            </View>
            <View
              style={styles.blockfour}
            >
              <View
                style={styles.blockone}
              >
                <Feather name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7 }}>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainview: { padding: 12 },
  headerview: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  banner: {
    backgroundColor: "#D3CCE3",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  rowview: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,

  },
  newsview: {
    padding: 7, width: 45, height: 45, borderRadius: 7, alignItems: "center",
    justifyContent: "center", backgroundColor: "white"
  },
  atten: {
    marginLeft: 10,
    fontSize: 16, fontWeight: "600",
    flex: 1,
  },
  right: {
    
      width: 35,
      height: 35,
      borderRadius: 7,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    
  },
  secondview: {
    marginTop: 20, backgroundColor: "white", paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7
  },
  secondrow:{
    backgroundColor: "#BE93C5",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  lowerview:{
    backgroundColor: "#f79d00",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
 blockone: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  blocktwo:{
    backgroundColor: "#ABCABA",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
blockthree:  {
    backgroundColor: "#D3CCE3",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",

    justifyContent: "center",
    flex: 1,
  },
  blockfour:{
    backgroundColor: "#bdc3c7",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  }
})
