import './style.css'
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

const layouts = {
    bfs: bfsOptions,
    cose: cose,
    klay: klayOptions,
    fcose: fcoseOptions,
    cola: colaOptions,
    dagre: dagreOptions,
}

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<div class="toolbar">
  <div id="buttons"></div>
  <input id='upload-file' type="file">
</div>
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
    elements: [],
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
        },
    ],
})


function draw(cy: cytoscape.Core, data: { groups: any[], nodes: any[], connections: any[]}) {
    cy.elements().remove();
    cy.add([
        ...data.groups.map(mapGroup),
        ...data.nodes.map(mapNode),
        ...data.connections.map(mapConnection),
    ])
    setLayout('bfs')
}

function setLayout(name: keyof typeof layouts) {
    document.querySelector('#algorithm-name')!.textContent = name
    cy.layout(layouts[name]).run()
}

// @ts-ignore
cy.viewport({
    zoom: 0.5,
});

const container = document.getElementById("buttons")!
Object.keys(layouts).forEach((name) => {
    const button = document.createElement("button")
    button.innerText = name
    button.addEventListener("click", () => {
        setLayout(name as keyof typeof layouts)
    })
    container.append(button)
})

const uploadFileInput = document.querySelector('#upload-file')! as HTMLInputElement
uploadFileInput.addEventListener("change", (event) => {
    // @ts-ignore
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        const data = JSON.parse(reader.result as string)
        draw(cy, data)
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
})
