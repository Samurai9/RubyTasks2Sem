module Mutations
    class DestroyCard < Mutations::BaseMutation
        argument :id, ID, required:true
        # argument :method, String, required:true
        
        
        type Types::CardType

        def resolve(id:)
            Card.find(id).destroy!
        end
    end
end