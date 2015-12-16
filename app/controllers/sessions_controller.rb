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
    log_out!
    redirect_to root_url
  end
end
