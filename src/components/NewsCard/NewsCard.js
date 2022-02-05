import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import styles from "./NewsCard.style"

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.3}>

            <Image style={styles.image} source= {{uri: news.imageUrl}} />
            <View style = {styles.inner_container}>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style = {styles.author}>{news.author}</Text>
            </View>
            </TouchableOpacity>

        </View>
    )

}

export default NewsCard;