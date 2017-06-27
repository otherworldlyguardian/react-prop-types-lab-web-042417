import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render () {
    return (
      <div>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    const weight = props[propName]
    if (weight === undefined) {
      return new Error('The `weight` prop is required.')
    } else if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.')
    } else if (weight < 80 || weight > 300) {
      return new Error('The `weight` prop should range between 80 and 300.')
    }
  }
}

export default Product
