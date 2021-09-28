import React from 'react'

export  function Divider() {
    return (
        <div style={{ paddingTop:45}}>
            <h4 className="ui horizontal divider header">
                <i className="tag icon"></i>
                Description
            </h4>
            <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
            <h4 className="ui horizontal divider header">
                <i className="bar chart icon"></i>
                Specifications
            </h4>
            <table className="ui definition table">
                <tbody>
                    <tr>
                        <td className="two wide column">Size</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>6 ounces</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>Yellowish</td>
                    </tr>
                    <tr>
                        <td>Odor</td>
                        <td>Not Much Usually</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
