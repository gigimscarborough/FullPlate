class Fixing < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :special_request
    remove_column :reservations, :occasion
    add_column :reservations, :special_request, :string
    add_column :reservations, :occasion, :string
 
  end
end
