import styles from "./Auth.module.scss";
import registerImg from "../../assets/register.png"
import {Card} from "../../components"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { toast } from 'react-toastify';

import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/loader/Loader"


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] =useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword){
      toast.error("Passwords do not match.")
    }

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {    
      // const user = userCredential.user;
      // console.log(user);
      setIsLoading(false);
      toast.success("Registration successful.")
      navigate("/login")
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error.message)
    });

  } 

  return (
    <>    
    {isLoading && <Loader />}
    <section className={` container ${styles.auth}`}>      
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input type="email" placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="password" placeholder='Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="password" placeholder=' confirm Password' 
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
            />
            <button className="--btn --btn-primary --btn-block"
            type="submit">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <p>Already have an accouunt?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registerImg} alt="register" width="400px"/>
      </div>
    </section>
    </>
  )
}

export default Register
