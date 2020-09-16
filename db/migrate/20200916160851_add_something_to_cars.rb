class AddSomethingToCars < ActiveRecord::Migration[6.0]
  def change
    change_table :vehicles do |t|
      t.belongs_to :brand
    end
  end
end
