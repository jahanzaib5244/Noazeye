import React ,{useEffect} from 'react'
import { View, FlatList,Text,RefreshControl } from 'react-native'
import Share from 'react-native-share';
import {useSelector} from 'react-redux'
import Header from '../../component/Header'
import { PrivateScreenStyle } from './PrivateScreenStyle'
import { Videoes } from '../../component/Videoes'
import VideoCard from '../../component/VideoCard'
import { PrivateVideoApi } from '../../Store/actions/AuthActions';
import { useDispatch } from 'react-redux';


export default function PrivateScreen({navigation}) {

    const privateVideo = useSelector(state => state.AuthReducer.PrivateVideo)
    const [refreshing, setrefreshing] = React.useState(false)
    const dispatch = useDispatch()
    // when user click on card component share button
const sharing=async(item)=>{
    console.log(item)
    const shareOptions = {
        title: item.title,
        subject: "Noazeye Video",
        url: item.video_URL,
        social: Share.Social.EMAIL,
    };

    try {
        const shareResponse = await Share.shareSingle(shareOptions)
        console.log(shareResponse)
    } catch (error) {
        console.log(error)
    }

}
console.log(privateVideo)
  const ref = React.useRef(null).current
  const handleRefresh=()=>{
dispatch(PrivateVideoApi(setrefreshing))
  }
  useEffect(() => {
      
      return () => {
        setrefreshing(false)
      }
  }, [])

    return (
        <View style={PrivateScreenStyle.root}>

            {/* // header View */}
            <Header navigation={navigation} />

            {/* // flat list for card */}
        
                <FlatList
                ref={ref}
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={()=>(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                    <Text style={{fontSize:20,color:'gray'}}>No video found</Text>
                </View>
                )}
                    data={privateVideo}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={()=>handleRefresh()}
                        />
                      }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) =>
                    // custom card component from component folder
                        <VideoCard item={item} index={index} data={Videoes} navigation={navigation} share={()=>sharing(item)} />
                    }
                />
         
        </View>
    )
}
