class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :description, limit: 100, null: false
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
