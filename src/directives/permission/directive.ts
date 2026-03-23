import { hasPermission } from './index'

export const permissionDirective = {
  mounted(el: HTMLElement, binding: any) {
    const code = binding.value
    if (!hasPermission(code)) {
      el.remove()
    }
  }
}