import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

    const [loginError, setLoginError] = useState('');

    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoginError('');


        // Sign in using email and pass
        signInUser(email, password)
            .then(() => {
                toast.success('Logged In Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                setLoginError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Logged In Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('failed to log in!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                toast.success('Logged In Successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('failed to log in!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

    return (
        <section className="min-h-screen flex justify-center items-center pt-10">
            <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h6 className="text-sm font-bold">Sign in with</h6>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button onClick={handleGithubSignIn} className="px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button"><img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github</button>
                            <button onClick={handleGoogleSignIn} className="px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button"><img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google </button>
                        </div>
                        <hr className="mt-6 border-b-1" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-center mb-3 font-bold">
                            <small>Or sign in with credentials</small>
                        </div>

                        {/* Form for login */}
                        <form onSubmit={handleSignIn}>
                            <div className="relative w-full mb-3"><label className="block uppercase text-xs font-bold mb-2">Email</label>
                                <input type="email" name="email" required className="border-0 px-3 py-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                            </div>
                            <div className="relative w-full mb-3"><label className="block uppercase text-xs font-bold mb-2">Password</label>
                                <input type="password" name="password" required className="border-0 px-3 py-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
                            </div>
                            <div className="text-center font-bold text-lg text-red-600">
                                <small>
                                    {loginError}
                                </small>
                            </div>
                            <div className="text-center mt-6">
                                <button className="text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Sign In </button>
                            </div>
                        </form>
                        <div className="text-center mb-3 font-bold text-lg">
                            <small>don&rsquo;t have an account? <Link className="text-[#ffb300] hover:link" to={'/register'}>register</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;