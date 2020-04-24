import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
            </tr>
        );
    }
}

export default DataTable;