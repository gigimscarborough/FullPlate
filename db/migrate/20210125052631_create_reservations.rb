class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :restaurant_id, null:false
      t.integer :guest_id, null:false
      t.integer :guest_count, null:false
      t.datetime :reservation_datetime, null:false
      t.timestamps
    end
    add_index :reservations, :restaurant_id
    add_index :reservations, :guest_id

  end
end
