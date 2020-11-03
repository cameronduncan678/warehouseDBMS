import React from 'react';
import * as d3 from "d3";

class GraphCard extends React.Component {


    canvasHeight = 200;
    canvasWidth = 300;

    radius = 100;

    graphData = [
        {
            total: this.props.data.usedSpaces,
            key: 'Used Spaces',
            color: '#ff7d1c'
        },
        {
            total: this.props.data.totalSpaces - this.props.data.usedSpaces,
            key: 'Remaining Spaces',
            color: '#047067'
        }
    ]

    pie = d3.pie().sort(null).value((d) => d.total);
    angles = this.pie(this.graphData);
    arcPath = d3.arc().outerRadius(this.radius).innerRadius(this.radius / 2);

    componentDidMount() {
        const svg = d3.select(`#${this.svgId}`)
            .attr('viewBox', `0,0,${this.canvasWidth},${this.canvasHeight}`);

        const graph = svg.append('g').attr('transform', `translate(${this.canvasWidth / 2}, ${this.canvasHeight / 2})`)

        graph.selectAll('path')
            .data(this.angles)
            .enter()
            .append('path')
            .attr('d', this.arcPath)
            .attr('stroke-width', 3)
            .attr('fill', d => d.data.color);
    }

    svgId = `graph${this.props.id}`;

    render() {
        return (
            <div className="wh-graphcard-graphcard">
                <div className="row">
                    <div className="col s12 m6">
                        <svg id={this.svgId}>
                        </svg>
                    </div>
                    <div className="col s12 m6">
                        <div className="wh-graphcard-graphcard-stats">
                            <div className="wh-graphcard-graphcard-loc">{this.props.data.location}</div>
                            <div className="wh-graphcard-graphcard-totals">
                                <div>Total Remaining: <span className="rem">{this.graphData[1].total}</span></div>
                                <div>Total Used: <span className="use">{this.graphData[0].total}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GraphCard;