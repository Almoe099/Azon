class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: true, null: false
      t.references :product, foreign_key: true, null: false
      t.text :review, null: false
      t.integer :rating, null: false

      t.timestamps
    end
  end
end
