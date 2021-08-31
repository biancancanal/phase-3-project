class Lesson < ActiveRecord::Base
    belongs_to :teacher
    
    # def  live code: instance method that adds a name and a description 
    #     @name = "name"
    # end 
end