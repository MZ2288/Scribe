class StaticPagesController < ApplicationController
  def root
    render :root if current_user
  end
end
