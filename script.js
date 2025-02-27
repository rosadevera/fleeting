$(document).ready(function() {
    const networks = {
        quote1: {
            nodes: new vis.DataSet([
                { id: 1, label: 'The two of you,', hidden: false, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 2, label: 'like headphone wires', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 3, label: 'tangling,', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 4, label: 'in this', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 5, label: 'something', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 6, label: 'A happy accident.', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 7, label: 'A messy miracle.', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } }
            ]),
            edges: new vis.DataSet([
                { from: 1, to: 2, hidden: true },
                { from: 2, to: 3, hidden: true },
                { from: 3, to: 4, hidden: true },
                { from: 4, to: 5, hidden: true },
                { from: 5, to: 6, hidden: true },
                { from: 6, to: 7, hidden: true }
            ]),
            sourceText: "Open Water by Caleb Azumah Nelson (2021)",
            backgroundImage: "url('./media/front.png')"
        },
        quote2: {
            nodes: new vis.DataSet([
                { id: 1, label: 'You while away', hidden: false, color: { background: "transparent", border: "white" } },
                { id: 2, label: 'the evening', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 3, label: 'together', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 4, label: 'doing nothing really,', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 5, label: 'which is', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 6, label: 'something,', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 7, label: 'is an intimacy', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 8, label: 'in itself', hidden: true, color: { background: "transparent", border: "white" } }
            ]),
            edges: new vis.DataSet([
                { from: 1, to: 2, hidden: true, dashes: [5, 5], smooth: { type: 'discrete' } },
                { from: 2, to: 3, hidden: true, dashes: [5, 5], smooth: { type: 'discrete' } },
                { from: 3, to: 4, hidden: true },
                { from: 4, to: 5, hidden: true },
                { from: 5, to: 6, hidden: true },
                { from: 6, to: 7, hidden: true },
                { from: 7, to: 8, hidden: true }
            ]),
            sourceText: "Open Water by Caleb Azumah Nelson (2021)",
            backgroundImage: "url('./media/2scan.png')"
        },
        quote3: {
            nodes: new vis.DataSet([
                { id: 1, label: 'She gave me', hidden: false, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 2, label: 'a puzzle', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 3, label: 'in a box.', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 4, label: 'She put the pieces', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 5, label: 'together', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 6, label: 'patiently,', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 7, label: 'one', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 8, label: 'by', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 9, label: 'one', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 10, label: 'and completed', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } },
                { id: 11, label: 'the picture of me.', hidden: true, color: { background: "transparent", border: "white", highlight: { border: "white", background: "white" } } }
            ]),
            edges: new vis.DataSet([
                { from: 1, to: 2, hidden: true },
                { from: 2, to: 3, hidden: true },
                { from: 3, to: 4, hidden: true },
                { from: 4, to: 5, hidden: true },
                { from: 5, to: 6, hidden: true },
                { from: 6, to: 7, hidden: true },
                { from: 7, to: 8, hidden: true },
                { from: 8, to: 9, hidden: true },
                { from: 10, to: 11, hidden: true }
            ]),
            sourceText: "Notes of a Crocodile by Qiu Miaojin (1994)",
            backgroundImage: "url('./media/3rip1.png')"
        },
        quote4: {
            nodes: new vis.DataSet([
                { id: 1, label: 'Never let her know', hidden: false, color: { background: "transparent", border: "white" } },
                { id: 2, label: 'how much', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 3, label: 'you love her', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 4, label: 'or she will', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 5, label: 'kill you', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 6, label: 'with it.', hidden: true, color: { background: "transparent", border: "white" } }
            ]),
            edges: new vis.DataSet([
                { from: 1, to: 2, hidden: true },
                { from: 2, to: 3, hidden: true },
                { from: 3, to: 4, hidden: true },
                { from: 4, to: 5, hidden: true },
                { from: 5, to: 6, hidden: true },
            ]),
            sourceText: "Diary of an Oxygen Thief by Anonymous (2006)",
            backgroundImage: "url('./media/red.png')"
        },
        quote5: {
            nodes: new vis.DataSet([
                { id: 1, label: 'Nothing connects', hidden: false, color: { background: "transparent", border: "white" } },
                { id: 2, label: 'to the moment', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 3, label: 'like music.', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 4, label: 'I count the music', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 5, label: 'to bring me back', hidden: true, color: { background: "transparent", border: "" } },
                { id: 6, label: 'or more precisely', hidden: true, color: { background: "transparent", border: "white" } },
                { id: 7, label: 'to bring her forward.', hidden: true, color: { background: "transparent", border: "white" } }
            ]),
            edges: new vis.DataSet([
                { from: 1, to: 2, hidden: true },
                { from: 2, to: 3, hidden: true },
                { from: 3, to: 4, hidden: true },
                { from: 4, to: 5, hidden: true },
                { from: 5, to: 6, hidden: true },
                { from: 6, to: 7, hidden: true }
            ]),
            sourceText: "Love Is a Mix Tape: Life and Loss, One Song at a Time by Rob Sheffield (2007)",
            backgroundImage: "url('./media/9scan.png')"
        },
    };

    let network_div = document.getElementById("network");
    let nodes = networks.quote1.nodes;
    let edges = networks.quote1.edges;
    let network_data = { nodes: nodes, edges: edges };
    let network_options = {
        edges: {
            width: 1.5,
            selectionWidth: 0,
            hoverWidth: 0,
            color: 'white',
        },
        nodes: {
            shape: "dot",
            size: 10,
            opacity: 1,
            mass: 1,
            borderWidth: 2,
            borderWidthSelected: 2,
            color: {
                border: "white",
                background: "rgba(255,255,255,0)", 
                hover: { border: "white", background: "rgba(255,255,255,0)" },
                highlight: { border: "white", background: "white" },
            },
            font: {
                face: "'AlteHaas-regular'", 
                size: 16,  
                color: "white",
            },
            margin: 5,
        },
        physics: {
            enabled: true,
            solver: "barnesHut", 
            barnesHut: {
                gravitationalConstant: -5000,
                centralGravity: 0.5,
                springLength: 50,
                springConstant: 0.0001,
                damping: 0.2,
                avoidOverlap: 0.1,
                maxVelocity: 20
            }
        },
        stabilization: {
            enabled: true,
            iterations: 100,
            updateInterval: 50,
            onlyDynamicEdges: false,
            fit: true  
        },
        interaction: {
            hover: true,
            dragNodes: true,
            dragView: false,
            zoomView: false
        }
    };

    let network = new vis.Network(network_div, network_data, network_options);
    let currentNodeId = 1;
    let inactivityTimer;
    const inactivityDuration = 10000; 

    // Track the currently selected quote
    let currentQuoteId = 'quote1';

    // Function to update the background image
    function updateBackgroundOnHover(quoteId) {
        const selectedNetwork = networks[quoteId];
        document.querySelector('.background').style.backgroundImage = selectedNetwork.backgroundImage;
    }

    // Function to revert to the currently selected quote's background image
    function revertBackground() {
        const selectedNetwork = networks[currentQuoteId];
        document.querySelector('.background').style.backgroundImage = selectedNetwork.backgroundImage;
    }

    // Add hover event listeners for each quote
    $('#quote1').hover(
        function() { updateBackgroundOnHover('quote1'); }, // On hover
        function() { revertBackground(); } // On hover out
    );

    $('#quote2').hover(
        function() { updateBackgroundOnHover('quote2'); },
        function() { revertBackground(); }
    );

    $('#quote3').hover(
        function() { updateBackgroundOnHover('quote3'); },
        function() { revertBackground(); }
    );

    $('#quote4').hover(
        function() { updateBackgroundOnHover('quote4'); },
        function() { revertBackground(); }
    );

    $('#quote5').hover(
        function() { updateBackgroundOnHover('quote5'); },
        function() { revertBackground(); }
    );

    // Function to update the network and background image on click
    function updateNetwork(quoteId) {
        let selectedNetwork = networks[quoteId];
        nodes = selectedNetwork.nodes;
        edges = selectedNetwork.edges;
        network.setData({ nodes: nodes, edges: edges }); // Applies the edge styles
        document.querySelector('.background').style.backgroundImage = selectedNetwork.backgroundImage;
        document.getElementById('source').innerText = selectedNetwork.sourceText;
        currentNodeId = 1;
        currentQuoteId = quoteId;
        resetNetwork();
    }

    $('#quote1').on('click', function() {
        updateNetwork('quote1');
    });

    $('#quote2').on('click', function() {
        updateNetwork('quote2');
    });

    $('#quote3').on('click', function() {
        updateNetwork('quote3');
    });

    $('#quote4').on('click', function() {
        updateNetwork('quote4');
    });

    $('#quote5').on('click', function() {
        updateNetwork('quote5');
    });

    function revealNode(nodeId) {
        const node = nodes.get(nodeId);
        nodes.update({ id: nodeId, hidden: false, color: { background: "white", border: "white" } }); // Full white background
        if (nodeId > 1) {
            edges.update({ from: nodeId - 1, to: nodeId, hidden: false }); // Reveal the edge
            // Set previous node to fully white
            nodes.update({ id: nodeId - 1, color: { background: "white", border: "white" } });
        }
    }

    function resetNetwork() {
        let delay = 300; // Delay between hiding nodes
        for (let i = nodes.length; i > 1; i--) {
            setTimeout(() => {
                nodes.update({ id: i, hidden: true, color: { background: "rgba(255,255,255,0)", border: "white" } });
                edges.update({ from: i - 1, to: i, hidden: true }); // Hide the edges along with the nodes
                if (i === 2) {
                    currentNodeId = 1;

                    // Reset the first node to transparent with a white border
                    nodes.update({ id: 1, color: { background: "rgba(255,255,255,0)", border: "white" } });

                    // Ensure all edges are hidden and reset
                    edges.clear(); // Clear all edges
                    edges.add([
                        { from: 1, to: 2, hidden: true },
                        { from: 2, to: 3, hidden: true },
                        { from: 3, to: 4, hidden: true },
                        { from: 4, to: 5, hidden: true },
                        { from: 5, to: 6, hidden: true },
                        { from: 6, to: 7, hidden: true }
                    ]);

                    updateBlur();
                }
            }, (nodes.length - i) * delay);
        }
    }

    function updateBlur() {
        const visibleNodes = nodes.get({ filter: (node) => !node.hidden }).length;
        const blurValue = 15 - (visibleNodes - 1) * 2; 
        document.querySelector('.background').style.filter = `blur(${Math.max(0, blurValue)}px)`; 
    }

    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(resetNetwork, inactivityDuration);
    }

    resetInactivityTimer();

    network.on("click", function(evt) {
        if (evt.nodes.length > 0) {
            let clickedNodeId = evt.nodes[0];
            if (clickedNodeId === currentNodeId) {
                currentNodeId++;
                if (currentNodeId <= nodes.length) {
                    // Make the clicked node fully white
                    nodes.update({ id: clickedNodeId, color: { background: "white", border: "white" } });

                    // Make the next node transparent with a white stroke
                    nodes.update({ id: currentNodeId, hidden: false, color: { background: "rgba(255,255,255,0)", border: "white" } });

                    edges.update({ from: clickedNodeId, to: currentNodeId, hidden: false }); // Reveal the edge to the next node
                    
                    updateBlur();
                }
                network.fit();
            }
        }
        resetInactivityTimer(); 
    });

    network.on("hoverNode", function () {
        network_div.style.cursor = "pointer";
    });

    network.on("blurNode", function () {
        network_div.style.cursor = "default";
    });
});