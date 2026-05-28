import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../slices/AuthSlice";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, isAdmin } =
    useSelector((state) => state.Auth);

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(login(form));

  };

  useEffect(() => {

    if (isLoggedIn && isAdmin) {
      navigate("/addproduct");
    }

  }, [isLoggedIn, isAdmin, navigate]);

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
        padding: "20px"
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          padding: "40px 35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >

        {/* TITLE */}

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1e293b",
            fontSize: "2rem"
          }}
        >
          Admin Login
        </h2>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          {/* USERNAME */}

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}

            style={{
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "15px"
            }}
          />

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}

            style={{
              padding: "14px 18px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "15px"
            }}
          />

          {/* BUTTON */}

          <button
            type="submit"

            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;