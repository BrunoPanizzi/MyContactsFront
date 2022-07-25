import create from 'zustand'

export const useContacts = create((set, get) => ({
  contacts: [],
  filteredContacts: [],
  error: false,
  loading: false,
  search: '',

  setContacts(contacts) {
    set(() => ({
      contacts,
      filteredContacts: contacts.filter((contact) =>
        contact.name.toLowerCase().includes(get().search.trim().toLowerCase())
      ),
    }))
  },
  setError(error) {
    set(() => ({ error }))
  },
  setLoading(loading) {
    set(() => ({ loading }))
  },
  setSearch(search) {
    set((state) => ({
      search,
      filteredContacts: state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    }))
  },
}))
