### Form textarea

# Form Textarea

> Create multi-line text inputs with support for auto height sizing, minimum and maximum number of
> rows, and contextual states.

<ClientOnly>
  <b-card>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="textEx1"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <pre class="mt-3 mb-0">{{ textEx1 }}</pre>
  </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div>
      <b-form-textarea
        id="textarea"
        v-model="textEx1"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <pre class="mt-3 mb-0">{{ textEx1 }}</pre>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const textEx1 = ref()
</script>
```

## Control sizing

Set text height using the `size` prop to `sm` or `lg` for small or large respectively.

To control width, place the input inside standard Bootstrap grid column.

<ClientOnly>
<b-card>
  <b-row>
    <b-col sm="2">
      <label for="textarea-small">Small:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea id="textarea-small" size="sm" placeholder="Small textarea"></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-default">Default:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea id="textarea-default" placeholder="Default textarea"></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-large">Large:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea id="textarea-large" size="lg" placeholder="Large textarea"></b-form-textarea>
    </b-col>
  </b-row>
</b-card>
</ClientOnly>

```html
<b-card>
  <b-row>
    <b-col sm="2">
      <label for="textarea-small">Small:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea id="textarea-small" size="sm" placeholder="Small textarea"></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-default">Default:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea id="textarea-default" placeholder="Default textarea"></b-form-textarea>
    </b-col>
  </b-row>

  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-large">Large:</label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea id="textarea-large" size="lg" placeholder="Large textarea"></b-form-textarea>
    </b-col>
  </b-row>
</b-card>
```

## Displayed rows

To set the height of `<b-form-textarea>`, set the `rows` prop to the desired number of rows. If no
value is provided to `rows`, then it will default to `2` (the browser default and minimum acceptable
value). Setting it to null or a value below 2 will result in the default of `2` being used.

<ClientOnly>
<b-card>
  <div>
    <b-form-textarea id="textarea-rows" placeholder="Tall textarea" rows="8"></b-form-textarea>
  </div>
</b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-form-textarea id="textarea-rows" placeholder="Tall textarea" rows="8"></b-form-textarea>
  </div>
</b-card>
```

### Disable resize handle

Some web browsers will allow the user to re-size the height of the textarea. To disable this
feature, set the `no-resize` prop to `true`.

<ClientOnly>
<b-card>
  <div>
    <b-form-textarea
      id="textarea-no-resize"
      placeholder="Fixed height textarea"
      rows="3"
      no-resize
    ></b-form-textarea>
  </div>
</b-card>
</ClientOnly>

```html
<b-card>
  <div>
    <b-form-textarea
      id="textarea-no-resize"
      placeholder="Fixed height textarea"
      rows="3"
      no-resize
    ></b-form-textarea>
  </div>
</b-card>
```

### Auto height

Not yet implemented

## Contextual states

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

Generally speaking, you'll want to use a particular state for specific types of feedback:

- `false` (denotes invalid state) is great for when there's a blocking or required field. A user
  must fill in this field properly to submit the form.
- `true` (denotes valid state) is ideal for situations when you have per-field validation throughout
  a form and want to encourage a user through the rest of the fields.
- `null` Displays no validation state (neither valid nor invalid)

To apply one of the contextual state icons on `<b-form-textarea>`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

<ClientOnly>
  <b-card>
    <div>
      <b-form-textarea
        id="textarea-state"
        v-model="textStates"
        :state="textStates.length >= 10"
        placeholder="Enter at least 10 characters"
        rows="3"
      ></b-form-textarea>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div>
      <b-form-textarea
        id="textarea-state"
        v-model="textStates"
        :state="textStates.length >= 10"
        placeholder="Enter at least 10 characters"
        rows="3"
      ></b-form-textarea>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const textStates = ref('')
