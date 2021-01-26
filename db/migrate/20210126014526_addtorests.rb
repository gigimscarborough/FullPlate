class Addtorests < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :neighborhood, :string, null:false
    add_column :restaurants, :noise_level, :string, null:false
    add_column :restaurants, :dining_style, :string, null:false
    add_column :restaurants, :dress_code, :string, null:false
  end
end
