class PeopleRepository
  def self.random_person
    Person.find(Person.pluck(:id).sample)
  end
end
