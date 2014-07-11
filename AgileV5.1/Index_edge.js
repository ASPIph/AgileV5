/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['\'Segoe UI Semilight\'']='Segoe UI Semilight';
    fonts['\'Open Sans\'']='<link href=\'http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800\' rel=\'stylesheet\' type=\'text/css\'>';

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
                id: 'Your',
                type: 'text',
                rect: ['137px', '464px','auto','auto','auto', 'auto'],
                text: "Your",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Dev_red',
                type: 'text',
                rect: ['263px', '464px','auto','auto','auto', 'auto'],
                text: "Dev",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Dev_white',
                type: 'text',
                rect: ['263px', '464px','auto','auto','auto', 'auto'],
                text: "Dev",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'elopment',
                type: 'text',
                rect: ['355px', '464px','auto','auto','auto', 'auto'],
                text: "elopment",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'and_IT',
                type: 'text',
                rect: ['595px', '464px','auto','auto','auto', 'auto'],
                text: "and IT",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Op_red',
                type: 'text',
                rect: ['757px', '464px','auto','auto','auto', 'auto'],
                text: "Op",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Op_white',
                type: 'text',
                rect: ['757px', '464px','auto','auto','auto', 'auto'],
                text: "Op",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'erations',
                type: 'text',
                rect: ['831px', '464px','auto','auto','auto', 'auto'],
                text: "eration",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 's_red',
                type: 'text',
                rect: ['997px', '464px','auto','auto','auto', 'auto'],
                text: "s",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 's_white',
                type: 'text',
                rect: ['997px', '464px','auto','auto','auto', 'auto'],
                text: "s",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Partner',
                type: 'text',
                rect: ['1034px', '464px','auto','auto','auto', 'auto'],
                text: "Partner",
                align: "left",
                font: ['Open Sans', 55, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['98px', '365px','1170px','104px','auto', 'auto'],
                fill: ["rgba(43,43,43,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Line',
                type: 'rect',
                rect: ['139px', '458px','1070px','3px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'homepage4',
                type: 'image',
                rect: ['323px', '135px','51.9%','49.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"homepage4.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '365px'],
                ["style", "height", '104px'],
                ["color", "background-color", 'rgba(43,43,43,1.00)'],
                ["style", "left", '98px'],
                ["style", "width", '1170px']
            ],
            "${_Dev_white}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '232px'],
                ["style", "font-size", '55px']
            ],
            "${_erations}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["style", "opacity", '1'],
                ["style", "left", '841px'],
                ["style", "font-size", '55px']
            ],
            "${_Partner}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["style", "left", '1065px'],
                ["style", "font-size", '55px']
            ],
            "${_Op_red}": [
                ["style", "top", '375px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Open Sans'],
                ["style", "left", '764px'],
                ["style", "font-size", '55px']
            ],
            "${_elopment}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '331px'],
                ["style", "font-size", '55px']
            ],
            "${_and_IT}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["style", "opacity", '1'],
                ["style", "left", '592px'],
                ["style", "font-size", '55px']
            ],
            "${_Your}": [
                ["style", "top", '375px'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Open Sans'],
                ["style", "left", '98px'],
                ["style", "font-size", '55px']
            ],
            "${_Line}": [
                ["style", "top", '465px'],
                ["transform", "scaleY", '1.09'],
                ["style", "height", '3px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '141px'],
                ["style", "width", '1070px']
            ],
            "${_Op_white}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '764px'],
                ["style", "font-size", '55px']
            ],
            "${_homepage4}": [
                ["style", "left", '323px'],
                ["style", "top", '135px']
            ],
            "${_Text12}": [
                ["style", "top", '546px'],
                ["style", "font-family", '\'Segoe UI Semilight\''],
                ["style", "left", '134px'],
                ["style", "font-size", '42px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(43,43,43,1.00)'],
                ["style", "min-width", '319px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '670px'],
                ["style", "width", '1366px']
            ],
            "${_s_white}": [
                ["style", "top", '375px'],
                ["style", "font-family", 'Open Sans'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '1025px'],
                ["style", "font-size", '55px']
            ],
            "${_Dev_red}": [
                ["style", "top", '375px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Open Sans'],
                ["style", "left", '232px'],
                ["style", "font-size", '55px']
            ],
            "${_s_red}": [
                ["style", "top", '375px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Open Sans'],
                ["style", "left", '1025px'],
                ["style", "font-size", '55px']
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
                { id: "eid364", tween: [ "style", "${_s_red}", "left", '1025px', { fromValue: '1025px'}], position: 1500, duration: 0 },
                { id: "eid325", tween: [ "style", "${_s_red}", "left", '716px', { fromValue: '997px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid291", tween: [ "style", "${_Partner}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid349", tween: [ "style", "${_Partner}", "top", '385px', { fromValue: '451px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid363", tween: [ "style", "${_s_white}", "left", '1025px', { fromValue: '1025px'}], position: 1500, duration: 0 },
                { id: "eid315", tween: [ "style", "${_and_IT}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeOutSine" },
                { id: "eid305", tween: [ "style", "${_Dev_red}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid347", tween: [ "style", "${_Dev_red}", "top", '385px', { fromValue: '451px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid401", tween: [ "transform", "${_Line}", "scaleY", '1.09', { fromValue: '1.09'}], position: 0, duration: 0, easing: "easeOutCirc" },
                { id: "eid297", tween: [ "style", "${_erations}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid311", tween: [ "style", "${_Dev_white}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 2000, easing: "easeOutSine" },
                { id: "eid361", tween: [ "style", "${_erations}", "left", '841px', { fromValue: '841px'}], position: 1500, duration: 0 },
                { id: "eid354", tween: [ "style", "${_Your}", "left", '98px', { fromValue: '98px'}], position: 1500, duration: 0 },
                { id: "eid320", tween: [ "style", "${_Your}", "left", '406px', { fromValue: '137px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid285", tween: [ "style", "${_and_IT}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid309", tween: [ "style", "${_s_white}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 2000, easing: "easeOutSine" },
                { id: "eid303", tween: [ "style", "${_Op_white}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid287", tween: [ "style", "${_s_red}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid348", tween: [ "style", "${_s_red}", "top", '385px', { fromValue: '451px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid376", tween: [ "style", "${_Op_red}", "left", '764px', { fromValue: '764px'}], position: 1500, duration: 0 },
                { id: "eid324", tween: [ "style", "${_Op_red}", "left", '639px', { fromValue: '757px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid316", tween: [ "style", "${_elopment}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeOutSine" },
                { id: "eid362", tween: [ "style", "${_Partner}", "left", '1065px', { fromValue: '1065px'}], position: 1500, duration: 0 },
                { id: "eid326", tween: [ "style", "${_Partner}", "left", '756px', { fromValue: '1034px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid301", tween: [ "style", "${_Dev_white}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid356", tween: [ "style", "${_Dev_white}", "left", '232px', { fromValue: '232px'}], position: 1500, duration: 0 },
                { id: "eid357", tween: [ "style", "${_elopment}", "left", '331px', { fromValue: '331px'}], position: 1500, duration: 0 },
                { id: "eid374", tween: [ "style", "${_Op_white}", "left", '764px', { fromValue: '764px'}], position: 1500, duration: 0 },
                { id: "eid375", tween: [ "style", "${_Op_white}", "left", '764px', { fromValue: '764px'}], position: 3500, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Op_red}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid346", tween: [ "style", "${_Op_red}", "top", '385px', { fromValue: '451px'}], position: 10000, duration: 2000, easing: "easeOutSine" },
                { id: "eid317", tween: [ "style", "${_erations}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 2000, easing: "easeOutSine" },
                { id: "eid400", tween: [ "transform", "${_Line}", "scaleX", '1.09', { fromValue: '0'}], position: 0, duration: 1500, easing: "easeOutCirc" },
                { id: "eid328", tween: [ "transform", "${_Line}", "scaleX", '0.57999', { fromValue: '1.09'}], position: 7000, duration: 2000, easing: "easeOutSine" },
                { id: "eid352", tween: [ "transform", "${_Line}", "scaleX", '0', { fromValue: '0.57999'}], position: 10750, duration: 1250 },
                { id: "eid293", tween: [ "style", "${_s_white}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid289", tween: [ "style", "${_elopment}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid355", tween: [ "style", "${_Dev_red}", "left", '232px', { fromValue: '232px'}], position: 1500, duration: 0 },
                { id: "eid323", tween: [ "style", "${_Dev_red}", "left", '541px', { fromValue: '263px'}], position: 7000, duration: 2000, easing: "easeOutExpo" },
                { id: "eid358", tween: [ "style", "${_and_IT}", "left", '592px', { fromValue: '592px'}], position: 1500, duration: 0 },
                { id: "eid310", tween: [ "style", "${_Op_white}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 2000, easing: "easeOutSine" },
                { id: "eid299", tween: [ "style", "${_Your}", "top", '451px', { fromValue: '375px'}], position: 1500, duration: 2000, easing: "easeOutSine" },
                { id: "eid345", tween: [ "style", "${_Your}", "top", '385px', { fromValue: '451px'}], position: 10000, duration: 2000, easing: "easeOutSine" }            ]
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
})(jQuery, AdobeEdge, "homeanimation");
