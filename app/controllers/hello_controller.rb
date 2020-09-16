class HelloController < ApplicationController
  http_basic_authenticate_with name: "marc", password: "secret"

  def default
    @props = { authToken: form_authenticity_token }
  end

  def api
    people = PeopleRepository.all_people

    render({ :json => people })
  end
end
