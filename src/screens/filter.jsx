import React from 'react';
import { View, Text, ScrollView ,TouchableOpacity} from 'react-native'
import TopBar from '../components/topbar'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TextInput, Button, Paragraph } from 'react-native-paper';
import CategoryBar from '../components/categoryBar'
import { DatePickerModal } from 'react-native-paper-dates';
import { Ionicons, } from '@expo/vector-icons';
export default () => {
    const [date, setDate] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);
    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]
    );
    return <>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBar />
       <ScrollView>
       <View style={{ width: "96%", paddingLeft: '4%', paddingTop: '4%' }}>
            <View style={{marginTop:15,alignItems:'center',flexDirection:'row'}}>
           <Ionicons name="md-options" size={20} color="#416c6e" style={{marginRight:10}} />
           <Text style={{color:'#416c6e',fontFamily:'PB',fontSize:20}}>Filter</Text>
            </View>

            <Text style={{color:'#416c6e',fontFamily:'PM',fontSize:16,marginBottom:-10}}>Category:</Text>

                <CategoryBar />
                <Text style={{color:'#416c6e',fontFamily:'PM',fontSize:16,marginTop:10}}>Name:</Text>

                <TextInput
                    label="Pet Name"
                    left={<TextInput.Icon name={() => <FontAwesome name="id-card" size={24} color="#416c6e" />} />}
                    style={{ width: '100%', height: 60, backgroundColor: 'white', fontFamily: 'PEB', color: '#416c6e', fontSize: 14 }}
                    placeholderTextColor="#416c6e"
                    theme={{ fonts: { regular: { fontFamily: 'PM' } } }}
                    mode="flat"
                />
                                <Text style={{color:'#416c6e',fontFamily:'PM',fontSize:16,marginTop:10}}>Gender:</Text>

                <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                    <Button mode="contained" labelStyle={{ fontFamily: 'PM', fontSize: 12 }} style={{ minWidth: 120, borderRadius: 0, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} >Male</Button>
                    <Button mode="contained" labelStyle={{ fontFamily: 'PM', fontSize: 12 }} style={{ backgroundColor: 'gray', minWidth: 120, borderRadius: 0, borderTopRightRadius: 8, borderBottomRightRadius: 8 }} >Female</Button>
                </View>
                <Text style={{color:'#416c6e',fontFamily:'PM',fontSize:16,marginTop:10}}>Age:</Text>

                <View style={{ alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#bebebe', width: '100%', paddingBottom: 2, height: 60, flexDirection: 'row' }}
                >
                    <TextInput mode="flat"
                        disabled={true}
                        label="Age"
                        style={{ width: '60%', height: 60, backgroundColor: 'white', fontFamily: 'PEB', color: '#416c6e', fontSize: 14 }}

                    />
                    <Button labelStyle={{ fontFamily: 'PM', fontSize: 12 }} style={{ minWidth: 120, borderRadius: 8 }} onPress={() => alert()} mode="contained">Pick</Button>
                </View>
                <Text style={{color:'#416c6e',fontFamily:'PM',fontSize:16,marginTop:10}}>Location:</Text>

                <TextInput
                    label="Location"
                    left={<TextInput.Icon name={() => <FontAwesome5 name="map-marker-alt" size={24} color="#416c6e" />} />}
                    style={{ width: '100%', height: 60, backgroundColor: 'white', fontFamily: 'PEB', color: '#416c6e', fontSize: 14 }}
                    placeholderTextColor="#416c6e"
                    theme={{ fonts: { regular: { fontFamily: 'PM' } } }}
                    mode="flat"
                />
                 
            
            </View>
            
       </ScrollView>
        </View>

    </>
}