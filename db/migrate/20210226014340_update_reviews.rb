class UpdateReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :nickname, :string
  end
end
