class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id, null: false
      t.integer :guest_id, null: false
      t.text :body, null: false
      t.datetime :visited, null: false
      t.integer :food_rating, null: false
      t.integer :service_rating, null: false
      t.integer :ambience_rating, null: false
      t.integer :value_rating, null: false
      t.integer :overall_rating, null: false
      t.float :rating, null: false
      t.boolean :would_recommend, null: false

      t.timestamps
    end
  end
end
