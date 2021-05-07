import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function SEO({ description, lang, meta, title, image }) {
  const ogImage = image
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${description}`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:title`,
          content: `${title} | ${description}`
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:image`,
          content: ogImage
        },
        {
          name: `twitter:title`,
          content: `${title} | ${description}`
        },
        {
          name: `twitter:description`,
          content: description
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
