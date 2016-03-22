import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
var React = require('react-native');
var {
    AppRegistry,
    Text,

    } = React;

const glypy = glypyMapMaker({
    Home: 'e900',
    Manager: 'f0c0',
    Product: 'e902',
    Settings: 'e903'

});
var Home = require('./../components/HomeComponent');
var LobbyMgr=require('./../components/LobbyMgrComponent');
var Fund=require('./../components/FinancialComponent');
var MainScreen = React.createClass({
    _tabbarToggle(value) {
        this.refs['myTabbar'].getBarRef().show(value);
    },

    render: function () {
        return (
            <Tabbar ref="myTabbar" barColor={'#eeeeee'} initialTab={this.props.initialTab}>
                <Tab name="home">
                    <IconWithBar label=" 首页" type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <Home  navigator={this.props.navigator}/>

                    </RawContent>

                </Tab>

                <Tab name="manager">
                    <IconWithBar label="大堂管理" type={glypy.Manager} from={'FontAwesome'}/>
                    <RawContent>
                        <LobbyMgr/>
                    </RawContent>

                </Tab>

                <Tab name="stats">
                    <IconWithBar label="理财产品" type={glypy.Product} from={'icomoon'}/>
                    <RawContent>
                        <Fund navigator={this.props.navigator} mainScreen={this}/>
                    </RawContent>

                </Tab>

                <Tab name="settings">
                    <IconWithBar label="我的设置" type={glypy.Settings} from={'icomoon'}/>
                    <RawContent>
                        <Text>我的设置</Text>
                    </RawContent>

                </Tab>
            </Tabbar>
        );
    }
})
module.exports = MainScreen;