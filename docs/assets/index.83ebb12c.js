import{c as e,f as n,k as i,a as t,d as o}from"./vendor.ebec2970.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();e.use(n),e.use(i),e.use(t),e.use(o);const r={bfs:{name:"breadthfirst",directed:!1,padding:30,circle:!1,grid:!0,spacingFactor:2,boundingBox:void 0,avoidOverlap:!0,nodeDimensionsIncludeLabels:!1},cose:{name:"cose",ready:function(){},avoidOverlap:!0,stop:function(){},animate:!0,animationEasing:void 0,animationDuration:void 0,animateFilter:function(e,n){return!0},animationThreshold:250,refresh:20,fit:!0,padding:30,boundingBox:void 0,nodeDimensionsIncludeLabels:!1,randomize:!1,componentSpacing:40,nodeRepulsion:function(e){return 20},nodeOverlap:4,idealEdgeLength:function(e){return 32},edgeElasticity:function(e){return 32},nestingFactor:1.2,gravity:1,numIter:1e3,initialTemp:1e3,coolingFactor:.99,minTemp:1},klay:{name:"klay",nodeDimensionsIncludeLabels:!1,fit:!0,padding:20,animate:!1,animateFilter:function(e,n){return!0},animationDuration:500,animationEasing:void 0,transform:function(e,n){return n},ready:void 0,stop:void 0,klay:{addUnnecessaryBendpoints:!1,aspectRatio:1.6,borderSpacing:20,compactComponents:!1,crossingMinimization:"LAYER_SWEEP",cycleBreaking:"GREEDY",direction:"UNDEFINED",edgeRouting:"ORTHOGONAL",edgeSpacingFactor:.5,feedbackEdges:!1,fixedAlignment:"NONE",inLayerSpacingFactor:1,layoutHierarchy:!1,linearSegmentsDeflectionDampening:.3,mergeEdges:!1,mergeHierarchyCrossingEdges:!0,nodeLayering:"NETWORK_SIMPLEX",nodePlacement:"BRANDES_KOEPF",randomizationSeed:1,routeSelfLoopInside:!1,separateConnectedComponents:!0,spacing:30,thoroughness:10},priority:function(e){return null}},fcose:{name:"fcose",quality:"proof",randomize:!0,fit:!0,padding:50,nodeDimensionsIncludeLabels:!1,uniformNodeDimensions:!1,packComponents:!0,step:"all",samplingType:!0,sampleSize:25,nodeSeparation:75,piTol:1e-7,nodeRepulsion:e=>50,idealEdgeLength:e=>50,edgeElasticity:e=>1,nestingFactor:3,numIter:2e3,tile:!1,tilingPaddingVertical:10,tilingPaddingHorizontal:10,gravity:.5,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:.3,fixedNodeConstraint:void 0,alignmentConstraint:void 0,relativePlacementConstraint:void 0,ready:()=>{},stop:()=>{}},cola:{name:"cola",animate:!1,refresh:1,maxSimulationTime:1e4,ungrabifyWhileSimulating:!0,fit:!0,padding:30,boundingBox:void 0,nodeDimensionsIncludeLabels:!1,ready:function(){},stop:function(){},randomize:!1,avoidOverlap:!0,handleDisconnected:!0,convergenceThreshold:.01,nodeSpacing:function(e){return 30},flow:void 0,alignment:void 0,gapInequalities:void 0,edgeLength:void 0,edgeSymDiffLength:void 0,edgeJaccardLength:void 0,unconstrIter:void 0,userConstIter:void 0,allConstIter:void 0},dagre:{name:"dagre",nodeSep:void 0,edgeSep:void 0,rankSep:void 0,rankDir:void 0,ranker:"tight-tree",minLen:function(e){return 1},edgeWeight:function(e){return 1},fit:!0,padding:30,spacingFactor:void 0,nodeDimensionsIncludeLabels:!1,animate:!1,animateFilter:function(e,n){return!0},animationDuration:500,animationEasing:void 0,boundingBox:void 0,transform:function(e,n){return n},ready:function(){},stop:function(){}}};function a(e){return{data:{id:e.id,source:e.from,target:e.to}}}function d(e){return{data:{id:e.id,parent:e.parentGroup,title:e.title},style:{width:200,height:100}}}function s(e){return{data:{id:e.id,parent:e.parentGroup,title:e.title},style:{width:e.width,height:e.height}}}document.querySelector("#app").innerHTML='\n<div class="toolbar">\n  <div id="buttons"></div>\n  <input id=\'upload-file\' type="file">\n</div>\n<h2 id="algorithm-name">default</h2>\n<div id=\'cy\'></div>\n';let c=e({container:document.getElementById("cy"),elements:[],style:[{selector:"node",css:{content:"data(title)","text-valign":"center","text-halign":"center",shape:"round-rectangle"}},{selector:"edge",css:{"curve-style":"bezier","target-arrow-shape":"triangle"}}]});function l(e){document.querySelector("#algorithm-name").textContent=e,c.layout(r[e]).run()}c.viewport({zoom:.5});const u=document.getElementById("buttons");Object.keys(r).forEach((e=>{const n=document.createElement("button");n.innerText=e,n.addEventListener("click",(()=>{l(e)})),u.append(n)}));document.querySelector("#upload-file").addEventListener("change",(e=>{const n=e.target.files[0],i=new FileReader;i.readAsText(n),i.onload=function(){const e=JSON.parse(i.result);!function(e,n){e.elements().remove(),e.add([...n.groups.map(s),...n.nodes.map(d),...n.connections.map(a)]),l("bfs")}(c,e)},i.onerror=function(){console.log(i.error)}}));