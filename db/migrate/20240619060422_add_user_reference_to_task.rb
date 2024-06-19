class AddUserReferenceToTask < ActiveRecord::Migration[7.1]
  def change
    change_table :tasks do |t|
      t.references :user, null: false, foreign_key: true
    end
  end
end
