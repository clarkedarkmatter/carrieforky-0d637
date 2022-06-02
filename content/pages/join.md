---
layout: PageLayout
addTitleSuffix: true
metaTags: []
title: Join
sections:
  - type: ContactSection
    elementId: ''
    colors: colors-a
    title: Join Team Carrie
    text: |
      We look forward to hearing from you.
    form:
      type: FormBlock
      variant: variant-a
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: 'clarkehurt09@gmail.com,carrieforky@gmail.com'
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: home-address
          label: Phone
          hideLabel: false
          placeholder: Textable phone number
          isRequired: false
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: address
          placeholder: Your home address
          isRequired: 'false'
          width: full
        - type: CheckboxFormControl
          name: sign
          label: I Want A Carrie Sanders McKeehan Sign
          isRequired: 'false'
          width: full
        - type: CheckboxFormControl
          name: shirt
          label: I Want A T-Shirt
          isRequired: false
          width: full
        - type: CheckboxFormControl
          name: doors
          label: I'll Help Knock On Doors
          isRequired: false
          width: full
        - type: CheckboxFormControl
          name: phone
          label: I'll Help Text Or Make Phone Calls
          isRequired: false
          width: full
        - type: CheckboxFormControl
          name: updates
          label: All Of The Above!
          isRequired: false
          width: full
      submitLabel: Send Message
    media:
      type: ImageBlock
      url: /images/Carie-Marie-profile-pic-2.jpg
      altText: Contact form image
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
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    backgroundSize: full
  - type: CtaSection
    elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        label: Try it now
        url: /about
        style: primary
    backgroundImage:
      url: /images/oscar.png
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
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
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
---