</script>
```

### Conveying contextual state to assistive technologies and colorblind users

Using these contextual states to denote the state of a form control only provides a visual,
color-based indication, which will not be conveyed to users of assistive technologies - such as
screen readers - or to colorblind users.

Ensure that an alternative indication of state is also provided. For instance, you could include a
hint about state in the form control's `<label>` text itself, or by providing an additional help
text block.

### `aria-invalid` attribute

When `<b-form-textarea>` has an invalid contextual state (i.e. state is `false`) you may also want
to set the prop `aria-invalid` to `true`, or one of the supported values:

- `false`: No errors (default)
- `true` or `'true'`: The value has failed validation.
- `'grammar'`: A grammatical error has been detected.
- `'spelling'` A spelling error has been detected.

If the `state` prop is set to `false`, and the `aria-invalid` prop is not explicitly set,
`<b-form-textarea>` will automatically set the `aria-invalid` attribute to `'true'`.

## Debounce support

Not yet implemented

## Formatter support

`<b-form-textarea>` optionally supports formatting by passing a function reference to the `formatter` prop.

Formatting (when a formatter function is supplied) occurs when the control's native `input` and
`change` events fire. You can use the boolean prop `lazy-formatter` to restrict the formatter
function to being called on the control's native `blur` event.

The `formatter` function receives two arguments: the raw `value` of the input element, and the
native `event` object that triggered the format (if available).

The `formatter` function should return the formatted value as a _string_.

Formatting does not occur if a `formatter` is not provided.

<ClientOnly>
  <b-card>
    <div>
      <b-form-group
        label="Textarea with formatter (on input)"
        label-for="textarea-formatter"
        description="We will convert your text to lowercase instantly"
        class="mb-0"
      >
        <b-form-textarea
          id="textarea-formatter"
          v-model="textFormatter"
          placeholder="Enter your text"
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <p style="white-space: pre-line"><b>Value:</b> {{ textFormatter }}</p>
      <b-form-group
        label="Textarea with lazy formatter (on blur)"
        label-for="textarea-lazy"
        description="This one is a little lazy!"
        class="mb-0"
      >
        <b-form-textarea
          id="textarea-lazy"
          v-model="textFormatter2"
          placeholder="Enter your text"
          lazy-formatter
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <p class="mb-0" style="white-space: pre-line"><b>Value:</b> {{ textFormatter2 }}</p>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div>
      <b-form-group
        label="Textarea with formatter (on input)"
        label-for="textarea-formatter"
        description="We will convert your text to lowercase instantly"
        class="mb-0"
      >
        <b-form-textarea
          id="textarea-formatter"
          v-model="textFormatter"
          placeholder="Enter your text"
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <p style="white-space: pre-line"><b>Value:</b> {{ textFormatter }}</p>
      <b-form-group
        label="Textarea with lazy formatter (on blur)"
        label-for="textarea-lazy"
        description="This one is a little lazy!"
        class="mb-0"
      >
        <b-form-textarea
          id="textarea-lazy"
          v-model="textFormatter2"
          placeholder="Enter your text"
          lazy-formatter
          :formatter="formatter"
        ></b-form-textarea>
      </b-form-group>
      <p class="mb-0" style="white-space: pre-line"><b>Value:</b> {{ textFormatter2 }}</p>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const textFormatter = ref('')
  const textFormatter2 = ref('')

  const formatter = (value) => value.toLowerCase()
</script>
```

**Note:** With non-lazy formatting, if the cursor is not at the end of the input value, the cursor
may jump to the end _after_ a character is typed. You can use the provided event object and the
`event.target` to access the native input's selection methods and properties to control where the
insertion point is. This is left as an exercise for the reader.

## Readonly plain text

If you want to have `<b-form-textarea readonly>` elements in your form styled as plain text, set the
`plaintext` prop (no need to set `readonly` as it will be set automatically) to remove the default
form field styling and preserve the correct text size, margin, padding and height.

<ClientOnly>
  <b-card>
  <div>
    <b-form-textarea id="textarea-plaintext" plaintext :modelValue="textReadOnly"></b-form-textarea>
  </div>

  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div>
      <b-form-textarea
        id="textarea-plaintext"
        plaintext
        :modelValue="textReadOnly"
      ></b-form-textarea>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const textReadOnly = "This is some text.\nIt is read only and doesn't look like an input."
