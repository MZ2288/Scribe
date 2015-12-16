class Api::NotesController < ApplicationController
  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    @note.notebook_id = params[:notebook_id]
    @note.save
  end

  def destroy
  end

  def index
    @notebook = Notebook.find(params[:notebook_id])
    @notes = @notebook.notes
    render json: @notes 
  end

  def show
  end

  def update
  end

  private
  def note_params
    params.require(:note).permit(:title, :body)
  end
end
