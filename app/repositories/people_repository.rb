class PeopleRepository
  def self.all_people
    Person.all.to_a
  end

  def self.random_person
    Person.find(Person.pluck(:id).sample)
  end

  def self.save_person(person)
    person.save
  end
end
