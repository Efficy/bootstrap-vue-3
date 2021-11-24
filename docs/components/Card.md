# Card

> A card is a flexible and extensible content container. It includes options for headers and
> footers, a wide variety of content, contextual background colors, and powerful display options.

## Overview

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of
control and customization. Built with flexbox, they offer easy alignment and mix well with other
components.

`<b-card>` has no fixed width to start, so they'll naturally fill the full width of its parent
element. This is easily customized via styles or standard Bootstrap v4 sizing classes.

Change the default `div` root tag to any other HTML element by specifying via the `tag` prop

<ClientOnly>
  <b-card>
    <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-card>
</ClientOnly>

```html
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
```

## Content types

Cards support a wide variety of content, including images, text, list groups, links and more. The
following are examples of what's supported inside a `<b-card>`

### Card body

The building block of a `<b-card>` is the `<b-card-body>` section which provides a padded section
within a card.

By default, the `<b-card>` content is automatically placed in a `<b-card-body>` section:

<ClientOnly>
  <b-card>
    <b-card class="text-center">
        <div class="bg-secondary text-light">
        This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
        <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
        gray <samp>&lt;div&gt;</samp>.
        </div>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card class="text-center">
    <div class="bg-secondary text-light">
      This is some content within the default <samp>&lt;b-card-body&gt;</samp> block of the
      <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
      gray <samp>&lt;div&gt;</samp>.
    </div>
  </b-card>
</b-card>
```

Disable the automatic `<b-card-body>` section (and associated padding) by setting the prop `no-body`
on the `<b-card>`.

<ClientOnly>
  <b-card>
    <b-card no-body class="text-center">
        <div class="bg-secondary text-light">
          This is some content without the default <samp>&lt;b-card-body&gt;</samp> section. Notice the
          lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
        </div>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card no-body class="text-center">
    <div class="bg-secondary text-light">
      This is some content without the default <samp>&lt;b-card-body&gt;</samp> section. Notice the
      lack of padding between the card's border and this gray <samp>&lt;div&gt;</samp>.
    </div>
  </b-card>
</b-card>
```

Note that with `no-body` enabled, the content of the `title` and `sub-title` props will not be
rendered.

Use the `<b-card-body>` sub-component to place your own card body anywhere in a `<b-card>` component
that has `no-body` set.

#### Titles, text, and links

_Card titles_ are adding via the `title` prop, and _sub titles_ are added via the `sub-title` prop.
The title is rendered using the sub-component `<b-card-title>` while the Sub Title is rendered using
the sub-component `<b-card-sub-title>`.

With sub-component `<b-card-text>`, paragraph text can be added to the card. The last
`<b-card-text>` in the card body will have its bottom margin automatically removed (via CSS). Text
within `<b-card-text>` can also be styled with the standard HTML tags.

Links can be added and placed next to each other by adding the `.card-link` class to a `<a>` tag (or
`<b-link>` component).

<ClientOnly>
  <b-card>
    <b-card title="Card title" sub-title="Card subtitle">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>
      <b-card-text>A second paragraph of text in the card.</b-card-text>
      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card title="Card title" sub-title="Card subtitle">
    <b-card-text>
      Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      content.
    </b-card-text>
    <b-card-text>A second paragraph of text in the card.</b-card-text>
    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
</b-card>
```

### Images

The `<b-card>` prop `img-src` places an image on the top of the card, and use the `img-alt` prop to
specify a string to be placed in the image's `alt` attribute. The image specified by the `img-src`
prop will be responsive and will adjust its width when the width of the card is changed.

Alternatively you can manually place images inside `<b-card>` using the sub-component
`<b-card-img>`. See the kitchen sink example below for usage.

<ClientOnly>
  <b-card>
    <div>
      <h4>Top and Bottom</h4>
        <b-card-group deck>
        <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
        <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-4">
      <h4>Left and Right (or Start and End)</h4>
      <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <h4>Top and Bottom</h4>
    <b-card-group deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
</b-card>
```

