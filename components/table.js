import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

class TableRow extends Component {

  render() {
    let rowStyle = {...this.props.styles.row};
    if (this.props.last) {
      rowStyle.borderBottomWidth=0;
    };

    return (
      <View style={rowStyle}>
          <Text style={[this.props.styles.cell,{borderRightWidth:1}]}>{this.props.left}</Text>
          <Text style={this.props.styles.cell}>{this.props.right}</Text>
      </View>
    )
  }
}

class Table extends Component {

  renderRow(left,right) {
    return
  }

  render() {
    this.styles = {
      table: {
        margin:20,
        borderWidth:1,
        borderRadius:3,
        borderColor:this.props.borderColor
      },
      row: {
        width:null,
        flexDirection:'row',
        alignItems:'stretch',
        borderBottomWidth:1,
        borderColor:this.props.borderColor
      },
      cell: {
        flexGrow:1,
        flexBasis:'50%',
        padding:5,
        color:this.props.textColor,
        borderColor:this.props.borderColor,
      }
    };

    return (
      <View style={this.styles.table}>
        {this.props.data.map((row,i) =>
          {
            console.log("drawing row:" + i,row);
            return (
              <TableRow left={row[0]} right={row[1]} key={i} last={(i==(this.props.data.length-1))} styles={this.styles} />
            )
          }
        )}
      </View>
    )
  }
}

export default Table;
