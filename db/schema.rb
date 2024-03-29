# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_02_26_180056) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id", "user_id"], name: "index_favorites_on_restaurant_id_and_user_id", unique: true
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "guest_id", null: false
    t.integer "guest_count", null: false
    t.datetime "reservation_datetime", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone_number", null: false
    t.string "special_request"
    t.string "occasion"
    t.index ["guest_id"], name: "index_reservations_on_guest_id"
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "phone_number", null: false
    t.text "description", null: false
    t.string "price_range", null: false
    t.string "cuisine_type", null: false
    t.text "website_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city", null: false
    t.string "operation_hours", null: false
    t.string "neighborhood", null: false
    t.string "noise_level", null: false
    t.string "dining_style", null: false
    t.string "dress_code", null: false
    t.index ["cuisine_type"], name: "index_restaurants_on_cuisine_type"
    t.index ["name"], name: "index_restaurants_on_name"
    t.index ["price_range"], name: "index_restaurants_on_price_range"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "guest_id", null: false
    t.text "body", null: false
    t.datetime "visited", null: false
    t.integer "food_rating", null: false
    t.integer "service_rating", null: false
    t.integer "ambience_rating", null: false
    t.integer "value_rating", null: false
    t.integer "overall_rating", null: false
    t.float "rating", null: false
    t.boolean "would_recommend", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "nickname", null: false
    t.integer "reservation_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "dining_city", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
