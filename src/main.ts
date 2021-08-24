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
import {jsonToCytoscape} from "./json-to-cytoscape";

cytoscape.use(fcose);
cytoscape.use(klay);
cytoscape.use(cola);
cytoscape.use(dagre)

const layouts = {
    force: {
        cose: {
            options: cose,
            description: `The cose (Compound Spring Embedder) layout uses a physics simulation to lay out graphs. It works well with noncompound graphs and it has additional logic to support compound graphs well.`,
            link: 'https://js.cytoscape.org/#layouts/cose'
        },
        fcose: {
            options: fcoseOptions,
            description: `fCoSE (pron. "f-cosay", fast Compound Spring Embedder), is a faster version of our earlier compound spring embedder algorithm named CoSE, implemented as a Cytoscape.js extension by i-Vis Lab in Bilkent University.
fCoSE layout algorithm combines the speed of spectral layout with the aesthetics of force-directed layout. fCoSE runs up to 2 times as fast as CoSE while achieving similar aesthetics.`,
            link: 'https://github.com/iVis-at-Bilkent/cytoscape.js-fcose'
        },
        cola: {
            options: colaOptions,
            description: 'The cola layout uses a force-directed physics simulation with several sophisticated constraints, written by Tim Dwyer. For more information about Cola and its parameters, refer to its documentation. It supports noncompound and compound graphs well.',
            link: 'https://github.com/cytoscape/cytoscape.js-cola'
        },
    },
    hierarchical: {
        bfs: {
            options: bfsOptions,
            description: `The breadthfirst layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph. It is best suited to trees and forests in its default top-down mode, and it is best suited to DAGs in its circle mode.`,
            link: 'https://js.cytoscape.org/#layouts/breadthfirst'
        },
        klay: {
            options: klayOptions,
            description: `KLayJS is a layer-based layout algorithm that is particularly suited for node-link diagrams with an inherent direction and ports (explicit attachment points on a node's border). It is based on the ideas originally introduced by Sugiyama et al.`,
            link: 'https://github.com/kieler/klayjs'
        },
        dagre: {
            options: dagreOptions,
            description: `Complex multipart algorithm. See articles in detailed description`,
            link: 'https://github.com/dagrejs/dagre/wiki#recommended-reading'
        },
    }
} as const

type Layouts = typeof layouts

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<div class="toolbar">
  <input id='upload-file' type="file">
  <ul>
    <li class="group">
    Force-directed
    <ul id="force" class="layouts">
    </ul>
    </li>
    <li class="group">
    Hierarchical
    <ul id="hierarchical" class="layouts">
    </ul>
    </li>
  </ul>
  <p id="description"></p>
  <a id="more" href="#" target="_blank" rel="noopener noreferrer" style="display: none">More</a>
</div>
<h2 id="algorithm-name">default</h2>
<div id='cy'></div>
`

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


function draw(cy: cytoscape.Core, data: { groups: any[], nodes: any[], connections: any[] }) {
    cy.elements().remove();
    cy.add(jsonToCytoscape(data))
    setLayout('hierarchical', 'bfs')
}

function setLayout<Group extends keyof Layouts>(group: Group, name: (keyof Layouts[Group]) & string) {
    document.querySelector('#description')!.textContent = layouts[group][name].description;
    const link = document.querySelector('#more')! as HTMLAnchorElement
    link.href = layouts[group][name].link
    link.style.display = 'inline'

    document.querySelector('#algorithm-name')!.textContent = name
    cy.layout(layouts[group][name].options).run()
}

// @ts-ignore
cy.viewport({
    zoom: 0.5,
});

Object.entries(layouts).forEach(([groupName, group]) => {
    let container = document.querySelector(`#${groupName}`)!
    Object.keys(group).forEach(name => {
        const listItem = document.createElement("li")
        const button = document.createElement("button")
        listItem.append(button)
        button.innerText = name
        button.addEventListener("click", () => {
            setLayout(groupName as keyof Layouts, name)
        })
        container.append(listItem)
    })
})

const uploadFileInput = document.querySelector('#upload-file')! as HTMLInputElement
uploadFileInput.addEventListener("change", (event) => {
    // @ts-ignore
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
        const data = JSON.parse(reader.result as string)
        draw(cy, data)
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
})
