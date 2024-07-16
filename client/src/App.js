import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="full-height">
    <center>
    <table border="0">
        <tr>
            <td width="80%">
                <font class="MediSched-logo">MediSched</font>
                <font class="MediSched-logo-sub">| THE CAPSTONE PROJECT</font>
            </td>
            <td width="10%">
               <a href="aboutus.php==="  class="non-style-link"><p class="nav-item">ABOUT US</p></a>
            </td>
            <td  width="10%">
                <a href="login.php" class="non-style-link"><p class="nav-item" style="padding-right: 10px;">AI SYMPTOM CHECKER</p></a>
            </td>
            <td  width="10%">
                <a href="login.php" class="non-style-link"><p class="nav-item" style="padding-right: 10px;">FIND DOCTOR</p></a>
            </td>
        </tr>
        
        <td  colspan="3">
            <p class="heading-text">Let’s find the right doctor for you!</p>
        </td>
    </tr>
    <tr>
        <td  colspan="3">
            <p class="sub-text2">Your health your choice. Find top rated doctors in your area<br> 
          
        </td>
    </tr>
        </tr>
        <tr>
            
            <td colspan="3">
                <center>
                <a href="login.php" >
                    <input type="button" value="LOGIN" class="login-btn btn-primary btn" style="padding-left: 25px;padding-right: 25px;padding-top: 10px;padding-bottom: 10px;">
                </a>
                <a href="signup.php" >
                    <input type="button" value="SIGN UP" class="signup-btn btn-primary btn" style="padding-left: 25px;padding-right: 25px;padding-top: 10px;padding-bottom: 10px;">
                </a>
            </center>
            </td>
            
        </tr>
        <tr>
            <td colspan="3">
               
            </td>
        </tr>
    </table>
    <p class="sub-text2 footer-TechSHEroes">A Web Solution by TechSHEroes</p>

</center>

</div>
  );
}

export default App;
