class SessionsController < ApplicationController
  def create
   @user = User.find_by_credentials(
     params[:user][:username],
     params[:user][:password]
   )

   if @user
     login_user!(@user)
   else
     flash.now[:errors] = ["Invalid username or password"]
     render :new
   end
 end

  def new
    redirect_to root_url if current_user
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = SecureRandom.urlsafe_base64
    redirect_to new_session_url
  end
end
