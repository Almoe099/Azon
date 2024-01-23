class Api::CartsController < ApplicationController

  wrap_parameters include: Cart.attribute_names + ['quantity', 'userId', 'productId']

  def index
    @carts = current_user.carts
    render :index
  end


  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render :show
    else
      render json: @cart.errors.full_messages
    end

  end


  def update

    @cart = Cart.find(params[:id])

    if @cart
      if @cart.update(cart_params)
        render :show
      else
        render json: @cart.errors.full_messages, status: unprocessable_entity
      end

    end
  end

  def destroy
    @cart = Cart.find(params[:id])

    if @cart
      @cart.delete
      head :no_content
    end
  end

  def cart_params
    params.require(:cart).permit(:id, :quantity, :product_id, :user_id)
  end

end
