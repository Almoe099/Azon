Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'api/test', to: 'application#test'

  namespace :api, defaults: {format: :json} do
    # ...
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resource :reviews, only: [:index, :create, :update, :destroy]
    resources :carts, only: [:index, :show, :create, :update, :destroy]

    resources :products, only: [:index, :show] do
      collection do
        get 'search', to: 'products#search'
      end

    end

  end

  get '*path', to: "static_pages#frontend_index"

end
