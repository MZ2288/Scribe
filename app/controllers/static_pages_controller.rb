class StaticPagesController < ApplicationController
  def root
    if current_user
      render :root
    else
      render :splash
    end
  end
end
