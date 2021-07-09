import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, Dimensions } from 'react-native';
import { Paragraph, Title, Avatar } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('screen').width;

export default () => {
    const navigation = useNavigation()
    return <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>


        <View style={{ flex: .15 }}>
            <View style={{ flex: 1, backgroundColor: '#416c6e', alignItems: 'center', paddingTop: 40 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialIcons name="keyboard-backspace" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ transform: [{ rotate: '-90deg' }], width: 140, alignSelf: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: 'PM', fontSize: 20 }}>Active Chats</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#f4f4f3', alignItems: 'center', paddingTop: 40 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ transform: [{ rotate: '-90deg' }], width: 160, alignSelf: 'center' }}>
                            <Text style={{ color: '#416c6e', fontFamily: 'PM', fontSize: 20 }}>Favorite Chats</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        <View style={{ flex: 1, paddingTop: 35, paddingLeft: 10 }}>
            <View style={{ marginTop: RFValue(20) }}>

                <Title style={{ fontSize: RFValue(25), fontFamily: 'PM', color: '#565657' }}>Chat</Title>

                <ScrollView style={{ paddingBottom: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {Array.from({ length: 10 }, (x, i) => <TouchableOpacity style={{ alignItems: 'center', marginRight: 15 }}>
                        <View style={{ width: screenWidth / 30, borderRadius: screenWidth / 30, height: screenWidth / 30, left: RFPercentage(2.5), position: 'relative', top: RFPercentage(2), zIndex: 1, backgroundColor: '#ff7842' }}>
                        </View>
                        <Avatar.Image source={{ uri: 'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} size={screenWidth / 8.2} style={{ backgroundColor: '#416c6e' }} />
                        <Paragraph style={{ fontSize: RFValue(14), marginTop: RFValue(5), fontFamily: 'PM', fontSize: 14, lineHeight: RFValue(20), color: '#565657' }} >User</Paragraph>
                    </TouchableOpacity>
                    )}

                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: RFValue(0) }}>

                    <View>
                        {Array.from({ length: 10 }, (x, i) => <TouchableOpacity style={{ marginTop: RFValue(20), paddingRight: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <View style={{ width: screenWidth / 30, borderRadius: screenWidth / 30, height: screenWidth / 30, left: RFPercentage(5), position: 'relative', top: RFPercentage(2), zIndex: 1, backgroundColor: '#ff7842' }}>
                                    </View>
                                    <Avatar.Image source={{ uri: 'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} size={screenWidth / 8.2} style={{ backgroundColor: '#416c6e' }} />

                                </View>
                                <View style={{ marginLeft: RFValue(20), flex: 1 }} >

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View >
                                            <Title style={{ fontSize: 14, lineHeight: RFValue(20), color: '#565657' }}>Ahsan Ismail</Title>
                                        </View>
                                        <View>
                                            <Title style={{ fontSize: 12, lineHeight: RFValue(20), color: '#565657' }}>11:30 PM</Title>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View >
                                            <Paragraph style={{ fontSize: 12, lineHeight: RFValue(20), width: screenWidth / 2, color: '#777f85' }} ellipsizeMode="tail" numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
                                        </View>
                                        <View style={{ width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#416c6e' }}>
                                            <Paragraph style={{ fontSize: 14, lineHeight: RFValue(20), color: 'white' }}>3</Paragraph>
                                        </View>

                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>
                        )}
                    </View>

                </View>
            </ScrollView>
        </View>
    </View>
}