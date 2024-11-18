import { resolveComponent, h, defineComponent } from 'vue'

function useDynamicComponent(name: string) {
  const DynamicComponent = resolveComponent(name)
  return DynamicComponent
}

export default defineComponent({
  setup() {
    const ComponentName = 'Message'

    const DynamicComponent = useDynamicComponent(ComponentName)

    return () => <div>{h(DynamicComponent)}</div>
  },
})
