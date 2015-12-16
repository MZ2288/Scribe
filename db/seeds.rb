# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
20.times do
  Note.create!(title: "test", body: "body-test", user_id: 1)
end

20.times do |i|
  Notebook.create!(title: "this is book #{i}", user_id: 1)
end
