(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),c=a.n(r),o=a(6),l=a.n(o),s=a(18),m=a(2),u=a(3),d=a(5),v=a(4),p=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(i.a.Component),h=a(19),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),b=(a(16),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(b,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},w=function(){return i.a.createElement("h1",null,"Youtube Videos")},S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{part:"snippet",maxResults:10,key:"AIzaSyCosmAnIVK7Ubvl-GcJQS9ECHW5h_UDbtc",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("cars")}},{key:"render",value:function(){return i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"ui center aligned grid",style:{padding:"25px",color:"#04278b"}},i.a.createElement(w,null)),i.a.createElement(p,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(g,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos}))))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.96460a31.chunk.js.map