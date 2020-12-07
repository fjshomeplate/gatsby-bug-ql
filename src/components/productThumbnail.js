import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {useSiteMetadata} from "../hooks/storeDataHook"

export default function ProductThumbnail() {
  const { title, siteUrl } = useSiteMetadata()
  return (
        <header>
          <h1>{title}</h1>
        </header>
      )
}
