(self.webpackChunk=self.webpackChunk||[]).push([[7046],{7046:e=>{e.exports=e=>{e.extendChartView({type:"wordCloud",render:function(t,i,s){var l=this.group;l.removeAll();var a=t.getData(),o=t.get("gridSize");t.layoutInstance.ondraw=function(i,s,n,r){var h=a.getItemModel(n),u=h.getModel("textStyle"),g=new e.graphic.Text({style:e.helper.createTextStyle(u),scaleX:1/r.info.mu,scaleY:1/r.info.mu,x:(r.gx+r.info.gw/2)*o,y:(r.gy+r.info.gh/2)*o,rotation:r.rot});g.setStyle({x:r.info.fillTextOffsetX,y:r.info.fillTextOffsetY+.5*s,text:i,verticalAlign:"middle",fill:a.getItemVisual(n,"style").fill,fontSize:s}),l.add(g),a.setItemGraphicEl(n,g),g.ensureState("emphasis").style=e.helper.createTextStyle(h.getModel(["emphasis","textStyle"]),{state:"emphasis"}),g.ensureState("blur").style=e.helper.createTextStyle(h.getModel(["blur","textStyle"]),{state:"blur"}),e.helper.enableHoverEmphasis(g,h.get(["emphasis","focus"]),h.get(["emphasis","blurScope"])),g.stateTransition={duration:t.get("animation")?t.get(["stateAnimation","duration"]):0,easing:t.get(["stateAnimation","easing"])},g.__highDownDispatcher=!0},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}})}}}]);