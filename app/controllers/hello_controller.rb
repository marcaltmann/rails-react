class HelloController < ApplicationController
  def default
    greeting = params[:greeting]
    number = rand(1000)

    @person_name = random_person.fullname

    @props = { greeting: greeting, number: number }
  end

  private

  def random_person
    Person.find(Person.pluck(:id).sample)
  end
end
