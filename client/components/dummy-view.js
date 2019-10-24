import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [counter] = useState(4)
  const [pageIndex, setPageIndex] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps();
  }, [getDataProps, pageIndex])
  return (
    <div>
      <Head title="Hello" />
      {/* <div> {JSON.stringify(props.isRequesting)}</div> */}
      <div> Hello World {counter} </div>
      <Link to="/dashboard"> GO DASHBOARD</Link>
      <br />
      <a href="/dashboard">Go to Google</a>
      <div> Page {pageIndex + 1} {props.users.length} </div>
      <div>
        <table>
          <tr>
            <td>Avatar</td>
            <td>Name</td>
            <td>Email</td>
            <td>Company</td>
            <td>Salary</td>
            <td>Age</td>
            <td>City</td>
          </tr>
          {
            props.users.map(user => (
              <tr>
                <td><img src={user.avatar} alt="" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
                <td>{user.salary}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))
          }
        </table>
      </div>
      <button type="button" onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}>Previous</button>
      <button type="button" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      <img src={`/tracker/${pageIndex}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
