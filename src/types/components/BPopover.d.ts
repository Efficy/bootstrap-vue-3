import type {ColorVariant} from '@/types'
import type Popover from 'bootstrap/js/dist/popover'
import type {ComponentPublicInstance} from 'vue'
// Props
export interface Props {
  id?: string
  title?: string
  content?: string
  container?: string | ComponentPublicInstance<HTMLElement> | HTMLElement
  noninteractive?: boolean
  placement?: Popover.Options['placement']
  target?: string | ComponentPublicInstance<HTMLElement> | HTMLElement
  delay?: number | DelayObject
  triggers?: Popover.Options['trigger']
  show?: boolean
  variant?: ColorVariant
  html?: boolean
  sanitize?: boolean
  offset?: Popover.Options['offset']
}
// Emits
export interface Emits {
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
  (e: 'inserted'): void
}
// Other
export interface DelayObject {
  show: number
  hide: number
}
