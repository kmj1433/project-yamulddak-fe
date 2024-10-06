import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PostItem = ({ data }) => {
    const navigation = useNavigation();

    const getTagBackgroundColor = (tag) => {
        switch (tag) {
            case '제철 재료':
                return '#CBFFA0';
            case '마트 특가':
                return '#CBFFA0';
            default:
                return '#EEEEEE';
        }
    };
    const tagBackgroundColor = getTagBackgroundColor(data.postTag);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={() =>
                navigation.push('PostDetail')
            }
        >
            <View style={styles.innerContainer}>
                <View>
                    <View style={[styles.postTagContainer, { backgroundColor: tagBackgroundColor }]}>
                        <Text style={styles.postTag}>
                            {data.postTag}
                        </Text>
                    </View>
                    <View style={styles.postContainer}>
                        <Text style={{ fontSize: 16, fontWeight: '800' }}>
                            {data.postType}
                        </Text>
                        <Text style={{ fontSize: 16, marginTop: 5 }}>
                            {data.postTitle}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#616161', marginTop: 5 }}>
                            {data.postPeople}
                            &nbsp;&nbsp;•&nbsp;&nbsp;
                            {data.postLocation}
                        </Text>
                    </View>
                </View>

                <View style={styles.postImage}>
                    <Image
                        source={data.postImage}
                        style={{ width: '100%', height: '100%', borderRadius: 5 }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PostItem

const styles = StyleSheet.create({
    container: {
        color: '#FFFFFF',
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        height: 140,
    },
    innerContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // Post
    postTagContainer: {
        backgroundColor: '#EEEEEE',
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginLeft: -2,
    },
    postTag: {
        fontSize: 12,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    postContainer: {
        marginTop: 12,
    },
    postImage: {
        width: 100,
        height: 100,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
})