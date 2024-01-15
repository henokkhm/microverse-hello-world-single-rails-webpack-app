class CreateGreetings < ActiveRecord::Migration[7.1]
  def change
    create_table :greetings do |t|
      t.string :language
      t.string :phrase

      t.timestamps
    end
  end
end
