EcoTrends::Application.routes.draw do

  get "comparison" => 'datastores#compare', as: :comparison
  get "testcharts" => 'search#test'
  resources :datastores
  get 'account' => 'accounts#index'
  put 'account/:id' => 'accounts#update'
  get 'login' => 'login#show'
  get 'reset_password' => 'login#edit'
  get 'reset/:token' => "registration#edit"
  put 'reset/:token' => "registration#update"
  post 'login' => 'login#create'
  put 'reset' => 'login#update'
  get 'logout' => 'login#destroy'
  match 'signup' => 'registration#new', via: :get
  post 'signup' => 'registration#create'

  get "splash/index"

  get "home/index"

  get "home/about"

  get "home/publications"

  get "home/synthesis"

  get "home/contact"

  get "home/glossary"

  get "home/infographics"

  get "home/datastore"

  get "home/search"

  get "home/test"

  get "home/comparison"

  get "home/dataset"

  get "home/graph"

  get "home/dataset2"

  get "policies" => "home#policies"

  post 'contact' => 'contact_us#create'

  get 'contact' =>  'contact_us#new'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  resources :search

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'splash#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
