import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import {createContainer, waitNT} from '../../../tests/utils'
import BFormCheckboxGroup from './BFormCheckboxGroup.vue'
import BFormCheckbox from './BFormCheckbox.vue'

const global = {components: {BFormCheckbox}}

describe('form-checkbox-group', () => {
  // --- Structure, class and attributes tests ---

  it('default has structure <div></div>', async () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(0)

    wrapper.unmount()
  })

  it('default has no classes on wrapper other than focus ring', async () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.classes()).toContain('bv-no-focus-ring')
    expect(wrapper.classes().length).toEqual(1)

    wrapper.unmount()
  })

  it('default has auto ID set', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
    })

    await waitNT(wrapper.vm)

    // Auto ID not generated until after mount
    expect(wrapper.attributes('id')).toBeDefined()

    wrapper.unmount()
  })

  it('default has tabindex set to -1', async () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('tabindex')).toBeDefined()
    expect(wrapper.attributes('tabindex')).toBe('-1')

    wrapper.unmount()
  })

  it('default does not have aria-required set', async () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('aria-required')).toBeUndefined()

    wrapper.unmount()
  })

  it('default does not have aria-invalid set', async () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.unmount()
  })

  it('default has attribute role=group', async () => {
    const wrapper = mount(BFormCheckboxGroup, {global})

    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('group')

    wrapper.unmount()
  })

  it('default has user provided ID', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        id: 'test',
      },
    })

    expect(wrapper.attributes('id')).toBeDefined()
    expect(wrapper.attributes('id')).toBe('test')

    wrapper.unmount()
  })

  it('default has class was-validated when validated=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        validated: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes()).toContain('was-validated')

    wrapper.unmount()
  })

  it('default has attribute aria-invalid=true when state=false', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: false,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  it('default does not have attribute aria-invalid when state=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.unmount()
  })

  it('default does not have attribute aria-invalid when state=null', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        state: null,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.unmount()
  })

  it('default has attribute aria-invalid=true when aria-invalid=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        ariaInvalid: true,
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  it('default has attribute aria-invalid=true when aria-invalid="true"', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        ariaInvalid: 'true',
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  it('default has attribute aria-invalid=true when aria-invalid=""', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        ariaInvalid: '',
      },
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.unmount()
  })

  // --- Button mode structure ---

  it('button mode has classes button-group and button-group-toggle', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')

    wrapper.unmount()
  })

  it('button mode has classes button-group-vertical and button-group-toggle when stacked=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
        stacked: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(2)
    expect(wrapper.classes()).toContain('btn-group-vertical')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')

    wrapper.unmount()
  })

  it('button mode has size class when size prop set', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
        size: 'lg',
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(3)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes()).toContain('btn-group-lg')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')

    wrapper.unmount()
  })

  it('button mode has size class when size prop set and stacked', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        buttons: true,
        stacked: true,
        size: 'lg',
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes().length).toBe(3)
    expect(wrapper.classes()).toContain('btn-group-vertical')
    expect(wrapper.classes()).toContain('btn-group-lg')
    expect(wrapper.classes()).toContain('bv-no-focus-ring')

    wrapper.unmount()
  })

  it('button mode button variant works', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        modelValue: [],
        buttons: true,
        buttonVariant: 'primary',
        options: [
          {text: 'button 1', value: 'first'},
          {text: 'button 2', value: 'second'},
          {text: 'button 3', value: 'third', props: {buttonVariant: 'danger'}},
        ],
      },
    })

    expect(wrapper).toBeDefined()
    await waitNT(wrapper.vm)
    // Find all the labels with `.btn` class
    const $btns = wrapper.findAll('label.btn')
    expect($btns).toBeDefined()
    expect($btns.length).toBe(3)
    // Expect them to have the correct variant classes
    expect($btns[0].classes()).toContain('btn-primary')
    expect($btns[1].classes()).toContain('btn-primary')
    expect($btns[2].classes()).toContain('btn-danger')

    wrapper.unmount()
  })

  // --- Functionality testing ---

  it('has checkboxes via options array', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
      },
    })

    // expect(wrapper.vm.isRadioGroup).toEqual(false)
    expect(wrapper.vm.modelValue).toEqual([])
    expect(wrapper.findAll('input[type=checkbox]').length).toBe(3)

    wrapper.unmount()
  })

  it('has checkboxes via options array which respect disabled', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: [{text: 'one'}, {text: 'two'}, {text: 'three', disabled: true}],
        modelValue: [],
      },
    })

    expect(wrapper.classes()).toBeDefined()

    expect(wrapper.vm.modelValue).toEqual([])
    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    expect($inputs[0].attributes('disabled')).toBeUndefined()
    expect($inputs[1].attributes('disabled')).toBeUndefined()
    expect($inputs[2].attributes('disabled')).toBeDefined()

    wrapper.unmount()
  })

  it('emits change event when checkbox clicked', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
      },
      attrs: {
        'onUpdate:modelValue': (modelValue) => wrapper.setProps({modelValue}),
      },
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.modelValue).toEqual([])

    await $inputs[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one'])
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(['one'])
    expect(wrapper.emitted('update:modelValue')).toBeDefined()
    expect(wrapper.emitted('update:modelValue').length).toBe(1)
    expect(wrapper.emitted('update:modelValue')[0][0]).toEqual(['one'])

    await $inputs[2].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['one', 'three'])
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(['one', 'three'])
    expect(wrapper.emitted('update:modelValue').length).toBe(2)
    expect(wrapper.emitted('update:modelValue')[1][0]).toEqual(['one', 'three'])

    await $inputs[0].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['three'])
    expect(wrapper.emitted('change').length).toBe(3)
    expect(wrapper.emitted('change')[2][0]).toEqual(['three'])
    expect(wrapper.emitted('update:modelValue').length).toBe(3)
    expect(wrapper.emitted('update:modelValue')[2][0]).toEqual(['three'])

    await $inputs[1].trigger('click')
    expect(wrapper.vm.modelValue).toEqual(['three', 'two'])
    expect(wrapper.emitted('change').length).toBe(4)
    expect(wrapper.emitted('change')[3][0]).toEqual(['three', 'two'])
    expect(wrapper.emitted('update:modelValue').length).toBe(4)
    expect(wrapper.emitted('update:modelValue')[3][0]).toEqual(['three', 'two'])

    wrapper.unmount()
  })

  it('checkboxes reflect group checked v-model', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: ['two'],
      },
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.modelValue).toEqual(['two'])
    expect($inputs[0].element.checked).toBe(false)
    expect($inputs[1].element.checked).toBe(true)
    expect($inputs[2].element.checked).toBe(false)

    await wrapper.setProps({modelValue: ['three', 'one']})
    expect(wrapper.vm.modelValue).toEqual(['three', 'one'])
    expect($inputs[0].element.checked).toBe(true)
    expect($inputs[1].element.checked).toBe(false)
    expect($inputs[2].element.checked).toBe(true)

    wrapper.unmount()
  })

  it('child checkboxes have is-valid classes when group state set to valid', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
        state: true,
      },
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).toContain('is-valid')
    })

    wrapper.unmount()
  })

  it('child checkboxes have is-invalid classes when group state set to invalid', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
        state: false,
      },
    })

    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).toContain('is-invalid')
    })

    wrapper.unmount()
  })

  it('child checkboxes have disabled attribute when group disabled', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        options: ['one', 'two', 'three'],
        modelValue: [],
        disabled: true,
      },
    })

    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.attributes('disabled')).toBeDefined()
    })

    wrapper.unmount()
  })

  it('child checkboxes have required attribute when group required', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        name: 'group',
        options: ['one', 'two', 'three'],
        modelValue: [],
        required: true,
      },
    })

    expect(wrapper.vm.modelValue).toEqual([])

    const $inputs = wrapper.findAll('input[type=checkbox]')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.attributes('required')).toBeDefined()
      expect($input.attributes('aria-required')).toBe('true')
    })

    wrapper.unmount()
  })

  it('child checkboxes have class form-check-inline when stacked=false', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        name: 'group',
        options: ['one', 'two', 'three'],
        modelValue: [],
        stacked: false,
      },
    })

    const $inputs = wrapper.findAll('div.form-check')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).toContain('form-check-inline')
    })

    wrapper.unmount()
  })

  it('child checkboxes do not have class custom-control-inline when stacked=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: createContainer(),
      global,
      props: {
        name: 'group',
        options: ['one', 'two', 'three'],
        modelValue: [],
        stacked: true,
      },
    })

    const $inputs = wrapper.findAll('div.form-check')
    expect($inputs.length).toBe(3)
    $inputs.forEach(($input) => {
      expect($input.classes()).not.toContain('form-check-inline')
    })

    wrapper.unmount()
  })
})
