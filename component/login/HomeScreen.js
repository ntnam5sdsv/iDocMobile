import { StyleSheet, Text, View, ImageBackground, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Circle, } from 'react-native-shape';
import IconItem from './IconItem';
import ActionComponent from './ActionComponent';

export default function HomeScreen() {
    const [name, setName] = useState("nguyen the nam")
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
            <ImageBackground style={styles.background} source={require('./images/background_top.jpg')} resizeMode="cover">
                <Circle color={'#fffcf7'} scale={1.2} rotate={45}/>
                <Text style={styles.textName}>{name}</Text>
                <TouchableOpacity  onPress={()=> {console.log("Press!!")}}>
                    <IconItem name={"search"} size={50} color={"#666666"}/>
                </TouchableOpacity>
               
            </ImageBackground>
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.contentItem}>
                <Text style={styles.sectionTitle}>Văn bản đến</Text>
                <View style={styles.arrangeItem}>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Xử lý chính"}/>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Phối hợp"}/>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Tra cứu tìm kiếm"}/>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Thêm"}/>
                </View>
            </View>
            <View style={styles.contentItem}>
                <Text style={styles.sectionTitle}>Văn bản đi</Text>
                <View style={styles.arrangeItem}>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Xử lý chính"}/>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Phối hợp"}/>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Tra cứu tìm kiếm"}/>
                    <ActionComponent urlIcon={"./images/icon_add.png"} contentLabel={"Thêm"}/>
                </View>
            </View>

            <View style={styles.slideBanner}>
               <Text>Banner</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fffcf7'
    },
    topContainer:{
        flex: 2,
        width: '100%',
    },
    contentContainer:{
        flex: 8,
        width: '100%',
        justifyContent:'space-around',
    },
    contentItem:{
        flex: 1,
        marginTop: '3%'
    },
    arrangeItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    slideBanner:{
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background:{
        height: '100%',
        flexDirection: 'row',
        borderBottomColor: '#777777',
        borderBottomWidth: 2,
        justifyContent:'space-around',
        alignItems: 'center'
    },
    textName:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    sectionTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'none',
        marginBottom: '3%',
        marginHorizontal: '2%'
    }

})