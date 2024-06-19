class Task < ApplicationRecord
  belongs_to :user

  validates :description, length: { in: 3..100}
end
