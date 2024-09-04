import { StyleSheet, Text, View, ImageBackground, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState }from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconItem from './IconItem';
import ActionComponent from './ActionComponent';

export default function HomeScreen() {
    const [name, setName] = useState("nguyen the nam")
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
            <ImageBackground style={styles.background} source={require('./images/background_top.jpg')} resizeMode="cover">
                <View style={styles.iconWrapper}>
                    <Image  source={require("./images/avt.png")} resizeMode = 'contain' style={{width: '100%', height:'100%', borderRadius: 70/2}} />
                </View>
                <Text style={styles.textName}>{name}</Text>
                <TouchableOpacity  onPress={()=> {console.log("Press!!")}}>
                    <IconItem name={"search"} size={45} color={"#666666"}/>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.contentItem}>
                <Text style={styles.sectionTitle}>Văn bản đến</Text>
                <View style={styles.arrangeItem}>
                    <ActionComponent iconName={"bank"} contentLabel={"Xử lý chính"}/>
                    <ActionComponent iconName={"account-group"} contentLabel={"Phối hợp"}/>
                    <ActionComponent iconName={"magnify"} contentLabel={"Tra cứu tìm kiếm"}/>
                    <ActionComponent iconName={"plus"} contentLabel={"Thêm"}/>
                </View>
            </View>
            <View style={styles.contentItem}>
                <Text style={styles.sectionTitle}>Văn bản đi</Text>
                <View style={styles.arrangeItem}>
                    <ActionComponent iconName={"bank"} contentLabel={"Xử lý chính"}/>
                    <ActionComponent iconName={"account-group"} contentLabel={"Phối hợp"}/>
                    <ActionComponent iconName={"magnify"} contentLabel={"Tra cứu tìm kiếm"}/>
                    <ActionComponent iconName={"plus"} contentLabel={"Thêm"}/>
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
        flex: 2,
        marginTop: 10
    },
    arrangeItem:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginTop: 20
    },
    slideBanner:{
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#effcff',
        borderRadius: 30,
        marginHorizontal: '10%',
        marginTop: '10%',
        marginBottom: '10%'
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
        marginHorizontal: '2%'
    },
    iconWrapper:{
        width: 70,
        height: 70,
        borderRadius: 70/2,
        borderWidth: 2,
        borderColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    }

})