import React from 'react';
import Icon from '../icon'
import {View,Text,ScrollView,TouchableOpacity} from 'react-native'
export default () => {
    const [categores,setcategores]=React.useState([
        {name:'Cats',icon:'cat',isactive:true},
        {
            name:'Dogs',icon:'dog',isactive:false
        },
        {
            name:'Parrots',icon:'parrot',isactive:false
        
        },
        {
            name:'Cows',icon:'cow',isactive:false
        
        },
        {
            name:'Rabbits',icon:'rabbit',isactive:false
        }
    ])
    return <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {  categores.map((x,i) =><View style={{ alignItems: 'center', marginTop: 20,marginRight:10 }} >
            <TouchableOpacity style={{
                backgroundColor: x.isactive==true?'#416c6e':'white', padding: 10, borderRadius: 10, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
            }}>
                <Icon name={x.icon} color={x.isactive==true?"white":"#575757"} isActive={x.isactive} isRotate={true} />
             

            </TouchableOpacity>
            <Text style={{ marginTop: 5, fontFamily: 'PM', color: '#575757' }}>{x.name}</Text>
        </View> )
        }
            </ScrollView>
    </View>
}