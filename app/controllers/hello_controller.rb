class HelloController < ApplicationController
  def default
    greeting = params[:greeting]
    number = rand(1000)

    @props = { greeting: greeting, number: number }
  end
end
