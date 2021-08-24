import{c as e,f as t,k as n,a as i,d as o}from"./vendor.ebec2970.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const a={projectName:"123",nodes:[{id:"1kbcS3961J5CoeJ",typeId:"43ja",title:"AWS Fargate",x:240,y:-144,ignoreThreats:!1,datatypeIds:[],parentGroup:"MLgPDtK8K0_z-ZU"},{id:"AGi6Y2dHN1-gc6y",typeId:"f9nj",title:"AWS Artifact",x:160,y:224,ignoreThreats:!1,datatypeIds:[],parentGroup:null},{id:"E7r9wcwszHYrp7N",typeId:"7xsa",title:"AWS AppSync",x:416,y:144,ignoreThreats:!1,datatypeIds:[],parentGroup:null},{id:"QQgsIJqCGQj1HtG",ignoreThreats:!1,parentGroup:null,title:"AWS Batch",x:-128,y:144,typeId:"3ubp",datatypeIds:[]},{id:"UzA8pjTkzdKMNm9",typeId:"7qsd",title:"Amazon DynamoDB",x:336,y:-320,ignoreThreats:!1,datatypeIds:[],parentGroup:"bQ3P9AEKfrxFM5R"},{id:"WQz6gue5ioF0WGS",typeId:"7brb",title:"Amazon FreeRTOS",x:-368,y:-64,ignoreThreats:!1,datatypeIds:[],parentGroup:"_pOP8SGUBnaoqeY"},{id:"YhwoqJ5J4W3tkEY",typeId:"5wqx",title:"Amazon Pinpoint",x:80,y:-304,ignoreThreats:!1,datatypeIds:[],parentGroup:"bQ3P9AEKfrxFM5R"},{id:"elGWX65eqg-5zZZ",typeId:"8xkz",title:"AWS IoT Button",x:240,y:-64,ignoreThreats:!1,datatypeIds:[],parentGroup:"MLgPDtK8K0_z-ZU"},{id:"hyDGLnHWxYFd5TE",typeId:"5oy5",title:"AWS AppFlow",x:432,y:-144,ignoreThreats:!1,datatypeIds:[],parentGroup:"S4TKQ8m4leN2eTs"},{id:"lD0M32uv9DmCt_s",typeId:"4ymq",title:"Amazon Elastic Container Registry",x:-320,y:-144,ignoreThreats:!1,datatypeIds:[],parentGroup:"_pOP8SGUBnaoqeY"},{id:"mY-bClcTQMcHhyx",ignoreThreats:!1,parentGroup:"pRCza1iXookcuzt",title:"AWS Elastic Beanstalk",x:-64,y:-144,typeId:"6oft",datatypeIds:[]}],groups:[{id:"_pOP8SGUBnaoqeY",parentGroup:null,title:"Public Subnet",x:-400,y:-192,width:240,height:192,collapsed:!1,typeId:"publicSubnet"},{id:"bQ3P9AEKfrxFM5R",parentGroup:null,width:720,height:384,x:-96,y:-368,typeId:"general",title:"General",collapsed:!1},{id:"pRCza1iXookcuzt",parentGroup:"bQ3P9AEKfrxFM5R",width:176,height:112,x:-80,y:-192,typeId:"privateSubnet",title:"Private Subnet",collapsed:!1},{id:"MLgPDtK8K0_z-ZU",parentGroup:"bQ3P9AEKfrxFM5R",width:400,height:240,x:208,y:-240,typeId:"stepFunction",title:"Step Function",collapsed:!1},{id:"S4TKQ8m4leN2eTs",parentGroup:"MLgPDtK8K0_z-ZU",width:176,height:128,x:416,y:-192,typeId:"vpc",title:"VPC",collapsed:!1}],connections:[{id:"0FHHcURNmruAYv7",from:"QQgsIJqCGQj1HtG",to:"mY-bClcTQMcHhyx",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"NZG-wY27kAuLoRx",from:"mY-bClcTQMcHhyx",to:"lD0M32uv9DmCt_s",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"QWrK7sz40nxNx2r",from:"QQgsIJqCGQj1HtG",to:"hyDGLnHWxYFd5TE",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"QZv1HvBRlCAQOa2",from:"1kbcS3961J5CoeJ",to:"mY-bClcTQMcHhyx",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"dNZbmBJQgEGcnnA",from:"elGWX65eqg-5zZZ",to:"WQz6gue5ioF0WGS",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"gcnmTgbtnRCbN1x",from:"E7r9wcwszHYrp7N",to:"hyDGLnHWxYFd5TE",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"gh3llEXUlk25_Ym",from:"QQgsIJqCGQj1HtG",to:"lD0M32uv9DmCt_s",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"hYUVwDV_RLopACP",from:"UzA8pjTkzdKMNm9",to:"E7r9wcwszHYrp7N",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"jmcua-wnHfHq_a7",from:"hyDGLnHWxYFd5TE",to:"elGWX65eqg-5zZZ",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"kkuS7eobgnhe2jn",from:"WQz6gue5ioF0WGS",to:"E7r9wcwszHYrp7N",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"lsVvi34Y_tbUy9z",from:"hyDGLnHWxYFd5TE",to:"1kbcS3961J5CoeJ",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"mfA6NL6azexPBhC",from:"1kbcS3961J5CoeJ",to:"QQgsIJqCGQj1HtG",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"o6uZ7oRDvQD2NBH",from:"UzA8pjTkzdKMNm9",to:"YhwoqJ5J4W3tkEY",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"sGmDZU5u3Ytnp39",from:"1kbcS3961J5CoeJ",to:"elGWX65eqg-5zZZ",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"t826wvD8zA_sN60",from:"E7r9wcwszHYrp7N",to:"elGWX65eqg-5zZZ",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]},{id:"yBD47I58f2m_zlN",from:"AGi6Y2dHN1-gc6y",to:"mY-bClcTQMcHhyx",type:"unidirectional",ignoreThreats:!1,datatypeIds:[]}]};e.use(t),e.use(n),e.use(i),e.use(o);document.querySelector("#app").innerHTML='\n<div id="buttons"></div>\n<h2 id="algorithm-name">default</h2>\n<div id=\'cy\'></div>\n';let r=e({container:document.getElementById("cy"),elements:[...a.groups.map((function(e){return{data:{id:e.id,parent:e.parentGroup,title:e.title},style:{width:e.width,height:e.height}}})),...a.nodes.map((function(e){return{data:{id:e.id,parent:e.parentGroup,title:e.title},style:{width:200,height:100}}})),...a.connections.map((function(e){return{data:{id:e.id,source:e.from,target:e.to}}}))],style:[{selector:"node",css:{content:"data(title)","text-valign":"center","text-halign":"center",shape:"round-rectangle"}},{selector:"edge",css:{"curve-style":"bezier","target-arrow-shape":"triangle"}}]});const d={bfs:{name:"breadthfirst",directed:!1,padding:30,circle:!1,grid:!0,spacingFactor:2,boundingBox:void 0,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},cose:{name:"cose",ready:function(){},avoidOverlap:!0,stop:function(){},animate:!0,animationEasing:void 0,animationDuration:void 0,animateFilter:function(e,t){return!0},animationThreshold:250,refresh:20,fit:!0,padding:30,boundingBox:void 0,nodeDimensionsIncludeLabels:!1,randomize:!1,componentSpacing:40,nodeRepulsion:function(e){return 20},nodeOverlap:4,idealEdgeLength:function(e){return 32},edgeElasticity:function(e){return 32},nestingFactor:1.2,gravity:1,numIter:1e3,initialTemp:1e3,coolingFactor:.99,minTemp:1},klay:{name:"klay",nodeDimensionsIncludeLabels:!1,fit:!0,padding:20,animate:!1,animateFilter:function(e,t){return!0},animationDuration:500,animationEasing:void 0,transform:function(e,t){return t},ready:void 0,stop:void 0,klay:{addUnnecessaryBendpoints:!1,aspectRatio:1.6,borderSpacing:20,compactComponents:!1,crossingMinimization:"LAYER_SWEEP",cycleBreaking:"GREEDY",direction:"UNDEFINED",edgeRouting:"ORTHOGONAL",edgeSpacingFactor:.5,feedbackEdges:!1,fixedAlignment:"NONE",inLayerSpacingFactor:1,layoutHierarchy:!1,linearSegmentsDeflectionDampening:.3,mergeEdges:!1,mergeHierarchyCrossingEdges:!0,nodeLayering:"NETWORK_SIMPLEX",nodePlacement:"BRANDES_KOEPF",randomizationSeed:1,routeSelfLoopInside:!1,separateConnectedComponents:!0,spacing:30,thoroughness:10},priority:function(e){return null}},fcose:{name:"fcose",quality:"proof",randomize:!0,fit:!0,padding:50,nodeDimensionsIncludeLabels:!1,uniformNodeDimensions:!1,packComponents:!0,step:"all",samplingType:!0,sampleSize:25,nodeSeparation:75,piTol:1e-7,nodeRepulsion:e=>50,idealEdgeLength:e=>50,edgeElasticity:e=>1,nestingFactor:3,numIter:2e3,tile:!1,tilingPaddingVertical:10,tilingPaddingHorizontal:10,gravity:.5,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:.3,fixedNodeConstraint:void 0,alignmentConstraint:void 0,relativePlacementConstraint:void 0,ready:()=>{},stop:()=>{}},cola:{name:"cola",animate:!1,refresh:1,maxSimulationTime:1e4,ungrabifyWhileSimulating:!0,fit:!0,padding:30,boundingBox:void 0,nodeDimensionsIncludeLabels:!1,ready:function(){},stop:function(){},randomize:!1,avoidOverlap:!0,handleDisconnected:!0,convergenceThreshold:.01,nodeSpacing:function(e){return 30},flow:void 0,alignment:void 0,gapInequalities:void 0,edgeLength:void 0,edgeSymDiffLength:void 0,edgeJaccardLength:void 0,unconstrIter:void 0,userConstIter:void 0,allConstIter:void 0},dagre:{name:"dagre",nodeSep:void 0,edgeSep:void 0,rankSep:void 0,rankDir:void 0,ranker:"tight-tree",minLen:function(e){return 1},edgeWeight:function(e){return 1},fit:!0,padding:30,spacingFactor:void 0,nodeDimensionsIncludeLabels:!1,animate:!1,animateFilter:function(e,t){return!0},animationDuration:500,animationEasing:void 0,boundingBox:void 0,transform:function(e,t){return t},ready:function(){},stop:function(){}}};r.viewport({zoom:.5});const s=document.getElementById("buttons");Object.entries(d).forEach((([e,t])=>{const n=document.createElement("button");n.innerText=e,n.addEventListener("click",(()=>{document.querySelector("#algorithm-name").textContent=e,r.layout(t).run()})),s.append(n)}));
