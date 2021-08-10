puts "Clearing old data..."
Category.destroy_all
Task.destroy_all

puts "Seeding Categories..."

# create categories

puts "Seeding tasks..."

# create tasks

puts "Done!"