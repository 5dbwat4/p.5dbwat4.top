(self.webpackChunk=self.webpackChunk||[]).push([[675],{675:e=>{e.exports=()=>{!function(e,t,a){function s(e){var a,s=["./assets/saying1.jpg","./assets/saying2.jpg","./assets/saying3.jpg","./assets/saying4.jpg","./assets/saying5.jpg","./assets/saying6.jpg","./assets/saying7.jpg"],o=["强疯了","强无影","无敌了","强者","语文成绩+1","数学成绩+1","英语成绩+1","物理成绩+1","化学成绩+1","生物成绩+1"];Math.random()>.8?((a=t.createElement("img")).src=s[Math.floor(Math.random()*s.length)],a.className="scoreplusImg"):((a=t.createElement("div")).className="scoreplusTxt",a.innerText=o[Math.floor(Math.random()*o.length)]),n.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),t.body.appendChild(a)}var n=[];e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}(".scoreplusTxt{position: fixed;user-select:none;}.scoreplusImg{position: fixed;user-select:none;display:block;height:80px}"),function(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),s(e)}}(),function e(){for(var a=0;a<n.length;a++)n[a].alpha<=0?(t.body.removeChild(n[a].el),n.splice(a,1)):(n[a].y--,n[a].scale+=.004,n[a].alpha-=.013,n[a].el.style.cssText="left:"+n[a].x+"px;top:"+n[a].y+"px;opacity:"+n[a].alpha+";color:"+n[a].color+";z-index:99999");requestAnimationFrame(e)}()}(window,document)}}}]);