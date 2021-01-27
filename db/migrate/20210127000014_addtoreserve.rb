class Addtoreserve < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :email, :string, null:false
    add_column :reservations, :first_name, :string, null:false
    add_column :reservations, :last_name, :string, null:false
    add_column :reservations, :phone_number, :string, null:false
    add_column :reservations, :occasion, :string, null:false
    add_column :reservations, :special_request, :string, null:false
  end
end
