import React from 'react';
import BarChart from './BarChart';
import './calcStyle.css';

class Chart extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <BarChart data={[5,10,1,3,4,5,1,3,7,18]} size={[500,500]} />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import { axisBottom } from 'd3'
class BarChart extends Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 20)

        // const xScale = scaleLinear();
        // var xAxis = axisBottom(xScale).ticks(5);
        // var svg = select(node)
        //     .append('svg')
        //     .attr('width', 300)
        //     .attr('height', 150);

        // svg.append('g')
        //     .attr('class', 'x axis')
        //     .call(xAxis);
            
}
render() {
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}
export default BarChart