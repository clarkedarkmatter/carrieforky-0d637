---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: About
sections:
  - type: FeatureHighlightSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: Who Is Carrie?
    subtitle: ''
    badge:
      label: Educator. Communicator. Leader.
      elementId: ''
      styles:
        self:
          textAlign: left
    text: >
      Carrie is a an educator, a mother and community leader. She has designed
      and written curriculum for schools in our community as well as organized
      efforts to benefit our community through many local organizations.


      Read more in the sections below.
    actions:
      - type: Button
        label: Join Carrie Today
        url: /join
        style: primary
    media:
      type: ImageBlock
      altText: Hero image
      url: /images/242499081_4260379027343947_1488516747194251273_n.jpg
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
  - type: TextSection
    elementId: ''
    colors: colors-e
    title: Louisville Is Home.
    subtitle: ''
    text: >
      Carrie loves her hometown of Louisville and has had a heart for serving
      our

      community for decades. 


      Carrie is a mom to a teenage son and a passionate 

      special education teacher with [Breckinridge Metropolitan High
      School](https://www.jefferson.kyschools.us/schools/profiles/breckinridge-metropolitan-high)
      in Jefferson County Public Schools.
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - type: FaqSection
    colors: colors-a
    elementId: ''
    title: Ask Carrie.
    subtitle: Submit A Question To Carrie Below.
    actions:
      - type: Link
        label: Send A Message
        url: /join
        showIcon: true
        icon: arrowRight
    items:
      - answer: >
          My passion has been focused primarily on education. With
          [JCPS](https://www.jefferson.kyschools.us/),
           I work with troubled teens who are removed from the comprehensive 
          schools, helping to provide support for their next steps. I also
          serve 

          as an Associate Principal with Pastor Cecil Blye's “[More Grace
          Christian
          Academy](https://www.trulia.com/schools/KY-louisville-more_grace_christian_academy-5700090973)”,
           an inner city private school. I was hired to help build a curriculum, 
          connect the school with the community, build and support a successful 

          faculty and develop systems for student success.
        question: 'What''s Carrie''s Work History? '
      - question: What Else Is She Involved In?
        answer: >
          Aside from running for State Representative, Carrie continues to
          volunteer with numerous organizations throughout the city including
          [Sisters for Life](https://www.sisforlife.org/), [Constitutional
          Kentucky](https://constitutionalkentucky.com/), and the [American
          Family Association](https://www.afa.net/). Carrie has served as an
          event planner for events and fundraisers for each of the groups and
          served the community through outreach.
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
  - type: ContactSection
    elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Get early access
    text: >-
      Sign up your team today to be the first to try out our new product to
      increase your team's productivity.
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: full
      submitLabel: Sign Up
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
---
