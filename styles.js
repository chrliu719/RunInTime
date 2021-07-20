import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window')
const width = win.width

export default StyleSheet.create({
    title:{
      textAlign: 'center',
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      flexDirection:'row'
    },
    playlistImage:{
      width: width/5,
      height: width/5,
      aspectRatio:1
    },
    playlist: {
      flexDirection: 'row',
      padding:'1%',
      paddingLeft:'5%',
      alignItems: 'center',
      flex:0
    },
  });