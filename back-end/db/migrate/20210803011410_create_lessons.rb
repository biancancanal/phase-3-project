class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :name
      t.integer :teacher_id
      # t.integer :lesson_id
    end 
  end
end
