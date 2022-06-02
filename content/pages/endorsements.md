---
title: Endorsements
layout: PageLayout
sections:
  - type: ContactSection
    elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Stay In The Loop
    text: |
      Enter An Email Or Mobile Phone Number To Get Updates From The Campaign.
    form:
      type: FormBlock
      variant: variant-b
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: bluejaystartup@gmail.com
      fields:
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: full
        - type: TextFormControl
          name: home-address
          label: Mobile number
          hideLabel: false
          placeholder: Your phone number
          isRequired: false
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
          - pt-10
          - pb-10
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
  - type: TestimonialsSection
    elementId: ''
    colors: colors-a
    variant: variant-a
    title: Carrie Is Endorsed By Leaders Around Our Community
    testimonials:
      - type: Testimonial
        quote: >+
          ### "I wholly and wholeheartedly endorse Carrie's candidacy. She is a
          brilliant problem solver and leader. Her background as a mom and
          educator uniquely position her to understand family and community
          needs. She is bright, articulate and trustworthy. Kentucky needs her
          insight, activism and commitment in Frankfort."

        name: Cecil Blye
        title: 'Pastor & President, More Grace Ministries, Inc.'
        image:
          type: ImageBlock
          url: /images/277576841_111378834860751_6970880646401486249_n-fb31f573.jpg
          altText: Person photo
      - type: Testimonial
        quote: "## \"I’m honored to proudly stand in formally endorsing Carrie Sanders McKeehan as State Representative of the 41st District.\_ Carrie will be an effective leader who will be a TRUE voice in Frankfort, making a positive impact on her district and state.\"\n\n"
        name: Ryan Dotson
        title: Kentucky State Representative - House District 73
        image:
          url: /images/280413391_124386733559961_1817655490597991610_n-c67ebc4a.jpg
          altText: Person photo
        elementId: ''
        styles:
          name:
            fontWeight: 400
            fontStyle: normal
          title:
            fontWeight: 400
            fontStyle: normal
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
  - elementId: ''
    colors: colors-e
    quote: >+
      ##### “When you vote for Carrie, this is who she is. She is courageous to
      be embarking in this line of work. But I believe in her conviction and if
      she is elected, she will be taking the time to get to know you. She is
      approachable and has an empathetic ear. And she will do all she can to get
      things done in her electorate. When I say what you see is what you get,
      this is who you are getting."

    name: Jeremy Tai
    title: Member of “Youth with a Mission (YWAM)"
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
          - pt-24
          - pb-36
        justifyContent: center
      quote:
        textAlign: center
      name:
        textAlign: center
      title:
        textAlign: center
    type: QuoteSection
  - type: TestimonialsSection
    elementId: ''
    colors: colors-a
    variant: variant-a
    title: ''
    subtitle: ''
    testimonials:
      - quote: >
          "Please support Carrie in her run for State Representative! She will
          work hard for you and have a great presence in the House!"
        name: ' Thomas Huff'
        title: Kentucky State Representative - House District 49
        image:
          type: ImageBlock
          url: /images/278615549_116572531008048_2445199668254025929_n.jpg
          altText: Photo of Carla Rogers
      - type: Testimonial
        quote: >-
          “It’s great to see someone taking action while still maintaining a
          sustainable fish supply to home cooks.”
        name: Johnna Doe
        title: Product Marketing Manager at Acme
        image:
          url: /images/280413391_124386733559961_1817655490597991610_n.jpg
          altText: Person photo
        elementId: ''
        styles:
          name:
            fontWeight: 400
            fontStyle: normal
          title:
            fontWeight: 400
            fontStyle: normal
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-28
          - pb-28
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: CtaSection
    elementId: ''
    colors: colors-f
    backgroundSize: full
    title: We Can Turn Flip This District
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        label: Try it now
        url: /
        style: primary
    backgroundImage: null
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
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
---
