class HelloController < ApplicationController
  def default
    greeting = params[:greeting]
    number = rand(1000)

    @person_name = PeopleRepository.random_person.fullname

    @props = { greeting: greeting, number: number }
  end
end
