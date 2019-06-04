import React from 'react';
import Excel, { Workbook } from 'exceljs';
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "5a3cb19b695d558f";

class TestSunburst extends React.Component {
    chartRef = React.createRef();
    componentDidMount() {
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile("mnt/c/Users/aiuhjc9/Documents/testbook.xlsx");
        const book = [];
        workbook.eachSheet( sheet => {
            const sheet = [];
            worksheet.eachRow(row => {
                sheet.push(row.values);
            });
        book.push(sheet);
        });
        const json = JSON.stringify(book);
        console.log(json);
        const runtime = new Runtime();
        runtime.module(notebook, name => {
            if (name === "chart") {
                return new Inspector(this.chartRef.current);
            }
        });
    }

    render () {
        return (
            <div className="App">
                <div ref={this.chartRef}></div>
            </div>

        );
    }
}

export default TestSunburst;