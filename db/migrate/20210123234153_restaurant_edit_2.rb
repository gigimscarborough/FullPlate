class RestaurantEdit2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :opening_time
    remove_column :restaurants, :closing_time
    add_column :restaurants, :operation_hours, :string, null: false
  end
end
