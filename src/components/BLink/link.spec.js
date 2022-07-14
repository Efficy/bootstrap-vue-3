import {mount} from '@vue/test-utils'
//import {createContainer} from '../../../tests/utils'
import BLink from './BLink.vue'
import {describe, expect, it, vitest} from 'vitest'

describe('b-link', () => {
  it('has expected default structure', async () => {
    const wrapper = mount(BLink)

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('#')
    expect(wrapper.attributes('target')).toEqual('_self')
    expect(wrapper.attributes('rel')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.text()).toEqual('')

    wrapper.unmount()
  })

  it('renders content from default slot', async () => {
    const wrapper = mount(BLink, {
      slots: {
        default: 'foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('#')
    expect(wrapper.attributes('target')).toEqual('_self')
    expect(wrapper.attributes('rel')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.text()).toEqual('foobar')

    wrapper.unmount()
  })

  it('sets attribute href to user supplied value', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('/foobar')
    expect(wrapper.attributes('target')).toEqual('_self')
    expect(wrapper.attributes('rel')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.text()).toEqual('')

    wrapper.unmount()
  })

  it('sets attribute href when user supplied href is hash target', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '#foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('#foobar')
    expect(wrapper.attributes('target')).toEqual('_self')
    expect(wrapper.attributes('rel')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.text()).toEqual('')

    wrapper.unmount()
  })

  it('should set href to string `to` prop', async () => {
    const wrapper = mount(BLink, {
      props: {
        to: '/foobar',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('/foobar')
    expect(wrapper.attributes('target')).toEqual('_self')
    expect(wrapper.attributes('rel')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.text()).toEqual('')

    wrapper.unmount()
  })

  it('should set href to path from `to` prop', async () => {
    const wrapper = mount(BLink, {
      props: {
        to: {path: '/foobar'},
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('/foobar')
    expect(wrapper.attributes('target')).toEqual('_self')
    expect(wrapper.attributes('rel')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
    expect(wrapper.classes().length).toBe(0)
    expect(wrapper.text()).toEqual('')

    wrapper.unmount()
  })

  it('should default rel to `noopener` when target==="_blank"', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/foobar',
        target: '_blank',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('/foobar')
    expect(wrapper.attributes('target')).toEqual('_blank')
    expect(wrapper.attributes('rel')).toEqual('noopener')
    expect(wrapper.classes().length).toBe(0)

    wrapper.unmount()
  })

  it('should render the given rel to when target==="_blank"', async () => {
    const wrapper = mount(BLink, {
      props: {
        href: '/foobar',
        target: '_blank',
        rel: 'alternate',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toEqual('/foobar')
    expect(wrapper.attributes('target')).toEqual('_blank')
    expect(wrapper.attributes('rel')).toEqual('alternate')
    expect(wrapper.classes().length).toBe(0)

    wrapper.unmount()
  })

  it('should add "active" class when prop active=true', async () => {
    const wrapper = mount(BLink, {
      props: {
        active: true,
      },
    })

    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.classes()).toContain('active')
    expect(wrapper.classes().length).toBe(1)

    wrapper.unmount()
  })

  it('should add aria-disabled="true" when disabled', async () => {
    const wrapper = mount(BLink, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.attributes('aria-disabled')).toBeDefined()
    expect(wrapper.attributes('aria-disabled')).toEqual('true')

    wrapper.unmount()
  })

  it("should add '.disabled' class when prop disabled=true", async () => {
    const wrapper = mount(BLink, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.classes()).toContain('disabled')

    wrapper.unmount()
  })

  describe('click handling', () => {
    it('should invoke click handler bound by Vue when clicked on', async () => {
      let called = 0
      let evt = null
      const wrapper = mount(BLink, {
        attrs: {
          onClick: (e) => {
            evt = e
            called++
          },
        },
      })

      expect(wrapper.element.tagName).toBe('A')
      expect(called).toBe(0)
      expect(evt).toEqual(null)

      await wrapper.find('a').trigger('click')
      expect(called).toBe(1)
      expect(evt).toBeInstanceOf(MouseEvent)

      wrapper.unmount()
    })

    it('should invoke multiple click handlers bound by Vue when clicked on', async () => {
      const spy1 = vitest.fn()
      const spy2 = vitest.fn()
      const wrapper = mount(BLink, {
        attrs: {
          onClick: [spy1, spy2],
        },
      })

      expect(wrapper.element.tagName).toBe('A')
      expect(spy1).not.toHaveBeenCalled()
      expect(spy2).not.toHaveBeenCalled()

      await wrapper.find('a').trigger('click')
      expect(spy1).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()

      wrapper.unmount()
    })

    it('should NOT invoke click handler bound by Vue when disabled and clicked', async () => {
      let called = 0
      let evt = null
      const wrapper = mount(BLink, {
        props: {
          disabled: true,
        },
        attrs: {
          onClick: (e) => {
            evt = e
            called++
          },
        },
      })

      expect(wrapper.element.tagName).toBe('A')
      expect(called).toBe(0)
      expect(evt).toEqual(null)

      await wrapper.find('a').trigger('click')
      expect(called).toBe(0)
      expect(evt).toEqual(null)

      wrapper.unmount()
    })

    it('should NOT invoke click handler bound via "addEventListener" when disabled and clicked', async () => {
      const spy = vitest.fn()
      const wrapper = mount(BLink, {
        props: {
          disabled: true,
        },
      })

      expect(wrapper.element.tagName).toBe('A')
      wrapper.find('a').element.addEventListener('click', spy)

      await wrapper.find('a').trigger('click')
      expect(spy).not.toHaveBeenCalled()

      wrapper.unmount()
    })
  })

  /*
  describe('router-link support', () => {
    it('works', async () => {
      // Fake Gridsome `<g-link>` component
      const GLink = {
        name: 'GLink',
        props: {
          to: {
            type: [String, Object],
            default: ''
          }
        },
        render() {
          // We just us a simple A tag to render the
          // fake `<g-link>` and assume `to` is a string
          return h('a', { attrs: { href: this.to } }, this.$slots.default())
        }
      }

      const App = {
        render() {
          return h('main', [
            // router-link
            h(BLink, { props: { to: '/a' } }, 'to-a'),
            // regular link
            h(BLink, { props: { href: '/a' } }, 'href-a'),
            // router-link
            h(BLink, { props: { to: { path: '/b' } } }, 'to-path-b'),
            // regular link
            h(BLink, { props: { href: '/b' } }, 'href-a'),
            // g-link
            h(BLink, { props: { routerComponentName: 'g-link', to: '/a' } }, 'g-link-a'),
            h('router-view')
          ])
        }
      }

      const router = createRouter({
        history: createWebHistory(),
        routes: [
          { path: '/', component: { name: 'R', template: '<div class="r">ROOT</div>' } },
          { path: '/a', component: { name: 'A', template: '<div class="a">A</div>' } },
          { path: '/b', component: { name: 'B', template: '<div class="a">B</div>' } }
        ]
      })

      router.push('/')
      await router.isReady()

      const wrapper = mount(App, {
        attachTo: createContainer(),
        global: {
          components: { GLink, BLink },
          plugins: [router]
        }
      })

      expect(wrapper.vm).toBeDefined()
      expect(wrapper.element.tagName).toBe('MAIN')

      const $links = wrapper.findAllComponents(BLink)
      expect($links.length).toBe(5)

      expect($links[0].exists()).toBe(true)
      expect($links[0].findComponent(RouterLink).exists()).toBe(true)

      expect($links[1].exists()).toBe(true)
      expect($links[1].findComponent(RouterLink).exists()).toBe(false)

      expect($links[2].exists()).toBe(true)
      expect($links[2].findComponent(RouterLink).exists()).toBe(true)

      expect($links[3].exists()).toBe(true)
      expect($links[3].findComponent(RouterLink).exists()).toBe(false)

      expect($links[4].exists()).toBe(true)
      expect($links[4].findComponent(GLink).exists()).toBe(true)

      wrapper.unmount()
    })
  })
  */
})
