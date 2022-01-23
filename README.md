##### Run project

    yarn start

##### Custom font

    https://docs.expo.dev/guides/using-custom-fonts/

    let customFonts = {
        "BalooTamma2-ExtraBold": require("../assets/font/BalooTamma2-ExtraBold.ttf"),
        "BalooTamma2-Bold": require("../assets/font/BalooTamma2-Bold.ttf"),
        "BalooTamma2-Medium": require("../assets/font/BalooTamma2-Medium.ttf"),
        "BalooTamma2-Regular": require("../assets/font/BalooTamma2-Regular.ttf"),
        "BalooTamma2-SemiBold": require("../assets/font/BalooTamma2-SemiBold.ttf"),
    };
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
    }
    componentDidMount() {
            this._loadFontsAsync();
    }

####### Xem thêm ở file LoginScreen

##### Icon

    https://icons.expo.fyi/AntDesign

###### Lỗi AsyncStorage

    react-native link @react-native-community/async-storage
