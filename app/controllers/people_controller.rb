class PeopleController < ApplicationController
  def create
    forename = params[:forename]
    surname = params[:surname]
    person = Person.new(forename: forename, surname: surname)

    PeopleRepository.save_person(person)

    render json: person
  end
end
