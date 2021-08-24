import './style.css'
import {data} from "./data";
import cytoscape from "cytoscape";
import {bfsOptions} from "./layout-settings/bfs";
import {cose} from "./layout-settings/cose";
// @ts-ignore
import klay from 'cytoscape-klay';
import {klayOptions} from "./layout-settings/klay";
// @ts-ignore
import fcose from 'cytoscape-fcose';
// @ts-ignore
import cola from 'cytoscape-cola';
// @ts-ignore
import dagre from 'cytoscape-dagre';
import {fcoseOptions} from "./layout-settings/fcose";
import {colaOptions} from "./layout-settings/cola";
import {dagreOptions} from "./layout-settings/dagre";

cytoscape.use(fcose);
cytoscape.use(klay);
cytoscape.use(cola);
cytoscape.use(dagre)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<div id="buttons"></div>
<h2 id="algorithm-name">default</h2>
<div id='cy'></div>
`


function mapConnection(v: any) {
    return {
        data: { id: v.id, source: v.from, target: v.to }
    }
}

function mapNode(v: any) {
    return {
        data: { id: v.id, parent: v.parentGroup, title: v.title },
        style: { width: 200, height: 100 }
    }
}

function mapGroup(v: any) {
    return {
        data: { id: v.id, parent: v.parentGroup, title: v.title },
        style: { width: v.width, height: v.height }
    }
}


let cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
        ...data.groups.map(mapGroup),
        ...data.nodes.map(mapNode),
        ...data.connections.map(mapConnection),
    ],
    style: [
        {
            selector: 'node',
            css: {
                'content': 'data(title)',
                'text-valign': 'center',
                'text-halign': 'center',
                'shape': 'round-rectangle'
            }
        },
        {
            selector: 'edge',
            css: {
                'curve-style': "bezier",
                'target-arrow-shape': 'triangle'
            }
        }
    ]
})


const layouts = {
    bfs: bfsOptions,
    cose: cose,
    klay: klayOptions,
    fcose: fcoseOptions,
    cola: colaOptions,
    dagre: dagreOptions,
}

// @ts-ignore
cy.viewport({
    zoom: 0.5,
});

const container = document.getElementById("buttons")!
Object.entries(layouts).forEach(([name, layout]) => {
    const button = document.createElement("button")
    button.innerText = name
    button.addEventListener("click", () => {
        document.querySelector('#algorithm-name')!.textContent = name
        cy.layout(layout).run()
    })
    container.append(button)
})

