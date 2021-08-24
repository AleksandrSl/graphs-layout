import argparse
import sys
from os.path import basename, splitext

import graphviz
import json


def add_node(graph, node):
    graph.node(node['id'], node['title'], shape='box', width="1.5", height="0.4", fixedsize='true')


def json_to_dot(graph):
    dot = graphviz.Digraph(comment=graph['projectName'])
    clusters = {}
    for node in graph['nodes']:
        if not node['parentGroup']:
            add_node(dot, node)

    for group in graph['groups']:
        clusters[group["id"]] = graphviz.Digraph(name=f'cluster_{group["id"]}', comment=group["title"])
        for node in filter(lambda x: x['parentGroup'] == group['id'], graph['nodes']):
            add_node(clusters[group["id"]], node)

    groups = list(graph['groups'])
    while len(groups):
        leaves = []
        for group in groups:
            for g in groups:
                if g['parentGroup'] == group['id']:
                    break
            else:
                leaves.append(group)
        for leaf in leaves:
            if leaf['parentGroup']:
                clusters[leaf['parentGroup']].subgraph(clusters[leaf['id']])
            else:
                dot.subgraph(clusters[leaf["id"]])
            groups.remove(leaf)

    for connection in graph['connections']:
        dot.edge(connection['from'], connection['to'])

    return dot


def parse_args(args: str):
    parser = argparse.ArgumentParser()
    parser.add_argument('-o', '--outdir', help='Directory to save created graphs')
    parser.add_argument('input', help='JSON with graph')
    return vars(parser.parse_args(args))


if __name__ == '__main__':
    args = parse_args(sys.argv[1:])
    name = splitext(basename(args['input']))[0]
    with open(args['input'], 'r') as in_f:
        json_graph = json.load(in_f)
        dot = json_to_dot(json_graph)
        for engine in [
            'dot',
            'neato',
            # 'twopi', Doesn't give a fuck about groups
            # 'circo', Nice circular graph, but doesn't give a fuck about groups
            'fdp',
            'osage',
            # 'patchwork', Very weird maybe it needs proper configuration
            # 'sfdp', Doesn't give a fuck about groups
        ]:
            dot.engine = engine
            if engine != 'dot':
                dot.graph_attr['overlap'] = 'false'
            dot.render(f'{args["outdir"]}/{name}.{engine}.gv')
