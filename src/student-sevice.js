import React, { Component } from 'react';

constructor(props) {
  super(props);
  this.state = {person: []};
}

const StudentApiCall = {
	UserList() {
	  $.getJSON('https://randomuser.me/api/')
      .then(({ results }) => this.setState({ person: results }));
	}
};

export default StudentApiCall;