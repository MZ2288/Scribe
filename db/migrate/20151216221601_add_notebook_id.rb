class AddNotebookId < ActiveRecord::Migration
  def change
    add_column :notes, :notebook_id, :integer, null: false
    add_index :notes, :notebook_id
  end
end
