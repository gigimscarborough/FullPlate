class UpdateReviews2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :nickname
    add_column :reviews, :nickname, :string, null:false
  end
end
