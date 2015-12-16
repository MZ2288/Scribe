class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :notebooks, [:title, :user_id], unique: true, using: :btree
  end
end
