(this.webpackJsonppandora=this.webpackJsonppandora||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},23:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(9),o=n.n(i),r=(n(21),n(3)),l=n(4),c=n(6),u=n(5),h=n(1),d=n(7),m=n(12),b=n.n(m),f=(n(23),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={busroute:"",buses:e.buses,selectedRoute:null},n.onClick=n.onClick.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"fetchBuses",value:function(){var e=this;this.state.buses.length||fetch("http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus").then((function(e){return e.json()})).then((function(t){return e.props.formatBuses(t)}))}},{key:"onClick",value:function(e){e.preventDefault(),this.props.selectRoute(e.target.outerText),this.state.selectedRoute&&this.state.selectedRoute.classList.remove("selectedRoute"),e.target.classList.add("selectedRoute"),this.setState({selectedRoute:e.target})}},{key:"render",value:function(){var e=this,t=[];return this.props.buses.length?t=b.a.sortBy(b.a.uniqBy(this.props.buses,"route"),(function(e){return parseInt(e.route,10)})):this.fetchBuses(),a.a.createElement("div",{className:"listView"},a.a.createElement("h3",{className:"listHeader"},"Select Route"),a.a.createElement("div",{className:"scrollView"},a.a.createElement("ul",{value:"all",onClick:this.onClick,className:"busRoute",tabindex:"1"},"All"),t.map((function(t){return a.a.createElement("ul",{key:t.route.toString(),onClick:e.onClick,className:"busRoute",tabindex:"1"},String(t.route))}))))}}]),t}(a.a.Component)),p=n(10),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onMarkerClick=function(e,t,s){n.setState({selectedBus:e,activeMarker:t,showingInfoWindow:!0})},n.onMapClicked=function(){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n.state={selectedBus:null,activeMarker:null,showingInfoWindow:!1},n.onMarkerClick=n.onMarkerClick.bind(Object(h.a)(n)),n.onMapClicked=n.onMapClicked.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"busInfoString",value:function(e){return"Bus number "+e.busNumber+" is currently at or approaching "+e.timepoint}},{key:"render",value:function(){var e=this;return a.a.createElement(p.Map,{google:this.props.google,zoom:10,style:{height:"100vh"},initialCenter:{lat:33.749,lng:-84.388},onClick:this.onMapClicked},this.props.buses.map((function(t){return a.a.createElement(p.Marker,{position:{lat:t.lat,lng:t.lon},name:e.busInfoString(t),onClick:e.onMarkerClick})})),a.a.createElement(p.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},a.a.createElement("div",null,a.a.createElement("h4",null,this.state.selectedBus?this.state.selectedBus.name:""))))}}]),t}(a.a.Component),v=Object(p.GoogleApiWrapper)({apiKey:"AIzaSyB_Z9lTIAzbW2VBkebVJWWjGgTvJZLQk8o"})(k),B=(n(38),n(15)),g=n.n(B),E={width:"400px",height:"400px"},O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={allBuses:[],selectedBuses:[]},n.selectRoute=n.selectRoute.bind(Object(h.a)(n)),n.formatBuses=n.formatBuses.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"formatBuses",value:function(e){var t=e.map((function(e){return{route:e.ROUTE,lat:e.LATITUDE,lon:e.LONGITUDE,timepoint:e.TIMEPOINT,busNumber:e.VEHICLE}}));this.setState({allBuses:t,selectedBuses:t})}},{key:"selectRoute",value:function(e){if("All"===e)this.setState({selectedBuses:this.state.allBuses});else{var t=this.state.allBuses.filter((function(t){return t.route===e}));this.setState({selectedBuses:t})}}},{key:"render",value:function(){return a.a.createElement("div",{style:E},a.a.createElement(g.a,{hAlignContent:"left"},a.a.createElement(f,{selectRoute:this.selectRoute,formatBuses:this.formatBuses,buses:this.state.allBuses}),a.a.createElement("div",null,a.a.createElement(v,{buses:this.state.selectedBuses}))))}}]),t}(a.a.Component);var j=function(){return a.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.3e7b01a7.chunk.js.map