class Note < ActiveRecord::Base
  validates :title, :body, :user_id, presence: true

  belongs_to :user 
end
