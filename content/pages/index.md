---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: ''
    colors: colors-a
    title: Carrie Really Cares.
    subtitle: ''
    badge:
      label: Why Is Carrie Sanders McKeehan The Right Person For US?
      elementId: ''
      styles:
        self:
          textAlign: left
    text: >
      Hi. I'm Carrie Sanders McKeehan.

      I love my hometown of Louisville and I have had a heart for serving our

      community for decades. I'm a mom to a teenage son, and a passionate,

      special education teacher with [Breckinridge Metropolitan High
      School](https://www.jefferson.kyschools.us/schools/profiles/breckinridge-metropolitan-high)
      in Jefferson County Public Schools.
    actions:
      - type: Button
        label: Join My Team
        url: /join
        style: primary
      - type: Link
        label: Learn More
        url: /issues
        icon: arrowRight
        iconPosition: right
        showIcon: true
    media:
      type: ImageBlock
      url: /images/Carie-Marie-profile-pic-2.jpg
      altText: Hero image
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
          - pt-0
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: ''
    colors: colors-a
    backgroundSize: inset
    title: Why Vote Carrie Sanders McKeehan?
    text: >
      Learn how top tech companies have learned working remote using our
      product.
    badge:
      type: Badge
      styles:
        self:
          textAlign: left
    actions:
      - type: Button
        label: Get Started
        url: /
        style: primary
      - type: Link
        label: Watch Video On Youtube
        url: 'https://www.youtube.com/watch?v=No-H-mBGYYM'
        showIcon: true
        icon: playCircle
        iconPosition: left
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-24
          - ml-4
          - mr-4
        padding:
          - pt-8
          - pb-8
          - pl-8
          - pr-8
        justifyContent: center
        flexDirection: row
        alignItems: center
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeatureHighlightSection
    media:
      type: VideoBlock
      title: Vote Carrie Sanders McKeehan
      url: 'https://www.youtube.com/watch?v=No-H-mBGYYM'
      autoplay: false
      loop: false
      muted: false
      controls: true
      aspectRatio: '16:9'
      elementId: ''
  - colors: colors-a
    subtitle: 'Endorsed By:'
    elementId: ''
    images:
      - type: ImageBlock
        url: /images/test.png
        altText: Apple
        caption: Apple
      - type: ImageBlock
        url: /images/index.png
        altText: Google Play
        caption: Google Play
      - type: ImageBlock
        url: /images/playstation.svg
        altText: PlayStation
        caption: PlayStation
      - type: ImageBlock
        url: /images/gatsby.svg
        altText: Gatsby
        caption: Gatsby
      - type: ImageBlock
        url: /images/xbox.svg
        altText: Xbox
        caption: Xbox
      - type: ImageBlock
        url: /images/skype.svg
        altText: Skype
        caption: Skype
      - type: ImageBlock
        url: /images/zcool.svg
        altText: ZCOOL
        caption: ZCOOL
    spacing: 3
    columns: 7
    aspectRatio: auto
    showCaption: false
    enableHover: false
    styles:
      self:
        width: wide
        height: auto
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-24
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
        textAlign: center
    imageSizePx: 240
    type: MediaGallerySection
  - colors: colors-f
    elementId: ''
    title: On The Issues
    items:
      - question: What can we do to stop violent crime?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How can we lower the cost of living in our area?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How should we treat those with special needs?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation. At the office, working together is often a
          distraction, on remote, it could be motivation. At the office, working
          together is often a distraction, on remote, it could be motivation.
      - question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation. At the office, working together is often a
          distraction, on remote, it could be motivation. At the office, working
          together is often a distraction, on remote, it could be motivation.
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
          - pt-20
          - pb-20
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
    type: FaqSection
    actions:
      - type: Button
        label: View Full Platform
        altText: ''
        url: /issues
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
  - type: ContactSection
    colors: colors-a
    backgroundSize: full
    title: Get early access
    text: >
      Sign up your team today to be the first to try out our new product to
      increase your team’s productivity
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
      submitLabel: Sign Up
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
  - type: RecentPostsSection
    elementId: ''
    showDate: false
    showAuthor: false
    showExcerpt: true
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
          - pt-20
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
    colors: colors-f
    recentCount: 3
---