**Note:** For left and right images, you may need to apply additional styles to classes
`.card-img-left` and `.card-img-right`, as images will "stretch" in height if you have content that
is taller than your image. Note headers and footers are not supported when images are left or right
aligned. You may find the [Horizontal Card Layout](#horizontal-card-layout) example to be more
flexible when creating a responsive horizontal card.

#### Overlay image

Place the image in the background of the card by setting the boolean prop `overlay`:

<ClientOnly>
  <b-card>
    <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</b-card>
```

#### Lazy loaded images

Use the `<b-card-img-lazy>` sub-component to lazy load images as they scroll into view.
`<b-card-img-lazy>` supports the same props as `<b-card-img>` as well as many of the props of the
[`<b-img-lazy>`](/docs/components/image#lazy-loaded-images) component.

### Header and footer

Add an optional header and/or footer within a card via the `header`/`footer` props or named slots.
You can control the wrapper element tags used by setting the `header-tag` and `footer-tag` props
(both default is `div`)

<ClientOnly>
  <b-card>
    <b-card-group deck>
      <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="Title"
      >
        <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
      <b-card title="Title" header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Header Slot</h6>
        </template>
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        <template #footer>
            <em>Footer Slot</em>
        </template>
      </b-card>
    </b-card-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card-group deck>
    <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Title"
    >
      <b-card-text>Header and footers using props.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card title="Title" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>
      <b-card-text>Header and footers using slots.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
</b-card>
```

### Kitchen sink example

Mix and match multiple content types to create the card you need, or throw everything in there.
Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width
card.

<ClientOnly>
  <b-card>
    <b-card
        no-body
        style="max-width: 20rem;"
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
    >
      <template #header>
        <h4 class="mb-0">Hello World</h4>
      </template>
      <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </b-card-text>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
      <b-card-footer>This is a footer</b-card-footer>
      <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card
    no-body
    style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">Hello World</h4>
    </template>
    <b-card-body>
      <b-card-title>Card Title</b-card-title>
      <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card-body>
    <b-list-group flush>
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>
    <b-card-body>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </b-card-body>
    <b-card-footer>This is a footer</b-card-footer>
    <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
  </b-card>
</b-card>
```

## Horizontal card layout

Using a combination of grid components, utility classes and individual card sub-components, cards
can be made horizontal in a mobile-friendly and responsive way.

In the example below, we remove the row grid gutters with the `no-gutters` prop on `<b-row>` and use
`md` props on `<b-col>` to make the card horizontal at the `md` breakpoint. Class `rounded-0`
removes the rounding of the `<b-card-img>` corners while class `overflow-hidden` on `<b-card>` will
appropriately clip the image's corners based on the border-radius of the card. Further adjustments
may be needed depending on your card content.

<ClientOnly>
  <b-card>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img
          src="https://picsum.photos/400/400/?image=20"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</b-card>
```

## Text variants

By default, cards use dark text and assume a light background. You can reverse that by toggling the
color of text within, as well as that of the card's sub-components, via the prop `text-variant`.
Then, specify a dark background variant.

<ClientOnly>
  <b-card>
    <b-card bg-variant="dark" text-variant="white" title="Card Title">
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card bg-variant="dark" text-variant="white" title="Card Title">
    <b-card-text>
      With supporting text below as a natural lead-in to additional content.
    </b-card-text>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</b-card>
```

## Background and border variants

Cards include their own variant style for quickly changing the background-color and of a card via
the `bg-variant` and `border-variant` props. Darker solid variants may require setting the prop
`text-variant` to adjust the text color.

### Solid

<ClientOnly>
  <b-card>
    <div>
      <b-card-group deck>
        <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
        <b-card-group deck>
        <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card bg-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card header="Default" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-card-group deck>
      <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card bg-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card header="Default" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</b-card>
```

### Bordered

<ClientOnly>
  <b-card>
    <div>
      <b-card-group deck>
        <b-card
          border-variant="primary"
          header="Primary"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card
          border-variant="secondary"
          header="Secondary"
          header-border-variant="secondary"
          align="center"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card border-variant="success" header="Success" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card border-variant="info" header="Info" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card
          border-variant="warning"
          header="Warning"
          header-bg-variant="transparent"
          align="center"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card
          border-variant="danger"
          header="Danger"
          header-border-variant="danger"
          header-text-variant="danger"
          align="center"
        >
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck class="mb-3">
        <b-card border-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
        <b-card border-variant="dark" header="Dark" align="center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-card-group deck>
      <b-card
        border-variant="primary"
        header="Primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card
        border-variant="secondary"
        header="Secondary"
        header-border-variant="secondary"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card border-variant="success" header="Success" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck>
      <b-card border-variant="info" header="Info" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card
        border-variant="warning"
        header="Warning"
        header-bg-variant="transparent"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card
        border-variant="danger"
        header="Danger"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
      >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card border-variant="light" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card border-variant="dark" header="Dark" align="center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</b-card>
```

#### Variant to class mapping

Bootstrap-Vue-3 `<b-card>` variants are directly mapped to Bootstrap v5 card classes by pre-pending
`bg-` (for solid) or `border-` (for bordered) to the above variant names.

### Header and footer variants

You can also apply the solid and border variants individually to card headers and footers via the
`header-bg-variant`, `header-border-variant`, `header-text-variant`, `footer-bg-variant`,
`footer-border-variant`, and `footer-text-variant` props.

<ClientOnly>
  <b-card>
    <b-card
      header="Card Header"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      footer="Card Footer"
      footer-tag="footer"
      footer-bg-variant="success"
      footer-border-variant="dark"
      title="Title"
      style="max-width: 20rem;"
    >
      <b-card-text>Header and footers variants.</b-card-text>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card
    header="Card Header"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark"
    title="Title"
    style="max-width: 20rem;"
  >
    <b-card-text>Header and footers variants.</b-card-text>
  </b-card>
</b-card>
```

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of
assistive technologies – such as screen readers. Ensure that information denoted by the color is
either obvious from the content itself (e.g. the visible text), or is included through alternative
means, such as additional text hidden with the `.visually-hidden` class.

## Nav integration

Integrate [`<b-nav>`](/docs/components/nav) into card headers easily.

**Using the `header` slot**:

<ClientOnly>
  <b-card>
    <b-card title="Card Title" body-class="text-center" header-tag="nav">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Inactive</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
     </template>
     <b-card-text>
       With supporting text below as a natural lead-in to additional content.
     </b-card-text>
     <b-button variant="primary">Go somewhere</b-button>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card title="Card Title" body-class="text-center" header-tag="nav">
    <template #header>
      <b-nav card-header tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Inactive</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </template>
    <b-card-text>
      With supporting text below as a natural lead-in to additional content.
    </b-card-text>
    <b-button variant="primary">Go somewhere</b-button>
  </b-card>
</b-card>

<!-- card-with-nav-header-slot.vue -->
```

**Using `<b-card-header>` sub-component:**

<ClientOnly>
  <b-card>
    <b-card no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Inactive</b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body class="text-center">
        <b-card-title>Card Title</b-card-title>
        <b-card-text>
          With supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-button variant="primary">Go somewhere</b-button>
      </b-card-body>
    </b-card>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Inactive</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-card-header>
    <b-card-body class="text-center">
      <b-card-title>Card Title</b-card-title>
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-button variant="primary">Go somewhere</b-button>
    </b-card-body>
  </b-card>
</b-card>
```

For more information on using `<b-nav>` in card headers, refer to the
[Navs documentation](/docs/components/nav).

## Card groups

In addition to styling the content within cards, BootstrapVue includes a `<b-card-group>` component
for laying out series of cards. For the time being, these layout options are not yet responsive.

### Default card group

Use card groups to render cards as a single, attached element with equal width and height columns.
Card groups use display: flex; to achieve their uniform sizing.

When using card groups with footers, their content will automatically line up.

<ClientOnly>
  <b-card>
    <b-card-group>
      <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
      <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
      <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card-group>
    <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
    <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
    <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</b-card>
```

### Card deck groups

Need a set of equal width and height cards that aren't attached to one another? Use card decks by
setting the `deck` prop. And just like with regular card groups, card footers in decks will
automatically line up.

<ClientOnly>
  <b-card>
    <b-card-group deck>
      <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
      <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
      <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</b-card>
```

### Card column groups

Cards can be organized into Masonry-like columns with by wrapping them in a `<b-card-group>` with
the prop `columns` set. Cards are built with CSS column properties instead of flexbox for easier
alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must
set them to display: inline-block as column-break-inside: avoid isn't a bulletproof solution yet.

<ClientOnly>
  <b-card>
    <b-card-group columns>
      <b-card
        title="Card title that wraps to a new line"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top
        >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
      </b-card>
      <b-card header="Quote">
        <blockquote class="blockquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </b-card>
      <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
      <b-card bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
          </footer>
        </blockquote>
      </b-card>
      <b-card>
        <b-card-title>Title</b-card-title>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>
      <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>
      <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first.
        </b-card-text>
        <template #footer>
          <small class="text-muted">Footer Text</small>
        </template>
      </b-card>
    </b-card-group>
  </b-card>
</ClientOnly>

```html
<b-card>
  <b-card-group columns>
    <b-card
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>
    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>
    <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>
    <b-card>
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
    <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>
    <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-card-group>
</b-card>
```

## Component reference

### `<b-card>`

#### Properties

| Property                                                            | Type                            | Default | Description                                                                                  |
| ------------------------------------------------------------------- | ------------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `align`                                                             | `String`                        |         | Text alignment for the card's content: 'start', 'center' or 'end'                            |
| `bg-variant`                                                        | `String`                        |         | Applies one of the Bootstrap theme color variants to the background                          |
| `body-bg-variant`                                                   | `String`                        |         | Applies one of the Bootstrap theme color variants to the body background                     |
| `body-class`                                                        | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the body                                                  |
| `body-tag`                                                          | `String`                        | 'div'   | Specify the HTML tag to render instead of the default tag for the body                       |
| `body-text-variant`                                                 | `String`                        |         | Applies one of the Bootstrap theme color variants to the body text                           |
| `border-variant`                                                    | `String`                        |         | Applies one of the Bootstrap theme color variants to the border                              |
| `footer`                                                            | `String`                        |         | Text content to place in the footer                                                          |
| `footer-bg-variant`                                                 | `String`                        |         | Applies one of the Bootstrap theme color variants to the footer background                   |
| `footer-border-variant`                                             | `String`                        |         | Applies one of the Bootstrap theme color variants to the footer background                   |
| `footer-class`                                                      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the footer                                                |
| `footer-html` <br/><span class="bg-warning">Use with caution</span> | `Array` or `Object` or `String` |         | HTML string content to place in the footer                                                   |
| `footer-tag`                                                        | `String`                        |         | Specify the HTML tag to render instead of the default tag for the footer                     |
| `footer-text-variant`                                               | `String`                        |         | Applies one of the Bootstrap theme color variants to the footer text                         |
| `header`                                                            | `String`                        |         | Text content to place in the header                                                          |
| `header-bg-variant`                                                 | `String`                        |         | Applies one of the Bootstrap theme color variants to the header background                   |
| `header-border-variant`                                             | `String`                        |         | Applies one of the Bootstrap theme color variants to the header background                   |
| `header-class`                                                      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the header                                                |
| `header-html` <br/><span class="bg-warning">Use with caution</span> | `Array` or `Object` or `String` |         | HTML string content to place in the header                                                   |
| `header-tag`                                                        | `String`                        | `div`   | Specify the HTML tag to render instead of the default tag for the header                     |
| `header-text-variant`                                               | `String`                        |         | Applies one of the Bootstrap theme color variants to the header text                         |
| `img-alt`                                                           | `String`                        |         | Value to set the image attribute 'alt'                                                       |
| `img-bottom`                                                        | `Boolean`                       | `false` | Set if the image should appear at the bottom of the card                                     |
| `img-end`                                                           | `Boolean`                       | `false` | Set if the image should appear at the end (right) of the card                                |
| `img-height`                                                        | `Number` or `String`            |         | The value to set on the image's 'height' attribute                                           |
| `img-left`                                                          | `Boolean`                       | `false` | Set if the image should appear at the start (left) of the card. Synonym for the 'start' prop |
| `img-right`                                                         | `Boolean`                       | `false` | Set if the image should appear at the end (right) of the card. Synonym for the 'end' prop    |
| `img-src`                                                           | `String`                        |         | URL for the optional image                                                                   |
| `img-start`                                                         | `Boolean`                       | `false` | Set if the image should appear at the start (left) of the card.                              |
| `img-top`                                                           | `Boolean`                       | `false` | Set if the image should appear at the top of the card                                        |
| `img-width`                                                         | `Number` or `String`            |         | The value to set on the image's 'width' attribute                                            |
| `no-body`                                                           | `Boolean`                       | `false` | Disable rendering of the default inner card-body element                                     |
| `overlay`                                                           | `Boolean`                       | `false` | When set, will overlay the card body on top of the image (if the card has an image)          |
| `sub-title`                                                         | `String`                        |         | Text content to place in the sub title                                                       |
| `sub-title-tag`                                                     | `String`                        | `h6`    | Specify the HTML tag to render instead of the default tag for the sub title                  |
| `sub-title-text-variant`                                            | `String`                        |         | Applies one of the Bootstrap theme color variants to the sub title text                      |
| `tag`                                                               | `String`                        | `div`   | Specify the HTML tag to render instead of the default tag                                    |
| `text-variant`                                                      | `String`                        |         | Applies one of the Bootstrap theme color variants to the text                                |
| `title`                                                             | `String`                        |         | Text content to place in the title                                                           |
| `title-tag`                                                         | `String`                        | `h4`    | Specify the HTML tag to render instead of the default tag for the title                      |

<p class="alert alert-danger">
  <strong>Caution:</strong> Props that support HTML strings (`*-html`) can be vulnerable to
  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first
  <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the
  user supplied string.
</p>

#### slots

| Property  | Description                            |
| --------- | -------------------------------------- |
| `default` | Content to place in the card           |
| `footer`  | For custom rendering of footer content |
| `header`  | For custom rendering of header content |

### `<b-card-header>`

#### Properties

| Property                                                            | Type                            | Default | Description                                                                |
| ------------------------------------------------------------------- | ------------------------------- | ------- | -------------------------------------------------------------------------- |
| `header`                                                            | `String`                        |         | Text content to place in the header                                        |
| `header-bg-variant`                                                 | `String`                        |         | Applies one of the Bootstrap theme color variants to the header background |
| `header-border-variant`                                             | `String`                        |         | Applies one of the Bootstrap theme color variants to the header border     |
| `header-class`                                                      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the header                              |
| `header-html` <br/><span class="bg-warning">Use with caution</span> | `Array` or `Object` or `String` |         | HTML string content to place in the header                                 |
| `header-tag`                                                        | `String`                        | `div`   | Specify the HTML tag to render instead of the default tag for the header   |
| `header-text-variant`                                               | `String`                        |         | Applies one of the Bootstrap theme color variants to the header text       |

#### slots

| Property  | Description                         |
| --------- | ----------------------------------- |
| `default` | Content to place in the card header |

<p class="alert alert-danger">
  <strong>Caution:</strong> Props that support HTML strings (`*-html`) can be vulnerable to
  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first
  <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the
  user supplied string.
</p>

### `<b-card-footer>`

#### Properties

| Property                                                            | Type                            | Default | Description                                                                |
| ------------------------------------------------------------------- | ------------------------------- | ------- | -------------------------------------------------------------------------- |
| `footer`                                                            | `String`                        |         | Text content to place in the footer                                        |
| `footer-bg-variant`                                                 | `String`                        |         | Applies one of the Bootstrap theme color variants to the footer background |
| `footer-border-variant`                                             | `String`                        |         | Applies one of the Bootstrap theme color variants to the footer background |
| `footer-class`                                                      | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the footer                              |
| `footer-html` <br/><span class="bg-warning">Use with caution</span> | `Array` or `Object` or `String` |         | HTML string content to place in the footer                                 |
| `footer-tag`                                                        | `String`                        |         | Specify the HTML tag to render instead of the default tag for the footer   |
| `footer-text-variant`                                               | `String`                        |         | Applies one of the Bootstrap theme color variants to the footer text       |

<p class="alert alert-danger">
  <strong>Caution:</strong> Props that support HTML strings (`*-html`) can be vulnerable to
  <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
  <abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first
  <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the
  user supplied string.
</p>

#### slots

| Property  | Description                         |
| --------- | ----------------------------------- |
| `default` | Content to place in the card footer |

### `<b-card-body>`

#### Properties

| Property                 | Type                            | Default | Description                                                                         |
| ------------------------ | ------------------------------- | ------- | ----------------------------------------------------------------------------------- |
| `body-bg-variant`        | `String`                        |         | Applies one of the Bootstrap theme color variants to the body background            |
| `body-class`             | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the body                                         |
| `body-tag`               | `String`                        | 'div'   | Specify the HTML tag to render instead of the default tag for the body              |
| `body-text-variant`      | `String`                        |         | Applies one of the Bootstrap theme color variants to the body text                  |
| `overlay`                | `Boolean`                       | `false` | When set, will overlay the card body on top of the image (if the card has an image) |
| `sub-title`              | `String`                        |         | Text content to place in the sub title                                              |
| `sub-title-tag`          | `String`                        | `h6`    | Specify the HTML tag to render instead of the default tag for the sub title         |
| `sub-title-text-variant` | `String`                        |         | Applies one of the Bootstrap theme color variants to the sub title text             |
| `title`                  | `String`                        |         | Text content to place in the title                                                  |
| `title-tag`              | `String`                        | `h4`    | Specify the HTML tag to render instead of the default tag for the title             |

#### slots

| Property  | Description                       |
| --------- | --------------------------------- |
| `default` | Content to place in the card body |

### `<b-card-title>`

#### Properties

| Property    | Type     | Default | Description                                                             |
| ----------- | -------- | ------- | ----------------------------------------------------------------------- |
| `title`     | `String` |         | Text content to place in the title                                      |
| `title-tag` | `String` | `h4`    | Specify the HTML tag to render instead of the default tag for the title |

#### slots

| Property  | Description                        |
| --------- | ---------------------------------- |
| `default` | Content to place in the card title |

### `<b-card-sub-title>`

#### Properties

| Property                 | Type     | Default | Description                                                                 |
| ------------------------ | -------- | ------- | --------------------------------------------------------------------------- |
| `sub-title`              | `String` |         | Text content to place in the sub title                                      |
| `sub-title-tag`          | `String` | `h6`    | Specify the HTML tag to render instead of the default tag for the sub title |
| `sub-title-text-variant` | `String` |         | Applies one of the Bootstrap theme color variants to the sub title text     |

#### slots

| Property  | Description                            |
| --------- | -------------------------------------- |
| `default` | Content to place in the card sub-title |

### `<b-card-img>`

#### Properties

| Property | Type                 | Default | Description                                                                                  |
| -------- | -------------------- | ------- | -------------------------------------------------------------------------------------------- |
| `alt`    | `String`             |         | Value to set the image attribute 'alt'                                                       |
| `bottom` | `Boolean`            | `false` | Set if the image should appear at the bottom of the card                                     |
| `end`    | `Boolean`            | `false` | Set if the image should appear at the end (right) of the card                                |
| `height` | `Number` or `String` |         | The value to set on the image's 'height' attribute                                           |
| `left`   | `Boolean`            | `false` | Set if the image should appear at the start (left) of the card. Synonym for the 'start' prop |
| `right`  | `Boolean`            | `false` | Set if the image should appear at the end (right) of the card. Synonym for the 'end' prop    |
| `src`    | `String`             |         | URL for the optional image                                                                   |
| `start`  | `Boolean`            | `false` | Set if the image should appear at the start (left) of the card.                              |
| `top`    | `Boolean`            | `false` | Set if the image should appear at the top of the card                                        |
| `width`  | `Number` or `String` |         | The value to set on the image's 'width' attribute                                            |
