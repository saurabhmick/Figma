<?php
include('navbar.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log In Form</title>
        <link href="./assests/css/style.css" rel="stylesheet" type="text/css"/>

</head>
<body>
    <div class="container-fluid mt-5  w-auto" >
        <div class="card  ">
            <div class="card-header ">
                <p class="m-2">Welcome To AD Technology</p>
                
            </div>
            <div class="card-body" >
                <form>
                    <label for="username">Enter Username or Email</label>
                    <input type="text" name="username" class="login_user py-2" required>
                    <label for="password">Enter Password</label>
                    <input type="password" name="password" class="login_pass py-2 password" required>
                    <input type="checkbox" onclick="passwordShow()" id="cbox"  >
                    <span id="passText">Show Password</span>
                    <input type="submit" value="Login" class="form-control  login_btn">
                </form>

            </div>
        </div>
    </div>
    
</body>
</html>
<script>
   
    </script>