</script>
```

## `v-model` modifiers

Vue does not officially support `.lazy`, `.trim`, and `.number` modifiers on the `v-model` of custom
component based inputs, and may generate a bad user experience. Avoid using Vue's native modifiers.

To get around this, `<b-form-textarea>` has three boolean props `trim`, `number`, and `lazy` which
emulate the native Vue `v-model` modifiers `.trim` and `.number` and `.lazy` respectively. The
`lazy` prop will update the v-model on `change`/`blur`events.

**Notes:**

- The `number` prop takes precedence over the `trim` prop (i.e. `trim` will have no effect when
  `number` is set).
- When using the `number` prop, and if the value can be parsed as a number (via `parseFloat`) it
  will return a value of type `Number` to the `v-model`, otherwise the original input value is
  returned as type `String`. This is the same behaviour as the native `.number` modifier.
- The `trim` and `number` modifier props do not affect the value returned by the `input` or `change`
  events. These events will always return the string value of the content of `<textarea>` after
  optional formatting (which may not match the value returned via the `v-model` `update` event,
  which handles the modifiers).

## Autofocus

When the `autofocus` prop is set on `<b-form-textarea>`, the textarea will be auto-focused when it
is inserted (i.e. **mounted**) into the document or re-activated when inside a Vue `<keep-alive>`
component. Note that this prop **does not** set the `autofocus` attribute on the textarea, nor can
it tell when the textarea becomes visible.

## Native and custom events

All native events (other than the custom `input` and `change` events) are supported, without the
need for the `.native` modifier.

The custom `input` and `change` events receive a single argument of the current `value` (after any
formatting has been applied), and are triggered by user interaction.

The custom `update` event is passed the input value, and is emitted whenever the `v-model` needs
updating (it is emitted before `input`, `change`. and `blur` as needed).

You can always access the native `input` and `change` events by using the `.native` modifier.

## Exposed input properties and methods

`<b-form-textarea>` exposes several of the native input element's properties and methods on the
component reference (i.e. assign a `ref` to your `<b-form-textarea ref="foo" ...>`, capture the ref in a variable and use
`input.propertyName` or `input.methodName(...)`).

### example

<ClientOnly>
  <b-card>
    <div>
      <b-form-textarea
        id="textarea"
        ref="textArea"
        v-model="textSelectEx"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
    <button class="btn btn-primary mt-1" @click="selectText">Select text</button>
  </b-card>
</ClientOnly>

```html
<template>
  <b-card>
    <div>
      <b-form-textarea
        id="textarea"
        ref="textArea"
        v-model="textSelectEx"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
    <button class="btn btn-primary mt-1" @click="selectText">Select text</button>
  </b-card>
</template>

<script lang="ts" setup>
  import {ref} from 'vue'

  const textSelectEx = ref('')
  const textArea = ref<HTMLElement>(null)

  const selectText = () => {
    textArea.value.input.select()
  }
