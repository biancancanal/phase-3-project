require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "response success"}.to_json ]]
    elsif req.path.match(/lessons/)
      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read)
        teacher_id = req.path.split('/teachers/').last.split('/lessons').last
        teacher = Teacher.find_by(id: teacher_id)
        lesson = teacher.lessons.create(name: input["name"]) #understand methods / reasoning for create 
        return [200, { 'Content-Type' => 'application/json' }, [ lesson.to_json ]] #return lesson
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        # teacher_id = req.path.split('/teachers/').last.split('/lessons/').first
        # teacher = Teacher.find_by(id: teacher_id)
        lesson_id = req.path.split('/teachers/').last.split('/lessons/').last
        Lesson.find_by(id: lesson_id).delete 
        return [200, { 'Content-Type' => 'application/json' }, [ {:message => "Task deleted!"}.to_json ]]
      elsif req.env["REQUEST_METHOD"] == "PATCH"
        input = JSON.parse(req.body.read)
        lesson_id = req.path.split('/teachers/').last.split('/lessons/').last
        lesson = Lesson.find_by(id: lesson_id)
        puts "Hello World"
        lesson.update(input)
        return [200, { 'Content-Type' => 'application/json' }, [ lesson.to_json ]]
      end
    elsif req.path.match(/teachers/) 
      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read) #grabs body from config object, sent as payload 
        teacher = Teacher.create(name: input["name"]) #add to Active record, add to database
        return [200, { 'Content-Type' => 'application/json' }, [ teacher.to_json ]]
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        teacher_id = req.path.split('/teachers/').last.split('/lessons/').first
        Teacher.find_by(id: teacher_id).delete
        return [200, { 'Content-Type' => 'application/json' }, [ {:message => "task deleted!"}.to_json ]]
      else
        if req.path.split("/teachers").length == 0
          return [200, { 'Content-Type' => 'application/json' }, [ Teacher.all.to_json ]]
        else 
          teacher_id = req.path.split("/teachers/").last
          return [200, { 'Content-Type' => 'application/json' }, [ Teacher.find_by(id:teacher_id).to_json({:include => :lessons}) ]]
        end
      end 

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
