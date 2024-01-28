import React from "react";

function Register(){
    return(
        <div class="container mt-5">
  <h1>Register</h1>

  <div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">

          
          <form action="/register" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password"/>
            </div>

            <div class="form-group">
              <label for="confirmpassword">Confirm Password</label>
              <input type="password" class="form-control" name="password"/>
            </div>
            <button type="submit" class="btn btn-dark">Register</button>
          </form>

        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card social-block">
        <div class="card-body">
          <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign Up with Google
          </a>
        </div>

        <div class="card-body">
          <a class="btn btn-block btn-social btn-facebook" href="/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign Up with Facebook
          </a>
        </div>
      </div>
    </div>

  </div>
</div>
    );
}
export default Register;