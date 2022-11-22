class ContactMapper {
  toDomain(persistanceContact) {
    return {
      name: persistanceContact.name,
      email: persistanceContact.email,
      phone: persistanceContact.phone,
      id: persistanceContact.id,
      categoryId: persistanceContact.category_id,
      categoryName: persistanceContact.category_name,
    }
  }
  toPersistance(domainContact) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      id: domainContact.id,
      category_id: domainContact.categoryId,
    }
  }
}

export default new ContactMapper()
