<template>
  <component
    :is="tag"
    :id="id"
    class="tab-pane"
    :class="classes"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot v-if="showSlot" />
  </component>
</template>

<script setup lang="ts">
// import type {BTabProps} from '../../types/components'
import type {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
import {computed, inject} from 'vue'
import {injectionKey} from './BTabs.vue'

interface BTabProps {
  id?: string
  title?: string
  active?: Booleanish
  buttonId?: string
  disabled?: Booleanish
  lazy?: Booleanish
  noBody?: boolean | string
  tag?: string
  titleItemClass?: Array<unknown> | Record<string, unknown> | string
  titleLinkAttributes?: Record<string, unknown>
  titleLinkClass?: Array<unknown> | Record<string, unknown> | string
}

const props = withDefaults(defineProps<BTabProps>(), {
  active: false,
  buttonId: undefined,
  disabled: false,
  lazy: false,
  noBody: false,
  tag: 'div',
  titleItemClass: undefined,
  titleLinkAttributes: undefined,
  titleLinkClass: undefined,
})

const activeBoolean = computed<boolean>(() => resolveBooleanish(props.active))
const disabledBoolean = computed<boolean>(() => resolveBooleanish(props.disabled))
const lazyBoolean = computed<boolean>(() => resolveBooleanish(props.lazy))

const parentData = inject(injectionKey, null)

const computedLazy = computed<boolean>(() => parentData?.lazy || lazyBoolean.value)
const computedActive = computed<boolean>(() => activeBoolean.value && !disabledBoolean.value)
const showSlot = computed<boolean>(() => computedActive.value || !computedLazy.value)
const classes = computed(() => ({
  'active': activeBoolean.value,
  'show': activeBoolean.value,
  'card-body': parentData?.card && props.noBody === false,
}))
</script>