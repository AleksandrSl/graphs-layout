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

export function jsonToCytoscape(json: any) {
    return [
        ...json.groups.map(mapGroup),
        ...json.nodes.map(mapNode),
        ...json.connections.map(mapConnection),
    ]
}
