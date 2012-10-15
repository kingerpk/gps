 document.write("<script language='javascript' src='http://localhost:8080/OpenLayer/gps/test/mapArg.js'></script>");
var openlayerUtil={
  conventPoint:function(x,y,mapname){
	          var ox=mapArgs[mapname].ox;
		  var oy=mapArgs[mapname].oy;
		  var sx=mapArgs[mapname].sx;
		  var sy=mapArgs[mapname].sy;
		  var rd=mapArgs[mapname].rd;
		  var d=rd*Math.PI/180;
		  var tx=(x-ox)*Math.cos(d)+(y-oy)*Math.sin(d)+ox;
		  var ty=-(x-ox)*Math.sin(d)+(y-oy)*Math.cos(d)+oy;
		  
		  var tw=(tx-ox)*sx;
		  var th=(ty-oy)*sy;
		  tx=(ox+tw);
		  ty=(oy+th);
		  var point=new OpenLayers.Geometry.Point(tx,ty);
		  return point;
	},
   getBound:function(mapname){
   	return new OpenLayers.Bounds(mapArgs[mapname].b1,mapArgs[mapname].b2,mapArgs[mapname].b3,mapArgs[mapname].b4);
   },
   getCenter:function(mapname){
   	return new OpenLayers.LonLat(mapArgs[mapname].cx,mapArgs[mapname].cy);
   }
}