class PeopleController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    forename = params[:forename]
    surname = params[:surname]
    person = Person.new(forename: forename, surname: surname)

    PeopleRepository.save_person(person)

    render json: person
  end
end
