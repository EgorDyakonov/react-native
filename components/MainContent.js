import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export const MainContent = ({ state, count, refresh, addList, removeList }) => {
    useEffect(() => {
        getImgs();
    }, []);

    async function getImgs() {
        let result = await axios.get(`https://picsum.photos/v2/list?page=${state.count}&limit=8`)
            .then(res => res.data);
        addList(result);
        count();
    }

    function handleRefreshing() {
        refresh(true);
        removeList();
        getImgs();
        refresh(false);
    }

    function handleLoadMore() {
        getImgs();
    }

    return (
        <View style={styles.container}>
            <FlatList
                refreshing={state.refresh}
                onRefresh={handleRefreshing}
                keyExtractor={item => (item.id).toString()}
                data={state.list}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.3}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.blockImg}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: item.download_url
                                }}
                            />
                            <View style={styles.blockText}>
                                <Text style={styles.text}>{item.author}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3a474e',
    },
    blockImg: {
        position: 'relative',
        marginVertical: 10,
    },
    img: {
        width: 370,
        height: 250,
        borderRadius: 15,
    },
    blockText: {
        position: 'absolute',
        bottom: 0,
        width: 370,
        height: 40,
        backgroundColor: 'rgba(58, 71, 78, .5)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    text: {
        position: 'absolute',
        top: 8,
        left: 20,
        color: '#fff',
        fontSize: 16
    },
});