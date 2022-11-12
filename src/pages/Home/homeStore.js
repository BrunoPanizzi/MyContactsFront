import create from 'zustand'

export const useHome = create((set, get) => ({
  contacts: [],
  filteredContacts: [],
  error: false,
  loading: false,
  order: 'ascending',
  search: '',

  setContacts(contacts, order) {
    const Order = order ?? get().order // weird but here to ensure that the contacts are sorted right

    const sortedContacts = contacts.sort((a, b) => {
      if (Order === 'ascending') {
        return a.name > b.name ? 1 : -1
      }
      return a.name < b.name ? 1 : -1
    })
    set(() => ({
      contacts: sortedContacts,
      filteredContacts: sortedContacts.filter((contact) =>
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
  setOrder(order) {
    get().setContacts(get().contacts, order)
    set(() => ({
      order,
    }))
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
