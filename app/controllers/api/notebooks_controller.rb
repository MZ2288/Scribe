class Api::NotebooksController < ApplicationController
  def index
    @Notebooks = Notebook.all
  end

  def create
  end

  def show
  end

  def destroy
  end
end
