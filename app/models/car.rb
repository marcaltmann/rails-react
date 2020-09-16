class Car < Vehicle
  belongs_to :brand

  scope :yellow, -> { where(color: "yellow") }
end
