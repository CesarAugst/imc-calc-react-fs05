import "../App.css";

function NavegationBar() {
  return(
    <header>
        <div>
            <div>
                <nav>
                  <ul>
                    <li><a href="/">Home</a> </li>
                    <li><a href="/Imc">Calculate Imc</a> </li>
                    <li><a href="/ReactRouterDom">React Router</a> </li>

                  </ul>  
                </nav>
            </div>
        </div>
    </header>
  )
}

export default NavegationBar;