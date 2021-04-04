module Types
  class MutationType < Types::BaseObject
    field :create_card, mutation: Mutations::CreateCard
    field :destroy_card, mutation: Mutations::DestroyCard
    field :update_card, mutation: Mutations::UpdateCard

    field :create_todo, mutation: Mutations::CreateTodo
    field :destroy_todo, mutation: Mutations::DestroyTodo
    field :update_todo, mutation: Mutations::UpdateTodo
  end

  # mutation {
  
  #   #   createCard(input: {title: "AAAAA"}) {
  #   #     id
  #   #     title
  #   #   }
      
  #   #   updateCard(input: {id: 8, title: "aaaaa"}) {
  #   #     id
  #   #     title
  #   #   }
      
  #   #   createTodo(input: {cardId: 8, title: "AaAaAaA", description: "aaaaaa"}) {
  #   #     id
  #   #     cardId
  #   #     title
  #   #     description
  #   #   }
      
  #   #   updateTodo(input: {id: 7, title: "aAaAaAa", description: "AaAaAaAa"}) {
  #   #     id
  #   #     cardId
  #   #     title
  #   #     description
  #   #   }
    
  #   #   destroyTodo(input: {id: 7}) {
  #   #     id
  #   #     cardId
  #   #     title
  #   #     description
  #   #   }
      
  #   #  	destroyCard(input: {id:8}){
  #   #     title
  #   # }
    
  #   }
end
