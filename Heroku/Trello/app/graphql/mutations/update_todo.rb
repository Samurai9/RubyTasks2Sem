module Mutations
    class UpdateTodo < Mutations::BaseMutation
        argument :id, ID, required: true
        argument :title, String, required: false
        argument :description, String, required: false

        type Types::TodoType

        def resolve(id:, title:, description:)
            # TODO check title or/and desc == null
            todo = Todo.find(id)
            todo.update!(title: title, description: description)
            todo
            # Todo.find(id).update!(title: title, description: description)
        end
    end
end