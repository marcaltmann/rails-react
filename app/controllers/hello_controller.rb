class HelloController < ApplicationController
  def default
    number = rand(1000)

    person_name = PeopleRepository.random_person.fullname
    greeting = "Hello #{person_name}!"

    @props = { greeting: greeting, number: number }
  end

  def api
    people = PeopleRepository.all_people

    render({ :json => people })
  end
end
