class Api::ProductsController < ApplicationController

  # before_action :set_product, only: %i[show edit update destroy]

  def index
    @products = Product.all
    # @products = Product.where(category: category) if category
    # Rails.logger.debug params.inspect
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])
    if @product
      render :show
    else
      render json: { errors: ['Product doesnt exist.'] },
        status: :unauthorized
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :category, :brand, :dimensions, :weight, :description)
  end


end