</script>
```

### Input properties

| Property              | Notes      |
| --------------------- | ---------- |
| `.selectionStart`     | Read/Write |
| `.selectionEnd`       | Read/Write |
| `.selectionDirection` | Read/Write |
| `.validity`           | Read only  |
| `.validationMessage`  | Read only  |
| `.willValidate`       | Read only  |

### Input methods

| Method                 | Notes                             |
| ---------------------- | --------------------------------- |
| `.focus()`             | Focus the input                   |
| `.blur()`              | Remove focus from the input       |
| `.select()`            | Selects all text within the input |
| `.setSelectionRange()` |                                   |
| `.setRangeText()`      |                                   |
| `.setCustomValidity()` |                                   |
| `.checkValidity()`     |                                   |
| `.reportValidity()`    |                                   |

Refer to https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement for more information on
these methods and properties. Support will vary based on input type.

## Component reference

### `<b-textarea>`

#### Properties

| Property             | Type                 | Default | Description                                                                                                                                                            |
| -------------------- | -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aria-invalid`       | `Boolean`or `String` | `false` | Sets the 'aria-invalid' attribute with the specified value                                                                                                             |
| `autocomplete`       | `String`             |         | Sets the 'autocomplete' attribute value on the form control                                                                                                            |
| `autofocus`          | `Boolean`            | `false` | When set to `true`, attempts to auto-focus the control when it is mounted, or re-activated when in a keep-alive. Does not set the `autofocus` attribute on the control |
| ~~`debounce`~~       | `Number`or `String`  | `0`     | When set to a number of milliseconds greater than zero, will debounce the user input. Has no effect if prop 'lazy' is set                                              |
| `disabled`           | `Boolean`            | `false` | When set to `true`, disables the component's functionality and places it in a disabled state                                                                           |
| `form`               | `String`             |         | ID of the form that the form control belongs to. Sets the `form` attribute on the control                                                                              |
| `formatter`          | `Function`           |         | Reference to a function for formatting the textarea                                                                                                                    |
| `id`                 | `String`             |         | Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed                                          |
| ~~`lazy`~~           | `Boolean`            | `false` | When set, updates the v-model on 'change'/'blur' events instead of 'input'. Emulates the Vue '.lazy' v-model modifier                                                  |
| ~~`max-rows`~~       | `Number`or `String`  |         | The maximum number of rows to show. When provided, the textarea will grow (or shrink) to fit the content up to maximum rows                                            |
| `name`               | `String`             |         | Sets the value of the `name` attribute on the form control                                                                                                             |
| ~~`no-auto-shrink`~~ | `Boolean`            | `false` | When set, prevents the auto height textarea from shrinking to fit the content                                                                                          |
| `no-resize`          | `Boolean`            | `false` | When set, disabled the browser's resize handle which prevents the user from changing the height of the textarea. Automatically set when in auto height mode            |
| `number`             | `Boolean`            | `false` | When set attempts to convert the input value to a native number. Emulates the Vue '.number' v-model modifier                                                           |
| `placeholder`        | `String`             |         | Sets the `placeholder` attribute value on the form control                                                                                                             |
| `plaintext`          | `Boolean`            | `false` | Set the form control as readonly and renders the control to look like plain text (no borders)                                                                          |
| `readonly`           | `Boolean`            | `false` | Sets the `readonly` attribute on the form control                                                                                                                      |
| `required`           | `Boolean`            | `false` | Adds the `required` attribute to the form control                                                                                                                      |
| `rows`               | `Number`or `String`  | `2`     | The minimum number of rows to display. Must be a value greater than 1                                                                                                  |
| `size`               | `String`             |         | Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'                                                                                              |
| `state`              | `Boolean`            | `null`  | Controls the validation state appearance of the component. `true` for valid, `false` for invalid, or `null` for no validation state                                    |
| `trim`               | `Boolean`            | `false` | When set, trims any leading and trailing white space from the input value. Emulates the Vue '.trim' v-model modifier                                                   |
| `wrap`               | `String`             | `soft`  | The value to place on the textarea's 'wrap' attribute. Controls how line break are returned                                                                            |

#### v-model

| Property           | Type                 | Default | Description                                                                                           |
| ------------------ | -------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| default modelValue | `Number` or `String` | `''`    | The current value of the input. Result will always be a string, except when the `number` prop is used |

#### Events

| Name                | Argument                                                                                      | Description                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blur`              | `event` - Native blur event (before any formatting)                                           | Emitted after the input looses focus                                                                                                               |
| `change`            | `modelValue` - Current value of input                                                         | Change event triggered by user interaction. Emitted after any formatting (not including 'trim' or 'number' props) and after the v-model is updated |
| `input`             | `modelValue` - Current value of input                                                         | Input event triggered by user interaction. Emitted after any formatting (not including 'trim' or 'number' props) and after the v-model is updated  |
| `update:modelValue` | `modelValue` - Value of input, after any formatting. Not emitted if the value does not change | Emitted to update the v-model                                                                                                                      |

<script lang="ts" setup>
  import {ref, computed} from 'vue'

  const textEx1 = ref()
  const textStates = ref('')

  const textFormatter = ref('')
  const textFormatter2 = ref('')

  const formatter = (value) => value.toLowerCase()

  const textReadOnly = "This is some text.\nIt is read only and doesn't look like an input."

  const textSelectEx = ref('')
  const textArea = ref<HTMLElement>(null)
  const selectText = () => {
    textArea.value.input.select()
  }
</script>
