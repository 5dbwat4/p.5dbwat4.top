(self.webpackChunk=self.webpackChunk||[]).push([[2334],{2334:t=>{t.exports=function(t,e){if(!e.isSupported)throw new Error("Sorry your browser not support wordCloud");t.registerLayout((function(a,n){a.eachSeriesByType("wordCloud",(function(o){var i=t.helper.getLayoutRect(o.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()}),r=o.get("keepAspect"),d=o.get("maskImage"),g=d?d.width/d.height:1;r&&function(t,e){var a=t.width,n=t.height;a>n*e?(t.x+=(a-n*e)/2,t.width=n*e):(t.y+=(n-a/e)/2,t.height=a/e)}(i,g);var h=o.getData(),l=document.createElement("canvas");l.width=i.width,l.height=i.height;var s=l.getContext("2d");if(d)try{s.drawImage(d,0,0,l.width,l.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),n=e.createImageData(a),o=0,i=0,r=0;r<a.data.length;r+=4)a.data[r+3]>128&&(o+=g=a.data[r]+a.data[r+1]+a.data[r+2],++i);var d=o/i;for(r=0;r<a.data.length;r+=4){var g=a.data[r]+a.data[r+1]+a.data[r+2];a.data[r+3]<128||g>d?(n.data[r]=0,n.data[r+1]=0,n.data[r+2]=0,n.data[r+3]=0):(n.data[r]=255,n.data[r+1]=255,n.data[r+2]=255,n.data[r+3]=255)}e.putImageData(n,0,0)}(l)}catch(t){console.error("Invalid mask image"),console.error(t.toString())}var u=o.get("sizeRange"),c=o.get("rotationRange"),f=h.getDataExtent("value"),w=Math.PI/180,y=o.get("gridSize");function m(t){var e=t.detail.item;t.detail.drawn&&o.layoutInstance.ondraw&&(t.detail.drawn.gx+=i.x/y,t.detail.drawn.gy+=i.y/y,o.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}e(l,{list:h.mapArray("value",(function(e,a){var n=h.getItemModel(a);return[h.getName(a),n.get("textStyle.fontSize",!0)||t.number.linearMap(e,f,u),a]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:o.get("textStyle.fontFamily")||o.get("emphasis.textStyle.fontFamily")||a.get("textStyle.fontFamily"),fontWeight:o.get("textStyle.fontWeight")||o.get("emphasis.textStyle.fontWeight")||a.get("textStyle.fontWeight"),gridSize:y,ellipticity:i.height/i.width,minRotation:c[0]*w,maxRotation:c[1]*w,clearCanvas:!d,rotateRatio:1,rotationStep:o.get("rotationStep")*w,drawOutOfBound:o.get("drawOutOfBound"),shrinkToFit:o.get("shrinkToFit"),layoutAnimation:o.get("layoutAnimation"),shuffle:!1,shape:o.get("shape")}),l.addEventListener("wordclouddrawn",m),o.layoutInstance&&o.layoutInstance.dispose(),o.layoutInstance={ondraw:null,dispose:function(){l.removeEventListener("wordclouddrawn",m),l.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),t.registerPreprocessor((function(e){var a=(e||{}).series;!t.util.isArray(a)&&(a=a?[a]:[]);var n=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function o(e){e&&t.util.each(n,(function(a){e.hasOwnProperty(a)&&(e["text"+t.format.capitalFirst(a)]=e[a])}))}t.util.each(a,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};o(e.normal),o(e.emphasis)}}))}))}}}]);