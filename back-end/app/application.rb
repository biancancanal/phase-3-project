require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    #binding.pry
    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "response success"}.to_json ]]
    elsif req.path.match(/lessons/)

    elsif req.path.match(/teachers/) 
      if req.env["REQUEST_METHOD"] == "POST"
        input = JSON.parse(req.body.read)
        teacher = Teacher.create(name: input["name"])
        return [200, { 'Content-Type' => 'application/json' }, [ Teacher.to_json ]]
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
