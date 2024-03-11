class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])

    if @review
      render :show
    else
      render json: {errors: ['Review doesnt exist.']},
      status: :unauthorized
    end
  end






end
