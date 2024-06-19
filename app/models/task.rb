class Task < ApplicationRecord
  belongs_to :user, touch: true

  validates :description, length: { in: 3..100}
end
