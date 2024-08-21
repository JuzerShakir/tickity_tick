class Users::RegistrationsController < Devise::RegistrationsController
  protected
  # after updating the profile
  def after_update_path_for(resource)
    tasks_path
  end
end