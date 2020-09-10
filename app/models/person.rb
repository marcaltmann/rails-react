class Person < ApplicationRecord
  def fullname
    "#{forename} #{surname}"
  end
end
