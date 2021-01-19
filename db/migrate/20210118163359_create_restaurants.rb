class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :city_id, null: false
      t.string :address, null: false
      t.string :phone_number, null: false
      t.text :description, null: false
      t.time :opening_time, null: false
      t.time :closing_time, null: false
      t.string :price_range, null: false
      t.string :cuisine_type, null: false
      t.text :website_url
      t.timestamps
    end

    add_index :restaurants, :city_id
    add_index :restaurants, :name
    add_index :restaurants, :price_range
    add_index :restaurants, :cuisine_type
  end
end
