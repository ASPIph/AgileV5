
(function($,Edge,compId){var _=null,y=true,n=false,zy='scaleY',e20='${_Rectangle2}',x2='4.0.0',e26='${_s-red}',c='color',e29='${_dev-red}',g='image',x4='both',e32='${_Op-white}',e36='${_dev-white}',e35='${_s-white}',bg='background-color',e31='${_Line}',zx='scaleX',qos='easeOutSine',ql='linear',x='text',x23='hidden',e28='${_Your}',t='transform',m='rect',x18='rgba(255,255,255,1.00)',e30='${_Op-red}',e33='${_eration}',i='none',qoe='easeOutExpo',x15='rgba(43,43,43,1.00)',s='style',e25='${_elopment}',p='px',o='opacity',lf='left',x16='rgba(0,0,0,0)',mw='min-width',e22='${_Stage}',x21='rgba(255,0,0,1.00)',a='Base State',e34='${_Partner}',h='height',l='normal',x3='4.0.0.359',qod='easeOutCirc',x6='55',dt='Default Timeline',e27='${_and_IT}',w='width',tp='top',x7='400',ov='overflow',xc='rgba(0,0,0,1)',e24='${_homepage4}',x19='stage',x1='\'Open Sans\'';var im='images/';var g17='homepage4.png';var s9="eration",s5="Partner",s14="Your",s8="s",s10="Op",s12="elopment",s13="Dev",s11="and IT";var fonts={};fonts[x1]='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic:latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,stf:x4,cg:x4,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Partner',t:x,r:['1062px','363px','auto','auto','auto','auto'],text:s5,align:"left",n:[x1,x6,"rgba(255,255,255,1.00)",x7,i,l]},{id:'s-red',t:x,r:['1022px','363px','auto','auto','auto','auto'],text:s8,align:"left",n:[x1,x6,"rgba(255,0,0,1)",x7,i,l]},{id:'s-white',t:x,r:['1022px','363px','auto','auto','auto','auto'],text:s8,align:"left",n:[x1,x6,"rgba(255,255,255,1.00)",x7,i,l]},{id:'eration',t:x,r:['838px','363px','auto','auto','auto','auto'],text:s9,align:"left",n:[x1,x6,"rgba(255,255,255,1)",x7,i,l]},{id:'Op-red',t:x,r:['761px','363px','auto','auto','auto','auto'],text:s10,align:"left",n:[x1,x6,"rgba(255,0,0,1.00)",x7,i,l]},{id:'Op-white',t:x,r:['761px','363px','auto','auto','auto','auto'],text:s10,align:"left",n:[x1,x6,"rgba(255,255,255,1)",x7,i,l]},{id:'and_IT',t:x,r:['589px','363px','auto','auto','auto','auto'],text:s11,align:"left",n:[x1,x6,"rgba(255,255,255,1)",x7,i,l]},{id:'elopment',t:x,r:['328px','363px','auto','auto','auto','auto'],text:s12,align:"left",n:[x1,x6,"rgba(255,255,255,1.00)",x7,i,l]},{id:'dev-red',t:x,r:['229px','363px','auto','auto','auto','auto'],text:s13,align:"left",n:[x1,x6,"rgba(255,0,0,1.00)",x7,i,l]},{id:'dev-white',t:x,r:['229px','363px','auto','auto','auto','auto'],text:s13,align:"left",n:[x1,x6,"rgba(255,255,255,1)",x7,i,l]},{id:'Your',t:x,r:['95px','363px','auto','auto','auto','auto'],text:s14,align:"left",n:[x1,x6,"rgba(255,255,255,1)",x7,i,l]},{id:'Rectangle2',t:m,r:['95px','266px','1168px','174px','auto','auto'],f:[x15],s:[0,"rgb(0, 0, 0)",i]},{id:'homepage4',t:g,r:['325px','101px','700px','330px','auto','auto'],f:[x16,im+g17,'0px','0px']},{id:'Line',t:m,r:['95px','439px','1159px','4px','auto','auto'],f:[x18],s:[0,xc,i]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:12500,a:y,l:{"start":0},tt:[]}}}};var S1=symbols[x19];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e20).P(tp,266).P(h,174).P(bg,x15,c).P(lf,95).P(w,1168);A1.A(e22).P(bg,x15,c).P(mw,320).P(ov,x23).P(h,670).P(w,1349);A1.A(e24).P(lf,325).P(tp,101);A1.A(e25).P(c,x18,c).P(lf,328).P(tp,356).T(1.5,430,2,qod).P(o,1,_,_,"").T(5.5,0,2,qos);A1.A(e26).P(o,1,_,_,"").P(lf,1022,_,_,p).T(7,718,2,qoe).P(tp,356).T(1.5,430,2,qod).T(10,354,2,qos);A1.A(e27).P(lf,589).P(tp,356).T(1.5,430,2,qod).P(o,1,_,_,"").T(5.5,0,2,qos);A1.A(e28).P(lf,95).T(7,408,2,qoe).P(tp,356).T(1.5,430,2,qod).T(10,354,2,qos);A1.A(e29).P(c,x21,c).P(o,1,_,_,"").P(lf,229,_,_,p).T(7,542,2,qoe).P(tp,356).T(1.5,430,2,qod).T(10,354,2,qos);A1.A(e30).P(c,x21,c).P(o,1,_,_,"").P(lf,761,_,_,p).T(7,641,2,qoe).P(tp,356).T(1.5,430,2,qod).T(10,354,2,qos);A1.A(e31).P(tp,439).P(bg,x18,c).P(lf,95).P(w,1159).P(zy,1,t,_,"").T(0,1).P(zx,0,t).T(0,1,1.5,qod).T(7,0.56,2,qos).T(10.75,0,1.25,ql);A1.A(e32).P(lf,761).P(tp,356).T(1.5,430,2,qod).P(o,1,_,_,"").T(3.5,0,2,qos);A1.A(e33).P(lf,838).P(tp,356).T(1.5,430,2,qod).P(o,1,_,_,"").T(5.5,0,2,qos);A1.A(e34).P(c,x18,c).P(tp,356).T(1.5,430,2,qod).T(10,354,2,qos).P(lf,1062).T(7,758,2,qoe);A1.A(e35).P(c,x18,c).P(lf,1022).P(tp,356).T(1.5,430,2,qod).P(o,1,_,_,"").T(3.5,0,2,qos);A1.A(e36).P(lf,229).P(tp,356).T(1.5,430,2,qod).P(o,1,_,_,"").T(3.5,0,2,qos);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"HomePage-Animation");