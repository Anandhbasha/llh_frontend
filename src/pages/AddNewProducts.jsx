import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
const AddNewProducts = () => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    Title: "",
    Price: "",
    Category: "",
    type: "",
    Description: "",
    Image: null,
  });

  const [editPopup, setEditPopup] = useState(false);
  const [editData, setEditData] = useState(null);

  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
  };

  /* ================= CHANGE ================= */
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, Image: e.target.files[0] });
  };

  /* ================= ADD ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Title", product.Title);
    formData.append("Price", product.Price);
    formData.append("Category", product.Category);
    formData.append("type", product.type);
    formData.append("Description", product.Description);
    formData.append("Image", product.Image);

    await axios.post("http://localhost:5000/products", formData);

    setProduct({
      Title: "",
      Price: "",
      Category: "",
      type: "",
      Description: "",
      Image: null,
    });

    fetchProducts();
  };

  /* ================= EDIT ================= */
  const handleEditOpen = (item) => {
    setEditData(item);
    setEditPopup(true);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSave = async () => {
    const formData = new FormData();

    formData.append("Title", editData.Title);
    formData.append("Price", editData.Price);
    formData.append("Category", editData.Category);
    formData.append("type", editData.type);
    formData.append("Description", editData.Description);

    if (editData.Image instanceof File) {
      formData.append("Image", editData.Image);
    }

    await axios.put(`http://localhost:5000/products/${editData.id}`, formData);

    setEditPopup(false);
    fetchProducts();
  };

  /* ================= DELETE ================= */
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/products/${deleteId}`);
    setDeletePopup(false);
    fetchProducts();
  };

  /* ================= CATEGORIES ================= */
  const categories = [...new Set(products.map((p) => p.Category))];

  return (
    <div style={{ padding: 30, background: "#f4f6f8" }}>
      {/* ================= ADD FORM ================= */}
      <form onSubmit={handleSubmit} style={formBox}>
        <h1 style={{ textAlign: "center" }}>Add Product</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            name="Title"
            placeholder="Title"
            value={product.Title}
            onChange={handleChange}
            style={input}
          />

          <select
            name="Category"
            value={product.Category}
            onChange={handleChange}
            style={input}
          >
            <option>Select Category</option>
            {categories.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <input
            name="Price"
            placeholder="Price"
            value={product.Price}
            onChange={handleChange}
            style={input}
          />

          <input
            name="type"
            placeholder="Type"
            value={product.type}
            onChange={handleChange}
            style={input}
          />
        </div>

        <input type="file" onChange={handleFileChange} />

        <textarea
          name="Description"
          placeholder="Description"
          value={product.Description}
          onChange={handleChange}
          style={input}
        />

        <button style={btn}>Add Product</button>
      </form>

      {/* ================= TABLE ================= */}
      <table style={{ width: "100%", marginTop: 30, padding: "15px" }}>
        <thead>
          <tr style={{ padding: "15px" }}>
            <th>Img</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <img src={p.Image} width="50" />
              </td>
              <td>{p.Title}</td>
              <td>{p.Price}</td>
              <td>{p.Category}</td>
              <td>{p.type}</td>
              <td>
                <button
                  onClick={() => handleEditOpen(p)}
                  style={{ margin: "10px", backgroundColor: "skyblue" }}
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    setDeleteId(p.id);
                    setDeletePopup(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ================= EDIT ================= */}
{editPopup && (
  <div style={popup}>
    <div style={box}>

      <h2 style={popupTitle}>Edit Product</h2>

      {/* EXISTING IMAGE */}
      <div style={{ textAlign: "center" }}>
        <img
          src={
            editData.Image instanceof File
              ? URL.createObjectURL(editData.Image)
              : editData.Image
          }
          alt=""
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "12px",
            border: "2px solid #ddd",
            marginBottom: "10px",
          }}
        />
      </div>

      {/* TITLE */}
      <input
        name="Title"
        value={editData.Title}
        onChange={handleEditChange}
        placeholder="Product Title"
        style={input}
      />

      {/* PRICE */}
      <input
        name="Price"
        value={editData.Price}
        onChange={handleEditChange}
        placeholder="Price"
        style={input}
      />

      {/* CATEGORY */}
      <select
        name="Category"
        value={editData.Category}
        onChange={handleEditChange}
        style={input}
      >
        {categories.map((c, i) => (
          <option key={i}>{c}</option>
        ))}
      </select>

      {/* TYPE */}
      <input
        name="type"
        value={editData.type}
        onChange={handleEditChange}
        placeholder="Type"
        style={input}
      />

      {/* DESCRIPTION */}
      <textarea
        name="Description"
        value={editData.Description}
        onChange={handleEditChange}
        placeholder="Description"
        style={{
          ...input,
          minHeight: "100px",
          resize: "none",
        }}
      />

      {/* FILE */}
      <input
        type="file"
        onChange={(e) =>
          setEditData({
            ...editData,
            Image: e.target.files[0],
          })
        }
      />

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleEditSave}
          style={saveBtn}
        >
          Save Changes
        </button>

        <button
          onClick={() => setEditPopup(false)}
          style={cancelBtn}
        >
          Cancel
        </button>
      </div>

    </div>
  </div>
)}

      {/* ================= DELETE ================= */}
      {deletePopup && (
        <div style={popup}>
          <div style={box} >
            <h3>Delete?</h3>
            <div className="btnDel" style={{display:"flex",justifyContent:"space-around"}}>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setDeletePopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const input = {
  padding: "10px",
  margin: "5px",
  width: "100%",
  borderRadius: "12px",
  border: "1px solid #ccc",
  outline: "none",
};

const btn = {
  background: "green",
  color: "white",
  padding: 10,
  width: "100%",
};

const formBox = {
  marginTop: "50px",
  background: "white",
  padding: 20,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBottom: "50px",
};

const popup = {
  position: "fixed",
  top: "20vh",
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.45)",
  backdropFilter: "blur(4px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10000000999,
};

const box = {
  background: "#fff",
  padding: "30px",
  width: "600px",
  maxHeight: "90vh",
  overflowY: "auto",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  animation: "popup 0.3s ease",
};

const popupTitle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#222",
  textAlign: "center",
};

const popupText = {
  textAlign: "center",
  color: "#666",
  fontSize: "15px",
};

const saveBtn = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "15px",
};

const cancelBtn = {
  background: "#e5e7eb",
  color: "#111",
  border: "none",
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "15px",
};

const deleteBtn = {
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  width: "48%",
};

const noBtn = {
  background: "#d1d5db",
  color: "#111",
  border: "none",
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
  width: "48%",
};

export default AddNewProducts;
