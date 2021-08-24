# Graphs layout

Playground to draw Akeero diagrams using different layouts from [cytoscape](https://js.cytoscape.org/#introduction)
and [graphviz](https://www.graphviz.org)

## How to use cytoscape

1. Export diagram as JSON from Akeero
2. Go to https://aleksandrsl.github.io/graphs-layout/
3. Load diagram via `Choose file` input in the left upper corner
4. Click on desired layout. It takes time for some layouts to work. e.g. cola. Don't press too many times, it will only
   be slower, layout will run as many times as you've pressed
5. Some description of applied algo and a link to library/docs are placed under the buttons in the toolbar

It's make transparent intentionally, not to hide part of diagram. It becomes fully visible when you hover it.

## How to use Graphviz (Assuming you know how to use python)

1. Go to graphviz folder
2. Setup python venv to install graphviz library listed in `requirements.txt`
3. Run `python main.py -o /any/directory/you/want your_diargam_from_akeero.json`
4. Diagrams will be created inside directory, specified in the `-o` argument
