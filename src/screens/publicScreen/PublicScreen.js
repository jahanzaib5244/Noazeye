import React ,{useEffect} from 'react'
import { View, Text, TouchableOpacity, RefreshControl, FlatList } from 'react-native'
import Header from '../../component/Header'
import VideoCard from '../../component/VideoCard'
import Share from 'react-native-share';
import { useSelector, useDispatch } from 'react-redux'

//own components
import { Videoes } from '../../component/Videoes'
import { PublicScreenStyle } from './PublicScreenStyle'
import { PublicVideoApi } from '../../Store/actions/AuthActions'

export default function PublicScreen({ navigation }) {

    const publicVideo = useSelector(state => state.AuthReducer.PublicVideo)

    const [refreshing, setrefreshing] = React.useState(false)
    const dispatch = useDispatch()
    // when user click on card component share button
    const sharing = async (item) => {
        console.log(item)
        const options = {
            title: item.title,
            url: item.video_path,
            type: 'mp4'
        }

        try {
            const shareResponse = await Share.open(options);
            console.log(shareResponse)
        } catch (error) {
            console.log(error)
        }
    }


    const handleRefresh = () => {
        dispatch(PublicVideoApi(setrefreshing))
    }
    useEffect(() => {
      
        return () => {
          setrefreshing(false)
        }
    }, [])

    return (
        <View style={PublicScreenStyle.root}>

            {/* //custom header View from component folder */}
            <Header navigation={navigation} />

            {/* // flat list for card */}

            <FlatList
                contentContainerStyle={{ flexGrow: 1 }}
                ListEmptyComponent={() => (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ fontSize: 20, color: 'gray' }}>No video found</Text>
                </View>
                )}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (<View style={{ height: 30 }} />)}
                data={publicVideo}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => handleRefresh()}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) =>
                    // custom card component from components folder
                    <VideoCard item={item} index={index} navigation={navigation} share={() => sharing(item)} />
                }
            />


        </View>
    )
}
