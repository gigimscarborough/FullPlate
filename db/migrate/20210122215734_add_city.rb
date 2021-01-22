class AddCity < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :city, :string, null: false
    remove_column :restaurants, :city_id
  end
end
