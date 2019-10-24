import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Home = () => {
  const [counter] = useState(0)
  return (
    <div>
      <Head title="Hello" />
      <div> Hello World Dashboard {counter} </div>
      <Link to="/test/first"> GO FIRST</Link>
      <br />
      <Link to="/test/second"> GO SECOND</Link>
      <br />
      <Link to="/"> GO HOME</Link>
      <br />
      <a href="/">Go Home</a>

      <Route exact path="/test/first" component={() => <div>FIRST VERSION</div>} />
      <Route exact path="/test/second" component={() => <div>SECOND VERSION</div>} />
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
