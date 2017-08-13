import React from 'react';

import SideNav from '../common/sidenav';
import style from './contact.scss';

class BaiduMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			map: {}
		};
	}

	initMap(){
		this.createMap();//创建地图
		this.setMapEvent();//设置地图事件
		this.addMapControl();//向地图添加控件
		this.addMapOverlay();//向地图添加覆盖物
	}

	createMap(){ 
	    this.setState({
	    	map: new BMap.Map("dituContent")
	    }); 
	    this.state.map.centerAndZoom(new BMap.Point(114.365111,30.48201),18);
	}

	setMapEvent(){
	    this.state.map.enableKeyboard();
	    this.state.map.enableDragging();
	    this.state.map.enableDoubleClickZoom()
	}

	addClickHandler(target,window){
	    target.addEventListener("click",function(){
	      	target.openInfoWindow(window);
	    });
	}

	addMapOverlay(){
	    var markers = [
	      {content:"逸夫楼C座-信息学院大学生科技创新中心",title:"沸点工作室",imageOffset: {width:-46,height:-21},position:{lat:30.481488,lng:114.365057}}
	    ];
	    for(var index = 0; index < markers.length; index++ ){
	      var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
	      var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
	        imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
	      })});
	      var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
	      var opts = {
	        width: 200,
	        title: markers[index].title,
	        enableMessage: false
	      };
	      var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
	      marker.setLabel(label);
	      this.addClickHandler(marker,infoWindow);
	      this.state.map.addOverlay(marker);
	    };
	}

	//向地图添加控件
    addMapControl(){
		var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
		scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
		this.state.map.addControl(scaleControl);
		var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:2});
		this.state.map.addControl(navControl);
		var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
		this.state.map.addControl(overviewControl);
    }

	conponentDidMount() {
		this.initMap();
	}

	render() {
		return (
			<div className="map" id="dituContent"></div>
		)
	}


}


class Contact extends React.Component {
	render() {
		return (
			<div id="main">
				<div id="contact">
					<h1>联系我们</h1>
					<div className="block-content">
						<div><span><img src={require('./resource/address.png')} /></span><font>地址</font><p>中国·武汉·华中农业大学</p></div>
						<div><span><img src={require('./resource/github.png')} /></span><font>Github</font><p>52FeidianStudio</p></div>
						<div><span><img src={require('./resource/qq.png')} /></span><font>qq群</font><p>222807849</p></div>
						<div><span><img src={require('./resource/wechat.png')} /></span><font>微信</font><p>FeidianStudio</p></div>
						<div><span><img src={require('./resource/email.png')} /></span><font>Email</font><p>feidianstudio2010@163.com</p></div>
					</div>
					<h2><font>Find Us</font></h2>
					<BaiduMap />
				</div>
			</div>
		)
	}
}

export default Contact;