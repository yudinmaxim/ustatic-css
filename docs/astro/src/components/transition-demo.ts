export type TransitionName = 'fade' | 'slide-up' | 'scale'

const initialized = new WeakSet<HTMLElement>()

function nextFrame (): Promise<void> {
  return new Promise(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  })
}

function waitTransition (el: HTMLElement, timeoutMs = 400): Promise<void> {
  return new Promise(resolve => {
    let done = false
    const finish = () => {
      if (done) return
      done = true
      el.removeEventListener('transitionend', onEnd)
      clearTimeout(timer)
      resolve()
    }
    const onEnd = (e: TransitionEvent) => {
      if (e.target === el) finish()
    }
    el.addEventListener('transitionend', onEnd)
    const timer = setTimeout(finish, timeoutMs)
  })
}

function clearPhases (el: HTMLElement, name: TransitionName) {
  for (const phase of ['enter-from', 'enter-active', 'enter-to', 'leave-from', 'leave-active', 'leave-to']) {
    el.classList.remove(`${name}-${phase}`)
  }
}

async function runEnter (el: HTMLElement, name: TransitionName) {
  clearPhases(el, name)
  el.classList.remove('hidden')
  el.classList.add(`${name}-enter-from`, `${name}-enter-active`)
  await nextFrame()
  el.classList.remove(`${name}-enter-from`)
  el.classList.add(`${name}-enter-to`)
  await waitTransition(el)
  clearPhases(el, name)
}

async function runLeave (el: HTMLElement, name: TransitionName) {
  clearPhases(el, name)
  el.classList.add(`${name}-leave-from`, `${name}-leave-active`)
  await nextFrame()
  el.classList.remove(`${name}-leave-from`)
  el.classList.add(`${name}-leave-to`)
  await waitTransition(el)
  el.classList.add('hidden')
  clearPhases(el, name)
}

function setupRoot (root: HTMLElement) {
  if (initialized.has(root)) return
  initialized.add(root)

  const name = root.dataset.transitionName as TransitionName | undefined
  const btn = root.querySelector<HTMLButtonElement>('.transition-demo-toggle')
  const panel = root.querySelector<HTMLElement>('.transition-demo-panel')
  if (!name || !btn || !panel) return

  let visible = false
  let busy = false

  btn.addEventListener('click', async () => {
    if (busy) return
    busy = true
    btn.disabled = true
    btn.classList.add('opacity-50', 'cursor-disabled')

    try {
      if (visible) {
        await runLeave(panel, name)
        visible = false
        btn.textContent = 'Показать'
      } else {
        await runEnter(panel, name)
        visible = true
        btn.textContent = 'Скрыть'
      }
    } finally {
      btn.disabled = false
      btn.classList.remove('opacity-50', 'cursor-disabled')
      busy = false
    }
  })
}

export function initTransitionDemos () {
  document
    .querySelectorAll<HTMLElement>('[data-transition-demo]')
    .forEach(setupRoot)
}
