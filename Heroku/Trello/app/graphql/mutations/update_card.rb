module Mutations
    class UpdateCard < Mutations::BaseMutation
        argument :id, ID, required: true
        argument :title, String, required: false

        type Types::CardType

        def resolve(id:, title:)
            # TODO check title or/and desc == null
            card = Card.find(id)
            card.update!(title: title)
            card
            # Todo.find(id).update!(title: title, description: description)
        end
    end
end