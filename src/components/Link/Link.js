import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const getProps = ({ to, textVariant, ...props }) => {
  if (to) {
    return {
      to,
      as: Link,
      ...props
    }
  }

  return {
    as: 'a',
    ...props
  }
}

const LinkComponent = props => <LinkText {...getProps(props)} />

const LinkText = styled(Text)`
  text-decoration: ${({ textDecoration }) => textDecoration};
  color: blue;
`

LinkComponent.defaultProps = {
  textDecoration: 'underline',
  linkAnchor: 'test',
  to: '/pqp'
}

LinkComponent.propTypes = {
  textDecoration: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

export default LinkComponent
