import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from './../../components/Layout'
import '../../styles/styles.css'

export class view extends Component {
  render() {
    const passedData = this.props.location.state || {
      title: 'default title',
      description: 'default description',
      image: 'https://via.placeholder.com/350',
      website: 'https://via.placeholder.com',
    }
    const { title, description, image, link, linktext, company } = passedData
    return (
      <Layout>
        <Helmet>
          <title>{`${title} | Jenny Olsen`}</title>
        </Helmet>
        <Link to="/portfolio">&larr; back</Link>
        <h2>
          {title}{' '}
          {company && (
            <span className="company-attribution">with {company}</span>
          )}
        </h2>
        <img src={image} />

        <div>
          {description}
          <br /> <br />
          {link && (
            <div>
              <a href={link} target="_new">
                {linktext}
              </a>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default view
