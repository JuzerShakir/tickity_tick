class ApplicationController < ActionController::Base
  private
  def after_sign_in_path_for(resource)
    tasks_path
  end

  def after_sign_out_path_for(resource)
    root_path
  end
end
