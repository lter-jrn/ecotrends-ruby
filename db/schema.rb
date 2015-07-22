# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "extracat_metadata", primary_key: "entryid", force: :cascade do |t|
    t.string  "docid",                 limit: 30
    t.integer "rev",                   limit: 8
    t.string  "packageid",             limit: 30
    t.string  "site",                  limit: 3
    t.string  "site_name",             limit: 100
    t.string  "station_names",         limit: 500
    t.string  "variable_name",         limit: 200
    t.string  "unit_name",             limit: 100
    t.string  "timescale",             limit: 30
    t.string  "topic",                 limit: 100
    t.string  "subtopic",              limit: 100
    t.date    "begin_date"
    t.date    "end_date"
    t.float   "north_bound"
    t.float   "south_bound"
    t.float   "east_bound"
    t.float   "west_bound"
    t.text    "creator_individuals"
    t.text    "creator_organizations"
    t.text    "keywords"
  end

  add_index "extracat_metadata", ["docid"], name: "extracat_metadata_idx1", using: :btree

end
