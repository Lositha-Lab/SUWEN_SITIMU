import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";

const HospitalOpenItemScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <View style={styles.rowSection}>
            <View style={styles.detailsTitleRow}>
              <Text style={styles.detailTitleTextOne}>Hospital</Text>
            </View>
            <View style={styles.detailDataRow}>
              <Text style={styles.detailDataField}>{item.name}</Text>
            </View>
          </View>

          {/* <View style={styles.rowSection}>
            <View style={styles.detailsTitleRow}>
              <Text style={styles.detailTitleTextTwo}>District</Text>
            </View>
            <View style={styles.detailDataRow}>
              <Text style={styles.detailDataField}>{item.d_name}</Text>
            </View>
          </View>

          <View style={styles.rowSection}>
            <View style={styles.detailsTitleRow}>
              <Text style={styles.detailTitleTextThree}>Divisional Secretariat</Text>
            </View>
            <View style={styles.detailDataRow}>
              <Text style={styles.detailDataField}>{item.ds_name}</Text>
            </View>
          </View>

          <View style={styles.rowSection}>
            <View style={styles.detailsTitleRow}>
              <Text style={styles.detailTitleTextFour}>Grama Niladhari Division</Text>
            </View>
            <View style={styles.detailDataRow}>
              <Text style={styles.detailDataField}>{item.gn_name}</Text>
            </View>
          </View>

          <View style={styles.rowSection}>
            <View style={styles.detailsTitleRow}>
              <Text style={styles.detailTitleTextFive}>GN Division Number</Text>
            </View>
            <View style={styles.detailDataRow}>
              <Text style={styles.detailDataField}>{item.gn_number}</Text>
            </View>
          </View> */}

          <View style={[styles.detailGroup, { marginTop: 30 }]}>
            <Fontisto
              name="phone"
              size={20}
              color={"gray"}
              style={{ marginTop: 5 }}
            />
            <Text style={styles.detailText}>Contact Numbers</Text>
          </View>

          {/* <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${item.oic_mobile}`);
            }}
          >
            <View style={styles.contactGroup}>
              <Fontisto
                name="mobile-alt"
                size={25}
                color={"#1eae98"}
                style={{ marginTop: 3 }}
              />
              <Text style={styles.contactText}>
                OIC Mobile: {item.oic_mobile}
              </Text>
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={item.land_one == "-" ? styles.buttonNotDisplay : styles.buttonDisplay}
            //disabled={item.land_one == "-"}
            onPress={() => {
              Linking.openURL(`tel:${item.land_one}`);
            }}
          >
            <View style={styles.contactGroup}>
              <MaterialCommunityIcons
                name="phone-outgoing"
                size={20}
                color={"#1eae98"}
                style={{ marginTop: 4 }}
              />
              <Text style={styles.contactText}>
                Land Number 1 : {item.land_one}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={item.land_two == "-" ? styles.buttonNotDisplay : styles.buttonDisplay}
            //disabled={item.land_two == "-"}
            onPress={() => {
              Linking.openURL(`tel:${item.land_two}`);
            }}
          >
            <View style={styles.contactGroup}>
              <MaterialCommunityIcons
                name="phone-outgoing"
                size={20}
                color={"#1eae98"}
                style={{ marginTop: 4 }}
              />
              <Text style={styles.contactText}>
                Land Number 2 : {item.land_two}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={item.land_three == "-" ? styles.buttonNotDisplay : styles.buttonDisplay}
            //disabled={item.land_three == "-"}
            onPress={() => {
              Linking.openURL(`tel:${item.land_three}`);
            }}
          >
            <View style={styles.contactGroup}>
              <MaterialCommunityIcons
                name="phone-outgoing"
                size={20}
                color={"#1eae98"}
                style={{ marginTop: 4 }}
              />
              <Text style={styles.contactText}>
                Land Number 3 : {item.land_three}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={item.land_four == "-" ? styles.buttonNotDisplay : styles.buttonDisplay}
            //disabled={item.land_four == "-"}
            onPress={() => {
              Linking.openURL(`tel:${item.land_four}`);
            }}
          >
            <View style={styles.contactGroup}>
              <MaterialCommunityIcons
                name="phone-outgoing"
                size={20}
                color={"#1eae98"}
                style={{ marginTop: 4 }}
              />
              <Text style={styles.contactText}>
                Land Number 4 : {item.land_four}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },
  rowSection: {
    marginBottom: 35,
  },
  detailsTitleRow: {
    justifyContent: "center",
    alignItems: "center",
  },
  detailDataRow: {
    justifyContent: "center",
    alignItems: "center",
  },
  detailDataField: {
    color: "#87a7b3",
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailTitleTextOne: {
    color: "#007580",
    fontWeight: "bold",
    fontSize: 35,
  },
  detailTitleTextTwo: {
    color: "#de8971",
    fontWeight: "bold",
    fontSize: 35,
  },
  detailTitleTextThree: {
    color: "#344fa1",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  detailTitleTextFour: {
    color: "#007580",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  detailTitleTextFive: {
    color: "#de8971",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  detailGroup: {
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom: 15,
  },
  detailText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    paddingLeft: 10,
  },
  contactGroup: {
    flexDirection: "row",
    marginBottom: 15,
    borderWidth: 0,
    padding: 15,
    backgroundColor: "#afb9c8",
    borderRadius: 10,
  },
  contactText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 20,
  },
  buttonDisplay: {
    display: "flex",
  },
  buttonNotDisplay: {
    display: "none",
  },
});

export default HospitalOpenItemScreen;