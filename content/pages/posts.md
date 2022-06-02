---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: Posts
sections:
  - type: RecentPostsSection
    elementId: ''
    showDate: false
    showAuthor: false
    showExcerpt: false
    variant: variant-a
    actions:
      - type: Button
        label: View all
        url: /
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
    title: Recent Posts
    subtitle: Latest blog posts section example
    colors: colors-b
    recentCount: 6
---
