import create from 'zustand'

export const useToast = create((set) => ({
  toasts: [],

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),

  addToast: (text, type = 'default', duration = 15) =>
    set((state) => {
      const id = Math.random()

      setTimeout(() => state.removeToast(id), duration * 1000)

      return {
        toasts: [...state.toasts, { id, duration, type, text }],
      }
    }),
}))
