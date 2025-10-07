import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "Sofas", icon: "weekend", set: "MaterialIcons" },
  { id: "2", name: "TV Unit", icon: "tv", set: "MaterialIcons" },
  { id: "3", name: "Chair", icon: "event-seat", set: "MaterialIcons" },
  { id: "4", name: "Beds", icon: "bed", set: "MaterialIcons" },
  { id: "5", name: "Table", icon: "table-restaurant", set: "MaterialIcons" },
  { id: "6", name: "Wardrobe", icon: "closet", set: "MaterialIcons" },
];

const products = [
  {
    id: "1",
    name: "Two seater sofa bed",
    price: "$180",
    rating: 3.8,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Plastic coffee chair",
    price: "$123",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Modern recliner",
    price: "$210",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Office chair",
    price: "$130",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1681418659069-eef28d44aeab?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#1E2A39" />
        </TouchableOpacity>

        <Text style={styles.brand}>
          Furni<Text style={{ color: "#FF7A00" }}>kraft</Text>
        </Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Ionicons name="search" size={22} color="#1E2A39" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cart" size={22} color="#1E2A39" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1683121730776-feef85b8299f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.bannerBackground}
        />
        <View style={styles.overlay} />
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Perfect <Text style={{ color: "#FF7A00" }}>Furniture</Text>
          </Text>
          <Text style={styles.subtitle}>For your dream home</Text>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.offerText}>UPTO 25% OFF</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollSection} showsVerticalScrollIndicator={false}>
        {/* Popular Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Categories</Text>
          <FlatList
           data={[...categories, ...categories, ...categories]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryCard}>
                {item.set === "Ionicons" ? (
                  <Ionicons name={item.icon as any} size={26} color="#1E2A39" />
                ) : (
                  <MaterialIcons name={item.icon as any} size={26} color="#1E2A39" />
                )}
                <Text style={styles.categoryText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>New Arrivals</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <View style={styles.productGrid}>
            {products.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>

                <View style={styles.priceRow}>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity>
                    <Ionicons name="add-circle" size={24} color="#FF7A00" />
                  </TouchableOpacity>
                </View>

                {/* <Text style={styles.productRating}> {item.rating}</Text> */}
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#FF7A00" />
          <Text style={[styles.navLabel, { color: "#FF7A00" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid" size={22} color="#555" />
          <Text style={styles.navLabel}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart" size={22} color="#555" />
          <Text style={styles.navLabel}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={22} color="#555" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  header: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  brand: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E2A39",
  },

  bannerContainer: {
    height: 200,
    // borderRadius: ,
    // marginHorizontal: 20,
    marginTop: 12,
    overflow: "hidden",
  },
  bannerBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    // borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  bannerContent: {
    position: "absolute",
    top: 45,
    left: 50,
    right: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#EAEAEA",
    marginVertical: 6,
  },
  offerButton: {
    backgroundColor: "#FF7A00",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  offerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },

  scrollSection: {
    flex: 1,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E2A39",
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryText: {
    marginTop: 6,
    fontSize: 13,
    color: "#333",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    color: "#FF7A00",
    fontSize: 14,
    fontWeight: "500",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "47%",
    padding: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1E2A39",
    marginTop: 6,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  productPrice: {
    fontSize: 13,
    color: "#FF7A00",
    fontWeight: "600",
  },
  productRating: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
});
