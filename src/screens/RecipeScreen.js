import * as React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function RecipeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={[
          {
            id: 1,
            title: "View in AR",
            color: "#FF4500",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/echoar.png",
            //link: WebBrowser.openBrowserAsync("https://go.echoar.xyz/wA9W"),
          },
          {
            id: 2,
            title: "Anatomy",
            color: "#87CEEB",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/heart.png",
          },
          {
            id: 3,
            title: "Meet the Bears",
            color: "#4682B4",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/bear.png",
          },
          {
            id: 4,
            title: "Visit the Website",
            color: "#6A5ACD",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/web.png",
          },
        ]}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => {
                WebBrowser.openBrowserAsync("https://go.echoar.xyz/wA9W");
              }}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardFooter}></View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    backgroundColor: "lightblue",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
  },
  list: {
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: "48%",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
