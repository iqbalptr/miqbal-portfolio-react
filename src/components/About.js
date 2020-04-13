import React from 'react';
import { Table } from 'reactstrap';

const About = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>No</th>
          <th>Social Media</th>
          <th>UserName</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram</td>
          <td>@iqbalptr03</td>
          <td>Active</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>E-mail</td>
          <td>miqbalperdanaputra404@gmail.com</td>
          <td>Active</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Github</td>
          <td>iqbalptr</td>
          <td>Currently</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default About;