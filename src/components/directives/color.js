export default {
  bind(el, bindings /*,vnode*/) {
    //el.style.color = "red"
    //el.style.color = bindings.value

    const fontModifier = bindings.modifiers["font"]
    if (fontModifier) el.style.fontSize = "50px"

    const delayModifier = bindings.modifiers["delay"]
    let delay = 0
    if (delayModifier) {
      delay = 2000
    }
    setTimeout(() => {
      const arg = bindings.arg
      el.style[arg] = bindings.value
    }, delay)

    console.log("bind")
  },
  inserted(/*el, bindings, vnode*/) {
    console.log("inserted")
  },
  update(/*el, bindings, vnode, oldVnode*/) {
    console.log("update")
  },
  componentUpdated(/*el, bindings, vnode, oldVnode*/) {
    console.log("componentUpdated")
  },
  unbind() {
    console.log("unbind")
  }
}
