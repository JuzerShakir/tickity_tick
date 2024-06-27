class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @tasks = current_user.tasks.order(:completed)
    @task = current_user.tasks.new
  end

  def create
    @task = current_user.tasks.new(task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_path, notice: 'Task created successfully' }
      else
        @tasks = current_user.tasks.order(:completed)
        format.html { render :index, status: :unprocessable_entity }
      end
    end
  end

  def toggle
    @task = Task.find(params[:id])
    @task.update(completed: params[:completed])
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])

    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to tasks_path }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    message = "Task deleted successfully"
    flash.now[:notice] = message

    respond_to do |format|
      format.html { redirect_to tasks_path, notice: message }
      format.turbo_stream do
        render turbo_stream: [
          turbo_stream.remove(@task),
          turbo_stream.update(:flash_msg, partial: "shared/flash" )
      ]
      end
    end
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end
end
