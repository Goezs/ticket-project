import "./Login.css";

function Login ()  {
   

    return (
        <main className="login">

            <section className="login-container">

                <h1>Welcome Back</h1>

                <p>
                    Sign in to buy and sell tickets securely on TicketHub.
                </p>

                {/*formulario*/}

                <form className="login-form">

                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        />

                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>

                        <input
                        type="password"
                        id="password"
                        placeholder="Enter your Password"
                        />

                    </div>
                    <button type="submit">
                        Sign In
                    </button>

                </form>

                {/*Pie: Mauro esto es para seguir trabajando para hacer funcinal el link por eso lo puse aquí */}

                <p className="register-link">
                    Don,t have an account?
                    <a href="#"> Create one</a>
                </p>

            </section>

        </main>

    );
};

export default Login;