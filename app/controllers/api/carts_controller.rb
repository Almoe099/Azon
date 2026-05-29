class Api::CartsController < ApplicationController

  wrap_parameters include: [:id, :quantity, :product_id, :user_id, :userId, :productId]

  def index
    @carts = []

    if current_user != nil
      @carts = current_user.carts
    end

    render :index
  end

  def show
    @cart = Cart.find_by(id: params[:id])

    if @cart
      render :show
    else
      render json: ['Cart not found'], status: :unprocessable_entity
    end
  end

  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render :show
    else
      render json: { errors: ['Cart exist.'] }, status: :unauthorized
    end
  end

  def update
    @cart = Cart.find(params[:id])

    if @cart.update(cart_params)
      render :show
    else
      render json: @cart.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @cart = Cart.find(params[:id])

    if @cart
      @cart.delete
      head :no_content
    else
      render json: ['Cart not found'], status: :unprocessable_entity
    end
  end

  private

  def cart_params
    params.require(:cart).permit(:id, :quantity, :product_id, :user_id)
  end

end