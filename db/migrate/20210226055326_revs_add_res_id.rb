class RevsAddResId < ActiveRecord::Migration[5.2]
  def change
     add_column :reviews, :reservation_id, :integer, null:false
  end
end
