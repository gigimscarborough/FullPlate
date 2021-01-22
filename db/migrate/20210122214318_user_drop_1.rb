class UserDrop1 < ActiveRecord::Migration[5.2]
  def change

    drop_table :cities
    add_column :users, :dining_city, :string, null: false
    add_column :restaurants, :city, :string, null: false
    remove_column :users, :dining_city_id
    remove_column :restaurants, :city
    
    

  end
end
