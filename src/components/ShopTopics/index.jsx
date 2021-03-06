import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Topics = (props) => {
  return (
    <nav className="ShopTopics">
      {
        props.topics.map((topico, index) => (
            <div className="Topic" key={index}>
                <a href="#">{topico}</a>
            </div>
        ))
      }
    </nav>
  )
}

Topics.propTypes = {
  Operator: PropTypes.array
}

export default Topics
