define("canvax/shape/BrokenLine",["canvax/display/Shape","canvax/core/Base","canvax/geom/SmoothSpline"],function(a,b,c){var d=function(a){var c=this;c.type="brokenline",c._drawTypeOnly="stroke",a=b.checkOpt(a),c._initPointList(a.context),c._context={lineType:a.context.lineType||null,smooth:a.context.smooth||!1,pointList:a.context.pointList||[]},c.originPointList=null,arguments.callee.superclass.constructor.apply(this,arguments)};return b.creatClass(d,a,{$watch:function(a,b,c){"pointList"==a&&this._initPointList(this.context,b,c)},_initPointList:function(a,b){var d=a;if(d.smooth){var e={points:d.pointList};_.isFunction(d.smoothFilter)&&(e.smoothFilter=d.smoothFilter),this._notWatch=!0;var f=c(e);b&&(f[f.length-1][0]=b[b.length-1][0]),d.pointList=f,this._notWatch=!1}this.originPointList=d.pointList},draw:function(a,b){var c=b.pointList;if(!(c.length<2))if(!b.lineType||"solid"==b.lineType||b.smooth){a.moveTo(c[0][0],c[0][1]);for(var d=1,e=c.length;e>d;d++)a.lineTo(c[d][0],c[d][1])}else if("dashed"==b.lineType||"dotted"==b.lineType){a.moveTo(c[0][0],c[0][1]);for(var d=1,e=c.length;e>d;d++){var f=c[d-1][0],g=c[d][0],h=c[d-1][1],i=c[d][1];this.dashedLineTo(a,f,h,g,i,5)}}},getRect:function(a){var a=a?a:this.context;return this.getRectFormPointList(a)}}),d});