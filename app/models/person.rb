class Person < ApplicationRecord
  validates :forename, presence: true, length: { minimum: 3 }
  validates :surname, presence: true, length: { minimum: 3 }

  def fullname
    "#{forename} #{surname}"
  end
end
