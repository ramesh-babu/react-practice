import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Table } from 'react-bootstrap';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    return (
      <Form>
        <FormGroup controlId="formInlineName">
          <FormControl type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange} />
        </FormGroup>
      </Form>
    );
  }
}

class StudentRow extends Component {
  render() {
    const student = this.props.student;
    return (
      <tr>
        <td>{student.name}</td>
        <td>{student.price}</td>
      </tr>
    );
  }
}

class StudentsTable extends Component {

  render() {
    const filterText = this.props.filterText;
    const rows = [];
    this.props.students.forEach((student) => {
      if (student.name.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <StudentRow
          student={student}
          key={student.name}
        />
      );
    });
    
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

export class StudentsResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <StudentsTable
          students={this.props.students}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
