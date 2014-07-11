/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['\'Open Sans\'']='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic:latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Partner',
                type: 'text',
                rect: ['1062px', '363px','auto','auto','auto', 'auto'],
                text: "Partner",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 's-red',
                type: 'text',
                rect: ['1022px', '363px','auto','auto','auto', 'auto'],
                text: "s",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 's-white',
                type: 'text',
                rect: ['1022px', '363px','auto','auto','auto', 'auto'],
                text: "s",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'eration',
                type: 'text',
                rect: ['838px', '363px','auto','auto','auto', 'auto'],
                text: "eration",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Op-red',
                type: 'text',
                rect: ['761px', '363px','auto','auto','auto', 'auto'],
                text: "Op",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Op-white',
                type: 'text',
                rect: ['761px', '363px','auto','auto','auto', 'auto'],
                text: "Op",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'and_IT',
                type: 'text',
                rect: ['589px', '363px','auto','auto','auto', 'auto'],
                text: "and IT",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'elopment',
                type: 'text',
                rect: ['328px', '363px','auto','auto','auto', 'auto'],
                text: "elopment",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'dev-red',
                type: 'text',
                rect: ['229px', '363px','auto','auto','auto', 'auto'],
                text: "Dev",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'dev-white',
                type: 'text',
                rect: ['229px', '363px','auto','auto','auto', 'auto'],
                text: "Dev",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Your',
                type: 'text',
                rect: ['95px', '363px','auto','auto','auto', 'auto'],
                text: "Your",
                align: "left",
                font: ['\'Open Sans\'', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['95px', '266px','1168px','174px','auto', 'auto'],
                fill: ["rgba(43,43,43,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'homepage4',
                type: 'image',
                rect: ['325px', '101px','700px','330px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"homepage4.png",'0px','0px']
            },
            {
                id: 'Line',
                type: 'rect',
                rect: ['95px', '439px','1159px','4px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_elopment}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '328px'],
                ["style", "top", '356px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '266px'],
                ["style", "height", '174px'],
                ["color", "background-color", 'rgba(43,43,43,1.00)'],
                ["style", "left", '95px'],
                ["style", "width", '1168px']
            ],
            "${_s-red}": [
                ["style", "top", '356px'],
                ["style", "opacity", '1'],
                ["style", "left", '1022px']
            ],
            "${_Line}": [
                ["style", "top", '439px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '0'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '95px'],
                ["style", "width", '1159px']
            ],
            "${_s-white}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '1022px'],
                ["style", "top", '356px']
            ],
            "${_and_IT}": [
                ["style", "top", '356px'],
                ["style", "opacity", '1'],
                ["style", "left", '589px']
            ],
            "${_Your}": [
                ["style", "left", '95px'],
                ["style", "top", '356px']
            ],
            "${_dev-red}": [
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '229px'],
                ["style", "top", '356px']
            ],
            "${_Partner}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '1062px'],
                ["style", "top", '356px']
            ],
            "${_Op-white}": [
                ["style", "top", '356px'],
                ["style", "opacity", '1'],
                ["style", "left", '761px']
            ],
            "${_Op-red}": [
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '761px'],
                ["style", "top", '356px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(43,43,43,1.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '1349px']
            ],
            "${_eration}": [
                ["style", "top", '356px'],
                ["style", "opacity", '1'],
                ["style", "left", '838px']
            ],
            "${_dev-white}": [
                ["style", "top", '356px'],
                ["style", "opacity", '1'],
                ["style", "left", '229px']
            ],
            "${_homepage4}": [
                ["style", "left", '325px'],
                ["style", "top", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12500,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid37", tween: [ "style", "${_Partner}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid83", tween: [ "style", "${_Partner}", "top", '354px', { fromValue: '430px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid38", tween: [ "style", "${_dev-white}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid59", tween: [ "style", "${_and_IT}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeOutSine" },
                { id: "eid53", tween: [ "style", "${_s-white}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 2000, easing: "easeOutSine" },
                { id: "eid7", tween: [ "transform", "${_Line}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_eration}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid70", tween: [ "style", "${_s-red}", "left", '718px', { fromValue: '1022px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid62", tween: [ "style", "${_dev-red}", "left", '542px', { fromValue: '229px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid61", tween: [ "style", "${_Your}", "left", '408px', { fromValue: '95px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid54", tween: [ "style", "${_dev-white}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 2000, easing: "easeOutSine" },
                { id: "eid35", tween: [ "style", "${_and_IT}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid34", tween: [ "style", "${_s-red}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid84", tween: [ "style", "${_s-red}", "top", '354px', { fromValue: '430px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid60", tween: [ "style", "${_elopment}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeOutSine" },
                { id: "eid74", tween: [ "style", "${_Partner}", "left", '758px', { fromValue: '1062px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid58", tween: [ "style", "${_eration}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeOutSine" },
                { id: "eid33", tween: [ "style", "${_Op-white}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid32", tween: [ "style", "${_dev-red}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid80", tween: [ "style", "${_dev-red}", "top", '354px', { fromValue: '430px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid8", tween: [ "transform", "${_Line}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1500, easing: "easeOutCirc" },
                { id: "eid79", tween: [ "transform", "${_Line}", "scaleX", '0.56', { fromValue: '1'}], position: 7000, duration: 2000, easing: "easeOutSine" },
                { id: "eid86", tween: [ "transform", "${_Line}", "scaleX", '0', { fromValue: '0.56'}], position: 10750, duration: 1250 },
                { id: "eid66", tween: [ "style", "${_Op-red}", "left", '641px', { fromValue: '761px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid41", tween: [ "style", "${_elopment}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid40", tween: [ "style", "${_s-white}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid42", tween: [ "style", "${_Op-red}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid82", tween: [ "style", "${_Op-red}", "top", '354px', { fromValue: '430px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid52", tween: [ "style", "${_Op-white}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 2000, easing: "easeOutSine" },
                { id: "eid36", tween: [ "style", "${_Your}", "top", '430px', { fromValue: '356px'}], position: 1500, duration: 2000, easing: "easeOutCirc" },
                { id: "eid81", tween: [ "style", "${_Your}", "top", '354px', { fromValue: '430px'}], position: 10000, duration: 2000, easing: "easeOutSine" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "HomePage-Animation");
