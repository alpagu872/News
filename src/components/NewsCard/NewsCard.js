import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./NewsCard.style"

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>

            <Image style={styles.image} ></Image>
            <Text style={styles.title}>{news.title , 'falan'}</Text>
            <Text style={styles.description}>   {news.description}   </Text>

        </View>
    )

}

export default NewsCard;